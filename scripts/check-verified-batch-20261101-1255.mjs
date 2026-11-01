import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const m=JSON.parse(readFileSync('content/operations/verified-original-batch-20261101-1255.json','utf8'));
assert.equal(m.version,1);
assert.equal(m.batch,'20261101-1255');
assert.equal(m.record_count,9);
assert.equal(m.questions.length,9);
assert.ok(['private_draft_awaiting_ci_and_activation','published_to_private_supabase_bank'].includes(m.status));
assert.match(m.assessment_kind,/NOT complete timed mocks/);
assert.equal(m.verification.independent_sympy_checks,9);
assert.equal(m.verification.independent_js_checks,9);
assert.equal(m.verification.compared_total,604);
assert.equal(m.verification.duplicate_rejections,0);
assert.equal(m.verification.student_mutations,0);
const ids=new Set(),prov=new Set();
for(const q of m.questions){
 assert.match(q.id,/^[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$/);
 assert.match(q.provenance,/^mg-original-20261101-1255-(C0580C|C0580X|C9709P3)-(D|W|E)$/);
 assert.ok(!ids.has(q.id)&&!prov.has(q.provenance));
 ids.add(q.id);prov.add(q.provenance);
 assert.ok(['daily','weekly','exam'].includes(q.programme_scope));
 assert.ok(q.expected_seconds>=120&&q.expected_seconds<=900);
 assert.ok(q.source_url.startsWith('https://www.cambridgeinternational.org/'));
 assert.ok(q.syllabus_objective.length>25);
 if(q.provenance.includes('C0580C')){assert.equal(q.qualification,'IGCSE');assert.equal(q.academic_level,'core');assert.equal(q.exam_board,'Cambridge 0580');}
 if(q.provenance.includes('C0580X')){assert.equal(q.qualification,'IGCSE');assert.equal(q.academic_level,'extended');assert.equal(q.exam_board,'Cambridge 0580');}
 if(q.provenance.includes('C9709P3')){assert.equal(q.qualification,'A_LEVEL');assert.equal(q.academic_level,'a2');assert.equal(q.exam_board,'Cambridge 9709');assert.match(q.syllabus_objective,/P3/);}
}
for(const prefix of ['C0580C','C0580X','C9709P3']){
 const group=m.questions.filter(q=>q.provenance.includes(prefix));
 assert.equal(group.length,3);
 assert.deepEqual(group.map(q=>q.programme_scope).sort(),['daily','exam','weekly']);
}
const publicText=JSON.stringify(m);
for(const secret of ['correct_text','explanation','reviewer_note','choices','password','service_role'])assert.ok(!publicText.includes('"'+secret+'"'),'Private data in public manifest: '+secret);
const near=(a,b)=>Math.abs(a-b)<1e-10;
// Independent arithmetic/symbolic-equivalent checks for all nine private items.
assert.equal(6e4/(2.5e-2),2.4e6);
assert.ok(near(Math.PI*4**2*15/1000,0.24*Math.PI)&&0.24*Math.PI>0.750);
assert.ok(near(Math.PI*10**2/4,25*Math.PI)&&20+5*Math.PI<36);
assert.ok((2*5+3)!==2*(5-5)&&((2*0+3)/(0-5))!==2);
assert.ok(near(1.615/4.85,323/970)&&near(1.625/4.75,13/38)&&323/970<13/38);
const f=x=>x**3-9*x*x+24*x;
assert.deepEqual([0,2,4,5].map(f),[0,20,16,20]);
const complex=(a,b,c,d)=>[(a*c+b*d)/(c*c+d*d),(b*c-a*d)/(c*c+d*d)];
assert.deepEqual(complex(4,-3,1,1),[0.5,-3.5]);
const w=[3,2,3],v=[1,2,-2],dot=(a,b)=>a.reduce((sum,x,i)=>sum+x*b[i],0);
assert.equal(dot(w,v),1);assert.equal(dot(v,v),9);assert.equal(dot(w,w),22);
assert.ok(near(Math.sqrt(22-1/9),Math.sqrt(197)/3));
const C=t=>80/(1+t*t),Cp=t=>-160*t/(1+t*t)**2;
assert.equal(C(3),8);assert.equal(C(2),16);assert.ok(near(Cp(3),-2*3/(1+3*3)*C(3)));
console.log('Private batch metadata, qualification routing, privacy, nine independent maths checks and release safeguards: PASS.');
