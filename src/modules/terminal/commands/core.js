/* ═══════════════════════════════════════════════════════════════
   commands/core.js — Comandos POSIX reales sobre el VFS.
   Cada comando recibe (tokens, ctx) y devuelve un array de líneas
   { t: tipo, l: texto } para imprimir. ctx expone el estado de
   sesión (host actual, usuario, cwd) y helpers para leerlo/mutarlo.
   ═══════════════════════════════════════════════════════════════ */
(function (global) {
  'use strict';
  const VFS = global.VFS;

  /** Parsea flags cortos combinados (-la → l,a) y argumentos posicionales. */
  function parseArgs(tokens) {
    const flags = new Set();
    const positional = [];
    for (const t of tokens) {
      if (t.length > 1 && t[0] === '-' && t[1] !== '-' && isNaN(Number(t))) {
        for (const c of t.slice(1)) flags.add(c);
      } else if (t.startsWith('--')) {
        flags.add(t.slice(2));
      } else {
        positional.push(t);
      }
    }
    return { flags, positional };
  }

  function out(l) { return { t: 'out', l }; }
  function err(l) { return { t: 'err', l }; }
  function ok(l) { return { t: 'ok', l }; }
  function info(l) { return { t: 'info', l }; }
  function warn(l) { return { t: 'warn', l }; }

  function currentFS(ctx) { return ctx.hostData().filesystem; }

  function permsAllow(node, effUser) {
    // simplificación: root/administrator siempre puede; el owner puede;
    // otros solo si perms tiene r-- para el grupo "other" (últimos 3 chars)
    if (effUser === 'root' || effUser === 'Administrator') return true;
    if (node.owner === effUser) return true;
    const otherPerm = node.perms.slice(-3);
    return otherPerm.includes('r') || otherPerm === '---' ? otherPerm.includes('r') : true;
  }

  const CORE_COMMANDS = {
    /* ── ls ── */
    ls: (tokens, ctx) => {
      const { flags, positional } = parseArgs(tokens);
      const target = positional[0] || '.';
      const path = VFS.resolvePath(ctx.cwd(), target, ctx.home());
      const node = VFS.getNode(currentFS(ctx), path);
      if (!node) return [err(`ls: no se puede acceder a '${target}': No existe el archivo o el directorio`)];
      if (node.type === 'file') return [out(target)];
      const names = Object.keys(node.children).sort();
      const visible = flags.has('a') ? names : names.filter((n) => !n.startsWith('.'));
      if (visible.length === 0) return [];
      if (flags.has('l') || flags.has('la') || flags.has('al')) {
        return visible.map((n) => {
          const c = node.children[n];
          const type = c.type === 'dir' ? 'd' : '-';
          const size = c.type === 'file' ? String(c.content.length).padStart(5) : '  4096';
          return out(`${type}${c.perms} 1 ${c.owner} ${c.owner} ${size} ${n}${c.type === 'dir' ? '/' : ''}`);
        });
      }
      return [out(visible.map((n) => (node.children[n].type === 'dir' ? n + '/' : n)).join('  '))];
    },

    /* ── cd ── */
    cd: (tokens, ctx) => {
      const target = tokens[0] || '~';
      const path = VFS.resolvePath(ctx.cwd(), target, ctx.home());
      const node = VFS.getNode(currentFS(ctx), path);
      if (!node) return [err(`bash: cd: ${target}: No existe el archivo o el directorio`)];
      if (node.type !== 'dir') return [err(`bash: cd: ${target}: No es un directorio`)];
      ctx.setCwd(path);
      return [];
    },

    /* ── pwd ── */
    pwd: (tokens, ctx) => [out(VFS.pathStr(ctx.cwd()))],

    /* ── cat ── */
    cat: (tokens, ctx) => {
      if (tokens.length === 0) return [err('cat: falta un operando de archivo')];
      const lines = [];
      for (const t of tokens) {
        const path = VFS.resolvePath(ctx.cwd(), t, ctx.home());
        const node = VFS.getNode(currentFS(ctx), path);
        if (!node) { lines.push(err(`cat: ${t}: No existe el archivo o el directorio`)); continue; }
        if (node.type === 'dir') { lines.push(err(`cat: ${t}: Es un directorio`)); continue; }
        if (!permsAllow(node, ctx.effectiveUser())) { lines.push(err(`cat: ${t}: Permiso denegado`)); continue; }
        node.content.split('\n').forEach((l) => lines.push(out(l)));
        ctx.markFileRead(path, node.content);
      }
      return lines;
    },

    /* ── echo ── */
    echo: (tokens) => [out(tokens.join(' '))],

    /* ── touch ── */
    touch: (tokens, ctx) => {
      if (tokens.length === 0) return [err('touch: falta un operando de archivo')];
      const path = VFS.resolvePath(ctx.cwd(), tokens[0], ctx.home());
      const existing = VFS.getNode(currentFS(ctx), path);
      if (!existing) VFS.setNode(currentFS(ctx), path, VFS.fileNode('', { owner: ctx.effectiveUser() }));
      return [];
    },

    /* ── mkdir ── */
    mkdir: (tokens, ctx) => {
      const { positional } = parseArgs(tokens);
      if (positional.length === 0) return [err('mkdir: falta un operando')];
      const path = VFS.resolvePath(ctx.cwd(), positional[0], ctx.home());
      const created = VFS.setNode(currentFS(ctx), path, VFS.dirNode({}, { owner: ctx.effectiveUser() }));
      if (!created) return [err(`mkdir: no se pudo crear el directorio '${positional[0]}'`)];
      return [];
    },

    /* ── rm ── */
    rm: (tokens, ctx) => {
      const { flags, positional } = parseArgs(tokens);
      if (positional.length === 0) return [err('rm: falta un operando')];
      const lines = [];
      for (const t of positional) {
        const path = VFS.resolvePath(ctx.cwd(), t, ctx.home());
        const node = VFS.getNode(currentFS(ctx), path);
        if (!node) { if (!flags.has('f')) lines.push(err(`rm: no se puede eliminar '${t}': No existe`)); continue; }
        if (node.type === 'dir' && !flags.has('r') && Object.keys(node.children).length) {
          lines.push(err(`rm: no se puede eliminar '${t}': Es un directorio no vacío (usa -r)`)); continue;
        }
        VFS.removeNode(currentFS(ctx), path);
      }
      return lines;
    },

    /* ── cp / mv (simplificado, solo dentro del mismo host) ── */
    cp: (tokens, ctx) => copyOrMove(tokens, ctx, false),
    mv: (tokens, ctx) => copyOrMove(tokens, ctx, true),

    /* ── grep ── */
    grep: (tokens, ctx) => {
      const { flags, positional } = parseArgs(tokens);
      if (positional.length < 1) return [err('uso: grep [-rni] patrón [archivo...]')];
      const pattern = positional[0];
      const re = new RegExp(escapeRegex(pattern), flags.has('i') ? 'i' : '');
      const lines = [];
      const files = positional.slice(1);

      function grepFile(content, label) {
        content.split('\n').forEach((l, idx) => {
          const match = flags.has('v') ? !re.test(l) : re.test(l);
          if (match) lines.push(out(`${label ? label + ':' : ''}${flags.has('n') ? idx + 1 + ':' : ''}${l}`));
        });
      }

      if (flags.has('r')) {
        const startPath = files.length ? VFS.resolvePath(ctx.cwd(), files[0], ctx.home()) : ctx.cwd();
        VFS.walk(currentFS(ctx), startPath, (node, p) => {
          if (node.type === 'file' && permsAllow(node, ctx.effectiveUser())) grepFile(node.content, VFS.pathStr(p));
        });
      } else if (files.length === 0) {
        return [err('grep: falta el archivo (usa -r para buscar recursivamente)')];
      } else {
        for (const f of files) {
          const path = VFS.resolvePath(ctx.cwd(), f, ctx.home());
          const node = VFS.getNode(currentFS(ctx), path);
          if (!node) { lines.push(err(`grep: ${f}: No existe el archivo o el directorio`)); continue; }
          if (node.type !== 'file') { lines.push(err(`grep: ${f}: Es un directorio`)); continue; }
          grepFile(node.content, files.length > 1 ? f : null);
        }
      }
      if (lines.length === 0) return [info('(sin coincidencias)')];
      return lines;
    },

    /* ── find ── */
    find: (tokens, ctx) => {
      let startArg = '.';
      let nameFilter = null;
      let typeFilter = null;
      for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === '-name') nameFilter = (tokens[i + 1] || '').replace(/^["']|["']$/g, '');
        else if (tokens[i] === '-type') typeFilter = tokens[i + 1];
        else if (!tokens[i].startsWith('-') && i === 0) startArg = tokens[i];
      }
      const startPath = VFS.resolvePath(ctx.cwd(), startArg, ctx.home());
      const startNode = VFS.getNode(currentFS(ctx), startPath);
      if (!startNode) return [err(`find: '${startArg}': No existe el archivo o el directorio`)];
      const results = [];
      const nameRe = nameFilter ? globToRegex(nameFilter) : null;
      VFS.walk(currentFS(ctx), startPath, (node, p) => {
        if (typeFilter === 'f' && node.type !== 'file') return;
        if (typeFilter === 'd' && node.type !== 'dir') return;
        const name = p[p.length - 1] || '';
        if (nameRe && !nameRe.test(name)) return;
        results.push(out(VFS.pathStr(p) || '/'));
      });
      return results.length ? results : [info('(sin resultados)')];
    },

    /* ── wc ── */
    wc: (tokens, ctx) => {
      const { flags, positional } = parseArgs(tokens);
      if (positional.length === 0) return [err('wc: falta un operando de archivo')];
      const lines = [];
      for (const f of positional) {
        const path = VFS.resolvePath(ctx.cwd(), f, ctx.home());
        const node = VFS.getNode(currentFS(ctx), path);
        if (!node || node.type !== 'file') { lines.push(err(`wc: ${f}: No existe el archivo`)); continue; }
        const content = node.content;
        const nLines = content.split('\n').length;
        const nWords = content.split(/\s+/).filter(Boolean).length;
        const nChars = content.length;
        if (flags.has('l')) lines.push(out(`${nLines} ${f}`));
        else if (flags.has('w')) lines.push(out(`${nWords} ${f}`));
        else if (flags.has('c')) lines.push(out(`${nChars} ${f}`));
        else lines.push(out(`${nLines} ${nWords} ${nChars} ${f}`));
      }
      return lines;
    },

    /* ── head / tail ── */
    head: (tokens, ctx) => headTail(tokens, ctx, true),
    tail: (tokens, ctx) => headTail(tokens, ctx, false),

    /* ── file ── */
    file: (tokens, ctx) => {
      if (!tokens[0]) return [err('file: falta un operando')];
      const path = VFS.resolvePath(ctx.cwd(), tokens[0], ctx.home());
      const node = VFS.getNode(currentFS(ctx), path);
      if (!node) return [err(`file: no se puede abrir '${tokens[0]}': No existe`)];
      if (node.type === 'dir') return [out(`${tokens[0]}: directory`)];
      const ext = tokens[0].split('.').pop();
      const guess = { txt: 'ASCII text', md: 'ASCII text (Markdown)', sh: 'Bourne-Again shell script', php: 'PHP script text', yml: 'YAML document', sql: 'ASCII text (SQL)' }[ext] || 'ASCII text';
      return [out(`${tokens[0]}: ${guess}`)];
    },

    /* ── chmod / chown (cosméticos) ── */
    chmod: (tokens, ctx) => {
      const { positional } = parseArgs(tokens);
      if (positional.length < 2) return [err('uso: chmod MODO ARCHIVO')];
      const path = VFS.resolvePath(ctx.cwd(), positional[1], ctx.home());
      const node = VFS.getNode(currentFS(ctx), path);
      if (!node) return [err(`chmod: no se puede acceder a '${positional[1]}': No existe`)];
      return [info(`(modo cambiado — simulación, sin efecto real en permisos de otros comandos)`)];
    },
    chown: (tokens) => [info('(cambio de propietario simulado — sin efecto real)')],

    /* ── identidad / sistema ── */
    whoami: (tokens, ctx) => [out(ctx.frame().user)],
    id: (tokens, ctx) => {
      const u = ctx.frame().user;
      const isRoot = u === 'root' || u === 'Administrator';
      return [out(`uid=${isRoot ? 0 : 1000}(${u}) gid=${isRoot ? 0 : 1000}(${u}) groups=${isRoot ? 0 : 1000}(${u})${isRoot ? ',27(sudo)' : ''}`)];
    },
    hostname: (tokens, ctx) => [out(ctx.hostData().hostname)],
    uname: (tokens, ctx) => {
      const { flags } = parseArgs(tokens);
      const h = ctx.hostData();
      if (flags.has('a')) return [out(`${h.os} ${h.hostname} 5.15.0-generic #1 SMP x86_64 GNU/Linux`)];
      return [out(h.os)];
    },
    date: () => [out(new Date().toString())],
    clear: () => [{ t: 'CLEAR' }],
    history: (tokens, ctx) => ctx.history().map((c, i) => out(`  ${i + 1}  ${c}`)),
    env: (tokens, ctx) => [
      out(`USER=${ctx.frame().user}`), out(`HOME=${VFS.pathStr(ctx.home())}`),
      out(`SHELL=/bin/bash`), out(`PWD=${VFS.pathStr(ctx.cwd())}`),
    ],
    which: (tokens, ctx) => {
      const cmd = tokens[0];
      if (!cmd) return [err('which: falta un argumento')];
      const known = ctx.isKnownCommand(cmd);
      return known ? [out(`/usr/bin/${cmd}`)] : [err(`which: no such command: ${cmd}`)];
    },
    df: () => [
      out('Filesystem     1K-blocks    Used Available Use% Mounted on'),
      out('/dev/sda1       20971520 8912345  11034521  45% /'),
    ],
    du: (tokens, ctx) => [out(`4.0K\t${VFS.pathStr(ctx.cwd())}`)],
    ps: (tokens, ctx) => {
      const h = ctx.hostData();
      const rows = (h.psRows) || [['PID', 'USER', 'CMD'], ['1', 'root', '/sbin/init'], ['842', ctx.frame().user, '-bash']];
      return rows.map((r) => out(r.join('\t')));
    },
    top: (tokens, ctx) => [
      info('(snapshot estático — no es una vista en vivo en esta simulación)'),
      out('PID   USER      %CPU  %MEM  COMMAND'),
      out('1     root      0.0   0.1   /sbin/init'),
      out('842   ' + ctx.frame().user.padEnd(9) + ' 0.3   0.4   -bash'),
    ],

    /* ── ayuda ── */
    man: (tokens, ctx) => {
      const cmd = tokens[0];
      if (!cmd) return [err('¿Manual de qué comando? Ej: man nmap')];
      const page = MAN_PAGES[cmd];
      if (!page) return [info(`No hay entrada de manual para ${cmd}.`)];
      return page.split('\n').map((l) => out(l));
    },
    help: (tokens, ctx) => ctx.printHelp(),
    hosts: (tokens, ctx) => ctx.printHostsStatus(),
    flags: (tokens, ctx) => ctx.printFlagsStatus(),

    /* ── base64 (codificación real, útil para inspeccionar JWTs) ── */
    base64: (tokens, ctx) => {
      const decode = tokens.includes('-d') || tokens.includes('--decode');
      const rest = tokens.filter((t) => t !== '-d' && t !== '--decode').join(' ');
      if (!rest) return [err('uso: base64 [-d] "texto"  (o combínalo con: echo "texto" | base64 [-d])')];
      try {
        const result = decode ? global.b64decode(rest) : global.b64encode(rest);
        const lines = [out(result)];
        if (decode) {
          const flagLine = global.checkJWTDecodeFlag(result);
          if (flagLine) lines.push(flagLine);
        }
        return lines;
      } catch (e) {
        return [err('base64: entrada inválida (¿seguro que es Base64 válido?)')];
      }
    },
  };

  function copyOrMove(tokens, ctx, isMove) {
    const { positional } = parseArgs(tokens);
    if (positional.length < 2) return [err(`uso: ${isMove ? 'mv' : 'cp'} ORIGEN DESTINO`)];
    const srcPath = VFS.resolvePath(ctx.cwd(), positional[0], ctx.home());
    const dstPath = VFS.resolvePath(ctx.cwd(), positional[1], ctx.home());
    const srcNode = VFS.getNode(currentFS(ctx), srcPath);
    if (!srcNode) return [err(`${isMove ? 'mv' : 'cp'}: no se puede leer '${positional[0]}': No existe`)];
    const cloned = JSON.parse(JSON.stringify(srcNode));
    const okSet = VFS.setNode(currentFS(ctx), dstPath, cloned);
    if (!okSet) return [err(`${isMove ? 'mv' : 'cp'}: no se pudo escribir en '${positional[1]}'`)];
    if (isMove) VFS.removeNode(currentFS(ctx), srcPath);
    return [];
  }

  function headTail(tokens, ctx, isHead) {
    const { flags, positional } = parseArgs(tokens);
    let n = 10;
    const nIdx = tokens.indexOf('-n');
    if (nIdx > -1 && tokens[nIdx + 1]) n = parseInt(tokens[nIdx + 1], 10) || 10;
    const file = positional[positional.length - 1];
    if (!file) return [err(`${isHead ? 'head' : 'tail'}: falta un operando de archivo`)];
    const path = VFS.resolvePath(ctx.cwd(), file, ctx.home());
    const node = VFS.getNode(currentFS(ctx), path);
    if (!node || node.type !== 'file') return [err(`${isHead ? 'head' : 'tail'}: no se puede abrir '${file}'`)];
    const lines = node.content.split('\n');
    const slice = isHead ? lines.slice(0, n) : lines.slice(-n);
    return slice.map((l) => out(l));
  }

  function escapeRegex(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  function globToRegex(glob) {
    const esc = glob.replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*').replace(/\?/g, '.');
    return new RegExp('^' + esc + '$');
  }

  const MAN_PAGES = {
    nmap: 'NMAP(1)\n\nnmap [flags] <objetivo>\n\n  -sV   detecta versión de servicios\n  -sC   ejecuta scripts por defecto\n  -p-   escanea los 65535 puertos (revela puertos ocultos)\n  -p N  escanea el puerto N\n  -A    modo agresivo (equivale a -sV -sC -O)\n  -sn   ping sweep (solo detecta hosts vivos, sin puertos)',
    ssh: 'SSH(1)\n\nssh usuario@host\n\nAbre una sesión remota. Si las credenciales son correctas,\ntu prompt cambiará al del host remoto. Usa "exit" para volver.',
    grep: 'GREP(1)\n\ngrep [-rni] patrón [archivo...]\n\n  -r  búsqueda recursiva en directorios\n  -n  muestra el número de línea\n  -i  ignora mayúsculas/minúsculas\n  -v  invierte la coincidencia',
    find: 'FIND(1)\n\nfind [ruta] -name "patrón" -type f|d\n\nBusca archivos o directorios que coincidan con el patrón\n(admite comodines * y ?) bajo la ruta indicada.',
    sudo: 'SUDO(1)\n\nsudo [comando]\nsudo -l   → lista qué puedes ejecutar como root sin contraseña\n\nSi el binario permitido tiene un vector de escape conocido\n(ver GTFOBins), sudo puede darte una shell de root completa.',
  };

  global.CORE_COMMANDS = CORE_COMMANDS;
  global.parseArgs = parseArgs;
})(typeof window !== 'undefined' ? window : globalThis);
