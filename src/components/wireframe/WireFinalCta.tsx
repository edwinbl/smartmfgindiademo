import { WireSection } from "./WireSection";

export const WireFinalCta = () => {
  return (
    <WireSection id="contact" tag="Section 9 — Final CTA">
      <div className="border border-border rounded-sm p-8 md:p-14 text-center">
        <h2 className="font-semibold text-2xl md:text-4xl tracking-tight">
          Not sure where to begin?
        </h2>
        <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
          Get in touch with the CII Smart Manufacturing team for guidance tailored to your organisation.
        </p>
        <div className="mt-6">
          <a href="#" className="wire-cta-primary">Contact CII</a>
        </div>
      </div>
    </WireSection>
  );
};
