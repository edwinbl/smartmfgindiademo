import { Link, useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { CommonFinalCta } from "@/components/common/CommonFinalCta";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  ClipboardList,
  Gauge,
  TrendingUp,
  ShieldCheck,
  Leaf,
  Globe2,
  Network,
  Layers,
  LineChart,
  Compass,
  BarChart3,
  Sparkles,
  FileBarChart,
  Factory,
  Cpu,
  Database,
  Users,
  Workflow,
  Settings2,
  Truck,
  ListChecks,
  Download,
  Lightbulb,
  HardHat,
  Lock,
  HelpCircle,
} from "lucide-react";
import { WireHeader } from "@/components/wireframe/WireHeader";
import { WireFooter } from "@/components/wireframe/WireFooter";
import { WireChatbotFAB } from "@/components/wireframe/WireChatbotFAB";
import { SEO } from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ASSESSMENT_URL = "https://www.smartmfgindia.com/Assesment.aspx";

// Rotating color palette for card accents — uses existing design tokens
const CARD_PALETTE = [
  {
    accent: "hsl(var(--orange-600))",
    soft: "hsl(var(--orange-100))",
    tint: "hsl(var(--orange-500) / 0.06)",
    ring: "hsl(var(--orange-500) / 0.18)",
  },
  {
    accent: "hsl(var(--navy-700))",
    soft: "hsl(var(--navy-100))",
    tint: "hsl(var(--navy-700) / 0.05)",
    ring: "hsl(var(--navy-700) / 0.18)",
  },
  {
    accent: "hsl(var(--india-green))",
    soft: "hsl(var(--india-green) / 0.12)",
    tint: "hsl(var(--india-green) / 0.06)",
    ring: "hsl(var(--india-green) / 0.22)",
  },
  {
    accent: "hsl(var(--red-600))",
    soft: "hsl(var(--red-600) / 0.12)",
    tint: "hsl(var(--red-600) / 0.05)",
    ring: "hsl(var(--red-600) / 0.18)",
  },
] as const;

type AssessmentConfig = {
  slug: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  audience: string;
  coverageAreas: string;
  expectedOutput: string;
  accent: string; // hsl var ref
  accentSoft: string;
  dimensions: { label: string; v: number }[];
  coverage: { icon: typeof Factory; label: string; scope: string }[];
};

const SHARED_COVERAGE = [
  { icon: Factory, label: "Operations", scope: "Shop-floor flow, throughput and OEE foundations." },
  { icon: Workflow, label: "Production Planning", scope: "Scheduling, capacity and demand alignment." },
  { icon: ShieldCheck, label: "Quality Systems", scope: "Process controls, inspections and defect handling." },
  { icon: Database, label: "Data & Visibility", scope: "Data capture, dashboards and reporting maturity." },
  { icon: Cpu, label: "Machine Connectivity", scope: "Sensors, PLCs and machine-to-system integration." },
  { icon: HardHat, label: "Workforce Readiness", scope: "Skills, change-readiness and digital fluency." },
  { icon: Leaf, label: "Sustainability", scope: "Energy, emissions and resource efficiency posture." },
  { icon: Truck, label: "Supply Chain Integration", scope: "Supplier collaboration and traceability links." },
];

