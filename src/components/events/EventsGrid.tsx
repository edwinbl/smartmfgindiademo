import { EventCard } from "./EventCard";
import { EventsEmptyState } from "./EventsEmptyState";
import type { EventItem } from "@/data/events";

interface Props {
  events: EventItem[];
  onRegister: (e: EventItem) => void;
  onClear: () => void;
}

export const EventsGrid = ({ events, onRegister, onClear }: Props) => {
  if (events.length === 0) {
    return (
      <section className="py-12 md:py-16">
        <div className="container-cii">
          <EventsEmptyState onClear={onClear} />
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-16">
      <div className="container-cii">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <div className="section-eyebrow mb-2">Upcoming Events</div>
            <h2 className="font-display font-bold text-[26px] md:text-[32px] text-[hsl(var(--navy-900))] tracking-tight">
              Discover the ecosystem in motion
            </h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <EventCard key={e.slug} event={e} onRegister={onRegister} />
          ))}
        </div>
      </div>
    </section>
  );
};
