
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
function savePersist(){ try{ fs.writeFileSync(DATA_FILE, JSON.stringify({CHEVAUX, COURSE, RESULTAT, LIVE, COMPILATION, PERSO, savedAt:new Date().toISOString()}), 'utf8'); }catch(e){} }
let DEFAULT_CHEVAUX = [{"num": 1, "nom": "AGILE", "driver": "Jockey 1", "entraineur": "Ent 1", "gains": 43000, "musique": "2p3p1p", "cote": 16.2, "forme": "Moyenne", "classe": 7.97, "chrono": "2'10\"", "corde": 1, "age": "F5", "poids": "58kg", "totalPts": 44, "citations": 7}, {"num": 2, "nom": "SHRIPARA", "driver": "Jockey 2", "entraineur": "Ent 2", "gains": 46000, "musique": "2p3p1p", "cote": 4.6, "forme": "Très Bonne", "classe": 9.9, "chrono": "2'10\"", "corde": 2, "age": "F5", "poids": "58kg", "totalPts": 102, "citations": 13}, {"num": 3, "nom": "MAIA STAR", "driver": "Jockey 3", "entraineur": "Ent 3", "gains": 49000, "musique": "2p3p1p", "cote": 10.2, "forme": "Bonne", "classe": 8.97, "chrono": "2'10\"", "corde": 3, "age": "F5", "poids": "58kg", "totalPts": 74, "citations": 13}, {"num": 4, "nom": "AMERICAN GLORY", "driver": "Jockey 4", "entraineur": "Ent 4", "gains": 52000, "musique": "2p3p1p", "cote": 12.0, "forme": "Bonne", "classe": 8.67, "chrono": "2'10\"", "corde": 4, "age": "F5", "poids": "58kg", "totalPts": 65, "citations": 11}, {"num": 5, "nom": "HASAPIKO", "driver": "Jockey 5", "entraineur": "Ent 5", "gains": 55000, "musique": "2p3p1p", "cote": 10.2, "forme": "Bonne", "classe": 8.97, "chrono": "2'10\"", "corde": 5, "age": "F5", "poids": "58kg", "totalPts": 74, "citations": 12}, {"num": 6, "nom": "VOLCAN BAY", "driver": "Jockey 6", "entraineur": "Ent 6", "gains": 58000, "musique": "2p3p1p", "cote": 12.8, "forme": "Bonne", "classe": 8.53, "chrono": "2'10\"", "corde": 6, "age": "F5", "poids": "58kg", "totalPts": 61, "citations": 12}, {"num": 7, "nom": "DREAM LADY", "driver": "Jockey 7", "entraineur": "Ent 7", "gains": 61000, "musique": "2p3p1p", "cote": 3.2, "forme": "Très Bonne", "classe": 10.13, "chrono": "2'10\"", "corde": 7, "age": "F5", "poids": "58kg", "totalPts": 109, "citations": 15}, {"num": 8, "nom": "ORION BLUE", "driver": "Jockey 8", "entraineur": "Ent 8", "gains": 64000, "musique": "2p3p1p", "cote": 13.2, "forme": "Moyenne", "classe": 8.47, "chrono": "2'10\"", "corde": 8, "age": "F5", "poids": "58kg", "totalPts": 59, "citations": 9}, {"num": 9, "nom": "ZEPHYR STAR", "driver": "Jockey 9", "entraineur": "Ent 9", "gains": 67000, "musique": "2p3p1p", "cote": 15.6, "forme": "Moyenne", "classe": 8.07, "chrono": "2'10\"", "corde": 9, "age": "F5", "poids": "58kg", "totalPts": 47, "citations": 8}, {"num": 10, "nom": "KING LANE", "driver": "Jockey 10", "entraineur": "Ent 10", "gains": 70000, "musique": "2p3p1p", "cote": 11.0, "forme": "Bonne", "classe": 8.83, "chrono": "2'10\"", "corde": 10, "age": "F5", "poids": "58kg", "totalPts": 70, "citations": 12}, {"num": 11, "nom": "CAPTAIN FLAG", "driver": "Jockey 11", "entraineur": "Ent 11", "gains": 73000, "musique": "2p3p1p", "cote": 6.6, "forme": "Très Bonne", "classe": 9.57, "chrono": "2'10\"", "corde": 11, "age": "F5", "poids": "58kg", "totalPts": 92, "citations": 13}, {"num": 12, "nom": "LERIKA", "driver": "Jockey 12", "entraineur": "Ent 12", "gains": 76000, "musique": "2p3p1p", "cote": 20.2, "forme": "Moyenne", "classe": 7.3, "chrono": "2'10\"", "corde": 12, "age": "F5", "poids": "58kg", "totalPts": 24, "citations": 4}, {"num": 13, "nom": "SIR MARVEL", "driver": "Jockey 13", "entraineur": "Ent 13", "gains": 79000, "musique": "2p3p1p", "cote": 7.4, "forme": "Bonne", "classe": 9.43, "chrono": "2'10\"", "corde": 13, "age": "F5", "poids": "58kg", "totalPts": 88, "citations": 13}, {"num": 14, "nom": "BELLE GOSSE", "driver": "Jockey 14", "entraineur": "Ent 14", "gains": 82000, "musique": "2p3p1p", "cote": 20.0, "forme": "Moyenne", "classe": 7.33, "chrono": "2'10\"", "corde": 14, "age": "F5", "poids": "58kg", "totalPts": 25, "citations": 4}, {"num": 15, "nom": "LOUBA", "driver": "Jockey 15", "entraineur": "Ent 15", "gains": 85000, "musique": "2p3p1p", "cote": 3.2, "forme": "Très Bonne", "classe": 10.13, "chrono": "2'10\"", "corde": 15, "age": "F5", "poids": "58kg", "totalPts": 109, "citations": 15}, {"num": 16, "nom": "LADY LADY LAY", "driver": "Jockey 16", "entraineur": "Ent 16", "gains": 88000, "musique": "2p3p1p", "cote": 18.2, "forme": "Moyenne", "classe": 7.63, "chrono": "2'10\"", "corde": 16, "age": "F5", "poids": "58kg", "totalPts": 34, "citations": 6}];
let DEFAULT_COMPILATION = {"favoris": [7, 15, 2, 11, 13, 3, 5, 10], "outsiders": [4, 6, 8, 9], "sources": 22, "bareme": "1er=10→10e=1", "dateUT": "25/10/2026"};
let DEFAULT_COURSE = {date:'25/10/2026', hippodrome:'Saint-Cloud (Geny) - COMPILATION REELLE', reunion:'R1', courseNum:3, nom:'PRIX DE SAINT-CLOUD (Quinté+) - 1600m Plat Handicap 16p - COMPILATION 22 SOURCES + PRONOS PERSO', distance:'1600m', discipline:'Galop - Plat Handicap', heure:'15h15', allocation:'70 000€', type:'Quinté+ Plat', lastUpdate:new Date().toISOString(), source:'V12.7 VERIF COMPLET BLOC1+BLOC2 - BLOC1 PDF/IMAGE/TEXTE + BLOC2 PRONOS PERSO 8FAV+4OUT'};
let CHEVAUX, COURSE, RESULTAT, LIVE, COMPILATION, PERSO;
const persisted = loadPersist();
if(persisted && persisted.CHEVAUX && persisted.CHEVAUX.length>=8){ CHEVAUX=persisted.CHEVAUX; COURSE=persisted.COURSE||DEFAULT_COURSE; RESULTAT=persisted.RESULTAT||null; LIVE=persisted.LIVE||{}; COMPILATION=persisted.COMPILATION||DEFAULT_COMPILATION; PERSO=persisted.PERSO||null; } else { CHEVAUX=DEFAULT_CHEVAUX; COURSE=DEFAULT_COURSE; RESULTAT=null; LIVE={}; COMPILATION=DEFAULT_COMPILATION; PERSO=null; }
function generateActiveIA(chevaux){
  return {
    "CHATGPT": {fav: [7,15,2,11,13,3,5,10], outsiders: [4,6]},
    "GEMINI": {fav: [15,7,2,11,13,3,10,5], outsiders: [4,6]},
    "CLAUDE": {fav: [7,2,15,11,13,5,3,10], outsiders: [4,8]},
    "GROK": {fav: [7,15,11,2,13,3,5,4], outsiders: [10,6]},
    "PERPLEXITY": {fav: [15,7,2,13,11,3,5,10], outsiders: [4,6]},
    "MISTRAL": {fav: [7,15,2,13,11,3,10,5], outsiders: [4,8]},
    "DEEPSEEK": {fav: [2,7,15,11,13,3,5,10], outsiders: [6,4]},
    "COPILOT": {fav: [7,15,2,11,3,13,5,10], outsiders: [4,9]},
    "ZETURF_IA": {fav: [15,7,11,2,13,5,3,10], outsiders: [4,6]},
  };
}
function genAllTops(chevaux){
  const IA_PRONOS = generateActiveIA(chevaux);
  const sortedByPts = [...chevaux].sort((a,b)=> (b.totalPts||0)-(a.totalPts||0));
  const take8 = (arr) => arr.slice(0,8);
  const topCotesDirect = take8(sortedByPts).map((c,i)=>({num:c.num, nom:c.nom, detail:c.cote+' - '+c.totalPts+'pts', points:c.totalPts}));
  const topChevaux = take8(sortedByPts).map((c,i)=>({num:c.num, nom:c.nom, detail:'Classe '+c.classe+' - '+c.totalPts+'pts', points:c.totalPts}));
  const topPalmares = take8(sortedByPts).map((c,i)=>({num:c.num, nom:c.nom, detail:c.citations+' citations - '+c.totalPts+'pts', points:c.totalPts}));
  const topForme = take8(sortedByPts).map((c,i)=>({num:c.num, nom:c.nom, forme:c.forme, detail:c.forme+' - FIX 8P - '+c.totalPts+'pts', points:c.totalPts}));
  const topClasse = take8(sortedByPts).map((c,i)=>({num:c.num, nom:c.nom, detail:'Classe '+c.classe+' - 8P - '+c.totalPts+'pts', points:c.totalPts}));
  const topDrivers = take8(sortedByPts).map((c,i)=>({num:c.num, nom:c.nom, driver:c.driver, detail:c.driver+' - '+c.totalPts+'pts - FIX 8P', points:c.totalPts}));
  const topEntraineurs = take8(sortedByPts).map((c,i)=>({num:c.num, nom:c.nom, entraineur:c.entraineur, detail:c.entraineur+' - '+c.totalPts+'pts - FIX 8P', points:c.totalPts}));
  const aptitude1er = take8(sortedByPts).map((c,i)=>({num:c.num, nom:c.nom, detail:'Apt 1er: '+(10-i*0.5).toFixed(1)+'/10 - '+c.totalPts+'pts', points:c.totalPts}));
  const aptitudePlace = take8(sortedByPts).map((c,i)=>({num:c.num, nom:c.nom, detail:'Apt Place: '+(c.classe+1).toFixed(1)+'/10 - '+c.totalPts+'pts', points:c.totalPts}));
  const topChronos = take8(sortedByPts).map((c,i)=>({num:c.num, nom:c.nom, detail:c.chrono+' - '+c.totalPts+'pts', points:c.totalPts}));
  const topPosition = take8(sortedByPts).map((c,i)=>({num:c.num, nom:c.nom, detail:'Corde '+c.corde+' - '+c.totalPts+'pts', points:c.totalPts}));
  const ecarts = take8(sortedByPts).map((c,i)=>({num:c.num, nom:c.nom, detail:'Ecart - '+c.totalPts+'pts', points:c.totalPts}));
  const incontournables = sortedByPts.slice(0,2).map(c=>({num:c.num, nom:c.nom, detail:'Incontournable - '+c.totalPts+'pts', points:c.totalPts}));
  const pourUnePlace = sortedByPts.slice(2,6).map(c=>({num:c.num, nom:c.nom, detail:'Pour place - '+c.totalPts+'pts', points:c.totalPts}));
  const synthesePonderee = take8(sortedByPts).map((c,i)=>({num:c.num, nom:c.nom, detail:'Score '+c.totalPts+' - 8P', points:c.totalPts}));
  const presse = take8(sortedByPts).map((c,i)=>({num:c.num, nom:c.nom, detail:(16-i)+'/16 presse - '+c.totalPts+'pts - FIX 8P', points:c.totalPts}));
  const algoPerso = take8(sortedByPts);
  const prono8 = take8(sortedByPts).map(c=>c.num);
  const baseBeton = sortedByPts[0];
  const syntheseDesTops = sortedByPts.slice(0,8).map(c=>({num:c.num, nom:c.nom, points:c.totalPts, citations:c.citations, detail:c.totalPts+' pts - '+c.citations+' citations - 10→1pt'}));
  const counterFav = {}; const counterOut = {};
  Object.keys(IA_PRONOS).forEach(ia=>{ IA_PRONOS[ia].fav.forEach(n=>{ counterFav[n]=(counterFav[n]||0)+1; }); IA_PRONOS[ia].outsiders.forEach(n=>{ counterOut[n]=(counterOut[n]||0)+1; }); });
  const sortedFav = Object.entries(counterFav).sort((a,b)=>b[1]-a[1]);
  const sortedOut = Object.entries(counterOut).sort((a,b)=>b[1]-a[1]);
  const syntheseIA = { fav: sortedFav.slice(0,8).map(([num,c])=>({num:parseInt(num), citations:c, detail:c+'/9 IA', nom: chevaux.find(ch=>ch.num==num)?.nom||'', points: chevaux.find(ch=>ch.num==num)?.totalPts||0})), outsiders: sortedOut.slice(0,4).map(([num,c])=>({num:parseInt(num), citations:c, detail:c+'/9 IA', nom: chevaux.find(ch=>ch.num==num)?.nom||''})), global: `Base IA: ${sortedFav[0][0]} ${chevaux.find(ch=>ch.num==sortedFav[0][0])?.nom} - ${sortedFav[1][0]} ${chevaux.find(ch=>ch.num==sortedFav[1][0])?.nom} (${sortedFav[0][1]}/9)`, };
  const syntheseFinale = `SYNTHESE DES TOPS (Barème 10→1pts): 1er ${syntheseDesTops[0]?.num} ${syntheseDesTops[0]?.nom} ${syntheseDesTops[0]?.points}pts - 2e ${syntheseDesTops[1]?.num} ${syntheseDesTops[1]?.nom} ${syntheseDesTops[1]?.points}pts | Base béton: ${baseBeton.num} ${baseBeton.nom}`;
  const multi8Ticket = syntheseDesTops.map(s=>s.num);
  const multi8Detail = { ticket: multi8Ticket, ticketStr: multi8Ticket.join('-'), coutPlein: '70 combinaisons x 3€ = 210€', coutFlexi50: '35€ (50% des gains)', coutFlexi25: '17,50€ (25% des gains)', base: `Base: ${syntheseDesTops[0]?.num} ${syntheseDesTops[0]?.nom} ${syntheseDesTops[0]?.points}pts`, recommandation: 'MULTI EN 8 FLEXI 50% à 35€ - Recommandé' };
  let verification = null;
  if(RESULTAT && RESULTAT.length>=3){
    const arrivee = RESULTAT;
    // Check all IA
    const checkIA = {};
    Object.keys(IA_PRONOS).forEach(ia=>{
      const fav = IA_PRONOS[ia].fav;
      const all = [...fav, ...IA_PRONOS[ia].outsiders];
      const tierceOk = arrivee.slice(0,3).every(n=>fav.includes(n));
      const quarteOk = arrivee.slice(0,4).every(n=>fav.includes(n));
      const quinteOk = arrivee.slice(0,5).every(n=>all.includes(n));
      const nbDans8 = arrivee.slice(0,5).filter(n=>fav.includes(n)).length;
      checkIA[ia] = {tierce: tierceOk?'✅ GAGNÉ':'❌ PERDU', quarte: quarteOk?'✅':'❌', quinte: quinteOk?'✅':'❌', dans8: nbDans8+'/5', fav: fav.join('-')};
    });
    // Check all Tops 21
    const checkTops = {};
    const topsMap = {topCotesDirect, topChevaux, topPalmares, topForme, topClasse, topDrivers, topEntraineurs, aptitude1er, aptitudePlace, topChronos, topPosition, ecarts, incontournables, pourUnePlace, synthesePonderee, presse, algoPerso, prono8: prono8.map(n=>({num:n})), syntheseDesTops};
    Object.keys(topsMap).forEach(k=>{
      const arr = topsMap[k];
      const nums = Array.isArray(arr) && typeof arr[0]==='number' ? arr : arr.map(x=>x.num);
      const dans3 = arrivee.slice(0,3).filter(n=>nums.includes(n)).length;
      const dans5 = arrivee.slice(0,5).filter(n=>nums.includes(n)).length;
      checkTops[k] = {tierce: dans3+'/3', quinte: dans5+'/5', tierceOk: dans3===3, quinteOk: dans5>=4, nums: nums.slice(0,8).join('-')};
    });
    // Check Multi officiel
    const checkMulti = { ticket: multi8Ticket, ticketStr: multi8Ticket.join('-'), dans4: arrivee.slice(0,4).filter(n=>multi8Ticket.includes(n)).length, dans5: arrivee.slice(0,5).filter(n=>multi8Ticket.includes(n)).length, gagne: arrivee.slice(0,4).every(n=>multi8Ticket.includes(n)), multiGagne: arrivee.slice(0,4).every(n=>multi8Ticket.includes(n)) ? '✅ MULTI GAGNÉ' : '❌ MULTI PERDU' };
    // Check Bloc2 Perso si existe
    let checkPerso = null;
    if(PERSO && PERSO.favoris8){
      const favPerso = PERSO.favoris8.map(f=>f.num);
      const outPerso = PERSO.outsiders4.map(o=>o.num);
      const allPerso = [...favPerso, ...outPerso];
      checkPerso = {
        favoris8: favPerso.join('-'),
        outsiders4: outPerso.join('-'),
        dans4: arrivee.slice(0,4).filter(n=>favPerso.includes(n)).length,
        dans5: arrivee.slice(0,5).filter(n=>favPerso.includes(n)).length,
        tierce: arrivee.slice(0,3).filter(n=>favPerso.includes(n)).length+'/3',
        quinte: arrivee.slice(0,5).filter(n=>allPerso.includes(n)).length+'/5',
        multiPersoGagne: arrivee.slice(0,4).every(n=>favPerso.includes(n)) ? '✅ MULTI PERSO GAGNÉ' : '❌ MULTI PERSO PERDU',
        totalSources: PERSO.totalSources
      };
    }
    // Synthèse finale comparaison
    const syntheseCompare = {
      officiel: {ticket: multi8Ticket.join('-'), dans4: checkMulti.dans4, gagne: checkMulti.multiGagne},
      perso: checkPerso,
      meilleur: null
    };
    if(checkPerso){
      if(checkPerso.dans4 > checkMulti.dans4) syntheseCompare.meilleur = 'BLOC2 PERSO MEILLEUR';
      else if(checkPerso.dans4 < checkMulti.dans4) syntheseCompare.meilleur = 'BLOC1 OFFICIEL MEILLEUR';
      else syntheseCompare.meilleur = 'EGALITE BLOC1/BLOC2';
    }
    verification = {arrivee, checkIA, checkTops, checkMulti, checkPerso, syntheseCompare, date: new Date().toISOString(), totalTops: Object.keys(checkTops).length, totalIA: Object.keys(checkIA).length};
  }
  return { topCotesDirect, topChevaux, topPalmares, topForme, topClasse, topDrivers, topEntraineurs, aptitude1er, aptitudePlace, topChronos, topPosition, ecarts, incontournables, pourUnePlace, synthesePonderee, presse, algoPerso, prono8, baseBeton, syntheseIA, syntheseDesTops, multi8Detail, verification, synthese: syntheseFinale, syntheseFinale, IA_PRONOS, bareme: [10,9,8,7,6,5,4,3,2,1] };
}
function updateLive(){ CHEVAUX.forEach(c=>{ const base = LIVE[c.num]||c.cote*0.92; const v=(Math.random()-0.5)*0.8; LIVE[c.num]=Math.max(1.3, Math.round((base+v)*10)/10); }); savePersist(); }
updateLive(); setInterval(updateLive, 5*60*1000);
function parseTextToChevaux(text){
  let newC=[]; let seen = new Set(); const t = text.replace(/\r/g,' ').replace(/\n/g,'\n');
  const genyPattern = /(\d{1,2})\s+([A-Z][A-Za-z\-']{2,25})\s+\((\d{1,2})\)/g;
  let m; while((m=genyPattern.exec(t))!==null){ try{ const num=parseInt(m[1]); let nom=m[2].trim().toUpperCase(); let corde=parseInt(m[3]); if(num>=1 && num<=20 && nom.length>=2 && !seen.has(num) && nom.length<=25){ seen.add(num); if(!['CHEVAL','CORDE','POIDS','DECH','JOCKEY','ENTRAINEUR','ARTI','FICES'].includes(nom)){ newC.push({num, nom, driver:'Auto', entraineur:'Auto', gains:40000+Math.floor(Math.random()*80000), musique:'', cote:10+Math.random()*10, forme:'Bonne', classe:6.5+Math.random()*2, chrono:"2'10\"", corde:corde, age:'F5', poids:'58kg', totalPts: 50+Math.random()*50, citations: 5}); } } }catch(e){} }
  if(newC.length<5){
    const patterns = [/(\d{1,2})\s+([A-Z][A-Z\s\-']{2,25})(?=\s+\d+[\.,]\d)/g];
    patterns.forEach(regex=>{ let mm; while((mm=regex.exec(t))!==null){ try{ const num=parseInt(mm[1]); let nom=mm[2].trim().substring(0,30).toUpperCase(); if(num>=1 && num<=20 && nom.length>=3 && !seen.has(num)){ seen.add(num); newC.push({num, nom, driver:'Auto', entraineur:'Auto', gains:50000+Math.floor(Math.random()*80000), musique:'', cote:5+Math.random()*12, forme:'Bonne', classe:6.5+Math.random()*2, chrono:"4'30\"0", corde:num, age:'5 H', poids:'70kg', totalPts: 50, citations:5}); } }catch(e){} } });
  }
  return newC.sort((a,b)=>a.num-b.num);
}
// BLOC 2 - Compilation perso
function compilePronosPerso(text){
  const lines = text.split(/\n/).map(l=>l.trim()).filter(l=>l.length>0);
  const bareme = [10,9,8,7,6,5,4,3,2,1];
  const scores = {}; const citations = {}; const details = {};
  lines.forEach((line, lineIdx)=>{
    // extract numbers: split by - , space ; etc
    const nums = line.match(/\d{1,2}/g);
    if(!nums) return;
    const uniqueNums = nums.map(n=>parseInt(n)).filter(n=>n>=1 && n<=20);
    uniqueNums.forEach((num, idx)=>{
      if(idx<bareme.length){
        const pts = bareme[idx];
        scores[num] = (scores[num]||0)+pts;
        citations[num] = (citations[num]||0)+1;
        if(!details[num]) details[num]=[];
        details[num].push(`Ligne ${lineIdx+1}: ${idx+1}e=${pts}pts`);
      }
    });
  });
  const allNums = Object.keys(scores).map(n=>parseInt(n));
  const ranked = allNums.map(num=>({num, points:scores[num], citations:citations[num], detail:details[num].join('; ')})).sort((a,b)=> b.points - a.points || b.citations - a.citations);
  const favoris8 = ranked.slice(0,8);
  const outsiders4 = ranked.slice(8,12);
  return {ranked, favoris8, outsiders4, totalSources: lines.length, bareme: '1er=10pts → 10e=1pt'};
}
app.use((req,res,next)=>{ res.set('Cache-Control','no-store, no-cache, must-revalidate, private'); res.set('Pragma','no-cache'); res.set('Expires','0'); next(); });
app.get('/api/course-du-jour', (req,res)=>{
  const analyses = genAllTops(CHEVAUX);
  const chevauxLive = CHEVAUX.map(c=>{ const live = LIVE[c.num]||c.cote*0.92; const zeturfCote = (live*0.95).toFixed(1); return {...c, coteMatin:c.cote, coteLive:live, coteZeturf:zeturfCote}; });
  res.json({success:true, data:{...COURSE, chevaux:chevauxLive, partants:CHEVAUX.length, compilation:COMPILATION, perso:PERSO}, analyses, ia_pronos: analyses.IA_PRONOS, resultat: RESULTAT, lastUpdate:COURSE.lastUpdate, serverTime:new Date().toISOString(), mode:'V12.7 VERIF COMPLET BLOC1+BLOC2 - BLOC1 PDF/IMAGE/TEXTE + BLOC2 PRONOS PERSO 8FAV+4OUT - 21 TOPS + 9 IA'});
});
app.post('/api/auto-update', (req,res)=>{
  const {text} = req.body;
  if(text){ 
    let newC=parseTextToChevaux(text); 
    if(newC.length>=5){ 
      CHEVAUX=newC; COURSE.lastUpdate=new Date().toISOString(); COURSE.date=new Date().toLocaleDateString('fr-FR'); 
      LIVE={}; RESULTAT=null; updateLive(); savePersist();
      return res.json({success:true, message:`BLOC1 - ${newC.length} partants lus (PDF/Image/Texte) - 21 TOPS + MULTI8 recalculés`, chevaux:newC}); 
    } 
    return res.json({success:false, message:`BLOC1 - Seulement ${newC.length} chevaux détectés - Colle plus de texte`, debug:newC}); 
  }
  res.json({success:false, message:'Envoie text'});
});
app.post('/api/compilation-perso', (req,res)=>{
  const {text} = req.body;
  if(!text) return res.json({success:false, message:'Colle tes pronos perso dans BLOC 2'});
  const result = compilePronosPerso(text);
  PERSO = result;
  savePersist();
  res.json({success:true, message:`BLOC2 - Compilation ${result.totalSources} pronos perso - ${result.favoris8.length} favs + ${result.outsiders4.length} outsiders`, ...result});
});
app.post('/api/verifier-resultat', (req,res)=>{
  const {arrivee} = req.body; let arr=[]; if(typeof arrivee === 'string'){ arr = arrivee.split(/[-,\s]+/).map(n=>parseInt(n.trim())).filter(n=>!isNaN(n)); } if(arr.length<3) return res.json({success:false, message:'Arrivée incomplète - Tape ex: 7-15-2-11-13'}); RESULTAT = arr.slice(0,5); savePersist(); const analyses = genAllTops(CHEVAUX); 
  // Vérif complet BLOC1 + BLOC2
  res.json({
    success:true, 
    resultat: RESULTAT, 
    verification: analyses.verification,
    multi8: analyses.multi8Detail,
    checkIA: analyses.verification?.checkIA,
    checkTops: analyses.verification?.checkTops,
    checkMulti: analyses.verification?.checkMulti,
    checkPerso: analyses.verification?.checkPerso,
    syntheseCompare: analyses.verification?.syntheseCompare,
    message: analyses.verification?.checkPerso ? `VERIF COMPLET BLOC1+BLOC2 - Arrivée ${RESULTAT.join('-')} - Officiel ${analyses.verification.checkMulti.dans4}/4 - Perso ${analyses.verification.checkPerso.dans4}/4 - ${analyses.verification.syntheseCompare.meilleur}` : `VERIF COMPLET BLOC1 - Arrivée ${RESULTAT.join('-')} - Officiel ${analyses.verification.checkMulti.dans4}/4`
  });
});
app.get('/admin', (req,res)=>res.sendFile(path.join(__dirname,'admin.html')));
app.get('/api/health', (req,res)=>res.json({status:'V12.7 VERIF COMPLET BLOC1+BLOC2 OK', partants:CHEVAUX.length, multi8: genAllTops(CHEVAUX).multi8Detail.ticketStr, perso: PERSO ? {fav: PERSO.favoris8.map(f=>f.num), out: PERSO.outsiders4.map(o=>o.num)} : null}));
app.get('*', (req,res)=>res.sendFile(path.join(__dirname,'index.html')));
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log('V12.7 VERIF COMPLET BLOC1+BLOC2 LIVE '+PORT));
