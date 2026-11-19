---
name: isovertic-search
description: Search first rules for the Isovertic site. Load before writing or changing any page title, headline, description, URL, FAQ, or internal link, and before adding a page. Covers the words buyers actually type, how pages are structured for Google and for AI assistants, and the checks to run before a commit.
---

# Isovertic search first rules

The site exists to be found by a life science buyer who is searching, on Google or in an AI assistant, and then to be trusted when they arrive. Every page is written for a phrase somebody types. These rules come from 68 Google searches run on November 19, 2026. The full analysis is in `planning/search-analysis-2026-11-19.md` in the project folder above this repo.

## Words buyers use, and words they do not

| Say this | Not this | Why |
|---|---|---|
| contract research organization, then CRO | CRO on first use | Google reads "CRO" as conversion rate optimization. "CRO marketing" returns the wrong topic entirely. |
| contract development and manufacturing organization (CDMO) on first use | CDMO alone | Google's own questions are "What does a CDMO company do?" |
| show up in ChatGPT, get recommended by AI assistants | generative engine optimization, GEO, AEO, LLM SEO | The second group is agency jargon. Use it once, as "also called", never as the headline. |
| AI visibility, AI visibility checker, AI visibility audit | AI discoverability, AI presence | These exact phrases are searched. |
| website, website design | web presence, digital footprint, site build | |
| marketing agency | firm, partner, studio | Buyers search "biotech marketing agency", "medical device marketing agency". |
| how much does it cost, price | investment, engagement | Cost questions are the most common thing asked. |

## Every page

1. **One phrase per page.** The `Primary query:` line in the markdown names it. The title tag, the H1, the first paragraph, and the meta description all use that phrase in plain words.
2. **Title tag:** the phrase first, then "| Isovertic". Aim for 65 characters or fewer. Include "agency" on service and industry pages.
3. **H1:** say what the page offers in the words a buyer would type. Clear beats clever. If the page sells the $4,995 website, the price goes in the H1.
4. **Meta description:** one or two sentences, under about 160 characters, that answer the search and name the price where there is one.
5. **Answer first.** A cost question is answered with the number in the first sentence. A "what is" question is answered in one sentence before any explanation. AI assistants and Google both lift the first direct answer they find.
6. **FAQ questions are real questions.** Write them the way "People also ask" phrases them: "How much does a biotech website cost?", "Is SEO still relevant in 2026?". Each answer stands alone, because it is published as structured data.
7. **Spell out an acronym once per page.**
8. **Link to sibling pages** with the words a person would search, never "click here" or "learn more".

## How the pages are built

- Copy lives in `content/site-copy/*.md`. `lib/sitecopy.ts` turns it into pages. Do not hardcode copy in a route.
- `copyMetadata(path)` builds the title, description, canonical, and share card from the copy. Every route uses it.
- Structured data comes from `lib/schema.ts` and is added in `components/sections/CopyPage.tsx`: the agency (every page), breadcrumbs, a Service entry for service and industry pages, the FAQ, and the published prices on Home and Pricing.
- Published prices live once, in `publishedOffers` in `content/site-nav.ts`. Structured data and `llms.txt` read that list. Change a price there and in the markdown together.
- `app/sitemap.ts` and `app/llms.txt/route.ts` are generated from the copy. A new page in the markdown appears in both.
- A new page also needs a line in `footerCols` in `content/site-nav.ts`, or the review guard in `middleware.ts` will not serve it and it gets no related links.
- Everything is server rendered. Most AI crawlers do not run JavaScript, so text that only appears after JavaScript runs does not exist for them. View source and confirm the copy is there.

## Before a commit

1. `npm run lint:copy`
2. `npm run build`
3. For a changed page, check the built HTML in `.next/server/app/<page>.html`: the title, one H1, the meta description, and the JSON-LD types.
4. Title tags over 65 characters: `awk -F': ' '/^Title tag:/{print length($2), $2}' content/site-copy/*.md | sort -rn | head`

## What this skill does not settle

- **Whether the site can be indexed.** `app/layout.tsx` sets `robots: { index: false }` while this is a review build. Nothing ranks until that is removed at launch, and that is the owners' decision.
- **Search volume.** The analysis shows what Google returns, not how many people search each phrase.
- **"Growth agency" versus "marketing agency".** `CLAUDE.md` and `CORE-MESSAGE-FOUNDATION.md` say "growth agency". Buyers type "marketing agency". The rewritten copy uses the buyers' phrase. The owners have not ruled on which governs.
