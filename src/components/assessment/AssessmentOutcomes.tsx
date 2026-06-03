import { WireSection } from "@/components/wireframe/WireSection";
import { TrendingUp, ShieldCheck, ScanLine, Leaf, Globe2, Network } from "lucide-react";

const outcomes = [
  { icon: TrendingUp, title: "Productivity", body: "Throughput, OEE and asset utilisation across lines and shifts." },
  { icon: ShieldCheck, title: "Quality", body: "First-pass yield, defect reduction and consistent process control." },
  { icon: ScanLine, title: "Traceability", body: "Lot, batch and serialised tracking across production and dispatch." },
  { icon: Leaf, title: "Energy Efficiency", body: "Energy intensity, monitoring and emissions baselining." },
  { icon: Globe2, title: "Export Readiness", body: "Compliance, traceability and quality systems for global markets." },
  { icon: Network, title: "Value Chain Participation", body: "Supplier integration, data sharing and tier-N visibility." },
];

export const AssessmentOutcomes = () => (
  <WireSection
    id="outcomes"
    eyebrow="Outcome-Based Readiness"
    title="Readiness, mapped to the outcomes that matter"
    intro="Each dimension of the assessment links back to a business outcome — so results speak the language of the boardroom, not just the shop floor."
  >
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {outcomes.map(({ icon: Icon, title, body }) => (
        <div key={title} className="cii-card p-6 group">
          <div className="flex items-start gap-4">
            <div
              className="h-11 w-11 rounded-md grid place-items-center shrink-0"
              style={{ background: "hsl(var(--india-green) / 0.1)", color: "hsl(var(--india-green))" }}
            >
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <div className="flex-1">
              <h3 className="font-display font-bold text-base text-navy-800 mb-1.5">{title}</h3>
              <p className="text-sm text-[hsl(var(--neutral-700))] leading-relaxed">{body}</p>
              <p className="mt-3 text-[11px] uppercase tracking-wide font-semibold text-[hsl(var(--neutral-500))]">
                Assessment helps evaluate readiness for this outcome
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </WireSection>
);
