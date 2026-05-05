import { WireHeader } from "@/components/wireframe/WireHeader";
import { WireHero } from "@/components/wireframe/WireHero";
import { WirePathwayCards } from "@/components/wireframe/WirePathwayCards";
import { WireLeaderSpeak } from "@/components/wireframe/WireLeaderSpeak";
import { WireAssessmentTeaser } from "@/components/wireframe/WireAssessmentTeaser";
import { WireSolutionsTeaser } from "@/components/wireframe/WireSolutionsTeaser";
import { WireResources } from "@/components/wireframe/WireResources";
import { WireProgrammes } from "@/components/wireframe/WireProgrammes";
import { WireAwardsBand } from "@/components/wireframe/WireAwardsBand";

import { WirePartners } from "@/components/wireframe/WirePartners";
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
        <WireLeaderSpeak />
        <WireAssessmentTeaser />
        <WireSolutionsTeaser />
        <WireResources />
        <WireProgrammes />
        <WireAwardsBand />
        
        <WirePartners />
        <WireFinalCta />
      </main>
      <WireFooter />
      <WireChatbotFAB />
    </div>
  );
};

export default Index;
