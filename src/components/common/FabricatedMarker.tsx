import { AlertTriangle, FlaskConical } from "lucide-react";

/**
 * Visual markers that flag content as a fabricated master-template example.
 * Use the same amber treatment everywhere so it is unmistakable across the platform.
 */

const AMBER_BG = "hsl(45 100% 96%)";
const AMBER_BORDER = "hsl(38 92% 55%)";
const AMBER_TEXT = "hsl(28 80% 32%)";

/** Small corner ribbon for cards. */
export const FabricatedCardRibbon = () => (
  <div
    className="absolute top-2 right-2 z-10 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] font-bold shadow-sm"
    style={{
      background: AMBER_BORDER,
      color: "white",
    }}
    title="Master template — fabricated example for design reference"
  >
    <FlaskConical className="h-2.5 w-2.5" />
    Template
  </div>
);

/** Full-width banner for detail pages. */
export const FabricatedBanner = ({ note }: { note?: string }) => (
  <div
    className="border-y"
    style={{
      background: AMBER_BG,
      borderColor: AMBER_BORDER,
    }}
    role="note"
    aria-label="Fabricated master-template content"
  >
    <div className="container-cii py-3 flex items-start gap-3">
      <div
        className="h-8 w-8 shrink-0 rounded-full grid place-items-center"
        style={{ background: AMBER_BORDER, color: "white" }}
      >
        <AlertTriangle className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <div
          className="text-[11px] uppercase tracking-[0.14em] font-bold"
          style={{ color: AMBER_TEXT }}
        >
          Master template · Fabricated example
        </div>
        <p className="mt-0.5 text-xs sm:text-sm" style={{ color: AMBER_TEXT }}>
          {note ??
            "This page demonstrates the layout and all available elements. The content is fabricated and will be replaced with real source data."}
        </p>
      </div>
    </div>
  </div>
);

/** Subtle full-section tint wrapper. Use around the detail body so the entire example reads as template. */
export const FabricatedSectionTint = ({ children }: { children: React.ReactNode }) => (
  <div
    className="relative"
    style={{
      background: "linear-gradient(180deg, hsl(45 100% 98%) 0%, hsl(45 100% 99%) 100%)",
      borderLeft: `4px solid ${AMBER_BORDER}`,
    }}
  >
    {children}
  </div>
);
