const DANGEROUS_TAGS = /<(script|iframe|object|embed|form|style|link|meta|base)[^>]*>[\s\S]*?<\/\1>|<(script|iframe|object|embed|form|style|link|meta|base)[^>]*\/?>/gi;

const TAG_STRIP = /<[^>]+>/g;

const SAFE_TAGS = new Set([
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'p', 'a', 'ul', 'ol', 'li',
  'code', 'pre', 'table', 'thead', 'tbody', 'tr', 'th', 'td',
  'div', 'span', 'strong', 'b', 'em', 'i', 'img',
  'blockquote', 'br', 'hr', 'sup', 'sub', 'dl', 'dd', 'dt',
  'details', 'summary', 'kbd', 'mark', 'small', 'u', 's',
  'abbr', 'cite', 'q', 'del', 'ins', 'abbr',
]);

const EVENT_HANDLER = /\s+on\w+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi;

const JAVASCRIPT_URL = /javascript\s*:/gi;

const INLINE_STYLE_URL = /url\s*\(\s*['"]?\s*javascript\s*:/gi;

/**
 * Sanitize HTML string - remove dangerous tags and attributes
 * @param {string} dirty - Raw HTML string
 * @param {Object} [options={}]
 * @param {string[]} [options.allowedTags] - Additional allowed tags
 * @param {string[]} [options.allowedAttributes] - Additional allowed attributes per tag
 * @returns {string} Sanitized HTML
 */
export const sanitize = (dirty, options = {}) => {
  if (!dirty || typeof dirty !== 'string') return '';

  const allowedTags = new Set([...SAFE_TAGS, ...(options.allowedTags || [])]);

  let clean = dirty;

  // Remove dangerous tags and their contents
  clean = clean.replace(DANGEROUS_TAGS, '');

  // Process remaining tags: strip unknown ones, clean attributes
  clean = clean.replace(/<[^>]+>/g, (tag) => {
    // Self-closing tags or closing tags
    if (tag.startsWith('</')) {
      const tagName = tag.replace(/<\/|>/g, '').trim().toLowerCase();
      return allowedTags.has(tagName) ? tag : '';
    }

    // Opening tags
    const match = tag.match(/^<(\w[\w-]*)/);
    if (!match) return '';

    const tagName = match[1].toLowerCase();
    if (!allowedTags.has(tagName)) return '';

    // Clean attributes
    let cleaned = tag.replace(EVENT_HANDLER, '');

    // Remove dangerous protocol URLs in href, src, action attributes
    cleaned = cleaned.replace(
      /(href|src|action|formaction|data)\s*=\s*(["'])\s*(javascript|vbscript|livescript)\s*:[^"']*\2/gi,
      '$1=$2#$3'
    );

    // Remove dangerous style expressions and inline javascript
    cleaned = cleaned.replace(/style\s*=\s*(["'])[\s\S]*?(expression|behavior|-moz-binding|javascript:)[\s\S]*?\1/gi, '');
    cleaned = cleaned.replace(INLINE_STYLE_URL, 'url(');

    // Remove data: URIs except for safe image types in <img>
    if (tagName === 'img') {
      cleaned = cleaned.replace(
        /(href|src|action)\s*=\s*(["'])\s*data\s*:[^"']*\2/gi,
        (match) => {
          const val = match.split('=')[1].replace(/^(["'])/, '').replace(/["']$/, '');
          // Allow only safe image MIME types
          if (/^data:image\/(png|jpe?g|gif|webp|avif|bmp|ico)[;,]/i.test(val)) {
            return match;
          }
          return match.replace(/(href|src|action)/, '$1 data-blocked');
        }
      );
    } else {
      cleaned = cleaned.replace(
        /(href|src|action)\s*=\s*(["'])\s*data\s*:[^"']*\2/gi,
        '$1=$2#$3'
      );
    }

    return cleaned;
  });

  // NOTA DE SEGURIDAD: aquí existía un bloque que decodificaba entidades
  // (&lt; -> <) DESPUÉS de filtrar. Eso reconvertía payloads como
  // "&lt;img src=x onerror=...&gt;" en tags vivos (XSS ejecutable vía chat).
  // El navegador ya decodifica entidades al renderizar texto, así que no
  // hace falta re-decodificar aquí jamás.

  // Remove any null bytes
  clean = clean.replace(/\0/g, '');

  return clean;
};

/**
 * Highlight search match in text
 * @param {string} text - Text to highlight
 * @param {string} query - Search query
 * @returns {string} HTML with highlighted matches
 */
export const highlightMatch = (text, query) => {
  if (!text || !query || typeof text !== 'string' || typeof query !== 'string') {
    return text || '';
  }

  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escaped})`, 'gi');

  return text
    .replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
    .replace(regex, '<mark>$1</mark>');
};

/**
 * Process admonition boxes (tip, warning, danger, info)
 * @param {HTMLElement} container
 */
export const processAdmonitions = (container) => {
  if (!container || typeof container.querySelectorAll !== 'function') return;

  const admonitionMap = {
    tip: { icon: '💡', label: 'Tip', color: '#10b981' },
    warning: { icon: '⚠️', label: 'Warning', color: '#f59e0b' },
    danger: { icon: '🛑', label: 'Danger', color: '#ef4444' },
    info: { icon: 'ℹ️', label: 'Info', color: '#3b82f6' },
    note: { icon: '📝', label: 'Note', color: '#6366f1' },
    important: { icon: '❗', label: 'Important', color: '#ec4899' },
    caution: { icon: '⚡', label: 'Caution', color: '#f97316' },
  };

  const elements = container.querySelectorAll('[data-admonition]');
  elements.forEach((el) => {
    const type = el.getAttribute('data-admonition').toLowerCase();
    const config = admonitionMap[type] || admonitionMap.info;

    if (!el.querySelector('.admonition-header')) {
      const header = document.createElement('div');
      header.className = 'admonition-header';
      header.innerHTML = `<span>${config.icon}</span><span>${config.label}</span>`;
      el.prepend(header);
    }

    el.style.borderLeft = `4px solid ${config.color}`;
    el.style.background = `${config.color}11`;
    el.classList.add('admonition', `admonition-${type}`);
  });
};

/**
 * Generate table of contents from HTML
 * @param {string} html - Article HTML content
 * @returns {Array<{id: string, text: string, level: number}>}
 */
export const generateToc = (html) => {
  if (!html || typeof html !== 'string') return [];

  const headingRegex = /<h([1-6])\s*(?:id="([^"]*)")?[^>]*>([\s\S]*?)<\/h\1>/gi;
  const toc = [];
  let headingCount = 0;

  let match;
  while ((match = headingRegex.exec(html)) !== null) {
    const level = parseInt(match[1], 10);
    const text = match[3]
      .replace(TAG_STRIP, '')
      .trim();

    if (!text) continue;

    const id = match[2] || text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');

    const finalId = id || `heading-${headingCount}`;
    headingCount++;

    toc.push({ id: finalId, text, level });
  }

  return toc;
};

/**
 * Add copy buttons to code blocks
 * @param {HTMLElement} container
 */
export const addCopyButtons = (container) => {
  if (!container || typeof container.querySelectorAll !== 'function') return;

  const codeBlocks = container.querySelectorAll('pre');
  codeBlocks.forEach((pre) => {
    if (pre.querySelector('.copy-btn')) return;

    const btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Copy code');
    btn.textContent = 'Copy';
    btn.style.cssText = `
      position: absolute;
      top: 8px;
      right: 8px;
      padding: 4px 10px;
      font-size: 12px;
      border: 1px solid rgba(255,255,255,0.2);
      border-radius: 4px;
      background: rgba(255,255,255,0.1);
      color: #ccc;
      cursor: pointer;
      opacity: 0;
      transition: opacity 0.2s;
      z-index: 1;
    `;

    pre.style.position = 'relative';
    pre.appendChild(btn);

    pre.addEventListener('mouseenter', () => {
      btn.style.opacity = '1';
    });

    pre.addEventListener('mouseleave', () => {
      btn.style.opacity = '0';
    });

    btn.addEventListener('click', async () => {
      const code = pre.querySelector('code');
      const text = code ? code.textContent : pre.textContent;

      try {
        await navigator.clipboard.writeText(text);
        btn.textContent = 'Copied!';
        btn.style.color = '#10b981';
        setTimeout(() => {
          btn.textContent = 'Copy';
          btn.style.color = '#ccc';
        }, 2000);
      } catch {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand('copy');
          btn.textContent = 'Copied!';
          btn.style.color = '#10b981';
          setTimeout(() => {
            btn.textContent = 'Copy';
            btn.style.color = '#ccc';
          }, 2000);
        } catch {
          btn.textContent = 'Failed';
          btn.style.color = '#ef4444';
          setTimeout(() => {
            btn.textContent = 'Copy';
            btn.style.color = '#ccc';
          }, 2000);
        }
        document.body.removeChild(textarea);
      }
    });
  });
};

/**
 * Format markdown text to HTML
 * @param {string} text - Markdown text
 * @returns {string} HTML string
 */
export const formatMarkdown = (text) => {
  if (!text || typeof text !== 'string') return '';

  let html = text;

  // Escape HTML entities first to prevent injection
  html = html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Code blocks (must be before inline code)
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) => {
    const langAttr = lang ? ` class="language-${lang}"` : '';
    return `<pre><code${langAttr}>${code.trim()}</code></pre>`;
  });

  // Inline code
  html = html.replace(/`([^`\n]+)`/g, '<code>$1</code>');

  // Headings
  html = html.replace(/^######\s+(.+)$/gm, '<h6>$1</h6>');
  html = html.replace(/^#####\s+(.+)$/gm, '<h5>$1</h5>');
  html = html.replace(/^####\s+(.+)$/gm, '<h4>$1</h4>');
  html = html.replace(/^###\s+(.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^##\s+(.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^#\s+(.+)$/gm, '<h1>$1</h1>');

  // Bold and italic
  html = html.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  html = html.replace(/___(.+?)___/g, '<strong><em>$1</em></strong>');
  html = html.replace(/__(.+?)__/g, '<strong>$1</strong>');
  html = html.replace(/_(.+?)_/g, '<em>$1</em>');

  // Strikethrough
  html = html.replace(/~~(.+?)~~/g, '<del>$1</del>');

  // Blockquotes
  html = html.replace(/^&gt;\s+(.+)$/gm, '<blockquote>$1</blockquote>');
  // Merge consecutive blockquotes
  html = html.replace(/<\/blockquote>\n<blockquote>/g, '\n');

  // Horizontal rules
  html = html.replace(/^---+$/gm, '<hr>');
  html = html.replace(/^\*\*\*+$/gm, '<hr>');

  // Unordered lists
  html = html.replace(/^[\-\*]\s+(.+)$/gm, '<li>$1</li>');
  html = html.replace(/((?:<li>.*<\/li>\n?)+)/g, '<ul>$1</ul>');

  // Ordered lists
  html = html.replace(/^\d+\.\s+(.+)$/gm, '<li>$1</li>');
  // Wrap consecutive list items in ol (only if not already in ul)
  html = html.replace(/(?<!<\/ul>)((?:<li>.*<\/li>\n?)+)(?!<\/ul>)/g, (match) => {
    if (match.includes('<ul>')) return match;
    return `<ol>${match}</ol>`;
  });

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

  // Images
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" loading="lazy">');

  // Tables
  html = html.replace(/^(\|.+\|)\n(\|[-| :]+\|)\n((?:\|.+\|\n?)*)/gm, (_, header, separator, body) => {
    const headers = header.split('|').filter((cell) => cell.trim());
    const rows = body.trim().split('\n');

    let table = '<table><thead><tr>';
    headers.forEach((h) => {
      table += `<th>${h.trim()}</th>`;
    });
    table += '</tr></thead><tbody>';
    rows.forEach((row) => {
      const cells = row.split('|').filter((cell) => cell.trim());
      table += '<tr>';
      cells.forEach((cell) => {
        table += `<td>${cell.trim()}</td>`;
      });
      table += '</tr>';
    });
    table += '</tbody></table>';
    return table;
  });

  // Paragraphs: wrap remaining bare text lines
  html = html.replace(/^(?!<[a-z/])((?!$).+)$/gm, (match) => {
    const trimmed = match.trim();
    if (!trimmed) return '';
    if (/^<(h[1-6]|ul|ol|li|pre|code|blockquote|hr|table|thead|tbody|tr|th|td|div)/i.test(trimmed)) {
      return match;
    }
    return `<p>${trimmed}</p>`;
  });

  // Line breaks
  html = html.replace(/  \n/g, '<br>');

  return html.trim();
};

/**
 * Parse article content and return structured data
 * @param {string} html - Article HTML content
 * @returns {{ headings: Array<{id: string, text: string, level: number}>, codeBlocks: Array<{language: string, content: string}>, links: Array<{href: string, text: string}> }}
 */
export const parseArticleContent = (html) => {
  if (!html || typeof html !== 'string') {
    return { headings: [], codeBlocks: [], links: [] };
  }

  const headings = [];
  const codeBlocks = [];
  const links = [];

  // Extract headings
  const headingRegex = /<h([1-6])\s*(?:id="([^"]*)")?[^>]*>([\s\S]*?)<\/h\1>/gi;
  let match;
  while ((match = headingRegex.exec(html)) !== null) {
    const level = parseInt(match[1], 10);
    const text = match[3].replace(TAG_STRIP, '').trim();
    const id = match[2] || text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');

    if (text) {
      headings.push({ id: id || `heading-${headings.length}`, text, level });
    }
  }

  // Extract code blocks
  const codeBlockRegex = /<pre><code(?:\s+class="language-(\w+)")?[^>]*>([\s\S]*?)<\/code><\/pre>/gi;
  while ((match = codeBlockRegex.exec(html)) !== null) {
    const language = match[1] || '';
    const content = match[2]
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .trim();

    codeBlocks.push({ language, content });
  }

  // Extract links
  const linkRegex = /<a\s+(?:[^>]*?)href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi;
  while ((match = linkRegex.exec(html)) !== null) {
    const href = match[1];
    const text = match[2].replace(TAG_STRIP, '').trim();
    if (href && text) {
      links.push({ href, text });
    }
  }

  return { headings, codeBlocks, links };
};

/**
 * Extract text content from HTML (for search indexing)
 * @param {string} html
 * @returns {string} Plain text
 */
export const extractText = (html) => {
  if (!html || typeof html !== 'string') return '';

  let text = html;

  // Replace line breaks and block elements with newlines
  text = text.replace(/<br\s*\/?>/gi, '\n');
  text = text.replace(/<\/(p|div|h[1-6]|li|tr|blockquote)>/gi, '\n');
  text = text.replace(/<(hr)\s*\/?>/gi, '\n---\n');

  // Remove all tags
  text = text.replace(TAG_STRIP, '');

  // Decode HTML entities
  text = text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(parseInt(code, 10)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));

  // Collapse whitespace
  text = text.replace(/[ \t]+/g, ' ');

  // Collapse multiple newlines
  text = text.replace(/\n{3,}/g, '\n\n');

  return text.trim();
};
