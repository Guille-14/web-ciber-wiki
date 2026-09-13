// Forense Digital (Forensics)
window.WIKI_CHEATSHEETS_17_FORENSICS = [
 {
  "tool": "autopsy",
  "desc": "Suite forense GUI sobre Sleuth Kit",
  "commands": [
   {
    "cmd": "autopsy",
    "desc": "Abrir GUI"
   },
   {
    "cmd": "autopsy -c config",
    "desc": "Con config"
   },
   {
    "cmd": "autopsy -d /tmp/evidence",
    "desc": "Case dir"
   },
   {
    "cmd": "autopsy -p 9999",
    "desc": "Puerto"
   },
   {
    "cmd": "autopsy -b",
    "desc": "Background"
   },
   {
    "cmd": "autopsy -q",
    "desc": "Quiet"
   }
  ]
 },
 {
  "tool": "sleuthkit",
  "desc": "Suite forense de análisis de discos (tsk_* tools)",
  "commands": [
   {
    "cmd": "tsk_recover imagen.dd /tmp/salida",
    "desc": "Recuperar archivos"
   },
   {
    "cmd": "tsk_recover -e imagen.dd /tmp/salida",
    "desc": "Solo borrados"
   },
   {
    "cmd": "tsk_recover -a imagen.dd /tmp/salida",
    "desc": "Sin límite de tamaño"
   },
   {
    "cmd": "fls imagen.dd",
    "desc": "Listar archivos"
   },
   {
    "cmd": "fls -d imagen.dd",
    "desc": "Solo borrados"
   },
   {
    "cmd": "fls -r imagen.dd",
    "desc": "Recursivo"
   },
   {
    "cmd": "fls -o 2048 imagen.dd",
    "desc": "Con offset"
   },
   {
    "cmd": "fls -f ntfs imagen.dd",
    "desc": "Tipo de fs"
   },
   {
    "cmd": "fls -D imagen.dd",
    "desc": "Metadata dir"
   },
   {
    "cmd": "fls -p imagen.dd",
    "desc": "Full paths"
   },
   {
    "cmd": "istat imagen.dd 123",
    "desc": "Info de inodo"
   },
   {
    "cmd": "istat -f ntfs imagen.dd 123",
    "desc": "Con fs type"
   },
   {
    "cmd": "icat imagen.dd 123 > salida.bin",
    "desc": "Extraer inodo"
   },
   {
    "cmd": "icat -f ntfs imagen.dd 123",
    "desc": "NTFS"
   },
   {
    "cmd": "mmls imagen.dd",
    "desc": "Layout de particiones"
   },
   {
    "cmd": "mmls -B imagen.dd",
    "desc": "En bytes"
   },
   {
    "cmd": "mmstat imagen.dd",
    "desc": "Resumen"
   },
   {
    "cmd": "fsstat imagen.dd",
    "desc": "Info del filesystem"
   },
   {
    "cmd": "fsstat -f ext4 imagen.dd",
    "desc": "EXT4"
   },
   {
    "cmd": "blkcat imagen.dd 0",
    "desc": "Leer bloque"
   },
   {
    "cmd": "blkls imagen.dd",
    "desc": "Bloques no alocados"
   },
   {
    "cmd": "blkstat imagen.dd 0",
    "desc": "Estado de bloque"
   },
   {
    "cmd": "mactime -b body.txt",
    "desc": "Timeline"
   },
   {
    "cmd": "jls imagen.dd",
    "desc": "Journal"
   },
   {
    "cmd": "tsk_loaddb -d /tmp/db imagen.dd",
    "desc": "Crear DB"
   },
   {
    "cmd": "sorter -d /tmp/out imagen.dd",
    "desc": "Clasificar archivos"
   },
   {
    "cmd": "sigfind -l 0x454d4968 imagen.dd",
    "desc": "Buscar firma"
   },
   {
    "cmd": "tsk_gettimes imagen.dd",
    "desc": "Timestamps"
   }
  ]
 },
 {
  "tool": "foremost",
  "desc": "Recuperar archivos por sus firmas (carving)",
  "commands": [
   {
    "cmd": "foremost -i imagen.dd",
    "desc": "Carving"
   },
   {
    "cmd": "foremost -i imagen.dd -o /tmp/out",
    "desc": "Salida"
   },
   {
    "cmd": "foremost -i imagen.dd -t jpg,png",
    "desc": "Tipos"
   },
   {
    "cmd": "foremost -i imagen.dd -T",
    "desc": "Timestamps"
   },
   {
    "cmd": "foremost -i imagen.dd -v",
    "desc": "Verbose"
   },
   {
    "cmd": "foremost -i imagen.dd -q",
    "desc": "Quiet"
   },
   {
    "cmd": "foremost -i imagen.dd -s 4096",
    "desc": "Skip"
   },
   {
    "cmd": "foremost -i imagen.dd -b 512",
    "desc": "Block size"
   },
   {
    "cmd": "foremost -i imagen.dd -c config.txt",
    "desc": "Config"
   },
   {
    "cmd": "foremost -i imagen.dd -d",
    "desc": "Indirecto"
   },
   {
    "cmd": "foremost -i imagen.dd -D",
    "desc": "Directorio"
   },
   {
    "cmd": "foremost -i imagen.dd -z",
    "desc": "Sin grabación"
   },
   {
    "cmd": "foremost -i imagen.dd -w",
    "desc": "Sin advertencias"
   },
   {
    "cmd": "foremost -i imagen.dd -V",
    "desc": "Versión"
   }
  ]
 },
 {
  "tool": "testdisk",
  "desc": "Recuperar particiones perdidas",
  "commands": [
   {
    "cmd": "testdisk /dev/sdb",
    "desc": "Analizar disco"
   },
   {
    "cmd": "testdisk imagen.dd",
    "desc": "Analizar imagen"
   },
   {
    "cmd": "testdisk /dev/sdb -l",
    "desc": "Log"
   },
   {
    "cmd": "testdisk -h",
    "desc": "Ayuda"
   },
   {
    "cmd": "testdisk /dev/sdb -c",
    "desc": "Confirmaciones"
   },
   {
    "cmd": "testdisk /dev/sdb -a",
    "desc": "Avanzado"
   },
   {
    "cmd": "testdisk /dev/sdb -d",
    "desc": "Debug"
   }
  ]
 },
 {
  "tool": "photorec",
  "desc": "Recuperar archivos perdidos (carving de fotos/doc)",
  "commands": [
   {
    "cmd": "photorec /dev/sdb",
    "desc": "Recuperar"
   },
   {
    "cmd": "photorec imagen.dd",
    "desc": "De imagen"
   },
   {
    "cmd": "photorec /dev/sdb -d /tmp/out",
    "desc": "Directorio"
   },
   {
    "cmd": "photorec /dev/sdb -f ext4",
    "desc": "Filesystem"
   },
   {
    "cmd": "photorec /dev/sdb -n",
    "desc": "No cargar config"
   },
   {
    "cmd": "photorec /dev/sdb -q",
    "desc": "Quiet"
   },
   {
    "cmd": "photorec /dev/sdb -c",
    "desc": "Config"
   },
   {
    "cmd": "photorec /dev/sdb -r",
    "desc": "Modo read-only"
   },
   {
    "cmd": "photorec /dev/sdb -z",
    "desc": "Zona"
   }
  ]
 },
 {
  "tool": "volatility3",
  "desc": "Framework de análisis de memoria (Python 3)",
  "commands": [
   {
    "cmd": "vol3 -f mem.dump windows.pslist.PsList",
    "desc": "Listar procesos"
   },
   {
    "cmd": "vol3 -f mem.dump windows.pstree.PsTree",
    "desc": "Árbol de procesos"
   },
   {
    "cmd": "vol3 -f mem.dump windows.cmdline.CmdLine",
    "desc": "Líneas de comando"
   },
   {
    "cmd": "vol3 -f mem.dump windows.netscan.NetScan",
    "desc": "Conexiones de red"
   },
   {
    "cmd": "vol3 -f mem.dump windows.filescan.FileScan",
    "desc": "Escaneo de archivos"
   },
   {
    "cmd": "vol3 -f mem.dump windows.dumpfiles.DumpFiles -Q 0xADDR -D /tmp",
    "desc": "Extraer archivo"
   },
   {
    "cmd": "vol3 -f mem.dump windows.registry.printkey.PrintKey",
    "desc": "Registro"
   },
   {
    "cmd": "vol3 -f mem.dump windows.registry.userassist.UserAssist",
    "desc": "UserAssist"
   },
   {
    "cmd": "vol3 -f mem.dump windows.svcscan.SvcScan",
    "desc": "Servicios"
   },
   {
    "cmd": "vol3 -f mem.dump windows.modscan.ModScan",
    "desc": "Módulos"
   },
   {
    "cmd": "vol3 -f mem.dump windows.ldrmodules.LdrModules",
    "desc": "Ldr modules"
   },
   {
    "cmd": "vol3 -f mem.dump windows.dlllist.DllList",
    "desc": "DLLs"
   },
   {
    "cmd": "vol3 -f mem.dump windows.handles.Handles",
    "desc": "Handles"
   },
   {
    "cmd": "vol3 -f mem.dump windows.malfind.Malfind",
    "desc": "Malware inyectado"
   },
   {
    "cmd": "vol3 -f mem.dump windows.shellbags.Shellbags",
    "desc": "Shellbags"
   },
   {
    "cmd": "vol3 -f mem.dump windows.info.Info",
    "desc": "Info del dump"
   },
   {
    "cmd": "vol3 -f mem.dump windows.envars.Envars",
    "desc": "Variables de entorno"
   },
   {
    "cmd": "vol3 -f mem.dump windows.cachedump.Cachedump",
    "desc": "Cached credentials"
   },
   {
    "cmd": "vol3 -f mem.dump windows.lsadump.Lsadump",
    "desc": "LSA secrets"
   },
   {
    "cmd": "vol3 -f mem.dump windows.hashdump.Hashdump",
    "desc": "Hashes"
   },
   {
    "cmd": "vol3 -f mem.dump linux.pslist.PsList -r pretty",
    "desc": "Linux procesos"
   },
   {
    "cmd": "vol3 -f mem.dump linux.bash.Bash",
    "desc": "Bash history"
   },
   {
    "cmd": "vol3 -f mem.dump linux.check_syscall.CheckSyscall",
    "desc": "Rootkit check"
   },
   {
    "cmd": "vol3 -f mem.dump linux.malfind.Malfind",
    "desc": "Linux malware"
   },
   {
    "cmd": "vol3 -f mem.dump linux.dump_map.DumpMap",
    "desc": "Dump map"
   },
   {
    "cmd": "vol3 -f mem.dump mac.pslist.PsList",
    "desc": "macOS procesos"
   },
   {
    "cmd": "vol3 -f mem.dump mac.malfind.Malfind",
    "desc": "macOS malware"
   },
   {
    "cmd": "vol3 -f mem.dump -r json windows.pslist.PsList",
    "desc": "JSON output"
   },
   {
    "cmd": "vol3 -p /usr/lib/python3/dist-packages -f mem.dump windows.info.Info",
    "desc": "Plugins dir"
   },
   {
    "cmd": "vol3 --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "volatility",
  "desc": "Framework de análisis de memoria (Python 2 legacy)",
  "commands": [
   {
    "cmd": "volatility -f mem.dump imageinfo",
    "desc": "Info de imagen"
   },
   {
    "cmd": "volatility -f mem.dump --profile=Win7SP1x64 pslist",
    "desc": "Procesos"
   },
   {
    "cmd": "volatility -f mem.dump --profile=Win7SP1x64 pstree",
    "desc": "Árbol"
   },
   {
    "cmd": "volatility -f mem.dump --profile=Win7SP1x64 netscan",
    "desc": "Red"
   },
   {
    "cmd": "volatility -f mem.dump --profile=Win7SP1x64 connscan",
    "desc": "Conexiones"
   },
   {
    "cmd": "volatility -f mem.dump --profile=Win7SP1x64 filescan",
    "desc": "Archivos"
   },
   {
    "cmd": "volatility -f mem.dump --profile=Win7SP1x64 dumpfiles -Q 0xADDR -D /tmp",
    "desc": "Extraer"
   },
   {
    "cmd": "volatility -f mem.dump --profile=Win7SP1x64 hashdump",
    "desc": "Hashes"
   },
   {
    "cmd": "volatility -f mem.dump --profile=Win7SP1x64 lsadump",
    "desc": "LSA"
   },
   {
    "cmd": "volatility -f mem.dump --profile=Win7SP1x64 cachedump",
    "desc": "Cache"
   },
   {
    "cmd": "volatility -f mem.dump --profile=Win7SP1x64 malfind",
    "desc": "Malware"
   },
   {
    "cmd": "volatility -f mem.dump --profile=Win7SP1x64 svcscan",
    "desc": "Servicios"
   },
   {
    "cmd": "volatility -f mem.dump --profile=Win7SP1x64 cmdline",
    "desc": "Cmdline"
   },
   {
    "cmd": "volatility -f mem.dump --profile=Win7SP1x64 envars",
    "desc": "Envars"
   },
   {
    "cmd": "volatility -f mem.dump --profile=Win7SP1x64 shimcache",
    "desc": "Shimcache"
   },
   {
    "cmd": "volatility -f mem.dump --profile=Win7SP1x64 userassist",
    "desc": "UserAssist"
   },
   {
    "cmd": "volatility -f mem.dump --profile=Win7SP1x64 iehistory",
    "desc": "IE history"
   },
   {
    "cmd": "volatility -f mem.dump --profile=Win7SP1x64 clipboard",
    "desc": "Clipboard"
   },
   {
    "cmd": "volatility -f mem.dump --profile=Win7SP1x64 screenshots -D /tmp",
    "desc": "Screenshots"
   },
   {
    "cmd": "volatility -f mem.dump --profile=Win7SP1x64 shellbags",
    "desc": "Shellbags"
   },
   {
    "cmd": "volatility -f mem.dump --profile=Win7SP1x64 psxview",
    "desc": "Rootkit"
   },
   {
    "cmd": "volatility -f mem.dump --profile=Win7SP1x64 apihooks",
    "desc": "API hooks"
   },
   {
    "cmd": "volatility -f mem.dump --profile=Win7SP1x64 dlllist",
    "desc": "DLLs"
   },
   {
    "cmd": "volatility -f mem.dump --profile=Win7SP1x64 handles -t Process",
    "desc": "Handles"
   },
   {
    "cmd": "volatility -f mem.dump --profile=Win7SP1x64 timeliner",
    "desc": "Timeliner"
   },
   {
    "cmd": "volatility -f mem.dump --profile=Win7SP1x64 windows.pstree.PsTree",
    "desc": "New style"
   },
   {
    "cmd": "volatility -f mem.dump kdbgscan",
    "desc": "KDBG scan"
   },
   {
    "cmd": "volatility --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "ewf-tools",
  "desc": "Herramientas para formatos EWF (EnCase/Expert Witness)",
  "commands": [
   {
    "cmd": "ewfmount imagen.E01 /mnt/ewf",
    "desc": "Montar E01"
   },
   {
    "cmd": "ewfinfo imagen.E01",
    "desc": "Info de imagen"
   },
   {
    "cmd": "ewfexport imagen.E01 /tmp/salida.dd",
    "desc": "Exportar a raw"
   },
   {
    "cmd": "ewfexport -t out imagen.E01",
    "desc": "Con prefijo"
   },
   {
    "cmd": "ewfexport -f raw imagen.E01",
    "desc": "Formato"
   },
   {
    "cmd": "ewfverify imagen.E01",
    "desc": "Verificar"
   },
   {
    "cmd": "ewfacquire /dev/sdb -t out",
    "desc": "Adquirir disco"
   },
   {
    "cmd": "ewfacquire -f ewfx /dev/sdb",
    "desc": "Formato"
   },
   {
    "cmd": "ewfacquire -c 5 /dev/sdb",
    "desc": "Compresión"
   },
   {
    "cmd": "ewfacquire -m physical /dev/sdb",
    "desc": "Modo"
   },
   {
    "cmd": "ewfacquire -u /dev/sdb",
    "desc": "UUID"
   },
   {
    "cmd": "ewfacquirestream /dev/sdb",
    "desc": "Stream"
   },
   {
    "cmd": "ewfhash /dev/sdb",
    "desc": "Hashes"
   },
   {
    "cmd": "ewfrecover img.E01",
    "desc": "Recuperar"
   },
   {
    "cmd": "ewfresize img.E01",
    "desc": "Redimensionar"
   },
   {
    "cmd": "ewfcompare img1.E01 img2.E01",
    "desc": "Comparar"
   },
   {
    "cmd": "ewfchunk img.E01",
    "desc": "Chunks"
   },
   {
    "cmd": "ewfexport --tolerant img.E01",
    "desc": "Tolerante"
   },
   {
    "cmd": "ewfinfo -d img.E01",
    "desc": "Detalles"
   },
   {
    "cmd": "ewfacquire -g /dev/sdb",
    "desc": "Con checksum"
   }
  ]
 },
 {
  "tool": "guymager",
  "desc": "Adquisición forense de discos (GUI)",
  "commands": [
   {
    "cmd": "guymager",
    "desc": "Abrir GUI"
   },
   {
    "cmd": "guymager -d /dev/sdb -f ewf -o /tmp/out.E01",
    "desc": "Adquirir"
   },
   {
    "cmd": "guymager -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "dc3dd",
  "desc": "dd con hash y logging (forense)",
  "commands": [
   {
    "cmd": "dc3dd if=/dev/sdb of=/tmp/out.dd",
    "desc": "Copiar disco"
   },
   {
    "cmd": "dc3dd if=/dev/sdb of=out.dd hash=md5",
    "desc": "Con MD5"
   },
   {
    "cmd": "dc3dd if=/dev/sdb of=out.dd hash=sha1",
    "desc": "SHA1"
   },
   {
    "cmd": "dc3dd if=/dev/sdb of=out.dd hash=sha256",
    "desc": "SHA256"
   },
   {
    "cmd": "dc3dd if=/dev/sdb of=out.dd hash=md5,sha1",
    "desc": "Varios"
   },
   {
    "cmd": "dc3dd if=/dev/sdb of=out.dd log=/tmp/log.txt",
    "desc": "Log"
   },
   {
    "cmd": "dc3dd if=/dev/sdb of=out.dd split=2G",
    "desc": "Dividir en 2G"
   },
   {
    "cmd": "dc3dd if=/dev/sdb of=out.dd hashlog=hash.txt",
    "desc": "Hash log"
   },
   {
    "cmd": "dc3dd if=/dev/sdb of=out.dd errlog=err.txt",
    "desc": "Error log"
   },
   {
    "cmd": "dc3dd if=/dev/sdb of=out.dd verb=on",
    "desc": "Verbose"
   },
   {
    "cmd": "dc3dd if=/dev/sdb of=out.dd -w",
    "desc": "Verificar"
   },
   {
    "cmd": "dc3dd if=/dev/sdb of=out.dd cnt=1000",
    "desc": "1000 bloques"
   },
   {
    "cmd": "dc3dd if=/dev/sdb of=out.dd bsz=4096",
    "desc": "Block size"
   },
   {
    "cmd": "dc3dd --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "scalpel",
  "desc": "Carving forense rápido basado en config",
  "commands": [
   {
    "cmd": "scalpel -i imagen.dd",
    "desc": "Carving"
   },
   {
    "cmd": "scalpel -i imagen.dd -o /tmp/out",
    "desc": "Salida"
   },
   {
    "cmd": "scalpel -c config.txt -i imagen.dd",
    "desc": "Config"
   },
   {
    "cmd": "scalpel -i imagen.dd -v",
    "desc": "Verbose"
   },
   {
    "cmd": "scalpel -i imagen.dd -q",
    "desc": "Quiet"
   },
   {
    "cmd": "scalpel -i imagen.dd -s 4096",
    "desc": "Skip bytes"
   },
   {
    "cmd": "scalpel -i imagen.dd -r",
    "desc": "Recursivo"
   },
   {
    "cmd": "scalpel -i imagen.dd -n",
    "desc": "Sin archivos vacíos"
   },
   {
    "cmd": "scalpel -i imagen.dd -m",
    "desc": "Solo matches"
   },
   {
    "cmd": "scalpel -i imagen.dd -o out -e",
    "desc": "Extensiones"
   }
  ]
 },
 {
  "tool": "regripper",
  "desc": "Extraer info forense del registro de Windows",
  "commands": [
   {
    "cmd": "regripper -r SYSTEM -p system",
    "desc": "Hive SYSTEM"
   },
   {
    "cmd": "regripper -r SOFTWARE -p software",
    "desc": "Hive SOFTWARE"
   },
   {
    "cmd": "regripper -r NTUSER.DAT -p userassist",
    "desc": "UserAssist"
   },
   {
    "cmd": "regripper -r NTUSER.DAT -p runmru",
    "desc": "RunMRU"
   },
   {
    "cmd": "regripper -r NTUSER.DAT -p typedurls",
    "desc": "TypedURLs"
   },
   {
    "cmd": "regripper -r SOFTWARE -p winlogon",
    "desc": "Winlogon"
   },
   {
    "cmd": "regripper -r SYSTEM -p services",
    "desc": "Servicios"
   },
   {
    "cmd": "regripper -r SYSTEM -p usbstor",
    "desc": "USBStor"
   },
   {
    "cmd": "regripper -r SYSTEM -p mountdev",
    "desc": "MountDev"
   },
   {
    "cmd": "regripper -r SYSTEM -p network",
    "desc": "Network"
   },
   {
    "cmd": "regripper -r SAM -p sam",
    "desc": "SAM"
   },
   {
    "cmd": "regripper -r SECURITY -p security",
    "desc": "Security"
   },
   {
    "cmd": "regripper -r SOFTWARE -p uninstall",
    "desc": "Uninstall"
   },
   {
    "cmd": "regripper -r SYSTEM -p shimcache",
    "desc": "Shimcache"
   },
   {
    "cmd": "regripper -r SYSTEM -p autostart",
    "desc": "Autostart"
   },
   {
    "cmd": "regripper -r SOFTWARE -p userprofile",
    "desc": "UserProfile"
   },
   {
    "cmd": "regripper -r NTUSER.DAT -p recentdocs",
    "desc": "RecentDocs"
   },
   {
    "cmd": "regripper -r NTUSER.DAT -p mounteddevices",
    "desc": "MountedDevices"
   },
   {
    "cmd": "regripper -r NTUSER.DAT -p iecont",
    "desc": "IE History"
   },
   {
    "cmd": "regripper -r SOFTWARE -p apppaths",
    "desc": "AppPaths"
   }
  ]
 },
 {
  "tool": "chkrootkit",
  "desc": "Detectar rootkits en el sistema",
  "commands": [
   {
    "cmd": "chkrootkit",
    "desc": "Escaneo completo"
   },
   {
    "cmd": "chkrootkit -q",
    "desc": "Quiet"
   },
   {
    "cmd": "chkrootkit -l",
    "desc": "Listar tests"
   },
   {
    "cmd": "chkrootkit -x",
    "desc": "Expert mode"
   },
   {
    "cmd": "chkrootkit -r /mnt/evidencia",
    "desc": "Escaneo de root"
   },
   {
    "cmd": "chkrootkit -n",
    "desc": "Sin resolución"
   },
   {
    "cmd": "chkrootkit -p dir",
    "desc": "Path"
   },
   {
    "cmd": "chkrootkit -V",
    "desc": "Versión"
   },
   {
    "cmd": "chkrootkit -d",
    "desc": "Debug"
   }
  ]
 },
 {
  "tool": "lynis",
  "desc": "Auditoría de seguridad del sistema",
  "commands": [
   {
    "cmd": "lynis audit system",
    "desc": "Auditar sistema"
   },
   {
    "cmd": "lynis audit system --quick",
    "desc": "Rápido"
   },
   {
    "cmd": "lynis audit system --report-file /tmp/lynis.txt",
    "desc": "Reporte"
   },
   {
    "cmd": "lynis audit system --log-file /tmp/log.txt",
    "desc": "Log"
   },
   {
    "cmd": "lynis audit system --tests filesystems",
    "desc": "Test específico"
   },
   {
    "cmd": "lynis audit system --skip-test malware",
    "desc": "Saltar test"
   },
   {
    "cmd": "lynis audit system --no-colors",
    "desc": "Sin colores"
   },
   {
    "cmd": "lynis audit system --quiet",
    "desc": "Quiet"
   },
   {
    "cmd": "lynis update info",
    "desc": "Info de update"
   },
   {
    "cmd": "lynis audit system --cronjob",
    "desc": "Modo cron"
   },
   {
    "cmd": "lynis audit system --pentest",
    "desc": "Modo pentest"
   },
   {
    "cmd": "lynis show warnings",
    "desc": "Mostrar warnings"
   },
   {
    "cmd": "lynis show suggestions",
    "desc": "Sugerencias"
   },
   {
    "cmd": "lynis show tests",
    "desc": "Listar tests"
   },
   {
    "cmd": "lynis show categories",
    "desc": "Categorías"
   }
  ]
 },
 {
  "tool": "rkhunter",
  "desc": "Rootkit Hunter - detectar rootkits",
  "commands": [
   {
    "cmd": "rkhunter --check",
    "desc": "Comprobar"
   },
   {
    "cmd": "rkhunter --check --skip-keypress",
    "desc": "Sin interacción"
   },
   {
    "cmd": "rkhunter --check --report-warnings-only",
    "desc": "Solo warnings"
   },
   {
    "cmd": "rkhunter --update",
    "desc": "Actualizar DB"
   },
   {
    "cmd": "rkhunter --propupd",
    "desc": "Actualizar baseline"
   },
   {
    "cmd": "rkhunter --list",
    "desc": "Listar checks"
   },
   {
    "cmd": "rkhunter --check --enable all",
    "desc": "Habilitar todo"
   },
   {
    "cmd": "rkhunter --check --disable known_good",
    "desc": "Deshabilitar"
   },
   {
    "cmd": "rkhunter --info",
    "desc": "Info"
   },
   {
    "cmd": "rkhunter --versioncheck",
    "desc": "Versión"
   },
   {
    "cmd": "rkhunter --lang en",
    "desc": "Idioma"
   },
   {
    "cmd": "rkhunter --check --quiet",
    "desc": "Quiet"
   }
  ]
 },
 {
  "tool": "hashid",
  "desc": "Identificar tipo de hash",
  "commands": [
   {
    "cmd": "hashid 'hash'",
    "desc": "Identificar"
   },
   {
    "cmd": "hashid -m 'hash'",
    "desc": "Con modo hashcat"
   },
   {
    "cmd": "hashid -j 'hash'",
    "desc": "Con modo john"
   },
   {
    "cmd": "hashid -e 'hash'",
    "desc": "Extra info"
   },
   {
    "cmd": "hashid -m -j -e 'hash'",
    "desc": "Todo"
   },
   {
    "cmd": "hashid hash.txt",
    "desc": "De archivo"
   },
   {
    "cmd": "hashid -a 0 'hash'",
    "desc": "Solo uno"
   },
   {
    "cmd": "hashid -l",
    "desc": "Listar hashes"
   },
   {
    "cmd": "hashid -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "binwalk",
  "desc": "Análisis de firmware y extracción de archivos embebidos",
  "commands": [
   {
    "cmd": "binwalk firmware.bin",
    "desc": "Analizar"
   },
   {
    "cmd": "binwalk -e firmware.bin",
    "desc": "Extraer"
   },
   {
    "cmd": "binwalk -e -M firmware.bin",
    "desc": "Extraer recursivo"
   },
   {
    "cmd": "binwalk -D 'png:image:png' firmware.bin",
    "desc": "Extractor custom"
   },
   {
    "cmd": "binwalk -y png firmware.bin",
    "desc": "Solo png"
   },
   {
    "cmd": "binwalk -x 'png' firmware.bin",
    "desc": "Excluir"
   },
   {
    "cmd": "binwalk -A firmware.bin",
    "desc": "Signaturas"
   },
   {
    "cmd": "binwalk -T firmware.bin",
    "desc": "Test"
   },
   {
    "cmd": "binwalk -S firmware.bin",
    "desc": "Score"
   },
   {
    "cmd": "binwalk -I firmware.bin",
    "desc": "Info"
   },
   {
    "cmd": "binwalk -z firmware.bin",
    "desc": "Carve"
   },
   {
    "cmd": "binwalk -o outdir firmware.bin",
    "desc": "Directorio"
   },
   {
    "cmd": "binwalk -d 2 firmware.bin",
    "desc": "Profundidad"
   },
   {
    "cmd": "binwalk --run-as=root firmware.bin",
    "desc": "Como root"
   },
   {
    "cmd": "binwalk -l 20 firmware.bin",
    "desc": "Longitud"
   },
   {
    "cmd": "binwalk -W firmware.bin",
    "desc": "Comparar"
   },
   {
    "cmd": "binwalk -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "steghide",
  "desc": "Esteganografía (ocultar datos en imágenes/audio)",
  "commands": [
   {
    "cmd": "steghide embed -cf imagen.jpg -ef secreto.txt",
    "desc": "Ocultar"
   },
   {
    "cmd": "steghide embed -cf img.jpg -ef data.txt -sf salida.jpg",
    "desc": "Con salida"
   },
   {
    "cmd": "steghide embed -cf img.jpg -ef d.txt -p clave",
    "desc": "Con passphrase"
   },
   {
    "cmd": "steghide embed -cf img.jpg -ef d.txt -z 9",
    "desc": "Compresión 9"
   },
   {
    "cmd": "steghide embed -cf img.jpg -ef d.txt -e aes128",
    "desc": "Algoritmo"
   },
   {
    "cmd": "steghide extract -sf imagen.jpg",
    "desc": "Extraer"
   },
   {
    "cmd": "steghide extract -sf imagen.jpg -xf out.txt",
    "desc": "Salida"
   },
   {
    "cmd": "steghide extract -sf imagen.jpg -p clave",
    "desc": "Con clave"
   },
   {
    "cmd": "steghide info imagen.jpg",
    "desc": "Info del archivo"
   },
   {
    "cmd": "steghide info -p clave imagen.jpg",
    "desc": "Info con clave"
   },
   {
    "cmd": "steghide embed -cf img.wav -ef d.txt",
    "desc": "En audio"
   },
   {
    "cmd": "steghide --version",
    "desc": "Versión"
   },
   {
    "cmd": "steghide --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "exiftool",
  "desc": "Leer/escribir metadatos de archivos",
  "commands": [
   {
    "cmd": "exiftool archivo.jpg",
    "desc": "Ver metadatos"
   },
   {
    "cmd": "exiftool -all archivo.jpg",
    "desc": "Todos"
   },
   {
    "cmd": "exiftool -GPS* archivo.jpg",
    "desc": "GPS"
   },
   {
    "cmd": "exiftool -DateTimeOriginal archivo.jpg",
    "desc": "Fecha"
   },
   {
    "cmd": "exiftool -Model archivo.jpg",
    "desc": "Cámara"
   },
   {
    "cmd": "exiftool -a -u archivo.jpg",
    "desc": "Todo sin filtros"
   },
   {
    "cmd": "exiftool -r directorio/",
    "desc": "Recursivo"
   },
   {
    "cmd": "exiftool -json -r dir > out.json",
    "desc": "JSON"
   },
   {
    "cmd": "exiftool -csv dir > out.csv",
    "desc": "CSV"
   },
   {
    "cmd": "exiftool -Comment='test' archivo.jpg",
    "desc": "Escribir tag"
   },
   {
    "cmd": "exiftool -Comment= archivo.jpg",
    "desc": "Borrar tag"
   },
   {
    "cmd": "exiftool -all= archivo.jpg",
    "desc": "Borrar todos"
   },
   {
    "cmd": "exiftool -Artist='X' -o nuevo.jpg archivo.jpg",
    "desc": "Copia modificada"
   },
   {
    "cmd": "exiftool -ext jpg dir",
    "desc": "Solo jpg"
   },
   {
    "cmd": "exiftool -p '$GPSLatitude' archivo.jpg",
    "desc": "Print format"
   },
   {
    "cmd": "exiftool -G archivo.jpg",
    "desc": "Con grupos"
   },
   {
    "cmd": "exiftool -s archivo.jpg",
    "desc": "Nombres cortos"
   },
   {
    "cmd": "exiftool -f archivo.jpg",
    "desc": "Forzar"
   },
   {
    "cmd": "exiftool -n archivo.jpg",
    "desc": "Valores numéricos"
   },
   {
    "cmd": "exiftool -b -GPSLatitude archivo.jpg",
    "desc": "Binario"
   }
  ]
 },
 {
  "tool": "pdfid",
  "desc": "Analizar PDFs buscando objetos maliciosos",
  "commands": [
   {
    "cmd": "pdfid archivo.pdf",
    "desc": "Análisis"
   },
   {
    "cmd": "pdfid -a archivo.pdf",
    "desc": "Todos"
   },
   {
    "cmd": "pdfid -c archivo.pdf",
    "desc": "Colores"
   },
   {
    "cmd": "pdfid -e archivo.pdf",
    "desc": "Extra"
   },
   {
    "cmd": "pdfid -f archivo.pdf",
    "desc": "Forzar"
   },
   {
    "cmd": "pdfid -p archivo.pdf",
    "desc": "Sin GUI"
   },
   {
    "cmd": "pdfid -s archivo.pdf",
    "desc": "Sin filtros"
   },
   {
    "cmd": "pdfid -v archivo.pdf",
    "desc": "Verbose"
   },
   {
    "cmd": "pdfid -x archivo.pdf",
    "desc": "XML output"
   },
   {
    "cmd": "pdfid -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "pdf-parser",
  "desc": "Parser de PDFs (analizar objetos)",
  "commands": [
   {
    "cmd": "pdf-parser archivo.pdf",
    "desc": "Parsear"
   },
   {
    "cmd": "pdf-parser -o 1 archivo.pdf",
    "desc": "Objeto 1"
   },
   {
    "cmd": "pdf-parser -r 1 archivo.pdf",
    "desc": "Referencias"
   },
   {
    "cmd": "pdf-parser -s '/JavaScript' archivo.pdf",
    "desc": "Buscar keyword"
   },
   {
    "cmd": "pdf-parser -f archivo.pdf",
    "desc": "Filtrar"
   },
   {
    "cmd": "pdf-parser -c archivo.pdf",
    "desc": "Contenido"
   },
   {
    "cmd": "pdf-parser -v archivo.pdf",
    "desc": "Verbose"
   },
   {
    "cmd": "pdf-parser -d out.bin archivo.pdf",
    "desc": "Dump"
   },
   {
    "cmd": "pdf-parser -t archivo.pdf",
    "desc": "Tipo"
   },
   {
    "cmd": "pdf-parser -k archivo.pdf",
    "desc": "Keywords"
   },
   {
    "cmd": "pdf-parser -i archivo.pdf",
    "desc": "Info"
   },
   {
    "cmd": "pdf-parser -S archivo.pdf",
    "desc": "Stats"
   }
  ]
 },
 {
  "tool": "exiv2",
  "desc": "Gestión de metadatos Exif",
  "commands": [
   {
    "cmd": "exiv2 imagen.jpg",
    "desc": "Ver metadatos"
   },
   {
    "cmd": "exiv2 -p a imagen.jpg",
    "desc": "Print all"
   },
   {
    "cmd": "exiv2 -g Exif.Image.Artist imagen.jpg",
    "desc": "Filtrar tag"
   },
   {
    "cmd": "exiv2 -K Exif.Image.Artist imagen.jpg",
    "desc": "Tag exacto"
   },
   {
    "cmd": "exiv2 rm imagen.jpg",
    "desc": "Borrar metadatos"
   },
   {
    "cmd": "exiv2 -M'set Exif.Photo.UserComment test' imagen.jpg",
    "desc": "Modificar"
   },
   {
    "cmd": "exiv2 -M'del Exif.Image.Artist' imagen.jpg",
    "desc": "Borrar tag"
   },
   {
    "cmd": "exiv2 -ea out.jpg imagen.jpg",
    "desc": "Extraer a archivo"
   },
   {
    "cmd": "exiv2 -ia out.jpg imagen.jpg",
    "desc": "Insertar"
   },
   {
    "cmd": "exiv2 -pt imagen.jpg",
    "desc": "Recursivo"
   },
   {
    "cmd": "exiv2 -v imagen.jpg",
    "desc": "Verbose"
   }
  ]
 },
 {
  "tool": "yara",
  "desc": "Motor de detección de patrones (malware hunting)",
  "commands": [
   {
    "cmd": "yara reglas.yar binario",
    "desc": "Escanear archivo"
   },
   {
    "cmd": "yara -r reglas.yar dir/",
    "desc": "Recursivo"
   },
   {
    "cmd": "yara -m reglas.yar binario",
    "desc": "Con meta"
   },
   {
    "cmd": "yara -s reglas.yar binario",
    "desc": "Strings"
   },
   {
    "cmd": "yara -i reglas.yar binario",
    "desc": "Identifiers"
   },
   {
    "cmd": "yara -c reglas.yar binario",
    "desc": "Contar matches"
   },
   {
    "cmd": "yara -w reglas.yar binario",
    "desc": "Sin warnings"
   },
   {
    "cmd": "yara -d var=val reglas.yar binario",
    "desc": "Definir variable"
   },
   {
    "cmd": "yara -x 'file.ext' reglas.yar binario",
    "desc": "External"
   },
   {
    "cmd": "yara -t tag reglas.yar binario",
    "desc": "Filtrar por tag"
   },
   {
    "cmd": "yara -l 10 reglas.yar binario",
    "desc": "Máx matches"
   },
   {
    "cmd": "yara -p 4 reglas.yar dir/",
    "desc": "4 hilos"
   },
   {
    "cmd": "yara -z reglas.yar binario",
    "desc": "Sin archivos"
   },
   {
    "cmd": "yara -f reglas.yar binario",
    "desc": "Fast mode"
   },
   {
    "cmd": "yara -a reglas.yar binario",
    "desc": "Accurate"
   },
   {
    "cmd": "yara --print-module-data reglas.yar binario",
    "desc": "Module data"
   },
   {
    "cmd": "yara -L",
    "desc": "Listar módulos"
   },
   {
    "cmd": "yara -H",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "pasco",
  "desc": "Parsear historial de IE (index.dat)",
  "commands": [
   {
    "cmd": "pasco index.dat",
    "desc": "Parsear"
   },
   {
    "cmd": "pasco -d index.dat",
    "desc": "Descripciones"
   },
   {
    "cmd": "pasco -t index.dat",
    "desc": "Timestamps"
   },
   {
    "cmd": "pasco -l index.dat",
    "desc": "Líneas"
   },
   {
    "cmd": "pasco -o out.txt index.dat",
    "desc": "Salida"
   },
   {
    "cmd": "pasco -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "galleta",
  "desc": "Extraer cookies de archivos index.dat",
  "commands": [
   {
    "cmd": "galleta index.dat",
    "desc": "Extraer"
   },
   {
    "cmd": "galleta -u index.dat",
    "desc": "Unicode"
   },
   {
    "cmd": "galleta -d index.dat",
    "desc": "Descripciones"
   },
   {
    "cmd": "galleta -o out.txt index.dat",
    "desc": "Salida"
   },
   {
    "cmd": "galleta -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "vinetto",
  "desc": "Extraer thumbs.db y archivos thumbnail",
  "commands": [
   {
    "cmd": "vinetto thumbs.db",
    "desc": "Extraer thumbs"
   },
   {
    "cmd": "vinetto -o /tmp/out thumbs.db",
    "desc": "Directorio"
   },
   {
    "cmd": "vinetto -r thumbs.db",
    "desc": "Reporte"
   },
   {
    "cmd": "vinetto -d thumbs.db",
    "desc": "Descriptores"
   },
   {
    "cmd": "vinetto -s thumbs.db",
    "desc": "Salida simple"
   },
   {
    "cmd": "vinetto -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "sqlite3",
  "desc": "Cliente SQLite (analizar BD forenses)",
  "commands": [
   {
    "cmd": "sqlite3 db.sqlite .tables",
    "desc": "Listar tablas"
   },
   {
    "cmd": "sqlite3 db.sqlite '.schema tabla'",
    "desc": "Esquema"
   },
   {
    "cmd": "sqlite3 db.sqlite 'SELECT * FROM tabla'",
    "desc": "Select"
   },
   {
    "cmd": "sqlite3 db.sqlite '.dump'",
    "desc": "Dump completo"
   },
   {
    "cmd": "sqlite3 db.sqlite '.headers on'",
    "desc": "Headers"
   },
   {
    "cmd": "sqlite3 db.sqlite '.mode column'",
    "desc": "Modo columna"
   },
   {
    "cmd": "sqlite3 db.sqlite '.mode json'",
    "desc": "JSON"
   },
   {
    "cmd": "sqlite3 db.sqlite '.output out.txt' 'SELECT * FROM t'",
    "desc": "Salida"
   },
   {
    "cmd": "sqlite3 db.sqlite '.import file.csv tabla'",
    "desc": "Importar"
   },
   {
    "cmd": "sqlite3 db.sqlite 'SELECT count(*) FROM t'",
    "desc": "Contar"
   },
   {
    "cmd": "sqlite3 db.sqlite '.read script.sql'",
    "desc": "Ejecutar script"
   },
   {
    "cmd": "sqlite3 db.sqlite '.indexes'",
    "desc": "Índices"
   },
   {
    "cmd": "sqlite3 -header -column db.sqlite 'SELECT * FROM t'",
    "desc": "Formato"
   },
   {
    "cmd": "sqlite3 db.sqlite 'VACUUM'",
    "desc": "Vacuum"
   },
   {
    "cmd": "sqlite3 db.sqlite 'PRAGMA table_info(t)'",
    "desc": "Columnas"
   }
  ]
 },
 {
  "tool": "ddrescue",
  "desc": "Recuperar datos de discos dañados",
  "commands": [
   {
    "cmd": "ddrescue /dev/sdb img.dd map.txt",
    "desc": "Rescate"
   },
   {
    "cmd": "ddrescue -n /dev/sdb img.dd map.txt",
    "desc": "Sin read retries"
   },
   {
    "cmd": "ddrescue -r 3 /dev/sdb img.dd map.txt",
    "desc": "3 retries"
   },
   {
    "cmd": "ddrescue -d /dev/sdb img.dd map.txt",
    "desc": "Directo"
   },
   {
    "cmd": "ddrescue -b 4096 /dev/sdb img.dd map.txt",
    "desc": "Block size"
   },
   {
    "cmd": "ddrescue -c 32 /dev/sdb img.dd map.txt",
    "desc": "Sectores"
   },
   {
    "cmd": "ddrescue -v /dev/sdb img.dd map.txt",
    "desc": "Verbose"
   },
   {
    "cmd": "ddrescue -t /dev/sdb img.dd map.txt",
    "desc": "Truncar"
   },
   {
    "cmd": "ddrescue -A /dev/sdb img.dd map.txt",
    "desc": "No preallocate"
   },
   {
    "cmd": "ddrescue -m map2.txt /dev/sdb img.dd map.txt",
    "desc": "Dominio"
   },
   {
    "cmd": "ddrescue --reverse /dev/sdb img.dd map.txt",
    "desc": "Reverse"
   },
   {
    "cmd": "ddrescue --fill-mode=- map.txt img.dd",
    "desc": "Rellenar"
   },
   {
    "cmd": "ddrescue -V",
    "desc": "Versión"
   }
  ]
 },
 {
  "tool": "safecopy",
  "desc": "Copiar datos de discos con errores",
  "commands": [
   {
    "cmd": "safecopy /dev/sdb /tmp/out.dd",
    "desc": "Copiar"
   },
   {
    "cmd": "safecopy -r 5 /dev/sdb /tmp/out.dd",
    "desc": "5 retries"
   },
   {
    "cmd": "safecopy -R 2 /dev/sdb /tmp/out.dd",
    "desc": "Retries por bloque"
   },
   {
    "cmd": "safecopy -b 4096 /dev/sdb /tmp/out.dd",
    "desc": "Block size"
   },
   {
    "cmd": "safecopy -s 0 /dev/sdb /tmp/out.dd",
    "desc": "Desde sector"
   },
   {
    "cmd": "safecopy -l 1024 /dev/sdb /tmp/out.dd",
    "desc": "Límite"
   },
   {
    "cmd": "safecopy -S 1024 /dev/sdb /tmp/out.dd",
    "desc": "Saltar"
   },
   {
    "cmd": "safecopy -L /tmp/log /dev/sdb /tmp/out.dd",
    "desc": "Log"
   },
   {
    "cmd": "safecopy -T /dev/sdb /tmp/out.dd",
    "desc": "Alta precisión"
   },
   {
    "cmd": "safecopy -f 0 /dev/sdb /tmp/out.dd",
    "desc": "Fuerza"
   },
   {
    "cmd": "safecopy -c 4 /dev/sdb /tmp/out.dd",
    "desc": "Concurrencia"
   },
   {
    "cmd": "safecopy -v /dev/sdb /tmp/out.dd",
    "desc": "Verbose"
   },
   {
    "cmd": "safecopy -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "hashdeep",
  "desc": "Hashes múltiples y auditoría de archivos",
  "commands": [
   {
    "cmd": "hashdeep -r dir/",
    "desc": "Recursivo"
   },
   {
    "cmd": "hashdeep -c md5,sha1,sha256 archivo",
    "desc": "Algoritmos"
   },
   {
    "cmd": "hashdeep -c sha256 dir/",
    "desc": "SHA256"
   },
   {
    "cmd": "hashdeep -l archivo",
    "desc": "Solo hash"
   },
   {
    "cmd": "hashdeep -o f archivo",
    "desc": "Output format"
   },
   {
    "cmd": "hashdeep -a -r dir/",
    "desc": "Auditoría"
   },
   {
    "cmd": "hashdeep -k hashes.txt -a -r dir/",
    "desc": "Comparar con lista"
   },
   {
    "cmd": "hashdeep -x -k hashes.txt dir/",
    "desc": "Negativo"
   },
   {
    "cmd": "hashdeep -m -k hashes.txt dir/",
    "desc": "Match"
   },
   {
    "cmd": "hashdeep -e -r dir/",
    "desc": "Solo con errores"
   },
   {
    "cmd": "hashdeep -r dir/ | sort",
    "desc": "Ordenar"
   },
   {
    "cmd": "hashdeep -v archivo",
    "desc": "Verbose"
   },
   {
    "cmd": "hashdeep -vv archivo",
    "desc": "Muy verbose"
   },
   {
    "cmd": "hashdeep --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "pngcheck",
  "desc": "Verificar e imprimir info de PNG",
  "commands": [
   {
    "cmd": "pngcheck imagen.png",
    "desc": "Verificar"
   },
   {
    "cmd": "pngcheck -v imagen.png",
    "desc": "Verbose"
   },
   {
    "cmd": "pngcheck -c imagen.png",
    "desc": "Con colores"
   },
   {
    "cmd": "pngcheck -t imagen.png",
    "desc": "Testear"
   },
   {
    "cmd": "pngcheck -q imagen.png",
    "desc": "Quiet"
   },
   {
    "cmd": "pngcheck -vv imagen.png",
    "desc": "Muy verbose"
   },
   {
    "cmd": "pngcheck -x imagen.png",
    "desc": "Extra"
   },
   {
    "cmd": "pngcheck -f imagen.png",
    "desc": "Fuerza"
   },
   {
    "cmd": "pngcheck -s imagen.png",
    "desc": "Solo summary"
   },
   {
    "cmd": "pngcheck -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "zsteg",
  "desc": "Detección de esteganografía en PNG/BMP (LSB)",
  "commands": [
   {
    "cmd": "zsteg imagen.png",
    "desc": "Analizar"
   },
   {
    "cmd": "zsteg -a imagen.png",
    "desc": "Todas las capas"
   },
   {
    "cmd": "zsteg -v imagen.png",
    "desc": "Verbose"
   },
   {
    "cmd": "zsteg -E 'b1,rgb,lsb,xy' imagen.png",
    "desc": "Extraer plano"
   },
   {
    "cmd": "zsteg -l imagen.png",
    "desc": "Listar"
   },
   {
    "cmd": "zsteg -c 1 imagen.png",
    "desc": "Canal"
   },
   {
    "cmd": "zsteg --limit 100 imagen.png",
    "desc": "Límite"
   },
   {
    "cmd": "zsteg -b 1 imagen.png",
    "desc": "Bits"
   },
   {
    "cmd": "zsteg -o 0 imagen.png",
    "desc": "Offset"
   },
   {
    "cmd": "zsteg -f jpg imagen.png",
    "desc": "Formato"
   },
   {
    "cmd": "zsteg -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "md5deep",
  "desc": "Calcular hashes MD5 masivamente",
  "commands": [
   {
    "cmd": "md5deep archivo",
    "desc": "Hash de archivo"
   },
   {
    "cmd": "md5deep -r dir/",
    "desc": "Recursivo"
   },
   {
    "cmd": "md5deep -l archivo",
    "desc": "Solo hash"
   },
   {
    "cmd": "md5deep -c sha1 -r dir/",
    "desc": "SHA1"
   },
   {
    "cmd": "md5deep -c sha256 archivo",
    "desc": "SHA256"
   },
   {
    "cmd": "md5deep -j /tmp/log -r dir/",
    "desc": "Log"
   },
   {
    "cmd": "md5deep -a -k hashes.txt -r dir/",
    "desc": "Auditoría"
   },
   {
    "cmd": "md5deep -x -k hashes.txt dir/",
    "desc": "Negativo"
   },
   {
    "cmd": "md5deep -e -r dir/",
    "desc": "Solo errores"
   },
   {
    "cmd": "md5deep -m -k hashes.txt dir/",
    "desc": "Match"
   },
   {
    "cmd": "md5deep -t out.txt -r dir/",
    "desc": "Salida"
   },
   {
    "cmd": "md5deep -n 100 -r dir/",
    "desc": "Min tamaño"
   },
   {
    "cmd": "md5deep -s 10 -r dir/",
    "desc": "Skip"
   },
   {
    "cmd": "md5deep -v archivo",
    "desc": "Verbose"
   }
  ]
 },
 {
  "tool": "imagemagick",
  "desc": "Procesar imágenes (forense y estego)",
  "commands": [
   {
    "cmd": "identify imagen.png",
    "desc": "Info"
   },
   {
    "cmd": "identify -verbose imagen.png",
    "desc": "Verbose"
   },
   {
    "cmd": "identify -format '%wx%h' imagen.png",
    "desc": "Dimensiones"
   },
   {
    "cmd": "convert imagen.png out.jpg",
    "desc": "Convertir"
   },
   {
    "cmd": "convert imagen.png -stegano 0 out.png",
    "desc": "Estego (LSB)"
   },
   {
    "cmd": "convert out.png -stegano -1 imagen.png",
    "desc": "Extraer estego"
   },
   {
    "cmd": "convert imagen.png -extract 100x100+10+10 out.png",
    "desc": "Recorte"
   },
   {
    "cmd": "convert imagen.png -colorspace gray out.png",
    "desc": "Escala grises"
   },
   {
    "cmd": "convert imagen.png -contrast-stretch 5%x5% out.png",
    "desc": "Mejorar contraste"
   },
   {
    "cmd": "convert imagen.png -resize 200% out.png",
    "desc": "Redimensionar"
   },
   {
    "cmd": "convert imagen.png -alpha extract out.png",
    "desc": "Canal alfa"
   },
   {
    "cmd": "convert imagen.png -fuzz 10% -trim out.png",
    "desc": "Recortar bordes"
   },
   {
    "cmd": "convert imagen.png -negate out.png",
    "desc": "Negativo"
   },
   {
    "cmd": "compare imagen1.png imagen2.png diff.png",
    "desc": "Comparar"
   },
   {
    "cmd": "convert imagen.png txt:",
    "desc": "Píxeles"
   }
  ]
 },
 {
  "tool": "jhead",
  "desc": "Manipular metadatos JPEG",
  "commands": [
   {
    "cmd": "jhead foto.jpg",
    "desc": "Ver metadatos"
   },
   {
    "cmd": "jhead -v foto.jpg",
    "desc": "Verbose"
   },
   {
    "cmd": "jhead -mv foto.jpg",
    "desc": "Mover por fecha"
   },
   {
    "cmd": "jhead -ft foto.jpg",
    "desc": "Fecha del file system"
   },
   {
    "cmd": "jhead -ce foto.jpg",
    "desc": "Comentar"
   },
   {
    "cmd": "jhead -di foto.jpg",
    "desc": "Deleting IPTC"
   },
   {
    "cmd": "jhead -dc foto.jpg",
    "desc": "Borrar comentario"
   },
   {
    "cmd": "jhead -de foto.jpg",
    "desc": "Borrar exif"
   },
   {
    "cmd": "jhead -purejpg foto.jpg",
    "desc": "Quitar todo"
   },
   {
    "cmd": "jhead -du foto.jpg",
    "desc": "Quitar duplicados"
   },
   {
    "cmd": "jhead -norot foto.jpg",
    "desc": "Sin rotación"
   },
   {
    "cmd": "jhead -q foto.jpg",
    "desc": "Quiet"
   }
  ]
 },
 {
  "tool": "exifprobe",
  "desc": "Inspeccionar metadatos Exif en profundidad",
  "commands": [
   {
    "cmd": "exifprobe imagen.jpg",
    "desc": "Inspeccionar"
   },
   {
    "cmd": "exifprobe -l imagen.jpg",
    "desc": "Detallado"
   },
   {
    "cmd": "exifprobe -v imagen.jpg",
    "desc": "Verbose"
   },
   {
    "cmd": "exifprobe -t imagen.jpg",
    "desc": "Tabular"
   },
   {
    "cmd": "exifprobe -m imagen.jpg",
    "desc": "Modelo"
   },
   {
    "cmd": "exifprobe -p imagen.jpg",
    "desc": "Print"
   },
   {
    "cmd": "exifprobe -s imagen.jpg",
    "desc": "Sin datos"
   },
   {
    "cmd": "exifprobe -d imagen.jpg",
    "desc": "Raw dump"
   },
   {
    "cmd": "exifprobe -c imagen.jpg",
    "desc": "Con valores"
   },
   {
    "cmd": "exifprobe -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "clamav",
  "desc": "Escaneo de malware (ClamAV)",
  "commands": [
   {
    "cmd": "clamscan /tmp/sample",
    "desc": "Escanear"
   },
   {
    "cmd": "clamscan -r /home/",
    "desc": "Recursivo"
   },
   {
    "cmd": "clamscan -r -i /home/",
    "desc": "Solo infectados"
   },
   {
    "cmd": "clamscan -r --remove /tmp/",
    "desc": "Borrar"
   },
   {
    "cmd": "clamscan -r --move=/quarantine /tmp/",
    "desc": "Cuarentena"
   },
   {
    "cmd": "clamscan -r --log=/tmp/clam.log /tmp/",
    "desc": "Log"
   },
   {
    "cmd": "clamscan -r --bell /tmp/",
    "desc": "Campana"
   },
   {
    "cmd": "clamscan -r --exclude-dir=proc --exclude-dir=sys /",
    "desc": "Excluir"
   },
   {
    "cmd": "clamscan --scan-pe=yes file.exe",
    "desc": "PE"
   },
   {
    "cmd": "clamscan --scan-pdf=yes file.pdf",
    "desc": "PDF"
   },
   {
    "cmd": "clamscan --scan-archive=yes file.zip",
    "desc": "Archivo"
   },
   {
    "cmd": "clamscan -z file",
    "desc": "Sin archivos"
   },
   {
    "cmd": "clamscan --max-filesize=50M -r /",
    "desc": "Tamaño máx"
   },
   {
    "cmd": "freshclam",
    "desc": "Actualizar DB"
   },
   {
    "cmd": "freshclam -d",
    "desc": "Daemon"
   },
   {
    "cmd": "clamdscan file",
    "desc": "Clamd"
   },
   {
    "cmd": "clamdscan -c /etc/clamav/clamd.conf file",
    "desc": "Config"
   }
  ]
 },
 {
  "tool": "malware-sandbox",
  "desc": "Análisis dinámico de malware (strace, ltrace, gdb)",
  "commands": [
   {
    "cmd": "strace -f -o /tmp/trace ./sample",
    "desc": "Trazar syscalls"
   },
   {
    "cmd": "strace -e trace=network ./sample",
    "desc": "Solo red"
   },
   {
    "cmd": "strace -e trace=file ./sample",
    "desc": "Solo archivos"
   },
   {
    "cmd": "strace -e trace=process ./sample",
    "desc": "Procesos"
   },
   {
    "cmd": "ltrace -f -o /tmp/ltrace ./sample",
    "desc": "Ltrace"
   },
   {
    "cmd": "ltrace -e printf ./sample",
    "desc": "Solo printf"
   },
   {
    "cmd": "ltrace -c ./sample",
    "desc": "Contar llamadas"
   },
   {
    "cmd": "gdb -batch -ex 'run' -ex 'bt' ./sample",
    "desc": "Backtrace"
   },
   {
    "cmd": "gdb -batch -ex 'break main' -ex 'run' -ex 'info registers' ./sample",
    "desc": "Registers"
   },
   {
    "cmd": "gdb -batch -ex 'catch syscall execve' -ex 'run' -ex 'bt' ./sample",
    "desc": "Execve catch"
   },
   {
    "cmd": "strings sample | head -50",
    "desc": "Strings"
   },
   {
    "cmd": "objdump -d sample | head -100",
    "desc": "Disas"
   },
   {
    "cmd": "readelf -h sample",
    "desc": "Header"
   },
   {
    "cmd": "readelf -d sample",
    "desc": "Dynamic"
   },
   {
    "cmd": "nm -D sample | head",
    "desc": "Symbols"
   },
   {
    "cmd": "file sample",
    "desc": "Tipo"
   },
   {
    "cmd": "ldd sample",
    "desc": "Libraries"
   },
   {
    "cmd": "sha256sum sample",
    "desc": "Hash"
   },
   {
    "cmd": "xxd sample | head -30",
    "desc": "Hex dump"
   },
   {
    "cmd": "time ./sample",
    "desc": "Tiempo"
   }
  ]
 },
 {
  "tool": "mem-dump-tools",
  "desc": "Dump de memoria y análisis de procesos",
  "commands": [
   {
    "cmd": "gcore PID",
    "desc": "Core dump"
   },
   {
    "cmd": "gcore -o /tmp/core PID",
    "desc": "A archivo"
   },
   {
    "cmd": "gdb -p PID -batch -ex 'dump memory /tmp/mem 0x0 0x7fffffffffff'",
    "desc": "Dump mem"
   },
   {
    "cmd": "dd if=/proc/PID/mem of=/tmp/mem bs=1M count=10 2>/dev/null || true",
    "desc": "Dd mem"
   },
   {
    "cmd": "cat /proc/PID/maps | head",
    "desc": "Mapas"
   },
   {
    "cmd": "cat /proc/PID/environ | tr '\\0' '\\n'",
    "desc": "Env vars"
   },
   {
    "cmd": "cat /proc/PID/cmdline | tr '\\0' ' '",
    "desc": "Cmdline"
   },
   {
    "cmd": "ls -la /proc/PID/fd",
    "desc": "Fds"
   },
   {
    "cmd": "cat /proc/PID/status | head -20",
    "desc": "Status"
   },
   {
    "cmd": "strings /proc/PID/environ",
    "desc": "Strings env"
   },
   {
    "cmd": "grep -r '' /proc/PID/net/tcp",
    "desc": "Conexiones"
   },
   {
    "cmd": "kill -9 PID",
    "desc": "Matar"
   },
   {
    "cmd": "sleep 100 & echo $!",
    "desc": "BG pid"
   },
   {
    "cmd": "volatility -f /tmp/mem imageinfo",
    "desc": "Volatility"
   }
  ]
 },
 {
  "tool": "wireshark-tshark-cli",
  "desc": "Wireshark CLI (capturas y filtros)",
  "commands": [
   {
    "cmd": "tshark -i eth0 -c 100",
    "desc": "Capturar 100"
   },
   {
    "cmd": "tshark -i eth0 -w cap.pcap",
    "desc": "Guardar"
   },
   {
    "cmd": "tshark -i eth0 -Y 'http'",
    "desc": "Filtro live"
   },
   {
    "cmd": "tshark -i eth0 -f 'port 80'",
    "desc": "Filtro BPF"
   },
   {
    "cmd": "tshark -i eth0 -T fields -e ip.src -e ip.dst -e tcp.port",
    "desc": "Campos"
   },
   {
    "cmd": "tshark -i eth0 -z io,phs",
    "desc": "Protocol hierarchy"
   },
   {
    "cmd": "tshark -i eth0 -z conv,ip",
    "desc": "Conversaciones"
   },
   {
    "cmd": "tshark -i lo -f 'port 4444'",
    "desc": "Loopback"
   },
   {
    "cmd": "dumpcap -i eth0 -b filesize:1024 -w cap.pcapng",
    "desc": "Dumpcap"
   },
   {
    "cmd": "dumpcap -i eth0 -a duration:60 -w cap.pcapng",
    "desc": "60s"
   },
   {
    "cmd": "editcap -A '2026-01-01 00:00:00' -B '2026-01-02 00:00:00' in.pcap out.pcap",
    "desc": "Rango"
   },
   {
    "cmd": "capinfos -a cap.pcap",
    "desc": "Info"
   },
   {
    "cmd": "mergecap -w all.pcap a.pcap b.pcap",
    "desc": "Merge"
   },
   {
    "cmd": "text2pcap -T 80,80 http.txt out.pcap",
    "desc": "Texto a pcap"
   },
   {
    "cmd": "tshark -r cap.pcap -q -z endpoints,tcp",
    "desc": "Endpoints"
   }
  ]
 },
 {
  "tool": "autopsy-extra",
  "desc": "Autopsy (forense GUI)",
  "commands": [
   {
    "cmd": "autopsy",
    "desc": "Abrir GUI"
   },
   {
    "cmd": "autopsy --no-browser",
    "desc": "Sin browser"
   },
   {
    "cmd": "autopsy --port 9999",
    "desc": "Puerto"
   },
   {
    "cmd": "curl -s http://localhost:9999/",
    "desc": "Verificar"
   },
   {
    "cmd": "ls /var/lib/autopsy/",
    "desc": "Cases"
   },
   {
    "cmd": "cat /var/lib/autopsy/case.conf 2>/dev/null",
    "desc": "Config"
   },
   {
    "cmd": "apt install autopsy sleuthkit",
    "desc": "Instalar"
   },
   {
    "cmd": "tsk_recover -e /dev/sdb1 /tmp/out",
    "desc": "Recuperar"
   },
   {
    "cmd": "tsk_analyze -i /dev/sdb1",
    "desc": "Analizar"
   },
   {
    "cmd": "fls -r /dev/sdb1 | head",
    "desc": "Listar files"
   },
   {
    "cmd": "fls -o 2048 -r imagen.dd",
    "desc": "Con offset"
   },
   {
    "cmd": "fsstat /dev/sdb1",
    "desc": "FS stats"
   },
   {
    "cmd": "icat /dev/sdb1 INODE",
    "desc": "Leer inode"
   },
   {
    "cmd": "istat /dev/sdb1 INODE",
    "desc": "Info inode"
   },
   {
    "cmd": "mmls imagen.dd",
    "desc": "Particiones"
   }
  ]
 },
 {
  "tool": "forensic-imaging",
  "desc": "Imágenes forenses (dd, dcfldd, ewfacquire)",
  "commands": [
   {
    "cmd": "dd if=/dev/sdb1 of=image.dd bs=4M status=progress",
    "desc": "Imagen"
   },
   {
    "cmd": "dd if=/dev/sdb1 of=image.dd bs=4096 conv=noerror,sync",
    "desc": "Con error sync"
   },
   {
    "cmd": "dcfldd if=/dev/sdb1 of=image.dd bs=4M hash=sha256 hashlog=/tmp/hash",
    "desc": "Dcfldd"
   },
   {
    "cmd": "dcfldd if=/dev/sdb1 of=image.dd split=2G",
    "desc": "Split"
   },
   {
    "cmd": "ewfacquire /dev/sdb1",
    "desc": "Formato EWF"
   },
   {
    "cmd": "ewfacquire -t image -C case -N num /dev/sdb1",
    "desc": "EWF metadata"
   },
   {
    "cmd": "ewfverify image.E01",
    "desc": "Verificar"
   },
   {
    "cmd": "guymager",
    "desc": "GUI imaging"
   },
   {
    "cmd": "sha256sum image.dd > hash.txt",
    "desc": "Hash"
   },
   {
    "cmd": "verify hash.txt",
    "desc": "Verificar hash"
   },
   {
    "cmd": "gzip -9 -c image.dd > image.dd.gz",
    "desc": "Comprimir"
   },
   {
    "cmd": "xz -9 image.dd",
    "desc": "Xz"
   },
   {
    "cmd": "mount -o loop,ro image.dd /mnt",
    "desc": "Montar ro"
   },
   {
    "cmd": "mount -o loop,offset=2048 image.dd /mnt",
    "desc": "Con offset"
   },
   {
    "cmd": "lshw -C disk | head -30",
    "desc": "Discos"
   },
   {
    "cmd": "fdisk -l /dev/sdb",
    "desc": "Particiones"
   }
  ]
 },
 {
  "tool": "bulk_extractor",
  "desc": "Extracción masiva de artefactos",
  "commands": [
   {
    "cmd": "bulk_extractor -o /tmp/out imagen.dd",
    "desc": "Extraer"
   },
   {
    "cmd": "bulk_extractor -o /tmp/out -x all -e net -e email -e file imagen.dd",
    "desc": "Selección"
   },
   {
    "cmd": "bulk_extractor -o /tmp/out -S ssn_mode=1 imagen.dd",
    "desc": "SSN"
   },
   {
    "cmd": "bulk_extractor -o /tmp/out -S url_mode=1 imagen.dd",
    "desc": "URLs"
   },
   {
    "cmd": "bulk_extractor -o /tmp/out -S words_mode=1 imagen.dd",
    "desc": "Words"
   },
   {
    "cmd": "bulk_extractor -o /tmp/out -S carve_mode=1 imagen.dd",
    "desc": "Carve"
   },
   {
    "cmd": "bulk_extractor -o /tmp/out -R dir/",
    "desc": "Recursivo"
   },
   {
    "cmd": "bulk_extractor -o /tmp/out -e redis -e xml imagen.dd",
    "desc": "Extractores"
   },
   {
    "cmd": "bulk_extractor -o /tmp/out -b /tmp/block.bm imagen.dd",
    "desc": "Blockmap"
   },
   {
    "cmd": "bulk_extractor -o /tmp/out -s /tmp/out/report.xml imagen.dd",
    "desc": "Report"
   },
   {
    "cmd": "bulk_extractor -o /tmp/out -1 imagen.dd",
    "desc": "Perf"
   },
   {
    "cmd": "bulk_extractor -o /tmp/out -d 3 imagen.dd",
    "desc": "Debug"
   },
   {
    "cmd": "cat /tmp/out/url.txt | head -20",
    "desc": "URLs"
   },
   {
    "cmd": "cat /tmp/out/email.txt | head -20",
    "desc": "Emails"
   },
   {
    "cmd": "cat /tmp/out/telephone.txt | head",
    "desc": "Teléfonos"
   },
   {
    "cmd": "bulk_extractor -o /tmp/out --file=config.txt imagen.dd",
    "desc": "Config"
   }
  ]
 },
 {
  "tool": "log-analysis-forensic",
  "desc": "Análisis forense de logs",
  "commands": [
   {
    "cmd": "grep 'Failed password' /var/log/auth.log | awk '{print $(NF-3)}' | sort | uniq -c | sort -rn",
    "desc": "Top atacantes"
   },
   {
    "cmd": "grep 'Accepted' /var/log/auth.log | awk '{print $9}' | sort | uniq -c",
    "desc": "Logins"
   },
   {
    "cmd": "zgrep 'Failed' /var/log/auth.log.*.gz | wc -l",
    "desc": "Total fallidos"
   },
   {
    "cmd": "last -F -20",
    "desc": "Últimos con fecha"
   },
   {
    "cmd": "lastb -F -20",
    "desc": "Fallidos"
   },
   {
    "cmd": "journalctl --since '2026-01-01' --until '2026-01-02' | head",
    "desc": "Rango"
   },
   {
    "cmd": "grep -E 'sudo.*COMMAND' /var/log/auth.log | tail -20",
    "desc": "Sudo"
   },
   {
    "cmd": "awk '/Invalid user/ {print $8}' /var/log/auth.log | sort -u",
    "desc": "Usuarios"
   },
   {
    "cmd": "grep 'error' /var/log/syslog | tail -20",
    "desc": "Errores"
   },
   {
    "cmd": "ls -la /var/log/ | sort -k5 -n | tail",
    "desc": "Logs grandes"
   },
   {
    "cmd": "find /var/log -type f -mmin -60",
    "desc": "Recientes"
   },
   {
    "cmd": "cat /var/log/mysql/error.log 2>/dev/null | tail",
    "desc": "MySQL"
   },
   {
    "cmd": "grep -i 'attack\\|intrusion' /var/log/* 2>/dev/null | head",
    "desc": "Ataques"
   },
   {
    "cmd": "zcat /var/log/kern.log.*.gz | grep -i 'error' | head",
    "desc": "Kernel errores"
   }
  ]
 },
 {
  "tool": "mobile-forensics",
  "desc": "Forense de dispositivos móviles (ADB)",
  "commands": [
   {
    "cmd": "adb devices",
    "desc": "Dispositivos"
   },
   {
    "cmd": "adb shell getprop ro.product.model",
    "desc": "Modelo"
   },
   {
    "cmd": "adb shell ls /sdcard/",
    "desc": "SD"
   },
   {
    "cmd": "adb pull /sdcard/DCIM /tmp/",
    "desc": "Fotos"
   },
   {
    "cmd": "adb pull /data/data/com.whatsapp/databases/ /tmp/",
    "desc": "WhatsApp"
   },
   {
    "cmd": "adb shell dumpsys battery | head",
    "desc": "Batería"
   },
   {
    "cmd": "adb shell dumpsys telephony.registry | grep mCallState",
    "desc": "Telefonía"
   },
   {
    "cmd": "adb shell pm list packages | head -20",
    "desc": "Apps"
   },
   {
    "cmd": "adb shell dumpsys package com.android.chrome | head -20",
    "desc": "Chrome"
   },
   {
    "cmd": "adb shell dumpsys location | grep -A5 'last location'",
    "desc": "Ubicación"
   },
   {
    "cmd": "adb backup -f backup.ab -noapk com.whatsapp",
    "desc": "Backup"
   },
   {
    "cmd": "python3 -c 'import sys; print(\"use abe.jar\")'",
    "desc": "Abe"
   },
   {
    "cmd": "adb shell am start -a android.intent.action.VIEW -d https://x.com",
    "desc": "Abrir URL"
   },
   {
    "cmd": "adb shell screencap -p /sdcard/s.png && adb pull /sdcard/s.png",
    "desc": "Screenshot"
   },
   {
    "cmd": "adb shell input keyevent 26",
    "desc": "Botón power"
   },
   {
    "cmd": "adb logcat -d | grep -i 'password\\|token' | head",
    "desc": "Logcat"
   }
  ]
 },
 {
  "tool": "testdisk-photorec",
  "desc": "Recuperación de datos (testdisk, photorec)",
  "commands": [
   {
    "cmd": "testdisk /dev/sdb",
    "desc": "Testdisk"
   },
   {
    "cmd": "testdisk /dev/sdb1",
    "desc": "Partición"
   },
   {
    "cmd": "testdisk /tmp/image.dd",
    "desc": "Imagen"
   },
   {
    "cmd": "photorec /dev/sdb",
    "desc": "Photorec"
   },
   {
    "cmd": "photorec /dev/sdb1 -d /tmp/recover",
    "desc": "Salida"
   },
   {
    "cmd": "photorec -c /etc/photorec.settings /dev/sdb",
    "desc": "Settings"
   },
   {
    "cmd": "qphotorec",
    "desc": "GUI"
   },
   {
    "cmd": "photorec /tmp/img.dd -f /tmp/out -d /tmp/rec",
    "desc": "Imagen"
   },
   {
    "cmd": "testdisk -l /dev/sdb",
    "desc": "Listar"
   },
   {
    "cmd": "gpart -W /dev/sdb",
    "desc": "Gpart"
   },
   {
    "cmd": "fdisk -l /dev/sdb",
    "desc": "Ver"
   },
   {
    "cmd": "ddrescue /dev/sdb /tmp/img.dd /tmp/log",
    "desc": "Ddrescue"
   },
   {
    "cmd": "ddrescue -r3 /dev/sdb /tmp/img.dd",
    "desc": "Retries"
   },
   {
    "cmd": "ddrescue -d /dev/sdb /tmp/img.dd",
    "desc": "Directo"
   },
   {
    "cmd": "grep -a 'secret' /tmp/img.dd | head",
    "desc": "Grep imagen"
   },
   {
    "cmd": "foremost -i /tmp/img.dd -o /tmp/foremost",
    "desc": "Foremost"
   },
   {
    "cmd": "foremost -t jpg,pdf -i /tmp/img.dd -o /tmp/out",
    "desc": "Tipos"
   },
   {
    "cmd": "magicrescue -d /tmp/out -f all /dev/sdb",
    "desc": "Magicrescue"
   }
  ]
 },
 {
  "tool": "ffmpeg-tools",
  "desc": "Análisis multimedia forense (ffmpeg, exiftool)",
  "commands": [
   {
    "cmd": "ffmpeg -i video.mp4",
    "desc": "Info video"
   },
   {
    "cmd": "ffprobe video.mp4",
    "desc": "Probe"
   },
   {
    "cmd": "ffprobe -show_format video.mp4",
    "desc": "Formato"
   },
   {
    "cmd": "ffprobe -show_streams video.mp4",
    "desc": "Streams"
   },
   {
    "cmd": "ffprobe -show_frames -select_streams v video.mp4 | head",
    "desc": "Frames"
   },
   {
    "cmd": "ffmpeg -i video.mp4 -frames:v 1 shot.jpg",
    "desc": "Frame"
   },
   {
    "cmd": "ffmpeg -i video.mp4 -ss 00:01:00 -frames:v 1 -f image2 shot.jpg",
    "desc": "Frame t"
   },
   {
    "cmd": "ffmpeg -i video.mp4 -vf 'reverse' rev.mp4",
    "desc": "Reverse"
   },
   {
    "cmd": "ffmpeg -i video.mp4 -vf 'hue' out.mp4",
    "desc": "Hue"
   },
   {
    "cmd": "ffmpeg -i video.mp4 -metadata comment='x' out.mp4",
    "desc": "Metadata"
   },
   {
    "cmd": "ffmpeg -i video.mp4 -c:v libx264 -preset slow out.mp4",
    "desc": "Re-encode"
   },
   {
    "cmd": "ffmpeg -i audio.wav -af 'atempo=0.5' slow.wav",
    "desc": "Audio lento"
   },
   {
    "cmd": "ffmpeg -i audio.mp3 -filter:a 'volume=2' loud.mp3",
    "desc": "Volumen"
   },
   {
    "cmd": "exiftool video.mp4",
    "desc": "Exiftool"
   },
   {
    "cmd": "ffmpeg -i video.mp4 -an out.mp4",
    "desc": "Sin audio"
   },
   {
    "cmd": "ffmpeg -i video.mp4 -vn out.mp3",
    "desc": "Solo audio"
   },
   {
    "cmd": "ffmpeg -i video.mp4 -vf 'scale=320:240' small.mp4",
    "desc": "Escalar"
   },
   {
    "cmd": "ffmpeg -y -i cap.pcapng out.jpg 2>/dev/null || true",
    "desc": "De pcapng"
   }
  ]
 }
];
