import { ArrowRight, Network, Sparkles } from "lucide-react";

export const ContactHero = () => {
  return (
    <section className="relative overflow-hidden" style={{ background: "hsl(var(--navy-050))" }}>
      <div
        className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-50"
        style={{ background: "radial-gradient(circle, hsl(var(--orange-500)/0.35), transparent 70%)" }}
        aria-hidden
      />
      <div
        className="absolute -bottom-40 -left-20 h-[32rem] w-[32rem] rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(circle, hsl(var(--navy-500)/0.35), transparent 70%)" }}
        aria-hidden
      />

      <div className="container-cii relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-24">
        <div className="animate-fade-in">
          <span className="cii-chip">
            <Sparkles className="h-3.5 w-3.5" /> We're here to help
          </span>
          <h1 className="font-display mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-[hsl(var(--navy-900))]">
            How Can We{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(90deg, hsl(var(--red-600)), hsl(var(--orange-500)))",
              }}
            >
              Help You?
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[hsl(var(--neutral-700))] max-w-xl leading-relaxed">
            Connect with the right team for assessments, ecosystem partnerships, training,
            platform support, and Industry 4.0 transformation guidance.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#intent" className="btn-primary group">
              Start Your Journey
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#ecosystem" className="btn-outline">
              <Network className="h-4 w-4" />
              Explore the Ecosystem
            </a>
          </div>
        </div>

        <div className="relative h-[360px] lg:h-[460px] animate-scale-in">
          <HeroViz />
        </div>
      </div>
    </section>
  );
};

const HeroViz = () => {
  const nodes = [
    { label: "Assess", angle: 0 },
    { label: "Guide", angle: 60 },
    { label: "Enable", angle: 120 },
    { label: "Connect", angle: 180 },
    { label: "Train", angle: 240 },
    { label: "Recognise", angle: 300 },
  ];
  return (
    <div className="absolute inset-0 grid place-items-center">
      {[0.55, 0.78, 1].map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full border"
          style={{
            width: `${s * 100}%`,
            height: `${s * 100}%`,
            borderColor: "hsl(var(--navy-700) / 0.12)",
            animation: `gear-spin ${30 + i * 10}s linear infinite ${i % 2 ? "reverse" : ""}`,
          }}
          aria-hidden
        />
      ))}
      <div
        className="relative z-10 grid place-items-center h-28 w-28 rounded-full text-white"
        style={{ background: "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-600)))" }}
      >
        <div className="text-center">
          <div className="text-[10px] font-bold uppercase tracking-widest text-white/70">Connect</div>
          <div className="text-sm font-extrabold">Ecosystem</div>
        </div>
      </div>
      {nodes.map((n) => {
        const rad = (n.angle * Math.PI) / 180;
        const r = 42;
        const x = 50 + r * Math.cos(rad);
        const y = 50 + r * Math.sin(rad);
        return (
          <div
            key={n.label}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <div
              className="px-3 py-1.5 rounded-full text-[11px] font-semibold bg-white border whitespace-nowrap shadow-sm"
              style={{ borderColor: "hsl(var(--navy-100))", color: "hsl(var(--navy-800))" }}
            >
              {n.label}
            </div>
          </div>
        );
      })}
    </div>
  );
};
