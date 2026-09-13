/* ═══════════════════════════════════════════════════════════════
   shell.js — El intérprete de comandos.
   Mantiene la pila de sesiones (para ssh), tokeniza la entrada,
   despacha a los comandos reales, y escanea la salida en busca
   de flags. Es la única pieza que conoce a la UI (a través de
   callbacks), pero no manipula el DOM directamente.
   ═══════════════════════════════════════════════════════════════ */
(function (global) {
  'use strict';
  const VFS = global.VFS;

  function out(l) { return { t: 'out', l }; }
  function err(l) { return { t: 'err', l }; }
  function ok(l) { return { t: 'ok', l }; }
  function info(l) { return { t: 'info', l }; }
  function warn(l) { return { t: 'warn', l }; }

  function Shell() {
    this.stack = [{ hostIp: 'localhost', user: 'guillermo', cwd: ['home', 'guillermo'] }];
    this.secretRequest = null; // { promptLabel, mask, onSubmit }
    this.history = [];
    this.histPos = -1;
    this._apiStates = {}; // por-host, estado efímero de sesión (registros/tokens de la API de Fracture)
    this._cloudCreds = {}; // por-host: credenciales AWS/K8s obtenidas durante la partida
  }

  Shell.prototype.frame = function () { return this.stack[this.stack.length - 1]; };
  Shell.prototype.hostData = function () { return global.HOSTS[this.frame().hostIp]; };
  Shell.prototype.isHostInStack = function (ip) { return this.stack.some((f) => f.hostIp === ip); };
  Shell.prototype.pushSession = function (hostIp, user) {
    const h = global.HOSTS[hostIp];
    const userData = h.users && h.users[user];
    const home = (userData && userData.home) || ['root'];
    this.stack.push({ hostIp, user, cwd: home.slice() });
  };
  Shell.prototype.popSession = function () {
    if (this.stack.length > 1) { this.stack.pop(); return true; }
    return false;
  };
  Shell.prototype.apiState = function (hostIp) {
    if (!this._apiStates[hostIp]) this._apiStates[hostIp] = { users: {}, nextId: 4822 };
    return this._apiStates[hostIp];
  };
  Shell.prototype.noteCloudCreds = function (hostIp) { this._cloudCreds[hostIp] = true; };
  Shell.prototype.hasCloudCreds = function (hostIp) { return !!this._cloudCreds[hostIp]; };
  Shell.prototype.cloudCredsHosts = function () { return Object.keys(this._cloudCreds); };

  /* ── tokenización con soporte de comillas simples/dobles ── */
  function tokenize(input) {
    const tokens = [];
    let cur = '';
    let quote = null;
    for (let i = 0; i < input.length; i++) {
      const ch = input[i];
      if (quote) {
        if (ch === quote) quote = null;
        else cur += ch;
      } else if (ch === '"' || ch === "'") {
        quote = ch;
      } else if (ch === ' ') {
        if (cur.length) { tokens.push(cur); cur = ''; }
      } else {
        cur += ch;
      }
    }
    if (cur.length) tokens.push(cur);
    return tokens;
  }

  /* ── construcción del ctx que reciben todos los comandos ── */
  Shell.prototype.buildCtx = function () {
    const self = this;
    let effectiveOverride = null;
    const ctx = {
      cwd: () => self.frame().cwd,
      setCwd: (p) => { self.frame().cwd = p; },
      home: () => {
        const h = self.hostData();
        const ud = h.users && h.users[self.frame().user];
        return (ud && ud.home) || (self.frame().user === 'root' || self.frame().user === 'Administrator' ? ['root'] : ['home', self.frame().user]);
      },
      hostData: () => self.hostData(),
      frame: () => self.frame(),
      effectiveUser: () => effectiveOverride || self.frame().user,
      history: () => self.history,
      markFileRead: () => GameState.trackFileRead(),
      isKnownCommand: (c) => self.isKnownCommand(c),
      printHelp: () => self.renderHelp(),
      printHostsStatus: () => self.renderHostsStatus(),
      printFlagsStatus: () => self.renderFlagsStatus(),
      parseArgs: global.parseArgs,
      gameEvent: (name, arg) => self.handleGameEvent(name, arg),
      apiState: (ip) => self.apiState(ip),
      noteCloudCreds: (ip) => self.noteCloudCreds(ip),
      hasCloudCreds: (ip) => self.hasCloudCreds(ip),
      cloudCredsHosts: () => self.cloudCredsHosts(),
      requestSecret: (opts) => { self.secretRequest = opts; },
      pushSession: (ip, user) => self.pushSession(ip, user),
      isHostInStack: (ip) => self.isHostInStack(ip),
      runCoreAsRoot: (binName, args) => {
        const handler = global.CORE_COMMANDS[binName];
        if (!handler) return [info(`(${binName} ejecutado como root — sin simulación detallada)`)];
        effectiveOverride = self.frame().user === 'Administrator' ? 'Administrator' : 'root';
        const res = handler(args, ctx);
        effectiveOverride = null;
        return res;
      },
    };
    return ctx;
  };

  /* ── hitos puntuales con bonus de XP (no son flags) ── */
  Shell.prototype.handleGameEvent = function (name, arg) {
    const bonuses = { nmap_scanned: 5, sqli_dumped: 0, hash_cracked: 0, docker_api_used: 0 };
    const xp = bonuses[name];
    if (xp) GameState.triggerMilestone(name + ':' + arg, xp);
  };

  Shell.prototype.isKnownCommand = function (c) {
    return !!(global.CORE_COMMANDS[c] || global.NETWORK_COMMANDS[c] || global.STUB_TOOLS.includes(c) || UNIVERSAL[c]);
  };

  /* ── comandos universales que no dependen del VFS/red ── */
  const UNIVERSAL = {
    exit: (tokens, self) => {
      const popped = self.popSession();
      return popped ? [info('Sesión cerrada. Volviendo al host anterior.')] : [info('No hay más sesiones que cerrar — ya estás en tu máquina local.')];
    },
    logout: (tokens, self) => UNIVERSAL.exit(tokens, self),
    hint: (tokens, self) => self.renderHint(),
    reset: () => [warn('Escribe "resetgame" para confirmar el borrado de todo tu progreso (XP, flags, logros).')],
    resetgame: (tokens, self) => { GameState.reset(); return [ok('Progreso reiniciado. ¡Buena suerte de nuevo!')]; },
  };

  /* ── despacho de un comando ya tokenizado ── */
  Shell.prototype.dispatch = function (rawInput) {
    const trimmed = rawInput.trim();
    if (!trimmed) return { lines: [], flagEvents: [], achEvents: [], cleared: false };

    // ¿estamos esperando una contraseña / secreto?
    if (this.secretRequest) {
      const req = this.secretRequest;
      this.secretRequest = null;
      const result = req.onSubmit(rawInput);
      const lines = result.lines || [];
      return this.finalize(lines);
    }

    this.history.push(rawInput);
    this.histPos = this.history.length;

    // caso especial acotado: echo "texto" | base64 [-d]
    if (trimmed.includes('|')) {
      const pipeResult = this.tryHandlePipe(trimmed);
      if (pipeResult) return this.finalize(pipeResult);
      return this.finalize([warn('Esta terminal solo soporta un caso de tubería: echo "texto" | base64 [-d]. El resto de comandos se ejecutan de forma individual.')]);
    }

    const tokens = tokenize(trimmed);
    const cmdNameRaw = tokens[0];
    const cmdName = cmdNameRaw.toLowerCase();
    const args = tokens.slice(1);

    if (cmdName === 'clear') return { lines: [], flagEvents: [], achEvents: [], cleared: true };

    GameState.trackCommand(cmdName);

    let lines;
    if (UNIVERSAL[cmdName]) {
      lines = UNIVERSAL[cmdName](args, this);
    } else if (global.CORE_COMMANDS[cmdName]) {
      const ctx = this.buildCtx();
      lines = global.CORE_COMMANDS[cmdName](args, ctx);
    } else if (global.NETWORK_COMMANDS[cmdName]) {
      const ctx = this.buildCtx();
      lines = global.NETWORK_COMMANDS[cmdName](args, ctx);
    } else if (global.STUB_TOOLS.includes(cmdName)) {
      lines = [info(`${cmdName} está "instalado" pero esta simulación no lo implementa en detalle todavía. Prueba con nmap, curl, sqlmap, hashcat, hydra, ssh, docker o mysql.`)];
    } else {
      // ¿es un binario del VFS (Pwn)? Soportamos "./bin" y "bin" (si está en el cwd)
      const ctx = this.buildCtx();
      const binNode = this.findExecutable(ctx, cmdNameRaw);
      if (binNode) {
        const runner = global.BINARY_RUNNERS[binNode.name] || global.BINARY_RUNNERS.default;
        lines = runner(args, ctx, binNode);
      } else {
        lines = this.commandNotFound(cmdName);
      }
    }

    // limpiar marcadores internos de flag (el texto real ya viaja en la línea)
    lines = (lines || []).map((l) => (l && l._isFlagMarker ? { t: 'flag', l: l.l } : l));
    return this.finalize(lines);
  };

  Shell.prototype.tryHandlePipe = function (trimmed) {
    const parts = trimmed.split('|').map((p) => p.trim());
    if (parts.length !== 2) return null;
    const [left, right] = parts;
    if (!left.startsWith('echo ')) return null;
    if (right !== 'base64' && right !== 'base64 -d' && right !== 'base64 --decode') return null;
    const echoArg = tokenize(left.slice(5)).join(' ');
    try {
      const isDecode = right !== 'base64';
      const result = isDecode ? global.b64decode(echoArg) : global.b64encode(echoArg);
      GameState.trackCommand('base64');
      const lines = [out(result)];
      if (isDecode) {
        const flagLine = global.checkJWTDecodeFlag(result);
        if (flagLine) lines.push(flagLine);
      }
      return lines;
    } catch (e) {
      return [err('base64: entrada inválida')];
    }
  };

  Shell.prototype.commandNotFound = function (cmdName) {
    const known = Object.keys(global.CORE_COMMANDS).concat(Object.keys(global.NETWORK_COMMANDS), Object.keys(UNIVERSAL));
    const suggestion = known.find((k) => k.startsWith(cmdName[0]) && Math.abs(k.length - cmdName.length) <= 2 && levenshtein(k, cmdName) <= 2);
    const lines = [err(`bash: ${cmdName}: comando no encontrado`)];
    if (suggestion) lines.push(info(`¿Quisiste decir "${suggestion}"?`));
    return lines;
  };

  /* ── resolución de binarios del VFS (máquinas Pwn) ── */
  Shell.prototype.findExecutable = function (ctx, rawName) {
    const fsys = ctx.hostData().filesystem;
    if (!fsys) return null;
    const base = rawName.startsWith('./') ? rawName.slice(2) : rawName.split('/').pop();
    if (!base || base === '.' || base === '..') return null;
    const relPath = rawName.startsWith('./') ? rawName.slice(2) : base;
    const path = VFS.resolvePath(ctx.cwd(), relPath, ctx.home());
    const node = VFS.getNode(fsys, path);
    if (!node || node.type !== 'file') return null;
    if (!(node.perms || 'rwxr-xr-x').includes('x')) return null;
    return { name: base, path, node };
  };

  function levenshtein(a, b) {
    const m = [];
    for (let i = 0; i <= b.length; i++) m[i] = [i];
    for (let j = 0; j <= a.length; j++) m[0][j] = j;
    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        m[i][j] = b[i - 1] === a[j - 1] ? m[i - 1][j - 1] : Math.min(m[i - 1][j - 1] + 1, m[i][j - 1] + 1, m[i - 1][j] + 1);
      }
    }
    return m[b.length][a.length];
  }

  /* ── tras ejecutar un comando: escanear flags + logros ── */
  Shell.prototype.finalize = function (lines) {
    const flagEvents = GameState.scanForFlags(lines || []);
    const achEvents = flagEvents.length ? GameState.checkNewAchievements() : [];
    return { lines: lines || [], flagEvents, achEvents, cleared: false };
  };

  /* ── autocompletado de comandos ── */
  Shell.prototype.autocomplete = function (partial) {
    if (!partial) return [];
    const all = Object.keys(global.CORE_COMMANDS).concat(Object.keys(global.NETWORK_COMMANDS), Object.keys(UNIVERSAL));
    return Array.from(new Set(all)).filter((c) => c.startsWith(partial)).sort();
  };

  /* ── panel de ayuda ── */
  Shell.prototype.renderHelp = function () {
    return [
      out('COMANDOS DISPONIBLES (terminal real — no hay opción múltiple):'), out(''),
      out('Navegación:  ls  cd  pwd  cat  find  grep  cp  mv  rm  mkdir  touch  head  tail  wc  file'),
      out('Sistema:     whoami  id  hostname  uname  ps  top  df  du  env  history  date  which  man'),
      out('Red:         nmap  ping  curl  wget  nc  ssh  netstat  ip a'),
      out('Enumeración: gobuster  ffuf  gobuster dir'),
      out('Explotación: sqlmap  hashcat  hydra  sudo  kerbrute  GetNPUsers.py  GetUserSPNs.py  bloodhound-python  docker  mysql  net'),
      out('Pwn:         strings  checksec  objdump  readelf  (ejecutar binarios con ./)'),
      out('Cloud:       aws  kubectl  terraform'),
      out('Wireless:    iwconfig  airodump-ng  aireplay-ng  aircrack-ng  arpspoof  ettercap  responder  asleap  vlanhop'),
      out('Utilidad:    base64  clear  hint  hosts  flags  man <comando>'),
      out(''),
      info('Escribe "hosts" para ver el estado de reconocimiento, "flags" para ver tu progreso, "hint" si te atascas.'),
    ];
  };

  /* ── estado de reconocimiento de la red ── */
  Shell.prototype.renderHostsStatus = function () {
    const state = GameState.get();
    const lines = [out('RED CONOCIDA:'), out('')];
    global.CATEGORY_ORDER.forEach((cat) => {
      const boxes = global.BOX_ORDER.filter((ip) => global.boxCategory(ip) === cat);
      if (!boxes.length) return;
      const meta = global.CATEGORY_META[cat];
      lines.push(out(`── ${meta.icon} ${meta.label.toUpperCase()} ──`));
      boxes.forEach((ip) => {
        const h = global.HOSTS[ip];
        const scanned = state.milestonesSeen && state.milestonesSeen['nmap_scanned:' + ip];
        const flagsGot = global.flagsForBox(ip).filter((f) => state.flagsFound[f]).length;
        const total = global.flagsForBox(ip).length;
        const statusIcon = flagsGot === total ? '✅' : scanned ? '🔓' : '❓';
        lines.push(out(`${statusIcon}  ${h.ip.padEnd(14)} ${(h.dnsName || h.hostname).padEnd(20)} [${h.diffLabel}]  ${flagsGot}/${total} flags`));
      });
    });
    lines.push(out(''), info('❓ sin escanear   🔓 escaneado   ✅ completada'));
    return lines;
  };

  /* ── progreso de flags ── */
  Shell.prototype.renderFlagsStatus = function () {
    const state = GameState.get();
    const total = Object.keys(global.FLAG_REGISTRY).length;
    const got = Object.keys(state.flagsFound).length;
    const lines = [out(`FLAGS: ${got}/${total} capturadas · ${state.globalXP} XP total`), out('')];
    global.CATEGORY_ORDER.forEach((cat) => {
      const boxes = global.BOX_ORDER.filter((ip) => global.boxCategory(ip) === cat);
      if (!boxes.length) return;
      const meta = global.CATEGORY_META[cat];
      lines.push(out(`── ${meta.icon} ${meta.label.toUpperCase()} ──`));
      boxes.forEach((ip) => {
        const h = global.HOSTS[ip];
        lines.push(out(`  ${h.hostname.toUpperCase()} (${h.ip})`));
        global.flagsForBox(ip).forEach((f) => {
          const m = global.FLAG_REGISTRY[f];
          lines.push(state.flagsFound[f] ? ok(`    ✔ ${m.name} (+${m.xp} XP)`) : out(`    · ??? (+${m.xp} XP)`));
        });
      });
    });
    return lines;
  };

  /* ── pista contextual: mira qué flag falta en la caja "activa" ── */
  Shell.prototype.renderHint = function () {
    const state = GameState.get();
    const currentIp = this.frame().hostIp;
    let targetBox = currentIp !== 'localhost' ? currentIp : null;
    if (!targetBox) {
      targetBox = global.BOX_ORDER.find((ip) => !global.isBoxDone(state, ip)) || global.BOX_ORDER[0];
    }
    const missing = global.flagsForBox(targetBox).find((f) => !state.flagsFound[f]);
    if (!missing) {
      const nextBox = global.BOX_ORDER.find((ip) => !global.isBoxDone(state, ip));
      if (!nextBox) return [ok(`¡Has completado las ${global.BOX_ORDER.length} máquinas! No queda ninguna flag por capturar. 🏆`)];
      return [info(`Esta máquina está completa. Tu siguiente objetivo: ${global.HOSTS[nextBox].ip} (${global.HOSTS[nextBox].hostname}).`)];
    }
    GameState.trackHint(targetBox);
    const hintText = global.FLAG_HINTS[missing] || 'Explora un poco más — prueba nmap, curl o cat según lo que ya sepas de este objetivo.';
    return [warn(`💡 PISTA (${global.HOSTS[targetBox].hostname}): ${hintText}`)];
  };

  global.Shell = Shell;
})(typeof window !== 'undefined' ? window : globalThis);
