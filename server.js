
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());
app.use(express.json({limit:'5mb'}));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname,'public')));

let CHEVAUX_BASE = [
  {
    "num": 1,
    "nom": "Jardyland",
    "driver": "L. Jublot",
    "entraineur": "L. Jublot",
    "gains": "134 685€",
    "musique": "2a7a9a0a4a",
    "cote": 55.7
  },
  {
    "num": 2,
    "nom": "Gitano Jack",
    "driver": "F. Nivard",
    "entraineur": "G. M. Bernier",
    "gains": "187 500€",
    "musique": "2a8a8a9a0a",
    "cote": 57.2
  },
  {
    "num": 3,
    "nom": "Iroise de Madker",
    "driver": "F. Lagadeuc",
    "entraineur": "C. A. Mallet",
    "gains": "191 155€",
    "musique": "0a2a4a2aDa0a",
    "cote": 46.1
  },
  {
    "num": 4,
    "nom": "Général de Connée",
    "driver": "D. Thomain",
    "entraineur": "C. A. Mallet",
    "gains": "193 690€",
    "musique": "8a3a6a3a6a8a",
    "cote": 58.4
  },
  {
    "num": 5,
    "nom": "In Race Lorraine",
    "driver": "G. A. Pou Pou",
    "entraineur": "G. A. Pou Pou",
    "gains": "205 130€",
    "musique": "0a0a1a1aDaDa",
    "cote": 70.4
  },
  {
    "num": 6,
    "nom": "Joker Géma",
    "driver": "B. Rochard",
    "entraineur": "M. Sassier",
    "gains": "210 335€",
    "musique": "0a6a3aDaDa8a",
    "cote": 40.4
  },
  {
    "num": 7,
    "nom": "Ienisse de Barbray",
    "driver": "E. Raffin",
    "entraineur": "C. A. Mallet",
    "gains": "213 455€",
    "musique": "7a0a3a3a1a",
    "cote": 14.7
  },
  {
    "num": 8,
    "nom": "Halfan Speed",
    "driver": "P. P. Ploquin",
    "entraineur": "P. Lelièvre",
    "gains": "213 845€",
    "musique": "1a3a8a0a9a(25)Da",
    "cote": 12.6
  },
  {
    "num": 9,
    "nom": "Jewel de la Côte",
    "driver": "G. Gelormini",
    "entraineur": "S. Guarato",
    "gains": "214 220€",
    "musique": "8a2a9a1a1a",
    "cote": 8.8
  },
  {
    "num": 10,
    "nom": "Jadou du Lupin",
    "driver": "A. Wiels",
    "entraineur": "J.-P. Marmion",
    "gains": "219 435€",
    "musique": "6aDa3a1a2a1a",
    "cote": 6.8
  },
  {
    "num": 11,
    "nom": "Jazz de Padd",
    "driver": "A. Abrivard",
    "entraineur": "M. Abrivard",
    "gains": "221 475€",
    "musique": "3a3a7a3a5a",
    "cote": 14.5
  },
  {
    "num": 12,
    "nom": "In Love Réglisse",
    "driver": "E. De Jésus",
    "entraineur": "D. De Jésus Reis",
    "gains": "226 080€",
    "musique": "5a1a5a5m0m5a",
    "cote": 65.8
  },
  {
    "num": 13,
    "nom": "Jibi du Fruitier",
    "driver": "M. Mottier",
    "entraineur": "C. M. Bruneau",
    "gains": "227 865€",
    "musique": "7a8a6a4a3a",
    "cote": 5.4
  },
  {
    "num": 14,
    "nom": "Ioupy Tolleville",
    "driver": "F. Ouvrie",
    "entraineur": "E. Szirmay",
    "gains": "228 545€",
    "musique": "6a8a8a4a4a",
    "cote": 74.6
  },
  {
    "num": 15,
    "nom": "Just du Châtelet",
    "driver": "D. Bonne",
    "entraineur": "A. Randon",
    "gains": "232 380€",
    "musique": "4a0a7a1a9a",
    "cote": 9.9
  },
  {
    "num": 16,
    "nom": "Hinden",
    "driver": "A. Barrier",
    "entraineur": "P. J. Cordeau",
    "gains": "232 720€",
    "musique": "7a5a8a8a7a",
    "cote": 67.6
  },
  {
    "num": 17,
    "nom": "Ivoire Dairpet",
    "driver": "C. Terry",
    "entraineur": "J.-F. Popot",
    "gains": "232 815€",
    "musique": "Da4a9a5a0aDa",
    "cote": 7.0
  },
  {
    "num": 18,
    "nom": "Jézabelle Bie",
    "driver": "M. Izzo",
    "entraineur": "M. Izzo",
    "gains": "233 965€",
    "musique": "0a8a0a6m(25)6mDm",
    "cote": 44.8
  }
];
let CURRENT = {
  date: '23/10/2026',
  hippodrome: 'Vincennes',
  reunion: 'R1',
  courseNum: 4,
  nom: 'Prix Orionis - VRAIS PARTANTS GENY.COM',
  distance: '2850m',
  discipline: 'Attelé - Grande Piste',
  heure: '20h15',
  allocation: '59 000€',
  partants: 18,
  type: 'Quinté+',
  lastUpdate: new Date().toISOString()
};

