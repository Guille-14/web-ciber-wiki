/**
 * Article modal component for CyberWiki Hub.
 * Handles article display, table of contents, reading progress, and related articles.
 * @module components/modal
 */

import { state } from '../core/state.js';
import { events, EVENTS } from '../core/events.js';
import { articleCache } from '../core/cache.js';
import { $, delegate, scrollToElement, escapeHtml } from '../utils/dom.js';
import { processAdmonitions, addCopyButtons } from '../utils/html.js';
import { processImages } from '../utils/image-handler.js';
import { getDifficultyClass, getCategoryName } from '../utils/format.js';

/** @type {HTMLElement|null} */
let modalOverlay = null;

/** @type {HTMLElement|null} */
let modalBody = null;

/** @type {HTMLElement|null} */
let modalTocList = null;

/** @type {HTMLElement|null} */
let modalToc = null;

/** @type {HTMLElement|null} */
let progressBar = null;

/** @type {HTMLElement|null} */
let backToTopBtn = null;

/** @type {object|null} */
let modalElements = null;

/** @type {number|null} */
let scrollTimeout = null;

/** @type {object|null} */
let storedWikiData = null;

/** @type {number} */
let savedScrollY = 0;

/** @type {HTMLElement|null} */
let lastFocusedElement = null;

/**
 * Get all focusable elements within a container.
 * @param {HTMLElement} container
 * @returns {HTMLElement[]}
 */
function getFocusableElements(container) {
  return Array.from(container.querySelectorAll(
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
  ));
}

/**
 * Set up focus trap for the modal.
 */
