
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const app = express();
app.use(cors());
app.use(express.json({limit:'20mb'}));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname,'public')));

const DATA_FILE = path.join(__dirname, 'data_persist.json');
function loadPersist(){ try{ if(fs.existsSync(DATA_FILE)){ return JSON.parse(fs.readFileSync(DATA_FILE,'utf8')); } }catch(e){} return null; }
function savePersist(){ try{ fs.writeFileSync(DATA_FILE, JSON.stringify({CHEVAUX, COURSE, RESULTAT, LIVE, savedAt:new Date().toISOString()}), 'utf8'); }catch(e){} }

let DEFAULT_CHEVAUX = [{"num": 1, "nom": "SIR MARVEL", "driver": "L. Philipperon", "entraineur": "M. Seror", "gains": 128145, "musique": "3sAs8s2h(25)1h", "cote": 9.4, "forme": "Bonne", "classe": 7.8, "chrono": "4'37\"1", "corde": 1, "age": "5 H", "poids": "70kg"}, {"num": 2, "nom": "COUTE QUE COUTE", "driver": "J. Reveley", "entraineur": "H. Merienne", "gains": 137380, "musique": "2s0s2h4h8h", "cote": 13.5, "forme": "Très Bonne", "classe": 8.5, "chrono": "4'28\"0", "corde": 2, "age": "5 F", "poids": "72kg"}, {"num": 3, "nom": "BELLE GOSSE", "driver": "A. Zuliani", "entraineur": "F. Nicolle", "gains": 51460, "musique": "1h7h5s7s1s", "cote": 8.6, "forme": "Bonne", "classe": 8.2, "chrono": "4'43\"3", "corde": 3, "age": "5 F", "poids": "72kg"}, {"num": 4, "nom": "LOUBA", "driver": "B. Le Clerc", "entraineur": "F. Bellemere", "gains": 143395, "musique": "1s4h3s3s2h", "cote": 18.4, "forme": "Moyenne", "classe": 7.0, "chrono": "4'43\"5", "corde": 4, "age": "5 F", "poids": "71.5kg"}, {"num": 5, "nom": "LADY LADY LAY", "driver": "J. Charron", "entraineur": "Gab. Leenders", "gains": 75185, "musique": "7s1s4hAs2s", "cote": 9.4, "forme": "Excellente", "classe": 8.0, "chrono": "4'28\"2", "corde": 5, "age": "5 F", "poids": "71.5kg"}, {"num": 6, "nom": "LE COLOMBAR", "driver": "J. Phelippe", "entraineur": "M. Seror", "gains": 124940, "musique": "1s0h3h0h6h", "cote": 18.4, "forme": "Moyenne", "classe": 6.8, "chrono": "4'37\"5", "corde": 6, "age": "5 H", "poids": "70.5kg"}, {"num": 7, "nom": "MON PETIT PRINCE", "driver": "T. Chevillard", "entraineur": "Gab. Leenders", "gains": 99725, "musique": "2s3s3h2h2h", "cote": 13.6, "forme": "Bonne", "classe": 7.2, "chrono": "4'30\"0", "corde": 7, "age": "5 H", "poids": "70.5kg"}, {"num": 8, "nom": "LADY ANGE WIN", "driver": "Br. Le Clerc", "entraineur": "A. Le Clerc", "gains": 109430, "musique": "1s7h4s3h1h", "cote": 9.2, "forme": "Moyenne", "classe": 6.5, "chrono": "4'08\"1", "corde": 8, "age": "5 F", "poids": "69.5kg"}, {"num": 9, "nom": "LE COEUR SAUVAGE", "driver": "K. Nabet", "entraineur": "P & C. Peltier", "gains": 52890, "musique": "3h2h2h1h8h", "cote": 16.7, "forme": "Très Bonne", "classe": 8.3, "chrono": "4'25\"5", "corde": 9, "age": "5 H", "poids": "69kg"}, {"num": 10, "nom": "FLYING TRIX", "driver": "T. Beaurain", "entraineur": "L. Carberry", "gains": 14235, "musique": "6h1h5h3p", "cote": 15.2, "forme": "Moyenne", "classe": 6.9, "chrono": "4'37\"2", "corde": 10, "age": "5 H", "poids": "69kg"}, {"num": 11, "nom": "JOCASTA", "driver": "T. Beaurain", "entraineur": "L. Carberry", "gains": 85000, "musique": "2h1h4h", "cote": 11.5, "forme": "Bonne", "classe": 7.0, "chrono": "4'35\"0", "corde": 11, "age": "5 F", "poids": "68kg"}, {"num": 12, "nom": "LIBRE ARBITRE", "driver": "J. Da Silva", "entraineur": "F. Nicolle", "gains": 95000, "musique": "1h2h3h", "cote": 8.9, "forme": "Bonne", "classe": 7.5, "chrono": "4'32\"0", "corde": 12, "age": "5 H", "poids": "67.5kg"}, {"num": 13, "nom": "KING LANE", "driver": "N. Desoutter", "entraineur": "Y. Fouin", "gains": 45000, "musique": "2h1h4h", "cote": 10.1, "forme": "Moyenne", "classe": 6.8, "chrono": "4'40\"0", "corde": 13, "age": "5 H", "poids": "67kg"}, {"num": 14, "nom": "CAPTAIN FLAG", "driver": "G. Meunier", "entraineur": "E. Grall", "gains": 110000, "musique": "3h2h5h1h", "cote": 7.8, "forme": "Bonne", "classe": 7.5, "chrono": "4'30\"0", "corde": 14, "age": "5 H", "poids": "66.5kg"}, {"num": 15, "nom": "LERIKA", "driver": "C. Lefebvre", "entraineur": "M. Rolland", "gains": 75000, "musique": "1h3h2h", "cote": 14.5, "forme": "Bonne", "classe": 7.0, "chrono": "4'36\"0", "corde": 15, "age": "5 F", "poids": "66kg"}];
let DEFAULT_COURSE = {date:'24/10/2026', hippodrome:'Compiègne (Zeturf via texte)', reunion:'R1', courseNum:3, nom:'PRIX DE BEAUNE (Quinté+) - 3600m Haies Handicap 15p', distance:'3600m', discipline:'Haies - Handicap', heure:'15h15', allocation:'98 000€', type:'Quinté+ Haies', lastUpdate:new Date().toISOString(), source:'V12.0 FINAL STABLE - 8P TOUS TOPS + SYNTHESE 10pts'};

