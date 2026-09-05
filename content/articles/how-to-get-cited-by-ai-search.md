---
slug: how-to-get-cited-by-ai-search
title: How to Get Cited by ChatGPT and Perplexity: What 147 Pages Taught Us
description: Only 12 percent of AI cited URLs overlap with Google's top ten. What we ship on a life science site to get pulled into the answer, and what Baseline versus Kinetic do about it each month.
primaryKeyword: how to get cited by ChatGPT and Perplexity
datePublished: 2026-09-04
---

# How to Get Cited by ChatGPT and Perplexity: What 147 Pages Taught Us

Ranking first on Google no longer means you show up when a researcher asks an AI. [Ahrefs](https://ahrefs.com/blog/ai-search-overlap/) analyzed 15,000 queries and found only 12 percent of the URLs cited by AI tools overlap with Google's top ten organic results. Profound's analysis of 680 million citations found only 11 percent of domains are cited by both ChatGPT and Perplexity. The engines pick differently, and a Google first strategy leaves most of the surface uncovered. Here is what we ship and what we have observed, without claims about how the models rank, because nobody outside those companies knows.

## What we observed on a 147 page site

For one life science client we built 147 pages against a single model architecture, one page per model type, application, and targeting strategy. The pages that get pulled into AI answers share four traits. They answer the literal question in the first 40 words. They carry one specific number or definition a model can quote. They are [server rendered](/glossary/server-rendering), so the answer is in the HTML rather than assembled by JavaScript. And they have [schema](/glossary/schema-markup) markup that names the entity the page is about. Pages that opened with a paragraph about the company got skipped.

## The four things we ship on every page

Server rendering. Every page on our stack is rendered on the server, so a crawler and a model see the full text without executing anything. Schema on every page: Organization, Service, FAQPage, Article, BreadcrumbList, built through one set of builders so nothing drifts. Entity pages, one per thing a buyer might ask about, rather than one long page about everything. And a first paragraph that would survive being quoted alone.

## Where the engines differ

Perplexity searches the web on every query and averages about 22 citations per answer against ChatGPT's 10, according to Discovered Labs, so fresh, specific pages can appear there within days of publishing. ChatGPT leans on established reference sources and recrawls in cycles, so it rewards stability and consistency over time. For branded queries, [Omniscient Digital's study of 23,387 citations](https://beomniscient.com/blog/how-llms-source-brand-information/) found 57 percent come from reviews, listicles, and press, and only about 4.5 percent from the brand's own pages, which means the comparison articles other people write about you matter as much as your own site. Claude, by OtterlyAI's June 2026 count, sends 64 percent of citations to first party brand sites. One strategy does not serve all of them; [entity pages](/glossary/entity-page) plus earned mentions covers most.

## What Baseline and Kinetic do about it monthly

Baseline, $2,500: one blog post a month written to be cited, with the question in the title, the answer in the first 40 words, and schema in the template. A newsletter that repeats the answer to your own list. Catalyst adds a landing page per audience built the same way. [Kinetic](/pricing), $10,000: the full content system, a YouTube channel because video is structurally important on Perplexity and Google's AI answers, and the [programmatic page expansion](/answers/what-is-programmatic-seo-for-life-science) add on, 50 entity pages at a time, which is how the 147 page site got built.

## How to check your own site in ten minutes

Ask ChatGPT and Perplexity the three questions your buyers ask you most. Note which sites get cited. Open your own page on the topic, view the source, and search for the answer. If it is not in the HTML, you are invisible to the engines that matter most right now.

The ask: send us the three questions and your URL and we will run the check on a pipeline call. If you are already cited, we will tell you. If you are not, the pricing for fixing it is on the site.
