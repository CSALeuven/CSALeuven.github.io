# Confirmed CSAL organizational profile

The Chinese organization name, mission and four core responsibilities were supplied and confirmed by the CSAL committee in the user's brief. They are source text, not draft copy. No constitution version or approval date was supplied or inferred.

## Source fidelity and maintenance

- `src/data/site.ts` centralizes the official Chinese, English and Dutch names and their short forms. The existing `site.name` and `site.shortName` API remains compatible.
- The official English name is **Chinese Students and Scholars Association in Leuven**. The Dutch reference name is **Chinese Studenten en Geleerden Vereniging van Leuven**. The site's public languages remain Chinese and English.
- `src/data/about.ts` contains the complete Chinese mission and all four responsibilities, including the original punctuation and （一）–（四） prefixes. Display headings and 01–04 numbers are separate from the source paragraphs. English is a faithful translation.
- `confirmed-source.json` is an independently extracted snapshot of the five Chinese paragraphs from the supplied brief (SHA-256 `63cef83f963abb113bb6d6905acdeaf0428521115163db7d9a99889c7a68eb5b`). Tests compare both the data and generated Chinese page to this exact text. Do not update the snapshot merely to make a wording change pass; obtain newly confirmed replacement wording first.
- The English translation retains registration at KU Leuven, voluntary formation, nonprofit/nonpolitical/nonreligious status, support for students and scholars, shared platforms, exchanges and assistance. It preserves legitimate rights, communication with the university/government/embassy, the embassy's Education Section, academic/cultural/sports activities and relationships with other student groups and local/international communities. “窗口” is rendered as “a point of contact.” These translations add no university or diplomatic endorsement.
- The separate KU Leuven independence disclaimer remains unchanged on About and in the footer.
- Homepage introductions and three short themes are explicitly separate editorial summaries in the data file. They do not replace or claim to be the formal responsibilities.

## Page structure and preservation

About retains the existing welcoming slogan and brand assets. The sequence is:

Intro → Organization Name → Our Mission → Core Responsibilities → Current Committee → Previous Committees → Our Story.

The former generic focus section, provisional mission note and public 2024 handbook profile disclosure are removed, together with the unused import and styles. `src/content/handbook-notes/about.md` and the original handbook PDF remain unchanged as source/archive material. Historical quotations and source documents retain their original names; they were not blindly renamed.

The committee component, all 58 name/year records, 2025 current marker, historical disclosures and source links are unchanged. Event/news/guide content, partners, social links, routing and dependencies are outside this update. Shared naming changes apply to Header, Footer, image descriptions and About metadata without changing their structure. Founding details remain unconfirmed in the existing Our Story section.

## Validation

The repository's Linux workflow runs explicit `npm ci`, `npm run build` and `npm run test:site`; the managed Windows environment blocks native esbuild. The new profile check verifies exact source preservation, rendered section order and text, all three names, short homepage themes, footer names/disclaimers, removed obsolete UI, archive retention and absence of Dutch routes. Existing site, knowledge, event, news and committee checks continue to run.

Both homepage and About language variants are reviewed in the built preview, with About checked at 375, 768, 1024 and 1440 pixels. Build and responsive-review results are recorded in the PR. This change is prepared for review without merging or deploying it.