function trapFocus(e) {
  if (!modalOverlay || !modalOverlay.classList.contains('active')) return;
  if (e.key !== 'Tab') return;

  const focusable = getFocusableElements(modalOverlay);
  if (focusable.length === 0) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (e.shiftKey) {
    if (document.activeElement === first) {
      e.preventDefault();
      last.focus();
    }
  } else {
    if (document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
}

/**
 * Initialize modal component.
 * @param {object} [wikiData] - Wiki dataset containing articles.
 */
export function initModal(wikiData) {
  storedWikiData = wikiData || storedWikiData;
  modalOverlay = $('article-modal');
  modalBody = $('modal-body');
  modalTocList = $('modal-toc-list');
  modalToc = $('modal-toc');
  progressBar = $('reading-progress');
  backToTopBtn = $('back-to-top');

  modalElements = {
    close: $('modal-close'),
    title: $('modal-title'),
    category: $('modal-category'),
    difficulty: $('modal-difficulty'),
    readtime: $('modal-readtime'),
    breadcrumb: $('modal-breadcrumb'),
    bookmarkBtn: $('modal-bookmark'),
    fontDown: $('modal-font-down'),
    fontUp: $('modal-font-up'),
    shareBtn: $('modal-share')
  };

  setupModalEvents(wikiData);
  setupScrollHandler();
  document.addEventListener('keydown', trapFocus);
}

/**
 * Open article modal with content.
 * @param {string} articleId - ID of the article to display.
 * @param {object} [wikiData] - Wiki dataset containing articles.
 */
export function openModal(articleId, wikiData) {
  wikiData = wikiData || storedWikiData;
  if (!wikiData) return;

  const article = wikiData.articles.find(art => art && art.id === articleId);
  if (!article) return;

  state.set('currentArticleId', articleId);

  const currentArticle = state.get('currentArticleId');

  if (modalElements.title) {
    modalElements.title.textContent = article.title;
  }

  if (modalElements.category) {
    modalElements.category.textContent = article.category.toUpperCase();
  }

  if (modalElements.difficulty) {
    modalElements.difficulty.textContent = article.difficulty || 'Intermedio';
    modalElements.difficulty.className = 'difficulty-badge ' + getDifficultyClass(article.difficulty);
  }

  if (modalElements.readtime) {
    const readTime = articleCache.getReadTime(article.id) || 1;
    modalElements.readtime.textContent = '📖 ' + readTime + ' min';
  }

  if (modalElements.bookmarkBtn) {
    const bookmarks = state.get('bookmarks') || [];
    modalElements.bookmarkBtn.classList.toggle('bookmarked', bookmarks.includes(articleId));
  }

  const catName = getCategoryName(article.category, wikiData.categories);
  if (modalElements.breadcrumb) {
    modalElements.breadcrumb.innerHTML =
      `<a href="#" data-action="home">Inicio</a><span class="sep">›</span><a href="#" data-action="category" data-category="${escapeHtml(article.category)}">${escapeHtml(catName)}</a><span class="sep">›</span><span style="color:var(--text-dim)">${escapeHtml(article.title)}</span>`;
  }

  const contentHtml = generateToc(article.content);
  const related = getRelatedArticles(article, wikiData);
  const relatedHtml = buildRelatedHtml(related);
  const navHtml = buildNavHtml(article, wikiData);

  modalBody.innerHTML = contentHtml + navHtml + relatedHtml;
  processAdmonitions(modalBody);

  const fontSize = state.get('fontSize') || 14;
  modalBody.style.fontSize = fontSize + 'px';

  addCopyButtons(modalBody);
  processImages(modalBody);
  buildToc(contentHtml);

  if (modalOverlay) {
    lastFocusedElement = document.activeElement;
    savedScrollY = window.scrollY;
    document.body.classList.add('modal-open');
    modalOverlay.classList.add('active');
    modalOverlay.style.animation = 'none';
    setTimeout(() => {
      modalOverlay.style.animation = '';
    }, 10);

    const sidebar = $('sidebar');
    const mainContent = $('main-content');
    
    const closeBtn = modalElements.close;
    if (closeBtn) {
      setTimeout(() => closeBtn.focus(), 50);
    }
  }

  events.emit(EVENTS.ARTICLE_OPENED, {
    id: articleId,
    title: article.title
  });

  events.emit(EVENTS.MODAL_OPENED, { articleId });
}

/**
 * Close the article modal.
 */
export function closeModal() {
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
  }

  document.body.classList.remove('modal-open');
  window.scrollTo(0, savedScrollY);

  if (progressBar) {
    progressBar.style.width = '0%';
  }

  state.set('currentArticleId', null);

  if (lastFocusedElement && lastFocusedElement.focus) {
    lastFocusedElement.focus();
    lastFocusedElement = null;
  }

  if (scrollTimeout) {
    cancelAnimationFrame(scrollTimeout);
    scrollTimeout = null;
  }

  events.emit(EVENTS.MODAL_CLOSED, {});
  events.emit(EVENTS.ARTICLE_CLOSED, {});
}

/**
 * Update reading progress bar based on scroll position.
 */
export function updateReadingProgress() {
  if (!modalBody || !progressBar) return;

  const scrollTop = modalBody.scrollTop;
  const scrollHeight = modalBody.scrollHeight - modalBody.clientHeight;
  const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  progressBar.style.width = Math.min(pct, 100) + '%';
}

/**
 * Highlight active table of contents link based on scroll position.
 */
export function highlightActiveTocLink() {
  if (!modalBody || !modalTocList) return;

  const links = modalTocList.querySelectorAll('.modal-toc-link');
  const sections = modalBody.querySelectorAll('h2, h3');

  let activeIdx = -1;
  const modalRect = modalBody.getBoundingClientRect();

  sections.forEach((section) => {
    if (section.id && section.getBoundingClientRect().top - modalRect.top < 120) {
      const idx = Array.from(sections).indexOf(section);
      activeIdx = idx;
    }
  });

  links.forEach((link, idx) => {
    link.classList.toggle('active', idx === activeIdx);
  });
}

/**
 * Generate table of contents from article HTML and ensure all headings have IDs.
 * @param {string} html - Article HTML content.
 * @returns {string} Modified HTML with IDs on headings.
 */
export function generateToc(html) {
  const temp = document.createElement('div');
  temp.innerHTML = html;

  temp.querySelectorAll('h2, h3').forEach(h => {
    if (!h.id) {
      h.id = h.textContent.toLowerCase()
        .replace(/[^a-z0-9áéíóúñü\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
    }
  });

  return temp.innerHTML;
}

/**
 * Build and render the table of contents from article HTML.
 * @param {string} html - Article HTML content.
 */
export function buildToc(html) {
  if (!modalTocList || !modalToc) return;

  const temp = document.createElement('div');
  temp.innerHTML = html;

  const headings = temp.querySelectorAll('h2, h3');
  modalTocList.innerHTML = '';

  if (headings.length < 2) {
    modalToc.classList.remove('has-sections');
    return;
  }

  modalToc.classList.add('has-sections');

  headings.forEach((h, idx) => {
    const li = document.createElement('li');
    li.className = h.tagName === 'H3' ? 'modal-toc-h3' : 'modal-toc-h2';

    const a = document.createElement('a');
    a.className = 'modal-toc-link';
    a.textContent = h.textContent;
    a.dataset.target = h.id || 'section-' + idx;

    a.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = a.dataset.target;
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        scrollToElement(targetEl);
        modalTocList.querySelectorAll('.modal-toc-link').forEach(l => l.classList.remove('active'));
        a.classList.add('active');
      }
    });

    li.appendChild(a);
    modalTocList.appendChild(li);
  });
}

