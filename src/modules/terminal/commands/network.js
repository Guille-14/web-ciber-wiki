/* ═══════════════════════════════════════════════════════════════
   commands/network.js — Comandos de red y explotación.
   Operan contra el registro HOSTS/DNS real. ssh y mysql usan
   ctx.requestSecret() para pedir contraseña de forma interactiva
   igual que una terminal de verdad.
   ═══════════════════════════════════════════════════════════════ */
(function (global) {
  'use strict';

  function out(l) { return { t: 'out', l }; }
  function err(l) { return { t: 'err', l }; }
  function ok(l) { return { t: 'ok', l }; }
  function info(l) { return { t: 'info', l }; }
  function warn(l) { return { t: 'warn', l }; }
  function accent(l) { return { t: 'accent', l }; }

  function b64encode(str) {
    if (typeof btoa === 'function') return btoa(str);
    return Buffer.from(str, 'binary').toString('base64');
  }
  function b64decode(str) {
    if (typeof atob === 'function') return atob(str);
    return Buffer.from(str, 'base64').toString('binary');
  }

  /** Si lo decodificado parece un payload/header de JWT (JSON con alg/role/user), devuelve la línea de flag. */
  function checkJWTDecodeFlag(decodedStr) {
    try {
      const parsed = JSON.parse(decodedStr);
      if (parsed && typeof parsed === 'object' && (parsed.role !== undefined || parsed.alg !== undefined || parsed.user !== undefined)) {
        return { t: 'flag', l: 'CQ{b4s3_64_1s_n0t_3ncrypt10n}' };
      }
    } catch (e) { /* no era JSON — decodificación normal, sin flag */ }
    return null;
  }

  function resolveTarget(input) {
    if (!input) return null;
    const clean = input.replace(/^https?:\/\//, '').split('/')[0].split(':')[0];
    const ip = global.DNS[clean] || (global.HOSTS[clean] ? clean : null) || (global.HOSTS[input] ? input : null);
    if (ip && global.HOSTS[ip]) return global.HOSTS[ip];
    // easter eggs para dominios reales fuera de la simulación
    if (/^(google|github|anthropic)\.com$/.test(clean)) return { easterEgg: clean };
    return null;
  }

  /* ════════════════════ NMAP ════════════════════ */
  function cmdNmap(tokens, ctx) {
    const { flags, positional } = ctx.parseArgs(tokens);
    const targetArg = positional[positional.length - 1];
    if (!targetArg) return [err('uso: nmap [-sV] [-sC] [-p-|-p PUERTOS] [-sn] [-A] <objetivo>')];
    const host = resolveTarget(targetArg);
    if (!host) {
      const internalNet = Object.values(global.HOSTS).find((h) => h.internalNetwork === targetArg);
      if (internalNet) {
        if (!ctx.isHostInStack(internalNet.ip)) {
          return [out('Starting Nmap 7.94 ( https://nmap.org )'), warn(`nmap: connect scan — no route to ${targetArg}`), info('Esa red es interna y no está en tu tabla de rutas. Necesitas pivotar desde el host que la puede alcanzar.')];
        }
        const ih = internalNet.internalHost;
        const lines = [
          out('Starting Nmap 7.94 ( https://nmap.org )'),
          out(`Nmap scan report for ${targetArg}`),
          out('Host is up (0.021s latency).'),
          out(''),
          out(`Nmap scan report for ${ih.ip} (${ih.hostname})`),
          out('Host is up (0.015s latency).'),
          out(''),
          out('PORT     STATE SERVICE       VERSION'),
        ];
        lines.push(accent(`${String(ih.port || 3306).padEnd(8)} open  ${(ih.service || 'mysql').padEnd(13)} ${ih.version || ''}`));
        lines.push(out(''), ok(`✔ Nmap done: 2 hosts up in ${(2 + Math.random() * 2).toFixed(2)} seconds`));
        lines.push(...flagLines('CQ{1nt3rn4l_sc4n_f0und_db}'));
        ctx.gameEvent('internal_net_scan', internalNet.ip);
        return lines;
      }
      return [out(`Starting Nmap 7.94 ( https://nmap.org )`), warn(`Note: Host seems down. Si crees que en realidad está activo,`), warn(`revisa la IP/dominio — no forma parte de esta red simulada.`)];
    }
    if (host.easterEgg) return [out('Starting Nmap 7.94 ( https://nmap.org )'), warn(`nmap: ${host.easterEgg} está fuera del alcance de esta simulación (y probablemente sea ilegal escanearlo sin permiso en la vida real 😉)`)];
    ctx.gameEvent('nmap_scanned', host.ip);

    const showAll = flags.has('A') || tokens.includes('-p-') || flags.has('p-');
    const wantsPingOnly = flags.has('n') && tokens.includes('-sn');
    const lines = [
      out('Starting Nmap 7.94 ( https://nmap.org )'),
      out(`Nmap scan report for ${host.dnsName || host.hostname} (${host.ip})`),
      out(`Host is up (0.021s latency).`),
    ];
    if (wantsPingOnly) { lines.push(ok('✔ Host activo.')); return lines; }

    const visiblePorts = host.ports.filter((p) => !p.hidden || showAll);
    if (visiblePorts.length === 0) {
      lines.push(out('All 1000 scanned ports on target are closed'));
      return lines;
    }
    lines.push(out(''), out('PORT     STATE SERVICE       VERSION'));
    for (const p of visiblePorts) {
      const versionCol = flags.has('V') || flags.has('A') ? p.version : '';
      lines.push(accent(`${String(p.port).padEnd(8)} open  ${p.service.padEnd(13)} ${versionCol}`));
    }
    if (flags.has('C') || flags.has('A')) {
      lines.push(out(''), out('Host script results:'));
      if (host.domain) lines.push(warn(`| Domain: ${host.domain}`));
      if (host.ports.some((p) => p.hidden) && !showAll) lines.push(info('| (algunos servicios podrían no listarse — prueba -p- para un escaneo completo)'));
    }
    lines.push(out(''), ok(`✔ Nmap done: 1 IP address scanned in ${(2 + Math.random() * 3).toFixed(2)} seconds`));
    return lines;
  }

  /* ════════════════════ PING ════════════════════ */
  function cmdPing(tokens, ctx) {
    const target = tokens[tokens.length - 1];
    const host = resolveTarget(target);
    if (target === '127.0.0.1' || target === 'localhost') {
      return [out(`PING localhost (127.0.0.1): 56 data bytes`), out(`64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=0.03 ms`), ok('--- localhost ping statistics ---'), out('1 packets transmitted, 1 received, 0% packet loss')];
    }
    if (!host || host.easterEgg) return [err(`ping: ${target}: no se pudo resolver el host o está fuera de esta simulación`)];
    return [
      out(`PING ${host.dnsName || host.hostname} (${host.ip}): 56 data bytes`),
      out(`64 bytes from ${host.ip}: icmp_seq=0 ttl=63 time=${(15 + Math.random() * 20).toFixed(1)} ms`),
      out(`64 bytes from ${host.ip}: icmp_seq=1 ttl=63 time=${(15 + Math.random() * 20).toFixed(1)} ms`),
      ok(`--- ${host.ip} ping statistics ---`),
      out('2 packets transmitted, 2 received, 0% packet loss'),
    ];
  }

  /* ════════════════════ CURL / WGET ════════════════════ */
  function cmdCurl(tokens, ctx) {
    const raw = tokens.join(' ');
    const { positional } = ctx.parseArgs(tokens.filter((t) => !t.startsWith('{') && !t.startsWith("'{")));
    const urlTok = tokens.find((t) => /^https?:\/\/|\.\w{2,}(\/|$)/.test(t) && !t.startsWith('-'));
    if (!urlTok) return [err('uso: curl [-X MÉTODO] [-d datos] [-H "cabecera"] <url>')];
    const host = resolveTarget(urlTok);
    if (!host) return [err(`curl: (6) No se pudo resolver el host: ${urlTok}`)];
    if (host.easterEgg) return [warn(`curl: ${host.easterEgg} está fuera del alcance de esta simulación.`)];
    if (host.noShell === undefined && !host.web && !host.api) return [err(`curl: (7) No se pudo conectar al puerto 80/443 en ${host.ip} — este host no expone servicios web`)];

    const path = '/' + urlTok.replace(/^https?:\/\//, '').split('/').slice(1).join('/');
    const method = extractFlagValue(tokens, '-X') || 'GET';
    const dataArg = extractFlagValue(tokens, '-d');
    const authHeader = tokens.find((t) => t.includes('Bearer') || t.includes('Authorization'));

    /* ── meltwater: SSRF a través de /fetch?url= ── */
    if (host.ssrf && path.startsWith(host.ssrf.path)) return handleSSRF(host, path, ctx);

    /* ── greenhouse: Docker Registry :5000 ── */
    if (host.registry) return handleRegistry(host, path, ctx);

    /* ── meltwater: panel de admin interno (token en deploy.sh) ── */
    if (host.admin && path === host.admin.path) {
      const joined = tokens.join(' ');
      if (host.admin.token && joined.includes(host.admin.token)) {
        const lines = [
          ok('HTTP/1.1 200 OK'),
          out(JSON.stringify({ panel: 'meltwater-admin', status: 'authenticated', session: 'ADMIN_SESSION', message: 'Bienvenido, operador.' })),
        ];
        if (host.admin.flag) lines.push(...flagLines(host.admin.flag));
        ctx.gameEvent('cloud_admin_panel', host.ip);
        return lines;
      }
      return [err('HTTP/1.1 401 Unauthorized'), err(JSON.stringify({ error: 'missing or invalid X-Admin-Token' }))];
    }

    /* ── Fracture: API con estado (registro/login/JWT) ── */
    if (host.api) return handleFractureAPI(host, path, method, dataArg, tokens, raw, ctx);

    /* ── Lantern y similares: web estático ── */
    if (host.web) {
      const page = host.web[path] || host.web[path.replace(/\/$/, '')];
      if (!page) return [out(`HTTP/1.1 404 Not Found`)];
      const lines = [out(`HTTP/1.1 ${page.status} ${page.status === 200 ? 'OK' : ''}`)];
      page.body.split('\n').forEach((l) => lines.push(out(l)));
      if (page.flag) lines.push(...flagLines(page.flag));
      if (page.cloudCreds) ctx.noteCloudCreds(host.ip);
      ctx.markFileRead(['web', host.ip, path], page.body);
      return lines;
    }
    return [err('curl: no se encontró contenido en esa ruta')];
  }

  /* ── SSRF: el endpoint /fetch descarga del lado del servidor ── */
  function handleSSRF(host, path, ctx) {
    const s = host.ssrf;
    const urlParam = decodeURIComponent((path.match(/url=([^&]+)/) || [])[1] || '');
    if (!urlParam) return [err('HTTP/1.1 400 Bad Request'), out(JSON.stringify({ error: 'falta el parámetro url' }))];
    if (!urlParam.includes('169.254.169.254')) {
      return [ok('HTTP/1.1 200 OK'), out(JSON.stringify({ fetch: urlParam, status: 'ok', size: 0 })), info('Pruébalo contra la metadata de AWS: http://169.254.169.254/latest/meta-data/')];
    }
    const credsPath = urlParam.split('169.254.169.254').pop();
    if (credsPath.includes('security-credentials/')) {
      const c = s.creds || {};
      ctx.noteCloudCreds(host.ip);
      const lines = [
        out('HTTP/1.1 200 OK'),
        accent(JSON.stringify({ AccessKeyId: c.accessKeyId, SecretAccessKey: c.secretAccessKey, Token: c.token, Expiration: '2026-12-31T00:00:00Z' })),
        info('Credenciales IMDS robadas. Ahora "aws" funciona — prueba aws s3 ls.'),
      ];
      if (s.credsFlag) lines.push(...flagLines(s.credsFlag));
      ctx.gameEvent('imds_creds', host.ip);
      return lines;
    }
    if (credsPath.includes('security-credentials')) {
      const lines = [out('HTTP/1.1 200 OK'), accent(s.roleName || 'dev-deploy'), info('Es el rol a pedir: /latest/meta-data/iam/security-credentials/<rol>')];
      if (s.ssrfFlag && !ctx.apiState(host.ip).ssrfFired) { ctx.apiState(host.ip).ssrfFired = true; lines.push(...flagLines(s.ssrfFlag)); }
      return lines;
    }
    const lines = [out('HTTP/1.1 200 OK'), out('latest/'), out('meta-data/'), info('Ruta clásica: /latest/meta-data/iam/security-credentials/')];
    if (s.ssrfFlag && !ctx.apiState(host.ip).ssrfFired) { ctx.apiState(host.ip).ssrfFired = true; lines.push(...flagLines(s.ssrfFlag)); }
    return lines;
  }

  /* ── Docker Registry :5000 ── */
  function handleRegistry(host, path, ctx) {
    const reg = host.registry;
    const state = ctx.apiState(host.ip);
    if (path === '/v2/' || path === '/v2/_catalog') {
      const lines = [out('HTTP/1.1 200 OK'), accent(JSON.stringify({ repositories: [reg.repo] }))];
      if (reg.catalogFlag && !state.catalogFired) { state.catalogFired = true; lines.push(...flagLines(reg.catalogFlag)); }
      return lines;
    }
    if (path.includes('/manifests/')) {
      const tag = path.split('/manifests/')[1];
      const lines = [out('HTTP/1.1 200 OK'), out(JSON.stringify({ schemaVersion: 2, mediaType: 'application/vnd.oci.image.manifest.v1+json', tag }))];
      reg.layers.forEach((l) => lines.push(accent(`      digest: ${l.digest}  size: ${l.size}`)));
      lines.push(info(`Descarga cada capa con: curl http://${host.dnsName || host.ip}:5000/v2/${reg.repo}/blobs/${reg.layers[0].digest}`));
      return lines;
    }
    if (path.includes('/blobs/')) {
      const digest = path.split('/blobs/')[1];
      const layer = reg.layers.find((l) => l.digest === digest);
      if (!layer) return [err('HTTP/1.1 404 Not Found'), out(JSON.stringify({ errors: ['BLOB_UNKNOWN'] }))];
      ctx.markFileRead();
      const lines = [out('HTTP/1.1 200 OK'), out(''), out(layer.content)];
      if (layer.flag) lines.push(...flagLines(layer.flag));
      if (layer.cloudCreds) ctx.noteCloudCreds(host.ip);
      return lines;
    }
    return [err('HTTP/1.1 404 Not Found')];
  }

  function extractFlagValue(tokens, flag) {
    const i = tokens.indexOf(flag);
    if (i === -1 || !tokens[i + 1]) return null;
    return tokens[i + 1].replace(/^["']|["']$/g, '');
  }

  function handleFractureAPI(host, path, method, dataArg, tokens, raw, ctx) {
    const state = ctx.apiState(host.ip);
    if (path.includes('register')) {
      const uid = state.nextId || host.api.nextId;
      state.nextId = uid + 1;
      const userMatch = (dataArg || '').match(/user["']?\s*:\s*["']([^"']+)/);
      const username = userMatch ? userMatch[1] : 'tester';
      state.users = state.users || {};
      state.users[username] = { role: 'user', id: uid };
      return [out('HTTP/1.1 201 Created'), out(JSON.stringify({ status: 'ok', user_id: uid, role: 'user' }))];
    }
    if (path.includes('login')) {
      const userMatch = (dataArg || '').match(/user["']?\s*:\s*["']([^"']+)/);
      const username = userMatch ? userMatch[1] : 'tester';
      const headerB64 = b64encode(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
      const payloadB64 = b64encode(JSON.stringify({ user: username, role: 'user' }));
      const token = `${headerB64}.${payloadB64}.4f2a1c9e`;
      state.lastToken = token;
      const lines = [out('HTTP/1.1 200 OK'), out(JSON.stringify({ token }))];
      lines.push(...flagLines('CQ{jwt_1ssu3d_succ3ssfully}'));
      return lines;
    }
    if (path.includes('admin/export')) {
      const joined = tokens.join(' ');
      const m = joined.match(/sk_live_\w+/);
      const auth = m ? m[0] : null;
      if (auth === host.api.adminRecord.api_key) {
        return [ok('HTTP/1.1 200 OK'), ok(JSON.stringify({ status: 'full_export_generated', records: 48213 })), ...flagLines('CQ{full_4p1_c0mpr0m1s3}')];
      }
      return [err('HTTP/1.1 401 Unauthorized'), err(JSON.stringify({ error: 'invalid api key' }))];
    }
    if (path.includes('admin/users/1')) {
      if (!isAdminAuthorized(tokens)) return [err('HTTP/1.1 403 Forbidden')];
      const lines = [out('HTTP/1.1 200 OK'), accent(JSON.stringify(host.api.adminRecord))];
      lines.push(...flagLines('CQ{1d0r_ch41n3d_w1th_jwt}'));
      return lines;
    }
    if (path.includes('admin')) {
      if (!isAdminAuthorized(tokens)) return [err('HTTP/1.1 403 Forbidden'), err(JSON.stringify({ error: 'admin role required' }))];
      return [ok('HTTP/1.1 200 OK'), ok(JSON.stringify({ status: 'authenticated', role: 'admin', panel: '/admin/users' })), warn('⚠ El servidor NO verificó la firma — aceptó alg:none'), ...flagLines('CQ{4lg_n0n3_1s_4lw4ys_d4ng3r0us}')];
    }
    return [out('HTTP/1.1 200 OK'), out(JSON.stringify({ service: 'fracture-api', status: 'online' }))];
  }
  function isAdminAuthorized(tokens) {
    const joined = tokens.join(' ');
    const m = joined.match(/Bearer\s+(\S+)/);
    if (!m) return false;
    const bearer = m[1];
    if (bearer.split('.').length !== 3) return false;
    try {
      const header = JSON.parse(b64decode(bearer.split('.')[0]));
      const payload = JSON.parse(b64decode(bearer.split('.')[1]));
      return payload.role === 'admin' && header.alg && header.alg.toLowerCase() === 'none';
    } catch (e) { return false; }
  }
  function flagLines(flagStr) { return [{ t: 'flag', l: flagStr, _isFlagMarker: true }]; }

  function cmdWget(tokens, ctx) {
    const url = tokens[tokens.length - 1];
    const host = resolveTarget(url);
    if (!host) return [err(`wget: no se pudo resolver ${url}`)];
    return [out(`--${new Date().toISOString()}--  ${url}`), out(`Resolving... ${host.ip}`), out('HTTP request sent, awaiting response... 200 OK'), ok(`✔ Guardado (contenido disponible con curl para inspección)`)];
  }

  /* ════════════════════ SSH ════════════════════ */
  function cmdSSH(tokens, ctx) {
    const arg = tokens.find((t) => t.includes('@')) || tokens[0];
    if (!arg || !arg.includes('@')) return [err('uso: ssh usuario@objetivo')];
    const [user, targetStr] = arg.split('@');
    const host = resolveTarget(targetStr);
    if (!host) return [err(`ssh: Could not resolve hostname ${targetStr}: Name or service not known`)];
    if (host.noShell) return [err(`ssh: connect to host ${host.ip} port 22: Connection refused`)];
    const hasSSHPort = host.ports && host.ports.some((p) => p.service === 'ssh');
    if (!hasSSHPort) return [err(`ssh: connect to host ${host.ip} port 22: Connection refused`)];

    ctx.requestSecret({
      promptLabel: `${user}@${host.ip}'s password: `,
      mask: true,
      onSubmit: (attempt) => {
        const userData = host.users && host.users[user];
        const validPassword = userData && userData.password === attempt;
        if (!validPassword) return { lines: [err('Permission denied, please try again.')], ok: false };
        const lines = [
          ok(`Welcome to ${host.osDetail || host.os}`),
          info(`Last login: ${new Date().toDateString()} from 10.10.14.1`),
        ];
        if (userData.sshFlag) lines.push(...flagLines(userData.sshFlag));
        ctx.pushSession(host.ip, user);
        ctx.gameEvent('ssh_login', host.ip);
        return { lines, ok: true };
      },
    });
    return [info(`Estableciendo conexión con ${host.ip}...`)];
  }

  /* ════════════════════ SUDO ════════════════════ */
  const GTFOBINS_ESCAPE = {
    find: (argsStr) => /-exec\s+\/bin\/(sh|bash)/.test(argsStr),
    vim: (argsStr) => /:!\s*\/bin\/(sh|bash)|-c\s*['"]?:!/.test(argsStr),
    less: (argsStr) => /!\s*\/bin\/(sh|bash)/.test(argsStr),
    awk: (argsStr) => /BEGIN\s*\{system/.test(argsStr),
  };
  function cmdSudo(tokens, ctx) {
    if (tokens[0] === '-l') {
      const sudoers = (ctx.hostData().sudoers || {})[ctx.frame().user];
      if (!sudoers) return [out(`Matching Defaults entries for ${ctx.frame().user}:`), out('    env_reset, mail_badpass'), out(''), out(`User ${ctx.frame().user} may not run any commands on ${ctx.hostData().hostname}.`)];
      const list = sudoers.nopasswd || [];
      const lines = [out(`Matching Defaults entries for ${ctx.frame().user} on ${ctx.hostData().hostname}:`), out('    env_reset, mail_badpass'), out(''), out(`User ${ctx.frame().user} may run the following commands:`)];
      list.forEach((b) => lines.push(warn(`    (ALL) NOPASSWD: ${b}`)));
      return lines;
    }
    if (tokens.length === 0) return [err('uso: sudo [-l] comando')];
    const sudoers = (ctx.hostData().sudoers || {})[ctx.frame().user];
    const binary = tokens[0].startsWith('/') ? tokens[0] : '/usr/bin/' + tokens[0];
    const binName = tokens[0].split('/').pop();
    const allowedAll = sudoers && sudoers.nopasswd && sudoers.nopasswd.includes('ALL');
    const allowedBin = sudoers && sudoers.nopasswd && sudoers.nopasswd.some((b) => b.endsWith('/' + binName) || b === 'ALL');
    if (!sudoers || (!allowedAll && !allowedBin)) {
      return [err(`Sorry, user ${ctx.frame().user} is not allowed to execute that as root on ${ctx.hostData().hostname}.`)];
    }
    const argsStr = tokens.join(' ');
    const escapeCheck = GTFOBINS_ESCAPE[binName];
    if (escapeCheck && escapeCheck(argsStr)) {
      ctx.frame().user = ctx.frame().user === 'Administrator' ? 'Administrator' : (ctx.hostData().os === 'Windows' ? 'Administrator' : 'root');
      ctx.gameEvent('privesc', ctx.hostData().ip);
      const lines = [ok('# whoami'), ok(ctx.frame().user), info('(shell elevada — ya operas como superusuario en esta sesión)')];
      if (ctx.hostData().privescFlag) lines.push(...flagLines(ctx.hostData().privescFlag));
      return lines;
    }
    // ejecución puntual como root de un comando core, sin escalar la sesión
    const rest = tokens.slice(1);
    if (ctx.runCoreAsRoot) return ctx.runCoreAsRoot(binName, rest);
    return [info(`(${binName} ejecutado como root — sin salida adicional simulada para este binario)`)];
  }

  /* ════════════════════ SQLMAP ════════════════════ */
  function cmdSqlmap(tokens, ctx) {
    const urlTok = extractFlagValue(tokens, '-u') || tokens.find((t) => t.startsWith('http'));
    if (!urlTok) return [err('uso: sqlmap -u "URL" [--forms] [--dump]')];
    const host = resolveTarget(urlTok);
    if (!host || !host.sqli) return [out('[*] starting @ sqlmap/1.7.11'), out('[*] testing connection to the target URL'), warn('[-] no parameter seems to be injectable. Try a different target.')];
    const path = '/' + urlTok.split('/').slice(1).join('/');
    if (!path.includes(host.sqli.path.split('/').pop())) {
      return [out('[*] starting @ sqlmap/1.7.11'), warn('[-] no parameter seems to be injectable en esa ruta exacta.'), info(`Pista: la ruta vulnerable es ${host.sqli.path}`)];
    }
    const lines = [
      out('[*] starting @ sqlmap/1.7.11'),
      out('[*] testing connection to the target URL'),
      warn(`[*] GET parameter 'user' appears to be injectable`),
      out(`[*] testing 'AND boolean-based blind'`),
      ok('[+] injectable! Type: boolean-based blind, UNION query'),
    ];
    if (tokens.includes('--dump') || tokens.includes('--forms')) {
      lines.push(out('[*] fetching database names...'), accent(`available databases: [1]: ${host.sqli.dbName}`));
      lines.push(out(`[*] fetching table names for database ${host.sqli.dbName}`), accent(`Table: ${host.sqli.table}`));
      lines.push(out('+----+----------+----------------------------------+'));
      lines.push(out('| id | username | password_hash                    |'));
      lines.push(out('+----+----------+----------------------------------+'));
      host.sqli.rows.forEach((r) => lines.push(out(`| ${String(r.id).padEnd(2)} | ${r.username.padEnd(8)} | ${r.password_hash} |`)));
      lines.push(out('+----+----------+----------------------------------+'));
      lines.push(...flagLines(host.sqli.dumpFlag));
      ctx.gameEvent('sqli_dumped', host.ip);
    } else {
      lines.push(info('Añade --dump para volcar los datos de la tabla encontrada.'));
    }
    return lines;
  }

  /* ════════════════════ HASHCAT / JOHN ════════════════════ */
  function cmdHashcat(tokens, ctx) {
    const modeIdx = tokens.indexOf('-m');
    const mode = modeIdx > -1 ? parseInt(tokens[modeIdx + 1], 10) : null;
    if (mode == null) return [err('uso: hashcat -m MODO hash_o_archivo wordlist.txt')];
    if (!tokens.some((t) => t.includes('rockyou'))) {
      return [out('hashcat (v6.2.6) starting...'), warn('Sin una wordlist real (rockyou.txt) el ataque de diccionario no tiene candidatos que probar.')];
    }
    // busca el hash en cualquier host registrado (globalmente, como haría un atacante que ya lo capturó)
    let found = null;
    for (const ip of Object.keys(global.HOSTS)) {
      const kh = global.HOSTS[ip].knownHashes;
      if (!kh) continue;
      for (const hashStr of Object.keys(kh)) {
        if (tokens.some((t) => t.includes(hashStr)) && kh[hashStr].mode === mode) { found = kh[hashStr]; break; }
      }
      if (found) break;
    }
    const lines = [out('hashcat (v6.2.6) starting in autotune mode...'), out('Dictionary cache built: 14344391 entries')];
    if (!found) {
      // hook de hashcat para el hash NTLMv2 capturado con responder (rogue-dhcp / MITM)
      if (mode === 5600 && global.WIFI_SESSION && global.WIFI_SESSION.responderHash && global.WIFI_SESSION.mitm) {
        const m = global.WIFI_SESSION.mitm.mitm;
        found = { plain: m.creds && m.creds.password, flag: m.hashFlag || 'CQ{m1tm_ntlmv2_cr4ck3d}' };
      }
    }
    if (!found) {
      lines.push(warn('Status...........: Exhausted'), warn('No se encontró ningún candidato — revisa el modo (-m) o que el hash sea correcto.'));
      return lines;
    }
    lines.push(ok(`Hash cracked → ${found.plain}`), ok('Status...........: Cracked'));
    lines.push(...flagLines(found.flag));
    ctx.gameEvent('hash_cracked', found.plain);
    return lines;
  }

  /* ════════════════════ HYDRA ════════════════════ */
  function cmdHydra(tokens, ctx) {
    const userM = extractFlagValue(tokens, '-l');
    const wordlistArg = extractFlagValue(tokens, '-P');
    const targetTok = tokens[tokens.length - 1];
    const host = resolveTarget(targetTok.replace(/^ssh:\/\//, ''));
    if (!userM || !wordlistArg || !host) return [err('uso: hydra -l usuario -P wordlist.txt ssh://objetivo')];
    if (!wordlistArg.includes('rockyou')) return [out('[DATA] max 16 tasks per 1 server'), warn('Wordlist no reconocida — usa rockyou.txt para esta simulación.')];
    const userData = host.users && host.users[userM];
    const ROCKYOU_STUB = global.ROCKYOU_STUB || ['123456', 'password', 'Summer2023!', 'admin', 'qwerty', 'lantern123'];
    const lines = [out(`Hydra v9.4 starting`), out(`[DATA] attacking ssh://${host.ip}:22/`)];
    if (userData && ROCKYOU_STUB.includes(userData.password)) {
      lines.push(ok(`[22][ssh] host: ${host.ip}   login: ${userM}   password: ${userData.password}`));
      lines.push(ok('1 of 1 target successfully completed, 1 valid password found'));
      ctx.gameEvent('hydra_cracked', host.ip);
    } else {
      lines.push(warn('0 of 1 target successfully completed, 0 valid passwords found'));
    }
    return lines;
  }

  /* ════════════════════ NETCAT ════════════════════ */
  function cmdNc(tokens, ctx) {
    if (tokens.includes('-l') || tokens.includes('-lvp') || tokens.some((t) => t.startsWith('-l'))) {
      const port = tokens[tokens.length - 1];
      return [info(`listening on [any] ${port} ...`), info('(esperando una conexión entrante — en un pentest real, ejecutarías esto ANTES de disparar el exploit que llama de vuelta)')];
    }
    const target = tokens[0];
    const host = resolveTarget(target);
    if (!host) return [err(`nc: no se pudo conectar a ${target}: Connection refused`)];
    return [ok(`Connection to ${host.ip} port ${tokens[1] || '?'} [tcp] succeeded!`)];
  }

  /* ════════════════════ IMPACKET: GetNPUsers.py (AS-REP Roasting) ════════════════════ */
  function cmdGetNPUsers(tokens, ctx) {
    const domainTok = tokens.find((t) => t.includes('/'));
    const domain = domainTok ? domainTok.split('/')[0] : null;
    const host = Object.values(global.HOSTS).find((h) => h.domain && h.domain.toLowerCase() === (domain || '').toLowerCase());
    if (!host || !tokens.includes('-request')) return [err('uso: GetNPUsers.py dominio/ -usersfile lista.txt -dc-ip IP -request')];
    if (!host.asrepVulnerable) return [out('Impacket v0.11.0'), warn('[-] Ningún usuario tiene la preautenticación deshabilitada.')];
    const v = host.asrepVulnerable;
    const lines = [
      out('Impacket v0.11.0 - Copyright Fortra'), out(''),
      warn(`[-] User jsmith doesn't have UF_DONT_REQUIRE_PREAUTH set`),
      warn(`[-] User rwilliams doesn't have UF_DONT_REQUIRE_PREAUTH set`),
      ok(`$krb5asrep$23$${v.user}@${host.domain}:8a3f9c2e1b7d4a6f...c91e (hash AS-REP capturado)`),
    ];
    lines.push(...flagLines('CQ{4srep_r04st1ng_w0rks}'));
    ctx.gameEvent('asrep_captured', host.ip);
    return lines;
  }

  /* ════════════════════ KERBRUTE ════════════════════ */
  function cmdKerbrute(tokens, ctx) {
    const domainTok = tokens.find((t) => t.includes('.'));
    const host = Object.values(global.HOSTS).find((h) => h.domain && domainTok && h.domain.toLowerCase() === domainTok.toLowerCase());
    if (!host || !host.domainUsers) return [err('uso: kerbrute userenum -d dominio usuarios.txt --dc IP')];
    const lines = [out('    __             __               __'), out('   / /_____  _____/ /_  _______  __/ /____'), out('')];
    host.domainUsers.forEach((u) => lines.push(ok(`${new Date().toISOString().slice(0, 19)} VALID USERNAME: ${u}@${host.domain}`)));
    lines.push(out(`Done! ${host.domainUsers.length} valid usernames found`));
    lines.push(...flagLines('CQ{k3rbrut3_us3r_3num}'));
    ctx.gameEvent('kerbrute_done', host.ip);
    return lines;
  }

  /* ════════════════════ BLOODHOUND-PYTHON ════════════════════ */
  function cmdBloodhound(tokens, ctx) {
    const user = extractFlagValue(tokens, '-u');
    const pass = extractFlagValue(tokens, '-p');
    const domainTok = extractFlagValue(tokens, '-d');
    const host = Object.values(global.HOSTS).find((h) => h.domain && domainTok && h.domain.toLowerCase() === domainTok.toLowerCase());
    if (!host) return [err('uso: bloodhound-python -u usuario -p contraseña -d dominio -c All -ns IP')];
    const userData = host.users && host.users[user];
    if (!userData || userData.password !== pass) return [err('INFO: Connecting to LDAP server'), err('ERROR: Authentication failed — usuario o contraseña incorrectos')];
    const lines = [
      out('INFO: Found AD domain: ' + host.domain.toLowerCase()),
      out('INFO: Connecting to LDAP server'),
      out(`INFO: Found ${host.domainUsers ? host.domainUsers.length : 0} users`),
      out('INFO: Found 12 computers'),
      ok('INFO: Done in 00M 14S'),
    ];
    if (host.genericAllUser === user) {
      lines.push(warn(`⚠ ${user} tiene GenericAll sobre el grupo "${host.genericAllTarget}"`));
      lines.push(...flagLines(host.bloodhoundFlag));
      ctx.gameEvent('bloodhound_done', host.ip);
    }
    return lines;
  }

  /* ════════════════════ NET (Windows) ════════════════════ */
  function cmdNet(tokens, ctx) {
    const raw = tokens.join(' ');
    const addmemIdx = tokens.findIndex((t) => t.toLowerCase() === 'addmem');
    if (addmemIdx > -1 && tokens[addmemIdx + 2]) {
      const groupName = tokens[addmemIdx + 1];
      const userName = tokens[addmemIdx + 2];
      return [ok(`Successfully added ${userName} to ${groupName}`), info('(el usuario ahora tiene privilegios de Domain Admin en esta sesión narrativa — conéctate por ssh para comprobarlo)')];
    }
    if (raw.toLowerCase().includes('domain admins')) {
      return [ok('Successfully added el usuario a Domain Admins'), info('(conéctate por ssh para comprobarlo)')];
    }
    return [info('uso: net rpc group addmem "Domain Admins" usuario -U dominio/usuario%contraseña -S IP')];
  }

  /* ════════════════════ DOCKER ════════════════════ */
  function cmdDocker(tokens, ctx) {
    const hIdx = tokens.indexOf('-H');
    const remote = hIdx > -1 ? tokens[hIdx + 1] : null;
    if (!remote) return [err('uso: docker -H IP:2375 ps  |  docker -H IP:2375 run -v /:/mnt -it alpine chroot /mnt sh')];
    const ip = remote.split(':')[0];
    const host = global.HOSTS[ip];
    if (!host || !host.dockerContainers) return [err(`Cannot connect to the Docker daemon at tcp://${remote}. Is the docker daemon running?`)];
    ctx.gameEvent('docker_api_used', ip);
    if (tokens.includes('ps')) {
      const lines = [out('CONTAINER ID   IMAGE          STATUS         NAMES')];
      host.dockerContainers.forEach((c) => lines.push(accent(`${c.id}   ${c.image.padEnd(14)} ${c.status.padEnd(14)} ${c.name}`)));
      lines.push(...flagLines('CQ{d0ck3r_2375_n0_4uth}'));
      return lines;
    }
    if (tokens.includes('run') && tokens.some((t) => t.includes('/:/mnt')) && tokens.some((t) => t === 'chroot' || t === 'sh')) {
      const lines = [ok(`Unable to find image 'alpine:latest' locally — pulling...`), ok('# whoami'), ok('root'), ok('# hostname'), ok(host.hostname + '-host-01')];
      ctx.pushSession(ip, 'root');
      lines.push(...flagLines('CQ{c0nt41n3r_3sc4p3_r00t}'));
      ctx.gameEvent('docker_escape', ip);
      return lines;
    }
    if (tokens.includes('exec')) {
      const lines = [ok('# whoami'), ok('root'), ok('# hostname'), ok(host.hostname + '-web-frontend')];
      lines.push(info('(docker exec te da una shell en el contenedor web_frontend, sin salir al host)'));
      if (host.internalNetwork) {
        lines.push(warn(`⚠ Desde aquí se ve la red interna ${host.internalNetwork}: ejecuta ip a para confirmarlo`));
        ctx.gameEvent('docker_exec_used', ip);
      }
      ctx.pushSession(ip, 'root');
      lines.push(...flagLines('CQ{d0ck3r_3x3c_c0nt41n3r}'));
      return lines;
    }
    return [info('Comando docker reconocido pero no simulado en detalle. Prueba "ps", "exec" o el escape con -v /:/mnt.')];
  }

  /* ════════════════════ IP / IFCONFIG (dentro de una sesión) ════════════════════ */
  function cmdIpAddr(tokens, ctx) {
    const host = ctx.hostData();
    const lines = [out(`eth0: ${host.ip}/24`)];
    if (host.internalNetwork) {
      lines.push(accent(`eth1: 172.19.0.1/24  (red interna Docker)`));
      lines.push(warn(`⚠ Hay una segunda interfaz en ${host.internalNetwork} no visible desde fuera`));
      lines.push(...flagLines('CQ{h1dd3n_n3tw0rk_f0und}'));
      ctx.gameEvent('internal_net_found', host.ip);
    }
    return lines;
  }

  /* ════════════════════ MYSQL ════════════════════ */
  function cmdMysql(tokens, ctx) {
    const hIdx = tokens.indexOf('-h');
    const targetIp = hIdx > -1 ? tokens[hIdx + 1] : null;
    const userIdx = tokens.indexOf('-u');
    const user = userIdx > -1 ? tokens[userIdx + 1] : 'root';
    if (!targetIp) return [err('uso: mysql -h IP -u usuario -p')];

    // caso especial: la base de datos interna de Obsidian, solo alcanzable pivotando
    const obsidian = Object.values(global.HOSTS).find((h) => h.internalHost && h.internalHost.ip === targetIp);
    if (obsidian) {
      const inStack = ctx.isHostInStack(obsidian.ip);
      if (!inStack) return [err(`ERROR 2003 (HY000): Can't connect to MySQL server on '${targetIp}' (No route to host)`), info('Esa IP está en una red interna — necesitas pivotar desde el host que la puede alcanzar.')];
      ctx.requestSecret({
        promptLabel: 'Enter password: ', mask: true,
        onSubmit: (attempt) => {
          if (attempt !== obsidian.internalHost.password) return { lines: [err('ERROR 1045 (28000): Access denied')], ok: false };
          const lines = [ok('Welcome to the MySQL monitor.'), ok('mysql> SELECT * FROM secrets;')];
          lines.push(out('+----+----------------------------------+'), out('| id | value                            |'));
          lines.push(accent('| 1  | master_key_2024_prod_do_not_leak |'), out('+----+----------------------------------+'));
          lines.push(...flagLines('CQ{p1v0t_sc4n_succ3ss}'), ...flagLines('CQ{full_ch41n_dock3r_p1v0t_db}'));
          ctx.gameEvent('mysql_pivot_done', obsidian.ip);
          return { lines, ok: true };
        },
      });
      return [info(`Conectando a ${targetIp}...`)];
    }
    return [err(`ERROR 2003 (HY000): Can't connect to MySQL server on '${targetIp}'`)];
  }

  /* ════════════════════ SEARCHSPLOIT / WHOIS (sabor extra) ════════════════════ */
  function cmdSearchsploit(tokens) {
    const q = tokens.join(' ').toLowerCase();
    if (!q) return [err('uso: searchsploit <término>')];
    if (q.includes('apache') && q.includes('2.4.41')) return [out('------------------------------------------- ---------------------------------'), out(' Exploit Title                              |  Path'), out('------------------------------------------- ---------------------------------'), out(' No hay CVEs críticos públicos para esta build específica de Apache 2.4.41')];
    return [info('No se encontraron exploits públicos para ese término en esta simulación.')];
  }
  function cmdWhois(tokens) {
    const d = tokens[0];
    if (!d) return [err('uso: whois dominio')];
    return [out(`Domain Name: ${d.toUpperCase()}`), out('Registrar: (simulado — CiberQuiz Training Range)'), out('Este dominio solo existe dentro de la red de prácticas de CiberQuiz.')];
  }

  /* ════════════════════ GOBUSTER / FFUF (enumeración de rutas) ════════════════════ */
  function enumerateDirs(tokens, ctx, toolName) {
    const urlTok = extractFlagValue(tokens, '-u') || tokens.find((t) => t.startsWith('http'));
    if (!urlTok) return [err(`uso: ${toolName} dir -u http://IP [-w wordlist.txt]`), err(`     ${toolName} -w wordlist.txt -u http://IP/FUZZ`)];
    const host = resolveTarget(urlTok);
    if (!host) return [err(`${toolName}: no se pudo resolver el host: ${urlTok}`)];
    const hidden = host.hiddenDirs || [];
    if (!hidden.length) {
      return [out('==============================================================='), out(`${toolName} v3.6`), warn('[-] No se encontraron rutas ocultas en este host.'), info('Consejo: no todos los hosts esconden rutas; revisa nmap -sV y la respuesta de cada puerto web.')];
    }
    const lines = [out('==============================================================='), out(`${toolName} v3.6`), out(`[+] Url:         ${urlTok}`), out(''), out('2024/01/01 12:00:00 Starting ' + toolName)];
    hidden.forEach((d) => {
      lines.push(accent(`${d.path.padEnd(46)} (Status: ${d.status || 200}) [Size: ${d.size || 0}]`));
      if (d.flag) lines.push(...flagLines(d.flag));
    });
    lines.push(out(''), info(`Prueba a abrir esas rutas con curl para ver su contenido.`));
    return lines;
  }
  function cmdGobuster(tokens, ctx) { return enumerateDirs(tokens, ctx, 'gobuster'); }
  function cmdFfuf(tokens, ctx) { return enumerateDirs(tokens, ctx, 'ffuf'); }

  /* ════════════════════ IMPACKET: GetUserSPNs.py (Kerberoasting) ════════════════════ */
  function cmdGetUserSPNs(tokens, ctx) {
    const domainTok = tokens.find((t) => t.includes('/'));
    const domain = domainTok ? domainTok.split('/')[0] : null;
    const host = Object.values(global.HOSTS).find((h) => h.domain && h.domain.toLowerCase() === (domain || '').toLowerCase());
    if (!host || !tokens.includes('-request')) return [err('uso: GetUserSPNs.py dominio/usuario:contraseña -dc-ip IP -request')];
    if (!host.kerberoast) return [out('Impacket v0.11.0 - Copyright Fortra'), warn('[-] No se encontraron SPNs de usuario con esas credenciales.')];
    const k = host.kerberoast;
    const lines = [
      out('Impacket v0.11.0 - Copyright Fortra'), out(''),
      out('ServicePrincipalName       Name          MemberOf                          PasswordLastSet'),
      out('------------------------    ------------  --------------------------------  -------------------------'),
    ];
    k.users.forEach((u) => lines.push(accent(`${(u.spn || 'HTTP/webserver').padEnd(26)} ${u.user.padEnd(13)} CN=Users,CN=Builtin,DC=${host.domain.split('.')[0]},DC=local  2024-01-01 12:00:00`)));
    const tgsHash = host.knownHashes && Object.keys(host.knownHashes).find((h) => h.includes('$krb5tgs$') && h.includes(k.users[0].user));
    if (tgsHash) lines.push(ok(tgsHash + '  (TGS hash capturado — guárdalo, cópialo tal cual)'));
    else lines.push(ok(`$krb5tgs$23$*${k.users[0].user}*${host.domain}*${k.users[0].spn || 'HTTP/webserver'}*$... (TGS hash capturado — guárdalo)`));
    lines.push(...flagLines('CQ{k3rb3r04st1ng_g0t_t1ck3ts}'));
    ctx.gameEvent('kerberoast_captured', host.ip);
    return lines;
  }

  /* ════════════════════ CRACKMAPEXEC (validación de credenciales) ════════════════════ */
  function cmdCrackmapexec(tokens, ctx) {
    const proto = tokens[0];
    const target = tokens.find((t) => /^\d+\.\d+\.\d+\.\d+$/.test(t)) || null;
    const user = extractFlagValue(tokens, '-u');
    const pass = extractFlagValue(tokens, '-p');
    if (!proto || !target || !user || !pass) return [err('uso: crackmapexec smb|winrm IP -u usuario -p contraseña')];
    const host = resolveTarget(target);
    if (!host) return [warn(`crackmapexec: connection error to ${target}`)];
    const creds = host.users && host.users[user];
    const valid = creds && creds.password === pass;
    if (proto === 'smb') {
      const line = `${host.ip.padEnd(16)} 445  ${host.hostname}`;
      if (valid) {
        const lines = [accent(`SMB         ${line}  [+] ${host.domain || 'WORKGROUP'}\\${user}:${pass} (Pwn3d!)`)];
        if (creds.admin) { lines.push(ok('[+] Signing: False')); lines.push(ok('✔ Credenciales de administrador — puedes usar evil-winrm para una shell. ')); }
        if (creds.cmeFlag) lines.push(...flagLines(creds.cmeFlag));
        return lines;
      }
      return [accent(`SMB         ${line}  [-] ${host.domain || 'WORKGROUP'}\\${user}:${pass} (STATUS_LOGON_FAILURE)`)];
    }
    if (proto === 'winrm') {
      if (valid) {
        return [accent(`WINRM       ${host.ip.padEnd(16)} 5985  ${host.hostname}  [+] ${user}:${pass} (Pwn3d!)`), ok(`✔ Acceso WinRM validado — usa evil-winrm -i ${host.ip} -u ${user} -p ${pass} para obtener una shell.`)];
      }
      return [accent(`WINRM       ${host.ip.padEnd(16)} 5985  ${host.hostname}  [-] ${user}:${pass} (STATUS_LOGON_FAILURE)`)];
    }
    return [err('uso: crackmapexec smb|winrm IP -u usuario -p contraseña')];
  }

  /* ════════════════════ EVIL-WINRM (shell remota Windows) ════════════════════ */
  function cmdEvilWinrm(tokens, ctx) {
    const ip = extractFlagValue(tokens, '-i');
    const user = extractFlagValue(tokens, '-u');
    const pass = extractFlagValue(tokens, '-p');
    if (!ip || !user || !pass) return [err('uso: evil-winrm -i IP -u usuario -p contraseña')];
    const host = resolveTarget(ip);
    if (!host || !host.users) return [warn('evil-winrm: connection error')];
    const creds = host.users[user];
    if (!creds || creds.password !== pass) return [warn('evil-winrm: authentication failed. Comprueba las credenciales (o valídalas antes con crackmapexec).')];
    ctx.pushSession(host.ip, user);
    const lines = [ok(`*Evil-WinRM* PS C:\\Users\\${user}> whoami`), out(`${host.domain ? host.domain + '\\' : ''}${user}`)];
    (creds.evilWinrmLines || []).forEach((l) => lines.push(out(l)));
    if (creds.shellFlag) lines.push(...flagLines(creds.shellFlag));
    return lines;
  }

  /* Herramientas reales reconocidas pero no simuladas en profundidad —
     mejor UX que un frío "command not found" */
  const STUB_TOOLS = ['msfconsole', 'burpsuite', 'wireshark', 'nikto', 'tcpdump', 'john', 'metasploit', 'dirb', 'airmon-ng', 'reaver', 'eaphammer', 'hostapd-wpe'];

  /* Wordlist compartida: hydra, aircrack-ng y el resto de ataques de
     diccionario la consultan como si fuese rockyou.txt */
  const ROCKYOU_STUB = ['123456', 'password', 'Summer2023!', 'admin', 'qwerty', 'lantern123', 'Summer2024!', 'Wif1W0w!', 'CorpN3t2024', 'N0vaD3v2024!', 's3cr3tP4ck3t', 'R0gu3DHCP!', 'C4rD1n4l2024!', 'BackupN3t!'];

  const NETWORK_COMMANDS = {
    nmap: cmdNmap, ping: cmdPing, curl: cmdCurl, wget: cmdWget, ssh: cmdSSH, sudo: cmdSudo,
    sqlmap: cmdSqlmap, hashcat: cmdHashcat, hydra: cmdHydra, nc: cmdNc, netcat: cmdNc,
    'getnpusers.py': cmdGetNPUsers, 'getuserspns.py': cmdGetUserSPNs, kerbrute: cmdKerbrute, 'bloodhound-python': cmdBloodhound,
    gobuster: cmdGobuster, ffuf: cmdFfuf, crackmapexec: cmdCrackmapexec, 'evil-winrm': cmdEvilWinrm,
    net: cmdNet, docker: cmdDocker, mysql: cmdMysql, searchsploit: cmdSearchsploit, whois: cmdWhois,
  };
  function ipCommand(tokens, ctx) {
    if (tokens[0] === 'a' || tokens[0] === 'addr' || tokens.length === 0) return cmdIpAddr(tokens, ctx);
    return [err('uso: ip a')];
  }
  NETWORK_COMMANDS.ip = ipCommand;
  NETWORK_COMMANDS.ifconfig = cmdIpAddr;
  NETWORK_COMMANDS.netstat = (tokens, ctx) => [info('Usa nmap desde fuera para reconocimiento real de puertos de otros hosts.'), out(ctx.hostData().isAttacker ? 'Sin conexiones salientes activas.' : `Active Internet connections en ${ctx.hostData().hostname}`)];
  NETWORK_COMMANDS.ss = NETWORK_COMMANDS.netstat;

  global.NETWORK_COMMANDS = NETWORK_COMMANDS;
  global.STUB_TOOLS = STUB_TOOLS;
  global.ROCKYOU_STUB = ROCKYOU_STUB;
  global.b64encode = b64encode;
  global.b64decode = b64decode;
  global.checkJWTDecodeFlag = checkJWTDecodeFlag;
  global.resolveNetworkTarget = resolveTarget;
})(typeof window !== 'undefined' ? window : globalThis);
