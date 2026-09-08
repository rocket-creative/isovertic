# Site voice audit week 3 results
Generated from source copy in `content/`, `app/`, and `components/` (excluding `content/articles/`, already voice-audited).
## Agency vs In-House table render check
- Page: `/resources/agency-vs-inhouse`
- Method: inspected prerendered HTML in `.next/server/app/resources/agency-vs-inhouse.html` after `npm run build`
- Result: **PASS**. `<td>` cells contain text (default calculator figures). Not empty. No refactor needed.
## Kristen bio disclosure
- Added under bio on `/people/kristen-coughlin`. Wording matches prior Ingenious Targeting Laboratory history already stated in her bio.
## Hits in commit 1 / commit 2 files
| File | Line | Item | Snippet |
|---|---|---|---|
| `app/results/page.tsx` | 22 | ecosystem | { name: "Pathways Within", tag: "Wellness and behavioral health", href: "/industries/healthcare", work: "A two phase pla |

## Hits in existing copy (not auto-fixed; for Kristen)
Prompt instruction: flag only, do not global find-and-replace.

| File | Line | Item | Snippet |
|---|---|---|---|
| `content/audit.ts` | 22 | unlock | label: "Unlock the written diagnosis", |
| `content/audit.ts` | 24 | unlock | error: "A work email is required to unlock the diagnosis.", |
| `app/audit/actions.ts` | 13 | unlock | if (!EMAIL_RE.test(email)) return { ok: false, error: "A work email is required to unlock the diagnosis." }; |
| `components/audit/AuditWizard.tsx` | 110 | unlock | <button type="submit" disabled={pending} className="btn btn-solid">{pending ? "One moment" : "Unlock"}</button> |

**Totals:** 1 in week-1/2 files, 4 in other existing copy.
