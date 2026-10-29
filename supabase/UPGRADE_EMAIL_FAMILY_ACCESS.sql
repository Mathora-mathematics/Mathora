-- MathsGrove | Email-first student enrolment + Grove Exam family/tutor access
-- RUN MANUALLY AFTER supabase/UPGRADE_MATHSGROVE_ADMIN.sql.
-- Review with a backup and adult test users. This code is NOT installed by Pages deployment.
-- No direct SELECT/INSERT/UPDATE grants on link tables to browser roles.
begin;

alter table public.pending_student_setups
 add column if not exists student_name text not null default '' check (length(student_name)<=100);

create or replace function public.set_pending_student_name(p_org uuid,p_email text,p_name text)
returns jsonb language plpgsql security definer set search_path='' as $$
declare v_email text:=lower(trim(coalesce(p_email,''))); v_name text:=trim(coalesce(p_name,''));
begin
 if (select auth.uid()) is null or not private.is_partner(p_org) then raise exception 'Administrator access required'; end if;
 if length(v_name)<2 or length(v_name)>100 then raise exception 'Student name must contain 2 to 100 characters'; end if;
 update public.pending_student_setups set student_name=v_name
 where org_id=p_org and email=v_email;
 if not found then raise exception 'Save the student setup before saving their name';end if;
 return jsonb_build_object('ok',true);
end;$$;
revoke all on function public.set_pending_student_name(uuid,text,text) from public,anon;
grant execute on function public.set_pending_student_name(uuid,text,text) to authenticated;

-- A verified-email enrolment can be claimed without exposing the hashed fallback invitation.
-- The administrator must have saved the academic setup AND created a valid invitation.
-- This preserves the existing secure code-based claim as an optional recovery path.
create or replace function public.claim_my_student_access()
returns jsonb language plpgsql security definer set search_path='' as $$
declare v_user uuid:=(select auth.uid());v_email text;v_inv public.invitations%rowtype;
 v_setup public.pending_student_setups%rowtype;v_type text;
begin
 if v_user is null then raise exception 'Sign-in required';end if;
 select lower(email) into v_email from auth.users where id=v_user and email_confirmed_at is not null;
 if v_email is null then raise exception 'Verified email required';end if;
 if exists(select 1 from public.memberships where user_id=v_user) then
   return jsonb_build_object('ok',false,'reason','already_member');
 end if;
 select * into v_inv from public.invitations where email=v_email
 and redeemed_at is null and revoked_at is null and expires_at>now()
 and exists(select 1 from public.pending_student_setups p where p.org_id=invitations.org_id and p.email=v_email)
 order by created_at desc limit 1 for update;
 if v_inv.id is null then return jsonb_build_object('ok',false,'reason','no_invitation');end if;
 select * into v_setup from public.pending_student_setups where org_id=v_inv.org_id and email=v_email for update;
 if v_setup.org_id is null then return jsonb_build_object('ok',false,'reason','no_setup');end if;
 insert into public.memberships(org_id,user_id,member_role) values(v_inv.org_id,v_user,'student');
 if v_setup.student_name<>'' then
   update public.profiles set display_name=v_setup.student_name where id=v_user;
 end if;
 insert into public.student_preferences(student_id,qualification,exam_board,tier)
 values(v_user,v_setup.qualification,v_setup.exam_board,v_setup.exam_tier);
 insert into public.student_entitlements(student_id,org_id,tier,ends_at,signature_credits,updated_by)
 values(v_user,v_inv.org_id,v_setup.programme,v_setup.ends_at,
   coalesce((v_setup.add_ons->>'signature')::integer,0),v_setup.updated_by);
 insert into public.student_academic_settings(student_id,org_id,focus_topics,staff_notes,updated_by)
 values(v_user,v_inv.org_id,v_setup.focus_topics,v_setup.staff_notes,v_setup.updated_by);
 foreach v_type in array array['signature','signature_advanced','specialist_review'] loop
   insert into public.student_service_addons(student_id,org_id,service_type,quantity,updated_by)
   values(v_user,v_inv.org_id,v_type,coalesce((v_setup.add_ons->>v_type)::integer,0),v_setup.updated_by);
 end loop;
 delete from public.pending_student_setups where org_id=v_inv.org_id and email=v_email;
 update public.invitations set redeemed_at=now(),redeemed_by=v_user where id=v_inv.id;
 return jsonb_build_object('ok',true,'role','student','org_id',v_inv.org_id);
end;$$;
revoke all on function public.claim_my_student_access() from public,anon;
grant execute on function public.claim_my_student_access() to authenticated;