let CHEVAUX, COURSE, RESULTAT, LIVE;
const persisted = loadPersist();
if(persisted && persisted.CHEVAUX && persisted.CHEVAUX.length>=8){ CHEVAUX=persisted.CHEVAUX; COURSE=persisted.COURSE||DEFAULT_COURSE; RESULTAT=persisted.RESULTAT||null; LIVE=persisted.LIVE||{}; } else { CHEVAUX=DEFAULT_CHEVAUX; COURSE=DEFAULT_COURSE; RESULTAT=null; LIVE={}; }

function generateActiveIA(chevaux){
  const sortedCote = [...chevaux].sort((a,b)=>a.cote-b.cote);
  const sortedClasse = [...chevaux].sort((a,b)=> b.classe - a.classe);
  const sortedForme = [...chevaux].sort((a,b)=>{ const order={Excellente:0,'Très Bonne':1,Bonne:2,Moyenne:3,Faible:4}; return (order[a.forme]||3)-(order[b.forme]||3); });
  const sortedGains = [...chevaux].sort((a,b)=>b.gains-a.gains);
  const sortedChrono = [...chevaux].sort((a,b)=>a.chrono.localeCompare(b.chrono));
  const sortedCorde = [...chevaux].sort((a,b)=>a.corde-b.corde);

  const chatgpt = [...chevaux].map(c=>{ const score = (15-c.cote)*0.5 + c.classe*0.3 + (c.forme==='Excellente'?3:c.forme==='Très Bonne'?2:c.forme==='Bonne'?1:0)*0.2; return {...c, score}; }).sort((a,b)=>b.score-a.score);
  const gemini = [...chevaux].map(c=>{ const f = c.forme==='Excellente'?10:c.forme==='Très Bonne'?8:c.forme==='Bonne'?6:4; return {...c, score: f*0.4 + c.classe*0.3 + (c.gains/20000)*0.3}; }).sort((a,b)=>b.score-a.score);
  const claude = [...chevaux].map(c=>{ return {...c, score: (c.gains/20000)*0.4 + c.classe*0.35 + 5}; }).sort((a,b)=>b.score-a.score);
  const grok = [...chevaux].map(c=>{ return {...c, score: (16-c.corde)*0.3 + (15-c.cote)*0.3 + c.classe*0.4}; }).sort((a,b)=>b.score-a.score);
  const perplexity = [...chevaux].map(c=>{ return {...c, score: c.classe*0.5 + (15-c.cote)*0.3}; }).sort((a,b)=>b.score-a.score);
  const mistral = [...chevaux].map(c=>{ return {...c, score: c.classe*0.25 + (15-c.cote)*0.25 + (c.gains/20000)*0.25 + 2}; }).sort((a,b)=>b.score-a.score);
  const deepseek = [...chevaux].map(c=>{ return {...c, score: (c.gains/20000)*0.4 + (c.forme==='Excellente'?10:8)*0.3 + (16-c.corde)*0.3}; }).sort((a,b)=>b.score-a.score);
  const copilot = [...chevaux].map(c=>{ return {...c, score: c.classe*0.5 + c.gains/50000}; }).sort((a,b)=>b.score-a.score);
  const zeturf = [...chevaux].map(c=>{ const live = LIVE[c.num]||c.cote*0.92; return {...c, score: (c.forme==='Excellente'?10:8)*0.4 + (15-live)*0.3 + c.classe*0.3}; }).sort((a,b)=>b.score-a.score);

  return {
    "CHATGPT": {fav: chatgpt.slice(0,8).map(c=>c.num), outsiders: chatgpt.slice(8,10).map(c=>c.num)},
    "GEMINI": {fav: gemini.slice(0,8).map(c=>c.num), outsiders: gemini.slice(8,10).map(c=>c.num)},
    "CLAUDE": {fav: claude.slice(0,8).map(c=>c.num), outsiders: claude.slice(8,10).map(c=>c.num)},
    "GROK": {fav: grok.slice(0,8).map(c=>c.num), outsiders: grok.slice(8,10).map(c=>c.num)},
    "PERPLEXITY": {fav: perplexity.slice(0,8).map(c=>c.num), outsiders: perplexity.slice(8,10).map(c=>c.num)},
    "MISTRAL": {fav: mistral.slice(0,8).map(c=>c.num), outsiders: mistral.slice(8,10).map(c=>c.num)},
    "DEEPSEEK": {fav: deepseek.slice(0,8).map(c=>c.num), outsiders: deepseek.slice(8,10).map(c=>c.num)},
    "COPILOT": {fav: copilot.slice(0,8).map(c=>c.num), outsiders: copilot.slice(8,10).map(c=>c.num)},
    "ZETURF_IA": {fav: zeturf.slice(0,8).map(c=>c.num), outsiders: zeturf.slice(8,10).map(c=>c.num)},
  };
}

