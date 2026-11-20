// The price builder on the pricing page. Every figure here matches the tables in
// content/site-copy/02-website-and-pricing.md. Change a price in both places together.
// Prices are proposed until George and Kristen confirm them.

export type BuilderItem = {
  id: string;
  name: string;
  detail: string;
  /** Charged one time, in dollars. */
  once?: number;
  /** Charged every month, in dollars. */
  monthly?: number;
  /** "from" prices are a starting point. The final figure is quoted in writing. */
  from?: boolean;
  /** The buyer can choose how many, e.g. extra pages. */
  quantity?: { unit: string; max: number };
  /** Only one item with the same choice name can be on at a time. */
  choice?: string;
  /** Printed under the item when it is selected. */
  note?: string;
  /** Selected when the page opens. */
  on?: boolean;
};

export type BuilderGroup = { title: string; items: BuilderItem[] };

export const builderGroups: BuilderGroup[] = [
  {
    title: "See where you stand",
    items: [
      { id: "audit", name: "Full AI visibility audit", detail: "Fifty questions, five AI assistants, up to four competitors, and a second measurement at 90 days.", once: 2500 },
    ],
  },
  {
    title: "The website",
    items: [
      { id: "website", name: "Website, up to 15 pages", detail: "Written, designed, built, secured, and launched. Two rounds of edits.", once: 4995, choice: "site", on: true, note: "You pay half to start and half at launch." },
      { id: "catalog", name: "Catalog or large site", detail: "Product, gene, or model pages built from your data.", once: 9995, from: true, choice: "site", note: "This is a starting price. We give you the final price in writing first." },
      { id: "pages", name: "Extra pages", detail: "Each page after the first 15.", once: 250, quantity: { unit: "page", max: 40 } },
      { id: "review", name: "Security review", detail: "For a site someone else built. A written report and the fixes we recommend.", once: 2500 },
    ],
  },
  {
    title: "Hosting and care",
    items: [
      { id: "care", name: "Care", detail: "Hosting, daily backups, uptime checks, and security updates.", monthly: 50, choice: "care" },
      { id: "care-plus", name: "Care Plus", detail: "Everything in Care, plus one hour of changes each month.", monthly: 150, choice: "care" },
      { id: "catalog-care", name: "Catalog Care", detail: "For large catalog sites. Two hours of changes, and your requests are answered first.", monthly: 300, choice: "care" },
    ],
  },
  {
    title: "Monthly marketing",
    items: [
      { id: "monitoring", name: "AI visibility monitoring", detail: "We track your buyers' questions across five AI assistants every month.", monthly: 500, choice: "monitoring" },
      { id: "monitoring-fixes", name: "Monitoring and fixes", detail: "Monitoring, plus up to six hours of fixes and new pages, and one call each month.", monthly: 1500, choice: "monitoring" },
      { id: "publishing", name: "Search and publishing", detail: "One article, one newsletter, and eight social posts each month.", monthly: 1000, note: "Bought one by one, the same three cost $1,450 a month." },
      { id: "article", name: "Article only", detail: "One article a month, checked by a scientist.", monthly: 600 },
      { id: "newsletter", name: "Newsletter only", detail: "One email newsletter a month to your list.", monthly: 350 },
      { id: "social", name: "Social posts only", detail: "Eight social posts a month.", monthly: 500 },
      { id: "ads", name: "Google Ads management", detail: "Campaigns built on the words buyers type, with one landing page.", monthly: 750, once: 750, note: "Plus 10% of what you spend on ads, billed after each month. The $750 one time charge is setup. You pay Google directly for the ads." },
      { id: "linkedin-ads", name: "LinkedIn Ads management", detail: "Campaigns aimed at job titles and companies you choose.", monthly: 1000, note: "You pay LinkedIn directly for the ads." },
    ],
  },
  {
    title: "Marketing consulting",
    items: [
      { id: "consulting", name: "Consulting, monthly", detail: "Two working calls a month, a written plan we keep up to date, and answers by email in between.", monthly: 2000 },
      { id: "plan", name: "Marketing plan", detail: "A written plan for the next 12 months: who to reach, what to say, where to spend, and what to measure.", once: 3500 },
    ],
  },
  {
    title: "Video and photography",
    items: [
      { id: "headshots", name: "Team headshot visit", detail: "We come to you. Up to eight people, two retouched photos each.", once: 750 },
      { id: "headshot-extra", name: "Extra person at a headshot visit", detail: "Each person after the first eight.", once: 95, quantity: { unit: "person", max: 60 } },
      { id: "photo-half", name: "Half day photo shoot", detail: "Lab, facility, and product photos. Up to four hours and 40 edited photos.", once: 1200, choice: "photo-day" },
      { id: "photo-full", name: "Full day photo shoot", detail: "Up to eight hours and 80 edited photos.", once: 2200, choice: "photo-day" },
      { id: "product-photos", name: "Product photos, pack of ten", detail: "White background, cleaned up, ready for a catalog page.", once: 450, quantity: { unit: "pack", max: 30 } },
      { id: "testimonial", name: "Customer testimonial video", detail: "Half day shoot, two cameras, one video of 60 to 120 seconds with captions, and two short clips.", once: 2900 },
      { id: "tour-video", name: "Company, product, or lab tour video", detail: "One shoot day, one video of 60 to 120 seconds with captions, and three short clips.", once: 4500 },
      { id: "clips", name: "Short clips, pack of five", detail: "Five clips of 15 to 45 seconds with captions, cut from a shoot.", once: 600, quantity: { unit: "pack", max: 12 } },
      { id: "content-plan", name: "Quarterly content plan", detail: "One half day photo and video shoot each quarter, four clips a month, and 15 edited photos a quarter.", monthly: 1500, note: "Three month minimum." },
    ],
  },
  {
    title: "For regulated work",
    items: [
      { id: "hipaa", name: "HIPAA forms and hosting", detail: "Intake forms, hosting, and visitor tracking set up for patient health information.", once: 1500, monthly: 300 },
    ],
  },
];

