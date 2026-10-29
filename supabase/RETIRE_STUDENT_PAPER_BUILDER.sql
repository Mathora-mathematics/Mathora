-- Student-selected paper generation is retired: all new work is admin-programme scheduled.
-- Existing saved attempts remain untouched. Moderated mock assignment is unchanged.
REVOKE EXECUTE ON FUNCTION public.create_student_paper(text,text,text,integer,uuid[]) FROM PUBLIC,anon,authenticated;