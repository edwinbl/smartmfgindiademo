import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Gauge,
  TrendingUp,
  ShieldCheck,
  Leaf,
  Globe2,
  Network,
  ClipboardList,
  ListChecks,
  LineChart,
  Compass,
  BarChart3,
  Sparkles,
  FileBarChart,
  Clock,
  HelpCircle,
  Factory,
  Tablet,
  Cpu,
  Layers,
  PlayCircle,
  Download,
  Users,
  Truck,
  BookOpen,
} from "lucide-react";
import { AssessmentHeroCard } from "@/components/assessment/AssessmentHeroCard";
import { WireHeader } from "@/components/wireframe/WireHeader";
import { CommonFinalCta } from "@/components/common/CommonFinalCta";
import { WireFooter } from "@/components/wireframe/WireFooter";
import { WireChatbotFAB } from "@/components/wireframe/WireChatbotFAB";
import { SEO } from "@/components/SEO";
import deckAsset from "@/assets/assessment-model-deck.pptx.asset.json";

const ASSESSMENT_URL = "https://www.smartmfgindia.com/Assesment.aspx";
const DECK_URL = deckAsset.url;

const modelCategories = [
  { icon: Users, title: "Leadership & Strategy", desc: "Current and goal state on Industry 1.0 → 4.0, management commitment, resource and financial planning, cyber/data security policy, research and data science." },
  { icon: Users, title: "People & Culture", desc: "Engagement and competence on smart manufacturing core concepts — digitalisation, IoT, automation, robotics — collaboration, metrics, training and professional tie-ups." },
  { icon: Layers, title: "Infrastructure", desc: "ERP/workflow, cloud, digital sensors, EAM, reporting platforms, IT systems integration, shop-floor safety monitoring and information security." },
  { icon: Factory, title: "Operations", desc: "Production planning, design, execution and post-production — DfM, DfQ, simulation, automation, IoT sensing, AI/ML and additive manufacturing." },
  { icon: Truck, title: "Supply Chain & Logistics", desc: "Information flow with customers and suppliers, digitised warehousing, collaborative tools, inbound/outbound tracking and component-level traceability." },
];

const modelTechnologies = [
  "Systems Integration",
  "Big Data & Analytics",
  "Simulation & Digital Twins",
  "Internet of Things (IoT)",
  "Cloud Storage & Computing",
  "Automation & Robotics",
  "Artificial Intelligence",
  "Augmented Reality",
  "Additive Manufacturing",
  "Cyber & Data Security",
];

