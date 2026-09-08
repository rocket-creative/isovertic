import type { Page } from "./types";
import { biotechMolecularBiologist, industryDiscipline, industryPipelineCta } from "./voice-audit";

export const industries: Page[] = [
  {
    slug: "healthcare",
    title: "Healthcare Growth Agency for Practices | ISOVERTIC",
    dateModified: "2026-09-08",
    metaDescription: "Patient acquisition for practices and healthcare brands. HIPAA literate web, ads, and outreach from one senior team.",
    eyebrow: "Healthcare",
    h1: "The healthcare growth agency for practices that compete on more than insurance lists.",
    lead: "Healthcare marketing fails in two directions: agencies that understand ads but not compliance, and compliance minded vendors that cannot generate demand. We have shipped both sides together: service line architectures, compliant intake, certified ad accounts, and the content patients actually search before they book.",
    callout: {
      label: "Typical starting point",
      body: "Excitation with the HIPAA form and call stack add on, so every form and every recorded call is BAA covered before the first ad runs. Practices ready for outbound to referring physicians move to Amplification. Pricing is published.",
    },
    sections: [
      { h2: "Built inside the rules", body: [
        "HIPAA aware intake flows, privacy policies and notices drafted for real review, compliant email infrastructure for form handling, and ad accounts navigated through certification requirements including LegitScript scoped programs. We have untangled certification issues that stall most agencies for months.",
      ]},
      { h2: "Service line SEO that maps to how patients search", body: [
        "The proof pattern: a seven page concussion program hub covering symptoms, treatment, recovery, and referral paths, matched to a search campaign ad group by ad group. Every service line in your practice can work this way.",
      ]},
      { h2: "The trust layer", body: [
        "Patients check the practice site, the doctors, and the reviews before booking. We build clinician forward pages, structured data that earns the rich results, and the review velocity system that compounds.",
      ]},
    ],
    faqs: [
      { q: "Are you HIPAA compliant in how you handle leads?", a: "Intake flows are designed so PHI is handled by compliant infrastructure, with BAAs where required. We have implemented HIPAA compliant form delivery for client practices." },
      { q: "Can you run ads for restricted healthcare categories?", a: "We have managed certification including LegitScript and policy constrained accounts. Category rules are scoped before we commit to numbers." },
      { q: "Do you work with multi provider groups?", a: "Yes. Service line architecture scales cleanly across providers and locations." },
      { q: "What results should a practice expect?", a: "A stable cost per booked consultation by the end of the 90 day ramp, with organic service line growth compounding after." },
    ],
    related: [
      { label: "Google Ads", href: "/google-ads" },
      { label: "Web development", href: "/web-development" },
      { label: "Results", href: "/results" },
    ],
  },
  {
    slug: "biotech",
    title: "Life Science Growth Agency for Biotech and CROs | ISOVERTIC",
    dateModified: "2026-09-08",
    metaDescription: "Life science growth agency for biotech, CROs, and research tools: scientific content systems, SEO at scale, MLR review gate, and outreach to researchers.",
    eyebrow: "Life sciences",
    h1: "The life science growth agency: scientific authority, engineered into a pipeline.",
    lead: "Life science buyers are the hardest audience on the internet: technical, skeptical, and allergic to marketing voice. We have built for them at scale, including a content system of more than 100 SEO optimized pages across a 147 page sitemap for a mouse model service provider, plus an editorial researcher series engineered for backlinks from institutions.",
    callout: {
      label: "Typical starting point",
      body: "Ground State or Excitation with the MLR review gate, which routes every claim through a reviewer you name with an MD or PhD before it publishes. Labs selling to researchers add programmatic page expansion, 50 entity pages at a time. Pricing is published.",
    },
    sections: [
      { h2: "Content with technical spine", body: [
        "Pages written to the standard of readers with doctorates, structured for the long tail queries researchers actually type, from model generation methods to application areas.",
      ]},
      { h2: "Outreach to scientific buyers", body: [
        "Outbound sequences for venture backed biotech prospects and academic accounts, written in the register of the field, with triggers from funding events and publications.",
      ]},
      { h2: "The authority loop", body: [
        "Editorial spotlights earn institutional links, links lift the commercial pages, commercial pages convert the demand the content created. One system, compounding.",
      ]},
      { h2: "Does this fit you? Five questions", body: [
        "Your buyer is a scientist, a lab manager, or a procurement office that asks for a citation before a call. Your sales cycle runs six to eighteen months and your content passes through a reviewer with an MD or PhD. Your site has fewer than fifty pages a researcher could land on from a search. Your outbound today is a founder or a rep working conference badges. You need pipeline that survives the grant calendar. Four or five yes answers and Amplification with the MLR gate fits. Two or three and start with Ground State or Excitation. Fewer, and the honest answer may be a content program alone.",
      ]},
    ],
    showQuotePlaceholder: true,
    disciplineNote: biotechMolecularBiologist,
    faqs: [
      { q: "Do your writers understand the science?", a: "Content is produced inside a documented technical system with terminology controls and review gates built for life science accuracy." },
      { q: "Can you reach academic and industry buyers in one program?", a: "Yes, with separate sequences and offers per segment." },
      { q: "How do you handle long sales cycles?", a: "Pipeline programs are measured on qualified conversations and nurture coverage across the full cycle, not month one closes." },
      { q: "Do you work with CROs and service providers?", a: "That is our deepest pattern." },
    ],
    related: [
      { label: "SEO and content", href: "/seo-content" },
      { label: "Appointment setting", href: "/outbound-appointment-setting" },
      { label: "Engagement and measurement standard", href: "/resources/engagement-and-measurement-standard" },
      { label: "Results", href: "/results" },
    ],
  },
  {
    slug: "startups",
    title: "Startup Growth Agency: Pipeline Before the Hire | ISOVERTIC",
    dateModified: "2026-09-08",
    metaDescription: "Marketing and outbound for seed and Series A startups. Published pricing, a 90 day ramp, and meetings before you hire an SDR.",
    eyebrow: "Startups",
    h1: "The startup growth agency: a pipeline before the sales hire.",
    lead: "You have a product, a runway, and a board that wants to see the top of the funnel move before it funds the bottom. ISOVERTIC runs the marketing and, when you are ready, the outbound, at a price that fits a seed or Series A budget and is published so you can put it in the model.",
    callout: {
      label: "Typical starting point",
      body: "Ground State if you publish nothing yet and need the site to say something before the next raise. Excitation when there is budget for paid demand and a landing page per audience. Amplification when the board wants meetings, not traffic, and you would rather rent a seat than hire an SDR who ramps for four months and leaves in fourteen. Pricing is published.",
    },
    sections: [
      { h2: "What founders get that a freelancer cannot give them", body: [
        "One team across the site, the content, the ads, and the calls, so the objection heard on a Tuesday call is in the ad copy by Friday.",
        "A 90 day ramp with deliverables you can paste into a board update. A website build included with a 12 month term, on a stack your first engineering hire will not want to rip out.",
      ]},
      { h2: "The tier that matches the stage", body: [
        "Pre revenue, Ground State: a newsletter, a blog post, and social every month so the company has a voice before it has a sales team. Seed with a budget for demand, Excitation: one Google Ads campaign and a landing page per audience, with a human reading the account weekly. Series A with a board asking for pipeline, Amplification: an outbound seat with a meeting number in writing, multiple campaigns, and a weekly call.",
      ]},
    ],
    faqs: [
      { q: "Do we need a marketing hire first?", a: "No. Amplification replaces the first two." },
      { q: "Can we pause between raises?", a: "The term is a year, so a pause is a conversation. Paid demand can be turned down inside the term; content keeps running, because visibility compounds and restarts slowly." },
      { q: "Do you work with pre revenue companies?", a: "Yes, on Ground State and Excitation. Amplification needs a closer on your side, because we book the meeting and you take it." },
    ],
    related: [
      { label: "Pricing", href: "/pricing" },
      { label: "Appointment setting", href: "/outbound-appointment-setting" },
      { label: "Web development", href: "/web-development" },
    ],
  },
  {
    slug: "technical-b2b",
    title: "Technical B2B Growth Agency for Developer Tools | ISOVERTIC",
    dateModified: "2026-09-08",
    metaDescription: "Growth agency for developer tools, infrastructure, and technical SaaS: content engineers read, search and AI citation, paid demand, and outbound.",
    eyebrow: "Technical B2B",
    h1: "The technical B2B growth agency: for buyers who read the docs before the pitch.",
    lead: "Developer tools, infrastructure, and technical SaaS sell to people who distrust marketing on sight and decide from documentation, benchmarks, and what a peer said. We build for that reader: pages with a technical spine, search and AI citation as the distribution channel, paid search steered to qualified meetings, and outbound written by people who can read a changelog.",
    callout: {
      label: "Typical starting point",
      body: "Excitation when the site exists and paid demand does not. Amplification when the founder is still the only person booking meetings and the buying committee includes an engineering lead who has to be reached on their own terms. Pricing is published.",
    },
    sections: [
      { h2: "Build: a site an engineer will not bounce from", body: [
        "Server rendered on Next.js, schema on every page, documentation and pricing one click from anywhere. Technical buyers check the docs and the price before they read a headline, and a site that hides either loses the visit. The same stack we sell is the stack this site runs on.",
      ]},
      { h2: "Rank: content written to be cited, not skimmed", body: [
        "Comparison pages, integration pages, and how it works pages structured for the queries engineers actually type and for the AI engines that now answer them. We have published a 147 page system for a scientific audience with the same discipline; the method transfers to any reader who checks claims.",
      ]},
      { h2: "Run and book: paid demand and outbound with a technical register", body: [
        "Search campaigns steered by cost per qualified meeting rather than cost per lead, and outbound sequences that reference the prospect's stack, their last release, or the problem in their job posting. Meetings are defined in writing before the program starts.",
      ]},
      { h2: "Does this fit you? Five questions", body: [
        "Your buyer evaluates with documentation, a trial, or a benchmark before talking to sales. Your sales cycle runs one to nine months and involves an engineering decision maker. You have a founder or product lead who can explain the product and no one dedicated to prospecting. Your content today is either release notes or nothing. You need meetings inside two quarters, not a brand campaign. Four or five yes answers and Amplification fits. Two or three and start with Excitation. Fewer, and paid search alone may be the honest answer.",
      ]},
    ],
    faqs: [
      { q: "Can your writers handle developer facing content?", a: "Content is produced inside a documented technical system with terminology controls and a named reviewer. We write to the standard of the reader, and for technical products that reader is an engineer." },
      { q: "Do you run product led motions?", a: "We build the demand side: the site, the content, the search, and the outbound that gets an engineering lead into a conversation. Activation inside the product is yours." },
      { q: "How do you reach engineering decision makers with outbound?", a: "With sequences that reference something true about their stack or their last release, sent by a person who can answer a technical reply. Generic sequences to engineers get reported as spam, and we do not send them." },
      { q: "How do you measure a nine month sales cycle?", a: "Two clocks. Leading indicators every 30 days, revenue at the month that matches your cycle, written into the agreement. The standard is published." },
    ],
    related: [
      { label: "Engagement and measurement standard", href: "/resources/engagement-and-measurement-standard" },
      { label: "SEO and content", href: "/seo-content" },
      { label: "Appointment setting", href: "/outbound-appointment-setting" },
      { label: "Results", href: "/results" },
    ],
  },
  {
    slug: "professional-services",
    title: "Growth Agency for Professional Services Firms | ISOVERTIC",
    dateModified: "2026-09-08",
    metaDescription: "Lead generation and growth for consultancies, law firms, accounting firms, and agencies. Founder led positioning, content, and outbound.",
    eyebrow: "Professional services",
    h1: "The growth agency for professional services: firms sell trust, we build the evidence.",
    lead: "Professional services buyers hire people, not brochures. The firms winning in 2026 run founder forward content, publish real expertise, and back it with outbound that opens doors warmly because the diligence trail already exists. We build that whole trail.",
    callout: {
      label: "Typical starting point",
      body: "Amplification. Your buyer decides on a call, so the outbound seat and the meeting number in writing are the reason to hire us. Pricing is published.",
    },
    sections: [
      { h2: "Founder led demand", body: [
        "Positioning, ghostwritten field notes in the principal's voice, and a LinkedIn cadence built on the formats that earn reach now. Personal profiles dramatically outperform company pages in B2B, and we build the system around that fact.",
      ]},
      { h2: "Authority assets", body: [
        "The site, the case studies, the published point of view, structured so a referred prospect converts and a cold prospect warms.",
      ]},
      { h2: "Outbound that respects the room", body: [
        "Sequences aimed at the right 200 accounts rather than the easiest 20,000, with research per account and meetings qualified hard.",
      ]},
    ],
    faqs: [
      { q: "Our deals come from referrals. Why outbound?", a: "Referrals are a ceiling, not a strategy. Outbound built on authority assets extends the referral dynamic to people who have not met you yet." },
      { q: "Can you write in our partners' voices?", a: "Yes. Voice capture and approval workflows are part of the system." },
      { q: "Is this appropriate for regulated professions?", a: "We build inside advertising rules for legal, financial, and accounting professions per jurisdiction." },
      { q: "What size firm fits?", a: "Typically 5 to 100 professionals." },
    ],
    disciplineNote: industryDiscipline["professional-services"],
    pipelineCta: industryPipelineCta["professional-services"],
    related: [
      { label: "Appointment setting", href: "/outbound-appointment-setting" },
      { label: "Brand and design", href: "/design-brand" },
      { label: "Field notes", href: "/field-notes" },
    ],
  },
  {
    slug: "home-services",
    title: "Home Services Growth Agency for Trades | ISOVERTIC",
    dateModified: "2026-09-08",
    metaDescription: "Marketing and sales pipeline for HVAC, roofing, electrical, and trade companies. Local search, ads, TV, and commercial outbound from one team.",
    eyebrow: "Home services",
    h1: "The home services growth agency: own your service area like the biggest player in it.",
    lead: "The lead generation industry treats trades like a commodity: shared leads, bought lists, junior account managers. We treat a $5M contractor like a brand, because in a local market, you can be one. Local search dominance, ads run to cost per booked job, streaming TV in your zip codes, and commercial outbound for the B2B side of the book.",
    callout: {
      label: "Typical starting point",
      body: "Excitation. One Google Ads campaign to a cost per booked job, one landing page, and lead follow up within a business day. Pricing is published.",
    },
    sections: [
      { h2: "The local machine", body: [
        "Google Business Profile discipline, local service pages per town and service, review velocity, and search ads with the negatives maintained weekly. Boring, compounding, decisive.",
      ]},
      { h2: "The TV move nobody local makes", body: [
        "Streaming TV targeted to your service counties for the price of a billboard, making yours the only company in the category homeowners have seen on screen. Familiarity wins the three quote shootout.",
      ]},
      { h2: "Commercial accounts on purpose", body: [
        "Property managers, GCs, and facilities buyers reached with a real outbound program instead of waiting on bid boards.",
      ]},
    ],
    faqs: [
      { q: "Do you sell shared leads?", a: "Never. Everything we build is yours exclusively." },
      { q: "What makes you different from the trades marketing companies?", a: "Senior team, exclusive work, TV capability, and an outbound program for commercial accounts. The big trades lead vendors offer none of the four." },
      { q: "What spend does this take?", a: "Local programs typically run $7K to $20K monthly all in, scaled to service area and crew capacity." },
      { q: "Can you handle seasonality?", a: "Budgets flex by season with the demand curve of your trade." },
    ],
    related: [
      { label: "TV and CTV", href: "/tv-ctv-advertising" },
      { label: "Google Ads", href: "/google-ads" },
      { label: "Field notes", href: "/field-notes" },
    ],
  },
  {
    slug: "hospitality",
    title: "Hospitality and Venue Growth Agency | ISOVERTIC",
    dateModified: "2026-09-08",
    metaDescription: "Demand generation for venues, hospitality groups, and event businesses, from a team with real venue operating history.",
    eyebrow: "Hospitality",
    h1: "The hospitality growth agency: fill the calendar, the venue kind and the sales kind.",
    lead: "Hospitality marketing is usually pretty pictures with no pipeline behind them. We come from the operating side: venue management, wedding markets, event sales. We know the booking is won in the follow up sequence, the tour conversion, and the season pacing, not just the Instagram grid.",
    callout: {
      label: "Typical starting point",
      body: "Excitation, with the production day add on for the visuals that sell a venue. Venues running events at scale move to Amplification for outbound to planners. Pricing is published.",
    },
    sections: [
      { h2: "Demand by season", body: [
        "Search and social calibrated to booking windows, with offers built for shoulder season instead of discount panic.",
      ]},
      { h2: "The tour funnel", body: [
        "Inquiry response time, nurture sequences, and tour to contract conversion treated as the sales process it is. Most venues lose the booking in the first hour of silence.",
      ]},
      { h2: "Brand worth the price point", body: [
        "Editorial photography direction, a site that sells the experience, and collateral that lets your sales team close at full rate.",
      ]},
    ],
    faqs: [
      { q: "Do you understand venue operations?", a: "The founder has operated inside the venue and wedding market for years, including sales packaging and pricing." },
      { q: "Can you work with our existing photographer and content?", a: "Yes, with creative direction to bring it to standard." },
      { q: "What about OTAs and directories?", a: "We optimize the profiles that matter and build the direct funnel so you depend on them less every quarter." },
      { q: "Do you handle B2B events too?", a: "Corporate and social markets get separate funnels and separate sequences." },
    ],
    disciplineNote: industryDiscipline.hospitality,
    pipelineCta: industryPipelineCta.hospitality,
    related: [
      { label: "Brand and design", href: "/design-brand" },
      { label: "Google Ads", href: "/google-ads" },
      { label: "Results", href: "/results" },
    ],
  },
];

export const getIndustry = (slug: string) => industries.find((s) => s.slug === slug);
