import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(p,'utf8');
const portal=read('portal.html'),studio=read('studio.html');
const student=read('assigned-practice.js'),admin=read('assigned-admin.js');
const studentApp=read('portal.js'),staffApp=read('studio.js'),schedule=read('supabase/UPGRADE_AUTOMATED_TIER_PRACTICE.sql'),trigger=read('supabase/AUTO_ASSIGN_ENROLLED_STUDENTS.sql');
const workflow=read('.github/workflows/pages.yml');
const required=[
['Student calendar',portal.includes('id="mg-auto-list"')&&portal.includes('id="mg-practice-workspace"')],
['Self-builder hidden',portal.includes('<div class="card paper-builder" hidden')],
['Student integration',studentApp.includes('initAssignedPractice(sb)')&&studentApp.includes('await assignedPractice?.refresh()')],
['Admin integration',staffApp.includes('initAssignedAdmin(db,state)')],
['Admin insights UI',studio.includes('id="mg-assigned-admin"')],
['Assigned task RPC',schedule.includes('public.grove_my_calendar()')&&schedule.includes('public.grove_task_start(p_task uuid)')],
['Timed engagement RPC',schedule.includes('public.grove_task_focus(p_task uuid,p_position integer,p_visible boolean)')],
['Saved answers + report',schedule.includes('public.grove_task_answer')&&schedule.includes('public.grove_task_finish')],
['Admin registered insights',schedule.includes('public.grove_admin_schedule')&&schedule.includes('seconds_visible')],
['Admin enrolment trigger',trigger.includes('CREATE TRIGGER grove_assign_on_entitlement')&&trigger.includes('CREATE TRIGGER grove_assign_on_academic_route')],
['Permission scope',schedule.includes("v_active->>'programme'<>v.programme")&&schedule.includes('private.is_staff(p_org)')],
['Private RLS',schedule.includes('ALTER TABLE private.grove_practice_bank ENABLE ROW LEVEL SECURITY')&&schedule.includes('private.grove_task_answers,private.grove_question_time FROM PUBLIC,anon,authenticated')],
['No leaked correct choices',!student.includes('correct_option')&&!student.includes('correct_text')],
['No old selectable builder in UI',portal.includes('<div class="card paper-builder" hidden')],
['Student assets published',workflow.includes('cp assigned-practice.js assigned-practice.css site/')],
['Admin assets published',workflow.includes('cp assigned-admin.js assigned-admin.css site/')]
];
for(const [name,ok] of required)assert.ok(ok,'Failed: '+name);
for(const [name,src] of [['student',student],['admin',admin]]){
  assert.ok(!src.includes('eval(')&&!src.includes('new Function('),'No arbitrary execution in '+name);
}
console.log('MathsGrove automated task calendar, tier rules, admin timing and RLS static checks: '+required.length+' PASS');
