import { state } from '../../core/state.js';
import { events, EVENTS } from '../../core/events.js';
import { $, delegate, debounce } from '../../utils/dom.js';
import { highlightMatch } from '../../utils/html.js';
import { getDifficultyClass, getCategoryName, scoreRelevance } from '../../utils/format.js';
import { dataLoader } from '../../core/data-loader.js';
import { articleCache } from '../../core/cache.js';
import { VirtualScroll } from '../../utils/virtual-scroll.js';

const INITIAL_PAGE_SIZE = 60;
const LOAD_MORE_SIZE = 40;

let wikiData = null;
let virtualScroll = null;
let filteredArticles = [];
let allShown = false;
let allLoaded = false;

/**
 * Render a single article card HTML.
 * @param {Object} article
 * @param {string[]} bookmarks
 * @param {number} index
 * @returns {string}
 */
function renderCardHTML(article, bookmarks, index = 0) {
  const tags = article.tags || [];
  const diffClass = getDifficultyClass(article.difficulty);
  const readTime = articleCache.getReadTime(article.id) || 1;
  const bm = bookmarks.includes(article.id);
  const searchQuery = state.get('searchQuery') || '';

  const tagsHtml = tags.length
    ? `<div class="card-tags">${tags.slice(0, 4).map((t) => `<span class="card-tag">${t}</span>`).join('')}</div>`
    : '';

  return `<div class="card article-card" data-id="${article.id}" data-virtual-index="${index}" style="animation-delay:${Math.min(index * 20, 400)}ms">
    <button class="card-bookmark" style="opacity:${bm ? 1 : 0}">${bm ? '🔖' : '📑'}</button>
    <span class="category-badge">${article.category.toUpperCase()}</span>
    <h3 class="card-title">${highlightMatch(article.title, searchQuery)}</h3>
    <p class="card-summary">${highlightMatch(article.summary, searchQuery)}</p>
    ${tagsHtml}
    <div class="card-meta"><span class="difficulty-badge ${diffClass}">${article.difficulty || 'Intermedio'}</span><span class="read-time">📖 ${readTime} min</span></div>
  </div>`;
}

/**
 * Build filtered article list from current state filters.
 * @returns {Object[]}
 */
function getFilteredArticles() {
  if (!wikiData) return [];
  const q = (state.get('searchQuery') || '').toLowerCase();
  const activeCategory = state.get('activeCategory') || 'all';
  const activeTag = state.get('activeTag') || '';
  const articles = wikiData.articles;
  const filtered = [];

  for (let i = 0, len = articles.length; i < len; i++) {
    const a = articles[i];
    if (activeCategory !== 'all' && a.category !== activeCategory) continue;
    if (activeTag && (!a.tags || !a.tags.some((t) => t.toLowerCase() === activeTag.toLowerCase()))) continue;
    if (q) {
      const match =
        a.title.toLowerCase().includes(q) ||
        a.summary.toLowerCase().includes(q) ||
        (a.tags && a.tags.some((t) => t.toLowerCase().includes(q)));
      if (!match) continue;
    }
    filtered.push(a);
  }

  return filtered;
}

/**
 * Initialize virtual scroll instance for the articles grid.
 * @param {HTMLElement} grid
 */
function initVirtualScroll(grid) {
  if (virtualScroll) {
    virtualScroll.destroy();
  }

  const container = grid.parentElement || grid;
  container.style.overflow = 'auto';
  container.style.maxHeight = 'calc(100vh - 200px)';
  container.style.position = 'relative';

  virtualScroll = new VirtualScroll({
    container,
    content: grid,
    renderItem: (article, index) => renderCardHTML(article, state.get('bookmarks') || [], index),
    itemHeight: 220,
    buffer: 8,
    columnCount: getGridColumns(),
  });

  virtualScroll.onScrollToEnd = () => {
    if (!allLoaded && filteredArticles.length > grid.children.length) {
      loadMoreArticles();
    }
  };
}

/**
 * Detect grid columns from CSS
 * @returns {number}
 */
function getGridColumns() {
  const grid = $('articles-grid');
  if (!grid) return 3;
  const style = window.getComputedStyle(grid);
  const columns = style.gridTemplateColumns;
  if (!columns) return 3;
  return columns.split(' ').length;
}

/**
 * Load more articles (infinite scroll)
 */
function loadMoreArticles() {
  if (allLoaded || !virtualScroll) return;

  const currentCount = virtualScroll.items.length;
  const nextBatch = filteredArticles.slice(currentCount, currentCount + LOAD_MORE_SIZE);

  if (nextBatch.length === 0) {
    allLoaded = true;
    return;
  }

  virtualScroll.appendData(nextBatch);

  if (virtualScroll.items.length >= filteredArticles.length) {
    allLoaded = true;
  }
}

/**
 * Initialize articles module with optimized rendering.
 * @param {Object} data - WIKI_DATA object
 */
