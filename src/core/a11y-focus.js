import { events, EVENTS } from './events.js';

/**
 * Focus Manager - Handles focus trapping, focus visible, skip-to-content
 */
export class FocusManager {
  constructor() {
    this.focusTrapStack = [];
    /** @type {HTMLElement[]} Stack of previously focused elements for nested traps */
    this.previousFocusStack = [];
    this.initialized = false;
  }

  /**
   * Initialize focus manager
   */
  init() {
    if (this.initialized) return;

    // Add skip-to-content link
    this.addSkipToContent();

    // Set up focus visible detection
    this.initFocusVisible();

    // Set up keyboard focus detection
    this.initKeyboardDetection();

    // Listen for modal open/close
    events.on(EVENTS.MODAL_OPENED, () => this.onModalOpen());
    events.on(EVENTS.MODAL_CLOSED, () => this.onModalClose());

    this.initialized = true;
  }

  /**
   * Add skip-to-content link
   */
  addSkipToContent() {
    const existing = document.getElementById('skip-to-content');
    if (existing) return;

    const skipLink = document.createElement('a');
    skipLink.id = 'skip-to-content';
    skipLink.href = '#main-content';
    skipLink.className = 'skip-to-content';
    skipLink.textContent = 'Saltar al contenido principal';
    skipLink.setAttribute('tabindex', '0');

    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      const mainContent = document.querySelector('.main-content') || document.querySelector('main');
      if (mainContent) {
        mainContent.setAttribute('tabindex', '-1');
        mainContent.focus();
        mainContent.removeAttribute('tabindex');
      }
    });

    document.body.insertBefore(skipLink, document.body.firstChild);
  }

  /**
   * Initialize focus visible detection
   * Adds :focus-visible class to body when keyboard is used
   */
  initFocusVisible() {
    // Detect keyboard vs mouse navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-nav');
    });

    // Handle focus visible on interactive elements
    document.addEventListener('focusin', (e) => {
      if (document.body.classList.contains('keyboard-nav')) {
        e.target.classList.add('focus-visible');
      }
    });

    document.addEventListener('focusout', (e) => {
      e.target.classList.remove('focus-visible');
    });
  }

  /**
   * Initialize keyboard detection for tab navigation
   */
  initKeyboardDetection() {
    // Roving tabindex for tab panels
    const tabLists = document.querySelectorAll('[role="tablist"]');
    tabLists.forEach(tabList => {
      const tabs = Array.from(tabList.querySelectorAll('[role="tab"]'));

      tabList.addEventListener('keydown', (e) => {
        const currentIndex = tabs.indexOf(document.activeElement);
        let newIndex;

        switch (e.key) {
          case 'ArrowRight':
          case 'ArrowDown':
            e.preventDefault();
            newIndex = (currentIndex + 1) % tabs.length;
            this.moveFocus(tabs[newIndex]);
            break;

          case 'ArrowLeft':
          case 'ArrowUp':
            e.preventDefault();
            newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
            this.moveFocus(tabs[newIndex]);
            break;

          case 'Home':
            e.preventDefault();
            this.moveFocus(tabs[0]);
            break;

          case 'End':
            e.preventDefault();
            this.moveFocus(tabs[tabs.length - 1]);
            break;
        }
      });
    });
  }

  /**
   * Move focus to an element
   * @param {HTMLElement} element
   */
  moveFocus(element) {
    if (element) {
      element.setAttribute('tabindex', '-1');
      element.focus();
      element.removeAttribute('tabindex');
    }
  }

  /**
   * Create a focus trap
   * @param {HTMLElement} container - Container to trap focus within
   * @returns {Function} Release function
   */
  trapFocus(container) {
    const focusableElements = this.getFocusableElements(container);
    if (focusableElements.length === 0) return () => {};

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Store current focus on stack (supports nested traps)
    this.previousFocusStack.push(document.activeElement);
    this.focusTrapStack.push(container);

    // Focus first element
    firstElement.focus();

    // Handle tab key
    const handleKeyDown = (e) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    container.addEventListener('keydown', handleKeyDown);

    // Add aria attributes
    container.setAttribute('aria-modal', 'true');
    container.setAttribute('role', 'dialog');

    // Return release function
    return () => {
      container.removeEventListener('keydown', handleKeyDown);
      this.focusTrapStack.pop();

      // Restore previous focus from stack
      const prev = this.previousFocusStack.pop();
      if (prev && prev.focus) {
        prev.focus();
      }
    };
  }

  /**
   * Get all focusable elements within a container
   * @param {HTMLElement} container
   * @returns {HTMLElement[]}
   */
  getFocusableElements(container) {
    const selector = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled]):not([type="hidden"])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable]'
    ].join(', ');

    return Array.from(container.querySelectorAll(selector))
      .filter(el => {
        return el.offsetParent !== null && // Not hidden
               !el.hasAttribute('disabled') &&
               !el.hasAttribute('aria-hidden');
      });
  }

  /**
   * Handle modal open - trap focus
   */
  onModalOpen() {
    const modal = document.querySelector('.modal-overlay.active');

    if (modal) {
      const content = modal.querySelector('.modal-content');
      if (content) {
        this.releaseFocusTrap = this.trapFocus(content);
      }
    }
  }

  /**
   * Handle modal close - release focus trap
   */
  onModalClose() {
    if (this.releaseFocusTrap) {
      this.releaseFocusTrap();
      this.releaseFocusTrap = null;
    }
  }

  /**
   * Manage focus for tab switching
   * @param {string} tabId
   */
  manageTabFocus(tabId) {
    const tab = document.querySelector(`[data-tab="${tabId}"]`);
    const section = document.getElementById(`${tabId}-section`);

    if (tab) {
      // Update aria-selected
      document.querySelectorAll('[role="tab"]').forEach(t => {
        t.setAttribute('aria-selected', 'false');
        t.setAttribute('tabindex', '-1');
      });
      tab.setAttribute('aria-selected', 'true');
      tab.setAttribute('tabindex', '0');
    }

    if (section) {
      // Make section focusable for screen readers
      section.setAttribute('tabindex', '-1');
    }
  }

  /**
   * Announce page change to screen readers
   * @param {string} message
   */
  announcePageChange(message) {
    const announcer = document.getElementById('sr-announcer');
    if (announcer) {
      announcer.textContent = message;
      // Clear after announcement
      setTimeout(() => {
        announcer.textContent = '';
      }, 1000);
    }
  }

  /**
   * Release all focus traps safely
   */
  releaseAllTraps() {
    // Release any active modal trap first
    if (typeof this.releaseFocusTrap === 'function') {
      this.releaseFocusTrap();
      this.releaseFocusTrap = null;
    }
    // Clear any remaining stacks
    this.focusTrapStack = [];
    this.previousFocusStack = [];
  }

  /**
   * Destroy focus manager
   */
  destroy() {
    this.releaseAllTraps();
    const skipLink = document.getElementById('skip-to-content');
    if (skipLink) skipLink.remove();
    this.initialized = false;
  }
}

// Export singleton
export const focusManager = new FocusManager();
