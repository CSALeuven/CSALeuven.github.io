# CSAL website: future coding agents

## Purpose and architecture

Official CSAL — Chinese Students and Scholars Association in Leuven — website. Production: https://csaleuven.github.io/. Chinese name: 鲁汶中国学生学者联合会. CSAL is independent; do not imply KU Leuven administrative status or endorsement.

Astro 7, Tailwind 4 (Vite integration), TypeScript, Markdown content collections. Fully static. Avoid UI frameworks, databases, login, APIs and server-backed forms. Shared styles: `src/styles/global.css`.

`src/pages/[...path].astro` generates Chinese `/` and English `/en/` pages with shared views/components. The language switch preserves the page. Every published guide, event and news record needs paired `zh/key.md` and `en/key.md` files with the same `key`. The build rejects a missing counterpart. Schemas: `src/content.config.ts`; queries and date logic: `src/lib/content.ts`.

The handbook knowledge base is a deliberate exception to paired article bodies. `src/content/knowledge/{category}/{slug}.md` holds the Chinese original with bilingual discovery metadata. English routes explicitly show the Chinese original until a reviewed file exists in `src/content/knowledge-translations/`; do not automatically translate the corpus. See `docs/handbook-2024/MAINTENANCE.md`. Preserve all source provenance and historical caveats. Do not silently update 2024 prices/policies or invent missing text. Categories live in `src/data/knowledge.ts`; substantial content must remain Markdown. All nested knowledge routes and search data are generated from collections.

## Brand and factual content

Canonical organization names/short names are centralized in `src/data/site.ts`. The Chinese mission and four responsibilities in `src/data/about.ts` are committee-confirmed source wording: preserve every character, punctuation mark and numbered prefix unless replacement wording is explicitly confirmed. English must faithfully translate the source. Display headings and concise homepage summaries are distinct from that formal text. The confirmed mission states registration at KU Leuven; retain the separate independence disclaimer. Dutch is an official name reference only, never a third site language. The old handbook About disclosure is not rendered on About, but its archived source and original PDF must remain. See `docs/official-profile/REVIEW.md`.

- Red `#B01C20`, dark red `#8F161B`, paper `#FAF8F5`, text `#1D1D1F`. Use red as an accent with generous whitespace.
- Preserve `public/images/brand/csal-logo.jpg`. Never redraw, replace or reinterpret the official logo.
- Preserve `public/images/social/wechat-csal.jpg` byte for byte. Do not crop, overlay, distort or compress. Keep its white quiet space and comfortable display size. It is a public-account code, not a group invitation.
- Do not fabricate people, history, event claims, sponsors, endorsements or student photography. Mark missing information explicitly. Sample events must have no registration URL or Event JSON-LD.
- Avoid lanterns, dragons, pseudo-Chinese decorative fonts, excessive gold/red or copying KU Leuven's identity.

## Confirmed accounts and editable data

Centralize production social URLs in `src/data/site.ts`:

- Facebook: https://www.facebook.com/page.csal/?locale=zh_CN
- Instagram: https://www.instagram.com/csaleuven/
- WeChat: 鲁汶学联 CSAL

The official contact email is confirmed and centralized in `site.email`. Reuse it in the Contact page, Stay Connected links and footer; do not duplicate the address in components. Committees: `src/data/committees.ts`; partners: `src/data/partners.ts`. Committee member data and public presentation must contain **names only**: no roles, departments, profiles, romanizations, photos or contacts. Both languages show the exact source Chinese names. The 2025 team is current by explicit user confirmation, with earlier years historical; never infer the current team from the calendar year. See `docs/committee-history/MAINTENANCE.md`. Use verified partner logos. Keep frequent updates in Markdown/data rather than hard-coded cards. About/history copy is in `src/views/About.astro`; confirm any new organization facts.

## Deployment and completion checks

Organization-level GitHub Pages: Astro `site` is `https://csaleuven.github.io`; **never add `/CSALeuven.github.io/` as a base**. The workflow builds every change, publishes only `main`, and rebuilds daily for event-date rollover. Pages source must be GitHub Actions.

Preserve lockfile, production URL, original assets, routes and workflow unless required by the task. Run `npm run build` and `npm run test:site` before completion. Check meaningful changes at 375, 768, 1024 and 1440 pixels: no overflow, usable mobile menu, language switch, visible focus, content links and QR sizing. Keep semantic headings, contrast and reduced-motion support.

Managed Windows devices may block esbuild's native executable. Do not disable security controls or commit machine-specific hacks. Use the GitHub Linux build when needed and accurately report local limitations. Never commit credentials.
