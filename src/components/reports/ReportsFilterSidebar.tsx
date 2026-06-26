import { useState } from "react";
import { Search, X, Sparkles, Download, Users, Leaf, Factory, Globe2, SlidersHorizontal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { reportFacets, type QuickPickId } from "@/data/reports";
import type { ReportFilters } from "./ReportsDiscoveryBar";

interface Props {
  query: string;
  onQuery: (q: string) => void;
  filters: ReportFilters;
  onFilters: (f: ReportFilters) => void;
  quickPick: QuickPickId | null;
  onQuickPick: (q: QuickPickId | null) => void;
  onClear: () => void;
  resultCount: number;
}

const quickPicks: { id: QuickPickId; label: string; Icon: typeof Sparkles }[] = [
  { id: "latest", label: "Latest", Icon: Sparkles },
  { id: "cii", label: "CII", Icon: Download },
  { id: "msme", label: "MSME", Icon: Users },
  { id: "sustainability", label: "Sustainability", Icon: Leaf },
  { id: "smart", label: "Smart Mfg", Icon: Factory },
  { id: "automotive", label: "Automotive", Icon: Globe2 },
];

const facetSelects: { key: keyof ReportFilters; label: string }[] = [
  { key: "industry", label: "Industry" },
  { key: "domain", label: "Domain" },
  { key: "technology", label: "Technology" },
  { key: "state", label: "State" },
  { key: "type", label: "Type" },
  { key: "year", label: "Year" },
];

const FilterPanel = ({
  query,
  onQuery,
  filters,
  onFilters,
  quickPick,
  onQuickPick,
  onClear,
  resultCount,
  hasActive,
}: Props & { hasActive: boolean }) => {
  const setF = (k: keyof ReportFilters, v: string) => onFilters({ ...filters, [k]: v });
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--neutral-500))]">Refine</div>
          <h3 className="font-display font-bold text-[15px] text-[hsl(var(--navy-900))]">
            {resultCount} report{resultCount === 1 ? "" : "s"}
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
        <span className="sr-only">Search reports</span>
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[hsl(var(--neutral-500))]" />
        <input
          type="search"
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          placeholder="Search reports…"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
          {facetSelects.map((row) => (
            <div key={row.key} className="space-y-1 min-w-0">
              <label className="text-[11px] font-semibold text-[hsl(var(--neutral-700))]">{row.label}</label>
              <Select value={filters[row.key]} onValueChange={(v) => setF(row.key, v)}>
                <SelectTrigger className="h-9 text-xs w-full"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All {row.label.toLowerCase()}</SelectItem>
                  {reportFacets[row.key].map((v) => (
                    <SelectItem key={String(v)} value={String(v)}>{String(v)}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ReportsFilterSidebar = (props: Props) => {
  const [open, setOpen] = useState(false);
  const activeFilterCount = Object.values(props.filters).filter((v) => v !== "all").length;
  const hasActive = props.query.length > 0 || props.quickPick !== null || activeFilterCount > 0;
  const totalActive = activeFilterCount + (props.quickPick ? 1 : 0);

  return (
    <>
      {/* Mobile: search + filter trigger */}
      <div className="lg:hidden space-y-2">
        <div className="flex items-center gap-2">
          <label className="relative block flex-1 min-w-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[hsl(var(--neutral-500))]" />
            <input
              type="search"
              value={props.query}
              onChange={(e) => props.onQuery(e.target.value)}
              placeholder="Search reports…"
              className="w-full h-10 pl-9 pr-3 rounded-md border bg-white text-sm text-[hsl(var(--navy-900))] placeholder:text-[hsl(var(--neutral-500))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
              style={{ borderColor: "hsl(var(--neutral-200))" }}
            />
          </label>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 h-10 px-3 rounded-md border bg-white text-xs font-semibold text-[hsl(var(--navy-800))] shrink-0"
                style={{ borderColor: "hsl(var(--neutral-200))" }}
              >
                <SlidersHorizontal className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Filters</span>
                {totalActive > 0 && (
                  <span className="ml-0.5 inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-[hsl(var(--red-600))] text-white text-[10px] font-bold">
                    {totalActive}
                  </span>
                )}
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88%] sm:max-w-sm overflow-y-auto p-5">
              <FilterPanel {...props} hasActive={hasActive} />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mt-6 w-full h-11 rounded-md bg-[hsl(var(--navy-800))] text-white text-sm font-semibold"
              >
                Show {props.resultCount} report{props.resultCount === 1 ? "" : "s"}
              </button>
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs text-[hsl(var(--neutral-600))]">
            {props.resultCount} report{props.resultCount === 1 ? "" : "s"}
          </span>
          {hasActive && (
            <button
              type="button"
              onClick={props.onClear}
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-[hsl(var(--navy-700))]"
            >
              <X className="h-3 w-3" /> Clear
            </button>
          )}
        </div>
      </div>

      {/* Desktop: sticky sidebar */}
      <aside className="hidden lg:block lg:sticky lg:top-[140px] lg:self-start lg:max-h-[calc(100vh-160px)] lg:overflow-y-auto">
        <div className="cii-card p-5 bg-white">
          <FilterPanel {...props} hasActive={hasActive} />
        </div>
      </aside>
    </>
  );
};
