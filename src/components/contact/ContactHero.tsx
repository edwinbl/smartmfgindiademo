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
      {/* Floating sparkle accents */}
      <div
        className="absolute -top-2 right-8 h-10 w-10 rounded-full grid place-items-center text-white shadow-lg z-10"
        style={{
          background: "linear-gradient(135deg, hsl(var(--orange-500)), hsl(var(--red-600)))",
          animation: "ch-float 6s ease-in-out infinite",
        }}
        aria-hidden
      >
        <Sparkle className="h-4 w-4" />
      </div>
      <div
        className="absolute top-1/2 -left-2 h-8 w-8 rounded-full grid place-items-center text-white shadow-md z-10"
        style={{
          background: "linear-gradient(135deg, hsl(var(--navy-700)), hsl(var(--navy-500)))",
          animation: "ch-float 7s ease-in-out infinite 1s",
        }}
        aria-hidden
      >
        <MessageCircle className="h-4 w-4" />
      </div>

      {/* Main chatbot window */}
      <div className="absolute inset-x-2 top-4 bottom-4 cii-card overflow-hidden flex flex-col rotate-[1.5deg]">
        {/* Header */}
        <div
          className="flex items-center gap-3 px-4 py-3 border-b"
          style={{
            borderColor: "hsl(var(--neutral-150))",
            background: "linear-gradient(135deg, hsl(var(--navy-900)), hsl(var(--navy-700)))",
          }}
        >
          <div
            className="relative h-9 w-9 rounded-full grid place-items-center text-white"
            style={{ background: "linear-gradient(135deg, hsl(var(--orange-500)), hsl(var(--red-600)))" }}
          >
            <Bot className="h-4.5 w-4.5" />
            <span
              className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full ring-2"
              style={{ background: "hsl(var(--india-green))", boxShadow: "0 0 0 2px hsl(var(--navy-900))" }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-bold text-white truncate">CII Assistant</div>
            <div className="text-[10px] text-white/70 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "hsl(var(--india-green))" }} />
              Online · replies instantly
            </div>
          </div>
          <Sparkles className="h-4 w-4 text-white/80" />
        </div>

        {/* Messages */}
        <div
          className="flex-1 px-4 py-4 space-y-3 overflow-hidden"
          style={{ background: "hsl(var(--neutral-050))" }}
        >
          {/* Bot message 1 */}
          <div className="flex items-end gap-2 ch-msg" style={{ animationDelay: "0.2s" }}>
            <div
              className="h-6 w-6 rounded-full grid place-items-center text-white shrink-0"
              style={{ background: "linear-gradient(135deg, hsl(var(--orange-500)), hsl(var(--red-600)))" }}
            >
              <Bot className="h-3 w-3" />
            </div>
            <div
              className="max-w-[78%] px-3 py-2 rounded-2xl rounded-bl-sm text-xs leading-relaxed shadow-sm"
              style={{ background: "white", color: "hsl(var(--navy-900))" }}
            >
              Hi 👋 How can I help — readiness, training or partnerships?
            </div>
          </div>

          {/* User message */}
          <div className="flex justify-end ch-msg" style={{ animationDelay: "1.4s" }}>
            <div
              className="max-w-[72%] px-3 py-2 rounded-2xl rounded-br-sm text-xs leading-relaxed text-white shadow-sm"
              style={{ background: "linear-gradient(135deg, hsl(var(--navy-700)), hsl(var(--navy-500)))" }}
            >
              We need a readiness assessment for our plant.
            </div>
          </div>

          {/* Bot message 2 with chips */}
          <div className="flex items-end gap-2 ch-msg" style={{ animationDelay: "2.6s" }}>
            <div
              className="h-6 w-6 rounded-full grid place-items-center text-white shrink-0"
              style={{ background: "linear-gradient(135deg, hsl(var(--orange-500)), hsl(var(--red-600)))" }}
            >
              <Bot className="h-3 w-3" />
            </div>
            <div
              className="max-w-[80%] px-3 py-2 rounded-2xl rounded-bl-sm text-xs leading-relaxed shadow-sm"
              style={{ background: "white", color: "hsl(var(--navy-900))" }}
            >
              Matched you with 3 experts. Pick a slot:
              <div className="mt-2 flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold" style={{ background: "hsl(var(--orange-100))", color: "hsl(var(--orange-600))" }}>
                  Tue 11:30
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold" style={{ background: "hsl(var(--navy-050))", color: "hsl(var(--navy-700))" }}>
                  Wed 3:00
                </span>
              </div>
            </div>
          </div>

          {/* Typing indicator */}
          <div className="flex items-end gap-2 ch-msg" style={{ animationDelay: "3.8s" }}>
            <div
              className="h-6 w-6 rounded-full grid place-items-center text-white shrink-0"
              style={{ background: "linear-gradient(135deg, hsl(var(--orange-500)), hsl(var(--red-600)))" }}
            >
              <Bot className="h-3 w-3" />
            </div>
            <div
              className="px-3 py-2.5 rounded-2xl rounded-bl-sm shadow-sm flex items-center gap-1"
              style={{ background: "white" }}
            >
              <span className="ch-dot" style={{ animationDelay: "0s" }} />
              <span className="ch-dot" style={{ animationDelay: "0.15s" }} />
              <span className="ch-dot" style={{ animationDelay: "0.3s" }} />
            </div>
          </div>
        </div>

        {/* Composer */}
        <div
          className="px-3 py-2.5 border-t flex items-center gap-2"
          style={{ borderColor: "hsl(var(--neutral-150))", background: "white" }}
        >
          <div
            className="flex-1 h-8 rounded-full px-3 flex items-center text-[11px]"
            style={{ background: "hsl(var(--neutral-100))", color: "hsl(var(--neutral-500))" }}
          >
            Ask anything…
          </div>
          <button
            type="button"
            className="h-8 w-8 rounded-full grid place-items-center text-white shadow-sm"
            style={{ background: "linear-gradient(135deg, hsl(var(--orange-500)), hsl(var(--red-600)))" }}
            aria-label="Send"
          >
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes ch-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes ch-msg-in {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .ch-msg {
          opacity: 0;
          animation: ch-msg-in 0.5s ease-out forwards;
        }
        @keyframes ch-dot-bounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-4px); opacity: 1; }
        }
        .ch-dot {
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          background: hsl(var(--navy-500));
          display: inline-block;
          animation: ch-dot-bounce 1.2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
