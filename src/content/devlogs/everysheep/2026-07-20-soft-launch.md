---
title: "Soft Launch"
summary: "EverySheep was soft-launched on July 12th: I enabled signups and invited a couple of our current Deacon Notes users to begin testing it out."
project: everysheep
publishedAt: 2026-07-20
draft: false
---

EverySheep was soft-launched on July 12th: I enabled signups and invited a couple of our current Deacon Notes users to begin testing it out.

Since then, we've found and fixed several issues:

- Fluro's sync connector was missing some users
- The sidebar's "all people" search wasn't wired up yet
- Group lists were pulling in relatives that weren't actually group members
- The app let users sign up with a different email than was invited - meaning their new account would not be connected to the inviting organization. This now issues a warning

On the dev side, I've also added basic feature flags to make it easier and safer to roll out and test new features. The one I'm testing right now, and will hopefully roll out soon, is an SMS messaging feature.

My philosophy with EverySheep has been that the goal is to facilitate *personal* connections. We don't provide a bulk email service to automatically send out email blasts; instead, we help you draft a BCC email group to send from your own account. Similarly, the SMS messaging feature will help you send messages from your own phone, not from an Internet-based SMS service. The challenge is that since SMS doesn't have a BCC equivalent, this means drafting texts one at a time. This will probably take some polish to get right.

I haven't settled on how, or how much, I intend to market EverySheep beyond word of mouth. Besides setting up the Subsplash API sync connector, that's probably the biggest task to tackle next.
