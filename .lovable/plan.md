# Accessibility Audit — Programmes module

Focused audit of the recently built Programmes pages and shared chrome (header/footer). HTML lang, single `<main>` per route, header/footer landmarks, primary nav `aria-label`, and hero/logo `alt` text all look good.

## Findings

### Critical (blocks assistive tech users)

1. **Register modal form fields have no labels** — `src/components/programmes/ProgrammeRegisterModal.tsx`
   All inputs (Full name, Organization, Work email, Mobile, Industry, Role, Org size `<select>`, Objectives `<textarea>`) rely on `placeholder` only. Screen readers announce these as unlabeled. Placeholders also disappear on input, hurting cognition.

2. **Register modal uses native `<select>` and `<input>` instead of design-system primitives**
   These bypass shadcn's Label/Input/Select wiring used elsewhere (e.g. `ProgrammesDiscoveryBar` uses shadcn `Select` correctly). Inconsistent focus rings and no `htmlFor` association.

### Warning (degrades experience)

3. **`min-h-screen` used on every page wrapper** — all `src/pages/*.tsx`
   On mobile browsers with dynamic toolbars this overflows. Use `min-h-dvh` (or pair `min-h-screen min-h-dvh`).

4. **StickyActionPanel + MobileStickyRegister icon+text buttons OK, but Share button on success has no live feedback**
   `handleShare` triggers a toast — fine — but ensure focus returns to trigger after copy. Low impact; flag only.

5. **Gallery video tiles**: `<a>` wraps an `<img>` with a decorative play overlay. The link has no accessible name beyond the image alt. If `item.caption` is missing, alt falls back to "Programme video" which is generic. Recommend adding `aria-label={`Play video: ${caption ?? programme.title}`}` to the anchor.

### Info (best practice)

6. **ProgrammesHero decorative image** uses `alt=""` correctly. ✓
7. **Breadcrumb nav has `aria-label="Breadcrumb"`** ✓
8. **Mobile sticky register bar** sits above page content — verify it doesn't cover focus outlines on the last focusable element. Add `pb-20 lg:pb-0` to detail page wrapper (already present ✓).
9. **Modal close button has `aria-label="Close"`** ✓ but consider "Close registration dialog" for clarity.

## Proposed fixes (in priority order)

### Fix 1 — Label the registration form (critical)

Replace native `<input>/<select>/<textarea>` in `ProgrammeRegisterModal.tsx` step 1 and step 2 with shadcn `Input`, `Select`, `Textarea` + visible `Label` from `@/components/ui/label`. Each field gets:
- A visible `<Label htmlFor="...">` above the control
- `id` matching `htmlFor`
- Keep placeholder as a hint, not the label
- `aria-required` on required fields
- `type="tel"` on mobile, `inputMode="email"` on email (already typed)

This also fixes finding 2 (consistency).

### Fix 2 — Swap `min-h-screen` → `min-h-dvh` (warning)

Find/replace across `src/pages/*.tsx` page wrappers. No layout change on desktop; fixes mobile viewport jump.

### Fix 3 — Improve gallery video link names (warning)

In `ProgrammeGallery.tsx`, add `aria-label={\`Play video: ${item.caption ?? programme.title}\`}` to the `<a>` and change image to `alt=""` (decorative since link is named).

### Fix 4 — Modal close label polish (info)

Change `aria-label="Close"` → `aria-label="Close registration dialog"`.

## Out of scope

- Other modules (Events, Reports, About, Contact) — same audit can run separately.
- Color contrast audit of tokens — requires running axe in browser; flag for follow-up.
- Keyboard trap testing inside the multi-step modal (Radix Dialog handles focus trap; no custom focus logic added).

## Approval

On approval I'll apply Fix 1–4 in a single pass and verify the modal still submits and validation states render.
