import { Cpu, Twitter, Linkedin, Youtube, Github } from "lucide-react";

const cols = [
  { title: "Platform", links: ["Assess", "Learn", "Adopt", "Collaborate", "Pricing"] },
  { title: "Resources", links: ["Insights", "Case studies", "Reports", "Help center", "API docs"] },
  { title: "Ecosystem", links: ["MSMEs", "Enterprises", "Providers", "Academia", "Government"] },
  { title: "Company", links: ["About", "Careers", "Press", "Contact", "Privacy"] },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 font-display font-bold text-lg">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                <Cpu className="h-5 w-5" />
              </span>
              <span>Industry<span className="text-gradient">4.0</span></span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              The unified Industry 4.0 platform connecting MSMEs, enterprises, providers, academia and government.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[Twitter, Linkedin, Youtube, Github].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-brand-1/50 transition-smooth"
                >
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h3 className="font-display font-bold text-sm">{c.title}</h3>
              <ul className="mt-4 space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between text-xs text-muted-foreground">
          <p>© 2026 Industry 4.0 Platform. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-smooth">Terms</a>
            <a href="#" className="hover:text-foreground transition-smooth">Privacy</a>
            <a href="#" className="hover:text-foreground transition-smooth">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
