export type Sector =
  | "Automotive"
  | "Textiles"
  | "Chemicals"
  | "Food Processing"
  | "Engineering"
  | "Electronics";

export type CompanyType = "MSME" | "Enterprise" | "Supplier" | "Export-focused";

export type ValueProp =
  | "Productivity Improvement"
  | "Quality Improvement"
  | "Traceability"
  | "Downtime Reduction"
  | "Energy Efficiency"
  | "Sustainability"
  | "Export Readiness"
  | "Workforce Efficiency";

export interface KPI {
  label: string;
  value: string;
  direction: "up" | "down" | "flat";
}

export interface CaseStudy {
  slug: string;
  company: string;
  headline: string;
  summary: string;
  challenge: string;
  approach: string;
  sector: Sector;
  state: string;
  companyType: CompanyType;
  valueProps: ValueProp[];
  durationMonths: number;
  companySize: string;
  metric: KPI;
  kpis: KPI[];
  challengePoints: string[];
  approachSteps: { title: string; desc: string }[];
  capabilities: string[];
  beforeAfter: { label: string; before: string; after: string }[];
  featured?: boolean;
}

export const sectors: Sector[] = [
  "Automotive",
  "Textiles",
  "Chemicals",
  "Food Processing",
  "Engineering",
  "Electronics",
];

export const states = [
  "Tamil Nadu",
  "Maharashtra",
  "Gujarat",
  "Karnataka",
  "Haryana",
  "Telangana",
  "Punjab",
  "Uttar Pradesh",
];

export const companyTypes: CompanyType[] = ["MSME", "Enterprise", "Supplier", "Export-focused"];

export const valueProps: ValueProp[] = [
  "Productivity Improvement",
  "Quality Improvement",
  "Traceability",
  "Downtime Reduction",
  "Energy Efficiency",
  "Sustainability",
  "Export Readiness",
  "Workforce Efficiency",
];

