import type { ProgrammeItem } from "@/data/programmes";

export const ProgrammeOverview = ({ programme }: { programme: ProgrammeItem }) => (
  <div>
    <h2 className="font-display font-bold text-2xl text-[hsl(var(--navy-900))]">About the programme</h2>
    <p className="mt-3 text-[hsl(var(--neutral-700))] leading-relaxed whitespace-pre-line">
      {programme.summary}
    </p>
  </div>
);
