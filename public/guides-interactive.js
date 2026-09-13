(function () {
  'use strict';

  const getData = () => window.GUIDES_DATA || (window.WIKI_DATA && window.WIKI_DATA.guides) || null;
  let G = getData();
  let activeGuideId = null;

  const $ = id => document.getElementById(id);
  const gallery = $('guides-gallery');
  const filters = $('guides-filters');
  const modal = $('guide-modal');
  const modalTitle = $('guide-modal-title');
  const modalMeta = $('guide-modal-meta');
  const modalBody = $('guide-modal-body');
  const contentC = $('guide-content-container');
  const relatedC = $('guide-related-articles');

  const catColors = {
    roadmap: '#58a6ff', tecnicas: '#a855f7', herramientas: '#238636',
    carrera: '#22d3ee', legal: '#f59e0b'
  };
  const levelColors = {
    Principiante: '#238636', Intermedio: '#a855f7', Avanzado: '#ef4444', Todos: '#58a6ff'
  };

  function renderFilters(active) {
    if (!G || !G.categories) return;
    filters.innerHTML = G.categories.map(c =>
      `<button class="guide-filter-btn${c.id === active ? ' active' : ''}" data-cat="${c.id}">${c.icon} ${c.label}</button>`
    ).join('');
    filters.querySelectorAll('.guide-filter-btn').forEach(btn =>
      btn.onclick = () => renderGallery(btn.dataset.cat)
    );
  }

  function renderHeroStats() {
    if (!G || !G.guides) return;
    var total = G.guides.length;
    var totalTime = G.guides.reduce(function(s, g) { return s + (g.estimatedReadTime || 15); }, 0);
    var totalElems = G.guides.reduce(function(s, g) { return s + (g.elements || 0); }, 0);
    var el1 = $('guides-total-count');
    var el2 = $('guides-total-time');
    var el3 = $('guides-total-elems');
    if (el1) el1.textContent = total;
    if (el2) el2.textContent = totalTime;
    if (el3) el3.textContent = totalElems;
  }

  function renderGallery(category) {
    if (!G || !G.guides) return;
    renderFilters(category);
    const filtered = category === 'all' ? G.guides : G.guides.filter(g => g.category === category);
    gallery.innerHTML = filtered.map((g, i) => {
      const cc = catColors[g.category] || '#58a6ff';
      const lc = levelColors[g.level] || '#58a6ff';
      const catLabel = (G.categories.find(c => c.id === g.category) || {}).label || g.category;
      const levelIcon = g.level === 'Principiante' ? '🌱' : g.level === 'Intermedio' ? '🔥' : '💀';
      const readMin = g.estimatedReadTime || 15;
      return `<div class="guide-card" data-id="${g.id}" style="--gc-color:${cc};--gc-delay:${i * 0.05}s" title="${g.description.replace(/"/g, '&quot;')}">
        <div class="guide-card-glow" style="background:radial-gradient(circle at 30% 20%,${cc}15,transparent 70%)"></div>
        <div class="guide-card-top">
          <div class="guide-card-emoji-wrap" style="background:${cc}18;border:1px solid ${cc}30">
            <span class="guide-card-emoji">${g.emoji}</span>
          </div>
          <div class="guide-card-level-badge" style="background:${lc}20;color:${lc};border:1px solid ${lc}40">
            ${levelIcon} ${g.level}
          </div>
        </div>
        <div class="guide-card-body">
          <h3 class="guide-card-title">${g.title}</h3>
          <p class="guide-card-subtitle">${g.subtitle}</p>
          <p class="guide-card-desc">${g.description}</p>
        </div>
        <div class="guide-card-footer">
          <div class="guide-card-meta">
            <span class="guide-card-meta-item" style="color:${cc}">
              <span class="guide-card-meta-dot" style="background:${cc}"></span>
              ${catLabel}
            </span>
            <span class="guide-card-meta-item">🕐 ${readMin} min</span>
            <span class="guide-card-meta-item">📝 ${g.elements} elems</span>
          </div>
          <div class="guide-card-arrow" style="color:${cc}">→</div>
        </div>
        <div class="guide-card-progress" style="--progress-width:${Math.min(100, Math.round(g.elements/2))}%">
          <div class="guide-card-progress-bar"></div>
        </div>
      </div>`;
    }).join('');
    gallery.querySelectorAll('.guide-card').forEach(card =>
      card.onclick = () => openGuide(card.dataset.id)
    );
    const count = $('guides-count');
    if (count) count.textContent = `${filtered.length} guías`;
  }

  function closeModal() { modal.style.display = 'none'; document.body.style.overflow = ''; }

  function openGuide(id) {
    if (!G || !G.guides) return;
    const guide = G.guides.find(g => g.id === id);
    if (!guide) return;
    activeGuideId = id;
    modalTitle.textContent = `${guide.emoji} ${guide.title}`;
    modalMeta.innerHTML =
      `<span>${guide.level}</span><span>🕐 ${guide.estimatedReadTime} min</span><span>${guide.elements} elementos</span><span>🔥 ${guide.viralScore || 90}%</span>`;
    contentC.innerHTML = guide.content;
    if (guide.linkedArticles && guide.linkedArticles.length > 0 && typeof WIKI_DATA !== 'undefined') {
      const related = guide.linkedArticles.map(aid => WIKI_DATA.find(a => a.id === aid)).filter(Boolean);
      relatedC.innerHTML = related.map(a =>
        `<a href="#" class="guide-related-link" onclick="window.switchTab('articles');event.preventDefault()">${a.title}</a>`
      ).join('');
    } else {
      relatedC.innerHTML = '<span class="guide-related-empty">No hay artículos vinculados</span>';
    }
    modal.scrollTop = 0;
    modal.querySelector('.guide-modal-content').scrollTop = 0;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function downloadGuide() {
    if (!G || !G.guides) return;
    const guide = G.guides.find(g => g.id === activeGuideId);
    if (!guide) return;
    const html = `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><title>${guide.title} - CyberWiki Hub</title><style>body{font-family:system-ui,sans-serif;max-width:800px;margin:0 auto;padding:20px;line-height:1.6;color:#222}h3{color:#58a6ff;margin-top:30px}pre{background:#f4f4f4;padding:12px;border-radius:8px;overflow-x:auto}code{font-family:monospace}table{border-collapse:collapse;width:100%}td,th{border:1px solid #ddd;padding:8px;text-align:left}th{background:#58a6ff;color:#fff}.guide-callout{padding:12px 16px;border-radius:8px;margin:16px 0}.guide-callout.tip{background:#e6f3ff;border-left:4px solid #58a6ff}.guide-callout.warning{background:#fff3cd;border-left:4px solid #f59e0b}.guide-callout.goal{background:#d4edda;border-left:4px solid #238636}</style></head><body>${guide.content}</body></html>`;
    const blob = new Blob([html], { type: 'text/html' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `cyberwiki-${activeGuideId || 'guia'}.html`;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  function shareGuide() {
    if (!G || !G.guides) return;
    const guide = G.guides.find(g => g.id === activeGuideId);
    if (!guide) return;
    if (navigator.share) {
      navigator.share({ title: guide.title, text: guide.description + '\n\n📊 CyberWiki Hub - Guías Visuales' });
    } else {
      navigator.clipboard.writeText(guide.title + ' - ' + guide.description);
      const tc = document.querySelector('.toast-container');
      if (tc) { const t = document.createElement('div'); t.className = 'toast'; t.textContent = '📋 Información copiada'; tc.appendChild(t); setTimeout(() => t.remove(), 2500); }
    }
  }

  // Button bindings
  $('guide-download').onclick = downloadGuide;
  $('guide-share').onclick = shareGuide;
  $('guide-modal-close').onclick = closeModal;
  modal.onclick = function (e) { if (e.target === modal) closeModal(); };
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && modal.style.display === 'flex') closeModal(); });

    // Render on nav link click (fires after app.js's onclick)
  const guidesNav = document.querySelector('a.nav-link[data-tab="guides"]');
  if (guidesNav) {
    guidesNav.addEventListener('click', function () { renderHeroStats(); renderGallery('all'); });
  }

  // Override window.switchTab for programmatic switching
  const origWinSwitch = window.switchTab;
  if (origWinSwitch) {
    window.switchTab = function (tabId) {
      origWinSwitch(tabId);
      if (tabId === 'guides') renderGallery('all');
    };
  }

  // Guides data is lazy-loaded (data-guides.js) on first visit to the tab.
  // Render once it's available; re-render on every Guides tab visit.
  function boot() {
    G = getData();
    if (!G || !G.guides || !G.guides.length) return;
    renderHeroStats();
    renderGallery('all');
  }

  window.addEventListener('data:loaded', function (e) {
    if (!e.detail || e.detail.source === 'data-guides.js') boot();
  });
  boot();
})();
