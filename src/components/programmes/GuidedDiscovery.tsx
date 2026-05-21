import { Rocket, Gauge, Factory, Leaf, Users, Store, Compass, X, ArrowRight } from "lucide-react";
import { outcomes, type OutcomeId } from "@/data/programmes";

const iconMap = { rocket: Rocket, gauge: Gauge, factory: Factory, leaf: Leaf, users: Users, store: Store, compass: Compass } as const;

interface Props {
  selected: OutcomeId | null;
  onSelect: (id: OutcomeId | null) => void;
}

export const GuidedDiscovery = ({ selected, onSelect }: Props) => {
  return (
    <section className="py-16 md:py-20 bg-[hsl(var(--neutral-50))]" id="guided-discovery">
      <div className="container-cii">
        <div className="max-w-2xl">
          <div className="section-eyebrow mb-3">Guided Discovery</div>
          <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-tight tracking-tight text-[hsl(var(--navy-900))]">
            What are you looking to achieve?
          </h2>
          <p className="mt-3 text-base text-[hsl(var(--neutral-700))]">
            Tell us your goal — we'll recommend the right programmes, workshops and learning pathways for you.
          </p>
        </div>

        <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((o, i) => {
            const Icon = iconMap[o.icon];
            const active = selected === o.id;
            return (
              <button
                key={o.id}
                type="button"
                onClick={() => onSelect(active ? null : o.id)}
                className={`group text-left cii-card p-5 transition-all relative overflow-hidden animate-fade-in ${
                  active ? "ring-2 ring-[hsl(var(--red-600))] border-[hsl(var(--red-600))]" : ""
                }`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span
                  className={`h-1 absolute top-0 left-0 right-0 transition-all ${
                    active ? "bg-[hsl(var(--red-600))]" : "bg-transparent group-hover:bg-[hsl(var(--navy-600))]"
                  }`}
                />
                <div className="h-10 w-10 rounded-md grid place-items-center mb-3 bg-[hsl(var(--navy-050))] text-[hsl(var(--navy-700))] group-hover:bg-[hsl(var(--red-100))] group-hover:text-[hsl(var(--red-700))] transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-[15px] text-[hsl(var(--navy-900))] leading-snug">{o.title}</h3>
                <p className="mt-1.5 text-xs text-[hsl(var(--neutral-700))] line-clamp-2">{o.description}</p>
                <div
                  className={`mt-3 inline-flex items-center gap-1 text-[11px] font-semibold transition-colors ${
                    active ? "text-[hsl(var(--red-700))]" : "text-[hsl(var(--navy-700))] group-hover:text-[hsl(var(--red-600))]"
                  }`}
                >
                  {active ? "Recommended" : "See programmes"} <ArrowRight className="h-3 w-3" />
                </div>
              </button>
            );
          })}
        </div>

        {selected && (
          <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-[hsl(var(--navy-700))] bg-white border border-[hsl(var(--neutral-200))] rounded-full pl-3 pr-1 py-1 animate-fade-in">
            Recommending programmes for: {outcomes.find((o) => o.id === selected)?.title}
            <button
              onClick={() => onSelect(null)}
              className="h-6 w-6 rounded-full grid place-items-center hover:bg-[hsl(var(--neutral-100))] text-[hsl(var(--neutral-500))]"
              aria-label="Clear outcome"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
