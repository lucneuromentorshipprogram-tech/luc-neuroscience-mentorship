-- LUC Neuroscience Mentorship Program question forum
-- Run this in Supabase SQL Editor after creating a project.
create table if not exists public.forum_questions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  role text not null check (role in ('Mentee / student seeking support','Mentor','Other / prospective member')),
  class_year text,
  category text not null,
  semester text,
  question text not null check (char_length(question) between 1 and 3000),
  email text,
  follow_up text not null default 'No' check (follow_up in ('Yes','No')),
  evaluation_consent boolean not null default false
);

create table if not exists public.club_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table public.forum_questions enable row level security;
alter table public.club_admins enable row level security;

-- Club admins may see forum submissions.
create policy "club admins can read questions"
on public.forum_questions for select
to authenticated
using (exists (select 1 from public.club_admins a where a.user_id = auth.uid()));

-- Public site may submit questions, but cannot read them.
create policy "public can submit questions"
on public.forum_questions for insert
to anon, authenticated
with check (evaluation_consent = true);

-- Admins can export/read data through their authenticated session.
-- No update/delete policy is intentionally created by default.

-- Run this AFTER you create the e-board Auth users in Supabase:
-- insert into public.club_admins (user_id) values ('THE-USER-UUID-HERE');
