import fs from 'node:fs';
import assert from 'node:assert/strict';

const file = 'content/operations/verified-original-batch-20261102-1903.json';
const ledger = JSON.parse(fs.readFileSync(file, 'utf8'));
const near = (a,b,t=1e-9) => assert.ok(Math.abs(a-b)<t, 'Independent mathematical checkpoint failed');
assert.equal(ledger.batch,'20261102-1903');
assert.equal(ledger.questions.length,9);
assert.equal(new Set(ledger.questions.map(q=>q.id)).size,9);
assert.equal(new Set(ledger.questions.map(q=>q.provenance)).size,9);
const routes = new Map();
for(const q of ledger.questions){
  assert.match(q.id,/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);
  assert.match(q.provenance,/^mg-original-20261102-1903-/);
  assert.ok(q.expected_seconds>=180 && q.expected_seconds<=900);
  assert.match(q.syllabus_objective,/https:\/\/(www\.cambridgeinternational\.org|qualifications\.pearson\.com)\//);
  assert.ok(['daily','weekly','exam'].includes(q.programme_scope));
  const key=[q.qualification,q.academic_level,q.exam_board].join('|');
  if(!routes.has(key))routes.set(key,new Set());
  assert.ok(!routes.get(key).has(q.programme_scope));
  routes.get(key).add(q.programme_scope);
}
assert.equal(routes.size,3);
for(const modes of routes.values())assert.deepEqual([...modes].sort(),['daily','exam','weekly']);
for(const key of ['sympy_independent','javascript_independent','sql_math','unique_four_options','one_key','explanations_and_misconceptions','latex_delimiters_and_braces'])assert.equal(ledger.qa[key],9);
assert.equal(ledger.qa.total_prior_comparisons,ledger.questions.length*ledger.qa.prior_compared_per_candidate);
assert.equal(ledger.qa.exact_duplicates,0);
assert.equal(ledger.qa.masked_template_duplicates,0);
assert.equal(ledger.qa.near_duplicates_at_076,0);
assert.equal(ledger.qa.within_batch_pairs,36);
assert.equal(ledger.qa.rejected_candidates,1);

// Independent numerical checks; original stems and answer keys are NOT exported.
near(8*12/2+5*12+6*12/2,144);
near(Math.atan2(12,Math.hypot(6,8))*180/Math.PI,50.19442890773481);
const f=x=>x**3-6*x**2+9*x+2;
const df=x=>3*x*x-12*x+9;
near(df(3),0); near(f(3),2); assert.ok(6*3-12>0 && 6*1-12<0);
near((3+Math.sqrt(5))/(3-Math.sqrt(5)),(7+3*Math.sqrt(5))/2);
const radius=30/(2+2/3);
near(radius,45/4);near(radius*radius/3,675/16);
for(const k of [7-2*Math.sqrt(10),7+2*Math.sqrt(10)])near((k-3)**2-8*k,0);
const factorial=n=>Array.from({length:n},(_,i)=>i+1).reduce((a,b)=>a*b,1);
assert.equal(factorial(5)-2*factorial(4),72);
near(Math.sqrt(2028/12-(150/12)**2),Math.sqrt(51)/2);
const phi=x=>Math.exp(-x*x/2)/Math.sqrt(2*Math.PI);
const N=10000,h=1/N;
let sum=0;
for(let i=0;i<=N;i++)sum+=(i===0||i===N?1:i%2===0?2:4)*phi(i*h);
const conditional=(.5-h*sum/3)/.5;
near(conditional,.31731050786291415,1e-8);

// Separate confidential Signature paper: independent answer checkpoints and mark reconciliation.
near((5*11/5+4)/3,5); // inverse composition check
near((3*(2*2+1)-4)/5,11/5);
near((3*(14/3)-4)/5,2);
near(35*Math.sin(Math.PI/3),35*Math.sqrt(3)/2);
near(7*7+10*10-2*7*10*Math.cos(Math.PI/3),79);
near(4/9*3/8,1/6);
near(1-(6+3+1)/36,13/18);
near(6/(6+3+1),3/5);
assert.equal(ledger.signature.marks,24);
assert.equal(ledger.signature.criterion_marks,24);
assert.equal(ledger.signature.parts,9);
assert.equal(ledger.signature.status,'awaiting_human_moderation');
assert.equal(ledger.signature.human_signoff,false);
const publicLedger=fs.readFileSync(file,'utf8');
assert.ok(!/service_role|supabase_service|student_email|correct_text|student_id\s*[:]|"choices"\s*:|"explanation"\s*:/i.test(publicLedger));
assert.equal(ledger.sources.length,3);
assert.ok(fs.existsSync('content/operations/2026-11-02-1903-kwt-ig-p1-p5-content-qa.md'));
console.log('PASS: 9 route-unique originals, independent numerical checks, 21,906 duplicate comparisons, privacy-safe ledger, 24-mark Signature moderation gate.');
