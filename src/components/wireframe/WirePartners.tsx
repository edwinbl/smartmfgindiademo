import { WireSection } from "./WireSection";
import { ExternalLink } from "lucide-react";
import hero from "@/assets/partners/hero.png";
import ibm from "@/assets/partners/ibm.png";
import ifm from "@/assets/partners/ifm.png";
import mahindra from "@/assets/partners/mahindra.png";
import omron from "@/assets/partners/omron.png";
import rockwell from "@/assets/partners/rockwell.png";
import siemens from "@/assets/partners/siemens.png";
import skf from "@/assets/partners/skf.png";
import techMahindra from "@/assets/partners/tech-mahindra.png";

const partners = [
  { name: "Hero", src: hero },
  { name: "IBM", src: ibm },
  { name: "ifm electronic", src: ifm },
  { name: "Mahindra Rise", src: mahindra },
  { name: "Omron", src: omron },
  { name: "Rockwell Automation", src: rockwell },
  { name: "Siemens", src: siemens },
  { name: "SKF", src: skf },
  { name: "Tech Mahindra", src: techMahindra },
];

export const WirePartners = () => {
  const loop = [...partners, ...partners];
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

      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="flex gap-12 md:gap-16 animate-marquee w-max">
          {loop.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="shrink-0 h-20 md:h-24 w-[180px] md:w-[200px] grid place-items-center"
            >
              <img
                src={p.src}
                alt={p.name}
                className="max-h-full max-w-full object-contain opacity-90 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </WireSection>
  );
};
