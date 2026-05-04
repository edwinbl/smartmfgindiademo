import { WireSection } from "./WireSection";

const programmes = [
  { title: "Programme title placeholder", date: "DD MMM YYYY", format: "In-person", audience: "MSMEs" },
  { title: "Programme title placeholder", date: "DD MMM YYYY", format: "Online", audience: "Operations leaders" },
  { title: "Programme title placeholder", date: "DD MMM YYYY", format: "Hybrid", audience: "Plant heads" },
];

export const WireProgrammes = () => {
  return (
    <WireSection id="programmes" tag="Section 5 — Programmes & Training">
      <div className="flex flex-wrap items-end justify-between gap-3 mb-6">
        <h2 className="font-semibold text-2xl md:text-3xl tracking-tight">
          Upcoming CII programmes
        </h2>
        <a href="#" className="wire-cta-link">View all programmes →</a>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {programmes.map((p, i) => (
          <article key={i} className="wire-card flex flex-col">
            <div className="wire-placeholder border border-dashed border-border rounded-sm aspect-[16/9] mb-4 grid place-items-center">
              <span className="text-[11px] font-mono text-muted-foreground">[ Image ]</span>
            </div>
            <h3 className="font-semibold text-base">{p.title}</h3>
            <dl className="mt-3 space-y-1 text-xs text-muted-foreground">
              <div className="flex gap-2"><dt className="font-medium text-foreground w-20">Date</dt><dd>{p.date}</dd></div>
              <div className="flex gap-2"><dt className="font-medium text-foreground w-20">Format</dt><dd>{p.format}</dd></div>
              <div className="flex gap-2"><dt className="font-medium text-foreground w-20">Audience</dt><dd>{p.audience}</dd></div>
            </dl>
            <a href="#" className="wire-cta-link mt-4">View details →</a>
          </article>
        ))}
      </div>
    </WireSection>
  );
};
