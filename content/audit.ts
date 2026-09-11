// The Pipeline Ownership Audit. Ten questions, weighted score, one of four tier recommendations.
// Weights: questions 1, 2, 5, 6, and 10 count double. Question 9 is not scored; it shapes the diagnosis.
// No hyphens or dashes in any string.

export type Option = { label: string; points: number; note: string };
export type Question = { id: string; text: string; weight: 1 | 2; options: Option[] };

export const auditMeta = {
  path: "/audit",
  title: "The Pipeline Ownership Audit | ISOVERTIC",
  description: "Ten questions, about six minutes. Score who owns the meeting number, get a package recommendation and a written diagnosis. Nobody calls unless you ask.",
  eyebrow: "The Pipeline Ownership Audit",
  h1: "Who owns the number?",
  lead: [
    "Isovertic is the growth agency for healthcare, biotech, medical devices, and life sciences. A commercial system should produce one simple answer for the person signing the checks: who owns the number of qualified meetings this month? If the website team owns visits, the ad vendor owns clicks, and sales owns the missed follow-up, you do not have one answer. You have four reports and a familiar problem.",
    "The Pipeline Ownership Audit is a six-minute self-assessment for CEOs, presidents, chief operating officers, chief financial officers, VPs of commercial, VPs of marketing, chief medical officers, medical directors, practice administrators, and directors of billing. Answer ten questions. You receive a score, a package recommendation, and a written diagnosis you can keep or ignore. Nobody calls you unless you ask.",
  ],
  completionTime: "6 min",
  whyH2: "Ten questions about the work you already pay for",
  why: [
    "The audit asks how many vendors you have, who owns the number, how many meetings you booked last month, what each one cost, and when you need the next ones. Those questions show whether anyone is accountable for the commercial result.",
    "It also asks about publishing cadence, your written definition of a qualified meeting, regulated buyers (HIPAA, FDA 510(k) and PMA pathways, MLR review), sales-cycle length, and the reason you are looking now. Those details help decide what should be repaired first and what kind of engagement makes sense.",
    "The score is not a grade. A higher score means the ownership gap is wider and the repair may be worth more. A lower score can mean you should start smaller and measure, or that the work is already in good hands.",
  ],
  sections: [
    { h2: "The question behind the score", body: [
      "Your chief executive officer should be able to ask a direct question: how many qualified meetings did we receive last month, what did they cost, and what happened after our team followed up?",
      "If the answer requires four calendars, three vendors, and a week of archaeology, the commercial work is not connected. The issue may be the site, the follow-up, the advertising, or simply unclear responsibility. The audit is built to separate those possibilities.",
      "You will not get a vague recommendation to improve visibility. You will get a practical diagnosis of the gap and the next reasonable step.",
    ] },
    { h2: "What a useful result can say", body: [
      "Sometimes the issue is the website. A buyer arrives but cannot find proof, pricing, or a clear next step in language a chief scientific officer, principal investigator, or director of billing recognizes. The first repair is Build, included in every package at $15,000 across the year.",
      "Sometimes the site is ready but nobody is publishing enough useful answers for the people already looking. The right start is Ground State at $2,500 per month: one published article, one newsletter to your list, eight social posts, and a monthly report.",
      "Sometimes your company needs meetings sooner and has at least $1,000 a month for Google Ads. Excitation at $5,000 per month plus spend adds a managed campaign, a landing page, and follow-up within one business day.",
      "Sometimes the calendar needs direct help. Amplification at $10,000 per month plus spend adds an outbound seat that books qualified meetings with written briefs. If you have capable internal people but no shared operating process, Protocol training may be the better answer at $5,000 for one department or $20,000 for the full team.",
      "Sometimes the answer is Quantum Leap from $25,000 per month plus spend, the multi-brand program for later-stage healthcare, biotech, medical device, and life sciences tools and diagnostics groups running two or more brands.",
      "The audit can also say you do not need us. That result saves you time and preserves our calendar for teams we can help. Everyone survives.",
    ] },
    { h2: "Regulated buyers get different recommendations", body: [
      "If your buyers are on the healthcare side, the audit factors in HIPAA. Our compliance layer is $750 per month for a form-and-call stack built against HHS OCR guidance on [online tracking technologies](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/hipaa-online-tracking/index.html) and the June 2024 ruling in [AHA v. Becerra](https://www.aha.org/legal-documents/2024-06-20-aha-v-becerra-court-ruling-online-tracking-technologies). The 2023 [FTC action against GoodRx](https://www.ftc.gov/legal-library/browse/cases-proceedings/2023130-goodrx-holdings-inc) is a useful reminder of what happens when a healthcare site leaks protected data through third-party pixels.",
      "If your buyers include a chief medical officer, a medical director, a VP of regulatory, or a principal investigator reviewing claims, the audit checks for MLR review capacity. Our review gate is $500 to $1,200 per month plus setup: a named reviewer, a sign-off log for every asset, and a claim library your team can reuse.",
    ] },
    { h2: "The audit does not make promises it cannot keep", body: [
      "A small advertising budget may produce a qualified meeting a week rather than a flood. That can still be a good outcome if the meeting fits your sale. Sydra Health went from no online presence in mid-June 2026 to about one qualified meeting a week on roughly $1,000 in monthly ad spend and $2,500 in monthly site work. Internal, September 2026.",
      "The system works when your buyers already search in specific language: a gene name, a device model, a regulation, a billing code, a protocol, a clinical question. If nobody is looking for the thing you sell, this work cannot locate them. We will not describe it as a fit merely because a website needs updating.",
      "A 12-month engagement is standard because search visibility can take four months to a year, per [Google Search Central](https://developers.google.com/search/docs/appearance/site-names). We report the work every 30 days and review pipeline and revenue at months six and 12 against your actual sales cycle.",
    ] },
  ] as { h2: string; body: string[]; list?: string[]; after?: string }[],
  move: "If you know which package you want, [start on the pricing page](/pricing) with card or bank debit. No call required.",
  moveNote: "If your commercial work is spread across vendors who cannot explain the meeting number, [book a pipeline call](/contact) and send us your best-converting landing page. In about ten minutes we will tell you what is broken, whether the fix is the site or the follow-up, and what a rebuild would cost, or whether you need one at all. Sometimes the honest answer is you are already fine, and we are happy to say so and hand you back your afternoon.",
  gate: {
    label: "Unlock the written diagnosis",
    body: "Ten answers, ten plain readings, and what each one means for the package above. A work email unlocks it. We do not call unless you book.",
    error: "A work email is required to unlock the diagnosis.",
  },
  related: [
    { label: "How we measure, and when", href: "/resources/engagement-and-measurement-standard" },
    { label: "Why nobody called that lead", href: "/field-notes/pipeline-ownership-gap" },
    { label: "Pricing is published", href: "/pricing" },
  ],
};

