import type { Metadata } from "next";
import Link from "next/link";
import PillarNav, { Breadcrumbs } from "@/components/PillarNav";
import Footer from "@/components/Footer";
import { WebPageSchema, BreadcrumbSchema, ServiceSchema } from "@/lib/seo";
import { Flame, Phone, ArrowRight, Check, AlertTriangle, Shield, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Heating and Boiler Repair Claims UK | Housing Disrepair Compensation",
  description:
    "Claim compensation for broken heating, faulty boilers, and no hot water. Expert housing disrepair solicitors. No Win, No Fee. Free assessment.",
  keywords: "broken heating claim, boiler repair compensation, no heating housing disrepair, heating system claim UK",
};

const issues = [
  { title: "Boiler Breakdown", desc: "Complete failure of your heating system's boiler unit" },
  { title: "No Hot Water", desc: "Loss of hot water supply for washing, cleaning, and hygiene" },
  { title: "Central Heating Failure", desc: "Radiators not heating or system completely non-functional" },
  { title: "Gas Safety Hazards", desc: "Faulty gas appliances posing carbon monoxide or fire risks" },
];

const process = [
  { step: "1", title: "Emergency Assessment", desc: "We assess whether your case qualifies for emergency intervention" },
  { step: "2", title: "Expert Report", desc: "Gas-safe registered engineer inspects and reports on the issue" },
  { step: "3", title: "Legal Demand", desc: "Formal pre-action protocol letter to your landlord" },
  { step: "4", title: "Resolution", desc: "Forced repairs, new system installation, and compensation" },
];

export default function HeatingClaimsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <WebPageSchema title="Heating and Boiler Claims" description="Claim compensation for broken heating and faulty boilers." path="/services/heating-and-boiler-claims" />
      <ServiceSchema name="Heating and Boiler Claims" description="Claims for broken heating systems, boilers, and no hot water" url="/services/heating-and-boiler-claims" />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Heating & Boiler Claims", url: "/services/heating-and-boiler-claims" },
      ]} />
      <PillarNav />
      <div className="container-custom">
        <Breadcrumbs items={[
          { label: "Services", href: "/services" },
          { label: "Heating & Boiler Claims" },
        ]} />

        <section className="py-12 md:py-20 max-w-5xl">
          <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Flame className="h-4 w-4" />
            Urgent Service
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-navy-900 leading-tight mb-6">
            Heating and Boiler Compensation Claims
          </h1>
          <p className="text-lg md:text-xl text-navy-600 leading-relaxed mb-8">
            Under <strong>Section 11 of the Landlord and Tenant Act 1985</strong>,
            your landlord must keep installations for space heating and water
            heating in proper working order. A broken boiler or heating system in
            UK social housing is a serious disrepair issue that entitles you to
            compensation and urgent repairs.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact/quote-form" className="inline-flex items-center gap-2 btn-gold">
              Claim for Heating Issues
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:+441618182458" className="inline-flex items-center gap-2 btn-gold-outline">
              <Phone className="h-4 w-4" />
              Emergency: Call Now
            </a>
          </div>
        </section>

        {/* Key Facts */}
        <section className="pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Scale, title: "Legal Basis", text: "Section 11 LTA 1985, Homes Act 2018, Gas Safety Regulations" },
              { icon: AlertTriangle, title: "Urgency", text: "Emergency repairs can be forced within 24–48 hours" },
              { icon: Shield, title: "Compensation", text: "£2,000 – £6,000+ depending on duration and season" },
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

        {/* Issues */}
        <section className="pb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-8">What Heating Issues Can You Claim For?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {issues.map((i) => (
              <div key={i.title} className="flex items-start gap-4 bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Flame className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 text-sm">{i.title}</h3>
                  <p className="text-navy-500 text-sm mt-0.5">{i.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Compensation */}
        <section className="pb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-8">Compensation for Heating Issues</h2>
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
            <table className="w-full">
              <thead><tr className="bg-navy-900 text-white">
                <th className="px-6 py-4 text-left text-sm font-semibold">Scenario</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Compensation</th>
                <th className="px-6 py-4 text-left text-sm font-semibold hidden md:table-cell">Outcome</th>
              </tr></thead>
              <tbody>
                {[
                  { s: "Boiler broken (1–3 months, winter)", c: "£2,000 – £4,000", o: "Emergency repair + heating" },
                  { s: "No heating (3+ months)", c: "£3,000 – £5,000", o: "New system installed" },
                  { s: "Recurring issues (12+ months)", c: "£4,000 – £6,000+", o: "Full replacement + damages" },
                  { s: "Gas safety hazard", c: "£5,000 – £8,000+", o: "Emergency inspection + repair" },
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

        {/* Process */}
        <section className="pb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-8">Claims Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                <div className="w-10 h-10 bg-gold-500 text-white rounded-full flex items-center justify-center font-bold text-sm mb-4">{p.step}</div>
                <h3 className="font-bold text-navy-900 mb-2">{p.title}</h3>
                <p className="text-navy-500 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="pb-16">
          <div className="bg-gold-500 rounded-2xl p-10 md:p-14 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Don&apos;t Endure a Cold Home</h2>
            <p className="text-gold-100 max-w-2xl mx-auto mb-8 text-lg">UK law requires your landlord to provide working heating. Get a free assessment today.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact/quote-form" className="inline-flex items-center gap-2 bg-navy-900 text-white font-bold px-10 py-4 rounded-full hover:bg-navy-800 transition-colors">
                Start Your Claim <ArrowRight className="h-5 w-5" />
              </Link>
              <a href="tel:+441618182458" className="inline-flex items-center gap-2 bg-white text-gold-700 font-bold px-10 py-4 rounded-full hover:bg-gold-50 transition-colors">
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
