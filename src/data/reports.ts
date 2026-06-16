// All entries in this file are derived from the 13 source CII reports PDFs.
// Do not invent statistics, findings, authors, or quotes — values must
// trace back to the corresponding PDF in /scripts source.

import type { OutcomeId } from "./solutions";

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
  coverGradient: string;
  coverImage?: string;
  outcomes: OutcomeId[];
  collectionIds: string[];
  keyFindings: { title: string; description: string }[];
  topicsCovered: string[];
  executiveSummary: string[];
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  reportCount: number;
  gradient: string;
}

const readingTime = (pages: number) => `${Math.max(3, Math.round((pages * 25) / 60))} min`;

type Seed = Omit<Report, "readingTime" | "coverGradient" | "state"> & {
  state?: string;
  coverGradient?: string;
};

const gradients = [
  "from-[hsl(var(--navy-800))] via-[hsl(var(--navy-600))] to-[hsl(var(--orange-500))]",
  "from-[hsl(var(--orange-500))] to-[hsl(var(--red-600))]",
  "from-[hsl(var(--india-green))] to-[hsl(var(--navy-700))]",
  "from-[hsl(var(--navy-700))] via-[hsl(var(--navy-600))] to-[hsl(var(--orange-500))]",
  "from-[hsl(var(--navy-900))] to-[hsl(var(--orange-500))]",
  "from-[hsl(var(--red-600))] to-[hsl(var(--orange-500))]",
  "from-[hsl(var(--navy-800))] to-[hsl(var(--navy-600))]",
  "from-[hsl(var(--navy-700))] to-[hsl(var(--navy-900))]",
  "from-[hsl(var(--red-600))] to-[hsl(var(--navy-700))]",
  "from-[hsl(var(--navy-800))] to-[hsl(var(--orange-500))]",
];

