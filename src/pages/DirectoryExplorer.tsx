import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ChevronRight,
  Download,
  FileText,
  Filter,
  Search,
  Send,
  Sparkles,
  MessageSquare,
  Bot,
  User as UserIcon,
  Quote,
  Loader2,
  ListTree,
  Building2,
  Tag,
} from "lucide-react";
import { WireHeader } from "@/components/wireframe/WireHeader";
import { WireFooter } from "@/components/wireframe/WireFooter";
import { SEO } from "@/components/SEO";
import indiaCover from "@/assets/directory-india-cover.jpg";
import singaporeCover from "@/assets/directory-singapore-cover.jpg";

type Slug = "india" | "singapore";

type DirectoryMeta = {
  slug: Slug;
  title: string;
  edition: string;
  region: string;
  cover: string;
  pages: number;
  accent: "navy" | "teal";
};

const DIRECTORIES: Record<Slug, DirectoryMeta> = {
  india: {
    slug: "india",
    title: "India's Industry 4.0 e-Directory",
    edition: "2025 Edition · v3.0",
    region: "India Ecosystem",
    cover: indiaCover,
    pages: 180,
    accent: "navy",
  },
  singapore: {
    slug: "singapore",
    title: "Singapore's Industry 4.0 e-Directory",
    edition: "International Edition · v1.0",
    region: "Singapore Ecosystem",
    cover: singaporeCover,
    pages: 140,
    accent: "teal",
  },
};

const TOC: Record<Slug, { section: string; page: number }[]> = {
  india: [
    { section: "Foreword — CII Industry 4.0 Leadership", page: 4 },
    { section: "Methodology & How to Use This Directory", page: 8 },
    { section: "Technology Providers", page: 16 },
    { section: "Consultants & System Integrators", page: 62 },
    { section: "Manufacturing Organisations", page: 94 },
    { section: "Industry 4.0 Solution Providers", page: 128 },
    { section: "Ecosystem Partners & Associations", page: 158 },
    { section: "Index & Acknowledgements", page: 172 },
  ],
  singapore: [
    { section: "Preface — International Collaboration", page: 3 },
    { section: "Singapore's Smart Manufacturing Landscape", page: 6 },
    { section: "Technology Providers", page: 14 },
    { section: "Consultants & System Integrators", page: 48 },
    { section: "Manufacturing Organisations", page: 76 },
    { section: "Innovation & Ecosystem Partners", page: 108 },
    { section: "Cross-Border Collaboration Index", page: 128 },
  ],
};

const FILTERS = [
  "All",
  "Technology Providers",
  "Consultants",
  "Manufacturers",
  "Solution Providers",
  "Ecosystem Partners",
] as const;

type SearchHit = {
  org: string;
  category: (typeof FILTERS)[number];
  page: number;
  snippet: string;
  tags: string[];
};