export const quickChips: ValueProp[] = [
  "Productivity Improvement",
  "Quality Improvement",
  "Energy Efficiency",
  "Traceability",
  "Export Readiness",
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "abc-components-production-visibility",
    company: "ABC Components",
    headline: "Improved production visibility and reduced downtime using digital monitoring",
    summary:
      "A Tier-2 auto component supplier digitised shop-floor monitoring to gain real-time visibility into machine performance and unplanned stoppages.",
    challenge:
      "Frequent unplanned downtime and limited shop-floor visibility were affecting OEM delivery commitments.",
    approach:
      "Connected critical CNC and assembly stations, introduced a unified dashboard for line supervisors and rolled out daily performance huddles.",
    sector: "Automotive",
    state: "Tamil Nadu",
    companyType: "MSME",
    valueProps: ["Productivity Improvement", "Downtime Reduction", "Workforce Efficiency"],
    durationMonths: 6,
    companySize: "180 employees",
    metric: { label: "Downtime", value: "-18%", direction: "down" },
    kpis: [
      { label: "Downtime", value: "-18%", direction: "down" },
      { label: "Productivity", value: "+12%", direction: "up" },
      { label: "OEE", value: "+9 pts", direction: "up" },
      { label: "Rework", value: "-22%", direction: "down" },
    ],
    challengePoints: [
      "Manual shift reports with 24-hour lag",
      "No real-time view of machine stoppages",
      "Reactive maintenance culture",
    ],
    approachSteps: [
      { title: "Connect", desc: "Instrumented 22 critical machines with edge gateways." },
      { title: "Visualise", desc: "Deployed a unified live dashboard for supervisors." },
      { title: "Standardise", desc: "Introduced daily huddles using live data." },
    ],
    capabilities: ["Real-time monitoring", "Digital huddles", "Loss analysis", "Operator empowerment"],
    beforeAfter: [
      { label: "Downtime per week", before: "18 hrs", after: "11 hrs" },
      { label: "Reporting lag", before: "24 hrs", after: "Live" },
      { label: "OEE", before: "58%", after: "67%" },
    ],
    featured: true,
  },
  {
    slug: "vastra-textiles-quality-systems",
    company: "Vastra Textiles",
    headline: "Strengthened quality systems and lifted first-pass yield across weaving lines",
    summary:
      "A mid-sized textile manufacturer reimagined its quality systems to reduce defects and improve export consistency.",
    challenge:
      "Inconsistent fabric quality and a high rejection rate were limiting export opportunities.",
    approach:
      "Standardised inspection protocols, digitised defect capture and introduced operator-led quality circles.",
    sector: "Textiles",
    state: "Gujarat",
    companyType: "Export-focused",
    valueProps: ["Quality Improvement", "Export Readiness", "Workforce Efficiency"],
    durationMonths: 9,
    companySize: "420 employees",
    metric: { label: "First-pass yield", value: "+15%", direction: "up" },
    kpis: [
      { label: "First-pass yield", value: "+15%", direction: "up" },
      { label: "Rejections", value: "-28%", direction: "down" },
      { label: "Export orders", value: "+20%", direction: "up" },
      { label: "Customer complaints", value: "-35%", direction: "down" },
    ],
    challengePoints: [
      "High variability across shifts",
      "Limited traceability of defects",
      "Manual QC paperwork",
    ],
    approachSteps: [
      { title: "Standardise", desc: "Unified inspection SOPs across lines." },
      { title: "Digitise", desc: "Tablet-based defect capture at every loom." },
      { title: "Engage", desc: "Weekly quality circles led by operators." },
    ],
    capabilities: ["Digital QC", "SOP standardisation", "Operator engagement", "Export compliance"],
    beforeAfter: [
      { label: "First-pass yield", before: "72%", after: "87%" },
      { label: "Rejections", before: "6.2%", after: "4.5%" },
      { label: "Export share", before: "30%", after: "50%" },
    ],
    featured: true,
  },
  {
    slug: "prakriti-chem-energy-optimisation",
    company: "Prakriti Chem",
    headline: "Cut specific energy consumption with smart utility monitoring",
    summary:
      "A specialty chemicals plant achieved meaningful energy savings by monitoring utility consumption and tightening process controls.",
    challenge: "Rising utility costs and limited visibility into department-level consumption.",
    approach:
      "Sub-metered key utilities, set departmental energy budgets and introduced weekly energy reviews.",
    sector: "Chemicals",
    state: "Maharashtra",
    companyType: "Enterprise",
    valueProps: ["Energy Efficiency", "Sustainability"],
    durationMonths: 8,
    companySize: "650 employees",
    metric: { label: "Energy use", value: "-14%", direction: "down" },
    kpis: [
      { label: "Specific energy", value: "-14%", direction: "down" },
      { label: "Utility cost", value: "-11%", direction: "down" },
      { label: "CO₂ intensity", value: "-12%", direction: "down" },
      { label: "Steam loss", value: "-19%", direction: "down" },
    ],
    challengePoints: [
      "No department-wise energy view",
      "Utility losses going unnoticed",
      "Limited accountability for consumption",
    ],
    approachSteps: [
      { title: "Measure", desc: "Sub-metered key utilities across blocks." },
      { title: "Target", desc: "Set departmental energy budgets." },
      { title: "Review", desc: "Weekly leadership energy reviews." },
    ],
    capabilities: ["Energy monitoring", "Sustainability KPIs", "Accountability culture"],
    beforeAfter: [
      { label: "Energy (kWh/MT)", before: "412", after: "354" },
      { label: "Steam losses", before: "9.1%", after: "7.4%" },
      { label: "CO₂ intensity", before: "Index 100", after: "Index 88" },
    ],
    featured: true,
  },
  {
    slug: "annapurna-foods-traceability",
    company: "Annapurna Foods",
    headline: "End-to-end batch traceability for a fast-growing food processor",
    summary:
      "Introduced batch-level traceability across receiving, processing and dispatch to meet retailer requirements.",
    challenge: "Manual batch records made recalls slow and risky.",
    approach: "Implemented barcode-based batch tracking from raw material to dispatch.",
    sector: "Food Processing",
    state: "Karnataka",
    companyType: "MSME",
    valueProps: ["Traceability", "Quality Improvement"],
    durationMonths: 5,
    companySize: "210 employees",
    metric: { label: "Recall time", value: "-70%", direction: "down" },
    kpis: [
      { label: "Recall time", value: "-70%", direction: "down" },
      { label: "Audit findings", value: "-60%", direction: "down" },
      { label: "Customer trust score", value: "+18%", direction: "up" },
      { label: "Manual records", value: "-90%", direction: "down" },
    ],
    challengePoints: [
      "Paper batch cards prone to errors",
      "Slow root-cause investigations",
      "Retailer audit gaps",
    ],
    approachSteps: [
      { title: "Barcode", desc: "Tagged every batch at receiving." },
      { title: "Track", desc: "Captured movement at each process stage." },
      { title: "Trace", desc: "One-click recall lookups for QA." },
    ],
    capabilities: ["Batch traceability", "Recall readiness", "Compliance reporting"],
    beforeAfter: [
      { label: "Recall lookup", before: "6 hrs", after: "<1 hr" },
      { label: "Audit findings", before: "12 / audit", after: "5 / audit" },
    ],
  },
  {
    slug: "shakti-engineering-oee",
    company: "Shakti Engineering",
    headline: "Lifted OEE on critical machining lines",
    summary:
      "A heavy engineering supplier improved OEE through structured loss analysis and operator empowerment.",
    challenge: "OEE stuck below 55% on critical machining centres.",
    approach: "Structured loss analysis and daily performance management at the line level.",
    sector: "Engineering",
    state: "Haryana",
    companyType: "Supplier",
    valueProps: ["Productivity Improvement", "Workforce Efficiency"],
    durationMonths: 7,
    companySize: "340 employees",
    metric: { label: "OEE", value: "+12 pts", direction: "up" },
    kpis: [
      { label: "OEE", value: "+12 pts", direction: "up" },
      { label: "Setup time", value: "-25%", direction: "down" },
      { label: "Rework", value: "-18%", direction: "down" },
      { label: "On-time delivery", value: "+9%", direction: "up" },
    ],
    challengePoints: ["Long setup times", "Unclear loss buckets", "Limited line-level ownership"],
    approachSteps: [
      { title: "Diagnose", desc: "Loss-tree analysis on bottleneck lines." },
      { title: "Standardise", desc: "Quick-changeover playbook." },
      { title: "Empower", desc: "Line-level daily performance boards." },
    ],
    capabilities: ["OEE management", "SMED", "Daily performance management"],
    beforeAfter: [
      { label: "OEE", before: "54%", after: "66%" },
      { label: "Setup", before: "55 min", after: "41 min" },
    ],
  },
  {
    slug: "nova-electronics-export-readiness",
    company: "Nova Electronics",
    headline: "Built export-grade quality and traceability foundations",
    summary:
      "An electronics MSME prepared for global supply contracts by upgrading quality, traceability and documentation systems.",
    challenge: "Global buyers required traceability and audit-readiness the plant could not yet demonstrate.",
    approach: "Built a structured roadmap covering quality systems, traceability and operator training.",
    sector: "Electronics",
    state: "Telangana",
    companyType: "Export-focused",
    valueProps: ["Export Readiness", "Quality Improvement", "Traceability"],
    durationMonths: 10,
    companySize: "260 employees",
    metric: { label: "Export readiness", value: "+ tier", direction: "up" },
    kpis: [
      { label: "Audit pass rate", value: "+30%", direction: "up" },
      { label: "Customer complaints", value: "-45%", direction: "down" },
      { label: "Documentation time", value: "-50%", direction: "down" },
      { label: "Export enquiries", value: "+22%", direction: "up" },
    ],
    challengePoints: ["Manual documentation", "Gaps in traceability", "Inconsistent quality systems"],
    approachSteps: [
      { title: "Assess", desc: "Mapped gaps vs. buyer requirements." },
      { title: "Build", desc: "Implemented digital traceability and SOPs." },
      { title: "Certify", desc: "Trained teams and aligned audits." },
    ],
    capabilities: ["Quality systems", "Traceability", "Audit readiness", "Workforce capability"],
    beforeAfter: [
      { label: "Audit pass", before: "62%", after: "92%" },
      { label: "Doc cycle", before: "8 hrs", after: "4 hrs" },
    ],
  },
];

export const findCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);

export const relatedCaseStudies = (slug: string, limit = 4) => {
  const current = findCaseStudy(slug);
  if (!current) return [];
  return caseStudies
    .filter((c) => c.slug !== slug)
    .map((c) => {
      let score = 0;
      if (c.sector === current.sector) score += 3;
      if (c.state === current.state) score += 1;
      if (c.companyType === current.companyType) score += 1;
      score += c.valueProps.filter((v) => current.valueProps.includes(v)).length;
      return { c, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.c);
};