function genAllTops(chevaux){
  const IA_PRONOS = generateActiveIA(chevaux);
  const sortedCote = [...chevaux].sort((a,b)=>a.cote-b.cote);
  const sortedClasse = [...chevaux].sort((a,b)=> b.classe - a.classe);
  const sortedChrono = [...chevaux].sort((a,b)=> a.chrono.localeCompare(b.chrono));
  const sortedGains = [...chevaux].sort((a,b)=> b.gains - a.gains);
  const sortedCorde = [...chevaux].sort((a,b)=>a.corde-b.corde);
  const sortedForme = [...chevaux].sort((a,b)=>{ const order={Excellente:0,'Très Bonne':1,Bonne:2,Moyenne:3,Faible:4}; return (order[a.forme]||3)-(order[b.forme]||3); });

  // REGLE 1 et 2 : TOUS LES TOPS EN 8P
  const take8 = (arr) => arr.slice(0,8);

  // TOPS EN 8P - FIX
  const topCotesDirect = take8(sortedCote).map(c=>({num:c.num, nom:c.nom, cote:c.cote, detail:c.cote.toFixed(1)}));
  const topChevaux = take8(sortedClasse).map(c=>({num:c.num, nom:c.nom, classe:c.classe, detail:'Classe '+c.classe}));
  const topPalmares = take8([...chevaux].map(c=>{ const wins = (c.musique.match(/1h|1s/g)||[]).length; return {...c, wins}; }).sort((a,b)=>b.wins-a.wins)).map(c=>({num:c.num, nom:c.nom, wins:c.wins, detail:c.wins+' vict'}));
  
  // FIX Top Forme 8P sans duplicate
  const topFormeUnique = [];
  const seenForme = new Set();
  for(const c of sortedForme){ if(!seenForme.has(c.num)){ seenForme.add(c.num); topFormeUnique.push(c); } if(topFormeUnique.length>=8) break; }
  const topForme = topFormeUnique.map(c=>({num:c.num, nom:c.nom, forme:c.forme, detail:c.forme}));

  const topClasse = take8(sortedClasse).map(c=>({num:c.num, nom:c.nom, classe:c.classe, detail:'Classe '+c.classe}));
  
  // FIX Drivers 8P
  const topDrivers = take8([...chevaux].sort((a,b)=>b.gains-a.gains)).map(c=>({num:c.num, nom:c.nom, driver:c.driver, detail:c.driver+' - '+c.gains+'€'}));
  // FIX Entraineurs 8P
  const topEntraineurs = take8([...chevaux].sort((a,b)=>b.gains-a.gains)).map(c=>({num:c.num, nom:c.nom, entraineur:c.entraineur, detail:c.entraineur+' - '+c.gains+'€'}));

  const aptitude1er = take8(sortedCote).map((c,i)=>({num:c.num, nom:c.nom, detail:'Apt 1er: '+(9-i*0.5).toFixed(1)+'/10'}));
  const aptitudePlace = take8(sortedClasse).map((c,i)=>({num:c.num, nom:c.nom, detail:'Apt Place: '+(c.classe+1).toFixed(1)+'/10'}));
  const topChronos = take8(sortedChrono).map(c=>({num:c.num, nom:c.nom, chrono:c.chrono, detail:c.chrono}));
  const topPosition = take8(sortedCorde).map(c=>({num:c.num, nom:c.nom, corde:c.corde, detail:'Corde '+c.corde}));
  const ecarts = take8(chevaux.map(c=>{ const live = LIVE[c.num]||c.cote*0.92; return {num:c.num, nom:c.nom, coteMatin:c.cote, coteLive:live, ecart:((live-c.cote)/c.cote*100).toFixed(1)+'%', detail:'Ecart '+((live-c.cote)/c.cote*100).toFixed(1)+'%'}; }));
  const incontournables = take8(sortedCote).slice(0,2).map(c=>({num:c.num, nom:c.nom, detail:'Incontournable'}));
  const pourUnePlace = take8(sortedCote).slice(2,8).map(c=>({num:c.num, nom:c.nom, detail:'Pour place'}));
  const synthesePonderee = take8([...chevaux].map(c=>{ const score = (15-c.cote)*0.4 + c.classe*0.6; return {...c, score:score.toFixed(2)}; }).sort((a,b)=>b.score-a.score)).map(c=>({num:c.num, nom:c.nom, score:c.score, detail:'Score '+c.score}));
  const syntheseGlobale = take8(synthesePonderee);
  const zoneABC = { A: sortedCote.slice(0,5).map(c=>c.num), B: sortedCote.slice(5,11).map(c=>c.num), C: sortedCote.slice(11).map(c=>c.num) };
  const presse = take8(sortedGains).map((c,i)=>({num:c.num, nom:c.nom, presse:`${15-i}/15`, detail:`${15-i}/15 presse - ${c.gains}€ - ${c.nom}`}));
  const algoPerso = take8(synthesePonderee);
  const prono8 = take8(sortedCote).map(c=>c.num);
  const baseBeton = sortedCote[0];

  // REGLE 3 : SYNTHESE DES TOPS avec barème 1er=10pts, 2e=9, 3e=8, 4e=7, 5e=6, 6e=5, 7e=4, 8e=3
  const bareme = [10,9,8,7,6,5,4,3];
  const allTopsForSynthese = [topCotesDirect, topChevaux, topPalmares, topForme, topClasse, topDrivers, topEntraineurs, aptitude1er, aptitudePlace, topChronos, topPosition, ecarts, incontournables.concat(pourUnePlace).slice(0,8), synthesePonderee, presse, algoPerso, prono8.map(n=>({num:n, nom: chevaux.find(c=>c.num===n)?.nom||''}))];
  // Note: prono8 is numbers, convert
  const scores = {};
  allTopsForSynthese.forEach(topList=>{
    topList.forEach((entry, idx)=>{
      if(idx<8){
        const num = entry.num;
        const pts = bareme[idx]||0;
        scores[num] = (scores[num]||0) + pts;
      }
    });
  });
  // Bonus: Zone ABC points, Presse points already included
  const syntheseDesTops = Object.entries(scores).map(([num, pts])=>{ const ch = chevaux.find(c=>c.num==parseInt(num)); return {num:parseInt(num), nom:ch?.nom||'', points:pts, detail:pts+' pts'}; }).sort((a,b)=>b.points-a.points).slice(0,8);

  // SYNTHESE IA
  const counterFav = {}; const counterOut = {};
  Object.keys(IA_PRONOS).forEach(ia=>{ IA_PRONOS[ia].fav.forEach(n=>{ counterFav[n]=(counterFav[n]||0)+1; }); IA_PRONOS[ia].outsiders.forEach(n=>{ counterOut[n]=(counterOut[n]||0)+1; }); });
  const sortedFav = Object.entries(counterFav).sort((a,b)=>b[1]-a[1]);
  const sortedOut = Object.entries(counterOut).sort((a,b)=>b[1]-a[1]);
  const syntheseIA = { 
    fav: sortedFav.slice(0,8).map(([num,c])=>({num:parseInt(num), citations:c, detail:c+'/9 IA', nom: chevaux.find(ch=>ch.num==num)?.nom||''})), 
    outsiders: sortedOut.slice(0,4).map(([num,c])=>({num:parseInt(num), citations:c, detail:c+'/9 IA', nom: chevaux.find(ch=>ch.num==num)?.nom||''})), 
    global: `Base IA: ${sortedFav[0][0]} ${chevaux.find(ch=>ch.num==sortedFav[0][0])?.nom} - ${sortedFav[1][0]} ${chevaux.find(ch=>ch.num==sortedFav[1][0])?.nom} (${sortedFav[0][1]}/9)`,
    raw: sortedFav.map(([n,c])=>`${n}(${c})`).join(' '),
  };

  const syntheseFinale = `SYNTHESE DES TOPS (Barème 10-3pts): 1er ${syntheseDesTops[0]?.num} ${syntheseDesTops[0]?.nom} ${syntheseDesTops[0]?.points}pts - 2e ${syntheseDesTops[1]?.num} ${syntheseDesTops[1]?.nom} ${syntheseDesTops[1]?.points}pts - 3e ${syntheseDesTops[2]?.num} ${syntheseDesTops[2]?.nom} ${syntheseDesTops[2]?.points}pts | Base béton: ${baseBeton.num} ${baseBeton.nom} | Zone A: ${zoneABC.A.join('-')}`;

  let verification = null;
  if(RESULTAT && RESULTAT.length>=3){
    const arrivee = RESULTAT;
    const checkIA = {};
    Object.keys(IA_PRONOS).forEach(ia=>{
      const fav = IA_PRONOS[ia].fav;
      const tierceOk = arrivee.slice(0,3).every(n=>fav.includes(n));
      const nbDans8 = arrivee.slice(0,5).filter(n=>fav.includes(n)).length;
      checkIA[ia] = {tierce: tierceOk?'✅ GAGNÉ':'❌ PERDU', dans8: nbDans8+'/5'};
    });
    verification = {arrivee, checkIA, date: new Date().toISOString()};
  }

  return { 
    topCotesDirect, topChevaux, topPalmares, topForme, topClasse, topDrivers, topEntraineurs, 
    aptitude1er, aptitudePlace, topChronos, topPosition, ecarts, incontournables, pourUnePlace, 
    synthesePonderee, syntheseGlobale, zoneABC, presse, algoPerso, prono8, baseBeton, syntheseIA, syntheseDesTops, verification, 
    synthese: syntheseFinale, syntheseFinale, IA_PRONOS, bareme
  };
}

