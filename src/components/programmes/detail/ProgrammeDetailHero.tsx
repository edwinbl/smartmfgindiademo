import { Link } from "react-router-dom";
import { ChevronRight, Calendar, Clock, MapPin, Award } from "lucide-react";
import { accentSoft } from "@/lib/programmesStorage";
import type { ProgrammeItem } from "@/data/programmes";

interface Props {
  programme: ProgrammeItem;
  onRegister: () => void;
}

const statusLabel: Record<ProgrammeItem["status"], string> = {
  open: "Registrations Open",
  soon: "Coming Soon",
  closed: "Closed",
  waitlist: "Waitlist Open",
};

export const ProgrammeDetailHero = ({ programme, onRegister }: Props) => {
  const p = programme;
  const heroImage = p.gallery?.[0];

  return (
    <section className="relative text-white overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(125deg, hsl(var(--navy-900)) 0%, hsl(var(--navy-700)) 60%, hsl(var(--navy-600)) 100%)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 blueprint-grid opacity-25" aria-hidden />
      <div className="container-cii relative py-10 md:py-14">
        <nav className="text-xs text-white/70 flex items-center gap-1.5 mb-5" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-white">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/programmes" className="hover:text-white">Programmes</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-white/90">{p.type}</span>
        </nav>

        <div className={`grid gap-10 items-start ${heroImage ? "lg:grid-cols-12" : "lg:grid-cols-12"}`}>
          <div className={heroImage ? "lg:col-span-7 space-y-5" : "lg:col-span-8 space-y-5"}>
            <div className="flex flex-wrap items-center gap-2">
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] uppercase tracking-[0.12em] font-bold ${accentSoft[p.accent]}`}>
                {p.type}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] uppercase tracking-[0.12em] font-bold bg-white/10 backdrop-blur-sm border border-white/20">
                {statusLabel[p.status]}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] uppercase tracking-[0.12em] font-bold bg-white/10 backdrop-blur-sm border border-white/20">
                {p.mode}
              </span>
              {p.certification && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] uppercase tracking-[0.12em] font-bold bg-[hsl(var(--saffron))] text-[hsl(var(--navy-900))]">
                  <Award className="h-3 w-3" /> Certified
                </span>
              )}
            </div>

            <h1 className="font-display font-bold text-[26px] sm:text-[32px] md:text-[42px] leading-[1.1] tracking-tight">
              {p.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/85 max-w-2xl">{p.tagline}</p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/80 pt-1">
              <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4 text-white/60" />{p.startDate}</span>
              <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-white/60" />{p.duration}</span>
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-white/60" />{p.format}</span>
            </div>

            {p.status === "closed" ? (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-semibold text-white/90">
                Programme concluded — view highlights below
              </div>
            ) : (
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button onClick={onRegister} className="btn-primary">
                  {p.registrationLabel}
                </button>
              </div>
            )}
          </div>

          {heroImage && (
            <div className="lg:col-span-5 flex items-start justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-none rounded-xl overflow-hidden ring-1 ring-white/20 shadow-2xl shadow-black/30">
                <img
                  src={heroImage.url}
                  alt={heroImage.caption ?? `${p.title} photograph`}
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" aria-hidden />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
