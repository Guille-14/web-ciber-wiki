// Wireless & RF
window.WIKI_CHEATSHEETS_18_WIRELESS_RF = [
 {
  "tool": "aircrack-ng",
  "desc": "Suite para auditoría WiFi (WEP/WPA)",
  "commands": [
   {
    "cmd": "aircrack-ng cap.pcap",
    "desc": "Crackear handshake"
   },
   {
    "cmd": "aircrack-ng -w rockyou.txt cap.pcap",
    "desc": "Con wordlist"
   },
   {
    "cmd": "aircrack-ng -w list.txt cap.cap -b AA:BB:CC:DD:EE:FF",
    "desc": "Por BSSID"
   },
   {
    "cmd": "aircrack-ng -w wordlist.txt -e ESSID cap.pcap",
    "desc": "Por ESSID"
   },
   {
    "cmd": "aircrack-ng -z cap.pcap",
    "desc": "Método PTW"
   },
   {
    "cmd": "aircrack-ng -b AA:BB:CC:DD:EE:FF cap.pcap",
    "desc": "Solo un AP"
   },
   {
    "cmd": "aircrack-ng -d AA:BB:CC:DD:EE:FF cap.pcap",
    "desc": "Filtrar por MAC"
   },
   {
    "cmd": "aircrack-ng -n 64 cap.pcap",
    "desc": "Clave de 64 bits"
   },
   {
    "cmd": "aircrack-ng -n 128 cap.pcap",
    "desc": "Clave de 128 bits"
   },
   {
    "cmd": "aircrack-ng -a 1 cap.pcap",
    "desc": "Modo WPA"
   },
   {
    "cmd": "aircrack-ng -a 2 cap.pcap",
    "desc": "Modo WEP"
   },
   {
    "cmd": "aircrack-ng -f 4 cap.pcap",
    "desc": "Fudge"
   },
   {
    "cmd": "aircrack-ng -t 4 cap.pcap",
    "desc": "4 hilos"
   },
   {
    "cmd": "aircrack-ng -w wordlist.txt cap.pcap -q",
    "desc": "Quiet"
   },
   {
    "cmd": "aircrack-ng -w wordlist.txt cap.pcap -l key.txt",
    "desc": "Guardar clave"
   },
   {
    "cmd": "aircrack-ng -w wordlist.txt -r 5 cap.pcap",
    "desc": "Reintentos"
   },
   {
    "cmd": "aircrack-ng -w wordlist.txt -s cap.pcap",
    "desc": "Solo WPA"
   },
   {
    "cmd": "aircrack-ng --bssid AA:BB:CC:DD:EE:FF -w w.txt cap.pcap",
    "desc": "BSSID + wordlist"
   },
   {
    "cmd": "aircrack-ng -w w.txt pmkid.pcap -K",
    "desc": "PMKID attack"
   },
   {
    "cmd": "aircrack-ng -w w.txt cap.pcap -E essid.txt",
    "desc": "ESSID de captura"
   },
   {
    "cmd": "aircrack-ng -w w.txt cap.pcap -V",
    "desc": "Verbose"
   },
   {
    "cmd": "aircrack-ng --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "airmon-ng",
  "desc": "Activar modo monitor en interfaces WiFi",
  "commands": [
   {
    "cmd": "sudo airmon-ng",
    "desc": "Listar interfaces"
   },
   {
    "cmd": "sudo airmon-ng start wlan0",
    "desc": "Modo monitor"
   },
   {
    "cmd": "sudo airmon-ng start wlan0 6",
    "desc": "Canal 6"
   },
   {
    "cmd": "sudo airmon-ng stop wlan0mon",
    "desc": "Quitar monitor"
   },
   {
    "cmd": "sudo airmon-ng check",
    "desc": "Verificar procesos"
   },
   {
    "cmd": "sudo airmon-ng check kill",
    "desc": "Matar procesos problemáticos"
   },
   {
    "cmd": "sudo airmon-ng start wlan0 -a",
    "desc": "Desactivar ampersand"
   },
   {
    "cmd": "sudo airmon-ng start wlan0 -b",
    "desc": "Desactivar bridge"
   },
   {
    "cmd": "sudo airmon-ng start wlan0 -f",
    "desc": "Forzar"
   },
   {
    "cmd": "sudo airmon-ng restart wlan0",
    "desc": "Reiniciar"
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
   },
   {
    "cmd": "sudo airodump-ng --wps wlan0mon",
    "desc": "Mostrar info WPS"
   },
   {
    "cmd": "sudo airodump-ng --band bg wlan0mon",
    "desc": "Solo 2.4GHz"
   },
   {
    "cmd": "sudo airodump-ng -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "aireplay-ng",
  "desc": "Inyección de paquetes (deauth, fake auth, ARP replay)",
  "commands": [
   {
    "cmd": "sudo aireplay-ng -0 5 -a AP_MAC wlan0mon",
    "desc": "Deauth 5 paquetes"
   },
   {
    "cmd": "sudo aireplay-ng -0 0 -a AP_MAC -c CLIENT_MAC wlan0mon",
    "desc": "Deauth continuo"
   },
   {
    "cmd": "sudo aireplay-ng -0 10 -a AP_MAC -c CLIENT_MAC wlan0mon",
    "desc": "Deauth a cliente"
   },
   {
    "cmd": "sudo aireplay-ng -1 0 -a AP_MAC -e ESSID wlan0mon",
    "desc": "Fake auth"
   },
   {
    "cmd": "sudo aireplay-ng -1 0 -a AP_MAC -e ESSID -h CLIENT_MAC wlan0mon",
    "desc": "Fake auth con MAC"
   },
   {
    "cmd": "sudo aireplay-ng -2 -b AP_MAC wlan0mon",
    "desc": "ARP replay"
   },
   {
    "cmd": "sudo aireplay-ng -2 -b AP_MAC -c CLIENT wlan0mon -F",
    "desc": "ARP replay + crack"
   },
   {
    "cmd": "sudo aireplay-ng -3 -b AP_MAC -h CLIENT wlan0mon",
    "desc": "Interactive replay"
   },
   {
    "cmd": "sudo aireplay-ng -4 -b AP_MAC wlan0mon",
    "desc": "Chop-chop attack"
   },
   {
    "cmd": "sudo aireplay-ng -5 -b AP_MAC wlan0mon",
    "desc": "Fragmentation attack"
   },
   {
    "cmd": "sudo aireplay-ng -6 -b AP_MAC wlan0mon",
    "desc": "Caffe-latte"
   },
   {
    "cmd": "sudo aireplay-ng -7 -b AP_MAC wlan0mon",
    "desc": "Hirte attack"
   },
   {
    "cmd": "sudo aireplay-ng -9 wlan0mon",
    "desc": "Test de inyección"
   },
   {
    "cmd": "sudo aireplay-ng -9 -b AP_MAC wlan0mon",
    "desc": "Test a AP"
   },
   {
    "cmd": "sudo aireplay-ng --deauth-rc 7 -0 5 -a AP wlan0mon",
    "desc": "Reason code 7"
   },
   {
    "cmd": "sudo aireplay-ng -0 5 -a AP_MAC -D wlan0mon",
    "desc": "Dual band"
   },
   {
    "cmd": "sudo aireplay-ng -1 0 -a AP -x 1000 wlan0mon",
    "desc": "Fake auth 1000/s"
   }
  ]
 },
 {
  "tool": "wifite",
  "desc": "Automatización de ataques WiFi",
  "commands": [
   {
    "cmd": "wifite",
    "desc": "Iniciar"
   },
   {
    "cmd": "wifite -i wlan0",
    "desc": "Interfaz"
   },
   {
    "cmd": "wifite --dict wordlist.txt",
    "desc": "Con wordlist"
   },
   {
    "cmd": "wifite -wpa",
    "desc": "Solo WPA"
   },
   {
    "cmd": "wifite -wep",
    "desc": "Solo WEP"
   },
   {
    "cmd": "wifite -wps",
    "desc": "Ataque WPS"
   },
   {
    "cmd": "wifite -c 6",
    "desc": "Canal"
   },
   {
    "cmd": "wifite -b MAC",
    "desc": "BSSID específico"
   },
   {
    "cmd": "wifite --pmkid",
    "desc": "Solo PMKID"
   },
   {
    "cmd": "wifite -p 80",
    "desc": "Puerto"
   },
   {
    "cmd": "wifite -w",
    "desc": "Modo WPS"
   },
   {
    "cmd": "wifite -v",
    "desc": "Verbose"
   },
   {
    "cmd": "wifite -q",
    "desc": "Quiet"
   },
   {
    "cmd": "wifite -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "wash",
  "desc": "Detectar redes con WPS vulnerable",
  "commands": [
   {
    "cmd": "sudo wash -i wlan0mon",
    "desc": "Escanear WPS"
   },
   {
    "cmd": "sudo wash -i wlan0mon -c 6",
    "desc": "Canal"
   },
   {
    "cmd": "sudo wash -i wlan0mon -b MAC",
    "desc": "BSSID"
   },
   {
    "cmd": "sudo wash -i wlan0mon -f",
    "desc": "Forzar"
   },
   {
    "cmd": "sudo wash -i wlan0mon -n",
    "desc": "Sin lockouts"
   },
   {
    "cmd": "sudo wash -i wlan0mon -s",
    "desc": "Silent"
   },
   {
    "cmd": "sudo wash -i wlan0mon -o out.txt",
    "desc": "Salida"
   },
   {
    "cmd": "sudo wash -i wlan0mon -C cap.pcap",
    "desc": "De captura"
   },
   {
    "cmd": "sudo wash -i wlan0mon -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "reaver",
  "desc": "Ataque WPS PIN",
  "commands": [
   {
    "cmd": "sudo reaver -i wlan0mon -b AP_MAC",
    "desc": "Atacar WPS"
   },
   {
    "cmd": "sudo reaver -i wlan0mon -b AP_MAC -c 6",
    "desc": "Canal"
   },
   {
    "cmd": "sudo reaver -i wlan0mon -b AP_MAC -p PIN",
    "desc": "PIN específico"
   },
   {
    "cmd": "sudo reaver -i wlan0mon -b AP_MAC -e ESSID",
    "desc": "ESSID"
   },
   {
    "cmd": "sudo reaver -i wlan0mon -b AP_MAC -vv",
    "desc": "Verbose"
   },
   {
    "cmd": "sudo reaver -i wlan0mon -b AP_MAC -d 5",
    "desc": "Delay 5s"
   },
   {
    "cmd": "sudo reaver -i wlan0mon -b AP_MAC -t 5",
    "desc": "Timeout"
   },
   {
    "cmd": "sudo reaver -i wlan0mon -b AP_MAC -T 2",
    "desc": "Timeout recv"
   },
   {
    "cmd": "sudo reaver -i wlan0mon -b AP_MAC -s 180",
    "desc": "Sin 180s"
   },
   {
    "cmd": "sudo reaver -i wlan0mon -b AP_MAC -r 3",
    "desc": "Reintentos"
   },
   {
    "cmd": "sudo reaver -i wlan0mon -b AP_MAC -l out.log",
    "desc": "Log"
   },
   {
    "cmd": "sudo reaver -i wlan0mon -b AP_MAC -f",
    "desc": "Forzar"
   },
   {
    "cmd": "sudo reaver -i wlan0mon -b AP_MAC -q",
    "desc": "Quiet"
   },
   {
    "cmd": "sudo reaver -i wlan0mon -b AP_MAC -a",
    "desc": "Auto"
   },
   {
    "cmd": "sudo reaver -i wlan0mon -b AP_MAC -N",
    "desc": "No NACK"
   },
   {
    "cmd": "sudo reaver -i wlan0mon -b AP_MAC -S",
    "desc": "DH small"
   },
   {
    "cmd": "sudo reaver -i wlan0mon -b AP_MAC -K 1",
    "desc": "Known PINs"
   }
  ]
 },
 {
  "tool": "bully",
  "desc": "Ataque WPS alternativo (mejor con lockouts)",
  "commands": [
   {
    "cmd": "sudo bully wlan0mon -b AP_MAC",
    "desc": "Atacar"
   },
   {
    "cmd": "sudo bully wlan0mon -b AP_MAC -c 6",
    "desc": "Canal"
   },
   {
    "cmd": "sudo bully wlan0mon -b AP_MAC -e ESSID",
    "desc": "ESSID"
   },
   {
    "cmd": "sudo bully wlan0mon -b AP_MAC -p PIN",
    "desc": "PIN"
   },
   {
    "cmd": "sudo bully wlan0mon -b AP_MAC -d 3",
    "desc": "Delay"
   },
   {
    "cmd": "sudo bully wlan0mon -b AP_MAC -t 2",
    "desc": "Timeout"
   },
   {
    "cmd": "sudo bully wlan0mon -b AP_MAC -S",
    "desc": "Sin lockout"
   },
   {
    "cmd": "sudo bully wlan0mon -b AP_MAC -v 3",
    "desc": "Verbose"
   },
   {
    "cmd": "sudo bully wlan0mon -b AP_MAC -w 60",
    "desc": "Wait"
   },
   {
    "cmd": "sudo bully wlan0mon -b AP_MAC -B",
    "desc": "Bruteforce"
   },
   {
    "cmd": "sudo bully wlan0mon -b AP_MAC -F",
    "desc": "Fast"
   },
   {
    "cmd": "sudo bully wlan0mon -b AP_MAC -Z",
    "desc": "Pixie dust"
   },
   {
    "cmd": "sudo bully wlan0mon -b AP_MAC -L",
    "desc": "Limit"
   },
   {
    "cmd": "sudo bully wlan0mon -b AP_MAC -x",
    "desc": "No PIN"
   }
  ]
 },
 {
  "tool": "pixiewps",
  "desc": "Ataque offline WPS (Pixie Dust)",
  "commands": [
   {
    "cmd": "pixiewps --e-hash1 HASH --e-hash2 HASH --e-nonce NONCE --pke PKE --pkr PKR",
    "desc": "Ataque completo"
   },
   {
    "cmd": "pixiewps --help",
    "desc": "Ayuda"
   },
   {
    "cmd": "pixiewps --version",
    "desc": "Versión"
   }
  ]
 },
 {
  "tool": "hcxdumptool",
  "desc": "Capturar PMKID y handshakes (WPA3-ready)",
  "commands": [
   {
    "cmd": "sudo hcxdumptool -i wlan0 -o dump.pcapng",
    "desc": "Capturar"
   },
   {
    "cmd": "sudo hcxdumptool -i wlan0 -o dump.pcapng --enable_status=1",
    "desc": "Con status"
   },
   {
    "cmd": "sudo hcxdumptool -i wlan0 -o dump.pcapng --filterlist_ap=MAC --filtermode=2",
    "desc": "Filtrar AP"
   },
   {
    "cmd": "sudo hcxdumptool -i wlan0 -o dump.pcapng --filterlist_client=MAC --filtermode=1",
    "desc": "Filtrar clientes"
   },
   {
    "cmd": "sudo hcxdumptool -i wlan0 -o dump.pcapng --channel=6",
    "desc": "Canal"
   },
   {
    "cmd": "sudo hcxdumptool -i wlan0 -o dump.pcapng -c 1,6,11",
    "desc": "Múltiples canales"
   },
   {
    "cmd": "sudo hcxdumptool -i wlan0 -o dump.pcapng --deauthentication=2",
    "desc": "Deauth"
   },
   {
    "cmd": "sudo hcxdumptool -i wlan0 -o dump.pcapng --associations=3",
    "desc": "Asociaciones"
   },
   {
    "cmd": "sudo hcxdumptool -i wlan0 -o dump.pcapng --proberequest=1",
    "desc": "Probe request"
   },
   {
    "cmd": "sudo hcxdumptool -i wlan0 -o dump.pcapng --beacons=3",
    "desc": "Beacons"
   },
   {
    "cmd": "sudo hcxdumptool -i wlan0 -o dump.pcapng --enable_led=1",
    "desc": "LED"
   },
   {
    "cmd": "sudo hcxdumptool -i wlan0 -o dump.pcapng --rc_filter=1",
    "desc": "RC filter"
   },
   {
    "cmd": "sudo hcxdumptool -i wlan0 -o dump.pcapng --totally_silent",
    "desc": "Silent"
   },
   {
    "cmd": "sudo hcxdumptool -i wlan0 -o dump.pcapng --power_high=1",
    "desc": "TX power"
   }
  ]
 },
 {
  "tool": "hcxtools",
  "desc": "Convertir capturas a hashcat/john format",
  "commands": [
   {
    "cmd": "hcxpcapngtool dump.pcapng -o hashes.22000",
    "desc": "Convertir a hashcat 22000"
   },
   {
    "cmd": "hcxpcapngtool dump.pcapng -E essidlist.txt",
    "desc": "ESSIDs"
   },
   {
    "cmd": "hcxpcapngtool dump.pcapng -I identity.txt",
    "desc": "Identities"
   },
   {
    "cmd": "hcxpcapngtool dump.pcapng -U usernames.txt",
    "desc": "Usernames"
   },
   {
    "cmd": "hcxpcapngtool dump.pcapng -o pmkid.txt --pmkid",
    "desc": "Solo PMKID"
   },
   {
    "cmd": "hcxpcapngtool dump.pcapng -o wpa.txt --eapol",
    "desc": "Solo EAPOL"
   },
   {
    "cmd": "hcxpcapngtool dump.pcapng -v",
    "desc": "Verbose"
   },
   {
    "cmd": "hcxpcapngtool --help",
    "desc": "Ayuda"
   },
   {
    "cmd": "hcxpcapngtool dump.pcapng -o out.16800",
    "desc": "Formato 16800"
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
  "tool": "mdk4",
  "desc": "DoS y testeo de resistencia WiFi",
  "commands": [
   {
    "cmd": "sudo mdk4 wlan0mon b -f list.txt",
    "desc": "Beacon flood"
   },
   {
    "cmd": "sudo mdk4 wlan0mon a -i MAC",
    "desc": "Auth flood"
   },
   {
    "cmd": "sudo mdk4 wlan0mon a -i MAC -s 100",
    "desc": "Auth flood 100/s"
   },
   {
    "cmd": "sudo mdk4 wlan0mon d -b MAC",
    "desc": "Deauth flood"
   },
   {
    "cmd": "sudo mdk4 wlan0mon d -c 1,6,11",
    "desc": "Canales"
   },
   {
    "cmd": "sudo mdk4 wlan0mon m -t MAC",
    "desc": "Michael shutdown"
   },
   {
    "cmd": "sudo mdk4 wlan0mon e -t MAC",
    "desc": "EAPOL flood"
   },
   {
    "cmd": "sudo mdk4 wlan0mon p -t MAC",
    "desc": "Probe flood"
   },
   {
    "cmd": "sudo mdk4 wlan0mon s -t MAC",
    "desc": "Software AP"
   },
   {
    "cmd": "sudo mdk4 wlan0mon w -e ESSID -z",
    "desc": "WPS flood"
   },
   {
    "cmd": "sudo mdk4 wlan0mon f -c 6",
    "desc": "MAC flood"
   },
   {
    "cmd": "sudo mdk4 wlan0mon x -c 6",
    "desc": "WIDS confusion"
   },
   {
    "cmd": "sudo mdk4 wlan0mon -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "mdk3",
  "desc": "DoS WiFi legacy",
  "commands": [
   {
    "cmd": "sudo mdk3 wlan0mon a -a AP_MAC",
    "desc": "Auth DoS"
   },
   {
    "cmd": "sudo mdk3 wlan0mon b -f list.txt",
    "desc": "Beacon flood"
   },
   {
    "cmd": "sudo mdk3 wlan0mon b -c 6",
    "desc": "Canal"
   },
   {
    "cmd": "sudo mdk3 wlan0mon d -b MAC",
    "desc": "Deauth"
   },
   {
    "cmd": "sudo mdk3 wlan0mon m -t MAC",
    "desc": "Michael"
   },
   {
    "cmd": "sudo mdk3 wlan0mon p -t MAC",
    "desc": "Probe"
   },
   {
    "cmd": "sudo mdk3 wlan0mon w -n ESSID -c 6",
    "desc": "WPS"
   },
   {
    "cmd": "sudo mdk3 wlan0mon x -c 6",
    "desc": "WIDS"
   },
   {
    "cmd": "sudo mdk3 wlan0mon -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "macchanger",
  "desc": "Cambiar dirección MAC",
  "commands": [
   {
    "cmd": "sudo macchanger -r wlan0",
    "desc": "MAC aleatoria"
   },
   {
    "cmd": "sudo macchanger -a wlan0",
    "desc": "MAC de fabricante"
   },
   {
    "cmd": "sudo macchanger -m AA:BB:CC:DD:EE:FF wlan0",
    "desc": "MAC específica"
   },
   {
    "cmd": "sudo macchanger -p wlan0",
    "desc": "Restaurar física"
   },
   {
    "cmd": "sudo macchanger -s wlan0",
    "desc": "Mostrar MAC"
   },
   {
    "cmd": "sudo macchanger -l",
    "desc": "Listar fabricantes"
   },
   {
    "cmd": "sudo macchanger -e wlan0",
    "desc": "Endianness"
   },
   {
    "cmd": "sudo macchanger -A wlan0",
    "desc": "MAC aleatoria y vendor"
   },
   {
    "cmd": "sudo macchanger -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "wireshark",
  "desc": "Analizador de protocolos de red",
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
    "cmd": "wireshark -r cap.pcap",
    "desc": "Abrir captura"
   },
   {
    "cmd": "wireshark -Y 'http.request' -r cap.pcap",
    "desc": "Filtro display"
   },
   {
    "cmd": "wireshark -f 'tcp port 80' -i eth0",
    "desc": "Filtro captura"
   },
   {
    "cmd": "wireshark -w out.pcap -i eth0",
    "desc": "Guardar captura"
   },
   {
    "cmd": "wireshark -k -i eth0",
    "desc": "Empezar inmediatamente"
   },
   {
    "cmd": "wireshark -a duration:60 -i eth0",
    "desc": "Capturar 60s"
   },
   {
    "cmd": "wireshark -a filesize:10000 -i eth0",
    "desc": "Hasta 10MB"
   },
   {
    "cmd": "wireshark -b filesize:1000 -i eth0",
    "desc": "Rotar archivos"
   },
   {
    "cmd": "wireshark -t ad -r cap.pcap",
    "desc": "Timestamps"
   },
   {
    "cmd": "wireshark -S -r cap.pcap",
    "desc": "Stream"
   },
   {
    "cmd": "wireshark -z io,stat,10 -r cap.pcap",
    "desc": "Estadísticas"
   },
   {
    "cmd": "wireshark -T fields -e ip.src -r cap.pcap",
    "desc": "Campos"
   },
   {
    "cmd": "wireshark -X lua_script:script.lua",
    "desc": "Lua script"
   },
   {
    "cmd": "wireshark --display-name 'X'",
    "desc": "Nombre de ventana"
   }
  ]
 },
 {
  "tool": "tshark",
  "desc": "Versión CLI de Wireshark",
  "commands": [
   {
    "cmd": "tshark -i eth0",
    "desc": "Capturar"
   },
   {
    "cmd": "tshark -r cap.pcap",
    "desc": "Leer captura"
   },
   {
    "cmd": "tshark -r cap.pcap -Y 'tcp.port==80'",
    "desc": "Filtro"
   },
   {
    "cmd": "tshark -r cap.pcap -c 100",
    "desc": "Solo 100 paquetes"
   },
   {
    "cmd": "tshark -r cap.pcap -T fields -e ip.src -e ip.dst",
    "desc": "Campos"
   },
   {
    "cmd": "tshark -r cap.pcap -T json",
    "desc": "JSON"
   },
   {
    "cmd": "tshark -r cap.pcap -T md",
    "desc": "Markdown"
   },
   {
    "cmd": "tshark -r cap.pcap -q -z conv,tcp",
    "desc": "Conversaciones"
   },
   {
    "cmd": "tshark -r cap.pcap -q -z io,stat,5",
    "desc": "Estadísticas"
   },
   {
    "cmd": "tshark -r cap.pcap -q -z http,tree",
    "desc": "HTTP tree"
   },
   {
    "cmd": "tshark -i eth0 -w out.pcap",
    "desc": "Guardar"
   },
   {
    "cmd": "tshark -i eth0 -a duration:30",
    "desc": "30 segundos"
   },
   {
    "cmd": "tshark -i eth0 -f 'port 53'",
    "desc": "Filtro de captura"
   },
   {
    "cmd": "tshark -r cap.pcap -Y 'http' -T fields -e http.request.uri",
    "desc": "URLs"
   },
   {
    "cmd": "tshark -r cap.pcap -Y 'dns' -T fields -e dns.qry.name",
    "desc": "Consultas DNS"
   },
   {
    "cmd": "tshark -r cap.pcap -x",
    "desc": "Hex dump"
   },
   {
    "cmd": "tshark -r cap.pcap -V",
    "desc": "Verbose"
   },
   {
    "cmd": "tshark -r cap.pcap -z follow,tcp,ascii,0",
    "desc": "Seguir stream"
   },
   {
    "cmd": "tshark -G protocols",
    "desc": "Listar protocolos"
   },
   {
    "cmd": "tshark -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "bluetoothctl",
  "desc": "Control Bluetooth (Linux)",
  "commands": [
   {
    "cmd": "bluetoothctl",
    "desc": "Consola interactiva"
   },
   {
    "cmd": "bluetoothctl list",
    "desc": "Listar adaptadores"
   },
   {
    "cmd": "bluetoothctl scan on",
    "desc": "Escanear"
   },
   {
    "cmd": "bluetoothctl scan off",
    "desc": "Parar escaneo"
   },
   {
    "cmd": "bluetoothctl devices",
    "desc": "Dispositivos"
   },
   {
    "cmd": "bluetoothctl paired-devices",
    "desc": "Pareados"
   },
   {
    "cmd": "bluetoothctl info MAC",
    "desc": "Info del dispositivo"
   },
   {
    "cmd": "bluetoothctl pair MAC",
    "desc": "Parear"
   },
   {
    "cmd": "bluetoothctl connect MAC",
    "desc": "Conectar"
   },
   {
    "cmd": "bluetoothctl disconnect MAC",
    "desc": "Desconectar"
   },
   {
    "cmd": "bluetoothctl trust MAC",
    "desc": "Confiar"
   },
   {
    "cmd": "bluetoothctl untrust MAC",
    "desc": "No confiar"
   },
   {
    "cmd": "bluetoothctl block MAC",
    "desc": "Bloquear"
   },
   {
    "cmd": "bluetoothctl unblock MAC",
    "desc": "Desbloquear"
   },
   {
    "cmd": "bluetoothctl remove MAC",
    "desc": "Quitar"
   },
   {
    "cmd": "bluetoothctl agent on",
    "desc": "Agente"
   },
   {
    "cmd": "bluetoothctl power on",
    "desc": "Encender"
   },
   {
    "cmd": "bluetoothctl power off",
    "desc": "Apagar"
   },
   {
    "cmd": "bluetoothctl discoverable on",
    "desc": "Descubrible"
   },
   {
    "cmd": "bluetoothctl pairable on",
    "desc": "Pareable"
   }
  ]
 },
 {
  "tool": "hcitool",
  "desc": "Utilidades Bluetooth (legacy)",
  "commands": [
   {
    "cmd": "hcitool scan",
    "desc": "Escanear dispositivos"
   },
   {
    "cmd": "hcitool inq",
    "desc": "Inquiry"
   },
   {
    "cmd": "hcitool info MAC",
    "desc": "Info"
   },
   {
    "cmd": "hcitool name MAC",
    "desc": "Nombre"
   },
   {
    "cmd": "hcitool con",
    "desc": "Conexiones"
   },
   {
    "cmd": "hcitool cc MAC",
    "desc": "Crear conexión"
   },
   {
    "cmd": "hcitool dc MAC",
    "desc": "Desconectar"
   },
   {
    "cmd": "hcitool rssi MAC",
    "desc": "RSSI"
   },
   {
    "cmd": "hcitool lq MAC",
    "desc": "Link quality"
   },
   {
    "cmd": "hcitool tpl MAC",
    "desc": "TX power"
   },
   {
    "cmd": "hcitool lescan",
    "desc": "BLE scan"
   },
   {
    "cmd": "hcitool lescan --passive",
    "desc": "BLE pasivo"
   },
   {
    "cmd": "hcitool leinfo MAC",
    "desc": "BLE info"
   },
   {
    "cmd": "hcitool lecc MAC",
    "desc": "BLE connect"
   },
   {
    "cmd": "hcitool ledc MAC",
    "desc": "BLE disconnect"
   },
   {
    "cmd": "hcitool cmd 0x03 0x05",
    "desc": "Comando HCI"
   },
   {
    "cmd": "hcitool -i hci0 scan",
    "desc": "Interfaz"
   }
  ]
 },
 {
  "tool": "bluez-tools",
  "desc": "Herramientas Bluetooth para pentest",
  "commands": [
   {
    "cmd": "bt-obex -l",
    "desc": "Listar dispositivos OBEX"
   },
   {
    "cmd": "bt-audio -l",
    "desc": "Listar audio"
   },
   {
    "cmd": "bt-find",
    "desc": "Buscar dispositivos"
   },
   {
    "cmd": "bt-phone -l",
    "desc": "Listar teléfonos"
   },
   {
    "cmd": "bt-phone --pair MAC",
    "desc": "Parear"
   },
   {
    "cmd": "bt-obex -c MAC -p file",
    "desc": "Enviar archivo"
   },
   {
    "cmd": "bt-audio --connect MAC",
    "desc": "Conectar audio"
   },
   {
    "cmd": "bt-audio --disconnect MAC",
    "desc": "Desconectar"
   },
   {
    "cmd": "bt-reset",
    "desc": "Reset Bluetooth"
   },
   {
    "cmd": "bt-config -l",
    "desc": "Config"
   }
  ]
 },
 {
  "tool": "wireshark-ble",
  "desc": "Captura BLE con Wireshark (LE Advertising)",
  "commands": [
   {
    "cmd": "sudo btmon",
    "desc": "Monitor HCI Bluetooth"
   },
   {
    "cmd": "sudo btmon -r log.bin",
    "desc": "Leer log"
   },
   {
    "cmd": "sudo btmon -w out.pcap",
    "desc": "Guardar pcap"
   },
   {
    "cmd": "sudo btmon -d hci0",
    "desc": "Dispositivo"
   },
   {
    "cmd": "sudo btmon -t",
    "desc": "Timestamps"
   }
  ]
 },
 {
  "tool": "rtl-sdr",
  "desc": "SDR para recibir señales (RTL-SDR)",
  "commands": [
   {
    "cmd": "rtl_test",
    "desc": "Testear dongle"
   },
   {
    "cmd": "rtl_test -t",
    "desc": "Tuner"
   },
   {
    "cmd": "rtl_test -s 2.4M",
    "desc": "Sample rate"
   },
   {
    "cmd": "rtl_sdr -f 433M -s 1M -g 40 -o out.bin",
    "desc": "Capturar 433MHz"
   },
   {
    "cmd": "rtl_sdr -f 100.5M -s 2.048M out.wav",
    "desc": "FM"
   },
   {
    "cmd": "rtl_sdr -f 868M -s 1M -g 0 -n 10000 out.raw",
    "desc": "868MHz"
   },
   {
    "cmd": "rtl_sdr -f 900M -g 20 out.bin",
    "desc": "900MHz"
   },
   {
    "cmd": "rtl_fm -f 100.5M -M fm -s 200k -A std -l 0 -g 50 out.wav",
    "desc": "FM demod"
   },
   {
    "cmd": "rtl_fm -f 433.92M -s 250k -M fm -g 40 -l 60 | sox -t raw -r 250k -e signed -b 16 -c 1 - -t wav out.wav",
    "desc": "SDR a wav"
   },
   {
    "cmd": "rtl_power -f 88M:108M:100k out.csv",
    "desc": "Escanear banda"
   },
   {
    "cmd": "rtl_power -f 400M:500M:1M -e 10 -g 40 out.csv",
    "desc": "Barrido"
   },
   {
    "cmd": "rtl_tcp -a 0.0.0.0 -p 1234",
    "desc": "Servidor TCP"
   },
   {
    "cmd": "rtl_biast -b 1",
    "desc": "Bias tee"
   },
   {
    "cmd": "rtl_biast -b 0",
    "desc": "Bias off"
   },
   {
    "cmd": "rtl_sdr -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "gnuradio",
  "desc": "Framework de radio definida por software",
  "commands": [
   {
    "cmd": "gnuradio-companion",
    "desc": "Abrir GRC"
   },
   {
    "cmd": "gnuradio-companion --directory /tmp/flow",
    "desc": "Directorio"
   },
   {
    "cmd": "gnuradio-companion -y flow.grc",
    "desc": "Ejecutar flowgraph"
   },
   {
    "cmd": "gnuradio-companion -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "gqrx",
  "desc": "Receptor SDR GUI",
  "commands": [
   {
    "cmd": "gqrx",
    "desc": "Abrir GUI"
   },
   {
    "cmd": "gqrx -r config.conf",
    "desc": "Con config"
   },
   {
    "cmd": "gqrx -f 433.92M",
    "desc": "Frecuencia"
   },
   {
    "cmd": "gqrx -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "nfc-list",
  "desc": "Listar dispositivos NFC",
  "commands": [
   {
    "cmd": "nfc-list",
    "desc": "Listar dispositivos"
   },
   {
    "cmd": "nfc-list -t",
    "desc": "Con target"
   },
   {
    "cmd": "nfc-list -v",
    "desc": "Verbose"
   },
   {
    "cmd": "nfc-poll",
    "desc": "Poll para target"
   },
   {
    "cmd": "nfc-poll -t 1",
    "desc": "Timeout"
   }
  ]
 },
 {
  "tool": "mfcuk",
  "desc": "Ataques a tarjetas MIFARE Classic",
  "commands": [
   {
    "cmd": "mfcuk -r A",
    "desc": "Ataque de recuperación"
   },
   {
    "cmd": "mfcuk -r B -d",
    "desc": "Sector B"
   },
   {
    "cmd": "mfcuk -r A -v",
    "desc": "Verbose"
   },
   {
    "cmd": "mfcuk -r A -o out.log",
    "desc": "Log"
   },
   {
    "cmd": "mfcuk -r A -s 0",
    "desc": "Sector 0"
   },
   {
    "cmd": "mfcuk -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "mfoc",
  "desc": "Recuperar claves MIFARE Classic",
  "commands": [
   {
    "cmd": "mfoc",
    "desc": "Ataque completo"
   },
   {
    "cmd": "mfoc -O dump.mfd",
    "desc": "Guardar dump"
   },
   {
    "cmd": "mfoc -P 000000000000",
    "desc": "Clave conocida"
   },
   {
    "cmd": "mfoc -k ffffffffffff",
    "desc": "Otra clave"
   },
   {
    "cmd": "mfoc -t 10",
    "desc": "Timeout"
   },
   {
    "cmd": "mfoc -T 5",
    "desc": "Sector timeout"
   },
   {
    "cmd": "mfoc -v",
    "desc": "Verbose"
   },
   {
    "cmd": "mfoc -D dump.mfd",
    "desc": "Dump input"
   },
   {
    "cmd": "mfoc -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "libnfc",
  "desc": "Utilidades NFC (nfc-mfclassic etc)",
  "commands": [
   {
    "cmd": "nfc-mfclassic r a out.mfd",
    "desc": "Leer tarjeta"
   },
   {
    "cmd": "nfc-mfclassic w a in.mfd",
    "desc": "Escribir tarjeta"
   },
   {
    "cmd": "nfc-mfclassic r a out.mfd -k key1 -k key2",
    "desc": "Con claves"
   },
   {
    "cmd": "nfc-mfclassic r b out.mfd",
    "desc": "Key B"
   },
   {
    "cmd": "nfc-mfclassic w b in.mfd",
    "desc": "Escribir con B"
   },
   {
    "cmd": "nfc-mfclassic r u out.mfd",
    "desc": "Uid"
   },
   {
    "cmd": "nfc-mfclassic --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "proxmark3",
  "desc": "Suite para hardware Proxmark (RFID)",
  "commands": [
   {
    "cmd": "proxmark3 /dev/ttyACM0",
    "desc": "Abrir consola"
   },
   {
    "cmd": "proxmark3 /dev/ttyACM0 -c 'hf search'",
    "desc": "Buscar tarjetas HF"
   },
   {
    "cmd": "proxmark3 /dev/ttyACM0 -c 'lf search'",
    "desc": "Buscar LF"
   },
   {
    "cmd": "proxmark3 /dev/ttyACM0 -c 'hf mf chk --dump'",
    "desc": "Chequear MIFARE"
   },
   {
    "cmd": "proxmark3 /dev/ttyACM0 -c 'hf mf rdbl --blk 0'",
    "desc": "Leer bloque"
   },
   {
    "cmd": "proxmark3 /dev/ttyACM0 -c 'hf mf wrbl --blk 0 -d 00000000'",
    "desc": "Escribir"
   },
   {
    "cmd": "proxmark3 /dev/ttyACM0 -c 'hf mf sim'",
    "desc": "Simular"
   },
   {
    "cmd": "proxmark3 /dev/ttyACM0 -c 'lf em 410x reader'",
    "desc": "EM410x"
   },
   {
    "cmd": "proxmark3 /dev/ttyACM0 -c 'lf hid fskdemod'",
    "desc": "HID"
   },
   {
    "cmd": "proxmark3 /dev/ttyACM0 -c 'hf 14a read'",
    "desc": "Leer ISO14443A"
   },
   {
    "cmd": "proxmark3 /dev/ttyACM0 -c 'hf mf dump -f dump.bin'",
    "desc": "Dump completo"
   },
   {
    "cmd": "proxmark3 /dev/ttyACM0 -c 'hf mf restore -f dump.bin'",
    "desc": "Restaurar"
   },
   {
    "cmd": "proxmark3 /dev/ttyACM0 -c 'hf iclass read'",
    "desc": "iClass"
   },
   {
    "cmd": "proxmark3 /dev/ttyACM0 -c 'hw tune'",
    "desc": "Tune antena"
   },
   {
    "cmd": "proxmark3 /dev/ttyACM0 -c 'hw version'",
    "desc": "Versión"
   },
   {
    "cmd": "proxmark3 /dev/ttyACM0 -c 'data dump -f out.bin'",
    "desc": "Dump trace"
   }
  ]
 },
 {
  "tool": "gpsd",
  "desc": "Daemon GPS",
  "commands": [
   {
    "cmd": "gpsd /dev/ttyUSB0",
    "desc": "Iniciar daemon"
   },
   {
    "cmd": "gpsd -b /dev/ttyUSB0",
    "desc": "Readonly"
   },
   {
    "cmd": "gpsd -n /dev/ttyUSB0",
    "desc": "No wait"
   },
   {
    "cmd": "gpsd -F /tmp/sock /dev/ttyUSB0",
    "desc": "Socket"
   },
   {
    "cmd": "gpsmon /dev/ttyUSB0",
    "desc": "Monitor"
   },
   {
    "cmd": "gpspipe -w /dev/ttyUSB0",
    "desc": "Datos raw"
   },
   {
    "cmd": "gpspipe -r /dev/ttyUSB0",
    "desc": "NMEA"
   },
   {
    "cmd": "gpspipe -x /dev/ttyUSB0",
    "desc": "XML"
   },
   {
    "cmd": "xgps",
    "desc": "GUI"
   }
  ]
 },
 {
  "tool": "hackrf",
  "desc": "Herramientas HackRF SDR (transmitir/recibir)",
  "commands": [
   {
    "cmd": "hackrf_transfer -r out.bin -f 433M -s 2M",
    "desc": "Grabar"
   },
   {
    "cmd": "hackrf_transfer -t file.bin -f 433M -s 2M",
    "desc": "Transmitir"
   },
   {
    "cmd": "hackrf_transfer -r out.bin -f 900M -s 10M -g 40 -l 0",
    "desc": "Con gain"
   },
   {
    "cmd": "hackrf_transfer -r out.bin -f 2400M -s 20M",
    "desc": "2.4GHz"
   },
   {
    "cmd": "hackrf_transfer -t file.bin -f 433.92M -s 1M -a 1",
    "desc": "Con amp"
   },
   {
    "cmd": "hackrf_transfer -r out.bin -f 100M -s 2.4M -b 2000000",
    "desc": "Bandwidth"
   },
   {
    "cmd": "hackrf_transfer -r out.bin -f 433M -s 2M -n 1000000",
    "desc": "N muestras"
   },
   {
    "cmd": "hackrf_info",
    "desc": "Info del dispositivo"
   },
   {
    "cmd": "hackrf_sweep -f 100M:200M -w 1M",
    "desc": "Sweep"
   },
   {
    "cmd": "hackrf_sweep -f 88M:108M -1",
    "desc": "Sweep 1 pasada"
   },
   {
    "cmd": "hackrf_sweep -f 400M:500M -w 1M -l 40",
    "desc": "Con gain"
   },
   {
    "cmd": "hackrf_clock -t 1",
    "desc": "Test de clock"
   },
   {
    "cmd": "hackrf_debug -h",
    "desc": "Debug"
   },
   {
    "cmd": "hackrf_spiflash -r flash.bin",
    "desc": "Leer flash"
   },
   {
    "cmd": "hackrf_operacake -h",
    "desc": "Operacake"
   }
  ]
 },
 {
  "tool": "spooftooph",
  "desc": "Spoofing de dispositivos Bluetooth",
  "commands": [
   {
    "cmd": "spooftooph",
    "desc": "GUI"
   },
   {
    "cmd": "spooftooph -i hci0",
    "desc": "Interfaz"
   },
   {
    "cmd": "spooftooph -s -a 'NuevoNombre' MAC",
    "desc": "Spoof nombre"
   },
   {
    "cmd": "spooftooph -d MAC",
    "desc": "Despoof"
   },
   {
    "cmd": "spooftooph -c -n 'Nombre' -a MAC",
    "desc": "Clonar"
   },
   {
    "cmd": "spooftooph -f file.csv",
    "desc": "De archivo"
   },
   {
    "cmd": "spooftooph -e",
    "desc": "Enumerar"
   },
   {
    "cmd": "spooftooph -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "ubertooth",
  "desc": "Tools para hardware Ubertooth (Bluetooth/BLE)",
  "commands": [
   {
    "cmd": "ubertooth-btle -f -c 2",
    "desc": "Capturar BLE canal 2"
   },
   {
    "cmd": "ubertooth-btle -f -c 37-39",
    "desc": "Rango de canales"
   },
   {
    "cmd": "ubertooth-btle -f -t",
    "desc": "Con timestamps"
   },
   {
    "cmd": "ubertooth-btle -f -u -r 40",
    "desc": "Rate"
   },
   {
    "cmd": "ubertooth-btle -f -w out.pcap",
    "desc": "Guardar pcap"
   },
   {
    "cmd": "ubertooth-btle -f -s -r",
    "desc": "Scan+rate"
   },
   {
    "cmd": "ubertooth-btle -a",
    "desc": "Anuncios"
   },
   {
    "cmd": "ubertooth-btle -a -l",
    "desc": "Anuncios con length"
   },
   {
    "cmd": "ubertooth-btle -h",
    "desc": "Ayuda"
   },
   {
    "cmd": "ubertooth-rx -f 2402M",
    "desc": "RX en 2.402GHz"
   },
   {
    "cmd": "ubertooth-rx -f 2440M -s 2M",
    "desc": "Sample rate"
   },
   {
    "cmd": "ubertooth-tx -f 2440M -i file.bin",
    "desc": "TX"
   },
   {
    "cmd": "ubertooth-specan -s 2402M -e 2480M",
    "desc": "Spectrum"
   },
   {
    "cmd": "ubertooth-util -v",
    "desc": "Versión"
   },
   {
    "cmd": "ubertooth-util -F",
    "desc": "Firmware"
   }
  ]
 },
 {
  "tool": "zilliga",
  "desc": "Herramientas ZigBee de KillerBee",
  "commands": [
   {
    "cmd": "zbstumbler -i /dev/ttyUSB0",
    "desc": "Stumbler"
   },
   {
    "cmd": "zbstumbler -i /dev/ttyUSB0 -c 11",
    "desc": "Canal"
   },
   {
    "cmd": "zbstumbler -i /dev/ttyUSB0 -v",
    "desc": "Verbose"
   },
   {
    "cmd": "zbreceiver -i /dev/ttyUSB0 -c 11 -p out.pcap",
    "desc": "Capturar"
   },
   {
    "cmd": "zbreceiver -i /dev/ttyUSB0 -c 11 -x",
    "desc": "En modo beacon"
   },
   {
    "cmd": "zbsniff -i /dev/ttyUSB0 -c 11",
    "desc": "Sniff"
   },
   {
    "cmd": "zbassocflood -i /dev/ttyUSB0 -c 11",
    "desc": "Assoc flood"
   },
   {
    "cmd": "zbpanidconflict -i /dev/ttyUSB0 -c 11",
    "desc": "PANID conflict"
   },
   {
    "cmd": "zbfind -i /dev/ttyUSB0 -c 11",
    "desc": "Find"
   },
   {
    "cmd": "zbtest -i /dev/ttyUSB0",
    "desc": "Test"
   },
   {
    "cmd": "zbdump -i /dev/ttyUSB0 -c 11 -o out.dump",
    "desc": "Dump"
   },
   {
    "cmd": "zbreplay -i /dev/ttyUSB0 -c 11 -p cap.pcap",
    "desc": "Replay"
   }
  ]
 },
 {
  "tool": "rfcat",
  "desc": "RF Cat - SDR 900MHz con python",
  "commands": [
   {
    "cmd": "rfcat -r",
    "desc": "Receptor interactivo"
   },
   {
    "cmd": "rfcat -r -p 'd.setMdmModulation(MOD_ASK_OOK); d.setFrequency(433900000); d.RFlisten()'",
    "desc": "Escuchar ASK/OOK"
   },
   {
    "cmd": "rfcat -r -p 'd.setMdmModulation(MOD_2FSK); d.setFrequency(433900000); d.setMdmDeviatn(25000); d.RFlisten()'",
    "desc": "FSK"
   },
   {
    "cmd": "rfcat -r -p 'd.setFrequency(433920000); d.makePktFLEN(8); d.setMdmDRate(10000)'",
    "desc": "Config rate"
   },
   {
    "cmd": "rfcat -t -p 'd.setFrequency(433920000); d.RFxmit(\"\\x00\\x01\")'",
    "desc": "Transmitir"
   },
   {
    "cmd": "rfcat -t -p 'd.setFrequency(433920000); for i in range(10): d.RFxmit(\"\\x41\")'",
    "desc": "Bucle TX"
   },
   {
    "cmd": "rfcat -r -p 'd.setFrequency(315000000); d.RFlisten()'",
    "desc": "315MHz"
   },
   {
    "cmd": "rfcat -r -p 'd.setMdmSyncMode(SYNC_4B); d.RFlisten()'",
    "desc": "Sync 4B"
   },
   {
    "cmd": "rfcat -l -p 'print(d.info())'",
    "desc": "Info"
   },
   {
    "cmd": "rfcat -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "gqrx-extras",
  "desc": "Configs y extras de GQRX (SDR GUI)",
  "commands": [
   {
    "cmd": "gqrx -f 88.5M",
    "desc": "FM radio"
   },
   {
    "cmd": "gqrx -f 433.92M",
    "desc": "433MHz"
   },
   {
    "cmd": "gqrx -f 915M",
    "desc": "915MHz"
   },
   {
    "cmd": "gqrx -r config.conf",
    "desc": "Con config"
   },
   {
    "cmd": "gqrx -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "airgeddon",
  "desc": "Multitool WiFi con evasión (DoS, WPA handshake)",
  "commands": [
   {
    "cmd": "airgeddon.sh",
    "desc": "Iniciar"
   },
   {
    "cmd": "airgeddon.sh -i wlan0",
    "desc": "Interfaz monitor"
   },
   {
    "cmd": "airgeddon.sh -i wlan0 -c 6",
    "desc": "Canal"
   },
   {
    "cmd": "airgeddon.sh -i wlan0 -m",
    "desc": "Método handshake"
   },
   {
    "cmd": "airgeddon.sh -i wlan0 -k",
    "desc": "Kill network"
   },
   {
    "cmd": "airgeddon.sh -i wlan0 -v",
    "desc": "Verbose"
   },
   {
    "cmd": "airgeddon.sh -i wlan0 -a",
    "desc": "Ataques"
   },
   {
    "cmd": "airgeddon.sh -i wlan0 -d",
    "desc": "Debug"
   },
   {
    "cmd": "airgeddon.sh -i wlan0 -u",
    "desc": "Update"
   },
   {
    "cmd": "airgeddon.sh -i wlan0 -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "horst",
  "desc": "Monitor de tráfico WiFi (link layer)",
  "commands": [
   {
    "cmd": "horst -i wlan0mon",
    "desc": "Monitor"
   },
   {
    "cmd": "horst -i wlan0mon -c 6",
    "desc": "Canal"
   },
   {
    "cmd": "horst -i wlan0mon -f",
    "desc": "Filtro"
   },
   {
    "cmd": "horst -i wlan0mon -o out.txt",
    "desc": "Salida"
   },
   {
    "cmd": "horst -i wlan0mon -s",
    "desc": "Stats"
   },
   {
    "cmd": "horst -i wlan0mon -d",
    "desc": "Debug"
   },
   {
    "cmd": "horst -i wlan0mon -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "gpsbabel",
  "desc": "Convertir datos GPS (forense de rutas)",
  "commands": [
   {
    "cmd": "gpsbabel -i gpx -f in.gpx -o kml -F out.kml",
    "desc": "GPX a KML"
   },
   {
    "cmd": "gpsbabel -i kml -f in.kml -o gpx -F out.gpx",
    "desc": "KML a GPX"
   },
   {
    "cmd": "gpsbabel -i garmin -f /dev/ttyUSB0 -o gpx -F out.gpx",
    "desc": "De dispositivo"
   },
   {
    "cmd": "gpsbabel -i gpx -f in.gpx -o csv -F out.csv",
    "desc": "GPX a CSV"
   },
   {
    "cmd": "gpsbabel -i gpx -f in.gpx -o json -F out.json",
    "desc": "GPX a JSON"
   },
   {
    "cmd": "gpsbabel -t -i gpx -f in.gpx -o gpx -F track.gpx",
    "desc": "Track"
   },
   {
    "cmd": "gpsbabel -r -i gpx -f in.gpx -o gpx -F route.gpx",
    "desc": "Ruta"
   },
   {
    "cmd": "gpsbabel -i gpx -f in.gpx -o kml -F out.kml -x simplify,count=100",
    "desc": "Simplificar"
   },
   {
    "cmd": "gpsbabel -i gpx -f in.gpx -o gpx -F out.gpx -x discard,hdop=10",
    "desc": "Filtrar HDOP"
   },
   {
    "cmd": "gpsbabel --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "iw-iwlist",
  "desc": "Configuración y escaneo WiFi (iw, iwlist)",
  "commands": [
   {
    "cmd": "iw dev",
    "desc": "Interfaces"
   },
   {
    "cmd": "iw dev wlan0 info",
    "desc": "Info"
   },
   {
    "cmd": "iw dev wlan0 scan",
    "desc": "Escanear"
   },
   {
    "cmd": "iw dev wlan0 scan | grep -E 'SSID|signal'",
    "desc": "Filtrar"
   },
   {
    "cmd": "iw dev wlan0 set channel 6",
    "desc": "Canal"
   },
   {
    "cmd": "iw dev wlan0 set type monitor",
    "desc": "Monitor"
   },
   {
    "cmd": "iw dev wlan0 set type managed",
    "desc": "Managed"
   },
   {
    "cmd": "iw phy phy0 info | head",
    "desc": "Phy info"
   },
   {
    "cmd": "iw list | grep -A5 'Supported interface modes'",
    "desc": "Modes"
   },
   {
    "cmd": "iwlist wlan0 scan",
    "desc": "Iwlist scan"
   },
   {
    "cmd": "iwlist wlan0 scan | grep -E 'ESSID|Encryption|Channel'",
    "desc": "Filtrar"
   },
   {
    "cmd": "iwlist wlan0 freq",
    "desc": "Frecuencias"
   },
   {
    "cmd": "iwlist wlan0 rate",
    "desc": "Rates"
   },
   {
    "cmd": "iwconfig wlan0",
    "desc": "Config"
   },
   {
    "cmd": "iwconfig wlan0 channel 6",
    "desc": "Canal"
   },
   {
    "cmd": "iwconfig wlan0 essid 'FreeWiFi'",
    "desc": "ESSID"
   },
   {
    "cmd": "ip link set wlan0 down && iwconfig wlan0 mode monitor && ip link set wlan0 up",
    "desc": "Monitor oneliner"
   }
  ]
 },
 {
  "tool": "gnuradio-rf",
  "desc": "Análisis RF (GNU Radio, rtl-sdr)",
  "commands": [
   {
    "cmd": "rtl_test -t",
    "desc": "Test dongle"
   },
   {
    "cmd": "rtl_test -f 433M",
    "desc": "Frecuencia"
   },
   {
    "cmd": "rtl_sdr -f 433.92M -s 1M -g 40 -n 1000000 /tmp/cap.iq",
    "desc": "Capturar"
   },
   {
    "cmd": "rtl_sdr -f 868M -s 2M out.iq",
    "desc": "868MHz"
   },
   {
    "cmd": "rtl_sdr -f 315M out.iq",
    "desc": "315MHz"
   },
   {
    "cmd": "rtl_sdr -f 27M out.iq",
    "desc": "27MHz"
   },
   {
    "cmd": "rtl_power -f 300M:500M:1M -e 60s /tmp/out.csv",
    "desc": "Power scan"
   },
   {
    "cmd": "rtl_power -f 24M:1.7G:1M -e 120s -g 50 /tmp/spec.csv",
    "desc": "Amplio"
   },
   {
    "cmd": "gnuradio-companion",
    "desc": "GRC GUI"
   },
   {
    "cmd": "sox -t raw -r 1M -c 2 -e unsigned-integer -b 8 /tmp/cap.iq /tmp/out.wav",
    "desc": "IQ a wav"
   },
   {
    "cmd": "python3 -c 'import numpy as np; d=np.fromfile(\"/tmp/cap.iq\",dtype=np.uint8); print(len(d))'",
    "desc": "Ver IQ"
   },
   {
    "cmd": "inspectrum /tmp/cap.iq",
    "desc": "Espectro GUI"
   },
   {
    "cmd": "gqrx",
    "desc": "GQRX GUI"
   },
   {
    "cmd": "osmocom_fft",
    "desc": "FFT"
   },
   {
    "cmd": "rtl_433 -f 433.92M -F json",
    "desc": "Decodificar"
   },
   {
    "cmd": "rpitx -m RFA -f 100M -i audio.wav",
    "desc": "Transmitir"
   }
  ]
 },
 {
  "tool": "wireshark-rf",
  "desc": "Captura 802.11 y análisis inalámbrico",
  "commands": [
   {
    "cmd": "airodump-ng wlan0mon -w /tmp/cap",
    "desc": "Capturar"
   },
   {
    "cmd": "tcpdump -i wlan0mon -w /tmp/wifi.pcap",
    "desc": "Tcpdump 802.11"
   },
   {
    "cmd": "tshark -r wifi.pcap -Y 'wlan.fc.type==0'",
    "desc": "Management"
   },
   {
    "cmd": "tshark -r wifi.pcap -Y 'wlan.fc.type_subtype==4'",
    "desc": "Probe request"
   },
   {
    "cmd": "tshark -r wifi.pcap -Y 'wlan.fc.type_subtype==8'",
    "desc": "Beacons"
   },
   {
    "cmd": "tshark -r wifi.pcap -Y 'wlan.fc.type_subtype==12'",
    "desc": "Deauth"
   },
   {
    "cmd": "tshark -r wifi.pcap -Y 'wlan.fc.type==2' -T fields -e wlan.ta -e wlan.da",
    "desc": "Data frames"
   },
   {
    "cmd": "tshark -r wifi.pcap -Y 'eapol'",
    "desc": "Handshakes"
   },
   {
    "cmd": "tshark -r wifi.pcap -z io,phs",
    "desc": "Hierarchy"
   },
   {
    "cmd": "tshark -r wifi.pcap -Y 'wlan.fc.type_subtype==4' -T fields -e wlan.ssid",
    "desc": "Probes SSID"
   },
   {
    "cmd": "airdecap-ng -p pass -e SSID -b MAC cap.cap -o out.cap",
    "desc": "Descifrar"
   },
   {
    "cmd": "airmon-ng check kill",
    "desc": "Matar procesos"
   },
   {
    "cmd": "wash -i wlan0mon",
    "desc": "WPS scan"
   },
   {
    "cmd": "airodump-ng wlan0mon -w cap --wps",
    "desc": "Con WPS"
   },
   {
    "cmd": "wireshark /tmp/wifi.pcap",
    "desc": "GUI"
   }
  ]
 },
 {
  "tool": "rfid-nfc",
  "desc": "RFID/NFC (libnfc, proxmark)",
  "commands": [
   {
    "cmd": "nfc-list",
    "desc": "Dispositivos"
   },
   {
    "cmd": "nfc-poll",
    "desc": "Esperar tag"
   },
   {
    "cmd": "nfc-mfclassic r a /tmp/dump.mfd",
    "desc": "Leer MIFARE"
   },
   {
    "cmd": "nfc-mfclassic w a /tmp/dump.mfd",
    "desc": "Escribir"
   },
   {
    "cmd": "nfc-mfclassic -f a /tmp/key.dump",
    "desc": "Key file"
   },
   {
    "cmd": "nfc-mfkey32 keys.txt",
    "desc": "Mfkey32"
   },
   {
    "cmd": "mfoc -O /tmp/dump.mfd",
    "desc": "Mfoc"
   },
   {
    "cmd": "mfcuk -O /tmp/dump.mfd",
    "desc": "Mfcuk"
   },
   {
    "cmd": "pm3 -c 'hf mf dump'",
    "desc": "Proxmark dump"
   },
   {
    "cmd": "pm3 -c 'hf 14a read'",
    "desc": "Proxmark read"
   },
   {
    "cmd": "pm3 -c 'hf mf chk --dump'",
    "desc": "Proxmark chk"
   },
   {
    "cmd": "pm3 -c 'lf hid fskdemod'",
    "desc": "HID demod"
   },
   {
    "cmd": "proxmark3 /dev/ttyACM0",
    "desc": "Interactivo"
   },
   {
    "cmd": "nfc-list -t",
    "desc": "Tipo"
   },
   {
    "cmd": "nfc-read -n 4",
    "desc": "Leer 4 blocks"
   }
  ]
 },
 {
  "tool": "bluetooth-tools",
  "desc": "Ataques y análisis Bluetooth",
  "commands": [
   {
    "cmd": "hcitool scan",
    "desc": "Escanear"
   },
   {
    "cmd": "hcitool scan --class",
    "desc": "Con clase"
   },
   {
    "cmd": "hcitool dev",
    "desc": "Dispositivos"
   },
   {
    "cmd": "hcitool info MAC",
    "desc": "Info"
   },
   {
    "cmd": "hcitool name MAC",
    "desc": "Nombre"
   },
   {
    "cmd": "hcitool cc MAC",
    "desc": "Conectar"
   },
   {
    "cmd": "hcitool dc MAC",
    "desc": "Desconectar"
   },
   {
    "cmd": "hcitool le scan",
    "desc": "BLE scan"
   },
   {
    "cmd": "hcitool lecc MAC",
    "desc": "BLE conectar"
   },
   {
    "cmd": "hciconfig hci0 up",
    "desc": "Up"
   },
   {
    "cmd": "hciconfig hci0 piscan",
    "desc": "Pairable"
   },
   {
    "cmd": "sdptool browse MAC",
    "desc": "Servicios"
   },
   {
    "cmd": "sdptool records MAC",
    "desc": "Records"
   },
   {
    "cmd": "l2ping -c 4 MAC",
    "desc": "L2CAP ping"
   },
   {
    "cmd": "rfcomm connect /dev/rfcomm0 MAC 1",
    "desc": "RFCOMM"
   },
   {
    "cmd": "spooftooph -i hci0 -n 'Name' MAC",
    "desc": "Spoof"
   },
   {
    "cmd": "ubertooth-btle -f",
    "desc": "Ubertooth"
   },
   {
    "cmd": "kismet -c hci0",
    "desc": "Kismet bt"
   },
   {
    "cmd": "bluetoothctl scan on",
    "desc": "BlueZ scan"
   },
   {
    "cmd": "blescan",
    "desc": "Blescan"
   }
  ]
 },
 {
  "tool": "obexftp",
  "desc": "Transferencia de archivos Bluetooth (OBEX)",
  "commands": [
   {
    "cmd": "obexftp -b MAC -l",
    "desc": "Listar"
   },
   {
    "cmd": "obexftp -b MAC -g /file",
    "desc": "Descargar"
   },
   {
    "cmd": "obexftp -b MAC -p local.txt",
    "desc": "Subir"
   },
   {
    "cmd": "obexftp -b MAC -p local.txt /remote.txt",
    "desc": "Subir renombrado"
   },
   {
    "cmd": "obexftp -b MAC -m /dir",
    "desc": "Crear dir"
   },
   {
    "cmd": "obexftp -b MAC -r /file",
    "desc": "Borrar"
   },
   {
    "cmd": "obexftp -b MAC -c /dir",
    "desc": "Cambiar dir"
   },
   {
    "cmd": "obexftp -b MAC -B rfcomm0 -l",
    "desc": "Canal"
   },
   {
    "cmd": "obexftp -b MAC -u OBEX",
    "desc": "UUID"
   },
   {
    "cmd": "obexftp -b MAC -n 0",
    "desc": "Canal 0"
   },
   {
    "cmd": "obexftp -b MAC -v -l",
    "desc": "Verbose"
   },
   {
    "cmd": "obexftp -b MAC -D",
    "desc": "Descripción"
   },
   {
    "cmd": "hcitool scan",
    "desc": "Buscar"
   },
   {
    "cmd": "sdptool browse MAC | grep -A2 OBEX",
    "desc": "Buscar OBEX"
   }
  ]
 },
 {
  "tool": "wpa-crack-methods",
  "desc": "Métodos de cracking WPA (variantes)",
  "commands": [
   {
    "cmd": "aircrack-ng -b MAC cap.cap -w rockyou.txt",
    "desc": "Aircrack"
   },
   {
    "cmd": "aircrack-ng -b MAC -w rockyou.txt cap.cap",
    "desc": "Con BSSID"
   },
   {
    "cmd": "aircrack-ng -w rockyou.txt cap.cap -e SSID",
    "desc": "ESSID"
   },
   {
    "cmd": "aircrack-ng -w rockyou.txt cap.cap -l pass.txt",
    "desc": "Solo resultado"
   },
   {
    "cmd": "aircrack-ng -w rockyou.txt cap.cap -f 4",
    "desc": "Fudge"
   },
   {
    "cmd": "aircrack-ng -w rockyou.txt cap.cap -t 2",
    "desc": "Tolerancia"
   },
   {
    "cmd": "hcxdumptool -i wlan0mon -o cap.pcapng -c 6 --filterlist_ap=MAC --filtermode=2",
    "desc": "Hcxdump"
   },
   {
    "cmd": "hcxpcapngtool cap.pcapng -o hash.hc22000",
    "desc": "Convertir"
   },
   {
    "cmd": "hashcat -m 22000 hash.hc22000 rockyou.txt",
    "desc": "Hashcat wpa"
   },
   {
    "cmd": "hashcat -m 22000 hash.hc22000 rockyou.txt -r rules/best64.rule",
    "desc": "Reglas"
   },
   {
    "cmd": "wifite -a",
    "desc": "Wifite"
   },
   {
    "cmd": "wifite -p",
    "desc": "Pmkid"
   },
   {
    "cmd": "coWPAtty -f rockyou.txt -w cap.cap -s SSID",
    "desc": "Cowpatty"
   },
   {
    "cmd": "pyrit -r cap.cap -b MAC -i rockyou.txt attack_db",
    "desc": "Pyrit"
   },
   {
    "cmd": "pyrit -r cap.cap -b MAC -i rockyou.txt attack_passthrough",
    "desc": "Passthrough"
   },
   {
    "cmd": "genpmk -f rockyou.txt -d pmk.bin -s SSID",
    "desc": "Genpmk"
   }
  ]
 },
 {
  "tool": "bt-sniff",
  "desc": "Sniffing Bluetooth",
  "commands": [
   {
    "cmd": "btmon",
    "desc": "Monitor"
   },
   {
    "cmd": "btmon -r /tmp/trace.log",
    "desc": "De archivo"
   },
   {
    "cmd": "btmon -w /tmp/bt.pcap",
    "desc": "Guardar"
   },
   {
    "cmd": "hcxdumptool -i hci0 -o /tmp/bt.pcap",
    "desc": "Hcx bt"
   },
   {
    "cmd": "kismet -c hci0",
    "desc": "Kismet"
   },
   {
    "cmd": "tcpdump -i bluetooth0",
    "desc": "Tcpdump bt"
   },
   {
    "cmd": "hcidump -i hci0",
    "desc": "Hcidump"
   },
   {
    "cmd": "hcidump -i hci0 -X",
    "desc": "Hex"
   },
   {
    "cmd": "hcidump -i hci0 -R",
    "desc": "Raw"
   },
   {
    "cmd": "bluelog -i hci0 -c",
    "desc": "Bluelog"
   },
   {
    "cmd": "btscanner -i hci0",
    "desc": "BtScanner"
   },
   {
    "cmd": "spooftooph -i hci0 -f bt.csv",
    "desc": "Spoof file"
   },
   {
    "cmd": "ubertooth-btle -f -l /tmp/log",
    "desc": "Ubertooth"
   },
   {
    "cmd": "wireshark /tmp/bt.pcap",
    "desc": "GUI"
   }
  ]
 }
];
