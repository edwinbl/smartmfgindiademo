import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Calendar, MapPin, Users, Mic, Ticket, Clock } from "lucide-react";
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
          <h1 className="font-display text-[36px] sm:text-5xl lg:text-[56px] font-extrabold leading-[1.05] tracking-tight text-[hsl(var(--navy-900))]">
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
    <div className="absolute inset-0 grid place-items-center">
      {/* Soft halo */}
      <div
        className="absolute h-[360px] w-[360px] rounded-full blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--orange-500) / 0.22), transparent 70%)",
        }}
        aria-hidden
      />

      {/* Back card — Agenda */}
      <div
        className="absolute left-[6%] top-[8%] w-[58%] h-[80%] rounded-xl shadow-xl border border-[hsl(var(--neutral-150))] overflow-hidden -rotate-[7deg] bg-white"
        style={{ animation: "evFloat 7s ease-in-out infinite" }}
      >
        <div
          className="h-[36%] w-full p-4 flex flex-col justify-between text-white"
          style={{
            background:
              "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-600)))",
          }}
        >
          <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.14em] opacity-90">
            <Calendar className="h-3 w-3" /> Agenda · Day 1
          </div>
          <div>
            <div className="text-[10px] opacity-80">Smart Manufacturing Summit</div>
            <div className="text-sm font-extrabold leading-snug line-clamp-2">
              {event.title}
            </div>
          </div>
        </div>
        <div className="p-4 space-y-2.5">
          {[
            { t: "09:30", l: "Opening Keynote" },
            { t: "11:00", l: "Factory of the Future" },
            { t: "14:00", l: "MSME Roundtable" },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-[10px] font-bold font-numeric text-[hsl(var(--red-600))] w-10">
                {s.t}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--orange-500))]" />
              <span className="text-[11px] font-semibold text-[hsl(var(--navy-900))] truncate">
                {s.l}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Front card — Live event with countdown */}
      <div
        className="absolute right-[5%] top-[18%] w-[62%] h-[74%] rounded-xl shadow-2xl border border-[hsl(var(--neutral-150))] overflow-hidden rotate-[4deg] bg-white"
        style={{ animation: "evFloat 6s ease-in-out infinite 0.4s" }}
      >
        <div
          className="h-[38%] w-full p-4 flex items-start justify-between text-white"
          style={{
            background:
              "linear-gradient(135deg, hsl(var(--red-600)), hsl(var(--orange-500)))",
          }}
        >
          <div>
            <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.14em] opacity-90">
              <Sparkles className="h-3 w-3" /> Flagship Summit
            </div>
            <div className="mt-2 text-sm font-extrabold leading-snug max-w-[80%]">
              {statusLabel[event.status]}
            </div>
          </div>
          <div className="h-9 w-9 rounded-lg bg-white/15 backdrop-blur grid place-items-center">
            <Ticket className="h-5 w-5" />
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-x-3 gap-y-1 flex-wrap text-[10px] text-[hsl(var(--neutral-700))]">
            <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" />{event.date}</span>
            <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" />{event.location}</span>
          </div>
          <div className="mt-3 pt-3 border-t border-[hsl(var(--neutral-150))]">
            <div className="flex items-center justify-between mb-2">
              <div className="text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--neutral-500))]">
                Begins in
              </div>
              <Clock className="h-3 w-3 text-[hsl(var(--neutral-500))]" />
            </div>
            <CountdownTimer isoDate={event.isoDate} compact />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center -space-x-2">
              {event.speakers.slice(0, 4).map((s, i) => (
                <span
                  key={s.name}
                  className="h-7 w-7 rounded-full grid place-items-center text-[9px] font-bold text-white border-2 border-white"
                  style={{ background: `hsl(var(--navy-${800 - i * 100}))` }}
                  title={s.name}
                >
                  {s.initials}
                </span>
              ))}
            </div>
            <div className="text-[10px] font-semibold text-[hsl(var(--neutral-700))]">
              + speakers
            </div>
          </div>
        </div>
      </div>

      {/* Floating speaker badge */}
      <div
        className="absolute bottom-2 left-2 cii-card px-3 py-2 flex items-center gap-2 -rotate-[3deg] bg-white"
        style={{ animation: "evFloat 7.5s ease-in-out infinite 1s" }}
      >
        <div
          className="h-8 w-8 rounded-lg grid place-items-center text-white"
          style={{
            background: "linear-gradient(135deg, hsl(var(--navy-800)), hsl(var(--navy-600)))",
          }}
        >
          <Mic className="h-4 w-4" />
        </div>
        <div>
          <div className="text-[9px] uppercase tracking-wider font-bold text-[hsl(var(--neutral-500))]">
            Expert Speakers
          </div>
          <div className="text-sm font-extrabold text-[hsl(var(--navy-900))] font-numeric">
            300+
          </div>
        </div>
      </div>

      {/* Floating attendees chip */}
      <div
        className="absolute top-2 right-4 cii-card px-3 py-2 flex items-center gap-2 rotate-[4deg] bg-white"
        style={{ animation: "evFloat 8s ease-in-out infinite 0.7s" }}
      >
        <Users className="h-4 w-4 text-[hsl(var(--red-600))]" />
        <div className="text-[10px] font-bold text-[hsl(var(--navy-900))]">
          12K+ Attendees · 28 Cities
        </div>
      </div>

      <style>{`
        @keyframes evFloat {
          0%, 100% { transform: translateY(0) rotate(var(--r, 0deg)); }
          50% { transform: translateY(-8px) rotate(var(--r, 0deg)); }
        }
      `}</style>
    </div>
  );
};