// The second path. Automation is sold on its own page and is never added to the website and marketing total.
export const automationGroups: BuilderGroup[] = [
  {
    title: "Automation",
    items: [
      { id: "watch", name: "Publication watch", detail: "Up to ten products. A monthly list of new papers that used them, with summaries, PubMed links, and four drafted posts.", monthly: 290, once: 750, choice: "watch", note: "The $750 one time charge is setup. A scientist checks every summary." },
      { id: "watch-plus", name: "Publication watch plus", detail: "Up to 50 products, a weekly list, twelve drafted posts, and a citation list for your product pages.", monthly: 490, once: 750, choice: "watch", note: "The $750 one time charge is setup. A scientist checks every summary." },
      { id: "auto-replies", name: "Quote and inquiry replies", detail: "A fast first reply to every quote request, and an alert to your team.", once: 3500, monthly: 150 },
      { id: "auto-catalog", name: "Catalog pages from your data", detail: "A page template and the first 250 pages built from your product data.", once: 4500, monthly: 150, note: "Extra pages are $3 each." },
      { id: "auto-content", name: "Newsletter, post, and report drafts", detail: "Software writes the first draft. A person approves it before it goes out.", once: 1500, monthly: 150 },
    ],
  },
  {
    title: "Work, sign off, and billing",
    items: [
      { id: "auto-board", name: "Work request and sign off board", detail: "Up to three forms your team fills in, two sign off steps, and one board that shows where every job stands.", once: 2250, monthly: 150, choice: "board", note: "Can include a link for the customer to pay. The money goes straight to your own account." },
      { id: "auto-portal", name: "Work board with customer login", detail: "The same board, plus a login where your customers see their own jobs, sign off, and pay.", once: 4500, monthly: 150, choice: "board", note: "The money goes straight to your own account. We never hold it." },
      { id: "auto-billing", name: "Billing on autopilot", detail: "Invoices go out on their own, with deposits, milestone invoices, reminders, and follow up when a payment fails. Payments sync to your accounting software.", once: 2500, monthly: 150, note: "Runs in your own Stripe or QuickBooks account." },
      { id: "auto-proposal", name: "Proposal and signature flow", detail: "A proposal built from a template, sent for signature, and filed when it is signed.", once: 2500, monthly: 150 },
      { id: "auto-onboarding", name: "New customer onboarding", detail: "A new customer triggers the welcome email, the forms they need to fill in, and the tasks for your team.", once: 2000, monthly: 150 },
    ],
  },
  {
    title: "Inquiries and follow up",
    items: [
      { id: "auto-funnel", name: "Inquiry follow up sequence", detail: "An instant reply, up to five timed emails, scoring, routing to the right person, a booking link, and updates to your customer list.", once: 2500, monthly: 150 },
      { id: "auto-texting", name: "Text message follow up", detail: "Adds text messages to the follow up sequence, sent only to people who agreed to get them.", once: 500 },
      { id: "auto-status", name: "Order and sample status updates", detail: "Customers get an update at each step of their order or sample, without your team writing it.", once: 3500, monthly: 150 },
    ],
  },
  {
    title: "Documents and reports",
    items: [
      { id: "auto-intake", name: "Document intake", detail: "Software reads incoming forms, orders, and PDFs, pulls out the details, and puts them where they belong. A person checks anything it is unsure of.", once: 3500, monthly: 150 },
      { id: "auto-reports", name: "Scheduled reports", detail: "The same report built and sent on a schedule, from the tools you already use.", once: 1500, monthly: 150 },
      { id: "auto-notes", name: "Meeting notes to your customer list", detail: "Call notes and next steps filed against the right customer after each meeting.", once: 1500, monthly: 150 },
    ],
  },
];

