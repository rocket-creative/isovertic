// Healthcare and life science compliance posture. Source of truth for /industries/healthcare and the
// printable pages under /compliance. Every row is an operating commitment, not marketing copy.
// The breach history and insurance answers are statements of fact about the firm. Keep them true: update the
// limits when the policy renews and the history the day anything changes.
// No hyphens or dashes in any string.

import type { FAQ } from "./types";

export const healthcareMeta = {
  path: "/industries/healthcare",
  title: "Healthcare Marketing Compliance Posture | ISOVERTIC",
  description:
    "HIPAA aware, BAA ready growth marketing for healthcare, life science, and regulated brands. MLR workflow support and sensitive data governance built into the agreement.",
  eyebrow: "Healthcare and life sciences",
  h1: "Growth marketing for healthcare and life science companies, with the compliance posture the vertical requires.",
  lead: "Healthcare and life science buyers evaluate an agency against a standard other verticals never see: can it be trusted with protected health information, does it understand FDA promotional rules, and can it move campaigns through medical, legal, and regulatory review without breaking the timeline. Most growth agencies skip those questions. We write the answers into the agreement.",
  dateModified: "2026-09-07",
};

export const healthcareHeadings = {
  why: "Why healthcare marketing is different.",
  posture: { h2: "HIPAA posture. The compliance officer's page.", lead: "Ten rows. Each one is a yes or no operating commitment we sign, not a paragraph of reassurance.", print: "Printable version of this table", baa: "Request our BAA" },
  governance: { h2: "Sensitive data governance.", lead: "Four steps, each with a written output your compliance lead keeps.", print: "Printable version of this process" },
  cycles: { h2: "How long the sale takes, and when we judge revenue.", lead: "A healthcare sale runs about four months and a biotech or medtech sale can run two years. The agreement ties the revenue review to your cycle, and the leading indicators arrive every 30 days regardless.", link: "The full engagement and measurement standard" },
  faq: "What compliance officers ask first",
  download: { title: "Compliance packet, one page", body: "The HIPAA posture table and the four step governance process on one printable page, for the compliance officer who will not read a website." },
  ctas: { packet: "Request our BAA and compliance packet", call: "Book a compliance officer call", pricing: "Pricing is published" },
};

export const whyDifferent = [
  "A practice, a device maker, or a diagnostics company is not buying traffic. It is buying demand it can defend to a compliance officer, a review board, and, when things go wrong, a regulator. That changes what a marketing vendor has to be: a business associate with a signed agreement, a team that knows which pages a pixel may never touch, and a production process that fits inside your review gates instead of fighting them.",
  "Everything on this page is a commitment we operate to, not a claim we make. The table is the same one we hand a compliance officer before a first call, and the printable version at the bottom is meant to be forwarded.",
];

export type PostureRow = { capability: string; standard: string; sources?: { label: string; href: string }[] };

