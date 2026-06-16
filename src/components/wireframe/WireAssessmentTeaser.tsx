import { Link } from "react-router-dom";
import { WireSection } from "./WireSection";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

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

        {/* Sample Maturity Snapshot — faux assessment result */}
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

            <div className="relative flex items-center justify-between gap-3 flex-wrap">
              <div className="min-w-0">
                <div className="eyebrow text-[hsl(var(--neutral-500))]">
                  Sample Maturity Snapshot
                </div>
                <div className="font-display font-bold text-navy-800 text-sm sm:text-base mt-1 leading-snug">
                  Your Smart Manufacturing scorecard
                  <br />
                  <span className="text-[hsl(var(--neutral-500))] font-medium text-xs sm:text-sm">
                    49 elements · 5 functional categories · scored out of 100
                  </span>
                </div>
              </div>
              <span className="cii-chip cii-chip-orange shrink-0">Preview</span>
            </div>

            {/* Score + Radar */}
            <div className="relative mt-6 grid grid-cols-[auto_1fr] gap-5 sm:gap-6 items-center">
              {/* Circular score gauge */}
              <div className="relative">
                <svg viewBox="0 0 120 120" className="w-[110px] h-[110px] sm:w-[128px] sm:h-[128px] -rotate-90">
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="hsl(var(--neutral-150))"
                    strokeWidth="10"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="hsl(var(--orange-500))"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={`${(68 / 100) * 314} 314`}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-display font-bold text-navy-800 text-2xl sm:text-3xl leading-none">
                    68
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[hsl(var(--neutral-500))] mt-1">
                    / 100
                  </span>
                </div>
              </div>

              {/* Radar of 5 categories */}
              <div className="relative">
                <svg viewBox="-110 -110 220 220" className="w-full max-w-[200px] mx-auto">
                  {/* concentric pentagons */}
                  {[0.25, 0.5, 0.75, 1].map((r) => {
                    const pts = Array.from({ length: 5 }, (_, i) => {
                      const a = (Math.PI * 2 * i) / 5 - Math.PI / 2;
                      return `${Math.cos(a) * 90 * r},${Math.sin(a) * 90 * r}`;
                    }).join(" ");
                    return (
                      <polygon
                        key={r}
                        points={pts}
                        fill="none"
                        stroke="hsl(var(--neutral-150))"
                        strokeWidth="1"
                      />
                    );
                  })}
                  {/* axes */}
                  {Array.from({ length: 5 }, (_, i) => {
                    const a = (Math.PI * 2 * i) / 5 - Math.PI / 2;
                    return (
                      <line
                        key={i}
                        x1="0"
                        y1="0"
                        x2={Math.cos(a) * 90}
                        y2={Math.sin(a) * 90}
                        stroke="hsl(var(--neutral-150))"
                        strokeWidth="1"
                      />
                    );
                  })}
                  {/* data polygon */}
                  {(() => {
                    const scores = [0.78, 0.62, 0.55, 0.72, 0.6];
                    const pts = scores
                      .map((s, i) => {
                        const a = (Math.PI * 2 * i) / 5 - Math.PI / 2;
                        return `${Math.cos(a) * 90 * s},${Math.sin(a) * 90 * s}`;
                      })
                      .join(" ");
                    return (
                      <>
                        <polygon
                          points={pts}
                          fill="hsl(var(--orange-500))"
                          fillOpacity="0.18"
                          stroke="hsl(var(--orange-500))"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                        {scores.map((s, i) => {
                          const a = (Math.PI * 2 * i) / 5 - Math.PI / 2;
                          return (
                            <circle
                              key={i}
                              cx={Math.cos(a) * 90 * s}
                              cy={Math.sin(a) * 90 * s}
                              r="3"
                              fill="hsl(var(--orange-500))"
                            />
                          );
                        })}
                      </>
                    );
                  })()}
                  {/* labels */}
                  {["Operations", "Supply Chain", "Tech", "People", "Strategy"].map(
                    (label, i) => {
                      const a = (Math.PI * 2 * i) / 5 - Math.PI / 2;
                      const x = Math.cos(a) * 108;
                      const y = Math.sin(a) * 108;
                      return (
                        <text
                          key={label}
                          x={x}
                          y={y}
                          textAnchor={Math.abs(Math.cos(a)) < 0.2 ? "middle" : Math.cos(a) > 0 ? "start" : "end"}
                          dominantBaseline="middle"
                          fontSize="9"
                          fontWeight="600"
                          fill="hsl(var(--navy-700))"
                        >
                          {label}
                        </text>
                      );
                    }
                  )}
                </svg>
              </div>
            </div>

            {/* Industry maturity band */}
            <div className="relative mt-5">
              <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[hsl(var(--neutral-500))] mb-1.5">
                <span>Industry 1.0</span>
                <span>2.0</span>
                <span>3.0</span>
                <span>4.0</span>
              </div>
              <div className="relative h-2.5 rounded-full bg-[hsl(var(--neutral-100))] overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{
                    width: "68%",
                    background:
                      "linear-gradient(90deg, hsl(var(--navy-700)) 0%, hsl(var(--orange-500)) 100%)",
                  }}
                />
                <div
                  className="absolute -top-1 h-4.5 w-0.5 bg-navy-800"
                  style={{ left: "68%", height: "18px" }}
                  aria-hidden
                />
              </div>
              <div className="mt-2 flex items-center gap-2 text-[11px] sm:text-xs text-[hsl(var(--navy-700))]">
                <Sparkles className="h-3.5 w-3.5 text-[hsl(var(--orange-500))] shrink-0" />
                <span>
                  You're at <span className="font-bold">Industry 3.2</span> — ahead of 54% of peers.
                </span>
              </div>
            </div>

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
