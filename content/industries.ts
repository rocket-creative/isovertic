import type { Page } from "./types";
import { biotechMolecularBiologist, industryDiscipline, industryPipelineCta } from "./voice-audit";

export const industries: Page[] = [
  {
    slug: "healthcare",
    title: "Healthcare Marketing That Books Appointments and Passes Review | ISOVERTIC",
    dateModified: "2026-09-09",
    metaDescription: "Healthcare marketing for practices, health systems, and RCM teams: event and vendor inventory before the campaign, a HIPAA form-and-call stack, an MLR review gate, and paid search to pages that can defend the click.",
    eyebrow: "Healthcare",
    h1: "Healthcare marketing that books appointments and passes review.",
    lead: "The good news first, because HIPAA anxiety is a fairly poor use of anyone's Tuesday: you can run useful healthcare marketing without guessing which vendor setup has quietly put patient data in the wrong place. If you're a practice administrator, medical director, hospital marketing lead, or compliance officer who gets a little tense every time a new landing page ships, you're the right reader. You'll leave with a clear way to separate the work that can run from the work that needs a stop sign.",
    callout: {
      label: "Typical starting point",
      body: "Most established practices, health systems, and RCM companies start with Excitation, at $5,000 per month plus ad spend, then add the $750 per month HIPAA form-and-call stack. If no one owns the calendar, several service lines need support, or paid demand must coordinate with referral work and a clinical review process, Amplification is the right conversation. Pricing is published.",
    },
    sections: [
      { h2: "What you'll take away", body: [], list: [
        "Which website events, forms, calls, and pixels need a privacy review before a campaign goes live.",
        "What the June 2024 American Hospital Association v. Becerra ruling changed, and what it did not.",
        "How to make a medical, legal, and regulatory review gate move work without turning every page into a committee artifact.",
        "How a $750 per month HIPAA form-and-call stack fits onto any Isovertic tier.",
        "Where marketing stops and operational capacity, scheduling, payer access, and counsel take over.",
      ]},
      { h2: "The pixel is the exposure", body: [
        "Here's the big thing. A pixel doesn't need to cause a breach by breaking in. It can create exposure by sending identifiers and health-related context to an advertising platform exactly as configured. The FTC's actions against [GoodRx](https://www.ftc.gov/news-events/news/press-releases/2023/02/ftc-enforcement-action-bar-goodrx-sharing-consumers-sensitive-health-info-advertising), [BetterHelp](https://www.ftc.gov/news-events/news/press-releases/2023/07/ftc-gives-final-approval-order-banning-betterhelp-sharing-sensitive-health-data-advertising), and [Cerebral](https://www.ftc.gov/news-events/news/press-releases/2024/04/proposed-ftc-order-will-prohibit-telehealth-firm-cerebral-using-or-disclosing-sensitive-data) all center on sensitive health data used for advertising. That is not a reason to stop marketing. It is a reason to build the form, call, tracking, and review system before buying traffic.",
      ]},
      { h2: "What actually breaks in healthcare marketing", body: [], subs: [
        { h3: "The pixel gets installed before anyone maps the data", body: [
          "Someone adds analytics to a service-line page, appointment flow, chat widget, call tracker, or patient portal. Each tool looks ordinary in its own tab. Together, the page URL, click, identifier, and timestamp can say much more than the person who installed the tag intended.",
          "HHS OCR's [online tracking guidance](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/hipaa-online-tracking/index.html) says a regulated entity may not impermissibly disclose protected health information to tracking vendors and explains when a business associate agreement may be required. The relevant baseline is [45 CFR Parts 160 and 164](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164), not the cookie banner a vendor supplied. Cookie banners have many talents. Replacing legal analysis is not one of them.",
        ]},
        { h3: "The court ruling gets read as a green light", body: [
          "In American Hospital Association v. Becerra, No. 4:23-cv-01110-P, the Northern District of Texas vacated one part of HHS's bulletin involving an IP address plus a visit to certain unauthenticated public webpages. The [AHA's June 20, 2024 summary](https://www.aha.org/news/news/2024-06-20-judge-rules-favor-aha-vacating-hhs-online-tracking-bulletin-unlawful-and-beyond-agency-authority) and its [August 2024 update that HHS would not appeal](https://www.aha.org/news/headline/2024-08-29-hhs-will-not-appeal-aha-court-victory-online-tracking-case) are useful reading. They do not make portals, appointment flows, condition-specific conversion events, or actual patient-relationship disclosures safe to send to ad vendors.",
          "Treat public information, care-seeking pages, forms, calls, authenticated spaces, and post-appointment pages as different zones with different allowed data flows.",
        ]},
        { h3: "Capacity and access are missing from the promise", body: [
          "A campaign can produce a good call and still create a bad patient experience. The office may have no appointments, take a narrow set of plans, require a referral, or serve only defined age groups and locations. Marketing cannot repair those facts with a nicer headline.",
          "For a practice group, we want a current answer to who can book, where, with which plan, for which service, and how soon. HHS explains that telehealth availability can be limited by state licensure rules in its [cross-state licensure guidance](https://telehealth.hhs.gov/licensure/licensing-across-state-lines). A campaign should know that before it promises care.",
        ]},
        { h3: "Review happens after the page is designed", body: [
          "Healthcare teams often send a finished page into review and wait for a redlined surprise. The better sequence is a claim packet first: audience, source for every claim, required qualification, destination, data collected, expiry trigger, and named reviewer. Medical, legal, and regulatory review, usually called MLR review, is not a decorative approval stamp. It is how the team tests whether the page says what the evidence allows it to say.",
          "For drug promotion, FDA's [product-claim advertising example](https://www.fda.gov/drugs/prescription-drug-advertising/product-claim-ad-correct) shows the benefit and risk pairing the agency expects. For devices, a 510(k) clearance and a premarket approval are different regulatory paths, as FDA explains in its [510(k) overview](https://www.fda.gov/medical-devices/premarket-submissions-selecting-and-preparing-correct-submission/premarket-notification-510k) and [PMA overview](https://www.fda.gov/medical-devices/premarket-submissions-selecting-and-preparing-correct-submission/premarket-approval-pma). The copy needs the exact language your authorized materials support, not a more exciting cousin of it.",
        ]},
      ]},
      { h2: "What we do differently for healthcare", body: [], subs: [
        { h3: "We map the event before we run the campaign", body: [
          "We inventory each page, form field, call event, CRM route, tag, and vendor. We ask what data leaves the page, who receives it, whether it can identify a person or reveal care-seeking intent, what agreement governs the vendor, and whether the event belongs in advertising at all. Then we remove what should not be there and document the rest.",
        ]},
        { h3: "We add the HIPAA form-and-call stack where it belongs", body: [
          "The HIPAA form-and-call stack is a flat $750 per month add-on to any tier. It covers BAA-aligned forms and routing, email and CRM handling, call tracking controls, consent, pixel exclusions, and server-side conversion design. We keep protected information out of advertising payloads and build a measurement path your privacy team can examine.",
        ]},
        { h3: "We build an MLR review gate into production", body: [
          "For regulated service lines, digital health, devices, biotech, and pharmaceutical work, the MLR review gate is an add-on of $500 to $1,200 per month, depending on tier. You name the reviewer; we provide versioned source packets and track approvals, required disclosures, channels, and refresh dates.",
        ]},
        { h3: "We send paid search to pages that can defend the click", body: [
          "Healthcare ads must meet platform and clinical constraints. Google's [healthcare and medicines policy](https://support.google.com/adspolicy/answer/176031?hl=en) limits advertising by product and geography, and some categories require certification. Once approved, we target specific service and provider terms, then measure booked consults, appointments, and qualified referrals where the data design permits.",
        ]},
      ]},
      { h2: "What this looks like on an account like yours", body: [
        "Consider a hypothetical eight-location specialty practice group. Its paid search had been producing calls, but the call center could not tell which service line the caller wanted without replaying recordings. A general analytics tag appeared across care-seeking pages and the appointment confirmation screen. Several location pages also listed plans the offices no longer accepted. Everyone was working hard. The system was just telling several versions of the truth at once.",
        "We would start with an event and vendor inventory, remove ad-platform events from appointment and confirmation pages, and split public corporate content from care-seeking flows. Next, we would make a BAA-covered lead form route only the information scheduling needs into the approved system, set call tracking to capture source without passing condition terms to an advertising recipient, and make a simple capacity file part of weekly campaign decisions.",
        "The content work would build one page for each real service and location combination the practice can serve, with accepted plans, referral requirements, clinician credentials, and a route to book. Search ads would go only to pages with open capacity and a review-approved conversion path. The first report would show approved pages live, risky events removed, calls and forms by service line, booked appointments, and access friction.",
      ]},
      { h2: "The tier you'd probably start on", body: [
        "Most established practices, health systems, and RCM companies start with Excitation, at $5,000 per month plus ad spend, then add the $750 per month HIPAA form-and-call stack. Excitation includes the site foundation, content, one landing page, one paid-search campaign, and a person accountable for reviewing the work with you. It fits teams with a real conversion path and at least $1,000 to $5,000 in monthly ad spend to test search capture.",
        "If no one owns the calendar, several service lines need support, or paid demand must coordinate with referral work and a clinical review process, Amplification is the right conversation. It is $10,000 per month plus ad spend and assumes a named person on your side can own scheduling and follow-up. Every tier is structured as a 12-month engagement, with a six-month floor for work outside the published tiers. Google's [guidance on SEO changes](https://developers.google.com/search/docs/appearance/site-names) says effects can take four months to a year, so a 90-day verdict would mostly measure how quickly a team can become disappointed.",
      ]},
      { h2: "The honest limits", body: [
        "This does not replace healthcare counsel or decide whether your organization is a covered entity or business associate. It does not make a vendor acceptable because it has a reassuring sales deck. It also does not make a full schedule appear. If access, referral processing, eligibility, or staffing is broken, we will show you where the campaign meets that wall and help prioritize the operating fix.",
        "It also works best when people already search for a specific service, specialty, procedure, or operational solution. If the buyer has no established vocabulary yet, this system cannot find demand that does not exist. We will say so before you pay us.",
      ]},
      { h2: "Disclaimer", body: [
        "This piece is a marketing operating framework, not legal advice. HIPAA compliance depends on your specific facts, jurisdiction, and covered-entity or business-associate status. The controlling sources are [45 CFR Parts 160 and 164](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164), OCR's [Revised Bulletin on tracking technologies](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/hipaa-online-tracking/index.html), and the June 20, 2024 opinion in American Hospital Association v. Becerra, No. 4:23-cv-01110-P (N.D. Tex.). Consult qualified healthcare counsel before implementing any of the above.",
      ]},
    ],
    pipelineCta: {
      headline: "Send us your current lead-capture form.",
      body: "If your practice, hospital, health system, or RCM team is unsure where patient information travels after someone submits or calls, [book a pipeline call](/contact) and paste it in. In about ten minutes we'll tell you which events need review, whether the fix is a form, call, or pixel change, and whether the $750 stack is enough. Sometimes the honest answer is you're already fine, and we're happy to say so and hand you back your afternoon.",
    },
    faqs: [
      { q: "Are you HIPAA compliant in how you handle leads?", a: "Intake flows are designed so PHI is handled by compliant infrastructure, with BAAs where required. The HIPAA form-and-call stack is a flat $750 per month add-on to any tier." },
      { q: "Can you run ads for restricted healthcare categories?", a: "We have managed certification including LegitScript and policy constrained accounts. Category rules are scoped before we commit to numbers." },
      { q: "Do you work with multi provider groups?", a: "Yes. One page for each real service and location combination the practice can serve, with accepted plans, referral requirements, and clinician credentials." },
      { q: "What results should a practice expect?", a: "Booked consults, appointments, and qualified referrals measured where the data design permits, with leading indicators every 30 days and revenue reviewed against the actual sales cycle." },
    ],
    related: [
      { label: "Google Ads", href: "/google-ads" },
      { label: "Web development", href: "/web-development" },
      { label: "HIPAA posture, printable", href: "/compliance/hipaa-posture" },
      { label: "Results", href: "/results" },
    ],
  },
  {
    slug: "biotech",
    title: "Biotech Marketing That Survives Scientific Review | ISOVERTIC",
    dateModified: "2026-09-09",
    metaDescription: "Biotech marketing for founder-scientists, CROs, and research tools: a claim library before the content calendar, an MLR review gate with a named reviewer, and one page per gene, model, assay, or research use case.",
    eyebrow: "Life sciences",
    h1: "Biotech marketing that survives scientific review.",
    lead: [
      "You are not imagining it. Your buyers can smell unsupported copy in one line, and they will close the tab without filing a formal complaint about it. A founder-scientist, CSO, life-science operations lead, or communications leader has to carry that risk while still answering the very practical question, \"How will the right research team find us?\" The payoff here is a system that makes your evidence easier to find, easier to review, and harder to accidentally overstate.",
      "The honest number is internal: on Ingenious Targeting Laboratory's account, form fills rose 4.9x and organic clicks rose 3.7x over the first eight months, measured in HubSpot and Google Search Console in September 2026. Those are internal results, not a promise or a public benchmark. The reason they matter is simpler: research buyers were already searching for specific entities and methods. We built pages that answered those exact searches with enough technical detail to survive contact with a scientist.",
    ],
    callout: {
      label: "Typical starting point",
      body: "For an early commercial biotech company with approved claims, start with Ground State at $2,500 per month plus the MLR review gate. For a CRO, tool provider, or established biotech with a reviewed conversion path and $1,000 to $5,000 per month in ad spend, Excitation at $5,000 per month plus ad spend adds one campaign, a landing page, and a monthly review. Pricing is published.",
    },
    sections: [
      { h2: "What you'll take away", body: [], list: [
        "How to turn your approved evidence into pages research buyers can find and trust.",
        "What MLR review means, and how to put it in front of production instead of after it.",
        "How one page per gene, model, assay, indication, or research use case creates a catalog that earns its keep.",
        "What the ITL result tells you, and what it does not promise your company.",
        "Which Isovertic tier gives a founder-scientist enough operating support without buying a larger program too early.",
      ]},
      { h2: "What actually breaks in biotech marketing", body: [], subs: [
        { h3: "The scientific claim gets translated into marketing fog", body: [
          "A team starts with useful evidence, then removes the qualifier, population, comparator, limitation, and source until the headline sounds impressive to someone who was not in the room. Unfortunately, the person who was in the room is often the buyer.",
          "For therapeutics, the claim perimeter begins with approved labeling; for devices, with the authorized intended use and instructions for use. FDA explains [510(k) clearance](https://www.fda.gov/medical-devices/premarket-submissions-selecting-and-preparing-correct-submission/premarket-notification-510k) and [premarket approval](https://www.fda.gov/medical-devices/premarket-submissions-selecting-and-preparing-correct-submission/premarket-approval-pma). Research-use products still need claims that match the evidence.",
        ]},
        { h3: "MLR is treated as a finish-line obstacle", body: [
          "MLR means medical, legal, and regulatory review. At its best, it is the system that keeps a claim attached to its source, audience, channel, and approved context. At its worst, it receives a finished page, six versions of a deck, a deadline, and a vague note saying \"quick review?\" Nobody enjoys that arrangement, including the reviewer.",
          "FDA's [OPDP frequently asked questions](https://www.fda.gov/about-fda/center-drug-evaluation-and-research-cder/opdp-frequently-asked-questions-faqs) are a useful reference for promotional-material responsibilities. The reviewer needs a structured packet before layout is final: claim, evidence, population, limits, required language, destination, and expiry trigger.",
        ]},
        { h3: "One broad services page is asked to carry the whole search job", body: [
          "Google's [people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) is direct about showing expertise, trustworthy sourcing, and clear purpose. A long tail page should not be thin filler built to occupy a query. It should answer the technical question, define the fit and limits, cite the source material, and give the reader a sensible next step.",
        ]},
        { h3: "The team measures interest, not the work that follows", body: [
          "A researcher downloads a protocol, asks a question, or submits an inquiry. Then the lead disappears into a general inbox, sales does not know the source page, and marketing gets a report of clicks. That is several systems avoiding eye contact.",
          "We track the page and query family that started the conversation, the form or call route, response time, and qualified meeting. For long-cycle research sales, revenue is reviewed against the real sales cycle at month six and month twelve, while the early scorecard reports what is actually available: pages live, impressions, relevant traffic, inquiries, and meetings.",
        ]},
      ]},
      { h2: "What we do differently for biotech", body: [], subs: [
        { h3: "We build a claim library before we build a content calendar", body: [
          "We start with your approved claims, source documents, author or reviewer, permitted audiences, and required context. Each material claim gets a source link or document reference, a date, a limitation, and an owner. This creates a working library that writers, scientists, sales, and MLR reviewers can use without rediscovering the same evidence each time.",
          "For drug and device work, the review checks whether words, images, metadata, and linked content create a net impression broader than the evidence. FDA's [guidance on scientific information to healthcare professionals](https://www.fda.gov/media/184871/download) explains why context matters.",
        ]},
        { h3: "We give MLR a real gate, with a named reviewer", body: [
          "Our MLR review gate is a $500 to $1,200 per month add-on, depending on the tier. You identify the MD, PhD, regulatory lead, legal reviewer, or committee that owns final approval. We submit content as a traceable packet, capture required edits, track approved versions, and flag assets for renewal when an evidence source, label, or product scope changes.",
        ]},
        { h3: "We build the long-tail catalog around buyer vocabulary", body: [
          "A biotech site should act like a sales rep that knows the field. For a CRO, that may mean separate pages for study design, disease model, assay type, species, and endpoint. For a tools company, it may mean a page per integration, analyte, platform, workflow, protocol step, or research application. For a diagnostics or bioinformatics business, it may mean clinical-use constraints, validation details, and implementation environment.",
          "Every page has a narrow job: answer a specific question early, show the evidence and limitations, link to related methods, and offer a route to speak with someone who can handle the next technical question. We do not make an AI writing tool invent authority. We use people who know how to recognize what needs a source and who to ask for it.",
        ]},
        { h3: "We use paid search only after the destination is defensible", body: [
          "Paid search can put an approved page in front of a person already looking for a particular capability. It should not send a scientist to a generic landing page that makes them work to find the method, evidence, or appropriate contact. We set campaigns around specific research terms and measure qualified conversations rather than platform activity alone.",
          "If your product falls in a restricted category, platform rules belong in the setup. Google's [healthcare and medicines policy](https://support.google.com/adspolicy/answer/176031?hl=en) restricts advertising by category and geography. A campaign that gets approved is not therefore clinically or legally approved. It still needs the claim control system.",
        ]},
        { h3: "We create an authority loop that does not ask buyers to lower their standards", body: [
          "Useful technical explainers and method pages can earn citations and institutional links when they answer real questions. Those links help commercial pages get discovered and convert the searcher who needs the specific service or product.",
        ]},
      ]},
      { h2: "What this looks like on a real account", body: [
        "Ingenious Targeting Laboratory is the real example. The account needed a site that could meet researchers in the vocabulary of models, targets, and applications rather than hope a single company page would cover a scientific catalog. We built a large content system across a 147-page sitemap and added more than 100 search-focused pages for its mouse model services.",
        "HubSpot and Google Search Console showed 4.9x form fills and 3.7x organic clicks in the first eight months, as of September 2026. Those results are internal, and raw counts remain private unless the client gives written permission. Results depend on starting site, demand, follow-up, and buyer search specificity.",
        "The transferable mechanism is the catalog: specific terms, technically credible pages, a monitored conversion route, and a review process that respects the science.",
      ]},
      { h2: "The tier you'd probably start on", body: [
        "For an early commercial biotech company with approved claims, start with Ground State at $2,500 per month plus the MLR review gate. It builds authority before paid spend.",
        "For a CRO, tool provider, or established biotech with a reviewed conversion path and $1,000 to $5,000 per month in ad spend, Excitation at $5,000 per month plus ad spend adds one campaign, a landing page, and a monthly review. Labs with a deep entity catalog can add programmatic page expansion at $2,500 per month per 50 pages after the information architecture and evidence standard are in place.",
        "All published tiers run for 12 months. Google notes that search improvements can take [four months to a year](https://developers.google.com/search/docs/appearance/site-names). We report leading indicators every 30 days and review downstream pipeline on your actual sales-cycle clock.",
      ]},
      { h2: "The honest limits", body: [
        "We cannot create evidence you do not have, turn an exploratory finding into an approved claim, or substitute for regulatory counsel and MLR sign-off. We also cannot help a buyer understand a product your internal team cannot explain in plain, technically exact terms. That work starts before marketing.",
        "This system works when research buyers already use a specific vocabulary to find the problem, model, capability, or provider. If your category is new enough that nobody searches for it yet, search capture is not the first move. We will tell you that rather than sell you a very organized way to wait.",
      ]},
      { h2: "Disclaimer", body: [
        "This piece is a marketing operating framework, not legal advice. HIPAA compliance depends on your specific facts, jurisdiction, and covered-entity or business-associate status. The controlling sources are [45 CFR Parts 160 and 164](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164), OCR's [Revised Bulletin on tracking technologies](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/hipaa-online-tracking/index.html), and the June 20, 2024 opinion in American Hospital Association v. Becerra, No. 4:23-cv-01110-P (N.D. Tex.). Consult qualified healthcare counsel before implementing any of the above.",
      ]},
    ],
    showQuotePlaceholder: true,
    disciplineNote: biotechMolecularBiologist,
    pipelineCta: {
      headline: "Send us your MLR-reviewed pillar page.",
      body: "If you have a good piece of technical content that is not producing the conversations it should, [book a pipeline call](/contact) and paste it in. In about ten minutes we'll tell you which claims travel, what catalog pages belong around it, whether a paid search test makes sense, and whether you need the MLR gate. Sometimes the honest answer is you're already fine, and we're happy to say so and hand you back your afternoon.",
    },
    faqs: [
      { q: "Do your writers understand the science?", a: "Content is produced inside a documented technical system with a claim library, terminology controls, and review gates built for life science accuracy. A molecular biologist on staff reviews the work before it reaches your MLR reviewer." },
      { q: "Can you reach academic and industry buyers in one program?", a: "Yes, with separate sequences and offers per segment." },
      { q: "How do you handle long sales cycles?", a: "Revenue is reviewed against the real sales cycle at month six and month twelve, while the early scorecard reports pages live, impressions, relevant traffic, inquiries, and meetings." },
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
    title: "Technical B2B Marketing for Buyers Who Read the Docs | ISOVERTIC",
    dateModified: "2026-09-09",
    metaDescription: "Technical B2B marketing for developer tools, infrastructure, and technical SaaS: one page per use case, integration, and role, paid search that measures booked meetings, and follow-up that keeps the technical thread.",
    eyebrow: "Technical B2B",
    h1: "Technical B2B marketing for buyers who read the docs.",
    lead: [
      "You know the feeling: the site looks like a competent software company made it, but your buyer is an engineer, IT lead, or operations person who notices that the documentation is hidden, the integration claim has no detail, and the page has somehow said a lot without answering their question. They do not send feedback. They leave. It is efficient, if a little rude.",
      "The useful payoff is not a new coat of marketing paint. It is a website that behaves like a technical sales rep: it meets a buyer in the specific language they searched, gives them enough detail to continue, and records the meeting or inquiry without confusing activity for progress. [Gartner B2B buying research](https://growthmethod.com/gartner-b2b-buying-journey/) reports that buyers spend roughly 17% of their buying time with any one supplier. You do not get much time to make a vague claim feel credible.",
    ],
    callout: {
      label: "Typical starting point",
      body: "Excitation is the typical starting point for a technical B2B company with a real offer, a working conversion path, and a modest paid-search budget. It is $5,000 per month plus ad spend and includes the site foundation, content system, one landing page, one campaign, lead follow-up in one business day, and a monthly strategy call. Pricing is published.",
    },
    sections: [
      { h2: "What you'll take away", body: [], list: [
        "Why a technical buyer leaves a polished site that cannot answer a specific implementation question.",
        "How to build one page per use case, integration, role, problem, and technical term without creating a pile of thin pages.",
        "What paid search should measure after a technical buyer reaches the right documentation or landing page.",
        "Why a buying committee gives any one supplier only a sliver of its attention, and what to do with that fact.",
        "Why Excitation is usually the right starting tier for a technical B2B company with a real offer.",
      ]},
      { h2: "What actually breaks in technical B2B marketing", body: [], subs: [
        { h3: "The site speaks software while the buyer speaks implementation", body: [
          "\"Modern platform\" and \"end-to-end visibility\" may be true in a conference booth. They are not a substitute for a page that explains supported environments, integration behavior, deployment requirements, data flow, latency, security constraints, or ownership. A technical buyer often reads the docs before the pitch because the docs show whether the company understands the job.",
          "The person searching a detailed term should find the detail without requesting a demonstration first.",
        ]},
        { h3: "One product page is expected to rank for every real question", body: [
          "A technical product usually has many commercial entry points: a use case, a role, an integration, an incident type, a standard, an architecture choice, a migration, a competitor replacement, or a concrete task. One broad page cannot be the best answer for all of them.",
          "Google's [people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) favors content created to help people, with clear expertise and purpose. The implication is not \"publish more pages.\" It is \"publish one page for each real question your team can answer better than a generic result.\" Each page needs a distinct purpose, technical source material, related links, and a route to a human conversation.",
        ]},
        { h3: "Paid demand gets sent to an abstract landing page", body: [
          "Search ads work well when someone already types a specific problem or solution term. They work poorly when the ad promises a practical answer and the landing page opens with a slogan. The buyer should be able to confirm the use case, technical fit, proof, implementation shape, and next step in one visit.",
        ]},
        { h3: "Sales follow-up loses the technical thread", body: [
          "An engineering leader asks about one integration. The follow-up email says \"Would love to learn more about your needs.\" That sentence has done a remarkable job of learning nothing from the request.",
          "The page, form, routing, and follow-up should retain the context: which term, use case, integration, or document brought the person in. Then a sales or solutions person can respond with the relevant proof, a technical resource, and an appropriate next step. This is not personalization theater. It is basic continuity.",
        ]},
      ]},
      { h2: "What we do differently for technical B2B", body: [], subs: [
        { h3: "We make the site the sales rep, not the brochure", body: [
          "We build server-rendered sites that deliver the important content on the first load, with structured pages and clear paths to documentation, pricing, security, and contact. The website works while your technical founders and solutions team are doing the work they were hired to do.",
          "The job is capture: get found by the person already searching for what you sell, then spend ads only on those people. That is why the information architecture comes before the publishing calendar. We need to know the specialist terms, the existing proof, and the conversion route first.",
        ]},
        { h3: "We build a long-tail catalog with an engineering standard", body: [
          "A catalog page may cover an integration, a migration path, a specific workload, a compliance requirement, a user role, a deployment option, an API pattern, or a technical comparison. It includes an answer early, boundaries and requirements, proof or documentation links, related pages, and a way to speak with the right person.",
          "The pages connect so a visitor can reach implementation, security, and commercial information without starting over. We use your product team, documentation, customer language, and support patterns as source material. If the answer does not exist internally, we flag the product question.",
        ]},
        { h3: "We create pages that humans and answer engines can quote", body: [
          "Clear definitions, exact terminology, source-backed specifications, and strong internal linking make a page useful to technical readers and discovery systems. We own useful questions close to your product and buying process, then expand what earns qualified attention.",
        ]},
        { h3: "We connect paid search to a qualified meeting", body: [
          "On Excitation, we run one search campaign around the terms with a credible destination and enough demand to test. We build or revise the landing page, set the tracking path, and review cost per booked meeting with you monthly. If the term is informational, we may send it to a technical page with a relevant next step rather than force a sales form into the first screen.",
          "A monthly ad budget of about $1,000 to $5,000 gives one campaign room to learn. Below that, platform learning can become a coin flip. We would rather say \"start with the content system\" than keep a tiny campaign alive because the spreadsheet needs a tab.",
        ]},
      ]},
      { h2: "What this looks like on an account like yours", body: [
        "Consider a hypothetical infrastructure company selling observability tooling to platform teams. Its homepage says the product provides \"actionable visibility.\" Its best leads actually come from searches around Kubernetes cost allocation, incident response handoffs, and a particular cloud integration. The docs are good, but isolated from the commercial site. Sales has no reliable record of which technical question led to a booked meeting.",
        "We would start by mapping the questions and collecting the source material: docs, implementation guides, support tickets, release notes, security answers, and the language used by successful customers. Then we would make a page family around the real terms, beginning with the few areas that have clear demand and strong product proof. Each page would clarify fit, setup requirements, limitations, and the relevant demonstration or technical conversation.",
        "We would run paid search only to pages that can answer the query and retain the source context for follow-up. The report would show which page families earned visibility and meetings, what objections appeared, and what page comes next. This stops one homepage from carrying an entire technical product category.",
      ]},
      { h2: "The tier you'd probably start on", body: [
        "Excitation is the typical starting point for a technical B2B company with a real offer, a working conversion path, and a modest paid-search budget. It is $5,000 per month plus ad spend and includes the site foundation, content system, one landing page, one campaign, lead follow-up in one business day, and a monthly strategy call. It gives you a practical way to test the terms your buyers already use while the catalog compounds.",
      ]},
      { h2: "The honest limits", body: [
        "This cannot fix unclear positioning, missing documentation, a harder-than-advertised implementation, or sales follow-up without technical substance. It also cannot capture a search that is not happening.",
        "We are also not the right shop if you need to stay on a site builder that cannot support the technical structure and measurement system. The build runs on our server-rendered stack, and you own the code and domain.",
      ]},
    ],
    pipelineCta: {
      headline: "Send us your best-converting landing page or one-pager.",
      body: "If it gets attention but your technical buyer still disappears before a meeting, [book a pipeline call](/contact) and paste it in. In about ten minutes we'll tell you which questions the page does not answer, what catalog pages belong around it, whether paid search has a destination worth buying, and whether Excitation fits. Sometimes the honest answer is you're already fine, and we're happy to say so and hand you back your afternoon.",
    },
    faqs: [
      { q: "Can your writers handle developer facing content?", a: "We use your product team, documentation, customer language, and support patterns as source material, inside a documented technical system with terminology controls and a named reviewer. If the answer does not exist internally, we flag the product question." },
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
