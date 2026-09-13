import { state } from './state.js';
import { events, EVENTS } from './events.js';

/**
 * Keyboard Navigation - Full keyboard support for all UI elements
 */
export class KeyboardNavigation {
  constructor() {
    this.shortcuts = new Map();
    this.initialized = false;
  }

  /**
   * Initialize keyboard navigation
   */
  init() {
    if (this.initialized) return;

    // Register default shortcuts
    this.registerDefaultShortcuts();

    // Set up keyboard event listener
    this.setupKeyListener();

    // Set up arrow key navigation for lists
    this.setupListNavigation();

    // Set up escape key handling
    this.setupEscapeHandling();

    this.initialized = true;
  }

  /**
   * Register default keyboard shortcuts
   */
  registerDefaultShortcuts() {
    // Search
    this.register('/', 'Buscar', () => {
      const searchInput = document.getElementById('search-input');
      if (searchInput) {
        searchInput.focus();
        searchInput.select();
      }
    });

    // Bookmarks
    this.register('b', 'Favoritos', () => {
      window.switchTab?.('bookmarks');
    });

    // Home/Articles
    this.register('h', 'Inicio', () => {
      window.switchTab?.('articles');
    });

    // Chat
    this.register('c', 'Chat IA', () => {
      window.switchTab?.('chat');
    });

    // Quiz
    this.register('q', 'Quiz', () => {
      window.switchTab?.('quiz');
    });

    // Guides
    this.register('g', 'Guías', () => {
      window.switchTab?.('guides');
    });

    // Close modal/overlay
    this.register('Escape', 'Cerrar', () => {
      this.handleEscape();
    });

    // Help
    this.register('?', 'Ayuda', () => {
      this.showHelp();
    });

    // Presentation mode
    this.register('k', 'Presentación', () => {
      this.togglePresentationMode();
    });

    // Toggle theme
    this.register('t', 'Cambiar tema', () => {
      const themeToggle = document.getElementById('theme-toggle');
      if (themeToggle) themeToggle.click();
    });
  }

  /**
   * Register a keyboard shortcut
   * @param {string} key
   * @param {string} description
   * @param {Function} handler
   */
  register(key, description, handler) {
    this.shortcuts.set(key, { description, handler });
  }

  /**
   * Unregister a keyboard shortcut
   * @param {string} key
   */
  unregister(key) {
    this.shortcuts.delete(key);
  }

  /**
   * Set up keyboard event listener
   */
  setupKeyListener() {
    document.addEventListener('keydown', (e) => {
      // Don't trigger shortcuts when typing in inputs
      const activeTag = document.activeElement?.tagName;
      const isInput = activeTag === 'INPUT' || activeTag === 'TEXTAREA' ||
                      activeTag === 'SELECT' || document.activeElement?.isContentEditable;

      // Only trigger single-key shortcuts when not in input
      if (!isInput) {
        const shortcut = this.shortcuts.get(e.key);
        if (shortcut) {
          e.preventDefault();
          shortcut.handler(e);
          return;
        }
      }

      // Ctrl/Cmd + key shortcuts (work even in inputs)
      if (e.ctrlKey || e.metaKey) {
        const ctrlKey = `ctrl+${e.key}`;
        const shortcut = this.shortcuts.get(ctrlKey);
        if (shortcut) {
          e.preventDefault();
          shortcut.handler(e);
          return;
        }
      }
    });
  }

  /**
   * Set up arrow key navigation for lists
   */
  setupListNavigation() {
    document.addEventListener('keydown', (e) => {
      const target = e.target;

      // Handle arrow keys in lists (article grid, tag cloud, etc.)
      if (target.closest('.articles-grid, .tag-cloud, .glossary-grid, .owasp-grid')) {
        this.handleGridNavigation(e, target);
      }

      // Handle arrow keys in tabs
      if (target.getAttribute('role') === 'tab') {
        this.handleTabNavigation(e, target);
      }

      // Handle arrow keys in chat messages
      if (target.closest('.chat-messages-area')) {
        this.handleChatNavigation(e, target);
      }
    });
  }

