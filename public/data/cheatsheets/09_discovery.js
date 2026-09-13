// Descubrimiento (Discovery)
window.WIKI_CHEATSHEETS_09_DISCOVERY = [
 {
  "tool": "sctpscan",
  "desc": "Escáner de puertos SCTP",
  "commands": [
   {
    "cmd": "sctpscan 192.168.1.10",
    "desc": "Escaneo SCTP básico"
   },
   {
    "cmd": "sctpscan -p 80 192.168.1.10",
    "desc": "Puerto específico"
   },
   {
    "cmd": "sctpscan -p 1-1000 192.168.1.10",
    "desc": "Rango"
   },
   {
    "cmd": "sctpscan -v 192.168.1.10",
    "desc": "Verbose"
   },
   {
    "cmd": "sctpscan -i eth0 192.168.1.10",
    "desc": "Interfaz"
   },
   {
    "cmd": "sctpscan -c 5 192.168.1.10",
    "desc": "Count"
   }
  ]
 },
 {
  "tool": "ike-scan",
  "desc": "Descubrir y fingerprint servidores IKE/IPsec (VPN)",
  "commands": [
   {
    "cmd": "ike-scan 192.168.1.10",
    "desc": "Escaneo básico"
   },
   {
    "cmd": "ike-scan -M 192.168.1.10",
    "desc": "Multiline output"
   },
   {
    "cmd": "ike-scan -A 192.168.1.10",
    "desc": "Agressive mode"
   },
   {
    "cmd": "ike-scan -v 192.168.1.10",
    "desc": "Verbose"
   },
   {
    "cmd": "ike-scan -d 1 192.168.1.10",
    "desc": "Debug"
   },
   {
    "cmd": "ike-scan -P out.txt 192.168.1.10",
    "desc": "Guardar handshakes"
   },
   {
    "cmd": "ike-scan -f wordlist.txt 192.168.1.10",
    "desc": "Fingerprint con IDs"
   },
   {
    "cmd": "ike-scan -s 500 192.168.1.10",
    "desc": "Puerto fuente"
   },
   {
    "cmd": "ike-scan -r 192.168.1.0/24",
    "desc": "Rango de red"
   },
   {
    "cmd": "ike-scan --pskcrack out.txt",
    "desc": "Crackear PSK"
   },
   {
    "cmd": "ike-scan -a 192.168.1.10",
    "desc": "Agressive con PSK crack"
   },
   {
    "cmd": "ike-scan -o out.txt 192.168.1.10",
    "desc": "Salida"
   }
  ]
 },
 {
  "tool": "sslscan",
  "desc": "Analizar configuración SSL/TLS de servidores",
  "commands": [
   {
    "cmd": "sslscan objetivo.com",
    "desc": "Escaneo básico"
   },
   {
    "cmd": "sslscan --no-ciphersuites objetivo.com",
    "desc": "Solo certificado"
   },
   {
    "cmd": "sslscan --no-certificate objetivo.com",
    "desc": "Solo ciphers"
   },
   {
    "cmd": "sslscan --tlsall objetivo.com",
    "desc": "Todas las versiones TLS"
   },
   {
    "cmd": "sslscan --tls1_3 objetivo.com",
    "desc": "Solo TLS 1.3"
   },
   {
    "cmd": "sslscan -p 8443 objetivo.com",
    "desc": "Puerto custom"
   },
   {
    "cmd": "sslscan --verbose objetivo.com",
    "desc": "Verbose"
   },
   {
    "cmd": "sslscan --sni-name objetivo.com IP",
    "desc": "SNI custom"
   },
   {
    "cmd": "sslscan --http objetivo.com",
    "desc": "Test HTTP"
   },
   {
    "cmd": "sslscan --xml=out.xml objetivo.com",
    "desc": "Salida XML"
   },
   {
    "cmd": "sslscan --show-certificate objetivo.com",
    "desc": "Mostrar cert"
   },
   {
    "cmd": "sslscan --no-colour objetivo.com",
    "desc": "Sin colores"
   },
   {
    "cmd": "sslscan --ssl2 objetivo.com",
    "desc": "Solo SSLv2"
   },
   {
    "cmd": "sslscan --ocsp objetivo.com",
    "desc": "Con OCSP"
   },
   {
    "cmd": "sslscan --renegotiation objetivo.com",
    "desc": "Test renegociación"
   }
  ]
 },
 {
  "tool": "sslyze",
  "desc": "Escáner SSL/TLS avanzado y automatizable",
  "commands": [
   {
    "cmd": "sslyze objetivo.com",
    "desc": "Escaneo completo"
   },
   {
    "cmd": "sslyze --certificate_info objetivo.com",
    "desc": "Info del cert"
   },
   {
    "cmd": "sslyze --ssl_versions objetivo.com",
    "desc": "Versiones SSL/TLS"
   },
   {
    "cmd": "sslyze --cipher_suites objetivo.com",
    "desc": "Cipher suites"
   },
   {
    "cmd": "sslyze --tlsv1_2 --cipher_suites objetivo.com",
    "desc": "Ciphers TLS1.2"
   },
   {
    "cmd": "sslyze --cert_expiration objetivo.com",
    "desc": "Caducidad del cert"
   },
   {
    "cmd": "sslyze --heartbleed objetivo.com",
    "desc": "Test Heartbleed"
   },
   {
    "cmd": "sslyze --compression objetivo.com",
    "desc": "Compresión CRIME"
   },
   {
    "cmd": "sslyze --renegotiation objetivo.com",
    "desc": "Renegociación"
   },
   {
    "cmd": "sslyze --sni objetivo.com IP",
    "desc": "SNI"
   },
   {
    "cmd": "sslyze --json_out=out.json objetivo.com",
    "desc": "Salida JSON"
   },
   {
    "cmd": "sslyze --text_out=out.txt objetivo.com",
    "desc": "Salida texto"
   },
   {
    "cmd": "sslyze -u --certificate_info --ssl_versions objetivo.com",
    "desc": "Uso estándar"
   },
   {
    "cmd": "sslyze --quiet objetivo.com",
    "desc": "Quiet"
   },
   {
    "cmd": "sslyze --update_trust_store",
    "desc": "Actualizar CA store"
   },
   {
    "cmd": "sslyze --sslv2 --sslv3 objetivo.com",
    "desc": "Versiones legacy"
   }
  ]
 },
 {
  "tool": "tlssled",
  "desc": "Auditoría SSL/TLS de servidores web",
  "commands": [
   {
    "cmd": "tlssled objetivo.com 443",
    "desc": "Auditoría en puerto 443"
   },
   {
    "cmd": "tlssled -c objetivo.com 443",
    "desc": "Con color"
   },
   {
    "cmd": "tlssled -d objetivo.com 443",
    "desc": "Debug"
   },
   {
    "cmd": "tlssled -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "snmp-check",
  "desc": "Enumeración completa de SNMP (users, procesos, red, storage)",
  "commands": [
   {
    "cmd": "snmp-check 192.168.1.10",
    "desc": "Enumeración completa"
   },
   {
    "cmd": "snmp-check 192.168.1.10 -c public",
    "desc": "Community string"
   },
   {
    "cmd": "snmp-check 192.168.1.10 -c private",
    "desc": "Community private"
   },
   {
    "cmd": "snmp-check 192.168.1.10 -p 161",
    "desc": "Puerto"
   },
   {
    "cmd": "snmp-check 192.168.1.10 -v2c",
    "desc": "Versión SNMP"
   },
   {
    "cmd": "snmp-check 192.168.1.10 -w out.txt",
    "desc": "Guardar"
   },
   {
    "cmd": "snmp-check 192.168.1.10 -t 5",
    "desc": "Timeout"
   },
   {
    "cmd": "snmp-check 192.168.1.10 -r 2",
    "desc": "Reintentos"
   }
  ]
 },
 {
  "tool": "braa",
  "desc": "Escáner SNMP masivo rápido (single query)",
  "commands": [
   {
    "cmd": "braa public@192.168.1.10:.1.3.6.1.2.1.1.1.0",
    "desc": "Query OID simple"
   },
   {
    "cmd": "braa public@192.168.1.0/24:.1.3.6.1.2.1.1.5.0",
    "desc": "Subred completa"
   },
   {
    "cmd": "braa 'public@192.168.1.10:.*'",
    "desc": "Walk completo"
   },
   {
    "cmd": "braa -v public@192.168.1.10:.1.3.6.1",
    "desc": "Verbose"
   },
   {
    "cmd": "braa -t 5 public@192.168.1.10:.1.3.6.1",
    "desc": "Timeout"
   },
   {
    "cmd": "braa -r 3 public@192.168.1.10:.1.3.6.1",
    "desc": "Reintentos"
   },
   {
    "cmd": "braa 'public@192.168.1.10:sysDescr'",
    "desc": "OID por nombre"
   },
   {
    "cmd": "braa 'private@192.168.1.10:.1.3.6.1.2.1.25.1'",
    "desc": "Host resources"
   }
  ]
 },
 {
  "tool": "onesixtyone",
  "desc": "Fuerza bruta de community strings SNMP",
  "commands": [
   {
    "cmd": "onesixtyone 192.168.1.10 public",
    "desc": "Probar community"
   },
   {
    "cmd": "onesixtyone -c community.txt 192.168.1.10",
    "desc": "Con lista"
   },
   {
    "cmd": "onesixtyone -i hosts.txt -c community.txt",
    "desc": "Multi hosts"
   },
   {
    "cmd": "onesixtyone -w 100 192.168.1.10 public",
    "desc": "Timeout 100ms"
   },
   {
    "cmd": "onesixtyone -q 192.168.1.10 public",
    "desc": "Quiet"
   },
   {
    "cmd": "onesixtyone -d 192.168.1.10 public",
    "desc": "Debug"
   },
   {
    "cmd": "onesixtyone -p 161 192.168.1.10 -c list.txt",
    "desc": "Puerto"
   },
   {
    "cmd": "onesixtyone -n 192.168.1.10 public",
    "desc": "Sin bandera de respuesta"
   }
  ]
 },
 {
  "tool": "snmpwalk",
  "desc": "Enumerar árbol MIB SNMP completo",
  "commands": [
   {
    "cmd": "snmpwalk -v2c -c public 192.168.1.10",
    "desc": "Walk básico"
   },
   {
    "cmd": "snmpwalk -v1 -c public 192.168.1.10",
    "desc": "SNMPv1"
   },
   {
    "cmd": "snmpwalk -v3 -l authPriv -u user -a SHA -A pass -x AES -X priv 192.168.1.10",
    "desc": "SNMPv3"
   },
   {
    "cmd": "snmpwalk -v2c -c public -On 192.168.1.10",
    "desc": "Con OID numérico"
   },
   {
    "cmd": "snmpwalk -v2c -c public -t 5 192.168.1.10",
    "desc": "Timeout 5s"
   },
   {
    "cmd": "snmpwalk -v2c -c public -r 3 192.168.1.10",
    "desc": "Reintentos"
   },
   {
    "cmd": "snmpwalk -v2c -c public 192.168.1.10 .1.3.6.1.2.1.1",
    "desc": "Rama system"
   },
   {
    "cmd": "snmpwalk -v2c -c public 192.168.1.10 .1.3.6.1.2.1.25",
    "desc": "Host resources"
   },
   {
    "cmd": "snmpwalk -v2c -c public 192.168.1.10 .1.3.6.1.2.1.1.5.0",
    "desc": "Hostname"
   },
   {
    "cmd": "snmpwalk -v2c -c public 192.168.1.10 .1.3.6.1.4.1.77.1.2.25",
    "desc": "Usuarios Windows"
   },
   {
    "cmd": "snmpwalk -v2c -c public 192.168.1.10 .1.3.6.1.2.1.4",
    "desc": "Interfaces IP"
   },
   {
    "cmd": "snmpwalk -v2c -c public 192.168.1.10 .1.3.6.1.2.1.2.2.1.2",
    "desc": "Nombres de interfaces"
   },
   {
    "cmd": "snmpwalk -v2c -c public 192.168.1.10 .1.3.6.1.2.1.25.4.2.1.2",
    "desc": "Procesos en ejecución"
   },
   {
    "cmd": "snmpwalk -v2c -c public 192.168.1.10 .1.3.6.1.2.1.25.6.3.1.2",
    "desc": "Software instalado"
   },
   {
    "cmd": "snmpwalk -v2c -c public 192.168.1.10 .1.3.6.1.2.1.25.2.3.1.3",
    "desc": "Discos y almacenamiento"
   },
   {
    "cmd": "snmpwalk -v2c -c public 192.168.1.10 .1.3.6.1.4.1.9.9.43.1.1.1",
    "desc": "Router Cisco"
   },
   {
    "cmd": "snmpwalk -v2c -c public 192.168.1.10 .1.3.6.1.4.1.9.2.1.2",
    "desc": "Config de Cisco"
   },
   {
    "cmd": "snmpwalk -v2c -c public 192.168.1.10 .1.3.6.1.2.1.6.13.1.1",
    "desc": "Conexiones TCP"
   },
   {
    "cmd": "snmpwalk -v2c -c public 192.168.1.10 .1.3.6.1.2.1.17.4.3.1.1",
    "desc": "Tabla MAC"
   }
  ]
 },
 {
  "tool": "nbtscan",
  "desc": "Escaneo de NetBIOS para descubrir hosts y shares",
  "commands": [
   {
    "cmd": "nbtscan 192.168.1.0/24",
    "desc": "Escaneo de subred"
   },
   {
    "cmd": "nbtscan -r 192.168.1.0/24",
    "desc": "Rango"
   },
   {
    "cmd": "nbtscan -v 192.168.1.0/24",
    "desc": "Verbose"
   },
   {
    "cmd": "nbtscan -s ';' 192.168.1.0/24",
    "desc": "Separador custom"
   },
   {
    "cmd": "nbtscan -f hosts.txt",
    "desc": "Lista de hosts"
   },
   {
    "cmd": "nbtscan -t 100 192.168.1.0/24",
    "desc": "Timeout"
   },
   {
    "cmd": "nbtscan -w 500 192.168.1.0/24",
    "desc": "Delay de espera"
   },
   {
    "cmd": "nbtscan -p 137 192.168.1.0/24",
    "desc": "Puerto NetBIOS"
   },
   {
    "cmd": "nbtscan -m 192.168.1.0/24",
    "desc": "Mostrar MAC"
   }
  ]
 },
 {
  "tool": "hping3",
  "desc": "Análisis de red y firewall con paquetes custom",
  "commands": [
   {
    "cmd": "hping3 -S -p 80 192.168.1.10",
    "desc": "SYN a puerto 80"
   },
   {
    "cmd": "hping3 -A -p 80 192.168.1.10",
    "desc": "ACK scan"
   },
   {
    "cmd": "hping3 -1 192.168.1.10",
    "desc": "ICMP"
   },
   {
    "cmd": "hping3 -2 -p 53 192.168.1.10",
    "desc": "UDP"
   },
   {
    "cmd": "hping3 -8 -p 1-1024 -S 192.168.1.10",
    "desc": "Scan de puertos"
   },
   {
    "cmd": "hping3 -T 192.168.1.10",
    "desc": "Traceroute"
   },
   {
    "cmd": "hping3 --traceroute -S -p 80 192.168.1.10",
    "desc": "Traceroute TCP"
   },
   {
    "cmd": "hping3 -S -p 80 -f 192.168.1.10",
    "desc": "Fragmentado"
   },
   {
    "cmd": "hping3 -S -p 80 -c 3 192.168.1.10",
    "desc": "3 paquetes"
   },
   {
    "cmd": "hping3 -i u100 -S -p 80 192.168.1.10",
    "desc": "Intervalo 100us"
   },
   {
    "cmd": "hping3 -S -p 80 --ttl 5 192.168.1.10",
    "desc": "TTL custom"
   },
   {
    "cmd": "hping3 -S -p 80 -E payload.txt 192.168.1.10",
    "desc": "Con payload"
   },
   {
    "cmd": "hping3 -S -p 80 --spoof 8.8.8.8 192.168.1.10",
    "desc": "Spoof IP"
   },
   {
    "cmd": "hping3 -S -p 80 --rand-source 192.168.1.10",
    "desc": "Source aleatoria"
   },
   {
    "cmd": "hping3 -S -p 80 -w 0 192.168.1.10",
    "desc": "Window 0 (firmas)"
   }
  ]
 },
 {
  "tool": "arpwatch",
  "desc": "Monitorizar cambios de MAC en la red",
  "commands": [
   {
    "cmd": "arpwatch -i eth0",
    "desc": "Monitorizar interfaz"
   },
   {
    "cmd": "arpwatch -i eth0 -d",
    "desc": "Daemon"
   },
   {
    "cmd": "arpwatch -i eth0 -f arp.dat",
    "desc": "Base de datos"
   },
   {
    "cmd": "arpwatch -i eth0 -r pcap.pcap",
    "desc": "Leer pcap"
   },
   {
    "cmd": "arpwatch -i eth0 -n 192.168.1.0/24",
    "desc": "Red a vigilar"
   },
   {
    "cmd": "arpwatch -i eth0 -m user@mail.com",
    "desc": "Email de alertas"
   },
   {
    "cmd": "arpwatch -i eth0 -u user",
    "desc": "Usuario del daemon"
   },
   {
    "cmd": "arpwatch -i eth0 -e",
    "desc": "Forward de alertas"
   },
   {
    "cmd": "arpwatch -i eth0 -a",
    "desc": "Alerta de IP nuevos"
   },
   {
    "cmd": "arpwatch -i eth0 -v",
    "desc": "Verbose"
   }
  ]
 },
 {
  "tool": "dnschef",
  "desc": "Servidor DNS falso para descubrimiento y redirección",
  "commands": [
   {
    "cmd": "dnschef --interface 0.0.0.0 --fakeip 127.0.0.1",
    "desc": "Spoof todo"
   },
   {
    "cmd": "dnschef --fakeip 10.10.10.5 --fakedomains objetivo.com",
    "desc": "Spoof dominio"
   },
   {
    "cmd": "dnschef --fakerecord A 1.2.3.4 --fakedomains *.internal",
    "desc": "Record fake"
   },
   {
    "cmd": "dnschef --port 53 --interface eth0",
    "desc": "Puerto e interfaz"
   },
   {
    "cmd": "dnschef --nameservers 8.8.8.8",
    "desc": "Resolver real"
   },
   {
    "cmd": "dnschef --logfile dns.log",
    "desc": "Log"
   },
   {
    "cmd": "dnschef --fakeip 192.168.1.10 --fakedomains update.apple.com",
    "desc": "Spoof updates"
   }
  ]
 },
 {
  "tool": "above",
  "desc": "Sniffer de red con estadísticas y captura de credenciales",
  "commands": [
   {
    "cmd": "above -i eth0",
    "desc": "Sniffing en interfaz"
   },
   {
    "cmd": "above -i eth0 -s",
    "desc": "Estadísticas"
   },
   {
    "cmd": "above -i eth0 -c",
    "desc": "Capturar credenciales"
   },
   {
    "cmd": "above -i eth0 -o out.txt",
    "desc": "Salida"
   },
   {
    "cmd": "above -i eth0 -p",
    "desc": "Promiscuo"
   },
   {
    "cmd": "above -i eth0 -f filter",
    "desc": "Filtro BPF"
   },
   {
    "cmd": "above -i eth0 -l",
    "desc": "Log"
   },
   {
    "cmd": "above -i eth0 -n",
    "desc": "Sin resolución"
   },
   {
    "cmd": "above -i eth0 -r cap.pcap",
    "desc": "Leer pcap"
   }
  ]
 },
 {
  "tool": "darkstat",
  "desc": "Sniffer de red con interfaz web de estadísticas",
  "commands": [
   {
    "cmd": "darkstat -i eth0",
    "desc": "Monitorizar interfaz"
   },
   {
    "cmd": "darkstat -i eth0 --port 667",
    "desc": "Puerto web"
   },
   {
    "cmd": "darkstat -i eth0 -b 192.168.1.100",
    "desc": "Dirección de bind"
   },
   {
    "cmd": "darkstat -i eth0 -f 'tcp port 80'",
    "desc": "Filtro"
   },
   {
    "cmd": "darkstat -i eth0 -s",
    "desc": "Sin promiscuo"
   },
   {
    "cmd": "darkstat -i eth0 -n",
    "desc": "Sin resolución"
   },
   {
    "cmd": "darkstat -i eth0 -l log.txt",
    "desc": "Log"
   },
   {
    "cmd": "darkstat -i eth0 -t",
    "desc": "Sin títulos"
   }
  ]
 },
 {
  "tool": "driftnet",
  "desc": "Capturar imágenes que atraviesan la red",
  "commands": [
   {
    "cmd": "driftnet -i eth0",
    "desc": "Capturar imágenes"
   },
   {
    "cmd": "driftnet -i eth0 -d dir",
    "desc": "Guardar en directorio"
   },
   {
    "cmd": "driftnet -i eth0 -a",
    "desc": "Guardar todas las imágenes"
   },
   {
    "cmd": "driftnet -i eth0 -b",
    "desc": "Filtro visual"
   },
   {
    "cmd": "driftnet -i eth0 -m",
    "desc": "Modo multiplex"
   },
   {
    "cmd": "driftnet -i eth0 -s",
    "desc": "Guardar MIME"
   },
   {
    "cmd": "driftnet -i eth0 -t",
    "desc": "Solo TCP"
   },
   {
    "cmd": "driftnet -i eth0 -f cap.pcap",
    "desc": "Leer pcap"
   },
   {
    "cmd": "driftnet -i eth0 -v",
    "desc": "Verbose"
   },
   {
    "cmd": "driftnet -i eth0 -x",
    "desc": "Extract MIME"
   }
  ]
 },
 {
  "tool": "dsniff",
  "desc": "Suite de sniffing (arpspoof, dnsspoof, mailsnarf, urlsnarf)",
  "commands": [
   {
    "cmd": "dsniff -i eth0",
    "desc": "Capturar credenciales"
   },
   {
    "cmd": "dsniff -i eth0 -c",
    "desc": "Modo cliente"
   },
   {
    "cmd": "dsniff -i eth0 -m",
    "desc": "Múltiples credenciales"
   },
   {
    "cmd": "dsniff -i eth0 -s",
    "desc": "Sin SMB"
   },
   {
    "cmd": "arpspoof -i eth0 -t 192.168.1.10 192.168.1.1",
    "desc": "ARP spoof MITM"
   },
   {
    "cmd": "dnsspoof -i eth0 -f hosts.txt",
    "desc": "Spoof DNS"
   },
   {
    "cmd": "mailsnarf -i eth0",
    "desc": "Capturar emails"
   },
   {
    "cmd": "urlsnarf -i eth0",
    "desc": "Capturar URLs"
   },
   {
    "cmd": "webspy -i eth0 192.168.1.10",
    "desc": "Seguir navegación"
   },
   {
    "cmd": "filesnarf -i eth0",
    "desc": "Capturar archivos NFS"
   },
   {
    "cmd": "macof -i eth0",
    "desc": "Inundar tabla MAC"
   },
   {
    "cmd": "tcpkill -i eth0 host objetivo",
    "desc": "Matar conexiones TCP"
   },
   {
    "cmd": "tcpnice -i eth0 host objetivo",
    "desc": "Inyectar RST"
   },
   {
    "cmd": "arpspoof -i eth0 -t 192.168.1.1 192.168.1.10",
    "desc": "Spoof inverso"
   }
  ]
 },
 {
  "tool": "netsniff-ng",
  "desc": "Suite de sniffing de red de alto rendimiento",
  "commands": [
   {
    "cmd": "netsniff-ng --in eth0",
    "desc": "Capturar en vivo"
   },
   {
    "cmd": "netsniff-ng --in eth0 --out capture.pcap",
    "desc": "Guardar pcap"
   },
   {
    "cmd": "netsniff-ng --in capture.pcap --out out.pcap",
    "desc": "Reescribir pcap"
   },
   {
    "cmd": "netsniff-ng --in eth0 --ring-size 1GB",
    "desc": "Ring buffer"
   },
   {
    "cmd": "netsniff-ng --in eth0 --bind-cpu 0",
    "desc": "CPU bind"
   },
   {
    "cmd": "netsniff-ng --in eth0 --prio-high",
    "desc": "Prioridad alta"
   },
   {
    "cmd": "netsniff-ng --in eth0 -p",
    "desc": "Promiscuo"
   },
   {
    "cmd": "netsniff-ng --in eth0 --filter 'tcp port 80'",
    "desc": "Filtro BPF"
   },
   {
    "cmd": "netsniff-ng --in eth0 --silent",
    "desc": "Silencioso"
   },
   {
    "cmd": "netsniff-ng --in eth0 --verbose",
    "desc": "Verbose"
   },
   {
    "cmd": "trafgen --dev eth0 --conf traffic.trafgen",
    "desc": "Generar tráfico"
   },
   {
    "cmd": "mausezahn -x eth0",
    "desc": "Generador de paquetes"
   },
   {
    "cmd": "ifpps --dev eth0",
    "desc": "Estadísticas en tiempo real"
   },
   {
    "cmd": "astraceroute 8.8.8.8",
    "desc": "Traceroute AS"
   },
   {
    "cmd": "curvetun -s -p 4444",
    "desc": "Túnel cifrado"
   },
   {
    "cmd": "bpf --prog 'tcp port 80'",
    "desc": "Compilar filtro BPF"
   }
  ]
 },
 {
  "tool": "wireshark",
  "desc": "Analizador de protocolos de red (GUI)",
  "commands": [
   {
    "cmd": "wireshark",
    "desc": "Abrir GUI"
   },
   {
    "cmd": "wireshark -i eth0",
    "desc": "Capturar en interfaz"
   },
   {
    "cmd": "wireshark -r capture.pcap",
    "desc": "Abrir pcap"
   },
   {
    "cmd": "wireshark -i eth0 -k",
    "desc": "Empezar captura"
   },
   {
    "cmd": "wireshark -i eth0 -f 'tcp port 80'",
    "desc": "Filtro de captura"
   },
   {
    "cmd": "wireshark -r cap.pcap -Y 'http'",
    "desc": "Filtro de display"
   },
   {
    "cmd": "wireshark -r cap.pcap -Y 'http.request'",
    "desc": "Solo requests"
   },
   {
    "cmd": "wireshark -r cap.pcap -Y 'tcp.flags.syn==1'",
    "desc": "SYN packets"
   },
   {
    "cmd": "wireshark -r cap.pcap -Y 'dns'",
    "desc": "Tráfico DNS"
   },
   {
    "cmd": "wireshark -r cap.pcap -Y 'tls.handshake.type==1'",
    "desc": "Handshakes TLS"
   },
   {
    "cmd": "tshark -i eth0 -w cap.pcap",
    "desc": "Captura CLI"
   },
   {
    "cmd": "tshark -r cap.pcap -Y 'http' -T fields -e http.host",
    "desc": "Hosts HTTP"
   },
   {
    "cmd": "tshark -r cap.pcap -q -z io,stat,30",
    "desc": "Estadísticas cada 30s"
   },
   {
    "cmd": "tshark -r cap.pcap -q -z conv,tcp",
    "desc": "Conversaciones TCP"
   },
   {
    "cmd": "tshark -r cap.pcap -q -z endpoints,ip",
    "desc": "Endpoints IP"
   },
   {
    "cmd": "tshark -r cap.pcap -q -z http,tree",
    "desc": "Árbol HTTP"
   },
   {
    "cmd": "tshark -r cap.pcap -Y 'http.request.method==POST'",
    "desc": "POSTs"
   },
   {
    "cmd": "tshark -r cap.pcap -Y 'data-text-lines contains password'",
    "desc": "Buscar password"
   },
   {
    "cmd": "tshark -r cap.pcap -T fields -e frame.time -e ip.src -e tcp.dstport",
    "desc": "Campos custom"
   },
   {
    "cmd": "tshark -r cap.pcap -Y 'ntlmssp'",
    "desc": "Tráfico NTLM"
   }
  ]
 },
 {
  "tool": "tcpdump",
  "desc": "Capturador de paquetes CLI clásico",
  "commands": [
   {
    "cmd": "tcpdump -i eth0",
    "desc": "Capturar en interfaz"
   },
   {
    "cmd": "tcpdump -i eth0 -w capture.pcap",
    "desc": "Guardar pcap"
   },
   {
    "cmd": "tcpdump -r capture.pcap",
    "desc": "Leer pcap"
   },
   {
    "cmd": "tcpdump -i eth0 port 80",
    "desc": "Filtro por puerto"
   },
   {
    "cmd": "tcpdump -i eth0 host 192.168.1.10",
    "desc": "Filtro por host"
   },
   {
    "cmd": "tcpdump -i eth0 src host 192.168.1.10",
    "desc": "Solo fuente"
   },
   {
    "cmd": "tcpdump -i eth0 dst host 192.168.1.10",
    "desc": "Solo destino"
   },
   {
    "cmd": "tcpdump -i eth0 tcp port 22",
    "desc": "SSH"
   },
   {
    "cmd": "tcpdump -i eth0 udp port 53",
    "desc": "DNS"
   },
   {
    "cmd": "tcpdump -i eth0 icmp",
    "desc": "ICMP"
   },
   {
    "cmd": "tcpdump -i eth0 'tcp[tcpflags] & tcp-syn != 0'",
    "desc": "Solo SYN"
   },
   {
    "cmd": "tcpdump -i eth0 'tcp[13] == 0x12'",
    "desc": "SYN-ACK"
   },
   {
    "cmd": "tcpdump -i eth0 -n",
    "desc": "Sin resolución DNS"
   },
   {
    "cmd": "tcpdump -i eth0 -nn",
    "desc": "Sin resolver puertos"
   },
   {
    "cmd": "tcpdump -i eth0 -A",
    "desc": "ASCII"
   },
   {
    "cmd": "tcpdump -i eth0 -X",
    "desc": "Hex+ASCII"
   },
   {
    "cmd": "tcpdump -i eth0 -c 100",
    "desc": "Solo 100 paquetes"
   },
   {
    "cmd": "tcpdump -i eth0 -s 0",
    "desc": "Snap len completo"
   },
   {
    "cmd": "tcpdump -i eth0 -v",
    "desc": "Verbose"
   },
   {
    "cmd": "tcpdump -i eth0 -vvv",
    "desc": "Máximo verbose"
   },
   {
    "cmd": "tcpdump -i eth0 'port 21 and tcp'",
    "desc": "Filtro combinado"
   },
   {
    "cmd": "tcpdump -i eth0 'host 10.0.0.1 and port 80'",
    "desc": "Combinado"
   },
   {
    "cmd": "tcpdump -i eth0 -G 60 -w cap-%Y%m%d%H%M%S.pcap",
    "desc": "Rotar cada 60s"
   },
   {
    "cmd": "tcpdump -i eth0 -C 100 -w cap.pcap",
    "desc": "Rotar por tamaño 100MB"
   },
   {
    "cmd": "tcpdump -i eth0 'tcp port 8080 or port 8443'",
    "desc": "Múltiples puertos"
   }
  ]
 },
 {
  "tool": "tcpflow",
  "desc": "Reconstruir flujos TCP en archivos",
  "commands": [
   {
    "cmd": "tcpflow -i eth0",
    "desc": "Capturar flujos"
   },
   {
    "cmd": "tcpflow -r capture.pcap",
    "desc": "Leer pcap"
   },
   {
    "cmd": "tcpflow -c -i eth0",
    "desc": "Salida consola"
   },
   {
    "cmd": "tcpflow -o outdir -r cap.pcap",
    "desc": "Directorio de salida"
   },
   {
    "cmd": "tcpflow -i eth0 -C",
    "desc": "Solo contenido"
   },
   {
    "cmd": "tcpflow -r cap.pcap 'port 80'",
    "desc": "Filtro"
   },
   {
    "cmd": "tcpflow -r cap.pcap -e http",
    "desc": "Decodificar HTTP"
   },
   {
    "cmd": "tcpflow -r cap.pcap -e mail",
    "desc": "Decodificar email"
   },
   {
    "cmd": "tcpflow -r cap.pcap -e ssl",
    "desc": "Intentar SSL"
   },
   {
    "cmd": "tcpflow -v -r cap.pcap",
    "desc": "Verbose"
   }
  ]
 },
 {
  "tool": "scapy",
  "desc": "Framework Python para manipulación de paquetes",
  "commands": [
   {
    "cmd": "scapy",
    "desc": "Abrir consola interactiva"
   },
   {
    "cmd": "scapy -H",
    "desc": "Abrir consola"
   },
   {
    "cmd": "scapy -c script.py",
    "desc": "Ejecutar script"
   },
   {
    "cmd": "scapy -p port",
    "desc": "Escuchar en puerto"
   },
   {
    "cmd": "scapy -i eth0",
    "desc": "Interfaz default"
   },
   {
    "cmd": "scapy --help",
    "desc": "Ayuda"
   },
   {
    "cmd": "scapy3",
    "desc": "Versión Python3"
   },
   {
    "cmd": "sudo scapy -H",
    "desc": "Consola con privilegios"
   },
   {
    "cmd": "scapy -C",
    "desc": "Modo contrib"
   }
  ]
 },
 {
  "tool": "tcpreplay",
  "desc": "Reenviar paquetes capturados en la red",
  "commands": [
   {
    "cmd": "tcpreplay --intf1=eth0 cap.pcap",
    "desc": "Reenviar pcap"
   },
   {
    "cmd": "tcpreplay -i eth0 --topspeed cap.pcap",
    "desc": "Máxima velocidad"
   },
   {
    "cmd": "tcpreplay -i eth0 --pps=1000 cap.pcap",
    "desc": "1000 pps"
   },
   {
    "cmd": "tcpreplay -i eth0 --mbps=10 cap.pcap",
    "desc": "10 Mbps"
   },
   {
    "cmd": "tcpreplay -i eth0 --loop=10 cap.pcap",
    "desc": "10 iteraciones"
   },
   {
    "cmd": "tcpreplay -i eth0 --unique-ip cap.pcap",
    "desc": "IPs únicas"
   },
   {
    "cmd": "tcpreplay -i eth0 --srcipmap=0.0.0.0/0:10.0.0.5 cap.pcap",
    "desc": "Mapear IPs"
   },
   {
    "cmd": "tcpreplay -i eth0 --dstipmap=0.0.0.0/0:10.0.0.1 cap.pcap",
    "desc": "Destino"
   },
   {
    "cmd": "tcpreplay -i eth0 --cachefile=cache cap.pcap",
    "desc": "Cache"
   },
   {
    "cmd": "tcprewrite -i in.pcap -o out.pcap --srcipmap=...",
    "desc": "Reescribir pcap"
   },
   {
    "cmd": "tcpreplay-edit -i eth0 --srcipmap=... cap.pcap",
    "desc": "Editar y reenviar"
   },
   {
    "cmd": "tcpprep --portmap -o cache -i cap.pcap",
    "desc": "Preparar cache"
   },
   {
    "cmd": "tcpreplay -i eth0 -t cap.pcap",
    "desc": "Loop infinito"
   }
  ]
 },
 {
  "tool": "hexinject",
  "desc": "Inyección y captura de paquetes crudos",
  "commands": [
   {
    "cmd": "hexinject -i eth0",
    "desc": "Capturar paquetes"
   },
   {
    "cmd": "hexinject -i eth0 -r",
    "desc": "Raw mode"
   },
   {
    "cmd": "hexinject -i eth0 -f 'udp port 53'",
    "desc": "Filtro"
   },
   {
    "cmd": "hexinject -i eth0 -x hexdata",
    "desc": "Inyectar hex"
   },
   {
    "cmd": "hexinject -i eth0 -p file.pcap",
    "desc": "Inyectar desde pcap"
   },
   {
    "cmd": "hexinject -i eth0 -c 100",
    "desc": "100 paquetes"
   },
   {
    "cmd": "hexinject -i eth0 -s",
    "desc": "Sin resolución"
   },
   {
    "cmd": "hexinject -i eth0 -t",
    "desc": "Timing"
   },
   {
    "cmd": "hexinject -i eth0 -v",
    "desc": "Verbose"
   }
  ]
 },
 {
  "tool": "yersinia",
  "desc": "Framework de ataque a protocolos de capa 2 (STP, CDP, VTP)",
  "commands": [
   {
    "cmd": "yersinia -I",
    "desc": "Modo interactivo"
   },
   {
    "cmd": "yersinia -G",
    "desc": "Modo gráfico"
   },
   {
    "cmd": "yersinia stp -attack 0 -interface eth0",
    "desc": "Ataque STP"
   },
   {
    "cmd": "yersinia cdp -attack 2 -interface eth0",
    "desc": "CDP flood"
   },
   {
    "cmd": "yersinia vtp -attack 1 -interface eth0",
    "desc": "VTP join"
   },
   {
    "cmd": "yersinia dhcp -attack 4 -interface eth0",
    "desc": "DHCP release"
   },
   {
    "cmd": "yersinia dot1x -attack 2 -interface eth0",
    "desc": "Dot1x"
   },
   {
    "cmd": "yersinia hsrp -attack 1 -interface eth0",
    "desc": "HSRP"
   },
   {
    "cmd": "yersinia -h",
    "desc": "Ayuda"
   },
   {
    "cmd": "yersinia -i eth0 stp -attack 1",
    "desc": "Con interfaz"
   }
  ]
 },
 {
  "tool": "netmask",
  "desc": "Conversor de máscaras de red y cálculo de subredes",
  "commands": [
   {
    "cmd": "netmask 192.168.1.0/24",
    "desc": "Info de la subred"
   },
   {
    "cmd": "netmask -c 192.168.1.0/24",
    "desc": "Formato CIDR"
   },
   {
    "cmd": "netmask -s 192.168.1.0/24",
    "desc": "Sin formato"
   },
   {
    "cmd": "netmask -x 192.168.1.0/24",
    "desc": "Formato decimal"
   },
   {
    "cmd": "netmask -t 192.168.1.0/24",
    "desc": "Formato texto"
   },
   {
    "cmd": "netmask -r 192.168.1.0/24",
    "desc": "Rango"
   },
   {
    "cmd": "netmask -i 192.168.1.0/24",
    "desc": "IP de red"
   },
   {
    "cmd": "netmask -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "firewalk",
  "desc": "Descubrir reglas de firewall por TTL (gateway discovery)",
  "commands": [
   {
    "cmd": "firewalk -S 192.168.1.1 -d 8.8.8.8 -p 80",
    "desc": "Firewalk básico"
   },
   {
    "cmd": "firewalk -S 192.168.1.1 -d 8.8.8.8 -p 80 -i eth0",
    "desc": "Con interfaz"
   },
   {
    "cmd": "firewalk -S 192.168.1.1 -d 8.8.8.8 -p 1-100",
    "desc": "Rango de puertos"
   },
   {
    "cmd": "firewalk -S 192.168.1.1 -d 8.8.8.8 -p 80 -v",
    "desc": "Verbose"
   },
   {
    "cmd": "firewalk -S 192.168.1.1 -d 8.8.8.8 -p 80 -t 5",
    "desc": "Timeout"
   },
   {
    "cmd": "firewalk -S 192.168.1.1 -d 8.8.8.8 -p 80 -u",
    "desc": "UDP mode"
   },
   {
    "cmd": "firewalk -S 192.168.1.1 -d 8.8.8.8 -p 80 -n",
    "desc": "Sin resolución"
   }
  ]
 },
 {
  "tool": "impacket-mssqlclient",
  "desc": "Cliente MSSQL de Impacket (con modo consola)",
  "commands": [
   {
    "cmd": "impacket-mssqlclient user:pass@192.168.1.10",
    "desc": "Conectar con credenciales"
   },
   {
    "cmd": "impacket-mssqlclient -windows-auth user:pass@192.168.1.10",
    "desc": "Auth Windows"
   },
   {
    "cmd": "impacket-mssqlclient -hashes LM:NTLM user@192.168.1.10",
    "desc": "Pass-the-hash"
   },
   {
    "cmd": "impacket-mssqlclient -dc-ip 192.168.1.10 dom/user:pass@192.168.1.10",
    "desc": "Con DC IP"
   },
   {
    "cmd": "impacket-mssqlclient -db database user:pass@192.168.1.10",
    "desc": "Base de datos"
   },
   {
    "cmd": "impacket-mssqlclient -port 1434 user:pass@192.168.1.10",
    "desc": "Puerto custom"
   },
   {
    "cmd": "impacket-mssqlclient -k user@192.168.1.10",
    "desc": "Kerberos"
   },
   {
    "cmd": "impacket-mssqlclient -debug user:pass@192.168.1.10",
    "desc": "Debug"
   },
   {
    "cmd": "impacket-mssqlclient user:pass@192.168.1.10 -no-pass",
    "desc": "Sin password"
   },
   {
    "cmd": "impacket-mssqlclient -p 1433 -windows-auth admin:pass@IP",
    "desc": "Windows auth custom"
   }
  ]
 },
 {
  "tool": "oscanner",
  "desc": "Escáner de Oracle (SID brute, TNS)",
  "commands": [
   {
    "cmd": "oscanner -s 192.168.1.10",
    "desc": "Escaneo Oracle"
   },
   {
    "cmd": "oscanner -s 192.168.1.10 -p 1521",
    "desc": "Puerto TNS"
   },
   {
    "cmd": "oscanner -s 192.168.1.10 -v",
    "desc": "Verbose"
   },
   {
    "cmd": "oscanner -s 192.168.1.10 -P sidlist.txt",
    "desc": "SID list"
   },
   {
    "cmd": "oscanner -s 192.168.1.10 -U users.txt",
    "desc": "Usuarios"
   },
   {
    "cmd": "oscanner -s 192.168.1.10 -P pass.txt -U users.txt",
    "desc": "Brute force"
   },
   {
    "cmd": "oscanner -s 192.168.1.10 -d",
    "desc": "Debug"
   }
  ]
 },
 {
  "tool": "sidguess",
  "desc": "Adivinar SIDs de Oracle",
  "commands": [
   {
    "cmd": "sidguess -i 192.168.1.10 -p 1521 -d sidlist.txt",
    "desc": "Adivinar SID"
   },
   {
    "cmd": "sidguess -i 192.168.1.10 -p 1521 -v",
    "desc": "Verbose"
   },
   {
    "cmd": "sidguess -i 192.168.1.10 -p 1521 -s 100",
    "desc": "Delay"
   }
  ]
 },
 {
  "tool": "tnscmd10g",
  "desc": "Enviar comandos al listener TNS de Oracle",
  "commands": [
   {
    "cmd": "tnscmd10g ping -h 192.168.1.10",
    "desc": "Ping al listener"
   },
   {
    "cmd": "tnscmd10g version -h 192.168.1.10",
    "desc": "Versión"
   },
   {
    "cmd": "tnscmd10g status -h 192.168.1.10",
    "desc": "Estado"
   },
   {
    "cmd": "tnscmd10g services -h 192.168.1.10",
    "desc": "Servicios"
   },
   {
    "cmd": "tnscmd10g reload -h 192.168.1.10",
    "desc": "Recargar"
   },
   {
    "cmd": "tnscmd10g stop -h 192.168.1.10",
    "desc": "Parar listener"
   },
   {
    "cmd": "tnscmd10g -p 1521 ping -h 192.168.1.10",
    "desc": "Puerto"
   },
   {
    "cmd": "tnscmd10g raw -h 192.168.1.10 -c '(DESCRIPTION=...)'",
    "desc": "Comando raw"
   }
  ]
 },
 {
  "tool": "mdb-sql",
  "desc": "Consultar bases de datos Access (MDB)",
  "commands": [
   {
    "cmd": "mdb-sql -p file.mdb",
    "desc": "Shell SQL"
   },
   {
    "cmd": "mdb-sql -p -d file.mdb",
    "desc": "Con delimitadores"
   },
   {
    "cmd": "mdb-tables file.mdb",
    "desc": "Listar tablas"
   },
   {
    "cmd": "mdb-schema file.mdb",
    "desc": "Esquema"
   },
   {
    "cmd": "mdb-export file.mdb tabla",
    "desc": "Exportar tabla"
   },
   {
    "cmd": "mdb-dump file.mdb",
    "desc": "Volcar BD"
   },
   {
    "cmd": "mdb-parsecsv -p file.mdb",
    "desc": "Parsear CSV"
   },
   {
    "cmd": "mdb-ver file.mdb",
    "desc": "Versión"
   }
  ]
 },
 {
  "tool": "swaks",
  "desc": "Swiss Army Knife SMTP - testing de servidores de correo",
  "commands": [
   {
    "cmd": "swaks --to user@objetivo.com",
    "desc": "Enviar email de test"
   },
   {
    "cmd": "swaks --from attacker@evil.com --to user@objetivo.com",
    "desc": "Spoof de remitente"
   },
   {
    "cmd": "swaks --server mail.objetivo.com",
    "desc": "Servidor específico"
   },
   {
    "cmd": "swaks --server 192.168.1.10 --port 25",
    "desc": "Puerto SMTP"
   },
   {
    "cmd": "swaks --header 'Subject: Test' --body 'Hola'",
    "desc": "Header y body"
   },
   {
    "cmd": "swaks --to user@objetivo.com --attach file.pdf",
    "desc": "Con adjunto"
   },
   {
    "cmd": "swaks --to user@objetivo.com --tls",
    "desc": "Con TLS"
   },
   {
    "cmd": "swaks --to user@objetivo.com --auth LOGIN --auth-user user --auth-password pass",
    "desc": "Con auth"
   },
   {
    "cmd": "swaks --to user@objetivo.com --quit-after RCPT",
    "desc": "Parar tras RCPT (test relay)"
   },
   {
    "cmd": "swaks --to user@objetivo.com --data message.eml",
    "desc": "Enviar EML"
   },
   {
    "cmd": "swaks --to user@objetivo.com --protocol ESMTP",
    "desc": "Protocolo"
   },
   {
    "cmd": "swaks --to user@objetivo.com --ehlo mail.test.com",
    "desc": "EHLO custom"
   },
   {
    "cmd": "swaks --to user@objetivo.com --timeout 10",
    "desc": "Timeout"
   },
   {
    "cmd": "swaks --to user@objetivo.com --verbose",
    "desc": "Verbose"
   },
   {
    "cmd": "swaks --help",
    "desc": "Ayuda completa"
   }
  ]
 },
 {
  "tool": "smtp-user-enum",
  "desc": "Enumerar usuarios SMTP (VRFY, EXPN, RCPT)",
  "commands": [
   {
    "cmd": "smtp-user-enum -M VRFY -U users.txt -t 192.168.1.10",
    "desc": "VRFY"
   },
   {
    "cmd": "smtp-user-enum -M EXPN -U users.txt -t 192.168.1.10",
    "desc": "EXPN"
   },
   {
    "cmd": "smtp-user-enum -M RCPT -U users.txt -t 192.168.1.10",
    "desc": "RCPT TO"
   },
   {
    "cmd": "smtp-user-enum -M VRFY -U users.txt -t 192.168.1.10 -p 25",
    "desc": "Puerto 25"
   },
   {
    "cmd": "smtp-user-enum -M VRFY -U users.txt -t 192.168.1.10 -d objetivo.com",
    "desc": "Dominio"
   },
   {
    "cmd": "smtp-user-enum -M VRFY -U users.txt -t 192.168.1.10 -v",
    "desc": "Verbose"
   },
   {
    "cmd": "smtp-user-enum -M VRFY -U users.txt -t 192.168.1.10 -e 5",
    "desc": "Delay"
   },
   {
    "cmd": "smtp-user-enum -M RCPT -U users.txt -t 192.168.1.10 -o out.txt",
    "desc": "Guardar"
   },
   {
    "cmd": "smtp-user-enum -M VRFY -U users.txt -t 192.168.1.10 -s 1",
    "desc": "Parar tras éxito"
   }
  ]
 },
 {
  "tool": "apache-users",
  "desc": "Enumerar usuarios de Apache (directorio de usuarios)",
  "commands": [
   {
    "cmd": "apache-users -l users.txt -u http://objetivo.com",
    "desc": "Enumerar usuarios"
   },
   {
    "cmd": "apache-users -l users.txt -u http://objetivo.com -p 80",
    "desc": "Puerto"
   },
   {
    "cmd": "apache-users -l users.txt -u http://objetivo.com -w 100",
    "desc": "Delay"
   },
   {
    "cmd": "apache-users -l users.txt -u http://objetivo.com -e 403",
    "desc": "Código de error"
   },
   {
    "cmd": "apache-users -l users.txt -u http://objetivo.com -s",
    "desc": "SSL"
   },
   {
    "cmd": "apache-users -l users.txt -u http://objetivo.com -v",
    "desc": "Verbose"
   }
  ]
 },
 {
  "tool": "cisco-auditing-tool",
  "desc": "Auditar routers Cisco por fuerza bruta",
  "commands": [
   {
    "cmd": "CAT -h 192.168.1.1 -w passwordlist.txt",
    "desc": "Auditar router Cisco"
   },
   {
    "cmd": "CAT -h 192.168.1.1 -w list.txt -a 23",
    "desc": "Puerto Telnet"
   },
   {
    "cmd": "CAT -h 192.168.1.1 -w list.txt -e 0",
    "desc": "Sin verbose"
   },
   {
    "cmd": "CAT -h 192.168.1.1 -w list.txt -t 5",
    "desc": "Timeout"
   },
   {
    "cmd": "CAT -h 192.168.1.1 -w list.txt -s",
    "desc": "SNMP mode"
   },
   {
    "cmd": "CAT -h 192.168.1.1 -w list.txt -d",
    "desc": "Debug"
   }
  ]
 },
 {
  "tool": "cisco-global-exploiter",
  "desc": "Explotar vulnerabilidades de Cisco IOS",
  "commands": [
   {
    "cmd": "cge.pl 192.168.1.1 1",
    "desc": "Probar vuln 1"
   },
   {
    "cmd": "cge.pl 192.168.1.1 0",
    "desc": "Probar todas"
   },
   {
    "cmd": "cge.pl 192.168.1.1 2",
    "desc": "Vuln 2 (ios http)"
   },
   {
    "cmd": "cge.pl 192.168.1.1 3",
    "desc": "Vuln 3"
   },
   {
    "cmd": "cge.pl 192.168.1.1 4",
    "desc": "Vuln 4"
   },
   {
    "cmd": "cge.pl 192.168.1.1 5",
    "desc": "Vuln 5"
   },
   {
    "cmd": "cge.pl 192.168.1.1 6",
    "desc": "Vuln 6"
   }
  ]
 },
 {
  "tool": "cisco-torch",
  "desc": "Escáner de vulnerabilidades Cisco",
  "commands": [
   {
    "cmd": "cisco-torch -A 192.168.1.0/24",
    "desc": "Scan agresivo"
   },
   {
    "cmd": "cisco-torch -t 192.168.1.1",
    "desc": "Target simple"
   },
   {
    "cmd": "cisco-torch -p 80 192.168.1.1",
    "desc": "Puerto"
   },
   {
    "cmd": "cisco-torch -f hosts.txt",
    "desc": "Lista de hosts"
   },
   {
    "cmd": "cisco-torch -v 192.168.1.1",
    "desc": "Verbose"
   },
   {
    "cmd": "cisco-torch -d 192.168.1.1",
    "desc": "Detallado"
   },
   {
    "cmd": "cisco-torch -u 192.168.1.1",
    "desc": "Usuarios"
   },
   {
    "cmd": "cisco-torch -P 192.168.1.1",
    "desc": "Passwords"
   }
  ]
 },
 {
  "tool": "copy-router-config",
  "desc": "Copiar configuraciones de routers Cisco",
  "commands": [
   {
    "cmd": "copy-router-config.pl 192.168.1.1",
    "desc": "Copiar config"
   },
   {
    "cmd": "copy-router-config.pl 192.168.1.1 -v",
    "desc": "Verbose"
   },
   {
    "cmd": "merge-router-config.pl config.txt",
    "desc": "Merge de config"
   }
  ]
 },
 {
  "tool": "p0f2",
  "desc": "Fingerprinting pasivo OS (versión 2)",
  "commands": [
   {
    "cmd": "p0f -i eth0",
    "desc": "Sniffing"
   },
   {
    "cmd": "p0f -r cap.pcap",
    "desc": "Offline"
   },
   {
    "cmd": "p0f -i eth0 -o out.txt",
    "desc": "Salida"
   },
   {
    "cmd": "p0f -i eth0 -p",
    "desc": "Promiscuo"
   }
  ]
 },
 {
  "tool": "enum4linux",
  "desc": "Enumeración SMB/CIFS completa (Windows)",
  "commands": [
   {
    "cmd": "enum4linux 192.168.1.10",
    "desc": "Enumeración completa"
   },
   {
    "cmd": "enum4linux -a 192.168.1.10",
    "desc": "Todo"
   },
   {
    "cmd": "enum4linux -U 192.168.1.10",
    "desc": "Usuarios"
   },
   {
    "cmd": "enum4linux -u user -p pass -U 192.168.1.10",
    "desc": "Con credenciales"
   },
   {
    "cmd": "enum4linux -S 192.168.1.10",
    "desc": "Shares"
   },
   {
    "cmd": "enum4linux -G 192.168.1.10",
    "desc": "Grupos"
   },
   {
    "cmd": "enum4linux -P 192.168.1.10",
    "desc": "Políticas"
   },
   {
    "cmd": "enum4linux -N 192.168.1.10",
    "desc": "Null session"
   },
   {
    "cmd": "enum4linux -r 192.168.1.10",
    "desc": "Usuarios por RID"
   },
   {
    "cmd": "enum4linux -R 300-400 192.168.1.10",
    "desc": "Rango RID"
   },
   {
    "cmd": "enum4linux -n 192.168.1.10",
    "desc": "NetBIOS"
   },
   {
    "cmd": "enum4linux -M 192.168.1.10",
    "desc": "Máquinas"
   },
   {
    "cmd": "enum4linux -L 192.168.1.10",
    "desc": "Ldap users"
   },
   {
    "cmd": "enum4linux -o 192.168.1.10",
    "desc": "OS info"
   },
   {
    "cmd": "enum4linux -a -u admin -p pass 192.168.1.10",
    "desc": "Todo con creds"
   },
   {
    "cmd": "enum4linux -v 192.168.1.10",
    "desc": "Verbose"
   },
   {
    "cmd": "enum4linux -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "smbclient",
  "desc": "Cliente SMB (explorar y transferir archivos)",
  "commands": [
   {
    "cmd": "smbclient -L //192.168.1.10 -N",
    "desc": "Listar shares"
   },
   {
    "cmd": "smbclient -L //192.168.1.10 -U user",
    "desc": "Con usuario"
   },
   {
    "cmd": "smbclient -L //192.168.1.10 -U user%pass",
    "desc": "User:pass"
   },
   {
    "cmd": "smbclient //192.168.1.10/share -N",
    "desc": "Conectar share"
   },
   {
    "cmd": "smbclient //192.168.1.10/C$ -U user%pass",
    "desc": "Admin share"
   },
   {
    "cmd": "smbclient //192.168.1.10/share -U user%pass",
    "desc": "Con creds"
   },
   {
    "cmd": "smbclient //IP/share -U user -c 'ls'",
    "desc": "Comando -c"
   },
   {
    "cmd": "smbclient //IP/share -U user -c 'get file.txt'",
    "desc": "Descargar"
   },
   {
    "cmd": "smbclient //IP/share -U user -c 'put local.txt'",
    "desc": "Subir"
   },
   {
    "cmd": "smbclient //IP/share -U user -c 'cd dir; ls'",
    "desc": "CD + ls"
   },
   {
    "cmd": "smbclient //IP/share -U user -c 'recurse; prompt; mget *'",
    "desc": "Descarga recursiva"
   },
   {
    "cmd": "smbclient -m SMB2 //IP/share -U user",
    "desc": "Protocolo SMB2"
   },
   {
    "cmd": "smbclient -W dom //IP/share -U user",
    "desc": "Dominio"
   },
   {
    "cmd": "smbclient //IP/share -U user -p 445",
    "desc": "Puerto"
   },
   {
    "cmd": "smbclient //IP/share -N --no-pass",
    "desc": "Sin password"
   },
   {
    "cmd": "smbclient -V",
    "desc": "Versión"
   }
  ]
 },
 {
  "tool": "impacket-rpcdump",
  "desc": "Dump de interfaces RPC y UUIDs",
  "commands": [
   {
    "cmd": "impacket-rpcdump 192.168.1.10",
    "desc": "Dump RPC"
   },
   {
    "cmd": "impacket-rpcdump -hashes LM:NTLM user@192.168.1.10",
    "desc": "Pass-the-hash"
   },
   {
    "cmd": "impacket-rpcdump -k user@192.168.1.10",
    "desc": "Kerberos"
   },
   {
    "cmd": "impacket-rpcdump -dc-ip IP dom/user:pass@192.168.1.10",
    "desc": "Con DC"
   },
   {
    "cmd": "impacket-rpcdump -debug user:pass@192.168.1.10",
    "desc": "Debug"
   },
   {
    "cmd": "impacket-rpcdump -no-pass user@192.168.1.10",
    "desc": "Sin password"
   },
   {
    "cmd": "impacket-rpcdump -port 135 user:pass@192.168.1.10",
    "desc": "Puerto"
   }
  ]
 },
 {
  "tool": "ldapsearch",
  "desc": "Consultas LDAP (usuarios, grupos, ACLs)",
  "commands": [
   {
    "cmd": "ldapsearch -x -H ldap://192.168.1.10 -b 'dc=dom,dc=local'",
    "desc": "Base search"
   },
   {
    "cmd": "ldapsearch -x -H ldap://IP -b 'dc=dom,dc=local' '(objectClass=user)'",
    "desc": "Usuarios"
   },
   {
    "cmd": "ldapsearch -x -H ldap://IP -b 'dc=dom,dc=local' '(objectClass=group)'",
    "desc": "Grupos"
   },
   {
    "cmd": "ldapsearch -x -H ldap://IP -b 'dc=dom,dc=local' '(objectClass=computer)'",
    "desc": "Computadoras"
   },
   {
    "cmd": "ldapsearch -x -H ldap://IP -D 'user@dom' -w pass -b 'dc=dom,dc=local'",
    "desc": "Con credenciales"
   },
   {
    "cmd": "ldapsearch -x -H ldap://IP -D user@dom -w pass '(userAccountControl:1.2.840.113556.1.4.803:=524288)'",
    "desc": "Trusted to delegate"
   },
   {
    "cmd": "ldapsearch -x -H ldap://IP -D u@d -w p '(userAccountControl:1.2.840.113556.1.4.803:=4194304)'",
    "desc": "Kerberoastable"
   },
   {
    "cmd": "ldapsearch -x -H ldap://IP -D u@d -w p '(userAccountControl:1.2.840.113556.1.4.803:=32)'",
    "desc": "PwdNeverExpires"
   },
   {
    "cmd": "ldapsearch -x -H ldap://IP -D u@d -w p '(userAccountControl:1.2.840.113556.1.4.803:=65536)'",
    "desc": "NoPreAuth"
   },
   {
    "cmd": "ldapsearch -x -H ldap://IP -b 'dc=dom,dc=local' '(objectClass=user)' sAMAccountName",
    "desc": "Solo nombres"
   },
   {
    "cmd": "ldapsearch -x -H ldap://IP -b 'dc=dom,dc=local' '(objectClass=user)' memberOf",
    "desc": "Membresías"
   },
   {
    "cmd": "ldapsearch -x -H ldap://IP -b 'cn=Users,dc=dom,dc=local'",
    "desc": "OU users"
   },
   {
    "cmd": "ldapsearch -x -H ldap://IP -b 'dc=dom,dc=local' -s sub '(mail=*)'",
    "desc": "Con email"
   },
   {
    "cmd": "ldapsearch -x -H ldap://IP -LLL -b 'dc=dom,dc=local'",
    "desc": "Sin comentarios"
   },
   {
    "cmd": "ldapsearch -x -H ldap://IP -z 1000 -b 'dc=dom,dc=local'",
    "desc": "Límite 1000"
   },
   {
    "cmd": "ldapsearch -x -H ldap://IP -v -b 'dc=dom,dc=local'",
    "desc": "Verbose"
   }
  ]
 },
 {
  "tool": "windapsearch",
  "desc": "Enumerar usuarios/grupos de AD vía LDAP",
  "commands": [
   {
    "cmd": "windapsearch -d dom.local --dc-ip IP",
    "desc": "Discovery"
   },
   {
    "cmd": "windapsearch -d dom.local --dc-ip IP -U",
    "desc": "Usuarios"
   },
   {
    "cmd": "windapsearch -d dom.local --dc-ip IP -G",
    "desc": "Grupos"
   },
   {
    "cmd": "windapsearch -d dom.local --dc-ip IP -C",
    "desc": "Computadoras"
   },
   {
    "cmd": "windapsearch -d dom.local --dc-ip IP --da",
    "desc": "Admin users"
   },
   {
    "cmd": "windapsearch -d dom.local --dc-ip IP -PU",
    "desc": "Privileged users"
   },
   {
    "cmd": "windapsearch -d dom.local --dc-ip IP -m",
    "desc": "Members"
   },
   {
    "cmd": "windapsearch -d dom.local --dc-ip IP --full",
    "desc": "Full"
   },
   {
    "cmd": "windapsearch -d dom.local --dc-ip IP --custom '(objectClass=user)'",
    "desc": "Filtro custom"
   },
   {
    "cmd": "windapsearch -d dom.local --dc-ip IP --user user --password pass -U",
    "desc": "Con creds"
   }
  ]
 },
 {
  "tool": "adidnsdump",
  "desc": "Dump de registros DNS de Active Directory",
  "commands": [
   {
    "cmd": "adidnsdump -u dom\\\\user IP",
    "desc": "Dump DNS"
   },
   {
    "cmd": "adidnsdump -u dom\\\\user --password pass IP",
    "desc": "Con password"
   },
   {
    "cmd": "adidnsdump -u dom\\\\user -r IP",
    "desc": "Resolver"
   },
   {
    "cmd": "adidnsdump -u dom\\\\user -d IP",
    "desc": "Dump todos"
   },
   {
    "cmd": "adidnsdump -u dom\\\\user --dns-tcp IP",
    "desc": "TCP"
   },
   {
    "cmd": "adidnsdump -u dom\\\\user -r -d IP",
    "desc": "Resolver+all"
   },
   {
    "cmd": "adidnsdump -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "certipy-ad",
  "desc": "Enum y abuso de Active Directory Certificate Services",
  "commands": [
   {
    "cmd": "certipy find -u user@dom -p pass -dc-ip IP",
    "desc": "Buscar vulnerabilidades"
   },
   {
    "cmd": "certipy find -u user@dom -p pass -vulnerable -dc-ip IP",
    "desc": "Solo vulnerables"
   },
   {
    "cmd": "certipy find -u user@dom -p pass -dc-ip IP -json out.json",
    "desc": "JSON"
   },
   {
    "cmd": "certipy req -u user@dom -p pass -ca CA -template User -target CA_HOST",
    "desc": "Solicitar cert"
   },
   {
    "cmd": "certipy req -u user@dom -p pass -ca CA -template DomainController -upn admin@dom",
    "desc": "ESC1 UPN"
   },
   {
    "cmd": "certipy auth -pfx cert.pfx -username admin -domain dom -dc-ip IP",
    "desc": "Auth con cert"
   },
   {
    "cmd": "certipy auth -pfx cert.pfx -username admin -domain dom -dc-ip IP -ptt",
    "desc": "Pass-the-ticket"
   },
   {
    "cmd": "certipy auth -pfx cert.pfx -username admin -domain dom -dc-ip IP -ldap-shell",
    "desc": "LDAP shell"
   },
   {
    "cmd": "certipy ca -u user@dom -p pass -ca CA -target IP -template User",
    "desc": "Enumerar CA"
   },
   {
    "cmd": "certipy ca -u user@dom -p pass -ca CA -target IP -add-officer user",
    "desc": "Añadir officer"
   },
   {
    "cmd": "certipy cert -pfx cert.pfx -nokey -out cert.der",
    "desc": "Extraer cert"
   },
   {
    "cmd": "certipy cert -pfx cert.pfx -nocert -out key.pem",
    "desc": "Extraer key"
   },
   {
    "cmd": "certipy find -u user@dom -hashes :NTLM -dc-ip IP",
    "desc": "Con hash"
   },
   {
    "cmd": "certipy -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "ldapdomaindump",
  "desc": "Dump de toda la info LDAP de un dominio",
  "commands": [
   {
    "cmd": "ldapdomaindump -u dom\\\\user -p pass IP",
    "desc": "Dump"
   },
   {
    "cmd": "ldapdomaindump -u dom\\\\user -p pass -o /tmp/out IP",
    "desc": "Directorio"
   },
   {
    "cmd": "ldapdomaindump -u dom\\\\user -p pass --no-json IP",
    "desc": "Sin JSON"
   },
   {
    "cmd": "ldapdomaindump -u dom\\\\user -p pass --no-html IP",
    "desc": "Sin HTML"
   },
   {
    "cmd": "ldapdomaindump -u dom\\\\user -p pass --no-grep IP",
    "desc": "Sin grep"
   },
   {
    "cmd": "ldapdomaindump -u dom\\\\user -p pass -r IP",
    "desc": "Resolver"
   },
   {
    "cmd": "ldapdomaindump -u dom\\\\user -p pass -d IP",
    "desc": "Dump DNS"
   },
   {
    "cmd": "ldapdomaindump -u dom\\\\user -H NTLM IP",
    "desc": "Con hash"
   },
   {
    "cmd": "ldapdomaindump -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "enum4linux-ng",
  "desc": "Enum4linux moderno (Python3, JSON)",
  "commands": [
   {
    "cmd": "enum4linux-ng -A 192.168.1.10",
    "desc": "Todo"
   },
   {
    "cmd": "enum4linux-ng -A -u user -p pass 192.168.1.10",
    "desc": "Con creds"
   },
   {
    "cmd": "enum4linux-ng -U 192.168.1.10",
    "desc": "Usuarios"
   },
   {
    "cmd": "enum4linux-ng -G 192.168.1.10",
    "desc": "Grupos"
   },
   {
    "cmd": "enum4linux-ng -S 192.168.1.10",
    "desc": "Shares"
   },
   {
    "cmd": "enum4linux-ng -P 192.168.1.10",
    "desc": "Política"
   },
   {
    "cmd": "enum4linux-ng -oJ out.json 192.168.1.10",
    "desc": "JSON"
   },
   {
    "cmd": "enum4linux-ng -oY out.yaml 192.168.1.10",
    "desc": "YAML"
   },
   {
    "cmd": "enum4linux-ng -R 192.168.1.10",
    "desc": "RID bruteforce"
   },
   {
    "cmd": "enum4linux-ng -n 192.168.1.10",
    "desc": "NetBIOS"
   },
   {
    "cmd": "enum4linux-ng -H HASH 192.168.1.10",
    "desc": "Pass-the-hash"
   },
   {
    "cmd": "enum4linux-ng -a 192.168.1.10",
    "desc": "Alias de -A"
   },
   {
    "cmd": "enum4linux-ng -C 192.168.1.10",
    "desc": "Connections"
   },
   {
    "cmd": "enum4linux-ng -v 192.168.1.10",
    "desc": "Verbose"
   },
   {
    "cmd": "enum4linux-ng -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "impacket-GetADUsers",
  "desc": "Enumerar usuarios de AD (LDAP)",
  "commands": [
   {
    "cmd": "impacket-GetADUsers -all dom/user:pass -dc-ip 192.168.1.10",
    "desc": "Todos los usuarios"
   },
   {
    "cmd": "impacket-GetADUsers dom/user:pass -dc-ip 192.168.1.10",
    "desc": "Con email"
   },
   {
    "cmd": "impacket-GetADUsers -hashes LM:NTLM dom/user -dc-ip IP",
    "desc": "PtH"
   },
   {
    "cmd": "impacket-GetADUsers -k dom/user -dc-ip IP",
    "desc": "Kerberos"
   },
   {
    "cmd": "impacket-GetADUsers -dc-ip IP dom/user:pass -debug",
    "desc": "Debug"
   },
   {
    "cmd": "impacket-GetADUsers -all dom/user:pass -dc-ip IP -no-pass",
    "desc": "Sin pass"
   },
   {
    "cmd": "impacket-GetADUsers dom/user:pass -dc-ip IP -o out.txt",
    "desc": "Salida"
   },
   {
    "cmd": "impacket-GetADUsers -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "impacket-findDelegation",
  "desc": "Buscar delegaciones (unconstrained/constrained)",
  "commands": [
   {
    "cmd": "impacket-findDelegation dom/user:pass -dc-ip 192.168.1.10",
    "desc": "Buscar delegación"
   },
   {
    "cmd": "impacket-findDelegation -hashes LM:NTLM dom/user -dc-ip IP",
    "desc": "PtH"
   },
   {
    "cmd": "impacket-findDelegation -k dom/user -dc-ip IP",
    "desc": "Kerberos"
   },
   {
    "cmd": "impacket-findDelegation -debug dom/user:pass -dc-ip IP",
    "desc": "Debug"
   },
   {
    "cmd": "impacket-findDelegation dom/user:pass -dc-ip IP -no-pass",
    "desc": "Sin pass"
   },
   {
    "cmd": "impacket-findDelegation -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "rpcclient",
  "desc": "Cliente RPC de Samba (enumeración Windows)",
  "commands": [
   {
    "cmd": "rpcclient -U '' -N 192.168.1.10",
    "desc": "Null session"
   },
   {
    "cmd": "rpcclient -U user%pass 192.168.1.10",
    "desc": "Con creds"
   },
   {
    "cmd": "rpcclient -U user%pass -W dom 192.168.1.10",
    "desc": "Con dominio"
   },
   {
    "cmd": "rpcclient -U user%pass 192.168.1.10 -c 'enumdomusers'",
    "desc": "Usuarios"
   },
   {
    "cmd": "rpcclient -U user%pass 192.168.1.10 -c 'enumdomgroups'",
    "desc": "Grupos"
   },
   {
    "cmd": "rpcclient -U user%pass 192.168.1.10 -c 'querydispinfo'",
    "desc": "Info display"
   },
   {
    "cmd": "rpcclient -U user%pass 192.168.1.10 -c 'netshareenum'",
    "desc": "Shares"
   },
   {
    "cmd": "rpcclient -U user%pass 192.168.1.10 -c 'srvinfo'",
    "desc": "Server info"
   },
   {
    "cmd": "rpcclient -U user%pass 192.168.1.10 -c 'lookupnames admin'",
    "desc": "Lookup"
   },
   {
    "cmd": "rpcclient -U user%pass 192.168.1.10 -c 'queryuser 500'",
    "desc": "User 500"
   },
   {
    "cmd": "rpcclient -U user%pass 192.168.1.10 -c 'enumalsgroups builtin'",
    "desc": "Grupos builtin"
   },
   {
    "cmd": "rpcclient -U user%pass 192.168.1.10 -c 'getdompwinfo'",
    "desc": "Policy"
   },
   {
    "cmd": "rpcclient -U user%pass 192.168.1.10 -c 'enumprivs'",
    "desc": "Privilegios"
   },
   {
    "cmd": "rpcclient -U user%pass 192.168.1.10 -c 'dsroledominfo'",
    "desc": "Rol DC"
   },
   {
    "cmd": "rpcclient -U user%pass 192.168.1.10 -c 'queryuser 1000'",
    "desc": "User 1000"
   }
  ]
 },
 {
  "tool": "nmblookup",
  "desc": "Resolver nombres NetBIOS",
  "commands": [
   {
    "cmd": "nmblookup -A 192.168.1.10",
    "desc": "Por IP"
   },
   {
    "cmd": "nmblookup -a 192.168.1.10",
    "desc": "Todos"
   },
   {
    "cmd": "nmblookup -S 192.168.1.10",
    "desc": "Status"
   },
   {
    "cmd": "nmblookup -R 192.168.1.10",
    "desc": "Resolver"
   },
   {
    "cmd": "nmblookup -M HOST",
    "desc": "Master browser"
   },
   {
    "cmd": "nmblookup -T 192.168.1.10",
    "desc": "Trans"
   },
   {
    "cmd": "nmblookup -U 192.168.1.10",
    "desc": "UDP"
   },
   {
    "cmd": "nmblookup -d 2 192.168.1.10",
    "desc": "Debug level"
   },
   {
    "cmd": "nmblookup 192.168.1.10",
    "desc": "Simple"
   },
   {
    "cmd": "nmblookup -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "dns-zone-transfer",
  "desc": "Transferencia de zona DNS",
  "commands": [
   {
    "cmd": "dig axfr dom.local @IP",
    "desc": "AXFR"
   },
   {
    "cmd": "dig axfr dom.local @IP +short",
    "desc": "AXFR corto"
   },
   {
    "cmd": "host -t axfr dom.local IP",
    "desc": "Host axfr"
   },
   {
    "cmd": "dnsrecon -d dom.local -t axfr -n IP",
    "desc": "Dnsrecon axfr"
   },
   {
    "cmd": "dnsrecon -d dom.local -t zonewalk",
    "desc": "Zonewalk"
   },
   {
    "cmd": "dnsrecon -d dom.local -t std",
    "desc": "Estándar"
   },
   {
    "cmd": "dnsrecon -d dom.local -t brt -D list.txt",
    "desc": "Brute"
   },
   {
    "cmd": "dnsrecon -d dom.local -t rvl",
    "desc": "Reverse"
   },
   {
    "cmd": "dnsrecon -d dom.local -t snoop",
    "desc": "Snoop"
   },
   {
    "cmd": "dnsenum dom.local",
    "desc": "Enumerar"
   },
   {
    "cmd": "dnsenum --dnsserver IP dom.local",
    "desc": "Server custom"
   },
   {
    "cmd": "dnsenum -f list.txt dom.local",
    "desc": "Con wordlist"
   },
   {
    "cmd": "dnsmap dom.local",
    "desc": "Dnsmap"
   },
   {
    "cmd": "dnsmap dom.local -w wordlist.txt",
    "desc": "Wordlist"
   },
   {
    "cmd": "dnsmap -r dom.local -i 0.1",
    "desc": "Retries"
   }
  ]
 },
 {
  "tool": "smtp-enum-extra",
  "desc": "Enumeración SMTP (VRFY, EXPN, RCPT)",
  "commands": [
   {
    "cmd": "nc -nv IP 25",
    "desc": "Banner"
   },
   {
    "cmd": "printf 'VRFY root\\r\\nQUIT\\r\\n' | nc IP 25",
    "desc": "VRFY"
   },
   {
    "cmd": "printf 'EXPN root\\r\\nQUIT\\r\\n' | nc IP 25",
    "desc": "EXPN"
   },
   {
    "cmd": "printf 'RCPT TO:<root@dom.local>\\r\\nQUIT\\r\\n' | nc IP 25",
    "desc": "RCPT"
   },
   {
    "cmd": "smtp-user-enum -M VRFY -U users.txt -t IP",
    "desc": "VRFY enum"
   },
   {
    "cmd": "smtp-user-enum -M EXPN -U users.txt -t IP",
    "desc": "EXPN"
   },
   {
    "cmd": "smtp-user-enum -M RCPT -U users.txt -t IP",
    "desc": "RCPT"
   },
   {
    "cmd": "smtp-user-enum -M VRFY -U users.txt -T hosts.txt",
    "desc": "Multi host"
   },
   {
    "cmd": "nmap --script=smtp-enum-users -p25 IP",
    "desc": "Nmap enum"
   },
   {
    "cmd": "nmap --script=smtp-open-relay IP",
    "desc": "Open relay"
   },
   {
    "cmd": "nmap --script=smtp-brute --script-args userdb=users.txt,passdb=pass.txt -p25 IP",
    "desc": "SMTP brute"
   },
   {
    "cmd": "swaks --to root@dom.local --server IP",
    "desc": "Swaks test"
   },
   {
    "cmd": "smtp-vrfy.py IP usuarios.txt",
    "desc": "Script vrfy"
   },
   {
    "cmd": "telnet IP 25",
    "desc": "Telnet SMTP"
   }
  ]
 },
 {
  "tool": "snmp-enum-extra",
  "desc": "Enumeración SNMP (variantes)",
  "commands": [
   {
    "cmd": "snmpwalk -v2c -c public IP",
    "desc": "Walk"
   },
   {
    "cmd": "snmpwalk -v1 -c public IP .1.3.6.1.2.1.1.1",
    "desc": "System"
   },
   {
    "cmd": "snmpwalk -v2c -c public IP .1.3.6.1.2.1.2.2",
    "desc": "Interfaces"
   },
   {
    "cmd": "snmpwalk -v2c -c public IP .1.3.6.1.2.1.4.20",
    "desc": "Tabla ARP"
   },
   {
    "cmd": "snmpwalk -v2c -c public IP .1.3.6.1.2.1.25.4.2",
    "desc": "Procesos"
   },
   {
    "cmd": "snmpwalk -v2c -c public IP .1.3.6.1.2.1.25.1",
    "desc": "Storage"
   },
   {
    "cmd": "snmpwalk -v2c -c public IP .1.3.6.1.2.1.1.5",
    "desc": "Hostname"
   },
   {
    "cmd": "snmp-check -t IP -c public",
    "desc": "Snmp-check"
   },
   {
    "cmd": "snmp-check -t IP -p 161",
    "desc": "Puerto"
   },
   {
    "cmd": "snmp-check -t IP -c community -v1",
    "desc": "v1"
   },
   {
    "cmd": "onesixtyone -c community.txt IP",
    "desc": "Brusecan"
   },
   {
    "cmd": "onesixtyone -c /usr/share/seclists/Discovery/SNMP/common-snmp-community-strings.txt IP",
    "desc": "Wordlist"
   },
   {
    "cmd": "nmap --script=snmp-* -sU -p161 IP",
    "desc": "Scripts SNMP"
   },
   {
    "cmd": "snmpget -v2c -c public IP sysContact.0",
    "desc": "SysContact"
   },
   {
    "cmd": "snmpbulkwalk -v2c -c public IP",
    "desc": "Bulk walk"
   }
  ]
 },
 {
  "tool": "host-discovery-extra",
  "desc": "Descubrimiento de hosts (variantes)",
  "commands": [
   {
    "cmd": "nmap -sn 192.168.1.0/24",
    "desc": "Ping scan"
   },
   {
    "cmd": "nmap -sn -PS80,443 192.168.1.0/24",
    "desc": "SYN 80/443"
   },
   {
    "cmd": "nmap -sn -PA 192.168.1.0/24",
    "desc": "ACK"
   },
   {
    "cmd": "nmap -sn -PU 192.168.1.0/24",
    "desc": "UDP ping"
   },
   {
    "cmd": "nmap -sn -PE 192.168.1.0/24",
    "desc": "ICMP echo"
   },
   {
    "cmd": "nmap -sn -PP 192.168.1.0/24",
    "desc": "ICMP timestamp"
   },
   {
    "cmd": "nmap -sn -PM 192.168.1.0/24",
    "desc": "ICMP mask"
   },
   {
    "cmd": "fping -a -g 192.168.1.0/24",
    "desc": "Fping todos"
   },
   {
    "cmd": "fping -a -g 192.168.1.0/24 2>/dev/null",
    "desc": "Silencioso"
   },
   {
    "cmd": "arp-scan -l",
    "desc": "ARP local"
   },
   {
    "cmd": "arp-scan 192.168.1.0/24 -I eth0",
    "desc": "ARP interfaz"
   },
   {
    "cmd": "arping -c 2 -I eth0 192.168.1.5",
    "desc": "ARP host"
   },
   {
    "cmd": "netdiscover -r 192.168.1.0/24",
    "desc": "Netdiscover"
   },
   {
    "cmd": "netdiscover -i eth0 -p",
    "desc": "Passive"
   },
   {
    "cmd": "masscan -p 1-65535 --rate 1000 --ping 192.168.1.0/24",
    "desc": "Masscan ping"
   },
   {
    "cmd": "bash -c 'for i in $(seq 1 254); do (ping -c 1 -W 1 192.168.1.$i >/dev/null 2>&1 && echo 192.168.1.$i up) & done; wait'",
    "desc": "For loop"
   }
  ]
 },
 {
  "tool": "ldap-enum",
  "desc": "Enumeración LDAP",
  "commands": [
   {
    "cmd": "ldapsearch -x -H ldap://IP -b '' -s base namingContexts",
    "desc": "Base DN"
   },
   {
    "cmd": "ldapsearch -x -H ldap://IP -b 'DC=dom,DC=local'",
    "desc": "Enumerar"
   },
   {
    "cmd": "ldapsearch -x -H ldap://IP -b 'DC=dom,DC=local' '(objectClass=user)'",
    "desc": "Usuarios"
   },
   {
    "cmd": "ldapsearch -x -H ldap://IP -b 'DC=dom,DC=local' '(objectClass=group)'",
    "desc": "Grupos"
   },
   {
    "cmd": "ldapsearch -x -H ldap://IP -b 'DC=dom,DC=local' '(objectClass=computer)'",
    "desc": "Computadoras"
   },
   {
    "cmd": "ldapsearch -x -H ldap://IP -b 'DC=dom,DC=local' '(&(objectClass=user)(userAccountControl:1.2.840.113556.1.4.803:=4194304))'",
    "desc": "DONT_EXPIRE"
   },
   {
    "cmd": "ldapsearch -x -H ldap://IP -b 'DC=dom,DC=local' '(&(objectClass=user)(adminCount=1))'",
    "desc": "Admins"
   },
   {
    "cmd": "ldapsearch -x -H ldap://IP -b 'DC=dom,DC=local' '(objectClass=user)' memberOf",
    "desc": "Membership"
   },
   {
    "cmd": "ldapsearch -x -H ldap://IP -b 'DC=dom,DC=local' -LLL sAMAccountName",
    "desc": "SAM names"
   },
   {
    "cmd": "ldapsearch -x -H ldap://IP -b 'DC=dom,DC=local' -w pass -D 'DOM\\\\user' '(objectClass=*)'",
    "desc": "Autenticado"
   },
   {
    "cmd": "nmap --script=ldap-search -p389 IP",
    "desc": "Nmap ldap"
   },
   {
    "cmd": "ldapdomaindump -u 'DOM\\\\user' -p pass IP",
    "desc": "Dump completo"
   },
   {
    "cmd": "windapsearch -d dom.local -u user -p pass --users",
    "desc": "Windapsearch"
   },
   {
    "cmd": "windapsearch -d dom.local -u user -p pass --groups",
    "desc": "Grupos"
   },
   {
    "cmd": "windapsearch -d dom.local --privileged-users",
    "desc": "Admin users"
   }
  ]
 },
 {
  "tool": "ftp-enum-extra",
  "desc": "Enumeración FTP",
  "commands": [
   {
    "cmd": "nc -nv IP 21",
    "desc": "Banner FTP"
   },
   {
    "cmd": "ftp -v IP",
    "desc": "FTP client"
   },
   {
    "cmd": "ftp> user anonymous",
    "desc": "Anónimo"
   },
   {
    "cmd": "curl -s ftp://anonymous@IP/",
    "desc": "Curl FTP"
   },
   {
    "cmd": "curl -s ftp://anonymous:anon@IP/ -l",
    "desc": "Listar"
   },
   {
    "cmd": "nmap --script=ftp-anon -p21 IP",
    "desc": "Check anónimo"
   },
   {
    "cmd": "nmap --script=ftp-syst -p21 IP",
    "desc": "Syst"
   },
   {
    "cmd": "nmap --script=ftp-vsftpd-backdoor -p21 IP",
    "desc": "Backdoor"
   },
   {
    "cmd": "nmap --script=ftp-brute --script-args userdb=users.txt,passdb=pass.txt -p21 IP",
    "desc": "Brute"
   },
   {
    "cmd": "hydra -L users.txt -P pass.txt ftp://IP",
    "desc": "Hydra ftp"
   },
   {
    "cmd": "medusa -h IP -U users.txt -P pass.txt -M ftp",
    "desc": "Medusa"
   },
   {
    "cmd": "wget -r --user=anonymous --password=x ftp://IP/",
    "desc": "Descargar todo"
   },
   {
    "cmd": "smbclient //IP/share -U user",
    "desc": "FTP via smb"
   },
   {
    "cmd": "filezilla --user anon --pass x IP",
    "desc": "GUI"
   }
  ]
 },
 {
  "tool": "nbtscan-enum",
  "desc": "Enumeración NetBIOS/SMB",
  "commands": [
   {
    "cmd": "nbtscan 192.168.1.0/24",
    "desc": "Escanear red"
   },
   {
    "cmd": "nbtscan -r IP",
    "desc": "Con remote"
   },
   {
    "cmd": "nbtscan -s : IP",
    "desc": "Separador"
   },
   {
    "cmd": "nbtscan -f hosts.txt",
    "desc": "De archivo"
   },
   {
    "cmd": "nbtscan -v IP",
    "desc": "Verbose"
   },
   {
    "cmd": "nbtscan -h IP",
    "desc": "Header"
   },
   {
    "cmd": "nmap --script=nbstat -p137-139 IP",
    "desc": "Nmap nbstat"
   },
   {
    "cmd": "nmblookup -A IP",
    "desc": "SMB name"
   },
   {
    "cmd": "nmblookup -a NAME",
    "desc": "Por nombre"
   },
   {
    "cmd": "nmblookup -S WORKGROUP",
    "desc": "Workgroup"
   },
   {
    "cmd": "smbclient -L //IP -N",
    "desc": "Listar sin pass"
   },
   {
    "cmd": "smbclient //IP/share -N",
    "desc": "Conectar null"
   },
   {
    "cmd": "rpcclient -U '' -N IP",
    "desc": "Null session"
   },
   {
    "cmd": "enum4linux -a IP",
    "desc": "Enum4linux"
   },
   {
    "cmd": "nbtscan -m IP",
    "desc": "MAC"
   }
  ]
 },
 {
  "tool": "dns-bruteforce",
  "desc": "Fuerza bruta DNS",
  "commands": [
   {
    "cmd": "dnsrecon -d objetivo.com -t brt -D /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt",
    "desc": "Dnsrecon"
   },
   {
    "cmd": "dnsrecon -d objetivo.com -t brt -D list.txt -n IP",
    "desc": "NS custom"
   },
   {
    "cmd": "dnsenum -f /usr/share/wordlists/dirb/common.txt objetivo.com",
    "desc": "Dnsenum"
   },
   {
    "cmd": "dnsmap objetivo.com -w list.txt",
    "desc": "Dnsmap"
   },
   {
    "cmd": "fierce -dns objetivo.com",
    "desc": "Fierce"
   },
   {
    "cmd": "fierce -dns objetivo.com -dnsserver IP",
    "desc": "Server"
   },
   {
    "cmd": "massdns -r resolvers.txt -t A -o S -w out.txt domains.txt",
    "desc": "Massdns"
   },
   {
    "cmd": "massdns -r resolvers.txt -t AAAA domains.txt -o J -w out.json",
    "desc": "AAAA"
   },
   {
    "cmd": "massdns -r resolvers.txt -t CNAME domains.txt -o S -w out.txt",
    "desc": "CNAME"
   },
   {
    "cmd": "gobuster dns -d objetivo.com -w list.txt",
    "desc": "Gobuster dns"
   },
   {
    "cmd": "gobuster dns -d objetivo.com -w list.txt -r IP",
    "desc": "Resolvers"
   },
   {
    "cmd": "puredns bruteforce list.txt objetivo.com -r resolvers.txt",
    "desc": "Puredns"
   },
   {
    "cmd": "puredns resolve subs.txt -r resolvers.txt",
    "desc": "Resolver"
   },
   {
    "cmd": "amass enum -passive -d objetivo.com",
    "desc": "Amass passive"
   },
   {
    "cmd": "amass enum -active -d objetivo.com -brute -w list.txt",
    "desc": "Amass active"
   },
   {
    "cmd": "subfinder -d objetivo.com",
    "desc": "Subfinder"
   }
  ]
 },
 {
  "tool": "snmp-bruteforce",
  "desc": "Fuerza bruta de community strings SNMP",
  "commands": [
   {
    "cmd": "onesixtyone -c /usr/share/seclists/Discovery/SNMP/common-snmp-community-strings-onesixtyone.txt IP",
    "desc": "Onesixtyone"
   },
   {
    "cmd": "onesixtyone -c communities.txt 192.168.1.0/24",
    "desc": "Red"
   },
   {
    "cmd": "nmap --script=snmp-brute -sU -p161 IP",
    "desc": "Nmap brute"
   },
   {
    "cmd": "nmap --script=snmp-brute --script-args snmp-brute.communitiesdb=com.txt -sU -p161 IP",
    "desc": "Wordlist"
   },
   {
    "cmd": "hydra -P com.txt -s 161 udp://IP snmp",
    "desc": "Hydra snmp"
   },
   {
    "cmd": "hydra -P com.txt -s 161 udp://IP snmp -v",
    "desc": "Verbose"
   },
   {
    "cmd": "snmp-check -t IP -c private",
    "desc": "Community private"
   },
   {
    "cmd": "snmpwalk -v2c -c manager IP",
    "desc": "Manager"
   },
   {
    "cmd": "snmpset -v2c -c public IP sysContact.0 s test",
    "desc": "Probar set"
   },
   {
    "cmd": "snmpgetnext -v2c -c public IP .1",
    "desc": "Getnext"
   },
   {
    "cmd": "snmpnetstat -v2c -c public -Cn IP",
    "desc": "Netstat"
   },
   {
    "cmd": "echo 'public' 'private' 'community' | tr ' ' '\\n' > com.txt",
    "desc": "Crear lista"
   },
   {
    "cmd": "python3 -c 'import pysnmp'",
    "desc": "Pysnmp"
   }
  ]
 },
 {
  "tool": "http-enum-extra",
  "desc": "Enumeración HTTP avanzada",
  "commands": [
   {
    "cmd": "gobuster dir -u http://IP -w /usr/share/wordlists/dirb/common.txt",
    "desc": "Gobuster dir"
   },
   {
    "cmd": "gobuster dir -u http://IP -w list.txt -x php,txt,bak -t 50",
    "desc": "Extensiones"
   },
   {
    "cmd": "gobuster dir -u http://IP -w list.txt -s 200,301,403",
    "desc": "Status"
   },
   {
    "cmd": "gobuster dir -u http://IP -w list.txt --no-error",
    "desc": "Sin errores"
   },
   {
    "cmd": "dirsearch -u http://IP -w list.txt",
    "desc": "Dirsearch"
   },
   {
    "cmd": "dirsearch -u http://IP -e php,asp,html",
    "desc": "Ext"
   },
   {
    "cmd": "dirsearch -u http://IP -x 403,404",
    "desc": "Excluir"
   },
   {
    "cmd": "feroxbuster -u http://IP -w list.txt",
    "desc": "Feroxbuster"
   },
   {
    "cmd": "feroxbuster -u http://IP -x php -t 50",
    "desc": "Hilos"
   },
   {
    "cmd": "ffuf -u http://IP/FUZZ -w list.txt -mc 200",
    "desc": "FFUF"
   },
   {
    "cmd": "ffuf -u http://IP/FUZZ -w list.txt -fc 404 -t 50",
    "desc": "Filtrar"
   },
   {
    "cmd": "ffuf -u http://IP/api/FUZZ -w list.txt -mc 200 -o out.json",
    "desc": "API fuzz"
   },
   {
    "cmd": "wfuzz -c -z file,list.txt http://IP/FUZZ",
    "desc": "Wfuzz"
   },
   {
    "cmd": "wfuzz -c -z file,list.txt -z file,ext.txt http://IP/FUZZ.FUZ2Z",
    "desc": "Multi"
   },
   {
    "cmd": "nmap --script=http-enum -p80 IP",
    "desc": "Nmap http-enum"
   },
   {
    "cmd": "nikto -h http://IP",
    "desc": "Nikto"
   },
   {
    "cmd": "curl -s http://IP/robots.txt",
    "desc": "Robots"
   },
   {
    "cmd": "curl -s http://IP/.git/config 2>/dev/null",
    "desc": "Git exposed"
   },
   {
    "cmd": "curl -s http://IP/server-status",
    "desc": "Server status"
   },
   {
    "cmd": "gobuster vhost -u http://IP -w vhosts.txt --append-domain",
    "desc": "Vhost"
   }
  ]
 }
];
