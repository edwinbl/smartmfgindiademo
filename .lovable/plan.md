# Frontend Code Review — Programmes module

Scope: `src/pages/ProgrammeDetail.tsx`, `src/components/programmes/**`, `src/lib/programmesStorage.ts`. Focused on the recently added Batches / Gallery / Testimonials / Register flow plus shared patterns reused elsewhere.

Overall the module is well structured: small focused components, consistent design tokens, no obvious dead code, a11y baseline from the prior skill pass is in place. Findings below are improvements, not blockers.

---

## Findings

### 1. [HIGH] Inline HSL color literals bypass the design system
Files: `ProgrammeBatches.tsx`, `ProgrammeTestimonials.tsx`, `ProgrammeGallery.tsx`, `MobileStickyRegister.tsx`, `StickyActionPanel.tsx`, `ProgrammeCard.tsx`, `ProgrammeRegisterModal.tsx`.

Pattern repeated dozens of times:
```tsx
className="text-[hsl(var(--navy-900))] bg-[hsl(var(--neutral-50))]"
style={{ background: "hsl(180_55%_94%)" }}
```
Issues:
- Arbitrary `hsl(var(--…))` Tailwind values defeat purging diagnostics and make global theme changes painful.
- A few raw HSL tuples (`hsl(180_55%_94%)`, `hsl(180_60%_28%)`, `hsl(38_90%_42%)`) are hard‑coded instead of being CSS variables — direct violation of the project's "no colors in components" rule.
- `statusBadge` map in `ProgrammeBatches.tsx` mixes a semantic concept (status) with raw color classes.

Fix: promote the recurring tokens (`navy-900`, `neutral-700`, `red-600`, `orange-600`, the teal/gold shades) to Tailwind theme colors in `tailwind.config.ts` so components can write `text-navy-900`, `bg-teal-soft`, etc. Move every raw `hsl(180_…)` and `hsl(38_…)` literal into named CSS variables in `index.css`.

### 2. [HIGH] `StickyActionPanel` "Save" button is mislabeled
File: `StickyActionPanel.tsx` lines 60‑62.

The first action labeled "Save" actually triggers `addToCalendar()` (downloads an .ics). The adjacent button is the real bookmark. Users — and screen readers — read "Save" and expect a bookmark. Rename to "Calendar" with `aria-label="Add to calendar"`, or use the calendar icon only with an aria‑label.

### 3. [HIGH] ICS generation duplicated and lossy
Files: `StickyActionPanel.tsx` (31‑43), `ProgrammeRegisterModal.tsx` (`addToCalendar`).

Same function copy‑pasted in two places. Also:
- `DESCRIPTION` is not escaped (commas, newlines, semicolons in `programme.summary` will break the ICS).
- Hard‑codes a 1‑hour duration regardless of programme length.
- No `LOCATION` field even though batches expose one.

Fix: extract `src/lib/ics.ts` with a single `buildIcs(programme, batch?)` helper that escapes per RFC 5545 and uses `batch?.location` plus actual duration when available.

### 4. [MEDIUM] `ProgrammeDetail.tsx` is becoming a god‑page
22 imports, 13 sequential section components rendered inline. Readable today, but each new section adds another import. Suggest grouping into a `ProgrammeDetailSections` array driven by config (`{ id, when: (p) => boolean, render }`) so ordering, conditional rendering (`isShort`, `isClosed`), and analytics can live in one place.

### 5. [MEDIUM] Register modal is doing too much
File: `ProgrammeRegisterModal.tsx` (~270 lines).

Concerns:
- Three-step form, validation, draft persistence, ICS export, and toast all in one component.
- No form library — manual validation flags (`validStep1`, `validStep2`) miss email/phone format checks and don't surface field‑level errors. The existing project already uses `react-hook-form` + `zod` (see `src/components/ui/form.tsx`). Migrate this form to it for consistency and proper aria error wiring.
- Step state is local; on accidental modal close mid-flow the user lands back at step 1 next time even though draft persists. Persist `step` in draft too.

### 6. [MEDIUM] `programmesStorage.ts` mixes concerns
The same file exports a storage facade *and* three style maps (`accentBar`, `accentText`, `accentSoft`). `ProgrammeCard` imports color tokens from a "storage" module — surprising and couples unrelated changes. Move accent maps to `src/lib/programmeAccents.ts` (or to `data/programmes.ts` alongside the `accent` union).

Also: `read()` returns `string[]` but `JSON.parse` is unchecked — if a user manually edits localStorage, the rest of the app crashes. Add a `z.array(z.string()).safeParse` guard.

### 7. [MEDIUM] Cross-tab sync of registrations / drafts is incomplete
- `addRegistered` / `toggleSaved` dispatch a custom event but `saveDraft` / `clearDraft` do not — drafts written in one tab are invisible to another until reload.
- `subscribe` listens to `storage` (other tabs) and the custom event (same tab) — good, but the custom event name is a string literal in three places. Extract a constant.

