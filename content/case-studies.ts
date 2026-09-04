// Adding a case study:
// 1. Copy an entry. clientName must match the /results roster heading exactly.
// 2. Exactly 6 stats. Multiples, ranges, percentages, or relative months. No raw counts, no dates, no URLs.
// 3. steps holds only the steps we ran, keyed Build, Rank, Run, Buy, Book, Educate. The page fills in the rest.
// 4. Timeline months are relative to engagement start. Nothing past month 8 anywhere in stats or timeline.
// 5. Computing stats, same for every brand: baseline = mean of the 6 calendar months before engagement start.
//    Result = mean of engagement months 5 through 8. Stat = result / baseline, one decimal, suffix "x".
//    Sources: Search Console monthly export (clicks, impressions, avg position) and CRM contacts by first conversion date.
//    Position shows as "before to after", whole numbers. Organic share = organic sourced form fills / all form fills, months 5 through 8.
//    baselineNote must state the window per stat and flag any tracking gap.
// 6. Save the exports behind every stat to the shared drive under the slug before publishing.
// 7. No hyphens or dashes in any string. Search the file for "-" before committing.
// 8. Get the client's written approval to show these numbers next to their name.
//    Then set publishedDate and flip published to true. Never publish with "TBD" or "[CONFIRM]" anywhere in the entry.

export type Step = "Build" | "Rank" | "Run" | "Buy" | "Book" | "Educate";

export type CaseStudyStat = {
  value: string;
  label: string;
  note?: string;
};

export type CaseStudy = {
  slug: string;
  clientName: string;
  clientDescriptor: string;
  industry: string;
  title: string;
  summary: string;
  stats: CaseStudyStat[];
  situation: string[];
  steps: Partial<Record<Step, { heading: string; body: string }>>;
  whyItWorked: string[];
  timeline: { month: string; text: string }[];
  fits: string[];
  baselineNote: string;
  dataSources: string[];
  metaTitle: string;
  metaDescription: string;
  publishedDate: string;
  published: boolean;
  sourceDomain: string;
};

export const STEP_ORDER: Step[] = ["Build", "Rank", "Run", "Buy", "Book", "Educate"];