const SEARCH_INDEX: Record<Slug, SearchHit[]> = {
  india: [
    {
      org: "Tata Consultancy Services",
      category: "Consultants",
      page: 64,
      snippet:
        "Digital transformation programs spanning IIoT platforms, predictive maintenance and connected worker solutions for discrete and process manufacturers.",
      tags: ["IIoT", "AI", "Connected Worker"],
    },
    {
      org: "Bosch Rexroth India",
      category: "Technology Providers",
      page: 22,
      snippet:
        "Factory automation, connected hydraulics and Industry 4.0 starter kits for SMEs entering smart manufacturing.",
      tags: ["Automation", "IIoT", "SME Ready"],
    },
    {
      org: "Siemens Digital Industries",
      category: "Technology Providers",
      page: 28,
      snippet:
        "MindSphere-based plant analytics, digital twin offerings and end-to-end automation portfolio for Indian factories.",
      tags: ["Digital Twin", "Analytics", "Automation"],
    },
    {
      org: "L&T Technology Services",
      category: "Solution Providers",
      page: 132,
      snippet:
        "Plant digitization engagements with embedded AI, vision inspection and energy intelligence platforms.",
      tags: ["AI Vision", "Energy", "Engineering"],
    },
    {
      org: "Mahindra & Mahindra (Chakan)",
      category: "Manufacturers",
      page: 102,
      snippet:
        "Reference Industry 4.0 plant — connected paint shop, AGVs, real-time OEE dashboards and predictive maintenance loops.",
      tags: ["OEE", "AGV", "Predictive Maintenance"],
    },
    {
      org: "Tega Industries",
      category: "Manufacturers",
      page: 118,
      snippet:
        "Smart mining wear-solutions plant with sensorised production lines and condition-based monitoring.",
      tags: ["Condition Monitoring", "Sensors"],
    },
    {
      org: "Wipro 3D",
      category: "Solution Providers",
      page: 144,
      snippet:
        "Industrial additive manufacturing — metal 3D printing for aerospace, defence and capital goods.",
      tags: ["Additive", "Aerospace"],
    },
    {
      org: "CII Centre for Smart Manufacturing",
      category: "Ecosystem Partners",
      page: 160,
      snippet:
        "National-level Industry 4.0 acceleration body — readiness assessments, awards and learning expeditions.",
      tags: ["Readiness", "Community"],
    },
  ],
  singapore: [
    {
      org: "A*STAR ARTC",
      category: "Ecosystem Partners",
      page: 112,
      snippet:
        "Advanced Remanufacturing & Technology Centre — public-private model factory and Industry 4.0 testbeds.",
      tags: ["Testbed", "R&D", "Model Factory"],
    },
    {
      org: "Siemens Singapore",
      category: "Technology Providers",
      page: 18,
      snippet:
        "Regional digital industries hub — Xcelerator portfolio, factory automation and digital twin services across ASEAN.",
      tags: ["Digital Twin", "Automation"],
    },
    {
      org: "Rockwell Automation Asia Pacific",
      category: "Technology Providers",
      page: 24,
      snippet:
        "Connected enterprise solutions, MES and analytics for high-mix discrete manufacturing in the region.",
      tags: ["MES", "Analytics"],
    },
    {
      org: "ST Engineering",
      category: "Manufacturers",
      page: 82,
      snippet:
        "Smart factory transformation across aerospace and electronics — robotics, vision QA and digital threads.",
      tags: ["Robotics", "Vision QA"],
    },
    {
      org: "Accenture Industry X (SG)",
      category: "Consultants",
      page: 52,
      snippet:
        "Industry 4.0 strategy, value-targeting and large-scale plant digital transformation across ASEAN clients.",
      tags: ["Strategy", "Transformation"],
    },
    {
      org: "HOPE Technik",
      category: "Solution Providers",
      page: 96,
      snippet:
        "Engineering-led automation and robotics integrator — bespoke smart manufacturing cells and AMRs.",
      tags: ["Robotics", "AMR"],
    },
  ],
};

const SUGGESTED_PROMPTS: Record<Slug, string[]> = {
  india: [
    "Which organisations specialise in predictive maintenance?",
    "Summarise the foreword in 3 bullet points",
    "List Indian SME-ready Industry 4.0 solution providers",
    "Compare technology providers focused on digital twin",
  ],
  singapore: [
    "What testbeds are available for Indian manufacturers?",
    "Which consultants help with cross-border transformation?",
    "Summarise Singapore's smart manufacturing landscape",
    "List robotics specialists profiled in the directory",
  ],
};

type ChatMsg = {
  id: string;
  role: "user" | "assistant";
  text: string;
  citations?: { label: string; page: number }[];
  pending?: boolean;
};

const accentMap = {
  navy: {
    band: "linear-gradient(135deg, hsl(var(--navy-900)), hsl(var(--navy-700)))",
    chipBg: "hsl(var(--navy-050))",
    chipText: "hsl(var(--navy-700))",
    text: "hsl(var(--navy-800))",
  },
  teal: {
    band: "linear-gradient(135deg, #0b3b3b, hsl(var(--india-green)))",
    chipBg: "hsl(var(--india-green) / 0.08)",
    chipText: "hsl(var(--india-green))",
    text: "hsl(var(--india-green))",
  },
} as const;

