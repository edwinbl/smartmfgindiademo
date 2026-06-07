import { Link } from "react-router-dom";
import { ArrowRight, Search, Sparkles, GraduationCap, Award, Users, BookOpen, PlayCircle, Trophy, CheckCircle2, TrendingUp } from "lucide-react";

interface Props {
  onExplore: () => void;
  onFindPath: () => void;
  query?: string;
  onQuery?: (v: string) => void;
  onTag?: (tag: string) => void;
}

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
            <span className="text-[hsl(var(--red-600))]">Capability Building</span>
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

          <div className="mt-6">
            <button
              type="button"
              onClick={onFindPath}
              className="inline-flex items-center gap-1.5 h-9 px-4 rounded-full text-sm font-semibold text-[hsl(var(--red-600))] hover:text-[hsl(var(--red-700))] transition-colors"
            >
              Find learning path <ArrowRight className="h-3.5 w-3.5" />
            </button>
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
  const modules = [
    { icon: PlayCircle, label: "Foundations of Industry 4.0", status: "done" },
    { icon: BookOpen, label: "Smart Factory Design", status: "active" },
    { icon: Trophy, label: "Capstone & Certification", status: "todo" },
  ];

  return (
    <div className="absolute inset-0">
      {/* Learning path card - main */}
      <div className="absolute top-4 right-2 w-[86%] cii-card p-5 rotate-[2deg]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--red-600))]">
            <GraduationCap className="h-3.5 w-3.5" />
            Learning Path
          </div>
          <span className="text-[10px] font-semibold text-[hsl(var(--neutral-500))]">3 modules · 12 wks</span>
        </div>
        <div className="mt-2 text-sm font-bold text-[hsl(var(--navy-900))] leading-snug">
          Smart Manufacturing Leader
        </div>

        <div className="mt-4 space-y-2.5">
          {modules.map((m, i) => {
            const Icon = m.icon;
            const isDone = m.status === "done";
            const isActive = m.status === "active";
            return (
              <div key={i} className="flex items-center gap-3">
                <div
                  className="h-7 w-7 rounded-full grid place-items-center shrink-0"
                  style={{
                    background: isDone
                      ? "hsl(var(--india-green) / 0.15)"
                      : isActive
                      ? "hsl(var(--orange-500) / 0.18)"
                      : "hsl(var(--neutral-100))",
                    color: isDone
                      ? "hsl(var(--india-green))"
                      : isActive
                      ? "hsl(var(--orange-600))"
                      : "hsl(var(--neutral-500))",
                  }}
                >
                  {isDone ? <CheckCircle2 className="h-4 w-4" /> : <Icon className="h-3.5 w-3.5" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[12px] font-semibold text-[hsl(var(--navy-900))] truncate">
                    {m.label}
                  </div>
                  <div className="mt-1 h-1 rounded-full bg-[hsl(var(--neutral-100))] overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: isDone ? "100%" : isActive ? "55%" : "0%",
                        background: isDone
                          ? "hsl(var(--india-green))"
                          : "linear-gradient(90deg, hsl(var(--orange-500)), hsl(var(--red-600)))",
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Certificate badge */}
      <div className="absolute bottom-8 left-0 w-[58%] cii-card p-4 -rotate-[4deg]">
        <div className="flex items-center gap-3">
          <div
            className="h-12 w-12 rounded-full grid place-items-center shrink-0 text-white shadow-md"
            style={{
              background: "linear-gradient(135deg, hsl(var(--orange-500)), hsl(var(--red-600)))",
            }}
          >
            <Award className="h-6 w-6" />
          </div>
          <div>
            <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--neutral-500))]">
              Certificate Earned
            </div>
            <div className="text-[12px] font-bold text-[hsl(var(--navy-900))] leading-snug mt-0.5">
              Industry 4.0 Practitioner
            </div>
            <div className="mt-1 text-[10px] text-[hsl(var(--neutral-700))]">CII · Verified credential</div>
          </div>
        </div>
      </div>

      {/* Live cohort pill */}
      <div className="absolute bottom-2 right-4 cii-card px-3.5 py-2.5 rotate-[2deg] flex items-center gap-2.5">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--india-green))] opacity-70" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[hsl(var(--india-green))]" />
        </span>
        <div>
          <div className="text-[9px] font-bold uppercase tracking-wider text-[hsl(var(--neutral-500))]">Live now</div>
          <div className="text-[11px] font-bold text-[hsl(var(--navy-900))]">42 learners in cohort</div>
        </div>
      </div>

      {/* Floating book icon */}
      <div
        className="absolute top-0 left-6 h-11 w-11 rounded-2xl grid place-items-center text-white shadow-lg rotate-[-8deg]"
        style={{
          background: "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-600)))",
          animation: "float 6s ease-in-out infinite",
        }}
        aria-hidden
      >
        <BookOpen className="h-5 w-5" />
      </div>

      {/* Floating sparkle */}
      <div
        className="absolute top-[40%] right-0 h-9 w-9 rounded-full grid place-items-center text-white shadow-lg"
        style={{
          background: "linear-gradient(135deg, hsl(var(--orange-500)), hsl(var(--red-600)))",
          animation: "float 7s ease-in-out infinite",
        }}
        aria-hidden
      >
        <Sparkles className="h-4 w-4" />
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(-8deg); }
          50% { transform: translateY(-10px) rotate(-8deg); }
        }
      `}</style>
    </div>
  );
};
