/* ═══════════════════════════════════════════════════════════════
   ui.js — Capa de presentación.
   Todo lo que toca el DOM vive aquí. La lógica real (VFS, red,
   flags, XP) vive en shell.js / game-state.js y es agnóstica al DOM.
   Hay UN ÚNICO shell persistente: volver al mapa no cierra tu
   sesión SSH, exactamente como pasaría en una terminal real.
   ═══════════════════════════════════════════════════════════════ */
(function (global) {
  'use strict';

  const shell = new Shell();
  let currentView = 'map';
  let focusedBoxIp = null;   // qué caja "enfocan" los flag-dots/hint cuando estás en localhost
  let termBooted = false;    // si ya se imprimió el banner de bienvenida en esta sesión
  let catFilter = 'all';     // filtro activo en el mapa (all | clasica | cloud | pwn | wireless)

  function $(id) { return document.getElementById(id); }
  function activeBoxIp() {
    const fh = shell.frame().hostIp;
    return fh !== 'localhost' ? fh : (focusedBoxIp || global.BOX_ORDER[0]);
  }

  /* ═══════════════ FILTRO POR CATEGORÍA ═══════════════ */
  function catCount(cat) {
    return cat === 'all'
      ? global.BOX_ORDER.length
      : global.BOX_ORDER.filter((ip) => global.boxCategory(ip) === cat).length;
  }
  function catIconKey(box) {
    const cat = global.boxCategory(box.ip);
    if (cat !== 'clasica') {
      const m = global.CATEGORY_META[cat];
      return { icon: m.icon, osKey: cat };
    }
    const icon = box.os.startsWith('Windows') ? '🪟' : box.os.startsWith('Linux') ? '🐧' : '🌐';
    const osKey = box.os.startsWith('Windows') ? 'windows' : box.os.startsWith('Linux') ? 'linux' : 'web';
    return { icon, osKey };
  }
  function renderCatFilter() {
    const el = $('cat-filter');
    if (!el) return;
    el.innerHTML = global.CATEGORY_ORDER.map((cat) => {
      const m = global.CATEGORY_META[cat];
      const active = catFilter === cat ? ' active' : '';
      return `<button class="cat-filter-btn${active}" data-term-action="UI.setCatFilter('${cat}')" role="tab" aria-selected="${catFilter === cat}">
        <span class="cf-icon">${m.icon}</span> ${m.label}
        <span class="cf-count">${catCount(cat)}</span>
      </button>`;
    }).join('') +
      `<button class="cat-filter-btn${catFilter === 'all' ? ' active' : ''}" data-term-action="UI.setCatFilter('all')" role="tab" aria-selected="${catFilter === 'all'}">
        <span class="cf-icon">🌐</span> Todas
        <span class="cf-count">${catCount('all')}</span>
      </button>`;
  }
  function setCatFilter(cat) {
    catFilter = cat;
    renderMap();
  }

  /* ═══════════════ RENDER: MAPA ═══════════════ */
  function renderMap() {
    const state = GameState.get();
    $('global-xp').innerHTML = '⚡ ' + state.globalXP + ' XP';
    const rank = global.getRank(state.globalXP);
    $('rank-badge').textContent = rank.badge;
    $('rank-name').textContent = rank.name;
    const nextMax = rank.max === Infinity ? null : rank.max;
    $('rank-sub').textContent = nextMax ? `${state.globalXP} / ${nextMax} XP para el siguiente rango` : `${state.globalXP} XP — rango máximo alcanzado`;
    const pct = nextMax ? Math.min(100, Math.round(((state.globalXP - rank.min) / (nextMax - rank.min)) * 100)) : 100;
    $('rank-fill').style.width = pct + '%';

    const osIcons = { Linux: '🐧', Windows: '🪟' };
    renderCatFilter();
    const list = $('box-list');
    const visible = catFilter === 'all'
      ? global.BOX_ORDER
      : global.BOX_ORDER.filter((ip) => global.boxCategory(ip) === catFilter);
    if (!visible.length) {
      list.innerHTML = `<div class="box-empty"><span>${global.CATEGORY_META[catFilter] ? global.CATEGORY_META[catFilter].icon : '🛰️'}</span>No hay máquinas de esta categoría todavía.<br><small>Vuelve a "Todas" para ver la red completa.</small></div>`;
      renderAchievements();
      return;
    }
    list.innerHTML = visible.map((ip, idx) => {
      const box = global.HOSTS[ip];
      const flagsGot = global.flagsForBox(ip).filter((f) => state.flagsFound[f]).length;
      const total = global.flagsForBox(ip).length;
      const done = global.isBoxDone(state, ip);
      const pct = total ? Math.round((flagsGot / total) * 100) : 0;
      const { icon, osKey } = catIconKey(box);
      const cat = global.boxCategory(ip);
      const catChip = cat !== 'clasica'
        ? `<div class="bx-cat-chip ${cat}">${global.CATEGORY_META[cat].icon} ${global.CATEGORY_META[cat].label}</div>`
        : '';
      return `
      <div class="box-card ${done ? 'done' : ''}" data-term-action="UI.openBox('${ip}')">
        <div class="box-top">
          <div class="box-os-icon ${osKey}">${icon}</div>
          <div class="bx-diff ${box.diff}">${box.diffLabel}</div>
          ${done ? '<div class="box-check">✅</div>' : ''}
        </div>
        <div class="box-body">
          <h3>${box.hostname}</h3>
          <div class="bx-os-label">${box.ip} · ${box.osDetail}</div>
          ${catChip}
          <div class="box-desc">${box.desc}</div>
          <div class="box-tags">${box.tags.map((t) => `<span class="box-tag">${t}</span>`).join('')}</div>
        </div>
        <div class="box-footer">
          <span class="bx-flags">🚩 ${flagsGot}/${total} flags</span>
          <span class="bx-pts">⚡ ${global.xpTotalForBox(ip)} XP</span>
        </div>
        <div class="box-progress-strip"><i style="transform:scaleX(${pct / 100})"></i></div>
      </div>`;
    }).join('');

    renderAchievements();
  }

  function renderAchievements() {
    const state = GameState.get();
    $('ach-grid').innerHTML = global.ACHIEVEMENTS.map((a) => {
      const unlocked = a.check(state);
      return `<div class="ach-card ${unlocked ? 'unlocked' : 'locked'}">
        <div class="ac-icon">${a.icon}</div>
        <div class="ac-name">${a.name}</div>
        <div class="ac-desc">${a.desc}</div>
      </div>`;
    }).join('');
  }

  /* ═══════════════ NAVEGACIÓN ═══════════════ */
  function showView(name) {
    document.querySelectorAll('.view').forEach((v) => v.classList.remove('on'));
    $('v-' + name).classList.add('on');
    currentView = name;
  }

  function openBox(ip) {
    focusedBoxIp = ip;
    showView('term');
    renderTermHeader();
    renderQuickRow();
    if (!termBooted) {
      playBootSequence();
    } else {
      $('term-input').focus();
    }
  }

  function exitToMap() {
    showView('map');
    renderMap();
  }

  function playBootSequence() {
    termBooted = true;
    const box = global.HOSTS[activeBoxIp()];
    const lines = [
      { t: 'sys', l: `Sesión de terminal iniciada — guillermo@kali-attacker` },
      { t: 'info', l: `Objetivo sugerido: ${box.ip} (${box.hostname}) — pero puedes apuntar a cualquier IP de la red.` },
      { t: 'sys', l: `Escribe "help" para ver todos los comandos, o "hosts" para ver el estado de la red.` },
      { t: 'sys', l: '───────────────────────────────────────' },
    ];
    printOutputStaggered(lines, () => $('term-input').focus());
  }

  /* ═══════════════ IMPRESIÓN EN TERMINAL ═══════════════ */
  function printLine(type, text, isBanner) {
    const scroll = $('term-scroll');
    const div = document.createElement('div');
    div.className = isBanner ? 'term-banner' : 'term-line ' + type;
    div.textContent = text;
    scroll.appendChild(div);
    scroll.scrollTop = scroll.scrollHeight;
  }
  function printCmdEcho(cmdText) {
    const scroll = $('term-scroll');
    const div = document.createElement('div');
    div.className = 'term-cmdline';
    const f = shell.frame();
    const isRoot = f.user === 'root' || f.user === 'Administrator';
    div.innerHTML = `<span class="pfx ${isRoot ? 'root' : ''}">${isRoot ? '#' : '$'}</span><span></span>`;
    div.querySelector('span:last-child').textContent = cmdText;
    scroll.appendChild(div);
    scroll.scrollTop = scroll.scrollHeight;
  }
  function printSecretEcho() {
    const scroll = $('term-scroll');
    const div = document.createElement('div');
    div.className = 'term-cmdline';
    div.innerHTML = `<span></span>`;
    div.querySelector('span').textContent = '••••••••';
    scroll.appendChild(div);
  }
  function printOutputStaggered(lines, onDone) {
    if (!lines || lines.length === 0) { if (onDone) onDone(); return; }
    let i = 0;
    const step = () => {
      if (i >= lines.length) { if (onDone) onDone(); return; }
      const l = lines[i];
      printLine(l.t, l.l);
      i++;
      setTimeout(step, Math.min(38, 900 / lines.length));
    };
    step();
  }

  /* ═══════════════ ENVÍO DE COMANDOS ═══════════════ */
  function submit() {
    const inp = $('term-input');
    const raw = inp.value;
    if (!raw.trim() && !shell.secretRequest) return;

    const wasSecret = !!shell.secretRequest;
    if (wasSecret) { printSecretEcho(); } else { printCmdEcho(raw); }
    inp.value = '';
    hideAutocomplete();

    const result = shell.dispatch(raw);

    if (result.cleared) {
      $('term-scroll').innerHTML = '';
    } else {
      printOutputStaggered(result.lines, () => {
        result.flagEvents.forEach((f, idx) => setTimeout(() => showFlagToast(f), idx * 2400));
        const achDelay = result.flagEvents.length * 2400;
        result.achEvents.forEach((a, idx) => setTimeout(() => showAchToast(a), achDelay + idx * 2400 + 600));

        // ¿se completó alguna máquina con este comando?
        const doneBoxes = global.BOX_ORDER.filter((ip) => global.isBoxDone(GameState.get(), ip));
        const newlyDoneBox = doneBoxes.find((ip) => result.flagEvents.some((f) => f.meta.box === ip));
        if (newlyDoneBox) {
          setTimeout(() => showComplete(newlyDoneBox), achDelay + result.flagEvents.length * 2400 + 800);
        }
      });
    }

    renderTermHeader();
    updateInputMode();
    inp.focus();
  }

  /* ═══════════════ CABECERA / BREADCRUMB / MODO SECRETO ═══════════════ */
  function renderTermHeader() {
    const crumbs = shell.stack.map((f) => `${f.user}@${global.HOSTS[f.hostIp].hostname}`);
    $('tb-breadcrumb').innerHTML = crumbs.map((c, i) => (i === crumbs.length - 1 ? `<b>${c}</b>` : c)).join('<span class="arrow">→</span>');

    const box = global.HOSTS[activeBoxIp()];
    const state = GameState.get();
    const flagsOfBox = global.flagsForBox(box.ip);
    $('tb-flags').innerHTML = flagsOfBox.map((f) => `<div class="tb-flag-dot ${state.flagsFound[f] ? 'got' : ''}"></div>`).join('');
  }

  function updateInputMode() {
    const inp = $('term-input');
    const row = $('term-input-row');
    const pfx = $('term-pfx');
    if (shell.secretRequest) {
      inp.type = 'password';
      inp.placeholder = shell.secretRequest.promptLabel || 'Contraseña:';
      row.classList.add('secret');
      pfx.textContent = '🔒';
    } else {
      inp.type = 'text';
      inp.placeholder = 'escribe un comando…';
      row.classList.remove('secret');
      const f = shell.frame();
      const isRoot = f.user === 'root' || f.user === 'Administrator';
      pfx.textContent = isRoot ? '#' : '$';
      pfx.className = 'pfx' + (isRoot ? ' root' : '');
    }
  }

  /* ═══════════════ QUICK CHIPS ═══════════════ */
  function renderQuickRow() {
    const box = global.HOSTS[activeBoxIp()];
    const onLocalhost = shell.frame().hostIp === 'localhost';
    const chips = [];
    if (onLocalhost) chips.push(`nmap ${box.ip}`);
    chips.push('hosts', 'flags', 'help', 'clear');
    $('quick-row').innerHTML = chips.map((c) => `<span class="qchip ${['hosts', 'flags', 'help', 'clear'].includes(c) ? 'ghost' : ''}" data-term-action="UI.quickFill('${c}')">${c}</span>`).join('');
  }
  function quickFill(txt) {
    const inp = $('term-input');
    inp.value = txt;
    inp.focus();
  }

  /* ═══════════════ AUTOCOMPLETADO ═══════════════ */
  function hideAutocomplete() { $('autocomplete').classList.remove('show'); }
  function updateAutocomplete() {
    const inp = $('term-input');
    if (shell.secretRequest) { hideAutocomplete(); return; }
    const v = inp.value;
    if (!v || v.includes(' ')) { hideAutocomplete(); return; }
    const matches = shell.autocomplete(v);
    if (matches.length === 0) { hideAutocomplete(); return; }
    const ac = $('autocomplete');
    ac.innerHTML = matches.slice(0, 8).map((m) => `<div class="ac-item" data-term-action="UI.acPick('${m}')">${m}</div>`).join('');
    ac.classList.add('show');
  }
  function acPick(cmdName) {
    $('term-input').value = cmdName + ' ';
    hideAutocomplete();
    $('term-input').focus();
  }

  /* ═══════════════ TOASTS ═══════════════ */
  function showFlagToast(evt) {
    const t = $('flag-toast');
    t.classList.remove('ach');
    $('ft-title').textContent = '🚩 ' + evt.meta.name;
    $('ft-desc').textContent = evt.meta.exp || evt.flag;
    $('ft-pts').textContent = '+' + evt.meta.xp + ' XP';
    t.className = 'flag-toast show';
    setTimeout(() => { t.className = 'flag-toast'; }, 2200);
  }
  function showAchToast(ach) {
    const t = $('flag-toast');
    $('ft-title').textContent = '🏅 Logro: ' + ach.name;
    $('ft-desc').textContent = ach.desc;
    $('ft-pts').textContent = ach.icon;
    t.className = 'flag-toast show ach';
    setTimeout(() => { t.className = 'flag-toast'; }, 2200);
  }

  /* ═══════════════ MODAL: MÁQUINA COMPLETADA ═══════════════ */
  function showComplete(ip) {
    const box = global.HOSTS[ip];
    const state = GameState.get();
    $('cc-title').textContent = box.hostname + ' completada';
    $('cc-sub').textContent = '¡Todas las flags capturadas! Acceso total conseguido.';
    $('cc-xp').textContent = state.globalXP;
    $('cc-flags').textContent = global.flagsForBox(ip).length + '/' + global.flagsForBox(ip).length;
    $('complete-overlay').classList.add('show');
    confetti();
  }
  function closeComplete() {
    $('complete-overlay').classList.remove('show');
    renderMap();
  }

  /* ═══════════════ ONBOARDING ═══════════════ */
  function maybeShowOnboarding() {
    if (!GameState.get().onboarded) $('onboard-overlay').classList.add('show');
  }
  function closeOnboarding() {
    const s = GameState.get();
    s.onboarded = true;
    GameState.save();
    $('onboard-overlay').classList.remove('show');
  }

  /* ═══════════════ AYUDA ═══════════════ */
  const HELP_GROUPS = [
    { title: 'Navegación', cmds: [['ls -la', 'lista archivos'], ['cd', 'cambia de directorio'], ['pwd', 'ruta actual'], ['cat', 'lee un archivo'], ['find -name', 'busca archivos'], ['grep -rn', 'busca texto']] },
    { title: 'Sistema', cmds: [['whoami / id', 'usuario actual'], ['sudo -l', 'qué puedes ejecutar como root'], ['history', 'comandos anteriores'], ['man <cmd>', 'manual de un comando']] },
    { title: 'Red', cmds: [['nmap -sV IP', 'escanea puertos'], ['curl IP/ruta', 'petición HTTP'], ['ssh user@IP', 'conexión remota'], ['ip a', 'interfaces de red']] },
    { title: 'Enumeración', cmds: [['gobuster dir -u URL', 'busca rutas ocultas'], ['ffuf -u URL/FUZZ', 'fuzzing de rutas']] },
    { title: 'Explotación', cmds: [['sqlmap -u URL --dump', 'inyección SQL'], ['hashcat -m N hash wordlist', 'crackeo de hashes'], ['hydra -l -P', 'fuerza bruta'], ['GetUserSPNs.py', 'kerberoasting'], ['crackmapexec smb IP', 'valida credenciales'], ['evil-winrm -i IP', 'shell Windows'], ['docker -H IP:2375', 'API Docker remota'], ['mysql -h IP -u -p', 'cliente MySQL']] },
    { title: 'Pwn / Cloud / Wireless', cmds: [['strings ./bin', 'extrae cadenas'], ['checksec ./bin', 'mitigaciones'], ['./bin', 'ejecuta binario'], ['aws s3 ls', 'nube'], ['kubectl get pods', 'kubernetes'], ['airodump-ng wlan0', 'redes wifi'], ['aireplay-ng -0 N', 'deauth'], ['aircrack-ng -w', 'crack WPA'], ['arpspoof / responder', 'MITM'], ['asleap', 'EAP/MSCHAPv2']] },
    { title: 'Utilidad', cmds: [['hosts', 'estado de la red'], ['flags', 'tu progreso'], ['hint', 'pista contextual'], ['clear', 'limpia la pantalla']] },
  ];
  function showHelp() {
    $('help-body').innerHTML = HELP_GROUPS.map((g) => `
      <div class="help-group">
        <h4>${g.title}</h4>
        ${g.cmds.map((c) => `<div class="help-cmd-row"><code>${c[0]}</code><span>${c[1]}</span></div>`).join('')}
      </div>`).join('');
    $('help-overlay').classList.add('show');
  }
  function closeHelp() { $('help-overlay').classList.remove('show'); }

  /* ═══════════════ RESET ═══════════════ */
  function confirmReset() { $('reset-overlay').classList.add('show'); }
  function closeResetConfirm() { $('reset-overlay').classList.remove('show'); }
  function doReset() {
    GameState.reset();
    closeResetConfirm();
    renderMap();
  }

  /* ═══════════════ HINT (desde el botón del header) ═══════════════ */
  function useHint() {
    focusedBoxIp = activeBoxIp();
    const res = shell.dispatch('hint');
    printOutputStaggered(res.lines);
  }

  /* ═══════════════ CONFETI ═══════════════ */
  function confetti(n) {
    n = n || 28;
    const colors = ['#00d9ff', '#00ff88', '#ffcc00', '#a855f7'];
    for (let i = 0; i < n; i++) {
      const p = document.createElement('div');
      p.className = 'confetti-piece';
      p.style.left = Math.random() * 100 + 'vw';
      p.style.background = colors[Math.floor(Math.random() * colors.length)];
      p.style.animationDuration = (1.4 + Math.random() * 1.3) + 's';
      p.style.animationDelay = (Math.random() * 0.35) + 's';
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 3200);
    }
  }

  global.UI = {
    shell, renderMap, openBox, exitToMap, submit, quickFill, acPick, updateAutocomplete,
    showHelp, closeHelp, closeOnboarding, maybeShowOnboarding, closeComplete,
    confirmReset, closeResetConfirm, doReset, useHint, updateInputMode,
    showView, setCatFilter, getView: () => currentView,
  };
})(typeof window !== 'undefined' ? window : globalThis);
