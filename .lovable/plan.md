# Contact Us Page — Implementation Plan

A premium, mobile-first `/contact` route built as a guided "intent → dynamic form" experience, matching the existing Industry 4.0 platform aesthetic (navy + CII red, `cii-card`, `btn-primary/outline`, floating SVG visuals, scroll-reveal).

UI-only. No backend wiring — form `onSubmit` shows a toast + success state (consistent with current mock auth pattern).

---

## Route & Navigation

- Add `/contact` route in `src/App.tsx` → `src/pages/Contact.tsx`
- `WireHeader.tsx`: change existing "Contact" link from the external `smartmfgindia.com` URL to internal `/contact` Link (both desktop nav + mobile drawer)
- `WireFooter.tsx`: add/repoint "Contact" entry to `/contact`
- `scripts/generate-sitemap.ts` + `public/sitemap.xml`: add `/contact`
- SEO via `<SEO />`: title "Contact Us — CII Smart Manufacturing Platform", meta description, single H1

---

## Page Structure (sections, top → bottom)

```text
ContactHero            split-screen, headline + 2 CTAs + animated ecosystem SVG
ContactIntentGrid      5 intent cards — sets active intent state (no form yet)
ContactSmartForm       card form, common fields + intent-specific fields, sticky on desktop
EcosystemConnect       5 "who to talk to" cards (Assessment / Advisors / Training / Partners / Tech)
RegionalPresence       stylized India SVG with pulsing hotspots + legend list
BookConsultation       centered gradient CTA block with 4 consultation type chips
SupportChannels        4–5 cards: Email, Phone, WhatsApp, Help Centre, FAQs
ContactFAQ             shadcn Accordion, 5 questions
ContactFinalCta        full-width gradient band, 2 CTAs
WireFooter             reused
MobileStickyCta        sticky "Talk to us" bar (mobile only, shown after scrolling past hero)
```

---

## Intent → Dynamic Form Behavior

Single state in `Contact.tsx`:

```text
intent: "journey" | "partnership" | "solution" | "training" | "support" | null
```

- Intent cards: clicking sets `intent`, smoothly scrolls to form, highlights active card with navy ring + subtle scale, updates form heading + CTA label, and renders intent-specific fields below common fields with a fade/slide transition.
- Common fields (always): Full Name, Organization, Email, Mobile (10-digit), Message.
- Conditional field sets per intent — exactly as specified in the brief (Partnership / Training / Solution / Support / Journey). All inputs use the existing `FloatingInput` pattern from `src/components/auth/` and shadcn `Select` for dropdowns. Support intent uses a styled file input (drag-drop zone, no upload — just captures filename).
- Validation: reuse `src/lib/authValidation.ts` (email, mobile, required). Inline error states under inputs.
- Submit handler: `e.preventDefault()` → toast success → reset form, keep intent.
- Contextual CTA label: Journey/Partnership/Training → "Request Consultation"; Solution → "Connect With Team"; Support → "Submit Request"; null → disabled "Select an intent above".

---

## Components to Create

```text
src/pages/Contact.tsx
src/components/contact/ContactHero.tsx
src/components/contact/ContactIntentGrid.tsx     (+ IntentCard subcomponent inline)
src/components/contact/ContactSmartForm.tsx      (renders intent-specific field groups)
src/components/contact/EcosystemConnect.tsx
src/components/contact/RegionalPresence.tsx      (stylized India SVG, no external map lib)
src/components/contact/BookConsultation.tsx
src/components/contact/SupportChannels.tsx
src/components/contact/ContactFAQ.tsx            (shadcn Accordion)
src/components/contact/ContactFinalCta.tsx
src/components/contact/MobileStickyCta.tsx
```

Files edited: `src/App.tsx`, `src/components/wireframe/WireHeader.tsx`, `src/components/wireframe/WireFooter.tsx`, `scripts/generate-sitemap.ts`, `public/sitemap.xml`.

---

## Visuals & Animation

- Hero right side: reuse style language of `HeroEcosystemViz` — orbiting nodes + connection lines on a soft navy→white gradient.
- Section reveals via existing `useReveal` hook (fade-up on intersection).
- Intent cards: hover lift (translate-y + shadow), active = navy ring + filled icon chip.
- Form intent-fields: `animate-fade-in` on mount when intent changes.
- Regional presence: SVG India outline with 5 pulsing dots (CSS `animate-ping` style) + tooltip on hover.
- Final CTA: navy→navy-700 gradient with blueprint grid overlay (matches About/Final).

---

## Design Tokens (no custom colors in components)

All HSL from `index.css`: `navy-700/800`, `cii-red`, `neutral-50/150/200/700`, `--ring`. Buttons: `.btn-primary`, `.btn-outline`. Cards: `.cii-card`. Containers: `.container-cii`. Headings use `font-display`.

---

## Out of Scope

- No real form submission, no email/CRM integration
- No real map library (Mapbox/Leaflet) — stylized SVG only
- No calendar/booking integration — "Schedule a Consultation" CTA links to `/register` for now
- No new dependencies
