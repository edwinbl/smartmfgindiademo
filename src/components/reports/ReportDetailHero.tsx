import { Link } from "react-router-dom";
import { ChevronRight, Calendar, User } from "lucide-react";
import type { Report } from "@/data/reports";

interface Props {
  report: Report;
}

export const ReportDetailHero = ({ report }: Props) => {
  return (
    <section className="relative overflow-hidden bg-background border-b h-[calc(100svh-72px)] flex items-center" style={{ borderColor: "hsl(var(--neutral-150))" }}>
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 400px at 90% 0%, hsl(var(--orange-500) / 0.10), transparent 60%), radial-gradient(700px 400px at 0% 100%, hsl(var(--navy-600) / 0.10), transparent 55%)",
        }}
        aria-hidden
      />
      <div className="container-cii py-10 lg:py-14">
        <nav className="flex items-center gap-1.5 text-xs text-[hsl(var(--neutral-500))] mb-6" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-[hsl(var(--red-600))]">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/reports" className="hover:text-[hsl(var(--red-600))]">Insights &amp; Reports</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-[hsl(var(--neutral-700))] truncate">{report.title}</span>
        </nav>

        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="cii-chip cii-chip-orange">{report.type}</span>
            <span className="cii-chip">{report.industry}</span>
            <span className="cii-chip">{report.domain}</span>
          </div>
          <h1 className="font-display font-extrabold text-3xl md:text-5xl leading-[1.05] tracking-tight text-[hsl(var(--navy-900))]">
            {report.title}
          </h1>
          <p className="mt-5 text-base md:text-lg text-[hsl(var(--neutral-700))] leading-relaxed">
            {report.summary}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-[hsl(var(--neutral-700))]">
            <span className="inline-flex items-center gap-2">
              <User className="h-4 w-4 text-[hsl(var(--navy-700))]" />
              {report.author}
            </span>
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4 text-[hsl(var(--navy-700))]" />
              {report.publishedOn}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
