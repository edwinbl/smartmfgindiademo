import { useState } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import logoSrc from "@/assets/cii-smart-mfg-logo.png";

type NavChild = { label: string; href: string };
type NavLink = { label: string; href: string; children?: NavChild[] };

const navLinks: NavLink[] = [
  { label: "Home", href: "#" },
  { label: "About", href: "https://www.smartmfgindia.com/Home.aspx#SmartAbout" },
  { label: "Readiness Assessment", href: "https://www.smartmfgindia.com/Assesment.aspx" },
  {
    label: "Solutions",
    href: "#solutions",
    children: [
      { label: "Case Studies", href: "https://www.smartmfgindia.com/CaseStudy.aspx" },
      { label: "Reports & Publications", href: "https://www.smartmfgindia.com/KnowledgeCenterList.aspx" },
      { label: "E-Directory", href: "https://www.smartmfgindia.com/e-Directory.aspx" },
    ],
  },
  { label: "Programmes & Training", href: "#programmes" },
  {
    label: "Events",
    href: "#events",
    children: [
      { label: "Upcoming Events", href: "https://www.smartmfgindia.com/UpcommingEvent.aspx" },
      { label: "Summit", href: "https://www.smartmfgindia.com/Event24.aspx" },
      { label: "Roundtable", href: "https://www.smartmfgindia.com/Roundtable.aspx" },
      { label: "Workshop", href: "https://www.smartmfgindia.com/WorkShop.aspx" },
    ],
  },
  { label: "Contact", href: "https://www.smartmfgindia.com/Assesment.aspx#SmartContactus" },
];

export const WireHeader = () => {
  const [open, setOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [active] = useState("Home");

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[hsl(var(--neutral-150))]">
      <div className="container-cii flex h-[72px] items-center gap-6">
        {/* Logo */}
        <a href="#" className="flex items-center shrink-0" aria-label="CII Smart Manufacturing Platform — Home">
          <img
            src={logoSrc}
            alt="CII Smart Manufacturing Platform — An Industry-led initiative on Industry 4.0 and beyond"
            className="h-11 md:h-12 w-auto"
          />
        </a>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-7 mx-auto" aria-label="Primary">
          {navLinks.map((l) => {
            const isActive = l.label === active;
            const baseCls = `font-display text-[13px] font-semibold tracking-wide whitespace-nowrap transition-colors ${
              isActive ? "text-cii-red" : "text-navy-800 hover:text-cii-red"
            }`;

            if (l.children) {
              return (
                <div key={l.label} className="relative group">
                  <button type="button" className={`${baseCls} inline-flex items-center gap-1`} aria-haspopup="true">
                    {l.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="absolute left-0 top-full pt-3 min-w-[240px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity z-50">
                    <ul className="bg-white border border-[hsl(var(--neutral-150))] rounded-md shadow-lg py-2">
                      {l.children.map((c) => (
                        <li key={c.label}>
                          <a
                            href={c.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2.5 text-[13px] font-medium font-display text-navy-800 hover:bg-[hsl(var(--neutral-50))] hover:text-cii-red transition-colors"
                          >
                            {c.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            }

            return (
              <a key={l.label} href={l.href} className={baseCls}>
                {l.label}
              </a>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a href="https://www.smartmfgindia.com/Assesment.aspx" className="btn-primary !h-10 !px-4 !text-[13px]">
            Start Assessment <ArrowRight className="!h-3.5 !w-3.5" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden ml-auto grid h-10 w-10 place-items-center border border-[hsl(var(--neutral-200))] rounded-sm text-navy-800"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[hsl(var(--neutral-150))] bg-white">
          <ul className="container-cii py-3">
            {navLinks.map((l) => (
              <li key={l.label} className="border-b border-[hsl(var(--neutral-150))] last:border-b-0">
                {l.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setMobileSubmenu(mobileSubmenu === l.label ? null : l.label)}
                      className="w-full flex items-center justify-between px-1 py-3 text-sm font-semibold font-display text-navy-800"
                      aria-expanded={mobileSubmenu === l.label}
                    >
                      {l.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${mobileSubmenu === l.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileSubmenu === l.label && (
                      <ul className="pb-2 pl-3">
                        {l.children.map((c) => (
                          <li key={c.label}>
                            <a
                              href={c.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setOpen(false)}
                              className="block px-1 py-2 text-sm font-medium text-[hsl(var(--neutral-700))] hover:text-cii-red"
                            >
                              {c.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-1 py-3 text-sm font-semibold font-display text-navy-800"
                  >
                    {l.label}
                  </a>
                )}
              </li>
            ))}
            <li className="pt-4">
              <a
                href="https://www.smartmfgindia.com/Assesment.aspx"
                className="btn-primary w-full"
                onClick={() => setOpen(false)}
              >
                Start Assessment <ArrowRight className="!h-3.5 !w-3.5" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
