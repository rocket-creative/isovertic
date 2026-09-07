// Placeholder client quote. Kristen replaces bracketed text before publish.
// Do not invent a real quote.

export const quotePlaceholder = {
  quote: "[One to three sentences from one real client, in their own voice, about one specific outcome. No adjectives about Isovertic. Just the number or the shift.]",
  attribution: "[First name], [Role], [Company name]",
};

export const healthcareComplianceOfficer = "A compliance officer on staff signs the BAA and owns the sensitive data governance process. Not a subcontracted consultant, not a lawyer we call. On staff, on payroll, on every account that touches PHI.";

export const biotechMolecularBiologist = "Scientific content is reviewed by a molecular biologist on staff before it ships to a client's MLR reviewer. That review catches the small terminology mistakes that would waste a reviewer's cycle and delay a launch by a week.";

export const serviceDiscipline = {
  "google-ads": "Google Ads is run by Google Ads specialists on staff, not by a generalist account manager splitting time across five accounts. Every campaign is built, read weekly, and reported by the same person for the life of the engagement.",
  "seo-content": "Written by content writers on staff, structured by SEO and AEO specialists on staff, and reviewed by a subject-matter expert when the content is technical. The 147-page life science system was built by that exact team.",
  "web-development": "Built by full stack developers on staff who write production code every day, not by a templating agency. The stack we sell is the stack this site runs on, and the same engineers maintain both.",
  "outbound-appointment-setting": "Content writers on staff write the sequences by hand. The same team that wrote your website writes your outbound, so the voice on the cold email matches the voice on the landing page it links to.",
} as const;

export const servicePipelineCta = {
  "google-ads": {
    headline: "Send us your Google Ads account.",
    body: "If your account is on a Performance Max campaign that's spending on your own brand terms and calling it conversion, or if your Quality Score is stuck at 4 and nobody has told you why, [book a pipeline call](/contact) and send us view-only access. In about ten minutes we'll tell you what's firing, what's wasted, and whether the account is the problem or the landing page is. Sometimes the honest answer is the account is fine and the leads aren't calling back, and we're happy to say so and hand you back your afternoon.",
  },
  "seo-content": {
    headline: "Send us your site URL.",
    body: "If your organic traffic is flat, or if you're publishing weekly and none of it ranks or gets cited by AI answer engines, [book a pipeline call](/contact) and send us the URL. In about ten minutes we'll tell you what's indexed, what's cited, what's cannibalizing itself, and whether the fix is content or infrastructure. Sometimes the honest answer is the site is fine and the content just needs more time, and we're happy to say so and hand you back your afternoon.",
  },
  "web-development": {
    headline: "Send us your site URL.",
    body: "If your site is on WordPress or Webflow and you can't tell whether crawlers see the copy, or if your page speed score is dragging your ad quality score down with it, [book a pipeline call](/contact) and send us the URL. In about ten minutes we'll tell you what's in the HTML, what's hidden behind JavaScript, what that costs you in AI citations, and whether the fix is a rebuild or a patch. Sometimes the honest answer is the site is fine and the problem is content, and we're happy to say so and hand you back your afternoon.",
  },
  "outbound-appointment-setting": {
    headline: "Send us your best outbound sequence.",
    body: "If your reply rate is under 3% or your booked-meeting rate is a rounding error, [book a pipeline call](/contact) and paste us the current sequence. In about ten minutes we'll tell you what's broken (subject line, opening line, ask, timing, or the list), and whether the fix is a rewrite or a new list. Sometimes the honest answer is the sequence is fine and the target list is wrong, and we're happy to say so and hand you back your afternoon.",
  },
} as const;
