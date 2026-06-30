import { WireSection } from "./WireSection";
import { Quote } from "lucide-react";
import dilipAsset from "@/assets/dilip-sawhney.webp.asset.json";
import rahulAsset from "@/assets/rahul-garg.png.asset.json";

type Leader = {
  name: string;
  designation: string;
  quote: string;
  photo: string;
};

const leaders: Leader[] = [
  {
    name: "Mr. Rahul Garg",
    designation:
      "Chairman, CII Special Taskforce on Advanced Manufacturing and Founder & CEO, Moglix",
    quote:
      "Advanced manufacturing is India's defining opportunity — to build globally competitive, digitally enabled and resilient supply chains that power the next decade of growth.",
    photo: rahulAsset.url,
  },
  {
    name: "Mr. Dilip Sawhney",
    designation:
      "Immediate Past Chairman, CII National Committee on Smart Manufacturing and Managing Director, Rockwell Automation India Pvt Ltd",
    quote:
      "Industry 4.0 adoption is no longer optional for India's MSMEs — it is the foundation for global competitiveness, quality leadership and sustainable growth.",
    photo: dilipAsset.url,
  },
];

export const WireLeaderSpeak = () => {
  return (
    <WireSection id="leader-speak" alt>
      <div className="max-w-3xl">
        <div className="section-eyebrow mb-3">Leader Speak</div>
        <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-tight tracking-tight text-navy-800">
          Messages from CII leadership
        </h2>
        <p className="mt-4 text-base md:text-lg text-[hsl(var(--neutral-700))]">
          Hear from CII leadership on the role of smart manufacturing in
          strengthening India's manufacturing competitiveness.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {leaders.map((l) => (
          <article
            key={l.name}
            className="grid gap-6 sm:grid-cols-[auto_1fr] items-start"
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
            <div className="p-5 rounded-md border border-[hsl(var(--neutral-150))] bg-white relative">
              <Quote className="absolute -top-3 left-5 h-6 w-6 text-cii-orange bg-white px-1" />
              <p className="text-sm text-[hsl(var(--neutral-700))] leading-relaxed italic">
                "{l.quote}"
              </p>
              <div className="mt-4 pt-4 border-t border-[hsl(var(--neutral-150))]">
                <div className="font-display font-bold text-navy-800 text-sm">
                  {l.name}
                </div>
                <div className="text-xs text-[hsl(var(--neutral-500))] mt-0.5 leading-relaxed">
                  {l.designation}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </WireSection>
  );
};
