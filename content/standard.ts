// The engagement length and measurement cadence standard. Source of truth for
// /resources/engagement-and-measurement-standard, its one page print version, the pricing page
// link, and the CFO and CRO tabs on the homepage. No hyphens or dashes in any string.

import type { FAQ } from "./types";

export const standardMeta = {
  path: "/resources/engagement-and-measurement-standard",
  title: "How Long Marketing Takes to Work | ISOVERTIC",
  description:
    "Why every ISOVERTIC engagement is a one year term, and how we measure it: two clocks, planning ranges by channel, and a revenue review tied to the client's own sales cycle.",
  eyebrow: "Engagement and measurement standard",
  h1: "How long marketing takes to work, and how we measure it.",
  lead: "Why every ISOVERTIC engagement is a one year term, and how we define results before anyone signs. Written so a compliance officer, a CFO, and a CRO can read the same standard and agree on what will be measured, when it will be measured, and what happens if the evidence is not there.",
  datePublished: "2026-09-07",
  dateModified: "2026-10-07",
};

export const headings = {
  channel: { h2: "Time to results, by channel.", lead: "These are planning ranges, not performance guarantees. Timing changes with existing demand, offer maturity, sales capacity, budget, competition, tracking quality, and the length of the buying cycle." },
  cycles: { h2: "Why quarterly revenue judgment fails on complex accounts." },
  scorecard: { h2: "The two clock scorecard in every ISOVERTIC agreement." },
  inHouse: { h2: "The in house comparison.", cta: "Run the break even model" },
  structure: { h2: "Our engagement structure." },
  shorter: { h2: "When a shorter measurement window is reasonable." },
  churn: { h2: "Early churn and expectation setting." },
  caveats: { h2: "Caveats, published on purpose." },
  download: { title: "ISOVERTIC Engagement and Measurement Standard", body: "The rule, the two clock scorecard, and the three stage structure on one printable page. Send it to your CFO before the call." },
  faq: { h2: "What CFOs and CROs ask first" },
  ctas: { primary: "Take the Pipeline Ownership Audit", secondary: "Book a scoping call" },
};

export const rule = {
  minimums: {
    label: "Our minimums",
    body: "Every engagement is a 12 month term. Six months is often enough to read progress on one channel. A program judged on pipeline and revenue uses the full year, against the client's real sales cycle.",
  },
  method: {
    label: "How we measure",
    body: "Two clocks. Leading indicators every 30 days. Pipeline, closed revenue, and payback are reviewed against the sales cycle in the agreement, first in a meaningful way at month six and again at month 12.",
  },
  monthToMonth:
    "A short cycle offer or an active paid search program may produce meetings, pipeline, or revenue inside the first 90 days. In a complex healthcare, biotech, life science, or enterprise sale, early revenue is often too thin to be a fair verdict. The first 90 days still end in a written review of tracking, visibility, meeting quality, sales follow up, and the decisions the data supports. If those leading indicators are off plan, we write down the reason, the correction, the owner, and the next review date. We would rather decline an engagement than sell a revenue expectation the buying cycle cannot support.",
};

export type ChannelRow = { channel: string; leading: string; lagging: string; note?: string };

export const channelTiming: ChannelRow[] = [
  { channel: "SEO and organic", leading: "Indexing, impressions, early ranking movement, relevant query visibility", lagging: "Usually 4 to 12 months. Competitive categories often require 6 to 12 months or more" },
  { channel: "Content marketing", leading: "Publishing consistency, organic visibility, engagement, assisted conversion signals", lagging: "Often 6 to 12 months for pipeline. Complex B2B programs may require 12 to 24 months" },
  { channel: "Google Ads and paid search", leading: "Search term quality, conversion tracking, cost per click, conversion rate, and learning status", lagging: "A conversion trend may emerge in 4 to 6 weeks. Revenue timing follows the client's sales cycle" },
  { channel: "Paid social and LinkedIn", leading: "Audience response, creative performance, landing page conversion, early lead quality", lagging: "First qualified leads may appear in 1 to 3 months. Pipeline evidence commonly requires 3 to 6 months or longer" },
  { channel: "Email and lifecycle", leading: "Delivery, engagement, list quality, conversion paths, and response behavior", lagging: "Often 1 to 3 months after the list, segmentation, content, and automations exist" },
  { channel: "Brand, video, and awareness", leading: "Reach, frequency, branded search, direct traffic, and audience response", lagging: "Six months is a practical minimum for a meaningful brand read. Durable effects build over longer periods" },
];

export type Anchor = { heading: string; body: string; source: { label: string; href: string }[] };

