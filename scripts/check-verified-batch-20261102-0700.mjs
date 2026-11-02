import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const m=JSON.parse(readFileSync('content/operations/verified-original-batch-20261102-0700.json','utf8'));
assert.equal(m.version,1);
assert.equal(m.batch,'20261102-0700');
assert.equal(m.status,'private_drafts_pending_ci_and_deployment');
assert.equal(m.record_count,9);
assert.equal(m.release_candidates,9);
assert.equal(m.questions.length,9);
assert.match(m.privacy,/private Supabase/);
assert.match(m.research_brief,/20261102_0627/);
const v=m.verification;
for(const k of ['independent_sympy','independent_javascript','independent_symbolic_option_uniqueness','distinct_four_choices','single_key','substantial_worked_solutions','misconception_and_tutor_guidance','katex_delimiter_brace_checks'])assert.equal(v[k],9,k);
assert.deepEqual([v.prior_practice,v.prior_baseline,v.prior_assigned,v.prior_baseline_assigned],[441,240,4,20]);
assert.equal(v.compared_per_item,705);
assert.equal(v.within_batch_pairs,36);
assert.equal(v.exact_duplicates,0);
assert.equal(v.near_duplicates_at_065,0);
assert.equal(v.near_structural_at_085,0);
assert.ok(v.max_prior_token_jaccard<.65);
assert.ok(v.max_prior_structural_jaccard<.85);
assert.ok(v.max_within_batch_jaccard<.65);
assert.equal(v.student_mutations,0);
assert.equal(new Set(m.questions.map(q=>q.id)).size,9);
assert.equal(new Set(m.questions.map(q=>q.provenance)).size,9);
for(const q of m.questions){
 assert.match(q.id,/^[0-9a-f]{8}-[0-9a-f-]{27}$/);
 assert.match(q.provenance,/^mg-original-20261102-0700-/);
 assert.ok(['daily','weekly','exam'].includes(q.programme_scope));
 assert.ok(q.expected_seconds>=180&&q.expected_seconds<=900);
 assert.ok(q.syllabus_objective.length>4);
 for(const forbidden of ['prompt','choices','correct_text','explanation','reviewer_note','answer','solution','key'])assert.ok(!(forbidden in q),'Private content leaked: '+forbidden);
}
for(const [board,qual,level] of [['Cambridge 0580 Extended','IGCSE','extended'],['TMUA','TMUA','tmua'],['Pearson Edexcel 9FM0 4B Further Statistics 2','FURTHER_MATHS','further']]){
 const route=m.questions.filter(q=>q.exam_board===board&&q.qualification===qual&&q.academic_level===level);
 assert.equal(route.length,3,board);
 assert.deepEqual(route.map(q=>q.programme_scope).sort(),['daily','exam','weekly'],board);
}
const migration=readFileSync('supabase/migrations/20261102_0700_9fm0_4b_option_guard.sql','utf8');
for(const required of ["IF b LIKE '%9fm0%' AND (b LIKE '%4b%' OR b LIKE '%further statistics 2%') THEN","RETURN s LIKE '%9fm0%' AND (s LIKE '%4b%' OR s LIKE '%further statistics 2%');","IF b LIKE '%9ma0%' THEN","IF b LIKE '%wma12%' THEN","IF b LIKE '%9709%' AND (b LIKE '%p4%' OR b LIKE '%mechanics%') THEN","IF b LIKE '%9231%' THEN","IF b LIKE '%0580%' THEN","IF b LIKE '%1ma1%' THEN","IF b LIKE '%4ma1%' THEN","DO $verify$"])assert.ok(migration.includes(required),'Missing routing guard '+required);
assert.ok(!/\b(?:UPDATE|DELETE|TRUNCATE|INSERT)\s+(?:INTO\s+|FROM\s+)?(?:public\.|private\.)?(?:students|grove_tasks|grove_task_items|grove_practice_marks|answers|submissions)\b/i.test(migration),'Unexpected learner or examiner marking mutation');
console.log('PASS: 9 private drafts, routing, metadata, math QA attestations, duplicate guard and privacy.');
