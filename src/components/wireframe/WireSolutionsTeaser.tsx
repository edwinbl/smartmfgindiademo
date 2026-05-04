import { WireSection } from "./WireSection";
import {
  Globe2,
  ShieldCheck,
  Network,
  Timer,
  Zap,
  Smartphone,
  ArrowRight,
} from "lucide-react";

const solutions = [
  { icon: Globe2, title: "Export readiness", desc: "Meet quality, compliance and digital traceability requirements for global markets." },
  { icon: ShieldCheck, title: "Improve quality", desc: "Standardise quality systems and reduce defects across the shopfloor." },
  { icon: Network, title: "Strengthen traceability", desc: "Track materials, processes and products end-to-end across the value chain." },
  { icon: Timer, title: "Reduce downtime", desc: "Predict and prevent machine downtime with smart monitoring and analytics." },
  { icon: Zap, title: "Improve energy efficiency", desc: "Cut energy costs and emissions through real-time consumption insight." },
  { icon: Smartphone, title: "Digitise shopfloor reporting", desc: "Replace paper-based reporting with simple, mobile-first digital workflows." },
];

export const WireSolutionsTeaser = () => {
  return (
    <WireSection id="solutions">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
        <div className="max-w-2xl">
          <div className="section-eyebrow mb-3">Solutions</div>
          <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-tight tracking-tight text-navy-800">
            Explore solutions by business problem
          </h2>
          <p className="mt-4 text-base md:text-lg text-[hsl(var(--neutral-700))]">
            Find practical solution areas linked to the outcomes manufacturers care about — quality,
            traceability, downtime, productivity, energy efficiency and export readiness.
          </p>
        </div>
        <a href="#" className="btn-outline">Explore Solutions <ArrowRight className="!h-4 !w-4" /></a>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {solutions.map((s) => {
          const Icon = s.icon;
          return (
            <article key={s.title} className="cii-card p-6 group relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-md grid place-items-center bg-[hsl(var(--navy-100))] text-navy-700 shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-navy-800 text-[17px] leading-snug">{s.title}</h3>
                  <p className="mt-2 text-sm text-[hsl(var(--neutral-700))]">{s.desc}</p>
                  <a href="#" className="link-arrow mt-4">View solutions <ArrowRight className="h-3.5 w-3.5" /></a>
                </div>
              </div>
              <div className="absolute right-0 top-0 h-1 w-0 bg-cii-red transition-all group-hover:w-full" />
            </article>
          );
        })}
      </div>
    </WireSection>
  );
};
