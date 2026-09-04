// Pricing source of truth. Every price on the site, in llms.txt, in schema, and in Stripe checkout reads from here.
// Math: monthly = term x 1.2, so twelve months at the term rate costs what ten months costs month to month.
// Framing: two months free plus the $15,000 website rebuild and hosting, on a 12 month term.
// Up front: pay the year at once and take one more month off (eleven months).

export type Tier = {
  slug: "baseline" | "catalyst" | "kinetic" | "critical-mass";
  name: string;
  monthly: number; // month to month, after the 90 day ramp
  term: number; // per month on a 12 month term
  from?: boolean; // "From" pricing (Critical Mass)
  spend: "" | "plus ad spend" | "plus media";
  price: string; // display of the term price, used by pages that show one number
  per: string;
  for: string;
  includes: string[];
  cta: string;
  selfServe?: boolean; // Baseline checks out with Stripe, no call
  featured?: boolean;
};

export const WEBSITE_BUILD = 15000;
export const TERM_MONTHS = 12;
export const UPFRONT_MONTHS = 11;

export const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

export const tiers: Tier[] = [
  {
    slug: "baseline",
    name: "Baseline",
    monthly: 3000,
    term: 2500,
    spend: "",
    price: "$2,500",
    per: "per month on a 12 month term",
    for: "The content drumbeat, running without meetings. Sign up on this page, no call.",
    includes: [
      "One newsletter a month, sent from your own list",
      "One blog post a month, written to be cited by search and AI",
      "Eight social posts a month across two channels",
      "Monthly report, one page",
    ],
    cta: "Start Baseline",
    selfServe: true,
  },
  {
    slug: "catalyst",
    name: "Catalyst",
    monthly: 6000,
    term: 5000,
    spend: "plus ad spend",
    price: "$5,000",
    per: "per month on a 12 month term, plus ad spend",
    for: "Content plus paid demand, with a human on the account.",
    includes: [
      "Everything in Baseline, social doubled to 16 posts",
      "One Google Ads campaign, built and monitored weekly",
      "One landing page",
      "Lead follow up within one business day",
      "One strategy call a month",
    ],
    cta: "Book a pipeline call",
  },
  {
    slug: "kinetic",
    name: "Kinetic",
    monthly: 12000,
    term: 10000,
    spend: "plus ad spend",
    price: "$10,000",
    per: "per month on a 12 month term, plus ad spend",
    for: "The full pipeline. The flagship engagement.",
    includes: [
      "Everything in Catalyst",
      "Multiple Google Ads campaigns with A/B testing and multiple landing pages",
      "Outbound appointment program, one seat, with a stated monthly meeting commitment in writing",
      "YouTube channel build and one video and photo production day per quarter",
      "Weekly call",
    ],
    cta: "Book a pipeline call",
    featured: true,
  },
  {
    slug: "critical-mass",
    name: "Critical Mass",
    monthly: 30000,
    term: 25000,
    from: true,
    spend: "plus media",
    price: "From $25,000",
    per: "per month on a 12 month term, plus media",
    for: "For companies running more than one brand, or ready to own a market.",
    includes: [
      "Everything in Kinetic, run per brand",
      "Two outbound seats",
      "Streaming and broadcast TV buying in your own accounts",
      "Creative production in house",
      "Quarterly board ready growth review",
    ],
    cta: "Book a pipeline call",
  },
];

export const getTier = (slug: string) => tiers.find((t) => t.slug === slug);

// Derived numbers for one tier. Used by the pricing page, the savings table, and the checkout page.
export function tierMath(t: Tier) {
  const monthlyYear = t.monthly * TERM_MONTHS;
  const termYear = t.term * TERM_MONTHS;
  const upfront = t.term * UPFRONT_MONTHS;
  return {
    monthlyYear,
    termYear,
    upfront,
    monthsFree: TERM_MONTHS - termYear / t.monthly, // 2 on every tier
    cashSaved: monthlyYear - termYear,
    totalValue: monthlyYear - termYear + WEBSITE_BUILD,
    upfrontSaved: termYear - upfront,
  };
}

