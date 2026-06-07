import { Search, X, Calendar, Users, Leaf, Cpu, Award } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { QuickPickId } from "@/data/events";
import type { EventFilters } from "./EventsDiscoveryBar";

interface Props {
  query: string;
  onQuery: (q: string) => void;
  filters: EventFilters;
  onFilters: (f: EventFilters) => void;
  quickPick: QuickPickId | null;
  onQuickPick: (q: QuickPickId | null) => void;
  onClear: () => void;
  resultCount: number;
}

const quickPicks: { id: QuickPickId; label: string; Icon: typeof Calendar }[] = [
  { id: "this-month", label: "This Month", Icon: Calendar },
  { id: "msme", label: "MSME", Icon: Users },
  { id: "sustainability", label: "Sustainability", Icon: Leaf },
  { id: "ai", label: "AI & Automation", Icon: Cpu },
  { id: "networking", label: "Networking", Icon: Award },
];

const selectRows = [
  { key: "industry" as const, label: "Industry", opts: [["all","All industries"],["Automotive","Automotive"],["MSME","MSME"],["Process","Process"],["Manufacturing","Manufacturing"],["Cross-industry","Cross-industry"]] },
  { key: "technology" as const, label: "Technology", opts: [["all","All technologies"],["AI & Automation","AI & Automation"],["IoT & Analytics","IoT & Analytics"],["Digital Twin","Digital Twin"],["Sustainability","Sustainability"],["Cybersecurity","Cybersecurity"],["Industry 4.0","Industry 4.0"]] },
  { key: "mode" as const, label: "Mode", opts: [["all","Any mode"],["Physical","Physical"],["Virtual","Virtual"],["Hybrid","Hybrid"]] },
  { key: "level" as const, label: "Level", opts: [["all","Any level"],["Beginner","Beginner"],["Intermediate","Intermediate"],["Advanced","Advanced"]] },
  { key: "segment" as const, label: "Segment", opts: [["all","Any segment"],["MSME","MSME"],["Enterprise","Enterprise"],["Ecosystem","Ecosystem"]] },
];

export const EventsFilterSidebar = ({
  query,
  onQuery,
  filters,
  onFilters,
  quickPick,
  onQuickPick,
  onClear,
  resultCount,
}: Props) => {
  const setF = (k: keyof EventFilters, v: string) => onFilters({ ...filters, [k]: v });
  const activeFilterCount = Object.values(filters).filter((v) => v !== "all").length;
  const hasActive = query.length > 0 || quickPick !== null || activeFilterCount > 0;

  return (
    <aside className="lg:sticky lg:top-[140px] lg:self-start">
      <div className="cii-card p-5 space-y-5 bg-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--neutral-500))]">Refine</div>
            <h3 className="font-display font-bold text-[15px] text-[hsl(var(--navy-900))]">
              {resultCount} event{resultCount === 1 ? "" : "s"}
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

        <label className="relative block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[hsl(var(--neutral-500))]" />
          <input
            type="search"
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            placeholder="Search events…"
            className="w-full h-10 pl-9 pr-3 rounded-sm border bg-white text-sm text-[hsl(var(--navy-900))] placeholder:text-[hsl(var(--neutral-500))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
            style={{ borderColor: "hsl(var(--neutral-200))" }}
          />
        </label>

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
