import { WireSection } from "./WireSection";
import { ArrowRight, CheckCircle2, Gauge, Globe2, ShieldCheck, TrendingUp, Zap, Network } from "lucide-react";

const outcomes = [
  { icon: Globe2, label: "Exports readiness" },
  { icon: ShieldCheck, label: "Quality improvement" },
  { icon: Network, label: "Traceability" },
  { icon: TrendingUp, label: "Productivity" },
  { icon: Zap, label: "Energy efficiency" },
  { icon: Gauge, label: "Value-chain participation" },
];

export const WireAssessmentTeaser = () => {
  return (
    <WireSection id="assessment" alt>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] items-center">
        <div>
          <div className="section-eyebrow mb-3">Section 04 — Readiness Assessment</div>
          <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-tight tracking-tight text-navy-800">
            Start with readiness.<br />Then decide what to do next.
          </h2>
          <p className="mt-5 text-base md:text-lg text-[hsl(var(--neutral-700))] max-w-xl">
            MSMEs can use the readiness assessment to understand where they stand before
            choosing solutions, programmes or support pathways.
          </p>

          <ul className="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-3">
            {outcomes.map((o) => (
              <li key={o.label} className="flex items-center gap-2.5 text-sm text-navy-800 font-medium">
                <CheckCircle2 className="h-4 w-4 text-[hsl(var(--india-green))] shrink-0" />
                {o.label}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <a href="#" className="btn-primary">
              Access Readiness Assessment <ArrowRight className="!h-4 !w-4" />
            </a>
          </div>
        </div>

        {/* Visual gauge card */}
        <div className="relative">
          <div className="cii-card p-8 bg-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="eyebrow text-[hsl(var(--neutral-500))]">Sample readiness snapshot</div>
                <div className="font-display font-bold text-navy-800 text-lg mt-1">MSME Pilot Co.</div>
              </div>
              <span className="cii-chip cii-chip-orange">Phase 2</span>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-5">
              {[
                { label: "Strategy & leadership", v: 72 },
                { label: "Operations & digitisation", v: 58 },
                { label: "People & skills", v: 64 },
                { label: "Technology stack", v: 41 },
              ].map((d) => (
                <div key={d.label}>
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs font-semibold text-[hsl(var(--neutral-700))]">{d.label}</span>
                    <span className="font-numeric font-bold text-navy-800 text-sm">{d.v}</span>
                  </div>
                  <div className="mt-2 h-1.5 rounded-full bg-[hsl(var(--neutral-150))] overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${d.v}%`,
                        background:
                          "linear-gradient(90deg, hsl(var(--navy-700)), hsl(var(--orange-500)))",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 pt-6 border-t border-[hsl(var(--neutral-150))] flex items-center justify-between">
              <div>
                <div className="text-xs text-[hsl(var(--neutral-500))]">Overall maturity</div>
                <div className="font-numeric font-extrabold text-navy-800 text-3xl">59<span className="text-lg text-[hsl(var(--neutral-500))]">/100</span></div>
              </div>
              <a href="#" className="link-arrow">View full report <ArrowRight className="h-3.5 w-3.5" /></a>
            </div>
          </div>
          <div className="absolute -z-10 -top-6 -right-6 w-40 h-40 rounded-full bg-cii-orange/15 blur-2xl" />
        </div>
      </div>
    </WireSection>
  );
};