const AssessmentModelSection = () => (
  <section className="py-16 md:py-24 bg-white border-t border-[hsl(var(--neutral-150))]">
    <div className="container-cii">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] items-start">
        <div>
          <div className="section-eyebrow mb-3">The framework</div>
          <h2 className="font-display font-bold text-[26px] md:text-[34px] leading-tight tracking-tight text-navy-800">
            The CII Smart Manufacturing Maturity Model
          </h2>
          <p className="mt-4 text-base text-[hsl(var(--neutral-700))] leading-relaxed">
            The assessment is powered by an end-to-end model developed by the CII Smart Manufacturing Council — a
            task force of senior industry professionals from Tata, Tech Mahindra, Siemens, Microsoft, Bosch, Blue Star,
            IISc and others. The model adapts global maturity frameworks for Indian manufacturing, with specific focus
            on MSMEs.
          </p>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { k: "5", v: "Functional categories" },
              { k: "49", v: "Key elements" },
              { k: "10", v: "Marks per element" },
            ].map((s) => (
              <div key={s.v} className="rounded-md border border-[hsl(var(--neutral-150))] bg-[hsl(var(--neutral-50))] px-3 py-3 text-center">
                <div className="font-display font-bold text-navy-800 text-2xl leading-none">{s.k}</div>
                <div className="text-[11px] text-[hsl(var(--neutral-700))] mt-1 leading-tight">{s.v}</div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-[hsl(var(--neutral-700))] leading-relaxed">
            Each element is rated on two 5-point scales — <span className="font-semibold text-navy-800">depth</span> of
            use of smart technologies and <span className="font-semibold text-navy-800">scale</span> of deployment —
            combining into a score out of 10. Outputs are presented as criteria-wise scores on a scale of 100, with
            radar charts and (as response data builds) industry averages and best-in-class benchmarks.
          </p>

          <div className="mt-6">
            <div className="text-[11px] uppercase tracking-wide font-bold text-[hsl(var(--neutral-500))] mb-2">
              Technologies covered
            </div>
            <div className="flex flex-wrap gap-2">
              {modelTechnologies.map((t) => (
                <span key={t} className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-[hsl(var(--navy-050))] text-[hsl(var(--navy-700))] border border-[hsl(var(--navy-100))]">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href={DECK_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
              <Download className="!h-4 !w-4" /> Download Model Deck
            </a>
            <a href={ASSESSMENT_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Take the Assessment <ArrowRight className="!h-4 !w-4" />
            </a>
          </div>
        </div>

        <div className="space-y-3">
          {modelCategories.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="cii-card p-5 bg-white flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="shrink-0 h-10 w-10 rounded-md grid place-items-center bg-[hsl(var(--orange-100))] text-[hsl(var(--orange-600))] font-display font-bold">
                {String.fromCharCode(65 + i)}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-[hsl(var(--navy-600))]" />
                  <h3 className="font-display font-bold text-navy-800 text-base">{title}</h3>
                </div>
                <p className="mt-1 text-sm text-[hsl(var(--neutral-700))] leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
          <div className="rounded-lg border border-dashed border-[hsl(var(--neutral-200))] bg-[hsl(var(--neutral-50))] p-4 flex items-start gap-3">
            <BookOpen className="h-4 w-4 mt-0.5 text-[hsl(var(--navy-600))] shrink-0" />
            <p className="text-xs text-[hsl(var(--neutral-700))] leading-relaxed">
              On-site detailed assessments by CII Institute of Quality experts use the same model to produce a
              comprehensive report on current state and the next steps to reach your goal state.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const microTags = ["MSME-focused", "Guided process", "Outcome-oriented", "Readiness insights"];

const outcomes = [
  { icon: TrendingUp, title: "Productivity", desc: "Identify readiness to improve throughput, OEE and shop-floor performance." },
  { icon: ShieldCheck, title: "Quality", desc: "Evaluate readiness for consistent quality systems and defect reduction." },
  { icon: Network, title: "Traceability", desc: "Assess foundations for end-to-end product and process traceability." },
  { icon: Leaf, title: "Energy Efficiency", desc: "Understand readiness to track, reduce and optimise energy consumption." },
  { icon: Globe2, title: "Export Readiness", desc: "Benchmark capabilities required for global compliance and exports." },
  { icon: Layers, title: "Value Chain Participation", desc: "Gauge readiness to integrate into larger OEM and supplier ecosystems." },
];

const processSteps = [
  { n: "01", title: "Access Assessment", desc: "Open the current readiness assessment via a guided web interface." },
  { n: "02", title: "Complete Inputs", desc: "Answer structured questions across operational and digital dimensions." },
  { n: "03", title: "Receive Readiness Insights", desc: "Get a readiness snapshot with outcome-aligned priority areas." },
];

const currentBenefits = [
  { icon: Gauge, title: "Readiness Snapshot", desc: "A clear, executive-friendly view of your current manufacturing readiness." },
  { icon: BarChart3, title: "Outcome Insights", desc: "Understand readiness mapped to productivity, quality, energy and exports." },
  { icon: ListChecks, title: "Priority Areas", desc: "Identify the focus areas that will most influence your transformation." },
  { icon: Compass, title: "Next-Step Guidance", desc: "Direction on where to begin — improve, adopt or transform." },
];

const futureBenefits = [
  { icon: LineChart, title: "Benchmarking", desc: "Compare your readiness against peers, sector and national averages." },
  { icon: Sparkles, title: "Recommendations Engine", desc: "Personalised pathway suggestions based on your readiness profile." },
  { icon: FileBarChart, title: "Interactive Readiness Reports", desc: "Dynamic, drill-down reports for leadership and operations teams." },
];

const dimensions = [
  { label: "Operations", v: 72 },
  { label: "Quality Systems", v: 64 },
  { label: "Digital Adoption", v: 48 },
  { label: "Energy & Sustainability", v: 56 },
  { label: "People & Skills", v: 60 },
];

const Counter = ({ to, start, duration = 1400 }: { to: number; start: boolean; duration?: number }) => {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!start) { setV(0); return; }
    let raf = 0; const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, start, duration]);
  return <>{v}</>;
};

const ReadinessAssessment = () => {
  const [animateOn, setAnimateOn] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setAnimateOn(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Readiness Assessment — CII Smart Manufacturing",
    description:
      "Assess your manufacturing readiness across operations, quality, digital adoption and sustainability before deciding what to improve, adopt or transform.",
    url: "https://smartmfgindia-demo4.bluelup.in/readiness-assessment",
  };


  return (
    <div className="min-h-dvh bg-background text-foreground">
      <SEO
        title="Readiness Assessment — Understand Before You Transform"
        description="Assess your manufacturing readiness across productivity, quality, traceability, energy and exports — a guided MSME-friendly entry point to transformation."
        jsonLd={jsonLd}
      />
      <WireHeader />

      <main>
        {/* ============== HERO ============== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[hsl(var(--navy-050))] to-white min-h-[60svh] md:min-h-[calc(100svh-72px)] flex items-start md:items-center pt-8 md:pt-0">
          <div className="absolute inset-0 -z-0 opacity-[0.35] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 10%, hsl(var(--navy-100)) 0, transparent 40%), radial-gradient(circle at 90% 80%, hsl(var(--orange-100)) 0, transparent 45%)",
            }}
          />
          <div className="container-cii relative py-10">
            <div className="grid gap-10 lg:gap-14 lg:grid-cols-[1.05fr_1fr] items-center">
              <div>
                <div className="section-eyebrow mb-4">Readiness Assessment</div>
                <h1 className="font-display font-bold text-[30px] sm:text-[36px] md:text-[44px] leading-[1.1] tracking-tight text-navy-800">
                  Understand Your{" "}
                  <span className="text-[hsl(var(--red-600))]">Manufacturing Readiness</span>{" "}
                  Before You Transform
                </h1>
                <p className="mt-5 text-base md:text-lg text-[hsl(var(--neutral-700))] max-w-xl">
                  Assess your current readiness across operations, productivity, quality and digital adoption before
                  identifying the next steps for improvement.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {microTags.map((t) => (
                    <span key={t} className="cii-chip">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <AssessmentHeroCard />
            </div>
          </div>
        </section>

        {/* ============== OUTCOMES ============== */}
        <section className="py-14 md:py-20 bg-white">
          <div className="container-cii">
            <div className="max-w-2xl">
              <div className="section-eyebrow mb-3">Outcome-based readiness</div>
              <h2 className="font-display font-bold text-[24px] md:text-[30px] leading-tight tracking-tight text-navy-800">
                What Readiness Can Help Improve
              </h2>
              <p className="mt-3 text-sm md:text-base text-[hsl(var(--neutral-700))]">
                Readiness is not a score — it is a lens to evaluate where your organisation is positioned for the
                business outcomes that matter most.
              </p>
            </div>

            {/* Mobile: horizontal scroll */}
            <div className="mt-8 -mx-6 px-6 md:mx-0 md:px-0 overflow-x-auto md:overflow-visible">
              <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 snap-x snap-mandatory pb-2 md:pb-0">
                {outcomes.map(({ icon: Icon, title, desc }) => {
                  return (
                    <div
                      key={title}
                      className="group relative overflow-hidden rounded-lg border p-5 min-w-[260px] md:min-w-0 snap-start transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                      style={{
                        background: "linear-gradient(180deg, hsl(var(--neutral-50)), #ffffff 70%)",
                        borderColor: "hsl(var(--neutral-150))",
                      }}
                    >
                      {/* Consistent top accent bar */}
                      <div
                        className="absolute top-0 left-0 right-0 h-1"
                        style={{ background: "hsl(var(--navy-600))" }}
                      />
                      <div className="flex items-start gap-3">
                        <div
                          className="shrink-0 h-10 w-10 rounded-lg grid place-items-center"
                          style={{ background: "hsl(var(--navy-100))", color: "hsl(var(--navy-600))" }}
                        >
                          <Icon className="h-5 w-5" strokeWidth={1.75} />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-display font-bold text-navy-800 text-base">{title}</h3>
                          <p className="mt-1 text-sm text-[hsl(var(--neutral-700))] leading-relaxed">{desc}</p>
                        </div>
                      </div>
                      {/* Hover arrow hint */}
                      <div
                        className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ color: "hsl(var(--navy-600))" }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ============== LIVE ASSESSMENT ============== */}
        <section className="py-16 md:py-24 bg-[hsl(var(--neutral-50))]">
          <div className="container-cii">
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div className="max-w-2xl">
                <div className="section-eyebrow mb-3 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[hsl(var(--india-green))] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[hsl(var(--india-green))]" />
                  </span>
                  Live now
                </div>
                <h2 className="font-display font-bold text-[26px] md:text-[34px] leading-tight tracking-tight text-navy-800">
                  The Assessment, Open for Participation
                </h2>
                <p className="mt-4 text-base text-[hsl(var(--neutral-700))]">
                  One guided readiness assessment is available — backed by the CII Smart Manufacturing Maturity Model
                  developed by senior industry leaders.
                </p>
              </div>
              <span className="cii-chip">1 assessment live</span>
            </div>

            <div className="mt-10">
              {[
                {
                  slug: "industry-4-0-readiness",
                  tag: "Industry 4.0",
                  title: "Industry 4.0 Readiness Assessment",
                  desc: "An objective self-assessment across 5 functional categories and 49 key elements — covering leadership, people, infrastructure, operations and supply chain. Each element is scored on depth × scale of adoption to produce a readiness view from Industry 1.0 to 4.0.",
                  dimensions: ["Leadership & Strategy", "People & Culture", "Infrastructure", "Operations", "Supply Chain"],
                  duration: "30–45 mins",
                  audience: "Manufacturing leaders, plant heads & MSMEs",
                  accent: "hsl(var(--orange-600))",
                  accentSoft: "hsl(var(--orange-100))",
                },
              ].map((a) => (
                <div key={a.title} className="cii-card p-6 sm:p-8 bg-white flex flex-col max-w-3xl mx-auto">
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full"
                      style={{ background: a.accentSoft, color: a.accent }}
                    >
                      {a.tag}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wide font-bold text-[hsl(var(--india-green))]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--india-green))]" />
                      Open for participation
                    </span>
                  </div>

                  <Link to={`/readiness-assessment/${a.slug}`} className="mt-4 group">
                    <h3 className="font-display font-bold text-navy-800 text-xl leading-snug group-hover:underline underline-offset-4 decoration-2 decoration-[hsl(var(--orange-500))]">
                      {a.title}
                    </h3>
                  </Link>
                  <p className="mt-3 text-sm text-[hsl(var(--neutral-700))] leading-relaxed">{a.desc}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {a.dimensions.map((d) => (
                      <span
                        key={d}
                        className="px-2.5 py-1 text-[11px] font-semibold rounded-md border border-[hsl(var(--neutral-150))] bg-[hsl(var(--neutral-50))] text-[hsl(var(--neutral-700))]"
                      >
                        {d}
                      </span>
                    ))}
                  </div>

                  <dl className="mt-5 grid grid-cols-2 gap-3 pt-5 border-t border-[hsl(var(--neutral-150))]">
                    <div className="flex items-start gap-2">
                      <Clock className="h-4 w-4 mt-0.5 text-[hsl(var(--navy-600))] shrink-0" />
                      <div>
                        <dt className="text-[10px] uppercase tracking-wide font-semibold text-[hsl(var(--neutral-500))]">Duration</dt>
                        <dd className="text-xs text-navy-800 font-medium mt-0.5">{a.duration}</dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <ClipboardList className="h-4 w-4 mt-0.5 text-[hsl(var(--navy-600))] shrink-0" />
                      <div>
                        <dt className="text-[10px] uppercase tracking-wide font-semibold text-[hsl(var(--neutral-500))]">Best for</dt>
                        <dd className="text-xs text-navy-800 font-medium mt-0.5">{a.audience}</dd>
                      </div>
                    </div>
                  </dl>

                  <div className="mt-6 flex flex-wrap gap-2 pt-2">
                    <Link
                      to={`/readiness-assessment/${a.slug}`}
                      className="btn-primary flex-1 min-w-[160px]"
                    >
                      View Details <ArrowRight className="!h-4 !w-4" />
                    </Link>
                    <a
                      href={ASSESSMENT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline"
                    >
                      Take Assessment
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============== THE MODEL ============== */}
        <AssessmentModelSection />



        {/* ============== CURRENT ASSESSMENT ACCESS ============== */}
        <section className="py-16 md:py-24 bg-[hsl(var(--neutral-50))]">
          <div className="container-cii">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-start">
              <div>
                <div className="section-eyebrow mb-3">How it works</div>
                <h2 className="font-display font-bold text-[26px] md:text-[34px] leading-tight tracking-tight text-navy-800">
                  Current Assessment Process
                </h2>
                <p className="mt-4 text-base text-[hsl(var(--neutral-700))] max-w-xl">
                  The current assessment is a guided web-based experience designed for MSME leaders. It can be
                  completed in a single session or in steps, with support available throughout.
                </p>

                <ul className="mt-7 space-y-4">
                  {[
                    { t: "Access", d: "Open the assessment via the Smart Manufacturing portal — no installation needed." },
                    { t: "Guided or self-serve", d: "Complete it on your own or with assistance from a CII facilitator." },
                    { t: "Estimated duration", d: "Typically 25–40 minutes depending on plant complexity." },
                    { t: "What you’ll need", d: "Basic plant profile, operational metrics and current digital footprint." },
                    { t: "After completion", d: "Receive a readiness snapshot with outcome insights and priority areas." },
                  ].map((i) => (
                    <li key={i.t} className="flex gap-4">
                      <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-[hsl(var(--india-green))]" />
                      <div>
                        <div className="font-semibold text-navy-800">{i.t}</div>
                        <div className="text-sm text-[hsl(var(--neutral-700))] mt-0.5">{i.d}</div>
                      </div>
                    </li>
                  ))}
                </ul>

              </div>


              {/* Sticky summary card */}
              <aside className="lg:sticky lg:top-24">
                <div className="relative overflow-hidden cii-card p-6 bg-gradient-to-br from-[hsl(var(--navy-050))] via-white to-[hsl(var(--orange-100)/0.4)] border-t-4 border-t-[hsl(var(--orange-500))]">
                  <div
                    className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-2xl opacity-40 pointer-events-none"
                    style={{ background: "hsl(var(--orange-500) / 0.35)" }}
                  />
                  <div
                    className="absolute -bottom-16 -left-16 w-44 h-44 rounded-full blur-2xl opacity-40 pointer-events-none"
                    style={{ background: "hsl(var(--navy-100))" }}
                  />
                  <div className="relative">
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded-md grid place-items-center bg-[hsl(var(--navy-700))] text-white">
                        <ClipboardList className="h-4 w-4" />
                      </div>
                      <div className="eyebrow text-[hsl(var(--navy-700))] font-semibold">Assessment Summary</div>
                    </div>
                    <h3 className="mt-3 font-display font-bold text-navy-800 text-lg">At a glance</h3>

                    <dl className="mt-5 divide-y divide-[hsl(var(--neutral-150))]">
                      {[
                        { icon: Clock, k: "Completion time", v: "25–40 minutes", color: "hsl(var(--india-green))", bg: "hsl(var(--india-green) / 0.12)" },
                        { icon: PlayCircle, k: "Format", v: "Guided web-based assessment", color: "hsl(var(--navy-700))", bg: "hsl(var(--navy-100))" },
                        { icon: Layers, k: "Dimensions covered", v: "Operations, Quality, Digital, Energy, People", color: "hsl(var(--orange-600))", bg: "hsl(var(--orange-100))" },
                        { icon: Gauge, k: "Output", v: "Readiness snapshot + priority areas", color: "hsl(var(--red-600))", bg: "hsl(var(--red-100) / 0.6)" },
                        { icon: HelpCircle, k: "Support", v: "Facilitator assistance on request", color: "hsl(var(--navy-600))", bg: "hsl(var(--navy-050))" },
                      ].map(({ icon: Icon, k, v, color, bg }) => (
                        <div key={k} className="py-3 flex items-start gap-3">
                          <div
                            className="h-8 w-8 rounded-md grid place-items-center shrink-0"
                            style={{ background: bg, color }}
                          >
                            <Icon className="h-4 w-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <dt className="text-[11px] uppercase tracking-wide text-[hsl(var(--neutral-500))] font-semibold">{k}</dt>
                            <dd className="text-sm text-navy-800 font-medium mt-0.5">{v}</dd>
                          </div>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>

              </aside>
            </div>
          </div>
        </section>

        {/* ============== WHAT USERS GET ============== */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-cii">
            <div className="max-w-2xl">
              <div className="section-eyebrow mb-3">What you get</div>
              <h2 className="font-display font-bold text-[26px] md:text-[34px] leading-tight tracking-tight text-navy-800">
                Outputs that guide your next step
              </h2>
              <p className="mt-4 text-base text-[hsl(var(--neutral-700))]">
                Today, the assessment provides foundational readiness insights. Over time, deeper benchmarking,
                recommendations and interactive reporting will be progressively introduced.
              </p>
            </div>

            {/* Current */}
            <div className="mt-10">
              <div className="flex items-center gap-2 mb-5">
                <span className="h-2 w-2 rounded-full bg-[hsl(var(--india-green))]" />
                <span className="text-[11px] uppercase tracking-[0.14em] font-bold text-navy-800">Available today</span>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {currentBenefits.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="cii-card p-6 bg-white">
                    <div className="h-11 w-11 rounded-md grid place-items-center bg-[hsl(var(--india-green))]/10 text-[hsl(var(--india-green))]">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-4 font-display font-bold text-navy-800 text-base">{title}</h3>
                    <p className="mt-2 text-sm text-[hsl(var(--neutral-700))] leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Future */}
            <div className="mt-12">
              <div className="flex items-center gap-2 mb-5">
                <span className="h-2 w-2 rounded-full bg-[hsl(var(--orange-500))]" />
                <span className="text-[11px] uppercase tracking-[0.14em] font-bold text-navy-800">On the roadmap</span>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {futureBenefits.map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="relative rounded-lg border border-dashed border-[hsl(var(--neutral-200))] bg-[hsl(var(--neutral-50))] p-6"
                  >
                    <span className="absolute top-4 right-4 cii-chip cii-chip-orange text-[10px] !py-0.5">Coming Soon</span>
                    <div className="h-11 w-11 rounded-md grid place-items-center bg-white border border-[hsl(var(--neutral-150))] text-[hsl(var(--neutral-500))]">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-4 font-display font-bold text-[hsl(var(--neutral-700))] text-base">{title}</h3>
                    <p className="mt-2 text-sm text-[hsl(var(--neutral-500))] leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>


      <CommonFinalCta />
            <WireFooter />
      <WireChatbotFAB />
    </div>
  );
};

export default ReadinessAssessment;
