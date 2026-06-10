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

export interface SolutionProvider {
  name: string;
  overview: string;
  capabilities: string[];
  industries?: string[];
  technologies?: string[];
}

export interface ManufacturerProfile {
  industry: string;
  footprint: string;
  highlights: string[];
}

export interface DiscoveryStep { title: string; desc: string }
export interface ComplexityStat { value: string; label: string }
export interface TimelineStep { phase: string; title: string; desc: string }
export interface TeamRole { role: string; scope: string }
export interface ChangeAction { challenge: string; actions: string[]; outcome: string }
export interface ArchComponent { name: string; layer: string; desc: string }
export interface SolutionFeature { title: string; desc: string }
export interface ImplementationChallenge { challenge: string; mitigation: string; outcome: string }
export interface OutcomeGroup { operational: KPI[]; business: KPI[]; user: string[] }
export interface ResourceItem { title: string; type: string; href?: string }
export interface Testimonial { quote: string; name: string; role: string; company: string }
export interface ApproachCard { title: string; desc: string }
export interface WorkforceShift { before: string; after: string[] }

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
  // Rich blueprint fields (optional, with smart fallbacks)
  categoryTags?: string[];
  executiveSummary?: string;
  solutionProvider?: SolutionProvider;
  manufacturer?: ManufacturerProfile;
  discoveryFlow?: DiscoveryStep[];
  complexity?: ComplexityStat[];
  timeline?: TimelineStep[];
  team?: TeamRole[];
  changeManagement?: ChangeAction;
  architecture?: ArchComponent[];
  solutionFeatures?: SolutionFeature[];
  implementationChallenges?: ImplementationChallenge[];
  outcomes?: OutcomeGroup;
  resources?: ResourceItem[];
  approachCards?: ApproachCard[];
  workforceTransformation?: WorkforceShift;
  testimonial?: Testimonial;
  replicationInsights?: string[];
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
    categoryTags: ["Automotive", "MSME", "Digital Monitoring", "Industry 4.0"],
    executiveSummary:
      "ABC Components, a Tier-2 automotive supplier, digitised its shop floor with real-time machine monitoring to eliminate reporting lag, expose hidden losses and unlock a measurable lift in OEE — all within a 6-month programme.",
    solutionProvider: {
      name: "Aarav Smart Systems",
      overview:
        "An accredited Industry 4.0 partner specialising in shop-floor digitisation, IIoT enablement and operator-driven performance programmes for Indian discrete manufacturers.",
      capabilities: ["IIoT Enablement", "Real-time Monitoring", "Analytics", "Operator Apps", "Change Management"],
      industries: ["Automotive", "Engineering", "Electronics"],
      technologies: ["Edge IoT", "Cloud Analytics", "Mobile Dashboards", "Loss Analytics"],
    },
    manufacturer: {
      industry: "Automotive components — precision machining & assembly",
      footprint: "Single-plant Tier-2 supplier in Tamil Nadu serving leading OEMs",
      highlights: ["180 employees", "22 critical CNC stations", "Tier-2 to multiple OEMs", "ISO 9001 certified"],
    },
    approachCards: [
      { title: "Connect Critical Assets", desc: "Edge gateways on 22 CNC and assembly stations capturing live state and stoppage signals." },
      { title: "Unified Live Dashboard", desc: "One supervisor view across lines replacing 24-hour paper reports." },
      { title: "Operator-friendly UX", desc: "Designed for shop-floor use — minimal training, glove-friendly, mobile-first." },
      { title: "Daily Performance Huddles", desc: "Live data anchoring 15-minute shift huddles to drive accountability." },
    ],
    workforceTransformation: {
      before: "Supervisors chasing paper shift reports and reacting to stoppages a day late.",
      after: [
        "Live loss analysis at the line",
        "Operator-led problem-solving in daily huddles",
        "Maintenance shifted from reactive to planned",
        "Supervisors coaching on data, not policing",
      ],
    },
    outcomes: {
      operational: [
        { label: "Downtime", value: "-18%", direction: "down" },
        { label: "OEE", value: "+9 pts", direction: "up" },
        { label: "Reporting lag", value: "Live", direction: "down" },
      ],
      business: [
        { label: "Productivity", value: "+12%", direction: "up" },
        { label: "Rework", value: "-22%", direction: "down" },
        { label: "OEM delivery score", value: "+15%", direction: "up" },
      ],
      user: [
        "Real-time visibility for supervisors",
        "Faster stoppage-to-response cycle",
        "Operator pride in daily scoreboards",
        "Confident OEM delivery commitments",
      ],
    },
    testimonial: {
      quote:
        "Going from 24-hour paper reports to a live dashboard changed how our supervisors lead. Losses we never knew existed are now visible, and the team owns them.",
      name: "R. Subramanian",
      role: "Plant Head",
      company: "ABC Components",
    },
    replicationInsights: [
      "Start with the bottleneck lines, not the whole plant",
      "Anchor daily huddles in the live data from day one",
      "Co-design the dashboard with supervisors, not for them",
      "Treat operators as problem-solvers, not data sources",
      "Plan for offline-first capture in older sheds",
    ],
    resources: [
      { title: "Full Case Study PDF", type: "PDF" },
      { title: "Shop-floor Monitoring Framework", type: "Framework" },
      { title: "Automotive Industry 4.0 Outlook", type: "Report" },
      { title: "Daily Performance Management Playbook", type: "Guide" },
    ],
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
    categoryTags: ["Textiles", "Quality Systems", "Industry 4.0"],
    executiveSummary:
      "Vastra Textiles re-engineered its quality operating system across weaving — combining digital defect capture, standardised inspection protocols and operator-led quality circles — to unlock export-grade consistency and a step change in first-pass yield.",
    solutionProvider: {
      name: "Aarav Smart Systems",
      overview:
        "An industrial digital solutions partner specialising in shop-floor quality systems, IIoT enablement and operator engagement programmes for discrete and process manufacturers.",
      capabilities: ["Quality Systems", "IIoT Enablement", "Analytics", "Operator Apps", "Change Management"],
      industries: ["Textiles", "Auto Components", "Food Processing"],
      technologies: ["Edge IoT", "Cloud Analytics", "Mobile QC Apps", "Computer Vision"],
    },
    manufacturer: {
      industry: "Textile manufacturing — weaving & finishing",
      footprint: "3 plants across Gujarat with 1,200+ looms serving domestic and export markets",
      highlights: ["420 employees", "50% export share post-programme", "ISO 9001 certified", "Tier-1 supplier to global brands"],
    },
    discoveryFlow: [
      { title: "Manual QC Paperwork", desc: "Defect logs captured on paper across shifts." },
      { title: "Export Pressure", desc: "Global buyers demanded tighter consistency and traceability." },
      { title: "Rising Rejections", desc: "Rejection rate trending above 6% across lines." },
      { title: "Variability Across Shifts", desc: "Inspection criteria interpreted differently across teams." },
      { title: "Need for Digital Quality OS", desc: "Recognised need for a unified, real-time quality system." },
    ],
    complexity: [
      { value: "1,200+", label: "Active Looms" },
      { value: "3", label: "Plants Integrated" },
      { value: "120+", label: "Defect Categories" },
      { value: "24x7", label: "Continuous Operations" },
    ],
    timeline: [
      { phase: "01", title: "Discovery Workshop", desc: "Quality baseline and gap diagnostic across plants." },
      { phase: "02", title: "Requirement Finalisation", desc: "SOPs, defect taxonomy and dashboard scope locked." },
      { phase: "03", title: "Proof of Concept", desc: "Two pilot lines instrumented with tablet-based capture." },
      { phase: "04", title: "Full Solution Rollout", desc: "Scaled across 1,200+ looms in 3 plants." },
      { phase: "05", title: "Deployment & Training", desc: "Operator and supervisor enablement programmes." },
      { phase: "06", title: "Value Realisation", desc: "Sustained quality circles and continuous improvement." },
    ],
    team: [
      { role: "Executive Sponsor", scope: "Plant Director, Vastra" },
      { role: "Project Manager", scope: "Joint Vastra–Aarav PMO" },
      { role: "Quality Lead", scope: "Defect taxonomy & SOP owner" },
      { role: "IIoT Consultant", scope: "Tablet & edge rollout" },
      { role: "Analytics Lead", scope: "Dashboard & insights design" },
      { role: "Change Champion", scope: "Operator engagement & circles" },
    ],
    changeManagement: {
      challenge: "Inspector resistance to digital capture and fear of being monitored.",
      actions: [
        "Hands-on training programmes per shift",
        "Tool capability workshops with supervisors",
        "Defect simulation drills",
        "Historical data walkthroughs",
        "Onsite collaboration with line teams",
      ],
      outcome: "Strong inspector buy-in, voluntary quality circles and visible pride in shift-level scoreboards.",
    },
    architecture: [
      { name: "Edge Capture Tablets", layer: "Capture", desc: "Tablets at every loom for real-time defect capture." },
      { name: "Defect Taxonomy Engine", layer: "Standardisation", desc: "Unified 120+ defect codes across plants." },
      { name: "Quality Data Lake", layer: "Data", desc: "Centralised store of QC events across plants." },
      { name: "Analytics & Dashboards", layer: "Insights", desc: "First-pass yield, top defects and shift comparisons." },
      { name: "Quality Circles Workflow", layer: "Action", desc: "Action items and CAPA tracking by line." },
      { name: "Export Compliance Pack", layer: "Reporting", desc: "Auto-generated reports for buyer audits." },
    ],
    solutionFeatures: [
      { title: "Digital Defect Capture", desc: "Tablet-based capture replacing paper QC." },
      { title: "Standardised Taxonomy", desc: "Unified defect codes across all plants." },
      { title: "Real-time Dashboards", desc: "Live FPY and rejection visibility for supervisors." },
      { title: "Shift Scoreboards", desc: "Line-level scoreboards to drive engagement." },
      { title: "Quality Circles Workflow", desc: "Action tracking from circle to closure." },
      { title: "Audit-ready Reporting", desc: "Auto-generated buyer audit packs." },
      { title: "Defect Trend Analytics", desc: "Pareto and trend views for root cause." },
      { title: "Mobile-first UX", desc: "Designed for shop-floor use, even with gloves." },
    ],
    implementationChallenges: [
      {
        challenge: "Operator resistance to digital capture",
        mitigation: "Hands-on training, peer champions and visible scoreboards",
        outcome: "95% voluntary adoption within 8 weeks",
      },
      {
        challenge: "Inconsistent defect interpretation",
        mitigation: "Co-created defect taxonomy with image references",
        outcome: "Inter-shift variance reduced by 60%",
      },
      {
        challenge: "Connectivity gaps in older sheds",
        mitigation: "Edge caching with offline-first capture",
        outcome: "Zero data loss across rollout",
      },
      {
        challenge: "Buyer audit alignment",
        mitigation: "Pre-mapped reports to top-3 buyer audit templates",
        outcome: "Audit prep time reduced by 70%",
      },
    ],
    outcomes: {
      operational: [
        { label: "First-pass yield", value: "+15%", direction: "up" },
        { label: "Rejections", value: "-28%", direction: "down" },
        { label: "Reporting lag", value: "-90%", direction: "down" },
      ],
      business: [
        { label: "Export orders", value: "+20%", direction: "up" },
        { label: "Customer complaints", value: "-35%", direction: "down" },
        { label: "Export share", value: "30% → 50%", direction: "up" },
      ],
      user: [
        "Greater visibility for supervisors",
        "Faster defect-to-decision cycle",
        "Improved cross-shift communication",
        "Operator pride and engagement",
      ],
    },
    resources: [
      { title: "Full Case Study PDF", type: "PDF" },
      { title: "Quality Systems Implementation Framework", type: "Framework" },
      { title: "Textile Industry 4.0 Outlook", type: "Report" },
      { title: "Operator Engagement Best Practice Guide", type: "Guide" },
    ],
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
