-- PaperBrief: verified accounts, one saved company per account, and its publication queue.
-- Applied to the isovertic project as migration paperbrief_workspaces.
-- RLS is on with no policies: only the server (service role key) reads or writes these.
create table if not exists public.paperbrief_accounts (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null unique,
  phone text,
  verified_at timestamptz not null default now(),
  last_seen_at timestamptz
);
alter table public.paperbrief_accounts enable row level security;

create table if not exists public.paperbrief_workspaces (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  account_id uuid not null unique references public.paperbrief_accounts(id) on delete cascade,
  company text not null,
  aliases text[] not null default '{}',
  days int not null default 90 check (days in (30, 90, 180, 365)),
  cadence text not null default 'monthly' check (cadence in ('monthly', 'weekly', 'off')),
  alerts boolean not null default false,
  unsubscribe_token uuid not null unique default gen_random_uuid(),
  last_checked_at timestamptz,
  next_check_at timestamptz
);
alter table public.paperbrief_workspaces enable row level security;
create index if not exists paperbrief_workspaces_due on public.paperbrief_workspaces (next_check_at) where cadence <> 'off';

create table if not exists public.paperbrief_papers (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.paperbrief_workspaces(id) on delete cascade,
  pmid text not null,
  title text not null,
  authors text,
  journal text,
  pub_date date not null,
  first_seen_at timestamptz not null default now(),
  status text not null default 'review' check (status in ('review', 'ours', 'not_ours')),
  post_requested_at timestamptz,
  unique (workspace_id, pmid)
);
alter table public.paperbrief_papers enable row level security;
create index if not exists paperbrief_papers_workspace on public.paperbrief_papers (workspace_id, pub_date desc);
