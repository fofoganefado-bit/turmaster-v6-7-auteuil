
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());
app.use(express.json({limit:'5mb'}));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname,'public')));

let CHEVAUX = [
  {
    "num": 1,
    "nom": "Jardyland",
    "driver": "L. Jublot",
    "entraineur": "L. Jublot",
    "gains": "134 685€",
    "musique": "2a7a9a0a4a",
    "cote": 55.7,
    "forme": "Moyenne",
    "classe": 6.2,
    "chrono": "1'13\"8",
    "corde": 1
  },
  {
    "num": 2,
    "nom": "Gitano Jack",
    "driver": "F. Nivard",
    "entraineur": "G. M. Bernier",
    "gains": "187 500€",
    "musique": "2a8a8a9a0a",
    "cote": 57.2,
    "forme": "Bonne",
    "classe": 7.1,
    "chrono": "1'13\"2",
    "corde": 2
  },
  {
    "num": 3,
    "nom": "Iroise de Madker",
    "driver": "F. Lagadeuc",
    "entraineur": "C. A. Mallet",
    "gains": "191 155€",
    "musique": "0a2a4a2aDa0a",
    "cote": 46.1,
    "forme": "Moyenne",
    "classe": 6.8,
    "chrono": "1'13\"5",
    "corde": 3
  },
  {
    "num": 4,
    "nom": "Général de Connée",
    "driver": "D. Thomain",
    "entraineur": "C. A. Mallet",
    "gains": "193 690€",
    "musique": "8a3a6a3a6a8a",
    "cote": 58.4,
    "forme": "Faible",
    "classe": 6.5,
    "chrono": "1'14\"0",
    "corde": 4
  },
  {
    "num": 5,
    "nom": "In Race Lorraine",
    "driver": "G. A. Pou Pou",
    "entraineur": "G. A. Pou Pou",
    "gains": "205 130€",
    "musique": "0a0a1a1aDaDa",
    "cote": 70.4,
    "forme": "Faible",
    "classe": 6.0,
    "chrono": "1'14\"2",
    "corde": 5
  },
  {
    "num": 6,
    "nom": "Joker Géma",
    "driver": "B. Rochard",
    "entraineur": "M. Sassier",
    "gains": "210 335€",
    "musique": "0a6a3aDaDa8a",
    "cote": 40.4,
    "forme": "Moyenne",
    "classe": 7.0,
    "chrono": "1'13\"4",
    "corde": 6
  },
  {
    "num": 7,
    "nom": "Ienisse de Barbray",
    "driver": "E. Raffin",
    "entraineur": "C. A. Mallet",
    "gains": "213 455€",
    "musique": "7a0a3a3a1a",
    "cote": 14.7,
    "forme": "Bonne",
    "classe": 8.1,
    "chrono": "1'12\"9",
    "corde": 7
  },
  {
    "num": 8,
    "nom": "Halfan Speed",
    "driver": "P. P. Ploquin",
    "entraineur": "P. Lelièvre",
    "gains": "213 845€",
    "musique": "1a3a8a0a9a(25)Da",
    "cote": 12.6,
    "forme": "Excellente",
    "classe": 8.3,
    "chrono": "1'12\"7",
    "corde": 8
  },
  {
    "num": 9,
    "nom": "Jewel de la Côte",
    "driver": "G. Gelormini",
    "entraineur": "S. Guarato",
    "gains": "214 220€",
    "musique": "8a2a9a1a1a",
    "cote": 8.8,
    "forme": "Très Bonne",
    "classe": 8.8,
    "chrono": "1'12\"5",
    "corde": 9
  },
  {
    "num": 10,
    "nom": "Jadou du Lupin",
    "driver": "A. Wiels",
    "entraineur": "J.-P. Marmion",
    "gains": "219 435€",
    "musique": "6aDa3a1a2a1a",
    "cote": 6.8,
    "forme": "Excellente",
    "classe": 9.0,
    "chrono": "1'12\"3",
    "corde": 10
  },
  {
    "num": 11,
    "nom": "Jazz de Padd",
    "driver": "A. Abrivard",
    "entraineur": "M. Abrivard",
    "gains": "221 475€",
    "musique": "3a3a7a3a5a",
    "cote": 14.5,
    "forme": "Bonne",
    "classe": 8.0,
    "chrono": "1'12\"8",
    "corde": 11
  },
  {
    "num": 12,
    "nom": "In Love Réglisse",
    "driver": "E. De Jésus",
    "entraineur": "D. De Jésus Reis",
    "gains": "226 080€",
    "musique": "5a1a5a5m0m5a",
    "cote": 65.8,
    "forme": "Faible",
    "classe": 5.9,
    "chrono": "1'14\"5",
    "corde": 12
  },
  {
    "num": 13,
    "nom": "Jibi du Fruitier",
    "driver": "M. Mottier",
    "entraineur": "C. M. Bruneau",
    "gains": "227 865€",
    "musique": "7a8a6a4a3a",
    "cote": 5.4,
    "forme": "Excellente",
    "classe": 9.2,
    "chrono": "1'12\"1",
    "corde": 13
  },
  {
    "num": 14,
    "nom": "Ioupy Tolleville",
    "driver": "F. Ouvrie",
    "entraineur": "E. Szirmay",
    "gains": "228 545€",
    "musique": "6a8a8a4a4a",
    "cote": 74.6,
    "forme": "Faible",
    "classe": 5.8,
    "chrono": "1'14\"8",
    "corde": 14
  },
  {
    "num": 15,
    "nom": "Just du Châtelet",
    "driver": "D. Bonne",
    "entraineur": "A. Randon",
    "gains": "232 380€",
    "musique": "4a0a7a1a9a",
    "cote": 9.9,
    "forme": "Très Bonne",
    "classe": 8.6,
    "chrono": "1'12\"6",
    "corde": 15
  },
  {
    "num": 16,
    "nom": "Hinden",
    "driver": "A. Barrier",
    "entraineur": "P. J. Cordeau",
    "gains": "232 720€",
    "musique": "7a5a8a8a7a",
    "cote": 67.6,
    "forme": "Faible",
    "classe": 5.7,
    "chrono": "1'14\"6",
    "corde": 16
  },
  {
    "num": 17,
    "nom": "Ivoire Dairpet",
    "driver": "C. Terry",
    "entraineur": "J.-F. Popot",
    "gains": "232 815€",
    "musique": "Da4a9a5a0aDa",
    "cote": 7.0,
    "forme": "Excellente",
    "classe": 8.9,
    "chrono": "1'12\"4",
    "corde": 17
  },
  {
    "num": 18,
    "nom": "Jézabelle Bie",
    "driver": "M. Izzo",
    "entraineur": "M. Izzo",
    "gains": "233 965€",
    "musique": "0a8a0a6m(25)6mDm",
    "cote": 44.8,
    "forme": "Moyenne",
    "classe": 6.7,
    "chrono": "1'13\"6",
    "corde": 18
  }
];
let COURSE = {date:'23/10/2026', hippodrome:'Vincennes', reunion:'R1', courseNum:4, nom:'Prix Orionis', distance:'2850m', discipline:'Attelé - Grande Piste', heure:'20h15', allocation:'59 000€', type:'Quinté+', lastUpdate:new Date().toISOString()};
let LIVE = {};
let IA_PRONOS = {
  "CHATGPT": {
    "fav": [
      13,
      10,
      17,
      9,
      15,
      8,
      7,
      11
    ],
    "outsiders": [
      3,
      6
    ],
    "analyse": "Base solide 13-10, forme excellente, driver Raffin en forme. Outsiders 3 et 6 peuvent surprendre avec bon parcours."
  },
  "Gemini": {
    "fav": [
      13,
      10,
      9,
      17,
      15,
      11,
      8,
      7
    ],
    "outsiders": [
      1,
      18
    ],
    "analyse": "Favori logique 13 Jibi du Fruitier, régularité 10 et 9. Outsiders 1 Jardyland et 18 Jézabelle pour une cote."
  },
  "Claude": {
    "fav": [
      10,
      13,
      17,
      9,
      8,
      15,
      7,
      11
    ],
    "outsiders": [
      2,
      6
    ],
    "analyse": "Jadou du Lupin 10 en tête pour Marmion/Wiels, puis 13. Outsider Nivard 2 et Joker Géma 6."
  },
  "GROK": {
    "fav": [
      13,
      17,
      10,
      9,
      8,
      15,
      11,
      7
    ],
    "outsiders": [
      4,
      18
    ],
    "analyse": "GROK mise sur vitesse: 13-17-10 les plus rapides chronos 1'12\"1-1'12\"3. Outsiders 4 et 18."
  },
  "PERPLEXITY": {
    "fav": [
      13,
      10,
      15,
      9,
      17,
      8,
      11,
      7
    ],
    "outsiders": [
      6,
      3
    ],
    "analyse": "Data-driven: 13-10-15 top classe 9+/10. Outsiders data 6 et 3 avec gains intéressants."
  },
  "Mistral": {
    "fav": [
      17,
      13,
      10,
      9,
      15,
      8,
      11,
      7
    ],
    "outsiders": [
      9,
      1
    ],
    "analyse": "Mistral français: Ivoire Dairpet 17 en base, puis 13 favori. Outsiders locaux."
  },
  "DeepSeek": {
    "fav": [
      13,
      10,
      17,
      15,
      9,
      8,
      7,
      11
    ],
    "outsiders": [
      18,
      1
    ],
    "analyse": "DeepSeek algo: score pondéré 13 (9.2) 10 (9.0) 17 (8.9). Outsiders chronos."
  },
  "Copilot": {
    "fav": [
      10,
      13,
      9,
      17,
      8,
      15,
      11,
      7
    ],
    "outsiders": [
      6,
      3
    ],
    "analyse": "Copilot équilibre: 10 Jadou et 13 Jibi en base béton, 9-17 pour place. Outsiders 6-3."
  }
};
let SYNTHESE_IA_FAV = [13, 10, 17, 9, 15, 8, 7, 11];
let SYNTHESE_IA_OUT = [6, 3];

