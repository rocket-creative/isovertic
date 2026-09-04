import type { Page } from "./types";

export const compares: Page[] = [
  {
    slug: "abstrakt-marketing-group-alternative",
    title: "Abstrakt Marketing Group Alternative | ISOVERTIC",
    metaDescription: "Comparing ISOVERTIC and Abstrakt Marketing Group: senior boutique vs 500 person machine, with TV capability and published pricing.",
    eyebrow: "Comparison",
    h1: "An Abstrakt alternative for founders who want the senior team, not the machine.",
    lead: "Abstrakt Marketing Group is the biggest name in combined lead generation and marketing, with 500 plus employees and more than 1,700 clients, and for many companies it is a fine choice. This page is for the founders who looked at that scale and wondered who exactly would be doing their work.",
    sections: [
      { h2: "Where the two firms differ", body: [
        "Team: ISOVERTIC is senior hands only with the founder on the account. Abstrakt runs a large staff model across hundreds of accounts.",
        "Scope: both run outbound plus marketing. ISOVERTIC adds full custom development on a modern stack and TV and CTV media buying with in house creative.",
        "Pricing: ISOVERTIC publishes four tiers from $2,500 to $25,000 plus a month. Abstrakt quotes by conversation.",
        "Fit: Abstrakt suits trades and SMBs comfortable in a high volume system. ISOVERTIC suits scientists, startups, and healthcare brands who want one senior team accountable end to end and who market under MLR or HIPAA rules.",
      ]},
      { h2: "A fair note", body: [
        "Abstrakt's industry exclusivity model and scale are real strengths. If you want the largest vendor, that is them. If you want the senior boutique with the same scope and more channels, book the call.",
      ]},
    ],
    faqs: [
      { q: "Is ISOVERTIC cheaper than Abstrakt?", a: "Our tiers are published on the pricing page, from $2,500 a month, so you can compare without a sales process. Value per dollar depends on whether you want a machine or a senior team." },
      { q: "Do you offer industry exclusivity?", a: "We keep a deliberately short roster, which functions as exclusivity in practice. Formal territory exclusivity is available by agreement." },
    ],
    related: [
      { label: "Pricing", href: "/pricing" },
      { label: "How it works", href: "/how-it-works" },
      { label: "Abstrakt alternatives article", href: "/field-notes/abstrakt-marketing-group-alternatives" },
    ],
  },
  {
    slug: "belkins-alternative",
    title: "Belkins Alternative for Companies That Need More Than Meetings",
    metaDescription: "Belkins books strong meetings. ISOVERTIC books the meetings and builds everything that makes them close: site, content, ads, and media.",
    eyebrow: "Comparison",
    h1: "Appointment setting is a stage. You are buying a pipeline.",
    lead: "Belkins is a respected appointment setting firm, and if outbound volume into an already strong brand is your only gap, they are a credible choice. The problem most companies discover is that meetings booked into a weak website and an invisible brand show up cold and close poorly. Outbound is the last mile of a system. We build the system.",
    sections: [
      { h2: "The differences that matter", body: [
        "Scope: outbound only versus the full pipeline from site to calendar.",
        "Coherence: our sequences are written by the same team that wrote your website, so the prospect's diligence confirms the outreach instead of contradicting it.",
        "Measurement: meetings held and closed, not booked and ghosted, with the 90 day commitment in writing.",
      ]},
    ],
    faqs: [
      { q: "If we only need outbound, should we just use Belkins?", a: "Possibly yes, and we will tell you so on a call. If the website and brand are not ready for outbound, that is the conversation to have first." },
    ],
    related: [
      { label: "Appointment setting", href: "/outbound-appointment-setting" },
      { label: "Pricing", href: "/pricing" },
      { label: "Best appointment setting companies", href: "/field-notes/best-appointment-setting-companies" },
    ],
  },
  {
    slug: "agency-vs-in-house",
    title: "Hiring a Salesperson vs Outsourcing Sales and Marketing",
    metaDescription: "The real math on hiring in house versus outsourcing the pipeline: $160K to $190K per year versus one firm with a meeting commitment.",
    eyebrow: "Comparison",
    h1: "The hire feels safer. The math disagrees.",
    lead: "The default instinct is to hire: one marketer, maybe one SDR, plus an agency to fill the gaps. Priced honestly, that stack runs $160K to $190K per year before payroll taxes, software, and the six months of ramp, and it still leaves nobody accountable for the whole pipeline.",
    sections: [
      { h2: "The line items nobody budgets", body: [
        "A marketing manager loads to roughly $140K to $175K with tax and benefits. An SDR loads to $70K to $90K. Tools add $20K a year. Ramp takes a quarter or two, and B2B sales hiring carries miss rates near a coin flip. Price the miss: $80K to $150K of cost for zero meetings, then you start over.",
        "A pipeline firm costs in the range of one loaded mid level hire and delivers a team across disciplines no single human possesses, with a meeting commitment in writing and a notice period instead of a severance.",
      ]},
      { h2: "The framework by stage", body: [
        "Under $1M, neither: the founder sells. $1M to $10M, outsource the pipeline and keep the close in house. Past $10M, hire sales leadership and internalize, ideally inheriting a documented system rather than a blank page.",
      ]},
    ],
    faqs: [
      { q: "Will you tell us if hiring is the right answer?", a: "Yes, and we publish the framework. Past roughly $10M in revenue, in house leadership starts to pay for itself, and the best outcome is internalizing a system we documented for you." },
    ],
    related: [
      { label: "The full math article", href: "/field-notes/hire-salesperson-or-outsource" },
      { label: "Pricing", href: "/pricing" },
      { label: "How it works", href: "/how-it-works" },
    ],
  },
];

export const getCompare = (slug: string) => compares.find((s) => s.slug === slug);
