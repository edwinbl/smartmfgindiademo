export type ProgrammeType =
  | "Workshop"
  | "Certification"
  | "Bootcamp"
  | "Leadership"
  | "Webinar"
  | "Industry Session";

export type ProgrammeStatus = "open" | "soon" | "closed" | "waitlist";
export type ProgrammeMode = "Online" | "Hybrid" | "In-person";
export type ProgrammeLevel = "Beginner" | "Intermediate" | "Advanced" | "All Levels";

export type OutcomeId =
  | "digital-transformation"
  | "operational-efficiency"
  | "smart-factory"
  | "sustainability"
  | "workforce-upskilling"
  | "msme-transformation"
  | "leadership-innovation";

export interface ProgrammeFaculty {
  name: string;
  role: string;
  org: string;
  initials: string;
}

export interface ProgrammeModule {
  label: string;
  title: string;
  duration: string;
  topics?: string[];
}

export interface ProgrammeItem {
  slug: string;
  type: ProgrammeType;
  title: string;
  tagline: string;
  summary: string;
  startDate: string;
  isoDate: string;
  duration: string;
  format: string;
  mode: ProgrammeMode;
  level: ProgrammeLevel;
  industry: string;
  technology: string;
  segment: "MSME" | "Enterprise" | "Ecosystem";
  certification: boolean;
  status: ProgrammeStatus;
  fee?: string;
  seats?: string;
  featured?: boolean;
  flagship?: boolean;
  registrationLabel: string;
  outcomes: OutcomeId[];
  tags: string[];
  highlights: { label: string; value: string }[];
  learningOutcomes: string[];
  audience: { persona: string; description: string }[];
  modules: ProgrammeModule[];
  faculty: ProgrammeFaculty[];
  faqs?: { q: string; a: string }[];
  accent: "navy" | "red" | "gold" | "teal" | "orange";
}

const F = {
  meera: { name: "Dr. Meera Iyer", role: "Director, Industry 4.0", org: "IIT Madras", initials: "MI" },
  ravi: { name: "Ravi Sankaran", role: "Chairman", org: "CII Smart Mfg.", initials: "RS" },
  arjun: { name: "Arjun Bhatia", role: "CTO", org: "Tata Steel", initials: "AB" },
  priya: { name: "Priya Narayanan", role: "Head, Smart Factory", org: "Mahindra", initials: "PN" },
  sundar: { name: "Sundar Pichai R.", role: "VP Operations", org: "Bosch India", initials: "SP" },
  asha: { name: "Asha Krishnan", role: "Sustainability Lead", org: "Wipro", initials: "AK" },
  vikram: { name: "Vikram Joshi", role: "Founder", org: "EdgeAI Labs", initials: "VJ" },
  neha: { name: "Neha Kapoor", role: "Programme Director", org: "MSME Ministry", initials: "NK" },
} as const;

const persona = {
  msme: { persona: "MSME Owners", description: "Promoters and CEOs leading first-time digital adoption." },
  plant: { persona: "Plant Heads", description: "Operations leaders driving shop-floor transformation." },
  digital: { persona: "Digital Leaders", description: "CIOs / CDOs building Industry 4.0 capability." },
  ops: { persona: "Operations Teams", description: "Quality, maintenance and production managers." },
  mgr: { persona: "Manufacturing Managers", description: "Mid-management aligning teams to pilots." },
  sust: { persona: "Sustainability Leads", description: "ESG, energy and decarbonization owners." },
};

