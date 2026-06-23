# Product Requirements Document Generation

Generate a comprehensive PRD based on the current state of the Smart Manufacturing India platform, derived from actual code, routes, data files, and components — no invented features.

## Approach

1. **Audit the codebase** to enumerate real modules:
   - Routes from `src/App.tsx`
   - Pages in `src/pages/` (Index, About, Contact, ReportsIndex/Detail, CaseStudiesIndex/Detail, ProgrammesIndex/Detail, EventsIndex/Detail, SolutionsIndex/Detail, OutcomeDetail, Directories, DirectoryExplorer, ReadinessAssessment, AssessmentDetail, legal pages)
   - Data sources (`src/data/` — reports.ts, caseStudies.ts, programmes.ts, events.ts, solutions.ts, outcomeDetails.ts)
   - Homepage sections from `src/components/wireframe/`
   - Feature components (assessment, reports filters, outcome explorer, chatbot FAB, cookie consent, etc.)

2. **Structure the PRD** with these sections:
   - Executive Summary & Product Vision
   - Target Users & Personas (MSMEs, large manufacturers, ecosystem partners)
   - Information Architecture (sitemap of all routes)
   - Module-by-Module Requirements:
     - Homepage (hero, outcome explorer, assessment teaser, programmes, resources, awards, ecosystem, leader speak, chatbot)
     - Knowledge Hub / Solutions (6 outcomes mapping)
     - Reports module (13 reports, filters, themes/sector explorers, detail page)
     - Case Studies (61 entries, filters, detail page)
     - Programmes module (listing, filters, detail with batches, registration)
     - Events module (signature events, types, detail variants — summit/workshop/webinar/roundtable)
     - Readiness Assessment (hero card, 4-step flow, assessment detail)
     - E-Directories (India, Singapore)
     - About, Contact, Legal pages
   - Cross-cutting features (SEO, analytics, prefetch, cookie consent, accessibility)
   - Data model summary (content sources, no backend currently)
   - Tech stack & non-functional notes

3. **Deliver as DOCX** to `/mnt/documents/SmartMfgIndia-PRD.docx` using the docx skill, with proper heading hierarchy, tables for route/module summaries, and a TOC. Include a `<presentation-artifact>` tag in the final reply.

## Deliverable

A single downloadable PRD (.docx, ~15-25 pages) grounded entirely in the current codebase — every feature listed maps to an actual route, component, or data file.

## Out of scope

- No code changes
- No invented roadmap items, KPIs, or future features unless explicitly grounded in existing TODOs
- Not generating a PDF version (can add if requested)
