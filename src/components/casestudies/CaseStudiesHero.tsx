import { Sparkles, TrendingUp, MapPin, Factory, Leaf, ShieldCheck } from "lucide-react";


interface Props {
  query?: string;
  onQuery?: (v: string) => void;
  onTag?: (tag: string) => void;
}

export const CaseStudiesHero = (_props: Props) => {
  return (
    <section
      className="relative overflow-hidden bg-background border-b"
      style={{ borderColor: "hsl(var(--neutral-150))" }}
      aria-label="Case Studies hero"
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
            <Sparkles className="h-3.5 w-3.5" /> Real Manufacturer Stories
          </span>

          <h1 className="font-display mt-5 text-[36px] sm:text-5xl lg:text-[56px] font-extrabold leading-[1.05] tracking-tight text-[hsl(var(--navy-900))]">
            Case Studies &amp;{" "}
            <span className="text-[hsl(var(--red-600))]">Proof in Practice</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[hsl(var(--neutral-700))] max-w-xl leading-relaxed">
            Discover how manufacturers across sectors are improving productivity, quality,
            traceability, sustainability and competitiveness.
          </p>

          <div className="mt-9 grid grid-cols-3 gap-6 max-w-md">
            {[
              { v: "220+", l: "Stories" },
              { v: "25", l: "Sectors" },
              { v: "18", l: "States" },
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

        <div className="lg:col-span-5 relative h-[420px] sm:h-[480px] lg:h-[520px] animate-scale-in">
          <CaseStudiesHub />
        </div>
      </div>
    </section>
  );
};

const innerNodes = [
  { icon: Gauge, label: "Productivity", color: "hsl(var(--navy-700))" },
  { icon: ShieldCheck, label: "Quality", color: "hsl(var(--india-green))" },
  { icon: Leaf, label: "Energy", color: "hsl(var(--orange-600))" },
  { icon: Network, label: "Traceability", color: "hsl(var(--navy-600))" },
  { icon: Factory, label: "Smart Factory", color: "hsl(var(--red-600))" },
  { icon: Cpu, label: "Automation", color: "hsl(var(--navy-800))" },
  { icon: Boxes, label: "Supply Chain", color: "hsl(var(--orange-500))" },
  { icon: Award, label: "Excellence", color: "hsl(var(--india-green))" },
];

const outerChips = ["Auto", "Pharma", "Steel", "F&B", "Textile", "Electronics"];

const CaseStudiesHub = () => {
  return (
    <div className="absolute inset-0 grid place-items-center">
      {/* Rotating outer ring */}
      <div
        className="absolute h-[420px] w-[420px] rounded-full border-2 border-dashed"
        style={{
          borderColor: "hsl(var(--orange-500) / 0.4)",
          animation: "spin-slow 40s linear infinite",
        }}
        aria-hidden
      />
      <div
        className="absolute h-[300px] w-[300px] rounded-full border border-dashed"
        style={{ borderColor: "hsl(var(--navy-600) / 0.3)" }}
        aria-hidden
      />

      {/* Outer chips */}
      {outerChips.map((label, i) => {
        const angle = (i / outerChips.length) * Math.PI * 2 - Math.PI / 2;
        const r = 210;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        return (
          <div
            key={label}
            className="absolute px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white border shadow-sm"
            style={{
              transform: `translate(${x}px, ${y}px)`,
              borderColor: "hsl(var(--neutral-200))",
              color: "hsl(var(--navy-700))",
            }}
          >
            {label}
          </div>
        );
      })}

      {/* Inner nodes */}
      {innerNodes.map(({ icon: Icon, label, color }, i) => {
        const angle = (i / innerNodes.length) * Math.PI * 2 - Math.PI / 2;
        const r = 150;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        return (
          <div
            key={label}
            className="absolute flex flex-col items-center gap-1"
            style={{
              transform: `translate(${x}px, ${y}px)`,
              animation: `float 6s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          >
            <div
              className="h-12 w-12 rounded-xl grid place-items-center text-white shadow-md"
              style={{ background: color }}
            >
              <Icon className="h-5 w-5" />
            </div>
            <span className="text-[10px] font-bold text-[hsl(var(--navy-900))] whitespace-nowrap">
              {label}
            </span>
          </div>
        );
      })}

      {/* Center hub */}
      <div
        className="relative h-32 w-32 rounded-full grid place-items-center text-white shadow-xl"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--red-600)), hsl(var(--orange-500)))",
        }}
      >
        <div className="text-center">
          <BarChart3 className="h-7 w-7 mx-auto" />
          <div className="mt-1 text-[10px] font-extrabold uppercase tracking-wider leading-tight">
            Proof
            <br />
            in Practice
          </div>
        </div>
      </div>

      {/* Floating outcome badge */}
      <div
        className="absolute top-2 right-2 cii-card px-3 py-2 flex items-center gap-2 rotate-[3deg]"
        style={{ animation: "float 5s ease-in-out infinite" }}
      >
        <TrendingUp className="h-4 w-4 text-[hsl(var(--india-green))]" />
        <div>
          <div className="text-[9px] uppercase tracking-wider font-bold text-[hsl(var(--neutral-500))]">
            Throughput
          </div>
          <div className="text-sm font-extrabold text-[hsl(var(--india-green))] font-numeric">
            +38%
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-4 left-2 cii-card px-3 py-2 flex items-center gap-2 -rotate-[3deg]"
        style={{ animation: "float 7s ease-in-out infinite" }}
      >
        <MapPin className="h-4 w-4 text-[hsl(var(--navy-700))]" />
        <div className="text-[10px] font-bold text-[hsl(var(--navy-900))]">
          18 states · 60 cities
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(var(--tx, 0), var(--ty, 0)) translateY(0); }
          50% { transform: translate(var(--tx, 0), var(--ty, 0)) translateY(-8px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
