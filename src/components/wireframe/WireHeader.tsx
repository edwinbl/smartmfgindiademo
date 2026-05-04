import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

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
        <a href="#" className="flex items-center gap-3 shrink-0">
          <div className="relative h-10 w-10 rounded-sm bg-navy-800 grid place-items-center text-white font-display font-bold text-sm">
            CII
            <span className="absolute -right-1 -bottom-1 h-2 w-2 rounded-full bg-cii-orange" />
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="font-display font-bold text-[13px] text-navy-800 tracking-tight">CII Smart Manufacturing</div>
            <div className="text-[10px] uppercase tracking-[0.14em] text-[hsl(var(--neutral-500))] font-semibold">National Industry 4.0 Gateway</div>
          </div>
        </a>

        {/* Nav */}
        <nav className="hidden xl:flex items-center gap-7 mx-auto" aria-label="Primary">
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
        <div className="hidden xl:flex items-center gap-3 shrink-0">
          <a href="#assessment" className="btn-primary !h-10 !px-4 !text-[13px]">
            Start Assessment <ArrowRight className="!h-3.5 !w-3.5" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="xl:hidden ml-auto grid h-10 w-10 place-items-center border border-[hsl(var(--neutral-200))] rounded-sm text-navy-800"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="xl:hidden border-t border-[hsl(var(--neutral-150))] bg-white">
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
