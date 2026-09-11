# Embassy safety-notice import review

## Source and classification

- Saved source: `在比中国留学人员开学季安全提示.html` (provided by the user).
- SHA-256: `9c11da2a35966c82102c1afa335e36a706f714ea2e018a8363a98d3be1db169c`.
- Original title: **在比中国留学人员开学季安全提示**. The Chinese entry preserves it exactly; the English title is a faithful translation.
- Issuer: **中国驻比利时大使馆 / Embassy of the People's Republic of China in Belgium**. The saved publisher label and the article's opening paragraph both identify the embassy. CSAL is the sharing/summarizing organization.
- [Canonical original WeChat article](https://mp.weixin.qq.com/s/ZGzRSXimtxFkrC-dYU7maA): the saved `og:url` and `msg_link` agree. Preserve this short canonical URL, without session or tracking parameters.
- Publication: `ct` and `create_time` both equal `1788193840`, or **2026-08-31T16:30:40Z**. This matches the saved display, “Aug 31, 2026, 6:30 PM,” in Belgium. The same instant falls on 1 September in Beijing. The website retains the exact timestamp and explicitly labels the source date as Belgium time.
- Collection: `news`; key: `embassy-back-to-school-safety-2026`; categories: **安全提醒 / Safety Advisory**. This is a notice, not an event.

## Extraction and editorial review

The complete saved HTML was parsed as data; no embedded scripts were executed. The rendered `js_content` body and decoded `content_noencode` body match after whitespace normalization (1,697 characters each). Both article images were inspected: a follow-account banner and an embassy social-account QR footer. Neither contains additional safety guidance. The original HTML, scripts and images are not shipped with the website.

The bilingual entries summarize all eight numbered source topics:

| Source topic | Website treatment |
| --- | --- |
| Pre-departure preparation | Document validity/backups, local conditions, entry restrictions on belongings, medicines and cash. |
| Entry and residence | Valid documents, truthful responses to checks, evidence and lawful recourse for unfair treatment. |
| Housing/rental risks | Verify parties and costs, inspect before signing, understand deposit/repair/termination/renewal/breach terms. |
| Telecom fraud | Spoofed embassy calls, alleged cases or document problems, personal information/payment/verification-code risks. |
| Currency-exchange fraud | Lawful banking/exchange channels, unreliable private offers, financial/personal-information/money-laundering risks. |
| Personal safety | Local security, avoiding unsafe situations and demonstrations, traffic rules, seat belts, belongings and busy stations. |
| Physical and mental health | Nutrition, stress, regular contact with family/friends and professional help. |
| Local laws and culture | Laws and university rules, local customs, surroundings and student activities. |

The closing emergency guidance is summarized with a pointer to the original contact list. This is a dated summary of the supplied notice, not an independent update to Belgian legal, immigration or financial requirements. No fees, deadlines, eligibility requirements or new safety claims were added.

The visible source panel names the embassy, links to the original with **原文链接 / Read the original notice**, distinguishes CSAL from the issuer, and labels the English summary as an unofficial translation. The full WeChat text is not reproduced.

## Review notes and maintenance

- No blocking ambiguity. The date difference between Belgium and Beijing is a timezone difference, not conflicting source evidence.
- The source formats emergency shortcodes with `+32` and one student-affairs number with `+32-02`. The website does not copy or silently correct this telephone table; readers can consult the source. Any future direct-contact list should be separately checked before publication.
- The English organization name follows the user's supplied official English name; the saved article is Chinese.
- Both `sample-community-update` Markdown files are removed. The genuine `welcome-to-csal` update stays in place. Existing date-based queries put the real safety notice on both homepages and news indexes without hard-coded cards.
- Optional `sourceName` and `sourceUrl` are required together when used. Existing CSAL-authored updates need neither. The shared `NewsSource.astro` component handles source presentation; Markdown remains the editable content source.
- These changes start from `main` after PR #3 and do not include or merge the separate committee-history PR #4.

## Validation

`npm run build` and `npm run test:site` must pass in GitHub's Linux build environment before this PR is ready. The managed Windows environment blocks esbuild's native executable; the documented repository workflow is used without changing security controls.

The news integration check covers both real routes, category/issuer/link/disclosure, timestamp, canonical/OG/sitemap, language counterparts, homepage and news-list placement, exclusion from the event archive, placeholder removal and compatibility with the existing unsourced welcome post. The full existing site, handbook and historical-event checks also run.

Build results and responsive/interaction observations are recorded in the PR once verification is complete. This PR is for review only; it must not be merged or deployed automatically.
