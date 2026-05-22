import { WireHeader } from "@/components/wireframe/WireHeader";
import { WireFooter } from "@/components/wireframe/WireFooter";
import { WireChatbotFAB } from "@/components/wireframe/WireChatbotFAB";
import { WirePartners } from "@/components/wireframe/WirePartners";
import { SEO } from "@/components/SEO";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutChallenge } from "@/components/about/AboutChallenge";
import { AboutEcosystem } from "@/components/about/AboutEcosystem";
import { AboutJourney } from "@/components/about/AboutJourney";
import { AboutCapabilities } from "@/components/about/AboutCapabilities";
import { AboutMetrics } from "@/components/about/AboutMetrics";
import { AboutVision } from "@/components/about/AboutVision";
import { AboutHowItWorks } from "@/components/about/AboutHowItWorks";
import { AboutFinalCta } from "@/components/about/AboutFinalCta";
import { AboutProgress } from "@/components/about/AboutProgress";

const About = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About CII Smart Manufacturing",
    description:
      "CII Smart Manufacturing is a national, industry-led platform helping Indian manufacturers assess, adopt and scale Industry 4.0 transformation.",
    url: "https://smartmfgindia-demo4.bluelup.in/about",
  };

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <SEO
        title="About — India's Industry 4.0 Movement"
        description="Discover how CII Smart Manufacturing accelerates India's Industry 4.0 transformation through ecosystem collaboration, guided journeys and proven solutions."
        jsonLd={jsonLd}
      />
      <WireHeader />
      <AboutProgress />
      <main>
        <AboutHero />
        <AboutChallenge />
        <AboutEcosystem />
        <AboutJourney />
        <AboutCapabilities />
        <AboutMetrics />
        <WirePartners />
        <AboutVision />
        <AboutHowItWorks />
        <AboutFinalCta />
      </main>
      <WireFooter />
      <WireChatbotFAB />
    </div>
  );
};

export default About;
