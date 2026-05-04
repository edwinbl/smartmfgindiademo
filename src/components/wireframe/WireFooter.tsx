const cols = [
  { title: "About", links: ["About CII", "Smart Manufacturing", "Leadership", "Press"] },
  { title: "Get started", links: ["Readiness Assessment", "Solutions", "Programmes", "Events"] },
  { title: "Resources", links: ["Case studies", "Reports", "Playbooks", "FAQs"] },
  { title: "Contact", links: ["Contact CII", "Support", "Partnerships", "Careers"] },
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
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-[11px] uppercase tracking-[0.14em] font-bold text-white mb-4">{c.title}</h4>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">{l}</a>
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
