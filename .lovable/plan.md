
# Events & Ecosystem Engagement — Implementation Plan

A premium, mobile-first events hub at `/events` (listing) and `/events/:slug` (detail with per-type layouts), matching the existing navy + CII red, `cii-card`, `.btn-primary/outline`, `useReveal` system. UI-only, mock data in `src/data/events.ts`.

---

## Routes & Navigation

- `src/App.tsx`: add `/events` → `EventsIndex`, `/events/:slug` → `EventDetail`
- `WireHeader.tsx`: change `Events` link from external `smartmfgindia.com/UpcommingEvent.aspx` to internal `/events` (no dropdown)
- `WireFooter.tsx`: add/replace **Events** column linking to `/events` plus quick sub-links (Summits, Webinars, Roundtables, Programmes, Past Events)
- `scripts/generate-sitemap.ts` + `public/sitemap.xml`: add `/events` and detail slugs
- `<SEO />` on both pages, single H1, title <60c, meta <160c

---

## Page Structure — `/events`

```text
EventsFlagshipHero         full-bleed hero w/ generated summit image + animated overlay,
                           countdown, status badge, 4 CTAs, speaker preview strip
EventsTypeTabs             sticky pill nav (All / Summits / Conferences / Roundtables /
                           Webinars / Seminars / Programmes), swipeable on mobile
EventsDiscoveryBar         smart filter chips + quick-discovery pills (This Month,
                           MSME Focus, Sustainability, AI & Automation, Networking, Training)
EventsGrid                 responsive 3/2/1 grid, renders type-specific card variants
PersonalizedEventsShelf    logged-in only (uses useMockAuth) — Recommended carousel
EventsImpactStats          animated counters (participants, industries, states, sessions)
PastEventsArchive          timeline + card hybrid w/ highlights, recordings, proceedings
EventsFinalCta             "Be Part of India's Smart Manufacturing Ecosystem" gradient band
WireFooter
```

### Event card variants (one component, `variant` prop)

- **WebinarCard** — compact, virtual badge, speaker + duration, "Register Free"
- **RoundtableCard** — invite-style, gold accent, "Limited seats", "Request Invite"
- **SummitCard / ConferenceCard** — larger immersive cover, venue, multi-day, partner logos, "Explore Event"
- **SeminarCard / ProgrammeCard** — structured learning, skill level, outcomes, "Join Programme"

---

## Page Structure — `/events/:slug`

Detail layout switches on `event.type`:

```text
WebinarDetail        compact: hero strip, speaker, learning outcomes, fast-register sticky CTA
SummitDetail         immersive: hero banner, agenda timeline, tracks, speakers grid,
                     sponsors, venue map placeholder, networking, FAQs, sticky register
RoundtableDetail     executive: themes, participants list, invitation process,
                     "Request Participation" CTA
ProgrammeDetail      curriculum modules, facilitator, skill outcomes, cohort dates
```

Shared sub-components: `EventDetailHero`, `EventAgendaTimeline`, `EventSpeakersGrid`, `EventSponsorsBand`, `EventFAQ`, `EventStickyRegister`, `EventShareBar`.

---

## Discovery Behavior (client-side)

State in `EventsIndex.tsx`:

```text
{ type, filters: { industry, technology, location, mode, level, segment, date }, quickPick }
```

- Type pills set primary filter; chip filters refine
- Sticky filter bar on desktop; mobile shows "Filters" button → bottom drawer
- Smooth `framer`-free fade via `useReveal` + tailwind transitions
- Empty state component when filtered list empty

---

## Soft-Gated Registration

Reuse `DownloadModal` pattern → new `RegisterEventModal`:
- Signed-in → toast success
- Signed-out → modal: "Reserve Your Spot", Login / Create Account, social buttons (visual only)

Each event in data has `registration: 'open' | 'invite' | 'soon' | 'completed'`.

---

## Components to Create

```text
src/pages/EventsIndex.tsx
src/pages/EventDetail.tsx
src/data/events.ts                                    // 14 mock events across all types + past
src/components/events/EventsFlagshipHero.tsx
src/components/events/EventsTypeTabs.tsx
src/components/events/EventsDiscoveryBar.tsx
src/components/events/EventsGrid.tsx
src/components/events/EventCard.tsx                   // variant-driven
src/components/events/EventsEmptyState.tsx
src/components/events/PersonalizedEventsShelf.tsx
src/components/events/EventsImpactStats.tsx
src/components/events/PastEventsArchive.tsx
src/components/events/EventsFinalCta.tsx
src/components/events/RegisterEventModal.tsx
src/components/events/CountdownTimer.tsx
src/components/events/detail/EventDetailHero.tsx
src/components/events/detail/EventAgendaTimeline.tsx
src/components/events/detail/EventSpeakersGrid.tsx
src/components/events/detail/EventSponsorsBand.tsx
src/components/events/detail/EventFAQ.tsx
src/components/events/detail/EventStickyRegister.tsx
src/components/events/detail/WebinarDetail.tsx
src/components/events/detail/SummitDetail.tsx
src/components/events/detail/RoundtableDetail.tsx
src/components/events/detail/ProgrammeDetail.tsx
src/lib/eventsStorage.ts                              // saved/registered helpers
src/assets/events-flagship-hero.jpg                   // generated (premium image, 1920x1080)
```

Files edited: `src/App.tsx`, `src/components/wireframe/WireHeader.tsx`, `src/components/wireframe/WireFooter.tsx`, `scripts/generate-sitemap.ts`, `public/sitemap.xml`.

---

## Visuals & Animation

- Flagship hero: generated cinematic conference photo + animated gradient + floating KPI tiles + countdown
- Type tabs: pill highlight slides via CSS transform on active index
- Cards: hover lift, type-tinted accent border (webinar=teal, roundtable=gold, summit=cii-red, programme=navy)
- Impact: `useCountUp` (already in project)
- Past archive: vertical timeline (desktop) / horizontal scroll (mobile), each node opens card with recording/proceeding links
- Final CTA: navy gradient w/ blueprint grid overlay (matches site)

---

## Design Tokens

All HSL from `index.css`: `navy-700/800`, `cii-red`, `neutral-50/150/200/700`. New per-type accents derived from existing palette (no new tokens). Buttons: `.btn-primary`, `.btn-outline`. Cards: `.cii-card`. Container: `.container-cii`. Headings: `font-display`.

---

## Out of Scope

- No real registration/calendar backend — `.ics` "Add to calendar" is a static blob
- No real auth — uses `mockAuth`
- No video playback — "Watch Highlights" links to YouTube placeholder
- No real maps — venue is a styled placeholder
- No new heavy deps (Recharts/Embla already in project)
