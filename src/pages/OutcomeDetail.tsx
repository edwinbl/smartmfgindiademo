import { useMemo, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import {
  ArrowRight,
  ChevronRight,
  MessageCircle,
  Layers,
  FileText,
  Briefcase,
  Building2,
  Download,
  ClipboardCheck,
  GraduationCap,
  Sparkles,
  AlertTriangle,
  Wrench,
  TrendingUp,
} from "lucide-react";
import { WireHeader } from "@/components/wireframe/WireHeader";
import { WireFooter } from "@/components/wireframe/WireFooter";
import { WireChatbotFAB } from "@/components/wireframe/WireChatbotFAB";
import { SEO } from "@/components/SEO";
import { outcomes, type OutcomeId } from "@/data/solutions";
import {
  outcomeDetails,
  featuredCasesForOutcome,
  featuredReportsForOutcome,
} from "@/data/outcomeDetails";

type TabId = "all" | "cases" | "reports" | "directory";

type AssetCard = {
  key: string;
  type: "Case Study" | "Report" | "E-Directory";
  title: string;
  summary: string;
  tag?: string;
  href: string;
  ctaLabel: string;
  ctaIcon: typeof ArrowRight;
};

const tabs: { id: TabId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "cases", label: "Case Studies" },
  { id: "reports", label: "Reports & Publications" },
  { id: "directory", label: "E-Directory" },
];

const typeStyle: Record<AssetCard["type"], { bg: string; fg: string; Icon: typeof FileText }> = {
  "Case Study": { bg: "hsl(var(--navy-050))", fg: "hsl(var(--navy-700))", Icon: Briefcase },
  Report: { bg: "hsl(var(--orange-100))", fg: "hsl(var(--orange-600))", Icon: FileText },
  "E-Directory": { bg: "hsl(var(--india-green) / 0.10)", fg: "hsl(var(--india-green))", Icon: Building2 },
};

