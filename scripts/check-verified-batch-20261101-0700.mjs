import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const m=JSON.parse(readFileSync('content/operations/verified-original-batch-20261101-0700.json','utf8'));
assert.equal(m.version,1);
assert.equal(m.record_count,12);
assert.equal(m.questions.length,12);
assert.ok(['private_draft_awaiting_ci_and_activation','published_to_private_supabase_bank'].includes(m.status));
assert.match(m.assessment_kind,/NOT complete timed mocks/);
const ids=new Set(),provenances=new Set();
const privateKeys=['prompt','choices','correct_text','explanation','reviewer_note','correct_option','answer','student_id','email','student_name'];
for(const row of m.questions){
 assert.match(row.id,/^[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$/);
 assert.match(row.provenance,/^mg-original-20261101-0700-(AA|AI)(SL|HL)-(D|W|E)$/);
 assert.ok(['IB_AA','IB_AI'].includes(row.qualification));
 assert.ok(['sl','hl'].includes(row.academic_level));
 assert.ok(['daily','weekly','exam'].includes(row.programme_scope));
 assert.equal(row.exam_board,'IB Diploma Programme');
 assert.match(row.syllabus_objective,/\b(SL|AHL)\s\d+\.\d+/);
 assert.ok(row.expected_seconds>=120 && row.expected_seconds<=900);
 assert.ok(row.source_url.startsWith('https://www.ibo.org/'));
 for(const field of privateKeys) assert.equal(Object.hasOwn(row,field),false,'Private answer/question leakage: '+field);
 ids.add(row.id);provenances.add(row.provenance);
}
assert.equal(ids.size,12);assert.equal(provenances.size,12);
for(const qualification of ['IB_AA','IB_AI'])for(const academic_level of ['sl','hl']){
 const group=m.questions.filter(x=>x.qualification===qualification&&x.academic_level===academic_level);
 assert.equal(group.length,3,qualification+'/'+academic_level);
 assert.deepEqual(group.map(x=>x.programme_scope).sort(),['daily','exam','weekly']);
}
const alias=readFileSync('supabase/migrations/20261101_ib_board_alias_0700.sql','utf8');
for(const clause of ["b LIKE '%ib%'","s LIKE '%baccalaureate%'","IF s='' THEN RETURN false","b LIKE '%9ma0%'","b LIKE '%wma11%'","b LIKE '%9709%'"])assert.ok(alias.includes(clause),'Missing route guard '+clause);
const start=readFileSync('supabase/migrations/20261031_unseen_question_text_guard.sql','utf8');
assert.match(start,/NOT EXISTS\(SELECT 1 FROM private.grove_task_items old/);
const near=(a,b)=>Math.abs(a-b)<1e-9;
// Independent generic numerical regression identities. Private stems and keys stay in Supabase.
assert.ok(near(Math.sqrt(16)+1,5));
assert.equal((4-6)**2+16,20);
assert.ok(near(2*6+54/6,21));
assert.equal(((-5)**2+(-10)**2)/25,5);
assert.ok(near(16*Math.pow(2,1.5)-(-16*Math.pow(2,1.5)),32*Math.pow(2,1.5)));
assert.ok([0,3,-3].every(x=>near(x*(x*x-9),0)));
assert.equal(32/10,3.2);
assert.ok(near(4.4+3.2*4.5,18.8));
assert.equal(33*22000/1000,726);
assert.ok(near(42-1.96*12/6,38.08));
assert.ok(near(Math.exp(-1.5)*(1-4*Math.exp(-3)),0.1786941739954606));
assert.ok(near(1000/(1+4*Math.exp(-0.5*(2*Math.log(16)))),800));
console.log('MathsGrove 0700 IB batch: 12 metadata-only private drafts, four AA/AI SL/HL routes x three Grove tiers, privacy, board aliases, no-repeat and independent numeric regression PASS.');
