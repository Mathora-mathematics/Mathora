import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const read = path => readFileSync(path, 'utf8');
const pages = [
  ['portal.html', 'mg-student-deep-insights'],
  ['studio.html', 'mg-admin-analytics'],
  ['family.html', 'mg-family-analytics'],
  ['sample.html', 'mg-sample-insights']
];
for (const [file, target] of pages) {
  const html = read(file);
  assert.ok(html.includes('id="'+target+'"'), file+' is missing '+target);
  assert.ok(html.includes('insights-upgrade.js'), file+' is missing the analytics script');
  assert.ok(html.includes('insights-upgrade.css'), file+' is missing the analytics stylesheet');
}
const hooks = [
  ['portal.js', ['MGInsights?.student(data)', 'MGInsights?.report(']],
  ['studio.js', ['MGInsights?.studio(', 'student_id:e.student_id']],
  ['family-access.js', ['MGInsights?.family(p,parent)']],
  ['assigned-practice.js', ['MGInsights?.assigned(task,root)']]
];
for (const [file, checks] of hooks) {
  const source = read(file);
  for (const part of checks) assert.ok(source.includes(part), file+' lost analytics integration: '+part);
}
const ui = read('insights-upgrade.js');
for (const part of ['function student(', 'function studio(', 'function family(', 'function report(', 'function assigned(', 'function sample(', 'root.replaceChildren()', 'aria-pressed', 'released', 'role']) {
  assert.ok(ui.includes(part), 'Shared analytics missing '+part);
}
assert.ok(!ui.includes('.innerHTML='), 'Analytics must not inject arbitrary HTML from student records');
const deploy = read('.github/workflows/pages.yml');
const sampleCopy=deploy.split('\n').find(line=>line.includes('cp sample.html'))||'';
assert.ok(['insights-upgrade.css','insights-upgrade.js',' site/'].every(asset=>sampleCopy.includes(asset)), 'Pages curated bundle is missing analytics assets');
assert.ok(deploy.includes('node --check insights-upgrade.js'), 'Pages is missing analytics syntax check');
console.log('MathsGrove analytics hooks, role views, privacy-friendly rendering and deployment assets: OK');
