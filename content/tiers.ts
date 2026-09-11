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
    for: "The compounding layer. One published article, one newsletter, eight social posts, and a monthly report, running without a meetings program.",
    includes: [
      "One published article on your site",
      "One newsletter sent to your list",
      "Eight social posts across your active channels",
      "One short monthly report: what was published, how it performed, and what to publish next",
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
      "One Google Ads campaign, built and managed",
      "One landing page for that campaign, refreshed as needed",
      "Lead follow-up within one business day",
      "One 60-minute strategy call a month with the account lead",
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
    for: "The full pipeline: publishing, paid search, outbound, weekly review, and the option to add the compliance stack for regulated buyers.",
    includes: [
      "Everything in Excitation",
      "The full monthly content system, at higher volume, across article, newsletter, social, and video",
      "A YouTube channel: research, script, produce, and publish",
      "One outbound seat with a written brief for each meeting, verified against the meeting quality standard",
      "Weekly account review",
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
    for: "Multi-brand operation for later-stage healthcare, biotech, medical device, and life sciences groups. Two or more brands from one accountable team.",
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
  cardNote: "12 month engagement. Website rebuild and hosting included, a $15,000 build at no charge.",
  quarterlyNote: "Ground State and Excitation bill the term monthly, quarterly at 4 percent off, or up front at eleven months for twelve.",
  upfrontNote: "Amplification and Quantum Leap are paid quarterly.",
  eyebrow: "The term",
  h2: "Every package is a year. The website comes with it.",
  intro: "Isovertic is the growth agency for healthcare, biotech, medical devices, and life sciences. Every engagement is 12 months because a year is the shortest honest window for a long-cycle account. Google Search Central explains that search changes need time to be processed and reflected. We report leading indicators every 30 days, then review pipeline and revenue at months six and 12 against the sales cycle in the agreement. Ground State and Excitation bill the term monthly, quarterly at 4 percent off, or up front at eleven months for twelve. Amplification and Quantum Leap are paid quarterly. The website rebuild and hosting come with every term.",
  columns: ["What", "How it works"],
  rows: [
    ["Term", "12 months on every package. Nothing shorter is sold, including a paid search sprint."],
    ["Billing", "Ground State and Excitation: monthly, quarterly at 4 percent off, or up front at eleven months for twelve. Amplification and Quantum Leap: four quarterly payments."],
    ["Website rebuild", "Included in every package, valued at $15,000. The build starts inside the first 30 days. You own the code and the domain."],
    ["Hosting", "Hosting and bandwidth included for the term."],
    ["The ramp", "90 days with deliverables in writing and a written review at day 90 against leading indicators. Amplification and above define, verify, and report cost per qualified meeting from the ramp on."],
    ["When revenue is judged", "At months six and twelve, tied to your sales cycle in the agreement. The two clock standard is published."],
    ["Early exit", "The unbilled balance of the $15,000 build is due on the final invoice, prorated to the months served. Nothing else. Code, content, and domain stay yours."],
  ],
  note: "The build is a full move onto our stack. You own the code and the domain. If a term ends early, the unbilled balance of the $15,000 build is due on the final invoice, prorated to the months served. That is the only clause in the agreement that reads like a lock in, and it exists so the included build stays included.",
  savingsH2: "The year, package by package",
  savingsCols: ["Package", "Per month", "12 months", "Website included", "Total value", "Billing", "Year up front"],
};

export const steps = [
  { k: "BUILD", label: "We rebuild your website so the pages, proof, pricing, and next step are all in front of the buyer. Included in every package.", href: "/web-development" },
  { k: "RANK", label: "We publish on a steady rhythm so your site earns visibility in Google and in the AI-generated answers that now appear at the top of search results.", href: "/seo-content" },
  { k: "RUN", label: "We run Google Ads against the exact phrases your buyers type when they are actively shopping. We report cost per booked meeting, not clicks.", href: "/google-ads" },
  { k: "BUY", label: "We buy streaming TV, cable, broadcast television, and radio when the math supports it so your brand is recognized when your specialist buyer sees your name in Google later that week.", href: "/tv-ctv-advertising" },
  { k: "BOOK", label: "We put qualified meetings on your calendar with a written brief on each one, run by the same team that built your website.", href: "/outbound-appointment-setting" },
  { k: "EDUCATE", label: "We hand your team the step-by-step written instructions and the training to run any of this in-house when they are ready.", href: "/protocol" },
] as const;

export const stepsNote =
  "Pick a tier and we run the steps in it. Ground State runs step two. Excitation runs one through three. Amplification runs everything but TV. Quantum Leap runs all of it, per brand. Step six is Protocol: we teach your team the system and hand over the runbooks in your name.";

// Rows: one per step. Cells: one per tier, in tier order. Empty string means the tier does not run the step.
export const tierGrid: { step: string; cells: string[] }[] = [
  { step: "01 Build", cells: ["Website rebuild included", "Landing page plus website rebuild", "Landing pages plus website rebuild", "Per brand"] },
  { step: "02 Rank", cells: ["Newsletter, blog, social", "Doubled social", "Full content system plus YouTube", "Per brand"] },
  { step: "03 Run", cells: ["", "One Google Ads campaign", "Multiple campaigns, A/B tested", "Per brand"] },
  { step: "04 Buy", cells: ["", "", "", "Streaming and broadcast TV"] },
  { step: "05 Book", cells: ["", "Add on seat $4,500", "One seat, meetings verified against the quality standard", "Two seats"] },
  { step: "06 Educate", cells: ["Protocol, $3,500 client add on", "Protocol, $3,500 client add on", "Protocol, $3,500 client add on", "Protocol, $3,500 client add on"] },
];

export const multiBrand = {
  eyebrow: "More than one brand",
  h2: "Run them all from one team.",
  body: "We run multiple brands at once. The first brand pays the tier price. Every additional brand on the same tier is 15 percent off, and every brand gets its own report, its own accounts, and its own number.",
};

export const addOns: { name: string; price: string }[] = [
  { name: "Medical, legal, and regulatory review gate: named reviewer workflow, sign off log, claim library", price: "Ground State $500 per month plus $750 setup. Excitation $750 per month plus $1,000 setup. Amplification $1,200 per month plus $1,500 setup. Quantum Leap quoted" },
  { name: "HIPAA form and call stack: BAA covered forms, call tracking, consent language", price: "$750 per month" },
  { name: "Outbound seat added to Excitation", price: "$4,500 per month" },
  { name: "Second product line in Google Ads: separate campaigns, landing page, reporting", price: "$1,000 per month per line" },
  { name: "LinkedIn outbound and paid: sequences plus sponsored content", price: "$2,500 per month" },
  { name: "Conference sprint: meetings booked before and at one trade show", price: "$7,500 per event" },
  { name: "Production day: video and photography, edited assets delivered", price: "$4,500 per day" },
  { name: "Programmatic page expansion: 50 additional pages published", price: "$2,500 per month per 50 pages" },
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
      "The standard runbook library",
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
      "All six steps taught, plus a developer track",
      "Runbook library rewritten to your tools, your approval chain, and your named medical reviewer",
    ],
  },
];

