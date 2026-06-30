import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { CommonFinalCta } from "@/components/common/CommonFinalCta";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  X,
  Search,
  ArrowRight,
  TrendingUp,
  TrendingDown,
  Factory,
  MapPin,
  Building2,
  Filter,
  Gauge,
  ShieldCheck,
  Network,
  Timer,
  Zap,
  BarChart3,
} from "lucide-react";
import { WireHeader } from "@/components/wireframe/WireHeader";
import { WireFooter } from "@/components/wireframe/WireFooter";
import { WireChatbotFAB } from "@/components/wireframe/WireChatbotFAB";
import { SEO } from "@/components/SEO";
import { CaseStudiesHero } from "@/components/casestudies/CaseStudiesHero";
import {
  caseStudies,
  sectors,
  states,
  companyTypes,
  valueProps,
  quickChips,
  type CaseStudy,
  type CompanyType,
  type ValueProp,
} from "@/data/caseStudies";

const outcomeTiles = [
  { id: "productivity", icon: Gauge, label: "Improve productivity", desc: "Boost operational efficiency by reducing manual tasks and optimizing machine and workforce performance.", tone: "bg-[hsl(var(--navy-050))] text-[hsl(var(--navy-700))]" },
  { id: "quality", icon: ShieldCheck, label: "Improve quality", desc: "Standardise quality systems and reduce defects across the shopfloor.", tone: "bg-[hsl(var(--india-green)/0.08)] text-[hsl(var(--india-green))]" },
  { id: "traceability", icon: Network, label: "Strengthen traceability", desc: "Track materials, processes and products end-to-end across the value chain.", tone: "bg-[hsl(var(--navy-100))] text-[hsl(var(--navy-700))]" },
  { id: "downtime", icon: Timer, label: "Reduce downtime", desc: "Predict and prevent machine downtime with smart monitoring and analytics.", tone: "bg-[hsl(var(--red-600)/0.08)] text-[hsl(var(--red-600))]" },
  { id: "energy", icon: Zap, label: "Improve energy efficiency", desc: "Cut energy costs and emissions through real-time consumption insight.", tone: "bg-[hsl(var(--orange-100))] text-[hsl(var(--orange-600))]" },
  { id: "planning", icon: BarChart3, label: "Improve planning", desc: "Improve production planning with real-time insights, forecasting and smarter resource allocation.", tone: "bg-[hsl(var(--navy-050))] text-[hsl(var(--navy-700))]" },
];

