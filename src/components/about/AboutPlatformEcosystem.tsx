import { Link } from "react-router-dom";
import {
  Gauge,
  FileText,
  BookOpen,
  Building2,
  GraduationCap,
  Calendar,
  Cpu,
  Library,
  Sparkles,
} from "lucide-react";

const modules = [
  { icon: Gauge, label: "Readiness Assessments", href: "/readiness-assessment", x: 50, y: 8 },
  { icon: FileText, label: "Case Studies", href: "/case-studies", x: 86, y: 26 },
  { icon: BookOpen, label: "Reports & Insights", href: "/reports", x: 96, y: 58 },
  { icon: Building2, label: "E-Directory", href: "/", x: 80, y: 86 },
  { icon: GraduationCap, label: "Programmes & Training", href: "/programmes", x: 50, y: 96 },
  { icon: Calendar, label: "Events & Webinars", href: "/events", x: 20, y: 86 },
  { icon: Cpu, label: "Solutions Ecosystem", href: "/", x: 4, y: 58 },
  { icon: Library, label: "Knowledge Resources", href: "/", x: 14, y: 26 },
];

export const AboutPlatformEcosystem = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container-cii">
        <div className="max-w-3xl mb-12">
          <div className="section-eyebrow mb-3">Platform Ecosystem</div>
          <h2 className="font-display text-3xl md:text-[40px] font-extrabold leading-[1.1] tracking-tight text-[hsl(var(--navy-900))]">
            Everything You Need to Support Your Transformation Journey
          </h2>
          <p className="mt-4 text-base md:text-lg text-[hsl(var(--neutral-700))] leading-relaxed">
            Eight modules working as one. Assessments inform learning, learning informs
            discovery, discovery powers connection — and every interaction strengthens
            the next.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Visualization */}
          <div className="lg:col-span-7 relative h-[480px] md:h-[560px] rounded-3xl border bg-[hsl(var(--neutral-50))] overflow-hidden"
            style={{ borderColor: "hsl(var(--neutral-150))" }}
          >
            {/* radial wash */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at center, hsl(var(--orange-500) / 0.10), transparent 60%)",
              }}
              aria-hidden
            />

            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
              <defs>
                <linearGradient id="eco-line" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--navy-600))" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="hsl(var(--orange-500))" stopOpacity="0.5" />
                </linearGradient>
              </defs>
              {modules.map((m) => (
                <line
                  key={m.label}
                  x1="50" y1="50" x2={m.x} y2={m.y}
                  stroke="url(#eco-line)"
                  strokeWidth="0.25"
                  strokeDasharray="0.8 0.6"
                />
              ))}
            </svg>

            {/* Hub */}
            <div
              className="absolute h-24 w-24 rounded-full grid place-items-center text-white shadow-xl"
              style={{
                left: "50%", top: "50%", transform: "translate(-50%, -50%)",
                background: "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-600)))",
              }}
            >
              <div className="text-center">
                <Sparkles className="h-4 w-4 mx-auto mb-1" />
                <div className="text-[10px] uppercase tracking-widest opacity-80">Platform</div>
                <div className="font-display font-extrabold text-xs">Hub</div>
              </div>
            </div>

            {/* Nodes */}
            {modules.map((m) => {
              const Icon = m.icon;
              return (
                <Link
                  key={m.label}
                  to={m.href}
                  className="absolute group"
                  style={{ left: `${m.x}%`, top: `${m.y}%`, transform: "translate(-50%, -50%)" }}
                >
                  <div className="flex flex-col items-center gap-1.5">
                    <div
                      className="h-12 w-12 rounded-xl border bg-white grid place-items-center shadow-md transition-all group-hover:-translate-y-1 group-hover:shadow-lg"
                      style={{ borderColor: "hsl(var(--neutral-150))" }}
                    >
                      <Icon className="h-5 w-5 text-[hsl(var(--navy-700))] group-hover:text-[hsl(var(--red-600))] transition-colors" />
                    </div>
                    <span className="text-[10px] font-bold text-[hsl(var(--navy-900))] bg-white/90 backdrop-blur px-2 py-0.5 rounded shadow-sm whitespace-nowrap">
                      {m.label}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Module list */}
          <div className="lg:col-span-5">
            <div className="grid sm:grid-cols-2 gap-2">
              {modules.map((m) => {
                const Icon = m.icon;
                return (
                  <Link
                    key={m.label}
                    to={m.href}
                    className="group flex items-center gap-3 p-3 rounded-lg border bg-white hover:border-[hsl(var(--red-600))] hover:shadow-sm transition-all"
                    style={{ borderColor: "hsl(var(--neutral-150))" }}
                  >
                    <div
                      className="h-9 w-9 rounded-md grid place-items-center flex-shrink-0"
                      style={{ background: "hsl(var(--navy-050))", color: "hsl(var(--navy-700))" }}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-semibold text-[hsl(var(--navy-900))] leading-tight">
                      {m.label}
                    </span>
                  </Link>
                );
              })}
            </div>
            <p className="mt-5 text-sm text-[hsl(var(--neutral-700))] leading-relaxed">
              Hover any node to explore — each module deepens what the others can do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
