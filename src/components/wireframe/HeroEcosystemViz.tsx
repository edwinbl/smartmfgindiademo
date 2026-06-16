import {
  Cpu, Bot, Cloud, Database, ShieldCheck, Boxes, Glasses, Network, Wifi,
  Factory, GraduationCap, Users, Building2, Wrench,
  Layers, Radio, Activity, Rocket, Landmark,
} from "lucide-react";

const pillars = [
  { Icon: Wifi, label: "IoT" },
  { Icon: Bot, label: "AI / ML" },
  { Icon: Cpu, label: "Robotics" },
  { Icon: Boxes, label: "Additive" },
  { Icon: Glasses, label: "AR / VR" },
  { Icon: Cloud, label: "Cloud" },
  { Icon: Database, label: "Big Data" },
  { Icon: ShieldCheck, label: "Cyber" },
  { Icon: Network, label: "Integration" },
  { Icon: Layers, label: "Digital Twin" },
  { Icon: Radio, label: "5G / Edge" },
  { Icon: Activity, label: "Predictive" },
];

const ecosystem = [
  { Icon: Factory, label: "MSMEs" },
  { Icon: Wrench, label: "Solution Providers" },
  { Icon: GraduationCap, label: "Academia" },
  { Icon: Users, label: "Experts" },
  { Icon: Building2, label: "Industry" },
  { Icon: Rocket, label: "Startups" },
  { Icon: Landmark, label: "Govt / Policy" },
];

export const HeroEcosystemViz = () => {
  return (
    <div className="relative w-full max-w-[520px] mx-auto">
      {/* Ambient glow */}
      <div
        className="absolute -inset-8 -z-10 rounded-[40px] blur-3xl opacity-70"
        style={{
          background:
            "conic-gradient(from 140deg at 50% 50%, hsl(var(--orange-500) / 0.45), hsl(var(--saffron) / 0.35), hsl(var(--red-600) / 0.30), hsl(var(--orange-500) / 0.45))",
        }}
        aria-hidden
      />

      <div
        className="relative rounded-3xl border border-white/15 overflow-hidden p-5 sm:p-6"
        style={{
          background:
            "linear-gradient(160deg, hsl(var(--navy-900) / 0.85) 0%, hsl(var(--navy-800) / 0.7) 100%)",
          backdropFilter: "blur(8px)",
          boxShadow:
            "0 30px 80px -30px hsl(var(--orange-500) / 0.45), inset 0 1px 0 hsl(0 0% 100% / 0.08)",
        }}
      >
        {/* Hub */}
        <div className="relative flex items-center gap-4 mb-5">
          <div
            className="relative h-16 w-16 shrink-0 rounded-2xl grid place-items-center"
            style={{
              background:
                "linear-gradient(135deg, hsl(var(--orange-500)), hsl(var(--saffron)) 60%, hsl(var(--red-600)))",
              boxShadow:
                "0 12px 30px -8px hsl(var(--orange-500) / 0.7), inset 0 1px 0 hsl(0 0% 100% / 0.4)",
            }}
          >
            <span className="font-display text-white font-extrabold text-sm tracking-wider">CII</span>
            <span className="absolute -inset-1 rounded-2xl border border-white/25 animate-pulse" aria-hidden />
          </div>
          <div className="min-w-0">
            <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[hsl(var(--orange-300,var(--orange-500)))]">
              National Platform
            </div>
            <div className="font-display text-white font-extrabold text-lg leading-tight">
              Smart Manufacturing<br />Capability Hub
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div>
          <div className="flex items-center gap-2 mb-2.5">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            <span className="text-[9.5px] uppercase tracking-[0.22em] font-bold text-white/60">
              12 Industry 4.0 Pillars
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          </div>
          <div className="grid grid-cols-6 gap-1.5 sm:gap-2">
            {pillars.map(({ Icon, label }, i) => (
              <div
                key={label}
                className="group relative aspect-square rounded-xl border border-white/12 bg-white/[0.04] hover:bg-white/[0.10] hover:border-[hsl(var(--orange-500))]/60 transition-all duration-300 grid place-items-center"
                title={label}
                style={{ animation: `pillarPulse 6s ease-in-out ${i * 0.15}s infinite` }}
              >
                <Icon className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-[hsl(var(--orange-500))] group-hover:text-[hsl(var(--saffron))] group-hover:scale-110 transition-transform" strokeWidth={2} />
              </div>
            ))}
          </div>
          <div className="mt-1.5 grid grid-cols-6 gap-1.5 sm:gap-2">
            {pillars.map(({ label }) => (
              <div key={`l-${label}`} className="text-[8.5px] text-center font-semibold tracking-wide text-white/55 uppercase truncate">
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Ecosystem chips */}
        <div className="mt-5">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            <span className="text-[9.5px] uppercase tracking-[0.22em] font-bold text-white/60">
              Ecosystem
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          </div>
          <div className="flex flex-wrap gap-1.5">
            {ecosystem.map(({ Icon, label }) => (
              <div
                key={label}
                className="inline-flex items-center gap-1.5 pl-1.5 pr-2.5 py-1 rounded-full border border-white/15 bg-gradient-to-r from-white/[0.06] to-white/[0.02]"
              >
                <span
                  className="grid place-items-center h-4.5 w-4.5 rounded-full"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(var(--orange-500) / 0.35), hsl(var(--saffron) / 0.25))",
                  }}
                >
                  <Icon className="h-2.5 w-2.5 text-[hsl(var(--saffron))]" strokeWidth={2.4} />
                </span>
                <span className="font-display text-[10px] font-semibold tracking-wide text-white/85 whitespace-nowrap">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom shine */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, hsl(var(--orange-500) / 0.18), transparent 70%)",
          }}
          aria-hidden
        />
      </div>

      <style>{`
        @keyframes pillarPulse {
          0%, 100% { box-shadow: 0 0 0 0 hsl(var(--orange-500) / 0); }
          50% { box-shadow: 0 0 14px 0 hsl(var(--orange-500) / 0.25); }
        }
      `}</style>
    </div>
  );
};
