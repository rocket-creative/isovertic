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
export const tagline = "Built by scientists. Optimized for the healthcare and life sciences industries.";

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
      body: "You have a web guy, an ads guy, and a sales hire who quit, and every one of them hit the number they were given. Nobody owned the meeting. We run all six steps inside one boundary, on one method, with one number at the end and the same senior team on every tier.",
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

// Homepage copy. Rewritten 2026-09-09 from the "Rewrite home" draft.
export const home = {
  h1: "The website that finds the specialist.",
  sub: "The website is the sales rep. It works the territory alone, finds the specialist mid-search, and hands you a form fill. We build the website that gets found by the specialist already searching for what you sell, then we spend ads only on those people.",
  sub2: "This is a pipeline system for long-cycle business-to-business and healthcare companies. It is not a brochure project. It is not a collection of vendors with separate reports. One team runs the site, content, paid search, media, outbound, and training on one method.",
  demand: {
    h2: "Demand already exists.",
    body: [
      "Scientists, clinicians, billing directors, and practice administrators search in exact vocabulary. A gene name. A billing code. A regulation. A device model. Those searches are often unclaimed because the large players spend their effort on broad terms.",
      "We build the pages that answer the specialist's specific question. Then we connect the page to a form, a calendar, and tracking that can show which page produced the conversation. The site does not wait for someone to meet you first.",
      "This method has a limit. It works when buyers already search with specific terms. If nobody searches for your category yet, the site cannot find them. We will say that before you pay.",
    ],
  },
  system: {
    eyebrow: "One team. The whole pipeline.",
    h2: "The same method on every account.",
    intro: "Every engagement has six steps:",
    steps: [
      { name: "Build.", body: "A server-rendered website, structured for specialist search." },
      { name: "Rank.", body: "Content that answers the questions specialists ask and can be cited by answer engines." },
      { name: "Run.", body: "Google Ads measured in meetings and cost per meeting." },
      { name: "Buy.", body: "Streaming and broadcast media when the sales motion supports it." },
      { name: "Book.", body: "Outbound meetings with a written brief for each one." },
      { name: "Educate.", body: "Protocol training and runbooks for teams that want to operate the system themselves." },
    ],
    after: "The tier sets which steps we run and how deeply. The method stays the same. Read the build underneath it on the [system page](/system).",
  },
  layers: {
    h2: "The seven layers under Build.",
    body: [
      "A specialist-search site is an engineering job. The work starts before a page is written: keyword architecture, site architecture, specialist page templates, tracking, compliance, algorithm-drift monitoring, and catalog expansion.",
      "That combination is the moat. A generalist can draft a page. The harder job is deciding which specialist terms merit pages, preventing hundreds of similar pages from competing with each other, making the page credible to a technical reader, and proving which page led to a conversation.",
      "Every build is server-rendered. The full page arrives on the first load, rather than waiting for a browser to assemble it. You own the code and the domain. The website rebuild and hosting are included in every published tier. See the [published pricing](/pricing).",
    ],
  },
  proof: {
    h2: "Proof before adjectives.",
    body: [
      "Ingenious Targeting Laboratory's form fills rose 4.9x and monthly organic clicks rose 3.7x in the first eight months. Sydra went from no online presence in mid-June 2026 to roughly one lead per week on about $1,000 monthly ad spend plus $2,500 monthly site work. Those are internal account results, not a promise that every category produces the same volume.",
      "The relevant question is not whether a report contains a large traffic number. It is whether the work put a specialist with the right problem in front of the right page, and whether the handoff can be traced. That is the number the system is built to own.",
      "A small budget produces a trickle, not a flood. That can still be the correct result for the spend. We do not promise volume the economics cannot support.",
    ],
  },
  tiers: {
    h2: "Choose the outcome you need.",
    items: [
      { name: "Ground State", body: "runs the content drumbeat. It is for companies that need a newsletter, a blog post, and eight social posts each month, on cadence, but do not yet need paid search or outbound. It is the compounding layer, not a meetings program." },
      { name: "Excitation", body: "combines content with paid demand. It includes one Google Ads campaign, one landing page, lead follow-up within one business day, and one strategy call each month. It fits a company with a real offer, a conversion path, and money to test specialist search." },
      { name: "Amplification", body: "is the full pipeline program. It adds multiple campaigns, outbound with a meeting number in writing, weekly review, quarterly production, and the compliance stack for regulated buyers. It requires a real ad budget and a named person who owns the calendar." },
      { name: "Quantum Leap", body: "runs the system across brands, with media buying, two outbound seats, production, and an operations audit. If that operating budget is a stretch, start with Amplification." },
    ],
    after: "The [pricing page](/pricing) shows every tier and add-on.",
  },
  commitment: {
    h2: "A year has two clocks.",
    body: [
      "Every tier is a 12-month term. Google's own guidance says search improvements can take four months to a year, and [Google Search Central explains why changes need time to be processed](https://developers.google.com/search/docs/appearance/site-names). A lead from month two can also take many months to close in healthcare, biotech, medtech, and long-cycle business-to-business sales.",
      "The first 90 days are a defined ramp with deliverables in writing. Leading indicators arrive every 30 days. Pipeline and revenue are reviewed at months six and 12, tied to the client's actual sales cycle. That is a fairer test than judging a long-cycle program before a deal could close.",
      "If a term ends early, the unbilled balance of the included $15,000 build is due, prorated to months served. Nothing else. Code and domain stay with you.",
    ],
  },
  start: {
    h2: "Start with the spec.",
    body: "We publish pricing because a prospect should be able to see the scope before a call. [Start a tier](/pricing) with card or bank debit, no call required. Or [book a pipeline call](/contact) first if you'd rather talk through the fit. Every tier is a 12-month term. Every price is on the page.",
  },
};
