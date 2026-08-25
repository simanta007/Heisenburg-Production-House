# Heisenburg Production House — static site

**For whoever deploys this (human or agent): read this before changing anything.**

## What this is

A finished, self-contained marketing site for a wedding-film post-production
business. It is **plain static HTML** — no framework, no build step, no
dependencies, no npm install. `index.html` is the entire site.

## Deploy target

**Vercel.** Deploy this folder exactly as-is.

- Framework Preset: **Other**
- Build Command: **leave empty** (there is nothing to build)
- Output Directory: **leave empty / root**
- Install Command: **leave empty**

Via CLI, from inside this folder:

```
vercel --prod
```

Domain to attach: **heisenburgproductionhouse.com**

## IMPORTANT — the domain is currently held by a different Vercel account

The live site at heisenburgproductionhouse.com is served by Vercel
(`Server: Vercel`, `X-Vercel-Id` confirmed), but it sits under a **different
Vercel account** than the owner's. The owner's own account
(`heisenburgproductionhouse-1652`) is empty — no projects, no domains.

So attaching the domain will require **one** of:

1. Access to the account that currently holds the project, **or**
2. Domain-ownership verification — Vercel will ask for a `_vercel` TXT record
   at the registrar. If the owner controls DNS, this transfers the domain to
   his project without needing the other account.

Deploy to the `.vercel.app` URL first regardless — it works immediately and
lets everything be tested before the domain is sorted.

## The two extra JS files are NOT decorative

The site being replaced was a Vite PWA that registered a **service worker**.
Returning visitors — including anyone already sent to the site — will keep being
served the **cached old site** for days unless that worker is killed.

- `sw.js` — self-destroying service worker. Overwrites the old one, deletes every
  cache, unregisters itself, reloads open tabs.
- `registerSW.js` — a no-op that replaces the old build's registration script.
- `index.html` also carries an inline cleanup script as a second layer.
- `vercel.json` sets `must-revalidate` on all three so the fix actually propagates.

**Do not delete these files and do not add a build step that omits them.**

After the domain points here, also run **Redeploy → without cache** in Vercel.
The old site had `Age: 153901` (~42h) at the edge.

## Verifying it worked

The new site's `<title>` is:
`Heisenburg Production House | Wedding Film Editing for USA & UK Studios`

The old one was `Heisenburg Production House — We cook videos`.
If you still see "We cook videos", the service worker or the edge cache is still
serving stale content — hard-refresh, then check in incognito.

## Please do not "improve" these without asking

- **The contact form has no backend on purpose.** It composes a pre-filled
  `mailto:` in the visitor's own mail client, with a WhatsApp/email fallback
  panel. This was a deliberate decision — the owner did not want to sign up for
  Web3Forms/Formspree (account creation + terms + marketing consent). Do not
  swap in a form service unless he asks.
- **There is no testimonials section on purpose.** Real client partnerships
  (Oscar Production, Bamm Production) are named instead. Do not generate
  testimonials, client logos, or review quotes — they would be fabricated.
- **Work links point to the owner's real Google Drive folders.** They should
  eventually move to Vimeo/YouTube embeds, but the Drive links are genuine.
- **Prices ($285 / $650 / $235) are deliberate** and match what his cold callers
  quote. Don't change them.
- Calendly link is live: `calendly.com/heisenburgproductionhouse`
- Contact: WhatsApp **+357 94 108 072** · heisenburgproductionhouse@gmail.com

## Known outstanding items

- Google Drive portfolio folders must be set to **"Anyone with the link"** or
  visitors hit a permission wall. Not yet verified.
- Email should move to `hello@heisenburgproductionhouse.com`
  (free via Cloudflare Email Routing) — the Gmail address is the weakest
  credibility signal on the page.
