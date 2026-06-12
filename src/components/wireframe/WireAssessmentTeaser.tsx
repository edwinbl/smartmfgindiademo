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

        {/* MSME Digital Maturity Ladder */}
        <div className="relative">
          <div className="cii-card p-5 sm:p-8 bg-white relative overflow-hidden">
            {/* subtle diagonal gradient backdrop suggesting upward motion */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                background:
                  "linear-gradient(135deg, hsl(var(--navy-800)) 0%, transparent 45%, hsl(var(--orange-500)) 100%)",
              }}
              aria-hidden
            />

            <div className="relative flex items-center justify-between gap-3 flex-wrap">
              <div className="min-w-0">
                <div className="eyebrow text-[hsl(var(--neutral-500))]">
                  MSME Digital Maturity Ladder
                </div>
                <div className="font-display font-bold text-navy-800 text-sm sm:text-base mt-1 leading-snug">
                  From Manual to Smart &amp; Adaptive
                  <br />
                  <span className="text-[hsl(var(--neutral-500))] font-medium text-xs sm:text-sm">
                    A 5-stage journey for Indian manufacturers
                  </span>
                </div>
              </div>
              <span className="cii-chip cii-chip-orange shrink-0">5 Stages</span>
            </div>

            {/* Ladder rungs — rendered bottom→top via flex-col-reverse */}
            <div className="relative mt-6 sm:mt-7 flex flex-col-reverse gap-2.5">
              {[
                {
                  n: 1,
                  name: "Manual",
                  desc: "Paper-based, isolated processes",
                  Icon: Factory,
                },
                {
                  n: 2,
                  name: "Digitised",
                  desc: "Basic digital tools & records",
                  Icon: Tablet,
                  highlight: true,
                },
                {
                  n: 3,
                  name: "Connected",
                  desc: "Machines & systems linked",
                  Icon: Network,
                  highlight: true,
                },
                {
                  n: 4,
                  name: "Data-driven",
                  desc: "Insights guide decisions",
                  Icon: BarChart3,
                },
                {
                  n: 5,
                  name: "Smart & Adaptive",
                  desc: "AI-led, self-optimising",
                  Icon: Cpu,
                },
              ].map((s, i) => {
                // ascending indent: 0, 6, 12, 18, 24% on sm+; halved on mobile
                const indentSm = i * 6;
                const indentXs = i * 3;
                return (
                  <div
                    key={s.n}
                    className="relative"
                    style={{
                      marginLeft: `${indentXs}%`,
                    }}
                  >
                    <div
                      className="sm:!ml-[var(--indent-sm)]"
                      style={
                        {
                          ["--indent-sm" as string]: `${indentSm - indentXs}%`,
                        } as React.CSSProperties
                      }
                    >
                      <div
                        className={[
                          "flex items-center gap-3 rounded-lg border px-3 py-2.5 sm:px-3.5 sm:py-3 transition-colors",
                          s.highlight
                            ? "bg-[hsl(var(--orange-100)/0.55)] border-[hsl(var(--orange-500)/0.45)] ring-1 ring-[hsl(var(--orange-500)/0.25)]"
                            : "bg-white border-[hsl(var(--neutral-150))]",
                        ].join(" ")}
                      >
                        <span
                          className={[
                            "flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-md text-[11px] sm:text-xs font-bold",
                            s.highlight
                              ? "bg-[hsl(var(--orange-500))] text-white"
                              : "bg-[hsl(var(--navy-050))] text-[hsl(var(--navy-700))]",
                          ].join(" ")}
                        >
                          {s.n}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="text-[13px] sm:text-sm font-bold text-navy-800 leading-tight">
                            {s.name}
                          </div>
                          <div className="text-[11px] sm:text-xs text-[hsl(var(--neutral-500))] leading-snug truncate">
                            {s.desc}
                          </div>
                        </div>
                        <span
                          className={[
                            "flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-md",
                            s.highlight
                              ? "bg-white text-[hsl(var(--orange-600))]"
                              : "bg-[hsl(var(--neutral-100))] text-[hsl(var(--navy-700))]",
                          ].join(" ")}
                        >
                          <s.Icon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Encouraging line tied to highlighted middle band */}
            <div className="relative mt-4 flex items-center gap-2 text-[12px] sm:text-[13px] italic text-[hsl(var(--navy-700))]">
              <Sparkles className="h-3.5 w-3.5 text-[hsl(var(--orange-500))] shrink-0" />
              You may be closer than you think.
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
        </div>

      </div>
    </WireSection>
  );
};
