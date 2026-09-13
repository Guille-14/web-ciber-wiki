/* ═══════════════════════════════════════════════════════════════
   game-state.js — Estado persistente del juego.
   Guarda XP, flags encontradas, logros vistos y estadísticas.
   No controla la simulación — solo la observa y recompensa.
   ═══════════════════════════════════════════════════════════════ */
(function (global) {
  'use strict';

  const STORAGE_KEY = 'cq_terminal_v2';

  function defaultState() {
    return {
      globalXP: 0,
      flagsFound: {},        // { 'CQ{...}': true }
      commandsUsed: {},       // { 'nmap': 5, 'ls': 12, ... }
      filesRead: 0,
      hintsUsedByBox: {},     // { '10.10.14.22': 2 }
      achievementsSeen: [],
      milestonesSeen: {},
      onboarded: false,
    };
  }

  let STATE = defaultState();

  function loadState() {
    try {
      const raw = (typeof localStorage !== 'undefined') ? localStorage.getItem(STORAGE_KEY) : null;
      if (raw) STATE = Object.assign(defaultState(), JSON.parse(raw));
    } catch (e) { /* almacenamiento no disponible — se juega sin persistencia */ }
    return STATE;
  }
  function saveState() {
    try {
      if (typeof localStorage !== 'undefined') localStorage.setItem(STORAGE_KEY, JSON.stringify(STATE));
    } catch (e) { /* no-op */ }
  }
  function resetState() {
    STATE = defaultState();
    saveState();
    return STATE;
  }
  function getState() { return STATE; }

  /** Registra el uso de un comando (para el logro "Explorador"). */
  function trackCommand(name) {
    STATE.commandsUsed[name] = (STATE.commandsUsed[name] || 0) + 1;
  }

  /** Registra que se leyó un archivo (para el logro "Curioso"). */
  function trackFileRead() {
    STATE.filesRead = (STATE.filesRead || 0) + 1;
  }

  /** Registra que se usó una pista en una caja concreta (afecta logro "Sin Ayuda"). */
  function trackHint(boxIp) {
    STATE.hintsUsedByBox[boxIp] = (STATE.hintsUsedByBox[boxIp] || 0) + 1;
  }

  /**
   * Escanea un bloque de líneas de salida buscando patrones CQ{...}.
   * Por cada flag nueva encontrada, la registra y devuelve sus datos
   * (para que la UI muestre el toast correspondiente).
   */
  function scanForFlags(lines) {
    const newlyFound = [];
    const re = /CQ\{[^}]+\}/g;
    for (const line of lines) {
      const text = typeof line === 'string' ? line : line.l;
      if (!text) continue;
      const matches = text.match(re);
      if (!matches) continue;
      for (const m of matches) {
        if (STATE.flagsFound[m]) continue;
        const meta = global.FLAG_REGISTRY[m];
        STATE.flagsFound[m] = true;
        STATE.globalXP += meta ? meta.xp : 10;
        newlyFound.push({ flag: m, meta: meta || { name: 'Flag desconocida', xp: 10, exp: '' } });
      }
    }
    if (newlyFound.length) saveState();
    return newlyFound;
  }

  /** Comprueba qué logros nuevos se han desbloqueado desde el último chequeo. */
  function checkNewAchievements() {
    const nowUnlocked = global.ACHIEVEMENTS.filter((a) => a.check(STATE)).map((a) => a.id);
    const fresh = nowUnlocked.filter((id) => !STATE.achievementsSeen.includes(id));
    STATE.achievementsSeen = nowUnlocked;
    saveState();
    return fresh.map((id) => global.ACHIEVEMENTS.find((a) => a.id === id));
  }

  /** Hito puntual (no-flag) que da un pequeño bonus de XP la primera vez. */
  function triggerMilestone(key, xp) {
    STATE.milestonesSeen = STATE.milestonesSeen || {};
    if (STATE.milestonesSeen[key]) return false;
    STATE.milestonesSeen[key] = true;
    STATE.globalXP += xp;
    saveState();
    return true;
  }

  global.GameState = {
    load: loadState, save: saveState, reset: resetState, get: getState,
    trackCommand, trackFileRead, trackHint, scanForFlags, checkNewAchievements, triggerMilestone,
    STORAGE_KEY,
  };
})(typeof window !== 'undefined' ? window : globalThis);
