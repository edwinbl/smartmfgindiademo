import { WireSection } from "./WireSection";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const WireAssessmentTeaser = () => {
  return (
    <WireSection id="assessment" alt>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] items-center">
        <div>
          <div className="section-eyebrow mb-3">Section 04 — Maturity Assessments</div>
          <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-tight tracking-tight text-navy-800">
            Start with maturity.<br />Then decide what to adopt.
          </h2>
          <p className="mt-5 text-base md:text-lg text-[hsl(var(--neutral-700))] max-w-xl">
            Access current smart manufacturing and Industry 4.0 maturity assessment models to
            understand where your organisation stands before deciding what to adopt.
          </p>

          <div className="mt-6 space-y-3">
            {[
              { name: "Smart Manufacturing Maturity Assessment Model", tag: "Available" },
              { name: "Industry 4.0 Maturity Assessment", tag: "Available" },
            ].map((m) => (
              <div key={m.name} className="flex items-center justify-between gap-3 p-4 rounded-md border border-[hsl(var(--neutral-150))] bg-white">
                <div className="flex items-center gap-3 min-w-0">
                  <CheckCircle2 className="h-4 w-4 text-[hsl(var(--india-green))] shrink-0" />
                  <span className="text-sm font-semibold text-navy-800 truncate">{m.name}</span>
                </div>
                <span className="cii-chip">{m.tag}</span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-[hsl(var(--neutral-500))] italic max-w-xl">
            Over time, readiness pathways can also be linked to business outcomes such as exports,
            quality improvement, traceability, productivity, energy efficiency and value-chain participation.
          </p>

          <div className="mt-7">
            <a href="#" className="btn-primary">
              Access Maturity Assessments <ArrowRight className="!h-4 !w-4" />
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
