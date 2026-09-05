// Privacy and terms copy. Plain language, no dashes. Have counsel read both before relying on them in a dispute.

export const legalUpdated = "2026-09-05";

export const privacy = {
  title: "Privacy Policy | ISOVERTIC",
  h1: "Privacy policy",
  lead: "What we collect on this site, why, where it goes, and how to get it removed. Written to be read, not skimmed.",
  sections: [
    { h2: "Who we are", body: [
      "ISOVERTIC is an assumed name of Rocket Creative LLC, 600 Johnson Ave, Suite D5, Bohemia, NY 11716. Questions about this policy go to sale@isovertic.com or 631 816 9577.",
    ]},
    { h2: "What we collect and why", body: [
      "Contact and checkout forms: your name, work email, company website, and the answers you type. We use them to reply, to run the engagement you asked about, and for nothing else. We do not sell or rent them.",
      "Payments: handled by Stripe. Card and bank details go to Stripe directly and never touch our servers. We receive the payment status, the plan you chose, your email, and the last four digits of the payment method. Stripe's own policy governs what Stripe holds.",
      "Email: notifications and receipts are sent through Resend from sale@isovertic.com. We do not use open or click tracking on those emails.",
      "Server logs: our host, Vercel, keeps standard request logs (IP address, user agent, pages requested) for security and debugging.",
    ]},
    { h2: "What we do not collect", body: [
      "This site runs no advertising pixels, no third party analytics, and no cookies for tracking. There is no Meta pixel and no Google Analytics tag. If that changes, this page will say so and a consent notice will appear first.",
    ]},
    { h2: "Where it is stored", body: [
      "Form and checkout records are stored in a Supabase database in the United States with row level security enabled and no public access. Payment records live in Stripe. Email delivery records live in Resend for 30 days.",
    ]},
    { h2: "Who sees it", body: [
      "The ISOVERTIC team, and the processors named above (Stripe, Supabase, Resend, Vercel) to the extent needed to run their service. No one else, unless the law requires it.",
    ]},
    { h2: "How long we keep it", body: [
      "Lead records: 24 months from last contact. Client records: the life of the engagement plus seven years for tax and accounting. Email delivery logs: 30 days.",
    ]},
    { h2: "Your choices", body: [
      "Email sale@isovertic.com to see what we hold about you, correct it, or have it deleted. We answer inside five business days. Deleting a record does not delete Stripe's record of a completed payment, which we are required to keep.",
    ]},
    { h2: "Healthcare clients", body: [
      "This site is not a covered entity and does not collect protected health information. For clients who are covered entities, the HIPAA form and call stack we build runs on infrastructure under a business associate agreement, documented in the client agreement.",
    ]},
    { h2: "Changes", body: [
      "The date at the top of this page moves when the policy changes. Material changes get an email to active clients.",
    ]},
  ],
};

export const terms = {
  title: "Terms of Service | ISOVERTIC",
  h1: "Terms of service",
  lead: "The terms that apply when you sign up on this site. The client agreement you receive after checkout has the full detail and controls if the two differ.",
  sections: [
    { h2: "The parties", body: [
      "Services are provided by Rocket Creative LLC, doing business as ISOVERTIC, 600 Johnson Ave, Suite D5, Bohemia, NY 11716. You are the company named at checkout.",
    ]},
    { h2: "What you are buying", body: [
      "The tier you selected at checkout, with the deliverables listed for it on the pricing page on the date of purchase. Ad spend and media are not included in tier fees; they run in accounts you own and are paid by you to the platforms.",
    ]},
    { h2: "Billing", body: [
      "Month to month: billed monthly in advance by card or ACH debit through Stripe. A 90 day ramp applies to every new engagement; after it, cancel at any month end by email to sale@isovertic.com.",
      "12 month term: billed monthly, quarterly, or up front as selected at checkout. Kinetic and Critical Mass are 1 year terms paid quarterly. The website rebuild and hosting are included for the term.",
      "Bank debits can take up to four business days to settle. The engagement start date is the date the first payment settles.",
    ]},
    { h2: "Early exit from a term", body: [
      "If a 12 month term ends before month twelve at your request, the unbilled balance of the $15,000 website build is due on the final invoice, prorated to the months served. No other early termination charge applies. Code, content, and domain remain yours.",
    ]},
    { h2: "What you provide", body: [
      "Access to your domain, ad accounts, and CRM; a point of contact who can approve work within 48 hours; and, if your content makes clinical, safety, or efficacy claims, a named reviewer with an MD or PhD credential. Delays on your side extend deliverable dates by the same period.",
    ]},
    { h2: "Ownership", body: [
      "You own the website code, content, lists, sequences, recordings, and ad accounts produced for you, from the day they are delivered. ISOVERTIC retains its runbooks, templates, and internal tooling. Protocol runbooks are licensed to one company for internal use, without resale or redistribution.",
    ]},
    { h2: "Results", body: [
      "Kinetic and Critical Mass carry a monthly qualified meeting number stated in the client agreement during the ramp. Baseline and Catalyst carry stated deliverables. No tier carries a revenue guarantee. Published case studies follow the method on the results page.",
    ]},
    { h2: "Refunds and disputes", body: [
      "Fees for months already served are not refunded. A payment disputed with your bank while services were delivered is treated as a breach; talk to us first, we answer the same business day. Disputes not resolved by conversation go to arbitration in Suffolk County, New York, under New York law.",
    ]},
    { h2: "Liability", body: [
      "Our total liability under any engagement is capped at the fees you paid in the three months before the claim. We are not liable for ad platform policy decisions, search engine ranking changes, or results that depend on your sales team closing.",
    ]},
    { h2: "Changes", body: [
      "The date at the top moves when these terms change. Changes apply to new engagements; existing engagements keep the terms in their client agreement.",
    ]},
  ],
};
