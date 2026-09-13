/**
 * Centralized event bus / pub-sub system for the cybersecurity wiki app.
 * Supports standard listeners, once-listeners, wildcard patterns, and data validation.
 * @module core/events
 */

/**
 * @typedef {(data: any) => void} EventCallback
 * @typedef {EventCallback & { __once?: boolean, __original?: EventCallback }} WrappedCallback
 */

export class EventBus {
  constructor() {
    /** @type {Map<string, Set<WrappedCallback>>} */
    this._listeners = new Map();

    /** @type {Map<string, Set<WrappedCallback>>} */
    this._wildcardListeners = new Map();

    /** @type {Map<string, (data: any) => boolean | null>} */
    this._validators = new Map();
  }

  /**
   * Subscribe to an event.
   * Supports wildcard patterns: 'article:*' matches 'article:opened', 'article:closed', etc.
   * @param {string} event - Event name or wildcard pattern.
   * @param {EventCallback} callback - Function called when the event fires.
   * @returns {() => void} Unsubscribe function.
   */
  on(event, callback) {
    if (typeof callback !== 'function') {
      throw new TypeError(`Expected a function as callback, got ${typeof callback}`);
    }

    const wrapped = /** @type {WrappedCallback} */ (callback);

    if (event.includes('*')) {
      if (!this._wildcardListeners.has(event)) {
        this._wildcardListeners.set(event, new Set());
      }
      this._wildcardListeners.get(event).add(wrapped);
    } else {
      if (!this._listeners.has(event)) {
        this._listeners.set(event, new Set());
      }
      this._listeners.get(event).add(wrapped);
    }

    return () => this.off(event, wrapped);
  }

  /**
   * Subscribe to an event once. The callback fires at most once then auto-removes.
   * @param {string} event - Event name or wildcard pattern.
   * @param {EventCallback} callback - Function called once when the event fires.
   * @returns {() => void} Unsubscribe function.
   */
  once(event, callback) {
    if (typeof callback !== 'function') {
      throw new TypeError(`Expected a function as callback, got ${typeof callback}`);
    }

    const wrapper = (data) => {
      this.off(event, wrapper);
      callback(data);
    };
    /** @type {WrappedCallback} */ (wrapper).__once = true;
    /** @type {WrappedCallback} */ (wrapper).__original = callback;

    return this.on(event, wrapper);
  }

  /**
   * Unsubscribe a callback from an event.
   * @param {string} event - Event name or wildcard pattern.
   * @param {EventCallback} callback - The original callback reference to remove.
   */
  off(event, callback) {
    const isWildcard = event.includes('*');
    const map = isWildcard ? this._wildcardListeners : this._listeners;
    const listeners = map.get(event);
    if (!listeners) return;

    for (const wrapped of listeners) {
      if (wrapped === callback || wrapped.__original === callback) {
        listeners.delete(wrapped);
        break;
      }
    }

    if (listeners.size === 0) {
      map.delete(event);
    }
  }

  /**
   * Remove all listeners for a given event, or all listeners entirely.
   * @param {string} [event] - Event name. If omitted, clears every event.
   */
  removeAllListeners(event) {
    if (event !== undefined) {
      this._listeners.delete(event);
      this._wildcardListeners.delete(event);
      return;
    }

    this._listeners.clear();
    this._wildcardListeners.clear();
  }

  /**
   * Emit an event with optional data.
   * Calls all direct listeners and any wildcard listeners whose pattern matches.
   * If a validator is registered for the event and it returns false, the emit is skipped.
   * @param {string} event - Event name to emit.
   * @param {*} [data] - Arbitrary data passed to listeners.
   * @returns {boolean} True if at least one listener was called.
   */
  emit(event, data) {
    const validator = this._validators.get(event);
    if (validator && !validator(data)) {
      return false;
    }

    let called = false;

    // Direct listeners
    const direct = this._listeners.get(event);
    if (direct) {
      for (const callback of [...direct]) {
        try {
          callback(data);
        } catch (err) {
          console.error(`[EventBus] Listener error for "${event}":`, err);
        }
        called = true;
      }
    }

    // Wildcard listeners
    for (const [pattern, listeners] of this._wildcardListeners) {
      if (this._matchWildcard(pattern, event)) {
        for (const callback of [...listeners]) {
          try {
            callback(data);
          } catch (err) {
            console.error(`[EventBus] Wildcard listener error for "${event}" (pattern: "${pattern}"):`, err);
          }
          called = true;
        }
      }
    }

    return called;
  }

