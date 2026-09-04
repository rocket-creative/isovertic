export type Tier = {
  slug: string;
  name: string;
  price: string;
  per: string;
  for: string;
  includes: string[];
  cta: string;
  featured?: boolean;
  offerPrice: number;
};

export const tiers: Tier[] = [
  {
    slug: "baseline",
    name: "Baseline",
    price: "$2,500",
    per: "per month",
    for: "The content drumbeat, running without meetings.",
    includes: [
      "One newsletter a month, sent from your own list",
      "One blog post a month, written to be cited by search and AI",
      "Eight social posts a month across two channels",
      "Monthly report, one page",
    ],
    cta: "Start Baseline",
    offerPrice: 2500,
  },
  {
    slug: "catalyst",
    name: "Catalyst",
    price: "$5,000",
    per: "per month plus ad spend",
    for: "Content plus paid demand, with a human on the account.",
    includes: [
      "Everything in Baseline, social doubled to 16 posts",
      "One Google Ads campaign, built and monitored weekly",
      "One landing page",
      "Lead follow up within one business day",
      "One strategy call a month",
    ],
    cta: "Book a pipeline call",
    offerPrice: 5000,
  },
  {
    slug: "kinetic",
    name: "Kinetic",
    price: "$10,000",
    per: "per month plus ad spend",
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
    offerPrice: 10000,
  },
  {
    slug: "critical-mass",
    name: "Critical Mass",
    price: "From $25,000",
    per: "per month plus media",
    for: "For companies running more than one brand, or ready to own a market.",
    includes: [
      "Everything in Kinetic, run per brand",
      "Two outbound seats",
      "Streaming and broadcast TV buying in your own accounts",
      "Creative production in house",
      "Quarterly board ready growth review",
    ],
    cta: "Book a pipeline call",
    offerPrice: 25000,
  },
];

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
  { step: "01 Build", cells: ["Website on a term, or $15,000", "Landing page plus website on a term", "Landing pages plus website on a term", "Per brand"] },
  { step: "02 Rank", cells: ["Newsletter, blog, social", "Doubled social", "Full content system plus YouTube", "Per brand"] },
  { step: "03 Run", cells: ["", "One Google Ads campaign", "Multiple campaigns, A/B tested", "Per brand"] },
  { step: "04 Buy", cells: ["", "", "", "Streaming and broadcast TV"] },
  { step: "05 Book", cells: ["", "Add on seat $4,500", "One seat, meeting number in writing", "Two seats"] },
  { step: "06 Educate", cells: ["Protocol, $3,500 client add on", "Protocol, $3,500 client add on", "Protocol, $3,500 client add on", "Protocol, $3,500 client add on"] },
];

export const term = {
  eyebrow: "Term",
  h2: "Pick your term. The website comes with it.",
  intro: "Every tier starts with a 90 day ramp and runs month to month after it. Nobody is locked in. Commit to a term and we build the site.",
  columns: ["90 day ramp, then monthly", "6 month term", "12 month term"],
  rows: [
    ["Tier price", "Tier price", "Tier price"],
    ["Website build $15,000, paid up front", "Website build included at Catalyst and above; Baseline pays $7,500", "Website build included at every tier"],
    ["Hosting on our stack at cost", "Hosting and bandwidth included for the term", "Hosting and bandwidth included for the term"],
  ],
  note: "The build is a full move onto our stack: Next.js, server rendered, schema on every page, built to convert and to be cited by AI search. You own the code and the domain. If a term ends early, the unbilled balance of the build is due on the final invoice, prorated to the months served. That is the only clause in the agreement that reads like a lock in, and it exists so the free build stays free.",
};

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

export const pricingFaqs = [
  { q: "Why publish pricing when nobody else does?", a: "Because our buyer is a founder who hates wasted discovery calls as much as we do, and because the page you are reading ranks for the question everyone types and nobody answers." },
  { q: "What is in ad spend versus fees?", a: "Fees pay the team. Spend goes to the platforms in your own accounts, which you own." },
  { q: "Are there setup costs?", a: "No. Landing pages and campaign builds inside the ramp are included in tier pricing. The website build is priced in the term table: included on a 12 month term, included on a 6 month term at Catalyst and above, or $15,000 up front on a month to month engagement. Unusual scope is quoted before signature, never after." },
  { q: "Can we start smaller?", a: "Baseline at $2,500 is the smallest engagement. If you would rather run the system with your own team, buy the Protocol, one or two days at your office." },
];
