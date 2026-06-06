# Unify Internal Page Heroes to the /reports Pattern

Bring all internal listing pages to the same hero anatomy as `/reports` so the platform reads as one consistent system. Each page keeps its own copy and a thematic right-side visual collage, but the structure, background treatment, type scale, and chrome become identical.

## The /reports hero pattern (reference)

Light background hero, two-column 7/5 grid, with these elements (top → bottom on the left):

1. Soft radial wash background (`orange-500/0.10` top-right + `navy-600/0.12` bottom-left) over a faint grid masked with a radial ellipse — same tokens, same values.
2. Small `cii-chip` eyebrow with a `Sparkles` icon — page-specific label.
3. Large `font-display` extrabold headline in `navy-900`, with one phrase wrapped in a gradient (`red-600 → orange-500`) + soft orange underline highlight bar.
4. Lede paragraph in `neutral-700`, max-w-xl.
5. **Search bar** OR **CTA pair** depending on the page (see "Per-page variation").
6. Quick chips row (only when the page is searchable).
7. Three stat tiles (`v` / `l` pairs) in a `grid-cols-3 max-w-md`.
8. Right column: themed floating-card collage (3 tilted cards + 1 floating accent badge), positioned absolutely inside a `h-[380px] sm:h-[440px] lg:h-[500px]` container, using `cii-card`, the same rotation values, and the same `@keyframes float` animation.

A shared internal helper (`InsightHeroShell`) is NOT introduced — each page keeps its own file for content freedom, but every file follows the same skeleton/markup so spacing, type, and motion stay locked.

## Pages updated

Scope per your answer: **listing pages only**, themed-per-page collage, search bar only where there is searchable content.

| Page | File | Search/CTA mode | Collage theme |
|---|---|---|---|
| About | `src/components/about/AboutHero.tsx` | CTA pair: "Explore the Platform" + "Start Your Assessment" | Mission/ecosystem: companies-engaged stat card, sectors card, ecosystem avatars stack |
| Programmes & Training | `src/components/programmes/ProgrammesHero.tsx` | Search bar + chips (MSMEs, Beginner, Leadership, AI & Automation, Sustainability, Factory Digitization) | Learning theme: "Live cohort" enrollment card, certification badge, "Industry mentor" card |
| Events | `src/components/events/EventsFlagshipHero.tsx` | CTA pair: "Browse Events" + "View Flagship Summit" (kept) | Events theme: upcoming-event card with countdown chip, agenda card, "registrations open" badge |
| Case Studies | inline hero block in `src/pages/CaseStudiesIndex.tsx` (lines ~152–207) — extract to `src/components/casestudies/CaseStudiesHero.tsx` | Search bar + outcome chips (Productivity, Quality, Energy, Traceability, MSME, Smart Factory) | Outcome theme: metric card (e.g. "+38% throughput"), sector chip card, geo/state badge |
| Contact | `src/components/contact/ContactHero.tsx` | CTA pair (kept) — already matches | Already matches — only tightens stat tiles to the same 3-up format for consistency |
| Reports (reference) | `src/components/reports/ReportsHero.tsx` | unchanged | unchanged |

## Per-page variation rules

- Headline gradient phrase: pick one keyword per page (e.g., About: "rewire"; Programmes: "Capability Building"; Events: "Convene & Learn"; Case Studies: "Proof in Practice").
- Eyebrow chip text: page-specific (e.g., "Capability Hub", "Industry Gatherings", "Real Manufacturer Stories").
- Stat tiles: 3 numbers relevant to the page (Programmes: `120+ programmes / 14.5K leaders / 85 partners`; Events: `40+ events / 12K attendees / 28 cities`; Case Studies: `220+ stories / 25 sectors / 18 states`; About: `1,200+ companies / 25 sectors / 50+ partners`).
- Right collage: same skeleton (3 tilted `cii-card`s + 1 floating gradient badge with the float animation), themed icons/copy per page.

## Conflict callout (please confirm)

Two heroes you redesigned in earlier turns will be **replaced** under this request:

- **Programmes** — the recent "editorial academic" hero (navy serif headline, image right, metrics box, partners row) will be replaced with the Reports-style light hero.
- **Events flagship** — the current image-led flagship hero will be replaced with the Reports-style light hero (the countdown moves into the right collage as a tilted card).

If either should be preserved instead of unified, say so and I'll exclude it.

## Technical notes

- All colors continue to use HSL design tokens from `index.css` (`--navy-900`, `--neutral-700`, `--orange-500`, `--red-600`, `--neutral-150`, `--neutral-200`, `--india-green`). No hard-coded hex.
- Reuses `cii-chip`, `cii-card`, `container-cii`, `font-display`, `font-numeric`, and existing `btn-primary` / `btn-outline` utilities.
- New `CaseStudiesHero` component extracted from `CaseStudiesIndex.tsx` so the page imports it the same way `/reports` imports `ReportsHero`. The existing hero JSX block in `CaseStudiesIndex.tsx` is removed; props mirror Reports: `{ query, onQuery, onTag }`.
- `ProgrammesHero` prop signature becomes `{ query, onQuery, onTag, onExplore, onFindPath }` — `onExplore`/`onFindPath` retained so existing callers in `ProgrammesIndex.tsx` keep working; the CTAs render as the search "Search" submit + a secondary chip-row action.
- `EventsFlagshipHero` keeps its `{ event }` prop; the countdown becomes one of the three right-collage tiles.
- `AboutHero` becomes light-themed (was dark navy). The bottom "pillars" marquee strip is preserved beneath the hero as a `border-t` sub-band so the About narrative doesn't lose its anchor.
- No business-logic, data, or routing changes. Pure presentation.

## Out of scope

- Detail-page heroes (Report/Programme/Event/Case Study detail) — per your answer.
- Home page hero.
- Auth, Privacy, Terms, NotFound.