  /**
   * Register a data validator for an event.
   * The validator receives the emitted data and must return truthy to allow emission.
   * @param {string} event - Event name to validate.
   * @param {(data: any) => boolean} validatorFn - Returns true to allow, false to block.
   */
  addValidator(event, validatorFn) {
    if (typeof validatorFn !== 'function') {
      throw new TypeError(`Expected a function as validator, got ${typeof validatorFn}`);
    }
    this._validators.set(event, validatorFn);
  }

  /**
   * Remove a previously registered validator for an event.
   * @param {string} event - Event name.
   */
  removeValidator(event) {
    this._validators.delete(event);
  }

  /**
   * Check whether a given event name matches a wildcard pattern.
   * The '*' token matches one or more characters within a segment.
   * @param {string} pattern - Wildcard pattern (e.g. 'article:*').
   * @param {string} event - Concrete event name (e.g. 'article:opened').
   * @returns {boolean}
   * @private
   */
  _matchWildcard(pattern, event) {
    const patternParts = pattern.split(':');
    const eventParts = event.split(':');

    if (patternParts.length !== eventParts.length) return false;

    for (let i = 0; i < patternParts.length; i++) {
      if (patternParts[i] === '*') continue;
      if (patternParts[i] !== eventParts[i]) return false;
    }

    return true;
  }

  /**
   * Return the number of listeners registered for a given event.
   * @param {string} event - Event name.
   * @returns {number}
   */
  listenerCount(event) {
    const direct = this._listeners.get(event)?.size ?? 0;
    let wildcard = 0;
    for (const [pattern, listeners] of this._wildcardListeners) {
      if (this._matchWildcard(pattern, event)) {
        wildcard += listeners.size;
      }
    }
    return direct + wildcard;
  }
}

/** @type {EventBus} */
const eventBus = new EventBus();
export { eventBus as events };
export default eventBus;

/**
 * All application events as named constants.
 * Use these instead of raw strings to avoid typos.
 */
export const EVENTS = {
  // Tab navigation
  TAB_CHANGED: 'tab:changed',

  // Articles
  ARTICLE_OPENED: 'article:opened',
  ARTICLE_CLOSED: 'article:closed',
  ARTICLES_RENDERED: 'articles:rendered',
  ARTICLE_FILTER_CHANGED: 'article:filter:changed',

  // Search
  SEARCH_QUERY_CHANGED: 'search:query:changed',
  SEARCH_RESULTS: 'search:results',

  // Chat
  CHAT_MESSAGE_SENT: 'chat:message:sent',
  CHAT_MESSAGE_RECEIVED: 'chat:message:received',
  CHAT_CONFIG_CHANGED: 'chat:config:changed',
  CHAT_STREAM_START: 'chat:stream:start',
  CHAT_STREAM_TOKEN: 'chat:stream:token',
  CHAT_STREAM_END: 'chat:stream:end',
  CHAT_STREAM_ERROR: 'chat:stream:error',

  // Bookmarks
  BOOKMARK_TOGGLED: 'bookmark:toggled',
  BOOKMARKS_CHANGED: 'bookmarks:changed',

  // History
  HISTORY_CHANGED: 'history:changed',

  // Sidebar
  SIDEBAR_TOGGLED: 'sidebar:toggled',

  // Theme
  THEME_CHANGED: 'theme:changed',

  // Quiz
  QUIZ_STARTED: 'quiz:started',
  QUIZ_ENDED: 'quiz:ended',
  QUIZ_ANSWER: 'quiz:answer',

  // Toast
  TOAST_SHOW: 'toast:show',

  // Modal
  MODAL_OPENED: 'modal:opened',
  MODAL_CLOSED: 'modal:closed',

  // Guides
  GUIDE_OPENED: 'guide:opened',
  GUIDE_CLOSED: 'guide:closed',

  // App lifecycle
  APP_READY: 'app:ready',
  APP_ERROR: 'app:error'
};