export const billing = {
  toggle: { monthly: "Month to month", term: "12 month term" },
  monthlyNote: "90 day ramp, then month to month. Website rebuild available at $15,000 up front.",
  termNote: "Two months free. Website rebuild and hosting included, a $15,000 build at no charge.",
  upfrontNote: "Pay the year up front and take one more month off.",
  eyebrow: "Term",
  h2: "Pick your term. The website comes with it.",
  intro: "Every tier runs month to month after the 90 day ramp, or on a 12 month term. The term costs what ten months cost month to month, and the website rebuild and hosting come with it. Pay the year up front and it is eleven.",
  columns: ["Month to month", "12 month term"],
  rows: [
    ["Tier price, month to month", "Tier price less two months, billed monthly"],
    ["Website rebuild $15,000, paid up front, if you want it", "Website rebuild included: Next.js, server rendered, schema on every page, built to be cited by AI search"],
    ["Hosting on our stack at cost", "Hosting and bandwidth included for the term"],
    ["90 day ramp, then cancel at any month end", "12 months, then month to month. Early exit: the unbilled balance of the build is due, prorated to months served"],
  ],
  note: "The build is a full move onto our stack. You own the code and the domain. If a term ends early, the unbilled balance of the $15,000 build is due on the final invoice, prorated to the months served. That is the only clause in the agreement that reads like a lock in, and it exists so the free build stays free.",
  savingsH2: "What the term saves, tier by tier",
  savingsCols: ["Tier", "12 months, month to month", "12 months on term", "Cash saved", "Website included", "Total value", "Year up front"],
};

export const steps = [
  { k: "BUILD", label: "The site, built to convert and be cited", href: "/web-development" },
  { k: "RANK", label: "Content that wins Google and AI search", href: "/seo-content" },
  { k: "RUN", label: "Google Ads to a cost per meeting", href: "/google-ads" },
  { k: "BUY", label: "Media including streaming and TV", href: "/tv-ctv-advertising" },
  { k: "BOOK", label: "Outbound meetings on your calendar", href: "/outbound-appointment-setting" },
  { k: "EDUCATE", label: "Your team trained, runbooks in your brand", href: "/protocol" },
] as const;

export const stepsNote =
  "Pick a tier and we run the steps in it. Baseline runs step two. Catalyst runs one through three. Kinetic runs everything but TV. Critical Mass runs all of it, per brand. Step six is Protocol: we teach your team the system and hand over the runbooks in your name.";

// Rows: one per step. Cells: one per tier, in tier order. Empty string means the tier does not run the step.
export const tierGrid: { step: string; cells: string[] }[] = [
  { step: "01 Build", cells: ["Website on a 12 month term, or $15,000", "Landing page plus website on a term", "Landing pages plus website on a term", "Per brand"] },
  { step: "02 Rank", cells: ["Newsletter, blog, social", "Doubled social", "Full content system plus YouTube", "Per brand"] },
  { step: "03 Run", cells: ["", "One Google Ads campaign", "Multiple campaigns, A/B tested", "Per brand"] },
  { step: "04 Buy", cells: ["", "", "", "Streaming and broadcast TV"] },
  { step: "05 Book", cells: ["", "Add on seat $4,500", "One seat, meeting number in writing", "Two seats"] },
  { step: "06 Educate", cells: ["Protocol, $3,500 client add on", "Protocol, $3,500 client add on", "Protocol, $3,500 client add on", "Protocol, $3,500 client add on"] },
];

export const multiBrand = {
  eyebrow: "More than one brand",
  h2: "Run them all from one team.",
  body: "We run multiple brands at once. The first brand pays the tier price. Every additional brand on the same tier is 15 percent off, and every brand gets its own report, its own accounts, and its own number.",
};

