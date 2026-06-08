## Findings

After investigating the codebase, the slow page loads are caused by a combination of issues, not a single bug. Production and preview behave differently; these are the main contributors:

1. **Route chunks load entirely on demand with no prefetching.** Every page in `src/App.tsx` is wrapped in `React.lazy(...)`. The first time a user clicks any nav link, the browser must download that page's JS chunk before anything renders — so each navigation shows the skeleton for a noticeable beat.
2. **Heavy hero images are full-size JPGs/PNGs and not preloaded.** `events-flagship-hero.jpg` is ~207 KB, `programmes-hero.jpg` ~228 KB, and several `directory-*.jpg` / `spotlight-*.jpg` files are 50–90 KB. They are imported as plain JPG, served at their natural dimensions, and the LCP image is never preloaded. This delays the largest paint on every page.
3. **No image optimisation pipeline.** Vite is configured with just the React plugin — no `vite-imagetools`, no responsive `srcSet`, no AVIF/WebP variants for `.jpg` heroes.
4. **No manual chunking / vendor split.** Radix, Recharts, embla, react-day-picker etc. all land wherever Rollup decides. Without a `manualChunks` strategy, shared vendor code can be re-fetched as part of multiple route chunks.
5. **A stale lazy-chunk error is in the logs.** `Failed to fetch dynamically imported module: .../src/pages/EventsIndex.tsx` — when a deploy/rebuild invalidates an old hashed chunk that an open tab still references, the lazy import throws and the user sees a blank/stuck page until reload. There is no error boundary around `Suspense` to auto-recover.
6. **Large static legal pages bundled as TSX.** `Terms.tsx` (27K), `Privacy.tsx` (26K), `Accessibility.tsx` (23K), `Cookies.tsx` (22K) — mostly prose embedded as JSX. Fine, but they push the lazy chunk size up unnecessarily.

## Plan

### 1. Prefetch route chunks on intent
- Add a small `prefetch()` helper next to each `lazy()` import in `src/App.tsx` so navigation links can warm the chunk on hover/focus.
- Update the header nav (`src/components/layout/Header.tsx` or equivalent) and primary CTAs to call the matching prefetch on `onMouseEnter` / `onFocus`. This makes most clicks feel instant without changing initial bundle size.
- Optionally `requestIdleCallback` -prefetch the top routes (Solutions, Programmes, Reports) after the home page is interactive.

### 2. Recover gracefully from stale chunks
- Wrap the `Suspense` in `App.tsx` with a small error boundary that detects `ChunkLoadError` / "Failed to fetch dynamically imported module" and triggers a single `location.reload()` so users never see a stuck blank screen after a deploy.

### 3. Optimise hero / spotlight images
- Add `vite-imagetools` to the Vite config.
- Convert the imports for `hero-smart-mfg.jpg`, `programmes-hero.jpg`, `events-flagship-hero.jpg`, `directory-*.jpg`, `spotlight-*.jpg`, `leader-portrait.jpg` to request `?format=avif;webp;jpg&as=picture` (or similar), and render them via `<picture>` with width/height attributes to lock aspect ratio (prevents CLS).
- Add `loading="eager"` + `fetchpriority="high"` for the first hero on each page; `loading="lazy"` for everything below the fold.
- Add `<link rel="preload" as="image" ...>` in `index.html` for the home-page LCP image only.

### 4. Manual vendor chunking
- In `vite.config.ts`, add a `build.rollupOptions.output.manualChunks` config that splits:
  - `react`, `react-dom`, `react-router-dom` → `vendor-react`
  - all `@radix-ui/*` → `vendor-radix`
  - `recharts` → `vendor-charts` (already only used in a few pages — keep it isolated so other routes never pay for it)
  - `embla-carousel-react`, `react-day-picker`, `vaul`, `cmdk` → `vendor-ui`
- This stabilises long-term caching and reduces duplicate code in per-route chunks.

### 5. Trim legal page chunks (low priority)
- Move the prose in `Terms`, `Privacy`, `Accessibility`, `Cookies` into plain `.md`/`.mdx` (or a single shared `<LegalPage content={...} />` driven by a string constant) so the JSX overhead drops. Optional — only if we want to squeeze further.

### 6. Verify
- Run `npx tsc --noEmit` and the production build, then open the preview and check:
  - Network tab: hero images served as AVIF/WebP and sized appropriately.
  - Performance: LCP and route-change time on Solutions, Programmes, Events, Reports.
  - Navigate between pages after hovering nav links — chunk should already be cached.
- Use `browser--performance_profile` on `/` and one inner route to confirm improvements.

### Out of scope
- No content, copy, layout, animation, or data-binding changes.
- No backend/Cloud changes.

### Technical notes
- `React.lazy` `prefetch` pattern: export the `import()` factory once, call it eagerly on hover; `lazy()` reuses the same in-flight promise.
- `vite-imagetools` integrates as a Vite plugin and is the canonical Lovable-recommended approach for build-time image format conversion.
- Error boundary must be a class component (or `react-error-boundary`) since Suspense alone cannot catch chunk-load rejections.

Once you approve, I'll implement steps 1–4 first (highest impact) and leave step 5 unless you want it included.