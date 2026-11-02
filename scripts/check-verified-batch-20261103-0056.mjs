import fs from 'node:fs';
import assert from 'node:assert/strict';
const d=JSON.parse(fs.readFileSync('content/operations/verified-original-batch-20261103-0056.json','utf8'));
assert.equal(d.batch,'20261103-0056');
assert.equal(d.questions.length,9);
assert.equal(new Set(d.questions.map(x=>x.id)).size,9);
const routes=new Map();
for(const q of d.questions){
 assert.match(q.id,/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);
 assert.ok(['daily','weekly','exam'].includes(q.mode));
 assert.ok(q.expected_seconds>=180&&q.expected_seconds<=600);
 assert.ok(q.syllabus.startsWith('https://'));
 const k=[q.qualification,q.level,q.board].join('|');
 if(!routes.has(k))routes.set(k,new Set());
 assert.ok(!routes.get(k).has(q.mode));
 routes.get(k).add(q.mode);
}
assert.equal(routes.size,3);
for(const s of routes.values())assert.deepEqual([...s].sort(),['daily','exam','weekly']);
for(const k of ['sympy_independent','javascript_independent','sql_independent','distinct_four_choices','one_key','complete_explanations','tex_syntax','board_positive','board_negative'])assert.equal(d.qa[k],9);
assert.equal(d.qa.prior_comparisons,9*d.qa.prior_compared_per_question);
assert.equal(d.qa.prior_comparisons,22329);
for(const k of ['exact_duplicates','masked_template_duplicates','near_duplicates_jaccard_076','within_batch_exact_duplicates','within_batch_masked_duplicates','within_batch_near_duplicates','previously_assigned'])assert.equal(d.qa[k],0);
assert.equal(d.qa.within_batch_pairs,36);
assert.ok(d.qa.maximum_prior_jaccard<0.76);
const near=(x,y,tol=1e-9)=>assert.ok(Math.abs(x-y)<tol,`Math mismatch ${x} vs ${y}`);
// Cambridge 0580 Core: measures, scale, composite geometry
near((3.6-4*.45)/3,.6);
near(7.2*25000/100000,1.8);
near(12*8-5*3,81);
// IB AA SL: composition, geometric sequence, inverse normal
near((5+2)/6,7/6);
near(18/(-3),-6);
near((-6)*(-3)**4,-486);
near(62+8*1.0364333894937898,70.29146711595,1e-8);
// Pearson 9FM0/4B Further Statistics 2: RSS, ranks, density
near(124-18**2/9,88);
near(1-6*6/(6*(6**2-1)),29/35);
near(3/32*((2*3**2-3**3/3)-(2*1**2-1**3/3)),11/16);
// Private Signature Advanced: independent numerical checks only; no confidential paper contents.
near(-2*4**2+16*4+18,50);
near(-2*9**2+16*9+18,0);
near(64*(-.5)**3,-8);
near(64*(1-(-.5)**5)/(1+.5),44);
near(64/(1+.5),128/3);
near(400*.06680720126885807,26.72288050754323,1e-8);
near(72+6*1.2815515655446004,79.6893093932676,1e-8);
assert.equal(d.signature.marks,24);
assert.equal(d.signature.criteria_marks,24);
assert.equal(d.signature.parts,9);
assert.equal(d.signature.status,'awaiting_human_moderation');
assert.equal(d.signature.human_signoff,false);
const txt=fs.readFileSync('content/operations/verified-original-batch-20261103-0056.json','utf8');
assert.ok(!/service_role|student_email|correct_text|student_id\\s*[:]|"choices"\\s*:|"explanation"\\s*:/i.test(txt));
assert.ok(fs.existsSync('content/operations/2026-11-03-0056-kwt-core-ib-fs2-content-qa.md'));
console.log('PASS: 9 original MCQ routes, independent arithmetic, 22,329 prior comparisons, 24-mark private Signature moderation boundary. Live Supabase requires separate read-back.');