const MetricPill = ({ value, direction }: { value: string; direction: "up" | "down" | "flat" }) => {
  const Icon = direction === "down" ? TrendingDown : TrendingUp;
  const color = direction === "down"
    ? "text-[hsl(var(--india-green))] bg-[hsl(var(--india-green)/0.08)]"
    : "text-[hsl(var(--navy-700))] bg-[hsl(var(--navy-050))]";
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold font-numeric ${color}`}>
      <Icon className="h-3.5 w-3.5" />
      {value}
    </span>
  );
};

const cardPalettes = [
  {
    header: "linear-gradient(135deg, hsl(var(--navy-700)), hsl(var(--navy-900)))",
    tint: "linear-gradient(180deg, hsl(var(--navy-050)), white 70%)",
    bar: "hsl(var(--navy-700))",
  },
  {
    header: "linear-gradient(135deg, hsl(var(--orange-500)), hsl(var(--red-600)))",
    tint: "linear-gradient(180deg, hsl(var(--orange-100)), white 70%)",
    bar: "hsl(var(--orange-500))",
  },
  {
    header: "linear-gradient(135deg, hsl(var(--india-green)), hsl(var(--navy-700)))",
    tint: "linear-gradient(180deg, hsl(var(--india-green) / 0.10), white 70%)",
    bar: "hsl(var(--india-green))",
  },
  {
    header: "linear-gradient(135deg, hsl(var(--red-600)), hsl(var(--navy-800)))",
    tint: "linear-gradient(180deg, hsl(var(--red-600) / 0.08), white 70%)",
    bar: "hsl(var(--red-600))",
  },
];

const CaseCard = ({ c, index = 0 }: { c: CaseStudy; index?: number }) => {
  const pal = cardPalettes[index % cardPalettes.length];
  return (
    <Link
      to={`/case-studies/${c.slug}`}
      className="group flex flex-col rounded-2xl border border-[hsl(var(--neutral-150))] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all overflow-hidden"
      style={{ background: pal.tint }}
    >
      <div className="h-1.5 w-full" style={{ background: pal.bar }} />
      <div className="relative h-36 overflow-hidden" style={{ background: pal.header }}>
        <div className="absolute inset-0 blueprint-grid opacity-40" />
        <div className="absolute inset-0 p-5 flex flex-col justify-between text-white">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur text-[11px] font-semibold">
              <Factory className="h-3 w-3" /> {c.sector}
            </span>
          </div>
          <div>
            <div className="text-sm font-bold uppercase tracking-wider text-white">{c.company}</div>
            <div className="mt-1 flex items-center gap-2 text-[11px] text-white/80">
              <MapPin className="h-3 w-3" /> {c.state}
              <span className="h-1 w-1 rounded-full bg-white/40" />
              <Building2 className="h-3 w-3" /> {c.companyType}
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-bold text-[17px] leading-snug text-[hsl(var(--navy-900))] group-hover:text-[hsl(var(--red-600))] transition-colors">
          {c.headline}
        </h3>
        <p className="mt-2 text-sm text-[hsl(var(--neutral-700))] line-clamp-2">{c.challenge}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {c.valueProps.slice(0, 3).map((v) => (
            <span key={v} className="cii-chip text-[11px] px-2 py-0.5">{v}</span>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-[hsl(var(--neutral-150))] flex items-center justify-between text-sm">
          <span className="text-[hsl(var(--neutral-500))]">
            {c.durationMonths > 0 ? `${c.durationMonths} mo` : ""}
            {c.durationMonths > 0 && c.companySize && c.companySize !== "Not disclosed" ? " · " : ""}
            {c.companySize && c.companySize !== "Not disclosed" ? c.companySize : ""}
          </span>
          <span className="font-semibold inline-flex items-center gap-1 group-hover:text-[hsl(var(--red-600))]" style={{ color: pal.bar }}>
            View Case Study <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
};

const CaseStudiesIndex = () => {
  const [query, setQuery] = useState("");
  const [chip, setChip] = useState<ValueProp | null>(null);
  const [sector, setSector] = useState<string>("all");
  const [state, setState] = useState<string>("all");
  const [companyType, setCompanyType] = useState<CompanyType | "all">("all");
  const [vp, setVp] = useState<ValueProp | "all">("all");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return caseStudies.filter((c) => {
      if (sector !== "all" && c.sector !== sector) return false;
      if (state !== "all" && c.state !== state) return false;
      if (companyType !== "all" && c.companyType !== companyType) return false;
      if (vp !== "all" && !c.valueProps.includes(vp)) return false;
      if (chip && !c.valueProps.includes(chip)) return false;
      if (q) {
        const hay = `${c.company} ${c.headline} ${c.sector} ${c.state} ${c.valueProps.join(" ")}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [query, chip, sector, state, companyType, vp]);

  const featured = caseStudies.filter((c) => c.featured);

  const clearAll = () => {
    setQuery(""); setChip(null); setSector("all"); setState("all"); setCompanyType("all"); setVp("all");
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Manufacturing Case Studies | CII Smart Manufacturing"
        description="Explore real manufacturing transformation stories from MSMEs and enterprises across India — productivity, quality, traceability, sustainability and exports."
        url="/case-studies"
      />
      <WireHeader />

      {/* HERO */}
      <CaseStudiesHero query={query} onQuery={setQuery} onTag={setQuery} />

      {/* FEATURED */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-cii">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <div className="section-eyebrow mb-2">Featured</div>
              <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-tight tracking-tight text-[hsl(var(--navy-900))]">
                Spotlight transformations
              </h2>
            </div>
            <a href="#all" className="hidden md:inline-flex link-arrow">Browse all <ArrowRight className="h-4 w-4" /></a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((c, i) => (
              <CaseCard key={c.slug} c={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOME EXPLORER */}
      <section className="py-16 md:py-20 bg-[hsl(var(--neutral-50))]">
        <div className="container-cii">
          <div className="section-eyebrow mb-2">Discover by Outcome</div>
          <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-tight tracking-tight text-[hsl(var(--navy-900))] max-w-2xl">
            Find stories based on the business outcome you care about
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {outcomeTiles.map(({ id, icon: Icon, label, desc }) => (
              <Link
                key={id}
                to={`/knowledge-hub/${id}`}
                className="cii-card p-6 group relative overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-md grid place-items-center bg-[hsl(var(--navy-100))] text-navy-700 shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-navy-800 text-[17px] leading-snug">{label}</h3>
                    <p className="mt-2 text-sm text-[hsl(var(--neutral-700))]">{desc}</p>
                  </div>
                </div>
                <div className="absolute right-0 top-0 h-1 w-0 bg-cii-red transition-all group-hover:w-full" />
                <div className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[hsl(var(--red-600))] opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore outcome <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SMART FILTERS + GRID */}
      <section id="all" className="py-16 md:py-20 bg-white">
        <div className="container-cii">
          <div className="section-eyebrow mb-2">All Case Studies</div>
          <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-tight tracking-tight text-[hsl(var(--navy-900))]">
            Browse by sector, state or value proposition
          </h2>

          {/* Mobile filter trigger */}
          <div className="mt-6 md:hidden flex items-center justify-between">
            <button onClick={() => setDrawerOpen(true)} className="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-[hsl(var(--navy-050))] text-[hsl(var(--navy-800))] text-sm font-semibold border border-[hsl(var(--navy-100))]">
              <Filter className="h-4 w-4" /> Filters
            </button>
            <span className="text-xs text-[hsl(var(--neutral-500))]">{filtered.length} results</span>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
            {/* Sidebar */}
            <aside className="hidden lg:block lg:sticky lg:top-[140px] lg:self-start lg:max-h-[calc(100vh-160px)] lg:overflow-y-auto">
              <CaseFacetsCard
                query={query}
                onQuery={setQuery}
                sector={sector} setSector={setSector}
                state={state} setState={setState}
                companyType={companyType} setCompanyType={setCompanyType}
                vp={vp} setVp={setVp}
                resultCount={filtered.length}
                onClear={clearAll}
              />
            </aside>

            {/* Grid */}
            <div>
              <div className="hidden md:flex items-center justify-between mb-4">
                <span className="text-sm text-[hsl(var(--neutral-500))]">{filtered.length} case stud{filtered.length === 1 ? "y" : "ies"}</span>
              </div>
              {filtered.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-[hsl(var(--neutral-200))] p-12 text-center">
                  <p className="text-sm text-[hsl(var(--neutral-700))]">No matching case studies. Try clearing filters.</p>
                  <button onClick={clearAll} className="mt-4 btn-primary">Clear filters</button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {filtered.map((c, i) => <CaseCard key={c.slug} c={c} index={i} />)}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile drawer */}
        {drawerOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div className="absolute inset-0 bg-black/40" onClick={() => setDrawerOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <span className="font-display font-bold text-lg text-[hsl(var(--navy-900))]">Filters</span>
                <button onClick={() => setDrawerOpen(false)} aria-label="Close" className="h-9 w-9 grid place-items-center rounded-full hover:bg-[hsl(var(--neutral-100))]"><X className="h-4 w-4" /></button>
              </div>
              <CaseFacetsCard
                query={query}
                onQuery={setQuery}
                sector={sector} setSector={setSector}
                state={state} setState={setState}
                companyType={companyType} setCompanyType={setCompanyType}
                vp={vp} setVp={setVp}
                resultCount={filtered.length}
                onClear={clearAll}
              />
              <div className="mt-6 flex gap-3">
                <button onClick={clearAll} className="flex-1 btn-outline h-11">Clear</button>
                <button onClick={() => setDrawerOpen(false)} className="flex-1 btn-secondary h-11">Apply</button>
              </div>
            </div>
          </div>
        )}
      </section>


      <CommonFinalCta />
      <WireFooter />
      <WireChatbotFAB />
    </div>
  );
};

interface CaseFacetsCardProps {
  query: string;
  onQuery: (v: string) => void;
  sector: string;
  setSector: (v: string) => void;
  state: string;
  setState: (v: string) => void;
  companyType: CompanyType | "all";
  setCompanyType: (v: CompanyType | "all") => void;
  vp: ValueProp | "all";
  setVp: (v: ValueProp | "all") => void;
  resultCount: number;
  onClear: () => void;
}

const CaseFacetsCard = ({
  query, onQuery,
  sector, setSector,
  state, setState,
  companyType, setCompanyType,
  vp, setVp,
  resultCount, onClear,
}: CaseFacetsCardProps) => {
  const hasActive =
    query.length > 0 ||
    sector !== "all" ||
    state !== "all" ||
    companyType !== "all" ||
    vp !== "all";

  return (
    <div className="cii-card p-5 space-y-5 bg-white">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--neutral-500))]">Refine</div>
          <h3 className="font-display font-bold text-[15px] text-[hsl(var(--navy-900))]">
            {resultCount} case stud{resultCount === 1 ? "y" : "ies"}
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
        <span className="sr-only">Search case studies</span>
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[hsl(var(--neutral-500))]" />
        <input
          type="search"
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          placeholder="Search case studies…"
          className="w-full h-10 pl-9 pr-3 rounded-sm border bg-white text-sm text-[hsl(var(--navy-900))] placeholder:text-[hsl(var(--neutral-500))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
          style={{ borderColor: "hsl(var(--neutral-200))" }}
        />
      </label>

      <div className="space-y-3 pt-2 border-t border-[hsl(var(--neutral-150))]">
        <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--neutral-500))]">
          Advanced
        </div>

        <FacetSelect label="Sector" value={sector} onChange={setSector} options={sectors} />
        <FacetSelect label="State" value={state} onChange={setState} options={states} />
        <FacetSelect label="Company type" value={companyType} onChange={(v) => setCompanyType(v as CompanyType | "all")} options={companyTypes} />
        <FacetSelect label="Value proposition" value={vp} onChange={(v) => setVp(v as ValueProp | "all")} options={valueProps} />
      </div>
    </div>
  );
};

const FacetSelect = ({
  label, value, onChange, options,
}: { label: string; value: string; onChange: (v: string) => void; options: readonly string[] }) => (
  <div className="space-y-1">
    <label className="text-[11px] font-semibold text-[hsl(var(--neutral-700))]">{label}</label>
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="h-9 text-xs"><SelectValue /></SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All {label.toLowerCase()}</SelectItem>
        {options.map((o) => (
          <SelectItem key={o} value={o}>{o}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);


export default CaseStudiesIndex;
