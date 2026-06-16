import type { OutcomeId } from "./solutions";
import { caseStudies } from "./caseStudies";
import { reports } from "./reports";

export interface OutcomeContext {
  challenge: string;
  approach: string;
  benefit: string;
}

export interface OutcomeMeta {
  id: OutcomeId;
  title: string;
  oneLiner: string;
  context: OutcomeContext;
  // Keywords used to surface matching case studies & reports
  keywords: string[];
  // Curated E-Directory entries (lightweight stubs)
  directory: { name: string; type: string; focus: string }[];
}

export const outcomeDetails: Partial<Record<OutcomeId, OutcomeMeta>> = {
  productivity: {
    id: "productivity",
    title: "Improve productivity",
    oneLiner: "Lift throughput and OEE by reducing manual handling and stabilising shopfloor performance.",
    context: {
      challenge: "Low OEE and manual reporting",
      approach: "Machine monitoring, MES and OEE dashboards",
      benefit: "Higher throughput and faster decisions",
    },
    keywords: ["productivity", "oee", "throughput", "efficiency", "automation"],
    directory: [
      { name: "B&R Industrial Automation", type: "Solution Provider", focus: "Smart factory & OEE" },
      { name: "Siemens Digital Industries", type: "Solution Provider", focus: "MES & automation" },
    ],
  },
  quality: {
    id: "quality",
    title: "Improve quality",
    oneLiner: "Catch defects at source with inline inspection, SPC and digital QA workflows.",
    context: {
      challenge: "Inconsistent batch quality and rework",
      approach: "Vision systems, SPC and QMS workflows",
      benefit: "Lower defects and stable Cpk",
    },
    keywords: ["quality", "defect", "inspection", "spc", "vision"],
    directory: [
      { name: "Cognex India", type: "Solution Provider", focus: "Machine vision QA" },
      { name: "Quality Council of India", type: "Standards Body", focus: "QMS & certifications" },
    ],
  },
  traceability: {
    id: "traceability",
    title: "Strengthen traceability",
    oneLiner: "Track materials, batches and serials end-to-end across the value chain.",
    context: {
      challenge: "Manual batch records",
      approach: "QR/barcode tracking, ERP/MES integration",
      benefit: "Faster audits and better defect tracking",
    },
    keywords: ["traceability", "batch", "serial", "track", "genealogy", "lot"],
    directory: [
      { name: "GS1 India", type: "Standards Body", focus: "Barcoding & serialization" },
      { name: "Zebra Technologies", type: "Solution Provider", focus: "Track & trace hardware" },
    ],
  },
  downtime: {
    id: "downtime",
    title: "Reduce downtime",
    oneLiner: "Anticipate failures and minimise unplanned stoppages on critical assets.",
    context: {
      challenge: "Unplanned breakdowns on critical lines",
      approach: "Condition monitoring and predictive maintenance",
      benefit: "Higher MTBF and asset availability",
    },
    keywords: ["downtime", "maintenance", "predictive", "vibration", "asset", "breakdown"],
    directory: [
      { name: "Schaeffler India", type: "Solution Provider", focus: "Condition monitoring" },
      { name: "Bosch Rexroth", type: "Solution Provider", focus: "Predictive analytics" },
    ],
  },
  energy: {
    id: "energy",
    title: "Improve energy efficiency",
    oneLiner: "Cut energy intensity and emissions through real-time consumption insight.",
    context: {
      challenge: "High energy intensity per unit output",
      approach: "Sub-metering, analytics and load management",
      benefit: "Lower energy cost and emissions",
    },
    keywords: ["energy", "emission", "sustainab", "decarbon", "carbon", "esg"],
    directory: [
      { name: "Schneider Electric India", type: "Solution Provider", focus: "Energy management" },
      { name: "Bureau of Energy Efficiency", type: "Government Body", focus: "Energy standards" },
    ],
  },
  planning: {
    id: "planning",
    title: "Improve planning",
    oneLiner: "Sharpen production planning with forecasts, live data and smarter resource allocation.",
    context: {
      challenge: "Schedule misses and reactive planning",
      approach: "APS, demand forecasting and live scheduling",
      benefit: "Higher on-time-in-full and lower WIP",
    },
    keywords: ["planning", "schedul", "forecast", "supply", "scm", "logistic"],
    directory: [
      { name: "SAP India", type: "Solution Provider", focus: "APS & supply planning" },
      { name: "o9 Solutions", type: "Solution Provider", focus: "Demand & supply planning" },
    ],
  },
};

const matches = (haystack: string, keywords: string[]) => {
  const h = haystack.toLowerCase();
  return keywords.some((k) => h.includes(k));
};

export const featuredCasesForOutcome = (id: OutcomeId, limit = 4) => {
  const meta = outcomeDetails[id];
  if (!meta) return [];
  // Prefer the explicit `outcomes` tag on each case study; fall back to keyword match.
  const tagged = caseStudies.filter((c) => (c.outcomes || []).includes(id));
  if (tagged.length) return tagged.slice(0, limit);
  const hits = caseStudies.filter((c) =>
    matches(
      `${c.headline} ${c.summary} ${c.challenge} ${c.approach} ${(c.valueProps || []).join(" ")} ${(c.capabilities || []).join(" ")}`,
      meta.keywords,
    ),
  );
  const pool = hits.length ? hits : caseStudies;
  return pool.slice(0, limit);
};

export const featuredReportsForOutcome = (id: OutcomeId, limit = 4) => {
  const meta = outcomeDetails[id];
  if (!meta) return [];
  // Prefer the explicit `outcomes` tag on each report; fall back to keywords.
  const tagged = reports.filter((r) => (r.outcomes || []).includes(id));
  if (tagged.length) return tagged.slice(0, limit);
  const hits = reports.filter((r) =>
    matches(`${r.title} ${r.summary} ${(r.tags || []).join(" ")} ${r.domain} ${r.technology}`, meta.keywords),
  );
  const pool = hits.length ? hits : reports;
  return pool.slice(0, limit);
};
