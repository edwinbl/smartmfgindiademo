import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Users, Sparkles, PlayCircle, Handshake } from "lucide-react";
import heroImage from "@/assets/events-flagship-hero.jpg";
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

const statusDot: Record<EventItem["status"], string> = {
  open: "bg-emerald-400",
  invite: "bg-[hsl(var(--saffron))]",
  soon: "bg-sky-400",
  live: "bg-[hsl(var(--red-600))] animate-pulse",
  completed: "bg-white/40",
};

export const EventsFlagshipHero = ({ event }: Props) => {
  return (
    <section className="relative isolate overflow-hidden text-white">
      {/* Background image */}
      <img
        src={heroImage}
        alt=""
        aria-hidden
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(115deg, hsl(var(--navy-900) / 0.92) 0%, hsl(var(--navy-800) / 0.78) 45%, hsl(var(--navy-900) / 0.55) 100%)",
        }}
      />
      <div className="absolute inset-0 blueprint-grid opacity-30" aria-hidden />
      {/* Animated accent blob */}
      <div
        aria-hidden
        className="absolute -top-32 -right-24 h-[520px] w-[520px] rounded-full blur-3xl opacity-40 animate-pulse"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--red-600) / 0.55) 0%, transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--orange-500) / 0.4) 0%, transparent 65%)",
        }}
      />

      <div className="container-cii relative z-10 pt-20 pb-24 md:pt-28 md:pb-32 lg:pt-32 lg:pb-40">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[11px] uppercase tracking-[0.14em] font-bold">
                <span className={`h-1.5 w-1.5 rounded-full ${statusDot[event.status]}`} />
                {statusLabel[event.status]}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[hsl(var(--red-600))] text-[11px] uppercase tracking-[0.14em] font-bold">
                <Sparkles className="h-3 w-3" /> Flagship Summit
              </span>
              <span className="text-xs text-white/70">{event.date}</span>
            </div>

            <h1 className="font-display font-bold text-[36px] sm:text-[44px] md:text-[60px] leading-[1.05] tracking-tight">
              {event.title}
            </h1>

            {event.theme && (
              <p className="text-lg md:text-xl text-white/85 font-medium max-w-2xl">
                {event.theme}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/80">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-white/60" /> {event.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <Users className="h-4 w-4 text-white/60" /> {event.highlights[0]?.value} {event.highlights[0]?.label}
              </span>
              <span className="hidden sm:inline">·</span>
              <span>{event.mode}</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link to={`/events/${event.slug}`} className="btn-primary">
                Register Now <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={`/events/${event.slug}#agenda`} className="btn-ghost">
                Explore Agenda
              </a>
              <Link to="/contact" className="btn-ghost">
                <Handshake className="h-4 w-4" /> Become a Partner
              </Link>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white transition-colors"
              >
                <PlayCircle className="h-5 w-5" /> Watch highlights
              </a>
            </div>

            {/* Countdown */}
            <div className="pt-4">
              <div className="text-[11px] uppercase tracking-[0.14em] font-bold text-white/60 mb-2">
                Summit begins in
              </div>
              <CountdownTimer isoDate={event.isoDate} />
            </div>
          </div>

          {/* Right: floating KPI tiles */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-3">
              {event.highlights.slice(0, 4).map((h, i) => (
                <div
                  key={h.label}
                  className="rounded-lg p-5 bg-white/10 backdrop-blur-md border border-white/15"
                  style={{
                    transform: `translateY(${i % 2 === 0 ? "-8px" : "8px"})`,
                  }}
                >
                  <div className="font-numeric font-bold text-2xl md:text-3xl text-white">
                    {h.value}
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.14em] text-white/70 mt-1">
                    {h.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Speaker preview strip */}
            <div className="mt-6 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 p-4">
              <div className="text-[11px] uppercase tracking-[0.14em] font-bold text-white/70 mb-3">
                Featured speakers
              </div>
              <div className="flex items-center -space-x-2 mb-3">
                {event.speakers.slice(0, 5).map((s) => (
                  <div
                    key={s.name}
                    title={`${s.name} · ${s.org}`}
                    className="h-10 w-10 rounded-full border-2 border-[hsl(var(--navy-800))] bg-gradient-to-br from-white/30 to-white/10 grid place-items-center text-xs font-bold text-white"
                  >
                    {s.initials}
                  </div>
                ))}
                <div className="ml-3 text-xs text-white/80 font-semibold">
                  +{event.speakers.length > 5 ? event.speakers.length - 5 : 0} more
                </div>
              </div>
              <div className="text-xs text-white/70 leading-snug">
                {event.speakers
                  .slice(0, 3)
                  .map((s) => s.name)
                  .join(" · ")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
