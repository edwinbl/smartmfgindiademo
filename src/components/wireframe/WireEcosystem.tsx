import { WireSection } from "./WireSection";

const stakeholders = [
  "MSMEs",
  "Experts",
  "Technology providers",
  "Academia",
  "Larger manufacturers",
  "Institutions",
];

export const WireEcosystem = () => {
  return (
    <WireSection tag="Section 7 — Ecosystem participation">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="font-semibold text-2xl md:text-3xl tracking-tight">
            A connected smart manufacturing ecosystem
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl">
            The portal brings together MSMEs, experts, technology providers, academia, larger
            manufacturers and institutions to accelerate Industry 4.0 adoption across India.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {stakeholders.map((s) => (
              <span key={s} className="wire-chip">{s}</span>
            ))}
          </div>
          <div className="mt-6">
            <a href="#contact" className="wire-cta-primary">Express interest / Contact CII</a>
          </div>
        </div>

        <div className="wire-placeholder border border-dashed border-border rounded-sm aspect-[4/3] grid place-items-center">
          <span className="text-xs font-mono text-muted-foreground">[ Ecosystem diagram placeholder ]</span>
        </div>
      </div>
    </WireSection>
  );
};