export const builderCopy = {
  label: "Price builder",
  selected: "Your selection",
  empty: "Nothing selected yet. Tick a service to see its price.",
  once: "One time",
  monthly: "Each month",
  dueNow: "Due to start",
  dueNowNote: "Half of the website price, plus other one time items.",
  atLaunch: "Due at launch",
  firstMonth: "First monthly bill",
  from: "from",
  perMonth: "a month",
  perMonthShort: "/mo",
  each: "each",
  /** Dollars taken off the website when the audit is bought with it. */
  auditCredit: 2500,
  /** Monthly services at or above this make the website build free, on a three month term. */
  capFrom: 5000,
  /** The most that comes off a month. Above capFrom + maxDiscount the bill is the list price less this. */
  maxDiscount: 2000,
  /** The most the free build is worth: the price of the standard website. */
  freeBuildValue: 4995,
  listMonthly: "Monthly services at list price",
  discount: "Discount",
  discountNote: "Above $5,000 a month we take off the difference, up to $2,000, so your bill holds at $5,000.",
  freeBuild: "Website build, free with a three month term",
  freeBuildNote: "Commit to three months at $5,000 a month or more and we build the website free.",
  nearCap: (gap: string) => `Add ${gap} a month more and the website build is free with a three month term.`,
  rebuild: "You can buy monthly services on their own. We strongly recommend the website rebuild first. Monthly work goes further on a site that Google and AI tools can read.",
  credit: "Audit credit toward the website",
  creditNote: "Buy a website within 60 days of the audit and the $2,500 counts toward it.",
  quoted: "Priced for you in writing",
  quotedItems: ["Outreach, by proposal", "Consulting by the hour, $150 an hour", "Changes beyond your plan, $125 an hour", "Security questionnaires, $125 an hour"],
  automationQuoted: ["Reorder alerts, about $1,500", "Support inbox sorting, about $2,500", "An assistant that answers from your own documents, $3,500 to $4,500", "Anything else, quoted at a fixed price before we start"],
  automationTerms: "You own what we build. Stop the monthly fee with 30 days notice.",
  automationSubject: "Isovertic automation list",
  tax: "Prices are shown before sales tax. If tax applies where you are, you see the amount before you pay.",
  terms: "No 12 month contract. Stop any monthly service with 30 days notice.",
  send: "Email this list to us",
  sendSubject: "Isovertic price list",
  sendIntro: "I would like to talk about these services:",
  checkoutSoon: "Online signup and payment are coming. For now, send us your list and we reply within one business day.",
  add: "Add one",
  remove: "Remove one",
} as const;
