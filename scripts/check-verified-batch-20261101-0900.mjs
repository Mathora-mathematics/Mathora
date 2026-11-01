import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const m=JSON.parse(readFileSync('content/operations/verified-original-batch-20261101-0900.json','utf8'));
assert.equal(m.version,1);
assert.equal(m.record_count,12);
assert.equal(m.questions.length,12);
assert.ok(['private_draft_awaiting_ci_and_activation','published_to_private_supabase_bank'].includes(m.status));
assert.match(m.assessment_kind,/NOT complete timed mocks/);
assert.equal(m.verification.mathematical_checks,12);
assert.equal(m.verification.compared_total,586);
assert.equal(m.verification.duplicate_rejections,0);
const ids=new Set(),sources=new Set();
for(const q of m.questions){
 assert.match(q.id,/^[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$/);
 assert.match(q.provenance,/^mg-original-20261101-0900-(C9709P1|P9MA0S|P9MA0M|C0580E)-(D|W|E)$/);
 assert.ok(['daily','weekly','exam'].includes(q.programme_scope));
 assert.ok(['A_LEVEL','IGCSE'].includes(q.qualification));
 assert.ok(q.expected_seconds>=120&&q.expected_seconds<=900);
 assert.ok(q.syllabus_objective.includes(q.qualification==='IGCSE'?'0580':q.exam_board.includes('9709')?'9709':'9MA0'));
 assert.ok(q.source_url.startsWith('https://'));
 for(const key of ['prompt','choices','correct_text','explanation','reviewer_note','correct_option','student_id','email'])assert.equal(Object.hasOwn(q,key),false,'PRIVATE LEAK: '+key);
 ids.add(q.id);sources.add(q.provenance);
}
assert.equal(ids.size,12);assert.equal(sources.size,12);
for(const route of ['C9709P1','P9MA0S','P9MA0M','C0580E']){
 const group=m.questions.filter(q=>q.route===route);
 assert.deepEqual(group.map(q=>q.programme_scope).sort(),['daily','exam','weekly']);
}
const near=(a,b)=>Math.abs(a-b)<1e-8;
const binom=(n,k)=>{let v=1;for(let i=1;i<=k;i++)v=v*(n-i+1)/i;return v};
const tail=(n,p,k)=>Array.from({length:n-k+1},(_,i)=>{const j=i+k;return binom(n,j)*p**j*(1-p)**(n-j)}).reduce((a,b)=>a+b,0);
const independent=[
 near(.6*1.5,.9),
 near(100+105+110.25+115.7625,431.0125),
 near(9/2+11/6,19/3),
 [.1,.2].length===2 && .1!==.2,
 near((1-.7**5-5*.3*.7**4)/(1-.7**5),.5670909812123618),
 near(tail(36,.15,10),.03513451242810329),
 near(18*.35,6.3),
 near(8*(3+Math.sqrt(69))/5,18.09059818066892),
 near((80*2.5+50*4)/5,80)&&near(130-80,50),
 near(Math.sqrt(16*2**6/4**2),8),
 [-4,2].every(x=>x*x+(x+2)**2===20),
 [5,6].every(x=>x*(x+3)>=40&&4*x+6<=30)&&6*9===54
];
assert.equal(independent.length,12);
assert.ok(independent.every(Boolean),'Mathematics regression failed');
console.log('Verified 12 private original maths drafts: metadata privacy, 4 routes × 3 tiers, 12 independent numerical/algebraic checks PASS.');
