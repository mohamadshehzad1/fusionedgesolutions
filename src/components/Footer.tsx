import Link from "next/link";
import { Shield, Phone, Mail, Clock, Check } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      {/* CTA Banner */}
      <div className="bg-gold-500">
        <div className="container-custom py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-white">
              <Phone className="h-6 w-6" />
              <span className="text-lg font-bold">
                Need housing disrepair advice? Call our team on{" "}
                <a href="tel:+441612437500" className="underline decoration-2 underline-offset-2">
                  0161 243 7500
                </a>
              </span>
            </div>
            <Link
              href="/contact/quote-form"
              className="inline-flex items-center gap-2 bg-navy-900 text-white font-bold px-8 py-3 rounded-full hover:bg-navy-800 transition-colors text-sm"
            >
              Get Free Assessment
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div id="contact" className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 bg-gold-500 rounded-xl flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight block leading-tight">Fusion Edge Solutions</span>
                <span className="text-[10px] text-slate-400 font-medium tracking-widest uppercase">Housing Disrepair Claims</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              We connect UK social housing tenants with regulated panel solicitors
              to claim compensation and enforce repairs for housing disrepair.
              No Win, No Fee.
            </p>
            <div className="space-y-3 text-sm text-slate-400">
              <a href="tel:+441612437500" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
                <Phone className="h-4 w-4" /> 0161 243 7500
              </a>
              <a href="mailto:admin@fusionedgesolutions.co.uk" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
                <Mail className="h-4 w-4" /> admin@fusionedgesolutions.co.uk
              </a>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" /> Mon–Fri, 9am–6pm
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-slate-200 mb-5">Services</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {[
                { label: "Damp & Mould Claims", href: "/services/damp-and-mould-claims" },
                { label: "Heating & Boiler Claims", href: "/services/heating-and-boiler-claims" },
                { label: "Structural Disrepair", href: "/services/structural-disrepair-claims" },
                { label: "Pest Infestation Claims", href: "/services/pest-infestation-claims" },
                { label: "Water Leaks & Plumbing", href: "/services/water-leaks-and-plumbing-claims" },
                { label: "Electrical Hazards", href: "/services/electrical-hazards-claims" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-gold-400 transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Claims */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-slate-200 mb-5">Claims</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {[
                { label: "Housing Disrepair Claims", href: "/housing-disrepair-claims" },
                { label: "Council Disrepair Claim", href: "/housing-disrepair-claims" },
                { label: "Housing Association Claim", href: "/housing-disrepair-claims" },
                { label: "Compensation Calculator", href: "/compensation-calculator" },
                { label: "Your Legal Rights", href: "/housing-disrepair-claims/fitness-for-human-habitation-act" },
                { label: "FAQ", href: "/housing-disrepair-claims/faq" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-gold-400 transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-slate-200 mb-5">Company</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {[
                { label: "About Us", href: "/about-us/attorneys" },
                { label: "News & Blog", href: "/blog/housing-disrepair-news" },
                { label: "Contact Us", href: "/contact/quote-form" },
                { label: "Terms & Conditions", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Cookie Policy", href: "#" },
                { label: "Complaints", href: "#" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-gold-400 transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust & Accreditations */}
        <div className="border-t border-navy-700 pt-10 mb-10">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-8">
            {[
              { icon: Check, label: "No Win, No Fee" },
              { icon: Shield, label: "Data Protection Compliant" },
              { icon: Check, label: "500+ Successful Claims" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                  <Icon className="h-4 w-4 text-gold-500" />
                  {item.label}
                </div>
              );
            })}
          </div>
        </div>

        <div className="border-t border-navy-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs gap-4">
            <p>&copy; {new Date().getFullYear()} Fusion Edge Solutions. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-gold-400 transition-colors">Sitemap</a>
              <a href="#" className="hover:text-gold-400 transition-colors">Accessibility</a>
              <span>Registered in England & Wales</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}
