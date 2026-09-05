export const formCopy = {
  emailLabel: "Work email",
  nameLabel: "Name",
  websiteLabel: "Company website",
  industryLabel: "Industry",
  tierLabel: "Which tier are you looking at?",
  spendLabel: "What do you spend on marketing today, fees plus ads, per month?",
  startLabel: "When do you want to start?",
  clinicalLabel: "Does your content make clinical, safety, or efficacy claims?",
  closerLabel: "Who takes the sales meeting when we book it?",
  numberLabel: "What number are you trying to move?",
  sourceLabel: "How did you find us?",
  continue: "Continue",
  submit: "Book the call",
  sending: "Sending",
  error: "A name, a working email, and your company website are required.",
  successTitle: "Received. We answer the same business day.",
  successBody: "You will hear from George, not a sequence. If it is urgent, the calendar link in the confirmation email books a time directly.",
  emailFallback: "Rather not fill out a form? Email",
  step1: "1 of 2",
  step2: "2 of 2",
};

const pick = { value: "", label: "Pick one" };

export const industries = [
  pick,
  { value: "Biotech or life science", label: "Biotech or life science" },
  { value: "Healthcare practice or brand", label: "Healthcare practice or brand" },
  { value: "SaaS or startup", label: "SaaS or startup" },
  { value: "Professional services", label: "Professional services" },
  { value: "Home services", label: "Home services" },
  { value: "Hospitality", label: "Hospitality" },
  { value: "Other", label: "Other" },
];

export const tiers = [
  { value: "", label: "Not sure yet" },
  { value: "Baseline, $2,500", label: "Baseline, $2,500" },
  { value: "Catalyst, $5,000", label: "Catalyst, $5,000" },
  { value: "Kinetic, $10,000", label: "Kinetic, $10,000" },
  { value: "Critical Mass, from $25,000", label: "Critical Mass, from $25,000" },
  { value: "Protocol, team training", label: "Protocol, team training" },
];

export const spends = [
  pick,
  { value: "Nothing yet", label: "Nothing yet" },
  { value: "Under $2,500", label: "Under $2,500" },
  { value: "$2,500 to $5,000", label: "$2,500 to $5,000" },
  { value: "$5,000 to $10,000", label: "$5,000 to $10,000" },
  { value: "$10,000 to $25,000", label: "$10,000 to $25,000" },
  { value: "Over $25,000", label: "Over $25,000" },
];

export const starts = [
  pick,
  { value: "This month", label: "This month" },
  { value: "This quarter", label: "This quarter" },
  { value: "Next quarter", label: "Next quarter" },
  { value: "Researching for now", label: "Researching for now" },
];

export const clinicalOptions = [
  { value: "", label: "Not sure" },
  { value: "Yes", label: "Yes" },
  { value: "No", label: "No" },
];

export const closers = [
  pick,
  { value: "Me, the founder", label: "Me, the founder" },
  { value: "A sales hire", label: "A sales hire" },
  { value: "Nobody yet", label: "Nobody yet" },
];

export const sources = [
  pick,
  { value: "Google search", label: "Google search" },
  { value: "AI search (ChatGPT, Perplexity, Gemini)", label: "AI search (ChatGPT, Perplexity, Gemini)" },
  { value: "LinkedIn", label: "LinkedIn" },
  { value: "Referral", label: "Referral" },
  { value: "Event or conference", label: "Event or conference" },
  { value: "Other", label: "Other" },
];
