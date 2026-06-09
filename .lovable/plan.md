## Problem

In the "Convenings hosted by CII" section, the grid is already `grid-cols-2`, but the Smart Manufacturing Summit card still occupies the full row. The cause is in `src/components/events/EventCard.tsx` — the `SummitCard` variant hardcodes `lg:col-span-2` on its root `<article>`. At ≥lg, that summit card spans both columns, pushing the Roundtable card onto the next row.

## Fix

Stop the Summit/Conference card from spanning both columns inside the CII Signature grid, without affecting other places where SummitCard may legitimately need the wide treatment.

### Change

In `src/components/events/CIISignatureEvents.tsx`, pass an override class to each rendered card so it stays in a single column:

```tsx
<EventCard
  key={e.slug}
  event={e}
  onRegister={onRegister}
  className="lg:!col-span-1"
/>
```

This uses Tailwind's important modifier to beat the `lg:col-span-2` baked into `SummitCard`, keeping both cards equal-width in a 2-up row on all breakpoints (mobile already 2-up per current grid).

### Out of scope

- No changes to `EventCard.tsx` itself, so the Upcoming Events grid (where the summit hero may intentionally span 2 columns) remains unchanged.
- No copy, data, or layout changes elsewhere.

## Files

- `src/components/events/CIISignatureEvents.tsx` — add `className="lg:!col-span-1"` to the `<EventCard>` inside the `.map()`.
