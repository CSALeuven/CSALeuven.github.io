# Validation — 11 September 2026

## Content and production build

- All 35 pages extracted and rendered. Owner read the entire cleaned source; research passes individually inspected rendered pages and packing cells. Independent editorial QA compared all 36 arrival/housing/study/life/transport drafts against pp5–31, and all 98 packing rows against pp6–8. Chapters 1, 2, 8 and 9 have their own source audit.
- 45 Markdown articles, nine categories, 44 source-topic articles plus the first-week synthesis; chapter 1 appears as a historical About block. All articles retain `legacy-2024` and `timeSensitive: true`.
- Original PDF SHA-256 verified. Unchanged logo and WeChat assets checked by site validation.
- GitHub Linux production build run 34624722052 passed: Astro check 46 files, zero errors/warnings/hints; 167 pages, 5,986 internal references, metadata and sitemap checks. Empty-translation collection notices identified and removed by guarding optional collection access.
- 28 Chinese/English search cases pass against source and generated JSON. Built-index coverage also checks a packing item name (`充电宝`). Unicode-width normalization and a no-results query are covered.
- A local Windows npm build did not finish during the attempted run and was stopped; the GitHub Linux production build is the build evidence. No device controls were changed.

## Browser checks on the downloaded production artifact

Used the existing in-app browser with a local static preview of the GitHub Pages artifact.

- Manually typed all 21 requested queries: 租房、合同、押金、Kotwijs、居留卡、Annex 15、银行、保险、医保、GP、急诊、112、自行车、公交、De Lijn、火车、SNCB、行李、垃圾、Toledo、ISP. Relevant articles appeared within the first three results.
- Additional browser queries: 警察查房, bus pass, verblijfskaart, huisarts, Individual Study Programme, plus a deliberate no-results term. Clear restores the initial state.
- English GP search produced English results. Tab navigated from input through Clear to a result, and Enter opened the correct English route. Untranslated article has explicit English summary notice, Chinese body language, correct canonical and noindex.
- Packing: all 98 items present; medicine category displays eight items and preserves the exact medicine notice. Searching 护照 displays three source rows. Space toggles a checkbox; reload retains it. Reset clears progress. Optional false is not described as required.
- First-week: a check on the article persists on the main landing page. Contract: all 16 checklist items present, Space/reload/reset work, and no duplicate disabled Markdown checkboxes remain.
- Print CSS inspected in the browser: controls/navigation hidden, all packing items included even when filtered, medicine notice retained, source notice retained, checked states kept. Native print output was not separately generated.
- 48 layout checks: 12 pages × widths 375, 768, 1024, 1440; no horizontal overflow. Pages cover both landing languages, housing/healthcare categories, packing/contracts/residence/bus/train, English article, PDF archive and About. Main mobile search ends at approximately y364 (Chinese) and y413 (English).
- Mobile screenshots inspected for landing search/results and article typography. Desktop viewport dimensions verified; a large desktop screenshot was unavailable in this browser session.

## Improvements after initial browser pass

- Title-prefix ranking makes 行李 prioritize the packing checklist.
- All packing item names and notes are included in the main full-text index.
- Article contents start collapsed on small screens, preserving quick access to the answer.
- The dated cycling-rule comparison clearly separates a 2026-09-11 narrow check from the legacy article status.

The final branch build and live deployment checks are recorded in the GitHub workflow and pull request.
