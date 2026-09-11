import type { Metadata } from "next";
import Link from "next/link";
import PillarNav, { Breadcrumbs } from "@/components/PillarNav";
import Footer from "@/components/Footer";
import { WebPageSchema, BreadcrumbSchema, ServiceSchema } from "@/lib/seo";
import { Droplet, Phone, ArrowRight, AlertTriangle, Shield, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Water Leaks and Plumbing Claims UK | Housing Disrepair Compensation",
  description:
    "Claim compensation for water leaks, plumbing failures, and drainage issues. Expert housing disrepair solicitors. No Win, No Fee. Free assessment.",
  keywords: "water leak claim, plumbing compensation, drainage disrepair, leaking pipe housing claim",
};

export default function WaterLeaksPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <WebPageSchema title="Water Leaks and Plumbing Claims" description="Claim compensation for water leaks and plumbing failures." path="/services/water-leaks-and-plumbing-claims" />
      <ServiceSchema name="Water Leaks and Plumbing Claims" description="Claims for leaking pipes, flooding, and drainage failures" url="/services/water-leaks-and-plumbing-claims" />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Water Leaks & Plumbing", url: "/services/water-leaks-and-plumbing-claims" },
      ]} />
      <PillarNav />
      <div className="container-custom">
        <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Water Leaks & Plumbing" }]} />

        <section className="py-12 md:py-20 max-w-5xl">
          <div className="inline-flex items-center gap-2 bg-cyan-50 text-cyan-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Droplet className="h-4 w-4" />
            Property Damage
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-navy-900 leading-tight mb-6">
            Water Leaks and Plumbing Claims
          </h1>
          <p className="text-lg md:text-xl text-navy-600 leading-relaxed mb-8">
            Persistent water leaks, overflowing drains, and plumbing failures
            cause extensive property damage and health risks. Under{" "}
            <strong>Section 11 of the Landlord and Tenant Act 1985</strong>,
            your landlord must maintain installations for water supply and
            drainage.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact/quote-form" className="inline-flex items-center gap-2 btn-gold">
              Start Leak Claim <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:+443301233309" className="inline-flex items-center gap-2 btn-gold-outline">
              <Phone className="h-4 w-4" /> Call Free
            </a>
          </div>
        </section>

        <section className="pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Scale, title: "Legal Basis", text: "Section 11 LTA 1985, Homes Act 2018, Water Industry Act 1991" },
              { icon: AlertTriangle, title: "Damage Risk", text: "Structural damage, mould growth, electrical hazards" },
              { icon: Shield, title: "Compensation", text: "£1,500 – £4,000+ depending on severity" },
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
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-8">Water Leak Issues We Handle</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Leaking Pipes", desc: "Internal and external pipe leaks causing damp and damage" },
              { title: "Overflowing Drains", desc: "Blocked or broken drains causing flooding and health hazards" },
              { title: "Roof Leaks", desc: "Water ingress through damaged roofing and guttering" },
              { title: "Burst Pipes", desc: "Sudden pipe failures causing flooding and property damage" },
              { title: "Rising Damp", desc: "Failed damp-proof course allowing ground water penetration" },
              { title: "Bathroom/Kitchen Leaks", desc: "Defective plumbing in wet areas causing ongoing damage" },
            ].map((i) => (
              <div key={i.title} className="flex items-start gap-4 bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Droplet className="h-5 w-5 text-cyan-600" />
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
          <div className="bg-gold-500 rounded-2xl p-10 md:p-14 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Water Damage? Get It Fixed</h2>
            <p className="text-gold-100 max-w-2xl mx-auto mb-8 text-lg">Your landlord must maintain plumbing and drainage. Claim today.</p>
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