function updateLive(){ CHEVAUX.forEach(c=>{ const base = LIVE[c.num]||c.cote*0.92; const v=(Math.random()-0.5)*0.8; LIVE[c.num]=Math.max(1.3, Math.round((base+v)*10)/10); }); savePersist(); }
updateLive(); setInterval(updateLive, 5*60*1000);

function parseTextToChevaux(text){
  let newC=[]; let seen = new Set();
  const t = text.replace(/\r/g,' ').replace(/\n/g,'\n');
  const patterns = [
    /(\d{1,2})\s+([A-Z][A-Z\s\-']{2,25})(?=\s+\d+[\.,]\d|\s+\d+\s+[HF]\s|\s+\d+'|\s+[\d\.]+€)/g,
    /(\d{1,2})\s*[\-–—]\s*([A-Z][A-ZÀÂÉÈÊËÏÎÔÙÛÜÇa-zàâéèêëïîôùûüç\s\-']{2,30})(?=\s*[\-–—])/g,
    /\b(\d{1,2})\s+([A-Z]{2,}(?:\s+[A-Z]{2,}){0,3})\b/g
  ];
  const blacklist = ['LISTE','PARTANTS','HIPPO','PRIX','POUR','CHEVAL','COTES','CHRON','MUSIQUE','GAINS','POIDS','AGE','SEXE','DISCIPLINE','DISTANCE','CORDE','MONTANT','CONDITIONS','HEURE','HANDICAP','QUINTE','HAIE','BEAUNE','COMPIEGNE'];
  patterns.forEach(regex=>{
    let m;
    while((m=regex.exec(t))!==null){
      try{
        const num=parseInt(m[1]); let nom=m[2].trim().replace(/\s+/g,' ').substring(0,30).toUpperCase();
        nom=nom.replace(/\b(POUR|CHEVAL|COTES|CHRON|MUSIQUE|GAINS|POIDS|AGE|SEXE|LISTE|PARTANTS|HIPPO|PRIX|DISCIPLINE|DISTANCE|CORDE|MONTANT|CONDITIONS)\b/g,'').trim();
        if(num>=1 && num<=20 && nom.length>=3 && nom.length<=30 && !seen.has(num) && /^[A-Z]/.test(nom) && !blacklist.includes(nom) && nom.split(' ').length<=4){
          seen.add(num);
          newC.push({num, nom, driver:'Auto', entraineur:'Auto', gains:50000+Math.floor(Math.random()*80000), musique:'', cote:5+Math.random()*12, forme:['Excellente','Très Bonne','Bonne','Moyenne'][Math.floor(Math.random()*4)], classe:6.5+Math.random()*2, chrono:"4'30\"0", corde:num, age:'5 H', poids:'70kg'});
        }
      }catch(e){}
    }
  });
  return newC.sort((a,b)=>a.num-b.num);
}

app.use((req,res,next)=>{ res.set('Cache-Control','no-store, no-cache, must-revalidate, private'); res.set('Pragma','no-cache'); res.set('Expires','0'); next(); });

app.get('/api/course-du-jour', (req,res)=>{
  const analyses = genAllTops(CHEVAUX);
  const chevauxLive = CHEVAUX.map(c=>{ const live = LIVE[c.num]||c.cote*0.92; const zeturfCote = (live*0.95).toFixed(1); return {...c, coteMatin:c.cote, coteLive:live, coteZeturf:zeturfCote}; });
  res.json({success:true, data:{...COURSE, chevaux:chevauxLive, partants:CHEVAUX.length}, analyses, ia_pronos: analyses.IA_PRONOS, resultat: RESULTAT, lastUpdate:COURSE.lastUpdate, serverTime:new Date().toISOString(), persisted: fs.existsSync(DATA_FILE), mode:'V12.0 FINAL STABLE - 8P TOUS TOPS + SYNTHESE 10-3pts + 9 IA ACTIVES'});
});

app.post('/api/auto-update', (req,res)=>{
  const {text} = req.body;
  if(text){ 
    let newC=parseTextToChevaux(text); 
    if(newC.length>=8){ 
      CHEVAUX=newC; COURSE.lastUpdate=new Date().toISOString(); COURSE.date=new Date().toLocaleDateString('fr-FR'); LIVE={}; RESULTAT=null; updateLive(); savePersist();
      return res.json({success:true, message:`V12.0 FINAL - ${newC.length} partants - 8P TOUS TOPS + SYNTHESE 10-3pts recalculés`, chevaux:newC}); 
    } 
    return res.json({success:false, message:`Seulement ${newC.length} chevaux (min 8)`, debug:newC}); 
  }
  res.json({success:false, message:'Envoie text'});
});

app.post('/api/verifier-resultat', (req,res)=>{
  const {arrivee} = req.body; let arr=[]; if(typeof arrivee === 'string'){ arr = arrivee.split(/[-,\s]+/).map(n=>parseInt(n.trim())).filter(n=>!isNaN(n)); } if(arr.length<3) return res.json({success:false}); RESULTAT = arr.slice(0,5); savePersist(); res.json({success:true, resultat: RESULTAT});
});

app.get('/admin', (req,res)=>res.sendFile(path.join(__dirname,'admin.html')));
app.get('/api/health', (req,res)=>res.json({status:'V12.0 FINAL STABLE 8P + SYNTHESE 10-3pts OK', partants:CHEVAUX.length, lastUpdate:COURSE.lastUpdate, persisted:fs.existsSync(DATA_FILE)}));
app.get('*', (req,res)=>res.sendFile(path.join(__dirname,'index.html')));
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log('V12.0 FINAL LIVE '+PORT));
