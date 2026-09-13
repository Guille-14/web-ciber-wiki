/**
 * Personal Progress Dashboard module.
 * Shows user's reading progress, bookmarks, quiz scores, and streak.
 * @module modules/progress/progress
 */

import { state } from '../../core/state.js';
import { events, EVENTS } from '../../core/events.js';
import { $, escapeHtml } from '../../utils/dom.js';

const STORAGE_KEY = 'cyberwiki-progress';

/**
 * Get or initialize progress data.
 * @returns {Object}
 */
function getProgress() {
  const defaults = {
    articlesRead: [],
    bookmarks: [],
    quizScores: [],
    totalReadTime: 0,
    streak: 0,
    lastVisit: null,
    firstVisit: Date.now(),
  };

  const saved = state.get(STORAGE_KEY);
  if (saved) {
    // Update streak
    const today = new Date().toDateString();
    const lastVisit = saved.lastVisit ? new Date(saved.lastVisit).toDateString() : null;
    const yesterday = new Date(Date.now() - 86400000).toDateString();

    if (lastVisit === today) {
      // Same day, no change
    } else if (lastVisit === yesterday) {
      saved.streak = (saved.streak || 0) + 1;
    } else if (lastVisit) {
      saved.streak = 1; // Reset streak
    } else {
      saved.streak = 1; // First visit
    }
    saved.lastVisit = Date.now();
    state.set(STORAGE_KEY, saved);
    return saved;
  }

  const initial = { ...defaults, lastVisit: Date.now(), streak: 1 };
  state.set(STORAGE_KEY, initial);
  return initial;
}

/**
 * Mark an article as read.
 * @param {string} articleId
 */
export function markArticleRead(articleId) {
  const progress = getProgress();
  if (!progress.articlesRead.includes(articleId)) {
    progress.articlesRead.push(articleId);
    state.set(STORAGE_KEY, progress);
  }
}

/**
 * Add a quiz score.
 * @param {Object} score - { quizId, score, total, date }
 */
export function addQuizScore(score) {
  const progress = getProgress();
  progress.quizScores.push({ ...score, date: Date.now() });
  // Keep only last 50 scores
  if (progress.quizScores.length > 50) {
    progress.quizScores = progress.quizScores.slice(-50);
  }
  state.set(STORAGE_KEY, progress);
}

/**
 * Get progress statistics.
 * @returns {Object}
 */
export function getStats() {
  const progress = getProgress();
  const avgScore = progress.quizScores.length
    ? Math.round(progress.quizScores.reduce((s, q) => s + (q.score / q.total) * 100, 0) / progress.quizScores.length)
    : 0;

  return {
    articlesRead: progress.articlesRead.length,
    streak: progress.streak || 0,
    quizzesCompleted: progress.quizScores.length,
    avgScore,
    totalReadTime: progress.totalReadTime || 0,
  };
}

/**
 * Render progress dashboard into a container.
 * @param {HTMLElement} container
 * @param {Object} wikiData
 */
export function renderProgressDashboard(container, wikiData) {
  if (!container || !wikiData) return;

  const stats = getStats();
  const totalArticles = wikiData.articles.length;
  const readPct = totalArticles ? Math.round((stats.articlesRead / totalArticles) * 100) : 0;

  container.innerHTML = `
    <div class="progress-dashboard">
      <h3 class="progress-title">📊 Tu Progreso</h3>

      <div class="progress-stats-grid">
        <div class="progress-stat-card">
          <div class="progress-stat-value">${stats.articlesRead}</div>
          <div class="progress-stat-label">Artículos leídos</div>
          <div class="progress-stat-sub">${readPct}% de ${totalArticles}</div>
        </div>
        <div class="progress-stat-card">
          <div class="progress-stat-value">🔥 ${stats.streak}</div>
          <div class="progress-stat-label">Días seguidos</div>
          <div class="progress-stat-sub">racha actual</div>
        </div>
        <div class="progress-stat-card">
          <div class="progress-stat-value">${stats.quizzesCompleted}</div>
          <div class="progress-stat-label">Quizzes completados</div>
          <div class="progress-stat-sub">promedio: ${stats.avgScore}%</div>
        </div>
      </div>

      <div class="progress-bar-section">
        <div class="progress-bar-label">
          <span>Progreso de lectura</span>
          <span>${readPct}%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-bar-fill" style="width:${readPct}%"></div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Initialize progress tracking.
 */
export function initProgress() {
  getProgress(); // Initialize on load

  // Wiring de eventos: antes markArticleRead/addQuizScore existían pero
  // nadie los llamaba, y la clave no estaba en PERSISTENT_KEYS, así que
  // el progreso se perdía al recargar.
  events.on(EVENTS.ARTICLE_OPENED, (payload = {}) => {
    const id = payload.id || payload.article?.id;
    if (id) markArticleRead(String(id));
  });

  events.on(EVENTS.QUIZ_ENDED, (payload = {}) => {
    if (typeof payload.score === 'number' && typeof payload.total === 'number') {
      addQuizScore({ quizId: payload.quizId || 'quiz', score: payload.score, total: payload.total });
    }
  });
}
