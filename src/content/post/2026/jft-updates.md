---
publishDate: 2026-06-25T14:00:15Z
title: Job Finder Tracker iOS Updates
excerpt: Most requested feature is now live
image: /images/blog-fi/2026-06-25.webp
tags:
  - software
  - job-finder-tracker
metadata:
  canonical: https://peterwitham.com/2026/jft-updates/
---

I recently released a new update to my [Job Finder Tracker for iOS](https://apps.apple.com/us/app/job-finder-tracker/id6446909069) app. This release has the most requested feature by users.

Easy Job creation using ShareSheet!

[Watch on YouTube](https://youtube.com/shorts/rFvMwbazy1A?si=8B_hY1umkm3-juL5)

It's OK, you can stop cheering now. I know this one has been a while coming, it was more complicated than you might think. Read on!

## The Problem

Users have long requested a quick and easy way to add jobs to the app without needing to manually enter all the details.

For example, using any Job app or Website like LinkedIn you find a job that interests you.

It can be time-consuming and often error-prone to copy and paste from the source to the application.

## The Solution

I wanted to make sure the solution was as robust as I could make it. That meant not only trying to capture the right data, but also making it work in as many locations as possible.

So I set to work creating a system that avoids scraping the data directly where often it will fail as soon as the site or app is updated. Or in the case of LinkedIn, they have a system that actively tries to prevent scraping most of the time.

Once I had a system that works with as many popular job listing sites as I could find, I also wanted a fallback that worked with the remaining sources. A random URL from the Internet for example.

With the source data taken care of, the next question was how to easily get the data into Job Finder Tracker.

Thankfully this was easy to answer on iOS. Use the Share Sheet and also Shortcuts availability to expose a way for seeing the data the user is about to add.

This gives the user a way to edit or append anything they want before adding the job to their list.

As a bonus, the URL field in a listed job contains the original source location should the user want to refer back to it.

The update is live now in the [App Store](https://apps.apple.com/us/app/job-finder-tracker/id6446909069) free for existing and new users can purchase and install.