-- Compatibility: older code-based claims also inherit the administrator-supplied name.
-- Trigger executes while pending_student_setups is present, before claim deletes it.
create or replace function private.apply_invited_student_name()
returns trigger language plpgsql security definer set search_path='' as $$
declare v_email text;v_name text;
begin
 if new.member_role<>'student' then return new;end if;
 select lower(email) into v_email from auth.users where id=new.user_id and email_confirmed_at is not null;
 select student_name into v_name from public.pending_student_setups where org_id=new.org_id and email=v_email;
 if length(coalesce(v_name,''))>1 then
   update public.profiles set display_name=v_name where id=new.user_id;
 end if;
 return new;
end;$$;
drop trigger if exists mathsgrove_student_name_on_membership on public.memberships;
create trigger mathsgrove_student_name_on_membership
 after insert on public.memberships for each row execute function private.apply_invited_student_name();

create table if not exists public.learner_view_invitations(
 id uuid primary key default gen_random_uuid(),
 org_id uuid not null references public.organisations(id) on delete cascade,
 student_email text not null check (length(student_email)<=250 and student_email=lower(student_email)),
 viewer_email text not null check (length(viewer_email)<=250 and viewer_email=lower(viewer_email)),
 view_role text not null check(view_role in ('parent','tutor')),
 invited_by uuid not null references auth.users(id),
 created_at timestamptz not null default now(),
 expires_at timestamptz not null default (now()+interval '30 days'),
 revoked_at timestamptz,
 unique(org_id,student_email,view_role),
 check(student_email<>viewer_email)
);
create index if not exists learner_view_invited_email_idx on public.learner_view_invitations(viewer_email);
create table if not exists public.learner_view_links(
 invitation_id uuid primary key references public.learner_view_invitations(id) on delete cascade,
 org_id uuid not null references public.organisations(id) on delete cascade,
 student_id uuid not null references public.profiles(id) on delete cascade,
 viewer_id uuid not null references auth.users(id) on delete cascade,
 view_role text not null check(view_role in ('parent','tutor')),
 active boolean not null default true,
 accepted_at timestamptz not null default now(),
 check(student_id<>viewer_id)
);
create index if not exists learner_view_links_viewer_idx on public.learner_view_links(viewer_id,active);
create index if not exists learner_view_links_student_idx on public.learner_view_links(student_id);
alter table public.learner_view_invitations enable row level security;
alter table public.learner_view_links enable row level security;
revoke all on public.learner_view_invitations,public.learner_view_links from public,anon,authenticated;

-- Full replacement per learner; empty email unassigns the role. Never publish emails publicly.
create or replace function public.configure_learner_viewers(
 p_org uuid,p_student_email text,p_parent_email text,p_tutor_email text
) returns jsonb language plpgsql security definer set search_path='' as $$
declare v_student text:=lower(trim(coalesce(p_student_email,'')));
 v_parent text:=lower(trim(coalesce(p_parent_email,'')));
 v_tutor text:=lower(trim(coalesce(p_tutor_email,'')));
 v_role text;v_recipient text;v_inv public.learner_view_invitations%rowtype;v_old text;
 v_student_id uuid;v_tier text;
begin
 if (select auth.uid()) is null or not private.is_partner(p_org) then raise exception 'Administrator access required';end if;
 if v_student !~ '^[^@[:space:]]+@[^@[:space:]]+[.][^@[:space:]]+$' then raise exception 'Valid student email required';end if;
 if (v_parent<>'' and (length(v_parent)>250 or v_parent !~ '^[^@[:space:]]+@[^@[:space:]]+[.][^@[:space:]]+$'))
 or (v_tutor<>'' and (length(v_tutor)>250 or v_tutor !~ '^[^@[:space:]]+@[^@[:space:]]+[.][^@[:space:]]+$'))
 or v_parent=v_student or v_tutor=v_student or (v_parent<>'' and v_parent=v_tutor)
 then raise exception 'Use distinct, valid student, parent and tutor email addresses';end if;
 -- Read existing membership through auth.users, not user-supplied student_id.
 select m.user_id,e.tier into v_student_id,v_tier
 from public.memberships m join auth.users u on u.id=m.user_id
 left join public.student_entitlements e on e.student_id=m.user_id and e.org_id=p_org
 where m.org_id=p_org and m.member_role='student' and lower(u.email)=v_student limit 1;
 if v_student_id is null then
   select programme into v_tier from public.pending_student_setups where org_id=p_org and email=v_student;
 end if;
 if v_tier is null then raise exception 'Save the student enrolment first';end if;
 if v_tier<>'exam' and (v_parent<>'' or v_tutor<>'') then
   raise exception 'Parent and tutor accounts are available only in Grove Exam';end if;
 for v_role in select unnest(array['parent','tutor']) loop
   v_recipient:=case when v_role='parent' then v_parent else v_tutor end;
   select * into v_inv from public.learner_view_invitations
   where org_id=p_org and student_email=v_student and view_role=v_role for update;
   if v_recipient='' or v_tier<>'exam' then
     if v_inv.id is not null then
       update public.learner_view_invitations set revoked_at=now() where id=v_inv.id;
       update public.learner_view_links set active=false where invitation_id=v_inv.id;
     end if;
   elsif v_inv.id is null then
     insert into public.learner_view_invitations(org_id,student_email,viewer_email,view_role,invited_by)
     values(p_org,v_student,v_recipient,v_role,(select auth.uid()));
   elsif v_inv.viewer_email<>v_recipient or v_inv.revoked_at is not null then
     update public.learner_view_links set active=false where invitation_id=v_inv.id;
     update public.learner_view_invitations set viewer_email=v_recipient,revoked_at=null,
       expires_at=now()+interval '30 days',invited_by=(select auth.uid()),created_at=now() where id=v_inv.id;
   end if;
 end loop;
 return jsonb_build_object('ok',true,'student_email',v_student,'programme',v_tier);
