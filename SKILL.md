---
name: reliance-lims-design
description: Use this skill to generate well-branded interfaces and assets for Reliance LIMS, a Land Inventory Management System (land records, dag inventory, purchase/sale ledger, Awaz, disputes, khajna, mutation/kharij, reports, audit logs), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Product context
**Reliance LIMS = Land Inventory Management System** — an enterprise web app for managing land records: dag-wise inventory, purchase & sale ledger, Awaz (land exchange), dispute management, khajna (land tax) tracking, mutation / kharij workflow, reports, audit logs, and role-based access. Users include the Chairman, SVCF / Finance, GM Land, Land Officers, Advocates, and Accounts. Design intent: clean, serious, trustworthy, enterprise-grade, readable for non-technical office staff and senior management. Use the land terminology (dag, mouza, khatian, deed, Awaz, dispute, khajna, mutation/kharij, holding breakdown) consistently.

## Quick orientation
- **`readme.md`** — the full design guide: content voice, visual foundations, iconography, and a file index. Read it first.
- **`styles.css`** — the one global stylesheet to link; it imports fonts + tokens. Components reference the semantic tokens in `tokens/theme.css` (`--background`, `--primary`, `--radius-*`, `--space-*`, type, shadows).
- **Components** live under `components/<group>/` as `<Name>.jsx` (+ `.d.ts`, `.prompt.md`). In built HTML, load `_ds_bundle.js` and read them off `window.RelianceLIMSDesignSystem_12526c`. Each `.prompt.md` has a usage example.
- **Icons** — Lucide. Use the `Icon` component (`<Icon name="map" />`); full set on CDN (`https://unpkg.com/lucide@latest`).
- **UI kit** — `ui_kits/lims/` is an interactive reference recreation of the Land Inventory app (dashboard + dag record detail in an app shell).
- **Foundations** — `guidelines/*.card.html` are live specimen cards for color, type, spacing, radius, shadow.

## House rules (summary)
- Deep navy/slate primary on a light slate-neutral base (white cards, slate-200 hairline borders); color only signals status (green = approved/safe, amber = pending/under negotiation, red = disputed/locked/overdue/high-risk). Navy doubles as the brand/CTA color — no decorative accent, no gradients.
- Inter for UI, Geist Mono for all numbers/IDs/areas/amounts. Sentence case. No emoji.
- 4px spacing grid; 6px/8px radii; hairline borders; restrained shadows; flat backgrounds; fast functional motion. Dense tables are the primary data surface.
