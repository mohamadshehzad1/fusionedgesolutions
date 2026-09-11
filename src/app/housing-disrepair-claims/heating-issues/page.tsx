import type { Metadata } from "next";
import Link from "next/link";
import PillarNav, { Breadcrumbs } from "@/components/PillarNav";
import Footer from "@/components/Footer";
import { ArrowRight, Flame, Phone, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Broken Heating & Boiler Claims UK | Housing Disrepair Compensation",
  description:
    "Claim compensation for broken heating, faulty boilers, and no hot water. Council & housing association tenants. No Win, No Fee.",
};

export default function HeatingIssuesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PillarNav />
      <div className="container-custom">
        <Breadcrumbs
          items={[
            { label: "Housing Disrepair Claims", href: "/housing-disrepair-claims" },
            { label: "Heating Issues" },
          ]}
        />

        <section className="py-12 md:py-16 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Flame className="h-4 w-4" />
            Urgent Issue
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-navy-900 leading-tight mb-6">
            Broken Heating &amp; Boiler Claims
          </h1>
          <p className="text-lg text-navy-600 leading-relaxed mb-8">
            A functioning heating system is a legal requirement in UK rental
            properties. If your boiler has broken down, your heating is
            non-functional, or you have no hot water, your landlord must repair
            it promptly. Failure to do so entitles you to compensation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact/quote-form" className="inline-flex items-center gap-2 btn-gold">
              Start Your Heating Claim
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:+443301233309" className="inline-flex items-center gap-2 btn-gold-outline">
              <Phone className="h-4 w-4" />
              Call Free
            </a>
          </div>
        </section>

        <section className="py-12 border-t border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                When Is Your Landlord Responsible?
              </h2>
              <ul className="space-y-3">
                {[
                  "Boiler breakdown or failure",
                  "No hot water supply",
                  "Central heating not working",
                  "Radiator issues throughout the property",
                  "Gas safety hazards (annual Gas Safety Certificate required)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Flame className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                Health Risks of No Heating
              </h2>
              <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
                <AlertTriangle className="h-8 w-8 text-red-500 mb-4" />
                <ul className="space-y-2">
                  {[
                    "Hypothermia risk, especially for children and elderly",
                    "Worsening of respiratory conditions",
                    "Mould growth from cold, damp conditions",
                    "Mental health impacts from living in cold homes",
                    "Risk of carbon monoxide poisoning from unsafe appliances",
                  ].map((risk) => (
                    <li key={risk} className="flex items-start gap-2 text-sm text-red-700">
                      <span className="font-bold">•</span>
                      {risk}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-navy-900 mb-6">
            Compensation for Heating Issues
          </h2>
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-navy-900 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Scenario</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Typical Compensation</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold hidden md:table-cell">Additional Outcomes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { scenario: "Boiler broken (1-3 months, winter)", compensation: "£2,000 - £4,000", outcome: "Emergency repair order" },
                  { scenario: "No heating (3+ months)", compensation: "£3,000 - £5,000", outcome: "New heating system installed" },
                  { scenario: "Recurring boiler issues (12+ months)", compensation: "£4,000 - £6,000", outcome: "Full system replacement + damages" },
                  { scenario: "Gas safety hazard", compensation: "£5,000 - £8,000+", outcome: "Emergency gas inspection + repair" },
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-slate-50/50" : ""}`}>
                    <td className="px-6 py-4 text-sm font-medium text-navy-900">{row.scenario}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gold-100 text-gold-700">
                        {row.compensation}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-navy-500 hidden md:table-cell">{row.outcome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="py-12 mb-12 border-t border-slate-200">
          <div className="bg-gold-500 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Don&apos;t Endure a Cold Home
            </h2>
            <p className="text-gold-100 max-w-2xl mx-auto mb-8">
              UK law requires your landlord to provide working heating. Get a
              free assessment today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact/quote-form" className="inline-flex items-center gap-2 bg-navy-900 text-white font-bold px-8 py-4 rounded-full hover:bg-navy-800 transition-colors">
                Start Your Claim
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:+443301233309" className="inline-flex items-center gap-2 bg-white text-gold-700 font-bold px-8 py-4 rounded-full hover:bg-gold-50 transition-colors">
                <Phone className="h-4 w-4" />
                Call Free
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
