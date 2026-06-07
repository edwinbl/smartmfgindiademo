import { useMemo, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Download,
  MessageCircle,
  Layers,
  MapPin,
  Building2,
  Factory,
  Clock,
  TrendingUp,
  TrendingDown,
  Target,
  CheckCircle2,
  Compass,
  GraduationCap,
  Lightbulb,
  Sparkles,
  FileText,
  Users,
  Workflow,
  Cpu,
  GitBranch,
  ShieldCheck,
  Gauge,
  Settings,
  AlertTriangle,
  Cog,
  Activity,
  BookOpen,
  Bot,
} from "lucide-react";
import { WireHeader } from "@/components/wireframe/WireHeader";
import { WireFooter } from "@/components/wireframe/WireFooter";
import { WireChatbotFAB } from "@/components/wireframe/WireChatbotFAB";
import { SEO } from "@/components/SEO";
import { findCaseStudy, relatedCaseStudies, type KPI, type CaseStudy } from "@/data/caseStudies";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

/* ---------------- Fallback synthesis ---------------- */
const synth = (cs: CaseStudy) => {
  const categoryTags = cs.categoryTags ?? [cs.sector, ...cs.valueProps.slice(0, 2)];
  const executiveSummary = cs.executiveSummary ?? cs.summary;
  const solutionProvider = cs.solutionProvider ?? {
    name: "CII Smart Manufacturing Partner",
    overview:
      "An accredited Industry 4.0 solution provider on the CII Smart Manufacturing platform with deep experience in digital transformation for Indian manufacturers.",
    capabilities: ["Consulting", "Analytics", "Optimization", "Cloud", "AI & Cognitive Solutions"],
    industries: [cs.sector],
    technologies: ["Cloud", "IIoT", "Analytics", "Mobile"],
  };
  const manufacturer = cs.manufacturer ?? {
    industry: `${cs.sector} — manufacturing`,
    footprint: `${cs.companySize} based in ${cs.state}`,
    highlights: [cs.companySize, cs.companyType, cs.state],
  };
  const discoveryFlow =
    cs.discoveryFlow ??
    cs.challengePoints.map((p, i) => ({ title: `Signal ${i + 1}`, desc: p }));
  const complexity =
    cs.complexity ?? [
      { value: cs.companySize.split(" ")[0], label: "Workforce" },
      { value: `${cs.durationMonths} mo`, label: "Programme Duration" },
      { value: `${cs.valueProps.length}+`, label: "Value Streams" },
      { value: `${cs.kpis.length}`, label: "KPIs Tracked" },
    ];
  const timeline =
    cs.timeline ?? [
      { phase: "01", title: "Discovery Workshop", desc: "Baseline diagnostic and goal setting." },
      { phase: "02", title: "Requirement Finalisation", desc: "Scope, SOPs and success criteria." },
      { phase: "03", title: "Proof of Concept", desc: "Pilot deployment on critical lines." },
      { phase: "04", title: "Full Rollout", desc: "Scaled across the manufacturing footprint." },
      { phase: "05", title: "Deployment & Training", desc: "Operator and supervisor enablement." },
      { phase: "06", title: "Value Realisation", desc: "Sustained adoption and continuous improvement." },
    ];
  const team =
    cs.team ?? [
      { role: "Executive Sponsor", scope: "Plant leadership" },
      { role: "Project Manager", scope: "Joint PMO" },
      { role: "Subject Matter Expert", scope: "Domain ownership" },
      { role: "Solution Lead", scope: "Architecture & delivery" },
      { role: "Business Consultant", scope: "Change & adoption" },
      { role: "Technology Resource", scope: "Build & integration" },
    ];
  const changeManagement =
    cs.changeManagement ?? {
      challenge: "Driving adoption among shop-floor teams and supervisors.",
      actions: [
        "Training Programmes",
        "Tool Capability Workshops",
        "Simulations",
        "Historical Data Demonstrations",
        "Onsite Collaboration",
      ],
      outcome: "Strong user confidence and sustained adoption across teams.",
    };
  const architecture =
    cs.architecture ??
    cs.capabilities.map((c, i) => ({
      name: c,
      layer: ["Capture", "Data", "Insights", "Action", "Reporting"][i % 5],
      desc: `${c} layer of the Industry 4.0 solution stack.`,
    }));
  const solutionFeatures =
    cs.solutionFeatures ?? cs.capabilities.map((c) => ({ title: c, desc: `${c} capability enabled by the programme.` }));
  const implementationChallenges =
    cs.implementationChallenges ??
    cs.challengePoints.map((p) => ({
      challenge: p,
      mitigation: "Structured workshops, training and onsite collaboration.",
      outcome: "Resolved with sustained team adoption.",
    }));
  const outcomes =
    cs.outcomes ?? {
      operational: cs.kpis.slice(0, Math.ceil(cs.kpis.length / 2)),
      business: cs.kpis.slice(Math.ceil(cs.kpis.length / 2)),
      user: ["Better Visibility", "Faster Decision-Making", "Improved Communication"],
    };
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
    discoveryFlow,
    complexity,
    timeline,
    team,
    changeManagement,
    architecture,
    solutionFeatures,
    implementationChallenges,
    outcomes,
    resources,
  };
};

