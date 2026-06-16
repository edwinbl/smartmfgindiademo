import type { Report } from "@/data/reports";

interface Props {
  report: Report;
}

export const ReportKeyHighlights = ({ report }: Props) => {
  return (
    <section>
      <div className="section-eyebrow mb-2">Key Findings</div>
      <h2 className="font-display font-bold text-2xl md:text-3xl text-[hsl(var(--navy-900))] leading-tight">
        What the report actually says
      </h2>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {report.keyFindings.map((f, i) => (
          <div key={i} className="cii-card p-5">
            <div
              className="h-8 w-8 rounded-md grid place-items-center text-white font-bold text-xs"
              style={{ background: i % 2 === 0 ? "hsl(var(--navy-700))" : "hsl(var(--red-600))" }}
            >
              {i + 1}
            </div>
            <h3 className="mt-3 font-display font-bold text-base text-[hsl(var(--navy-900))]">{f.title}</h3>
            <p className="mt-1.5 text-sm text-[hsl(var(--neutral-700))] leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>

      {/* exec summary */}
      <div className="mt-10">
        <div className="section-eyebrow mb-2">Executive Summary</div>
        <div className="space-y-3 mt-4">
          {report.executiveSummary.map((p, i) => (
            <p key={i} className="text-[15px] text-[hsl(var(--neutral-700))] leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