export const programmes: ProgrammeItem[] = [
  // FLAGSHIP — Leadership
  {
    slug: "smart-manufacturing-leadership-programme",
    type: "Leadership",
    title: "Smart Manufacturing Leadership Programme",
    tagline: "Executive certification for India's transformation leaders",
    summary:
      "A six-week executive programme co-designed with IIT Madras and CII for plant heads, digital leaders and transformation owners scaling Industry 4.0 across Indian manufacturing.",
    startDate: "Starts 14 April 2026",
    isoDate: "2026-04-14T09:00:00+05:30",
    duration: "6 weeks",
    format: "Online + 3-day Chennai immersion",
    mode: "Hybrid",
    level: "Advanced",
    industry: "Cross-industry",
    technology: "Industry 4.0",
    segment: "Enterprise",
    certification: true,
    status: "open",
    fee: "₹ 1,85,000 + GST",
    seats: "40 seats · Cohort II",
    featured: true,
    flagship: true,
    registrationLabel: "Register Now",
    outcomes: ["digital-transformation", "leadership-innovation", "smart-factory"],
    tags: ["Industry 4.0", "Strategy", "Leadership", "Analytics"],
    highlights: [
      { label: "Duration", value: "6 weeks" },
      { label: "Cohort", value: "40 leaders" },
      { label: "Faculty", value: "IIT Madras + CII" },
      { label: "Certification", value: "Co-branded" },
    ],
    learningOutcomes: [
      "Build a 24-month Industry 4.0 roadmap for your plant",
      "Translate digital ambition into prioritized investment cases",
      "Lead cross-functional transformation teams with confidence",
      "Benchmark maturity against India's top manufacturers",
    ],
    audience: [persona.plant, persona.digital, persona.mgr],
    modules: [
      { label: "Module 1", title: "Industry 4.0 strategy & maturity baseline", duration: "Week 1" },
      { label: "Module 2", title: "Smart operations, IoT & analytics in practice", duration: "Week 2" },
      { label: "Module 3", title: "AI on the shop floor — pilots that scale", duration: "Week 3" },
      { label: "Module 4", title: "Chennai immersion — live plant teardowns", duration: "Week 4" },
      { label: "Module 5", title: "Business case, governance & change management", duration: "Week 5" },
      { label: "Module 6", title: "Capstone presentation to industry panel", duration: "Week 6" },
    ],
    faculty: [F.meera, F.ravi, F.arjun, F.priya],
    faqs: [
      { q: "Is there a selection process?", a: "Yes — applications are reviewed by the academic council; 40 seats per cohort." },
      { q: "What's the time commitment?", a: "Approximately 8–10 hours per week, plus the 3-day Chennai immersion." },
    ],
    accent: "navy",
  },

  // BOOTCAMP — MSME
  {
    slug: "msme-transformation-bootcamp",
    type: "Bootcamp",
    title: "MSME Transformation Bootcamp",
    tagline: "12-week guided journey from assessment to first pilot",
    summary:
      "A structured, mentor-led bootcamp helping MSME promoters and plant heads diagnose readiness, scope their first Industry 4.0 pilot and build a 12-month transformation roadmap.",
    startDate: "Starts 03 February 2026",
    isoDate: "2026-02-03T10:00:00+05:30",
    duration: "12 weeks",
    format: "Online + 2 plant visits",
    mode: "Hybrid",
    level: "Beginner",
    industry: "MSME",
    technology: "Industry 4.0",
    segment: "MSME",
    certification: true,
    status: "open",
    fee: "₹ 45,000 + GST · Subsidized seats available",
    seats: "30 seats · Cohort applications open",
    featured: true,
    flagship: true,
    registrationLabel: "Register Now",
    outcomes: ["msme-transformation", "digital-transformation", "operational-efficiency"],
    tags: ["MSME", "IoT", "Lean", "Roadmap"],
    highlights: [
      { label: "Duration", value: "12 weeks" },
      { label: "Cohort", value: "30 MSMEs" },
      { label: "Mentors", value: "8" },
      { label: "Plant visits", value: "2" },
    ],
    learningOutcomes: [
      "Complete the CII readiness assessment with mentor review",
      "Identify and scope your first Industry 4.0 pilot",
      "Build a 12-month transformation roadmap",
      "Network with 30 fellow MSME transformation peers",
    ],
    audience: [persona.msme, persona.plant, persona.mgr],
    modules: [
      { label: "Sprint 1", title: "Readiness diagnostics & baseline", duration: "Weeks 1–3" },
      { label: "Sprint 2", title: "Pilot scoping & business case", duration: "Weeks 4–6" },
      { label: "Sprint 3", title: "Tech landscape & vendor selection", duration: "Weeks 7–9" },
      { label: "Sprint 4", title: "Implementation, scale plan & roadmap", duration: "Weeks 10–12" },
    ],
    faculty: [F.neha, F.priya, F.vikram],
    faqs: [
      { q: "Are subsidized seats available?", a: "Yes — 10 MoMSME-supported seats per cohort for qualifying MSMEs." },
    ],
    accent: "orange",
  },

  // WORKSHOP — Sustainability
  {
    slug: "sustainability-readiness-workshop",
    type: "Workshop",
    title: "Sustainability Readiness Workshop",
    tagline: "Energy, carbon and ESG fundamentals for manufacturers",
    summary:
      "A two-day immersive workshop helping plant teams baseline energy and emissions, design net-zero pathways and prepare for upcoming ESG disclosure requirements.",
    startDate: "27 March 2026",
    isoDate: "2026-03-27T09:30:00+05:30",
    duration: "2 days",
    format: "In-person",
    mode: "In-person",
    level: "Intermediate",
    industry: "Cross-industry",
    technology: "Sustainability",
    segment: "Enterprise",
    certification: true,
    status: "open",
    fee: "₹ 28,000 + GST",
    seats: "60 seats · Bengaluru",
    featured: true,
    registrationLabel: "Register Now",
    outcomes: ["sustainability", "operational-efficiency"],
    tags: ["Sustainability", "Energy", "ESG", "Net-Zero"],
    highlights: [
      { label: "Duration", value: "2 days" },
      { label: "Capacity", value: "60 seats" },
      { label: "Format", value: "Hands-on" },
    ],
    learningOutcomes: [
      "Baseline energy and carbon footprint at plant level",
      "Design a 3-horizon net-zero pathway",
      "Map upcoming BRSR & EU CBAM requirements",
      "Identify top 10 quick-win interventions",
    ],
    audience: [persona.sust, persona.plant, persona.ops],
    modules: [
      { label: "Day 1 · AM", title: "Energy & carbon baselining", duration: "4 hrs" },
      { label: "Day 1 · PM", title: "Decarbonization levers & live case studies", duration: "4 hrs" },
      { label: "Day 2 · AM", title: "ESG reporting frameworks & BRSR", duration: "4 hrs" },
      { label: "Day 2 · PM", title: "Plant action plan workshop", duration: "4 hrs" },
    ],
    faculty: [F.asha, F.ravi],
    accent: "teal",
  },

  // CERTIFICATION — IoT
  {
    slug: "iot-analytics-certification",
    type: "Certification",
    title: "IoT & Industrial Analytics Certification",
    tagline: "Practitioner certification for shop-floor connectivity",
    summary:
      "An 8-week practitioner programme covering industrial connectivity, edge gateways, data pipelines and analytics dashboards — with a hands-on capstone on your own asset.",
    startDate: "Starts 10 March 2026",
    isoDate: "2026-03-10T09:00:00+05:30",
    duration: "8 weeks",
    format: "Online · self-paced + live labs",
    mode: "Online",
    level: "Intermediate",
    industry: "Manufacturing",
    technology: "IoT & Analytics",
    segment: "Enterprise",
    certification: true,
    status: "open",
    fee: "₹ 32,000 + GST",
    seats: "Rolling enrolment · 200 seats",
    registrationLabel: "Enroll Now",
    outcomes: ["smart-factory", "digital-transformation"],
    tags: ["IoT", "Analytics", "Edge", "Connectivity"],
    highlights: [
      { label: "Duration", value: "8 weeks" },
      { label: "Effort", value: "6 hrs / week" },
      { label: "Certification", value: "CII + Industry" },
    ],
    learningOutcomes: [
      "Architect an industrial IoT stack end-to-end",
      "Choose between edge, fog and cloud patterns",
      "Build operational dashboards with real plant data",
      "Deploy a capstone use case on your asset",
    ],
    audience: [persona.digital, persona.ops, persona.mgr],
    modules: [
      { label: "Module 1", title: "Industrial connectivity & OT/IT integration", duration: "Week 1–2" },
      { label: "Module 2", title: "Edge gateways and protocols", duration: "Week 3–4" },
      { label: "Module 3", title: "Data pipelines & analytics", duration: "Week 5–6" },
      { label: "Module 4", title: "Capstone on your own asset", duration: "Week 7–8" },
    ],
    faculty: [F.vikram, F.sundar],
    accent: "red",
  },

  // CERTIFICATION — AI
  {
    slug: "ai-for-operations-certification",
    type: "Certification",
    title: "AI for Operations Certification",
    tagline: "Apply AI to predictive maintenance, quality & planning",
    summary:
      "A practitioner certification on deploying AI use cases across operations — quality vision, predictive maintenance, demand forecasting — with real shop-floor data.",
    startDate: "Starts 21 April 2026",
    isoDate: "2026-04-21T09:00:00+05:30",
    duration: "6 weeks",
    format: "Online · live cohort",
    mode: "Online",
    level: "Advanced",
    industry: "Cross-industry",
    technology: "AI & Automation",
    segment: "Enterprise",
    certification: true,
    status: "soon",
    fee: "₹ 38,000 + GST",
    registrationLabel: "Notify Me",
    outcomes: ["smart-factory", "operational-efficiency", "leadership-innovation"],
    tags: ["AI", "Predictive", "Quality", "Forecasting"],
    highlights: [
      { label: "Duration", value: "6 weeks" },
      { label: "Effort", value: "8 hrs / week" },
      { label: "Format", value: "Live cohort" },
    ],
    learningOutcomes: [
      "Frame the right AI use case for your operation",
      "Build predictive maintenance and quality vision pilots",
      "Operationalize models with MLOps best practices",
      "Measure ROI and scale beyond a single asset",
    ],
    audience: [persona.digital, persona.ops],
    modules: [
      { label: "Module 1", title: "AI use-case discovery & framing", duration: "Week 1" },
      { label: "Module 2", title: "Predictive maintenance deep dive", duration: "Week 2" },
      { label: "Module 3", title: "Quality & vision systems", duration: "Week 3" },
      { label: "Module 4", title: "Demand & supply forecasting", duration: "Week 4" },
      { label: "Module 5", title: "MLOps & scaling", duration: "Week 5" },
      { label: "Module 6", title: "Capstone & review", duration: "Week 6" },
    ],
    faculty: [F.vikram, F.meera],
    accent: "red",
  },

  // BOOTCAMP — Smart Factory
  {
    slug: "smart-factory-readiness-bootcamp",
    type: "Bootcamp",
    title: "Smart Factory Readiness Bootcamp",
    tagline: "From SMRL assessment to your first connected line",
    summary:
      "An intensive 4-week bootcamp guiding plant teams through the Smart Manufacturing Readiness Level (SMRL) assessment and a 30-day pilot on a single connected line.",
    startDate: "Starts 18 February 2026",
    isoDate: "2026-02-18T09:00:00+05:30",
    duration: "4 weeks",
    format: "Hybrid · 1 plant visit",
    mode: "Hybrid",
    level: "Intermediate",
    industry: "Manufacturing",
    technology: "Industry 4.0",
    segment: "Enterprise",
    certification: true,
    status: "open",
    fee: "₹ 55,000 + GST",
    seats: "25 seats",
    registrationLabel: "Apply Now",
    outcomes: ["smart-factory", "operational-efficiency"],
    tags: ["SMRL", "Pilot", "Connected Line"],
    highlights: [
      { label: "Duration", value: "4 weeks" },
      { label: "Cohort", value: "25" },
      { label: "Visit", value: "1 plant" },
    ],
    learningOutcomes: [
      "Complete SMRL self-assessment with mentor",
      "Scope and launch a 30-day pilot on one line",
      "Define KPIs and the scale-up plan",
    ],
    audience: [persona.plant, persona.ops, persona.mgr],
    modules: [
      { label: "Week 1", title: "SMRL diagnostics & gap analysis", duration: "1 week" },
      { label: "Week 2", title: "Pilot scoping workshop", duration: "1 week" },
      { label: "Week 3", title: "Plant visit & implementation sprint", duration: "1 week" },
      { label: "Week 4", title: "Review, KPIs & scale plan", duration: "1 week" },
    ],
    faculty: [F.priya, F.sundar],
    accent: "navy",
  },

  // WORKSHOP — Lean + Digital
  {
    slug: "lean-digital-workshop",
    type: "Workshop",
    title: "Lean Meets Digital Workshop",
    tagline: "Pairing classical lean with digital tooling",
    summary:
      "A one-day practitioner workshop on combining lean manufacturing principles with digital tooling — value-stream mapping, real-time OEE and digital kaizen.",
    startDate: "12 February 2026",
    isoDate: "2026-02-12T09:30:00+05:30",
    duration: "1 day",
    format: "In-person · Pune",
    mode: "In-person",
    level: "Beginner",
    industry: "Manufacturing",
    technology: "Lean & OEE",
    segment: "Enterprise",
    certification: false,
    status: "open",
    fee: "₹ 12,000 + GST",
    seats: "40 seats",
    registrationLabel: "Reserve Seat",
    outcomes: ["operational-efficiency", "workforce-upskilling"],
    tags: ["Lean", "OEE", "Kaizen"],
    highlights: [
      { label: "Duration", value: "1 day" },
      { label: "Format", value: "Hands-on" },
    ],
    learningOutcomes: [
      "Map value streams with real plant data",
      "Set up live OEE on a chosen line",
      "Run a digital kaizen sprint",
    ],
    audience: [persona.ops, persona.mgr],
    modules: [
      { label: "AM", title: "Lean fundamentals + value-stream mapping", duration: "4 hrs" },
      { label: "PM", title: "Live OEE setup & digital kaizen sprint", duration: "4 hrs" },
    ],
    faculty: [F.priya, F.sundar],
    accent: "teal",
  },

  // LEADERSHIP — Women in Mfg
  {
    slug: "women-in-manufacturing-leadership",
    type: "Leadership",
    title: "Women in Manufacturing Leadership",
    tagline: "Building India's next generation of women plant leaders",
    summary:
      "A flagship 8-week leadership programme for high-potential women in manufacturing — leadership, transformation craft and a peer network for the long term.",
    startDate: "Starts 05 May 2026",
    isoDate: "2026-05-05T09:00:00+05:30",
    duration: "8 weeks",
    format: "Online + Delhi residency",
    mode: "Hybrid",
    level: "Advanced",
    industry: "Cross-industry",
    technology: "Leadership",
    segment: "Enterprise",
    certification: true,
    status: "open",
    fee: "₹ 95,000 + GST · Scholarships available",
    seats: "35 seats",
    registrationLabel: "Apply Now",
    outcomes: ["leadership-innovation", "workforce-upskilling"],
    tags: ["Leadership", "Diversity", "Transformation"],
    highlights: [
      { label: "Duration", value: "8 weeks" },
      { label: "Cohort", value: "35" },
      { label: "Residency", value: "3 days · Delhi" },
    ],
    learningOutcomes: [
      "Lead transformation programmes at scale",
      "Build executive presence and stakeholder craft",
      "Join a long-term peer leadership network",
    ],
    audience: [persona.plant, persona.digital, persona.mgr],
    modules: [
      { label: "Module 1", title: "Leadership foundations", duration: "Week 1–2" },
      { label: "Module 2", title: "Transformation craft", duration: "Week 3–4" },
      { label: "Module 3", title: "Delhi residency + capstone", duration: "Week 5–6" },
      { label: "Module 4", title: "Networking & alumni launch", duration: "Week 7–8" },
    ],
    faculty: [F.neha, F.asha, F.priya],
    accent: "gold",
  },

  // WEBINAR
  {
    slug: "webinar-predictive-maintenance-90-days",
    type: "Webinar",
    title: "Predictive Maintenance in 90 Days",
    tagline: "A practical roadmap for MSMEs",
    summary:
      "A free 60-minute webinar walking through a 90-day plan to deploy predictive maintenance on one critical shop-floor asset.",
    startDate: "09 January 2026 · 4:00 PM IST",
    isoDate: "2026-01-09T16:00:00+05:30",
    duration: "60 min",
    format: "Live + Q&A",
    mode: "Online",
    level: "Beginner",
    industry: "MSME",
    technology: "IoT & Analytics",
    segment: "MSME",
    certification: false,
    status: "open",
    fee: "Free",
    registrationLabel: "Register Free",
    outcomes: ["smart-factory", "msme-transformation"],
    tags: ["Predictive", "IoT", "MSME"],
    highlights: [
      { label: "Duration", value: "60 min" },
      { label: "Cost", value: "Free" },
    ],
    learningOutcomes: [
      "Pick the right pilot asset",
      "Choose sensors, gateways & platforms",
      "Build the business case for scale",
    ],
    audience: [persona.msme, persona.ops],
    modules: [
      { label: "Block 1", title: "Pilot selection framework", duration: "15 min" },
      { label: "Block 2", title: "Tech & vendor walkthrough", duration: "20 min" },
      { label: "Block 3", title: "Business case + Q&A", duration: "25 min" },
    ],
    faculty: [F.vikram],
    accent: "teal",
  },

  // WEBINAR — Energy
  {
    slug: "webinar-energy-monitoring-for-net-zero",
    type: "Webinar",
    title: "Energy Monitoring for Net-Zero",
    tagline: "From metering to actionable insights",
    summary:
      "Learn how leading plants are wiring up energy data to drive both cost and carbon reduction.",
    startDate: "22 January 2026 · 3:30 PM IST",
    isoDate: "2026-01-22T15:30:00+05:30",
    duration: "45 min",
    format: "Live",
    mode: "Online",
    level: "Beginner",
    industry: "Cross-industry",
    technology: "Sustainability",
    segment: "Enterprise",
    certification: false,
    status: "open",
    fee: "Free",
    registrationLabel: "Register Free",
    outcomes: ["sustainability", "operational-efficiency"],
    tags: ["Energy", "Net-Zero"],
    highlights: [
      { label: "Duration", value: "45 min" },
      { label: "Cost", value: "Free" },
    ],
    learningOutcomes: [
      "Design a plant-level energy metering plan",
      "Connect metering to real-time dashboards",
      "Tie energy data into operational KPIs",
    ],
    audience: [persona.sust, persona.plant],
    modules: [
      { label: "Block 1", title: "Metering architecture", duration: "15 min" },
      { label: "Block 2", title: "Dashboards & insights", duration: "15 min" },
      { label: "Block 3", title: "Case studies + Q&A", duration: "15 min" },
    ],
    faculty: [F.asha],
    accent: "teal",
  },

  // INDUSTRY SESSION
  {
    slug: "industry-session-msme-success-stories",
    type: "Industry Session",
    title: "MSME Success Stories Session",
    tagline: "Live case studies from India's MSME transformations",
    summary:
      "A 90-minute industry session featuring three MSMEs sharing their Industry 4.0 journey — what worked, what didn't and what's next.",
    startDate: "18 February 2026",
    isoDate: "2026-02-18T15:00:00+05:30",
    duration: "90 min",
    format: "Hybrid · Coimbatore + livestream",
    mode: "Hybrid",
    level: "All Levels",
    industry: "MSME",
    technology: "Industry 4.0",
    segment: "MSME",
    certification: false,
    status: "open",
    fee: "Free",
    seats: "Open seating",
    registrationLabel: "Register Free",
    outcomes: ["msme-transformation"],
    tags: ["MSME", "Case Study"],
    highlights: [
      { label: "Duration", value: "90 min" },
      { label: "Cost", value: "Free" },
    ],
    learningOutcomes: [
      "Hear honest MSME transformation stories",
      "Learn what to avoid in the first 12 months",
      "Connect with peer MSME promoters",
    ],
    audience: [persona.msme, persona.plant],
    modules: [
      { label: "Session 1", title: "Three MSME case studies", duration: "60 min" },
      { label: "Session 2", title: "Open Q&A and networking", duration: "30 min" },
    ],
    faculty: [F.neha, F.priya],
    accent: "orange",
  },

  // WORKSHOP — Cybersecurity
  {
    slug: "workshop-ot-cybersecurity-essentials",
    type: "Workshop",
    title: "OT Cybersecurity Essentials",
    tagline: "Protecting connected shop floors",
    summary:
      "A practitioner workshop on securing connected OT environments — common attack patterns, a starter checklist and a 90-day hardening plan.",
    startDate: "26 March 2026",
    isoDate: "2026-03-26T09:30:00+05:30",
    duration: "1 day",
    format: "In-person · Bengaluru",
    mode: "In-person",
    level: "Intermediate",
    industry: "Cross-industry",
    technology: "Cybersecurity",
    segment: "Enterprise",
    certification: false,
    status: "open",
    fee: "₹ 15,000 + GST",
    seats: "35 seats",
    registrationLabel: "Reserve Seat",
    outcomes: ["smart-factory", "operational-efficiency"],
    tags: ["Cybersecurity", "OT"],
    highlights: [
      { label: "Duration", value: "1 day" },
      { label: "Capacity", value: "35" },
    ],
    learningOutcomes: [
      "Map common OT attack surfaces",
      "Apply a 12-point hardening checklist",
      "Plan a 90-day cyber-hardening sprint",
    ],
    audience: [persona.digital, persona.plant],
    modules: [
      { label: "AM", title: "OT threat landscape & case studies", duration: "4 hrs" },
      { label: "PM", title: "Hardening checklist & tabletop drill", duration: "4 hrs" },
    ],
    faculty: [F.sundar],
    accent: "navy",
  },

  // CERTIFICATION — Sustainability
  {
    slug: "certification-net-zero-manufacturing",
    type: "Certification",
    title: "Net-Zero Manufacturing Certification",
    tagline: "Build credible decarbonization pathways",
    summary:
      "A 6-week practitioner certification on building credible net-zero pathways for Indian manufacturing — covering scope 1/2/3, levers, governance and disclosure.",
    startDate: "Starts 28 April 2026",
    isoDate: "2026-04-28T09:00:00+05:30",
    duration: "6 weeks",
    format: "Online · live cohort",
    mode: "Online",
    level: "Intermediate",
    industry: "Cross-industry",
    technology: "Sustainability",
    segment: "Enterprise",
    certification: true,
    status: "soon",
    fee: "₹ 36,000 + GST",
    registrationLabel: "Notify Me",
    outcomes: ["sustainability", "leadership-innovation"],
    tags: ["Sustainability", "Net-Zero", "ESG"],
    highlights: [
      { label: "Duration", value: "6 weeks" },
      { label: "Effort", value: "6 hrs / week" },
    ],
    learningOutcomes: [
      "Baseline scope 1/2/3 at plant level",
      "Design a credible net-zero pathway",
      "Align with BRSR, GRI and CBAM",
    ],
    audience: [persona.sust, persona.plant],
    modules: [
      { label: "Module 1", title: "Carbon accounting fundamentals", duration: "Week 1" },
      { label: "Module 2", title: "Scope 1 & 2 decarbonization", duration: "Week 2" },
      { label: "Module 3", title: "Scope 3 & supply chain", duration: "Week 3" },
      { label: "Module 4", title: "Energy & process levers", duration: "Week 4" },
      { label: "Module 5", title: "Disclosure & governance", duration: "Week 5" },
      { label: "Module 6", title: "Capstone net-zero plan", duration: "Week 6" },
    ],
    faculty: [F.asha, F.meera],
    accent: "teal",
  },
];

