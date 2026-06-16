#!/usr/bin/env python3
"""Generate src/data/caseStudies.ts from the user-supplied casestudies.json."""
import json, re, sys, os, html
from collections import Counter

DATA = json.load(open(os.path.join(os.path.dirname(__file__), 'casestudies.json')))

# ---------- Helpers ----------

def slugify(s, maxlen=60):
    s = s.lower()
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    s = re.sub(r"-+", "-", s)
    return s[:maxlen].rstrip("-")

def split_sections(md):
    """Return list of (heading, body) preserving order; first chunk before any H2 keyed as ''."""
    md = md.replace("\r\n", "\n")
    parts = re.split(r"(?m)^##\s+", md)
    out = []
    if parts and parts[0].strip():
        out.append(("", parts[0].strip()))
    for p in parts[1:]:
        head, *rest = p.split("\n", 1)
        out.append((head.strip(), (rest[0] if rest else "").strip()))
    return out

def bullets(text):
    return [re.sub(r"\s+", " ", b).strip() for b in re.findall(r"(?m)^\s*[-*]\s+(.+)", text)]

def paragraphs(text):
    return [re.sub(r"\s+", " ", p).strip()
            for p in re.split(r"\n\s*\n", text)
            if p.strip() and not p.lstrip().startswith(("-", "*"))]

def pick_section(secs, keywords):
    """Return concatenated body of all sections whose heading matches any keyword."""
    matched = []
    for h, b in secs:
        hl = h.lower()
        if any(k in hl for k in keywords):
            matched.append(b)
    return "\n\n".join(matched)

def first_sentence(s, maxlen=200):
    s = re.sub(r"\s+", " ", s).strip()
    m = re.match(r"(.+?[\.\?!])(\s|$)", s)
    out = m.group(1) if m else s
    return (out[:maxlen-1] + "…") if len(out) > maxlen else out

def short_title(s, maxwords=5):
    s = re.sub(r"\s+", " ", s).strip().rstrip(".,;:")
    words = s.split(" ")
    return " ".join(words[:maxwords])

def text_clean(s, maxlen=240):
    s = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", s)  # strip markdown links
    s = re.sub(r"[`*_]", "", s)
    s = re.sub(r"\s+", " ", s).strip()
    return (s[:maxlen-1] + "…") if len(s) > maxlen else s

# ---------- Outcome tagging ----------

OUTCOME_KEYWORDS = {
    "productivity": ["productivity", "oee", "throughput", "output", "efficien", "cycle time", "takt", "capacity", "manpower", "labour", "labor"],
    "quality":      ["quality", "defect", "inspect", "spc", "rework", "scrap", "cpk", "vision system", "first-pass", "rejection"],
    "traceability": ["traceab", "batch", "serial", "lot", "genealog", "track and trace", "serializ", "barcode", " qr ", "tagging", "rfid"],
    "downtime":     ["downtime", "breakdown", "maintenance", "predictive", "mtbf", "mttr", "availability", "vibration", "condition monitor", "reliability", "uptime", "unplanned"],
    "energy":       ["energy", "emission", "sustainab", "decarbon", "carbon", "esg", "kwh", "power consumption", "consumption of energy"],
    "planning":     ["planning", "schedul", "forecast", " aps ", " scm ", "supply chain", "logistic", "dispatch", "inventory", "warehouse", "order"],
}

def _strip_about_sections(md):
    """Remove `## About <X>` / trademark blocks so they don't dominate keyword scoring."""
    parts = re.split(r"(?m)^##\s+", md)
    keep = []
    if parts and parts[0].strip():
        keep.append(parts[0])
    for p in parts[1:]:
        head = p.split("\n", 1)[0].strip().lower()
        if head.startswith(("about ", "trademark", "case in point", "background", "introduction")):
            continue
        keep.append(p)
    return "\n## ".join(keep)

