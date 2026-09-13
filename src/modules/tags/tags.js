/**
 * Tags module for CyberWiki Hub.
 * Renders tag cloud with weighted sizes.
 * @module modules/tags/tags
 */

import { state } from '../../core/state.js';
import { events, EVENTS } from '../../core/events.js';
import { $, delegate, escapeHtml } from '../../utils/dom.js';

let wikiData = null;

/** @type {Array<[string, number]>|null} */
let tagCache = null;

const TAG_COLORS = ['#58a6ff', '#238636', '#d29922', '#a855f7', '#22d3ee', '#f97583', '#ff79c6', '#50fa7b'];

/**
 * Build and cache tag counts from articles.
 * @returns {Array<[string, number]>} Sorted by count descending.
 */
function getTagCache() {
  if (tagCache) return tagCache;

  const map = new Map();
  wikiData.articles.forEach((a) => {
    (a.tags || []).forEach((t) => {
      map.set(t, (map.get(t) || 0) + 1);
    });
  });

  tagCache = [...map.entries()].sort((a, b) => b[1] - a[1]);
  return tagCache;
}

/**
 * Invalidate tag cache (call after data changes).
 */
export function invalidateTagCache() {
  tagCache = null;
}

/**
 * Render the tag cloud and tag articles grid.
 */
export function renderTagCloud() {
  const container = $('tag-cloud');
  if (!container || !wikiData) return;

  const sorted = getTagCache();
  const maxCount = sorted.length ? sorted[0][1] : 1;
  const q = (state.get('searchQuery') || '').toLowerCase();
  const activeTag = state.get('activeTag') || '';

  const tagCountEl = $('tag-count');
  if (tagCountEl) tagCountEl.textContent = `${sorted.length} tags`;

  let html = '';
  sorted.forEach(([tag, count]) => {
    if (q && !tag.toLowerCase().includes(q)) return;

    const size = Math.round(12 + (count / maxCount) * 16);
    const opacity = 0.4 + (count / maxCount) * 0.6;
    const isActive = activeTag === tag;
    const color = TAG_COLORS[tag.length % TAG_COLORS.length];

    html += `<span class="tag-cloud-item ${isActive ? 'active' : ''}"
      style="font-size:${size}px;opacity:${opacity};background:${isActive ? color + '22' : 'var(--bg-card)'};color:${color};border-color:${color}33"
      data-tag="${tag}">${tag} <span style="font-size:10px;opacity:0.6">(${count})</span></span>`;
  });

  container.innerHTML = html || '<span style="color:var(--text-dim)">No hay tags que coincidan</span>';

  renderTagArticles();
}

/**
 * Render articles matching the active tag.
 */
function renderTagArticles() {
  const tagGrid = $('tag-articles');
  if (!tagGrid) return;

  const activeTag = state.get('activeTag') || '';
  if (!activeTag) {
    tagGrid.innerHTML = '';
    return;
  }

  const q = (state.get('searchQuery') || '').toLowerCase();
  const filtered = wikiData.articles.filter((a) => {
    const matchesTag = (a.tags || []).some((t) => t.toLowerCase() === activeTag.toLowerCase());
    if (!matchesTag) return false;
    if (q) return a.title.toLowerCase().includes(q) || a.summary.toLowerCase().includes(q);
    return true;
  });

  const bookmarks = state.get('bookmarks') || [];
  let html = '';
  filtered.forEach((a, i) => {
    const bm = bookmarks.includes(a.id);
    html += `<div class="card article-card" data-id="${escapeHtml(a.id)}" tabindex="0" role="button" aria-label="${escapeHtml(a.title)}" style="animation-delay:${Math.min(i * 30, 600)}ms">
      <button class="card-bookmark" style="opacity:${bm ? 1 : 0}">${bm ? '🔖' : '📑'}</button>
      <span class="category-badge">${escapeHtml(a.category.toUpperCase())}</span>
      <h3 class="card-title">${escapeHtml(a.title)}</h3>
      <p class="card-summary">${escapeHtml(a.summary)}</p>
      <div class="card-meta"><span class="difficulty-badge">${escapeHtml(a.difficulty || 'Intermedio')}</span></div>
    </div>`;
  });

  tagGrid.innerHTML = html;
}

/**
 * Initialize tags module.
 * @param {object} data - WIKI_DATA
 */
export function initTags(data) {
  wikiData = data;

  const tagCloud = $('tag-cloud');
  if (tagCloud) {
    tagCloud.addEventListener('click', (e) => {
      const item = e.target.closest('.tag-cloud-item');
      if (!item) return;

      const tag = item.dataset.tag;
      if (!tag) return;

      const currentTag = state.get('activeTag') || '';
      state.set('activeTag', currentTag === tag ? '' : tag);

      renderTagCloud();
      renderTagArticles();
    });
  }

  // Delegación de clicks en las tarjetas de #tag-articles: antes se
  // renderizaban pero ningún módulo gestionaba el click (no abrían nada).
  const tagGrid = $('tag-articles');
  if (tagGrid) {
    delegate(tagGrid, 'click', '.card-bookmark', (e, target) => {
      e.stopPropagation();
      const card = target.closest('.card');
      const id = card?.getAttribute('data-id');
      if (id) events.emit(EVENTS.BOOKMARK_TOGGLED, { id });
    });

    const openCard = (e, target) => {
      if (e.target.closest('.card-bookmark')) return;
      const id = target.getAttribute('data-id');
      if (id) events.emit(EVENTS.ARTICLE_OPENED, { id });
    };
    delegate(tagGrid, 'click', '.card', openCard);
    delegate(tagGrid, 'keydown', '.card', (e, target) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openCard(e, target);
      }
    });
  }

  events.on(EVENTS.SEARCH_QUERY_CHANGED, () => {
    invalidateTagCache();
    renderTagCloud();
  });

  events.on(EVENTS.TAB_CHANGED, (tab) => {
    if (tab === 'tags') {
      renderTagCloud();
    }
  });

  events.on(EVENTS.ARTICLE_FILTER_CHANGED, () => {
    invalidateTagCache();
  });

  renderTagCloud();
}
