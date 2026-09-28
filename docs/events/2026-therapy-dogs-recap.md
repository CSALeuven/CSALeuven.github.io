# Therapy-dog activity with Finn and Suki

The user supplied `活动回顾｜考试季里，和 Finn、Suki 一起松口气.html` on 28 September 2026. Its article body was parsed as data without executing scripts. No matching event was present, so this adds the paired `2026-therapy-dogs-finn-suki` recap using the existing event layout and archive.

## Source and dates

The canonical source is <https://mp.weixin.qq.com/s/1QC06N6aGdkkbS5qJgTxpA>. The captured publication timestamp is `2026-09-28T08:04:19Z` (10:04:19 Brussels / 16:04:19 Beijing). The article describes 11 June in “this year's” exam season, establishing the event date as **11 June 2026**. The confirmed afternoon and two sessions of approximately one hour do not establish precise start/end times, so the record uses `dateOnly`.

The supplied article is the editorial evidence; no independent live retrieval of the WeChat article is claimed. Source-file hashes, image provenance and exclusions are recorded in [the source manifest](2026-therapy-dogs-sources.json).

## Editorial decisions

- Publish as `past`, with `featured: false`, no registration URL and no Event JSON-LD.
- Preserve CSAL's collaboration with Pangaea, the location Pangaea, free participation, owners Rudi and Kelly, dogs Finn and Suki, and the two approximate one-hour sessions.
- Describe the first session's international students, including students from Agora and preregistered Pangaea students. The second session offered **15 places** to preregistered Chinese students; this is capacity, not an attendance count.
- Describe companionship and a break from studying without adding clinical claims, credentials, dog breeds, individual owner/dog pairings, a street address or future registration details.
- Use the actual event date for archive/homepage ordering, separately from the September source publication date. No global partner record is added.

## Photographs

Use six unchanged source images with original framing and watermarks: the full group photo from body image 6 as the cover; two dog portraits (3 and 4); the first session (5); gentle petting (8); and another circle scene (9). The article names the dogs collectively rather than labelling each portrait, so alt text describes appearance without assigning names. The woodland portrait is described as a source portrait, not as an event photograph.

Exclude similar circle views 7 and 10, decorative graphics, the article QR, and the cropped OG cover. Preserve the site's existing brand and public-account QR bytes. The cover is not duplicated in the gallery. Raw source HTML and scripts are not published.

## Validation

Run the existing build and full site suite. Check both detail routes, homepage/archive ordering at 375, 768, 1024 and 1440 px, source and full-image links, language switching, mobile menu, keyboard focus, and QR sizing. Verify selected image hashes in both `public` and `dist`, calendar dates, past-event metadata and registration safeguards; record results in the PR.
