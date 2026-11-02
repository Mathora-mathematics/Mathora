import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';

const read=path=>readFileSync(path,'utf8');
const pageNames=['index.html','portal.html','studio.html','family.html'];
const pages=Object.fromEntries(pageNames.map(p=>[p,read(p)]));
const css=read('private-polish-v6.css');
const publicCss=read('marketing-polish-v6.css');
const publicJs=read('marketing-polish-v6.js');
const workflow=read('.github/workflows/pages.yml');
const portalJs=read('portal.js'),studioJs=read('studio.js'),familyJs=read('family-access.js');

for(const p of ['portal.html','studio.html','family.html']){
 assert.ok(pages[p].includes('href="./private-polish-v6.css"'),p+' missing shared private design layer');
 assert.ok(pages[p].includes('href="./insights-upgrade.css"'),p+' lost analytics layer');
}
assert.ok(pages['family.html'].includes('body class="mg-private-family"'),'Parent/tutor view must have scoped style class');
for(const cls of ['mg-private-portal','mg-private-studio','mg-private-family']){
 assert.ok(css.includes(cls),'Missing private stylesheet role '+cls);
}
assert.ok(css.includes('@media(prefers-reduced-motion:reduce)'),'Private dashboards must respect motion preferences');
assert.ok(css.includes('@media print'),'Existing print/report workflow needs print-safe styles');
assert.ok(portalJs.includes("b.setAttribute('aria-current','page')"),'Student active navigation needs accessibility state');
assert.ok(studioJs.includes("b.setAttribute('aria-current','page')"),'Admin active navigation needs accessibility state');
assert.ok(familyJs.includes('mg6-repaint'),'Parent/tutor learner selection needs a quiet refresh');
assert.ok(!portalJs.includes('document.startViewTransition(update)'),'Student navigation must synchronously update panels');
assert.ok(!studioJs.includes('document.startViewTransition(update)'),'Admin offboarding must synchronously update panels');
assert.ok(!familyJs.includes('document.startViewTransition(render)'),'Parent/tutor data selection must synchronously refresh');
assert.ok(pages['studio.html'].includes('id="mg-student-offboarding"'),'Preserve student ZIP archive/removal control');
assert.ok(pages['portal.html'].includes('id="mg-practice-workspace"'),'Preserve student practice and whiteboard controls');
assert.ok(pages['family.html'].includes('id="fa-tutor-only"'),'Preserve protected tutor-only report');
assert.ok(pages['family.html'].includes('id="fa-role-notice"'),'Preserve parent privacy notice');
assert.ok(pages['index.html'].includes('marketing-polish-v6.css')&&pages['index.html'].includes('marketing-polish-v6.js'),'Homepage missing v6 experience');
assert.ok(pages['index.html'].includes('id="mg6-panel-0"')&&pages['index.html'].includes('id="mg6-panel-2"'),'Homepage missing interactive examiner example');
assert.ok(!pages['index.html'].includes('mg-feature-grid')&&!pages['index.html'].includes('mg-method-steps'),'Redundant marketing explanations not removed');
for(const id of ['dashboards','how-it-works','services','signature','learning-journey','interactive-sample']){
 assert.ok(pages['index.html'].includes('id="'+id+'"'),'Main navigation/marketing anchor missing '+id);
}
assert.ok(!/\bpricing\b|£/i.test(pages['index.html']),'Public homepage must not show wholesale prices');
for(const p of pageNames){
 const ids=[...pages[p].matchAll(/\bid=["']([^"']+)["']/g)].map(m=>m[1]);
 assert.equal(new Set(ids).size,ids.length,'Duplicate HTML IDs on '+p);
}
for(const part of ['[data-mg6-step]','ArrowRight','ArrowLeft','Home','End','aria-selected'])assert.ok(publicJs.includes(part),'Homepage keyboard/tabs lost '+part);
assert.ok(publicCss.includes('prefers-reduced-motion'),'Homepage design must respect reduced motion');
assert.ok(workflow.includes('marketing-polish-v6.css marketing-polish-v6.js site/'),'Curated Pages lacks homepage assets');
assert.ok(workflow.includes('insights-upgrade.js private-polish-v6.css site/'),'Curated Pages lacks private assets');
assert.ok(workflow.includes('node --check marketing-polish-v6.js'),'Missing homepage script syntax check');
console.log('MathsGrove v6 four-role UX, marketing hierarchy, accessibility, essential workflows and deploy assets: OK');
