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
  photo?: string;
}

export interface ProgrammeModule {
  label: string;
  title: string;
  duration: string;
  topics?: string[];
}

export interface ProgrammeItem {
  slug: string;
  isSample?: boolean;
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
  partners?: { name: string; logo: string }[];
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

import chicagoAsset from "@/assets/programmes/chicago-delegation.jpg.asset.json";
import iitdAsset from "@/assets/programmes/iitd-aifsm-training.jpg.asset.json";
import aiManufacturingAsset from "@/assets/programmes/ai-in-manufacturing.jpg.asset.json";
import digitalTwinAsset from "@/assets/programmes/digital-twin-workshop.jpg.asset.json";
import seminarInaugural from "@/assets/programmes/seminar-automation-inaugural.jpg.asset.json";
import seminarSession1 from "@/assets/programmes/seminar-automation-session1.jpg.asset.json";
import seminarSession2 from "@/assets/programmes/seminar-automation-session2.jpg.asset.json";
import partnerKirloskar from "@/assets/programmes/partner-kirloskar-pneumatic.jpg.asset.json";
import partnerDifacto from "@/assets/programmes/partner-difacto.png.asset.json";
import partnerLTHeavy from "@/assets/programmes/partner-lt-heavy-eng.jpg.asset.json";

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
      "CII organised a Smart Manufacturing Delegation to Chicago, USA, from 17–20 November 2025, with the objective of providing a strategic platform for Indian industry to explore cutting-edge manufacturing technologies, build high-value global networks, and catalyse innovation and collaboration opportunities between India and the United States.\n\nThe delegation comprised senior leadership including MDs, CTOs, CIOs, CDIOs and Directors representing diverse manufacturing sectors such as chemicals, automotive, engineering, metals, FMCG and solution providers, enabling cross-sectoral learning and engagement with the global smart manufacturing ecosystem.",
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
    learningOutcomes: [],
    audience: [],
    modules: [],
    faculty: [],
    accent: "navy",
    gallery: [
      {
        type: "image",
        url: chicagoAsset.url,
        caption: "CII Smart Manufacturing Delegation at Automation Fair 2025, Chicago, USA",
      },
    ],
  },

  // PAST — CII-IITD AIA FSM Training Programme on Smart Manufacturing
  {
    slug: "cii-iitd-aifsm-smart-manufacturing-training",
    type: "Workshop",
    title: "CII–IITD AIA FSM Training Programme on Smart Manufacturing, New Delhi",
    tagline: "Sector-specific, hands-on capability building with IIT Delhi",
    summary:
      "Under its capacity-building initiatives in Smart Manufacturing, CII, in partnership with IIT Delhi – AIA Foundation for Smart Manufacturing (IAFSM), organised a range of sector-specific training programmes for member companies on themes such as Industry 4.0, Artificial Intelligence and Robotics. These programmes combined expert-led sessions with hands-on learning to enable participants to understand the practical implementation of smart manufacturing solutions within their respective organisations.",
    startDate: "Multiple editions · New Delhi",
    isoDate: "2025-09-15T09:30:00+05:30",
    duration: "Multi-day editions",
    format: "In-person · IIT Delhi Campus, New Delhi",
    mode: "In-person",
    level: "Intermediate",
    industry: "Manufacturing",
    technology: "Industry 4.0",
    segment: "Enterprise",
    certification: false,
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
    learningOutcomes: [],
    audience: [],
    modules: [],
    faculty: [],
    accent: "red",
    gallery: [
      {
        type: "image",
        url: iitdAsset.url,
        caption: "Participants at CII–IITD AIA FSM Training Programme on Smart Manufacturing, New Delhi",
      },
    ],
  },

  // PAST — Training Programme on AI in Manufacturing (six editions)
  {
    slug: "training-programme-ai-in-manufacturing-rockwell",
    type: "Workshop",
    title: "Training Programme on AI in Manufacturing — Delhi NCR",
    tagline: "Six editions · 200+ senior executives equipped for AI",
    summary:
      "As part of its capacity-building initiative, CII, in collaboration with Rockwell Automation India Pvt Ltd, organised six editions of the “Two-Day Training Programme on AI in Manufacturing”. The programme was designed to equip senior executives with a strategic understanding of AI, its practical applications, and pathways to leverage AI for competitive advantage. Through expert sessions, virtual tours, live demonstrations and interactive discussions, 200+ participants gained actionable insights and built networks to support the development and implementation of their organisation’s AI roadmap.",
    startDate: "Six editions · Delhi NCR",
    isoDate: "2025-10-10T09:30:00+05:30",
    duration: "2 days (per edition)",
    format: "In-person · Delhi NCR",
    mode: "In-person",
    level: "Advanced",
    industry: "Manufacturing",
    technology: "AI & Automation",
    segment: "Enterprise",
    certification: false,
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
    learningOutcomes: [],
    audience: [],
    modules: [],
    faculty: [],
    accent: "orange",
    gallery: [
      {
        type: "image",
        url: aiManufacturingAsset.url,
        caption: "Participants during the visit of Digital Enterprise Vertical of Maruti Suzuki India Limited (MSIL), Gurugram",
      },
    ],
    postProgramme: {
      summary:
        "Six editions of the programme equipped 200+ senior executives with a strategic and practical understanding of AI — anchored by a visit to the Digital Enterprise Vertical of Maruti Suzuki India Limited, Gurugram.",
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
      "Digital Twins are a critical enabler of Industry 4.0 — supporting smarter decision-making, predictive maintenance, improved asset utilisation and faster innovation. For Indian manufacturers in brownfield environments, they help bridge legacy systems with advanced digital capabilities, reduce downtime, improve quality and enable scenario-based planning.\n\nIn this context, Confederation of Indian Industry (CII) and IITD-AIA Foundation for Smart Manufacturing (IAFSM) jointly organised the “Two-Day Workshop on Digital Twin” on 26–27 February 2026 at IIT Delhi Campus. The programme blended expert-led sessions with tool-based labs (hands-on learning experience) to help participants design, simulate and optimise digital replicas of real-world industrial systems. More than 30 participants across sectors attended the workshop.",
    startDate: "26–27 February 2026 · IIT Delhi Campus, New Delhi",
    isoDate: "2026-02-26T09:30:00+05:30",
    duration: "2 days",
    format: "In-person · IIT Delhi Campus",
    mode: "In-person",
    level: "Intermediate",
    industry: "Manufacturing",
    technology: "Industry 4.0",
    segment: "Enterprise",
    certification: false,
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
    learningOutcomes: [],
    audience: [],
    modules: [],
    faculty: [
      {
        name: "Prof. Sunil Jha",
        role: "Master Trainer · Professor, IIT Delhi · Director, IITD-AIA Foundation for Smart Manufacturing",
        org: "IIT Delhi / IAFSM",
        initials: "SJ",
      },
    ],
    accent: "teal",
    gallery: [
      {
        type: "image",
        url: digitalTwinAsset.url,
        caption: "CII & IITD-AIA FSM Two-Day Workshop on Digital Twin, IIT Delhi Campus",
      },
    ],
    postProgramme: {
      summary:
        "More than 30 participants across sectors attended the workshop, blending expert-led sessions with hands-on labs to design, simulate and optimise digital replicas of real-world industrial systems.",
      stats: [
        { label: "Participants", value: "30+" },
        { label: "Duration", value: "2 days" },
      ],
    },
  },

  // PAST — Seminar on Industrial Automation and AI Driven Innovations
  {
    slug: "seminar-industrial-automation-ai-driven-innovations-2025",
    type: "Industry Session",
    title: "Seminar on Industrial Automation and AI Driven Innovations",
    tagline: "Accelerating India's manufacturing competitiveness through frontier technologies",
    summary:
      "Industrial automation and AI-driven innovation are reshaping the manufacturing landscape — enabling productivity, precision and cost efficiency. While automation streamlines repetitive operations, AI adds intelligence across the value chain through predictive maintenance, real-time quality monitoring, demand forecasting and adaptive process optimisation.\n\nIn this context, the Confederation of Indian Industry (CII) organised the Seminar on Industrial Automation and AI Driven Innovations with the theme \"Accelerating India's Manufacturing Competitiveness through Frontier Technologies\" on 2 September 2025 in New Delhi. The seminar brought together industry leaders, policymakers, technology providers and experts to exchange insights and explore collaborative opportunities for building smarter, more agile manufacturing systems.",
    startDate: "2 September 2025 · New Delhi",
    isoDate: "2025-09-02T09:30:00+05:30",
    duration: "1 day",
    format: "In-person · New Delhi",
    mode: "In-person",
    level: "All Levels",
    industry: "Manufacturing",
    technology: "AI & Automation",
    segment: "Enterprise",
    certification: false,
    status: "closed",
    featured: false,
    registrationLabel: "View highlights",
    outcomes: ["digital-transformation", "smart-factory", "leadership-innovation"],
    tags: ["Automation", "AI", "Industry 4.0", "Predictive Maintenance", "Cobots"],
    highlights: [
      { label: "Date", value: "2 September 2025" },
      { label: "Location", value: "New Delhi" },
      { label: "Theme", value: "Frontier Technologies" },
      { label: "Format", value: "Industry seminar" },
    ],
    learningOutcomes: [],
    audience: [],
    modules: [],
    keyHighlights: [
      "Factory automation is a critical enabler for accelerating Industry 4.0 adoption and improving productivity, quality and operational agility.",
      "Collaborative robots (cobots) and autonomous systems are gamechangers for enhancing productivity, improving consistency and enabling flexible manufacturing — particularly in high-mix, low-volume environments.",
      "Workforce upskilling and change management are as important as technology deployment for driving Industry 4.0.",
      "Combined deployment of IIoT, digital twins, robotics and edge computing is enabling Indian manufacturers to build smart, connected, future-ready factories.",
      "Predictive maintenance, powered by machine learning, enables early detection of equipment anomalies — significantly reducing unplanned downtime and maintenance costs.",
      "A phased, scalable approach — starting with critical assets and high-impact use cases — is a best practice for process industries embarking on AI-enabled automation journeys.",
    ],
    focusedDiscussions: [
      "Factory Automation & Smart Technologies: Driving Industry 4.0 in discrete industries",
      "Process Automation & Predictive Intelligence in oil & gas, chemicals, utilities and energy",
    ],
    faculty: [
      { name: "Mr Dilip Sawhney", role: "Chairman, CII National Committee on Smart Manufacturing · Managing Director", org: "Rockwell Automation India Pvt Ltd", initials: "DS", photo: "/__l5e/assets-v1/1c72be32-5789-4066-b7d0-2b006fb10628/dilip-sawhney.png" },
      { name: "Mr CV Raman", role: "Member of Executive Committee & Former CTO", org: "Maruti Suzuki India Ltd", initials: "CR", photo: "/__l5e/assets-v1/daf96605-ca95-4946-ba38-5af52b4dc16d/cv-raman.jpg" },
      { name: "Mr Sameer Gandhi", role: "Managing Director", org: "Omron Automation India Pvt Ltd", initials: "SG", photo: "/__l5e/assets-v1/b87c5ec0-7822-427f-b5a7-63a0b8fd9e9f/sameer-gandhi.png" },
      { name: "Mr Sandeep Chittora", role: "Associate Partner", org: "KPMG Assurance and Consulting Services LLP", initials: "SC", photo: "/__l5e/assets-v1/587513fc-4367-413d-9ab6-7593b937c37f/sandeep-chittora.jpg" },
      { name: "Mr Falgun Chokshi", role: "Executive Vice President", org: "L&T Heavy Engineering Ltd", initials: "FC", photo: "/__l5e/assets-v1/4823cc27-e7c9-487c-92ff-5bc03de0cfc9/falgun-chokshi.jpg" },
      { name: "Mr Anil Kumar Satapathy", role: "Executive Director and CTO", org: "DiFACTO Robotics and Automation Pvt Ltd", initials: "AS", photo: "/__l5e/assets-v1/d33194de-f308-465e-942e-2391199627a0/anil-satapathy.png" },
      { name: "Mr Gaurav Kataria", role: "Vice President — Digital (Manufacturing) and CDIO, ITC Paperboard", org: "ITC Ltd", initials: "GK", photo: "/__l5e/assets-v1/419c7491-fa3f-4861-98c2-0696596fbc4a/gaurav-kataria.jpg" },
      { name: "Mr Sanket Virkar", role: "Vice President and Site Head — Pune Operations", org: "JCB India Ltd", initials: "SV", photo: "/__l5e/assets-v1/88c94c14-e15a-4a95-8c46-29a396dcffcf/sanket-virkar.png" },
      { name: "Mr Vikrant Deoras", role: "Chief Digital & Information Officer", org: "Tata Chemicals Ltd", initials: "VD", photo: "/__l5e/assets-v1/c1545b93-7276-4ae8-bafe-19fbfc197353/vikrant-deoras.jpeg" },
      { name: "Mr Chandra Sekhar Davuluri", role: "Chief Digital and Technology Officer", org: "ONGC", initials: "CD", photo: "/__l5e/assets-v1/0d634005-41c6-4c43-beaa-c78f0d493d08/chandra-sekhar.jpg" },
      { name: "Mr Aman Kirloskar", role: "Vice President", org: "Kirloskar Pneumatic Co. Ltd", initials: "AK", photo: "/__l5e/assets-v1/688cf96e-e91c-47e6-b08f-78dca6623917/aman-kirloskar.jpg" },
      { name: "Mr Indradyumna Datta", role: "Group Chief Digital Officer", org: "Jindal Steel & Power Ltd", initials: "ID", photo: "/__l5e/assets-v1/3987fe95-d3bc-4282-9daf-c9fe6aabe132/indradyumna-datta.jpg" },
      { name: "Mr Sunil Mehta", role: "President, Automation Industry Association · Assistant Vice President", org: "Mitsubishi Electric India Pvt Ltd", initials: "SM", photo: "/__l5e/assets-v1/0ec7b2ab-4b5b-4977-b04b-b582d02730d7/sunil-mehta.jpg" },
      { name: "Mr Sanjeev Sehgal", role: "Managing Director", org: "Samriddhi Automations Pvt Ltd", initials: "SS", photo: "/__l5e/assets-v1/c6cb5749-bb1c-4d69-b761-33e78520ced5/sanjeev-sehgal.jpg" },
    ],
    partners: [
      { name: "Kirloskar Pneumatic Co. Ltd", logo: partnerKirloskar.url },
      { name: "L&T Heavy Engineering", logo: partnerLTHeavy.url },
      { name: "DiFACTO Robotics and Automation", logo: partnerDifacto.url },
    ],
    accent: "navy",
    gallery: [
      {
        type: "image",
        url: seminarInaugural.url,
        caption: "Inaugural — Mr Sameer Gandhi (Omron Automation), Mr Dilip Sawhney (Rockwell Automation India / Chairman, CII National Committee on Smart Manufacturing) and Mr CV Raman (Maruti Suzuki India).",
      },
      {
        type: "image",
        url: seminarSession1.url,
        caption: "Panel 1 — Factory Automation & Smart Technologies: Driving Industry 4.0 in discrete industries.",
      },
      {
        type: "image",
        url: seminarSession2.url,
        caption: "Panel 2 — Process Automation & Predictive Intelligence across process industries.",
      },
    ],
    testimonials: [
      {
        name: "Mr Dilip Sawhney",
        role: "Chairman, CII National Committee on Smart Manufacturing · Managing Director",
        org: "Rockwell Automation India Pvt Ltd",
        quote:
          "Manufacturing is evolving from automation to autonomy — moving beyond pre-programmed systems to intelligent, self-learning technologies that can adapt and respond to real-time production scenarios and enhance operational resilience.",
        avatar: "/__l5e/assets-v1/31bef873-4071-4e59-9f19-452ab6c57caa/dilip-sawhney.webp",
      },
    ],
    postProgramme: {
      summary:
        "The seminar convened industry leaders, policymakers and technology providers around two panel discussions — Factory Automation & Smart Technologies, and Process Automation & Predictive Intelligence — surfacing practical roadmaps for Industry 4.0 adoption across discrete and process industries.",
      stats: [
        { label: "Date", value: "2 Sep 2025" },
        { label: "Panels", value: "2" },
        { label: "Speakers", value: "14" },
      ],
    },
  },
  // SAMPLE TEMPLATE — exercises every section of the programme detail layout.
  // Replace this entry with a real programme once content is supplied.
  {
    slug: "sample-smart-factory-leadership-bootcamp",
    isSample: true,
    type: "Leadership",
    title: "Sample · Smart Factory Leadership Bootcamp",
    tagline: "Sample programme — template for design reference",
    summary:
      "A sample programme entry retained as the template for the programme detail layout. Every section a real CII programme page can carry — overview, learning outcomes, audience, modules, faculty, batches, partners, fees, testimonials, gallery and FAQs — is shown here so the design can be reviewed end-to-end. Replace this entry with real content when the corresponding programme brochure is supplied.",
    startDate: "Sample · Q4 2026 · Multi-city",
    isoDate: "2026-11-12T09:30:00+05:30",
    duration: "3 days",
    format: "In-person · Multi-city",
    mode: "In-person",
    level: "Advanced",
    industry: "Manufacturing",
    technology: "Smart Manufacturing",
    segment: "Enterprise",
    certification: true,
    status: "open",
    seats: "Sample · 35 seats per batch",
    featured: false,
    registrationLabel: "Sample · Register Now",
    outcomes: ["smart-factory", "leadership-innovation", "operational-efficiency"],
    tags: ["Sample", "Template", "Leadership", "Smart Factory"],
    highlights: [
      { label: "Duration", value: "3 days" },
      { label: "Format", value: "In-person" },
      { label: "Certification", value: "CII Joint Certificate" },
      { label: "Cohort", value: "35 leaders" },
    ],
    learningOutcomes: [
      "Sample outcome — translate enterprise vision into a smart-factory roadmap.",
      "Sample outcome — sequence digital, automation and workforce investments for ROI.",
      "Sample outcome — diagnose readiness gaps and select the right interventions.",
      "Sample outcome — build the governance to scale pilots into enterprise programmes.",
    ],
    audience: [
      { persona: "Plant Heads", description: "Sample audience — plant leaders setting the smart-factory agenda." },
      { persona: "COOs / VPs Operations", description: "Sample audience — operations leaders sponsoring transformation." },
      { persona: "Digital Transformation Leads", description: "Sample audience — heads of digital, IT-OT and Industry 4.0." },
    ],
    modules: [
      { label: "Day 1", title: "Sample module — smart-factory strategy", duration: "8 hrs", topics: ["Sample topic — vision & value", "Sample topic — readiness diagnostic", "Sample topic — roadmap canvas"] },
      { label: "Day 2", title: "Sample module — technology & people", duration: "8 hrs", topics: ["Sample topic — automation stack", "Sample topic — data foundations", "Sample topic — Workforce 4.0"] },
      { label: "Day 3", title: "Sample module — scaling & governance", duration: "8 hrs", topics: ["Sample topic — pilot to scale", "Sample topic — KPI governance", "Sample topic — next 90 days"] },
    ],
    faculty: [
      { name: "Sample Faculty A", role: "Sample · Programme Director", org: "CII Smart Manufacturing", initials: "SA" },
      { name: "Sample Faculty B", role: "Sample · Lead Trainer", org: "Sample Partner Institute", initials: "SB" },
    ],
    faqs: [
      { q: "Sample question — who should attend?", a: "Sample answer — senior manufacturing leaders driving smart-factory programmes at enterprise scale." },
      { q: "Sample question — is certification provided?", a: "Sample answer — yes, a joint certificate from CII and the partner institute on completion." },
    ],
    batches: [
      { id: "sample-batch-1", label: "Sample Batch · Mumbai", dates: "12–14 November 2026", location: "Mumbai", status: "open" },
      { id: "sample-batch-2", label: "Sample Batch · Bengaluru", dates: "9–11 December 2026", location: "Bengaluru", status: "open" },
    ],
    feeTable: [
      { segment: "CII Member", member: "₹ Sample", nonMember: "₹ Sample" },
      { segment: "Non-Member", member: "₹ Sample", nonMember: "₹ Sample" },
    ],
    feeNote: "Sample fee note — GST as applicable. Replace with verified pricing.",
    accent: "navy",
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
