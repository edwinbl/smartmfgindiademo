import { WireSection } from "./WireSection";
import dilipAsset from "@/assets/dilip-sawhney.webp.asset.json";
import rahulAsset from "@/assets/rahul-garg.png.asset.json";

type Leader = {
  name: string;
  designation: string;
  photo: string;
};

const leaders: Leader[] = [
  {
    name: "Mr. Rahul Garg",
    designation:
      "Chairman, CII Special Taskforce on Advanced Manufacturing and Founder & CEO, Moglix",
    photo: rahulAsset.url,
  },
  {
    name: "Mr. Dilip Sawhney",
    designation:
      "Immediate Past Chairman, CII National Committee on Smart Manufacturing and Managing Director, Rockwell Automation India Pvt Ltd",
    photo: dilipAsset.url,
  },
];

export const WireLeaderSpeak = () => {
  return (
    <WireSection id="leader-speak" alt>
      <div className="max-w-3xl">
        <div className="section-eyebrow mb-3">Leadership</div>
        <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-tight tracking-tight text-navy-800">
          CII Smart Manufacturing leadership
        </h2>
        <p className="mt-4 text-base md:text-lg text-[hsl(var(--neutral-700))]">
          Meet the senior leaders steering CII’s smart manufacturing agenda for Indian industry.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {leaders.map((l) => (
          <article
            key={l.name}
            className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left"
          >
            <div className="relative shrink-0">
              <div className="relative h-40 w-40 sm:h-44 sm:w-44 rounded-full overflow-hidden shadow-xl border-4 border-white ring-4 ring-cii-orange/20">
                <img
                  src={l.photo}
                  alt={l.name}
                  width={352}
                  height={352}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="font-display font-bold text-navy-800 text-base">
                {l.name}
              </div>
              <div className="text-sm text-[hsl(var(--neutral-600))] mt-1 leading-relaxed max-w-xs">
                {l.designation}
              </div>
            </div>
          </article>
        ))}
      </div>
    </WireSection>
  );
};
