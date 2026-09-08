// The two decision guides under /resources: the CFO guide (agency versus in house) and the CRO guide
// (the meeting quality standard). All copy for both pages lives here. No hyphens or dashes in any string.

import type { FAQ } from "./types";

export const cfoGuide = {
  path: "/resources/agency-vs-inhouse",
  title: "Agency vs In House Marketing: The CFO Model | ISOVERTIC",
  description: "The fully loaded cost of an in house marketing hire against each ISOVERTIC tier over 24 months, a break even meeting count, and when each option wins.",
  eyebrow: "CFO decision guide",
  h1: "Agency versus in house. The model, with your numbers in it.",
  lead: "The question every CFO asks is whether $10,000 a month is worth it against hiring. The honest answer depends on four numbers you already have: the salary you would pay, your benefits load, the tools the hire would need, and how long a hire takes to produce. Put them in below and read the result before the call.",
  datePublished: "2026-09-07",
  dateModified: "2026-09-07",
  options: {
    h2: "The three real options.",
    items: [
      { name: "In house", body: "One marketing hire, sometimes two. Full control, institutional memory, and a person in the room. Also a 90 day ramp before output, a single skill set doing six jobs, and the risk that the person leaves at month fourteen with the system in their head." },
      { name: "Agency", body: "A firm that runs the steps for a monthly fee. Faster start, a senior team across every discipline, and a written number to hold it to. Also less control, and, with most agencies, no accountability past the report." },
      { name: "Hybrid", body: "One in house owner who approves work inside 48 hours, with a firm running the production. This is how most ISOVERTIC engagements actually run. The in house person owns the relationship and the number; the firm owns the output." },
    ],
  },
  calculator: {
    h2: "The fully loaded cost model.",
    intro: "Defaults are placeholders, not benchmarks. Change every field to your own numbers. Ad spend is excluded on both sides because you pay it either way.",
    fields: {
      salary: "Base salary for the hire",
      load: "Benefits and payroll load, percent of base",
      tools: "Tools and software the hire needs, per month",
      ramp: "Months before the hire produces anything",
      deal: "Average deal value",
      close: "Close rate on a qualified meeting, percent",
    },
    outputs: {
      inHouse24: "In house, 24 months, fully loaded",
      perMonth: "Per productive month",
      breakEven: "Qualified meetings a month needed to pay for it",
    },
    note: "The break even count divides the monthly cost by deal value times close rate. It is the number of held, qualified meetings a month that makes the program pay for itself at your close rate, before any compounding from content or brand.",
  },
  breakEven: {
    h2: "Break even against the tiers.",
    body: "Each ISOVERTIC tier over 24 months on the 12 month term rate, beside the in house figure from your inputs. The term includes the $15,000 website, so the tier column is the whole cost of the marketing function, not a fee on top of one.",
  },
  whoWins: {
    h2: "When each option wins.",
    items: [
      { name: "In house wins when", body: "you can hire a proven operator who has already run every one of the six steps, you have a manager who can direct them, and you can wait two quarters for output. That person is rare and expensive, and if you can get them, hire them." },
      { name: "Agency wins when", body: "you need meetings inside a quarter, the buyer has to be educated before they take a meeting, or nobody on staff can judge whether the marketing is working. A firm with a written number and a two clock scorecard removes the judgment problem." },
      { name: "Hybrid wins when", body: "you already have one marketer. Keep them, make them the owner, and put a senior team behind them. The Protocol training day exists to hand that person the runbooks so the system becomes theirs." },
    ],
  },
  checklist: {
    h2: "The decision checklist.",
    items: [
      "Write down the number the function has to produce: qualified meetings a month, or pipeline a quarter.",
      "Name who will own that number on your side, whichever option you pick.",
      "Price the in house option fully loaded over 24 months, including the ramp months with no output.",
      "Ask every agency for its meeting definition in writing and the month it agrees to be judged on revenue.",
      "Match the review window to your sales cycle. A four month cycle can be judged at month six; an eighteen month cycle cannot.",
      "Decide what happens at exit: who owns the accounts, the content, the sequences, and the runbooks.",
    ],
  },
  faqs: [
    { q: "Why exclude ad spend from both sides?", a: "Because you pay it whether a person or a firm manages it. Including it makes the agency look more expensive without changing the decision." },
    { q: "Does the $180,000 default mean that is what a VP Marketing costs?", a: "No. It is a placeholder so the form is not empty. Put in the offer you would actually make. The model only means something with your numbers." },
    { q: "What if the hire is cheaper than Amplification?", a: "Then compare what each produces in the same 24 months, not the price. A $90,000 generalist cannot run outbound, paid search, content, and a website rebuild at once. Price the steps you would leave undone." },
    { q: "Can we start with an agency and bring it in house later?", a: "Yes, and the agreement is written for it. Everything we build lives in your accounts, and Protocol is the training day that hands your team the runbooks." },
  ] as FAQ[],
  related: [
    { label: "Engagement and measurement standard", href: "/resources/engagement-and-measurement-standard" },
    { label: "The meeting quality standard", href: "/resources/meeting-quality-standard" },
    { label: "Field notes", href: "/field-notes" },
    { label: "Pricing is published", href: "/pricing" },
  ],
  defaults: { salary: 180000, load: 30, tools: 2000, ramp: 3, deal: 25000, close: 20 },
};

