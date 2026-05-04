const cols = [
  { title: "About", links: ["About CII", "Smart Manufacturing", "Leadership", "Press"] },
  { title: "Quick links", links: ["Readiness Assessment", "Solutions", "Programmes", "Events"] },
  { title: "Resources", links: ["Case studies", "Reports", "Knowledge base", "FAQs"] },
  { title: "Contact", links: ["Contact CII", "Support", "Partnerships", "Careers"] },
];

export const WireFooter = () => {
  return (
    <footer className="border-t border-border bg-secondary/40 mt-8">
      <div className="container py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 border border-foreground rounded-sm grid place-items-center text-[10px] font-mono text-muted-foreground">
                LOGO
              </div>
              <span className="font-semibold text-sm">CII Smart Manufacturing</span>
            </div>
            <p className="mt-3 text-xs text-muted-foreground max-w-[220px]">
              India's Industry 4.0 adoption gateway for MSMEs.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-foreground mb-3">{c.title}</h4>
              <ul className="space-y-2">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Confederation of Indian Industry — Wireframe</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
