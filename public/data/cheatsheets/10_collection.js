// Recoleccion (Collection)
window.WIKI_CHEATSHEETS_10_COLLECTION = [
 {
  "tool": "ngrep",
  "desc": "Grep de red (aplicar regex a tráfico de red)",
  "commands": [
   {
    "cmd": "ngrep -d eth0 'password'",
    "desc": "Buscar password en tráfico"
   },
   {
    "cmd": "ngrep -d eth0 'GET|POST' port 80",
    "desc": "Métodos HTTP"
   },
   {
    "cmd": "ngrep -d eth0 -i 'user'",
    "desc": "Case insensitive"
   },
   {
    "cmd": "ngrep -d eth0 -q 'auth'",
    "desc": "Quiet"
   },
   {
    "cmd": "ngrep -d eth0 -x 'login'",
    "desc": "Hex dump"
   },
   {
    "cmd": "ngrep -d eth0 -A 3 'cookie'",
    "desc": "Contexto after"
   },
   {
    "cmd": "ngrep -d eth0 -B 2 'cookie'",
    "desc": "Contexto before"
   },
   {
    "cmd": "ngrep -d eth0 'udp port 53'",
    "desc": "Solo DNS"
   },
   {
    "cmd": "ngrep -d eth0 'tcp port 21' 'USER|PASS'",
    "desc": "FTP creds"
   },
   {
    "cmd": "ngrep -d eth0 -r cap.pcap 'password'",
    "desc": "Leer pcap"
   },
   {
    "cmd": "ngrep -d eth0 -w out.txt 'http'",
    "desc": "Guardar"
   },
   {
    "cmd": "ngrep -d eth0 -t 'http'",
    "desc": "Con timestamps"
   },
   {
    "cmd": "ngrep -d eth0 -W byline 'User-Agent'",
    "desc": "Salida por líneas"
   },
   {
    "cmd": "ngrep -d eth0 -l -w dump 'GET'",
    "desc": "Solo matches a archivo"
   }
  ]
 },
 {
  "tool": "chaosreader",
  "desc": "Extraer sesiones y archivos de capturas de red",
  "commands": [
   {
    "cmd": "chaosreader capture.pcap",
    "desc": "Analizar pcap"
   },
   {
    "cmd": "chaosreader -f capture.pcap",
    "desc": "Forzar análisis"
   },
   {
    "cmd": "chaosreader -D outdir capture.pcap",
    "desc": "Directorio de salida"
   },
   {
    "cmd": "chaosreader -e capture.pcap",
    "desc": "Extraer todo"
   },
   {
    "cmd": "chaosreader -u capture.pcap",
    "desc": "Unicode"
   },
   {
    "cmd": "chaosreader -r capture.pcap",
    "desc": "Reporte"
   },
   {
    "cmd": "chaosreader -i capture.pcap",
    "desc": "Solo imágenes"
   },
   {
    "cmd": "chaosreader -a capture.pcap",
    "desc": "Todo incluyendo hex"
   },
   {
    "cmd": "chaosreader -F 'tcp port 21' capture.pcap",
    "desc": "Filtro"
   },
   {
    "cmd": "chaosreader -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "bettercap",
  "desc": "Framework de MITM y monitoreo de red todo-en-uno",
  "commands": [
   {
    "cmd": "bettercap -iface eth0",
    "desc": "Iniciar en interfaz"
   },
   {
    "cmd": "bettercap -iface eth0 -eval 'net.probe on'",
    "desc": "Probar red"
   },
   {
    "cmd": "bettercap -iface eth0 -eval 'net.show'",
    "desc": "Mostrar hosts"
   },
   {
    "cmd": "bettercap -iface eth0 -eval 'arp.spoof on'",
    "desc": "ARP spoofing"
   },
   {
    "cmd": "bettercap -iface eth0 -eval 'net.sniff on'",
    "desc": "Sniffing"
   },
   {
    "cmd": "bettercap -iface eth0 -eval 'net.sniff.stats'",
    "desc": "Estadísticas"
   },
   {
    "cmd": "bettercap -iface eth0 -eval 'http.proxy on'",
    "desc": "Proxy HTTP"
   },
   {
    "cmd": "bettercap -iface eth0 -eval 'https.proxy on'",
    "desc": "Proxy HTTPS"
   },
   {
    "cmd": "bettercap -iface eth0 -eval 'tcp.proxy on'",
    "desc": "Proxy TCP"
   },
   {
    "cmd": "bettercap -iface eth0 -eval 'wifi.recon on'",
    "desc": "Recon WiFi"
   },
   {
    "cmd": "bettercap -iface eth0 -eval 'wifi.deauth 00:11:22:33:44:55'",
    "desc": "Deauth"
   },
   {
    "cmd": "bettercap -iface eth0 -eval 'net.probe on; arp.spoof on'",
    "desc": "Comandos encadenados"
   },
   {
    "cmd": "bettercap -iface eth0 -caplet caplets/hstshijack/hstshijack.cap",
    "desc": "Caplet"
   },
   {
    "cmd": "bettercap -iface eth0 -eval 'set arp.spoof.targets 192.168.1.10'",
    "desc": "Target"
   },
   {
    "cmd": "bettercap -iface eth0 -eval 'set net.sniff.verbose true; net.sniff on'",
    "desc": "Sniff verbose"
   },
   {
    "cmd": "bettercap -iface eth0 -eval 'http.server on; http.server.port 80'",
    "desc": "Servidor HTTP"
   },
   {
    "cmd": "bettercap -iface eth0 -eval 'dns.spoof on; set dns.spoof.domains objetivo.com'",
    "desc": "DNS spoof"
   },
   {
    "cmd": "bettercap -iface eth0 -eval 'events.show'",
    "desc": "Mostrar eventos"
   },
   {
    "cmd": "bettercap -iface eth0 -eval 'net.forward off'",
    "desc": "Desactivar forwarding"
   },
   {
    "cmd": "bettercap -iface eth0 --proxy-port 8080",
    "desc": "Puerto proxy"
   }
  ]
 },
 {
  "tool": "kismet",
  "desc": "Detector y sniffer de redes inalámbricas",
  "commands": [
   {
    "cmd": "kismet -c wlan0mon",
    "desc": "Iniciar con interfaz monitor"
   },
   {
    "cmd": "kismet -c wlan0mon --server-only",
    "desc": "Solo servidor"
   },
   {
    "cmd": "kismet --log-dir /tmp/kismet",
    "desc": "Directorio de logs"
   },
   {
    "cmd": "kismet -c wlan0mon -n",
    "desc": "Sin resolución"
   },
   {
    "cmd": "kismet -c wlan0mon -f kismet.conf",
    "desc": "Config"
   },
   {
    "cmd": "kismet -c wlan0mon -g 0",
    "desc": "Sin GPS"
   },
   {
    "cmd": "kismet -c wlan0mon --debug",
    "desc": "Debug"
   },
   {
    "cmd": "kismet -c wlan0mon -s wlan0",
    "desc": "Interfaz secundaria"
   },
   {
    "cmd": "kismet -c wlan0mon --override channel=6",
    "desc": "Forzar canal"
   },
   {
    "cmd": "kismet -c wlan0mon --set channel_hop=true",
    "desc": "Channel hopping"
   },
   {
    "cmd": "kismet_client -s localhost:2501",
    "desc": "Cliente remoto"
   },
   {
    "cmd": "kismet -c wlan0mon -l cap.pcap",
    "desc": "Leer pcap"
   },
   {
    "cmd": "kismet --no-logging",
    "desc": "Sin logging"
   }
  ]
 },
 {
  "tool": "bulk-extractor",
  "desc": "Extracción masiva de artefactos (emails, URLs, hashes) de discos",
  "commands": [
   {
    "cmd": "bulk_extractor imagen.dd",
    "desc": "Extraer artefactos"
   },
   {
    "cmd": "bulk_extractor -o outdir imagen.dd",
    "desc": "Directorio de salida"
   },
   {
    "cmd": "bulk_extractor -e email imagen.dd",
    "desc": "Solo emails"
   },
   {
    "cmd": "bulk_extractor -e url imagen.dd",
    "desc": "Solo URLs"
   },
   {
    "cmd": "bulk_extractor -e zip imagen.dd",
    "desc": "Solo ZIPs"
   },
   {
    "cmd": "bulk_extractor -e winprefetch imagen.dd",
    "desc": "Prefetch"
   },
   {
    "cmd": "bulk_extractor -S 1000000 imagen.dd",
    "desc": "Fragmento de 1MB"
   },
   {
    "cmd": "bulk_extractor -j 4 imagen.dd",
    "desc": "4 hilos"
   },
   {
    "cmd": "bulk_extractor -R imagen.dd",
    "desc": "Radix"
   },
   {
    "cmd": "bulk_extractor -x all -e email imagen.dd",
    "desc": "Solo un extractor"
   },
   {
    "cmd": "bulk_extractor --report outdir imagen.dd",
    "desc": "Con reporte"
   },
   {
    "cmd": "bulk_extractor -q imagen.dd",
    "desc": "Quiet"
   },
   {
    "cmd": "bulk_extractor -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "bruteshark",
  "desc": "Analizar pcap buscando credenciales, hashes, malware",
  "commands": [
   {
    "cmd": "brutesharkcli -i cap.pcap",
    "desc": "Análisis básico"
   },
   {
    "cmd": "brutesharkcli -i cap.pcap -c creds",
    "desc": "Solo credenciales"
   },
   {
    "cmd": "brutesharkcli -i cap.pcap -c hashes",
    "desc": "Solo hashes"
   },
   {
    "cmd": "brutesharkcli -i cap.pcap -c maldetect",
    "desc": "Detección malware"
   },
   {
    "cmd": "brutesharkcli -i cap.pcap -c all",
    "desc": "Todo"
   },
   {
    "cmd": "brutesharkcli -i cap.pcap -o out.txt",
    "desc": "Salida"
   },
   {
    "cmd": "brutesharkcli -i cap.pcap -p",
    "desc": "Pcap"
   },
   {
    "cmd": "brutesharkcli -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "chaosreader2",
  "desc": "Extraer sesiones de pcap (alternativa)",
  "commands": [
   {
    "cmd": "chaosreader -f cap.pcap",
    "desc": "Leer pcap"
   },
   {
    "cmd": "chaosreader -e -D out cap.pcap",
    "desc": "Extraer todo"
   },
   {
    "cmd": "chaosreader -u cap.pcap",
    "desc": "Unicode"
   },
   {
    "cmd": "chaosreader -a cap.pcap",
    "desc": "Todo"
   },
   {
    "cmd": "chaosreader -r cap.pcap",
    "desc": "Reporte"
   }
  ]
 },
 {
  "tool": "ethercap",
  "desc": "Sniffer de red con filtros custom (archivo de config)",
  "commands": [
   {
    "cmd": "ethercap -i eth0 -c config.conf",
    "desc": "Sniff con config"
   },
   {
    "cmd": "ethercap -i eth0 -f 'tcp port 80'",
    "desc": "Filtro"
   },
   {
    "cmd": "ethercap -i eth0 -o out.pcap",
    "desc": "Salida"
   },
   {
    "cmd": "ethercap -i eth0 -v",
    "desc": "Verbose"
   }
  ]
 },
 {
  "tool": "jnetmap",
  "desc": "Herramienta de monitoreo de red con GUI",
  "commands": [
   {
    "cmd": "jnetmap",
    "desc": "Abrir GUI"
   },
   {
    "cmd": "jnetmap -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "packetforge-ng",
  "desc": "Generar paquetes para inyección (WEP/WPA)",
  "commands": [
   {
    "cmd": "packetforge-ng -0 -a AP_MAC -h CLIENT_MAC -k 255.255.255.255 -l 0.0.0.0 -y key.bin -w arp.cap",
    "desc": "Forjar ARP request"
   },
   {
    "cmd": "packetforge-ng -0 -a MAC -h MAC -k 192.168.1.1 -l 192.168.1.100 -y key.bin -w pkt.cap",
    "desc": "ARP con IPs"
   },
   {
    "cmd": "packetforge-ng -1 -a AP_MAC -h CLIENT -y key.bin -w icmp.cap",
    "desc": "ICMP"
   },
   {
    "cmd": "packetforge-ng -2 -a AP_MAC -h CLIENT -y key.bin -w ks.cap",
    "desc": "Konami"
   },
   {
    "cmd": "packetforge-ng -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "airodump-ng",
  "desc": "Capturador de paquetes 802.11 (WEP/WPA handshakes)",
  "commands": [
   {
    "cmd": "sudo airodump-ng wlan0mon",
    "desc": "Capturar redes"
   },
   {
    "cmd": "sudo airodump-ng -c 6 wlan0mon",
    "desc": "Canal específico"
   },
   {
    "cmd": "sudo airodump-ng --band abg wlan0mon",
    "desc": "Bandas a/b/g"
   },
   {
    "cmd": "sudo airodump-ng --bssid AA:BB:CC:DD:EE:FF wlan0mon",
    "desc": "Por BSSID"
   },
   {
    "cmd": "sudo airodump-ng -c 6 --bssid MAC -w captura wlan0mon",
    "desc": "Capturar handshake"
   },
   {
    "cmd": "sudo airodump-ng -w out wlan0mon",
    "desc": "Guardar capturas"
   },
   {
    "cmd": "sudo airodump-ng --write-interval 5 wlan0mon",
    "desc": "Guardar cada 5s"
   },
   {
    "cmd": "sudo airodump-ng -d MAC wlan0mon",
    "desc": "Solo un AP"
   },
   {
    "cmd": "sudo airodump-ng --uptime wlan0mon",
    "desc": "Mostrar uptime"
   },
   {
    "cmd": "sudo airodump-ng -g 100 wlan0mon",
    "desc": "GPS"
   },
   {
    "cmd": "sudo airodump-ng --ivs wlan0mon",
    "desc": "Guardar solo IVs"
   },
   {
    "cmd": "sudo airodump-ng --berkeley-db-format wlan0mon",
    "desc": "Formato bdb"
   },
   {
    "cmd": "sudo airodump-ng --encrypt WPA2 wlan0mon",
    "desc": "Filtrar por cifrado"
   },
   {
    "cmd": "sudo airodump-ng --manufacturer wlan0mon",
    "desc": "Mostrar fabricantes"
   },
   {
    "cmd": "sudo airodump-ng -w cap --output-format pcap wlan0mon",
    "desc": "Solo pcap"
   }
  ]
 },
 {
  "tool": "hashdump",
  "desc": "Volcado de hashes de capturas pcap",
  "commands": [
   {
    "cmd": "hashdump cap.pcap",
    "desc": "Extraer hashes"
   },
   {
    "cmd": "hashdump -f cap.pcap",
    "desc": "Forzar"
   },
   {
    "cmd": "hashdump -o out.txt cap.pcap",
    "desc": "Salida"
   },
   {
    "cmd": "hashdump -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "macchanger-ng",
  "desc": "Cambiar MAC con extra funciones",
  "commands": [
   {
    "cmd": "macchanger-ng -r wlan0",
    "desc": "MAC aleatoria"
   },
   {
    "cmd": "macchanger-ng -a wlan0",
    "desc": "MAC de fabricante"
   },
   {
    "cmd": "macchanger-ng -m MAC wlan0",
    "desc": "MAC específica"
   },
   {
    "cmd": "macchanger-ng -p wlan0",
    "desc": "Restaurar física"
   }
  ]
 },
 {
  "tool": "mitmproxy",
  "desc": "Proxy MITM interactivo (HTTP/HTTPS)",
  "commands": [
   {
    "cmd": "mitmproxy --listen-port 8080",
    "desc": "Proxy"
   },
   {
    "cmd": "mitmproxy -p 8080 --mode transparent",
    "desc": "Transparente"
   },
   {
    "cmd": "mitmproxy --mode regular -p 8080",
    "desc": "Regular"
   },
   {
    "cmd": "mitmproxy -w out.flow",
    "desc": "Guardar flows"
   },
   {
    "cmd": "mitmproxy -r out.flow",
    "desc": "Replay"
   },
   {
    "cmd": "mitmproxy -s script.py",
    "desc": "Script"
   },
   {
    "cmd": "mitmproxy --set confdir=/tmp/mitm",
    "desc": "Config dir"
   },
   {
    "cmd": "mitmproxy --no-http2",
    "desc": "Sin HTTP2"
   },
   {
    "cmd": "mitmproxy --ssl-insecure",
    "desc": "Sin verificar"
   },
   {
    "cmd": "mitmdump -w out.flow -p 8080",
    "desc": "Modo dump"
   },
   {
    "cmd": "mitmdump -r out.flow -s extract.py",
    "desc": "Replay con script"
   },
   {
    "cmd": "mitmweb -p 8080",
    "desc": "GUI web"
   },
   {
    "cmd": "mitmproxy --set console_eventlog_verbosity=debug",
    "desc": "Debug"
   },
   {
    "cmd": "mitmproxy --ignore-hosts 'example.com'",
    "desc": "Ignorar hosts"
   },
   {
    "cmd": "mitmproxy --tcp-hosts '10.0.0.5'",
    "desc": "TCP host"
   },
   {
    "cmd": "mitmproxy --certs *.example.com=wild.pem",
    "desc": "Cert custom"
   },
   {
    "cmd": "mitmproxy --upstream-cert",
    "desc": "Usar cert upstream"
   },
   {
    "cmd": "mitmproxy -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "ettercap",
  "desc": "Suite MITM (ARP spoof, sniffing, filtros)",
  "commands": [
   {
    "cmd": "ettercap -G",
    "desc": "GUI"
   },
   {
    "cmd": "ettercap -T -i eth0",
    "desc": "Texto, interfaz"
   },
   {
    "cmd": "ettercap -T -M arp /192.168.1.1// /192.168.1.10//",
    "desc": "ARP MITM"
   },
   {
    "cmd": "ettercap -T -M arp:remote -i eth0",
    "desc": "ARP remote"
   },
   {
    "cmd": "ettercap -T -M arp // //",
    "desc": "ARP todos"
   },
   {
    "cmd": "ettercap -T -M icmp // //",
    "desc": "ICMP MITM"
   },
   {
    "cmd": "ettercap -T -M dhcp // //",
    "desc": "DHCP MITM"
   },
   {
    "cmd": "ettercap -T -M arp -P dns_spoof // //",
    "desc": "DNS spoof"
   },
   {
    "cmd": "ettercap -T -M arp -P sslstrip // //",
    "desc": "SSL strip"
   },
   {
    "cmd": "ettercap -T -M arp -P tcpkill // //",
    "desc": "TCP kill"
   },
   {
    "cmd": "ettercap -T -M arp -F filter.txt // //",
    "desc": "Con filtro"
   },
   {
    "cmd": "ettercap -T -w out.pcap -M arp // //",
    "desc": "Guardar pcap"
   },
   {
    "cmd": "ettercap -T -i eth0 -q -M arp // //",
    "desc": "Quiet"
   },
   {
    "cmd": "ettercap -T -L logfile -M arp // //",
    "desc": "Log"
   },
   {
    "cmd": "ettercap --version",
    "desc": "Versión"
   }
  ]
 },
 {
  "tool": "arpspoof",
  "desc": "ARP spoofing (dsniff suite)",
  "commands": [
   {
    "cmd": "arpspoof -i eth0 -t 192.168.1.10 192.168.1.1",
    "desc": "Spoof target"
   },
   {
    "cmd": "arpspoof -i eth0 -t 192.168.1.1 192.168.1.10",
    "desc": "Spoof gateway"
   },
   {
    "cmd": "arpspoof -i eth0 -r -t 192.168.1.10 192.168.1.1",
    "desc": "Doble spoof"
   },
   {
    "cmd": "arpspoof -i eth0 -t 192.168.1.10 192.168.1.1 -c",
    "desc": "Continuo"
   },
   {
    "cmd": "arpspoof -i eth0 -t 192.168.1.10 192.168.1.1 -v",
    "desc": "Verbose"
   },
   {
    "cmd": "arpspoof -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "tcpxtract",
  "desc": "Extraer archivos de pcap por firmas",
  "commands": [
   {
    "cmd": "tcpxtract -f cap.pcap",
    "desc": "Extraer"
   },
   {
    "cmd": "tcpxtract -d cap.pcap",
    "desc": "Directorio"
   },
   {
    "cmd": "tcpxtract -f cap.pcap -o /tmp/out",
    "desc": "Salida"
   },
   {
    "cmd": "tcpxtract -f cap.pcap -x conf",
    "desc": "Config"
   },
   {
    "cmd": "tcpxtract -f cap.pcap -r",
    "desc": "Raw"
   },
   {
    "cmd": "tcpxtract -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "ferret",
  "desc": "Extraer cookies de capturas pcap (sidejacking)",
  "commands": [
   {
    "cmd": "ferret -i cap.pcap",
    "desc": "Analizar pcap"
   },
   {
    "cmd": "ferret -i cap.pcap -o /tmp",
    "desc": "Salida"
   },
   {
    "cmd": "ferret -i cap.pcap -l",
    "desc": "Log"
   },
   {
    "cmd": "ferret -i cap.pcap -v",
    "desc": "Verbose"
   },
   {
    "cmd": "ferret -i cap.pcap -f",
    "desc": "Filtro"
   },
   {
    "cmd": "ferret -i cap.pcap -r",
    "desc": "Readable"
   },
   {
    "cmd": "ferret -i cap.pcap -d",
    "desc": "Detalles"
   },
   {
    "cmd": "ferret -i cap.pcap -s",
    "desc": "Simple"
   },
   {
    "cmd": "ferret -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "hamster",
  "desc": "Usar cookies capturadas (ferret companion)",
  "commands": [
   {
    "cmd": "hamster",
    "desc": "Iniciar proxy en 1234"
   },
   {
    "cmd": "hamster -p 1234",
    "desc": "Puerto"
   },
   {
    "cmd": "hamster -i cap.pcap",
    "desc": "De pcap"
   },
   {
    "cmd": "hamster -d /tmp",
    "desc": "Directorio de datos"
   },
   {
    "cmd": "hamster -v",
    "desc": "Verbose"
   },
   {
    "cmd": "hamster -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "urlsnarf",
  "desc": "Sniff de URLs HTTP (dsniff suite)",
  "commands": [
   {
    "cmd": "urlsnarf -i eth0",
    "desc": "Capturar URLs"
   },
   {
    "cmd": "urlsnarf -i eth0 -w cap.pcap",
    "desc": "Guardar"
   },
   {
    "cmd": "urlsnarf -i eth0 -r cap.pcap",
    "desc": "De captura"
   },
   {
    "cmd": "urlsnarf -i eth0 -l log.txt",
    "desc": "Log"
   },
   {
    "cmd": "urlsnarf -i eth0 -v",
    "desc": "Verbose"
   },
   {
    "cmd": "urlsnarf -i eth0 -n",
    "desc": "Sin resolver"
   },
   {
    "cmd": "urlsnarf -i eth0 -a",
    "desc": "Todo"
   },
   {
    "cmd": "urlsnarf -i eth0 -d",
    "desc": "Debug"
   },
   {
    "cmd": "urlsnarf -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "msgsnarf",
  "desc": "Registrar mensajes de chat (AOL, Yahoo, MSN)",
  "commands": [
   {
    "cmd": "msgsnarf -i eth0",
    "desc": "Capturar"
   },
   {
    "cmd": "msgsnarf -i eth0 -w cap.pcap",
    "desc": "Guardar"
   },
   {
    "cmd": "msgsnarf -i eth0 -r cap.pcap",
    "desc": "De captura"
   },
   {
    "cmd": "msgsnarf -i eth0 -l log.txt",
    "desc": "Log"
   },
   {
    "cmd": "msgsnarf -i eth0 -v",
    "desc": "Verbose"
   },
   {
    "cmd": "msgsnarf -i eth0 -a",
    "desc": "Todo"
   },
   {
    "cmd": "msgsnarf -i eth0 -d",
    "desc": "Debug"
   },
   {
    "cmd": "msgsnarf -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "filesnarf",
  "desc": "Capturar archivos transferidos (NFS vía red)",
  "commands": [
   {
    "cmd": "filesnarf -i eth0",
    "desc": "Capturar"
   },
   {
    "cmd": "filesnarf -i eth0 -w cap.pcap",
    "desc": "Guardar"
   },
   {
    "cmd": "filesnarf -i eth0 -r cap.pcap",
    "desc": "De captura"
   },
   {
    "cmd": "filesnarf -i eth0 -l log.txt",
    "desc": "Log"
   },
   {
    "cmd": "filesnarf -i eth0 -v",
    "desc": "Verbose"
   },
   {
    "cmd": "filesnarf -i eth0 -a",
    "desc": "Todo"
   },
   {
    "cmd": "filesnarf -i eth0 -d",
    "desc": "Debug"
   },
   {
    "cmd": "filesnarf -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "tcpick",
  "desc": "Capturar y reconstruir flujos TCP",
  "commands": [
   {
    "cmd": "tcpick -i eth0",
    "desc": "Capturar"
   },
   {
    "cmd": "tcpick -i eth0 -C",
    "desc": "Mostrar contenido"
   },
   {
    "cmd": "tcpick -i eth0 -yX",
    "desc": "Hex dump"
   },
   {
    "cmd": "tcpick -i eth0 -yP",
    "desc": "Solo printable"
   },
   {
    "cmd": "tcpick -i eth0 -wP",
    "desc": "Guardar archivos"
   },
   {
    "cmd": "tcpick -i eth0 -r cap.pcap",
    "desc": "De captura"
   },
   {
    "cmd": "tcpick -i eth0 -hT",
    "desc": "Headers"
   },
   {
    "cmd": "tcpick -i eth0 -l",
    "desc": "Log"
   },
   {
    "cmd": "tcpick -i eth0 -v",
    "desc": "Verbose"
   },
   {
    "cmd": "tcpick -i eth0 -u",
    "desc": "Solo datagrams"
   },
   {
    "cmd": "tcpick -i eth0 -t",
    "desc": "Timestamps"
   },
   {
    "cmd": "tcpick -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "xplico",
  "desc": "Extracción de datos de capturas (decodificación pcap)",
  "commands": [
   {
    "cmd": "xplico -i captura.pcap -o /tmp/out",
    "desc": "Procesar pcap"
   },
   {
    "cmd": "xplico -i captura.pcap -o /tmp/out -m http",
    "desc": "Solo HTTP"
   },
   {
    "cmd": "xplico -i captura.pcap -o /tmp/out -m ftp",
    "desc": "FTP"
   },
   {
    "cmd": "xplico -i captura.pcap -o /tmp/out -m sip",
    "desc": "SIP"
   },
   {
    "cmd": "xplico -i captura.pcap -o /tmp/out -m email",
    "desc": "Emails"
   },
   {
    "cmd": "xplico -i captura.pcap -o /tmp/out -m all",
    "desc": "Todo"
   },
   {
    "cmd": "xplico -i captura.pcap -o /tmp/out -v",
    "desc": "Verbose"
   },
   {
    "cmd": "xplico -i captura.pcap -o /tmp/out -q",
    "desc": "Quiet"
   },
   {
    "cmd": "find /tmp/out -type f",
    "desc": "Ver extraídos"
   },
   {
    "cmd": "xplico --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "pcap-analyze",
  "desc": "Análisis de capturas pcap (tshark + tcpdump)",
  "commands": [
   {
    "cmd": "tshark -r cap.pcap",
    "desc": "Listar paquetes"
   },
   {
    "cmd": "tshark -r cap.pcap -Y http",
    "desc": "Filtro HTTP"
   },
   {
    "cmd": "tshark -r cap.pcap -Y 'http.request'",
    "desc": "Solo requests"
   },
   {
    "cmd": "tshark -r cap.pcap -Y 'tcp.flags.syn==1 && tcp.flags.ack==0'",
    "desc": "SYN"
   },
   {
    "cmd": "tshark -r cap.pcap -Y 'dns' -T fields -e dns.qry.name",
    "desc": "DNS queries"
   },
   {
    "cmd": "tshark -r cap.pcap -Y 'http contains password'",
    "desc": "Buscar password"
   },
   {
    "cmd": "tshark -r cap.pcap -Y 'ftp' -T fields -e ftp.request.command",
    "desc": "FTP commands"
   },
   {
    "cmd": "tshark -r cap.pcap -z conv,tcp",
    "desc": "Conversaciones"
   },
   {
    "cmd": "tshark -r cap.pcap -z io,stat,5",
    "desc": "Stats 5s"
   },
   {
    "cmd": "tshark -r cap.pcap -T json | head",
    "desc": "JSON"
   },
   {
    "cmd": "tshark -r cap.pcap -T fields -e ip.src -e ip.dst",
    "desc": "Flows"
   },
   {
    "cmd": "tcpdump -r cap.pcap -c 10",
    "desc": "Primeros 10"
   },
   {
    "cmd": "tcpdump -r cap.pcap -A -s 0 | grep -a pass",
    "desc": "Buscar en payload"
   },
   {
    "cmd": "tcpdump -r cap.pcap 'port 53'",
    "desc": "DNS"
   },
   {
    "cmd": "capinfos cap.pcap",
    "desc": "Info captura"
   },
   {
    "cmd": "mergecap -w out.pcap cap1.pcap cap2.pcap",
    "desc": "Fusionar"
   },
   {
    "cmd": "editcap -c 1000 in.pcap out.pcap",
    "desc": "Dividir"
   },
   {
    "cmd": "tcpick -r cap.pcap -C",
    "desc": "TCPick"
   },
   {
    "cmd": "ngrep -q -d lo 'user'",
    "desc": "Ngrep"
   },
   {
    "cmd": "chaosreader -f cap.pcap -D /tmp/out",
    "desc": "Chaosreader"
   }
  ]
 },
 {
  "tool": "session-hijack",
  "desc": "Secuestro de sesiones (cookies, tokens)",
  "commands": [
   {
    "cmd": "cookie-parser",
    "desc": "Parsear cookies"
   },
   {
    "cmd": "python3 -c 'import requests; r=requests.get(\"http://IP/\"); print(r.cookies)'",
    "desc": "Ver cookies"
   },
   {
    "cmd": "curl -s -i http://IP/ | grep -i set-cookie",
    "desc": "Set-Cookie"
   },
   {
    "cmd": "curl -s http://IP/ -b 'session=ROBO'",
    "desc": "Usar cookie"
   },
   {
    "cmd": "curl -s http://IP/admin -b 'role=admin'",
    "desc": "Cookie role"
   },
   {
    "cmd": "python3 -c 'import base64; print(base64.b64decode(\"ROBO\"))'",
    "desc": "Decodificar"
   },
   {
    "cmd": "python3 -c 'import json; print(json.dumps({\"user\":\"admin\"}))'",
    "desc": "Forjar JWT"
   },
   {
    "cmd": "python3 -c 'import jwt; print(jwt.encode({\"user\":\"admin\"}, \"secret\"))'",
    "desc": "JWT firmado"
   },
   {
    "cmd": "ferret -i cap.pcap",
    "desc": "Ferret sesiones"
   },
   {
    "cmd": "hamster -i eth0",
    "desc": "Hamster"
   },
   {
    "cmd": "beef-xss",
    "desc": "BeEF"
   },
   {
    "cmd": "beef-xss -c /etc/beef-xss/config.yaml",
    "desc": "BeEF config"
   },
   {
    "cmd": "nmap --script=http-cookie-flags -p80 IP",
    "desc": "Flags cookies"
   },
   {
    "cmd": "curl -s http://IP/ -H 'Cookie: PHPSESSID=abc'",
    "desc": "PHPSESSID"
   },
   {
    "cmd": "python3 -c 'import hashlib; print(hashlib.md5(b\"admin\").hexdigest())'",
    "desc": "Hash cookie"
   }
  ]
 },
 {
  "tool": "screenshot-tools",
  "desc": "Capturas de pantalla de escritorios remotos",
  "commands": [
   {
    "cmd": "scrot /tmp/shot.png",
    "desc": "Pantalla completa"
   },
   {
    "cmd": "scrot -s /tmp/shot.png",
    "desc": "Selección"
   },
   {
    "cmd": "scrot -d 5 /tmp/shot.png",
    "desc": "Delay 5s"
   },
   {
    "cmd": "import -window root /tmp/shot.png",
    "desc": "Imagemagick"
   },
   {
    "cmd": "xwd -root -out /tmp/shot.xwd",
    "desc": "Xwd"
   },
   {
    "cmd": "ffmpeg -f x11grab -i :0 -frames:v 1 /tmp/shot.png",
    "desc": "FFmpeg"
   },
   {
    "cmd": "gnome-screenshot -f /tmp/shot.png",
    "desc": "GNOME"
   },
   {
    "cmd": "spectacle -b -n -o /tmp/shot.png",
    "desc": "KDE"
   },
   {
    "cmd": "xdotool key Print",
    "desc": "Tecla print"
   },
   {
    "cmd": "xte 'key Print'",
    "desc": "Xte print"
   }
  ]
 },
 {
  "tool": "clipboard-tools",
  "desc": "Recolección del portapapeles",
  "commands": [
   {
    "cmd": "xclip -o -selection clipboard",
    "desc": "Ver portapapeles"
   },
   {
    "cmd": "xclip -o -selection primary",
    "desc": "Primary"
   },
   {
    "cmd": "xclip -selection clipboard -i file",
    "desc": "Copiar a clipboard"
   },
   {
    "cmd": "xsel -b -o",
    "desc": "Xsel clipboard"
   },
   {
    "cmd": "xsel -p -o",
    "desc": "Xsel primary"
   },
   {
    "cmd": "xsel -s -o",
    "desc": "Xsel secondary"
   },
   {
    "cmd": "xdotool key ctrl+c",
    "desc": "Simular copy"
   },
   {
    "cmd": "xdotool key ctrl+v",
    "desc": "Simular paste"
   },
   {
    "cmd": "python3 -c 'import pyperclip; print(pyperclip.paste())'",
    "desc": "Pyperclip"
   },
   {
    "cmd": "watch -n 5 'xclip -o'",
    "desc": "Watch clipboard"
   }
  ]
 },
 {
  "tool": "audio-record",
  "desc": "Grabación de audio (micrófono)",
  "commands": [
   {
    "cmd": "arecord -d 10 -f cd out.wav",
    "desc": "Grabar 10s"
   },
   {
    "cmd": "arecord -d 60 -f cd -t wav out.wav",
    "desc": "60s CD"
   },
   {
    "cmd": "arecord -D default -r 44100 -c 2 -f S16_LE out.wav",
    "desc": "Calidad alta"
   },
   {
    "cmd": "arecord -f S16_LE -t raw out.raw",
    "desc": "Raw"
   },
   {
    "cmd": "ffmpeg -f alsa -i default -t 10 out.wav",
    "desc": "FFmpeg alsa"
   },
   {
    "cmd": "ffmpeg -f alsa -i default -ac 1 -t 30 out.wav",
    "desc": "Mono"
   },
   {
    "cmd": "rec out.wav",
    "desc": "SoX record"
   },
   {
    "cmd": "sox out.wav out2.wav silence -l 1 0.1 1%",
    "desc": "Quitar silencio"
   },
   {
    "cmd": "sox out.wav out2.wav speed 0.8",
    "desc": "Ralentizar"
   },
   {
    "cmd": "sox out.wav -n stat",
    "desc": "Stats"
   },
   {
    "cmd": "meterpreter> record_mic -d 30",
    "desc": "Meterpreter mic"
   },
   {
    "cmd": "python3 -c 'import pyaudio; p=pyaudio.PyAudio(); print(p.get_device_count())'",
    "desc": "Py audio"
   },
   {
    "cmd": "ls /dev/snd/",
    "desc": "Dispositivos"
   },
   {
    "cmd": "aplay -l",
    "desc": "Playback devices"
   },
   {
    "cmd": "play out.wav",
    "desc": "Reproducir"
   }
  ]
 },
 {
  "tool": "fswebcam-camera",
  "desc": "Captura con cámara",
  "commands": [
   {
    "cmd": "fswebcam -r 1280x720 shot.jpg",
    "desc": "Capturar"
   },
   {
    "cmd": "fswebcam -d /dev/video0 shot.jpg",
    "desc": "Dispositivo"
   },
   {
    "cmd": "fswebcam -r 640x480 -S 5 shot.jpg",
    "desc": "Skip 5"
   },
   {
    "cmd": "fswebcam --no-banner shot.jpg",
    "desc": "Sin banner"
   },
   {
    "cmd": "fswebcam -l 10 -r 640x480 shot.jpg",
    "desc": "Timelapse 10"
   },
   {
    "cmd": "ffmpeg -f v4l2 -i /dev/video0 -frames:v 1 shot.jpg",
    "desc": "FFmpeg"
   },
   {
    "cmd": "ffmpeg -f v4l2 -i /dev/video0 -t 10 out.mp4",
    "desc": "Vídeo 10s"
   },
   {
    "cmd": "mplayer tv:// -tv driver=v4l2:device=/dev/video0",
    "desc": "Mplayer"
   },
   {
    "cmd": "streamer -o shot.jpeg -s 640x480",
    "desc": "Streamer"
   },
   {
    "cmd": "video0-grab",
    "desc": "Grab"
   },
   {
    "cmd": "meterpreter> webcam_snap",
    "desc": "Meterpreter cam"
   },
   {
    "cmd": "meterpreter> webcam_stream -i 1",
    "desc": "Stream"
   },
   {
    "cmd": "ls /dev/video*",
    "desc": "Cámaras"
   },
   {
    "cmd": "uvccapture -x640 -y480 -oshot.jpg",
    "desc": "Uvccapture"
   }
  ]
 },
 {
  "tool": "browser-history",
  "desc": "Recolección del historial del navegador",
  "commands": [
   {
    "cmd": "python3 -c 'import sqlite3; c=sqlite3.connect(\"/home/u/.config/google-chrome/Default/History\"); print(c.execute(\"select url,title,last_visit_time from urls order by last_visit_time desc limit 20\").fetchall())'",
    "desc": "Chrome"
   },
   {
    "cmd": "find ~/.config -name History 2>/dev/null",
    "desc": "Buscar"
   },
   {
    "cmd": "python3 -c 'import sqlite3; c=sqlite3.connect(\"/home/u/.config/google-chrome/Default/History\"); print(c.execute(\"select term from keyword_search_terms\").fetchall())'",
    "desc": "Búsquedas"
   },
   {
    "cmd": "grep -r 'visited' ~/.mozilla/firefox/*.default/places.sqlite 2>/dev/null",
    "desc": "Firefox"
   },
   {
    "cmd": "python3 -c 'import sqlite3; c=sqlite3.connect(\"/home/u/.mozilla/firefox/x/places.sqlite\"); print(c.execute(\"select url from moz_places order by last_visit_date desc limit 20\").fetchall())'",
    "desc": "FF urls"
   },
   {
    "cmd": "cp History /tmp/h.db && python3 -c 'import sqlite3; print(sqlite3.connect(\"/tmp/h.db\").execute(\"select count(*) from urls\").fetchone())'",
    "desc": "Copiar y contar"
   },
   {
    "cmd": "python3 -c 'import json; print(json.load(open(\"/home/u/.config/google-chrome/Default/Preferences\")).get(\"profile\",{}))'",
    "desc": "Prefs"
   },
   {
    "cmd": "find ~ -name 'cookies.sqlite' 2>/dev/null",
    "desc": "Cookies"
   },
   {
    "cmd": "strings ~/.config/google-chrome/Default/History | grep -i 'http' | head",
    "desc": "Strings"
   },
   {
    "cmd": "history-extractor",
    "desc": "Hist extractor"
   }
  ]
 }
];