/* -------- Mock AI -------- */
function mockAnswer(slug: Slug, q: string): { text: string; citations: { label: string; page: number }[] } {
  const idx = SEARCH_INDEX[slug];
  const lower = q.toLowerCase();
  const hits = idx.filter(
    (h) =>
      h.org.toLowerCase().includes(lower) ||
      h.snippet.toLowerCase().includes(lower) ||
      h.tags.some((t) => t.toLowerCase().includes(lower)) ||
      h.category.toLowerCase().includes(lower),
  );
  const top = (hits.length ? hits : idx).slice(0, 3);
  const summary =
    hits.length === 0
      ? `Based on the ${DIRECTORIES[slug].title}, here is a synthesised overview related to your question. The directory profiles organisations across technology, consulting, manufacturing and ecosystem categories.`
      : `Based on the ${DIRECTORIES[slug].title}, ${hits.length} relevant ${hits.length === 1 ? "entry was" : "entries were"} found. Key highlights:`;
  const bullets = top.map((h) => `• **${h.org}** — ${h.snippet}`).join("\n");
  return {
    text: `${summary}\n\n${bullets}\n\n_This response is generated from the directory's indexed content. Use the citations to jump to the source pages._`,
    citations: top.map((h) => ({ label: h.org, page: h.page })),
  };
}

