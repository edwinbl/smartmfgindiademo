## Goal
Add a new enterprise-grade Readiness Assessment landing page at `/assessment`, positioning assessment as the starting point before transformation. Match the existing CII design system (navy/orange/green tokens, `cii-card`, `section-eyebrow`, `btn-primary`, `WireSection`, `WireHeader`, `WireFooter`).

## Route & wiring
- Create `src/pages/Assessment.tsx` lazy-loaded in `src/App.tsx` at `/assessment` (variant `detail`).
- Add `/assessment` to `scripts/generate-sitemap.ts` (weekly, priority 0.9).
- Add a header nav link and footer link to the new page (in `WireHeader.tsx` and `WireFooter.tsx`).
- Update the existing hero/teaser CTAs that point to the external `smartmfgindia.com/Assesment.aspx` to instead route to `/assessment` (WireHero, WireAssessmentTeaser); keep the external "Access Current Assessment" button inside the new page's sticky/overview card.

## Page structure (`src/pages/Assessment.tsx`)
Compose 14 modular components under `src/components/assessment/`:

1. `AssessmentHero.tsx` — Headline "Understand Where You Stand Before Deciding What to Do Next", supporting copy, primary CTA "Start Assessment", secondary "Request Assessment Access", text links "View Sample Output" + "Learn How It Works". Right visual: a custom SVG/illustrated readiness dashboard card (maturity dial + KPI tiles + sparkline) reusing the navy/orange gradient hero treatment from `WireHero`. No stock factory imagery.
2. `AssessmentWhyMatters.tsx` — 4 insight cards (Avoid Random Adoption / Focus on Outcomes / Prioritize High-Impact / Structured Path) with Lucide line icons, `cii-card` styling, subtle hover lift.
3. `AssessmentOverview.tsx` — Two-column: left = description, process, duration, dimensions, expected outputs; right = sticky summary card (time / outcomes / guided process / mini report preview / "Access Current Assessment" CTA linking to the external CII URL).
4. `AssessmentOutcomes.tsx` — 6 outcome cards (Productivity, Quality, Traceability, Energy Efficiency, Export Readiness, Value Chain) with icon + helper "Assessment helps evaluate readiness for this outcome."
5. `AssessmentWhoFor.tsx` — Persona cards for MSMEs, Growing Enterprises, Supplier Ecosystems, Operations Leaders.
6. `AssessmentCoverage.tsx` — Readiness framework visual. Implementation: connected-grid layout — center hub ("Readiness") with 8 category nodes (Operations, Production Planning, Quality, Data & Visibility, Machine Connectivity, Workforce, Sustainability, Supply Chain) rendered via CSS grid + SVG connector lines; degrades to a stacked list on mobile.
7. `AssessmentWhatYouGet.tsx` — Benefit cards (Readiness Snapshot, Outcome Insights, Priority Areas, Next-Step Guidance, Benchmarking, Recommendations Engine). Last two visually muted with "Coming Soon" chip.
8. `AssessmentJourney.tsx` — Horizontal 5-step timeline (Start → Inputs → Review → Insights → Next-Step). Stacks vertically on mobile with left rail connector.
9. `AssessmentCta.tsx` — Conversion band, navy gradient bg, "Start Your Readiness Journey", two buttons.
10. `AssessmentRoadmap.tsx` — 5 muted future capability cards with `cii-chip` "Future" tags.
11. `AssessmentFaq.tsx` — Accordion (reuse `@/components/ui/accordion`) with 5 Q&As (duration, expertise, confidentiality, post-assessment, industry applicability).
12. `AssessmentSupport.tsx` — 4-up: Contact support, Request consultation, Email assistance, Talk to an Expert.
13. `AssessmentMobileCta.tsx` — Sticky bottom "Start Assessment" CTA (md:hidden), pattern from `MobileStickyCta`.
14. SEO via `<SEO>` component + JSON-LD `WebPage` schema.

## Design system
- Use only existing tokens: `--navy-*`, `--orange-*`, `--india-green`, `--neutral-*`, `cii-card`, `cii-chip`, `cii-chip-orange`, `section-eyebrow`, `btn-primary`, `btn-ghost`, `link-arrow`, `blueprint-grid`, `tricolor-stripe`.
- Green = readiness/progress, blue/navy = analytics/trust, orange = opportunities/CTAs.
- Lucide line icons throughout (no new asset images).
- Responsive: horizontal-scroll snap on mobile for outcome/persona/roadmap grids, accordion compression for FAQ, vertical-rail timeline on mobile.

## Out of scope
- Backend, real assessment form/flow, auth gating, A/B testing.
- New design tokens, dark mode redesign, logo work.
- Changes to other pages beyond the nav/footer link and the two hero/teaser CTA href updates.

## Verification
- Build passes; `/assessment` renders without errors at desktop (1000px) and mobile widths.
- Header/footer link navigates correctly; sitemap.xml regenerates with new entry.
- No hardcoded hex colors; all styling through existing tokens/utilities.
