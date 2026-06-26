import { Link } from "react-router-dom";
import { Download, ArrowRight, Clock, FileText } from "lucide-react";
import type { Report } from "@/data/reports";

interface Props {
  report: Report;
  onDownload?: (report: Report) => void;
}

export const ReportCard = ({ report, onDownload }: Props) => {
  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onDownload?.(report);
  };


  return (
    <Link
      to={`/reports/${report.slug}`}
      className="group cii-card overflow-hidden flex flex-col"
    >
      {/* cover */}
      <div
        className={`relative h-44 ${report.coverImage ? "bg-[hsl(var(--navy-900))]" : `bg-gradient-to-br ${report.coverGradient}`} text-white p-5 flex flex-col justify-between overflow-hidden`}
      >
        {report.coverImage && (
          <>
            <img
              src={report.coverImage}
              alt={`${report.title} cover`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(10,15,30,0.15) 0%, rgba(10,15,30,0.55) 60%, rgba(10,15,30,0.85) 100%)",
              }}
              aria-hidden
            />
          </>
        )}

        <div className="relative flex items-center justify-between">
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/15 backdrop-blur">
            {report.type}
          </span>
        </div>


        <div className="relative">
          <h4 className="font-display font-bold text-[18px] leading-tight line-clamp-3 drop-shadow-md">
            {report.title}
          </h4>
          <div className="mt-3 inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-black/40 backdrop-blur text-[10px] font-bold uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
            {report.author}
          </div>
        </div>

        {!report.coverImage && (
          <div
            className="absolute inset-0 opacity-[0.15] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
            aria-hidden
          />
        )}
      </div>

      {/* body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-1.5 mb-3">
          <span className="cii-chip">{report.industry}</span>
          <span className="cii-chip cii-chip-orange">{report.domain}</span>
          <span className="text-[11px] font-semibold text-[hsl(var(--neutral-500))]">· {report.year}</span>
        </div>
        <p className="mt-1 text-[13px] text-[hsl(var(--neutral-700))] leading-relaxed line-clamp-3">{report.summary}</p>


        <div className="mt-4 flex items-center gap-4 text-[11px] text-[hsl(var(--neutral-500))]">
          <span className="inline-flex items-center gap-1">
            <FileText className="h-3.5 w-3.5" /> {report.pages}p
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> {report.readingTime}
          </span>
        </div>

        <div className="mt-4 pt-4 border-t flex items-center justify-between" style={{ borderColor: "hsl(var(--neutral-150))" }}>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-[hsl(var(--navy-700))] group-hover:text-[hsl(var(--red-600))]">
            Preview report
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
          <button
            type="button"
            onClick={handleDownload}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[hsl(var(--navy-700))] hover:text-[hsl(var(--red-600))]"
            aria-label="Download"
          >
            <Download className="h-3.5 w-3.5" />
            Download
          </button>
        </div>
      </div>
    </Link>
  );
};