export const pricingHero = {
  eyebrow: "Pricing",
  lead: [
    "Isovertic is the growth agency for healthcare, biotech, medical devices, and life sciences. Every package is a 12-month engagement. Every one includes a $15,000 website rebuild and hosting, spread across the year. The price is on this page before the call. You can start with card or bank debit without talking to us.",
    "This page is for the founders, CEOs, presidents, VPs of commercial, chief scientific officers, chief medical officers, medical directors, VPs of regulatory, practice administrators, and directors of billing who prefer to compare prices in one place and choose. We build the website that gets found by specialists already searching for what you sell, then we spend advertising only on those people. The packages add publishing, Google Ads, media, outbound, and training around that work.",
  ],
};

// Who each tier is for, its limit, and how it bills. Rendered under the tier cards on /pricing.
export const tierNotes: { slug: Tier["slug"]; h2: string; body: string[] }[] = [
  {
    slug: "ground-state",
    h2: "Ground State, $2,500 per month",
    body: [
      "Ground State is the compounding layer. It is for a company that needs to show up in front of buyers every week but is not ready to spend on advertising or outbound.",
      "Each month you get one published article on your site, one newsletter sent to your list, eight social posts across your active channels, and one short monthly report: what was published, how it performed, and what to publish next. Included across the year: a full website rebuild, valued at $15,000, and hosting.",
      "Ground State is a 12-month engagement. You can be billed monthly or quarterly. It is not a promise of instant meetings. It is steady work that gives your website more useful answers for the people already looking. If the calendar needs meetings sooner, Excitation adds Google Ads.",
    ],
  },
  {
    slug: "excitation",
    h2: "Excitation, $5,000 per month plus advertising spend",
    body: [
      "Excitation is the pipeline starter. It is for a company with a real offer, a working website conversion path, and the appetite to spend $1,000 to $5,000 a month on Google Ads.",
      "You get everything in Ground State, plus one Google Ads campaign, built and managed; one landing page for that campaign, refreshed as needed; lead follow-up within one business day; 16 social posts a month; and one 60-minute strategy call each month with the account lead.",
      "The $5,000 monthly fee does not include advertising spend. We report cost per booked meeting, not merely traffic or clicks. Below about $1,000 a month in Google Ads spend, the platform does not have enough activity to produce reliable results. If that is your budget, Ground State is the more sensible place to start.",
    ],
  },
  {
    slug: "amplification",
    h2: "Amplification, $10,000 per month plus advertising spend",
    body: [
      "Amplification is the full pipeline program. It is for a company with a defined ideal client, at least $5,000 a month for advertising, and a named person on the client side, often a VP of commercial or a practice administrator, who owns the calendar.",
      "You get everything in Excitation, plus the full monthly content system at higher volume, a YouTube channel, one outbound seat that books qualified meetings with a written brief, and weekly account review. We define what counts as a meeting, we verify each one, and we report cost per qualified meeting. The compliance stack for regulated buyers is priced separately as an add-on when needed.",
      "Amplification is billed quarterly. This package is for a team prepared to answer the meetings it receives. If the calendar owner is unclear, resolve that before adding outbound. A meeting without a capable follow-up is an expensive way to collect polite no-thank-yous.",
    ],
  },
  {
    slug: "quantum-leap",
    h2: "Quantum Leap, from $25,000 per month plus advertising spend",
    body: [
      "Quantum Leap is the multi-brand program. It is for later-stage healthcare, biotech, medical device, and life sciences tools and diagnostics groups running two or more brands from one team, often reporting to a chief operating officer or a chief financial officer.",
      "You get everything in Amplification, plus the full system run across two or more brands, two outbound seats, in-house creative production, media buying across streaming television, broadcast, and radio when it fits the sale, and a quarterly operations audit.",
      "Quantum Leap is billed quarterly, from $75,000 per quarter. Advertising spend is separate. This is not a larger version of a basic website project. It is an operating commitment across several commercial programs, with one team responsible for keeping the parts connected.",
    ],
  },
];

