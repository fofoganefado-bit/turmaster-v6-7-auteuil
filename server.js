const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const cron = require('node-cron');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '')));

const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

async function fetchWithFallback(dateStr) {
  const urls = [
    `https://offline.turfinfo.api.pmu.fr/rest/client/7/programme/${dateStr}`,
    `https://api.allorigins.win/raw?url=${encodeURIComponent('https://offline.turfinfo.api.pmu.fr/rest/client/7/programme/' + dateStr)}`,
  ];
  for (const url of urls) {
    try {
      const r = await fetch(url, { timeout: 25000, headers: { 'User-Agent': 'TurfMaster-Bot/6.7.1' } });
      if (r.ok) {
        const txt = await r.text();
        try {
          const json = JSON.parse(txt);
          if (json && (json.reunions || json.programme || json.jour)) return json;
        } catch(e){}
      }
    } catch(e){}
  }
  return null;
}

async function botRecupereCourses(dateStr) {
  console.log(`\n🤖 [BOT 6h30 V6.7.1] ${dateStr}`);
  const data = await fetchWithFallback(dateStr);
  const file = path.join(DATA_DIR, `programme-${dateStr}.json`);
  const lastFile = path.join(DATA_DIR, 'last-import.json');
  if (data) {
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
    const info = { date: dateStr, at: new Date().toISOString(), ok: true, version: '6.7.1' };
    fs.writeFileSync(lastFile, JSON.stringify(info, null, 2));
    return info;
  } else {
    fs.writeFileSync(lastFile, JSON.stringify({ date: dateStr, at: new Date().toISOString(), ok:false, version:'6.7.1' }, null,2));
    return { ok:false, date: dateStr };
  }
}

app.get('/api/programme/:date', async (req,res)=>{
  const date = req.params.date;
  const file = path.join(DATA_DIR, `programme-${date}.json`);
  if (fs.existsSync(file)) return res.json(JSON.parse(fs.readFileSync(file,'utf-8')));
  const live = await fetchWithFallback(date);
  if (live) { fs.writeFileSync(file, JSON.stringify(live,null,2)); return res.json(live); }
  res.status(404).json({ error: 'Programme non disponible', date });
});

app.get('/api/bot/status', (req,res)=>{
  const f = path.join(DATA_DIR,'last-import.json');
  const last = fs.existsSync(f) ? JSON.parse(fs.readFileSync(f,'utf-8')) : null;
  res.json({ bot: 'TurfMaster V6.7.1 Vérification Détaillée', version: '6.7.1', schedule: '30 6 * * * Europe/Paris (05:30 Lomé)', features: ['Top Entraîneur','Top Cote','Jockey','Palmarès Complet','Synthèse Chiffrée','Vérif Résultats'], lastImport: last, parisTime: new Date().toLocaleString('fr-FR',{timeZone:'Europe/Paris'}), lomeTime: new Date().toLocaleString('fr-FR',{timeZone:'Africa/Lome'}) });
});

app.post('/api/bot/run/:date', async (req,res)=>{ const info = await botRecupereCourses(req.params.date); res.json(info); });

cron.schedule('30 6 * * *', async () => {
  const now = new Date();
  const dateStr = `${String(now.getDate()).padStart(2,'0')}${String(now.getMonth()+1).padStart(2,'0')}${now.getFullYear()}`;
  await botRecupereCourses(dateStr);
}, { timezone: "Europe/Paris" });

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`✅ TurfMaster V6.7.1 sur http://localhost:${PORT}`));
