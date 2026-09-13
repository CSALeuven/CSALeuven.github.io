# Student Fair booth: source and editorial review

## Event facts

The paired event key is `2026-student-fair-csal-booth`. The Chinese title is **鲁汶学联 Student Fair 展位**; the English title is **Meet CSAL at the Student Fair**.

- Fair: **Student Fair – International Student Associations**.
- KU Leuven holds the fair. CSAL participates as an exhibiting student association with its own booth; CSAL does not organize the overall fair.
- Wednesday, **16 September 2026, 16:00–18:00**, Europe/Brussels (CEST / UTC+02:00).
- Venue exactly as supplied: **Agora, Parkstraat, Leuven**.
- No registration is required; visitors may arrive and leave freely during the event.
- Both entries are `upcoming`, `featured: true`, and `draft: false`.
- `COMMUNITY` reuses the current taxonomy. The active collection and maintenance guide list COMMUNITY, CULTURE, SOCIAL and SPORTS; WELCOME is not currently used.

## Primary-source extraction

Saved source: `9月16日鲁汶学联展位等你来.html`, supplied by the user during implementation. Its SHA-256 is `1c82fd5b898698173162bfe353fcba95e041e042f67560021730113919da9d6d`.

The HTML was parsed as data without running its embedded scripts. The rendered `js_content` body and decoded `content_noencode` body agree exactly after whitespace normalization (653 characters each). JavaScript string escapes, including `\xNN` and `\uNNNN`, were decoded while preserving the original Chinese text, and HTML entities were resolved. Both versions explicitly state that CSAL will participate in the Student Fair organized by the school.

- `og:title`: **9月16日鲁汶学联展位等你来**.
- `og:description`: **9月16日，Agora 见！鲁汶学联在 Student Fair 等你**.
- `og:url` and `msg_link` agree on the [canonical announcement](https://mp.weixin.qq.com/s/xRDtV-2s1Leip40iZunmuw). No tracking parameters are retained.
- `ct`, `ori_create_time` and `create_timestamp` all contain **1789315200**, or **2026-09-13T16:00:00Z**.
- The source's `create_time` is **2026-09-14 00:00**, which matches that instant in Beijing. It is **13 September, 18:00 CEST** in Belgium. The existing source renderer explicitly displays Beijing publication dates; this publication instant is stored only in `sources[].publishedAt`, separately from the event start/end.

The source confirms the date, time, venue, drop-in attendance, association introduction, settling-in questions, experience sharing, meeting other students, welcome gifts and prize-draw items. Both website versions summarize these facts. Gift examples and quantities are not promised.

The live WeChat article could not be retrieved during the initial link check (web-reader failure and direct-request timeout). The saved original is the primary evidence; the canonical link is verified against its metadata rather than claimed to be independently reachable from this environment.

## Cover and other images

The official `og:image` agrees with the source's cover `cdn_url`:

[Original cover image](https://mmbiz.qpic.cn/mmbiz_jpg/INa3B3G2ZInLLN7CFiaQribibKBzMn78VVUF2wuTBdibiaq3iaKXwhdXS4RpJa2gSDbA2yJ16yPia2zcsMNxYcYAibycfjdtQibGKj1aP2k8ojKwrkVI/0?wx_fmt=jpeg)

The downloaded JPEG was inspected visually: it is CSAL's welcome graphic, with a cat and megaphone, the association's welcome headline and an invitation to Agora on 16 September. It is suitable as the announcement cover. It is kept unchanged at `public/images/events/2026-student-fair-csal-booth/cover.jpg` (898 × 383 pixels, 53,797 bytes; SHA-256 `985e3311dbc0585797fb3fe24f510ac74ec040c4ca4a480fab047573ec86f1cc`). Each language supplies a factual alt description, and the existing contain/aspect-ratio styling preserves the framing.

Eleven body `img` elements and their WeChat `data-src` URLs were inventoried. They were not bulk-downloaded: the source text and one official cover provide the information this announcement needs. No decorative layout, unrelated QR code, avatar, remote image or gallery is imported. Raw saved HTML and its scripts are not shipped with the website.

## Event supporters and deliberately absent fields

Only the event bodies acknowledge these source-named supporters:

- **打酱油 欧洲线上亚洲食品购买APP**.
- **Miss tea tea 奶茶店**. The source also says online ordering is available and gives **Bondgenotenlaan 106, 3000 Leuven**.
- **华润亚超 H Foods**. The source gives **Brusselsestraat 118A, 3000 Leuven** and **https://www.hfoods.be/winkels**.

The public acknowledgement is restrained to the names and business descriptions; the promotional ordering/address details are not repeated. No entries are added to global partner data, and the Partners page is unchanged.

No street number for Agora, room, booth number, registration URL, ticket price, capacity, deadline or gift quantity is invented. The `address` field is absent, so the current route emits no Event JSON-LD for this event. No duplicate news record is created.

## Implementation and validation

The branch starts from `main` at `4ba6de9af46e64c2df3cc42c4ed2a79c1fdfbb8f`; there were no open pull requests at inspection. The changes are limited to the paired event Markdown, the local cover, this review note, and an announcement-specific source heading in the existing shared article template. The schema, homepage data flow, route generation, styles, global partners, brand assets and deployment workflow are preserved.

The existing collection creates both detail pages, preserves their language counterparts, puts the event in the upcoming listings and selects it for the homepage in date order. The existing event template has no registration button without a registration URL; the summary and participation section explicitly state that no registration is required. Sources use the existing architecture, with **原活动推送 / Original announcement** for announcements and the existing source heading retained for historical recaps.

Final build, site-check and responsive verification results are recorded in the pull request. This change is for review and must not be merged automatically.
