// The engagement length and measurement cadence standard. Source of truth for
// /resources/engagement-and-measurement-standard, its one page print version, the pricing page
// link, and the CFO and CRO tabs on the homepage. No hyphens or dashes in any string.

import type { FAQ } from "./types";

export const standardMeta = {
  path: "/resources/engagement-and-measurement-standard",
  title: "How Long Marketing Takes to Work | ISOVERTIC",
  description:
    "Why every ISOVERTIC engagement is a one year term, and how we measure it: two clocks, published thresholds by channel, and the sales cycle data behind the rule.",
  eyebrow: "Engagement and measurement standard",
  h1: "How long marketing takes to work, and how we measure it.",
  lead: "Why every ISOVERTIC engagement is a one year term, and the two clock measurement standard inside it. Written so a compliance officer, a CFO, and a CRO can read the same page and agree on what results means before anyone signs.",
  datePublished: "2026-09-07",
  dateModified: "2026-09-07",
};

export const headings = {
  channel: { h2: "Time to results, by channel.", lead: "Two columns for every channel we run. The first is what you can read at 30 to 90 days. The second is when revenue can honestly be judged." },
  cycles: { h2: "Why quarterly revenue judgment fails on healthcare and biotech accounts." },
  scorecard: { h2: "The two clock scorecard in every ISOVERTIC agreement." },
  inHouse: { h2: "The in house comparison.", cta: "Run the break even model" },
  structure: { h2: "Our engagement structure." },
  shorter: { h2: "Why not a shorter term." },
  churn: { h2: "The churn data behind this." },
  caveats: { h2: "Caveats, published on purpose." },
  download: { title: "ISOVERTIC Engagement and Measurement Standard", body: "The rule, the two clock scorecard, and the three stage structure on one printable page. Send it to your CFO before the call." },
  faq: { h2: "What CFOs and CROs ask first" },
  ctas: { primary: "Take the Pipeline Ownership Audit", secondary: "Book a scoping call" },
};

export const rule = {
  minimums: {
    label: "Our minimums",
    body: "Twelve months, on every tier. The research floor is six months for a single channel and twelve for a program judged on pipeline and revenue; we sign the twelve because below that window no lagging indicator can move in a healthcare or biotech account, and we would rather not take money we cannot earn.",
  },
  method: {
    label: "How we measure",
    body: "Two clocks. Leading indicators every 30 days. Lagging indicators, meaning pipeline, revenue, and CAC payback, at six and twelve months, with the review date tied to your actual sales cycle in the agreement.",
  },
  monthToMonth:
    "The 90 day ramp still ends in a written review. What that review can honestly judge is leading indicators: rankings, cost per lead, learning phase exits, meetings booked. Revenue is judged at month six and month twelve, tied to your sales cycle in the agreement.",
};

export type ChannelRow = { channel: string; leading: string; lagging: string; note?: string };

export const channelTiming: ChannelRow[] = [
  { channel: "SEO and organic", leading: "30 to 90 days: indexing, impressions, early ranking movement", lagging: "4 to 12 months; competitive niches 6 to 12 months or more" },
  { channel: "Content marketing", leading: "30 to 60 days: traffic and engagement", lagging: "6 to 12 months for pipeline; 12 to 24 months for reliable pipeline in complex B2B" },
  { channel: "Google Ads and paid search", leading: "1 to 4 weeks: learning phase exit", lagging: "4 to 6 weeks to a real conversion trend; needs 30 or more conversions a month" },
  { channel: "Paid social and LinkedIn", leading: "1 to 2 weeks: learning phase", lagging: "1 to 3 months to first MQLs; 3 to 6 months to pipeline proof" },
  { channel: "Email and lifecycle", leading: "Days to weeks: opens and clicks", lagging: "1 to 3 months once the list and automations exist" },
  { channel: "Brand, TV, and video", leading: "2 to 4 weeks: branded search lift", lagging: "Six months minimum; the durable effect is a 6 to 24 month play" },
];

export type Anchor = { heading: string; body: string; source: { label: string; href: string }[] };

