import { Twitter, Linkedin, Facebook, Youtube } from "lucide-react";

const socials = [
  { label: "Twitter", href: "#", Icon: Twitter },
  { label: "LinkedIn", href: "#", Icon: Linkedin },
  { label: "Facebook", href: "#", Icon: Facebook },
  { label: "YouTube", href: "#", Icon: Youtube },
];

type FooterLink = { label: string; href: string };
const cols: { title: string; links: FooterLink[] }[] = [
  { title: "About", links: [
    { label: "About CII", href: "https://www.smartmfgindia.com/Assesment.aspx#SmartAbout" },
    { label: "Smart Manufacturing", href: "#" },
    { label: "Leadership", href: "#" },
    { label: "Press", href: "#" },
  ]},
  { title: "Get started", links: [
    { label: "Readiness Assessment", href: "https://www.smartmfgindia.com/Assesment.aspx" },
    { label: "Solutions", href: "#" },
    { label: "Programmes", href: "https://www.smartmfgindia.com/CapacityBuildings.aspx" },
    { label: "Events", href: "#" },
  ]},
  { title: "Resources", links: [
    { label: "Case studies", href: "#" },
    { label: "Reports", href: "#" },
    { label: "Playbooks", href: "#" },
    { label: "FAQs", href: "#" },
  ]},
  { title: "Contact", links: [
    { label: "Contact CII", href: "#" },
    { label: "Support", href: "#" },
    { label: "Partnerships", href: "#" },
    { label: "Careers", href: "#" },
  ]},
];

export const WireFooter = () => {
  return (
    <footer className="text-white" style={{ background: "hsl(var(--navy-900))" }}>
      <div className="h-1 tricolor-stripe w-full" style={{ background: "linear-gradient(to right, hsl(var(--saffron)) 0% 33%, #fff 33% 66%, hsl(var(--india-green)) 66% 100%)" }} />
      <div className="container-cii py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-sm bg-white text-navy-800 grid place-items-center font-display font-bold text-sm">CII</div>
              <div>
                <div className="font-display font-bold text-sm">Smart Manufacturing</div>
                <div className="text-[10px] uppercase tracking-[0.14em] text-white/60 font-semibold">National Industry 4.0 Gateway</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/70 max-w-[240px]">
              Helping Indian MSMEs assess, learn and adopt smart manufacturing — convened by the
              Confederation of Indian Industry.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-9 w-9 grid place-items-center rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white transition-colors"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-[11px] uppercase tracking-[0.14em] font-bold text-white mb-4">{c.title}</h4>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-sm text-white/70 hover:text-white transition-colors">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/60">
          <span>© {new Date().getFullYear()} Confederation of Indian Industry. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
