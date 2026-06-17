import {
  Gauge,
  ShieldCheck,
  Network,
  Timer,
  Leaf,
  Globe2,
  GraduationCap,
  Eye,
  Cpu,
  Wifi,
  Activity,
  Zap,
  Award,
  Wrench,
  Boxes,
  BarChart3,
  Users,
  Sprout,
  type LucideIcon,
} from "lucide-react";

export type OutcomeId =
  | "productivity"
  | "quality"
  | "traceability"
  | "downtime"
  | "energy"
  | "planning"
  | "export"
  | "workforce"
  | "visibility";

export interface Outcome {
  id: OutcomeId;
  title: string;
  desc: string;
  icon: LucideIcon;
  accent: "navy" | "orange" | "green" | "red";
  solutionCount: number;
  caseCount: number;
}

export const outcomes: Outcome[] = [
  { id: "productivity", title: "Improve productivity", desc: "Boost operational efficiency by reducing manual tasks and optimizing machine and workforce performance.", icon: Gauge, accent: "navy", solutionCount: 6, caseCount: 24 },
  { id: "quality", title: "Improve quality", desc: "Standardise quality systems and reduce defects across the shopfloor.", icon: ShieldCheck, accent: "green", solutionCount: 4, caseCount: 18 },
  { id: "traceability", title: "Strengthen traceability", desc: "Track materials, processes and products end-to-end across the value chain.", icon: Network, accent: "orange", solutionCount: 3, caseCount: 12 },
  { id: "downtime", title: "Reduce downtime", desc: "Predict and prevent machine downtime with smart monitoring and analytics.", icon: Timer, accent: "red", solutionCount: 4, caseCount: 15 },
  { id: "energy", title: "Improve energy efficiency", desc: "Cut energy costs and emissions through real-time consumption insight.", icon: Zap, accent: "green", solutionCount: 3, caseCount: 11 },
  { id: "planning", title: "Improve planning", desc: "Improve production planning with real-time insights, forecasting and smarter resource allocation.", icon: BarChart3, accent: "navy", solutionCount: 4, caseCount: 10 },
  { id: "export", title: "Export Readiness", desc: "Meet evolving global standards and benchmarks.", icon: Globe2, accent: "navy", solutionCount: 5, caseCount: 9 },
  { id: "workforce", title: "Workforce Capability", desc: "Build skills for Industry 4.0 adoption.", icon: GraduationCap, accent: "orange", solutionCount: 4, caseCount: 14 },
  { id: "visibility", title: "Digital Visibility", desc: "Real-time insight into shopfloor operations.", icon: Eye, accent: "navy", solutionCount: 5, caseCount: 20 },
];

const EXPLORER_OUTCOME_IDS: OutcomeId[] = ["productivity", "quality", "traceability", "downtime", "energy", "planning"];
export const explorerOutcomes: Outcome[] = EXPLORER_OUTCOME_IDS
  .map((id) => outcomes.find((o) => o.id === id)!)
  .filter(Boolean);


export interface SolutionCategory {
  slug: string;
  name: string;
  summary: string;
  description: string;
  icon: LucideIcon;
  outcomes: OutcomeId[];
  caseCount: number;
  resourceCount: number;
  accent: "navy" | "orange" | "green" | "red";
  problems: { problem: string; solution: string; benefit: string }[];
}

