
# Reports & Insights — Implementation Plan

A premium, mobile-first "Reports & Insights" experience at `/reports` (listing) and `/reports/:slug` (detail), matching the existing Industry 4.0 platform aesthetic (navy + CII red, `cii-card`, `.btn-primary/outline`, `useReveal`, floating SVG visuals). UI-only, no backend — data lives in a typed `src/data/reports.ts` mock module.

---

## Routes & Navigation

- `src/App.tsx`: add `/reports` → `ReportsIndex` and `/reports/:slug` → `ReportDetail`
- `WireHeader.tsx`: add **Insights** entry to `navLinks` (desktop + mobile drawer), with a small dropdown linking to "All Reports", "MSME Insights", "Sustainability", "Smart Manufacturing"
- `WireFooter.tsx`: add **Insights** column linking to the same
- `scripts/generate-sitemap.ts` + `public/sitemap.xml`: add `/reports` and detail pages
- SEO via `<SEO />` on both pages (single H1, title <60c, meta <160c)

---

## Page Structure

### `/reports` — ReportsIndex

```text
ReportsHero                editorial split: headline + 2 CTAs + animated chart/dashboard SVG
ReportsDiscoveryBar        sticky: search input + filter chips + quick-discovery pills
FeaturedCollections        horizontal-scroll cover cards (5 curated packs)
ReportsGrid                3/2/1 col responsive card grid, EmptyState fallback
ReportsFinalCta            full-width gradient band, 2 CTAs
WireFooter                 reused
```

### `/reports/:slug` — ReportDetail

```text
ReportDetailHero           breadcrumb, title, summary, author, date, industry tags
ReportSplitLayout
  ├ ReportSummaryPanel     LEFT, sticky on desktop: cover, Download CTA, Save, Share, metadata, tags
  └ ReportContentPane      RIGHT:
        ReportKeyHighlights   dashboard-style insight cards + 1 simple chart (Recharts)
        ReportPreview         scrollable preview with last pages blurred (gated reports)
        ReportRelated         3-card grid: related reports / case studies / training
ReportsFinalCta            reused
```

---

## Discovery Behavior (client-side)

State in `ReportsIndex.tsx`:

```text
{ query, filters: { industry, domain, technology, state, type, year }, quickPick }
```

- Search debounced (200ms), case-insensitive across title/summary/tags
- Filter chips: shadcn `Select` for each facet, plus a "Clear all" link when any active
- Quick-discovery pills set a preset (e.g. "MSME Insights" → `domain=MSME`)
- Mobile: chips become a horizontal-scroll row (`overflow-x-auto snap-x`); search bar `sticky top-[64px]`
- Empty state component when filtered list is empty: illustration + "Clear filters" / "Browse curated collections"

---

## Soft-Gated Download

`DownloadModal` (shadcn `Dialog`):
- Uses `useMockAuth()` — if signed in, click on Download triggers a toast success and a noop download; if not, opens modal
- Modal content: "Access This Report" + subtext, "Login" → `/login`, "Create Account" → `/register`, social buttons (visual only, link to register)
- Each report has `gated: boolean` flag in the data file

---

## Personalized Section (logged-in)

On `/reports` when `useMockAuth()` returns a user, render `PersonalizedShelf` above `FeaturedCollections`:
- "Recommended for you" (random 3 from data)
- "Recently viewed" (localStorage `reports_recent`)
- "Saved reports" (localStorage `reports_saved`)
Save toggle on cards + detail panel writes to `reports_saved`.

---

## Components to Create

```text
src/pages/ReportsIndex.tsx
src/pages/ReportDetail.tsx
src/data/reports.ts                                  // 12 mock reports + 5 collections
src/components/reports/ReportsHero.tsx
src/components/reports/ReportsDiscoveryBar.tsx
src/components/reports/FeaturedCollections.tsx
src/components/reports/ReportsGrid.tsx
src/components/reports/ReportCard.tsx
src/components/reports/ReportsEmptyState.tsx
src/components/reports/PersonalizedShelf.tsx
src/components/reports/ReportsFinalCta.tsx
src/components/reports/ReportDetailHero.tsx
src/components/reports/ReportSummaryPanel.tsx
src/components/reports/ReportKeyHighlights.tsx
src/components/reports/ReportPreview.tsx
src/components/reports/ReportRelated.tsx
src/components/reports/DownloadModal.tsx
src/lib/reportsStorage.ts                            // saved/recent helpers
```

Files edited: `src/App.tsx`, `src/components/wireframe/WireHeader.tsx`, `src/components/wireframe/WireFooter.tsx`, `scripts/generate-sitemap.ts`, `public/sitemap.xml`.

---

## Visuals & Animation

- Hero right side: layered SVG dashboard mock (bars + line + floating KPI tiles) with `animate-float` and reveal
- Cards: hover lift (`-translate-y-1` + shadow), cover uses a generated gradient + topic icon (no real thumbnails needed)
- Section reveals via `useReveal`
- Key Highlights: 4 stat cards + 1 small Recharts bar/line chart (already in deps via shadcn `chart`)
- Preview: scrollable mock pages, last 2 pages get `blur-sm` + lock overlay when `gated`
- Final CTA: navy gradient with blueprint grid overlay (matches About/Contact final)

---

## Design Tokens

All HSL from `index.css`: `navy-700/800`, `cii-red`, `neutral-50/150/200/700`, `--ring`. Buttons: `.btn-primary`, `.btn-outline`. Cards: `.cii-card`. Containers: `.container-cii`. Headings: `font-display`.

---

## Out of Scope

- No real PDF rendering — preview is a styled mock
- No real auth — uses existing `mockAuth`
- No backend persistence — saved/recent in localStorage
- No new dependencies
