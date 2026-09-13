/* ═══════════════════════════════════════════════════════════════
   commands/pwn.js — Herramientas de binarios (strings, checksec,
   objdump, readelf) y ejecución de binarios del VFS (máquinas Pwn).
   Los binarios se lanzan con ./<nombre> o <nombre> desde su carpeta
   y shell.js despacha aquí a través de BINARY_RUNNERS.
   ═══════════════════════════════════════════════════════════════ */
(function (global) {
  'use strict';
  const VFS = global.VFS;

  function out(l) { return { t: 'out', l }; }
  function err(l) { return { t: 'err', l }; }
  function ok(l) { return { t: 'ok', l }; }
  function info(l) { return { t: 'info', l }; }
  function warn(l) { return { t: 'warn', l }; }
  function accent(l) { return { t: 'accent', l }; }
  function flagLines(flagStr) { return [{ t: 'flag', l: flagStr, _isFlagMarker: true }]; }

  /* ── lectura de archivo desde el VFS ── */
  function readVfsFile(ctx, name) {
    if (!name) return null;
    const fsys = ctx.hostData().filesystem;
    if (!fsys) return null;
    const path = VFS.resolvePath(ctx.cwd(), name, ctx.home());
    const node = VFS.getNode(fsys, path);
    if (!node || node.type !== 'file') return null;
    ctx.markFileRead();
    return node;
  }

  /* ── primera herramienta de recon (strings/checksec/objdump) sobre
     el binario SUID de una máquina pwn → flag de reconocimiento ── */
  function maybeReconFlag(ctx, lines, fileName) {
    const host = ctx.hostData();
    if (!host || !host.pwn || !host.pwn.reconFlag) return;
    if (host.pwn.binary && fileName.split('/').pop() !== host.pwn.binary) return;
    if (global.PWN_STATE.reconDone[host.ip]) return;
    global.PWN_STATE.reconDone[host.ip] = true;
    lines.push(...flagLines(host.pwn.reconFlag));
  }

  /* ════════════════════ STRINGS ════════════════════ */
  function cmdStrings(tokens, ctx) {
    const file = tokens[0];
    if (!file) return [err('uso: strings <archivo>')];
    const node = readVfsFile(ctx, file);
    if (!node) return [err(`strings: '${file}': No such file or directory`)];
    const content = String(node.content || '');
    const found = content.match(/[\x20-\x7E]{4,}/g);
    const lines = [];
    if (!found) {
      lines.push(info(`strings: '${file}': no se encontraron cadenas legibles (4+ caracteres)`));
    } else {
      found.forEach((s) => lines.push(out(s)));
    }
    maybeReconFlag(ctx, lines, file);
    return lines;
  }

  /* ════════════════════ CHECKSEC ════════════════════ */
  function cmdChecksec(tokens, ctx) {
    const file = tokens[0];
    if (!file) return [err('uso: checksec <archivo>')];
    const node = readVfsFile(ctx, file);
    if (!node) return [err(`checksec: '${file}': No such file or directory`)];
    const meta = global.BINARY_META[file.split('/').pop()] || {};
    const lines = [
      out('    Arch:       amd64-64-little'),
      out('    RELRO:      ' + (meta.relro || 'Partial RELRO')),
      out('    Stack:      ' + (meta.canary ? 'Canary found' : 'No canary found')),
      out('    NX:         ' + (meta.nx ? 'NX enabled' : 'NX disabled')),
      out('    PIE:        ' + (meta.pie ? 'PIE enabled' : 'No PIE (0x400000)')),
      out('    RUNPATH:    -'),
      info('Recuerda: en las máquinas pwn la lectura (leak) y la mitigación (NX/canary) definen tu plan de ataque.'),
    ];
    maybeReconFlag(ctx, lines, file);
    return lines;
  }

  /* ════════════════════ OBJDUMP / READELF ════════════════════ */
  function cmdObjdump(tokens, ctx) {
    const file = tokens.find((t) => !t.startsWith('-'));
    if (!file) return [err('uso: objdump -t <archivo>   |   readelf -s <archivo>')];
    const node = readVfsFile(ctx, file);
    if (!node) return [err(`objdump: '${file}': No such file or directory`)];
    const meta = global.BINARY_META[file.split('/').pop()] || {};
    const lines = [out(''), out('SYMBOL TABLE:'), out('0000000000401036 g    F .text 0000000000000024 main')];
    if (meta.symbols && meta.symbols.length) {
      meta.symbols.forEach((s) => lines.push(accent(`0000000000401090 g    F .text 0000000000000020 ${s}`)));
    } else {
      lines.push(info('(sin símbolos dinámicos relevantes para este binario)'));
    }
    if (meta.imports && meta.imports.length) {
      lines.push(out(''), out('Imports (GOT/PLT):'));
      meta.imports.forEach((s) => lines.push(accent(`  ${s}`)));
    }
    maybeReconFlag(ctx, lines, file);
    return lines;
  }

  const PWN_TOOLS = { strings: cmdStrings, checksec: cmdChecksec, objdump: cmdObjdump, readelf: cmdObjdump };
  Object.assign(global.NETWORK_COMMANDS, PWN_TOOLS);

  /* ── metadatos de binarios (mitigaciones, símbolos) ── */
  global.BINARY_META = global.BINARY_META || {};
  Object.assign(global.BINARY_META, {
    authd: { canary: false, nx: true, pie: false, relro: 'Partial RELRO', symbols: ['main', 'gets', 'system', '__libc_csu_init'], imports: ['gets', 'system', 'puts'] },
    canary_check: { canary: true, nx: true, pie: false, relro: 'Full RELRO', symbols: ['main', 'check_canary', 'strcpy'], imports: ['strcpy', 'printf', 'fgets'] },
    fmt: { canary: false, nx: true, pie: false, relro: 'Full RELRO', symbols: ['main', 'vuln', 'printf'], imports: ['printf', 'exit'] },
    retlib: { canary: false, nx: true, pie: false, relro: 'Partial RELRO', symbols: ['main', 'gets', 'puts', 'system', '__libc_csu_init'], imports: ['gets', 'puts', 'system'] },
  });

  /* ── estado global de las máquinas pwn (leaks/secretos por sesión) ── */
  global.PWN_STATE = global.PWN_STATE || { reconDone: {} };

  /* ── ejecución de binarios: <nombre> → (args, ctx, binInfo) ── */
  global.BINARY_RUNNERS = global.BINARY_RUNNERS || {
    default: (args, ctx) => [info('(binario ejecutado — sin comportamiento instrumentado todavía en esta simulación)')],
  };

  function pwnBox(ctx) {
    const h = ctx.hostData();
    return h && h.pwn ? h.pwn : null;
  }

  Object.assign(global.BINARY_RUNNERS, {
    /* ── underflow: buffer overflow sin canary, filtra $rbp y sobrescribe el retorno ── */
    authd: (args, ctx) => {
      const pwn = pwnBox(ctx);
      const input = args.join(' ');
      const leak = global.PWN_STATE.authd;
      if (!leak && input.length >= 200) {
        global.PWN_STATE.authd = '7ffd4144e2a0';
        const lines = [
          out('authd: introduce el PIN de acceso:'),
          warn('*** stack smashing detected ***: authd terminado (core dumped)'),
          accent('leaked $rbp: 0x7ffd4144e2a0'),
          info('Vuelve a ejecutar ./authd añadiendo la dirección filtrada (7ffd4144e2a0) al final del payload.'),
        ];
        if (pwn && pwn.leakFlag) lines.push(...flagLines(pwn.leakFlag));
        return lines;
      }
      if (leak && input.includes('7ffd4144e2a0')) {
        const lines = [out('authd: introduce el PIN de acceso:'), ok('Access granted — spawn de shell de root'), ok('# cat /root/root.txt')];
        if (pwn && pwn.midFlag) lines.push(...flagLines(pwn.midFlag));
        if (pwn && pwn.rootFlag) lines.push(...flagLines(pwn.rootFlag));
        if (ctx.gameEvent) ctx.gameEvent('pwn_exploited', ctx.hostData().ip);
        return lines;
      }
      return [out('authd: introduce el PIN de acceso:'), err('Access denied')];
    },

    /* ── canary-row: overflow pero primero hay que filtrar el canario ── */
    canary_check: (args, ctx) => {
      const pwn = pwnBox(ctx);
      const input = args.join(' ');
      if (!global.PWN_STATE.canary && input.length >= 40 && !input.includes('2b3c4d5e')) {
        global.PWN_STATE.canary = '2b3c4d5e';
        const lines = [
          out('canary_check: introduce la contraseña:'),
          warn('*** stack smashing detected ***: canary_check terminado'),
          accent('canary leaked: 0x2b3c4d5e'),
          info('Inserta el canario (2b3c4d5e) AL INICIO del payload en la siguiente ejecución.'),
        ];
        if (pwn && pwn.leakFlag) lines.push(...flagLines(pwn.leakFlag));
        return lines;
      }
      if (global.PWN_STATE.canary && input.includes('2b3c4d5e')) {
        const lines = [out('canary_check: introduce la contraseña:'), ok('Canary verificado — overflow completado'), ok('Access granted — shell de root'), ok('# cat /root/root.txt')];
        if (pwn && pwn.midFlag) lines.push(...flagLines(pwn.midFlag));
        if (pwn && pwn.rootFlag) lines.push(...flagLines(pwn.rootFlag));
        if (ctx.gameEvent) ctx.gameEvent('pwn_exploited', ctx.hostData().ip);
        return lines;
      }
      return [out('canary_check: introduce la contraseña:'), err('Access denied — canary incorrecto')];
    },

    /* ── formatstr: format string → %p filtra, %s lee el secreto ── */
    fmt: (args, ctx) => {
      const pwn = pwnBox(ctx);
      const input = args.join(' ');
      if (input.includes('%p')) {
        if (!global.PWN_STATE.fmtSecret) global.PWN_STATE.fmtSecret = 'r00t_m4st3r_k3y';
        const lines = [
          out('fmt: imprime tu entrada:'),
          out('0x7ffd4144e2a0 0x555555555188 0x6e6f6f62 0x70252e70'),
          accent('(filtrado de pila — prueba con %s para leer cadenas del stack)'),
        ];
        if (pwn && pwn.leakFlag) lines.push(...flagLines(pwn.leakFlag));
        return lines;
      }
      if (input.includes('%s')) {
        const lines = [
          out('fmt: imprime tu entrada:'),
          ok('Secreto leído del stack: r00t_m4st3r_k3y'),
          info('Ese secreto es la clave del modo mantenimiento — pásala como argumento: ./fmt r00t_m4st3r_k3y'),
        ];
        if (pwn && pwn.midFlag) lines.push(...flagLines(pwn.midFlag));
        return lines;
      }
      if (input === global.PWN_STATE.fmtSecret) {
        const lines = [out('fmt: imprime tu entrada:'), ok('Modo mantenimiento activado — shell de root'), ok('# cat /root/root.txt')];
        if (pwn && pwn.rootFlag) lines.push(...flagLines(pwn.rootFlag));
        if (ctx.gameEvent) ctx.gameEvent('pwn_exploited', ctx.hostData().ip);
        return lines;
      }
      return [out('fmt: imprime tu entrada:'), err('Acceso denegado — solo lectura de parámetros')];
    },

    /* ── retlibc: NX → ret2libc con la base de libc filtrada ── */
    retlib: (args, ctx) => {
      const pwn = pwnBox(ctx);
      const input = args.join(' ');
      if (!global.PWN_STATE.retlib && input.length >= 200 && !input.includes('0x7f')) {
        global.PWN_STATE.retlib = '0x7f1234567a30';
        const lines = [
          out('retlib: ¿nombre de archivo?'),
          warn('*** SEGFAULT *** (core dumped)'),
          accent('libc leak: puts@libc = 0x7f1234567a30'),
          info('Base libc = leak - 0x875a0. ROP: pop rdi; ret → /bin/sh → system. Añade 0x7f1234567a30 a tu payload.'),
        ];
        if (pwn && pwn.leakFlag) lines.push(...flagLines(pwn.leakFlag));
        return lines;
      }
      if (input.includes('0x7f')) {
        const lines = [out('retlib: ¿nombre de archivo?'), ok('ROP chain ejecutada — system("/bin/sh") — shell de root'), ok('# cat /root/root.txt')];
        if (pwn && pwn.midFlag) lines.push(...flagLines(pwn.midFlag));
        if (pwn && pwn.rootFlag) lines.push(...flagLines(pwn.rootFlag));
        if (ctx.gameEvent) ctx.gameEvent('pwn_exploited', ctx.hostData().ip);
        return lines;
      }
      return [out('retlib: ¿nombre de archivo?'), err('No reconoce el payload — no encontró la dirección de libc.')];
    },
  });
})(typeof window !== 'undefined' ? window : globalThis);
