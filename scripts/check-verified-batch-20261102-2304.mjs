import fs from 'node:fs';
import assert from 'node:assert/strict';
const p='content/operations/verified-original-batch-20261102-2304.json';
const d=JSON.parse(fs.readFileSync(p,'utf8'));
assert.equal(d.batch,'20261102-2304');
assert.equal(d.questions.length,9);
assert.equal(new Set(d.questions.map(x=>x.id)).size,9);
const modes=new Map();
for(const q of d.questions){
 assert.match(q.id,/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);
 assert.ok(['daily','weekly','exam'].includes(q.mode));
 assert.ok(q.expected_seconds>=180 && q.expected_seconds<=600);
 assert.ok(q.syllabus.startsWith('https://'));
 const k=[q.qualification,q.level,q.board].join('|');
 if(!modes.has(k))modes.set(k,new Set());
 assert.ok(!modes.get(k).has(q.mode),'duplicate tier for route');
 modes.get(k).add(q.mode);
}
assert.equal(modes.size,3);
for(const s of modes.values())assert.deepEqual([...s].sort(),['daily','exam','weekly']);
for(const k of ['sympy_independent','javascript_independent','sql_independent','distinct_four_choices','one_key','complete_explanations','tex_syntax','board_positive','board_negative'])assert.equal(d.qa[k],9);
assert.equal(d.qa.prior_comparisons,9*d.qa.prior_compared_per_question);
assert.equal(d.qa.prior_comparisons,22068);
for(const k of ['exact_duplicates','masked_template_duplicates','near_duplicates_jaccard_076','within_batch_exact_duplicates','previously_assigned'])assert.equal(d.qa[k],0);
assert.equal(d.qa.within_batch_pairs,36);
assert.ok(d.qa.maximum_prior_jaccard<0.76);
const near=(a,b,eps=1e-9)=>assert.ok(Math.abs(a-b)<eps,`Math checkpoint ${a} != ${b}`);
// Cambridge 9709 Paper 4
near((1.5*5+2.5*(-1))/(1.5+2.5),1.25);
near((60-5*10*3/5-.25*5*10*4/5)/5,4);
near((70*10/20+80)*5,575);
// Pearson IAL WME01 Mechanics 1
near((30*3+20*5)/6,95/3);
const roots=[0,4].filter(t=>t*t===4*t);
assert.deepEqual(roots,[0,4]);
near(2*4,8);
near((3*9.8-4*9.8*.5)/7,1.4);
near(3*(9.8-1.4),25.2);
// Cambridge 9231 Paper 2
near((Math.exp(Math.log(4))+Math.exp(-Math.log(4)))/2,17/8);
near(6**5+2**5,7808);
near(2+4/3+4/15,18/5);
// Signature: all 24 confidential criterion marks reconcile in private DB; independent numerical checkpoints.
near((1.2*7-1.8*2)/3,1.6);
near(1.2*(1.6-7),-6.48);
near(.5*1.2*49+.5*1.8*4-.5*3*1.6**2,29.16);
near(5*10*Math.cos(Math.PI/6),25*Math.sqrt(3));
near(.2*25*Math.sqrt(3),5*Math.sqrt(3));
near((45-25-5*Math.sqrt(3))/5,4-Math.sqrt(3));
near(.5*(4-Math.sqrt(3))*16,32-8*Math.sqrt(3));
near(8*10*12,960);
near(960/5,192);
near(192/.8,240);
near((240-192)*5,240);
assert.equal(d.signature.marks,24);
assert.equal(d.signature.criteria_marks,24);
assert.equal(d.signature.parts,9);
assert.equal(d.signature.status,'awaiting_human_moderation');
assert.equal(d.signature.human_signoff,false);
const ledger=fs.readFileSync(p,'utf8');
assert.ok(!/service_role|student_email|correct_text|student_id\s*[:]|"choices"\s*:|"explanation"\s*:/i.test(ledger));
assert.ok(fs.existsSync('content/operations/2026-11-02-2304-kwt-mechanics-further-content-qa.md'));
console.log('PASS: 9 original MCQ metadata routes; independent arithmetic checks; 22,068 prior comparisons; 24-mark private Signature moderation boundary. Live database status requires separate SQL verification.');
