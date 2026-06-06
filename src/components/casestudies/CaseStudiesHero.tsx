import { Search, Sparkles, TrendingUp, Factory, MapPin, Gauge } from "lucide-react";

interface Props {
  query?: string;
  onQuery?: (v: string) => void;
  onTag?: (tag: string) => void;
}

const heroTags = [
  "Productivity",
  "Quality",
  "Energy",
  "Traceability",
  "MSME",
  "Smart Factory",
];

export const CaseStudiesHero = ({ query = "", onQuery, onTag }: Props) => {
  const focusResults = () => {
    const el = document.getElementById("all");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
            <span className="relative inline-block">
              <span
                className="relative z-10 bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, hsl(var(--red-600)), hsl(var(--orange-500)))",
                }}
              >
                Proof in Practice
              </span>
              <span
                className="absolute left-0 right-0 bottom-1 h-2 -z-0 rounded-sm opacity-70"
                style={{ background: "hsl(var(--orange-500) / 0.25)" }}
                aria-hidden
              />
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[hsl(var(--neutral-700))] max-w-xl leading-relaxed">
            Discover how manufacturers across sectors are improving productivity, quality,
            traceability, sustainability and competitiveness.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              focusResults();
            }}
            className="mt-7 relative max-w-2xl"
          >
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-[hsl(var(--neutral-500))]" />
            <input
              type="text"
              value={query}
              onChange={(e) => onQuery?.(e.target.value)}
              placeholder="Search by sector, company, state or business outcome…"
              className="w-full h-14 pl-14 pr-32 rounded-full border bg-white text-sm text-[hsl(var(--neutral-900))] placeholder:text-[hsl(var(--neutral-500))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] shadow-sm transition-shadow"
              style={{ borderColor: "hsl(var(--neutral-200))" }}
              aria-label="Search case studies"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-10 px-5 rounded-full text-xs font-bold uppercase tracking-wider text-white"
              style={{
                background: "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-600)))",
              }}
            >
              Search
            </button>
          </form>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="text-[11px] uppercase tracking-[0.14em] font-bold text-[hsl(var(--neutral-500))] mr-1">
              Popular
            </span>
            {heroTags.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => {
                  onTag?.(t);
                  focusResults();
                }}
                className="h-8 px-3.5 rounded-full text-xs font-semibold border bg-white text-[hsl(var(--navy-700))] hover:border-[hsl(var(--navy-600))] hover:text-[hsl(var(--navy-900))] transition-colors"
                style={{ borderColor: "hsl(var(--neutral-200))" }}
              >
                {t}
              </button>
            ))}
          </div>

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

        <div className="lg:col-span-5 relative h-[380px] sm:h-[440px] lg:h-[500px] animate-scale-in">
          <CaseStudiesCollage />
        </div>
      </div>
    </section>
  );
};

const CaseStudiesCollage = () => {
  return (
    <div className="absolute inset-0">
      <div className="absolute top-2 right-2 w-[82%] cii-card p-5 rotate-[2deg]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--red-600))]">
            <Gauge className="h-3.5 w-3.5" />
            Outcome Snapshot
          </div>
          <span className="text-[10px] text-[hsl(var(--neutral-500))]">Tier-2 MSME</span>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-[hsl(var(--neutral-500))] font-bold">
              Throughput
            </div>
            <div className="mt-1 font-display text-2xl font-extrabold text-[hsl(var(--india-green))]">
              +38%
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-[hsl(var(--neutral-500))] font-bold">
              Defects
            </div>
            <div className="mt-1 font-display text-2xl font-extrabold text-[hsl(var(--india-green))]">
              −62%
            </div>
          </div>
        </div>
        <p className="mt-3 text-xs text-[hsl(var(--neutral-700))] leading-relaxed">
          Auto-component plant, Pune — 9-month Industry 4.0 rollout.
        </p>
      </div>

      <div className="absolute top-[46%] left-0 w-[60%] cii-card p-4 -rotate-[3deg]">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--navy-700))]">
          <Factory className="h-3.5 w-3.5" />
          Featured Sectors
        </div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {["Auto", "Pharma", "Steel", "F&B", "Textile", "Electronics"].map((t) => (
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
          <MapPin className="h-4 w-4" />
        </div>
        <div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--neutral-500))]">
            Pan-India
          </div>
          <div className="text-sm font-bold text-[hsl(var(--navy-900))]">18 states · 60 cities</div>
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
        <TrendingUp className="h-5 w-5" />
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