const seeds: Seed[] = [
  {
    slug: "industry-40-adoption-strategic-roadmap-indian-manufacturing",
    title: "Industry 4.0 Adoption and Strategic Roadmap for Indian Manufacturing",
    summary:
      "CII and KPMG's first annual survey of Industry 4.0 digital maturity across ten Indian manufacturing sectors, benchmarked against Germany, Japan, South Korea, China, the US, the UK and Singapore. The report exposes wide disparities — large firms score 3.4/5 while MSMEs trail at 2.4 — and although 85% of senior leaders prioritise digitalisation, only 30% of organisations have successfully scaled their initiatives.",
    industry: "Cross-sector",
    domain: "Smart Manufacturing",
    technology: "Industry 4.0",
    type: "Industry Report",
    year: 2024,
    pages: 36,
    author: "Confederation of Indian Industry (CII) & KPMG",
    publishedOn: "Dec 2024",
    gated: true,
    tags: ["Industry 4.0", "Digital Maturity", "MSME", "CII-KPMG"],
    highlightStat: { value: "85% vs 30%", label: "Leaders prioritising digitalisation vs those who have scaled it" },
    collectionIds: ["smart-mfg-starter", "msme-readiness"],
    keyFindings: [
      { title: "Leadership commitment separates leaders from laggards", description: "92% of top-quartile companies rate their leadership's commitment to Industry 4.0 as high (4 or 5), compared to only 19% in the bottom quartile." },
      { title: "Upskilling is the key differentiator", description: "85% of top-quartile companies have established upskilling programmes for digital technologies, compared to only 17% of bottom-quartile companies." },
      { title: "Digital economy ~11% of India's GDP", description: "India's digital economy contributed roughly 11% to GDP in 2023, with potential to reach 20% by 2026; NASSCOM projects 65M+ new jobs by 2025." },
      { title: "Cybersecurity gap is stark", description: "60% of top-quartile companies have advanced cybersecurity measures in place, while only 10% of bottom-quartile companies do." },
    ],
    topicsCovered: [
      "Study objective and research methodology",
      "The digital economy: fueling global and Indian growth",
      "Understanding Industry 4.0 maturity of Indian manufacturers",
      "Government support for accelerating Industry 4.0 adoption",
      "Sector-wise Industry 4.0 adoption levels",
      "Strategic recommendations for Indian manufacturers",
      "Harnessing Global Value Chains (GVCs)",
    ],
    executiveSummary: [
      "Indian manufacturers display wide disparities in digital maturity: large firms average 3.4, medium-sized 2.9 and MSMEs 2.4 on a 5-point scale; the top quartile scores 4.3 while the bottom quartile scores only 1.9 — underscoring an urgent need for targeted interventions.",
      "Despite 85% of business leaders prioritising digital transformation, only 30% of organisations have successfully scaled their digital initiatives — a gap the report calls the 'Industry 4.0 paradox', attributed to unclear roadmaps, limited expertise and resource constraints.",
      "Automotive, electronics and pharmaceuticals are the frontrunner sectors; textiles, metals & mining, and heavy equipment lag, constrained by financial barriers, legacy system incompatibility and skilled workforce shortages.",
    ],
  },
  {
    slug: "transforming-india-chemical-sector-digital-analytics",
    title: "Transforming India's Chemical Sector Through Digital and Analytics",
    summary:
      "Published for CII's 'Smart Factory for Chemicals & Petrochemicals Industry' seminar (Dec 2023) with McKinsey as knowledge partner, this report outlines how digital and analytics (DnA) transformation can unlock competitive advantage for Indian chemical companies — particularly MSMEs — at a time when the sector is projected to grow 11–12% annually through 2027 and triple its global market share by 2040.",
    industry: "Chemicals",
    domain: "Smart Manufacturing",
    technology: "Analytics",
    type: "Industry Report",
    year: 2023,
    pages: 17,
    author: "CII × McKinsey & Company",
    publishedOn: "Dec 2023",
    gated: false,
    tags: ["Chemicals", "Digital & Analytics", "McKinsey", "MSME"],
    highlightStat: { value: "5–10 pp", label: "EBITDA uplift from end-to-end digital and analytics transformation" },
    collectionIds: ["msme-readiness"],
    keyFindings: [
      { title: "EBITDA uplift of 5–10 pp", description: "End-to-end DnA transformation can boost EBITDA by 5–10 percentage points across manufacturing, supply chain and procurement." },
      { title: "MSME EBITDA doubling potential", description: "A typical Indian MSME chemical company (~INR 100–105 Cr revenue) has potential to double its EBITDA margin (INR 5–10 Cr) through DnA initiatives." },
      { title: "WEF Lighthouse impact range", description: "Successful WEF Lighthouse digital transformations show factory output up 4–140%, productivity up 3–400%, OEE up 2–85%, and product cost down 2–70%." },
      { title: "Visibility extends beyond the plant", description: "DnA initiatives provide near-real-time visibility on shipments, inventory and end-customer demand; smart pricing models align sales, manufacturing and procurement." },
    ],
    topicsCovered: [
      "India's chemical industry at an inflection point",
      "Digital & analytics: a catalyst for change",
      "DnA transformation framework",
      "Align and commit leadership on value and plan",
      "Build delivery capabilities",
      "Impact stories of successful DnA transformations",
      "Myth vs reality",
    ],
    executiveSummary: [
      "India's chemical sector is projected to grow 11–12% in 2021–27 and 7–10% in 2027–40, potentially tripling its global market share by 2040; domestic demand is expected to rise from USD 170–180 billion in 2021 to USD 850–1,000 billion by 2040, with MSMEs (28–30% of the sector) central to the trajectory.",
      "End-to-end DnA transformation can lift EBITDA by 5–10 percentage points; a typical Indian MSME chemical company has the potential to double its EBITDA margin through initiatives spanning yield, energy efficiency, throughput, product quality and G&A productivity.",
      "The DnA framework rests on three pillars: align and commit leadership on a business-led roadmap, build delivery capabilities across talent, operating model, data and technology, and implement change management that drives adoption and scaling.",
    ],
  },
  {
    slug: "manufacturing-in-india-creating-a-smarter-future",
    title: "Manufacturing in India: Creating a Smarter Future",
    summary:
      "Published by the CII Smart Manufacturing Council, this compendium presents eight in-depth case studies from Indian and global companies — including Ace Micromatic Group, B&R India, Bosch India, IBM India, Rockwell Automation India and Siemens India — demonstrating real-world deployments of smart manufacturing technologies and the resulting benefits.",
    industry: "Manufacturing",
    domain: "Smart Manufacturing",
    technology: "Industry 4.0",
    type: "Case Study Compendium",
    year: 2017,
    pages: 76,
    author: "CII Smart Manufacturing Council",
    publishedOn: "2017",
    gated: false,
    tags: ["Smart Manufacturing", "Industry 4.0", "Case Studies", "CII"],
    highlightStat: { value: "USD 300B → 1T", label: "India manufacturing growth target requiring 15%+ annual growth" },
    collectionIds: ["smart-mfg-starter"],
    keyFindings: [
      { title: "Growth target requires 15%+ annual growth", description: "Reaching the USD 1 trillion manufacturing target by 2022 requires the sector to grow from USD 300 billion at more than 15% annually, with ~USD 2 trillion capital investment." },
      { title: "Smart factory as a self-correcting system", description: "A smart factory integrates data from physical, operational and human assets to move from a passive assembly line to a self-correcting system that uses real-time data to make changes to itself." },
      { title: "IT/OT integration is foundational", description: "Smart factories require shop-floor decisions integrated with broader enterprise IT through an interconnected IT/OT landscape, connecting factories across locations and analysing data through the cloud." },
      { title: "Eight company case studies as inspiration", description: "Case studies from Ace Micromatic Group, B&R India, Bosch India, IBM India, IFM Electronic India, Moglix, Rockwell Automation India and Siemens India." },
    ],
    topicsCovered: [
      "Think SMART — Strategy, Manufacturing, Analytics, Revolution, Technology",
      "Revolutions and their reverberations",
      "What is Industry 4.0?",
      "How factories become smart",
      "Case studies (Ace Micromatic, B&R, Bosch, IBM, Rockwell, Siemens et al.)",
      "Key takeaways",
    ],
    executiveSummary: [
      "The Make in India campaign set a target to raise manufacturing's contribution to GDP from 16% in 2015–16 to 25% by 2022, requiring the sector to grow from USD 300 billion to USD 1 trillion at more than 15% annually — and roughly USD 2 trillion of capital investment.",
      "Industry 4.0 combines advanced robotics, AI, cloud computing and big data analytics with cyber-physical systems to create fully automated smart factories that use real-time data from connected operations to make decentralised decisions.",
      "Smart manufacturing must be driven from the boardroom and entails a mindset change for the whole organisation; the case studies in this compendium show how Indian companies of all sizes are already pursuing end-to-end integration from shop floor to supply chain.",
    ],
  },
  {
    slug: "action-plan-fostering-adoption-smart-manufacturing",
    title: "Action Plan for Fostering Adoption of Smart Manufacturing",
    summary:
      "A CII report prepared in support of the Department of Heavy Industry's Samarth Udyog programme. It surveys national smart manufacturing programmes from Germany, USA, France, China and Sweden, and proposes a five-step approach for India covering stakeholder mapping, definitions, sector prioritisation, an Industry 4.0 India Platform, and an enabling ecosystem.",
    industry: "Manufacturing",
    domain: "Policy",
    technology: "Industry 4.0",
    type: "Strategic Roadmap",
    year: 2018,
    pages: 16,
    author: "CII for Department of Heavy Industry (DHI)",
    publishedOn: "2018",
    gated: false,
    tags: ["Policy", "Roadmap", "DHI", "Samarth Udyog"],
    highlightStat: { value: "USD 390B → 1T", label: "India manufacturing growth target requiring 12–15% annual growth" },
    collectionIds: ["smart-mfg-starter"],
    keyFindings: [
      { title: "Manufacturing growth imperative", description: "India must grow manufacturing from USD 390 billion to USD 1 trillion by 2025, implying 12–15% annual growth — roughly double the then-current 6–7% rate." },
      { title: "Global programmes as benchmarks", description: "Germany (Plattform Industrie 4.0), USA (Manufacturing USA), France (Alliance pour l'Industrie du Futur) and China (Made in China 2025) each deployed multi-hundred-million-dollar national programmes." },
      { title: "CII Smart Manufacturing Council", description: "CII formulated a dedicated Smart Manufacturing Council in April 2017 and ran over 30 workshops spanning awareness to advanced functional topics across 3–4 years." },
      { title: "Recommended DHI actions", description: "DHI is recommended to pilot a recognition award for the automotive sector and one cluster (Gurgaon/Pune), then scale to engineering and electronics across six cluster locations." },
    ],
    topicsCovered: [
      "Executive summary",
      "Background — Samarth Udyog Programme and CII Council",
      "Need for smart manufacturing / the smart trade-off",
      "Government programmes on smart manufacturing by other countries",
      "Driving adoption of smart manufacturing in India — step by step",
      "Recommendations for DHI",
      "Conclusion",
    ],
    executiveSummary: [
      "India's manufacturing sector must grow at 12–15% per year to meet the Government's USD 1 trillion target by 2025, doubling the then-current annual growth rate of 6–7%. Smart manufacturing is identified as the critical competitiveness lever.",
      "Countries including Germany (Plattform Industrie 4.0), France (Alliance pour l'Industrie du Futur), China (Made in China 2025) and the USA (Manufacturing USA) have each launched dedicated national smart manufacturing programmes with substantial public funding and public-private ratios of 2:1 to 5:1.",
      "CII proposes a five-step approach: identify stakeholders, define the smart manufacturing 'stack', prioritise sectors, develop an Industry 4.0 India Platform, and build an enabling ecosystem — with specific actions for DHI on recognition programmes, Centres of Excellence, standardisation and capital subsidy models.",
    ],
  },
  {
    slug: "predictive-maintenance-for-oil-and-gas",
    title: "Predictive Maintenance for Oil and Gas",
    summary:
      "A whitepaper by Utthunga Technologies arguing that AI/ML-based predictive maintenance in oil & gas plants becomes far more accurate when AI is supplemented by first-principles physics-based simulation models built from P&ID and PFD design data. Heat exchanger and centrifugal pump examples demonstrate how comparing design-model outputs with live process data reveals fouling and impeller deterioration earlier than regression alone.",
    industry: "Oil & Gas",
    domain: "Smart Manufacturing",
    technology: "AI / ML",
    type: "Whitepaper",
    year: 2020,
    pages: 7,
    author: "Utthunga Technologies — Anil Dutt",
    publishedOn: "May 2020",
    gated: false,
    tags: ["Predictive Maintenance", "Digital Twin", "Oil & Gas", "AI/ML"],
    highlightStat: { value: "~50%", label: "Of preventive maintenance activities studies show are often unnecessary or fail to prevent breakdown" },
    collectionIds: ["digital-factory"],
    keyFindings: [
      { title: "Physics-informed models outperform pure regression", description: "First-principles simulation based on P&ID/PFD data meets rigorous thermodynamics (material and heat balance) and yields more valuable maintenance insight than regression models built only on historical process data." },
      { title: "Heat exchanger fouling visible in outlet temperature", description: "At 60% fouling, hot-side outlet temperature rises to 61.5°C versus 39.8°C at clean condition; comparing cold-side actual data against the model surfaces severe fouling before breakdown." },
      { title: "Pump impeller deterioration via discharge pressure", description: "As pump deterioration grows through 20%, 40% and 60% stages, discharge pressure decreases for a constant flow rate; tracking against the model predicts impeller distortion or mechanical issues." },
      { title: "Online KPIs enable energy benchmarking", description: "The physics model supports online KPIs including equipment efficiencies, annual cost of operation, energy cost per unit and accumulated savings — acting as a 'watchdog' for asset managers." },
    ],
    topicsCovered: [
      "IIoT platform and predictive/prescriptive insights overview",
      "First-principles simulation vs statistical regression",
      "General-purpose heat exchanger: fouling analysis",
      "Centrifugal pump: deterioration analysis",
      "KPI calculations for online equipment monitoring",
      "Benefits of asset health monitoring",
    ],
    executiveSummary: [
      "For plants to leverage AI/ML for failure prediction, a more meaningful approach models equipment on first principles using design data from P&ID and PFD drawings and compares model output with actual process data — giving maintenance engineers thermodynamically correct predictions grounded in material and heat balance.",
      "The heat exchanger simulation shows that as fouling rises from clean to 60%, hot-side outlet temperature rises from 39.8°C to 61.5°C; tracking this trajectory against actual plant data can trigger maintenance before catastrophic failure.",
      "Predictive maintenance is rapidly emerging as a leading Industry 4.0 use case, but nearly half of all preventive maintenance activities are efforts to mitigate breakdown that often do not deliver desired results — making physics-informed AI an essential upgrade over schedule-based maintenance.",
    ],
  },
  {
    slug: "manufacturing-reimagining-resilient-sustainable-future",
    title: "Manufacturing: Reimagining a Resilient and Sustainable Future",
    summary:
      "An article by Irina Ghose, Executive Director of Microsoft Cloud Solutions India, arguing that COVID-19 has permanently accelerated digital transformation across factory operations, supply chains, product innovation and customer engagement. It highlights how IoT, cloud (Azure), AI and mixed reality enable intelligent and agile factories, with examples from Zeiss Group, Eureka Forbes and Larsen & Toubro.",
    industry: "Manufacturing",
    domain: "Sustainability",
    technology: "Cloud",
    type: "Article",
    year: 2022,
    pages: 3,
    author: "Irina Ghose — Microsoft Cloud Solutions, India",
    publishedOn: "Dec 2022",
    gated: false,
    tags: ["Digital Transformation", "Microsoft Azure", "Resilience", "Supply Chain"],
    highlightStat: { value: "6,000+", label: "Eureka Forbes door-to-door sales team unified on Dynamics 365" },
    collectionIds: ["sustainability"],
    keyFindings: [
      { title: "Intelligent and agile factory enablement", description: "Zeiss Group deployed Microsoft Azure compute, AI and IoT to help OEMs improve quality management, produce energy-efficient microchips and deliver new digital healthcare solutions and device maintenance." },
      { title: "Supply chain resilience through AI", description: "AI and ML reduce supply chain complexity to deliver the right product at the right time; data analytics enable real-time visibility for inventory allocation and re-allocation." },
      { title: "Product-as-a-service model", description: "Connected product innovation gives manufacturers real-time insight into which products and features customers are using, without waiting for survey results — enabling proactive field service." },
      { title: "CRM consolidation for sales enablement", description: "Eureka Forbes consolidated seven CRMs onto Dynamics 365, enabling its 6,000+ direct sales team to access granular customer insights, including water quality data and product recommendations, on smartphones." },
    ],
    topicsCovered: [
      "Intelligent and agile factories",
      "Resilient supply chains",
      "Unlocking innovation and delivering new services",
      "Customer engagement redefined",
      "Workforce transformation",
    ],
    executiveSummary: [
      "Businesses embracing agile manufacturing with IoT, cloud, AI and mixed reality will achieve new productivity levels — predictive maintenance reduces downtime, and AI/cloud optimise overall equipment efficiency vs capacity, saving costs by reducing material waste and energy use.",
      "Resilient supply chains depend on AI/ML to deliver the right product at the right time; analytics provide real-time visibility for inventory allocation, while platforms such as Dynamics 365 Supply Chain Management and Azure IoT Central enable rapid deployment.",
      "Workforce transformation matters as much as technology adoption: advancing modern roles, reskilling for a data-driven culture and empowering first-line workers — illustrated by Larsen & Toubro adopting Microsoft Teams to streamline global communications and unify training.",
    ],
  },
  {
    slug: "iot-cloud-edge-business-context-sap",
    title: "IoT and Industry 4.0: Turning Sensor Data into Business Outcomes with Edge and Cloud",
    summary:
      "An article by PVN PavanKumar, Director of IoT Product Management at SAP Labs India, arguing that embedded business context — associating raw sensor data with master data, business rules and process parameters — is the key differentiator for Industrial IoT. Silo replenishment and predictive maintenance examples show how Edge ('the subconscious mind') and Cloud ('the conscious mind') complement each other.",
    industry: "Cross-sector",
    domain: "Smart Manufacturing",
    technology: "Edge & Cloud",
    type: "Article",
    year: 2021,
    pages: 2,
    author: "PVN PavanKumar — SAP Labs India",
    publishedOn: "2021",
    gated: false,
    tags: ["IIoT", "Edge Computing", "Cloud", "SAP"],
    highlightStat: { value: "50%+", label: "Gartner: digital business solutions in production that will be IoT-enabled by 2024" },
    collectionIds: ["digital-factory"],
    keyFindings: [
      { title: "Gartner: 50%+ IoT-enabled by 2024", description: "Gartner forecasts that by 2024, at least 50% of digital business solutions in production will be IoT-enabled, and by end-2021 more than 50% of large enterprises will deploy at least one edge computing use case." },
      { title: "Silo replenishment as a business-context use case", description: "Fill-level sensor distance readings are converted to weight using silo geometry master data, consumption rates calculated over time, and combined with plant data to automatically trigger a purchase requisition in the ERP." },
      { title: "Edge as the 'subconscious mind'", description: "Edge computing handles routine IoT processing within the 'known', while cloud watches for the 'unknown' requiring more compute — the two are complementary, not competing architectures." },
      { title: "Industry 4.0 extends company-wide", description: "IoT applications in Cloud and Edge put Industry 4.0 to work companywide, connecting customers, their customers' customers, and partners across the value chain." },
    ],
    topicsCovered: [
      "Embedded business context as the key IoT differentiator",
      "IoT-driven replenishment of receptacles (silos and containers)",
      "Predictive maintenance via sensor-to-business-context association",
      "IoT in Cloud vs Edge and their interoperability",
      "Industry 4.0 as a company-wide transformation",
    ],
    executiveSummary: [
      "Embedded business context is the key differentiation for Industrial IoT: raw sensor data is meaningless until associated with master data — asset specifications, geometry, density, customer identity — at which point it can trigger purchase requisitions in SAP S/4HANA or compute a health score for a service call.",
      "Edge and Cloud are complementing pillars: customers can train predictive/ML models on the Cloud and deploy them on the Edge, design interoperable rules across both, and send commands from Cloud to Edge to sensors — Edge handling the routine 'known', Cloud watching for the 'unknown'.",
      "Industry 4.0 goes far beyond smart manufacturing: the imperative is to connect the entire company from front office to back office, orchestrating sales, service and logistics with production, so companies stay ahead of competition.",
    ],
  },
  {
    slug: "ai-can-help-keep-workforce-safe",
    title: "The Workforce Faces a Major COVID-19 Risk. Here's How AI Can Help Keep Them Safe.",
    summary:
      "An article by Tejpreet S. Chopra (BLP Group / BLP Industry.AI) describing three AI-powered solutions developed for factory floor safety during the COVID-19 pandemic — camera-based analytics ('Trust AI'), mobile proximity tracking ('US Pro') and wearable IoT devices ('Spot AI') — addressing PPE compliance, social distancing, temperature monitoring and contact tracing.",
    industry: "Cross-sector",
    domain: "Safety",
    technology: "AI / ML",
    type: "Article",
    year: 2020,
    pages: 2,
    author: "Tejpreet S. Chopra — BLP Group / BLP Industry.AI",
    publishedOn: "Nov 2020",
    gated: false,
    tags: ["AI", "Worker Safety", "COVID-19", "IIoT"],
    highlightStat: { value: "3 solutions", label: "Detection, monitoring and tracing covered by Trust AI, US Pro and Spot AI" },
    collectionIds: ["digital-factory"],
    keyFindings: [
      { title: "Three-tier AI safety architecture", description: "BLP Industry.AI developed three complementary solutions — cloud camera analytics, mobile-phone proximity sensing and wearable vibration devices — addressing the full spectrum from early detection to containment." },
      { title: "AI as a pandemic-resilience enabler", description: "Supply chain disruption during COVID-19 forced companies to accelerate digital transformation; AI was identified as a key tool to improve worker safety, productivity and decision-making simultaneously." },
      { title: "Scalable beyond COVID scenarios", description: "The same solutions can be applied to common safety scenarios such as fire detection, making them permanent factory-floor assets rather than pandemic-specific tools." },
      { title: "Affordable SME-focused approach", description: "Constant in-person monitoring and contact tracing 'would crush any small and medium-scale company', making AI-based automation essential for cost-effective safety compliance." },
    ],
    topicsCovered: [
      "AI for early warning",
      "'Trust AI' — camera feed and cloud technology",
      "'US Pro' — mobile phone technology for safety",
      "'Spot AI' — wearable devices",
      "Beyond COVID: manufacturing resilience",
    ],
    executiveSummary: [
      "'Trust AI' is a cloud-based system using visual analytics, mathematical models and neural networks to analyse existing factory-floor video feeds, issuing real-time alerts when PPE violations or social-distancing breaches are detected.",
      "'US Pro' leverages mobile phone-to-phone communication to provide real-time social-distancing alerts, track employee temperatures every few hours to detect fever, and enable fast contact tracing by listing all who were in close proximity to an infected person.",
      "'Spot AI' uses wearable devices — wristbands or smart ID cards — that vibrate on distancing breaches and transmit data to the cloud, helping safety officers identify the root causes of recurring proximity problems.",
    ],
  },
  {
    slug: "smart-manufacturing-reducing-costs-virtual-simulation",
    title: "Smart Manufacturing: Reducing Costs Through Virtual Simulation",
    summary:
      "A whitepaper from Hexagon Manufacturing Intelligence / MSC Software explaining how virtual simulation across the full product development and manufacturing chain — design and engineering, production, and metrology — can deliver substantial cost savings and quality improvements. A Formula Student wheel-carrier case study at Paderborn University demonstrates ~50% weight reduction with the MSC virtual development chain.",
    industry: "Manufacturing",
    domain: "Smart Manufacturing",
    technology: "Digital Twin",
    type: "Whitepaper",
    year: 2021,
    pages: 7,
    author: "Hexagon Manufacturing Intelligence / MSC Software",
    publishedOn: "2021",
    gated: false,
    tags: ["Virtual Simulation", "Digital Twin", "MSC Software", "Smart Factory"],
    highlightStat: { value: "Up to 30%", label: "Production cost reduction achievable through virtual simulation" },
    collectionIds: ["digital-factory"],
    keyFindings: [
      { title: "~50% process and development cost savings", description: "In practice, savings in process and development costs of around 50% can be achieved through the virtual development chain using MSC Software simulation tools." },
      { title: "Up to 30% production cost reduction", description: "Production costs can be reduced by up to 30% through better machine utilisation, optimised stage sequences, more sustainable material use and less set-up effort." },
      { title: "Digimat cuts design iterations by up to 70%", description: "Using Digimat for fibre-reinforced plastics simulation, the number of design changes can be reduced by up to 70% because very precise simulation results are available early in the cycle." },
      { title: "~50% wheel carrier weight saving", description: "MSC Apex Generative Design produced variants with an average weight saving of almost 50% versus the original cast-aluminium design, incorporating manufacturing aspects and boundary conditions." },
    ],
    topicsCovered: [
      "Digitalizing manufacturing and the smart factory vision",
      "Where do the costs arise? (up to 90% of lifecycle costs are set early)",
      "The virtual development chain with MSC Software",
      "Value engineering with FormingSuite (sheet metal feasibility)",
      "Minimize development time with Digimat (fibre-reinforced plastics)",
      "Case study: virtual development chain for a wheel carrier (Paderborn Formula Student)",
      "Virtual Lifecycle Manufacturing — the virtual production process",
    ],
    executiveSummary: [
      "Development and production planning departments are responsible for up to 90% of a product's lifecycle costs at a point when the component does not yet physically exist; early virtual simulation is therefore essential to enable robust, error-free and economical production.",
      "In practice, savings in process and development costs of around 50% can be achieved; production costs can be reduced by up to 30% through better machine utilisation, optimised stage sequences, more sustainable material use and less set-up effort; quality is improved by reducing scrap and rework by over 20%.",
      "Virtual Lifecycle Manufacturing combines virtual measurement data from production simulation with real measurement data in a unified quality system, enabling AI/ML-based simplified models to feed corrections back into the process — being developed as a scalable solution for medium-sized suppliers.",
    ],
  },
  {
    slug: "additive-manufacturing-2020-first-time-right",
    title: "Additive Manufacturing 2020: Smarter 3D Printing — First Time Right by Design",
    summary:
      "An eBook from MSC Software and Hexagon Manufacturing Intelligence compiling articles and case studies on how simulation enables 'First Time Right' additive manufacturing across aerospace, automotive and industrial applications. It introduces MSC Apex Generative Design and showcases case studies from Bosch India (70% mass reduction), MBFZ toolcraft, Samara University, Safran and others.",
    industry: "Manufacturing",
    domain: "Engineering",
    technology: "Additive Manufacturing",
    type: "eBook",
    year: 2020,
    pages: 44,
    author: "Hendrik Schafstall, Roger Assaker, Volker Mensing — MSC Software / Hexagon MI",
    publishedOn: "2020",
    gated: false,
    tags: ["Additive Manufacturing", "Generative Design", "Simulation", "MSC Software"],
    highlightStat: { value: "70%", label: "Mass reduction achieved by Bosch India on a fixture tool using Simufact Additive" },
    collectionIds: ["digital-factory"],
    keyFindings: [
      { title: "Generative Design cuts simulation time up to 10×", description: "With MSC Apex Generative Design, simulation time and cost can typically be cut by a factor of ten, enabling design-space exploration that was previously impractical." },
      { title: "Bosch India: 70% mass saving", description: "Robert Bosch India used Simufact Additive to digitally lightweight a fixture tool and saved 70% in mass before any physical AM trial." },
      { title: "Manufacturing cost in the optimisation loop", description: "MSC Apex Generative Design automatically checks each candidate for material required, support structure volume, machining cost for surface roughness and build-plate maximisation — embedding cost awareness directly into the design phase." },
      { title: "AM increasingly used for serial production", description: "After more than 30 years as a prototyping tool, AM is becoming widespread across industry sectors and is now used for serial production of high-tech parts in aeronautics, space and medical industries." },
    ],
    topicsCovered: [
      "Bridging the gap between design and additive manufacturing using smart generative design",
      "Fast and accurate AM manufacturability analysis (Coriolis Composites)",
      "Flexibility through AM: how simulation supports 3D prototyping (MBFZ toolcraft)",
      "MaterialCenter for metals AM data management (US Army)",
      "Simufact Additive: collaborative simultaneous engineering (Safran)",
      "Robert Bosch India: digital lightweighting saves 70% mass on a fixture tool",
      "AM quality system for gas turbine engine parts (Samara University)",
    ],
    executiveSummary: [
      "MSC Apex Generative Design connects design solutions with virtual manufacturing simulation (Simufact Additive / Digimat AM), enabling designs to account for engineering and production challenges earlier in product development; as a digital twin it identifies the best printing process and optimises part orientation.",
      "Robert Bosch India used Simufact Additive to model the AM metal build process and post-processing for a fixture tool, achieving a 70% reduction in mass before committing to physical manufacturing — a direct demonstration of the business value of virtual AM simulation.",
      "Additive Manufacturing affords the advantage of small production runs with less material waste, significant energy cost savings and the ability to produce high-performance parts that cannot be subtractively manufactured, cast or formed; this eBook frames simulation as the key enabler for scaling AM from prototyping to serial production.",
    ],
  },
  {
    slug: "7-habits-of-highly-effective-generative-design",
    title: "The 7 Habits of Highly Effective Generative Design",
    summary:
      "A whitepaper from MSC Software / Hexagon Manufacturing Intelligence defining Generative Design as a disruptive technology that automatically creates multiple manufacturing-viable design alternatives using topology optimisation, AI and advanced simulation. It articulates seven habits — Exploration, Usability, Productivity, Costing, Sustainability, Manufacturability and First-Time-Right — and demonstrates a ~50% weight saving on a Formula Student wheel carrier at Paderborn University.",
    industry: "Engineering",
    domain: "Design",
    technology: "Generative Design",
    type: "Whitepaper",
    year: 2021,
    pages: 12,
    author: "Deppe, Reiher, Dua, Hanna, Mensing — MSC Software / Hexagon MI",
    publishedOn: "2021",
    gated: false,
    tags: ["Generative Design", "Topology Optimisation", "MSC Apex", "Lightweighting"],
    highlightStat: { value: "~50%", label: "Average weight saving on Formula Student wheel carrier" },
    collectionIds: ["digital-factory"],
    keyFindings: [
      { title: "~50% weight saving on wheel carrier", description: "Using MSC Apex Generative Design with Adams multi-body simulation as load input, design variants with an average weight saving of almost 50% were generated for the Formula Student wheel carrier — successfully printed and raced." },
      { title: "Part consolidation as weight and cost driver", description: "Generative Design enables replacement of multi-part fabricated assemblies with a single organic part, reducing weight, component count, assembly complexity, handling, warehousing and tolerance stack-up." },
      { title: "Cost automation in the design loop", description: "If the goal is to minimise 3D printing cost, the tool automatically checks each candidate for material required, support structure volume, machining cost for surface roughness and parts-per-build-plate maximisation." },
      { title: "First-Time-Right extends to production", description: "The algorithm produces smooth transitions and self-supporting structures that reduce hot spots, warpage and coating-device errors — enabling first-time-right outcomes in both simulation and physical AM production." },
    ],
    topicsCovered: [
      "Introduction to Generative Design",
      "Bridging the chasm between CAE design and manufacturing",
      "Design for Exploration",
      "Design for Usability, Productivity, Costing, Sustainability, Manufacturability and First-Time-Right",
      "Real world example: Formula Student wheel carrier",
      "Summary and conclusions",
    ],
    executiveSummary: [
      "Generative Design significantly alters the conventional design cycle by leveraging topology optimisation, AI and advanced simulation to automatically create multiple viable design alternatives from simple design criteria — freeing engineers from routine geometry work.",
      "The seven habits provide a practical framework covering Exploration (automated topology optimisation with part consolidation), Costing (automatic checks for material, support structures, surface machining and build-plate efficiency), Sustainability (weight reduction = less lifecycle energy) and First-Time-Right (self-correcting algorithm producing printable results in a single fluent process).",
      "A Formula Student wheel-carrier case study at Paderborn University delivered an average weight saving of nearly 50% versus the original cast-aluminium design, while Simufact Additive verification ensured all candidates were manufacturing-ready before any physical print.",
    ],
  },
  {
    slug: "ai-ml-trimmed-body-ntf-odyssee-cae-satven",
    title: "AI/ML-based Trimmed Body NTF & Global Modes Prediction and Optimization using ODYSSEE CAE",
    summary:
      "A Hexagon MI / MSC Software case study describing how Satven — a leading Indian automotive engineering bureau — used ODYSSEE CAE (LUNAR) machine learning to cut trimmed body NVH simulation and optimisation time from multiple days to a few minutes, while maintaining 91% correlation with conventional CAE results.",
    industry: "Automotive",
    domain: "Engineering",
    technology: "AI / ML",
    type: "Case Study",
    year: 2021,
    pages: 4,
    author: "Hexagon MI / MSC Software — Satven case study",
    publishedOn: "2021",
    gated: false,
    tags: ["AI/ML", "NVH", "ODYSSEE CAE", "Automotive"],
    highlightStat: { value: "3 hrs → 10 sec", label: "NTF prediction runtime: regular CAE vs LUNAR after ML training" },
    collectionIds: ["automotive-transformation"],
    keyFindings: [
      { title: "NTF prediction in 10 seconds", description: "Run time with LUNAR for NTF Prediction after ML training is 10 seconds, versus 3 hours with regular CAE." },
      { title: "Optimisation in 2–5 minutes", description: "Run time with LUNAR for optimisation (after ML training) is 2–5 minutes, compared to 72 hours with the regular CAE process." },
      { title: "91% correlation with CAE", description: "Correlation between LUNAR prediction and conventional CAE results is 91%, validating ML as a reliable surrogate for NVH simulation." },
      { title: "Automotive bureau use case", description: "Satven, a leading Indian automotive engineering bureau with centres in Munich, Hyderabad and Chennai, deployed ODYSSEE CAE to deliver a definite competitive advantage on NVH workflows." },
    ],
    topicsCovered: [
      "Satven company background",
      "Trimmed body NTF & global modes — challenge",
      "ODYSSEE CAE (LUNAR) AI/ML approach",
      "Validation: LUNAR vs CAE results",
      "Runtime impact on prediction and optimisation",
    ],
    executiveSummary: [
      "Satven, an Indian automotive engineering bureau, adopted Hexagon's ODYSSEE CAE (LUNAR) to cut trimmed body NVH simulation and optimisation from multiple days to a few minutes — without losing engineering fidelity.",
      "LUNAR predicts the NTF (Noise Transfer Function — excitation at TBA, response at driver ear sound pressure level) in 10 seconds after training, compared with 3 hours for the regular CAE process, while maintaining a 91% correlation with conventional CAE results.",
      "For optimisation, LUNAR cuts runtime from 72 hours with regular CAE to 2–5 minutes — enabling design exploration cycles that were previously impractical and delivering a definite competitive advantage to Satven's automotive customers.",
    ],
  },
  {
    slug: "ai-ml-crash-parameters-odyssee-cae-satven",
    title: "AI/ML-based Prediction of Crash Parameters using ODYSSEE CAE",
    summary:
      "A Hexagon MI / MSC Software case study showing how Satven used ODYSSEE CAE (LUNAR) machine learning to predict energy absorption and force for a crush can across different material and thickness combinations — reducing prediction time from multiple hours to a few seconds and removing the need for simulation software for initial predictions.",
    industry: "Automotive",
    domain: "Engineering",
    technology: "AI / ML",
    type: "Case Study",
    year: 2021,
    pages: 4,
    author: "Hexagon MI / MSC Software — Satven case study",
    publishedOn: "2021",
    gated: false,
    tags: ["AI/ML", "Crash Simulation", "ODYSSEE CAE", "Automotive"],
    highlightStat: { value: "Hours → seconds", label: "Crush-can crash parameter prediction with ODYSSEE CAE (LUNAR)" },
    collectionIds: ["automotive-transformation"],
    keyFindings: [
      { title: "Multi-hour predictions in seconds", description: "ODYSSEE CAE reduced the time required for predicting the effects of different materials and thicknesses on crush-can crash parameters from multiple hours to a few seconds." },
      { title: "No simulation software needed for initial predictions", description: "After ML training, initial energy-absorption and force predictions can be produced without running full CAE simulation software." },
      { title: "Trained across material × thickness combinations", description: "LUNAR was trained on energy absorption and force data for crush cans across multiple material grades (e.g. W6) and thicknesses (0.8 mm, 1.0 mm), then used to predict unseen combinations." },
      { title: "Strategic capability for automotive bureaus", description: "Satven embarked on competency development projects to strengthen its capabilities in delivering AI/ML-based solutions, leveraging the technology for competitive advantage on automotive engineering work." },
    ],
    topicsCovered: [
      "Satven company background",
      "Crush can energy absorption — challenge",
      "ODYSSEE CAE (LUNAR) AI/ML training and prediction",
      "Result comparison: CAE vs LUNAR",
      "Advantages for product cycle time",
    ],
    executiveSummary: [
      "Satven adopted ODYSSEE CAE (LUNAR) to predict energy absorption (force) for a crush can across specific combinations of material and thickness — using a machine-learning approach that cuts prediction time from multiple hours to a few seconds.",
      "Once the ML model is trained on existing CAE simulation data, initial predictions for new material/thickness combinations can be made without re-running full CAE simulations, dramatically compressing the product cycle time.",
      "By embedding AI/ML into engineering workflows, Satven — an Indian automotive bureau serving global OEMs — strengthens its ability to deliver superior services and a definite competitive advantage to its customers on crash and crashworthiness analysis.",
    ],
  },
];

