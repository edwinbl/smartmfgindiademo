import { useState } from "react";
import { Play, Quote, Linkedin } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import leader1 from "@/assets/leader-1.jpg";

const leader = {
  name: "Arjun Mehta",
  role: "Managing Director",
  org: "Precision Auto Components",
  quote:
    "Connecting our shop floor to the platform unlocked insights we didn't know existed. Downtime is down 38% in six months.",
  image: leader1,
  videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  duration: "3:42",
};

export const LeadersSpeak = () => {
  useReveal();
  const [playing, setPlaying] = useState(false);

  return (
    <section id="leaders" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="max-w-2xl reveal">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-1">
            Leaders Speak
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tight">
            Voices shaping India's Industry 4.0 future
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Hear directly from industry pioneers on how the ecosystem is
            transforming manufacturing.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-5 gap-8 lg:gap-10 items-center">
          {/* Video */}
          <div className="lg:col-span-3 reveal">
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-foreground shadow-elevated group">
              {playing ? (
                <video
                  src={leader.videoUrl}
                  poster={leader.image}
                  controls
                  autoPlay
                  className="h-full w-full object-cover"
                />
              ) : (
                <>
                  <img
                    src={leader.image}
                    alt={`${leader.name} — ${leader.role}, ${leader.org}`}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

                  <button
                    type="button"
                    onClick={() => setPlaying(true)}
                    aria-label={`Play video by ${leader.name}`}
                    className="absolute inset-0 grid place-items-center"
                  >
                    <span className="grid h-20 w-20 place-items-center rounded-full bg-background/95 text-brand-1 shadow-glow transition-smooth group-hover:scale-110">
                      <Play className="h-8 w-8 translate-x-0.5 fill-current" />
                    </span>
                  </button>

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-primary-foreground">
                    <span className="inline-flex items-center gap-2 rounded-full bg-background/15 backdrop-blur px-3 py-1 text-xs font-semibold">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-2" />
                      {leader.duration} • Watch interview
                    </span>
                    <h3 className="mt-3 font-display text-2xl md:text-3xl font-bold">
                      {leader.name}
                    </h3>
                    <p className="text-sm md:text-base text-primary-foreground/80">
                      {leader.role}, {leader.org}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-2 reveal">
            <figure className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-elegant">
              <Quote className="h-7 w-7 text-brand-1" />
              <blockquote className="mt-4 font-display text-lg md:text-xl leading-relaxed">
                "{leader.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border">
                <p className="font-display font-bold text-lg">{leader.name}</p>
                <p className="text-sm text-muted-foreground">
                  {leader.role}, {leader.org}
                </p>
                <a
                  href="#"
                  aria-label={`${leader.name} on LinkedIn`}
                  className="mt-4 inline-flex items-center gap-1.5 text-brand-1 hover:gap-2 transition-all font-semibold text-sm"
                >
                  <Linkedin className="h-4 w-4" /> View profile
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
