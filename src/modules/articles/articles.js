import { state } from '../../core/state.js';
import { events, EVENTS } from '../../core/events.js';
import { articleCache } from '../../core/cache.js';
import { $, delegate, debounce, clearChildren, escapeHtml } from '../../utils/dom.js';
import { highlightMatch, processAdmonitions, addCopyButtons, generateToc } from '../../utils/html.js';
import { getDifficultyClass, getCategoryName, formatReadTime, scoreRelevance } from '../../utils/format.js';

const PAGE_SIZE = 60;

let wikiData = null;

/**
 * Ensure every h2/h3 in the HTML has an id attribute for TOC navigation.
 * @param {string} html - Raw article HTML
 * @returns {string} HTML with guaranteed heading ids
 */
function addHeadingIds(html) {
  if (!html) return '';
  const temp = document.createElement('div');
  temp.innerHTML = html;
  temp.querySelectorAll('h2, h3').forEach((h) => {
    if (!h.id) {
      h.id = h.textContent
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
    }
  });
  return temp.innerHTML;
}

/**
 * Initialize read time cache from WIKI_DATA into the central ArticleCache.
 * @param {Object} data - WIKI_DATA object containing articles array
 */
export function initReadTimeCache(data) {
  if (!data || !Array.isArray(data.articles)) return;
  data.articles.forEach((a) => {
    const text = a.content.replace(/<[^>]+>/g, '').trim();
    const readTime = Math.max(1, Math.round(text.split(/\s+/).length / 200));
    articleCache.cacheReadTime(a.id, readTime);
  });
}

/**
 * Get cached read time for an article.
 * @param {string} articleId
 * @returns {number} Read time in minutes
 */
export function getReadTime(articleId) {
  return articleCache.getReadTime(articleId) || 1;
}

/**
 * Render a single article card HTML.
 * @param {Object} article
 * @param {string[]} bookmarks - Array of bookmarked article IDs
 * @param {number} index - Card index for staggered animation delay
 * @returns {string} HTML string
 */
export function renderCardHTML(article, bookmarks, index = 0) {
  const tags = article.tags || [];
  const diffClass = getDifficultyClass(article.difficulty);
  const rt = getReadTime(article.id);
  const bm = bookmarks.includes(article.id);
  const searchQuery = state.get('searchQuery') || '';

  const newArticles = ['cloud-aws-security', 'threat-hunting-yara', 'red-team-c2', 'web-ssrf-xxe', 'container-k8s-sec', 'reverse-engineering-ghidra'];
  const improvedArticles = ['nmap', 'binary-exploitation', 'persistence', 'forensics', 'api-security', 'zero-trust', 'fuzzing', 'oscp-prep', 'compliance', 'steganography', 'active-directory', 'supply-chain', 'malware-development', 'threat-intelligence', 'social-engineering', 'methodology-hacking', 'cyber-prompting', 'hardware-hacking', 'cloud-security', 'secure-coding', 'web3-security', 'wireless'];

  let expertBadge = '';
  if (newArticles.includes(article.id)) {
    expertBadge = `<span style="background:#3b82f6;color:#fff;font-size:10px;padding:2px 6px;border-radius:4px;font-weight:600;margin-left:6px;display:inline-block;">✨ NUEVO</span>`;
  } else if (improvedArticles.includes(article.id)) {
    expertBadge = `<span style="background:#10b981;color:#0f172a;font-size:10px;padding:2px 6px;border-radius:4px;font-weight:600;margin-left:6px;display:inline-block;">🚀 EXPERTO</span>`;
  }

  const tagsHtml = tags.length
    ? `<div class="card-tags">${tags.slice(0, 4).map((t) => `<span class="card-tag">${escapeHtml(t)}</span>`).join('')}</div>`
    : '';

  return `<div class="card article-card" data-id="${escapeHtml(article.id)}" tabindex="0" role="button" aria-label="${escapeHtml(article.title)}" style="animation-delay:${Math.min(index * 30, 600)}ms">
    <button class="card-bookmark" style="opacity:${bm ? 1 : 0}">${bm ? '🔖' : '📑'}</button>
    <div style="display:flex;align-items:center;margin-bottom:6px;"><span class="category-badge">${escapeHtml(article.category.toUpperCase())}</span>${expertBadge}</div>
    <h3 class="card-title">${highlightMatch(article.title, searchQuery)}</h3>
    <p class="card-summary">${highlightMatch(article.summary, searchQuery)}</p>
    ${tagsHtml}
    <div class="card-meta"><span class="difficulty-badge ${diffClass}">${article.difficulty || 'Intermedio'}</span><span class="read-time">📖 ${rt} min</span></div>
  </div>`;
}

/**
 * Build filtered article list from current state filters.
 * @returns {Object[]} Filtered articles
 */
