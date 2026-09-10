"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Shield, Menu, X, Phone, ChevronDown, ArrowRight, Droplets, Flame, HardHat, Bug, Droplet, Zap } from "lucide-react";

const serviceIcons: Record<string, React.ElementType> = {
  "/services/damp-and-mould-claims": Droplets,
  "/services/heating-and-boiler-claims": Flame,
  "/services/structural-disrepair-claims": HardHat,
  "/services/pest-infestation-claims": Bug,
  "/services/water-leaks-and-plumbing-claims": Droplet,
  "/services/electrical-hazards-claims": Zap,
};

const services = [
  { label: "Damp & Mould Claims", href: "/services/damp-and-mould-claims", description: "Toxic black mould, penetrating damp & condensation" },
  { label: "Heating & Boiler Claims", href: "/services/heating-and-boiler-claims", description: "Broken boilers, no heating or hot water" },
  { label: "Structural Disrepair", href: "/services/structural-disrepair-claims", description: "Cracked walls, leaking roofs & subsidence" },
  { label: "Pest Infestation Claims", href: "/services/pest-infestation-claims", description: "Rats, cockroaches & rodent infestations" },
  { label: "Water Leaks & Plumbing", href: "/services/water-leaks-and-plumbing-claims", description: "Leaking pipes, flooding & drainage" },
  { label: "Electrical Hazards", href: "/services/electrical-hazards-claims", description: "Faulty wiring, exposed electrics & fire risk" },
];

const navLinks = [
  { label: "How It Works", href: "/housing-disrepair-claims" },
  { label: "FAQ", href: "/housing-disrepair-claims/faq" },
  { label: "News", href: "/blog/housing-disrepair-news" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!megaOpen && timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, [megaOpen]);

  const handleMegaEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMegaOpen(true);
  };

  const handleMegaLeave = () => {
    timeoutRef.current = setTimeout(() => setMegaOpen(false), 150);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white shadow-lg shadow-slate-200/50" : "bg-white"
    }`}>
      {/* Top bar - trust signals */}
      <div className="border-b border-slate-100 hidden lg:block">
        <div className="container-custom flex items-center justify-between py-1.5">
          <div className="flex items-center gap-5 text-[11px] text-slate-500">
            <span className="flex items-center gap-1">
              <Shield className="h-3 w-3 text-gold-500" />
              SRA Regulated
            </span>
            <span className="w-px h-3 bg-slate-200" />
            <span>No Win, No Fee</span>
            <span className="w-px h-3 bg-slate-200" />
            <span>Free Assessment</span>
            <span className="w-px h-3 bg-slate-200" />
            <span>500+ Claims Won</span>
          </div>
          <a href="tel:+441612437500" className="flex items-center gap-1.5 text-navy-700 hover:text-gold-600 text-xs font-semibold transition-colors">
            <Phone className="h-3 w-3" />
            0161 243 7500
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-[60px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 bg-navy-900 rounded-lg flex items-center justify-center">
              <Shield className="h-4.5 w-4.5 text-gold-500" />
            </div>
            <div className="leading-none">
              <span className="text-base font-extrabold text-navy-900 block leading-tight tracking-tight">
                Fusion Edge Solutions
              </span>
              <span className="text-[9px] text-navy-400 font-medium tracking-widest uppercase">
                Housing Disrepair Claims
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMegaEnter}
              onMouseLeave={handleMegaLeave}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-[13px] font-semibold text-navy-700 hover:text-gold-600 transition-colors rounded-lg hover:bg-slate-50">
                Services
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Mega menu */}
              {megaOpen && (
                <div
                  ref={megaRef}
                  onMouseEnter={handleMegaEnter}
                  onMouseLeave={handleMegaLeave}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-white rounded-2xl shadow-2xl shadow-slate-200/60 border border-slate-100 p-6 mt-0.5"
                >
                  <div className="grid grid-cols-2 gap-2">
                    {services.map((s) => {
                      const Icon = serviceIcons[s.href] || ArrowRight;
                      return (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-gold-500 transition-colors">
                            <Icon className="h-4.5 w-4.5 text-navy-400 group-hover:text-white transition-colors" />
                          </div>
                          <div className="min-w-0">
                            <div className="font-semibold text-navy-900 text-sm group-hover:text-gold-600 transition-colors">{s.label}</div>
                            <div className="text-xs text-slate-400 mt-0.5 truncate">{s.description}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link href="/services" className="text-sm font-semibold text-navy-700 hover:text-gold-600 transition-colors">
                      View All Services
                    </Link>
                    <Link href="/contact/quote-form" className="text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors flex items-center gap-1">
                      Free Assessment <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-[13px] font-semibold text-navy-700 hover:text-gold-600 transition-colors rounded-lg hover:bg-slate-50"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+441612437500" className="flex items-center gap-1.5 text-navy-600 hover:text-gold-600 text-sm font-semibold transition-colors">
              <Phone className="h-4 w-4" />
              <span>0161 243 7500</span>
            </a>
            <Link
              href="/contact/quote-form"
              className="bg-gold-500 text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-gold-600 transition-colors shadow-sm"
            >
              CLAIM NOW
            </Link>
          </div>

          {/* Mobile right */}
          <div className="flex lg:hidden items-center gap-2">
            <a href="tel:+441612437500" className="p-2 text-navy-700">
              <Phone className="h-5 w-5" />
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-navy-900">
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white">
          <div className="container-custom py-4 space-y-1 max-h-[75vh] overflow-y-auto">
            <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">Services</div>
            {services.map((s) => (
              <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="block px-4 py-2.5 text-sm text-navy-700 hover:bg-slate-50 hover:text-gold-600 rounded-lg">
                {s.label}
              </Link>
            ))}
            <div className="pt-2 mt-2 border-t border-slate-100 space-y-0.5">
              {navLinks.map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block px-4 py-2.5 text-sm font-semibold text-navy-700 hover:bg-slate-50 rounded-lg">
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="pt-3 mt-2 border-t border-slate-100 space-y-2 px-4">
              <a href="tel:+441612437500" className="flex items-center justify-center gap-2 text-navy-700 text-sm font-semibold py-3 rounded-lg border border-slate-200 hover:bg-slate-50">
                <Phone className="h-4 w-4" /> 0161 243 7500
              </a>
              <Link href="/contact/quote-form" onClick={() => setMobileOpen(false)} className="block bg-gold-500 text-white text-sm font-bold text-center py-3 rounded-lg hover:bg-gold-600">
                CLAIM NOW
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
