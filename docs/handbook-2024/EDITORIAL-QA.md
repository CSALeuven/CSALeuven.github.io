# Independent editorial QA — 2024 handbook knowledge base

Reviewed 2026-09-11. Scope: all 21 draft A articles, all 15 draft B articles, source text on PDF pages 5–31, all 98 packing records, and focused visual checks of pages 6–8, 12, 26, 29 and 31. Earlier chapter 1/2/8/9 QA and source inspection are in `drafts-c/audit.md`. No site files or draft articles changed during this audit.

## Result

No substantive missing source section, fabricated policy or unqualified conversion of a sensitive 2024 price/procedure into current advice was found in the 36 A/B article bodies. The drafting is careful and substantially complete. Historical content remains usable as a source archive, with limits explained near the sensitive claims.

All 44 source-derived article keys parsed successfully. Every metadata `related` value present at audit time resolved to a known key. No broken local article URL was found in body hyperlinks. Root reports a 45th first-week article and expanded cross-category links; that article is outside the independent draft audit.

## Actionable integration points

1. **Add supplemental official entrances.** At draft review time, 22 A/B articles had empty `officialSources`, including all housing articles and the visa/APS/ISP articles. The companion `supplemental-sources.json` supplies mappings for all 22 using 14 distinct verified official entrances. Every label explicitly says it is supplemental and not an original handbook link. Adding a reference must not change `reviewStatus` to reviewed or imply the current page validates the whole historical article.
2. **Keep related cards visible and accessible.** A/B bodies currently contain no internal body hyperlinks: phrases such as “另见临时住宿篇”, “详见合同核对篇” and “见转租及解约篇” rely on the template rendering the metadata related cards. Root reports 2–6 related items per article and category/search access, which resolves orphaning. Low-cost improvement: make those in-text phrases clickable, especially flights → temporary-accommodation, insurance → seeing-a-doctor/emergency, furniture → waste-recycling and utilities → contracts. This is not a source-fidelity blocker if related navigation is clearly rendered.
3. **Show medicine notice alongside the interactive rows and in print.** Dataset medicine entries preserve source wording but have `optional:false`; that means the source did not mark them optional, not that they are required. Do not render false as 必带 / required. The required exact medicine-import notice must remain visible with filtered medicine results and print output. Root should include this in UI QA.
4. **Date the cycling single-fact check.** `transport/cycling-rules` refers to “KU Leuven 当前说明” for pavement restrictions. The linked page was independently opened and does contain the cited statement. A small “单项核对：2026-09-11；其余内容仍待复核” label would make this consistent with the emergency/dental notes; do not mark the whole article reviewed.

## Completeness: housing

All source nuance is represented across the six housing articles:

- Included/excluded water, power, internet, heating, management, cleaning and waste-bag charges.
- Furnishings, common washbasins/hot water, optional mattress/vacuum/laundry/garden facilities and source-undefined A/B/D/E room labels.
- Floor, damp/mould, temperature, privacy, noise, insects and journeys to campus/shops/sports.
- University/private/cooperating/certified/non-certified routes; large/small-building figures; application window/lottery/motivation letter example; post-deadline vacancies.
- Kotwijs, green/blue labels, 2018 starting claim, label quality limits, Housing Service limits and Facebook low-price/deposit warnings.
- All 16 contract components, including tax, fire insurance, safety, landlord entry, pets and room-temperature guarantee.
- Contract appendix defects and deposit deductions, cleaning/alterations/repainting, payment and utility settlement, language/translation, written side agreements.
- 10/11/12-month leases, September start dates, half-year scarcity and price, subletting consent, visitors, termination difficulty and serious-quality problems.
- Both guesthouses, all booking platforms and historical platform opinions, limited reception hours, advance key collection and long-stay check-in coordination.

No legal thresholds, deposit limits or return deadlines were invented. The address-registration and English-contract legal claims are explicitly presented as historical statements awaiting confirmation.

## Completeness: transport

The full bus and rail source product lists and all quoted prices are retained:

- Bus: €20 student pass, both stops within area, historical purchase-window limitation; broken MOBIB fragment with €5/5 years; €3 driver ticket, €2.15 SMS, €1.80 app ticket, €15 app 10-pass, €16 paper 10-pass, €6 app daypass, €6.15 SMS daypass; source SMS codes; one-hour and 24-hour validity; validation/purchase timing; day/month/season/year options; HALTE, doors/accessibility, routes/detours, third-party navigation limits, strikes and day-specific schedules.
- Rail: standard €3–23, return double; weekend half-price/window; GoPass 1 €6.40, GoPass 10 €52; Campus 49 days/5 return trips, card 5 years, documents and renewal parts; GoUnlimited €15/week/€25/month, age and MOBIB; €5.30 Diabolo fee; €7 onboard surcharge and €75 fine; class markings, IC/L/S, stopovers, inspector discretion caveat, platform changes and passing trains.
- Bicycle rental terms, new/used channels, named Facebook groups, locks, all five pump locations, repairs and workshop booking are present.
- All 11 cycling-rule bullets, parking and sign references are retained, with unsafe simplifications flagged rather than promoted.
- Taxi places, payment and €10–20 historical fare, licence exchange statements and documents, all questionable scooter speed bands are present.

The MOBIB sentence is actually broken in the rendered page 26; the draft correctly avoids guessing the missing conditions. Page 29 actually prints 6–8 km/h and maximum 18 km/h, so those are source inaccuracies rather than extraction mistakes. Page 31's decorative street-name graphic contains no omitted travel instructions.

## Completeness: packing and other chapters

- Packing has 98 rows, all source item names and quantities, including the missing printed numbers 8/45 and repeated 58. Category totals match 7/10/29/10/5/4/5/10/8/7/3. Merged notes correctly propagate to stationery, food, medicine and cosmetics. Source spelling errors are not silently converted into medication advice.
- All p5 visa-document topics, APS, funds amount/year, flight carriers/transit cities, baggage/seat advice, arrival requirements/timelines and all p17 academic topics are present.
- Life chapter retains climate, store/restaurant names and source subjective judgements with appropriate framing, all laundry/delivery/dining/waste price figures, donation conditions and kitchen care.
- The differing city areas (57.51 in chapter 2 vs 56.63 in chapter 7) are preserved as a discrepancy rather than silently reconciled.

## URL checks and boundaries

Verified that the existing body links to the city driving/waste pages, university banking/cycling pages and De Lijn Student Bus Pass resolve to relevant official content. The supplemental JSON targets were all opened and returned relevant official pages. These are navigational checks, not complete reviews of policy or service availability.

The old university health-insurance URL and old fiets URL timed out in the web tool. The source police-form URL could not be opened by the web tool. These failures do not establish that the links are broken for users; keep original attribution and give an additional reliable current navigation entrance where practical. The root's existing health guide links to `https://www.kuleuven.be/english/life-at-ku-leuven/wellbeing-safety`, which was opened successfully and contains health-insurance navigation.

The Chinese embassy homepage links to an external education-service site that could not be read. `supplemental-sources.json` therefore uses the verified embassy navigation homepage, labelled 教育服务导航, without guessing a reporting form or mailbox. The taxi reference is the municipal taxi affairs contact page, not a ride-booking service; its label says so.

## Human-review queue retained, not release blockers

The drafts already flag important potentially outdated assertions: double authentication, APS applicability, education-office return-certificate reporting, university registration address/payment, grade/rank boundaries and PhD requirements, PayPal return postage, waste sorting, transit products/penalties, scooter categories, driving-licence validity and landlord rights. Supplemental reference pages must remain distinct from the 2024 record. No policy text should be silently rewritten during link integration.
