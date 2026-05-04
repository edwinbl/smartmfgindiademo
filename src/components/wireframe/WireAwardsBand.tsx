import { Award, ArrowRight } from "lucide-react";

export const WireAwardsBand = () => {
  return (
    <section id="awards" className="py-10 md:py-12 bg-white" aria-label="Smart Manufacturing Awards">
      <div className="container-cii">
        <div
          className="relative overflow-hidden rounded-xl border border-[hsl(var(--neutral-150))] p-6 md:p-8"
          style={{
            background:
              "linear-gradient(90deg, hsl(var(--navy-900)) 0%, hsl(var(--navy-700)) 60%, hsl(var(--red-700)) 100%)",
          }}
        >
          <div className="absolute inset-0 blueprint-grid opacity-30" />
          <div
            className="absolute -top-20 -right-20 w-[360px] h-[360px] pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, hsl(var(--orange-500) / 0.28), hsl(var(--orange-500) / 0) 60%)",
            }}
          />

          <div className="relative flex flex-col md:flex-row md:items-center gap-6 md:gap-8 text-white">
            <div className="h-14 w-14 rounded-md grid place-items-center bg-white/12 border border-white/25 shrink-0">
              <Award className="h-7 w-7 text-cii-orange" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="text-[11px] uppercase tracking-[0.16em] font-bold text-[hsl(var(--orange-100))] mb-2">
                Campaign · Now open
              </div>
              <h3 className="font-display font-bold text-xl md:text-2xl leading-tight">
                Smart Manufacturing Awards
              </h3>
              <p className="mt-2 text-sm md:text-base text-white/80 max-w-2xl">
                Recognising excellence in smart manufacturing adoption and innovation.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="#"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-sm bg-white text-navy-800 font-semibold text-sm hover:bg-[hsl(var(--neutral-100))] transition-colors"
              >
                View Awards <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
