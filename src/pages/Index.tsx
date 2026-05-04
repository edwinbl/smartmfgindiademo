import { WireHeader } from "@/components/wireframe/WireHeader";
import { WireHero } from "@/components/wireframe/WireHero";
import { WirePathwayCards } from "@/components/wireframe/WirePathwayCards";
import { WireAssessmentTeaser } from "@/components/wireframe/WireAssessmentTeaser";
import { WireSolutionsTeaser } from "@/components/wireframe/WireSolutionsTeaser";
import { WireProgrammes } from "@/components/wireframe/WireProgrammes";
import { WireResources } from "@/components/wireframe/WireResources";
import { WireEcosystem } from "@/components/wireframe/WireEcosystem";
import { WireChatbotBlock } from "@/components/wireframe/WireChatbotBlock";
import { WireFinalCta } from "@/components/wireframe/WireFinalCta";
import { WireFooter } from "@/components/wireframe/WireFooter";
import { WireChatbotFAB } from "@/components/wireframe/WireChatbotFAB";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <WireHeader />
      <main>
        <WireHero />
        <WirePathwayCards />
        <WireAssessmentTeaser />
        <WireSolutionsTeaser />
        <WireProgrammes />
        <WireResources />
        <WireEcosystem />
        <WireChatbotBlock />
        <WireFinalCta />
      </main>
      <WireFooter />
      <WireChatbotFAB />
    </div>
  );
};

export default Index;
