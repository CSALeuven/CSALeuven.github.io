# Chapters 1, 2, 8, 9 extraction audit

Source: 鲁汶学联新生手册-2024.pdf. Inspected clean extracted text and rendered pages 1, 3, 4, 32, 33, 34, 35; page 2 contents text also read. Eight KB drafts plus a separate About historical block. None marked reviewed. All eight have timeSensitive:true. English text is title and summary metadata only, not a reviewed translation.

## Inventory and complete coverage

| Draft key | Source sections | PDF pages |
| --- | --- | --- |
| about-leuven/city | 2.1 city identity, geography, population, distances, nearby cities | 4 |
| about-leuven/universities | 2.2 KU Leuven history/campuses/statistics, Association members/degree distinction, UCLL campuses | 4 |
| healthcare/seeing-a-doctor | service tiers, GP and referrals, GMD, two hospitals, nexuzhealth | 32; hospital photo on 34 noted |
| healthcare/student-health | ordinary complaints/student GP, examinations, mental health, TCM reference, HPV vaccination historical process/discount | 33 |
| healthcare/emergency | emergency departments, 112, Social Service/reimbursement, ambulance cost claim, university emergency hotline | 33–34 |
| healthcare/dental | Zhao dentist, address, website, language and booking term, subjective price description | 34 |
| sports/university-sports | Sportkaart, fitnesskaart, prices, validity dependencies, classes and registration, six pictured venue labels | 35 |
| sports/community-sports | Sportoase, public facilities, Chinese student sports groups | 35 |
| About page block (not KB article) | 1.1–1.5 all identity, history, mission, aspirations, activities and caveated size/partnership claims | 3 |

## Human verification priorities

1. **Emergency medical content:** Handbook's statement that ambulance service is charged by time is unverified and potentially inaccurate. Retained only as explicitly labelled historical claim, never as current fee guidance. No current price invented.
2. **GP and referrals:** Original's broad claim that most specialists require GP referral and that GP is available at night is not promoted as a universal rule. Actual appointment and referral requirements need provider review. GMD description and reimbursement effects also require review.
3. **Medical checks:** Original experience of two-month hospital waits versus one week at MCH is retained as 2024 anecdotal timing, not a triage rule or appointment promise.
4. **Vaccination:** Original pharmacy-to-GP process and under-22 HPV discount require professional/current-policy review. Retained in a clearly historical subsection, with no added medical regimen or recommendation.
5. **Traditional Chinese medicine:** Source clinic association URL retained as historical directory reference. Availability, credentials and effects unverified. No endorsement.
6. **Dentist:** Chinese language availability, fees and reimbursement unverified. The source's “friendly/reasonable fees” is framed as a 2024 author impression, not a site endorsement. First-appointment instructions differ from current clinic homepage; see verification below.
7. **Sports:** €35/year Sportkaart and €95/year fitnesskaart, 70+ courses, booking three days ahead, semester registration, fees and card dependencies all remain 2024 historical details. USC dashboard could not be read by web tool (Internal Error); preserve original URL and provide official Sport offer fallback.
8. **City and universities:** Population, rankings, faculties and student figures need current verification; retain original years. Page 4's 16 faculties differs from current KU Leuven About page (15). No silent numeric replacement. Geography distances have no source method.
9. **CSAL:** Formal registered name/status, founding date, 1,700 count, “largest” claim and cooperation claims need organization confirmation. Historical About block does not infer present-day endorsement/partnerships.
10. **Sport groups:** No current named organizers or contact details present in source; no contacts fabricated.

## Narrow separate verification on 2026-09-11

- Belgian government, **How to call 112**: https://112.be/en/how-call/how-call-112. Confirmed 112 for ambulance/fire/police, 101 listed for urgent police assistance in Belgium. Source is identified as Federal Public Service Home Affairs initiative in footer. A dated note is included in emergency article, while article reviewStatus stays legacy-2024.
- KU Leuven, **Health, social security & well-being**: https://www.kuleuven.be/english/life-at-ku-leuven/wellbeing-safety. Confirmed university emergency number +32 16 32 22 22 (source PDF did not print a number). Added as a separately dated note only.
- **Tandartspraktijk Vlierbeek**: https://tandartspraktijkvlierbeek.be/. Homepage states first appointments for new patients with Ruiting Zhao or Laurian Schol can only be made by telephone; it gives address Holsbeeksesteenweg 66, 3010 Kessel-Lo. This differs from handbook's online `controle volwassene` advice. Added a dated correction note without marking whole article reviewed.
- Live official reference landing pages opened (not whole-article fact review): Leuven city /en, KU Leuven About, KU Leuven Association /eng, UCLL /en, KU Leuven Stuvo health, UZ Leuven mynexuzhealth, MCH, KU Leuven Sport offer. Sportoase source /nl/zwembad redirects to /nl/aqua/.

## Extraction and image decisions

- Page 33 source itself contains jumbled `Student 的队。HealthCentre` sentence. Normalized service name to Student Health Centre and recorded cleanup in article; original intended meaning retained.
- Collapsed `generalpractitioner`, `GlobaalMedischDossier`, `RegionaalZiekenhuisHeiligHart` into readable proper names; English aliases added for search.
- Page 4 `Odissee` shown as Odisee with original spelling noted; official Association page confirms Odisee spelling.
- Page 34 aerial hospital photo labelled Health Sciences campus at Gasthuisberg, KU Leuven, UZ Leuven: location label retained in doctor article; image not duplicated due decorative/reference character.
- Page 35 six venue photograph labels transcribed: Gebouw De Nayer; Gymnasium; Topsporthal; Indoor Atletiekhal; Beach- & Fitnesshal; Buitenfaciliteiten. No hidden quantitative table data in these photos.
- Page 1 cover identifies Chinese Students and Scholars Association of Leuven, Leuven 2024 Student Handbook. Original PDF is preserved by owner, no redesign or repackaging of source archive.

## Integration notes

- Each of the eight article drafts uses a JSON object in YAML frontmatter (valid YAML) with key values matching nested routes.
- `about-csal-historical.md` and this audit are not collection article drafts.
- Body links assume `/new-students/{key}/`, plus existing `/contact/` and `/events/`.
- Related arrays point only to these eight known keys to avoid dangling links; owner may add insurance, travel and university-registration links using final keys.
- All omitted cost/document fields are intentional: the source did not provide fixed clinical fees or required document lists; articles explicitly say so where relevant.
