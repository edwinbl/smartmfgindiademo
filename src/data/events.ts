export type EventType =
  | "Summit"
  | "Workshop"
  | "Roundtable"
  | "Seminar"
  | "Programme";

export type EventStatus = "open" | "invite" | "soon" | "live" | "completed";
export type EventMode = "Physical" | "Virtual" | "Hybrid";
export type EventLevel = "Beginner" | "Intermediate" | "Advanced" | "All Levels";

export interface EventSpeaker {
  name: string;
  role: string;
  org: string;
  initials: string;
  email?: string;
  phone?: string;
  photo?: string;
}

export interface AgendaItem {
  time: string;
  title: string;
  track?: string;
  speaker?: string;
}

export interface WorkshopReport {
  mainTakeaways: string[];
  clustersCovered: string[];
  attendees: number;
  successStories: string[];
}

export interface WorkshopPresentation {
  title: string;
  speaker?: string;
  url: string;
  size?: string;
}

export interface ResourcePerson {
  name: string;
  expertise: string;
  org: string;
  email?: string;
  phone?: string;
}

export interface WorkshopPhoto {
  url: string;
  caption?: string;
}


export interface EventItem {
  slug: string;
  type: EventType;
  title: string;
  tagline: string;
  summary: string;
  theme?: string;
  date: string; // human readable
  isoDate: string; // for countdown
  endDate?: string;
  duration: string;
  location: string;
  venue?: string;
  mode: EventMode;
  level: EventLevel;
  industry: string;
  technology: string;
  segment: "MSME" | "Enterprise" | "Ecosystem";
  status: EventStatus;
  featured?: boolean;
  flagship?: boolean;
  seats?: string;
  price?: string;
  registrationLabel: string;
  highlights: { label: string; value: string }[];
  speakers: EventSpeaker[];
  agenda?: AgendaItem[];
  tracks?: string[];
  partners?: string[];
  outcomes?: string[];
  faqs?: { q: string; a: string }[];
  // past event extras
  recordingsUrl?: string;
  proceedingsUrl?: string;
  highlightReelUrl?: string;
  pastStats?: { label: string; value: string }[];
  // workshop post-event extras
  organizers?: string[];
  report?: WorkshopReport;
  reportPdfUrl?: string;
  presentations?: WorkshopPresentation[];
  resourcePersons?: ResourcePerson[];
  photographs?: WorkshopPhoto[];
  learnings?: string[];
  accent: "navy" | "red" | "gold" | "teal" | "orange";
  /** Marks this entry as a fabricated master-template example (no real source data). */
  isFabricated?: boolean;
  /** Marks this entry as THE master template other detail pages adhere to. */
  isMasterTemplate?: boolean;
  /** Optional short note explaining what the template demonstrates. */
  fabricationNote?: string;

}


// ----- Speakers pool -----
const S = {
  ravi: { name: "Ravi Sankaran", role: "Chairman", org: "CII Smart Mfg.", initials: "RS" },
  meera: { name: "Dr. Meera Iyer", role: "Director, Industry 4.0", org: "IIT Madras", initials: "MI" },
  arjun: { name: "Arjun Bhatia", role: "CTO", org: "Tata Steel", initials: "AB" },
  priya: { name: "Priya Narayanan", role: "Head, Smart Factory", org: "Mahindra", initials: "PN" },
  sundar: { name: "Sundar Pichai R.", role: "VP Operations", org: "Bosch India", initials: "SP" },
  asha: { name: "Asha Krishnan", role: "Sustainability Lead", org: "Wipro", initials: "AK" },
  vikram: { name: "Vikram Joshi", role: "Founder", org: "EdgeAI Labs", initials: "VJ" },
  neha: { name: "Neha Kapoor", role: "Programme Director", org: "MSME Ministry", initials: "NK" },
} as const;

