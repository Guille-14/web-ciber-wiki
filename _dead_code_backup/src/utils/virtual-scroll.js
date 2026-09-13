/**
 * Virtual Scroll - Efficiently renders large lists by only creating DOM nodes
 * for visible items plus a buffer.
 * Supports single-column lists and multi-column grids with GPU-accelerated transforms.
 * @module utils/virtual-scroll
 */

/**
 * @typedef {Object} VirtualScrollOptions
 * @property {HTMLElement} container - Scrollable container element
 * @property {HTMLElement} content - Content element inside container
 * @property {Function} renderItem - Function(item, index) => HTML string
 * @property {Function} [renderSkeleton] - Function() => HTML string for loading state
 * @property {number} [itemHeight=80] - Estimated height of each item in pixels
 * @property {number} [buffer=5] - Number of items to render above/below viewport
 * @property {number} [columnCount=1] - Number of columns (for grid layouts)
 */

/**
 * @typedef {{ startIndex: number, endIndex: number, scrollTop: number }} ViewportInfo
 */

export class VirtualScroll {
  /**
   * @param {VirtualScrollOptions} options
   */
  constructor(options) {
    this.container = options.container;
    this.content = options.content;
    this.renderItem = options.renderItem;
    this.renderSkeleton = options.renderSkeleton || null;
    this.itemHeight = options.itemHeight || 80;
    this.buffer = options.buffer ?? 5;
    this.columnCount = options.columnCount || 1;

    /** @type {Array} */
    this.items = [];

    /** @type {Map<number, number>} index -> measured height override */
    this._heightOverrides = new Map();

    /** @type {Set<number>} indices currently rendered */
    this._renderedIndices = new Set();

    /** @type {IntersectionObserver | null} */
    this._observer = null;

    /** @type {HTMLElement | null} */
    this._sentinelTop = null;

    /** @type {HTMLElement | null} */
    this._sentinelBottom = null;

    /** @type {number} */
    this._scrollTop = 0;

    /** @type {number} */
    this._containerHeight = 0;

    /** @type {boolean} */
    this._isDestroyed = false;

    /** @type {Function | null} */
    this._onScroll = null;

    /** @type {Function | null} */
    this._onResize = null;

    /** @type {boolean} */
    this._scrollToEndFired = false;

    /** @type {number} */
    this._lastEndThreshold = 0.85;

    this._init();
  }

  /**
   * Initialize the virtual scroll: create sentinels, bind events, set up observer
   * @private
   */
  _init() {
    if (!this.container || !this.content) {
      throw new Error('VirtualScroll: container and content elements are required');
    }

    this.container.style.overflow = 'auto';
    this.container.style.position = 'relative';

    this.content.style.position = 'relative';
    this.content.style.willChange = 'transform';

    this._sentinelTop = document.createElement('div');
    this._sentinelTop.className = 'virtual-scroll-sentinel-top';
    this._sentinelTop.style.cssText = 'height:0;width:100%;overflow:hidden;position:absolute;top:0;left:0;pointer-events:none;';
    this.content.appendChild(this._sentinelTop);

    this._sentinelBottom = document.createElement('div');
    this._sentinelBottom.className = 'virtual-scroll-sentinel-bottom';
    this._sentinelBottom.style.cssText = 'height:0;width:100%;overflow:hidden;position:absolute;bottom:0;left:0;pointer-events:none;';
    this.content.appendChild(this._sentinelBottom);

    this._observer = new IntersectionObserver(
      (entries) => {
        if (this._isDestroyed) return;
        for (const entry of entries) {
          if (entry.target === this._sentinelBottom && entry.isIntersecting) {
            this._checkScrollToEnd();
          }
        }
      },
      { root: this.container, threshold: 0.1 }
    );

    this._observer.observe(this._sentinelBottom);

    this._onScroll = this._throttle(() => this._handleScroll(), 16);
    this._onResize = this._debounce(() => this.recalculate(), 150);

    this.container.addEventListener('scroll', this._onScroll, { passive: true });
    window.addEventListener('resize', this._onResize, { passive: true });

    this._measureContainer();
  }

  /**
   * Set the data array and re-render
   * @param {Array} items
   */
  setData(items) {
    if (this._isDestroyed) return;
    this.items = items || [];
    this._heightOverrides.clear();
    this._scrollToEndFired = false;
    this._measureContainer();
    this._render();
  }

