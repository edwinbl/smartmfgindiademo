import { WireHeader } from "@/components/wireframe/WireHeader";
import { WireFooter } from "@/components/wireframe/WireFooter";
import { WireChatbotFAB } from "@/components/wireframe/WireChatbotFAB";
import { SEO } from "@/components/SEO";
import { AssessmentHero } from "@/components/assessment/AssessmentHero";
import { AssessmentWhyMatters } from "@/components/assessment/AssessmentWhyMatters";
import { AssessmentOverview } from "@/components/assessment/AssessmentOverview";
import { AssessmentOutcomes } from "@/components/assessment/AssessmentOutcomes";
import { AssessmentWhoFor } from "@/components/assessment/AssessmentWhoFor";
import { AssessmentCoverage } from "@/components/assessment/AssessmentCoverage";
import { AssessmentWhatYouGet } from "@/components/assessment/AssessmentWhatYouGet";
import { AssessmentJourney } from "@/components/assessment/AssessmentJourney";
import { AssessmentCta } from "@/components/assessment/AssessmentCta";
import { AssessmentRoadmap } from "@/components/assessment/AssessmentRoadmap";
import { AssessmentFaq } from "@/components/assessment/AssessmentFaq";
import { AssessmentSupport } from "@/components/assessment/AssessmentSupport";
import { AssessmentMobileCta } from "@/components/assessment/AssessmentMobileCta";

const Assessment = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Smart Manufacturing Readiness Assessment",
    description:
      "Understand where your manufacturing operation stands before deciding what to do next. A guided, outcome-driven readiness diagnostic from CII Smart Manufacturing.",
    url: "https://smartmfgindia-demo4.bluelup.in/assessment",
  };

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <SEO
        title="Readiness Assessment — Start with where you stand"
        description="A guided, outcome-driven readiness assessment for Indian manufacturers — anchor every transformation decision in evidence, not technology trends."
        jsonLd={jsonLd}
      />
      <WireHeader />
      <main>
        <AssessmentHero />
        <AssessmentWhyMatters />
        <AssessmentOverview />
        <AssessmentOutcomes />
        <AssessmentWhoFor />
        <AssessmentCoverage />
        <AssessmentWhatYouGet />
        <AssessmentJourney />
        <AssessmentCta />
        <AssessmentRoadmap />
        <AssessmentFaq />
        <AssessmentSupport />
      </main>
      <WireFooter />
      <WireChatbotFAB />
      <AssessmentMobileCta />
    </div>
  );
};

export default Assessment;
