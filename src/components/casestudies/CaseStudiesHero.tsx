import { Sparkles, TrendingUp, Factory, Leaf, ShieldCheck, Quote, Award, BarChart3 } from "lucide-react";

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
        </div>

        <div className="lg:col-span-5 relative h-[420px] sm:h-[480px] lg:h-[520px] animate-scale-in">
          <IndiaStoriesMap />
        </div>
      </div>
    </section>
  );
};

// More accurate India outline path (simplified from public-domain India geo data, viewBox 0 0 600 700)
const INDIA_PATH =
  "M252 38 L268 32 L286 36 L298 50 L316 52 L334 46 L352 44 L370 52 L382 68 L398 74 L418 70 L438 76 L452 90 L466 96 L482 92 L490 104 L484 120 L470 128 L454 126 L444 136 L450 152 L440 164 L450 180 L470 192 L488 210 L500 232 L504 256 L498 280 L484 296 L470 306 L458 322 L460 344 L470 364 L468 386 L456 406 L450 428 L438 448 L424 466 L414 488 L402 508 L388 528 L372 546 L354 562 L336 578 L318 594 L308 612 L296 626 L282 634 L268 626 L260 610 L256 590 L250 568 L242 548 L232 528 L222 508 L214 488 L206 466 L196 444 L186 422 L176 400 L166 380 L156 362 L146 348 L136 338 L126 332 L118 322 L114 308 L116 292 L122 276 L130 260 L138 244 L144 228 L148 212 L150 196 L152 180 L158 164 L168 150 L180 138 L190 124 L196 108 L204 92 L214 78 L228 66 L242 54 Z M388 96 L408 98 L426 108 L440 124 L432 138 L416 142 L398 134 L386 120 L382 106 Z M482 140 L498 152 L510 168 L508 184 L494 190 L482 178 L476 162 Z";

// Pin coordinates (x,y) on the 600x700 viewBox, with case-study metadata
const pins = [
  { x: 218, y: 130, city: "Ludhiana", state: "Punjab", sector: "Textile", kpi: "+34% OEE", color: "hsl(var(--orange-500))" },
  { x: 260, y: 170, city: "Delhi NCR", state: "Delhi", sector: "Electronics", kpi: "+28% Yield", color: "hsl(var(--navy-700))" },
  { x: 178, y: 260, city: "Ahmedabad", state: "Gujarat", sector: "Pharma", kpi: "-22% Energy", color: "hsl(var(--india-green))" },
  { x: 320, y: 240, city: "Lucknow", state: "U.P.", sector: "Auto Parts", kpi: "+41% Throughput", color: "hsl(var(--red-600))" },
  { x: 250, y: 310, city: "Indore", state: "M.P.", sector: "F&B", kpi: "99.2% Quality", color: "hsl(var(--navy-600))" },
  { x: 218, y: 370, city: "Pune", state: "Maharashtra", sector: "Automotive", kpi: "+38% Throughput", color: "hsl(var(--orange-600))" },
  { x: 360, y: 320, city: "Jamshedpur", state: "Jharkhand", sector: "Steel", kpi: "-18% Scrap", color: "hsl(var(--navy-800))" },
  { x: 260, y: 460, city: "Bengaluru", state: "Karnataka", sector: "Aerospace", kpi: "+45% Cycle", color: "hsl(var(--india-green))" },
  { x: 292, y: 540, city: "Chennai", state: "Tamil Nadu", sector: "Auto", kpi: "+32% OEE", color: "hsl(var(--red-600))" },
];

const IndiaStoriesMap = () => {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div
        className="absolute h-[420px] w-[420px] rounded-full blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--orange-500) / 0.18), transparent 70%)",
        }}
        aria-hidden
      />

      <svg
        viewBox="0 0 600 700"
        className="relative h-full w-full max-h-[520px]"
        aria-label="Map of India with case study locations"
      >
        <defs>
          <pattern id="dots" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1" fill="hsl(var(--navy-700) / 0.18)" />
          </pattern>
        </defs>

        {/* Map outline only (no fill) */}
        <path d={INDIA_PATH} fill="url(#dots)" fillRule="evenodd" opacity="0.6" />
        <path
          d={INDIA_PATH}
          fill="none"
          stroke="hsl(var(--navy-800))"
          strokeWidth="2"
          strokeLinejoin="round"
          fillRule="evenodd"
        />
        <path
          d={INDIA_PATH}
          fill="none"
          stroke="hsl(var(--red-600))"
          strokeWidth="1"
          strokeDasharray="3 5"
          opacity="0.55"
          fillRule="evenodd"
        />

        {/* Pings + pins */}
        {pins.map((p, i) => (
          <g key={p.city} style={{ animation: `ping-pin 3s ease-out ${i * 0.25}s infinite` }}>
            <circle cx={p.x} cy={p.y} r="14" fill={p.color} opacity="0.15" />
            <circle cx={p.x} cy={p.y} r="7" fill={p.color} opacity="0.30" />
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
