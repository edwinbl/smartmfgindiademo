import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AudienceSelector } from "@/components/AudienceSelector";
import { Modules } from "@/components/Modules";
import { HowItWorks } from "@/components/HowItWorks";
import { Insights } from "@/components/Insights";
import { LeadersSpeak } from "@/components/LeadersSpeak";
import { Partners } from "@/components/Partners";
import { Events } from "@/components/Events";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <AudienceSelector />
        <Modules />
        <HowItWorks />
        <Insights />
        <LeadersSpeak />
        <Partners />
        <Events />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
