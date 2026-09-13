import { state } from '../../core/state.js';
import { events, EVENTS } from '../../core/events.js';
import { $, debounce } from '../../utils/dom.js';
import { extractText } from '../../utils/html.js';
import { initAutocomplete } from './search-autocomplete.js';

const SEARCH_DEBOUNCE_MS = 180;
const RAG_MAX_RESULTS = 10;

/** @type {Map<number, {title: string, summary: string, tags: string, content: string}>} */
let searchIndex = new Map();

/**
 * Precompute search index for fast lookups.
 * @param {Array} articles
 */
function buildSearchIndex(articles) {
  searchIndex.clear();
  for (let i = 0; i < articles.length; i++) {
    const a = articles[i];
    if (!a || !a.title) continue;
    searchIndex.set(i, {
      title: a.title.toLowerCase(),
      summary: (a.summary || '').toLowerCase(),
      tags: (a.tags || []).map(t => t.toLowerCase()).join(' '),
      content: extractText(a.content || '').toLowerCase().slice(0, 2000),
    });
  }
}

/**
 * Simple fuzzy match: checks if all characters of query appear in order.
 * @param {string} text
 * @param {string} query
 * @returns {boolean}
 */
function fuzzyMatch(text, query) {
  let qi = 0;
  for (let ti = 0; ti < text.length && qi < query.length; ti++) {
    if (text[ti] === query[qi]) qi++;
  }
  return qi === query.length;
}

/**
 * Initialize search module - set up input event listeners
 * @param {Object} wikiData - WIKI_DATA object
 */
export function initSearch(wikiData) {
  const searchInput = $('search-input');
  const searchKbd = document.querySelector('.search-kbd');

  if (!searchInput) return;

  searchInput.onfocus = () => {
    if (searchKbd) searchKbd.style.display = 'none';
  };

  searchInput.onblur = () => {
    if (searchKbd && !searchInput.value) searchKbd.style.display = '';
  };

  if (wikiData?.articles) {
    buildSearchIndex(wikiData.articles);
  }

  const debouncedSearch = debounce((query) => {
    state.set('searchQuery', query);
    events.emit(EVENTS.SEARCH_QUERY_CHANGED, { query });
    events.emit(EVENTS.SEARCH_RESULTS, {
      query,
      results: searchArticles(query, wikiData.articles),
    });
  }, SEARCH_DEBOUNCE_MS);

  searchInput.oninput = (e) => {
    debouncedSearch(e.target.value);
  };

  if (wikiData?.articles) {
    initAutocomplete(wikiData.articles);
  }
}

/**
 * Search articles by query with precomputed index and fuzzy fallback.
 * @param {string} query
 * @param {Array} articles
 * @returns {Array} Filtered and scored articles
 */
export function searchArticles(query, articles) {
  if (!query || !articles) return [];

  const q = query.toLowerCase();
  const results = [];

  for (let i = 0; i < articles.length; i++) {
    const idx = searchIndex.get(i);
    if (!idx) continue;

    let score = 0;

    if (idx.title.includes(q)) score += 3;
    if (idx.summary.includes(q)) score += 2;
    if (idx.tags.includes(q)) score += 1;
    if (idx.content.includes(q)) score += 1;

    if (score === 0) {
      if (fuzzyMatch(idx.title, q) && q.length >= 3) score += 1;
    }

    if (score > 0 && articles[i]) {
      results.push({ article: articles[i], score });
    }
  }

  results.sort((a, b) => b.score - a.score);
  return results.map(item => item.article);
}

/**
 * RAG search for chat context
 * Searches articles, glossary, and cheatsheets
 * @param {string} query
 * @param {Object} wikiData
 * @returns {Array} Ranked results with context
 */
export function searchWikiRAG(query, wikiData) {
  const q = query.toLowerCase();
  const results = [];

  for (let i = 0; i < wikiData.articles.length && results.length < 5; i++) {
    const a = wikiData.articles[i];
    if (!a || !a.title) continue;
    const score =
      (a.title.toLowerCase().includes(q) ? 3 : 0) +
      ((a.summary || '').toLowerCase().includes(q) ? 2 : 0) +
      ((a.tags || []).some((t) => t.toLowerCase().includes(q)) ? 1 : 0);

    if (score > 0) {
      const content = a.content.replace(/<[^>]+>/g, '').trim().slice(0, 500);
      results.push({ title: a.title, summary: a.summary, content, score, category: a.category });
    }
  }

  for (let i = 0; i < wikiData.glossary.length && results.length < 8; i++) {
    const g = wikiData.glossary[i];
    if (g.term.toLowerCase().includes(q) || g.desc.toLowerCase().includes(q)) {
      results.push({ title: g.term, summary: g.desc, score: 2, type: 'glossary' });
    }
  }

  results.sort((a, b) => b.score - a.score);
  return results.slice(0, RAG_MAX_RESULTS);
}

/**
 * Build RAG context string for chat
 * @param {string} query
 * @param {Object} wikiData
 * @returns {string} Context string for LLM prompt
 */
export function buildRAGContext(query, wikiData) {
  const results = searchWikiRAG(query, wikiData);
  if (!results.length) return '';

  let ctx = '\n\n--- CONTEXTO DE LA WIKI CYBERWIKI (usa esto para responder si es relevante) ---\n';
  for (const r of results) {
    ctx += `\n[${r.type || 'artículo'}] ${r.title}\nResumen: ${r.summary}\n`;
    if (r.content) ctx += `Contenido: ${r.content}\n`;
  }
  ctx += '--- FIN DEL CONTEXTO ---\n';
  return ctx;
}

/**
 * Clear search and reset filters
 */
export function clearSearch() {
  const searchInput = $('search-input');
  if (searchInput) searchInput.value = '';

  state.update({
    searchQuery: '',
    activeTag: '',
  });

  events.emit(EVENTS.SEARCH_QUERY_CHANGED, { query: '' });
  events.emit(EVENTS.SEARCH_RESULTS, { query: '', results: [] });
}

/**
 * Handle typewriter placeholder animation
 */
export function initPlaceholderAnimation() {
  const searchInput = $('search-input');
  if (!searchInput) return;

  const placeholders = [
    'Buscar técnicas, comandos, vulnerabilidades...',
    'Ej: kerberoasting, BloodHound, ffuf...',
    'Buscar por tags: AD, web, cloud...',
    '¿Qué quieres aprender hoy?',
  ];

  let phIdx = 0;

  setInterval(() => {
    phIdx = (phIdx + 1) % placeholders.length;
    searchInput.placeholder = placeholders[phIdx];
  }, 5000);
}
