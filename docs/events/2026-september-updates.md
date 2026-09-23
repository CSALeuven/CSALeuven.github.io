# September 2026 event updates

## Sources and scope

The user supplied two saved WeChat articles on 23 September 2026. Their `js_content` bodies were parsed as data; source scripts were not executed or copied into the site. Canonical article URLs, publication instants from `ct`, file SHA-256 hashes and selected image provenance are recorded in [2026-september-sources.json](2026-september-sources.json). Publication dates remain separate from event dates. The saved originals provide the editorial evidence; no independent live-article retrieval is claimed.

- **中秋快闪｜你的专属月饼已就位，周五见！** — published 22 September 2026, 07:37:31 UTC. Creates the paired `2026-mid-autumn-mooncake-pop-up` event.
- **9月16日鲁汶学联Student Fair迎新活动顺利进行！** — published 20 September 2026, 11:17:27 UTC. Updates the existing paired `2026-student-fair-csal-booth` event in place.

The Student Fair announcement was already merged in PR #7. No patch replay, duplicate event or news record is needed. Its public key, routes, previously confirmed date/time/location and original announcement source are retained.

## Mid-Autumn pop-up

The announcement confirms Friday 25 September, two separate 30-minute pickup windows, CSAL flags at both stops, one mooncake per person, 220 mooncakes in total and first-come, first-served collection. The year is inferred from the September 2026 publication and verified against the weekday: 25 September 2026 is Friday.

1. Outside Pangaea: **16:50–17:20**, Andreas Vesaliusstraat 34, 3000 Leuven.
2. 私厨 pickup point: **18:20–18:50**, `Parking BodartVeilingweg, 3001 Leuven, Belgium`, preserved exactly as supplied. No guessed street number or map pin is added.

Times are displayed as Belgium local time, CEST / UTC+02:00. The shared event metadata uses `dateOnly: 2026-09-25` deliberately: this is one announcement covering two separate stops, not one continuous 16:50–18:50 session. Both bilingual summaries state that there are two 30-minute windows; each stop's exact time and address appears in the body. Existing day-based rollover moves the event to the archive after 25 September in Brussels. No single `address` or Event JSON-LD is supplied for this multi-location announcement. No registration requirement, price, reservation form or allocation per stop is invented.

The event is `CULTURE`, `upcoming`, `featured: true`, `draft: false`. The original OG cover is stored unchanged with its actual dimensions. Body decorations, QR graphics and the mooncake product photo are omitted; the page does not promise a specific flavour or product appearance.

## Student Fair recap

The existing record becomes `past`, `featured: false`, with bilingual recap titles and past-tense text. CSAL remains a participating student association at KU Leuven's fair. The original announcement and new recap are both linked with their separate publication timestamps.

The recap states that the event prepared 100 H Foods €5-off-€30 vouchers, 200 Miss tea tea free-drink vouchers, and 200 打酱油 welcome packs plus a mooncake gift-box draw. These are historical items, not current offers or claims that every item was distributed. Supporters are acknowledged only in this event; global partner data is unchanged.

Four actual article photos are copied unchanged with original framing and watermarks. The complete booth-setup photo is the cover; three distinct photos of booth conversations form the gallery. The cropped OG version of the cover, a storage photo, decorative graphics, sponsor advertising and QR images are excluded. Alt text describes the scene without identifying attendees. The original announcement cover stays in the repository as an existing asset but is no longer used by the recap.

## Validation

Run the repository's required build and complete site checks. Check both event detail pages, event listings and homepages in both languages at 375, 768, 1024 and 1440 px. Verify language counterparts, local images/gallery links, original-source links, archive placement, the upcoming homepage card and keyboard/mobile navigation. Results are recorded in the PR.
