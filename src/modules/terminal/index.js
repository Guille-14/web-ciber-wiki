/* ═══════════════════════════════════════════════════════════════
   index.js — Entry point ES module de la Sala de Comandos.
   Importa en orden estricto los submódulos que exponen globals
   (VFS, HOSTS, GameState, Shell, UI...) y re-exporta el inicializador.
   El orden importa: vfs → hosts → datos → comandos → estado →
   shell → ui → main.
   ═══════════════════════════════════════════════════════════════ */
import '../../styles/terminal.css';

import './vfs.js';
import './data/hosts.js';
import './data/game-data.js';
import './commands/core.js';
import './commands/network.js';
import './commands/cloud.js';
import './commands/pwn.js';
import './commands/wireless.js';
import './game-state.js';
import './shell.js';
import './ui.js';

export { initTerminal } from './main.js';
