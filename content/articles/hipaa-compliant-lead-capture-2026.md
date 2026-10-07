---
slug: hipaa-compliant-lead-capture-2026
title: "HIPAA-Compliant Lead Capture for Practices: What the 2024 Ruling Changed"
description: What the June 20, 2024 ruling vacated in the HHS tracking bulletins, and which practice pages still need a business associate agreement.
primaryKeyword: HIPAA compliant lead capture
datePublished: 2026-09-07
dateModified: 2026-10-07
author: george-stoff
category: regulated-marketing
readingMinutes: 7
---

# HIPAA-Compliant Lead Capture for Practices: What the 2024 Ruling Changed

## What you'll take away

- What the American Hospital Association reported the June 20, 2024 ruling did to the HHS tracking bulletins
- Which pages on a practice site still collect a name together with a visit, separate from that ruling
- Which vendors need a business associate agreement before a booking or intake form stays up
- A checklist a practice administrator can run this week
- What the HIPAA Journal reports the HHS Office for Civil Rights closed in 2024, and the separate FTC rule for health apps

---

If you run the front office or the marketing site for a medical practice, you have already had the uneasy version of this conversation. Someone added a form, a pixel, or a call tracking number, and nobody wrote down which vendor is allowed to see a patient's name next to a reason for the visit. This piece is the checklist for that question.

It is written for a practice. A hospital system and a company that ships a health app are different buyers. I name them only where the rule that applies to them is different.

## What the court vacated

On June 20, 2024, Judge Mark Pittman of the U.S. District Court for the Northern District of Texas ruled for the American Hospital Association and the hospital plaintiffs in *American Hospital Association v. Becerra*, No. 4:23-cv-01110-P. The Association's same day account says the court vacated HHS bulletins that restricted providers from using standard third party web technologies that capture IP addresses on portions of their public facing webpages, and treated those bulletins as unlawful final rules ([AHA News, June 20, 2024](https://www.aha.org/news/news/2024-06-20-judge-rules-favor-aha-vacating-hhs-online-tracking-bulletin-unlawful-and-beyond-agency-authority)).

On August 29, 2024, the Association reported that HHS would not appeal ([AHA News, August 29, 2024](https://www.aha.org/news/headline/2024-08-29-hhs-will-not-appeal-aha-court-victory-online-tracking-case)).

Read that as a limit on a bulletin about IP addresses on public facing pages. The opinion, in the passage the Association quotes, uses the phrase "the Proscribed Combination." The news story describes that fight as IP capture on public facing pages. A page where a person books a visit, sends a reason for the visit, or logs into a portal is a different set of facts. Counsel still has to read your pages.

## When a practice website is handling protected health information

The Privacy and Security Rules are in 45 CFR Parts 160 and 164 ([eCFR](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C)). On a practice site, the ordinary case is a name or a phone number together with a condition, a treatment, or an appointment request. Inspect these pages first:

- A booking form that asks who the visit is for and what it is about
- An intake form, a pre visit questionnaire, a records request, or a refill request
- A portal login, a telehealth check in, or a page that messages a clinician
- A call tracking number for a service line, when a vendor stores the recording or the transcript

A public page that only describes a condition, with no form and no account, is the fact pattern in the vacated bulletin. If a pixel sits on that page, send the URL to counsel with the June 20 account above. If a pixel sits on a booking or intake page, take it off while you wait for that answer.

## Who needs a business associate agreement

A business associate agreement is the contract HIPAA requires when a vendor creates, receives, maintains, or transmits protected health information for a covered entity. HHS publishes the provisions that agreement has to include ([HHS sample business associate agreement provisions](https://www.hhs.gov/hipaa/for-professionals/covered-entities/sample-business-associate-agreement-provisions/index.html)).

For a practice, start with the vendors that can see the form or the call:

- The form tool on booking, intake, records, or pre visit pages
- The email system, if the message includes the condition or the appointment
- The customer relationship system, if the record includes clinical information
- The call tracking vendor, if the number is tied to a service line and the vendor stores the recording
- The reminder or telehealth vendor, if one sits on the same path
- The host, if that data is stored there

If the vendor will not sign the agreement, take them off any page where a person books, logs in, or sends a reason for a visit. That is a purchasing rule for this practice.

## A separate rule, for a different company

On April 26, 2024, the Federal Trade Commission announced it had finalized changes to the Health Breach Notification Rule ([FTC press release, April 26, 2024](https://www.ftc.gov/news-events/news/press-releases/2024/04/ftc-finalizes-changes-health-breach-notification-rule)). That rule covers health apps and connected devices that fall outside HIPAA. If you are a practice and a covered entity, HIPAA is the statute on the intake form. If the same company also ships a health app that is not a covered entity, the FTC rule is a second track and needs its own read.

## What OCR closed in 2024

The HIPAA Journal, citing OCR Director Melanie Fontes Rainer, reports that OCR closed 22 HIPAA enforcement actions with financial penalties in 2024 and collected more than $9.9 million ([HIPAA Journal, State of HIPAA](https://www.hipaajournal.com/state-of-hipaa/)). The same account says there were no OCR enforcement actions on tracking technologies that year, and that the New York Attorney General imposed a $300,000 penalty on New York Presbyterian Hospital for pixels and other website tracking tools. The resolution agreements are listed by HHS ([OCR resolution agreements](https://www.hhs.gov/hipaa/for-professionals/compliance-enforcement/agreements/index.html)).

A state penalty on a hospital is one reported case. It is a reason to know which third parties your booking page calls. It is a weak basis for guessing what a demand letter to a practice would say.

## What to do this week

1. Open every page that has a form, a booking widget, a portal login, an intake, or a chat.
2. In the browser's developer tools, open the Network tab, load the page, and write down every third party domain.
3. For each domain, ask whether that vendor has a signed business associate agreement with the practice.
4. Where the answer is no and the page collects a name plus a visit reason, take that script off the page this week.
5. Ask the call tracking vendor whether they will sign the agreement. If they will not, replace them on service line numbers.
6. Send the public pages you are unsure about to healthcare counsel, with the two Association links above.

Isovertic prices a form and call layer at $750 a month on any tier. That is our price for the work we do on an account. It is our price, and it is not a survey of what forms, email, and call tracking cost in the market.

---

*This piece is a marketing operating framework, not legal advice. HIPAA compliance depends on your specific facts, jurisdiction, and covered entity or business associate status. The controlling sources are 45 CFR Parts 160 and 164, OCR's [bulletin on online tracking technologies](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/hipaa-online-tracking/index.html), and the June 20, 2024 opinion in American Hospital Association v. Becerra, No. 4:23-cv-01110-P (N.D. Tex.), as reported by the [American Hospital Association](https://www.aha.org/news/news/2024-06-20-judge-rules-favor-aha-vacating-hhs-online-tracking-bulletin-unlawful-and-beyond-agency-authority). Consult qualified healthcare counsel before implementing any of the above.*

---

**If you run the front office or the marketing site at a practice and a booking or intake form is live, [book a pipeline call](/contact) and send us the URL. In about ten minutes I'll tell you which third party domains that page calls, and which of them need a business associate agreement before the form stays up. Sometimes the honest answer is that you're already fine, and we're happy to say so and hand you back your afternoon.**