const OutcomeDetail = () => {
  const { outcomeId } = useParams<{ outcomeId: string }>();
  const id = outcomeId as OutcomeId | undefined;
  const outcome = id ? outcomes.find((o) => o.id === id) : undefined;
  const meta = id ? outcomeDetails[id] : undefined;

  const [tab, setTab] = useState<TabId>("all");

  const assets = useMemo<AssetCard[]>(() => {
    if (!id || !meta) return [];
    const caseCards: AssetCard[] = featuredCasesForOutcome(id, 4).map((c) => ({
      key: `c-${c.slug}`,
      type: "Case Study",
      title: c.headline,
      summary: c.summary,
      tag: c.sector,
      href: `/case-studies/${c.slug}`,
      ctaLabel: "Read case study",
      ctaIcon: ArrowRight,
    }));
    const reportCards: AssetCard[] = featuredReportsForOutcome(id, 4).map((r) => ({
      key: `r-${r.slug}`,
      type: "Report",
      title: r.title,
      summary: r.summary,
      tag: r.industry,
      href: `/reports/${r.slug}`,
      ctaLabel: r.gated ? "Download" : "View report",
      ctaIcon: Download,
    }));
    // The Knowledge Hub ships exactly two real e-Directories (India + Singapore).
    // Both are broad ecosystem compendiums relevant to every outcome — surface
    // them as-is rather than inventing per-outcome entries.
    const dirCards: AssetCard[] = [
      {
        key: "d-india",
        type: "E-Directory",
        title: "India's Industry 4.0 e-Directory",
        summary:
          "300+ Indian organisations across 10+ technology domains — providers, consultants and manufacturers driving smart manufacturing adoption.",
        tag: "India · 2025 Edition",
        href: "/directories/india",
        ctaLabel: "Browse directory",
        ctaIcon: ArrowRight,
      },
      {
        key: "d-singapore",
        type: "E-Directory",
        title: "Singapore's Industry 4.0 e-Directory",
        summary:
          "200+ Singapore-based organisations — automation specialists and digital transformation enablers for cross-border collaboration.",
        tag: "Singapore · International Edition",
        href: "/directories/singapore",
        ctaLabel: "Browse directory",
        ctaIcon: ArrowRight,
      },
    ];
    return [caseCards[0], reportCards[0], caseCards[1], dirCards[0], reportCards[1], caseCards[2], reportCards[2], dirCards[1], caseCards[3], reportCards[3]]
      .filter(Boolean) as AssetCard[];
  }, [id, meta]);

  const filtered = useMemo(() => {
    if (tab === "all") return assets;
    if (tab === "cases") return assets.filter((a) => a.type === "Case Study");
    if (tab === "reports") return assets.filter((a) => a.type === "Report");
    return assets.filter((a) => a.type === "E-Directory");
  }, [assets, tab]);

  if (!outcome || !meta) return <Navigate to="/solutions" replace />;

  const counts = {
    all: assets.length,
    cases: assets.filter((a) => a.type === "Case Study").length,
    reports: assets.filter((a) => a.type === "Report").length,
    directory: assets.filter((a) => a.type === "E-Directory").length,
  };

  const Icon = outcome.icon;

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <SEO
        title={`${outcome.title} — Knowledge Hub`}
        description={meta.oneLiner}
      />
      <WireHeader />
      <main>
        {/* COMPACT HERO */}
        <section
          className="relative overflow-hidden bg-background border-b"
          style={{ borderColor: "hsl(var(--neutral-150))" }}
        >
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(800px 360px at 85% 0%, hsl(var(--orange-500) / 0.10), transparent 60%), radial-gradient(600px 360px at 0% 100%, hsl(var(--navy-600) / 0.10), transparent 55%)",
            }}
            aria-hidden
          />
          <div className="container-cii py-8 lg:py-12">
            <nav className="flex items-center gap-1.5 text-xs text-[hsl(var(--neutral-500))] mb-5" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-[hsl(var(--red-600))]">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <Link to="/solutions" className="hover:text-[hsl(var(--red-600))]">Knowledge Hub</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-[hsl(var(--neutral-700))]">{outcome.title}</span>
            </nav>

            <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
              <div className="flex items-start gap-4 flex-1">
                <div
                  className="h-12 w-12 rounded-2xl grid place-items-center flex-shrink-0"
                  style={{ background: "hsl(var(--navy-050))", color: "hsl(var(--navy-700))" }}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <span className="cii-chip"><Sparkles className="h-3.5 w-3.5" /> Knowledge Hub Outcome</span>
                  <h1 className="font-display mt-3 text-3xl md:text-[40px] font-extrabold leading-[1.1] tracking-tight text-[hsl(var(--navy-900))]">
                    {outcome.title}
                  </h1>
                  <p className="mt-2 text-base md:text-lg text-[hsl(var(--neutral-700))] max-w-2xl">
                    {meta.oneLiner}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 lg:flex-col lg:items-end">
                <a
                  href="#assets"
                  className="inline-flex items-center gap-2 h-11 px-5 rounded-full text-sm font-bold text-white shadow-sm hover:-translate-y-0.5 transition-transform"
                  style={{ background: "linear-gradient(135deg, hsl(var(--red-600)), hsl(var(--orange-500)))" }}
                >
                  Browse related assets <ArrowRight className="h-4 w-4" />
                </a>
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new Event("open-assistant"))}
                  className="inline-flex items-center gap-2 h-11 px-5 rounded-full text-sm font-bold border bg-white hover:bg-[hsl(var(--neutral-50))]"
                  style={{ borderColor: "hsl(var(--neutral-200))", color: "hsl(var(--navy-900))" }}
                >
                  <MessageCircle className="h-4 w-4" /> Ask the Smart Manufacturing Assistant
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK CONTEXT STRIP */}
        <section className="py-8 bg-[hsl(var(--neutral-50))]">
          <div className="container-cii">
            <div className="grid sm:grid-cols-3 gap-3">
              <ContextCard
                icon={AlertTriangle}
                label="Common challenge"
                value={meta.context.challenge}
                tone={{ bg: "hsl(var(--red-100))", fg: "hsl(var(--red-600))" }}
              />
              <ContextCard
                icon={Wrench}
                label="Relevant approach"
                value={meta.context.approach}
                tone={{ bg: "hsl(var(--navy-050))", fg: "hsl(var(--navy-700))" }}
              />
              <ContextCard
                icon={TrendingUp}
                label="Business benefit"
                value={meta.context.benefit}
                tone={{ bg: "hsl(var(--india-green) / 0.10)", fg: "hsl(var(--india-green))" }}
              />
            </div>
          </div>
        </section>

        {/* FEATURED ASSETS WITH TABS */}
        <section id="assets" className="py-14 lg:py-20 bg-background">
          <div className="container-cii">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
              <div>
                <div className="section-eyebrow mb-2">Featured Assets</div>
                <h2 className="font-display text-2xl md:text-[32px] font-extrabold leading-tight tracking-tight text-[hsl(var(--navy-900))]">
                  Curated for {outcome.title.toLowerCase()}
                </h2>
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--neutral-500))]">
                {filtered.length} of {assets.length} items
              </div>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tabs.map((t) => {
                const active = t.id === tab;
                const count = counts[t.id];
                return (
                  <button
                    key={t.id}
                    onClick={() => setTab(t.id)}
                    className={`inline-flex items-center gap-2 h-9 px-4 rounded-full text-xs font-bold uppercase tracking-wider border transition-colors ${
                      active
                        ? "text-white border-transparent"
                        : "bg-white text-[hsl(var(--navy-900))] hover:bg-[hsl(var(--neutral-50))]"
                    }`}
                    style={
                      active
                        ? { background: "hsl(var(--red-600))", borderColor: "hsl(var(--red-600))" }
                        : { borderColor: "hsl(var(--neutral-200))" }
                    }
                  >
                    {t.label}
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${active ? "bg-white/20" : "bg-[hsl(var(--neutral-100))] text-[hsl(var(--neutral-700))]"}`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {filtered.length === 0 ? (
              <div className="cii-card p-10 text-center text-sm text-[hsl(var(--neutral-700))]">
                No items in this view yet. Try a different tab.
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.map((a) => {
                  const s = typeStyle[a.type];
                  const TIcon = s.Icon;
                  const CIcon = a.ctaIcon;
                  return (
                    <Link
                      key={a.key}
                      to={a.href}
                      className="group cii-card p-6 hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                          style={{ background: s.bg, color: s.fg }}
                        >
                          <TIcon className="h-3 w-3" />
                          {a.type}
                        </span>
                        {a.tag && (
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--neutral-500))] truncate max-w-[55%] text-right">
                            {a.tag}
                          </span>
                        )}
                      </div>
                      <div className="mt-4 font-display text-base font-bold text-[hsl(var(--navy-900))] leading-snug line-clamp-2">
                        {a.title}
                      </div>
                      <p className="mt-2 text-sm text-[hsl(var(--neutral-700))] leading-relaxed line-clamp-3 flex-1">
                        {a.summary}
                      </p>
                      <div className="mt-4 pt-4 border-t border-[hsl(var(--neutral-150))] inline-flex items-center gap-1 text-xs font-bold text-[hsl(var(--red-600))]">
                        {a.ctaLabel}
                        <CIcon className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* RELATED NEXT ACTIONS */}
        <section className="py-12 lg:py-16 bg-[hsl(var(--neutral-50))] border-t" style={{ borderColor: "hsl(var(--neutral-150))" }}>
          <div className="container-cii">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
              <div>
                <div className="section-eyebrow mb-2">Next Steps</div>
                <h2 className="font-display text-2xl md:text-[28px] font-extrabold leading-tight tracking-tight text-[hsl(var(--navy-900))]">
                  Where to go from here
                </h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <NextAction
                to="/readiness-assessment"
                icon={ClipboardCheck}
                title="Readiness Assessment"
                desc="Benchmark your maturity for this outcome."
              />
              <NextAction
                to="/programmes"
                icon={GraduationCap}
                title="Programmes & Training"
                desc="Build skills with related CII programmes."
              />
              <NextAction
                to="/contact"
                icon={Layers}
                title="Contact CII"
                desc="Talk to an advisor about your context."
              />
              <NextAction
                onClick={() => window.dispatchEvent(new Event("open-assistant"))}
                icon={MessageCircle}
                title="Ask Assistant"
                desc="Get an instant pointer to approved content."
              />
            </div>
          </div>
        </section>
      </main>
      <WireFooter />
      <WireChatbotFAB />
    </div>
  );
};

const ContextCard = ({
  icon: Icon,
  label,
  value,
  tone,
}: {
  icon: typeof AlertTriangle;
  label: string;
  value: string;
  tone: { bg: string; fg: string };
}) => (
  <div className="cii-card p-5 flex items-start gap-4">
    <div
      className="h-10 w-10 rounded-xl grid place-items-center flex-shrink-0"
      style={{ background: tone.bg, color: tone.fg }}
    >
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <div className="text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--neutral-500))]">
        {label}
      </div>
      <div className="mt-1 text-sm font-bold text-[hsl(var(--navy-900))] leading-snug">
        {value}
      </div>
    </div>
  </div>
);

const NextAction = ({
  to,
  onClick,
  icon: Icon,
  title,
  desc,
}: {
  to?: string;
  onClick?: () => void;
  icon: typeof ClipboardCheck;
  title: string;
  desc: string;
}) => {
  const inner = (
    <>
      <div
        className="h-10 w-10 rounded-xl grid place-items-center text-white"
        style={{ background: "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-600)))" }}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div className="mt-3 font-display text-base font-bold text-[hsl(var(--navy-900))]">
        {title}
      </div>
      <p className="mt-1 text-xs text-[hsl(var(--neutral-700))] leading-relaxed">{desc}</p>
      <div className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold text-[hsl(var(--red-600))]">
        Continue <ArrowRight className="h-3 w-3" />
      </div>
    </>
  );
  const cls = "group cii-card p-5 text-left hover:-translate-y-1 hover:shadow-lg transition-all";
  if (to) return <Link to={to} className={cls}>{inner}</Link>;
  return (
    <button type="button" onClick={onClick} className={cls}>
      {inner}
    </button>
  );
};

export default OutcomeDetail;
