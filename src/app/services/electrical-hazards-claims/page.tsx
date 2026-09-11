import type { Metadata } from "next";
import Link from "next/link";
import PillarNav, { Breadcrumbs } from "@/components/PillarNav";
import Footer from "@/components/Footer";
import { WebPageSchema, BreadcrumbSchema, ServiceSchema } from "@/lib/seo";
import { Zap, Phone, ArrowRight, AlertTriangle, Shield, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Electrical Hazards Housing Disrepair Claims UK | Compensation for Tenants",
  description:
    "Claim compensation for electrical hazards in rented property. Exposed wiring, faulty electrics, fire risk. Housing disrepair solicitors. No Win, No Fee.",
  keywords: "electrical hazard claim, faulty wiring compensation, electrical disrepair housing, fire risk rented property",
};

export default function ElectricalClaimsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <WebPageSchema title="Electrical Hazards Claims" description="Claim compensation for electrical hazards in rented property." path="/services/electrical-hazards-claims" />
      <ServiceSchema name="Electrical Hazards Claims" description="Claims for exposed wiring, faulty electrics, and fire hazards" url="/services/electrical-hazards-claims" />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Electrical Hazards", url: "/services/electrical-hazards-claims" },
      ]} />
      <PillarNav />
      <div className="container-custom">
        <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Electrical Hazards" }]} />

        <section className="py-12 md:py-20 max-w-5xl">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Zap className="h-4 w-4" />
            Dangerous
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-navy-900 leading-tight mb-6">
            Electrical Hazards Housing Disrepair Claims
          </h1>
          <p className="text-lg md:text-xl text-navy-600 leading-relaxed mb-8">
            Faulty wiring, exposed electrics, and inadequate electrical
            installations pose immediate fire and electrocution risks. Under{" "}
            <strong>Section 11 of the Landlord and Tenant Act 1985</strong> and
            the <strong>Electricity at Work Regulations 1989</strong>, your
            landlord must ensure electrical installations are safe.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact/quote-form" className="inline-flex items-center gap-2 btn-gold">
              Start Electrical Claim <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:+443301233309" className="inline-flex items-center gap-2 btn-gold-outline">
              <Phone className="h-4 w-4" /> Emergency: Call Now
            </a>
          </div>
        </section>

        <section className="pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Scale, title: "Legal Basis", text: "Section 11 LTA 1985, Electricity at Work Regs 1989, IET Wiring Regs" },
              { icon: AlertTriangle, title: "Danger Level", text: "Fire, electrocution, serious injury or death risk" },
              { icon: Shield, title: "Compensation", text: "£2,000 – £7,000+ for electrical hazard claims" },
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
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-8">Electrical Hazards We Handle</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Exposed Wiring", desc: "Uncovered or damaged wiring posing electrocution risk" },
              { title: "Faulty Sockets/Switches", desc: "Damaged, sparking, or non-functional electrical points" },
              { title: "No RCD Protection", desc: "Missing residual current devices that prevent electric shock" },
              { title: "Outdated Wiring", desc: "Old or deteriorated wiring not meeting current safety standards" },
              { title: "Faulty Consumer Unit", desc: "Damaged or outdated fuse boxes and distribution boards" },
              { title: "Water-Damaged Electrics", desc: "Electrical systems compromised by water ingress or damp" },
            ].map((i) => (
              <div key={i.title} className="flex items-start gap-4 bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="h-5 w-5 text-red-600" />
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Electrical Danger? Act Now</h2>
            <p className="text-gold-100 max-w-2xl mx-auto mb-8 text-lg">Faulty electrics can cause fires and electrocution. Your landlord must fix them immediately.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact/quote-form" className="inline-flex items-center gap-2 bg-navy-900 text-white font-bold px-10 py-4 rounded-full hover:bg-navy-800 transition-colors">
                Start Your Claim <ArrowRight className="h-5 w-5" />
              </Link>
              <a href="tel:+443301233309" className="inline-flex items-center gap-2 bg-white text-gold-700 font-bold px-10 py-4 rounded-full hover:bg-gold-50 transition-colors">
                <Phone className="h-5 w-5" /> Emergency Call
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
