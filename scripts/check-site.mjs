import { readFileSync, existsSync } from 'node:fs';
const pages=['index.html','portal.html','studio.html','sample.html'];
const publicAssets=['mathsgrove.css','brand-refresh.css','marketing-services.css','portal.css','studio.css','admin-learner.css','content-bank.css','content-bank.js','private-refresh.css','student-features.css','sample.css','sample-extras.css','sample-extras.js','maths-render.js','evidence-theme.css','whiteboard.js','marketing.js','sample.js','portal.js','studio.js','mathsgrove-config.js','mathsgrove-icon.svg'];
let errors=[];
for (const name of [...pages,...publicAssets]) if (!existsSync(name)) errors.push('Missing '+name);
for (const page of pages) {
  const html=readFileSync(page,'utf8');
  for (const ref of html.matchAll(/(?:src|href)=["'](\.\/[^"']+)["']/g)) {
    const target=ref[1].split('#')[0].split('?')[0].replace(/^\.\//,'');
    if (!existsSync(target)) errors.push(page+' references missing '+target);
  }
  const ids=[...html.matchAll(/\bid=["']([^"']+)["']/g)].map(x=>x[1]);
  const duplicates=ids.filter((id,i)=>ids.indexOf(id)!==i);
  if (duplicates.length) errors.push(page+' duplicate ids: '+[...new Set(duplicates)].join(', '));
  if (/sb_secret_[a-zA-Z0-9_-]{10,}/.test(html)) errors.push(page+' contains private key');
}
const landing=readFileSync('index.html','utf8');
if (landing.includes('£')||/\bpricing\b/i.test(landing)) errors.push('Public homepage must not advertise prices');
if (/partner dashboard|demo-overlay|id="panel-partner"/i.test(landing)) errors.push('Old public partner dashboard found');
for (const needed of ['id="mobile-toggle"','id="primary-nav"','id="services"','href="./sample.html"','id="student-preview"']) {
  if (!landing.includes(needed)) errors.push('Missing preview/interaction element '+needed);
}
const config=readFileSync('mathsgrove-config.js','utf8');
if (/sb_secret_[a-zA-Z0-9_-]{10,}|service_role\s*[:=]\s*["']eyJ/.test(config)) errors.push('Private credential in browser configuration');
if (errors.length) { console.error('MathsGrove site checks failed:\n'+errors.map(s=>'  • '+s).join('\n'));process.exit(1) }
console.log('MathsGrove public assets, local references, IDs, prices and credentials: OK');