/**
 * Get related articles based on tag and category similarity.
 * @param {object} article - Current article.
 * @param {object} wikiData - Wiki dataset containing all articles.
 * @param {number} [max=4] - Maximum number of related articles.
 * @returns {Array<{article: object, score: number}>} Sorted related articles.
 */
export function getRelatedArticles(article, wikiData, max = 4) {
  const tags = article.tags || [];
  const scored = [];

  for (let i = 0; i < wikiData.articles.length; i++) {
    const a = wikiData.articles[i];
    if (!a || !a.id) continue;
    if (a.id === article.id) continue;

    const aTags = a.tags || [];
    let tagScore = 0;

    for (let t = 0; t < tags.length; t++) {
      for (let at = 0; at < aTags.length; at++) {
        if (aTags[at].toLowerCase() === tags[t].toLowerCase()) {
          tagScore++;
          break;
        }
      }
    }

    const score = tagScore * 3 + (a.category === article.category ? 2 : 0);
    if (score > 0) {
      scored.push({ article: a, score });
    }
  }

  return scored.sort((a, b) => b.score - a.score).slice(0, max);
}

/**
 * Build HTML for related articles section.
 * @param {Array<{article: object, score: number}>} related - Related articles.
 * @returns {string} HTML string.
 */
function buildRelatedHtml(related) {
  if (!related.length) return '';

  let html = '<div class="related-articles"><div class="related-title">📎 Artículos Relacionados</div><div class="related-grid">';

  related.forEach(r => {
    html += `<div class="related-card" data-article-id="${escapeHtml(r.article.id)}"><div class="related-card-title">${escapeHtml(r.article.title)}</div><div class="related-card-summary">${escapeHtml(r.article.summary)}</div></div>`;
  });

  html += '</div></div>';
  return html;
}

/**
 * Build navigation HTML for previous/next articles.
 * @param {object} article - Current article.
 * @param {object} wikiData - Wiki dataset containing all articles.
 * @returns {string} HTML string.
 */