export function initArticles(data) {
  if (!data) {
    console.error('[articles] WIKI_DATA not provided');
    return;
  }

  wikiData = data;

  const grid = $('articles-grid');
  if (grid) {
    setupGridEvents(grid);
    initVirtualScroll(grid);
  }

  events.on(EVENTS.SEARCH_QUERY_CHANGED, debounce(() => {
    renderArticles();
  }, 150));

  events.on(EVENTS.TAB_CHANGED, (tabId) => {
    if (tabId === 'articles') {
      renderArticles();
    }
  });

  renderArticles();
}

/**
 * Render articles grid using virtual scroll.
 */
export function renderArticles() {
  const grid = $('articles-grid');
  if (!grid) return;

  const resultsCount = $('results-count');
  filteredArticles = getFilteredArticles();
  allLoaded = false;

  if (resultsCount) {
    resultsCount.textContent = filteredArticles.length > 0 ? `${filteredArticles.length} resultados` : '';
  }

  if (filteredArticles.length === 0) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><div class="empty-state-icon">🔍</div><div class="empty-state-title">Sin resultados</div><div class="empty-state-desc">No se encontraron artículos</div></div>`;
    if (virtualScroll) virtualScroll.clear();
    events.emit(EVENTS.ARTICLES_RENDERED, { count: 0 });
    return;
  }

  const initialBatch =allShown
    ? filteredArticles
    : filteredArticles.slice(0, INITIAL_PAGE_SIZE);

  if (!allShown && filteredArticles.length > INITIAL_PAGE_SIZE) {
    allLoaded = false;
  } else {
    allLoaded = true;
  }

  if (virtualScroll) {
    virtualScroll.setData(initialBatch);
  }

  events.emit(EVENTS.ARTICLES_RENDERED, { count: filteredArticles.length });
}

/**
 * Show all articles without pagination limit.
 */
export function showAllArticles() {
 allShown = true;
  allLoaded = true;
  renderArticles();
  events.emit(EVENTS.TOAST_SHOW, { message: `📚 Mostrando ${filteredArticles.length} artículos` });
}

/**
 * Filter articles by tag.
 * @param {string} tag
 */
export function filterByTag(tag) {
  state.update({
    activeTag: tag,
    activeCategory: 'all',
  });

  const categoryTitle = $('current-category-title');
  if (categoryTitle) {
    categoryTitle.textContent = tag ? `🏷️ Artículos con tag: "${tag}"` : '📚 Artículos y Guías';
  }

 allShown = false;
  events.emit(EVENTS.ARTICLE_FILTER_CHANGED, { type: 'tag', value: tag });
  renderArticles();
}

/**
 * Filter articles by category.
 * @param {string} catId
 */
export function filterByCategory(catId) {
  state.set('activeCategory', catId);

  const categoryTitle = $('current-category-title');
  if (categoryTitle && wikiData) {
    const catName = getCategoryName(catId, wikiData.categories);
    categoryTitle.textContent = catName || '📚 Artículos y Guías';
  }

 allShown = false;
  events.emit(EVENTS.ARTICLE_FILTER_CHANGED, { type: 'category', value: catId });
  renderArticles();
}

/**
 * Get related articles for a given article.
 * @param {Object} article
 * @param {number} [max=6]
 * @returns {Array<{article: Object, score: number}>}
 */
export function getRelatedArticles(article, max = 6) {
  if (!article) return [];

  const cached = articleCache.getRelatedArticles(article.id);
  if (cached) return cached.slice(0, max);

  if (!wikiData) return [];

  const scored = [];
  for (let i = 0, len = wikiData.articles.length; i < len; i++) {
    const a = wikiData.articles[i];
    if (a.id === article.id) continue;
    const score = scoreRelevance(article, a);
    if (score > 0) {
      scored.push({ article: a, score });
    }
  }

  const sorted = scored.sort((a, b) => b.score - a.score).slice(0, max);
  articleCache.cacheRelatedArticles(article.id, sorted);
  return sorted;
}

/**
 * Set up event delegation on the articles grid.
 * @param {HTMLElement} grid
 */
function setupGridEvents(grid) {
  delegate(grid, 'click', '.card-bookmark', (e, target) => {
    e.stopPropagation();
    const card = target.closest('.card');
    if (!card) return;
    const id = card.getAttribute('data-id');
    if (id) {
      events.emit(EVENTS.BOOKMARK_TOGGLED, { id });
    }
  });

  delegate(grid, 'click', '.card-tag', (e, target) => {
    e.stopPropagation();
    const tag = target.textContent.trim();
    if (tag) {
      filterByTag(tag);
    }
  });

  delegate(grid, 'click', '.card', (e, target) => {
    if (e.target.closest('.card-bookmark') || e.target.closest('.card-tag')) return;
    const id = target.getAttribute('data-id');
    if (id) {
      events.emit(EVENTS.ARTICLE_OPENED, { id });
    }
  });
}

/**
 * Destroy articles module and cleanup resources.
 */
export function destroyArticles() {
  if (virtualScroll) {
    virtualScroll.destroy();
    virtualScroll = null;
  }
  wikiData = null;
  filteredArticles = [];
  allLoaded = false;
 allShown = false;
}
