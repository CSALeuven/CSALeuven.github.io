# Committee names / 成员名录维护

`src/data/committees.ts` is the single public source used by both About pages. Each committee has a year, explicit current flag, plain member-name strings and original source title/URL. Do not introduce member objects or fields for roles, departments, bios, degrees, universities, quotations, contacts, social accounts or photos. Do not translate names or generate pinyin. Preserve every source character exactly.

The 2025 announcement is the current team according to the user's confirmation. Earlier years are historical. A new calendar year does not change the current committee. When a later official roster is confirmed, add that source and set exactly one committee to `current: true`; update the source audit and the explicit current-year validation together. Display the source year, never invent an academic-year range.

Before changing names, inspect the actual roster context. Role/profile text may establish membership during extraction but must not be copied into public data or presentation. Credit-only names, witnesses, acknowledgements and recruitment vacancies do not establish membership. A person appearing in two years remains in both, while repeated mentions within one year become one name.

The reviewed 2025 list follows the announcement's team roster, including its two named trainees; the public page makes no role or elected-office claim. The separate support section expressly identifies nonmembers, who are excluded for that year. See `REVIEW.md` for this boundary and other source-specific notes. Unreadable names must be omitted and flagged, never guessed.

Keep evidence in the source review and `source-audit.json` (source filename, canonical link, hash and reviewed names). Do not add raw saved HTML, source portraits, personal profiles or account/authentication metadata to this repository. Original announcements are linked only for provenance; WeChat may require viewing them in its own client.

`src/components/CommitteeHistory.astro` renders the current names prominently and historical years in native, initially closed disclosures. It is shared by `/about/` and `/en/about/`; neither page duplicates names in its source. Styles are scoped to this component. No JavaScript library, individual profile route or year-specific page is needed.

Run the documented dependency installation, `npm run build` and `npm run test:site`. Managed Windows devices may use the GitHub Linux workflow rather than bypassing esbuild restrictions. Committee checks verify the source transcription, one current team, year order, within-year uniqueness, canonical sources and an allowlist of public text to catch accidental profile content. Also inspect both About pages and the disclosures at 375, 768, 1024 and 1440 pixels. Event and New Student checks remain part of the same suite.
