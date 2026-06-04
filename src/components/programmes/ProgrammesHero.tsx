import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/programmes-hero.jpg";

interface Props {
  onExplore: () => void;
  onFindPath: () => void;
}

export const ProgrammesHero = ({ onExplore, onFindPath }: Props) => {
  return (
    <section
      className="relative w-full"
      style={{ background: "hsl(var(--neutral-50))" }}
      aria-label="Programmes & Training"
    >
      {/* subtle paper texture / accent */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--navy-100)) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container-cii relative py-16 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="lg:col-span-7 space-y-8 animate-fade-in">
            <div className="flex items-center gap-4">
              <span
                className="px-3 py-1 text-[11px] font-bold tracking-[0.15em] uppercase rounded-sm border"
                style={{
                  background: "hsl(var(--red-100))",
                  color: "hsl(var(--red-700))",
                  borderColor: "hsl(var(--red-100))",
                }}
              >
                Capability Building
              </span>
              <div className="h-px w-8 bg-[hsl(var(--neutral-200))]" />
              <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[hsl(var(--neutral-500))]">
                Industry 4.0
              </span>
            </div>

            <div className="space-y-6">
              <h1
                className="font-display font-bold text-[44px] sm:text-[56px] lg:text-[76px] leading-[1.05] tracking-tight text-[hsl(var(--navy-900))]"
              >
                Programmes{" "}
                <span className="italic font-bold" style={{ color: "hsl(var(--red-600))" }}>
                  &amp;
                </span>
                <br />
                Training
              </h1>
              <p className="text-lg md:text-xl text-[hsl(var(--neutral-700))] max-w-xl leading-relaxed">
                Build Industry 4.0 capabilities through expert-led programmes,
                workshops and transformation learning pathways designed for
                industrial leaders.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExplore}
                className="inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 font-semibold text-white transition-all hover:opacity-90"
                style={{
                  background: "hsl(var(--navy-900))",
                  boxShadow: "0 20px 40px -16px hsl(var(--navy-900) / 0.35)",
                }}
              >
                Explore Programmes
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={onFindPath}
                className="px-8 md:px-10 py-4 md:py-5 border font-semibold text-[hsl(var(--navy-900))] transition-colors hover:bg-[hsl(var(--neutral-100))]"
                style={{ borderColor: "hsl(var(--neutral-200))" }}
              >
                Find Learning Path
              </button>
              <Link
                to="/contact"
                className="text-sm font-bold uppercase tracking-wider text-[hsl(var(--navy-900))] border-b-2 pb-1 transition-colors hover:border-[hsl(var(--red-600))]"
                style={{ borderColor: "hsl(var(--red-100))" }}
              >
                Talk to an advisor
              </Link>
            </div>

            <div className="pt-10 border-t border-[hsl(var(--neutral-150))]">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[hsl(var(--neutral-500))] mb-5">
                Strategic Partners &amp; Faculty
              </p>
              <div className="flex flex-wrap gap-x-10 gap-y-3 text-[hsl(var(--neutral-700))] font-semibold text-sm">
                {["IIT Madras", "Bosch", "Mahindra", "Tata Steel", "Wipro", "Siemens"].map((p) => (
                  <span key={p} className="hover:text-[hsl(var(--navy-900))] transition-colors">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="lg:col-span-5 relative">
            <div
              className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-sm bg-[hsl(var(--neutral-100))]"
            >
              <img
                src={heroImage}
                alt="Industrial leaders in a smart manufacturing learning session"
                width={1200}
                height={1500}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 mix-blend-multiply"
                style={{ background: "hsl(var(--navy-900) / 0.10)" }}
              />
              {/* small accent strip */}
              <div
                className="absolute top-0 left-0 w-1 h-full"
                style={{
                  background:
                    "linear-gradient(to bottom, hsl(var(--saffron)) 0% 33%, #ffffff 33% 66%, hsl(var(--india-green)) 66% 100%)",
                }}
              />
            </div>

            {/* Metrics layer */}
            <div
              className="absolute -bottom-8 left-4 lg:-left-16 bg-white p-8 lg:p-10 border border-[hsl(var(--neutral-150))] hidden md:grid grid-cols-2 gap-x-12 gap-y-8 min-w-[400px]"
              style={{ boxShadow: "0 32px 64px -16px hsl(var(--navy-900) / 0.15)" }}
            >
              {[
                { value: "14,500+", label: "Leaders Trained" },
                { value: "120+", label: "Programmes" },
                { value: "85", label: "Partners" },
                { value: "28", label: "Industries" },
              ].map((s) => (
                <div key={s.label} className="space-y-1.5">
                  <div className="font-numeric font-bold text-3xl lg:text-4xl tracking-tight text-[hsl(var(--navy-900))]">
                    {s.value.endsWith("+") ? (
                      <>
                        {s.value.slice(0, -1)}
                        <span style={{ color: "hsl(var(--red-600))" }}>+</span>
                      </>
                    ) : (
                      s.value
                    )}
                  </div>
                  <div className="text-[10px] font-bold text-[hsl(var(--neutral-500))] uppercase tracking-[0.2em]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
