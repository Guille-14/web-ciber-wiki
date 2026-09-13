/**
 * @module core/cache
 * @description Intelligent caching system with LRU eviction for CyberWiki.
 * Provides a generic LRU cache with TTL support and a specialized article cache.
 */

/**
 * LRU Cache with TTL (Time-To-Live) support.
 *
 * Maintains a doubly-linked list for O(1) access tracking and eviction.
 * Expired entries are lazily removed on access or eagerly on insertion.
 */
export class LRUCache {
  /** @type {number} */
  #maxSize;
  /** @type {number} */
  #defaultTTL;
  /** @type {boolean} */
  #persistToStorage;
  /** @type {string} */
  #storageKey;
  /** @type {Map<string, { value: *, expires: number | null, prev: string | null, next: string | null }>} */
  #map;
  /** @type {string | null} */
  #head;
  /** @type {string | null} */
  #tail;
  /** @type {number} */
  #hits;
  /** @type {number} */
  #misses;

  /**
   * @param {Object} options
   * @param {number} [options.maxSize=100] - Maximum number of entries.
   * @param {number} [options.defaultTTL=300000] - Default TTL in milliseconds (5 min).
   * @param {boolean} [options.persistToStorage=false] - Whether to persist to localStorage.
   * @param {string} [options.storageKey='cyberwiki-cache'] - localStorage key prefix.
   */
  constructor(options = {}) {
    this.#maxSize = options.maxSize ?? 100;
    this.#defaultTTL = options.defaultTTL ?? 5 * 60 * 1000;
    this.#persistToStorage = options.persistToStorage ?? false;
    this.#storageKey = options.storageKey ?? 'cyberwiki-cache';
    this.#map = new Map();
    this.#head = null;
    this.#tail = null;
    this.#hits = 0;
    this.#misses = 0;

    if (this.#persistToStorage) {
      this.#loadFromStorage();
    }
  }

  /* ------------------------------------------------------------------ */
  /*  Doubly-linked list helpers                                         */
  /* ------------------------------------------------------------------ */

  /** @private */
  #moveToFront(key) {
    if (this.#head === key) return;
    const node = this.#map.get(key);
    if (!node) return;

    // Detach
    if (node.prev !== null) {
      this.#map.get(node.prev).next = node.next;
    } else {
      this.#head = node.next;
    }
    if (node.next !== null) {
      this.#map.get(node.next).prev = node.prev;
    } else {
      this.#tail = node.prev;
    }

    // Insert at front
    node.prev = null;
    node.next = this.#head;
    if (this.#head !== null) {
      this.#map.get(this.#head).prev = key;
    }
    this.#head = key;
    if (this.#tail === null) {
      this.#tail = key;
    }
  }

  /** @private Insert new key at head (MRU position) */
  #append(key) {
    const node = this.#map.get(key);
    if (!node) return;

