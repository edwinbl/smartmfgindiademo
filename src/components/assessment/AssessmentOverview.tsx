import { WireSection } from "@/components/wireframe/WireSection";
import { Clock, Layers, FileBarChart2, ArrowRight, CheckCircle2, Compass } from "lucide-react";

export const AssessmentOverview = () => (
  <WireSection
    id="overview"
    alt
    eyebrow="Assessment Overview"
    title="A guided, outcome-driven readiness diagnostic"
  >
    <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] items-start">
      <div className="space-y-7">
        <p className="text-base md:text-lg text-[hsl(var(--neutral-700))] max-w-2xl">
          The CII Smart Manufacturing Readiness Assessment evaluates your
          organisation across operational, digital, workforce and supply-chain
          dimensions — and translates results into prioritised next steps your
          leadership can act on.
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {[
            {
              icon: Clock,
              h: "Duration",
              b: "Approximately 30–45 minutes, guided question-by-question with help text and examples.",
            },
            {
              icon: Layers,
              h: "Readiness Dimensions",
              b: "Operations, planning, quality, data, machine connectivity, workforce, sustainability and supply chain.",
            },
            {
              icon: Compass,
              h: "Assessment Process",
              b: "Self-guided inputs reviewed by CII experts; insights returned with sector context.",
            },
            {
              icon: FileBarChart2,
              h: "Expected Outputs",
              b: "Readiness scores, outcome-linked insights, priority areas and a recommended next-step plan.",
            },
          ].map(({ icon: Icon, h, b }) => (
            <div key={h} className="cii-card p-5">
              <div
                className="h-9 w-9 rounded-md grid place-items-center mb-3"
                style={{ background: "hsl(var(--orange-100))", color: "hsl(var(--orange-600))" }}
              >
                <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />
              </div>
              <div className="font-display font-bold text-sm text-navy-800 mb-1">{h}</div>
              <p className="text-sm text-[hsl(var(--neutral-700))]">{b}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky summary */}
      <aside className="lg:sticky lg:top-24">
        <div className="cii-card p-6 bg-white">
          <div className="section-eyebrow mb-2">At a glance</div>
          <h3 className="font-display font-bold text-xl text-navy-800 mb-5">
            Current Readiness Assessment
          </h3>

          <ul className="space-y-3 mb-5">
            {[
              "Estimated time: 30–45 minutes",
              "Covers 8 readiness dimensions",
              "Outcome-linked insights",
              "Guided, step-by-step process",
              "Confidential — used only for your report",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-sm text-[hsl(var(--neutral-700))]">
                <CheckCircle2 className="h-4 w-4 text-[hsl(var(--india-green))] shrink-0 mt-0.5" />
                <span>{t}</span>
              </li>
            ))}
          </ul>

          {/* Mini report preview */}
          <div
            className="rounded-md p-4 mb-5 border"
            style={{ background: "hsl(var(--navy-050))", borderColor: "hsl(var(--navy-100))" }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] uppercase tracking-wide font-bold text-[hsl(var(--navy-700))]">
                Report preview
              </span>
              <span className="cii-chip-orange cii-chip text-[10px]">Sample</span>
            </div>
            {[
              { l: "Operations", v: 72 },
              { l: "Quality", v: 64 },
              { l: "Data & Visibility", v: 48 },
              { l: "Workforce", v: 58 },
            ].map((d) => (
              <div key={d.l} className="mb-2 last:mb-0">
                <div className="flex justify-between text-[11px] mb-1 text-[hsl(var(--neutral-700))]">
                  <span>{d.l}</span>
                  <span className="font-numeric font-semibold">{d.v}</span>
                </div>
                <div className="h-1.5 rounded-full bg-white overflow-hidden border border-[hsl(var(--navy-100))]">
                  <div
                    className="h-full"
                    style={{
                      width: `${d.v}%`,
                      background:
                        "linear-gradient(90deg, hsl(var(--india-green)), hsl(var(--navy-600)))",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://www.smartmfgindia.com/Assesment.aspx"
            className="btn-primary w-full"
          >
            Access Current Assessment <ArrowRight className="!h-4 !w-4" />
          </a>
        </div>
      </aside>
    </div>
  </WireSection>
);
