# CSAL website: future coding agents

## Purpose and architecture

Official CSAL — Chinese Students and Scholars Association Leuven — website. Production: https://csaleuven.github.io/. Chinese name: 鲁汶中国学生学者联合会. CSAL is independent; do not imply KU Leuven administrative status or endorsement.

Astro 7, Tailwind 4 (Vite integration), TypeScript, Markdown content collections. Fully static. Avoid UI frameworks, databases, login, APIs and server-backed forms. Shared styles: `src/styles/global.css`.

`src/pages/[...path].astro` generates Chinese `/` and English `/en/` pages with shared views/components. The language switch preserves the page. Every published guide, event and news record needs paired `zh/key.md` and `en/key.md` files with the same `key`. The build rejects a missing counterpart. Schemas: `src/content.config.ts`; queries and date logic: `src/lib/content.ts`.

## Brand and factual content

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

Email is null until verified. Team: `src/data/team.ts`; partners: `src/data/partners.ts`. Use consented names/photos and verified logos. Keep frequent updates in Markdown/data rather than hard-coded cards. About/history copy is in `src/views/About.astro`; confirm any new organization facts.

## Deployment and completion checks

Organization-level GitHub Pages: Astro `site` is `https://csaleuven.github.io`; **never add `/CSALeuven.github.io/` as a base**. The workflow builds every change, publishes only `main`, and rebuilds daily for event-date rollover. Pages source must be GitHub Actions.

Preserve lockfile, production URL, original assets, routes and workflow unless required by the task. Run `npm run build` and `npm run test:site` before completion. Check meaningful changes at 375, 768, 1024 and 1440 pixels: no overflow, usable mobile menu, language switch, visible focus, content links and QR sizing. Keep semantic headings, contrast and reduced-motion support.

Managed Windows devices may block esbuild's native executable. Do not disable security controls or commit machine-specific hacks. Use the GitHub Linux build when needed and accurately report local limitations. Never commit credentials.