end;$$;
revoke all on function public.configure_learner_viewers(uuid,text,text,text) from public,anon;
grant execute on function public.configure_learner_viewers(uuid,text,text,text) to authenticated;

create or replace function public.list_learner_viewers(p_org uuid)
returns jsonb language plpgsql security definer set search_path='' as $$
declare v_result jsonb;
begin
 if (select auth.uid()) is null or not private.is_partner(p_org) then raise exception 'Administrator access required';end if;
 select coalesce(jsonb_agg(jsonb_build_object(
  'student_email',i.student_email,'viewer_email',i.viewer_email,'view_role',i.view_role,
  'expires_at',i.expires_at,'revoked_at',i.revoked_at,
  'accepted_at',l.accepted_at,'active',coalesce(l.active,false)
 ) order by i.student_email,i.view_role),'[]'::jsonb)
 into v_result from public.learner_view_invitations i
 left join public.learner_view_links l on l.invitation_id=i.id
 where i.org_id=p_org;
 return v_result;
end;$$;
revoke all on function public.list_learner_viewers(uuid) from public,anon;
grant execute on function public.list_learner_viewers(uuid) to authenticated;

-- Login is an email OTP/magic link, NOT a shared family password or student key.
-- Only a previously admin-nominated recipient can self-claim. A learner must exist.
create or replace function public.claim_my_learner_views()
returns jsonb language plpgsql security definer set search_path='' as $$
declare v_viewer uuid:=(select auth.uid());v_email text;v_i public.learner_view_invitations%rowtype;
 v_student uuid;v_count int:=0;v_wait int:=0;
begin
 if v_viewer is null then raise exception 'Sign-in required';end if;
 select lower(email) into v_email from auth.users where id=v_viewer and email_confirmed_at is not null;
 if v_email is null then raise exception 'Verified email required';end if;
 for v_i in select * from public.learner_view_invitations where viewer_email=v_email
  and revoked_at is null and expires_at>now() order by created_at desc loop
   select m.user_id into v_student from public.memberships m join auth.users s on s.id=m.user_id
   join public.student_entitlements e on e.student_id=m.user_id and e.org_id=v_i.org_id
   where m.org_id=v_i.org_id and m.member_role='student' and lower(s.email)=v_i.student_email
   and e.tier='exam' and e.starts_at<=now() and (e.ends_at is null or e.ends_at>now()) limit 1;
   if v_student is null then v_wait:=v_wait+1;continue;end if;
   if v_student=v_viewer then continue;end if;
   insert into public.learner_view_links(invitation_id,org_id,student_id,viewer_id,view_role,active)
   values(v_i.id,v_i.org_id,v_student,v_viewer,v_i.view_role,true)
   on conflict(invitation_id) do update set
    viewer_id=excluded.viewer_id,student_id=excluded.student_id,org_id=excluded.org_id,
    view_role=excluded.view_role,active=true,accepted_at=now();
   v_count:=v_count+1;
 end loop;
 return jsonb_build_object('ok',true,'linked',v_count,'awaiting_student',v_wait);
end;$$;
revoke all on function public.claim_my_learner_views() from public,anon;
grant execute on function public.claim_my_learner_views() to authenticated;

-- Safe, role-differentiated payload: parents see aggregates, tutors also see
-- question-level *released* feedback. No answer images, typed answers, staff notes,
-- student email, or unreleased draft assessments are ever returned here.
create or replace function public.get_my_learner_views()
returns jsonb language plpgsql security definer set search_path='' as $$
declare v_viewer uuid:=(select auth.uid());v_email text;v_out jsonb:='[]'::jsonb;
 v_row record;v_total integer;v_reviewed integer;v_submitted integer;v_last timestamptz;
 v_history jsonb;v_topics jsonb;v_feedback jsonb;