export const posture: PostureRow[] = [
  {
    capability: "Business Associate Agreement",
    standard: "We sign a BAA before any engagement that touches PHI. Our template is available on request, and we review and execute client supplied BAAs.",
  },
  {
    capability: "Covered entity and business associate awareness",
    standard: "First week discovery identifies every PHI touchpoint, categorizes each system by exposure, and routes it to a compliant workflow. The output is a written data flow map your compliance lead signs off on.",
  },
  {
    capability: "Web tracking on patient facing pages",
    standard: "No Meta pixel, Google Analytics, or third party tracker on authenticated portals, scheduling flows, or any page that can reveal PHI, unless a BAA and written authorization exist. We follow the HHS OCR guidance on online tracking technologies as it stands after the June 2024 ruling in American Hospital Association v. Becerra, which vacated the part about unauthenticated pages and left the rest intact.",
    sources: [{ label: "HHS OCR, Use of Online Tracking Technologies", href: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/hipaa-online-tracking/index.html" }],
  },
  {
    capability: "Server side event tracking",
    standard: "Where analytics is required on PHI adjacent pages we implement server side, PHI stripped event pipelines through a server container or a first party data layer, with the field list documented.",
  },
  {
    capability: "Ad platform data policies",
    standard: "We operate inside Meta's sensitive health information rules, Google's healthcare and medicines policy, and LinkedIn's advertising policies. We do not upload PHI derived audiences to any ad platform.",
    sources: [
      { label: "Meta, About Sensitive Health Information", href: "https://www.facebook.com/business/help/361948878201809" },
      { label: "Google Ads, Healthcare and medicines policy", href: "https://support.google.com/adspolicy/answer/176031" },
      { label: "LinkedIn Advertising Policies", href: "https://www.linkedin.com/legal/ads-policy" },
    ],
  },
  {
    capability: "Retargeting on sensitive pages",
    standard: "Retargeting is off by default on symptom, diagnosis, treatment, and patient portal pages. Turning it on requires client sign off and a documented lawful basis.",
  },
  {
    capability: "Form data and lead intake",
    standard: "Lead forms on PHI adjacent flows route through HIPAA eligible infrastructure: BAA covered form delivery, encrypted at rest CRMs with BAAs, and HIPAA eligible email. No PHI in Google Sheets, Slack, or any CRM without a BAA.",
  },
  {
    capability: "Breach protocol",
    standard: "A documented incident response process with covered entity notification support inside the 60 day window the HHS Breach Notification Rule sets.",
    sources: [{ label: "HHS, Breach Notification Rule", href: "https://www.hhs.gov/hipaa/for-professionals/breach-notification/index.html" }],
  },
  {
    capability: "Workforce training",
    standard: "Every ISOVERTIC staff member and contractor who touches PHI completes annual HIPAA training and signs a confidentiality agreement.",
  },
  {
    capability: "Subcontractors",
    standard: "Every subcontractor with PHI access signs a downstream BAA. The subcontractor list is available to clients on request.",
  },
];

export type GovStep = { n: string; name: string; body: string; output: string };

export const governance: GovStep[] = [
  { n: "01", name: "Data map", body: "Before any campaign launches we map every touchpoint where sensitive data could be collected, transmitted, or observed: forms, pixels, call recording, chat, CRM sync, ad platform uploads.", output: "A written data flow map, reviewed by client compliance." },
  { n: "02", name: "Classification", body: "Each data element is classified: PHI, non PHI health data, financial, biometric, or non sensitive. The class decides the tooling.", output: "A classification register per field." },
  { n: "03", name: "Tooling gate", body: "No tool enters the stack without a signed BAA for PHI, a DPA for non PHI regulated data, or explicit sign off for non sensitive data.", output: "A tooling register the client can audit at any time." },
  { n: "04", name: "Ongoing review", body: "Quarterly review of tracker inventory, pixel firing rules, ad platform audience uploads, and third party script inventory.", output: "A written compliance diff report each quarter." },
];

export const ftcCallout = {
  body: "Recent FTC enforcement against GoodRx, BetterHelp, Cerebral, and Flo Health treats disclosure of health data to advertising platforms as a Section 5 violation even where HIPAA does not apply. Our sensitive data governance is designed against that standard, not only HIPAA.",
  sources: [
    { label: "GoodRx", href: "https://www.ftc.gov/legal-library/browse/cases-proceedings/2023090-goodrx-holdings-inc" },
    { label: "BetterHelp", href: "https://www.ftc.gov/legal-library/browse/cases-proceedings/2023169-betterhelp-inc-matter" },
    { label: "Cerebral", href: "https://www.ftc.gov/legal-library/browse/cases-proceedings/222-3067-cerebral-inc-kyle-robertson-us-v" },
    { label: "Flo Health", href: "https://www.ftc.gov/legal-library/browse/cases-proceedings/192-3133-flo-health-inc" },
  ],
};

export const mlr = {
  heading: "We plug into your MLR workflow.",
  intro: "For pharma, medical device, and clinical content clients. Medical, legal, and regulatory review is a gate, and the gate is yours. Our production process fits inside it.",
  weDo: [
    "Ingest your MLR SOP in week one and align our production calendar to your gates",
    "Version control every claim, citation, and image in a shared reference library",
    "Route each deliverable through your platform, Veeva Vault PromoMats, iEnvision, or the equivalent you supply, with our staff trained on it",
    "Track cycle time by asset type and report bottlenecks to your MLR lead monthly",
    "Maintain claim libraries keyed to your approved reference set",
  ],
  youProvide: [
    "A named MLR lead with medical, legal, and regulatory reviewer contacts",
    "Access to the reference library and the review platform",
    "A written turnaround SLA for each review round",
    "An escalation path for expedited reviews",
  ],
  fda: {
    body: "We operate to the FDA prescription drug advertising rules in 21 CFR 202.1, including fair balance, risk information presentation, and substantiation. For direct to consumer prescription promotion on character limited platforms we apply the FDA's 2014 draft guidance on presenting risk and benefit information.",
    sources: [
      { label: "21 CFR 202.1, Prescription drug advertisements", href: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-202/section-202.1" },
      { label: "FDA draft guidance, Internet and social media platforms with character space limitations", href: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/internetsocial-media-platforms-character-space-limitations-presenting-risk-and-benefit-information" },
    ],
  },
};

export const claims = {
  heading: "We know the difference between a structure function claim and a disease claim.",
  cards: [
    {
      label: "Structure function claim, allowed for supplements",
      example: "Supports immune function",
      points: ["No FDA pre approval required", "Substantiation must be on file", "Must carry the DSHEA disclaimer", "Cannot imply diagnosis, treatment, cure, or prevention of disease"],
    },
    {
      label: "Disease claim, drug territory",
      example: "Prevents the flu",
      points: ["Requires FDA approval as a drug", "Cannot be made for a supplement", "Triggers FDA warning letters and FTC action"],
    },
  ],
  note: "Every claim in every asset traces back to a substantiation file we maintain with the client.",
  sources: [
    { label: "FDA, Structure Function Claims", href: "https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/structurefunction-claims" },
    { label: "FTC, Health Products Compliance Guidance", href: "https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance" },
  ],
};

export const medicare = {
  summary: "Medicare Advantage and Part D clients",
  body: "For MA and Part D plans we follow the CMS Medicare Communications and Marketing Guidelines, including material submission timelines, permitted and prohibited activities, and the Star Ratings implications of marketing conduct. Open this only if you are a plan.",
  source: { label: "CMS, Medicare Communications and Marketing Guidelines", href: "https://www.cms.gov/Medicare/Health-Plans/ManagedCareMarketing/FinalPartCMarketingGuidelines" },
};

export const complianceFaqs: FAQ[] = [
  { q: "Do you sign our BAA or use your own?", a: "Either. We have a template BAA and we execute client supplied agreements after review. Redlines usually take one round." },
  { q: "Have you ever had a HIPAA breach or an FTC health data enforcement action?", a: "No. ISOVERTIC and Rocket Creative LLC have never reported a breach of protected health information, never received an OCR inquiry, and have never been the subject of an FTC action. We keep an incident log from day one of every engagement, and we would answer this question in writing, with the log, on request. A vendor that will not put that sentence in writing is telling you something." },
  { q: "Which of our systems will your team access, and how is access provisioned and revoked?", a: "Only the systems named in the tooling register: typically the CMS, the ad accounts, the analytics property, and the CRM. Access is provisioned per named person on your identity provider or as a named seat, never a shared login, and is revoked in writing at the end of the engagement or the same day a person leaves the account." },
  { q: "How do you handle PHI in Slack, email, and tickets?", a: "It does not go there. PHI stays inside the BAA covered systems in the register. If a patient emails or messages a marketing inbox, the message is moved into the covered system and the copy is deleted." },
  { q: "What happens to our data when the engagement ends?", a: "Everything we built is yours and stays in your accounts. Our access is revoked, working copies are deleted on a documented schedule, and we confirm completion in writing." },
  { q: "Do your subcontractors access PHI, and how is that governed?", a: "Only under a downstream BAA, and only the subcontractors on the list we provide. Most engagements involve none." },
  { q: "Can we audit your controls?", a: "Yes. The data flow map, tooling register, and quarterly compliance diff exist so you can. Ask for them at any time." },
  { q: "Do you carry cyber liability insurance, and at what limits?", a: "Yes. Cyber liability and errors and omissions coverage at $1 million per claim and $2 million aggregate, which is the floor most covered entities write into a BAA for a vendor of our size. The policy covers breach response, forensics, notification, and regulatory defense. A certificate of insurance is in the compliance packet, and we will raise the limits for an engagement whose data volume calls for it." },
];

export const healthcareRelated = [
  { label: "Engagement and measurement standard", href: "/resources/engagement-and-measurement-standard" },
  { label: "HIPAA compliant lead capture", href: "/field-notes/hipaa-compliant-lead-capture-2026" },
  { label: "Field notes", href: "/field-notes" },
  { label: "Google Ads", href: "/google-ads" },
];
