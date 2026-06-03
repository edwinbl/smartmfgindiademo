import { WireSection } from "@/components/wireframe/WireSection";
import { PlayCircle, ClipboardList, SearchCheck, FileBarChart2, Rocket } from "lucide-react";

const steps = [
  { icon: PlayCircle, title: "Start Assessment", body: "Create your secure session and select your plant or business unit." },
  { icon: ClipboardList, title: "Complete Readiness Inputs", body: "Answer guided questions across the eight readiness dimensions." },
  { icon: SearchCheck, title: "Assessment Review", body: "CII experts validate inputs and apply sector context to your responses." },
  { icon: FileBarChart2, title: "Receive Readiness Insights", body: "Get a scored report with outcome-linked priorities and gaps." },
  { icon: Rocket, title: "Explore Next-Step Opportunities", body: "Pathways, programmes and ecosystem partners aligned to your priorities." },
];

export const AssessmentJourney = () => (
  <WireSection
    id="journey"
    eyebrow="Assessment Journey"
    title="A clear, five-step path — from intent to insight"
  >
    {/* Desktop horizontal timeline */}
    <div className="hidden md:block">
      <div className="relative">
        <div
          className="absolute left-0 right-0 top-7 h-px"
          style={{ background: "hsl(var(--neutral-200))" }}
        />
        <div className="grid grid-cols-5 gap-4 relative">
          {steps.map(({ icon: Icon, title, body }, i) => (
            <div key={title} className="text-center">
              <div
                className="h-14 w-14 rounded-full grid place-items-center mx-auto mb-4 relative z-10 border-4 border-white shadow-sm"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-600)))",
                  color: "#fff",
                }}
              >
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <div className="text-[11px] uppercase tracking-wide text-[hsl(var(--neutral-500))] font-semibold mb-1">
                Step {String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-display font-bold text-sm text-navy-800 mb-1.5">{title}</div>
              <p className="text-xs text-[hsl(var(--neutral-700))] leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Mobile vertical timeline */}
    <div className="md:hidden relative pl-12">
      <div
        className="absolute left-[26px] top-2 bottom-2 w-px"
        style={{ background: "hsl(var(--neutral-200))" }}
      />
      <ol className="space-y-6">
        {steps.map(({ icon: Icon, title, body }, i) => (
          <li key={title} className="relative">
            <div
              className="absolute -left-12 top-0 h-11 w-11 rounded-full grid place-items-center border-4 border-white shadow-sm"
              style={{
                background:
                  "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-600)))",
                color: "#fff",
              }}
            >
              <Icon className="h-4 w-4" strokeWidth={1.75} />
            </div>
            <div className="text-[11px] uppercase tracking-wide text-[hsl(var(--neutral-500))] font-semibold mb-0.5">
              Step {String(i + 1).padStart(2, "0")}
            </div>
            <div className="font-display font-bold text-sm text-navy-800 mb-1">{title}</div>
            <p className="text-sm text-[hsl(var(--neutral-700))]">{body}</p>
          </li>
        ))}
      </ol>
    </div>
  </WireSection>
);
