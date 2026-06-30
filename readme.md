# Reliance LIMS — Design System

A complete, shadcn/ui-based design system for **Reliance LIMS** — a **Land Inventory
Management System**. It is an enterprise web application for managing land records:
dag-wise inventory, the land purchase & sale ledger, **Awaz** (land exchange), dispute
management, **khajna** tracking, **mutation / kharij** workflow, reporting, audit logs,
and role-based access. The visual language is clean, serious, and trustworthy — built
for senior management and non-technical office users alike.

**Primary users:** Chairman · SVCF / Finance · GM Land · Land Officers · Advocates ·
Accounts team.

## Source of truth
- **Figma:** "Shadcn.fig" (attached, mounted virtual filesystem). A comprehensive
  shadcn/ui kit — 439 component sets, ~1,500 Lucide icons, 1,518 design variables
  across 4 collections (Tailwind, Theme, Mode, Ungrouped).
- The token values, slate neutral scale, 6px/8px radii, and Inter + Geist Mono type
  were extracted from that file's Variable collections. The product palette is tuned for
  an enterprise land registry: a **deep navy/slate primary** with status-only color.

> This is a synthesized brand. The Figma supplies the shadcn foundation; "Reliance
> LIMS" is the product context layered on top — a land-records system, **not** a lab
> or product-testing tool. ("LIMS" = **Land** Inventory Management System.)

---

## CONTENT FUNDAMENTALS — how Reliance LIMS writes

- **Voice:** calm, precise, official. This is a system of record for land assets; it
  speaks like a careful registry, not a consumer app. No exclamation marks, no slang,
  no jokes.
- **Person:** address the user as an implied "you" but rarely say it; prefer
  imperative, action-first labels — "Start mutation", "New record", "Flag dispute",
  "Print khatian".
- **Casing:** **Sentence case** everywhere — buttons, headers, menu items, tabs
  ("Pending mutation", not "Pending Mutation"). Proper nouns and domain terms keep
  their form (Awaz, Mouza names, Khatian, Dag).
- **Domain terminology — use consistently:** dag, mouza, khatian, deed, purchase, sale,
  Awaz (land exchange), dispute, khajna (land tax), mutation / kharij, audit log,
  reports, holding breakdown.
- **Numbers & data:** monospaced (Geist Mono) for dag/khatian/deed numbers, areas,
  amounts, dates, and references so columns align — `DAG-1184`, `KH-330`, `2.40 bigha`,
  `৳ 14,50,000`, `12 Jun`. Areas in local units (bigha / katha / decimal).
- **Status language:** short, factual states — "Recorded", "Under verification",
  "Pending mutation", "Disputed". Transaction types: "Purchase", "Sale", "Awaz".
- **Tone of alerts:** specific and procedural — "A boundary dispute is filed against the
  pond / water body share. Resolve before mutation can proceed." State the condition and
  the gating next step; never blame the user.
- **No emoji.** Iconography carries symbolic meaning (see ICONOGRAPHY).
- **Vibe:** a trustworthy government/enterprise registry. Quiet surfaces, strong tabular
  data, decisive color only where it signals status.

---

## VISUAL FOUNDATIONS

- **Color:** a professional enterprise palette — **deep navy/slate** `--primary`
  (slate-800 `rgb(30,41,59)`) on a light, **slate-neutral** base (white cards, slate-100
  surfaces, slate-200 hairline borders). Color is reserved for **status**: **green** =
  clean / approved / safe, **amber** = pending / under negotiation, **red** = disputed /
  locked / overdue / high-risk. No decorative accent, no gradients, no playful color.
  Navy doubles as the brand/CTA color. Navy-led 5-color chart palette for reports.
- **Type:** **Inter** for all UI (400/500/600/700) — tight tracking on headings
  (`-0.02em`), 14px body default. **Geist Mono** for every number, ID, area, and amount.
  Scale runs 12 → 48px; see the Type cards.
- **Spacing:** strict **4px grid** (`--space-1`…`--space-16`). Card padding 24px; control
  height 36px; table cell padding 12px×16px.
- **Radius:** small and consistent — `--radius-sm` 2px, `--radius-md` 6px (buttons,
  inputs, square badges), `--radius-lg` 8px (cards, dialogs), `--radius-full` for pills,
  avatars, switches. Nothing sharp; nothing bubbly.
- **Borders:** hairline 1px `--border` (slate-200) define every surface edge. Cards are
  border + subtle shadow, never heavy. The system is **border-led**, not shadow-led.
- **Shadows / elevation:** restrained scale `--shadow-xs → xl`. Cards use `sm`,
  dropdowns `lg`, dialogs `xl`. No colored or glowing shadows.
