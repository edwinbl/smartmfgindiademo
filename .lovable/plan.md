## Goal

Create a modern, enterprise-grade **Assessment Detail Page** for an individual assessment (e.g. "Smart Manufacturing Readiness Assessment"). This sits one level below `/readiness-assessment` and is what users land on when they click an assessment from the existing "Live now" section.

## Route & file

- New page: `src/pages/AssessmentDetail.tsx`
- Route: `/readiness-assessment/:slug` (lazy-loaded, `detail` skeleton) in `src/App.tsx`
- Two assessment slugs supported via a small in-file config map:
  - `smart-manufacturing-maturity` — Smart Manufacturing Maturity Assessment Model (navy)
  - `industry-4-0-maturity` — Industry 4.0 Maturity Assessment (orange)
- Update the two "Live now" cards in `src/pages/ReadinessAssessment.tsx` so their primary CTA / card link goes to the matching detail route (external `ASSESSMENT_URL` stays on the in-page Start button).

## Page sections (top → bottom)

1. **Hero (split layout)**
   - Left: category chips (Readiness Assessment · Smart Manufacturing · MSME Transformation), H1 title, supporting copy, metadata row (duration, MSME-focused, guided, outcome-based, readiness insights), CTAs: Start Assessment (primary, → `ASSESSMENT_URL`), Request Assistance (secondary, → `/contact`), Download Sample Report (ghost, disabled / "Coming soon" tooltip).
   - Right: lightweight readiness dashboard mock — overall readiness gauge, 4–5 dimension bars, small KPI tiles. Pure CSS/SVG, no chart lib.

2. **Assessment Summary** — 4 compact icon cards: Type, Duration, Coverage Areas, Expected Output.

3. **Outcome-Based Framing** — heading "What This Assessment Helps You Understand" + responsive grid of 6 outcome cards (Productivity, Quality, Traceability, Energy Efficiency, Export Readiness, Value Chain Participation). Subtle hover lift.

4. **What's Covered** — modular connected card grid of 8 dimensions (Operations, Production Planning, Quality Systems, Data & Visibility, Machine Connectivity, Workforce Readiness, Sustainability, Supply Chain Integration). Each card shows icon + label + 1-line scope.

5. **Who It's For** — 4 persona cards: MSMEs, Growing Manufacturers, Supplier Ecosystems, Operations Teams.

6. **Assessment Process** — horizontal 5-step timeline (Access → Complete Inputs → Review → Receive Insights → Explore Next Steps) with connector lines on desktop, vertical stack on mobile.

7. **What Users Receive** — 4 large benefit cards (Readiness Snapshot, Outcome Insights, Priority Areas, Next-Step Guidance) + a visually muted "Roadmap" subgrid of 3 Coming Soon cards (Benchmarking, Recommendations Engine, Transformation Roadmaps).

8. **Sample Insights / Preview** — 2-column: mock report preview card (header, readiness bars, callout insight quote) + insight cards (e.g. "Operational visibility maturity is moderate, while data integration readiness remains low") and a benchmark teaser.

9. **FAQ** — accordion (use existing `@/components/ui/accordion`) for: duration, expertise required, confidentiality, support, post-assessment process.

10. **Sticky CTA**
    - Desktop: bottom CTA ribbon (fixed, appears after hero scroll) with title + Start / Assist buttons.
    - Mobile: full-width sticky bottom bar with single "Start Assessment" primary CTA.

## Visual style

- Use existing semantic tokens from `index.css` / `tailwind.config.ts` (`bg-background`, `text-foreground`, `border`, `muted`, `primary`, `accent`). No raw hex.
- Accent strategy reuses platform conventions: primary (navy/blue) for trust/analytics, success-tinted muted green for readiness/progress bars, accent-orange for opportunity highlights — all via existing tokens.
- Rounded cards (`rounded-2xl`), soft borders (`border border-border/60`), subtle shadows (`shadow-sm` / hover `shadow-md`), generous spacing, executive typography scale already used on `ReadinessAssessment.tsx`.
- Per-assessment accent color (navy vs orange) driven by the slug config so both detail pages feel distinct but share layout.

## SEO

- `<SEO />` with per-slug title/description and `WebPage` JSON-LD including assessment name and canonical URL.

## Reuse

- `WireHeader`, `WireFooter`, `WireChatbotFAB`, `SEO`, shadcn `accordion`, `button`, `badge`, lucide icons. No new dependencies.

## Out of scope

- No backend wiring, no real submission flow (Start Assessment continues to deep-link to `ASSESSMENT_URL`).
- No new design tokens or theme changes.
- Sample Report download stays a "Coming soon" affordance.
