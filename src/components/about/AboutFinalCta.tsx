import { ArrowRight } from "lucide-react";

export const AboutFinalCta = () => {
  return (
    <section className="relative overflow-hidden text-white" style={{ background: "hsl(var(--navy-900))" }}>
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(60% 70% at 50% 0%, hsl(var(--orange-500)/0.45), transparent 60%), radial-gradient(60% 70% at 50% 100%, hsl(var(--red-600)/0.45), transparent 60%)",
        }}
        aria-hidden
      />
      <div className="container-cii relative py-24 lg:py-32 text-center">
        <span className="cii-chip cii-chip-orange mx-auto">Take the Next Step</span>
        <h2 className="font-display mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-[1.05]">
          Join India&apos;s Digital Manufacturing Movement.
        </h2>
        <p className="mt-6 text-white/75 text-lg max-w-2xl mx-auto">
          Start your transformation today — or partner with us to scale Industry 4.0 across India.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://www.smartmfgindia.com/Assesment.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group"
          >
            Start Assessment
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="https://www.smartmfgindia.com/Assesment.aspx#SmartContactus"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Partner With Us
          </a>
        </div>
        <div
          className="absolute bottom-0 inset-x-0 h-1"
          style={{
            background:
              "linear-gradient(to right, hsl(var(--saffron)) 0% 33%, #fff 33% 66%, hsl(var(--india-green)) 66% 100%)",
          }}
        />
      </div>
    </section>
  );
};
