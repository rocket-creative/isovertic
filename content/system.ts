export const aiRuns = ["Scheduling", "Deployment", "Data collection", "Research", "Reporting"] as const;
export const humansDo = ["Create", "Design", "Review", "Test", "Engage"] as const;

export const aiHuman = {
  eyebrow: "AI and human",
  h2: "AI for automation. Humans for creation.",
  lead: "We use AI where it saves your money and never where it costs your trust. The split is simple and it is the same on every tier.",
  aiLabel: "AI runs",
  aiNote: "Faster process, lower cost, and a tier price that starts at $2,500 instead of $8,500.",
  humanLabel: "Humans do",
  humanNote: "Only a human understands another human, and your buyer is one.",
  close: "You pay for judgment, not for hours spent scheduling posts. Every word a buyer reads, every ad a buyer clicks, and every call a buyer takes was made by a person on your account. The machine moved it into place.",
};

export const whyBuyers = {
  eyebrow: "Why buyers buy",
  h2: "85 percent future. 15 percent past.",
  body: "Most of a buying decision is about the future: what will my life look like after I buy this. The rest is about the past: track record and performance. We write in that ratio. Every page answers why, then how, then what, and carries the four things a buyer needs before they say yes: facts, trust, something worth reading, and a human behind it.",
};

export const educateGridCell = "Protocol, $3,500 client add on";

export const systemNote =
  "Pick a tier and we run the steps in it. Baseline runs step two. Catalyst runs one through three. Kinetic runs everything but TV. Critical Mass runs all of it, per brand. Step six is Protocol: we teach your team the system and hand over the runbooks in your name. The pricing page shows the grid.";

export const closeNote = "Then the only step left is yours. Close.";

// Hero trust strip. Four facts a buyer can verify on the site, separated by a middle dot.
export const trustStrip = [
  { label: "Written meeting volume commitment", href: "/resources/meeting-quality-standard" },
  { label: "Published pricing", href: "/pricing" },
  { label: "HIPAA aware, BAA ready", href: "/compliance/hipaa-posture" },
  { label: "90 day ramp", href: "/how-it-works" },
];

export const heroAudit = { label: "Take the Pipeline Ownership Audit", href: "/audit" };

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
      body: "You have a web guy, an ads guy, and a sales hire who quit, and every one of them hit the number they were given. Nobody owned the meeting. We run all six steps inside one boundary, with one number at the end and the same senior team on every tier.",
      cta: { label: "See how the system works", href: "/how-it-works" },
    },
    {
      key: "cfo",
      tab: "CFO or finance lead",
      question: "Is $10,000 a month worth it against hiring in house?",
      body: "We publish the cost per meeting method, the tier economics, and a model that puts a fully loaded hire beside every tier over 24 months, with your salary, load, and deal value in it. You see the math before the call, and you see the month we agree to be judged on revenue.",
      cta: { label: "Run the agency versus in house model", href: "/resources/agency-vs-inhouse" },
    },
    {
      key: "cro",
      tab: "Head of Sales or CRO",
      question: "Will these meetings actually close?",
      body: "We define what counts as a meeting in writing before the program starts, verify each one against the criteria, and report meeting to opportunity conversion once an engagement has the data. Meetings that no show or fail the criteria do not count. The commitment is in the agreement.",
      cta: { label: "Read the meeting quality standard", href: "/resources/meeting-quality-standard" },
    },
  ],
};

export const commitmentStandard = { label: "What results to expect, and when", href: "/resources/engagement-and-measurement-standard" };
