import { Trophy, ArrowRight, Award, Factory, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const winners = [
  {
    slug: "bosch-collaboration-revision-connection-innovation",
    company: "Bosch India",
    headline: "Collaboration, Re-vision, Connection and Innovation",
    sector: "Automobile & Ancillaries",
    state: "Karnataka",
    metricLabel: "Productivity",
    metricValue: "+20%",
    size: "Enterprise",
  },
  {
    slug: "plastech-adding-smart-to-factories",
    company: "Plastech Solutions",
    headline: "Adding ‘SMART’ to Factories",
    sector: "Automotive Components Manufacturing",
    state: "Maharashtra",
    metricLabel: "OEE",
    metricValue: "+14 pts",
    size: "MSME",
  },
  {
    slug: "setco-teamcenter-real-time-collaboration",
    company: "Setco Automotive",
    headline: "Real-Time Collaboration Between U.K. and India Teams Through Teamcenter",
    sector: "Automobile & Ancillaries",
    state: "Maharashtra",
    metricLabel: "Development cycle",
    metricValue: "-30%",
    size: "MSME",
  },
  {
    slug: "siemens-warehouse-digital-enterprise",
    company: "Siemens India",
    headline: "Transforming Warehouse & Material Handling with Digital Enterprise",
    sector: "Warehouse Automation & Material Handling",
    state: "Delhi",
    metricLabel: "Time-to-Market",
    metricValue: "Faster",
    size: "Enterprise",
  },
];

export const WireAwardsBand = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
    containScroll: false,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section
      id="awards"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(120deg, hsl(var(--navy-900)) 0%, hsl(var(--navy-800)) 55%, hsl(var(--navy-700)) 100%)",
      }}
      aria-label="CII National Best Practices Award Winners"
    >
      <div className="absolute inset-0 blueprint-grid opacity-25" />
      <div
        className="absolute -top-32 -left-32 w-[420px] h-[420px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--red-600) / 0.25), hsl(var(--red-600) / 0) 60%)",
        }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-[480px] h-[480px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--orange-500) / 0.22), hsl(var(--orange-500) / 0) 60%)",
        }}
      />

      <div className="container-cii relative py-16 md:py-20 lg:py-24 text-white">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full mb-6 border"
            style={{
              background: "hsl(var(--orange-500) / 0.15)",
              borderColor: "hsl(var(--orange-500) / 0.4)",
            }}
          >
            <Trophy className="h-4 w-4 text-cii-orange" />
            <span className="text-[12px] uppercase tracking-[0.18em] font-bold text-white">FY25 Concluded</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight">
            Congratulations to the <span className="text-cii-orange">Winners</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            CII National Best Practices Award on Future Ready Manufacturing — recognising Indian industry
            leaders who have delivered measurable outcomes through Industry 4.0 adoption.
          </p>
        </div>

        {/* Winner carousel */}
        <div className="mt-12 md:mt-16 relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-5 md:gap-6">
              {winners.map((w) => (
                <div
                  key={w.slug}
                  className="min-w-0 flex-shrink-0 flex-grow-0 w-[calc(100%-1rem)] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
                >
                  <a
                    href={`/case-studies/${w.slug}`}
                    className="group block h-full rounded-xl border p-6 md:p-7 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background:
                        "linear-gradient(180deg, hsl(var(--navy-700) / 0.55) 0%, hsl(var(--navy-800) / 0.45) 100%)",
                      borderColor: "hsl(var(--navy-500) / 0.5)",
                    }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span
                        className="text-[11px] uppercase tracking-[0.14em] font-bold px-2 py-0.5 rounded-full"
                        style={{
                          background: "hsl(var(--orange-500) / 0.12)",
                          color: "hsl(var(--orange-100))",
                        }}
                      >
                        {w.size}
                      </span>
                      <div className="flex items-center gap-1 text-cii-orange">
                        <Award className="h-3.5 w-3.5" />
                        <span className="text-[11px] font-bold uppercase tracking-wider">Winner</span>
                      </div>
                    </div>

                    <div className="mt-5">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white/60">
                        <Factory className="h-3 w-3" />
                        {w.state} · {w.sector}
                      </div>
                      <h3 className="mt-2 font-display font-bold text-lg md:text-xl leading-snug text-white group-hover:text-cii-orange transition-colors">
                        {w.company}
                      </h3>
                      <p className="mt-2 text-sm text-white/70 leading-relaxed line-clamp-3">
                        {w.headline}
                      </p>
                    </div>

                    <div
                      className="mt-6 rounded-lg border px-4 py-3 flex items-center justify-between"
                      style={{
                        background: "hsl(var(--navy-900) / 0.4)",
                        borderColor: "hsl(var(--navy-500) / 0.35)",
                      }}
                    >
                      <div>
                        <div className="text-[10px] uppercase tracking-wider font-bold text-white/50">
                          {w.metricLabel}
                        </div>
                        <div className="text-xl font-extrabold font-numeric text-cii-orange mt-0.5">
                          {w.metricValue}
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-white/40 group-hover:text-cii-orange group-hover:translate-x-1 transition-all" />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel arrows */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="h-10 w-10 rounded-full border grid place-items-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10"
              style={{ borderColor: "hsl(0 0% 100% / 0.25)" }}
              aria-label="Previous winner"
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="h-10 w-10 rounded-full border grid place-items-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10"
              style={{ borderColor: "hsl(0 0% 100% / 0.25)" }}
              aria-label="Next winner"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>

        {/* Next edition CTA */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-white/15 text-center">
          <p className="text-white/60 text-sm md:text-base">
            Applications for the next edition will open soon.{" "}
            <a href="/contact" className="text-cii-orange font-semibold hover:underline inline-flex items-center gap-1">
              Get notified <ArrowRight className="h-4 w-4" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
