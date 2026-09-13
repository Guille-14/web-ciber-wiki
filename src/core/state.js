const DEFAULT_STATE = {
  activeTab: 'articles',
  activeCategory: 'all',
  searchQuery: '',
  activeTag: '',
  fontSize: 14,
  currentArticleId: null,
  theme: 'system',
  chatHistory: [],
  chatConfig: {
    provider: 'ollama',
    ollamaServers: [],
    ollamaActiveServerId: null,
    ollamaModel: 'qwen2.5-coder:7b',
    geminiKey: '',
    geminiModel: 'gemini-2.0-flash',
    systemPrompt: 'Eres CyberWiki AI, un asistente experto en ciberseguridad.'
  },
  bookmarks: [],
  readingHistory: [],
  isGenerating: false
};

const PERSISTENT_KEYS = [
  'theme',
  'fontSize',
  'bookmarks',
  'readingHistory',
  'chatConfig',
  'chatHistory',
  'cyberwiki-progress',
  'recentSearches'
];

const STORAGE_PREFIX = 'cyberwiki:';

function cloneDeep(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.map(cloneDeep);
  const result = {};
  for (const key of Object.keys(obj)) {
    result[key] = cloneDeep(obj[key]);
  }
  return result;
}

function getByPath(obj, path) {
  const parts = path.split('.');
  let current = obj;
  for (const part of parts) {
    if (current === null || current === undefined) return undefined;
    current = current[part];
  }
  return current;
}

function setByPath(obj, path, value) {
  const parts = path.split('.');
  let current = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i];
    if (current[part] === undefined || current[part] === null || typeof current[part] !== 'object') {
      current[part] = {};
    }
    current = current[part];
  }
  current[parts[parts.length - 1]] = value;
}

function loadPersistedState() {
  const state = {};
  for (const key of PERSISTENT_KEYS) {
    try {
      const raw = localStorage.getItem(STORAGE_PREFIX + key);
      if (raw !== null) {
        state[key] = JSON.parse(raw);
      }
    } catch {
      // ignore corrupted data
    }
  }
  return state;
}

function persistState(state) {
  for (const key of PERSISTENT_KEYS) {
    try {
      localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(state[key]));
    } catch (err) {
      if (err.name === 'QuotaExceededError') {
        cleanupStorage();
        try {
          localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(state[key]));
        } catch {
          console.warn(`[State] Cannot persist "${key}" even after cleanup`);
        }
      }
    }
  }
}

/**
 * Emergency cleanup: remove oldest non-essential entries to free quota.
 */
function cleanupStorage() {
  try {
    const removable = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith(STORAGE_PREFIX) && !['cyberwiki:theme', 'cyberwiki:bookmarks'].includes(k)) {
        removable.push(k);
      }
    }
    removable.sort();
    const removeCount = Math.max(1, Math.ceil(removable.length * 0.3));
    for (let i = 0; i < removeCount; i++) {
      localStorage.removeItem(removable[i]);
    }
  } catch {
    /* best-effort */
  }
}

/**
 * Creates a reactive state manager with subscription, persistence, and batch support.
 *
 * @param {object} [initialOverrides] - Partial state to merge with defaults.
 * @returns {object} State manager API.
 */
export function createState(initialOverrides = {}) {
  let state = cloneDeep(DEFAULT_STATE);
  const persisted = loadPersistedState();
  for (const key of Object.keys(persisted)) {
    if (persisted[key] !== undefined) {
      state[key] = persisted[key];
    }
  }
  for (const key of Object.keys(initialOverrides)) {
    state[key] = initialOverrides[key];
  }

  const listeners = new Set();
  let batching = false;
  let pendingChanges = [];

  function emit(changes) {
    for (const fn of listeners) {
      try {
        fn(changes);
      } catch (err) {
        console.error('[state] listener error:', err);
      }
    }
  }

  function notify(path, oldVal, newVal) {
    if (batching) {
      pendingChanges.push({ path, oldValue: oldVal, newValue: newVal });
    } else {
      emit([{ path, oldValue: oldVal, newValue: newVal }]);
    }
  }

  const api = {
    /**
     * Returns a deep clone of the entire state.
     * @returns {object}
     */
    getAll() {
      return cloneDeep(state);
    },

    /**
     * Gets a value by dot-separated path. Returns undefined if path does not exist.
     * @param {string} path - e.g. 'chatConfig.provider'
     * @returns {*}
     */
    get(path) {
      if (!path) return cloneDeep(state);
      return getByPath(state, path);
    },

    /**
     * Sets a value at the given dot-separated path and emits a change event.
     * @param {string} path - e.g. 'chatConfig.geminiKey'
     * @param {*} value
     */
    set(path, value) {
      const oldValue = getByPath(state, path);
      setByPath(state, path, value);
      notify(path, oldValue, value);
      persistState(state);
    },

    /**
     * Merges multiple key-value pairs at once.
     * @param {object} updates - Map of paths to new values.
     */
    update(updates) {
      for (const path of Object.keys(updates)) {
        const oldValue = getByPath(state, path);
        setByPath(state, path, updates[path]);
        if (!batching) {
          pendingChanges.push({ path, oldValue, newValue: updates[path] });
        }
      }
      if (!batching) {
        emit(pendingChanges);
        pendingChanges = [];
      }
      persistState(state);
    },

    /**
     * Subscribes to state changes. Returns an unsubscribe function.
     * @param {function} fn - Callback receiving an array of {path, oldValue, newValue}.
     * @returns {function} Unsubscribe.
     */
    subscribe(fn) {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },

    /**
     * Batches multiple state changes, emitting a single event at the end.
     * @param {function} fn - Function that performs state mutations.
     */
    batch(fn) {
      if (batching) {
        fn();
        return;
      }
      batching = true;
      pendingChanges = [];
      try {
        fn();
      } finally {
        batching = false;
        if (pendingChanges.length > 0) {
          emit(pendingChanges);
          pendingChanges = [];
        }
        persistState(state);
      }
    },

    /**
     * Completely resets state to defaults, preserving any persisted keys
     * that are still valid. Emits change events for every key that changed.
     */
    reset() {
      const fresh = cloneDeep(DEFAULT_STATE);
      const changes = [];
      for (const key of Object.keys(state)) {
        if (JSON.stringify(state[key]) !== JSON.stringify(fresh[key])) {
          changes.push({ path: key, oldValue: state[key], newValue: fresh[key] });
        }
      }
      state = fresh;
      if (changes.length > 0) emit(changes);
      persistState(state);
    },

    /**
     * Subscribes to changes on a specific path only.
     * @param {string} path - Dot-separated state path.
     * @param {function} fn - Callback receiving (newValue, oldValue).
     * @returns {function} Unsubscribe.
     */
    watch(path, fn) {
      return api.subscribe((changes) => {
        for (const change of changes) {
          if (change.path === path) {
            fn(change.newValue, change.oldValue);
            return;
          }
        }
      });
    }
  };

  return api;
}

/** Default singleton instance. */
export const state = createState();

export default createState;
