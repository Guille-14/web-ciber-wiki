/**
 * @module core/storage
 * @description localStorage abstraction layer for the CyberWiki application.
 * Provides namespaced storage with automatic serialization, event-based
 * key watching, and graceful error handling.
 */

/** @type {string} */
const PREFIX = 'cyberwiki-';

/**
 * All application storage keys with their full prefixed names.
 * @readonly
 * @enum {string}
 */
export const STORAGE_KEYS = {
  THEME: 'cyberwiki-theme',
  BOOKMARKS: 'cyberwiki-bookmarks',
  HISTORY: 'cyberwiki-history',
  AOTD: 'cyberwiki-aotd',
  CHAT_CONFIG: 'cyberwiki-chat-config',
  CHAT_HISTORY: 'cyberwiki-chat-history',
  QUIZ_STATE: 'cqz_v2',
  FONT_SIZE: 'cyberwiki-font-size',
  SIDEBAR_STATE: 'cyberwiki-sidebar',
};

/** @type {Map<string, Set<Function>>} */
const listeners = new Map();

/**
 * @template T
 * Safely parse a JSON string.
 * @param {string} raw - The raw string from storage.
 * @param {T} defaultValue - Returned when parsing fails.
 * @returns {T}
 */
function safeParse(raw, defaultValue) {
  if (raw === null) return defaultValue;
  try {
    return JSON.parse(raw);
  } catch {
    return defaultValue;
  }
}

/**
 * @param {string} key
 * @returns {boolean}
 */
function isAppKey(key) {
  return key.startsWith(PREFIX);
}

/**
 * Notify all listeners attached to a key.
 * @param {string} key
 * @param {*} value
 */
function emit(key, value) {
  const cbs = listeners.get(key);
  if (cbs) {
    for (const cb of cbs) {
      try {
        cb(value, key);
      } catch {
        /* swallow listener errors */
      }
    }
  }
}

/**
 * localStorage abstraction with namespacing, serialization, and event support.
 *
 * @example
 * const storage = new Storage();
 * storage.set(STORAGE_KEYS.THEME, 'dark');
 * const theme = storage.get(STORAGE_KEYS.THEME, 'light');
 */
export class Storage {
  /** @type {string} */
  #namespace;

  /**
   * @param {object} [options]
   * @param {string} [options.namespace='cyberwiki-'] - Key prefix / namespace.
   */
  constructor({ namespace = PREFIX } = {}) {
    this.#namespace = namespace;
  }

  /* ------------------------------------------------------------------ */
  /*  Core API                                                           */
  /* ------------------------------------------------------------------ */

  /**
   * Retrieve a value from storage.
   * @template T
   * @param {string} key - Storage key.
   * @param {T} [defaultValue=null] - Fallback when key is missing or data is corrupted.
   * @returns {T}
   */
  get(key, defaultValue = null) {
    try {
      const raw = localStorage.getItem(key);
      if (raw === null) return defaultValue;
      return safeParse(raw, defaultValue);
    } catch {
      return defaultValue;
    }
  }

  /**
   * Persist a value to storage. Objects and arrays are JSON-serialized.
   * @param {string} key - Storage key.
   * @param {*} value - Value to store.
   * @returns {boolean} `true` on success, `false` on failure (e.g. quota exceeded).
   */
  set(key, value) {
    try {
      const serialized = JSON.stringify(value);
      localStorage.setItem(key, serialized);
      emit(key, value);
      return true;
    } catch (err) {
      if (err.name === 'QuotaExceededError') {
        try {
          this.#cleanup();
          const serialized = JSON.stringify(value);
          localStorage.setItem(key, serialized);
          emit(key, value);
          return true;
        } catch {
          console.error(`[Storage] Quota exceeded for key "${key}" even after cleanup`);
          return false;
        }
      }
      console.error(`[Storage] Failed to write key "${key}":`, err);
      return false;
    }
  }

  /**
   * Remove a single key from storage.
   * @param {string} key
   * @returns {boolean}
   */
  remove(key) {
    try {
      localStorage.removeItem(key);
      emit(key, undefined);
      return true;
    } catch (err) {
      if (err.name === 'QuotaExceededError') {
        console.error(`[Storage] Quota exceeded while removing key "${key}"`);
      } else {
        console.error(`[Storage] Failed to remove key "${key}":`, err);
      }
      return false;
    }
  }

  /**
   * Clean up ~30% of stored entries to free quota space.
   * History entries are removed first, then other non-essential keys.
   */
  #cleanup() {
    try {
      const keys = this.keys();
      const historyPattern = 'cyberwiki-history';
      const essential = new Set([
        STORAGE_KEYS.THEME,
        STORAGE_KEYS.BOOKMARKS,
        STORAGE_KEYS.FONT_SIZE,
        STORAGE_KEYS.SIDEBAR_STATE,
      ]);

      const historyKeys = keys
        .filter(k => k.startsWith(historyPattern))
        .sort();

      const nonEssential = keys
        .filter(k => !essential.has(k) && !k.startsWith(historyPattern))
        .sort();

      const removable = [...historyKeys, ...nonEssential];
      const removeCount = Math.max(1, Math.ceil(removable.length * 0.3));

      for (let i = 0; i < removeCount && i < removable.length; i++) {
        localStorage.removeItem(removable[i]);
      }
    } catch {
      /* swallow cleanup errors — best-effort */
    }
  }

  /**
   * Clear all keys that belong to this namespace (app-specific).
   * Keys from other origins or apps are left untouched.
   * @returns {boolean}
   */
  clear() {
    try {
      const toRemove = this.keys();
      for (const key of toRemove) {
        localStorage.removeItem(key);
      }
      for (const key of toRemove) {
        emit(key, undefined);
      }
      return true;
    } catch (err) {
      console.error('[Storage] Failed to clear storage:', err);
      return false;
    }
  }

  /**
   * Check whether a key exists in storage.
   * @param {string} key
   * @returns {boolean}
   */
  has(key) {
    try {
      return localStorage.getItem(key) !== null;
    } catch {
      return false;
    }
  }

  /**
   * List all keys belonging to this namespace.
   * @returns {string[]}
   */
  keys() {
    try {
      const result = [];
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k !== null && isAppKey(k)) {
          result.push(k);
        }
      }
      return result;
    } catch {
      return [];
    }
  }

  /* ------------------------------------------------------------------ */
  /*  Event system                                                       */
  /* ------------------------------------------------------------------ */

  /**
   * Register a callback that fires whenever a key is written via this instance.
   *
   * @param {string} key - The storage key to watch.
   * @param {(value: *, key: string) => void} callback - Invoked with the new value.
   * @returns {Function} Unsubscribe function — call it to stop watching.
   *
   * @example
   * const unsub = storage.onWrite(STORAGE_KEYS.THEME, (val) => {
   *   document.documentElement.dataset.theme = val;
   * });
   * // later: unsub();
   */
  onWrite(key, callback) {
    if (!listeners.has(key)) {
      listeners.set(key, new Set());
    }
    listeners.get(key).add(callback);

    return () => {
      const cbs = listeners.get(key);
      if (cbs) {
        cbs.delete(callback);
        if (cbs.size === 0) listeners.delete(key);
      }
    };
  }
}

/** Default singleton instance. */
export const storage = new Storage();
