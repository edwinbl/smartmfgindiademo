export const WireHero = () => {
  return (
    <section aria-label="Hero" className="border-b border-border py-12 md:py-20">
      <div className="container">
        <div className="mb-6">
          <span className="wire-section-tag">Section 1 — Hero</span>
        </div>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="font-semibold text-3xl md:text-5xl leading-tight tracking-tight text-foreground">
              India's Industry 4.0 adoption gateway for MSMEs
            </h1>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl">
              Assess readiness, explore practical solutions, access CII programmes, and find
              relevant support for smart manufacturing adoption.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a href="#assessment" className="wire-cta-primary">Start Readiness Assessment</a>
              <a href="#solutions" className="wire-cta-secondary">Explore Solutions</a>
            </div>
            <a href="#chatbot" className="mt-5 inline-block text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground">
              Ask the Smart Manufacturing Assistant →
            </a>
          </div>

          <div className="wire-placeholder border border-dashed border-border rounded-sm aspect-[4/3] grid place-items-center">
            <span className="text-sm font-mono text-muted-foreground">[ Hero visual placeholder ]</span>
          </div>
        </div>
      </div>
    </section>
  );
};
