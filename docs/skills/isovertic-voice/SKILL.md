---
name: isovertic-voice
description: "Isovertic writing voice, structure, citation discipline, and AI-tells ban. Load for any Isovertic writing task: blog posts, field notes, landing pages, sales emails, LinkedIn, decks, one-pagers, case studies, proposals, or CTAs. Do not load for pure marketing strategy work with no writing output (use isovertic-marketing instead)."
metadata:
  author: rocket-creative
  version: "1.0"
---

# Isovertic Writing Voice

## When to load

Any writing task where the output will be read by an Isovertic prospect, client, or partner. This includes long-form (field notes, case studies, guides), short-form (LinkedIn posts, sales emails, ad copy, CTAs), and hybrid assets (landing pages, one-pagers, proposal sections, deck copy).

Do not load for pure marketing strategy questions with no writing output, use `isovertic-marketing` for that.

## Where the files live

This skill and `isovertic-marketing` live in the site repo at `docs/skills/`. Reference paths below are relative to `docs/skills/isovertic-voice/`. Positioning vocabulary (growth agency, meetings, the method) is in `CORE-MESSAGE-FOUNDATION.md` at the repo root; follow it in every client facing piece.

## The voice, in one paragraph

Conversational, scientific, warm, insight-forward. We are the smart-and-reassured friend who explains what is actually going on, respects the reader's intelligence, and lands a small dry chuckle when it fits, never stand-up comedy. Readers are practice administrators, medical directors, CEOs, COOs, and hospital staff who understand their business but not marketing jargon. Our job is to make them feel like they knew something was off, we confirmed it, and now they trust us enough to book a call. First-person (I / we / you) is normal. Contractions are normal. Em-dashes are banned. Ten specific AI-tell phrases are banned. Every load-bearing number gets a real citation with a real URL.

## Step 1: Know who you are writing to

Isovertic writes for **operational decision-makers**, not marketers:

- Practice administrators, hospital operations staff, medical directors, dental/vet/urgent-care office managers
- Founders and COOs of biotech/medtech/healthcare-adjacent SaaS
- CEOs and revenue leaders at long-cycle B2B companies

**They understand their own business deeply.** They do not know or care what MQL means. If you write "top-of-funnel MQA-to-SQL conversion," you have lost them. If you write "the leads your team never calls back," you have their attention.

**Never use these marketing acronyms in client-facing copy:** MQL, SQL, PQL, MQA, TOFU, MOFU, BOFU, ICP (spell out "ideal client"), CAC/LTV without a plain-language gloss, ABM without explanation. Technical vocabulary the reader uses daily is fine (cohort, protocol, cycle, throughput, PHI, BAA, HIPAA, formulary, RCM, IDR).

## Step 2: Structure every long-form piece the same way

Anything over ~600 words gets this exact opening:

```
# [Title]

**By [Named Author], [Role]**
**Category:** [category]
**Published:** [date] · **Reviewed:** [date] · **[N] min read**

---

## What you'll take away

- [Concrete promise 1]
- [Concrete promise 2]
- [Concrete promise 3]
- [Concrete promise 4]
- [Concrete promise 5]

---

[Opening paragraph — see Step 3]
```

**Named authors only.** No anonymous house posts. Current bylines:
- **George Stoff**, Founder and Lead Engineer (technical, systems, engineering pieces)
- **Kristen Coughlin**, COO. Bio line: trained molecular biologist, ten years selling translational research products (operations, editorial, life science pieces)

**Read time**: ~200 words per minute, rounded up. A 1,800-word piece is "9 min read."

**"What you'll take away" bullets** are concrete promises, not topic previews. Wrong: "What we'll cover: HIPAA rules." Right: "What the June 2024 ruling in *AHA v. Becerra* changed, and what it did not."

## Step 3: Write the opening in the Isovertic move

The opening does three things in order:

1. **Acknowledges the reader is smart.** They already suspected something was off. We are confirming it.
2. **Names the honest big thing.** One concrete number, one clear stake, no hedge.
3. **Promises a specific payoff.** They will leave with a checklist / a rule / a defense / a fix.

Example (from the HIPAA field note):

> The good news first, because with HIPAA content that's a small kindness worth paying up front: none of this is as scary as it looks, and there's a clean stack that solves it. If you're a practice administrator, a medical director, or a healthcare marketing lead who's been getting nervous every time your team ships a new landing page, you're the right reader for this and you're going to leave with a checklist.

Notice: warm greeting, names the anxiety, promises the checklist. No `In today's fast-paced healthcare landscape` (that phrase is a banned example, not something to write).

