import { ArrowRight, BarChart3, TrendingUp, FileText, Sparkles } from "lucide-react";

export const ReportsHero = () => {
  return (
    <section className="relative overflow-hidden bg-background border-b" style={{ borderColor: "hsl(var(--neutral-150))" }}>
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
            <Sparkles className="h-3.5 w-3.5" /> Intelligence Hub · 80+ insights
          </span>

          <h1 className="font-display mt-5 text-[40px] sm:text-5xl lg:text-[60px] font-extrabold leading-[1.04] tracking-tight text-[hsl(var(--navy-900))]">
            Insights &amp;{" "}
            <span className="relative inline-block">
              <span
                className="relative z-10 bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, hsl(var(--red-600)), hsl(var(--orange-500)))" }}
              >
                Reports
              </span>
              <span
                className="absolute left-0 right-0 bottom-1 h-2 -z-0 rounded-sm opacity-70"
                style={{ background: "hsl(var(--orange-500) / 0.25)" }}
                aria-hidden
              />
            </span>
            <br className="hidden sm:block" />
            to accelerate Industry 4.0.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[hsl(var(--neutral-700))] max-w-xl leading-relaxed">
            Explore industry intelligence, research and transformation playbooks
            curated to help Indian manufacturers move from readiness to scale.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#reports" className="btn-primary group">
              Explore Latest Reports
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#collections" className="btn-outline">
              Browse by Industry
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              { v: "80+", l: "Reports" },
              { v: "25", l: "Sectors" },
              { v: "1.2K+", l: "Insights" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-numeric text-2xl font-extrabold text-[hsl(var(--navy-900))]">{s.v}</div>
                <div className="text-[11px] uppercase tracking-[0.14em] font-bold text-[hsl(var(--neutral-500))] mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative h-[380px] sm:h-[440px] lg:h-[500px] animate-scale-in">
          <DashboardCollage />
        </div>
      </div>
    </section>
  );
};

const DashboardCollage = () => {
  return (
    <div className="absolute inset-0">
      {/* main dashboard card */}
      <div className="absolute top-2 right-2 w-[82%] cii-card p-5 rotate-[2deg]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--red-600))]">
            <BarChart3 className="h-3.5 w-3.5" />
            Readiness Index
          </div>
          <span className="text-[10px] text-[hsl(var(--neutral-500))]">2020 — 2025</span>
        </div>
        <div className="mt-3 flex items-end gap-1.5 h-28">
          {[18, 28, 41, 55, 67, 78].map((v, i) => (
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
        <div className="mt-3 flex items-center justify-between">
          <div className="text-xs font-bold text-[hsl(var(--navy-900))]">+45 pts since 2020</div>
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[hsl(var(--india-green))]">
            <TrendingUp className="h-3 w-3" /> +12%
          </span>
        </div>
      </div>

      {/* small insight card */}
      <div className="absolute top-[44%] left-0 w-[60%] cii-card p-4 -rotate-[3deg]">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--navy-700))]">
          <FileText className="h-3.5 w-3.5" />
          Featured Insight
        </div>
        <div className="mt-2 text-sm font-bold text-[hsl(var(--navy-900))] leading-snug">
          Skills are the #1 reported barrier to Industry 4.0 adoption.
        </div>
        <div className="mt-3 flex gap-2">
          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold" style={{ background: "hsl(var(--navy-050))", color: "hsl(var(--navy-700))" }}>
            MSME
          </span>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold" style={{ background: "hsl(var(--orange-100))", color: "hsl(var(--orange-600))" }}>
            Workforce
          </span>
        </div>
      </div>

      {/* KPI pill */}
      <div className="absolute bottom-6 right-6 cii-card px-4 py-3 rotate-[2deg] flex items-center gap-3">
        <div
          className="h-9 w-9 rounded-md grid place-items-center text-white"
          style={{ background: "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-600)))" }}
        >
          <TrendingUp className="h-4 w-4" />
        </div>
        <div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--neutral-500))]">Pilots scaled</div>
          <div className="text-sm font-bold text-[hsl(var(--navy-900))]">+38% YoY</div>
        </div>
      </div>

      {/* floating bubble */}
      <div
        className="absolute top-0 left-4 h-12 w-12 rounded-full grid place-items-center text-white shadow-lg"
        style={{
          background: "linear-gradient(135deg, hsl(var(--orange-500)), hsl(var(--red-600)))",
          animation: "float 6s ease-in-out infinite",
        }}
        aria-hidden
      >
        <Sparkles className="h-5 w-5" />
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
