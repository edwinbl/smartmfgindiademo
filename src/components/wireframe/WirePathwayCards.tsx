import { WireSection } from "./WireSection";

const pathways = [
  { title: "Assess readiness", desc: "Understand your current Industry 4.0 maturity.", cta: "Start assessment" },
  { title: "Explore solutions", desc: "Find solutions mapped to your business outcomes.", cta: "Browse solutions" },
  { title: "Join programmes", desc: "Access CII training and adoption programmes.", cta: "View programmes" },
  { title: "View events", desc: "Discover upcoming workshops, summits and webinars.", cta: "See events" },
  { title: "Contact CII", desc: "Get in touch with the CII smart manufacturing team.", cta: "Contact us" },
];

export const WirePathwayCards = () => {
  return (
    <WireSection tag="Section 2 — User pathways" title="Self-select by intent">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {pathways.map((p) => (
          <article key={p.title} className="wire-card flex flex-col">
            <div className="h-10 w-10 wire-placeholder border border-border rounded-sm mb-4" aria-hidden />
            <h3 className="font-semibold text-base">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground flex-1">{p.desc}</p>
            <a href="#" className="wire-cta-link mt-4">{p.cta} →</a>
          </article>
        ))}
      </div>
    </WireSection>
  );
};
