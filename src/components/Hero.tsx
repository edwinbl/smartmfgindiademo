import { ArrowRight, Sparkles, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-dashboard.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-hero">
      <div className="absolute inset-0 grid-pattern opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" aria-hidden />
      <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-brand-2/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-brand-1/20 blur-3xl" aria-hidden />

      <div className="container relative grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="text-center lg:text-left animate-slide-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-brand-1" />
            Built for India's Industry 4.0 ecosystem
          </span>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
            Accelerate Your{" "}
            <span className="text-gradient">Industry 4.0</span> Journey
          </h1>

          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
            One unified platform to assess your digital maturity, learn the right skills,
            adopt proven solutions and collaborate with India's leading Industry 4.0 ecosystem.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
            <Button variant="hero" size="lg" className="w-full sm:w-auto group">
              Start Digital Assessment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full">
              <PlayCircle className="h-4 w-4" />
              Explore Solutions
            </Button>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
            {[
              { v: "12K+", l: "MSMEs onboarded" },
              { v: "350+", l: "Tech providers" },
              { v: "98%", l: "Adoption uplift" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl bg-card/70 backdrop-blur border border-border p-3 text-center shadow-sm">
                <dt className="text-xl font-bold font-display text-foreground">{s.v}</dt>
                <dd className="text-[11px] text-muted-foreground mt-0.5">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative animate-fade-in">
          <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-20 rounded-[3rem]" aria-hidden />
          <div className="relative rounded-3xl border border-border bg-card/80 backdrop-blur shadow-elevated p-3">
            <img
              src={heroImg}
              alt="Industry 4.0 connected dashboard preview"
              width={1280}
              height={960}
              className="rounded-2xl w-full h-auto"
            />
            <div className="absolute -left-4 top-12 hidden sm:flex items-center gap-2 rounded-2xl bg-card border border-border shadow-elegant px-3 py-2 animate-float">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-medium">Maturity score: <b>72%</b></span>
            </div>
            <div className="absolute -right-4 bottom-12 hidden sm:flex items-center gap-2 rounded-2xl bg-card border border-border shadow-elegant px-3 py-2 animate-float [animation-delay:1.5s]">
              <span className="h-2 w-2 rounded-full bg-brand-1" />
              <span className="text-xs font-medium">3 new providers matched</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
