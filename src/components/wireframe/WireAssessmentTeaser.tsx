import { Link } from "react-router-dom";
import { WireSection } from "./WireSection";
import { AssessmentHeroCard } from "@/components/assessment/AssessmentHeroCard";
import { ArrowRight, Layers, Gauge, Users, Factory, Truck } from "lucide-react";

const categories = [
  { icon: Users, label: "Leadership & Strategy" },
  { icon: Users, label: "People & Culture" },
  { icon: Layers, label: "Infrastructure" },
  { icon: Factory, label: "Operations" },
  { icon: Truck, label: "Supply Chain & Logistics" },
];

export const WireAssessmentTeaser = () => {
  return (
    <WireSection id="assessment" alt>
      <div className="grid gap-8 md:gap-12 lg:grid-cols-[1fr_1.05fr] items-center">
        <div>
          <div className="section-eyebrow mb-3">Readiness Assessment</div>
          <h2 className="font-display font-bold text-2xl sm:text-[28px] md:text-[36px] leading-tight tracking-tight text-navy-800">
            From self-check to a clear transformation roadmap
          </h2>
          <p className="mt-5 text-base md:text-lg text-[hsl(var(--neutral-700))] max-w-xl">
            Built by the CII Smart Manufacturing Council with industry leaders from Tata, Siemens, Microsoft, Bosch and
            IISc — the assessment objectively gauges where your enterprise stands on its Industry 4.0 journey, and
            guides the next steps. Purpose-built with MSMEs in mind.
          </p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2">
            {categories.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-3 py-2 rounded-md border border-[hsl(var(--neutral-150))] bg-white"
              >
                <Icon className="h-3.5 w-3.5 text-[hsl(var(--navy-600))] shrink-0" />
                <span className="text-[12px] font-semibold text-navy-800 truncate">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2 text-[12px] text-[hsl(var(--neutral-700))]">
            <span className="cii-chip"><Layers className="h-3.5 w-3.5" /> 49 key elements</span>
            <span className="cii-chip"><Gauge className="h-3.5 w-3.5" /> Depth × scale scoring</span>
            <span className="cii-chip">Industry 1.0 → 4.0 scale</span>
          </div>

          <p className="mt-6 text-sm text-[hsl(var(--neutral-500))] italic max-w-xl">
            Readiness pathways connect to outcomes that matter — exports, quality, traceability, productivity, energy
            efficiency and value-chain participation.
          </p>

          <div className="mt-7">
            <Link to="/readiness-assessment" className="btn-primary">
              Explore the Assessment <ArrowRight className="!h-4 !w-4" />
            </Link>
          </div>
        </div>

        <AssessmentHeroCard />
      </div>
    </WireSection>
  );
};
