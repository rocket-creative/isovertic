import type { Page } from "./types";

export type ComparePage = Page & { competitor: string };

export const compares: ComparePage[] = [
  {
    slug: "abstrakt-marketing-group-alternative",
    competitor: "Abstrakt Marketing Group",
    title: "Abstrakt Marketing Group Alternative | ISOVERTIC",
    dateModified: "2026-10-26",
    metaDescription: "How ISOVERTIC and Abstrakt Marketing Group compare: who does the work, what's included, what each costs, and who each one is right for.",
    eyebrow: "Comparison",
    h1: "An Abstrakt alternative for founders who want the senior team, not the machine.",
    lead: "Abstrakt Marketing Group is the biggest name in combined lead generation and marketing, with 500 plus employees and more than 1,700 clients, and for many companies it is a fine choice. This page is for the founders who looked at that scale and wondered who exactly would be doing their work.",
    sections: [
      { h2: "Where the two firms differ", body: [
        "Here's how the two firms compare. Abstrakt's prices come from its own [comparison page](https://www.abstraktmg.com/abstrakt-alternatives/), checked October 2026.",
      ], table: {
        caption: "ISOVERTIC compared with Abstrakt Marketing Group",
        columns: ["", "ISOVERTIC", "Abstrakt Marketing Group"],
        rows: [
          ["Who does the work", "One senior team handles your account from start to finish. Our founder, George Stoff, sets the standards for every account.", "A large staff working across hundreds of accounts."],
          ["What's included", "Marketing, plus calling and emailing potential customers on the higher plans. Every plan includes a custom built website, a $15,000 project. We can also buy TV and streaming TV ads, and we make the ads ourselves.", "Calling and emailing potential customers, plus marketing."],
          ["Price", "Four plans, from $3,000 to $25,000 or more a month, all listed on our site. Calling potential customers starts with the $10,000 plan.", "Three packages: $5,250, $7,250, and $9,250 a month."],
          ["Will they work with my competitors?", "We keep our client list short on purpose. If you want it in the contract that we won't take on a competitor in your territory, we can do that.", "Abstrakt offers industry exclusivity."],
          ["Best for", "Scientific, startup, and healthcare companies that want one senior team responsible for everything, especially if your marketing has to pass MLR review or follow HIPAA.", "Trades and small businesses that are comfortable with a high volume approach."],
        ],
      }},
      { h2: "A fair note", body: [
        "Abstrakt's industry exclusivity model and scale are real strengths. If you want the largest vendor, that is them. If you want the senior boutique with the same scope and more channels, book the call.",
      ]},
    ],
    faqs: [
      { q: "Is ISOVERTIC cheaper than Abstrakt?", a: "Both firms list their prices. Our calling and emailing starts with the $10,000 a month plan, which also covers your ads and content. Abstrakt's packages run $5,250 to $9,250 a month. If all you need is someone to make calls, Abstrakt may cost less. If you want the website, ads, and calls handled by one team, compare the full cost of each." },
      { q: "Do you offer industry exclusivity?", a: "We keep a deliberately short roster, which functions as exclusivity in practice. Formal territory exclusivity is available by agreement." },
    ],
    related: [
      { label: "Pricing", href: "/pricing" },
      { label: "System", href: "/system" },
      { label: "Field notes", href: "/field-notes" },
    ],
  },
  {
    slug: "belkins-alternative",
    competitor: "Belkins",
    title: "Belkins Alternative for More Than Meetings | ISOVERTIC",
    dateModified: "2026-09-04",
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
      { label: "Field notes", href: "/field-notes" },
    ],
  },
  {
    slug: "agency-vs-in-house",
    competitor: "In house hire",
    title: "Hiring a Salesperson vs Outsourcing Sales | ISOVERTIC",
    dateModified: "2026-09-04",
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
      { label: "Field notes", href: "/field-notes" },
      { label: "Pricing", href: "/pricing" },
      { label: "System", href: "/system" },
    ],
  },
];

export const getCompare = (slug: string) => compares.find((s) => s.slug === slug);
