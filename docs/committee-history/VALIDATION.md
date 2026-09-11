# Committee history validation — 11 September 2026

Application and data commit: `8a8d27ac6c33a04cccfb868ce2573289438bb50d`.

[Linux build 34643844266](https://github.com/CSALeuven/CSALeuven.github.io/actions/runs/34643844266) passed the repository's documented dependency-installation/build workflow, `npm run build` and `npm run test:site`. This is the documented equivalent on the managed Windows device where native esbuild is blocked. No security controls were changed. The deploy job was skipped; this review branch did not publish.

## Automated results

- Astro check: 0 errors and 0 warnings; the existing empty knowledge-translations loader notice is unchanged.
- 169 pages and 6,156 internal references passed.
- Committee checks: seven years, 58 exact name/year records; only 2025 current; no duplicates within a year; exact match to reviewed names and canonical sources.
- Privacy checks: each member is a plain name string; only the five allowed committee metadata fields exist. Public committee sections contain only headings/year labels, exact Chinese names and provenance links. The visible-text allowlist rejects unexpected profile text, and the sections contain no portraits, scripts or profile widgets.
- Both generated About pages retain Chinese names and source links. Six historical disclosures start closed; the current team is expanded. The old profile-capable placeholder data and component are absent.
- Existing Event and New Student checks passed unchanged: eight recap pages, 13 event-date assertions, 45 knowledge articles, nine categories, 28 search cases and 98 packing items. Original logo, WeChat QR and PDF hashes remain unchanged.

## Browser review

Reviewed the exact successful build at `/about/` and `/en/about/` at 375, 768, 1024 and 1440 CSS pixels. Neither language has horizontal overflow. Names form two columns on mobile and four columns at larger widths; no individual role, biography, portrait or contact field appears.

Opened all six historical years and checked each displayed name against the extraction. Mouse activation and Enter close/open the disclosures; Space opens the 2022 disclosure on mobile. Keyboard focus remains clearly visible. The 14-name 2022 grid fits at every tested width. All histories were confirmed closed again after testing.

The language switch preserves the About route and displays the same eight current Chinese names under the English labels. 2025 is clearly marked Current/现任. Original source links use the extracted canonical IDs, with tracking removed.

## Source verification and scope

The complete rendered article text and decoded `content_noencode` match for all seven supplied HTML files after layout whitespace is removed. Each member was checked against its roster heading and surrounding structure, and a second review confirmed all 58 strings. All names are available as real text; no image transcription was needed.

All seven live WeChat URL requests returned HTTP 200 verification/challenge pages rather than article bodies. The attached saved notices remain the factual source; no challenge was bypassed. Review original links in WeChat when needed.

No name has unresolved character uncertainty. Membership-scope decisions (including the 2025 named trainees) and year-specific excluded names are explicit in `REVIEW.md`. Public presentation contains no role labels. Source bodies, rich profiles and detailed extraction context were kept outside the repository.
