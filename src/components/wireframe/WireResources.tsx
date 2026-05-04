import { WireSection } from "./WireSection";

const resources = [
  { title: "Case study / report title placeholder", tag: "Sector / Topic", summary: "Short summary of the case study or report goes here for review purposes." },
  { title: "Case study / report title placeholder", tag: "Sector / Topic", summary: "Short summary of the case study or report goes here for review purposes." },
  { title: "Case study / report title placeholder", tag: "Sector / Topic", summary: "Short summary of the case study or report goes here for review purposes." },
];

export const WireResources = () => {
  return (
    <WireSection id="resources" tag="Section 6 — Case studies & resources">
      <div className="flex flex-wrap items-end justify-between gap-3 mb-6">
        <h2 className="font-semibold text-2xl md:text-3xl tracking-tight">
          Case studies & resources
        </h2>
        <a href="#" className="wire-cta-link">Explore resources →</a>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {resources.map((r, i) => (
          <article key={i} className="wire-card flex flex-col">
            <span className="wire-chip self-start mb-3">{r.tag}</span>
            <h3 className="font-semibold text-base">{r.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground flex-1">{r.summary}</p>
            <a href="#" className="wire-cta-link mt-4">Read / Download →</a>
          </article>
        ))}
      </div>
    </WireSection>
  );
};
