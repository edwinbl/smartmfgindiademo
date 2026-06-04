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

      <div className="container-cii relative py-10 md:py-14 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Content */}
          <div className="lg:col-span-7 space-y-5 animate-fade-in">
            <div className="flex items-center gap-3">
              <span
                className="px-2.5 py-0.5 text-[11px] font-semibold tracking-[0.12em] uppercase rounded-sm border"
                style={{
                  background: "hsl(var(--red-100))",
                  color: "hsl(var(--red-700))",
                  borderColor: "hsl(var(--red-100))",
                }}
              >
                Capability Building
              </span>
              <div className="h-px w-6 bg-[hsl(var(--neutral-200))]" />
              <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[hsl(var(--neutral-500))]">
                Industry 4.0
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="font-display font-semibold text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.1] tracking-tight text-[hsl(var(--navy-900))]">
                Programmes{" "}
                <span className="italic font-semibold" style={{ color: "hsl(var(--red-600))" }}>
                  &amp;
                </span>{" "}
                Training
              </h1>
              <p className="text-base md:text-lg text-[hsl(var(--neutral-700))] max-w-lg leading-relaxed">
                Build Industry 4.0 capabilities through expert-led programmes,
                workshops and transformation learning pathways designed for
                industrial leaders.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={onExplore}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{
                  background: "hsl(var(--navy-900))",
                  boxShadow: "0 12px 24px -10px hsl(var(--navy-900) / 0.25)",
                }}
              >
                Explore Programmes
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={onFindPath}
                className="px-6 py-3 border text-sm font-semibold text-[hsl(var(--navy-900))] transition-colors hover:bg-[hsl(var(--neutral-100))]"
                style={{ borderColor: "hsl(var(--neutral-200))" }}
              >
                Find Learning Path
              </button>
              <Link
                to="/contact"
                className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--navy-900))] border-b-2 pb-0.5 transition-colors hover:border-[hsl(var(--red-600))]"
                style={{ borderColor: "hsl(var(--red-100))" }}
              >
                Talk to an advisor
              </Link>
            </div>

            <div className="pt-6 border-t border-[hsl(var(--neutral-150))]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[hsl(var(--neutral-500))] mb-3">
                Strategic Partners &amp; Faculty
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-2 text-[hsl(var(--neutral-700))] font-medium text-sm">
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
            <div className="relative aspect-[4/5] max-h-[420px] overflow-hidden rounded-sm shadow-sm bg-[hsl(var(--neutral-100))]">
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
              className="absolute -bottom-6 left-4 lg:-left-12 bg-white p-5 lg:p-6 border border-[hsl(var(--neutral-150))] hidden md:grid grid-cols-2 gap-x-8 gap-y-5 min-w-[280px]"
              style={{ boxShadow: "0 20px 40px -12px hsl(var(--navy-900) / 0.12)" }}
            >
              {[
                { value: "14,500+", label: "Leaders Trained" },
                { value: "120+", label: "Programmes" },
                { value: "85", label: "Partners" },
                { value: "28", label: "Industries" },
              ].map((s) => (
                <div key={s.label} className="space-y-1">
                  <div className="font-numeric font-semibold text-xl lg:text-2xl tracking-tight text-[hsl(var(--navy-900))]">
                    {s.value.endsWith("+") ? (
                      <>
                        {s.value.slice(0, -1)}
                        <span style={{ color: "hsl(var(--red-600))" }}>+</span>
                      </>
                    ) : (
                      s.value
                    )}
                  </div>
                  <div className="text-[10px] font-semibold text-[hsl(var(--neutral-500))] uppercase tracking-[0.15em]">
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
