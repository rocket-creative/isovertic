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
  "Pick a tier and we run the steps in it. Ground State runs step two. Excitation runs one through three. Amplification runs everything but TV. Quantum Leap runs all of it, per brand. Step six, Protocol, is an add-on: we teach your team the system and hand over the runbooks in your name. The pricing page shows the grid.";

export const closeNote = "The last step is yours: close.";

// Hero trust strip. Four facts a buyer can verify on the site, separated by a middle dot.
export const trustStrip = [
  { label: "Meeting quality standard", href: "/resources/meeting-quality-standard" },
  { label: "Published pricing", href: "/pricing" },
  { label: "HIPAA aware, BAA ready", href: "/compliance/hipaa-posture" },
  { label: "12-month term", href: "/system" },
];

export const heroAudit = { label: "Take the Pipeline Ownership Audit", href: "/audit" };

// Brand tagline. Hero eyebrow and footer, one source.
export const tagline = "The growth agency for healthcare, pharma, biotech, medical devices, and life sciences.";

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
      body: "You have a web vendor, an ads vendor, and a sales hire who quit, and every one of them hit the number they were given. Nobody owned the meeting. We run all five steps inside one boundary, with one number at the end and the same senior team on every package.",
      cta: { label: "See how the system works", href: "/system" },
    },
    {
      key: "cfo",
      tab: "CFO or finance lead",
      question: "Is $10,000 a month worth it against hiring in house?",
      body: "We publish the cost-per-meeting method, the tier economics, and a model that puts a fully loaded hire beside every tier over 24 months, with your salary, benefits, overhead, and deal value in it. You see the math before the call, and we agree up front on the month when revenue becomes the measure.",
      cta: { label: "Run the agency versus in-house model", href: "/resources/agency-vs-inhouse" },
    },
    {
      key: "cro",
      tab: "Head of Sales or CRO",
      question: "Will these meetings actually close?",
      body: "Two answers. First, we define what counts as a meeting in writing before the program starts, verify each one against the criteria, and report meeting-to-opportunity conversion once an engagement has the data. Meetings that no-show or fail the criteria do not count. Second, the meetings close because they come from a buyer who searched for exactly what you sell, in the vocabulary they use professionally. That is a warmer opener than a cold list. The definition is on the meeting quality standard page.",
      cta: { label: "Read the meeting quality standard", href: "/resources/meeting-quality-standard" },
    },
  ],
};

export const commitmentStandard = { label: "What results to expect, and when", href: "/resources/engagement-and-measurement-standard" };

