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
assert.ok(sql.includes("IF v.status<>'scheduled' THEN RETURN private.grove_payload(p_task);END IF;"),
  'Existing active/completed tasks must remain unaffected by the new assignment gate');
const boardMigrations=migrations.map(name=>({name,sql:readFileSync('supabase/migrations/'+name,'utf8')}))
  .filter(x=>/CREATE OR REPLACE FUNCTION\s+private\.grove_board_compatible\s*\(/i.test(x.sql));
assert.ok(boardMigrations.length>0,'Missing board-compatibility migration');
const board=boardMigrations.at(-1);
assert.ok(board.sql.includes("IF b LIKE '%wma11%' THEN RETURN s LIKE '%wma11%';END IF;"),
  'IAL P1 items must match WMA11 specifically, not every IAL unit');
assert.ok(!board.sql.includes("IF b LIKE '%wma11%' OR b LIKE '%ial%'"),
  'Broad IAL match must not override the exact P1 guard');
assert.ok(board.sql.includes("IF b LIKE '%9ma0%' THEN RETURN s LIKE '%9ma0%';END IF;"),
  'UK GCE route must remain strict');
console.log('Practice publication/repetition guard: PASS ('+latest.name+')');
