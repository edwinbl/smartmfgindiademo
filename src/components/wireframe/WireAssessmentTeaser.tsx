import { Link } from "react-router-dom";
import { WireSection } from "./WireSection";
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  Tablet,
  Network,
  BarChart3,
  Cpu,
  Sparkles,
  TrendingUp,
  MapPin,
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

        {/* MSME Digital Maturity Ladder — bold ascending infographic */}
        <div className="relative">
          <div className="cii-card p-5 sm:p-7 bg-white relative overflow-hidden">
            {/* Ambient backdrop: navy → orange diagonal hint of upward motion */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(120% 80% at 100% 0%, hsl(var(--orange-500)/0.12) 0%, transparent 55%), radial-gradient(90% 70% at 0% 100%, hsl(var(--navy-800)/0.08) 0%, transparent 60%)",
              }}
              aria-hidden
            />

            {/* Header */}
            <div className="relative flex items-start justify-between gap-3 flex-wrap">
              <div className="min-w-0">
                <div className="eyebrow text-[hsl(var(--neutral-500))]">
                  MSME Digital Maturity Ladder
                </div>
                <div className="font-display font-bold text-navy-800 text-base sm:text-lg mt-1 leading-snug">
                  From Manual to Smart &amp; Adaptive
                </div>
                <div className="text-[hsl(var(--neutral-500))] font-medium text-xs sm:text-sm mt-0.5">
                  A 5-stage journey for Indian manufacturers
                </div>
              </div>
              <span className="cii-chip cii-chip-orange shrink-0 inline-flex items-center gap-1">
                <TrendingUp className="h-3 w-3" /> Climb the ladder
              </span>
            </div>

            {/* Ascending staircase */}
            <div className="relative mt-6 sm:mt-7">
              {/* Rising arrow trail behind steps */}
              <div
                className="pointer-events-none absolute inset-0 hidden sm:block"
                aria-hidden
              >
                <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  className="absolute inset-0 w-full h-full"
                >
                  <defs>
                    <linearGradient id="ladderTrail" x1="0" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(var(--navy-800))" stopOpacity="0.25" />
                      <stop offset="60%" stopColor="hsl(var(--orange-500))" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="hsl(var(--cii-red))" stopOpacity="0.85" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 4 96 L 96 4"
                    stroke="url(#ladderTrail)"
                    strokeWidth="0.6"
                    strokeDasharray="2 2"
                    fill="none"
                  />
                </svg>
              </div>

              <div className="relative flex flex-col-reverse gap-2.5">
                {[
                  {
                    n: 1,
                    name: "Manual",
                    desc: "Paper-based, isolated processes",
                    Icon: Factory,
                    impact: "Baseline",
                  },
                  {
                    n: 2,
                    name: "Digitised",
                    desc: "Basic digital tools & records",
                    Icon: Tablet,
                    impact: "+10–15% efficiency",
                    here: true,
                  },
                  {
                    n: 3,
                    name: "Connected",
                    desc: "Machines & systems linked",
                    Icon: Network,
                    impact: "Real-time visibility",
                  },
                  {
                    n: 4,
                    name: "Data-driven",
                    desc: "Insights guide decisions",
                    Icon: BarChart3,
                    impact: "Predictive quality",
                  },
                  {
                    n: 5,
                    name: "Smart & Adaptive",
                    desc: "AI-led, self-optimising",
                    Icon: Cpu,
                    impact: "Autonomous gains",
                  },
                ].map((s, i) => {
                  const indentSm = i * 7;
                  const indentXs = i * 3;
                  // Color intensity rises with stage
                  const tints = [
                    { bg: "bg-[hsl(var(--navy-050))]", num: "bg-[hsl(var(--navy-700))] text-white", bar: "from-[hsl(var(--navy-700))] to-[hsl(var(--navy-500))]" },
                    { bg: "bg-[hsl(var(--orange-100)/0.5)]", num: "bg-[hsl(var(--orange-500))] text-white", bar: "from-[hsl(var(--orange-500))] to-[hsl(var(--orange-400))]" },
                    { bg: "bg-[hsl(var(--orange-100)/0.7)]", num: "bg-[hsl(var(--orange-500))] text-white", bar: "from-[hsl(var(--orange-500))] to-[hsl(var(--orange-600))]" },
                    { bg: "bg-[hsl(var(--orange-100)/0.85)]", num: "bg-[hsl(var(--orange-600))] text-white", bar: "from-[hsl(var(--orange-600))] to-[hsl(var(--cii-red))]" },
                    { bg: "bg-gradient-to-r from-[hsl(var(--orange-600)/0.18)] to-[hsl(var(--cii-red)/0.22)]", num: "bg-gradient-to-br from-[hsl(var(--orange-500))] to-[hsl(var(--cii-red))] text-white", bar: "from-[hsl(var(--cii-red))] to-[hsl(var(--cii-red))]" },
                  ][i];
                  return (
                    <div
                      key={s.n}
                      className="relative"
                      style={{ marginLeft: `${indentXs}%` }}
                    >
                      <div
                        className="sm:!ml-[var(--indent-sm)]"
                        style={
                          {
                            ["--indent-sm" as string]: `${indentSm - indentXs}%`,
                          } as React.CSSProperties
                        }
                      >
                        <div className="relative">
                          {/* "You are here" pointer */}
                          {s.here && (
                            <div className="absolute -left-2 -top-3 sm:-left-3 sm:-top-3.5 z-10 inline-flex items-center gap-1 rounded-full bg-[hsl(var(--cii-red))] text-white text-[10px] sm:text-[11px] font-bold px-2 py-0.5 shadow-md">
                              <MapPin className="h-3 w-3" /> You are here
                            </div>
                          )}
                          {/* Step body */}
                          <div
                            className={[
                              "relative flex items-center gap-3 rounded-xl border px-3 py-3 sm:px-4 sm:py-3.5 overflow-hidden",
                              tints.bg,
                              s.here
                                ? "border-[hsl(var(--cii-red)/0.55)] ring-2 ring-[hsl(var(--cii-red)/0.25)] shadow-[0_8px_24px_-12px_hsl(var(--cii-red)/0.4)]"
                                : "border-[hsl(var(--neutral-150))]",
                            ].join(" ")}
                          >
                            {/* left gradient accent bar */}
                            <span
                              className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${tints.bar}`}
                              aria-hidden
                            />
                            <span
                              className={[
                                "flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg text-sm sm:text-base font-bold shadow-sm",
                                tints.num,
                              ].join(" ")}
                            >
                              {s.n}
                            </span>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2 flex-wrap">
                                <div className="text-[13px] sm:text-sm font-bold text-navy-800 leading-tight">
                                  {s.name}
                                </div>
                                <span className="hidden sm:inline-flex items-center text-[10px] font-semibold px-1.5 py-0.5 rounded bg-white/70 text-[hsl(var(--navy-700))] border border-[hsl(var(--neutral-150))]">
                                  {s.impact}
                                </span>
                              </div>
                              <div className="text-[11px] sm:text-xs text-[hsl(var(--neutral-500))] leading-snug truncate">
                                {s.desc}
                              </div>
                            </div>
                            <span
                              className={[
                                "flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg",
                                s.here
                                  ? "bg-white text-[hsl(var(--cii-red))]"
                                  : "bg-white/80 text-[hsl(var(--navy-700))]",
                              ].join(" ")}
                            >
                              <s.Icon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Encouraging line */}
            <div className="relative mt-5 flex items-center gap-2 text-[12px] sm:text-[13px] italic text-[hsl(var(--navy-700))]">
              <Sparkles className="h-3.5 w-3.5 text-[hsl(var(--orange-500))] shrink-0" />
              You may be closer than you think — every rung unlocks measurable gains.
            </div>

            <div className="relative mt-5 pt-4 border-t border-[hsl(var(--neutral-150))] flex items-center justify-between gap-3 flex-wrap">
              <span className="text-[11px] sm:text-xs text-[hsl(var(--neutral-500))]">
                Find your current stage and next priority.
              </span>
              <Link to="/readiness-assessment" className="link-arrow">
                Take assessment <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
          <div className="absolute -z-10 -top-6 -right-6 w-40 h-40 rounded-full bg-cii-orange/15 blur-2xl" />
          <div className="absolute -z-10 -bottom-8 -left-8 w-44 h-44 rounded-full bg-[hsl(var(--cii-red)/0.10)] blur-2xl" />
        </div>

      </div>
    </WireSection>
  );
};
