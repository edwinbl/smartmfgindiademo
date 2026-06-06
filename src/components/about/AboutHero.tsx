import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, TrendingUp, Factory, Users2, Compass } from "lucide-react";

export const AboutHero = () => {
  return (
    <section
      className="relative overflow-hidden bg-background border-b"
      style={{ borderColor: "hsl(var(--neutral-150))" }}
      aria-label="About hero"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1100px 500px at 85% 0%, hsl(var(--orange-500) / 0.10), transparent 60%), radial-gradient(900px 600px at 0% 100%, hsl(var(--navy-600) / 0.12), transparent 55%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--neutral-200) / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--neutral-200) / 0.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
        aria-hidden
      />

      <div className="container-cii relative grid lg:grid-cols-12 gap-10 lg:gap-16 items-center py-14 lg:py-20">
        <div className="lg:col-span-7 animate-fade-in">
          <span className="cii-chip">
            <Sparkles className="h-3.5 w-3.5" /> Who We Are
          </span>

          <h1 className="font-display mt-5 text-[36px] sm:text-5xl lg:text-[56px] font-extrabold leading-[1.05] tracking-tight text-[hsl(var(--navy-900))]">
            We exist to{" "}
            <span className="relative inline-block">
              <span
                className="relative z-10 bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, hsl(var(--red-600)), hsl(var(--orange-500)))",
                }}
              >
                rewire
              </span>
              <span
                className="absolute left-0 right-0 bottom-1 h-2 -z-0 rounded-sm opacity-70"
                style={{ background: "hsl(var(--orange-500) / 0.25)" }}
                aria-hidden
              />
            </span>{" "}
            Indian manufacturing.
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[hsl(var(--neutral-700))] max-w-xl leading-relaxed">
            A national, industry-led movement helping manufacturers assess, adopt and scale
            Industry 4.0 — together with India's most trusted ecosystem of enterprises,
            experts, academia and government.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Link to="/#solutions" className="btn-primary group">
              Explore the Platform
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="https://www.smartmfgindia.com/Assesment.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Start Your Assessment
            </a>
          </div>

          <div className="mt-9 grid grid-cols-3 gap-6 max-w-md">
            {[
              { v: "1,200+", l: "Companies" },
              { v: "25", l: "Sectors" },
              { v: "50+", l: "Partners" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-numeric text-2xl font-extrabold text-[hsl(var(--navy-900))]">
                  {s.v}
                </div>
                <div className="text-[11px] uppercase tracking-[0.14em] font-bold text-[hsl(var(--neutral-500))] mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative h-[380px] sm:h-[440px] lg:h-[500px] animate-scale-in">
          <AboutCollage />
        </div>
      </div>
    </section>
  );
};

const AboutCollage = () => {
  return (
    <div className="absolute inset-0">
      <div className="absolute top-2 right-2 w-[82%] cii-card p-5 rotate-[2deg]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--red-600))]">
            <TrendingUp className="h-3.5 w-3.5" />
            Companies Engaged
          </div>
          <span className="text-[10px] text-[hsl(var(--neutral-500))]">2020 — 2025</span>
        </div>
        <div className="mt-3 font-display text-5xl font-extrabold text-[hsl(var(--navy-900))]">
          1,200<span className="text-[hsl(var(--red-600))]">+</span>
        </div>
        <p className="mt-2 text-xs text-[hsl(var(--neutral-700))] leading-relaxed">
          Manufacturers across India assessed on their digital maturity journey.
        </p>
        <div className="mt-3 flex items-end gap-1.5 h-12">
          {[20, 32, 44, 58, 72, 90].map((v, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm"
              style={{
                height: `${v}%`,
                background:
                  i === 5
                    ? "linear-gradient(180deg, hsl(var(--orange-500)), hsl(var(--red-600)))"
                    : "hsl(var(--navy-600) / 0.85)",
              }}
            />
          ))}
        </div>
      </div>

      <div className="absolute top-[46%] left-0 w-[58%] cii-card p-4 -rotate-[3deg]">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--navy-700))]">
          <Factory className="h-3.5 w-3.5" />
          Sectors Covered
        </div>
        <div className="mt-2 font-display text-3xl font-extrabold text-[hsl(var(--navy-900))]">25+</div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {["Auto", "Steel", "Pharma", "F&B", "Textile"].map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded-full text-[10px] font-semibold"
              style={{ background: "hsl(var(--navy-050))", color: "hsl(var(--navy-700))" }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 right-6 cii-card px-4 py-3 rotate-[2deg] flex items-center gap-3">
        <div
          className="h-9 w-9 rounded-md grid place-items-center text-white"
          style={{ background: "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-600)))" }}
        >
          <Users2 className="h-4 w-4" />
        </div>
        <div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--neutral-500))]">
            Ecosystem
          </div>
          <div className="text-sm font-bold text-[hsl(var(--navy-900))]">MSME · ENT · EDU · GOV</div>
        </div>
      </div>

      <div
        className="absolute top-0 left-4 h-12 w-12 rounded-full grid place-items-center text-white shadow-lg"
        style={{
          background: "linear-gradient(135deg, hsl(var(--orange-500)), hsl(var(--red-600)))",
          animation: "float 6s ease-in-out infinite",
        }}
        aria-hidden
      >
        <Compass className="h-5 w-5" />
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};
