# CLAUDE.md: ISOVERTIC site

Rules for AI assisted maintenance of this repo (Cursor, Claude Code).

## Stack, never deviate
Next.js App Router, TypeScript strict, Tailwind v4 (CSS first, tokens in app/globals.css @theme), Supabase with RLS, Resend, Vercel. No new UI libraries, no CSS in JS, no component frameworks.

## Design law
Editorial luxury minimalism. Warm white #F5F4F0, ink #14181B, one accent: Navy #0F2C3F. No gradients, no shadows, no border radius above 4px, no stock photos, no custom cursor (system cursor only), no decoration that does not encode information. The ISOVERTIC mark motif (.iso-mark) is the signature: a filled circle and an angled rise. Do not invent new motifs.

## Writing law (hard rules, lint enforced)
- No hyphens used as dashes, no em dashes, no en dashes anywhere in copy. Slugs and CSS are exempt.
- Banned phrases: "clean and professional", "this framing", "happy to", "through line", "operationally".
- No AI filler. Every claim carries a number, an outcome, or a mechanism.
- Founder voice: confident, caring, grounded in real experience.
- Run `npm run lint:copy` after any copy change.

## Architecture rules
- All copy lives in content/ as typed data or markdown. Never hardcode copy in routes.
- Every public page exports Metadata with a canonical. New pages must be added to app/sitemap.ts only if not generated from content collections (collections are picked up automatically).
- All structured data goes through lib/schema.ts builders. No inline JSON-LD objects.
- Server render everything. No "use client" unless the component genuinely needs state or browser APIs.
- Animations are opt in behind prefers-reduced-motion: no-preference. Static state must always be fully visible.
- Forms post to server actions. The Supabase service role key never appears in client components.

## Before any commit
1. `npm run lint:copy`
2. `npm run build` passes with zero type errors
3. View the page without JavaScript: the copy must be fully present in the HTML.
