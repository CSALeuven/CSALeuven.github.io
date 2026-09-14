# Approved guide updates · 14 September 2026

The annotated `CSAL-guide-review.xlsx` is the decision source: 69 **Accept**, 3 **Edit and accept**, 57 **Reject**, with no pending rows. The user subsequently authorized applying the annotations and translating their Chinese-only replacements into English. `decisions.json` records all 129 decisions, workbook row numbers, the workbook SHA-256, final bilingual replacement text and target files. It supersedes the earlier single-item review process; NSG-001 remains rejected.

Implementation starts from main `6341681` (the audit used `97313c3bbf58e2928d7db5e6db210761fbb7edeb`; intervening commits did not change the guide). Seventy-two approved findings affect 33 knowledge articles. Rejected changes are not applied. Original PDF and packing data are unchanged. Source year and historical caveats remain; touched articles are **partially-reviewed**, not fully verified.

Chinese corrections replace the affected passages, prices, links and quick answers. Review dates remain in article metadata and this decision record; at the user's request, public paragraphs omit repeated “date + update/checked” labels. The original PDF remains the source archive. Link-only decisions update the actual destinations, rather than publishing spreadsheet editing instructions. NSG-117 also updates both shared 112 panels. The contract checklist's broad instruction to check access conditions remains, with the consent rule explained in the corrected article.

`src/content/knowledge-updates/{category}/{slug}.md` contains the matching English corrections only. They appear before the Chinese article on its existing English route, with an explicit partial-translation disclosure and `noindex, follow`. They are not full handbook translations. The existing `knowledge-translations` collection remains reserved for complete reviewed English article bodies. English update text is included in the shared search index.

## The three Chinese-only edits

- **NSG-025, Gardasil 9:** user Chinese preserved verbatim and translated. The June 2026 expansion, age at first dose, maximum three reimbursable doses, and €12.80/€8.50 co-payments were verified against [BCFI's RIZIV rules, §13880100](https://www.bcfi.be/nl/ampps/134015?cat=b) and [VNZ's 4 June 2026 notice](https://vnz.be/blog/hpv-vaccin-vanaf-juni-terugbetaald-voor-jongvolwassenen-tot-en-met-30-jaar/). A separate bilingual eligibility note records the prescription and previous-vaccination conditions, without changing the user's Chinese text.
- **NSG-042, MOBIB:** user Chinese preserved and translated: five-year validity, €10 fee. Verified against [De Lijn's current card information](https://www.delijn.be/en/content/vervoerbewijzen/mobib/?vertaling=true).
- **NSG-047, Alma:** user Chinese `学生餐价格6-12欧。` preserved and translated as “Student meals cost €6–12.” An adjacent bilingual note identifies it as CSAL's budget estimate, not an officially verified minimum/maximum. Readers are directed to [Alma's current menus](https://www.alma.be/nl/restaurants) for dish-specific prices and student eligibility.

NSG-106 remains explicitly unverified: the historical US News rank is not replaced with another year's rank or presented as newly confirmed. NSG-054 retains the approved warning about inconsistent SNCB descriptions of the Student Multi ticket medium. NSG-080 and NSG-082 retain the approved uncertainty about a former delivery provider and shop name.

## Maintaining these updates

The same display cleanup also removes the earlier 11 September 2026 labels on the sidewalk comparison, 112-number confirmation and KU Leuven emergency-number reference. Those three source checks retain that review date in this maintenance record; their explanatory text and source links are unchanged.

Keep Chinese `approvedUpdateIds` and English `updateIds` aligned. Substantial text belongs in Markdown, not the schema or components. Update both languages together; retain dated sources and do not remove historical cautions from unrelated content. `getKnowledgeUpdates()` rejects missing counterparts and mismatched IDs during builds. A future full English translation must reconcile these approved updates before replacing the fallback body.

Run `npm run build`, `npm run test:site`, and `git diff --check`. The new regression check covers decision counts, bilingual correspondence, preservation of selected rejected passages, obsolete links, updated quick answers, partial-translation disclosure, emergency panels and generated search content. Existing checks protect the full corpus, routes and source-PDF hash.
