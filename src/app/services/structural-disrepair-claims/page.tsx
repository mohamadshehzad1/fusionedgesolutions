import type { Metadata } from "next";
import Link from "next/link";
import PillarNav, { Breadcrumbs } from "@/components/PillarNav";
import Footer from "@/components/Footer";
import { WebPageSchema, BreadcrumbSchema, ServiceSchema } from "@/lib/seo";
import { HardHat, Phone, ArrowRight, Check, AlertTriangle, Shield, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Structural Disrepair Claims UK | Cracked Walls, Roof Damage Compensation",
  description:
    "Claim compensation for structural damage in rented property. Cracked walls, leaking roofs, subsidence. Expert housing disrepair solicitors. No Win, No Fee.",
  keywords: "structural disrepair claims, cracked walls claim, leaking roof compensation, housing structural damage UK",
};

export default function StructuralClaimsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <WebPageSchema title="Structural Disrepair Claims" description="Claim compensation for structural damage in rented property." path="/services/structural-disrepair-claims" />
      <ServiceSchema name="Structural Disrepair Claims" description="Claims for cracked walls, leaking roofs, subsidence, and structural defects" url="/services/structural-disrepair-claims" />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Structural Disrepair", url: "/services/structural-disrepair-claims" },
      ]} />
      <PillarNav />
      <div className="container-custom">
        <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Structural Disrepair" }]} />

        <section className="py-12 md:py-20 max-w-5xl">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <HardHat className="h-4 w-4" />
            High-Value Claims
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-navy-900 leading-tight mb-6">
            Structural Disrepair Claims
          </h1>
          <p className="text-lg md:text-xl text-navy-600 leading-relaxed mb-8">
            Structural damage — cracked walls, leaking roofs, subsidence, and
            damaged windows — poses serious safety risks. Under UK housing law,
            your landlord must maintain the structural integrity of your
            property. Failure to do so entitles you to substantial compensation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact/quote-form" className="inline-flex items-center gap-2 btn-gold">
              Start Structural Claim <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:+443301233309" className="inline-flex items-center gap-2 btn-gold-outline">
              <Phone className="h-4 w-4" /> Call Free
            </a>
          </div>
        </section>

        <section className="pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Scale, title: "Legal Basis", text: "Homes Act 2018, Section 11 LTA 1985, Building Act 1984" },
              { icon: AlertTriangle, title: "Safety Risk", text: "Falling debris, collapse risk, water ingress, pest entry" },
              { icon: Shield, title: "Compensation", text: "£3,000 – £10,000+ for serious structural defects" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                  <Icon className="h-8 w-8 text-gold-500 mb-3" />
                  <h3 className="font-bold text-navy-900 mb-1">{item.title}</h3>
                  <p className="text-navy-500 text-sm">{item.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="pb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-8">Types of Structural Damage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Cracked Walls", desc: "Internal and external wall cracks indicating movement or subsidence" },
              { title: "Leaking Roofs", desc: "Damaged tiles, failed flashing, or structural roof defects" },
              { title: "Broken Windows", desc: "Rotting frames, failed seals, and single-glazing issues" },
              { title: "Subsidence", desc: "Foundation movement causing structural instability" },
              { title: "Damaged Brickwork", desc: "Crumbling mortar, missing bricks, and structural deterioration" },
              { title: "Sagging Floors/Ceilings", desc: "Structural failure in floor joists or ceiling supports" },
            ].map((i) => (
              <div key={i.title} className="flex items-start gap-4 bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <HardHat className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 text-sm">{i.title}</h3>
                  <p className="text-navy-500 text-sm mt-0.5">{i.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-8">Compensation for Structural Damage</h2>
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
            <table className="w-full">
              <thead><tr className="bg-navy-900 text-white">
                <th className="px-6 py-4 text-left text-sm font-semibold">Issue</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Compensation</th>
                <th className="px-6 py-4 text-left text-sm font-semibold hidden md:table-cell">Outcome</th>
              </tr></thead>
              <tbody>
                {[
                  { s: "Cracked Walls (6+ months)", c: "£3,000 – £6,000", o: "Structural survey + repairs" },
                  { s: "Leaking Roof (12+ months)", c: "£4,000 – £10,000", o: "Roof replacement" },
                  { s: "Broken Windows (3+ months)", c: "£1,500 – £3,500", o: "New window installation" },
                  { s: "Subsidence Issues", c: "£5,000 – £10,000+", o: "Underpinning + remediation" },
                ].map((r, i) => (
                  <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-slate-50/50" : ""}`}>
                    <td className="px-6 py-4 text-sm font-medium text-navy-900">{r.s}</td>
                    <td className="px-6 py-4"><span className="bg-gold-100 text-gold-700 px-3 py-1 rounded-full text-sm font-semibold">{r.c}</span></td>
                    <td className="px-6 py-4 text-sm text-navy-500 hidden md:table-cell">{r.o}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="pb-16">
          <div className="bg-gold-500 rounded-2xl p-10 md:p-14 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Structural Damage? Claim Now</h2>
            <p className="text-gold-100 max-w-2xl mx-auto mb-8 text-lg">Don&apos;t live with dangerous structural issues. Your landlord must fix them.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact/quote-form" className="inline-flex items-center gap-2 bg-navy-900 text-white font-bold px-10 py-4 rounded-full hover:bg-navy-800 transition-colors">
                Start Your Claim <ArrowRight className="h-5 w-5" />
              </Link>
              <a href="tel:+443301233309" className="inline-flex items-center gap-2 bg-white text-gold-700 font-bold px-10 py-4 rounded-full hover:bg-gold-50 transition-colors">
                <Phone className="h-5 w-5" /> Call Free
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