// ----- Events dataset -----
export const events: EventItem[] = [
  // FLAGSHIP
  {
    slug: "smart-mfg-summit-2026",
    isFabricated: true,
    fabricationNote: "Sample upcoming-event template — illustrates layout only. No source content has been supplied for this event yet.",
    type: "Summit",
    title: "Smart Manufacturing Summit 2026",
    tagline: "India's flagship Industry 4.0 leadership convening",
    summary:
      "Three days of strategy, breakthroughs and ecosystem deal-making with India's top manufacturing CEOs, CTOs, policymakers and technology leaders.",
    theme: "Made Smart in India — Scaling Industry 4.0 Beyond Pilots",
    date: "11–13 February 2027",
    isoDate: "2027-02-11T09:30:00+05:30",
    endDate: "2027-02-13T18:00:00+05:30",
    duration: "3 days",
    location: "Bengaluru, India",
    venue: "Bangalore International Exhibition Centre",
    mode: "Hybrid",
    level: "All Levels",
    industry: "Cross-industry",
    technology: "Industry 4.0",
    segment: "Ecosystem",
    status: "open",
    featured: true,
    flagship: true,
    registrationLabel: "Register Now",
    highlights: [
      { label: "Industry leaders", value: "120+" },
      { label: "Sessions & tracks", value: "60+" },
      { label: "Ecosystem partners", value: "85" },
      { label: "Expected delegates", value: "3,500" },
    ],
    speakers: [S.ravi, S.arjun, S.priya, S.meera, S.sundar, S.asha],
    tracks: [
      "Smart Factory & Operations",
      "AI & Industrial Data",
      "Sustainability & Energy",
      "MSME Transformation",
      "Workforce 4.0",
      "Policy & Ecosystem",
    ],
    agenda: [
      { time: "Day 1 · 09:30", title: "Opening Keynote: India's Industry 4.0 Decade", speaker: "Ravi Sankaran", track: "Plenary" },
      { time: "Day 1 · 11:00", title: "CEO Panel — Scaling Beyond Pilots", track: "Leadership" },
      { time: "Day 1 · 14:30", title: "Track Sessions begin (6 parallel halls)", track: "Tracks" },
      { time: "Day 2 · 09:30", title: "AI on the Shop Floor — Live Demos", speaker: "Vikram Joshi", track: "Technology" },
      { time: "Day 2 · 15:00", title: "MSME Transformation Showcase", track: "MSME" },
      { time: "Day 3 · 11:00", title: "Sustainability & Net-Zero Manufacturing", speaker: "Asha Krishnan", track: "Sustainability" },
      { time: "Day 3 · 17:00", title: "Closing Plenary + Smart Mfg. Awards", track: "Plenary" },
    ],
    partners: ["Tata Steel", "Mahindra", "Bosch", "Siemens", "Microsoft", "AWS", "Wipro", "TCS"],
    faqs: [
      { q: "Is virtual access included?", a: "Yes. Hybrid pass includes live streams of all plenaries and select tracks." },
      { q: "Are there MSME-only seats?", a: "Yes. 600 subsidized seats reserved for MSME delegates via the readiness assessment portal." },
      { q: "Can my organisation become a partner?", a: "Absolutely — view the Partner With Us page to explore brand, knowledge and innovation tiers." },
    ],
    accent: "red",
  },

  // CONFERENCE
  {
    slug: "industry40-leaders-conference",
    isFabricated: true,
    fabricationNote: "Sample upcoming-event template — illustrates layout only. No source content has been supplied for this event yet.",
    type: "Workshop",
    title: "Industry 4.0 Leaders Conference",
    tagline: "Scaling digital transformation in Indian manufacturing",
    summary:
      "Two-day conference bringing together transformation leaders to share blueprints, case studies and live shop-floor demonstrations.",
    date: "17–18 March 2027",
    isoDate: "2027-03-17T09:30:00+05:30",
    duration: "2 days",
    location: "Pune, India",
    venue: "JW Marriott, Pune",
    mode: "Physical",
    level: "Intermediate",
    industry: "Automotive",
    technology: "IoT & Analytics",
    segment: "Enterprise",
    status: "open",
    featured: true,
    registrationLabel: "Explore Event",
    highlights: [
      { label: "Sessions", value: "32" },
      { label: "Speakers", value: "45" },
      { label: "Live demos", value: "12" },
    ],
    speakers: [S.arjun, S.priya, S.sundar, S.vikram],
    partners: ["Mahindra", "Bosch", "Siemens", "Tata Technologies"],
    tracks: ["Connected Operations", "Predictive Quality", "Supply Chain 4.0", "Workforce Enablement"],
    accent: "navy",
  },

  // ROUNDTABLES
  {
    slug: "ceo-roundtable-ai-operations",
    isFabricated: true,
    fabricationNote: "Sample upcoming-event template — illustrates layout only. No source content has been supplied for this event yet.",
    type: "Roundtable",
    title: "CEO Roundtable: AI in Operations",
    tagline: "Invitation-only discussion with manufacturing CEOs",
    summary:
      "A curated executive dialogue on deploying generative and industrial AI across operations — Chatham House rules, 20 seats only.",
    date: "23 January 2027",
    isoDate: "2027-01-23T15:00:00+05:30",
    duration: "3 hours",
    location: "Mumbai, India",
    venue: "Taj Lands End — Private Boardroom",
    mode: "Physical",
    level: "Advanced",
    industry: "Cross-industry",
    technology: "AI & Automation",
    segment: "Enterprise",
    status: "invite",
    featured: true,
    seats: "20 seats · Invite only",
    registrationLabel: "Request Invite",
    highlights: [
      { label: "Format", value: "Chatham House" },
      { label: "Seats", value: "20" },
      { label: "Hosted by", value: "CII Smart Mfg." },
    ],
    speakers: [S.ravi, S.arjun, S.priya],
    outcomes: [
      "Shared playbook on AI deployment across operations",
      "Cross-industry benchmark on AI readiness",
      "Curated peer network for ongoing exchange",
    ],
    accent: "gold",
  },
  {
    slug: "msme-leaders-roundtable",
    isFabricated: true,
    fabricationNote: "Sample upcoming-event template — illustrates layout only. No source content has been supplied for this event yet.",
    type: "Roundtable",
    title: "MSME Leaders Roundtable: Cost of Digital",
    tagline: "Frank conversations on what really works for MSMEs",
    summary:
      "An invite-only roundtable for MSME promoters and CEOs to debate cost, ROI and ecosystem support for Industry 4.0 adoption.",
    date: "06 February 2027",
    isoDate: "2027-02-06T11:00:00+05:30",
    duration: "Half day",
    location: "Coimbatore, India",
    venue: "CII Southern Region HQ",
    mode: "Physical",
    level: "Intermediate",
    industry: "MSME",
    technology: "Industry 4.0",
    segment: "MSME",
    status: "invite",
    seats: "25 seats · Invite only",
    registrationLabel: "Request Invite",
    highlights: [
      { label: "Seats", value: "25" },
      { label: "Format", value: "Closed door" },
    ],
    speakers: [S.neha, S.priya, S.ravi],
    accent: "gold",
  },

  // WEBINARS
  {
    slug: "webinar-predictive-maintenance",
    isFabricated: true,
    fabricationNote: "Sample upcoming-event template — illustrates layout only. No source content has been supplied for this event yet.",
    type: "Workshop",
    title: "Predictive Maintenance in 90 Days",
    tagline: "A practical roadmap for MSMEs",
    summary:
      "Hands-on webinar walking through a 90-day plan to deploy predictive maintenance on a single shop-floor asset.",
    date: "08 October 2026 · 4:00 PM IST",
    isoDate: "2026-10-08T16:00:00+05:30",
    duration: "60 min",
    location: "Online",
    mode: "Virtual",
    level: "Beginner",
    industry: "Manufacturing",
    technology: "IoT & Analytics",
    segment: "MSME",
    status: "open",
    price: "Free",
    registrationLabel: "Register Free",
    highlights: [
      { label: "Duration", value: "60 min" },
      { label: "Format", value: "Live + Q&A" },
      { label: "Cost", value: "Free" },
    ],
    speakers: [S.vikram],
    outcomes: [
      "Identify the right pilot asset",
      "Choose sensors, gateways and platform",
      "Build the business case for scale",
    ],
    accent: "teal",
  },
  {
    slug: "webinar-energy-monitoring",
    isFabricated: true,
    fabricationNote: "Sample upcoming-event template — illustrates layout only. No source content has been supplied for this event yet.",
    type: "Workshop",
    title: "Energy Monitoring for Net-Zero",
    tagline: "From metering to insights",
    summary:
      "Learn how leading plants are wiring up energy data to drive both cost and carbon reduction.",
    date: "12 November 2026 · 3:30 PM IST",
    isoDate: "2026-11-12T15:30:00+05:30",
    duration: "45 min",
    location: "Online",
    mode: "Virtual",
    level: "Beginner",
    industry: "Cross-industry",
    technology: "Sustainability",
    segment: "Enterprise",
    status: "open",
    price: "Free",
    registrationLabel: "Register Free",
    highlights: [
      { label: "Duration", value: "45 min" },
      { label: "Cost", value: "Free" },
    ],
    speakers: [S.asha],
    accent: "teal",
  },
  {
    slug: "webinar-cybersecurity-ot",
    isFabricated: true,
    fabricationNote: "Sample upcoming-event template — illustrates layout only. No source content has been supplied for this event yet.",
    type: "Workshop",
    title: "Cybersecurity for OT Environments",
    tagline: "Protecting connected shop floors",
    summary:
      "What every plant manager should know about securing connected OT — common attack patterns and a starter checklist.",
    date: "10 December 2026 · 4:00 PM IST",
    isoDate: "2026-12-10T16:00:00+05:30",
    duration: "60 min",
    location: "Online",
    mode: "Virtual",
    level: "Intermediate",
    industry: "Cross-industry",
    technology: "Cybersecurity",
    segment: "Enterprise",
    status: "open",
    price: "Free",
    registrationLabel: "Register Free",
    highlights: [
      { label: "Duration", value: "60 min" },
      { label: "Cost", value: "Free" },
    ],
    speakers: [S.sundar],
    accent: "teal",
  },



  // PAST — REAL: 10th CII Smart Manufacturing Summit (15 Dec 2025, New Delhi)
  {
    slug: "past-smart-mfg-summit-2025",
    type: "Summit",
    title: "10th CII Smart Manufacturing Summit",
    tagline: "Frontier Technologies: Driving Competitiveness and Powering Growth",
    summary:
      "The 10th edition of the CII Smart Manufacturing Summit underscored the economic imperative for India to accelerate advanced manufacturing. Deliberations focused on accelerating AI adoption, enabling the servicification of manufacturing, and building a future-ready skilling ecosystem. The Summit highlighted transformative interventions across five key clusters — Engineering, Consumer Products, Life Sciences, Electronics and Chemicals — where frontier technologies can drive higher value addition, productivity and global competitiveness.",
    theme: "Frontier Technologies: Driving Competitiveness and Powering Growth",
    date: "15 December 2025",
    isoDate: "2025-12-15T09:30:00+05:30",
    duration: "1 day",
    location: "New Delhi, India",
    mode: "Physical",
    level: "All Levels",
    industry: "Cross-industry",
    technology: "AI · Industry 4.0 · Frontier Tech",
    segment: "Ecosystem",
    status: "completed",
    registrationLabel: "View Highlights",
    highlights: [
      { label: "Edition", value: "10th" },
      { label: "Speakers", value: "28" },
      { label: "Focus clusters", value: "5" },
    ],
    pastStats: [
      { label: "Speakers", value: "28" },
      { label: "Clusters in focus", value: "5" },
      { label: "Edition", value: "10th" },
    ],
    organizers: [
      "Confederation of Indian Industry (CII)",
      "CII National Committee on Smart Manufacturing",
    ],
    partners: [
      "Ministry of Skill Development and Entrepreneurship",
      "NITI Aayog — Frontier Tech Hub",
      "National Industrial Corridor Development Corporation (NICDC), DPIIT",
    ],
    speakers: [
      { name: "Ms Debashree Mukherjee", role: "Secretary", org: "Ministry of Skill Development & Entrepreneurship, GoI", initials: "DM", photo: "/__l5e/assets-v1/cb82e9d7-42ed-4dc8-9ae2-afa51d737a3d/debashree-mukherjee.jpeg" },
      { name: "Mr Neeraj Huddar", role: "Resident Fellow & Lead Architect, Frontier Tech Hub", org: "NITI Aayog", initials: "NH", photo: "/__l5e/assets-v1/46c8a021-0cf3-494f-81c2-fbeb635a5b1b/neeraj-huddar.jpg" },
      { name: "Mr Vishnu Sharma", role: "Deputy General Manager — Corporate Affairs", org: "NICDC, DPIIT", initials: "VS", photo: "/__l5e/assets-v1/1e3ca0a5-6494-4921-93ee-4cab3701f0ba/vishnu-sharma.jpeg" },
      { name: "Mr Dilip Sawhney", role: "Chairman, CII National Committee on Smart Manufacturing; MD", org: "Rockwell Automation India", initials: "DS", photo: "/__l5e/assets-v1/cce74345-5dfb-435b-b97a-2650e54b016d/dilip-sawhney.png" },
      { name: "Mr Ravi Raghavan", role: "Co-Chairman, CII Committee on Capital Goods; MD & CEO", org: "Bharat Fritz Werner Ltd", initials: "RR", photo: "/__l5e/assets-v1/7857e7b6-23e7-41c6-b8a9-d93c63b785fa/ravi-raghavan.jpg" },
      { name: "Mr Tejpreet Singh Chopra", role: "CEO", org: "Bharat Light & Power Ltd", initials: "TC", photo: "/__l5e/assets-v1/6328039d-f622-4d11-a44a-a34d82425707/tejpreet-chopra.jpg" },
      { name: "Mr C V Raman", role: "Member of Executive Committee & Former CTO", org: "Maruti Suzuki India Ltd", initials: "CR", photo: "/__l5e/assets-v1/0357b212-6831-40dc-983c-b59516757dde/cv-raman.jpg" },
      { name: "Mr Chandrasekhar Bharathi", role: "Managing Director", org: "AceMicromatic Group", initials: "CB", photo: "/__l5e/assets-v1/f52461e7-d2fb-4314-8ccd-2334c52a6556/chandrashekhar-bharathi.jpg" },
      { name: "Mr Sanjeev Sehgal", role: "Managing Director", org: "Sparsh Security Ltd", initials: "SS", photo: "/__l5e/assets-v1/5ca3fe34-0ec4-446b-a2b6-2e7bb955c88c/sanjeev-sehgal.jpg" },
      { name: "Mr Naresh Kantoor", role: "Managing Director", org: "Encon Systems", initials: "NK", photo: "/__l5e/assets-v1/75591d2f-842d-4987-9ae8-ba5ef7566e01/naresh-kantoor.jpg" },
      { name: "Mr Rupark Sarswat", role: "CEO", org: "India Glycols Ltd", initials: "RS", photo: "/__l5e/assets-v1/a33b71e3-c8c4-41c2-bd80-0dd2a606f641/rupark-sarswat.jpg" },
      { name: "Mr Pradeep Mittal", role: "CEO", org: "Lohiya Group", initials: "PM", photo: "/__l5e/assets-v1/54b3353d-f178-4651-9bd0-3e6b64aa3fd7/pradeep-mittal.jpeg" },
      { name: "Mr Sunil Khurana", role: "COO", org: "JCB India Ltd", initials: "SK", photo: "/__l5e/assets-v1/4d35fef7-2290-41b1-9519-aa0f7f031c5e/sunil-khurana.jpg" },
      { name: "Mr Rajeev Gera", role: "Group President & CMO, Executive Board Member", org: "ANAND Group", initials: "RG", photo: "/__l5e/assets-v1/51436c6a-7a40-470e-8df2-0cdf039e15c5/rajeev-gera.png" },
      { name: "Mr Vikram Gandotra", role: "President, IEEMA; Director — Industry & Policy", org: "Siemens India Ltd", initials: "VG", photo: "/__l5e/assets-v1/a055bf18-08e3-478d-9889-2b6e41f8daea/vikram-gandotra.jpg" },
      { name: "Mr Girish Parundekar", role: "Vice President — Manufacturing", org: "Blue Star Ltd", initials: "GP", photo: "/__l5e/assets-v1/e3d5ba96-7a4f-4e8c-8106-183add92c54b/girish-parundekar.jpg" },
      { name: "Mr Vikrant Deoras", role: "Chief Digital & Information Officer", org: "Tata Chemicals Ltd", initials: "VD", photo: "/__l5e/assets-v1/f5ed72b5-b1c2-4f48-bb7c-c4882db6ab9e/vikrant-deoras.jpeg" },
      { name: "Mr Chandra Sekhar Davuluri", role: "Chief Digital & Technology Officer", org: "ONGC Ltd", initials: "CD", photo: "/__l5e/assets-v1/0e0617fd-6fae-44d1-80df-11b12a3b7e3e/chandra-sekhar-davuluri.jpg" },
      { name: "Prof Sunil Jha", role: "Professor, Mechanical Engineering", org: "IIT Delhi", initials: "SJ", photo: "/__l5e/assets-v1/ddd56af9-f130-48c8-ac14-b353e01ecfdf/sunil-jha.jpg" },
      { name: "Mr Dhiraj Singh", role: "Global Head — Embedded SW Development & Connected Products", org: "HCL Tech", initials: "DS", photo: "/__l5e/assets-v1/8c5dd372-c890-4407-b895-346e0d87f646/dhiraj-singh.jpeg" },
      { name: "Mr Abhijit Tambat", role: "Head — Chemical, Glass/Solar & Oil & Gas Vertical", org: "Siemens India Ltd", initials: "AT", photo: "/__l5e/assets-v1/180ca959-2f80-4984-afca-291b7f3def1f/abhijit-tambat.jpg" },
      { name: "Mr Nilajit Ghosh", role: "Principal — Digital Consulting", org: "Rockwell Automation India", initials: "NG", photo: "/__l5e/assets-v1/fcad17e7-043f-45c7-92a0-2807026dade0/nilajit-ghosh.jpg" },
      { name: "Mr Akash Singh", role: "Director", org: "Akash Pack Tech", initials: "AS", photo: "/__l5e/assets-v1/4024fa1b-214c-4c83-8711-d31ab41e4112/akash-singh.jpeg" },
      { name: "Mr Nishanth Neerabidre", role: "DGM & Head — Production Engineering & Smart Manufacturing", org: "L&T Ltd", initials: "NN", photo: "/__l5e/assets-v1/48d5355d-aebc-4c15-9b31-0b8630a93315/nishanth-neerabidre.jpg" },
      { name: "Mr Rahul Raje", role: "Segment Manager — Robotic Solutions", org: "Fronius India Pvt Ltd", initials: "RR", photo: "/__l5e/assets-v1/adb685b8-5d01-4561-8b14-4fc4c9103fb4/rahul-raje.jpg" },
      { name: "Mr Aman Atreja", role: "Assistant General Manager", org: "FANUC India Pvt Ltd", initials: "AA", photo: "/__l5e/assets-v1/72d1d578-3a39-466d-9aa6-a452882a6d13/aman-atreja.jpg" },
      { name: "Mr Sudipta Ghosh", role: "Partner", org: "PwC India", initials: "SG", photo: "/__l5e/assets-v1/734cdbb1-416f-43d6-8918-38cdb3ae8629/sudipta-ghosh.jpg" },
      { name: "Mr Sandeep Chittora", role: "Associate Partner", org: "KPMG", initials: "SC", photo: "/__l5e/assets-v1/516c6702-6899-43b7-b9e0-821982c96fc4/sandeep-chittora.jpg" },
    ],
    photographs: [
      { url: "/__l5e/assets-v1/2f0f0910-9e7e-4bd5-b882-37209579612b/speaker-flyer.jpg", caption: "10th CII Smart Manufacturing Summit — speaker flyer" },
      { url: "/__l5e/assets-v1/b8f3b37a-4e35-40d0-b752-3059e512aca0/panel-discussion.jpg", caption: "Panel discussion at the Summit" },
    ],
    accent: "navy",
  },
  // PAST — SAMPLE master template (placeholder content for layout reference only)
  {
    slug: "past-sample-future-ready-conclave-2024",
    isMasterTemplate: true,

    type: "Summit",
    title: "Future-Ready Manufacturing Conclave 2024",
    tagline: "Sample concluded-event template",
    summary:
      "A sample concluded-event entry retained as the master template — every section a real past summit page can carry (stats, agenda, presentations, resource persons, photographs, learnings, report PDF) is shown here for design reference. Replace with real content when the corresponding event documentation is supplied.",
    date: "12–14 November 2024",
    isoDate: "2024-11-12T09:30:00+05:30",
    duration: "3 days",
    location: "Hyderabad, India",
    mode: "Hybrid",
    level: "All Levels",
    industry: "Cross-industry",
    technology: "Industry 4.0",
    segment: "Ecosystem",
    status: "completed",
    registrationLabel: "View Highlights",
    highlights: [
      { label: "Delegates", value: "3,100" },
      { label: "Speakers", value: "110" },
      { label: "Sessions", value: "58" },
    ],
    pastStats: [
      { label: "Delegates", value: "3,100+" },
      { label: "Industries", value: "22" },
      { label: "States represented", value: "27" },
      { label: "MSMEs participated", value: "640" },
    ],
    speakers: [S.ravi, S.arjun, S.meera, S.asha, S.priya],
    highlightReelUrl: "https://www.youtube.com/",
    recordingsUrl: "https://www.youtube.com/",
    proceedingsUrl: "#",
    organizers: [
      "Confederation of Indian Industry (CII)",
      "CII Smart Manufacturing Council",
    ],
    agenda: [
      { time: "Day 1 · 09:30", title: "Opening Plenary — State of Indian Manufacturing", speaker: "Ravi Sankaran", track: "Plenary" },
      { time: "Day 1 · 11:00", title: "CEO Forum: Scaling Industry 4.0 Beyond Pilots", track: "Leadership" },
      { time: "Day 2 · 10:00", title: "AI on the Shop Floor — Live Demos", track: "Technology" },
      { time: "Day 2 · 15:00", title: "MSME Transformation Showcase", track: "MSME" },
      { time: "Day 3 · 11:00", title: "Sustainability & Net-Zero Manufacturing", speaker: "Asha Krishnan", track: "Sustainability" },
      { time: "Day 3 · 17:00", title: "Closing Plenary + Awards", track: "Plenary" },
    ],
    report: {
      attendees: 3100,
      clustersCovered: ["Automotive", "Capital Goods", "Electronics", "Pharma", "Textiles", "Steel"],
      mainTakeaways: [
        "Sample takeaway — boardroom commitment to digital transformation has crossed a tipping point.",
        "Sample takeaway — data foundations and unified namespaces are the top investment priority.",
        "Sample takeaway — Workforce 4.0 is the binding constraint; reskilling must triple by 2027.",
      ],
      successStories: [
        "Sample story — connected plant generating 2.1B data points/day driving predictive quality.",
        "Sample story — AI-driven OEE programme delivering 11% throughput uplift across 9 lines.",
      ],
    },
    reportPdfUrl: "/__l5e/assets-v1/a38bc383-057c-4461-aae3-3874b0a3a028/workshop_report_industry40_2019.pdf",
    presentations: [
      { title: "Sample — State of Indian Manufacturing (Plenary)", speaker: "Ravi Sankaran", url: "#", size: "4.6 MB" },
      { title: "Sample — Scaling AI on the Shop Floor", speaker: "Arjun Bhatia", url: "#", size: "5.2 MB" },
    ],
    resourcePersons: [
      { name: "Ravi Sankaran", expertise: "Industry 4.0 strategy, ecosystem orchestration", org: "CII Smart Manufacturing", email: "ravi.sankaran@cii.in" },
      { name: "Dr. Meera Iyer", expertise: "Digital twins, smart factory architecture", org: "IIT Madras", email: "meera.iyer@iitm.ac.in" },
    ],
    photographs: [
      { url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80", caption: "Sample — opening plenary" },
      { url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80", caption: "Sample — CEO Forum" },
      { url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80", caption: "Sample — exhibit hall" },
    ],
    learnings: [
      "Sample learning — interoperability between OT and IT remains the #1 technical barrier to scaling.",
      "Sample learning — public-private skilling partnerships are essential to keep pace with demand.",
    ],
    accent: "navy",
    isFabricated: true,
    fabricationNote:
      "Sample concluded-event master template — speakers, agenda, stats, photographs, presentations and report PDF are placeholders that demonstrate the full layout. Replace with real event data when supplied.",
  },

  {
    slug: "past-awareness-workshop-industry40-2019",
    type: "Workshop",
    title: "Awareness Workshop on Industry 4.0",
    tagline: "The Indian Perspective",
    summary:
      "A one-day awareness workshop unpacking the Indian perspective on Industry 4.0 — covering smart automation, IIoT layers, additive manufacturing, AR/ML and digital deployment, with live case studies from industry leaders.",
    theme: "Industry 4.0 — The Indian Perspective",
    date: "27 February 2019",
    isoDate: "2019-02-27T10:30:00+05:30",
    duration: "1 day (10:30 AM – 4:00 PM)",
    location: "Gurugram, Haryana",
    venue: "CII Office, Plot No. 249F, Phase IV, Udyog Vihar, Sector 18, Gurugram",
    mode: "Physical",
    level: "Beginner",
    industry: "Cross-industry",
    technology: "Industry 4.0",
    segment: "Enterprise",
    status: "completed",
    registrationLabel: "Download Proceedings",
    highlights: [
      { label: "Sessions", value: "9" },
      { label: "Speakers", value: "6" },
      { label: "Duration", value: "1 day" },
    ],
    pastStats: [
      { label: "Sessions", value: "9" },
      { label: "Speakers", value: "6" },
      { label: "Format", value: "In-person workshop" },
    ],
    speakers: [
      { name: "Satendra Singh", role: "Head — Manufacturing & Strategy", org: "Nokia Solutions and Networks India Pvt. Ltd.", initials: "SS", email: "satendra.singh@nokia.com", phone: "+91 124 4500 100" },
      { name: "Ravi Agarwal", role: "MD & President, Automation Industry Association", org: "Pepperl+Fuchs Factory Automation", initials: "RA", email: "ravi.agarwal@pepperl-fuchs.com", phone: "+91 80 6788 1000" },
      { name: "Dr Sunil Jha", role: "Director, FSM & Lead Facilitator FSM Technology Team", org: "IIT Delhi", initials: "SJ", email: "suniljha@mech.iitd.ac.in", phone: "+91 11 2659 1135" },
      { name: "Sandeep Singh", role: "Director", org: "Reckers Mechatronics Pvt Ltd", initials: "SS", email: "sandeep@reckers.in", phone: "+91 124 4032 900" },
      { name: "Saroop Chand", role: "Managing Director", org: "Adroitec Information Systems", initials: "SC", email: "saroop.chand@adroitec.com", phone: "+91 124 4309 200" },
      { name: "Anup Wadhwa", role: "Director", org: "Automation Industry Association", initials: "AW", email: "director@aia-india.org", phone: "+91 124 4014 444" },
    ],

    agenda: [
      { time: "10:00 – 10:30", title: "Registration" },
      { time: "10:30 – 10:40", title: "Welcome Address", speaker: "Satendra Singh — Member, CII Smart Manufacturing Council" },
      { time: "10:40 – 10:50", title: "Special Address", speaker: "Ms Sukriti Likhi, Joint Secretary, Department of Heavy Industry (DHI)" },
      { time: "10:50 – 11:10", title: "Business Disruptions and Opportunities for Smart Manufacturing in India", speaker: "Ravi Agarwal" },
      { time: "11:10 – 11:20", title: "Tea Break" },
      { time: "11:20 – 12:25", title: "Getting started with Smart Automation and IIoT Layers — Case Study of Pilot Cyber Physical Line", speaker: "Dr Sunil Jha" },
      { time: "12:25 – 12:50", title: "Challenges in Automated Tracking, Tracing and Remote Supervision", speaker: "Sandeep Singh" },
      { time: "12:50 – 13:10", title: "Relevance of Additive Manufacturing beyond Prototyping", speaker: "Saroop Chand" },
      { time: "13:10 – 13:15", title: "Q&A" },
      { time: "13:15 – 14:00", title: "Lunch Break" },
      { time: "14:00 – 15:05", title: "Preparing for the next level of Digital Journey with Augmented Reality and Machine Learning", speaker: "Dr Sunil Jha" },
      { time: "15:05 – 15:35", title: "Business Value Creation through Automation and Digital Deployment — Open House Facilitation", speaker: "Pravin Purang" },
      { time: "15:35 – 15:50", title: "Leveraging the Common Engineering & Cyber Physical Facilities Centre", speaker: "Anup Wadhwa" },
      { time: "15:50 – 16:00", title: "Summing up" },
    ],
    partners: ["CII Smart Manufacturing Council", "Automation Industry Association", "Department of Heavy Industry"],
    proceedingsUrl: "#",
    organizers: [
      "Confederation of Indian Industry (CII)",
      "CII Smart Manufacturing Council",
      "Automation Industry Association (AIA)",
    ],
    report: {
      attendees: 45,
      clustersCovered: ["Automotive", "General Engineering"],
      mainTakeaways: [
        "Indian manufacturers need a phased adoption path — start with connected assets, then layer analytics and AI.",
        "IIoT readiness depends as much on workforce reskilling and OT-IT governance as on technology investment.",
        "Additive manufacturing has moved well beyond prototyping and is now production-relevant for tooling and spares.",
        "AR and ML on the shop floor deliver measurable gains in first-time-right and operator productivity.",
        "Shared cyber-physical facility centres can dramatically lower the entry cost for MSMEs.",
      ],
      successStories: [
        "Pilot cyber-physical line at IIT Delhi demonstrating end-to-end IIoT stack — compile a case write-up.",
        "Pepperl+Fuchs deployment of smart sensors enabling predictive quality at an automotive Tier-1.",
        "Reckers Mechatronics remote supervision rollout across multi-site operations.",
        "Adroitec additive manufacturing applications in jigs, fixtures and low-volume spares.",
      ],
    },
    reportPdfUrl: "/__l5e/assets-v1/a38bc383-057c-4461-aae3-3874b0a3a028/workshop_report_industry40_2019.pdf",
    presentations: [
      { title: "Business Disruptions & Opportunities for Smart Manufacturing in India", speaker: "Ravi Agarwal", url: "#", size: "3.2 MB" },
      { title: "Getting started with Smart Automation & IIoT Layers — Pilot Cyber Physical Line", speaker: "Dr Sunil Jha", url: "#", size: "5.8 MB" },
      { title: "Challenges in Automated Tracking, Tracing & Remote Supervision", speaker: "Sandeep Singh", url: "#", size: "2.4 MB" },
      { title: "Additive Manufacturing beyond Prototyping", speaker: "Saroop Chand", url: "#", size: "2.9 MB" },
      { title: "AR & Machine Learning — The Next Digital Journey", speaker: "Dr Sunil Jha", url: "#", size: "4.1 MB" },
      { title: "Common Engineering & Cyber Physical Facilities Centre — Overview", speaker: "Anup Wadhwa", url: "#", size: "1.8 MB" },
    ],
    resourcePersons: [
      { name: "Dr Sunil Jha", expertise: "Cyber-physical systems, IIoT architecture, AR/ML on shop floor", org: "IIT Delhi", email: "suniljha@mech.iitd.ac.in", phone: "+91 11 2659 1135" },
      { name: "Ravi Agarwal", expertise: "Industrial automation, smart sensors, factory automation strategy", org: "Pepperl+Fuchs / AIA", email: "ravi.agarwal@pepperl-fuchs.com", phone: "+91 80 6788 1000" },
      { name: "Anup Wadhwa", expertise: "Shared facility centres, automation skilling, policy advocacy", org: "Automation Industry Association", email: "director@aia-india.org", phone: "+91 124 4014 444" },
      { name: "Saroop Chand", expertise: "Additive manufacturing, digital design, PLM consultancy", org: "Adroitec Information Systems", email: "saroop.chand@adroitec.com", phone: "+91 124 4309 200" },
    ],
    photographs: [
      { url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80", caption: "Opening session with CII Smart Manufacturing Council members" },
      { url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80", caption: "Delegates from automotive and general engineering clusters" },
      { url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80", caption: "Panel on IIoT layers and pilot cyber-physical line" },
      { url: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1200&q=80", caption: "Live demonstration of smart automation sensors" },
      { url: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1200&q=80", caption: "Additive manufacturing case studies showcase" },
      { url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80", caption: "Networking break — cross-cluster knowledge exchange" },
    ],
    learnings: [
      "Awareness on Industry 4.0 is high in pockets but uneven across clusters — sustained engagement is needed for MSMEs.",
      "Adoption is constrained more by skill gaps and change management than by technology cost.",
      "A reference architecture for IIoT layers (sensors → connectivity → analytics → AI) helps demystify deployment for industry leaders.",
      "Shared cyber-physical facility centres should be expanded regionally to give MSMEs a hands-on testbed.",
      "Future workshops should be cluster-specific (automotive, capital goods, electronics) with focused success stories.",
      "Follow-up actions: publish proceedings, build a directory of resource persons, and seed a benchmark study on Indian smart-manufacturing readiness.",
    ],
    accent: "navy",
  },
];


export const eventTypes: ("All" | EventType)[] = [
  "All",
  "Summit",
  "Workshop",
  "Roundtable",
];

export type QuickPickId =
  | "this-month"
  | "msme"
  | "sustainability"
  | "ai"
  | "networking";

export const getEventBySlug = (slug: string) => events.find((e) => e.slug === slug);
export const getFlagship = () => events.find((e) => e.flagship) ?? events[0];
const isConcluded = (e: EventItem) =>
  e.status === "completed" || new Date(e.isoDate).getTime() < Date.now();
export const getUpcoming = () => events.filter((e) => !isConcluded(e));
export const getPast = () => events.filter((e) => isConcluded(e));
export const getRelatedEvents = (slug: string, count = 3) => {
  const cur = getEventBySlug(slug);
  if (!cur) return [];
  return events
    .filter((e) => e.slug !== slug && !isConcluded(e))
    .sort((a, b) => (a.type === cur.type ? -1 : 1) - (b.type === cur.type ? -1 : 1))
    .slice(0, count);
};
