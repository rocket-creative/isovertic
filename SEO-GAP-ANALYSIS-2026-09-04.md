# ISOVERTIC gap analysis: SEO, AEO, E-E-A-T, Google best practices, long tail keywords

Date: 2026-09-04
Source audited: the connected `isovertic` repo at commit 37db090 (clean working tree), 131 URLs. Every file under `app/`, `components/`, `content/`, `lib/`, plus `next.config.ts`, `robots.ts`, `sitemap.ts`, `llms.txt`, `feed.xml`.
Live checks: isovertic.com home, /field-notes, /results/sydra, /sitemap.xml, /llms.txt all load and match the repo.

Label key used below: [verified] read in the repo or fetched from the named URL today. [recalled] from memory, not checked today. [inference] my judgment.

## The verdict

The technical base is better than 95 percent of agency sites: server rendered, canonical on every route, one schema builder, llms.txt, RSS, apex redirects. That part is done. [inference]

The site will still not rank or get cited, for three reasons that no amount of schema fixes.

1. Nobody outside isovertic.com says ISOVERTIC exists. A search for the exact brand name returns no isovertic.com result in my search tool, and `site:isovertic.com` returns nothing. [verified, web search today; my tool is not Google's index, so treat as a warning, not a measurement.] Your own AEO article cites Omniscient Digital's 57 percent figure for third party citation share. You have zero third party mentions, zero reviews, zero directory profiles, zero outbound links to corroborate a single claim.
2. The 14 field notes contain zero links. Not one internal link, not one link to the 12 sources they name by name (Ahrefs, Vodori, Adwave, BioInformatics, HIPAA Journal and so on). `lib/md.tsx` cannot render a link, a list, or an H3. [verified] Google's AI features guidance lists "making your content easily findable through internal links" as one of five recommendations. [verified, developers.google.com/search/docs/appearance/ai-features]
3. The commercial pages are thin for the terms they target. Service pages run 248 to 529 words, industry pages 236 to 343, compare pages 188 to 268, the Long Island page about 140. [verified, word counts below] Competitors ranking for "life science marketing agency" today (Altitude, BioStrata, Forma, Marzipan, Supreme Optimization) run dedicated multi thousand word pages with that phrase in the title. That phrase appears in none of your titles or H1s. [verified, search today]

Fix those three and the rest of this document is polish.

## 1. Technical SEO and indexing

Severity: High unless noted.

1.1 Sitemap lastmod is a build timestamp. `app/sitemap.ts` sets `lastModified: now` for core, service, industry, compare, people, and glossary URLs. Live sitemap shows `2026-09-04T18:05:17.781Z` on most of 131 URLs. [verified] Google: "Google uses the lastmod value if it's consistently and verifiably accurate" and ignores priority and changefreq. [verified, developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap] Every deploy claims every page changed, so Google will learn to ignore your lastmod, which then hurts the articles where it is real. Fix: store a `dateModified` on every content object (services, industries, compares, glossary, people) and drop priority and changefreq.

1.2 Three articles are published with future dates. `mlr-review-for-marketing-content` 2026-09-11, `hipaa-compliant-lead-generation` 2026-09-18, `how-to-get-cited-by-ai-search` 2026-09-25. All three are live, in the sitemap, in the feed, and carry `datePublished` in the future inside Article schema. [verified] Google has flagged future dates as an inaccuracy signal in structured data. [recalled] Fix today: set them to the real ship date or hold the files until the date.

1.3 Breadcrumb schema points the middle crumb at the page itself. `PageTemplate` receives `crumbRoot` with `path: "/industries/" + slug`, `"/compare/" + slug`, or the service path, so BreadcrumbList item 2 and item 3 share one URL on 15 pages. [verified, app/industries/[slug]/page.tsx, app/compare/[slug]/page.tsx, six service routes] The hubs those crumbs imply (`/industries`, `/compare`, `/services`) do not exist. Fix: build the three hub pages (they are also the missing category landing pages, see section 4) and point the crumbs at them.

1.4 Field notes index sorts alphabetically. `lib/articles.ts` sorts by title, so the newest piece can sit at position 14 and the index shows a static numbered list. [verified] Sort by `datePublished` desc and show the date.

1.5 Every answer carries the same hardcoded date. `content/answers.ts` uses `const d = "2026-09-04"` for all 48 entries, which then feeds "Updated" on the page, `dateModified` in schema, and sitemap lastmod. [verified] It is true today and false on every day after. Give each entry its own date and touch it only when the answer changes.

1.6 Medium. No privacy policy, no terms, no cookie or data notice anywhere in `app/`. [verified, full route list] The contact form collects name, email, company, spend. The site sells "privacy documentation drafted for real review" and a HIPAA form stack while having no privacy page of its own. Google Ads lead form policy requires a linked privacy policy on landing pages [recalled], and every E-E-A-T trust checklist starts here. Add `/privacy` and `/terms`, link both from the footer.

1.7 Low. `robots.ts` allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended. Missing explicit entries for OAI-SearchBot (ChatGPT search citations), Applebot-Extended, Amazonbot, meta-externalagent, CCBot. Default `*` allow already covers them, so this is documentation, not access. Google states no AI text files or special markup are needed for AI Overviews or AI Mode. [verified, same ai-features URL]

1.8 Low. No `apple-touch-icon`, no web manifest, single `og.png` (1200x630, 58 KB) reused by all 131 URLs. Per page OG images matter for LinkedIn and Slack shares, which is where your buyer actually sees a link. [inference]

## 2. Structured data

2.1 High. QAPage on 48 answer pages is the wrong type. Google: "Don't use QAPage markup for content that has only one answer for a given question with no way for users to add alternative answers," and lists "an FAQ page written by the site itself" as an invalid use. [verified, developers.google.com/search/docs/appearance/structured-data/qapage] `lib/schema.ts qaLd()` does exactly that. It will not produce a rich result and reads as misuse. Replace with `Article` (headline = question, `about` = the entity, `author` = person @id) plus optional single item `FAQPage`. Keep the on page format; the format is right, the markup is wrong.

2.2 Medium. FAQPage schema is on roughly 20 pages. Google's FAQPage doc now states the FAQ rich result is no longer shown in Search (removed May 2026). [verified, developers.google.com/search/docs/appearance/structured-data/faqpage] Harmless to keep; stop expecting anything from it. The `/answers` index also wraps all 48 answers in one FAQPage while each answer has its own page, so the same Question entity is declared twice sitewide. Drop it from the index.

2.3 Medium. `serviceLd` fires on compare pages, producing a `Service` named "An Abstrakt alternative for founders who want the senior team, not the machine." [verified, PageTemplate.tsx line 786 and compare routes] Compare pages should carry `Article` or `WebPage` with `about` referencing both organizations.

2.4 Medium. Two local business entities with conflicting addresses. `organizationLd` (ProfessionalService, @id #org) has the full Bohemia street address and phone. `localBusinessLd` (@id #local) is a second LocalBusiness with `addressLocality: "Long Island"` (not a municipality), no street, no phone, no geo, no hours. [verified, lib/schema.ts] Google reconciles one entity per business. Delete #local; on /long-island emit #org with `areaServed` for Nassau and Suffolk.

2.5 Medium. NAP is invisible. Address, phone, and email exist only inside JSON-LD. The footer shows "Long Island, New York"; /contact shows no address, phone, or email. [verified] Local ranking and Google Business Profile matching need visible, consistent NAP. Put the Bohemia address and phone in the footer and on /contact and /long-island as text.

2.6 Medium. Person and Article schema lack images. No `image` on either Person, no author photos anywhere (the site renders "GS" initials in a box), no `image` on any Article or case study, no `dateModified` on case study Article. [verified] Google's Article documentation lists `image` among recommended properties [recalled]. Add real headshots and a per article image.

2.7 Low. Article `author` and `publisher` are bare `@id` references to nodes emitted in a separate script tag in the root layout. Google merges JSON-LD blocks on one page [recalled], but confirm in the Rich Results Test on one article and one answer before assuming author attribution resolves.

2.8 Low. Organization has `sameAs: [LinkedIn]` only. Add Crunchbase, Clutch, G2, Google Business Profile, YouTube, X, and the Rocket Creative LLC site if it is live, as `alternateName: "Rocket Creative"` plus `sameAs`. Kristen has no `sameAs` at all. This is the machine readable half of the entity problem in the verdict.

## 3. On page: titles, descriptions, headings

3.1 High. 34 of 48 answer page titles exceed 60 characters (longest 97), because the title is the full question plus " | ISOVERTIC". All 48 answer meta descriptions run 175 to 260 characters (the 40 word answer verbatim). 17 of 18 glossary descriptions exceed 160. [verified, computed] Google truncates title links to device width and rewrites long ones. [verified, developers.google.com/search/docs/appearance/title-link] Add a `metaTitle` field (55 to 60 chars, keyword first) and a `metaDescription` field (about 150 chars) to `Answer` and `Term`. Keep the question as H1.

3.2 High. H1s carry brand voice and no query language. Home: "We build your pipeline. You close it." SEO page: "Be the answer." Web page: "Your website is the asset every dollar flows through." TV: "TV is no longer above your pay grade." Brand: "Look like the firm they should have called first." Biotech: "Scientific authority, engineered for demand." Startups: "A pipeline before the sales hire." [verified] Keep the line, add the entity: "Life science marketing agency: scientific authority, engineered for demand." Same treatment on the six service pages and the six industry pages.

3.3 Medium. Ten static titles run 62 to 73 characters (home 73, design brand 71, Long Island 65, home services 65, SEO 64, biotech 64, healthcare 63). [verified, computed] Trim to 60.

3.4 Medium. Field notes index title is "Field Notes | ISOVERTIC" with no topic. [verified] Make it "Outsourced Sales and Marketing Field Notes | ISOVERTIC".

3.5 Low. `CTABand` renders an `<h2>` reading "Your only job is to close." on every page, and `WhyBuyers` and `AiHuman` repeat identical H2 blocks on home and how it works. [verified] Not a penalty, but it dilutes the heading outline on every URL. Make the CTA line a `<p>`.

## 4. Content architecture, duplication, internal links

4.1 Critical. Articles have zero links and lose their list structure. `lib/md.tsx` handles `## ` and paragraphs only. The two listicles ("5 Abstrakt alternatives," "7 best appointment setting companies") render their numbered list as one paragraph; no `<ol>`, no H3 per company, no link to the vendors named. No article links to /pricing, /answers, /glossary, a service page, or a source. [verified] Per article internal link count from body copy: 0 across 14 articles. Fix: replace `renderMd` with a real markdown renderer (remark or markdown-it, server side), then add 4 to 8 internal links and every named source as an outbound link in each piece. This is one afternoon and the single highest return item in this document.

4.2 High. Category hubs do not exist. Footer links six industries and six services, breadcrumbs imply `/industries`, `/compare`, and a services parent, none of which exist. [verified] Those hubs are also the pages that would target "life science marketing agency," "healthcare marketing agency," "startup marketing agency," and "outsourced sales and marketing services," none of which have a page today. See the keyword map in section 8.

4.3 High. Same topic, four to six URLs, no declared hub. Examples [verified]:
AEO: /seo-content, /glossary/answer-engine-optimization, /answers/what-is-aeo, /answers/how-do-i-get-my-company-cited-by-chatgpt, /answers/does-ranking-on-google-mean-ai-will-cite-you, /field-notes/how-to-get-cited-by-ai-search.
Cost: /pricing, /field-notes/outsourced-sales-marketing-cost, /answers/what-does-appointment-setting-cost, /answers/how-much-does-a-life-science-marketing-agency-cost, /compare/agency-vs-in-house, /field-notes/hire-salesperson-or-outsource.
MLR: /field-notes/mlr-review-for-marketing-content, /glossary/mlr-review, plus four answers.
HIPAA: the article, two glossary terms, three answers.
Each cluster needs one page declared the hub (the article or the service page) that every sibling links to, and the hub linking to all siblings. Right now glossary and answers link to related items; the articles and service pages link back to nothing.

4.4 Medium. Duplicated blocks across URLs. The tier cards and the six row tier grid appear on /pricing and /how-it-works with identical text; the tiers array is copied into `app/pricing/page.tsx` instead of imported from `content/tiers.ts` (your own CLAUDE.md rule, and a drift risk: `content/tiers.ts` and `app/pricing/page.tsx` already carry the same tables twice). /about repeats both bios word for word from /people/*. [verified] Keep the grid on /pricing, summarize on /how-it-works, and cut /about bios to two sentences each with a link.

4.5 Medium. One number, two versions. ProofBand, /results roster, answers, and the glossary say "147 pages" for the ITL work. The ITL case study says "Over 14,000 pages shipped." [verified, components/sections/ProofBand.tsx, app/results/page.tsx line 459, content/case-studies.ts line 167] Both may be true (147 hand written service pages plus a 14,000 page catalog), but no page says so, and a skeptical PI or an AI model will read it as a contradiction. Write one sentence that reconciles it and use it everywhere.

4.6 Medium. Case studies never link to the client. `sourceDomain` exists on every study (genetargeting.com, sydra.health, kaverasoft.com) and is never rendered. [verified] An outbound link to the named client is the cheapest corroboration you can add.

4.7 Low. Article body length 537 to 652 words for 13 of 14 pieces; the guide is 997. [verified] For "complete guide" and "best companies" queries where the current top results are G2, TrustRadius, Martal, and Callbox pages, 600 words will not hold. [verified for the SERPs, inference for the conclusion] Target 1,500 plus on the five commercial intent articles (guide, cost, best companies, Abstrakt alternatives, HIPAA) and leave the rest.

## 5. E-E-A-T

What is present and good: named authors with bios and credentials, reviewer field on articles, a published reporting method with baseline windows, named clients with permission, published pricing, a founder on the account. [verified] That is more than most agencies show.

What is missing, in order of weight:

5.1 Trust, external. No reviews, no testimonials, no client quotes, no press, no directory profiles, no awards, no partner badges (Google Partner, HubSpot, Vercel), no case study link to the client. The only external link on the whole site is one LinkedIn profile. [verified] Actions: Google Business Profile for Rocket Creative LLC / ISOVERTIC at the Bohemia address with reviews; Clutch and G2 profiles; one named quote per case study with title and company; a press or "as seen in" row once there is anything real to put in it.

5.2 Experience, shown not claimed. "Thirty years" or "30 years" appears five times; nothing dated backs it. No timeline, no list of shipped products (Vela Photo and the other properties you operate), no talks, no publications, no screenshots of Search Console behind the case study multiples. [verified for the copy, inference for the fix] Add a dated career line to each person page and a redacted Search Console screenshot to each case study under the method section.

5.3 Expertise, sourced. Twelve sources are named by name and none is linked. [verified] Link every one. For the medical and legal claims (AHA v. Becerra, the settlement amounts, PHI definitions) link the primary source, not HIPAA Journal.

5.4 Author entity. No headshots, no `image` in Person schema, Kristen has no `sameAs`, and neither person has a byline anywhere off this domain that I can find. [verified for the site] Headshots this week. Then two guest bylines each on industry sites (life science trade press, healthcare marketing publications) with a link back to /people/*.

5.5 Bio copy. Kristen's bio opens with "bringing a powerful combination of scientific discipline and business acumen." [verified] It is the one paragraph on the site that reads like a template. Rewrite in the site voice: the CRO name, the years, the model types she sold, the medical school department.

5.6 Legal entity. The footer says "ISOVERTIC is an assumed name of Rocket Creative LLC" and schema has `legalName`. [verified] If Rocket Creative LLC has any web presence, reviews, or DBA filing that can be linked, link it; the entity graph currently starts and ends on this domain.

## 6. AEO (answer engine readiness)

Done well: one question per page, answer in the first sentence, server rendered, glossary as DefinedTerm, llms.txt with all 48 answers and 18 terms inline, RSS, AI crawlers allowed. [verified]

Gaps:

6.1 Third party presence is the bulk of citation share and it is zero. See 5.1. Your own article and answers cite the 57 percent figure. [verified]

6.2 Answer pages have no `dateModified` truth and the wrong schema type. See 1.5 and 2.1.

6.3 The glossary and answers overlap word for word (AEO definition on /glossary/answer-engine-optimization and /answers/what-is-aeo is the same sentence). [verified] An engine picks one; you have not told it which. Make the glossary the definition and the answer the "how," and cross link.

6.4 No comparison tables, no data tables. Engines extract tables readily. The pricing grid is a table; the cost article, the appointment setting cost answer, and the CTV article are prose with numbers that belong in a table. [inference]

6.5 No video, no images, no transcripts, although Kinetic sells "YouTube channel build." Google's AI features guidance: "supporting your textual content with high quality images and videos, when applicable." [verified, same URL] One founder video per service page with a transcript on the page would be the first video in this category with server rendered text behind it.

## 7. Google search best practices, remaining items

7.1 Nav depth is fine: footer links every hub, all 131 URLs are two clicks from home. [verified]
7.2 Redirects www and vercel.app to apex, canonical on every route, metadataBase from env. Good. [verified]
7.3 `content-visibility: auto` on deferred sections and `.reveal { opacity: 0 }` under `prefers-reduced-motion: no-preference`. Text is in the HTML, CountUp renders the final number server side, FAQ panels are in the DOM. [verified] Googlebot's renderer handles IntersectionObserver [recalled]; confirm once with the URL Inspection "view rendered HTML" that reveal blocks show `in`.
7.4 No `next/image`, no images at all in content, so nothing to rank in image search and nothing for AI Overviews to pull a visual from. [verified]
7.5 Local. /long-island is about 140 words with three FAQs and no NAP, no map, no reviews, no town or county pages, and its meta description makes an unverifiable superlative ("The only Long Island growth firm"). [verified] Competitors in the "Long Island healthcare marketing agency" results (Rockstar Digital, Upside, Innovare, Sommers) each have a dedicated Long Island healthcare page. [verified, search today] Build /long-island/healthcare-marketing and /long-island/b2b-appointment-setting, 800 plus words each, NAP and map on all three.

## 8. Long tail keyword coverage and ranking

Ranking data: none available to me. No Search Console, Semrush, or Ahrefs is connected, and my search tool is not Google's index. What I can report:

Brand query "isovertic" returns no isovertic.com result and `site:isovertic.com` returns nothing in my tool. [verified today] Four long tail spot checks on article targets: "abstrakt marketing group alternatives" (top results G2, TrustRadius, FreshySites, SalesHive), "how to market a CRO without a sales team" (top results are all conversion rate optimization pages), "MLR review process for marketing content" (Vodori, Filestage, Prezent, Improvado). isovertic.com in none. [verified today]

To measure for real: verify the domain in Search Console this week, then export Performance by page and query monthly; that is the only ranking source worth trusting for a site this new. If you want a tool, Ahrefs or Semrush both track long tail positions per URL. I have not checked their current pricing.

Search volumes below are not provided because I have no verified source for them; every "gap" is based on what competitors rank pages for today and on what your buyer pages already say. Phrases in quotes are query language, not titles.

Coverage map, one row per cluster:

| Cluster and intent | Query language your buyers use | Page carrying it today | Gap | Action |
|---|---|---|---|---|
| Life science agency (commercial) | "life science marketing agency", "biotech marketing agency", "CRO marketing agency", "marketing agency for contract research organizations", "life science lead generation company" | /industries/biotech (title "Marketing and Outbound for Biotech and Life Sciences") | Phrase absent from every title and H1; 265 words vs multi thousand word competitor pages | Rename and expand to "Life Science Marketing Agency" page at 1,500 plus words; add CRO, tools, and diagnostics sub sections; keep URL, 301 not needed |
| CRO ambiguity | "how to market a CRO" | field note | SERP reads CRO as conversion rate optimization | Retitle to "How to Market a Contract Research Organization Without a Sales Team"; use "contract research organization" in H1, first sentence, and slug or keep slug with the full phrase in the title |
| Healthcare agency (commercial) | "healthcare marketing agency", "medical practice marketing company", "HIPAA compliant marketing agency", "concussion clinic marketing", "orthopedic practice lead generation" | /industries/healthcare | 334 words; phrase "healthcare marketing agency" absent from title and H1 | Expand; add service line sub pages the ISS Health work already proves (concussion, spine, ortho) |
| Startup agency | "startup marketing agency", "seed stage marketing agency", "fractional marketing for startups", "outsourced SDR for startups" | /industries/startups | Phrases absent from title; no fractional angle | Expand, add "fractional marketing team" language which is what founders type |
| Outsourced pipeline (head, commercial) | "outsourced sales and marketing services", "outsourced sales and marketing company", "growth partner agency", "B2B pipeline agency" | /pricing title; guide article; home | No commercial landing page for the head term; home H1 has no query language | Build /outsourced-sales-and-marketing (or make /how-it-works carry the phrase); this is the services hub from 4.2 |
| Appointment setting (commercial) | "B2B appointment setting services", "appointment setting company for healthcare", "life science appointment setting", "outsourced SDR healthcare", "appointment setting for medical device companies" | /outbound-appointment-setting (529 words) | Vertical modifiers missing; competitors have per vertical pages | Add three vertical sections or child pages: healthcare, life science, SaaS |
| Appointment setting cost (informational) | "how much does appointment setting cost", "appointment setting pricing per meeting", "cost per meeting benchmark" | answer + cost article | Two pages split the query, neither has a table | Table on the answer page; article links to it |
| Competitor alternatives | "Abstrakt alternatives", "Belkins alternative", "CIENCE alternative", "Callbox alternative", "Martal Group alternative", "SalesRoads alternative" | 2 compare pages + 2 listicles | Only 2 of 6 competitors have pages; the SERP is review platforms | Add CIENCE, Callbox, Martal, SalesRoads compare pages using the existing template; get on G2 and Clutch so the review SERP includes you |
| MLR and compliance (informational) | "MLR review process", "MLR review checklist", "claim library template", "how long does MLR review take", "MLR review for social media" | article, glossary, 4 answers | Strong coverage, no links between them, no checklist or template asset | Make the article the hub; add a downloadable checklist (gated only by email) which also earns links |
| HIPAA marketing (informational) | "HIPAA compliant lead generation", "HIPAA compliant contact form", "Meta pixel HIPAA", "HIPAA compliant call tracking", "Google Ads conversion tracking HIPAA" | article, 2 terms, 3 answers | Same hub problem; no vendor list (which form tools sign a BAA) | Add a vendor table to the article: form, email, CRM, call tracking, BAA yes or no |
| AEO (informational) | "how to get cited by ChatGPT", "answer engine optimization agency", "AEO for B2B", "AI search optimization for healthcare", "get cited in AI Overviews" | 6 URLs | Cannibalized; no commercial AEO service page; /seo-content H1 lacks "SEO" | Commercial: retitle /seo-content to "SEO and AI Search Optimization Agency"; informational: article as hub |
| CTV (commercial and informational) | "CTV advertising for small business", "connected TV advertising cost", "streaming TV ads for medical practices", "local CTV advertising agency" | service page + article + 2 answers | Service page H1 has no keyword; no local CTV page | H1 and title fix; add Long Island CTV section |
| Programmatic and entity pages (commercial) | "programmatic SEO agency", "programmatic SEO for life science", "product catalog SEO", "searchable repository method" | answer, glossary, case study | The ITL and Sydra studies are proof for a service nobody can find; "Searchable Repository Method" is a coinable term with one mention | Service page /programmatic-seo with the two case studies as proof; define the method as a glossary term and an answer |
| Local (commercial) | "Long Island marketing agency", "Suffolk County marketing agency", "Long Island healthcare marketing", "Long Island B2B lead generation", "Bohemia NY marketing agency" | /long-island (140 words) | Thin, no NAP, no sub pages, no reviews | Section 7.5 |
| Glossary long tail | "what is a claim library", "what is a BAA in marketing", "exposed versus control test", "cost per meeting formula" | 18 terms | Definitions are good; 18 is small for a glossary meant to earn citations | Grow to 60 plus terms over two quarters, 5 a month, each 150 plus words with a source link |

Priority inside the map: rows 1, 5, 6, and 14 are commercial pages that do not exist or do not name their query; they come before every informational row.

## 9. Fix order

Week 1 (no new content): real markdown renderer plus links in all 14 articles (4.1); publish dates fixed (1.2); per item dates (1.1, 1.5); privacy and terms (1.6); QAPage to Article (2.1); delete #local, visible NAP (2.4, 2.5); reconcile 147 vs 14,000 (4.5); client links on case studies (4.6); Search Console verified.

Weeks 2 to 4: metaTitle and metaDescription fields on answers and glossary (3.1); H1 and title rewrites on 12 commercial pages (3.2, 3.3); three hub pages and breadcrumb fix (1.3, 4.2); headshots and Person image (2.6); Google Business Profile, Clutch, G2 (5.1).

Months 2 to 3: expand biotech, healthcare, startups, appointment setting, and Long Island pages to 1,500 plus words with the query phrases (section 8 rows 1 to 6, 14); four more compare pages; one named quote per case study; two guest bylines per author; first founder videos with transcripts.

## Assumptions

I audited the repo at commit 37db090 and treated it as what is deployed; the four live pages I fetched matched. I did not run `npm run build` or the Rich Results Test. I have no search volume or ranking data; every keyword judgment is based on today's SERPs and your own copy. Word counts count quoted strings over six words in content files and body text in articles, so they are approximate within about 10 percent. Google document quotes were fetched today from the URLs named; the FAQ deprecation date in Google's doc rendered inconsistently in my fetch (May 2025 and May 2026 both appeared); the operative fact is that the doc states the rich result is no longer shown.

Sources read today:
Google AI features guidance: https://developers.google.com/search/docs/appearance/ai-features
Google QAPage guidance: https://developers.google.com/search/docs/appearance/structured-data/qapage
Google FAQPage guidance: https://developers.google.com/search/docs/appearance/structured-data/faqpage
Google sitemap guidance: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
Google title link guidance: https://developers.google.com/search/docs/appearance/title-link
Competitor SERP checks (life science agency): https://altitudemarketing.com/life-sciences-marketing/ , https://www.biostratamarketing.com/the-best-life-science-marketing-agencies , https://www.formalifesciencemarketing.com/ , https://wearemarzipan.com/life-science-marketing , https://www.supremeopti.com/
Competitor SERP checks (Long Island healthcare): https://www.rockstardigitalmedia.com/industries-we-serve/long-island-healthcare-marketing-company/ , https://upsidebusiness.com/medical-marketing-healthcare-marketing-new-york/ , https://innovaremedia.com/areas-we-serve/new-york/long-island/ , https://sommersmarketinggroup.com/healthcare-digital-marketing-agency-long-island.html
Competitor SERP checks (Abstrakt alternatives): https://www.g2.com/products/abstrakt-marketing-group/competitors/alternatives , https://www.trustradius.com/products/abstrakt/competitors , https://saleshive.com/vendors/abstrakt-marketing-group
