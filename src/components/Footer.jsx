import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { NAV_GROUPS } from "../data/site";
import Logo from "./Logo";
import StripDivider from "./StripDivider";

export default function Footer() {
  return (
    <footer className="relative border-t border-cream/10 bg-gradient-to-b from-[#454E58] to-[#333B44]">
      <StripDivider />
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <Logo />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/60">
            Performance sportswear manufacturer — jerseys, training, fleece and OEM programs built to
            U.S. retail standards, shipped to 40+ markets.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[
              { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/peak-mode-international" },
              { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/peakmodeinternational" },
              { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@PeakModeInternational" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center border border-cream/15 text-cream/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/70 hover:text-gold-light hover:shadow-[0_10px_30px_-12px_rgba(217,180,91,0.55)]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="eyebrow mb-5">Products</h4>
          <ul className="space-y-3">
            {NAV_GROUPS.products.map((item) => (
              <li key={item.name}>
                <Link to={item.href} className="text-sm text-cream/70 transition-colors hover:text-gold">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-5">Company</h4>
          <ul className="space-y-3">
            {NAV_GROUPS.company.map((item) => (
              <li key={item.name}>
                <Link to={item.href} className="text-sm text-cream/70 transition-colors hover:text-gold">
                  {item.name}
                </Link>
              </li>
            ))}
            {NAV_GROUPS.manufacturing.slice(0, 2).map((item) => (
              <li key={item.name}>
                <Link to={item.href} className="text-sm text-cream/70 transition-colors hover:text-gold">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-5">Contact</h4>
          <ul className="space-y-4 text-sm text-cream/70">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>
                <a href="tel:+13105550192" className="transition-colors hover:text-gold">+1 (310) 555-0192</a>
                <br />
                <a href="tel:+925255501920" className="transition-colors hover:text-gold">+92 (52) 5550 1920</a>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href="mailto:sales@peakmodeinternational.com" className="transition-colors hover:text-gold">
                sales@peakmodeinternational.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>
                12-K St. Sattar Road, Sialkot, Punjab — Pakistan
                <br />
                Factory visits by appointment
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 py-6">
        <div className="container-x flex flex-col items-center justify-between gap-3 text-[11px] uppercase tracking-[0.24em] text-cream/45 sm:flex-row">
          <span>© 2026 Peak Mode International — All Rights Reserved</span>
          <span className="font-display text-[11px] font-bold uppercase italic tracking-[0.24em] text-volt/80">
            Engineered in Sialkot · Shipped Worldwide
          </span>
        </div>
      </div>
    </footer>
  );
}