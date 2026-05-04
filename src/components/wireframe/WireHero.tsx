import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import { HeroMaturityDial } from "./HeroMaturityDial";

const stats = [
  { v: "8+", l: "Years convening" },
  { v: "60", l: "Case studies" },
  { v: "2,400+", l: "Practitioners trained" },
  { v: "180+", l: "Solution providers" },
];

export const WireHero = () => {
  return (
    <section className="relative overflow-hidden text-white" aria-label="Hero">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(var(--navy-900)) 0%, hsl(var(--navy-800)) 60%, hsl(var(--navy-700)) 100%)",
        }}
      />
      <div className="absolute inset-0 blueprint-grid opacity-60" />
      {/* Orange glow */}
      <div
        className="absolute -top-40 -right-40 w-[720px] h-[720px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--orange-500) / 0.32), hsl(var(--orange-500) / 0) 60%)",
        }}
      />
      {/* Tricolor stripe */}
      <div className="absolute left-0 top-0 bottom-0 w-1 tricolor-stripe" />

      <div className="container-cii relative pt-8 pb-12 md:pt-10 md:pb-16 grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 border"
               style={{ background: "hsl(var(--orange-500) / 0.14)", borderColor: "hsl(var(--orange-500) / 0.4)" }}>
            <Sparkles className="h-3.5 w-3.5 text-cii-orange" />
            <span className="eyebrow text-[hsl(var(--orange-100))]">A CII National Initiative</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tight">
            Making India an{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, hsl(var(--orange-500)) 0%, hsl(var(--saffron)) 100%)" }}
            >
              Industry 4.0
            </span>
            <br />enabled country
          </h1>

          <p className="mt-5 text-base md:text-lg text-white/80 max-w-xl">
            CII Smart Manufacturing is the national platform that helps Indian industry assess
            where it stands, find what works, and connect with the partners who can move it forward.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#assessment" className="btn-primary">
              Access Maturity Assessments <ArrowRight className="!h-4 !w-4" />
            </a>
            <a href="#solutions" className="btn-ghost">Explore Solutions</a>
          </div>

          <a href="#chatbot" className="mt-5 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
            <MessageCircle className="h-4 w-4" />
            Ask the Smart Manufacturing Assistant →
          </a>

          <div className="mt-7 pt-5 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="font-numeric font-extrabold text-2xl text-white">{s.v}</div>
                <div className="mt-1.5 text-[12px] font-medium text-white/65">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <HeroMaturityDial />
      </div>
    </section>
  );
};
