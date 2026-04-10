import fs from 'fs';
fetch('https://www.skinmatu.lt/produktas/reviderm-micro-brow-perfector-antakiu-piestukas-0-14-g-3-black/').then(r=>r.text()).then(h => { 
  fs.writeFileSync('page.html', h);
})
