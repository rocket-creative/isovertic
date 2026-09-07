// The Pipeline Ownership Audit. Ten questions, weighted score, one of four tier recommendations.
// Weights: questions 1, 2, 5, 6, and 10 count double. Question 9 is not scored; it shapes the diagnosis.
// No hyphens or dashes in any string.

export type Option = { label: string; points: number; note: string };
export type Question = { id: string; text: string; weight: 1 | 2; options: Option[] };

export const auditMeta = {
  path: "/audit",
  title: "The Pipeline Ownership Audit | ISOVERTIC",
  description: "Ten questions. Score your pipeline ownership, get a tier recommendation and a written diagnosis. No sales call required; the report is yours.",
  eyebrow: "The Pipeline Ownership Audit",
  h1: "Who owns your number?",
  lead: "Ten questions, about six minutes. You get a score, a tier recommendation, and a written diagnosis you can keep or ignore. Nobody calls you unless you ask.",
  completionTime: "6 min",
  whyH2: "Why these ten questions.",
  why: [
    "Five of them count double: how many vendors you pay, who owns the number, how many meetings you booked last month, what each one cost, and when you need the next ones. Those five predict whether a pipeline exists. The other five, publishing cadence, a written meeting definition, regulated buyers, cycle length, and the trigger that brought you here, decide which tier fits and when revenue can honestly be judged.",
    "The score is not a grade. A high score means the ownership gap is large and the fix is worth more. A low score means start small and measure.",
  ],
  gate: {
    label: "Unlock the written diagnosis",
    body: "Ten answers, ten plain readings, and what each one means for the tier above. A work email unlocks it. We do not call unless you book.",
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

export type TierKey = "baseline" | "catalyst" | "kinetic" | "critical-mass";

export type TierResult = {
  key: TierKey;
  name: string;
  price: string;
  headline: string;
  body: string;
  href: string;
};

export const tierResults: Record<TierKey, TierResult> = {
  baseline: {
    key: "baseline",
    name: "Baseline",
    price: "$2,500 a month",
    headline: "Start the drumbeat.",
    body: "Your constraint is publishing, not pipeline mechanics. Baseline runs the content system, one newsletter, one search cited post, and eight social posts a month, so the site has something to rank and AI search has something to cite. Move up when you want paid demand on top of it.",
    href: "/pricing",
  },
  catalyst: {
    key: "catalyst",
    name: "Catalyst",
    price: "$5,000 a month plus ad spend",
    headline: "Add paid demand to the content.",
    body: "You have a site and no reliable paid demand. Catalyst adds a Google Ads campaign, a landing page we build, and lead follow up inside one business day, on top of the content system. Cost per qualified meeting becomes measurable for the first time.",
    href: "/pricing",
  },
  kinetic: {
    key: "kinetic",
    name: "Kinetic",
    price: "$10,000 a month plus ad spend",
    headline: "You need meetings, and nobody owns the number.",
    body: "Kinetic runs the whole pipeline: multiple ad campaigns, an outbound seat with a monthly meeting commitment in writing, and the content that makes the meetings show up warm. One firm accountable for the number, with the 90 day ramp and the two clock scorecard in the agreement.",
    href: "/pricing",
  },
  "critical-mass": {
    key: "critical-mass",
    name: "Critical Mass",
    price: "From $25,000 a month plus media",
    headline: "The gap is big enough to own a market.",
    body: "Your score says the vendor stack, the ownership gap, and the meeting need are all at the top of the scale. Critical Mass runs everything in Kinetic per brand, with two outbound seats, TV and streaming in your own accounts, and a quarterly board ready review. If you run one brand and want to start smaller, Kinetic is the honest starting point.",
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
  let tier: TierKey = score <= 10 ? "baseline" : score <= 20 ? "catalyst" : score <= 30 ? "kinetic" : "critical-mass";
  const when = answers.when;
  const meetings = answers.meetings;
  // Meetings needed this month or next quarter with fewer than 16 booked last month is a Kinetic problem whatever the total says.
  if ((when === 0 || when === 1) && meetings !== undefined && meetings <= 1 && (tier === "baseline" || tier === "catalyst")) tier = "kinetic";
  // Exploring with almost no publishing is a Baseline problem whatever the total says.
  if (when === 3 && answers.content === 0 && tier !== "baseline" && score <= 20) tier = "baseline";
  return { score, max, tier };
}
