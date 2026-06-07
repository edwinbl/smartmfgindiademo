import { ArrowRight, Sparkles, Mail, Phone, MessageCircle, Bot, Zap, Sparkle } from "lucide-react";

export const ContactHero = () => {
  return (
    <section
      className="relative overflow-hidden bg-background border-b"
      style={{ borderColor: "hsl(var(--neutral-150))" }}
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1100px 500px at 85% 0%, hsl(var(--orange-500) / 0.10), transparent 60%), radial-gradient(900px 600px at 0% 100%, hsl(var(--navy-600) / 0.12), transparent 55%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--neutral-200) / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--neutral-200) / 0.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
        aria-hidden
      />

      <div className="container-cii relative grid lg:grid-cols-12 gap-10 lg:gap-16 items-center py-14 lg:py-20">
        <div className="lg:col-span-7 animate-fade-in">
          <span className="cii-chip">
            <Sparkles className="h-3.5 w-3.5" /> We reply within a few hours
          </span>

          <h1 className="font-display mt-5 text-[36px] sm:text-5xl lg:text-[56px] font-extrabold leading-[1.05] tracking-tight text-[hsl(var(--navy-900))]">
            Let's start a{" "}
            <span className="text-[hsl(var(--red-600))]">conversation</span>{" "}
            that moves manufacturing forward.
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[hsl(var(--neutral-700))] max-w-xl leading-relaxed">
            Tell us what you're working on — readiness, partnerships, training or platform
            help — and we'll route you to the right people in the ecosystem.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a href="#intent" className="btn-primary group">
              Start Your Journey
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#ecosystem" className="btn-outline">
              Explore the Ecosystem
            </a>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <a href="mailto:smartmfg@cii.in" className="inline-flex items-center gap-2 text-[hsl(var(--neutral-700))] hover:text-[hsl(var(--red-600))] transition-colors">
              <Mail className="h-4 w-4" />
              smartmfg@cii.in
            </a>
            <a href="tel:+911141502301" className="inline-flex items-center gap-2 text-[hsl(var(--neutral-700))] hover:text-[hsl(var(--red-600))] transition-colors">
              <Phone className="h-4 w-4" />
              +91 11 4150 2301
            </a>
            <span className="inline-flex items-center gap-2 text-[hsl(var(--neutral-500))]">
              <Zap className="h-4 w-4 text-[hsl(var(--india-green))]" />
              Avg response &lt; 4 hrs
            </span>
          </div>

          <div className="mt-9 grid grid-cols-3 gap-6 max-w-md">
            {[
              { v: "< 4h", l: "Avg Reply" },
              { v: "12", l: "Regional Hubs" },
              { v: "50+", l: "Partner Experts" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-numeric text-2xl font-extrabold text-[hsl(var(--navy-900))]">
                  {s.v}
                </div>
                <div className="text-[11px] uppercase tracking-[0.14em] font-bold text-[hsl(var(--neutral-500))] mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative h-[380px] sm:h-[440px] lg:h-[500px] animate-scale-in">
          <ContactCollage />
        </div>
      </div>
    </section>
  );
};

const ContactCollage = () => {
  return (
    <div className="absolute inset-0">
      <div className="absolute top-2 right-2 w-[82%] cii-card p-5 rotate-[2deg]">
        <div className="flex items-center gap-3">
          <div
            className="h-9 w-9 rounded-full grid place-items-center text-white text-xs font-bold"
            style={{ background: "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-600)))" }}
          >
            CII
          </div>
          <div>
            <div className="text-xs font-bold text-[hsl(var(--navy-900))]">Assessment Team</div>
            <div className="text-[10px] text-[hsl(var(--neutral-500))]">Replying now</div>
          </div>
          <span className="ml-auto h-2 w-2 rounded-full" style={{ background: "hsl(var(--india-green))" }} />
        </div>
        <p className="mt-3 text-sm text-[hsl(var(--neutral-700))] leading-relaxed">
          "Happy to walk you through the readiness framework — when works for a 20-min call?"
        </p>
        <div className="mt-3 flex gap-2">
          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold" style={{ background: "hsl(var(--navy-050))", color: "hsl(var(--navy-700))" }}>
            Industry 4.0
          </span>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold" style={{ background: "hsl(var(--orange-100))", color: "hsl(var(--orange-600))" }}>
            Readiness
          </span>
        </div>
      </div>

      <div className="absolute top-[44%] left-0 w-[60%] cii-card p-4 -rotate-[3deg]">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--red-600))]">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: "hsl(var(--red-600))" }} />
          Smart routing
        </div>
        <div className="mt-2 text-sm font-bold text-[hsl(var(--navy-900))]">Matched to 3 experts</div>
        <div className="mt-3 flex items-center -space-x-2">
          {["#0E2A5C", "#C8102E", "#FF6B1A"].map((c, i) => (
            <span
              key={i}
              className="h-7 w-7 rounded-full ring-2 ring-white text-white text-[10px] font-bold grid place-items-center"
              style={{ background: c }}
            >
              {String.fromCharCode(65 + i)}
            </span>
          ))}
          <span className="pl-3 text-[10px] text-[hsl(var(--neutral-500))]">+ partners</span>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 cii-card px-4 py-3 rotate-[2deg] flex items-center gap-3">
        <div
          className="h-9 w-9 rounded-md grid place-items-center text-white"
          style={{ background: "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-600)))" }}
        >
          <Calendar className="h-4 w-4" />
        </div>
        <div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--neutral-500))]">
            Consultation
          </div>
          <div className="text-sm font-bold text-[hsl(var(--navy-900))]">Tue · 11:30 AM IST</div>
        </div>
      </div>

      <div
        className="absolute top-0 left-4 h-12 w-12 rounded-full grid place-items-center text-white shadow-lg"
        style={{
          background: "linear-gradient(135deg, hsl(var(--orange-500)), hsl(var(--red-600)))",
          animation: "float 6s ease-in-out infinite",
        }}
        aria-hidden
      >
        <MessageCircle className="h-5 w-5" />
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};
