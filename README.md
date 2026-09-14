# Heisenburg-Production-House

The live site is the **static `index.html` at the repo root** — plain HTML, no
build step, no dependencies. Vercel serves this folder as-is (`vercel.json`
sets an empty build command and `.` as the output directory).

See **[README-FIRST.md](./README-FIRST.md)** before changing anything — it
covers the deploy settings, the service-worker cleanup files (`sw.js`,
`registerSW.js`), and the deliberate product decisions (no form backend, no
testimonials, fixed pricing).

## Layout

| Path | What it is |
|---|---|
| `index.html` | The entire live site |
| `sw.js`, `registerSW.js` | Kill the service worker left by the previous Vite PWA build |
| `vercel.json` | Static deploy config + cache headers |
| `favicon.svg`, `apple-touch-icon.png` | Site icon — the green badge with the yellow H |
| `og-image.png` | 1200×630 social share card |
| `assets/` | Standalone logo files for decks, invoices, email signatures |
| `archive/` | The superseded earlier landing page |
| `apps/`, `packages/`, `api/` | Earlier monorepo app — **not** part of the current deploy |

## Local preview

```
python3 -m http.server 8000
```

Then open http://localhost:8000/.

## Responsive

`index.html` is tested with no horizontal overflow at 360, 375, 768, 1024,
1440 and 1920 px wide. Breakpoints: `1440+` desktop, `1199` laptop, `1023`
tablet landscape, `900` tablet portrait, `767` mobile, `400` small mobile,
plus a short-landscape rule. Navigation collapses to a hamburger drawer
below 960 px.

## Logo

The lockup is **vector outlines, not live text** — it needs no webfont and cannot
reflow or substitute. It was drawn from the supplied brand logo; the letterforms
are outlined Nunito ExtraBold, the closest match to the original artwork.

| File | Use |
|---|---|
| `assets/logo.svg` | Dark wordmark, for light backgrounds |
| `assets/logo-light.svg` | Cream wordmark, for dark backgrounds |
| `assets/logo-mark.svg` | Square badge (yellow H on green) — avatars, app icons |

In `index.html` the lockup is defined **once** as an inline `<symbol id="brand">`
and referenced twice (nav and footer). The wordmark uses `currentColor`, so the
same asset renders dark-on-cream in the nav and cream-on-green in the footer —
set `color` on `.logo .brand` to retheme it.

**Brand accent:** the H and the trailing dot use `--brand-yellow` (`#FDC50A`),
defined in `:root`. This is the logo's own yellow and is deliberately brighter
than the site's `--gold` (`#C0912E`) used for UI accents. Change the one token to
retune the logo without touching anything else.
