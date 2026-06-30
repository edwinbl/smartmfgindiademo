import { useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Factory,
  Layers,
  PlayCircle,
  Download,
  Users,
  Truck,
  BookOpen,
} from "lucide-react";
import { AssessmentHeroCard } from "@/components/assessment/AssessmentHeroCard";
import { WireHeader } from "@/components/wireframe/WireHeader";
import { CommonFinalCta } from "@/components/common/CommonFinalCta";
import { WireFooter } from "@/components/wireframe/WireFooter";
import { WireChatbotFAB } from "@/components/wireframe/WireChatbotFAB";
import { SEO } from "@/components/SEO";
import deckAsset from "@/assets/assessment-model-deck.pptx.asset.json";

const ASSESSMENT_URL = "https://www.smartmfgindia.com/Assesment.aspx";
const DECK_URL = deckAsset.url;


const modelCategories = [
  { icon: Users, title: "Leadership & Strategy", desc: "Current and goal state on Industry 1.0 → 4.0, management commitment, resource and financial planning, cyber/data security policy, research and data science." },
  { icon: Users, title: "People & Culture", desc: "Engagement and competence on smart manufacturing core concepts — digitalisation, IoT, automation, robotics — collaboration, metrics, training and professional tie-ups." },
  { icon: Layers, title: "Infrastructure", desc: "ERP/workflow, cloud, digital sensors, EAM, reporting platforms, IT systems integration, shop-floor safety monitoring and information security." },
  { icon: Factory, title: "Operations", desc: "Production planning, design, execution and post-production — DfM, DfQ, simulation, automation, IoT sensing, AI/ML and additive manufacturing." },
  { icon: Truck, title: "Supply Chain & Logistics", desc: "Information flow with customers and suppliers, digitised warehousing, collaborative tools, inbound/outbound tracking and component-level traceability." },
];

const modelTechnologies = [
  "Systems Integration",
  "Big Data & Analytics",
  "Simulation & Digital Twins",
  "Internet of Things (IoT)",
  "Cloud Storage & Computing",
  "Automation & Robotics",
  "Artificial Intelligence",
  "Augmented Reality",
  "Additive Manufacturing",
  "Cyber & Data Security",
];

