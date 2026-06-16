import { Trophy, Award, MapPin, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import img01 from "@/assets/awards2026/01-lt-heavy.jpg.asset.json";
import img02 from "@/assets/awards2026/02-lt-precision.jpg.asset.json";
import img03 from "@/assets/awards2026/03-hul-sumerpur.jpg.asset.json";
import img04 from "@/assets/awards2026/04-dcm-shriram.jpg.asset.json";
import img05 from "@/assets/awards2026/05-tvs-motor.jpg.asset.json";
import img06 from "@/assets/awards2026/06-bpcl-bina.jpg.asset.json";
import img07 from "@/assets/awards2026/07-patil-rail.jpg.asset.json";
import img08 from "@/assets/awards2026/08-elofic.jpg.asset.json";
import img09 from "@/assets/awards2026/09-lt-rubber.jpg.asset.json";
import img10 from "@/assets/awards2026/10-circor.jpg.asset.json";
import img11 from "@/assets/awards2026/11-alloy-steels.jpg.asset.json";
import img12 from "@/assets/awards2026/12-gayatri.jpg.asset.json";
import img13 from "@/assets/awards2026/13-m2nxt.jpg.asset.json";

type Rank = "Winner" | "1st Runner-Up" | "2nd Runner-Up" | "Special Recognition";
type Scale = "Large Scale" | "Medium Scale" | "Small Scale";

interface Winner {
  company: string;
  unit?: string;
  location: string;
  rank: Rank;
  scale: Scale;
  segment?: string;
  image: string;
}

const winners: Winner[] = [
  // Winners
  { company: "L&T Heavy Engineering (HEIC)", unit: "Hazira Plant", location: "Hazira, Gujarat", rank: "Winner", scale: "Large Scale", image: img01.url },
  { company: "L&T Precision Engineering and Systems", location: "Pune, Maharashtra", rank: "Winner", scale: "Large Scale", image: img02.url },
  { company: "Elofic Industries Ltd", unit: "Faridabad Plant", location: "Faridabad, Haryana", rank: "Winner", scale: "Medium Scale", image: img08.url },
  { company: "Alloy Steels", location: "Shilori, Kolhapur", rank: "Winner", scale: "Small Scale", image: img11.url },
  // 1st Runner-Up
  { company: "Hindustan Unilever Limited", unit: "Sumerpur Detergents Factory", location: "Sumerpur", rank: "1st Runner-Up", scale: "Large Scale", image: img03.url },
  { company: "DCM Shriram Ltd", unit: "Jhagadia Plant", location: "Jhagadia, Gujarat", rank: "1st Runner-Up", scale: "Large Scale", image: img04.url },
  { company: "Larsen & Toubro Ltd", unit: "Rubber Processing Machinery", location: "Kanchipuram, Tamil Nadu", rank: "1st Runner-Up", scale: "Medium Scale", image: img09.url },
  { company: "Gayatri Agency", location: "Bhubaneshwar, Odisha", rank: "1st Runner-Up", scale: "Small Scale", image: img12.url },
  // 2nd Runner-Up
  { company: "TVS Motor Company Limited", unit: "Hosur Plant", location: "Hosur, Tamil Nadu", rank: "2nd Runner-Up", scale: "Large Scale", image: img05.url },
  { company: "Circor Flow Technologies India Pvt Ltd", location: "Coimbatore, Tamil Nadu", rank: "2nd Runner-Up", scale: "Medium Scale", image: img10.url },
  { company: "M2NXT Solutions Pvt Ltd", location: "Bangalore, Karnataka", rank: "2nd Runner-Up", scale: "Small Scale", image: img13.url },
  // Special Recognition
  { company: "Bharat Petroleum Corporation Limited", unit: "Bina Refinery", location: "Bina, Madhya Pradesh", rank: "Special Recognition", scale: "Large Scale", segment: "Public Sector Undertaking", image: img06.url },
  { company: "Patil Rail Infrastructure Pvt Ltd", location: "Hyderabad, Telangana", rank: "Special Recognition", scale: "Large Scale", segment: "Diversified Industry Segment", image: img07.url },
];

const rankStyles: Record<Rank, { bg: string; border: string; color: string }> = {
  "Winner": { bg: "hsl(var(--orange-500) / 0.95)", border: "hsl(var(--orange-500))", color: "white" },
  "1st Runner-Up": { bg: "hsl(var(--navy-900) / 0.7)", border: "hsl(var(--orange-500) / 0.5)", color: "hsl(var(--orange-100))" },
  "2nd Runner-Up": { bg: "hsl(var(--navy-900) / 0.7)", border: "hsl(var(--orange-500) / 0.4)", color: "hsl(var(--orange-100))" },
  "Special Recognition": { bg: "hsl(var(--red-600) / 0.9)", border: "hsl(var(--red-600))", color: "white" },
};

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
      aria-label="CII National Best Practices Award 2026 Winners"
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
            <span className="text-[12px] uppercase tracking-[0.18em] font-bold text-white">2nd Edition · 2026</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight">
            Congratulations to the <span className="text-cii-orange">2026 Honourees</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            CII National Best Practices Award on Future Ready Manufacturing — recognising 13 Indian manufacturers
            across Large, Medium and Small Scale categories at the Annual Business Summit 2026, New Delhi.
          </p>
        </div>

        {/* Winner carousel */}
        <div className="mt-12 md:mt-16 relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-5 md:gap-6">
              {winners.map((w, idx) => {
                const r = rankStyles[w.rank];
                return (
                  <div
                    key={idx}
                    className="min-w-0 flex-shrink-0 flex-grow-0 w-[calc(100%-1rem)] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
                  >
                    <article
                      className="h-full rounded-xl border overflow-hidden backdrop-blur-2xl"
                      style={{
                        background:
                          "linear-gradient(180deg, hsl(var(--navy-700) / 0.55) 0%, hsl(var(--navy-800) / 0.45) 100%)",
                        borderColor: "hsl(var(--navy-500) / 0.5)",
                      }}
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={w.image}
                          alt={`${w.company} receiving the CII National Best Practices Award 2026`}
                          loading="lazy"
                          width={800}
                          height={500}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background:
                              "linear-gradient(180deg, hsl(var(--navy-900) / 0.05) 0%, hsl(var(--navy-900) / 0.75) 100%)",
                          }}
                        />
                        <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-3">
                          <span
                            className="text-[11px] uppercase tracking-[0.14em] font-bold px-2 py-0.5 rounded-full backdrop-blur"
                            style={{
                              background: "hsl(var(--navy-900) / 0.55)",
                              color: "hsl(var(--orange-100))",
                              border: "1px solid hsl(var(--orange-500) / 0.4)",
                            }}
                          >
                            {w.scale}
                          </span>
                          <div
                            className="flex items-center gap-1 px-2 py-0.5 rounded-full backdrop-blur"
                            style={{
                              background: r.bg,
                              border: `1px solid ${r.border}`,
                              color: r.color,
                            }}
                          >
                            <Award className="h-3.5 w-3.5" />
                            <span className="text-[11px] font-bold uppercase tracking-wider">{w.rank}</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 md:p-7">
                        <h3 className="font-display font-bold text-lg md:text-xl leading-snug text-white">
                          {w.company}
                        </h3>
                        {w.unit && (
                          <p className="mt-1 text-sm text-white/75 leading-snug">{w.unit}</p>
                        )}
                        <div className="mt-3 flex items-center gap-1.5 text-[12px] text-white/60">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>{w.location}</span>
                        </div>
                        {w.segment && (
                          <p className="mt-3 text-[11px] uppercase tracking-[0.14em] font-bold text-cii-orange">
                            {w.segment}
                          </p>
                        )}
                      </div>
                    </article>
                  </div>
                );
              })}
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