  /**
   * Add more items (for infinite scroll / show more)
   * @param {Array} newItems
   */
  appendData(newItems) {
    if (this._isDestroyed || !newItems || !newItems.length) return;
    this.items = this.items.concat(newItems);
    this._scrollToEndFired = false;
    this._render();
  }

  /**
   * Clear all data
   */
  clear() {
    if (this._isDestroyed) return;
    this.items = [];
    this._heightOverrides.clear();
    this._renderedIndices.clear();
    this._scrollToEndFired = false;
    this.content.innerHTML = '';
    this.content.appendChild(this._sentinelTop);
    this.content.appendChild(this._sentinelBottom);
    this.content.style.height = '0px';
    this.content.style.transform = 'translate3d(0,0,0)';
  }

  /**
   * Recalculate dimensions and re-render
   */
  recalculate() {
    if (this._isDestroyed) return;
    this._measureContainer();
    this._render();
  }

  /**
   * Scroll to a specific item index
   * @param {number} index
   * @param {string} [behavior='smooth'] - 'auto' | 'smooth'
   */
  scrollToIndex(index, behavior = 'smooth') {
    if (this._isDestroyed) return;
    if (index < 0 || index >= this.items.length) return;

    const offset = this._getItemOffset(index);
    this.container.scrollTo({ top: offset, behavior });
  }

  /**
   * Get current scroll position info
   * @returns {ViewportInfo}
   */
  getViewportInfo() {
    const { startIndex, endIndex } = this._getVisibleRange();
    return {
      startIndex,
      endIndex,
      scrollTop: this._scrollTop,
    };
  }

  /**
   * Destroy the virtual scroll instance and cleanup
   */
  destroy() {
    if (this._isDestroyed) return;
    this._isDestroyed = true;

    if (this._observer) {
      this._observer.disconnect();
      this._observer = null;
    }

    if (this.container && this._onScroll) {
      this.container.removeEventListener('scroll', this._onScroll);
    }

    if (this._onResize) {
      window.removeEventListener('resize', this._onResize);
    }

    this._sentinelTop = null;
    this._sentinelBottom = null;
    this._onScroll = null;
    this._onResize = null;
    this.items = [];
    this._heightOverrides.clear();
    this._renderedIndices.clear();
  }

  /**
   * Update item height (for dynamic content)
   * @param {number} index
   * @param {number} height
   */
  updateItemHeight(index, height) {
    if (this._isDestroyed) return;
    if (index < 0 || index >= this.items.length) return;
    this._heightOverrides.set(index, height);
    this._render();
  }

  /**
   * Measure the container dimensions
   * @private
   */
  _measureContainer() {
    this._containerHeight = this.container.clientHeight;
  }

  /**
   * Get the height of a specific item (from override or default)
   * @param {number} index
   * @returns {number}
   * @private
   */
  _getItemHeight(index) {
    return this._heightOverrides.get(index) || this.itemHeight;
  }

  /**
   * Get the cumulative offset of an item index
   * @param {number} index
   * @returns {number}
   * @private
   */
  _getItemOffset(index) {
    let offset = 0;
    for (let i = 0; i < index; i++) {
      offset += this._getItemHeight(i);
    }
    return offset;
  }