export const addOns: { name: string; price: string }[] = [
  { name: "MLR review gate: named reviewer workflow, sign off log, claim library", price: "Baseline $500 per month plus $750 setup. Catalyst $750 per month plus $1,000 setup. Kinetic $1,200 per month plus $1,500 setup. Critical Mass quoted" },
  { name: "HIPAA form and call stack: BAA covered forms, call tracking, consent language", price: "$750 per month" },
  { name: "Outbound seat added to Catalyst", price: "$4,500 per month" },
  { name: "Second product line in Google Ads: separate campaigns, landing page, reporting", price: "$1,000 per month per line" },
  { name: "LinkedIn outbound and paid: sequences plus sponsored content", price: "$2,500 per month" },
  { name: "Conference sprint: meetings booked before and at one trade show", price: "$7,500 per event" },
  { name: "Production day: video and photography, edited assets delivered", price: "$4,500 per day" },
  { name: "Programmatic page expansion: 50 server rendered entity pages", price: "$2,500 per month per 50 pages" },
  { name: "CRM build: HubSpot or Pipedrive configured to the runbook", price: "$4,000 one time" },
  { name: "Protocol, one day, for current clients", price: "$3,500 one time" },
];

export const protocolTiers = [
  {
    name: "Protocol",
    price: "$5,000",
    per: "one time",
    for: "For one department, up to 15 people in the room.",
    includes: [
      "One day onsite",
      "One step taught in depth: your pick of Build, Rank, Run, Buy, or Book",
      "The standard runbook library in your brand",
      "One follow up call at 30 days",
    ],
  },
  {
    name: "Protocol, full team",
    price: "$20,000",
    per: "one time",
    for: "For marketing, sales, and development together, up to 40 people.",
    includes: [
      "Two days onsite plus one prep day at your office",
      "Audit of your current process, tool stack, and CRM before we arrive",
      "All five steps taught, plus a developer track on our build rules and agent briefs",
      "Runbook library rewritten to your tools, your approval chain, and your named medical reviewer",
    ],
  },
];

export const pricingContext = {
  commitmentH2: "The commitment",
  commitment: "Every tier carries a defined 90 day ramp with deliverables and, for Kinetic and above, a meeting volume number in writing. Month to month, nobody is locked in. The 12 month term exists for clients who want the website included and two months off the year, and we still re earn the engagement quarterly.",
  comparisonH2: "Context for comparison",
  comparison: "An in house equivalent runs $160K to $190K per year for one marketing lead plus one agency, before a single SDR is hired. Standalone appointment setting firms charge $5K to $15K monthly for outbound alone, into whatever website and brand you already have. We price the whole system below the sum of its parts because the parts share a team. Baseline exists for the company that is not ready for any of that yet and still needs to publish every week.",
};

export const pricingFaqs = [
  { q: "Why publish pricing when nobody else does?", a: "Because our buyer is a founder who hates wasted discovery calls as much as we do, and because the page you are reading ranks for the question everyone types and nobody answers." },
  { q: "Why is the term price lower than month to month?", a: "Because a year lets us plan the work, and the math is simple: twelve months on term cost what ten months cost month to month. The website rebuild and hosting come with the term because the site is where the year's work compounds." },
  { q: "How do I start Baseline without a call?", a: "Pick month to month or the 12 month term on this page, check out with a card, and land on a short intake form. We generate the first content calendar inside five business days and publish from there. A 15 minute call is optional." },
  { q: "What is in ad spend versus fees?", a: "Fees pay the team. Spend goes to the platforms in your own accounts, which you own." },
  { q: "Are there setup costs?", a: "No. Landing pages and campaign builds inside the ramp are included in tier pricing. The website build is included on a 12 month term at every tier, or $15,000 up front month to month. Unusual scope is quoted before signature, never after." },
  { q: "What happens if we leave a term early?", a: "The unbilled balance of the $15,000 website build is due on the final invoice, prorated to the months served. Nothing else. The code and the domain stay yours." },
];
