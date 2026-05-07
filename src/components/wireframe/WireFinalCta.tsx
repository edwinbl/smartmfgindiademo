import { useState } from "react";
import { WireSection } from "./WireSection";
import { ArrowRight, Mail, Phone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const contacts = [
  {
    name: "Mr Suvendu Mahapatra",
    org: "Confederation of Indian Industry",
    phone: "+91-9717100194",
    email: "suvendu.mahapatra@cii.in",
  },
  {
    name: "Ms Smriti Tiwary",
    org: "Confederation of Indian Industry",
    phone: "+91-9835660588",
    email: "smriti.tiwari@cii.in",
  },
];

export const WireFinalCta = () => {
  const [open, setOpen] = useState(false);

  return (
    <WireSection id="contact" alt>
      <div className="text-center max-w-3xl mx-auto">
        <div className="section-eyebrow mb-3">Get in touch</div>
        <h2 className="font-display font-bold text-[32px] md:text-[44px] leading-tight tracking-tight text-navy-800">
          Not sure where to begin?
        </h2>
        <p className="mt-5 text-base md:text-lg text-[hsl(var(--neutral-700))]">
          CII can help you find the right starting point for your smart manufacturing journey.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <button type="button" onClick={() => setOpen(true)} className="btn-primary">
            Contact CII <ArrowRight className="!h-4 !w-4" />
          </button>
          <a href="https://www.smartmfgindia.com/Assesment.aspx" className="btn-outline">
            <Mail className="!h-4 !w-4" /> Start with the assessment
          </a>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[520px]">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl text-navy-800">Contact Us</DialogTitle>
            <DialogDescription>
              Reach out to our team for any questions about your smart manufacturing journey.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-2 space-y-4">
            {contacts.map((c) => (
              <div
                key={c.email}
                className="rounded-md border border-[hsl(var(--neutral-150))] p-4 bg-[hsl(var(--neutral-50))]"
              >
                <p className="font-display font-semibold text-navy-800">{c.name}</p>
                <p className="text-sm text-[hsl(var(--neutral-700))] mt-0.5">{c.org}</p>
                <div className="mt-3 space-y-1.5 text-sm">
                  <a
                    href={`tel:${c.phone.replace(/[^+\d]/g, "")}`}
                    className="flex items-center gap-2 text-navy-800 hover:text-cii-red transition-colors"
                  >
                    <Phone className="h-4 w-4" /> {c.phone}
                  </a>
                  <a
                    href={`mailto:${c.email}`}
                    className="flex items-center gap-2 text-navy-800 hover:text-cii-red transition-colors break-all"
                  >
                    <Mail className="h-4 w-4 shrink-0" /> {c.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </WireSection>
  );
};
