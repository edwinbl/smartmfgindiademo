import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Gauge, BookOpen, Network, Workflow } from "lucide-react";

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
            <Sparkles className="h-3.5 w-3.5" /> About the Platform
          </span>

          <h1 className="font-display mt-5 text-[36px] sm:text-5xl lg:text-[56px] font-extrabold leading-[1.05] tracking-tight text-[hsl(var(--navy-900))]">
            Accelerating India's{" "}
            <span className="text-[hsl(var(--red-600))]">
              Smart Manufacturing
            </span>{" "}
            Transformation
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[hsl(var(--neutral-700))] max-w-xl leading-relaxed">
            Helping manufacturers assess readiness, discover solutions, learn from peers
            and build capabilities for sustainable growth, competitiveness and operational
            excellence.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Link to="/readiness-assessment" className="btn-primary group">
              Take Readiness Assessment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link to="/programmes" className="btn-outline">
              Explore Programmes &amp; Training
            </Link>
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
          <EcosystemNetworkViz />
        </div>
      </div>
    </section>
  );
};

const EcosystemNetworkViz = () => {
  const nodes = [
    { icon: Gauge, label: "Assess", x: 50, y: 18, color: "var(--navy-700)" },
    { icon: BookOpen, label: "Learn", x: 14, y: 48, color: "var(--orange-500)" },
    { icon: Network, label: "Connect", x: 86, y: 48, color: "var(--india-green)" },
    { icon: Workflow, label: "Transform", x: 50, y: 82, color: "var(--red-600)" },
  ];

  return (
    <div className="absolute inset-0">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id="line-grad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--navy-600))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--orange-500))" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {nodes.map((n, i) =>
          nodes.slice(i + 1).map((m, j) => (
            <line
              key={`${i}-${j}`}
              x1={n.x} y1={n.y} x2={m.x} y2={m.y}
              stroke="url(#line-grad)"
              strokeWidth="0.3"
              strokeDasharray="0.8 0.6"
            />
          ))
        )}
      </svg>

      {/* Central hub */}
      <div
        className="absolute h-20 w-20 rounded-full grid place-items-center text-white shadow-xl"
        style={{
          left: "50%", top: "50%", transform: "translate(-50%, -50%)",
          background: "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-600)))",
        }}
      >
        <div className="text-center">
          <div className="font-display font-extrabold text-sm leading-tight">CII</div>
          <div className="text-[8px] uppercase tracking-widest opacity-80">Smart Mfg</div>
        </div>
        <span
          className="absolute inset-0 rounded-full"
          style={{
            boxShadow: "0 0 0 8px hsl(var(--orange-500) / 0.10), 0 0 0 20px hsl(var(--orange-500) / 0.05)",
          }}
          aria-hidden
        />
      </div>

      {/* Orbit nodes */}
      {nodes.map((n) => {
        const Icon = n.icon;
        return (
          <div
            key={n.label}
            className="absolute flex flex-col items-center gap-1.5"
            style={{ left: `${n.x}%`, top: `${n.y}%`, transform: "translate(-50%, -50%)" }}
          >
            <div
              className="h-14 w-14 rounded-2xl border bg-white grid place-items-center shadow-md"
              style={{ borderColor: "hsl(var(--neutral-150))" }}
            >
              <Icon className="h-6 w-6" style={{ color: `hsl(${n.color})` }} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--navy-900))] bg-white/80 backdrop-blur px-2 py-0.5 rounded">
              {n.label}
            </span>
          </div>
        );
      })}

      <div
        className="absolute top-0 left-2 h-10 w-10 rounded-full grid place-items-center text-white shadow-lg"
        style={{
          background: "linear-gradient(135deg, hsl(var(--orange-500)), hsl(var(--red-600)))",
          animation: "float 6s ease-in-out infinite",
        }}
        aria-hidden
      >
        <Sparkles className="h-4 w-4" />
      </div>

      <style>{`
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
      `}</style>
    </div>
  );
};