export const anchors: Anchor[] = [
  {
    heading: "On SEO",
    body: "Ahrefs' May 2025 analysis found that 1.74 percent of one sample of newly discovered URLs reached Google's top 10 within a year, down from 5.7 percent in its 2017 analysis. The study also found that the average page ranking first was about five years old and that 72.9 percent of top 10 pages were more than three years old. Page age does not cause rankings by itself. It does show why a 90 day revenue promise is a poor way to evaluate SEO in competitive healthcare, biotech, and life science categories.",
    source: [{ label: "Ahrefs, How Long Does It Take to Rank, May 2025", href: "https://ahrefs.com/blog/how-long-does-it-take-to-rank/" }],
  },
  {
    heading: "On paid search",
    body: "Google recommends evaluating Target CPA performance over the prior 30 days with at least 30 conversions in the review window. The right learning period varies with conversion volume, conversion delay, account history, campaign structure, and bidding strategy. Below that volume, results may be less stable. We may consolidate compatible campaigns, refine the conversion event, change the structure, or use a different bidding approach until the data supports a decision, and we say so in the monthly report.",
    source: [{ label: "Google Ads Help, About Target CPA bidding", href: "https://support.google.com/google-ads/answer/6268632" }],
  },
  {
    heading: "On brand",
    body: "Binet and Field's IPA Databank work is a useful way to separate demand creation from demand capture. The often cited 60 to 40 brand and activation split is a planning reference, not a fixed rule for every company, category, or budget. Brand effects build over quarters, not weeks.",
    source: [{ label: "IPA, The Long and the Short of It", href: "https://ipa.co.uk/knowledge/publications-reports/the-long-and-the-short-of-it" }],
  },
  {
    heading: "On email",
    body: "Litmus reports that many companies see email returns between $10 and $50 for every dollar spent. That evidence is heavily weighted toward consumer and ecommerce businesses. In long cycle healthcare selling, we treat email as a nurture, education, and enablement channel, and we report its contribution that way.",
    source: [{ label: "Litmus, The ROI of Email Marketing", href: "https://www.litmus.com/blog/infographic-the-roi-of-email-marketing" }],
  },
];

export type CycleRow = { motion: string; cycle: string; basis: string };

export const salesCycles: CycleRow[] = [
  { motion: "Healthcare, general", cycle: "About 125 days", basis: "One industry benchmark compilation. Planning context, not a universal standard" },
  { motion: "Pharmaceuticals", cycle: "About 153 days", basis: "The same compilation. Planning context, not a universal standard" },
  { motion: "Biotech and life sciences", cycle: "Often 6 to 18 months", basis: "Depends on product, buyer, funding, procurement, and scientific review. Not one primary study" },
  { motion: "Medtech capital equipment", cycle: "Often 12 to 24 months", basis: "Value analysis, clinical review, and procurement add time" },
  { motion: "Enterprise SaaS", cycle: "Often 9 to 18 months", basis: "Larger and multi stakeholder deals. Vendor benchmarks, not one primary study" },
];

export const salesCycleSource = { label: "Focus Digital, Average Sales Cycle Length by Industry, 2026", href: "https://focus-digital.co/average-sales-cycle-length-by-industry/" };

export const mathParagraph =
  "When a sale takes six to 18 months, a lead generated in month two may not close until month eight, month 12, or later. A quarterly revenue review can measure marketing that has created demand and has not yet had time to move through the commercial process. That is a reason to measure the right outcome on the right clock.";

export const cacPayback = {
  body: "The 2026 Aleph and Benchmarkit SaaS and AI Performance Benchmarks report a median payback of 16 months on full year 2025 results. The study includes 342 companies, with 198 reporting payback. Top quartile companies recover acquisition cost in six months or less. Bottom quartile companies take 24 months or more. In the report's $50,000 to $100,000 contract cohort, median payback is about 22 months. These are software benchmarks. A healthcare or biotech company should not assume the software median applies to its own cycle, margin, or procurement.",
  source: { label: "Aleph and Benchmarkit, CAC Payback Period Benchmarks 2026", href: "https://www.getaleph.com/answers/cac-payback-period-saas-2026" },
};

export const scorecard = {
  leading: {
    heading: "Clock one: every 30 days",
    sub: "Leading indicators",
    items: [
      "Rankings and ranking movement",
      "Impressions and share of voice",
      "Click through rate, cost per click, and conversion rate by campaign",
      "Learning phase status for every Smart Bidding campaign",
      "Qualified meetings and cost per qualified meeting",
      "Content published, distribution reach, and engagement",
    ],
  },
  lagging: {
    heading: "Clock two: against the documented sales cycle",
    sub: "Lagging indicators",
    items: [
      "Pipeline created, by source and by channel",
      "Revenue influenced and closed won attribution",
      "CAC payback period",
      "Meeting to opportunity conversion rate",
      "Cost per meeting against benchmark",
    ],
  },
  note: "A qualified meeting meets the agreed fit, intent, attendance, and sales acceptance standard. A calendar booking alone does not qualify. We agree what counts, we check that it was held, and we report the cost. We do not promise how many. If the sales cycle in the agreement is four months, revenue can be read earlier. If it is 12 months, month three is not a revenue verdict.",
};

