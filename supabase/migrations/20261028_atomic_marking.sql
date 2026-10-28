-- MathsGrove atomic examiner marking and release.
-- Run after the base portal schema and admin-invitation migration.
-- Staff review is controlled in Postgres: browsers cannot directly write reviews.
create or replace function public.save_marking_review(
  p_attempt uuid,
  p_items jsonb,
  p_release boolean default false
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_attempt public.attempts%rowtype;
  v_item jsonb;
  v_question uuid;
  v_marks integer;
  v_max integer;
  v_comment text;
  v_expected integer;
  v_recorded integer;
  v_index integer := 0;
begin
  if v_user is null then raise exception 'Authentication required'; end if;

  select * into v_attempt from public.attempts where id=p_attempt for update;
  if v_attempt.id is null then raise exception 'Paper not found'; end if;
  if v_attempt.status <> 'submitted' then
    raise exception 'Only submitted papers can be marked; released reports are locked';
  end if;
  if not exists(
    select 1 from public.memberships m
    where m.org_id=v_attempt.org_id and m.user_id=v_user
    and m.member_role in ('admin','partner','examiner')
  ) then raise exception 'Not authorised to mark this organisation''s work'; end if;

  if p_items is null or jsonb_typeof(p_items)<>'array' or
     jsonb_array_length(p_items) < 1 or jsonb_array_length(p_items)>100 then
    raise exception 'Invalid mark list';
  end if;

  for v_item in select value from jsonb_array_elements(p_items) loop
    if jsonb_typeof(v_item)<>'object' then raise exception 'Invalid mark item'; end if;
    v_question := (v_item->>'question_id')::uuid;
    v_marks := (v_item->>'marks_awarded')::integer;
    v_comment := trim(coalesce(v_item->>'feedback',''));
    if v_marks is null or v_comment is null or length(v_comment)>5000 then
      raise exception 'Invalid marks or feedback';
    end if;
    select q.marks into v_max from public.question_bank q
      join public.answers ans on ans.question_id=q.id
      where q.id=v_question and ans.attempt_id=p_attempt;
    if v_max is null or v_marks<0 or v_marks>v_max then
      raise exception 'Mark is outside the approved question range';
    end if;
    if p_release and length(v_comment)=0 then
      raise exception 'Feedback required for all released questions';
    end if;
    insert into public.reviews(attempt_id,question_id,reviewer_id,marks_awarded,feedback)
    values(p_attempt,v_question,v_user,v_marks,v_comment)
    on conflict(attempt_id,question_id)
    do update set marks_awarded=excluded.marks_awarded,
                  feedback=excluded.feedback,
                  reviewer_id=excluded.reviewer_id;
    v_index := v_index + 1;
  end loop;

  if p_release then
    select count(*) into v_expected from public.answers where attempt_id=p_attempt;
    select count(*) into v_recorded from public.reviews
      where attempt_id=p_attempt and length(trim(feedback))>0;
    if v_expected<1 or v_expected<>v_recorded then
      raise exception 'Every answered question must have marks and feedback before release';
    end if;
    update public.attempts set status='marked' where id=p_attempt;
  end if;

  return jsonb_build_object('ok',true,'saved_count',v_index,'released',p_release);
end;
$$;

revoke all on function public.save_marking_review(uuid,jsonb,boolean) from public,anon;
grant execute on function public.save_marking_review(uuid,jsonb,boolean) to authenticated;

-- Prevent student browsers and ordinary staff from circumventing the review workflow.
revoke insert,update,delete on public.reviews from authenticated;
-- Only the staff-only database function above can create or release marks.
-- Existing examiner panel in portal.html now links to studio.html.

-- Provide working criteria for the original pilot samples.
insert into public.mark_schemes(question_id,scheme)
select q.id,
  case
    when q.prompt like 'Solve x² − 7x + 12%' then 'M1 factorisation into (x−3)(x−4). A1 root x=3. A1 root x=4.'
    when q.prompt like 'Solve 3(2x%' then 'M1 expand 6x−3=4x+9. M1 isolate 2x=12. A1 x=6.'
    when q.prompt like 'A right-angled triangle%' then 'M1 state Pythagoras. M1 calculate 6²+8²=100. A1 10 cm.'
    when q.prompt like 'Evaluate 3/4 + 5/6%' then 'M1 use common denominator 12. M1 obtain 9/12+10/12=19/12. A1 simplify to 1 7/12 or 19/12.'
    when q.prompt like 'Solve x + y = 10%' then 'M1 consistent elimination/substitution. M1 form 3x=15. A1 x=5. A1 y=5.'
    when q.prompt like 'Differentiate f(x) = 3x³%' then 'B1 9x². B1 −10x. B1 +7.'
    when q.prompt like 'Find the indefinite integral%' then 'B1 2x³. B1 −2x². B1 +x. B1 +C.'
    when q.prompt like 'For f(x) = x²%' then 'M1 complete square or x=−b/(2a). A1 x=3. M1 substitute. A1 y=−4.'
    when q.prompt like 'A sample contains values%' then 'M1 sum observations to 40. A1 divide by 5 to obtain 8.'
    when q.prompt like 'Without a calculator%' then 'M1 identify roots 3 and 4. A1 sum is 7. B1 suitable explanation.'
  end
from public.question_bank q
where q.prompt like 'Solve x² − 7x + 12%'
   or q.prompt like 'Solve 3(2x%'
   or q.prompt like 'A right-angled triangle%'
   or q.prompt like 'Evaluate 3/4 + 5/6%'
   or q.prompt like 'Solve x + y = 10%'
   or q.prompt like 'Differentiate f(x) = 3x³%'
   or q.prompt like 'Find the indefinite integral%'
   or q.prompt like 'For f(x) = x²%'
   or q.prompt like 'A sample contains values%'
   or q.prompt like 'Without a calculator%'
on conflict(question_id) do nothing;
