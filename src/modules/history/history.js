/**
 * History module for CyberWiki Hub.
 * Tracks reading history with timestamps.
 * @module modules/history/history
 */

import { state } from '../../core/state.js';
import { events, EVENTS } from '../../core/events.js';
import { $, showToast } from '../../utils/dom.js';
import { formatRelativeTime } from '../../utils/format.js';

/**
 * Add an article to reading history.
 * @param {object} article - Article object with id and title
 */
export function addToHistory(article) {
  const history = getHistory().filter((h) => h.id !== article.id);
  history.unshift({ id: article.id, title: article.title, time: Date.now() });
  if (history.length > 50) history.length = 50;
  state.set('readingHistory', history);
  events.emit(EVENTS.HISTORY_CHANGED, { history });
}

/**
 * Get reading history.
 * @returns {Array<{id: string, title: string, time: number}>}
 */
export function getHistory() {
  return state.get('readingHistory') || [];
}

/**
 * Render reading history list.
 */
export function renderHistory() {
  const list = $('history-list');
  if (!list) return;

  const h = getHistory();
  if (!h.length) {
    list.innerHTML = '<div class="empty-state"><div class="empty-state-icon">🕐</div><div class="empty-state-title">Sin historial</div></div>';
    return;
  }

  let html = '';
  h.forEach((item) => {
    const timeStr = formatRelativeTime(item.time);
    html += `<div class="history-item" data-article-id="${item.id}">
      <span class="history-item-icon">📄</span>
      <div class="history-item-info">
        <div class="history-item-title">${item.title}</div>
        <div class="history-item-time">${timeStr}</div>
      </div>
    </div>`;
  });

  list.innerHTML = html;
}

/**
 * Clear all reading history.
 */
export function clearHistory() {
  state.set('readingHistory', []);
  renderHistory();
  showToast('🗑️ Historial limpiado');
}

/**
 * Initialize history module.
 */
export function initHistory() {
  const clearBtn = $('clear-history');
  if (clearBtn) {
    clearBtn.addEventListener('click', clearHistory);
  }

  events.on(EVENTS.ARTICLE_OPENED, (data) => {
    const history = getHistory();
    const existing = history.find((h) => h.id === data.id);
    if (!existing) {
      addToHistory({ id: data.id, title: data.title || data.id });
    }
  });

  events.on(EVENTS.TAB_CHANGED, (tab) => {
    if (tab === 'history') renderHistory();
  });

  renderHistory();
}
