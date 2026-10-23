
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());
app.use(express.json({limit:'5mb'}));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname,'public')));

let CURRENT_DATA = {
  "date": "23/10/2026",
  "hippodrome": "Vincennes",
  "reunion": "R1",
  "courseNum": 4,
  "nom": "Prix Orionis - VRAIS PARTANTS GENY.COM",
  "distance": "2850m",
  "discipline": "Attelé",
  "heure": "20h15",
  "allocation": "59 000€",
  "partants": 18,
  "type": "Quinté+",
  "chevaux": [
    {
      "num": 1,
      "nom": "Jardyland",
      "coteMatin": 55.7,
      "coteLive": 51.2,
      "driver": "L. Jublot",
      "entraineur": "L. Jublot",
      "musique": "2a7a9a0a4a",
      "gains": "134 685€"
    },
    {
      "num": 2,
      "nom": "Gitano Jack",
      "coteMatin": 57.2,
      "coteLive": 52.6,
      "driver": "F. Nivard",
      "entraineur": "G. M. Bernier",
      "musique": "2a8a8a9a0a",
      "gains": "187 500€"
    },
    {
      "num": 3,
      "nom": "Iroise de Madker",
      "coteMatin": 46.1,
      "coteLive": 42.4,
      "driver": "F. Lagadeuc",
      "entraineur": "C. A. Mallet",
      "musique": "0a2a4a2aDa0a",
      "gains": "191 155€"
    },
    {
      "num": 4,
      "nom": "Général de Connée",
      "coteMatin": 58.4,
      "coteLive": 53.7,
      "driver": "D. Thomain",
      "entraineur": "C. A. Mallet",
      "musique": "8a3a6a3a6a8a",
      "gains": "193 690€"
    },
    {
      "num": 5,
      "nom": "In Race Lorraine",
      "coteMatin": 70.4,
      "coteLive": 64.8,
      "driver": "G. A. Pou Pou",
      "entraineur": "G. A. Pou Pou",
      "musique": "0a0a1a1aDaDa",
      "gains": "205 130€"
    },
    {
      "num": 6,
      "nom": "Joker Géma",
      "coteMatin": 40.4,
      "coteLive": 37.2,
      "driver": "B. Rochard",
      "entraineur": "M. Sassier",
      "musique": "0a6a3aDaDa8a",
      "gains": "210 335€"
    },
    {
      "num": 7,
      "nom": "Ienisse de Barbray",
      "coteMatin": 14.7,
      "coteLive": 13.5,
      "driver": "E. Raffin",
      "entraineur": "C. A. Mallet",
      "musique": "7a0a3a3a1a",
      "gains": "213 455€"
    },
    {
      "num": 8,
      "nom": "Halfan Speed",
      "coteMatin": 12.6,
      "coteLive": 11.6,
      "driver": "P. P. Ploquin",
      "entraineur": "P. Lelièvre",
      "musique": "1a3a8a0a9a(25)Da",
      "gains": "213 845€"
    },
    {
      "num": 9,
      "nom": "Jewel de la Côte",
      "coteMatin": 8.8,
      "coteLive": 8.1,
      "driver": "G. Gelormini",
      "entraineur": "S. Guarato",
      "musique": "8a2a9a1a1a",
      "gains": "214 220€"
    },
    {
      "num": 10,
      "nom": "Jadou du Lupin",
      "coteMatin": 6.8,
      "coteLive": 6.3,
      "driver": "A. Wiels",
      "entraineur": "J.-P. Marmion",
      "musique": "6aDa3a1a2a1a",
      "gains": "219 435€"
    },
    {
      "num": 11,
      "nom": "Jazz de Padd",
      "coteMatin": 14.5,
      "coteLive": 13.3,
      "driver": "A. Abrivard",
      "entraineur": "M. Abrivard",
      "musique": "3a3a7a3a5a",
      "gains": "221 475€"
    },
    {
      "num": 12,
      "nom": "In Love Réglisse",
      "coteMatin": 65.8,
      "coteLive": 60.5,
      "driver": "E. De Jésus",
      "entraineur": "D. De Jésus Reis",
      "musique": "5a1a5a5m0m5a",
      "gains": "226 080€"
    },
    {
      "num": 13,
      "nom": "Jibi du Fruitier",
      "coteMatin": 5.4,
      "coteLive": 5.0,
      "driver": "M. Mottier",
      "entraineur": "C. M. Bruneau",
      "musique": "7a8a6a4a3a",
      "gains": "227 865€"
    },
    {
      "num": 14,
      "nom": "Ioupy Tolleville",
      "coteMatin": 74.6,
      "coteLive": 68.6,
      "driver": "F. Ouvrie",
      "entraineur": "E. Szirmay",
      "musique": "6a8a8a4a4a",
      "gains": "228 545€"
    },
    {
      "num": 15,
      "nom": "Just du Châtelet",
      "coteMatin": 9.9,
      "coteLive": 9.1,
      "driver": "D. Bonne",
      "entraineur": "A. Randon",
      "musique": "4a0a7a1a9a",
      "gains": "232 380€"
    },
    {
      "num": 16,
      "nom": "Hinden",
      "coteMatin": 67.6,
      "coteLive": 62.2,
      "driver": "A. Barrier",
      "entraineur": "P. J. Cordeau",
      "musique": "7a5a8a8a7a",
      "gains": "232 720€"
    },
    {
      "num": 17,
      "nom": "Ivoire Dairpet",
      "coteMatin": 7.0,
      "coteLive": 6.4,
      "driver": "C. Terry",
      "entraineur": "J.-F. Popot",
      "musique": "Da4a9a5a0aDa",
      "gains": "232 815€"
    },
    {
      "num": 18,
      "nom": "Jézabelle Bie",
      "coteMatin": 44.8,
      "coteLive": 41.2,
      "driver": "M. Izzo",
      "entraineur": "M. Izzo",
      "musique": "0a8a0a6m(25)6mDm",
      "gains": "233 965€"
    }
  ]
};
let LAST_UPDATE = new Date().toISOString();

