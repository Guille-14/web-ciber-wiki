/**
 * Search Autocomplete - Dropdown suggestions as user types
 * @module modules/search/search-autocomplete
 */

import { state } from '../../core/state.js';
import { events, EVENTS } from '../../core/events.js';
import { escapeHtml } from '../../utils/dom.js';

let container = null;
let isOpen = false;
let selectedIndex = -1;
let recentSearches = [];
const MAX_RECENT = 5;
const MAX_SUGGESTIONS = 8;

/**
 * Initialize autocomplete for search input
 * @param {Array} articles - Wiki data articles
 */
export function initAutocomplete(articles) {
  const searchInput = document.getElementById('search-input');
  if (!searchInput) return;

  recentSearches = state.get('recentSearches') || [];

  container = document.createElement('div');
  container.className = 'search-autocomplete';
  container.setAttribute('role', 'listbox');
  container.setAttribute('aria-label', 'Sugerencias de busqueda');
  container.style.display = 'none';
  searchInput.parentNode.appendChild(container);

  searchInput.setAttribute('role', 'combobox');
  searchInput.setAttribute('aria-expanded', 'false');
  searchInput.setAttribute('aria-controls', 'search-autocomplete-list');
  searchInput.setAttribute('aria-autocomplete', 'list');

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim();
    if (query.length < 2) {
      showRecentSearches();
      return;
    }
    showSuggestions(query, articles);
  });

  searchInput.addEventListener('focus', () => {
    const query = searchInput.value.trim();
    if (query.length >= 2) {
      showSuggestions(query, articles);
    } else {
      showRecentSearches();
    }
  });

  searchInput.addEventListener('blur', () => {
    setTimeout(() => close(), 200);
  });

  searchInput.addEventListener('keydown', (e) => {
    if (!isOpen) return;
    const items = container.querySelectorAll('[role="option"]');
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
        updateSelection(items);
        break;
      case 'ArrowUp':
        e.preventDefault();
        selectedIndex = Math.max(selectedIndex - 1, -1);
        updateSelection(items);
        break;
      case 'Enter':
        if (selectedIndex >= 0 && items[selectedIndex]) {
          e.preventDefault();
          items[selectedIndex].click();
        }
        break;
      case 'Escape':
        close();
        searchInput.blur();
        break;
    }
  });
}

function showSuggestions(query, articles) {
  if (!container || !articles) return;
  const lowerQuery = query.toLowerCase();
  const results = [];
  for (const article of articles) {
    if (results.length >= MAX_SUGGESTIONS) break;
    const title = (article.title || '').toLowerCase();
    const summary = (article.summary || '').toLowerCase();
    const tags = (article.tags || []).join(' ').toLowerCase();
    let score = 0;
    if (title.includes(lowerQuery)) score += 10;
    if (title.startsWith(lowerQuery)) score += 5;
    if (summary.includes(lowerQuery)) score += 3;
    if (tags.includes(lowerQuery)) score += 2;
    if (score > 0) {
      results.push({ id: article.id, title: article.title, category: article.category, score });
    }
  }
  results.sort((a, b) => b.score - a.score);
  if (results.length === 0) { close(); return; }
  container.innerHTML = results.map((r, i) => `
    <div class="search-autocomplete-item" role="option" data-id="${r.id}" data-index="${i}">
      <span class="search-autocomplete-icon">📄</span>
      <div class="search-autocomplete-info">
        <div class="search-autocomplete-title">${escapeHtml(r.title)}</div>
        <div class="search-autocomplete-category">${escapeHtml(r.category || '')}</div>
      </div>
    </div>
  `).join('');
  open();
  container.querySelectorAll('[data-id]').forEach(item => {
    item.addEventListener('click', () => {
      const id = item.dataset.id;
      const article = articles.find(a => a.id === id);
      if (article) {
        addToRecentSearches(query);
        events.emit(EVENTS.ARTICLE_OPENED, { article });
        import('../../components/modal.js').then(m => m.openModal(id, articles)).catch(() => {});
      }
      close();
    });
  });
}

function showRecentSearches() {
  if (!container || recentSearches.length === 0) { close(); return; }
  container.innerHTML = `
    <div class="search-autocomplete-header">
      <span>Busquedas recientes</span>
      <button class="search-autocomplete-clear" data-action="clear-recent">Limpiar</button>
    </div>
    ${recentSearches.map((q, i) => `
      <div class="search-autocomplete-item search-autocomplete-recent" role="option" data-query="${escapeHtml(q)}" data-index="${i}">
        <span class="search-autocomplete-icon">🕐</span>
        <div class="search-autocomplete-info">
          <div class="search-autocomplete-title">${escapeHtml(q)}</div>
        </div>
      </div>
    `).join('')}
  `;
  open();
  container.querySelectorAll('[data-query]').forEach(item => {
    item.addEventListener('click', () => {
      const query = item.dataset.query;
      const searchInput = document.getElementById('search-input');
      if (searchInput) { searchInput.value = query; searchInput.dispatchEvent(new Event('input')); }
      close();
    });
  });
  const clearBtn = container.querySelector('[data-action="clear-recent"]');
  if (clearBtn) {
    clearBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      recentSearches = [];
      state.set('recentSearches', []);
      close();
    });
  }
}

function addToRecentSearches(query) {
  if (!query || query.length < 2) return;
  recentSearches = recentSearches.filter(q => q !== query);
  recentSearches.unshift(query);
  recentSearches = recentSearches.slice(0, MAX_RECENT);
  state.set('recentSearches', recentSearches);
}

function updateSelection(items) {
  items.forEach((item, i) => { item.classList.toggle('selected', i === selectedIndex); });
  const searchInput = document.getElementById('search-input');
  if (selectedIndex >= 0 && items[selectedIndex]) {
    searchInput.setAttribute('aria-activedescendant', items[selectedIndex].id);
  } else {
    searchInput.removeAttribute('aria-activedescendant');
  }
}

function open() {
  if (!container) return;
  isOpen = true;
  selectedIndex = -1;
  container.style.display = 'block';
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.setAttribute('aria-expanded', 'true');
}

function close() {
  if (!container) return;
  isOpen = false;
  selectedIndex = -1;
  container.style.display = 'none';
  container.innerHTML = '';
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.setAttribute('aria-expanded', 'false');
    searchInput.removeAttribute('aria-activedescendant');
  }
}
