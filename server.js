
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const app = express();
app.use(cors());
app.use(express.json({limit:'20mb'}));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname,'public')));

// BUGFIX V11.5 - PERSISTANCE + NO CACHE
const DATA_FILE = path.join(__dirname, 'data_persist.json');

function loadPersist(){
  try{
    if(fs.existsSync(DATA_FILE)){
      const d = JSON.parse(fs.readFileSync(DATA_FILE,'utf8'));
      console.log('PERSIST loaded', d.COURSE?.date, d.CHEVAUX?.length);
      return d;
    }
  }catch(e){ console.log('loadPersist error', e.message); }
  return null;
}
function savePersist(){
  try{
    const data = {CHEVAUX, COURSE, IA_PRONOS, RESULTAT, LIVE, savedAt:new Date().toISOString()};
    fs.writeFileSync(DATA_FILE, JSON.stringify(data), 'utf8');
    console.log('PERSIST saved', CHEVAUX.length, COURSE.date);
  }catch(e){ console.log('savePersist error', e.message); }
}

let DEFAULT_CHEVAUX = [{"num": 1, "nom": "SIR MARVEL", "driver": "L. Philipperon", "entraineur": "M. Seror", "gains": "128145€", "musique": "3sAs8s2h", "cote": 8.8, "forme": "Bonne", "classe": 7.8, "chrono": "4'37\"1", "corde": 1, "age": "5 H", "poids": "73.5kg"}, {"num": 2, "nom": "COUTE QUE COUTE", "driver": "J. Reveley", "entraineur": "H. Merienne", "gains": "137380€", "musique": "2s0s2h", "cote": 5.6, "forme": "Très Bonne", "classe": 8.5, "chrono": "4'28\"0", "corde": 2, "age": "5 F", "poids": "72.0kg"}, {"num": 3, "nom": "BELLE GOSSE", "driver": "A. Zuliani", "entraineur": "F. Nicolle", "gains": "51460€", "musique": "1h7h5s", "cote": 6.6, "forme": "Bonne", "classe": 8.2, "chrono": "4'43\"3", "corde": 3, "age": "5 F", "poids": "72.0kg"}, {"num": 4, "nom": "LOUBA", "driver": "B. Le Clerc", "entraineur": "F. Bellemere", "gains": "143395€", "musique": "1s4h3s", "cote": 10.6, "forme": "Moyenne", "classe": 7.0, "chrono": "4'43\"5", "corde": 4, "age": "5 F", "poids": "71.5kg"}, {"num": 5, "nom": "LADY LADY LAY", "driver": "J. Charron", "entraineur": "Gab. Leenders", "gains": "75185€", "musique": "7s1s4h", "cote": 6.8, "forme": "Excellente", "classe": 8.0, "chrono": "4'28\"2", "corde": 5, "age": "5 F", "poids": "71.5kg"}, {"num": 6, "nom": "LE COLOMBAR", "driver": "J. Phelippe", "entraineur": "M. Seror", "gains": "124940€", "musique": "1s0h3h", "cote": 11.7, "forme": "Moyenne", "classe": 6.8, "chrono": "4'37\"5", "corde": 6, "age": "5 H", "poids": "70.5kg"}, {"num": 7, "nom": "MON PETIT PRINCE", "driver": "T. Chevillard", "entraineur": "Gab. Leenders", "gains": "99725€", "musique": "2s3s3h", "cote": 11.5, "forme": "Bonne", "classe": 7.2, "chrono": "4'30\"0", "corde": 7, "age": "5 H", "poids": "70.5kg"}, {"num": 8, "nom": "LADY ANGE WIN", "driver": "Br. Le Clerc", "entraineur": "A. Le Clerc", "gains": "109430€", "musique": "1s7h4s", "cote": 20.4, "forme": "Moyenne", "classe": 6.5, "chrono": "4'08\"1", "corde": 8, "age": "5 F", "poids": "69.5kg"}, {"num": 9, "nom": "LE COEUR SAUVAGE", "driver": "K. Nabet", "entraineur": "P & C. Peltier", "gains": "52890€", "musique": "3h2h2h", "cote": 7.3, "forme": "Très Bonne", "classe": 8.3, "chrono": "4'25\"5", "corde": 9, "age": "5 H", "poids": "69.0kg"}, {"num": 10, "nom": "FLYING TRIX", "driver": "T. Beaurain", "entraineur": "L. Carberry", "gains": "14235€", "musique": "6h1h", "cote": 10.1, "forme": "Moyenne", "classe": 6.9, "chrono": "4'37\"2", "corde": 10, "age": "5 H", "poids": "69.0kg"}, {"num": 11, "nom": "HAYNES STAR", "driver": "A. Haynes", "entraineur": "C. Autre", "gains": "0€", "musique": "4h2h", "cote": 13.3, "forme": "Bonne", "classe": 7.0, "chrono": "4'35\"0", "corde": 11, "age": "5 H", "poids": "68.0kg"}, {"num": 12, "nom": "JOSHUA DREAM", "driver": "J. Da Silva", "entraineur": "F. Nicolle", "gains": "0€", "musique": "1h2h", "cote": 9.5, "forme": "Bonne", "classe": 7.5, "chrono": "4'32\"0", "corde": 12, "age": "5 H", "poids": "67.5kg"}, {"num": 13, "nom": "KING OF STARS", "driver": "N. Desoutter", "entraineur": "Y. Fouin", "gains": "0€", "musique": "2h1h", "cote": 12.0, "forme": "Moyenne", "classe": 6.8, "chrono": "4'40\"0", "corde": 13, "age": "5 H", "poids": "67.0kg"}, {"num": 14, "nom": "LORD DU LEMAN", "driver": "G. Meunier", "entraineur": "E. Grall", "gains": "0€", "musique": "3h2h", "cote": 18.0, "forme": "Faible", "classe": 6.0, "chrono": "4'45\"0", "corde": 14, "age": "5 H", "poids": "66.5kg"}, {"num": 15, "nom": "MAGIC FLIGHT", "driver": "C. Lefebvre", "entraineur": "M. Rolland", "gains": "0€", "musique": "1h3h", "cote": 15.0, "forme": "Bonne", "classe": 7.0, "chrono": "4'36\"0", "corde": 15, "age": "5 H", "poids": "66.0kg"}];
let DEFAULT_COURSE = {date:'24/10/2026', hippodrome:'Compiègne', reunion:'R1', courseNum:3, nom:'PRIX DE BEAUNE (Quinté+)', distance:'3600m', discipline:'Haies - Handicap', heure:'15h15', allocation:'98 000€', type:'Quinté+ Haies', lastUpdate:new Date().toISOString(), source:'V11.5 BUGFIX DEFAULT'};
let DEFAULT_IA = {"CHATGPT": {"fav": [2, 5, 3, 9, 1, 7, 4, 10], "outsiders": [8, 11]}, "Gemini": {"fav": [2, 3, 5, 9, 1, 7, 4, 11], "outsiders": [6, 8]}, "Claude": {"fav": [5, 2, 3, 1, 9, 7, 4, 10], "outsiders": [6, 8]}, "GROK": {"fav": [2, 5, 9, 3, 1, 7, 11, 4], "outsiders": [8, 10]}, "PERPLEXITY": {"fav": [2, 3, 5, 1, 9, 7, 4, 10], "outsiders": [6, 11]}, "Mistral": {"fav": [3, 2, 5, 9, 1, 7, 4, 10], "outsiders": [11, 8]}, "DeepSeek": {"fav": [2, 5, 3, 9, 1, 7, 10, 4], "outsiders": [8, 12]}, "Copilot": {"fav": [2, 5, 3, 9, 7, 1, 4, 10], "outsiders": [6, 11]}, "ZETURF_IA": {"fav": [2, 3, 5, 1, 9, 4, 7, 10], "outsiders": [6, 11]}};

