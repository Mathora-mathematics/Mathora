import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const m=JSON.parse(readFileSync('content/operations/verified-original-batch-20261101-2300.json','utf8'));
const sql=readFileSync('supabase/migrations/20261101_2300_cambridge_9231_board_gate.sql','utf8');
assert.equal(m.version,1);
assert.equal(m.batch,'20261101-2300');
assert.equal(m.status,'private_drafts_pending_ci_and_publication');
assert.equal(m.record_count,9);
assert.equal(m.release_candidates,9);
assert.equal(m.questions.length,9);
assert.match(m.research_brief,/^content\/research\//);
assert.ok(m.privacy.includes('private question prompts'));
for(const key of ['independent_sympy','independent_javascript','four_distinct_options','one_key_per_question','worked_solutions','misconception_and_marking_guidance','katex_wrapped']) {
  assert.equal(m.verification[key],9,key);
}
assert.deepEqual([m.verification.prior_practice,m.verification.prior_baseline,m.verification.prior_assigned,m.verification.prior_baseline_assigned],[405,240,4,20]);
assert.equal(m.verification.compared_per_item,669);
assert.equal(m.verification.within_batch_pairs,36);
assert.equal(m.verification.exact_duplicates,0);
assert.equal(m.verification.near_duplicates_at_065,0);
assert.ok(m.verification.max_prior_token_jaccard<0.65);
assert.ok(m.verification.max_within_batch_jaccard<0.65);
assert.equal(m.verification.student_mutations,0);
const ids=new Set(),prov=new Set();
const routes=[
 ['A_LEVEL','a2','Cambridge 9709','9709-A2'],
 ['A_LEVEL','as','Pearson Edexcel IAL WMA11 P1','IAL-P1'],
 ['FURTHER_MATHS','further','Cambridge 9231','9231-P1']
];
for(const item of m.questions){
 assert.match(item.id,/^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/);
 assert.ok(!ids.has(item.id)&&!prov.has(item.provenance),'Repeated identifier or provenance');
 ids.add(item.id);prov.add(item.provenance);
 assert.ok(item.provenance.startsWith('mg-original-20261101-2300-'));
 assert.ok(['daily','weekly','exam'].includes(item.programme_scope));
 assert.ok(item.expected_seconds>=200&&item.expected_seconds<=900);
 assert.ok(item.syllabus_objective.length>=20);
 assert.ok(routes.some(([q,l,b,p])=>item.qualification===q&&item.academic_level===l&&item.exam_board===b&&item.provenance.startsWith('mg-original-20261101-2300-'+p)));
 for(const forbidden of ['prompt','choices','correct_text','correct_index','explanation','reviewer_note','password','service_role','api_key']){
  assert.ok(!Object.hasOwn(item,forbidden),'Public answer or credential leak: '+forbidden);
 }
}
for(const [q,l,b] of routes){
 const group=m.questions.filter(x=>x.qualification===q&&x.academic_level===l&&x.exam_board===b);
 assert.deepEqual(group.map(x=>x.programme_scope).sort(),['daily','exam','weekly']);
}
for(const url of Object.values(m.sources))assert.ok(url.startsWith('https://'));
assert.ok(sql.includes("IF b LIKE '%9231%' THEN RETURN s LIKE '%9231%'; END IF;"),'Further 9231 guard must precede generic Cambridge branch');
assert.ok(sql.indexOf("IF b LIKE '%9231%'")<sql.indexOf("IF b LIKE '%cambridge%'"),'Guard order matters');
assert.ok(sql.includes("IF b LIKE '%9709%' THEN RETURN s LIKE '%9709%'; END IF;"),'Preserve Cambridge 9709 guard');
assert.ok(sql.includes("IF b LIKE '%wma11%' THEN RETURN s LIKE '%wma11%'; END IF;"),'Preserve Pearson IAL P1 guard');
assert.ok(sql.includes('SECURITY INVOKER'),'Do not elevate function privileges');
assert.ok(m.notes.some(x=>x.includes('Human examiner marking')));
console.log('PASS: nine private question IDs, three academic routes x three tiers, privacy, source ledger, duplicate gate, no student mutations and exact Cambridge Further route guard.');
