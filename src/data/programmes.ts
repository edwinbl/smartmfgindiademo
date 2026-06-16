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
  objective?: string[];
  keyHighlights?: string[];
  focusedDiscussions?: string[];
  feeTable?: { segment: string; member: string; nonMember: string }[];
  feeNote?: string;
  contacts?: { name: string; email: string; phone: string }[];
  registrationLinks?: { label: string; url?: string }[];
  batches?: {
    id: string;
    label: string;
    dates: string;
    location: string;
    status?: ProgrammeStatus;
    seats?: string;
    url?: string;
  }[];
  gallery?: { type: "image" | "video"; url: string; thumbnail?: string; caption?: string }[];
  testimonials?: { name: string; role: string; org: string; quote: string; avatar?: string }[];
  postProgramme?: {
    summary?: string;
    highlights?: string[];
    stats?: { label: string; value: string }[];
    reports?: { title: string; description?: string; url: string; size?: string; type?: string }[];
    presentations?: { title: string; speaker?: string; org?: string; url: string; size?: string }[];
    recording?: { url: string; platform?: string; duration?: string; thumbnail?: string };
  };
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
  // UPCOMING — Architecting the AI-Driven Factory of the Future
  {
    slug: "architecting-ai-driven-factory-2030",
    type: "Workshop",
    title: "Architecting the AI-Driven Factory of the Future: Manufacturing 2030",
    tagline: "Move from AI experimentation to enterprise-wide impact",
    summary:
      "A two-day training programme by CII in collaboration with Rockwell Automation India, helping senior manufacturing leaders move from AI experimentation to enterprise-wide impact. Participants gain a strategic understanding of how AI transforms manufacturing operations, see real-world demonstrations of autonomous factories and build an actionable AI roadmap aligned to their business objectives.",
    startDate: "18–19 June 2026 · Delhi NCR",
    isoDate: "2026-06-18T09:30:00+05:30",
    duration: "2 days",
    format: "In-person · Delhi NCR",
    mode: "In-person",
    level: "Advanced",
    industry: "Manufacturing",
    technology: "AI & Automation",
    segment: "Enterprise",
    certification: true,
    status: "open",
    seats: "Limited seats · Delhi NCR",
    featured: true,
    flagship: true,
    registrationLabel: "Register Now",
    outcomes: ["smart-factory", "digital-transformation", "leadership-innovation"],
    tags: ["AI", "Manufacturing 2030", "Rockwell Automation", "Smart Factory"],
    highlights: [
      { label: "Duration", value: "2 days" },
      { label: "Location", value: "Delhi NCR" },
      { label: "Partner", value: "Rockwell Automation" },
      { label: "Certification", value: "CII + Rockwell" },
    ],
    learningOutcomes: [
      "Move from AI experimentation to enterprise-wide impact",
      "Understand how AI-driven, autonomous factories actually work with real-world demonstrations",
      "Build and execute a clear, actionable AI roadmap aligned to business objectives",
      "Learn from senior leaders and experts operating AI-first manufacturing plants",
      "Identify opportunities for sustainable competitive advantage in the AI decade",
    ],
    audience: [
      { persona: "CTO / CIO", description: "Technology leaders setting the AI agenda for manufacturing." },
      { persona: "Technology & Automation Leads", description: "Heads of Automation, AI & ML and AI & DS." },
      { persona: "Plant & Production Heads", description: "Plant heads and heads of production / maintenance." },
      { persona: "Quality Managers", description: "Quality leaders driving AI-led inspection and process control." },
    ],
    modules: [
      { label: "Day 1 · AM", title: "AI in manufacturing — strategic foundations", duration: "4 hrs", topics: ["Global AI adoption in manufacturing", "From pilots to enterprise impact", "AI value framework for plants"] },
      { label: "Day 1 · PM", title: "Architecting the AI-driven factory", duration: "4 hrs", topics: ["Autonomous factory reference architecture", "Live demonstrations & use cases", "Data, edge and cloud foundations"] },
      { label: "Day 2 · AM", title: "Use cases & leadership case studies", duration: "4 hrs", topics: ["Quality, maintenance, planning use cases", "Leaders running AI-first plants", "Lessons from scaled deployments"] },
      { label: "Day 2 · PM", title: "Your AI roadmap workshop", duration: "4 hrs", topics: ["Opportunity identification", "Roadmap canvas for your enterprise", "Governance, talent & next 90 days"] },
    ],
    faculty: [
      { name: "Rockwell Automation Faculty", role: "Lead Trainers", org: "Rockwell Automation India", initials: "RA" },
      { name: "CII Smart Manufacturing Faculty", role: "Programme Lead", org: "Confederation of Indian Industry", initials: "CII" },
    ],
    faqs: [
      { q: "Who should attend?", a: "CTO / CIO, Technology Lead (IT), Head (Automation, AI & ML and AI & DS), Plant Head, Head of Production / Maintenance and Quality Managers of manufacturers looking to implement Smart Manufacturing / AI / ML." },
      { q: "Is certification provided?", a: "Yes — a joint certificate from CII and Rockwell Automation will be provided to every participant on completion." },
    ],
    batches: [
      { id: "delhi-jun-2026", label: "Delhi NCR Batch", dates: "18–19 June 2026", location: "Delhi NCR", status: "open" },
    ],
    accent: "navy",
  },

  // UPCOMING — CII-IIT Delhi Two-Day Hands-on Workshop on AI in Manufacturing
  {
    slug: "cii-iitd-ai-in-manufacturing-workshop",
    type: "Workshop",
    title: "CII–IIT Delhi Two-Day Hands-on Workshop on AI in Manufacturing",
    tagline: "Cut downtime, boost quality, start your AI journey",
    summary:
      "An intensive two-day hands-on workshop jointly organised by CII and the IITD-AIA Foundation for Smart Manufacturing (IAFSM). Designed to bridge theory and real-world implementation, the programme combines conceptual learning with practical labs — predictive maintenance, defect detection, data readiness and a 90-day AI implementation roadmap — tailored for manufacturing environments.",
    startDate: "23–24 June 2026 · IIT Delhi Campus, New Delhi",
    isoDate: "2026-06-23T09:30:00+05:30",
    duration: "2 days",
    format: "In-person · IIT Delhi Campus",
    mode: "In-person",
    level: "Intermediate",
    industry: "Manufacturing",
    technology: "AI & Automation",
    segment: "Enterprise",
    certification: true,
    status: "open",
    seats: "Limited seats · IIT Delhi",
    featured: true,
    registrationLabel: "Register Now",
    outcomes: ["smart-factory", "operational-efficiency", "workforce-upskilling"],
    tags: ["AI", "Machine Learning", "Computer Vision", "IIT Delhi"],
    highlights: [
      { label: "Duration", value: "2 days" },
      { label: "Venue", value: "IIT Delhi Campus" },
      { label: "Master Trainer", value: "Prof. Sunil Jha" },
      { label: "Partner", value: "IITD-AIA / IAFSM" },
    ],
    learningOutcomes: [
      "Apply machine learning and computer vision in manufacturing environments",
      "Identify and prioritize AI opportunities across plants and processes",
      "Develop basic predictive maintenance and defect detection models",
      "Assess data readiness and infrastructure requirements",
      "Build AI-driven business cases with measurable ROI",
      "Plan and execute pilot AI projects for scale-up",
      "Create a practical 90-day roadmap for AI implementation",
    ],
    audience: [
      { persona: "Plant & Operations Leaders", description: "Plant heads and operations leaders driving AI adoption." },
      { persona: "Digital & Automation Leads", description: "Heads of automation, AI / ML and digital transformation." },
      { persona: "Quality & Maintenance Managers", description: "Quality and maintenance leaders deploying AI use cases." },
    ],
    modules: [
      { label: "Day 1 · AM", title: "AI foundations for manufacturing", duration: "4 hrs", topics: ["ML & computer vision concepts", "AI opportunity mapping", "Data readiness assessment"] },
      { label: "Day 1 · PM", title: "Hands-on lab — predictive maintenance", duration: "4 hrs", topics: ["Sensor data exploration", "Build a basic PdM model", "Deployment patterns"] },
      { label: "Day 2 · AM", title: "Hands-on lab — defect detection (computer vision)", duration: "4 hrs", topics: ["Image data prep", "Train a defect detection model", "Edge inference walkthrough"] },
      { label: "Day 2 · PM", title: "Business case & 90-day roadmap", duration: "4 hrs", topics: ["AI business case with ROI", "Pilot selection & scale-up", "Your 90-day implementation roadmap"] },
    ],
    faculty: [
      { name: "Prof. Sunil Jha", role: "Master Trainer · Professor, IIT Delhi · Director, IITD-AIA Foundation for Smart Manufacturing", org: "IIT Delhi / IAFSM", initials: "SJ" },
      { name: "CII Smart Manufacturing Faculty", role: "Programme Lead", org: "Confederation of Indian Industry", initials: "CII" },
    ],
    faqs: [
      { q: "Is prior AI experience required?", a: "No — the workshop bridges theory and practice. Participants from manufacturing, operations, quality and IT backgrounds will all benefit." },
      { q: "Will I leave with a usable plan?", a: "Yes — every participant builds a practical 90-day AI implementation roadmap by the end of Day 2." },
    ],
    batches: [
      { id: "iitd-jun-2026", label: "IIT Delhi Batch", dates: "23–24 June 2026", location: "IIT Delhi Campus, New Delhi", status: "open" },
    ],
    accent: "red",
  },

  // UPCOMING — Industry 4.0 / Society 5.0 In-Country Training Programme
  {
    slug: "industry-40-society-50-in-country-training",
    type: "Leadership",
    title: "Industry 4.0 / Society 5.0 In-Country Training Programme in India",
    tagline: "Japanese manufacturing excellence — applied in India",
    summary:
      "A two-day in-country training programme organised by CII in partnership with the Japan International Cooperation Agency (JICA) and Boostech Inc., Japan. The programme offers practical insights into Japanese manufacturing excellence — factory productivity, Total Quality Control (TQC), AI and robotics applications, digital transformation, BOM, PLM utilisation and smart factory practices. Delivered through expert-led sessions, case studies, workshops and an industrial visit, across two batches in Gurugram and Mumbai.",
    startDate: "3–4 August 2026 · Gurugram  |  6–7 August 2026 · Mumbai",
    isoDate: "2026-08-03T09:30:00+05:30",
    duration: "2 days (two batches)",
    format: "In-person · Gurugram & Mumbai batches",
    mode: "In-person",
    level: "Advanced",
    industry: "Manufacturing",
    technology: "Industry 4.0",
    segment: "Enterprise",
    certification: true,
    status: "open",
    seats: "Limited seats · first-come, first-served",
    featured: true,
    flagship: true,
    registrationLabel: "Nominate Now",
    outcomes: ["digital-transformation", "smart-factory", "leadership-innovation"],
    tags: ["Industry 4.0", "Society 5.0", "JICA", "Boostech", "Japan–India"],
    highlights: [
      { label: "Duration", value: "2 days" },
      { label: "Batches", value: "Gurugram · Mumbai" },
      { label: "Partners", value: "CII · JICA · Boostech" },
      { label: "Certification", value: "Certificate of Participation" },
    ],
    learningOutcomes: [
      "Understand Industry 4.0 and Society 5.0 through the lens of manufacturing excellence",
      "Learn Japanese best practices in productivity, quality and factory management",
      "Explore practical applications of AI, robotics and digital transformation in manufacturing",
      "Gain insights into BOM, PLM and profitability-driven production planning",
      "Develop implementation roadmaps through case studies, workshops and factory visits",
    ],
    audience: [
      { persona: "Business Owners, CTOs, CIOs", description: "Senior decision-makers shaping the digital agenda." },
      { persona: "Technology & AI / Automation Heads", description: "Leaders driving AI, robotics and automation adoption." },
      { persona: "Plant, Production & Maintenance Heads", description: "Operations leaders responsible for shop-floor performance." },
      { persona: "Quality Control Managers", description: "Quality leaders deploying TQC and digital quality systems." },
      { persona: "DX / Smart Factory Promotion Leaders", description: "Owners of digital transformation and smart factory programmes." },
    ],
    modules: [
      { label: "Day 1 · AM", title: "Industry 4.0 / Society 5.0 — Japanese perspective", duration: "4 hrs", topics: ["Manufacturing excellence frameworks", "Total Quality Control (TQC)", "Productivity & profitability levers"] },
      { label: "Day 1 · PM", title: "AI, robotics & digital transformation in manufacturing", duration: "4 hrs", topics: ["AI and robotics applications", "Digital transformation case studies", "Smart factory practices"] },
      { label: "Day 2 · AM", title: "BOM, PLM & profitability-driven production", duration: "4 hrs", topics: ["BOM and PLM utilisation", "Production planning for profitability", "Workshop exercises"] },
      { label: "Day 2 · PM", title: "Industrial visit & roadmap workshop", duration: "4 hrs", topics: ["Reference factory visit", "Implementation roadmap canvas", "Plenary and next steps"] },
    ],
    faculty: [
      { name: "Boostech Inc. Faculty", role: "Japanese Manufacturing Experts", org: "Boostech Inc., Japan", initials: "BT" },
      { name: "JICA Expert Faculty", role: "Industry 4.0 Expert", org: "Japan International Cooperation Agency", initials: "JI" },
      { name: "CII Smart Manufacturing Faculty", role: "Programme Lead", org: "Confederation of Indian Industry", initials: "CII" },
    ],
    faqs: [
      { q: "How are batches structured?", a: "Two identical two-day batches — Gurugram (3–4 August 2026) and Mumbai (6–7 August 2026). Nominate participants for either batch based on convenience." },
      { q: "Is certification provided?", a: "Yes — every participant receives a Certificate of Participation on successful completion." },
      { q: "Who should I contact for nominations?", a: "Mr Saunak Banerjee · saunak.banerjee@cii.in · +91 9999907564." },
    ],
    contacts: [
      { name: "Mr Saunak Banerjee", email: "saunak.banerjee@cii.in", phone: "+91 9999907564" },
    ],
    batches: [
      { id: "gurugram-aug-2026", label: "Batch 1 · Gurugram", dates: "3–4 August 2026", location: "Gurugram", status: "open" },
      { id: "mumbai-aug-2026", label: "Batch 2 · Mumbai", dates: "6–7 August 2026", location: "Mumbai", status: "open" },
    ],
    accent: "orange",
  },

  // PAST — CII Smart Manufacturing Delegation to Chicago, USA
  {
    slug: "cii-smart-manufacturing-delegation-chicago-2025",
    type: "Leadership",
    title: "CII Smart Manufacturing Delegation to Chicago, USA",
    tagline: "Indian industry leaders explore the global smart manufacturing frontier",
    summary:
      "CII organised a Smart Manufacturing Delegation to Chicago, USA, from 17–20 November 2025, providing a strategic platform for Indian industry to explore cutting-edge manufacturing technologies, build high-value global networks, and catalyse innovation and collaboration opportunities between India and the United States. The delegation comprised senior leadership — MDs, CTOs, CIOs, CDIOs and Directors — across chemicals, automotive, engineering, metals, FMCG and solution providers.",
    startDate: "17–20 November 2025 · Chicago, USA",
    isoDate: "2025-11-17T09:00:00-06:00",
    duration: "4 days",
    format: "International delegation · Chicago, USA",
    mode: "In-person",
    level: "Advanced",
    industry: "Manufacturing",
    technology: "Industry 4.0",
    segment: "Enterprise",
    certification: false,
    status: "closed",
    featured: false,
    registrationLabel: "View highlights",
    outcomes: ["leadership-innovation", "digital-transformation"],
    tags: ["Delegation", "Automation Fair", "India–US", "Smart Manufacturing"],
    highlights: [
      { label: "Duration", value: "4 days" },
      { label: "Location", value: "Chicago, USA" },
      { label: "Delegates", value: "Senior leadership" },
      { label: "Sectors", value: "Cross-industry" },
    ],
    learningOutcomes: [
      "Direct exposure to cutting-edge smart manufacturing technologies",
      "High-value global networks across the India–US manufacturing ecosystem",
      "Cross-sectoral learning across chemicals, automotive, engineering, metals and FMCG",
      "Insights into collaboration and innovation opportunities between India and the US",
    ],
    audience: [
      { persona: "MDs & CXOs", description: "Managing Directors and senior C-suite leaders." },
      { persona: "CTOs / CIOs / CDIOs", description: "Technology and digital leaders shaping the smart manufacturing agenda." },
      { persona: "Directors — Manufacturing", description: "Senior directors across diverse manufacturing sectors." },
    ],
    modules: [
      { label: "Day 1", title: "Automation Fair 2025 — opening day", duration: "Full day", topics: ["Keynotes & technology showcases", "Exhibition walkthrough"] },
      { label: "Day 2", title: "Industry deep-dives & networking", duration: "Full day", topics: ["Sector sessions", "B2B networking with US ecosystem"] },
      { label: "Day 3", title: "Site visits & innovation tours", duration: "Full day", topics: ["Reference factory visits", "Innovation centre tours"] },
      { label: "Day 4", title: "Roundtables & closing", duration: "Full day", topics: ["India–US collaboration roundtables", "Closing reflections"] },
    ],
    faculty: [
      { name: "CII Smart Manufacturing Leadership", role: "Delegation Lead", org: "Confederation of Indian Industry", initials: "CII" },
    ],
    accent: "navy",
    postProgramme: {
      summary:
        "A senior India delegation engaged with the global smart manufacturing ecosystem at Automation Fair 2025 and partner facilities across Chicago — anchoring new India–US collaboration pathways.",
      highlights: [
        "Delegation across chemicals, automotive, engineering, metals, FMCG and solution providers",
        "Engagement with the global smart manufacturing ecosystem at Automation Fair 2025",
        "India–US collaboration and innovation conversations",
      ],
    },
  },

  // PAST — CII-IITD AIA FSM Training Programme on Smart Manufacturing
  {
    slug: "cii-iitd-aifsm-smart-manufacturing-training",
    type: "Workshop",
    title: "CII–IITD AIA FSM Training Programme on Smart Manufacturing",
    tagline: "Sector-specific, hands-on capability building with IIT Delhi",
    summary:
      "Under its capacity-building initiatives in Smart Manufacturing, CII — in partnership with the IIT Delhi – AIA Foundation for Smart Manufacturing (IAFSM) — organised a range of sector-specific training programmes for member companies on themes such as Industry 4.0, Artificial Intelligence and Robotics. The programmes combined expert-led sessions with hands-on learning, enabling participants to understand the practical implementation of smart manufacturing solutions within their organisations.",
    startDate: "Multiple editions · New Delhi",
    isoDate: "2025-09-15T09:30:00+05:30",
    duration: "Multi-day editions",
    format: "In-person · IIT Delhi Campus, New Delhi",
    mode: "In-person",
    level: "Intermediate",
    industry: "Manufacturing",
    technology: "Industry 4.0",
    segment: "Enterprise",
    certification: true,
    status: "closed",
    featured: false,
    registrationLabel: "View highlights",
    outcomes: ["workforce-upskilling", "smart-factory", "operational-efficiency"],
    tags: ["IIT Delhi", "IAFSM", "Industry 4.0", "AI", "Robotics"],
    highlights: [
      { label: "Partner", value: "IIT Delhi · IAFSM" },
      { label: "Themes", value: "I4.0 · AI · Robotics" },
      { label: "Format", value: "Expert + hands-on" },
      { label: "Audience", value: "Member companies" },
    ],
    learningOutcomes: [
      "Practical implementation of smart manufacturing solutions in member companies",
      "Sector-specific learning across Industry 4.0, AI and robotics",
      "Hands-on exposure at the IIT Delhi smart manufacturing facility",
    ],
    audience: [
      { persona: "Plant & Production Leaders", description: "Operations leaders driving shop-floor adoption." },
      { persona: "Digital & Automation Heads", description: "Owners of AI, automation and Industry 4.0 initiatives." },
      { persona: "Quality & Maintenance Managers", description: "Functional leads exploring digital quality and PdM." },
    ],
    modules: [
      { label: "Module 1", title: "Industry 4.0 foundations", duration: "Multi-session", topics: ["Reference architectures", "Adoption playbooks"] },
      { label: "Module 2", title: "Artificial Intelligence in manufacturing", duration: "Multi-session", topics: ["Use case mapping", "Hands-on labs"] },
      { label: "Module 3", title: "Robotics & automation", duration: "Multi-session", topics: ["Cell design", "Integration patterns"] },
    ],
    faculty: [
      { name: "IIT Delhi · IAFSM Faculty", role: "Master Trainers", org: "IIT Delhi / IAFSM", initials: "IT" },
      { name: "CII Smart Manufacturing Faculty", role: "Programme Lead", org: "Confederation of Indian Industry", initials: "CII" },
    ],
    accent: "red",
    postProgramme: {
      summary:
        "Multiple sector-specific editions enabled CII member companies to translate Industry 4.0, AI and robotics learning into practical implementation back at their plants.",
      highlights: [
        "Sector-specific training editions for member companies",
        "Expert-led sessions blended with hands-on labs at IIT Delhi",
        "Focus on practical, on-the-ground smart manufacturing adoption",
      ],
    },
  },

  // PAST — Training Programme on AI in Manufacturing (six editions)
  {
    slug: "training-programme-ai-in-manufacturing-rockwell",
    type: "Workshop",
    title: "Training Programme on AI in Manufacturing",
    tagline: "Six editions · 200+ senior executives equipped for AI",
    summary:
      "As part of its capacity-building initiative, CII — in collaboration with Rockwell Automation India Pvt Ltd — organised six editions of the “Two-Day Training Programme on AI in Manufacturing”. The programme was designed to equip senior executives with a strategic understanding of AI, its practical applications, and pathways to leverage AI for competitive advantage. Through expert sessions, virtual tours, live demonstrations and interactive discussions, 200+ participants gained actionable insights and built networks to support development and implementation of their organisation’s AI roadmap.",
    startDate: "Six editions · Delhi NCR",
    isoDate: "2025-10-10T09:30:00+05:30",
    duration: "2 days (per edition)",
    format: "In-person · Delhi NCR",
    mode: "In-person",
    level: "Advanced",
    industry: "Manufacturing",
    technology: "AI & Automation",
    segment: "Enterprise",
    certification: true,
    status: "closed",
    featured: false,
    registrationLabel: "View highlights",
    outcomes: ["digital-transformation", "smart-factory", "leadership-innovation"],
    tags: ["AI", "Rockwell Automation", "Senior Executives", "Maruti Suzuki"],
    highlights: [
      { label: "Editions", value: "6" },
      { label: "Participants", value: "200+" },
      { label: "Partner", value: "Rockwell Automation" },
      { label: "Plant visit", value: "MSIL, Gurugram" },
    ],
    learningOutcomes: [
      "Strategic understanding of AI and its practical applications in manufacturing",
      "Pathways to leverage AI for competitive advantage",
      "Exposure to live demonstrations and a digital enterprise plant visit",
      "Networks to support the AI roadmap of participating organisations",
    ],
    audience: [
      { persona: "Senior Executives", description: "Manufacturing leaders shaping the enterprise AI agenda." },
      { persona: "Technology & Digital Heads", description: "CIOs, CDOs and heads of automation / AI." },
      { persona: "Plant Leadership", description: "Plant heads exploring AI for shop-floor impact." },
    ],
    modules: [
      { label: "Day 1", title: "Strategic AI for manufacturing", duration: "Full day", topics: ["AI fundamentals & enterprise impact", "Use case discovery"] },
      { label: "Day 1 · PM", title: "Live demonstrations & virtual tours", duration: "Half day", topics: ["Reference plant tours", "Demonstration labs"] },
      { label: "Day 2", title: "AI roadmap & plant visit — MSIL, Gurugram", duration: "Full day", topics: ["Digital Enterprise Vertical visit", "Roadmap workshop"] },
    ],
    faculty: [
      { name: "Rockwell Automation India Faculty", role: "Lead Trainers", org: "Rockwell Automation India", initials: "RA" },
      { name: "CII Smart Manufacturing Faculty", role: "Programme Lead", org: "Confederation of Indian Industry", initials: "CII" },
    ],
    accent: "orange",
    postProgramme: {
      summary:
        "Six editions of the programme equipped 200+ senior executives with a strategic and practical understanding of AI — anchored by a visit to the Digital Enterprise Vertical of Maruti Suzuki India Limited, Gurugram.",
      highlights: [
        "Six editions delivered with Rockwell Automation India",
        "200+ senior executives trained across cohorts",
        "Plant visit to the Digital Enterprise Vertical of MSIL, Gurugram",
      ],
      stats: [
        { label: "Editions", value: "6" },
        { label: "Participants", value: "200+" },
      ],
    },
  },

  // PAST — CII & IITD-AIA FSM Two-Day Workshop on Digital Twin
  {
    slug: "cii-iitd-aifsm-digital-twin-workshop-feb-2026",
    type: "Workshop",
    title: "CII & IITD-AIA FSM Two-Day Workshop on Digital Twin",
    tagline: "Design, simulate and optimise digital replicas of industrial systems",
    summary:
      "Digital Twins are a critical enabler of Industry 4.0 — supporting smarter decision-making, predictive maintenance, improved asset utilisation and faster innovation. For Indian manufacturers in brownfield environments, they help bridge legacy systems with advanced digital capabilities, reduce downtime, improve quality and enable scenario-based planning. CII and the IITD-AIA Foundation for Smart Manufacturing (IAFSM) jointly organised this two-day workshop at IIT Delhi Campus, blending expert-led sessions with tool-based hands-on labs.",
    startDate: "26–27 February 2026 · IIT Delhi Campus, New Delhi",
    isoDate: "2026-02-26T09:30:00+05:30",
    duration: "2 days",
    format: "In-person · IIT Delhi Campus",
    mode: "In-person",
    level: "Intermediate",
    industry: "Manufacturing",
    technology: "Industry 4.0",
    segment: "Enterprise",
    certification: true,
    status: "closed",
    featured: false,
    registrationLabel: "View highlights",
    outcomes: ["smart-factory", "operational-efficiency", "workforce-upskilling"],
    tags: ["Digital Twin", "IIT Delhi", "IAFSM", "Simulation"],
    highlights: [
      { label: "Duration", value: "2 days" },
      { label: "Venue", value: "IIT Delhi Campus" },
      { label: "Participants", value: "30+ across sectors" },
      { label: "Master Trainer", value: "Prof. Sunil Jha" },
    ],
    learningOutcomes: [
      "Design, simulate and optimise digital replicas of real-world industrial systems",
      "Bridge legacy / brownfield systems with advanced digital capabilities",
      "Use Digital Twins for predictive maintenance and asset utilisation",
      "Enable scenario-based planning and faster innovation",
    ],
    audience: [
      { persona: "Plant & Operations Heads", description: "Leaders managing brownfield plants and asset performance." },
      { persona: "Digital & Automation Heads", description: "Heads of Industry 4.0, automation and digital transformation." },
      { persona: "Maintenance & Reliability Managers", description: "Leaders responsible for uptime, PdM and asset health." },
    ],
    modules: [
      { label: "Day 1 · AM", title: "Digital Twin foundations", duration: "4 hrs", topics: ["Concepts & reference architectures", "Industry use cases"] },
      { label: "Day 1 · PM", title: "Hands-on lab — modelling & simulation", duration: "4 hrs", topics: ["Tool-based modelling", "Simulation walkthrough"] },
      { label: "Day 2 · AM", title: "Digital Twins for predictive maintenance", duration: "4 hrs", topics: ["Asset health models", "Scenario planning"] },
      { label: "Day 2 · PM", title: "Optimisation & roadmap", duration: "4 hrs", topics: ["Brownfield integration patterns", "Implementation roadmap"] },
    ],
    faculty: [
      { name: "Prof. Sunil Jha", role: "Master Trainer · Professor, IIT Delhi · Director, IITD-AIA Foundation for Smart Manufacturing", org: "IIT Delhi / IAFSM", initials: "SJ" },
      { name: "CII Smart Manufacturing Faculty", role: "Programme Lead", org: "Confederation of Indian Industry", initials: "CII" },
    ],
    accent: "teal",
    postProgramme: {
      summary:
        "More than 30 participants across sectors attended the workshop, blending expert-led sessions with hands-on labs to design, simulate and optimise digital replicas of real-world industrial systems.",
      highlights: [
        "30+ participants across sectors",
        "Tool-based hands-on labs at IIT Delhi Campus",
        "Brownfield-friendly Digital Twin patterns for Indian manufacturers",
      ],
      stats: [
        { label: "Participants", value: "30+" },
        { label: "Duration", value: "2 days" },
      ],
    },
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