// Outcome metadata for guided discovery
export const outcomes: { id: OutcomeId; title: string; description: string; icon: "rocket" | "gauge" | "factory" | "leaf" | "users" | "store" | "compass" }[] = [
  { id: "digital-transformation", title: "Start Digital Transformation", description: "Begin your Industry 4.0 journey with structure.", icon: "rocket" },
  { id: "operational-efficiency", title: "Improve Operational Efficiency", description: "Lean + digital tooling for OEE, quality & cost.", icon: "gauge" },
  { id: "smart-factory", title: "Smart Factory Readiness", description: "Connect, instrument and modernize your plant.", icon: "factory" },
  { id: "sustainability", title: "Sustainability & Energy", description: "Build credible net-zero pathways.", icon: "leaf" },
  { id: "workforce-upskilling", title: "Workforce Upskilling", description: "Equip your teams for digital operations.", icon: "users" },
  { id: "msme-transformation", title: "MSME Transformation", description: "Mentor-led pathways designed for MSMEs.", icon: "store" },
  { id: "leadership-innovation", title: "Leadership & Innovation", description: "Lead transformation across the enterprise.", icon: "compass" },
];

export const programmeTypes: ("All" | ProgrammeType)[] = [
  "All",
  "Workshop",
  "Certification",
  "Bootcamp",
  "Leadership",
  "Webinar",
  "Industry Session",
];

export type ProgrammeQuickPickId =
  | "msme-recommended"
  | "beginner"
  | "leadership"
  | "ai-automation"
  | "sustainability"
  | "factory-digitization";

export const getProgrammeBySlug = (slug: string) => programmes.find((p) => p.slug === slug);
export const getFlagshipProgrammes = () => programmes.filter((p) => p.flagship);
export const getOpenProgrammes = () => programmes.filter((p) => p.status !== "closed");
export const getRelatedProgrammes = (slug: string, count = 3) => {
  const cur = getProgrammeBySlug(slug);
  if (!cur) return [];
  return programmes
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const aMatch =
        (a.type === cur.type ? 2 : 0) +
        a.outcomes.filter((o) => cur.outcomes.includes(o)).length;
      const bMatch =
        (b.type === cur.type ? 2 : 0) +
        b.outcomes.filter((o) => cur.outcomes.includes(o)).length;
      return bMatch - aMatch;
    })
    .slice(0, count);
};
