# AI Tells: Banned Phrases and Fix Patterns

This is the full ban list. The audit script (`scripts/audit_ai_tells.py`) checks every item here. Read this file before writing anything longer than a paragraph.

**Note on this file:** This reference deliberately contains every banned character and phrase in order to document them. Running the audit on this file will produce hits (that's expected). The audit is meant to run on your drafts, not on the rulebook itself.

## Punctuation bans

| Character | Banned in | Why | Fix |
|---|---|---|---|
| Em-dash `—` | All prose | The single strongest AI tell. Human writers use them, but AI uses them constantly. | Replace contextually: comma, colon, parentheses, period + new sentence. Never blanket-replace. |
| En-dash `–` | Prose sentences | Same tell, subtler. | Same fixes. En-dash in numeric ranges (`6–12 months`) is tolerated only if the range wording is awkward — prefer "6 to 12 months." |
| Unicode ellipsis `…` | Everything | Nobody types this by hand. | Three periods `...`, or rewrite. |
| Curly quotes `""` `''` | Not banned | These come from copy-paste from Docs. The audit will flag them but they're not a tell. | Leave unless the client CMS mangles them. |

### How to remove an em-dash (choose the right fix)

The most common fix mistake is blanket-replacing every em-dash with a comma. Read the sentence and pick:

- **Parenthetical aside** → parentheses. `The ruling changed less than most marketers assume — and the gap is where the lawsuits will come from.` → `The ruling changed less than most marketers assume, and the gap is where the lawsuits will come from.`
- **Trailing thought / afterthought** → period + capital. `The plaintiffs' bar responded — and filed accordingly.` → `The plaintiffs' bar responded. They filed accordingly.`
- **Compound sentence** → comma or semicolon. `We ship this on every account — it's a stack, not a policy document.` → `We ship this on every account; it's a stack, not a policy document.`
- **Emphasis / definition** → colon. `The court vacated one specific portion — the Proscribed Combination.` → `The court vacated one specific portion: the Proscribed Combination.`
- **Interrupter / mid-sentence list** → parentheses. `Every marketing team — including some very good ones — is still getting this wrong.` → `Every marketing team (including some very good ones) is still getting this wrong.`
- **Section heading with dash** → "and" or comma. `## The limit — where this doesn't cover you` → `## The limit, and where this doesn't cover you`

## Banned phrases (audit script flags these)

Each has been observed in AI output enough times that any competent editor recognizes it in one read. Case-insensitive, word-boundary matched.

### The top ten offenders (never use)

1. `delve` / `delving` / `delve into`
2. `tapestry` (of anything)
3. `realm` (of anything)
4. `landscape` (of anything — "healthcare landscape," "the marketing landscape")
5. `ever-evolving` / `ever-changing` / `ever-growing`
6. `in today's [world / landscape / market / environment]`
7. `when it comes to`
8. `at the end of the day`
9. `it's worth noting that` / `it's important to note that` / `it's important to remember`
10. `crucial` / `pivotal` / `myriad` / `plethora`

### The next fifteen (also banned)

11. `harness` / `harnessing` (as verb — "harness the power of")
12. `leverage` / `leveraging` (as verb — say "use")
13. `robust` (as adjective for anything except a wine or a coffee)
14. `seamless` / `seamlessly`
15. `cutting-edge` / `state-of-the-art` / `world-class` / `top-notch` / `best-in-class`
16. `game-changer` / `game-changing` / `revolutionize` / `revolutionary`
17. `unlock` (as verb — "unlock value," "unlock potential")
18. `empower` / `empowering` / `empowerment`
19. `elevate` (as verb — "elevate your marketing")
20. `transformative` / `transformational`
21. `holistic` / `holistically`
22. `synergy` / `synergies` / `synergistic`
23. `foster` (as verb — "foster growth")
24. `cultivate` (as verb — "cultivate relationships")
25. `embark on` / `embark upon`

### The tell-transitions (banned)

26. `moreover`
27. `furthermore`
28. `additionally` (as sentence opener)
29. `nonetheless` (as sentence opener)
30. `indeed` (as standalone emphasis)
31. `in conclusion`
32. `in essence`
33. `in practice,` (as sentence opener — the comma is the tell)
34. `first and foremost`
35. `last but not least`
36. `that said,` (as sentence opener)
37. `case in point`

### The tell-openers (banned)

38. `let's dive into` / `let's dive deep` / `dive into` / `deep dive`
39. `let's explore` / `let's take a look` / `let's walk through` / `let's unpack`
40. `at its core` / `at the heart of`
41. `shed light on`
42. `paves the way`
43. `in light of`
44. `the fact that` (almost always cuttable — say what the fact is)
45. `not only X but also Y` (structure is fine occasionally, phrase is a tell)
46. `a wealth of` / `a plethora of` / `a myriad of`
47. `testament to`
48. `meticulous` / `meticulously`
49. `journey` (in the marketing sense — "customer journey," "buying journey"). Say "buying process" or "sales cycle."
50. `honestly` / `frankly` as sentence intensifier (used to fake candor)

## What is NOT a tell (keep these)

- **`I`, `we`, `you`, `us`, `our`** — first and second person are the Isovertic voice. Never cut them.
- **Contractions** — `don't`, `it's`, `we've`, `you're`, `won't`, `can't`, `isn't`. Human writing uses them constantly.
- **`Here's the honest part.` / `The honest big number.`** — "honest" as an adjective describing a specific thing is fine. Only `honestly` as intensifier is banned.
- **`So` at the start of a sentence** — conversational, not AI. Keep.
- **`Look,` or `Look.` as an opener** — conversational move. Keep sparingly.
- **Sentence fragments for emphasis** — "Cold outbound. Cheap lead magnets. A quarterly review that judges revenue on a marketing cycle that hasn't finished yet." This is voice, not a tell.
- **The Oxford comma** — house style. Always use.

## Common false positives the audit will flag (ignore them)

- **"journey" inside URL slugs** (e.g., `gartner-b2b-buying-journey`) — the reader sees only anchor text; the slug is invisible. Fine.
- **"landscape" as a literal noun** — a photograph is a landscape. A meadow is a landscape. Only the metaphorical "healthcare landscape" is a tell.
- **"cohort" in scientific pieces** — this is real technical vocabulary in genetics and medicine. Never cut.
- **Curly-quote flags on straight ASCII contractions** — the audit script sometimes false-positives on `'s` in `it's`. Confirm visually before touching.

## The one-line rule

If a phrase would appear in a mid-tier LinkedIn thought-leadership post, do not write it. The Isovertic voice sounds like a smart operator explaining something at a coffee, not a growth hacker posting a thread.
