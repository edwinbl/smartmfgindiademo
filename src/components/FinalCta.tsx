import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/use-reveal";

export const FinalCta = () => {
  useReveal();
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="reveal relative overflow-hidden rounded-3xl bg-gradient-cta px-6 py-16 md:px-16 md:py-20 text-center text-primary-foreground shadow-elevated">
          <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden />
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-brand-2/30 blur-3xl" aria-hidden />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-brand-3/30 blur-3xl" aria-hidden />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-medium border border-white/20">
              <Sparkles className="h-3.5 w-3.5" /> Free • No signup needed
            </span>
            <h2 className="mt-6 font-display text-3xl md:text-5xl font-extrabold tracking-tight max-w-2xl mx-auto leading-tight">
              Not sure where to start?
            </h2>
            <p className="mt-4 text-base md:text-lg text-primary-foreground/85 max-w-xl mx-auto">
              Take a 5-minute readiness check and get an instant personalized roadmap for your factory.
            </p>
            <Button
              size="xl"
              className="mt-8 bg-background text-foreground hover:bg-background/90 rounded-full shadow-elevated group"
            >
              Take a 5-min readiness check
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
