# Authentication UI (mock, no backend)

A premium, mobile-first auth experience matching the CII Smart Manufacturing design system. Pure UI with client-side state — no Lovable Cloud, no real session. Google button is decorative. After "login"/"register", the user is sent back to the page they came from (origin route captured via `location.state.from` / `sessionStorage`).

## Routes (added to `src/App.tsx`)

```text
/login              → Login page
/register           → 2-step registration
/welcome            → Post-registration transition
/forgot-password    → Email entry → confirmation
/reset-password     → New password form
```

Header "Login" / "Get Started" CTAs in `WireHeader.tsx` and `WireFooter.tsx` link to `/login` and `/register`.

## Layout system

Shared `AuthLayout.tsx` provides the split-screen shell:

- **Desktop (≥lg):** Left 40% storytelling panel (sticky, gradient navy→navy-700 with blueprint grid, animated orbital ecosystem viz reusing `HeroEcosystemViz` styling, headline, 4 benefit chips). Right 60% centered card.
- **Mobile:** Storytelling becomes a compact hero band on top (collapsed: logo + 1-line tagline), auth card stacked below, sticky bottom CTA on form screens.

Card uses `cii-card` token, generous padding, soft fade-in via `useReveal`.

## Components

```text
src/components/auth/
  AuthLayout.tsx            shared split-screen shell + brand panel
  AuthBrandPanel.tsx        left storytelling (headline, benefits, viz)
  FloatingInput.tsx         input w/ floating label, inline validation, 52px height
  PasswordInput.tsx         FloatingInput + show/hide + strength meter
  SocialButton.tsx          Google button (icon + label, outline style)
  StepProgress.tsx          "Step X of Y" pill + animated bar
  AuthCard.tsx              card wrapper with title/subtitle slots
```

## Pages

- **`src/pages/auth/Login.tsx`** — Email, password, "Forgot password?" link, primary `Login` button, divider, Google button, "Create account" link. On submit: fake delay, toast success, `navigate(from, { replace: true })`.
- **`src/pages/auth/Register.tsx`** — Holds step state (1 of 2). Step 1: Title (Mr/Ms/Dr/Other), First/Last name, Email, Mobile (`inputMode="tel"`). Step 2: Company, Designation, Sector dropdown, Category dropdown, Source dropdown. Uses shadcn `Select`. CTAs: Continue / Back / Create Account. Animated slide between steps. On finish → `/welcome` (carries `from`).
- **`src/pages/auth/Welcome.tsx`** — Headline "Your Industry 4.0 Journey Starts Here", journey graphic (5-node SVG: Assess→Guide→Enable→Connect→Recognise reusing AboutJourney styling), CTAs: "Start Assessment" → returns to origin or `/#assessment`, "Explore Platform" → origin or `/`.
- **`src/pages/auth/ForgotPassword.tsx`** — State machine: `email` → `sent`. Sent view shows envelope icon, "Resend Link", "Back to Login".
- **`src/pages/auth/ResetPassword.tsx`** — New + confirm password with live match + strength validation, success state.

## Validation

Lightweight inline validation (no zod dep needed — plain helpers in `src/lib/authValidation.ts`):

- Email regex
- Mobile: 10 digits
- Password: ≥8 chars, 1 upper, 1 number → strength bar (weak/medium/strong)
- Real-time on blur + submit

Error states use `text-destructive` + red ring; success uses a check icon in the input's trailing slot.

## "Return to origin" behavior

Header/footer login links pass `state={{ from: location.pathname + location.search }}`. Auth pages read `location.state?.from` (fallback `sessionStorage.getItem('auth:from')` then `/`). On successful submit (login or register-complete from welcome), `navigate(from, { replace: true })`.

A tiny helper `src/lib/authReturn.ts` exposes `getReturnTo()` / `setReturnTo()` so any non-auth page can deep-link into login with a return path.

## Design tokens (all HSL, from `index.css`)

- Brand panel bg: `linear-gradient(135deg, hsl(var(--navy-900)), hsl(var(--navy-700)))` + blueprint grid overlay
- Primary CTA: existing `.btn-primary` (CII red)
- Secondary CTA: `.btn-outline`
- Inputs: `border-neutral-200`, focus ring `--ring` (navy-600)
- Card: `cii-card`, radius `--radius`
- Floating label: navy-700 default, red-600 on error

## Animations (Tailwind keyframes already in config)

- `animate-fade-in` on card mount
- Step transition: slide+fade on register
- Button hover lift (`hover-scale` or shadow transition)
- Progress bar width transition 400ms
- All respect `prefers-reduced-motion` (already global in `index.css`)

## Mobile specifics

- Single column ≤lg
- Inputs 52px, 16px font (prevents iOS zoom)
- Sticky bottom CTA wrapper on Register steps: `fixed bottom-0 inset-x-0 p-4 bg-background border-t lg:static lg:border-0 lg:p-0`
- `inputMode` + `autoComplete` set per field

## Files to create

```text
src/pages/auth/Login.tsx
src/pages/auth/Register.tsx
src/pages/auth/Welcome.tsx
src/pages/auth/ForgotPassword.tsx
src/pages/auth/ResetPassword.tsx
src/components/auth/AuthLayout.tsx
src/components/auth/AuthBrandPanel.tsx
src/components/auth/AuthCard.tsx
src/components/auth/FloatingInput.tsx
src/components/auth/PasswordInput.tsx
src/components/auth/SocialButton.tsx
src/components/auth/StepProgress.tsx
src/lib/authValidation.ts
src/lib/authReturn.ts
```

## Files to edit

```text
src/App.tsx                              add 5 routes
src/components/wireframe/WireHeader.tsx  Login/Get Started → /login, /register (with from state)
src/components/wireframe/WireFooter.tsx  same
scripts/generate-sitemap.ts              add /login, /register (exclude /welcome, /reset-password)
```

No new npm dependencies. No backend changes. No data persistence — purely presentational flow.