def score_outcomes(text, vps=None):
    t = " " + _strip_about_sections(text).lower() + " "
    scores = {}
    for k, kws in OUTCOME_KEYWORDS.items():
        n = sum(t.count(kw) for kw in kws)
        if n: scores[k] = n
    # Boost via explicit value_creation field
    vp_boost = {
        "Predictive Maintenance": "downtime",
        "Process Optimisation": "productivity",
        "Production & Supply Chain": "planning",
        "Design & Engineering": "productivity",
        "Service": "downtime",
        "Workforce Management": "productivity",
    }
    for v in (vps or []):
        b = vp_boost.get(v)
        if b: scores[b] = scores.get(b, 0) + 3
    ranked = sorted(scores.items(), key=lambda x: -x[1])
    # Threshold: keep ones with >=2 hits and within 50% of top
    qualified = [(k, v) for k, v in ranked if v >= 2]
    if not qualified:
        # Fall back to highest scoring or productivity
        return [ranked[0][0]] if ranked else ["productivity"]
    top = qualified[0][1]
    out = [k for k, v in qualified if v >= max(2, top * 0.4)]
    return out[:3]

# ---------- KPI extraction ----------

KPI_PATTERNS = [
    # +XX%, -XX%
    (r"([+\-]?\d{1,3}(?:\.\d+)?\s*%)", None),
    (r"(\d+(?:\.\d+)?\s*percent)", None),
    # "XX hours/days/months reduced", "from X to Y"
    (r"(\d+x\b)", None),
    (r"(24\s*x\s*7|24/7)", None),
]

def extract_kpis(benefits_text):
    out = []
    seen = set()
    # Capture small phrase around each match
    for m in re.finditer(r"([+\-]?\d{1,3}(?:\.\d+)?\s*(?:%|percent))", benefits_text, flags=re.I):
        start = max(0, m.start() - 80)
        end = min(len(benefits_text), m.end() + 80)
        snippet = benefits_text[start:end]
        # label = phrase before percentage, after the most recent capital or period
        before = benefits_text[max(0, m.start()-60):m.start()]
        before = re.split(r"[\.;\n]", before)[-1]
        before = re.sub(r"[`*_\-]+", "", before).strip(" ,:()")
        label = short_title(before, 6) or "Improvement"
        val = re.sub(r"\s+", "", m.group(1))
        if "percent" in val.lower(): val = val.lower().replace("percent","%")
        if not val.startswith(("+", "-")):
            # Detect direction: words like "reduced", "down", "less", "saved" -> down; else up
            ctx = snippet.lower()
            if any(w in ctx for w in ["reduc", "down", "less", "lower", "decreas", "savings", "saved", "cut "]):
                direction = "down"
                val = val if val.startswith("-") else val
            else:
                direction = "up"
                val = ("+" + val) if not val.startswith(("+","-")) else val
        else:
            direction = "down" if val.startswith("-") else "up"
        key = (label.lower(), val)
        if key in seen: continue
        seen.add(key)
        out.append({"label": label[:40], "value": val, "direction": direction})
        if len(out) >= 6: break
    return out

# ---------- Manual sector & state normalisation ----------

SECTOR_MAP = {
    "": "Cross-sector",
    "Automobile & Ancillaries": "Automobile & Ancillaries",
    "Automotive": "Automotive",
    "Engineering - Industrial Equipments": "Engineering – Industrial Equipment",
    "Engineering - Capital Goods": "Engineering – Capital Goods",
    "Oil & Gas": "Oil & Gas",
    "Consumer Durables – Electronics": "Consumer Durables & Electronics",
    "Food & Beverage (Dairy)": "Food & Beverage",
    "Packaging solutions in the food and pharmaceutical segment": "Packaging",
    "Pharma": "Pharma",
    "FMCG": "FMCG",
    "Automated Storage and Retrieval Systems (ASRS) and stationary racking": "Warehouse Automation",
    "Glass": "Glass Manufacturing",
    "Home Appliances": "Home Appliances",
    "Electrical equipments": "Electrical Equipment",
}

VALUE_MAP = {
    "Production & Supply Chain": "Production & Supply Chain",
    "Process Optimisation": "Process Optimisation",
    "Design and Engineering": "Design & Engineering",
    "Design & Engineering- Vibratio": "Design & Engineering",
    "Predictive Maintenance": "Predictive Maintenance",
    "Logistics": "Production & Supply Chain",
    "Service": "Service",
    "Work Force Management": "Workforce Management",
}

def map_valueprops(raw):
    if not raw: return []
    parts = [p.strip() for p in raw.split(",") if p.strip()]
    out = []
    for p in parts:
        v = VALUE_MAP.get(p, p)
        if v not in out: out.append(v)
    return out

# ---------- Per-case extraction ----------