export const anchors: Anchor[] = [
  {
    heading: "On SEO",
    body: "Ahrefs studied one million URLs in May 2025 and found that 1.74 percent of new pages reach the top 10 within a year, down from 5.7 percent in 2017. The average page ranking first is about five years old, and 72.9 percent of top 10 pages are more than three years old. That is why we never sell SEO on a 90 day revenue window.",
    source: [{ label: "Ahrefs, How Long Does It Take to Rank, May 2025", href: "https://ahrefs.com/blog/how-long-does-it-take-to-rank/" }],
  },
  {
    heading: "On paid search",
    body: "Google's own guidance for Target CPA says to judge performance on the last 30 days with at least 30 conversions in the window. Below that volume the bidding algorithm has too little data to optimize and campaigns sit in a limited learning state. We pool campaigns or run manual bidding until the threshold is met, and we say so in the monthly report.",
    source: [{ label: "Google Ads Help, About Target CPA bidding", href: "https://support.google.com/google-ads/answer/6268632" }],
  },
  {
    heading: "On brand",
    body: "Binet and Field's analysis of 996 campaigns in the IPA Databank supports a 60 percent brand, 40 percent activation split as the default for sustained growth. Brand effects build over quarters, not weeks, which is why TV and video carry a six month floor on Quantum Leap.",
    source: [{ label: "IPA, The Long and the Short of It", href: "https://ipa.co.uk/knowledge/publications-reports/the-long-and-the-short-of-it" }],
  },
  {
    heading: "On email",
    body: "Litmus's State of Email survey reports most marketers earning between $10 and $50 for every dollar spent on email. That figure is weighted toward B2C and ecommerce. For long cycle B2B healthcare we treat email as a nurture and enablement channel, not a primary revenue driver, and we report it that way.",
    source: [{ label: "Litmus, The ROI of Email Marketing", href: "https://www.litmus.com/blog/infographic-the-roi-of-email-marketing" }],
  },
];

export type CycleRow = { motion: string; cycle: string; basis: string };

export const salesCycles: CycleRow[] = [
  { motion: "Healthcare, general", cycle: "125 days", basis: "Focus Digital 2026 benchmark compilation" },
  { motion: "Pharmaceuticals", cycle: "About 153 days", basis: "Focus Digital 2026 benchmark compilation" },
  { motion: "Biotech and life sciences", cycle: "6 to 18 months", basis: "Convergent vendor sources, not a single primary study" },
  { motion: "Medtech capital equipment", cycle: "12 to 24 months; value analysis committee review alone runs 3 to 6 months", basis: "Practitioner and vendor sources" },
  { motion: "Enterprise SaaS above $100K ACV", cycle: "9 to 18 months", basis: "Multiple vendor benchmarks" },
];

export const salesCycleSource = { label: "Focus Digital, Average Sales Cycle Length by Industry, 2026", href: "https://focus-digital.co/average-sales-cycle-length-by-industry/" };

export const mathParagraph =
  "When a sales cycle is 6 to 18 months, a lead generated in month two may not close until month 12 to 20. A quarterly revenue review measures marketing that has not had time to convert. That is not a marketing problem. It is a measurement window problem, and we solve it by publishing two clocks.";

export const cacPayback = {
  body: "Median B2B SaaS CAC payback is 16 months on full year 2025 actuals, per the 2026 Aleph and Benchmarkit SaaS and AI Performance Benchmarks, which surveyed 342 companies with 198 reporting the metric. Top quartile pays back in six months or less, bottom quartile in 24 or more, and enterprise companies above $100K ACV run about 22 months. Healthcare and biotech payback usually runs longer than SaaS because procurement is regulated.",
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
      "MQLs and cost per lead",
      "Content published, distribution reach, and engagement",
    ],
  },
  lagging: {
    heading: "Clock two: at six and twelve months",
    sub: "Lagging indicators",
    items: [
      "Pipeline created, by source and by channel",
      "Revenue influenced and closed won attribution",
      "CAC payback period",
      "Meeting to opportunity conversion rate",
      "Cost per meeting against benchmark",
    ],
  },
  note: "The six and twelve month windows are tied to your actual sales cycle in the agreement. If your cycle is twelve months, we do not judge revenue at month three. If your cycle is four months, we do.",
};

export const inHouse = {
  left: {
    heading: "An in house marketing hire",
    items: [
      "A 90 day onboarding ramp is standard practice",
      "Real performance is judged at six to twelve months",
      "Senior hires take 12 to 24 months to reach full productivity",
      "CMO tenure at S&P 500 companies is 4.1 years against 5.0 for the C suite overall; only COOs turn over faster, at 3.3 years",
    ],
    source: { label: "Spencer Stuart, CMO Tenure 2026", href: "https://www.spencerstuart.com/research-and-insight/cmo-tenure-2026-snapshot-of-an-expanding-role-for-marketing-leaders" },
  },
  right: {
    heading: "What that means for judging an agency",
    body: "Even senior in house marketing leaders are given years, not quarters, to produce results. An agency judged on a 90 day revenue window is being held to a standard the client's own CMO is not held to. Our answer is not a lower bar. It is two published clocks, so nobody confuses not there yet with not working.",
  },
};

export type Stage = { n: string; name: string; window: string; body: string };

