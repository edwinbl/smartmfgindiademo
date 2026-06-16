import { WireSection } from "./WireSection";
import { Twitter, Linkedin, ExternalLink, Radio } from "lucide-react";

type Post = {
  platform: "x" | "linkedin";
  handle: string;
  time: string;
  text: string;
  url: string;
};

const POSTS: Post[] = [
  {
    platform: "linkedin",
    handle: "CII Smart Manufacturing",
    time: "2h",
    text: "Registrations open for the CII National Best Practices Award on Future Ready Manufacturing 2026. Apply by 30 July.",
    url: "https://www.linkedin.com/company/cii-smart-manufacturing/",
  },
  {
    platform: "x",
    handle: "@CIISmartMfg",
    time: "5h",
    text: "Smart Manufacturing Maturity Assessment Model now live — 49 elements across 5 functional areas. Find your stage.",
    url: "https://x.com/",
  },
  {
    platform: "linkedin",
    handle: "CII Smart Manufacturing",
    time: "1d",
    text: "Highlights from the Industry 4.0 Adoption workshop in Pune — 80+ MSMEs joined sessions on cobots, MES and predictive maintenance.",
    url: "https://www.linkedin.com/company/cii-smart-manufacturing/",
  },
  {
    platform: "x",
    handle: "@CIISmartMfg",
    time: "1d",
    text: "New case study: a Tier-2 auto supplier cut unplanned downtime 38% in 9 months using condition monitoring + analytics.",
    url: "https://x.com/",
  },
  {
    platform: "linkedin",
    handle: "CII Smart Manufacturing",
    time: "2d",
    text: "The Centre for Digital Transformation welcomes its 12th cohort of MSME leaders. Congratulations and welcome aboard.",
    url: "https://www.linkedin.com/company/cii-smart-manufacturing/",
  },
  {
    platform: "x",
    handle: "@CIISmartMfg",
    time: "3d",
    text: "Energy efficiency in SMEs — short read on how digital metering + analytics is unlocking 10–18% savings on shop floors.",
    url: "https://x.com/",
  },
  {
    platform: "linkedin",
    handle: "CII Smart Manufacturing",
    time: "4d",
    text: "Calling all manufacturing leaders: nominate your plant for the Future Ready Manufacturing recognition cycle 2026.",
    url: "https://www.linkedin.com/company/cii-smart-manufacturing/",
  },
  {
    platform: "x",
    handle: "@CIISmartMfg",
    time: "5d",
    text: "Webinar replay: Building a digital roadmap for the Indian MSME — from manual records to AI-led decision support.",
    url: "https://x.com/",
  },
];

const PlatformIcon = ({ platform }: { platform: Post["platform"] }) => {
  if (platform === "x") {
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-black text-white shrink-0">
        <Twitter className="h-3.5 w-3.5" />
      </span>
    );
  }
  return (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-[#0A66C2] text-white shrink-0">
      <Linkedin className="h-3.5 w-3.5" />
    </span>
  );
};

const Card = ({ p }: { p: Post }) => (
  <a
    href={p.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex h-full w-[320px] sm:w-[360px] shrink-0 flex-col rounded-xl border border-[hsl(var(--neutral-150))] bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[hsl(var(--orange-500)/0.4)] hover:shadow-md"
  >
    <div className="flex items-center gap-2.5">
      <PlatformIcon platform={p.platform} />
      <div className="min-w-0 flex-1">
        <div className="text-[13px] font-semibold text-navy-800 truncate">{p.handle}</div>
        <div className="text-[11px] text-[hsl(var(--neutral-500))]">{p.time} ago</div>
      </div>
      <ExternalLink className="h-3.5 w-3.5 text-[hsl(var(--neutral-500))] opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    <p className="mt-3 text-[13px] leading-relaxed text-[hsl(var(--neutral-700))] line-clamp-4">
      {p.text}
    </p>
  </a>
);

export const WireSocialTicker = () => {
  // duplicate for seamless marquee loop
  const row1 = [...POSTS, ...POSTS];
  const row2 = [...POSTS.slice().reverse(), ...POSTS.slice().reverse()];

  return (
    <WireSection id="social" alt>
      <div className="flex items-end justify-between gap-4 flex-wrap mb-6 sm:mb-8">
        <div>
          <div className="section-eyebrow mb-2 inline-flex items-center gap-2">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-[hsl(var(--india-green))] animate-ping opacity-75" />
              <span className="relative inline-block h-2 w-2 rounded-full bg-[hsl(var(--india-green))]" />
            </span>
            <Radio className="h-3.5 w-3.5" /> Live from our community
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-[28px] md:text-[36px] leading-tight tracking-tight text-navy-800">
            Latest from CII Smart Manufacturing
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[hsl(var(--neutral-500))] max-w-2xl">
            Updates, recognitions and conversations from across our social channels.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-[hsl(var(--neutral-150))] bg-white px-3 py-1.5 text-[12px] font-semibold text-navy-800 hover:border-navy-700 transition-colors"
          >
            <Twitter className="h-3.5 w-3.5" /> Follow on X
          </a>
          <a
            href="https://www.linkedin.com/company/cii-smart-manufacturing/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md bg-[#0A66C2] px-3 py-1.5 text-[12px] font-semibold text-white hover:bg-[#084d92] transition-colors"
          >
            <Linkedin className="h-3.5 w-3.5" /> Follow on LinkedIn
          </a>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative -mx-4 sm:-mx-6 overflow-hidden">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-[hsl(var(--neutral-050))] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[hsl(var(--neutral-050))] to-transparent z-10" />

        <div className="group/marquee py-2 px-4 sm:px-6">
          <div className="flex gap-4 animate-marquee-left will-change-transform group-hover/marquee:[animation-play-state:paused]">
            {row1.map((p, i) => (
              <Card key={`r1-${i}`} p={p} />
            ))}
          </div>
        </div>
        <div className="group/marquee py-2 px-4 sm:px-6">
          <div className="flex gap-4 animate-marquee-right will-change-transform group-hover/marquee:[animation-play-state:paused]">
            {row2.map((p, i) => (
              <Card key={`r2-${i}`} p={p} />
            ))}
          </div>
        </div>
      </div>
    </WireSection>
  );
};
