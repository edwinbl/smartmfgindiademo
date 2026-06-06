import { Gauge, BookOpen, Network, Workflow, ArrowUpRight } from "lucide-react";

const pillars = [
  {
    icon: Gauge,
    title: "Assess",
    desc: "Understand readiness and opportunities through structured maturity assessments.",
    tone: "navy",
  },
  {
    icon: BookOpen,
    title: "Learn",
    desc: "Access reports, insights, case studies and curated research.",
    tone: "orange",
  },
  {
    icon: Network,
    title: "Connect",
    desc: "Discover ecosystem partners, experts and solution providers.",
    tone: "green",
  },
  {
    icon: Workflow,
    title: "Transform",
    desc: "Enable practical adoption pathways and capability building.",
    tone: "red",
  },
] as const;

const toneStyles = {
  navy: { bg: "hsl(var(--navy-050))", fg: "hsl(var(--navy-700))" },
  orange: { bg: "hsl(var(--orange-100))", fg: "hsl(var(--orange-600))" },
  green: { bg: "hsl(var(--india-green) / 0.10)", fg: "hsl(var(--india-green))" },
  red: { bg: "hsl(var(--red-100))", fg: "hsl(var(--red-600))" },
};

export const AboutPillars = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-cii">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="section-eyebrow mb-3">About CII Smart Manufacturing</div>
            <h2 className="font-display text-3xl md:text-[40px] font-extrabold leading-[1.1] tracking-tight text-[hsl(var(--navy-900))]">
              A platform built to move Indian manufacturing forward.
            </h2>
            <p className="mt-5 text-base text-[hsl(var(--neutral-700))] leading-relaxed">
              CII Smart Manufacturing is an industry-led, mission-driven platform that
              helps manufacturers progress through every stage of their transformation —
              from assessing where they stand today to discovering what's possible next.
            </p>
            <p className="mt-3 text-base text-[hsl(var(--neutral-700))] leading-relaxed">
              Built with India's most trusted ecosystem of enterprises, experts, academia
              and government, the platform is anchored in one belief: smart manufacturing
              is a journey, and every manufacturer deserves a practical path forward.
            </p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {pillars.map((p) => {
              const Icon = p.icon;
              const s = toneStyles[p.tone];
              return (
                <div
                  key={p.title}
                  className="group cii-card p-6 hover:-translate-y-1 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="h-11 w-11 rounded-xl grid place-items-center transition-transform group-hover:scale-110"
                      style={{ background: s.bg, color: s.fg }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-[hsl(var(--neutral-500))] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="mt-4 font-display text-xl font-bold text-[hsl(var(--navy-900))]">
                    {p.title}
                  </div>
                  <p className="mt-1.5 text-sm text-[hsl(var(--neutral-700))] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