// Homepage copy. Rewritten 2026-09-10 from Site Rewrite v3.
export const home = {
  h1: "The Growth Agency for Healthcare, Pharma, Biotech, Medical Devices, and Life Sciences",
  sub: "Isovertic is the growth agency for healthcare, pharma, biotech, medical devices, and life sciences. We build the website, run the advertising, publish the content, and book the meetings. One senior team owns every step, and we report a single number: the cost of each qualified meeting we put on your calendar. The job is to take the buyer already searching for what you sell and hand that person to your sales team. Your website does that first part. The five other steps carry the work farther, move it faster, or teach it to your own staff. Founders, CEOs, presidents, and vice presidents hire us when their marketing has to hold up for a scientific, clinical, or compliance reader. A chief scientific officer, a chief medical officer, a medical director, a principal investigator, a practice administrator, or a compliance officer will read it closely, and looking good on a screen is not enough.",
  who: {
    h2: "Who we work with",
    intro: "We serve five kinds of companies:",
    items: [
      { name: "Healthcare.", body: "Practice groups, hospitals, health systems, revenue-cycle companies, dental and vet and urgent-care groups, telehealth, and digital health." },
      { name: "Pharma.", body: "Commercial-stage drug makers, specialty and generic manufacturers, and the brand and medical affairs teams whose material has to clear medical, legal, and regulatory review before it publishes." },
      { name: "Biotech.", body: "Therapeutics companies pre-clinical through commercial, research services, translational programs, and platform companies with a scientific buyer." },
      { name: "Medical devices.", body: "510(k) and PMA companies making implants, diagnostics, surgical instruments, capital equipment, in vitro diagnostics, and wearables." },
      { name: "Life sciences tools and diagnostics.", body: "Reagents, antibodies, kits, instruments, mouse models, cell lines, laboratory automation, and the diagnostics companies that sell into hospitals and reference labs." },
    ],
    after: "If your buyer is a chief scientific officer, chief medical officer, medical director, principal investigator, practice administrator, director of billing, VP of regulatory, or VP of commercial, we know how to earn their meeting.",
  },
  what: {
    h2: "What we actually do",
    lead: "We build the website that gets found by the buyer already searching for what you sell, and we spend advertising only on those people. Then we add the five steps that carry that work further.",
    body: [
      "Your website is not a brochure. It is your best salesperson, working alone at 3 a.m., when a buyer has a real question and starts looking for an answer. If your site can answer that question in language the buyer recognizes, it hands your team a qualified meeting.",
      "The five steps are publishing, advertising, media, outbound, and training. Publishing puts articles, a newsletter, and social posts behind the site on a real cadence. Advertising runs Google Ads against the searches that mean a buyer is looking right now. Media adds streaming television and radio when name recognition helps the sale and the math supports it. Outbound puts qualified meetings on your calendar, each with a written brief for the salesperson taking the call. Training hands your own team the runbooks when they would rather run the work themselves. One team is responsible for all of it.",
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
      "Both figures are internal operating results from two accounts, measured in our own reporting. They are not audited, not a controlled study, and not a sample large enough to predict your outcome. Your category, your budget, your offer, and the length of your sales cycle all change the result. What these two accounts show is the mechanism we sell: when the website can carry the sales argument and one team owns the number at the end, the meetings come from buyers who were already looking.",
    ],
  },
  tiers: {
    h2: "Four ways to work with us",
    intro: "Every price is published. Every package is a 12-month engagement. Every one includes a $15,000 website rebuild and hosting, spread across the year. You can start with card or bank debit without a call.",
    items: [
      {
        name: "Ground State, $2,500 per month",
        for: "For a company that needs to show up consistently before it adds advertising or outbound calls and emails. Each month you get:",
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
        for: "For a company with settled pricing, someone on staff who answers inbound inquiries, and $1,000 to $5,000 a month available for Google Ads. Everything in Ground State, plus:",
        list: [
          "One Google Ads campaign, built and managed",
          "One landing page for the campaign, refreshed as needed",
          "Automated lead follow-up within 30 seconds",
          "An additional 8 social posts a month, for 16 in total",
          "A 60-minute monthly strategy call with the account lead",
        ],
      },
      {
        name: "Amplification, $10,000 per month plus advertising spend",
        for: "For a company with a defined ideal client, at least $5,000 a month for advertising, and a designated person who owns the calendar. Everything in Excitation, plus:",
        list: [
          "Higher-volume publishing, including a YouTube channel",
          "One dedicated person on our team who calls and emails your prospects and books qualified meetings, each with a written brief and verified against the meeting quality standard",
          "Weekly account review",
          "The option to add the HIPAA or MLR compliance stack",
        ],
      },
      {
        name: "Quantum Leap, from $25,000 per month plus advertising spend",
        for: "For later-stage healthcare, pharma, biotech, medical device, and life sciences companies. Everything in Amplification on one brand, plus a second dedicated person calling and emailing your prospects, creative produced in house, streaming television and radio buying, and a quarterly review of how a lead moves through your company. It also covers the work that puts you in front of the market: your social posts written and published, conference and panel pitches submitted on your behalf, press releases written and pitched to the trade press, and a managed YouTube channel that answers buyer questions before the sale, walks customers through the product after it, and trains your own team inside the company. Advertising is billed as a percentage of your spend.",
        list: [] as string[],
      },
    ],
    after: "See every package, add-on, and included deliverable on the [pricing page](/pricing).",
  },
  system: {
    eyebrow: "One team. The whole pipeline.",
    h2: "What one team actually owns",
    intro: "Most growth agencies hand you a web vendor, an advertising vendor, a writer, and a monthly report from each one. Each can describe activity. None is responsible for a qualified meeting on your calendar. Isovertic runs five connected steps. The sixth, training your team to run the work themselves, is an add-on. The package sets how deep we go.",
    steps: [
      { name: "Build", body: "gives your website the pages, proof, pricing, and next step your buyers need. It is the base layer. Every package includes it." },
      { name: "Rank", body: "puts a steady publishing rhythm behind the site: articles, a newsletter that goes to your list, and social posts your team can stand behind." },
      { name: "Run", body: "manages Google Ads around the searches that signal a buyer is looking now. We report qualified meetings and cost per meeting, not a report full of traffic charts." },
      { name: "Buy", body: "adds streaming television, broadcast, or radio when name recognition helps the sale and the math supports it." },
      { name: "Book", body: "calls and emails the people your sales team needs to meet, then puts the meeting on your calendar with a short written summary of who they are and what they want, so your salesperson is not walking in cold. The people making those calls know your product and the people who buy it. They are the same team that built your website, not a call center reading a script." },
      { name: "Educate", body: "hands your team the runbooks and training when they would rather run the work themselves." },
    ],
  },
  regulated: {
    h2: "Built for regulated companies",
    intro: "The work has to survive review, not merely look good in a browser.",
    items: [
      { name: "HIPAA form-and-call stack, $750 per month.", body: "Intake forms that do not leak, phone tracking that does not violate protected health information rules, and a data flow you can defend in an audit. Available on any package." },
      { name: "MLR review gate, $500 to $1,200 per month plus setup.", body: "For medical, legal, and regulatory review. A named reviewer, a sign-off log for each asset, and a claim library your team can reuse. Standard for biotech, medical device, and pharma accounts." },
      { name: "Business associate agreements and SOC 2 vendor review, priced per request.", body: "We sign a BAA before any protected health information reaches a form, a call recording, or an analytics tool. For a SOC 2 review we complete your security questionnaire, hand your auditor our subprocessor list and a map of where your data sits, and work inside the controls your program already requires. If your compliance team needs something else, ask and we will quote it." },
    ],
  },
  commitment: {
    h2: "The limits we state before you sign",
    body: [
      "Search is the fastest way in when your buyers already type specific language: a device model, a regulation, a protocol, a billing code, a gene, or a clinical question. When that search volume does not exist yet, it does not mean you have no buyers. It means we go find them. We build the list of the people who should own what you sell, reach them with calls and emails, on LinkedIn, in the trade press they read, and on television when the math supports it, and keep publishing so your name is familiar before the first conversation. Creating demand costs more per meeting than catching it and takes longer to show. We will tell you which of the two you are buying before you pay.",
      "A qualified meeting a week on a small advertising budget is a trickle, not a flood. It can still be a good result. We will not promise a flood to get a signature.",
      "A year is the shortest window in which pipeline and revenue can move on a long healthcare or business-to-business sale. Google's own guidance says changes to search visibility can take four months to a year, per [Google Search Central](https://developers.google.com/search/docs/appearance/site-names). Healthcare sales average 125 days to 24 months. We report leading indicators every 30 days and review pipeline and revenue at months six and 12 against your actual sales cycle.",
    ],
  },
  start: {
    h2: "Start where you are",
    known: {
      label: "If you are ready to start,",
      body: "[sign up on the pricing page](/pricing). Pick the package, pick how the year is billed, and pay by card or bank debit. Next is a ten minute intake form, and your first content calendar lands inside five business days. No discovery call, no proposal, no contract sitting in someone's inbox for a week. A 15 minute call is there if you want one, after you sign up.",
    },
    talk: {
      label: "If you would rather talk it through,",
      body: "[book a pipeline call](/contact) and send us the best-converting landing page you have. In about ten minutes we will tell you what is working, what is not, and whether the fix is the site, the offer, or the follow-up. Sometimes the honest answer is you are already fine, and we are happy to say so and hand you back your afternoon.",
    },
  },
};