const ASSESSMENTS: Record<string, AssessmentConfig> = {
  "smart-manufacturing-maturity": {
    slug: "smart-manufacturing-maturity",
    tag: "Smart Manufacturing",
    title: "Smart Manufacturing Maturity Assessment Model",
    subtitle: "Evaluate your operational, digital and business readiness before identifying the next steps in your transformation journey.",
    description:
      "A guided readiness lens across smart manufacturing dimensions — operations, digital adoption, quality and sustainability — purpose-built for MSME and mid-sized manufacturers in India.",
    duration: "25–40 mins",
    audience: "MSME & mid-sized manufacturers",
    coverageAreas: "8 readiness dimensions",
    expectedOutput: "Readiness snapshot & priorities",
    accent: "hsl(var(--navy-700))",
    accentSoft: "hsl(var(--navy-050))",
    dimensions: [
      { label: "Operations", v: 72 },
      { label: "Quality Systems", v: 64 },
      { label: "Digital Adoption", v: 48 },
      { label: "Energy & Sustainability", v: 56 },
      { label: "People & Skills", v: 60 },
    ],
    coverage: SHARED_COVERAGE,
  },
  "industry-4-0-maturity": {
    slug: "industry-4-0-maturity",
    tag: "Industry 4.0",
    title: "Industry 4.0 Maturity Assessment",
    subtitle: "Benchmark your Industry 4.0 maturity across technology, processes, people and data foundations.",
    description:
      "An executive-friendly readiness review across Industry 4.0 building blocks — designed for manufacturing leaders and plant heads driving digital transformation.",
    duration: "30–45 mins",
    audience: "Manufacturing leaders & plant heads",
    coverageAreas: "8 maturity dimensions",
    expectedOutput: "Maturity snapshot & roadmap cues",
    accent: "hsl(var(--orange-600))",
    accentSoft: "hsl(var(--orange-100))",
    dimensions: [
      { label: "Technology", v: 55 },
      { label: "Processes", v: 68 },
      { label: "People", v: 62 },
      { label: "Data", v: 44 },
      { label: "Strategy & Governance", v: 58 },
    ],
    coverage: SHARED_COVERAGE,
  },
};

const microTags = ["MSME-focused", "Guided process", "Outcome-based", "Readiness insights"];

const outcomes = [
  { icon: TrendingUp, title: "Productivity", desc: "Readiness to improve throughput, OEE and shop-floor performance." },
  { icon: ShieldCheck, title: "Quality", desc: "Readiness for consistent quality systems and defect reduction." },
  { icon: Network, title: "Traceability", desc: "Foundations for end-to-end product and process traceability." },
  { icon: Leaf, title: "Energy Efficiency", desc: "Readiness to track, reduce and optimise energy consumption." },
  { icon: Globe2, title: "Export Readiness", desc: "Capabilities required for global compliance and exports." },
  { icon: Layers, title: "Value Chain Participation", desc: "Readiness to integrate with OEM and supplier ecosystems." },
];



const currentBenefits = [
  { icon: Gauge, title: "Readiness Snapshot", desc: "A clear, executive-friendly view of your current manufacturing readiness." },
  { icon: BarChart3, title: "Outcome Insights", desc: "Readiness mapped to productivity, quality, energy and exports." },
  { icon: ListChecks, title: "Priority Areas", desc: "The focus areas that will most influence your transformation." },
  { icon: Compass, title: "Next-Step Guidance", desc: "Direction on where to begin — improve, adopt or transform." },
];

const roadmapBenefits = [
  { icon: LineChart, title: "Benchmarking", desc: "Compare readiness against peers, sector and national averages." },
  { icon: Sparkles, title: "Recommendations Engine", desc: "Personalised pathway suggestions based on your readiness profile." },
  { icon: FileBarChart, title: "Transformation Roadmaps", desc: "Stage-wise improvement and adoption roadmaps." },
];

const faqs = [
  { q: "How long does the assessment take?", a: "Most teams complete it in 25–45 minutes. You can save and resume across sessions." },
  { q: "Do we need technical expertise to participate?", a: "No. The assessment is designed for business and operations leaders — no specialist or IT background required." },
  { q: "Is our data kept confidential?", a: "Yes. Your responses are confidential and used only to generate your readiness insights." },
  { q: "Can we get support while completing it?", a: "Yes. CII facilitators are available on request to guide leadership teams through the assessment." },
  { q: "What happens after we submit?", a: "You receive a readiness snapshot with priority areas. Your team can then choose to improve, adopt or transform with CII guidance." },
];

