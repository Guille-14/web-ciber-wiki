import { state } from './state.js';
import { events, EVENTS } from './events.js';
import { articleCache } from './cache.js';

/**
 * Data Loader - Loads wiki data in chunks with caching
 */
export class DataLoader {
  constructor() {
    this.loadedChunks = new Set();
    this.loadingChunks = new Map();
    this.totalArticles = 0;
  }

  /**
   * Initialize data loader
   * @param {Object} wikiData - Initial WIKI_DATA from globals
   */
  init(wikiData) {
    this.wikiData = wikiData;
    this.totalArticles = wikiData.articles?.length || 0;
    
    // Build index for fast lookups
    this.buildIndex(wikiData);
    
    // Pre-load critical data
    this.preloadCritical();
  }

  /**
   * Build search and lookup indexes
   * @param {Object} wikiData
   */
  buildIndex(wikiData) {
    // Article ID index
    this.articleIndex = new Map();
    wikiData.articles?.forEach(article => {
      this.articleIndex.set(article.id, article);
    });

    // Category index
    this.categoryIndex = new Map();
    wikiData.articles?.forEach(article => {
      if (!this.categoryIndex.has(article.category)) {
        this.categoryIndex.set(article.category, []);
      }
      this.categoryIndex.get(article.category).push(article);
    });

    // Tag index
    this.tagIndex = new Map();
    wikiData.articles?.forEach(article => {
      article.tags?.forEach(tag => {
        if (!this.tagIndex.has(tag)) {
          this.tagIndex.set(tag, []);
        }
        this.tagIndex.get(tag).push(article);
      });
    });

    // Search index (inverted index for full-text search)
    this.searchIndex = this.buildSearchIndex(wikiData.articles);
  }

  /**
   * Build inverted search index
   * @param {Array} articles
   * @returns {Map}
   */
  buildSearchIndex(articles) {
    const index = new Map();
    const stopwords = new Set(['el', 'la', 'los', 'las', 'un', 'una', 'de', 'del', 'en', 'es', 'son', 'que', 'por', 'para', 'con', 'sin', 'sobre', 'entre', 'hacia', 'desde', 'hasta', 'como', 'pero', 'mas', 'menos', 'muy', 'poco', 'mucho', 'todo', 'nada', 'algunos', 'algunas']);

    articles?.forEach(article => {
      if (!article || !article.title) return;
      const text = `${article.title} ${article.summary || ''} ${article.tags?.join(' ') || ''}`.toLowerCase();
      const words = text.split(/\s+/).filter(w => w.length > 2 && !stopwords.has(w));
      
      words.forEach(word => {
        const stemmed = this.stem(word);
        if (!index.has(stemmed)) {
          index.set(stemmed, new Set());
        }
        index.get(stemmed).add(article.id);
      });
    });

    return index;
  }

  /**
   * Simple Spanish stemmer
   * @param {string} word
   * @returns {string}
   */
  stem(word) {
    // Simple stemming for Spanish
    return word
      .replace(/(?:ando|iendo|ado|ido|ar|er|ir)$/g, '')
      .replace(/(?:mente|cion|sion|idad|able|ible)$/g, '')
      .replace(/(?:es|os|as|is)$/g, '');
  }

  /**
   * Pre-load critical data (core articles only)
   */
  preloadCritical() {
    // Core articles are already in memory from data.js
    // Mark as loaded
    this.loadedChunks.add('core');
  }

  /**
   * Load articles by category (lazy)
   * @param {string} category
   * @returns {Promise<Array>}
   */
  async loadCategory(category) {
    if (this.categoryIndex.has(category)) {
      return this.categoryIndex.get(category);
    }
    return [];
  }

  /**
   * Get article by ID (fast lookup)
   * @param {string} id
   * @returns {Object|null}
   */
  getArticle(id) {
    return this.articleIndex.get(id) || null;
  }

  /**
   * Get articles by tag (fast lookup)
   * @param {string} tag
   * @returns {Array}
   */
  getArticlesByTag(tag) {
    return this.tagIndex.get(tag) || [];
  }

