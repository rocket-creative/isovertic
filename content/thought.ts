// The field notes publication: one pinned argument, one diagnostic, one research report, an archive organized
// by argument, and one email capture. Copy for /field-notes and the essay template lives here.
// No hyphens or dashes in any string.

export type CategoryKey = "the-argument" | "pipeline-ownership" | "measurement" | "regulated-marketing";

export const categories: { key: CategoryKey; label: string; blurb: string }[] = [
  { key: "the-argument", label: "The Argument", blurb: "The ownership gap, the vendor stack tax, and the two clocks that decide whether a long cycle pipeline survives the board review." },
  { key: "regulated-marketing", label: "Regulated", blurb: "Lead capture, pixels, BAAs, and FTC health data rules for practices and healthcare adjacent companies." },
  { key: "pipeline-ownership", label: "Pipeline Ownership", blurb: "How CROs, biotech, and medtech market to buyers who read protocols, not whitepapers." },
  { key: "measurement", label: "Measurement", blurb: "What a Series A to C marketing budget can defend when cash flow is still negative." },
];

// Publish order for the live archive. Flagship is first; the rest follow on the index.
export const archiveOrder: string[] = [
  "pipeline-ownership-gap",
  "vendor-stack-audit",
  "two-clock-rule",
  "hipaa-compliant-lead-capture-2026",
  "marketing-cro-biotech-medtech",
  "series-a-c-marketing-budgets",
];

// Category for articles whose frontmatter does not carry one. New essays set category in frontmatter.
export const categoryBySlug: Record<string, CategoryKey> = {
  "pipeline-ownership-gap": "the-argument",
  "vendor-stack-audit": "the-argument",
  "two-clock-rule": "the-argument",
  "hipaa-compliant-lead-capture-2026": "regulated-marketing",
  "marketing-cro-biotech-medtech": "pipeline-ownership",
  "series-a-c-marketing-budgets": "measurement",
};

export const hub = {
  path: "/field-notes",
  title: "Field Notes on Pipeline Ownership | ISOVERTIC",
  description: "One argument we are willing to be wrong about in public, one diagnostic, original research in progress, and an archive organized by argument.",
  eyebrow: "Field notes",
  h1: "Notes from the operating side.",
  lead: "No trend summaries. One argument we are willing to defend against a smart critic, one diagnostic, one research report in progress, and an archive organized by argument, not by date. Every piece carries a number, a mechanism, and a named limit.",
  flagshipEyebrow: "The argument",
  flagshipCta: "Read the thesis",
  formerFlagshipTag: "Formerly the pinned argument",
  diagnostic: {
    eyebrow: "The diagnostic",
    title: "The Pipeline Ownership Audit",
    dek: "Ten questions. Score your pipeline ownership, get a tier recommendation and a written diagnosis. No sales call required; the report is yours to keep or ignore.",
    cta: "Take the audit",
    href: "/audit",
    time: "6 min",
  },
  research: {
    eyebrow: "Original research · in progress",
    title: "The Fragmented Vendor Report",
    dek: "We are surveying 100 growth stage founders about their marketing vendor stack, what it cost last year, and what pipeline it produced. It publishes when the hundredth response is in, with the methodology beside it.",
    cta: "Tell me when it publishes",
    list: "research_notify",
  },
  archiveH2: "The archive, by argument.",
  authorsH2: "Who writes here.",
  authorsNote: "Real named authors with real bios. When a team member drafts a piece under the founder's name we say with, not by.",
  subscribe: {
    headline: "One essay a month. Nothing else.",
    dek: "No product updates, no roundups. When we publish an argument worth defending, you get it. When we do not, you hear nothing.",
    cta: "Subscribe",
    cadence: "Monthly · unsubscribe in one click",
    list: "thought_leadership_subscriber",
    success: "You are on the list. The next argument arrives when it is ready, not on a schedule.",
  },
  editorialLink: { label: "How we decide what to publish", href: "/field-notes/editorial-standard" },
};

export const essayTemplate = {
  relatedH2: "Related arguments",
  allLink: "All field notes",
  authorEyebrow: "About the author",
  sourceLabel: "Source",
  counterLabel: "The strongest objection",
  correctionLabel: "Correction",
};

export const editorialStandard = {
  path: "/field-notes/editorial-standard",
  title: "Editorial Standard | ISOVERTIC Field Notes",
  description: "What ISOVERTIC publishes, what it refuses to, how sources are handled, how corrections work, and who writes. The standard behind every field note.",
  eyebrow: "Editorial standard",
  h1: "How we decide what to publish.",
  lead: "This page exists to answer the question an analytical reader is silently asking: is this actual thinking, or is it generated filler with a founder's name on it. Here is the standard, so you can hold us to it.",
  sections: [
    {
      h2: "What we publish",
      body: [
        "Arguments with a named claim, a named limit, and named sources. Every piece states what it believes in the first paragraph, gives the strongest version of the objection, and ends by naming where the argument stops applying.",
        "We publish when we have something to say. There is no calendar. A month with nothing worth defending is a month with no essay.",
      ],
    },
    {
      h2: "What we do not publish",
      body: [
        "Trend summaries. Lists of things to know about a topic. Drafts an AI produced that a human then lightly edited. Anything a competitor could republish unchanged under its own name. That last one is the test we apply before anything ships: if the piece would work with another firm's logo on it, the argument is not sharp enough.",
      ],
    },
    {
      h2: "How we handle sources",
      body: [
        "Every statistic links to the most primary source we can find, and the link is checked before publication. When the best available number comes from an agency survey or a vendor benchmark rather than peer reviewed research, we say so beside the number. When we cannot find the original behind a widely repeated figure, we say that too, and we cite the secondary source that carries it.",
        "We also verify our own specs before they become pages. When a source in a draft turned out not to say what the draft claimed, the claim was changed or cut. Several were.",
      ],
    },
    {
      h2: "How we handle being wrong",
      body: [
        "Corrections appear at the top of the essay with the date and what changed. We do not silently edit a number. If a reader shows us a better source, we update the piece and credit them if they want the credit.",
      ],
    },
    {
      h2: "Who writes",
      body: [
        "Real named authors with real bios and real accounts. No ghostwriting under a founder byline. When a team member drafts a piece that George reviews, the byline reads with George Stoff, not by George Stoff. Scientific and clinical content is reviewed by a named reviewer with the training to catch what the writer missed, and the reviewer is credited on the page.",
        "AI runs scheduling, deployment, data collection, and research on this site. It does not write the arguments. That split is the same one we run for clients, and it has to be visible here first.",
      ],
    },
  ],
};
