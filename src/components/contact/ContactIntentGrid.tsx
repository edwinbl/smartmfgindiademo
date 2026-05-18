import { Rocket, Handshake, Boxes, GraduationCap, LifeBuoy, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type IntentKey = "journey" | "partnership" | "solution" | "training" | "support";

export const INTENTS: { key: IntentKey; title: string; desc: string; Icon: LucideIcon }[] = [
  { key: "journey", title: "Start My Industry 4.0 Journey", desc: "Assess readiness and chart your transformation roadmap.", Icon: Rocket },
  { key: "partnership", title: "Partnership & Collaboration", desc: "Co-create programmes, research and ecosystem initiatives.", Icon: Handshake },
  { key: "solution", title: "Solution Provider Enquiries", desc: "Get listed and connect with manufacturers seeking solutions.", Icon: Boxes },
  { key: "training", title: "Training & Programmes", desc: "Upskill your teams with curated capability-building.", Icon: GraduationCap },
  { key: "support", title: "Platform Support", desc: "Get help with assessments, accounts or platform issues.", Icon: LifeBuoy },
];

interface Props {
  active: IntentKey | null;
  onSelect: (k: IntentKey) => void;
}

export const ContactIntentGrid = ({ active, onSelect }: Props) => {
  return (
    <section id="intent" className="py-16 lg:py-24 bg-background">
      <div className="container-cii">
        <div className="max-w-2xl">
          <span className="section-eyebrow">Step 1</span>
          <h2 className="font-display mt-2 text-3xl sm:text-4xl font-extrabold text-[hsl(var(--navy-900))] tracking-tight">
            What would you like help with?
          </h2>
          <p className="mt-3 text-[hsl(var(--neutral-700))]">
            Pick an intent — we'll route you to the right team and tailor the form below.
          </p>
        </div>

        <div className="mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {INTENTS.map(({ key, title, desc, Icon }) => {
            const isActive = active === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => onSelect(key)}
                className={cn(
                  "cii-card text-left p-5 flex flex-col gap-3 h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]",
                  isActive && "ring-2 ring-[hsl(var(--navy-700))] -translate-y-1",
                )}
                style={isActive ? { borderColor: "hsl(var(--navy-700))" } : undefined}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={cn(
                      "grid place-items-center h-10 w-10 rounded-md transition-colors",
                      isActive ? "text-white" : "text-[hsl(var(--navy-700))]",
                    )}
                    style={{
                      background: isActive ? "hsl(var(--navy-700))" : "hsl(var(--navy-050))",
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  {isActive && (
                    <span className="grid place-items-center h-6 w-6 rounded-full text-white" style={{ background: "hsl(var(--india-green))" }}>
                      <Check className="h-3.5 w-3.5" />
                    </span>
                  )}
                </div>
                <h3 className="font-display text-sm font-bold leading-snug text-[hsl(var(--navy-900))]">{title}</h3>
                <p className="text-xs text-[hsl(var(--neutral-500))] leading-relaxed">{desc}</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
