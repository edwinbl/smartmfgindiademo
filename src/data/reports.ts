export type ReportType = string;

export interface Report {
  slug: string;
  title: string;
  summary: string;
  industry: string;
  domain: string;
  technology: string;
  state: string;
  type: ReportType;
  year: number;
  pages: number;
  readingTime: string;
  author: string;
  publishedOn: string;
  gated: boolean;
  tags: string[];
  highlightStat: { value: string; label: string };
  coverGradient: string; // tailwind classes
  collectionIds: string[];
  keyFindings: { title: string; description: string }[];
  metrics: { label: string; value: number }[]; // for chart
  executiveSummary: string[];
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  reportCount: number;
  gradient: string;
}

export const collections: Collection[] = [
  {
    id: "smart-mfg-starter",
    title: "Smart Manufacturing Starter Pack",
    description: "Foundational reports to begin your Industry 4.0 journey.",
    reportCount: 5,
    gradient: "from-[hsl(var(--navy-800))] to-[hsl(var(--navy-600))]",
  },
  {
    id: "msme-readiness",
    title: "MSME Readiness Reports",
    description: "Benchmark studies and adoption pathways for Indian MSMEs.",
    reportCount: 7,
    gradient: "from-[hsl(var(--red-600))] to-[hsl(var(--orange-500))]",
  },
  {
    id: "sustainability",
    title: "Sustainability Insights",
    description: "Decarbonisation, energy and circular manufacturing.",
    reportCount: 4,
    gradient: "from-[hsl(var(--india-green))] to-[hsl(var(--navy-700))]",
  },
  {
    id: "automotive-transformation",
    title: "Automotive Transformation",
    description: "EV transition, supply chain, and connected mobility.",
    reportCount: 6,
    gradient: "from-[hsl(var(--navy-900))] to-[hsl(var(--orange-500))]",
  },
  {
    id: "digital-factory",
    title: "Digital Factory Playbooks",
    description: "Step-by-step playbooks for shop-floor digitalisation.",
    reportCount: 5,
    gradient: "from-[hsl(var(--orange-500))] to-[hsl(var(--red-600))]",
  },
];

const baseFindings = [
  { title: "Adoption accelerating", description: "67% of surveyed MSMEs now run at least one connected pilot." },
  { title: "Skills are the gap", description: "Workforce readiness ranks as the #1 reported barrier." },
  { title: "ROI within 18 months", description: "Most digital pilots break even in 12–18 months." },
  { title: "Ecosystem matters", description: "Partner-led journeys are 2.3× more likely to scale." },
];

const baseMetrics = [
  { label: "2020", value: 18 },
  { label: "2021", value: 28 },
  { label: "2022", value: 41 },
  { label: "2023", value: 55 },
  { label: "2024", value: 67 },
  { label: "2025", value: 78 },
];

const baseSummary = [
  "Indian manufacturing is entering a structural inflection point where digital, sustainability and skills converge.",
  "MSMEs that anchor their transformation in assessment-led pathways outperform peers on both productivity and resilience.",
  "Ecosystem orchestration — connecting solution providers, training partners and policy enablers — is the single largest unlock.",
];

