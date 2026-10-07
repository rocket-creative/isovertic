// The two decision guides under /resources: the CFO guide (agency versus in house) and the CRO guide
// (the meeting quality standard). All copy for both pages lives here. No hyphens or dashes in any string.

import type { FAQ } from "./types";

export const cfoGuide = {
  path: "/resources/agency-vs-inhouse",
  title: "Agency vs In House Marketing: The CFO Model | ISOVERTIC",
  description: "Compare the fully loaded cost of an in house marketing hire, an agency, or a hybrid model using your salary, benefits, tools, ramp time, deal value, and close rate.",
  eyebrow: "CFO decision guide",
  h1: "Agency versus in house. The model, with your numbers in it.",
  lead: "The question every CFO asks is whether $10,000 a month is worth it against hiring. The honest answer depends on the numbers you already have: the salary you would pay, your benefits and payroll load, the tools the hire would need, the time to hire and onboard them, and the revenue a qualified meeting is worth to your business. Put them in below. The model is a planning tool. Change every field to match your situation before the call.",
  datePublished: "2026-09-07",
  dateModified: "2026-10-07",
  options: {
    h2: "The three real options.",
    items: [
      { name: "In house", body: "One marketing hire, sometimes two. You get control, institutional memory, and a person in the room every day. You also need enough scope and support for that person to succeed. One hire can own the work, and rarely brings deep capacity across website, content, search, paid media, reporting, and sales follow up at the same time. Hiring, onboarding, and building momentum take time. So does replacing knowledge if the person leaves before the system is documented." },
      { name: "Agency", body: "A firm runs the work for a monthly fee. It can begin discovery and production sooner than a full hiring process, bring specialists into the work as needed, and give you a written operating plan and scorecard. You give up some day to day control. Results also depend on access, approvals, product clarity, sales follow up, and the firm's actual scope. Ask what roles are assigned, what work is included, and how success will be measured before signing." },
      { name: "Hybrid", body: "One in house owner approves work quickly, with a firm running the production. This is how most ISOVERTIC engagements actually run. The in house person owns the commercial context, the relationship, and the agreed outcome. The firm owns the agreed output, reporting, and operating rhythm. It works best when the internal owner can make decisions, bring in subject matter experts, and give feedback from sales." },
    ],
  },
  calculator: {
    h2: "The fully loaded cost model.",
    intro: "Defaults are placeholders, not benchmarks. Change every field to your own numbers. Ad spend is excluded on both sides when you would spend the same amount either way. If the channel mix or media budget would differ, include that difference separately.",
    fields: {
      salary: "Base salary for the hire",
      load: "Benefits and payroll load, percent of base",
      tools: "Tools and software the hire needs, per month",
      ramp: "Months from start date to useful output",
      deal: "Average deal value",
      close: "Close rate on a sales accepted qualified meeting, percent",
    },
    outputs: {
      inHouse24: "In house, 24 months, fully loaded",
      perMonth: "Per productive month",
      breakEven: "Qualified meetings a month needed to cover cost",
    },
    note: "The break even count divides monthly cost by deal value times close rate. It estimates the number of held, qualified meetings needed each month for the program to cover its cost at your close rate. For a more conservative view, use expected gross profit. If your gross margin is 60 percent, a meeting worth $5,000 in expected revenue is worth $3,000 in expected gross profit. The model does not replace attribution, sales acceptance, or pipeline review.",
  },
  breakEven: {
    h2: "Break even against the tiers.",
    body: "Each ISOVERTIC tier over 24 months at the 12 month term rate, beside the in house figure from your inputs. The term includes the $15,000 website, so the tier column is the whole operating scope in the agreement. Tier figures exclude ad spend and media. Quantum Leap starts at $25,000 and is scoped by brand. The comparison assumes equivalent work. Confirm the channels, deliverables, seniority, implementation work, tool costs, and internal management time included in each option before you use it as a decision.",
  },
  whoWins: {
    h2: "When each option wins.",
    items: [
      { name: "In house wins when", body: "you can hire a proven operator for the work you need, give them enough budget and support, and allow time to build the system. If that person can set strategy, direct specialists, and work closely with sales, hiring may be the right long term investment." },
      { name: "Agency wins when", body: "you need specialist capacity sooner than a full hiring cycle allows, your buyers need education before a sales conversation, or you need a clearer measurement and operating rhythm. Agree in writing on the meeting definition, the inputs each side owns, the reporting cadence, and the point at which performance will be reviewed." },
      { name: "Hybrid wins when", body: "you already have one marketer. Keep them as the owner and put a senior team behind them. The Protocol training day exists to transfer the written instructions, the decision process, and the working system to that person." },
    ],
  },
  checklist: {
    h2: "The decision checklist.",
    items: [
      "Write down what the function has to produce: sales accepted qualified meetings a month, qualified pipeline a quarter, or both.",
      "Name who owns that outcome on your side, whichever option you pick.",
      "Price the in house option over 24 months, including salary, benefits, payroll load, tools, recruiting, management time, and the ramp to useful output.",
      "Ask every agency for its meeting definition in writing, the roles assigned, the deliverables included, and the month it agrees to be judged against the agreed measures.",
      "Match the review window to your sales cycle. A four month cycle may show early commercial evidence by month six. An eighteen month cycle needs leading indicators and a cohort review before revenue is a fair judgment.",
      "Decide what happens at exit: who owns the accounts, content, tracking, sequences, data, and written instructions.",
    ],
  },
  faqs: [
    { q: "Why exclude ad spend from both sides?", a: "Because media spend is often paid either way. Including the same spend on both sides does not change the decision. If one option requires a different media budget, different channels, or outside production costs, include those differences. The model compares the operating cost of running marketing." },
    { q: "Does the $180,000 default mean that is what a VP Marketing costs?", a: "No. It is a placeholder, not a market benchmark. Use the salary you would need to pay for the role, in your location, with the experience and scope you require. Then add your actual benefits and payroll load, monthly tools, recruiting cost, and the time it will take to hire and build momentum." },
    { q: "What if the hire is cheaper than Amplification?", a: "Then compare the work, not only the monthly total. Ask whether the hire can produce and manage the same scope: positioning, website work, search, content, paid media, reporting, sales feedback, and the specialist work needed around them. A lower cost hire may be the right choice when the required scope is focused and the company can support them well." },
    { q: "Can we start with an agency and bring it in house later?", a: "Yes. That is one reason to document the system from the beginning. Before you start, agree on ownership of the website, accounts, analytics, content, campaign history, sequences, reporting, and written instructions. Protocol is designed to transfer the operating system to the internal owner when that is the right next step." },
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
  lead: "A report can count a meeting that never happened. We agree what counts as a qualified meeting, we check that it was held, and we report what it cost. We do not promise how many.",
  datePublished: "2026-09-07",
  dateModified: "2026-09-11",
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
      { n: "01", name: "Criteria in writing", body: "Role, company type, and need are written into the agreement in week one of the ramp." },
      { n: "02", name: "Confirmation and brief", body: "Every booked meeting gets a confirmation sequence. You receive a brief before the call: who they are, why they said yes, what they care about." },
      { n: "03", name: "Held or not", body: "Meetings are logged as held only after the conversation happens. Your calendar is the record." },
      { n: "04", name: "Acceptance", body: "After the call you accept the meeting or dispute it against the criteria. Call recordings, where you record, and the brief are the evidence on both sides." },
    ],
  },
  failure: {
    h2: "What happens when a meeting fails the standard.",
    body: "It does not count. No shows and meetings that fail criteria are not counted. We do not argue a bad meeting into the total, and we do not charge per meeting, so there is no incentive to.",
    note: "We define what counts, we verify each meeting, and we report cost per qualified meeting.",
  },
  conversion: {
    h2: "Meeting to opportunity conversion.",
    body: "We report meetings held and pipeline created, not dials or opens, and we report meeting to opportunity conversion by tier once an engagement passes month eight, the same rule the case studies follow. Benchmarks by industry appear here as they clear that bar. Until then, ask us for the current figures on a call; we will show the work.",
  },
  faqs: [
    { q: "Who decides whether a meeting was qualified?", a: "You do, against the written criteria. If we disagree, the brief and the recording settle it. In practice disputes are rare because the criteria are specific." },
    { q: "What if the prospect reschedules?", a: "A rescheduled meeting that is later held counts when it is held. A meeting that reschedules and never happens does not count." },
    { q: "Do you charge per meeting?", a: "No. The tier fee is flat. We define what counts, we verify each meeting, and we report cost per qualified meeting. Per meeting pricing rewards volume over fit, which is how vendors end up booking meetings that fail this standard." },
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
