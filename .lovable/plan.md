## Plan: About Us page — storytelling, ecosystem-driven

A new `/about` route built as a sequence of full-width, scroll-animated sections. Reuses the existing CII design tokens (cii-red, cii-orange, navy, saffron/india-green tricolor, `container-cii`, `cii-chip`) and existing `WireHeader` / `WireFooter` so it feels native to the site.

### Routing & navigation

- Add `<Route path="/about" element={<About />}>` in `src/App.tsx` (above the `*` route).
- Create `src/pages/About.tsx` using `WireHeader` + new sections + `WireFooter` + `WireChatbotFAB`.
- `src/components/wireframe/WireHeader.tsx`: change the existing `About` nav entry from the external `smartmfgindia.com/Home.aspx#SmartAbout` link to internal `/about` (both desktop nav + mobile menu). Use `react-router` `Link` so SPA navigation works.
- `src/components/wireframe/WireFooter.tsx`: change the "About" link in the Explore column to `/about`.
- Update `scripts/generate-sitemap.ts` to include `/about`.
- Update `SEO` meta for the page (title, description, JSON-LD `AboutPage`).

### Page sections (in order)

All sections are new components under `src/components/about/`. Each is a self-contained, mobile-first block using Tailwind + existing keyframes (`fade-in`, `scale-in`) and IntersectionObserver-based reveal (lightweight, no extra deps).

1. **`AboutHero.tsx`** — Full-screen split. Left: eyebrow chip "Our Mission", H1 "Accelerating India's Industry 4.0 Transformation", subtext, two CTAs ("Explore the Platform" → `/#solutions`, "Start Your Assessment" → smartmfgindia Assessment URL). Right: animated ecosystem visual reusing `HeroEcosystemViz` with soft parallax + floating gradient blobs. Gradient bg using navy → cii-orange tokens.

2. **`AboutChallenge.tsx`** — "India's Manufacturing Challenge". Horizontal scroll-snap row on desktop / vertical stack on mobile, 5 cards: Fragmented Adoption, Skill Gaps, Limited Expertise Access, MSME Constraints, Need for Collaboration. Animated connecting line that "draws" on scroll (SVG `stroke-dashoffset`).

3. **`AboutEcosystem.tsx`** — Interactive network graph. SVG with 7 nodes (MSMEs, Enterprises, Tech Providers, Academia, Government, Experts, Global Orgs) around a central "Platform" hub. Hover/tap a node → side panel reveals role + contribution. Animated connector lines (pulsing gradient stroke).

4. **`AboutJourney.tsx`** — Sticky-scroll horizontal journey: **Assess → Guide → Enable → Connect → Recognise**. Uses `position: sticky` + scroll progress to highlight the active step. Each step: icon (lucide), title, one-liner, micro-animation on activation. Mobile: vertical timeline with scroll-snap.

5. **`AboutCapabilities.tsx`** — Bento grid of 8 modules (Maturity Assessment, Solutions Hub, Expert Guidance, Programmes, Ecosystem Directory, Matchmaking, Recognition, Insights Dashboard). Mixed tile sizes on lg+, single-column stack on mobile. Hover-lift + expandable preview.

6. **`AboutMetrics.tsx`** — Big stats band with count-up animation triggered by IntersectionObserver (custom hook `useCountUp`). Metrics: MSMEs onboarded, Assessments completed, Ecosystem partners, States reached, Training programmes. Soft animated bar graphs as decoration.

7. **`AboutPartners.tsx`** — Reuses existing `WirePartners` component for visual consistency (logo marquee) rather than duplicating.

8. **`AboutVision.tsx`** — Cinematic full-width section. Large editorial typography ("A national movement for manufacturing competitiveness"), thematic pillars: MSME empowerment, Competitiveness, Export readiness, Future-ready industries, Digital scale. Background: subtle gradient + animated noise/grid pattern.

9. **`AboutHowItWorks.tsx`** — Simple 3-step flow: Assess → Get Guidance → Connect & Adopt. Icons + animated arrows that draw in on scroll.

10. **`AboutFinalCta.tsx`** — Full-screen bold CTA. Headline "Join India's Digital Manufacturing Movement", two CTAs ("Start Assessment", "Partner With Us"). Tricolor accent stripe.

### Cross-cutting

- **Reveal hook**: `src/hooks/useReveal.ts` — small IntersectionObserver wrapper that toggles a `data-revealed` attribute; sections opt-in with Tailwind utilities (`opacity-0 translate-y-4 data-[revealed=true]:opacity-100 ...`). No new dependency.
- **Count-up hook**: `src/hooks/useCountUp.ts` — `requestAnimationFrame` interpolation, respects `prefers-reduced-motion`.
- **Sticky progress indicator**: thin top progress bar (cii-orange → cii-red gradient) tied to page scroll, visible only on `/about`.
- **Section anchors**: `id="ecosystem"`, `id="journey"`, etc. so the new mobile nav can deep-link later.
- **Accessibility**: every interactive node has `aria-label`, focus-visible rings, all animations gated by `prefers-reduced-motion`.

### Technical notes

- No new npm dependencies — Tailwind keyframes already define `fade-in`, `scale-in`, `accordion-*`. Add 2 small extras (`marquee`, `draw-line`) to `tailwind.config.ts` if needed.
- All colors via HSL semantic tokens (`cii-red`, `cii-orange`, `navy-*`, `saffron`, `india-green`) — no hardcoded hex in components.
- Page is statically imported in `App.tsx` (matches existing pattern after the earlier lazy-load fix).
- Mobile-first: every section authored at 360px first, then progressively enhanced at `md:` / `lg:`.

### Files

**New**
- `src/pages/About.tsx`
- `src/components/about/AboutHero.tsx`
- `src/components/about/AboutChallenge.tsx`
- `src/components/about/AboutEcosystem.tsx`
- `src/components/about/AboutJourney.tsx`
- `src/components/about/AboutCapabilities.tsx`
- `src/components/about/AboutMetrics.tsx`
- `src/components/about/AboutVision.tsx`
- `src/components/about/AboutHowItWorks.tsx`
- `src/components/about/AboutFinalCta.tsx`
- `src/components/about/AboutProgress.tsx`
- `src/hooks/useReveal.ts`
- `src/hooks/useCountUp.ts`

**Edited**
- `src/App.tsx` — add `/about` route
- `src/components/wireframe/WireHeader.tsx` — About link → `/about`
- `src/components/wireframe/WireFooter.tsx` — About link → `/about`
- `scripts/generate-sitemap.ts` — add `/about` entry