export const reports: Report[] = [
  {
    slug: "msme-industry-40-readiness-2025",
    title: "MSME Industry 4.0 Readiness Index 2025",
    summary: "A national benchmark of digital maturity across 1,200+ MSMEs spanning 25 sectors.",
    industry: "Manufacturing",
    domain: "MSME",
    technology: "Industry 4.0",
    state: "Pan-India",
    type: "Report",
    year: 2025,
    pages: 64,
    readingTime: "22 min",
    author: "CII Smart Manufacturing",
    publishedOn: "Mar 2025",
    gated: true,
    tags: ["MSME", "Readiness", "Benchmark"],
    highlightStat: { value: "67%", label: "MSMEs running connected pilots" },
    coverGradient: "from-[hsl(var(--navy-800))] via-[hsl(var(--navy-600))] to-[hsl(var(--orange-500))]",
    collectionIds: ["msme-readiness", "smart-mfg-starter"],
    keyFindings: baseFindings,
    metrics: baseMetrics,
    executiveSummary: baseSummary,
  },
  {
    slug: "digital-factory-playbook",
    title: "The Digital Factory Playbook",
    summary: "A 9-step blueprint for shop-floor digitalisation tailored for Indian mid-size manufacturers.",
    industry: "Manufacturing",
    domain: "Smart Manufacturing",
    technology: "IIoT",
    state: "Pan-India",
    type: "Playbook",
    year: 2025,
    pages: 48,
    readingTime: "16 min",
    author: "CII × Industry Partners",
    publishedOn: "Feb 2025",
    gated: false,
    tags: ["Playbook", "IIoT", "Shop Floor"],
    highlightStat: { value: "9", label: "Steps to a connected line" },
    coverGradient: "from-[hsl(var(--orange-500))] to-[hsl(var(--red-600))]",
    collectionIds: ["digital-factory", "smart-mfg-starter"],
    keyFindings: baseFindings,
    metrics: baseMetrics,
    executiveSummary: baseSummary,
  },
  {
    slug: "sustainability-in-manufacturing",
    title: "Sustainability in Indian Manufacturing",
    summary: "How decarbonisation, energy efficiency and circularity are reshaping competitive advantage.",
    industry: "Manufacturing",
    domain: "Sustainability",
    technology: "Energy",
    state: "Pan-India",
    type: "Research",
    year: 2024,
    pages: 72,
    readingTime: "26 min",
    author: "CII Centre of Excellence",
    publishedOn: "Nov 2024",
    gated: true,
    tags: ["ESG", "Decarbonisation", "Energy"],
    highlightStat: { value: "₹4.2L Cr", label: "Green capex opportunity by 2030" },
    coverGradient: "from-[hsl(var(--india-green))] to-[hsl(var(--navy-700))]",
    collectionIds: ["sustainability"],
    keyFindings: baseFindings,
    metrics: baseMetrics,
    executiveSummary: baseSummary,
  },
  {
    slug: "ai-on-the-shop-floor",
    title: "AI on the Shop Floor",
    summary: "Practical AI use-cases delivering measurable productivity and quality gains in India.",
    industry: "Manufacturing",
    domain: "Smart Manufacturing",
    technology: "AI / ML",
    state: "Pan-India",
    type: "Whitepaper",
    year: 2025,
    pages: 36,
    readingTime: "12 min",
    author: "CII × NASSCOM",
    publishedOn: "Apr 2025",
    gated: false,
    tags: ["AI", "Quality", "Productivity"],
    highlightStat: { value: "32%", label: "Avg quality-defect reduction" },
    coverGradient: "from-[hsl(var(--navy-700))] via-[hsl(var(--navy-600))] to-[hsl(var(--orange-500))]",
    collectionIds: ["smart-mfg-starter", "digital-factory"],
    keyFindings: baseFindings,
    metrics: baseMetrics,
    executiveSummary: baseSummary,
  },
  {
    slug: "automotive-ev-transition",
    title: "Auto Sector EV Transition Report",
    summary: "How OEMs and tier-1/2 suppliers are re-tooling for the electric era.",
    industry: "Automotive",
    domain: "Mobility",
    technology: "Electrification",
    state: "Maharashtra",
    type: "Report",
    year: 2024,
    pages: 58,
    readingTime: "20 min",
    author: "CII Automotive Council",
    publishedOn: "Dec 2024",
    gated: true,
    tags: ["EV", "Supply Chain", "Automotive"],
    highlightStat: { value: "210+", label: "Suppliers re-skilled in 2024" },
    coverGradient: "from-[hsl(var(--navy-900))] to-[hsl(var(--orange-500))]",
    collectionIds: ["automotive-transformation"],
    keyFindings: baseFindings,
    metrics: baseMetrics,
    executiveSummary: baseSummary,
  },
  {
    slug: "export-readiness-msme",
    title: "Export Readiness for Indian MSMEs",
    summary: "A roadmap to make Indian MSMEs export-ready in priority global corridors.",
    industry: "Manufacturing",
    domain: "MSME",
    technology: "Trade",
    state: "Pan-India",
    type: "Report",
    year: 2025,
    pages: 52,
    readingTime: "18 min",
    author: "CII × Ministry of MSME",
    publishedOn: "Jan 2025",
    gated: false,
    tags: ["Exports", "MSME", "Global"],
    highlightStat: { value: "12", label: "Priority corridors mapped" },
    coverGradient: "from-[hsl(var(--red-600))] to-[hsl(var(--orange-500))]",
    collectionIds: ["msme-readiness"],
    keyFindings: baseFindings,
    metrics: baseMetrics,
    executiveSummary: baseSummary,
  },
  {
    slug: "smart-textile-cluster",
    title: "Smart Textile Cluster Transformation",
    summary: "Lessons from Tirupur and Surat clusters adopting Industry 4.0 at scale.",
    industry: "Textiles",
    domain: "Cluster",
    technology: "Industry 4.0",
    state: "Tamil Nadu",
    type: "Case Study",
    year: 2024,
    pages: 28,
    readingTime: "10 min",
    author: "CII Southern Region",
    publishedOn: "Oct 2024",
    gated: false,
    tags: ["Textile", "Cluster", "Case Study"],
    highlightStat: { value: "180+", label: "Units digitised in 18 months" },
    coverGradient: "from-[hsl(var(--orange-500))] to-[hsl(var(--red-600))]",
    collectionIds: ["smart-mfg-starter"],
    keyFindings: baseFindings,
    metrics: baseMetrics,
    executiveSummary: baseSummary,
  },
  {
    slug: "skills-of-the-future-factory",
    title: "Skills of the Future Factory",
    summary: "The roles, capabilities and learning pathways shaping the next decade.",
    industry: "Cross-sector",
    domain: "Skills",
    technology: "Learning",
    state: "Pan-India",
    type: "Research",
    year: 2025,
    pages: 44,
    readingTime: "14 min",
    author: "CII Skills Council",
    publishedOn: "May 2025",
    gated: true,
    tags: ["Skills", "Workforce", "Training"],
    highlightStat: { value: "26", label: "Emerging factory roles" },
    coverGradient: "from-[hsl(var(--navy-800))] to-[hsl(var(--navy-600))]",
    collectionIds: ["smart-mfg-starter"],
    keyFindings: baseFindings,
    metrics: baseMetrics,
    executiveSummary: baseSummary,
  },
  {
    slug: "circular-manufacturing",
    title: "Circular Manufacturing in India",
    summary: "Designing products, processes and supply chains for closed-loop value.",
    industry: "Manufacturing",
    domain: "Sustainability",
    technology: "Circularity",
    state: "Pan-India",
    type: "Whitepaper",
    year: 2024,
    pages: 40,
    readingTime: "13 min",
    author: "CII Centre for Sustainability",
    publishedOn: "Sep 2024",
    gated: false,
    tags: ["Circular", "ESG", "Supply Chain"],
    highlightStat: { value: "5×", label: "Value-recovery uplift" },
    coverGradient: "from-[hsl(var(--india-green))] to-[hsl(var(--navy-700))]",
    collectionIds: ["sustainability"],
    keyFindings: baseFindings,
    metrics: baseMetrics,
    executiveSummary: baseSummary,
  },
  {
    slug: "iiot-architecture-blueprint",
    title: "IIoT Architecture Blueprint",
    summary: "A reference architecture for secure, scalable industrial IoT deployments.",
    industry: "Manufacturing",
    domain: "Smart Manufacturing",
    technology: "IIoT",
    state: "Pan-India",
    type: "Playbook",
    year: 2025,
    pages: 56,
    readingTime: "19 min",
    author: "CII Tech Working Group",
    publishedOn: "Feb 2025",
    gated: true,
    tags: ["IIoT", "Architecture", "Security"],
    highlightStat: { value: "7", label: "Reference layers defined" },
    coverGradient: "from-[hsl(var(--navy-700))] to-[hsl(var(--navy-900))]",
    collectionIds: ["digital-factory"],
    keyFindings: baseFindings,
    metrics: baseMetrics,
    executiveSummary: baseSummary,
  },
  {
    slug: "pharma-4-0-india",
    title: "Pharma 4.0 in India",
    summary: "Digital transformation across Indian pharmaceutical manufacturing.",
    industry: "Pharma",
    domain: "Smart Manufacturing",
    technology: "Industry 4.0",
    state: "Telangana",
    type: "Report",
    year: 2024,
    pages: 50,
    readingTime: "17 min",
    author: "CII Pharma Vertical",
    publishedOn: "Aug 2024",
    gated: true,
    tags: ["Pharma", "Compliance", "Digital"],
    highlightStat: { value: "40%", label: "Batch-cycle time reduced" },
    coverGradient: "from-[hsl(var(--navy-800))] to-[hsl(var(--orange-500))]",
    collectionIds: ["smart-mfg-starter"],
    keyFindings: baseFindings,
    metrics: baseMetrics,
    executiveSummary: baseSummary,
  },
  {
    slug: "supplier-digitisation-tier2-3",
    title: "Digitising Tier-2 & Tier-3 Suppliers",
    summary: "An ecosystem-driven approach to lifting India's deep manufacturing base.",
    industry: "Automotive",
    domain: "Supply Chain",
    technology: "Industry 4.0",
    state: "Karnataka",
    type: "Case Study",
    year: 2025,
    pages: 32,
    readingTime: "11 min",
    author: "CII Automotive Council",
    publishedOn: "Mar 2025",
    gated: false,
    tags: ["Suppliers", "Automotive", "Ecosystem"],
    highlightStat: { value: "420+", label: "Suppliers onboarded" },
    coverGradient: "from-[hsl(var(--red-600))] to-[hsl(var(--navy-700))]",
    collectionIds: ["automotive-transformation"],
    keyFindings: baseFindings,
    metrics: baseMetrics,
    executiveSummary: baseSummary,
  },
];

