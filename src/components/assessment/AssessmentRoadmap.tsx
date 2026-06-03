import { WireSection } from "@/components/wireframe/WireSection";
import { MousePointerClick, BarChart3, FileText, Sparkles, Map } from "lucide-react";

const items = [
  { icon: MousePointerClick, title: "Interactive Assessments", body: "Adaptive question flows tailored to sector and size." },
  { icon: BarChart3, title: "Benchmarking", body: "Compare readiness against industry and peer cohorts." },
  { icon: FileText, title: "Readiness Reports", body: "Downloadable executive and technical readiness reports." },
  { icon: Sparkles, title: "Outcome-Based Recommendations", body: "AI-assisted recommendations tied to your outcomes." },
  { icon: Map, title: "Transformation Roadmaps", body: "Sequenced, multi-year roadmaps with milestones and owners." },
];

export const AssessmentRoadmap = () => (
  <WireSection
    id="roadmap"
    eyebrow="Future Capabilities"
    title="Where the readiness platform is heading"
    intro="A preview of capabilities on the CII Smart Manufacturing readiness roadmap — designed in partnership with industry."
  >
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {items.map(({ icon: Icon, title, body }) => (
        <div key={title} className="cii-card p-5 opacity-80">
          <div className="flex items-center gap-2 mb-3">
            <div
              className="h-9 w-9 rounded-md grid place-items-center"
              style={{ background: "hsl(var(--neutral-100))", color: "hsl(var(--neutral-700))" }}
            >
              <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />
            </div>
            <span className="cii-chip text-[10px]">Future</span>
          </div>
          <div className="font-display font-bold text-sm text-navy-800 mb-1">{title}</div>
          <p className="text-xs text-[hsl(var(--neutral-700))]">{body}</p>
        </div>
      ))}
    </div>
  </WireSection>
);
