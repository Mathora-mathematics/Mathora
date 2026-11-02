import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const m=JSON.parse(readFileSync('content/operations/verified-original-batch-20261102-0900.json','utf8'));
assert.equal(m.version,1);assert.equal(m.batch,'20261102-0900');
assert.ok(['private_drafts_pending_ci_and_deployment','published_database_verified'].includes(m.status));
assert.equal(m.record_count,9);assert.equal(m.release_candidates,9);assert.equal(m.questions.length,9);
assert.match(m.privacy,/private Supabase/);
assert.match(m.research_brief,/20261102_0627/);
const v=m.verification;
for(const k of ['independent_sympy','independent_javascript','independent_option_math','distinct_four_choices','single_key','substantial_worked_solutions','misconception_and_tutor_guidance','katex_delimiter_brace_checks'])assert.equal(v[k],9,k);
assert.deepEqual([v.prior_practice,v.prior_baseline,v.prior_assigned,v.prior_baseline_assigned,v.prior_legacy],[450,240,4,20,10]);
assert.equal(v.compared_per_item,724);assert.equal(v.comparisons_total,9*724);
assert.equal(v.within_batch_pairs,36);
assert.equal(v.exact_duplicates,0);assert.equal(v.near_duplicates_at_065,0);
assert.ok(v.max_prior_token_jaccard<.65);assert.ok(v.max_within_batch_jaccard<.65);
assert.equal(v.pre_draft_structural_rejections,1);assert.equal(v.student_mutations,0);
assert.equal(new Set(m.questions.map(q=>q.id)).size,9);
assert.equal(new Set(m.questions.map(q=>q.provenance)).size,9);
for(const q of m.questions){
 assert.match(q.id,/^[0-9a-f]{8}-[0-9a-f-]{27}$/);
 assert.match(q.provenance,/^mg-original-20261102-0900-/);
 assert.ok(['daily','weekly','exam'].includes(q.programme_scope));
 assert.ok(q.expected_seconds>=180&&q.expected_seconds<=900);
 assert.ok(q.syllabus_objective.length>2);
 for(const forbidden of ['prompt','choices','correct_text','explanation','reviewer_note','answer','solution','key'])assert.ok(!(forbidden in q),'Private content leaked: '+forbidden);
}
for(const [board,qual,level] of [['Pearson Edexcel 1MA1','GCSE','foundation'],['Cambridge 0580','IGCSE','core'],['Pearson Edexcel IAL WMA12 P2','A_LEVEL','as']]){
 const route=m.questions.filter(q=>q.exam_board===board&&q.qualification===qual&&q.academic_level===level);
 assert.equal(route.length,3,board);
 assert.deepEqual(route.map(q=>q.programme_scope).sort(),['daily','exam','weekly'],board);
}
console.log('PASS: 9 original private drafts; routing, syllabus metadata, QA ledger, duplicates, privacy.');