function buildNavHtml(article, wikiData) {
  const allArticles = wikiData.articles;
  const currentIdx = allArticles.findIndex(art => art && art.id === article.id);
  let navHtml = '';

  if (currentIdx > 0) {
    const prev = allArticles[currentIdx - 1];
    if (prev && prev.id && prev.title) {
      navHtml += `<div class="article-nav-btn prev" data-article-id="${escapeHtml(prev.id)}"><span class="article-nav-btn-label">← Anterior</span><span class="article-nav-btn-title">${escapeHtml(prev.title)}</span></div>`;
    }
  }

  if (currentIdx !== -1 && currentIdx < allArticles.length - 1) {
    const next = allArticles[currentIdx + 1];
    if (next && next.id && next.title) {
      navHtml += `<div class="article-nav-btn next" data-article-id="${escapeHtml(next.id)}"><span class="article-nav-btn-label">Siguiente →</span><span class="article-nav-btn-title">${escapeHtml(next.title)}</span></div>`;
    }
  }

  return navHtml ? `<div class="article-nav">${navHtml}</div>` : '';
}

/**
 * Set up modal event handlers.
 * @param {object} wikiData - Wiki dataset.
 */
function setupModalEvents(wikiData) {
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  if (modalElements.close) {
    modalElements.close.addEventListener('click', closeModal);
  }

  if (modalElements.bookmarkBtn) {
    modalElements.bookmarkBtn.addEventListener('click', () => {
      const currentId = state.get('currentArticleId');
      if (currentId) {
        events.emit(EVENTS.BOOKMARK_TOGGLED, { articleId: currentId });
      }
    });
  }

  if (modalElements.fontDown) {
    modalElements.fontDown.addEventListener('click', () => {
      const current = state.get('fontSize') || 14;
      const newSize = Math.max(10, current - 2);
      state.set('fontSize', newSize);
      if (modalBody) {
        modalBody.style.fontSize = newSize + 'px';
      }
    });
  }

  if (modalElements.fontUp) {
    modalElements.fontUp.addEventListener('click', () => {
      const current = state.get('fontSize') || 14;
      const newSize = Math.min(24, current + 2);
      state.set('fontSize', newSize);
      if (modalBody) {
        modalBody.style.fontSize = newSize + 'px';
      }
    });
  }

  if (modalElements.shareBtn) {
    modalElements.shareBtn.addEventListener('click', () => {
      const title = modalElements.title?.textContent || '';
      const currentId = state.get('currentArticleId');
      const url = window.location.href.split('?')[0] + '?article=' + currentId;

      if (navigator.share) {
        navigator.share({ title, url }).catch(() => {});
      } else {
        navigator.clipboard.writeText(url).then(() => {
          events.emit(EVENTS.TOAST_SHOW, { message: '📤 Enlace copiado' });
        });
      }
    });
  }

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      if (modalBody) {
        modalBody.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  if (modalElements.breadcrumb) {
    delegate(modalElements.breadcrumb, 'click', 'a', (e, target) => {
      e.preventDefault();
      const action = target.dataset.action;

      if (action === 'home') {
        events.emit(EVENTS.TAB_CHANGED, 'articles');
      } else if (action === 'category') {
        const catId = target.dataset.category;
        events.emit(EVENTS.TAB_CHANGED, 'articles');
        events.emit(EVENTS.ARTICLE_FILTER_CHANGED, { category: catId });
      }
    });
  }

  if (modalBody) {
    delegate(modalBody, 'click', '.related-card', (e, target) => {
      const articleId = target.dataset.articleId;
      if (articleId) {
        openModal(articleId, wikiData);
      }
    });

    delegate(modalBody, 'click', '.article-nav-btn', (e, target) => {
      const articleId = target.dataset.articleId;
      if (articleId) {
        openModal(articleId, wikiData);
      }
    });
  }
}

/**
 * Set up scroll handler for reading progress and TOC highlighting.
 */
function setupScrollHandler() {
  if (!modalBody) return;

  modalBody.addEventListener('scroll', () => {
    if (scrollTimeout) {
      cancelAnimationFrame(scrollTimeout);
    }

    scrollTimeout = requestAnimationFrame(() => {
      updateReadingProgress();
      highlightActiveTocLink();

      if (backToTopBtn) {
        backToTopBtn.classList.toggle('visible', modalBody.scrollTop > 300);
      }
    });
  });
}
