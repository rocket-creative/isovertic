// Pricing source of truth. Every price on the site, in llms.txt, in schema, and in Stripe checkout reads from here.
// Every tier is a 12 month term. There is no month to month option: a year is the shortest window in which the
// lagging indicators (pipeline, revenue) can move on a long cycle account, so we do not sell anything shorter.
// Ground State and Excitation: the term is billed monthly, quarterly at 4 percent off, or up front at eleven months for twelve.
// Amplification and Quantum Leap: the term is paid quarterly, four payments of three months at the term rate. No monthly billing, no up front.
// The $15,000 website rebuild and hosting are included in every term.

export type Tier = {
  slug: "ground-state" | "excitation" | "amplification" | "quantum-leap";
  name: string;
  term: number; // per month on the 12 month term
  from?: boolean; // "From" pricing (Quantum Leap)
  spend: "" | "plus ad spend" | "plus media";
  price: string; // display of the term price, used by pages that show one number
  per: string;
  for: string;
  includes: string[];
  cta: string;
  featured?: boolean;
  quarterlyOnly?: boolean; // paid quarterly is the only billing (Amplification, Quantum Leap)
};

export const WEBSITE_BUILD = 15000;
export const TERM_MONTHS = 12;
export const UPFRONT_MONTHS = 11;
export const QUARTERLY_DISCOUNT = 0.04; // off the 12 month term total, split into four payments

export const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

export const tiers: Tier[] = [
  {
    slug: "ground-state",
    name: "Ground State",
    term: 2500,
    spend: "",
    price: "$2,500",
    per: "per month on a 12 month term",
    for: "The content drumbeat, running without meetings.",
    includes: [
      "One newsletter a month, sent from your own list",
      "One blog post a month, written to be cited by search and AI",
      "Eight social posts a month across two channels",
      "Monthly report, one page",
    ],
    cta: "Start Ground State",
  },
  {
    slug: "excitation",
    name: "Excitation",
    term: 5000,
    spend: "plus ad spend",
    price: "$5,000",
    per: "per month on a 12 month term, plus ad spend",
    for: "Content plus paid demand, with a human on the account.",
    includes: [
      "Everything in Ground State, social doubled to 16 posts",
      "One Google Ads campaign, built and monitored weekly",
      "One landing page",
      "Lead follow up within one business day",
      "One strategy call a month",
    ],
    cta: "Start Excitation",
  },
  {
    slug: "amplification",
    name: "Amplification",
    term: 10000,
    spend: "plus ad spend",
    price: "$10,000",
    per: "per month on a 12 month term, plus ad spend",
    for: "The full pipeline. The flagship engagement.",
    includes: [
      "Everything in Excitation",
      "Multiple Google Ads campaigns with A/B testing and multiple landing pages",
      "Outbound appointment program, one seat, with a stated monthly meeting commitment in writing",
      "YouTube channel build and one video and photo production day per quarter",
      "Weekly call",
    ],
    cta: "Start Amplification",
    featured: true,
    quarterlyOnly: true,
  },
  {
    slug: "quantum-leap",
    name: "Quantum Leap",
    term: 25000,
    from: true,
    spend: "plus media",
    price: "From $25,000",
    per: "per month on a 12 month term, plus media",
    for: "For companies running more than one brand, ready to own a market, or growing faster than the business behind the pipeline can handle.",
    includes: [
      "Everything in Amplification, run per brand",
      "Two outbound seats",
      "Streaming and broadcast TV buying in your own accounts",
      "Creative production in house",
      "Operations audit: lead flow map, automations, written SOPs",
      "Quarterly board ready growth review",
    ],
    cta: "Start Quantum Leap",
    quarterlyOnly: true,
  },
];

export const getTier = (slug: string) => tiers.find((t) => t.slug === slug);

// Derived numbers for one tier. Used by the pricing page, the savings table, and the checkout page.
export function tierMath(t: Tier) {
  const termYear = t.term * TERM_MONTHS;
  const upfront = t.term * UPFRONT_MONTHS;
  const quarterlyYear = t.quarterlyOnly ? termYear : Math.round(termYear * (1 - QUARTERLY_DISCOUNT));
  const quarterly = quarterlyYear / 4;
  return {
    termYear,
    quarterlyYear,
    quarterly,
    quarterlySaved: termYear - quarterlyYear,
    upfront,
    upfrontSaved: termYear - upfront,
    totalValue: termYear + WEBSITE_BUILD, // the year of work plus the build it includes
  };
}