export const inHouse = {
  left: {
    heading: "An in house marketing hire",
    items: [
      "There is an onboarding period, then a period of diagnosis and implementation, then a period in which the work can affect pipeline",
      "Closed revenue in the first 90 days is not the usual test of a senior hire",
      "Spencer Stuart reports average CMO tenure at S&P 500 companies is 4.1 years, against 5.0 years across the C suite. Only COOs are shorter, at 3.3 years",
    ],
    source: { label: "Spencer Stuart, CMO Tenure 2026", href: "https://www.spencerstuart.com/research-and-insight/cmo-tenure-2026-snapshot-of-an-expanding-role-for-marketing-leaders" },
  },
  right: {
    heading: "What that means for judging an agency",
    body: "Quarterly revenue is a weak complete evaluation for a long cycle growth program. Our answer is two published clocks, agreed definitions, written reviews, and a correction when the evidence is weak.",
  },
};

export type Stage = { n: string; name: string; window: string; body: string };

export const stages: Stage[] = [
  { n: "01", name: "Foundation", window: "Months 0 to 3", body: "Audit, tracking, baseline, quick wins, and paid search where it fits. The purpose is early evidence and the measurement the rest of the term depends on." },
  { n: "02", name: "Growth", window: "Months 4 to 12", body: "The full system is in motion. We report leading indicators monthly and review channel mix, conversion quality, sales handoff, and budget as the data supports." },
  { n: "03", name: "Compound", window: "Month 12 and on", body: "We review pipeline, revenue contribution, payback where it can be measured, and the sales cycle in the agreement. Then we recommend the next 12 month roadmap, a narrower engagement, or an exit with the documentation in the client's name." },
];

export const shorterTerm = {
  yes: {
    label: "When an earlier revenue review fits",
    body: "When the sales cycle is under 90 days, the offer is paid search led, conversion tracking is already reliable, and the business has established demand. In that case we can report cost per qualified meeting, opportunity creation, and early revenue during the ramp. We still use a 12 month term when the scope includes content, search, brand, or lifecycle work.",
  },
  no: {
    label: "When we decline the engagement",
    body: "When a buyer expects a 90 day revenue verdict on a long cycle account and will not use the agreed leading indicators, pipeline milestones, or the sales cycle in the data. No contract length fixes a measurement expectation that ignores how the client sells.",
  },
};

export const churn = {
  stat: "43%",
  statLabel: "of client churn in one 2026 B2B study happens in the first 90 days",
  body: "Moxo's 2026 research reports that figure for B2B organizations. It is not an agency benchmark. It is a reason to set the measurement, the onboarding, and the early evidence before the work is judged only on revenue that a long cycle has not had time to produce.",
  sources: [
    { label: "Moxo, State of Churn and Retention in B2B Organizations", href: "https://www.moxo.com/library/churn-and-retention-in-b2b-organization-2026" },
  ],
};

export const caveats: string[] = [
  "Channel timelines are planning ranges. Market demand, offer strength, sales follow up, approval cycles, budget, competition, and data quality affect results.",
  "The client's own sales cycle and CRM data take precedence over a generic industry benchmark.",
  "The healthcare and pharmaceutical day counts come from one self published compilation. The other ranges come from several vendor sources, not one primary study.",
  "Ahrefs page age data shows a correlation with rankings. It does not prove that age causes rankings.",
  "Google's 30 conversion guidance is an evaluation threshold for Target CPA, not a requirement for every bidding strategy.",
  "Email return studies are cross industry and often weighted toward consumer and ecommerce businesses.",
  "Payback benchmarks here are software benchmarks. They may not describe a healthcare or biotech company.",
  "Influenced revenue is reported separately from sourced revenue.",
  "Marketing performance cannot be read fairly without reliable tracking, defined CRM stages, and documented sales follow up.",
];

export const standardFaqs: FAQ[] = [
  { q: "Why is one year your minimum?", a: "A 12 month term is the window we use for a multi channel program judged on pipeline and revenue in a complex buying motion. Search, content, brand, lifecycle, paid media, and the sales handoff do not all move on the same clock. We report early evidence every month, and we judge commercial outcomes against the sales cycle written into the agreement." },
  { q: "What if my sales cycle is under 90 days?", a: "We can set an earlier revenue review when the buying motion is short, established, and the conversion tracking is reliable. A paid search program with existing demand may show cost per qualified meeting, opportunity creation, and revenue during the ramp. The agreement records that review window." },
  { q: "How do you handle the 90 day board reporting problem?", a: "The board report separates completed implementation, leading indicator movement, pipeline created, conversion lag, risks, corrective actions, and the next commercial decision. It does not present immature attribution as final revenue." },
  { q: "What happens if you miss leading indicator targets at day 60?", a: "We investigate the cause, document the correction, assign an owner, and set the next review date. Depending on the evidence, we may change the offer, audience, landing page, conversion event, channel mix, sales handoff, or media allocation. If a channel lacks credible evidence, we recommend moving the budget or stopping it." },
  { q: "How do you prevent attribution disputes?", a: "Before launch we document the system of record, conversion definitions, sales stages, source model, influence model, lookback window, data owner, and exceptions. If the data cannot support a precise claim, we say so." },
];

export const standardRelated = [
  { label: "Take the Pipeline Ownership Audit", href: "/audit" },
  { label: "The meeting quality standard", href: "/resources/meeting-quality-standard" },
  { label: "Agency versus in house: the CFO model", href: "/resources/agency-vs-inhouse" },
  { label: "Healthcare and life science compliance posture", href: "/industries/healthcare" },
];
