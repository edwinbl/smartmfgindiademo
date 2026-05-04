import { WireSection } from "./WireSection";
import { ArrowRight, Mail } from "lucide-react";

export const WireFinalCta = () => {
  return (
    <WireSection id="contact" alt>
      <div className="text-center max-w-3xl mx-auto">
        <div className="section-eyebrow mb-3">Section 10 — Get in touch</div>
        <h2 className="font-display font-bold text-[32px] md:text-[44px] leading-tight tracking-tight text-navy-800">
          Not sure where to begin?
        </h2>
        <p className="mt-5 text-base md:text-lg text-[hsl(var(--neutral-700))]">
          CII can help you find the right starting point for your smart manufacturing journey.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <a href="#" className="btn-primary">
            Contact CII <ArrowRight className="!h-4 !w-4" />
          </a>
          <a href="#assessment" className="btn-outline">
            <Mail className="!h-4 !w-4" /> Start with the assessment
          </a>
        </div>
      </div>
    </WireSection>
  );
};
