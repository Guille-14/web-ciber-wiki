/**
 * DOM utility library for cybersecurity wiki app.
 * Safe, modern DOM manipulation helpers.
 * @module dom
 */

/**
 * Safe element selector
 * @param {string} id - Element ID
 * @returns {HTMLElement|null}
 */
export const $ = (id) => document.getElementById(id);

/**
 * Query selector shorthand
 * @param {string} selector
 * @param {HTMLElement} [parent=document]
 * @returns {HTMLElement|null}
 */
export const $$ = (selector, parent = document) => parent.querySelector(selector);

/**
 * Query all elements
 * @param {string} selector
 * @param {HTMLElement} [parent=document]
 * @returns {HTMLElement[]}
 */
export const $$All = (selector, parent = document) => [...parent.querySelectorAll(selector)];

/**
 * Create element with attributes and children
 * @param {string} tag
 * @param {Object} [attrs={}]
 * @param {Array} [children=[]]
 * @returns {HTMLElement}
 */
export const createElement = (tag, attrs = {}, children = []) => {
  const el = document.createElement(tag);
  if (attrs) setAttributes(el, attrs);
  for (const child of children) {
    if (typeof child === 'string') {
      el.appendChild(document.createTextNode(child));
    } else if (child instanceof Node) {
      el.appendChild(child);
    }
  }
  return el;
};

/**
 * Set multiple attributes on an element
 * @param {HTMLElement} el
 * @param {Object} attrs
 */
export const setAttributes = (el, attrs) => {
  if (!el || !attrs) return;
  for (const [key, value] of Object.entries(attrs)) {
    if (key === 'className' || key === 'class') {
      el.className = value;
    } else if (key === 'style' && typeof value === 'object') {
      Object.assign(el.style, value);
    } else if (key.startsWith('on') && typeof value === 'function') {
      el.addEventListener(key.slice(2).toLowerCase(), value);
    } else if (value === true) {
      el.setAttribute(key, '');
    } else if (value === false || value === null || value === undefined) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
  }
};

/**
 * Delegate event to parent
 * @param {HTMLElement} parent
 * @param {string} event
 * @param {string} selector
 * @param {Function} handler
 * @returns {Function} cleanup function
 */
export const delegate = (parent, event, selector, handler) => {
  const listener = (e) => {
    const target = e.target.closest(selector);
    if (target && parent.contains(target)) {
      handler.call(target, e, target);
    }
  };
  parent.addEventListener(event, listener);
  return () => parent.removeEventListener(event, listener);
};

/**
 * Debounce function
 * @param {Function} fn
 * @param {number} delay
 * @returns {Function}
 */
export const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

/**
 * Throttle function
 * @param {Function} fn
 * @param {number} limit
 * @returns {Function}
 */
export const throttle = (fn, limit) => {
  let inThrottle = false;
  let lastArgs = null;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
        if (lastArgs) {
          fn(...lastArgs);
          lastArgs = null;
        }
      }, limit);
    } else {
      lastArgs = args;
    }
  };
};

/**
 * Escape HTML string safely
 * @param {string} s
 * @returns {string}
 */
export const escapeHtml = (s) => {
  const str = String(s ?? '');
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;', '`': '&#96;', '/': '&#x2F;' };
  return str.replace(/[&<>"'`/]/g, (c) => map[c]);
};

/**
 * Copy text to clipboard
 * @param {string} text
 * @returns {Promise<boolean>}
 */
export const copyToClipboard = async (text) => {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(textarea);
    return ok;
  } catch {
    return false;
  }
};

/**
 * Show toast notification
 * @param {string} message
 * @param {string} [type='success']
 * @param {number} [duration=3000] - ms antes de ocultarse (antes se pasaba
 *   un tercer parámetro que se ignoraba por completo)
 */
export const showToast = (message, type = 'success', duration = 3000) => {
  const existing = document.querySelector('.toast-notification');
  if (existing) existing.remove();

  const toast = createElement('div', {
    className: `toast-notification toast-${escapeHtml(type)}`,
  }, [message]);

  document.body.appendChild(toast);
  requestAnimationFrame(() => {
    toast.classList.add('visible');
  });

  setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => toast.remove(), 300);
  }, Math.max(1000, duration));
};

/**
 * Show loading state on element
 * @param {HTMLElement} el
 * @param {boolean} loading
 */
export const setLoading = (el, loading) => {
  if (!el) return;
  if (loading) {
    el.setAttribute('aria-busy', 'true');
    el.classList.add('is-loading');
  } else {
    el.removeAttribute('aria-busy');
    el.classList.remove('is-loading');
  }
};

/**
 * Scroll to element smoothly
 * @param {HTMLElement} el
 * @param {Object} [options={}]
 */
export const scrollToElement = (el, options = {}) => {
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start', ...options });
};

/**
 * Check if element is in viewport
 * @param {HTMLElement} el
 * @returns {boolean}
 */
export const isInViewport = (el) => {
  if (!el) return false;
  const rect = el.getBoundingClientRect();
  return (
    rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom > 0 &&
    rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
    rect.right > 0
  );
};

/**
 * Wait for DOM ready
 * @returns {Promise<void>}
 */
export const ready = () => new Promise((resolve) => {
  if (document.readyState !== 'loading') {
    resolve();
  } else {
    document.addEventListener('DOMContentLoaded', resolve, { once: true });
  }
});

/**
 * Remove all children from element
 * @param {HTMLElement} el
 */
export const clearChildren = (el) => {
  if (!el) return;
  while (el.firstChild) el.removeChild(el.firstChild);
};
