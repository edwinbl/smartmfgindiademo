import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Sparkles, Users, Award } from "lucide-react";
import heroImage from "@/assets/programmes-hero.jpg";

interface Props {
  onExplore: () => void;
  onFindPath: () => void;
}

export const ProgrammesHero = ({ onExplore, onFindPath }: Props) => {
  return (
    <section className="relative isolate overflow-hidden text-white">
      <img
        src={heroImage}
        alt=""
        aria-hidden
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(115deg, hsl(var(--navy-900) / 0.94) 0%, hsl(var(--navy-800) / 0.82) 45%, hsl(var(--navy-900) / 0.55) 100%)",
        }}
      />
      <div className="absolute inset-0 blueprint-grid opacity-30" aria-hidden />
      <div
        aria-hidden
        className="absolute -top-32 -right-24 h-[520px] w-[520px] rounded-full blur-3xl opacity-40 animate-pulse"
        style={{ background: "radial-gradient(circle, hsl(var(--orange-500) / 0.55) 0%, transparent 60%)" }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, hsl(var(--red-600) / 0.45) 0%, transparent 65%)" }}
      />

      <div className="container-cii relative z-10 pt-20 pb-24 md:pt-28 md:pb-32 lg:pt-32 lg:pb-40">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[11px] uppercase tracking-[0.14em] font-bold">
                <Sparkles className="h-3 w-3" /> Capability Building
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[hsl(var(--red-600))] text-[11px] uppercase tracking-[0.14em] font-bold">
                Industry 4.0
              </span>
            </div>

            <h1 className="font-display font-bold text-[36px] sm:text-[44px] md:text-[60px] leading-[1.05] tracking-tight">
              Programmes &amp; Training
            </h1>

            <p className="text-lg md:text-xl text-white/85 font-medium max-w-2xl">
              Build Industry 4.0 capabilities through expert-led programmes, workshops and transformation learning pathways.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button onClick={onExplore} className="btn-primary">
                Explore Programmes <ArrowRight className="h-4 w-4" />
              </button>
              <button onClick={onFindPath} className="btn-ghost">
                <GraduationCap className="h-4 w-4" /> Find Learning Path
              </button>
              <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white transition-colors">
                Talk to programme advisor
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Users, value: "14,500+", label: "Leaders trained" },
                { icon: GraduationCap, value: "120+", label: "Programmes delivered" },
                { icon: Award, value: "85", label: "Industry partners" },
                { icon: Sparkles, value: "28", label: "Industries served" },
              ].map((tile, i) => {
                const Icon = tile.icon;
                return (
                  <div
                    key={tile.label}
                    className="rounded-lg p-5 bg-white/10 backdrop-blur-md border border-white/15 animate-fade-in"
                    style={{ transform: `translateY(${i % 2 === 0 ? "-8px" : "8px"})`, animationDelay: `${i * 100}ms` }}
                  >
                    <Icon className="h-5 w-5 text-white/70 mb-3" />
                    <div className="font-numeric font-bold text-2xl md:text-3xl text-white">{tile.value}</div>
                    <div className="text-[11px] uppercase tracking-[0.14em] text-white/70 mt-1">{tile.label}</div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 p-4">
              <div className="text-[11px] uppercase tracking-[0.14em] font-bold text-white/70 mb-2">
                Faculty & partners
              </div>
              <div className="text-sm text-white/85 leading-snug">
                IIT Madras · Bosch · Mahindra · Tata Steel · Wipro · Siemens
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
