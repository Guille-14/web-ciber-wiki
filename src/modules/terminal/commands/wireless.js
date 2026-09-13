/* ═══════════════════════════════════════════════════════════════
   commands/wireless.js — Ataques wireless/red (WPA2, EAP, VLAN
   hopping, MITM ARP/DHCP). Dirigido por datos: los hosts exponen
   `wifi`, `vlan` o `mitm` y estos comandos leen esa información.
   El estado de capturas/handshakes vive en WIFI_SESSION (memoria).
   ═══════════════════════════════════════════════════════════════ */
(function (global) {
  'use strict';

  function out(l) { return { t: 'out', l }; }
  function err(l) { return { t: 'err', l }; }
  function ok(l) { return { t: 'ok', l }; }
  function info(l) { return { t: 'info', l }; }
  function warn(l) { return { t: 'warn', l }; }
  function accent(l) { return { t: 'accent', l }; }
  function flagLines(flagStr) { return [{ t: 'flag', l: flagStr, _isFlagMarker: true }]; }

  function extractFlagValue(tokens, flag) {
    const i = tokens.indexOf(flag);
    return i > -1 ? tokens[i + 1] : null;
  }

  const WIFI_SESSION = {
    capture: null,        // { bssid, file }
    handshakes: {},       // bssid → true (handshake capturado)
    lastBssid: null,      // último handshake capturado
    reconFlags: {},       // bssid → true (flag de recon ya emitida)
    cracked: {},          // ssid → true (PSK crackeada)
    mitm: null,           // host con MITM activo
    vlan: null,           // host con VLAN hopping conseguido
  };
  global.WIFI_SESSION = WIFI_SESSION;

  function wifiAps() {
    const aps = [];
    Object.values(global.HOSTS).forEach((h) => {
      if (h.wifi && Array.isArray(h.wifi.aps)) {
        h.wifi.aps.forEach((ap) => aps.push({ host: h, ap }));
      }
    });
    return aps;
  }

  // redes que el atacante ya puede ver: las ocultas (requireCracked) no
  // aparecen hasta que se haya crackeado la red que las protege
  function visibleAps() {
    return wifiAps().filter((x) => !x.ap.requireCracked || WIFI_SESSION.cracked[x.ap.requireCracked]);
  }

  function findAp(bssid) {
    return wifiAps().find((x) => x.ap.bssid.toLowerCase() === (bssid || '').toLowerCase());
  }

  /* ════════════════════ IWCONFIG / IWLIST ════════════════════ */
  function cmdIwconfig(tokens, ctx) {
    const aps = visibleAps();
    if (!aps.length) {
      return [
        out('lo        no wireless extensions.'),
        out('wlan0     IEEE 802.11  ESSID:off/any  Mode:Managed  Access Point: Not-Associated'),
        info('No hay redes inalámbricas visibles en esta red simulada (todavía).'),
      ];
    }
    const lines = [];
    aps.forEach(({ host, ap }) => {
      lines.push(accent(`wlan0     IEEE 802.11  ESSID:"${ap.ssid}"  Mode:Managed  Channel:${ap.channel}`));
      lines.push(out(`          Access Point: ${ap.bssid}  Encryption: ${ap.encryption}`));
    });
    lines.push(info('Para ver redes en detalle: airodump-ng wlan0'));
    return lines;
  }
  function cmdIwlist(tokens, ctx) {
    return cmdIwconfig(tokens, ctx);
  }

  /* ════════════════════ AIRODUMP-NG ════════════════════ */
  function cmdAirodump(tokens, ctx) {
    const bssid = extractFlagValue(tokens, '--bssid');
    const channel = extractFlagValue(tokens, '-c');
    const captureFile = extractFlagValue(tokens, '-w');

    if (bssid) {
      const found = findAp(bssid);
      if (!found) return [warn(`airodump-ng: BSSID ${bssid} no está en el rango de esta red simulada.`)];
      if (found.ap.requireCracked && !WIFI_SESSION.cracked[found.ap.requireCracked]) {
        return [warn(`airodump-ng: BSSID ${bssid} no está en el rango de esta red simulada.`), info('(hay una red oculta que solo aparece tras crackear ' + found.ap.requireCracked + ')')];
      }
      WIFI_SESSION.capture = { bssid: bssid.toLowerCase(), file: captureFile || 'captura' };
      return [
        out(`CH ${channel || found.ap.channel} ][ Elapsed: 0 s ][ 2024-01-01 12:00 ][ fixed channel ${channel || found.ap.channel}`),
        out('BSSID              PWR  Beacons    #Data, s/ms  CH  MB   ENC  CIPHER  AUTH  ESSID'),
        accent(`${bssid}   -42  1892       47    0     ${channel || found.ap.channel}  65   WPA2 CCMP   PSK  ${found.ap.ssid}`),
        info(`Capturando en ${found.ap.ssid}… esperando handshake (aireplay-ng -0 N --bssid ${bssid} -c ${found.ap.client || 'FF:FF:FF:FF:FF:FF'} wlan0).`),
      ];
    }

    const aps = visibleAps();
    const lines = [
      out('CH  8 ][ Elapsed: 0 s ][ 2024-01-01 12:00'),
      out('BSSID              CH  MB   ENC   CIPHER AUTH  ESSID'),
    ];
    if (!aps.length) {
      lines.push(warn('(sin access points detectados)'));
      lines.push(info('Consejo: activa la interfaz y vuelve a intentar — o escanea con iwconfig.'));
      return lines;
    }
    aps.forEach(({ host, ap }) => {
      const auth = ap.eap ? 'MGT' : 'PSK';
      lines.push(accent(`${ap.bssid}  ${String(ap.channel).padEnd(3)} 65   ${ap.encryption}  CCMP ${auth}  ${ap.ssid}`));
      lines.push(out(`        BSSID              STATION            PWR  Rate  Lost  Frames  Notes`));
      lines.push(out(`        ${ap.bssid}  ${(ap.client || 'FF:FF:FF:FF:FF:FF').padEnd(17)} -46  0e- 0e      0     111   EAPOL  ${ap.eap ? '(WPA2-Enterprise)' : ''}`));
      if (ap.reconFlag && !WIFI_SESSION.reconFlags[ap.bssid]) {
        WIFI_SESSION.reconFlags[ap.bssid] = true;
        lines.push(...flagLines(ap.reconFlag));
      }
    });
    lines.push(out(''), info(`FOUND ${aps.length} access point(s). Para capturar un handshake: airodump-ng --bssid BSSID -c CH -w captura wlan0`));
    return lines;
  }

  /* ════════════════════ AIREPLAY-NG (deauth) ════════════════════ */
  function cmdAireplay(tokens, ctx) {
    const count = extractFlagValue(tokens, '-0') || extractFlagValue(tokens, '--deauth');
    const bssid = extractFlagValue(tokens, '--bssid');
    const client = extractFlagValue(tokens, '-c');
    if (!bssid) return [err('uso: aireplay-ng -0 <veces> --bssid BSSID [-c CLIENTE] wlan0')];
    const found = findAp(bssid);
    if (!found) return [warn(`aireplay-ng: BSSID ${bssid} no está en el rango de esta red simulada.`)];
    const n = parseInt(count, 10) || 10;

    const lines = [out('12:00:00  Sending DeAuth to broadcast -- BSSID: [' + bssid + ']')];
    for (let i = 1; i <= Math.min(n, 3); i++) lines.push(out(`12:00:0${i}  Sending DeAuth to station -- STATION: [${client || 'FF:FF:FF:FF:FF:FF'}]`));

    if (WIFI_SESSION.capture && WIFI_SESSION.capture.bssid === bssid.toLowerCase()) {
      WIFI_SESSION.handshakes[bssid.toLowerCase()] = true;
      WIFI_SESSION.lastBssid = bssid.toLowerCase();
      lines.push(ok(`✔ Handshake WPA ${bssid} capturado en ${WIFI_SESSION.capture.file}.cap`));
      if (found.ap.handshakeFlag) lines.push(...flagLines(found.ap.handshakeFlag));
    } else {
      lines.push(warn('⚠ No hay airodump escuchando en este BSSID: el handshake no se guarda. Ejecuta primero: airodump-ng --bssid ' + bssid + ' -w captura wlan0'));
    }
    return lines;
  }

  /* ════════════════════ AIRCRACK-NG ════════════════════ */
  function cmdAircrack(tokens, ctx) {
    const wl = extractFlagValue(tokens, '-w');
    if (!wl || !wl.toLowerCase().includes('rockyou')) return [err('uso: aircrack-ng -w rockyou.txt captura.cap')];
    if (!WIFI_SESSION.lastBssid || !WIFI_SESSION.handshakes[WIFI_SESSION.lastBssid]) {
      return [warn('aircrack-ng: no hay ningún handshake capturado todavía. (airodump-ng --bssid … -w captura wlan0  →  aireplay-ng -0 N --bssid … wlan0)')];
    }
    const found = findAp(WIFI_SESSION.lastBssid);
    const psk = found && found.ap.psk;
    const stub = global.ROCKYOU_STUB || [];
    const lines = [
      out('Opening captura.cap'),
      out('Read 2 packets.'),
      out('   #  PSK/Passphrase  ``  Speed'),
      out(`   1  "${psk || '?'}"               30000 W/s`),
    ];
    if (psk && stub.includes(psk)) {
      lines.push(ok(`✔ KEY FOUND! [ ${psk} ]`));
      lines.push(info(`Con la PSK y el BSSID ya puedes conectarte a la red ${found.ap.ssid}.`));
      WIFI_SESSION.cracked[found.ap.ssid] = true;
      if (found.ap.crackFlag) lines.push(...flagLines(found.ap.crackFlag));
    } else {
      lines.push(warn('Passphrase not in dictionary. Prueba otra wordlist o captura un handshake de otra red.'));
    }
    return lines;
  }

  /* ════════════════════ ARPSPOOF / ETTERCAP (MITM) ════════════════════ */
  function cmdArpspoof(tokens, ctx) {
    const host = Object.values(global.HOSTS).find((h) => h.mitm);
    if (!host) return [warn('arpspoof: no se encontró una subred con tráfico ARP relevante en esta simulación.')];
    if (WIFI_SESSION.mitm) return [info('arpspoof: el MITM ya está activo contra ' + WIFI_SESSION.mitm.mitm.victim + '.')];
    WIFI_SESSION.mitm = host;
    const m = host.mitm;
    const lines = [
      out(`12:00:01 arpspoof: 00:11:22:33:44:55 1.1.1.1 2.2.2.2`),
      out(`12:00:01 arpspoof: sent 42 arp reply (Sending GRATUITOUS_ARP reply on eth0) 1.1.1.1 2.2.2.2`),
      ok(`✔ Interceptando tráfico entre ${m.victim} y ${m.gateway}. Todo pasa ahora por nosotros.`),
    ];
    if (m.mitmFlag) lines.push(...flagLines(m.mitmFlag));
    return lines;
  }
  function cmdEttercap(tokens, ctx) {
    const g = tokens.find((t) => t.startsWith('/') && t.endsWith('/'));
    return cmdArpspoof(tokens, ctx);
  }

  /* ════════════════════ RESPONDER (NTLMv2) ════════════════════ */
  function cmdResponder(tokens, ctx) {
    if (!WIFI_SESSION.mitm) return [warn('responder: no hay una posición MITM activa. Usa primero arpspoof -i eth0 -t VICTIM GATEWAY.')];
    const host = WIFI_SESSION.mitm;
    const m = host.mitm;
    if (WIFI_SESSION.responderHash) return [info('responder: hash NTLMv2 ya capturado. Pruébalo con: hashcat -m 5600 hash.txt rockyou.txt')];
    WIFI_SESSION.responderHash = true;
    const lines = [
      out(`[+] Listening for events...`),
      warn(`[+] ${m.victim}    NTLMv2-SSP Hash     : ${m.hash || '$NETNTLMv2$...#EXAMPLE#'}`),
      ok('✔ Hash NTLMv2 capturado. Guárdalo y cráquelo con hashcat -m 5600.'),
    ];
    if (m.responderFlag) lines.push(...flagLines(m.responderFlag));
    return lines;
  }

  /* ════════════════════ ASLEAP (WPA2-Enterprise / MSCHAPv2) ════════════════════ */
  function cmdAsleap(tokens, ctx) {
    const c = extractFlagValue(tokens, '-C');
    const r = extractFlagValue(tokens, '-R');
    if (!c || !r) return [err('uso: asleap -C <challenge> -R <response>')];
    const eap = wifiAps().find((x) => x.ap.eap);
    if (!eap) return [warn('asleap: no se capturó ningún handshake de red WPA2-Enterprise (EAP/MGT).')];
    const eapBssid = eap.ap.bssid.toLowerCase();
    if (!WIFI_SESSION.handshakes[eapBssid]) {
      return [warn('asleap: necesitas capturar el handshake de la red EAP concreta primero (airodump-ng --bssid … -w cap wlan0  →  aireplay-ng -0 N --bssid … wlan0).')];
    }
    const ap = eap.ap;
    const lines = [
      out('asleap 2.2 - actively recover LEAP/PPTP/WPA2-PSK passwords'),
      out(`username: ${ap.mschapUser || 'client'}`),
      ok(`✔ NTLM response matched! Password: ${ap.mschapPass || ap.psk}`),
      info('Con esas credenciales ya puedes entrar a la red corporativa (EAP-TLS/MSCHAPv2).'),
    ];
    if (ap.eapFlag) lines.push(...flagLines(ap.eapFlag));
    return lines;
  }

  /* ════════════════════ VLANHOP (double tagging) ════════════════════ */
  function cmdVlanhop(tokens, ctx) {
    const host = Object.values(global.HOSTS).find((h) => h.vlan);
    if (!host) return [warn('vlanhop: no se detectó ninguna red con trunking vulnerable en esta simulación.')];
    const v = host.vlan;
    if (WIFI_SESSION.vlan === host.ip) return [info('VLAN hopping ya completado — puedes escanear/atacar los hosts de la red interna.')];
    WIFI_SESSION.vlan = host.ip;
    const lines = [
      out(`[+] Interfaz eth0.${v.guestVlan || 10}: enlace up, en la VLAN de invitados (${v.guest || '192.168.10.0/24'})`),
      warn(`[+] Enviando tramas 802.1Q con doble etiqueta → el trunk acepta la VLAN ${v.internalVlan || 20}`),
      ok(`✔ Acceso a la red ${v.internal || '192.168.20.0/24'} (VLAN ${v.internalVlan || 20}) conseguido.`),
      out('Hosts descubiertos en la red interna:'),
    ];
    (v.internalHosts || []).forEach((ih) => lines.push(accent(`  ${ih.ip.padEnd(16)} ${ih.hostname}  (${ih.port || '?'}/tcp)`)));
    if (v.flag1) lines.push(...flagLines(v.flag1));
    if (v.flag2) lines.push(...flagLines(v.flag2));
    return lines;
  }

  const WIRELESS_COMMANDS = {
    iwconfig: cmdIwconfig, iwlist: cmdIwlist,
    'airodump-ng': cmdAirodump, 'aireplay-ng': cmdAireplay, 'aircrack-ng': cmdAircrack,
    arpspoof: cmdArpspoof, ettercap: cmdEttercap,
    responder: cmdResponder, asleap: cmdAsleap, vlanhop: cmdVlanhop,
  };
  Object.assign(global.NETWORK_COMMANDS, WIRELESS_COMMANDS);
})(typeof window !== 'undefined' ? window : globalThis);
