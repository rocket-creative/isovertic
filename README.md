# ISOVERTIC

Production site for isovertic.com. Next.js App Router, TypeScript strict, Tailwind v4, Supabase, Resend, deployed on Vercel.

Maintainer: George Stoff `<georgestoff@rocketcreative.net>`
Repository: https://github.com/rocket-creative/isovertic.git
SSH: `git@github.com:rocket-creative/isovertic.git`

## Local setup

```bash
npm install
cp .env.example .env.local   # fill in the values below
npm run dev
```

## Environment variables

| Variable | Where to get it |
| --- | --- |
| NEXT_PUBLIC_SUPABASE_URL | Supabase project settings, API |
| SUPABASE_SERVICE_ROLE_KEY | Same page. Server only, never expose client side |
| RESEND_API_KEY | resend.com API keys, after verifying the sending domain |
| LEAD_NOTIFY_EMAIL | Where lead notifications go, for example georgestoff@rocketcreative.net |
| LEAD_FROM_EMAIL | Verified sender, for example georgestoff@rocketcreative.net |
| NEXT_PUBLIC_SITE_URL | https://isovertic.com |

## Supabase

Run `supabase/schema.sql` in the Supabase SQL editor once. The leads table has RLS enabled with no public policies; only the server side service role key can write, from the server action in `app/contact/actions.ts`.

## Resend

1. Add the sending domain in Resend and add the DNS records it gives you.
2. Create an API key and set RESEND_API_KEY.
3. The form degrades gracefully: if either Supabase or Resend fails, the lead still lands in the other.

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import in Vercel, framework auto detects Next.js.
3. Add the environment variables above in the Vercel project settings.
4. Point isovertic.com DNS at Vercel.

## Where everything lives

- `content/services.ts`, `content/industries.ts`, `content/compare.ts`: page copy as typed data. Edit copy here, the routes render it.
- `content/articles/*.md`: field notes articles with frontmatter. Add a file, it appears in the index, sitemap, and gets Article schema automatically.
- `app/globals.css`: the entire design system as Tailwind v4 @theme tokens.
- `lib/schema.ts`: JSON-LD builders.
- `components/sections/PipelineDiagram.tsx`: the signature animated component.
- `scripts/copy-lint.mjs`: run `npm run lint:copy` to enforce the writing rules (no em or en dashes, no AI filler) across all copy.

## Writing rules (enforced by lint:copy)

No em dashes, no en dashes, no banned filler phrases. Every claim needs a number, an outcome, or a mechanism. The lint script fails the build conversation early so violations never ship.
