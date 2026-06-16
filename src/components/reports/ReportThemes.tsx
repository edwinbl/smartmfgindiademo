import { BookOpen } from "lucide-react";
import type { Report } from "@/data/reports";

interface Props {
  report: Report;
}

export const ReportThemes = ({ report }: Props) => {
  if (!report.topicsCovered?.length) return null;
  return (
    <section className="mt-12">
      <div className="section-eyebrow mb-2">Inside the Report</div>
      <h2 className="font-display font-bold text-2xl md:text-3xl text-[hsl(var(--navy-900))] leading-tight">
        Topics &amp; sections covered
      </h2>
      <p className="mt-3 text-sm md:text-base text-[hsl(var(--neutral-700))] max-w-2xl leading-relaxed">
        Sections drawn directly from the report's table of contents and section headings.
      </p>

      <div className="mt-7 grid md:grid-cols-2 gap-3">
        {report.topicsCovered.map((t, i) => (
          <div key={i} className="cii-card p-4 flex items-start gap-3">
            <div
              className="h-9 w-9 rounded-md grid place-items-center text-white shrink-0 font-numeric font-extrabold text-xs"
              style={{
                background: "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-600)))",
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="flex-1 min-w-0 pt-1">
              <div className="flex items-start gap-2 text-sm text-[hsl(var(--navy-900))] leading-snug">
                <BookOpen className="h-4 w-4 mt-0.5 text-[hsl(var(--navy-600))] shrink-0" />
                <span>{t}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
