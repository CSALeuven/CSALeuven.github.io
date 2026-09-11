# Historical events / 往期活动维护

Keep paired Markdown in `src/content/events/{zh,en}/` with the same stable ASCII key. Content, category, dates and images are editable data; no route or component edits are needed for another event. Keep the factual content consistent between languages. Current categories are `CULTURE`, `COMMUNITY`, `SOCIAL`, `SPORTS`; only add a category when new material needs it.

## Dates and unknown facts

- For a day without a confirmed time, use `dateOnly: "2026-03-30"`. Optional `endDateOnly` is an inclusive last calendar day. Do not also use `date` or `endDate`.
- For a known time, use `date: "2027-01-15T18:00:00+01:00"` and optionally `endDate` with the correct offset. These values are examples, not events. The display uses Europe/Brussels.
- Keep `sources[].publishedAt` as the source's exact publication instant, separately from the event date. WeChat's captured display dates in this batch match Beijing time; the page explicitly labels publication dates accordingly.
- Omit unknown times, venues and addresses. A source publication date or voting deadline is not an activity's start date. Record year inference and unresolved details in the manifest/report.
- Completed recaps use `status: past`, `featured: false`, and no registration URL. Past pages remain indexable and have article sharing metadata; only future/ongoing confirmed events with a verified location/address can emit Event JSON-LD.

## Photos and sources

Store selected actual source photographs under `public/images/events/<key>/`. Use descriptive filenames and meaningful alt text without inferred identities. Retain source framing, watermarks and event-specific credits. Set `coverImage`, `coverAlt`, `coverWidth` and `coverHeight`; put the other photos in `gallery` as `{ src, alt, width, height }`. The static gallery links to the complete local image. Do not repeat the cover in the gallery.

Add each original publication to `sources` with `title`, `url`, and `publishedAt`. The shared page puts these links after the gallery. Preserve all relevant originals when multiple articles describe one event. A canonical WeChat URL keeps `__biz`, `mid`, `idx`, `sn`; remove tracking parameters. Never copy source scripts, login widgets, credentials or raw saved HTML into the public site.

The migration manifest records source filenames/hashes, public IDs, publication timestamps, event mappings, inference notes and selected image provenance. The image audit summarizes excluded graphics, duplicate thumbnails, and OG cover choices. Check both source IDs and real event date/subject/location before adding another record.

## Archive and checks

`/events/` and `/en/events/` keep upcoming events first and group past/cancelled records by descending year and date. Year links work without JavaScript. The homepage shows the next three upcoming events, falling back to the three latest completed recaps. The former three sample event pairs were removed from the collection; sample support remains in the schema for explicitly draft/demo use.

Run `npm ci`, `npm run build`, and `npm run test:site`. The existing Linux workflow provides these checks on managed Windows devices where esbuild is blocked. Event checks cover calendar dates, Brussels day boundaries/DST, paired generated recaps, source publication dates, local image hashes, ordering, year links, metadata and registration safeguards. Check desktop/mobile rendering, the language switch, gallery links and original sources before review. Branch builds never deploy; deployment remains restricted to `main`.