/* -------- Page -------- */
const DirectoryExplorer = () => {
  const { slug } = useParams<{ slug: string }>();
  if (!slug || !(slug in DIRECTORIES)) return <Navigate to="/directories" replace />;
  const directory = DIRECTORIES[slug as Slug];
  const a = accentMap[directory.accent];

  /* Search state */
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  const results = useMemo(() => {
    const idx = SEARCH_INDEX[directory.slug];
    return idx.filter((h) => {
      const matchesFilter = filter === "All" || h.category === filter;
      if (!matchesFilter) return false;
      if (!query.trim()) return true;
      const q = query.toLowerCase();
      return (
        h.org.toLowerCase().includes(q) ||
        h.snippet.toLowerCase().includes(q) ||
        h.tags.some((t) => t.toLowerCase().includes(q)) ||
        h.category.toLowerCase().includes(q)
      );
    });
  }, [directory.slug, query, filter]);

  /* Chat state */
  const [messages, setMessages] = useState<ChatMsg[]>([
    {
      id: "welcome",
      role: "assistant",
      text: `Hi! I'm your AI guide to **${directory.title}**. Ask me anything about the organisations, technologies, or sections inside this directory — or try one of the suggestions below.`,
    },
  ]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatScrollRef.current?.scrollTo({ top: chatScrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, thinking]);

  const submit = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || thinking) return;
    const userMsg: ChatMsg = { id: `u-${Date.now()}`, role: "user", text: trimmed };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setThinking(true);
    setTimeout(() => {
      const { text: answer, citations } = mockAnswer(directory.slug, trimmed);
      setMessages((m) => [
        ...m,
        { id: `a-${Date.now()}`, role: "assistant", text: answer, citations },
      ]);
      setThinking(false);
    }, 900 + Math.random() * 600);
  };

  return (
    <div className="min-h-dvh bg-background text-foreground flex flex-col">
      <SEO
        title={`${directory.title} — Interactive Explorer | CII Smart Manufacturing`}
        description={`Ask AI questions or search across ${directory.title}. Interactive explorer for the Industry 4.0 e-Directory.`}
      />
      <WireHeader />

      {/* Sub-hero */}
      <section
        className="relative overflow-hidden text-white"
        style={{ background: a.band }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(800px 300px at 90% 0%, hsl(var(--orange-500) / 0.35), transparent 60%)",
          }}
          aria-hidden
        />
        <div className="container-cii relative py-8 md:py-10">
          <nav aria-label="Breadcrumb" className="text-[12px] text-white/75 mb-4">
            <ol className="flex items-center gap-1.5">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <ChevronRight className="h-3 w-3" />
              <li>
                <Link to="/directories" className="hover:text-white">
                  Directories
                </Link>
              </li>
              <ChevronRight className="h-3 w-3" />
              <li className="text-white font-medium">{directory.region}</li>
            </ol>
          </nav>

          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="min-w-0">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em]">
                <Sparkles className="h-3.5 w-3.5" /> Interactive Explorer
              </div>
              <h1 className="mt-3 font-display text-2xl md:text-[34px] font-extrabold leading-tight tracking-tight">
                {directory.title}
              </h1>
              <p className="mt-1.5 text-[13px] md:text-sm text-white/80">
                {directory.edition} · {directory.pages} pages · Chat with AI or search the directory traditionally.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Link
                to="/directories"
                className="inline-flex items-center gap-2 h-10 px-4 rounded-md font-semibold text-white border border-white/30 hover:bg-white/10 text-sm"
              >
                <ArrowLeft className="h-4 w-4" /> All Directories
              </Link>
              <button
                type="button"
                className="inline-flex items-center gap-2 h-10 px-4 rounded-md font-semibold text-[hsl(var(--navy-900))] bg-white hover:bg-white/90 text-sm"
              >
                <Download className="h-4 w-4" /> Download PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Workspace */}
      <main className="flex-1 bg-[hsl(var(--neutral-50))] border-t border-[hsl(var(--neutral-150))]">
        <div className="container-cii py-6 md:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
            {/* LEFT — PDF preview & TOC */}
            <aside className="lg:col-span-3 space-y-5">
              <div className="rounded-2xl bg-white border border-[hsl(var(--neutral-150))] overflow-hidden shadow-sm">
                <div className="aspect-[3/4] bg-[hsl(var(--navy-900))]">
                  <img
                    src={directory.cover}
                    alt={`${directory.title} cover`}
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="p-4">
                  <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--neutral-500))]">
                    Currently exploring
                  </div>
                  <div className="mt-1 font-display text-[15px] font-bold text-[hsl(var(--navy-900))] leading-snug">
                    {directory.title}
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-[12px] text-[hsl(var(--neutral-600))]">
                    <BookOpen className="h-3.5 w-3.5" />
                    {directory.pages} pages indexed
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white border border-[hsl(var(--neutral-150))] shadow-sm">
                <div className="px-4 py-3 border-b border-[hsl(var(--neutral-150))] flex items-center gap-2">
                  <ListTree className="h-4 w-4 text-[hsl(var(--navy-700))]" />
                  <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--navy-800))]">
                    Table of Contents
                  </div>
                </div>
                <ul className="p-2">
                  {TOC[directory.slug].map((t) => (
                    <li key={t.section}>
                      <button
                        type="button"
                        className="w-full text-left flex items-start justify-between gap-3 rounded-md px-2.5 py-2 hover:bg-[hsl(var(--neutral-50))] transition-colors"
                      >
                        <span className="text-[13px] text-[hsl(var(--neutral-800))] leading-snug">
                          {t.section}
                        </span>
                        <span className="shrink-0 text-[11px] font-semibold font-numeric text-[hsl(var(--neutral-500))] tabular-nums">
                          p.{t.page}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* CENTER — AI Chat */}
            <section className="lg:col-span-6">
              <div className="rounded-2xl bg-white border border-[hsl(var(--neutral-150))] shadow-sm flex flex-col h-[640px] lg:h-[720px]">
                <div className="px-5 py-3.5 border-b border-[hsl(var(--neutral-150))] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-lg grid place-items-center bg-[hsl(var(--navy-050))] text-[hsl(var(--navy-700))]">
                      <Bot className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[14px] font-bold text-[hsl(var(--navy-900))] leading-tight">
                        Ask AI about this directory
                      </div>
                      <div className="text-[11px] text-[hsl(var(--neutral-500))]">
                        Grounded in {directory.pages} pages
                      </div>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[hsl(var(--india-green)/0.08)] text-[hsl(var(--india-green))] px-2.5 py-1 text-[11px] font-semibold">
                    <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--india-green))]" />
                    Online
                  </span>
                </div>

                {/* Messages */}
                <div ref={chatScrollRef} className="flex-1 overflow-y-auto px-4 sm:px-5 py-5 space-y-4">
                  {messages.map((m) => (
                    <ChatBubble key={m.id} msg={m} />
                  ))}
                  {thinking && (
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-lg grid place-items-center bg-[hsl(var(--navy-050))] text-[hsl(var(--navy-700))] shrink-0">
                        <Bot className="h-4 w-4" />
                      </div>
                      <div className="rounded-2xl rounded-tl-sm bg-[hsl(var(--neutral-50))] border border-[hsl(var(--neutral-150))] px-4 py-2.5 inline-flex items-center gap-2 text-[13px] text-[hsl(var(--neutral-600))]">
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                        Searching the directory…
                      </div>
                    </div>
                  )}
                </div>

                {/* Suggestions */}
                {messages.length <= 1 && (
                  <div className="px-4 sm:px-5 pb-3">
                    <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--neutral-500))] mb-2">
                      Try asking
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {SUGGESTED_PROMPTS[directory.slug].map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => submit(p)}
                          className="text-left text-[12px] rounded-full border border-[hsl(var(--neutral-200))] bg-white hover:border-[hsl(var(--navy-300))] hover:bg-[hsl(var(--navy-050))] px-3 py-1.5 text-[hsl(var(--navy-800))] transition-colors"
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Composer */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    submit(input);
                  }}
                  className="border-t border-[hsl(var(--neutral-150))] p-3 sm:p-4 bg-[hsl(var(--neutral-50))] rounded-b-2xl"
                >
                  <div className="flex items-end gap-2 rounded-xl bg-white border border-[hsl(var(--neutral-200))] focus-within:border-[hsl(var(--navy-400))] transition-colors p-2 pl-3">
                    <MessageSquare className="h-4 w-4 text-[hsl(var(--neutral-500))] mt-2 shrink-0" />
                    <textarea
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          submit(input);
                        }
                      }}
                      rows={1}
                      placeholder="Ask anything about this directory…"
                      className="flex-1 resize-none bg-transparent outline-none text-[14px] py-1.5 max-h-32"
                    />
                    <button
                      type="submit"
                      disabled={!input.trim() || thinking}
                      className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-md font-semibold text-white text-[13px] disabled:opacity-50"
                      style={{ background: "hsl(var(--navy-800))" }}
                    >
                      <Send className="h-3.5 w-3.5" /> Send
                    </button>
                  </div>
                  <div className="mt-1.5 text-[11px] text-[hsl(var(--neutral-500))] px-1">
                    AI answers cite directory pages. Verify before quoting in deliverables.
                  </div>
                </form>
              </div>
            </section>

            {/* RIGHT — Traditional search */}
            <aside className="lg:col-span-3">
              <div className="rounded-2xl bg-white border border-[hsl(var(--neutral-150))] shadow-sm h-[640px] lg:h-[720px] flex flex-col">
                <div className="px-4 py-3.5 border-b border-[hsl(var(--neutral-150))]">
                  <div className="flex items-center gap-2 mb-3">
                    <Search className="h-4 w-4 text-[hsl(var(--navy-700))]" />
                    <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--navy-800))]">
                      Keyword Search
                    </div>
                  </div>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[hsl(var(--neutral-500))]" />
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search organisations, tags…"
                      className="w-full h-9 pl-8 pr-3 rounded-md border border-[hsl(var(--neutral-200))] text-[13px] outline-none focus:border-[hsl(var(--navy-400))]"
                    />
                  </div>
                  <div className="mt-3">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--neutral-500))] mb-1.5">
                      <Filter className="h-3 w-3" /> Filter
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {FILTERS.map((f) => {
                        const active = filter === f;
                        return (
                          <button
                            key={f}
                            type="button"
                            onClick={() => setFilter(f)}
                            className={`text-[11px] px-2.5 h-6 rounded-full border transition-colors ${
                              active
                                ? "bg-[hsl(var(--navy-800))] text-white border-[hsl(var(--navy-800))]"
                                : "bg-white text-[hsl(var(--neutral-700))] border-[hsl(var(--neutral-200))] hover:border-[hsl(var(--navy-300))]"
                            }`}
                          >
                            {f}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-3 space-y-2.5">
                  <div className="px-1 text-[11px] text-[hsl(var(--neutral-500))]">
                    {results.length} result{results.length === 1 ? "" : "s"}
                  </div>
                  {results.map((r) => (
                    <button
                      key={r.org}
                      type="button"
                      className="w-full text-left rounded-xl border border-[hsl(var(--neutral-150))] bg-white hover:border-[hsl(var(--navy-300))] hover:shadow-sm p-3 transition-all group"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <div
                            className="h-7 w-7 rounded-md grid place-items-center shrink-0"
                            style={{ background: a.chipBg, color: a.chipText }}
                          >
                            <Building2 className="h-3.5 w-3.5" />
                          </div>
                          <div className="font-semibold text-[13px] text-[hsl(var(--navy-900))] truncate">
                            {r.org}
                          </div>
                        </div>
                        <span className="text-[10px] font-bold font-numeric text-[hsl(var(--neutral-500))] shrink-0 tabular-nums">
                          p.{r.page}
                        </span>
                      </div>
                      <p className="mt-2 text-[12px] leading-snug text-[hsl(var(--neutral-700))] line-clamp-3">
                        {r.snippet}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide text-[hsl(var(--neutral-500))]">
                          <Tag className="h-2.5 w-2.5" />
                          {r.category}
                        </span>
                        {r.tags.slice(0, 2).map((t) => (
                          <span
                            key={t}
                            className="text-[10px] px-1.5 py-0.5 rounded-full"
                            style={{ background: a.chipBg, color: a.chipText }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </button>
                  ))}
                  {results.length === 0 && (
                    <div className="text-center py-10 text-[13px] text-[hsl(var(--neutral-500))]">
                      No matches. Try a broader keyword or ask the AI assistant.
                    </div>
                  )}
                </div>
              </div>
            </aside>
          </div>

          {/* Footer CTA */}
          <div className="mt-6 rounded-2xl border border-[hsl(var(--neutral-150))] bg-white p-5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg grid place-items-center bg-[hsl(var(--orange-100))] text-[hsl(var(--orange-600))]">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[14px] font-bold text-[hsl(var(--navy-900))]">
                  Prefer the full PDF?
                </div>
                <div className="text-[12px] text-[hsl(var(--neutral-600))]">
                  Download the complete directory or contact CII for printed copies.
                </div>
              </div>
            </div>
            <div className="flex gap-2.5">
              <button
                type="button"
                className="inline-flex items-center gap-2 h-10 px-4 rounded-md font-semibold text-white text-sm"
                style={{ background: "hsl(var(--navy-800))" }}
              >
                <Download className="h-4 w-4" /> Download PDF
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 h-10 px-4 rounded-md font-semibold text-[hsl(var(--navy-800))] border border-[hsl(var(--neutral-200))] bg-white text-sm"
              >
                Contact CII <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <WireFooter />
    </div>
  );
};

/* -------- Chat bubble -------- */
const ChatBubble = ({ msg }: { msg: ChatMsg }) => {
  const isUser = msg.role === "user";
  return (
    <div className={`flex items-start gap-3 ${isUser ? "flex-row-reverse" : ""}`}>
      <div
        className={`h-8 w-8 rounded-lg grid place-items-center shrink-0 ${
          isUser
            ? "bg-[hsl(var(--navy-800))] text-white"
            : "bg-[hsl(var(--navy-050))] text-[hsl(var(--navy-700))]"
        }`}
      >
        {isUser ? <UserIcon className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
      </div>
      <div className={`max-w-[88%] ${isUser ? "items-end" : ""}`}>
        <div
          className={`rounded-2xl px-4 py-2.5 text-[13.5px] leading-relaxed whitespace-pre-wrap ${
            isUser
              ? "bg-[hsl(var(--navy-800))] text-white rounded-tr-sm"
              : "bg-[hsl(var(--neutral-50))] border border-[hsl(var(--neutral-150))] text-[hsl(var(--neutral-800))] rounded-tl-sm"
          }`}
        >
          {renderMarkdown(msg.text)}
        </div>
        {msg.citations && msg.citations.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {msg.citations.map((c) => (
              <span
                key={`${c.label}-${c.page}`}
                className="inline-flex items-center gap-1 text-[11px] font-semibold rounded-full bg-white border border-[hsl(var(--neutral-200))] text-[hsl(var(--navy-800))] px-2 py-0.5"
              >
                <Quote className="h-3 w-3" />
                {c.label} · p.{c.page}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

/* Tiny markdown: **bold** and _italic_ only */
function renderMarkdown(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|_[^_]+_)/g);
  return parts.map((p, i) => {
    if (p.startsWith("**") && p.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold">
          {p.slice(2, -2)}
        </strong>
      );
    }
    if (p.startsWith("_") && p.endsWith("_")) {
      return (
        <em key={i} className="opacity-80">
          {p.slice(1, -1)}
        </em>
      );
    }
    return <span key={i}>{p}</span>;
  });
}

export default DirectoryExplorer;