export const billing = {
  standardLabel: "What results to expect, and when",
  standardHref: "/resources/engagement-and-measurement-standard",
  cardNote: "12 month term. Website rebuild and hosting included, a $15,000 build at no charge.",
  quarterlyNote: "Ground State and Excitation bill the term monthly, quarterly at 4 percent off, or up front at eleven months for twelve.",
  upfrontNote: "Amplification and Quantum Leap are paid quarterly.",
  eyebrow: "The term",
  h2: "Every tier is a year. The website comes with it.",
  intro: "We sign a minimum one year term on every tier, because a year is the shortest window in which pipeline and revenue can move on a long cycle account and we would rather not take money we cannot earn. The 90 day ramp still has deliverables in writing and a review at day 90; that review reads leading indicators, and revenue is judged at months six and twelve. Ground State and Excitation bill the term monthly, quarterly at 4 percent off, or up front at eleven months for twelve. Amplification and Quantum Leap are paid quarterly. The website rebuild and hosting come with every term.",
  columns: ["What", "How it works"],
  rows: [
    ["Term", "12 months on every tier. Nothing shorter is sold, including a paid search sprint."],
    ["Billing", "Ground State and Excitation: monthly, quarterly at 4 percent off, or up front at eleven months for twelve. Amplification and Quantum Leap: four quarterly payments."],
    ["Website rebuild", "Included: Next.js, server rendered, schema on every page, built to be cited by AI search. The build starts inside the first 30 days."],
    ["Hosting", "Hosting and bandwidth included for the term."],
    ["The ramp", "90 days with deliverables in writing and a written review at day 90 against leading indicators. Amplification and above carry a monthly meeting number from the ramp on."],
    ["When revenue is judged", "At months six and twelve, tied to your sales cycle in the agreement. The two clock standard is published."],
    ["Early exit", "The unbilled balance of the $15,000 build is due on the final invoice, prorated to the months served. Nothing else. Code, content, and domain stay yours."],
  ],
  note: "The build is a full move onto our stack. You own the code and the domain. If a term ends early, the unbilled balance of the $15,000 build is due on the final invoice, prorated to the months served. That is the only clause in the agreement that reads like a lock in, and it exists so the included build stays included.",
  savingsH2: "The year, tier by tier",
  savingsCols: ["Tier", "Per month", "12 months", "Website included", "Total value", "Billing", "Year up front"],
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
  "Pick a tier and we run the steps in it. Ground State runs step two. Excitation runs one through three. Amplification runs everything but TV. Quantum Leap runs all of it, per brand. Step six is Protocol: we teach your team the system and hand over the runbooks in your name.";

// Rows: one per step. Cells: one per tier, in tier order. Empty string means the tier does not run the step.
export const tierGrid: { step: string; cells: string[] }[] = [
  { step: "01 Build", cells: ["Website rebuild included", "Landing page plus website rebuild", "Landing pages plus website rebuild", "Per brand"] },
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
  { name: "MLR review gate: named reviewer workflow, sign off log, claim library", price: "Ground State $500 per month plus $750 setup. Excitation $750 per month plus $1,000 setup. Amplification $1,200 per month plus $1,500 setup. Quantum Leap quoted" },
  { name: "HIPAA form and call stack: BAA covered forms, call tracking, consent language", price: "$750 per month" },
  { name: "Outbound seat added to Excitation", price: "$4,500 per month" },
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
  commitment: "Every tier carries a defined 90 day ramp with deliverables and, for Amplification and above, a meeting volume number in writing. Every tier is a one year term, because that is how long it takes for the lagging indicators to move and we would rather lose a sale than sell a window in which we cannot show growth. Inside the year we still re earn the engagement quarterly: leading indicators every 30 days, revenue at months six and twelve.",
  comparisonH2: "Context for comparison",
  comparison: "An in house equivalent runs $160K to $190K per year for one marketing lead plus one agency, before a single SDR is hired. Standalone appointment setting firms charge $5K to $15K monthly for outbound alone, into whatever website and brand you already have. We price the whole system below the sum of its parts because the parts share a team. Ground State exists for the company that is not ready for any of that yet and still needs to publish every week.",
};

export const pricingFaqs = [
  { q: "Why publish pricing when nobody else does?", a: "Because our buyer is a founder who hates wasted discovery calls as much as we do, and because the page you are reading ranks for the question everyone types and nobody answers." },
  { q: "Why is the minimum a year?", a: "Because a year is the shortest window in which pipeline and revenue can move on a long cycle account. Fewer than two percent of new pages reach the top 10 of Google inside a year, brand effects build over quarters, and a healthcare sale alone runs about four months. A shorter term would have you judging revenue before a deal could close, and 43 percent of B2B agency churn happens in the first 90 days for exactly that reason. The full standard, with sources, is published." },
  { q: "How do I start without a call?", a: "Every tier checks out on the start page: pick the tier and how you want to bill the year, pay by card or ACH bank debit on Stripe, and land on a ten minute intake form. The first content calendar arrives inside five business days. A 15 minute call is optional, and Amplification and above get a weekly call anyway." },
  { q: "How is the term billed?", a: "Amplification and Quantum Leap are paid quarterly: four payments of three months at the term rate, $30,000 a quarter for Amplification, with the website and hosting included. Ground State and Excitation can bill the term monthly, quarterly at 4 percent off, or up front at eleven months for twelve." },
  { q: "Can we pay by bank instead of card?", a: "Yes. Every checkout offers ACH Direct Debit next to card, Apple Pay, and Google Pay. Above $10,000 we recommend the bank: 0.8 percent capped at $5 per payment, no issuer limit. Bank debits clear in up to four business days and the engagement starts when the first one settles." },
  { q: "What is in ad spend versus fees?", a: "Fees pay the team. Spend goes to the platforms in your own accounts, which you own." },
  { q: "Are there setup costs?", a: "No. Landing pages and campaign builds inside the ramp are included in tier pricing, and the $15,000 website build is included at every tier. Unusual scope is quoted before signature, never after." },
  { q: "What happens if we leave a term early?", a: "The unbilled balance of the $15,000 website build is due on the final invoice, prorated to the months served. Nothing else. The code and the domain stay yours." },
];
