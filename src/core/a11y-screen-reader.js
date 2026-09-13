import { events, EVENTS } from './events.js';

/**
 * Screen Reader Support - Live regions, announcements, ARIA updates
 */
export class ScreenReaderSupport {
  constructor() {
    this.announcer = null;
    this.initialized = false;
  }

  /**
   * Initialize screen reader support
   */
  init() {
    if (this.initialized) return;

    // Create live region for announcements
    this.createLiveRegion();

    // Set up ARIA updates for dynamic content
    this.setupAriaUpdates();

    // Listen for events to announce
    this.setupEventAnnouncements();

    this.initialized = true;
  }

  /**
   * Create ARIA live region for announcements
   */
  createLiveRegion() {
    // Check if already exists
    const existing = document.getElementById('sr-announcer');
    if (existing) {
      this.announcer = existing;
      return;
    }

    // Create polite announcer (waits for current speech to finish)
    this.announcer = document.createElement('div');
    this.announcer.id = 'sr-announcer';
    this.announcer.setAttribute('role', 'status');
    this.announcer.setAttribute('aria-live', 'polite');
    this.announcer.setAttribute('aria-atomic', 'true');
    this.announcer.className = 'sr-only';

    // Create assertive announcer (interrupts current speech)
    this.assertiveAnnouncer = document.createElement('div');
    this.assertiveAnnouncer.id = 'sr-announcer-assertive';
    this.assertiveAnnouncer.setAttribute('role', 'alert');
    this.assertiveAnnouncer.setAttribute('aria-live', 'assertive');
    this.assertiveAnnouncer.setAttribute('aria-atomic', 'true');
    this.assertiveAnnouncer.className = 'sr-only';

    document.body.appendChild(this.announcer);
    document.body.appendChild(this.assertiveAnnouncer);
  }

  /**
   * Announce a message to screen readers (polite)
   * @param {string} message
   * @param {number} [delay=100] - Delay before announcement
   */
  announce(message, delay = 100) {
    if (!this.announcer) return;

    // Clear first to ensure re-announcement
    this.announcer.textContent = '';

    setTimeout(() => {
      this.announcer.textContent = message;
    }, delay);
  }

  /**
   * Announce an urgent message (assertive)
   * @param {string} message
   */
  announceAssertive(message) {
    if (!this.assertiveAnnouncer) return;

    this.assertiveAnnouncer.textContent = '';
    setTimeout(() => {
      this.assertiveAnnouncer.textContent = message;
    }, 100);
  }

  /**
   * Set up ARIA updates for dynamic content
   */
  setupAriaUpdates() {
    // Update aria-busy on loading states
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const target = mutation.target;
          if (target.classList.contains('loading')) {
            target.setAttribute('aria-busy', 'true');
          } else {
            target.removeAttribute('aria-busy');
          }
        }
      });
    });

    // Observe main content area
    const mainContent = document.querySelector('.main-content') || document.querySelector('main');
    if (mainContent) {
      observer.observe(mainContent, { attributes: true, attributeFilter: ['class'] });
    }
  }

  /**
   * Set up event announcements
   */
  setupEventAnnouncements() {
    // Article opened
    events.on(EVENTS.ARTICLE_OPENED, (data) => {
      if (data.article) {
        this.announce(`Artículo abierto: ${data.article.title}`);
      }
    });

    // Article closed
    events.on(EVENTS.ARTICLE_CLOSED, () => {
      this.announce('Artículo cerrado');
    });

    // Tab changed
    events.on(EVENTS.TAB_CHANGED, (data) => {
      const tabNames = {
        articles: 'Artículos',
        owasp: 'OWASP Top 10',
        cheatsheets: 'Cheatsheets',
        glossary: 'Glosario',
        tags: 'Nube de Tags',
        bookmarks: 'Favoritos',
        history: 'Historial',
        chat: 'Chat IA',
        quiz: 'CiberQuiz',
        guides: 'Guías Visuales'
      };
      const tabName = tabNames[data.tab || data.newTab] || data.tab;
      this.announce(`Navegando a: ${tabName}`);
    });

    // Toast messages
    events.on(EVENTS.TOAST_SHOW, (data) => {
      if (data.message) {
        this.announce(data.message);
      }
    });

    // Bookmark toggled
    events.on(EVENTS.BOOKMARK_TOGGLED, (data) => {
      const action = data.bookmarked ? 'agregado a' : 'eliminado de';
      this.announce(`Artículo ${action} favoritos`);
    });

    // Search results
    events.on(EVENTS.SEARCH_RESULTS, (data) => {
      const count = data.results?.length || 0;
      this.announce(`${count} resultados encontrados`);
    });

    // Chat message
    events.on(EVENTS.CHAT_MESSAGE_RECEIVED, () => {
      this.announce('Nuevo mensaje del asistente');
    });
  }

  /**
   * Announce loading state
   * @param {string} elementId
   * @param {boolean} loading
   */
  announceLoading(elementId, loading) {
    const element = document.getElementById(elementId);
    if (element) {
      if (loading) {
        element.setAttribute('aria-busy', 'true');
        element.setAttribute('aria-label', 'Cargando...');
      } else {
        element.removeAttribute('aria-busy');
        element.removeAttribute('aria-label');
      }
    }
  }

  /**
   * Announce count update
   * @param {string} type - 'articles', 'results', etc.
   * @param {number} count
   */
  announceCount(type, count) {
    const typeNames = {
      articles: 'artículos',
      results: 'resultados',
      bookmarks: 'favoritos',
      history: 'entradas de historial',
      tags: 'tags',
      questions: 'preguntas'
    };
    const typeName = typeNames[type] || type;
    this.announce(`${count} ${typeName} disponibles`);
  }

  /**
   * Announce error
   * @param {string} message
   */
  announceError(message) {
    this.announceAssertive(`Error: ${message}`);
  }

  /**
   * Announce success
   * @param {string} message
   */
  announceSuccess(message) {
    this.announce(`Éxito: ${message}`);
  }

  /**
   * Create accessible label for element
   * @param {HTMLElement} element
   * @param {string} label
   */
  addAccessibleLabel(element, label) {
    if (element) {
      element.setAttribute('aria-label', label);
    }
  }

  /**
   * Create accessible description for element
   * @param {HTMLElement} element
   * @param {string} descriptionId
   */
  addAccessibleDescription(element, descriptionId) {
    if (element) {
      element.setAttribute('aria-describedby', descriptionId);
    }
  }

  /**
   * Mark element as hidden from screen readers
   * @param {HTMLElement} element
   */
  hideFromScreenReaders(element) {
    if (element) {
      element.setAttribute('aria-hidden', 'true');
    }
  }

  /**
   * Unhide element to screen readers
   * @param {HTMLElement} element
   */
  showToScreenReaders(element) {
    if (element) {
      element.removeAttribute('aria-hidden');
    }
  }

  /**
   * Set current page title for screen readers
   * @param {string} title
   */
  setPageTitle(title) {
    document.title = `${title} | CyberWiki Hub`;
  }

  /**
   * Destroy screen reader support
   */
  destroy() {
    if (this.announcer) this.announcer.remove();
    if (this.assertiveAnnouncer) this.assertiveAnnouncer.remove();
    this.initialized = false;
  }
}

// Export singleton
export const screenReader = new ScreenReaderSupport();
