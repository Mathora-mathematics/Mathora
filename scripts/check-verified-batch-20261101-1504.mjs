import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const m=JSON.parse(readFileSync('content/operations/verified-original-batch-20261101-1504.json','utf8'));
assert.equal(m.version,1);
assert.equal(m.batch,'20261101-1504');
assert.equal(m.record_count,9);
assert.equal(m.questions.length,9);
assert.ok(['private_draft_awaiting_ci_and_activation','published_to_private_supabase_bank'].includes(m.status));
assert.match(m.assessment_kind,/NOT complete timed mocks/);
assert.equal(m.verification.independent_sympy_checks,9);
assert.equal(m.verification.independent_js_checks,9);
assert.equal(m.verification.compared_total,613);
assert.equal(m.verification.duplicate_rejections,0);
assert.equal(m.verification.student_mutations,0);
const ids=new Set(),provenances=new Set();
for(const q of m.questions){
 assert.match(q.id,/^[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$/);
 assert.match(q.provenance,/^mg-original-20261101-1504-(AASL|AIHL|TMUA)-(D|W|E)$/);
 assert.ok(!ids.has(q.id)&&!provenances.has(q.provenance),'Unique IDs and provenance');
 ids.add(q.id);provenances.add(q.provenance);
 assert.ok(['daily','weekly','exam'].includes(q.programme_scope));
 assert.ok(q.expected_seconds>=120&&q.expected_seconds<=900);
 assert.ok(q.syllabus_objective.length>9);
 assert.ok(q.source_url.startsWith('https://www.ibo.org/')||q.source_url.startsWith('https://esat-tmua.ac.uk/'));
 if(q.provenance.includes('AASL')){assert.equal(q.qualification,'IB_AA');assert.equal(q.academic_level,'sl');}
 if(q.provenance.includes('AIHL')){assert.equal(q.qualification,'IB_AI');assert.equal(q.academic_level,'hl');}
 if(q.provenance.includes('TMUA')){assert.equal(q.qualification,'TMUA');assert.equal(q.academic_level,'tmua');}
}
for(const route of ['AASL','AIHL','TMUA']){
 const group=m.questions.filter(q=>q.provenance.includes(route));
 assert.equal(group.length,3);
 assert.deepEqual(group.map(q=>q.programme_scope).sort(),['daily','exam','weekly']);
}
const pub=JSON.stringify(m);
for(const secret of ['prompt','choices','correct_text','explanation','reviewer_note','service_role','password','api_key'])assert.ok(!pub.includes('"'+secret+'"'),'Private content in public metadata: '+secret);
const near=(a,b)=>Math.abs(a-b)<1e-11;
assert.ok(near(120*(3/2)**5,3645/4),'AA SL geometric term');
assert.ok(near(4-8/3,4/3),'AA SL enclosed area');
assert.ok(near(Math.PI/6+5*Math.PI/6+Math.PI/2,3*Math.PI/2),'AA SL trig roots sum');
assert.ok(near(28*(1/4)**2*(3/4)**6,5103/16384),'AI HL binomial');
const T=[[.8,.3],[.2,.7]];let v=[1,0];
for(let i=0;i<3;i++)v=[T[0][0]*v[0]+T[0][1]*v[1],T[1][0]*v[0]+T[1][1]*v[1]];
assert.ok(near(v[0],13/20)&&near(v[1],7/20),'AI HL three-step transition');
assert.ok(near(.04*.9**2/(.04*.9**2+.96*.1**2),27/35),'AI HL two-positive Bayes');
assert.deepEqual(Array.from({length:40},(_,i)=>i-15).filter(n=>Math.abs(2*n-5)<7),[0,1,2,3,4,5],'TMUA strict inequality');
for(let n=-100;n<=100;n++)assert.equal(n*n%12===0,n%6===0,'TMUA divisibility equivalence '+n);
const lo=(1-Math.sqrt(13))/2,hi=(1+Math.sqrt(13))/2;
assert.ok(near(lo*lo-lo-3,0)&&near(hi*hi-hi-3,0)&&0>lo&&0<hi,'TMUA parameter roots and interval');
assert.ok((lo+hi)/2>lo&&(lo+hi)/2<hi,'TMUA strict endpoints');
console.log('PASS: 9 private-only metadata records, 3 tier routes, 9 independent numerical/logic checks, source and privacy gates.');
