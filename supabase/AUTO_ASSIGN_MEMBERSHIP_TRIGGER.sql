-- Complete calendar creation regardless of enrolment write order:
-- profiles/membership may be created after student preferences/entitlement.
CREATE OR REPLACE FUNCTION private.grove_member_enrol_trigger()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
BEGIN
 IF NEW.member_role='student' THEN PERFORM private.grove_assign_student(NEW.user_id);END IF;
 RETURN NEW;
END;$$;
REVOKE ALL ON FUNCTION private.grove_member_enrol_trigger() FROM PUBLIC,anon,authenticated;
DROP TRIGGER IF EXISTS grove_assign_on_membership ON public.memberships;
CREATE TRIGGER grove_assign_on_membership AFTER INSERT OR UPDATE OF member_role
ON public.memberships FOR EACH ROW EXECUTE FUNCTION private.grove_member_enrol_trigger();