def build_case(cs):
    md = cs["writeup"]
    secs = split_sections(md)
    sec_lookup = {h.lower(): b for h, b in secs}

    challenges_body = pick_section(secs, ["challenge", "problems faced", "pain", "business need", "need", "encountering", "barriers", "dilemma", "opportunit"])
    approach_body   = pick_section(secs, ["approach", "methodology"])
    solution_body   = pick_section(secs, ["solution", "industry 4.0 solution", "implementation", "execution", "scope of work", "deploy", "upgrad", "asset insight", "azure", "implement"])
    benefits_body   = pick_section(secs, ["benefit", "result", "outcome", "impact", "improved", "value", "gain", "ahead", "future", "prediction"])
    about_body      = pick_section(secs, ["about ", "case in point", "background"])

    # Fallback if specific sections missing — use first non-trademark paragraphs
    raw_paras = []
    for h, b in secs:
        if "trademark" in h.lower(): continue
        raw_paras += paragraphs(b)
    if not challenges_body and raw_paras: challenges_body = "\n\n".join(raw_paras[:2])
    if not solution_body and raw_paras: solution_body = "\n\n".join(raw_paras[1:4])
    if not benefits_body and raw_paras: benefits_body = "\n\n".join(raw_paras[-2:])

    # Summary: first long paragraph that isn't a trademark notice
    summary = ""
    for h, b in secs:
        if "trademark" in h.lower(): continue
        for p in paragraphs(b):
            if len(p) > 80:
                summary = text_clean(p, 320)
                break
        if summary: break
    if not summary:
        summary = text_clean(cs["title"], 320)

    # Challenge / approach narratives
    challenge_narr = text_clean(paragraphs(challenges_body)[0], 320) if paragraphs(challenges_body) else \
                     text_clean(summary, 320)
    approach_narr  = text_clean(paragraphs(solution_body)[0], 320) if paragraphs(solution_body) else \
                     text_clean(paragraphs(approach_body)[0] if paragraphs(approach_body) else summary, 320)

    # Challenge bullet points
    cp = bullets(challenges_body)
    if not cp:
        # synthesize from sentences in challenge_narr
        sents = re.split(r"(?<=[\.!?])\s+", challenge_narr)
        cp = [text_clean(s, 140) for s in sents if len(s) > 25][:3]
    challenge_points = [text_clean(p, 160) for p in cp[:5]] or ["See challenge narrative above"]

    # Approach steps
    sb = bullets(solution_body) or bullets(approach_body)
    approach_steps = []
    for s in sb[:5]:
        approach_steps.append({"title": short_title(s, 4), "desc": text_clean(s, 200)})
    if not approach_steps:
        for p in paragraphs(solution_body)[:3]:
            approach_steps.append({"title": short_title(p, 4), "desc": text_clean(p, 200)})
    if not approach_steps:
        approach_steps = [{"title": "Programme", "desc": text_clean(approach_narr, 200)}]

    # Capabilities — short noun phrases from solution bullets + capabilities-like phrases
    caps = []
    for b in (bullets(solution_body) + bullets(approach_body) + bullets(benefits_body))[:14]:
        clean = text_clean(b, 80)
        # take first 3-5 words
        words = clean.split(" ")[:4]
        cap = " ".join(words).rstrip(",.:;")
        if cap and cap not in caps:
            caps.append(cap)
    if not caps:
        caps = [v for v in map_valueprops(cs["value_creation"])] or ["Industry 4.0 capabilities"]
    capabilities = caps[:8]

    # KPIs
    kpis = extract_kpis(benefits_body or solution_body)
    if not kpis:
        # qualitative fallback from benefit bullets
        for b in bullets(benefits_body)[:4]:
            label = short_title(b, 5)
            kpis.append({"label": label[:40] or "Outcome", "value": "Improved", "direction": "up"})
    if not kpis:
        kpis = [{"label": "Outcome", "value": "Documented", "direction": "up"}]
    metric = kpis[0]

    # before/after — try to find paired before/after sentences
    before_after = []
    for b in bullets(benefits_body):
        m = re.search(r"from\s+(.+?)\s+to\s+(.+?)(?:[\.,;]|$)", b, re.I)
        if m:
            before_after.append({"label": short_title(b, 5)[:40] or "Outcome",
                                 "before": text_clean(m.group(1), 60),
                                 "after": text_clean(m.group(2), 60)})
    if not before_after and kpis:
        before_after = [{"label": k["label"], "before": "Baseline", "after": k["value"]} for k in kpis[:2]]

    # Company type heuristic
    company_type = "Enterprise"
    lc_md = md.lower()
    if any(w in lc_md for w in ["msme", "small and medium", "small medium enterprise", "smb "]):
        company_type = "MSME"
    elif cs["company"] in {"Plastech Solutions", "New Engineering Works", "Narayan Powertech Pvt. Ltd.", "Mechasoft"}:
        company_type = "MSME"

    # Sector + state
    sector = SECTOR_MAP.get(cs["sector"], cs["sector"] or "Cross-sector")
    state  = cs["state"] or "India"
    company_size = "Not disclosed"
    duration_months = 0  # unknown

    # Value props
    vps = map_valueprops(cs["value_creation"])
    if not vps:
        vps = ["Smart Factory"]

    # Outcomes
    outcomes = score_outcomes(md, vps)

    # Slug
    slug = f"{cs['id']}-{slugify(cs['company'], 30)}-{slugify(cs['title'], 50)}"

    # Headline: clean smart quotes in title
    headline = cs["title"].replace("\u2018", "'").replace("\u2019", "'").replace("\u201C","\"").replace("\u201D","\"")

    # Executive summary: take first two paragraphs of relevant content
    exec_paras = []
    for p in raw_paras:
        if len(p) < 60: continue
        exec_paras.append(text_clean(p, 480))
        if len(exec_paras) == 2: break
    executive_summary = " ".join(exec_paras) if exec_paras else summary

    # categoryTags
    category_tags = [sector] + vps[:2] + [company_type]
    category_tags = list(dict.fromkeys([t for t in category_tags if t]))[:4]

    return {
        "slug": slug,
        "company": cs["company"],
        "headline": headline,
        "summary": summary,
        "challenge": challenge_narr,
        "approach": approach_narr,
        "sector": sector,
        "state": state,
        "companyType": company_type,
        "valueProps": vps,
        "durationMonths": duration_months,
        "companySize": company_size,
        "metric": metric,
        "kpis": kpis[:5],
        "challengePoints": challenge_points,
        "approachSteps": approach_steps,
        "capabilities": capabilities,
        "beforeAfter": before_after[:4],
        "outcomes": outcomes,
        "categoryTags": category_tags,
        "executiveSummary": executive_summary,
        "sourceId": cs["id"],
        "sourceUrl": cs["url"],
        "logo": cs.get("logo", ""),
    }

