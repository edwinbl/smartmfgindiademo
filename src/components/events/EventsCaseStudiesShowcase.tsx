import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, MapPin, Factory, Sparkles } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

export const EventsCaseStudiesShowcase = () => {
  const featured = caseStudies.filter((c) => c.featured).slice(0, 3);

  return (
    <section className="py-16 lg:py-24 bg-[hsl(var(--neutral-50))]">
      <div className="container-cii">
        <div className="mb-8 md:mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="section-eyebrow mb-2 inline-flex items-center gap-1.5">
              <Sparkles className="h-3 w-3" /> From The Ecosystem
            </div>
            <h2 className="font-display font-bold text-[26px] md:text-[36px] text-[hsl(var(--navy-900))] tracking-tight leading-tight">
              Stories from manufacturers driving change
            </h2>
            <p className="mt-3 text-sm md:text-base text-[hsl(var(--neutral-700))] max-w-2xl">
              See how Indian manufacturers translated insights from CII events into
              measurable transformation on the shop floor.
            </p>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[hsl(var(--red-600))] hover:text-[hsl(var(--red-700))]"
          >
            All Case Studies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((c) => (
            <Link
              key={c.slug}
              to={`/case-studies/${c.slug}`}
              className="group cii-card bg-white p-6 flex flex-col hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--red-600))]">
                <Factory className="h-3 w-3" /> {c.sector}
              </div>
              <h3 className="mt-3 font-display font-bold text-[17px] text-[hsl(var(--navy-900))] leading-snug line-clamp-2">
                {c.headline}
              </h3>
              <p className="mt-2 text-[13px] text-[hsl(var(--neutral-700))] leading-relaxed line-clamp-3">
                {c.summary}
              </p>

              <div className="mt-4 flex items-center gap-x-3 gap-y-1 flex-wrap text-[11px] text-[hsl(var(--neutral-700))]">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> {c.state}
                </span>
                <span className="font-semibold text-[hsl(var(--navy-800))]">{c.company}</span>
              </div>

              <div className="mt-5 pt-5 border-t border-[hsl(var(--neutral-150))] flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--neutral-500))]">
                    {c.metric.label}
                  </div>
                  <div className="font-numeric text-[22px] font-extrabold text-[hsl(var(--india-green))] inline-flex items-center gap-1">
                    <TrendingUp className="h-4 w-4" /> {c.metric.value}
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[hsl(var(--navy-800))] group-hover:text-[hsl(var(--red-600))] transition-colors">
                  Read story <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
