import { WireSection } from "@/components/wireframe/WireSection";
import { Factory, Building2, Truck, Users } from "lucide-react";

const personas = [
  {
    icon: Factory,
    title: "MSMEs",
    body: "Smaller manufacturers building a structured starting point for digital and operational improvement.",
  },
  {
    icon: Building2,
    title: "Growing Enterprises",
    body: "Mid-market companies scaling pilots and standardising practices across multiple plants.",
  },
  {
    icon: Truck,
    title: "Supplier Ecosystems",
    body: "Tier-1 and tier-N suppliers aligning with OEM expectations on quality, data and traceability.",
  },
  {
    icon: Users,
    title: "Operations Leaders",
    body: "Plant heads and transformation leads needing a board-ready view of capability and risk.",
  },
];

export const AssessmentWhoFor = () => (
  <WireSection
    id="who-for"
    alt
    eyebrow="Who It Is For"
    title="Built for the people driving transformation"
  >
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {personas.map(({ icon: Icon, title, body }) => (
        <div key={title} className="cii-card p-6">
          <div
            className="h-10 w-10 rounded-md grid place-items-center mb-4"
            style={{ background: "hsl(var(--navy-050))", color: "hsl(var(--navy-700))" }}
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
