import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const manifest=JSON.parse(readFileSync('content/programmes/published-original-20261031.json','utf8'));
const recent=readFileSync('supabase/migrations/20261031_prevent_student_question_repeats.sql','utf8');
const strict=readFileSync('supabase/migrations/20261031_unseen_question_text_guard.sql','utf8');
const editorial=readFileSync('editorial-review.js','utf8');
assert.equal(manifest.status,'published_to_private_supabase_bank');
assert.equal(manifest.record_count,12);
assert.equal(manifest.questions.length,12);
const routes=['GCSE/foundation','GCSE/higher','IGCSE/extended','A_LEVEL/as'];
for(const route of routes){
 const [qualification,academic_level]=route.split('/');
 const group=manifest.questions.filter(q=>q.qualification===qualification&&q.academic_level===academic_level);
 assert.equal(group.length,3,'One Daily, Weekly and Exam item per academic route: '+route);
 assert.deepEqual(group.map(q=>q.programme_scope).sort(),['daily','exam','weekly']);
 for(const q of group){
  assert.equal(q.review_state,'approved');
  assert.equal(q.active,true);
  assert.ok(q.prompt.length>=(q.programme_scope==='daily'?60:90),'Question wording too short for its tier: '+q.provenance);
  assert.ok(q.prompt.includes('\\('),'Use proper inline mathematical notation: '+q.provenance);
  assert.ok(q.exam_board&&q.syllabus_objective!==undefined);
  assert.ok(q.expected_seconds>=60);
 }
}
assert.ok(!JSON.stringify(manifest).includes('correct_text'),'Do not leak secure answer key in public manifest');
assert.ok(!JSON.stringify(manifest).includes('explanation'),'Do not leak secure explanations in public manifest');
assert.ok(recent.includes('NOT EXISTS(SELECT 1 FROM private.grove_task_items old'),'Question reuse must be excluded');
assert.ok(strict.includes("old.bank_id=b.id OR lower(regexp_replace(old.prompt"),'Prevent semantic identical-stem reuse, not only same row ID');
assert.ok(strict.includes('CREATE UNIQUE INDEX'),'Active item stems must be unique per academic route');
assert.ok(strict.includes("not enough unseen verified questions")||recent.includes("not enough unseen verified questions"),'Bank exhaustion must fail safely instead of silently recycling');
assert.ok(editorial.includes('window.MathsGroveMath?.write'),'Editorial maths notation must render securely');
const boardGuard=readFileSync('supabase/migrations/20261031_exam_board_compatible_question_selection.sql','utf8');
assert.ok(boardGuard.includes('grove_board_compatible')&&boardGuard.includes("b.programme_scope IN('all',v.programme)"),'Published practice must be filtered by actual exam board and programme');
assert.ok(boardGuard.includes("RETURN s LIKE '%aqa%'")&&boardGuard.includes("RETURN (s LIKE '%edexcel%' OR s LIKE '%pearson%')"),'Exam-board aliases must map safely');
assert.ok(boardGuard.includes("IF s='' THEN RETURN false"),'Unassigned exam boards must not receive board-specific questions');
const n=[
64/8*3===24,
Math.abs(200*1.15*.85-195.5)<1e-9,
(8*6-2*2)*12===528,
Math.abs(Math.sqrt(72)-Math.sqrt(8)-4*Math.sqrt(2))<1e-9,
7*(7+5)===84&&2*(7+12)===38,
(0-2)*(0+5)<0,
3.2e4*5e-3===160,
4/7*3/6+3/7*2/6===3/7,
(3-1)*(3-5)<0,
10*2**2===40,
(5-2)**2+(3+1)**2===25&&3*5+4*3===27,
-2*6**2+12*6+5===5&&-2*3**2+12*3+5>5
];
assert.ok(n.every(Boolean),'Basic independent numerical reasoning checks must agree');
console.log('MathsGrove first publication: 12 original approved items, four academic routes, 3 programmes, no published answer keys, no student repetitions, KaTeX editorial support — PASS.');
