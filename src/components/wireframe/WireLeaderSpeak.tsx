import { WireSection } from "./WireSection";
import { Play, Quote, ArrowRight } from "lucide-react";

export const WireLeaderSpeak = () => {
  return (
    <WireSection id="leader-speak" alt>
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] items-center">
        {/* Video placeholder */}
        <div className="relative">
          <div
            className="relative rounded-lg overflow-hidden aspect-video shadow-2xl border border-[hsl(var(--neutral-150))] group cursor-pointer"
            style={{
              background:
                "linear-gradient(135deg, hsl(var(--navy-900)) 0%, hsl(var(--navy-700)) 100%)",
            }}
            role="button"
            aria-label="Play leader message"
          >
            <div className="absolute inset-0 blueprint-grid opacity-40" />
            <div
              className="absolute -bottom-24 -right-24 w-[420px] h-[420px] pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, hsl(var(--orange-500) / 0.28), hsl(var(--orange-500) / 0) 60%)",
              }}
            />
            <div className="absolute inset-0 grid place-items-center">
              <div className="h-20 w-20 rounded-full bg-white/95 grid place-items-center shadow-2xl transition-transform group-hover:scale-110">
                <Play className="h-7 w-7 text-cii-red ml-1" fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
              <span className="cii-chip cii-chip-orange">Leader Message</span>
              <span className="text-xs font-semibold text-white/80">02:48</span>
            </div>
          </div>
          <div className="absolute -z-10 -bottom-6 -left-6 w-40 h-40 rounded-full bg-cii-red/10 blur-2xl" />
        </div>

        {/* Copy */}
        <div>
          <div className="section-eyebrow mb-3">Leader Speak</div>
          <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-tight tracking-tight text-navy-800">
            A message from CII leadership
          </h2>
          <p className="mt-5 text-base md:text-lg text-[hsl(var(--neutral-700))] max-w-xl">
            Hear from CII leadership on the role of smart manufacturing in strengthening
            India's manufacturing competitiveness.
          </p>

          <div className="mt-7 p-5 rounded-md border border-[hsl(var(--neutral-150))] bg-white relative">
            <Quote className="absolute -top-3 left-5 h-6 w-6 text-cii-orange bg-white px-1" />
            <p className="text-sm text-[hsl(var(--neutral-700))] leading-relaxed italic">
              "Industry 4.0 adoption is no longer optional for India's MSMEs — it is the foundation
              for global competitiveness, quality leadership and sustainable growth."
            </p>
            <div className="mt-4 pt-4 border-t border-[hsl(var(--neutral-150))]">
              <div className="font-display font-bold text-navy-800 text-sm">Mr. Dilip Sawhney</div>
              <div className="text-xs text-[hsl(var(--neutral-500))] mt-0.5 leading-relaxed">
                Chairman, CII National Committee on Smart Manufacturing, and Managing Director, Rockwell Automation India Pvt Ltd
              </div>
            </div>
          </div>

          <div className="mt-7">
            <a href="#" className="btn-primary">
              Watch message <ArrowRight className="!h-4 !w-4" />
            </a>
          </div>
        </div>
      </div>
    </WireSection>
  );
};
