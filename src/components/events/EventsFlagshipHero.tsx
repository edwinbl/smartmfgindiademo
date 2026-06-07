import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Calendar, MapPin, Users, Handshake } from "lucide-react";
import { CountdownTimer } from "./CountdownTimer";
import type { EventItem } from "@/data/events";

interface Props {
  event: EventItem;
}

const statusLabel: Record<EventItem["status"], string> = {
  open: "Registrations Open",
  invite: "Invite Only",
  soon: "Coming Soon",
  live: "Live Now",
  completed: "Completed",
};

export const EventsFlagshipHero = ({ event }: Props) => {
  return (
    <section
      className="relative overflow-hidden bg-background border-b"
      style={{ borderColor: "hsl(var(--neutral-150))" }}
      aria-label="Events hero"
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
            <Sparkles className="h-3.5 w-3.5" /> Industry Gatherings
          </span>

          <h1 className="font-display mt-5 text-[36px] sm:text-5xl lg:text-[56px] font-extrabold leading-[1.05] tracking-tight text-[hsl(var(--navy-900))]">
            Summits, Webinars &amp;{" "}
            <span className="relative inline-block">
              <span
                className="relative z-10 bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, hsl(var(--red-600)), hsl(var(--orange-500)))",
                }}
              >
                Convenings
              </span>
              <span
                className="absolute left-0 right-0 bottom-1 h-2 -z-0 rounded-sm opacity-70"
                style={{ background: "hsl(var(--orange-500) / 0.25)" }}
                aria-hidden
              />
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[hsl(var(--neutral-700))] max-w-xl leading-relaxed">
            Convene with India's manufacturing leaders. Discover flagship summits, expert
            webinars, roundtables and capability programmes across the year.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a href="#all-events" className="btn-primary group">
              Browse Events
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <Link to={`/events/${event.slug}`} className="btn-outline">
              View Flagship Summit
            </Link>
          </div>

          <div className="mt-9 grid grid-cols-3 gap-6 max-w-md">
            {[
              { v: "40+", l: "Events / yr" },
              { v: "12K", l: "Attendees" },
              { v: "28", l: "Cities" },
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

        <div className="lg:col-span-5 relative h-[400px] sm:h-[460px] lg:h-[520px] animate-scale-in">
          <EventsCollage event={event} />
        </div>
      </div>
    </section>
  );
};

const EventsCollage = ({ event }: { event: EventItem }) => {
  return (
    <div className="absolute inset-0">
      <div className="absolute top-2 right-2 w-[86%] cii-card p-5 rotate-[2deg]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--red-600))]">
            <Sparkles className="h-3.5 w-3.5" />
            Flagship Summit
          </div>
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[hsl(var(--india-green))]">
            <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--india-green))] animate-pulse" />
            {statusLabel[event.status]}
          </span>
        </div>
        <div className="mt-2 text-sm font-bold text-[hsl(var(--navy-900))] leading-snug line-clamp-2">
          {event.title}
        </div>
        <div className="mt-3 flex items-center gap-x-4 gap-y-1 flex-wrap text-[11px] text-[hsl(var(--neutral-700))]">
          <span className="inline-flex items-center gap-1.5"><Calendar className="h-3 w-3" />{event.date}</span>
          <span className="inline-flex items-center gap-1.5"><MapPin className="h-3 w-3" />{event.location}</span>
        </div>
        <div className="mt-3 pt-3 border-t border-[hsl(var(--neutral-150))]">
          <div className="text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--neutral-500))] mb-1.5">
            Begins in
          </div>
          <CountdownTimer isoDate={event.isoDate} compact />
        </div>
      </div>

      <div className="absolute top-[58%] left-0 w-[56%] cii-card p-4 -rotate-[3deg]">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--navy-700))]">
          <Users className="h-3.5 w-3.5" />
          Featured Speakers
        </div>
        <div className="mt-2 flex items-center -space-x-2">
          {event.speakers.slice(0, 4).map((s, i) => (
            <span
              key={s.name}
              className="h-8 w-8 rounded-full grid place-items-center text-[10px] font-bold text-white border-2 border-white"
              style={{ background: `hsl(var(--navy-${800 - i * 100}))` }}
              title={s.name}
            >
              {s.initials}
            </span>
          ))}
        </div>
        <div className="mt-2 text-[11px] text-[hsl(var(--neutral-700))] line-clamp-1">
          {event.speakers.slice(0, 2).map((s) => s.name).join(" · ")}
        </div>
      </div>

      <div className="absolute bottom-6 right-6 cii-card px-4 py-3 rotate-[2deg] flex items-center gap-3">
        <div
          className="h-9 w-9 rounded-md grid place-items-center text-white"
          style={{ background: "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-600)))" }}
        >
          <Handshake className="h-4 w-4" />
        </div>
        <div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--neutral-500))]">
            Partners
          </div>
          <div className="text-sm font-bold text-[hsl(var(--navy-900))]">85+ ecosystem</div>
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
        <Calendar className="h-5 w-5" />
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
