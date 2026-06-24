import { Info } from "lucide-react";

/**
 * Single, unmistakable "Sample" treatment used wherever a page or card
 * exists only to demonstrate the layout/template before real content is
 * supplied. One colour (electric magenta) so it's instantly recognisable
 * across the platform.
 *
 * - SampleCardFold:  corner fold on cards
 * - SampleBanner:    thin ribbon shown beneath the hero on detail pages
 * - SampleInlineTag: small pill to mark any sample snippet (stat, quote, chat)
 *
 * Legacy aliases (MasterCardFold, MasterBanner, FabricatedCardRibbon,
 * FabricatedBanner) are kept so existing imports continue to work.
 */

const PINK = "hsl(310 92% 48%)";
const PINK_DEEP = "hsl(285 85% 38%)";
const PINK_DARK = "hsl(300 80% 22%)";
const PINK_BG = "hsl(312 90% 97%)";

/** Corner fold for sample/template cards. */
export const SampleCardFold = () => (
  <div
    className="pointer-events-none absolute top-0 right-0 z-20 select-none"
    title="Sample content — template for design reference"
    aria-label="Sample"
  >
    <div className="relative" style={{ width: 86, height: 86 }}>
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(225deg, ${PINK} 0%, ${PINK_DEEP} 52%, transparent 52%)`,
          filter: "drop-shadow(-1px 2px 5px rgba(0,0,0,0.22))",
          borderTopRightRadius: 12,
        }}
      />
      <span
        className="absolute text-white font-bold uppercase tracking-[0.14em]"
        style={{
          top: 17,
          right: 0,
          fontSize: 9,
          transform: "rotate(45deg)",
          transformOrigin: "center",
          textShadow: "0 1px 1px rgba(0,0,0,0.25)",
          width: 86,
          textAlign: "center",
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
    style={{ background: PINK_BG, borderColor: PINK }}
    role="note"
    aria-label="Sample content"
  >
    <div className="container-cii py-2.5 flex items-center gap-3">
      <span
        className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] font-bold text-white shrink-0"
        style={{ background: PINK }}
      >
        <Info className="h-3 w-3" />
        Sample
      </span>
      <p className="text-xs sm:text-sm leading-snug" style={{ color: PINK_DARK }}>
        {note ??
          "This page is a sample template — the layout and every section are real, but the content shown is illustrative and will be replaced with verified source material."}
      </p>
    </div>
  </div>
);

/** Inline pill — use beside any sample stat, quote, image or paragraph. */
export const SampleInlineTag = ({ label = "Sample", className = "" }: { label?: string; className?: string }) => (
  <span
    className={`inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[9px] uppercase tracking-[0.12em] font-bold ${className}`}
    style={{ background: PINK_BG, color: PINK_DARK, border: `1px solid ${PINK}` }}
    title="Sample content"
  >
    <Info className="h-2.5 w-2.5" />
    {label}
  </span>
);

// Legacy aliases — keep existing imports working.
export const MasterCardFold = SampleCardFold;
export const MasterBanner = SampleBanner;
export const FabricatedCardRibbon = SampleCardFold;
export const FabricatedBanner = SampleBanner;
export const FabricatedSectionTint = ({ children }: { children: React.ReactNode }) => <>{children}</>;