  /**
   * Handle grid navigation with arrow keys
   * @param {KeyboardEvent} e
   * @param {HTMLElement} target
   */
  handleGridNavigation(e, target) {
    const grid = target.closest('.articles-grid, .tag-cloud, .glossary-grid, .owasp-grid');
    if (!grid) return;

    const items = Array.from(grid.querySelectorAll('[tabindex], a, button'));
    const currentIndex = items.indexOf(target);

    if (currentIndex === -1) return;

    let newIndex;
    const isGrid = grid.classList.contains('articles-grid');
    const columns = isGrid ? Math.floor(grid.offsetWidth / items[0]?.offsetWidth || 300) : 1;

    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault();
        newIndex = Math.min(currentIndex + 1, items.length - 1);
        break;

      case 'ArrowLeft':
        e.preventDefault();
        newIndex = Math.max(currentIndex - 1, 0);
        break;

      case 'ArrowDown':
        e.preventDefault();
        newIndex = Math.min(currentIndex + columns, items.length - 1);
        break;

      case 'ArrowUp':
        e.preventDefault();
        newIndex = Math.max(currentIndex - columns, 0);
        break;

      case 'Home':
        e.preventDefault();
        newIndex = 0;
        break;

      case 'End':
        e.preventDefault();
        newIndex = items.length - 1;
        break;

      default:
        return;
    }

