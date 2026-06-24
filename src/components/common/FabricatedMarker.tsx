import { Info } from "lucide-react";

/**
 * Visual markers that flag content as SAMPLE (master-template example).
 * Use the same amber treatment everywhere so it is unmistakable across the platform.
 *
 * - SampleCardFold: corner fold on cards
 * - SampleBanner: thin ribbon shown beneath the hero on detail pages
 * - SampleInlineTag: small inline pill to mark any sample snippet (stat, quote, etc.)
 *
 * Legacy aliases (FabricatedCardRibbon, FabricatedBanner) are kept so existing
 * imports continue to work without churn.
 */

const AMBER = "hsl(38 92% 55%)";
const AMBER_DARK = "hsl(28 80% 32%)";
const AMBER_BG = "hsl(45 100% 96%)";

/** Corner fold for cards. Sits at the top-right and reads as "Sample". */
export const SampleCardFold = () => (
  <div
    className="pointer-events-none absolute top-0 right-0 z-20 select-none"
    title="Sample content — master template for design reference"
    aria-label="Sample"
  >
    <div className="relative" style={{ width: 120, height: 120 }}>
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(225deg, ${AMBER} 0%, ${AMBER} 52%, transparent 52%)`,
          filter: "drop-shadow(-2px 3px 6px rgba(0,0,0,0.25))",
          borderTopRightRadius: 12,
        }}
      />
      <span
        className="absolute text-white font-extrabold uppercase tracking-[0.18em]"
        style={{
          top: 26,
          right: 6,
          fontSize: 12,
          transform: "rotate(45deg)",
          transformOrigin: "center",
          textShadow: "0 1px 2px rgba(0,0,0,0.25)",
        }}
      >
        Sample
      </span>
    </div>
  </div>
);

/** Full-width ribbon shown directly beneath the hero on a detail page. */
export const SampleBanner = ({ note }: { note?: string }) => (
  <div
    className="border-y"
    style={{ background: AMBER_BG, borderColor: AMBER }}
    role="note"
    aria-label="Sample content"
  >
    <div className="container-cii py-2.5 flex items-center gap-3">
      <span
        className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] font-bold text-white shrink-0"
        style={{ background: AMBER }}
      >
        <Info className="h-3 w-3" />
        Sample
      </span>
      <p className="text-xs sm:text-sm leading-snug" style={{ color: AMBER_DARK }}>
        {note ??
          "This page is a master template — the layout and elements are real, but the content shown is sample data and will be replaced with verified source material."}
      </p>
    </div>
  </div>
);

/** Inline pill — use beside any sample stat, quote, image or paragraph. */
export const SampleInlineTag = ({ label = "Sample", className = "" }: { label?: string; className?: string }) => (
  <span
    className={`inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[9px] uppercase tracking-[0.12em] font-bold ${className}`}
    style={{ background: AMBER_BG, color: AMBER_DARK, border: `1px solid ${AMBER}` }}
    title="Sample content"
  >
    <Info className="h-2.5 w-2.5" />
    {label}
  </span>
);

// Legacy aliases — keep existing imports working.
export const FabricatedCardRibbon = SampleCardFold;
export const FabricatedBanner = SampleBanner;
export const FabricatedSectionTint = ({ children }: { children: React.ReactNode }) => <>{children}</>;
