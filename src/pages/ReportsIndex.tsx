import { useMemo, useState } from "react";
import { WireHeader } from "@/components/wireframe/WireHeader";
import { WireFooter } from "@/components/wireframe/WireFooter";
import { WireChatbotFAB } from "@/components/wireframe/WireChatbotFAB";
import { SEO } from "@/components/SEO";
import { ReportsHero } from "@/components/reports/ReportsHero";
import { ReportsDiscoveryBar, emptyFilters, type ReportFilters } from "@/components/reports/ReportsDiscoveryBar";
import { FeaturedCollections } from "@/components/reports/FeaturedCollections";
import { ReportsGrid } from "@/components/reports/ReportsGrid";
import { PersonalizedShelf } from "@/components/reports/PersonalizedShelf";
import { ReportsFinalCta } from "@/components/reports/ReportsFinalCta";
import { DownloadModal } from "@/components/reports/DownloadModal";
import { reports, type Report, type QuickPickId } from "@/data/reports";
import { useMockAuth } from "@/hooks/useMockAuth";
import { toast } from "@/hooks/use-toast";

const quickPickFilter = (r: Report, pick: QuickPickId | null) => {
  switch (pick) {
    case "latest":
      return r.year >= 2025;
    case "downloaded":
      return r.gated === false; // mock
    case "msme":
      return r.domain === "MSME";
    case "sustainability":
      return r.domain === "Sustainability";
    case "smart":
      return r.domain === "Smart Manufacturing";
    case "export":
      return /export/i.test(r.title) || /Trade/i.test(r.technology);
    default:
      return true;
  }
};

const ReportsIndex = () => {
  const user = useMockAuth();
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<ReportFilters>(emptyFilters);
  const [quickPick, setQuickPick] = useState<QuickPickId | null>(null);
  const [modalReport, setModalReport] = useState<Report | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return reports.filter((r) => {
      if (q) {
        const hay = `${r.title} ${r.summary} ${r.tags.join(" ")} ${r.industry} ${r.domain} ${r.technology}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      if (filters.industry !== "all" && r.industry !== filters.industry) return false;
      if (filters.domain !== "all" && r.domain !== filters.domain) return false;
      if (filters.technology !== "all" && r.technology !== filters.technology) return false;
      if (filters.state !== "all" && r.state !== filters.state) return false;
      if (filters.type !== "all" && r.type !== filters.type) return false;
      if (filters.year !== "all" && String(r.year) !== filters.year) return false;
      if (!quickPickFilter(r, quickPick)) return false;
      return true;
    });
  }, [query, filters, quickPick]);

  const handleDownload = (r: Report) => {
    if (r.gated && !user) {
      setModalReport(r);
      return;
    }
    toast({ title: "Download started", description: r.title });
  };

  const clearAll = () => {
    setQuery("");
    setFilters(emptyFilters);
    setQuickPick(null);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Insights & Reports — CII Smart Manufacturing",
    description:
      "Industry intelligence, research and transformation insights to accelerate Industry 4.0 adoption in India.",
    url: "https://smartmfgindia-demo4.bluelup.in/reports",
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Insights & Reports — Industry 4.0 Intelligence Hub"
        description="Explore curated research, playbooks and transformation insights to accelerate Industry 4.0 adoption across Indian manufacturing."
        jsonLd={jsonLd}
      />
      <WireHeader />
      <main>
        <ReportsHero />
        <ReportsDiscoveryBar
          query={query}
          onQuery={setQuery}
          filters={filters}
          onFilters={setFilters}
          quickPick={quickPick}
          onQuickPick={setQuickPick}
          onClear={clearAll}
          resultCount={filtered.length}
        />
        {user && <PersonalizedShelf user={user} />}
        <FeaturedCollections />
        <ReportsGrid reports={filtered} onDownload={handleDownload} onClear={clearAll} />
        <ReportsFinalCta />
      </main>
      <WireFooter />
      <WireChatbotFAB />
      <DownloadModal
        open={modalReport !== null}
        onOpenChange={(v) => !v && setModalReport(null)}
        report={modalReport}
      />
    </div>
  );
};

export default ReportsIndex;
