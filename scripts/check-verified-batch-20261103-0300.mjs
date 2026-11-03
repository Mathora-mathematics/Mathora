import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const m=JSON.parse(readFileSync('content/operations/verified-original-batch-20261103-0300.json','utf8'));
assert.equal(m.version,1);
assert.equal(m.batch,'20261103-0300');
assert.ok(['staged_pending_ci','published_database_verified'].includes(m.status));
assert.equal(m.questions.length,9);
assert.equal(new Set(m.questions.map(q=>q.id)).size,9);
const checks=['sympy_independent','javascript_independent','sql_independent','distinct_four_choices','one_key'];
for(const k of checks) assert.equal(m.qa[k],9,k);
assert.equal(m.qa.tex_fields,54);
assert.equal(m.qa.prior_comparisons,22410);
assert.equal(m.qa.prior_compared_per_question,2490);
assert.equal(m.qa.within_batch_pairs,36);
for(const k of ['exact_duplicates','masked_duplicates','near_duplicates','previously_assigned','legacy_drafts_activated']) assert.equal(m.qa[k],0,k);
assert.ok(m.qa.maximum_prior_jaccard<0.74);
assert.equal(m.qa.board_positive,9);
assert.equal(m.qa.board_negative,18);
const sourceDomains=['www.ibo.org','www.cambridgeinternational.org','qualifications.pearson.com'];
for(const q of m.questions){
 assert.match(q.id,/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);
 assert.ok(['daily','weekly','exam'].includes(q.mode));
 assert.ok(q.expected_seconds>=180&&q.expected_seconds<=600);
 assert.ok(sourceDomains.includes(new URL(q.syllabus).hostname));
 for(const forbidden of ['prompt','choices','correct_text','explanation','reviewer_note','solution','key','email','student_id'])assert.ok(!(forbidden in q),'Private data leaked: '+forbidden);
}
for(const [qual,board,level] of [['IB_AI','IB Diploma Programme','hl'],['A_LEVEL','Cambridge 9709 P1 Pure Mathematics 1','as'],['FURTHER_MATHS','Pearson Edexcel 9FM0 Core Pure','further']]){
 const lane=m.questions.filter(q=>q.qualification===qual&&q.board===board&&q.level===level);
 assert.equal(lane.length,3,board);
 assert.deepEqual(lane.map(q=>q.mode).sort(),['daily','exam','weekly']);
}
assert.equal(m.signature.status,'awaiting_human_moderation');
assert.equal(m.signature.human_signoff,false);
assert.equal(m.signature.criteria_marks,24);
assert.equal(m.signature.marks,24);
assert.equal(m.student_aggregate_before.human_marks,10);
assert.ok(!('secrets' in m));
if(m.publication){assert.equal(m.publication.approved_active,9);assert.equal(m.publication.student_mutations,0);}
console.log('MathsGrove 20261103-0300 nine-item metadata, exact routes, source provenance, privacy and Signature gate: PASS.');