export const croGuide = {
  path: "/resources/meeting-quality-standard",
  title: "What Counts as a Qualified Meeting | ISOVERTIC",
  description: "What counts as a held, qualified meeting, how we verify it, what happens when one fails, and how meeting to opportunity conversion gets reported.",
  eyebrow: "CRO decision guide",
  h1: "What counts as a meeting, and what happens when one does not.",
  lead: "Every appointment setting vendor reports meetings booked. Almost none define the word. This is the definition written into every Amplification and Quantum Leap agreement, the process that verifies it, and the rule for what happens when a meeting fails it.",
  datePublished: "2026-09-07",
  dateModified: "2026-09-07",
  definition: {
    h2: "What counts as a meeting.",
    statement: "A qualified meeting is a held conversation with a person who matches criteria agreed before the program starts: role, company type, and a stated need, confirmed in advance, and delivered with a brief on who they are and why they said yes.",
    criteria: [
      { name: "Held", body: "The prospect showed up and the conversation happened. A booking that no shows is not a meeting. Every booked meeting gets a confirmation sequence because no show rates above 30 percent are common when nobody runs one." },
      { name: "Right person", body: "Role and seniority match the criteria in the agreement, set against your actual buying committee, not a title list from a database." },
      { name: "Right company", body: "Company type, size, and segment match. For regulated verticals the criteria include the compliance posture the buyer needs from you." },
      { name: "Stated need", body: "The prospect said why they took the meeting, in their own words, and that reason is in the brief you get before the call." },
    ],
  },
  verification: {
    h2: "How we verify it.",
    steps: [
      { n: "01", name: "Criteria in writing", body: "Role, company type, and need are written into the agreement in week one of the ramp, beside the monthly number." },
      { n: "02", name: "Confirmation and brief", body: "Every booked meeting gets a confirmation sequence. You receive a brief before the call: who they are, why they said yes, what they care about." },
      { n: "03", name: "Held or not", body: "Meetings are logged as held only after the conversation happens. Your calendar is the record." },
      { n: "04", name: "Acceptance", body: "After the call you accept the meeting or dispute it against the criteria. Call recordings, where you record, and the brief are the evidence on both sides." },
    ],
  },
  failure: {
    h2: "What happens when a meeting fails the standard.",
    body: "It does not count. No shows and meetings that fail criteria are not counted toward the monthly number, and the number is what we owe. We do not argue a bad meeting into the total, and we do not charge per meeting, so there is no incentive to.",
    note: "Amplification and above carry the monthly meeting commitment in writing during the 90 day ramp, set against your market size, offer, and deal value.",
  },
  conversion: {
    h2: "Meeting to opportunity conversion.",
    body: "We report meetings held and pipeline created, not dials or opens, and we report meeting to opportunity conversion by tier once an engagement passes month eight, the same rule the case studies follow. Benchmarks by industry appear here as they clear that bar. Until then, ask us for the current figures on a call; we will show the work.",
  },
  faqs: [
    { q: "Who decides whether a meeting was qualified?", a: "You do, against the written criteria. If we disagree, the brief and the recording settle it. In practice disputes are rare because the criteria are specific." },
    { q: "What if the prospect reschedules?", a: "A rescheduled meeting that is later held counts when it is held. A meeting that reschedules and never happens does not count." },
    { q: "Do you charge per meeting?", a: "No. The tier fee is flat and the meeting number is a commitment inside it. Per meeting pricing rewards volume over fit, which is how vendors end up booking meetings that fail this standard." },
    { q: "How is this different from an appointment setting company?", a: "Appointment setters book meetings into whatever brand you have. We build the site, run the content and the ads, and then book the meetings into a system designed to convert them, so the prospect who said yes still says yes after looking you up." },
  ] as FAQ[],
  related: [
    { label: "Engagement and measurement standard", href: "/resources/engagement-and-measurement-standard" },
    { label: "Appointment setting", href: "/outbound-appointment-setting" },
    { label: "Appointment setter books meetings that no show", href: "/problems/appointment-setter-books-meetings-that-no-show" },
    { label: "Pricing is published", href: "/pricing" },
  ],
};

