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

-- Self serve Baseline. Written by the Stripe webhook (app/api/stripe/webhook/route.ts) and the intake form (app/welcome/actions.ts).
create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz,
  checkout_session_id text unique,
  stripe_customer_id text,
  stripe_subscription_id text,
  email text not null,
  plan text not null,
  term_months int not null default 0,
  agreed_term boolean not null default false,
  status text not null default 'active',
  amount_total int
);
alter table public.subscriptions enable row level security;

create table if not exists public.onboarding (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  checkout_session_id text,
  email text,
  plan text,
  company text not null,
  website text not null,
  contact_name text not null,
  wants_call boolean not null default false,
  answers jsonb not null default '{}'::jsonb
);
alter table public.onboarding enable row level security;
-- No public policies on either table: the service role key (server only) bypasses RLS.