export const solutionCategories: SolutionCategory[] = [
  {
    slug: "industrial-automation",
    name: "Industrial Automation",
    summary: "Automate manual and repetitive operations to unlock consistent output and throughput.",
    description:
      "Robotics, PLCs, motion control and integrated cells that remove manual handovers and stabilize cycle times.",
    icon: Cpu,
    outcomes: ["productivity", "quality", "downtime"],
    caseCount: 22,
    resourceCount: 14,
    accent: "navy",
    problems: [
      { problem: "Manual Processes", solution: "Robotic / cell automation", benefit: "+30% throughput" },
      { problem: "Repetitive Errors", solution: "PLC + vision control", benefit: "−55% defects" },
      { problem: "Low Operational Visibility", solution: "Integrated SCADA", benefit: "Real-time KPIs" },
      { problem: "High Downtime", solution: "Automated changeover", benefit: "−40% setup time" },
    ],
  },
  {
    slug: "iot-connectivity",
    name: "IoT & Connectivity",
    summary: "Connect machines and assets to unlock data-driven decision-making.",
    description: "Edge gateways, sensors and connectivity stacks that bring legacy and modern assets onto one fabric.",
    icon: Wifi,
    outcomes: ["visibility", "productivity", "downtime"],
    caseCount: 18,
    resourceCount: 12,
    accent: "orange",
    problems: [
      { problem: "Isolated Machines", solution: "Edge IoT gateways", benefit: "100% asset coverage" },
      { problem: "Manual Data Capture", solution: "Sensor instrumentation", benefit: "Live data feeds" },
      { problem: "Siloed Systems", solution: "OT/IT integration", benefit: "Unified view" },
    ],
  },
  {
    slug: "mes-production-visibility",
    name: "MES & Production Visibility",
    summary: "Real-time production tracking, scheduling and shopfloor execution.",
    description: "Manufacturing Execution Systems that synchronize planning, execution and reporting in real time.",
    icon: BarChart3,
    outcomes: ["visibility", "productivity", "quality"],
    caseCount: 16,
    resourceCount: 10,
    accent: "navy",
    problems: [
      { problem: "Paper-based reporting", solution: "Digital MES", benefit: "Live OEE" },
      { problem: "Schedule misses", solution: "Dynamic scheduling", benefit: "+22% on-time" },
      { problem: "Lost production data", solution: "Genealogy tracking", benefit: "Full audit trail" },
    ],
  },
  {
    slug: "energy-management",
    name: "Energy Management",
    summary: "Optimize energy use across utilities, processes and plants.",
    description: "Sub-metering, analytics and controls to reduce energy intensity and emissions.",
    icon: Zap,
    outcomes: ["energy", "visibility"],
    caseCount: 9,
    resourceCount: 8,
    accent: "green",
    problems: [
      { problem: "High energy bills", solution: "Sub-metering + analytics", benefit: "−18% energy" },
      { problem: "Peak load spikes", solution: "Load management", benefit: "Lower demand charges" },
    ],
  },
  {
    slug: "quality-management",
    name: "Quality Management",
    summary: "Inline quality, SPC and digital QA to lock in consistent output.",
    description: "Vision systems, SPC and QMS workflows that catch defects at source.",
    icon: Award,
    outcomes: ["quality", "traceability"],
    caseCount: 14,
    resourceCount: 9,
    accent: "green",
    problems: [
      { problem: "Defect rework", solution: "Inline vision QA", benefit: "−45% rework" },
      { problem: "Process drift", solution: "SPC dashboards", benefit: "Stable Cpk" },
    ],
  },
  {
    slug: "predictive-maintenance",
    name: "Predictive Maintenance",
    summary: "Anticipate failures before they cause downtime.",
    description: "Vibration, thermal and ML-driven failure prediction across critical assets.",
    icon: Wrench,
    outcomes: ["downtime", "productivity"],
    caseCount: 12,
    resourceCount: 7,
    accent: "red",
    problems: [
      { problem: "Unplanned breakdowns", solution: "Vibration analytics", benefit: "−35% downtime" },
      { problem: "Reactive maintenance", solution: "Condition-based plans", benefit: "+20% MTBF" },
    ],
  },
  {
    slug: "traceability-systems",
    name: "Traceability Systems",
    summary: "Lot, batch and serial traceability across the value chain.",
    description: "Serialization, barcoding and digital genealogy for regulated and export-driven operations.",
    icon: Boxes,
    outcomes: ["traceability", "quality", "export"],
    caseCount: 10,
    resourceCount: 6,
    accent: "orange",
    problems: [
      { problem: "Recall risk", solution: "Lot genealogy", benefit: "100% traceback" },
      { problem: "Export non-compliance", solution: "Serialization", benefit: "Audit-ready" },
    ],
  },
  {
    slug: "data-analytics",
    name: "Data & Analytics",
    summary: "Turn shopfloor data into operating decisions.",
    description: "Data lakes, BI and AI/ML use cases tuned to manufacturing problems.",
    icon: Activity,
    outcomes: ["visibility", "productivity", "quality"],
    caseCount: 13,
    resourceCount: 11,
    accent: "navy",
    problems: [
      { problem: "Decisions on intuition", solution: "Plant BI dashboards", benefit: "Data-led ops" },
      { problem: "Untapped process data", solution: "ML for yield / quality", benefit: "+8% yield" },
    ],
  },
  {
    slug: "workforce-enablement",
    name: "Workforce Enablement",
    summary: "Equip your people for connected, digital operations.",
    description: "Digital SOPs, AR-guided work and capability programmes for shopfloor and leadership.",
    icon: Users,
    outcomes: ["workforce", "quality", "productivity"],
    caseCount: 8,
    resourceCount: 9,
    accent: "orange",
    problems: [
      { problem: "Skills gap", solution: "Role-based learning paths", benefit: "Faster ramp-up" },
      { problem: "Tribal knowledge", solution: "Digital SOPs", benefit: "Consistent execution" },
    ],
  },
  {
    slug: "sustainability-solutions",
    name: "Sustainability Solutions",
    summary: "Cut emissions, waste and resource intensity.",
    description: "ESG reporting, circular-economy enablers and emissions tracking.",
    icon: Sprout,
    outcomes: ["energy", "export"],
    caseCount: 7,
    resourceCount: 8,
    accent: "green",
    problems: [
      { problem: "Scope 1/2 visibility", solution: "Emissions tracking", benefit: "Reportable footprint" },
      { problem: "Material waste", solution: "Circular flows", benefit: "−15% scrap" },
    ],
  },
];

