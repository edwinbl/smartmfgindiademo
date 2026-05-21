
# Programmes & Training — Implementation Plan

A premium, mobile-first capability-building hub at `/programmes` (discovery + listing) and `/programmes/:slug` (type-aware detail), matching the existing navy + CII red, `.cii-card`, `.btn-primary/outline`, `useReveal` system. UI-only, mock data.

---

## Routes & Navigation

- `src/App.tsx`: add `/programmes` → `ProgrammesIndex`, `/programmes/:slug` → `ProgrammeDetail`
- `WireHeader.tsx`: replace external Programmes link with internal `/programmes` (no dropdown)
- `WireFooter.tsx`: Programmes column → `/programmes` + sub-links (Workshops, Certifications, Bootcamps, Leadership, Webinars)
- `scripts/generate-sitemap.ts` + `public/sitemap.xml`: add `/programmes` + detail slugs
- `<SEO />` on both pages, single H1, title <60c, meta <160c

---

## Page Structure — `/programmes`

```text
ProgrammesHero              full-bleed immersive hero w/ generated training image,
                            motion overlay, headline, dual CTA, floating learning cards
GuidedDiscovery             "What are you looking to achieve?" — 7 outcome cards
                            (Digital Transformation, Op Efficiency, Smart Factory,
                            Sustainability, Workforce Upskilling, MSME, Leadership).
                            Selecting one sets a recommendation filter + scrolls to grid
ProgrammeTypeTabs           sticky pill nav (All / Workshops / Certifications / Bootcamps
                            / Leadership / Webinars / Industry Sessions), swipeable
ProgrammesDiscoveryBar      smart filter chips (Industry, Skill Level, Format, Mode,
                            Duration, Certification, Segment, Tech Focus) + quick
                            pills (MSMEs, Beginner, Leadership, AI, Sustainability,
                            Factory Digitization)
ProgrammesGrid              responsive 3/2/1 grid of ProgrammeCard
FeaturedProgrammes          editorial 2-up large cards / carousel for flagship
                            (Smart Mfg Leadership, MSME Bootcamp, Sustainability)
LearningPathways            3 outcome-based pathway tracks (visual stepper)
ImpactStats                 reuse useCountUp — learners trained, certificates, partners
PersonalizedShelf           logged-in only (useMockAuth) — "Recommended" + "Registered"
ProgrammesFinalCta          "Build the Capabilities for Industry 4.0 Transformation"
WireFooter
```

### ProgrammeCard
Thumbnail/gradient header w/ type badge → title → outcome summary → meta row (duration, format, level, start date) → outcome tags chips → CTA `Explore Programme`. Hover lift, type-tinted accent border, optional "Recommended for you" ribbon when discovery filter matches.

---

## Page Structure — `/programmes/:slug`

Single shared template — sections conditionally render based on `programme.type`:

```text
ProgrammeDetailHero         category badge, title, meta strip, dual CTA (Register / Brochure)
StickyActionPanel (desktop) right-side card: fee/status, seats, start, duration, Register CTA
ProgrammeOverview           what it is, why it matters, industry relevance
LearningOutcomes            capability cards grid
WhoShouldAttend             audience persona cards
ProgrammeAgenda             timeline / modular session cards (hidden for short webinars)
ExpertsFaculty              speaker/mentor grid (reuse EventSpeakersGrid pattern)
CertificationBlock          certificate, badge, LinkedIn-shareable note (hidden for webinars)
RelatedProgrammes           similar + next-level pathway cards
MobileStickyRegister        mobile-only sticky bottom CTA
```

Type-awareness (single template, conditional sections):
- Webinar → hide CertificationBlock + StickyActionPanel fee, compact agenda
- Bootcamp / Certification → full agenda + cohort dates emphasis
- Leadership → faculty + outcomes prominent, fee shown
- Workshop / Industry Session → compact, focus on outcomes + agenda

---

## 3-Step Registration Modal

`ProgrammeRegisterModal` — multi-step with auto-save to `localStorage`:

```text
Step 1  Basic Info        Name, Organization, Email, Mobile
Step 2  Professional      Industry, Role, Org Size, Learning Objectives
Step 3  Confirmation      Programme summary, "Add to Calendar" (.ics blob),
                          "Seat Reserved" success state, fit indicator
```

- `StepProgress` header (reuse existing `src/components/auth/StepProgress.tsx` pattern)
- Inline validation, smooth transitions (fade/slide)
- Persists draft per-slug in `localStorage`; cleared on submit
- Signed-out users: same flow (no auth gate) — registration stored in `programmesStorage`

---

## Discovery Behavior (client-side)

State in `ProgrammesIndex.tsx`:
```text
{ type, outcome (from GuidedDiscovery), filters: { industry, level, format, mode,
  duration, certification, segment, technology }, quickPick }
```
- Outcome card click → sets `outcome`, smooth-scrolls to grid, shows "Recommended for [outcome]" banner with clear button
- Type pills set primary filter; chips refine
- Mobile: "Filters" button → bottom drawer
- Empty state component

---

## Files to Create

```text
src/pages/ProgrammesIndex.tsx
src/pages/ProgrammeDetail.tsx
src/data/programmes.ts                                 // 12–14 mock programmes across all types
src/lib/programmesStorage.ts                           // saved/registered + draft persistence
src/assets/programmes-hero.jpg                         // generated premium image (1920x1080)

src/components/programmes/ProgrammesHero.tsx
src/components/programmes/GuidedDiscovery.tsx
src/components/programmes/ProgrammeTypeTabs.tsx
src/components/programmes/ProgrammesDiscoveryBar.tsx
src/components/programmes/ProgrammesGrid.tsx
src/components/programmes/ProgrammeCard.tsx
src/components/programmes/ProgrammesEmptyState.tsx
src/components/programmes/FeaturedProgrammes.tsx
src/components/programmes/LearningPathways.tsx
src/components/programmes/ProgrammesImpactStats.tsx
src/components/programmes/PersonalizedProgrammesShelf.tsx
src/components/programmes/ProgrammesFinalCta.tsx
src/components/programmes/ProgrammeRegisterModal.tsx   // 3-step flow

src/components/programmes/detail/ProgrammeDetailHero.tsx
src/components/programmes/detail/StickyActionPanel.tsx
src/components/programmes/detail/ProgrammeOverview.tsx
src/components/programmes/detail/LearningOutcomes.tsx
src/components/programmes/detail/WhoShouldAttend.tsx
src/components/programmes/detail/ProgrammeAgenda.tsx
src/components/programmes/detail/ExpertsFaculty.tsx
src/components/programmes/detail/CertificationBlock.tsx
src/components/programmes/detail/RelatedProgrammes.tsx
src/components/programmes/detail/MobileStickyRegister.tsx
```

Files edited: `src/App.tsx`, `src/components/wireframe/WireHeader.tsx`, `src/components/wireframe/WireFooter.tsx`, `scripts/generate-sitemap.ts`, `public/sitemap.xml`.

---

## Design Tokens

All HSL from `index.css`: `navy-700/800/900`, `cii-red`, `neutral-*`, `orange-*`. Per-type accents derived from existing palette (workshop=teal, certification=cii-red, bootcamp=orange, leadership=navy, webinar=neutral). Buttons `.btn-primary/.btn-outline`, cards `.cii-card`, container `.container-cii`, headings `font-display`.

Animations: `animate-fade-in`, `useReveal`, hover lift, sticky pill slide, scroll-triggered counters. No new deps.

---

## Out of Scope

- No real registration/payment backend — `.ics` is a static blob
- No real auth — uses `mockAuth`
- No real video/maps
- No new heavy deps
