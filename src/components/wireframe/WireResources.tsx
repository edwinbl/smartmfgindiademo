import { WireSection } from "./WireSection";
import { FileText, ArrowRight, Download } from "lucide-react";

const resources = [
  {
    type: "Case Study",
    sector: "Auto components · Tier 2",
    title: "How an auto-component MSME cut downtime by 28%",
    summary: "Sensor-based monitoring and a simple OEE workflow brought visibility to a 60-machine shopfloor.",
    cta: "Read case study",
  },
  {
    type: "Report",
    sector: "Cross-sector",
    title: "MSME readiness for Industry 4.0 — 2026 outlook",
    summary: "Findings from CII's national readiness survey across 1,200 MSMEs in 11 industrial clusters.",
    cta: "Download report",
  },
  {
    type: "Playbook",
    sector: "Quality & Traceability",
    title: "A practical playbook for digital traceability",
    summary: "Step-by-step guidance for MSMEs starting their traceability journey, with vendor-neutral options.",
    cta: "Read playbook",
  },
];

export const WireResources = () => {
  return (
    <WireSection id="resources">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
        <div>
          <div className="section-eyebrow mb-3">Resources</div>
          <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-tight tracking-tight text-navy-800">
            Learn from practical examples and resources
          </h2>
          <p className="mt-4 text-base text-[hsl(var(--neutral-700))] max-w-2xl">
            Case studies, reports and playbooks supporting the broader Solutions journey.
          </p>
        </div>
        <a href="#" className="link-arrow">Explore all resources <ArrowRight className="h-3.5 w-3.5" /></a>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {resources.map((r) => (
          <article key={r.title} className="cii-card p-6 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <span className="cii-chip">{r.type}</span>
              <FileText className="h-4 w-4 text-[hsl(var(--neutral-400))]" />
            </div>
            <div className="text-[11px] uppercase tracking-[0.12em] font-bold text-[hsl(var(--neutral-500))]">
              {r.sector}
            </div>
            <h3 className="mt-2 font-display font-bold text-navy-800 text-[17px] leading-snug">{r.title}</h3>
            <p className="mt-3 text-sm text-[hsl(var(--neutral-700))] flex-1">{r.summary}</p>
            <a href="#" className="link-arrow mt-5">
              {r.cta} {r.type === "Report" ? <Download className="h-3.5 w-3.5" /> : <ArrowRight className="h-3.5 w-3.5" />}
            </a>
          </article>
        ))}
      </div>
    </WireSection>
  );
};