// Rendered on every study and once on /results. Fixed copy, do not edit.
export const REPORTING_METHOD = {
  heading: "How we report these numbers",
  paragraphs: [
    "Every case study on this site covers the first eight months of an engagement and nothing after. We chose a fixed window so studies are comparable to each other and so a strong later month cannot inflate the story.",
    "Each result is the average of months five through eight of the engagement divided by the client's own average over the six months before our start date. Same window for every stat and every brand, so no study can pick a flattering baseline. Where a client's tracking was broken before we arrived, we say so and report current share rather than growth.",
    "Clients are named with their permission. Raw exports behind any figure, including search console and CRM data, are available on request under NDA.",
    "Across the other brands we run, first eight month results have landed within a few points of the studies shown here. Each is added as it passes month eight.",
  ],
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ingenious-targeting-laboratory",
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
      Rank: { heading: "Ranking for what researchers actually search", body: "Scientists search by gene, by modification type, by catalog number. The page structure matched those queries exactly, so within weeks the site appeared for thousands of product searches it had never ranked for. Average position moved from 16 to 10. Around the catalog we run a technical content system, a monthly editorial series featuring published researchers who used the models, and articles answering the questions labs post in forums." },
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
    published: true,
    sourceDomain: "genetargeting.com",
  },
  {
    slug: "sydra",
    clientName: "Sydra",
    clientDescriptor: "Independent dispute resolution software for healthcare providers, with a 116,000 page regulatory catalog",
    industry: "Healthcare technology",
    title: "From invisible to 7.2x the inbound leads within eight months",
    summary: "Today a provider searching what a procedure code pays in their state against their payer lands on this company's page, not a competitor's blog. Organic search brings in roughly three of every four form fills, paid spend optimizes against real leads for the first time, and month seven was the best organic month on record. Before the rebuild the site was invisible for those searches.",
    stats: [
      { value: "7.2x", label: "Inbound form fills", note: "Months five through eight against the six months before start" },
      { value: "4.1x", label: "Organic search clicks" },
      { value: "4.4x", label: "Search impressions" },
      { value: "19 to 9", label: "Average Google position", note: "Page two to page one" },
      { value: "74%", label: "Of form fills now come from organic search", note: "Current share; prior tracking was broken" },
      { value: "Month 7", label: "Best organic month on record", note: "Still climbing" },
    ],
    situation: [
      "Federal dispute resolution rules for out of network claims change several times a year, and each change moves the math for every provider, payer, and state. The company had strong win rates and deep expertise but a website that answered none of the questions providers were actually searching: what a given procedure code pays in a given state against a given payer.",
      "Paid search was the only reliable lead source. Conversion tracking counted several actions as leads that were not, so reported cost per lead was wrong and budget decisions were made on bad numbers.",
    ],
    steps: {
      Build: { heading: "One page for every code, state, and payer", body: "We built a programmatic catalog of 116,000 pages covering 190 procedure codes across 51 states and 12 payers, each generated from the company's own reimbursement data with full schema markup. Pages release in waves through an index gate so nothing thin goes live." },
      Rank: { heading: "Ranking on the questions regulation creates", body: "Every federal rule change and court ruling produces a wave of provider searches. A sitewide answer engine audit restructured the site so each of those questions has a direct, schema marked answer, and a safeguard system updates positioning across the site when the rules move. Rule changes, court decisions, and jurisdiction guides are rewritten in house voice within days of publication, and a monthly LinkedIn campaign runs from live site content." },
      Run: { heading: "Eight campaigns, one real conversion", body: "Paid search was rebuilt into eight buyer intent segments. Conversion tracking was corrected so only a submitted lead form counts, and campaign spend now optimizes against real leads." },
      Book: { heading: "Outbound built from a verified list", body: "A master list of organizations handling dispute resolution was segmented into cohorts, with a five email cold sequence, LinkedIn follow up, and an eighteen play runbook so outbound and inbound feed the same calendar." },
    },
    whyItWorked: [
      "Regulation does the demand generation. Every rule change and court ruling sends providers to Google with a specific question about a specific code in a specific state. A site with one page per code, state, and payer combination is standing there with the answer. A site with ten articles is not.",
      "Leads grew faster than clicks, 7.2x against 4.1x. A provider who lands on the exact reimbursement page they searched for has already qualified themselves, and fixing conversion tracking meant paid spend stopped chasing actions that were never leads.",
    ],
    timeline: [
      { month: "Month 1", text: "Sitewide audit, reimbursement data model, and index gate defined" },
      { month: "Month 2", text: "First data wave live, conversion tracking corrected to one real action" },
      { month: "Month 3", text: "Eight campaign paid search structure live, impressions 3x the prior baseline" },
      { month: "Month 4", text: "Full catalog indexed, impressions 4x the prior baseline" },
      { month: "Month 5", text: "Form fills cross 7x the prior monthly average and hold" },
      { month: "Month 7", text: "Best organic month on record. Regulatory content and outbound running on schedule" },
    ],
    fits: [
      "Healthcare software companies whose buyers search by code, state, or payer",
      "Regulated B2B companies where every rule change creates a new wave of search demand",
      "Teams whose paid search reports count actions that are not leads",
    ],
    baselineNote: "Baseline for every stat is the six months before engagement start. Lead source tracking was unreliable before our start, so the organic share figure is current share, not growth. Paid search figures use the corrected conversion definition only.",
    dataSources: [
      "Google Search Console monthly and daily exports",
      "CRM contact and form submission exports by first conversion date",
      "Google Ads conversion export, submitted lead form only",
    ],
    metaTitle: "Case study: 7.2x inbound leads for Sydra | ISOVERTIC",
    metaDescription: "How an independent dispute resolution software company went from invisible in search to 7.2x the inbound form fills within eight months with a 116,000 page regulatory catalog.",
    publishedDate: "2026-09-04",
    published: true,
    sourceDomain: "sydra.health",
  },
  {
    slug: "kavera",
    clientName: "Kavera",
    clientDescriptor: "Concussion program software for specialty physician practices",
    industry: "Healthcare technology",
    title: "A rebrand, a rebuild, and 5.8x the demo requests within eight months",
    summary: "Today a neurologist searching for a concussion protocol, a billing code, or a validated instrument finds this company's page and can model what a program is worth to their own practice before anyone talks to them. Two of every three demo requests come from organic search, the demos are run by a clinician, and month eight was the best organic month on record. Eight months ago the product had a different name and no search presence.",
    stats: [
      { value: "5.8x", label: "Demo requests", note: "Months five through eight against the six months before start" },
      { value: "3.9x", label: "Organic search clicks" },
      { value: "3.3x", label: "Search impressions" },
      { value: "22 to 11", label: "Average Google position", note: "Page three to page one" },
      { value: "66%", label: "Of demo requests now come from organic search", note: "Current share; prior tracking was broken" },
      { value: "Month 8", label: "Best organic month on record", note: "Still climbing" },
    ],
    situation: [
      "A neurosurgeon built software that lets a specialty practice run a full concussion protocol between visits and produce the documentation payers expect for remote monitoring and neurocognitive testing codes. The product had been launched under a different name, and the old site described features. Physicians search for protocol, billing codes, validated instruments, and what a program is worth to their practice, and the site answered none of that.",
    ],
    steps: {
      Build: { heading: "A new name and a site rewritten around the physician's question", body: "Brand transition from the original identity through naming and positioning, then a full site rebuild and copy rewrite, concussion first, with every page answering how the practice delivers a higher quality of care and what that means for revenue. The demo form asks for an email address and nothing else. A practice revenue calculator lets the physician model enrollment and touchpoints against their own patient volume, then carries those numbers into the demo request so the call starts from the practice's own figures." },
      Rank: { heading: "A page for every question a physician asks first", body: "The rebuilt site carries a reference library alongside the product pages: guides, billing code explainers, every validated assessment instrument, conditions, cognitive domains, specialty pages, and competitor comparisons. Each is its own indexed page with schema markup, so the site ranks on the clinical and reimbursement questions that come before anyone searches for software. A LinkedIn campaign built from live site content runs monthly." },
      Run: { heading: "Search ads built ad group to page", body: "Google Ads campaigns for the specialties that already see concussion patients, each ad group matched to the page that answers that specialty's question, landing on the one field demo form. Managed to a cost per demo booked." },
      Book: { heading: "Outbound to the practices that already see the patients", body: "An outbound program reaching neurology, sports medicine, and pediatric practices, with demos run by the clinician who operates the managed tier. A practice chooses self serve or managed, so the physician is never asked to add staff or replace an EHR." },
    },
    whyItWorked: [
      "Physicians do not search for software. They search for the clinical and reimbursement question that comes before software. A reference library that answers those questions, one indexed page each, puts the product in front of the buyer at the moment the buyer is deciding whether a program is worth running at all.",
      "Demo requests grew faster than clicks, 5.8x against 3.9x. A one field form and a calculator that carries the practice's own numbers into the request removed the friction that turns interest into a bounce.",
    ],
    timeline: [
      { month: "Month 1", text: "Naming, positioning, and site architecture under the new brand" },
      { month: "Month 2", text: "Rebuilt site live with the reference library and one field demo form" },
      { month: "Month 3", text: "Specialty search campaigns live, impressions 2x the prior baseline" },
      { month: "Month 4", text: "Reference library fully indexed, impressions 3x the prior baseline" },
      { month: "Month 5", text: "Demo requests cross 5x the prior monthly average and hold" },
      { month: "Month 8", text: "Best organic month on record. Outbound program and LinkedIn campaign running on schedule" },
    ],
    fits: [
      "Clinical software sold to physician practices",
      "Healthcare brands where the buyer is a clinician and the pitch has to be care quality first",
      "Companies mid rebrand that need the pipeline running under the new name",
    ],
    baselineNote: "Baseline for every stat is the six months before engagement start, measured under the prior brand name. Lead source tracking was not in place before our start, so the organic share figure is current share, not growth.",
    dataSources: [
      "Google Search Console monthly and daily exports",
      "CRM contact and demo request exports by first conversion date",
    ],
    metaTitle: "Case study: 5.8x demo requests for Kavera | ISOVERTIC",
    metaDescription: "How a concussion program software company came through a rebrand and site rebuild to 5.8x the demo requests within eight months, with two of three demos coming from organic search.",
    publishedDate: "2026-09-04",
    published: true,
    sourceDomain: "kaverasoft.com",
  },
];

export const publishedCaseStudies = caseStudies.filter((c) => c.published);

export function getCaseStudy(slug: string) {
  return publishedCaseStudies.find((c) => c.slug === slug);
}

export function getCaseStudyByClient(clientName: string) {
  return publishedCaseStudies.find((c) => c.clientName === clientName);
}
