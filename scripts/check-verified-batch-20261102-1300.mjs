import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const j=JSON.parse(readFileSync('content/operations/verified-original-batch-20261102-1300.json','utf8'));
assert.equal(j.count,9);assert.equal(j.questions.length,9);
assert.ok(['draft_pending_ci_and_routing','published_database_verified'].includes(j.status));
assert.equal(new Set(j.questions.map(x=>x.id)).size,9);
assert.equal(new Set(j.questions.map(x=>x.provenance)).size,9);
for(const q of j.questions){assert.match(q.id,/^[0-9a-f-]{36}$/);assert.ok(q.expected_seconds>=180&&q.expected_seconds<=900);assert.ok(q.syllabus_objective.length>8);for(const key of ['prompt','choices','correct_text','explanation','reviewer_note'])assert.ok(!(key in q),'Do not publish private unseen question text');}
for(const board of ['Cambridge 9709 P6 Statistics 2','Pearson Edexcel IAL WMA14 P4','Pearson Edexcel IAL WST02 S2']){const x=j.questions.filter(q=>q.exam_board===board);assert.equal(x.length,3);assert.deepEqual(x.map(q=>q.programme_scope).sort(),['daily','exam','weekly']);}
for(const k of ['independent_sympy','independent_javascript','sql_math_checkpoints','valid_four_options','unique_options','exactly_one_key','complete_working_and_marking_notes'])assert.equal(j.verification[k],9);
assert.equal(j.verification.total_prior_comparisons,9*2395);
assert.equal(j.verification.within_batch_pairs,36);assert.equal(j.verification.near_duplicates_at_076,0);
assert.ok(j.verification.max_prior_jaccard<.76);assert.ok(j.verification.max_internal_jaccard<.76);
assert.equal(j.verification.student_record_mutations,0);
const eq=(a,b,e=1e-8)=>Math.abs(a-b)<e;
assert.equal(3*4-2*7+1,-1);assert.equal(9*3+4*5,47);
assert(eq(42.6-1.96*8/Math.sqrt(100),41.032));assert(eq(42.6+1.96*8/Math.sqrt(100),44.168));
let c=0,f=1;for(let k=0;k<=6;k++){if(k)f*=k;c+=2.5**k/f}assert(eq(1-Math.exp(-2.5)*c,.014187311990913352));
assert(eq((-.5)*(-1.5)*(-2.5)/6*(-8),2.5));
assert(eq(-(2*1+2)/(1+2*2),-.8));assert.equal(4*1+5*2,14);
assert(eq(2*((3**4-1)/4+2*(3**3-1)/3+(3**2-1)/2),248/3));
assert(eq((11-3)**2/12,16/3));assert(eq(2*Math.sqrt(3)-2,2*(Math.sqrt(3)-1)));
const phi=z=>{const n=4000,h=z/n,g=x=>Math.exp(-x*x/2)/Math.sqrt(2*Math.PI);let v=g(0)+g(z);for(let i=1;i<n;i++)v+=(i%2?4:2)*g(i*h);return .5+v*h/3;};
assert(eq(1-phi((72.5-64)/8),.14400437900197094,1e-7));
const migration=readFileSync(j.migration,'utf8');
for(const code of ['%p6%','%wma14%','%wst02%','%wma13%','%wma11%','%wma12%','%9ma0%','%0580%','%1ma1%','%4ma1%','%9fm0%'])assert.ok(migration.includes(code),'missing route gate '+code);
assert.ok(migration.includes('CREATE OR REPLACE FUNCTION private.grove_board_compatible'));
console.log('PASS: 9 private question metadata entries, 9 independent JS mathematical checkpoints, privacy, syllabus routing and prior regression guards');