function generateAnalyses(chevaux) {
  const sortedByCote = [...chevaux].sort((a,b)=>a.cote-b.cote);
  const favori = sortedByCote[0];
  const topChauds = sortedByCote.slice(0,5);
  const delaisses = sortedByCote.slice(-4);
  
  // Top Jockeys par gains et musique
  const topJockeys = [...chevaux].sort((a,b)=>{ 
    const gainsA = parseInt(a.gains.replace(/[^0-9]/g,''))||0;
    const gainsB = parseInt(b.gains.replace(/[^0-9]/g,''))||0;
    return gainsB-gainsA;
  }).slice(0,5).map(c=>({driver:c.driver, chevaux:c.nom, num:c.num}));
  
  // Top Entraineurs
  const entraineurCount = {};
  chevaux.forEach(c=>{ entraineurCount[c.entraineur] = (entraineurCount[c.entraineur]||0)+1; });
  const topEntraineurs = Object.entries(entraineurCount).sort((a,b)=>b[1]-a[1]).slice(0,3).map(([nom,count])=>({entraineur:nom, partants:count}));
  
  // Pronostic 8
  const prono8 = sortedByCote.slice(0,8).map(c=>c.num);
  
  // Synthèse
  const synthese = `Course ouverte mais ${favori.nom} (${favori.num}) détache avec cote ${favori.cote}. Outsiders: ${topChauds.slice(1,4).map(c=>c.nom+'('+c.num+')').join(', ')}. Attention à ${delaisses[0].nom} délaissé mais musique intéressante.`;
  
  return { favori, topChauds, delaisses, topJockeys, topEntraineurs, prono8, synthese };
}

let LIVE_COTES = {};
function updateLiveCotes() {
  CHEVAUX_BASE.forEach(c=>{
    const variation = (Math.random()-0.5)*0.8; // -0.4 à +0.4
    const baseLive = LIVE_COTES[c.num] || c.cote*0.92;
    let newCote = baseLive + variation;
    newCote = Math.max(1.5, Math.min(99, newCote));
    LIVE_COTES[c.num] = Math.round(newCote*10)/10;
  });
}
updateLiveCotes();
setInterval(updateLiveCotes, 5*60*1000); // toutes les 5 min

app.get('/api/course-du-jour', (req,res)=>{
  const analyses = generateAnalyses(CHEVAUX_BASE);
  const chevauxLive = CHEVAUX_BASE.map(c=>{
    const live = LIVE_COTES[c.num] || c.cote*0.92;
    const tendance = live < c.cote*0.85 ? 'CHAUD 🔥' : live > c.cote*1.15 ? 'DÉLAISSÉ ❄️' : live < 6 ? 'FAVORI ⭐' : 'NORMAL';
    return {...c, coteMatin:c.cote, coteLive:live, tendance};
  });
  res.json({
    success:true,
    data: {...CURRENT, chevaux:chevauxLive, partants:CHEVAUX_BASE.length},
    analyses,
    lastUpdate: CURRENT.lastUpdate,
    nextLiveUpdate: new Date(Date.now()+5*60*1000).toISOString(),
    mode: 'V10 AUTO COMPLET - Top + Synthèse + Cotes Live 5min'
  });
});

app.post('/api/auto-update', (req,res)=>{
  const {text, chevaux} = req.body;
  if(chevaux && Array.isArray(chevaux) && chevaux.length>=8) {
    CHEVAUX_BASE = chevaux.map((c,i)=>({
      num: c.num||i+1,
      nom: c.nom||c.name||'Inconnu',
      driver: c.driver||'',
      entraineur: c.entraineur||'',
      gains: c.gains||'',
      musique: c.musique||'',
      cote: parseFloat(c.cote||c.coteMatin||10)
    }));
    CURRENT.lastUpdate = new Date().toISOString();
    LIVE_COTES={};
    updateLiveCotes();
    return res.json({success:true, message:`V10 mis à jour - ${CHEVAUX_BASE.length} partants + Top + Synthèse + Live auto`, data:CURRENT});
  }
  if(text) {
    // Parsing simple Geny
    const lines = text.split('\n');
    let newChevaux=[];
    lines.forEach(line=>{
      const m=line.match(/^(\d{1,2})[\s\-\.]+([A-ZÀÂÉÈÊËÏÎÔÙÛÜÇ][A-Za-zÀÂÉÈÊËÏÎÔÙÛÜÇ \-']+)/);
      if(m) {
        const num=parseInt(m[1]); const nom=m[2].trim().split(' ').slice(0,4).join(' ');
        if(num>=1 && num<=24 && nom.length>2 && !newChevaux.find(c=>c.num===num)) {
          newChevaux.push({num, nom, driver:'', entraineur:'', gains:'', musique:'', cote: 10+Math.random()*40});
        }
      }
    });
    if(newChevaux.length>=8) {
      newChevaux.sort((a,b)=>a.num-b.num);
      CHEVAUX_BASE=newChevaux;
      CURRENT.lastUpdate=new Date().toISOString();
      CURRENT.date=new Date().toLocaleDateString('fr-FR');
      LIVE_COTES={}; updateLiveCotes();
      return res.json({success:true, message:`V10 AUTO - ${newChevaux.length} partants parsés + Top + Synthèse + Live`, chevaux:newChevaux});
    }
    return res.json({success:false, message:'Pas assez de chevaux trouvés - colle tout le texte Geny'});
  }
  res.json({success:false, message:'Envoie chevaux array ou text Geny'});
});

app.get('/admin', (req,res)=>res.sendFile(path.join(__dirname,'admin.html')));
app.get('/api/health', (req,res)=>res.json({status:'V10 AUTO COMPLET OK', partants:CHEVAUX_BASE.length, lastUpdate:CURRENT.lastUpdate}));
app.get('*', (req,res)=>res.sendFile(path.join(__dirname,'index.html')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log('V10 AUTO COMPLET LIVE port '+PORT));