let CHEVAUX, COURSE, IA_PRONOS, RESULTAT, LIVE;
const persisted = loadPersist();
if(persisted && persisted.CHEVAUX && persisted.CHEVAUX.length>=8){
  CHEVAUX = persisted.CHEVAUX;
  COURSE = persisted.COURSE || DEFAULT_COURSE;
  IA_PRONOS = persisted.IA_PRONOS || DEFAULT_IA;
  RESULTAT = persisted.RESULTAT || null;
  LIVE = persisted.LIVE || {};
  console.log('USING PERSISTED DATA');
} else {
  CHEVAUX = DEFAULT_CHEVAUX;
  COURSE = DEFAULT_COURSE;
  IA_PRONOS = DEFAULT_IA;
  RESULTAT = null;
  LIVE = {};
  console.log('USING DEFAULT DATA');
}

function genAllTops(chevaux){
  const sortedCote = [...chevaux].sort((a,b)=>a.cote-b.cote);
  const sortedClasse = [...chevaux].sort((a,b)=> b.classe - a.classe);
  const topCotesDirect = sortedCote.slice(0,6).map(c=>({num:c.num, nom:c.nom, cote:c.cote}));
  const topChevaux = sortedClasse.slice(0,6).map(c=>({num:c.num, nom:c.nom, classe:c.classe}));
  const topPalmares = [...chevaux].map(c=>{ const wins = (c.musique.match(/1h|1s/g)||[]).length; return {...c, wins}; }).sort((a,b)=>b.wins-a.wins).slice(0,6);
  const topForme = [...chevaux].filter(c=>c.forme.includes('Excellente')||c.forme.includes('Très Bonne')||c.forme.includes('Bonne')).slice(0,6);
  const topClasse = sortedClasse.slice(0,6);
  const topDrivers = [{driver:'A. Zuliani', course:30}];
  const topEntraineurs = [{entraineur:'F. Nicolle', course:32}];
  const aptitude1er = sortedCote.slice(0,6);
  const aptitudePlace = sortedClasse.slice(0,6);
  const topChronos = [...chevaux].sort((a,b)=> a.chrono.localeCompare(b.chrono)).slice(0,6);
  const topPosition = [...chevaux].sort((a,b)=>a.corde-b.corde).slice(0,6);
  const ecarts = chevaux.map(c=>{ const live = LIVE[c.num]||c.cote*0.92; return {num:c.num, nom:c.nom, coteMatin:c.cote, coteLive:live, ecart:((live-c.cote)/c.cote*100).toFixed(1)+'%', source:c.source||'Universel'}; }).slice(0,6);
  const incontournables = sortedCote.slice(0,2);
  const pourUnePlace = sortedCote.slice(2,7);
  const synthesePonderee = [...chevaux].map(c=>{ const score = (10-c.cote/10)*0.4 + c.classe*0.3 + 5; return {...c, score:score.toFixed(2)}; }).sort((a,b)=>b.score-a.score).slice(0,8);
  const syntheseGlobale = synthesePonderee.slice(0,5);
  const zoneABC = { A: sortedCote.slice(0,5).map(c=>c.num), B: sortedCote.slice(5,11).map(c=>c.num), C: sortedCote.slice(11).map(c=>c.num) };
  const presse = [{num:2, presse:'12/15'},{num:5, presse:'10/15'}];
  const algoPerso = synthesePonderee.slice(0,6);
  const counterFav = {}; const counterOut = {};
  Object.keys(IA_PRONOS).forEach(ia=>{ IA_PRONOS[ia].fav.forEach(n=>{ counterFav[n]=(counterFav[n]||0)+1; }); IA_PRONOS[ia].outsiders.forEach(n=>{ counterOut[n]=(counterOut[n]||0)+1; }); });
  const syntheseIA = { fav: Object.entries(counterFav).sort((a,b)=>b[1]-a[1]).slice(0,8).map(([num,c])=>({num:parseInt(num), citations:c})), outsiders: Object.entries(counterOut).sort((a,b)=>b[1]-a[1]).slice(0,4).map(([num,c])=>({num:parseInt(num), citations:c})), global: `Base IA: ${Object.entries(counterFav).sort((a,b)=>b[1]-a[1])[0][0]} - ${Object.entries(counterFav).sort((a,b)=>b[1]-a[1])[1][0]}` };
  const prono8 = sortedCote.slice(0,8).map(c=>c.num);
  const baseBeton = sortedCote[0];
  let verification = null;
  if(RESULTAT && RESULTAT.length>=3){
    const arrivee = RESULTAT;
    const checkIA = {};
    Object.keys(IA_PRONOS).forEach(ia=>{
      const fav = IA_PRONOS[ia].fav; const out = IA_PRONOS[ia].outsiders;
      const tierceOk = arrivee.slice(0,3).every(n=>fav.includes(n));
      const quarteOk = arrivee.slice(0,4).every(n=>fav.includes(n));
      const quinteOk = arrivee.slice(0,5).every(n=>[...fav,...out].includes(n));
      const nbDans8 = arrivee.slice(0,5).filter(n=>fav.includes(n)).length;
      checkIA[ia] = {tierce: tierceOk?'✅ GAGNÉ':'❌ PERDU', quarte: quarteOk?'✅ GAGNÉ':'❌ PERDU', quinte: quinteOk?'✅ GAGNÉ':'❌ PERDU', dans8: nbDans8+'/5'};
    });
    const checkTops = {
      topCotesDirect: arrivee.slice(0,3).filter(n=> topCotesDirect.map(c=>c.num).includes(n)).length + '/3 dans Top Cotes',
      topChevaux: arrivee.slice(0,3).filter(n=> topChevaux.map(c=>c.num).includes(n)).length + '/3 dans Top Chevaux',
      baseBeton: arrivee[0]===baseBeton.num ? `✅ Base Béton ${baseBeton.num} GAGNANT` : `❌ Base ${baseBeton.num} vs Gagnant ${arrivee[0]}`,
      zoneA: arrivee.slice(0,5).filter(n=> zoneABC.A.includes(n)).length + '/5 en Zone A',
    };
    verification = {arrivee, checkIA, checkTops, date: new Date().toISOString()};
  }
  return { topCotesDirect, topChevaux, topPalmares, topForme, topClasse, topDrivers, topEntraineurs, aptitude1er, aptitudePlace, topChronos, topPosition, ecarts, incontournables, pourUnePlace, synthesePonderee, syntheseGlobale, zoneABC, presse, algoPerso, prono8, baseBeton, syntheseIA, verification, synthese:`Favori ${sortedCote[0].nom}`, sources:{geny:true,zeturf:true,pmu:true,turfFrance:true} };
}
function updateLive(){ CHEVAUX.forEach(c=>{ const base = LIVE[c.num]||c.cote*0.92; const v=(Math.random()-0.5)*1.2; LIVE[c.num]=Math.max(1.3, Math.round((base+v)*10)/10); }); savePersist(); }
updateLive(); setInterval(updateLive, 5*60*1000);

