import { Search, X, Users, Sparkles, Cpu, Leaf, Factory, GraduationCap } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { ProgrammeQuickPickId } from "@/data/programmes";
import type { ProgrammeFilters } from "./ProgrammesDiscoveryBar";

interface Props {
  query: string;
  onQuery: (q: string) => void;
  filters: ProgrammeFilters;
  onFilters: (f: ProgrammeFilters) => void;
  quickPick: ProgrammeQuickPickId | null;
  onQuickPick: (q: ProgrammeQuickPickId | null) => void;
  onClear: () => void;
  resultCount: number;
}

const quickPicks: { id: ProgrammeQuickPickId; label: string; Icon: typeof Users }[] = [
  { id: "msme-recommended", label: "MSMEs", Icon: Users },
  { id: "beginner", label: "Beginner", Icon: Sparkles },
  { id: "leadership", label: "Leadership", Icon: GraduationCap },
  { id: "ai-automation", label: "AI & Automation", Icon: Cpu },
  { id: "sustainability", label: "Sustainability", Icon: Leaf },
  { id: "factory-digitization", label: "Factory Digitization", Icon: Factory },
];

const selectRows = [
  { key: "industry" as const, label: "Industry", opts: [["all","All industries"],["MSME","MSME"],["Manufacturing","Manufacturing"],["Cross-industry","Cross-industry"]] },
  { key: "level" as const, label: "Level", opts: [["all","Any level"],["Beginner","Beginner"],["Intermediate","Intermediate"],["Advanced","Advanced"]] },
  { key: "mode" as const, label: "Mode", opts: [["all","Any mode"],["Online","Online"],["Hybrid","Hybrid"],["In-person","In-person"]] },
  { key: "certification" as const, label: "Certification", opts: [["all","Any"],["yes","Certified"],["no","Non-certified"]] },
  { key: "segment" as const, label: "Segment", opts: [["all","Any segment"],["MSME","MSME"],["Enterprise","Enterprise"],["Ecosystem","Ecosystem"]] },
];

export const ProgrammesFilterSidebar = ({
  query,
  onQuery,
  filters,
  onFilters,
  quickPick,
  onQuickPick,
  onClear,
  resultCount,
}: Props) => {
  const setF = (k: keyof ProgrammeFilters, v: string) => onFilters({ ...filters, [k]: v });
  const activeFilterCount = Object.values(filters).filter((v) => v !== "all").length;
  const hasActive = query.length > 0 || quickPick !== null || activeFilterCount > 0;

  return (
    <aside className="lg:sticky lg:top-[140px] lg:self-start">
      <div className="cii-card p-5 space-y-5 bg-white">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--neutral-500))]">Refine</div>
            <h3 className="font-display font-bold text-[15px] text-[hsl(var(--navy-900))]">
              {resultCount} programme{resultCount === 1 ? "" : "s"}
            </h3>
          </div>
          {hasActive && (
            <button
              type="button"
              onClick={onClear}
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-[hsl(var(--navy-700))] hover:text-[hsl(var(--red-600))]"
            >
              <X className="h-3 w-3" /> Clear
            </button>
          )}
        </div>

        {/* Search */}
        <label className="relative block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[hsl(var(--neutral-500))]" />
          <input
            type="search"
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            placeholder="Search programmes…"
            className="w-full h-10 pl-9 pr-3 rounded-sm border bg-white text-sm text-[hsl(var(--navy-900))] placeholder:text-[hsl(var(--neutral-500))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
            style={{ borderColor: "hsl(var(--neutral-200))" }}
          />
        </label>

        {/* Quick picks */}
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--neutral-500))] mb-2">
            Quick picks
          </div>
          <div className="flex flex-wrap gap-1.5">
            {quickPicks.map(({ id, label, Icon }) => {
              const active = quickPick === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => onQuickPick(active ? null : id)}
                  className={`inline-flex items-center gap-1.5 px-2.5 h-7 rounded-full text-[11px] font-semibold border transition-all ${
                    active
                      ? "bg-[hsl(var(--red-600))] text-white border-[hsl(var(--red-600))]"
                      : "bg-white text-[hsl(var(--navy-800))] border-[hsl(var(--neutral-200))] hover:border-[hsl(var(--red-600))] hover:text-[hsl(var(--red-700))]"
                  }`}
                >
                  <Icon className="h-3 w-3" /> {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Advanced selects */}
        <div className="space-y-3 pt-2 border-t border-[hsl(var(--neutral-150))]">
          <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--neutral-500))]">
            Advanced
          </div>
          {selectRows.map((row) => (
            <div key={row.key} className="space-y-1">
              <label className="text-[11px] font-semibold text-[hsl(var(--neutral-700))]">{row.label}</label>
              <Select value={filters[row.key]} onValueChange={(v) => setF(row.key, v)}>
                <SelectTrigger className="h-9 text-xs"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {row.opts.map(([v, l]) => (
                    <SelectItem key={v} value={v}>{l}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};
