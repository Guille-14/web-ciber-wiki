// Servicios del Sistema (System Services)
window.WIKI_CHEATSHEETS_20_SYSTEM_SERVICES = [
 {
  "tool": "systemctl",
  "desc": "Gestión de servicios systemd",
  "commands": [
   {
    "cmd": "systemctl status sshd",
    "desc": "Estado del servicio"
   },
   {
    "cmd": "systemctl start sshd",
    "desc": "Iniciar"
   },
   {
    "cmd": "systemctl stop sshd",
    "desc": "Parar"
   },
   {
    "cmd": "systemctl restart sshd",
    "desc": "Reiniciar"
   },
   {
    "cmd": "systemctl reload sshd",
    "desc": "Recargar"
   },
   {
    "cmd": "systemctl enable sshd",
    "desc": "Habilitar al boot"
   },
   {
    "cmd": "systemctl disable sshd",
    "desc": "Deshabilitar"
   },
   {
    "cmd": "systemctl is-active sshd",
    "desc": "¿Activo?"
   },
   {
    "cmd": "systemctl is-enabled sshd",
    "desc": "¿Habilitado?"
   },
   {
    "cmd": "systemctl list-units --type=service",
    "desc": "Servicios"
   },
   {
    "cmd": "systemctl list-units --state=running",
    "desc": "Running"
   },
   {
    "cmd": "systemctl list-unit-files --type=service",
    "desc": "Unit files"
   },
   {
    "cmd": "systemctl daemon-reload",
    "desc": "Recargar daemon"
   },
   {
    "cmd": "systemctl mask servicio",
    "desc": "Enmascarar"
   },
   {
    "cmd": "systemctl unmask servicio",
    "desc": "Desenmascarar"
   },
   {
    "cmd": "systemctl edit servicio",
    "desc": "Editar override"
   },
   {
    "cmd": "systemctl cat servicio",
    "desc": "Ver unit"
   },
   {
    "cmd": "systemctl show servicio",
    "desc": "Mostrar propiedades"
   },
   {
    "cmd": "systemctl kill --kill-who=all servicio",
    "desc": "Matar"
   },
   {
    "cmd": "systemctl reboot",
    "desc": "Reiniciar sistema"
   },
   {
    "cmd": "systemctl poweroff",
    "desc": "Apagar"
   },
   {
    "cmd": "systemctl suspend",
    "desc": "Suspender"
   },
   {
    "cmd": "systemctl get-default",
    "desc": "Default target"
   },
   {
    "cmd": "systemctl set-default multi-user.target",
    "desc": "CLI target"
   }
  ]
 },
 {
  "tool": "ss",
  "desc": "Socket statistics (reemplaza netstat)",
  "commands": [
   {
    "cmd": "ss -tulpn",
    "desc": "Puertos TCP/UDP listening"
   },
   {
    "cmd": "ss -t",
    "desc": "Conexiones TCP"
   },
   {
    "cmd": "ss -u",
    "desc": "UDP"
   },
   {
    "cmd": "ss -l",
    "desc": "Listening"
   },
   {
    "cmd": "ss -a",
    "desc": "Todas"
   },
   {
    "cmd": "ss -n",
    "desc": "Sin resolver"
   },
   {
    "cmd": "ss -p",
    "desc": "Procesos"
   },
   {
    "cmd": "ss -s",
    "desc": "Resumen"
   },
   {
    "cmd": "ss -tn state established",
    "desc": "Establecidas"
   },
   {
    "cmd": "ss -tunap",
    "desc": "Todo"
   },
   {
    "cmd": "ss -tnlp | grep ':80'",
    "desc": "Puerto 80"
   },
   {
    "cmd": "ss -i",
    "desc": "Info interna"
   },
   {
    "cmd": "ss -o",
    "desc": "Timers"
   },
   {
    "cmd": "ss -m",
    "desc": "Memoria"
   },
   {
    "cmd": "ss -4",
    "desc": "Solo IPv4"
   },
   {
    "cmd": "ss -6",
    "desc": "Solo IPv6"
   },
   {
    "cmd": "ss -H",
    "desc": "Sin headers"
   },
   {
    "cmd": "ss -r",
    "desc": "Resolver"
   }
  ]
 },
 {
  "tool": "netstat",
  "desc": "Estadísticas de red (legacy)",
  "commands": [
   {
    "cmd": "netstat -tulpn",
    "desc": "Puertos"
   },
   {
    "cmd": "netstat -a",
    "desc": "Todas"
   },
   {
    "cmd": "netstat -r",
    "desc": "Rutas"
   },
   {
    "cmd": "netstat -i",
    "desc": "Interfaces"
   },
   {
    "cmd": "netstat -s",
    "desc": "Estadísticas"
   },
   {
    "cmd": "netstat -an",
    "desc": "Numérico"
   },
   {
    "cmd": "netstat -t",
    "desc": "TCP"
   },
   {
    "cmd": "netstat -u",
    "desc": "UDP"
   },
   {
    "cmd": "netstat -l",
    "desc": "Listening"
   },
   {
    "cmd": "netstat -p",
    "desc": "Procesos"
   },
   {
    "cmd": "netstat -c",
    "desc": "Continuo"
   },
   {
    "cmd": "netstat -e",
    "desc": "Extended"
   },
   {
    "cmd": "netstat -g",
    "desc": "Multicast"
   },
   {
    "cmd": "netstat -M",
    "desc": "Masquerade"
   },
   {
    "cmd": "netstat -v",
    "desc": "Verbose"
   }
  ]
 },
 {
  "tool": "lsof",
  "desc": "Listar archivos abiertos",
  "commands": [
   {
    "cmd": "lsof -i",
    "desc": "Conexiones de red"
   },
   {
    "cmd": "lsof -i :80",
    "desc": "Puerto 80"
   },
   {
    "cmd": "lsof -iTCP -sTCP:LISTEN",
    "desc": "Servicios listening"
   },
   {
    "cmd": "lsof -iUDP",
    "desc": "UDP"
   },
   {
    "cmd": "lsof -p PID",
    "desc": "Procesos"
   },
   {
    "cmd": "lsof -u usuario",
    "desc": "Por usuario"
   },
   {
    "cmd": "lsof +D /tmp",
    "desc": "Directorio"
   },
   {
    "cmd": "lsof -c nombre",
    "desc": "Comando"
   },
   {
    "cmd": "lsof /var/log/syslog",
    "desc": "Archivo abierto"
   },
   {
    "cmd": "lsof -i@IP",
    "desc": "IP específica"
   },
   {
    "cmd": "lsof -n -i",
    "desc": "Sin resolver"
   },
   {
    "cmd": "lsof -t /var/log/syslog",
    "desc": "Solo PIDs"
   },
   {
    "cmd": "lsof -i :22 -sTCP:ESTABLISHED",
    "desc": "SSH establecido"
   },
   {
    "cmd": "lsof -a -p PID -i",
    "desc": "Filtrar proceso+red"
   },
   {
    "cmd": "lsof -V",
    "desc": "Verbose"
   }
  ]
 },
 {
  "tool": "ps",
  "desc": "Procesos del sistema",
  "commands": [
   {
    "cmd": "ps aux",
    "desc": "Todos los procesos"
   },
   {
    "cmd": "ps -ef",
    "desc": "Formato completo"
   },
   {
    "cmd": "ps -ef --forest",
    "desc": "Árbol"
   },
   {
    "cmd": "ps aux --sort=-%mem",
    "desc": "Por memoria"
   },
   {
    "cmd": "ps aux --sort=-%cpu",
    "desc": "Por CPU"
   },
   {
    "cmd": "ps aux | grep nginx",
    "desc": "Filtrar"
   },
   {
    "cmd": "ps -u usuario",
    "desc": "Por usuario"
   },
   {
    "cmd": "ps -p PID",
    "desc": "PID específico"
   },
   {
    "cmd": "ps -C sshd",
    "desc": "Por comando"
   },
   {
    "cmd": "ps -eo pid,ppid,cmd",
    "desc": "Campos custom"
   },
   {
    "cmd": "ps -eo pid,user,comm --sort=pid",
    "desc": "Ordenado"
   },
   {
    "cmd": "ps --ppid 1",
    "desc": "Hijos de PID 1"
   },
   {
    "cmd": "ps -L -p PID",
    "desc": "Hilos"
   },
   {
    "cmd": "ps -w w",
    "desc": "Wide output"
   },
   {
    "cmd": "ps -o pid,stat",
    "desc": "Estado"
   }
  ]
 },
 {
  "tool": "top",
  "desc": "Monitor de procesos en tiempo real",
  "commands": [
   {
    "cmd": "top",
    "desc": "Abrir"
   },
   {
    "cmd": "top -b",
    "desc": "Batch"
   },
   {
    "cmd": "top -b -n 1",
    "desc": "Una iteración"
   },
   {
    "cmd": "top -p PID1,PID2",
    "desc": "PIDs específicos"
   },
   {
    "cmd": "top -u usuario",
    "desc": "Por usuario"
   },
   {
    "cmd": "top -d 2",
    "desc": "Delay 2s"
   },
   {
    "cmd": "top -H -p PID",
    "desc": "Hilos de proceso"
   },
   {
    "cmd": "top -o %MEM",
    "desc": "Ordenar por memoria"
   },
   {
    "cmd": "top -i",
    "desc": "Ignorar idle"
   },
   {
    "cmd": "top -c",
    "desc": "Command line"
   },
   {
    "cmd": "top -w 200",
    "desc": "Ancho"
   },
   {
    "cmd": "top -v",
    "desc": "Versión"
   }
  ]
 },
 {
  "tool": "htop",
  "desc": "Monitor interactivo de procesos",
  "commands": [
   {
    "cmd": "htop",
    "desc": "Abrir"
   },
   {
    "cmd": "htop -u usuario",
    "desc": "Por usuario"
   },
   {
    "cmd": "htop -p PID",
    "desc": "PID"
   },
   {
    "cmd": "htop -d 5",
    "desc": "Delay"
   },
   {
    "cmd": "htop -t",
    "desc": "Árbol"
   },
   {
    "cmd": "htop -s PERCENT_CPU",
    "desc": "Sort"
   },
   {
    "cmd": "htop -C",
    "desc": "Sin color"
   },
   {
    "cmd": "htop -v",
    "desc": "Versión"
   }
  ]
 },
 {
  "tool": "at",
  "desc": "Programar tareas (one-shot)",
  "commands": [
   {
    "cmd": "echo 'whoami' | at now",
    "desc": "Ejecutar ya"
   },
   {
    "cmd": "echo 'whoami' | at now + 1 minute",
    "desc": "En 1 min"
   },
   {
    "cmd": "echo 'whoami' | at 10:30",
    "desc": "A las 10:30"
   },
   {
    "cmd": "echo 'whoami' | at 10:30 2026-01-01",
    "desc": "Con fecha"
   },
   {
    "cmd": "echo 'whoami' | at noon",
    "desc": "Al mediodía"
   },
   {
    "cmd": "atq",
    "desc": "Listar tareas"
   },
   {
    "cmd": "atrm 1",
    "desc": "Borrar tarea 1"
   },
   {
    "cmd": "at -l",
    "desc": "Listar"
   },
   {
    "cmd": "at -c 1",
    "desc": "Ver contenido"
   }
  ]
 },
 {
  "tool": "crontab",
  "desc": "Programar tareas periódicas",
  "commands": [
   {
    "cmd": "crontab -l",
    "desc": "Listar"
   },
   {
    "cmd": "crontab -e",
    "desc": "Editar"
   },
   {
    "cmd": "crontab -r",
    "desc": "Borrar"
   },
   {
    "cmd": "crontab -u usuario -l",
    "desc": "De otro usuario"
   },
   {
    "cmd": "crontab -u usuario -e",
    "desc": "Editar otro"
   },
   {
    "cmd": "echo '* * * * * whoami' | crontab -",
    "desc": "Añadir tarea"
   },
   {
    "cmd": "echo '0 3 * * * /script.sh' | crontab -",
    "desc": "Diario a las 3"
   },
   {
    "cmd": "echo '*/5 * * * * /x.sh' | crontab -",
    "desc": "Cada 5 min"
   },
   {
    "cmd": "echo '0 0 * * 0 /x.sh' | crontab -",
    "desc": "Domingos"
   },
   {
    "cmd": "grep -r 'CRON' /var/log/syslog",
    "desc": "Logs de cron"
   }
  ]
 },
 {
  "tool": "rsyslog",
  "desc": "Servicio de logging del sistema",
  "commands": [
   {
    "cmd": "systemctl status rsyslog",
    "desc": "Estado"
   },
   {
    "cmd": "systemctl restart rsyslog",
    "desc": "Reiniciar"
   },
   {
    "cmd": "logger 'mensaje'",
    "desc": "Enviar log"
   },
   {
    "cmd": "logger -t tag 'mensaje'",
    "desc": "Con tag"
   },
   {
    "cmd": "logger -p local0.info 'mensaje'",
    "desc": "Facility"
   },
   {
    "cmd": "logger -s 'mensaje'",
    "desc": "También a stderr"
   },
   {
    "cmd": "logger -f file.log",
    "desc": "De archivo"
   },
   {
    "cmd": "logger --id 'mensaje'",
    "desc": "Con PID"
   },
   {
    "cmd": "tail -f /var/log/syslog",
    "desc": "Ver logs"
   },
   {
    "cmd": "grep -i error /var/log/syslog",
    "desc": "Errores"
   }
  ]
 },
 {
  "tool": "journalctl",
  "desc": "Logs de systemd",
  "commands": [
   {
    "cmd": "journalctl -xe",
    "desc": "Últimos errores"
   },
   {
    "cmd": "journalctl -u sshd",
    "desc": "Servicio"
   },
   {
    "cmd": "journalctl -u sshd -f",
    "desc": "Follow"
   },
   {
    "cmd": "journalctl --since '1 hour ago'",
    "desc": "Desde hace 1h"
   },
   {
    "cmd": "journalctl --since today",
    "desc": "Desde hoy"
   },
   {
    "cmd": "journalctl --until '2026-01-01'",
    "desc": "Hasta"
   },
   {
    "cmd": "journalctl -p err",
    "desc": "Solo errores"
   },
   {
    "cmd": "journalctl -b",
    "desc": "Boot actual"
   },
   {
    "cmd": "journalctl -b -1",
    "desc": "Boot anterior"
   },
   {
    "cmd": "journalctl --list-boots",
    "desc": "Listar boots"
   },
   {
    "cmd": "journalctl -k",
    "desc": "Kernel"
   },
   {
    "cmd": "journalctl -f",
    "desc": "Follow"
   },
   {
    "cmd": "journalctl --disk-usage",
    "desc": "Espacio"
   },
   {
    "cmd": "journalctl --vacuum-size=100M",
    "desc": "Limpiar"
   },
   {
    "cmd": "journalctl -n 50",
    "desc": "Últimas 50"
   },
   {
    "cmd": "journalctl --no-pager",
    "desc": "Sin pager"
   },
   {
    "cmd": "journalctl _SYSTEMD_UNIT=sshd.service",
    "desc": "Filtrar"
   },
   {
    "cmd": "journalctl -o json",
    "desc": "JSON"
   }
  ]
 },
 {
  "tool": "mount",
  "desc": "Montar sistemas de archivos",
  "commands": [
   {
    "cmd": "mount",
    "desc": "Listar montajes"
   },
   {
    "cmd": "mount -t ext4 /dev/sdb1 /mnt",
    "desc": "Montar"
   },
   {
    "cmd": "mount -o loop imagen.iso /mnt",
    "desc": "ISO"
   },
   {
    "cmd": "mount -o ro /dev/sdb1 /mnt",
    "desc": "Read-only"
   },
   {
    "cmd": "mount -o remount,rw /",
    "desc": "Remontar RW"
   },
   {
    "cmd": "mount -o bind /dir /mnt",
    "desc": "Bind mount"
   },
   {
    "cmd": "mount -a",
    "desc": "Montar fstab"
   },
   {
    "cmd": "mount -l",
    "desc": "Con labels"
   },
   {
    "cmd": "umount /mnt",
    "desc": "Desmontar"
   },
   {
    "cmd": "umount -l /mnt",
    "desc": "Lazy"
   },
   {
    "cmd": "umount -f /mnt",
    "desc": "Forzar"
   },
   {
    "cmd": "mount -t cifs //server/share /mnt -o user=x",
    "desc": "CIFS"
   },
   {
    "cmd": "mount -t nfs server:/dir /mnt",
    "desc": "NFS"
   },
   {
    "cmd": "mount --make-rshared /",
    "desc": "Shared"
   },
   {
    "cmd": "df -h",
    "desc": "Espacio"
   }
  ]
 },
 {
  "tool": "useradd",
  "desc": "Crear usuarios",
  "commands": [
   {
    "cmd": "useradd -m -s /bin/bash usuario",
    "desc": "Crear con home"
   },
   {
    "cmd": "useradd -M usuario",
    "desc": "Sin home"
   },
   {
    "cmd": "useradd -u 1500 usuario",
    "desc": "UID"
   },
   {
    "cmd": "useradd -g grupo usuario",
    "desc": "Grupo principal"
   },
   {
    "cmd": "useradd -G sudo,adm usuario",
    "desc": "Grupos extra"
   },
   {
    "cmd": "useradd -d /home/custom usuario",
    "desc": "Home custom"
   },
   {
    "cmd": "useradd -e 2026-12-31 usuario",
    "desc": "Expiración"
   },
   {
    "cmd": "useradd -s /sbin/nologin usuario",
    "desc": "Sin shell"
   },
   {
    "cmd": "useradd -c 'Comentario' usuario",
    "desc": "Comentario"
   },
   {
    "cmd": "useradd -r usuario",
    "desc": "Sistema"
   },
   {
    "cmd": "useradd -p 'hash' usuario",
    "desc": "Con password"
   },
   {
    "cmd": "passwd usuario",
    "desc": "Cambiar password"
   },
   {
    "cmd": "usermod -aG docker usuario",
    "desc": "Añadir a grupo"
   },
   {
    "cmd": "userdel usuario",
    "desc": "Borrar"
   },
   {
    "cmd": "userdel -r usuario",
    "desc": "Borrar con home"
   },
   {
    "cmd": "id usuario",
    "desc": "Info"
   },
   {
    "cmd": "groupadd grupo",
    "desc": "Crear grupo"
   },
   {
    "cmd": "groupdel grupo",
    "desc": "Borrar grupo"
   }
  ]
 },
 {
  "tool": "sudo",
  "desc": "Ejecutar comandos como root",
  "commands": [
   {
    "cmd": "sudo whoami",
    "desc": "Ejecutar"
   },
   {
    "cmd": "sudo -l",
    "desc": "Listar permisos"
   },
   {
    "cmd": "sudo -u usuario comando",
    "desc": "Como otro usuario"
   },
   {
    "cmd": "sudo -i",
    "desc": "Shell de login root"
   },
   {
    "cmd": "sudo -s",
    "desc": "Shell root"
   },
   {
    "cmd": "sudo -k",
    "desc": "Invalidar cache"
   },
   {
    "cmd": "sudo -v",
    "desc": "Actualizar timestamp"
   },
   {
    "cmd": "sudo -b comando",
    "desc": "Background"
   },
   {
    "cmd": "sudo -H comando",
    "desc": "HOME root"
   },
   {
    "cmd": "sudo -E comando",
    "desc": "Preservar env"
   },
   {
    "cmd": "sudo --preserve-env=VAR comando",
    "desc": "Preservar var"
   },
   {
    "cmd": "sudo -e /etc/sudoers",
    "desc": "Editar sudoers"
   },
   {
    "cmd": "sudo -l -U usuario",
    "desc": "Permisos de otro"
   },
   {
    "cmd": "sudo -p 'pass: ' comando",
    "desc": "Prompt custom"
   },
   {
    "cmd": "sudo -n comando",
    "desc": "Sin prompt"
   },
   {
    "cmd": "sudo -h",
    "desc": "Ayuda"
   },
   {
    "cmd": "sudo !!",
    "desc": "Reejecutar último"
   },
   {
    "cmd": "visudo",
    "desc": "Editar sudoers seguro"
   },
   {
    "cmd": "sudo cat /etc/sudoers",
    "desc": "Ver sudoers"
   }
  ]
 },
 {
  "tool": "chmod",
  "desc": "Cambiar permisos",
  "commands": [
   {
    "cmd": "chmod 755 archivo",
    "desc": "rwxr-xr-x"
   },
   {
    "cmd": "chmod 644 archivo",
    "desc": "rw-r--r--"
   },
   {
    "cmd": "chmod 777 archivo",
    "desc": "Todos"
   },
   {
    "cmd": "chmod +x archivo",
    "desc": "Añadir exec"
   },
   {
    "cmd": "chmod -R 755 dir/",
    "desc": "Recursivo"
   },
   {
    "cmd": "chmod u+x archivo",
    "desc": "Solo owner"
   },
   {
    "cmd": "chmod g+w archivo",
    "desc": "Grupo write"
   },
   {
    "cmd": "chmod o-r archivo",
    "desc": "Quitar other read"
   },
   {
    "cmd": "chmod a+x archivo",
    "desc": "Todos exec"
   },
   {
    "cmd": "chmod u+s archivo",
    "desc": "SUID"
   },
   {
    "cmd": "chmod g+s dir",
    "desc": "SGID"
   },
   {
    "cmd": "chmod +t dir",
    "desc": "Sticky bit"
   },
   {
    "cmd": "chmod 4755 archivo",
    "desc": "SUID rwsr-xr-x"
   },
   {
    "cmd": "chmod 2775 dir",
    "desc": "SGID"
   },
   {
    "cmd": "chmod 1777 /tmp",
    "desc": "Sticky"
   },
   {
    "cmd": "chmod u=rw,g=r,o= archivo",
    "desc": "Simbólico"
   },
   {
    "cmd": "chmod -v archivo",
    "desc": "Verbose"
   },
   {
    "cmd": "chmod -c archivo",
    "desc": "Cambios"
   }
  ]
 },
 {
  "tool": "chown",
  "desc": "Cambiar propietario",
  "commands": [
   {
    "cmd": "chown usuario archivo",
    "desc": "Owner"
   },
   {
    "cmd": "chown usuario:grupo archivo",
    "desc": "Owner y grupo"
   },
   {
    "cmd": "chown :grupo archivo",
    "desc": "Solo grupo"
   },
   {
    "cmd": "chown -R usuario dir/",
    "desc": "Recursivo"
   },
   {
    "cmd": "chown -h usuario link",
    "desc": "Sin seguir symlink"
   },
   {
    "cmd": "chown --reference=ref archivo",
    "desc": "Copiar owner"
   },
   {
    "cmd": "chown -v usuario archivo",
    "desc": "Verbose"
   },
   {
    "cmd": "chown -c usuario archivo",
    "desc": "Cambios"
   }
  ]
 },
 {
  "tool": "tar",
  "desc": "Archivar archivos",
  "commands": [
   {
    "cmd": "tar -czf out.tar.gz dir/",
    "desc": "Crear gz"
   },
   {
    "cmd": "tar -cjf out.tar.bz2 dir/",
    "desc": "bz2"
   },
   {
    "cmd": "tar -cJf out.tar.xz dir/",
    "desc": "xz"
   },
   {
    "cmd": "tar -xf archivo.tar.gz",
    "desc": "Extraer"
   },
   {
    "cmd": "tar -xzf archivo.tar.gz -C /destino",
    "desc": "Extraer a destino"
   },
   {
    "cmd": "tar -tf archivo.tar.gz",
    "desc": "Listar"
   },
   {
    "cmd": "tar -czf out.tar.gz --exclude='*.log' dir/",
    "desc": "Excluir"
   },
   {
    "cmd": "tar -czf out.tar.gz /etc/passwd /etc/shadow",
    "desc": "Varios archivos"
   },
   {
    "cmd": "tar -czf out.tar.gz --absolute-names /etc",
    "desc": "Paths absolutos"
   },
   {
    "cmd": "tar -xzf archivo.tar.gz --wildcards '*.conf'",
    "desc": "Extraer por patrón"
   },
   {
    "cmd": "tar -czvf out.tar.gz dir/",
    "desc": "Verbose"
   },
   {
    "cmd": "tar --atime-preserve -czf out.tar.gz dir/",
    "desc": "Preservar atime"
   },
   {
    "cmd": "tar -czf out.tar.gz --remove-files dir/",
    "desc": "Borrar origen"
   },
   {
    "cmd": "tar -xzf archivo.tar.gz --strip-components=1",
    "desc": "Quitar nivel"
   },
   {
    "cmd": "tar -czf out.tar.gz -T lista.txt",
    "desc": "De archivo de lista"
   }
  ]
 },
 {
  "tool": "zip",
  "desc": "Comprimir archivos",
  "commands": [
   {
    "cmd": "zip out.zip archivo1 archivo2",
    "desc": "Comprimir"
   },
   {
    "cmd": "zip -r out.zip dir/",
    "desc": "Recursivo"
   },
   {
    "cmd": "zip -9 out.zip archivo",
    "desc": "Máxima compresión"
   },
   {
    "cmd": "zip -e out.zip archivo",
    "desc": "Con password"
   },
   {
    "cmd": "zip -P pass out.zip archivo",
    "desc": "Password en CLI"
   },
   {
    "cmd": "zip -s 10m out.zip archivo",
    "desc": "Dividir en 10MB"
   },
   {
    "cmd": "zip -x '*.log' -r out.zip dir/",
    "desc": "Excluir"
   },
   {
    "cmd": "zip -u out.zip archivo",
    "desc": "Actualizar"
   },
   {
    "cmd": "zip -d out.zip archivo",
    "desc": "Borrar de zip"
   },
   {
    "cmd": "zip -T out.zip",
    "desc": "Test"
   },
   {
    "cmd": "zip -v out.zip archivo",
    "desc": "Verbose"
   },
   {
    "cmd": "unzip out.zip",
    "desc": "Descomprimir"
   },
   {
    "cmd": "unzip -l out.zip",
    "desc": "Listar"
   },
   {
    "cmd": "unzip -d /destino out.zip",
    "desc": "A destino"
   },
   {
    "cmd": "unzip -P pass out.zip",
    "desc": "Con password"
   },
   {
    "cmd": "zip2john out.zip > hash.txt",
    "desc": "Hash para john"
   }
  ]
 },
 {
  "tool": "openssl",
  "desc": "Toolkit criptográfico",
  "commands": [
   {
    "cmd": "openssl version",
    "desc": "Versión"
   },
   {
    "cmd": "openssl genrsa -out key.pem 2048",
    "desc": "Generar RSA key"
   },
   {
    "cmd": "openssl req -new -x509 -key key.pem -out cert.pem -days 365",
    "desc": "Certificado"
   },
   {
    "cmd": "openssl req -new -key key.pem -out req.csr",
    "desc": "CSR"
   },
   {
    "cmd": "openssl x509 -in cert.pem -text -noout",
    "desc": "Ver certificado"
   },
   {
    "cmd": "openssl s_client -connect host:443",
    "desc": "Test TLS"
   },
   {
    "cmd": "openssl s_client -connect host:443 -servername host",
    "desc": "SNI"
   },
   {
    "cmd": "openssl s_server -accept 4443 -cert cert.pem -key key.pem",
    "desc": "Servidor TLS"
   },
   {
    "cmd": "openssl s_server -accept 4443 -nocert",
    "desc": "Sin cert"
   },
   {
    "cmd": "openssl enc -aes-256-cbc -salt -in file -out file.enc",
    "desc": "Cifrar"
   },
   {
    "cmd": "openssl enc -d -aes-256-cbc -in file.enc -out file",
    "desc": "Descifrar"
   },
   {
    "cmd": "openssl dgst -sha256 archivo",
    "desc": "Hash"
   },
   {
    "cmd": "openssl dgst -md5 archivo",
    "desc": "MD5"
   },
   {
    "cmd": "openssl dgst -sha1 archivo",
    "desc": "SHA1"
   },
   {
    "cmd": "openssl rand -hex 16",
    "desc": "Random hex"
   },
   {
    "cmd": "openssl base64 -in file -out file.b64",
    "desc": "Base64"
   },
   {
    "cmd": "openssl base64 -d -in file.b64",
    "desc": "Decodificar"
   },
   {
    "cmd": "openssl pkcs12 -export -in cert.pem -inkey key.pem -out bundle.p12",
    "desc": "PKCS12"
   },
   {
    "cmd": "openssl pkcs12 -in bundle.p12 -nodes -out certs.pem",
    "desc": "Leer PKCS12"
   },
   {
    "cmd": "openssl dhparam -out dh.pem 2048",
    "desc": "DH params"
   },
   {
    "cmd": "openssl ecparam -genkey -name prime256v1 -out ec.key",
    "desc": "EC key"
   },
   {
    "cmd": "openssl rsa -in key.pem -pubout -out pub.pem",
    "desc": "Public key"
   },
   {
    "cmd": "openssl pkey -in key.pem -text -noout",
    "desc": "Ver key"
   },
   {
    "cmd": "openssl crl2pkcs7 -nocrl -certfile cert.pem -out bundle.p7b",
    "desc": "P7B"
   }
  ]
 },
 {
  "tool": "ssh",
  "desc": "Secure Shell",
  "commands": [
   {
    "cmd": "ssh user@host",
    "desc": "Conectar"
   },
   {
    "cmd": "ssh -p 2222 user@host",
    "desc": "Puerto"
   },
   {
    "cmd": "ssh -i key.pem user@host",
    "desc": "Clave privada"
   },
   {
    "cmd": "ssh -J jumpuser@jump user@target",
    "desc": "Jump host"
   },
   {
    "cmd": "ssh -L 8080:localhost:80 user@host",
    "desc": "Local forward"
   },
   {
    "cmd": "ssh -R 8080:localhost:80 user@host",
    "desc": "Remote forward"
   },
   {
    "cmd": "ssh -D 1080 user@host",
    "desc": "SOCKS proxy"
   },
   {
    "cmd": "ssh -o StrictHostKeyChecking=no user@host",
    "desc": "Sin hostkey check"
   },
   {
    "cmd": "ssh -o ConnectTimeout=5 user@host",
    "desc": "Timeout"
   },
   {
    "cmd": "ssh -C user@host",
    "desc": "Compresión"
   },
   {
    "cmd": "ssh -v user@host",
    "desc": "Verbose"
   },
   {
    "cmd": "ssh -vvv user@host",
    "desc": "Muy verbose"
   },
   {
    "cmd": "ssh -A user@host",
    "desc": "Forward agent"
   },
   {
    "cmd": "ssh -X user@host",
    "desc": "X11"
   },
   {
    "cmd": "ssh -t user@host 'comando'",
    "desc": "TTY + comando"
   },
   {
    "cmd": "ssh -N -L 8080:localhost:80 user@host",
    "desc": "Sin ejecutar comando"
   },
   {
    "cmd": "ssh -F config user@host",
    "desc": "Config file"
   },
   {
    "cmd": "ssh -o UserKnownHostsFile=/dev/null user@host",
    "desc": "Ignorar known_hosts"
   },
   {
    "cmd": "ssh -q user@host",
    "desc": "Quiet"
   },
   {
    "cmd": "ssh-copy-id user@host",
    "desc": "Copiar clave"
   }
  ]
 },
 {
  "tool": "scp",
  "desc": "Copiar archivos vía SSH",
  "commands": [
   {
    "cmd": "scp archivo user@host:/ruta",
    "desc": "Copiar"
   },
   {
    "cmd": "scp user@host:/ruta/archivo .",
    "desc": "Descargar"
   },
   {
    "cmd": "scp -r dir user@host:/ruta",
    "desc": "Recursivo"
   },
   {
    "cmd": "scp -P 2222 archivo user@host:/ruta",
    "desc": "Puerto"
   },
   {
    "cmd": "scp -i key.pem archivo user@host:/ruta",
    "desc": "Con clave"
   },
   {
    "cmd": "scp -C archivo user@host:/ruta",
    "desc": "Compresión"
   },
   {
    "cmd": "scp -3 host1:file host2:/ruta",
    "desc": "Entre hosts"
   },
   {
    "cmd": "scp -o ConnectTimeout=10 archivo user@host:/",
    "desc": "Timeout"
   },
   {
    "cmd": "scp -q archivo user@host:/ruta",
    "desc": "Quiet"
   },
   {
    "cmd": "scp -v archivo user@host:/ruta",
    "desc": "Verbose"
   }
  ]
 },
 {
  "tool": "rsync",
  "desc": "Sincronización de archivos",
  "commands": [
   {
    "cmd": "rsync -av dir/ user@host:/destino/",
    "desc": "Sincronizar"
   },
   {
    "cmd": "rsync -avz dir/ user@host:/destino/",
    "desc": "Con compresión"
   },
   {
    "cmd": "rsync -av --delete dir/ /destino/",
    "desc": "Borrar extras"
   },
   {
    "cmd": "rsync -av --dry-run dir/ /destino/",
    "desc": "Simular"
   },
   {
    "cmd": "rsync -av -e 'ssh -p 2222' dir/ user@host:/destino/",
    "desc": "SSH custom"
   },
   {
    "cmd": "rsync -av --exclude='*.log' dir/ /destino/",
    "desc": "Excluir"
   },
   {
    "cmd": "rsync -av --progress dir/ /destino/",
    "desc": "Progreso"
   },
   {
    "cmd": "rsync -av --link-dest=/backup prev/ dir/",
    "desc": "Incremental"
   },
   {
    "cmd": "rsync -av --bwlimit=100 dir/ /destino/",
    "desc": "Límite de ancho"
   },
   {
    "cmd": "rsync -av user@host:/dir/ ./",
    "desc": "Descargar"
   },
   {
    "cmd": "rsync -a --hard-links dir/ /destino/",
    "desc": "Hard links"
   },
   {
    "cmd": "rsync -a --times dir/ /destino/",
    "desc": "Timestamps"
   },
   {
    "cmd": "rsync -a -z dir/ user@host:/destino/",
    "desc": "Comprimido"
   },
   {
    "cmd": "rsync -rtv dir/ /destino/",
    "desc": "Recursivo+times"
   }
  ]
 },
 {
  "tool": "iptables",
  "desc": "Firewall netfilter",
  "commands": [
   {
    "cmd": "iptables -L",
    "desc": "Listar reglas"
   },
   {
    "cmd": "iptables -L -n -v",
    "desc": "Detallado"
   },
   {
    "cmd": "iptables -F",
    "desc": "Flush"
   },
   {
    "cmd": "iptables -A INPUT -p tcp --dport 22 -j ACCEPT",
    "desc": "Aceptar SSH"
   },
   {
    "cmd": "iptables -A INPUT -p tcp --dport 80 -j DROP",
    "desc": "Denegar 80"
   },
   {
    "cmd": "iptables -A INPUT -s 192.168.1.0/24 -j ACCEPT",
    "desc": "Red local"
   },
   {
    "cmd": "iptables -A INPUT -j DROP",
    "desc": "Drop todo input"
   },
   {
    "cmd": "iptables -A OUTPUT -p udp --dport 53 -j ACCEPT",
    "desc": "DNS out"
   },
   {
    "cmd": "iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 8080",
    "desc": "Redirigir"
   },
   {
    "cmd": "iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE",
    "desc": "Masquerade"
   },
   {
    "cmd": "iptables -A FORWARD -i eth0 -o eth1 -j ACCEPT",
    "desc": "Forward"
   },
   {
    "cmd": "iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT",
    "desc": "Estado"
   },
   {
    "cmd": "iptables -A INPUT -p icmp -j DROP",
    "desc": "No ping"
   },
   {
    "cmd": "iptables -A INPUT -m limit --limit 5/min -j ACCEPT",
    "desc": "Rate limit"
   },
   {
    "cmd": "iptables -I INPUT 1 -s IP -j DROP",
    "desc": "Insertar primera"
   },
   {
    "cmd": "iptables -D INPUT -p tcp --dport 80 -j DROP",
    "desc": "Borrar regla"
   },
   {
    "cmd": "iptables -S",
    "desc": "Reglas en formato"
   },
   {
    "cmd": "iptables -Z",
    "desc": "Contadores a cero"
   },
   {
    "cmd": "iptables -P INPUT DROP",
    "desc": "Política"
   },
   {
    "cmd": "iptables -A INPUT -p tcp --dport 22 -m conntrack --ctstate NEW -m recent --set",
    "desc": "Recent"
   }
  ]
 },
 {
  "tool": "nft",
  "desc": "Firewall nftables",
  "commands": [
   {
    "cmd": "nft list ruleset",
    "desc": "Listar reglas"
   },
   {
    "cmd": "nft list tables",
    "desc": "Tablas"
   },
   {
    "cmd": "nft add table inet filter",
    "desc": "Crear tabla"
   },
   {
    "cmd": "nft add chain inet filter input { type filter hook input priority 0 \\\\; }",
    "desc": "Crear chain"
   },
   {
    "cmd": "nft add rule inet filter input tcp dport 22 accept",
    "desc": "Aceptar 22"
   },
   {
    "cmd": "nft add rule inet filter input drop",
    "desc": "Drop"
   },
   {
    "cmd": "nft delete rule inet filter input handle 5",
    "desc": "Borrar regla"
   },
   {
    "cmd": "nft flush ruleset",
    "desc": "Limpiar"
   },
   {
    "cmd": "nft add rule inet filter input ct state established,related accept",
    "desc": "Estados"
   },
   {
    "cmd": "nft -f archivo.nft",
    "desc": "De archivo"
   },
   {
    "cmd": "nft -s list ruleset",
    "desc": "Script format"
   },
   {
    "cmd": "nft add counter inet filter c",
    "desc": "Contador"
   },
   {
    "cmd": "nft add table ip nat",
    "desc": "Tabla NAT"
   },
   {
    "cmd": "nft add chain ip nat postrouting { type nat hook postrouting priority 100 \\\\; }",
    "desc": "NAT chain"
   },
   {
    "cmd": "nft add rule ip nat postrouting masquerade",
    "desc": "Masquerade"
   }
  ]
 },
 {
  "tool": "fail2ban",
  "desc": "Protección contra fuerza bruta",
  "commands": [
   {
    "cmd": "fail2ban-client status",
    "desc": "Estado"
   },
   {
    "cmd": "fail2ban-client status sshd",
    "desc": "Estado del jail sshd"
   },
   {
    "cmd": "fail2ban-client set sshd banip IP",
    "desc": "Banear IP"
   },
   {
    "cmd": "fail2ban-client set sshd unbanip IP",
    "desc": "Desbanear"
   },
   {
    "cmd": "fail2ban-client reload",
    "desc": "Recargar"
   },
   {
    "cmd": "fail2ban-client restart",
    "desc": "Reiniciar"
   },
   {
    "cmd": "fail2ban-client start",
    "desc": "Iniciar"
   },
   {
    "cmd": "fail2ban-client stop",
    "desc": "Parar"
   },
   {
    "cmd": "fail2ban-client get sshd banned",
    "desc": "Baneados"
   },
   {
    "cmd": "fail2ban-client set sshd maxretry 5",
    "desc": "Max reintentos"
   },
   {
    "cmd": "fail2ban-client set sshd findtime 600",
    "desc": "Findtime"
   },
   {
    "cmd": "fail2ban-client set sshd bantime 3600",
    "desc": "Bantime"
   },
   {
    "cmd": "fail2ban-regex /var/log/auth.log /etc/fail2ban/filter.d/sshd.conf",
    "desc": "Probar regex"
   },
   {
    "cmd": "fail2ban-client -t",
    "desc": "Test config"
   }
  ]
 },
 {
  "tool": "ufw",
  "desc": "Uncomplicated Firewall",
  "commands": [
   {
    "cmd": "ufw status",
    "desc": "Estado"
   },
   {
    "cmd": "ufw status verbose",
    "desc": "Detallado"
   },
   {
    "cmd": "ufw enable",
    "desc": "Habilitar"
   },
   {
    "cmd": "ufw disable",
    "desc": "Deshabilitar"
   },
   {
    "cmd": "ufw allow 22",
    "desc": "Permitir puerto"
   },
   {
    "cmd": "ufw allow 22/tcp",
    "desc": "TCP"
   },
   {
    "cmd": "ufw allow from 192.168.1.0/24",
    "desc": "De red"
   },
   {
    "cmd": "ufw allow from IP to any port 22",
    "desc": "IP a puerto"
   },
   {
    "cmd": "ufw deny 23",
    "desc": "Denegar"
   },
   {
    "cmd": "ufw deny from IP",
    "desc": "Denegar IP"
   },
   {
    "cmd": "ufw delete allow 22",
    "desc": "Borrar"
   },
   {
    "cmd": "ufw allow 8080:8090/tcp",
    "desc": "Rango"
   },
   {
    "cmd": "ufw default deny incoming",
    "desc": "Default"
   },
   {
    "cmd": "ufw default allow outgoing",
    "desc": "Default out"
   },
   {
    "cmd": "ufw reset",
    "desc": "Reset"
   },
   {
    "cmd": "ufw app list",
    "desc": "Apps"
   },
   {
    "cmd": "ufw allow OpenSSH",
    "desc": "Por app"
   },
   {
    "cmd": "ufw status numbered",
    "desc": "Numerado"
   }
  ]
 },
 {
  "tool": "openssl-ca",
  "desc": "Crear y gestionar CAs (openssl ca)",
  "commands": [
   {
    "cmd": "openssl ca -config openssl.cnf -in req.csr -out cert.pem",
    "desc": "Firmar CSR"
   },
   {
    "cmd": "openssl ca -config openssl.cnf -gencrl -out crl.pem",
    "desc": "Generar CRL"
   },
   {
    "cmd": "openssl ca -config openssl.cnf -revoke cert.pem",
    "desc": "Revocar"
   },
   {
    "cmd": "openssl ca -config openssl.cnf -status SERIAL",
    "desc": "Estado"
   },
   {
    "cmd": "openssl ca -config openssl.cnf -batch -in req.csr -out cert.pem",
    "desc": "Batch"
   },
   {
    "cmd": "openssl ca -config openssl.cnf -notext -in req.csr -out cert.pem",
    "desc": "Sin texto"
   },
   {
    "cmd": "openssl ca -config openssl.cnf -md sha256 -in req.csr -out cert.pem",
    "desc": "SHA256"
   },
   {
    "cmd": "openssl ca -config openssl.cnf -extensions server_cert -in req.csr -out cert.pem",
    "desc": "Extensiones"
   },
   {
    "cmd": "openssl ca -config openssl.cnf -selfsign -in req.csr -out cert.pem",
    "desc": "Selfsign"
   },
   {
    "cmd": "openssl ca -config openssl.cnf -days 730 -in req.csr -out cert.pem",
    "desc": "Días"
   }
  ]
 },
 {
  "tool": "git",
  "desc": "Control de versiones (también útil en pentest)",
  "commands": [
   {
    "cmd": "git clone URL",
    "desc": "Clonar"
   },
   {
    "cmd": "git init",
    "desc": "Inicializar"
   },
   {
    "cmd": "git status",
    "desc": "Estado"
   },
   {
    "cmd": "git add .",
    "desc": "Añadir"
   },
   {
    "cmd": "git commit -m 'mensaje'",
    "desc": "Commit"
   },
   {
    "cmd": "git log --oneline",
    "desc": "Log"
   },
   {
    "cmd": "git branch",
    "desc": "Ramas"
   },
   {
    "cmd": "git checkout -b rama",
    "desc": "Crear rama"
   },
   {
    "cmd": "git pull",
    "desc": "Actualizar"
   },
   {
    "cmd": "git push origin main",
    "desc": "Subir"
   },
   {
    "cmd": "git diff",
    "desc": "Cambios"
   },
   {
    "cmd": "git stash",
    "desc": "Guardar temporal"
   },
   {
    "cmd": "git reset --hard HEAD",
    "desc": "Reset"
   },
   {
    "cmd": "git remote -v",
    "desc": "Remotes"
   },
   {
    "cmd": "git show HEAD",
    "desc": "Ver commit"
   },
   {
    "cmd": "git blame archivo",
    "desc": "Quién cambió"
   }
  ]
 },
 {
  "tool": "apt",
  "desc": "Gestión de paquetes (Debian/Kali)",
  "commands": [
   {
    "cmd": "apt update",
    "desc": "Actualizar índices"
   },
   {
    "cmd": "apt upgrade -y",
    "desc": "Actualizar paquetes"
   },
   {
    "cmd": "apt full-upgrade -y",
    "desc": "Upgrade completo"
   },
   {
    "cmd": "apt install nmap",
    "desc": "Instalar"
   },
   {
    "cmd": "apt remove nmap",
    "desc": "Desinstalar"
   },
   {
    "cmd": "apt purge nmap",
    "desc": "Purge"
   },
   {
    "cmd": "apt autoremove",
    "desc": "Limpiar huérfanos"
   },
   {
    "cmd": "apt search nmap",
    "desc": "Buscar"
   },
   {
    "cmd": "apt show nmap",
    "desc": "Info"
   },
   {
    "cmd": "apt list --installed",
    "desc": "Instalados"
   },
   {
    "cmd": "apt list --upgradable",
    "desc": "Actualizables"
   },
   {
    "cmd": "apt-cache search wordlist",
    "desc": "Cache search"
   },
   {
    "cmd": "apt-cache policy nmap",
    "desc": "Versiones"
   },
   {
    "cmd": "apt-get download nmap",
    "desc": "Solo .deb"
   },
   {
    "cmd": "apt-get source nmap",
    "desc": "Fuentes"
   },
   {
    "cmd": "apt-get build-dep nmap",
    "desc": "Deps de build"
   },
   {
    "cmd": "apt-file search /usr/bin/nmap",
    "desc": "Buscar en paquetes"
   },
   {
    "cmd": "apt-mark hold nmap",
    "desc": "Congelar"
   },
   {
    "cmd": "apt-mark unhold nmap",
    "desc": "Descongelar"
   },
   {
    "cmd": "dpkg -i paquete.deb",
    "desc": "Instalar deb"
   },
   {
    "cmd": "dpkg -l | grep nmap",
    "desc": "Listar instalado"
   },
   {
    "cmd": "dpkg -L nmap",
    "desc": "Archivos del paquete"
   },
   {
    "cmd": "dpkg -S /usr/bin/nmap",
    "desc": "Qué paquete"
   },
   {
    "cmd": "dpkg --configure -a",
    "desc": "Reparar"
   }
  ]
 },
 {
  "tool": "service",
  "desc": "Gestionar servicios (SysV init)",
  "commands": [
   {
    "cmd": "service ssh status",
    "desc": "Estado"
   },
   {
    "cmd": "service ssh start",
    "desc": "Iniciar"
   },
   {
    "cmd": "service ssh stop",
    "desc": "Parar"
   },
   {
    "cmd": "service ssh restart",
    "desc": "Reiniciar"
   },
   {
    "cmd": "service ssh reload",
    "desc": "Recargar"
   },
   {
    "cmd": "service --status-all",
    "desc": "Todos"
   },
   {
    "cmd": "service --status-all | grep running",
    "desc": "Running"
   },
   {
    "cmd": "service apache2 start",
    "desc": "Apache"
   },
   {
    "cmd": "service mysql start",
    "desc": "MySQL"
   },
   {
    "cmd": "service postgresql start",
    "desc": "Postgres"
   },
   {
    "cmd": "service networking restart",
    "desc": "Red"
   },
   {
    "cmd": "service --help",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "sysctl",
  "desc": "Configurar parámetros del kernel",
  "commands": [
   {
    "cmd": "sysctl -a",
    "desc": "Todos"
   },
   {
    "cmd": "sysctl net.ipv4.ip_forward",
    "desc": "Ver forward"
   },
   {
    "cmd": "sysctl -w net.ipv4.ip_forward=1",
    "desc": "Habilitar forwarding"
   },
   {
    "cmd": "sysctl -w net.ipv4.conf.all.accept_redirects=0",
    "desc": "Sin redirects"
   },
   {
    "cmd": "sysctl -w net.ipv6.conf.all.disable_ipv6=1",
    "desc": "Desactivar IPv6"
   },
   {
    "cmd": "sysctl -w kernel.core_pattern=/tmp/core",
    "desc": "Core pattern"
   },
   {
    "cmd": "sysctl -w fs.file-max=100000",
    "desc": "Límite archivos"
   },
   {
    "cmd": "sysctl -w net.core.rmem_max=16777216",
    "desc": "Buffer rx"
   },
   {
    "cmd": "sysctl -w net.core.wmem_max=16777216",
    "desc": "Buffer tx"
   },
   {
    "cmd": "sysctl -w vm.swappiness=10",
    "desc": "Swap"
   },
   {
    "cmd": "sysctl -w net.ipv4.tcp_syncookies=1",
    "desc": "SYN cookies"
   },
   {
    "cmd": "sysctl -w kernel.randomize_va_space=0",
    "desc": "Desactivar ASLR"
   },
   {
    "cmd": "sysctl -w kernel.randomize_va_space=2",
    "desc": "Activar ASLR"
   },
   {
    "cmd": "sysctl -p /etc/sysctl.conf",
    "desc": "Cargar config"
   },
   {
    "cmd": "sysctl -n net.ipv4.ip_forward",
    "desc": "Solo valor"
   },
   {
    "cmd": "sysctl -w net.ipv4.icmp_echo_ignore_all=1",
    "desc": "Ignorar ping"
   },
   {
    "cmd": "sysctl -w net.ipv4.tcp_max_syn_backlog=1024",
    "desc": "SYN backlog"
   },
   {
    "cmd": "sysctl -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "kill-process",
  "desc": "Gestionar procesos (kill, pkill, nice, timeout)",
  "commands": [
   {
    "cmd": "kill -9 PID",
    "desc": "Matar"
   },
   {
    "cmd": "kill -15 PID",
    "desc": "Terminar"
   },
   {
    "cmd": "kill -l",
    "desc": "Listar señales"
   },
   {
    "cmd": "killall nombre",
    "desc": "Por nombre"
   },
   {
    "cmd": "killall -9 nombre",
    "desc": "Forzar"
   },
   {
    "cmd": "pkill -f 'patron'",
    "desc": "Por patrón"
   },
   {
    "cmd": "pkill -u usuario",
    "desc": "Por usuario"
   },
   {
    "cmd": "pkill -9 -f 'nc '",
    "desc": "Matar nc"
   },
   {
    "cmd": "nice -n -20 comando",
    "desc": "Prioridad alta"
   },
   {
    "cmd": "renice -10 -p PID",
    "desc": "Cambiar prioridad"
   },
   {
    "cmd": "timeout 10 comando",
    "desc": "Timeout"
   },
   {
    "cmd": "timeout -s 9 5 comando",
    "desc": "Timeout + kill"
   },
   {
    "cmd": "watch -n 2 'ps aux | head'",
    "desc": "Watch"
   },
   {
    "cmd": "watch -n 1 ss -tulpn",
    "desc": "Watch puertos"
   },
   {
    "cmd": "xargs -I{} ping -c1 {}",
    "desc": "Xargs"
   },
   {
    "cmd": "find / -name '*.conf' 2>/dev/null | xargs grep 'pass'",
    "desc": "Find+xargs"
   },
   {
    "cmd": "nohup comando &",
    "desc": "Sin hangup"
   },
   {
    "cmd": "setsid comando",
    "desc": "Nueva sesión"
   },
   {
    "cmd": "disown -a",
    "desc": "Desvincular"
   },
   {
    "cmd": "ps -eo pid,nice,cmd | sort -k2 -n",
    "desc": "Por nice"
   }
  ]
 },
 {
  "tool": "df-du",
  "desc": "Espacio en disco (df, du, find, locate)",
  "commands": [
   {
    "cmd": "df -h",
    "desc": "Espacio"
   },
   {
    "cmd": "df -h /var",
    "desc": "Partición"
   },
   {
    "cmd": "df -i",
    "desc": "Inodos"
   },
   {
    "cmd": "df -T",
    "desc": "Tipo de fs"
   },
   {
    "cmd": "du -sh /var",
    "desc": "Tamaño"
   },
   {
    "cmd": "du -sh *",
    "desc": "Todo en cwd"
   },
   {
    "cmd": "du -sh /var/* | sort -h",
    "desc": "Ordenado"
   },
   {
    "cmd": "du -sh --max-depth=1 /var",
    "desc": "Profundidad"
   },
   {
    "cmd": "du -ah /tmp | sort -rh | head",
    "desc": "Top"
   },
   {
    "cmd": "find / -type f -size +100M",
    "desc": "Archivos grandes"
   },
   {
    "cmd": "find / -perm -4000 2>/dev/null",
    "desc": "SUID"
   },
   {
    "cmd": "find / -perm -2000 2>/dev/null",
    "desc": "SGID"
   },
   {
    "cmd": "find / -writable -type f 2>/dev/null",
    "desc": "Escribibles"
   },
   {
    "cmd": "find / -name '*.bak'",
    "desc": "Backups"
   },
   {
    "cmd": "find / -name '*pass*'",
    "desc": "Pass files"
   },
   {
    "cmd": "find / -type f -name '*.conf' | head -20",
    "desc": "Confs"
   },
   {
    "cmd": "find / -mtime -7 -type f",
    "desc": "Modificados 7 días"
   },
   {
    "cmd": "find . -type f -exec grep -l 'secret' {} \\\\;",
    "desc": "Grep exec"
   },
   {
    "cmd": "locate nmap",
    "desc": "Buscar rápido"
   },
   {
    "cmd": "updatedb",
    "desc": "Actualizar índice"
   },
   {
    "cmd": "which nmap",
    "desc": "Ruta del binario"
   },
   {
    "cmd": "whereis nmap",
    "desc": "Todas las rutas"
   }
  ]
 },
 {
  "tool": "env-ulimit",
  "desc": "Variables de entorno y límites",
  "commands": [
   {
    "cmd": "env",
    "desc": "Ver variables"
   },
   {
    "cmd": "env | grep PATH",
    "desc": "PATH"
   },
   {
    "cmd": "export VAR=valor",
    "desc": "Exportar"
   },
   {
    "cmd": "unset VAR",
    "desc": "Quitar"
   },
   {
    "cmd": "echo $PATH",
    "desc": "PATH"
   },
   {
    "cmd": "set | head -20",
    "desc": "Todas las vars"
   },
   {
    "cmd": "printenv",
    "desc": "Print"
   },
   {
    "cmd": "printenv HOME",
    "desc": "Una var"
   },
   {
    "cmd": "ulimit -a",
    "desc": "Límites"
   },
   {
    "cmd": "ulimit -n 4096",
    "desc": "Archivos abiertos"
   },
   {
    "cmd": "ulimit -u 100",
    "desc": "Procesos"
   },
   {
    "cmd": "ulimit -s 8192",
    "desc": "Stack"
   },
   {
    "cmd": "ulimit -c unlimited",
    "desc": "Core dumps"
   },
   {
    "cmd": "hostnamectl",
    "desc": "Hostname"
   },
   {
    "cmd": "uname -a",
    "desc": "Kernel"
   },
   {
    "cmd": "cat /etc/os-release",
    "desc": "OS"
   },
   {
    "cmd": "lscpu",
    "desc": "CPU"
   },
   {
    "cmd": "free -h",
    "desc": "Memoria"
   },
   {
    "cmd": "lsblk",
    "desc": "Bloques"
   },
   {
    "cmd": "blkid",
    "desc": "UUIDs"
   }
  ]
 },
 {
  "tool": "iproute2",
  "desc": "Gestionar red (comando ip)",
  "commands": [
   {
    "cmd": "ip addr",
    "desc": "Direcciones"
   },
   {
    "cmd": "ip addr show eth0",
    "desc": "Interfaz"
   },
   {
    "cmd": "ip link",
    "desc": "Enlaces"
   },
   {
    "cmd": "ip route",
    "desc": "Rutas"
   },
   {
    "cmd": "ip route add 10.0.0.0/24 via 192.168.1.1",
    "desc": "Añadir ruta"
   },
   {
    "cmd": "ip route del 10.0.0.0/24",
    "desc": "Borrar ruta"
   },
   {
    "cmd": "ip neigh",
    "desc": "Vecinos ARP"
   },
   {
    "cmd": "ip addr add 192.168.1.200/24 dev eth0",
    "desc": "Añadir IP"
   },
   {
    "cmd": "ip addr del 192.168.1.200/24 dev eth0",
    "desc": "Quitar IP"
   },
   {
    "cmd": "ip link set eth0 up",
    "desc": "Levantar"
   },
   {
    "cmd": "ip link set eth0 down",
    "desc": "Bajar"
   },
   {
    "cmd": "ip link set eth0 promisc on",
    "desc": "Promiscuo"
   },
   {
    "cmd": "ip rule",
    "desc": "Políticas"
   },
   {
    "cmd": "ip tunnel",
    "desc": "Túneles"
   },
   {
    "cmd": "ip -s link",
    "desc": "Stats"
   },
   {
    "cmd": "ip -br addr",
    "desc": "Brief"
   },
   {
    "cmd": "ip maddr",
    "desc": "Multicast"
   },
   {
    "cmd": "ip netns list",
    "desc": "Netns"
   },
   {
    "cmd": "ip monitor",
    "desc": "Monitor"
   },
   {
    "cmd": "ip -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "nmcli",
  "desc": "Gestionar red con NetworkManager",
  "commands": [
   {
    "cmd": "nmcli device status",
    "desc": "Dispositivos"
   },
   {
    "cmd": "nmcli device wifi list",
    "desc": "Redes WiFi"
   },
   {
    "cmd": "nmcli device wifi connect SSID password pass",
    "desc": "Conectar"
   },
   {
    "cmd": "nmcli connection show",
    "desc": "Conexiones"
   },
   {
    "cmd": "nmcli connection add type ethernet con-name eth0",
    "desc": "Crear conexión"
   },
   {
    "cmd": "nmcli connection up eth0",
    "desc": "Activar"
   },
   {
    "cmd": "nmcli connection down eth0",
    "desc": "Desactivar"
   },
   {
    "cmd": "nmcli connection delete eth0",
    "desc": "Borrar"
   },
   {
    "cmd": "nmcli device wifi hotspot ssid FreeWiFi password pass",
    "desc": "Hotspot"
   },
   {
    "cmd": "nmcli radio wifi off",
    "desc": "Apagar WiFi"
   },
   {
    "cmd": "nmcli radio wifi on",
    "desc": "Encender WiFi"
   },
   {
    "cmd": "nmcli general status",
    "desc": "Estado"
   },
   {
    "cmd": "nmcli -p device show eth0",
    "desc": "Detalles"
   },
   {
    "cmd": "nmcli networking off",
    "desc": "Red off"
   },
   {
    "cmd": "nmcli networking on",
    "desc": "Red on"
   }
  ]
 },
 {
  "tool": "ping-utils",
  "desc": "Comprobación de conectividad (ping, ping6, arping)",
  "commands": [
   {
    "cmd": "ping -c 4 IP",
    "desc": "4 pings"
   },
   {
    "cmd": "ping -i 0.2 IP",
    "desc": "Intervalo 0.2s"
   },
   {
    "cmd": "ping -s 1000 IP",
    "desc": "Tamaño 1000"
   },
   {
    "cmd": "ping -t 10 IP",
    "desc": "TTL 10"
   },
   {
    "cmd": "ping -f IP",
    "desc": "Flood"
   },
   {
    "cmd": "ping -W 2 IP",
    "desc": "Timeout"
   },
   {
    "cmd": "ping -D IP",
    "desc": "Timestamps"
   },
   {
    "cmd": "ping -q IP",
    "desc": "Quiet"
   },
   {
    "cmd": "ping -I eth0 IP",
    "desc": "Interfaz"
   },
   {
    "cmd": "ping -c 1 -b 192.168.1.255",
    "desc": "Broadcast"
   },
   {
    "cmd": "ping6 -c 2 ::1",
    "desc": "IPv6"
   },
   {
    "cmd": "arping -c 4 -I eth0 IP",
    "desc": "ARP ping"
   },
   {
    "cmd": "arping -D -c 2 IP",
    "desc": "Detección duplicados"
   },
   {
    "cmd": "arping -U -c 2 IP",
    "desc": "Unsolicited"
   },
   {
    "cmd": "ping -h",
    "desc": "Ayuda"
   }
  ]
 },
 {
  "tool": "grep-awk-sed",
  "desc": "Procesamiento de texto (grep, awk, sed, sort, uniq)",
  "commands": [
   {
    "cmd": "grep -r 'password' /etc/",
    "desc": "Buscar"
   },
   {
    "cmd": "grep -i 'admin' archivo",
    "desc": "Case insensitive"
   },
   {
    "cmd": "grep -E 'foo|bar' archivo",
    "desc": "Regex"
   },
   {
    "cmd": "grep -v 'excluir' archivo",
    "desc": "Excluir"
   },
   {
    "cmd": "grep -c 'patron' archivo",
    "desc": "Contar"
   },
   {
    "cmd": "grep -l 'patron' dir/*",
    "desc": "Solo nombres"
   },
   {
    "cmd": "grep -rn 'secret' /var/www",
    "desc": "Recursivo con líneas"
   },
   {
    "cmd": "awk '{print $1}' archivo",
    "desc": "Columna 1"
   },
   {
    "cmd": "awk -F: '{print $1, $7}' /etc/passwd",
    "desc": "Delimitador"
   },
   {
    "cmd": "awk 'NR>1 && NR<10' archivo",
    "desc": "Rango de líneas"
   },
   {
    "cmd": "awk '$3 > 100' archivo",
    "desc": "Condición"
   },
   {
    "cmd": "sed -n '5,10p' archivo",
    "desc": "Líneas 5-10"
   },
   {
    "cmd": "sed -i 's/foo/bar/g' archivo",
    "desc": "Reemplazar"
   },
   {
    "cmd": "sed -i '/patron/d' archivo",
    "desc": "Borrar líneas"
   },
   {
    "cmd": "sort -u archivo",
    "desc": "Ordenar único"
   },
   {
    "cmd": "sort -rn archivo",
    "desc": "Reverse numérico"
   },
   {
    "cmd": "uniq -c archivo",
    "desc": "Contar duplicados"
   },
   {
    "cmd": "cut -d: -f1 /etc/passwd",
    "desc": "Cortar"
   },
   {
    "cmd": "wc -l archivo",
    "desc": "Contar líneas"
   },
   {
    "cmd": "tr 'a-z' 'A-Z' < archivo",
    "desc": "Mayúsculas"
   }
  ]
 },
 {
  "tool": "curl-system",
  "desc": "Cliente HTTP de línea de comandos",
  "commands": [
   {
    "cmd": "curl http://IP",
    "desc": "GET"
   },
   {
    "cmd": "curl -X POST http://IP",
    "desc": "POST"
   },
   {
    "cmd": "curl -d 'user=admin' http://IP/login",
    "desc": "POST data"
   },
   {
    "cmd": "curl -F 'file=@x.txt' http://IP/upload",
    "desc": "Multipart"
   },
   {
    "cmd": "curl -H 'Authorization: Bearer TOKEN' http://IP/api",
    "desc": "Headers"
   },
   {
    "cmd": "curl -b 'SID=abc' http://IP/",
    "desc": "Cookies"
   },
   {
    "cmd": "curl -c cookies.txt http://IP/login",
    "desc": "Guardar cookies"
   },
   {
    "cmd": "curl -o out.bin http://IP/file",
    "desc": "Descargar"
   },
   {
    "cmd": "curl -s http://IP",
    "desc": "Silent"
   },
   {
    "cmd": "curl -v http://IP",
    "desc": "Verbose"
   },
   {
    "cmd": "curl -k https://IP",
    "desc": "Sin verify"
   },
   {
    "cmd": "curl -L http://IP",
    "desc": "Redirects"
   },
   {
    "cmd": "curl -I http://IP",
    "desc": "Headers"
   },
   {
    "cmd": "curl -u user:pass http://IP",
    "desc": "Basic auth"
   },
   {
    "cmd": "curl --data-urlencode 'q=hola mundo' http://IP",
    "desc": "Encode"
   },
   {
    "cmd": "curl -x socks5://127.0.0.1:1080 http://IP",
    "desc": "SOCKS"
   },
   {
    "cmd": "curl -w '%{http_code}' http://IP",
    "desc": "Código"
   },
   {
    "cmd": "curl -r 0-100 http://IP/file -o parte",
    "desc": "Range"
   },
   {
    "cmd": "curl --max-time 10 http://IP",
    "desc": "Timeout"
   },
   {
    "cmd": "curl -T file ftp://IP/",
    "desc": "FTP upload"
   }
  ]
 },
 {
  "tool": "wget-system",
  "desc": "Descarga de archivos (wget)",
  "commands": [
   {
    "cmd": "wget http://IP/file",
    "desc": "Descargar"
   },
   {
    "cmd": "wget -O out.txt http://IP/",
    "desc": "Renombrar"
   },
   {
    "cmd": "wget -r http://IP/dir/",
    "desc": "Recursivo"
   },
   {
    "cmd": "wget -r -l 2 http://IP/",
    "desc": "Profundidad 2"
   },
   {
    "cmd": "wget -m http://IP/",
    "desc": "Mirror"
   },
   {
    "cmd": "wget -c http://IP/file",
    "desc": "Continuar"
   },
   {
    "cmd": "wget -b http://IP/file",
    "desc": "Background"
   },
   {
    "cmd": "wget -q http://IP/file",
    "desc": "Quiet"
   },
   {
    "cmd": "wget -v http://IP/file",
    "desc": "Verbose"
   },
   {
    "cmd": "wget --no-check-certificate https://IP/",
    "desc": "Sin verify"
   },
   {
    "cmd": "wget -H -r http://IP/",
    "desc": "Hosts externos"
   },
   {
    "cmd": "wget -np http://IP/dir/",
    "desc": "Sin parent"
   },
   {
    "cmd": "wget -A pdf,jpg -r http://IP/",
    "desc": "Solo tipos"
   },
   {
    "cmd": "wget -R css,js -r http://IP/",
    "desc": "Rechazar"
   },
   {
    "cmd": "wget -e robots=off -r http://IP/",
    "desc": "Sin robots"
   },
   {
    "cmd": "wget --user=u --password=p http://IP/",
    "desc": "Auth"
   },
   {
    "cmd": "wget -i urls.txt",
    "desc": "De lista"
   },
   {
    "cmd": "wget -P /tmp http://IP/file",
    "desc": "Directorio"
   },
   {
    "cmd": "wget --tries=5 http://IP/file",
    "desc": "Reintentos"
   },
   {
    "cmd": "wget --timeout=10 http://IP/file",
    "desc": "Timeout"
   }
  ]
 },
 {
  "tool": "log-tools",
  "desc": "Análisis de logs (tail, head, less, grep de logs)",
  "commands": [
   {
    "cmd": "tail -f /var/log/syslog",
    "desc": "Follow"
   },
   {
    "cmd": "tail -n 100 /var/log/auth.log",
    "desc": "Últimas 100"
   },
   {
    "cmd": "head -n 20 /var/log/syslog",
    "desc": "Primeras 20"
   },
   {
    "cmd": "less /var/log/auth.log",
    "desc": "Paginado"
   },
   {
    "cmd": "grep 'Failed password' /var/log/auth.log",
    "desc": "Intrusiones SSH"
   },
   {
    "cmd": "grep 'Accepted' /var/log/auth.log | awk '{print $9}' | sort | uniq -c",
    "desc": "Logins por IP"
   },
   {
    "cmd": "journalctl -u sshd --since today",
    "desc": "SSH hoy"
   },
   {
    "cmd": "journalctl -k -b",
    "desc": "Kernel boot"
   },
   {
    "cmd": "last -f /var/log/wtmp",
    "desc": "Logins"
   },
   {
    "cmd": "lastb",
    "desc": "Fallidos"
   },
   {
    "cmd": "who /var/log/wtmp",
    "desc": "Quién"
   },
   {
    "cmd": "zcat /var/log/auth.log.2.gz | grep sshd",
    "desc": "Logs comprimidos"
   },
   {
    "cmd": "awk '{print $1}' /var/log/syslog | sort | uniq -c | sort -rn",
    "desc": "Top fuentes"
   },
   {
    "cmd": "grep -i error /var/log/*.log",
    "desc": "Errores"
   },
   {
    "cmd": "find /var/log -name '*.gz' | xargs zgrep -l 'password'",
    "desc": "Grep comprimidos"
   }
  ]
 },
 {
  "tool": "find-locate",
  "desc": "Búsqueda de archivos (find, locate, which, type)",
  "commands": [
   {
    "cmd": "find / -name 'flag*' 2>/dev/null",
    "desc": "Buscar por nombre"
   },
   {
    "cmd": "find / -user root -perm -4000 2>/dev/null",
    "desc": "SUID"
   },
   {
    "cmd": "find / -perm -222 2>/dev/null",
    "desc": "World writable"
   },
   {
    "cmd": "find / -newer /etc/passwd",
    "desc": "Más nuevos que"
   },
   {
    "cmd": "find / -mmin -5",
    "desc": "Modificados 5 min"
   },
   {
    "cmd": "find / -mtime +30",
    "desc": "Más de 30 días"
   },
   {
    "cmd": "find / -size +10M",
    "desc": "Más de 10MB"
   },
   {
    "cmd": "find / -name '*.txt' -exec cat {} \\\\;",
    "desc": "Exec"
   },
   {
    "cmd": "find / -iname '*pass*'",
    "desc": "Case insensitive"
   },
   {
    "cmd": "find . -maxdepth 2 -type f",
    "desc": "Profundidad"
   },
   {
    "cmd": "find / -type l",
    "desc": "Symlinks"
   },
   {
    "cmd": "find / -empty",
    "desc": "Vacíos"
   },
   {
    "cmd": "find / -type f -readable -writable -executable",
    "desc": "rwx"
   },
   {
    "cmd": "find / -name 'id_rsa*' 2>/dev/null",
    "desc": "Claves SSH"
   },
   {
    "cmd": "locate -i config",
    "desc": "Rápido"
   },
   {
    "cmd": "locate --limit 20 passwd",
    "desc": "Límite"
   },
   {
    "cmd": "updatedb",
    "desc": "Actualizar DB"
   },
   {
    "cmd": "which curl",
    "desc": "Ruta"
   },
   {
    "cmd": "type -a nc",
    "desc": "Todas las rutas"
   },
   {
    "cmd": "whereis python3",
    "desc": "Python"
   }
  ]
 },
 {
  "tool": "parted-fdisk",
  "desc": "Gestión de discos y particiones",
  "commands": [
   {
    "cmd": "fdisk -l",
    "desc": "Listar"
   },
   {
    "cmd": "fdisk /dev/sdb",
    "desc": "Interactivo"
   },
   {
    "cmd": "parted -l",
    "desc": "Parted list"
   },
   {
    "cmd": "parted /dev/sdb mklabel gpt",
    "desc": "GPT label"
   },
   {
    "cmd": "parted /dev/sdb mkpart primary ext4 1MiB 100MiB",
    "desc": "Crear partición"
   },
   {
    "cmd": "parted /dev/sdb print",
    "desc": "Imprimir"
   },
   {
    "cmd": "parted /dev/sdb rm 1",
    "desc": "Borrar"
   },
   {
    "cmd": "parted /dev/sdb unit MiB print",
    "desc": "Unidades"
   },
   {
    "cmd": "blkid",
    "desc": "UUIDs"
   },
   {
    "cmd": "lsblk",
    "desc": "Árbol"
   },
   {
    "cmd": "lsblk -f",
    "desc": "FS"
   },
   {
    "cmd": "lsblk -o NAME,SIZE,TYPE,MOUNTPOINT",
    "desc": "Columnas"
   },
   {
    "cmd": "mkfs.ext4 /dev/sdb1",
    "desc": "Formatear"
   },
   {
    "cmd": "mkfs.xfs /dev/sdb1",
    "desc": "XFS"
   },
   {
    "cmd": "mkfs.vfat /dev/sdb1",
    "desc": "FAT32"
   },
   {
    "cmd": "swapon /dev/sdb2",
    "desc": "Swap on"
   },
   {
    "cmd": "swapoff /dev/sdb2",
    "desc": "Swap off"
   },
   {
    "cmd": "mkswap /dev/sdb2",
    "desc": "Crear swap"
   },
   {
    "cmd": "e2fsck -f /dev/sdb1",
    "desc": "Chequear"
   },
   {
    "cmd": "dumpe2fs -h /dev/sdb1",
    "desc": "Superblock"
   }
  ]
 },
 {
  "tool": "process-tools",
  "desc": "Gestión de procesos (ps, top, kill, nice)",
  "commands": [
   {
    "cmd": "ps aux",
    "desc": "Todos"
   },
   {
    "cmd": "ps aux --sort=-%mem | head",
    "desc": "Top mem"
   },
   {
    "cmd": "ps aux --sort=-%cpu | head",
    "desc": "Top cpu"
   },
   {
    "cmd": "ps -ef",
    "desc": "Full"
   },
   {
    "cmd": "ps -ef --forest",
    "desc": "Árbol"
   },
   {
    "cmd": "pstree",
    "desc": "Pstree"
   },
   {
    "cmd": "pgrep -a sshd",
    "desc": "Pgrep"
   },
   {
    "cmd": "pgrep -u root",
    "desc": "Por usuario"
   },
   {
    "cmd": "top -b -n 1",
    "desc": "Batch"
   },
   {
    "cmd": "htop",
    "desc": "Htop"
   },
   {
    "cmd": "htop -u root",
    "desc": "Filtro"
   },
   {
    "cmd": "kill -9 PID",
    "desc": "Matar"
   },
   {
    "cmd": "kill -15 PID",
    "desc": "Terminar"
   },
   {
    "cmd": "killall -9 nombre",
    "desc": "Killall"
   },
   {
    "cmd": "pkill -f patron",
    "desc": "Pkill"
   },
   {
    "cmd": "nice -n -10 comando",
    "desc": "Prioridad"
   },
   {
    "cmd": "renice -n -5 -p PID",
    "desc": "Renice"
   },
   {
    "cmd": "nohup comando &",
    "desc": "Nohup"
   },
   {
    "cmd": "disown -a",
    "desc": "Disown"
   },
   {
    "cmd": "jobs -l",
    "desc": "Jobs"
   },
   {
    "cmd": "fg %1",
    "desc": "Foreground"
   },
   {
    "cmd": "bg %1",
    "desc": "Background"
   },
   {
    "cmd": "watch -n 2 'ps aux | grep x'",
    "desc": "Watch"
   },
   {
    "cmd": "taskset -c 0 comando",
    "desc": "CPU pin"
   }
  ]
 },
 {
  "tool": "memory-tools",
  "desc": "Gestión de memoria (free, vmstat, ulimit)",
  "commands": [
   {
    "cmd": "free -h",
    "desc": "Memoria"
   },
   {
    "cmd": "free -m",
    "desc": "MB"
   },
   {
    "cmd": "vmstat 1 5",
    "desc": "VMstat"
   },
   {
    "cmd": "vmstat -s",
    "desc": "Stats"
   },
   {
    "cmd": "cat /proc/meminfo | head -20",
    "desc": "Meminfo"
   },
   {
    "cmd": "smem -k",
    "desc": "Smem"
   },
   {
    "cmd": "smem -k -t -s rss | head",
    "desc": "Top"
   },
   {
    "cmd": "ulimit -a",
    "desc": "Límites"
   },
   {
    "cmd": "ulimit -n 4096",
    "desc": "Fds"
   },
   {
    "cmd": "ulimit -c unlimited",
    "desc": "Core"
   },
   {
    "cmd": "swapoff -a && swapon -a",
    "desc": "Reset swap"
   },
   {
    "cmd": "sysctl vm.swappiness",
    "desc": "Swappiness"
   },
   {
    "cmd": "sysctl vm.swappiness=10",
    "desc": "Cambiar"
   },
   {
    "cmd": "cat /proc/PID/status | grep Vm",
    "desc": "Vm de proc"
   },
   {
    "cmd": "ps -eo pid,rss,cmd --sort=-rss | head",
    "desc": "RSS top"
   }
  ]
 },
 {
  "tool": "text-processing",
  "desc": "Procesamiento de texto avanzado (jq, xargs, paste)",
  "commands": [
   {
    "cmd": "jq '.users[].name' data.json",
    "desc": "Jq"
   },
   {
    "cmd": "jq -r '.[] | .ip + \" \" + .port' scan.json",
    "desc": "Campos"
   },
   {
    "cmd": "jq '. | keys' data.json",
    "desc": "Keys"
   },
   {
    "cmd": "jq '.[0:5]' data.json",
    "desc": "Slice"
   },
   {
    "cmd": "xargs -I {} sh -c 'echo {}' < list.txt",
    "desc": "Xargs"
   },
   {
    "cmd": "cat urls.txt | xargs -P 10 -I {} curl -s {} -o /dev/null -w '%{http_code} {}\\n'",
    "desc": "Xargs parallel"
   },
   {
    "cmd": "paste -d',' a.txt b.txt",
    "desc": "Paste"
   },
   {
    "cmd": "join a.txt b.txt",
    "desc": "Join"
   },
   {
    "cmd": "column -t -s: /etc/passwd",
    "desc": "Column"
   },
   {
    "cmd": "nl archivo",
    "desc": "Numerar"
   },
   {
    "cmd": "rev archivo",
    "desc": "Reverse"
   },
   {
    "cmd": "fold -w 40 archivo",
    "desc": "Fold"
   },
   {
    "cmd": "fmt -w 80 archivo",
    "desc": "Format"
   },
   {
    "cmd": "diff a.txt b.txt",
    "desc": "Diff"
   },
   {
    "cmd": "comm -3 a.txt b.txt",
    "desc": "Comm"
   },
   {
    "cmd": "cmp a b",
    "desc": "Cmp"
   },
   {
    "cmd": "md5sum archivo",
    "desc": "Md5sum"
   },
   {
    "cmd": "cksum archivo",
    "desc": "Cksum"
   },
   {
    "cmd": "sha256sum archivo",
    "desc": "Sha256"
   },
   {
    "cmd": "base64 archivo",
    "desc": "Base64"
   },
   {
    "cmd": "xxd archivo | head",
    "desc": "Hexdump"
   },
   {
    "cmd": "od -c archivo | head",
    "desc": "Octal dump"
   },
   {
    "cmd": "iconv -f utf-8 -t latin1 archivo",
    "desc": "Iconv"
   },
   {
    "cmd": "dos2unix archivo",
    "desc": "Dos2unix"
   }
  ]
 },
 {
  "tool": "system-info",
  "desc": "Recopilación de información del sistema",
  "commands": [
   {
    "cmd": "uname -a",
    "desc": "Kernel"
   },
   {
    "cmd": "hostnamectl",
    "desc": "Hostname"
   },
   {
    "cmd": "cat /etc/os-release",
    "desc": "OS"
   },
   {
    "cmd": "uptime",
    "desc": "Uptime"
   },
   {
    "cmd": "date",
    "desc": "Fecha"
   },
   {
    "cmd": "timedatectl",
    "desc": "Hora"
   },
   {
    "cmd": "whoami && id",
    "desc": "Usuario"
   },
   {
    "cmd": "who",
    "desc": "Logins"
   },
   {
    "cmd": "w",
    "desc": "W"
   },
   {
    "cmd": "last -n 20",
    "desc": "Últimos"
   },
   {
    "cmd": "env | sort",
    "desc": "Env"
   },
   {
    "cmd": "set | head -30",
    "desc": "Vars"
   },
   {
    "cmd": "locale",
    "desc": "Locale"
   },
   {
    "cmd": "lsb_release -a",
    "desc": "Release"
   },
   {
    "cmd": "dmidecode -t system | head -15",
    "desc": "DMI"
   },
   {
    "cmd": "lscpu | head -20",
    "desc": "CPU"
   },
   {
    "cmd": "lspci | head",
    "desc": "PCI"
   },
   {
    "cmd": "lsusb",
    "desc": "USB"
   },
   {
    "cmd": "lshw -short | head -30",
    "desc": "Hardware"
   },
   {
    "cmd": "ip addr && ip route",
    "desc": "Red"
   }
  ]
 },
 {
  "tool": "service-extra",
  "desc": "Servicios del sistema (variantes)",
  "commands": [
   {
    "cmd": "systemctl list-units --type=service",
    "desc": "Servicios"
   },
   {
    "cmd": "systemctl list-units --failed",
    "desc": "Fallidos"
   },
   {
    "cmd": "systemctl status sshd",
    "desc": "Estado"
   },
   {
    "cmd": "systemctl is-enabled sshd",
    "desc": "Enabled"
   },
   {
    "cmd": "systemctl is-active sshd",
    "desc": "Activo"
   },
   {
    "cmd": "systemctl cat sshd",
    "desc": "Unit file"
   },
   {
    "cmd": "systemctl edit sshd",
    "desc": "Editar"
   },
   {
    "cmd": "systemctl mask servicio",
    "desc": "Mascar"
   },
   {
    "cmd": "systemctl unmask servicio",
    "desc": "Unmask"
   },
   {
    "cmd": "systemctl daemon-reload",
    "desc": "Reload"
   },
   {
    "cmd": "service ssh status",
    "desc": "SysV"
   },
   {
    "cmd": "service --status-all",
    "desc": "Todos"
   },
   {
    "cmd": "chkconfig --list",
    "desc": "Chkconfig"
   },
   {
    "cmd": "update-rc.d ssh enable",
    "desc": "SysV enable"
   },
   {
    "cmd": "ls /etc/init.d/",
    "desc": "Init scripts"
   },
   {
    "cmd": "journalctl -u sshd",
    "desc": "Journal"
   },
   {
    "cmd": "journalctl -u sshd --since '1 hour ago'",
    "desc": "Desde"
   },
   {
    "cmd": "journalctl -p err -b",
    "desc": "Errores boot"
   },
   {
    "cmd": "ss -tlnp",
    "desc": "Puertos"
   },
   {
    "cmd": "ss -tulnp",
    "desc": "UDP"
   }
  ]
 },
 {
  "tool": "apt-tools",
  "desc": "Gestión de paquetes (apt, dpkg)",
  "commands": [
   {
    "cmd": "apt update",
    "desc": "Update"
   },
   {
    "cmd": "apt upgrade -y",
    "desc": "Upgrade"
   },
   {
    "cmd": "apt install nmap",
    "desc": "Instalar"
   },
   {
    "cmd": "apt remove nmap",
    "desc": "Quitar"
   },
   {
    "cmd": "apt purge nmap",
    "desc": "Purgar"
   },
   {
    "cmd": "apt search nmap",
    "desc": "Buscar"
   },
   {
    "cmd": "apt show nmap",
    "desc": "Info"
   },
   {
    "cmd": "apt list --installed | head",
    "desc": "Instalados"
   },
   {
    "cmd": "apt autoremove",
    "desc": "Autoremove"
   },
   {
    "cmd": "apt-cache policy nmap",
    "desc": "Versiones"
   },
   {
    "cmd": "apt-file search /usr/bin/x",
    "desc": "Apt-file"
   },
   {
    "cmd": "dpkg -l | head",
    "desc": "Dpkg"
   },
   {
    "cmd": "dpkg -L nmap | head",
    "desc": "Archivos"
   },
   {
    "cmd": "dpkg -S /usr/bin/nmap",
    "desc": "Owner"
   },
   {
    "cmd": "dpkg -i paquete.deb",
    "desc": "Instalar deb"
   },
   {
    "cmd": "dpkg --configure -a",
    "desc": "Configurar"
   },
   {
    "cmd": "dpkg -r paquete",
    "desc": "Quitar"
   },
   {
    "cmd": "snap list",
    "desc": "Snaps"
   },
   {
    "cmd": "snap install paquete",
    "desc": "Instalar snap"
   },
   {
    "cmd": "flatpak list",
    "desc": "Flatpaks"
   }
  ]
 },
 {
  "tool": "network-diag",
  "desc": "Diagnóstico de red (mtr, traceroute, ethtool)",
  "commands": [
   {
    "cmd": "mtr IP",
    "desc": "Mtr"
   },
   {
    "cmd": "mtr -r -c 10 IP",
    "desc": "Report"
   },
   {
    "cmd": "mtr -rw IP",
    "desc": "Wide"
   },
   {
    "cmd": "traceroute IP",
    "desc": "Trace"
   },
   {
    "cmd": "traceroute -I IP",
    "desc": "ICMP"
   },
   {
    "cmd": "traceroute -T -p 443 IP",
    "desc": "TCP"
   },
   {
    "cmd": "tracepath IP",
    "desc": "Tracepath"
   },
   {
    "cmd": "ethtool eth0",
    "desc": "Ethtool"
   },
   {
    "cmd": "ethtool -S eth0 | head",
    "desc": "Stats"
   },
   {
    "cmd": "ethtool -p eth0 5",
    "desc": "Identificar"
   },
   {
    "cmd": "ethtool eth0 | grep Speed",
    "desc": "Velocidad"
   },
   {
    "cmd": "ss -s",
    "desc": "Sockets sum"
   },
   {
    "cmd": "ss -t state established",
    "desc": "Established"
   },
   {
    "cmd": "ss -lntp",
    "desc": "Listening"
   },
   {
    "cmd": "arp -a",
    "desc": "ARP"
   },
   {
    "cmd": "ip -s link",
    "desc": "Stats"
   },
   {
    "cmd": "netstat -i",
    "desc": "Interfaces"
   },
   {
    "cmd": "route -n",
    "desc": "Rutas"
   },
   {
    "cmd": "getent hosts objetivo.com",
    "desc": "Resolver"
   },
   {
    "cmd": "curl -s ifconfig.me",
    "desc": "IP pública"
   }
  ]
 },
 {
  "tool": "users-groups",
  "desc": "Gestión de usuarios y grupos",
  "commands": [
   {
    "cmd": "useradd -m -s /bin/bash user",
    "desc": "Crear user"
   },
   {
    "cmd": "useradd -m -u 1005 -s /bin/bash user",
    "desc": "UID"
   },
   {
    "cmd": "useradd -o -u 0 -g 0 -M user",
    "desc": "UID 0"
   },
   {
    "cmd": "userdel -r user",
    "desc": "Borrar"
   },
   {
    "cmd": "usermod -aG sudo user",
    "desc": "Grupo sudo"
   },
   {
    "cmd": "usermod -aG docker user",
    "desc": "Grupo docker"
   },
   {
    "cmd": "usermod -s /bin/bash user",
    "desc": "Shell"
   },
   {
    "cmd": "usermod -L user",
    "desc": "Bloquear"
   },
   {
    "cmd": "usermod -U user",
    "desc": "Desbloquear"
   },
   {
    "cmd": "passwd user",
    "desc": "Password"
   },
   {
    "cmd": "groupadd grupo",
    "desc": "Crear grupo"
   },
   {
    "cmd": "groupdel grupo",
    "desc": "Borrar grupo"
   },
   {
    "cmd": "groups user",
    "desc": "Grupos"
   },
   {
    "cmd": "id user",
    "desc": "Info"
   },
   {
    "cmd": "chage -E 2026-12-31 user",
    "desc": "Expiración"
   },
   {
    "cmd": "chsh -s /bin/bash user",
    "desc": "Cambiar shell"
   },
   {
    "cmd": "visudo",
    "desc": "Sudoers"
   },
   {
    "cmd": "getent passwd | head",
    "desc": "Passwd"
   },
   {
    "cmd": "getent group | head",
    "desc": "Group"
   },
   {
    "cmd": "grep -E ':/bin/(ba)?sh' /etc/passwd",
    "desc": "Shells"
   }
  ]
 },
 {
  "tool": "backup-tools",
  "desc": "Herramientas de backup (tar, rsync, dd)",
  "commands": [
   {
    "cmd": "tar czf backup.tar.gz /etc",
    "desc": "Tar gz"
   },
   {
    "cmd": "tar cjf backup.tar.bz2 /var/www",
    "desc": "Tar bz2"
   },
   {
    "cmd": "tar cJf backup.tar.xz /home",
    "desc": "Tar xz"
   },
   {
    "cmd": "tar czf - /etc | ssh user@IP 'cat > /tmp/etc.tgz'",
    "desc": "Tar remoto"
   },
   {
    "cmd": "tar tzf backup.tar.gz | head",
    "desc": "Listar"
   },
   {
    "cmd": "tar xzf backup.tar.gz -C /tmp",
    "desc": "Extraer"
   },
   {
    "cmd": "tar --exclude='*.log' czf b.tgz /var/log",
    "desc": "Excluir"
   },
   {
    "cmd": "rsync -av /src/ /dst/",
    "desc": "Sync"
   },
   {
    "cmd": "rsync -avz /src/ user@IP:/dst/",
    "desc": "Remoto"
   },
   {
    "cmd": "rsync -avz --delete /src/ user@IP:/dst/",
    "desc": "Mirror"
   },
   {
    "cmd": "rsync -av --exclude='tmp' /src/ /dst/",
    "desc": "Excluir"
   },
   {
    "cmd": "rsync -avz -e 'ssh -p 2222' /src/ user@IP:/dst/",
    "desc": "Puerto"
   },
   {
    "cmd": "dd if=/dev/sda of=/tmp/backup.dd bs=4M",
    "desc": "DD backup"
   },
   {
    "cmd": "dd if=/tmp/backup.dd of=/dev/sda bs=4M",
    "desc": "Restaurar"
   },
   {
    "cmd": "cp -a /etc /tmp/etc-copy",
    "desc": "Copiar permisos"
   },
   {
    "cmd": "du -sh /var/www",
    "desc": "Tamaño"
   },
   {
    "cmd": "df -h",
    "desc": "Espacio"
   }
  ]
 },
 {
  "tool": "filesystem-tools",
  "desc": "Herramientas del sistema de archivos",
  "commands": [
   {
    "cmd": "df -h",
    "desc": "Montajes"
   },
   {
    "cmd": "df -i",
    "desc": "Inodes"
   },
   {
    "cmd": "du -sh * | sort -rh | head",
    "desc": "Top dirs"
   },
   {
    "cmd": "du -ah /tmp | sort -rh | head -10",
    "desc": "Top files"
   },
   {
    "cmd": "mount -t ext4 /dev/sdb1 /mnt",
    "desc": "Montar"
   },
   {
    "cmd": "mount -o loop,ro image.dd /mnt",
    "desc": "Loop ro"
   },
   {
    "cmd": "mount -t cifs //IP/share /mnt -o username=u,password=p",
    "desc": "CIFS"
   },
   {
    "cmd": "mount -t nfs IP:/export /mnt",
    "desc": "NFS"
   },
   {
    "cmd": "umount /mnt",
    "desc": "Desmontar"
   },
   {
    "cmd": "lsblk -f",
    "desc": "FS"
   },
   {
    "cmd": "blkid",
    "desc": "UUID"
   },
   {
    "cmd": "tune2fs -l /dev/sdb1 | head -20",
    "desc": "Tune2fs"
   },
   {
    "cmd": "resize2fs /dev/sdb1",
    "desc": "Redimensionar"
   },
   {
    "cmd": "fsck /dev/sdb1",
    "desc": "Fsck"
   },
   {
    "cmd": "fsck -y /dev/sdb1",
    "desc": "Auto fix"
   },
   {
    "cmd": "xfs_repair -n /dev/sdb1",
    "desc": "XFS check"
   },
   {
    "cmd": "stat /tmp/file",
    "desc": "Stats"
   },
   {
    "cmd": "inotifywait -m /tmp -e modify,create",
    "desc": "Monitor"
   },
   {
    "cmd": "getfattr -d /tmp/file",
    "desc": "xattrs"
   },
   {
    "cmd": "setfacl -m u:user:rw /tmp/file",
    "desc": "ACL"
   }
  ]
 },
 {
  "tool": "init-tools",
  "desc": "Inicialización del sistema (boot, initramfs)",
  "commands": [
   {
    "cmd": "systemd-analyze",
    "desc": "Tiempo boot"
   },
   {
    "cmd": "systemd-analyze blame | head -10",
    "desc": "Servicios lentos"
   },
   {
    "cmd": "systemd-analyze critical-chain",
    "desc": "Cadena"
   },
   {
    "cmd": "systemd-analyze plot > boot.svg",
    "desc": "Plot"
   },
   {
    "cmd": "systemctl list-sockets",
    "desc": "Sockets"
   },
   {
    "cmd": "systemctl list-timers",
    "desc": "Timers"
   },
   {
    "cmd": "systemctl get-default",
    "desc": "Default target"
   },
   {
    "cmd": "systemctl set-default multi-user.target",
    "desc": "Cambiar"
   },
   {
    "cmd": "reboot",
    "desc": "Reboot"
   },
   {
    "cmd": "shutdown -h now",
    "desc": "Apagar"
   },
   {
    "cmd": "poweroff",
    "desc": "Poweroff"
   },
   {
    "cmd": "init 0",
    "desc": "SysV"
   },
   {
    "cmd": "dmesg | head -20",
    "desc": "Boot log"
   },
   {
    "cmd": "journalctl -b | head",
    "desc": "Journal boot"
   },
   {
    "cmd": "ls /boot/",
    "desc": "Boot dir"
   },
   {
    "cmd": "update-grub",
    "desc": "GRUB"
   },
   {
    "cmd": "grub-install /dev/sda",
    "desc": "Instalar grub"
   },
   {
    "cmd": "mkinitramfs -o /boot/initrd.img-$(uname -r)",
    "desc": "Initramfs"
   }
  ]
 }
];
