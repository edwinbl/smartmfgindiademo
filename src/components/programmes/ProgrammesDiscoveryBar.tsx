import { Search, X, SlidersHorizontal, Users, Sparkles, Cpu, Leaf, Factory, GraduationCap } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { ProgrammeQuickPickId } from "@/data/programmes";

export interface ProgrammeFilters {
  industry: string;
  level: string;
  mode: string;
  duration: string;
  certification: string;
  segment: string;
  technology: string;
}

export const emptyProgrammeFilters: ProgrammeFilters = {
  industry: "all",
  level: "all",
  mode: "all",
  duration: "all",
  certification: "all",
  segment: "all",
  technology: "all",
};

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
  { id: "msme-recommended", label: "Recommended for MSMEs", Icon: Users },
  { id: "beginner", label: "Beginner Friendly", Icon: Sparkles },
  { id: "leadership", label: "Leadership Programmes", Icon: GraduationCap },
  { id: "ai-automation", label: "AI & Automation", Icon: Cpu },
  { id: "sustainability", label: "Sustainability", Icon: Leaf },
  { id: "factory-digitization", label: "Factory Digitization", Icon: Factory },
];

export const ProgrammesDiscoveryBar = ({
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
  const hasActive =
    query.length > 0 ||
    quickPick !== null ||
    Object.values(filters).some((v) => v !== "all");

  return (
    <section className="bg-[hsl(var(--neutral-50))] border-b border-[hsl(var(--neutral-150))]">
      <div className="container-cii py-6 md:py-8 space-y-5">
        <div className="flex flex-col lg:flex-row gap-3">
          <label className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[hsl(var(--neutral-500))]" />
            <input
              type="search"
              value={query}
              onChange={(e) => onQuery(e.target.value)}
              placeholder="Search programmes, topics, faculty…"
              className="w-full h-11 pl-10 pr-3 rounded-sm border bg-white text-sm text-[hsl(var(--navy-900))] placeholder:text-[hsl(var(--neutral-500))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
              style={{ borderColor: "hsl(var(--neutral-200))" }}
            />
          </label>

          <div className="hidden lg:flex items-center gap-2 flex-wrap">
            <Select value={filters.industry} onValueChange={(v) => setF("industry", v)}>
              <SelectTrigger className="h-11 w-[150px]"><SelectValue placeholder="Industry" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All industries</SelectItem>
                <SelectItem value="MSME">MSME</SelectItem>
                <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                <SelectItem value="Cross-industry">Cross-industry</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filters.level} onValueChange={(v) => setF("level", v)}>
              <SelectTrigger className="h-11 w-[140px]"><SelectValue placeholder="Level" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any level</SelectItem>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filters.mode} onValueChange={(v) => setF("mode", v)}>
              <SelectTrigger className="h-11 w-[130px]"><SelectValue placeholder="Mode" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any mode</SelectItem>
                <SelectItem value="Online">Online</SelectItem>
                <SelectItem value="Hybrid">Hybrid</SelectItem>
                <SelectItem value="In-person">In-person</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filters.certification} onValueChange={(v) => setF("certification", v)}>
              <SelectTrigger className="h-11 w-[150px]"><SelectValue placeholder="Certification" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any</SelectItem>
                <SelectItem value="yes">Certified</SelectItem>
                <SelectItem value="no">Non-certified</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filters.segment} onValueChange={(v) => setF("segment", v)}>
              <SelectTrigger className="h-11 w-[140px]"><SelectValue placeholder="Segment" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any segment</SelectItem>
                <SelectItem value="MSME">MSME</SelectItem>
                <SelectItem value="Enterprise">Enterprise</SelectItem>
                <SelectItem value="Ecosystem">Ecosystem</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center gap-2 h-11 px-4 rounded-sm border bg-white text-sm font-semibold text-[hsl(var(--navy-800))]"
            style={{ borderColor: "hsl(var(--neutral-200))" }}
          >
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </button>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto -mx-2 px-2 scrollbar-none">
          {quickPicks.map(({ id, label, Icon }) => {
            const active = quickPick === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => onQuickPick(active ? null : id)}
                className={`whitespace-nowrap inline-flex items-center gap-1.5 px-3.5 h-9 rounded-full text-xs font-semibold border transition-all ${
                  active
                    ? "bg-[hsl(var(--red-600))] text-white border-[hsl(var(--red-600))]"
                    : "bg-white text-[hsl(var(--navy-800))] border-[hsl(var(--neutral-200))] hover:border-[hsl(var(--red-600))] hover:text-[hsl(var(--red-700))]"
                }`}
              >
                <Icon className="h-3.5 w-3.5" /> {label}
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-between text-xs text-[hsl(var(--neutral-500))]">
          <span>{resultCount} programme{resultCount === 1 ? "" : "s"} found</span>
          {hasActive && (
            <button
              type="button"
              onClick={onClear}
              className="inline-flex items-center gap-1 font-semibold text-[hsl(var(--navy-700))] hover:text-[hsl(var(--red-600))]"
            >
              <X className="h-3 w-3" /> Clear all
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
