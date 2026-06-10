import { useMemo } from "react";
import { Link, useParams, Navigate } from "react-router-dom";

import {
  ArrowRight,
  ChevronRight,
  Download,
  MessageCircle,
  Layers,
  MapPin,
  Building2,
  Factory,
  Clock,
  TrendingUp,
  TrendingDown,
  CheckCircle2,
  Compass,
  GraduationCap,
  Lightbulb,
  Sparkles,
  FileText,
  Users,
  Workflow,
  Cpu,
  Gauge,
  AlertTriangle,
  Cog,
  Quote,
  ExternalLink,
  Bot,
  Briefcase,
  Wrench,
  Rocket,
  HeartHandshake,
  CircuitBoard,
  ShieldCheck,
  Leaf,
  Globe,
} from "lucide-react";
import { WireHeader } from "@/components/wireframe/WireHeader";
import { WireFooter } from "@/components/wireframe/WireFooter";
import { WireChatbotFAB } from "@/components/wireframe/WireChatbotFAB";
import { SEO } from "@/components/SEO";
import {
  findCaseStudy,
  relatedCaseStudies,
  type KPI,
  type CaseStudy,
} from "@/data/caseStudies";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

/* ---------------- Fallback synthesis ---------------- */
const synth = (cs: CaseStudy) => {
  const categoryTags = cs.categoryTags ?? [cs.sector, cs.companyType, ...cs.valueProps.slice(0, 2)];
  const executiveSummary = cs.executiveSummary ?? cs.summary;
  const solutionProvider = cs.solutionProvider ?? {
    name: "CII Smart Manufacturing Partner",
    overview:
      "An accredited Industry 4.0 solution provider on the CII Smart Manufacturing platform with deep experience in digital transformation for Indian manufacturers.",
    capabilities: ["Consulting", "Analytics", "IIoT", "Cloud", "AI"],
    industries: [cs.sector],
    technologies: ["Cloud", "IIoT", "Analytics", "Mobile"],
  };
  const manufacturer = cs.manufacturer ?? {
    industry: `${cs.sector} — manufacturing`,
    footprint: `${cs.companySize} based in ${cs.state}`,
    highlights: [cs.companySize, cs.companyType, cs.state],
  };
  const approachCards =
    cs.approachCards ??
    cs.approachSteps.map((s) => ({ title: s.title, desc: s.desc }));
  const timeline =
    cs.timeline ?? [
      { phase: "01", title: "Discovery & Diagnostic", desc: "Baseline assessment and goal setting." },
      { phase: "02", title: "Pilot Deployment", desc: "First proof-of-value on critical lines." },
      { phase: "03", title: "Validation", desc: "Operational integration and refinement." },
      { phase: "04", title: "Scale-up", desc: "Roll out across the plant footprint." },
      { phase: "05", title: "Value Realisation", desc: "Sustained adoption and continuous improvement." },
    ];
  const workforce =
    cs.workforceTransformation ?? {
      before: "Teams locked in repetitive, manual operations with limited visibility.",
      after: [
        "Higher-value problem solving",
        "Quality and inspection ownership",
        "Cross-skilling for new technology",
        "Data-driven daily routines",
      ],
    };
  const outcomes =
    cs.outcomes ?? {
      operational: cs.kpis.slice(0, Math.ceil(cs.kpis.length / 2)),
      business: cs.kpis.slice(Math.ceil(cs.kpis.length / 2)),
      user: ["Better Visibility", "Faster Decisions", "Stronger Collaboration"],
    };
  const testimonial =
    cs.testimonial ?? {
      quote:
        "The Industry 4.0 journey gave us visibility we never had before — and the confidence to scale what works.",
      name: "Plant Leadership",
      role: "Executive Sponsor",
      company: cs.company,
    };
  const replicationInsights =
    cs.replicationInsights ?? [
      "Start small and prove value before scaling",
      "Focus on repeatable, high-frequency processes",
      "Co-design with operators, not for them",
      "Anchor daily routines in live data",
      "Plan for change as much as for technology",
    ];
  const resources =
    cs.resources ?? [
      { title: "Full Case Study PDF", type: "PDF" },
      { title: "Implementation Framework", type: "Framework" },
      { title: "Related Industry Report", type: "Report" },
      { title: "Best Practice Guide", type: "Guide" },
    ];
  return {
    categoryTags,
    executiveSummary,
    solutionProvider,
    manufacturer,
    approachCards,
    timeline,
    workforce,
    outcomes,
    testimonial,
    replicationInsights,
    resources,
  };
};

