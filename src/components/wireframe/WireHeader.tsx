import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import logoSrc from "@/assets/cii-smart-mfg-logo.png";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Readiness Assessment", href: "#assessment" },
  { label: "Solutions", href: "#solutions" },
  { label: "Programmes & Training", href: "#programmes" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

export const WireHeader = () => {
  const [open, setOpen] = useState(false);
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
            return (
              <a
                key={l.label}
                href={l.href}
                className={`font-display text-[13px] font-semibold tracking-wide whitespace-nowrap transition-colors ${
                  isActive ? "text-cii-red" : "text-navy-800 hover:text-cii-red"
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a href="#assessment" className="btn-primary !h-10 !px-4 !text-[13px]">
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
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-1 py-3 text-sm font-semibold font-display text-navy-800 border-b border-[hsl(var(--neutral-150))] last:border-b-0"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a href="#assessment" className="btn-primary w-full" onClick={() => setOpen(false)}>
                Start Assessment <ArrowRight className="!h-3.5 !w-3.5" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
