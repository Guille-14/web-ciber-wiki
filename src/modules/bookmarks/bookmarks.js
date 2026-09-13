/**
 * Bookmarks module for CyberWiki Hub.
 * Manages article bookmarks with localStorage persistence.
 * @module modules/bookmarks/bookmarks
 */

import { state } from '../../core/state.js';
import { events, EVENTS } from '../../core/events.js';
import { storage, STORAGE_KEYS } from '../../core/storage.js';
import { $, delegate, showToast, escapeHtml } from '../../utils/dom.js';
import { getDifficultyClass } from '../../utils/format.js';
import { getReadTime } from '../articles/articles.js';

let wikiData = null;

/**
 * Get all bookmark IDs from storage.
 * @returns {string[]}
 */
export function getBookmarks() {
  return state.get('bookmarks') || [];
}

/**
 * Toggle bookmark for an article.
 * @param {string} articleId
 */
export function toggleBookmark(articleId) {
  const bookmarks = getBookmarks();
  const idx = bookmarks.indexOf(articleId);
  if (idx > -1) {
    bookmarks.splice(idx, 1);
    showToast('🔖 Eliminado de favoritos');
  } else {
    bookmarks.push(articleId);
    showToast('🔖 Añadido a favoritos');
  }
  state.set('bookmarks', [...bookmarks]);

  const bookmarkCount = $('bookmark-count');
  if (bookmarkCount) bookmarkCount.textContent = bookmarks.length;

  events.emit(EVENTS.BOOKMARK_TOGGLED, { articleId, bookmarked: idx === -1 });
  events.emit(EVENTS.BOOKMARKS_CHANGED, { bookmarks });
}

/**
 * Render bookmarks grid.
 */
export function renderBookmarks() {
  const grid = $('bookmarks-grid');
  if (!grid) return;

  const ids = getBookmarks();
  const articles = ids
    .map((id) => wikiData?.articles.find((a) => a && a.id === id))
    .filter(Boolean);

  if (!articles.length) {
    grid.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🔖</div><div class="empty-state-title">Sin favoritos</div><div class="empty-state-desc">Haz clic en 🔖 al abrir un artículo para guardarlo aquí</div></div>';
    return;
  }

  let html = '';
  articles.forEach((a, i) => {
    const diffClass = getDifficultyClass(a.difficulty);
    const rt = getReadTime(a.id);
    html += `<div class="card" data-id="${a.id}" style="animation-delay:${Math.min(i * 30, 600)}ms">
      <button class="card-bookmark" style="opacity:1" data-bm-action="remove">🔖</button>
      <span class="category-badge">${a.category.toUpperCase()}</span>
      <h3 class="card-title">${escapeHtml(a.title)}</h3>
      <p class="card-summary">${escapeHtml(a.summary)}</p>
      <div class="card-meta">
        <span class="difficulty-badge ${diffClass}">${a.difficulty || 'Intermedio'}</span>
        <span class="read-time">📖 ${rt} min</span>
      </div>
    </div>`;
  });

  grid.innerHTML = html;
}

/**
 * Export bookmarks as Markdown file
 */
export function exportBookmarks() {
  const ids = getBookmarks();
  const articles = ids
    .map((id) => wikiData?.articles.find((a) => a && a.id === id))
    .filter(Boolean);

  if (!articles.length) {
    showToast('No hay favoritos guardados para exportar');
    return;
  }

  let content = `# Favoritos - CyberWiki Hub\n\n*Exportado el ${new Date().toLocaleDateString()}*\n\n`;
  articles.forEach((a) => {
    content += `## ${a.title}\n- **Categoría:** ${a.category || 'General'}\n- **Dificultad:** ${a.difficulty || 'Intermedio'}\n- **Resumen:** ${a.summary || ''}\n\n`;
  });

  const blob = new Blob([content], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `cyberwiki-favoritos-${new Date().toISOString().slice(0, 10)}.md`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast(`📁 ${articles.length} favoritos exportados`);
}

/**
 * Initialize bookmarks module.
 * @param {object} data - WIKI_DATA
 */
export function initBookmarks(data) {
  wikiData = data;

  const grid = $('bookmarks-grid');
  if (grid) {
    delegate(grid, 'click', '[data-bm-action="remove"]', (e, target) => {
      e.stopPropagation();
      const card = target.closest('.card');
      if (card) toggleBookmark(card.dataset.id);
      renderBookmarks();
    });

    delegate(grid, 'click', '.card', (e, target) => {
      if (e.target.closest('[data-bm-action="remove"]')) return;
      const id = target.dataset.id;
      if (id) events.emit(EVENTS.ARTICLE_OPENED, { id });
    });
  }

  const exportBtn = $('export-bookmarks');
  if (exportBtn) {
    exportBtn.addEventListener('click', () => exportBookmarks());
  }

  const clearBtn = $('clear-bookmarks');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (!getBookmarks().length) return;
      if (confirm('¿Seguro que quieres eliminar todos los favoritos?')) {
        state.set('bookmarks', []);
        const count = $('bookmark-count');
        if (count) count.textContent = '0';
        renderBookmarks();
        showToast('Favoritos eliminados');
      }
    });
  }

  events.on(EVENTS.BOOKMARK_TOGGLED, () => {
    renderBookmarks();
  });

  events.on(EVENTS.TAB_CHANGED, (tab) => {
    if (tab === 'bookmarks') renderBookmarks();
  });

  const bookmarkCount = $('bookmark-count');
  if (bookmarkCount) bookmarkCount.textContent = getBookmarks().length;
}
