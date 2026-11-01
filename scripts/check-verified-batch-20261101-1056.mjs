import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const m=JSON.parse(readFileSync('content/operations/verified-original-batch-20261101-1056.json','utf8'));
assert.equal(m.version,1);
assert.equal(m.batch,'20261101-1056');
assert.equal(m.record_count,6);
assert.equal(m.questions.length,6);
assert.ok(['private_draft_awaiting_ci_and_activation','published_to_private_supabase_bank'].includes(m.status));
assert.match(m.assessment_kind,/NOT complete timed mocks/);
assert.equal(m.verification.independent_mathematical_checks,6);
assert.equal(m.verification.compared_total,598);
assert.equal(m.verification.duplicate_rejections,0);
assert.equal(m.verification.student_mutations,0);
const ids=new Set(),provenance=new Set();
for(const q of m.questions){
  assert.match(q.id,/^[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$/);
  assert.match(q.provenance,/^mg-original-20261101-1056-(A8300F|C0580C)-(D|W|E)$/);
  assert.ok(['daily','weekly','exam'].includes(q.programme_scope));
  assert.ok(q.expected_seconds>=120&&q.expected_seconds<=900);
  assert.ok(q.source_url.startsWith('https://'));
  assert.ok(q.syllabus_objective.includes(q.qualification==='GCSE'?'8300':'0580'));
  assert.equal(q.exam_board,q.qualification==='GCSE'?'AQA 8300':'Cambridge 0580');
  assert.equal(q.academic_level,q.qualification==='GCSE'?'foundation':'core');
  for(const privateField of ['prompt','choices','correct_text','explanation','reviewer_note','correct_option','student_id','email','marking'])
    assert.equal(Object.hasOwn(q,privateField),false,'Private question or learner data leaked: '+privateField);
  ids.add(q.id);provenance.add(q.provenance);
}
assert.equal(ids.size,6);assert.equal(provenance.size,6);
for(const route of ['A8300F','C0580C']){
 const group=m.questions.filter(q=>q.provenance.includes('-'+route+'-'));
 assert.deepEqual(group.map(q=>q.programme_scope).sort(),['daily','exam','weekly']);
}
const near=(a,b)=>Math.abs(a-b)<1e-9;
const bestBuy=(()=>{let min=Infinity,winning='';for(let small=0;small<=8;small++)for(let large=0;large<=5;large++){if(375*small+600*large>=1500){let p=330*small+480*large;if(p<min){min=p;winning=small+','+large}}}return min===1290&&winning==='1,2'})();
const a=[6,7,9,11,13,14],b=[8,9,10,10,11,12];
const tests=[
 near(84/(1+45/60),48),
 bestBuy,
 near(75/(45/50+18/60+30/40),500/13)&&near(Math.round(10*500/13)/10,38.5),
 near((8+9)/2,8.5)&&14-4===10,
 near((8-2)*(6-2)/2,12)&&near((4-1)*(3-1)/2,3),
 a.reduce((x,y)=>x+y,0)===60&&b.reduce((x,y)=>x+y,0)===60&&(a[2]+a[3])/2===10&&(b[2]+b[3])/2===10&&a.at(-1)-a[0]===8&&b.at(-1)-b[0]===4
];
assert.equal(tests.length,6);assert.ok(tests.every(Boolean),'Independent mathematical regression failed');
console.log('PASS: 6 metadata-only items; 6 independent mathematical checks; 2 qualifications x 3 tiers; no private payload; existing human-marking and anti-repeat regressions run separately.');
