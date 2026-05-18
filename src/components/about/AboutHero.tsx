import { ArrowRight, Sparkles, TrendingUp, Factory, Users2, Compass } from "lucide-react";
import { Link } from "react-router-dom";

export const AboutHero = () => {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ background: "hsl(var(--navy-900))" }}
      aria-label="About hero"
    >
      {/* Editorial background: diagonal split + soft washes */}
      <div className="absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(0 0% 100%/0.6) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%/0.6) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse at 70% 40%, black 30%, transparent 75%)",
          }}
        />
        <div
          className="absolute -top-40 left-1/3 h-[34rem] w-[34rem] rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--orange-500)/0.7), transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 h-[28rem] w-[28rem] blur-3xl opacity-25"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--red-600)/0.6), transparent 70%)",
          }}
        />
        {/* Diagonal accent line */}
        <svg
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <line
            x1="0" y1="100" x2="100" y2="0"
            stroke="hsl(var(--orange-500)/0.35)"
            strokeWidth="0.15"
            strokeDasharray="0.6 0.8"
          />
        </svg>
      </div>

      <div className="container-cii relative py-20 lg:py-28">
        {/* Top eyebrow row */}
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-white/55">
          <span className="h-px w-10 bg-white/30" />
          <span>Chapter 01 — Who We Are</span>
        </div>

        <div className="mt-6 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left — editorial manifesto */}
          <div className="lg:col-span-7 animate-fade-in">
            <span className="cii-chip cii-chip-orange">
              <Sparkles className="h-3.5 w-3.5" /> Our Mission
            </span>

            <h1 className="font-display mt-5 text-[2.5rem] sm:text-5xl lg:text-[5.25rem] font-extrabold leading-[0.98] tracking-tight">
              We exist to{" "}
              <span className="relative inline-block">
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, hsl(var(--orange-500)), hsl(var(--saffron)))",
                  }}
                >
                  rewire
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12" preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M2 8 Q 50 1, 100 7 T 198 5"
                    fill="none"
                    stroke="hsl(var(--orange-500))"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.7"
                  />
                </svg>
              </span>
              <br />
              Indian manufacturing.
            </h1>

            <p className="mt-7 text-base sm:text-lg text-white/75 max-w-xl leading-relaxed">
              A national, industry-led movement helping manufacturers assess, adopt
              and scale Industry 4.0 — together with India's most trusted ecosystem
              of enterprises, experts, academia and government.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link to="/#solutions" className="btn-primary group">
                Explore the Platform
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="https://www.smartmfgindia.com/Assesment.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Start Your Assessment
              </a>
            </div>
          </div>

          {/* Right — bento mosaic */}
          <div className="lg:col-span-5 animate-scale-in">
            <BentoMosaic />
          </div>
        </div>

        {/* Bottom marquee strip — pillars */}
        <div className="mt-14 lg:mt-20 relative">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-white/45 mb-4">
            <span>What drives us</span>
            <span className="h-px flex-1 bg-white/10" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
            {[
              { k: "Convened by", v: "CII" },
              { k: "Built for", v: "Indian MSMEs" },
              { k: "Anchored in", v: "Industry 4.0" },
              { k: "Scaled by", v: "Ecosystem" },
            ].map((m) => (
              <div
                key={m.v}
                className="px-5 py-5 bg-[hsl(var(--navy-900))]/60 hover:bg-[hsl(var(--navy-800))]/70 transition-colors"
              >
                <div className="text-[10px] uppercase tracking-widest text-white/45">{m.k}</div>
                <div className="mt-1 font-display text-lg font-bold text-white">{m.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, hsl(0 0% 100%/0.2), transparent)",
        }}
      />
    </section>
  );
};

const BentoMosaic = () => {
  return (
    <div className="relative grid grid-cols-6 grid-rows-6 gap-3 h-[440px] lg:h-[520px]">
      {/* Big stat card */}
      <div
        className="col-span-4 row-span-3 rounded-2xl p-5 border border-white/15 backdrop-blur-sm relative overflow-hidden group"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--orange-500)/0.18), hsl(var(--navy-800)/0.6))",
        }}
      >
        <div className="flex items-start justify-between">
          <span className="text-[10px] uppercase tracking-widest text-white/60">Companies Engaged</span>
          <TrendingUp className="h-4 w-4 text-cii-orange" />
        </div>
        <div className="mt-6 font-display text-5xl lg:text-6xl font-extrabold tracking-tight">
          1,200<span className="text-cii-orange">+</span>
        </div>
        <p className="mt-2 text-xs text-white/65 max-w-[18rem]">
          Manufacturers across India assessed on their digital maturity journey.
        </p>
        <div
          className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full opacity-40 group-hover:opacity-60 transition-opacity"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--orange-500)/0.6), transparent 70%)",
          }}
        />
      </div>

      {/* Compass card */}
      <div className="col-span-2 row-span-3 rounded-2xl p-4 border border-white/15 bg-white/[0.04] backdrop-blur-sm flex flex-col justify-between">
        <Compass className="h-5 w-5 text-cii-orange animate-[pulse_3s_ease-in-out_infinite]" />
        <div>
          <div className="text-[10px] uppercase tracking-widest text-white/55">Guided</div>
          <div className="font-display text-lg font-bold leading-tight mt-1">
            Assessment-led pathways
          </div>
        </div>
      </div>

      {/* Sectors */}
      <div className="col-span-2 row-span-3 rounded-2xl p-4 border border-white/15 bg-white/[0.04] backdrop-blur-sm flex flex-col justify-between">
        <Factory className="h-5 w-5 text-cii-orange" />
        <div>
          <div className="font-display text-3xl font-extrabold">25+</div>
          <div className="text-[11px] text-white/60 mt-0.5">Sectors covered</div>
        </div>
      </div>

      {/* Ecosystem card */}
      <div
        className="col-span-4 row-span-3 rounded-2xl p-5 border border-white/15 backdrop-blur-sm relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--navy-700)/0.7), hsl(var(--red-600)/0.25))",
        }}
      >
        <div className="flex items-start justify-between">
          <span className="text-[10px] uppercase tracking-widest text-white/60">Ecosystem</span>
          <Users2 className="h-4 w-4 text-white/80" />
        </div>
        <div className="mt-4 flex -space-x-2">
          {["MSME", "ENT", "EDU", "GOV", "EXP"].map((t, i) => (
            <div
              key={t}
              className="h-10 w-10 rounded-full grid place-items-center text-[10px] font-bold border border-white/30 backdrop-blur"
              style={{
                background: `hsl(var(--navy-${800 - i * 100})/0.85)`,
              }}
            >
              {t}
            </div>
          ))}
          <div className="h-10 w-10 rounded-full grid place-items-center text-[10px] font-bold border border-white/30 bg-cii-orange/80">
            +
          </div>
        </div>
        <p className="mt-4 text-xs text-white/70 max-w-[16rem]">
          A coalition of industry, academia, government & global partners.
        </p>
      </div>
    </div>
  );
};
