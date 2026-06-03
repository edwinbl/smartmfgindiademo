import { WireSection } from "@/components/wireframe/WireSection";
import { Shuffle, Target, ListChecks, Route } from "lucide-react";

const items = [
  {
    icon: Shuffle,
    title: "Avoid Random Technology Adoption",
    body: "Stop investing in disconnected tools. Start from a clear view of where capability gaps actually exist.",
  },
  {
    icon: Target,
    title: "Focus on Business Outcomes",
    body: "Anchor every decision to measurable outcomes — quality, productivity, energy, exports — not feature lists.",
  },
  {
    icon: ListChecks,
    title: "Prioritize High-Impact Areas",
    body: "Identify the dimensions with the largest readiness gap and the highest return on effort.",
  },
  {
    icon: Route,
    title: "Build a Structured Transformation Path",
    body: "Move from one-off pilots to a sequenced, board-ready roadmap your teams can actually execute.",
  },
];

export const AssessmentWhyMatters = () => (
  <WireSection
    id="why"
    eyebrow="Why Assessment Matters"
    title="Readiness comes before roadmap"
    intro="Without a baseline, transformation programmes drift. A structured assessment grounds every technology, partner and investment decision in evidence."
  >
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map(({ icon: Icon, title, body }) => (
        <div key={title} className="cii-card p-6 h-full">
          <div
            className="h-10 w-10 rounded-md grid place-items-center mb-4"
            style={{ background: "hsl(var(--navy-050))", color: "hsl(var(--navy-700))" }}
          >
            <Icon className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <h3 className="font-display font-bold text-base text-navy-800 mb-2">{title}</h3>
          <p className="text-sm text-[hsl(var(--neutral-700))] leading-relaxed">{body}</p>
        </div>
      ))}
    </div>
  </WireSection>
);
