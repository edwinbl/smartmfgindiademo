import { ArrowRight } from "lucide-react";

export const AssessmentCta = () => (
  <section className="relative overflow-hidden text-white">
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(135deg, hsl(var(--navy-900)) 0%, hsl(var(--navy-700)) 100%)",
      }}
    />
    <div className="absolute inset-0 blueprint-grid opacity-50" />
    <div
      className="absolute -top-32 -right-32 w-[520px] h-[520px] pointer-events-none"
      style={{
        background:
          "radial-gradient(circle, hsl(var(--orange-500) / 0.25), hsl(var(--orange-500) / 0) 60%)",
      }}
    />
    <div className="container-cii relative py-16 md:py-24 text-center max-w-3xl">
      <div className="section-eyebrow mb-3 text-[hsl(var(--orange-100))]">Get started</div>
      <h2 className="font-display font-extrabold text-3xl md:text-[44px] leading-[1.1] tracking-tight">
        Start Your Readiness Journey
      </h2>
      <p className="mt-5 text-base md:text-lg text-white/80">
        Understand your current readiness before deciding where to invest, adopt
        or transform. The assessment takes under an hour — and shapes the next
        several years of your transformation roadmap.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a href="https://www.smartmfgindia.com/Assesment.aspx" className="btn-primary">
          Start Current Assessment <ArrowRight className="!h-4 !w-4" />
        </a>
        <a href="/contact" className="btn-ghost">
          Request Assessment Support
        </a>
      </div>
    </div>
  </section>
);
