import { Mail, Phone, Download, FileText, Users, Building2, CheckCircle2, Sparkles, Image as ImageIcon, Lightbulb } from "lucide-react";
import type { EventItem } from "@/data/events";
import { EventAgendaTimeline } from "./EventAgendaTimeline";

interface Props {
  event: EventItem;
}

const SectionHeading = ({ kicker, title }: { kicker?: string; title: string }) => (
  <div className="space-y-1.5">
    {kicker && (
      <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--navy-50))] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[hsl(var(--navy-700))]">
        {kicker}
      </div>
    )}
    <h2 className="font-display font-bold text-2xl text-[hsl(var(--navy-900))]">{title}</h2>
  </div>
);

export const WorkshopPostDetail = ({ event }: Props) => {
  const r = event.report;
  return (
    <section className="py-12 md:py-16">
      <div className="container-cii space-y-14">
        {/* Workshop overview: date / organizers / title */}
        <div className="grid lg:grid-cols-3 gap-5">
          <div className="cii-card p-5">
            <div className="text-[11px] uppercase tracking-wide font-semibold text-[hsl(var(--neutral-500))]">Date of the Workshop</div>
            <div className="mt-2 font-display font-bold text-lg text-[hsl(var(--navy-900))]">{event.date}</div>
            <div className="mt-1 text-sm text-[hsl(var(--neutral-700))]">{event.duration} · {event.location}</div>
            {event.venue && <div className="mt-1 text-xs text-[hsl(var(--neutral-500))]">{event.venue}</div>}
          </div>
          <div className="cii-card p-5">
            <div className="text-[11px] uppercase tracking-wide font-semibold text-[hsl(var(--neutral-500))]">Organizers</div>
            <ul className="mt-2 space-y-1.5">
              {(event.organizers ?? []).map((o) => (
                <li key={o} className="flex items-start gap-2 text-sm text-[hsl(var(--navy-800))]">
                  <Building2 className="h-4 w-4 mt-0.5 shrink-0 text-[hsl(var(--navy-600))]" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="cii-card p-5">
            <div className="text-[11px] uppercase tracking-wide font-semibold text-[hsl(var(--neutral-500))]">Title of the Workshop</div>
            <div className="mt-2 font-display font-bold text-lg text-[hsl(var(--navy-900))]">{event.title}</div>
            {event.tagline && <div className="mt-1 text-sm text-[hsl(var(--neutral-700))]">{event.tagline}</div>}
          </div>
        </div>

        {/* About */}
        <div>
          <SectionHeading title="About this workshop" />
          <p className="mt-3 text-[hsl(var(--neutral-700))] leading-relaxed">{event.summary}</p>
        </div>

        {/* Programme / Agenda */}
        {event.agenda && event.agenda.length > 0 && (
          <div>
            <SectionHeading kicker="Programme" title="Schedule of sessions" />
            <div className="mt-4">
              <EventAgendaTimeline agenda={event.agenda} />
            </div>
          </div>
        )}

        {/* Report */}
        {r && (
          <div>
            <SectionHeading kicker="Report" title="Post-workshop report" />

            <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="cii-card p-4 bg-[hsl(var(--navy-50))]/60 border-[hsl(var(--navy-100))]">
                <div className="flex items-center gap-2 text-[hsl(var(--navy-700))]">
                  <Users className="h-4 w-4" />
                  <span className="text-[11px] uppercase tracking-wide font-semibold">Attendees</span>
                </div>
                <div className="mt-2 font-display font-bold text-3xl text-[hsl(var(--navy-900))]">{r.attendees}</div>
              </div>
              <div className="cii-card p-4 sm:col-span-2 lg:col-span-3 bg-[hsl(var(--orange-50))]/60 border-[hsl(var(--orange-100))]">
                <div className="text-[11px] uppercase tracking-wide font-semibold text-[hsl(var(--orange-700))]">Clusters covered</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {r.clustersCovered.map((c) => (
                    <span key={c} className="inline-flex items-center rounded-full bg-white border border-[hsl(var(--orange-200))] px-3 py-1 text-sm font-semibold text-[hsl(var(--navy-900))]">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="cii-card p-5">
                <div className="flex items-center gap-2 text-[hsl(var(--navy-900))]">
                  <Sparkles className="h-4 w-4 text-[hsl(var(--orange-600))]" />
                  <h3 className="font-display font-bold text-base">Main takeaways</h3>
                </div>
                <ul className="mt-3 space-y-2.5">
                  {r.mainTakeaways.map((t, i) => (
                    <li key={i} className="flex gap-2.5 text-sm text-[hsl(var(--navy-800))] leading-relaxed">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-[hsl(var(--orange-600))]" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="cii-card p-5">
                <div className="flex items-center gap-2 text-[hsl(var(--navy-900))]">
                  <FileText className="h-4 w-4 text-[hsl(var(--navy-600))]" />
                  <h3 className="font-display font-bold text-base">Success stories to compile & share</h3>
                </div>
                <ul className="mt-3 space-y-2.5">
                  {r.successStories.map((s, i) => (
                    <li key={i} className="flex gap-2.5 text-sm text-[hsl(var(--navy-800))] leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[hsl(var(--navy-600))] shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Speakers with contacts */}
        {event.speakers?.length > 0 && (
          <div>
            <SectionHeading kicker="Speakers" title="List of speakers & contact details" />
            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {event.speakers.map((s) => (
                <div key={s.name} className="cii-card p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[hsl(var(--navy-700))] to-[hsl(var(--navy-600))] grid place-items-center text-sm font-bold text-white shrink-0">
                      {s.initials}
                    </div>
                    <div className="min-w-0">
                      <div className="font-display font-bold text-[hsl(var(--navy-900))] truncate">{s.name}</div>
                      <div className="text-xs text-[hsl(var(--neutral-700))] truncate">{s.role}</div>
                      <div className="text-[11px] text-[hsl(var(--neutral-500))] truncate">{s.org}</div>
                    </div>
                  </div>
                  {(s.email || s.phone) && (
                    <div className="mt-3 pt-3 border-t border-[hsl(var(--neutral-150))] space-y-1.5">
                      {s.email && (
                        <a href={`mailto:${s.email}`} className="flex items-center gap-2 text-xs text-[hsl(var(--navy-800))] hover:text-[hsl(var(--red-600))] break-all">
                          <Mail className="h-3.5 w-3.5 shrink-0" /> {s.email}
                        </a>
                      )}
                      {s.phone && (
                        <a href={`tel:${s.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-2 text-xs text-[hsl(var(--navy-800))] hover:text-[hsl(var(--red-600))]">
                          <Phone className="h-3.5 w-3.5 shrink-0" /> {s.phone}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Presentations */}
        {event.presentations && event.presentations.length > 0 && (
          <div>
            <SectionHeading kicker="Presentations" title="Speaker decks & materials" />
            <ul className="mt-4 divide-y divide-[hsl(var(--neutral-150))] cii-card overflow-hidden">
              {event.presentations.map((d, i) => (
                <li key={i}>
                  <a
                    href={d.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 p-4 hover:bg-[hsl(var(--neutral-50))] transition group"
                  >
                    <div className="h-10 w-10 shrink-0 rounded-md bg-[hsl(var(--orange-50))] text-[hsl(var(--orange-700))] grid place-items-center">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm text-[hsl(var(--navy-900))] group-hover:underline underline-offset-4">{d.title}</div>
                      {d.speaker && <div className="mt-0.5 text-xs text-[hsl(var(--neutral-700))] truncate">{d.speaker}</div>}
                    </div>
                    {d.size && <div className="hidden sm:block text-[11px] uppercase tracking-wide text-[hsl(var(--neutral-500))]">{d.size}</div>}
                    <Download className="h-4 w-4 text-[hsl(var(--navy-700))] shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Resource persons */}
        {event.resourcePersons && event.resourcePersons.length > 0 && (
          <div>
            <SectionHeading kicker="Resource persons" title="For consultancy, skilling & guidance" />
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              {event.resourcePersons.map((p) => (
                <div key={p.name} className="cii-card p-5">
                  <div className="font-display font-bold text-[hsl(var(--navy-900))]">{p.name}</div>
                  <div className="text-xs text-[hsl(var(--neutral-500))]">{p.org}</div>
                  <p className="mt-2 text-sm text-[hsl(var(--neutral-700))] leading-relaxed">{p.expertise}</p>
                  {(p.email || p.phone) && (
                    <div className="mt-3 pt-3 border-t border-[hsl(var(--neutral-150))] flex flex-wrap gap-x-4 gap-y-1.5">
                      {p.email && (
                        <a href={`mailto:${p.email}`} className="flex items-center gap-2 text-xs text-[hsl(var(--navy-800))] hover:text-[hsl(var(--red-600))] break-all">
                          <Mail className="h-3.5 w-3.5 shrink-0" /> {p.email}
                        </a>
                      )}
                      {p.phone && (
                        <a href={`tel:${p.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-2 text-xs text-[hsl(var(--navy-800))] hover:text-[hsl(var(--red-600))]">
                          <Phone className="h-3.5 w-3.5 shrink-0" /> {p.phone}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Photographs */}
        {event.photographs && event.photographs.length > 0 && (
          <div>
            <SectionHeading kicker="Photographs" title="Glimpses from the workshop" />
            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {event.photographs.map((p, i) => (
                <figure key={i} className="cii-card overflow-hidden group">
                  <div className="aspect-[4/3] bg-[hsl(var(--neutral-100))] overflow-hidden">
                    <img
                      src={p.url}
                      alt={p.caption ?? `${event.title} — photograph ${i + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-500"
                    />
                  </div>
                  {p.caption && (
                    <figcaption className="px-3 py-2 text-xs text-[hsl(var(--neutral-700))] flex items-start gap-1.5">
                      <ImageIcon className="h-3.5 w-3.5 mt-0.5 shrink-0 text-[hsl(var(--neutral-500))]" />
                      <span>{p.caption}</span>
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        )}

        {/* Learnings */}
        {event.learnings && event.learnings.length > 0 && (
          <div>
            <SectionHeading kicker="Learnings" title="What we took away from the workshop" />
            <ul className="mt-4 grid md:grid-cols-2 gap-2.5">
              {event.learnings.map((l, i) => (
                <li key={i} className="cii-card p-4 flex items-start gap-3 text-sm text-[hsl(var(--navy-800))] leading-relaxed">
                  <Lightbulb className="h-4 w-4 mt-0.5 shrink-0 text-[hsl(var(--orange-600))]" />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};
