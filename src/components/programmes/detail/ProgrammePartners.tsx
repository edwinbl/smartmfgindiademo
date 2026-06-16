import type { ProgrammeItem } from "@/data/programmes";

export const ProgrammePartners = ({ programme }: { programme: ProgrammeItem }) => {
  if (!programme.partners?.length) return null;
  return (
    <div>
      <h2 className="font-display font-bold text-2xl text-[hsl(var(--navy-900))]">Partners</h2>
      <p className="mt-2 text-sm text-[hsl(var(--neutral-700))]">
        Industry partners who supported the programme.
      </p>
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {programme.partners.map((p) => (
          <div
            key={p.name}
            className="cii-card p-4 flex items-center justify-center min-h-[110px] bg-white"
          >
            <img
              src={p.logo}
              alt={`${p.name} logo`}
              className="max-h-16 w-auto object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