function getFilteredArticles() {
  if (!wikiData) return [];
  const q = (state.get('searchQuery') || '').toLowerCase();
  const rawCategory = state.get('activeCategory');
  const activeCategory = (rawCategory === 'all' || !rawCategory) ? 'all' : rawCategory;
  const activeTag = state.get('activeTag') || '';
  const articles = wikiData.articles;
  const filtered = [];

  for (let i = 0, len = articles.length; i < len; i++) {
    const a = articles[i];
    if (!a) continue;
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
 * Render the articles grid based on current filters.
 * Reads activeCategory, activeTag, searchQuery from state.
 * Emits ARTICLES_RENDERED with filtered count.
 */
export function renderArticles() {
  const grid = $('articles-grid');
  if (!grid) return;

  const resultsCount = $('results-count');
  const searchQuery = state.get('searchQuery') || '';
  const activeTag = state.get('activeTag') || '';
  const filtered = getFilteredArticles();

  if (resultsCount) {
    resultsCount.textContent = filtered.length > 0 ? `${filtered.length} resultados` : '';
  }

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><div class="empty-state-icon">🔍</div><div class="empty-state-title">Sin resultados</div><div class="empty-state-desc">No se encontraron artículos para "${escapeHtml(searchQuery)}"${activeTag ? ` en tag "${escapeHtml(activeTag)}"` : ''}</div></div>`;
    events.emit(EVENTS.ARTICLES_RENDERED, { count: 0 });
    return;
  }

  const showAll = filtered.length <= PAGE_SIZE;
  const shown = showAll ? filtered : filtered.slice(0, PAGE_SIZE);
  const bookmarks = state.get('bookmarks') || [];

  let html = '';
  for (let i = 0, len = shown.length; i < len; i++) {
    html += renderCardHTML(shown[i], bookmarks, i);
  }

  if (!showAll) {
    html += `<div class="show-more-bar" data-action="show-all">📚 Mostrar los ${filtered.length - PAGE_SIZE} restantes (${filtered.length} total)</div>`;
  }

  grid.innerHTML = html;
  events.emit(EVENTS.ARTICLES_RENDERED, { count: filtered.length });
}

/**
 * Show all articles without pagination limit.
 * Emits TOAST_SHOW with count.
 */
export function showAllArticles() {
  const grid = $('articles-grid');
  if (!grid || !wikiData) return;

  const bookmarks = state.get('bookmarks') || [];
  const filtered = getFilteredArticles();

  let html = '';
  for (let i = 0, len = filtered.length; i < len; i++) {
    html += renderCardHTML(filtered[i], bookmarks, i);
  }

  grid.innerHTML = html;
  events.emit(EVENTS.TOAST_SHOW, { message: `📚 Mostrando ${filtered.length} artículos` });
}

/**
 * Filter articles by tag.
 * Updates state.activeTag, resets category, re-renders.
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

  events.emit(EVENTS.ARTICLE_FILTER_CHANGED, { type: 'tag', value: tag });
  renderArticles();
}

/**
 * Filter articles by category.
 * Updates state.activeCategory, re-renders.
 * @param {string} catId
 */
export function filterByCategory(catId) {
  state.set('activeCategory', catId);

  const categoryTitle = $('current-category-title');
  if (categoryTitle && wikiData) {
    const catName = getCategoryName(catId, wikiData.categories);
    categoryTitle.textContent = catName || '📚 Artículos y Guías';
  }

  events.emit(EVENTS.ARTICLE_FILTER_CHANGED, { type: 'category', value: catId });
  renderArticles();
}

/**
 * Get related articles for a given article.
 * Uses tag overlap and category match to score relevance.
 * @param {Object} article
 * @param {number} [max=6] - Max related articles to return
 * @returns {Array<{article: Object, score: number}>}
 */
export function getRelatedArticles(article, max = 6) {
  if (!wikiData || !article) return [];

  const scored = [];
  for (let i = 0, len = wikiData.articles.length; i < len; i++) {
    const a = wikiData.articles[i];
    if (a.id === article.id) continue;
    const score = scoreRelevance(article, a);
    if (score > 0) {
      scored.push({ article: a, score });
    }
  }

  return scored.sort((a, b) => b.score - a.score).slice(0, max);
}

/**
 * Set up event delegation on the articles grid.
 * Handles card clicks, bookmark toggles, tag clicks, and show-all action.
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

  delegate(grid, 'keydown', '.card', (e, target) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (e.target.closest('.card-bookmark') || e.target.closest('.card-tag')) return;
      const id = target.getAttribute('data-id');
      if (id) {
        events.emit(EVENTS.ARTICLE_OPENED, { id });
      }
    }
  });

  delegate(grid, 'click', '[data-action="show-all"]', () => {
    showAllArticles();
  });
}

/**
 * Initialize articles module.
 * Sets up event delegation, state watchers, and performs initial render.
 * @param {Object} data - WIKI_DATA object
 */
export function initArticles(data) {
  if (!data) {
    console.error('[articles] WIKI_DATA not provided');
    return;
  }

  wikiData = data;
  initReadTimeCache(data);

  const grid = $('articles-grid');
  if (grid) {
    setupGridEvents(grid);
  }

  events.on(EVENTS.SEARCH_QUERY_CHANGED, () => {
    renderArticles();
  });

  events.on(EVENTS.TAB_CHANGED, (tabId) => {
    if (tabId === 'articles') {
      renderArticles();
    }
  });

  events.on(EVENTS.ARTICLE_FILTER_CHANGED, (data) => {
    if (data && data.category) {
      state.set('activeCategory', data.category);
    }
    renderArticles();
  });

  renderArticles();
}
