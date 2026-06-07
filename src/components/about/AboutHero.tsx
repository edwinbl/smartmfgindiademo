import { Sparkles } from "lucide-react";
import aboutHeroImg from "@/assets/about-hero-smart-factory.jpg";

export const AboutHero = () => {
  return (
    <section
      className="relative overflow-hidden bg-background border-b"
      style={{ borderColor: "hsl(var(--neutral-150))" }}
      aria-label="About hero"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1100px 500px at 85% 0%, hsl(var(--orange-500) / 0.10), transparent 60%), radial-gradient(900px 600px at 0% 100%, hsl(var(--navy-600) / 0.12), transparent 55%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--neutral-200) / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--neutral-200) / 0.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
        aria-hidden
      />

      <div className="container-cii relative grid lg:grid-cols-12 gap-10 lg:gap-16 items-center py-14 lg:py-20">
        <div className="lg:col-span-6 animate-fade-in">
          <span className="cii-chip">
            <Sparkles className="h-3.5 w-3.5" /> About the Platform
          </span>

          <h1 className="font-display mt-5 text-[36px] sm:text-5xl lg:text-[56px] font-extrabold leading-[1.05] tracking-tight text-[hsl(var(--navy-900))]">
            Accelerating India's{" "}
            <span className="text-cii-red">Smart Manufacturing</span>{" "}
            Transformation
          </h1>
        </div>

        <div className="lg:col-span-6 relative h-[340px] sm:h-[420px] lg:h-[500px] animate-scale-in rounded-2xl overflow-hidden shadow-xl ring-1 ring-[hsl(var(--neutral-200))]">
          <img
            src={aboutHeroImg}
            alt="Smart manufacturing factory floor with robotic arms and Industry 4.0 dashboards"
            className="absolute inset-0 h-full w-full object-cover"
            width={1280}
            height={1024}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, hsl(var(--navy-900) / 0) 40%, hsl(var(--navy-900) / 0.35) 100%)",
            }}
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
};

