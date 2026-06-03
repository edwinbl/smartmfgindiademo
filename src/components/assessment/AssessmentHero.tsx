import { ArrowRight, Gauge, TrendingUp, Activity, CheckCircle2 } from "lucide-react";

export const AssessmentHero = () => {
  return (
    <section
      className="relative overflow-hidden text-white"
      aria-label="Readiness Assessment Hero"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(var(--navy-900)) 0%, hsl(var(--navy-800)) 60%, hsl(var(--navy-700)) 100%)",
        }}
      />
      <div className="absolute inset-0 blueprint-grid opacity-60" />
      <div
        className="absolute -top-40 -right-40 w-[720px] h-[720px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--orange-500) / 0.28), hsl(var(--orange-500) / 0) 60%)",
        }}
      />
      <div className="absolute left-0 top-0 bottom-0 w-1 tricolor-stripe" />

      <div className="container-cii relative pt-16 pb-20 md:pt-20 md:pb-28 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <div>
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 border"
            style={{
              background: "hsl(var(--orange-500) / 0.14)",
              borderColor: "hsl(var(--orange-500) / 0.4)",
            }}
          >
            <Gauge className="h-3.5 w-3.5 text-cii-orange" />
            <span className="eyebrow text-[hsl(var(--orange-100))]">
              Readiness Assessment
            </span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[52px] leading-[1.08] tracking-tight">
            Understand Where You Stand{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, hsl(var(--orange-500)) 0%, hsl(var(--saffron)) 100%)",
              }}
            >
              Before Deciding
            </span>{" "}
            What to Do Next
          </h1>

          <p className="mt-5 text-base md:text-lg text-white/80 max-w-xl">
            A guided readiness assessment helps manufacturers evaluate maturity
            across operations, data, workforce and supply chain — so investment
            decisions are grounded in business outcomes, not technology trends.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="https://www.smartmfgindia.com/Assesment.aspx" className="btn-primary">
              Start Assessment <ArrowRight className="!h-4 !w-4" />
            </a>
            <a href="/contact" className="btn-ghost">
              Request Assessment Access
            </a>
          </div>

          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href="#overview" className="text-white/75 hover:text-white inline-flex items-center gap-1.5">
              View Sample Output <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a href="#journey" className="text-white/75 hover:text-white inline-flex items-center gap-1.5">
              Learn How It Works <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Readiness dashboard visual */}
        <div className="relative">
          <div className="rounded-xl bg-white/[0.06] border border-white/15 backdrop-blur-sm p-5 sm:p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-5">
              <div>
                <div className="eyebrow text-white/60">Readiness snapshot</div>
                <div className="font-display font-bold text-base mt-1">Plant 04 — Pune</div>
              </div>
              <span
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold"
                style={{
                  background: "hsl(var(--india-green) / 0.18)",
                  color: "hsl(140 70% 75%)",
                  border: "1px solid hsl(var(--india-green) / 0.35)",
                }}
              >
                <Activity className="h-3 w-3" /> Live
              </span>
            </div>

            {/* Maturity dial */}
            <div className="flex items-center gap-5 mb-6">
              <div className="relative h-28 w-28 shrink-0">
                <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                  <circle cx="50" cy="50" r="42" stroke="hsl(0 0% 100% / 0.12)" strokeWidth="8" fill="none" />
                  <circle
                    cx="50" cy="50" r="42" fill="none" strokeWidth="8" strokeLinecap="round"
                    stroke="hsl(var(--orange-500))"
                    strokeDasharray={`${(68 / 100) * 264} 264`}
                  />
                </svg>
                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-center">
                    <div className="font-numeric font-extrabold text-2xl">68</div>
                    <div className="text-[10px] uppercase tracking-wider text-white/60">Score</div>
                  </div>
                </div>
              </div>
              <div className="flex-1 space-y-2.5">
                {[
                  { l: "Operations", v: 78 },
                  { l: "Data & Visibility", v: 62 },
                  { l: "Workforce", v: 71 },
                ].map((d) => (
                  <div key={d.l}>
                    <div className="flex justify-between text-[11px] text-white/75 mb-1">
                      <span>{d.l}</span>
                      <span className="font-numeric font-semibold">{d.v}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${d.v}%`, background: "linear-gradient(90deg, hsl(var(--orange-500)), hsl(var(--saffron)))" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* KPI tiles */}
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { l: "Quality", v: "+12%", icon: CheckCircle2 },
                { l: "OEE", v: "74.2", icon: TrendingUp },
                { l: "Energy", v: "-8%", icon: Activity },
              ].map(({ l, v, icon: Icon }) => (
                <div key={l} className="rounded-md bg-white/[0.06] border border-white/10 p-2.5">
                  <Icon className="h-3.5 w-3.5 text-cii-orange mb-1" />
                  <div className="font-numeric font-bold text-sm">{v}</div>
                  <div className="text-[10px] text-white/60 uppercase tracking-wide">{l}</div>
                </div>
              ))}
            </div>

            {/* Mini sparkline */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] uppercase tracking-wide text-white/60">Readiness trend</span>
                <span className="text-[11px] text-white/70 font-numeric">+9 pts / 90d</span>
              </div>
              <svg viewBox="0 0 200 40" className="w-full h-10">
                <polyline
                  fill="none"
                  stroke="hsl(var(--orange-500))"
                  strokeWidth="2"
                  points="0,32 25,28 50,30 75,22 100,24 125,18 150,14 175,12 200,8"
                />
                <polyline
                  fill="url(#g)"
                  stroke="none"
                  points="0,32 25,28 50,30 75,22 100,24 125,18 150,14 175,12 200,8 200,40 0,40"
                  opacity="0.3"
                />
                <defs>
                  <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--orange-500))" />
                    <stop offset="100%" stopColor="hsl(var(--orange-500))" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="absolute -z-10 -bottom-6 -left-6 w-40 h-40 rounded-full bg-cii-orange/15 blur-2xl" />
        </div>
      </div>
    </section>
  );
};
