import { Link } from "react-router-dom";
import { WireSection } from "./WireSection";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Lightbulb,
  Users,
  TrendingUp,
  BarChart3,
  Award,
} from "lucide-react";

export const WireAssessmentTeaser = () => {
  return (
    <WireSection id="assessment" alt>
      <div className="grid gap-8 md:gap-12 lg:grid-cols-[1fr_1.05fr] items-center">
        <div>
          <div className="section-eyebrow mb-3">Maturity Assessments</div>
          <h2 className="font-display font-bold text-2xl sm:text-[28px] md:text-[36px] leading-tight tracking-tight text-navy-800">
            Assessment to Transformation
          </h2>
          <p className="mt-5 text-base md:text-lg text-[hsl(var(--neutral-700))] max-w-xl">
            Access current smart manufacturing and Industry 4.0 maturity assessment models to understand where your
            organisation stands before deciding what to adopt.
          </p>

          <div className="mt-6 space-y-3">
            {[
              { name: "Smart Manufacturing Maturity Assessment Model", tag: "Available" },
              { name: "Industry 4.0 Maturity Assessment", tag: "Available" },
            ].map((m) => (
              <div
                key={m.name}
                className="flex items-center justify-between gap-3 p-3 sm:p-4 rounded-md border border-[hsl(var(--neutral-150))] bg-white flex-wrap sm:flex-nowrap"
              >
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <CheckCircle2 className="h-4 w-4 text-[hsl(var(--india-green))] shrink-0" />
                  <span className="text-sm font-semibold text-navy-800 break-words">{m.name}</span>
                </div>
                <span className="cii-chip shrink-0">{m.tag}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-[hsl(var(--neutral-500))] italic max-w-xl">
            Over time, readiness pathways can also be linked to business outcomes such as exports, quality improvement,
            traceability, productivity, energy efficiency and value-chain participation.
          </p>

          <div className="mt-7">
            <Link to="/readiness-assessment" className="btn-primary">
              Access Maturity Assessments <ArrowRight className="!h-4 !w-4" />
            </Link>
          </div>
        </div>

        {/* What you get — prognosis card */}
        <div className="relative">
          <div className="cii-card p-5 sm:p-7 bg-white relative overflow-hidden">
            {/* subtle backdrop */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{
                background:
                  "radial-gradient(circle at 80% 0%, hsl(var(--orange-500)) 0%, transparent 55%), linear-gradient(180deg, hsl(var(--navy-800)) 0%, transparent 60%)",
              }}
              aria-hidden
            />

            {/* Header */}
            <div className="relative flex items-center justify-between gap-3 flex-wrap">
              <div className="min-w-0">
                <div className="eyebrow text-[hsl(var(--neutral-500))]">What you get</div>
                <div className="font-display font-bold text-navy-800 text-sm sm:text-base mt-1 leading-snug">
                  Your personalised readiness report
                  <br />
                  <span className="text-[hsl(var(--neutral-500))] font-medium text-xs sm:text-sm">
                    20 minutes · 49 elements · Instant insights
                  </span>
                </div>
              </div>
              <span className="cii-chip cii-chip-orange shrink-0">Free</span>
            </div>

            {/* Simple 3-step flow */}
            <div className="relative mt-6">
              <div className="flex items-stretch gap-2">
                {[
                  { icon: FileText, label: "Answer", desc: "49 guided questions" },
                  { icon: BarChart3, label: "Analyse", desc: "Real-time scoring" },
                  { icon: Lightbulb, label: "Act", desc: "Actionable roadmap" },
                ].map((step, idx, arr) => (
                  <div key={step.label} className="flex-1 flex items-center gap-2 min-w-0">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[hsl(var(--navy-050))] text-[hsl(var(--navy-700))]">
                          <step.icon className="h-3 w-3" />
                        </div>
                        <span className="text-xs font-bold text-navy-800">{step.label}</span>
                      </div>
                      <p className="text-[10px] sm:text-[11px] text-[hsl(var(--neutral-500))] mt-0.5 leading-snug">
                        {step.desc}
                      </p>
                    </div>
                    {idx < arr.length - 1 && (
                      <ArrowRight className="h-3 w-3 text-[hsl(var(--neutral-200))] shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 5 pillars */}
            <div className="relative mt-6">
              <div className="flex items-center gap-1.5 mb-2.5">
                <Award className="h-3.5 w-3.5 text-[hsl(var(--red-600))]" />
                <span className="text-xs font-bold text-navy-800 uppercase tracking-wider">
                  Evaluated across 5 pillars
                </span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {[
                  { label: "Operations", abbr: "Ops" },
                  { label: "Supply Chain", abbr: "SCM" },
                  { label: "Technology", abbr: "Tech" },
                  { label: "People", abbr: "People" },
                  { label: "Strategy", abbr: "Strat" },
                ].map((p) => (
                  <div
                    key={p.label}
                    className="flex flex-col items-center text-center p-2 rounded-md border border-[hsl(var(--neutral-150))] bg-[hsl(var(--neutral-50))]"
                    title={p.label}
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-[hsl(var(--india-green))] mb-1" />
                    <span className="text-[10px] sm:text-[11px] font-semibold text-navy-800 leading-tight">
                      {p.abbr}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Expert insight highlight */}
            <div className="relative mt-5 p-3 rounded-md border border-[hsl(var(--orange-100))] bg-[hsl(var(--orange-100))]/40">
              <div className="flex items-start gap-2.5">
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-white shrink-0 shadow-sm">
                  <Users className="h-3.5 w-3.5 text-[hsl(var(--orange-600))]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-navy-800 leading-snug">
                    Curated by CII industry experts
                  </p>
                  <p className="text-[11px] text-[hsl(var(--neutral-500))] leading-snug mt-0.5">
                    Benchmark against peers, identify capability gaps, and receive a tailored
                    improvement roadmap.
                  </p>
                </div>
              </div>
            </div>

            {/* Why it matters — business outcomes */}
            <div className="relative mt-5">
              <div className="flex items-center gap-1.5 mb-2">
                <TrendingUp className="h-3.5 w-3.5 text-[hsl(var(--navy-700))]" />
                <span className="text-xs font-bold text-navy-800 uppercase tracking-wider">
                  Why it matters
                </span>
              </div>
              <p className="text-[11px] text-[hsl(var(--neutral-500))] leading-snug mb-2.5">
                Maturity scores directly link to measurable business outcomes — so you invest where
                it counts.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Productivity", "Quality", "Traceability", "Energy", "Exports", "Value-chain"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold border"
                      style={{
                        background: "hsl(var(--navy-050))",
                        borderColor: "hsl(var(--navy-100))",
                        color: "hsl(var(--navy-700))",
                      }}
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Footer CTA */}
            <div className="relative mt-5 pt-4 border-t border-[hsl(var(--neutral-150))] flex items-center justify-between gap-3 flex-wrap">
              <span className="text-[11px] sm:text-xs text-[hsl(var(--neutral-500))]">
                Free · 20 minutes · Confidential
              </span>
              <Link to="/readiness-assessment" className="link-arrow">
                Start assessment <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
          <div className="absolute -z-10 -top-6 -right-6 w-40 h-40 rounded-full bg-cii-orange/15 blur-2xl" />
        </div>

      </div>
    </WireSection>
  );
};
