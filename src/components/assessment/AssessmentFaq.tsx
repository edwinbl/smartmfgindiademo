import { WireSection } from "@/components/wireframe/WireSection";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long does the assessment take to complete?",
    a: "Most teams complete the guided assessment in 30–45 minutes. You can save your progress and return later, and inputs are reviewed by CII experts before insights are issued.",
  },
  {
    q: "Do we need deep technical expertise to participate?",
    a: "No. The assessment is designed for business and operations leaders. Questions are explained in plain language with examples and reference notes for each dimension.",
  },
  {
    q: "How is our data handled and protected?",
    a: "Your responses are confidential and used only to generate your readiness report and aggregated, anonymised sector benchmarks. No company-identifiable data is shared externally.",
  },
  {
    q: "What happens after we receive our readiness report?",
    a: "Your report identifies priority dimensions and outcome-linked gaps. CII can connect you with relevant programmes, partners, case studies and ecosystem resources to act on the findings.",
  },
  {
    q: "Is the assessment relevant across manufacturing industries?",
    a: "Yes. The framework applies across discrete, process and hybrid manufacturing, and sector context is layered in during the expert review and recommendations stages.",
  },
];

export const AssessmentFaq = () => (
  <WireSection
    id="faq"
    alt
    eyebrow="FAQ"
    title="Common questions about the assessment"
  >
    <div className="max-w-3xl">
      <Accordion type="single" collapsible className="cii-card divide-y divide-[hsl(var(--neutral-150))]">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border-0 px-5">
            <AccordionTrigger className="text-left font-display font-semibold text-navy-800">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-[hsl(var(--neutral-700))]">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </WireSection>
);
