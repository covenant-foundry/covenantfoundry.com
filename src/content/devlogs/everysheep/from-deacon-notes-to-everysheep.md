---
title: From Deacon Notes to EverySheep
summary: How a focused interface for one church became a standalone pastoral-care system with church-management integrations.
project: everysheep
publishedAt: 2026-07-12
tags:
  - Origin story
  - Integrations
  - Sustainability
draft: false
---

Back in December of 2024 I started on a project called Deacon Notes. Our ChMS, Fluro, supported notes on church members for tracking prayer requests and other needs, but it was complex and not easy for our deacons to navigate. Deacon Notes became a simple alternate interface, tuned to our specific needs.

This was fragile, however, as it depended on poorly documented APIs and depended on the ChMS for all its functionality. If they decided to change or do away with certain APIs or features, we’d be left out in the cold. So, we began planning the next phase: EverySheep.

I built EverySheep as a standalone system with ChMS integration. I don’t want to replace everything our current system does, and I don’t want to maintain two copies of the same contact information, so EverySheep can sync people, groups, and/or notes, depending on what the source system supports.

And since we could, I made it generic—able to support Fluro, Subsplash, and eventually other systems. At the same time, we’re opening it up to other churches and ministries.

I’d like to be able to offer something like this freely for the work of the ministry, but there are runtime costs now that EverySheep is not a simple client-side static site. I’ve settled on a compromise for now: if it’s useful, users can elect to support EverySheep via a paid subscription. If money is pressing, churches can use it freely without obligation. We’ll see how well this pricing model holds up.
