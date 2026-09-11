# WeChat historical event migration — review report

Batch: 11 September 2026. Review branch: `historical-events-import`. This branch must not be merged or deployed automatically.

## Batch totals

| Measure | Result |
| --- | ---: |
| HTML files received | 5 |
| Articles successfully parsed | 5 |
| Confirmed, dateable real events identified | 4 |
| Additional real online activity with unresolved chronology | 1 |
| Events created | 4 (8 bilingual pages) |
| Duplicate articles merged | 0 |
| Non-event articles skipped | 0 |
| Ambiguous files held for review | 1 |
| Photos included | 24 |
| Selected photos downloaded | 17 |
| Selected photos reused from saved companion folders | 7 |
| Extra OG cover candidates downloaded for inspection | 4 |
| Total successful image downloads | 21 |
| Body image references excluded as decorative/UI/sponsor graphics | 31 |
| Duplicate poll thumbnails excluded | 9 |
| Other photo candidates not selected, including the held activity | 21 |
| Images with unresolved download failures | 0 |

All 85 body image references were accounted for; 61 were excluded. Source-context classification is distinguished from visual verification in `image-audit.json`. All 24 selected images were visually inspected, decode correctly and have distinct hashes (2,457,388 bytes total; largest 180,062 bytes). Source watermarks and full framing are retained. The four OG candidates were inspected: craft/dance covers were title graphics, and Namur/tournament covers were cropped versions of body photos. Full body photographs were used instead. Initial Python/PowerShell transport failures were resolved using normal Node fetch with default TLS; none remain outstanding.

## Imported records

### `2026-lacquer-fan-paper-cutting`

