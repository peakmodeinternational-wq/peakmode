import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { NAV_GROUPS } from "../data/site";
import Logo from "./Logo";
import StripDivider from "./StripDivider";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-navy">
      <StripDivider />
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <Logo />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/50">
            Performance sportswear manufacturer — jerseys, training, fleece and OEM programs built to
            U.S. retail standards, shipped to 40+ markets.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[
              { icon: Linkedin, label: "LinkedIn" },
              { icon: Instagram, label: "Instagram" },
              { icon: Youtube, label: "YouTube" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid h-10 w-10 place-items-center border border-white/15 text-white/60 transition-colors hover:border-gold hover:text-gold"
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
                <Link to={item.href} className="text-sm text-white/60 transition-colors hover:text-gold">
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
                <Link to={item.href} className="text-sm text-white/60 transition-colors hover:text-gold">
                  {item.name}
                </Link>
              </li>
            ))}
            {NAV_GROUPS.manufacturing.slice(0, 2).map((item) => (
              <li key={item.name}>
                <Link to={item.href} className="text-sm text-white/60 transition-colors hover:text-gold">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-5">Contact</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>
                +1 (310) 555-0192
                <br />
                +92 (41) 5550 1920
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              sales@peakmodeinternational.com
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>
                12-K St. Sattar Road, Faisalabad, Punjab — Pakistan
                <br />
                Factory visits by appointment
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container-x flex flex-col items-center justify-between gap-3 text-[11px] uppercase tracking-[0.24em] text-white/35 sm:flex-row">
          <span>© 2026 Peak Mode International — All Rights Reserved</span>
          <span className="text-gold/70">Engineered Performance · Built in Pakistan · Shipped Worldwide</span>
        </div>
      </div>
    </footer>
  );
}