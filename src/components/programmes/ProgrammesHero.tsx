import { Link } from "react-router-dom";
import { ArrowRight, Search, Sparkles, GraduationCap, Award, Users } from "lucide-react";

interface Props {
  onExplore: () => void;
  onFindPath: () => void;
  query?: string;
  onQuery?: (v: string) => void;
  onTag?: (tag: string) => void;
}

const heroTags = [
  "MSMEs",
  "Beginner",
  "Leadership",
  "AI & Automation",
  "Sustainability",
  "Factory Digitization",
];

export const ProgrammesHero = ({ onExplore, onFindPath, query = "", onQuery, onTag }: Props) => {
  return (
    <section
      className="relative overflow-hidden bg-background border-b"
      style={{ borderColor: "hsl(var(--neutral-150))" }}
      aria-label="Programmes & Training"
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
            <Sparkles className="h-3.5 w-3.5" /> Capability Building Hub
          </span>

          <h1 className="font-display mt-5 text-[36px] sm:text-5xl lg:text-[56px] font-extrabold leading-[1.05] tracking-tight text-[hsl(var(--navy-900))]">
            Programmes, Training &amp;{" "}
            <span className="text-cii-red">Capability Building</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[hsl(var(--neutral-700))] max-w-xl leading-relaxed">
            Build Industry 4.0 capabilities through expert-led programmes, workshops and
            transformation learning pathways designed for industrial leaders.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              onExplore();
            }}
            className="mt-7 relative max-w-2xl"
          >
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-[hsl(var(--neutral-500))]" />
            <input
              type="text"
              value={query}
              onChange={(e) => onQuery?.(e.target.value)}
              placeholder="Search by programme, topic, level or skill area…"
              className="w-full h-14 pl-14 pr-32 rounded-full border bg-white text-sm text-[hsl(var(--neutral-900))] placeholder:text-[hsl(var(--neutral-500))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] shadow-sm transition-shadow"
              style={{ borderColor: "hsl(var(--neutral-200))" }}
              aria-label="Search programmes"
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
                  onExplore();
                }}
                className="h-8 px-3.5 rounded-full text-xs font-semibold border bg-white text-[hsl(var(--navy-700))] hover:border-[hsl(var(--navy-600))] hover:text-[hsl(var(--navy-900))] transition-colors"
                style={{ borderColor: "hsl(var(--neutral-200))" }}
              >
                {t}
              </button>
            ))}
            <button
              type="button"
              onClick={onFindPath}
              className="inline-flex items-center gap-1.5 h-8 px-3.5 rounded-full text-xs font-semibold text-[hsl(var(--red-600))] hover:text-[hsl(var(--red-700))] transition-colors"
            >
              Find learning path <ArrowRight className="h-3 w-3" />
            </button>
          </div>

          <div className="mt-9 grid grid-cols-3 gap-6 max-w-md">
            {[
              { v: "120+", l: "Programmes" },
              { v: "14.5K", l: "Leaders Trained" },
              { v: "85", l: "Partners" },
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
          <ProgrammesCollage />
        </div>
      </div>
    </section>
  );
};

const ProgrammesCollage = () => {
  return (
    <div className="absolute inset-0">
      <div className="absolute top-2 right-2 w-[82%] cii-card p-5 rotate-[2deg]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--red-600))]">
            <GraduationCap className="h-3.5 w-3.5" />
            Live Cohort
          </div>
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[hsl(var(--india-green))]">
            <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--india-green))] animate-pulse" /> Open
          </span>
        </div>
        <div className="mt-2 text-sm font-bold text-[hsl(var(--navy-900))] leading-snug">
          Industry 4.0 Leadership Programme
        </div>
        <div className="mt-3 text-xs text-[hsl(var(--neutral-700))]">
          IIT Madras · 6 weekends · Hybrid
        </div>
        <div className="mt-3 flex items-center -space-x-2">
          {["AR", "PK", "SM", "JV"].map((t, i) => (
            <span
              key={t}
              className="h-7 w-7 rounded-full grid place-items-center text-[10px] font-bold text-white border-2 border-white"
              style={{ background: `hsl(var(--navy-${800 - i * 100}))` }}
            >
              {t}
            </span>
          ))}
          <span className="pl-3 text-[10px] text-[hsl(var(--neutral-500))]">+42 enrolled</span>
        </div>
      </div>

      <div className="absolute top-[46%] left-0 w-[60%] cii-card p-4 -rotate-[3deg]">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--navy-700))]">
          <Award className="h-3.5 w-3.5" />
          Certification
        </div>
        <div className="mt-2 text-sm font-bold text-[hsl(var(--navy-900))] leading-snug">
          Smart Manufacturing Practitioner — Level 2
        </div>
        <div className="mt-3 flex gap-2">
          <span
            className="px-2 py-0.5 rounded-full text-[10px] font-semibold"
            style={{ background: "hsl(var(--orange-100))", color: "hsl(var(--orange-600))" }}
          >
            Co-certified
          </span>
          <span
            className="px-2 py-0.5 rounded-full text-[10px] font-semibold"
            style={{ background: "hsl(var(--navy-050))", color: "hsl(var(--navy-700))" }}
          >
            CII + Bosch
          </span>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 cii-card px-4 py-3 rotate-[2deg] flex items-center gap-3">
        <div
          className="h-9 w-9 rounded-md grid place-items-center text-white"
          style={{ background: "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-600)))" }}
        >
          <Users className="h-4 w-4" />
        </div>
        <div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--neutral-500))]">
            Mentor pool
          </div>
          <div className="text-sm font-bold text-[hsl(var(--navy-900))]">120+ industry experts</div>
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
