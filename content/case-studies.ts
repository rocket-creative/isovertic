// Adding a case study:
// 1. Copy an entry. clientName must match the /results roster heading exactly. Set studyType: growth for an existing company, launch for one that did not exist before we started.
// 2. Exactly 6 stats. Multiples, ranges, percentages, or relative months. No raw counts, no dates, no URLs.
// 3. steps holds only the steps we ran, keyed Build, Rank, Run, Buy, Book, Educate. The page fills in the rest.
// 4. Growth: timeline in months from engagement start, nothing past month 8. Launch: timeline in weeks, nothing past day 90.
// 5. Computing stats, same for every brand: baseline = mean of the 6 calendar months before engagement start.
//    Result = mean of engagement months 5 through 8. Stat = result / baseline, one decimal, suffix "x".
//    Sources: Search Console monthly export (clicks, impressions, avg position) and CRM contacts by first conversion date.
//    Position shows as "before to after", whole numbers. Organic share = organic sourced form fills / all form fills, months 5 through 8.
//    Launch studies: multiples = last 4 weeks / first 4 weeks of the 90 day window, impression weighted position, plus query and page one counts from the Search Console query export.
//    baselineNote must state the window per stat and flag any tracking gap.
// 6. Save the exports behind every stat to the shared drive under the slug before publishing.
// 7. No hyphens or dashes in any string. Search the file for "-" before committing.
// 8. Get the client's written approval to show these numbers next to their name.
//    Then set publishedDate and flip published to true. Never publish with "TBD" or "[CONFIRM]" anywhere in the entry.

export type Step = "Build" | "Rank" | "Run" | "Buy" | "Book" | "Educate";

export type CaseStudyStat = {
  value: string; // "6.5x", "16 to 10", "70%", "Month 8"
  label: string; // one line
  note?: string; // optional second line
};

export type CaseStudy = {
  slug: string;
  studyType: "growth" | "launch"; // growth = first 8 months against a prior baseline. launch = first 90 days of a company that did not exist before.
  clientName: string; // as it appears on /results. Must match the roster heading text exactly so the roster can join on it.
  clientDescriptor: string; // one line, what the company is
  industry: string; // eyebrow, matches the roster's category label
  title: string; // H1
  summary: string; // 2 to 3 sentences, future facing
  stats: CaseStudyStat[]; // exactly 6. Multiples, ranges, percentages, or relative months only.
  situation: string[]; // paragraphs
  steps: Partial<Record<Step, { heading: string; body: string }>>; // only steps we ran. The page renders all six; missing ones show "Not in this engagement".
  whyItWorked: string[];
  timeline: { month: string; text: string }[]; // relative months only
  fits: string[]; // 3 to 5
  baselineNote: string; // the before window per stat and any tracking gap
  dataSources: string[]; // export types. No URLs, no account IDs.
  metaTitle: string;
  metaDescription: string;
  publishedDate: string; // ISO
  published: boolean; // false = draft. Never rendered, no static params, no sitemap, no ticker, no roster strip.
  sourceDomain: string; // internal. Never rendered anywhere.
};

export const STEP_ORDER: Step[] = ["Build", "Rank", "Run", "Buy", "Book", "Educate"];

// Rendered on every study and once on /results. Fixed copy, do not edit.
export const REPORTING_METHOD = {
  heading: "How we report these numbers",
  paragraphs: [
    "Every growth case study on this site covers the first eight months of an engagement and nothing after. We chose a fixed window so studies are comparable to each other and so a strong later month cannot inflate the story.",
    "A launch study is different. When a company did not exist before we started, there is no baseline to divide by, so we report the first ninety days: the last four weeks against the first four, and how many searches the new domain appears for. A launch study measures visibility. Lead figures are added at month eight under the growth method.",
    "Each result is the average of months five through eight of the engagement divided by the client's own average over the six months before our start date. Same window for every stat and every brand, so no study can pick a flattering baseline. Where a client's tracking was broken before we arrived, we say so and report current share rather than growth.",
    "Clients are named with their permission. Raw exports behind any figure, including search console and CRM data, are available on request under NDA.",
    "Across the other brands we run, first eight month results have landed within a few points of the studies shown here. Each is added as it passes month eight.",
  ],
};