  /**
   * Get total height of all items
   * @returns {number}
   * @private
   */
  _getTotalHeight() {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      total += this._getItemHeight(i);
    }
    return total;
  }

  /**
   * Calculate the visible range of items based on scroll position
   * @returns {{ startIndex: number, endIndex: number }}
   * @private
   */
  _getVisibleRange() {
    const scrollTop = this._scrollTop;
    const containerHeight = this._containerHeight;

    let accumulated = 0;
    let startIndex = 0;
    let endIndex = this.items.length - 1;

    for (let i = 0; i < this.items.length; i++) {
      const h = this._getItemHeight(i);
      if (accumulated + h > scrollTop) {
        startIndex = i;
        break;
      }
      accumulated += h;
      if (i === this.items.length - 1) {
        startIndex = this.items.length;
      }
    }

    let visibleHeight = 0;
    for (let i = startIndex; i < this.items.length; i++) {
      visibleHeight += this._getItemHeight(i);
      if (visibleHeight >= containerHeight) {
        endIndex = i;
        break;
      }
    }

    startIndex = Math.max(0, startIndex - this.buffer);
    endIndex = Math.min(this.items.length - 1, endIndex + this.buffer);

    return { startIndex, endIndex };
  }

  /**
   * Handle scroll events
   * @private
   */
  _handleScroll() {
    if (this._isDestroyed) return;
    this._scrollTop = this.container.scrollTop;
    this._measureContainer();
    this._render();
    this._checkScrollToEnd();
  }

  /**
   * Check if user scrolled near the end (for "show more" / infinite scroll)
   * @private
   */
  _checkScrollToEnd() {
    if (this._isDestroyed || this._scrollToEndFired || this.items.length === 0) return;

    const { scrollTop, scrollHeight, clientHeight } = this.container;
    if (scrollHeight <= clientHeight) return;

    const ratio = (scrollTop + clientHeight) / scrollHeight;
    if (ratio >= this._lastEndThreshold) {
      this._scrollToEndFired = true;
      this._emitScrollToEnd();
    }
  }

  /**
   * Emit scroll to end event via custom DOM event
   * @private
   */
  _emitScrollToEnd() {
    if (!this.container) return;
    const event = new CustomEvent('scrollToEnd', {
      bubbles: true,
      detail: { itemCount: this.items.length },
    });
    this.container.dispatchEvent(event);
  }

  /**
   * Render visible items into the content element
   * @private
   */
  _render() {
    if (this._isDestroyed || !this.content) return;

    const totalHeight = this._getTotalHeight();
    this.content.style.height = `${totalHeight}px`;

    if (this.items.length === 0) {
      this.content.innerHTML = '';
      this.content.appendChild(this._sentinelTop);
      this.content.appendChild(this._sentinelBottom);
      this.content.style.transform = 'translate3d(0,0,0)';
      this._renderedIndices.clear();
      return;
    }

    const { startIndex, endIndex } = this._getVisibleRange();

    const newRendered = new Set();
    for (let i = startIndex; i <= endIndex; i++) {
      newRendered.add(i);
    }

    for (const idx of this._renderedIndices) {
      if (!newRendered.has(idx)) {
        const el = this.content.querySelector(`[data-virtual-index="${idx}"]`);
        if (el) el.remove();
      }
    }

    const fragment = document.createDocumentFragment();
    const firstVisibleOffset = this._getItemOffset(startIndex);

    for (let i = startIndex; i <= endIndex; i++) {
      if (this._renderedIndices.has(i)) {
        const existing = this.content.querySelector(`[data-virtual-index="${i}"]`);
        if (existing) {
          const offset = this._getItemOffset(i) - firstVisibleOffset;
          existing.style.transform = `translate3d(0,${offset}px,0)`;
          fragment.appendChild(existing);
        }
        continue;
      }

      const wrapper = document.createElement('div');
      wrapper.setAttribute('data-virtual-index', String(i));
      wrapper.className = 'virtual-scroll-item';
      wrapper.style.cssText = `position:absolute;top:0;left:0;width:100%;will-change:transform;`;

      const offset = this._getItemHeight(i) * (i - startIndex);
      wrapper.style.transform = `translate3d(0,${offset}px,0)`;
      wrapper.style.height = `${this._getItemHeight(i)}px`;

      if (this.renderItem) {
        wrapper.innerHTML = this.renderItem(this.items[i], i);
      }

      fragment.appendChild(wrapper);
    }

    this.content.appendChild(fragment);
    this._renderedIndices = newRendered;
  }

  /**
   * Throttle helper
   * @param {Function} fn
   * @param {number} limit
   * @returns {Function}
   * @private
   */
  _throttle(fn, limit) {
    let waiting = false;
    let lastArgs = null;
    return (...args) => {
      if (!waiting) {
        fn(...args);
        waiting = true;
        requestAnimationFrame(() => {
          waiting = false;
          if (lastArgs) {
            fn(...lastArgs);
            lastArgs = null;
          }
        });
      } else {
        lastArgs = args;
      }
    };
  }

  /**
   * Debounce helper
   * @param {Function} fn
   * @param {number} delay
   * @returns {Function}
   * @private
   */
  _debounce(fn, delay) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }
}

export default VirtualScroll;
