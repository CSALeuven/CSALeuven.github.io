# Handbook conversion inventory — before implementation

Source: 鲁汶学联新生手册-2024.pdf, 35 pages, SHA-256 56ff11f79be2eed61851b02c4c0e3d85aa413b09d28e41b30f7499614bb4b8b5.
All pages were text-extracted and rendered. The full cleaned text and full-document contact sheets were inspected; detailed packing/table and ambiguous-source inspection accompanies the drafts.

Scope: all 9 chapters; 21 explicitly numbered sections/subsections (1.1–1.5, 2.1–2.2, 3.1–3.2, 3.1.1–3.1.6, 4.1–4.6), plus all topic headings within unnumbered chapters 5–9. The cover and contents are archive material.

## First-pass mapping

| Source | Destination | Articles |
|---|---|---:|
| Chapter 1, p3 | Existing About page: clearly historical 2024 profile | About block |
| Chapter 2, p4 | about-leuven: city, universities | 2 |
| Chapter 3, pp5–9 | before-arrival: visa-documents, aps, proof-of-funds, flights, packing | 5 |
| 4.1, pp10–15 | housing: choosing-a-room, finding-housing, contracts, deposit-and-condition, subletting-and-termination, temporary-accommodation | 6 |
| 4.2–4.6, pp15–16 | arrival: bank-account, university-registration, health-insurance, residence-card, education-office | 5 |
| Chapter 5, p17 | study: credits-and-exams, honours, learning-platforms, isp, language-courses | 5 |
| Chapter 6, pp18–23 | life: clothing-shopping, laundry-textile-reuse, groceries-cooking, eating-out, waste-recycling, utilities, furniture | 7 |
| Chapter 7, pp24–31 | transport: getting-around, bike-rental, buying-bikes, cycling-rules, bus, train (including airport), taxis, driving-licence | 8 |
| Chapter 8, pp32–34 | healthcare: seeing-a-doctor, student-health, emergency, dental | 4 |
| Chapter 9, p35 | sports: university-sports, community-sports | 2 |
| Source-supported tasks in chapters 4–7 | arrival/first-week synthesis checklist | 1 |

Total: **45 focused articles across 9 categories**, plus About history, PDF archive, first-week and packing and contract checklists. Each article has English discovery metadata; original Chinese body remains explicitly Chinese until a reviewed English translation is supplied.

## Review and extraction boundaries

All imported articles start legacy-2024. Procedures, visa/APS/funding, tenancy/legal rules, bank/insurance/residence, university/academic services, prices, retail/provider lists, waste systems, mobility laws/fares/products, healthcare and sports need current verification. City size differs between chapters 2 and 7; historical university rankings and CSAL population/endorsement claims must stay in the archive context. Housing A–E labels have no definition in the supplied PDF. Page 5 contains missing glyphs in the original rendering; only unambiguous contextual repairs are allowed. Packing numbering skips and duplicates are source artifacts, not missing rows to invent. Some 'see this page' references have no recoverable target. Education-office return certificate, PayPal guarantees, cycling/pavement rules, micromobility thresholds, emergency charging, vaccine eligibility, and named doctor procedures need prominent editorial follow-up.

## Implementation choices

Astro Markdown content collection with centralized category metadata and per-article aliases/related links. Build-generated JSON search index; lightweight client search using Unicode-normalized substring matching, Chinese phrases and English word boundaries, weighted title/alias/body relevance. No server. Checklists use semantic checkbox inputs, optional localStorage, print styles, and packing category/search filters. Original PDF retained byte for byte.
