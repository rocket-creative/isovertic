export const aiRuns = ["Scheduling", "Deployment", "Data collection", "Research", "Reporting"] as const;
export const humansDo = ["Create", "Design", "Review", "Test", "Engage"] as const;

export const aiHuman = {
  eyebrow: "AI and human",
  h2: "AI for automation. Humans for creation.",
  lead: "Automation handles scheduling, deployment, data collection, research, and reporting. People create, design, review, test, and engage. You are paying for judgment, not for someone to spend an afternoon moving a post between systems.",
  aiLabel: "AI runs",
  aiNote: "Faster process, lower cost, and a tier price that starts at $2,500 instead of $8,500.",
  humanLabel: "Humans do",
  humanNote: "Only a human understands another human, and your buyer is one.",
  close: "Published pages are architected, edited, and fact-checked by people. Technical work is reviewed by people who know the subject. In regulated work, the method includes the approval and form-handling steps the account requires.",
};

export const whyBuyers = {
  eyebrow: "Why buyers buy",
  h2: "85 percent future. 15 percent past.",
  body: "Most of a buying decision is about the future: what will my life look like after I buy this. The rest is about the past: track record and performance. We write in that ratio. Every page answers why, then how, then what, and carries the four things a buyer needs before they say yes: facts, trust, something worth reading, and a human behind it.",
};

export const educateGridCell = "Protocol, $3,500 client add on";

export const systemNote =
  "Pick a tier and we run the steps in it. Ground State runs step two. Excitation runs one through three. Amplification runs everything but TV. Quantum Leap runs all of it, per brand. Step six is Protocol: we teach your team the system and hand over the runbooks in your name. The pricing page shows the grid.";

export const closeNote = "The last step is yours: close.";

// Hero trust strip. Four facts a buyer can verify on the site, separated by a middle dot.
export const trustStrip = [
  { label: "Written meeting volume commitment", href: "/resources/meeting-quality-standard" },
  { label: "Published pricing", href: "/pricing" },
  { label: "HIPAA aware, BAA ready", href: "/compliance/hipaa-posture" },
  { label: "12-month term", href: "/system" },
];

export const heroAudit = { label: "Take the Pipeline Ownership Audit", href: "/audit" };

// Brand tagline. Hero eyebrow and footer, one source.
export const tagline = "The growth agency for healthcare, biotech, medical devices, and life sciences.";

// Buyer role tabs. The founder tab keeps the framing from the problem section; the CFO and CRO tabs answer the
// question each of them walks in with, and point to the page that shows the math.
export const buyerRoles = {
  eyebrow: "Who we work with",
  h2: "Three people say yes to this. Each one asks a different question.",
  roles: [
    {
      key: "founder",
      tab: "Founder or CEO",
      question: "Why does nothing I buy add up to a pipeline?",
      body: "You have a web vendor, an ads vendor, and a sales hire who quit, and every one of them hit the number they were given. Nobody owned the meeting. We run all six steps inside one boundary, with one number at the end and the same senior team on every package.",
      cta: { label: "See how the system works", href: "/system" },
    },
    {
      key: "cfo",
      tab: "CFO or finance lead",
      question: "Is $10,000 a month worth it against hiring in house?",
      body: "We publish the cost-per-meeting method, the tier economics, and a model that puts a fully loaded hire beside every tier over 24 months, with your salary, load, and deal value in it. You see the math before the call, and you see the month we agree to be judged on revenue.",
      cta: { label: "Run the agency versus in-house model", href: "/resources/agency-vs-inhouse" },
    },
    {
      key: "cro",
      tab: "Head of Sales or CRO",
      question: "Will these meetings actually close?",
      body: "Two answers. First, we define what counts as a meeting in writing before the program starts, verify each one against the criteria, and report meeting-to-opportunity conversion once an engagement has the data. Meetings that no-show or fail the criteria do not count. Second, the meetings close because they come from a specialist who searched for exactly what you sell, in the vocabulary they use professionally. That is a warmer opener than a cold list. The commitment is in the agreement.",
      cta: { label: "Read the meeting quality standard", href: "/resources/meeting-quality-standard" },
    },
  ],
};

export const commitmentStandard = { label: "What results to expect, and when", href: "/resources/engagement-and-measurement-standard" };

