import { WireSection } from "./WireSection";

const outcomes = [
  "Export readiness",
  "Improve quality",
  "Strengthen traceability",
  "Reduce downtime",
  "Improve energy efficiency",
  "Digitise shopfloor reporting",
];

export const WireSolutionsTeaser = () => {
  return (
    <WireSection id="solutions" tag="Section 4 — Solutions teaser" title="Problem-led discovery">
      <h2 className="font-semibold text-2xl md:text-3xl tracking-tight">
        Find solutions by the outcome you want to achieve.
      </h2>
      <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-2xl">
        Browse curated solutions grouped by common manufacturing problems and business outcomes.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {outcomes.map((o) => (
          <article key={o} className="wire-card">
            <div className="h-8 w-8 wire-placeholder border border-border rounded-sm mb-3" aria-hidden />
            <h3 className="font-semibold text-base">{o}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Short outcome description placeholder text goes here.
            </p>
            <a href="#" className="wire-cta-link mt-4">View solutions →</a>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <a href="#" className="wire-cta-secondary">Explore Solutions</a>
      </div>
    </WireSection>
  );
};
