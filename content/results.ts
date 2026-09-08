// /results roster copy. Verbatim from the results rewrite. Do not invent numbers or paraphrase kickers.

export type RosterItem = {
  id: string;
  name: string;
  sector: string;
  sectorHref: string;
  window: string;
  confirmedLabel: "Confirmed numbers" | "Confirmed scope";
  confirmed: string[];
  whatWeDid?: string;
  numbersStatus?: string;
  kicker: string;
};

export const resultsPage = {
  title: "Client results and case studies | ISOVERTIC",
  description: "Named work across biotech, healthcare technology, medical devices, wellness, and hospitality, plus two brands we own and run on the same system. Where a client has confirmed the numbers, we publish them. Where the engagement is still inside its first eight months, we say so and post the numbers when they land.",
  eyebrow: "Results",
  h1: "The roster. The numbers we can show. The rest, when they land.",
  lead: "Seven clients and two brands we own, all run on the same six-step system. Every growth case study on this site covers the first eight months of an engagement and nothing after. Numbers publish at month eight so a strong later month cannot inflate the story. Where a client has approved the number in writing, it is on the page below their name. Where the engagement is still inside its first eight months, we say so.",
};

export const roster: RosterItem[] = [
  {
    id: "ingenious-targeting-laboratory",
    name: "ingenious targeting laboratory",
    sector: "Biotech and life sciences",
    sectorHref: "/industries/biotech",
    window: "August 2024 through present, growth-method reporting active.",
    confirmedLabel: "Confirmed numbers",
    confirmed: [
      "Approximately 5x lift in monthly form fills, average of months five through eight versus the client's own six-month baseline before start.",
      "3.7x growth in monthly organic clicks from Google Search over the same window, measured in Search Console.",
      "Hundreds of hand-built specialist pages shipped on top of a catalog of thousands of product pages generated one page per model from the client's own data.",
      "A documented technical content system governing terminology, mouse strain nomenclature, and citation standards.",
      "An editorial researcher-spotlight series engineered for institutional backlinks from academic sites.",
      "Outbound sequences targeting venture-backed biotech prospects, running against a defined qualified-meeting standard.",
    ],
    whatWeDid: "The full method, run on a life-science catalog. Keyword architecture mapped to the researcher's own vocabulary. Site architecture built to prevent cannibalization across thousands of near-identical product pages. Page templates a scientist will trust. Server-side tracking. Algorithm-drift monitoring across two Google core updates that hit inside the window. Ongoing catalog expansion based on Search Console signal.",
    kicker: "Technical authority converted into compounding search demand, at a scale most agencies will not attempt.",
  },
  {
    id: "sydra",
    name: "Sydra",
    sector: "Healthcare technology",
    sectorHref: "/industries/healthcare",
    window: "New-brand launch, first year complete.",
    confirmedLabel: "Confirmed numbers",
    confirmed: [
      "Approximately one qualified lead per week on a small paid budget (roughly $1,000 per month in ad spend against roughly $2,500 per month in site and campaign work) from a brand that did not exist online at start.",
      "Full SEO and design gap analysis shipped before build.",
      "Ten-article content launch to seed the topic authority.",
      "Master implementation brief for the site rebuild, which now runs on our stack.",
    ],
    whatWeDid: "The audit-to-brief-to-build pattern our SEO page promises, executed on a new-brand launch. Sydra needed to move from invisible to architected inside a year, on a budget where flood-of-leads was never the goal. A qualified lead per week from paid on a small budget, into a brand that did not exist three months earlier, is the right result for the spend. We do not promise a flood. We promise every lead came from a specialist who searched for exactly what Sydra sells, and that we can prove which page produced it.",
    kicker: "A rebrand is only finished when the pipeline runs under the new name. We built both.",
  },
  {
    id: "kavera",
    name: "Kavera",
    sector: "Healthcare technology",
    sectorHref: "/industries/healthcare",
    window: "Rebrand and outbound program, ongoing.",
    confirmedLabel: "Confirmed scope",
    confirmed: [
      "Brand transition from the original Synaptix identity through naming, positioning, and launch infrastructure.",
      "Outbound sales program reaching neurology, sports medicine, and pediatric practices.",
    ],
    numbersStatus: "Inside the eight-month growth-method window. Reported numbers publish when the window closes.",
    kicker: "A rebrand is only finished when the pipeline runs under the new name. We built both.",
  },
  {
    id: "pathways-within",
    name: "Pathways Within",
    sector: "Wellness and behavioral health",
    sectorHref: "/industries/healthcare",
    window: "Two-phase platform engagement, in progress.",
    confirmedLabel: "Confirmed scope",
    confirmed: [
      "Full ecosystem migration and architecture across three connected sites with a practitioner portal.",
      "Twelve-month platform build integrating scheduling infrastructure.",
      "Compliance documentation set and cross-promotion strategy.",
    ],
    numbersStatus: "Inside the eight-month growth-method window on the platform side. Reported numbers publish when the window closes.",
    kicker: "Wellness brands need infrastructure as much as imagery. We delivered both phases as one architecture.",
  },
  {
    id: "capseus",
    name: "Capseus",
    sector: "Medical devices",
    sectorHref: "/industries/healthcare",
    window: "Content program active September 2026 forward.",
    confirmedLabel: "Confirmed scope",
    confirmed: [
      "Site rebuilt around the surgeon's question, not the device's spec sheet.",
      "Monthly newsletter, blog, and social cadence starting September 2026.",
      "Every clinical claim routed through a named reviewer before it publishes.",
    ],
    numbersStatus: "New engagement. Growth-method numbers publish at month eight.",
    kicker: "Device marketing that a surgeon will read and a regulator will not flag, written from the operating side of medical review.",
  },
  {
    id: "metablify",
    name: "Metablify",
    sector: "Biotech and life sciences",
    sectorHref: "/industries/biotech",
    window: "Content program active September 2026 forward.",
    confirmedLabel: "Confirmed scope",
    confirmed: [
      "Technical content system written for researchers.",
      "Monthly newsletter, blog, and social cadence starting September 2026.",
      "Pages structured so the researcher who searches for the method finds them first.",
    ],
    numbersStatus: "New engagement. Growth-method numbers publish at month eight.",
    kicker: "Scientific software sells when the researcher finds the answer before the demo. The Ground State cadence, run on a research-tools company.",
  },
  {
    id: "riviera-waterfront-mansion",
    name: "Riviera Waterfront Mansion",
    sector: "Hospitality and events",
    sectorHref: "/industries/hospitality",
    window: "Sales packaging and pricing architecture, complete.",
    confirmedLabel: "Confirmed scope",
    confirmed: [
      "Tiered collection design across seasons.",
      "Vendor partnership structuring.",
      "Seasonal showcase bundles.",
      "Sales collateral the venue team closes with.",
    ],
    numbersStatus: "Off-menu category. The engagement was a packaging build, not a growth engagement. No monthly reporting window applies.",
    kicker: "Hospitality marketing from the operating side, where the booking is won in the package, the tour, and the follow-up.",
  },
  {
    id: "aisle-and-time",
    name: "Aisle & Time",
    sector: "Owned brand, SaaS",
    sectorHref: "/industries/startups",
    window: "Owned product, run on the same stack we sell.",
    confirmedLabel: "Confirmed scope",
    confirmed: [
      "Our own wedding-day timeline and shot-list software for photographers and couples.",
      "Built on the same stack we sell: Next.js, server-rendered, schema on every page.",
      "Published pricing at $29.95, no call required.",
      "Content system aimed at the questions photographers type before a wedding.",
    ],
    numbersStatus: "We run the system on our own products first. What works here ships to clients. What does not, does not. Product-level numbers publish on the Aisle & Time site.",
    kicker: "The proof-of-the-system product.",
  },
  {
    id: "elena-kay-photography",
    name: "Elena Kay Photography",
    sector: "Owned brand, Long Island weddings",
    sectorHref: "/long-island",
    window: "Owned studio, marketed with the system.",
    confirmedLabel: "Confirmed scope",
    confirmed: [
      "Our own Long Island wedding photography studio, marketed with the system.",
      "Venue-specific pages for the venues photographers actually shoot.",
      "Real prices on the site.",
      "Review-velocity program across Nassau and Suffolk.",
      "Search campaigns run to a cost per booked consultation.",
    ],
    numbersStatus: "The local playbook we sell to practices and venues, proven on a business we own in the same market. Local numbers publish on the Elena Kay site.",
    kicker: "The same method, run in a completely different vertical.",
  },
];
