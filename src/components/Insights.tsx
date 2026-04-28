import { ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import img1 from "@/assets/insight-1.jpg";
import img2 from "@/assets/insight-2.jpg";
import img3 from "@/assets/insight-3.jpg";

const items = [
  { tag: "Case study", title: "How a Pune auto-parts MSME cut downtime by 38%", img: img1 },
  { tag: "Report", title: "State of Industry 4.0 adoption in India 2026", img: img2 },
  { tag: "Success story", title: "From shop-floor sensors to predictive maintenance", img: img3 },
];

export const Insights = () => {
  useReveal();
  return (
    <section id="insights" className="py-20 md:py-28 bg-gradient-soft">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 reveal">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-1">Featured insights</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tight">
              Real outcomes from real factories
            </h2>
          </div>
          <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-1 hover:gap-2 transition-all">
            View all insights <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 -mx-5 px-5 sm:mx-0 sm:px-0 overflow-x-auto no-scrollbar">
          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 min-w-max sm:min-w-0">
            {items.map((it, i) => (
              <article
                key={it.title}
                className="reveal group w-[78vw] sm:w-auto shrink-0 overflow-hidden rounded-2xl bg-card border border-border shadow-elegant transition-smooth hover:-translate-y-1 hover:shadow-elevated"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={it.img}
                    alt={it.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                </div>
                <div className="p-5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-1">{it.tag}</span>
                  <h3 className="mt-2 font-display text-lg font-bold leading-snug group-hover:text-brand-1 transition-smooth">
                    {it.title}
                  </h3>
                  <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold">
                    Read more <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
