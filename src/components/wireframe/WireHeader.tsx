import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Readiness Assessment", href: "#assessment" },
  { label: "Solutions", href: "#solutions" },
  { label: "Programmes & Training", href: "#programmes" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

export const WireHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="h-9 w-9 border border-foreground rounded-sm grid place-items-center text-[10px] font-mono text-muted-foreground">
            LOGO
          </div>
          <span className="font-semibold text-sm md:text-base">CII Smart Manufacturing</span>
        </a>

        <nav className="hidden lg:flex items-center gap-6" aria-label="Primary">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground hover:text-muted-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className="lg:hidden grid h-10 w-10 place-items-center border border-border rounded-sm"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <ul className="container py-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-2 py-3 text-sm border-b border-border last:border-b-0"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