const collectionCounts = (id: string) =>
  seeds.filter((s) => (s.collectionIds ?? []).includes(id)).length;

export const collections: Collection[] = [
  {
    id: "smart-mfg-starter",
    title: "Smart Manufacturing Starter Pack",
    description: "Foundational CII reports to begin your Industry 4.0 journey.",
    reportCount: collectionCounts("smart-mfg-starter"),
    gradient: "from-[hsl(var(--navy-800))] to-[hsl(var(--navy-600))]",
  },
  {
    id: "msme-readiness",
    title: "MSME Readiness",
    description: "Benchmark studies and adoption pathways for Indian MSMEs.",
    reportCount: collectionCounts("msme-readiness"),
    gradient: "from-[hsl(var(--red-600))] to-[hsl(var(--orange-500))]",
  },
  {
    id: "sustainability",
    title: "Resilience & Sustainability",
    description: "Cloud, agility and sustainability perspectives.",
    reportCount: collectionCounts("sustainability"),
    gradient: "from-[hsl(var(--india-green))] to-[hsl(var(--navy-700))]",
  },
  {
    id: "automotive-transformation",
    title: "Automotive Transformation",
    description: "AI/ML in automotive engineering and CAE workflows.",
    reportCount: collectionCounts("automotive-transformation"),
    gradient: "from-[hsl(var(--navy-900))] to-[hsl(var(--orange-500))]",
  },
  {
    id: "digital-factory",
    title: "Digital Factory Playbooks",
    description: "Whitepapers and articles on the modern digital factory.",
    reportCount: collectionCounts("digital-factory"),
    gradient: "from-[hsl(var(--orange-500))] to-[hsl(var(--red-600))]",
  },
];

