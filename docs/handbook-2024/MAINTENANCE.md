# Maintaining the student knowledge base

For the approved September 2026 corrections and their partial English counterparts, see [Approved guide updates](../handbook-2026-updates/README.md). These updates do not constitute a full English translation or full-article verification.

The collection has 45 first-pass articles from all nine chapters of the 35-page handbook, plus a historical CSAL profile in About. All start `legacy-2024`; each includes time-sensitive material. The archive PDF is unchanged. The 2024 identity and statistics in the About archive do not update the current organization profile.

## Add or edit an article

Copy a nearby file in `src/content/knowledge/`. Keep the existing JSON object between `---` delimiters: it is valid YAML frontmatter and is also used by the lightweight validation scripts. Write substantial Chinese content after the closing delimiter. Use a stable English `key` such as `housing/contracts` matching `{category}/{slug}`; URLs are generated automatically. `category` must match an entry in `src/data/knowledge.ts`. Change titles or categories there as needed; if changing a URL, update related keys and incoming links and preserve an old URL where appropriate.

Required metadata: `titleZh`, `titleEn`, `descriptionZh`, `descriptionEn`, `quickAnswer`, `category`, `order`, `aliases`, `sourceTitle`, `sourceYear`, `sourceChapter`, `sourceSection`, `sourcePages`, `reviewStatus`, `timeSensitive`, `officialSources`, `related`. Every article needs at least one related article. Add useful cross-category connections as well as nearby articles. Never remove original provenance after a review.

Aliases are an array of useful exact phrases, for example `医保`, `health insurance`, `mutuality`. Search normalizes Unicode and case, matches Chinese substrings and Latin words, and ranks titles and aliases ahead of body matches. Avoid adding broad or irrelevant keywords solely to boost ranking.

## Review a historical article

Use `legacy-2024` for unchanged imports, `needs-verification` for disputed material, `partially-reviewed` for a scoped review and `reviewed` only after checking the full article against appropriate sources. When reviewing, add `lastReviewed` as an ISO date (`2026-09-11`) and retain precise official references in `officialSources: [{"label":"…","url":"https://…"}]`. Clearly separate a dated correction from the historical claim. Merely checking that a URL loads does not constitute a policy review.

Current narrow checks of 112, the university emergency number, the dentist’s booking change and cycling guidance are recorded in article text. The surrounding articles remain legacy material. Pay special attention to visa/authentication, APS, residence, housing law, insurance, course rules, fares, waste classifications, medicines, health services and business directories. See the three source audit files and INVENTORY.md for exact gaps.

## Reviewed English translations

English category pages and article discovery titles/summaries already exist. Untranslated article routes show an explicit notice and the Chinese body with `lang="zh-CN"`; they are `noindex` and omitted from the sitemap.

To publish a reviewed English body, create a Markdown file under `src/content/knowledge-translations/` with JSON frontmatter containing `key` matching the original, `lang: "en"`, `quickAnswer`, `lastReviewed` and `reviewer`. The article renderer, indexability and sitemap update automatically. Translation review does not mean the 2024 policies were reviewed: those statuses remain separate. Checklist item translations must also be reviewed before claiming the whole checklist is in English.

## Checklists

- Packing: edit `src/data/packing-2024.json`. Stable `id` values retain saved check marks; preserve the source number/page, name, string quantity, notes and optional flag. `packing-source-2024.json` documents the original 98 rows and 11 categories. Blank, `*` and `好多` quantities are historical source values; do not invent precise counts. Explicitly separate any future modern recommendations from this archived list. If changing the archive baseline, update the source audit and validation counts deliberately.
- First week and contract checklist: edit `firstWeek` / `contractChecks` in `src/data/knowledge.ts`, preserving source-supported tasks. First-week items describe starting procedures, not completing every process within seven days.
- Checkboxes use localStorage only on the reader's device (`csal-handbook-2024:*`). No accounts, cookies, analytics or server submissions are used. Storage failure leaves the checklist usable for the current page. Print styles show the entire packing list even when screen filters are active.

## Build and validate

Run `npm run build` and `npm run test:site`. The build generates `/new-students/search.json`; no separate search-index command or backend is needed. `npm run test:knowledge` can validate source metadata, search cases, related keys, packing counts and the PDF hash before building. After a build it also checks the generated search index and review notices.

Manually test the search in Chinese and English, using the cases in `scripts/check-knowledge.mjs`, plus keyboard navigation, filter clearing, checkbox persistence, reload, printing, English notices, and mobile widths 375/768/1024/1440. The first-pass audit covers 28 search cases. New articles and review statuses are allowed; update source-specific baseline tests only after an intentional editorial change.

The managed Windows host may block esbuild by policy. Use the existing GitHub Linux build; do not weaken device security. The `handbook-2024` branch builds without deploying. Only main deploys to the existing GitHub Pages destination. Do not create an unrelated hosting project.
