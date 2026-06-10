## Restructure Case Study Detail page

### Files
- `src/data/caseStudies.ts` — extend `CaseStudy` interface, add new sector, add Siemens India seed entry
- `src/pages/CaseStudyDetail.tsx` — full page body restructure + extend `synth()` fallbacks

### Section order (replaces current body)
1. Hero (unchanged)
2. Sidebar — adds Value Proposition + Technologies chip groups
3. Executive Summary
4. About \<Solution Provider\>
5. About the Company
6. Business Challenges (title + supporting copy per item)
7. Industry 4.0 Solution — grouped capability blocks (title + bullet list)
8. Business Outcomes (title + impact cards)
9. Key Benefits at a Glance (2-col table)
10. Technology Stack (chip grid)
11. Change Management Approach
12. Related Solution Areas (chip grid)

### Sections removed to avoid duplication
Implementation Journey, People & Workforce Transformation, Testimonial, Replication Insights.

### Data model additions on `CaseStudy`
```ts
technologies?: string[];
solutionGroups?: { title: string; points: string[] }[];
businessChallenges?: { title: string; desc: string }[];
businessOutcomes?: { title: string; impact: string }[];
benefitsTable?: { area: string; impact: string }[];
relatedSolutionAreas?: string[];
```

### Fallback synthesis (in CaseStudyDetail.tsx `synth()`)
- technologies ← capabilities
- solutionGroups ← approachSteps + capabilities grouped
- businessChallenges ← challengePoints
- businessOutcomes ← kpis mapped to title+impact
- benefitsTable ← beforeAfter
- relatedSolutionAreas ← valueProps + capabilities

### Siemens India seed (14th entry)
Adds `siemens-warehouse-digital-enterprise` with full content: Executive Summary, About Siemens India, About the Company (warehouse automation offerings), 7 Business Challenges, 7 Solution Groups, 5 Business Outcomes, 6-row Benefits Table, 9 Technologies, Change Management text, 9 Related Solution Areas. Adds sector "Warehouse Automation & Material Handling" to the sectors filter list.

### Out of scope
- `/case-studies` index cards (unchanged)
- No new images
- Other 13 case studies render with synthesised fallbacks for the new sections