- **Backgrounds:** flat. White (`--background`) for content, light slate (`--muted`,
  slate-50/100) for sidebar, search fields, and table zebra. **No gradients** in product
  UI. No textures, no decorative illustration.
- **Cards:** white surface, 1px `--border`, `--radius-lg`, `--shadow-sm`. Header
  (24px padding, title + description), content (24px), optional footer.
- **Hover states:** subtle — solid buttons darken ~10%, ghost/outline fill with
  `--accent` (zinc-100), table rows tint with `--accent`. Links underline.
- **Press/active:** color shift only (no scale/bounce). Focus shows a 3px soft navy ring
  (`rgba(30,41,59,0.15)`) plus border-color change — visible but quiet.
- **Animation:** functional and fast. 120–200ms ease transitions for hover, dropdown
  pop, dialog (scale .96→1 + fade). No decorative motion. Respect `prefers-reduced-motion`.
- **Transparency / blur:** minimal. Dialog scrim `rgba(9,9,11,0.5)`, no backdrop blur.
  Alpha tints (12% of a status hue) back soft status badges and alerts.
- **Layout rules:** fixed 244px sidebar, 60px topbar, scrolling content column. Detail
  views capped (~1100px) for readable line lengths. Dense tables are the primary data
  surface (dag inventory, ledger, holding breakdown).
- **Dark mode:** supported via a `.dark` wrapper — slate-950 background, slate-900 cards,
  inverted primary. See `tokens/theme.css`.

---

## ICONOGRAPHY

- **System:** **Lucide** (https://lucide.dev) — the exact icon family in the source
  Figma (~1,500 glyphs). Stroke-based, 24×24 viewBox, 2px stroke, round caps/joins,
  `currentColor` fill. The only icon style; it matches the calm, official voice.
- **In React:** use the bundled `Icon` component — `<Icon name="map" size={18} />`.
  `assets/icons/icon-data.js` curates the working subset the kit uses; `Icon.d.ts` lists
  every available name.
- **In plain HTML / for the full set:** link Lucide from CDN
  (`https://unpkg.com/lucide@latest`) and call `lucide.createIcons()`.
- **Land-domain glyphs** carry meaning: `map` / `layers` (dag & holding), `landmark`,
  `receipt` / `banknote` (ledger & khajna), `repeat` (Awaz exchange), `gavel` / `scale`
  (disputes), `file-signature` (mutation / kharij), `history` (audit log),
  `shield-check` (verification).
- **Sizing:** 14px inline with small text, 16–18px in buttons/nav, 20–24px standalone.
  Icons inherit text color or take a status color — never recolored arbitrarily.
- **No emoji, no unicode-symbol icons, no hand-drawn SVG.** The logo mark reuses the
  Lucide `map` glyph in a rounded primary tile.

---

## INDEX — what's in this system

**Global CSS**
- `styles.css` — entry point (import-only); consumers link this.
- `tokens/fonts.css` — Inter + Geist Mono (+ legacy Poppins / Open Sans theme tokens).
- `tokens/fig-tokens.css` — full Figma Variable closure (all collections + modes).
- `tokens/theme.css` — semantic shadcn layer (`--background`, `--primary`, `--radius-*`,
  `--space-*`, type, shadows) + `.dark` mode. **Components reference these.**

**Components** (`window.RelianceLIMSDesignSystem_12526c`)
- `components/forms/` — Button, Input, Textarea, Label, Checkbox, Switch, RadioGroup
  (+RadioGroupItem), Select, Slider
- `components/display/` — Card (+Header/Title/Description/Content/Footer), Badge, Avatar,
  Separator, Skeleton, Table (+Header/Body/Row/Head/Cell)
- `components/feedback/` — Alert, Tooltip, Progress
- `components/navigation/` — Tabs (+List/Trigger/Content), Accordion, Breadcrumb
- `components/overlays/` — Dialog (+DialogFooter), DropdownMenu
- `components/brand/` — Logo
- `assets/icons/` — Icon (+icon-data.js, Icon.d.ts)

**Foundations** (`guidelines/`) — specimen cards for the Design System tab: colors
(primary/neutral, status/brand, chart), type (scale, mono/weights), spacing, radius &
shadow.

**UI kit** (`ui_kits/lims/`) — interactive Land Inventory app: dag-inventory dashboard +
dag record detail (holding breakdown, purchase/sale ledger, audit trail) inside the app
shell. See its README.

**Meta** — `SKILL.md` (Agent Skills entry point), this `readme.md`.
