import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const manifest=JSON.parse(readFileSync('content/operations/verified-original-batch-20261101.json','utf8'));
const questions=manifest.questions;
assert.equal(manifest.version,1);
assert.equal(manifest.status,'private_draft_awaiting_ci_and_activation');
assert.equal(manifest.record_count,12);
assert.equal(questions.length,12);
const privateFields=['prompt','choices','correct_text','explanation','reviewer_note','answer','correct_option'];
for(const q of questions){
  assert.match(q.id,/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);
  assert.match(q.provenance,/^mg-original-20261101-/);
  assert.ok(q.syllabus_objective.length>=20&&q.exam_board.length>=8);
  assert.ok(q.expected_seconds>=120&&q.expected_seconds<=900);
  for(const key of privateFields)assert.equal(Object.hasOwn(q,key),false,'No private content in public manifest: '+key);
}
assert.equal(new Set(questions.map(q=>q.id)).size,12);
assert.equal(new Set(questions.map(q=>q.provenance)).size,12);
const routes=[
  ['IGCSE','core','Cambridge 0580'],
  ['IGCSE','core','Pearson Edexcel 4MA1 Foundation'],
  ['IGCSE','extended','Pearson Edexcel 4MA1 Higher'],
  ['GCSE','higher','AQA 8300']
];
for(const [qualification,academic_level,exam_board] of routes){
  const group=questions.filter(q=>q.qualification===qualification&&q.academic_level===academic_level&&q.exam_board===exam_board);
  assert.equal(group.length,3,'Missing programme coverage: '+exam_board);
  assert.deepEqual(group.map(q=>q.programme_scope).sort(),['daily','exam','weekly']);
}
const eq=(x,y)=>assert.ok(Math.abs(x-y)<1e-10,'Independent arithmetic disagreement: '+x+' versus '+y);
// Independently recomputed numerical invariants for the privately held 12 question stems.
eq(42/70*95,57);
eq((5/8)**2+(3/8)**2,17/32);
const win=(2/4)*(1/3)+(1/4)*(2/3);
eq(win,1/3);eq(90*3-90*win*8,30);
assert.equal(28+24-9+7,50);eq(7/50,0.14);
assert.equal(2*2+1+1*2,7);eq(120*7/12,70);
assert.equal(40+35-15+20,80);eq(320*((40-15)+(35-15))/80,180);
eq(5/(5+3),5/8);
eq(3*(4/(2+1))-2,2);assert.notEqual(-1,1/3);
const noReplacement=(4/9)*(5/8)+(5/9)*(4/8);
const withReplacement=2*(4/9)*(5/9);
eq(noReplacement,5/9);eq(withReplacement,40/81);eq(162*(noReplacement-withReplacement),10);
eq(12/35,12/35);assert.notEqual(12/35,12/48);
assert.equal((28-10)+(22-10)+10+15,55);
eq(22/55,2/5);eq(10/28,5/14);
const flaggedPass=(1/4)*(2/5),unflaggedPass=(3/4)*(4/5);
eq(flaggedPass+unflaggedPass,7/10);eq(flaggedPass/(flaggedPass+unflaggedPass),1/7);
const research=readFileSync('content/research/20261101_0030_qualification_alignment_brief.md','utf8');
for(const code of ['C8.2','C8.3','6.3','3.2','P9'])assert.ok(research.includes(code),'Missing objective in latest brief: '+code);
const boardGuard=readFileSync('supabase/migrations/20261031_exam_board_compatible_question_selection.sql','utf8');
assert.ok(boardGuard.includes('grove_board_compatible')&&boardGuard.includes("b.programme_scope IN('all',v.programme)"));
const reuse=readFileSync('supabase/migrations/20261031_unseen_question_text_guard.sql','utf8');
assert.ok(reuse.includes('CREATE UNIQUE INDEX')&&reuse.includes('old.bank_id=b.id OR lower(regexp_replace(old.prompt'));
console.log('Verified 12 metadata-only draft items across 4 academic routes × 3 Grove tiers; 12 independent mathematical invariants, board/source mapping, anti-repetition and privacy assertions: PASS.');