cases = [build_case(c) for c in DATA]

# Compute featured: pick richest, manually mark the Siemens Warehouse (id 71), plus a few outcome-diverse ones
featured_ids = {71, 9, 11, 22, 32, 48, 56, 65}
for c in cases:
    if c["sourceId"] in featured_ids:
        c["featured"] = True

# Build sector & state lists
sectors_set = sorted(set(c["sector"] for c in cases))
states_set  = sorted(set(c["state"] for c in cases))
vp_set      = sorted(set(v for c in cases for v in c["valueProps"]))

# Diagnostics
oc_dist = Counter()
for c in cases:
    for o in c["outcomes"]: oc_dist[o] += 1
print("Outcome distribution:", oc_dist, file=sys.stderr)
print("Sectors:", sectors_set, file=sys.stderr)
print("Total cases:", len(cases), file=sys.stderr)

# ---------- Render TypeScript ----------

def ts(v):
    if v is None: return "undefined"
    if isinstance(v, bool): return "true" if v else "false"
    if isinstance(v, (int, float)): return str(v)
    if isinstance(v, str):
        s = v.replace("\\", "\\\\").replace("`", "\\`").replace("$", "\\$")
        return f"`{s}`"
    if isinstance(v, list):
        return "[" + ", ".join(ts(x) for x in v) + "]"
    if isinstance(v, dict):
        return "{ " + ", ".join(f"{k}: {ts(val)}" for k, val in v.items()) + " }"
    raise TypeError(type(v))

