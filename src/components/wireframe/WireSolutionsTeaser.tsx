import { Link } from "react-router-dom";
import { WireSection } from "./WireSection";
import { TrendingUp, ShieldCheck, Network, Timer, Zap, CalendarClock, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: TrendingUp,
    title: "Improve productivity",
    id: "productivity",
    desc: "Boost operational efficiency by reducing manual tasks and optimizing machine and workforce performance.",
  },
  {
    icon: ShieldCheck,
    title: "Improve quality",
    id: "quality",
    desc: "Standardise quality systems and reduce defects across the shopfloor.",
  },
  {
    icon: Network,
    title: "Strengthen traceability",
    id: "traceability",
    desc: "Track materials, processes and products end-to-end across the value chain.",
  },
  {
    icon: Timer,
    title: "Reduce downtime",
    id: "downtime",
    desc: "Predict and prevent machine downtime with smart monitoring and analytics.",
  },
  {
    icon: Zap,
    title: "Improve energy efficiency",
    id: "energy",
    desc: "Cut energy costs and emissions through real-time consumption insight.",
  },
  {
    icon: CalendarClock,
    title: "Improve planning",
    id: "planning",
    desc: "Improve production planning with real-time insights, forecasting and smarter resource allocation.",
  },
];

export const WireSolutionsTeaser = () => {
  return (
    <WireSection id="solutions">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
        <div className="max-w-2xl">
          <div className="section-eyebrow mb-3">Knowledge Hub</div>
          <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-tight tracking-tight text-navy-800">
            Transform Operations with AI-Driven Knowledge
          </h2>
          <p className="mt-4 text-base md:text-lg text-[hsl(var(--neutral-700))]">
            Find AI-powered solution areas that help manufacturers improve efficiency, reduce downtime and drive smarter operations.
          </p>
        </div>
        {/* <a href="#" className="btn-outline">Explore Solutions <ArrowRight className="!h-4 !w-4" /></a> */}
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {solutions.map((s) => {
          const Icon = s.icon;
          return (
            <Link
              key={s.title}
              to={`/knowledge-hub/${s.id}`}
              className="cii-card p-6 group relative overflow-hidden"
            >
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-md grid place-items-center bg-[hsl(var(--navy-100))] text-navy-700 shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-navy-800 text-[17px] leading-snug">{s.title}</h3>
                  <p className="mt-2 text-sm text-[hsl(var(--neutral-700))]">{s.desc}</p>
                </div>
              </div>
              <div className="absolute right-0 top-0 h-1 w-0 bg-cii-red transition-all group-hover:w-full" />
              <div className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[hsl(var(--red-600))] opacity-0 group-hover:opacity-100 transition-opacity">
                Explore outcome <ArrowRight className="h-3 w-3" />
              </div>
            </Link>
          );
        })}
      </div>
    </WireSection>
  );
};
