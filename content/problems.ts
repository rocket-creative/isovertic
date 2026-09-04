import type { Page } from "./types";

// One page per problem a buyer types into a search bar or says on a first call.
// The h1 is the problem in the buyer's own words. The lead names the cause. The sections give the mechanism and the fix.
// searchPhrases are the long tail variants the page is written to answer; they render on the page under "How people search this."
// Rules: no dashes, every claim carries a number, an outcome, or a mechanism. Run npm run lint:copy after edits.

export type ProblemAudience = "owners" | "life-science" | "healthcare" | "startup";

export type Problem = Page & {
  audience: ProblemAudience;
  searchPhrases: string[];
  dateModified: string;
};

export const problemAudiences: { key: ProblemAudience; label: string; intro: string }[] = [
  { key: "owners", label: "Owners and founders", intro: "The problems every growing company hits between $1 million and $20 million, whatever it sells." },
  { key: "life-science", label: "Life science and CRO", intro: "The problems a lab, a CRO, or a tools company hits when the buyer is a scientist." },
  { key: "healthcare", label: "Healthcare practices and brands", intro: "The problems a practice or a healthcare brand hits when it has to grow under HIPAA and medical review." },
  { key: "startup", label: "Startups", intro: "The problems a seed or Series A company hits before it can afford a sales team." },
];

const pricing = { label: "Pricing", href: "/pricing" };
const howItWorks = { label: "How the system works", href: "/how-it-works" };
const contact = { label: "Book a pipeline call", href: "/contact" };

