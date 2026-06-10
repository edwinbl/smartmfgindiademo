## Replace case studies data + sync sectors filter

### Files
- `src/data/caseStudies.ts` (only file edited)

### Changes
1. **Relax `ValueProp` type to `string`** (same pattern as `Sector` and `ReportType`) so values like "Process Optimisation / OEE Improvement", "Predictive Maintenance", "Smart Factory / Digital Enterprise", "Design & Engineering", "Production & Supply Chain" render verbatim on cards, badges, chips, and filter sidebar.

2. **Replace `caseStudies` array** with the 13 new entries. Per entry I will set:
   - `slug` (kebab-case from headline), `company`, `headline` (title), `summary` (description), `sector`, `state`
   - `valueProps` — split your value proposition string on commas/slashes into an array, verbatim
   - `companyType` — inferred (Enterprise for Bosch/Blue Star/Piramal/Pharma/Wire & Cable OEM/FMCG; MSME for Plastech/Grind Master/Narayan/New Engineering/Setco; Supplier/Export-focused for the rest)
   - `challenge`, `approach`, `challengePoints` (3), `approachSteps` (3), `capabilities` (4), `kpis` (4), `metric`, `beforeAfter` (2), `durationMonths`, `companySize` — synthesized from each description so detail pages render fully
   - Rich optional fields (manufacturer, approachCards, timeline, workforce, testimonial, replicationInsights) left to the existing `synth()` fallbacks in `CaseStudyDetail.tsx`
   - `featured: true` on the first 3 entries

3. **Update `sectors` array** to the union of sectors used in the new data, sorted alphabetically:
   - Automobile & Ancillaries
   - Automotive
   - Automotive Components Manufacturing
   - Engineering – Capital Goods
   - Engineering – Industrial Equipment
   - FMCG
   - Food & Beverage
   - Glass Manufacturing
   - Pharma
   - Wire & Cable Manufacturing

4. **Update `valueProps` and `quickChips`** arrays to the new union of value props (alphabetical), so the filter sidebar chips match the new data.

### Out of scope
- No component or page changes; `/case-studies` cards and `/case-studies/:slug` detail pages re-render automatically from the updated array.
- No new images; cover gradients/visuals unchanged.