export const STUDY_WINDOW_NOTE: Record<CaseStudy["studyType"], string> = {
  growth: "First eight months of engagement. Multiples against the client's own prior six month baseline. Method and sources below.",
  launch: "First ninety days of a new company. Last four weeks against the first four. Method and sources below.",
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ingenious-targeting-laboratory",
    studyType: "growth",
    clientName: "ingenious targeting laboratory",
    clientDescriptor: "Mouse model CRO with more than 14,000 catalog products",
    industry: "Biotech and life sciences",
    title: "From page two of Google to 6.5x the inbound leads within eight months",
    summary: "Today this lab's sales team opens a full inbox every morning. Organic search brings in roughly seven of every ten form fills, the catalog ranks on page one for the product searches researchers actually type, and month eight was the best organic month on record. A year ago none of that existed.",
    stats: [
      { value: "6.5x", label: "Inbound form fills", note: "Months five through eight against the six months before start" },
      { value: "3.7x", label: "Organic search clicks" },
      { value: "3.6x", label: "Search impressions" },
      { value: "16 to 10", label: "Average Google position", note: "Page two to page one" },
      { value: "70%", label: "Of form fills now come from organic search", note: "Current share; prior tracking was broken" },
      { value: "Month 8", label: "Best organic month on record", note: "Still climbing" },
    ],
    situation: [
      "The company had spent two decades building one of the largest catalogs in its category, more than 14,000 mouse models, each with real specifications, real publications behind it, and real buyers looking for it. Almost none of it was indexed. Google saw a handful of service pages and a search box.",
      "Inbound leads had sat flat at the same monthly average for over a year. Marketing attribution had been broken for months, so nobody could say where the leads that did arrive came from. Paid search covered the gap at a cost that grew every quarter.",
    ],
    steps: {
      Build: { heading: "Every product became a page", body: "We rebuilt the catalog as a searchable repository: one server rendered page per model, generated from the company's own data, with full schema markup and a request form on every page. Over 14,000 pages shipped through strict release gates so nothing thin or duplicated went live. Every inquiry routes into the CRM tagged by catalog prefix, and the tracking that had been dead for a year was repaired so every lead has a source." },
      Rank: { heading: "Ranking for what researchers actually search", body: "Scientists search by gene, by modification type, by catalog number. The page structure matched those queries exactly, so within weeks the site appeared for thousands of product searches it had never ranked for. Average position moved from 16 to 10. Around the catalog we run a technical content system, a monthly editorial series featuring published researchers who used the models, articles answering the questions labs post in forums, and short form video on YouTube that points back into the catalog. [CONFIRM the YouTube program is live]" },
      Run: { heading: "Paid search pointed at the page that converts", body: "With the catalog indexed, paid search stopped sending researchers to a generic landing page and started sending them to the exact model they searched for, ad group matched to page. Campaigns are managed to a cost per inquiry, not a cost per click, and the search term report is read weekly by a person." },
      Book: { heading: "Outreach to the labs already citing the work", body: "Each researcher spotlight comes with an outreach sequence to the featured lab and its institution, and a separate sequence targets venture backed biotech companies building programs that need custom models. Warm inbound and targeted outbound feed the same calendar." },
    },
    whyItWorked: [
      "Most companies with a large catalog treat it as a database. Google treats a database as one page. The shift is to treat every item as its own entity with its own page, its own schema, and its own reason to be indexed. We call this the Searchable Repository Method and it applies to any business with hundreds or thousands of discrete things a buyer might search for.",
      "The second factor is that leads grew faster than clicks. Clicks rose 3.7x, form fills rose 6.5x. Traffic that arrives at the exact product it searched for converts at a higher rate than traffic that lands on a homepage and has to find its way.",
    ],
    timeline: [
      { month: "Month 1", text: "Catalog audit, data model, page architecture, and release gates defined" },
      { month: "Month 2", text: "First programmatic pages live, tracking repaired, CRM routing built" },
      { month: "Month 3", text: "Most of the catalog indexed, impressions 3x the prior baseline" },
      { month: "Month 4", text: "Full catalog indexed, impressions 4x the prior baseline" },
      { month: "Month 5", text: "Form fills cross 6x the prior monthly average and hold" },
      { month: "Month 8", text: "Best organic month on record. Editorial series and outreach running on schedule" },
    ],
    fits: [
      "Life sciences suppliers, CROs, and reagent companies with a large product catalog",
      "Healthcare and medtech brands with many distinct services, conditions, or locations",
      "Any B2B company where buyers search for a specific item and the site only shows categories",
      "Teams currently paying for search traffic to pages that do not match the query",
    ],
    baselineNote: "Baseline for every stat is the six months before engagement start. Search stats use five of those six months because the sixth has ten days of console data. Lead source tracking was broken before our start, so the organic share figure is current share, not growth.",
    dataSources: [
      "Google Search Console monthly and daily exports",
      "HubSpot contact and form submission exports by first conversion date",
    ],
    metaTitle: "Case study: 6.5x inbound leads for ingenious targeting laboratory | ISOVERTIC",
    metaDescription: "How a mouse model CRO with 14,000 plus products went from page two of Google to 6.5x the inbound form fills within eight months using the Searchable Repository Method.",
    publishedDate: "2026-09-04",
    published: false,
    sourceDomain: "genetargeting.com",
  },
  {
    slug: "sydra",
    studyType: "launch",
    clientName: "Sydra",
    clientDescriptor: "Independent dispute resolution software for healthcare providers. New company, new domain, launched from zero.",
    industry: "Healthcare technology",
    title: "A brand new company, ninety days from a blank domain to page one of Google",
    summary: "Ninety days after this company existed anywhere online, a surgeon searching a procedure code and a state finds its page on the first screen of Google. The site appears for more than 680 searches, 130 of them on page one, with six external links to its name. Before mid June there was no domain, no brand, and nothing to rank.",
    stats: [
      { value: "8.0x", label: "Search impressions", note: "Last four weeks of the launch window against the first four" },
      { value: "4.9x", label: "Organic search clicks", note: "Same windows" },
      { value: "60 to 20", label: "Average Google position", note: "Impression weighted, first four weeks to last four" },
      { value: "680+", label: "Search queries the site now appears for", note: "From zero at launch" },
      { value: "130", label: "Queries ranking on page one", note: "39 in the top three" },
      { value: "6", label: "External links to the domain", note: "Page one came from structure, not authority" },
    ],
    situation: [
      "The company did not exist before the summer. No domain history, no backlinks, no brand searches, no content. Its market, independent dispute resolution under the No Surprises Act, is contested by law firms and billing companies with years of domain authority and thousands of pages already indexed.",
      "The buyer is a surgeon or a practice administrator who searches one specific question: what does this procedure code pay in this state against this payer, and is it worth filing. Nobody in the market had a page for each of those questions. That gap was the entire strategy.",
    ],
    steps: {
      Build: { heading: "Launch with the catalog, not after it", body: "The site went live with the programmatic catalog already built: one server rendered page per procedure code, per state, and per payer, generated from the company's own reimbursement data with full schema markup. Roughly 1,700 pages sit in the sitemap. About a thousand are held behind a noindex gate and release in waves as the earlier waves prove out, so Google never meets a thin page." },
      Rank: { heading: "Win the long tail before the head term", body: "The generic question, what is IDR, is owned by government sites and law firms and will take a year. Procedure code searches are not owned by anyone. Within ninety days 450 of the site's 680 queries were code searches, and 112 of those ranked on page one. Guides, deadline explainers, and win rate benchmarks answer the next question a provider asks once the code page brings them in." },
      Book: { heading: "Outbound to the practices already filing", body: "A verified list of provider organizations handling dispute resolution, segmented into cohorts, with a five email sequence and LinkedIn follow up so the first meetings did not wait for search to mature. [CONFIRM list and sequence detail]" },
    },
    whyItWorked: [
      "A new domain has no authority, so it cannot win a competitive head term. What it can win is a query nobody has written a page for. Procedure code plus state plus payer is thousands of such queries, each low volume, each high intent, and each answered by exactly one page on this site. The site ranks because it is the only exact match, not because Google trusts the domain yet.",
      "The release gate matters as much as the page count. Half the sitemap is still held back on purpose. Google indexed the first waves, saw they earned impressions, and is now crawling the rest on its own. A new site that pushes all of its pages at once usually gets most of them ignored.",
    ],
    timeline: [
      { month: "Week 1", text: "Site and catalog live. First impressions within 48 hours, average position in the sixties" },
      { month: "Week 3", text: "First organic clicks" },
      { month: "Week 6", text: "Average position under 40 as code pages start landing on page one" },
      { month: "Week 10", text: "Sitemap index submitted. Impressions 18x week one" },
      { month: "Week 11", text: "Impressions 50x week one. Average position 16" },
      { month: "Week 12", text: "Average position 12. 130 queries on page one, 39 in the top three" },
    ],
    fits: [
      "Startups launching into a market where incumbents own the head terms",
      "Any new company whose buyers search for a specific item, code, location, or combination",
      "Founders who need to show investors search visibility before they can show revenue",
      "Regulated B2B companies where every rule change creates a new wave of search demand",
    ],
    baselineNote: "A launch study has no prior baseline because the company did not exist. Multiples compare the last four weeks of a ninety day launch window against the first four. Click volume in the first ninety days is small in absolute terms; this study measures visibility, not lead volume. Lead figures will be added at month eight under the standard method.",
    dataSources: [
      "Google Search Console daily, query, page, and indexing exports for the full life of the property",
    ],
    metaTitle: "Case study: a new company reaches page one of Google in 90 days | ISOVERTIC",
    metaDescription: "How a brand new healthcare software company with six backlinks went from a blank domain to 680 plus search queries and 130 page one rankings in ninety days.",
    publishedDate: "2026-09-05",
    published: false,
    sourceDomain: "sydrahealth.com",
  },
];

export const publishedCaseStudies = caseStudies.filter((c) => c.published);

export function getCaseStudy(slug: string) {
  return publishedCaseStudies.find((c) => c.slug === slug);
}

export function getCaseStudyByClient(clientName: string) {
  return publishedCaseStudies.find((c) => c.clientName === clientName);
}
