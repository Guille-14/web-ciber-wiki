import { QUIZ_DATA } from "./quiz-data.js";
import { events, EVENTS } from "../../core/events.js";


const LEVELS = [
  {min:0,max:100,name:'Novato',icon:'🌱'},{min:100,max:300,name:'Aprendiz',icon:'📚'},
  {min:300,max:600,name:'Iniciado',icon:'⚡'},{min:600,max:1000,name:'Analista',icon:'🔍'},
  {min:1000,max:1500,name:'Hacker',icon:'🎯'},{min:1500,max:2500,name:'Experto',icon:'💎'},
  {min:2500,max:4000,name:'Élite',icon:'🚀'},{min:4000,max:7000,name:'Maestro',icon:'👑'},
  {min:7000,max:11000,name:'Legendario',icon:'🌌'},{min:11000,max:Infinity,name:'CiberDios',icon:'🏛️'},
];
const LEAGUES = [
  {id:'bronze',name:'Liga Bronce',icon:'🥉',color:'#cd7f32'},
  {id:'silver',name:'Liga Plata',icon:'🥈',color:'#c0c0c0'},
  {id:'gold',name:'Liga Oro',icon:'🥇',color:'#ffd700'},
  {id:'platinum',name:'Liga Platino',icon:'💠',color:'#00d9ff'},
  {id:'diamond',name:'Liga Diamante',icon:'💎',color:'#b9f2ff'},
  {id:'master',name:'Liga Maestro',icon:'👑',color:'#a855f7'},
  {id:'champion',name:'Liga Campeón',icon:'🏆',color:'#ff4400'},
];
const NPC_POOL = [
  'AlexH4x0r','CyberNinja','ByteKiller','NetRunner','Ph4ntom','VirusHunter',
  'SecProx','CryptoWolf','DataBreaker','GhostShell','ZeroDay','R00tK1t',
  'BlkHat99','ThreatActor','DefendR','PacketSniff','SQLJockey','XSSMaster',
  'FirewallFightr','APT_Hunter','HashBreaker','PhishKiller','SOCAnalyst',
  'MalwareMuncher','FireWall_E','KernelPanic','Rootkit_Rick','Exploit_Eddy',
  'CipherSally','Snort_Boy','Nmap_Nancy','Metasploit_Mike','Wireshark_Wendy',
];
const NPC_ICO = ['🤖','👤','🦾','🎭','🕵️','🦊','🐺','🦅','🐉','🤠','👾','💀','🧑‍💻','👨‍🚀','🧙','🥷','🦇','🐱‍👤','🦈','🐲'];

const ACHIEVEMENTS = [
  {id:'first',icon:'🎯',title:'Primera Sangre',desc:'Completa tu primera sesión',check:s=>s.totalSessions>=1},
  {id:'perfect',icon:'⭐',title:'Perfección',desc:'Sesión sin ningún fallo',check:s=>s.perfectSessions>=1},
  {id:'str3',icon:'🔥',title:'Racha Encendida',desc:'3 días consecutivos',check:s=>s.maxStreak>=3},
  {id:'str7',icon:'🌟',title:'Semana Completa',desc:'7 días consecutivos',check:s=>s.maxStreak>=7},
  {id:'str14',icon:'💫',title:'Bisemanario',desc:'14 días consecutivos',check:s=>s.maxStreak>=14},
  {id:'str30',icon:'👑',title:'Mes de Élite',desc:'30 días consecutivos',check:s=>s.maxStreak>=30},
  {id:'str100',icon:'🏛️',title:'Inquebrantable',desc:'100 días consecutivos',check:s=>s.maxStreak>=100},
  {id:'xp100',icon:'⚡',title:'Centenario',desc:'Acumula 100 XP',check:s=>s.totalXP>=100},
  {id:'xp500',icon:'💎',title:'Medio Millar',desc:'Acumula 500 XP',check:s=>s.totalXP>=500},
  {id:'xp1000',icon:'🚀',title:'Millenium',desc:'Acumula 1000 XP',check:s=>s.totalXP>=1000},
  {id:'xp3000',icon:'🌌',title:'Maestro Supremo',desc:'Acumula 3000 XP',check:s=>s.totalXP>=3000},
  {id:'xp5000',icon:'💫',title:'Leyenda Viva',desc:'Acumula 5000 XP',check:s=>s.totalXP>=5000},
  {id:'xp10000',icon:'🏆',title:'Inmortal',desc:'Acumula 10000 XP',check:s=>s.totalXP>=10000},
  {id:'daily7',icon:'📅',title:'Constante',desc:'7 daily completados',check:s=>s.dailyCompleted>=7},
  {id:'daily30',icon:'🗓️',title:'Devoto',desc:'30 daily completados',check:s=>s.dailyCompleted>=30},
  {id:'daily100',icon:'📆',title:'Fiel',desc:'100 daily completados',check:s=>s.dailyCompleted>=100},
  {id:'p_osint',icon:'🔍',title:'Maestro OSINT',desc:'Path OSINT completado',check:s=>s.completedPaths.includes('osint')},
  {id:'p_web',icon:'🌐',title:'Web Slayer',desc:'Path Hacking Web completado',check:s=>s.completedPaths.includes('web')},
  {id:'p_mal',icon:'🦠',title:'Cazador Malware',desc:'Path Malware completado',check:s=>s.completedPaths.includes('malware')},
  {id:'p_cry',icon:'🔐',title:'Criptógrafo',desc:'Path Cripto completado',check:s=>s.completedPaths.includes('crypto')},
  {id:'p_pen',icon:'⚔️',title:'Pentester',desc:'Path Pentest completado',check:s=>s.completedPaths.includes('pentest')},
  {id:'p_leg',icon:'⚖️',title:'Legalista',desc:'Path Legal completado',check:s=>s.completedPaths.includes('legal')},
  {id:'all_paths',icon:'🏆',title:'Maestro CiberWiki',desc:'Todos los paths completados',check:s=>s.completedPaths.length>=6},
  {id:'xp100_one',icon:'💯',title:'Sesión de Élite',desc:'100+ XP en una sesión',check:s=>s.maxXpSession>=100},
  {id:'lvl5',icon:'🎯',title:'Hacker Reco.',desc:'Nivel 5 (Hacker)',check:s=>{for(let i=LEVELS.length-1;i>=0;i--)if(s.totalXP>=LEVELS[i].min)return i>=4;return false;}},
  {id:'lvl8',icon:'👑',title:'Maestro',desc:'Nivel 8 (Maestro)',check:s=>{for(let i=LEVELS.length-1;i>=0;i--)if(s.totalXP>=LEVELS[i].min)return i>=7;return false;}},
  {id:'league1',icon:'🥇',title:'Número 1',desc:'1º en liga semanal',check:s=>s.weeklyWins>=1},
  {id:'league3',icon:'🏆',title:'Campeón',desc:'Gana liga 3 veces',check:s=>s.weeklyWins>=3},
  {id:'answer500',icon:'📝',title:'Enciclopedia',desc:'500 respuestas correctas',check:s=>s.totalCorrect>=500},
  {id:'answer1000',icon:'📚',title:'Biblioteca',desc:'1000 respuestas correctas',check:s=>s.totalCorrect>=1000},
  {id:'perfect5',icon:'🏅',title:'Racha Perfecta',desc:'5 sesiones perfectas',check:s=>s.perfectSessions>=5},
];

