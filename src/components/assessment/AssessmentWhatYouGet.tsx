import { WireSection } from "@/components/wireframe/WireSection";
import { Gauge, Sparkles, Flame, Map, BarChart3, Lightbulb } from "lucide-react";

const items = [
  { icon: Gauge, title: "Readiness Snapshot", body: "A clear baseline across every dimension, scored and visualised.", future: false },
  { icon: Sparkles, title: "Outcome Insights", body: "How your readiness translates into business outcomes you care about.", future: false },
  { icon: Flame, title: "Priority Areas", body: "The dimensions where focused effort will create the largest gains.", future: false },
  { icon: Map, title: "Next-Step Guidance", body: "Recommended programmes, partners and pilots to act on findings.", future: false },
  { icon: BarChart3, title: "Benchmarking", body: "Compare readiness against peers in your sector and size band.", future: true },
  { icon: Lightbulb, title: "Recommendations Engine", body: "Personalised, AI-assisted recommendations tied to outcomes.", future: true },
];

export const AssessmentWhatYouGet = () => (
  <WireSection
    id="what-you-get"
    alt
    eyebrow="What Users Get"
    title="From a readiness score to a credible plan of action"
  >
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(({ icon: Icon, title, body, future }) => (
        <div
          key={title}
          className={`cii-card p-6 relative ${future ? "opacity-70" : ""}`}
        >
          {future && (
            <span className="cii-chip cii-chip-orange absolute top-4 right-4 text-[10px]">
              Coming Soon
            </span>
          )}
          <div
            className="h-11 w-11 rounded-md grid place-items-center mb-4"
            style={{
              background: future ? "hsl(var(--neutral-100))" : "hsl(var(--navy-050))",
              color: future ? "hsl(var(--neutral-500))" : "hsl(var(--navy-700))",
            }}
          >
            <Icon className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <h3 className="font-display font-bold text-base text-navy-800 mb-2">{title}</h3>
          <p className="text-sm text-[hsl(var(--neutral-700))]">{body}</p>
        </div>
      ))}
    </div>
  </WireSection>
);