# Header
parts = []
parts.append("""// AUTO-GENERATED from /mnt/user-uploads/casestudies.zip (61 real case studies).
// Do not hand-edit individual entries — rerun /tmp/cs/gen.py to refresh.
import type { OutcomeId } from "./solutions";

export type Sector = string;

export type CompanyType = "MSME" | "Enterprise" | "Supplier" | "Export-focused";

export type ValueProp = string;

export interface KPI {
  label: string;
  value: string;
  direction: "up" | "down" | "flat";
}

export interface SolutionProvider {
  name: string;
  overview: string;
  capabilities: string[];
  industries?: string[];
  technologies?: string[];
}

export interface ManufacturerProfile {
  industry: string;
  footprint: string;
  highlights: string[];
}

export interface DiscoveryStep { title: string; desc: string }
export interface ComplexityStat { value: string; label: string }
export interface TimelineStep { phase: string; title: string; desc: string }
export interface TeamRole { role: string; scope: string }
export interface ChangeAction { challenge: string; actions: string[]; outcome: string }
export interface ArchComponent { name: string; layer: string; desc: string }
export interface SolutionFeature { title: string; desc: string }
export interface ImplementationChallenge { challenge: string; mitigation: string; outcome: string }
export interface OutcomeGroup { operational: KPI[]; business: KPI[]; user: string[] }
export interface ResourceItem { title: string; type: string; href?: string }
export interface Testimonial { quote: string; name: string; role: string; company: string }
export interface ApproachCard { title: string; desc: string }
export interface WorkforceShift { before: string; after: string[] }

export interface CaseStudy {
  slug: string;
  company: string;
  headline: string;
  summary: string;
  challenge: string;
  approach: string;
  sector: Sector;
  state: string;
  companyType: CompanyType;
  valueProps: ValueProp[];
  durationMonths: number;
  companySize: string;
  metric: KPI;
  kpis: KPI[];
  challengePoints: string[];
  approachSteps: { title: string; desc: string }[];
  capabilities: string[];
  beforeAfter: { label: string; before: string; after: string }[];
  featured?: boolean;
  categoryTags?: string[];
  executiveSummary?: string;
  solutionProvider?: SolutionProvider;
  manufacturer?: ManufacturerProfile;
  discoveryFlow?: DiscoveryStep[];
  complexity?: ComplexityStat[];
  timeline?: TimelineStep[];
  team?: TeamRole[];
  changeManagement?: ChangeAction;
  architecture?: ArchComponent[];
  solutionFeatures?: SolutionFeature[];
  implementationChallenges?: ImplementationChallenge[];
  outcomes?: OutcomeId[];
  resources?: ResourceItem[];
  approachCards?: ApproachCard[];
  workforceTransformation?: WorkforceShift;
  testimonial?: Testimonial;
  replicationInsights?: string[];
  technologies?: string[];
  solutionGroups?: { title: string; points: string[] }[];
  businessChallenges?: { title: string; desc: string }[];
  businessOutcomes?: { title: string; impact: string }[];
  benefitsTable?: { area: string; impact: string }[];
  relatedSolutionAreas?: string[];
  sourceId?: number;
  sourceUrl?: string;
  logo?: string;
}
""")

parts.append("export const sectors: Sector[] = " + ts(sectors_set) + ";\n\n")
parts.append("export const states = " + ts(states_set) + ";\n\n")
parts.append('export const companyTypes: CompanyType[] = ["MSME", "Enterprise", "Supplier", "Export-focused"];\n\n')
parts.append("export const valueProps: ValueProp[] = " + ts(vp_set) + ";\n\n")
parts.append('export const quickChips: ValueProp[] = ["Process Optimisation", "Production & Supply Chain", "Design & Engineering", "Predictive Maintenance", "Smart Factory"];\n\n')

parts.append("export const caseStudies: CaseStudy[] = [\n")
for c in cases:
    parts.append("  " + ts(c) + ",\n")
parts.append("];\n\n")

parts.append("""export const findCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);

export const relatedCaseStudies = (slug: string, limit = 4) => {
  const current = findCaseStudy(slug);
  if (!current) return [];
  return caseStudies
    .filter((c) => c.slug !== slug)
    .map((c) => {
      let score = 0;
      if (c.sector === current.sector) score += 3;
      if (c.state === current.state) score += 1;
      if (c.companyType === current.companyType) score += 1;
      score += c.valueProps.filter((v) => current.valueProps.includes(v)).length;
      const sharedOutcomes = (c.outcomes || []).filter((o) => (current.outcomes || []).includes(o)).length;
      score += sharedOutcomes * 2;
      return { c, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.c);
};
""")

open(os.path.join(os.path.dirname(__file__), 'caseStudies.ts'), 'w').write("".join(parts))
print("wrote caseStudies.ts", file=sys.stderr)
