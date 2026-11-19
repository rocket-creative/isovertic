// Navigation and review notices for the rewritten site. Paths match the URL lines in content/site-copy.
export const primaryNav = [
  { href: "/", label: "$4,995 website" },
  { href: "/life-science-ai-automation", label: "Automation" },
  { href: "/ai-visibility-audit", label: "AI visibility" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
] as const;

export const headerCta = { href: "/ai-visibility-snapshot", label: "Get the free snapshot" } as const;

export const footerCols = [
  {
    h: "Services",
    items: [
      ["The $4,995 website", "/life-science-website-design"],
      ["AI automation", "/life-science-ai-automation"],
      ["PaperBrief, free", "/paperbrief"],
      ["Website redesign", "/life-science-website-redesign"],
      ["Free AI visibility snapshot", "/ai-visibility-snapshot"],
      ["AI visibility audit", "/ai-visibility-audit"],
      ["AI search optimization", "/ai-search-optimization-life-sciences"],
      ["SEO and content", "/life-science-seo"],
      ["Google Ads", "/life-science-google-ads"],
      ["Lead generation", "/life-science-lead-generation"],
    ],
  },
  {
    h: "Who we work with",
    items: [
      ["CROs", "/cro-marketing"],
      ["Research models", "/research-model-marketing"],
      ["Reagents and antibodies", "/reagent-antibody-marketing"],
      ["Lab equipment", "/lab-equipment-marketing"],
      ["Diagnostics", "/diagnostics-marketing"],
      ["Medical devices", "/medical-device-marketing"],
      ["Medical device launch", "/medical-device-launch-marketing"],
      ["Biotech", "/biotech-marketing"],
      ["CDMOs", "/cdmo-marketing"],
      ["Consulting firms", "/life-science-consulting-marketing"],
    ],
  },
  {
    h: "Company",
    items: [
      ["Pricing", "/pricing"],
      ["What a biotech website costs", "/biotech-website-cost"],
      ["Agency or in house", "/agency-vs-in-house"],
      ["Connecticut", "/connecticut-life-science-marketing-agency"],
      ["About", "/about"],
      ["Contact", "/contact"],
    ],
  },
] as const;

export const footerLine = "Websites and AI visibility for life science companies.";
export const reviewNotice = "This is a draft for review. It is not published. Forms, older pages, and checkout are switched off.";
export const formNotice = "This is a review draft. The form does not send yet.";

// Search first plumbing. One list of published prices feeds the structured data and llms.txt,
// so a price is never stated one way on a page and another way to a crawler.
export const publishedOffers: readonly { name: string; price: number; unit?: string }[] = [
  { name: "AI visibility snapshot", price: 0 },
  { name: "Life science website, up to 15 pages", price: 4995 },
  { name: "Full AI visibility audit", price: 2500 },
  { name: "Website hosting and care", price: 50, unit: "a month and up" },
  { name: "AI visibility monitoring", price: 500, unit: "a month and up" },
  { name: "Search and publishing", price: 1000, unit: "a month" },
  { name: "Google Ads management", price: 750, unit: "a month plus 10% of ad spend" },
];

// The row of links near the foot of each page. Crawlers and readers both use it to reach sibling pages.
export const related = { label: "Related", heading: "Related pages" } as const;

// What llms.txt tells AI assistants about the company.
export const llms = {
  name: "Isovertic",
  summary:
    "Isovertic is a two person marketing agency for life science companies. It builds complete websites for a fixed price of $4,995. It also helps life science companies show up on Google and in AI assistants such as ChatGPT. That includes contract research organizations, research model providers, reagent and antibody suppliers, lab equipment makers, diagnostics companies, medical device companies, and biotech startups.",
  knowsAbout: [
    "Life science website design",
    "Biotech website design",
    "AI visibility",
    "AI search optimization",
    "Life science SEO",
    "Scientific content marketing",
    "Google Ads for life science companies",
    "Marketing for contract research organizations",
    "Medical device marketing",
    "Diagnostics marketing",
    "Research model and reagent marketing",
    "AI automation for life science companies",
  ],
  facts: [
    "People: George Stoff, Founder and Lead Engineer, has built software for more than 30 years. Kristen Coughlin, Chief Operating Officer, is a trained molecular biologist.",
    "Location: Long Island, New York. Isovertic works with life science companies across the United States and meets clients in Connecticut, New York, and Boston.",
    "The website price is fixed at $4,995 for up to 15 pages. Monthly services run month to month. Clients can stop them with 30 days notice. There is no 12 month contract.",
    "Software runs the free AI visibility snapshot. It asks ChatGPT, Gemini, Perplexity, and Claude ten buyer questions, three times each. The report arrives within 24 hours.",
    "AI drafts the work. Kristen checks the science on client websites. The client's own expert approves every technical claim before it is published.",
  ],
} as const;
