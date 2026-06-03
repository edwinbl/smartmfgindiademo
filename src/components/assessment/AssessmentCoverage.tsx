import { WireSection } from "@/components/wireframe/WireSection";
import {
  Settings2, CalendarRange, ShieldCheck, Database,
  Cpu, GraduationCap, Leaf, Network,
} from "lucide-react";

const dims = [
  { icon: Settings2, label: "Operations" },
  { icon: CalendarRange, label: "Production Planning" },
  { icon: ShieldCheck, label: "Quality Systems" },
  { icon: Database, label: "Data & Visibility" },
  { icon: Cpu, label: "Machine Connectivity" },
  { icon: GraduationCap, label: "Workforce Readiness" },
  { icon: Leaf, label: "Sustainability" },
  { icon: Network, label: "Supply Chain Integration" },
];

export const AssessmentCoverage = () => (
  <WireSection
    id="coverage"
    eyebrow="What the Assessment Covers"
    title="Eight connected dimensions of readiness"
    intro="A structured framework that examines the operational, digital and human capabilities behind smart manufacturing."
  >
    <div className="relative">
      {/* Desktop connected grid */}
      <div className="hidden lg:block relative">
        <div className="grid grid-cols-4 gap-6">
          {dims.map(({ icon: Icon, label }, i) => (
            <div
              key={label}
              className="cii-card p-5 text-center relative z-10"
            >
              <div
                className="h-12 w-12 rounded-md grid place-items-center mx-auto mb-3"
                style={{
                  background: i < 4 ? "hsl(var(--navy-050))" : "hsl(var(--orange-100))",
                  color: i < 4 ? "hsl(var(--navy-700))" : "hsl(var(--orange-600))",
                }}
              >
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <div className="font-display font-bold text-sm text-navy-800">{label}</div>
              <div className="text-[11px] uppercase tracking-wide text-[hsl(var(--neutral-500))] mt-1">
                Dimension {String(i + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>

        {/* Center hub */}
        <div className="absolute inset-0 grid place-items-center pointer-events-none">
          <div
            className="rounded-full h-32 w-32 grid place-items-center text-center shadow-lg"
            style={{
              background: "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-600)))",
              color: "#fff",
            }}
          >
            <div>
              <div className="text-[10px] uppercase tracking-wider opacity-80">CII</div>
              <div className="font-display font-extrabold text-base leading-tight">Readiness</div>
              <div className="font-display font-extrabold text-base leading-tight">Framework</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile / tablet stacked */}
      <div className="lg:hidden grid gap-3 sm:grid-cols-2">
        {dims.map(({ icon: Icon, label }, i) => (
          <div key={label} className="cii-card p-4 flex items-center gap-3">
            <div
              className="h-10 w-10 rounded-md grid place-items-center shrink-0"
              style={{
                background: i < 4 ? "hsl(var(--navy-050))" : "hsl(var(--orange-100))",
                color: i < 4 ? "hsl(var(--navy-700))" : "hsl(var(--orange-600))",
              }}
            >
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <div>
              <div className="font-display font-bold text-sm text-navy-800">{label}</div>
              <div className="text-[10px] uppercase tracking-wide text-[hsl(var(--neutral-500))]">
                Dimension {String(i + 1).padStart(2, "0")}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </WireSection>
);
