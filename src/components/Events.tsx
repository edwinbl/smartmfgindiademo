import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/use-reveal";

const events = [
  { date: "May 14", type: "Webinar", title: "AI on the Shop Floor: Practical Use Cases for MSMEs", loc: "Online", time: "4:00 PM IST" },
  { date: "May 22", type: "Workshop", title: "Building Your Industry 4.0 Roadmap in a Day", loc: "Bengaluru", time: "10:00 AM" },
  { date: "Jun 03", type: "Summit", title: "National Smart Manufacturing Summit 2026", loc: "New Delhi", time: "All day" },
];

export const Events = () => {
  useReveal();
  return (
    <section id="events" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-1">Upcoming</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tight">
            Events & programs
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {events.map((e, i) => {
            const [m, d] = e.date.split(" ");
            return (
              <article
                key={e.title}
                className="reveal group rounded-2xl border border-border bg-card p-6 shadow-elegant transition-smooth hover:-translate-y-1 hover:shadow-elevated hover:border-brand-1/40"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center rounded-xl bg-gradient-primary text-primary-foreground px-3 py-2 min-w-[64px] shadow-glow">
                    <span className="text-[10px] uppercase tracking-wider font-semibold">{m}</span>
                    <span className="font-display text-2xl font-bold leading-none">{d}</span>
                  </div>
                  <div className="flex-1">
                    <span className="inline-flex rounded-full bg-accent text-accent-foreground px-2.5 py-0.5 text-[11px] font-semibold">
                      {e.type}
                    </span>
                    <h3 className="mt-2 font-display font-bold text-lg leading-snug group-hover:text-brand-1 transition-smooth">
                      {e.title}
                    </h3>
                  </div>
                </div>
                <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{e.loc}</span>
                  <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{e.time}</span>
                </div>
                <Button variant="ghost" size="sm" className="mt-5 -ml-2 group/btn">
                  Register <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                </Button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
