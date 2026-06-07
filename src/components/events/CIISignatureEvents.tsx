import { ShieldCheck, Sparkles } from "lucide-react";
import { EventCard } from "./EventCard";
import { events, type EventItem } from "@/data/events";

interface Props {
  onRegister: (e: EventItem) => void;
}

export const CIISignatureEvents = ({ onRegister }: Props) => {
  // CII-organized events: flagship + those hosted/anchored by CII.
  const ciiEvents = events
    .filter(
      (e) =>
        e.flagship ||
        e.speakers.some((s) => /CII/i.test(s.org)) ||
        /CII/i.test(e.venue || "") ||
        e.highlights.some((h) => /CII/i.test(h.value)),
    )
    .slice(0, 4);

  if (ciiEvents.length === 0) return null;

  return (
    <section className="py-14 md:py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, hsl(var(--neutral-50)) 0%, hsl(var(--background)) 100%)",
        }}
        aria-hidden
      />
      <div className="container-cii">
        <div className="mb-8 md:mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="section-eyebrow mb-2 inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3 w-3" /> CII Signature
            </div>
            <h2 className="font-display font-bold text-[26px] md:text-[36px] text-[hsl(var(--navy-900))] tracking-tight leading-tight">
              Convenings hosted by{" "}
              <span className="relative inline-block">
                <span
                  className="relative z-10 bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, hsl(var(--red-600)), hsl(var(--orange-500)))",
                  }}
                >
                  CII
                </span>
                <span
                  className="absolute left-0 right-0 bottom-0 h-2 -z-0 rounded-sm opacity-70"
                  style={{ background: "hsl(var(--orange-500) / 0.25)" }}
                  aria-hidden
                />
              </span>
            </h2>
            <p className="mt-3 text-sm md:text-base text-[hsl(var(--neutral-700))] max-w-2xl">
              Flagship summits, roundtables and programmes anchored by the Confederation of
              Indian Industry — bringing together India's manufacturing leadership.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 px-4 h-10 rounded-full bg-white border border-[hsl(var(--neutral-200))] text-[12px] font-semibold text-[hsl(var(--navy-800))]">
            <Sparkles className="h-3.5 w-3.5 text-[hsl(var(--red-600))]" />
            {ciiEvents.length} curated event{ciiEvents.length === 1 ? "" : "s"}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {ciiEvents.map((e) => (
            <EventCard key={e.slug} event={e} onRegister={onRegister} />
          ))}
        </div>
      </div>
    </section>
  );
};