const AssessmentModelSection = () => (
  <section className="py-16 md:py-24 bg-white border-t border-[hsl(var(--neutral-150))]">
    <div className="container-cii">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] items-start">
        <div>
          <div className="section-eyebrow mb-3">The framework</div>
          <h2 className="font-display font-bold text-[26px] md:text-[34px] leading-tight tracking-tight text-navy-800">
            The CII Smart Manufacturing Maturity Model
          </h2>
          <p className="mt-4 text-base text-[hsl(var(--neutral-700))] leading-relaxed">
            The assessment is powered by an end-to-end model developed by the CII Smart Manufacturing Council — a
            task force of senior industry professionals from Tata, Tech Mahindra, Siemens, Microsoft, Bosch, Blue Star,
            IISc and others. The model adapts global maturity frameworks for Indian manufacturing, with specific focus
            on MSMEs.
          </p>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { k: "5", v: "Functional categories" },
              { k: "49", v: "Key elements" },
              { k: "10", v: "Marks per element" },
            ].map((s) => (
              <div key={s.v} className="rounded-md border border-[hsl(var(--neutral-150))] bg-[hsl(var(--neutral-50))] px-3 py-3 text-center">
                <div className="font-display font-bold text-navy-800 text-2xl leading-none">{s.k}</div>
                <div className="text-[11px] text-[hsl(var(--neutral-700))] mt-1 leading-tight">{s.v}</div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-[hsl(var(--neutral-700))] leading-relaxed">
            Each element is rated on two 5-point scales — <span className="font-semibold text-navy-800">depth</span> of
            use of smart technologies and <span className="font-semibold text-navy-800">scale</span> of deployment —
            combining into a score out of 10. Outputs are presented as criteria-wise scores on a scale of 100, with
            radar charts and (as response data builds) industry averages and best-in-class benchmarks.
          </p>

          <div className="mt-6">
            <div className="text-[11px] uppercase tracking-wide font-bold text-[hsl(var(--neutral-500))] mb-2">
              Technologies covered
            </div>
            <div className="flex flex-wrap gap-2">
              {modelTechnologies.map((t) => (
                <span key={t} className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-[hsl(var(--navy-050))] text-[hsl(var(--navy-700))] border border-[hsl(var(--navy-100))]">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href={DECK_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
              <Download className="!h-4 !w-4" /> Download Model Deck
            </a>
            <a href={ASSESSMENT_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Take the Assessment <ArrowRight className="!h-4 !w-4" />
            </a>
          </div>
        </div>

        <div className="space-y-3">
          {modelCategories.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="cii-card p-5 bg-white flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="shrink-0 h-10 w-10 rounded-md grid place-items-center bg-[hsl(var(--orange-100))] text-[hsl(var(--orange-600))] font-display font-bold">
                {String.fromCharCode(65 + i)}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-[hsl(var(--navy-600))]" />
                  <h3 className="font-display font-bold text-navy-800 text-base">{title}</h3>
                </div>
                <p className="mt-1 text-sm text-[hsl(var(--neutral-700))] leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
          <div className="rounded-lg border border-dashed border-[hsl(var(--neutral-200))] bg-[hsl(var(--neutral-50))] p-4 flex items-start gap-3">
            <BookOpen className="h-4 w-4 mt-0.5 text-[hsl(var(--navy-600))] shrink-0" />
            <p className="text-xs text-[hsl(var(--neutral-700))] leading-relaxed">
              On-site detailed assessments by CII Institute of Quality experts use the same model to produce a
              comprehensive report on current state and the next steps to reach your goal state.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const microTags = ["MSME-focused", "Guided process", "Outcome-oriented", "Readiness insights"];

const outcomes = [
  { icon: TrendingUp, title: "Productivity", desc: "Identify readiness to improve throughput, OEE and shop-floor performance." },
  { icon: ShieldCheck, title: "Quality", desc: "Evaluate readiness for consistent quality systems and defect reduction." },
  { icon: Network, title: "Traceability", desc: "Assess foundations for end-to-end product and process traceability." },
  { icon: Leaf, title: "Energy Efficiency", desc: "Understand readiness to track, reduce and optimise energy consumption." },
  { icon: Globe2, title: "Export Readiness", desc: "Benchmark capabilities required for global compliance and exports." },
  { icon: Layers, title: "Value Chain Participation", desc: "Gauge readiness to integrate into larger OEM and supplier ecosystems." },
];

const processSteps = [
  { n: "01", title: "Access Assessment", desc: "Open the current readiness assessment via a guided web interface." },
  { n: "02", title: "Complete Inputs", desc: "Answer structured questions across operational and digital dimensions." },
  { n: "03", title: "Receive Readiness Insights", desc: "Get a readiness snapshot with outcome-aligned priority areas." },
];

const currentBenefits = [
  { icon: Gauge, title: "Readiness Snapshot", desc: "A clear, executive-friendly view of your current manufacturing readiness." },
  { icon: BarChart3, title: "Outcome Insights", desc: "Understand readiness mapped to productivity, quality, energy and exports." },
  { icon: ListChecks, title: "Priority Areas", desc: "Identify the focus areas that will most influence your transformation." },
  { icon: Compass, title: "Next-Step Guidance", desc: "Direction on where to begin — improve, adopt or transform." },
];

const futureBenefits = [
  { icon: LineChart, title: "Benchmarking", desc: "Compare your readiness against peers, sector and national averages." },
  { icon: Sparkles, title: "Recommendations Engine", desc: "Personalised pathway suggestions based on your readiness profile." },
  { icon: FileBarChart, title: "Interactive Readiness Reports", desc: "Dynamic, drill-down reports for leadership and operations teams." },
];

const dimensions = [
  { label: "Operations", v: 72 },
  { label: "Quality Systems", v: 64 },
  { label: "Digital Adoption", v: 48 },
  { label: "Energy & Sustainability", v: 56 },
  { label: "People & Skills", v: 60 },
];

const Counter = ({ to, start, duration = 1400 }: { to: number; start: boolean; duration?: number }) => {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!start) { setV(0); return; }
    let raf = 0; const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, start, duration]);
  return <>{v}</>;
};

const ReadinessAssessment = () => {
  const [animateOn, setAnimateOn] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setAnimateOn(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Readiness Assessment — CII Smart Manufacturing",
    description:
      "Assess your manufacturing readiness across operations, quality, digital adoption and sustainability before deciding what to improve, adopt or transform.",
    url: "https://smartmfgindia-demo4.bluelup.in/readiness-assessment",
  };


  return (
    <div className="min-h-dvh bg-background text-foreground">
      <SEO
        title="Readiness Assessment — Understand Before You Transform"
        description="Assess your manufacturing readiness across productivity, quality, traceability, energy and exports — a guided MSME-friendly entry point to transformation."
        jsonLd={jsonLd}
      />
      <WireHeader />

      <main>
        {/* ============== HERO ============== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[hsl(var(--navy-050))] to-white min-h-[60svh] md:min-h-[calc(100svh-72px)] flex items-start md:items-center pt-8 md:pt-0">
          <div className="absolute inset-0 -z-0 opacity-[0.35] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 10%, hsl(var(--navy-100)) 0, transparent 40%), radial-gradient(circle at 90% 80%, hsl(var(--orange-100)) 0, transparent 45%)",
            }}
          />
          <div className="container-cii relative py-10">
            <div className="grid gap-10 lg:gap-14 lg:grid-cols-[1.05fr_1fr] items-center">
              <div>
                <div className="section-eyebrow mb-4">Readiness Assessment</div>
                <h1 className="font-display font-bold text-[30px] sm:text-[36px] md:text-[44px] leading-[1.1] tracking-tight text-navy-800">
                  Understand Your{" "}
                  <span className="text-[hsl(var(--red-600))]">Manufacturing Readiness</span>{" "}
                  Before You Transform
                </h1>
                <p className="mt-5 text-base md:text-lg text-[hsl(var(--neutral-700))] max-w-xl">
                  Assess your current readiness across operations, productivity, quality and digital adoption before
                  identifying the next steps for improvement.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {microTags.map((t) => (
                    <span key={t} className="cii-chip">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <AssessmentHeroCard />
            </div>
          </div>
        </section>

        {/* ============== PURPOSE ============== */}
        <section className="py-14 md:py-20 bg-white">
          <div className="container-cii">
            <div className="max-w-3xl">
              <div className="section-eyebrow mb-3">Purpose</div>
              <h2 className="font-display font-bold text-[24px] md:text-[30px] leading-tight tracking-tight text-navy-800">
                Objectively gauge where you stand — and guide your smart manufacturing journey
              </h2>
              <p className="mt-4 text-base md:text-lg text-[hsl(var(--neutral-700))] leading-relaxed">
                The assessment framework was created to objectively gauge the level of adoption of smart manufacturing
                by an enterprise and to guide companies on their smart journey. It is hosted on the CII Smart
                Manufacturing platform and is available without charge — companies need to register before taking the
                self-assessment.
              </p>
            </div>
          </div>
        </section>

        {/* ============== THE MODEL ============== */}
        <AssessmentModelSection />

        {/* ============== MEASUREMENT & RESULTS ============== */}
        <section className="py-16 md:py-24 bg-[hsl(var(--neutral-50))]">
          <div className="container-cii">
            <div className="grid gap-10 lg:grid-cols-2 items-start">
              <div>
                <div className="section-eyebrow mb-3">Measurement</div>
                <h2 className="font-display font-bold text-[26px] md:text-[34px] leading-tight tracking-tight text-navy-800">
                  How the assessment is scored
                </h2>
                <ul className="mt-6 space-y-4">
                  {[
                    "49 key elements spread across 5 broad functional categories.",
                    "Each element is rated on depth of use of smart technologies and tools on a 5-point scale (max 10 marks).",
                    "Each element is also rated on the scale of deployment of existing approaches on a 5-point scale (max 10 marks).",
                    "Scores are awarded on the combination of achievement and deployment levels.",
                    "Clear descriptions assist easy self-assessment; questions not applicable to a sector can be passed.",
                  ].map((t) => (
                    <li key={t} className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-[hsl(var(--india-green))]" />
                      <span className="text-sm md:text-base text-[hsl(var(--neutral-700))] leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="section-eyebrow mb-3">Results</div>
                <h2 className="font-display font-bold text-[26px] md:text-[34px] leading-tight tracking-tight text-navy-800">
                  What you receive
                </h2>
                <ul className="mt-6 space-y-4">
                  {[
                    { t: "Criteria-wise scores", d: "Outcomes presented criteria-parameter wise across the five functional categories." },
                    { t: "Sub-criteria scores for Operations", d: "Operations has sub-criteria, so scores are also presented at that level." },
                    { t: "Scaled out of 100", d: "Scores are presented on a scale of 100 as maximum." },
                    { t: "Benchmarks over time", d: "As an adequate number of response sets become available, scores will also be presented as industry averages and best-in-class." },
                  ].map((b) => (
                    <li key={b.t} className="cii-card p-5 bg-white">
                      <div className="font-display font-bold text-navy-800">{b.t}</div>
                      <div className="mt-1 text-sm text-[hsl(var(--neutral-700))] leading-relaxed">{b.d}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============== ROLL-OUT ============== */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-cii">
            <div className="max-w-3xl">
              <div className="section-eyebrow mb-3">Roll-out</div>
              <h2 className="font-display font-bold text-[26px] md:text-[34px] leading-tight tracking-tight text-navy-800">
                How the model is being deployed
              </h2>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {[
                { icon: PlayCircle, t: "Free self-assessment", d: "Hosted on the CII Smart Manufacturing platform and available without charge. A company needs to register to take the self-assessment." },
                { icon: BookOpen, t: "Transition support", d: "A blend of initiatives — workshops, compendium of case studies, business case showcases and masterclasses — to help enterprises move from one level of readiness to the next." },
                { icon: ClipboardList, t: "On-site detailed assessments", d: "CII Institute of Quality conducts detailed on-site assessments through experts using the same model, producing a report on the current state and next steps to reach the goal state." },
                { icon: Users, t: "Trainings", d: "Trainings of assessors, consultants and facilitators are conducted under the CII Institute of Quality." },
              ].map(({ icon: Icon, t, d }) => (
                <div key={t} className="cii-card p-6 bg-white">
                  <div className="h-11 w-11 rounded-md grid place-items-center bg-[hsl(var(--orange-100))] text-[hsl(var(--orange-600))]">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 font-display font-bold text-navy-800 text-base">{t}</h3>
                  <p className="mt-2 text-sm text-[hsl(var(--neutral-700))] leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============== TASK FORCE ============== */}
        <section className="py-16 md:py-24 bg-[hsl(var(--neutral-50))] border-t border-[hsl(var(--neutral-150))]">
          <div className="container-cii">
            <div className="max-w-3xl">
              <div className="section-eyebrow mb-3">Built by</div>
              <h2 className="font-display font-bold text-[26px] md:text-[34px] leading-tight tracking-tight text-navy-800">
                The CII Smart Manufacturing Council Task Force
              </h2>
              <p className="mt-4 text-base text-[hsl(var(--neutral-700))]">
                The steering group for the maturity model brought together senior industry professionals with deep
                knowledge of legacy and digital manufacturing.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { n: "Dr Purnendu Sinha", r: "Technology Leader – IoT & Analytics, Group Technology & Innovation Office, Tata Services Ltd (Lead)" },
                { n: "Nilesh Auti", r: "Head, Manufacturing, Tech Mahindra" },
                { n: "Gautam Dutta", r: "Senior Director – Marketing, Siemens Industry Software India, Digital Factory Division" },
                { n: "Vinayak Kamath", r: "Vice President, Auto CNC Machining Ltd" },
                { n: "Vishnu Bhavaraju", r: "Industry Manager – Manufacturing, Microsoft India" },
                { n: "Rajesh K S", r: "Robert Bosch Automotive Electronics Manufacturing" },
                { n: "Dr Ganesh Natarajan", r: "Executive Chairman and Founder, 5F World" },
                { n: "Ramesh Devnani", r: "Executive Vice President – Manufacturing, Blue Star Ltd" },
                { n: "Prof Amaresh Chakrabarti", r: "Chairman, IISc, CPDM" },
                { n: "Ramesh Rajasekeran", r: "Director – Manufacturing Practices, MonitPro Solutions Pvt Ltd" },
                { n: "Satendra Singh", r: "Head – Manufacturing & Strategy, Nokia Sol. & Network India" },
                { n: "Anupam Kaul", r: "Principal & Head (Quality, Metrology & Standards), CII Institute of Quality" },
              ].map((m) => (
                <div key={m.n} className="cii-card p-4 bg-white">
                  <div className="font-display font-bold text-navy-800 text-sm">{m.n}</div>
                  <div className="mt-1 text-xs text-[hsl(var(--neutral-700))] leading-relaxed">{m.r}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============== FINAL CTA ============== */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-cii">
            <div className="cii-card p-8 md:p-10 bg-gradient-to-br from-[hsl(var(--navy-050))] via-white to-[hsl(var(--orange-100)/0.3)] border-t-4 border-t-[hsl(var(--orange-500))]">
              <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] items-center">
                <div>
                  <div className="section-eyebrow mb-3 flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[hsl(var(--india-green))] opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[hsl(var(--india-green))]" />
                    </span>
                    Open for participation
                  </div>
                  <h2 className="font-display font-bold text-[26px] md:text-[34px] leading-tight tracking-tight text-navy-800">
                    Take the Industry 4.0 Readiness Assessment
                  </h2>
                  <p className="mt-3 text-base text-[hsl(var(--neutral-700))] max-w-xl">
                    Register on the CII Smart Manufacturing platform and complete the guided self-assessment to receive
                    your criteria-wise readiness scores out of 100.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href={ASSESSMENT_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                      Take the Assessment <ArrowRight className="!h-4 !w-4" />
                    </a>
                    <a href={DECK_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
                      <Download className="!h-4 !w-4" /> Download Model Deck
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { k: "5", v: "Categories" },
                    { k: "49", v: "Elements" },
                    { k: "100", v: "Max score" },
                  ].map((s) => (
                    <div key={s.v} className="rounded-md border border-[hsl(var(--neutral-150))] bg-white px-3 py-4 text-center">
                      <div className="font-display font-bold text-navy-800 text-3xl leading-none">{s.k}</div>
                      <div className="text-[11px] text-[hsl(var(--neutral-700))] mt-1 leading-tight">{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>


      </main>


      <CommonFinalCta />
            <WireFooter />
      <WireChatbotFAB />
    </div>
  );
};

export default ReadinessAssessment;
