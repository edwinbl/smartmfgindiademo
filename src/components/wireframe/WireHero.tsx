import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import { HeroEcosystemViz } from "./HeroEcosystemViz";

export const WireHero = () => {
  return (
    <section className="relative overflow-hidden text-white min-h-screen flex items-center" aria-label="Hero">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(var(--navy-900)) 0%, hsl(var(--navy-800)) 60%, hsl(var(--navy-700)) 100%)",
        }}
      />
      <div className="absolute inset-0 blueprint-grid opacity-60" />
      {/* Orange glow */}
      <div
        className="absolute -top-40 -right-40 w-[720px] h-[720px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--orange-500) / 0.32), hsl(var(--orange-500) / 0) 60%)",
        }}
      />
      {/* Tricolor stripe */}
      <div className="absolute left-0 top-0 bottom-0 w-1 tricolor-stripe" />

      <div className="container-cii relative pt-8 pb-12 md:pt-10 md:pb-16 grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-center">
        <div>
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 border"
            style={{ background: "hsl(var(--orange-500) / 0.14)", borderColor: "hsl(var(--orange-500) / 0.4)" }}
          >
            <Sparkles className="h-3.5 w-3.5 text-cii-orange" />
            <span className="eyebrow text-[hsl(var(--orange-100))]">A CII National Initiative</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tight">
            Enabling India’s{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, hsl(var(--orange-500)) 0%, hsl(var(--saffron)) 100%)" }}
            >
              Smart Manufacturing
            </span>
            <br />
            Transformation
          </h1>

          <p className="mt-5 text-base md:text-lg text-white/80 max-w-xl whitespace-pre-line">
            Powered by the right knowledge, pathways & ecosystem connections,
            companies are accelerating from Assessment to Execution
            and from Intent to Scaled Industry 4.0 Outcomes.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="https://www.smartmfgindia.com/Assesment.aspx" className="btn-primary">
              Access Maturity Assessments <ArrowRight className="!h-4 !w-4" />
            </a>
            <a
              href="#solutions"
              className="btn-ghost"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth", block: "start" });
                history.replaceState(null, "", "#solutions");
              }}
            >
              Explore Solutions
            </a>
          </div>

          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event("open-assistant"))}
            className="mt-5 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            Ask the Smart Manufacturing Assistant →
          </button>

        </div>

        {/* Visual */}
        <HeroEcosystemViz />
      </div>
    </section>
  );
};
