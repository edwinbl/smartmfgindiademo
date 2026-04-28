import { useReveal } from "@/hooks/use-reveal";

const partners = [
  "MeitY", "NITI Aayog", "Make in India", "CII", "FICCI",
  "IIT Madras", "IISc", "Siemens", "Bosch", "Tata", "Mahindra", "WEF",
];

export const Partners = () => {
  useReveal();
  const loop = [...partners, ...partners];
  return (
    <section id="partners" className="py-20 md:py-24 border-y border-border bg-card">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-1">Ecosystem</p>
          <h2 className="mt-3 font-display text-2xl md:text-3xl font-bold tracking-tight">
            Backed by leaders shaping Industry 4.0
          </h2>
        </div>

        <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max marquee gap-12">
            {loop.map((p, i) => (
              <div
                key={i}
                className="grid h-14 min-w-[160px] place-items-center rounded-xl bg-background border border-border px-6 text-sm font-display font-bold text-muted-foreground hover:text-foreground hover:border-brand-1/50 transition-smooth"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