export const reportFacets = {
  industry: Array.from(new Set(reports.map((r) => r.industry))).sort(),
  domain: Array.from(new Set(reports.map((r) => r.domain))).sort(),
  technology: Array.from(new Set(reports.map((r) => r.technology))).sort(),
  state: Array.from(new Set(reports.map((r) => r.state))).sort(),
  type: Array.from(new Set(reports.map((r) => r.type))).sort(),
  year: Array.from(new Set(reports.map((r) => r.year))).sort((a, b) => b - a),
};

export const quickPicks = [
  { id: "latest", label: "Latest Reports" },
  { id: "downloaded", label: "Most Downloaded" },
  { id: "msme", label: "MSME Insights" },
  { id: "sustainability", label: "Sustainability" },
  { id: "smart", label: "Smart Manufacturing" },
  { id: "export", label: "Export Readiness" },
] as const;

export type QuickPickId = (typeof quickPicks)[number]["id"];

export const getReportBySlug = (slug: string) => reports.find((r) => r.slug === slug);
export const getRelated = (slug: string, n = 3) => {
  const current = getReportBySlug(slug);
  if (!current) return [];
  return reports
    .filter((r) => r.slug !== slug)
    .map((r) => ({
      r,
      score:
        (r.industry === current.industry ? 2 : 0) +
        (r.domain === current.domain ? 2 : 0) +
        (r.technology === current.technology ? 1 : 0),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, n)
    .map((x) => x.r);
};
