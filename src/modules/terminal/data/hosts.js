/* ═══════════════════════════════════════════════════════════════
   hosts.js — La red simulada completa.
   Cada host tiene: IP, puertos/servicios reales, contenido web
   (si aplica), usuarios con contraseñas reales, sudoers, y un
   filesystem VFS completo navegable una vez dentro.
   Requiere que vfs.js esté cargado antes que este archivo.
   ═══════════════════════════════════════════════════════════════ */
(function (global) {
  'use strict';
  const { dirNode: D, fileNode: F } = global.VFS;

  /* ───────────────────────────────────────────────
     RESOLUCIÓN DNS — nombre de host → IP
     ─────────────────────────────────────────────── */
  const DNS = {
    'lantern.htb': '10.10.14.22',
    'ironframe.local': '10.10.15.40',
    'api.fracture.htb': '10.10.17.30',
    'fracture.htb': '10.10.17.30',
    'obsidian.htb': '10.10.16.88',
    // ☁️ Cloud
    'meltwater.htb': '10.10.18.11',
    'podshift.htb': '10.10.18.12',
    'statefile.htb': '10.10.18.13',
    'greenhouse.htb': '10.10.18.14',
    // 💣 Pwn
    'underflow.htb': '10.10.19.11',
    'canary-row.htb': '10.10.19.12',
    'formatstr.htb': '10.10.19.13',
    'retlibc.htb': '10.10.19.14',
    // 📡 Wireless
    'airgap.htb': '10.10.20.11',
    'meshpoint.htb': '10.10.20.12',
    'vlanhop.htb': '10.10.20.13',
    'rogue-dhcp.htb': '10.10.20.14',
    // host interno (solo alcanzable tras el VLAN hopping)
    fileserver: '192.168.20.10',
    '192.168.20.10': '192.168.20.10',
    localhost: 'localhost',
    '127.0.0.1': 'localhost',
  };

  /* ───────────────────────────────────────────────
     HOST 0 — MÁQUINA DEL ATACANTE (localhost)
     Aquí vive el jugador desde el principio. Tiene
     las herramientas "instaladas" y sus wordlists.
     ─────────────────────────────────────────────── */
  const localhostFS = D({
    home: D({
      guillermo: D(
        {
          'recon': D({}, { owner: 'guillermo' }),
          wordlists: D(
            {
              'rockyou.txt': F(
                '# rockyou.txt (versión resumida para esta simulación)\n' +
                  '123456\npassword\nSummer2023!\nadmin\nqwerty\nlantern123\n' +
                  'Summer2024!\nWif1W0w!\nCorpN3t2024\nN0vaD3v2024!\ns3cr3tP4ck3t\n' +
                  'R0gu3DHCP!\nC4rD1n4l2024!\nBackupN3t!\n' +
                  '# La lista completa real tiene 14.344.392 contraseñas.\n' +
                  '# hashcat, hydra y aircrack-ng SÍ consultan esta lista en la simulación.',
                { owner: 'guillermo' }
              ),
              'users.txt': F('jsmith\nrwilliams\nsvc_backup\nadmin\nadministrator', {
                owner: 'guillermo',
              }),
            },
            { owner: 'guillermo' }
          ),
          tools: D(
            {
              'notas.md': F(
                '# Notas de reconocimiento\n\n' +
                  'Objetivos activos en el rango 10.10.x.x:\n' +
                  '- 10.10.14.22  (lantern.htb)      — Clásica\n' +
                  '- 10.10.15.40  (ironframe.local)  — Clásica\n' +
                  '- 10.10.17.30  (api.fracture.htb) — Clásica\n' +
                  '- 10.10.16.88  (obsidian.htb)     — Clásica\n' +
                  '- 10.10.18.11  (meltwater.htb)    — Cloud\n' +
                  '- 10.10.18.12  (podshift.htb)     — Cloud\n' +
                  '- 10.10.18.13  (statefile.htb)    — Cloud\n' +
                  '- 10.10.18.14  (greenhouse.htb)   — Cloud\n' +
                  '- 10.10.19.11  (underflow.htb)    — Pwn\n' +
                  '- 10.10.19.12  (canary-row.htb)   — Pwn\n' +
                  '- 10.10.19.13  (formatstr.htb)    — Pwn\n' +
                  '- 10.10.19.14  (retlibc.htb)      — Pwn\n' +
                  '- 10.10.20.11  (airgap.htb)       — Wireless\n' +
                  '- 10.10.20.12  (meshpoint.htb)    — Wireless\n' +
                  '- 10.10.20.13  (vlanhop.htb)      — Wireless\n' +
                  '- 10.10.20.14  (rogue-dhcp.htb)   — Wireless\n\n' +
                  'Escribe "hosts" en la terminal para ver el estado de reconocimiento.',
                { owner: 'guillermo' }
              ),
            },
            { owner: 'guillermo' }
          ),
          '.bash_history': F('', { owner: 'guillermo' }),
        },
        { owner: 'guillermo' }
      ),
    }),
    etc: D({
      hosts: F(
        '127.0.0.1\tlocalhost\n' +
          '10.10.14.22\tlantern.htb\n' +
          '10.10.15.40\tironframe.local\n' +
          '10.10.17.30\tapi.fracture.htb fracture.htb\n' +
          '10.10.16.88\tobsidian.htb\n' +
          '10.10.18.11\tmeltwater.htb\n' +
          '10.10.18.12\tpodshift.htb\n' +
          '10.10.18.13\tstatefile.htb\n' +
          '10.10.18.14\tgreenhouse.htb\n' +
          '10.10.19.11\tunderflow.htb\n' +
          '10.10.19.12\tcanary-row.htb\n' +
          '10.10.19.13\tformatstr.htb\n' +
          '10.10.19.14\tretlibc.htb\n' +
          '10.10.20.11\tairgap.htb\n' +
          '10.10.20.12\tmeshpoint.htb\n' +
          '10.10.20.13\tvlanhop.htb\n' +
          '10.10.20.14\trogue-dhcp.htb'
      ),
      passwd: F(
        'root:x:0:0:root:/root:/bin/bash\n' + 'guillermo:x:1000:1000::/home/guillermo:/bin/bash'
      ),
    }),
    usr: D({
      bin: D(
        Object.fromEntries(
          [
            'nmap', 'sqlmap', 'hashcat', 'hydra', 'curl', 'wget', 'ssh', 'docker',
            'mysql', 'kerbrute', 'nc', 'john', 'searchsploit',
            'aws', 'kubectl', 'terraform', 'gobuster', 'ffuf',
            'strings', 'checksec', 'objdump', 'readelf',
            'iwconfig', 'airodump-ng', 'aireplay-ng', 'aircrack-ng', 'arpspoof',
            'ettercap', 'responder', 'asleap', 'vlanhop',
            'GetNPUsers.py', 'GetUserSPNs.py', 'bloodhound-python', 'crackmapexec', 'evil-winrm',
          ].map((t) => [t, F('(binario simulado)', { perms: 'rwxr-xr-x' })])
        )
      ),
    }),
    var: D({ log: D({ 'auth.log': F('(log vacío — sin intentos de acceso registrados)') }) }),
    root: D({ 'root.txt': F('Esta no es tu máquina objetivo — este root.txt está vacío a propósito.') }, { owner: 'root', perms: 'rwx------' }),
    tmp: D({}),
  });

  /* ───────────────────────────────────────────────
     HOST 1 — LANTERN (Linux fácil · Web + SQLi)
     ─────────────────────────────────────────────── */
  const lanternFS = D({
    home: D({
      admin: D(
        {
          Desktop: D({}, { owner: 'admin' }),
          'notas.txt': F(
            'Recordatorio para mí mismo: preguntar a IT por qué "find" sigue ' +
              'teniendo permisos sudo sin contraseña. Lo comenté hace 3 meses...',
            { owner: 'admin' }
          ),
          'user.txt': F('CQ{ssh_4cc3ss_gr4nt3d}', { owner: 'admin' }),
          '.bash_history': F('sudo -l\nls -la\nwhoami\nexit', { owner: 'admin' }),
        },
        { owner: 'admin' }
      ),
    }),
    var: D({
      www: D({
        html: D({
          'index.html': F(
            '<!DOCTYPE html>\n<html><head><title>Lantern Corp — Blog Interno</title></head>\n' +
              '<body>\n  <h1>Bienvenido al portal interno</h1>\n' +
              '  <!-- TODO: mover el panel de admin fuera de /admin_panel antes de producción. FLAG: CQ{c0mm3nts_l34k_p4th5} -->\n' +
              '  <form action="/admin_panel/login.php" method="POST">...</form>\n</body></html>'
          ),
          admin_panel: D({
            'login.php': F(
              '<?php\n// Login vulnerable a SQLi — NO usar en producción\n' +
                '$q = "SELECT * FROM users WHERE user=\'$user\' AND pw=\'$pw\'";\n?>'
            ),
          }),
        }),
      }),
    }),
    etc: D({
      passwd: F(
        'root:x:0:0:root:/root:/bin/bash\n' +
          'admin:x:1000:1000::/home/admin:/bin/bash\n' +
          'www-data:x:33:33::/var/www:/usr/sbin/nologin\n' +
          'mysql:x:110:110::/nonexistent:/bin/false'
      ),
    }),
    root: D(
      {
        'root.txt': F('CQ{gtf0b1ns_f1nd_r00t}', { owner: 'root' }),
        'backup.sh': F('#!/bin/bash\n# script de backup nocturno\nrsync -a /var/www /mnt/backup/', {
          owner: 'root',
        }),
      },
      { owner: 'root', perms: 'rwx------' }
    ),
  });

  /* ───────────────────────────────────────────────
     HOST 2 — IRONFRAME (Windows AD medio)
     Se representa con rutas unificadas (barra normal)
     por simplicidad del motor, pero el contenido y
     los mensajes respetan el sabor "Windows/AD".
     ─────────────────────────────────────────────── */
  const ironframeFS = D({
    Users: D({
      svc_backup: D(
        {
          'Desktop': D({}, { owner: 'svc_backup' }),
          'flag.txt': F('CQ{d0m41n_4dm1n_pwn3d}', { owner: 'svc_backup' }),
          'krbtgt_notes.txt': F(
            'Rotar la contraseña de krbtgt cada 180 días — pendiente desde hace 400.\n' +
              'Recordar revisar el grupo Domain Admins tras el último cambio de ACL.',
            { owner: 'svc_backup' }
          ),
        },
        { owner: 'svc_backup' }
      ),
    }),
    Windows: D({ System32: D({ 'notes.txt': F('(directorio de sistema — nada relevante aquí)') }) }),
  });

  /* ───────────────────────────────────────────────
     HOST 3 — FRACTURE (API REST, sin shell)
     No tiene filesystem navegable — todo pasa por curl.
     ─────────────────────────────────────────────── */

  /* ───────────────────────────────────────────────
     HOST 4 — OBSIDIAN (Linux difícil · Docker + pivoting)
     ─────────────────────────────────────────────── */
  const obsidianFS = D({
    root: D(
      {
        'flag.txt': F('CQ{full_ch41n_dock3r_p1v0t_db}', { owner: 'root' }),
        'docker-compose.yml': F(
          'services:\n  web:\n    image: web-app:latest\n    ports:\n' +
            '      - "2375:2375"  # PELIGRO: daemon Docker expuesto sin TLS\n' +
            '      - "80:80"'
        ),
        'pivot_notes.txt': F(
          'La red 172.19.0.0/24 no debería ser alcanzable desde fuera.\n' +
            'Pendiente: revisar reglas de firewall entre eth0 y eth1.'
        ),
      },
      { owner: 'root', perms: 'rwx------' }
    ),
    etc: D({ passwd: F('root:x:0:0:root:/root:/bin/bash') }),
  });

  const obsidianInternalFS = D({
    var: D({
      lib: D({
        mysql: D({
          'secrets.sql': F(
            "-- tabla 'secrets' de la base de datos interna\n" +
              "INSERT INTO secrets VALUES (1, 'master_key_2024_prod_do_not_leak');"
          ),
        }),
      }),
    }),
  });

  /* ───────────────────────────────────────────────
     FILESYSTEMS MÁQUINAS PWN — binarios SUID en
     /home/svc con las notas del atacante.
     ─────────────────────────────────────────────── */
  function pwnHomeFS(binaryContent, notes) {
    return D({
      home: D({
        svc: D(
          {
            [binaryContent.name]: F(binaryContent.content, {
              owner: 'root',
              perms: 'rwsr-xr-x',
            }),
            'notas.txt': F(notes, { owner: 'svc' }),
            '.bash_history': F('ls -la\nfile ' + binaryContent.name + '\nstrings ' + binaryContent.name + '\nchecksec ' + binaryContent.name + '\nexit', { owner: 'svc' }),
          },
          { owner: 'svc' }
        ),
      }),
      etc: D({ passwd: F('root:x:0:0:root:/root:/bin/bash\nsvc:x:1000:1000::/home/svc:/bin/bash') }),
      root: D(
        {
          'root.txt': F('(raíz de la máquina pwn — resuelta al completar el exploit)', {
            owner: 'root',
          }),
        },
        { owner: 'root', perms: 'rwx------' }
      ),
    });
  }

  const underflowFS = pwnHomeFS(
    {
      name: 'authd',
      content: 'authd v1.0 (SUID root)\nPassword: \nAccess granted\nAccess denied\nDEBUG_MODE=1\n/bin/sh\nGCC: (Ubuntu) 9.4.0\n',
    },
    'El binario authd es SUID root y compila SIN canario ni PIE.\n' +
      'Recon primero: strings authd, checksec authd, objdump -t authd.\n' +
      'Un payload demasiado largo desborda la pila — y la dirección que se filtra es la que necesitas para sobrescribir el retorno.'
  );

  const canaryRowFS = pwnHomeFS(
    {
      name: 'canary_check',
      content: 'canary_check v1.1\nIntroduce la contraseña: \n*** stack smashing detected ***\nGuardar canario por proceso\n/bin/sh\n',
    },
    'canary_check tiene stack canary habilitado (mitigación) y NX activo.\n' +
      'Pista: un overflow largo termina en stack smashing… pero primero el programa filtra el canario.\n' +
      'Cuando lo tengas, insértalo AL INICIO del payload en la siguiente ejecución.'
  );

  const formatstrFS = pwnHomeFS(
    {
      name: 'fmt',
      content: 'fmt v2.0\n%s\n%p\nModo mantenimiento\n/bin/sh\n',
    },
    'fmt es un binario SUID con una vulnerabilidad de cadena de formato.\n' +
      'Cualquier argumento se imprime directamente con printf.\n' +
      'Explota el stack con %p para filtrar, %s para leer cadenas… y el secreto que encuentres es la clave del modo mantenimiento.'
  );

  const retlibcFS = pwnHomeFS(
    {
      name: 'retlib',
      content: 'retlib v3.2\n/lib/x86_64-linux-gnu/libc.so.6\nsystem\n/bin/sh\ngets\nputs\n',
    },
    'retlib tiene NX activo pero SIN canario ni PIE.\n' +
      'No puedes ejecutar tu shellcode en la pila: necesitas ret2libc (ROP).\n' +
      'Filtra la dirección de libc con un overflow largo y úsala para construir la cadena pop rdi; ret → /bin/sh → system.'
  );

  /* ───────────────────────────────────────────────
     FILESYSTEMS MÁQUINAS WIRELESS (post-acceso)
     ─────────────────────────────────────────────── */
  const meshpointFS = D({
    home: D({
      jmartinez: D(
        {
          'flag.txt': F('CQ{mshpt_r00t}', { owner: 'jmartinez' }),
          'radius_notes.txt': F(
            'Usuarios RADIUS y LDAP comparten contraseña con el acceso SSH.\n' +
              'Rotar las credenciales por defecto en la próxima revisión.',
            { owner: 'jmartinez' }
          ),
        },
        { owner: 'jmartinez' }
      ),
    }),
    etc: D({ passwd: F('root:x:0:0:root:/root:/bin/bash\njmartinez:x:1000:1000::/home/jmartinez:/bin/bash') }),
  });

  const rogueFS = D({
    home: D({
      dhcp_admin: D(
        {
          'flag.txt': F('CQ{r0gu3_r00t}', { owner: 'dhcp_admin' }),
          'dhcp_notes.txt': F(
            'La respuesta del servidor DHCP interno se retransmite sin firmar.\n' +
              'Si alguien se interpone en el tráfico, capturaría el hash NTLMv2 de cualquier sesión.',
            { owner: 'dhcp_admin' }
          ),
        },
        { owner: 'dhcp_admin' }
      ),
    }),
    etc: D({ passwd: F('root:x:0:0:root:/root:/bin/bash\ndhcp_admin:x:1000:1000::/home/dhcp_admin:/bin/bash') }),
  });

  const vlanFileserverFS = D({
    home: D({
      backup: D(
        {
          'backup_notes.txt': F(
            'Rutina nocturna de backup vía rsync. El equipo sigue dándonos ' +
              '"find" por sudo sin contraseña para listar los logs.',
            { owner: 'backup' }
          ),
          '.bash_history': F('sudo -l\nls -la\nfind / -name "*.log" 2>/dev/null\nexit', { owner: 'backup' }),
        },
        { owner: 'backup' }
      ),
    }),
    etc: D({ passwd: F('root:x:0:0:root:/root:/bin/bash\nbackup:x:1000:1000::/home/backup:/bin/bash') }),
    root: D(
      {
        'root.txt': F('CQ{vl4nh0p_r00t}', { owner: 'root' }),
      },
      { owner: 'root', perms: 'rwx------' }
    ),
  });

  /* ───────────────────────────────────────────────
     REGISTRO DE HOSTS
     ─────────────────────────────────────────────── */
  const HOSTS = {
    localhost: {
      ip: 'localhost',
      hostname: 'kali-attacker',
      os: 'Linux',
      osDetail: 'Kali Linux 2026.1 (rolling)',
      isAttacker: true,
      ports: [],
      users: {
        guillermo: { password: null, home: ['home', 'guillermo'] },
        root: { password: null, home: ['root'] },
      },
      sudoers: { guillermo: { nopasswd: ['ALL'] } },
      filesystem: localhostFS,
    },

    '10.10.14.22': {
      ip: '10.10.14.22',
      hostname: 'lantern',
      dnsName: 'lantern.htb',
      os: 'Linux',
      osDetail: 'Ubuntu 20.04.3 LTS',
      diff: 'easy',
      diffLabel: 'FÁCIL',
      category: 'clasica',
      tags: ['Web', 'SQLi', 'Linux', 'GTFOBins'],
      desc: 'Un blog corporativo con un panel de login vulnerable a inyección SQL. Tu primera caja: reconocimiento clásico + escalada por sudoers mal configurados.',
      ports: [
        { port: 22, service: 'ssh', version: 'OpenSSH 8.2p1 Ubuntu 4ubuntu0.5' },
        { port: 80, service: 'http', version: 'Apache httpd 2.4.41 ((Ubuntu))' },
        { port: 3306, service: 'mysql', version: 'MySQL 8.0.28-0ubuntu0.20.04.3' },
      ],
      web: {
        '/': {
          status: 200,
          body:
            '<!DOCTYPE html>\n<html><head><title>Lantern Corp — Blog Interno</title></head>\n' +
            '<body>\n  <h1>Bienvenido al portal interno</h1>\n' +
            '  <!-- TODO: mover el panel de admin fuera de /admin_panel antes de producción. FLAG: CQ{c0mm3nts_l34k_p4th5} -->\n' +
            '  <form action="/admin_panel/login.php" method="POST">...</form>\n</body></html>',
        },
        '/admin_panel/login.php': {
          status: 200,
          body: '<form method="POST"><input name="user"><input name="pw" type="password"></form>',
        },
        '/backup.zip': {
          status: 200,
          body:
            'PK\x03\x04\x14\x00\x00\x00 ... (backup del blog — en la vida real nunca subas copias de seguridad al docroot)\n' +
            '  /home/www/backup_2024-01-15/\n  ├── db.php            (conexión MySQL: root@localhost)\n  └── uploads/\n' +
            'FLAG: CQ{b4ckup_l34k_w3b_z1p}',
          flag: 'CQ{b4ckup_l34k_w3b_z1p}',
        },
      },
      hiddenDirs: [
        { path: '/backup.zip', status: 200, size: 1843, flag: 'CQ{b4ckup_l34k_w3b_z1p}' },
        { path: '/server-status', status: 403 },
      ],
      sqli: {
        path: '/admin_panel/login.php',
        dbName: 'lantern_db',
        table: 'users',
        dumpFlag: 'CQ{sql1_g0ts_th3_h4sh3s}',
        rows: [{ id: 1, username: 'admin', password_hash: '5f4dcc3b5aa765d61d8327deb882cf99' }],
      },
      knownHashes: {
        '5f4dcc3b5aa765d61d8327deb882cf99': { mode: 0, modeName: 'MD5', plain: 'password', flag: 'CQ{p4ssw0rd_1s_n3v3r_54f3}' },
      },
      users: {
        admin: { password: 'password', home: ['home', 'admin'] },
      },
      sudoers: { admin: { nopasswd: ['/usr/bin/find'] } },
      filesystem: lanternFS,
    },

    '10.10.15.40': {
      ip: '10.10.15.40',
      hostname: 'ironframe',
      dnsName: 'ironframe.local',
      os: 'Windows',
      osDetail: 'Windows Server 2022 (Domain Controller)',
      diff: 'medium',
      diffLabel: 'MEDIO',
      category: 'clasica',
      tags: ['Active Directory', 'Kerberos', 'BloodHound', 'AS-REP Roasting'],
      desc: 'Controlador de dominio de ironframe.local. Enumera usuarios sin credenciales, abusa de Kerberos y encadena una ACL mal configurada hasta Domain Admin.',
      domain: 'IRONFRAME.LOCAL',
      ports: [
        { port: 22, service: 'ssh', version: 'OpenSSH for Windows 8.1' },
        { port: 53, service: 'domain', version: 'Simple DNS Plus' },
        { port: 88, service: 'kerberos-sec', version: 'Microsoft Windows Kerberos' },
        { port: 389, service: 'ldap', version: 'Microsoft Windows AD LDAP' },
        { port: 445, service: 'microsoft-ds', version: 'Windows Server 2022' },
        { port: 3268, service: 'globalcatLDAP', version: 'Microsoft Windows AD Global Catalog' },
      ],
      domainUsers: ['jsmith', 'rwilliams', 'svc_backup', 'svc_http', 'svc_db'],
      asrepVulnerable: { user: 'svc_backup', hashLabel: '$krb5asrep$23$svc_backup@IRONFRAME.LOCAL' },
      kerberoast: {
        users: [
          { user: 'svc_http', spn: 'HTTP/web.ironframe.local' },
          { user: 'svc_db', spn: 'MSSQLSvc/db.ironframe.local:1433' },
        ],
      },
      knownHashes: {
        '$krb5asrep$23$svc_backup@IRONFRAME.LOCAL': {
          mode: 18200,
          modeName: 'Kerberos 5 AS-REP',
          plain: 'Summer2023!',
          flag: 'CQ{summ3r2023_w34k_svc}',
        },
        '$krb5tgs$23$*svc_http*IRONFRAME.LOCAL*HTTP/web.ironframe.local*$f9e8d7c6b5a49382$0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef': {
          mode: 13100,
          modeName: 'Kerberos 5 TGS-REP etype 23',
          plain: 'Summer2024!',
          flag: 'CQ{k3rb3r04st_tgs_cr4ck3d}',
        },
      },
      bloodhoundFlag: 'CQ{bl00dh0und_g3n3r1c4ll}',
      genericAllUser: 'svc_backup',
      genericAllTarget: 'Domain Admins',
      users: {
        svc_backup: { password: 'Summer2023!', home: ['Users', 'svc_backup'], domainAdminAfterAbuse: true },
        svc_http: { password: 'Summer2024!', home: ['Users', 'svc_http'], shellFlag: 'CQ{w1nr_m_sh3ll}' },
      },
      sudoers: {},
      filesystem: ironframeFS,
    },

    '10.10.17.30': {
      ip: '10.10.17.30',
      hostname: 'fracture-api',
      dnsName: 'api.fracture.htb',
      os: 'Linux (contenedor)',
      osDetail: 'API REST — sin acceso a shell',
      diff: 'medium',
      diffLabel: 'MEDIO',
      category: 'clasica',
      tags: ['API REST', 'JWT', 'IDOR', 'Web'],
      desc: 'Una API REST de una fintech ficticia. Rompe el JWT, encadena un IDOR y llega hasta datos de administrador — todo por HTTP, sin shell.',
      noShell: true,
      ports: [
        { port: 443, service: 'https', version: 'nginx 1.24.0 (API Gateway)' },
      ],
      api: {
        users: {}, // se rellena en runtime al registrarse
        nextId: 4822,
        adminRecord: {
          id: 1,
          user: 'root_admin',
          email: 'admin@fracture.htb',
          api_key: 'sk_live_9f2a1c88b3e04df7c81b',
        },
      },
      jwtFlags: {
        issued: 'CQ{jwt_1ssu3d_succ3ssfully}',
        decoded: 'CQ{b4s3_64_1s_n0t_3ncrypt10n}',
        algNone: 'CQ{4lg_n0n3_1s_4lw4ys_d4ng3r0us}',
        idor: 'CQ{1d0r_ch41n3d_w1th_jwt}',
        final: 'CQ{full_4p1_c0mpr0m1s3}',
      },
      hiddenDirs: [
        { path: '/admin/export', status: 401, flag: 'CQ{ffuf_f0und_4dm1n_exp0rt}' },
        { path: '/health', status: 200 },
      ],
      users: {},
      sudoers: {},
      filesystem: null,
    },

    '10.10.16.88': {
      ip: '10.10.16.88',
      hostname: 'obsidian',
      dnsName: 'obsidian.htb',
      os: 'Linux',
      osDetail: 'Debian 12 (bookworm) + Docker 24.0',
      diff: 'hard',
      diffLabel: 'DIFÍCIL',
      category: 'clasica',
      tags: ['Docker', 'Pivoting', 'Linux', 'Post-Explotación'],
      desc: 'Servidor con la API de Docker expuesta sin autenticación. Escapa del contenedor, descubre la red interna y pivota hasta una segunda máquina.',
      ports: [
        { port: 22, service: 'ssh', version: 'OpenSSH 9.2p1 Debian' },
        { port: 80, service: 'http', version: 'nginx 1.24.0' },
        { port: 2375, service: 'docker', version: 'Docker API 1.43 (SIN TLS)', hidden: true },
      ],
      dockerContainers: [{ id: 'a3f9e21b8c44', image: 'web-app:latest', status: 'Up 3 days', name: 'web_frontend' }],
      internalNetwork: '172.19.0.0/24',
      internalHost: {
        ip: '172.19.0.5',
        hostname: 'internal-db',
        service: 'mysql',
        user: 'root',
        password: 'Pr0d_DB_2024!',
        filesystem: obsidianInternalFS,
      },
      users: {
        root: { password: null, home: ['root'], grantedByDockerEscape: true },
      },
      sudoers: {},
      filesystem: obsidianFS,
    },

    /* ═══════════════ ☁️ CLOUD ═══════════════ */
    '10.10.18.11': {
      ip: '10.10.18.11',
      hostname: 'meltwater',
      dnsName: 'meltwater.htb',
      os: 'Linux',
      osDetail: 'Ubuntu 22.04 — microservicio financiero',
      diff: 'easy',
      diffLabel: 'FÁCIL',
      category: 'cloud',
      tags: ['SSRF', 'IMDS', 'AWS S3', 'Cloud'],
      desc: 'Un microservicio que abre URLs por ti (SSRF). Abusa del proxy para llegar a la metadata de AWS, roba credenciales y arrasa los buckets S3.',
      noShell: true,
      ports: [
        { port: 80, service: 'http', version: 'nginx 1.24.0' },
        { port: 8080, service: 'http', version: 'meltwater-admin (panel interno)' },
      ],
      web: {
        '/': {
          status: 200,
          body:
            '<!DOCTYPE html>\n<html><head><title>Meltwater Fintech</title></head>\n' +
            '<body>\n  <h1>Meltwater — API de transacciones</h1>\n' +
            '  <p>Endpoint de utilidades: <code>/fetch?url=http://…</code> descarga y muestra el recurso del lado del servidor.</p>\n' +
            '  <p><small>(el valor de "url" no se valida contra IPs internas — TODO PENDIENTE)</small></p>\n</body></html>',
        },
      },
      ssrf: {
        path: '/fetch',
        roleName: 'dev-deploy',
        creds: {
          accessKeyId: 'AKIAEXAMPLEMELTWATER42',
          secretAccessKey: 'm3ltw4t3r_pr0d_s3cr3t_k3y_2026',
          token: 'FwoGZ-ljIy... (simulado)',
        },
        ssrfFlag: 'CQ{ssrf_t0_m3t4d4t4}',
        credsFlag: 'CQ{1am_cr3ds_3xf1ltr4t3d}',
      },
      admin: {
        path: '/admin',
        token: 'mw4dm1n_t0k3n',
        flag: 'CQ{m3ltw4t3r_4dm1n_pwn}',
      },
      aws: {
        account: '104487123456',
        identity: { arn: 'arn:aws:iam::104487123456:user/meltwater-dev-deploy' },
        buckets: {
          'meltwater-backups': [
            {
              key: 'config/db.env',
              content: 'DB_HOST=10.0.4.12\nDB_USER=app\nDB_PASS=meltwater_prod_db_2026',
              size: 512,
              flag: 'CQ{s3_c0nfs_l34k3d_db}',
            },
            {
              key: 'scripts/deploy.sh',
              content:
                '#!/bin/bash\n# Deploy del panel de admin interno\n' +
                'ADMIN_URL=http://10.10.18.11:8080/admin\n' +
                'curl -H "X-Admin-Token: mw4dm1n_t0k3n" "$ADMIN_URL"',
              size: 384,
              flag: 'CQ{d3pl0y_scr1pt_s3cr3ts}',
            },
          ],
        },
      },
      filesystem: null,
    },

    '10.10.18.12': {
      ip: '10.10.18.12',
      hostname: 'podshift',
      dnsName: 'podshift.htb',
      os: 'Linux (cluster)',
      osDetail: 'Kubernetes 1.28 — API expuesta',
      diff: 'medium',
      diffLabel: 'MEDIO',
      category: 'cloud',
      tags: ['Kubernetes', 'RBAC', 'Secrets', 'Cloud'],
      desc: 'Un clúster Kubernetes con el API server abierto y RBAC mal configurado. Enumera pods, escapa del contexto de la service account y lee los secrets hasta controlar el cluster.',
      noShell: true,
      ports: [
        { port: 6443, service: 'https', version: 'kube-apiserver 1.28.2' },
      ],
      k8s: {
        namespaces: ['default', 'kube-system'],
        reconFlag: 'CQ{k8s_ap1_0p3n_rb4c}',
        pods: [
          {
            name: 'web-frontend-7b9c4f5d6e',
            serviceAccount: 'dev-sa',
            notes: 'RBAC mal configurado: la service account dev-sa puede leer secrets y listar nodos en este clúster.',
            env: [
              { key: 'POD_SA_TOKEN', value: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzeXM6c2VydmljZWFjY291bnQ6ZGVmYXVsdDpkZXYtc2Ei...' },
              { key: 'DB_HOST', value: 'db.internal' },
            ],
            envFlag: 'CQ{s4_t0k3n_fr0m_p0d}',
            files: [
              {
                path: '/app/.env',
                content: 'DB_PASS=podshift_db_2026\nAPI_KEY=9f2c1a88b3e04df7c81b',
                flag: 'CQ{db_cr3ds_1n_p0d}',
              },
            ],
          },
        ],
        secrets: [
          {
            name: 'deploy-token',
            type: 'Opaque',
            data: { 'token.txt': 'a3cGZXhhbXBsZVRva2Vu==...' },
            tokenValue: 'k8s_s4_d3pl0y_t0k3n',
            flag: 'CQ{k8s_s3cr3t_r34d}',
          },
        ],
        nodes: ['worker-1', 'worker-2'],
        nodesFlag: 'CQ{clust3r_adm1n_4ch13v3d}',
      },
      filesystem: null,
    },

    '10.10.18.13': {
      ip: '10.10.18.13',
      hostname: 'statefile',
      dnsName: 'statefile.htb',
      os: 'Linux',
      osDetail: 'Debian 12 — servidor de CI/CD',
      diff: 'medium',
      diffLabel: 'MEDIO',
      category: 'cloud',
      tags: ['Terraform', 'tfstate', 'AWS S3', 'CI/CD'],
      desc: 'Un servidor de artefactos CI/CD con el estado de Terraform descargable sin autenticar. El tfstate esconde credenciales de AWS que abren toda la cuenta.',
      noShell: true,
      ports: [
        { port: 80, service: 'http', version: 'nginx 1.24.0 (pipeline front)' },
        { port: 8080, service: 'http', version: 'Artifactory 7.55' },
      ],
      hiddenDirs: [
        { path: '/pipeline/', status: 301, size: 0 },
        { path: '/pipeline/artifacts/', status: 200, size: 0, flag: 'CQ{4rt1f4ct_d1r_f0und}' },
      ],
      web: {
        '/': {
          status: 200,
          body:
            '<!DOCTYPE html>\n<html><head><title>Statefile Artifactory</title></head>\n' +
            '<body>\n  <h1>Statefile — artefactos de pipelines</h1>\n  <p>Repositorio interno de artefactos CI/CD.</p>\n</body></html>',
        },
        '/pipeline/artifacts/terraform.tfstate': {
          status: 200,
          body:
            '{\n  "version": 4,\n  "terraform_version": "1.5.7",\n  "resources": [\n    {\n      "type": "aws_s3_bucket",\n      "name": "iac-templates",\n      "instances": [{ "attributes": { "bucket": "iac-templates" } }]\n    },\n    {\n      "type": "aws_iam_user",\n      "name": "iac-bot",\n      "instances": [{ "attributes": { "name": "iac-bot", "access_key": "AKIAEXAMPLEIACBOT77", "secret_key": "st4t3f1l3_pl41nt3xt_4cc3ss_k3y" } }]\n    }\n  ]\n}\n# ⚠ credenciales en texto plano dentro del tfstate (¡NUNCA hagas esto!)',
          flag: 'CQ{tfst4t3_pl41nt3xt}',
          cloudCreds: true,
        },
      },
      aws: {
        account: '849102345678',
        identity: { arn: 'arn:aws:iam::849102345678:user/iac-bot' },
        buckets: {
          'iac-templates': [
            {
              key: 'vpc.tf',
              content:
                'resource "aws_vpc" "prod" { cidr_block = "10.0.0.0/16" }\n' +
                '# TODO: mover el backend real a un bucket separado (prod-tf-state-bucket)',
              size: 96,
              flag: 'CQ{iac_t3mpl4t3_l34k}',
            },
          ],
          'prod-tf-state-bucket': [
            {
              key: 'prod/backend.tfstate',
              content:
                '{\n  "backend": "s3",\n  "credentials": {\n    "access_key": "AKIAEXAMPLEPRODADMIN9",\n    "secret_key": "st4t3f1l3_4dm1n_b4ck3nd_k3y"\n  },\n  "note": "Credenciales ADMIN de la cuenta de producción — úsalas con aws ec2 describe-instances"\n}',
              size: 512,
              admin: true,
              flag: 'CQ{b4ck3nd_st4t3_pr0d}',
            },
          ],
        },
        instances: [
          { id: 'i-0a1b2c3d4e5f', ip: '10.10.18.13', name: 'statefile-prod' },
          { id: 'i-0f6e5d4c3b2a', ip: '10.10.18.14', name: 'greenhouse-prod' },
        ],
        adminInstancesFlag: 'CQ{st4t3f1l3_4dm1n_1ns1ghts}',
      },
      filesystem: null,
    },

    '10.10.18.14': {
      ip: '10.10.18.14',
      hostname: 'greenhouse',
      dnsName: 'greenhouse.htb',
      os: 'Linux',
      osDetail: 'Ubuntu 22.04 — plataforma de datos',
      diff: 'hard',
      diffLabel: 'DIFÍCIL',
      category: 'cloud',
      tags: ['Docker Registry', 'IAM', 'Privesc', 'Cloud'],
      desc: 'Un Docker Registry expuesto con secretos incrustados en las capas de las imágenes. Escala en AWS abusando de una política IAM demasiado permisiva para asumir un rol privilegiado.',
      noShell: true,
      ports: [
        { port: 443, service: 'https', version: 'nginx 1.24.0' },
        { port: 5000, service: 'docker-registry', version: 'Registry 2.8.2' },
      ],
      registry: {
        repo: 'app/releases',
        catalogFlag: 'CQ{r3g1stry_c4t4l0g}',
        layers: [
          {
            digest: 'sha256:a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b',
            size: 2048,
            content:
              '── capa LAYER 1 ──\nFROM python:3.11-slim\n# credenciales copiadas por error durante el build\n' +
              'ENV AWS_ACCESS_KEY_ID=AKIAEXAMPLEGREENHOUS1\n' +
              'ENV AWS_SECRET_ACCESS_KEY=gr33nh0us3_1m4g3_l4y3r_s3cr3t\n' +
              'ENV DB_PASS=greenhouse_prod_db_2026',
            flag: 'CQ{1m4g3_l4y3r_cr3ds}',
            cloudCreds: true,
          },
        ],
      },
      aws: {
        account: '337788551122',
        identity: { arn: 'arn:aws:iam::337788551122:user/greenhouse-svc' },
        buckets: {
          'greenhouse-analytics': [
            {
              key: 'customers/2024.csv',
              content:
                'customer_id,name,plan\nC-4821,Alpha Corp,enterprise\nC-4833,Beta Inc,scale\nC-4827,Gamma LLC,enterprise\n# ⚠ datos de clientes sin cifrar en un bucket público',
              size: 1024,
              flag: 'CQ{cust0m3r_d4t4_exf1l}',
            },
          ],
          'greenhouse-prod-secrets': [
            {
              key: 'db-master.pem',
              content:
                '-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEA...gr33nh0us3_pr0d_m4st3r_key...\n-----END RSA PRIVATE KEY-----\n# clave maestra de la BD de producción — solo accesible con el rol greenhouse-prod-role',
              size: 1706,
              roleRequired: true,
              flag: 'CQ{gr33nh0us3_pr0d_s3cr3ts}',
            },
          ],
        },
        iam: {
          policies: ['greenhouse-s3-read', 'greenhouse-s3-list'],
          roles: [
            {
              roleArn: 'arn:aws:iam::337788551122:role/greenhouse-prod-role',
              flag: 'CQ{1am_r0l3_3sc4l4t10n}',
            },
          ],
        },
      },
      filesystem: null,
    },

    /* ═══════════════ 💣 PWN ═══════════════ */
    '10.10.19.11': {
      ip: '10.10.19.11',
      hostname: 'underflow',
      dnsName: 'underflow.htb',
      os: 'Linux',
      osDetail: 'Ubuntu 20.04 — binario SUID vulnerable',
      diff: 'easy',
      diffLabel: 'FÁCIL',
      category: 'pwn',
      tags: ['Buffer Overflow', 'SUID', 'GDB', 'Linux'],
      desc: 'Un binario SUID que desborda la pila sin protección. Filtra la dirección, sobrescribe el retorno y consigue una shell de root.',
      ports: [{ port: 22, service: 'ssh', version: 'OpenSSH 8.9p1 Ubuntu' }],
      users: {
        svc: { password: 'Summer2024!', home: ['home', 'svc'], sshFlag: 'CQ{und3rfl0w_ssh_cr3ds}' },
      },
      sudoers: {},
      pwn: {
        binary: 'authd',
        reconFlag: 'CQ{und3rfl0w_str1ngs}',
        leakFlag: 'CQ{und3rfl0w_l34k}',
        midFlag: 'CQ{und3rfl0w_sh3ll}',
        rootFlag: 'CQ{und3rfl0w_r00t}',
      },
      filesystem: underflowFS,
    },

    '10.10.19.12': {
      ip: '10.10.19.12',
      hostname: 'canary-row',
      dnsName: 'canary-row.htb',
      os: 'Linux',
      osDetail: 'Ubuntu 22.04 — binario SUID con canary',
      diff: 'medium',
      diffLabel: 'MEDIO',
      category: 'pwn',
      tags: ['Stack Canary', 'Buffer Overflow', 'Mitigaciones', 'Linux'],
      desc: 'El binario tiene stack canary activo. Primero debes filtrar el canario, y después incluirlo en el payload para enmascarar el desbordamiento.',
      ports: [{ port: 22, service: 'ssh', version: 'OpenSSH 8.9p1 Ubuntu' }],
      users: {
        svc: { password: 'CorpN3t2024', home: ['home', 'svc'], sshFlag: 'CQ{can4ry_r0w_ssh}' },
      },
      sudoers: {},
      pwn: {
        binary: 'canary_check',
        reconFlag: 'CQ{can4ry_r0w_str1ngs}',
        leakFlag: 'CQ{can4ry_l34k3d}',
        midFlag: 'CQ{can4ry_byp4ss}',
        rootFlag: 'CQ{can4ry_r0w_r00t}',
      },
      filesystem: canaryRowFS,
    },

    '10.10.19.13': {
      ip: '10.10.19.13',
      hostname: 'formatstr',
      dnsName: 'formatstr.htb',
      os: 'Linux',
      osDetail: 'Ubuntu 22.04 — binario SUID con format string',
      diff: 'medium',
      diffLabel: 'MEDIO',
      category: 'pwn',
      tags: ['Format String', 'SUID', 'GDB', 'Linux'],
      desc: 'Un binario que imprime tu entrada directamente con printf: clásica vulnerabilidad de cadena de formato. Filtra la pila y descubre el secreto del modo mantenimiento.',
      ports: [{ port: 22, service: 'ssh', version: 'OpenSSH 8.9p1 Ubuntu' }],
      users: {
        svc: { password: 'N0vaD3v2024!', home: ['home', 'svc'], sshFlag: 'CQ{fmtstr_ssh}' },
      },
      sudoers: {},
      pwn: {
        binary: 'fmt',
        reconFlag: 'CQ{fmtstr_str1ngs}',
        leakFlag: 'CQ{fmtstr_l34k}',
        midFlag: 'CQ{fmtstr_s3cr3t}',
        rootFlag: 'CQ{fmtstr_r00t}',
      },
      filesystem: formatstrFS,
    },

    '10.10.19.14': {
      ip: '10.10.19.14',
      hostname: 'retlibc',
      dnsName: 'retlibc.htb',
      os: 'Linux',
      osDetail: 'Ubuntu 22.04 — binario SUID con NX',
      diff: 'hard',
      diffLabel: 'DIFÍCIL',
      category: 'pwn',
      tags: ['ret2libc', 'ROP', 'NX', 'Mitigaciones', 'Linux'],
      desc: 'NX impide ejecutar shellcode en la pila, así que tendrás que encadenar gadgets: ret2libc clásico. Filtra la base de libc y construye tu cadena ROP.',
      ports: [{ port: 22, service: 'ssh', version: 'OpenSSH 8.9p1 Ubuntu' }],
      users: {
        svc: { password: 's3cr3tP4ck3t', home: ['home', 'svc'], sshFlag: 'CQ{r3tl1bc_ssh}' },
      },
      sudoers: {},
      pwn: {
        binary: 'retlib',
        reconFlag: 'CQ{r3tl1bc_str1ngs}',
        leakFlag: 'CQ{r3tl1bc_l34k}',
        midFlag: 'CQ{r3tl1bc_r0p}',
        rootFlag: 'CQ{r3tl1bc_r00t}',
      },
      filesystem: retlibcFS,
    },

    /* ═══════════════ 📡 WIRELESS ═══════════════ */
    '10.10.20.11': {
      ip: '10.10.20.11',
      hostname: 'airgap',
      dnsName: 'airgap.htb',
      os: 'Wireless AP',
      osDetail: 'WPA2-PSK — red corporativa aislada',
      diff: 'easy',
      diffLabel: 'FÁCIL',
      category: 'wireless',
      tags: ['WPA2', 'Handshake', 'aircrack-ng', 'Wireless'],
      desc: 'Una red Wi-Fi corporativa WPA2. Captura el handshake de 4 vías, craquea la PSK y descubre la segunda red oculta que creeía "segura".',
      ports: [],
      wifi: {
        aps: [
          {
            ssid: 'AirGapCorp',
            bssid: 'AA:BB:CC:11:22:33',
            channel: 6,
            encryption: 'WPA2',
            client: '44:55:66:77:88:99',
            psk: 'Wif1W0w!',
            reconFlag: 'CQ{4irg4p_r3c0n}',
            handshakeFlag: 'CQ{4irg4p_h4ndsh4k3}',
            crackFlag: 'CQ{4irg4p_psk_cr4ck3d}',
          },
          {
            ssid: 'AirGapGuests',
            bssid: 'AA:BB:CC:44:55:66',
            channel: 11,
            encryption: 'WPA2',
            client: '44:55:66:77:88:99',
            psk: 'C4rD1n4l2024!',
            requireCracked: 'AirGapCorp',
            reconFlag: 'CQ{4irg4p_h1dd3n_4p}',
            crackFlag: 'CQ{4irg4p_gu3sts_pwn3d}',
          },
        ],
      },
      filesystem: null,
    },

    '10.10.20.12': {
      ip: '10.10.20.12',
      hostname: 'meshpoint',
      dnsName: 'meshpoint.htb',
      os: 'Wireless AP + servidor',
      osDetail: 'WPA2-Enterprise (EAP/MSCHAPv2) — RADIUS',
      diff: 'hard',
      diffLabel: 'DIFÍCIL',
      category: 'wireless',
      tags: ['WPA2-Enterprise', 'EAP', 'asleap', 'RADIUS'],
      desc: 'Red corporativa WPA2-Enterprise. El handshake EAP oculta el reto MSCHAPv2 que asleap puede craquear offline: las credenciales RADIUS reutilizan el acceso SSH.',
      ports: [{ port: 22, service: 'ssh', version: 'OpenSSH 8.9p1 Ubuntu' }],
      wifi: {
        aps: [
          {
            ssid: 'MeshPoint-EAP',
            bssid: '12:34:56:78:9A:BC',
            channel: 11,
            encryption: 'WPA2',
            client: '00:11:22:33:44:55',
            eap: true,
            mschapUser: 'jmartinez',
            mschapPass: 'C4rD1n4l2024!',
            reconFlag: 'CQ{mshpt_r3c0n}',
            handshakeFlag: 'CQ{mshpt_e4p_h4ndsh4k3}',
            eapFlag: 'CQ{mshpt_r4d1us_cr4ck3d}',
          },
        ],
      },
      users: {
        jmartinez: { password: 'C4rD1n4l2024!', home: ['home', 'jmartinez'], sshFlag: 'CQ{mshpt_ssh}' },
      },
      sudoers: {},
      filesystem: meshpointFS,
    },

    '10.10.20.13': {
      ip: '10.10.20.13',
      hostname: 'vlanhop',
      dnsName: 'vlanhop.htb',
      os: 'Switch L2',
      osDetail: 'Trunk 802.1Q — VLANs separadas',
      diff: 'medium',
      diffLabel: 'MEDIO',
      category: 'wireless',
      tags: ['VLAN Hopping', '802.1Q', 'Pivoting', 'Network'],
      desc: 'Un trunk 802.1Q mal configurado acepta tramas con doble etiqueta. Salta de la VLAN de invitados a la interna y comprome a toda la red corporativa.',
      ports: [],
      vlan: {
        guest: '192.168.10.0/24',
        guestVlan: 10,
        internal: '192.168.20.0/24',
        internalVlan: 20,
        internalHosts: [{ ip: '192.168.20.10', hostname: 'fileserver', port: 22 }],
        flag1: 'CQ{vl4nh0p_gu3st_vl4n}',
        flag2: 'CQ{vl4nh0p_1nt3rn4l}',
      },
      filesystem: null,
    },

    '192.168.20.10': {
      ip: '192.168.20.10',
      hostname: 'fileserver',
      dnsName: 'fileserver',
      internal: true,
      os: 'Linux',
      osDetail: 'Ubuntu 22.04 — servidor de archivos interno',
      diff: 'medium',
      diffLabel: 'MEDIO',
      category: 'wireless',
      tags: ['SMB', 'GTFOBins', 'Pivoting', 'Network'],
      desc: 'Host interno alcanzable solo tras el VLAN hopping. Usuario de backup con sudo sobre find: GTFOBins de nuevo para root.',
      ports: [
        { port: 22, service: 'ssh', version: 'OpenSSH 8.9p1 Ubuntu' },
        { port: 445, service: 'microsoft-ds', version: 'Samba 4.15' },
      ],
      users: {
        backup: { password: 'BackupN3t!', home: ['home', 'backup'], sshFlag: 'CQ{vl4nh0p_f1l3s3rv3r}' },
      },
      sudoers: { backup: { nopasswd: ['/usr/bin/find'] } },
      privescFlag: 'CQ{vl4nh0p_gtf0b1ns}',
      filesystem: vlanFileserverFS,
    },

    '10.10.20.14': {
      ip: '10.10.20.14',
      hostname: 'rogue-dhcp',
      dnsName: 'rogue-dhcp.htb',
      os: 'Linux (servidor DHCP)',
      osDetail: 'Subred de invitados 192.168.30.0/24',
      diff: 'medium',
      diffLabel: 'MEDIO',
      category: 'wireless',
      tags: ['MITM', 'ARP Spoofing', 'Responder', 'NTLMv2'],
      desc: 'La red de invitados usa DHCP sin protección. Interponte con ARP spoofing, captura el hash NTLMv2 con responder y cráquelo con hashcat para entrar en el servidor.',
      ports: [{ port: 22, service: 'ssh', version: 'OpenSSH 8.9p1 Ubuntu' }],
      mitm: {
        victim: '192.168.30.42',
        gateway: '192.168.30.1',
        hash: '$NETNTLMv2$#guest42#192.168.30.42#...',
        creds: { user: 'dhcp_admin', password: 'R0gu3DHCP!' },
        mitmFlag: 'CQ{r0gu3_m1tm_4ct1v3}',
        responderFlag: 'CQ{r0gu3_ntlmv2_c4ptur3d}',
        hashFlag: 'CQ{r0gu3_h4sh_cr4ck3d}',
      },
      users: {
        dhcp_admin: { password: 'R0gu3DHCP!', home: ['home', 'dhcp_admin'], sshFlag: 'CQ{r0gu3_ssh}' },
      },
      sudoers: {},
      filesystem: rogueFS,
    },
  };

  /* Flag "trampa" en localhost para quien intente cat /root/root.txt en su propia máquina */

  global.DNS = DNS;
  global.HOSTS = HOSTS;
})(typeof window !== 'undefined' ? window : globalThis);
