import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Linkedin, Twitter, Facebook, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import logoSrc from "@/assets/cii-smart-mfg-logo.png";

type NavChild = { label: string; href: string };
type NavLink = { label: string; href: string; children?: NavChild[] };

const navLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Readiness Assessment", href: "https://www.smartmfgindia.com/Assesment.aspx" },
  {
    label: "Solutions",
    href: "#solutions",
    children: [
      { label: "Case Studies", href: "https://www.smartmfgindia.com/CaseStudy.aspx" },
      { label: "Reports & Publications", href: "/reports" },
      { label: "E-Directory", href: "https://www.smartmfgindia.com/e-Directory.aspx" },
    ],
  },
  {
    label: "Insights",
    href: "/reports",
    children: [
      { label: "All Reports", href: "/reports" },
      { label: "MSME Insights", href: "/reports?topic=msme" },
      { label: "Sustainability", href: "/reports?topic=sustainability" },
      { label: "Smart Manufacturing", href: "/reports?topic=smart" },
    ],
  },
  { label: "Programmes & Training", href: "https://www.smartmfgindia.com/CapacityBuildings.aspx" },
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
];

export const WireHeader = () => {
  const [open, setOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[hsl(var(--neutral-150))]">
      <div className="container-cii flex h-[72px] items-center gap-6">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0" aria-label="CII Smart Manufacturing Platform — Home">
          <img
            src={logoSrc}
            alt="CII Smart Manufacturing Platform — An Industry-led initiative on Industry 4.0 and beyond"
            width={240}
            height={48}
            decoding="async"
            fetchPriority="high"
            className="h-11 md:h-12 w-auto"
          />
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-7 mx-auto" aria-label="Primary">
          {navLinks.map((l) => {
            const baseCls = "font-display text-[13px] font-semibold tracking-wide whitespace-nowrap transition-colors text-navy-800 hover:text-cii-red";

            if (l.children) {
              return (
                <div key={l.label} className="relative group">
                  <button type="button" className={`${baseCls} inline-flex items-center gap-1`} aria-haspopup="true">
                    {l.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="absolute left-0 top-full pt-3 min-w-[240px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity z-50">
                    <ul className="bg-white border border-[hsl(var(--neutral-150))] rounded-md shadow-lg py-2">
                      {l.children.map((c) => {
                        const childInternal = c.href.startsWith("/") && !c.href.startsWith("//");
                        const childCls =
                          "block px-4 py-2.5 text-[13px] font-medium font-display text-navy-800 hover:bg-[hsl(var(--neutral-50))] hover:text-cii-red transition-colors";
                        return (
                          <li key={c.label}>
                            {childInternal ? (
                              <Link to={c.href} className={childCls}>
                                {c.label}
                              </Link>
                            ) : (
                              <a href={c.href} target="_blank" rel="noopener noreferrer" className={childCls}>
                                {c.label}
                              </a>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            }

            const isInternal = l.href.startsWith("/") && !l.href.startsWith("//");
            return isInternal ? (
              <Link key={l.label} to={l.href} className={baseCls}>
                {l.label}
              </Link>
            ) : (
              <a key={l.label} href={l.href} className={baseCls}>
                {l.label}
              </a>
            );
          })}
        </nav>

        {/* CII Logo — right */}
        <div className="flex items-center shrink-0 ml-auto md:ml-0">
          <img
            src="https://www.smartmfgindia.com/img/CII-Logo.png"
            alt="Confederation of Indian Industry"
            className="h-9 md:h-14 w-auto object-contain"
            loading="lazy"
            decoding="async"
          />
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
        <div className="md:hidden fixed inset-x-0 top-[72px] bottom-0 z-50 bg-white border-t border-[hsl(var(--neutral-150))] overflow-y-auto flex flex-col">
          <ul className="flex-1 w-full">
            {navLinks.map((l) => (
              <li key={l.label} className="border-b border-[hsl(var(--neutral-150))]">
                {l.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setMobileSubmenu(mobileSubmenu === l.label ? null : l.label)}
                      className="w-full flex items-center justify-between px-6 py-4 text-base font-semibold font-display text-navy-800"
                      aria-expanded={mobileSubmenu === l.label}
                    >
                      {l.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${mobileSubmenu === l.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileSubmenu === l.label && (
                      <ul className="pb-2 bg-[hsl(var(--neutral-50))]">
                        {l.children.map((c) => {
                          const childInternal = c.href.startsWith("/") && !c.href.startsWith("//");
                          const mobChildCls =
                            "block px-8 py-2.5 text-sm font-medium text-[hsl(var(--neutral-700))] hover:text-cii-red";
                          return (
                            <li key={c.label}>
                              {childInternal ? (
                                <Link to={c.href} onClick={() => setOpen(false)} className={mobChildCls}>
                                  {c.label}
                                </Link>
                              ) : (
                                <a
                                  href={c.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={() => setOpen(false)}
                                  className={mobChildCls}
                                >
                                  {c.label}
                                </a>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </>
                ) : l.href.startsWith("/") && !l.href.startsWith("//") ? (
                  <Link
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-6 py-4 text-base font-semibold font-display text-navy-800"
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-6 py-4 text-base font-semibold font-display text-navy-800"
                  >
                    {l.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <div className="px-6 py-5 flex flex-col gap-3 border-t border-[hsl(var(--neutral-150))]">
            {user ? (
              <ProfileMenu user={user} variant="mobile" onNavigate={() => setOpen(false)} />
            ) : (
              <>
                <Link to="/login" onClick={() => setOpen(false)} className="btn-outline h-11 w-full">
                  Login
                </Link>
                <Link to="/register" onClick={() => setOpen(false)} className="btn-primary h-11 w-full">
                  Get Started
                </Link>
              </>
            )}
          </div>


          <div className="mt-6 px-6 py-5 border-t border-[hsl(var(--neutral-150))] bg-[hsl(var(--neutral-50))]">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                {[
                  { Icon: Linkedin, href: "https://www.linkedin.com", label: "LinkedIn" },
                  { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                  { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                  { Icon: Youtube, href: "https://youtube.com", label: "YouTube" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-[hsl(var(--neutral-200))] text-navy-800 hover:bg-navy-800 hover:text-white hover:border-navy-800 transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
              <p className="text-xs text-[hsl(var(--neutral-500))] text-center">
                © {new Date().getFullYear()} Confederation of Indian Industry. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
