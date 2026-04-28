import { ArrowUpRight, Gauge, BookOpen, Rocket, Users } from "lucide-react";
import { useRef } from "react";
import { useReveal } from "@/hooks/use-reveal";
import assessVideo from "@/assets/module-assess.mp4.asset.json";
import learnVideo from "@/assets/module-learn.mp4.asset.json";
import adoptVideo from "@/assets/module-adopt.mp4.asset.json";
import collaborateVideo from "@/assets/module-collaborate.mp4.asset.json";

const pillars = [
  {
    icon: Gauge,
    title: "Assess",
    desc: "Benchmark your digital maturity across people, process and technology in 5 minutes.",
    hover:
      "Get a personalized maturity score, gap analysis and a sector-specific roadmap you can act on immediately.",
    cta: "Take assessment",
    video: assessVideo.url,
  },
  {
    icon: BookOpen,
    title: "Learn",
    desc: "Curated learning paths, certifications and microlearning aligned to your roadmap.",
    hover:
      "Role-based courses from leading academia, hands-on labs and globally recognized Industry 4.0 credentials.",
    cta: "Browse courses",
    video: learnVideo.url,
  },
  {
    icon: Rocket,
    title: "Adopt",
    desc: "Discover proven Industry 4.0 solutions, vetted vendors and pilot-ready use cases.",
    hover:
      "Compare 500+ verified solutions, request quotes and launch pilots with implementation support built in.",
    cta: "Find solutions",
    video: adoptVideo.url,
  },
  {
    icon: Users,
    title: "Collaborate",
    desc: "Engage with peers, providers, academia and government to scale faster together.",
    hover:
      "Join working groups, co-innovate with research labs and unlock policy incentives — all in one network.",
    cta: "Join community",
    video: collaborateVideo.url,
  },
];

export const Modules = () => {
  useReveal();
  const refs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleEnter = (i: number) => {
    const v = refs.current[i];
    if (v) v.play().catch(() => {});
  };
  const handleLeave = (i: number) => {
    const v = refs.current[i];
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };

  return (
    <section id="modules" className="py-20 md:py-28 bg-gradient-soft">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-1">
            The 4 pillars
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tight">
            Everything you need, in one platform
          </h2>
          <p className="mt-4 text-muted-foreground">
            From first assessment to enterprise-wide rollout — built end-to-end
            for the Industry 4.0 journey.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <article
                key={p.title}
                onMouseEnter={() => handleEnter(i)}
                onMouseLeave={() => handleLeave(i)}
                className="reveal group relative overflow-hidden rounded-2xl border border-border bg-card shadow-elegant transition-smooth hover:-translate-y-2 hover:shadow-elevated min-h-[440px] md:min-h-[480px] flex"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Background video */}
                <video
                  ref={(el) => (refs.current[i] = el)}
                  src={p.video}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden
                  className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                {/* Gradient overlays */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-card/20 group-hover:from-foreground/85 group-hover:via-foreground/55 group-hover:to-foreground/30 transition-smooth"
                  aria-hidden
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col p-6 w-full">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold transition-colors group-hover:text-primary-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-primary-foreground/80">
                    {p.desc}
                  </p>

                  {/* Hover-only extra text */}
                  <div className="mt-4 max-h-0 overflow-hidden opacity-0 translate-y-2 transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100 group-hover:translate-y-0">
                    <p className="text-sm leading-relaxed text-primary-foreground/90 border-l-2 border-brand-2 pl-3">
                      {p.hover}
                    </p>
                  </div>

                  <a
                    href="#"
                    className="mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-1 group-hover:text-primary-foreground group/link"
                  >
                    {p.cta}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
