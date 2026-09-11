import type { Metadata } from "next";
import Link from "next/link";
import PillarNav, { Breadcrumbs } from "@/components/PillarNav";
import Footer from "@/components/Footer";
import { WebPageSchema, BreadcrumbSchema, ServiceSchema } from "@/lib/seo";
import { Droplets, Phone, ArrowRight, Check, AlertTriangle, Shield, Scale, FileText, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Damp and Mould Compensation Claims UK | Housing Disrepair Solicitors",
  description:
    "Claim compensation for damp and toxic black mould in your home. Expert housing disrepair solicitors. No Win, No Fee. Council & housing association tenants. Free assessment.",
  keywords: "damp mould compensation, black mould claim, mould damage compensation UK, housing disrepair damp, damp housing claim",
};

const causes = [
  { title: "Rising Damp", desc: "Failed damp-proof course allowing moisture to rise through walls" },
  { title: "Penetrating Damp", desc: "Water entering through cracked walls, roofs, or windows" },
  { title: "Condensation", desc: "Poor ventilation and inadequate heating causing moisture buildup" },
  { title: "Leaking Pipes/Roof", desc: "Water ingress from defective plumbing or roofing" },
];

const healthRisks = [
  "Chronic respiratory conditions (asthma, bronchitis, COPD)",
  "Allergic reactions and skin/eye irritation",
  "Weakened immune system, especially in children",
  "Mental health impacts (anxiety, depression, stress)",
  "Exacerbation of existing conditions (eczema, allergies)",
  "Fungal infections from prolonged exposure",
];

const caseStudies = [
  { location: "Manchester", result: "£5,800 compensation + full remediation", duration: "18 months of damp", type: "Council tenant" },
  { location: "Birmingham", result: "£4,200 compensation + new ventilation system", duration: "12 months of mould", type: "Housing association" },
  { location: "Leeds", result: "£6,500 compensation + property survey", duration: "24+ months of damp", type: "Council tenant" },
];

const process = [
  { step: "1", title: "Free Assessment", desc: "We review your situation and confirm eligibility within 24 hours" },
  { step: "2", title: "Evidence Gathering", desc: "We collect photographs, medical records, and expert reports" },
  { step: "3", title: "Legal Letter", desc: "Formal letter to your landlord demanding repairs and compensation" },
  { step: "4", title: "Court Action", desc: "If needed, we obtain court orders to force repairs and maximise compensation" },
];

export default function DampMouldClaimsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <WebPageSchema title="Damp and Mould Compensation Claims" description="Claim compensation for damp and toxic black mould in your home." path="/services/damp-and-mould-claims" />
      <ServiceSchema name="Damp and Mould Claims" description="Compensation claims for damp, mould, and condensation in rented property" url="/services/damp-and-mould-claims" />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Damp & Mould Claims", url: "/services/damp-and-mould-claims" },
      ]} />
      <PillarNav />
      <div className="container-custom">
        <Breadcrumbs items={[
          { label: "Services", href: "/services" },
          { label: "Damp & Mould Claims" },
        ]} />

        {/* Hero */}
        <section className="py-12 md:py-20 max-w-5xl">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Droplets className="h-4 w-4" />
            Housing Disrepair Service
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-navy-900 leading-tight mb-6">
            Damp and Mould Compensation Claims
          </h1>
          <p className="text-lg md:text-xl text-navy-600 leading-relaxed mb-8">
            Living with persistent damp or toxic black mould? Your landlord has a
            legal duty under the{" "}
            <strong>Homes (Fitness for Human Habitation) Act 2018</strong> and{" "}
            <strong>Section 11 of the Landlord and Tenant Act 1985</strong> to
            keep your property free from these hazards. If they have failed, you
            are entitled to compensation and urgent repairs.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact/quote-form" className="inline-flex items-center gap-2 btn-gold">
              Claim for Damp & Mould
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:+443301233309" className="inline-flex items-center gap-2 btn-gold-outline">
              <Phone className="h-4 w-4" />
              Call Free: 0330 123 3309
            </a>
          </div>
        </section>

        {/* Key Facts */}
        <section className="pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Scale, title: "Legal Basis", text: "Homes (Fitness for Human Habitation) Act 2018, HHSRS" },
              { icon: AlertTriangle, title: "Health Impact", text: "Respiratory illness, weakened immunity, mental health" },
              { icon: Shield, title: "Compensation", text: "£2,500 – £8,000+ depending on severity and duration" },
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

        {/* Causes */}
        <section className="pb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-8">
            What Causes Damp and Mould?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {causes.map((c) => (
              <div key={c.title} className="flex items-start gap-4 bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                <div className="w-10 h-10 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Droplets className="h-5 w-5 text-gold-600" />
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 text-sm">{c.title}</h3>
                  <p className="text-navy-500 text-sm mt-0.5">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Health Risks */}
        <section className="pb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-8">
            Health Risks of Damp and Mould
          </h2>
          <div className="bg-red-50 rounded-2xl border border-red-100 p-6 md:p-8">
            <AlertTriangle className="h-8 w-8 text-red-500 mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {healthRisks.map((risk) => (
                <div key={risk} className="flex items-start gap-2 text-sm text-red-800">
                  <span className="font-bold text-red-400 mt-0.5">•</span>
                  {risk}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compensation Table */}
        <section className="pb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">
            Compensation for Damp and Mould
          </h2>
          <p className="text-navy-600 mb-8">
            Compensation depends on severity, duration, and health impact.
          </p>
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-navy-900 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Duration</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Compensation Range</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold hidden md:table-cell">Additional Outcomes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { duration: "3–6 months", range: "£1,000 – £2,500", extra: "Repair order issued" },
                  { duration: "6–12 months", range: "£2,500 – £4,000", extra: "Damp survey + remediation" },
                  { duration: "12–24 months", range: "£4,000 – £6,000", extra: "Full remediation + damages" },
                  { duration: "24+ months", range: "£5,000 – £8,000+", extra: "Full property overhaul" },
                ].map((r, i) => (
                  <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-slate-50/50" : ""}`}>
                    <td className="px-6 py-4 text-sm font-medium text-navy-900">{r.duration}</td>
                    <td className="px-6 py-4"><span className="bg-gold-100 text-gold-700 px-3 py-1 rounded-full text-sm font-semibold">{r.range}</span></td>
                    <td className="px-6 py-4 text-sm text-navy-500 hidden md:table-cell">{r.extra}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Process */}
        <section className="pb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-8">
            Our Claims Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm relative">
                <div className="w-10 h-10 bg-gold-500 text-white rounded-full flex items-center justify-center font-bold text-sm mb-4">{p.step}</div>
                <h3 className="font-bold text-navy-900 mb-2">{p.title}</h3>
                <p className="text-navy-500 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Case Studies */}
        <section className="pb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-8">
            Recent Case Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((c, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold bg-gold-100 text-gold-700 px-3 py-1 rounded-full">{c.type}</span>
                  <span className="text-xs text-navy-400">{c.location}</span>
                </div>
                <p className="text-xl font-extrabold text-gold-600 mb-2">{c.result}</p>
                <p className="text-navy-500 text-sm">Duration of issue: {c.duration}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="pb-16">
          <div className="bg-gold-500 rounded-2xl p-10 md:p-14 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Claim for Damp and Mould Today</h2>
            <p className="text-gold-100 max-w-2xl mx-auto mb-8 text-lg">No Win, No Fee. Free assessment. Get the repairs and compensation you deserve.</p>
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
