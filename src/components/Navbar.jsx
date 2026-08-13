import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronRight, Menu, Phone, X } from "lucide-react";
import { NAV_GROUPS } from "../data/site";
import { cn } from "../lib/cn";
import Logo from "./Logo";

const LINKS = [
  { label: "Home", to: "/", end: true },
  { label: "Products", to: "/products", group: "products" },
  { label: "Manufacturing", to: "/manufacturing", group: "manufacturing" },
  { label: "Company", to: "/about", group: "company" },
  { label: "Contact", to: "/contact" },
];

function DesktopMenu() {
  const [open, setOpen] = useState(null);

  return (
    <nav className="hidden items-center gap-1 lg:flex" onMouseLeave={() => setOpen(null)}>
{LINKS.map((link) => {
        const hasGroup = !!link.group;
        return (
          <div key={link.label} className="relative">
            <NavLink
              to={link.to}
              end={link.end}
              onMouseEnter={() => hasGroup && setOpen(link.group)}
              onClick={() => setOpen(null)}
              className={({ isActive }) =>
                cn(
                  "block px-4 py-3 text-[12.5px] font-semibold uppercase tracking-[0.16em] transition-colors",
                  isActive ? "text-gold" : "text-cream/75 hover:text-volt-light"
                )
              }
            >
              <span className="flex items-center gap-1.5">
                {link.label}
                {hasGroup && (
                  <ChevronDown
                    className={cn("h-3.5 w-3.5 transition-transform", open === link.group && "rotate-180")}
                  />
                )}
              </span>
            </NavLink>
            <AnimatePresence>
              {open === link.group && hasGroup && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-0 top-full z-50 w-64 border border-cream/10 bg-page/95 p-4 shadow-2xl backdrop-blur-xl"
                >
                  <span className="mb-3 block h-px w-8 bg-gold" />
                  {NAV_GROUPS[link.group].map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="group flex items-center justify-between border-b border-cream/5 py-2.5 text-[13px] font-medium text-cream/70 transition-colors last:border-0 hover:text-gold"
                    >
                      {item.name}
                      <ChevronRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </nav>
  );
}

function MobileMenu({ onClose }) {
  const [openGroup, setOpenGroup] = useState(null);
  const close = () => {
    onClose();
    setOpenGroup(null);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      className="absolute inset-x-0 top-full z-50 border-t border-cream/10 bg-page/95 backdrop-blur-xl lg:hidden"
    >
      <div className="container-x py-6">
        {LINKS.map((link) => (
          <div key={link.label} className="border-b border-cream/8">
            {link.group ? (
              <>
                <button
                  onClick={() => setOpenGroup(openGroup === link.group ? null : link.group)}
                  className="flex w-full items-center justify-between py-4 font-display text-sm font-bold uppercase tracking-[0.2em] text-cream"
                >
                  {link.label}
                  <ChevronDown
                    className={cn("h-4 w-4 text-gold transition-transform", openGroup === link.group && "rotate-180")}
                  />
                </button>
                <AnimatePresence>
                  {openGroup === link.group && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      {NAV_GROUPS[link.group].map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={close}
                          className="flex items-center justify-between py-3 pl-4 text-[13px] font-medium text-cream/70 hover:text-gold"
                        >
                          {item.name}
                          <ChevronRight className="h-3.5 w-3.5 text-gold/60" />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <NavLink
                to={link.to}
                end={link.end}
                onClick={close}
                className={({ isActive }) =>
                  cn(
                    "block py-4 font-display text-sm font-bold uppercase tracking-[0.2em]",
                    isActive ? "text-gold" : "text-cream"
                  )
                }
              >
                {link.label}
              </NavLink>
            )}
          </div>
        ))}
        <Link to="/contact" onClick={close} className="btn-gold mt-6 w-full">
          Request a Quote
        </Link>
      </div>
    </motion.div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "relative z-40 border-b transition-all duration-300",
        scrolled && !mobileOpen
          ? "border-cream/10 bg-page/85 shadow-[0_18px_50px_-24px_rgba(6,20,24,0.5)] backdrop-blur-2xl"
          : "border-transparent bg-page/40 backdrop-blur-md"
      )}
    >
      <StripHint />
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" aria-label="Peak Mode International home">
          <Logo />
        </Link>

        <DesktopMenu />

        <div className="flex items-center gap-3">
          <a
            href="tel:+923096518412"
            className="hidden items-center gap-2 text-[12px] font-semibold uppercase tracking-widest text-cream/70 transition-colors hover:text-gold md:flex"
          >
            <Phone className="h-3.5 w-3.5 text-gold" />
            +92 309 6518412
          </a>
          <Link to="/contact" className="btn-gold hidden !px-5 !py-3 md:inline-flex">
            Request a Quote
          </Link>
          <Link
            to="/contact"
            className="btn-gold !px-4 !py-2.5 !text-[11px] md:hidden"
          >
            Quote
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((o) => !o)}
            className="grid h-11 w-11 place-items-center border border-cream/15 text-cream lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <AnimatePresence>{mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}</AnimatePresence>
    </header>
  );
}

function StripHint() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
      <div className="shine-line absolute inset-y-0 w-1/2" />
    </div>
  );
}