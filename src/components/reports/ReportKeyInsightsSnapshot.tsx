import { BarChart3, Lightbulb } from "lucide-react";
import type { Report } from "@/data/reports";

interface Props {
  report: Report;
}

export const ReportKeyInsightsSnapshot = ({ report }: Props) => {
  // Build snapshot cards purely from this report's data:
  // the headline stat, plus up to three short, quantitative-looking findings.
  const cards = [
    {
      stat: report.highlightStat.value,
      label: report.highlightStat.label,
      tone: "navy" as const,
    },
    ...report.keyFindings.slice(0, 3).map((f, i) => ({
      stat: f.title,
      label: f.description,
      tone: (i % 2 === 0 ? "orange" : "green") as "orange" | "green",
    })),
  ];

  const toneBg = (tone: string) => {
    if (tone === "orange") return "hsl(var(--orange-100))";
    if (tone === "green") return "hsl(var(--india-green) / 0.12)";
    return "hsl(var(--navy-050))";
  };
  const toneFg = (tone: string) => {
    if (tone === "orange") return "hsl(var(--orange-600))";
    if (tone === "green") return "hsl(var(--india-green))";
    return "hsl(var(--navy-700))";
  };

  return (
    <section className="mt-12">
      <div className="section-eyebrow mb-2">Key Insights Snapshot</div>
      <h2 className="font-display font-bold text-2xl md:text-3xl text-[hsl(var(--navy-900))] leading-tight">
        Headlines at a glance
      </h2>
      <p className="mt-3 text-sm md:text-base text-[hsl(var(--neutral-700))] max-w-2xl leading-relaxed">
        The headline numbers and findings as they appear in the report — designed for
        fast scanning by leadership teams.
      </p>

      <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cards.map((c, i) => (
          <div key={i} className="cii-card p-5 flex gap-4">
            <div
              className="h-10 w-10 rounded-md grid place-items-center shrink-0"
              style={{ background: toneBg(c.tone), color: toneFg(c.tone) }}
            >
              <BarChart3 className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="font-display font-bold text-base text-[hsl(var(--navy-900))] leading-snug">
                {c.stat}
              </div>
              <p className="mt-1.5 text-sm text-[hsl(var(--neutral-700))] leading-snug">
                {c.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Source attribution callout */}
      <div
        className="mt-6 cii-card p-6 md:p-7 flex flex-col md:flex-row gap-5 md:items-center"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--navy-050)), hsl(var(--orange-100)))",
        }}
      >
        <div
          className="h-12 w-12 rounded-lg grid place-items-center text-white shrink-0"
          style={{
            background:
              "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-600)))",
          }}
        >
          <Lightbulb className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <div className="text-[10px] uppercase tracking-[0.14em] font-bold text-[hsl(var(--red-600))]">
            Source
          </div>
          <p className="mt-1 font-display font-bold text-base md:text-lg text-[hsl(var(--navy-900))] leading-snug">
            {report.author} · {report.publishedOn || report.year}
          </p>
        </div>
      </div>
    </section>
  );
};
