-- MathsGrove secure atomic invitation redemption.
-- Apply AFTER 20261028_admin_invitation_lifecycle.sql.
-- Callable only with the service-role key in the authenticated Edge Function.
create or replace function public.claim_student_invitation(
 p_code_hash text, p_user_id uuid
)
returns uuid
language plpgsql security definer set search_path=''
as $$
declare
 v_invitation public.invitations%rowtype;
 v_user_email text;
begin
 if p_user_id is null or p_code_hash is null or length(p_code_hash)<>64 then
  raise exception 'Invalid claim';
 end if;

 select lower(email) into v_user_email from auth.users
  where id=p_user_id and email_confirmed_at is not null;
 if v_user_email is null then raise exception 'Verified email required'; end if;

 select * into v_invitation from public.invitations
 where code_hash=p_code_hash for update;
 if v_invitation.id is null
  or v_invitation.redeemed_at is not null
  or v_invitation.revoked_at is not null
  or v_invitation.expires_at <= now()
  or v_invitation.email <> v_user_email then
  raise exception 'Invalid, revoked or expired invitation';
 end if;

 if exists(select 1 from public.memberships where user_id=p_user_id) then
  raise exception 'Account already has a membership; sign in to your existing account';
 end if;

 insert into public.memberships(org_id,user_id,member_role)
 values(v_invitation.org_id,p_user_id,'student');

 update public.invitations
 set redeemed_at=now(),redeemed_by=p_user_id
 where id=v_invitation.id;

 return v_invitation.org_id;
end;
$$;
revoke all on function public.claim_student_invitation(text,uuid) from public,anon,authenticated;
grant execute on function public.claim_student_invitation(text,uuid) to service_role;