  /**
   * Search articles (fast indexed search)
   * @param {string} query
   * @param {Object} options
   * @returns {Array}
   */
  search(query, options = {}) {
    const { limit = 50, category = null, difficulty = null } = options;
    
    // Check cache first
    const cacheKey = `search:${query}:${category}:${difficulty}`;
    const cached = articleCache.getSearchResults(cacheKey);
    if (cached) return cached;

    const queryWords = query.toLowerCase().split(/\s+/).filter(w => w.length > 2);
    
    // Find matching article IDs
    const matchCounts = new Map();
    
    queryWords.forEach(word => {
      const stemmed = this.stem(word);
      const matchingIds = this.searchIndex.get(stemmed) || new Set();
      
      matchingIds.forEach(id => {
        matchCounts.set(id, (matchCounts.get(id) || 0) + 1);
      });
    });

    // Convert to articles and score
    let results = Array.from(matchCounts.entries())
      .map(([id, count]) => {
        const article = this.articleIndex.get(id);
        if (!article) return null;
        
        // Calculate relevance score
        let score = count * 10;
        
        // Boost title matches
        if (article.title.toLowerCase().includes(query.toLowerCase())) {
          score += 50;
        }
        
        // Boost summary matches
        if (article.summary?.toLowerCase().includes(query.toLowerCase())) {
          score += 20;
        }
        
        // Apply filters
        if (category && article.category !== category) return null;
        if (difficulty && article.difficulty !== difficulty) return null;
        
        return { ...article, score };
      })
      .filter(Boolean)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);

    // Cache results
    articleCache.cacheSearchResults(cacheKey, results);
    
    return results;
  }

  /**
   * Get related articles
   * @param {Object} article
   * @param {number} limit
   * @returns {Array}
   */
  getRelatedArticles(article, limit = 6) {
    // Check cache first
    const cached = articleCache.getRelatedArticles(article.id);
    if (cached) return cached;

    const scored = [];
    const articleTags = new Set(article.tags || []);

    this.wikiData.articles?.forEach(other => {
      if (other.id === article.id) return;
      
      let score = 0;
      
      // Category match
      if (other.category === article.category) {
        score += 30;
      }
      
      // Tag overlap
      const otherTags = new Set(other.tags || []);
      const overlap = [...articleTags].filter(t => otherTags.has(t)).length;
      score += overlap * 10;
      
      // Difficulty match
      if (other.difficulty === article.difficulty) {
        score += 5;
      }
      
      if (score > 0) {
        scored.push({ ...other, score });
      }
    });

    const results = scored
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);

    // Cache results
    articleCache.cacheRelatedArticles(article.id, results);
    
    return results;
  }

  /**
   * Get glossary terms
   * @returns {Array}
   */
  getGlossary() {
    return this.wikiData.glossary || [];
  }

  /**
   * Get cheatsheets
   * @returns {Array}
   */
  getCheatsheets() {
    return this.wikiData.cheatsheets || [];
  }

  /**
   * Get OWASP Top 10
   * @returns {Array}
   */
  getOwaspTop10() {
    return this.wikiData.owaspTop10 || [];
  }

  /**
   * Get all categories
   * @returns {Array}
   */
  getCategories() {
    return this.wikiData.categories || [];
  }

  /**
   * Get article count
   * @returns {number}
   */
  getArticleCount() {
    return this.totalArticles;
  }

  /**
   * Get tag counts
   * @returns {Map}
   */
  getTagCounts() {
    const counts = new Map();
    this.tagIndex.forEach((articles, tag) => {
      counts.set(tag, articles.length);
    });
    return counts;
  }

  /**
   * Clear all indexes
   */
  clear() {
    this.articleIndex.clear();
    this.categoryIndex.clear();
    this.tagIndex.clear();
    this.searchIndex.clear();
    this.loadedChunks.clear();
    this.loadingChunks.clear();
  }
}

// Export singleton
export const dataLoader = new DataLoader();