    if (newIndex !== undefined && items[newIndex]) {
      items[newIndex].focus();
    }
  }

  /**
   * Handle tab navigation with arrow keys
   * @param {KeyboardEvent} e
   * @param {HTMLElement} target
   */
  handleTabNavigation(e, target) {
    const tablist = target.closest('[role="tablist"]');
    if (!tablist) return;

    const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
    const currentIndex = tabs.indexOf(target);

    let newIndex;

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        newIndex = (currentIndex + 1) % tabs.length;
        break;

      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        break;

      case 'Home':
        e.preventDefault();
        newIndex = 0;
        break;

      case 'End':
        e.preventDefault();
        newIndex = tabs.length - 1;
        break;

      default:
        return;
    }

    if (newIndex !== undefined && tabs[newIndex]) {
      tabs[newIndex].click();
      tabs[newIndex].focus();
    }
  }

  /**
   * Handle chat message navigation
   * @param {KeyboardEvent} e
   * @param {HTMLElement} target
   */
  handleChatNavigation(e, target) {
    const messages = Array.from(document.querySelectorAll('.chat-msg'));
    const currentIndex = messages.indexOf(target.closest('.chat-msg'));

    if (currentIndex === -1) return;

    let newIndex;

    switch (e.key) {
      case 'ArrowUp':
        if (document.activeElement === target) {
          e.preventDefault();
          newIndex = Math.max(currentIndex - 1, 0);
        }
        break;

      case 'ArrowDown':
        if (document.activeElement === target) {
          e.preventDefault();
          newIndex = Math.min(currentIndex + 1, messages.length - 1);
        }
        break;
    }

    if (newIndex !== undefined && messages[newIndex]) {
      messages[newIndex].setAttribute('tabindex', '-1');
      messages[newIndex].focus();
    }
  }

  /**
   * Set up escape key handling
   */
  setupEscapeHandling() {
    // Already handled in registerDefaultShortcuts
  }

  /**
   * Handle escape key press
   */
  handleEscape() {
    // Close article modal (usa clase .active, no style.display: la condición
    // antigua era siempre verdadera y emitía MODAL_CLOSED en cada Esc).
    const articleModal = document.getElementById('article-modal');
    if (articleModal && articleModal.classList.contains('active')) {
      events.emit(EVENTS.MODAL_CLOSED);
      return;
    }

    // Close chat settings modal (clase .active)
    const chatSettingsModal = document.getElementById('chat-settings-modal');
    if (chatSettingsModal && chatSettingsModal.classList.contains('active')) {
      chatSettingsModal.classList.remove('active');
      return;
    }

    // Close server edit modal (clase .active)
    const serverEditModal = document.getElementById('server-edit-modal');
    if (serverEditModal && serverEditModal.classList.contains('active')) {
      serverEditModal.classList.remove('active');
      return;
    }

    // Close guide modal (script legacy: usa style.display)
    const guideModal = document.getElementById('guide-modal');
    if (guideModal && guideModal.style.display === 'flex') {
      guideModal.style.display = 'none';
      document.body.style.overflow = '';
      return;
    }

    // Clear search
    const searchInput = document.getElementById('search-input');
    if (searchInput && document.activeElement === searchInput) {
      searchInput.value = '';
      searchInput.blur();
      events.emit(EVENTS.SEARCH_QUERY_CHANGED, { query: '' });
      return;
    }
  }

  /**
   * Show keyboard shortcuts help
   */
  showHelp() {
    const helpContent = `
      <div class="keyboard-help">
        <h3>Atajos de Teclado</h3>
        <div class="shortcut-list">
          <div class="shortcut-item"><kbd>/</kbd> <span>Buscar</span></div>
          <div class="shortcut-item"><kbd>B</kbd> <span>Favoritos</span></div>
          <div class="shortcut-item"><kbd>H</kbd> <span>Inicio</span></div>
          <div class="shortcut-item"><kbd>C</kbd> <span>Chat IA</span></div>
          <div class="shortcut-item"><kbd>Q</kbd> <span>Quiz</span></div>
          <div class="shortcut-item"><kbd>G</kbd> <span>Guías</span></div>
          <div class="shortcut-item"><kbd>T</kbd> <span>Cambiar tema</span></div>
          <div class="shortcut-item"><kbd>K</kbd> <span>Modo presentación</span></div>
          <div class="shortcut-item"><kbd>?</kbd> <span>Ayuda</span></div>
          <div class="shortcut-item"><kbd>ESC</kbd> <span>Cerrar</span></div>
          <div class="shortcut-item"><kbd>←→</kbd> <span>Navegar</span></div>
        </div>
      </div>
    `;

    // Create and show help modal
    let helpModal = document.getElementById('keyboard-help-modal');
    if (!helpModal) {
      helpModal = document.createElement('div');
      helpModal.id = 'keyboard-help-modal';
      helpModal.className = 'modal-overlay';
      helpModal.setAttribute('role', 'dialog');
      helpModal.setAttribute('aria-modal', 'true');
      helpModal.setAttribute('aria-labelledby', 'help-title');
      helpModal.innerHTML = `
        <div class="modal-content" style="max-width: 400px;">
          <div class="modal-header">
            <h2 id="help-title" class="modal-title">⌨️ Atajos de Teclado</h2>
            <button class="modal-close" aria-label="Cerrar">&times;</button>
          </div>
          <div class="modal-body" style="padding: 1.5rem;">
            ${helpContent}
          </div>
        </div>
      `;
      document.body.appendChild(helpModal);

      // Close handlers
      helpModal.querySelector('.modal-close').addEventListener('click', () => {
        helpModal.style.display = 'none';
      });
      helpModal.addEventListener('click', (e) => {
        if (e.target === helpModal) helpModal.style.display = 'none';
      });
    }

    helpModal.style.display = 'flex';
    helpModal.querySelector('.modal-close').focus();
  }

  /**
   * Toggle presentation mode
   */
  togglePresentationMode() {
    document.body.classList.toggle('presentation-mode');
    const isPresentation = document.body.classList.contains('presentation-mode');

    // Hide sidebar and header in presentation mode
    const sidebar = document.getElementById('sidebar');
    const header = document.querySelector('.content-header');

    if (sidebar) sidebar.style.display = isPresentation ? 'none' : '';
    if (header) header.style.display = isPresentation ? 'none' : '';
  }

  /**
   * Get all registered shortcuts
   * @returns {Array}
   */
  getShortcuts() {
    return Array.from(this.shortcuts.entries()).map(([key, { description }]) => ({
      key,
      description
    }));
  }

  /**
   * Destroy keyboard navigation
   */
  destroy() {
    this.shortcuts.clear();
    this.initialized = false;
  }
}

// Export singleton
export const keyboardNav = new KeyboardNavigation();
