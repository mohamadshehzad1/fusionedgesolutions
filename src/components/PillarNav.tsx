"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, ChevronRight, Shield, Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";

const services = [
  { label: "Damp & Mould", href: "/services/damp-and-mould-claims" },
  { label: "Heating & Boiler", href: "/services/heating-and-boiler-claims" },
  { label: "Structural Disrepair", href: "/services/structural-disrepair-claims" },
  { label: "Pest Infestation", href: "/services/pest-infestation-claims" },
  { label: "Water Leaks & Plumbing", href: "/services/water-leaks-and-plumbing-claims" },
  { label: "Electrical Hazards", href: "/services/electrical-hazards-claims" },
];

const navLinks = [
  { label: "Your Rights", href: "/housing-disrepair-claims/fitness-for-human-habitation-act" },
  { label: "FAQ", href: "/housing-disrepair-claims/faq" },
  { label: "News", href: "/blog/housing-disrepair-news" },
];

export default function PillarNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg shadow-slate-200/50">
      {/* Top bar */}
      <div className="border-b border-slate-100 hidden lg:block">
        <div className="container-custom flex items-center justify-between py-1.5">
          <div className="flex items-center gap-5 text-[11px] text-slate-500">
            <span className="flex items-center gap-1">
              <Shield className="h-3 w-3 text-gold-500" />
              No Win, No Fee
            </span>
            <span className="w-px h-3 bg-slate-200" />
            <span>Free Assessment</span>
          </div>
          <a href="tel:+443301233309" className="flex items-center gap-1.5 text-navy-700 hover:text-gold-600 text-xs font-semibold transition-colors">
            <Phone className="h-3 w-3" />
            0330 123 3309
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
                The Compensation People
              </span>
              <span className="text-[9px] text-navy-400 font-medium tracking-widest uppercase">
                Housing Disrepair Claims
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
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
            <a href="tel:+443301233309" className="flex items-center gap-1.5 text-navy-600 hover:text-gold-600 text-sm font-semibold transition-colors">
              <Phone className="h-4 w-4" />
              <span>0330 123 3309</span>
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
            <a href="tel:+443301233309" className="p-2 text-navy-700">
              <Phone className="h-5 w-5" />
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-navy-900">
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Service links bar - Desktop */}
      <div className="border-t border-slate-100 hidden lg:block">
        <div className="container-custom">
          <div className="flex items-center gap-0.5 py-1 overflow-x-auto scrollbar-hide">
            <Link
              href="/services"
              className={`whitespace-nowrap px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                pathname === "/services"
                  ? "text-gold-600 bg-gold-50"
                  : "text-slate-500 hover:text-navy-700 hover:bg-slate-50"
              }`}
            >
              All Services
            </Link>
            {services.map((s) => {
              const isActive = pathname === s.href;
              return (
                <Link
                  key={s.href}
                  href={s.href}
                  className={`whitespace-nowrap px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                    isActive
                      ? "text-gold-600 bg-gold-50"
                      : "text-slate-500 hover:text-navy-700 hover:bg-slate-50"
                  }`}
                >
                  {s.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white">
          <div className="container-custom py-4 space-y-1 max-h-[75vh] overflow-y-auto">
            <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">Services</div>
            <Link href="/services" onClick={() => setMobileOpen(false)} className="block px-4 py-2.5 text-sm font-semibold text-navy-900 hover:bg-slate-50 rounded-lg">
              All Services
            </Link>
            {services.map((s) => (
              <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="block px-4 py-2.5 text-sm text-navy-700 hover:bg-slate-50 hover:text-gold-600 rounded-lg">
                {s.label}
              </Link>
            ))}
            <div className="pt-2 mt-2 border-t border-slate-100 space-y-0.5">
              <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">More</div>
              {navLinks.map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block px-4 py-2.5 text-sm font-semibold text-navy-700 hover:bg-slate-50 rounded-lg">
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="pt-3 mt-2 border-t border-slate-100 space-y-2 px-4">
              <a href="tel:+443301233309" className="flex items-center justify-center gap-2 text-navy-700 text-sm font-semibold py-3 rounded-lg border border-slate-200 hover:bg-slate-50">
                <Phone className="h-4 w-4" /> 0330 123 3309
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

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="flex items-center gap-1.5 text-sm py-4 pt-6">
      <Link href="/" className="text-slate-400 hover:text-gold-500 transition-colors">Home</Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight className="h-3 w-3 text-slate-300" />
          {item.href ? (
            <Link href={item.href} className="text-slate-400 hover:text-gold-500 transition-colors">{item.label}</Link>
          ) : (
            <span className="text-navy-900 font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
