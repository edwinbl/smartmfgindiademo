
## Goal

Merge the CII–JICA–AOTS flyer content into the same programme entry (`/programmes/smart-manufacturing-leadership-programme`) and render the new structured fields in the detail page.

## Schema additions (`src/data/programmes.ts`)

Add optional fields to `ProgrammeItem` (non-breaking — existing entries unaffected):

- `objective?: string[]` — 2 objective bullets from flyer
- `keyHighlights?: string[]` — 6 bullets ("Overview of Industry 4.0 in Japan/USA/Germany", "Society 5.0…", "Smart Factory case studies", "Cyber Physical System", "IoT/AI tools used by global companies", "IoT, Big Data, AI & Kaizen case studies")
- `focusedDiscussions?: string[]` — 5 bullets
- `feeTable?: { segment: string; member: string; nonMember: string }[]` — Large & Medium / PSU vs Micro & Small rows + early-bird note
- `feeNote?: string` — "Early bird discount available till 31 May 2024. Plus taxes as applicable."
- `contacts?: { name: string; email: string; phone: string }[]` — Abilash Uttam, Saunak Banerjee
- `registrationLinks?: { label: string; url?: string }[]` — Gurgaon & Mumbai placeholders (QR-only in flyer, no URL captured)

## Data updates (same entry only)

- Update `audience` to: "Discrete Manufacturing", "Process Manufacturing", "Hybrid Manufacturing" (replace existing personas for this programme only — use inline objects matching `ProgrammeAudience` shape).
- Add faculty: **Mr Mitsuru Abe** — "Representative Director / General Secretary, AI & IoT Promotions Association / AOTS, Japan" (initials `MA`). Keep existing 3 partner entries.
- Populate new fields above with flyer text.
- Keep title, dates, modules, slug, accent unchanged (already loaded from previous edit).

## UI rendering (detail page)

Create small, focused additions under `src/components/programmes/detail/`:

1. **`ProgrammeObjective.tsx`** — renders `objective` as a bulleted intro block (only if present). Added in `ProgrammeDetail.tsx` right after `ProgrammeOverview`.
2. **`KeyHighlights.tsx`** — two-column grid card list for `keyHighlights` (only if present). Placed before `LearningOutcomes`.
3. **`FocusedDiscussions.tsx`** — checklist-style card list for `focusedDiscussions`. Placed after `LearningOutcomes`.
4. **`FeeTable.tsx`** — responsive table comparing CII Members vs Non-Members across the two industry segments; shows `feeNote` underneath. Placed after `CertificationBlock`.
5. **`ProgrammeContacts.tsx`** — small contacts card (name, email link, phone link). Placed at the end of the left column.

Each new component is conditional (renders nothing if its source field is missing), so all other programmes remain visually identical.

`ProgrammeDetail.tsx` — import + render the new sections inside the existing left column in this order:
`Overview → Objective → KeyHighlights → LearningOutcomes → FocusedDiscussions → WhoShouldAttend → Agenda → Faculty → Certification → FeeTable → Contacts`.

## Out of scope

- No nav, routing, or other programmes touched.
- QR images from the flyer not embedded (registration URLs unknown).
- No backend / form changes — registration modal stays as-is.
