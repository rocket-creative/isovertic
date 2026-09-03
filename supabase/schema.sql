-- ISOVERTIC leads table. Run in the Supabase SQL editor.
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  company text,
  message text,
  source_path text,
  utm jsonb
);
alter table public.leads enable row level security;
-- No public policies: the service role key (server only) bypasses RLS.