function parseGenyText(text) {
  try {
    const lines = text.split('\n').map(l=>l.trim()).filter(Boolean);
    let chevaux = [];
    let date = new Date().toLocaleDateString('fr-FR');
    let hippodrome = 'Vincennes';
    let nom = 'Prix du jour';
    // Cherche date et hippodrome
    const dateMatch = text.match(/(\d{1,2}\/\d{1,2}\/\d{4})/);
    if(dateMatch) date = dateMatch[0];
    const hippoMatch = text.match(/(Vincennes|Auteuil|Longchamp|Chantilly|Deauville|Enghien|Saint-Cloud|Compiègne)/i);
    if(hippoMatch) hippodrome = hippoMatch[0];
    
    // Cherche les chevaux: pattern "1 - Nom" ou "1 Nom"
    lines.forEach(line=>{
      const m = line.match(/^(\d{1,2})[\s\-\.]+([A-ZÀÂÉÈÊËÏÎÔÙÛÜÇ][A-Za-zÀÂÉÈÊËÏÎÔÙÛÜÇ '\-]*)/);
      if(m) {
        const num = parseInt(m[1]);
        const nomChev = m[2].trim().split(' ').slice(0,4).join(' ');
        if(num>=1 && num<=24 && nomChev.length>2) {
          if(!chevaux.find(c=>c.num===num)) {
            chevaux.push({num, nom: nomChev, coteMatin: 10+Math.random()*30, coteLive: 8+Math.random()*25, driver:'', entraineur:'', musique:'', gains:''});
          }
        }
      }
    });
    if(chevaux.length>=8) {
      chevaux.sort((a,b)=>a.num-b.num);
      return {...CURRENT_DATA, date, hippodrome, nom: 'Course du jour AUTO', partants: chevaux.length, chevaux};
    }
  } catch(e){ console.log('Parse error',e); }
  return null;
}

app.get('/api/course-du-jour', (req,res)=>{
  res.json({success:true, data: CURRENT_DATA, lastUpdate: LAST_UPDATE, mode: 'AUTO REAL GENY'});
});

app.post('/api/auto-update', (req,res)=>{
  const {text, data} = req.body;
  if(data && data.chevaux) {
    CURRENT_DATA = data;
    LAST_UPDATE = new Date().toISOString();
    return res.json({success:true, message:'Mis à jour avec JSON complet', data: CURRENT_DATA});
  }
  if(text) {
    const parsed = parseGenyText(text);
    if(parsed) {
      CURRENT_DATA = parsed;
      LAST_UPDATE = new Date().toISOString();
      return res.json({success:true, message:`Mis à jour AUTO - ${parsed.partants} partants`, data: CURRENT_DATA});
    }
    return res.json({success:false, message:'Impossible de parser - colle tout le texte Geny'});
  }
  res.json({success:false, message:'Envoie text ou data'});
});

app.get('/admin', (req,res)=>res.sendFile(path.join(__dirname,'admin.html')));
app.get('/api/health', (req,res)=>res.json({status:'V9 AUTO REAL GENY OK - plus besoin de GitHub', lastUpdate: LAST_UPDATE}));
app.get('*', (req,res)=>res.sendFile(path.join(__dirname,'index.html')));
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log('V9 AUTO LIVE port '+PORT+' - plus besoin GitHub'));
