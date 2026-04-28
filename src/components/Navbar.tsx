import { useEffect, useState } from "react";
import { Menu, X, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Solutions", href: "#modules" },
  { label: "How it works", href: "#how" },
  { label: "Insights", href: "#insights" },
  { label: "Leaders", href: "#leaders" },
  { label: "Ecosystem", href: "#partners" },
  { label: "Events", href: "#events" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-smooth ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container flex h-16 items-center justify-between" aria-label="Primary">
        <a href="#" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
            <Cpu className="h-5 w-5" />
          </span>
          <span>Industry<span className="text-gradient">4.0</span></span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm">Sign in</Button>
          <Button variant="hero" size="sm" className="rounded-full">Get Started</Button>
        </div>

        <button
          className="md:hidden grid h-10 w-10 place-items-center rounded-lg border border-border bg-background"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in">
          <ul className="container py-4 space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium hover:bg-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="flex gap-2 pt-2">
              <Button variant="outline" className="flex-1">Sign in</Button>
              <Button variant="hero" className="flex-1">Get Started</Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