- Chinese: 遇见非遗：漆扇制作与剪纸活动回顾
- English: Lacquer fans and paper cutting at Pangaea
- Date: **2026-03-30**; year inferred with high confidence from recap publication context. No exact event time assigned.
- Location: 鲁汶大学学生活动中心 Pangaea，鲁汶 / Pangaea, Leuven.
- Category: `CULTURE`. Photos: 6, including cover.
- Source: [鲁汶学联漆扇与剪纸活动回顾](https://mp.weixin.qq.com/s?__biz=MzYzOTAyMjI4MQ==&mid=2247495704&idx=1&sn=105e322e47f525e0957a38d2ce74d8f7)
- Source publication: `2026-05-01T21:32:49Z`; saved Beijing display `2026-05-02 05:32`. This is not the event date.

### `2026-namur-exchange`

- Chinese: 漫步那慕尔：两地学联交流回顾
- English: A day of exchange and discovery in Namur
- Date: **2026-03-28**; year inferred with high confidence from recap publication context. No exact event time assigned.
- Location: 那慕尔 / Namur.
- Category: `COMMUNITY`. Photos: 7, including cover.
- Source: [鲁汶学联漫步那慕尔：友谊与探索之旅](https://mp.weixin.qq.com/s?__biz=MzYzOTAyMjI4MQ==&mid=2247495927&idx=1&sn=9c5aecc270ce4093050999be831d14bb)
- Source publication: `2026-07-27T20:55:40Z`; saved Beijing display `2026-07-28 04:55`. This is not the event date.

### `2025-partner-dance-party`

- Chinese: 青年交流会·双人舞派对回顾
- English: Meeting through music: CSAL's partner dance party
- Date: **2025-11-16**; year inferred with high confidence from recap publication context. No exact event time assigned.
- Location: 鲁汶 / Leuven.
- Category: `SOCIAL`. Photos: 3, including cover.
- Source: [青年文化交流会·双人舞派对回顾](https://mp.weixin.qq.com/s?__biz=MzYzOTAyMjI4MQ==&mid=2247495219&idx=1&sn=1328178e900ddce661aafe1ef3a7228b)
- Source publication: `2025-11-23T16:16:57Z`; saved Beijing display `2025-11-24 00:16`. This is not the event date.

### `2026-csal-table-tennis-open`

- Chinese: 2026全比利时鲁汶学联杯乒乓球公开赛回顾
- English: 2026 CSAL Table Tennis Open: tournament recap
- Date: **2026-03-08**; year explicit in source body. No exact event time assigned.
- Location: Unknown — omitted / Unknown — omitted.
- Category: `SPORTS`. Photos: 8, including cover.
- Source: [2026全比利时鲁汶学联杯乒乓球公开赛圆满结束！](https://mp.weixin.qq.com/s?__biz=MzYzOTAyMjI4MQ==&mid=2247495592&idx=1&sn=858f80c13b746feb0af1562dca8226a4)
- Source publication: `2026-03-15T16:33:53Z`; saved Beijing display `2026-03-16 00:33`. This is not the event date.

## Held source

**E — ambiguous: 欢度元宵节（年夜饭投票开奖啦！）.** This is a real online dinner-photo vote alongside a holiday greeting, not simply a non-event. It lacks a confirmed activity start date. Its Brussels March 8 at 24:00 deadline conflicts with the stated Beijing March 8 at 17:00 equivalent. The title suggests results, while the body invites voting; the saved widget's counts do not establish a winner. No dated event, winner, registration link or lantern-riddle gathering was created.

[Original article](https://mp.weixin.qq.com/s?__biz=MzYzOTAyMjI4MQ==&mid=2247495516&idx=1&sn=032bf44ab5a612a418767ad332effda2). Publication `2026-03-02T16:59:08Z` (saved Beijing display `2026-03-03 00:59`).

## Manual verification / omitted fields

- **Craft workshop:** verify the inferred year **2026** (body says March 30; source published May 2, 2026 in Beijing time). The exact time, street address, attendance, named author and photographer are unknown and omitted. LOKO is credited solely as this event's sponsor, not a general CSAL partner.
- **Namur visit:** verify the inferred year **2026** (body says March 28; source published July 28, 2026 in Beijing time). Exact timing, attendance, named square/bridge/laboratory and street addresses are unknown and omitted. CSSAN's source attribution and explicit text/layout/photography credits are retained in both languages; the visit does not establish a general formal partnership.
- **Dance party:** verify the inferred year **2025** (body says November 16; source published November 24, 2025 in Beijing time). Exact venue, street address, times, attendance and named instructors/photographers are unknown and omitted.
- **Table tennis:** event year/date are explicit. Host city, venue, address and full start/end schedule are unknown and omitted. The source's group-stage “2:15” is not used as a complete event start timestamp. Source-named placings and final score are retained as text without identifying faces. Graphical sponsor identities and photographer credits were not asserted; verify before adding them. No general partner relationship was inferred from refreshments or graphics.
- **Held vote:** establish the activity's start date/date range (or choose an undated notice model), resolve the intended deadline and obtain reliable final results before importing chronology or outcome. Publication time and vote counts must not fill these gaps.

No further facts are needed to review the four completed recaps. Unknown details can remain omitted indefinitely. Full per-source inference and omission notes are in `wechat-import-manifest.json`.

## Implementation and source handling

All five rendered article bodies and relevant embedded metadata/literal body strings were inspected. Escapes were decoded without executing scripts. Article title, description, source URL, publication epoch, account identity and author/body context were separated from WeChat framework data. Public IDs come from the canonical URL; account identity comes from the rendered account link. Raw HTML, authentication data, platform UI, voting widgets and decorative image streams were not copied into the website.

No duplicate event was found by date, subject, venue or narrative; unique source IDs and hashes corroborate this. Three fictional sample event pairs were removed. Four restrained categories support this batch. Shared event components now provide calendar dates or genuine timed dates, optional venue, static galleries, original sources, year navigation, and recent completed-event homepage fallback. Branding, social QR assets and the New Student knowledge base content remain unchanged. Past recaps are indexable, show no registration CTA and emit no current Event JSON-LD.

## Validation

Validation status is recorded in `VALIDATION.md` after the Linux build and browser review. A report is prepared before opening the PR. The PR is for review only; production remains on `main`.
