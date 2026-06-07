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
          <IndiaStoriesMap />
        </div>
      </div>
    </section>
  );
};

// Approximate India outline (stylized, not geographically precise) on a 600x640 viewBox.
const INDIA_PATH =
  "M300 30 C 340 40 360 70 380 95 C 410 105 445 100 470 120 C 485 145 470 170 450 185 C 470 210 495 230 500 265 C 510 305 495 340 470 365 C 460 395 470 430 455 460 C 440 495 410 520 380 540 C 360 560 340 580 320 595 C 305 615 285 625 270 605 C 255 580 245 555 240 525 C 225 495 205 470 195 440 C 180 410 175 375 165 345 C 150 315 130 290 130 255 C 130 220 145 190 165 165 C 175 140 185 115 205 95 C 220 75 240 55 265 45 C 280 35 290 30 300 30 Z";

// Pin coordinates (x,y) on the 600x640 viewBox, with case-study metadata
const pins = [
  { x: 235, y: 200, city: "Ludhiana", state: "Punjab", sector: "Textile", kpi: "+34% OEE", color: "hsl(var(--orange-500))" },
  { x: 290, y: 240, city: "Delhi NCR", state: "Delhi", sector: "Electronics", kpi: "+28% Yield", color: "hsl(var(--navy-700))" },
  { x: 215, y: 305, city: "Ahmedabad", state: "Gujarat", sector: "Pharma", kpi: "-22% Energy", color: "hsl(var(--india-green))" },
  { x: 380, y: 290, city: "Lucknow", state: "U.P.", sector: "Auto Parts", kpi: "+41% Throughput", color: "hsl(var(--red-600))" },
  { x: 320, y: 360, city: "Indore", state: "M.P.", sector: "F&B", kpi: "99.2% Quality", color: "hsl(var(--navy-600))" },
  { x: 260, y: 425, city: "Pune", state: "Maharashtra", sector: "Automotive", kpi: "+38% Throughput", color: "hsl(var(--orange-600))" },
  { x: 440, y: 405, city: "Jamshedpur", state: "Jharkhand", sector: "Steel", kpi: "-18% Scrap", color: "hsl(var(--navy-800))" },
  { x: 305, y: 495, city: "Bengaluru", state: "Karnataka", sector: "Aerospace", kpi: "+45% Cycle", color: "hsl(var(--india-green))" },
  { x: 355, y: 555, city: "Chennai", state: "Tamil Nadu", sector: "Auto", kpi: "+32% OEE", color: "hsl(var(--red-600))" },
];

const IndiaStoriesMap = () => {
  return (
    <div className="absolute inset-0 grid place-items-center">
      {/* Soft halo behind map */}
      <div
        className="absolute h-[420px] w-[420px] rounded-full blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--orange-500) / 0.25), transparent 70%)",
        }}
        aria-hidden
      />

      <svg
        viewBox="0 0 600 640"
        className="relative h-full w-full max-h-[520px]"
        aria-label="Map of India with case study locations"
      >
        <defs>
          <linearGradient id="indiaFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(var(--navy-800))" stopOpacity="0.95" />
            <stop offset="100%" stopColor="hsl(var(--navy-600))" stopOpacity="0.85" />
          </linearGradient>
          <pattern id="dots" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="hsl(var(--orange-500) / 0.35)" />
          </pattern>
        </defs>

        {/* Map silhouette */}
        <path d={INDIA_PATH} fill="url(#indiaFill)" />
        <path d={INDIA_PATH} fill="url(#dots)" />
        <path
          d={INDIA_PATH}
          fill="none"
          stroke="hsl(var(--orange-500))"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity="0.7"
        />

        {/* Pings + pins */}
        {pins.map((p, i) => (
          <g key={p.city} style={{ animation: `ping-pin 3s ease-out ${i * 0.25}s infinite` }}>
            <circle cx={p.x} cy={p.y} r="14" fill={p.color} opacity="0.18" className="origin-center" />
            <circle cx={p.x} cy={p.y} r="7" fill={p.color} opacity="0.35" />
            <circle cx={p.x} cy={p.y} r="4" fill={p.color} />
            <circle cx={p.x} cy={p.y} r="1.8" fill="white" />
          </g>
        ))}
      </svg>

      {/* Floating story cards */}
      <div
        className="absolute top-4 left-0 cii-card px-3 py-2 flex items-center gap-2 -rotate-[4deg] bg-white"
        style={{ animation: "float 6s ease-in-out infinite" }}
      >
        <div
          className="h-8 w-8 rounded-lg grid place-items-center text-white"
          style={{ background: "hsl(var(--orange-600))" }}
        >
          <Factory className="h-4 w-4" />
        </div>
        <div>
          <div className="text-[9px] uppercase tracking-wider font-bold text-[hsl(var(--neutral-500))]">
            Pune · Auto
          </div>
          <div className="text-sm font-extrabold text-[hsl(var(--navy-900))] font-numeric">
            +38% Throughput
          </div>
        </div>
      </div>

      <div
        className="absolute top-1/3 right-0 cii-card px-3 py-2 flex items-center gap-2 rotate-[3deg] bg-white"
        style={{ animation: "float 7s ease-in-out infinite 0.6s" }}
      >
        <div
          className="h-8 w-8 rounded-lg grid place-items-center text-white"
          style={{ background: "hsl(var(--india-green))" }}
        >
          <Leaf className="h-4 w-4" />
        </div>
        <div>
          <div className="text-[9px] uppercase tracking-wider font-bold text-[hsl(var(--neutral-500))]">
            Ahmedabad · Pharma
          </div>
          <div className="text-sm font-extrabold text-[hsl(var(--india-green))] font-numeric">
            -22% Energy
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-6 left-2 cii-card px-3 py-2 flex items-center gap-2 -rotate-[3deg] bg-white"
        style={{ animation: "float 8s ease-in-out infinite 1.1s" }}
      >
        <div
          className="h-8 w-8 rounded-lg grid place-items-center text-white"
          style={{ background: "hsl(var(--red-600))" }}
        >
          <ShieldCheck className="h-4 w-4" />
        </div>
        <div>
          <div className="text-[9px] uppercase tracking-wider font-bold text-[hsl(var(--neutral-500))]">
            Chennai · Auto
          </div>
          <div className="text-sm font-extrabold text-[hsl(var(--navy-900))] font-numeric">
            +32% OEE
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-2 right-2 cii-card px-3 py-2 flex items-center gap-2 rotate-[2deg] bg-white"
        style={{ animation: "float 6.5s ease-in-out infinite 0.3s" }}
      >
        <MapPin className="h-4 w-4 text-[hsl(var(--navy-700))]" />
        <div className="text-[10px] font-bold text-[hsl(var(--navy-900))]">
          18 states · 60 cities
        </div>
      </div>

      <div
        className="absolute top-2 right-4 cii-card px-3 py-2 flex items-center gap-2 rotate-[4deg] bg-white"
        style={{ animation: "float 7.5s ease-in-out infinite 1.4s" }}
      >
        <TrendingUp className="h-4 w-4 text-[hsl(var(--india-green))]" />
        <div className="text-[10px] font-bold text-[hsl(var(--navy-900))]">
          220+ stories
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(var(--r, 0deg)); }
          50% { transform: translateY(-8px) rotate(var(--r, 0deg)); }
        }
        @keyframes ping-pin {
          0% { opacity: 1; }
          70% { opacity: 0.6; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

