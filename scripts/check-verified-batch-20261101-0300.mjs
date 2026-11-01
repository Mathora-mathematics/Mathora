import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const m=JSON.parse(readFileSync('content/operations/verified-original-batch-20261101-0300.json','utf8'));
assert.equal(m.version,1);assert.equal(m.record_count,9);assert.equal(m.questions.length,9);
assert.equal(m.status,'private_draft_awaiting_ci_and_activation');
assert.match(m.assessment_kind,/NOT full mocks/);
const hidden=['prompt','choices','correct_text','explanation','reviewer_note','answer','correct_option','student_id','email'];
for(const q of m.questions){
 assert.match(q.id,/^[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$/);
 assert.match(q.provenance,/^mg-original-20261101-0300-/);
 assert.ok(q.syllabus_objective.length>=14 && q.expected_seconds>=120 && q.expected_seconds<=900);
 for(const key of hidden)assert.equal(Object.hasOwn(q,key),false,'Private field in public manifest: '+key);
}
assert.equal(new Set(m.questions.map(q=>q.id)).size,9);
assert.equal(new Set(m.questions.map(q=>q.provenance)).size,9);
for(const [qualification,level,board] of [
 ['FURTHER_MATHS','further','Cambridge 9231'],
 ['FURTHER_MATHS','further','Pearson Edexcel 9FM0 Core Pure'],
 ['TMUA','tmua','TMUA']
]){
 const a=m.questions.filter(q=>q.qualification===qualification&&q.academic_level===level&&q.exam_board===board);
 assert.equal(a.length,3,'Route count '+board);
 assert.deepEqual(a.map(q=>q.programme_scope).sort(),['daily','exam','weekly']);
}
const mult=(a,b)=>{const c=Array(a.length+b.length-1).fill(0);for(let i=0;i<a.length;i++)for(let j=0;j<b.length;j++)c[i+j]+=a[i]*b[j];return c;};
assert.deepEqual(mult([-4,1],[-2,-3,1]),[8,10,-7,1],'Cambridge cubic Vieta');
const gcd=(a,b)=>b===0n?a:gcd(b,a%b);
let num=0n,den=1n;
for(let r=1n;r<=8n;r++){num=num*r*(r+2n)+den;den*=r*(r+2n);let g=gcd(num,den);num/=g;den/=g;}
assert.equal(num,29n);assert.equal(den,45n);
const mm=(a,b)=>a.map(row=>b[0].map((_,j)=>row.reduce((s,v,k)=>s+v*b[k][j],0)));
const mv=(a,v)=>a.map(row=>row.reduce((s,z,i)=>s+z*v[i],0));
const det=a=>a[0][0]*a[1][1]-a[0][1]*a[1][0];
const A=[[1,2],[0,1]],B=[[-1,0],[0,2]],BA=mm(B,A);
assert.deepEqual(BA,[[-1,-2],[0,2]]);assert.deepEqual(mv(BA,[2,1]),[-4,2]);assert.equal(det(BA),-2);
assert.deepEqual(mult([-1,1],[-1,1]),[1,-2,1]); // real part before +4i² correction
assert.deepEqual([1+4,-2,1],[5,-2,1]); // conjugate-pair real factor
const R=[[-1,0],[0,1]],S=[[1,3],[0,1]],SR=mm(S,R);
assert.deepEqual(SR,[[-1,3],[0,1]]);assert.deepEqual(mv(SR,[2,-1]),[-5,-1]);assert.equal(det(SR),-1);
assert.deepEqual(mult([5,-2,1],mult([-3,1],[-2,1])),[30,-37,21,-7,1]);
assert.equal(4*3*3-36,0);assert.equal(4*(-3)*(-3)-36,0);
assert.ok(3>0 && -3<0);
const left=x=>(x-3)*(x+2),right=x=>(x-3)*(2*x+1);
for(const x of [1,3])assert.equal(left(x),right(x));
assert.notEqual(left(2),right(2));
for(let mask=0;mask<16;mask++){
 const truth=[0,1,2,3].map(i=>Boolean(mask&(1<<i)));
 assert.equal(!truth.every(Boolean),truth.some(v=>!v),'Quantifier negation');
}
const repeat=readFileSync('supabase/migrations/20261031_unseen_question_text_guard.sql','utf8');
const boards=readFileSync('supabase/migrations/20261031_exam_board_compatible_question_selection.sql','utf8');
assert.match(repeat,/NOT EXISTS\(SELECT 1 FROM private.grove_task_items old/);
assert.match(boards,/grove_board_compatible/);
console.log('Batch 0300: 9 metadata-only original questions, 3 board routes x 3 tiers, independent exact arithmetic and logic, privacy and selection regression — PASS.');
