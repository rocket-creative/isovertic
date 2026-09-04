import type { Page } from "./types";

export const services: Page[] = [
  {
    slug: "outbound-appointment-setting",
    title: "B2B Appointment Setting Services | Meetings on Your Calendar",
    metaDescription: "Outbound appointment setting run by a senior team that also builds your site and ads. Qualified meetings on your calendar with a 90 day commitment.",
    eyebrow: "Outbound",
    h1: "Appointment setting that lands on your calendar, not in a report.",
    lead: "Your sales team should spend its time in sales conversations. Ours makes sure it does. ISOVERTIC runs the entire outbound motion: list building from real data sources, multichannel sequences across email, phone, and LinkedIn, qualification against your ideal customer profile, and confirmed meetings booked directly on your calendar with context attached.",
    callout: {
      label: "Where this lives",
      body: "Kinetic includes one outbound seat with a meeting number in writing. Critical Mass runs two. Catalyst can add a seat for $4,500 a month. A conference sprint that books meetings before and at one trade show is $7,500 per event. Pricing is published.",
    },
    sections: [
      { h2: "Why most appointment setting fails before the first call", body: [
        "The list is bought, not built. The message is generic because the vendor has never seen your website or your offer. The meeting gets booked into a brand the prospect cannot verify, so half of them ghost. Converting a typical B2B prospect takes five or more follow up attempts, and no show rates above 30 percent are common when nobody runs confirmation sequences. The industry treats these as facts of life. They are symptoms of outbound run in isolation.",
      ]},
      { h2: "How we run it", body: [
        "List. We build target lists from primary data: public datasets, firmographics, technographics, and trigger events. For one healthcare revenue client we built the entire prospect universe from federal public use files before a single email was sent.",
        "Message. Sequences are written against your actual positioning, by the same team that wrote your website. The prospect who clicks through finds a site that confirms everything the email claimed. That coherence is the conversion advantage no standalone SDR shop can offer.",
        "Motion. Email, phone, and LinkedIn in coordinated cadences. Eighteen documented plays cover triggers from new executive hires to competitor weaknesses.",
        "Qualify and book. Every meeting is qualified against criteria we agree on, confirmed with nurture sequences to kill no shows, and delivered with a brief: who they are, why they took the meeting, what they care about.",
      ]},
      { h2: "The deliverable is a calendar with meetings on it", body: [
        "A stated monthly volume of qualified meetings per your tier, the full sequence library as your property, call recordings and objection intelligence fed back into your site and ads, and a 90 day ramp with the commitment in writing. We report on meetings held and pipeline created. Not dials, not opens.",
      ]},
    ],
    faqs: [
      { q: "How many meetings per month can we expect?", a: "Tier dependent and stated in writing before you sign. Volume targets are set in the 90 day ramp based on market size, offer strength, and average deal value." },
      { q: "Do you use AI SDRs?", a: "We use automation for research, list building, and sequencing. Conversations that qualify and book are run by people, because your buyers can tell the difference." },
      { q: "Do we need your other services to get appointment setting?", a: "No, but programs paired with our web and content work convert meaningfully better, because the prospect's diligence confirms the outreach instead of contradicting it." },
      { q: "Who owns the data and sequences?", a: "You do. Lists, copy, and recordings are yours from day one." },
    ],
    related: [
      { label: "How the system works", href: "/how-it-works" },
      { label: "Pricing", href: "/pricing" },
      { label: "Belkins alternative", href: "/compare/belkins-alternative" },
    ],
  },
  {
    slug: "google-ads",
    title: "Google Ads Management for Lead Generation | ISOVERTIC",
    metaDescription: "Google Ads run to a cost per meeting, not a cost per click. Senior management, healthcare and compliance literate, landing pages built in house.",
    eyebrow: "Paid search",
    h1: "Google Ads measured in meetings, not clicks.",
    lead: "Most ad accounts are graded on metrics that cannot pay your bills. We run Google Ads as one stage of a pipeline that ends in a booked sales conversation, which changes every decision upstream: keyword intent over volume, landing pages we build ourselves, and budgets steered by cost per qualified meeting.",
    callout: {
      label: "Where this lives",
      body: "Catalyst runs one campaign, built and read weekly. Kinetic runs multiple campaigns with A/B testing and multiple landing pages. A second product line is $1,000 a month as an add on. Pricing is published.",
    },
    sections: [
      { h2: "What senior management actually looks like", body: [
        "Search campaigns built on buyer intent keyword maps, not keyword dumps. Negative lists maintained weekly. Landing pages designed and shipped by our own development team, so the page matches the ad and the ad matches the offer. Conversion tracking wired to meetings booked, with offline conversion import when deals close. Monthly reporting a founder can read in two minutes.",
      ]},
      { h2: "Regulated industries are home turf", body: [
        "We run compliant healthcare campaigns and have resolved certification and policy issues that stall most agencies, including LegitScript scoped accounts and HIPAA aware intake flows. If your category has rules, we have probably already shipped inside them.",
      ]},
      { h2: "The proof pattern", body: [
        "For a concussion care program we built a seven page service architecture and the matching search campaign as one system: every ad group landed on a page written for that exact query, with compliant intake behind it. That is the difference between buying clicks and building a pipeline stage.",
      ]},
    ],
    faqs: [
      { q: "What budgets do you manage?", a: "Typically $3K to $50K monthly in spend. Below that, search rarely produces stable meeting volume; above that, we scale with structure." },
      { q: "Do you require your landing pages?", a: "No, but accounts convert better when the page and the ad are built by the same team, and ours usually are." },
      { q: "How fast until results?", a: "Stable cost per meeting typically emerges in weeks four through eight of the 90 day ramp." },
      { q: "Do you do Performance Max?", a: "Where it serves lead quality. We feed it qualified conversion signals so it optimizes toward meetings, not form spam." },
    ],
    related: [
      { label: "Healthcare industry page", href: "/industries/healthcare" },
      { label: "Pricing", href: "/pricing" },
      { label: "How it works", href: "/how-it-works" },
    ],
  },
  {
    slug: "seo-content",
    title: "SEO and Content Systems That Get You Found and Cited | ISOVERTIC",
    metaDescription: "SEO built for Google and for AI search. Content systems at scale, entity schema, and server rendered architecture from a team that ships 100 plus page builds.",
    eyebrow: "Search and content",
    h1: "Be the answer. In Google, and in the AI engines sitting in front of it.",
    lead: "Ranking is no longer the finish line. Your buyers ask ChatGPT, Perplexity, and Google's AI Overviews before they ever see a blue link, and those systems cite sites with server rendered content, entity schema, and structured answers. We build content systems that win both layers at once.",
    callout: {
      label: "Where this lives",
      body: "Every tier, starting with Baseline at $2,500 a month for a newsletter, a blog post, and eight social posts. Catalyst doubles the social. Kinetic adds the full content system and a YouTube channel. Add the MLR review gate if your content makes clinical claims. Pricing is published.",
    },
    sections: [
      { h2: "Systems, not posts", body: [
        "A blog is not a strategy. We build hub and spoke architectures where every commercial intent gets its own page, every page carries structured answers, and every article feeds a service spoke. For one life science client we built and shipped more than 100 SEO optimized pages across a 147 page sitemap, plus an editorial series engineered for backlink acquisition. That is what a content system looks like.",
      ]},
      { h2: "The technical layer most agencies skip", body: [
        "Server rendered pages that return full text to any crawler. Organization, Service, and Article schema as typed builders, not plugins. Core Web Vitals inside budget. Internal linking designed like an org chart. We know this layer matters because we have watched client side rendered sites become invisible to AI extraction while saying all the right words.",
      ]},
      { h2: "Written by people who defend every claim", body: [
        "Our content carries numbers, mechanisms, and named patterns because that is what earns citations from both editors and language models. No filler, no AI sludge, no thousand words that say nothing.",
      ]},
    ],
    faqs: [
      { q: "How long until SEO produces meetings?", a: "Commercial pages can produce in weeks when paired with ads; organic compounding typically shows from month three and accelerates after month six." },
      { q: "Do you use AI to write?", a: "We use AI in research and production tooling. Every published page is architected, edited, and fact checked by people, and reads like it." },
      { q: "What is AI search optimization?", a: "Structuring content and schema so AI engines can extract and cite you. It is built into every page we ship, not sold as an add on." },
      { q: "Do you do link building?", a: "We earn links with original data assets and editorial series rather than buying them." },
    ],
    related: [
      { label: "Web development", href: "/web-development" },
      { label: "Field notes", href: "/field-notes" },
      { label: "How it works", href: "/how-it-works" },
    ],
  },
  {
    slug: "web-development",
    title: "Web Design and Development Built to Convert | ISOVERTIC",
    metaDescription: "Conversion focused web design and development on Next.js, TypeScript, and Vercel. Server rendered, schema complete, built by the team that runs your pipeline.",
    eyebrow: "Build",
    h1: "Your website is the asset every dollar flows through. We build it like one.",
    lead: "Every ad click, every cold email reply, every referral ends up on your website doing diligence. If the site is slow, vague, or invisible to AI search, everything upstream gets more expensive. We design and build sites that close the loop: fast, server rendered, schema complete, and written to convert the traffic the rest of the system creates.",
    callout: {
      label: "Where this lives",
      body: "Landing pages are built inside the ramp on Catalyst and Kinetic. The full website build on our stack comes with a 12 month term on any tier, or $15,000 up front month to month. You own the code and the domain either way. Pricing is published.",
    },
    sections: [
      { h2: "The stack, stated plainly", body: [
        "Next.js App Router. TypeScript strict. Tailwind. Vercel. Supabase where data is needed. Server rendered output on every route, verified by the simplest test there is: request the page without JavaScript and read the copy. Most agency sites fail that test. Ours do not, and in an era where AI crawlers decide who gets cited, that is not a technical detail. It is distribution.",
      ]},
      { h2: "Designed like a publication, not a template", body: [
        "Editorial typography, structural layout, restraint. No stock photography, no template smell, nothing decorative. Design that signals senior work before a word is read, because your buyers judge in seconds.",
      ]},
      { h2: "Built by the team that has to make it perform", body: [
        "The people who build your site also run your ads and write your outbound. We feel every conversion weakness in our own numbers, which is why our pages carry proof modules, visible answers, single CTAs, and intake flows tuned for the industries we serve, including HIPAA aware healthcare intake.",
      ]},
    ],
    faqs: [
      { q: "Do you work with WordPress or Webflow?", a: "We migrate from them. New builds ship on our stack because performance, schema control, and server rendering are the point." },
      { q: "How long does a build take?", a: "A commercial site of 15 to 40 pages typically ships in 6 to 10 weeks inside the 90 day ramp, content included." },
      { q: "Do we own the code?", a: "Fully. Repo, content, and infrastructure accounts are yours." },
      { q: "Can you just do the website?", a: "Yes, though sites built as part of the full pipeline convert better because the messaging is shared with the ads and outbound from day one." },
    ],
    related: [
      { label: "SEO and content", href: "/seo-content" },
      { label: "Brand and design", href: "/design-brand" },
      { label: "How it works", href: "/how-it-works" },
    ],
  },
  {
    slug: "tv-ctv-advertising",
    title: "TV and CTV Advertising for Growing Businesses | ISOVERTIC",
    metaDescription: "Streaming and broadcast TV buying for businesses doing $1M to $20M. Creative, buying, and measurement from one team, tied to your pipeline.",
    eyebrow: "Media",
    h1: "TV is no longer above your pay grade.",
    lead: "The enterprise agencies that buy television serve enterprise budgets, so most growing companies never even price the channel. That is the opportunity. Streaming TV inventory can be bought with precision and tested with budgets in the low five figures, and a local or category audience seeing your brand on the biggest screen in the house changes how every cold email and search ad performs afterward.",
    callout: {
      label: "Where this lives",
      body: "Critical Mass, with a $25,000 monthly media minimum spent in your own accounts and an exposed versus control measurement plan in the agreement. Pricing is published.",
    },
    sections: [
      { h2: "What we buy", body: [
        "Connected and streaming TV across the major platforms with audience and geographic targeting, broadcast and cable where local density makes it efficient, and audio where the buyer commutes. Buys are planned against the same ideal customer profile that drives your outbound lists, because it is one pipeline.",
      ]},
      { h2: "Creative included, not subcontracted", body: [
        "Thirty years of media production live inside the firm. Spots are written and produced against your positioning, in the same voice as your site and your outreach, at budgets that respect the test.",
      ]},
      { h2: "Measurement without the mystery", body: [
        "TV's job in this system is observable: branded search lift, direct traffic lift, and outbound reply rates in exposed geographies. We report those movements next to your meeting numbers, and we are honest about what TV did and did not do. When the test works, we scale. When it does not, we say so and reallocate.",
      ]},
      { h2: "Why this is the wedge", body: [
        "Your competitors believe TV starts at a million dollars. Their belief is your unguarded flank. A business doing $3M with a $15K monthly streaming test can be the only company in its category a buyer has ever seen on television. Familiarity is the cheapest objection killer in sales, and almost nobody in your weight class is buying it.",
      ]},
    ],
    faqs: [
      { q: "What is the minimum budget?", a: "Meaningful streaming tests start around $10K to $15K monthly in media for 8 to 12 weeks, plus creative." },
      { q: "Can you target locally?", a: "Yes. Streaming buys target down to geography and audience segment, which is exactly where regional service businesses win." },
      { q: "How do we know it works?", a: "Lift in branded search, direct traffic, and reply rates in exposed markets, read against control. We set the measurement plan before the first dollar runs." },
      { q: "Do you do production?", a: "Fully in house, script to delivery." },
    ],
    related: [
      { label: "How it works", href: "/how-it-works" },
      { label: "Pricing", href: "/pricing" },
      { label: "CTV playbook", href: "/field-notes/ctv-advertising-small-business" },
    ],
  },
  {
    slug: "design-brand",
    title: "Brand and Design | Editorial Luxury for Companies That Sell | ISOVERTIC",
    metaDescription: "Brand identity and design with editorial restraint, built to make a growing company look like the category leader before a word is read.",
    eyebrow: "Brand",
    h1: "Look like the firm they should have called first.",
    lead: "Buyers decide who is senior in about three seconds, and they decide it visually. We design identities and interfaces with editorial restraint: confident type, structural layout, real photography, nothing decorative. The work signals authority quietly, which is the only way authority can be signaled.",
    callout: {
      label: "Where this lives",
      body: "A video and photography production day is $4,500 as an add on at any tier, included quarterly on Kinetic, and creative production is in house on Critical Mass. Pricing is published.",
    },
    sections: [
      { h2: "Brand in service of pipeline", body: [
        "This is not branding for award shows. Every identity we build has to survive contact with a cold email, a landing page, a TV spot, and a sales deck, because we build all four. Coherence across those surfaces is what makes a $5M company read like a $50M one.",
      ]},
      { h2: "What we deliver", body: [
        "Identity systems: wordmark, type, color, usage. Messaging architecture: positioning, category claim, voice. Sales materiel: decks, one pagers, proposal systems. Interface design for the site and product surfaces we build in development.",
      ]},
    ],
    faqs: [
      { q: "Do you do logo only projects?", a: "Rarely. Identity divorced from messaging and the surfaces it lives on tends to die in a drawer. We scope brand work inside pipeline engagements." },
      { q: "What does brand work cost?", a: "Identity and messaging systems typically run $15K to $40K depending on scope, folded into the ramp." },
      { q: "Who does the work?", a: "Senior hands only. No juniors, no templates, no outsourcing." },
    ],
    related: [
      { label: "Web development", href: "/web-development" },
      { label: "How it works", href: "/how-it-works" },
      { label: "Results", href: "/results" },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