let G={}, SES={}, _mSel=null, _oSel=null;

function $(id){return document.getElementById(id)}
function qa(s){return document.querySelectorAll(s)}
function shuffle(a){var b=[...a];for(var i=b.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];}return b;}

/* ── FLASH ── */
function flash(ok){
  var d=document.createElement('div');d.className='qz-flash qz-flash--'+(ok?'ok':'bad');
  document.body.appendChild(d);
  setTimeout(function(){if(d.parentNode)d.parentNode.removeChild(d);},700);
}

/* ── XP POPUP ── */
function xpPopup(xp){
  if(xp<=0)return;
  var d=document.createElement('div');d.className='qz-xp-popup';d.textContent='+'+xp+' XP';
  document.body.appendChild(d);
  setTimeout(function(){if(d.parentNode)d.parentNode.removeChild(d);},1000);
}

/* ── COMBO STREAK ── */
let comboCount = 0;
function updateCombo(ok) {
  if (ok) {
    comboCount++;
    if (comboCount >= 2) showCombo(comboCount);
  } else {
    comboCount = 0;
    hideCombo();
  }
}
function showCombo(n) {
  var el = $('qz-combo');
  if (!el) {
    el = document.createElement('div');
    el.id = 'qz-combo';
    el.className = 'qz-combo';
    el.innerHTML = '<div class="qz-combo-x"></div><div class="qz-combo-label">COMBO</div>';
    document.body.appendChild(el);
  }
  el.querySelector('.qz-combo-x').textContent = 'x' + n;
  el.className = 'qz-combo qz-combo--show';
}
function hideCombo() {
  var el = $('qz-combo');
  if (el) el.className = 'qz-combo';
}

