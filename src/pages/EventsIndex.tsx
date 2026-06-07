import { useMemo, useState } from "react";
import { WireHeader } from "@/components/wireframe/WireHeader";
import { WireFooter } from "@/components/wireframe/WireFooter";
import { WireChatbotFAB } from "@/components/wireframe/WireChatbotFAB";
import { SEO } from "@/components/SEO";
import { EventsFlagshipHero } from "@/components/events/EventsFlagshipHero";
import { EventsTypeTabs } from "@/components/events/EventsTypeTabs";
import {
  EventsDiscoveryBar,
  emptyEventFilters,
  type EventFilters,
} from "@/components/events/EventsDiscoveryBar";
import { EventsGrid } from "@/components/events/EventsGrid";
import { PersonalizedEventsShelf } from "@/components/events/PersonalizedEventsShelf";
import { EventsImpactStats } from "@/components/events/EventsImpactStats";
import { PastEventsArchive } from "@/components/events/PastEventsArchive";
import { EventsFinalCta } from "@/components/events/EventsFinalCta";
import { RegisterEventModal } from "@/components/events/RegisterEventModal";
import {
  events,
  getFlagship,
  getUpcoming,
  eventTypes,
  type EventItem,
  type QuickPickId,
} from "@/data/events";
import { useMockAuth } from "@/hooks/useMockAuth";
import { toast } from "@/hooks/use-toast";
import { eventsStorage } from "@/lib/eventsStorage";

const quickPickFilter = (e: EventItem, pick: QuickPickId | null): boolean => {
  if (!pick) return true;
  const now = new Date();
  const dt = new Date(e.isoDate);
  switch (pick) {
    case "this-month":
      return dt.getMonth() === now.getMonth() && dt.getFullYear() === now.getFullYear();
    case "msme":
      return e.segment === "MSME" || e.industry === "MSME";
    case "sustainability":
      return /sustain/i.test(e.technology) || /energy|net.?zero|sustain/i.test(e.title);
    case "ai":
      return /AI|Automation|Analytics/i.test(e.technology);
    case "networking":
      return e.type === "Roundtable" || e.type === "Summit" || e.type === "Conference";
    default:
      return true;
  }
};

const EventsIndex = () => {
  const user = useMockAuth();
  const [type, setType] = useState<string>("All");
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<EventFilters>(emptyEventFilters);
  const [quickPick, setQuickPick] = useState<QuickPickId | null>(null);
  const [modalEvent, setModalEvent] = useState<EventItem | null>(null);

  const upcoming = useMemo(() => getUpcoming(), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return upcoming.filter((e) => {
      if (type !== "All" && e.type !== type) return false;
      if (q) {
        const hay = `${e.title} ${e.summary} ${e.tagline} ${e.industry} ${e.technology} ${e.speakers.map((s) => s.name).join(" ")}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      if (filters.industry !== "all" && e.industry !== filters.industry) return false;
      if (filters.technology !== "all" && e.technology !== filters.technology) return false;
      if (filters.mode !== "all" && e.mode !== filters.mode) return false;
      if (filters.level !== "all" && e.level !== filters.level) return false;
      if (filters.segment !== "all" && e.segment !== filters.segment) return false;
      if (!quickPickFilter(e, quickPick)) return false;
      return true;
    });
  }, [type, query, filters, quickPick, upcoming]);

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: upcoming.length };
    eventTypes.slice(1).forEach((t) => {
      c[t] = upcoming.filter((e) => e.type === t).length;
    });
    return c;
  }, [upcoming]);

  const handleRegister = (e: EventItem) => {
    if (!user) {
      setModalEvent(e);
      return;
    }
    eventsStorage.addRegistered(e.slug);
    toast({ title: "You're registered", description: e.title });
  };

  const clearAll = () => {
    setQuery("");
    setFilters(emptyEventFilters);
    setQuickPick(null);
    setType("All");
  };

  const flagship = getFlagship();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "CII Smart Manufacturing — Events & Ecosystem Engagement",
    itemListElement: events.slice(0, 8).map((e, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://smartmfgindia-demo4.bluelup.in/events/${e.slug}`,
      name: e.title,
    })),
  };

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <SEO
        title="Events & Ecosystem — Summits, Webinars & Programmes"
        description="Discover India's premier Industry 4.0 summits, conferences, roundtables, webinars and programmes — curated by CII Smart Manufacturing."
        jsonLd={jsonLd}
      />
      <WireHeader />
      <main>
        <EventsFlagshipHero event={flagship} />
        <EventsTypeTabs active={type} onChange={setType} counts={counts} />
        <EventsDiscoveryBar
          query={query}
          onQuery={setQuery}
          filters={filters}
          onFilters={setFilters}
          quickPick={quickPick}
          onQuickPick={setQuickPick}
          onClear={clearAll}
          resultCount={filtered.length}
        />
        {user && <PersonalizedEventsShelf user={user} onRegister={handleRegister} />}
        <EventsGrid events={filtered} onRegister={handleRegister} onClear={clearAll} />
        <EventsImpactStats />
        <PastEventsArchive />
        <EventsFinalCta />
      </main>
      <WireFooter />
      <WireChatbotFAB />
      <RegisterEventModal
        open={modalEvent !== null}
        onOpenChange={(v) => !v && setModalEvent(null)}
        event={modalEvent}
      />
    </div>
  );
};

export default EventsIndex;
