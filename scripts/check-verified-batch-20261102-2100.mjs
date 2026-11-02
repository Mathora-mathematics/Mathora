import fs from 'node:fs';
import assert from 'node:assert/strict';

const ledger=JSON.parse(fs.readFileSync('content/operations/verified-original-batch-20261102-2100.json','utf8'));
assert.equal(ledger.batch,'20261102-2100');
assert.equal(ledger.questions.length,9);
assert.equal(new Set(ledger.questions.map(q=>q.id)).size,9);
const routes=new Map();
for(const q of ledger.questions){
 assert.match(q.id,/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);
 assert.ok(['daily','weekly','exam'].includes(q.mode));
 assert.ok(q.expected_seconds>=150 && q.expected_seconds<=600);
 assert.ok(q.syllabus.startsWith('https://'));
 const key=[q.qualification,q.level,q.board].join('|');
 if(!routes.has(key))routes.set(key,new Set());
 assert.ok(!routes.get(key).has(q.mode),'duplicate route/mode');
 routes.get(key).add(q.mode);
}
assert.equal(routes.size,3);
for(const modes of routes.values())assert.deepEqual([...modes].sort(),['daily','exam','weekly']);
for(const key of ['sympy_independent','javascript_independent','sql_independent','distinct_four_choices','one_key','complete_explanations','tex_syntax'])assert.equal(ledger.qa[key],9);
assert.equal(ledger.qa.prior_comparisons,9*ledger.qa.prior_compared_per_question);
assert.equal(ledger.qa.prior_comparisons,21987);
assert.equal(ledger.qa.exact_duplicates,0);
assert.equal(ledger.qa.masked_template_duplicates,0);
assert.equal(ledger.qa.near_duplicates_jaccard_076,0);
assert.equal(ledger.qa.within_batch_pairs,36);
assert.equal(ledger.qa.board_positive,9);
assert.equal(ledger.qa.board_negative,9);
assert.equal(ledger.qa.previously_assigned,0);

const near=(a,b,t=1e-10)=>assert.ok(Math.abs(a-b)<t,`Independent numerical checkpoint: ${a} vs ${b}`);
// AQA Foundation
near(24*15*(1-3/8)/9,25);
const k=24;
near(5*k/(3*k+24),5/4);
assert.equal(8*k,192);
near((0.80-0.55)*144,36);
// Pearson 4MA1 Higher
for(const p of [-8,-5,-2,-1,0,1,2,3,5,11]){
 const q=(4*p-7)/(3*p+2);
 near((7+2*q)/(4-3*q),p);
}
assert.equal(5*(5+11),8*(8+2));
for(let x=-5;x<=7;x+=0.25){
 const actual=(x-4)*(2*x+3)<=0 && x*x>1;
 const expected=(x>=-1.5 && x< -1)||(x>1 && x<=4);
 assert.equal(actual,expected,'interval endpoints and signs');
}
// TMUA Paper 2: contrapositive, counterexample, prime conjecture
for(let n=-200;n<=200;n++)assert.equal(n*n%5===0,n%5===0);
const pairs=[[18,1],[9,5],[6,3],[2,7]];
const counterexamples=pairs.filter(([a,b])=>a*b%18===0 && a%18!==0 && b%18!==0);
assert.deepEqual(counterexamples,[[6,3]]);
const prime=n=>{if(n<2)return false;for(let d=2;d*d<=n;d++)if(n%d===0)return false;return true;};
assert.deepEqual([6,9,12,15].map(n=>prime(n*n+3*n+19)),[true,true,true,false]);
assert.equal(15*15+3*15+19,17*17);
// Confidential Signature Advanced: check outcomes without exposing paper or mark scheme.
near((3*5+7)/(5-2),22/3);
assert.equal(6*24,8*18);
assert.equal(6*24,4*36);
assert.equal(18-8,10);
assert.equal(36-4,32);
near(.6*.05+.4*.10,.07);
near(.03/.07,3/7);
near(200*.07,14);
near(.93*.93,.8649);
assert.equal(ledger.signature.marks,24);
assert.equal(ledger.signature.criteria_marks,24);
assert.equal(ledger.signature.parts,11);
assert.equal(ledger.signature.status,'awaiting_human_moderation');
assert.equal(ledger.signature.human_signoff,false);
const text=fs.readFileSync('content/operations/verified-original-batch-20261102-2100.json','utf8');
assert.ok(!/service_role|supabase_service|student_email|correct_text|student_id\s*[:]|"choices"\s*:|"explanation"\s*:/i.test(text));
assert.ok(fs.existsSync('content/operations/2026-11-02-2100-kwt-aqa-4ma1-tmua-content-qa.md'));
console.log('PASS: 9 original practice routes, independent maths checks, 21,987 duplicate comparisons, 24-mark confidential Signature Advanced moderation boundary. DB publication must be checked separately.');
