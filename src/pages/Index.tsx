import { lazy, Suspense } from "react";
import { WireHeader } from "@/components/wireframe/WireHeader";
import { WireHero } from "@/components/wireframe/WireHero";
import { WirePathwayCards } from "@/components/wireframe/WirePathwayCards";
import { WireFooter } from "@/components/wireframe/WireFooter";
import { SEO } from "@/components/SEO";
import { trackEvent } from "@/lib/analytics";

// Below-the-fold sections lazy-loaded to shrink initial JS
const WireLeaderSpeak = lazy(() =>
  import("@/components/wireframe/WireLeaderSpeak").then((m) => ({ default: m.WireLeaderSpeak }))
);
const WireAssessmentTeaser = lazy(() =>
  import("@/components/wireframe/WireAssessmentTeaser").then((m) => ({ default: m.WireAssessmentTeaser }))
);
const WireSolutionsTeaser = lazy(() =>
  import("@/components/wireframe/WireSolutionsTeaser").then((m) => ({ default: m.WireSolutionsTeaser }))
);
const WireResources = lazy(() =>
  import("@/components/wireframe/WireResources").then((m) => ({ default: m.WireResources }))
);
const WireProgrammes = lazy(() =>
  import("@/components/wireframe/WireProgrammes").then((m) => ({ default: m.WireProgrammes }))
);
const WireAwardsBand = lazy(() =>
  import("@/components/wireframe/WireAwardsBand").then((m) => ({ default: m.WireAwardsBand }))
);
const WirePartners = lazy(() =>
  import("@/components/wireframe/WirePartners").then((m) => ({ default: m.WirePartners }))
);
const WireFinalCta = lazy(() =>
  import("@/components/wireframe/WireFinalCta").then((m) => ({ default: m.WireFinalCta }))
);
const WireChatbotFAB = lazy(() =>
  import("@/components/wireframe/WireChatbotFAB").then((m) => ({ default: m.WireChatbotFAB }))
);

const Fallback = () => <div className="py-16" aria-hidden />;

const Index = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "CII Smart Manufacturing",
      url: "https://smartmfgindia.lovable.app/",
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Confederation of Indian Industry — Smart Manufacturing",
      url: "https://smartmfgindia.lovable.app/",
      logo: "https://www.smartmfgindia.com/img/Logo-final.png",
    },
  ];

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      onClick={(e) => {
        const target = e.target as HTMLElement;
        const link = target.closest("a, button");
        if (!link) return;
        const label = link.getAttribute("aria-label") || link.textContent?.trim().slice(0, 60) || "unknown";
        const href = (link as HTMLAnchorElement).href;
        trackEvent("cta_click", { label, href });
      }}
    >
      <SEO
        title="Home"
        description="CII Smart Manufacturing helps Indian MSMEs assess, learn and adopt Industry 4.0 — readiness assessments, case studies, training and partner ecosystem."
        jsonLd={jsonLd}
      />
      <WireHeader />
      <main>
        <WireHero />
        <WirePathwayCards />
        <Suspense fallback={<Fallback />}>
          <WireLeaderSpeak />
          <WireAssessmentTeaser />
          <WireSolutionsTeaser />
          <WireResources />
          <WireProgrammes />
          <WireAwardsBand />
          <WirePartners />
          <WireFinalCta />
        </Suspense>
      </main>
      <WireFooter />
      <Suspense fallback={null}>
        <WireChatbotFAB />
      </Suspense>
    </div>
  );
};

export default Index;
