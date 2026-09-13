/**
 * Format relative time (e.g., "hace 2 horas", "hace 3 días")
 * @param {Date|number|string} date
 * @returns {string}
 */
export const formatRelativeTime = (date) => {
  const now = Date.now();
  const then = new Date(date).getTime();
  const seconds = Math.floor((now - then) / 1000);

  if (seconds < 60) return 'hace un momento';
  if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    return minutes === 1 ? 'hace 1 minuto' : `hace ${minutes} minutos`;
  }
  if (seconds < 86400) {
    const hours = Math.floor(seconds / 3600);
    return hours === 1 ? 'hace 1 hora' : `hace ${hours} horas`;
  }
  if (seconds < 2592000) {
    const days = Math.floor(seconds / 86400);
    return days === 1 ? 'hace 1 día' : `hace ${days} días`;
  }
  if (seconds < 31536000) {
    const months = Math.floor(seconds / 2592000);
    return months === 1 ? 'hace 1 mes' : `hace ${months} meses`;
  }
  const years = Math.floor(seconds / 31536000);
  return years === 1 ? 'hace 1 año' : `hace ${years} años`;
};

/**
 * Format read time from word count
 * @param {string} text - Article text content
 * @param {number} [wordsPerMinute=200]
 * @returns {string} e.g., "5 min de lectura"
 */
export const formatReadTime = (text, wordsPerMinute = 200) => {
  if (!text || typeof text !== 'string') return '1 min de lectura';
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));
  return `${minutes} min de lectura`;
};

/**
 * Get difficulty CSS class
 * @param {string} difficulty - "Principiante" | "Intermedio" | "Avanzado"
 * @returns {string} CSS class name
 */
export const getDifficultyClass = (difficulty) => {
  const map = {
    Principiante: 'difficulty-beginner',
    Intermedio: 'difficulty-intermediate',
    Avanzado: 'difficulty-advanced',
  };
  return map[difficulty] || 'difficulty-beginner';
};

/**
 * Get category name by ID
 * @param {string} catId
 * @param {Array} categories
 * @returns {string}
 */
export const getCategoryName = (catId, categories) => {
  if (!Array.isArray(categories)) return catId || '';
  const cat = categories.find((c) => c.id === catId);
  return cat ? cat.name : catId || '';
};

/**
 * Truncate text with ellipsis
 * @param {string} text
 * @param {number} maxLength
 * @returns {string}
 */
export const truncate = (text, maxLength) => {
  if (!text || typeof text !== 'string') return '';
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '...';
};

/**
 * Simple hash code for deterministic daily selection
 * @param {string} str
 * @returns {number}
 */
export const hashCode = (str) => {
  if (!str || typeof str !== 'string') return 0;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
};

/**
 * Get article of the day (deterministic by date)
 * @param {Array} articles
 * @returns {Object}
 */
export const getArticleOfTheDay = (articles) => {
  if (!Array.isArray(articles) || articles.length === 0) return null;
  const today = new Date().toISOString().slice(0, 10);
  const index = Math.abs(hashCode(today)) % articles.length;
  return articles[index];
};

/**
 * Score relevance between two articles (for related articles)
 * @param {Object} article1
 * @param {Object} article2
 * @returns {number} Score 0-100
 */
export const scoreRelevance = (article1, article2) => {
  if (!article1 || !article2) return 0;

  let score = 0;

  if (article1.category && article1.category === article2.category) {
    score += 30;
  }

  if (article1.difficulty && article1.difficulty === article2.difficulty) {
    score += 10;
  }

  const tags1 = article1.tags || [];
  const tags2 = article2.tags || [];
  if (Array.isArray(tags1) && Array.isArray(tags2)) {
    const common = tags1.filter((t) => tags2.includes(t));
    score += Math.min(40, common.length * 10);
  }

  const words1 = (article1.title || '').toLowerCase().split(/\s+/);
  const words2 = (article2.title || '').toLowerCase().split(/\s+/);
  const titleOverlap = words1.filter((w) => w.length > 3 && words2.includes(w));
  score += Math.min(20, titleOverlap.length * 5);

  return Math.min(100, score);
};

/**
 * Format number with locale (e.g., "2,800")
 * @param {number} num
 * @returns {string}
 */
export const formatNumber = (num) => {
  if (num === null || num === undefined) return '0';
  return new Intl.NumberFormat('es-ES').format(Number(num));
};

/**
 * Generate slug from text
 * @param {string} text
 * @returns {string}
 */
export const slugify = (text) => {
  if (!text || typeof text !== 'string') return '';
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
};
