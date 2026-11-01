import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const m=JSON.parse(readFileSync('content/operations/verified-original-batch-20261101-1910.json','utf8'));
assert.equal(m.version,1);
assert.equal(m.batch,'20261101-1910');
assert.equal(m.record_count,9);
assert.equal(m.release_candidates,9);
assert.equal(m.questions.length,9);
assert.equal(m.status,'private_drafts_pending_ci_and_publication');
assert.equal(m.verification.sympy_independent,9);
assert.equal(m.verification.javascript_independent,9);
assert.equal(m.verification.prior_practice,387);
assert.equal(m.verification.prior_baseline,240);
assert.equal(m.verification.prior_assigned_snapshots,4);
assert.equal(m.verification.compared_per_item,631);
assert.equal(m.verification.exact_duplicates,0);
assert.equal(m.verification.near_duplicate_rejections,0);
assert.ok(m.verification.maximum_token_jaccard<0.65);
assert.equal(m.verification.four_distinct_options,9);
assert.equal(m.verification.one_correct_key,9);
assert.equal(m.verification.complete_worked_solutions,9);
assert.equal(m.verification.student_mutations,0);
const ids=new Set(),provenances=new Set();
const routes=[
  ['GCSE','higher','AQA 8300','AQA-H'],
  ['IGCSE','extended','Cambridge 0580','CIE-EXT'],
  ['A_LEVEL','as','Cambridge 9709','CIE-AS']
];
for(const item of m.questions){
  assert.match(item.id,/^[a-f0-9]{8}(-[a-f0-9]{4}){3}-[a-f0-9]{12}$/);
  assert.ok(!ids.has(item.id)&&!provenances.has(item.provenance),'Duplicate ID/provenance');
  ids.add(item.id);provenances.add(item.provenance);
  assert.ok(['daily','weekly','exam'].includes(item.programme_scope));
  assert.ok(item.expected_seconds>=180&&item.expected_seconds<=900);
  assert.ok(item.syllabus_objective.length>20);
  assert.equal(item.release_candidate,true);
  assert.ok(routes.some(([qualification,level,board,prefix])=>
    item.qualification===qualification&&item.academic_level===level&&item.exam_board===board&&item.provenance.startsWith('mg-original-20261101-1910-'+prefix)));
  for(const secret of ['prompt','choices','correct_text','explanation','reviewer_note','password','api_key','service_role']){
    assert.ok(!Object.hasOwn(item,secret),'Public answer leak: '+secret);
  }
}
for(const [qualification,level,board] of routes){
  const group=m.questions.filter(x=>x.qualification===qualification&&x.academic_level===level&&x.exam_board===board);
  assert.equal(group.length,3);
  assert.deepEqual(group.map(x=>x.programme_scope).sort(),['daily','exam','weekly']);
}
assert.ok(m.research_brief.startsWith('content/research/'));
for(const u of Object.values(m.sources))assert.ok(u.startsWith('https://'));
console.log('PASS: nine private-bank IDs, three strict qualification routes, complete verification ledger, zero public answer material.');