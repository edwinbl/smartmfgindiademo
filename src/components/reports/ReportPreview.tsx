import { Lock } from "lucide-react";
import type { Report } from "@/data/reports";

interface Props {
  report: Report;
  onUnlock: () => void;
}

export const ReportPreview = ({ report, onUnlock }: Props) => {
  const topics = report.topicsCovered ?? [];
  if (!topics.length) return null;

  return (
    <section className="mt-12">
      <div className="section-eyebrow mb-2">Preview</div>
      <h2 className="font-display font-bold text-2xl md:text-3xl text-[hsl(var(--navy-900))] leading-tight">
        Section preview
      </h2>
      <p className="mt-3 text-sm md:text-base text-[hsl(var(--neutral-700))] max-w-2xl leading-relaxed">
        A glance at the sections inside this {report.pages}-page {report.type.toLowerCase()}.
      </p>

      <div className="mt-6 relative cii-card p-0 overflow-hidden">
        <div
          className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x"
          style={{ borderColor: "hsl(var(--neutral-150))" }}
        >
          {topics.slice(0, 4).map((t, i) => {
            const gated = report.gated && i >= 2;
            return (
              <div key={i} className="relative p-6 md:p-8 bg-white min-h-[180px]">
                <div className="text-[10px] uppercase tracking-[0.14em] font-bold text-[hsl(var(--neutral-500))]">
                  Section {i + 1}
                </div>
                <h3 className="mt-2 font-display font-bold text-base text-[hsl(var(--navy-900))] leading-snug">
                  {t}
                </h3>
                <div className={`mt-4 space-y-1.5 ${gated ? "blur-sm select-none" : ""}`}>
                  {[100, 92, 86, 78].map((w, j) => (
                    <div
                      key={j}
                      className="h-2 rounded-full"
                      style={{ width: `${w}%`, background: "hsl(var(--neutral-150))" }}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {report.gated && (
          <div
            className="absolute inset-x-0 bottom-0 h-1/2 flex items-end justify-center pb-6 px-6"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, hsl(0 0% 100% / 0.85) 50%, #fff 100%)",
            }}
          >
            <button type="button" onClick={onUnlock} className="btn-primary">
              <Lock className="h-4 w-4" />
              Unlock full report
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