/* ---------------- Small UI primitives ---------------- */
const SectionHead = ({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) => (
  <div className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
    <div className="section-eyebrow mb-2">{eyebrow}</div>
    <h2 className="font-display font-bold text-[26px] md:text-[34px] leading-tight tracking-tight text-[hsl(var(--navy-900))]">
      {title}
    </h2>
    {intro && <p className="mt-3 text-[hsl(var(--neutral-700))] text-base md:text-lg">{intro}</p>}
  </div>
);

const KpiBig = ({ kpi, tone = "green" }: { kpi: KPI; tone?: "green" | "orange" | "navy" }) => {
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

const Meta = ({ icon: Icon, label, value }: { icon: any; label: string; value: string }) => (
  <div className="flex items-center gap-2 text-[hsl(var(--neutral-700))]">
    <Icon className="h-4 w-4 text-[hsl(var(--navy-700))]" />
    <span className="text-[hsl(var(--neutral-500))]">{label}:</span>
    <span className="font-semibold text-[hsl(var(--navy-900))]">{value}</span>
  </div>
);

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

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${cs.company} — ${cs.headline} | Case Study`}
        description={cs.summary}
        url={`/case-studies/${cs.slug}`}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: cs.headline,
          description: cs.summary,
          image: "https://www.smartmfgindia.com/img/Logo-final.png",
          articleSection: cs.sector,
          keywords: [cs.sector, cs.companyType, cs.state, ...cs.valueProps].join(", "),
          author: { "@type": "Organization", name: "CII Smart Manufacturing" },
          publisher: {
            "@type": "Organization",
            name: "CII Smart Manufacturing",
            logo: { "@type": "ImageObject", url: "https://www.smartmfgindia.com/img/Logo-final.png" },
          },
          about: { "@type": "Organization", name: cs.company },
          mainEntityOfPage: `https://smartmfgindia-demo4.bluelup.in/case-studies/${cs.slug}`,
        }}
      />
      <WireHeader />

      {/* ============ 1. HERO / EXECUTIVE SUMMARY ============ */}
      <section className="relative bg-gradient-to-b from-[hsl(var(--neutral-50))] to-white border-b border-[hsl(var(--neutral-150))]">
        <div className="container-cii py-10 md:py-16">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm text-[hsl(var(--navy-700))] hover:text-[hsl(var(--red-600))] font-semibold"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Case Studies
          </Link>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-10 items-start">
            {/* Left */}
            <div>
              <div className="flex flex-wrap items-center gap-2">
                {x.categoryTags.map((t, i) => (
                  <span key={t} className={i === 0 ? "cii-chip" : i === 1 ? "cii-chip cii-chip-orange" : "cii-chip"}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 text-sm font-semibold uppercase tracking-wider text-[hsl(var(--neutral-500))]">
                {cs.company}
              </div>
              <h1 className="mt-2 font-display font-bold text-[32px] md:text-[46px] leading-[1.08] tracking-tight text-[hsl(var(--navy-900))]">
                {cs.headline}
              </h1>
              <p className="mt-5 text-base md:text-lg text-[hsl(var(--neutral-700))] max-w-2xl">
                {x.executiveSummary}
              </p>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
                <Meta icon={Factory} label="Sector" value={cs.sector} />
                <Meta icon={Building2} label="Size" value={cs.companySize} />
                <Meta icon={MapPin} label="State" value={cs.state} />
                <Meta icon={Clock} label="Duration" value={`${cs.durationMonths} months`} />
              </div>

              {/* Impact snapshot strip */}
              <div className="mt-7 grid grid-cols-2 md:grid-cols-4 gap-3">
                {cs.kpis.slice(0, 4).map((k) => (
                  <div
                    key={k.label}
                    className="rounded-xl bg-white border border-[hsl(var(--neutral-150))] p-3"
                  >
                    <div className="font-numeric font-bold text-xl text-[hsl(var(--navy-900))]">{k.value}</div>
                    <div className="text-[11px] text-[hsl(var(--neutral-500))] leading-tight">{k.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <button className="btn-primary" type="button">
                  <Download className="h-4 w-4" /> Download PDF
                </button>
                <a href="#related" className="btn-outline">
                  <Layers className="h-4 w-4" /> Explore Similar
                </a>
                <Link to="/reports" className="btn-secondary">
                  <Lightbulb className="h-4 w-4" /> Related Solution
                </Link>
              </div>
            </div>

            {/* Right — Outcome Dashboard mock */}
            <div className="relative rounded-3xl bg-gradient-to-br from-[hsl(var(--navy-800))] to-[hsl(var(--navy-900))] p-6 md:p-8 text-white overflow-hidden shadow-xl">
              <div className="absolute inset-0 blueprint-grid opacity-40" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-white/70">Transformation Snapshot</span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[hsl(var(--india-green)/0.25)] text-white">
                    <Sparkles className="h-3 w-3" /> Outcomes
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {cs.kpis.slice(0, 4).map((k) => (
                    <div
                      key={k.label}
                      className="rounded-xl bg-white/10 backdrop-blur p-4 border border-white/10"
                    >
                      <div className="text-[11px] text-white/70">{k.label}</div>
                      <div className="mt-1 font-numeric font-bold text-2xl">{k.value}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 space-y-2">
                  {cs.beforeAfter.slice(0, 3).map((b) => (
                    <div key={b.label}>
                      <div className="flex items-center justify-between text-xs text-white/70">
                        <span>{b.label}</span>
                        <span>
                          <span className="opacity-60 line-through mr-2">{b.before}</span>
                          <span className="text-white font-semibold">{b.after}</span>
                        </span>
                      </div>
                      <div className="mt-1 h-1.5 rounded-full bg-white/15 overflow-hidden">
                        <div className="h-full w-[78%] bg-gradient-to-r from-[hsl(var(--india-green))] to-[hsl(var(--orange-500))]" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-white/10 text-[11px] text-white/60">
                  Programme duration · {cs.durationMonths} months · {cs.state}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 2. IMPACT SNAPSHOT DASHBOARD ============ */}
      <section className="py-16 md:py-20 bg-[hsl(var(--neutral-50))]">
        <div className="container-cii">
          <SectionHead
            eyebrow="Impact Snapshot"
            title="Business impact at a glance"
            intro="A measurable view of how the programme moved the needle across operations, business and people."
          />
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {cs.kpis.map((k, i) => (
              <KpiBig key={k.label} kpi={k} tone={i % 3 === 0 ? "green" : i % 3 === 1 ? "navy" : "orange"} />
            ))}
          </div>

          {/* Before vs After */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
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
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--neutral-700))]">
                      Before
                    </div>
                    <div className="mt-1 font-numeric font-bold text-xl text-[hsl(var(--neutral-700))]">
                      {b.before}
                    </div>
                  </div>
                  <div className="p-5 bg-[hsl(var(--india-green)/0.06)]">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--india-green))]">
                      After
                    </div>
                    <div className="mt-1 font-numeric font-bold text-xl text-[hsl(var(--navy-900))]">
                      {b.after}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 3 & 4. SOLUTION PROVIDER + MANUFACTURER ============ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-cii grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Solution Provider */}
          <div className="rounded-3xl border border-[hsl(var(--neutral-150))] bg-white p-7 md:p-8">
            <div className="section-eyebrow mb-2">Solution Provider</div>
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
                Core Capabilities
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {x.solutionProvider.capabilities.map((c) => (
                  <span key={c} className="cii-chip">
                    {c}
                  </span>
                ))}
              </div>
            </div>
            {x.solutionProvider.technologies && (
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[hsl(var(--neutral-700))]">
                    Industries
                  </div>
                  <div className="mt-1 text-[hsl(var(--navy-900))]">
                    {x.solutionProvider.industries?.join(", ")}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[hsl(var(--neutral-700))]">
                    Technologies
                  </div>
                  <div className="mt-1 text-[hsl(var(--navy-900))]">
                    {x.solutionProvider.technologies?.join(", ")}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Manufacturer */}
          <div className="rounded-3xl border border-[hsl(var(--neutral-150))] bg-[hsl(var(--neutral-50))] p-7 md:p-8">
            <div className="section-eyebrow mb-2">The Manufacturer</div>
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-white border border-[hsl(var(--neutral-150))] grid place-items-center">
                <Factory className="h-7 w-7 text-[hsl(var(--navy-800))]" />
              </div>
              <div>
                <div className="font-display font-bold text-xl text-[hsl(var(--navy-900))]">{cs.company}</div>
                <div className="text-xs text-[hsl(var(--neutral-700))]">{cs.companyType} · {cs.state}</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-[hsl(var(--neutral-700))]">{x.manufacturer.industry}. {x.manufacturer.footprint}.</p>

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

            <div className="mt-5 flex flex-wrap gap-2">
              {cs.valueProps.map((v) => (
                <span key={v} className="cii-chip">
                  {v}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 5. CHALLENGE LANDSCAPE ============ */}
      <section className="py-16 md:py-20 bg-[hsl(var(--neutral-50))]">
        <div className="container-cii">
          <SectionHead
            eyebrow="The Business Challenge"
            title="The operating reality before transformation"
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

      {/* ============ 6. DISCOVERY JOURNEY ============ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-cii">
          <SectionHead
            eyebrow="Identifying the Need for Change"
            title="What led to the discovery of the problem"
            intro="A connected chain of signals made the case for a digital, Industry 4.0 intervention."
          />
          <div className="mt-10 relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-[hsl(var(--neutral-150))]" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-5 relative">
              {x.discoveryFlow.slice(0, 5).map((d, i) => (
                <div key={d.title} className="text-center md:text-left">
                  <div className="mx-auto md:mx-0 h-10 w-10 rounded-full bg-white border-2 border-[hsl(var(--navy-700))] text-[hsl(var(--navy-800))] grid place-items-center font-numeric font-bold text-sm relative z-10">
                    {i + 1}
                  </div>
                  <div className="mt-4 font-display font-semibold text-[hsl(var(--navy-900))]">{d.title}</div>
                  <div className="mt-1 text-sm text-[hsl(var(--neutral-700))]">{d.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ 7. APPROACH TO INDUSTRY 4.0 ============ */}
      <section className="py-16 md:py-20 bg-[hsl(var(--navy-900))] text-white">
        <div className="container-cii">
          <div className="max-w-3xl">
            <div className="section-eyebrow mb-2 text-white/70">Approach to Industry 4.0</div>
            <h2 className="font-display font-bold text-[26px] md:text-[34px] leading-tight tracking-tight">
              Engineering the solution to match real-world complexity
            </h2>
            <p className="mt-3 text-white/80">{cs.approach}</p>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {x.complexity.map((c) => (
              <div key={c.label} className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur">
                <div className="font-numeric font-bold text-3xl md:text-4xl text-white">{c.value}</div>
                <div className="mt-1 text-sm text-white/70">{c.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-7">
              <div className="text-[11px] font-bold uppercase tracking-wider text-white/60">Traditional Planning</div>
              <div className="mt-2 font-display font-semibold text-xl">Manual, spreadsheet-driven, reactive</div>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[hsl(var(--red-400))] shrink-0" /> Slow decision cycles</li>
                <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[hsl(var(--red-400))] shrink-0" /> Limited scenario analysis</li>
                <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[hsl(var(--red-400))] shrink-0" /> Tribal knowledge dependence</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-[hsl(var(--india-green)/0.18)] to-white/5 border border-[hsl(var(--india-green)/0.35)] p-7">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[hsl(var(--india-green))]">Industry 4.0 Approach</div>
              <div className="mt-2 font-display font-semibold text-xl">Data-driven, optimised, repeatable</div>
              <ul className="mt-4 space-y-2 text-sm text-white/85">
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-[hsl(var(--india-green))] shrink-0 mt-0.5" /> Real-time visibility & insights</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-[hsl(var(--india-green))] shrink-0 mt-0.5" /> Scenario simulation & optimisation</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-[hsl(var(--india-green))] shrink-0 mt-0.5" /> Standardised, scalable playbooks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 8. IMPLEMENTATION JOURNEY ============ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-cii">
          <SectionHead
            eyebrow="Implementation Journey"
            title="From ideation to value realisation"
            intro="A structured six-phase journey designed to de-risk the transformation."
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

      {/* ============ 9. TEAM & GOVERNANCE ============ */}
      <section className="py-16 md:py-20 bg-[hsl(var(--neutral-50))]">
        <div className="container-cii">
          <SectionHead
            eyebrow="Team & Governance"
            title="The project team that delivered the outcomes"
            intro="A balanced team of domain, technical and change resources working as one delivery unit."
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {x.team.map((t) => (
              <div
                key={t.role}
                className="rounded-2xl border border-[hsl(var(--neutral-150))] bg-white p-5 flex items-start gap-4"
              >
                <div className="h-10 w-10 rounded-full bg-[hsl(var(--navy-050))] text-[hsl(var(--navy-800))] grid place-items-center shrink-0">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display font-semibold text-[hsl(var(--navy-900))]">{t.role}</div>
                  <div className="text-sm text-[hsl(var(--neutral-700))]">{t.scope}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 10. CHANGE MANAGEMENT ============ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-cii">
          <SectionHead
            eyebrow="Driving Adoption"
            title="The change management journey"
            intro="Technology alone doesn't transform a plant — adoption does. Here's how the team made it stick."
          />
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="rounded-2xl border border-[hsl(var(--red-100))] bg-white p-7">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[hsl(var(--red-600))]">Challenge</div>
              <div className="mt-2 font-display font-semibold text-[hsl(var(--navy-900))]">
                {x.changeManagement.challenge}
              </div>
            </div>
            <div className="rounded-2xl border border-[hsl(var(--neutral-150))] bg-[hsl(var(--neutral-50))] p-7">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[hsl(var(--navy-700))]">Actions Taken</div>
              <ul className="mt-3 space-y-2">
                {x.changeManagement.actions.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-sm text-[hsl(var(--navy-900))]">
                    <CheckCircle2 className="h-4 w-4 text-[hsl(var(--navy-700))] shrink-0 mt-0.5" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[hsl(var(--india-green)/0.25)] bg-[hsl(var(--india-green)/0.05)] p-7">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[hsl(var(--india-green))]">Outcome</div>
              <div className="mt-2 font-display font-semibold text-[hsl(var(--navy-900))]">
                {x.changeManagement.outcome}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 11. SOLUTION ARCHITECTURE ============ */}
      <section className="py-16 md:py-20 bg-[hsl(var(--neutral-50))]">
        <div className="container-cii">
          <SectionHead
            eyebrow="Industry 4.0 Solution Architecture"
            title="The architecture that powered the transformation"
            intro="An end-to-end stack spanning capture, data, insight and action — layered for scale and reliability."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {x.architecture.map((a) => (
              <div
                key={a.name}
                className="rounded-2xl border border-[hsl(var(--neutral-150))] bg-white p-6 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-xl bg-[hsl(var(--navy-050))] text-[hsl(var(--navy-800))] grid place-items-center">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--neutral-700))] bg-[hsl(var(--neutral-50))] border border-[hsl(var(--neutral-150))] rounded-full px-2 py-0.5">
                    {a.layer}
                  </span>
                </div>
                <div className="mt-4 font-display font-bold text-[hsl(var(--navy-900))]">{a.name}</div>
                <div className="mt-1 text-sm text-[hsl(var(--neutral-700))]">{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 12. SOLUTION HIGHLIGHTS ============ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-cii">
          <SectionHead
            eyebrow="Solution Highlights"
            title="Capabilities that drove the value"
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {x.solutionFeatures.map((f, i) => {
              const icons = [Gauge, Workflow, Activity, ShieldCheck, BarChartFallback, GitBranch, Settings, Sparkles];
              const Icon = icons[i % icons.length];
              return (
                <div
                  key={f.title}
                  className="rounded-2xl border border-[hsl(var(--neutral-150))] bg-white p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div className="h-10 w-10 rounded-xl bg-[hsl(var(--india-green)/0.10)] text-[hsl(var(--india-green))] grid place-items-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-4 font-display font-semibold text-[hsl(var(--navy-900))]">{f.title}</div>
                  <div className="mt-1 text-sm text-[hsl(var(--neutral-700))]">{f.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 13. IMPLEMENTATION CHALLENGES ============ */}
      <section className="py-16 md:py-20 bg-[hsl(var(--neutral-50))]">
        <div className="container-cii">
          <SectionHead
            eyebrow="Challenges During Implementation"
            title="What got in the way — and how it was solved"
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {x.implementationChallenges.map((c) => (
              <div
                key={c.challenge}
                className="rounded-2xl border border-[hsl(var(--neutral-150))] bg-white p-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--red-600))]">Challenge</div>
                    <div className="mt-1 font-display font-semibold text-sm text-[hsl(var(--navy-900))]">
                      {c.challenge}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--navy-700))]">Mitigation</div>
                    <div className="mt-1 text-sm text-[hsl(var(--neutral-700))]">{c.mitigation}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--india-green))]">Outcome</div>
                    <div className="mt-1 text-sm text-[hsl(var(--navy-900))] font-semibold">{c.outcome}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 14. BENEFITS & BUSINESS OUTCOMES ============ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-cii">
          <SectionHead
            eyebrow="Results Achieved"
            title="Outcomes across operations, business and people"
          />
          <div className="mt-10">
            <Tabs defaultValue="operational" className="w-full">
              <TabsList className="bg-[hsl(var(--neutral-50))] border border-[hsl(var(--neutral-150))]">
                <TabsTrigger value="operational">Operational</TabsTrigger>
                <TabsTrigger value="business">Business</TabsTrigger>
                <TabsTrigger value="user">User</TabsTrigger>
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
              <TabsContent value="user" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {x.outcomes.user.map((u) => (
                    <div
                      key={u}
                      className="rounded-2xl border border-[hsl(var(--neutral-150))] bg-white p-5"
                    >
                      <CheckCircle2 className="h-5 w-5 text-[hsl(var(--india-green))]" />
                      <div className="mt-3 font-display font-semibold text-[hsl(var(--navy-900))]">{u}</div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* ============ 15. DOWNLOADS & RESOURCES ============ */}
      <section className="py-16 md:py-20 bg-[hsl(var(--neutral-50))]">
        <div className="container-cii">
          <SectionHead
            eyebrow="Downloads & Resources"
            title="Go deeper with related resources"
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
      </section>

      {/* ============ 16. RELATED CASE STUDIES ============ */}
      <section id="related" className="py-16 md:py-20 bg-white">
        <div className="container-cii">
          <SectionHead
            eyebrow="Related Transformations"
            title="Similar manufacturing transformation stories"
          />
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
                <div className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[hsl(var(--navy-700))]">
                  View <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 17. NEXT STEPS ============ */}
      <section className="py-16 md:py-20 bg-[hsl(var(--neutral-50))]">
        <div className="container-cii">
          <SectionHead
            eyebrow="Next Steps"
            title="Ready to explore similar opportunities?"
            intro="Choose your path forward — from self-diagnosis to expert conversation."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <NextStep to="/readiness-assessment" icon={Compass} title="Readiness Assessment" desc="Benchmark your current readiness." />
            <NextStep to="/reports" icon={Lightbulb} title="Explore Solutions" desc="Reports, playbooks & frameworks." />
            <NextStep to="/programmes" icon={GraduationCap} title="Programmes & Training" desc="Build capability in your teams." />
            <NextStep to="/contact" icon={MessageCircle} title="Speak with an Expert" desc="Get advisory guidance." />
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

// alias for tree-shake safety
const BarChartFallback = BookOpen;

export default CaseStudyDetail;
