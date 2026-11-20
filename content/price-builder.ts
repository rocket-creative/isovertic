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
      { id: "publishing", name: "Search and publishing", detail: "One article, one newsletter, and eight social posts each month.", monthly: 1000 },
      { id: "ads", name: "Google Ads management", detail: "Campaigns built on the words buyers type, with one landing page.", monthly: 750, once: 750, note: "Plus 10% of what you spend on ads, billed after each month. The $750 one time charge is setup. You pay Google directly for the ads." },
    ],
  },
  {
    title: "For regulated work",
    items: [
      { id: "hipaa", name: "HIPAA forms and hosting", detail: "Intake forms, hosting, and visitor tracking set up for patient health information.", once: 1500, monthly: 300 },
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
  credit: "Audit credit toward the website",
  creditNote: "Buy a website within 60 days of the audit and the $2,500 counts toward it.",
  quoted: "Priced for you in writing",
  quotedItems: ["Outreach, by proposal", "Changes beyond your plan, $125 an hour", "Security questionnaires, $125 an hour"],
  tax: "Prices are shown before sales tax. If tax applies where you are, you see the amount before you pay.",
  terms: "No 12 month contract. Stop any monthly service with 30 days notice.",
  send: "Email this list to us",
  sendSubject: "Isovertic price list",
  sendIntro: "I would like to talk about these services:",
  checkoutSoon: "Online signup and payment are coming. For now, send us your list and we reply within one business day.",
  add: "Add one",
  remove: "Remove one",
} as const;
