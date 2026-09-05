---
slug: hipaa-compliant-lead-generation
title: HIPAA Compliant Lead Generation for Practices and Healthcare Brands
description: What counts as PHI on a form, what the 2024 court ruling changed and what it did not, the BAA covered form and call stack, and the mistakes that produced $6 million to $18 million settlements.
primaryKeyword: HIPAA compliant lead generation
datePublished: 2026-09-04
---

# HIPAA Compliant Lead Generation for Practices and Healthcare Brands

A practice that runs [Google Ads](/google-ads) to a landing page with a generic form builder and a Meta pixel is doing something that has cost other providers millions. This is how to generate patient demand without doing that.

## What counts as protected health information on a form

A name plus a condition is [PHI](/glossary/protected-health-information). A phone number plus the page it was submitted from, if that page is about a treatment, is PHI. An email address on a request for a knee replacement consult is PHI. Once a covered entity collects it, every system that touches it needs a [business associate agreement](/glossary/business-associate-agreement), the BAA, and that includes the form tool, the email platform that sends the notification, the CRM, and the call recording vendor.

## What the 2024 ruling changed and what it did not

In December 2022 HHS published guidance saying that a tracking pixel connecting a visitor's IP address to a public page about a health condition created PHI. On June 20, 2024, a federal court in [American Hospital Association v. Becerra](https://www.ropesgray.com/en/insights/alerts/2024/06/federal-judge-vacates-key-points-of-hhs-ocr-hipaa-online-tracking-technology-guidance) vacated that specific portion, and on August 29, 2024, HHS dropped its appeal. The rest of the guidance stands: tracking on authenticated pages, patient portals, and scheduling flows is still PHI, and sharing PHI with a vendor that has no BAA is still a violation. The ruling did not make Meta pixels safe on a booking page. It made them arguable on a blog post.

## What the settlements teach

[Mass General Brigham settled a tracking suit for $18.4 million in 2022](https://www.hipaajournal.com/mass-general-brigham-settles-cookies-without-consent-lawsuit-for-18-4-million/). Aurora Health agreed to $12.25 million in 2023. Novant Health settled for $6.6 million in January 2024, all over pixels and cookies sharing patient data with ad platforms, [as reported by HIPAA Journal](https://www.hipaajournal.com/novant-health-pixel-privacy-breach-settlement/). None of those involved a hack. They involved marketing tools installed the way marketing tools are usually installed.

## The stack we build

Forms that post to a BAA covered backend, not to a form builder's servers. Email notifications through a provider under BAA, with the form contents in the secured system and only a link in the email. Call tracking and recording from a vendor that signs a BAA, with the consent language spoken before recording. Consent text on every form that says what will happen to the information. No third party pixels on any page where a patient can book, request, or log in. Conversion tracking done server side from the secured system, so the ad platform learns that a conversion happened and nothing about who. This is our [HIPAA form and call stack](/pricing) add on at $750 a month on any tier.

## The ad platform layer

Some healthcare categories require certification before Google will run the ads at all. We have taken accounts through [LegitScript](/glossary/legitscript) scoped programs and policy constrained categories that stall most agencies for months. Ask any vendor which certifications they have carried an account through, by name.

## The mistakes we see most

A Calendly or Typeform embedded on a treatment page with no BAA. A Meta pixel firing on the thank you page after a consult request. Call recording with no spoken consent. A CRM full of conditions with no BAA because it was "just marketing." Each one is fixable in a week, and each one is a settlement waiting for a plaintiff's firm.

The ask: if you are a practice or a healthcare brand running paid demand today, [book a pipeline call](/contact) and send us the URL of your best converting landing page. We will tell you in ten minutes what is firing on it.