export const questions: Question[] = [
  {
    id: "vendors",
    text: "How many marketing and sales vendors do you have under contract today?",
    weight: 2,
    options: [
      { label: "0 or 1", points: 0, note: "One vendor or none. Fragmentation is not your problem yet." },
      { label: "2 or 3", points: 1, note: "Two or three vendors. Ask which one is accountable when the number misses." },
      { label: "4 to 6", points: 2, note: "Four to six vendors, each optimizing its own metric. Nobody is optimizing yours." },
      { label: "7 or more", points: 3, note: "Seven or more vendors. You are paying a coordination tax that a single accountable firm removes." },
    ],
  },
  {
    id: "owner",
    text: "Who is accountable for the pipeline number this quarter?",
    weight: 2,
    options: [
      { label: "The founder", points: 2, note: "The founder owns the number, which means the founder is the bottleneck on prospecting." },
      { label: "Head of Sales", points: 1, note: "Sales owns the number but usually not the marketing that feeds it." },
      { label: "VP Marketing", points: 1, note: "Marketing owns the number but usually not the meeting that turns it into revenue." },
      { label: "No one specifically", points: 3, note: "No one owns the number. This is the single most common reason pipeline stalls." },
    ],
  },
  {
    id: "content",
    text: "What share of your marketing content was published in the last 90 days?",
    weight: 1,
    options: [
      { label: "Under 20 percent", points: 3, note: "Almost nothing new in 90 days. Search and AI engines are reading a stale site." },
      { label: "20 to 50 percent", points: 2, note: "Some publishing, without a drumbeat." },
      { label: "50 to 80 percent", points: 1, note: "A real publishing cadence. The question is whether it converts." },
      { label: "Over 80 percent", points: 0, note: "You publish constantly. Content is not the constraint." },
    ],
  },
  {
    id: "definition",
    text: "Do you have a written definition of what counts as a qualified meeting?",
    weight: 1,
    options: [
      { label: "Yes, shared across sales and marketing", points: 0, note: "A shared definition exists. That is rarer than it sounds." },
      { label: "Yes, but sales disputes it", points: 2, note: "A definition sales disputes is not a definition. Every handoff becomes an argument." },
      { label: "No", points: 3, note: "No written definition, so nobody can be held to a number." },
    ],
  },
  {
    id: "meetings",
    text: "How many net new qualified meetings did you book last month?",
    weight: 2,
    options: [
      { label: "0 to 5", points: 3, note: "Fewer than six meetings a month. The pipeline is not a pipeline yet." },
      { label: "6 to 15", points: 2, note: "Six to fifteen meetings. Enough to learn from, not enough to plan on." },
      { label: "16 to 30", points: 1, note: "A working motion. The question is cost and conversion." },
      { label: "31 or more", points: 0, note: "Volume is not the problem. Quality and cost per meeting are the levers." },
    ],
  },
  {
    id: "cost",
    text: "What is your current cost per qualified meeting?",
    weight: 2,
    options: [
      { label: "Under $500", points: 0, note: "A low cost per meeting. Protect it as you scale." },
      { label: "$500 to $1,500", points: 1, note: "A normal range for B2B. Room to improve through conversion, not spend." },
      { label: "$1,500 to $3,000", points: 2, note: "Expensive meetings. Usually a landing page or a targeting problem, not a budget problem." },
      { label: "We do not measure it", points: 3, note: "Unmeasured. Until spend plus fees is divided by held meetings, every vendor can claim success." },
    ],
  },
  {
    id: "regulated",
    text: "Do you sell into regulated industries, such as healthcare, life sciences, or financial services?",
    weight: 1,
    options: [
      { label: "Yes, primarily", points: 2, note: "Regulated buyers. Compliance posture is part of the pitch, and sales cycles run long." },
      { label: "Yes, partially", points: 1, note: "Some regulated buyers. Segment them and measure them separately." },
      { label: "No", points: 0, note: "Unregulated. Faster cycles, fewer gates." },
    ],
  },
  {
    id: "cycle",
    text: "How long is your typical sales cycle?",
    weight: 1,
    options: [
      { label: "Under 30 days", points: 0, note: "A short cycle. Paid search can prove itself inside the 90 day ramp." },
      { label: "30 to 90 days", points: 1, note: "A quarter long cycle. Revenue is readable at month six." },
      { label: "90 to 180 days", points: 2, note: "A half year cycle. Judge leading indicators at 90 days and revenue at month twelve." },
      { label: "Over 180 days", points: 3, note: "A long cycle. Any vendor promising revenue in a quarter is selling you the calendar." },
    ],
  },
  {
    id: "trigger",
    text: "What made you take this audit?",
    weight: 1,
    options: [
      { label: "We missed the pipeline number", points: 0, note: "A missed number. The fix starts with naming who owns the next one." },
      { label: "A sales hire did not work out", points: 0, note: "A sales hire that did not work. Usually the hire was asked to prospect and close at once." },
      { label: "The vendor stack is failing", points: 0, note: "A failing vendor stack. Consolidation beats adding a sixth vendor." },
      { label: "A new product launch", points: 0, note: "A launch. Build the asset before the campaign." },
      { label: "Something else", points: 0, note: "Another trigger. Tell us on the call if you take one." },
    ],
  },
  {
    id: "when",
    text: "When do you need meetings on the calendar?",
    weight: 2,
    options: [
      { label: "This month", points: 3, note: "Meetings this month. Only outbound plus paid search moves that fast." },
      { label: "Next quarter", points: 2, note: "Next quarter. That is the 90 day ramp, exactly." },
      { label: "In the next six months", points: 1, note: "Six months. Time to build the asset first and let content compound." },
      { label: "Just exploring", points: 0, note: "Exploring. Start with the content drumbeat and measure." },
    ],
  },
];

