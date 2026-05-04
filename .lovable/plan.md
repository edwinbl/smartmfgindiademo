## Goal

Reset the project and rebuild the homepage as a **low-fidelity wireframe** for the CII Smart Manufacturing Portal. Grayscale, institutional, structured — not a polished UI.

## Step 1 — Remove existing high-fidelity work

Delete these files (all from previous iterations):

- `src/components/Hero.tsx`
- `src/components/Navbar.tsx`
- `src/components/AudienceSelector.tsx`
- `src/components/Modules.tsx`
- `src/components/HowItWorks.tsx`
- `src/components/Insights.tsx`
- `src/components/LeadersSpeak.tsx`
- `src/components/Partners.tsx`
- `src/components/Events.tsx`
- `src/components/FinalCta.tsx`
- `src/components/Footer.tsx`
- `src/components/NavLink.tsx`
- `src/hooks/use-reveal.ts`
- All images in `src/assets/` (hero, insights, leaders)
- All module video assets in `src/assets/` (module-*.mp4.asset.json)

Reset `src/index.css` and `tailwind.config.ts` to remove brand gradients, glow shadows, custom animations — keep only a neutral grayscale token set (white background, gray borders, black text, one muted gray for secondary text).

## Step 2 — Wireframe design system

A minimal, deliberately unstyled look:

- **Palette:** white background, `gray-200` borders (dashed where placeholder), `gray-100` placeholder fills, `gray-900` text, `gray-500` muted text. No gradients, no shadows beyond a hairline border.
- **Typography:** system sans-serif, clear hierarchy via size/weight only.
- **Placeholders:** image/media slots shown as bordered boxes with a diagonal-line or "Image" / "Video" label. Text blocks shown as gray bars where appropriate, real placeholder copy where the brief specifies it.
- **CTAs:** plain bordered rectangles labelled "Primary CTA" / "Secondary CTA" styling — solid black for primary, outlined for secondary.
- **Section labels:** each section gets a small "Section N — Name" tag in the top-left corner so the wireframe is self-documenting for review.

## Step 3 — New components

Create under `src/components/wireframe/`:

1. `WireHeader.tsx` — sticky top bar
   - Left: "CII Smart Manufacturing" logo placeholder
   - Right nav: About · Readiness Assessment · Solutions · Programmes & Training · Events · Contact
   - Mobile: hamburger toggle revealing the same links

2. `WireHero.tsx` — Section 1
   - Headline, sub-headline, Primary CTA "Start Readiness Assessment", Secondary CTA "Explore Solutions", small text link "Ask the Smart Manufacturing Assistant"
   - Right side: bordered placeholder box labelled "Hero visual placeholder"

3. `WirePathwayCards.tsx` — Section 2
   - 5 cards in a responsive grid (1 / 2 / 5 cols): Assess readiness, Explore solutions, Join programmes, View events, Contact CII
   - Each card: icon placeholder square, title, one-line description, CTA link

4. `WireAssessmentTeaser.tsx` — Section 3
   - Short copy + outcome chips (exports, quality, traceability, productivity, energy efficiency) + CTA "Take / Access Assessment"

5. `WireSolutionsTeaser.tsx` — Section 4
   - 6 outcome cards (Export readiness, Improve quality, Strengthen traceability, Reduce downtime, Improve energy efficiency, Digitise shopfloor reporting)
   - CTA "Explore Solutions"

6. `WireProgrammes.tsx` — Section 5
   - 3 programme cards: title, date, format, audience, "View details" CTA
   - Section CTA "View all programmes"

7. `WireResources.tsx` — Section 6
   - 3 case-study / resource cards: title, sector/topic tag, short summary, "Read / Download" CTA
   - Section CTA "Explore resources"

8. `WireEcosystem.tsx` — Section 7
   - Short paragraph, stakeholder chips (MSMEs, experts, technology providers, academia, larger manufacturers, institutions), CTA "Express interest / Contact CII"

9. `WireChatbotBlock.tsx` — Section 8
   - Heading "Ask the Smart Manufacturing Assistant"
   - 4 example prompt chips as listed in brief
   - Input field placeholder + "Ask" button (non-functional, wireframe only)

10. `WireFinalCta.tsx` — Section 9
    - Heading "Not sure where to begin?" + "Contact CII" CTA

11. `WireFooter.tsx` — minimal grayscale footer with column placeholders (About, Quick links, Contact, Legal)

12. `WireChatbotFAB.tsx` — floating circular button, bottom-right, fixed position, labelled "Assistant" — purely visual, no behaviour

## Step 4 — Compose the page

Rewrite `src/pages/Index.tsx` to render, in order:

```text
WireHeader
  WireHero
  WirePathwayCards
  WireAssessmentTeaser
  WireSolutionsTeaser
  WireProgrammes
  WireResources
  WireEcosystem
  WireChatbotBlock
  WireFinalCta
WireFooter
WireChatbotFAB
```

Update `index.html` `<title>` to "CII Smart Manufacturing — Wireframe".

## Step 5 — Responsiveness

Mobile-first, single-column stacking by default. Grids expand at `md:` (2 cols) and `lg:` (3–5 cols depending on section). Touch-friendly spacing preserved. No animations.

## Technical notes

- Keep all shadcn `ui/*` primitives in place (untouched) — wireframe components will use plain Tailwind divs/buttons rather than the styled `Button` component, so the wireframe look is consistent and unbranded.
- No new dependencies.
- No backend, no chatbot logic — the chatbot block and FAB are visual placeholders only.
- Each section gets `aria-labelledby` and a visible `Section N` tag for review clarity.

## Out of scope

- Real assistant integration
- Real assessment form
- CMS wiring
- Any high-fidelity styling, brand colours, imagery, or animation