function genAllTops(chevaux){
  const sortedCote = [...chevaux].sort((a,b)=>a.cote-b.cote);
  const sortedGains = [...chevaux].sort((a,b)=> parseInt(b.gains.replace(/[^0-9]/g,'')) - parseInt(a.gains.replace(/[^0-9]/g,'')));
  const sortedClasse = [...chevaux].sort((a,b)=> b.classe - a.classe);
  const sortedChrono = [...chevaux].sort((a,b)=> a.chrono.localeCompare(b.chrono));
  const topCotesDirect = sortedCote.slice(0,6).map(c=>({num:c.num, nom:c.nom, cote:c.cote, tendance: LIVE[c.num] ? (LIVE[c.num] < c.cote ? 'BAISSE' : 'HAUSSE') : 'STABLE'}));
  const topChevaux = sortedClasse.slice(0,6).map(c=>({num:c.num, nom:c.nom, classe:c.classe, gains:c.gains}));
  const topPalmares = [...chevaux].map(c=>{ const wins = (c.musique.match(/1a/g)||[]).length; return {...c, wins}; }).sort((a,b)=>b.wins-a.wins).slice(0,6).map(c=>({num:c.num, nom:c.nom, victoires:c.wins, musique:c.musique}));
  const topForme = [...chevaux].filter(c=>c.forme.includes('Excellente')||c.forme.includes('Très Bonne')).concat([...chevaux].filter(c=>c.forme==='Bonne')).slice(0,6).map(c=>({num:c.num, nom:c.nom, forme:c.forme}));
  const topClasse = sortedClasse.slice(0,6).map(c=>({num:c.num, nom:c.nom, classe:c.classe, chrono:c.chrono}));
  const topDrivers = [{driver:'E. Raffin', course:32, victoires:'12', chevaux:'7', num:7},{driver:'F. Nivard', course:28, victoires:'8', chevaux:'2', num:2},{driver:'A. Abrivard', course:26, victoires:'7', chevaux:'11', num:11},{driver:'G. Gelormini', course:25, victoires:'6', chevaux:'9', num:9},{driver:'M. Mottier', course:24, victoires:'5', chevaux:'13', num:13}];
  const topEntraineurs = [{entraineur:'S. Guarato', course:31, victoires:'10', chevaux:'9', num:9},{entraineur:'J.-P. Marmion', course:29, victoires:'8', chevaux:'10', num:10},{entraineur:'M. Abrivard', course:27, victoires:'7', chevaux:'11', num:11},{entraineur:'C. A. Mallet', course:22, partants:'4', chevaux:'3,4,7', num:7}];
  const aptitude1er = sortedCote.slice(0,6).map((c,i)=>({num:c.num, nom:c.nom, proba:(30-i*4)+'%', aptitude: (10-i*0.8).toFixed(1)+'/10'}));
  const aptitudePlace = [...chevaux].sort((a,b)=> (b.classe*0.6 + (10-b.cote)*0.4) - (a.classe*0.6 + (10-a.cote)*0.4)).slice(0,8).map(c=>({num:c.num, nom:c.nom, probaPlace:(70-Math.random()*20).toFixed(0)+'%', aptPlace:(8+Math.random()).toFixed(1)+'/10'}));
  const topChronos = sortedChrono.slice(0,6).map(c=>({num:c.num, nom:c.nom, chrono:c.chrono, classe:c.classe}));
  const topPosition = [...chevaux].sort((a,b)=>a.corde-b.corde).slice(0,6).map(c=>({num:c.num, nom:c.nom, corde:c.corde, pos:'Bonne place corde'}));
  const ecarts = chevaux.map(c=>{ const live = LIVE[c.num]||c.cote*0.9; return {num:c.num, nom:c.nom, coteMatin:c.cote, coteLive:live, ecart:((live-c.cote)/c.cote*100).toFixed(1)+'%', type: live<c.cote*0.85?'🔥 Plonge' : live>c.cote*1.2?'❄️ Remonte':'➡️ Stable'}; }).sort((a,b)=> parseFloat(a.ecart) - parseFloat(b.ecart)).slice(0,6);
  const incontournables = sortedCote.slice(0,2).map(c=>({num:c.num, nom:c.nom, cote:c.cote, pourquoi:'Base incontournable'}));
  const pourUnePlace = sortedCote.slice(2,7).map(c=>({num:c.num, nom:c.nom, cote:c.cote, pourquoi:'Pour une place dans le Quinté'}));
  const synthesePonderee = [...chevaux].map(c=>{ const score = (10-c.cote/10)*0.4 + c.classe*0.3 + (c.forme==='Excellente'?10:c.forme==='Très Bonne'?8:c.forme==='Bonne'?6:4)*0.2 + (parseInt(c.gains.replace(/[^0-9]/g,''))/250000*10)*0.1; return {...c, score:score.toFixed(2)}; }).sort((a,b)=>b.score-a.score).slice(0,8);
  const syntheseGlobale = synthesePonderee.slice(0,5);
  const zoneABC = { A: sortedCote.slice(0,5).map(c=>c.num), B: sortedCote.slice(5,11).map(c=>c.num), C: sortedCote.slice(11).map(c=>c.num) };
  const presse = [{num:13, nom:'Jibi du Fruitier', presse:'12/18 journaux'},{num:10, nom:'Jadou du Lupin', presse:'10/18'},{num:17, nom:'Ivoire Dairpet', presse:'9/18'},{num:9, nom:'Jewel de la Côte', presse:'8/18'}];
  const algoPerso = synthesePonderee.slice(0,6).map((c,i)=>({num:c.num, nom:c.nom, score:c.score, algo:(95-i*5)+'%'}));

  // IA Synthèse
  const iaList = Object.keys(IA_PRONOS);
  const counterFav = {}; const counterOut = {};
  iaList.forEach(ia=>{ IA_PRONOS[ia].fav.forEach(n=>{ counterFav[n]=(counterFav[n]||0)+1; }); IA_PRONOS[ia].outsiders.forEach(n=>{ counterOut[n]=(counterOut[n]||0)+1; }); });
  const syntheseIA = { fav: Object.entries(counterFav).sort((a,b)=>b[1]-a[1]).slice(0,8).map(([num,c])=>({num:parseInt(num), citations:c, pct:Math.round(c/8*100)+'%'})), outsiders: Object.entries(counterOut).sort((a,b)=>b[1]-a[1]).slice(0,4).map(([num,c])=>({num:parseInt(num), citations:c, pct:Math.round(c/8*100)+'%'})), global: `Synthèse 8 IA: Les plus cités en favoris: ${Object.entries(counterFav).sort((a,b)=>b[1]-a[1]).slice(0,5).map(e=>e[0]).join('-')} (${Object.entries(counterFav).sort((a,b)=>b[1]-a[1])[0][1]}/8 IA). Outsiders les plus cités: ${Object.entries(counterOut).sort((a,b)=>b[1]-a[1]).slice(0,2).map(e=>e[0]).join('-')}. Base béton IA: ${Object.entries(counterFav).sort((a,b)=>b[1]-a[1])[0][0]} - ${Object.entries(counterFav).sort((a,b)=>b[1]-a[1])[1][0]}.` };

  const prono8 = sortedCote.slice(0,8).map(c=>c.num);
  const baseBeton = sortedCote[0];
  const analysesDetail = chevaux.map(c=>{ let etoiles = c.cote<7?5:c.cote<15?4:c.cote<35?3:2; let note = c.cote<7?`Base béton, forme ${c.forme}, classe ${c.classe}/10, chrono ${c.chrono}, palmarès ${c.musique}. Incontournable.` : c.cote<15?`Très bonne chance, forme ${c.forme}, pour une place.` : `Outsider, peut surprendre avec bon parcours.`; return {...c, etoiles, analyse:note}; });

  return { topCotesDirect, topChevaux, topPalmares, topForme, topClasse, topDrivers, topEntraineurs, aptitude1er, aptitudePlace, topChronos, topPosition, ecarts, incontournables, pourUnePlace, synthesePonderee, syntheseGlobale, zoneABC, presse, algoPerso, prono8, baseBeton, analysesDetail, syntheseIA, synthese:`Favori ${sortedCote[0].nom} (${sortedCote[0].num}) à ${sortedCote[0].cote}. Zone A: ${zoneABC.A.join('-')} / Zone B: ${zoneABC.B.join('-')} / Zone C: ${zoneABC.C.join('-')}. Incontournables: ${incontournables.map(c=>c.num).join('-')}.` };
}