    node.prev = null;
    node.next = this.#head;
    if (this.#head !== null) {
      this.#map.get(this.#head).prev = key;
    }
    this.#head = key;
    if (this.#tail === null) {
      this.#tail = key;
    }
  }

  /** @private */
  #removeNode(key) {
    const node = this.#map.get(key);
    if (!node) return;

    if (node.prev !== null) {
      this.#map.get(node.prev).next = node.next;
    } else {
      this.#head = node.next;
    }
    if (node.next !== null) {
      this.#map.get(node.next).prev = node.prev;
    } else {
      this.#tail = node.prev;
    }
    this.#map.delete(key);
  }

  /** @private */
  #evict() {
    if (this.#tail === null) return;
    const evicted = this.#tail;
    this.#removeNode(evicted);
  }

  /** @private */
  #isExpired(key) {
    const node = this.#map.get(key);
    if (!node) return true;
    if (node.expires === null) return false;
    return Date.now() > node.expires;
  }

  /* ------------------------------------------------------------------ */
  /*  Storage persistence                                                */
  /* ------------------------------------------------------------------ */

  /** @private */
  #loadFromStorage() {
    try {
      const raw = localStorage.getItem(this.#storageKey);
      if (!raw) return;
      const entries = JSON.parse(raw);
      if (!Array.isArray(entries)) return;
      for (const entry of entries) {
        if (entry && entry.key !== undefined) {
          if (entry.expires && Date.now() > entry.expires) continue;
          this.#map.set(entry.key, {
            value: entry.value,
            expires: entry.expires ?? null,
            prev: null,
            next: null,
          });
          this.#append(entry.key);
        }
      }
    } catch {
      // corrupted data — start fresh
    }
  }

  /** @private */
  #saveToStorage() {
    if (!this.#persistToStorage) return;
    try {
      const entries = [];
      let current = this.#head;
      while (current !== null) {
        const node = this.#map.get(current);
        if (node && (node.expires === null || Date.now() <= node.expires)) {
          entries.push({ key: current, value: node.value, expires: node.expires });
        }
        current = node?.next ?? null;
      }
      localStorage.setItem(this.#storageKey, JSON.stringify(entries));
    } catch {
      // storage full or unavailable
    }
  }

  /* ------------------------------------------------------------------ */
  /*  Public API                                                         */
  /* ------------------------------------------------------------------ */

  /**
   * Get value from cache.
   * Moves the entry to the front of the LRU list.
   * @param {string} key
   * @returns {*} Value or undefined if not found/expired.
   */
  get(key) {
    if (!this.#map.has(key) || this.#isExpired(key)) {
      if (this.#map.has(key)) {
        this.#removeNode(key);
        this.#saveToStorage();
      }
      this.#misses++;
      return undefined;
    }
    this.#hits++;
    this.#moveToFront(key);
    return this.#map.get(key).value;
  }

  /**
   * Set value in cache.
   * If the key exists, it is updated and moved to front.
   * If the cache is full, the least recently used entry is evicted.
   * @param {string} key
   * @param {*} value
   * @param {number} [ttl] - Custom TTL in milliseconds (falls back to defaultTTL).
   */
  set(key, value, ttl) {
    const effectiveTTL = ttl ?? this.#defaultTTL;
    const expires = effectiveTTL > 0 ? Date.now() + effectiveTTL : null;

    if (this.#map.has(key)) {
      const node = this.#map.get(key);
      node.value = value;
      node.expires = expires;
      this.#moveToFront(key);
    } else {
      if (this.#map.size >= this.#maxSize) {
        this.#evict();
      }
      this.#map.set(key, { value, expires, prev: null, next: null });
      this.#append(key);
    }
    this.#saveToStorage();
  }

  /**
   * Check if key exists and is not expired.
   * @param {string} key
   * @returns {boolean}
   */
  has(key) {
    if (!this.#map.has(key)) return false;
    if (this.#isExpired(key)) {
      this.#removeNode(key);
      this.#saveToStorage();
      return false;
    }
    return true;
  }

  /**
   * Delete a specific key.
   * @param {string} key
   */
  delete(key) {
    if (this.#map.has(key)) {
      this.#removeNode(key);
      this.#saveToStorage();
    }
  }

  /**
   * Clear all cache entries.
   */
  clear() {
    this.#map.clear();
    this.#head = null;
    this.#tail = null;
    this.#hits = 0;
    this.#misses = 0;
    if (this.#persistToStorage) {
      try {
        localStorage.removeItem(this.#storageKey);
      } catch {
        // ignore
      }
    }
  }

  /**
   * Get cache size.
   * @returns {number}
   */
  get size() {
    return this.#map.size;
  }

  /**
   * Get all keys in LRU order (most recently used first).
   * @returns {string[]}
   */
  keys() {
    const result = [];
    let current = this.#head;
    while (current !== null) {
      if (!this.#isExpired(current)) {
        result.push(current);
      }
      const node = this.#map.get(current);
      current = node?.next ?? null;
    }
    return result;
  }

  /**
   * Get cache stats.
   * @returns {{ hits: number, misses: number, size: number, hitRate: number }}
   */
  getStats() {
    const total = this.#hits + this.#misses;
    return {
      hits: this.#hits,
      misses: this.#misses,
      size: this.#map.size,
      hitRate: total > 0 ? this.#hits / total : 0,
    };
  }

  /**
   * Destroy cache and cleanup.
   */
  destroy() {
    this.clear();
  }
}

/* ------------------------------------------------------------------ */
/*  Article Cache – Specialized cache for article data                 */
/* ------------------------------------------------------------------ */

/**
 * Article Cache — specialized cache for article data.
 * Internally uses separate LRUCache instances for different data types.
 */
export class ArticleCache {
  /** @type {LRUCache} */
  #searchCache;
  /** @type {LRUCache} */
  #readTimeCache;
  /** @type {LRUCache} */
  #ragCache;
  /** @type {LRUCache} */
  #relatedCache;

  constructor() {
    this.#searchCache = new LRUCache({ maxSize: 50, defaultTTL: 5 * 60 * 1000 });
    this.#readTimeCache = new LRUCache({ maxSize: 200, defaultTTL: 30 * 60 * 1000 });
    this.#ragCache = new LRUCache({ maxSize: 30, defaultTTL: 10 * 60 * 1000 });
    this.#relatedCache = new LRUCache({ maxSize: 100, defaultTTL: 15 * 60 * 1000 });
  }

  /**
   * Cache search results.
   * @param {string} query
   * @param {Array} results
   */
  cacheSearchResults(query, results) {
    this.#searchCache.set(query, results);
  }

  /**
   * Get cached search results.
   * @param {string} query
   * @returns {Array|null}
   */
  getSearchResults(query) {
    return this.#searchCache.get(query) ?? null;
  }

  /**
   * Cache article read time.
   * @param {string} articleId
   * @param {number} readTime
   */
  cacheReadTime(articleId, readTime) {
    this.#readTimeCache.set(articleId, readTime);
  }

  /**
   * Get cached read time.
   * @param {string} articleId
   * @returns {number|null}
   */
  getReadTime(articleId) {
    return this.#readTimeCache.get(articleId) ?? null;
  }

  /**
   * Cache RAG results.
   * @param {string} query
   * @param {Array} results
   */
  cacheRAGResults(query, results) {
    this.#ragCache.set(query, results);
  }

  /**
   * Get cached RAG results.
   * @param {string} query
   * @returns {Array|null}
   */
  getRAGResults(query) {
    return this.#ragCache.get(query) ?? null;
  }

  /**
   * Cache related articles.
   * @param {string} articleId
   * @param {Array} related
   */
  cacheRelatedArticles(articleId, related) {
    this.#relatedCache.set(articleId, related);
  }

  /**
   * Get cached related articles.
   * @param {string} articleId
   * @returns {Array|null}
   */
  getRelatedArticles(articleId) {
    return this.#relatedCache.get(articleId) ?? null;
  }

  /**
   * Clear all article caches.
   */
  clear() {
    this.#searchCache.clear();
    this.#readTimeCache.clear();
    this.#ragCache.clear();
    this.#relatedCache.clear();
  }
}

/* ------------------------------------------------------------------ */
/*  Singleton instances                                                 */
/* ------------------------------------------------------------------ */

/** General-purpose search cache — 100 entries, 5 min TTL. */
export const searchCache = new LRUCache({ maxSize: 100, defaultTTL: 5 * 60 * 1000 });

/** Specialized article cache with sub-caches. */
export const articleCache = new ArticleCache();

/** RAG results cache — 50 entries, 10 min TTL. */
export const ragCache = new LRUCache({ maxSize: 50, defaultTTL: 10 * 60 * 1000 });
