## Update /reports content with the 13 new entries

Scope: content-only update to the reports dataset. Listing cards (`/reports`) and detail pages (`/reports/:slug`) both read from `src/data/reports.ts`, so a single data update flows everywhere.

### Changes in `src/data/reports.ts`

1. Relax the `ReportType` union to `string` so the new categories (e.g. "Industry Report", "Case Study Compendium", "Strategic Roadmap", "Digital Transformation Insight", "Technology Insight", "AI & Workplace Safety", "Advanced Manufacturing", "Emerging Technologies", "Design & Engineering", "AI in Engineering") render verbatim on cards, badges, and filters — same approach we used for `Sector` on case studies.
2. Replace the `reports` array with 13 entries, one per item you listed. For each entry:
   - `title` = your title
   - `summary` = your description
   - `type` = your category (as-is)
   - `slug` = kebab-case of the title
   - Industry / technology / state / year / pages / readingTime / author / publishedOn / gated / tags / highlightStat / coverGradient / collectionIds = sensible defaults inferred from the title (e.g. "Predictive Maintenance for Oil & Gas" → industry "Oil & Gas"), cycling through the existing gradient palette so cards stay visually varied.
   - `keyFindings`, `metrics`, `executiveSummary` = reuse the existing `baseFindings` / `baseMetrics` / `baseSummary` placeholders (detail page sections stay populated; you can refine copy later).
3. `reportFacets` is derived from the array, so the sidebar filter chips on `/reports` auto-update to the new industries / types / years.
4. Leave `collections`, `quickPicks`, and helper functions (`getReportBySlug`, `getRelated`) unchanged.

### What you'll see

- `/reports` listing: 13 cards with the new titles, descriptions, and category badges; CII section + filters reflect the new data.
- `/reports/:slug` detail: hero + summary panel show the new title/description/category; supporting sections (findings, metrics, related) keep the existing placeholder content.

### Out of scope

- No layout or component changes.
- No new images/covers — gradients only.
- Per-report custom findings/metrics/executive summary copy (happy to add in a follow-up if you share content for each).

### Open question

Cover gradients will be cycled from the existing palette. If you'd like a specific gradient per report (e.g. Oil & Gas in dark navy, AI reports in orange), tell me and I'll map them explicitly.