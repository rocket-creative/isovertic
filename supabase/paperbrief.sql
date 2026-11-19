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

alter table public.paperbrief_papers add column if not exists draft jsonb;
alter table public.paperbrief_papers add column if not exists drafted_at timestamptz;

alter table public.paperbrief_accounts add column if not exists email_domain text;
alter table public.paperbrief_accounts add column if not exists domain_has_site boolean;
alter table public.paperbrief_workspaces add column if not exists domain_match boolean;

-- AI visibility snapshot. Applied as migrations visibility_snapshots and visibility_job_origin.
create table if not exists public.visibility_jobs (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  account_id uuid not null references public.paperbrief_accounts(id) on delete cascade,
  company text not null,
  domain text not null,
  sells text not null,
  buyers text,
  competitors text[] not null default '{}',
  questions jsonb not null default '[]',
  crawl jsonb,
  site_text text,
  status text not null default 'questions' check (status in ('questions', 'running', 'analyzing', 'done', 'failed')),
  report jsonb,
  origin text,
  locked_until timestamptz,
  started_at timestamptz,
  done_at timestamptz,
  emailed_at timestamptz,
  google_requested_at timestamptz
);
alter table public.visibility_jobs enable row level security;
create table if not exists public.visibility_answers (
  id uuid primary key default gen_random_uuid(),
  job_id uuid not null references public.visibility_jobs(id) on delete cascade,
  provider text not null,
  q_index int not null,
  run int not null,
  status text not null default 'pending' check (status in ('pending', 'done', 'error')),
  answer text,
  mentioned boolean,
  error text,
  finished_at timestamptz,
  unique (job_id, provider, q_index, run)
);
alter table public.visibility_answers enable row level security;
