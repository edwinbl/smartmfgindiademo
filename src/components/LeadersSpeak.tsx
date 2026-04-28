import { useState } from "react";
import { Play, Quote, Linkedin } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import leader1 from "@/assets/leader-1.jpg";
import leader2 from "@/assets/leader-2.jpg";
import leader3 from "@/assets/leader-3.jpg";

type Leader = {
  name: string;
  role: string;
  org: string;
  quote: string;
  image: string;
  videoUrl: string;
  duration: string;
};

const leaders: Leader[] = [
  {
    name: "Arjun Mehta",
    role: "Managing Director",
    org: "Precision Auto Components",
    quote:
      "Connecting our shop floor to the platform unlocked insights we didn't know existed. Downtime is down 38% in six months.",
    image: leader1,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    duration: "3:42",
  },
  {
    name: "Dr. Priya Iyer",
    role: "Chief Technology Officer",
    org: "Bharat Smart Manufacturing",
    quote:
      "The collaboration between MSMEs, academia and providers on this platform is exactly what India's Industry 4.0 push needed.",
    image: leader2,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    duration: "4:18",
  },
  {
    name: "Rajesh Khanna",
    role: "Joint Secretary",
    org: "Ministry of Heavy Industries",
    quote:
      "A single ecosystem aligning policy, capability and capital — this is how we move from pilots to nationwide adoption.",
    image: leader3,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    duration: "5:05",
  },
];

export const LeadersSpeak = () => {
  useReveal();
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const leader = leaders[active];

  const selectLeader = (i: number) => {
    setActive(i);
    setPlaying(false);
  };

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
            Hear directly from industry pioneers, technology leaders and policymakers
            on how the ecosystem is transforming manufacturing.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-5 gap-8 lg:gap-10 items-start">
          {/* Video + active leader */}
          <div className="lg:col-span-3 reveal">
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-foreground shadow-elevated group">
              {playing ? (
                <video
                  key={leader.videoUrl}
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

            <figure className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-elegant">
              <Quote className="h-6 w-6 text-brand-1" />
              <blockquote className="mt-3 font-display text-lg md:text-xl leading-relaxed">
                "{leader.quote}"
              </blockquote>
              <figcaption className="mt-4 flex items-center justify-between gap-4 text-sm">
                <span className="font-semibold">
                  {leader.name}
                  <span className="text-muted-foreground font-normal"> — {leader.org}</span>
                </span>
                <a
                  href="#"
                  aria-label={`${leader.name} on LinkedIn`}
                  className="inline-flex items-center gap-1.5 text-brand-1 hover:gap-2 transition-all font-semibold"
                >
                  <Linkedin className="h-4 w-4" /> Profile
                </a>
              </figcaption>
            </figure>
          </div>

          {/* Leader list */}
          <div className="lg:col-span-2 space-y-3 reveal">
            {leaders.map((l, i) => {
              const isActive = i === active;
              return (
                <button
                  key={l.name}
                  type="button"
                  onClick={() => selectLeader(i)}
                  className={`w-full text-left flex items-center gap-4 rounded-2xl border p-4 transition-smooth ${
                    isActive
                      ? "border-brand-1 bg-accent shadow-elegant"
                      : "border-border bg-card hover:-translate-y-0.5 hover:shadow-elegant"
                  }`}
                >
                  <div className="relative shrink-0">
                    <img
                      src={l.image}
                      alt=""
                      loading="lazy"
                      width={1024}
                      height={1280}
                      className="h-16 w-16 rounded-xl object-cover"
                    />
                    <span
                      className={`absolute -bottom-1 -right-1 grid h-6 w-6 place-items-center rounded-full border-2 border-background ${
                        isActive ? "bg-brand-1 text-primary-foreground" : "bg-card text-brand-1"
                      }`}
                    >
                      <Play className="h-3 w-3 translate-x-px fill-current" />
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-display font-bold truncate">{l.name}</p>
                    <p className="text-sm text-muted-foreground truncate">
                      {l.role}
                    </p>
                    <p className="text-xs text-muted-foreground/80 truncate">
                      {l.org} • {l.duration}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