const AssessmentDetail = () => {
  const { slug = "" } = useParams();
  const cfg = ASSESSMENTS[slug];

  const [showSticky, setShowSticky] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 480);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!cfg) return <Navigate to="/readiness-assessment" replace />;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${cfg.title} — CII Smart Manufacturing`,
    description: cfg.subtitle,
    url: `https://smartmfgindia-demo4.bluelup.in/readiness-assessment/${cfg.slug}`,
  };

  const summary = [
    { icon: ClipboardList, label: "Assessment Type", value: "Readiness & Maturity" },
    { icon: Clock, label: "Duration", value: cfg.duration },
    { icon: Layers, label: "Coverage Areas", value: cfg.coverageAreas },
    { icon: FileBarChart, label: "Expected Output", value: cfg.expectedOutput },
  ];

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <SEO
        title={`${cfg.title} — Readiness Assessment`}
        description={cfg.subtitle}
        jsonLd={jsonLd}
      />
      <WireHeader />

      <main className="pb-28 md:pb-0">
        {/* ============== HERO ============== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[hsl(var(--navy-050))] to-white">
          <div
            className="absolute inset-0 -z-0 opacity-[0.35] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 10%, hsl(var(--navy-100)) 0, transparent 40%), radial-gradient(circle at 92% 85%, hsl(var(--orange-100)) 0, transparent 45%)",
            }}
          />
          <div className="container-cii relative py-12 md:py-20">
            <nav className="text-xs text-[hsl(var(--neutral-500))] mb-6 flex items-center gap-2 flex-wrap">
              <Link to="/readiness-assessment" className="hover:text-[hsl(var(--navy-700))] font-semibold">
                Readiness Assessment
              </Link>
              <span>/</span>
              <span className="text-[hsl(var(--neutral-700))]">{cfg.tag}</span>
            </nav>

            <div className="grid gap-10 lg:gap-14 lg:grid-cols-[1.05fr_1fr] items-center">
              <div>

                <h1 className="font-display font-bold text-[30px] sm:text-[36px] md:text-[44px] leading-[1.1] tracking-tight text-navy-800">
                  {cfg.title}
                </h1>
                <p className="mt-5 text-base md:text-lg text-[hsl(var(--neutral-700))] max-w-xl">
                  {cfg.subtitle}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="cii-chip">
                    <Clock className="h-3.5 w-3.5" /> {cfg.duration}
                  </span>
                  {microTags.map((t) => (
                    <span key={t} className="cii-chip">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={ASSESSMENT_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Start Assessment <ArrowRight className="!h-4 !w-4" />
                  </a>
                  <button
                    type="button"
                    disabled
                    title="Coming soon"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-md text-[hsl(var(--neutral-500))] border border-dashed border-[hsl(var(--neutral-150))] cursor-not-allowed"
                  >
                    <Download className="h-4 w-4" /> Download Sample Report
                  </button>
                </div>
              </div>

              {/* Dashboard mockup */}
              <div className="relative">
                <div className="cii-card p-5 sm:p-6 bg-white">
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div>
                      <div className="eyebrow text-[hsl(var(--neutral-500))]">Readiness Snapshot</div>
                      <div className="font-display font-bold text-navy-800 text-base sm:text-lg mt-1">
                        Sample Plant Overview
                      </div>
                    </div>
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold rounded-full"
                      style={{ background: cfg.accentSoft, color: cfg.accent }}
                    >
                      Preview
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-[auto_1fr] items-center gap-5">
                    <div className="relative h-24 w-24 sm:h-28 sm:w-28">
                      <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                        <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--neutral-150))" strokeWidth="10" />
                        <circle
                          cx="50"
                          cy="50"
                          r="42"
                          fill="none"
                          stroke="hsl(var(--india-green))"
                          strokeWidth="10"
                          strokeLinecap="round"
                          strokeDasharray={`${2 * Math.PI * 42 * 0.62} ${2 * Math.PI * 42}`}
                        />
                      </svg>
                      <div className="absolute inset-0 grid place-items-center">
                        <div className="text-center">
                          <div className="font-numeric font-bold text-navy-800 text-2xl leading-none">62</div>
                          <div className="text-[10px] uppercase tracking-wide text-[hsl(var(--neutral-500))] mt-0.5">
                            Score
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-navy-800">Emerging Readiness</div>
                      <p className="text-xs text-[hsl(var(--neutral-700))] leading-relaxed">
                        Foundations are in place. Opportunities exist in digital adoption and energy efficiency.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {cfg.dimensions.map((d) => (
                      <div key={d.label}>
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="font-semibold text-navy-800">{d.label}</span>
                          <span className="font-numeric font-semibold text-[hsl(var(--neutral-700))]">{d.v}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-[hsl(var(--neutral-150))] overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${d.v}%`,
                              background:
                                d.v >= 65
                                  ? "hsl(var(--india-green))"
                                  : d.v >= 50
                                    ? "hsl(var(--orange-500))"
                                    : "hsl(var(--navy-600))",
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-2">
                    {[
                      { label: "Productivity", v: "+18%", color: "hsl(var(--india-green))" },
                      { label: "Quality", v: "+12%", color: "hsl(var(--navy-600))" },
                      { label: "Energy", v: "−9%", color: "hsl(var(--orange-500))" },
                    ].map((k) => (
                      <div
                        key={k.label}
                        className="rounded-md border border-[hsl(var(--neutral-150))] bg-[hsl(var(--neutral-50))] p-2.5 text-center"
                      >
                        <div className="font-numeric font-bold text-sm" style={{ color: k.color }}>
                          {k.v}
                        </div>
                        <div className="text-[10px] uppercase tracking-wide text-[hsl(var(--neutral-500))] mt-0.5">
                          {k.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute -z-10 -top-6 -right-6 w-40 h-40 rounded-full bg-cii-orange/15 blur-2xl" />
                <div className="absolute -z-10 -bottom-8 -left-8 w-44 h-44 rounded-full bg-[hsl(var(--navy-100))]/60 blur-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* ============== SUMMARY ============== */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container-cii">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {summary.map(({ icon: Icon, label, value }) => (
                <div key={label} className="cii-card p-5 bg-white flex items-start gap-4">
                  <div
                    className="h-10 w-10 grid place-items-center rounded-md shrink-0"
                    style={{ background: cfg.accentSoft, color: cfg.accent }}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wide font-semibold text-[hsl(var(--neutral-500))]">
                      {label}
                    </div>
                    <div className="mt-1 font-display font-bold text-navy-800 text-sm leading-snug">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============== ASSESSMENT OVERVIEW ============== */}
        <section className="py-16 md:py-24 bg-white border-t border-[hsl(var(--neutral-150))]">
          <div className="container-cii">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] items-start">
              <div>
                <div className="section-eyebrow mb-3">Assessment overview</div>
                <h2 className="font-display font-bold text-[26px] md:text-[34px] leading-tight tracking-tight text-navy-800">
                  A guided readiness lens for manufacturing leaders
                </h2>
                <p className="mt-5 text-base text-[hsl(var(--neutral-700))] leading-relaxed">
                  {cfg.description}
                </p>
                <p className="mt-4 text-base text-[hsl(var(--neutral-700))] leading-relaxed">
                  The {cfg.title.toLowerCase()} translates day-to-day plant practices into a structured, executive-friendly readiness view —
                  so leadership teams can decide what to improve, adopt or transform next, with confidence.
                </p>

                <div className="mt-7 grid sm:grid-cols-2 gap-3">
                  {[
                    { icon: ClipboardList, label: "Format", value: "Guided online self-assessment" },
                    { icon: Clock, label: "Time required", value: cfg.duration },
                    { icon: Users, label: "Best taken by", value: cfg.audience },
                    { icon: FileBarChart, label: "Walk away with", value: cfg.expectedOutput },
                  ].map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="flex items-start gap-3 rounded-md border border-[hsl(var(--neutral-150))] bg-white p-3"
                    >
                      <div
                        className="h-9 w-9 rounded-md grid place-items-center shrink-0"
                        style={{ background: cfg.accentSoft, color: cfg.accent }}
                      >
                        <Icon className="h-4 w-4" strokeWidth={1.75} />
                      </div>
                      <div>
                        <div className="text-[11px] uppercase tracking-wide font-semibold text-[hsl(var(--neutral-500))]">
                          {label}
                        </div>
                        <div className="mt-0.5 text-sm font-semibold text-navy-800 leading-snug">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={ASSESSMENT_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Start Assessment <ArrowRight className="!h-4 !w-4" />
                  </a>
                </div>
              </div>

              <aside className="cii-card p-6 bg-[hsl(var(--navy-050))] border-[hsl(var(--navy-100))]">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-4 w-4 text-[hsl(var(--orange-600))]" />
                  <span className="text-[11px] uppercase tracking-wide font-bold text-[hsl(var(--navy-700))]">
                    Why teams take this assessment
                  </span>
                </div>
                <ul className="space-y-3">
                  {[
                    "Get a shared, leadership-level view of plant readiness — no jargon, no IT pre-work.",
                    "Frame Industry 4.0 decisions around business outcomes, not technology checklists.",
                    "Surface the 2–3 priority areas that will most influence your next transformation step.",
                    "Use a CII-backed framework trusted across MSME and mid-sized manufacturers in India.",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-navy-800 leading-relaxed">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-[hsl(var(--india-green))]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 pt-5 border-t border-[hsl(var(--navy-100))] grid grid-cols-3 gap-3 text-center">
                  {[
                    { v: "8", l: "Dimensions" },
                    { v: "5", l: "Step journey" },
                    { v: "100%", l: "Confidential" },
                  ].map((s) => (
                    <div key={s.l}>
                      <div className="font-numeric font-bold text-navy-800 text-lg">{s.v}</div>
                      <div className="text-[10px] uppercase tracking-wide text-[hsl(var(--neutral-500))] mt-0.5">
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ============== OUTCOMES ============== */}

        <section className="py-16 md:py-24 bg-[hsl(var(--neutral-50))]">
          <div className="container-cii">
            <div className="max-w-2xl">
              <div className="section-eyebrow mb-3">Outcome-based readiness</div>
              <h2 className="font-display font-bold text-[26px] md:text-[34px] leading-tight tracking-tight text-navy-800">
                What This Assessment Helps You Understand
              </h2>
              <p className="mt-4 text-base text-[hsl(var(--neutral-700))]">
                Readiness is a lens for the business outcomes that matter most — not a technical score.
              </p>
            </div>

            <div className="mt-10 -mx-6 px-6 md:mx-0 md:px-0 overflow-x-auto md:overflow-visible">
              <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 snap-x snap-mandatory pb-2 md:pb-0">
                {outcomes.map(({ icon: Icon, title, desc }, i) => {
                  const c = CARD_PALETTE[i % CARD_PALETTE.length];
                  return (
                    <div
                      key={title}
                      className="cii-card group relative overflow-hidden p-6 min-w-[280px] md:min-w-0 snap-start transition-all hover:-translate-y-1 hover:shadow-lg"
                      style={{ background: `linear-gradient(180deg, ${c.tint}, #fff 60%)`, borderColor: c.ring }}
                    >
                      <span
                        className="absolute inset-x-0 top-0 h-1"
                        style={{ background: c.accent }}
                        aria-hidden
                      />
                      <span
                        className="absolute -top-10 -right-10 h-28 w-28 rounded-full blur-2xl opacity-40 pointer-events-none"
                        style={{ background: c.soft }}
                        aria-hidden
                      />
                      <div
                        className="relative h-11 w-11 rounded-lg grid place-items-center transition-transform group-hover:scale-105"
                        style={{ background: c.soft, color: c.accent }}
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </div>
                      <h3 className="relative mt-4 font-display font-bold text-navy-800 text-lg">{title}</h3>
                      <p className="relative mt-2 text-sm text-[hsl(var(--neutral-700))] leading-relaxed">{desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ============== WHAT'S COVERED ============== */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-cii">
            <div className="max-w-2xl">
              <div className="section-eyebrow mb-3">Readiness framework</div>
              <h2 className="font-display font-bold text-[26px] md:text-[34px] leading-tight tracking-tight text-navy-800">
                What's Covered
              </h2>
              <p className="mt-4 text-base text-[hsl(var(--neutral-700))]">
                Eight connected dimensions form the readiness lens — together they describe how prepared your plant is
                for the next transformation step.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {cfg.coverage.map(({ icon: Icon, label, scope }, i) => {
                const c = CARD_PALETTE[i % CARD_PALETTE.length];
                return (
                  <div
                    key={label}
                    className="cii-card group relative overflow-hidden p-5 transition-all hover:-translate-y-1 hover:shadow-lg"
                    style={{ background: `linear-gradient(180deg, ${c.tint}, #fff 65%)`, borderColor: c.ring }}
                  >
                    <span
                      className="absolute left-0 top-0 h-full w-1"
                      style={{ background: c.accent }}
                      aria-hidden
                    />
                    <div
                      className="relative h-10 w-10 grid place-items-center rounded-lg mb-4 transition-transform group-hover:scale-105"
                      style={{ background: c.soft, color: c.accent }}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <div className="relative font-display font-bold text-navy-800 text-sm">{label}</div>
                    <p className="relative mt-2 text-xs text-[hsl(var(--neutral-700))] leading-relaxed">{scope}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>



        {/* ============== WHAT USERS RECEIVE ============== */}
        <section className="py-16 md:py-24 bg-[hsl(var(--neutral-50))]">
          <div className="container-cii">
            <div className="max-w-2xl">
              <div className="section-eyebrow mb-3">What you'll receive</div>
              <h2 className="font-display font-bold text-[26px] md:text-[34px] leading-tight tracking-tight text-navy-800">
                Outputs You Walk Away With
              </h2>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {currentBenefits.map(({ icon: Icon, title, desc }, i) => {
                const c = CARD_PALETTE[i % CARD_PALETTE.length];
                return (
                  <div
                    key={title}
                    className="cii-card group relative overflow-hidden p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                    style={{ background: `linear-gradient(180deg, ${c.tint}, #fff 60%)`, borderColor: c.ring }}
                  >
                    <span
                      className="absolute inset-x-0 top-0 h-1"
                      style={{ background: c.accent }}
                      aria-hidden
                    />
                    <div
                      className="relative h-11 w-11 rounded-lg grid place-items-center transition-transform group-hover:scale-105"
                      style={{ background: c.soft, color: c.accent }}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <h3 className="relative mt-4 font-display font-bold text-navy-800 text-base">{title}</h3>
                    <p className="relative mt-2 text-sm text-[hsl(var(--neutral-700))] leading-relaxed">{desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Roadmap */}
            <div className="mt-14">
              <div className="flex items-end justify-between gap-4 flex-wrap mb-5">
                <h3 className="font-display font-bold text-navy-800 text-lg">Coming soon on the roadmap</h3>
                <span className="cii-chip">Roadmap</span>
              </div>
              <div className="grid gap-5 sm:grid-cols-3">
                {roadmapBenefits.map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="cii-card p-6 bg-white/60 border-dashed opacity-90"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-md grid place-items-center bg-[hsl(var(--neutral-100))] text-[hsl(var(--neutral-500))]">
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </div>
                      <span className="text-[10px] uppercase tracking-wide font-bold text-[hsl(var(--neutral-500))]">
                        Coming Soon
                      </span>
                    </div>
                    <div className="font-display font-bold text-navy-800 text-base">{title}</div>
                    <p className="mt-2 text-sm text-[hsl(var(--neutral-700))] leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============== SAMPLE INSIGHTS ============== */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-cii">
            <div className="max-w-2xl">
              <div className="section-eyebrow mb-3">Sample insights</div>
              <h2 className="font-display font-bold text-[26px] md:text-[34px] leading-tight tracking-tight text-navy-800">
                A Preview of What You'll See
              </h2>
              <p className="mt-4 text-base text-[hsl(var(--neutral-700))]">
                Outcome-oriented insight cards, dimension scores and benchmark cues — designed for leadership review.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
              {/* Mock report */}
              <div className="cii-card p-6 bg-white">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div>
                    <div className="eyebrow text-[hsl(var(--neutral-500))]">Readiness Report</div>
                    <div className="font-display font-bold text-navy-800 text-lg mt-1">
                      Plant — Readiness Summary
                    </div>
                  </div>
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold rounded-full"
                    style={{ background: cfg.accentSoft, color: cfg.accent }}
                  >
                    Sample
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  {cfg.dimensions.map((d) => (
                    <div key={d.label}>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-semibold text-navy-800">{d.label}</span>
                        <span className="font-numeric font-semibold text-[hsl(var(--neutral-700))]">{d.v}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-[hsl(var(--neutral-150))] overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${d.v}%`,
                            background:
                              d.v >= 65
                                ? "hsl(var(--india-green))"
                                : d.v >= 50
                                  ? "hsl(var(--orange-500))"
                                  : "hsl(var(--navy-600))",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-md bg-[hsl(var(--navy-050))] border border-[hsl(var(--navy-100))]">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 mt-0.5 shrink-0 text-[hsl(var(--orange-600))]" />
                    <p className="text-sm text-navy-800 leading-relaxed">
                      <span className="font-semibold">Insight:</span> Operational visibility maturity is moderate,
                      while data integration readiness remains low — prioritise machine connectivity first.
                    </p>
                  </div>
                </div>
              </div>

              {/* Insight cards */}
              <div className="space-y-4">
                {[
                  {
                    tag: "Priority area",
                    color: "hsl(var(--orange-600))",
                    soft: "hsl(var(--orange-100))",
                    title: "Digital adoption",
                    desc: "Foundational gaps in shop-floor data flow are limiting downstream visibility.",
                  },
                  {
                    tag: "Strength",
                    color: "hsl(var(--india-green))",
                    soft: "hsl(var(--india-green)/0.12)",
                    title: "Operational discipline",
                    desc: "Production and quality routines are well-structured and consistently followed.",
                  },
                  {
                    tag: "Benchmark teaser",
                    color: "hsl(var(--navy-700))",
                    soft: "hsl(var(--navy-050))",
                    title: "Sector comparison",
                    desc: "Compare your readiness vs sector medians — available in upcoming benchmarking release.",
                  },
                ].map((i) => (
                  <div key={i.title} className="cii-card p-5 bg-white">
                    <span
                      className="inline-flex items-center px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide rounded-full"
                      style={{ background: i.soft, color: i.color }}
                    >
                      {i.tag}
                    </span>
                    <div className="mt-3 font-display font-bold text-navy-800 text-base">{i.title}</div>
                    <p className="mt-1.5 text-sm text-[hsl(var(--neutral-700))] leading-relaxed">{i.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============== FAQ ============== */}
        <section className="py-16 md:py-24 bg-[hsl(var(--neutral-50))]">
          <div className="container-cii">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] items-start">
              <div>
                <div className="section-eyebrow mb-3">FAQs</div>
                <h2 className="font-display font-bold text-[26px] md:text-[34px] leading-tight tracking-tight text-navy-800">
                  Common Questions
                </h2>
                <p className="mt-4 text-base text-[hsl(var(--neutral-700))]">
                  Quick answers to help you and your team get started with confidence.
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs text-[hsl(var(--neutral-700))]">
                  <Lock className="h-4 w-4 text-[hsl(var(--india-green))]" />
                  Your responses are confidential.
                </div>
              </div>
              <Accordion type="single" collapsible className="cii-card bg-white px-4 sm:px-6">
                {faqs.map((f, i) => (
                  <AccordionItem key={f.q} value={`item-${i}`} className="border-b border-[hsl(var(--neutral-150))] last:border-0">
                    <AccordionTrigger className="text-left font-display font-semibold text-navy-800 text-sm sm:text-base hover:no-underline">
                      <span className="flex items-start gap-3">
                        <HelpCircle className="h-4 w-4 mt-1 shrink-0 text-[hsl(var(--navy-600))]" />
                        {f.q}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-[hsl(var(--neutral-700))] leading-relaxed pl-7">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

      </main>

      {/* ============== STICKY CTA ============== */}
      {/* Desktop ribbon */}
      <div
        className={`hidden md:block fixed bottom-0 inset-x-0 z-40 transition-transform duration-300 ${
          showSticky ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="bg-white/95 backdrop-blur border-t border-[hsl(var(--neutral-150))] shadow-[0_-6px_24px_-12px_rgba(15,23,42,0.15)]">
          <div className="container-cii py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <span
                className="h-9 w-9 rounded-md grid place-items-center shrink-0"
                style={{ background: cfg.accentSoft, color: cfg.accent }}
              >
                <Settings2 className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <div className="font-display font-bold text-navy-800 text-sm truncate">{cfg.title}</div>
                <div className="text-xs text-[hsl(var(--neutral-700))]">{cfg.duration} · {cfg.audience}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <a href={ASSESSMENT_URL} target="_blank" rel="noopener noreferrer" className="btn-primary !py-2">
                Start Assessment <ArrowRight className="!h-4 !w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile bottom bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur border-t border-[hsl(var(--neutral-150))] p-3 shadow-[0_-6px_24px_-12px_rgba(15,23,42,0.15)]">
        <a href={ASSESSMENT_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center">
          Start Assessment <ArrowRight className="!h-4 !w-4" />
        </a>
      </div>

      <CommonFinalCta />
            <WireFooter />
      <WireChatbotFAB />
    </div>
  );
};

export default AssessmentDetail;
