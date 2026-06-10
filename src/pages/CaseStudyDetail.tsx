import { useMemo, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import {
  ChevronRight,
  Download,
  Calendar,
  User,
  Bookmark,
  Share2,
  Check,
  Factory,
  Building2,
  MapPin,
  Clock,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  Users,
  Workflow,
  Cpu,
  Gauge,
  AlertTriangle,
  Quote,
  Wrench,
  Rocket,
  HeartHandshake,
  CircuitBoard,
  ShieldCheck,
  Briefcase,
} from "lucide-react";

import { WireHeader } from "@/components/wireframe/WireHeader";
import { WireFooter } from "@/components/wireframe/WireFooter";
import { WireChatbotFAB } from "@/components/wireframe/WireChatbotFAB";
import { SEO } from "@/components/SEO";
import {
  findCaseStudy,
  type CaseStudy,
} from "@/data/caseStudies";
import { toast } from "@/hooks/use-toast";

/* ---------------- Fallback synthesis ---------------- */
const synth = (cs: CaseStudy) => {
  const categoryTags =
    cs.categoryTags ?? [cs.sector, cs.companyType, ...cs.valueProps.slice(0, 2)];
  const executiveSummary = cs.executiveSummary ?? cs.summary;
  const manufacturer = cs.manufacturer ?? {
    industry: `${cs.sector} — manufacturing`,
    footprint: `${cs.companySize} based in ${cs.state}`,
    highlights: [cs.companySize, cs.companyType, cs.state],
  };
  const approachCards =
    cs.approachCards ?? cs.approachSteps.map((s) => ({ title: s.title, desc: s.desc }));
  const timeline =
    cs.timeline ?? [
      { phase: "01", title: "Discovery & Diagnostic", desc: "Baseline assessment and goal setting." },
      { phase: "02", title: "Pilot Deployment", desc: "First proof-of-value on critical lines." },
      { phase: "03", title: "Validation", desc: "Operational integration and refinement." },
      { phase: "04", title: "Scale-up", desc: "Roll out across the plant footprint." },
      { phase: "05", title: "Value Realisation", desc: "Sustained adoption and continuous improvement." },
    ];
  const workforce = cs.workforceTransformation ?? {
    before: "Teams locked in repetitive, manual operations with limited visibility.",
    after: [
      "Higher-value problem solving",
      "Quality and inspection ownership",
      "Cross-skilling for new technology",
      "Data-driven daily routines",
    ],
  };
  const outcomes = cs.outcomes ?? {
    operational: cs.kpis.slice(0, Math.ceil(cs.kpis.length / 2)),
    business: cs.kpis.slice(Math.ceil(cs.kpis.length / 2)),
    user: ["Better Visibility", "Faster Decisions", "Stronger Collaboration"],
  };
  const testimonial = cs.testimonial ?? {
    quote:
      "The Industry 4.0 journey gave us visibility we never had before — and the confidence to scale what works.",
    name: "Plant Leadership",
    role: "Executive Sponsor",
    company: cs.company,
  };
  const replicationInsights = cs.replicationInsights ?? [
    "Start small and prove value before scaling",
    "Focus on repeatable, high-frequency processes",
    "Co-design with operators, not for them",
    "Anchor daily routines in live data",
    "Plan for change as much as for technology",
  ];
  const resources = cs.resources ?? [
    { title: "Full Case Study PDF", type: "PDF" },
    { title: "Implementation Framework", type: "Framework" },
    { title: "Related Industry Report", type: "Report" },
    { title: "Best Practice Guide", type: "Guide" },
  ];
  return {
    categoryTags,
    executiveSummary,
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
  invert = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  invert?: boolean;
}) => (
  <div className="max-w-3xl">
    <div className={`section-eyebrow mb-2 ${invert ? "text-white/70" : ""}`}>{eyebrow}</div>
    <h2
      className={`font-display font-bold text-[22px] md:text-[28px] leading-tight tracking-tight ${
        invert ? "text-white" : "text-[hsl(var(--navy-900))]"
      }`}
    >
      {title}
    </h2>
    {intro && (
      <p
        className={`mt-2 text-sm md:text-base ${
          invert ? "text-white/80" : "text-[hsl(var(--neutral-700))]"
        }`}
      >
        {intro}
      </p>
    )}
  </div>
);

/* ---------------- Sidebar (mirrors ReportSummaryPanel) ---------------- */
const CaseSummaryPanel = ({
  cs,
  onDownload,
}: {
  cs: CaseStudy;
  onDownload: () => void;
}) => {
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast({ title: "Link copied" });
      setTimeout(() => setCopied(false), 1800);
    } catch {
      toast({ title: "Unable to copy link" });
    }
  };

  return (
    <aside className="lg:sticky lg:top-[88px] self-start">
      <div className="cii-card overflow-hidden">
        <div className="relative h-56 bg-gradient-to-br from-[hsl(var(--navy-800))] to-[hsl(var(--navy-600))] text-white p-6 flex flex-col justify-between">
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/15 backdrop-blur w-fit">
            Case Study
          </span>
          <div>
            <div className="font-numeric text-4xl font-extrabold leading-none">
              {cs.metric.value}
            </div>
            <div className="text-[11px] uppercase tracking-[0.14em] font-bold opacity-90 mt-1.5">
              {cs.metric.label}
            </div>
          </div>
          <div
            className="absolute inset-0 opacity-[0.15] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
            aria-hidden
          />
        </div>

        <div className="p-5 space-y-3">
          <button type="button" onClick={onDownload} className="btn-primary w-full">
            <Download className="h-4 w-4" />
            Download Case Study
          </button>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => {
                setSaved((s) => !s);
                toast({ title: !saved ? "Saved" : "Removed" });
              }}
              className="h-10 inline-flex items-center justify-center gap-2 text-xs font-semibold rounded-sm border bg-white text-[hsl(var(--navy-800))] hover:bg-[hsl(var(--neutral-50))] transition-colors"
              style={{ borderColor: "hsl(var(--neutral-200))" }}
            >
              <Bookmark className="h-3.5 w-3.5" fill={saved ? "currentColor" : "none"} />
              {saved ? "Saved" : "Save"}
            </button>
            <button
              type="button"
              onClick={handleShare}
              className="h-10 inline-flex items-center justify-center gap-2 text-xs font-semibold rounded-sm border bg-white text-[hsl(var(--navy-800))] hover:bg-[hsl(var(--neutral-50))] transition-colors"
              style={{ borderColor: "hsl(var(--neutral-200))" }}
            >
              {copied ? <Check className="h-3.5 w-3.5 text-[hsl(var(--india-green))]" /> : <Share2 className="h-3.5 w-3.5" />}
              {copied ? "Copied" : "Share"}
            </button>
          </div>
        </div>

        <div
          className="px-5 pb-5 pt-2 space-y-3 text-sm border-t"
          style={{ borderColor: "hsl(var(--neutral-150))" }}
        >
          <Meta label="Company" value={cs.company} />
          <Meta label="Sector" value={cs.sector} />
          <Meta label="Size" value={cs.companySize} />
          <Meta label="Region" value={cs.state} />
          <Meta label="Duration" value={`${cs.durationMonths} months`} />
        </div>

        <div className="px-5 pb-6">
          <div className="text-[10px] uppercase tracking-[0.14em] font-bold text-[hsl(var(--neutral-500))] mb-2">
            Focus Areas
          </div>
          <div className="flex flex-wrap gap-1.5">
            {cs.valueProps.map((t) => (
              <span key={t} className="cii-chip">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

const Meta = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center justify-between">
    <span className="text-[hsl(var(--neutral-500))]">{label}</span>
    <span className="font-semibold text-[hsl(var(--navy-900))] text-right">{value}</span>
  </div>
);

/* ---------------- Page ---------------- */
const CaseStudyDetail = () => {
  const { slug = "" } = useParams();
  const cs = findCaseStudy(slug);

  if (!cs) return <Navigate to="/case-studies" replace />;

  const x = useMemo(() => synth(cs), [cs]);

  const handleDownload = () => {
    toast({ title: "Download started", description: cs.headline });
  };

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <SEO
        title={`${cs.company} — ${cs.headline} | Case Study`}
        description={cs.summary}
        url={`/case-studies/${cs.slug}`}
        type="article"
      />
      <WireHeader />

      <main>
        {/* ============ HERO (mirrors ReportDetailHero) ============ */}
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
            <nav
              className="text-xs text-white/70 flex items-center gap-1.5 mb-5 flex-wrap"
              aria-label="Breadcrumb"
            >
              <Link to="/" className="hover:text-white">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <Link to="/case-studies" className="hover:text-white">Case Studies</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-white/90 truncate max-w-[60vw]">{cs.company}</span>
            </nav>

            <div className="max-w-3xl space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                {x.categoryTags.slice(0, 3).map((t, i) => (
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
              <p className="text-sm sm:text-base md:text-lg text-white/85">
                {x.executiveSummary}
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/80 pt-1">
                <span className="inline-flex items-center gap-2">
                  <Factory className="h-4 w-4 text-white/60" /> {cs.sector}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-white/60" /> {cs.companySize}
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-white/60" /> {cs.state}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-white/60" /> {cs.durationMonths} months
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ============ Sidebar + Main (mirrors reports layout) ============ */}
        <section className="py-12 md:py-16">
          <div className="container-cii grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <CaseSummaryPanel cs={cs} onDownload={handleDownload} />
            </div>

            <div className="lg:col-span-8 space-y-14">
              {/* About the Manufacturer */}
              <div>
                <SectionHead
                  eyebrow="About the Manufacturer"
                  title={cs.company}
                  intro={`${x.manufacturer.industry}. ${x.manufacturer.footprint}.`}
                />
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {x.manufacturer.highlights.map((h) => (
                    <div
                      key={h}
                      className="rounded-xl bg-[hsl(var(--neutral-50))] border border-[hsl(var(--neutral-150))] p-3 text-sm font-semibold text-[hsl(var(--navy-900))]"
                    >
                      {h}
                    </div>
                  ))}
                </div>
              </div>

              {/* Existing Challenges */}
              <div>
                <SectionHead
                  eyebrow="Existing Challenges"
                  title="The business challenge"
                  intro={cs.challenge}
                />
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cs.challengePoints.map((p, i) => (
                    <div
                      key={p}
                      className="rounded-2xl border border-[hsl(var(--red-100))] bg-white p-5 hover:shadow-md transition-all"
                    >
                      <div className="h-9 w-9 rounded-xl bg-[hsl(var(--red-100))] text-[hsl(var(--red-600))] grid place-items-center">
                        <AlertTriangle className="h-4 w-4" />
                      </div>
                      <div className="mt-3 text-[11px] font-bold uppercase tracking-wider text-[hsl(var(--red-600))]">
                        Challenge {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="mt-1 font-display font-semibold text-[hsl(var(--navy-900))]">
                        {p}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Approach */}
              <div className="rounded-3xl bg-[hsl(var(--navy-900))] text-white p-7 md:p-9">
                <SectionHead
                  eyebrow="Approach to Industry 4.0"
                  title="How Industry 4.0 was approached"
                  intro={cs.approach}
                  invert
                />
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {x.approachCards.map((c, i) => {
                    const icons = [Workflow, Rocket, Users, Sparkles, Wrench, Gauge];
                    const Icon = icons[i % icons.length];
                    return (
                      <div
                        key={c.title}
                        className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur"
                      >
                        <div className="h-9 w-9 rounded-xl bg-white/10 grid place-items-center">
                          <Icon className="h-4 w-4 text-white" />
                        </div>
                        <div className="mt-3 font-display font-semibold">{c.title}</div>
                        <div className="mt-1 text-sm text-white/80">{c.desc}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* About the Solution */}
              <div>
                <SectionHead
                  eyebrow="About the Industry 4.0 Solution"
                  title="What solution was deployed"
                  intro="An end-to-end Industry 4.0 capability stack, designed for the manufacturer's reality."
                />
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cs.capabilities.map((c, i) => {
                    const icons = [Cpu, Gauge, Workflow, ShieldCheck, Briefcase, Sparkles];
                    const Icon = icons[i % icons.length];
                    return (
                      <div
                        key={c}
                        className="rounded-2xl border border-[hsl(var(--neutral-150))] bg-white p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
                      >
                        <div className="h-9 w-9 rounded-xl bg-[hsl(var(--india-green)/0.10)] text-[hsl(var(--india-green))] grid place-items-center">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="mt-3 font-display font-semibold text-[hsl(var(--navy-900))]">
                          {c}
                        </div>
                        <div className="mt-1 text-sm text-[hsl(var(--neutral-700))]">
                          Capability deployed as part of the Industry 4.0 solution stack.
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Implementation Journey */}
              <div>
                <SectionHead
                  eyebrow="Implementation Journey"
                  title="From adoption to scale"
                  intro="A phased journey designed to de-risk the transformation and build momentum."
                />
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {x.timeline.map((t) => (
                    <div
                      key={t.title}
                      className="rounded-2xl border border-[hsl(var(--neutral-150))] bg-white p-5 hover:shadow-md transition-all"
                    >
                      <div className="font-numeric font-bold text-2xl text-[hsl(var(--navy-700))]/60">
                        {t.phase}
                      </div>
                      <div className="mt-1 font-display font-bold text-base text-[hsl(var(--navy-900))]">
                        {t.title}
                      </div>
                      <div className="mt-1 text-sm text-[hsl(var(--neutral-700))]">{t.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Workforce */}
              <div>
                <SectionHead
                  eyebrow="Human Impact"
                  title="People & workforce transformation"
                  intro="Technology only sticks when people thrive with it. Here's how teams evolved."
                />
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-[hsl(var(--red-100))] bg-white p-6">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[hsl(var(--red-600))]">
                      Before
                    </div>
                    <div className="mt-2 font-display font-semibold text-[hsl(var(--navy-900))]">
                      {x.workforce.before}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-[hsl(var(--india-green)/0.25)] bg-[hsl(var(--india-green)/0.05)] p-6">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[hsl(var(--india-green))]">
                      After
                    </div>
                    <ul className="mt-2 space-y-2">
                      {x.workforce.after.map((a) => (
                        <li
                          key={a}
                          className="flex items-start gap-2 text-sm text-[hsl(var(--navy-900))] font-medium"
                        >
                          <CheckCircle2 className="h-4 w-4 text-[hsl(var(--india-green))] shrink-0 mt-0.5" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>


              {/* Testimonial */}
              <div className="rounded-3xl border border-[hsl(var(--neutral-150))] bg-[hsl(var(--neutral-50))] p-7 md:p-8">
                <Quote className="h-7 w-7 text-[hsl(var(--orange-500))]" />
                <blockquote className="mt-3 font-display text-lg md:text-xl leading-snug text-[hsl(var(--navy-900))]">
                  “{x.testimonial.quote}”
                </blockquote>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full bg-[hsl(var(--navy-800))] text-white grid place-items-center font-bold">
                    {x.testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-[hsl(var(--navy-900))]">
                      {x.testimonial.name}
                    </div>
                    <div className="text-sm text-[hsl(var(--neutral-700))]">
                      {x.testimonial.role} · {x.testimonial.company}
                    </div>
                  </div>
                </div>
              </div>

              {/* Replication Insights */}
              <div>
                <SectionHead
                  eyebrow="Replication Insights"
                  title="What manufacturers can learn"
                  intro="Lessons that other manufacturers can apply to their own Industry 4.0 journey."
                />
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {x.replicationInsights.map((r, i) => (
                    <div
                      key={r}
                      className="rounded-2xl border border-[hsl(var(--orange-500)/0.25)] bg-white p-5 hover:shadow-md transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-[hsl(var(--orange-500)/0.12)] text-[hsl(var(--orange-600))] grid place-items-center font-numeric font-bold text-sm">
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <Lightbulb className="h-4 w-4 text-[hsl(var(--orange-500))]" />
                      </div>
                      <div className="mt-2 font-display font-semibold text-[hsl(var(--navy-900))]">
                        {r}
                      </div>
                    </div>
                  ))}
                </div>
              </div>


            </div>
          </div>
        </section>
      </main>

      <WireFooter />
      <WireChatbotFAB />
    </div>
  );
};

export default CaseStudyDetail;
