import { ArrowRight, Sparkles, GraduationCap, Factory, Cpu } from "lucide-react";
import { programmes } from "@/data/programmes";

interface Props {
  onExplore: () => void;
  onFindPath: () => void;
  query?: string;
  onQuery?: (v: string) => void;
  onTag?: (tag: string) => void;
}

export const ProgrammesHero = ({ onExplore, onFindPath }: Props) => {
  return (
    <section
      className="relative overflow-hidden bg-background border-b h-[calc(100svh-72px)] flex items-center"
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

      <div className="container-cii relative grid lg:grid-cols-12 gap-10 lg:gap-16 items-center py-10">
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

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onExplore}
              className="inline-flex items-center gap-2 h-11 px-6 rounded-full text-sm font-bold uppercase tracking-wider text-white"
              style={{
                background: "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-600)))",
              }}
            >
              Explore Programmes <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={onFindPath}
              className="inline-flex items-center gap-1.5 h-11 px-5 rounded-full text-sm font-semibold text-[hsl(var(--red-600))] hover:text-[hsl(var(--red-700))] transition-colors"
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
  const now = Date.now();
  const upcoming = programmes
    .filter((p) => (p.status === "open" || p.status === "soon") && new Date(p.isoDate).getTime() >= now)
    .sort((a, b) => new Date(a.isoDate).getTime() - new Date(b.isoDate).getTime())
    .slice(0, 3);

  return (
    <div className="absolute inset-0 grid place-items-center">
      <div
        className="absolute h-[360px] w-[360px] rounded-full blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--orange-500) / 0.22), transparent 70%)",
        }}
        aria-hidden
      />
      <div className="relative w-full max-w-sm space-y-3">
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] font-bold text-[hsl(var(--neutral-500))]">
          <GraduationCap className="h-3.5 w-3.5 text-[hsl(var(--red-600))]" /> Upcoming programmes
        </div>
        {upcoming.map((p, i) => {
          const Icon = i === 0 ? Cpu : i === 1 ? Sparkles : Factory;
          return (
            <article
              key={p.slug}
              className="cii-card bg-white p-4 flex items-start gap-3 shadow-sm"
              style={{ animation: `float 7s ease-in-out infinite ${i * 0.4}s` }}
            >
              <div
                className="h-10 w-10 rounded-md grid place-items-center text-white shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-600)))",
                }}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-[0.12em] font-bold text-[hsl(var(--neutral-500))]">
                  {p.type} · {p.startDate.split("·")[0].trim()}
                </div>
                <div className="text-sm font-extrabold text-[hsl(var(--navy-900))] leading-snug line-clamp-2">
                  {p.title}
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </div>
  );
};
