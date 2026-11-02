import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const m=JSON.parse(readFileSync('content/operations/verified-original-batch-20261102-0500.json','utf8'));
assert.equal(m.version,1);
assert.equal(m.batch,'20261102-0500');
assert.equal(m.status,'private_drafts_pending_ci_and_deployment');
assert.equal(m.record_count,9);
assert.equal(m.release_candidates,9);
assert.equal(m.questions.length,9);
assert.match(m.privacy,/private Supabase/);
assert.match(m.research_brief,/20261102_0431/);
const v=m.verification;
for(const k of ['independent_sympy','independent_javascript','distinct_four_choices','single_key','substantial_worked_solutions','misconception_and_tutor_guidance','katex_delimiter_brace_checks']) assert.equal(v[k],9,k);
assert.deepEqual([v.prior_practice,v.prior_baseline,v.prior_assigned,v.prior_baseline_assigned],[432,240,4,20]);
assert.equal(v.compared_per_item,696);
assert.equal(v.within_batch_pairs,36);
assert.equal(v.exact_duplicates,0);
assert.equal(v.near_duplicates_at_065,0);
assert.equal(v.near_structural_at_085,0);
assert.ok(v.max_prior_token_jaccard<0.65);
assert.ok(v.max_prior_structural_jaccard<0.85);
assert.ok(v.max_within_batch_jaccard<0.65);
assert.equal(v.student_mutations,0);
assert.equal(new Set(m.questions.map(q=>q.id)).size,9);
assert.equal(new Set(m.questions.map(q=>q.provenance)).size,9);
for(const q of m.questions){
  assert.match(q.id,/^[0-9a-f]{8}-[0-9a-f-]{27}$/);
  assert.match(q.provenance,/^mg-original-20261102-0500-/);
  assert.equal(q.qualification,'A_LEVEL');
  assert.ok(['daily','weekly','exam'].includes(q.programme_scope));
  assert.ok(q.expected_seconds>=150&&q.expected_seconds<=900);
  assert.ok(q.syllabus_objective.length>20);
  for(const forbidden of ['prompt','choices','correct_text','explanation','reviewer_note','answer','solution','key']) assert.ok(!(forbidden in q),'Private content leaked: '+forbidden);
}
for(const [board,level] of [['Cambridge 9709 P4 Mechanics','as'],['Pearson Edexcel IAL WMA12 P2','as'],['Pearson Edexcel 9MA0 UK GCE','a2']]){
 const lane=m.questions.filter(q=>q.exam_board===board&&q.academic_level===level);
 assert.equal(lane.length,3,board);
 assert.deepEqual(lane.map(q=>q.programme_scope).sort(),['daily','exam','weekly'],board);
}
const migration=readFileSync('supabase/migrations/20261102_0500_9709_p4_ial_wma12_unit_gate.sql','utf8');
for(const guard of ["IF b LIKE '%wma12%' THEN RETURN s LIKE '%wma12%'; END IF;","IF b LIKE '%9709%' AND (b LIKE '%p4%' OR b LIKE '%mechanics%') THEN","IF b LIKE '%9ma0%' THEN","IF b LIKE '%wma11%' THEN","IF b LIKE '%9231%' THEN","IF b LIKE '%1ma1%' THEN","IF b LIKE '%4ma1%' THEN"])assert.ok(migration.includes(guard),'Missing routing guard: '+guard);
assert.ok(migration.includes('DO $verify$'),'Missing live migration regression');
assert.ok(!/\b(?:UPDATE|DELETE|TRUNCATE|INSERT)\s+(?:INTO\s+|FROM\s+)?(?:public\.|private\.)?(?:students|grove_tasks|grove_task_items|grove_practice_marks|answers|submissions)\b/i.test(migration),'Unexpected learner or examiner-marking mutation');
console.log('PASS: private nine-item ledger, three routes, mathematical QA attestation, routing regression, and non-mutation guard.');
