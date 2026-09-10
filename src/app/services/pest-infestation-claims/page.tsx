import type { Metadata } from "next";
import Link from "next/link";
import PillarNav, { Breadcrumbs } from "@/components/PillarNav";
import Footer from "@/components/Footer";
import { WebPageSchema, BreadcrumbSchema, ServiceSchema } from "@/lib/seo";
import { Bug, Phone, ArrowRight, AlertTriangle, Shield, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Pest Infestation Housing Disrepair Claims UK | Compensation for Tenants",
  description:
    "Claim compensation for pest infestations in rented property. Rats, cockroaches, mice. Housing disrepair solicitors. No Win, No Fee. Free assessment.",
  keywords: "pest infestation claim, rat infestation compensation, cockroach claim housing, pest disrepair UK",
};

export default function PestClaimsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <WebPageSchema title="Pest Infestation Claims" description="Claim compensation for pest infestations in rented property." path="/services/pest-infestation-claims" />
      <ServiceSchema name="Pest Infestation Claims" description="Claims for rats, cockroaches, mice, and other pest infestations" url="/services/pest-infestation-claims" />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Pest Infestation Claims", url: "/services/pest-infestation-claims" },
      ]} />
      <PillarNav />
      <div className="container-custom">
        <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Pest Infestation Claims" }]} />

        <section className="py-12 md:py-20 max-w-5xl">
          <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Bug className="h-4 w-4" />
            Health Hazard
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-navy-900 leading-tight mb-6">
            Pest Infestation Housing Disrepair Claims
          </h1>
          <p className="text-lg md:text-xl text-navy-600 leading-relaxed mb-8">
            Pest infestations in rented property are often caused by structural
            defects your landlord is responsible for. Under the{" "}
            <strong>Environmental Protection Act 1990</strong> and the{" "}
            <strong>Homes (Fitness for Human Habitation) Act 2018</strong>, your
            landlord must address issues that create or allow pest access.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact/quote-form" className="inline-flex items-center gap-2 btn-gold">
              Start Pest Claim <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:+441618182458" className="inline-flex items-center gap-2 btn-gold-outline">
              <Phone className="h-4 w-4" /> Call Free
            </a>
          </div>
        </section>

        <section className="pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Scale, title: "Legal Basis", text: "Environmental Protection Act 1990, Homes Act 2018" },
              { icon: AlertTriangle, title: "Health Risk", text: "Disease, allergic reactions, contamination, bites" },
              { icon: Shield, title: "Compensation", text: "£1,000 – £5,000+ depending on type and duration" },
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
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-8">Common Pest Issues</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Rat Infestations", desc: "Broken drains, gaps in walls, damaged pipework allowing rat access" },
              { title: "Cockroach Infestations", desc: "Structural defects, shared drainage, inadequate proofing" },
              { title: "Mouse Infestations", desc: "Gaps in skirting boards, pipe entries, and wall cavities" },
              { title: "Bed Bug Infestations", desc: "Particularly common in blocks of flats with shared walls" },
              { title: "Flea Infestations", desc: "Often from neighbouring properties through structural gaps" },
              { title: "Bird/Squirrel Ingress", desc: "Damaged roofing and soffits allowing animal entry" },
            ].map((i) => (
              <div key={i.title} className="flex items-start gap-4 bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Bug className="h-5 w-5 text-purple-600" />
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
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-8">Compensation for Pest Infestations</h2>
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
            <table className="w-full">
              <thead><tr className="bg-navy-900 text-white">
                <th className="px-6 py-4 text-left text-sm font-semibold">Pest Type</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Compensation</th>
                <th className="px-6 py-4 text-left text-sm font-semibold hidden md:table-cell">Outcome</th>
              </tr></thead>
              <tbody>
                {[
                  { s: "Rat / Mouse", c: "£2,000 – £4,000", o: "Pest control + structural proofing" },
                  { s: "Cockroaches", c: "£1,500 – £3,000", o: "Treatment + structural repairs" },
                  { s: "Bed Bugs", c: "£1,000 – £2,500", o: "Professional treatment" },
                  { s: "Persistent / Recurring", c: "£2,500 – £5,000+", o: "Full survey + remediation" },
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Get Rid of Your Pest Problem</h2>
            <p className="text-gold-100 max-w-2xl mx-auto mb-8 text-lg">Your landlord is responsible for structural issues causing infestations.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact/quote-form" className="inline-flex items-center gap-2 bg-navy-900 text-white font-bold px-10 py-4 rounded-full hover:bg-navy-800 transition-colors">
                Start Your Claim <ArrowRight className="h-5 w-5" />
              </Link>
              <a href="tel:+441618182458" className="inline-flex items-center gap-2 bg-white text-gold-700 font-bold px-10 py-4 rounded-full hover:bg-gold-50 transition-colors">
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