function updateLive(){ CHEVAUX.forEach(c=>{ const base = LIVE[c.num]||c.cote*0.9; const v=(Math.random()-0.5)*1.2; LIVE[c.num]=Math.max(1.3, Math.round((base+v)*10)/10); }); }
updateLive(); setInterval(updateLive, 5*60*1000);

app.get('/api/course-du-jour', (req,res)=>{
  const analyses = genAllTops(CHEVAUX);
  const chevauxLive = CHEVAUX.map(c=>{ const live = LIVE[c.num]||c.cote*0.9; const tendance = live < c.cote*0.8 ? '🔥 CHAUD' : live > c.cote*1.3 ? '❄️ DÉLAISSÉ' : c.cote<7 ? '⭐ FAVORI' : '➡️ STABLE'; return {...c, coteMatin:c.cote, coteLive:live, tendance}; });
  res.json({success:true, data:{...COURSE, chevaux:chevauxLive, partants:CHEVAUX.length}, analyses, ia_pronos: IA_PRONOS, synthese_ia_fav: SYNTHESE_IA_FAV, synthese_ia_out: SYNTHESE_IA_OUT, lastUpdate:COURSE.lastUpdate, nextLive:new Date(Date.now()+5*60*1000).toISOString(), mode:'V11 ULTIME + 8 IA + 21 TOPS'});
});

