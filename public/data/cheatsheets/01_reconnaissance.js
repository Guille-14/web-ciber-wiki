// Reconocimiento (Reconnaissance)
window.WIKI_CHEATSHEETS_01_RECONNAISSANCE = [
 {
  "tool": "nmap",
  "desc": "Escáner de red, detección de puertos/servicios/OS y scripts NSE",
  "commands": [
   {
    "cmd": "nmap objetivo.com",
    "desc": "Escaneo básico de los 1000 puertos TCP más comunes"
   },
   {
    "cmd": "nmap 192.168.1.0/24",
    "desc": "Escaneo de subred clase C completa"
   },
   {
    "cmd": "nmap -p 80,443,8080 objetivo.com",
    "desc": "Escanear puertos específicos"
   },
   {
    "cmd": "nmap -p- objetivo.com",
    "desc": "Escanear los 65535 puertos TCP"
   },
   {
    "cmd": "nmap -p- --min-rate 5000 objetivo.com",
    "desc": "Escaneo full port de alta velocidad"
   },
   {
    "cmd": "nmap -F objetivo.com",
    "desc": "Fast scan (top 100 puertos)"
   },
   {
    "cmd": "nmap -sS objetivo.com",
    "desc": "TCP SYN scan (stealth, requiere root)"
   },
   {
    "cmd": "nmap -sT objetivo.com",
    "desc": "TCP Connect scan completo"
   },
   {
    "cmd": "nmap -sU -p 53,161 objetivo.com",
    "desc": "UDP scan de puertos DNS/SNMP"
   },
   {
    "cmd": "nmap -sN -sF -sX objetivo.com",
    "desc": "Escaneos NULL/FIN/XMAS (evasión firewall)"
   },
   {
    "cmd": "nmap -sV objetivo.com",
    "desc": "Detección de versiones de servicios"
   },
   {
    "cmd": "nmap -sV --version-intensity 9 objetivo.com",
    "desc": "Detección agresiva de versiones"
   },
   {
    "cmd": "nmap -O objetivo.com",
    "desc": "Detección de sistema operativo"
   },
   {
    "cmd": "nmap -A objetivo.com",
    "desc": "Escaneo agresivo: OS + versiones + scripts + traceroute"
   },
   {
    "cmd": "nmap -A -T4 -p- objetivo.com",
    "desc": "Escaneo completo y agresivo"
   },
   {
    "cmd": "nmap -sC objetivo.com",
    "desc": "Ejecutar scripts NSE por defecto"
   },
   {
    "cmd": "nmap --script=vuln objetivo.com",
    "desc": "Escanear vulnerabilidades conocidas"
   },
   {
    "cmd": "nmap --script=default,safe objetivo.com",
    "desc": "Scripts default y seguros"
   },
   {
    "cmd": "nmap --script=http-enum objetivo.com",
    "desc": "Enumerar directorios/recursos web"
   },
   {
    "cmd": "nmap --script=smb-enum-shares -p 445 objetivo.com",
    "desc": "Enumerar shares SMB"
   },
   {
    "cmd": "nmap --script=smb-vuln-ms17-010 -p 445 objetivo.com",
    "desc": "Comprobar EternalBlue"
   },
   {
    "cmd": "nmap --script=ssh-brute --script-args userdb=users.txt -p 22 objetivo.com",
    "desc": "Fuerza bruta SSH con scripts NSE"
   },
   {
    "cmd": "nmap -sn 192.168.1.0/24",
    "desc": "Ping sweep (host discovery sin escanear puertos)"
   },
   {
    "cmd": "nmap -sn -PR 192.168.1.0/24",
    "desc": "ARP discovery (local, muy rápido)"
   },
   {
    "cmd": "nmap -sn -PE 192.168.1.0/24",
    "desc": "ICMP Echo discovery"
   },
   {
    "cmd": "nmap -sn -PS80,443 192.168.1.0/24",
    "desc": "TCP SYN ping discovery"
   },
   {
    "cmd": "nmap -Pn objetivo.com",
    "desc": "Escaneo sin ping (host siempre up)"
   },
   {
    "cmd": "nmap -f objetivo.com",
    "desc": "Fragmentar paquetes (evadir IDS)"
   },
   {
    "cmd": "nmap -D RND:10,ME objetivo.com",
    "desc": "Escaneo con señuelos (decoys)"
   },
   {
    "cmd": "nmap --source-port 53 objetivo.com",
    "desc": "Spoofing de puerto origen"
   },
   {
    "cmd": "nmap --proxies http://127.0.0.1:8080 objetivo.com",
    "desc": "Escaneo vía proxy"
   },
   {
    "cmd": "nmap -6 objetivo.com",
    "desc": "Escaneo IPv6"
   },
   {
    "cmd": "nmap -iL targets.txt",
    "desc": "Escanear lista de objetivos desde archivo"
   },
   {
    "cmd": "nmap -oN salida.txt -oX salida.xml -oG salida.gnmap -oA base objetivo.com",
    "desc": "Guardar en todos los formatos"
   },
   {
    "cmd": "nmap -T4 -p- --open objetivo.com",
    "desc": "Mostrar solo puertos abiertos"
   },
   {
    "cmd": "nmap --top-ports 100 --reason objetivo.com",
    "desc": "Top 100 puertos con razón de estado"
   },
   {
    "cmd": "nmap --script http-headers objetivo.com",
    "desc": "Ver cabeceras HTTP"
   },
   {
    "cmd": "nmap --script ssl-enum-ciphers -p 443 objetivo.com",
    "desc": "Enumerar cifrados SSL/TLS"
   },
   {
    "cmd": "nmap --script dns-brute --script-args dns-brute.domain=objetivo.com",
    "desc": "Fuerza bruta de subdominios DNS"
   },
   {
    "cmd": "nmap --script http-wordpress-enum -p 80 objetivo.com",
    "desc": "Enumerar plugins WordPress"
   },
   {
    "cmd": "nmap --stats-every 10s objetivo.com",
    "desc": "Mostrar estadísticas cada 10 segundos"
   },
   {
    "cmd": "nmap --max-retries 1 objetivo.com",
    "desc": "Limitar reintentos (scan rápido)"
   },
   {
    "cmd": "nmap --host-timeout 30m objetivo.com",
    "desc": "Timeout por host"
   }
  ]
 },
 {
  "tool": "masscan",
  "desc": "Escáner TCP masivo ultra-rápido (millones de puertos por segundo)",
  "commands": [
   {
    "cmd": "masscan 192.168.1.0/24 -p1-65535 --rate=10000",
    "desc": "Escanear subred completa a 10k pps"
   },
   {
    "cmd": "masscan 10.0.0.0/8 -p80,443 --rate=100000",
    "desc": "Escanear clase A en puertos web"
   },
   {
    "cmd": "masscan objetivo.com -p22,80,443 -oX results.xml",
    "desc": "Guardar resultados en XML"
   },
   {
    "cmd": "masscan objetivo.com -p1-65535 -oG results.gnmap",
    "desc": "Guardar en formato grepable"
   },
   {
    "cmd": "masscan --top-ports 1000 --rate=5000 objetivo.com",
    "desc": "Top 1000 puertos"
   },
   {
    "cmd": "masscan -p0-65535 --rate=100000 --excludefile exclude.txt 0.0.0.0/0",
    "desc": "Escaneo global excluyendo rangos"
   },
   {
    "cmd": "masscan -p23 0.0.0.0/0 --rate=1000000",
    "desc": "Escaneo mundial de telnet (mega-speed)"
   },
   {
    "cmd": "masscan -p445 --banners --rate=5000 192.168.1.0/24",
    "desc": "Captura de banners SMB"
   },
   {
    "cmd": "masscan --interface eth0 -e eth0 objetivo.com",
    "desc": "Especificar interfaz de red"
   },
   {
    "cmd": "masscan -S SPOOFED_IP -p80 --rate=10000 objetivo.com",
    "desc": "Spoofing de IP origen"
   },
   {
    "cmd": "masscan -pU:53,161 --rate=1000 objetivo.com",
    "desc": "Escaneo UDP de DNS/SNMP"
   },
   {
    "cmd": "masscan -p1-1024 --rate=5000 objetivo.com | grep open",
    "desc": "Filtrar puertos abiertos"
   },
   {
    "cmd": "masscan --source-port 53 objetivo.com -p1-65535",
    "desc": "Puerto origen 53 para saltar firewall"
   },
   {
    "cmd": "masscan -p3306 --rate=2000 192.168.1.0/24",
    "desc": "Buscar MySQL expuestos"
   },
   {
    "cmd": "masscan -p6379 --rate=2000 192.168.1.0/24",
    "desc": "Buscar Redis expuestos"
   },
   {
    "cmd": "masscan -p9200 --rate=2000 192.168.1.0/24",
    "desc": "Buscar Elasticsearch expuestos"
   },
   {
    "cmd": "masscan -p2375 --rate=2000 192.168.1.0/24",
    "desc": "Buscar Docker API expuestos"
   },
   {
    "cmd": "masscan -p5985,5986 --rate=2000 192.168.1.0/24",
    "desc": "Buscar WinRM"
   },
   {
    "cmd": "masscan -p3389 --rate=2000 192.168.1.0/24",
    "desc": "Buscar RDP"
   },
   {
    "cmd": "masscan -p5900 --rate=2000 192.168.1.0/24",
    "desc": "Buscar VNC"
   }
  ]
 },
 {
  "tool": "zenmap",
  "desc": "Interfaz gráfica oficial de Nmap",
  "commands": [
   {
    "cmd": "zenmap",
    "desc": "Abrir interfaz gráfica"
   },
   {
    "cmd": "zenmap -h",
    "desc": "Ayuda de la CLI"
   }
  ]
 },
 {
  "tool": "unicornscan",
  "desc": "Escáner asíncrono de red de alta velocidad",
  "commands": [
   {
    "cmd": "unicornscan 192.168.1.0/24",
    "desc": "Escaneo básico de subred"
   },
   {
    "cmd": "unicornscan -p1-65535 192.168.1.10",
    "desc": "Escaneo full port"
   },
   {
    "cmd": "unicornscan -mU -p1-65535 192.168.1.10",
    "desc": "Escaneo UDP completo"
   },
   {
    "cmd": "unicornscan -mT 192.168.1.10 -p 1-1000",
    "desc": "Escaneo TCP específico"
   },
   {
    "cmd": "unicornscan -Iv -p 1-65535 192.168.1.10",
    "desc": "Modo verbose con puertos detectados"
   },
   {
    "cmd": "unicornscan -r 5000 -p 1-1000 192.168.1.10",
    "desc": "Rate de 5000 pps"
   },
   {
    "cmd": "unicornscan -s 192.168.1.100 -p 80 192.168.1.10",
    "desc": "Spoofing de IP"
   },
   {
    "cmd": "unicornscan -B 192.168.1.10 -p 1-1024",
    "desc": "Sin banners (modo limpio)"
   },
   {
    "cmd": "unicornscan -a 192.168.1.10",
    "desc": "Escaneo en modo aggressivo"
   },
   {
    "cmd": "unicornscan -p 53 -mU -l udp.txt 192.168.1.0/24",
    "desc": "Guardar resultados de UDP"
   },
   {
    "cmd": "unicornscan -R -p 1-65535 192.168.1.10",
    "desc": "Detalle de respuesta por puerto"
   },
   {
    "cmd": "unicornscan -p 80 -z 192.168.1.10",
    "desc": "Escaneo con cero ruido (fragmentación)"
   }
  ]
 },
 {
  "tool": "amass",
  "desc": "Enumeración de subdominios y mapeo de superficie de ataque (OWASP)",
  "commands": [
   {
    "cmd": "amass enum -passive -d objetivo.com",
    "desc": "Enumeración pasiva de subdominios"
   },
   {
    "cmd": "amass enum -active -d objetivo.com",
    "desc": "Enumeración activa con resolución"
   },
   {
    "cmd": "amass enum -brute -w /usr/share/amass/wordlists/namelist.txt -d objetivo.com",
    "desc": "Fuerza bruta de subdominios"
   },
   {
    "cmd": "amass enum -d objetivo.com -o subs.txt",
    "desc": "Guardar subdominios en archivo"
   },
   {
    "cmd": "amass enum -d objetivo.com -json out.json",
    "desc": "Salida en JSON"
   },
   {
    "cmd": "amass enum -d objetivo.com -src",
    "desc": "Mostrar fuente de cada hallazgo"
   },
   {
    "cmd": "amass enum -d objetivo.com -timeout 10",
    "desc": "Timeout por consulta DNS"
   },
   {
    "cmd": "amass enum -df domains.txt",
    "desc": "Múltiples dominios desde archivo"
   },
   {
    "cmd": "amass enum -d objetivo.com -config config.ini",
    "desc": "Usar config con APIs"
   },
   {
    "cmd": "amass intel -whois -d objetivo.com",
    "desc": "Intel WHOIS del dominio"
   },
   {
    "cmd": "amass intel -asn 13335",
    "desc": "Intel de ASN"
   },
   {
    "cmd": "amass intel -addr 1.1.1.1-1.1.1.2",
    "desc": "Intel por rango de IPs"
   },
   {
    "cmd": "amass viz -d3 -d objetivo.com",
    "desc": "Visualización 3D del mapa de subdominios"
   },
   {
    "cmd": "amass track -d objetivo.com",
    "desc": "Seguimiento histórico de cambios"
   },
   {
    "cmd": "amass db -show -d objetivo.com",
    "desc": "Mostrar datos almacenados en la BD local"
   },
   {
    "cmd": "amass enum -d objetivo.com -ip",
    "desc": "Incluir resolución de IPs"
   },
   {
    "cmd": "amass enum -d objetivo.com -cidr 192.168.1.0/24",
    "desc": "Enumerar dentro de CIDR"
   },
   {
    "cmd": "amass enum -d objetivo.com -asn 13335",
    "desc": "Enumerar dentro de ASN"
   },
   {
    "cmd": "amass enum -min-for-recursive 3 -d objetivo.com",
    "desc": "Fuerza bruta recursiva por subdominio"
   },
   {
    "cmd": "amass enum -d objetivo.com -oA amass_results",
    "desc": "Guardar en múltiples formatos"
   }
  ]
 },
 {
  "tool": "subfinder",
  "desc": "Descubrimiento pasivo de subdominios usando múltiples fuentes",
  "commands": [
   {
    "cmd": "subfinder -d objetivo.com",
    "desc": "Enumeración pasiva de subdominios"
   },
   {
    "cmd": "subfinder -d objetivo.com -all",
    "desc": "Usar todas las fuentes disponibles"
   },
   {
    "cmd": "subfinder -d objetivo.com -o subs.txt",
    "desc": "Guardar resultados"
   },
   {
    "cmd": "subfinder -dL domains.txt",
    "desc": "Múltiples dominios desde archivo"
   },
   {
    "cmd": "subfinder -d objetivo.com -recursive",
    "desc": "Enumeración recursiva"
   },
   {
    "cmd": "subfinder -d objetivo.com -silent",
    "desc": "Solo mostrar subdominios (sin banner)"
   },
   {
    "cmd": "subfinder -d objetivo.com -v",
    "desc": "Modo verbose con fuentes"
   },
   {
    "cmd": "subfinder -d objetivo.com -json -o out.json",
    "desc": "Salida JSON"
   },
   {
    "cmd": "subfinder -d objetivo.com -t 50",
    "desc": "50 hilos de concurrencia"
   },
   {
    "cmd": "subfinder -d objetivo.com -timeout 30",
    "desc": "Timeout de 30 segundos"
   },
   {
    "cmd": "subfinder -d objetivo.com -exclude-sources crtsh",
    "desc": "Excluir fuente específica"
   },
   {
    "cmd": "subfinder -d objetivo.com -nW",
    "desc": "Desactivar filtro de wildcards"
   },
   {
    "cmd": "subfinder -d objetivo.com -all -oA subs",
    "desc": "Todas las fuentes con salida múltiple"
   }
  ]
 },
 {
  "tool": "theHarvester",
  "desc": "OSINT: correos, subdominios, hosts y empleados desde fuentes públicas",
  "commands": [
   {
    "cmd": "theHarvester -d objetivo.com -b all",
    "desc": "Buscar en todas las fuentes"
   },
   {
    "cmd": "theHarvester -d objetivo.com -b google",
    "desc": "Buscar solo en Google"
   },
   {
    "cmd": "theHarvester -d objetivo.com -b bing",
    "desc": "Buscar solo en Bing"
   },
   {
    "cmd": "theHarvester -d objetivo.com -b linkedin",
    "desc": "Empleados desde LinkedIn"
   },
   {
    "cmd": "theHarvester -d objetivo.com -b crtsh",
    "desc": "Subdominios desde Certificate Transparency"
   },
   {
    "cmd": "theHarvester -d objetivo.com -b duckduckgo",
    "desc": "Buscar en DuckDuckGo"
   },
   {
    "cmd": "theHarvester -d objetivo.com -l 500",
    "desc": "Limitar a 500 resultados"
   },
   {
    "cmd": "theHarvester -d objetivo.com -f report.html",
    "desc": "Guardar reporte HTML"
   },
   {
    "cmd": "theHarvester -d objetivo.com -e 8.8.8.8",
    "desc": "Usar DNS server específico"
   },
   {
    "cmd": "theHarvester -d objetivo.com -s",
    "desc": "Búsqueda en Shodan (requiere API)"
   },
   {
    "cmd": "theHarvester -d objetivo.com -b anubis",
    "desc": "Usar fuente Anubis"
   },
   {
    "cmd": "theHarvester -d objetivo.com -b github-code",
    "desc": "Buscar en código GitHub"
   },
   {
    "cmd": "theHarvester -d objetivo.com -c",
    "desc": "Realizar búsqueda DNS inversa"
   },
   {
    "cmd": "theHarvester -d objetivo.com -b all -f report -v",
    "desc": "Todas las fuentes, verbose, reporte"
   }
  ]
 },
 {
  "tool": "recon-ng",
  "desc": "Framework modular de reconocimiento (estilo Metasploit para OSINT)",
  "commands": [
   {
    "cmd": "recon-ng",
    "desc": "Abrir consola interactiva"
   },
   {
    "cmd": "recon-ng -r script.rc",
    "desc": "Ejecutar script de comandos"
   },
   {
    "cmd": "recon-ng -w workspace_name",
    "desc": "Crear/usar workspace"
   },
   {
    "cmd": "marketplace search github",
    "desc": "Buscar módulos en el marketplace"
   },
   {
    "cmd": "marketplace install recon/domains-hosts/hackertarget",
    "desc": "Instalar módulo"
   },
   {
    "cmd": "modules load recon/domains-hosts/hackertarget",
    "desc": "Cargar módulo de subdominios"
   },
   {
    "cmd": "options set SOURCE objetivo.com",
    "desc": "Configurar dominio objetivo"
   },
   {
    "cmd": "options set VERBOSE true",
    "desc": "Activar verbose"
   },
   {
    "cmd": "run",
    "desc": "Ejecutar módulo cargado"
   },
   {
    "cmd": "show options",
    "desc": "Mostrar opciones del módulo"
   },
   {
    "cmd": "show modules",
    "desc": "Listar módulos"
   },
   {
    "cmd": "show hosts",
    "desc": "Ver hosts recolectados"
   },
   {
    "cmd": "show contacts",
    "desc": "Ver contactos recolectados"
   },
   {
    "cmd": "show credentials",
    "desc": "Ver credenciales recolectadas"
   },
   {
    "cmd": "dashboard",
    "desc": "Panel con estadísticas"
   },
   {
    "cmd": "db insert domains",
    "desc": "Insertar dominio manualmente"
   },
   {
    "cmd": "keys add shodan_api API_KEY",
    "desc": "Añadir API key de Shodan"
   },
   {
    "cmd": "use recon/hosts-hosts/shodan_ip",
    "desc": "Módulo de Shodan por IP"
   },
   {
    "cmd": "spool report.txt",
    "desc": "Guardar sesión en archivo"
   },
   {
    "cmd": "search type host",
    "desc": "Buscar módulos por tipo"
   }
  ]
 },
 {
  "tool": "spiderfoot",
  "desc": "Herramienta OSINT automatizada con 200+ módulos de fuentes",
  "commands": [
   {
    "cmd": "spiderfoot -l 127.0.0.1:5001",
    "desc": "Lanzar interfaz web en puerto 5001"
   },
   {
    "cmd": "spiderfoot-cli -s objetivo.com -m all -o texto",
    "desc": "Escaneo CLI de todas las fuentes"
   },
   {
    "cmd": "spiderfoot-cli -s objetivo.com -m \"sfp_shodan,sfp_google\"",
    "desc": "Módulos específicos"
   },
   {
    "cmd": "spiderfoot-cli -s objetivo.com -u out",
    "desc": "Salida en formato humano"
   },
   {
    "cmd": "spiderfoot-cli -s objetivo.com -o JSON -q",
    "desc": "Salida JSON silenciosa"
   },
   {
    "cmd": "spiderfoot-cli -s objetivo.com -M scan.log",
    "desc": "Registrar en archivo"
   },
   {
    "cmd": "spiderfoot -l 0.0.0.0:5001 -u admin:password",
    "desc": "Servidor web con auth"
   },
   {
    "cmd": "spiderfoot-cli -s IP:1.2.3.4 -m all",
    "desc": "Escaneo de IP"
   },
   {
    "cmd": "spiderfoot-cli -s user@email.com -m all",
    "desc": "Escaneo de email"
   },
   {
    "cmd": "spiderfoot-cli -s phone:+34... -m all",
    "desc": "Escaneo de teléfono"
   },
   {
    "cmd": "spiderfoot-cli -s user:username -m all",
    "desc": "Escaneo de username"
   },
   {
    "cmd": "spiderfoot-cli -s \"co.za\" -m sfp_tld",
    "desc": "Buscar dominios por TLD"
   }
  ]
 },
 {
  "tool": "maltego",
  "desc": "Plataforma gráfica de análisis de enlaces OSINT",
  "commands": [
   {
    "cmd": "maltego",
    "desc": "Abrir Maltego CE"
   },
   {
    "cmd": "maltego --no-update-check",
    "desc": "Abrir sin comprobar actualizaciones"
   }
  ]
 },
 {
  "tool": "dmitry",
  "desc": "Deepmagic Information Gathering Tool - recolección pasiva",
  "commands": [
   {
    "cmd": "dmitry -w objetivo.com",
    "desc": "Consulta WHOIS del dominio"
   },
   {
    "cmd": "dmitry -s objetivo.com",
    "desc": "Buscar subdominios"
   },
   {
    "cmd": "dmitry -e objetivo.com",
    "desc": "Buscar direcciones de email"
   },
   {
    "cmd": "dmitry -p objetivo.com",
    "desc": "Escaneo TCP de puertos"
   },
   {
    "cmd": "dmitry -b objetivo.com",
    "desc": "Banner grab del puerto"
   },
   {
    "cmd": "dmitry -i 192.168.1.10",
    "desc": "WHOIS de IP (whois lookup)"
   },
   {
    "cmd": "dmitry -wnspb objetivo.com",
    "desc": "Todo: whois, netcraft, subdominios, puertos, banners"
   },
   {
    "cmd": "dmitry -t objetivo.com",
    "desc": "Consulta netcraft.com"
   },
   {
    "cmd": "dmitry -o resultado.txt -wn objetivo.com",
    "desc": "Guardar resultados en archivo"
   }
  ]
 },
 {
  "tool": "fierce",
  "desc": "Herramienta de DNS subdomain scanning y enumeración",
  "commands": [
   {
    "cmd": "fierce --domain objetivo.com",
    "desc": "Enumeración DNS de subdominios"
   },
   {
    "cmd": "fierce --domain objetivo.com --subdomain-file subs.txt",
    "desc": "Con diccionario de subdominios"
   },
   {
    "cmd": "fierce --domain objetivo.com --dns-server 8.8.8.8",
    "desc": "Usar DNS server específico"
   },
   {
    "cmd": "fierce --domain objetivo.com --connect",
    "desc": "Intentar conexión TCP a los hosts"
   },
   {
    "cmd": "fierce --domain objetivo.com --wide",
    "desc": "Escaneo de rango entero"
   },
   {
    "cmd": "fierce --domain objetivo.com --delay 1",
    "desc": "Delay entre consultas"
   },
   {
    "cmd": "fierce --domain objetivo.com --threads 10",
    "desc": "Hilos de concurrencia"
   },
   {
    "cmd": "fierce --domain objetivo.com -o fierce.txt",
    "desc": "Guardar salida"
   },
   {
    "cmd": "fierce --domain objetivo.com --traverse",
    "desc": "Recorrido por IPs consecutivas"
   },
   {
    "cmd": "fierce --domain objetivo.com --tcp",
    "desc": "Verificar puertos TCP de los hosts"
   }
  ]
 },
 {
  "tool": "dnsrecon",
  "desc": "Enumeración DNS completa: zonas, subdominios, SRV, fuerza bruta",
  "commands": [
   {
    "cmd": "dnsrecon -d objetivo.com",
    "desc": "Enumeración DNS estándar"
   },
   {
    "cmd": "dnsrecon -d objetivo.com -t axfr",
    "desc": "Comprobar transferencia de zona"
   },
   {
    "cmd": "dnsrecon -d objetivo.com -t brt -D subdomains.txt",
    "desc": "Fuerza bruta de subdominios"
   },
   {
    "cmd": "dnsrecon -d objetivo.com -t std",
    "desc": "Escaneo estándar SOA/NS/A/MX"
   },
   {
    "cmd": "dnsrecon -d objetivo.com -t srv",
    "desc": "Enumerar registros SRV"
   },
   {
    "cmd": "dnsrecon -d objetivo.com -t tld",
    "desc": "Buscar en TLDs alternativos"
   },
   {
    "cmd": "dnsrecon -d objetivo.com -t zonewalk",
    "desc": "Zone walking con DNSSEC"
   },
   {
    "cmd": "dnsrecon -d objetivo.com -t rvl -r 10.0.0.0/24",
    "desc": "Reverse lookup de rango"
   },
   {
    "cmd": "dnsrecon -d objetivo.com -t brt -D list.txt -n 8.8.8.8",
    "desc": "Fuerza bruta con DNS server"
   },
   {
    "cmd": "dnsrecon -d objetivo.com -j out.json",
    "desc": "Salida JSON"
   },
   {
    "cmd": "dnsrecon -d objetivo.com -x out.xml",
    "desc": "Salida XML"
   },
   {
    "cmd": "dnsrecon -d objetivo.com -c out.csv",
    "desc": "Salida CSV"
   },
   {
    "cmd": "dnsrecon -d objetivo.com -t brt -w",
    "desc": "Fuerza bruta con wildcards"
   },
   {
    "cmd": "dnsrecon -d objetivo.com -t snoop -n 8.8.8.8",
    "desc": "Snooping de cache DNS"
   },
   {
    "cmd": "dnsrecon -d objetivo.com -a",
    "desc": "Enumeración de toda la zona"
   },
   {
    "cmd": "dnsrecon -d objetivo.com -t axfr -n ns1.objetivo.com",
    "desc": "AXFR contra NS específico"
   },
   {
    "cmd": "dnsrecon -d objetivo.com -t crt",
    "desc": "Subdominios desde crt.sh (CT logs)"
   }
  ]
 },
 {
  "tool": "dnsenum",
  "desc": "Enumeración DNS multi-hilo con fuerza bruta y reverse",
  "commands": [
   {
    "cmd": "dnsenum objetivo.com",
    "desc": "Enumeración básica"
   },
   {
    "cmd": "dnsenum --enum objetivo.com",
    "desc": "Enumeración completa"
   },
   {
    "cmd": "dnsenum -f subdomains.txt objetivo.com",
    "desc": "Fuerza bruta con diccionario"
   },
   {
    "cmd": "dnsenum --threads 10 objetivo.com",
    "desc": "Enumeración con 10 hilos"
   },
   {
    "cmd": "dnsenum -r objetivo.com",
    "desc": "Reverse lookup de rangos"
   },
   {
    "cmd": "dnsenum -p objetivo.com",
    "desc": "Ping sweep de los hosts"
   },
   {
    "cmd": "dnsenum -w objetivo.com",
    "desc": "WHOIS de los hosts"
   },
   {
    "cmd": "dnsenum -o salida.txt objetivo.com",
    "desc": "Guardar en archivo"
   },
   {
    "cmd": "dnsenum -d 10.0.0.0/24 objetivo.com",
    "desc": "Reverse de subred"
   },
   {
    "cmd": "dnsenum --noreverse objetivo.com",
    "desc": "Sin reverse lookup"
   },
   {
    "cmd": "dnsenum -s 100 objetivo.com",
    "desc": "Timeout entre consultas (ms)"
   },
   {
    "cmd": "dnsenum -c objetivo.com -f list.txt --threads 20 -o out.txt",
    "desc": "Todo combinado con 20 hilos"
   }
  ]
 },
 {
  "tool": "dnsmap",
  "desc": "Enumeración pasiva de subdominios DNS",
  "commands": [
   {
    "cmd": "dnsmap objetivo.com",
    "desc": "Enumeración con wordlist por defecto"
   },
   {
    "cmd": "dnsmap objetivo.com -w subdomains.txt",
    "desc": "Con wordlist personalizada"
   },
   {
    "cmd": "dnsmap objetivo.com -r resultado.txt",
    "desc": "Guardar resultados"
   },
   {
    "cmd": "dnsmap objetivo.com -c 5",
    "desc": "No hacer reverse lookup"
   },
   {
    "cmd": "dnsmap objetivo.com -d 1000",
    "desc": "Delay de 1000ms entre consultas"
   },
   {
    "cmd": "dnsmap objetivo.com -i 192.168.1.1",
    "desc": "Usar IP de resolver"
   },
   {
    "cmd": "dnsmap objetivo.com -w list.txt -r out.txt",
    "desc": "Wordlist y salida combinadas"
   }
  ]
 },
 {
  "tool": "massdns",
  "desc": "Resolver DNS masivo de alta velocidad",
  "commands": [
   {
    "cmd": "massdns -r resolvers.txt -t A -o S -w results.txt domains.txt",
    "desc": "Resolver A records en masa"
   },
   {
    "cmd": "massdns -r resolvers.txt -t AAAA domains.txt",
    "desc": "Resolver IPv6"
   },
   {
    "cmd": "massdns -r resolvers.txt -t MX domains.txt",
    "desc": "Resolver registros MX"
   },
   {
    "cmd": "massdns -r resolvers.txt -t TXT domains.txt",
    "desc": "Resolver registros TXT"
   },
   {
    "cmd": "massdns -r resolvers.txt -t CNAME domains.txt",
    "desc": "Resolver CNAME"
   },
   {
    "cmd": "massdns -r resolvers.txt -t NS domains.txt",
    "desc": "Resolver NS"
   },
   {
    "cmd": "massdns -r resolvers.txt -o J -w out.json domains.txt",
    "desc": "Salida JSON"
   },
   {
    "cmd": "massdns -r resolvers.txt --socket-count 100 -o S domains.txt",
    "desc": "100 sockets concurrentes"
   },
   {
    "cmd": "massdns -r resolvers.txt --root -t A domains.txt",
    "desc": "Consultar contra la raíz"
   },
   {
    "cmd": "massdns -r resolvers.txt --retry 3 -t A domains.txt",
    "desc": "3 reintentos"
   },
   {
    "cmd": "massdns -r resolvers.txt --flush -t A domains.txt",
    "desc": "Vaciar cache"
   },
   {
    "cmd": "massdns -r resolvers.txt --processes 10 -t A domains.txt",
    "desc": "10 procesos paralelos"
   },
   {
    "cmd": "massdns -r resolvers.txt -t A -q domains.txt",
    "desc": "Modo silencioso"
   },
   {
    "cmd": "massdns -r resolvers.txt -t A -o T domains.txt",
    "desc": "Salida en formato texto simple"
   }
  ]
 },
 {
  "tool": "dnschef",
  "desc": "DNS proxy/spoofer para redirigir consultas DNS",
  "commands": [
   {
    "cmd": "dnschef --interface 192.168.1.100 --fakeip 127.0.0.1",
    "desc": "Spoofear todas las consultas a 127.0.0.1"
   },
   {
    "cmd": "dnschef --fakeip 10.10.10.5 --fakedomains objetivo.com",
    "desc": "Spoofear solo objetivo.com"
   },
   {
    "cmd": "dnschef --fakerecord A 1.2.3.4 --fakedomains www.evil.com",
    "desc": "Spoofear registro A específico"
   },
   {
    "cmd": "dnschef --port 5353",
    "desc": "Escuchar en puerto 5353"
   },
   {
    "cmd": "dnschef --nameservers 8.8.8.8",
    "desc": "Forward de consultas a 8.8.8.8"
   },
   {
    "cmd": "dnschef --logfile dns.log",
    "desc": "Registrar consultas"
   },
   {
    "cmd": "dnschef --fakeip 6.6.6.6 --tcp",
    "desc": "Spoofing TCP"
   },
   {
    "cmd": "dnschef --interface eth0 --fakeip 1.2.3.4 --fakedomains *.com",
    "desc": "Spoofear todos los .com"
   },
   {
    "cmd": "dnschef --hash",
    "desc": "Mostrar hash de las respuestas"
   },
   {
    "cmd": "dnschef --fakeip 192.168.1.10 --fakedomains update.objetivo.com",
    "desc": "Interceptar actualización de software"
   }
  ]
 },
 {
  "tool": "dnstracer",
  "desc": "Seguimiento de consultas DNS hasta el servidor autoritativo",
  "commands": [
   {
    "cmd": "dnstracer objetivo.com",
    "desc": "Trazar resolución del dominio"
   },
   {
    "cmd": "dnstracer -s 8.8.8.8 objetivo.com",
    "desc": "Empezar desde servidor específico"
   },
   {
    "cmd": "dnstracer -c objetivo.com",
    "desc": "Modo clásico (servidor externo)"
   },
   {
    "cmd": "dnstracer -q mx objetivo.com",
    "desc": "Consultar registros MX"
   },
   {
    "cmd": "dnstracer -q ns objetivo.com",
    "desc": "Consultar registros NS"
   },
   {
    "cmd": "dnstracer -q soa objetivo.com",
    "desc": "Consultar SOA"
   },
   {
    "cmd": "dnstracer -o objetivo.com",
    "desc": "Consultas con información detallada"
   },
   {
    "cmd": "dnstracer -4 objetivo.com",
    "desc": "Usar solo IPv4"
   }
  ]
 },
 {
  "tool": "dnswalk",
  "desc": "Verificador de errores en zonas DNS",
  "commands": [
   {
    "cmd": "dnswalk objetivo.com",
    "desc": "Verificar zona completa"
   },
   {
    "cmd": "dnswalk -d objetivo.com",
    "desc": "Verificar con detalle de errores"
   },
   {
    "cmd": "dnswalk -r objetivo.com",
    "desc": "Verificar con resolución de registros"
   },
   {
    "cmd": "dnswalk -o out.txt objetivo.com",
    "desc": "Guardar resultados"
   },
   {
    "cmd": "dnswalk -i objetivo.com",
    "desc": "Modo interactivo"
   },
   {
    "cmd": "dnswalk -n objetivo.com",
    "desc": "No verificar servidores NS"
   },
   {
    "cmd": "dnswalk -x objetivo.com",
    "desc": "Verificar sin reenvío (authoritative only)"
   }
  ]
 },
 {
  "tool": "sublist3r",
  "desc": "Enumeración de subdominios usando motores de búsqueda",
  "commands": [
   {
    "cmd": "sublist3r -d objetivo.com",
    "desc": "Enumeración de subdominios"
   },
   {
    "cmd": "sublist3r -d objetivo.com -b google,bing,yahoo",
    "desc": "Buscadores específicos"
   },
   {
    "cmd": "sublist3r -d objetivo.com -o subs.txt",
    "desc": "Guardar resultados"
   },
   {
    "cmd": "sublist3r -d objetivo.com -p 80,443",
    "desc": "Puertos a verificar"
   },
   {
    "cmd": "sublist3r -d objetivo.com -t 20",
    "desc": "20 hilos"
   },
   {
    "cmd": "sublist3r -d objetivo.com -v",
    "desc": "Modo verbose"
   },
   {
    "cmd": "sublist3r -d objetivo.com -r -o subs.txt",
    "desc": "Resolver IPs de los subdominios"
   },
   {
    "cmd": "sublist3r -d objetivo.com -n",
    "desc": "No usar verificadores de puertos"
   }
  ]
 },
 {
  "tool": "findomain",
  "desc": "Subdomain discovery rápido y multiplataforma",
  "commands": [
   {
    "cmd": "findomain -t objetivo.com",
    "desc": "Enumerar subdominios"
   },
   {
    "cmd": "findomain -t objetivo.com -o",
    "desc": "Guardar en archivo"
   },
   {
    "cmd": "findomain -t objetivo.com -r",
    "desc": "Resolver los subdominios"
   },
   {
    "cmd": "findomain -t objetivo.com -a",
    "desc": "Enumeración agresiva"
   },
   {
    "cmd": "findomain -f domains.txt",
    "desc": "Múltiples dominios desde archivo"
   },
   {
    "cmd": "findomain -t objetivo.com -q",
    "desc": "Modo silencioso"
   },
   {
    "cmd": "findomain -t objetivo.com -u results.txt",
    "desc": "Salida a archivo"
   },
   {
    "cmd": "findomain -t objetivo.com -c",
    "desc": "Usar API config (Shodan, VirusTotal)"
   },
   {
    "cmd": "findomain -t objetivo.com -p 80,443",
    "desc": "Verificar puertos"
   },
   {
    "cmd": "findomain -t objetivo.com -a -o",
    "desc": "Agresivo con salida a archivo"
   },
   {
    "cmd": "findomain -t objetivo.com --threads 20",
    "desc": "20 hilos"
   }
  ]
 },
 {
  "tool": "assetfinder",
  "desc": "Enumeración pasiva de dominios y subdominios (rápida)",
  "commands": [
   {
    "cmd": "assetfinder --subs-only objetivo.com",
    "desc": "Solo subdominios (sin fuentes)"
   },
   {
    "cmd": "assetfinder objetivo.com",
    "desc": "Enumeración completa"
   },
   {
    "cmd": "assetfinder --subs-only objetivo.com > subs.txt",
    "desc": "Guardar en archivo"
   },
   {
    "cmd": "assetfinder objetivo.com | sort -u",
    "desc": "Resultados únicos ordenados"
   },
   {
    "cmd": "assetfinder -h",
    "desc": "Ayuda y opciones"
   }
  ]
 },
 {
  "tool": "waybackurls",
  "desc": "Extraer URLs históricas de la Wayback Machine",
  "commands": [
   {
    "cmd": "cat domains.txt | waybackurls",
    "desc": "Extraer URLs de múltiples dominios"
   },
   {
    "cmd": "waybackurls objetivo.com > urls.txt",
    "desc": "Guardar URLs"
   },
   {
    "cmd": "cat domains.txt | waybackurls | grep -E '\\.(php|aspx|jsp|cgi)$'",
    "desc": "Filtrar archivos dinámicos"
   },
   {
    "cmd": "cat domains.txt | waybackurls | sort -u",
    "desc": "URLs únicas"
   },
   {
    "cmd": "cat domains.txt | waybackurls | grep -iE 'token|key|secret|password'",
    "desc": "Buscar parámetros sensibles"
   },
   {
    "cmd": "cat domains.txt | waybackurls | grep -iE 'admin|login|config|backup'",
    "desc": "Buscar rutas administrativas"
   }
  ]
 },
 {
  "tool": "gau",
  "desc": "GetAllURLs - URLs históricas de múltiples repositorios públicos",
  "commands": [
   {
    "cmd": "gau objetivo.com",
    "desc": "Obtener URLs históricas"
   },
   {
    "cmd": "echo objetivo.com | gau",
    "desc": "URLs desde stdin"
   },
   {
    "cmd": "gau objetivo.com --threads 5",
    "desc": "5 hilos de concurrencia"
   },
   {
    "cmd": "gau objetivo.com --subs",
    "desc": "Incluir subdominios"
   },
   {
    "cmd": "gau objetivo.com --json",
    "desc": "Salida JSON"
   },
   {
    "cmd": "gau objetivo.com -o urls.txt",
    "desc": "Guardar en archivo"
   },
   {
    "cmd": "gau objetivo.com --verbose",
    "desc": "Modo verbose"
   },
   {
    "cmd": "gau objetivo.com --fc 404",
    "desc": "Excluir códigos de respuesta 404"
   },
   {
    "cmd": "gau objetivo.com --timeout 30",
    "desc": "Timeout por petición"
   },
   {
    "cmd": "gau --providers wayback,commoncrawl objetivo.com",
    "desc": "Proveedores específicos"
   }
  ]
 },
 {
  "tool": "photon",
  "desc": "Crawler OSINT - extrae URLs, emails, archivos, secretos de un sitio",
  "commands": [
   {
    "cmd": "photon -u https://objetivo.com",
    "desc": "Crawler básico"
   },
   {
    "cmd": "photon -u https://objetivo.com -l 3",
    "desc": "Profundidad de 3 niveles"
   },
   {
    "cmd": "photon -u https://objetivo.com -e",
    "desc": "Exportar resultados a JSON"
   },
   {
    "cmd": "photon -u https://objetivo.com -o salida",
    "desc": "Directorio de salida"
   },
   {
    "cmd": "photon -u https://objetivo.com -t 10",
    "desc": "10 hilos"
   },
   {
    "cmd": "photon -u https://objetivo.com -d 5000",
    "desc": "Delay de 5000ms entre peticiones"
   },
   {
    "cmd": "photon -u https://objetivo.com -c 50",
    "desc": "Timeout de 50s"
   },
   {
    "cmd": "photon -u https://objetivo.com --dns",
    "desc": "Resolver DNS de los hosts"
   },
   {
    "cmd": "photon -u https://objetivo.com --keys",
    "desc": "Detectar API keys"
   },
   {
    "cmd": "photon -u https://objetivo.com --only-urls",
    "desc": "Extraer solo URLs"
   },
   {
    "cmd": "photon -u https://objetivo.com --filter regex",
    "desc": "Filtrar por regex"
   },
   {
    "cmd": "photon -u https://objetivo.com -s",
    "desc": "Modo silencioso"
   },
   {
    "cmd": "photon -u https://objetivo.com --secret",
    "desc": "Buscar secretos en el HTML"
   }
  ]
 },
 {
  "tool": "metagoofil",
  "desc": "Extracción de metadatos de documentos públicos (PDF, DOC, XLS)",
  "commands": [
   {
    "cmd": "metagoofil -d objetivo.com -t pdf,doc,xls -l 200 -n 50 -o docs/ -f results.html",
    "desc": "Buscar y descargar documentos"
   },
   {
    "cmd": "metagoofil -d objetivo.com -t pdf -l 100 -n 20 -o pdfs/",
    "desc": "Solo PDFs"
   },
   {
    "cmd": "metagoofil -d objetivo.com -t doc,docx -l 100 -o docs/",
    "desc": "Solo Word"
   },
   {
    "cmd": "metagoofil -d objetivo.com -t xls,xlsx -l 100 -o xls/",
    "desc": "Solo Excel"
   },
   {
    "cmd": "metagoofil -d objetivo.com -t ppt,pptx -l 50 -o ppt/",
    "desc": "Solo PowerPoint"
   },
   {
    "cmd": "metagoofil -d objetivo.com -e 100",
    "desc": "Timeout de 100s por descarga"
   },
   {
    "cmd": "metagoofil -d objetivo.com -w",
    "desc": "Usar motor de búsqueda web"
   },
   {
    "cmd": "metagoofil -d objetivo.com -t all -l 500",
    "desc": "Todos los tipos de archivo"
   }
  ]
 },
 {
  "tool": "exiftool",
  "desc": "Lectura/escritura de metadatos EXIF en imágenes y documentos",
  "commands": [
   {
    "cmd": "exiftool foto.jpg",
    "desc": "Mostrar todos los metadatos"
   },
   {
    "cmd": "exiftool -a foto.jpg",
    "desc": "Mostrar todos los metadatos incluyendo duplicados"
   },
   {
    "cmd": "exiftool -g foto.jpg",
    "desc": "Agrupar metadatos por categoría"
   },
   {
    "cmd": "exiftool -GPS* foto.jpg",
    "desc": "Solo metadatos GPS"
   },
   {
    "cmd": "exiftool -Model -SerialNumber foto.jpg",
    "desc": "Campos específicos"
   },
   {
    "cmd": "exiftool -j foto.jpg",
    "desc": "Salida JSON"
   },
   {
    "cmd": "exiftool -csv foto.jpg",
    "desc": "Salida CSV"
   },
   {
    "cmd": "exiftool -Artist=\"John Doe\" foto.jpg",
    "desc": "Editar campo"
   },
   {
    "cmd": "exiftool -all= foto.jpg",
    "desc": "Borrar todos los metadatos"
   },
   {
    "cmd": "exiftool -r directorio/",
    "desc": "Recursivo sobre directorio"
   },
   {
    "cmd": "exiftool -ext pdf -ext doc directorio/",
    "desc": "Solo extensiones específicas"
   },
   {
    "cmd": "exiftool -p '$GPSLatitude $GPSLongitude' foto.jpg",
    "desc": "Formato personalizado"
   },
   {
    "cmd": "exiftool -T -FileName -GPSLatitude -GPSLongitude dir/",
    "desc": "Tabular campos"
   },
   {
    "cmd": "exiftool -overwrite_original foto.jpg",
    "desc": "Sobrescribir sin copia de backup"
   },
   {
    "cmd": "exiftool -DateTimeOriginal='2024:01:01 00:00:00' foto.jpg",
    "desc": "Modificar fecha"
   }
  ]
 },
 {
  "tool": "sherlock",
  "desc": "Buscar nombres de usuario en más de 300 redes sociales",
  "commands": [
   {
    "cmd": "sherlock username",
    "desc": "Buscar usuario en todas las redes"
   },
   {
    "cmd": "sherlock -v username",
    "desc": "Modo verbose"
   },
   {
    "cmd": "sherlock --tor username",
    "desc": "Buscar a través de Tor"
   },
   {
    "cmd": "sherlock --print-found username",
    "desc": "Solo resultados encontrados"
   },
   {
    "cmd": "sherlock -o results.txt username1 username2",
    "desc": "Guardar en archivo con varios usuarios"
   },
   {
    "cmd": "sherlock --timeout 30 username",
    "desc": "Timeout de 30s por petición"
   },
   {
    "cmd": "sherlock --csv results.csv username",
    "desc": "Salida CSV"
   },
   {
    "cmd": "sherlock --nsfw username",
    "desc": "Incluir sitios NSFW"
   },
   {
    "cmd": "sherlock --site twitter username",
    "desc": "Buscar en sitio específico"
   },
   {
    "cmd": "sherlock --unique-tor username",
    "desc": "Con Tor sin verificación DNS"
   },
   {
    "cmd": "sherlock -r 5 username",
    "desc": "Reintentos"
   },
   {
    "cmd": "sherlock --no-color username",
    "desc": "Sin colores"
   }
  ]
 },
 {
  "tool": "instaloader",
  "desc": "Descarga y OSINT de Instagram (perfiles, stories, hashtags)",
  "commands": [
   {
    "cmd": "instaloader profile username",
    "desc": "Descargar perfil completo"
   },
   {
    "cmd": "instaloader --stories username",
    "desc": "Descargar stories"
   },
   {
    "cmd": "instaloader --highlights username",
    "desc": "Descargar destacados"
   },
   {
    "cmd": "instaloader --igtv username",
    "desc": "Descargar IGTV"
   },
   {
    "cmd": "instaloader --login user --password pass username",
    "desc": "Login para contenido privado"
   },
   {
    "cmd": "instaloader --comments username",
    "desc": "Descargar comentarios"
   },
   {
    "cmd": "instaloader --tag hashtag",
    "desc": "Descargar por hashtag"
   },
   {
    "cmd": "instaloader --profile-metadata-json username",
    "desc": "Metadatos del perfil en JSON"
   },
   {
    "cmd": "instaloader --count 50 username",
    "desc": "Limitar a 50 publicaciones"
   },
   {
    "cmd": "instaloader --fast-update username",
    "desc": "Actualización incremental"
   },
   {
    "cmd": "instaloader -f following.txt username",
    "desc": "Seguir lista de usuarios"
   },
   {
    "cmd": "instaloader --quiet username",
    "desc": "Modo silencioso"
   }
  ]
 },
 {
  "tool": "emailharvester",
  "desc": "Recolección de direcciones de correo desde buscadores",
  "commands": [
   {
    "cmd": "emailharvester -d objetivo.com",
    "desc": "Buscar emails del dominio"
   },
   {
    "cmd": "emailharvester -d objetivo.com -b google",
    "desc": "Buscar solo en Google"
   },
   {
    "cmd": "emailharvester -d objetivo.com -b bing",
    "desc": "Buscar solo en Bing"
   },
   {
    "cmd": "emailharvester -d objetivo.com -b yahoo",
    "desc": "Buscar solo en Yahoo"
   },
   {
    "cmd": "emailharvester -d objetivo.com -l 500",
    "desc": "Limitar resultados"
   },
   {
    "cmd": "emailharvester -d objetivo.com -s resultado.txt",
    "desc": "Guardar en archivo"
   },
   {
    "cmd": "emailharvester -d objetivo.com -e 8.8.8.8",
    "desc": "DNS server específico"
   },
   {
    "cmd": "emailharvester -d objetivo.com -b all",
    "desc": "Todas las fuentes"
   }
  ]
 },
 {
  "tool": "linkedin2username",
  "desc": "Generar wordlists de usernames desde LinkedIn",
  "commands": [
   {
    "cmd": "linkedin2username -c user:pass -n company -o out/",
    "desc": "Extraer empleados de una compañía"
   },
   {
    "cmd": "linkedin2username -c user:pass -n company -s",
    "desc": "Con salario (no recomendado)"
   },
   {
    "cmd": "linkedin2username -c user:pass -n company -d",
    "desc": "Depurar/verbose"
   },
   {
    "cmd": "linkedin2username -c user:pass -n company -f",
    "desc": "Solo fuerza bruta de formato"
   },
   {
    "cmd": "linkedin2username -c user:pass -n company -x",
    "desc": "Solo XLSX"
   },
   {
    "cmd": "linkedin2username -c user:pass -n company -g",
    "desc": "Guardar en archivos separados"
   }
  ]
 },
 {
  "tool": "tookie-osint",
  "desc": "OSINT de cookies y perfiles de usuario",
  "commands": [
   {
    "cmd": "tookie-osint -u target --show-id",
    "desc": "Mostrar IDs de usuario"
   },
   {
    "cmd": "tookie-osint -u target --ip-lookup",
    "desc": "Resolver IP"
   },
   {
    "cmd": "tookie-osint -u target -s",
    "desc": "Modo silencioso"
   },
   {
    "cmd": "tookie-osint -u target --extra",
    "desc": "Búsqueda extra de perfiles"
   },
   {
    "cmd": "tookie-osint -u target --json out.json",
    "desc": "Salida JSON"
   },
   {
    "cmd": "tookie-osint -u target --all",
    "desc": "Todas las verificaciones"
   }
  ]
 },
 {
  "tool": "twofi",
  "desc": "Generar wordlists desde tweets (Twitter feed analysis)",
  "commands": [
   {
    "cmd": "twofi -t twitter.txt -o wordlist.txt",
    "desc": "Generar wordlist desde tweets"
   },
   {
    "cmd": "twofi -t twitter.txt -o wl.txt -c 5",
    "desc": "Palabras con 5+ caracteres"
   },
   {
    "cmd": "twofi -t twitter.txt -o wl.txt -f 10",
    "desc": "Palabras con frecuencia 10+"
   },
   {
    "cmd": "twofi -t twitter.txt -o wl.txt -s",
    "desc": "Ordenar por frecuencia"
   },
   {
    "cmd": "twofi -t twitter.txt -o wl.txt -l 3",
    "desc": "Palabras de 3+ letras"
   },
   {
    "cmd": "twofi -t twitter.txt -o wl.txt -u",
    "desc": "Solo palabras únicas"
   }
  ]
 },
 {
  "tool": "ct-exposer",
  "desc": "Descubrir subdominios desde logs de Certificate Transparency",
  "commands": [
   {
    "cmd": "ct-exposer -d objetivo.com",
    "desc": "Buscar subdominios en CT logs"
   },
   {
    "cmd": "ct-exposer -d objetivo.com -o subs.txt",
    "desc": "Guardar resultados"
   },
   {
    "cmd": "ct-exposer -d objetivo.com -p 80,443",
    "desc": "Verificar puertos"
   },
   {
    "cmd": "ct-exposer -d objetivo.com -r",
    "desc": "Resolver IPs"
   },
   {
    "cmd": "ct-exposer -d objetivo.com -v",
    "desc": "Verbose"
   },
   {
    "cmd": "ct-exposer -d objetivo.com -x",
    "desc": "Usar proxy"
   },
   {
    "cmd": "ct-exposer -d objetivo.com -w 20",
    "desc": "20 workers"
   }
  ]
 },
 {
  "tool": "certgraph",
  "desc": "Descubrir dominios mediante la cadena de certificados TLS",
  "commands": [
   {
    "cmd": "certgraph -d objetivo.com",
    "desc": "Grafo de certificados del dominio"
   },
   {
    "cmd": "certgraph -d objetivo.com -o out.txt",
    "desc": "Guardar resultados"
   },
   {
    "cmd": "certgraph -d objetivo.com -v",
    "desc": "Verbose"
   },
   {
    "cmd": "certgraph -d objetivo.com -x",
    "desc": "Solo certificados expirados"
   },
   {
    "cmd": "certgraph -d objetivo.com -a",
    "desc": "Mostrar todos los certificados"
   },
   {
    "cmd": "certgraph -d objetivo.com -j",
    "desc": "Salida JSON"
   }
  ]
 },
 {
  "tool": "mxcheck",
  "desc": "Auditar servidores de correo: DNS records, TLS, open relay",
  "commands": [
   {
    "cmd": "mxcheck -d objetivo.com",
    "desc": "Auditoría completa del mail server"
   },
   {
    "cmd": "mxcheck -d objetivo.com -c 587",
    "desc": "Puerto de conexión SMTP"
   },
   {
    "cmd": "mxcheck -d objetivo.com --no-tls",
    "desc": "Desactivar verificación TLS"
   },
   {
    "cmd": "mxcheck -d objetivo.com -a",
    "desc": "Análisis de autenticación DMARC/SPF"
   },
   {
    "cmd": "mxcheck -d objetivo.com -p",
    "desc": "Escaneo de puertos 25/465/587"
   },
   {
    "cmd": "mxcheck -d objetivo.com -j",
    "desc": "Salida JSON"
   },
   {
    "cmd": "mxcheck -d objetivo.com -v",
    "desc": "Verbose"
   },
   {
    "cmd": "mxcheck -d objetivo.com --relay-test",
    "desc": "Comprobar open relay"
   }
  ]
 },
 {
  "tool": "whois",
  "desc": "Consulta de información de registro de dominios e IPs",
  "commands": [
   {
    "cmd": "whois objetivo.com",
    "desc": "Información WHOIS del dominio"
   },
   {
    "cmd": "whois 8.8.8.8",
    "desc": "Información WHOIS de IP"
   },
   {
    "cmd": "whois -h whois.arin.net 8.8.8.8",
    "desc": "Consultar ARIN específicamente"
   },
   {
    "cmd": "whois -h whois.ripe.net 195.0.0.1",
    "desc": "Consultar RIPE (Europa)"
   },
   {
    "cmd": "whois -h whois.lacnic.net 200.0.0.1",
    "desc": "Consultar LACNIC (LatAm)"
   },
   {
    "cmd": "whois -h whois.apnic.net 1.1.1.1",
    "desc": "Consultar APNIC (Asia-Pacífico)"
   },
   {
    "cmd": "whois -H objetivo.com",
    "desc": "Ocultar descargo de responsabilidad"
   },
   {
    "cmd": "whois -a objetivo.com",
    "desc": "Búsqueda en todos los registros"
   },
   {
    "cmd": "whois -p 4343 objetivo.com",
    "desc": "Puerto específico"
   },
   {
    "cmd": "whois -T dom objetivo.com",
    "desc": "Tipo de objeto: dominio"
   }
  ]
 },
 {
  "tool": "dig",
  "desc": "Herramienta de consulta DNS avanzada",
  "commands": [
   {
    "cmd": "dig objetivo.com",
    "desc": "Consulta A record por defecto"
   },
   {
    "cmd": "dig objetivo.com ANY",
    "desc": "Todos los registros"
   },
   {
    "cmd": "dig objetivo.com A",
    "desc": "Solo registros A"
   },
   {
    "cmd": "dig objetivo.com AAAA",
    "desc": "Solo IPv6"
   },
   {
    "cmd": "dig objetivo.com MX",
    "desc": "Servidores de correo"
   },
   {
    "cmd": "dig objetivo.com NS",
    "desc": "Servidores de nombres"
   },
   {
    "cmd": "dig objetivo.com TXT",
    "desc": "Registros TXT (SPF, DKIM)"
   },
   {
    "cmd": "dig objetivo.com CNAME",
    "desc": "Alias CNAME"
   },
   {
    "cmd": "dig objetivo.com SOA",
    "desc": "Registro SOA"
   },
   {
    "cmd": "dig objetivo.com SRV",
    "desc": "Registros SRV"
   },
   {
    "cmd": "dig +short objetivo.com",
    "desc": "Salida corta"
   },
   {
    "cmd": "dig +trace objetivo.com",
    "desc": "Traza completa desde la raíz"
   },
   {
    "cmd": "dig +noall +answer objetivo.com",
    "desc": "Solo la respuesta"
   },
   {
    "cmd": "dig @8.8.8.8 objetivo.com",
    "desc": "Consultar a un resolver específico"
   },
   {
    "cmd": "dig axfr objetivo.com @ns1.objetivo.com",
    "desc": "Transferencia de zona"
   },
   {
    "cmd": "dig -x 8.8.8.8",
    "desc": "Reverse lookup"
   },
   {
    "cmd": "dig +dnssec objetivo.com",
    "desc": "Verificación DNSSEC"
   },
   {
    "cmd": "dig +tcp objetivo.com",
    "desc": "Forzar TCP"
   },
   {
    "cmd": "dig -p 5353 @127.0.0.1 objetivo.com",
    "desc": "Puerto DNS personalizado"
   },
   {
    "cmd": "dig objetivo.com +noall +authority +additional",
    "desc": "Autoridad y adicional"
   }
  ]
 },
 {
  "tool": "nslookup",
  "desc": "Consulta DNS clásica interactiva",
  "commands": [
   {
    "cmd": "nslookup objetivo.com",
    "desc": "Consulta básica"
   },
   {
    "cmd": "nslookup -type=any objetivo.com",
    "desc": "Todos los tipos"
   },
   {
    "cmd": "nslookup -type=mx objetivo.com",
    "desc": "Registros MX"
   },
   {
    "cmd": "nslookup -type=txt objetivo.com",
    "desc": "Registros TXT"
   },
   {
    "cmd": "nslookup -type=ns objetivo.com",
    "desc": "Servidores NS"
   },
   {
    "cmd": "nslookup 8.8.8.8",
    "desc": "Reverse lookup"
   },
   {
    "cmd": "nslookup -server 8.8.8.8 objetivo.com",
    "desc": "Resolver específico"
   },
   {
    "cmd": "nslookup -port=5353 objetivo.com",
    "desc": "Puerto personalizado"
   },
   {
    "cmd": "nslookup -timeout=5 objetivo.com",
    "desc": "Timeout de 5 segundos"
   },
   {
    "cmd": "nslookup -debug objetivo.com",
    "desc": "Modo debug"
   }
  ]
 },
 {
  "tool": "host",
  "desc": "Consulta DNS simple",
  "commands": [
   {
    "cmd": "host objetivo.com",
    "desc": "Consulta A record"
   },
   {
    "cmd": "host -t mx objetivo.com",
    "desc": "Registros MX"
   },
   {
    "cmd": "host -t txt objetivo.com",
    "desc": "Registros TXT"
   },
   {
    "cmd": "host -t ns objetivo.com",
    "desc": "Servidores NS"
   },
   {
    "cmd": "host -t any objetivo.com",
    "desc": "Cualquier registro"
   },
   {
    "cmd": "host -a objetivo.com",
    "desc": "Todos los registros verboso"
   },
   {
    "cmd": "host 8.8.8.8",
    "desc": "Reverse lookup"
   },
   {
    "cmd": "host -v objetivo.com",
    "desc": "Modo verbose"
   },
   {
    "cmd": "host -C objetivo.com",
    "desc": "Verificar SOA autoritativo"
   },
   {
    "cmd": "host -T objetivo.com",
    "desc": "Usar TCP"
   },
   {
    "cmd": "host -W 5 objetivo.com",
    "desc": "Timeout de 5 segundos"
   },
   {
    "cmd": "host objetivo.com 8.8.8.8",
    "desc": "Con resolver específico"
   }
  ]
 },
 {
  "tool": "fping",
  "desc": "Ping masivo y rápido de múltiples hosts",
  "commands": [
   {
    "cmd": "fping 192.168.1.1 192.168.1.2",
    "desc": "Ping de hosts específicos"
   },
   {
    "cmd": "fping -g 192.168.1.0/24",
    "desc": "Ping de subred completa"
   },
   {
    "cmd": "fping -g 192.168.1.1 192.168.1.254",
    "desc": "Rango de IPs"
   },
   {
    "cmd": "fping -a -g 192.168.1.0/24",
    "desc": "Mostrar solo hosts vivos"
   },
   {
    "cmd": "fping -u -g 192.168.1.0/24",
    "desc": "Mostrar solo hosts caídos"
   },
   {
    "cmd": "fping -f hosts.txt",
    "desc": "Ping de lista en archivo"
   },
   {
    "cmd": "fping -c 5 192.168.1.1",
    "desc": "5 pings por host"
   },
   {
    "cmd": "fping -i 10 192.168.1.0/24",
    "desc": "Intervalo de 10ms"
   },
   {
    "cmd": "fping -t 500 192.168.1.0/24",
    "desc": "Timeout de 500ms"
   },
   {
    "cmd": "fping -r 2 192.168.1.1",
    "desc": "2 reintentos"
   },
   {
    "cmd": "fping -e 192.168.1.0/24",
    "desc": "Mostrar tiempo de respuesta"
   },
   {
    "cmd": "fping -q 192.168.1.0/24",
    "desc": "Modo silencioso (solo exit status)"
   },
   {
    "cmd": "fping -s 192.168.1.0/24",
    "desc": "Estadísticas finales"
   }
  ]
 },
 {
  "tool": "arping",
  "desc": "Ping ARP de capa 2 para descubrir hosts locales",
  "commands": [
   {
    "cmd": "arping 192.168.1.1",
    "desc": "Ping ARP básico"
   },
   {
    "cmd": "arping -I eth0 192.168.1.1",
    "desc": "Interfaz específica"
   },
   {
    "cmd": "arping -c 5 192.168.1.1",
    "desc": "5 peticiones"
   },
   {
    "cmd": "arping -b 192.168.1.1",
    "desc": "Modo broadcast"
   },
   {
    "cmd": "arping -D 192.168.1.1",
    "desc": "Detección de duplicados (DAD)"
   },
   {
    "cmd": "arping -U 192.168.1.1",
    "desc": "Modo unsolicited ARP"
   },
   {
    "cmd": "arping -s 192.168.1.100 192.168.1.1",
    "desc": "IP origen específica"
   },
   {
    "cmd": "arping -t 3 192.168.1.1",
    "desc": "Timeout de 3 segundos"
   },
   {
    "cmd": "arping -f 192.168.1.1",
    "desc": "Parar en la primera respuesta"
   },
   {
    "cmd": "arping -w 10 192.168.1.1",
    "desc": "Esperar 10 segundos"
   },
   {
    "cmd": "arping -q 192.168.1.1",
    "desc": "Modo silencioso"
   }
  ]
 },
 {
  "tool": "netdiscover",
  "desc": "Descubrimiento de hosts en red local por ARP",
  "commands": [
   {
    "cmd": "netdiscover -r 192.168.1.0/24",
    "desc": "Descubrir hosts en la subred"
   },
   {
    "cmd": "netdiscover -r 192.168.1.0/24 -i eth0",
    "desc": "Con interfaz específica"
   },
   {
    "cmd": "netdiscover -p",
    "desc": "Modo pasivo (solo escuchar)"
   },
   {
    "cmd": "netdiscover -c 50",
    "desc": "50 peticiones por host"
   },
   {
    "cmd": "netdiscover -t 500",
    "desc": "Timeout de 500ms"
   },
   {
    "cmd": "netdiscover -P -r 192.168.1.0/24",
    "desc": "Imprimir en formato legible"
   },
   {
    "cmd": "netdiscover -L -r 192.168.1.0/24",
    "desc": "Log en archivo"
   },
   {
    "cmd": "netdiscover -f -r 192.168.1.0/24",
    "desc": "Escaneo rápido"
   },
   {
    "cmd": "netdiscover -S -r 192.168.1.0/24",
    "desc": "Sin sleep entre peticiones"
   },
   {
    "cmd": "netdiscover -N -r 192.168.1.0/24",
    "desc": "Sin resolución DNS"
   },
   {
    "cmd": "netdiscover -m 192.168.1.1",
    "desc": "Especificar MAC"
   },
   {
    "cmd": "netdiscover -l hosts.txt",
    "desc": "Lista de hosts desde archivo"
   },
   {
    "cmd": "netdiscover -F 192.168.1.0/24",
    "desc": "Modo full (usuario + pass)"
   }
  ]
 },
 {
  "tool": "arp-scan",
  "desc": "Escáner ARP avanzado con detección de fabricante",
  "commands": [
   {
    "cmd": "arp-scan --localnet",
    "desc": "Escanear red local"
   },
   {
    "cmd": "arp-scan 192.168.1.0/24",
    "desc": "Escanear subred específica"
   },
   {
    "cmd": "arp-scan -I eth0 192.168.1.0/24",
    "desc": "Interfaz específica"
   },
   {
    "cmd": "arp-scan -r 192.168.1.1-192.168.1.254",
    "desc": "Rango de IPs"
   },
   {
    "cmd": "arp-scan -g 192.168.1.0/24",
    "desc": "Detección de fabricantes (OUI)"
   },
   {
    "cmd": "arp-scan -x 192.168.1.0/24",
    "desc": "Gratuitous ARP para detectar duplicados"
   },
   {
    "cmd": "arp-scan -O 192.168.1.0/24",
    "desc": "Detección fingerprint de OS"
   },
   {
    "cmd": "arp-scan -t 100 192.168.1.0/24",
    "desc": "Timeout de 100ms"
   },
   {
    "cmd": "arp-scan -b 4096 -r 192.168.1.0/24",
    "desc": "Ráfaga de 4096"
   },
   {
    "cmd": "arp-scan --retry=3 192.168.1.0/24",
    "desc": "3 reintentos"
   },
   {
    "cmd": "arp-scan -l -q",
    "desc": "Red local silencioso"
   },
   {
    "cmd": "arp-scan -v 192.168.1.0/24",
    "desc": "Verbose"
   }
  ]
 },
 {
  "tool": "hping3",
  "desc": "Herramienta de generación y análisis de paquetes personalizados",
  "commands": [
   {
    "cmd": "hping3 -S 192.168.1.10",
    "desc": "SYN scan"
   },
   {
    "cmd": "hping3 -S -p 80 192.168.1.10",
    "desc": "SYN scan de puerto específico"
   },
   {
    "cmd": "hping3 -S -p 443 -c 5 192.168.1.10",
    "desc": "5 paquetes SYN"
   },
   {
    "cmd": "hping3 -S -p 80 --scan 1-1024 192.168.1.10",
    "desc": "Escaneo de rango de puertos"
   },
   {
    "cmd": "hping3 -S -p 80 -s 53 192.168.1.10",
    "desc": "Puerto origen 53"
   },
   {
    "cmd": "hping3 -F -P -U 192.168.1.10",
    "desc": "Paquete con flags FIN/PSH/URG"
   },
   {
    "cmd": "hping3 -1 192.168.1.10",
    "desc": "ICMP echo request"
   },
   {
    "cmd": "hping3 -2 -p 53 192.168.1.10",
    "desc": "UDP scan de puerto 53"
   },
   {
    "cmd": "hping3 -A -p 80 192.168.1.10",
    "desc": "ACK scan (mapeo de firewall)"
   },
   {
    "cmd": "hping3 -R -p 80 192.168.1.10",
    "desc": "RST scan"
   },
   {
    "cmd": "hping3 --udp -2 -c 3 -p 161 192.168.1.10",
    "desc": "UDP a SNMP"
   },
   {
    "cmd": "hping3 -S -p 80 -f 192.168.1.10",
    "desc": "Fragmentar paquetes"
   },
   {
    "cmd": "hping3 -S -p 80 -d 100 192.168.1.10",
    "desc": "Paquete de 100 bytes"
   },
   {
    "cmd": "hping3 -S -p 80 -w 64 192.168.1.10",
    "desc": "Tamaño de ventana 64"
   },
   {
    "cmd": "hping3 -S -p 80 --ttl 5 192.168.1.10",
    "desc": "TTL de 5"
   },
   {
    "cmd": "hping3 -S -p 80 --traceroute 192.168.1.10",
    "desc": "Traceroute con SYN"
   },
   {
    "cmd": "hping3 -S -p 80 --flood 192.168.1.10",
    "desc": "Inundación SYN (DoS)"
   },
   {
    "cmd": "hping3 -S -p 80 --rand-source 192.168.1.10",
    "desc": "IP origen aleatoria"
   },
   {
    "cmd": "hping3 -c 100000 -d 120 -S -w 64 -p 21 --flood --rand-source TARGET",
    "desc": "Ataque SYN flood avanzado"
   },
   {
    "cmd": "hping3 -S -p 22 --spoof 192.168.1.1 192.168.1.10",
    "desc": "Spoofing de IP"
   },
   {
    "cmd": "hping3 -8 -S -p 80 192.168.1.10",
    "desc": "Modo scan de puertos con listener"
   },
   {
    "cmd": "hping3 -c 1 -S -p 80 -E payload.txt 192.168.1.10",
    "desc": "Enviar payload desde archivo"
   },
   {
    "cmd": "hping3 -c 1 -2 -p 53 -d 100 192.168.1.10",
    "desc": "Payload UDP"
   },
   {
    "cmd": "hping3 -I eth0 -S -p 80 192.168.1.10",
    "desc": "Interfaz específica"
   }
  ]
 },
 {
  "tool": "p0f",
  "desc": "Fingerprinting pasivo de sistemas operativos por TCP/IP",
  "commands": [
   {
    "cmd": "p0f -i eth0",
    "desc": "Análisis pasivo en la interfaz"
   },
   {
    "cmd": "p0f -i eth0 -p",
    "desc": "Modo promiscuo"
   },
   {
    "cmd": "p0f -i eth0 -o results.txt",
    "desc": "Guardar resultados"
   },
   {
    "cmd": "p0f -i eth0 -l",
    "desc": "Modo lista (solo resumen)"
   },
   {
    "cmd": "p0f -i any",
    "desc": "Todas las interfaces"
   },
   {
    "cmd": "p0f -i eth0 -C",
    "desc": "Colores"
   },
   {
    "cmd": "p0f -i eth0 -s capture.pcap",
    "desc": "Analizar pcap offline"
   },
   {
    "cmd": "p0f -i eth0 -x",
    "desc": "Solo fingerprint de HTTP"
   },
   {
    "cmd": "p0f -i eth0 -c",
    "desc": "Capturar sin imprimir"
   },
   {
    "cmd": "p0f -i eth0 -S",
    "desc": "Sin resolución de nombres"
   },
   {
    "cmd": "p0f -i eth0 -q",
    "desc": "Modo silencioso"
   },
   {
    "cmd": "p0f -i eth0 -O new.rules",
    "desc": "Guardar reglas aprendidas"
   }
  ]
 },
 {
  "tool": "0trace",
  "desc": "Traceroute de capa 4 (TCP) a través de firewalls",
  "commands": [
   {
    "cmd": "0trace.sh 192.168.1.10",
    "desc": "Traceroute TCP al objetivo"
   },
   {
    "cmd": "0trace.sh -p 443 192.168.1.10",
    "desc": "Puerto específico"
   },
   {
    "cmd": "0trace.sh -s 53 192.168.1.10",
    "desc": "Puerto origen 53"
   },
   {
    "cmd": "0trace.sh -i eth0 192.168.1.10",
    "desc": "Interfaz específica"
   },
   {
    "cmd": "0trace.sh -d 1 192.168.1.10",
    "desc": "Delay de 1 segundo"
   },
   {
    "cmd": "0trace.sh -t 10 192.168.1.10",
    "desc": "Timeout de 10 segundos"
   },
   {
    "cmd": "0trace.sh -v 192.168.1.10",
    "desc": "Verbose"
   }
  ]
 },
 {
  "tool": "intrace",
  "desc": "Traceroute TCP sin requerir puertos abiertos",
  "commands": [
   {
    "cmd": "intrace -i eth0 -p 80 objetivo.com",
    "desc": "Traceroute por puerto 80"
   },
   {
    "cmd": "intrace -i eth0 -p 443 -v objetivo.com",
    "desc": "Verbose HTTPS"
   },
   {
    "cmd": "intrace -i eth0 -p 22 objetivo.com",
    "desc": "Traceroute SSH"
   },
   {
    "cmd": "intrace -i eth0 -p 53 objetivo.com",
    "desc": "Traceroute DNS"
   },
   {
    "cmd": "intrace -i eth0 -p 445 objetivo.com",
    "desc": "Traceroute SMB"
   },
   {
    "cmd": "intrace -i eth0 -p 25 -T 3 objetivo.com",
    "desc": "Traceroute SMTP timeout 3"
   }
  ]
 },
 {
  "tool": "autorecon",
  "desc": "Herramienta de reconocimiento automatizado multi-herramienta",
  "commands": [
   {
    "cmd": "autorecon 192.168.1.10",
    "desc": "Reconocimiento completo del host"
   },
   {
    "cmd": "autorecon -t 192.168.1.0/24",
    "desc": "Múltiples targets"
   },
   {
    "cmd": "autorecon --nmap",
    "desc": "Solo con Nmap"
   },
   {
    "cmd": "autorecon --nmap-ports 1-10000",
    "desc": "Rango de puertos custom"
   },
   {
    "cmd": "autorecon -o /tmp/recon",
    "desc": "Directorio de salida"
   },
   {
    "cmd": "autorecon --single-target",
    "desc": "Modo mono-objetivo"
   },
   {
    "cmd": "autorecon --only-scans-dir",
    "desc": "Solo guardar escaneos"
   },
   {
    "cmd": "autorecon --dirbuster-tool feroxbuster",
    "desc": "Tool de fuzzing"
   },
   {
    "cmd": "autorecon --skip-scans",
    "desc": "Saltar fase de escaneo"
   },
   {
    "cmd": "autorecon --disable-servers",
    "desc": "Desactivar servidores HTTP"
   },
   {
    "cmd": "autorecon --threads 20",
    "desc": "20 hilos"
   },
   {
    "cmd": "autorecon --port 8080",
    "desc": "Puerto de servicios locales"
   },
   {
    "cmd": "autorecon --heuristic",
    "desc": "Enumeración heurística de puertos"
   },
   {
    "cmd": "autorecon --wait 300",
    "desc": "Esperar 300s por escaneo"
   },
   {
    "cmd": "autorecon --dns-server 8.8.8.8",
    "desc": "DNS server"
   },
   {
    "cmd": "autorecon -vv",
    "desc": "Verbose extremo"
   }
  ]
 },
 {
  "tool": "legion",
  "desc": "Herramienta GUI de reconocimiento automatizado (SPARTA fork)",
  "commands": [
   {
    "cmd": "legion",
    "desc": "Abrir interfaz gráfica"
   },
   {
    "cmd": "legion --no-scan",
    "desc": "Abrir sin iniciar escaneo"
   },
   {
    "cmd": "legion -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "urlcrazy",
  "desc": "Generar variaciones tipográficas y homógrafos de dominios",
  "commands": [
   {
    "cmd": "urlcrazy objetivo.com",
    "desc": "Generar variaciones del dominio"
   },
   {
    "cmd": "urlcrazy -p objetivo.com",
    "desc": "Modo pasivo (solo generación)"
   },
   {
    "cmd": "urlcrazy -t objetivo.com",
    "desc": "Modo texto"
   },
   {
    "cmd": "urlcrazy -n objetivo.com",
    "desc": "Mostrar DNS disponible"
   },
   {
    "cmd": "urlcrazy -s objetivo.com",
    "desc": "Salida a archivo"
   },
   {
    "cmd": "urlcrazy -c objetivo.com",
    "desc": "Solo typosquatting"
   },
   {
    "cmd": "urlcrazy -l objetivo.com",
    "desc": "Solo homógrafos"
   },
   {
    "cmd": "urlcrazy -w objetivo.com",
    "desc": "Mostrar whois de variantes"
   },
   {
    "cmd": "urlcrazy -v objetivo.com",
    "desc": "Verbose"
   },
   {
    "cmd": "urlcrazy -h",
    "desc": "Ayuda detallada"
   }
  ]
 },
 {
  "tool": "bing-ip2hosts",
  "desc": "Descubrir hosts en un rango de IPs usando Bing",
  "commands": [
   {
    "cmd": "bing-ip2hosts 192.168.1.0/24",
    "desc": "Buscar hosts de la subred"
   },
   {
    "cmd": "bing-ip2hosts -o out.txt 192.168.1.0/24",
    "desc": "Guardar en archivo"
   },
   {
    "cmd": "bing-ip2hosts -v 192.168.1.0/24",
    "desc": "Verbose"
   },
   {
    "cmd": "bing-ip2hosts -s 10 192.168.1.0/24",
    "desc": "Delay de 10 segundos"
   },
   {
    "cmd": "bing-ip2hosts -p 100 192.168.1.0/24",
    "desc": "Paginación de 100"
   },
   {
    "cmd": "bing-ip2hosts -q 192.168.1.0/24",
    "desc": "Modo silencioso"
   }
  ]
 },
 {
  "tool": "cloud-enum",
  "desc": "Enumerar buckets de almacenamiento cloud (AWS, Azure, GCP, DigitalOcean)",
  "commands": [
   {
    "cmd": "cloud_enum -k empresa",
    "desc": "Enumerar buckets con palabra clave"
   },
   {
    "cmd": "cloud_enum -k empresa -l out.txt",
    "desc": "Guardar resultados"
   },
   {
    "cmd": "cloud_enum -k empresa -a",
    "desc": "Solo AWS"
   },
   {
    "cmd": "cloud_enum -k empresa -z",
    "desc": "Solo Azure"
   },
   {
    "cmd": "cloud_enum -k empresa -g",
    "desc": "Solo GCP"
   },
   {
    "cmd": "cloud_enum -k empresa -d",
    "desc": "Solo DigitalOcean"
   },
   {
    "cmd": "cloud_enum -k empresa -k empresa2",
    "desc": "Múltiples palabras clave"
   },
   {
    "cmd": "cloud_enum -k empresa -f wordlist.txt",
    "desc": "Wordlist de keywords"
   },
   {
    "cmd": "cloud_enum -k empresa -p proxy:8080",
    "desc": "Usar proxy"
   },
   {
    "cmd": "cloud_enum -k empresa -t 20",
    "desc": "20 hilos"
   },
   {
    "cmd": "cloud_enum -k empresa -r",
    "desc": "Probar con DNS"
   }
  ]
 },
 {
  "tool": "cloudbrute",
  "desc": "Descubrir infraestructura cloud de una empresa (buckets, apps)",
  "commands": [
   {
    "cmd": "cloudbrute -d objetivo.com -k empresa -m storage",
    "desc": "Enumerar storage"
   },
   {
    "cmd": "cloudbrute -d objetivo.com -k empresa -m app",
    "desc": "Enumerar apps cloud"
   },
   {
    "cmd": "cloudbrute -d objetivo.com -k empresa -m vm",
    "desc": "Enumerar VMs"
   },
   {
    "cmd": "cloudbrute -d objetivo.com -k empresa -m database",
    "desc": "Enumerar BD"
   },
   {
    "cmd": "cloudbrute -d objetivo.com -k empresa -m all",
    "desc": "Todos los módulos"
   },
   {
    "cmd": "cloudbrute -d objetivo.com -k empresa -p providers.txt",
    "desc": "Providers específicos"
   },
   {
    "cmd": "cloudbrute -d objetivo.com -k empresa -o out.txt",
    "desc": "Salida a archivo"
   },
   {
    "cmd": "cloudbrute -d objetivo.com -k empresa -t 30",
    "desc": "30 hilos"
   },
   {
    "cmd": "cloudbrute -d objetivo.com -k empresa -w wordlist.txt",
    "desc": "Wordlist custom"
   },
   {
    "cmd": "cloudbrute -d objetivo.com -k empresa -s",
    "desc": "Modo silencioso"
   }
  ]
 },
 {
  "tool": "azurehound",
  "desc": "BloodHound para Azure AD - mapeo de relaciones",
  "commands": [
   {
    "cmd": "azurehound -t 'AZTenantID' -o out.json",
    "desc": "Recolectar datos de tenant"
   },
   {
    "cmd": "azurehound -t tenant -u user@domain -p pass -o out.json",
    "desc": "Con credenciales"
   },
   {
    "cmd": "azurehound -t tenant -c azure -o out.json",
    "desc": "Solo Azure"
   },
   {
    "cmd": "azurehound -t tenant -c entra -o out.json",
    "desc": "Solo Entra ID"
   },
   {
    "cmd": "azurehound -t tenant -c all -o out.json",
    "desc": "Todo"
   },
   {
    "cmd": "azurehound -t tenant --access-token TOKEN -o out.json",
    "desc": "Con token"
   },
   {
    "cmd": "azurehound -t tenant -o out.json -v",
    "desc": "Verbose"
   },
   {
    "cmd": "azurehound -t tenant --verify -o out.json",
    "desc": "Verificar credenciales"
   }
  ]
 },
 {
  "tool": "shodan",
  "desc": "CLI de Shodan: búsqueda de dispositivos expuestos en internet",
  "commands": [
   {
    "cmd": "shodan init API_KEY",
    "desc": "Inicializar con API key"
   },
   {
    "cmd": "shodan search 'port:22 country:ES'",
    "desc": "Buscar SSH en España"
   },
   {
    "cmd": "shodan search 'product:nginx'",
    "desc": "Buscar Nginx"
   },
   {
    "cmd": "shodan search 'apache city:Madrid'",
    "desc": "Buscar Apache en Madrid"
   },
   {
    "cmd": "shodan search 'vuln:ms17-010'",
    "desc": "Buscar vulnerables a EternalBlue"
   },
   {
    "cmd": "shodan search --fields ip_str,port,org 'port:3389'",
    "desc": "Campos específicos"
   },
   {
    "cmd": "shodan search --limit 100 'port:443'",
    "desc": "Limitar a 100 resultados"
   },
   {
    "cmd": "shodan host 8.8.8.8",
    "desc": "Información de una IP"
   },
   {
    "cmd": "shodan host --history 8.8.8.8",
    "desc": "Historial de la IP"
   },
   {
    "cmd": "shodan count 'port:23 country:BR'",
    "desc": "Contar resultados"
   },
   {
    "cmd": "shodan stats 'port:80' product",
    "desc": "Estadísticas por producto"
   },
   {
    "cmd": "shodan scan submit 8.8.8.8",
    "desc": "Solicitar escaneo de IP"
   },
   {
    "cmd": "shodan scan list",
    "desc": "Listar escaneos"
   },
   {
    "cmd": "shodan scan status ID",
    "desc": "Estado de escaneo"
   },
   {
    "cmd": "shodan alerts create 'nombre' 8.8.8.8",
    "desc": "Crear alerta de IP"
   },
   {
    "cmd": "shodan alert list",
    "desc": "Listar alertas"
   },
   {
    "cmd": "shodan org search",
    "desc": "Buscar en la organización"
   },
   {
    "cmd": "shodan honeyscore 8.8.8.8",
    "desc": "Puntuación de honeypot"
   },
   {
    "cmd": "shodan parse --fields ip_str,port < file.json",
    "desc": "Parsear export JSON"
   },
   {
    "cmd": "shodan stream --ports 22",
    "desc": "Streaming de datos en vivo"
   },
   {
    "cmd": "shodan info",
    "desc": "Info de la cuenta/API"
   },
   {
    "cmd": "shodan search 'ssl.cert.subject.cn:objetivo.com'",
    "desc": "Buscar por certificado"
   },
   {
    "cmd": "shodan search 'http.title:\"login\" port:8443'",
    "desc": "Buscar paneles de login"
   }
  ]
 },
 {
  "tool": "censys",
  "desc": "CLI de Censys: búsqueda de hosts y certificados",
  "commands": [
   {
    "cmd": "censys search 'services.port: 443'",
    "desc": "Buscar puerto 443"
   },
   {
    "cmd": "censys search 'services.tls.certificates.leaf_names: ejemplo.com'",
    "desc": "Por certificado"
   },
   {
    "cmd": "censys search 'ip: 8.8.8.8'",
    "desc": "Buscar IP"
   },
   {
    "cmd": "censys search --index hosts 'location.country: Spain'",
    "desc": "Hosts en España"
   },
   {
    "cmd": "censys search 'services.service_name: HTTP'",
    "desc": "Servicios HTTP"
   },
   {
    "cmd": "censys search 'services.banner: apache'",
    "desc": "Buscar por banner"
   },
   {
    "cmd": "censys view 8.8.8.8",
    "desc": "Ver detalle de un host"
   },
   {
    "cmd": "censys view --index certificates 'cert_id'",
    "desc": "Ver certificado"
   },
   {
    "cmd": "censys account show",
    "desc": "Mostrar info de cuenta"
   },
   {
    "cmd": "censys export hosts --query 'port:22'",
    "desc": "Exportar resultados"
   }
  ]
 },
 {
  "tool": "spiderfoot-cli",
  "desc": "CLI de SpiderFoot para escaneos OSINT automatizados",
  "commands": [
   {
    "cmd": "spiderfoot-cli -s objetivo.com -m all",
    "desc": "Escaneo completo"
   },
   {
    "cmd": "spiderfoot-cli -s objetivo.com -m sfp_dns",
    "desc": "Módulo DNS"
   },
   {
    "cmd": "spiderfoot-cli -s objetivo.com -m sfp_whois",
    "desc": "Módulo WHOIS"
   },
   {
    "cmd": "spiderfoot-cli -s objetivo.com -m sfp_ports",
    "desc": "Módulo de puertos"
   },
   {
    "cmd": "spiderfoot-cli -s objetivo.com -m sfp_email",
    "desc": "Módulo de emails"
   },
   {
    "cmd": "spiderfoot-cli -s objetivo.com -o JSON",
    "desc": "Salida JSON"
   },
   {
    "cmd": "spiderfoot-cli -s objetivo.com -u resultado.txt",
    "desc": "Salida humana"
   },
   {
    "cmd": "spiderfoot-cli -s objetivo.com -q",
    "desc": "Modo silencioso"
   },
   {
    "cmd": "spiderfoot-cli -s objetivo.com -T 30",
    "desc": "Timeout de 30s por módulo"
   },
   {
    "cmd": "spiderfoot-cli -s objetivo.com -M",
    "desc": "Mostrar módulos disponibles"
   },
   {
    "cmd": "spiderfoot-cli -s objetivo.com -m sfp_github",
    "desc": "Buscar en GitHub"
   },
   {
    "cmd": "spiderfoot-cli -s objetivo.com -m sfp_shodan",
    "desc": "Módulo Shodan"
   },
   {
    "cmd": "spiderfoot-cli -s IP -m sfp_portscan",
    "desc": "Port scan de una IP"
   }
  ]
 },
 {
  "tool": "dmitry-python",
  "desc": "Recolección pasiva de información (email, subdominios, whois)",
  "commands": [
   {
    "cmd": "dmitry -w -s objetivo.com",
    "desc": "Whois + subdominios"
   },
   {
    "cmd": "dmitry -p -b objetivo.com",
    "desc": "Puertos + banners"
   },
   {
    "cmd": "dmitry -e objetivo.com",
    "desc": "Emails"
   },
   {
    "cmd": "dmitry -i 8.8.8.8",
    "desc": "Info de IP"
   },
   {
    "cmd": "dmitry -t objetivo.com",
    "desc": "Búsqueda Netcraft"
   },
   {
    "cmd": "dmitry -wn objetivo.com",
    "desc": "Whois + Netcraft"
   },
   {
    "cmd": "dmitry -o out.txt objetivo.com",
    "desc": "Guardar en archivo"
   }
  ]
 },
 {
  "tool": "passive_ssh",
  "desc": "Detectar servidores SSH por fingerprint pasivo",
  "commands": [
   {
    "cmd": "passive_ssh -i eth0 -r",
    "desc": "Escaneo pasivo en la interfaz"
   },
   {
    "cmd": "passive_ssh -f capture.pcap",
    "desc": "Analizar pcap"
   },
   {
    "cmd": "passive_ssh -i eth0 -o out.txt",
    "desc": "Guardar resultados"
   },
   {
    "cmd": "passive_ssh -i eth0 -d",
    "desc": "Modo daemon"
   },
   {
    "cmd": "passive_ssh -i eth0 -l",
    "desc": "Verbose"
   },
   {
    "cmd": "passive_ssh -i eth0 -p",
    "desc": "Promiscuo"
   }
  ]
 },
 {
  "tool": "whois-variations",
  "desc": "Analizar variaciones de dominios con WHOIS",
  "commands": [
   {
    "cmd": "whois-variations objetivo.com",
    "desc": "Variaciones del dominio"
   },
   {
    "cmd": "whois-variations -d objetivo.com",
    "desc": "Solo DNS"
   },
   {
    "cmd": "whois-variations -w objetivo.com",
    "desc": "Solo whois"
   },
   {
    "cmd": "whois-variations -o out.txt objetivo.com",
    "desc": "Guardar salida"
   },
   {
    "cmd": "whois-variations -v objetivo.com",
    "desc": "Verbose"
   },
   {
    "cmd": "whois-variations -s objetivo.com",
    "desc": "Modo silencioso"
   }
  ]
 },
 {
  "tool": "wafw00f",
  "desc": "Detección de WAF (Web Application Firewall)",
  "commands": [
   {
    "cmd": "wafw00f https://objetivo.com",
    "desc": "Detectar WAF"
   },
   {
    "cmd": "wafw00f -a https://objetivo.com",
    "desc": "Probar todos los WAFs"
   },
   {
    "cmd": "wafw00f -v https://objetivo.com",
    "desc": "Verbose"
   },
   {
    "cmd": "wafw00f -i list.txt",
    "desc": "Múltiples targets desde archivo"
   },
   {
    "cmd": "wafw00f -o out.json https://objetivo.com",
    "desc": "Salida JSON"
   },
   {
    "cmd": "wafw00f -p https://objetivo.com",
    "desc": "Modo proxy"
   },
   {
    "cmd": "wafw00f -r https://objetivo.com",
    "desc": "Random user-agents"
   },
   {
    "cmd": "wafw00f -f https://objetivo.com",
    "desc": "Fingerprint avanzado"
   },
   {
    "cmd": "wafw00f -t 15 https://objetivo.com",
    "desc": "Timeout de 15s"
   },
   {
    "cmd": "wafw00f --test-cloudflare https://objetivo.com",
    "desc": "Probar Cloudflare"
   },
   {
    "cmd": "wafw00f --test-akamai https://objetivo.com",
    "desc": "Probar Akamai"
   },
   {
    "cmd": "wafw00f --test-cloudfront https://objetivo.com",
    "desc": "Probar CloudFront"
   },
   {
    "cmd": "wafw00f --test-aws https://objetivo.com",
    "desc": "Probar AWS WAF"
   },
   {
    "cmd": "wafw00f --test-imperva https://objetivo.com",
    "desc": "Probar Imperva"
   },
   {
    "cmd": "wafw00f --test-f5 https://objetivo.com",
    "desc": "Probar F5 BIG-IP"
   },
   {
    "cmd": "wafw00f --test-incapsula https://objetivo.com",
    "desc": "Probar Incapsula"
   },
   {
    "cmd": "wafw00f --test-sucuri https://objetivo.com",
    "desc": "Probar Sucuri"
   },
   {
    "cmd": "wafw00f --test-barracuda https://objetivo.com",
    "desc": "Probar Barracuda"
   }
  ]
 },
 {
  "tool": "intelmq",
  "desc": "Framework de intercambio de inteligencia de amenazas (TI)",
  "commands": [
   {
    "cmd": "intelmqctl start",
    "desc": "Iniciar el sistema"
   },
   {
    "cmd": "intelmqctl stop",
    "desc": "Detener el sistema"
   },
   {
    "cmd": "intelmqctl status",
    "desc": "Estado de los bots"
   },
   {
    "cmd": "intelmqctl list bots",
    "desc": "Listar bots"
   },
   {
    "cmd": "intelmqctl list queues",
    "desc": "Listar colas"
   },
   {
    "cmd": "intelmqctl check",
    "desc": "Verificar configuración"
   },
   {
    "cmd": "intelmqctl log",
    "desc": "Ver logs"
   },
   {
    "cmd": "intelmqctl run bot",
    "desc": "Ejecutar bot específico"
   },
   {
    "cmd": "intelmqctl reload",
    "desc": "Recargar configuración"
   },
   {
    "cmd": "intelmqctl clear queues",
    "desc": "Vaciar colas"
   },
   {
    "cmd": "intelmqctl process bot",
    "desc": "Procesar evento"
   },
   {
    "cmd": "intelmqctl upgrade-config",
    "desc": "Actualizar configuración"
   }
  ]
 },
 {
  "tool": "naabu",
  "desc": "Scanner de puertos rápido escrito en Go",
  "commands": [
   {
    "cmd": "naabu -host 192.168.1.10",
    "desc": "Escaneo simple"
   },
   {
    "cmd": "naabu -host 192.168.1.10 -p 1-1000",
    "desc": "Rango de puertos"
   },
   {
    "cmd": "naabu -host 192.168.1.10 -p 80,443,8080",
    "desc": "Puertos específicos"
   },
   {
    "cmd": "naabu -host 192.168.1.10 -top-ports 100",
    "desc": "Top 100"
   },
   {
    "cmd": "naabu -l hosts.txt",
    "desc": "Lista de hosts"
   },
   {
    "cmd": "naabu -host 192.168.1.0/24",
    "desc": "Subred"
   },
   {
    "cmd": "naabu -host 192.168.1.10 -rate 1000",
    "desc": "Rate"
   },
   {
    "cmd": "naabu -host 192.168.1.10 -t 50",
    "desc": "Threads"
   },
   {
    "cmd": "naabu -host 192.168.1.10 -o out.txt",
    "desc": "Salida"
   },
   {
    "cmd": "naabu -host 192.168.1.10 -json -o out.json",
    "desc": "JSON"
   },
   {
    "cmd": "naabu -host 192.168.1.10 -sS",
    "desc": "SYN scan"
   },
   {
    "cmd": "naabu -host 192.168.1.10 -sT",
    "desc": "Connect scan"
   },
   {
    "cmd": "naabu -host 192.168.1.10 -sU -p 53,161",
    "desc": "UDP"
   },
   {
    "cmd": "naabu -host 192.168.1.10 -Pn",
    "desc": "Sin ping"
   },
   {
    "cmd": "naabu -host 192.168.1.10 -v",
    "desc": "Verbose"
   },
   {
    "cmd": "naabu -host 192.168.1.10 -silent",
    "desc": "Silent"
   },
   {
    "cmd": "naabu -host 192.168.1.10 -timeout 2000",
    "desc": "Timeout ms"
   },
   {
    "cmd": "naabu -host 192.168.1.10 -retries 3",
    "desc": "Reintentos"
   },
   {
    "cmd": "naabu -host 192.168.1.10 -c 20",
    "desc": "Concurrencia"
   },
   {
    "cmd": "naabu -host 192.168.1.10 -f",
    "desc": "Fingerprint"
   },
   {
    "cmd": "naabu -host 192.168.1.10 -w scan.txt",
    "desc": "Warmup"
   },
   {
    "cmd": "naabu -host 192.168.1.10 -scan-all-ips",
    "desc": "Todos los IPs"
   },
   {
    "cmd": "naabu -host 192.168.1.10 -exclude-ports 22",
    "desc": "Excluir"
   },
   {
    "cmd": "naabu -host 192.168.1.10 -version",
    "desc": "Versión"
   }
  ]
 },
 {
  "tool": "dnsx",
  "desc": "Probe/resolución de DNS rápida (Go)",
  "commands": [
   {
    "cmd": "dnsx -l subdomains.txt",
    "desc": "Probar subdominios"
   },
   {
    "cmd": "dnsx -l subdomains.txt -a",
    "desc": "Registros A"
   },
   {
    "cmd": "dnsx -l subdomains.txt -aaaa",
    "desc": "AAAA"
   },
   {
    "cmd": "dnsx -l subdomains.txt -cname",
    "desc": "CNAME"
   },
   {
    "cmd": "dnsx -l subdomains.txt -mx",
    "desc": "MX"
   },
   {
    "cmd": "dnsx -l subdomains.txt -ns",
    "desc": "NS"
   },
   {
    "cmd": "dnsx -l subdomains.txt -txt",
    "desc": "TXT"
   },
   {
    "cmd": "dnsx -l subdomains.txt -soa",
    "desc": "SOA"
   },
   {
    "cmd": "dnsx -l subdomains.txt -p",
    "desc": "Todos los records"
   },
   {
    "cmd": "dnsx -l subdomains.txt -t 50",
    "desc": "Threads"
   },
   {
    "cmd": "dnsx -l subdomains.txt -o resolved.txt",
    "desc": "Solo resueltos"
   },
   {
    "cmd": "dnsx -l subdomains.txt -r 8.8.8.8",
    "desc": "Resolver custom"
   },
   {
    "cmd": "dnsx -l subdomains.txt -r resolvers.txt",
    "desc": "Lista de resolvers"
   },
   {
    "cmd": "dnsx -l subdomains.txt -silent",
    "desc": "Silent"
   },
   {
    "cmd": "dnsx -l subdomains.txt -json",
    "desc": "JSON"
   },
   {
    "cmd": "dnsx -d objetivo.com -w wordlist.txt",
    "desc": "Fuzzing de subdominios"
   },
   {
    "cmd": "dnsx -d objetivo.com -w wordlist.txt -wd wildcard.txt",
    "desc": "Wildcard filter"
   },
   {
    "cmd": "dnsx -l subdomains.txt -resp",
    "desc": "Mostrar respuestas"
   },
   {
    "cmd": "dnsx -l subdomains.txt -nc",
    "desc": "Sin color"
   },
   {
    "cmd": "dnsx -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "pwncat",
  "desc": "Listener de reverse shells con post-explotación",
  "commands": [
   {
    "cmd": "pwncat -l -p 4444",
    "desc": "Escuchar"
   },
   {
    "cmd": "pwncat -l -p 4444 -m auto",
    "desc": "Detectar shell"
   },
   {
    "cmd": "pwncat -l -p 4444 -m linux",
    "desc": "Forzar linux"
   },
   {
    "cmd": "pwncat -l -p 4444 -m windows",
    "desc": "Windows"
   },
   {
    "cmd": "pwncat -l -p 4444 -m powershell",
    "desc": "PowerShell"
   },
   {
    "cmd": "pwncat -l -p 4444 -s",
    "desc": "Shellcode"
   },
   {
    "cmd": "pwncat -l -p 4444 -z",
    "desc": "Zero shell"
   },
   {
    "cmd": "pwncat -l -p 4444 -v",
    "desc": "Verbose"
   },
   {
    "cmd": "pwncat -l -p 4444 -d",
    "desc": "Debug"
   },
   {
    "cmd": "pwncat -l -p 4444 -q",
    "desc": "Quiet"
   },
   {
    "cmd": "pwncat -l -p 4444 --platform linux",
    "desc": "Plataforma"
   },
   {
    "cmd": "pwncat -l -p 4444 -o log.txt",
    "desc": "Log"
   },
   {
    "cmd": "pwncat -l -p 4444 -H",
    "desc": "Hard"
   },
   {
    "cmd": "pwncat -l -p 4444 -F",
    "desc": "Flood"
   },
   {
    "cmd": "pwncat -l -p 4444 -t",
    "desc": "Timeout"
   },
   {
    "cmd": "pwncat -l -p 4444 -u",
    "desc": "Unencrypted"
   },
   {
    "cmd": "pwncat -l -p 4444 -c command",
    "desc": "Comando"
   },
   {
    "cmd": "pwncat -l -p 4444 -e /bin/sh",
    "desc": "Exec"
   },
   {
    "cmd": "pwncat -l -p 4444 -X",
    "desc": "Exit"
   },
   {
    "cmd": "pwncat -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "sn0int",
  "desc": "Framework OSINT semi-automatizado (registros públicos)",
  "commands": [
   {
    "cmd": "sn0int init",
    "desc": "Inicializar workspace"
   },
   {
    "cmd": "sn0int add workspace nombre",
    "desc": "Añadir workspace"
   },
   {
    "cmd": "sn0int use workspace nombre",
    "desc": "Usar workspace"
   },
   {
    "cmd": "sn0int search",
    "desc": "Buscar módulos"
   },
   {
    "cmd": "sn0int search -p recon",
    "desc": "Módulos de recon"
   },
   {
    "cmd": "sn0int search -p leak",
    "desc": "Módulos de leaks"
   },
   {
    "cmd": "sn0int run modulos",
    "desc": "Ejecutar módulo"
   },
   {
    "cmd": "sn0int run -u nombre modulos",
    "desc": "Con usuario"
   },
   {
    "cmd": "sn0int shows stats",
    "desc": "Estadísticas"
   },
   {
    "cmd": "sn0int shows domains",
    "desc": "Dominios"
   },
   {
    "cmd": "sn0int shows ips",
    "desc": "IPs"
   },
   {
    "cmd": "sn0int shows emails",
    "desc": "Emails"
   },
   {
    "cmd": "sn0int shows leaks",
    "desc": "Leaks"
   },
   {
    "cmd": "sn0int shows companies",
    "desc": "Compañías"
   },
   {
    "cmd": "sn0int shows services",
    "desc": "Servicios"
   },
   {
    "cmd": "sn0int import file.json",
    "desc": "Importar"
   },
   {
    "cmd": "sn0int export file.json",
    "desc": "Exportar"
   },
   {
    "cmd": "sn0int update",
    "desc": "Actualizar módulos"
   },
   {
    "cmd": "sn0int alias email dominio",
    "desc": "Alias"
   },
   {
    "cmd": "sn0int helps",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "osintgram",
  "desc": "OSINT de Instagram (perfil, followers, ubicaciones)",
  "commands": [
   {
    "cmd": "osintgram.py user_info",
    "desc": "Info del perfil"
   },
   {
    "cmd": "osintgram.py user_info --image",
    "desc": "Con foto"
   },
   {
    "cmd": "osintgram.py followers",
    "desc": "Followers"
   },
   {
    "cmd": "osintgram.py following",
    "desc": "Siguiendo"
   },
   {
    "cmd": "osintgram.py comments",
    "desc": "Comentarios"
   },
   {
    "cmd": "osintgram.py captions",
    "desc": "Descripciones"
   },
   {
    "cmd": "osintgram.py hashtags",
    "desc": "Hashtags"
   },
   {
    "cmd": "osintgram.py user_posts",
    "desc": "Posts"
   },
   {
    "cmd": "osintgram.py stories",
    "desc": "Historias"
   },
   {
    "cmd": "osintgram.py highlights",
    "desc": "Destacados"
   },
   {
    "cmd": "osintgram.py saved",
    "desc": "Guardados"
   },
   {
    "cmd": "osintgram.py tagged",
    "desc": "Etiquetado"
   },
   {
    "cmd": "osintgram.py friends",
    "desc": "Amistad"
   },
   {
    "cmd": "osintgram.py common_followers",
    "desc": "Followers comunes"
   },
   {
    "cmd": "osintgram.py user_insights",
    "desc": "Insights"
   },
   {
    "cmd": "osintgram.py followers_json",
    "desc": "Followers JSON"
   },
   {
    "cmd": "osintgram.py download --file media_id",
    "desc": "Descargar media"
   },
   {
    "cmd": "osintgram.py user_info --url username",
    "desc": "URL custom"
   },
   {
    "cmd": "osintgram.py -u tu_usuario user_info",
    "desc": "Cuenta propia"
   },
   {
    "cmd": "osintgram.py -c config.json user_info",
    "desc": "Con config"
   },
   {
    "cmd": "osintgram.py -o /tmp/out user_info",
    "desc": "Output dir"
   },
   {
    "cmd": "osintgram.py --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "webtech",
  "desc": "Detectar tecnologías web (CMS, frameworks, lenguajes)",
  "commands": [
   {
    "cmd": "webtech -u http://192.168.1.10",
    "desc": "Detectar"
   },
   {
    "cmd": "webtech -l urls.txt",
    "desc": "Lista de URLs"
   },
   {
    "cmd": "webtech -u URL -v",
    "desc": "Verbose"
   },
   {
    "cmd": "webtech -u URL -o out.json",
    "desc": "JSON"
   },
   {
    "cmd": "webtech -u URL -o out.html",
    "desc": "HTML"
   },
   {
    "cmd": "webtech -u URL -H 'X-A: 1'",
    "desc": "Headers"
   },
   {
    "cmd": "webtech -u URL --cookie 'SID=abc'",
    "desc": "Cookies"
   },
   {
    "cmd": "webtech -u URL -p 8080",
    "desc": "Puerto"
   },
   {
    "cmd": "webtech -u URL -a",
    "desc": "Aggressive"
   },
   {
    "cmd": "webtech -u URL -x",
    "desc": "No update db"
   },
   {
    "cmd": "webtech -u URL -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "traceroute",
  "desc": "Rastrear ruta de paquetes (ICMP)",
  "commands": [
   {
    "cmd": "traceroute 8.8.8.8",
    "desc": "Ruta"
   },
   {
    "cmd": "traceroute -n 8.8.8.8",
    "desc": "Sin resolver"
   },
   {
    "cmd": "traceroute -m 30 8.8.8.8",
    "desc": "Máx 30 hops"
   },
   {
    "cmd": "traceroute -w 2 8.8.8.8",
    "desc": "Timeout 2s"
   },
   {
    "cmd": "traceroute -q 1 8.8.8.8",
    "desc": "1 query por hop"
   },
   {
    "cmd": "traceroute -I 8.8.8.8",
    "desc": "ICMP echo"
   },
   {
    "cmd": "traceroute -T 8.8.8.8",
    "desc": "TCP SYN"
   },
   {
    "cmd": "traceroute -T -p 443 8.8.8.8",
    "desc": "TCP a 443"
   },
   {
    "cmd": "traceroute -U 8.8.8.8",
    "desc": "UDP"
   },
   {
    "cmd": "traceroute -U -p 53 8.8.8.8",
    "desc": "UDP a 53"
   },
   {
    "cmd": "traceroute -4 8.8.8.8",
    "desc": "IPv4"
   },
   {
    "cmd": "traceroute -6 ::1",
    "desc": "IPv6"
   },
   {
    "cmd": "traceroute -f 5 8.8.8.8",
    "desc": "Empezar en hop 5"
   },
   {
    "cmd": "traceroute -A 8.8.8.8",
    "desc": "AS numbers"
   },
   {
    "cmd": "traceroute -d 8.8.8.8",
    "desc": "Debug"
   },
   {
    "cmd": "traceroute -V 8.8.8.8",
    "desc": "Versión"
   }
  ]
 },
 {
  "tool": "mtr",
  "desc": "Traceroute continuo con estadísticas (My Traceroute)",
  "commands": [
   {
    "cmd": "mtr 8.8.8.8",
    "desc": "Interactivo"
   },
   {
    "cmd": "mtr -r 8.8.8.8",
    "desc": "Reporte"
   },
   {
    "cmd": "mtr -r -c 20 8.8.8.8",
    "desc": "20 ciclos"
   },
   {
    "cmd": "mtr -n 8.8.8.8",
    "desc": "Sin resolver"
   },
   {
    "cmd": "mtr -i 1 8.8.8.8",
    "desc": "Intervalo 1s"
   },
   {
    "cmd": "mtr -m 30 8.8.8.8",
    "desc": "Máx hops"
   },
   {
    "cmd": "mtr -t 8.8.8.8",
    "desc": "Curses"
   },
   {
    "cmd": "mtr -p 8.8.8.8",
    "desc": "Con ping"
   },
   {
    "cmd": "mtr -w 8.8.8.8",
    "desc": "Wide report"
   },
   {
    "cmd": "mtr -a IP 8.8.8.8",
    "desc": "IP de origen"
   },
   {
    "cmd": "mtr -z 8.8.8.8",
    "desc": "Mostrar ASN"
   },
   {
    "cmd": "mtr -4 8.8.8.8",
    "desc": "IPv4"
   },
   {
    "cmd": "mtr -6 ::1",
    "desc": "IPv6"
   },
   {
    "cmd": "mtr -T 8.8.8.8",
    "desc": "TCP"
   },
   {
    "cmd": "mtr -u 8.8.8.8",
    "desc": "UDP"
   },
   {
    "cmd": "mtr -o 'LSR' 8.8.8.8",
    "desc": "Formato"
   }
  ]
 },
 {
  "tool": "tcptraceroute",
  "desc": "Traceroute TCP (funciona cuando ICMP está bloqueado)",
  "commands": [
   {
    "cmd": "tcptraceroute 8.8.8.8",
    "desc": "TCP traceroute"
   },
   {
    "cmd": "tcptraceroute -p 443 8.8.8.8",
    "desc": "Puerto 443"
   },
   {
    "cmd": "tcptraceroute -n 8.8.8.8",
    "desc": "Sin resolver"
   },
   {
    "cmd": "tcptraceroute -m 30 8.8.8.8",
    "desc": "Máx hops"
   },
   {
    "cmd": "tcptraceroute -w 2 8.8.8.8",
    "desc": "Timeout"
   },
   {
    "cmd": "tcptraceroute -q 1 8.8.8.8",
    "desc": "Queries"
   },
   {
    "cmd": "tcptraceroute -f 3 8.8.8.8",
    "desc": "Hop inicial"
   },
   {
    "cmd": "tcptraceroute -s IP 8.8.8.8",
    "desc": "IP origen"
   },
   {
    "cmd": "tcptraceroute -p 80,443 8.8.8.8",
    "desc": "Varios puertos"
   },
   {
    "cmd": "tcptraceroute -6 ::1",
    "desc": "IPv6"
   }
  ]
 },
 {
  "tool": "lft",
  "desc": "Layer Four Traceroute (TCP/UDP con service detection)",
  "commands": [
   {
    "cmd": "lft 8.8.8.8",
    "desc": "Traceroute"
   },
   {
    "cmd": "lft -P 80 8.8.8.8",
    "desc": "Puerto TCP 80"
   },
   {
    "cmd": "lft -U -P 53 8.8.8.8",
    "desc": "UDP a 53"
   },
   {
    "cmd": "lft -A 8.8.8.8",
    "desc": "AS"
   },
   {
    "cmd": "lft -n 8.8.8.8",
    "desc": "Sin resolver"
   },
   {
    "cmd": "lft -m 30 8.8.8.8",
    "desc": "Máx hops"
   },
   {
    "cmd": "lft -w 2 8.8.8.8",
    "desc": "Timeout"
   },
   {
    "cmd": "lft -S 8.8.8.8",
    "desc": "Servicios"
   },
   {
    "cmd": "lft -a IP 8.8.8.8",
    "desc": "IP origen"
   },
   {
    "cmd": "lft -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "reconspider",
  "desc": "OSINT spider (metadatos, DNS, WHOIS, subdominios)",
  "commands": [
   {
    "cmd": "python3 ReconSpider.py objetivo.com",
    "desc": "Recopilar"
   },
   {
    "cmd": "python3 ReconSpider.py -d objetivo.com -r",
    "desc": "Recursivo"
   },
   {
    "cmd": "python3 ReconSpider.py -d objetivo.com -s",
    "desc": "Silent"
   },
   {
    "cmd": "python3 ReconSpider.py -d objetivo.com -v",
    "desc": "Verbose"
   },
   {
    "cmd": "python3 ReconSpider.py -d objetivo.com -o /tmp/out",
    "desc": "Salida"
   },
   {
    "cmd": "python3 ReconSpider.py -d objetivo.com --dns",
    "desc": "Solo DNS"
   },
   {
    "cmd": "python3 ReconSpider.py -d objetivo.com --subdomains",
    "desc": "Subdominios"
   },
   {
    "cmd": "python3 ReconSpider.py -d objetivo.com --whois",
    "desc": "WHOIS"
   },
   {
    "cmd": "python3 ReconSpider.py -d objetivo.com --emails",
    "desc": "Emails"
   },
   {
    "cmd": "python3 ReconSpider.py -d objetivo.com --screenshots",
    "desc": "Screenshots"
   },
   {
    "cmd": "python3 ReconSpider.py -d objetivo.com --metadata",
    "desc": "Metadatos"
   },
   {
    "cmd": "python3 ReconSpider.py -d objetivo.com --all",
    "desc": "Todo"
   },
   {
    "cmd": "python3 ReconSpider.py -d objetivo.com --no-colors",
    "desc": "Sin color"
   },
   {
    "cmd": "python3 ReconSpider.py -d objetivo.com --user-agent 'UA'",
    "desc": "UA custom"
   },
   {
    "cmd": "python3 ReconSpider.py --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "scoutsuite",
  "desc": "Auditar configuración de nubes (AWS, Azure, GCP)",
  "commands": [
   {
    "cmd": "scoutsuite aws --profile default",
    "desc": "Auditar AWS"
   },
   {
    "cmd": "scoutsuite aws --profile prod --report-dir /tmp/report",
    "desc": "Con reporte"
   },
   {
    "cmd": "scoutsuite aws --profile p --no-browser",
    "desc": "Sin browser"
   },
   {
    "cmd": "scoutsuite aws --profile p --fetch",
    "desc": "Fetch"
   },
   {
    "cmd": "scoutsuite aws --profile p --regions eu-west-1",
    "desc": "Regiones"
   },
   {
    "cmd": "scoutsuite aws --profile p --services ec2",
    "desc": "Solo EC2"
   },
   {
    "cmd": "scoutsuite aws --profile p --excluded-services ec2",
    "desc": "Excluir"
   },
   {
    "cmd": "scoutsuite aws --profile p --json",
    "desc": "JSON"
   },
   {
    "cmd": "scoutsuite azure --cli",
    "desc": "Azure"
   },
   {
    "cmd": "scoutsuite gcp --organization-id 123",
    "desc": "GCP"
   },
   {
    "cmd": "scoutsuite gcp --project-id proj",
    "desc": "GCP project"
   },
   {
    "cmd": "scoutsuite aws --profile p --ruleset default",
    "desc": "Ruleset"
   },
   {
    "cmd": "scoutsuite aws --profile p --rule-filter findings",
    "desc": "Filtrar findings"
   },
   {
    "cmd": "scoutsuite aws --profile p --max-workers 5",
    "desc": "Workers"
   },
   {
    "cmd": "scoutsuite --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "testssl",
  "desc": "Auditoría de TLS/SSL completa (testssl.sh)",
  "commands": [
   {
    "cmd": "testssl.sh host:443",
    "desc": "Auditar"
   },
   {
    "cmd": "testssl.sh --full https://host",
    "desc": "Full"
   },
   {
    "cmd": "testssl.sh --fast host:443",
    "desc": "Rápido"
   },
   {
    "cmd": "testssl.sh --html host:443",
    "desc": "HTML"
   },
   {
    "cmd": "testssl.sh --json host:443",
    "desc": "JSON"
   },
   {
    "cmd": "testssl.sh --openssl-timeout 10 host:443",
    "desc": "Timeout"
   },
   {
    "cmd": "testssl.sh --sneaky host:443",
    "desc": "Sneaky"
   },
   {
    "cmd": "testssl.sh --poodle host:443",
    "desc": "POODLE"
   },
   {
    "cmd": "testssl.sh --heartbleed host:443",
    "desc": "Heartbleed"
   },
   {
    "cmd": "testssl.sh --robot host:443",
    "desc": "ROBOT"
   },
   {
    "cmd": "testssl.sh --logfile out.txt host:443",
    "desc": "Log"
   },
   {
    "cmd": "testssl.sh --severity HIGH host:443",
    "desc": "Severidad"
   },
   {
    "cmd": "testssl.sh --quiet host:443",
    "desc": "Quiet"
   },
   {
    "cmd": "testssl.sh --color 0 host:443",
    "desc": "Sin color"
   },
   {
    "cmd": "testssl.sh -p -s -U host:443",
    "desc": "Default+robustness"
   },
   {
    "cmd": "testssl.sh -c host:443",
    "desc": "Cifrados"
   },
   {
    "cmd": "testssl.sh -p host:443",
    "desc": "Protocolos"
   },
   {
    "cmd": "testssl.sh -t host:443",
    "desc": "Banderas"
   },
   {
    "cmd": "testssl.sh --vulnerabilities host:443",
    "desc": "Vulns"
   },
   {
    "cmd": "testssl.sh --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "cloudfox",
  "desc": "Recon y explotación de cloud (AWS/GCP/Azure)",
  "commands": [
   {
    "cmd": "cloudfox aws -p prof permissions",
    "desc": "Permisos"
   },
   {
    "cmd": "cloudfox aws -p prof secrets",
    "desc": "Secretos"
   },
   {
    "cmd": "cloudfox aws -p prof ec2-instances",
    "desc": "Instancias EC2"
   },
   {
    "cmd": "cloudfox aws -p prof ecs-tasks",
    "desc": "ECS tasks"
   },
   {
    "cmd": "cloudfox aws -p prof roles",
    "desc": "Roles"
   },
   {
    "cmd": "cloudfox aws -p prof routes",
    "desc": "Rutas"
   },
   {
    "cmd": "cloudfox aws -p prof buckets",
    "desc": "Buckets S3"
   },
   {
    "cmd": "cloudfox aws -p prof dns",
    "desc": "DNS"
   },
   {
    "cmd": "cloudfox aws -p prof enumerate",
    "desc": "Enumerar todo"
   },
   {
    "cmd": "cloudfox aws -p prof --outdir /tmp/out",
    "desc": "Salida"
   },
   {
    "cmd": "cloudfox aws -p prof --level 2",
    "desc": "Nivel"
   },
   {
    "cmd": "cloudfox aws -p prof --region us-east-1",
    "desc": "Región"
   },
   {
    "cmd": "cloudfox gcp -p proj secrets",
    "desc": "GCP secrets"
   },
   {
    "cmd": "cloudfox azure -t tenant secrets",
    "desc": "Azure"
   },
   {
    "cmd": "cloudfox --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "subover",
  "desc": "Detección de subdomain takeover",
  "commands": [
   {
    "cmd": "subover -l subdomains.txt",
    "desc": "Check list"
   },
   {
    "cmd": "subover -d objetivo.com",
    "desc": "Detección"
   },
   {
    "cmd": "subover -l sub.txt -t 20",
    "desc": "20 hilos"
   },
   {
    "cmd": "subover -l sub.txt -o out.txt",
    "desc": "Salida"
   },
   {
    "cmd": "subover -l sub.txt -v",
    "desc": "Verbose"
   },
   {
    "cmd": "subover -l sub.txt -s",
    "desc": "Silent"
   },
   {
    "cmd": "subover --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "dnssearch",
  "desc": "Búsqueda rápida de subdominios vía wordlist",
  "commands": [
   {
    "cmd": "dnssearch -d objetivo.com -w subdomains.txt",
    "desc": "Buscar"
   },
   {
    "cmd": "dnssearch -d objetivo.com -w list.txt -t 50",
    "desc": "Hilos"
   },
   {
    "cmd": "dnssearch -d objetivo.com -w list.txt -r 8.8.8.8",
    "desc": "Resolver"
   },
   {
    "cmd": "dnssearch -d objetivo.com -w list.txt -o out.txt",
    "desc": "Salida"
   },
   {
    "cmd": "dnssearch -d objetivo.com -w list.txt -v",
    "desc": "Verbose"
   },
   {
    "cmd": "dnssearch -d objetivo.com -w list.txt -q",
    "desc": "Quiet"
   },
   {
    "cmd": "dnssearch -d objetivo.com -w list.txt -e",
    "desc": "Con errores"
   },
   {
    "cmd": "dnssearch --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "osrframework",
  "desc": "Framework OSINT (búsqueda de usuarios y dominios)",
  "commands": [
   {
    "cmd": "python3 osrframework/searchfy.py -q usuario",
    "desc": "Buscar usuario"
   },
   {
    "cmd": "python3 osrframework/mailfy.py -q nombre",
    "desc": "Buscar emails"
   },
   {
    "cmd": "python3 osrframework/domainfy.py -q empresa",
    "desc": "Buscar dominios"
   },
   {
    "cmd": "python3 osrframework/phonefy.py -q telefono",
    "desc": "Buscar teléfono"
   },
   {
    "cmd": "python3 osrframework/checkfy.py -q usuario",
    "desc": "Verificar cuentas"
   },
   {
    "cmd": "python3 osrframework/searchfy.py -q u -p twitter",
    "desc": "Solo twitter"
   },
   {
    "cmd": "python3 osrframework/searchfy.py -q u -e out.csv",
    "desc": "Exportar"
   },
   {
    "cmd": "python3 osrframework/searchfy.py -q u -a",
    "desc": "Todo"
   },
   {
    "cmd": "python3 osrframework/searchfy.py -q u -v",
    "desc": "Verbose"
   },
   {
    "cmd": "python3 osrframework/domainfy.py -q emp -w wordlist.txt",
    "desc": "Wordlist"
   },
   {
    "cmd": "python3 osrframework/domainfy.py -q emp -l",
    "desc": "Leet"
   },
   {
    "cmd": "python3 osrframework/mailfy.py -q nom -w list.txt",
    "desc": "Con wordlist"
   },
   {
    "cmd": "python3 osrframework/phonefy.py -q 911234567 -l es",
    "desc": "Localización"
   },
   {
    "cmd": "python3 osrframework --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "h8mail",
  "desc": "OSINT de emails (breach lookup, hunting)",
  "commands": [
   {
    "cmd": "h8mail -t victim@corp.com",
    "desc": "Buscar email"
   },
   {
    "cmd": "h8mail -t email1 -t email2",
    "desc": "Varios"
   },
   {
    "cmd": "h8mail -t victim@corp.com -g",
    "desc": "Con Google"
   },
   {
    "cmd": "h8mail -t victim@corp.com -b",
    "desc": "Breach comprobados"
   },
   {
    "cmd": "h8mail -t victim@corp.com -c config.ini",
    "desc": "Con API keys"
   },
   {
    "cmd": "h8mail -t victim@corp.com -o out.txt",
    "desc": "Salida"
   },
   {
    "cmd": "h8mail -t victim@corp.com -q",
    "desc": "Quiet"
   },
   {
    "cmd": "h8mail -t victim@corp.com -v",
    "desc": "Verbose"
   },
   {
    "cmd": "h8mail --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "holehe",
  "desc": "Comprobar si un email está registrado en servicios",
  "commands": [
   {
    "cmd": "holehe victim@corp.com",
    "desc": "Check"
   },
   {
    "cmd": "holehe victim@corp.com --no-color",
    "desc": "Sin color"
   },
   {
    "cmd": "holehe victim@corp.com --only-used",
    "desc": "Solo usados"
   },
   {
    "cmd": "holehe victim@corp.com --no-curl",
    "desc": "Sin curl"
   },
   {
    "cmd": "holehe victim@corp.com --verbose",
    "desc": "Verbose"
   },
   {
    "cmd": "holehe victim@corp.com --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "socialscan",
  "desc": "Comprobar disponibilidad de usernames en plataformas",
  "commands": [
   {
    "cmd": "socialscan username",
    "desc": "Check"
   },
   {
    "cmd": "socialscan user1 user2",
    "desc": "Varios"
   },
   {
    "cmd": "socialscan username --platform twitter",
    "desc": "Solo twitter"
   },
   {
    "cmd": "socialscan username --platform instagram",
    "desc": "Instagram"
   },
   {
    "cmd": "socialscan username --platform github",
    "desc": "GitHub"
   },
   {
    "cmd": "socialscan username --platform reddit",
    "desc": "Reddit"
   },
   {
    "cmd": "socialscan username --platform all",
    "desc": "Todo"
   },
   {
    "cmd": "socialscan username --no-color",
    "desc": "Sin color"
   },
   {
    "cmd": "socialscan username --json",
    "desc": "JSON"
   },
   {
    "cmd": "socialscan username --quiet",
    "desc": "Quiet"
   },
   {
    "cmd": "socialscan --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "nmap-scripts",
  "desc": "Scripts NSE de Nmap (recon avanzado)",
  "commands": [
   {
    "cmd": "nmap -sC -sV -p- IP",
    "desc": "Default scripts + versión"
   },
   {
    "cmd": "nmap --script=http-enum IP",
    "desc": "Enumerar HTTP"
   },
   {
    "cmd": "nmap --script=http-headers IP",
    "desc": "Headers HTTP"
   },
   {
    "cmd": "nmap --script=http-title IP",
    "desc": "Títulos"
   },
   {
    "cmd": "nmap --script=dns-zone-transfer --script-args dns-zone-transfer.domain=dom.local IP",
    "desc": "Zone transfer"
   },
   {
    "cmd": "nmap --script=smb-enum-shares IP",
    "desc": "Shares SMB"
   },
   {
    "cmd": "nmap --script=smb-enum-users IP",
    "desc": "Usuarios SMB"
   },
   {
    "cmd": "nmap --script=smb-vuln-ms17-010 IP",
    "desc": "EternalBlue"
   },
   {
    "cmd": "nmap --script=vuln IP",
    "desc": "Vulnerabilidades"
   },
   {
    "cmd": "nmap --script=ftp-anon IP",
    "desc": "FTP anónimo"
   },
   {
    "cmd": "nmap --script=mysql-enum IP",
    "desc": "MySQL"
   },
   {
    "cmd": "nmap --script=mongodb-info IP",
    "desc": "MongoDB"
   },
   {
    "cmd": "nmap --script=ldap-rootdse IP",
    "desc": "LDAP"
   },
   {
    "cmd": "nmap --script=http-shellshock IP",
    "desc": "Shellshock"
   },
   {
    "cmd": "nmap --script=http-put --script-args http-put.url=/shell.php,http-put.file=/tmp/shell.php IP",
    "desc": "PUT upload"
   },
   {
    "cmd": "nmap --script=ssl-heartbleed -p 443 IP",
    "desc": "Heartbleed"
   },
   {
    "cmd": "nmap --script=http-slowloris-check IP",
    "desc": "Slowloris"
   },
   {
    "cmd": "nmap --script=snmp-info IP",
    "desc": "SNMP"
   },
   {
    "cmd": "nmap --script=smb-brute --script-args userdb=users.txt,passdb=pass.txt IP",
    "desc": "SMB brute"
   },
   {
    "cmd": "nmap --script=ssh-auth-methods IP",
    "desc": "SSH auth"
   },
   {
    "cmd": "nmap --script=whois-domain IP",
    "desc": "WHOIS"
   },
   {
    "cmd": "nmap --script=dns-brute IP",
    "desc": "DNS brute"
   },
   {
    "cmd": "nmap --script=default,safe -sV IP",
    "desc": "Seguros"
   },
   {
    "cmd": "nmap --script-args=unsafe=1 --script=smb-vuln* IP",
    "desc": "Vuln SMB"
   }
  ]
 },
 {
  "tool": "masscan-extra",
  "desc": "Escaneo masivo de puertos (variantes)",
  "commands": [
   {
    "cmd": "masscan -p1-65535 --rate 1000 IP",
    "desc": "Todos los puertos"
   },
   {
    "cmd": "masscan -p80,443 --rate 10000 0.0.0.0/0",
    "desc": "Internet 80/443"
   },
   {
    "cmd": "masscan -pU:53,161 --rate 1000 IP",
    "desc": "UDP"
   },
   {
    "cmd": "masscan -p1-10000 --rate 5000 -oG out.grep IP",
    "desc": "Grepable"
   },
   {
    "cmd": "masscan -p1-10000 --rate 5000 -oL out.list IP",
    "desc": "List format"
   },
   {
    "cmd": "masscan -p1-10000 --rate 5000 -oJ out.json IP",
    "desc": "JSON"
   },
   {
    "cmd": "masscan -p1-10000 --rate 5000 -oB out.bin IP",
    "desc": "Binary"
   },
   {
    "cmd": "masscan -p1-10000 --rate 5000 -oL out -r out.bin",
    "desc": "Resumir"
   },
   {
    "cmd": "masscan -p1-10000 --rate 5000 --banners IP",
    "desc": "Banners"
   },
   {
    "cmd": "masscan -p1-10000 --rate 5000 --source-port 53 IP",
    "desc": "Puerto fuente"
   },
   {
    "cmd": "masscan -p1-10000 --rate 5000 -e eth0 IP",
    "desc": "Interfaz"
   },
   {
    "cmd": "masscan -p1-10000 --rate 5000 --ping -sI IP",
    "desc": "Ping only"
   },
   {
    "cmd": "masscan -p1-10000 --rate 5000 --excludefile exclude.txt IP",
    "desc": "Excluir"
   },
   {
    "cmd": "masscan --version",
    "desc": "Versión"
   }
  ]
 },
 {
  "tool": "sublist3r-extra",
  "desc": "Enumeración de subdominios (variantes)",
  "commands": [
   {
    "cmd": "sublist3r -d objetivo.com",
    "desc": "Enumerar"
   },
   {
    "cmd": "sublist3r -d objetivo.com -b",
    "desc": "Solo brute"
   },
   {
    "cmd": "sublist3r -d objetivo.com -e google,yahoo",
    "desc": "Motores"
   },
   {
    "cmd": "sublist3r -d objetivo.com -p 80,443",
    "desc": "Puertos"
   },
   {
    "cmd": "sublist3r -d objetivo.com -v",
    "desc": "Verbose"
   },
   {
    "cmd": "sublist3r -d objetivo.com -o out.txt",
    "desc": "Salida"
   },
   {
    "cmd": "sublist3r -d objetivo.com -t 20",
    "desc": "Hilos"
   },
   {
    "cmd": "sublist3r -d objetivo.com --no-color",
    "desc": "Sin color"
   },
   {
    "cmd": "sublist3r --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "whois-extra",
  "desc": "Consultas WHOIS (variantes)",
  "commands": [
   {
    "cmd": "whois objetivo.com",
    "desc": "WHOIS"
   },
   {
    "cmd": "whois -h whois.iana.org 8.8.8.8",
    "desc": "IANA"
   },
   {
    "cmd": "whois -h whois.arin.net 8.8.8.8",
    "desc": "ARIN"
   },
   {
    "cmd": "whois -h whois.ripe.net IP",
    "desc": "RIPE"
   },
   {
    "cmd": "whois -h whois.lacnic.net IP",
    "desc": "LACNIC"
   },
   {
    "cmd": "whois -h whois.apnic.net IP",
    "desc": "APNIC"
   },
   {
    "cmd": "whois -h whois.afrinic.net IP",
    "desc": "AFRINIC"
   },
   {
    "cmd": "whois 8.8.8.8",
    "desc": "IP"
   },
   {
    "cmd": "whois -a objetivo.com",
    "desc": "Todos los servers"
   },
   {
    "cmd": "whois -p 43 objetivo.com",
    "desc": "Puerto"
   },
   {
    "cmd": "whois --verbose objetivo.com",
    "desc": "Verbose"
   },
   {
    "cmd": "whois -H objetivo.com",
    "desc": "Sin legal"
   }
  ]
 },
 {
  "tool": "dig-extra",
  "desc": "Consultas DNS avanzadas (dig)",
  "commands": [
   {
    "cmd": "dig objetivo.com",
    "desc": "A record"
   },
   {
    "cmd": "dig objetivo.com ANY",
    "desc": "Todo"
   },
   {
    "cmd": "dig objetivo.com MX",
    "desc": "MX"
   },
   {
    "cmd": "dig objetivo.com NS",
    "desc": "NS"
   },
   {
    "cmd": "dig objetivo.com TXT",
    "desc": "TXT"
   },
   {
    "cmd": "dig objetivo.com SOA",
    "desc": "SOA"
   },
   {
    "cmd": "dig @8.8.8.8 objetivo.com",
    "desc": "Resolver custom"
   },
   {
    "cmd": "dig -x 8.8.8.8",
    "desc": "Reverse"
   },
   {
    "cmd": "dig +short objetivo.com",
    "desc": "Corto"
   },
   {
    "cmd": "dig +trace objetivo.com",
    "desc": "Trace"
   },
   {
    "cmd": "dig axfr objetivo.com @NS_SERVER",
    "desc": "Zone transfer"
   },
   {
    "cmd": "dig axfr dom.local @192.168.1.5",
    "desc": "AXFR interno"
   },
   {
    "cmd": "dig +tcp objetivo.com",
    "desc": "TCP"
   },
   {
    "cmd": "dig +dnssec objetivo.com",
    "desc": "DNSSEC"
   },
   {
    "cmd": "dig +norecurse objetivo.com",
    "desc": "Sin recursión"
   },
   {
    "cmd": "dig +noall +answer objetivo.com",
    "desc": "Solo respuesta"
   },
   {
    "cmd": "dig CH TXT version.bind @IP",
    "desc": "Versión DNS"
   },
   {
    "cmd": "dig @IP -p 5353 objetivo.com",
    "desc": "Puerto"
   }
  ]
 },
 {
  "tool": "metagoofil",
  "desc": "Recolección de metadatos de documentos públicos",
  "commands": [
   {
    "cmd": "metagoofil -d objetivo.com -t pdf,doc,xls -o /tmp/out",
    "desc": "Buscar docs"
   },
   {
    "cmd": "metagoofil -d objetivo.com -t pdf -l 100 -n 50 -o /tmp/out",
    "desc": "Límites"
   },
   {
    "cmd": "metagoofil -d objetivo.com -w",
    "desc": "Descargar"
   },
   {
    "cmd": "metagoofil -d objetivo.com -e google",
    "desc": "Motor"
   },
   {
    "cmd": "metagoofil -d objetivo.com -t pdf -o out -f resultado.html",
    "desc": "Salida html"
   },
   {
    "cmd": "metagoofil -d objetivo.com -t all",
    "desc": "Todos los tipos"
   },
   {
    "cmd": "metagoofil -d objetivo.com -v",
    "desc": "Verbose"
   },
   {
    "cmd": "metagoofil -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "dmitry",
  "desc": "Reconocimiento pasivo (DMitry)",
  "commands": [
   {
    "cmd": "dmitry -w objetivo.com",
    "desc": "WHOIS"
   },
   {
    "cmd": "dmitry -i 8.8.8.8",
    "desc": "IP info"
   },
   {
    "cmd": "dmitry -n objetivo.com",
    "desc": "Netcraft"
   },
   {
    "cmd": "dmitry -s objetivo.com",
    "desc": "Subdominios"
   },
   {
    "cmd": "dmitry -e objetivo.com",
    "desc": "Emails"
   },
   {
    "cmd": "dmitry -p objetivo.com",
    "desc": "TCP scan"
   },
   {
    "cmd": "dmitry -b objetivo.com",
    "desc": "Banner"
   },
   {
    "cmd": "dmitry -o out.txt -winse objetivo.com",
    "desc": "Todo"
   },
   {
    "cmd": "dmitry -f objetivo.com",
    "desc": "Filtrado"
   },
   {
    "cmd": "dmitry -t 10 objetivo.com",
    "desc": "Timeout"
   },
   {
    "cmd": "dmitry -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "ssl-osint",
  "desc": "Recon SSL/TLS (certs, SANs, ciphers)",
  "commands": [
   {
    "cmd": "openssl s_client -connect IP:443 -servername objetivo.com < /dev/null | openssl x509 -noout -subject -issuer -dates",
    "desc": "Cert info"
   },
   {
    "cmd": "openssl s_client -connect IP:443 -showcerts < /dev/null | openssl x509 -noout -text | grep -A2 'Subject Alternative'",
    "desc": "SANs"
   },
   {
    "cmd": "openssl s_client -connect IP:443 -servername objetivo.com < /dev/null | openssl x509 -noout -fingerprint -sha256",
    "desc": "Fingerprint"
   },
   {
    "cmd": "curl -s -k -v https://objetivo.com/ 2>&1 | grep -i 'subject\\|issuer\\|expire'",
    "desc": "Curl cert"
   },
   {
    "cmd": "sslscan --no-colour IP:443",
    "desc": "SSLScan"
   },
   {
    "cmd": "sslscan --no-colour --tlsall IP:443",
    "desc": "TLS all"
   },
   {
    "cmd": "nmap --script=ssl-cert -p443 IP",
    "desc": "Nmap cert"
   },
   {
    "cmd": "nmap --script=ssl-enum-ciphers -p443 IP",
    "desc": "Ciphers"
   },
   {
    "cmd": "nmap --script=ssl-cert-intaddr -p443 IP",
    "desc": "Intaddr"
   },
   {
    "cmd": "testssl.sh --full IP:443",
    "desc": "Testssl"
   },
   {
    "cmd": "testssl.sh --fast IP:443",
    "desc": "Fast"
   },
   {
    "cmd": "testssl.sh --logfile /tmp/ssl.txt IP:443",
    "desc": "Log"
   },
   {
    "cmd": "curl -s 'https://crt.sh/?q=%25.objetivo.com&output=json' | jq -r '.[].name_value' | sort -u",
    "desc": "crt.sh certs"
   }
  ]
 },
 {
  "tool": "wayback-osint",
  "desc": "URLs históricas (Wayback Machine)",
  "commands": [
   {
    "cmd": "curl -s 'http://web.archive.org/cdx/search/cdx?url=objetivo.com/*&output=text&fl=original&collapse=urlkey' | head -50",
    "desc": "URLs"
   },
   {
    "cmd": "curl -s 'http://web.archive.org/cdx/search/cdx?url=objetivo.com/*&output=json&fl=original,timestamp,statuscode' | jq .",
    "desc": "JSON"
   },
   {
    "cmd": "curl -s 'http://web.archive.org/cdx/search/cdx?url=objetivo.com/*&output=text&fl=original&filter=urlkey:.*admin.*'",
    "desc": "Filtrar admin"
   },
   {
    "cmd": "curl -s 'http://web.archive.org/cdx/search/cdx?url=objetivo.com/*&output=text&fl=original&from=2020&to=2022'",
    "desc": "Rango años"
   },
   {
    "cmd": "curl -s 'http://web.archive.org/cdx/search/cdx?url=objetivo.com/*.php&output=text&fl=original'",
    "desc": "PHP files"
   },
   {
    "cmd": "curl -s 'http://web.archive.org/cdx/search/cdx?url=objetivo.com/*&output=text&fl=original&filter=statuscode:200'",
    "desc": "200s"
   },
   {
    "cmd": "waybackpy --url objetivo.com --get_urls | head",
    "desc": "Waybackpy"
   },
   {
    "cmd": "waybackpy --url objetivo.com --get_archive",
    "desc": "Archivo"
   },
   {
    "cmd": "curl -s 'http://archive.org/wayback/available?url=objetivo.com' | jq .",
    "desc": "Disponible"
   },
   {
    "cmd": "curl -s 'http://web.archive.org/cdx/search/cdx?url=objetivo.com/*&output=text&fl=original&collapse=urlkey&limit=1000' | sort -u > urls.txt",
    "desc": "Guardar"
   }
  ]
 },
 {
  "tool": "recon-automation",
  "desc": "Automatización de recon (loops shell)",
  "commands": [
   {
    "cmd": "for p in 22 80 443 8080; do nc -z -w1 IP $p && echo 'open: '$p; done",
    "desc": "Check puertos"
   },
   {
    "cmd": "for sub in $(cat subs.txt); do host $sub | grep -v 'not found'; done",
    "desc": "Resolver subs"
   },
   {
    "cmd": "cat ips.txt | xargs -P 10 -I {} nmap -Pn -sV -T4 {} -oN {}.nmap",
    "desc": "Nmap paralelo"
   },
   {
    "cmd": "for c in $(seq 1 254); do ping -c1 -W1 10.0.0.$c | grep -q ttl && echo 10.0.0.$c up; done",
    "desc": "Ping sweep"
   },
   {
    "cmd": "while read line; do curl -s -o /dev/null -w '%{http_code} '$line'\\n' http://$line; done < hosts.txt",
    "desc": "HTTP codes"
   },
   {
    "cmd": "cat urls.txt | xargs -P 20 -I {} curl -s -k -o /dev/null -w '%{http_code} {}\\n' {} | sort -u",
    "desc": "Status urls"
   },
   {
    "cmd": "openssl s_client -connect IP:443 -servername objetivo.com < /dev/null 2>/dev/null | openssl x509 -noout -subject",
    "desc": "Certs loop"
   },
   {
    "cmd": "grep -rh 'password\\|secret\\|api_key' /var/www/ 2>/dev/null | sort -u",
    "desc": "Grep secrets"
   },
   {
    "cmd": "for d in $(cat dirs.txt); do curl -s -o /dev/null -w '%{http_code} /'$d'\\n' http://IP/$d; done | sort",
    "desc": "Fuzz dirs"
   },
   {
    "cmd": "cat ports.txt | while read p; do (echo >/dev/tcp/IP/$p) >/dev/null 2>&1 && echo $p open; done",
    "desc": "Bash TCP"
   },
   {
    "cmd": "nmap -iL hosts.txt -p- -T4 -oA all",
    "desc": "Nmap lista"
   },
   {
    "cmd": "msfconsole -q -x 'use auxiliary/scanner/portscan/tcp; set RHOSTS IP; set PORTS 1-1000; run'",
    "desc": "MSF scan"
   },
   {
    "cmd": "curl -s 'https://dns.google/resolve?name=objetivo.com&type=A' | jq -r '.Answer[].data'",
    "desc": "Resolve API"
   },
   {
    "cmd": "find / -name '*.pem' -o -name '*.key' 2>/dev/null | head -20",
    "desc": "Keys en disco"
   }
  ]
 },
 {
  "tool": "netcraft-osint",
  "desc": "Consultas pasivas a APIs de internet",
  "commands": [
   {
    "cmd": "curl -s 'https://crt.sh/?q=%25.objetivo.com&output=json' | jq -r '.[].name_value' | sort -u",
    "desc": "crt.sh"
   },
   {
    "cmd": "curl -s 'https://dns.google/resolve?name=objetivo.com&type=MX' | jq .",
    "desc": "Google DNS"
   },
   {
    "cmd": "curl -s 'https://otx.alienvault.com/api/v1/indicators/domain/objetivo.com/passive_dns' | jq .",
    "desc": "Alienvault"
   },
   {
    "cmd": "curl -s 'https://urlscan.io/api/v1/search/?q=domain:objetivo.com' | jq '.results[].page.url'",
    "desc": "URLScan"
   },
   {
    "cmd": "curl -s 'https://www.virustotal.com/vtapi/v2/domain/report?apikey=KEY&domain=objetivo.com' | jq .",
    "desc": "VT"
   },
   {
    "cmd": "curl -s 'https://api.github.com/search/code?q=objetivo.com' -H 'Authorization: token TOKEN' | jq '.items[].html_url'",
    "desc": "GitHub"
   },
   {
    "cmd": "curl -s 'https://api.shodan.io/shodan/host/IP?key=KEY' | jq .",
    "desc": "Shodan"
   },
   {
    "cmd": "curl -s 'https://api.shodan.io/shodan/ports?key=KEY' | jq .",
    "desc": "Shodan ports"
   },
   {
    "cmd": "curl -s 'https://otx.alienvault.com/api/v1/indicators/ip/IP/geo' | jq .",
    "desc": "Alienvault IP"
   },
   {
    "cmd": "curl -s 'https://urlscan.io/api/v1/scan/' -d 'url=http://objetivo.com' -H 'API-Key: KEY' | jq .",
    "desc": "URLScan scan"
   }
  ]
 },
 {
  "tool": "spiderfoot",
  "desc": "Framework OSINT automatizado",
  "commands": [
   {
    "cmd": "spiderfoot -s objetivo.com",
    "desc": "Escanear"
   },
   {
    "cmd": "spiderfoot -s IP",
    "desc": "IP"
   },
   {
    "cmd": "spiderfoot -s objetivo.com -m passive",
    "desc": "Solo passive"
   },
   {
    "cmd": "spiderfoot -s objetivo.com -m sfp_email",
    "desc": "Emails"
   },
   {
    "cmd": "spiderfoot -s objetivo.com -o /tmp/out.html",
    "desc": "HTML"
   },
   {
    "cmd": "spiderfoot -l 127.0.0.1:5001",
    "desc": "Servidor"
   },
   {
    "cmd": "spiderfoot -s objetivo.com -u user",
    "desc": "Usuario"
   },
   {
    "cmd": "python3 sf.py -s objetivo.com -m passive -o out.html",
    "desc": "Python"
   },
   {
    "cmd": "curl -s http://127.0.0.1:5001/",
    "desc": "UI"
   },
   {
    "cmd": "spiderfoot -s objetivo.com -x",
    "desc": "No store"
   },
   {
    "cmd": "spiderfoot --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "shodan-cli",
  "desc": "CLI de Shodan",
  "commands": [
   {
    "cmd": "shodan search 'apache'",
    "desc": "Buscar"
   },
   {
    "cmd": "shodan search 'port:80 country:ES'",
    "desc": "Filtros"
   },
   {
    "cmd": "shodan search 'org:\"Google\"'",
    "desc": "Org"
   },
   {
    "cmd": "shodan host IP",
    "desc": "Host info"
   },
   {
    "cmd": "shodan host IP --history",
    "desc": "Histórico"
   },
   {
    "cmd": "shodan scan submit IP",
    "desc": "Escanear"
   },
   {
    "cmd": "shodan scan status ID",
    "desc": "Estado"
   },
   {
    "cmd": "shodan scan list",
    "desc": "Escaneos"
   },
   {
    "cmd": "shodan search --fields ip_str,port,org 'ssh'",
    "desc": "Campos"
   },
   {
    "cmd": "shodan parse out.json.gz",
    "desc": "Parsear"
   },
   {
    "cmd": "shodan convert out.json.gz out.csv",
    "desc": "Convertir"
   },
   {
    "cmd": "shodan stats 'http'",
    "desc": "Stats"
   },
   {
    "cmd": "shodan alert create name 'net:1.2.3.0/24'",
    "desc": "Alertas"
   },
   {
    "cmd": "shodan alert list",
    "desc": "Listar alertas"
   },
   {
    "cmd": "shodan info",
    "desc": "Info API"
   }
  ]
 }
];