## Step 4: Ban the AI tells

**Every draft is audited before shipping.** The full ban list and the audit script live in `references/ai-tells.md` and `scripts/audit_ai_tells.py`. Load and read the reference file before writing anything longer than a paragraph. Run the audit script on every long-form draft before submitting.

The short version of what is banned:

- **Em-dashes (`—`) and en-dashes (`,`)** in prose. Use commas, colons, parentheses, or periods. (En-dashes in numeric ranges like "6 to 12 months" are the only exception, and only if unavoidable, prefer "6 to 12 months.")
- **Unicode ellipsis (`...`)**. Use three periods (`...`) or rewrite.
- **Ten specific phrases** that mark AI writing at 20 paces: `delve`, `tapestry`, `realm`, `landscape`, `ever-evolving`, `in today's [world/landscape]`, `when it comes to`, `at the end of the day`, `it's worth noting`, `crucial/pivotal/myriad/plethora`. Full list in the reference.

**What is not banned** and should be kept: `I`, `we`, `you`, `us`, `our`, contractions (don't, it's, we've, you're), and the small dry asides that make the voice human ("which is either reassuring or slightly alarming depending on your management philosophy").

## Step 5: Cite everything load-bearing

**Every number, statute, case, ruling, dollar figure, percentage, and named study gets a real citation with a real URL** in inline Markdown link format. Copy the exact URL, do not paraphrase or reconstruct.

- Case citations: full case name, docket number, court, and date. Example: *American Hospital Association v. Becerra*, No. 4:23-cv-01110-P (N.D. Tex. June 20, 2024).
- Statute citations: full CFR reference. Example: 45 CFR Parts 160 and 164.
- Research citations: firm/author + year + linked URL. Example: [Gartner's B2B buying research](https://growthmethod.com/gartner-b2b-buying-journey/) found buyers spend 17%...
- Never cite a statistic you cannot produce a live URL for. If the source is gone, cut the number.

**Citation anchor text is the source name, never "source" or "here" or a raw URL.** Wrong: "revenue grew 8% ([source](https://...))." Right: "revenue grew 8% ([SEC filing](https://...))."

For long-form legal or regulated pieces, include a plain-language disclaimer at the end. See `references/disclaimers.md` for the two Isovertic house disclaimers (HIPAA/healthcare and general legal).

## Step 6: End with a specific, low-friction CTA

Never end with "contact us to learn more." End with a specific offer, a specific action, and a specific payoff time. The current house CTA:

> **If you [specific reader context], [book a pipeline call](https://isovertic.com/book) and send us [specific artifact]. In about ten minutes I'll tell you [specific answer they'll get]. Sometimes the honest answer is that you're already fine, and we're happy to say so and hand you back your afternoon.**

The "hand you back your afternoon" close is the Isovertic move. It signals we would rather lose a call than waste their time, which is exactly why they book the call.

## Step 7: Run the audit before shipping

For any long-form draft:

```bash
python3 docs/skills/isovertic-voice/scripts/audit_ai_tells.py <file.md> [<file.md> ...]
```

The script flags every em-dash, en-dash, unicode ellipsis, and banned phrase with line numbers. Fix all hits before submitting. See `references/ai-tells.md` for the fix patterns (parentheses, commas, periods, colons, contextual rewrites, not blanket sed replacement).

## Reference files

Load these when the task calls for them:

- `references/ai-tells.md`, full banned-phrase list, fix patterns, and false-positive guidance. **Read before writing anything long-form.**
- `references/structure-templates.md`, full opening templates for field notes, landing pages, sales emails, LinkedIn posts, one-pagers.
- `references/disclaimers.md`, HIPAA/healthcare and general legal disclaimers, ready to paste.
- `references/example-voice.md`, three annotated excerpts from shipped Isovertic pieces showing the voice in action.
- `scripts/audit_ai_tells.py`, audit script. Run on every long-form draft before submitting.

## What "done" looks like

A shipped Isovertic piece has:

1. Named byline, role, publish date, review date, read time
2. "What you'll take away" bullets (5 concrete promises)
3. Opening that acknowledges reader intelligence + names the honest big thing + promises the payoff
4. Zero em-dashes, en-dashes, unicode ellipses, or banned AI phrases (audit script passes clean)
5. Every load-bearing number cited with a real URL
6. Specific, low-friction CTA with "hand you back your afternoon" energy
7. Plain-language disclaimer if the piece touches HIPAA, legal, or financial territory
