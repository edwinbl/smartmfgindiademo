import { Mail, FileText, Image, Video, ArrowRight } from "lucide-react";

const assetTypes = [
  { label: "Case Studies", icon: FileText },
  { label: "Photos & Infographics", icon: Image },
  { label: "Videos & Webinars", icon: Video },
];

export const WireShareContent = () => {
  return (
    <section className="relative overflow-hidden">
      {/* warm saffron-to-white gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--saffron) / 0.08) 0%, hsl(var(--orange-100) / 0.5) 40%, #fff 100%)",
        }}
      />
      {/* subtle radial glow */}
      <div
        className="absolute -top-24 -right-24 w-[360px] h-[360px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--saffron) / 0.2), transparent 60%)",
        }}
      />

      <div className="container-cii relative py-14 md:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left: message */}
          <div className="flex-1 text-center lg:text-left">
            <div className="section-eyebrow mb-3 justify-center lg:justify-start">
              <Mail className="h-3.5 w-3.5" />
              Contribute to the community
            </div>
            <h2 className="font-display font-bold text-2xl md:text-[32px] leading-tight tracking-tight text-navy-800">
              Have a transformation story to share?
            </h2>
            <p className="mt-3 text-base text-muted-foreground max-w-xl mx-auto lg:mx-0">
              We feature the best case studies, photos, videos and infographics from Indian manufacturers on our portal and social channels.
            </p>

            {/* asset-type chips */}
            <div className="mt-5 flex flex-wrap justify-center lg:justify-start gap-2.5">
              {assetTypes.map((t) => {
                const Icon = t.icon;
                return (
                  <span
                    key={t.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-semibold rounded-full border"
                    style={{
                      background: "hsl(var(--orange-100))",
                      borderColor: "hsl(var(--orange-100))",
                      color: "hsl(var(--orange-600))",
                    }}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {t.label}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Right: email CTA card */}
          <div className="shrink-0 w-full max-w-md">
            <a
              href="mailto:submission-smartmfg@cii.in?subject=Content%20Submission%20for%20CII%20Smart%20Manufacturing%20Portal"
              className="group block rounded-2xl border p-6 md:p-8 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                background: "hsl(var(--navy-800))",
                borderColor: "hsl(var(--navy-700))",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="h-12 w-12 shrink-0 rounded-xl grid place-items-center text-white"
                  style={{ background: "hsl(var(--red-600))" }}
                >
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.14em] font-bold text-white/60">
                    Send your content to
                  </div>
                  <div className="mt-1 font-display font-bold text-lg md:text-xl text-white break-all">
                    submission-smartmfg@cii.in
                  </div>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">
                    Attach your assets or share a brief. Our editorial team will review and feature selected stories.
                  </p>
                </div>
              </div>

              <div
                className="mt-5 flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3 transition-all"
              >
                <span>Email us now</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
