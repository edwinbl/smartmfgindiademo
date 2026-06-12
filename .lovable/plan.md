## Goal
Replace the "Sector readiness snapshot" card on the right side of the homepage "Maturity Assessment" band with a clean, premium **MSME Digital Maturity Ladder** infographic that reinforces the left-side CTA.

## Scope
Single file: `src/components/wireframe/WireAssessmentTeaser.tsx` — only the right column markup. Left column (copy + CTA) stays untouched. No new dependencies, no data changes.

## Design

A 5-step ascending ladder rendered as stacked rungs inside a rounded card matching the existing `cii-card` styling.

```text
                                       ╭───────────────╮
                                  ────▶ │ 5 Smart &     │  🤖
                                  │     │   Adaptive    │
                              ╭───┴───╮ ╰───────────────╯
                         ────▶│ 4 Data-driven │ 📊
                         │    ╰───┬───────╯
                     ╭───┴───╮
                ────▶│ 3 Connected  │ 🔗   ← highlighted band
                │    ╰───┬───────╯       "You may be closer than you think."
            ╭───┴───╮
       ────▶│ 2 Digitised │ 📱           ← highlighted band
       │    ╰───┬──────╯
   ╭───┴───╮
   │ 1 Manual │ 🏭
   ╰─────────╯

         "Find your current stage and next priority."
```

### Stage content
1. **Manual** — Factory icon (`Factory`)
2. **Digitised** — Tablet icon (`Tablet`)
3. **Connected** — Connected machines (`Network` or `Share2`)
4. **Data-driven** — Dashboard (`LineChart` / `BarChart3`)
5. **Smart & Adaptive** — AI/automation (`Cpu` or `BrainCircuit`)

All icons from `lucide-react` (already used across the project).

### Visual treatment
- Outer container: existing `cii-card` + same padding as before so vertical rhythm with the left column is preserved.
- Header strip inside the card: eyebrow "MSME Digital Maturity Ladder" + chip "5 Stages" on the right (mirrors current header pattern).
- Five rungs stacked bottom→top with **increasing left indent** (e.g., 0, 8%, 16%, 24%, 32%) to read as an ascending staircase. Each rung is a small rounded pill/card:
  - Number badge (1–5) in navy
  - Stage name (bold, navy-800)
  - One-line micro-descriptor in `neutral-500`
  - Icon on the right inside a soft tinted square
- Background gradient line behind the rungs: thin diagonal navy→orange gradient suggesting upward motion.
- **Highlight stages 2 and 3** with a subtle orange ring + faint `orange-100` background to imply "most MSMEs are around here". Other rungs use neutral surface.
- Inline caption beside the highlighted band: *"You may be closer than you think."* (small, italic, navy-700).
- Footer line inside the card: *"Find your current stage and next priority."* in `neutral-500`, with a small arrow icon — visually echoes (but doesn't duplicate) the left CTA.

### Tokens (no new ones)
Uses existing `--navy-*`, `--orange-*`, `--neutral-*` tokens and `cii-card`, `cii-chip`, `cii-chip-orange`, `eyebrow` classes. No `tailwind.config.ts` or `index.css` changes.

### Responsive
- Desktop (lg+): right column renders as designed alongside left column (existing grid).
- Mobile/tablet: card stacks below copy (already handled by the parent `lg:grid-cols-[1fr_1.05fr]`). Indents reduce (e.g., 0, 4%, 8%, 12%, 16%) via `sm:` prefix so rungs remain legible on narrow screens.

## Out of scope
- Left-side copy, CTA, eyebrow, model list.
- Any other section of the homepage.
- New assets, images, or data files.

## Verification
- Visual check in preview at desktop and mobile widths.
- Confirm no console/runtime errors.
- Confirm left column copy/CTA unchanged.
