import { useState } from "react";
import { Factory, Building2, Cpu, GraduationCap, Landmark, Check } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const audiences = [
  { id: "msme", icon: Factory, title: "MSMEs", desc: "Affordable adoption pathways tailored to small & medium manufacturers." },
  { id: "ent", icon: Building2, title: "Enterprises", desc: "Scale digital operations across plants and global supply chains." },
  { id: "tech", icon: Cpu, title: "Technology Providers", desc: "Showcase solutions and connect with high-intent industrial buyers." },
  { id: "edu", icon: GraduationCap, title: "Academia", desc: "Industry-aligned curriculum, research and live capstone projects." },
  { id: "gov", icon: Landmark, title: "Government", desc: "Drive policy outcomes with real-time ecosystem-wide insights." },
];

export const AudienceSelector = () => {
  useReveal();
  const [active, setActive] = useState("msme");

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-1">Built for everyone</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tight">
            Personalize your experience
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tell us who you are — the platform tailors content, tools and recommendations to match your role.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {audiences.map((a, i) => {
            const Icon = a.icon;
            const isActive = active === a.id;
            return (
              <button
                key={a.id}
                onClick={() => setActive(a.id)}
                className={`reveal group text-left rounded-2xl border p-5 transition-smooth hover:-translate-y-1 hover:shadow-elevated ${
                  isActive
                    ? "border-brand-1 bg-card shadow-glow"
                    : "border-border bg-card hover:border-brand-1/50"
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className={`relative grid h-12 w-12 place-items-center rounded-xl transition-smooth ${
                  isActive ? "bg-gradient-primary text-primary-foreground" : "bg-accent text-accent-foreground"
                }`}>
                  <Icon className="h-6 w-6" />
                  {isActive && (
                    <span className="absolute -top-1.5 -right-1.5 grid h-5 w-5 place-items-center rounded-full bg-emerald-500 text-white">
                      <Check className="h-3 w-3" />
                    </span>
                  )}
                </div>
                <h3 className="mt-4 font-semibold text-base">{a.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{a.desc}</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
