import { WireSection } from "./WireSection";
import { ClipboardCheck, Layers, GraduationCap, Calendar, Mail, ArrowRight } from "lucide-react";

const pathways = [
  {
    icon: ClipboardCheck,
    title: "Assess Readiness",
    desc: "Understand where your organisation stands before deciding what to adopt.",
    cta: "Start assessment",
    href: "#assessment",
    accent: "red" as const,
  },
  {
    icon: Layers,
    title: "Explore Solutions",
    desc: "Practical solution areas linked to business problems and outcomes.",
    cta: "Explore solutions",
    href: "#solutions",
    accent: "navy" as const,
  },
  {
    icon: GraduationCap,
    title: "Join Programmes",
    desc: "Access CII programmes, workshops and training opportunities.",
    cta: "View programmes",
    href: "#programmes",
    accent: "navy" as const,
  },
  {
    icon: Calendar,
    title: "View Events",
    desc: "Explore upcoming and past smart manufacturing events.",
    cta: "View events",
    href: "#events",
    accent: "navy" as const,
  },
  {
    icon: Mail,
    title: "Contact CII",
    desc: "Reach out for enquiries, participation or partnership interest.",
    cta: "Contact us",
    href: "#contact",
    accent: "orange" as const,
  },
];

const accentMap = {
  red: { bg: "bg-[hsl(var(--red-100))]", fg: "text-cii-red", bar: "bg-cii-red" },
  navy: { bg: "bg-[hsl(var(--navy-100))]", fg: "text-navy-700", bar: "bg-navy-700" },
  orange: { bg: "bg-[hsl(var(--orange-100))]", fg: "text-[hsl(var(--orange-600))]", bar: "bg-cii-orange" },
};

export const WirePathwayCards = () => {
  return (
    <WireSection
      eyebrow="Choose your starting point"
      title="Where would you like to begin?"
      intro="The portal is designed for action. Pick a pathway and the platform will guide your next steps."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {pathways.map((p) => {
          const a = accentMap[p.accent];
          const Icon = p.icon;
          return (
            <article key={p.title} className="cii-card flex flex-col p-6 relative overflow-hidden group">
              <span className={`absolute left-0 top-0 bottom-0 w-1 ${a.bar}`} />
              <div className={`h-11 w-11 rounded-md grid place-items-center mb-5 ${a.bg}`}>
                <Icon className={`h-5 w-5 ${a.fg}`} />
              </div>
              <h3 className="font-display font-bold text-[17px] text-navy-800 leading-tight">{p.title}</h3>
              <p className="mt-2 text-sm text-[hsl(var(--neutral-700))] flex-1">{p.desc}</p>
              <a href={p.href} className="link-arrow mt-5 group-hover:gap-2">
                {p.cta} <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </article>
          );
        })}
      </div>
    </WireSection>
  );
};