export const problems: Problem[] = [
  // OWNERS AND FOUNDERS
  {
    slug: "in-house-marketer-not-generating-leads",
    audience: "owners",
    dateModified: "2026-09-04",
    title: "In House Marketer Not Generating Leads? What to Fix First",
    metaDescription: "You hired a marketer and the phone did not ring. The cause is usually the job description, not the person. What one marketer can and cannot produce, and the three options.",
    eyebrow: "Problem · Owners",
    h1: "We have an in house marketer and they are not getting us any leads.",
    lead: "Sometimes it is a relative, sometimes a first hire out of school, sometimes a good generalist. The pattern is the same. Six months in, the social feed is active, the newsletter goes out, and the lead count has not moved. Before you blame the person, check the job you gave them. One marketer cannot build a website, run paid search, write technical content, and prospect. Nobody can.",
    callout: {
      label: "Where this lives",
      body: "Most owners in this spot keep the marketer and add Catalyst at $5,000 a month: one Google Ads campaign, a landing page, and content run by a senior team, with the in house person owning social and the newsletter. Kinetic at $10,000 adds an outbound seat with a meeting number in writing. Pricing is published.",
    },
    searchPhrases: ["in house marketer not generating leads", "hired a marketing person no leads", "our marketing coordinator is not producing results", "should I fire my marketing manager or get an agency", "one person marketing team not working"],
    sections: [
      { h2: "What one marketer can actually produce", body: [
        "A single in house marketer can run two channels well: usually social plus email, or content plus events. A pipeline needs six functions running at once: the site, search content, paid search, media, outbound, and the handoff to sales. When one person owns all six, four of them are dormant and the two that run are the two that produce the fewest meetings. Social posts get likes. Newsletters get opens. Neither is a lead.",
        "The tell is the report. If the monthly report is about impressions, followers, and open rates, the person is doing the job they were given. If you want a report about meetings, you have to buy the parts of the system that produce meetings.",
      ]},
      { h2: "Why it is not a people problem", body: [
        "A marketing manager loads to roughly $140,000 to $175,000 a year with tax and benefits. A junior coordinator loads to $60,000 to $80,000. At either price you get one set of hands and one skill set. Google Ads, technical SEO, server rendered web builds, and outbound calling are four different crafts. Replacing the person with a different single person changes the two channels that run. It does not fill the other four.",
        "The other tell is the website. If the marketer inherited a five year old brochure site, every dollar they spend lands on a page that does not convert. We see conversion rates under 1 percent on those sites and 3 to 5 percent on pages built for the query. The marketer cannot fix that alone.",
      ]},
      { h2: "The three options, priced", body: [
        "Option one: keep the person, buy the missing steps. Catalyst at $5,000 a month runs one Google Ads campaign, builds the landing page, and produces the search content, while your marketer keeps social and the list. The same team that will eventually run outbound builds the content, so nothing is thrown away later.",
        "Option two: keep the person, teach them the system. The Protocol is one day at your office at $5,000, and your marketer leaves with the eight runbooks we use, rewritten in your brand: content production, page build, Google Ads weekly review, outbound, lead handoff, reporting, and the two compliance runbooks. Good for a capable person who was never given a process.",
        "Option three: replace the function, not the person. Kinetic at $10,000 a month runs the whole pipeline including an outbound seat with a monthly meeting number in writing. The in house marketer becomes the point of contact who approves in 48 hours, which is the only job on your side the system needs.",
      ]},
      { h2: "How to decide in one meeting", body: [
        "Ask three questions. How many qualified meetings did marketing produce last quarter, and how do we know? Which of the six steps is running today? What would the person do with a senior team behind them? If the answer to the first is a shrug, the problem was never the person. It was that nobody wrote the number down. Writing it down is the first hour of every engagement we run.",
      ]},
    ],
    faqs: [
      { q: "Do we have to let our marketer go to work with you?", a: "No. Most Catalyst and Kinetic clients keep an in house person as the approver and the owner of social and email. The system runs better with someone on your side who knows the company." },
      { q: "What if the marketer is family?", a: "Then give them a system instead of an impossible job. The Protocol at $5,000 is the cheapest way to turn a willing person into an operator, and it keeps the relationship intact." },
      { q: "How fast will we see leads?", a: "Paid search produces in weeks four through eight of the 90 day ramp. Organic content compounds from month three. Outbound on Kinetic carries a meeting number for the ramp in writing." },
    ],
    related: [pricing, { label: "Protocol team training", href: "/protocol" }, { label: "Hire or outsource, the math", href: "/field-notes/hire-salesperson-or-outsource" }],
  },
  {
    slug: "marketing-agency-not-producing-leads",
    audience: "owners",
    dateModified: "2026-09-04",
    title: "Hired a Marketing Agency and Got No Leads? Read This",
    metaDescription: "Six months, a monthly retainer, a report full of impressions, no meetings. Why agencies get paid for activity, the three questions that expose it, and what to buy instead.",
    eyebrow: "Problem · Owners",
    h1: "We hired a marketing agency and we are not getting leads.",
    lead: "The retainer bills on the first of the month. The report arrives on the fifth. It shows impressions up, followers up, and a traffic chart with an arrow. Nowhere on it is the number you hired them for. That is not an accident of reporting. The agency model is built to be paid for activity, and activity is what you are getting.",
    callout: {
      label: "Where this lives",
      body: "Every ISOVERTIC tier states its deliverables for the 90 day ramp in writing, and Kinetic at $10,000 a month adds a monthly meeting number to the agreement. If the number is not met, the engagement is month to month and you leave. Pricing is published.",
    },
    searchPhrases: ["marketing agency not producing leads", "paying an agency and getting no results", "how long should I give a marketing agency", "agency reports traffic but no sales", "how to tell if my marketing agency is bad"],
    sections: [
      { h2: "Why the report never shows meetings", body: [
        "An agency is usually scoped to a channel: SEO, or paid, or social. Inside that channel it can be excellent and still produce nothing you can bill, because a lead has to cross three more steps to become revenue: a page that converts, a follow up within a business day, and a sales conversation. If the agency does not own those steps, it reports on the ones it owns. Impressions, clicks, rankings. All true. None of it a meeting.",
        "More than 70 percent of marketing leads are never contacted by sales at all. When the agency produces 40 leads and nobody on your side calls 30 of them, the agency shows 40 and you feel zero. Both are right, and neither owns the seam.",
      ]},
      { h2: "Three questions that end the debate", body: [
        "What number did you commit to in writing for day 90? If the agreement has deliverables but no outcome, you bought activity. How many of last month's leads turned into a held conversation, and who counted? If nobody can answer, nobody is tracking the seam. Who exactly works on our account, and have they sold to our buyer before? If the answer is a rotating pod of juniors, you are training them with your budget.",
        "Ask all three in one email. A good agency answers in a day. A bad one schedules a call.",
      ]},
      { h2: "What to buy instead", body: [
        "Buy the whole pipeline or buy nothing. One team that builds the page, writes the content, runs the ads, and books the meeting cannot hide behind a seam because it owns every seam. Our Catalyst tier at $5,000 a month runs content, one Google Ads campaign, a landing page, and lead follow up within one business day. Kinetic at $10,000 adds the outbound seat and a monthly meeting number in the agreement.",
        "The 90 day ramp has deliverables in writing and a written review at day 90. After that the engagement is month to month. If we are not producing the number we wrote down, you should not be paying us, and the structure makes leaving a decision rather than a negotiation.",
      ]},
      { h2: "How long to give an agency", body: [
        "Ninety days for paid search to reach a stable cost per lead. Six months for organic content to show compounding growth. If at day 90 there is no number and no plan with a number in it, the next 90 days will look the same. The clients in our case studies crossed 5x to 7x their prior monthly lead average in month five, against the six months before we started, and we publish the method so you can check it.",
      ]},
    ],
    faqs: [
      { q: "Should we fire the agency before hiring you?", a: "Not always. If they run one channel well, keep them on that channel and we run the rest. If they cannot answer the three questions above, the decision makes itself." },
      { q: "What if the agency says results take a year?", a: "Organic compounding does take months. A written 90 day number does not. Any firm can state landing pages live, campaigns at a cost per lead, and meetings booked by day 90. Ask for it." },
      { q: "Will you commit to a number?", a: "Yes. Kinetic and above carry a monthly meeting number in writing, set in the ramp against your market size, offer, and deal value." },
    ],
    related: [{ label: "Growth partner vs marketing agency", href: "/field-notes/growth-partner-vs-marketing-agency" }, pricing, howItWorks],
  },
  {
    slug: "website-gets-traffic-but-no-leads",
    audience: "owners",
    dateModified: "2026-09-04",
    title: "Website Gets Traffic but No Leads: The Five Causes",
    metaDescription: "Two thousand visits a month and four form fills. The five reasons a site converts under 1 percent, how to find yours in ten minutes, and what a page built for the query converts at.",
    eyebrow: "Problem · Owners",
    h1: "Our website gets traffic but nobody fills out the form.",
    lead: "Traffic without meetings is a hobby. A site that converts under 1 percent of visitors is not a marketing problem, it is a page problem, and the page is usually failing for one of five reasons you can diagnose yourself before lunch.",
    callout: {
      label: "Where this lives",
      body: "Landing pages built for the query ship inside the 90 day ramp on Catalyst and Kinetic. A full rebuild on our stack is included with a 12 month term or $15,000 up front month to month. You own the code. Pricing is published.",
    },
    searchPhrases: ["website traffic but no leads", "website visitors not converting", "why is my website not generating leads", "low conversion rate B2B website", "traffic up conversions down"],
    sections: [
      { h2: "Cause one: the traffic is the wrong traffic", body: [
        "Open Search Console and read the queries. If the top twenty are informational, how to, what is, definitions, you rank for curiosity, not intent. Curiosity converts at a fraction of a percent. A page that ranks for the commercial query, the service plus the qualifier a buyer types when ready, converts at 3 to 5 percent in our accounts. Fix the pages you rank for before you buy more visitors.",
      ]},
      { h2: "Cause two: the page does not answer the question the visitor arrived with", body: [
        "A researcher searching a model type lands on a homepage about your mission. A patient searching a symptom lands on a locations page. Every click that lands somewhere other than the exact answer costs you the visitor. In one life science engagement, matching the landing page to the search moved form fills 6.5x while clicks moved 3.7x. Leads grew faster than traffic because the traffic finally landed on its answer.",
      ]},
      { h2: "Cause three: the price and the proof are missing", body: [
        "Buyers complete 60 percent or more of the decision before contacting anyone, per BioInformatics research on life scientists, and the pattern holds for founders and practice administrators. If your site hides pricing, shows no numbers, and names no clients, the visitor finishes their research on a competitor's site and fills out that form instead. Publish the price or a range, publish a result with a method, name the people.",
      ]},
      { h2: "Cause four: the form asks too much, too early", body: [
        "Every field subtracts submissions. One client's demo form went to a single email field with a calculator that carried the prospect's own numbers into the request. Demo requests rose 5.8x in eight months. Ask for the email first, everything else second, and put the phone number and a calendar link next to the form for people who will not fill it out at all.",
      ]},
      { h2: "Cause five: nobody answers", body: [
        "This one hides in plain sight. The form works, the notification goes to an inbox nobody reads, and the lead is contacted four days later or never. Test it: fill out your own form on a Friday afternoon and time the response. If it is longer than one business day, you do not have a conversion problem yet. You have a handoff problem, and it costs nothing but discipline to fix.",
      ]},
    ],
    faqs: [
      { q: "Do we need a new website?", a: "Usually you need new pages first: one per commercial query, built to convert. A full rebuild makes sense when the platform cannot render fast, cannot carry schema, or is held by a vendor you cannot leave." },
      { q: "What conversion rate should we expect?", a: "Under 1 percent on a brochure site is common. Pages built for the query and paired with ads run 3 to 5 percent in our accounts, higher when pricing is published." },
      { q: "Can you just fix the pages we have?", a: "On Catalyst and Kinetic we build landing pages inside the ramp on our stack and point your traffic at them. Rebuilding an old platform page by page rarely pays." },
    ],
    related: [{ label: "Web development", href: "/web-development" }, { label: "SEO and content", href: "/seo-content" }, pricing],
  },
  {
    slug: "leads-come-in-but-nobody-follows-up",
    audience: "owners",
    dateModified: "2026-09-04",
    title: "Leads Come In and Nobody Follows Up: Fixing the Seam",
    metaDescription: "More than 70 percent of marketing leads are never contacted by sales. The handoff between marketing and sales is where most pipeline dies. The response standard and sequence that fix it.",
    eyebrow: "Problem · Owners",
    h1: "Leads come in and they sit there. Nobody follows up.",
    lead: "You paid for the ad, the page worked, the form fired, and the lead went to an inbox where it aged. This is the seam between marketing and sales, and it belongs to nobody, which is why more than 70 percent of marketing leads are never contacted by sales at all. It is the cheapest pipeline you will ever buy, because the leads are already paid for.",
    callout: {
      label: "Where this lives",
      body: "On Catalyst and above, every lead is worked within one business day by a person on our team, with a written follow up sequence behind it. The lead handoff runbook is the fifth of the eight runbooks in the Protocol, if your team would rather run it. Pricing is published.",
    },
    searchPhrases: ["leads not being followed up", "sales not following up on marketing leads", "lead response time small business", "what happens to inbound leads", "marketing and sales handoff process"],
    sections: [
      { h2: "Why the seam exists", body: [
        "Marketing is measured on leads produced. Sales is measured on deals closed. The step between them, contacting the lead fast and well, counts for neither, so neither owns it. Add a second vendor and the seam becomes a canyon: the agency shows 40 leads, sales remembers 6, and everyone is telling the truth.",
        "A quote request that waits four days is a quote request answered by a competitor. Inquiries answered within five minutes convert at multiples of inquiries answered the next day, and a typical B2B prospect needs five or more touches before agreeing to a meeting. Most companies deliver one touch, late.",
      ]},
      { h2: "The fix costs discipline before it costs money", body: [
        "Write a response standard: every inbound lead gets a human reply within one business day, and a phone attempt within one hour during business hours. Write the sequence: reply, call, email with the relevant page, call, break up email, over ten business days. Route every form to one queue with an owner and a timestamp. Report on time to first touch weekly. That is the entire runbook and it fits on one page.",
        "In our engagements, fixing the handoff before touching any new channel has produced more held meetings in month one than any campaign, because the leads were already there.",
      ]},
      { h2: "What we do about it on each tier", body: [
        "Catalyst at $5,000 a month includes lead follow up within one business day, worked by our team, with the sequence written to your offer. Kinetic adds the outbound seat, which runs the same sequences on cold prospects and confirms every meeting so it holds. If you would rather own it, the Protocol teaches the lead handoff runbook to your team in a day for $5,000, or $3,500 as a client.",
      ]},
    ],
    faqs: [
      { q: "Can a CRM fix this?", a: "A CRM records the failure with timestamps. The fix is a person with a standard and a sequence. Our CRM build at $4,000 configures HubSpot or Pipedrive to the runbook, and it only helps once the runbook exists." },
      { q: "How do we know how bad it is?", a: "Pull the last 90 days of form submissions and match them to first contact dates. Most companies find a third were never contacted. That third is your first month of new pipeline." },
      { q: "Who follows up, you or us?", a: "On Catalyst and Kinetic, our team makes first contact within a business day and books the meeting. Your closer takes the meeting. We brief you before it." },
    ],
    related: [{ label: "Glossary: the seam", href: "/glossary/the-seam" }, { label: "Why marketing leads never get a call", href: "/answers/why-do-marketing-leads-never-get-a-call" }, { label: "Protocol", href: "/protocol" }],
  },
  {
    slug: "all-our-business-comes-from-referrals",
    audience: "owners",
    dateModified: "2026-09-04",
    title: "All Our Business Comes From Referrals and It Is Slowing",
    metaDescription: "Referrals are a ceiling, not a strategy. What happens when the two people who send you work retire, and how to add one channel you control the volume of without losing the referral flow.",
    eyebrow: "Problem · Owners",
    h1: "Every client we have came from a referral, and referrals are slowing down.",
    lead: "Referral businesses are good businesses. They close at high rates and they cost nothing to acquire. They also have a ceiling set by other people's calendars, and when the two people who send you most of your work retire, move, or get acquired, the ceiling drops to the floor with no warning. Consistency requires at least one channel you control the volume of.",
    callout: {
      label: "Where this lives",
      body: "Baseline at $2,500 a month builds the content and the site that turn a referral into a booked meeting instead of a maybe. Catalyst at $5,000 adds the first channel you control, one Google Ads campaign. Kinetic at $10,000 adds outbound with a meeting number in writing. Pricing is published.",
    },
    searchPhrases: ["business relies too much on referrals", "referrals slowing down what to do", "how to get clients without referrals", "diversify lead sources small business", "referral only business growth"],
    sections: [
      { h2: "The math of a referral ceiling", body: [
        "Count your last 24 new clients and the referral source for each. Most owners find that 60 to 80 percent trace to three or four people. For specialist medical practices, Physicians Practice puts referrals and word of mouth at 80 to 90 percent of new patients. That is not diversification. That is dependence with a friendly face, and a single retirement or hospital acquisition can remove a third of next year's revenue.",
      ]},
      { h2: "Why referrals slow even when the work is good", body: [
        "Referral sources refer whoever they thought of last. If your site has not changed in five years and you publish nothing, you fade from the front of their mind. A monthly newsletter to your own list, one substantive post a month, and social that shows the work keeps you current with the people who already send work, before a single new channel is added. That is the Baseline cadence, and for a referral business it often pays for itself on retained referral volume alone.",
      ]},
      { h2: "Add one channel you control, in order", body: [
        "First, make the referral convert harder: when a referred prospect looks you up, the site should carry pricing or a range, a result with numbers, and the people. Referred prospects still do their homework, and a brochure site loses 20 to 40 percent of them to silence. Second, add search: one Google Ads campaign against the commercial terms your buyers type, which is Catalyst. Third, when you can take more meetings than referrals produce, add outbound: one seat working a list of the 200 accounts you want, with a meeting number in writing, which is Kinetic.",
        "Run all three continuously, especially when you are busy. Busy quarters are when the next slow quarter is built.",
      ]},
    ],
    faqs: [
      { q: "Will outbound annoy our referral network?", a: "Outbound goes to the accounts you want and have never met. Referral sources get the newsletter and the occasional lunch. The two lists do not overlap." },
      { q: "We do not want to look like we are advertising.", a: "Publishing pricing, methods, and results is not advertising. It is what your referred prospects already wish you did. Our clients in regulated fields publish under review gates and still grow." },
      { q: "How fast does a second channel produce?", a: "Paid search reaches a stable cost per lead in weeks four through eight. Outbound meetings begin in the ramp on Kinetic, with the number in writing." },
    ],
    related: [{ label: "Why your pipeline is inconsistent", href: "/field-notes/why-your-pipeline-is-inconsistent" }, { label: "Professional services", href: "/industries/professional-services" }, pricing],
  },
  {
    slug: "founder-is-the-only-salesperson",
    audience: "owners",
    dateModified: "2026-09-04",
    title: "Founder Is the Only Salesperson and Out of Hours",
    metaDescription: "You are the product expert, the closer, and the prospector, and there are no more hours. Which of those jobs to rent, which to keep, and what it costs by stage.",
    eyebrow: "Problem · Owners",
    h1: "I am the only person who can sell this, and I am out of hours.",
    lead: "Revenue depends on you explaining the product, and you are already explaining it 30 hours a week. The instinct is to hire a salesperson. The spreadsheet usually disagrees, because the part of your week worth renting is not the closing. It is the prospecting, the follow up, and the content that answers the question before the call.",
    callout: {
      label: "Where this lives",
      body: "Kinetic at $10,000 a month runs the prospecting, the follow up, and the content, and books qualified meetings on your calendar with a brief. You take the meeting, which is the one job only you can do. Pricing is published.",
    },
    searchPhrases: ["founder led sales not scalable", "founder is the only salesperson", "how to get out of founder led sales", "founder doing all the selling", "should a founder hire a salesperson or outsource prospecting"],
    sections: [
      { h2: "Split the job before you fill it", body: [
        "Selling is four jobs wearing one title. Prospecting: finding and reaching the right accounts. Qualifying: confirming fit and getting a meeting held. Closing: the technical conversation where founder knowledge wins. Following up: the ten touches after the meeting that turn interest into a signature. Founders are irreplaceable at the third and terrible at the first, because prospecting is repetitive and the founder always has something more urgent.",
        "Rent the first, second, and fourth. Keep the third. That split is why our outbound seat books the meeting, briefs you, and steps out.",
      ]},
      { h2: "Why the first sales hire usually fails", body: [
        "A salesperson inherits your demand environment. If the site is thin and nobody has heard of you, the best closer alive sits in an empty room, and SaaStr's writing on first sales hires puts the miss rate near a coin flip. An account executive loads to $120,000 to $180,000 with on target earnings, ramps for three to four months, and often leaves inside two years. Budget the miss: $80,000 to $150,000 for zero meetings, then start over.",
        "For a technical product this is worse. The rep also has to explain a knockout model, a diagnostic, or a billing workflow to a buyer who knows more than they do.",
      ]},
      { h2: "What to buy by stage", body: [
        "Under $1 million: the founder sells, and the money goes to a site and content that carry the technical explanation so each call starts halfway done. That is Baseline at $2,500. $1 million to $10 million: rent the pipeline and keep the close. Kinetic at $10,000 runs content, ads, and one outbound seat with a monthly meeting number in writing, and the founder takes the meetings. Past $10 million with a sales team: hire sales leadership and hand them a documented system rather than a blank page. The Protocol exists for that handoff.",
      ]},
      { h2: "What changes in your week", body: [
        "Prospecting hours go to zero. Meeting prep drops because every meeting arrives with a brief. Calls get shorter because the prospect has read the pricing page and the case study before showing up. Founders on Kinetic typically hold 8 to 15 more qualified conversations a month and spend fewer hours in sales than before, because the hours that remain are the ones that close.",
      ]},
    ],
    faqs: [
      { q: "Who takes the meeting when you book it?", a: "You, or a closer on your side. Our contact form asks this before we quote Kinetic. If the answer is nobody yet, start with content and paid demand until there is." },
      { q: "Can you close for us?", a: "No, on purpose. For a technical sale, founder knowledge closes and prospecting wastes it. We rent you the prospecting." },
      { q: "When should I finally hire?", a: "Around $5 million to $10 million, when the founder cannot take every meeting the system books. Hire an account executive who closes, not an SDR who prospects, and give them the runbooks." },
    ],
    related: [{ label: "Hire or outsource, the math", href: "/field-notes/hire-salesperson-or-outsource" }, { label: "Appointment setting", href: "/outbound-appointment-setting" }, { label: "Who takes the sales meeting", href: "/answers/who-takes-the-sales-meeting" }],
  },
  {
    slug: "sales-hire-did-not-work-out",
    audience: "owners",
    dateModified: "2026-09-04",
    title: "Hired a Salesperson and It Did Not Work Out. Now What",
    metaDescription: "The rep ramped for four months, booked little, and left. Why most first sales hires fail on the pipeline, not the person, and how to rebuild without hiring again.",
    eyebrow: "Problem · Owners",
    h1: "We hired a salesperson. They did not produce, and now they are gone.",
    lead: "The severance is paid and the pipeline is exactly where it was a year ago, minus the $100,000 you spent finding that out. Before hiring again, understand what the rep walked into. In most companies at this stage, the rep failed on the demand environment, not on effort, and the next rep will fail the same way.",
    callout: {
      label: "Where this lives",
      body: "Kinetic at $10,000 a month replaces the prospecting half of the hire and builds the demand environment the next hire will need: the site, the content, the ads, and an outbound seat with a meeting number in writing. Pricing is published.",
    },
    searchPhrases: ["first sales hire failed", "salesperson not producing results", "sales rep quit after six months", "why do first sales hires fail", "rebuild sales pipeline after rep left"],
    sections: [
      { h2: "What the rep walked into", body: [
        "No list, so they built one from LinkedIn searches. No sequences, so they wrote cold emails from scratch that got reply rates under 1 percent. A website that did not confirm anything the email claimed, so the few prospects who looked you up went quiet. No content to send after the call. No pricing on the site, so every conversation started with a price negotiation. The rep spent three months building marketing and one month selling, then left.",
      ]},
      { h2: "The math of hiring again", body: [
        "An SDR loads to $70,000 to $90,000, an account executive to $120,000 to $180,000 with on target earnings. Ramp is three to four months. Average tenure across the industry is under two years. B2B sales hiring carries miss rates near a coin flip, so the honest budget is two hires to get one that works, roughly $150,000 to $300,000 before the first predictable quarter. And the second hire inherits the same empty room unless something changes first.",
      ]},
      { h2: "Build the room before you fill it", body: [
        "Sequence it. First, the site carries pricing, proof, and the technical answer, so a prospect who looks you up finds what the email promised. Second, content that answers the questions your sales calls repeat, so the call starts halfway done. Third, a list built from real data and sequences written against your actual positioning. Fourth, an outbound seat working it with a meeting number in writing. That is Kinetic, and it costs about what the failed hire cost, with a notice period instead of a severance.",
        "When the system books more meetings than you can take, hire again. This time hire a closer, hand them the runbooks, and let them start on day one with a full calendar.",
      ]},
    ],
    faqs: [
      { q: "Is it too soon to hire another rep?", a: "If the pipeline that fed the last rep has not changed, yes. Build the demand environment first, then hire a closer into it." },
      { q: "Can you work with a rep we still have?", a: "Yes. Our seat prospects and books; your rep takes and closes. Most reps prefer that split, and it shows in their tenure." },
      { q: "What does the outbound seat produce?", a: "A monthly number of qualified held meetings, stated in writing during the 90 day ramp against your market size, offer, and deal value. No shows and meetings that fail criteria do not count." },
    ],
    related: [{ label: "Hire or outsource, the math", href: "/field-notes/hire-salesperson-or-outsource" }, { label: "Agency vs in house", href: "/compare/agency-vs-in-house" }, pricing],
  },
  {
    slug: "google-ads-cost-per-lead-going-up",
    audience: "owners",
    dateModified: "2026-09-04",
    title: "Google Ads Cost Per Lead Keeps Going Up: Why and the Fix",
    metaDescription: "Spend is flat, leads are down, cost per lead is up. The four account level causes, the 2026 benchmarks to compare against, and why the fix is on the page, not in the bid.",
    eyebrow: "Problem · Owners",
    h1: "Our Google Ads spend is the same and the leads keep getting more expensive.",
    lead: "The account was fine two years ago. Same budget, same campaigns, and now each lead costs twice what it did. Before you blame Google, read the search term report and the landing page. In most accounts we take over, cost per lead is rising for reasons inside the account, and the fix is on the page, not in the bid.",
    callout: {
      label: "Where this lives",
      body: "Catalyst at $5,000 a month runs one Google Ads campaign to a cost per meeting, with the search term report read weekly by a person and the landing page built by us. Kinetic runs multiple campaigns with A/B testing. Spend stays in your own account. Pricing is published.",
    },
    searchPhrases: ["google ads cost per lead increasing", "google ads leads getting more expensive", "why is my cost per lead going up", "google ads not working anymore small business", "google ads cost per conversion rising 2026"],
    sections: [
      { h2: "Check the benchmark before you panic", body: [
        "WordStream's 2026 benchmark puts the average cost per lead across industries at $66.69, average cost per click at $5.42, and average conversion rate at 8.18 percent, and reports that overall cost per lead fell year over year for the first time in five years. Physicians and surgeons averaged $40.04 per lead, dentists $72.97, attorneys $131.63. If your cost per lead doubled while the market's fell, the cause is in your account.",
      ]},
      { h2: "The four causes inside the account", body: [
        "Search term drift. Broad and phrase match expand over time. Without a negative list maintained weekly, a third of spend ends up on queries you would never bid on by hand. Read the last 30 days of search terms and count the ones that could never become a customer.",
        "The landing page. If the ad points at the homepage, or at a page that does not answer the exact query, conversion rate falls and cost per lead rises with no change in bids. Every ad group should land on a page written for that query.",
        "The wrong conversion. Accounts optimizing toward a phone click, a page view, or a newsletter signup teach the algorithm to find people who do those things. One client's account counted several actions as leads that were not; correcting it to a submitted lead form only let spend optimize against real leads for the first time.",
        "Automation without a reader. Performance Max and broad match work when fed qualified conversion signals and read weekly. Left alone, they spend toward volume, and volume is cheap for a reason.",
      ]},
      { h2: "Measure cost per meeting, not cost per lead", body: [
        "Cost per lead can fall while revenue falls, if the leads are worse. The number to manage is cost per qualified meeting: spend plus fees divided by held conversations with people who match your criteria. Wire conversion tracking to meetings booked, import offline conversions when deals close, and steer budget by that number. A campaign at $120 per lead producing meetings beats one at $40 per lead producing form spam.",
      ]},
    ],
    faqs: [
      { q: "Should we pause the account while we fix it?", a: "Fix the negatives and the conversion definition first; that alone usually cuts waste by 20 to 30 percent inside two weeks. Rebuild landing pages next. Pausing resets learning and rarely helps." },
      { q: "What budget do you need to make this work?", a: "$3,000 a month is the floor for one campaign against commercial intent terms. Below that, the campaign cannot exit learning fast enough to be read weekly." },
      { q: "Do you take a percentage of spend?", a: "No. Fees pay the team and are the same at any spend inside the tier. Spend goes to Google in your own account, which you own." },
    ],
    related: [{ label: "Google Ads", href: "/google-ads" }, { label: "Minimum ad spend", href: "/answers/what-is-the-minimum-ad-spend" }, pricing],
  },
  {
    slug: "cold-email-gets-no-replies",
    audience: "owners",
    dateModified: "2026-09-04",
    title: "Cold Email Gets No Replies: The List, Not the Copy",
    metaDescription: "Reply rates under 1 percent are a list problem 80 percent of the time. What a 4.2 percent average looks like, what the 11 percent teams do differently, and how a technical market changes the rules.",
    eyebrow: "Problem · Owners",
    h1: "We send hundreds of cold emails and nobody replies.",
    lead: "You bought a tool, bought a list, wrote a sequence, and sent 2,000 emails. Nine people replied and four of them said unsubscribe. The instinct is to rewrite the copy. The copy is rarely the problem. The list is, and in a technical market the first sentence is, because the buyer decides in that sentence whether you understand their work.",
    callout: {
      label: "Where this lives",
      body: "Kinetic at $10,000 a month includes one outbound seat: list building from primary data, sequences written by the team that wrote your site, coordinated email, phone, and LinkedIn, and a monthly meeting number in writing. Catalyst can add the seat for $4,500. Pricing is published.",
    },
    searchPhrases: ["cold email no replies", "cold email reply rate too low", "why is nobody responding to my cold emails", "cold outreach not working B2B", "cold email reply rate benchmark 2026"],
    sections: [
      { h2: "What normal looks like", body: [
        "SciLeads' 2026 benchmark of science sales teams puts average cold email open rate at 10.7 percent and average reply rate at 4.2 percent, with wide variation. The teams above 11 percent replies used phone, LinkedIn, and video alongside email far more often than the rest. Only 29 percent of respondents used the phone at all. If you are under 1 percent on email alone, you are not unlucky. You are running one channel into a list that was not built for you.",
      ]},
      { h2: "The list decides it", body: [
        "A purchased list is the same list your competitors bought, filtered by job title, with 20 to 30 percent of contacts stale by the time you send. A built list starts from primary data: public datasets, publications, funding events, registries, technographics. For one healthcare revenue client we built the entire prospect universe from federal public use files before a single email went out. Every contact was a real buyer of the exact thing, and the first sentence could name why.",
        "In a life science market, the buyer of record for most purchases under $50,000 is the lab manager or core director, not the principal investigator. Sequences to PIs referencing nothing get deleted. Sequences to lab managers referencing the lab's last paper get read.",
      ]},
      { h2: "The first sentence and the website", body: [
        "A PI decides whether to reply in the first sentence, and it has to name the model, the assay, or the phenotype correctly. A practice administrator decides on whether you understand referral patterns and payer mix. Generic openers fail with these buyers at any volume. Then the prospect who is interested looks you up. If the site does not confirm what the email claimed, the reply never comes. Our sequences are written by the same team that wrote the site, so the diligence confirms the outreach.",
      ]},
      { h2: "Multichannel, confirmed, measured on held meetings", body: [
        "Email, phone, and LinkedIn in one cadence over two to three weeks, with eighteen documented plays covering triggers from a new executive hire to a funding event. Every booked meeting gets a confirmation sequence, because no show rates above 30 percent are common when nobody runs one. Report on meetings held and pipeline created, not opens. Opens are a vanity metric with a tracking pixel.",
      ]},
    ],
    faqs: [
      { q: "Should we switch tools?", a: "No tool fixes a bad list. Deliverability matters, but the accounts we take over almost always have a list and messaging problem first." },
      { q: "How many emails should one seat send?", a: "Fewer than you think. A serious program reaches a few hundred right accounts deeply across three channels rather than ten thousand badly on one." },
      { q: "Do you use AI SDRs?", a: "Automation runs research, list building, and sequencing. The conversations that qualify and book are run by people, because your buyers can tell." },
    ],
    related: [{ label: "Appointment setting", href: "/outbound-appointment-setting" }, { label: "What reply rate should cold email get", href: "/answers/what-reply-rate-should-cold-email-get" }, { label: "More B2B sales meetings", href: "/field-notes/how-to-get-more-b2b-sales-meetings" }],
  },
  {
    slug: "we-do-not-show-up-on-google",
    audience: "owners",
    dateModified: "2026-09-04",
    title: "We Do Not Show Up on Google for What We Sell",
    metaDescription: "Your competitors rank for the service you are better at. The usual cause is page count, not backlinks. What a 12 page site ranks for, what a 150 page site ranks for, and how to get there.",
    eyebrow: "Problem · Owners",
    h1: "When people search for what we do, our competitors show up and we do not.",
    lead: "You have done this work for fifteen years and a company half your size ranks above you for it. The usual explanation is backlinks or some technical mystery. The usual cause is simpler: they have a page for the query and you have a paragraph. A 12 page site ranks for its brand name. A 150 page site ranks for the category.",
    callout: {
      label: "Where this lives",
      body: "Baseline at $2,500 a month starts the drumbeat: one page a month written to be found and cited. Kinetic runs the full content system. The programmatic page expansion add on ships 50 server rendered entity pages at a time for $2,500 a month. Pricing is published.",
    },
    searchPhrases: ["not showing up on google for my services", "competitors rank higher than us", "why does my business not appear in google search", "how to rank for our services", "how many pages does a website need to rank"],
    sections: [
      { h2: "Count the pages, then count theirs", body: [
        "Search site:yourdomain.com and site:competitor.com. If they have 140 indexed pages and you have 11, you already know why. Every commercial query a buyer types deserves its own page: each service, each application, each model type, each condition, each location. Google ranks pages, not companies, and a company with one page about everything ranks for nothing in particular.",
        "For one life science client, rebuilding the catalog as one server rendered page per product moved average position from 16 to 10 and organic clicks 3.7x in eight months. The site had not earned a single new backlink in that time. It had earned pages.",
      ]},
      { h2: "The three technical reasons a good page still does not rank", body: [
        "It is not in the HTML. Sites that assemble text in the browser with JavaScript are often invisible to crawlers; request your page without JavaScript and read what is left. It has no schema, so Google cannot tell a service page from a blog post. It is slow, and Core Web Vitals sit outside budget on mobile. All three are platform problems, which is why our builds are server rendered with schema on every page and why we migrate from WordPress and Webflow rather than patch them.",
      ]},
      { h2: "What the content has to do", body: [
        "Answer the literal question in the first 40 words. Carry one number or definition a reader can quote. Link to the service page it supports and from the pages that support it. Publish on a cadence, because a site that adds one real page a month for a year has 12 more chances to rank than one that redesigned once and stopped. Commercial pages paired with ads produce in weeks; organic compounding shows from month three and accelerates after month six.",
      ]},
    ],
    faqs: [
      { q: "Do we need backlinks?", a: "They help and we earn them with original data and editorial series rather than buying them. But page count and page quality move first, and most sites in this position have not done that work." },
      { q: "How many pages do we need?", a: "As many as there are questions your buyers ask. One client needed 147 hand built pages plus a 14,000 page catalog. A professional firm might need 40. The number comes from the query list, not from a template." },
      { q: "Can you fix our current site or does it need a rebuild?", a: "If it renders on the server and carries schema, we add pages. If it does not, a rebuild on our stack is included with a 12 month term or $15,000 up front." },
    ],
    related: [{ label: "SEO and content", href: "/seo-content" }, { label: "How many pages to rank", href: "/answers/how-many-pages-does-a-site-need-to-rank" }, { label: "ITL case study", href: "/results/ingenious-targeting-laboratory" }],
  },
  {
    slug: "competitors-show-up-in-chatgpt-and-we-do-not",
    audience: "owners",
    dateModified: "2026-09-04",
    title: "Competitors Show Up in ChatGPT and We Do Not: Why",
    metaDescription: "Ranking on Google does not put you in the AI answer. Only 12 percent of AI cited URLs overlap with Google's top ten. The four page traits that get cited and the third party work that matters more.",
    eyebrow: "Problem · Owners",
    h1: "When someone asks ChatGPT for a company like ours, it names our competitors.",
    lead: "A prospect told you they asked ChatGPT or Perplexity for a recommendation and your name was not in it. Your competitor's was. Ranking well on Google did not help, and it will not: Ahrefs found only 12 percent of URLs cited by AI tools overlap with Google's top ten organic results. Getting cited is a separate discipline, and most of it happens off your site.",
    callout: {
      label: "Where this lives",
      body: "Every page we ship is server rendered with entity schema and a first paragraph that survives being quoted alone. Baseline at $2,500 publishes one page a month built that way. Kinetic runs the full system. Pricing is published.",
    },
    searchPhrases: ["how to get my company mentioned in chatgpt", "competitors appear in ai search we do not", "why does chatgpt not recommend my business", "get cited by perplexity", "ai search visibility for b2b company"],
    sections: [
      { h2: "Why ranking did not carry over", body: [
        "The engines choose differently from Google. Perplexity searches live and cites about 22 sources per answer; ChatGPT leans on stable reference sources and recrawls in cycles. Profound found only 11 percent of domains are cited by both. Google rewards authority across a site; answer engines reward the single page that answers the question completely. A long guide about everything loses to a short page about one thing.",
      ]},
      { h2: "The four traits of pages that get pulled in", body: [
        "On a 147 page life science site we built, the pages that appear in AI answers share four traits. They answer the literal question in the first 40 words. They carry one specific number or definition a model can quote. They are server rendered, so the answer is in the HTML rather than assembled by JavaScript. They carry schema that names the entity the page is about. Pages that opened with a paragraph about the company got skipped.",
      ]},
      { h2: "Most of the work is off your site", body: [
        "Omniscient Digital's study of 23,387 branded citations found 57 percent came from reviews, listicles, and press, and only about 4.5 percent from the brand's own pages. If nobody else on the internet describes your company, the engines have nothing to cite but you, and they weight that lightly. Reviews on Google and the category directories, comparison articles that name you, a founder byline on an industry site, and a Wikipedia grade entity footprint matter as much as your own pages. This is the part most agencies skip because it is slow.",
      ]},
      { h2: "Check yourself in ten minutes", body: [
        "Ask ChatGPT and Perplexity the three questions your buyers ask you most. Note which sites are cited. Open your own page on the topic, view the source, and search for your answer. If it is not in the HTML, you are invisible to the engines that matter most right now. If it is, and you are still not cited, the gap is third party mentions.",
      ]},
    ],
    faqs: [
      { q: "Is there a special file or schema for AI?", a: "Google states no special markup or AI text files are required for its AI features. Entity schema, server rendering, and real answers do the work. We publish llms.txt anyway because it costs nothing." },
      { q: "How long does it take?", a: "Perplexity can pick up a fresh, specific page within days. ChatGPT rewards stability over months. Third party mentions take a quarter to earn and last for years." },
      { q: "Can you get us reviews and mentions?", a: "We build the assets that earn them: original data, editorial series, comparison pages, and outreach to the labs and practices we feature. We do not buy reviews or links." },
    ],
    related: [{ label: "How to get cited by AI search", href: "/field-notes/how-to-get-cited-by-ai-search" }, { label: "What is AEO", href: "/answers/what-is-aeo" }, { label: "SEO and content", href: "/seo-content" }],
  },
  {
    slug: "old-website-and-the-agency-controls-it",
    audience: "owners",
    dateModified: "2026-09-04",
    title: "Old Website, and the Agency That Built It Controls It",
    metaDescription: "The site is six years old, slow on mobile, and every change goes through a vendor who owns the hosting. How to get out, what a rebuild costs, and why you should own the code.",
    eyebrow: "Problem · Owners",
    h1: "Our website is old, slow, and the agency that built it holds the keys.",
    lead: "Every edit is a ticket. The hosting invoice comes from the agency. Nobody on your team has the login, and when you asked for the files, the answer was vague. Meanwhile the site takes four seconds to load on a phone and half your ad budget lands on it. This is a solvable problem, and the first step is legal, not technical.",
    callout: {
      label: "Where this lives",
      body: "A full rebuild on our stack, Next.js, server rendered, schema on every page, is included with a 12 month term on any tier, or $15,000 up front month to month. The repository, the domain, and the hosting accounts are yours from day one. Pricing is published.",
    },
    searchPhrases: ["agency owns my website", "how to get my website files from web designer", "web design company holding website hostage", "old website slow need rebuild cost", "who owns the website code agency or client"],
    sections: [
      { h2: "Get the two things you actually need", body: [
        "The domain and the content. If the domain is registered in your name, you can point it anywhere in an afternoon, and no vendor can stop you. Check the WHOIS record today. If it is registered to the agency, request a transfer in writing; most will comply, and a lawyer's letter resolves the rest. The content is yours by contract in most agreements and by common sense in all of them; export every page's text and images now, before the relationship gets worse.",
        "You do not need the old code. A six year old WordPress build with eleven plugins is not an asset. It is the reason the site is slow.",
      ]},
      { h2: "What the old site is costing you", body: [
        "Mobile load times over three seconds lose a measurable share of visitors before the page appears, and Google reads Core Web Vitals on mobile. Client side rendering hides your text from crawlers and AI engines. A form builder plugin with no business associate agreement is a HIPAA exposure if you are a practice. And every ad click that lands on a page converting under 1 percent is a click you paid full price for and got nothing from.",
      ]},
      { h2: "What a rebuild that you own looks like", body: [
        "Next.js on Vercel, server rendered so every word is in the HTML, TypeScript so the content is typed data rather than a page builder, schema on every route through one set of builders, and Supabase where data is needed. A commercial site of 15 to 40 pages ships in 6 to 10 weeks inside the 90 day ramp, content included. Request any page without JavaScript and read the copy; that is the test most agency sites fail. Repo, content, and infrastructure accounts are yours. If you leave, you take the site with you.",
      ]},
    ],
    faqs: [
      { q: "Can we keep WordPress?", a: "We migrate from it. New builds ship on our stack because performance, schema control, and server rendering are the point, and because you should not need a vendor to change a sentence." },
      { q: "What if the agency will not release the domain?", a: "Domains are registrar level property. If it is in your name, transfer it. If it is not, a written demand and, rarely, a lawyer's letter resolve it. We have walked clients through both." },
      { q: "Do you host it?", a: "On a term, hosting and bandwidth are included. Month to month, hosting is on our stack at cost. Either way the accounts are in your name." },
    ],
    related: [{ label: "Web development", href: "/web-development" }, { label: "Is the website included", href: "/answers/is-the-website-included-in-the-monthly-fee" }, pricing],
  },
  {
    slug: "too-many-vendors-nobody-accountable",
    audience: "owners",
    dateModified: "2026-09-04",
    title: "Four Marketing Vendors and Nobody Owns the Number",
    metaDescription: "A web shop, an ads agency, an SEO vendor, and an SDR firm, each celebrating its own metric, and revenue flat. Why the seams between vendors are where pipeline dies, and the fix.",
    eyebrow: "Problem · Owners",
    h1: "We have a web guy, an ads guy, an SEO vendor, and a caller, and nobody owns the result.",
    lead: "When revenue stalls, everyone points at the seam next to them. The ads agency says the landing page is weak. The web shop says the traffic is bad. The SDR firm says the brand is invisible. Every one of them is right, and none of them is accountable, because you bought four parts of a system from four companies that have never spoken.",
    callout: {
      label: "Where this lives",
      body: "One team, one number. Kinetic at $10,000 a month runs the site, the content, the ads, and the outbound seat with a meeting number in writing. Critical Mass adds TV and a second seat, per brand. Pricing is published.",
    },
    searchPhrases: ["too many marketing vendors", "consolidate marketing agencies", "one agency for website ads and outbound", "marketing vendors blaming each other", "single vendor for marketing and sales"],
    sections: [
      { h2: "Count the seams", body: [
        "Four vendors create six handoffs: ad to page, page to form, form to follow up, content to outreach, outreach to site, and everything to reporting. Each handoff loses leads and gains an excuse. More than 70 percent of marketing leads are never contacted by sales, and the number is worse when the lead crosses a company boundary on the way. You are also paying four account managers, four reporting cadences, and four onboarding cycles for one pipeline.",
      ]},
      { h2: "Why the parts share a team here", body: [
        "The person who writes your cold email wrote your website, so the prospect's diligence confirms the outreach. The person who builds the landing page reads the search term report, so the page matches the query. The objection heard on a Tuesday call is in the ad copy by Friday. None of that is possible across vendor boundaries, and all of it is why our case study clients saw leads grow faster than traffic: 6.5x form fills against 3.7x clicks for one, 7.2x against 4.1x for another.",
      ]},
      { h2: "What consolidation costs and saves", body: [
        "Separately, credible vendors run $2,000 to $10,000 for SEO, $1,500 to $7,500 for ads management, $5,000 to $15,000 for appointment setting, plus a web retainer. That stack runs $10,000 to $35,000 a month with the seams unowned. Kinetic runs all of it for $10,000 plus ad spend, with one report, one call a week, and one number in writing. The parts are cheaper together because they share a team.",
      ]},
    ],
    faqs: [
      { q: "Do we have to fire everyone at once?", a: "No. Most clients transition over the 90 day ramp, keeping any vendor that runs one channel well until our system is producing." },
      { q: "What if we like our web developer?", a: "Keep them for product work. The marketing site has to be built by the team that runs the ads and the outbound, or the seam comes back." },
      { q: "Who is accountable at your firm?", a: "The founder, on every account. One name, one number, one weekly call." },
    ],
    related: [howItWorks, { label: "Growth partner vs marketing agency", href: "/field-notes/growth-partner-vs-marketing-agency" }, pricing],
  },
  {
    slug: "do-not-know-what-marketing-should-cost",
    audience: "owners",
    dateModified: "2026-09-04",
    title: "What Should Marketing Cost? A Budget Number by Stage",
    metaDescription: "Nobody publishes prices, so you cannot budget. Real 2026 numbers for channel vendors, in house hires, appointment setting, and full pipeline programs, by revenue stage.",
    eyebrow: "Problem · Owners",
    h1: "We do not know what we should be spending on marketing and sales.",
    lead: "Every proposal you have received says it depends. It does depend, on your stage, your deal size, and your market, but the ranges are known, and the vendors who will not name them are protecting a sales process, not you. Here are the numbers, including ours.",
    callout: {
      label: "Where this lives",
      body: "Four published tiers on a 12 month term: Baseline $2,500, Catalyst $5,000, Kinetic $10,000, Critical Mass from $25,000, all per month, plus ad spend in your own accounts where the tier runs ads. Month to month runs 20 percent higher and the term includes the $15,000 website. Every add on is priced on the pricing page. No discovery call required to learn a price.",
    },
    searchPhrases: ["how much should a small business spend on marketing", "marketing budget for a $5 million company", "what does outsourced marketing cost", "marketing and sales budget by revenue", "how much does lead generation cost per month"],
    sections: [
      { h2: "The channel prices, 2026", body: [
        "SEO retainers at credible quality: $2,000 to $10,000 a month. Google Ads management: $1,500 to $7,500 a month plus spend, with spend from $3,000 to $50,000 depending on market. Appointment setting: $3,000 to $8,000 flat, or $150 to $800 per meeting on performance models, with dedicated senior teams at $10,000 to $25,000. Connected TV media: about $26 per thousand impressions with 10 to 20 percent managed service fees on top. Buy them separately and you own the seams between them.",
      ]},
      { h2: "The in house prices", body: [
        "A marketing manager at $110,000 to $140,000 loads to $140,000 to $175,000. An SDR loads to $70,000 to $90,000. Tools and data add $20,000 a year. Ramp takes a quarter or two, and B2B sales hiring misses near half the time. One marketing lead plus one agency retainer runs $160,000 to $190,000 a year with the seam still unowned.",
      ]},
      { h2: "A budget by stage", body: [
        "Under $1 million: $2,500 a month on content and a site that says something, and the founder sells. That is Baseline. $1 million to $3 million: $5,000 a month plus $3,000 to $10,000 in ad spend for content, one campaign, and a landing page per audience. That is Catalyst. $3 million to $10 million: $10,000 a month plus spend for the full pipeline with an outbound seat and a meeting number in writing. That is Kinetic. Past $10 million or more than one brand: from $25,000 with TV, two seats, and a board ready quarterly review. That is Critical Mass.",
        "As a share of revenue, those land between 3 and 8 percent for most companies, which matches what growing B2B companies spend when they are actually growing.",
      ]},
      { h2: "The number that makes the budget a decision", body: [
        "Divide everything by qualified meetings. Kinetic at $10,000 producing ten meetings a month is $1,000 per meeting before spend. At a one in five close rate and a $25,000 deal, that is $5,000 of cost against $25,000 of revenue. The same program producing three meetings is $3,333 each and the math argues. A vendor who will not commit to a meeting number will not let you run this calculation, which is the whole point of refusing.",
      ]},
    ],
    faqs: [
      { q: "Why do you publish pricing when nobody else does?", a: "Because our buyer is a founder who hates a wasted discovery call as much as we do, and because the page that answers the question everyone types and nobody answers is the page that ranks." },
      { q: "Are there setup fees?", a: "No. Landing pages and campaign builds inside the ramp are included. The website build is included on a 12 month term at every tier, or $15,000 up front month to month. The term costs what ten months cost month to month, so the site and two months come free with the year." },
      { q: "What is not included?", a: "Ad spend and media, which go to the platforms in your own accounts. Add ons like the MLR gate, the HIPAA stack, and extra outbound seats are priced individually on the pricing page." },
    ],
    related: [pricing, { label: "Outsourced sales and marketing cost", href: "/field-notes/outsourced-sales-marketing-cost" }, { label: "Agency vs in house", href: "/compare/agency-vs-in-house" }],
  },
  {
    slug: "trade-shows-produce-cards-not-meetings",
    audience: "owners",
    dateModified: "2026-09-04",
    title: "Trade Shows Produce Business Cards, Not Meetings",
    metaDescription: "$40,000 for a booth, 200 badge scans, four follow up calls, zero deals. Why only 33 percent of science sales teams are satisfied with event ROI, and how to book the meetings before you fly.",
    eyebrow: "Problem · Owners",
    h1: "We spend a fortune on trade shows and come home with a stack of cards.",
    lead: "The booth, the travel, the swag, and the four days of the founder's time add up to $30,000 to $60,000 per show. The return is a spreadsheet of badge scans that gets a mass email two weeks later and then nothing. SciLeads' 2026 benchmark found 77 percent of science sales teams attending the same or more conferences, only 33 percent satisfied with the return, and 30 percent choosing shows out of habit. The show is not the problem. The three weeks before it are.",
    callout: {
      label: "Where this lives",
      body: "The conference sprint is a $7,500 per event add on on any tier: meetings booked before and at one trade show, from a list of attendees and exhibitors built for that event, with follow up run afterward by the same seat. Pricing is published.",
    },
    searchPhrases: ["trade show leads no follow up", "trade show roi small business", "how to book meetings before a conference", "conference lead generation not working", "trade show follow up strategy"],
    sections: [
      { h2: "Why the cards go nowhere", body: [
        "A badge scan is a person who walked past. It is not a lead. Mass emailing 200 of them two weeks later gets reply rates under 1 percent because the context is gone. Meanwhile the 15 people you actually wanted to meet were at the show and you never found them, because nobody built the list beforehand. The event produced proximity to your buyers for three days and you spent it hoping they would stop by.",
      ]},
      { h2: "Book the meetings before you fly", body: [
        "Three weeks out, build the list: exhibitors, speakers, and registered attendees who match your ideal customer profile, usually 100 to 300 names. Two weeks out, sequence them across email and LinkedIn with a specific ask: 20 minutes at the show, at a time, at a place. One week out, phone the ones who opened twice. A well run sprint books 8 to 20 held meetings at a show where you previously booked none, and each of them arrives with a brief.",
      ]},
      { h2: "After the show, run the sequence, not the blast", body: [
        "Everyone you met gets a personal follow up inside 48 hours with the page relevant to what they said. Everyone you wanted and missed gets a three touch sequence referencing the show. Everyone else gets nothing, because they were never a lead. Then decide next year's shows from held meetings per dollar, not from habit. That number, once you have it, usually cuts the show list in half and doubles the return on what is left.",
      ]},
    ],
    faqs: [
      { q: "Can you run this for one show?", a: "Yes. The conference sprint is priced per event at $7,500 and does not require a monthly tier, though it runs better with one." },
      { q: "How do you get the attendee list?", a: "Exhibitor and speaker lists are public. Attendee lists come from the organizer where offered, from the event app, and from public signals like posts announcing attendance. We build from real data, not purchased lists." },
      { q: "What if our buyers are scientists?", a: "Then the first sentence has to name their work. Our COO spent a decade selling to researchers at conferences. The sequences are written in the register of the field." },
    ],
    related: [{ label: "Appointment setting", href: "/outbound-appointment-setting" }, pricing, { label: "Biotech and life sciences", href: "/industries/biotech" }],
  },
  {
    slug: "blog-and-social-active-but-no-inquiries",
    audience: "owners",
    dateModified: "2026-09-04",
    title: "We Post Constantly and Get Likes, Not Inquiries",
    metaDescription: "Three posts a week, a monthly blog, a growing follower count, and no leads. Why engagement is not demand, what content produces meetings, and the cadence that works.",
    eyebrow: "Problem · Owners",
    h1: "We post all the time. We get likes. We do not get inquiries.",
    lead: "The feed is active, the follower count climbs, and the contact form is quiet. This is what happens when content is measured on engagement instead of on the questions it answers. Likes come from peers and friends. Inquiries come from buyers who found the answer to a specific question on your site. Those are different pieces of content, and most companies publish only the first kind.",
    callout: {
      label: "Where this lives",
      body: "Baseline at $2,500 a month: one blog post written to be found and cited, one newsletter to your own list, eight social posts, and a one page report on what it produced. Catalyst doubles the social and adds paid demand. Pricing is published.",
    },
    searchPhrases: ["social media engagement but no leads", "blog not generating leads", "content marketing not working small business", "likes but no sales", "what content actually generates leads b2b"],
    sections: [
      { h2: "Engagement is not demand", body: [
        "A post about company culture gets 40 likes from employees and their friends. A page titled with the question a buyer types, answered in the first 40 words with one number, gets 4 visits a month from strangers, and one of them fills out the form. The first feels better. The second is a lead. Buyers complete 60 percent or more of their decision before contacting anyone, per BioInformatics, and they do it on pages that answer diligence questions: pricing, how it works, comparisons, proof with numbers, the technical protocol.",
      ]},
      { h2: "The content that produces meetings", body: [
        "Write down the ten questions your sales calls repeat. Each becomes a page: the question in the title, the answer first, the mechanism after, a number a reader can quote, schema so search and AI engines can name the entity. Publish one a month at minimum. Send it to your own list as the newsletter, because the people who already trust you are the cheapest source of the next referral. Cut social to eight posts a month that show the work and the people, and stop measuring it on likes.",
      ]},
      { h2: "Why the cadence matters more than the volume", body: [
        "Twelve real pages a year compound: month three shows the first rankings, month six accelerates, and by month twelve the site ranks for the category rather than the brand. Thirty posts a month on social produce nothing that compounds, because social content has a half life of hours. Redirect the hours. One client's monthly editorial series, featuring the researchers who use their products, earned institutional backlinks that lifted every commercial page on the site.",
      ]},
    ],
    faqs: [
      { q: "Should we stop posting on social?", a: "No. Cut it to a cadence that shows the work and the founder, eight to sixteen posts a month, and stop treating it as the lead engine. Personal profiles outperform company pages in B2B by a wide margin." },
      { q: "Do you write the content or does AI?", a: "People write it. AI runs scheduling, deployment, research, and data collection. Every word a buyer reads was written by a person on your account." },
      { q: "How do we know it is working?", a: "The monthly report on Baseline is one page: pages published, rankings gained, inquiries by source. If the number is not moving by month six, the page list is wrong and we change it." },
    ],
    related: [{ label: "SEO and content", href: "/seo-content" }, { label: "What should a small biotech publish monthly", href: "/answers/what-content-should-a-biotech-publish-monthly" }, pricing],
  },
  {
    slug: "cannot-tell-which-marketing-is-working",
    audience: "owners",
    dateModified: "2026-09-04",
    title: "Cannot Tell Which Marketing Is Working: Fix Attribution",
    metaDescription: "Leads arrive and nobody knows from where. The five tracking failures we find in almost every account, the one conversion that matters, and how to see cost per meeting by channel in 30 days.",
    eyebrow: "Problem · Owners",
    h1: "We spend on five things and cannot tell which one is producing the leads.",
    lead: "The ads report says 40 conversions. The CRM says 12 new contacts. Sales remembers three good calls. Nobody can connect them, so budget decisions are made on feel, and feel usually favors whichever vendor presented last. This is fixable in 30 days, and the fix starts by deciding what a lead is.",
    callout: {
      label: "Where this lives",
      body: "Tracking repair is part of the 90 day ramp on every tier: one conversion definition, source on every lead, and a one page report showing inquiries and meetings by channel. The CRM build add on at $4,000 configures HubSpot or Pipedrive to the runbook. Pricing is published.",
    },
    searchPhrases: ["which marketing channel is working", "marketing attribution small business", "cannot track where leads come from", "google ads conversions do not match crm", "how to measure marketing roi b2b"],
    sections: [
      { h2: "The five failures we find in almost every account", body: [
        "Conversions defined as anything: phone clicks, page views, newsletter signups, and form fills all counted as leads, so the ads report is three times the CRM. No source captured on the form, so the CRM knows a lead arrived and not from where. Two analytics tags firing, or none. Offline outcomes never imported, so the platform optimizes toward form fills that never became meetings. And a dashboard nobody reads, because it answers questions nobody asked.",
        "One client's paid search counted several actions as leads that were not. Correcting it to a submitted lead form only changed reported cost per lead by multiples and let spend optimize against real leads for the first time.",
      ]},
      { h2: "One conversion, one source, one report", body: [
        "Define a lead as a submitted form or a booked call, nothing else. Capture the source path and campaign on every submission and pass it to the CRM. Mark every lead with the date it was first contacted and the date it became a held meeting. Import held meetings back to the ad platform as the conversion that matters. Report monthly on one page: inquiries, meetings, and cost per meeting, by channel. That page decides the budget.",
      ]},
      { h2: "Where healthcare changes the rules", body: [
        "A practice cannot fire a pixel on a booking page without a business associate agreement, and Meta and Google do not sign one for those tools. Conversion tracking runs server side: the form posts to a covered system, and that system tells the ad platform a conversion happened with a click identifier and nothing about the person. You still get cost per booked consultation by campaign. That is the HIPAA form and call stack, $750 a month.",
      ]},
    ],
    faqs: [
      { q: "Do we need new software?", a: "Rarely. Most accounts have the tools and lack the definitions. The CRM build at $4,000 configures what you have to the runbook when the setup is beyond repair." },
      { q: "How long until we trust the numbers?", a: "Tracking is repaired in weeks one and two of the ramp. By day 90 you have one clean quarter, which is the first quarter you can budget from." },
      { q: "What about leads that come from word of mouth?", a: "Ask on the form. Our own form asks how you found us, and the answer is captured with the lead. Referral is a channel and should be counted like one." },
    ],
    related: [{ label: "Google Ads", href: "/google-ads" }, { label: "HIPAA compliant conversion tracking", href: "/answers/how-do-you-track-google-ads-conversions-under-hipaa" }, howItWorks],
  },
  {
    slug: "appointment-setter-books-meetings-that-no-show",
    audience: "owners",
    dateModified: "2026-09-04",
    title: "Appointment Setter Books Meetings That No Show",
    metaDescription: "The vendor reports 15 meetings booked. Six held. Two were qualified. Why meetings booked into a weak brand ghost, and what a held, qualified meeting standard looks like in writing.",
    eyebrow: "Problem · Owners",
    h1: "Our appointment setting vendor books meetings and half of them do not show up.",
    lead: "The invoice says 15 meetings. Your calendar says six people showed, and two of those had no idea why they agreed. You are paying per meeting booked, the vendor is optimizing for meetings booked, and everyone is behaving rationally. The fix is a definition, written into the agreement, and a website that can carry the claim the setter made.",
    callout: {
      label: "Where this lives",
      body: "On Kinetic, the monthly meeting number in writing counts held meetings with people who match agreed criteria. No shows and meetings that fail criteria do not count. Every booked meeting gets a confirmation sequence. Pricing is published.",
    },
    searchPhrases: ["appointment setting no show rate", "appointment setter booking bad meetings", "outsourced sdr meetings not qualified", "pay per appointment leads not showing up", "what is a qualified meeting appointment setting"],
    sections: [
      { h2: "Why meetings booked into a weak brand ghost", body: [
        "A setter gets a yes on the phone. Between that yes and the meeting, the prospect looks you up. If the site is a brochure with no pricing, no numbers, and no people, the yes turns into silence. No show rates above 30 percent are common when nobody runs confirmation sequences and the site cannot carry the claim. The setter did their job. The brand did not do its half.",
      ]},
      { h2: "Write the definition into the agreement", body: [
        "A qualified meeting is a held conversation with a person who matches criteria agreed before the program starts: role, company type, and a stated need, confirmed in advance, delivered with a brief on who they are and why they said yes. That sentence goes in the agreement next to the monthly number. Meetings that no show or fail criteria do not count. Any vendor who will not sign that sentence is selling you booked, not held.",
      ]},
      { h2: "What cuts no shows in half", body: [
        "A confirmation sequence: a calendar invite inside the hour, a reminder with the one page that answers their question the day before, and a text or call the morning of. A site the prospect can verify: pricing or a range, a result with a method, the people they will meet. And a brief for you, so the meeting starts where the call left off instead of restarting from hello. In our programs, held rate on confirmed meetings runs above 80 percent when the site does its half.",
      ]},
    ],
    faqs: [
      { q: "Should we pay per meeting or a retainer?", a: "Pay per held qualified meeting if a vendor offers it. Most offer pay per booked, which creates exactly this problem. Our seat is a retainer with a held meeting number in writing." },
      { q: "Can you fix our current vendor's meetings?", a: "Sometimes. If the site cannot carry the claim, fixing the site raises held rate for any setter, including theirs. That is Catalyst plus a landing page, then decide whether to keep them." },
      { q: "What if we only need outbound?", a: "Then a pure play like Belkins is a credible choice and we will say so. Meetings booked into a strong brand hold. Meetings booked into a weak one do not, whoever books them." },
    ],
    related: [{ label: "What counts as a qualified meeting", href: "/answers/what-is-a-qualified-meeting" }, { label: "Belkins alternative", href: "/compare/belkins-alternative" }, { label: "Appointment setting", href: "/outbound-appointment-setting" }],
  },
  {
    slug: "launching-a-second-brand-with-the-same-team",
    audience: "owners",
    dateModified: "2026-09-04",
    title: "Launching a Second Product Line or Brand With the Same Team",
    metaDescription: "A research line and a clinical line, or two brands under one company, and one marketing budget. How to run both without doubling headcount, and what the second brand costs.",
    eyebrow: "Problem · Owners",
    h1: "We are launching a second brand and we cannot double the marketing team.",
    lead: "The second product line has a different buyer, a different vocabulary, and sometimes a different regulatory regime, and the plan is to have the same two people market both. That plan produces two half run brands. The fix is not more people. It is a system that runs per brand, with its own accounts, its own report, and its own number, from one team.",
    callout: {
      label: "Where this lives",
      body: "Every additional brand on the same tier is 15 percent off, and every brand gets its own report, its own accounts, and its own number. A second product line in Google Ads is $1,000 a month as an add on. Critical Mass, from $25,000, runs the full system per brand with two outbound seats and TV. Pricing is published.",
    },
    searchPhrases: ["marketing two brands with one team", "launching a second product line marketing", "multi brand marketing small company", "how to market two businesses at once", "second brand launch pipeline"],
    sections: [
      { h2: "Why one team marketing two brands usually fails", body: [
        "The brands compete for the same hours. The established one has customers who call, so it wins every week, and the new one gets the leftover Friday afternoon. Its site goes up late, its campaign never gets read, its outbound list is never built. Eighteen months later the second brand has a logo and no pipeline, and the conclusion is that the market was not there. The market was there. The hours were not.",
      ]},
      { h2: "Run the same system twice, not two half systems", body: [
        "Each brand gets its own six step run: its own pages, its own content cadence, its own ad account and campaigns, its own outbound list and sequences, its own report. The team is shared, the system is not. A company with a research product and a clinical product is a common case: two brands on Kinetic, each with a seat, each with a meeting number in writing, and the second at 15 percent off. The clinical brand adds the MLR gate; the research brand does not need it.",
      ]},
      { h2: "What the second brand costs", body: [
        "On Catalyst, the second product line in Google Ads is $1,000 a month with its own campaigns, landing page, and reporting, and the content cadence expands to cover it. On Kinetic, the second brand runs at 15 percent off the tier price with its own seat. For companies running three or more brands, or ready to add TV, Critical Mass from $25,000 runs everything per brand with creative production in house and a quarterly board ready review across all of them.",
      ]},
    ],
    faqs: [
      { q: "Do the brands need separate websites?", a: "Separate sites when the buyers are different enough that one would confuse the other, which is usually the case for research versus clinical. Separate sections of one site when the buyer overlaps." },
      { q: "Can one outbound seat cover both?", a: "It can split time, but a seat sized for one brand's meeting number cannot hit two. Two brands on Kinetic means two seats." },
      { q: "How does reporting work?", a: "One report per brand, one call covering both, one number per brand in writing. You should never have to guess which brand produced what." },
    ],
    related: [{ label: "Multi brand discount", href: "/answers/do-you-offer-a-discount-for-multiple-brands" }, pricing, { label: "Kavera case study", href: "/results/kavera" }],
  },
  {
    slug: "revenue-is-feast-or-famine",
    audience: "owners",
    dateModified: "2026-09-04",
    title: "Revenue Is Feast or Famine: The Structural Fix",
    metaDescription: "A great quarter, then the cliff, then the scramble. Feast and famine revenue has five known causes and one structural fix: a demand system that runs when you are busy.",
    eyebrow: "Problem · Owners",
    h1: "Our revenue is feast or famine and we cannot break the cycle.",
    lead: "A great quarter, everyone too busy delivering to sell, then the cliff, then the scramble, then a great quarter born of panic. Founders blame the market, the team, or the season. It is none of those. Sales effort runs inversely to revenue, which guarantees a trough 90 days after every peak, and the only fix is a demand system that runs whether or not you are busy.",
    callout: {
      label: "Where this lives",
      body: "Every tier runs continuously, especially when you are busy. Baseline at $2,500 keeps the drumbeat going. Kinetic at $10,000 keeps an outbound seat booking meetings through your busiest month, with the number in writing. Pricing is published.",
    },
    searchPhrases: ["feast or famine business cycle", "inconsistent sales pipeline", "revenue up and down every quarter", "how to get consistent leads", "boom and bust revenue small business"],
    sections: [
      { h2: "The five causes, briefly", body: [
        "Selling only happens when delivery is slow. One channel, and it is referrals. Leads die in the seam between marketing and sales, where more than 70 percent are never contacted. The pipeline math has never been written down: meetings needed, cost per meeting by channel, close rate by source. And four vendors with zero owners, each celebrating a metric that is not meetings. We wrote the full diagnosis as a field note, linked below. This page is the fix.",
      ]},
      { h2: "The fix, in order", body: [
        "Write the math down first: how many qualified meetings a month hit the number, and what each costs by channel. That is the first hour of every engagement we run. Own the seam second: a response standard and a follow up sequence, which costs discipline. Add the channel you control third: content if you publish nothing, search if you have a site and no paid demand, outbound if you need meetings this quarter. Then run all of it continuously, because busy is when the next trough is being built.",
      ]},
      { h2: "What continuous looks like at each tier", body: [
        "Baseline, $2,500: a newsletter, a post, and social every month, so demand exists before you need it. Catalyst, $5,000: one Google Ads campaign and a landing page with leads worked within a business day, so the phone rings in July. Kinetic, $10,000: an outbound seat working the list through your busiest quarter with a meeting number in writing, so the calendar for next quarter fills while this one delivers. The tier ladder exists because the fix is structural, not a campaign.",
      ]},
    ],
    faqs: [
      { q: "We cannot take more work during a busy quarter. Why market then?", a: "Because the meetings booked in a busy quarter close in the slow one. Outbound has a 60 to 90 day lag. Stop it in March and the trough arrives in June." },
      { q: "Our revenue tracks the academic grant calendar. Same fix?", a: "Same fix, with timing. Outreach lands in the months after study section notices, when the money is real. A seat working that calendar smooths the summer." },
      { q: "How long until the cycle breaks?", a: "Two quarters of continuous operation, in our experience. The first fills the seam; the second is when the outbound lag catches up and the trough does not arrive." },
    ],
    related: [{ label: "Why your pipeline is inconsistent", href: "/field-notes/why-your-pipeline-is-inconsistent" }, howItWorks, pricing],
  },

  // LIFE SCIENCE AND CRO
  {
    slug: "researchers-cannot-find-our-products-on-google",
    audience: "life-science",
    dateModified: "2026-09-04",
    title: "Researchers Cannot Find Our Products on Google",
    metaDescription: "A catalog of thousands of models, reagents, or assays and Google indexes a search box. Why a database ranks as one page, the Searchable Repository Method, and what 14,000 indexed pages did to leads.",
    eyebrow: "Problem · Life science",
    h1: "We have thousands of products and researchers cannot find any of them on Google.",
    lead: "Scientists search by gene, by modification type, by catalog number, by strain. Your catalog has the exact thing they typed and Google has never seen it, because the catalog lives behind a search box and Google treats a database as one page. The company with 40 products and 40 pages outranks you for your own inventory.",
    callout: {
      label: "Where this lives",
      body: "The programmatic page expansion add on ships 50 server rendered entity pages at a time for $2,500 a month, on any tier. A full catalog rebuild, one page per product, generated from your own data, is scoped inside a Kinetic engagement with a 12 month term. Pricing is published.",
    },
    searchPhrases: ["product catalog not indexed by google", "researchers cannot find our products", "programmatic seo for life science catalog", "how to get product pages indexed", "mouse model catalog seo"],
    sections: [
      { h2: "Why a database ranks as one page", body: [
        "A catalog behind a search form, a filter, or a JavaScript app returns one URL to a crawler: the search page. The 14,000 products behind it do not exist as far as Google or an AI engine is concerned. Meanwhile the researcher types the gene name and the modification and lands on a competitor's thin page, because a thin page beats no page every time.",
        "Life Science Leader's summary of the 2026 State of Life Sciences Marketing report calls this visibility without discoverability: 71 percent of companies run a website and 60 percent run LinkedIn, while SEO and content rank lowest in perceived return at 10 percent. The companies that have not done the work do not believe it works.",
      ]},
      { h2: "The Searchable Repository Method", body: [
        "Treat every item as its own entity with its own page, its own schema, and its own reason to be indexed. Generate the pages from your own data, one server rendered page per model, with specifications, publications, and a request form on every one. Release in waves through an index gate so nothing thin or duplicated goes live. Route every inquiry into the CRM tagged by catalog prefix so you know which products produce leads.",
        "For a mouse model CRO with more than 14,000 catalog products, that method moved average Google position from 16 to 10, organic clicks 3.7x, and inbound form fills 6.5x within eight months against the six months before we started. Month eight was the best organic month on record. Leads grew faster than clicks because the researcher landed on the exact model they searched for.",
      ]},
      { h2: "What it takes on your side", body: [
        "A data export with one row per product and real fields: name, identifiers, specifications, applications, references. The pages are only as good as the data atoms behind them, and pages spun from one another fail. A point of contact who can approve a wave in 48 hours. And a form owner who will answer the inquiries, because the inbox is about to fill.",
      ]},
    ],
    faqs: [
      { q: "Will Google penalize thousands of generated pages?", a: "Google penalizes thin, duplicated pages. Pages backed by a real product with real specifications are what the researcher wants and what Google indexes. The index gate exists to keep the thin ones out." },
      { q: "How fast does the catalog get indexed?", a: "In the case above, most of the catalog was indexed by month three and all of it by month four, with impressions 4x the prior baseline at that point." },
      { q: "Does this work for reagents, antibodies, or assays?", a: "It works for any business where buyers search for a specific item and the site only shows categories. Suppliers, CROs, and reagent companies with large catalogs are the deepest fit." },
    ],
    related: [{ label: "ITL case study", href: "/results/ingenious-targeting-laboratory" }, { label: "Programmatic SEO for life science", href: "/answers/what-is-programmatic-seo-for-life-science" }, { label: "Glossary: entity page", href: "/glossary/entity-page" }],
  },
  {
    slug: "cro-new-business-only-from-referrals",
    audience: "life-science",
    dateModified: "2026-09-04",
    title: "CRO New Business Comes Only From Referrals: What Next",
    metaDescription: "Every new client trained in the same two labs, and the founders are the sales team. What small CRO business development looks like without a sales hire, from a decade selling for one.",
    eyebrow: "Problem · Life science",
    h1: "Our CRO's new business comes only from PIs who already know us.",
    lead: "The scientific founders are the business development team. There is no ideal customer profile, no segmentation by therapeutic area or model type, no systematic prospecting, and no consistent follow up, so opportunities quietly disappear over a nine month sales cycle. Corstrate's 2026 write up of small CRO business development names those exact gaps. Our COO lived them for a decade selling custom models for a genetic engineering CRO.",
    callout: {
      label: "Where this lives",
      body: "A CRO under $2 million: Baseline at $2,500 a month for a technical post, a newsletter to past clients, and social that shows the lab. At $3 million with a site and no paid demand: Catalyst. At $5 million needing meetings this quarter: Kinetic, with an outbound seat to lab managers and a meeting number in writing. Pricing is published.",
    },
    searchPhrases: ["cro business development without sales team", "how do small cros get new clients", "contract research organization lead generation", "cro relying on referrals", "business development for small cro"],
    sections: [
      { h2: "Researchers search before they email", body: [
        "A PI does not call a vendor to learn what a conditional knockout is. They search for the specific strain, promoter, targeting strategy, and turnaround, and compare two or three providers on their websites. BioInformatics puts 60 percent or more of the buying process complete before a rep is contacted. If your site cannot carry the technical comparison, you were eliminated before the email. A 12 page brochure site with the words flexible, high quality, and client focused is not a differentiator; Corstrate lists those three words as the ones every small CRO uses.",
      ]},
      { h2: "Who to call, and who not to", body: [
        "For purchases under roughly $50,000, the lab manager or core facility director handles vendors, compares quotes, and places the order. The PI approves. Outbound to lab managers referencing the lab's recent publication and the model it implies gets read. Outbound to PIs with no context gets deleted. Timing matters: outreach converts in the months after grant notices go out, when the money is real and the timeline is short.",
      ]},
      { h2: "The system for a CRO, by revenue", body: [
        "Under $2 million: publish. One deep technical post a month, one newsletter to every past client, social that shows the lab rather than stock photos. That is enough to be found and cited, and it reactivates past clients who forgot you exist. At $3 million: add one Google Ads campaign against the model and service terms buyers type, with a landing page per service and leads worked within a business day. At $5 million: add one outbound seat working lab managers with a monthly meeting number in writing, plus programmatic page expansion, 50 entity pages at a time, to keep owning the search. Someone on your side with scientific credibility takes the meeting.",
      ]},
      { h2: "The claims layer a generalist skips", body: [
        "If your content touches preclinical efficacy or a translational outcome, some claims want a named scientific reviewer before they publish. We run that as a review gate: a claim library, a reviewer you name, a sign off log. $500 to $1,200 a month depending on tier. It is the difference between content that ships weekly and content that waits for a scientist's spare afternoon.",
      ]},
    ],
    faqs: [
      { q: "Can we compete with global CROs on search?", a: "On the specific queries, yes. A global CRO has one page about mouse models. You can have 147. Researchers search specifically, and specific pages win." },
      { q: "Who takes the meeting?", a: "A scientist on your side. Founder knowledge closes a technical sale. Our seat prospects, qualifies, confirms, and briefs." },
      { q: "Do you understand the science?", a: "Our COO is a molecular biologist who sold custom models for more than ten years and ran operations at a medical school department. She is on every life science account." },
    ],
    related: [{ label: "How to market a CRO", href: "/field-notes/how-to-market-a-cro-without-a-sales-team" }, { label: "When should a CRO start outbound", href: "/answers/when-should-a-cro-start-outbound" }, { label: "Biotech and life sciences", href: "/industries/biotech" }],
  },
  {
    slug: "scientific-content-stuck-in-review",
    audience: "life-science",
    dateModified: "2026-09-04",
    title: "Scientific Content Stuck in Review for Weeks",
    metaDescription: "The blog has one post from March because every draft waits for a scientist's spare afternoon. The industry average is 14.8 days per piece. The weekly workflow with a named reviewer and a claim library.",
    eyebrow: "Problem · Life science",
    h1: "Everything we write sits in review for weeks and nothing publishes.",
    lead: "The draft is done. It goes to the scientific founder or the medical director for review. Two weeks later it comes back with comments on word choice, the writer revises, and the cycle repeats. Vodori's 2025 benchmark puts the average review job at 14.8 days from submission to approval; at large pharma Indegene reports 50 to 60. A small company does not need a committee. It needs one reviewer, a claim library, and a log.",
    callout: {
      label: "Where this lives",
      body: "The MLR review gate add on: named reviewer workflow, sign off log, and claim library. $500 a month plus $750 setup on Baseline, $750 plus $1,000 on Catalyst, $1,200 plus $1,500 on Kinetic. You provide the reviewer. Pricing is published.",
    },
    searchPhrases: ["scientific content review bottleneck", "medical review slowing down marketing content", "how to speed up mlr review", "content approval process biotech", "claim library for marketing content"],
    sections: [
      { h2: "Why review takes two weeks", body: [
        "The reviewer sees the whole draft, so they review the prose, and you get comments on adjectives that take two more cycles. The same reference gets checked for the fourth time because nobody recorded that it was approved in March. The claim gets rewritten mid cycle. And the reviewer is a physician or a PI with a day job, reading your draft on a Sunday. None of that is the reviewer's fault. It is a workflow that routes whole documents to a busy expert.",
      ]},
      { h2: "The weekly workflow", body: [
        "Build the claim library first: every clinical, safety, efficacy, or performance statement the company is allowed to make, each with its reference, approved once. Write from the library, so 80 percent of a post is already approved language. Flag only the new claims, attach the reference, and send one batch a week. Monday drafts go out, Wednesday comments return, Thursday revisions, Friday publish. Log the reviewer's name, the date, and the version. One reviewer hour a week supports a newsletter, a post, and a month of social.",
        "Content that does not touch a claim, a founder story, a hiring post, a conference recap, a photo of the lab, skips the gate entirely. That is most of it, which is why a regulated company can still publish eight or sixteen posts a month.",
      ]},
      { h2: "What a CRO or tools company actually needs to gate", body: [
        "Not the pharma version. Methods, turnaround, and specifications do not need a medical reviewer. Any claim about preclinical efficacy, a translational outcome, or a clinical result does. Most CRO content skips the gate, and the gate exists so the pieces that need it move in a week instead of a quarter.",
      ]},
    ],
    faqs: [
      { q: "Do we need to hire a medical reviewer?", a: "You name one with an MD or PhD credential who is accountable to you: a medical director, a scientific founder, or a contracted reviewer. We build the workflow around that person and do not supply one, on purpose." },
      { q: "Do social posts need review?", a: "Only the ones that make a clinical, safety, or efficacy claim. Batch those into the weekly review with the blog post. The rest publishes on schedule." },
      { q: "What does setup involve?", a: "Building the claim library from your existing approved materials: papers, validated specs, prior approved content. That is the setup fee, and it is also what you hand a new agency or hire on day one." },
    ],
    related: [{ label: "MLR review workflow", href: "/field-notes/mlr-review-for-marketing-content" }, { label: "How long does MLR review take", href: "/answers/how-long-does-mlr-review-take" }, { label: "Glossary: claim library", href: "/glossary/claim-library" }],
  },
  {
    slug: "sales-rep-cannot-explain-the-science",
    audience: "life-science",
    dateModified: "2026-09-04",
    title: "Sales Rep Cannot Explain the Science to Researchers",
    metaDescription: "The generalist SDR reads a script to a PI who knows more than they do, and the PI hangs up. Why volume shops fail with scientific buyers, and what outreach in the register of the field looks like.",
    eyebrow: "Problem · Life science",
    h1: "Our salesperson cannot hold a conversation with a scientist.",
    lead: "A capable generalist rep, a good script, and a list of principal investigators. Reply rates at a fraction of a percent and the few calls that connect end in 90 seconds, because the rep called a floxed allele a product and the PI heard everything they needed to. Scientific buyers punish generic outreach faster than any market we work in, and the fix is not a better script.",
    callout: {
      label: "Where this lives",
      body: "Kinetic at $10,000 a month includes one outbound seat with sequences written in the register of the field, aimed at lab managers and core directors, with a meeting number in writing. Our COO, a molecular biologist with a decade of CRO sales, is on every life science account. Pricing is published.",
    },
    searchPhrases: ["sales rep does not understand the science", "selling to scientists outbound", "sdr for life science company", "how to sell to principal investigators", "technical sales for biotech services"],
    sections: [
      { h2: "Why the first sentence decides it", body: [
        "A PI decides whether to reply in the first sentence, and the first sentence has to name the model, the assay, or the phenotype correctly. Volume shops staff for volume, so the caller reads a script written by someone who has never been in a lab. SciLeads' 2026 benchmark puts average cold email reply rate in science sales at 4.2 percent; generic sequences into researchers fall well under 1 percent, and the meetings that do land are with the wrong person.",
      ]},
      { h2: "Aim at the buyer of record, not the famous name", body: [
        "For most purchases under $50,000, the lab manager or core facility director handles vendors and compares quotes; the PI approves. Lab managers read email from vendors because it is their job. PIs delete it because it is not. A sequence to a lab manager that references the lab's last paper and the model it implies gets a reply. Grant timing matters: the months after study section notices are when the money is real.",
      ]},
      { h2: "Let the site do the talking the rep cannot", body: [
        "A researcher who gets a credible first sentence looks you up. If the site carries the targeting strategy, the validation data, the turnaround, and a page for the specific model type, the rep never has to explain the science; the rep has to book the call with the scientist on your side who can. That is the split we run: outbound prospects, qualifies, confirms, and briefs. Your scientist takes the meeting. For one CRO client, the researcher spotlight series plus a sequence to the featured lab and its institution feeds the same calendar as inbound.",
      ]},
    ],
    faqs: [
      { q: "Who writes the sequences?", a: "The same team that wrote your site, reviewed by our COO for register and accuracy. The prospect's diligence confirms the email instead of contradicting it." },
      { q: "Can outbound reach industry and academic buyers in one program?", a: "Yes, with separate lists, separate sequences, and separate offers per segment. Venture backed biotech prospects get funding and publication triggers; academic accounts get grant timing." },
      { q: "What if we already have a rep?", a: "Keep them for the technical conversation. Our seat does the prospecting they hate and books the meetings they want." },
    ],
    related: [{ label: "Who buys in an academic lab", href: "/answers/who-is-the-buyer-in-an-academic-lab" }, { label: "Appointment setting", href: "/outbound-appointment-setting" }, { label: "Kristen Coughlin", href: "/people/kristen-coughlin" }],
  },
  {
    slug: "outreach-to-pis-gets-ignored",
    audience: "life-science",
    dateModified: "2026-09-04",
    title: "Outreach to PIs Gets Ignored: Who to Email Instead",
    metaDescription: "You email principal investigators and hear nothing. The PI is rarely the buyer of record under $50,000. Who is, what to reference in the first line, and when in the grant cycle to send.",
    eyebrow: "Problem · Life science",
    h1: "We email principal investigators and nobody answers.",
    lead: "You built a list of 500 PIs from PubMed, wrote a respectful email about your services, and sent it. Three replies, two of them asking to be removed. PIs are the most emailed people in science and the least likely to buy anything directly. The person who does buy is down the hall, and they read vendor email because it is their job.",
    callout: {
      label: "Where this lives",
      body: "Kinetic at $10,000 a month includes an outbound seat working lab managers and core directors with publication and grant triggers, coordinated across email, phone, and LinkedIn, with a meeting number in writing. Pricing is published.",
    },
    searchPhrases: ["emailing principal investigators no response", "how to reach lab managers", "cold outreach to academic labs", "selling to research labs who to contact", "grant cycle timing for vendor outreach"],
    sections: [
      { h2: "Who actually buys", body: [
        "For purchases under roughly $50,000, the lab manager or core facility director handles vendors, compares quotes, and places the order. The PI approves the choice and rarely makes it. A sequence to lab managers gets read. A sequence to PIs with no context gets deleted, and a PI who is annoyed tells the lab manager not to buy from you.",
      ]},
      { h2: "What the first line has to contain", body: [
        "The lab's most recent paper and the model, assay, or service it implies. Not your company name, not your years in business. A lab that just published a conditional knockout phenotype is either going to need the next allele or a colony, and a first line that says so gets a reply. Building that list takes primary data, publications and grants rather than a purchased contact file, and it is the work most vendors skip because it is slow.",
      ]},
      { h2: "When to send", body: [
        "Outreach converts in the months after grant notices go out, when the money is real and the timeline is short. Send in the dead months and you are asking a lab to plan a purchase it cannot fund yet. Coordinate three channels over two to three weeks: email, a LinkedIn touch, and a phone call to the ones who opened twice. SciLeads found the teams above 11 percent reply rates used phone and LinkedIn alongside email; only 29 percent of science sales teams use the phone at all.",
      ]},
    ],
    faqs: [
      { q: "Should we never email PIs?", a: "Email PIs when there is a reason a PI would care: an editorial feature of their work, an invitation to speak, a collaboration. Sell to the lab manager." },
      { q: "How big should the list be?", a: "A few hundred right labs worked deeply across three channels beats ten thousand PIs on one. Depth wins in technical markets." },
      { q: "Can you build the list from our past clients?", a: "Yes, and that is where we start: past clients, their coauthors, and the labs citing their work. Warm lists reply at multiples of cold ones." },
    ],
    related: [{ label: "Who buys in an academic lab", href: "/answers/who-is-the-buyer-in-an-academic-lab" }, { label: "How to market a CRO", href: "/field-notes/how-to-market-a-cro-without-a-sales-team" }, { label: "Cold email gets no replies", href: "/problems/cold-email-gets-no-replies" }],
  },
  {
    slug: "revenue-tracks-the-grant-calendar",
    audience: "life-science",
    dateModified: "2026-09-04",
    title: "Revenue Tracks the Grant Calendar: Smoothing the Year",
    metaDescription: "Flush in the fall, dead in July. Why a life science service company's revenue follows study section dates, and how to time outreach, content, and industry accounts to flatten the curve.",
    eyebrow: "Problem · Life science",
    h1: "Our revenue follows the grant calendar and summer is dead every year.",
    lead: "Orders arrive in waves after funding notices and vanish in between. The lab is overbooked in October and idle in July, and staffing for either is wrong. The grant calendar is not going away. What changes is whether your pipeline is built to ride it or to be surprised by it every year.",
    callout: {
      label: "Where this lives",
      body: "Kinetic at $10,000 a month runs an outbound seat timed to the grant cycle plus a separate sequence to venture backed industry accounts that do not run on it, with a meeting number in writing. Baseline keeps the content and newsletter running through the trough. Pricing is published.",
    },
    searchPhrases: ["life science revenue seasonal grant cycle", "cro revenue follows nih funding cycle", "how to smooth seasonal revenue biotech services", "grant cycle timing sales outreach", "summer slowdown research services"],
    sections: [
      { h2: "Ride the calendar on purpose", body: [
        "Academic outreach converts in the months after study section notices go out, when the money is real and the timeline is short. Build the academic list and sequence around those windows: heavy outreach in the six weeks after notices, content and nurture in between. Most companies do the opposite, prospecting hardest when they are slow, which is exactly when labs cannot buy.",
      ]},
      { h2: "Add the accounts that do not run on it", body: [
        "Venture backed biotech companies buy on program timelines, not grant cycles. A separate sequence with funding event and publication triggers reaches them year round. For one CRO client, the outbound program runs two lists: featured academic labs and their institutions, and venture backed companies building programs that need custom models. The second list is what fills July.",
      ]},
      { h2: "Keep publishing through the trough", body: [
        "Pausing content in a slow quarter costs more than it saves, because search and AI visibility compound and restart slowly. A researcher planning a fall purchase is reading in June. The Baseline cadence, one technical post, one newsletter to past clients, social that shows the lab, is what keeps you in the comparison set when the notices land. It is also the cheapest thing on the pricing page.",
      ]},
    ],
    faqs: [
      { q: "Can outbound really move a grant funded purchase?", a: "It moves the timing and the vendor choice. The grant funds the purchase; the sequence decides whether the lab manager requests your quote or someone else's." },
      { q: "How far ahead should we start?", a: "Two quarters. The seat builds the lists and warms the accounts in the trough so the wave after notices lands on a full calendar." },
      { q: "What about core facilities?", a: "Core directors buy on institutional budgets with their own timing and handle volume. They are a third list, and a good one." },
    ],
    related: [{ label: "Why your pipeline is inconsistent", href: "/field-notes/why-your-pipeline-is-inconsistent" }, { label: "When should a CRO start outbound", href: "/answers/when-should-a-cro-start-outbound" }, { label: "Biotech and life sciences", href: "/industries/biotech" }],
  },
  {
    slug: "we-look-small-next-to-global-cros",
    audience: "life-science",
    dateModified: "2026-09-04",
    title: "We Look Small Next to the Global CROs. Differentiating",
    metaDescription: "You lose deals to firms ten times your size and believe it is because you are small. It is because your site says flexible, high quality, and client focused. What a differentiator actually looks like.",
    eyebrow: "Problem · Life science",
    h1: "We keep losing to bigger CROs and we think it is because we look small.",
    lead: "A sponsor compares you to a global CRO and picks the global CRO, and the conclusion is that size won. Corstrate's 2026 review of small CRO business development finds most small CROs describe themselves as flexible, high quality, and client focused, and notes that those are not differentiators because every competitor says them too. The sponsor did not choose size. The sponsor chose the firm whose website answered the question.",
    callout: {
      label: "Where this lives",
      body: "Baseline at $2,500 a month builds the pages that carry the technical answer: model types, applications, methods, turnaround, validation. The brand and design work that makes a $5 million firm read like a $50 million one is scoped inside the ramp at $15,000 to $40,000. Pricing is published.",
    },
    searchPhrases: ["small cro competing with large cros", "how to differentiate a small cro", "why do we lose to bigger competitors", "small biotech services company positioning", "compete with global cro on marketing"],
    sections: [
      { h2: "What the sponsor actually compared", body: [
        "Two websites, at 11 at night, before anyone was emailed. BioInformatics puts 60 percent or more of the buying process before contact. The global CRO's site had a page for the exact service, a named scientific lead, published turnaround, and three case examples. Yours had a services page with four bullets and a photo of a pipette. Size never came up. Specificity did.",
      ]},
      { h2: "What a differentiator looks like on a page", body: [
        "A number: 14 day turnaround where the category runs 30. A named person: the PhD who runs the program, with a photo and a publication list. A method: the targeting strategy you use and why, with the failure mode it avoids. A result with a baseline: what happened for a named client, over what window, measured how. A price or a range. Any one of those beats flexible, high quality, and client focused. All five make you the obvious choice for the sponsors you actually fit, and visibly the wrong choice for the ones you do not, which is the point.",
      ]},
      { h2: "Own the specific searches the big firms ignore", body: [
        "A global CRO has one page about your specialty because it has 200 specialties. You can have 40 pages about it: each model type, each application, each species, each method. Researchers search specifically, AI engines cite the page that answers one question completely, and specific pages win. For one life science client, that architecture moved average position from 16 to 10 and form fills 6.5x in eight months without a single new backlink.",
      ]},
    ],
    faqs: [
      { q: "Should we rebrand?", a: "Only if the identity signals junior work. Most small CROs need messaging and pages before a new logo. We scope identity inside pipeline engagements, not as a standalone project." },
      { q: "We cannot publish client names.", a: "Publish the method and the numbers with the client anonymized by category. A result with a baseline and a window is credible without a logo." },
      { q: "Does this work for a CRO under $2 million?", a: "It works best there. Baseline at $2,500 a month publishes one specific page a month; twelve months later you own twelve searches the global firms never bothered with." },
    ],
    related: [{ label: "Brand and design", href: "/design-brand" }, { label: "Biotech and life sciences", href: "/industries/biotech" }, { label: "How to market a CRO", href: "/field-notes/how-to-market-a-cro-without-a-sales-team" }],
  },

  // HEALTHCARE
  {
    slug: "practice-depends-on-two-referring-physicians",
    audience: "healthcare",
    dateModified: "2026-09-04",
    title: "Practice Depends on Two Referring Physicians: The Fix",
    metaDescription: "Referrals and word of mouth are 80 to 90 percent of new patients for specialists, and one retirement or hospital acquisition removes a third of next year. How to treat referring physicians as an outbound market.",
    eyebrow: "Problem · Healthcare",
    h1: "Most of our new patients come from two referring physicians, and one is retiring.",
    lead: "Physicians Practice puts referring physicians and word of mouth at 80 to 90 percent of new patients for specialty practices. That is not a marketing channel. It is a dependency, and it breaks when a referrer retires, when a hospital system employs them and points referrals inward, or when their front desk changes. Referring physicians are a market. Treat them like one.",
    callout: {
      label: "Where this lives",
      body: "Kinetic at $10,000 a month includes one outbound seat working a list of the practices whose patients you want, with a monthly meeting number in writing. Catalyst builds the clinician forward pages and outcome data the referral coordinator will look for first. Pricing is published.",
    },
    searchPhrases: ["practice relies on few referring physicians", "how to get more physician referrals", "referring physician retiring lost referrals", "physician referral marketing specialty practice", "hospital system taking our referrals"],
    sections: [
      { h2: "Why the referral base erodes", body: [
        "Physicians Practice lists the causes: leadership changes at the referring practice, front office turnover, hospital systems employing physicians with top down referral loyalty, and referrers who switch without a conversation. None of those are about your outcomes. A practice with 40 percent of new patients from two referrers is one retirement away from a bad year, and the year arrives with no notice.",
      ]},
      { h2: "Run referring physicians as an outbound market", body: [
        "Build the list: every practice within your referral radius whose patients you want, by specialty, with the referral coordinator's name. Write the sequence: the condition, the outcome data, the turnaround from referral to first visit, and a scheduled call. Work it with one seat across email, phone, and a visit where it earns one. Confirm every meeting. Report on new referring practices activated per month, which is the meeting number for a practice.",
        "The site has to carry its half first. When the coordinator looks you up, they need clinician forward pages, outcome data, and a referral path that takes one click. A brochure site turns a warm call into silence.",
      ]},
      { h2: "Add the channel that does not depend on anyone", body: [
        "Patients search the symptom before the practice. A service line hub with spoke pages for symptoms, treatment, recovery, and referral, matched to a Google Ads campaign ad group by ad group, produces patients who chose you directly. For one concussion program that was a seven page hub built ad group to page, with HIPAA covered intake behind it. Direct patient demand is the channel a retiring physician cannot take with them.",
      ]},
    ],
    faqs: [
      { q: "Is outbound to physicians appropriate?", a: "Physician liaison programs are standard at hospital systems, which is exactly how they take your referrals. An independent practice running one well is competing on equal terms." },
      { q: "What does a referral coordinator respond to?", a: "Outcome data, access, and speed: how fast their patient is seen and how the report gets back. The sequence leads with those three." },
      { q: "How is this HIPAA safe?", a: "Outreach to practices contains no patient information. Intake from the patients it produces runs through the BAA covered form and call stack." },
    ],
    related: [{ label: "More referrals from physicians", href: "/answers/how-does-a-practice-get-more-referrals-from-physicians" }, { label: "Healthcare", href: "/industries/healthcare" }, { label: "Appointment setting", href: "/outbound-appointment-setting" }],
  },
  {
    slug: "new-service-line-is-not-booking",
    audience: "healthcare",
    dateModified: "2026-09-04",
    title: "New Service Line Is Not Booking Patients: Service Line SEO",
    metaDescription: "You added a program, trained the staff, bought the equipment, and the schedule is empty. Why a paragraph on the services page cannot fill a service line, and the seven page hub that does.",
    eyebrow: "Problem · Healthcare",
    h1: "We launched a new program and nobody is booking it.",
    lead: "The equipment is paid for, the clinician is trained, the front desk knows the script, and the schedule is empty. The program exists as one paragraph on the services page and one social post from launch week. Patients do not search for programs. They search for symptoms, and the practice that answers the symptom question gets the booking.",
    callout: {
      label: "Where this lives",
      body: "Catalyst at $5,000 a month plus ad spend builds the service line hub and the matching Google Ads campaign, with the HIPAA form and call stack add on at $750 so intake is covered before the first ad runs. Pricing is published.",
    },
    searchPhrases: ["new service line not getting patients", "how to market a new medical program", "service line marketing for practices", "launched new treatment no patients booking", "service line seo healthcare"],
    sections: [
      { h2: "Patients search the symptom, not the program", body: [
        "Nobody types the name of your program. They type the headache that will not go away, the question about whether they need to see someone, the treatment a friend mentioned. A single paragraph on a services page ranks for nothing and answers none of those. The practice down the road with a page for each question is the one that shows up, and the one that shows up gets the appointment.",
      ]},
      { h2: "The hub and spoke that fills a service line", body: [
        "One hub page for the program. Spoke pages for the symptoms, the conditions, the treatment, recovery, what to expect at the first visit, and the referral path for other physicians. Each spoke answers its question in the first 40 words, carries schema, and points to a covered intake form. A Google Ads campaign matched ad group to page, so a search for the symptom lands on the symptom page and not on the homepage. For one concussion program that was a seven page hub with compliant intake from form to inbox, and it turned a service line into an acquisition system.",
      ]},
      { h2: "What the first 90 days look like", body: [
        "Weeks one and two: the BAA covered form and call stack, consent language, and the content calendar. Weeks three to six: the hub and spokes live, the campaign built ad group to page. Weeks seven to twelve: campaign read weekly by a person, negatives maintained, and a stable cost per booked consultation by day 90. Organic growth on the spoke pages compounds after. If the program makes an outcome claim, the medical review gate sits between draft and publish.",
      ]},
    ],
    faqs: [
      { q: "What if the program is a restricted category for ads?", a: "We scope certification requirements, including LegitScript, before committing to numbers. Some categories take weeks to certify and the content system runs while that happens." },
      { q: "How much ad spend does a service line need?", a: "$3,000 a month is the floor for one campaign against commercial intent terms in one market. Multi location groups run $10,000 and up." },
      { q: "Can this work for a self pay program?", a: "Self pay programs are the best fit, because the patient is choosing and searching rather than being assigned. Publish the price and the page converts harder." },
    ],
    related: [{ label: "What is service line SEO", href: "/answers/what-is-service-line-seo" }, { label: "Healthcare", href: "/industries/healthcare" }, { label: "Google Ads", href: "/google-ads" }],
  },
  {
    slug: "google-ads-will-not-run-our-healthcare-ads",
    audience: "healthcare",
    dateModified: "2026-09-04",
    title: "Google Will Not Run Our Healthcare Ads: Certification",
    metaDescription: "Ads disapproved, account limited, an agency that cannot explain why. Which healthcare categories need LegitScript or policy certification, how long it takes, and what runs while you wait.",
    eyebrow: "Problem · Healthcare",
    h1: "Google keeps disapproving our ads and our agency cannot tell us why.",
    lead: "The campaign was built, the budget was set, and the ads sit in disapproved with a policy label nobody on your side understands. Some healthcare categories require third party certification before Google or Meta will serve a single ad, the application takes weeks, and an agency that has never carried an account through it will stall for months. This is a known process with known steps.",
    callout: {
      label: "Where this lives",
      body: "Catalyst at $5,000 a month runs the campaign once certified, and the content system runs while certification is pending. We have carried accounts through LegitScript scoped programs and policy constrained categories. Category rules are scoped before we commit to any number. Pricing is published.",
    },
    searchPhrases: ["google ads disapproved healthcare", "legitscript certification for google ads", "healthcare ad account suspended", "restricted medical content google ads policy", "addiction treatment ads certification"],
    sections: [
      { h2: "Which categories need certification", body: [
        "LegitScript certification is required by Google and Meta before running ads in restricted healthcare categories including addiction treatment and certain telehealth and pharmacy services. Other categories carry policy restrictions on claims, targeting, or landing page content without a formal certification. The first step is naming your category precisely, because the fix for a disapproval in one is different from the fix in another.",
      ]},
      { h2: "What the process actually takes", body: [
        "Weeks, when someone who has done it runs it. Months, when nobody has. The application asks for licensing, ownership, policies, and landing page details, and a single mismatch between the site and the application restarts the clock. Ask any vendor which accounts they have carried through certification, by name. An agency that answers with a category is guessing.",
      ]},
      { h2: "What runs while you wait", body: [
        "Search does not stop. The service line pages, the symptom spokes, the covered intake, and the content cadence all build organic demand that does not need an ad account, and they are what the ad campaign will land on once approved. A practice that spends the certification window building the hub launches ads into pages that convert, instead of launching ads into a homepage and wondering why cost per lead is high.",
      ]},
    ],
    faqs: [
      { q: "Can you get a suspended account reinstated?", a: "Often, when the suspension is a policy mismatch rather than a repeated violation. We have resolved certification and policy issues that had stalled other agencies. We scope it before promising it." },
      { q: "Does the landing page matter for approval?", a: "It matters as much as the ad. Claims, consent language, and covered intake on the page are part of the review. We build the page and the campaign as one system." },
      { q: "What about Meta?", a: "Same certification in restricted categories, plus the HIPAA problem: no pixel on a page where a patient can book. Tracking runs server side from a covered system." },
    ],
    related: [{ label: "What is LegitScript certification", href: "/answers/what-is-legitscript-certification" }, { label: "Google Ads", href: "/google-ads" }, { label: "HIPAA compliant lead generation", href: "/field-notes/hipaa-compliant-lead-generation" }],
  },
  {
    slug: "worried-our-forms-and-pixels-violate-hipaa",
    audience: "healthcare",
    dateModified: "2026-09-04",
    title: "Worried Your Web Forms and Pixels Violate HIPAA? Check",
    metaDescription: "A form builder on a treatment page, a Meta pixel on the thank you page, call recording with no consent. What is PHI on a marketing site, what the 2024 ruling changed, and the covered stack.",
    eyebrow: "Problem · Healthcare",
    h1: "We think our website forms and tracking might be violating HIPAA.",
    lead: "You are probably right. A name plus a condition or a treatment request is protected health information, and once a covered entity collects it, every system that touches it needs a business associate agreement: the form tool, the email that delivers it, the CRM, and the call recording vendor. Most consumer form builders and every ad pixel will not sign one. The settlements over exactly this ran $6.6 million to $18.4 million.",
    callout: {
      label: "Where this lives",
      body: "The HIPAA form and call stack add on at $750 a month on any tier: BAA covered forms, call tracking with spoken consent, consent language, server side conversion tracking, and no third party pixels on any page where a patient can book. Pricing is published.",
    },
    searchPhrases: ["is my website contact form hipaa compliant", "meta pixel hipaa violation medical practice", "hipaa compliant web forms for doctors", "google analytics hipaa medical website", "call tracking hipaa consent"],
    sections: [
      { h2: "What counts as PHI on your site", body: [
        "A name plus a condition. A phone number plus the treatment page it was submitted from. An email address on a request for a knee replacement consult. Each is PHI the moment it is submitted. A Calendly or Typeform embedded on a treatment page with no BAA, a Meta pixel firing on the thank you page after a consult request, call recording with no spoken consent, and a CRM full of conditions because it was just marketing: each is fixable in a week, and each is a settlement waiting for a plaintiff's firm.",
      ]},
      { h2: "What the 2024 ruling changed and what it did not", body: [
        "On June 20, 2024, in American Hospital Association v. Becerra, a federal court vacated the part of HHS guidance that treated a pixel connecting an IP address to a public condition page as PHI, and HHS dropped its appeal in August 2024. The rest stands: tracking on authenticated pages, portals, and scheduling flows is still PHI, and sharing it with a vendor that has no BAA is still a violation. The ruling made pixels arguable on a blog post. It did not make them safe on a booking page.",
      ]},
      { h2: "The covered stack", body: [
        "Forms that post to a BAA covered backend, not to a form builder's servers. Notification email through a provider under BAA, with the contents in the secured system and only a link in the email. Call tracking and recording from a vendor that signs a BAA, with consent spoken before recording. Consent text on every form. No third party pixels on any page where a patient can book, request, or log in. Conversion tracking server side, so the ad platform learns a conversion happened and nothing about who. You still get cost per booked consultation by campaign.",
      ]},
    ],
    faqs: [
      { q: "Do we lose ad performance without the pixel?", a: "You lose remarketing lists built from patients, which you should not have. Server side conversions still report cost per booked consultation by campaign, which is the number that matters." },
      { q: "Can you audit what is firing on our site now?", a: "Send the URL of your best converting landing page. We can tell you in ten minutes what is firing on it and which vendors would need a BAA." },
      { q: "Is a HIPAA compliant form builder enough?", a: "Only if the email, the CRM, and the call vendor are covered too. PHI is exposed at the weakest link, not the first one." },
    ],
    related: [{ label: "HIPAA compliant lead generation", href: "/field-notes/hipaa-compliant-lead-generation" }, { label: "Is a contact form HIPAA compliant", href: "/answers/is-a-website-contact-form-hipaa-compliant" }, { label: "Can a practice use the Meta pixel", href: "/answers/can-a-medical-practice-use-the-meta-pixel" }],
  },
  {
    slug: "web-leads-not-turning-into-appointments",
    audience: "healthcare",
    dateModified: "2026-09-04",
    title: "Web Leads Not Turning Into Appointments: Front Desk Fix",
    metaDescription: "The ads produce form fills and calls. The schedule does not move. Where patient inquiries die between the website and the front desk, and the response standard that fixes it in a week.",
    eyebrow: "Problem · Healthcare",
    h1: "We get web inquiries and calls, and they are not becoming appointments.",
    lead: "The campaign report says 60 inquiries. The schedule shows nine new patients. The other 51 called during lunch, filled out a form that went to a shared inbox, or left a voicemail that was returned two days later after they had booked elsewhere. For a practice, the seam between marketing and the front desk is where most of the ad budget dies.",
    callout: {
      label: "Where this lives",
      body: "Catalyst at $5,000 a month includes lead follow up within one business day and a written sequence for web inquiries. The HIPAA form and call stack at $750 adds call tracking with consent so missed calls are visible. The lead handoff runbook is taught in the Protocol. Pricing is published.",
    },
    searchPhrases: ["web leads not converting to appointments medical practice", "front desk missing new patient calls", "patient inquiry follow up process", "improve new patient conversion rate", "missed calls medical office losing patients"],
    sections: [
      { h2: "Find where the inquiries die", body: [
        "Turn on call tracking with spoken consent for 30 days and read the report. Practices routinely find 20 to 40 percent of new patient calls go to voicemail or ring out, most during lunch and after 4 p.m. Then match form submissions to first contact times. A form that waits until the next morning has already lost a share of patients to the practice that answered in five minutes. Neither number is about the ads.",
      ]},
      { h2: "The response standard for a practice", body: [
        "Every web inquiry gets a call within one hour during business hours and a text or email inside 15 minutes confirming it was received. Every missed call gets a callback inside 30 minutes. One person owns the queue during each shift and it is visible. A written three touch sequence over five business days for anyone not reached. That is the whole runbook. It fits on one page and it usually adds more new patients in a month than the next $5,000 of ad spend.",
      ]},
      { h2: "Make the site do half the work", body: [
        "Publish the first visit process, the insurance list, and the price for self pay services, so the inquiry arrives ready to book instead of ready to ask. Put online scheduling behind a covered form for the service lines where it fits. Ask for the phone number and the best time to call, and nothing else on the first step. One client's request form went to a single field and demo requests rose 5.8x; the same principle holds for a consult request.",
      ]},
    ],
    faqs: [
      { q: "Can you answer the calls for us?", a: "On Catalyst and Kinetic our team works web inquiries within a business day and books the consult. Phone answering stays with your front desk or a covered answering service, and we set the standard with them." },
      { q: "How do we track this under HIPAA?", a: "Call tracking from a vendor under BAA with consent spoken before recording, and forms posting to a covered backend. The reports show timing and outcome, not clinical detail." },
      { q: "What if the front desk pushes back?", a: "Show them the missed call report. Most front desks are relieved to have a standard and a queue instead of a shared inbox nobody owns." },
    ],
    related: [{ label: "Leads come in and nobody follows up", href: "/problems/leads-come-in-but-nobody-follows-up" }, { label: "Healthcare", href: "/industries/healthcare" }, { label: "Protocol", href: "/protocol" }],
  },
  {
    slug: "multi-location-group-uneven-lead-flow",
    audience: "healthcare",
    dateModified: "2026-09-04",
    title: "Multi Location Group With Uneven Lead Flow by Location",
    metaDescription: "One location is booked six weeks out and another is half empty. Why one campaign and one site cannot balance a group, and the per location page, campaign, and report that can.",
    eyebrow: "Problem · Healthcare",
    h1: "Our flagship location is full and the other three are half empty.",
    lead: "The group runs one website, one Google Ads campaign, and one report, and the leads go where the leads have always gone: the location with the original physician and the strongest reviews. The other locations get the overflow, which is not a marketing strategy. Each location is its own market and needs its own pages, its own campaign geography, and its own number.",
    callout: {
      label: "Where this lives",
      body: "Kinetic at $10,000 a month runs multiple Google Ads campaigns with A/B testing and multiple landing pages, one per location and service line, with a weekly call. Groups treating each location as a brand run Critical Mass from $25,000, per brand. Pricing is published.",
    },
    searchPhrases: ["multi location medical practice marketing", "uneven patient volume across locations", "location pages for medical group seo", "google ads per location healthcare", "how to fill a new practice location"],
    sections: [
      { h2: "Why one campaign cannot balance a group", body: [
        "A single campaign spends where clicks are cheapest and conversions are highest, which is the flagship's geography and the flagship's reviews. The new location gets fewer impressions, a worse quality score, and a landing page that lists it fourth. Google Business Profiles compound the effect: the flagship has 400 reviews and the new site has 12, so the map pack sends everyone to the flagship. Nothing in that system is trying to fill location three.",
      ]},
      { h2: "One page, one campaign, one number per location", body: [
        "A location page for each site with its providers, its services, its parking, and its schema, plus service line spokes that name the town. A campaign per location with its own geography, budget, and negatives, landing on that location's pages. A review velocity system per location so the new site closes the gap. And a report with one row per location: inquiries, booked consults, cost per consult. When location three's number is visible every week, location three fills.",
      ]},
      { h2: "Use the flagship's overflow deliberately", body: [
        "When the flagship is booked six weeks out, the front desk script offers the nearest location with an appointment this week, and the site shows real availability by location where the scheduling system allows it. That alone shifts 10 to 20 percent of new patients in most groups, at no ad cost. Then TV: streaming buys by ZIP code around the under filled locations, on Critical Mass, make the new site the one homeowners in that town have seen on screen.",
      ]},
    ],
    faqs: [
      { q: "Do we need a separate website per location?", a: "No. One site with one real page per location and per service line, each with local schema. Separate sites only when the locations are separate brands." },
      { q: "How much budget per location?", a: "$3,000 a month per campaign is the floor for stable reading. A four location group typically runs $12,000 to $20,000 in spend plus the tier fee." },
      { q: "Can outbound help a location?", a: "Yes. A seat working referring physicians within that location's radius fills a specialty site faster than ads alone. That is the Kinetic seat, pointed at one geography." },
    ],
    related: [{ label: "Healthcare", href: "/industries/healthcare" }, { label: "Google Ads", href: "/google-ads" }, { label: "TV and CTV", href: "/tv-ctv-advertising" }],
  },
  {
    slug: "competitor-practice-outranks-us-in-the-map-pack",
    audience: "healthcare",
    dateModified: "2026-09-04",
    title: "Competitor Practice Outranks Us in the Google Map Pack",
    metaDescription: "A newer practice with worse outcomes shows up first when patients search your specialty and town. What the map pack actually ranks on, the review velocity system, and the local pages that support it.",
    eyebrow: "Problem · Healthcare",
    h1: "A newer practice shows up above us on Google Maps and we do better work.",
    lead: "Patients search the specialty and the town, and three practices appear on the map before any website link. One of them is you, or none of them is, and a practice that opened two years ago sits at the top. The map pack does not rank outcomes. It ranks proximity, relevance, and prominence, and prominence is mostly reviews, review recency, and the pages on your site that name the town and the service.",
    callout: {
      label: "Where this lives",
      body: "Catalyst at $5,000 a month builds the local service pages and runs the review velocity system alongside the campaign. Google Business Profile discipline is part of the ramp on any tier for a practice. Pricing is published.",
    },
    searchPhrases: ["competitor outranks us on google maps", "how to rank higher in google map pack medical practice", "get more google reviews for doctors office", "local seo for medical practice", "google business profile optimization healthcare"],
    sections: [
      { h2: "What the map pack ranks on", body: [
        "Proximity to the searcher, which you cannot change. Relevance, which is whether your profile and your site name the exact service and town the patient typed. Prominence, which is review count, review recency, review response, and the authority of the pages behind the profile. A practice with 40 reviews averaging one a month and a site with one services page loses to a practice with 300 reviews arriving weekly and a page per service line per town, whatever the outcomes.",
      ]},
      { h2: "The review velocity system", body: [
        "Ask every patient at checkout, by text, with a direct link, the same day. Assign one person per location to send it and one to respond to every review within 48 hours, including the bad ones. Track weekly count per location. Practices that go from ad hoc to systematic typically move from one or two reviews a month to eight to fifteen, and the map position follows within a quarter. Never incentivize, never gate, never filter; the platforms detect all three and the penalty is worse than the problem.",
      ]},
      { h2: "The pages behind the profile", body: [
        "A Google Business Profile with every service listed, categories set precisely, photos of the actual office, and posts on a cadence. On the site, one page per service line that names the town, with clinician forward content, structured data, and the covered intake form. The profile links to the matching page, not the homepage. That relevance signal is what a newer practice with a modern site has and a better practice with a 2016 site does not.",
      ]},
    ],
    faqs: [
      { q: "Can we respond to reviews under HIPAA?", a: "Yes, without confirming the reviewer was a patient or discussing care. A response template that thanks, invites a call, and says nothing clinical is part of the runbook." },
      { q: "How long until the map position moves?", a: "One quarter of systematic review velocity plus local pages, in most markets. Dense urban specialties take longer; suburban ones move faster." },
      { q: "Should we buy a local SEO package?", a: "Local packages sell citations and directory listings, which matter less every year. Reviews, response, and local pages are the work, and they come with any tier for a practice." },
    ],
    related: [{ label: "Healthcare", href: "/industries/healthcare" }, { label: "Home services", href: "/industries/home-services" }, { label: "Long Island", href: "/long-island" }],
  },
  {
    slug: "compliance-says-no-to-every-marketing-idea",
    audience: "healthcare",
    dateModified: "2026-09-04",
    title: "Compliance Says No to Every Marketing Idea: A Workable Gate",
    metaDescription: "Legal and compliance block every campaign, so the practice or brand publishes nothing. How to separate what needs review from what does not, and run a weekly gate that says yes on schedule.",
    eyebrow: "Problem · Healthcare",
    h1: "Our compliance officer says no to everything, so we publish nothing.",
    lead: "Every idea goes to compliance and compliance says no, or says maybe and never says yes. The result is a practice or a healthcare brand with a website from 2019, a blog with three posts, and a competitor who publishes weekly. Compliance is not the problem. A workflow that sends whole campaigns to a busy person with no rules to apply is. Give them rules and a batch, and the answer becomes yes on Wednesday.",
    callout: {
      label: "Where this lives",
      body: "The MLR review gate add on, from $500 a month plus setup, builds the claim library, the weekly batch, and the sign off log around a reviewer you name. The HIPAA form and call stack at $750 covers the intake side. Both run on any tier. Pricing is published.",
    },
    searchPhrases: ["compliance blocking healthcare marketing", "how to market a medical practice compliantly", "legal review slowing marketing healthcare", "compliant content workflow for healthcare brand", "medical marketing claims approval process"],
    sections: [
      { h2: "Separate what needs review from what does not", body: [
        "A clinician profile, a hiring post, a photo of the new office, a conference recap, and an explanation of what to expect at a first visit make no clinical claim and need no medical review. A statement about outcomes, efficacy, safety, or comparison to another treatment does. In most practices, 80 percent of what should be published falls in the first group and has been blocked by association with the second. Write the two lists down and compliance will agree with them.",
      ]},
      { h2: "Give the reviewer rules instead of drafts", body: [
        "A claim library: every outcome, safety, or efficacy statement the practice or brand is allowed to make, with its source, approved once. Content written from the library, so most of a piece is pre approved language. Only new claims flagged, with the reference attached, in one weekly batch. A sign off log with the reviewer's name, date, and version. The reviewer answers one question per claim: approved, revised, or cut. One hour a week covers a newsletter, a post, and a month of social.",
      ]},
      { h2: "Cover the intake side once, so it stops coming up", body: [
        "Half of what compliance blocks is not the content. It is the form the content points to, the pixel on the page, the call recording with no consent. Fix the stack once: BAA covered forms, covered email, call tracking with spoken consent, no pixels on booking pages, server side conversion tracking. Compliance signs off on the stack one time, and every future campaign lands on infrastructure that is already approved.",
      ]},
    ],
    faqs: [
      { q: "Our compliance officer is not a clinician. Who reviews claims?", a: "A named reviewer with an MD or PhD credential who is accountable to you. Compliance owns the process and the log; the clinician owns the claim. Both sign." },
      { q: "Can we advertise outcomes at all?", a: "Supported outcomes with fair balance, through the gate, in most categories. Some categories restrict further and we scope those before committing to a number." },
      { q: "Does this apply to a small practice?", a: "It applies more. A small practice cannot afford a committee and cannot afford a settlement. One reviewer, one library, one hour a week." },
    ],
    related: [{ label: "MLR review workflow", href: "/field-notes/mlr-review-for-marketing-content" }, { label: "Worried about HIPAA on your site", href: "/problems/worried-our-forms-and-pixels-violate-hipaa" }, { label: "Healthcare", href: "/industries/healthcare" }],
  },

  // STARTUPS
  {
    slug: "need-pipeline-before-the-first-sales-hire",
    audience: "startup",
    dateModified: "2026-09-04",
    title: "Need Pipeline Before the First Sales Hire: What to Build",
    metaDescription: "The board wants top of funnel before it funds the bottom. What to build before hiring an SDR who ramps for four months and leaves in fourteen, priced for a seed or Series A budget.",
    eyebrow: "Problem · Startups",
    h1: "We need a pipeline before we can justify a sales hire.",
    lead: "You have a product, a runway, and a board that wants to see the top of the funnel move before it funds the bottom. The conventional answer is to hire an SDR. The SDR inherits an empty demand environment, ramps for four months, and leaves in fourteen. Build the environment first, at a price that fits the model, and hire the closer into a full calendar.",
    callout: {
      label: "Where this lives",
      body: "Kinetic at $10,000 a month plus ad spend replaces the first marketing hire and the first SDR: the site, the content, multiple campaigns, and one outbound seat with a monthly meeting number you can paste into the board update. Pricing is published so the cost line is in the model from day one.",
    },
    searchPhrases: ["how to build pipeline before hiring sales", "startup sales pipeline before first sdr", "outsourced sdr for seed stage startup", "when to hire first salesperson startup", "series a pipeline generation"],
    sections: [
      { h2: "Why the SDR hire fails at this stage", body: [
        "An SDR loads to $70,000 to $90,000, ramps three to four months, and average tenure sits well under two years. They arrive to no list, no sequences, a website that describes features, and no content to send after a call. They spend a quarter building marketing and a quarter selling into silence, and the board sees a salary line with no pipeline line. Then you start over, with the same empty room.",
      ]},
      { h2: "What to build, in order", body: [
        "First, a site that says something a buyer can verify: the problem, the price or a range, the proof, the people. Second, one page per question your buyers ask, so the prospect who looks you up finds an answer rather than a mission statement. Third, one Google Ads campaign and a landing page per audience, read weekly by a person. Fourth, a list built from real data and an outbound seat working it with a meeting number in writing. Each step makes the next cheaper, and all four together are what the future sales hire will need on day one.",
      ]},
      { h2: "Rent the seat, keep the close", body: [
        "The outbound seat prospects, qualifies, confirms, and briefs. The founder takes the meeting, because founder knowledge closes and prospecting wastes it. When the seat books more meetings than the founder can take, usually around $3 million to $5 million in revenue, hire an account executive who closes into a full calendar with documented runbooks. That hire works because the room is no longer empty.",
      ]},
    ],
    faqs: [
      { q: "What does the board see?", a: "A 90 day ramp with deliverables in writing: pages live, campaigns at a stated cost per lead, and at Kinetic a monthly meeting number. Paste the agreement into the update and report against it." },
      { q: "We are pre revenue. Is Kinetic too early?", a: "Yes. Kinetic needs a closer on your side. Pre revenue, Baseline at $2,500 gives the company a voice; seed with budget, Catalyst adds paid demand." },
      { q: "Can we pause between raises?", a: "After the ramp the engagement is month to month. Most startups keep Baseline running through a raise because visibility compounds and restarts slowly." },
    ],
    related: [{ label: "Startups", href: "/industries/startups" }, { label: "Show pipeline to the board", href: "/answers/how-do-i-show-pipeline-to-my-board" }, { label: "Hire or outsource, the math", href: "/field-notes/hire-salesperson-or-outsource" }],
  },
  {
    slug: "cannot-afford-a-ten-thousand-dollar-agency-retainer",
    audience: "startup",
    dateModified: "2026-09-04",
    title: "Cannot Afford a $10,000 Agency Retainer? Start Here",
    metaDescription: "Every credible agency quotes $8,500 and up. What a seed stage company can buy for $2,500 and $5,000 a month that still compounds, and why the floor moved.",
    eyebrow: "Problem · Startups",
    h1: "Every agency we talk to starts at $10,000 a month and we do not have it.",
    lead: "The full service floor in this category was $8,500 a month for years, ours included. A seed stage company cannot put that in the model, so it hires a freelancer for the blog, another for the ads, and a founder's cousin for social, and owns every seam between them. The floor moved. Here is what $2,500 and $5,000 buy when the same team that runs the $25,000 engagement runs them.",
    callout: {
      label: "Where this lives",
      body: "Baseline at $2,500 a month: a newsletter, a post written to be found and cited, eight social posts, and a one page report. Catalyst at $5,000 plus ad spend: content doubled, one Google Ads campaign, a landing page, lead follow up within a business day, a monthly call. Same team as Kinetic. Pricing is published.",
    },
    searchPhrases: ["affordable marketing agency for startups", "marketing agency under $5000 a month", "seed stage marketing budget", "cheap b2b marketing that works", "what can I get for $2500 a month marketing"],
    sections: [
      { h2: "Why the floor could move", body: [
        "AI runs scheduling, deployment, data collection, research, and reporting on every account. Humans create, design, review, test, and engage. You pay for judgment, not for hours spent scheduling posts. That split is why a tier can start at $2,500 instead of $8,500 without a junior tier of staff behind the lower price. Baseline buys fewer steps of the system than Kinetic, not a different team.",
      ]},
      { h2: "What $2,500 actually produces", body: [
        "One page a month that answers a question your buyers type, with the answer in the first 40 words, one number a reader can quote, and schema so search and AI engines can name the entity. A newsletter that repeats the answer to your own list. Eight social posts from the founder's account, which reaches several times what a company page does in B2B. Twelve months later you own twelve searches and a list that opens your email. That is the demand environment the eventual hire, or the eventual Kinetic upgrade, lands in.",
      ]},
      { h2: "When $5,000 is the right number", body: [
        "When there is budget for paid demand and a closer to take the calls it produces. Catalyst adds one Google Ads campaign against commercial intent terms, a landing page built for the query, and a person working every lead within one business day. $3,000 a month in spend is the floor for stable reading. A seed company at $5,000 plus $3,000 in spend has content, paid demand, and follow up for less than half a junior marketing hire, with a 90 day number in writing.",
      ]},
    ],
    faqs: [
      { q: "Is Baseline just a blog package?", a: "It is the content step of the same six step system, run by the same team, on the same stack. The pages are built to be cited and to become the landing pages when you add ads." },
      { q: "Can we upgrade later without starting over?", a: "Up at any time. Everything built on Baseline is the foundation Catalyst and Kinetic run on, because the team that built it is the team that runs them." },
      { q: "What about the website?", a: "Included on a 12 month term at every tier, including Baseline. Month to month, $15,000 up front. Repo and domain are yours either way." },
    ],
    related: [pricing, { label: "Baseline vs Catalyst", href: "/answers/what-is-the-difference-between-baseline-and-catalyst" }, { label: "Startups", href: "/industries/startups" }],
  },
  {
    slug: "board-wants-pipeline-numbers-we-cannot-produce",
    audience: "startup",
    dateModified: "2026-09-04",
    title: "Board Wants Pipeline Numbers You Cannot Produce Yet",
    metaDescription: "The board asks for pipeline coverage and you have a list of conversations. How to give a board a committed number before you have a sales team, and what to put in the update each month.",
    eyebrow: "Problem · Startups",
    h1: "The board wants pipeline metrics and all we have is a list of conversations.",
    lead: "The board deck has a slide titled pipeline and it contains a list of companies the founder has talked to. Investors want a number that was committed to before it was hit, a cost per meeting, and a trend. You do not have a sales team, so you cannot produce those the way a Series C company does. You can produce them another way: a 90 day ramp with deliverables in writing, reported against monthly.",
    callout: {
      label: "Where this lives",
      body: "Every tier states its deliverables in the agreement. Kinetic at $10,000 a month adds a monthly qualified meeting number in writing. Paste the agreement into the board update and report against it. Pricing is published so the cost line is already in the model.",
    },
    searchPhrases: ["how to report pipeline to board early stage", "pipeline metrics for seed stage startup", "board update sales pipeline no sales team", "pipeline coverage startup without sales", "what pipeline metrics do investors want"],
    sections: [
      { h2: "What a board actually wants to see", body: [
        "A committed number, the actual against it, and the cost per unit. Not a list of logos. The number can be qualified meetings held, booked demos, or cost per booked consultation depending on the business, but it has to be stated before the month starts. A founder who writes down twelve meetings and delivers nine has a pipeline conversation. A founder with a list of 30 companies has a hope conversation.",
      ]},
      { h2: "How to get a committed number without a sales team", body: [
        "Rent the function that produces it. The 90 day ramp on any tier states deliverables in writing: pages live by week six, campaigns at a stated cost per lead by week eight, and on Kinetic a monthly qualified meeting number set against your market size, offer, and deal value. Report each month with three lines: committed, actual, cost per meeting. By month four there is a trend, and by month six a coverage ratio, which is the slide the board wanted.",
      ]},
      { h2: "What goes in the update", body: [
        "Meetings committed and held, with the definition of qualified stated once. Cost per meeting including fees and spend. Pipeline created from those meetings, in dollars, with stage. Source mix: inbound content, paid, outbound. One sentence on what changed and what will change next month. Our case study clients crossed 5x to 7x their prior monthly lead average in month five against a six month baseline, and we publish the method because a board will ask how the number was computed.",
      ]},
    ],
    faqs: [
      { q: "What if we miss the number?", a: "The engagement is month to month after the ramp. A written number you missed is still a better board conversation than no number, and the review at day 90 says what changes." },
      { q: "Can you present to the board?", a: "On Critical Mass the quarterly growth review is board ready and we walk through it. On other tiers the one page report is written to be pasted." },
      { q: "Do investors accept outsourced pipeline?", a: "Investors accept a committed number, a cost per meeting, and a trend. How it is staffed matters less than whether it is written down." },
    ],
    related: [{ label: "Show pipeline to the board", href: "/answers/how-do-i-show-pipeline-to-my-board" }, { label: "Startups", href: "/industries/startups" }, { label: "Results and method", href: "/results" }],
  },
  {
    slug: "engineers-do-not-want-to-own-the-marketing-site",
    audience: "startup",
    dateModified: "2026-09-04",
    title: "Engineers Do Not Want to Own the Marketing Site",
    metaDescription: "Every landing page is a sprint ticket, or the site lives on a builder your engineers refuse to touch. The stack that marketing can run and engineering will not rip out, and who owns what.",
    eyebrow: "Problem · Startups",
    h1: "Our engineers refuse to touch the marketing site and marketing cannot ship without them.",
    lead: "Either the marketing site lives in the product repo and every landing page is a sprint ticket that loses to a feature, or it lives on a page builder the engineers will not go near and it loads in four seconds with the wrong schema. Both are the same problem: nobody decided who owns the site or what it runs on. Decide both, and the fight ends.",
    callout: {
      label: "Where this lives",
      body: "Every ISOVERTIC build ships on Next.js, TypeScript, and Vercel, server rendered, with content as typed data your engineers can read and marketing can edit. Included with a 12 month term or $15,000 up front month to month. Repo is yours on day one. Pricing is published.",
    },
    searchPhrases: ["who should own the marketing website engineering or marketing", "marketing site separate from product repo", "startup marketing website stack", "nextjs marketing site for startup", "engineers wont update marketing website"],
    sections: [
      { h2: "Separate the site from the product", body: [
        "The marketing site and the product are different systems with different release cadences. Put the site in its own repository on its own deployment, so a landing page ships in an afternoon without touching the product pipeline. Engineering reviews the initial build and the deploy setup once. After that, marketing ships copy and pages without a ticket, and engineering never sees a marketing PR again.",
      ]},
      { h2: "A stack engineering will not rip out", body: [
        "Next.js with TypeScript, server rendered, on Vercel, with content in typed files or Postgres. It is what your first engineering hire already knows, it renders fully for crawlers and AI engines, and it has no plugin layer to rot. Content lives in typed data files: a services file, an articles folder, a schema builder. Marketing edits copy; the type checker catches the mistakes; the build fails before the typo ships. That is the stack every build we ship uses, and the reason engineers approve it in one review.",
      ]},
      { h2: "Who owns what, written down", body: [
        "Engineering owns the deploy pipeline, the domain, and the initial review. Marketing owns every page, every word, and the publishing cadence. The growth partner, if you have one, builds inside that split and hands the repo back with the runbook for adding a page. Request any page without JavaScript and read the copy; that is the acceptance test, and it is the one most page builder sites fail.",
      ]},
    ],
    faqs: [
      { q: "Can marketing really edit a code repo?", a: "Copy lives in typed content files and markdown, not in components. A marketer edits a sentence, the preview shows it, the type check passes, it ships. Most learn it in a day." },
      { q: "What about a headless CMS?", a: "Fine when there are ten editors. For a startup with two, typed files are faster, cheaper, and version controlled for free. We add a database when the content outgrows the files." },
      { q: "Will you work with our engineers?", a: "Yes. They review the build and the deploy once. Our founder writes the build briefs our coding agents execute and speaks their language." },
    ],
    related: [{ label: "What stack should a startup website use", href: "/answers/what-stack-should-a-startup-website-use" }, { label: "Web development", href: "/web-development" }, { label: "Startups", href: "/industries/startups" }],
  },
  {
    slug: "rebrand-or-new-name-killed-the-pipeline",
    audience: "startup",
    dateModified: "2026-09-04",
    title: "Rebrand or New Name Killed Your Pipeline? Rebuilding It",
    metaDescription: "New name, new site, and inbound fell off a cliff because nothing under the old name carried over. How to run a rebrand so the pipeline runs under the new name from month two.",
    eyebrow: "Problem · Startups",
    h1: "We rebranded and the leads stopped.",
    lead: "The new name is better. The new site is prettier. And inbound dropped to a trickle, because the old name had two years of search presence and the new one has a logo. A rebrand is only finished when the pipeline runs under the new name, and most rebrands stop at the launch announcement.",
    callout: {
      label: "Where this lives",
      body: "Kinetic at $10,000 a month with a 12 month term includes the site rebuild under the new name plus the content, campaigns, and outbound seat that put a pipeline behind it. One client came through a rebrand to 5.8x the demo requests in eight months. Pricing is published.",
    },
    searchPhrases: ["rebrand lost seo traffic", "company rename leads dropped", "how to rebrand without losing pipeline", "new brand name no search presence", "post rebrand marketing plan"],
    sections: [
      { h2: "What the rebrand actually removed", body: [
        "Every page the old name ranked for, unless it was redirected one to one. Every third party mention, review, and directory listing, which now point at a name that no longer exists. Every prospect mid consideration who searched the old name and found nothing. And the muscle memory of the referral network. The new site launched with none of that, and a launch post on LinkedIn does not replace it.",
      ]},
      { h2: "Run the rebrand as a pipeline build, not a design project", body: [
        "One to one redirects from every old URL to its new equivalent, before launch. The new site rewritten around the buyer's question, not the new positioning statement: one page per question, schema on every page, a one field request form. Directory listings, reviews, and profiles updated under the new name in the first two weeks. A search campaign live at launch so the new name has demand while organic catches up. Outbound sequences that explain the name change in one line and move on. For one concussion software company, that sequence produced two of every three demo requests from organic search within eight months of the new name.",
      ]},
      { h2: "The timeline that works", body: [
        "Month one: naming, positioning, site architecture, redirect map. Month two: rebuilt site live with the reference library and the demo form. Month three: specialty campaigns live, impressions 2x the prior baseline. Month four: library indexed, impressions 3x. Month five: demo requests cross 5x the prior monthly average and hold. That is the actual timeline from the case study, and it started from a product with a different name and no search presence.",
      ]},
    ],
    faqs: [
      { q: "We already launched. Is it too late for redirects?", a: "No. Map every old URL to a new one this week. Search engines reassign authority through redirects for months after a move, and every day without them loses more." },
      { q: "Should we keep the old name anywhere?", a: "One line on the about page and in outbound: formerly known as. It catches the prospects and the search traffic still using it, without diluting the new name." },
      { q: "How long until the new name has presence?", a: "Paid gives it demand at launch. Organic under the new name showed by month three and was the majority source by month eight in the case above." },
    ],
    related: [{ label: "Kavera case study", href: "/results/kavera" }, { label: "Brand and design", href: "/design-brand" }, { label: "Web development", href: "/web-development" }],
  },
];

export const getProblem = (slug: string) => problems.find((p) => p.slug === slug);
export const problemsFor = (audience: ProblemAudience) => problems.filter((p) => p.audience === audience);
