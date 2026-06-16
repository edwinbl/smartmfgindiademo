import { Link } from "react-router-dom";
import { WireSection } from "./WireSection";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { programmes } from "@/data/programmes";

const now = Date.now();
const upcoming = programmes
  .filter((p) => (p.status === "open" || p.status === "soon") && new Date(p.isoDate).getTime() >= now)
  .sort((a, b) => new Date(a.isoDate).getTime() - new Date(b.isoDate).getTime())
  .slice(0, 3);

export const WireProgrammes = () => {
  return (
    <WireSection id="programmes" alt>
      <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
        <div>
          <div className="section-eyebrow mb-3">Programmes & Training</div>
          <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-tight tracking-tight text-navy-800">
            Upcoming CII programmes
          </h2>
          <p className="mt-4 text-base text-[hsl(var(--neutral-700))] max-w-xl">
            Workshops, masterclasses and structured adoption programmes — designed for MSMEs and mid-market
            manufacturers.
          </p>
        </div>
        <Link to="/programmes" className="link-arrow">
          View all programmes <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {upcoming.map((p) => (
          <article key={p.slug} className="cii-card overflow-hidden flex flex-col">
            <div
              className="h-32 relative"
              style={{
                background: "linear-gradient(135deg, hsl(var(--navy-800)) 0%, hsl(var(--navy-600)) 100%)",
              }}
            >
              <div className="absolute inset-0 blueprint-grid opacity-40" />
              <span className="absolute top-4 left-4 cii-chip cii-chip-orange">{p.type}</span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-display font-bold text-navy-800 text-[17px] leading-snug line-clamp-3">
                {p.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-[hsl(var(--neutral-700))]">
                <li className="flex items-start gap-2">
                  <Calendar className="h-4 w-4 text-navy-600 mt-0.5 shrink-0" /> <span>{p.startDate}</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-navy-600 mt-0.5 shrink-0" /> <span>{p.format}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="h-4 w-4 text-navy-600 mt-0.5 shrink-0" /> <span>{p.audience[0]?.persona ?? p.segment}</span>
                </li>
              </ul>
              <Link to={`/programmes/${p.slug}`} className="link-arrow mt-5">
                View details <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </WireSection>
  );
};
