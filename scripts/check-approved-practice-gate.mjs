import assert from 'node:assert/strict';
import {readFileSync,readdirSync} from 'node:fs';

// Regression check: future migrations must not silently restore the baseline-repeating
// or unapproved-question assignment path. This is a static migration test, not a live RPC test.
const migrations=readdirSync('supabase/migrations').filter(x=>x.endsWith('.sql')).sort();
const candidates=migrations.map(name=>({name,sql:readFileSync('supabase/migrations/'+name,'utf8')}))
  .filter(x=>/CREATE OR REPLACE FUNCTION\s+public\.grove_task_start\s*\(/i.test(x.sql));
assert.ok(candidates.length>0,'Missing task-start SQL migration');
const latest=candidates.at(-1);
const sql=latest.sql;
const occurrences=(re)=>[...sql.matchAll(re)].length;
assert.equal(occurrences(/b\.review_state\s*=\s*'approved'/g),2,
  'Both eligibility count and assignment selection must require editorial approval');
assert.equal(occurrences(/FROM private\.baseline_bank base/g),2,
  'Both eligibility count and assignment selection must exclude baseline questions');
assert.ok(sql.includes('private.grove_board_compatible('),
  'Exam-board compatibility filter must be preserved');
assert.ok(sql.includes('prev.student_id=v_uid'),
  'Per-student historical repeat protection must be preserved');
assert.ok(sql.includes('Not enough approved, non-baseline, unseen questions'),
  'Content shortage must fail closed with a clear explanation');
assert.ok(!/\b(?:DELETE\s+FROM|TRUNCATE|UPDATE\s+private\.grove_tasks)\b/i.test(sql),
  'Guard migration must not mutate student assignment records');
console.log('Practice publication/repetition guard: PASS ('+latest.name+')');
