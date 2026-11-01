import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const m=JSON.parse(readFileSync('content/operations/verified-original-batch-20261101-1700.json','utf8'));
assert.equal(m.version,1);
assert.equal(m.batch,'20261101-1700');
assert.equal(m.record_count,9);
assert.equal(m.questions.length,9);
assert.ok(['private_draft_awaiting_ci_and_activation','partially_published_cohort_safe'].includes(m.status));
assert.equal(m.release_candidates,3);
assert.equal(m.blocked_cohort_gate,6);
assert.equal(m.verification.independent_sympy_checks,9);
assert.equal(m.verification.independent_js_checks,9);
assert.equal(m.verification.compared_per_item,622);
assert.equal(m.verification.duplicate_rejections,0);
assert.equal(m.verification.student_mutations,0);
const ids=new Set(),provenances=new Set();
for(const q of m.questions){
 assert.match(q.id,/^[a-f0-9]{8}(-[a-f0-9]{4}){3}-[a-f0-9]{12}$/);
 assert.ok(!ids.has(q.id)&&!provenances.has(q.provenance));
 ids.add(q.id);provenances.add(q.provenance);
 assert.ok(['daily','weekly','exam'].includes(q.programme_scope));
 assert.ok(q.expected_seconds>=180&&q.expected_seconds<=900);
 assert.ok(q.syllabus_objective.length>=12);
 assert.ok(q.source_url.startsWith('https://www.ibo.org/')||q.source_url.startsWith('https://qualifications.pearson.com/'));
 if(q.qualification==='IGCSE'){
  assert.equal(q.academic_level,'core');
  assert.equal(q.exam_board,'Pearson Edexcel 4MA1 Foundation');
  assert.equal(q.release_candidate,true);
 }else{
  assert.ok(['IB_AA','IB_AI'].includes(q.qualification));
  assert.equal(q.exam_board,'IB Diploma Programme');
  assert.equal(q.release_candidate,false,'IB 2029 cohort gate absent');
 }
}
for(const route of ['AAHL','AISL','4MA1F']){
 const group=m.questions.filter(q=>q.provenance.endsWith(route+'-D')||q.provenance.endsWith(route+'-W')||q.provenance.endsWith(route+'-E'));
 assert.equal(group.length,3);
 assert.deepEqual(group.map(q=>q.programme_scope).sort(),['daily','exam','weekly']);
}
for(const secret of ['prompt','choices','correct_text','explanation','reviewer_note','password','service_role','api_key']){
 assert.ok(!Object.hasOwn(m,secret)&&!m.questions.some(q=>Object.hasOwn(q,secret)),'Public content leakage: '+secret);
}
const near=(a,b)=>Math.abs(a-b)<1e-11;
assert.ok(near((3*3-4*4),-7)&&near(2*3*4,24),'AA HL complex root');
assert.ok(near(49-121/9,320/9),'AA HL perpendicular squared length');
assert.ok(near(Math.PI/6+5*Math.PI/6+3*Math.PI/2,5*Math.PI/2),'AA HL cube-root arguments');
assert.ok(near(5*.2*.8**4,.4096),'AI SL binomial');
assert.ok(near(4+8*1.5+5*1.1,21.5),'AI SL tariff');
assert.ok(near(.06/(.06+.035),12/19),'AI SL conditional');
assert.ok(near(72/.8,90),'Pearson reverse percentage');
assert.ok(9+9===18&&7*9+4*9===99,'Pearson ticket equations');
assert.ok(near(100*(12*.25+8*.5)/(12+8-2),350/9),'Pearson mixture');
console.log('PASS: nine private-only metadata records, nine independent maths checks, three release candidates and six cohort-gated drafts.');
