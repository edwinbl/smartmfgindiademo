import { useMemo } from "react";
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
  Wrench,
  BarChart3,
  CheckCircle2,
  Compass,
  GraduationCap,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import { WireHeader } from "@/components/wireframe/WireHeader";
import { WireFooter } from "@/components/wireframe/WireFooter";
import { WireChatbotFAB } from "@/components/wireframe/WireChatbotFAB";
import { SEO } from "@/components/SEO";
import { findCaseStudy, relatedCaseStudies, type KPI } from "@/data/caseStudies";

const KpiCard = ({ kpi }: { kpi: KPI }) => {
  const Icon = kpi.direction === "down" ? TrendingDown : TrendingUp;
  const isImprove = true; // both up and down here represent improvement
  const tone = isImprove
    ? "text-[hsl(var(--india-green))] bg-[hsl(var(--india-green)/0.08)]"
    : "text-[hsl(var(--navy-700))] bg-[hsl(var(--navy-050))]";
  return (
    <div className="rounded-2xl border border-[hsl(var(--neutral-150))] bg-white p-5 hover:shadow-md transition-all">
      <div className={`h-10 w-10 rounded-xl grid place-items-center ${tone}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="mt-4 font-display font-bold text-3xl md:text-4xl text-[hsl(var(--navy-900))] font-numeric">{kpi.value}</div>
      <div className="mt-1 text-sm text-[hsl(var(--neutral-700))]">{kpi.label}</div>
    </div>
  );
};

const CaseStudyDetail = () => {
  const { slug = "" } = useParams();
  const cs = findCaseStudy(slug);
  const related = useMemo(() => relatedCaseStudies(slug, 4), [slug]);

  if (!cs) return <Navigate to="/case-studies" replace />;

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${cs.company} — ${cs.headline} | Case Study`}
        description={cs.summary}
        url={`/case-studies/${cs.slug}`}
      />
      <WireHeader />

      {/* HERO */}
      <section className="relative bg-[hsl(var(--neutral-50))] border-b border-[hsl(var(--neutral-150))]">
        <div className="container-cii py-10 md:py-16">
          <Link to="/case-studies" className="inline-flex items-center gap-1.5 text-sm text-[hsl(var(--navy-700))] hover:text-[hsl(var(--red-600))] font-semibold">
            <ArrowLeft className="h-4 w-4" /> Back to Case Studies
          </Link>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
            {/* Left */}
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="cii-chip"><Factory className="h-3 w-3" /> {cs.sector}</span>
                <span className="cii-chip"><MapPin className="h-3 w-3" /> {cs.state}</span>
                <span className="cii-chip-orange cii-chip"><Building2 className="h-3 w-3" /> {cs.companyType}</span>
              </div>
              <div className="mt-5 text-sm font-semibold uppercase tracking-wider text-[hsl(var(--neutral-500))]">{cs.company}</div>
              <h1 className="mt-2 font-display font-bold text-[32px] md:text-[44px] leading-[1.1] tracking-tight text-[hsl(var(--navy-900))]">
                {cs.headline}
              </h1>
              <p className="mt-5 text-base md:text-lg text-[hsl(var(--neutral-700))] max-w-2xl">{cs.summary}</p>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
                <Meta icon={Factory} label="Sector" value={cs.sector} />
                <Meta icon={Building2} label="Size" value={cs.companySize} />
                <Meta icon={MapPin} label="State" value={cs.state} />
                <Meta icon={Clock} label="Duration" value={`${cs.durationMonths} months`} />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <button className="btn-primary" type="button"><Download className="h-4 w-4" /> Download PDF</button>
                <a href="#related" className="btn-outline"><Layers className="h-4 w-4" /> Explore Similar</a>
                <Link to="/contact" className="btn-secondary"><MessageCircle className="h-4 w-4" /> Talk to an Expert</Link>
              </div>
            </div>

            {/* Right — dashboard mock */}
            <div className="relative rounded-3xl bg-gradient-to-br from-[hsl(var(--navy-800))] to-[hsl(var(--navy-900))] p-6 md:p-8 text-white overflow-hidden shadow-xl">
              <div className="absolute inset-0 blueprint-grid opacity-40" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-white/70">Outcome Snapshot</span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[hsl(var(--india-green)/0.25)] text-white">
                    <Sparkles className="h-3 w-3" /> Improved
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {cs.kpis.slice(0, 4).map((k) => (
                    <div key={k.label} className="rounded-xl bg-white/10 backdrop-blur p-4 border border-white/10">
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
                        <span><span className="opacity-60 line-through mr-2">{b.before}</span><span className="text-white font-semibold">{b.after}</span></span>
                      </div>
                      <div className="mt-1 h-1.5 rounded-full bg-white/15 overflow-hidden">
                        <div className="h-full w-[78%] bg-gradient-to-r from-[hsl(var(--india-green))] to-[hsl(var(--orange-500))]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORYTELLING — Challenge / Approach / Impact */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-cii">
          <div className="section-eyebrow mb-2">The Story</div>
          <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-tight tracking-tight text-[hsl(var(--navy-900))] max-w-2xl">
            Challenge → Approach → Impact
          </h2>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Challenge */}
            <div className="rounded-2xl border border-[hsl(var(--neutral-150))] p-7 bg-[hsl(var(--neutral-50))]">
              <div className="h-10 w-10 rounded-xl bg-[hsl(var(--red-100))] text-[hsl(var(--red-600))] grid place-items-center">
                <Target className="h-5 w-5" />
              </div>
              <div className="mt-4 text-xs font-bold uppercase tracking-wider text-[hsl(var(--red-600))]">Challenge</div>
              <h3 className="mt-1 font-display font-bold text-xl text-[hsl(var(--navy-900))]">Operational pain points</h3>
              <p className="mt-3 text-sm text-[hsl(var(--neutral-700))]">{cs.challenge}</p>
              <ul className="mt-5 space-y-2.5">
                {cs.challengePoints.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-[hsl(var(--neutral-700))]">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[hsl(var(--red-600))] shrink-0" /> {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Approach */}
            <div className="rounded-2xl border border-[hsl(var(--neutral-150))] p-7 bg-white">
              <div className="h-10 w-10 rounded-xl bg-[hsl(var(--navy-050))] text-[hsl(var(--navy-700))] grid place-items-center">
                <Wrench className="h-5 w-5" />
              </div>
              <div className="mt-4 text-xs font-bold uppercase tracking-wider text-[hsl(var(--navy-700))]">Approach</div>
              <h3 className="mt-1 font-display font-bold text-xl text-[hsl(var(--navy-900))]">What was implemented</h3>
              <p className="mt-3 text-sm text-[hsl(var(--neutral-700))]">{cs.approach}</p>
              <ol className="mt-5 space-y-4">
                {cs.approachSteps.map((s, i) => (
                  <li key={s.title} className="flex gap-3">
                    <div className="h-7 w-7 shrink-0 rounded-full bg-[hsl(var(--navy-800))] text-white grid place-items-center text-xs font-bold font-numeric">{i + 1}</div>
                    <div>
                      <div className="font-display font-semibold text-sm text-[hsl(var(--navy-900))]">{s.title}</div>
                      <div className="text-xs text-[hsl(var(--neutral-700))]">{s.desc}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Impact */}
            <div className="rounded-2xl border border-[hsl(var(--india-green)/0.25)] p-7 bg-[hsl(var(--india-green)/0.05)]">
              <div className="h-10 w-10 rounded-xl bg-[hsl(var(--india-green)/0.15)] text-[hsl(var(--india-green))] grid place-items-center">
                <BarChart3 className="h-5 w-5" />
              </div>
              <div className="mt-4 text-xs font-bold uppercase tracking-wider text-[hsl(var(--india-green))]">Impact</div>
              <h3 className="mt-1 font-display font-bold text-xl text-[hsl(var(--navy-900))]">Measurable improvements</h3>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {cs.kpis.map((k) => (
                  <div key={k.label} className="rounded-xl bg-white border border-[hsl(var(--neutral-150))] p-3">
                    <div className="font-numeric font-bold text-xl text-[hsl(var(--navy-900))]">{k.value}</div>
                    <div className="text-[11px] text-[hsl(var(--neutral-500))] leading-tight">{k.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KPI HERO STRIP */}
      <section className="py-16 md:py-20 bg-[hsl(var(--neutral-50))]">
        <div className="container-cii">
          <div className="section-eyebrow mb-2">By the Numbers</div>
          <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-tight tracking-tight text-[hsl(var(--navy-900))] max-w-2xl">
            Business impact at a glance
          </h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {cs.kpis.map((k) => <KpiCard key={k.label} kpi={k} />)}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-cii">
          <div className="section-eyebrow mb-2">Value Proposition</div>
          <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-tight tracking-tight text-[hsl(var(--navy-900))] max-w-2xl">
            Before vs After
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {cs.beforeAfter.map((b) => (
              <div key={b.label} className="rounded-2xl border border-[hsl(var(--neutral-150))] bg-white overflow-hidden">
                <div className="px-5 py-3 border-b border-[hsl(var(--neutral-150))] bg-[hsl(var(--neutral-50))]">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--neutral-500))]">{b.label}</div>
                </div>
                <div className="grid grid-cols-2 divide-x divide-[hsl(var(--neutral-150))]">
                  <div className="p-5">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--neutral-500))]">Before</div>
                    <div className="mt-1 font-numeric font-bold text-xl text-[hsl(var(--neutral-700))]">{b.before}</div>
                  </div>
                  <div className="p-5 bg-[hsl(var(--india-green)/0.05)]">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--india-green))]">After</div>
                    <div className="mt-1 font-numeric font-bold text-xl text-[hsl(var(--navy-900))]">{b.after}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES (Technology / Enablement non-technical) */}
      <section className="py-16 md:py-20 bg-[hsl(var(--neutral-50))]">
        <div className="container-cii">
          <div className="section-eyebrow mb-2">Capabilities Enabled</div>
          <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-tight tracking-tight text-[hsl(var(--navy-900))] max-w-2xl">
            What this transformation made possible
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cs.capabilities.map((cap) => (
              <div key={cap} className="rounded-2xl bg-white border border-[hsl(var(--neutral-150))] p-5 hover:shadow-md transition-all">
                <CheckCircle2 className="h-5 w-5 text-[hsl(var(--india-green))]" />
                <div className="mt-3 font-display font-semibold text-[hsl(var(--navy-900))]">{cap}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section id="related" className="py-16 md:py-20 bg-white">
        <div className="container-cii">
          <div className="section-eyebrow mb-2">Related</div>
          <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-tight tracking-tight text-[hsl(var(--navy-900))]">
            Similar transformation stories
          </h2>
          <div className="mt-8 flex gap-5 overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0 snap-x scrollbar-none pb-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                to={`/case-studies/${r.slug}`}
                className="snap-start shrink-0 w-[85%] sm:w-[360px] rounded-2xl border border-[hsl(var(--neutral-150))] bg-white p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-center gap-2 text-xs text-[hsl(var(--neutral-500))]">
                  <Factory className="h-3 w-3" /> {r.sector} · <MapPin className="h-3 w-3" /> {r.state}
                </div>
                <div className="mt-2 text-xs font-bold uppercase tracking-wider text-[hsl(var(--neutral-500))]">{r.company}</div>
                <h3 className="mt-1 font-display font-bold text-base text-[hsl(var(--navy-900))] leading-snug">{r.headline}</h3>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[hsl(var(--navy-700))]">
                  View <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEXT STEPS */}
      <section className="py-16 md:py-20 bg-[hsl(var(--neutral-50))]">
        <div className="container-cii">
          <div className="section-eyebrow mb-2">Take the Next Step</div>
          <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-tight tracking-tight text-[hsl(var(--navy-900))] max-w-2xl">
            Turn inspiration into your roadmap
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <NextStep to="/readiness-assessment" icon={Compass} title="Readiness Assessment" desc="Benchmark your current readiness." />
            <NextStep to="/reports" icon={Lightbulb} title="Discover Solutions" desc="Explore reports & playbooks." />
            <NextStep to="/programmes" icon={GraduationCap} title="Programmes & Training" desc="Build capability in your teams." />
            <NextStep to="/contact" icon={MessageCircle} title="Talk to Experts" desc="Get guided assistance." />
          </div>
        </div>
      </section>

      {/* Sticky bottom CTA — mobile */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-[hsl(var(--neutral-150))] p-3 shadow-2xl">
        <Link to="/contact" className="btn-secondary w-full">Talk to an Expert <ArrowRight className="h-4 w-4" /></Link>
      </div>

      <WireFooter />
      <WireChatbotFAB />
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

const NextStep = ({ to, icon: Icon, title, desc }: { to: string; icon: any; title: string; desc: string }) => (
  <Link to={to} className="group rounded-2xl bg-white border border-[hsl(var(--neutral-150))] p-6 hover:shadow-md hover:-translate-y-0.5 transition-all">
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

export default CaseStudyDetail;
