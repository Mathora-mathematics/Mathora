CREATE OR REPLACE FUNCTION private.grove_finalize_expired_practice()
RETURNS integer LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE item record;closed_count integer:=0;
BEGIN
 FOR item IN SELECT id FROM private.grove_tasks
  WHERE status='active' AND ends_at IS NOT NULL AND ends_at<=now()
  ORDER BY ends_at LIMIT 100 FOR UPDATE SKIP LOCKED
 LOOP
  PERFORM private.grove_close(item.id);closed_count:=closed_count+1;
 END LOOP;
 RETURN closed_count;
END;$$;
REVOKE ALL ON FUNCTION private.grove_finalize_expired_practice() FROM PUBLIC,anon,authenticated;