begin
 if v_viewer is null then raise exception 'Sign-in required';end if;
 select lower(email) into v_email from auth.users where id=v_viewer and email_confirmed_at is not null;
 if v_email is null then raise exception 'Verified email required';end if;
 for v_row in
 select l.student_id,l.org_id,l.view_role,p.display_name,
  sp.qualification,sp.exam_board,sp.tier as academic_level,e.tier as programme
 from public.learner_view_links l
 join public.learner_view_invitations i on i.id=l.invitation_id
 join public.student_entitlements e on e.student_id=l.student_id and e.org_id=l.org_id
 join public.memberships m on m.user_id=l.student_id and m.org_id=l.org_id and m.member_role='student'
 join auth.users su on su.id=l.student_id
 join public.profiles p on p.id=l.student_id
 left join public.student_preferences sp on sp.student_id=l.student_id
 where l.viewer_id=v_viewer and l.active and i.revoked_at is null
 and i.viewer_email=v_email and i.view_role=l.view_role and lower(su.email)=i.student_email
 and e.tier='exam' and e.starts_at<=now() and (e.ends_at is null or e.ends_at>now())
 loop
   select count(*),count(*) filter(where a.status='marked'),count(*) filter(where a.status='submitted'),
   max(a.submitted_at) into v_total,v_reviewed,v_submitted,v_last
   from public.attempts a where a.student_id=v_row.student_id and a.org_id=v_row.org_id;
   select coalesce(jsonb_agg(h.record order by h.date desc),'[]'::jsonb) into v_history from(
    select a.submitted_at as date,jsonb_build_object(
      'date',a.submitted_at,'qualification',a.qualification,'paper_mode',a.paper_mode,
      'topic',coalesce(a.focus_topic,''),'score',sum(r.marks_awarded),
      'maximum',sum(q.marks)
    ) as record
    from public.attempts a
    join public.reviews r on r.attempt_id=a.id
    join public.question_bank q on q.id=r.question_id
    where a.student_id=v_row.student_id and a.org_id=v_row.org_id and a.status='marked'
    group by a.id,a.submitted_at,a.qualification,a.paper_mode,a.focus_topic
    order by a.submitted_at desc limit 8
   )h;
   select coalesce(jsonb_agg(t.record order by t.topic),'[]'::jsonb) into v_topics from(
    select q.topic,
      jsonb_build_object('topic',q.topic,'earned',sum(r.marks_awarded),'available',sum(q.marks),'questions',count(*)) as record
    from public.reviews r join public.question_bank q on q.id=r.question_id
    join public.attempts a on a.id=r.attempt_id
    where a.student_id=v_row.student_id and a.org_id=v_row.org_id and a.status='marked'
    group by q.topic order by count(*) desc limit 10
   )t;
   v_feedback:='[]'::jsonb;
   if v_row.view_role='tutor' then
    select coalesce(jsonb_agg(t.record order by t.date desc),'[]'::jsonb) into v_feedback from(
      select a.submitted_at as date,jsonb_build_object('topic',q.topic,
       'feedback',left(r.feedback,1200),'marks',r.marks_awarded,'maximum',q.marks,
       'date',a.submitted_at) as record
      from public.reviews r join public.attempts a on a.id=r.attempt_id
      join public.question_bank q on q.id=r.question_id
      where a.student_id=v_row.student_id and a.org_id=v_row.org_id and a.status='marked'
      order by a.submitted_at desc limit 12
    )t;
   end if;
   v_out:=v_out||jsonb_build_array(jsonb_build_object(
    'student_id',v_row.student_id,'student_name',v_row.display_name,'view_role',v_row.view_role,
    'qualification',v_row.qualification,'exam_board',v_row.exam_board,
    'academic_level',v_row.academic_level,'programme',v_row.programme,
    'papers_total',v_total,'papers_reviewed',v_reviewed,
    'papers_awaiting_review',v_submitted,'last_submission',v_last,
    'recent_results',v_history,'topics',v_topics,'teaching_feedback',v_feedback));
 end loop;
 return jsonb_build_object('ok',true,'learners',v_out);
end;$$;
revoke all on function public.get_my_learner_views() from public,anon;
grant execute on function public.get_my_learner_views() to authenticated;

-- Downgrading stops *all* linked views immediately; administrator must explicitly
-- reauthorise viewers after a future upgrade if assignments were revoked.
create or replace function private.restrict_grove_exam_views()
returns trigger language plpgsql security definer set search_path='' as $$
begin
 if new.tier<>'exam' then
  update public.learner_view_links set active=false where student_id=new.student_id;
 end if;
 return new;
end;$$;
drop trigger if exists mathsgrove_restrict_family_access on public.student_entitlements;
create trigger mathsgrove_restrict_family_access
 after insert or update of tier on public.student_entitlements
 for each row execute function private.restrict_grove_exam_views();
commit;