export const resourcesIndex = {
  path: "/resources",
  title: "Resources for Founders, CFOs, and CROs | ISOVERTIC",
  description: "The standards ISOVERTIC publishes: how long marketing takes to work, what counts as a meeting, agency versus in house, and compliance posture.",
  eyebrow: "Resources",
  h1: "The standards we publish, before the pitch.",
  lead: "Written for the people on the buying committee who are not the founder. The CFO who has to approve the fee. The CRO who has to accept the meetings. The compliance officer who has to sign the BAA. And the founder who wants a diagnosis before a first call.",
  startHere: {
    eyebrow: "Start here",
    title: "The Pipeline Ownership Audit",
    body: "Ten questions. Six minutes. A score, a tier recommendation, and a written diagnosis. Bring it to your team before you bring us to a call. If the audit tells you you are already fine, we are the ones who wrote the questions that said so, and we would rather you know that than pay us for something you do not need.",
    cta: { label: "Take the audit", href: "/audit" },
  },
  committee: {
    h2: "For the buying committee.",
    items: [
      {
        role: "For the CFO.",
        title: "The agency-versus-in-house model.",
        body: "The fully loaded 24-month cost of a marketing hire against each Isovertic tier, and the break-even meeting count at your deal value. Bring your salary bands, load percentage, and deal value; the model does the rest. This is the resource we most often send before a first call, because CFOs would rather see the math than the pitch.",
        cta: { label: "Run the agency-versus-in-house model", href: "/resources/agency-vs-inhouse" },
      },
      {
        role: "For the CRO.",
        title: "What counts as a meeting.",
        body: "The definition of a qualified meeting in every Isovertic agreement, the verification process, and what happens when a meeting fails the standard. If the CRO does not accept the meetings, the meetings are not real. So the definition ships in writing before the program starts. This document is that definition.",
        cta: { label: "Read the meeting quality standard", href: "/resources/meeting-quality-standard" },
      },
      {
        role: "For the compliance officer.",
        title: "HIPAA posture and sensitive-data governance.",
        body: "Ten operating commitments and a four-step process, printable for the compliance officer. Covers our business-associate status, BAA workflow, form and pixel handling, server-side conversion tracking, PHI exclusions, consent language, and the review path for any content that touches clinical claims. Everything the compliance officer needs to sign the BAA and everything the security officer needs to route the data.",
        cta: { label: "Read the compliance posture", href: "/industries/healthcare" },
      },
      {
        role: "For the founder.",
        title: "How long marketing takes to work, and how we measure it.",
        body: "The one-year minimum, the two-clock scorecard, the published thresholds by channel, and the sales-cycle data behind the rule. If you have been asked to defend a 12-month engagement to a board that wants revenue at 90 days, this is the document to send them. It carries the sources.",
        cta: { label: "Read the measurement standard", href: "/resources/engagement-and-measurement-standard" },
      },
    ],
  },
  fieldNote: {
    h2: "The argument, in one field note.",
    body: "If you want the whole thesis in one read, start here: [The pipeline-ownership gap](/field-notes/pipeline-ownership-gap), our long-form argument for why the current agency model cannot own the pipeline and what has to change. It cites every claim, names every source, and ends where every Isovertic engagement begins: with a specific offer to look at your best-converting landing page and tell you what is firing.",
  },
  move: "If you have made it this far and want to see whether this fits, send us your best-converting landing page URL. In about ten minutes we will tell you what is firing, whether any of it is a lawsuit, and whether you are already fine. Sometimes the honest answer is that you are fine, and we are happy to say so and hand you back your afternoon.",
};