const coverImages: Record<string, string> = {
  "industry-40-adoption-strategic-roadmap-indian-manufacturing": "/__l5e/assets-v1/21ccae13-bca6-403e-be76-c98f038795bb/industry-40-roadmap.jpg",
  "transforming-india-chemical-sector-digital-analytics": "/__l5e/assets-v1/613e03de-e914-4e30-bb2d-1e09c3625a46/chemical-sector-v2.jpg",
  "manufacturing-in-india-creating-a-smarter-future": "/__l5e/assets-v1/091d9411-fe31-4601-87b3-80ccfe08251f/smarter-future-v2.jpg",
  "action-plan-fostering-adoption-smart-manufacturing": "/__l5e/assets-v1/166b6726-ef90-479a-99c8-64d01fe50159/action-plan-smart-v2.jpg",
  "predictive-maintenance-for-oil-and-gas": "/__l5e/assets-v1/df291b0a-d7c8-40f0-bc4d-c0e0a1643e31/predictive-maint-v2.jpg",
  "manufacturing-reimagining-resilient-sustainable-future": "/__l5e/assets-v1/3bfe4c03-2a02-457a-8459-d17804fba415/reimagining-mfg.jpg",
  "ai-can-help-keep-workforce-safe": "/__l5e/assets-v1/23eb7ee4-d065-4874-9b50-918ccbaeb204/ai-workforce-safe.jpg",
  "smart-manufacturing-reducing-costs-virtual-simulation": "/__l5e/assets-v1/d1f1a949-662b-4d6a-85ae-da8b40d42722/smart-factory-sim-v2.jpg",
  "additive-manufacturing-2020-first-time-right": "/__l5e/assets-v1/e14f83f3-04b1-487a-86b1-f3922fb1fa35/additive-mfg-v2.jpg",
  "7-habits-of-highly-effective-generative-design": "/__l5e/assets-v1/982e07a0-16bc-4c55-9be1-039d261882af/generative-design-v2.jpg",
  "ai-ml-trimmed-body-ntf-odyssee-cae-satven": "/__l5e/assets-v1/638f98af-9e9b-4665-b3fd-fa2546b643c3/ai-ml-ntf-v2.jpg",
  "ai-ml-crash-parameters-odyssee-cae-satven": "/__l5e/assets-v1/b2d06009-f35a-4de6-934c-14ddcc6c043f/ai-ml-crash-v2.jpg",
};

