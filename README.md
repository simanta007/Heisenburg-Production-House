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
