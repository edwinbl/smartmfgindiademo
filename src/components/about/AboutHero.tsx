import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const AboutHero = () => {
  return (
    <section className="relative overflow-hidden text-white" style={{ background: "hsl(var(--navy-900))" }}>
      {/* Background layers */}
      <div className="absolute inset-0 blueprint-grid opacity-40" aria-hidden />
      <div
        className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-40 animate-[pulse_8s_ease-in-out_infinite]"
        style={{ background: "radial-gradient(circle, hsl(var(--orange-500)/0.6), transparent 70%)" }}
        aria-hidden
      />
      <div
        className="absolute -bottom-40 -right-20 h-[32rem] w-[32rem] rounded-full blur-3xl opacity-30 animate-[pulse_10s_ease-in-out_infinite]"
        style={{ background: "radial-gradient(circle, hsl(var(--navy-500)/0.8), transparent 70%)" }}
        aria-hidden
      />

      <div className="container-cii relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[88vh] py-20 lg:py-28">
        {/* Left */}
        <div className="animate-fade-in">
          <span className="cii-chip cii-chip-orange">
            <Sparkles className="h-3.5 w-3.5" /> Our Mission
          </span>
          <h1 className="font-display mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
            Accelerating India&apos;s{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, hsl(var(--orange-500)), hsl(var(--saffron)))",
              }}
            >
              Industry 4.0
            </span>{" "}
            Transformation
          </h1>
          <p className="mt-6 text-base sm:text-lg text-white/75 max-w-xl leading-relaxed">
            A national, industry-led platform helping manufacturers assess, adopt and scale
            digital transformation — together with India&apos;s most trusted ecosystem of
            enterprises, experts, academia and government.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
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
          <div className="mt-10 flex items-center gap-6 text-xs text-white/60 uppercase tracking-wider">
            <span>Convened by CII</span>
            <span className="h-3 w-px bg-white/20" />
            <span>For Indian MSMEs</span>
            <span className="h-3 w-px bg-white/20" />
            <span>Industry 4.0 Ready</span>
          </div>
        </div>

        {/* Right — ecosystem visual */}
        <div className="relative h-[420px] lg:h-[520px] animate-scale-in">
          <EcosystemOrbit />
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

const EcosystemOrbit = () => {
  const nodes = [
    { label: "MSMEs", angle: 0 },
    { label: "Enterprises", angle: 51 },
    { label: "Tech", angle: 102 },
    { label: "Academia", angle: 153 },
    { label: "Govt", angle: 205 },
    { label: "Experts", angle: 256 },
    { label: "Global", angle: 308 },
  ];
  return (
    <div className="absolute inset-0 grid place-items-center">
      {/* Rings */}
      {[0.55, 0.78, 1].map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-white/10"
          style={{
            width: `${s * 100}%`,
            height: `${s * 100}%`,
            animation: `gear-spin ${30 + i * 10}s linear infinite ${i % 2 ? "reverse" : ""}`,
          }}
          aria-hidden
        />
      ))}
      {/* Center */}
      <div className="relative z-10 grid place-items-center h-28 w-28 rounded-full border border-white/20 backdrop-blur-sm"
        style={{ background: "linear-gradient(135deg, hsl(var(--orange-500)/0.9), hsl(var(--red-600)/0.9))" }}>
        <div className="text-center">
          <div className="text-[10px] font-bold uppercase tracking-widest text-white/80">CII</div>
          <div className="text-sm font-extrabold">Platform</div>
        </div>
      </div>
      {/* Nodes */}
      {nodes.map((n) => {
        const rad = (n.angle * Math.PI) / 180;
        const r = 42; // percent
        const x = 50 + r * Math.cos(rad);
        const y = 50 + r * Math.sin(rad);
        return (
          <div
            key={n.label}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <div className="px-3 py-1.5 rounded-full text-[11px] font-semibold bg-white/10 backdrop-blur border border-white/20 text-white whitespace-nowrap">
              {n.label}
            </div>
          </div>
        );
      })}
    </div>
  );
};
