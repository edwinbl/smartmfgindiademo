import { WireSection } from "@/components/wireframe/WireSection";
import { LifeBuoy, CalendarCheck, Mail, MessageSquare, ArrowRight } from "lucide-react";

const items = [
  {
    icon: LifeBuoy,
    title: "Contact Support",
    body: "Questions about the assessment process, eligibility or onboarding.",
    cta: "Contact support",
    href: "/contact",
  },
  {
    icon: CalendarCheck,
    title: "Request Consultation",
    body: "Schedule a working session with a CII Smart Manufacturing advisor.",
    cta: "Request consultation",
    href: "/contact",
  },
  {
    icon: Mail,
    title: "Email Assistance",
    body: "Prefer email? Reach out and a CII team member will respond within 1 business day.",
    cta: "Email the team",
    href: "/contact",
  },
  {
    icon: MessageSquare,
    title: "Talk to an Expert",
    body: "Speak with a domain expert about your sector, plant or transformation priorities.",
    cta: "Book a call",
    href: "/contact",
  },
];

export const AssessmentSupport = () => (
  <WireSection
    id="support"
    eyebrow="Support"
    title="We are here to help every step of the way"
  >
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map(({ icon: Icon, title, body, cta, href }) => (
        <div key={title} className="cii-card p-6 flex flex-col">
          <div
            className="h-10 w-10 rounded-md grid place-items-center mb-4"
            style={{ background: "hsl(var(--orange-100))", color: "hsl(var(--orange-600))" }}
          >
            <Icon className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <h3 className="font-display font-bold text-base text-navy-800 mb-2">{title}</h3>
          <p className="text-sm text-[hsl(var(--neutral-700))] flex-1">{body}</p>
          <a href={href} className="link-arrow mt-4">
            {cta} <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      ))}
    </div>
  </WireSection>
);
