import { WireSection } from "./WireSection";
import { ExternalLink } from "lucide-react";

const partners = [
  "Partner Logo 01",
  "Partner Logo 02",
  "Partner Logo 03",
  "Partner Logo 04",
  "Partner Logo 05",
  "Partner Logo 06",
  "Partner Logo 07",
  "Partner Logo 08",
];

export const WirePartners = () => {
  return (
    <WireSection id="partners">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div>
          <div className="section-eyebrow mb-3">Partners & Knowledge Linkages</div>
          <h2 className="font-display font-bold text-[24px] md:text-[28px] leading-tight tracking-tight text-navy-800">
            Partners and Knowledge Linkages
          </h2>
          <p className="mt-3 text-sm md:text-base text-[hsl(var(--neutral-700))] max-w-2xl">
            Institutional partners, knowledge collaborators and ecosystem linkages supporting
            the CII Smart Manufacturing portal.
          </p>
        </div>
        <a href="#" className="link-arrow">
          View all partners <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
        {partners.map((p) => (
          <div
            key={p}
            className="aspect-[3/2] rounded-md border border-[hsl(var(--neutral-150))] bg-[hsl(var(--neutral-50))] grid place-items-center text-center px-2 hover:border-navy-600 hover:bg-white transition-colors"
          >
            <span className="text-[10px] uppercase tracking-[0.12em] font-semibold text-[hsl(var(--neutral-500))] leading-tight">
              {p}
            </span>
          </div>
        ))}
      </div>
    </WireSection>
  );
};
