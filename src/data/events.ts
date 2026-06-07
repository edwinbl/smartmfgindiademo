export type EventType =
  | "Summit"
  | "Conference"
  | "Roundtable"
  | "Webinar"
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
}

export interface AgendaItem {
  time: string;
  title: string;
  track?: string;
  speaker?: string;
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
  accent: "navy" | "red" | "gold" | "teal" | "orange";
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
    type: "Summit",
    title: "Smart Manufacturing Summit 2026",
    tagline: "India's flagship Industry 4.0 leadership convening",
    summary:
      "Three days of strategy, breakthroughs and ecosystem deal-making with India's top manufacturing CEOs, CTOs, policymakers and technology leaders.",
    theme: "Made Smart in India — Scaling Industry 4.0 Beyond Pilots",
    date: "12–14 February 2026",
    isoDate: "2026-02-12T09:30:00+05:30",
    endDate: "2026-02-14T18:00:00+05:30",
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
    type: "Conference",
    title: "Industry 4.0 Leaders Conference",
    tagline: "Scaling digital transformation in Indian manufacturing",
    summary:
      "Two-day conference bringing together transformation leaders to share blueprints, case studies and live shop-floor demonstrations.",
    date: "18–19 March 2026",
    isoDate: "2026-03-18T09:30:00+05:30",
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
    type: "Roundtable",
    title: "CEO Roundtable: AI in Operations",
    tagline: "Invitation-only discussion with manufacturing CEOs",
    summary:
      "A curated executive dialogue on deploying generative and industrial AI across operations — Chatham House rules, 20 seats only.",
    date: "24 January 2026",
    isoDate: "2026-01-24T15:00:00+05:30",
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
      "Cross-industry benchmark on AI maturity",
      "Curated peer network for ongoing exchange",
    ],
    accent: "gold",
  },
  {
    slug: "msme-leaders-roundtable",
    type: "Roundtable",
    title: "MSME Leaders Roundtable: Cost of Digital",
    tagline: "Frank conversations on what really works for MSMEs",
    summary:
      "An invite-only roundtable for MSME promoters and CEOs to debate cost, ROI and ecosystem support for Industry 4.0 adoption.",
    date: "07 February 2026",
    isoDate: "2026-02-07T11:00:00+05:30",
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
    type: "Webinar",
    title: "Predictive Maintenance in 90 Days",
    tagline: "A practical roadmap for MSMEs",
    summary:
      "Hands-on webinar walking through a 90-day plan to deploy predictive maintenance on a single shop-floor asset.",
    date: "09 January 2026 · 4:00 PM IST",
    isoDate: "2026-01-09T16:00:00+05:30",
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
    type: "Webinar",
    title: "Energy Monitoring for Net-Zero",
    tagline: "From metering to insights",
    summary:
      "Learn how leading plants are wiring up energy data to drive both cost and carbon reduction.",
    date: "22 January 2026 · 3:30 PM IST",
    isoDate: "2026-01-22T15:30:00+05:30",
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
    type: "Webinar",
    title: "Cybersecurity for OT Environments",
    tagline: "Protecting connected shop floors",
    summary:
      "What every plant manager should know about securing connected OT — common attack patterns and a starter checklist.",
    date: "05 February 2026 · 4:00 PM IST",
    isoDate: "2026-02-05T16:00:00+05:30",
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



  // PAST
  {
    slug: "past-smart-mfg-summit-2025",
    type: "Summit",
    title: "Smart Manufacturing Summit 2025",
    tagline: "Made Smart in India — 2025 edition",
    summary:
      "The 2025 edition convened 3,100+ delegates, 110 speakers and 70 ecosystem partners across three days in Hyderabad.",
    date: "13–15 February 2025",
    isoDate: "2025-02-13T09:30:00+05:30",
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
    speakers: [S.ravi, S.arjun, S.meera],
    highlightReelUrl: "https://www.youtube.com/",
    recordingsUrl: "https://www.youtube.com/",
    proceedingsUrl: "#",
    accent: "navy",
  },
  {
    slug: "past-msme-conclave-2025",
    type: "Conference",
    title: "MSME Industry 4.0 Conclave 2025",
    tagline: "Bringing digital to India's MSME backbone",
    summary:
      "A two-day conclave focused entirely on MSME transformation pathways, with 70+ case studies showcased.",
    date: "08–09 August 2025",
    isoDate: "2025-08-08T09:30:00+05:30",
    duration: "2 days",
    location: "Ahmedabad, India",
    mode: "Physical",
    level: "Beginner",
    industry: "MSME",
    technology: "Industry 4.0",
    segment: "MSME",
    status: "completed",
    registrationLabel: "Download Proceedings",
    highlights: [
      { label: "Delegates", value: "1,400" },
      { label: "Case studies", value: "70" },
      { label: "States", value: "18" },
    ],
    pastStats: [
      { label: "Delegates", value: "1,400" },
      { label: "Case studies", value: "70" },
      { label: "Mentors engaged", value: "55" },
    ],
    speakers: [S.neha, S.priya],
    proceedingsUrl: "#",
    recordingsUrl: "https://www.youtube.com/",
    accent: "orange",
  },
  {
    slug: "past-sustainability-roundtable-2025",
    type: "Roundtable",
    title: "Sustainable Manufacturing Roundtable",
    tagline: "CXO dialogue on the path to net-zero",
    summary:
      "Closed-door roundtable convening sustainability and operations leaders from 18 large manufacturers.",
    date: "20 October 2025",
    isoDate: "2025-10-20T15:00:00+05:30",
    duration: "Half day",
    location: "New Delhi, India",
    mode: "Physical",
    level: "Advanced",
    industry: "Cross-industry",
    technology: "Sustainability",
    segment: "Enterprise",
    status: "completed",
    registrationLabel: "Download Brief",
    highlights: [
      { label: "Participants", value: "18 CXOs" },
      { label: "Industries", value: "9" },
    ],
    pastStats: [
      { label: "CXOs", value: "18" },
      { label: "Recommendations", value: "12" },
    ],
    speakers: [S.asha, S.ravi],
    proceedingsUrl: "#",
    accent: "gold",
  },
];

export const eventTypes: ("All" | EventType)[] = [
  "All",
  "Summit",
  "Conference",
  "Roundtable",
  "Webinar",
];

export type QuickPickId =
  | "this-month"
  | "msme"
  | "sustainability"
  | "ai"
  | "networking";

export const getEventBySlug = (slug: string) => events.find((e) => e.slug === slug);
export const getFlagship = () => events.find((e) => e.flagship) ?? events[0];
export const getUpcoming = () => events.filter((e) => e.status !== "completed");
export const getPast = () => events.filter((e) => e.status === "completed");
export const getRelatedEvents = (slug: string, count = 3) => {
  const cur = getEventBySlug(slug);
  if (!cur) return [];
  return events
    .filter((e) => e.slug !== slug && e.status !== "completed")
    .sort((a, b) => (a.type === cur.type ? -1 : 1) - (b.type === cur.type ? -1 : 1))
    .slice(0, count);
};
