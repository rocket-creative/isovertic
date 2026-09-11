import type { Page } from "./types";
import { serviceDiscipline, servicePipelineCta } from "./voice-audit";

// Service page copy. Rewritten 2026-09-10 from Site Rewrite v3.

export const services: Page[] = [
  {
    slug: "outbound-appointment-setting",
    title: "Qualified Meetings on Your Calendar, Each With a Written Brief | ISOVERTIC",
    dateModified: "2026-09-10",
    metaDescription: "Outbound appointment setting for healthcare, biotech, medical devices, and life sciences. Qualified meetings on your calendar, each with a written brief.",
    eyebrow: "Outbound",
    h1: "Qualified meetings on your calendar, each with a written brief.",
    lead: "Isovertic is the growth agency for healthcare, biotech, medical devices, and life sciences tools and diagnostics. We run outbound appointment setting as part of the same team that built your site, wrote your material, and supports the sales conversation after the meeting. CEOs, presidents, chief operating officers, VPs of commercial, VPs of marketing, and founders hire us when their salespeople are spending too much time prospecting and not enough time in real conversations with a chief medical officer, a chief scientific officer, a director of billing, a principal investigator, or a practice administrator.",
    callout: {
      label: "Where this lives",
      body: "Amplification includes one outbound seat. Quantum Leap includes two outbound seats. You can add a seat to any package for $4,500 per month. A conference sprint is $7,500 per event. We define what counts as a meeting, we verify each one, and we report cost per qualified meeting. Pricing is published.",
    },
    sections: [
      { h2: "What this actually is", body: [
        "A dedicated outbound seat that runs coordinated phone, email, and LinkedIn outreach against a target list built from real data. Qualified meetings on your salesperson's calendar. A written brief for each meeting, with the context the salesperson needs before the call. We define what counts, we verify each meeting, and we report cost per qualified meeting.",
        "Outbound fails when it is treated as a volume contest. A vendor buys a list, sends generic messages, celebrates activity, and leaves your team to discover whether anyone was serious. The prospect clicks through to a website that does not support the message, or lands on a calendar with no context. Nobody wins that exchange. We run the work from first contact through the scheduled meeting, and we own the handoff.",
      ]},
      { h2: "Why the brief matters", body: [
        "Your salesperson should not walk into a first call wondering whether the prospect runs a relevant organization, which problem they raised, or what triggered the conversation. We include the company and the role, the problem the prospect raised, what the prospect responded to in our sequence, any material we already sent, and the stated next step and the calendar hold.",
        "It is basic operational hygiene. It also respects the prospect, which is a surprisingly low bar in this category. A salesperson who reads a two-paragraph brief before a call handles the meeting better than a salesperson who reads the LinkedIn profile in the elevator.",
      ]},
      { h2: "The deliverables, by name", body: [], list: [
        "A dedicated outbound seat running coordinated phone, email, and LinkedIn outreach against a target list built for your sale.",
        "A target list built from real data sources, not a purchased spreadsheet alone, filtered against the kind of organization and decision-maker you need to reach.",
        "Sequenced messages written to match your offer, your evidence, your website, and your sales material. If a prospect asks for evidence, the material we send confirms what the message promised.",
        "A qualified meeting booked directly on your salesperson's calendar.",
        "A written brief for each meeting, delivered before the call.",
        "Meetings verified against the meeting quality standard.",
        "A monthly review of scheduled meetings, reply quality, and the sales handoff.",
        "A conference sprint available at $7,500 per event for pre-event outreach and on-site meeting scheduling.",
        "The HIPAA form-and-call stack at $750 per month when the outreach touches protected health information.",
      ]},
      { h2: "Which package includes outbound", body: [
        "Amplification, $10,000 per month plus ad spend, includes one outbound seat alongside the website rebuild, higher-volume publishing, Google Ads, a YouTube channel, and weekly account review. The seat lands the meeting inside a company that can already defend the pitch when a prospect checks the site. That order is deliberate.",
        "Quantum Leap, from $25,000 per month plus ad spend, includes two outbound seats and runs across two or more brands with in-house creative and media buying.",
        "You can add an outbound seat to any package for $4,500 per month. That includes the person running the work and the meeting briefs.",
        "Ground State is often the right place to begin if the website cannot yet defend the claim an email will make. Build first, then start the outreach. Excitation can add a seat once the site is ready. We would rather start later with a credible destination than start early and waste a buyer's time. See the [pricing page](/pricing).",
      ]},
      { h2: "The honest limit", body: [
        "Outbound cannot repair a weak website or an unclear offer. If a prospect clicks through and cannot confirm what the message said, the meeting rate and the show-rate both suffer. We sequence the website work first when it is needed.",
        "It cannot turn a poor-fit list into qualified meetings through persistence alone. Your company must be able to say who it can help, what problem it solves, and who owns the calendar on your side. Meetings that fail the agreed standard do not count. It is not a promise that every scheduled person will buy.",
        "A scheduled call is the beginning of sales work, not its replacement. Your team still has to prepare, show up, follow up, and close.",
      ]},
      { h2: "What we don't do", body: [
        "We are not a dial-count vendor, a general promotion shop, or a rented team that reports sent emails without owning the handoff. We do not use generic messages that could have been sent by anyone. We do not book an unqualified call to hit a count on a monthly report.",
      ]},
    ],
    faqs: [
      { q: "How many meetings per month can we expect?", a: "No. We do not promise a specific number of meetings a month. We define what counts, we verify each meeting, and we report cost per qualified meeting. The definition is on the meeting quality standard page." },
      { q: "Do you use AI for outbound?", a: "We use automation for research, list building, and sequencing. Conversations that qualify and book are run by people, because your buyers can tell the difference." },
      { q: "Do we need your other services to get appointment setting?", a: "The website rebuild is included in every package, and Book starts after Build when the current site cannot confirm what the email claims. Outbound pointed at a site that supports the pitch converts better, because the prospect's diligence confirms the outreach instead of contradicting it." },
      { q: "Who owns the data and sequences?", a: "You do. Lists, copy, and recordings are yours from day one." },
    ],
    disciplineNote: serviceDiscipline["outbound-appointment-setting"],
    pipelineCta: servicePipelineCta["outbound-appointment-setting"],
    related: [
      { label: "How the system works", href: "/system" },
      { label: "Pricing", href: "/pricing" },
      { label: "Belkins alternative", href: "/compare/belkins-alternative" },
    ],
  },
  {
    slug: "google-ads",
    title: "Google Ads Measured in Booked Meetings, Not Clicks | ISOVERTIC",
    dateModified: "2026-09-10",
    metaDescription: "Google Ads for healthcare, biotech, medical devices, and life sciences, measured in booked meetings and cost per meeting, not clicks.",
    eyebrow: "Paid search",
    h1: "Google Ads measured in booked meetings, not clicks.",
    lead: "Isovertic is the growth agency for healthcare, biotech, medical devices, and life sciences tools and diagnostics. We build and run Google Ads campaigns that put qualified meetings on your sales team's calendar and tell you exactly what each meeting cost. CEOs, presidents, VPs of commercial, VPs of marketing, chief operating officers, and chief financial officers hire us when their advertising is producing activity that will not convert into real conversations with a chief medical officer, a director of billing, a principal investigator, or a practice administrator.",
    callout: {
      label: "Where this lives",
      body: "Google Ads begins at Excitation: $5,000 per month plus ad spend, one managed campaign, one landing page, one-business-day follow-up, and a monthly strategy call. Amplification adds more campaigns. A second product line is $1,000 per month per line. Pricing is published.",
    },
    sections: [
      { h2: "What this actually is", body: [
        "A managed Google Ads campaign, a landing page built to receive the click, one-business-day follow-up on the inbound lead, and a monthly report centered on cost per booked meeting. Not a click count. Not a dashboard your team has to translate.",
        "We run ads against the searches your buyers make when they are already looking for a solution: a device model, a regulation, a billing code, a clinical protocol, a specific service. The ad leads to a page that answers that exact question in plain language and gives one clear next step. Your team sees the meetings that came out of it, not a pile of impressions.",
      ]},
      { h2: "Why this kind of buyer requires a different setup", body: [
        "The healthcare, biotech, medical device, and life sciences tools and diagnostics buyer is not casual. A medical director may need a clinically defensible answer before they will book time. A director of billing wants a plain explanation of what actually happens in the office. A principal investigator wants to see the assay data on the same page as the offer. A founder looking for a vendor after a board request will not spend 30 seconds on a home page that reads like a brochure.",
        "Every campaign we run has a landing page written for the reader who clicked. Every page has a real next step: book a meeting, request a scoping call, download the specification sheet, join a briefing. The ad, the page, the follow-up, and the meeting are one connected job owned by one team.",
      ]},
      { h2: "The deliverables, by name", body: [], list: [
        "One Google Ads campaign built, launched, and managed inside Excitation. More campaigns in Amplification and Quantum Leap when the sale supports them.",
        "One landing page for the campaign, refreshed when the campaign says the page needs a revision.",
        "Weekly build, review, and adjustment by the people running the account.",
        "One-business-day follow-up on inbound leads, with the process wired into your intake.",
        "A monthly report with cost per booked meeting, the campaign context behind the number, and what we are changing next.",
        "A second product line available as an add-on at $1,000 per month per line.",
        "The HIPAA form-and-call stack at $750 per month when the campaign runs against protected health information rules, built against the [HHS OCR online tracking guidance](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/hipaa-online-tracking/index.html).",
      ]},
      { h2: "Which package includes Google Ads", body: [
        "Google Ads begins at Excitation, $5,000 per month plus ad spend. It includes the Ground State publishing program, one managed Google Ads campaign, one campaign landing page, 16 social posts a month, a monthly strategy call, one-business-day follow-up for inbound leads, and the $15,000 website rebuild spread across the 12-month engagement.",
        "Amplification, $10,000 per month plus ad spend, adds a larger publishing program, a YouTube channel, weekly account review, and one outbound seat with meetings verified against the meeting quality standard.",
        "Quantum Leap, from $25,000 per month plus ad spend, runs the program across two or more brands with two outbound seats, in-house creative, and media buying across streaming and broadcast when the math supports it.",
        "Ground State does not include Google Ads. If your budget is not ready for paid advertising, the more honest first move is to publish the material that lets buyers find and assess you over time, then add ads when the site can carry the sales argument. See the full package terms on the [pricing page](/pricing).",
      ]},
      { h2: "The honest limit", body: [
        "Below about $1,000 per month in Google Ads spend, there is usually not enough activity for reliable learning. We will not take a $300 monthly spend and promise a dependable meeting rate. Ground State plus published content is the honest recommendation at that level.",
        "Paid search can bring a prospect to the door. It cannot make your sales team respond, qualify the inquiry, or close. The number we report is cost per booked meeting because it is closer to the work your team actually does. Sales discipline after the meeting appears is still your job.",
        "This works best when your buyer already searches in specific language. If your sale depends on teaching an entirely new category, Google Ads is often not the first place to spend.",
      ]},
      { h2: "What we don't do", body: [
        "We are not a click-buying vendor that emails an unread dashboard once a month. We are not a general promotion shop that runs ads to an unprepared home page. We do not report a high click count as if it were a sales result. We do not conceal the ad spend inside a management fee. You see it, approve it, and can judge it beside the meeting record.",
      ]},
    ],
    faqs: [
      { q: "What budgets do you manage?", a: "Excitation is built for $1,000 to $5,000 a month in ad spend. Below about $1,000 a month there is not enough activity for reliable learning, and Ground State is the honest recommendation. Above $5,000, Amplification runs more campaigns." },
      { q: "Do you require your landing pages?", a: "No, but accounts convert better when the page and the ad are built by the same team, and ours usually are." },
      { q: "How fast until results?", a: "A usable cost per meeting typically emerges in weeks four through eight of the 90 day ramp." },
      { q: "Do you do Performance Max?", a: "Where it serves meeting quality. We feed it qualified conversion signals so it optimizes toward meetings, not form spam." },
    ],
    disciplineNote: serviceDiscipline["google-ads"],
    pipelineCta: servicePipelineCta["google-ads"],
    related: [
      { label: "Healthcare industry page", href: "/industries/healthcare" },
      { label: "Pricing", href: "/pricing" },
      { label: "System", href: "/system" },
    ],
  },
  {
    slug: "seo-content",
    title: "Articles, Newsletters, and Video That Get Your Company Found and Cited | ISOVERTIC",
    dateModified: "2026-09-10",
    metaDescription: "Articles, newsletters, social posts, and video for healthcare, biotech, medical devices, and life sciences. Publishing that a scientist or clinician can find, cite, and forward.",
    eyebrow: "Search and content",
    h1: "Articles, newsletters, and video that get your company found and cited.",
    lead: "Isovertic is the growth agency for healthcare, biotech, medical devices, and life sciences tools and diagnostics. We publish the articles, newsletters, social posts, and video that put your company in front of the buyer already looking for what you sell. Founders, CEOs, presidents, VPs of commercial, VPs of marketing, chief scientific officers, chief medical officers, medical directors, principal investigators, practice administrators, and directors of billing hire us when their website has to earn a serious reader's trust before a salesperson ever joins the conversation.",
    callout: {
      label: "Where this lives",
      body: "Ground State includes one published article, one newsletter, eight social posts, and a monthly report, with the website rebuild included. Excitation doubles social to 16 posts. Amplification adds a YouTube channel. Pricing is published.",
    },
    sections: [
      { h2: "What this actually is", body: [
        "A steady, published rhythm of articles a scientist or clinician can find, cite, and forward. Not a blog that fills an empty navigation item. Not a content library that reads like it was written for a general audience by someone who has never sat in a clinical or scientific meeting.",
        "A principal investigator comparing an assay wants a clear write-up of how yours performs. A practice administrator trying to price a service change wants a plain explanation of what actually happens in the office. A chief medical officer preparing for a committee wants evidence before the room votes. If your site has the answer in language they recognize, you have a real advantage before your salesperson makes the first call.",
        "The writing is built for the scientist or clinician, not a general audience. We work from your evidence, your approved claims, your product knowledge, your clinical or scientific review process, and the objections your salespeople hear on real calls. If the answer needs a caveat, it gets one. If your medical, legal, and regulatory reviewer needs to see it first, we set up that path.",
      ]},
      { h2: "The deliverables, by name", body: [], list: [
        "Articles on your site, written from your source material and reviewed for accuracy.",
        "A newsletter sent to your list, with the article, the reason it matters, and a real next step.",
        "Social posts across the channels you actually use, pointing back to the article and to the offer.",
        "A YouTube channel at Amplification and above, with research, script, production, and publishing handled by our team.",
        "A short monthly report listing what was published, how it performed, and what is scheduled next.",
        "Sales enablement material your team can send after a call, before a committee review, or when a prospect asks for proof.",
      ]},
      { h2: "Why publishing matters for this kind of sale", body: [
        "Healthcare, biotech, medical device, and life sciences tools and diagnostics buyers do diligence before they take a meeting. Google's own guidance says search visibility takes four months to a year to move, per [Google Search Central](https://developers.google.com/search/docs/appearance/site-names). Sales cycles run 125 days to 24 months. That gap between first search and closed deal is exactly where a real publishing program earns its money. You cannot cold-call your way through it, and a paid ad without a page worth reading after the click is a fast way to spend a budget with nothing to show.",
        "Every piece we publish also makes the rest of the program stronger. A Google Ads landing page needs a real article to link to. An outbound message needs a useful follow-up link. A salesperson needs a credible written answer when a buyer asks for evidence. The website turns into a working library your company owns, rather than a set of claims that vanish when a campaign ends.",
      ]},
      { h2: "Which package includes publishing", body: [
        "Ground State, $2,500 per month. One published article, one newsletter, eight social posts a month, one monthly report, and the $15,000 website rebuild and hosting spread across the 12-month engagement. The right first step for a company that needs to appear regularly before it adds paid advertising or outbound.",
        "Excitation, $5,000 per month plus ad spend. Doubles social to 16 posts a month, adds a managed Google Ads campaign, a landing page, one-business-day inbound follow-up, and a monthly strategy call.",
        "Amplification, $10,000 per month plus ad spend. Higher-volume articles and social, a YouTube channel, weekly account review, one outbound seat with meetings verified against the meeting quality standard, and the option to add the HIPAA form-and-call stack at $750 per month or the MLR review gate at $500 to $1,200 per month.",
        "Quantum Leap, from $25,000 per month plus ad spend. The publishing program run across two or more brands, in-house video and photography, two outbound seats, media buying across streaming and broadcast, and a quarterly operations audit.",
        "Every package is a 12-month engagement. Every package includes the website rebuild and hosting. See the full breakdown on the [pricing page](/pricing).",
      ]},
      { h2: "The honest limit", body: [
        "Published work compounds slowly. You may see the first signs that pieces are being found around month three. The effect usually gets clearer from month six. If you need meetings sooner, pair publishing with a Google Ads campaign or an outbound seat. We will not tell a founder that one article repairs a quarter. It does not.",
        "This also works when your buyers already search in specific language: a gene, a regulation, a billing code, a device model, a clinical protocol. If your category is so new that nobody is looking for it yet, publishing alone cannot put a meeting on the calendar. We will tell you that before you sign.",
      ]},
      { h2: "What we don't do", body: [
        "We are not a volume writing vendor, a general promotion shop, or a studio that ships clever posts without knowing what happens after the click. We do not publish clinical or scientific claims your reviewer has not seen. We do not hand your team a topic spreadsheet and ask them to turn it into work. We plan, write, review, publish, and report.",
      ]},
    ],
    faqs: [
      { q: "How long until publishing produces meetings?", a: "You may see the first signs around month three. The effect usually gets clearer from month six. If you need meetings sooner, pair publishing with Google Ads." },
      { q: "Do you use AI to write?", a: "We use AI in research and production tooling. Every published page is planned, edited, and fact-checked by a person, and reads like it." },
      { q: "Do you do link building?", a: "We earn links with original, useful pages rather than buying them." },
    ],
    disciplineNote: serviceDiscipline["seo-content"],
    pipelineCta: servicePipelineCta["seo-content"],
    related: [
      { label: "Web development", href: "/web-development" },
      { label: "Field notes", href: "/field-notes" },
      { label: "System", href: "/system" },
    ],
  },
  {
    slug: "web-development",
    title: "The Website That Works Like Your Best Salesperson | ISOVERTIC",
    dateModified: "2026-09-10",
    metaDescription: "Website rebuilds for healthcare, biotech, medical devices, and life sciences. Included in every package. You own the code and the domain.",
    eyebrow: "Build",
    h1: "The website that works like your best salesperson.",
    lead: "Isovertic is the growth agency for healthcare, biotech, medical devices, and life sciences tools and diagnostics. We rebuild the website into the salesperson that works while your team is in clinic, in the lab, with a customer, or asleep. Founders, CEOs, presidents, chief operating officers, VPs of commercial, VPs of marketing, and chief medical officers hire us when their site has to convince a chief scientific officer, a director of billing, a principal investigator, a medical director, or a practice administrator that the company on the other end is real, ready, and worth a meeting.",
    callout: {
      label: "Where this lives",
      body: "The $15,000 website rebuild is included in every package and spread across the 12-month engagement. Hosting is included. You own the code and the domain. Pricing is published.",
    },
    sections: [
      { h2: "What this actually is", body: [
        "A full website rebuild, hosting, ownership of your code and domain, and pages built to receive a search visitor, an ad click, a referral, or an outbound reply and give that person a credible reason to book a meeting. Not a brochure. Not a design project handed off and forgotten.",
        "Most company sites in this space describe the company, list some services, and wait for someone to already be convinced. That is not enough for a scientific or clinical sale. Your buyer is doing diligence. They want to know whether you understand their problem, whether the evidence holds up, whether you operate in their setting, what the next step looks like, and who will answer if they reach out. We rebuild the site so those answers are on the page, not hidden behind a contact form.",
      ]},
      { h2: "Why the website is the load-bearing piece", body: [
        "Every part of the program lands on the site. A Google Ads campaign needs a landing page worth reading after the click. An outbound message needs a real page to send the prospect to. A published article needs a home. A streaming television spot needs a page ready for the branded search that follows two weeks later. When the site cannot carry the argument, nothing else in the program pays off, and every other line item is subsidizing the weakness.",
        "The site loads quickly and can be found by search engines and by AI answer engines. It is built so a scientist or clinician can read the evidence, understand the offer, see the price when a price belongs on the page, and take the next step without fighting through animations or a maze of navigation. Good design here is useful design.",
      ]},
      { h2: "The deliverables, by name", body: [], list: [
        "A full website rebuild included in every package as a $15,000 value spread across the 12-month engagement.",
        "Hosting included for the engagement.",
        "Ownership of your code and your domain, permanent, with no vendor lock.",
        "Pages that present the offer, the evidence, the price where appropriate, and the next step in plain language the buyer recognizes.",
        "A site built for search engines and AI answer engines, loading quickly, with the technical work done by our engineering team.",
        "Landing pages for advertising campaigns in Excitation and above, refreshed as the evidence from the campaign calls for it.",
        "The HIPAA form-and-call stack at $750 per month for healthcare accounts, built against the [HHS OCR online tracking guidance](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/hipaa-online-tracking/index.html).",
      ]},
      { h2: "Which package includes the rebuild", body: [
        "Every package. The $15,000 website rebuild is included in Ground State, Excitation, Amplification, and Quantum Leap and spread across the 12-month engagement. Hosting is included.",
        "Ground State, $2,500 per month. Rebuild plus one published article, one newsletter, eight social posts, and one monthly report.",
        "Excitation, $5,000 per month plus ad spend. Ground State plus one Google Ads campaign, a campaign landing page, 16 social posts, a monthly strategy call, and one-business-day inbound follow-up.",
        "Amplification, $10,000 per month plus ad spend. Higher-volume publishing, a YouTube channel, weekly account review, one outbound seat with meetings verified against the meeting quality standard, and the option to add the HIPAA or MLR compliance stacks.",
        "Quantum Leap, from $25,000 per month plus ad spend. Two brands, in-house creative, two outbound seats, media buying across streaming and broadcast, and a quarterly operations audit.",
        "If the engagement ends early, the unbilled balance of the $15,000 rebuild is due on the final invoice, prorated to the months served. Nothing else is added. Your code and domain stay with you. See the [pricing page](/pricing).",
      ]},
      { h2: "The honest limit", body: [
        "We build on our own engineering stack. If your company must stay on Wix or Squarespace, we are not the right shop, and we will say so before you pay us anything.",
        "A rebuilt website does not replace a clear offer or a sales team that responds to buyers. It gives both a better place to land. If nobody is searching for your category yet, the site cannot create those searches on its own. If your offer is still unsettled, we will help identify what needs to be resolved, but design alone will not resolve it.",
        "Google's own guidance says search visibility takes four months to a year to move after a site changes, per [Google Search Central](https://developers.google.com/search/docs/appearance/site-names). Healthcare, biotech, medical device, and life sciences sales cycles run 125 days to 24 months. The 12-month engagement is set to that reality, not to a billing convenience.",
      ]},
      { h2: "What we don't do", body: [
        "We are not a template vendor, a general promotion shop, or a design studio that ships a homepage image and sends you to find someone else to make it work. We do not leave you with a site your team cannot own. We do not treat speed, readability, or findability as extras.",
      ]},
    ],
    faqs: [
      { q: "Do you work with WordPress or Webflow?", a: "We migrate from them. New builds ship on our stack because speed, findability, and ownership are the point." },
      { q: "How long does a build take?", a: "A commercial site of 15 to 40 pages typically ships in 6 to 10 weeks inside the 90 day ramp, content included." },
      { q: "Do we own the code?", a: "Fully. Repo, content, and infrastructure accounts are yours." },
      { q: "Can you just do the website?", a: "The rebuild is included in every package, so the honest answer is that you get the site and the step that runs on it. Sites built as part of the full program convert better because the messaging is shared with the ads and outbound from day one." },
    ],
    disciplineNote: serviceDiscipline["web-development"],
    pipelineCta: servicePipelineCta["web-development"],
    related: [
      { label: "SEO and content", href: "/seo-content" },
      { label: "Brand and design", href: "/design-brand" },
      { label: "System", href: "/system" },
    ],
  },
  {
    slug: "tv-ctv-advertising",
    title: "Streaming Television, Broadcast, and Radio That Support the Sale | ISOVERTIC",
    dateModified: "2026-09-10",
    metaDescription: "Streaming television, broadcast, and radio for healthcare, biotech, medical devices, and life sciences when the sales math supports it.",
    eyebrow: "Media",
    h1: "Streaming television, broadcast, and radio that support the sale.",
    lead: "Isovertic is the growth agency for healthcare, biotech, medical devices, and life sciences tools and diagnostics. We plan, place, and measure streaming television, broadcast, and radio when the sales math supports it, and we say no when it does not. Founders, CEOs, presidents, chief operating officers, chief financial officers, VPs of commercial, and VPs of marketing hire us when the sale is considered, the buying committee is cautious, and the company needs to look established before a chief medical officer, a chief scientific officer, a medical director, or a procurement committee will give the sales team time.",
    callout: {
      label: "Where this lives",
      body: "Media is available in Amplification and included more fully in Quantum Leap. Ground State and Excitation do not include media buying. That is intentional. Pricing is published.",
    },
    sections: [
      { h2: "What this actually is", body: [
        "A media plan, produced spots, placement in the markets that fit your sale, and a monthly report that compares markets that ran the campaign with markets that did not. Not a prestige buy. Not a national schedule your team cannot connect to a conversation.",
        "Connected television, often called CTV, is streaming television watched through apps and connected devices. It opened a door that used to stay shut for growing companies. Instead of a broad national schedule with little control, we can focus a test on the locations, audiences, or professional segments that matter to your sale. Broadcast and radio still earn a place when regional density matters. A specialty practice group, a regional health system, or a company selling into a concentrated market may benefit from showing up where its buyers live and commute.",
        "We place media because the numbers and the sales situation make the case, not because television sounds impressive on an investor update.",
      ]},
      { h2: "Why media can move a considered sale", body: [
        "A medical practice choosing a new partner, a hospital evaluating a service, a research leader considering a platform, or a large group evaluating a device may have seen very few companies like yours on a screen. A buyer who has seen your company before is more likely to open the email, take the call, or give your product page a serious look. That familiarity is the specific job of the media buy. It is not a substitute for the site or the follow-up. It is a supporting layer for both.",
        "The measurement has to be plain. We compare activity in the markets that saw the campaign with the markets that did not. We look at direct visits, branded searches (people typing your company name), inbound interest, and the response to outreach. Then we review those movements next to booked meetings. Television is not magic. It gives your other sales work a more familiar name to stand on.",
      ]},
      { h2: "The deliverables, by name", body: [], list: [
        "A produced spot for streaming television, with creative that survives the same reader who will check your site the next day.",
        "Broadcast and radio spots where regional density makes those channels earn their spend.",
        "A written media plan with the audience, the geography, the flighting, the spend, and the reason each placement is on the plan.",
        "Placement and buying run by the same team that runs your site, your ads, and your outbound.",
        "A monthly report that compares campaign markets with control markets and reviews the change beside inbound activity and meetings.",
        "A written recommendation to continue, revise, or stop after the evidence is in.",
        "In-house video, photography, and design production in Quantum Leap for larger and multi-brand programs.",
      ]},
      { h2: "Which package includes media", body: [
        "Media is available in Amplification, $10,000 per month plus ad spend, which also includes the higher-volume publishing program, Google Ads, a YouTube channel, weekly account review, and one outbound seat. Amplification fits a company that already has the basics in place and wants media to support a defined sales effort.",
        "Quantum Leap, from $25,000 per month plus ad spend, runs the system across two or more brands with two outbound seats, in-house creative production, and media buying across streaming television, broadcast, and radio when it fits. It is built for later-stage healthcare, biotech, medical device, and life sciences groups running two or more brands from one operating team.",
        "Ground State and Excitation do not include media buying. That is intentional. First build the website that can answer a buyer's questions, publish the material, run paid search where buyers already look, and make sure the sales team can carry the meetings. Media becomes useful after those pieces are already doing their jobs. See the full package terms on the [pricing page](/pricing).",
      ]},
      { h2: "The honest limit", body: [
        "Media is worth testing when being known helps the sale. It fits regional healthcare, high-consideration business sales, and companies whose buyers need repeated evidence that the company is real and established. It is not the right first move for a company that still cannot be found by people actively searching for what it sells.",
        "A television spot does not replace a clear offer, a useful website, or a salesperson who follows up. It can support all three. It cannot rescue any of the three. We will say no to a media test when the underlying sales work is not ready.",
        "The evidence is directional, not a laboratory instrument. A buyer may see a spot, then search a week later, then ask a colleague, then take a call two months after that. We can measure meaningful movement and compare markets. We will not claim that one viewing event closed a complex healthcare sale.",
      ]},
      { h2: "What we don't do", body: [
        "We are not a media vendor that sells inventory without asking what happens after the prospect visits your site. We are not a creative shop looking for an award entry. We do not recommend television because the founder likes television. We do not bury spend under vague fees. You can see the plan, the placements, the creative work, and the report.",
      ]},
    ],
    faqs: [
      { q: "What is the minimum budget?", a: "Connected television tests run at $5,000 to $50,000 a month in media, plus creative. The management fee is the package fee, not a hidden media markup." },
      { q: "Can you target locally?", a: "Yes. Streaming buys can focus on geography, audience, and the markets where your sales team needs more familiarity." },
      { q: "How do we know it works?", a: "We compare campaign markets with control markets, then review inbound activity and meetings. We set the measurement plan before the first dollar runs." },
      { q: "Do you do production?", a: "Yes. On Amplification a production day is included each quarter. On Quantum Leap creative production is in-house as part of the package." },
    ],
    disciplineNote: serviceDiscipline["tv-ctv-advertising"],
    pipelineCta: servicePipelineCta["tv-ctv-advertising"],
    related: [
      { label: "System", href: "/system" },
      { label: "Pricing", href: "/pricing" },
      { label: "Field notes", href: "/field-notes" },
    ],
  },
  {
    slug: "design-brand",
    title: "Design and Brand That Make the Sale Easier | ISOVERTIC",
    dateModified: "2026-09-10",
    metaDescription: "Design and brand for healthcare, biotech, medical devices, and life sciences. Identity, message, decks, and pages that survive a scientific or clinical reader.",
    eyebrow: "Brand",
    h1: "Design and brand that make the sale easier.",
    lead: "Isovertic is the growth agency for healthcare, biotech, medical devices, and life sciences tools and diagnostics. Design and brand run across everything else we do. We are not a stand-alone identity shop, and design here is not decoration with a nice invoice. Founders, CEOs, presidents, chief operating officers, VPs of commercial, and VPs of marketing rely on it when the visible surfaces of their company have to survive a chief medical officer, a chief scientific officer, a principal investigator, a medical director, a procurement committee, or a director of billing.",
    callout: {
      label: "Where this lives",
      body: "Design and brand is a supporting layer, not a seventh step. It is included in Amplification and Quantum Leap and available as defined production work on lower packages. A video and photography production day is $4,500. Pricing is published.",
    },
    sections: [
      { h2: "What this actually is", body: [
        "An identity system, a message system, and the applied design work on the website, landing pages, decks, one-pagers, video, and photography that a buyer sees before, during, and after a sales conversation. Every surface has to make the same company look coherent, credible, and ready for the work. Not decoration. Not a mood board. Not a portfolio piece.",
        "The reader judges quickly, even when careful. A chief medical officer looks for evidence and seriousness. A principal investigator looks for technical fluency. A director of billing looks for clarity. When the website, the deck, the outreach email, and the landing page tell different stories, the prospect has to do the reconciliation. They usually do not bother.",
      ]},
      { h2: "Why this sits inside the engagement instead of beside it", body: [
        "Design and brand at Isovertic are a supporting layer across every step we run: the website, the published articles, the Google Ads, the streaming and broadcast media, the outbound meetings, and the training. Not a separate project handed off to a separate vendor. The same team that sees what happens after a prospect opens the deck, visits the campaign page, or joins a sales call sets the standard for what the design has to do.",
        "If the identity does not work on the website, in an outreach message, and in a sales document, it is incomplete. If the message cannot be supported by approved evidence, a new color palette is not the fix. That is the operating standard.",
      ]},
      { h2: "The deliverables, by name", body: [], list: [
        "An identity system with wordmark, type, color, and clear rules for use.",
        "A message system that gives the company one consistent way to explain the offer.",
        "Sales material including decks, one-pagers, and proposal material when the scope calls for them.",
        "Interface design for the website and landing pages we build.",
        "Landing page design that matches the advertising and the sales conversation that follows.",
        "Video and photography production in-house at Quantum Leap, with production support at Amplification.",
        "A video and photography production day available as a $4,500 add-on, with edited assets delivered.",
        "Design review connected to the evidence, claims, and operating context of healthcare, life sciences, biotech, and medical device work.",
        "The MLR review gate at $500 to $1,200 per month plus setup for biotech, medical device, and pharma accounts. A named reviewer, a sign-off log for each asset, and a claim library your team can reuse.",
      ]},
      { h2: "Which package includes it", body: [
        "Design and brand is a supporting layer across Build, Rank, Run, Buy, Book, and Educate. It shows up wherever the work needs an identity, a page, a deck, a one-pager, or a visual asset.",
        "Amplification, $10,000 per month plus ad spend, combines higher-volume publishing, Google Ads, a YouTube channel, weekly account review, and one outbound seat. Design keeps those materials coherent across the channels a buyer sees.",
        "Quantum Leap, from $25,000 per month plus ad spend, is the two-brand program with in-house video, photography, and design, two outbound seats, and media buying across streaming and broadcast.",
        "Ground State and Excitation can add defined production work when it supports the engagement. A video and photography production day is $4,500.",
        "A stand-alone identity project is rare. It can be appropriate when the company has a real commercial problem a clear identity and message system will address. More often the identity work belongs inside the broader engagement, where we can make sure it survives contact with the actual material buyers see. See the [pricing page](/pricing).",
      ]},
      { h2: "The honest limit", body: [
        "Design will not fix an unclear offer, unsupported claims, or a sales team that does not follow up. It can make a strong offer more legible and credible. It cannot make a weak promise true.",
        "It also cannot replace the evidence a scientific or clinical sale requires. A medical director still needs clinical support. A principal investigator still needs technical detail. A director of billing still needs a plain explanation of the operational change. Good design makes those answers easier to find and use. It does not ask the buyer to accept less proof.",
        "If all you need is a logo with no connection to the site, the sales material, or the message, we are probably not the right shop. There are excellent independent designers for that work, and we will say so rather than force a larger program into a smaller problem.",
      ]},
      { h2: "What we don't do", body: [
        "We are not a creative shop that measures success by how a piece looks in a portfolio. We are not a general promotion shop that starts with a mood board and discovers the offer later. We do not make a deck beautiful while leaving its claims unclear. We do not use design to cover for missing proof.",
      ]},
    ],
    faqs: [
      { q: "Do you do logo only projects?", a: "Rarely. Identity separated from the message and the sales surfaces usually ends up unused. We scope brand work inside pipeline engagements." },
      { q: "What does brand work cost?", a: "Inside Amplification and Quantum Leap it is included as a supporting layer. A production day is $4,500 at any package." },
      { q: "Who does the work?", a: "Senior hands only. No juniors, no templates, no outsourcing." },
    ],
    disciplineNote: serviceDiscipline["design-brand"],
    pipelineCta: servicePipelineCta["design-brand"],
    related: [
      { label: "Web development", href: "/web-development" },
      { label: "System", href: "/system" },
      { label: "Results", href: "/results" },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const servicesOverview = {
  eyebrow: "Services",
  h1: "Services that book meetings, not reports.",
  lead: [
    "Isovertic is the growth agency for healthcare, biotech, medical devices, and life sciences. We build the website that gets found by the buyer already searching for what you sell, then we spend advertising only on those people. One team owns the site, the publishing, the ads, the media, the outbound, and the training. That is what keeps the work connected to a real meeting on your calendar.",
    "This page is for founders, CEOs, presidents, VPs of commercial, chief scientific officers, chief medical officers, medical directors, principal investigators, VPs of regulatory, practice administrators, and directors of billing who want to see the offer before they book a call. Six connected steps, four ways to buy them.",
  ],
  protocolListing: {
    heading: "Educate: Protocol team training",
    blurb: "One or two days at your office. Eight runbooks, and a follow-up call at 30 days. $5,000 for one department or $20,000 for a full team.",
  },
  supportingListing: {
    eyebrow: "Supporting layer",
    heading: "Brand and design",
    blurb: "Identity, message system, sales materials, and interface design across the work. Not a seventh step. It supports all six.",
  },
  steps: [
    { h2: "01 Build. The website that does the sales work", body: [
      "Build gives you a website that answers the questions your buyers actually type and shows the proof, the offer, and the next step while your team is asleep or in a meeting.",
      "Your best salesperson cannot talk to everyone at once. Your website can carry the first conversation, provided it is built to answer what a chief scientific officer, a medical director, a principal investigator, a VP of regulatory, or a director of billing needs to know.",
      "What shows up: a full website rebuild, included in every package, valued at $15,000 across the year; hosting included; you own your code and your domain; a site that loads fast and can be found by search engines and AI answer engines; proof, pricing, and the next step visible on every page.",
      "Honest limit. We build on our own stack. If you must stay on Wix or Squarespace, we are not the right shop and we will say so.",
    ]},
    { h2: "02 Rank. Published answers your buyers can find", body: [
      "Rank produces the articles, newsletters, and social posts that help buyers answer real questions before they contact you. The goal is a cited, useful page a buyer can send to a colleague, a supervisor, or a compliance officer.",
      "Ground State includes one published article, one newsletter, eight social posts, and the monthly report for $2,500 per month. It is the correct place to start if you need a regular presence but are not ready to buy advertising.",
      "Honest limit. Search results build over time. You should see early movement from month three, more useful momentum from month six. If the calendar needs meetings sooner, pair Rank with Run.",
    ]},
    { h2: "03 Run. Google Ads measured in meetings", body: [
      "Run manages Google Ads around the searches your buyers make when they need an answer now. We build and adjust the campaign, keep the landing page current, and report what a qualified meeting cost.",
      "Excitation is $5,000 per month plus advertising spend. It includes the Ground State work, one Google Ads campaign, one campaign landing page, lead follow-up within one business day, 16 social posts, and a 60-minute strategy call each month.",
      "Honest limit. Below about $1,000 a month in Google Ads spend, the platform cannot collect enough activity to produce reliable results. If that is your budget, Ground State plus organic work is the better recommendation.",
    ]},
    { h2: "04 Buy. Media when recognition helps the sale", body: [
      "Buy places your message in streaming television, broadcast, and radio when those channels help the sale. It is available to healthcare, biotech, medical device, and life sciences companies that need more than search and direct outreach, but it does not replace either.",
      "For some regional healthcare providers, multi-location groups, and high-consideration business sales, a buyer who recognizes the company is more willing to take the meeting. For a new company with a weak website, media simply makes more people aware of the weakness. We do not recommend that version.",
      "Honest limit. Media works when recognition assists a sale that already has a credible site and a clear offer behind it. It is not the first move for a company still testing whether buyers can find and trust its website.",
    ]},
    { h2: "05 Book. Qualified meetings with a written brief", body: [
      "Book runs outbound through phone, email, and LinkedIn. We qualify the person and the conversation, then put a qualified meeting on your calendar with a written brief for your salesperson.",
      "Amplification is $10,000 per month plus advertising spend. It adds higher-volume publishing, a YouTube channel, one outbound seat, and weekly account review. A named person on your side must own the calendar.",
      "Honest limit. Do not buy outbound first if the website cannot defend the pitch. We Build first, then begin outreach when a buyer can verify what the email says.",
    ]},
    { h2: "06 Educate. Runbooks for your team", body: [
      "Educate transfers the operating process to your people. One or two days at your office, eight runbooks, and a follow-up call at 30 days.",
      "The Google Ads runbook is written by the Google Ads specialist. The compliance runbook is written by the compliance officer. The life-science runbook is written by our molecular biologist. Your team receives guidance from the people who carry responsibility for the work.",
      "One department, one day, $5,000. Full team, two days, $20,000. A Protocol day for current clients, $3,500. This works when your team can commit one focused day. If they cannot, do not buy it.",
    ]},
  ],
  supporting: { h2: "Brand and design supports the six steps", body: [
    "Brand and Design is a supporting layer, not a seventh step. It covers identity, message system, sales materials, and interface design across the work. It is included in Amplification and Quantum Leap and available as an add-on to lower packages.",
  ]},
  connect: { h2: "The work has clear edges", body: [
    "Every monthly package is a 12-month engagement. The first 90 days are a written ramp. You receive leading indicators every 30 days, then pipeline and revenue reviews at months six and 12, tied to your actual sales cycle.",
    "Google says search improvements can take four months to a year, per [Google Search Central](https://developers.google.com/search/docs/appearance/site-names). We will not sell a 90-day promise for work that needs a longer window to show its value.",
    "The system works when buyers already search in the specific language of their job: a gene name, a device model, a regulation, a billing code, a protocol, a clinical question. It may produce a steady trickle rather than a flood when advertising spend is modest. If those limits do not match your business, we will say so.",
    "If you know which package you want, [start on the pricing page](/pricing) with card or bank debit. No call required. If you would rather talk it through, [book a pipeline call](/contact) and send us your best-converting landing page. Sometimes the honest answer is you are already fine, and we are happy to say so and hand you back your afternoon.",
  ]},
};