### 8. [MEDIUM] Gallery video link opens in a new tab without user warning
File: `ProgrammeGallery.tsx`. `<a target="_blank" rel="noreferrer">` — good rel — but the accessible name "Play video: …" implies an in‑page play. Either:
- Append " (opens in new tab)" to the aria-label, or
- Render the video inline in a lightbox/dialog (better UX, consistent with the design language and avoids leaving the site).

Also: `placeholder.svg` fallback for the thumbnail will render at 4:3 with `object-cover` and look stretched. Use `object-contain` and a neutral background when `item.thumbnail` is missing.

### 9. [LOW] `ProgrammeBatches` register button label can wrap awkwardly
`Register for Batch 1 — Bengaluru (Aug 2026)` overflows the button on narrow widths. Switch to `Register` + a visually‑hidden span with the batch label, or truncate.

Also: button label "Registration closed" when `disabled` — but the parent `<span>` badge still shows "Registrations Open" if the parent programme status is `open` and only the batch is closed. Make the badge authoritative (it already is) and key the button copy off the same `status` value.

### 10. [LOW] Render performance & memoization
- `getRelatedProgrammes(programme.slug)` runs on every render of `ProgrammeDetail`. Wrap in `useMemo`.
- `ProgrammeCard` re-renders whenever the parent grid does because `onRegister={onRegister}` is a fresh function. Wrap callers' handlers in `useCallback` and memoize the card with `React.memo`.
- `ProgrammesGrid` (assumed list) likely lacks `key` stability checks — verify slugs are unique.

### 11. [LOW] Mobile sticky bar overlaps the floating chatbot FAB
`MobileStickyRegister` is `z-40` `fixed bottom-0` full width; `WireChatbotFAB` is also bottom‑anchored. On `ProgrammeDetail` they coexist on mobile. Add `bottom-20` to the FAB when a sticky register bar is mounted, or push the bar above the FAB. Currently the FAB sits on top of the bar and partly covers the CTA.

### 12. [LOW] SEO meta description truncation can cut mid‑word
`ProgrammeDetail.tsx` line 75: `programme.summary.slice(0, 155)`. Trim at last word boundary and append `…`. Also add `og:type=article`, `og:image` (use the accent gradient hero or programme image), and JSON‑LD `Course` schema for programmes — high SEO value for this content type.

### 13. [LOW] Keyboard focus visibility on custom buttons
Buttons in `StickyActionPanel` (`grid grid-cols-3`) and `MobileStickyRegister` rely on default browser focus rings — fine, but the dark navy `btn-primary` doesn't have a visible focus outline against the navy background of the hero. Add `focus-visible:ring-2 focus-visible:ring-offset-2` tokens to `.btn-primary` / `.btn-outline` in `index.css`.

### 14. [INFO] Naming nits
- `ProgrammeRegisterModal.tsx` step state would read better as a discriminated union (`"basic" | "professional" | "confirm"`) than `1 | 2 | 3`.
- `cii-card` global utility — fine, but its definition isn't visible from component code; a JSDoc in `index.css` describing what tokens it composes would help.

---

## Recommended fix order

| # | Effort | Impact | Item |
|---|--------|--------|------|
| 1 | M | High  | Promote color tokens (Finding 1) — unlocks all later refactors |
| 2 | S | High  | Rename "Save" → calendar action (Finding 2) |
| 3 | S | High  | Extract `ics.ts` helper with RFC 5545 escaping (Finding 3) |
| 4 | M | Med   | Migrate register modal to `react-hook-form` + `zod` (Finding 5) |
| 5 | S | Med   | Split `programmesStorage.ts` accent maps (Finding 6) |
| 6 | S | Med   | Storage event constant + draft change event (Finding 7) |
| 7 | S | Med   | Gallery: lightbox or "(opens in new tab)" + thumbnail fallback (Finding 8) |
| 8 | S | Low   | Memoize `getRelatedProgrammes`; `React.memo` for `ProgrammeCard` (Finding 10) |
| 9 | S | Low   | Mobile sticky vs chatbot FAB z-index / offset (Finding 11) |
| 10| S | Low   | Course JSON‑LD + smarter meta truncation (Finding 12) |
| 11| S | Low   | Focus‑visible ring on `.btn-primary` / `.btn-outline` (Finding 13) |

Effort: S ≤ 30 min, M ≤ 2 h.

## Technical notes

- No new dependencies required. `react-hook-form` and `zod` are already used by `components/ui/form.tsx`.
- Color token promotion in `tailwind.config.ts` is non‑breaking when the existing arbitrary‑value classes are kept temporarily; migrate component‑by‑component.
- ICS escaping rules: replace `\\` → `\\\\`, `;` → `\\;`, `,` → `\\,`, newlines → `\\n`, fold lines >75 octets.
- For `Course` JSON‑LD use `@type: "Course"`, `provider: { @type: "Organization", name: "CII" }`, `hasCourseInstance` per batch.

## Out of scope

Backend / data layer, auth, analytics events, and the wider site beyond Programmes were not reviewed in this pass. Several findings (color tokens, focus ring, ICS helper) will also benefit the Events module if you want a follow‑up review there.

Used the `frontend-code-review` skill.