/* ---------------- UI primitives ---------------- */
const SectionHead = ({
  eyebrow,
  title,
  intro,
  align = "left",
  invert = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  invert?: boolean;
}) => (
  <div className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
    <div className={`section-eyebrow mb-2 ${invert ? "text-white/70" : ""}`}>{eyebrow}</div>
    <h2
      className={`font-display font-bold text-[26px] md:text-[34px] leading-tight tracking-tight ${
        invert ? "text-white" : "text-[hsl(var(--navy-900))]"
      }`}
    >
      {title}
    </h2>
    {intro && (
      <p className={`mt-3 text-base md:text-lg ${invert ? "text-white/80" : "text-[hsl(var(--neutral-700))]"}`}>
        {intro}
      </p>
    )}
  </div>
);

const KpiBig = ({
  kpi,
  tone = "navy",
}: {
  kpi: KPI;
  tone?: "green" | "orange" | "navy";
}) => {
  const Icon = kpi.direction === "down" ? TrendingDown : TrendingUp;
  const toneMap = {
    green: "text-[hsl(var(--india-green))] bg-[hsl(var(--india-green)/0.10)]",
    orange: "text-[hsl(var(--orange-600))] bg-[hsl(var(--orange-500)/0.10)]",
    navy: "text-[hsl(var(--navy-700))] bg-[hsl(var(--navy-050))]",
  } as const;
  return (
    <div className="rounded-2xl border border-[hsl(var(--neutral-150))] bg-white p-6 hover:shadow-md transition-all">
      <div className={`h-10 w-10 rounded-xl grid place-items-center ${toneMap[tone]}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="mt-4 font-display font-bold text-3xl md:text-4xl text-[hsl(var(--navy-900))] font-numeric">
        {kpi.value}
      </div>
      <div className="mt-1 text-sm text-[hsl(var(--neutral-700))]">{kpi.label}</div>
    </div>
  );
};

const NextStep = ({
  to,
  icon: Icon,
  title,
  desc,
}: {
  to: string;
  icon: any;
  title: string;
  desc: string;
}) => (
  <Link
    to={to}
    className="group rounded-2xl border border-[hsl(var(--neutral-150))] bg-white p-6 hover:shadow-md hover:-translate-y-0.5 hover:border-[hsl(var(--navy-200))] transition-all"
  >
    <div className="h-10 w-10 rounded-xl bg-[hsl(var(--navy-050))] text-[hsl(var(--navy-700))] grid place-items-center">
      <Icon className="h-5 w-5" />
    </div>
    <div className="mt-4 font-display font-bold text-[hsl(var(--navy-900))]">{title}</div>
    <div className="mt-1 text-sm text-[hsl(var(--neutral-700))]">{desc}</div>
    <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[hsl(var(--navy-700))] group-hover:text-[hsl(var(--red-600))]">
      Explore <ArrowRight className="h-3.5 w-3.5" />
    </div>
  </Link>
);

/* ---------------- Page ---------------- */
const CaseStudyDetail = () => {
  const { slug = "" } = useParams();
  const cs = findCaseStudy(slug);
  const related = useMemo(() => relatedCaseStudies(slug, 6), [slug]);

  if (!cs) return <Navigate to="/case-studies" replace />;

  const x = synth(cs);
  const heroKpis = cs.kpis.slice(0, 5);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${cs.company} — ${cs.headline} | Case Study`}
        description={cs.summary}
        url={`/case-studies/${cs.slug}`}
        type="article"
      />
      <WireHeader />

      {/* ============ 1. HERO / EXECUTIVE SUMMARY ============ */}
      <section className="relative text-white overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(125deg, hsl(var(--navy-900)) 0%, hsl(var(--navy-700)) 60%, hsl(var(--navy-600)) 100%)",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 blueprint-grid opacity-25" aria-hidden />
        <div className="container-cii relative py-10 md:py-14">
          <nav className="text-xs text-white/70 flex items-center gap-1.5 mb-5 flex-wrap" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/case-studies" className="hover:text-white">Case Studies</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white/90 truncate max-w-[60vw]">{cs.company}</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                {x.categoryTags.map((t, i) => (
                  <span
                    key={t}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] uppercase tracking-[0.12em] font-bold ${
                      i === 0
                        ? "bg-[hsl(var(--orange-500))] text-white"
                        : "bg-white/10 backdrop-blur-sm border border-white/20"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                {cs.company}
              </div>
              <h1 className="font-display font-bold text-[26px] sm:text-[32px] md:text-[42px] leading-[1.1] tracking-tight">
                {cs.headline}
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-white/85 max-w-2xl">
                {x.executiveSummary}
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/80 pt-1">
                <span className="inline-flex items-center gap-2"><Factory className="h-4 w-4 text-white/60" />{cs.sector}</span>
                <span className="inline-flex items-center gap-2"><Building2 className="h-4 w-4 text-white/60" />{cs.companySize}</span>
                <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-white/60" />{cs.state}</span>
                <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-white/60" />{cs.durationMonths} months</span>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <button className="btn-primary" type="button">
                  <Download className="h-4 w-4" /> Download Case Study
                </button>
                <a
                  href="#related"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-md bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors"
                >
                  <Layers className="h-4 w-4" /> Explore Similar Case Studies
                </a>
                <Link
                  to="/solutions"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-md bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors"
                >
                  <CircuitBoard className="h-4 w-4" /> Explore Related Solutions
                </Link>
              </div>
            </div>

            {/* Right — Outcome Snapshot */}
            <div className="lg:col-span-4">
              <div className="rounded-lg bg-white/10 backdrop-blur-md border border-white/15 p-5">
                <div className="text-[11px] uppercase tracking-[0.14em] font-bold text-white/70 mb-3">
                  Impact Snapshot
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {heroKpis.slice(0, 4).map((k) => (
                    <div key={k.label} className="rounded-md bg-white/10 border border-white/10 p-3">
                      <div className="text-[10px] text-white/70 leading-tight">{k.label}</div>
                      <div className="mt-1 font-numeric font-bold text-lg sm:text-xl">{k.value}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-md bg-[hsl(var(--orange-500)/0.18)] border border-[hsl(var(--orange-500)/0.4)] p-3">
                  <div className="text-[10px] uppercase tracking-wider font-bold text-white/80">
                    Headline Outcome
                  </div>
                  <div className="mt-0.5 text-sm font-bold">
                    {cs.metric.value} {cs.metric.label}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 2. IMPACT SNAPSHOT DASHBOARD ============ */}
      <section className="py-14 md:py-20 bg-[hsl(var(--neutral-50))]">
        <div className="container-cii">
          <SectionHead
            eyebrow="Impact Snapshot Dashboard"
            title="Business impact at a glance"
            intro="A measurable view of how the programme moved the needle across operations, business and people."
          />
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
            {cs.kpis.map((k, i) => (
              <KpiBig key={k.label} kpi={k} tone={i % 3 === 0 ? "green" : i % 3 === 1 ? "navy" : "orange"} />
            ))}
          </div>

          {/* Before vs After */}
          {cs.beforeAfter.length > 0 && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
              {cs.beforeAfter.map((b) => (
                <div
                  key={b.label}
                  className="rounded-2xl border border-[hsl(var(--neutral-150))] bg-white overflow-hidden"
                >
                  <div className="px-5 py-3 border-b border-[hsl(var(--neutral-150))] bg-[hsl(var(--neutral-50))]">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--neutral-700))]">
                      {b.label}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-[hsl(var(--neutral-150))]">
                    <div className="p-5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--neutral-700))]">Before</div>
                      <div className="mt-1 font-numeric font-bold text-xl text-[hsl(var(--neutral-700))]">{b.before}</div>
                    </div>
                    <div className="p-5 bg-[hsl(var(--india-green)/0.06)]">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--india-green))]">After</div>
                      <div className="mt-1 font-numeric font-bold text-xl text-[hsl(var(--navy-900))]">{b.after}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ============ 3 & 4. SOLUTION PROVIDER + MANUFACTURER ============ */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container-cii grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Solution Provider */}
          <div className="rounded-3xl border border-[hsl(var(--neutral-150))] bg-white p-7 md:p-8">
            <div className="section-eyebrow mb-2">About the Solution Provider</div>
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-[hsl(var(--navy-050))] grid place-items-center">
                <Cog className="h-7 w-7 text-[hsl(var(--navy-800))]" />
              </div>
              <div>
                <div className="font-display font-bold text-xl text-[hsl(var(--navy-900))]">
                  {x.solutionProvider.name}
                </div>
                <div className="text-xs text-[hsl(var(--neutral-700))]">Accredited Industry 4.0 partner</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-[hsl(var(--neutral-700))]">{x.solutionProvider.overview}</p>

            <div className="mt-5">
              <div className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--neutral-700))]">
                Capabilities
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {x.solutionProvider.capabilities.map((c) => (
                  <span key={c} className="cii-chip">{c}</span>
                ))}
              </div>
            </div>
            {x.solutionProvider.technologies && (
              <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[hsl(var(--neutral-700))]">Industries</div>
                  <div className="mt-1 text-[hsl(var(--navy-900))]">{x.solutionProvider.industries?.join(", ")}</div>
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[hsl(var(--neutral-700))]">Technologies</div>
                  <div className="mt-1 text-[hsl(var(--navy-900))]">{x.solutionProvider.technologies?.join(", ")}</div>
                </div>
              </div>
            )}
            <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[hsl(var(--navy-700))]">
              <Globe className="h-3.5 w-3.5" /> Visit website <ExternalLink className="h-3 w-3" />
            </div>
          </div>

          {/* Manufacturer */}
          <div className="rounded-3xl border border-[hsl(var(--neutral-150))] bg-[hsl(var(--neutral-50))] p-7 md:p-8">
            <div className="section-eyebrow mb-2">About the Manufacturer</div>
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-white border border-[hsl(var(--neutral-150))] grid place-items-center">
                <Factory className="h-7 w-7 text-[hsl(var(--navy-800))]" />
              </div>
              <div>
                <div className="font-display font-bold text-xl text-[hsl(var(--navy-900))]">{cs.company}</div>
                <div className="text-xs text-[hsl(var(--neutral-700))]">{cs.companyType} · {cs.state}</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-[hsl(var(--neutral-700))]">
              {x.manufacturer.industry}. {x.manufacturer.footprint}.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {x.manufacturer.highlights.map((h) => (
                <div
                  key={h}
                  className="rounded-xl bg-white border border-[hsl(var(--neutral-150))] p-3 text-sm font-semibold text-[hsl(var(--navy-900))]"
                >
                  {h}
                </div>
              ))}
            </div>

            <div className="mt-5">
              <div className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--neutral-700))]">
                Focus Areas
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {cs.valueProps.map((v) => (
                  <span key={v} className="cii-chip">{v}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 5. EXISTING CHALLENGES ============ */}
      <section className="py-14 md:py-20 bg-[hsl(var(--neutral-50))]">
        <div className="container-cii">
          <SectionHead
            eyebrow="Existing Challenges"
            title="The business challenge"
            intro={cs.challenge}
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cs.challengePoints.map((p, i) => (
              <div
                key={p}
                className="rounded-2xl border border-[hsl(var(--red-100))] bg-white p-6 hover:shadow-md transition-all"
              >
                <div className="h-10 w-10 rounded-xl bg-[hsl(var(--red-100))] text-[hsl(var(--red-600))] grid place-items-center">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <div className="mt-4 text-[11px] font-bold uppercase tracking-wider text-[hsl(var(--red-600))]">
                  Challenge {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-1 font-display font-semibold text-[hsl(var(--navy-900))]">{p}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 6. APPROACH TO INDUSTRY 4.0 ============ */}
      <section className="py-14 md:py-20 bg-[hsl(var(--navy-900))] text-white">
        <div className="container-cii">
          <SectionHead
            eyebrow="Approach to Industry 4.0"
            title="How Industry 4.0 was approached"
            intro={cs.approach}
            invert
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {x.approachCards.map((c, i) => {
              const icons = [Workflow, Rocket, Users, Sparkles, Wrench, Gauge];
              const Icon = icons[i % icons.length];
              return (
                <div key={c.title} className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur">
                  <div className="h-10 w-10 rounded-xl bg-white/10 grid place-items-center">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="mt-4 font-display font-semibold">{c.title}</div>
                  <div className="mt-1 text-sm text-white/80">{c.desc}</div>
                </div>
              );
            })}
          </div>

          {/* Before vs After approach */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-7">
              <div className="text-[11px] font-bold uppercase tracking-wider text-white/60">Before</div>
              <div className="mt-2 font-display font-semibold text-xl">Manual, reactive, siloed</div>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[hsl(var(--red-400))] shrink-0" /> Limited shop-floor visibility</li>
                <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[hsl(var(--red-400))] shrink-0" /> Tribal knowledge dependence</li>
                <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[hsl(var(--red-400))] shrink-0" /> Slow decision cycles</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-[hsl(var(--india-green)/0.18)] to-white/5 border border-[hsl(var(--india-green)/0.35)] p-7">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[hsl(var(--india-green))]">After</div>
              <div className="mt-2 font-display font-semibold text-xl">Connected, data-driven, scalable</div>
              <ul className="mt-4 space-y-2 text-sm text-white/85">
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-[hsl(var(--india-green))] shrink-0 mt-0.5" /> Real-time visibility & insights</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-[hsl(var(--india-green))] shrink-0 mt-0.5" /> Standardised, repeatable playbooks</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-[hsl(var(--india-green))] shrink-0 mt-0.5" /> Empowered, upskilled teams</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 7. ABOUT THE INDUSTRY 4.0 SOLUTION ============ */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container-cii">
          <SectionHead
            eyebrow="About the Industry 4.0 Solution"
            title="What solution was deployed"
            intro="An end-to-end Industry 4.0 capability stack, designed for the manufacturer's reality."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cs.capabilities.map((c, i) => {
              const icons = [Cpu, Gauge, Workflow, ShieldCheck, Activity, Sparkles];
              const Icon = icons[i % icons.length];
              return (
                <div
                  key={c}
                  className="rounded-2xl border border-[hsl(var(--neutral-150))] bg-white p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div className="h-10 w-10 rounded-xl bg-[hsl(var(--india-green)/0.10)] text-[hsl(var(--india-green))] grid place-items-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-4 font-display font-semibold text-[hsl(var(--navy-900))]">{c}</div>
                  <div className="mt-1 text-sm text-[hsl(var(--neutral-700))]">
                    Capability deployed as part of the Industry 4.0 solution stack.
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 8. IMPLEMENTATION JOURNEY ============ */}
      <section className="py-14 md:py-20 bg-[hsl(var(--neutral-50))]">
        <div className="container-cii">
          <SectionHead
            eyebrow="Implementation Journey"
            title="From adoption to scale"
            intro="A phased journey designed to de-risk the transformation and build momentum."
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {x.timeline.map((t) => (
              <div
                key={t.title}
                className="relative rounded-2xl border border-[hsl(var(--neutral-150))] bg-white p-6 hover:shadow-md transition-all"
              >
                <div className="font-numeric font-bold text-3xl text-[hsl(var(--navy-700))]/60">{t.phase}</div>
                <div className="mt-2 font-display font-bold text-lg text-[hsl(var(--navy-900))]">{t.title}</div>
                <div className="mt-1 text-sm text-[hsl(var(--neutral-700))]">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 9. HUMAN IMPACT & WORKFORCE TRANSFORMATION ============ */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container-cii">
          <SectionHead
            eyebrow="Human Impact"
            title="People & workforce transformation"
            intro="Technology only sticks when people thrive with it. Here's how teams evolved."
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-[hsl(var(--red-100))] bg-white p-7">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[hsl(var(--red-600))]">Before</div>
              <div className="mt-3 font-display font-semibold text-[hsl(var(--navy-900))]">{x.workforce.before}</div>
            </div>
            <div className="rounded-2xl border border-[hsl(var(--india-green)/0.25)] bg-[hsl(var(--india-green)/0.05)] p-7">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[hsl(var(--india-green))]">After</div>
              <ul className="mt-3 space-y-2">
                {x.workforce.after.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-sm text-[hsl(var(--navy-900))] font-medium">
                    <CheckCircle2 className="h-4 w-4 text-[hsl(var(--india-green))] shrink-0 mt-0.5" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: GraduationCap, label: "Upskilling", desc: "New capabilities for shop-floor teams." },
              { icon: HeartHandshake, label: "Empowerment", desc: "Decisions pushed closer to the line." },
              { icon: Users, label: "Human–Machine Collaboration", desc: "Technology that augments people, not replaces them." },
            ].map((it) => (
              <div key={it.label} className="rounded-2xl border border-[hsl(var(--neutral-150))] bg-[hsl(var(--neutral-50))] p-5">
                <div className="h-10 w-10 rounded-xl bg-white border border-[hsl(var(--neutral-150))] text-[hsl(var(--navy-800))] grid place-items-center">
                  <it.icon className="h-5 w-5" />
                </div>
                <div className="mt-3 font-display font-semibold text-[hsl(var(--navy-900))]">{it.label}</div>
                <div className="mt-1 text-sm text-[hsl(var(--neutral-700))]">{it.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 10. BENEFITS ACHIEVED ============ */}
      <section className="py-14 md:py-20 bg-[hsl(var(--neutral-50))]">
        <div className="container-cii">
          <SectionHead
            eyebrow="Benefits Achieved"
            title="Business outcomes achieved"
            intro="Organised across operations, business and workforce impact."
          />
          <div className="mt-10">
            <Tabs defaultValue="operational" className="w-full">
              <TabsList className="bg-white border border-[hsl(var(--neutral-150))]">
                <TabsTrigger value="operational">Operational</TabsTrigger>
                <TabsTrigger value="business">Business</TabsTrigger>
                <TabsTrigger value="workforce">Workforce</TabsTrigger>
                <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
              </TabsList>
              <TabsContent value="operational" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {x.outcomes.operational.map((k) => (
                    <KpiBig key={k.label} kpi={k} tone="navy" />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="business" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {x.outcomes.business.map((k) => (
                    <KpiBig key={k.label} kpi={k} tone="green" />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="workforce" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {x.outcomes.user.map((u) => (
                    <div key={u} className="rounded-2xl border border-[hsl(var(--neutral-150))] bg-white p-5">
                      <CheckCircle2 className="h-5 w-5 text-[hsl(var(--india-green))]" />
                      <div className="mt-3 font-display font-semibold text-[hsl(var(--navy-900))]">{u}</div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="sustainability" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { label: "Reduced Power Consumption", desc: "More output per unit of energy." },
                    { label: "Retention of IP", desc: "Knowledge and data stay with the manufacturer." },
                    { label: "Long-Term Scalability", desc: "Foundations for the next phase of growth." },
                  ].map((s) => (
                    <div key={s.label} className="rounded-2xl border border-[hsl(var(--neutral-150))] bg-white p-5">
                      <div className="h-10 w-10 rounded-xl bg-[hsl(var(--india-green)/0.10)] text-[hsl(var(--india-green))] grid place-items-center">
                        <Leaf className="h-5 w-5" />
                      </div>
                      <div className="mt-3 font-display font-semibold text-[hsl(var(--navy-900))]">{s.label}</div>
                      <div className="mt-1 text-sm text-[hsl(var(--neutral-700))]">{s.desc}</div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* ============ 11. CUSTOMER TESTIMONIAL ============ */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container-cii">
          <SectionHead eyebrow="Voice of the Customer" title="In their own words" />
          <div className="mt-8 rounded-3xl border border-[hsl(var(--neutral-150))] bg-[hsl(var(--neutral-50))] p-8 md:p-10 grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-9">
              <Quote className="h-8 w-8 text-[hsl(var(--orange-500))]" />
              <blockquote className="mt-4 font-display text-xl md:text-2xl leading-snug text-[hsl(var(--navy-900))]">
                “{x.testimonial.quote}”
              </blockquote>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-[hsl(var(--navy-800))] text-white grid place-items-center font-bold">
                  {x.testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <div className="font-semibold text-[hsl(var(--navy-900))]">{x.testimonial.name}</div>
                  <div className="text-sm text-[hsl(var(--neutral-700))]">
                    {x.testimonial.role} · {x.testimonial.company}
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-3 rounded-2xl bg-white border border-[hsl(var(--neutral-150))] p-5">
              <div className="text-[11px] uppercase tracking-wider font-bold text-[hsl(var(--neutral-700))]">
                Headline Outcome
              </div>
              <div className="mt-2 font-numeric font-bold text-3xl text-[hsl(var(--india-green))]">
                {cs.metric.value}
              </div>
              <div className="text-sm text-[hsl(var(--neutral-700))]">{cs.metric.label}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 12. REPLICATION INSIGHTS ============ */}
      <section className="py-14 md:py-20 bg-[hsl(var(--neutral-50))]">
        <div className="container-cii">
          <SectionHead
            eyebrow="Replication Insights"
            title="What manufacturers can learn"
            intro="Lessons that other manufacturers can apply to their own Industry 4.0 journey."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {x.replicationInsights.map((r, i) => (
              <div
                key={r}
                className="rounded-2xl border border-[hsl(var(--orange-500)/0.25)] bg-white p-6 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-[hsl(var(--orange-500)/0.12)] text-[hsl(var(--orange-600))] grid place-items-center font-numeric font-bold text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <Lightbulb className="h-4 w-4 text-[hsl(var(--orange-500))]" />
                </div>
                <div className="mt-3 font-display font-semibold text-[hsl(var(--navy-900))]">{r}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 13. RELATED CONTENT ============ */}
      <section id="related" className="py-14 md:py-20 bg-white">
        <div className="container-cii space-y-12">
          <div>
            <SectionHead eyebrow="Related Content" title="Similar manufacturing transformation stories" />
            <div className="mt-8 flex gap-5 overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0 snap-x scrollbar-none pb-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/case-studies/${r.slug}`}
                  className="snap-start shrink-0 w-[85%] sm:w-[340px] rounded-2xl border border-[hsl(var(--neutral-150))] bg-white p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex items-center gap-2 text-xs text-[hsl(var(--neutral-700))]">
                    <Factory className="h-3 w-3" /> {r.sector} · <MapPin className="h-3 w-3" /> {r.state}
                  </div>
                  <div className="mt-2 text-xs font-bold uppercase tracking-wider text-[hsl(var(--neutral-700))]">
                    {r.company}
                  </div>
                  <h3 className="mt-1 font-display font-bold text-base text-[hsl(var(--navy-900))] leading-snug">
                    {r.headline}
                  </h3>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="font-numeric font-bold text-lg text-[hsl(var(--india-green))]">
                      {r.metric.value}
                    </span>
                    <span className="text-xs text-[hsl(var(--neutral-700))]">{r.metric.label}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="section-eyebrow mb-2">Related Solutions</div>
            <h3 className="font-display font-bold text-2xl text-[hsl(var(--navy-900))]">
              Solutions referenced in this transformation
            </h3>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {(cs.capabilities.length ? cs.capabilities : ["Robotics", "Automation", "Smart Manufacturing", "IIoT"]).slice(0, 4).map((s) => (
                <Link
                  key={s}
                  to="/solutions"
                  className="group rounded-2xl border border-[hsl(var(--neutral-150))] bg-[hsl(var(--neutral-50))] p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <CircuitBoard className="h-5 w-5 text-[hsl(var(--navy-700))]" />
                  <div className="mt-3 font-display font-semibold text-[hsl(var(--navy-900))]">{s}</div>
                  <div className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[hsl(var(--navy-700))] group-hover:text-[hsl(var(--red-600))]">
                    Explore <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Link
              to="/reports"
              className="group rounded-2xl border border-[hsl(var(--neutral-150))] bg-white p-6 hover:shadow-md transition-all"
            >
              <div className="section-eyebrow mb-2">Related Reports</div>
              <div className="font-display font-bold text-lg text-[hsl(var(--navy-900))]">
                Industry 4.0 outlooks for {cs.sector}
              </div>
              <div className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[hsl(var(--navy-700))] group-hover:text-[hsl(var(--red-600))]">
                Browse reports <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>
            <Link
              to="/programmes"
              className="group rounded-2xl border border-[hsl(var(--neutral-150))] bg-white p-6 hover:shadow-md transition-all"
            >
              <div className="section-eyebrow mb-2">Related Programmes & Training</div>
              <div className="font-display font-bold text-lg text-[hsl(var(--navy-900))]">
                Build the capability behind this case study
              </div>
              <div className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[hsl(var(--navy-700))] group-hover:text-[hsl(var(--red-600))]">
                Explore programmes <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          </div>

          {/* Downloads */}
          <div>
            <div className="section-eyebrow mb-2">Downloads</div>
            <h3 className="font-display font-bold text-2xl text-[hsl(var(--navy-900))]">
              Take this case study with you
            </h3>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {x.resources.map((r) => (
                <button
                  key={r.title}
                  type="button"
                  className="text-left rounded-2xl border border-[hsl(var(--neutral-150))] bg-white p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div className="h-10 w-10 rounded-xl bg-[hsl(var(--navy-050))] text-[hsl(var(--navy-800))] grid place-items-center">
                      <FileText className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--neutral-700))] bg-[hsl(var(--neutral-50))] border border-[hsl(var(--neutral-150))] rounded-full px-2 py-0.5">
                      {r.type}
                    </span>
                  </div>
                  <div className="mt-4 font-display font-semibold text-[hsl(var(--navy-900))]">{r.title}</div>
                  <div className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[hsl(var(--navy-700))]">
                    Download <Download className="h-3.5 w-3.5" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 14. NEXT STEPS ============ */}
      <section className="py-14 md:py-20 bg-[hsl(var(--neutral-50))]">
        <div className="container-cii">
          <SectionHead
            eyebrow="Next Steps"
            title="Ready to explore similar opportunities?"
            intro="Choose your path forward — from self-diagnosis to expert conversation."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <NextStep to="/readiness-assessment" icon={Compass} title="Take Readiness Assessment" desc="Benchmark your current readiness." />
            <NextStep to="/solutions" icon={CircuitBoard} title="Explore Robotics Solutions" desc="Capabilities & partner solutions." />
            <NextStep to="/programmes" icon={GraduationCap} title="Programmes & Training" desc="Build capability in your teams." />
            <NextStep to="/contact" icon={MessageCircle} title="Talk to an Expert" desc="Get advisory guidance." />
            <NextStep to="/contact" icon={Bot} title="Ask the Assistant" desc="Smart Manufacturing AI." />
          </div>
        </div>
      </section>

      {/* Sticky bottom CTA — mobile */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-[hsl(var(--neutral-150))] p-3 shadow-2xl">
        <Link to="/contact" className="btn-secondary w-full">
          Talk to an Expert <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <WireFooter />
      <WireChatbotFAB />
    </div>
  );
};

/* Activity icon polyfill (used inside section 7) */
const Activity = Briefcase;

export default CaseStudyDetail;
