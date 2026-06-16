import { Link } from "react-router-dom";
import { WireSection } from "./WireSection";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Gauge,
  PieChart,
  Rocket,
  Sparkles,
  Layers,
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

        {/* Assessment Transformation Timeline — dark hero card */}
        <div className="relative">
          <div
            className="cii-card relative overflow-hidden p-5 sm:p-8 text-white shadow-xl"
            style={{
              background:
                "linear-gradient(140deg, hsl(var(--navy-800)) 0%, hsl(var(--navy-700)) 55%, #1a2d5a 100%)",
              borderColor: "hsl(var(--navy-700))",
            }}
          >
            {/* glow accents */}
            <div
              className="pointer-events-none absolute -top-24 -right-20 h-64 w-64 rounded-full blur-3xl"
              style={{ background: "hsl(var(--orange-500) / 0.28)" }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full blur-3xl"
              style={{ background: "hsl(var(--orange-500) / 0.12)" }}
              aria-hidden
            />
            {/* faint grid */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
              aria-hidden
            />

            <div className="relative flex items-center justify-between gap-3 flex-wrap">
              <div className="min-w-0">
                <div className="eyebrow text-[hsl(var(--orange-300,28_95%_70%))] text-white/60">
                  How the assessment works
                </div>
                <div className="font-display font-bold text-white text-sm sm:text-base mt-1 leading-snug">
                  From a structured self-check to an action roadmap
                  <br />
                  <span className="text-white/60 font-medium text-xs sm:text-sm">
                    A 4-step transformation journey, completed at your pace
                  </span>
                </div>
              </div>
              <span
                className="shrink-0 inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold"
                style={{
                  background: "hsl(var(--orange-500))",
                  color: "white",
                }}
              >
                ~30 mins
              </span>
            </div>

            {/* Rigour strip */}
            <div className="relative mt-5 grid grid-cols-3 gap-2">
              {[
                { k: "5", v: "Functional areas" },
                { k: "49", v: "Key elements" },
                { k: "10", v: "Marks per element" },
              ].map((s) => (
                <div
                  key={s.v}
                  className="rounded-md border border-white/10 bg-white/[0.06] backdrop-blur-sm px-2.5 py-2.5 text-center"
                >
                  <div className="font-display font-bold text-white text-base sm:text-lg leading-none">
                    {s.k}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-white/60 mt-1 leading-tight">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline */}
            <div className="relative mt-6 sm:mt-7">
              <div
                className="absolute left-[15px] sm:left-[17px] top-3 bottom-3 w-px"
                style={{
                  background:
                    "linear-gradient(to bottom, hsl(var(--orange-500) / 0.7), hsl(var(--orange-500) / 0.2))",
                }}
                aria-hidden
              />

              <div className="space-y-3">
                {[
                  { n: 1, name: "Assess", desc: "Answer guided questions across 5 functional areas", Icon: ClipboardList },
                  { n: 2, name: "Measure", desc: "Each element scored on depth × scale (out of 10)", Icon: Gauge },
                  { n: 3, name: "Result", desc: "Radar, scores out of 100 and peer benchmark", Icon: PieChart },
                  { n: 4, name: "Roll out", desc: "Prioritised action roadmap to your next stage", Icon: Rocket },
                ].map((s) => (
                  <div key={s.n} className="relative flex items-stretch gap-3 sm:gap-4">
                    <span
                      className="relative z-10 flex h-[30px] w-[30px] sm:h-[34px] sm:w-[34px] shrink-0 items-center justify-center rounded-full text-[11px] sm:text-xs font-bold shadow-md ring-4"
                      style={{
                        background: "hsl(var(--orange-500))",
                        color: "white",
                        // @ts-ignore
                        ["--tw-ring-color" as string]: "hsl(var(--navy-800))",
                      }}
                    >
                      {s.n}
                    </span>

                    <div className="flex-1 flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.06] backdrop-blur-sm px-3 py-2.5 sm:px-3.5 sm:py-3">
                      <div className="min-w-0 flex-1">
                        <div className="text-[13px] sm:text-sm font-bold text-white leading-tight">
                          {s.name}
                        </div>
                        <div className="text-[11px] sm:text-xs text-white/65 leading-snug">
                          {s.desc}
                        </div>
                      </div>
                      <span
                        className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-md bg-white/10 text-white"
                      >
                        <s.Icon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Maturity scale */}
            <div className="relative mt-5 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2.5">
              <div className="flex items-center gap-2 text-[11px] sm:text-[12px] text-white/80">
                <Layers className="h-3.5 w-3.5 text-[hsl(var(--orange-500))] shrink-0" />
                <span className="font-semibold text-white">Maturity scale:</span>
                <span className="text-white/60">Industry 1.0 → 2.0 → 3.0 → 4.0</span>
              </div>
            </div>

            <div className="relative mt-5 rounded-lg border border-white/10 bg-white/[0.07] backdrop-blur-sm px-4 py-3 flex items-center gap-3">
              <span
                -hidden items-center justify-center rounded-full"
                style={{ background: "hsl(var(--orange-500) / 0.15)" }}
              >
                <Sparkles className="h-5 w-5 text-[hsl(var(--orange-400))]" />
              </span>
              <p className="text-sm sm:text-base font-semibold text-white leading-snug">
                You may be closer than you think.
              </p>
            </div>

            <div className="relative mt-4 pt-4 border-t border-white/10 flex items-center justify-between gap-3 flex-wrap">
              <span className="text-[11px] sm:text-xs text-white/55">
                Confidential · Built on the CII Smart Manufacturing model
              </span>
              <Link
                to="/readiness-assessment"
                className="inline-flex items-center gap-1.5 text-[12px] sm:text-[13px] font-semibold text-[hsl(var(--orange-500))] hover:text-white transition-colors"
              >
                Take assessment <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
          <div className="absolute -z-10 -top-6 -right-6 w-40 h-40 rounded-full bg-cii-orange/20 blur-2xl" />
        </div>


      </div>
    </WireSection>
  );
};