export const stages: Stage[] = [
  { n: "01", name: "Foundation", window: "Months 0 to 3", body: "Audit, tracking, quick wins, paid search launch. Fixed scope and defined deliverables. The purpose is the fastest honest early proof plus the infrastructure the growth term depends on. This is the 90 day ramp on every tier." },
  { n: "02", name: "Growth", window: "Months 4 to 12", body: "The six step system in full motion. Monthly leading indicator report. Quarterly review of learning phase status and channel mix, with budget moved toward what the data supports." },
  { n: "03", name: "Compound", window: "Month 12 and on", body: "Lagging indicator review: CAC payback and pipeline attribution against the sales cycle we wrote down. Then a roadmap for the next twelve months, or an exit with the runbooks in your name if we are no longer the right fit." },
];

export const shorterTerm = {
  yes: {
    label: "When a shorter term is tempting",
    body: "When your sales cycle is under 90 days, the offer is paid search led, and you already have brand equity. Paid search will show a real cost per meeting inside the ramp in that case, and we report it at day 90. We still sign a year, because the content and brand work that lowers that cost over time does not move in a quarter, and we would be selling you the fast part while leaving the compounding part undone.",
  },
  no: {
    label: "When we will decline the engagement",
    body: "When the buyer expects revenue judgment at day 90 on a long cycle account. That expectation, more than budget, predicts churn, and no term length fixes it. We reset it before signing or we walk.",
  },
};

export const churn = {
  stat: "43%",
  statLabel: "of B2B agency churn happens in the first 90 days",
  body: "Before the work has shown a single lagging result. The figure comes from Moxo's 2026 State of Churn report as cited by Focus Digital and GigRadar. That is why we publish a minimum window. A 30 or 90 day engagement judged on revenue guarantees you leave before any lagging indicator can move, which is bad for you, not just for us.",
  sources: [
    { label: "Focus Digital, Marketing Agency Churn Rate 2026", href: "https://focus-digital.co/marketing-agency-churn-rate/" },
    { label: "GigRadar, Client Retention Strategies 2026", href: "https://gigradar.io/blog/client-retention-strategies" },
  ],
};

export const caveats: string[] = [
  "Content marketing windows, paid social pipeline windows, and agency contract norms come from agency and vendor sources rather than peer reviewed studies. They converge tightly, which lends credibility, but they are not primary research.",
  "The healthcare and pharma cycle figures trace to one compiled benchmark, Focus Digital, a self published SEO agency compilation. The biotech, medtech, and enterprise SaaS ranges come from convergent vendor and practitioner sources and are shown as ranges for that reason. The widely repeated figure of about nine decision makers on a healthcare software deal is an industry rule of thumb, not a named primary study.",
  "CAC payback benchmarks are B2B SaaS specific. Healthcare and biotech payback usually runs longer given regulated procurement.",
  "Ahrefs page age data is a correlation with ranking, not proof that age causes ranking. Google's John Mueller has said domain age has little to no direct ranking effect.",
  "Email ROI figures are cross industry averages weighted toward B2C and ecommerce. All cost inclusive calculations often land lower, and the channel matters less for long cycle B2B healthcare.",
  "The 43 percent first 90 day churn figure appears in two agency sources that both cite the same underlying report, so it is one data point, not two.",
];

export const standardFaqs: FAQ[] = [
  { q: "Why is one year your minimum?", a: "Because it is the shortest window in which pipeline and revenue can move on a long cycle account. Fewer than two percent of new pages reach the top 10 inside a year, brand effects build over quarters, and a healthcare sales cycle alone runs 125 days. The research floor is six months for a single channel; we sign twelve on every tier because we run more than one channel and we want to be judged on the number that matters, not the calendar." },
  { q: "What if my sales cycle is under 90 days?", a: "Then paid search will show you a real cost per qualified meeting inside the 90 day ramp, and we report it at day 90. The term is still a year, because the content and brand work that lowers that cost over time does not move in a quarter. Revenue on a short cycle is judged at month six." },
  { q: "How do you handle the 90 day board reporting problem?", a: "We give the board leading indicators it can read at day 90: learning phase exits, cost per lead, meetings booked, ranking movement. The agreement names the month when revenue gets judged, tied to your cycle. A board that sees both clocks written down stops asking why revenue is flat at week twelve." },
  { q: "What happens if you miss the leading indicator targets at day 60?", a: "We say so in the report, name the cause, and change the plan before day 90. Leading indicators exist to be acted on early. If the miss is structural, wrong tier or wrong channel, we move you rather than run out the term." },
];

export const standardRelated = [
  { label: "Take the Pipeline Ownership Audit", href: "/audit" },
  { label: "The meeting quality standard", href: "/resources/meeting-quality-standard" },
  { label: "Agency versus in house: the CFO model", href: "/resources/agency-vs-inhouse" },
  { label: "Healthcare and life science compliance posture", href: "/industries/healthcare" },
];
