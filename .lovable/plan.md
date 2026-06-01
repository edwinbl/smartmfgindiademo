## Goal
Resolve all "Background and foreground colors do not have a sufficient contrast ratio" accessibility violations (WCAG AA: 4.5:1 for normal text, 3:1 for large text / UI components).

## Approach

### 1. Audit
- Run an automated accessibility scan (axe-core via the browser tool) across key routes: `/`, `/about`, `/programmes`, `/programmes/:id`, `/events`, `/events/:id`, `/reports`, `/reports/:id`, `/contact`, `/terms`, `/privacy`, `/auth/login`, `/auth/register`.
- Collect every contrast violation with the offending selector, computed fg/bg colors, and contrast ratio.
- Cross-check against the design tokens in `src/index.css` to identify token-level vs one-off issues.

### 2. Categorize findings
Group issues into:
- **Token-level** — a semantic token pair (e.g. `--muted-foreground` on `--background`) fails globally. Fix once in `index.css`.
- **Component-level** — hardcoded Tailwind colors (`text-white/60`, `text-gray-400`, `text-neutral-400`, opacity modifiers on text) in specific components.
- **State-level** — hover/disabled/placeholder states failing contrast.

### 3. Fix strategy
- Replace arbitrary low-contrast utilities with semantic tokens (`text-muted-foreground`, `text-foreground`).
- For dark hero sections (navy backgrounds), ensure white-on-navy text uses at least `text-white/80` for body and solid `text-white` for headings; bump any `text-white/60` or lower used for readable content.
- For light surfaces, replace `text-[hsl(var(--neutral-400))]` and `text-[hsl(var(--neutral-500))]` body usages with `--neutral-700` where they fall below 4.5:1 on white.
- Adjust the actual HSL values of `--neutral-500` / `--muted-foreground` only if they fail in many places — single source of truth fix.
- Verify badge/chip combinations (e.g. `cii-chip` navy text on navy-050) meet 4.5:1.
- Verify button states (ghost button on navy hero, outline button hover).

### 4. Verification
- Re-run the axe scan on the same routes; confirm zero contrast violations.
- Spot-check visually in light viewport at desktop + mobile sizes.
- Build check.

## Scope / Out of scope
- In scope: CSS token tweaks in `src/index.css`, className changes in components, `tailwind.config.ts` color additions if needed.
- Out of scope: layout changes, new components, business logic, dark mode redesign.

## Deliverable
- A list of fixed violations (before → after contrast ratio).
- Updated tokens + component classes.
- Clean axe contrast report.
