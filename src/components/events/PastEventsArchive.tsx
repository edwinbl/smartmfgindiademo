import { Link } from "react-router-dom";
import { PlayCircle, FileText, ArrowRight } from "lucide-react";
import { getPast } from "@/data/events";

export const PastEventsArchive = () => {
  const past = getPast();
  return (
    <section className="py-16 md:py-24 bg-[hsl(var(--neutral-50))]">
      <div className="container-cii">
        <div className="max-w-2xl">
          <div className="section-eyebrow mb-2">Past Events Archive</div>
          <h2 className="font-display font-bold text-[28px] md:text-[34px] text-[hsl(var(--navy-900))] tracking-tight">
            Knowledge from every convening, captured for the ecosystem
          </h2>
          <p className="mt-3 text-[hsl(var(--neutral-700))]">
            Watch session recordings, download proceedings and revisit outcomes from past summits, conferences and roundtables.
          </p>
        </div>

        <div className="relative mt-10">
          {/* Timeline line on md+ */}
          <div
            className="hidden md:block absolute left-[15px] top-2 bottom-2 w-px"
            style={{ background: "hsl(var(--neutral-200))" }}
          />
          <ul className="space-y-6">
            {past.map((e) => (
              <li key={e.slug} className="md:pl-12 relative">
                <span
                  className="hidden md:block absolute left-[10px] top-6 h-3 w-3 rounded-full ring-4 ring-[hsl(var(--neutral-50))]"
                  style={{ background: "hsl(var(--red-600))" }}
                />
                <article className="cii-card p-5 md:p-6 grid md:grid-cols-[1fr_auto] gap-5 items-start">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.12em] font-bold text-[hsl(var(--neutral-500))]">
                      <span>{e.date}</span>
                      <span>·</span>
                      <span>{e.location}</span>
                      <span>·</span>
                      <span className="text-[hsl(var(--navy-700))]">{e.type}</span>
                    </div>
                    <h3 className="font-display font-bold text-lg md:text-xl text-[hsl(var(--navy-900))] mt-2">
                      <Link to={`/events/${e.slug}`} className="hover:text-[hsl(var(--red-600))]">
                        {e.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-[hsl(var(--neutral-700))] mt-1.5">{e.summary}</p>
                    {e.pastStats && (
                      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {e.pastStats.map((s) => (
                          <div key={s.label} className="rounded-md bg-[hsl(var(--neutral-100))] px-3 py-2">
                            <div className="font-numeric font-bold text-base text-[hsl(var(--navy-900))]">{s.value}</div>
                            <div className="text-[10px] uppercase tracking-[0.12em] font-bold text-[hsl(var(--neutral-500))]">{s.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex md:flex-col gap-2 md:min-w-[160px]">
                    {e.highlightReelUrl && (
                      <a
                        href={e.highlightReelUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 h-9 px-3 rounded-sm bg-[hsl(var(--navy-800))] text-white text-xs font-semibold hover:bg-[hsl(var(--navy-700))]"
                      >
                        <PlayCircle className="h-4 w-4" /> Highlights
                      </a>
                    )}
                    {e.recordingsUrl && (
                      <a
                        href={e.recordingsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 h-9 px-3 rounded-sm border border-[hsl(var(--neutral-200))] text-[hsl(var(--navy-800))] text-xs font-semibold hover:bg-[hsl(var(--neutral-100))]"
                      >
                        Watch sessions
                      </a>
                    )}
                    {e.proceedingsUrl && (
                      <a
                        href={e.proceedingsUrl}
                        className="inline-flex items-center justify-center gap-2 h-9 px-3 rounded-sm border border-[hsl(var(--neutral-200))] text-[hsl(var(--navy-800))] text-xs font-semibold hover:bg-[hsl(var(--neutral-100))]"
                      >
                        <FileText className="h-4 w-4" /> Proceedings
                      </a>
                    )}
                    <Link
                      to={`/events/${e.slug}`}
                      className="inline-flex items-center justify-center gap-1 text-xs font-semibold text-[hsl(var(--navy-700))] hover:text-[hsl(var(--red-600))]"
                    >
                      Event page <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
