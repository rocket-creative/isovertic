// Navigation and review notices for the rewritten site. Paths match the URL lines in content/site-copy.
export const primaryNav = [
  { href: "/", label: "$4,995 website" },
  { href: "/life-science-ai-automation", label: "Automation" },
  { href: "/ai-visibility-audit", label: "AI visibility" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
] as const;

export const headerCta = { href: "/contact", label: "Get the free snapshot" } as const;

export const footerCols = [
  {
    h: "Services",
    items: [
      ["The $4,995 website", "/life-science-website-design"],
      ["AI automation", "/life-science-ai-automation"],
      ["Website redesign", "/life-science-website-redesign"],
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
export const reviewNotice = "Local review draft. Not published. Forms, older pages, and checkout are switched off.";
export const formNotice = "Review draft: this form does not send yet.";
