import { Rocket, Handshake, Boxes, GraduationCap, LifeBuoy, Check, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type IntentKey = "journey" | "partnership" | "solution" | "training" | "support";

type IntentMeta = {
  key: IntentKey;
  title: string;
  desc: string;
  Icon: LucideIcon;
  accent: { from: string; to: string; soft: string; text: string };
};

export const INTENTS: IntentMeta[] = [
  {
    key: "journey",
    title: "Start My Industry 4.0 Journey",
    desc: "Assess readiness and chart your transformation roadmap.",
    Icon: Rocket,
    accent: {
      from: "hsl(var(--orange-500))",
      to: "hsl(var(--red-600))",
      soft: "hsl(var(--orange-100))",
      text: "hsl(var(--orange-600))",
    },
  },
  {
    key: "partnership",
    title: "Partnership & Collaboration",
    desc: "Co-create programmes, research and ecosystem initiatives.",
    Icon: Handshake,
    accent: {
      from: "hsl(var(--navy-700))",
      to: "hsl(var(--navy-500))",
      soft: "hsl(var(--navy-050))",
      text: "hsl(var(--navy-700))",
    },
  },
  {
    key: "solution",
    title: "Solution Provider Enquiries",
    desc: "Get listed and connect with manufacturers seeking solutions.",
    Icon: Boxes,
    accent: {
      from: "#7C3AED",
      to: "#4F46E5",
      soft: "#EEF2FF",
      text: "#4F46E5",
    },
  },
  {
    key: "training",
    title: "Training & Programmes",
    desc: "Upskill your teams with curated capability-building.",
    Icon: GraduationCap,
    accent: {
      from: "hsl(var(--india-green))",
      to: "#0F8A4D",
      soft: "#E6F6EC",
      text: "#0F8A4D",
    },
  },
  {
    key: "support",
    title: "Platform Support",
    desc: "Get help with assessments, accounts or platform issues.",
    Icon: LifeBuoy,
    accent: {
      from: "#0EA5E9",
      to: "#0369A1",
      soft: "#E0F2FE",
      text: "#0369A1",
    },
  },
];

interface Props {
  active: IntentKey | null;
  onSelect: (k: IntentKey) => void;
  embedded?: boolean;
}

export const ContactIntentGrid = ({ active, onSelect, embedded = false }: Props) => {
  const Cards = (
    <div className={cn("grid gap-3", embedded ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 mt-10 gap-4")}>
      {INTENTS.map(({ key, title, desc, Icon, accent }) => {
        const isActive = active === key;
        return (
          <button
            key={key}
            type="button"
            onClick={() => onSelect(key)}
            className={cn(
              "group relative text-left rounded-xl p-4 sm:p-5 flex items-start gap-4 border bg-white overflow-hidden transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]",
              isActive
                ? "shadow-lg -translate-y-0.5"
                : "border-[hsl(var(--neutral-150))] hover:shadow-md hover:-translate-y-0.5",
            )}
            style={isActive ? { borderColor: accent.text } : undefined}
          >
            {/* Decorative accent bar */}
            <span
              className="absolute left-0 top-0 bottom-0 w-1"
              style={{ background: `linear-gradient(180deg, ${accent.from}, ${accent.to})` }}
              aria-hidden
            />
            {/* Decorative blob */}
            <span
              className="absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-60 transition-opacity group-hover:opacity-100"
              style={{ background: accent.soft }}
              aria-hidden
            />
            <div
              className="relative grid place-items-center h-11 w-11 rounded-lg text-white shrink-0 shadow-sm"
              style={{ background: `linear-gradient(135deg, ${accent.from}, ${accent.to})` }}
            >
              <Icon className="h-5 w-5" />
            </div>
            <div className="relative flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display text-sm font-bold leading-snug text-[hsl(var(--navy-900))]">
                  {title}
                </h3>
                {isActive ? (
                  <span
                    className="grid place-items-center h-5 w-5 rounded-full text-white shrink-0"
                    style={{ background: "hsl(var(--india-green))" }}
                  >
                    <Check className="h-3 w-3" />
                  </span>
                ) : (
                  <ArrowRight
                    className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5"
                    style={{ color: accent.text }}
                  />
                )}
              </div>
              <p className="text-xs text-[hsl(var(--neutral-500))] leading-relaxed mt-1">{desc}</p>
            </div>
          </button>
        );
      })}
    </div>
  );

  if (embedded) {
    return (
      <div>
        <span className="section-eyebrow">Step 1</span>
        <h2 className="font-display mt-2 text-2xl sm:text-3xl font-extrabold text-[hsl(var(--navy-900))] tracking-tight">
          What would you like help with?
        </h2>
        <p className="mt-3 text-sm text-[hsl(var(--neutral-700))]">
          Pick an intent — we'll route you to the right team and tailor the form.
        </p>
        <div className="mt-6">{Cards}</div>
      </div>
    );
  }

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
        {Cards}
      </div>
    </section>
  );
};
