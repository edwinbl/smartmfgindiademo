import { WireSection } from "./WireSection";
import { Twitter, Linkedin, ExternalLink, Radio } from "lucide-react";
import { SampleInlineTag } from "@/components/common/FabricatedMarker";

type Post = {
  platform: "x" | "linkedin";
  handle: string;
  time: string;
  text: string;
  url: string;
  image?: string;
};

const POSTS: Post[] = [
  {
    platform: "linkedin",
    handle: "CII Smart Manufacturing",
    time: "2h",
    text:
      "Registrations are now open for the CII National Best Practices Award on Future Ready Manufacturing 2026. Indian manufacturers across sectors are invited to showcase their digital and smart manufacturing journeys. Apply by 30 July — link in bio.",
    url: "https://www.linkedin.com/company/cii-smart-manufacturing/",
    image:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=800&q=70",
  },
  {
    platform: "x",
    handle: "@CIISmartMfg",
    time: "5h",
    text: "Industry 4.0 Readiness Assessment now live — 49 elements across 5 functional areas, built by the CII Smart Manufacturing Council. Find your stage in under 30 minutes.",
    url: "https://x.com/",
  },
  {
    platform: "linkedin",
    handle: "CII Smart Manufacturing",
    time: "1d",
    text:
      "Highlights from the Industry 4.0 Adoption workshop in Pune — 80+ MSMEs joined hands-on sessions on cobots, MES rollouts and predictive maintenance. Thank you to everyone who participated and to our partner ecosystem for the rich exchange of ideas.",
    url: "https://www.linkedin.com/company/cii-smart-manufacturing/",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=70",
  },
  {
    platform: "x",
    handle: "@CIISmartMfg",
    time: "1d",
    text: "New case study: a Tier-2 auto supplier cut unplanned downtime 38% in 9 months using condition monitoring + analytics. Read the full story →",
    url: "https://x.com/",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=70",
  },
  {
    platform: "linkedin",
    handle: "CII Smart Manufacturing",
    time: "2d",
    text: "The Centre for Digital Transformation welcomes its 12th cohort of MSME leaders. Congratulations and welcome aboard — the next 12 weeks will be intense and rewarding.",
    url: "https://www.linkedin.com/company/cii-smart-manufacturing/",
  },
  {
    platform: "x",
    handle: "@CIISmartMfg",
    time: "3d",
    text:
      "Energy efficiency in SMEs — a short read on how digital metering and analytics is unlocking 10–18% savings on Indian shop floors, with case examples from textiles, foundries and food processing.",
    url: "https://x.com/",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=70",
  },
  {
    platform: "linkedin",
    handle: "CII Smart Manufacturing",
    time: "4d",
    text: "Calling all manufacturing leaders: nominate your plant for the Future Ready Manufacturing recognition cycle 2026. A chance to benchmark and celebrate progress.",
    url: "https://www.linkedin.com/company/cii-smart-manufacturing/",
  },
  {
    platform: "x",
    handle: "@CIISmartMfg",
    time: "5d",
    text: "Webinar replay: Building a digital roadmap for the Indian MSME — from manual records to AI-led decision support. Watch now.",
    url: "https://x.com/",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=70",
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
    className="group flex h-[260px] w-[320px] sm:w-[360px] shrink-0 flex-col overflow-hidden rounded-xl border border-[hsl(var(--neutral-150))] bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-[hsl(var(--orange-500)/0.4)] hover:shadow-md"
  >
    <div className="flex items-center gap-2.5 px-4 pt-4">
      <PlatformIcon platform={p.platform} />
      <div className="min-w-0 flex-1">
        <div className="text-[13px] font-semibold text-navy-800 truncate">{p.handle}</div>
        <div className="text-[11px] text-[hsl(var(--neutral-500))]">{p.time} ago</div>
      </div>
      <ExternalLink className="h-3.5 w-3.5 text-[hsl(var(--neutral-500))] opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>

    <div className="flex flex-1 min-h-0 gap-3 px-4 pt-3 pb-3">
      <div className="relative flex-1 min-w-0">
        <p className="text-[13px] leading-relaxed text-[hsl(var(--neutral-700))] line-clamp-6">
          {p.text}
        </p>
        {/* fade-out for truncated text */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white to-transparent" />
      </div>
      {p.image && (
        <div className="relative w-[88px] sm:w-[96px] shrink-0 overflow-hidden rounded-md bg-[hsl(var(--neutral-100))]">
          <img
            src={p.image}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
    </div>

    <div className="flex items-center justify-between border-t border-[hsl(var(--neutral-100))] px-4 py-2.5">
      <span className="text-[11px] text-[hsl(var(--neutral-500))]">
        {p.platform === "x" ? "View on X" : "View on LinkedIn"}
      </span>
      <span className="text-[11px] font-semibold text-[hsl(var(--orange-600))] group-hover:translate-x-0.5 transition-transform">
        Read more →
      </span>
    </div>
  </a>
);


export const WireSocialTicker = () => {
  // duplicate for seamless marquee loop
  const row1 = [...POSTS, ...POSTS];

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
            Updates, recognitions and conversations from across our social channels. <SampleInlineTag label="Sample feed" className="ml-1 align-middle" />
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
      </div>
    </WireSection>
  );
};