export type TierKey = "ground-state" | "excitation" | "amplification" | "quantum-leap";

export type TierResult = {
  key: TierKey;
  name: string;
  price: string;
  headline: string;
  body: string;
  href: string;
};

export const tierResults: Record<TierKey, TierResult> = {
  "ground-state": {
    key: "ground-state",
    name: "Ground State",
    price: "$2,500 a month",
    headline: "Start the drumbeat.",
    body: "Your constraint is publishing, not pipeline mechanics. Ground State runs the content system, one newsletter, one search cited post, and eight social posts a month, so the site has something to rank and AI search has something to cite. Move up when you want paid demand on top of it.",
    href: "/pricing",
  },
  excitation: {
    key: "excitation",
    name: "Excitation",
    price: "$5,000 a month plus ad spend",
    headline: "Add paid demand to the content.",
    body: "You have a site and no reliable paid demand. Excitation adds a Google Ads campaign, a landing page we build, and lead follow up inside one business day, on top of the content system. Cost per qualified meeting becomes measurable for the first time.",
    href: "/pricing",
  },
  amplification: {
    key: "amplification",
    name: "Amplification",
    price: "$10,000 a month plus ad spend",
    headline: "You need meetings, and nobody owns the number.",
    body: "Amplification runs the whole pipeline: multiple ad campaigns, an outbound seat with a monthly meeting commitment in writing, and the content that makes the meetings show up warm. One team accountable for the number, with the 90 day ramp and the two clock scorecard in the agreement.",
    href: "/pricing",
  },
  "quantum-leap": {
    key: "quantum-leap",
    name: "Quantum Leap",
    price: "From $25,000 a month plus media",
    headline: "The gap is big enough to own a market.",
    body: "Your score says the vendor stack, the ownership gap, and the meeting need are all at the top of the scale. Quantum Leap runs everything in Amplification per brand, with two outbound seats, TV and streaming in your own accounts, and a quarterly board ready review. It also starts inside the company: we map how a lead moves through it, find where it leaks, automate what does not need a person, and write the SOPs before we turn up the ads and outbound. If you run one brand and want to start smaller, Amplification is the honest starting point.",
    href: "/pricing",
  },
};

export function scoreAnswers(answers: Record<string, number>): { score: number; max: number; tier: TierKey } {
  let score = 0;
  let max = 0;
  for (const q of questions) {
    const idx = answers[q.id];
    const best = Math.max(...q.options.map((o) => o.points));
    max += best * q.weight;
    if (idx === undefined) continue;
    score += q.options[idx].points * q.weight;
  }
  let tier: TierKey = score <= 10 ? "ground-state" : score <= 20 ? "excitation" : score <= 30 ? "amplification" : "quantum-leap";
  const when = answers.when;
  const meetings = answers.meetings;
  // Meetings needed this month or next quarter with fewer than 16 booked last month is an Amplification problem whatever the total says.
  if ((when === 0 || when === 1) && meetings !== undefined && meetings <= 1 && (tier === "ground-state" || tier === "excitation")) tier = "amplification";
  // Exploring with almost no publishing is a Ground State problem whatever the total says.
  if (when === 3 && answers.content === 0 && tier !== "ground-state" && score <= 20) tier = "ground-state";
  return { score, max, tier };
}
