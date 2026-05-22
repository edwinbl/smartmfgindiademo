import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { WireHeader } from "@/components/wireframe/WireHeader";
import { WireFooter } from "@/components/wireframe/WireFooter";
import { WireChatbotFAB } from "@/components/wireframe/WireChatbotFAB";
import { SEO } from "@/components/SEO";
import { ProgrammeDetailHero } from "@/components/programmes/detail/ProgrammeDetailHero";
import { StickyActionPanel } from "@/components/programmes/detail/StickyActionPanel";
import { ProgrammeOverview } from "@/components/programmes/detail/ProgrammeOverview";
import { LearningOutcomes } from "@/components/programmes/detail/LearningOutcomes";
import { WhoShouldAttend } from "@/components/programmes/detail/WhoShouldAttend";
import { ProgrammeAgenda } from "@/components/programmes/detail/ProgrammeAgenda";
import { ExpertsFaculty } from "@/components/programmes/detail/ExpertsFaculty";
import { CertificationBlock } from "@/components/programmes/detail/CertificationBlock";
import { ProgrammeObjective } from "@/components/programmes/detail/ProgrammeObjective";
import { KeyHighlights } from "@/components/programmes/detail/KeyHighlights";
import { FocusedDiscussions } from "@/components/programmes/detail/FocusedDiscussions";
import { FeeTable } from "@/components/programmes/detail/FeeTable";
import { ProgrammeContacts } from "@/components/programmes/detail/ProgrammeContacts";
import { RelatedProgrammes } from "@/components/programmes/detail/RelatedProgrammes";
import { MobileStickyRegister } from "@/components/programmes/detail/MobileStickyRegister";
import { ProgrammesFinalCta } from "@/components/programmes/ProgrammesFinalCta";
import { ProgrammeRegisterModal } from "@/components/programmes/ProgrammeRegisterModal";
import { getProgrammeBySlug, getRelatedProgrammes } from "@/data/programmes";

const ProgrammeDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const programme = slug ? getProgrammeBySlug(slug) : undefined;
  const [modalOpen, setModalOpen] = useState(false);

  if (!programme) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <WireHeader />
        <main className="flex-1 grid place-items-center py-24">
          <div className="text-center">
            <h1 className="font-display font-bold text-2xl text-[hsl(var(--navy-900))]">Programme not found</h1>
            <p className="mt-2 text-sm text-[hsl(var(--neutral-700))]">
              The programme you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/programmes" className="btn-primary mt-6">Back to all programmes</Link>
          </div>
        </main>
        <WireFooter />
      </div>
    );
  }

  const isShort = programme.type === "Webinar" || programme.type === "Industry Session";
  const related = getRelatedProgrammes(programme.slug);
  const onRegister = () => setModalOpen(true);

  return (
    <div className="min-h-screen bg-background text-foreground pb-20 lg:pb-0">
      <SEO
        title={`${programme.title} — Programmes`}
        description={programme.summary.slice(0, 155)}
      />
      <WireHeader />
      <main>
        <ProgrammeDetailHero programme={programme} onRegister={onRegister} />

        <section className="py-12 md:py-16">
          <div className="container-cii grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 space-y-12">
              <ProgrammeOverview programme={programme} />
              <ProgrammeObjective programme={programme} />
              <KeyHighlights programme={programme} />
              <LearningOutcomes programme={programme} />
              <FocusedDiscussions programme={programme} />
              <WhoShouldAttend programme={programme} />
              <ProgrammeAgenda programme={programme} />
              <ExpertsFaculty programme={programme} />
              {programme.certification && !isShort && <CertificationBlock programme={programme} />}
              <FeeTable programme={programme} />
              <ProgrammeContacts programme={programme} />

            </div>
            <div className="lg:col-span-4">
              <StickyActionPanel programme={programme} onRegister={onRegister} />
            </div>
          </div>
        </section>

        <RelatedProgrammes programmes={related} />
        <ProgrammesFinalCta />
      </main>
      <WireFooter />
      <WireChatbotFAB />
      <MobileStickyRegister programme={programme} onRegister={onRegister} />
      <ProgrammeRegisterModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        programme={programme}
      />
    </div>
  );
};

export default ProgrammeDetail;
