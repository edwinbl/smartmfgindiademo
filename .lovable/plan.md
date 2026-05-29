
## Goal
Create `/terms` — a modern, enterprise-grade Terms of Use page for the CII Smart Manufacturing Platform — and link it from the global footer.

## Files to create

1. **`src/pages/Terms.tsx`** — main page, composes the sections below.
2. **`src/components/terms/TermsHero.tsx`** — breadcrumb, H1, supporting text, metadata row (Effective Date, Last Updated, Version).
3. **`src/components/terms/TermsLayout.tsx`** — two-column shell: sticky left sidebar on `lg+`, main content right. On mobile, sidebar collapses into a sticky dropdown ("Jump to section").
4. **`src/components/terms/TermsSidebar.tsx`** — TOC with 12 items, scroll-spy active highlight using `IntersectionObserver`, smooth scroll on click.
5. **`src/components/terms/TermsSection.tsx`** — reusable section wrapper: id anchor, H2, optional "In Simple Terms" summary card, content slot, "Copy link" button (writes `location.origin + #id` to clipboard, toasts).
6. **`src/components/terms/TermsContent.tsx`** — renders all 12 sections with realistic placeholder legal copy, bullet lists, accordion for long sub-clauses (uses existing `@/components/ui/accordion`), highlight callout boxes for confidentiality/disclaimer notes.
7. **`src/components/terms/TermsToolbar.tsx`** — search input (filters/highlights section matches), Download PDF button (calls `window.print()` for now with print stylesheet), Print button.
8. **`src/components/terms/ReadingProgressBar.tsx`** — fixed top 2px bar tracking scroll % of the content area.
9. **`src/components/terms/BackToTopFab.tsx`** — floating button appearing after 600px scroll, respects mobile sticky bar z-index.
10. **`src/components/terms/TermsSupportFooter.tsx`** — "Need Help?" card with Contact support CTA, Privacy Policy link, Cookie Policy link, legal email (`legal@smartmfgindia.com`).

## Files to edit

- **`src/App.tsx`** — add lazy route `/terms` → `Terms` with `withSuspense(..., "detail")`.
- **`src/components/wireframe/WireFooter.tsx`** — append `{ label: "Terms of Use", url: "/terms" }` to the Explore column (and add Privacy/Cookies placeholders if missing — keep scope: only Terms link is required, but wire the bottom-row "Terms" anchor to `/terms`).
- **`src/index.css`** — add `@media print` rules: hide header/footer/sidebar/FAB/toolbar, expand content full-width, force black text on white. Add `.terms-callout` utility for highlight boxes using existing tokens.
- **`public/sitemap.xml`** + **`scripts/generate-sitemap.ts`** — include `/terms`.

## Section list (sidebar + content anchors)
`introduction`, `eligibility`, `platform-usage`, `assessments-reports`, `intellectual-property`, `privacy-data`, `user-conduct`, `third-party-links`, `liability`, `termination`, `governing-law`, `contact`.

Each section ships with:
- H2 + section number
- "In Simple Terms" summary card (soft accent background, plain-English 1–2 sentences)
- Detailed clauses (paragraphs + bullet lists)
- Optional accordion for sub-clauses
- "Copy link" icon button in the section header
- Highlight callout for any disclaimer/confidentiality note (green for compliance, blue for informational, amber for important)

## Design system

- Reuse existing semantic tokens (`--background`, `--foreground`, `--primary`, `--muted`, navy/india-green tokens already in `index.css`). No raw hex/HSL literals in components.
- Blue accents → `primary` / `navy-*` tokens; green compliance accents → `india-green` token.
- Typography: existing heading/body stack, generous `prose`-like spacing (`max-w-3xl`, `leading-relaxed`, `space-y-6`).
- Subtle borders (`border-border`), soft shadows (`shadow-sm`), white/`muted` backgrounds.

## UX details

- **Scroll-spy**: single `IntersectionObserver` on all section ids with `rootMargin: "-30% 0px -60% 0px"`.
- **Search**: client-side filter — highlights matching sections in sidebar and scrolls + flashes the first match.
- **Copy link**: `navigator.clipboard.writeText` + `useToast`.
- **Reading progress**: `scroll` listener throttled with `requestAnimationFrame`.
- **PDF**: `window.print()` (browser "Save as PDF") — labeled "Download PDF". No new dependency.
- **Mobile**: sidebar → sticky `<details>`/Sheet "Jump to section" under hero; sections themselves use accordion for sub-clauses; progress bar stays visible at top.

## SEO

- `<Helmet>` title `Terms of Use — CII Smart Manufacturing Platform`, meta description, canonical `/terms`, `og:type=article`.

## Out of scope
- Real legal copy (placeholder content clearly marked).
- Building separate Privacy / Cookie Policy pages (links point to `#` placeholders unless user asks).
- Backend storage of acceptance.
