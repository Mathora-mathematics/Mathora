import fs from 'node:fs';
import assert from 'node:assert/strict';

const file = 'content/operations/verified-original-batch-20261102-1709.json';
const ledger = JSON.parse(fs.readFileSync(file, 'utf8'));
assert.equal(ledger.batch, '20261102-1709');
assert.equal(ledger.questions.length, 9);
assert.equal(new Set(ledger.questions.map(q => q.id)).size, 9);
assert.equal(new Set(ledger.questions.map(q => q.provenance)).size, 9);
assert.equal(ledger.qa.sql_math, 9);
assert.equal(ledger.qa.sympy_independent, 9);
assert.equal(ledger.qa.javascript_independent, 9);
assert.equal(ledger.qa.four_distinct_options, 9);
assert.equal(ledger.qa.exactly_one_key, 9);
assert.equal(ledger.qa.exact_duplicates, 0);
assert.equal(ledger.qa.template_duplicates, 0);
assert.equal(ledger.qa.near_duplicates_at_076, 0);
assert.equal(ledger.qa.total_prior_comparisons, ledger.questions.length * ledger.qa.prior_comparisons_per_candidate);
assert.equal(ledger.qa.within_batch_pairs, 36);
assert.equal(ledger.signature.status, 'awaiting_human_moderation');
assert.equal(ledger.signature.human_signoff, false);
assert.equal(ledger.signature.marks, ledger.signature.criterion_marks);

const routes = new Map();
for (const q of ledger.questions) {
  assert.match(q.id, /^[0-9a-f]{8}-[0-9a-f-]{27,}$/);
  assert.match(q.provenance, /^mg-original-20261102-1709-/);
  assert.ok(q.expected_seconds >= 120 && q.expected_seconds <= 900);
  assert.ok(q.syllabus_objective.length >= 8);
  assert.ok(['daily','weekly','exam'].includes(q.programme_scope));
  const key = [q.qualification,q.academic_level,q.exam_board].join('|');
  if (!routes.has(key)) routes.set(key,new Set());
  assert.ok(!routes.get(key).has(q.programme_scope));
  routes.get(key).add(q.programme_scope);
}
assert.equal(routes.size,3);
for (const modes of routes.values()) assert.deepEqual([...modes].sort(),['daily','exam','weekly']);

const near = (actual,expected,tolerance=1e-10) => assert.ok(Math.abs(actual-expected)<tolerance,`Math error: ${actual} != ${expected}`);
near((7/12)**2,49/144); // Pearson 4MA1 independent spins
near((.5*(6*250)*(4*250))/10000,75); // map area hectares
near(48*1.25*.2*(5/6),10); // retained profit
near(19360/(.88**2),25000); // inverse compound depreciation
let terms=[2,7];
for(let n=0;n<3;n++) terms.push(2*terms.at(-1)-terms.at(-2)+6);
assert.deepEqual(terms,[2,7,18,35,58]);
let outcomes=0,favourable=0;
for(let a=1;a<=6;a++)for(let b=1;b<=6;b++)if(a+b>8){outcomes++;if(a===6||b===6)favourable++;}
assert.equal(outcomes,10);assert.equal(favourable,7);
near((Math.exp(2*Math.log(3))-Math.exp(-2*Math.log(3)))/4,20/9); // hyperbolic integral
near(2**3/(2*3*4),1/3); // determinant scaled inverse
near(2*(Math.sin(Math.PI/4)+Math.sin(3*Math.PI/4)),2*Math.sqrt(2)); // imaginary part of selected roots

// Independent specialist paper checks (private mark scheme is not exported).
near((Math.exp(2*Math.log(2))-Math.exp(-2*Math.log(2)))/4,15/16);
near(1+2*.1+1.5*(.1**2)+(1/3)*(.1**3),1.2153333333333334);
const roots=[[Math.sqrt(3),1],[-Math.sqrt(3),1],[0,-2]];
near(roots.reduce((s,z)=>s+z[0],0),0);
near(roots.reduce((s,z)=>s+z[1],0),0);
assert.equal(ledger.signature.parts,9);
assert.equal(ledger.signature.marks,24);

const publicText=fs.readFileSync(file,'utf8');
assert.ok(!/service_role|supabase_service|student_email|correct_text|choices\s*[:]|student_id\s*[:]/i.test(publicText));
assert.equal(ledger.sources.length,3);
for(const source of ledger.sources) assert.match(source,/^https:\/\/(qualifications\.pearson\.com|www\.aqa\.org\.uk|www\.cambridgeinternational\.org)\//);
console.log('PASS: 9 original questions, 9 independent JS maths checks, route/tier uniqueness, privacy-safe ledger, 24-mark Specialist reconciliation.');
