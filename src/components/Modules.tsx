import { ArrowUpRight, Gauge, BookOpen, Rocket, Users } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const pillars = [
  {
    icon: Gauge,
    title: "Assess",
    desc: "Benchmark your digital maturity across people, process and technology in 5 minutes.",
    cta: "Take assessment",
  },
  {
    icon: BookOpen,
    title: "Learn",
    desc: "Curated learning paths, certifications and microlearning aligned to your roadmap.",
    cta: "Browse courses",
  },
  {
    icon: Rocket,
    title: "Adopt",
    desc: "Discover proven Industry 4.0 solutions, vetted vendors and pilot-ready use cases.",
    cta: "Find solutions",
  },
  {
    icon: Users,
    title: "Collaborate",
    desc: "Engage with peers, providers, academia and government to scale faster together.",
    cta: "Join community",
  },
];

export const Modules = () => {
  useReveal();
  return (
    <section id="modules" className="py-20 md:py-28 bg-gradient-soft">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-1">The 4 pillars</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tight">
            Everything you need, in one platform
          </h2>
          <p className="mt-4 text-muted-foreground">
            From first assessment to enterprise-wide rollout — built end-to-end for the Industry 4.0 journey.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <article
                key={p.title}
                className="reveal group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-elegant transition-smooth hover:-translate-y-2 hover:shadow-elevated"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-[0.04] transition-smooth" aria-hidden />
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <a href="#" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-1 group/link">
                  {p.cta}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