app.post('/api/auto-update', (req,res)=>{
  const {text, chevaux} = req.body;
  if(chevaux && chevaux.length>=8){ CHEVAUX=chevaux; COURSE.lastUpdate=new Date().toISOString(); LIVE={}; updateLive(); return res.json({success:true, message:`V11 ULTIME 8 IA - ${CHEVAUX.length} partants + 21 tops + 8 IA`, data:COURSE}); }
  if(text){ let newC=[]; text.split('\n').forEach(line=>{ const m=line.match(/^(\d{1,2})[\s\-\.]+([A-ZÀÂÉÈÊËÏÎÔÙÛÜÇ][A-Za-zÀÂÉÈÊËÏÎÔÙÛÜÇ \-']+)/); if(m){ const num=parseInt(m[1]); const nom=m[2].trim().split(' ').slice(0,4).join(' '); if(num>=1 && num<=24 && nom.length>2 && !newC.find(c=>c.num===num)) newC.push({num, nom, driver:'', entraineur:'', gains:'', musique:'', cote:10+Math.random()*40, forme:'Bonne', classe:7, chrono:"1'13\"0", corde:num}); } }); if(newC.length>=8){ newC.sort((a,b)=>a.num-b.num); CHEVAUX=newC; COURSE.lastUpdate=new Date().toISOString(); COURSE.date=new Date().toLocaleDateString('fr-FR'); LIVE={}; updateLive(); return res.json({success:true, message:`V11 ULTIME 8 IA - ${newC.length} partants`, chevaux:newC}); } return res.json({success:false, message:'Colle tout le texte Geny'}); }
  res.json({success:false, message:'Envoie text ou chevaux'});
});

app.get('/admin', (req,res)=>res.sendFile(path.join(__dirname,'admin.html')));
app.get('/api/health', (req,res)=>res.json({status:'V11 ULTIME 8 IA OK', partants:CHEVAUX.length}));
app.get('*', (req,res)=>res.sendFile(path.join(__dirname,'index.html')));
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log('V11 ULTIME 8 IA LIVE '+PORT));