// Map each of the 13 reports to the 6 platform outcomes, based on the
// content actually discussed in each PDF (no inventing — these tags drive
// the "Explore by Outcome" filter on /reports and the related lists on
// outcome pages).
const reportOutcomes: Record<string, OutcomeId[]> = {
  "industry-40-adoption-strategic-roadmap-indian-manufacturing": ["productivity", "quality", "planning"],
  "transforming-india-chemical-sector-digital-analytics": ["productivity", "energy", "planning"],
  "manufacturing-in-india-creating-a-smarter-future": ["productivity", "quality", "planning"],
  "action-plan-fostering-adoption-smart-manufacturing": ["productivity", "planning"],
  "predictive-maintenance-for-oil-and-gas": ["downtime", "productivity"],
  "manufacturing-reimagining-resilient-sustainable-future": ["productivity", "energy", "planning"],
  "iot-cloud-edge-business-context-sap": ["productivity", "traceability", "planning"],
  "ai-can-help-keep-workforce-safe": ["quality", "traceability"],
  "smart-manufacturing-reducing-costs-virtual-simulation": ["productivity", "quality", "energy"],
  "additive-manufacturing-2020-first-time-right": ["quality", "productivity", "energy"],
  "7-habits-of-highly-effective-generative-design": ["quality", "energy", "productivity"],
  "ai-ml-trimmed-body-ntf-odyssee-cae-satven": ["quality", "productivity"],
  "ai-ml-crash-parameters-odyssee-cae-satven": ["quality", "productivity"],
};

export const reports: Report[] = seeds.map((s, i) => ({
  ...s,
  state: s.state ?? "Pan-India",
  readingTime: readingTime(s.pages),
  coverGradient: s.coverGradient ?? gradients[i % gradients.length],
  coverImage: coverImages[s.slug],
  outcomes: reportOutcomes[s.slug] ?? [],
}));

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
  { id: "cii", label: "CII Publications" },
  { id: "msme", label: "MSME Insights" },
  { id: "sustainability", label: "Sustainability" },
  { id: "smart", label: "Smart Manufacturing" },
  { id: "automotive", label: "Automotive" },
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