// Homepage copy. Rewritten 2026-09-10 from Site Rewrite v3.
export const home = {
  h1: "The Growth Agency for Healthcare, Biotech, Medical Devices, and Life Sciences",
  sub: "Isovertic is a growth agency for companies that sell to specialists. We build the website, run the advertising, publish the content, and book the meetings. Founders, CEOs, presidents, and vice presidents of commercial hire us when the marketing has to survive a chief scientific officer, a medical director, a compliance officer, or a VP of regulatory, not just a scroll.",
  who: {
    h2: "Who we work with",
    intro: "We serve four kinds of companies:",
    items: [
      { name: "Healthcare.", body: "Practice groups, hospitals, health systems, revenue-cycle companies, dental and vet and urgent-care groups, telehealth, and digital health." },
      { name: "Biotech.", body: "Therapeutics companies pre-clinical through commercial, research services, translational programs, and platform companies with a scientific buyer." },
      { name: "Medical devices.", body: "510(k) and PMA companies making implants, diagnostics, surgical instruments, capital equipment, in vitro diagnostics, and wearables." },
      { name: "Life sciences tools and diagnostics.", body: "Reagents, antibodies, kits, instruments, mouse models, cell lines, laboratory automation, and the diagnostics companies that sell into hospitals and reference labs." },
    ],
    after: "If your buyer is a chief scientific officer, chief medical officer, medical director, principal investigator, practice administrator, director of billing, VP of regulatory, or VP of commercial, we know how to earn their meeting.",
  },
  what: {
    h2: "What we actually do",
    lead: "We build the website that gets found by the specialist already searching for what you sell, then we spend advertising only on those people.",
    body: [
      "Your website is not a brochure. It is your best salesperson, working alone at 3 a.m., when a specialist has a real question and starts looking for an answer. If your site can answer that question in language the specialist recognizes, it hands your team a qualified meeting the next morning. That is the whole point.",
      "Every engagement gives you one team responsible for the connected work: the website, the published articles, the newsletter, the social posts, Google Ads, streaming television and radio when the math supports it, outbound meetings on your calendar, and training for your team.",
    ],
  },
  move: {
    h2: "Send us your best-converting landing page",
    body: "If your website gets traffic but not qualified conversations, [book a pipeline call](/contact) and paste us the URL of your best-converting landing page. In about ten minutes we will tell you what is broken, whether the fix is the site or the follow-up, and what a rebuild would cost, or whether you need one at all. Sometimes the honest answer is you are already fine, and we are happy to say so and hand you back your afternoon.",
  },
  proof: {
    h2: "Proof, before the pitch",
    body: [
      "Ingenious Targeting Laboratory, a mouse-model company selling to research scientists, moved from 13 monthly form submissions to about 64 in its first eight months with Isovertic. Its organic search traffic rose 3.7 times in that period. Internal, September 2026.",
      "Sydra Health, a revenue-cycle company serving healthcare billing directors, went from no online presence in mid-June 2026 to roughly one qualified meeting a week on about $1,000 in monthly advertising spend and $2,500 in monthly site work. Internal, September 2026.",
      "Both are unusual for their category and neither is a promise for yours. They are examples of what happens when the site can carry the sales argument and one team owns the number at the end.",
    ],
  },
  tiers: {
    h2: "Four ways to work with us",
    intro: "Every price is published. Every package is a 12-month engagement. Every one includes a $15,000 website rebuild and hosting, spread across the year. You can start with card or bank debit without a call.",
    items: [
      {
        name: "Ground State, $2,500 per month",
        for: "For a company that needs to show up consistently before it adds advertising or outbound. Each month you get:",
        list: [
          "One published article on your site",
          "One newsletter sent to your list",
          "Eight social posts across your active channels",
          "One short monthly report",
          "The website rebuild and hosting, included across the year",
        ],
      },
      {
        name: "Excitation, $5,000 per month plus advertising spend",
        for: "For a company with a real offer, a working conversion path, and $1,000 to $5,000 a month available for Google Ads. Everything in Ground State, plus:",
        list: [
          "One Google Ads campaign, built and managed",
          "One landing page for the campaign, refreshed as needed",
          "Lead follow-up within one business day",
          "16 social posts a month",
          "A 60-minute monthly strategy call with the account lead",
        ],
      },
      {
        name: "Amplification, $10,000 per month plus advertising spend",
        for: "For a company with a defined ideal client, at least $5,000 a month for advertising, and a named person who owns the calendar. Everything in Excitation, plus:",
        list: [
          "Higher-volume publishing, including a YouTube channel",
          "One outbound seat with a written commitment for the number of meetings per month",
          "Weekly account review",
          "The option to add the HIPAA or MLR compliance stack",
        ],
      },
      {
        name: "Quantum Leap, from $25,000 per month plus advertising spend",
        for: "For later-stage healthcare, biotech, medical device, and life sciences groups running two or more brands. Everything in Amplification, plus the system run across brands, two outbound seats, in-house creative production, media buying across streaming and broadcast, and a quarterly operations audit.",
        list: [] as string[],
      },
    ],
    after: "See every package, add-on, and included deliverable on the [pricing page](/pricing).",
  },
  system: {
    eyebrow: "One team. The whole pipeline.",
    h2: "What one team actually owns",
    intro: "Most growth agencies hand you a web vendor, an advertising vendor, a writer, and a monthly report from each one. Each can describe activity. None is responsible for a qualified meeting on your calendar. Isovertic runs six connected steps. The package sets how deep we go. The steps do not change.",
    steps: [
      { name: "Build", body: "gives your website the pages, proof, pricing, and next step your buyers need. It is the base layer. Every package includes it." },
      { name: "Rank", body: "puts a steady publishing rhythm behind the site: articles, a newsletter that goes to your list, and social posts your team can stand behind." },
      { name: "Run", body: "manages Google Ads around the searches that signal a buyer is looking now. We report qualified meetings and cost per meeting, not a report full of traffic charts." },
      { name: "Buy", body: "adds streaming television, broadcast, or radio when name recognition helps the sale and the math supports it." },
      { name: "Book", body: "puts qualified meetings on your calendar, each with a written brief, through outbound run by the same team that knows your website and offer." },
      { name: "Educate", body: "hands your team the runbooks and training when they would rather run the work themselves." },
    ],
    after: "We do not publish the method used to decide what gets built, published, or purchased. That method is what you hire us to do. Read the six steps on the [system page](/system).",
  },
  regulated: {
    h2: "Built for regulated companies",
    intro: "The work has to survive review, not merely look good in a browser.",
    items: [
      { name: "HIPAA form-and-call stack, $750 per month.", body: "Intake forms that do not leak, phone tracking that does not violate protected health information rules, and a data flow you can defend in an audit. Available on any package." },
      { name: "MLR review gate, $500 to $1,200 per month plus setup.", body: "For medical, legal, and regulatory review. A named reviewer, a sign-off log for each asset, and a claim library your team can reuse. Standard for biotech, medical device, and pharma accounts." },
    ],
  },
  commitment: {
    h2: "The limits we state before you sign",
    body: [
      "This works when your buyers already search in specific language. A device model, a regulation, a protocol, a billing code, a gene, or a clinical question. If nobody is looking for your category yet, this work cannot locate them. We will tell you before you pay.",
      "A qualified meeting a week on a small advertising budget is a trickle, not a flood. It can still be a good result. We will not promise a flood to get a signature.",
      "A year is the shortest window in which pipeline and revenue can move on a long healthcare or business-to-business sale. Google's own guidance says changes to search visibility can take four months to a year, per [Google Search Central](https://developers.google.com/search/docs/appearance/site-names). Healthcare sales average 125 days to 24 months. We report leading indicators every 30 days and review pipeline and revenue at months six and 12 against your actual sales cycle.",
    ],
  },
  start: {
    h2: "Start where you are",
    known: {
      label: "If you know what package you want,",
      body: "[start on the pricing page](/pricing) with card or bank debit. No call required.",
    },
    talk: {
      label: "If you would rather talk it through,",
      body: "[book a pipeline call](/contact) and send us the best-converting landing page you have. In about ten minutes we will tell you what is working, what is not, and whether the fix is the site, the offer, or the follow-up. Sometimes the honest answer is you are already fine, and we are happy to say so and hand you back your afternoon.",
    },
  },
};
