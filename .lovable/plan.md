
## Goal

Fill the programme currently shown at `/programmes/smart-manufacturing-leadership-programme` with real content from the PDF (CII–JICA–AOTS Training Programme on Industry 4.0).

## Source content (from PDF)

- **Title**: CII–JICA–AOTS Training Programme on Industry 4.0
- **Partners**: CII, JICA, AOTS
- **Batches**: 1–3 July 2024, Gurgaon · 4–6 July 2024, Mumbai
- **Format**: 3-day in-person workshop, two batches
- **Structure per batch**:
  - Day 1: Opening Ceremony → Lecture (Industry 4.0 in Japan/USA/Germany; success stories of large, mid-size and SME Japanese manufacturers; technical, management & HR factor analysis; India case studies) → Networking Lunch → Case study explanation, Japanese-style I4.0 introduction methods, group work, participant company case studies, discussion
  - Day 2: Individual company analysis & advice → Networking Lunch → Whole group work (group presentations, plenary, Q&A, summary)
  - Day 3: Industry Visit

## Changes (single file)

**`src/data/programmes.ts`** — update the `smart-manufacturing-leadership-programme` entry only (keep slug, accent, type so routing, nav, and styling don't break):

- `title`: "CII–JICA–AOTS Training Programme on Industry 4.0"
- `tagline`: "A Japan-India executive workshop on Industry 4.0 adoption"
- `summary`: rewrite to describe the joint CII / JICA / AOTS programme, Japanese best-practice transfer, individual company analysis and India case studies
- `startDate`: "1–3 July 2024, Gurgaon · 4–6 July 2024, Mumbai"
- `isoDate`: "2024-07-01T09:30:00+05:30"
- `duration`: "3 days (two batches)"
- `format`: "In-person · Gurgaon & Mumbai batches"
- `mode`: "In-person"
- `level`: "Advanced"
- `industry`: "Manufacturing"
- `segment`: "Enterprise"
- `status`: "closed" (the dates have passed) — keep `registrationLabel` as "Express Interest"
- `fee`: remove or set to "By invitation"
- `seats`: "Two batches · Gurgaon & Mumbai"
- `highlights`: Duration "3 days", Batches "Gurgaon · Mumbai", Partners "CII · JICA · AOTS", Format "In-person workshop"
- `learningOutcomes`: 4 items derived from the lecture topics (Japanese I4.0 models, technical/management/HR factor analysis, individual company analysis, applying Japanese-style I4.0 to Indian plants)
- `audience`: plant heads, digital leaders, manufacturing managers (keep existing personas)
- `modules`: replace 6 modules with the 6 real sessions across the 3 days, e.g.
  - "Day 1 · Morning — Opening & Lecture: Industry 4.0 in Japan / USA / Germany" (topics: large/mid/SME Japanese success stories, technical/management/HR factor analysis, India case studies)
  - "Day 1 · Afternoon — Case study workshop & group work" (topics: Japanese-style I4.0 introduction methods, framework group work, participant case studies, discussion)
  - "Day 2 · Morning — Individual company analysis & advice"
  - "Day 2 · Afternoon — Whole group work: presentations, plenary, Q&A, summary"
  - "Day 3 — Industry visit"
  - "Batch 2 — Mumbai (4–6 July 2024): same 3-day structure"
- `faculty`: replace with three partner placeholders representing CII, JICA, AOTS faculty (e.g. "CII Smart Manufacturing Faculty", "JICA Expert Faculty", "AOTS Lead Trainer") using the existing `ProgrammeFaculty` shape — no changes to the schema
- `faqs`: 2 entries — "Who can attend?" and "Are both batches identical?" based on PDF content

## Out of scope

- No schema changes, no new files, no routing or component changes.
- Other programmes, hero, and nav remain untouched.
- Not downloading or hosting the PDF logos.
