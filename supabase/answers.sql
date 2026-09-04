-- Question bank. Same shape as content/answers.ts. Adopt when the typed file passes ~150 rows.
create table if not exists public.answers (
  slug text primary key,
  question text not null,
  answer text not null check (char_length(answer) <= 320),
  detail text not null,
  audience text not null check (audience in ('life-science','healthcare','startup','all')),
  tier text check (tier in ('baseline','catalyst','kinetic','critical-mass','protocol')),
  related jsonb not null default '[]'::jsonb,
  author text not null check (author in ('george-stoff','kristen-coughlin')),
  source text, -- where the question came from: form, call, search, reddit, competitor
  cited_chatgpt boolean,
  cited_perplexity boolean,
  cited_google_ai boolean,
  last_checked date,
  date_modified date not null default current_date,
  created_at timestamptz not null default now()
);
alter table public.answers enable row level security;
create policy "public read" on public.answers for select using (true);
