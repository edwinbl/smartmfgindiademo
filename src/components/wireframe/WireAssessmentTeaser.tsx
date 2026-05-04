import { WireSection } from "./WireSection";

const outcomes = ["Exports", "Quality", "Traceability", "Productivity", "Energy efficiency"];

export const WireAssessmentTeaser = () => {
  return (
    <WireSection id="assessment" tag="Section 3 — Readiness Assessment teaser">
      <div className="grid gap-8 lg:grid-cols-3 lg:items-start">
        <div className="lg:col-span-2">
          <h2 className="font-semibold text-2xl md:text-3xl tracking-tight">
            Understand where your organisation stands before deciding what to adopt.
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl">
            The CII readiness assessment helps you benchmark your current state against
            outcome-based parameters and identify the right next steps.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {outcomes.map((o) => (
              <span key={o} className="wire-chip">{o}</span>
            ))}
          </div>
          <div className="mt-6">
            <a href="#" className="wire-cta-primary">Take / Access Assessment</a>
          </div>
        </div>

        <div className="wire-placeholder border border-dashed border-border rounded-sm aspect-[4/3] grid place-items-center">
          <span className="text-xs font-mono text-muted-foreground">[ Assessment visual placeholder ]</span>
        </div>
      </div>
    </WireSection>
  );
};
