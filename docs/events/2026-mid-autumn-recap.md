# Mid-Autumn mooncake pop-up recap

## Source and event identity

The user supplied `中秋月饼快闪活动圆满结束！.html` on 27 September 2026. The saved article's `js_content` body was parsed as data without executing its scripts. It explicitly describes the completed 25 September mooncake pop-up at Pangaea and the 私厨 pickup point. This updates the existing `2026-mid-autumn-mooncake-pop-up` event and keeps both public language routes.

The canonical recap URL is `https://mp.weixin.qq.com/s/ieS8y0twCXqpG-TPRf9W8Q`. The source `ct` publication timestamp is `2026-09-27T07:38:57Z` (09:38:57 in Brussels; 15:38:57 in Beijing). It is separate from the event's retained `dateOnly: 2026-09-25`. File hashes, publication metadata and selected image URLs are recorded in [the source manifest](2026-mid-autumn-recap-sources.json). The original 22 September announcement remains linked alongside the recap. The saved article is the editorial evidence; no independent live-article retrieval is claimed.

## Editorial decisions

- Set both entries to `past`, `featured: false`, `draft: false`, with bilingual recap titles, summaries and past-tense copy.
- The recap confirms pineapple, lotus seed paste with salted egg yolk, and mixed-nut/salted-egg-yolk mooncakes, orderly collection, and CoCo half-price bubble-tea vouchers.
- It reports completion **around 19:00**. Preserve that approximation in the body; do not invent a precise end timestamp or imply that the earlier planned pickup windows describe the actual finish.
- Remove the active invitation, pickup rules and forward-looking announcement text. The previously announced total of 220 is not presented as an actual attendance or distribution count because the recap does not confirm a final total.
- Retain the two existing location names. Parking Bodart comes from the already-published announcement; the recap again identifies Pangaea outdoors and the 私厨 pickup point. The recap does not need to repeat the original street addresses.
- CoCo is mentioned only as part of what was provided at this completed event. Its advertising graphic, contact information and account QR codes are not imported, and no global partner entry is added.

## Photos

Use three actual photographs from the supplied article, unchanged and with original framing/watermarks. The source places body image 3 under the Pangaea heading and body image 4 under the 私厨 heading; these establish the location descriptions. The full Pangaea photo is the cover, and the 私厨 photo plus body image 5 (mooncakes and vouchers) form the gallery. Alt text describes scenes without identifying attendees.

The OG cover is a crop of the Pangaea photo and is excluded to preserve the complete framing. Decorative images, the mooncake product graphic, CoCo advertising and QR images are excluded. The earlier announcement cover remains as an existing repository asset but is no longer the recap cover. Raw source HTML/scripts are not included in the public site.

## Validation

Run the existing build and complete site suite. Verify both detail pages, homepage recap selection, archive ordering and responsive presentation at 375, 768, 1024 and 1440 px, including image/gallery links, source links, language counterparts, keyboard/mobile navigation and QR sizing. Record the results in the PR.