export const pricingContext = {
  commitmentH2: "What every term includes",
  commitment: "The website rebuild begins within the first 30 days. Hosting and bandwidth are included for the term. The first 90 days are the ramp. Deliverables are written into the agreement, and the day-90 review examines leading indicators. Amplification and Quantum Leap define, verify, and report cost per qualified meeting from the ramp onward. Every engagement is 12 months because a year is the shortest honest window for a long-cycle account. We report leading indicators every 30 days, then review pipeline and revenue at months six and 12 against the sales cycle in the agreement. The early-exit clause is direct. The unbilled balance of the included $15,000 build is due on the final invoice, prorated to months served. Nothing else. Code, content, and domain stay yours.",
  choiceH2: "The choice is explicit",
  choice: [
    "Start Ground State if you need the publishing cadence. Start Excitation if you have a conversion path and want to test paid search. Start Amplification if you need the full pipeline program. Start Quantum Leap if multiple brands and media buying are already operational requirements.",
    "The wrong package is not a victory for us. We will move you. The work only fits when the scope matches the sales cycle, budget, and operating capacity.",
    "[Start a package](/pricing#tiers) with card or bank debit, no call required. Or [book a pipeline call](/contact) first if you would rather talk through the fit. Every package is a 12-month engagement. Every price is on the page.",
  ],
  comparisonH2: "Why a year",
  comparison: "A 12-month term is not a way to make cancellation difficult. It is a way to avoid judging revenue before a buyer can reasonably close. Search work takes time to become visible. Google gives a four-month-to-one-year window. In healthcare, biotech, medical devices, and life sciences tools and diagnostics, a new commercial relationship can involve scientific review, clinical review, VP of regulatory sign-off, procurement, finance, and legal before a contract is signed. We do not ask you to wait a year without information. The monthly report shows what was published, what it did, and what happens next. The six- and 12-month reviews look at pipeline and revenue.",
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
