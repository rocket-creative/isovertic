export type Person = {
  slug: string;
  name: string;
  title: string;
  short: string;
  /** Short-form canonical bio for homepage, /system, and founder-card surfaces. */
  card: string;
  bio: string[];
  credentials: string[];
  knowsAbout: string[];
  alumniOf?: string[];
  sameAs?: string[];
  initials: string;
  dateModified?: string;
  /** Optional disclosure shown below the bio paragraphs. */
  disclosure?: string;
};

export const people: Person[] = [
  {
    slug: "george-stoff",
    name: "George Stoff",
    title: "Founder and Lead Engineer",
    short: "Full-stack engineer. More than 30 years building the systems companies sell through. Standards owner on every account.",
    card: "Full-stack engineer with more than 30 years building the systems companies sell through. He built the seven-layer method Isovertic runs on and stays on every account as the standards owner and the escalation path. When the algorithm shifts or a compliance question comes up, you get his engineering judgment. The day-to-day execution runs on the team he trained.",
    initials: "GS",
    bio: [
      "Full-stack engineer with more than 30 years building the systems companies sell through: server-rendered sites with thousands of schema-backed pages, the data pipelines that feed outbound, and the ad and content systems on top. He has shipped SaaS products of his own and run go-to-market for healthcare, biotech, and professional-service companies.",
      "ISOVERTIC is the codified version of that method. George built it, wrote it down, and stays on every account as the standards owner and the escalation path. When the algorithm shifts or a compliance question comes up, you get his engineering judgment. The day-to-day execution runs on the team he trained.",
      "He started ISOVERTIC because every owner he worked with was buying these capabilities in pieces, from vendors who never spoke, and wondering why the pieces never became a pipeline.",
    ],
    credentials: [
      "Founder, ISOVERTIC and Rocket Creative LLC",
      "Architect of a 147 page life science content system",
      "Author of the 18 play outbound runbook behind our appointment programs",
    ],
    knowsAbout: ["Next.js", "TypeScript", "Supabase", "Programmatic SEO", "AI search optimization", "Google Ads", "Connected TV", "Outbound sales systems"],
    sameAs: ["https://www.linkedin.com/in/george-stoff-b1826971"],
  },
  {
    slug: "kristen-coughlin",
    name: "Kristen Coughlin",
    title: "Chief Operating Officer",
    short: "Trained molecular biologist. Ten years selling translational research products. Built the operation that runs the method.",
    card: "Trained molecular biologist. Ten years selling translational research products, then institutional operations in the Department of Microbial Pathogenesis at the Yale School of Medicine. She reviews the life-science work before it reaches a client's MLR reviewer. She also built the delivery operation: took the method George engineered, wrote it down, trained the team on it, and turned it into a repeatable engagement so the same seven-layer system runs the same way on every account.",
    initials: "KC",
    bio: [
      "Trained molecular biologist. Ten years selling translational research products, then institutional operations in the Department of Microbial Pathogenesis at the Yale School of Medicine. She reviews the life-science work for scientific register and accuracy before it reaches a client's MLR reviewer, and she is on every life-science account.",
      "She also built the delivery operation. She took George's method, documented it, trained the team on it, and turned it into a repeatable engagement so the same seven-layer system runs the same way on every account. That is the reason the company can honestly say \"the founder is the source, not the bottleneck.\" Somebody had to build the operation that makes that true.",
    ],
    credentials: [
      "Molecular biologist, graduate laboratory work at Stony Brook University",
      "More than ten years in sales, marketing, and business development selling translational research products",
      "Institutional operations, Department of Microbial Pathogenesis, Yale School of Medicine",
    ],
    knowsAbout: ["Life science sales", "CRO business development", "Mouse model services", "Research institution operations", "Scientific content review"],
    alumniOf: ["Stony Brook University"],
    sameAs: ["https://www.linkedin.com/in/kristen-coughlin/"],
    disclosure: "Kristen is a former team member of Ingenious Targeting Laboratory, an Isovertic client in the mouse-model space. Isovertic engagements with Ingenious are reviewed for conflicts by the founder, and Kristen recuses herself from account decisions where a conflict is possible.",
  },
];

export const getPerson = (slug: string) => people.find((p) => p.slug === slug);

// How the firm runs when the founder is unavailable. Option B from the site review: the founder is the anchor,
// the coverage model is stated plainly, and nothing pretends there are more employees than there are.
// The response window is the one written into agreements; change it here and in the agreement together.
export const coverage = {
  eyebrow: "Coverage",
  h2: "How we run when George is on a plane.",
  lead: "Two people are on every account and the runbooks are written down. This is what that means in practice.",
  steps: [
    { n: "01", name: "A named second on every account", body: "Kristen Coughlin is on every life science account and takes the first call with any CRO or tools company that signs up. On every other account a named senior contractor holds the second seat, and you meet them in the 90 day ramp, not in an emergency." },
    { n: "02", name: "The system is in the runbooks, not in a head", body: "Every step we run is documented in the same runbooks we hand clients at Protocol. Sequences, ad structures, publishing cadence, reporting. A second operator can pick up any account from the documents, because the documents are how we run it in the first place." },
    { n: "03", name: "One escalation path, in writing", body: "Your agreement names the second operator, the response window for a live campaign issue (acknowledged within four business hours, a plan the same business day), and the email that reaches both of us." },
  ],
};
