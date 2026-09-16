import type { Metadata } from "next";
import Link from "next/link";
import PillarNav, { Breadcrumbs } from "@/components/PillarNav";
import Footer from "@/components/Footer";
import { ArrowRight, Bug, Phone, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Pest Infestation Housing Disrepair Claims UK | Compensation Guide",
  description:
    "Claim compensation for pest infestations in rented property. Cockroaches, rats, mice. Council & housing association tenants. No Win, No Fee.",
};

export default function PestInfestationsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PillarNav />
      <div className="container-custom">
        <Breadcrumbs
          items={[
            { label: "Housing Disrepair Claims", href: "/housing-disrepair-claims" },
            { label: "Pest Infestations" },
          ]}
        />

        <section className="py-12 md:py-16 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Bug className="h-4 w-4" />
            Health Hazard
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-navy-900 leading-tight mb-6">
            Pest Infestation Housing Disrepair Claims
          </h1>
          <p className="text-lg text-navy-600 leading-relaxed mb-8">
            Pest infestations in rented property are often caused by structural
            defects such as gaps in walls, broken drain covers, or damaged
            roofing. When your landlord fails to address these issues, they are
            liable for the resulting pest problem and any compensation you are
            owed.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact/quote-form" className="inline-flex items-center gap-2 btn-gold">
              Start Your Pest Claim
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:+441612437500" className="inline-flex items-center gap-2 btn-gold-outline">
              <Phone className="h-4 w-4" />
              Call Free
            </a>
          </div>
        </section>

        <section className="py-12 border-t border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                Common Pest Issues in Rented Property
              </h2>
              <ul className="space-y-3">
                {[
                  "Rat and mouse infestations (broken drains, gaps in walls)",
                  "Cockroach infestations (structural defects, shared drainage)",
                  "Flea infestations (from neighbouring properties)",
                  "Bed bug infestations (particularly in blocks of flats)",
                  "Bird or squirrel ingress through damaged roofing",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Bug className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                Health &amp; Safety Risks
              </h2>
              <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
                <AlertTriangle className="h-8 w-8 text-purple-500 mb-4" />
                <ul className="space-y-2">
                  {[
                    "Disease transmission (Weil's disease from rats, salmonella from cockroaches)",
                    "Allergic reactions and asthma triggers",
                    "Bites and physical injury",
                    "Contamination of food preparation areas",
                    "Significant distress and impact on quality of life",
                  ].map((risk) => (
                    <li key={risk} className="flex items-start gap-2 text-sm text-purple-700">
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
            Compensation for Pest Infestations
          </h2>
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-navy-900 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Pest Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Typical Compensation</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold hidden md:table-cell">Additional Outcomes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { pest: "Rat / Mouse Infestation", compensation: "£2,000 - £4,000", outcome: "Full pest control + proofing" },
                  { pest: "Cockroach Infestation", compensation: "£1,500 - £3,000", outcome: "Pest treatment + structural repairs" },
                  { pest: "Bed Bug Infestation", compensation: "£1,000 - £2,500", outcome: "Professional treatment + inspection" },
                  { pest: "Persistent Recurring Infestation", compensation: "£2,500 - £5,000+", outcome: "Full property survey + remediation" },
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-slate-50/50" : ""}`}>
                    <td className="px-6 py-4 text-sm font-medium text-navy-900">{row.pest}</td>
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
              Get Rid of Your Pest Problem
            </h2>
            <p className="text-gold-100 max-w-2xl mx-auto mb-8">
              Your landlord is responsible for structural issues causing pest
              infestations. Claim today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact/quote-form" className="inline-flex items-center gap-2 bg-navy-900 text-white font-bold px-8 py-4 rounded-full hover:bg-navy-800 transition-colors">
                Start Your Claim
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:+441612437500" className="inline-flex items-center gap-2 bg-white text-gold-700 font-bold px-8 py-4 rounded-full hover:bg-gold-50 transition-colors">
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
