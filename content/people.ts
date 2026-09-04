export type Person = {
  slug: string;
  name: string;
  title: string;
  short: string;
  bio: string[];
  credentials: string[];
  knowsAbout: string[];
  alumniOf?: string[];
  sameAs?: string[];
  initials: string;
};

export const people: Person[] = [
  {
    slug: "george-stoff",
    name: "George Stoff",
    title: "Founder and Lead Engineer",
    short: "Thirty years building software, brands, and demand. On every account.",
    initials: "GS",
    bio: [
      "George Stoff is a full stack engineer and founder. He has spent more than 30 years building the systems companies sell through: production software on Next.js, TypeScript, and Supabase, server rendered sites with thousands of schema backed pages, the data pipelines that feed outbound, and the ad and content systems that run on top of them. He writes the build briefs our coding agents execute.",
      "He has shipped SaaS products of his own, operated agencies, run media brands, and managed go to market for healthcare, biotech, and professional service companies. He has written more pages about mouse models than most people who make them.",
      "ISOVERTIC exists because every owner he worked with was buying these capabilities in pieces, from vendors who never spoke, and wondering why the pieces never became a pipeline.",
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
    short: "Molecular biologist. A decade selling for a genetic engineering CRO. Operations at Yale School of Medicine.",
    initials: "KC",
    bio: [
      "Kristen Coughlin is Chief Operating Officer at ISOVERTIC, bringing a powerful combination of scientific discipline and business acumen to the agency's operations. A trained molecular biologist who completed her graduate laboratory work at Stony Brook University, Kristen spent more than a decade driving sales, marketing, and business development at Ingenious Targeting Laboratory, a CRO specializing in genetic engineering and translational product development.",
      "Most recently, she managed complex institutional operations in the Department of Microbial Pathogenesis at the Yale School of Medicine.",
      "Under her operational leadership, ISOVERTIC builds your digital presence, automates leads for your SaaS or physical products, and books appointments with qualified prospects to consistently drive your sales.",
    ],
    credentials: [
      "Molecular biologist, graduate laboratory work at Stony Brook University",
      "More than ten years in sales, marketing, and business development at a genetic engineering CRO",
      "Institutional operations, Department of Microbial Pathogenesis, Yale School of Medicine",
    ],
    knowsAbout: ["Life science sales", "CRO business development", "Mouse model services", "Research institution operations", "Scientific content review"],
    alumniOf: ["Stony Brook University"],
  },
];

export const getPerson = (slug: string) => people.find((p) => p.slug === slug);
