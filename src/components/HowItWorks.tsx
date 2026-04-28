import { ClipboardCheck, Map, GraduationCap, Handshake } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const steps = [
  { icon: ClipboardCheck, title: "Take the assessment", desc: "Answer a quick questionnaire about your operations." },
  { icon: Map, title: "Get your roadmap", desc: "Receive a personalized Industry 4.0 transformation plan." },
  { icon: GraduationCap, title: "Learn & upskill", desc: "Follow curated paths to close capability gaps fast." },
  { icon: Handshake, title: "Connect with providers", desc: "Engage vetted partners and run successful pilots." },
];

export const HowItWorks = () => {
  useReveal();
  return (
    <section id="how" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-1">How it works</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tight">
            Four steps to a smarter operation
          </h2>
        </div>

        <div className="relative mt-14">
          <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden />
          <ol className="grid gap-8 lg:grid-cols-4">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <li
                  key={s.title}
                  className="reveal relative flex flex-col items-center text-center"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="relative grid h-16 w-16 place-items-center rounded-2xl bg-card border border-border shadow-elegant">
                    <Icon className="h-7 w-7 text-brand-1" />
                    <span className="absolute -top-2 -right-2 grid h-7 w-7 place-items-center rounded-full bg-gradient-primary text-primary-foreground text-xs font-bold shadow-glow">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-[220px]">{s.desc}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};
