
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  }
};
let RESULTAT = null; // ex: [13,10,9,17,15] arrivée

function genAllTops(chevaux){
  const sortedCote = [...chevaux].sort((a,b)=>a.cote-b.cote);
  const sortedClasse = [...chevaux].sort((a,b)=> b.classe - a.classe);
  const sortedChrono = [...chevaux].sort((a,b)=> a.chrono.localeCompare(b.chrono));
  const topCotesDirect = sortedCote.slice(0,6).map(c=>({num:c.num, nom:c.nom, cote:c.cote}));
  const topChevaux = sortedClasse.slice(0,6).map(c=>({num:c.num, nom:c.nom, classe:c.classe}));
  const topPalmares = [...chevaux].map(c=>{ const wins = (c.musique.match(/1a/g)||[]).length; return {...c, wins}; }).sort((a,b)=>b.wins-a.wins).slice(0,6);
  const topForme = [...chevaux].filter(c=>c.forme.includes('Excellente')||c.forme.includes('Très Bonne')).slice(0,6);
  const topClasse = sortedClasse.slice(0,6);
  const topDrivers = [{driver:'E. Raffin', course:32},{driver:'F. Nivard', course:28},{driver:'A. Abrivard', course:26}];
  const topEntraineurs = [{entraineur:'S. Guarato', course:31},{entraineur:'J.-P. Marmion', course:29}];
  const aptitude1er = sortedCote.slice(0,6);
  const aptitudePlace = sortedClasse.slice(0,6);
  const topChronos = sortedChrono.slice(0,6);
  const topPosition = [...chevaux].sort((a,b)=>a.corde-b.corde).slice(0,6);
  const ecarts = chevaux.map(c=>{ const live = LIVE[c.num]||c.cote*0.9; return {num:c.num, nom:c.nom, coteMatin:c.cote, coteLive:live, ecart:((live-c.cote)/c.cote*100).toFixed(1)+'%'}; }).slice(0,6);
  const incontournables = sortedCote.slice(0,2);
  const pourUnePlace = sortedCote.slice(2,7);
  const synthesePonderee = [...chevaux].map(c=>{ const score = (10-c.cote/10)*0.4 + c.classe*0.3 + 5; return {...c, score:score.toFixed(2)}; }).sort((a,b)=>b.score-a.score).slice(0,8);
  const syntheseGlobale = synthesePonderee.slice(0,5);
  const zoneABC = { A: sortedCote.slice(0,5).map(c=>c.num), B: sortedCote.slice(5,11).map(c=>c.num), C: sortedCote.slice(11).map(c=>c.num) };
  const presse = [{num:13, presse:'12/18'},{num:10, presse:'10/18'}];
  const algoPerso = synthesePonderee.slice(0,6);
  const counterFav = {}; const counterOut = {};
  Object.keys(IA_PRONOS).forEach(ia=>{ IA_PRONOS[ia].fav.forEach(n=>{ counterFav[n]=(counterFav[n]||0)+1; }); IA_PRONOS[ia].outsiders.forEach(n=>{ counterOut[n]=(counterOut[n]||0)+1; }); });
  const syntheseIA = { fav: Object.entries(counterFav).sort((a,b)=>b[1]-a[1]).slice(0,8).map(([num,c])=>({num:parseInt(num), citations:c})), outsiders: Object.entries(counterOut).sort((a,b)=>b[1]-a[1]).slice(0,4).map(([num,c])=>({num:parseInt(num), citations:c})), global: `Base IA: ${Object.entries(counterFav).sort((a,b)=>b[1]-a[1])[0][0]} - ${Object.entries(counterFav).sort((a,b)=>b[1]-a[1])[1][0]}` };
  const prono8 = sortedCote.slice(0,8).map(c=>c.num);
  const baseBeton = sortedCote[0];

  // Vérificateur résultats
  let verification = null;
  if(RESULTAT && RESULTAT.length>=5){
    const arrivee = RESULTAT;
    const checkIA = {};
    Object.keys(IA_PRONOS).forEach(ia=>{
      const fav = IA_PRONOS[ia].fav; const out = IA_PRONOS[ia].outsiders;
      const tierceOk = arrivee.slice(0,3).every(n=>fav.includes(n));
      const quarteOk = arrivee.slice(0,4).every(n=>fav.includes(n));
      const quinteOk = arrivee.slice(0,5).every(n=>[...fav,...out].includes(n));
      const nbDans8 = arrivee.slice(0,5).filter(n=>fav.includes(n)).length;
      checkIA[ia] = {tierce: tierceOk?'✅ GAGNÉ':'❌ PERDU', quarte: quarteOk?'✅ GAGNÉ':'❌ PERDU', quinte: quinteOk?'✅ GAGNÉ':'❌ PERDU', dans8: nbDans8+'/5', details: `Arrivée ${arrivee.join('-')} - ${nbDans8} dans les 8 fav`};
    });
    const checkTops = {
      topCotesDirect: arrivee.slice(0,3).filter(n=> topCotesDirect.map(c=>c.num).includes(n)).length + '/3 dans Top Cotes',
      topChevaux: arrivee.slice(0,3).filter(n=> topChevaux.map(c=>c.num).includes(n)).length + '/3 dans Top Chevaux',
      baseBeton: arrivee[0]===baseBeton.num ? `✅ Base Béton ${baseBeton.num} GAGNANT` : `❌ Base ${baseBeton.num} vs Gagnant ${arrivee[0]}`,
      zoneA: arrivee.slice(0,5).filter(n=> zoneABC.A.includes(n)).length + '/5 en Zone A (Favoris)',
    };
    verification = {arrivee, checkIA, checkTops, date: new Date().toISOString()};
  }

  return { topCotesDirect, topChevaux, topPalmares, topForme, topClasse, topDrivers, topEntraineurs, aptitude1er, aptitudePlace, topChronos, topPosition, ecarts, incontournables, pourUnePlace, synthesePonderee, syntheseGlobale, zoneABC, presse, algoPerso, prono8, baseBeton, syntheseIA, verification, synthese:`Favori ${sortedCote[0].nom}` };
}

