# Validation — 11 September 2026

Validated application/content commit: `fa96b4b164f1779910e95a3f781343d67db3639e`.

## Build and automated checks

[GitHub Linux build 34636973859](https://github.com/CSALeuven/CSALeuven.github.io/actions/runs/34636973859) passed dependency installation, `npm run build`, and `npm run test:site`. The deploy job was **skipped**; this review branch did not publish to production. Linux is the documented build path for this managed Windows device, where native esbuild is blocked by organizational policy.

- Astro check: 0 errors, 0 warnings. The pre-existing empty knowledge-translations collection emits its usual loader notice; English handbook bodies remain explicitly untranslated.
- 169 generated pages and 6,156 internal references passed metadata, asset and link checks.
- Existing knowledge checks passed: 45 articles, 9 categories, 28 Chinese/English search cases, 98 packing items and unchanged original PDF hash.
- 13 event-date assertions passed, including calendar dates, timed start/end, Brussels midnight and daylight-saving boundaries.
- All 8 new recap routes passed source/event date separation, local photo hashes, year navigation, descending order, homepage fallback, canonical/OG metadata, indexability and no registration/current Event JSON-LD checks.
- Original CSAL logo and WeChat public-account QR assets are byte-identical. All 24 selected event photos decode with expected dimensions and distinct source hashes.

## Browser review of the built artifact

Served the exact successful build locally and inspected the archive, all eight translated recap pages and both homepages.

- Archive checked at 375, 768, 1024 and 1440 CSS pixels; no horizontal overflow. Namur detail/gallery also checked at the three larger widths; every recap and both homepages checked at 375 pixels.
- Year links navigate to the correct 2026/2025 groups in Chinese and English. Ordering is March 30, March 28, March 8, then November 16 of the preceding year.
- The language switch preserves the table-tennis recap. The native mobile navigation expands and collapses.
- Covers load; gallery photographs retain full framing, load locally and expose links to the complete image. All six Namur gallery photos were observed loaded. The tournament results table fits the mobile content width.
- Date-only detail labels show no invented time; the unknown tournament location is omitted. Source publication dates are separately labelled in Beijing time.
- The homepage shows the three recent real recaps and an honest upcoming-event empty-state notice. No demo event cards remain.

## Source-link verification limits

All five canonical WeChat links exactly match the source IDs and public URL extracted from the saved HTML, with tracking removed. Ordinary live requests returned HTTP 200 verification/challenge pages rather than article bodies. The supplied saved articles therefore remain the factual source; no login or verification challenge was bypassed. Original links can be opened in WeChat for manual review. All selected image downloads succeeded independently of that article-page challenge.

Independent editorial review found no actionable inconsistency between the eight pages, their sources and the manifest. Three inferred years and omitted logistics remain listed in `REVIEW-REPORT.md`; the ambiguous online vote remains held.