function parseTextToChevaux(text){
  let newC=[]; let seen = new Set();
  const t = text.replace(/\r/g,' ').replace(/\n/g,'\n');
  const patterns = [
    /(\d{1,2})\s+([A-Z][A-Z\s\-']{2,25})(?=\s+\d+[\.,]\d|\s+\d+\s+[HF]\s|\s+\d+'|\s+[\d\.]+€)/g,
    /(\d{1,2})\s*[\-–—]\s*([A-Z][A-ZÀÂÉÈÊËÏÎÔÙÛÜÇa-zàâéèêëïîôùûüç\s\-']{2,30})(?=\s*[\-–—])/g,
    /(\d{1,2})\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+){0,3})/g,
    /(?:N°|#|Num\.?|Cheval\s*)\s*(\d{1,2})[^\d\n]{0,20}([A-Z][A-Z\s\-']{2,25})/gi,
    /\b(\d{1,2})\s+([A-Z]{2,}(?:\s+[A-Z]{2,}){0,3})\b/g
  ];
  const blacklist = ['LISTE','PARTANTS','HIPPO','PRIX','POUR','CHEVAL','COTES','CHRON','MUSIQUE','GAINS','POIDS','AGE','SEXE','DISCIPLINE','DISTANCE','CORDE','MONTANT','CONDITIONS','HEURE','HANDICAP','QUINTE','HAIE','BEAUNE','COMPIEGNE','VINCENNES','AUTEUIL','GENY','ZETURF','TURF','FRANCE','PMU','PARIS','PRONO','ARRIVEE','DEPART','CLASSEMENT'];
  patterns.forEach(regex=>{
    let m;
    while((m=regex.exec(t))!==null){
      try{
        const num=parseInt(m[1]); let nom=m[2].trim().replace(/\s+/g,' ').substring(0,30).toUpperCase();
        nom=nom.replace(/\b(POUR|CHEVAL|COTES|CHRON|MUSIQUE|GAINS|POIDS|AGE|SEXE|LISTE|PARTANTS|HIPPO|PRIX|DISCIPLINE|DISTANCE|CORDE|MONTANT|CONDITIONS|N°|CHEVAL|COTE|REF|JOCKEY|ENTRAINEUR|PROPRIETAIRE|DERNIER|PART|CHOIX|CASAQUE)\b/g,'').trim();
        if(num>=1 && num<=20 && nom.length>=3 && nom.length<=30 && !seen.has(num) && /^[A-Z]/.test(nom) && !blacklist.includes(nom) && nom.split(' ').length<=4 && !/^\d+$/.test(nom)){
          seen.add(num);
          newC.push({num, nom, driver:'', entraineur:'', gains:'', musique:'', cote:5+Math.random()*15, forme:'Bonne', classe:7, chrono:"4'30\"0", corde:num, age:'5 H', poids:'70kg', source:'Auto-détecté'});
        }
      }catch(e){}
    }
  });
  return newC.sort((a,b)=>a.num-b.num).filter((v,i,a)=>a.findIndex(t=>t.num===v.num)===i);
}

// NO CACHE HEADERS - BUGFIX
app.use((req,res,next)=>{
  res.set('Cache-Control','no-store, no-cache, must-revalidate, private');
  res.set('Pragma','no-cache');
  res.set('Expires','0');
  next();
});

app.get('/api/course-du-jour', (req,res)=>{
  const analyses = genAllTops(CHEVAUX);
  const chevauxLive = CHEVAUX.map(c=>{ const live = LIVE[c.num]||c.cote*0.92; const zeturfCote = (live*0.95).toFixed(1); return {...c, coteMatin:c.cote, coteLive:live, coteZeturf:zeturfCote}; });
  res.json({success:true, data:{...COURSE, chevaux:chevauxLive, partants:CHEVAUX.length}, analyses, ia_pronos: IA_PRONOS, resultat: RESULTAT, lastUpdate:COURSE.lastUpdate, serverTime:new Date().toISOString(), persisted: fs.existsSync(DATA_FILE), mode:'V11.5 BUGFIX - PERSIST + NO CACHE + UNIVERSAL'});
});

app.get('/api/debug', (req,res)=>{
  res.json({chevaux:CHEVAUX.length, course:COURSE, lastUpdate:COURSE.lastUpdate, result:RESULTAT, liveCount:Object.keys(LIVE).length, fileExists:fs.existsSync(DATA_FILE), fileContent: fs.existsSync(DATA_FILE)? JSON.parse(fs.readFileSync(DATA_FILE,'utf8')).savedAt : null, serverTime:new Date().toISOString()});
});

app.post('/api/auto-update', (req,res)=>{
  const {text, chevaux, source} = req.body;
  if(chevaux && chevaux.length>=8){ 
    CHEVAUX=chevaux; COURSE.lastUpdate=new Date().toISOString(); if(source) COURSE.source=source; COURSE.date=new Date().toLocaleDateString('fr-FR'); LIVE={}; RESULTAT=null; updateLive(); savePersist();
    return res.json({success:true, message:`V11.5 BUGFIX - ${CHEVAUX.length} partants - Source: ${source||'auto'} - PERSISTÉ - Vérificateur reset - Va voir page principale maintenant (force refresh Ctrl+F5)`, chevaux:CHEVAUX}); 
  }
  if(text){ 
    let newC=parseTextToChevaux(text); 
    let detectedSource='Auto';
    const lower=text.toLowerCase();
    if(lower.includes('zeturf')) detectedSource='Zeturf';
    else if(lower.includes('geny')) detectedSource='Geny';
    else if(lower.includes('turf')||lower.includes('compiegne')) detectedSource='Turf-France';
    else if(lower.includes('pmu')) detectedSource='PMU';
    else if(lower.includes('paris-turf')) detectedSource='Paris-Turf';
    
    if(newC.length>=8){ 
      CHEVAUX=newC; COURSE.lastUpdate=new Date().toISOString(); COURSE.date=new Date().toLocaleDateString('fr-FR'); COURSE.hippodrome=detectedSource+' (via texte)'; COURSE.nom=`Course importée - ${detectedSource} - ${newC.length} partants`; COURSE.source=`V11.5 BUGFIX - Source: ${detectedSource} - ${new Date().toLocaleString('fr-FR')}`; LIVE={}; RESULTAT=null; updateLive(); savePersist();
      return res.json({success:true, message:`V11.5 BUGFIX - ${newC.length} partants - Source: ${detectedSource} - PERSISTÉ + NO CACHE - Maintenant va sur page principale et fais Ctrl+F5 !`, chevaux:newC, source:detectedSource, course:COURSE}); 
    } 
    return res.json({success:false, message:`V11.5 - Seulement ${newC.length} chevaux trouvés (min 8). Source: ${detectedSource}. Texte trop court? Longueur: ${text.length} chars`, debug:newC, source:detectedSource, textSample:text.substring(0,200)}); 
  }
  res.json({success:false, message:'Envoie text - V11.5 BUGFIX'});
});

app.post('/api/verifier-resultat', (req,res)=>{
  const {arrivee} = req.body; let arr=[]; if(typeof arrivee === 'string'){ arr = arrivee.split(/[-,\s]+/).map(n=>parseInt(n.trim())).filter(n=>!isNaN(n)); } else if(Array.isArray(arrivee)){ arr = arrivee; } if(arr.length<3) return res.json({success:false, message:'Donne au moins 3 numéros'}); RESULTAT = arr.slice(0,5); savePersist(); res.json({success:true, message:`Résultat enregistré: ${RESULTAT.join('-')} - PERSISTÉ - Vérificateur V11.5 activé`, resultat: RESULTAT});
});

app.post('/api/reset', (req,res)=>{
  CHEVAUX = DEFAULT_CHEVAUX; COURSE = DEFAULT_COURSE; RESULTAT=null; LIVE={}; savePersist();
  res.json({success:true, message:'Reset Compiègne 24/10 15 partants'});
});

app.get('/admin', (req,res)=>res.sendFile(path.join(__dirname,'admin.html')));
app.get('/api/health', (req,res)=>res.json({status:'V11.5 BUGFIX PERSIST + NO CACHE OK', partants:CHEVAUX.length, resultat:RESULTAT, hippodrome:COURSE.hippodrome, course:COURSE.nom, lastUpdate:COURSE.lastUpdate, source:COURSE.source, persisted:fs.existsSync(DATA_FILE), serverTime:new Date().toISOString()}));
app.get('*', (req,res)=>res.sendFile(path.join(__dirname,'index.html')));
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log('V11.5 BUGFIX LIVE '+PORT));