/* ── SOUNDS ── */
let audioCtx = null;
function getAudioCtx() {
  if (!audioCtx) try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) {}
  return audioCtx;
}
function playTone(freq, dur, type, vol) {
  var ctx = getAudioCtx(); if (!ctx) return;
  try {
    var osc = ctx.createOscillator(), gain = ctx.createGain();
    osc.type = type || 'sine'; osc.frequency.value = freq;
    gain.gain.setValueAtTime(vol || 0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(); osc.stop(ctx.currentTime + dur);
  } catch(e) {}
}
function sndCorrect() { playTone(523, 0.12, 'sine', 0.06); setTimeout(function(){ playTone(659, 0.12, 'sine', 0.06); }, 80); }
function sndWrong() { playTone(200, 0.25, 'sawtooth', 0.04); }
function sndCombo() { playTone(784, 0.08, 'sine', 0.05); setTimeout(function(){ playTone(988, 0.08, 'sine', 0.05); }, 60); setTimeout(function(){ playTone(1175, 0.15, 'sine', 0.05); }, 120); }
function sndLevelUp() { playTone(523, 0.1, 'sine', 0.06); setTimeout(function(){ playTone(659, 0.1, 'sine', 0.06); }, 100); setTimeout(function(){ playTone(784, 0.1, 'sine', 0.06); }, 200); setTimeout(function(){ playTone(1047, 0.2, 'sine', 0.06); }, 300); }

/* ── HEART LOSE ANIM ── */
function heartsHTMLWithLose(n,max,lost){
  var h='';
  for(var i=0;i<max;i++){
    if(i===lost)h+='<span class="qz-h qz-h--lose">❤️</span>';
    else if(i<n)h+='<span class="qz-h">❤️</span>';
    else h+='<span class="qz-h qz-h--empty">❤️</span>';
  }
  return h;
}

/* ── SAVE / LOAD ── */
function load(){
  try{
    var raw=localStorage.getItem('cqz_v2');
    var def={totalXP:0,weeklyXP:0,streak:0,maxStreak:0,lastPlayDate:null,lastDailyDate:null,
      lives:5,maxLives:5,livesTs:Date.now(),unlockedAchs:[],completedPaths:[],pathProgress:{},
      totalSessions:0,perfectSessions:0,dailyCompleted:0,leagueIdx:0,weeklyReset:null,
      npcData:null,weeklyWins:0,totalCorrect:0,maxXpSession:0};
    G=raw?{...def,...JSON.parse(raw)}:{...def};
    regenLives();checkStreak();checkWeeklyReset();
  }catch(e){G={};}
}
function save(){try{localStorage.setItem('cqz_v2',JSON.stringify(G));}catch(e){}}

/* ── LIVES ── */
function regenLives(){
  if(G.lives>=G.maxLives){G.livesTs=Date.now();return;}
  var ms=Date.now()-G.livesTs,rate=30*60*1000,add=Math.floor(ms/rate);
  if(add>0){G.lives=Math.min(G.maxLives,G.lives+add);G.livesTs=Date.now()-(ms%rate);save();}
}
function loseLife(){if(G.lives>0){G.lives--;G.livesTs=Date.now();save();}}
function regenMsg(){
  var ms=30*60*1000-(Date.now()-G.livesTs);
  return ms<=0?'Una vida regenerada. Recarga la página.':'Próxima vida en ~'+Math.ceil(ms/60000)+' min.';
}
function heartsHTML(n,max){
  var h='';for(var i=0;i<max;i++)h+='<span class="qz-h'+(i<n?'':' qz-h--empty')+'">❤️</span>';
  return h;
}

/* ── STREAK ── */
function checkStreak(){
  var t=new Date().toDateString(),y=new Date(Date.now()-864e5).toDateString();
  if(G.lastPlayDate&&G.lastPlayDate!==t&&G.lastPlayDate!==y){G.streak=0;save();}
}
function markPlayed(){
  var t=new Date().toDateString();
  if(G.lastPlayDate===t)return;
  var y=new Date(Date.now()-864e5).toDateString();
  G.streak=G.lastPlayDate===y?G.streak+1:1;
  G.maxStreak=Math.max(G.maxStreak,G.streak);
  G.lastPlayDate=t;save();
}

/* ── LEAGUE ── */
function weekStart(){var d=new Date();d.setHours(0,0,0,0);d.setDate(d.getDate()-d.getDay());return d.toDateString();}
function checkWeeklyReset(){
  var ws=weekStart();
  if(G.weeklyReset!==ws){G.weeklyXP=0;G.weeklyReset=ws;G.npcData=genNPCs();save();}
}
function genNPCs(){return shuffle(NPC_POOL).slice(0,29).map(function(n){return{name:n,icon:NPC_ICO[Math.floor(Math.random()*NPC_ICO.length)],xp:Math.floor(Math.random()*400)+10};});}

/* ── LEVEL ── */
function getLevel(xp){for(var i=LEVELS.length-1;i>=0;i--)if(xp>=LEVELS[i].min)return{idx:i,...LEVELS[i]};return{idx:0,...LEVELS[0]};}
function xpPct(xp){var l=getLevel(xp);return l.max===Infinity?100:Math.round(((xp-l.min)/(l.max-l.min))*100);}

/* ── VIEWS ── */
function showView(name){
  if(!name)return;
  qa('.qz-panel').forEach(function(v){v.classList.remove('qz-panel--active');});
  var el=$('qz-p-'+name);
  if(el)el.classList.add('qz-panel--active');
  var bar=$('qz-bar'),xpbar=document.querySelector('.qz-xpbar');
  if(name==='session'){
    if(bar)bar.style.display='none';
    if(xpbar)xpbar.style.display='none';
  }else{
    if(bar)bar.style.display='';
    if(xpbar)xpbar.style.display='';
  }
  scrollTo(0,0);
  if(name==='home')renderHome();
  if(name==='achievements')renderAchs();
  if(name==='league')renderLeague();
  updateBar();
}
function updateBar(){
  var lv=getLevel(G.totalXP);
  $('qz-h-streak').textContent=G.streak;
  $('qz-h-xp').textContent=G.totalXP+' XP';
  $('qz-h-lvl').textContent=lv.icon+' Nivel '+(lv.idx+1)+' · '+lv.name;
  $('qz-h-xpbar-label').textContent=G.totalXP+' / '+(lv.max===Infinity?'∞':lv.max);
  $('qz-h-xpbar').style.width=xpPct(G.totalXP)+'%';
  $('qz-h-lives').innerHTML=heartsHTML(G.lives,G.maxLives);
}

function goBack(){
  if(SES&&SES.qs&&SES.cur>=0){
    if(confirm('¿Salir? Perderás el progreso.')){hideFB();showView('home');}
  }else showView('home');
}
function exitToMain(){
  var s=document.getElementById('quiz-section');
  if(s){var cb=s.closest('.content-body');if(cb){cb.style.padding='';cb.style.overflow='';}}
  if(typeof window.switchTab==='function')window.switchTab('articles');
  else window.location.href='index.html';
}

/* ── START ── */
function startPath(pid){
  if(G.lives<=0){alert(regenMsg());return;}
  if(!QUIZ_DATA||!QUIZ_DATA.paths){alert('Error: datos no cargados.');return;}
  var path=QUIZ_DATA.paths.find(function(p){return p.id===pid;});
  if(!path)return;
  var all=QUIZ_DATA.questions[pid]||[];
  if(!all.length){alert('No hay preguntas para esta ruta.');return;}
  var sel=shuffle(all).slice(0,Math.min(12,all.length));
  comboCount=0;SES={pathId:pid,qs:sel,cur:0,ok:0,bad:0,xp:0,newAchs:[],isDaily:false,matched:[],orderNext:0};
  showView('session');renderQ();
}

function startDaily(){
  var today=new Date().toDateString();
  if(G.lastDailyDate===today){alert('¡Ya completaste el desafío de hoy! 🔥');return;}
  if(G.lives<=0){alert(regenMsg());return;}
  if(!QUIZ_DATA||!QUIZ_DATA.paths){alert('Error: datos no cargados.');return;}
  var all=[],qk=Object.keys(QUIZ_DATA.questions);
  qk.forEach(function(pid){all.push(...shuffle(QUIZ_DATA.questions[pid]).slice(0,2));});
  all=shuffle(all).slice(0,12);
  comboCount=0;SES={pathId:'daily',qs:all,cur:0,ok:0,bad:0,xp:0,newAchs:[],isDaily:true,matched:[],orderNext:0};
  showView('session');renderQ();
}

/* ── RENDER QUESTION ── */
function renderQ(){
  var Q=SES.qs[SES.cur];if(!Q){endSession();return;}
  var tot=SES.qs.length;
  var prog=$('qz-sprog');if(prog)prog.style.width=Math.round((SES.cur/tot)*100)+'%';
  $('qz-s-lives').innerHTML=heartsHTML(G.lives,G.maxLives);
  var body=$('qz-sess-body');if(!body)return;

  var labels={multi:'Opción Múltiple',tf:'Verdadero o Falso',fill:'Completa la frase',match:'Empareja',order:'Ordena los pasos'};
  var diffs={bg:'Principiante',int:'Intermedio',av:'Avanzado',hd:'Experto'};

  var h='<div class="qz-q-counter">'+(SES.cur+1)+' / '+tot+'</div>';
  h+='<div class="qz-q-head">';
  h+='<span class="qz-q-type">'+(labels[Q.t]||'?')+'</span>';
  h+='<span class="qz-q-diff qz-q-diff--'+(Q.d||'int')+'">'+(diffs[Q.d]||'Intermedio')+'</span>';
  h+='</div>';
  h+='<div class="qz-q-text">'+Q.q+'</div>';

  if(Q.t==='multi'){
    h+='<div class="qz-opts">';
    ['A','B','C','D'].forEach(function(l,i){
      h+='<button class="qz-opt" data-qz-action="ans('+i+')" id="qz-o'+i+'"><span class="qz-opt-k">'+l+'</span><span class="qz-opt-t">'+(Q.o[i]||'???')+'</span></button>';
    });
    h+='</div>';
  }else if(Q.t==='tf'){
    h+='<div class="qz-tf">';
    h+='<button class="qz-tf-btn qz-tf-t" data-qz-action="ansTF(true)">✅ Verdadero</button>';
    h+='<button class="qz-tf-btn qz-tf-f" data-qz-action="ansTF(false)">❌ Falso</button>';
    h+='</div>';
  }else if(Q.t==='fill'){
    var sent=Q.q.replace('___','<span class="qz-fill-blank" id="qz-fi-bl">___</span>');
    h='<div class="qz-q-counter">'+(SES.cur+1)+' / '+tot+'</div>';
    h+='<div class="qz-q-head"><span class="qz-q-type">'+labels[Q.t]+'</span>';
    h+='<span class="qz-q-diff qz-q-diff--'+(Q.d||'int')+'">'+(diffs[Q.d]||'Intermedio')+'</span></div>';
    h+='<div class="qz-fill-sent">'+sent+'</div>';
    h+='<div class="qz-opts">';
    ['A','B','C','D'].forEach(function(l,i){
      h+='<button class="qz-opt" data-qz-action="ansFill('+i+')" id="qz-o'+i+'"><span class="qz-opt-k">'+l+'</span><span class="qz-opt-t">'+(Q.o[i]||'???')+'</span></button>';
    });
    h+='</div>';
  }else if(Q.t==='match'){
    _mSel=null;SES.matched=[];
    var shuffR=shuffle(Q.p.map(function(p,i){return{i:i,t:p[1]};}));
    h+='<div class="qz-match">';
    h+='<div class="qz-match-col"><div class="qz-match-hd">Concepto</div>';
    Q.p.forEach(function(p,i){h+='<div class="qz-match-item" id="qz-ml'+i+'" data-qz-action="mL('+i+')">'+p[0]+'</div>';});
    h+='</div>';
    h+='<div class="qz-match-col"><div class="qz-match-hd">Definición</div>';
    shuffR.forEach(function(r){h+='<div class="qz-match-item" id="qz-mr'+r.i+'" data-qz-action="mR('+r.i+')">'+r.t+'</div>';});
    h+='</div></div>';
    h+='<div class="qz-match-hint" id="qz-mhint">← Selecciona un concepto</div>';
  }else if(Q.t==='order'){
    _oSel=null;SES.orderNext=0;
    var sh=shuffle(Q.steps.map(function(s,i){return{t:s,o:i};}));
    SES.orderState=sh;
    h+='<div class="qz-order">';
    sh.forEach(function(s,i){
      h+='<div class="qz-order-item" id="qz-oi'+i+'" data-qz-action="oClick('+i+')" data-o="'+s.o+'">';
      h+='<span class="qz-order-n">'+(i+1)+'</span><span class="qz-order-t">'+s.t+'</span></div>';
    });
    h+='</div>';
    h+='<div class="qz-match-hint" id="qz-ohint">Toca en el orden correcto</div>';
  }
  body.classList.remove('qz-sess-body--in');
  body.innerHTML=h;
  void body.offsetWidth;
  body.classList.add('qz-sess-body--in');
}

/* ── ANSWERS ── */
function ans(idx){
  var Q=SES.qs[SES.cur],ok=idx===Q.c;
  qa('.qz-opt').forEach(function(b){b.disabled=true;b.classList.remove('qz-opt--ok','qz-opt--bad');});
  var correct=$('qz-o'+Q.c);if(correct)correct.classList.add('qz-opt--ok');
  if(!ok){var wrong=$('qz-o'+idx);if(wrong)wrong.classList.add('qz-opt--bad');}
  processAns(ok,Q);
}
function ansTF(a){
  var Q=SES.qs[SES.cur],ok=a===Q.c;
  qa('.qz-tf-btn').forEach(function(b){b.disabled=true;b.classList.remove('qz-tf-btn--ok','qz-tf-btn--bad');});
  var t=$('qz-tf-t'),f=$('qz-tf-f');
  if(Q.c){if(t)t.classList.add('qz-tf-btn--ok');if(!ok&&f)f.classList.add('qz-tf-btn--bad');}
  else{if(f)f.classList.add('qz-tf-btn--ok');if(!ok&&t)t.classList.add('qz-tf-btn--bad');}
  processAns(ok,Q);
}
function ansFill(idx){
  var Q=SES.qs[SES.cur],ok=idx===Q.c;
  qa('.qz-opt').forEach(function(b){b.disabled=true;b.classList.remove('qz-opt--ok','qz-opt--bad');});
  var bl=$('qz-fi-bl');
  if(bl){bl.textContent=Q.o[Q.c];bl.classList.add(ok?'qz-fill-blank--ok':'qz-fill-blank--bad');}
  var correct=$('qz-o'+Q.c);if(correct)correct.classList.add('qz-opt--ok');
  if(!ok){var wrong=$('qz-o'+idx);if(wrong)wrong.classList.add('qz-opt--bad');}
  processAns(ok,Q);
}

/* ── MATCH ── */
function mL(idx){
  var Q=SES.qs[SES.cur];
  if(SES.matched.some(function(m){return m.l===idx;}))return;
  _mSel=idx;
  qa('[id^="qz-ml"]').forEach(function(e){e.classList.remove('qz-match-item--sel');});
  var el=$('qz-ml'+idx);if(el)el.classList.add('qz-match-item--sel');
  var h=$('qz-mhint');if(h)h.textContent='→ Toca la definición';
}
function mR(idx){
  if(_mSel===null){var h=$('qz-mhint');if(h)h.textContent='← Selecciona primero un concepto';return;}
  if(SES.matched.some(function(m){return m.r===idx;}))return;
  var Q=SES.qs[SES.cur],ok=_mSel===idx;
  var lEl=$('qz-ml'+_mSel),rEl=$('qz-mr'+idx),h=$('qz-mhint');
  if(ok){
    if(lEl){lEl.classList.remove('qz-match-item--sel');lEl.classList.add('qz-match-item--ok');}
    if(rEl)rEl.classList.add('qz-match-item--ok');
    SES.matched.push({l:_mSel,r:idx});
    if(h)h.textContent='✅ '+SES.matched.length+'/'+Q.p.length+' emparejados';
    if(SES.matched.length===Q.p.length)setTimeout(function(){processAns(true,Q);},350);
  }else{
    if(lEl){lEl.classList.remove('qz-match-item--sel');lEl.classList.add('qz-match-item--bad');}
    if(rEl)rEl.classList.add('qz-match-item--bad');
    if(h)h.textContent='❌ Intenta otra combinación';
    var prevL=G.lives;loseLife();flash(false);
    $('qz-s-lives').innerHTML=heartsHTMLWithLose(G.lives,G.maxLives,prevL-1);
    if(G.lives<=0){setTimeout(endSession,600);return;}
    setTimeout(function(){
      if(lEl)lEl.classList.remove('qz-match-item--bad','qz-match-item--sel');
      if(rEl)rEl.classList.remove('qz-match-item--bad');
    },750);
  }
  _mSel=null;
}

/* ── ORDER ── */
function oClick(idx){
  var Q=SES.qs[SES.cur],item=$('qz-oi'+idx);
  if(!item||item.classList.contains('qz-order-item--ok')||item.classList.contains('qz-order-item--bad'))return;
  var pos=parseInt(item.dataset.o);
  if(pos===SES.orderNext){
    item.classList.add('qz-order-item--ok');
    SES.orderNext++;
    var h=$('qz-ohint');if(h)h.textContent='✅ '+SES.orderNext+'/'+Q.steps.length+' ordenados';
    if(SES.orderNext>=Q.steps.length)setTimeout(function(){processAns(true,Q);},350);
  }else{
    item.classList.add('qz-order-item--bad');
    var h2=$('qz-ohint');if(h2)h2.textContent='❌ Orden incorrecto';
    var prevLO=G.lives;loseLife();flash(false);
    $('qz-s-lives').innerHTML=heartsHTMLWithLose(G.lives,G.maxLives,prevLO-1);
    if(G.lives<=0){setTimeout(endSession,600);return;}
    setTimeout(function(){item.classList.remove('qz-order-item--bad');},800);
  }
}

function processAns(ok,Q){
  if(ok){
    SES.ok++;SES.xp+=(Q.x||10);
    flash(true);xpPopup(Q.x||10);
    updateCombo(true);
    sndCorrect();
    if(comboCount>=3)sndCombo();
    var comboText=ok&&comboCount>=2?' ¡Combo x'+comboCount+'!':'';
    showFB(true,Q.e||'¡Correcto!'+comboText);
  }else{
    SES.bad++;
    updateCombo(false);
    sndWrong();
    var prevLives=G.lives;loseLife();
    flash(false);
    $('qz-s-lives').innerHTML=heartsHTMLWithLose(G.lives,G.maxLives,prevLives-1);
    showFB(false,Q.e||'Respuesta incorrecta.');
  }
  $('qz-s-lives').innerHTML=heartsHTML(G.lives,G.maxLives);
}

/* ── FEEDBACK ── */
function showFB(ok,exp){
  var fb=$('qz-fb');if(!fb)return;
  $('qz-fb-ico').textContent=ok?'✅':'❌';
  var ttl=$('qz-fb-ttl');
  ttl.textContent=ok?'¡Correcto!':'Incorrecto';
  ttl.className='qz-fb-ttl'+(ok?' qz-fb-ttl--ok':' qz-fb-ttl--bad');
  $('qz-fb-exp').textContent=exp;
  var Q=SES.qs[SES.cur];
  var aName=Q.a&&QUIZ_DATA.articleNames?QUIZ_DATA.articleNames[Q.a]:null;
  var learn=$('qz-fb-learn');
  if(aName){learn.textContent='📚 Leer más: '+aName;learn.style.display='';learn.onclick=function(){openArticle(Q.a);};}
  else learn.style.display='none';
  var next=$('qz-fb-next');
  next.className='qz-fb-next'+(ok?' qz-fb-next--ok':' qz-fb-next--bad');
  fb.className='qz-fb qz-fb--show'+(ok?' qz-fb--ok':' qz-fb--bad');
}
function hideFB(){var fb=$('qz-fb');if(fb)fb.className='qz-fb';}

function nextQ(){
  hideFB();
  if(G.lives<=0){endSession();return;}
  SES.cur++;
  if(SES.cur>=SES.qs.length)endSession();
  else renderQ();
}

/* ── END SESSION ── */
function endSession(){
  hideFB();markPlayed();
  G.totalSessions++;G.totalXP+=SES.xp;G.weeklyXP+=SES.xp;
  G.totalCorrect+=SES.ok;
  if(SES.xp>G.maxXpSession)G.maxXpSession=SES.xp;
  if(SES.bad===0&&SES.ok>0)G.perfectSessions++;
  if(SES.isDaily){
    G.lastDailyDate=new Date().toDateString();G.dailyCompleted++;
    var bonus=50;SES.xp+=bonus;G.totalXP+=bonus;G.weeklyXP+=bonus;
  }
  if(!SES.isDaily&&SES.pathId&&SES.pathId!=='daily'){
    var pw=G.pathProgress[SES.pathId]||0;
    G.pathProgress[SES.pathId]=pw+SES.ok;
    if(pw+SES.ok>=12&&!G.completedPaths.includes(SES.pathId))G.completedPaths.push(SES.pathId);
  }
  SES.newAchs=[];
  ACHIEVEMENTS.forEach(function(a){
    if(!G.unlockedAchs.includes(a.id)&&a.check(G)){G.unlockedAchs.push(a.id);SES.newAchs.push(a);}
  });
  var oldLevel=getLevel(G.totalXP-SES.xp);
  var newLevel=getLevel(G.totalXP);
  if(newLevel.idx>oldLevel.idx)setTimeout(sndLevelUp,500);
  if(SES.bad===0&&SES.ok>0){try{triggerConfetti();}catch(e){}}
  save();showResults();
  // Publica el resultado para el módulo de progreso (antes nadie emitía
  // QUIZ_ENDED y el dashboard de progreso nunca registraba quizzes).
  try{events.emit(EVENTS.QUIZ_ENDED,{score:SES.ok,total:SES.qs.length,xp:SES.xp});}catch(e){}
}

/* ── ANIMATED COUNTER ── */
function animateCounter(el, target, duration) {
  var start = 0, startTime = null;
  function step(ts) {
    if (!startTime) startTime = ts;
    var progress = Math.min((ts - startTime) / (duration || 800), 1);
    var eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function showResults(){
  var tot=SES.qs.length,pct=tot>0?Math.round((SES.ok/tot)*100):0;
  var em,ttl,sub;
  if(G.lives<=0&&SES.cur<SES.qs.length-1){em='💔';ttl='Sin vidas';sub='Los corazones se agotaron.';}
  else if(pct===100){em='🏆';ttl='¡PERFECTO!';sub='Ni un solo fallo. ¡Increíble!';}
  else if(pct>=80){em='🌟';ttl='¡Excelente!';sub='Sigue así.';}
  else if(pct>=60){em='👍';ttl='Bien hecho';sub='Buen rendimiento.';}
  else if(pct>=40){em='📚';ttl='Puedes mejorar';sub='Repasa los conceptos.';}
  else{em='💪';ttl='No te rindas';sub='La práctica hace al maestro.';}
  $('qz-r-emoji').textContent=em;
  $('qz-r-title').textContent=ttl;
  $('qz-r-sub').textContent=sub;
  var xpEl=$('qz-r-xp');xpEl.textContent='0';
  setTimeout(function(){animateCounter(xpEl,SES.xp,800);},300);
  setTimeout(function(){xpEl.textContent='+'+SES.xp;},1200);
  setTimeout(function(){animateCounter($('qz-r-ok'),SES.ok,600);},400);
  setTimeout(function(){animateCounter($('qz-r-bad'),SES.bad,600);},500);
  var achSec=$('qz-r-achs');
  if(SES.newAchs.length){
    achSec.innerHTML='<div class="qz-heading" style="margin:12px 0 8px">🔓 Logros desbloqueados</div>'+
      SES.newAchs.map(function(a){
        return '<div class="qz-ach-unlocked"><span class="qz-ach-unlocked-ico">'+a.icon+'</span><div class="qz-ach-unlocked-info"><div class="qz-ach-unlocked-title">'+a.title+'</div><div class="qz-ach-unlocked-desc">'+a.desc+'</div></div><span class="qz-ach-unlocked-badge">NUEVO</span></div>';
      }).join('');
  }else achSec.innerHTML='';
  var rep=$('qz-r-replay');
  if(SES.isDaily){rep.textContent='Volver al inicio';rep.onclick=function(){showView('home');};}
  else{var p=QUIZ_DATA.paths.find(function(x){return x.id===SES.pathId;});
    rep.textContent='Repetir "'+(p?p.name:'ruta')+'"';rep.onclick=function(){startPath(SES.pathId);};}
  showView('results');
}

/* ── HOME ── */
function renderHome(){
  var sb=$('qz-streak-slot');
  if(G.streak>=2){sb.innerHTML='<div class="qz-streak"><div class="qz-streak-ico">🔥</div><div class="qz-streak-info"><div class="qz-streak-title">¡'+G.streak+' días seguidos!</div><div class="qz-streak-sub">No rompas tu racha — practica hoy</div></div></div>';sb.style.display='';}
  else{sb.innerHTML='';sb.style.display='none';}
  var today=new Date().toDateString();
  $('qz-daily-done').style.display=G.lastDailyDate===today?'flex':'none';
  renderPaths();
  var nl=$('qz-nolives-slot');
  if(G.lives<=0){nl.innerHTML='<div class="qz-nolives"><div class="qz-nolives-ico">💔</div><div class="qz-nolives-title">Sin vidas</div><div class="qz-nolives-sub">'+regenMsg()+'</div></div>';nl.style.display='';}
  else{nl.innerHTML='';nl.style.display='none';}
  renderQuickStats();
}

function renderQuickStats(){
  var el=$('qz-quickstats');if(!el)return;
  var lv=getLevel(G.totalXP);
  var totalPaths=QUIZ_DATA&&QUIZ_DATA.paths?QUIZ_DATA.paths.length:6;
  var donePaths=G.completedPaths.length;
  var pct=totalPaths>0?Math.round((donePaths/totalPaths)*100):0;
  var li=Math.min(G.leagueIdx,LEAGUES.length-1),lg=LEAGUES[li];
  var npcs=G.npcData||genNPCs();
  var all=[{name:'Tú',icon:'🧑‍💻',xp:G.weeklyXP,mine:true}].concat(npcs);
  all.sort(function(a,b){return b.xp-a.xp;});
  var myRank=all.findIndex(function(e){return e.mine;})+1;
  var xpToNext=lv.idx<LEVELS.length-1?LEVELS[lv.idx+1].min-G.totalXP:0;
  var h='<div class="qz-rank-card" style="--league-color:'+lg.color+'">';
  h+='<div class="qz-rank-left"><div class="qz-rank-ico">'+lg.icon+'</div><div class="qz-rank-info"><div class="qz-rank-name" style="color:'+lg.color+'">'+lg.name+'</div><div class="qz-rank-pos">#'+myRank+'/'+all.length+'</div></div></div>';
  h+='<div class="qz-rank-right"><div class="qz-rank-xp">'+G.totalXP+' XP</div><div class="qz-rank-next">'+(xpToNext>0?xpToNext+' XP para '+LEVELS[lv.idx+1].name:'Nivel máximo')+'</div></div>';
  h+='</div>';
  h+='<div class="qz-qs-grid">';
  h+='<div class="qz-qs-card"><div class="qz-qs-ico">🎯</div><div class="qz-qs-val">'+G.totalSessions+'</div><div class="qz-qs-lbl">Sesiones</div></div>';
  h+='<div class="qz-qs-card"><div class="qz-qs-ico">✅</div><div class="qz-qs-val">'+G.totalCorrect+'</div><div class="qz-qs-lbl">Correctas</div></div>';
  h+='<div class="qz-qs-card"><div class="qz-qs-ico">🏅</div><div class="qz-qs-val">'+donePaths+'/'+totalPaths+'</div><div class="qz-qs-lbl">Rutas</div></div>';
  h+='</div>';
  h+='<div class="qz-heading" style="margin-top:20px">🏆 Top Semanal</div>';
  h+='<div class="qz-lb-mini">';
  all.slice(0,5).forEach(function(e,i){
    var rk=i+1,rd=rk===1?'🥇':rk===2?'🥈':rk===3?'🥉':rk;
    h+='<div class="qz-lb-mini-entry'+(e.mine?' qz-lb-mini-entry--mine':'')+'">';
    h+='<div class="qz-lb-mini-rk">'+rd+'</div>';
    h+='<div class="qz-lb-mini-name">'+e.name+(e.mine?' (Tú)':'')+'</div>';
    h+='<div class="qz-lb-mini-xp">'+e.xp+' XP</div>';
    h+='</div>';
  });
  h+='</div>';
  el.innerHTML=h;
}

function renderPaths(){
  var grid=$('qz-paths');if(!grid)return;
  if(!QUIZ_DATA||!QUIZ_DATA.paths){grid.innerHTML='<p class="qz-empty">Cargando rutas...</p>';return;}
  var pathDescs={
    osint:'Investigación y reconocimiento',
    web:'Ataques y defensa web',
    malware:'Análisis de amenazas',
    crypto:'Cifrado y redes',
    pentest:'Pruebas de penetración',
    legal:'Defensa y cumplimiento'
  };
  var pathQ={osint:0,web:0,malware:0,crypto:0,pentest:0,legal:0};
  try{Object.keys(QUIZ_DATA.questions).forEach(function(k){pathQ[k]=(QUIZ_DATA.questions[k]||[]).length;});}catch(e){}
  grid.innerHTML=QUIZ_DATA.paths.map(function(p){
    var prog=G.pathProgress[p.id]||0,pct=Math.min(100,Math.round((prog/12)*100));
    var done=G.completedPaths.includes(p.id);
    var qCount=pathQ[p.id]||0;
    return '<div class="qz-path'+(done?' qz-path--done':'')+'" data-qz-action="startPath(\''+p.id+'\')" style="--path-color:'+p.color+'">'+
      '<div class="qz-path-glow"></div>'+
      '<div class="qz-path-top"><span class="qz-path-ico">'+p.icon+'</span>'+
      (done?'<span class="qz-path-badge">✅</span>':'')+'</div>'+
      '<div class="qz-path-name">'+p.name+'</div>'+
      '<div class="qz-path-desc">'+(pathDescs[p.id]||'')+'</div>'+
      '<div class="qz-path-meta">'+(done?'Completado':prog+'/12 · '+qCount+' preguntas')+'</div>'+
      '<div class="qz-path-bar"><div class="qz-path-fill" style="width:'+pct+'%"></div></div>'+
    '</div>';
  }).join('');
}

/* ── ACHIEVEMENTS ── */
function renderAchs(){
  var tot=ACHIEVEMENTS.length,unl=G.unlockedAchs.length;
  $('qz-ach-num').textContent=unl;
  $('qz-ach-sub').textContent='de '+tot+' logros';
  $('qz-ach-count').textContent=unl+'/'+tot;
  $('qz-achs-grid').innerHTML=ACHIEVEMENTS.map(function(a){
    var ok=G.unlockedAchs.includes(a.id);
    return '<div class="qz-ach'+(ok?' qz-ach--unlocked':' qz-ach--locked')+'">'+
      '<div class="qz-ach-ico">'+a.icon+'</div>'+
      '<div class="qz-ach-title">'+a.title+'</div>'+
      '<div class="qz-ach-desc">'+a.desc+'</div>'+
    '</div>';
  }).join('');
}

/* ── LEAGUE ── */
function renderLeague(){
  var li=Math.min(G.leagueIdx,LEAGUES.length-1),lg=LEAGUES[li];
  var npcs=G.npcData||genNPCs();
  var all=[{name:'Tú',icon:'🧑‍💻',xp:G.weeklyXP,mine:true}].concat(npcs);
  all.sort(function(a,b){return b.xp-a.xp;});
  var myRank=all.findIndex(function(e){return e.mine;})+1;
  var now=new Date(),eow=new Date(now);
  eow.setDate(now.getDate()+(7-now.getDay()));eow.setHours(0,0,0,0);
  var dLeft=Math.ceil((eow-now)/864e5);

  var h='<div class="qz-league" style="--league-color:'+lg.color+'">';
  h+='<div class="qz-league-ico">'+lg.icon+'</div>';
  h+='<div class="qz-league-name" style="color:'+lg.color+'">'+lg.name+'</div>';
  h+='<div class="qz-league-meta">Reinicio en '+dLeft+'d · #'+myRank+'/'+all.length+'</div>';
  h+='<div class="qz-league-xp">XP esta semana: <strong>'+G.weeklyXP+'</strong></div></div>';
  h+='<div class="qz-league-legend">🟢 Top 3 ascienden · 🔴 Bottom 3 descienden</div>';
  h+='<div class="qz-lb">';
  all.forEach(function(e,i){
    var rk=i+1,rd=rk===1?'🥇':rk===2?'🥈':rk===3?'🥉':rk;
    var rc=rk<=3?'qz-lb-rk--podium':'';
    if(rk===4)h+='<div class="qz-zone qz-zone--up">⬆️ ZONA DE ASCENSO</div>';
    if(rk===all.length-3)h+='<div class="qz-zone qz-zone--dn">⬇️ ZONA DE DESCENSO</div>';
    h+='<div class="qz-lb-entry'+(e.mine?' qz-lb-entry--mine':'')+'">';
    h+='<div class="qz-lb-rk '+rc+'">'+rd+'</div>';
    h+='<div class="qz-lb-ico">'+e.icon+'</div>';
    h+='<div class="qz-lb-name'+(e.mine?' qz-lb-name--mine':'')+'">'+e.name+(e.mine?' (Tú)':'')+'</div>';
    h+='<div class="qz-lb-xp">'+e.xp+' XP</div></div>';
  });
  h+='</div>';
  $('qz-league-body').innerHTML=h;
}

function openArticle(aid){
  if(typeof window.switchTab==='function'){
    window.switchTab('articles');
    setTimeout(function(){if(typeof window.searchArticles==='function')window.searchArticles(aid);},100);
  }
}

/* ── INIT ── */
function init(){
  load();
  var boot=$('qz-boot');
  if(boot)boot.classList.add('qz-boot--hide');
  showView('home');
}

function triggerConfetti(){
  var c=document.getElementById('qz-confetti-canvas');
  if(!c)return;
  var ctx=c.getContext('2d');
  c.width=window.innerWidth;c.height=window.innerHeight;
  var particles=[];
  var colors=['#ff0000','#ffd700','#00ff00','#00d9ff','#a855f7','#ff6600','#ec4899'];
  for(var i=0;i<150;i++){
    particles.push({
      x:c.width/2+(Math.random()-.5)*200,
      y:c.height/2,
      vx:(Math.random()-.5)*15,
      vy:Math.random()*-18-5,
      size:Math.random()*6+3,
      color:colors[Math.floor(Math.random()*colors.length)],
      rot:Math.random()*360,
      rotV:(Math.random()-.5)*10,
      life:1,
      decay:Math.random()*.008+.005,
      gravity:.25
    });
  }
  var running=true;
  function draw(){
    ctx.clearRect(0,0,c.width,c.height);
    var alive=false;
    particles.forEach(function(p){
      if(p.life<=0)return;
      alive=true;
      p.x+=p.vx;p.y+=p.vy;p.vy+=p.gravity;
      p.rot+=p.rotV;p.life-=p.decay;
      ctx.save();
      ctx.translate(p.x,p.y);
      ctx.rotate(p.rot*Math.PI/180);
      ctx.globalAlpha=p.life;
      ctx.fillStyle=p.color;
      ctx.fillRect(-p.size/2,-p.size/2,p.size,p.size*.6);
      ctx.restore();
    });
    if(alive&&running)requestAnimationFrame(draw);
    else ctx.clearRect(0,0,c.width,c.height);
  }
  draw();
  setTimeout(function(){running=false;},4000);
}

// ── ES Module Public API ──
export const Quiz = {
  init,
  showView,
  goBack,
  exitToMain,
  startPath,
  startDaily,
  renderQ,
  nextQ,
  ans,
  ansTF,
  ansFill,
  mL,
  mR,
  oClick,
  renderHome,
  renderAchs,
  renderLeague,
  openArticle,
};
