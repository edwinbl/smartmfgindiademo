# Accessibility Audit — Programmes module

Focused audit of the recently built Programmes pages and shared chrome (header/footer). HTML `lang`, single `<main>` per route, header/footer landmarks, primary nav `aria-label`, and hero/logo `alt` text all look good.

## Findings

### Critical (blocks assistive-tech users)

1. **Register modal form fields have no labels** — `src/components/programmes/ProgrammeRegisterModal.tsx`
   All inputs (Full name, Organization, Work email, Mobile, Industry, Role, Org size `<select>`, Objectives `<textarea>`) rely on `placeholder` only. Screen readers announce them as unlabeled, and placeholders disappear on input, hurting cognition.

2. **Register modal uses native `<input>/<select>/<textarea>` instead of design-system primitives.**
   Bypasses the shadcn Label/Input/Select wiring used elsewhere (e.g. `ProgrammesDiscoveryBar`). Inconsistent focus rings and no `htmlFor` association.

### Warning (degrades experience)

3. **`min-h-screen` used on every page wrapper** — all `src/pages/*.tsx`.
   On mobile browsers with dynamic toolbars this overflows. Use `min-h-dvh`.

4. **Gallery video tile link names are generic** — `ProgrammeGallery.tsx`.
   `<a>` wraps an `<img>`; when `caption` is missing, alt falls back to "Programme video". Link name should be explicit.

### Info (best practice)

5. Modal close button `aria-label="Close"` → "Close registration dialog" for clarity.
6. ProgrammesHero decorative image `alt=""` ✓, Breadcrumb `aria-label` ✓, mobile sticky bar respects `pb-20` ✓.

## Proposed fixes (in priority order)

### Fix 1 — Label the registration form (critical)

In `ProgrammeRegisterModal.tsx` steps 1 and 2, replace native inputs with shadcn `Input`, `Select`, `Textarea` + visible `<Label htmlFor=…>`. Each field gets matching `id`, `aria-required` where required, keeps placeholder as a hint. Also fixes finding 2.

### Fix 2 — Swap `min-h-screen` → `min-h-dvh` (warning)

Update page wrappers in `src/pages/*.tsx`. No desktop layout change; fixes mobile viewport jump.

### Fix 3 — Improve gallery video link names (warning)

In `ProgrammeGallery.tsx`, add `aria-label={\`Play video: ${item.caption ?? programme.title}\`}` to the `<a>` and set `alt=""` on the inner image (decorative, link is named).

### Fix 4 — Modal close label polish (info)

Change `aria-label="Close"` → `aria-label="Close registration dialog"`.

## Out of scope

- Other modules (Events, Reports, About, Contact) — same audit can run on request.
- Color-contrast scan via axe-core in the browser — flag for a follow-up.
- Keyboard-trap testing inside the multi-step modal (Radix Dialog handles focus trap; no custom focus logic added).

## Approval

On approval I'll apply Fix 1–4 in a single pass and verify the modal still submits and validation states render correctly.
