## Overview

Sahem is a UAE donation platform that makes giving as easy as booking a pickup. Donors choose clothes, furniture or other items, pick a licensed UAE charity, and have them collected from their door. They can also support cash campaigns run by charities. Every donation is rewarded, so giving becomes a habit rather than a one-off.

The platform reaches people through **iOS and Android apps** and a **public website**, both powered by the same back-end.

## My role

Full-stack developer across the platform: the web experience donors see, the back-end that serves the apps and the website, and the tools the Sahem team uses day to day.

## What I built

### A donation website for everyone

- A clear landing page that explains how Sahem works in a few steps and leads with a single **Donate now** action.
- A guided **donation wizard** for both in-kind items and cash campaigns that works without creating an account.
- Campaign browsing with filters that update instantly, loading skeletons and friendly empty states.
- Photo upload from the camera or gallery, confirmation pages and email receipts.
- A fully bilingual experience in **Arabic and English**, with right-to-left layouts.

### The mobile experience

- The API behind the iOS and Android apps, kept fully compatible as the platform grew.
- **Push notifications** in the donor's own language that keep them updated on their donation.
- A richer home screen showing the full range of charities donors can support.

### Tools for the team

- A modernised management dashboard with a cleaner layout, quick search and consistent controls.
- Reporting and spreadsheet exports that make it easy to share results with partner charities.

## Technical highlights

- **Laravel** back-end with a **Vue.js** dashboard, **MySQL** and **Firebase** for push notifications.
- Added a public website to an existing production system **without changing any URL the published mobile apps depend on**, so no app update was needed.
- Built the website as an isolated layer that could ship alongside a parallel redesign of the dashboard.
- SEO groundwork: share tags on every page, a default share image and an automatically generated sitemap.
- Reliability and monitoring improvements tuned for shared hosting.

## Outcome

Sahem gained a public, search-friendly website that turns visitors into donors in a few steps, while donors on the apps stay informed at every stage and the team has the dashboards and reports it needs.
