// /system page copy. Verbatim from the system rewrite. Do not invent, paraphrase, or restyle.

export const method = {
  eyebrow: "How it works",
  h1: "Six steps you buy. Seven layers that make step one actually work.",
  lead: "Every ISOVERTIC engagement uses the same system. The tier sets which steps we operate and how deep. Nothing is custom scoped in a proposal you cannot compare, so a Baseline client and a Critical Mass client can read the same page and know what they bought.",
  heroCta: { label: "Book a pipeline call", href: "/contact" },
  closeNote: "Then the only step left is yours. Close.",
  moat: {
    h2: "Why step 01 is the moat.",
    body: [
      "Brand, creative, positioning, mental availability, sales enablement, and copy are commoditized now. A competent freelancer with Claude or ChatGPT can produce most of them. The one part of the marketing program AI and generalists still cannot ship well is the long-tail website that gets found by the specialist who is already searching for what you sell.",
      "Not because writing pages is hard. AI can draft pages. Because the work underneath is a systems-engineering job, and most agencies split it across four people (a writer, an SEO specialist, a developer, an account manager) who each own one piece. Nobody owns the whole stack, so the seams leak. Our step 01 is a seven-layer method one team runs together.",
    ],
  },
  layers: {
    h2: "The seven layers underneath step 01 BUILD.",
    items: [
      {
        n: "01",
        title: "Keyword architecture",
        body: "Before a single page gets drafted, we decide which specialist terms are worth building for. Which terms have real search volume, real commercial intent, and low enough competition to earn a page. Which do not. This is a spreadsheet-and-judgment job that requires understanding the category well enough to spot which terms will convert a specialist into a form fill. AI can list keywords. AI cannot tell you which ones are worth writing for.",
      },
      {
        n: "02",
        title: "Site architecture",
        body: "When you publish hundreds of pages on similar topics, Google has to understand which page is the authoritative one for each specific query. Build it wrong and pages cannibalize each other. Both try to rank for the same term. Both lose. Preventing this requires a taxonomy: parent pages, child pages, canonical tags, breadcrumb schema, internal linking patterns that reinforce hierarchy. This is the same skill as designing a database schema.",
      },
      {
        n: "03",
        title: "Page templates a specialist will trust",
        body: "A scientist searching for a gene model, or a billing director searching for a CPT code, has a bullshit detector that AI content triggers instantly. Wrong vocabulary. Wrong depth. No primary sources. They close the tab. Building a page template that survives specialist scrutiny requires knowing what specialists check first: is this the right protein family, is the mouse strain background specified, is the reference cited. This is not writing skill. It is a design decision about what has to be on the page before the specialist will read the rest.",
      },
      {
        n: "04",
        title: "Tracking that proves attribution",
        body: "The whole point is proving which page produced which lead. That requires server-side conversion tracking so ad blockers and iOS do not lose the data, UTM structure that survives hundreds of pages without collisions, CRM field mapping so HubSpot knows which page a lead came from, and call tracking with dynamic number insertion per source. Most agencies install GA4 and call it done. Then, eight months later, they cannot answer \"which page produced this deal,\" and the renewal conversation collapses because there is no attribution story.",
      },
      {
        n: "05",
        title: "Compliance stack",
        body: "For healthcare clients, every page has to be reviewed against HIPAA's marketing rules. Every form has to route through a BAA-covered handler. Every pixel has to be excluded from pages with PHI. Every conversion event has to be server-side. Get any layer wrong and the client is one letter away from a very bad quarter. Regulated categories add SOX, FDA, AdvaMed, and state privacy laws. Every catalog page has to survive that filter.",
      },
      {
        n: "06",
        title: "Algorithm-drift monitoring",
        body: "Google runs thousands of algorithm updates a year. A site that ranks in month three can drop in month five because of a core update, then recover in month seven if the technical foundation is right. Someone has to watch this, diagnose what shifted, and adjust, usually by tightening internal linking, refreshing content depth, or rebuilding a page template. This is the reason the engagement is 12 months, not three. Ship the site and walk away and the ranking walks away with you.",
      },
      {
        n: "07",
        title: "Catalog expansion",
        body: "The best-performing pages are almost never the ones you expected. Search Console tells you which pages get impressions for queries you did not plan for. That is a signal to build the next page. The system compounds because each month's data informs the next month's builds. A generalist ships the initial set and stops. We keep building based on what the data is telling us.",
      },
    ],
  },
  stepsDetail: {
    h2: "What happens in each of the six steps.",
    items: [
      {
        n: "01",
        title: "Build",
        body: "The site is the asset every other step points at. We build on Next.js, server rendered, with schema on every page so Google and the AI answer layer can cite it. The seven layers above run underneath the build. Catalyst and Kinetic get landing pages inside the ramp. The full website build is included at every tier and starts inside the first 30 days of the term.",
      },
      {
        n: "02",
        title: "Rank",
        body: "Content that answers the questions your buyers type and the questions the AI answer layer answers for them. A newsletter, a blog post, and social every month on Baseline, doubled on Catalyst, and a full content system with a YouTube channel on Kinetic. For biotech and healthcare clients, the MLR add-on puts a named medical reviewer between draft and publish.",
      },
      {
        n: "03",
        title: "Run",
        body: "Google Ads managed to a cost per meeting, not a cost per click. One campaign on Catalyst, multiple campaigns with A/B testing on Kinetic, and the search-term report read weekly by a person, not a dashboard.",
      },
      {
        n: "04",
        title: "Buy",
        body: "Streaming and broadcast TV bought in your own accounts, with an exposed versus control measurement plan so you can see whether it moved the number. Critical Mass only, with a $25,000 monthly media minimum.",
      },
      {
        n: "05",
        title: "Book",
        body: "Outbound sequences, cold calls, and a qualified meeting on your calendar with the objection intelligence fed back into the site and the ads. One seat on Kinetic with a meeting number in writing. Two seats on Critical Mass. Catalyst can add a seat for $4,500 a month.",
      },
      {
        n: "06",
        title: "Educate",
        body: "Your team, taught the system at your office, with the runbooks rewritten in your brand and licensed to you for internal use. One or two days on-site. Bought on its own as Protocol at $5,000 or $20,000, or added to any tier for $3,500. This is the step for companies that want the system and their own hands on it. Then you close: we book the meeting, brief you, and step out.",
      },
    ],
  },
  limits: {
    h2: "Two honest limits.",
    intro: "We say these out loud because they are true, and because they make the rest of the claim credible.",
    items: [
      {
        title: "This works when buyers already search with specific terms.",
        body: "If nobody searches for your category yet, this method will not find them, and we will say so before you pay us. Category creation is a different playbook and a different shop.",
      },
      {
        title: "A lead a week on a small budget is a trickle, not a flood.",
        body: "It is the right result for the spend. We do not promise a flood. What we promise is that every lead came from a specialist who searched for exactly what you sell, and that we can prove which page produced it.",
      },
    ],
  },
  scope: {
    h2: "The pieces we do not sell (and why).",
    body: "We are not the brand shop, the creative shop, the positioning shop, or the sales-enablement shop. Those pieces of the marketing program still matter, and you still need them. A good in-house marketer or a freelancer can produce them, and AI can accelerate most of that work now. Clients bring those or hire them elsewhere. We build the capture engine and the tracking that proves it worked.",
  },
  commitment: {
    h2: "12 months. Two clocks. Revenue judged on the right one.",
    intro: "Every engagement is a 12-month default with a 6-month floor. The first 90 days are the ramp:",
    ramp: [
      { title: "Weeks 1 to 2.", body: "Onboarding, accounts, the MLR or HIPAA gate if your content needs one, and the first content calendar." },
      { title: "Weeks 3 to 6.", body: "First publishing cadence live, landing pages and campaigns built, outbound lists and sequences approved." },
      { title: "Weeks 7 to 12.", body: "Campaigns optimized weekly, the first meetings booked on Kinetic and above, and a written review at day 90 against the deliverables in your agreement." },
    ],
    after: "After the ramp, the year continues on two clocks. Leading indicators (rankings, impressions, cost per lead, learning-phase status) arrive every 30 days. Lagging indicators (pipeline, revenue, CAC payback) are reviewed at months six and twelve, tied to your actual sales cycle. Healthcare, biotech, and medtech sales cycles run 125 days to 24 months, so a lead we generate in month 2 may not close until month 12 or later. Judging pipeline on a 90-day clock measures marketing that has not had time to convert.",
  },
  tiers: {
    h2: "Which tier runs which steps.",
    intro: "Pick a tier and we run the steps in it. Baseline runs step two. Catalyst runs one through three. Kinetic runs everything but TV. Critical Mass runs all of it, per brand. Step six is Protocol, bought on its own or added to any tier.",
    items: [
      { name: "Baseline.", body: "$2,500 per month on a 12-month term. The content drumbeat, running without meetings." },
      { name: "Catalyst.", body: "$5,000 per month on a 12-month term, plus ad spend. Content plus paid demand, with a human on the account." },
      { name: "Kinetic.", body: "$10,000 per month on a 12-month term, plus ad spend. The full pipeline. The flagship engagement." },
      { name: "Critical Mass.", body: "From $25,000 per month on a 12-month term, plus media. For companies running more than one brand, or ready to own a market." },
    ],
    gridNote: "The full grid, add-ons, and the term table are on [the pricing page](/pricing).",
  },
  faqs: [
    {
      q: "Can we move up or down between tiers?",
      a: "Up at any time. Down at the end of the ramp or at any quarter end after it, inside the same 12-month term.",
    },
    {
      q: "Who is actually on my account?",
      a: "The same senior team on every tier, running the codified method George built and Kristen operationalized. There is no junior tier of staff behind the lower price. The lower price buys fewer steps, not a different team. George is the source and the escalation path on every account.",
    },
    {
      q: "What do we need from you to start?",
      a: "Access to your domain, ad accounts, and CRM, a point of contact who can approve in 48 hours, and, if your content makes clinical claims, a named reviewer with an MD or PhD.",
    },
  ],
} as const;