export interface SolutionCaseStudy {
  slug: string;
  company: string;
  sector: string;
  state: string;
  challenge: string;
  category: string;
  outcome: string;
  metric: string;
}

// Sourced from the 8 featured entries in src/data/caseStudies.ts (real case studies).
export const featuredSolutionCases: SolutionCaseStudy[] = [
  {
    slug: "48-microsoft-india-piramal-glass-unbottles-smart-manufacturing-with-a",
    company: "Microsoft India — Piramal Glass",
    sector: "Glass Manufacturing",
    state: "Gujarat",
    challenge: "1,375 tons/day across 60 lines running 24/7 with limited real-time quality and traceability.",
    category: "Data & Analytics",
    outcome: "Manual Data Effort",
    metric: "↓ 40% Manual Data",
  },
  {
    slug: "71-siemens-india-transforming-the-warehouse-and-material-handling-i",
    company: "Siemens India",
    sector: "Warehouse & Material Handling",
    state: "Delhi",
    challenge: "No digitization on their own manufacturing line — needed a showcase for the warehouse and material handling industry.",
    category: "MES & Production Visibility",
    outcome: "Material & Time",
    metric: "↓ 70% Reduction",
  },
  {
    slug: "22-skf-india-ltd-reliability-improvement-of-rotating-equipment-s-by",
    company: "SKF India Ltd",
    sector: "Engineering – Industrial Equipment",
    state: "Maharashtra",
    challenge: "Spindle failure breakdowns on grinding machines hurting productivity and quality for automotive and railway customers.",
    category: "Predictive Maintenance",
    outcome: "Scrap Cost",
    metric: "↓ 15% Scrap Cost",
  },
  {
    slug: "56-universal-robots-collaborative-robots-deliver-40-growth-and-24x7-ma",
    company: "Universal Robots — New Engineering Works",
    sector: "Automobile & Ancillaries",
    state: "Jharkhand",
    challenge: "Manual operations limiting capacity and preventing 24×7 manufacturing on precision components.",
    category: "Industrial Automation",
    outcome: "Growth",
    metric: "+40% Growth, 24×7",
  },
];

export interface SolutionResource {
  type: "Report" | "e-Directory";
  title: string;
  desc: string;
  href: string;
}

// Sourced from the 13 reports in src/data/reports.ts + 2 real e-Directories.
export const solutionResources: SolutionResource[] = [
  {
    type: "Report",
    title: "Industry 4.0 Adoption and Strategic Roadmap for Indian Manufacturing",
    desc: "Leadership commitment, upskilling and cybersecurity gaps that separate top-quartile manufacturers.",
    href: "/reports/industry-40-adoption-strategic-roadmap-indian-manufacturing",
  },
  {
    type: "Report",
    title: "Manufacturing in India: Creating a Smarter Future",
    desc: "Smart-factory blueprint and IT/OT integration patterns, with eight Indian case studies.",
    href: "/reports/manufacturing-in-india-creating-a-smarter-future",
  },
  {
    type: "Report",
    title: "Action Plan for Fostering Adoption of Smart Manufacturing",
    desc: "Recommended national programmes, cluster pilots and DHI actions for scale-up.",
    href: "/reports/action-plan-fostering-adoption-smart-manufacturing",
  },
  {
    type: "Report",
    title: "Predictive Maintenance for Oil and Gas",
    desc: "Physics-informed models for heat-exchanger fouling, pump deterioration and online energy KPIs.",
    href: "/reports/predictive-maintenance-for-oil-and-gas",
  },
  {
    type: "e-Directory",
    title: "India's Industry 4.0 e-Directory",
    desc: "Curated directory of Industry 4.0 solution providers and capabilities across India.",
    href: "/directories/india",
  },
  {
    type: "e-Directory",
    title: "Singapore's Industry 4.0 e-Directory",
    desc: "Ecosystem of Industry 4.0 enablers across Singapore for cross-border collaboration.",
    href: "/directories/singapore",
  },
];

export const findCategory = (slug: string) =>
  solutionCategories.find((c) => c.slug === slug);

export const outcomeLabel = (id: OutcomeId) =>
  outcomes.find((o) => o.id === id)?.title.replace(/^Improve |^Reduce /, "") ?? id;
