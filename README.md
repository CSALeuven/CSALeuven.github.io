# CSAL · 鲁汶学联

Bilingual official website for **鲁汶中国学生学者联合会 — Chinese Students and Scholars Association Leuven**.

**Production:** https://csaleuven.github.io/

**Repository:** https://github.com/CSALeuven/CSALeuven.github.io

Astro, Tailwind CSS and TypeScript generate static pages. No backend, database, authentication or paid service is required. The supplied official logo and WeChat public-account QR image are included unchanged.

## Start here / 维护入门

日常更新主要修改 `src/content/` 中的 Markdown，以及 `src/data/` 中的组织资料。新增文章时同时提供中英文版本；活动、伙伴和团队信息须经核实。保存到 `main` 后，GitHub Actions 会自动检查、构建并发布。

Edit Markdown for routine updates and data files for association details. Add both translations, verify facts and commit to `main`. A daily rebuild refreshes upcoming/past event classification.

## Install, develop and build

Use Node.js **24 LTS** (or >=22.12) and npm >=9.6.5.

```sh
npm install
npm run dev
```

Open the address printed by Astro (normally http://localhost:4321).

```sh
npm run build
npm run test:site
npm run preview
```

`build` checks TypeScript and content before producing `dist/`. The site check validates generated pages, internal links/assets, metadata, sample safeguards and unchanged brand assets. `npm ci` installs reproducibly from the lockfile. npm 12's install-script allowlist permits only esbuild's required script.

On managed Windows devices, organizational policy may block esbuild. Do not disable that policy; use GitHub Actions' Linux build. Set `ASTRO_TELEMETRY_DISABLED=1` in the shell if telemetry configuration cannot be written on a restricted device.

## Architecture and common editing locations

| Location | Purpose |
| --- | --- |
| `src/content/events/{zh,en}/` | Events |
| `src/content/guides/{zh,en}/` | Newcomer and city guides |
| `src/content/news/{zh,en}/` | Updates |
| `src/content.config.ts` | Validated content schemas |
| `src/data/site.ts` | Identity, email, social URLs, asset paths |
| `src/data/team.ts` | Committee profiles |
| `src/data/partners.ts` | Partners and approved logos |
| `src/lib/` | Translation helpers and content/date queries |
| `src/components/` | Reusable navigation, cards, footer and QR section |
| `src/views/` | Shared page layouts |
| `src/pages/[...path].astro` | Static bilingual route generation |
| `src/layouts/Layout.astro` | SEO, language metadata and page shell |
| `src/styles/global.css` | Design tokens and responsive rules |
| `public/images/` | Brand, social and editorial assets |
| `.github/workflows/deploy.yml` | Build, checks and Pages publication |

## Bilingual content

Chinese pages use `/events/`, `/guides/housing/`, etc. English adds `/en/`. Components and layouts are shared; switching language preserves the corresponding page.

Every published Markdown record needs a Chinese and English file with the same stable ASCII `key` (for example `welcome-evening`). The build rejects missing counterparts. Set `draft: true` on **both files** while writing. Keep translations consistent on dates, location, status and facts. Write normal Markdown below the frontmatter. New records automatically generate detail pages; no component edits are needed.

## Add an event

Create `src/content/events/zh/welcome-evening.md` and its `en/` counterpart. Adapt the following only with confirmed information:

```yaml
---
lang: en
key: welcome-evening
title: "[Confirmed English title]"
titleOther: "[已确认中文标题]"
summary: "[Verified description]"
category: COMMUNITY
status: upcoming
date: "2027-01-15T18:00:00+01:00" # EXAMPLE ONLY: replace before publishing
endDate: "2027-01-15T20:00:00+01:00"
location: "[Confirmed venue]"
address: "[Full verified postal address]"
featured: true
draft: true
---

## Programme

Add verified programme, audience, access and participation details.
```

Optional: `coverImage: /images/events/photo.jpg`, `coverAlt`, `registrationUrl` (full URL), `endDate`, `address`, `order`. Dates use ISO timestamps with the correct Belgian timezone offset for that day (`+01:00` or `+02:00`). Display uses Europe/Brussels. The homepage shows the next three confirmed upcoming events, sorted by date; if none exist, it shows the three latest completed events. Historical date-only records use `dateOnly: "YYYY-MM-DD"` (optionally `endDateOnly`) instead of timestamps. Unknown locations can be omitted. Galleries and source publication metadata are documented in [historical event maintenance](docs/historical-events/MAINTENANCE.md).

Statuses: `sample`, `upcoming`, `past`, `cancelled`. Real records require a date. Sample events cannot accept registration and never generate Event JSON-LD. Only confirmed future/ongoing events with a verified location and full address can generate Event structured data. Past recaps use article sharing metadata and local cover images. Past/cancelled events have no registration CTA. Do not invent addresses to satisfy metadata. Remove samples in both languages when no longer useful; samples are excluded from indexing and the sitemap.

## Add a guide

Create paired Markdown files in `src/content/guides/zh/` and `en/`:

```yaml
---
lang: en
key: your-guide
title: Your guide title
summary: A concise description.
category: new-students # or leuven-guide
label: Your topic
order: 20
reviewed: "2026-09-11"
sources:
  - label: Official source name
    url: https://www.kuleuven.be/english/life-at-ku-leuven/prepare-your-stay
---

## First steps

Add practical, verified orientation.
```

Use official sources for city, university, healthcare, administration and transport. Link to current requirements, prices and timetables rather than duplicating them. Change `reviewed` only after checking sources. Initial links were checked on 11 September 2026. Landing pages populate automatically by category/order. The homepage intentionally highlights the seven core newcomer topics.

## Add a news post

Create paired files under `src/content/news/zh/` and `en/`. Required fields: `lang`, `key`, `title`, `summary`, `date` (ISO), `category`. Optional: `sample: true`, `draft: true`. Add Markdown below the closing `---`. Posts appear in date order on the homepage and `/news/`. Sample posts remain labeled and are excluded from indexing.

For a summary of an external notice, add both `sourceName` (the original issuing organization, translated for the page language) and `sourceUrl` (the canonical HTTP(S) article URL). These fields are optional for CSAL's own updates; supplying only one is rejected. The article displays the source, a visible original-notice link and a label explaining that CSAL is sharing a summary. English summaries are explicitly unofficial translations. Preserve the exact original Chinese title and translate it faithfully for the English entry. Use the confirmed source publication timestamp in `date`; sourced articles label its display as Belgium time. Keep the body concise, attribute advice to its issuer, and classify safety notices under news, not events. See [the safety-notice import review](docs/news/safety-notice-2026.md) for source evidence and editorial decisions.

## Team, partners, social links and organization facts

- **Team:** edit `src/data/team.ts`. Add bilingual names, roles, optional bios/images only after verification and consent. Replace the placeholder when ready.
- **Partners:** edit `src/data/partners.ts`. Add confirmed bilingual name/category, an approved logo path and optional official URL; set `placeholder: false`. Placeholder slots indicate no actual partnership.
- **Social links / email:** edit `src/data/site.ts` only. Email stays `null` until an official address is verified; setting it enables the email CTA. URLs must not be repeated in UI components.
- **About / history:** update both language strings in `src/views/About.astro` with verified information. Ask the committee to review the provisional mission and independence disclaimer.

## Images and official asset protection

Put photos in `public/images/events/`, team images in `public/images/team/`, and partner marks in `public/images/partners/`. Use descriptive filenames, meaningful alt text and images you have permission to publish. Optimize editorial images and preserve their intended aspect ratio.

**Do not recompress, crop, overlay or distort the official QR image.** Preserve the full square, white quiet space and comfortable display size. It is a WeChat public-account code, not a group invitation. Keep both supplied JPEGs as unchanged originals. Do not fabricate student photos or substitute logos.

## Deploy to GitHub Pages

1. Repository **Settings → Pages → Build and deployment → Source → GitHub Actions**.
2. Push to `main`, or manually run **Build and deploy CSAL** in Actions.
3. Wait for the **build** and **deploy** jobs to succeed.
4. Check https://csaleuven.github.io/ and `/en/`.

The official Astro Action installs, builds, validates and uploads the static artifact. `actions/deploy-pages` publishes it. Pull requests and the initial `csal-v1` review branch build without deploying. The daily schedule refreshes date-based content. **Never add `/CSALeuven.github.io/` as a base path**: this organization-level site publishes at the domain root.

If adopting a custom domain later, update Astro's `site`, `src/data/site.ts` and `public/robots.txt` together. Preserve the lockfile and run both validation commands after changes.

Official references: [Astro deployment](https://docs.astro.build/en/guides/deploy/github/), [content collections](https://docs.astro.build/en/guides/content-collections/), [Tailwind integration](https://docs.astro.build/en/guides/styling/).

## Editorial handover

Confirm real events, committee profiles, history and partner details before replacing placeholders. Review both translations, source links, mobile pages, keyboard navigation and QR display. No official email has been invented. The site has no analytics scripts, tracking or fake contact form.
# New student knowledge base

The full 2024 handbook is organized into 45 articles at `/new-students/`, with Chinese/English alias search, nine topic categories, 98 packing checklist items, first-week and rental-contract checklists, and the unchanged PDF archive. Chinese source bodies are complete; English discovery metadata does not claim an official translation. All imported articles clearly identify 2024 provenance and review status.

See [maintenance instructions](docs/handbook-2024/MAINTENANCE.md) for adding articles, editing aliases and categories, updating sources/statuses, publishing reviewed English translations, changing checklists and rebuilding search. [Content inventory and known source gaps](docs/handbook-2024/INVENTORY.md).