function updateLive(){ CHEVAUX.forEach(c=>{ const base = LIVE[c.num]||c.cote*0.9; const v=(Math.random()-0.5)*1.2; LIVE[c.num]=Math.max(1.3, Math.round((base+v)*10)/10); }); }
updateLive(); setInterval(updateLive, 5*60*1000);

app.get('/api/course-du-jour', (req,res)=>{
  const analyses = genAllTops(CHEVAUX);
  const chevauxLive = CHEVAUX.map(c=>{ const live = LIVE[c.num]||c.cote*0.9; return {...c, coteMatin:c.cote, coteLive:live}; });
  res.json({success:true, data:{...COURSE, chevaux:chevauxLive, partants:CHEVAUX.length}, analyses, ia_pronos: IA_PRONOS, resultat: RESULTAT, lastUpdate:COURSE.lastUpdate, nextLive:new Date(Date.now()+5*60*1000).toISOString(), mode:'V11.1 + VERIFICATEUR + 8 IA + 21 TOPS'});
});

app.post('/api/auto-update', (req,res)=>{
  const {text, chevaux} = req.body;
  if(chevaux && chevaux.length>=8){ CHEVAUX=chevaux; COURSE.lastUpdate=new Date().toISOString(); LIVE={}; RESULTAT=null; updateLive(); return res.json({success:true, message:`V11.1 - ${CHEVAUX.length} partants + 21 tops + 8 IA + Vérificateur reset`}); }
  if(text){ let newC=[]; text.split('\n').forEach(line=>{ const m=line.match(/^(\d{1,2})[\s\-\.]+([A-ZÀÂÉÈÊËÏÎÔÙÛÜÇ][A-Za-zÀÂÉÈÊËÏÎÔÙÛÜÇ \-']+)/); if(m){ const num=parseInt(m[1]); const nom=m[2].trim().split(' ').slice(0,4).join(' '); if(num>=1 && num<=24 && nom.length>2 && !newC.find(c=>c.num===num)) newC.push({num, nom, driver:'', entraineur:'', gains:'', musique:'', cote:10+Math.random()*40, forme:'Bonne', classe:7, chrono:"1'13\"0", corde:num}); } }); if(newC.length>=8){ newC.sort((a,b)=>a.num-b.num); CHEVAUX=newC; COURSE.lastUpdate=new Date().toISOString(); COURSE.date=new Date().toLocaleDateString('fr-FR'); LIVE={}; RESULTAT=null; updateLive(); return res.json({success:true, message:`V11.1 - ${newC.length} partants - Vérificateur reset`}); } return res.json({success:false, message:'Colle texte Geny'}); }
  res.json({success:false, message:'Envoie text'});
});

app.post('/api/verifier-resultat', (req,res)=>{
  const {arrivee} = req.body; // ex: "13-10-17-9-15" ou [13,10,17,9,15]
  let arr = [];
  if(typeof arrivee === 'string'){ arr = arrivee.split(/[-,\s]+/).map(n=>parseInt(n.trim())).filter(n=>!isNaN(n)); }
  else if(Array.isArray(arrivee)){ arr = arrivee; }
  if(arr.length<3) return res.json({success:false, message:'Donne au moins 3 numéros ex: 13-10-9'});
  RESULTAT = arr.slice(0,5);
  res.json({success:true, message:`Résultat enregistré: ${RESULTAT.join('-')} - Vérificateur activé`, resultat: RESULTAT});
});

app.get('/admin', (req,res)=>res.sendFile(path.join(__dirname,'admin.html')));
app.get('/api/health', (req,res)=>res.json({status:'V11.1 VERIF OK', partants:CHEVAUX.length, resultat:RESULTAT}));
app.get('*', (req,res)=>res.sendFile(path.join(__dirname,'index.html')));
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log('V11.1 VERIFICATEUR LIVE '+PORT));
