import type { Metadata } from "next";
import Link from "next/link";
import PillarNav, { Breadcrumbs } from "@/components/PillarNav";
import Footer from "@/components/Footer";
import { ArrowRight, Check, Droplets, Phone, AlertTriangle, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Damp & Mould Housing Disrepair Claims UK | Compensation Guide",
  description:
    "Claim compensation for damp and toxic black mould in your home. Council & housing association tenants. No Win, No Fee. Expert legal help.",
};

const causes = [
  "Poor ventilation in kitchens and bathrooms",
  "Leaking roofs, pipes, or gutters",
  "Rising damp from failed damp-proof course",
  "Penetrating damp from cracked walls or windows",
  "Condensation due to inadequate heating",
];

const healthRisks = [
  "Chronic respiratory conditions (asthma, bronchitis)",
  "Allergic reactions and skin irritation",
  "Weakened immune system, especially in children",
  "Mental health impacts (anxiety, depression)",
  "Exacerbation of existing health conditions",
];

export default function DampMouldPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PillarNav />
      <div className="container-custom">
        <Breadcrumbs
          items={[
            { label: "Housing Disrepair Claims", href: "/housing-disrepair-claims" },
            { label: "Damp & Mould" },
          ]}
        />

        <section className="py-12 md:py-16 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <AlertTriangle className="h-4 w-4" />
            Health Hazard
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-navy-900 leading-tight mb-6">
            Damp &amp; Mould Housing Disrepair Claims
          </h1>
          <p className="text-lg text-navy-600 leading-relaxed mb-8">
            Toxic black mould and persistent damp are among the most common and
            dangerous forms of housing disrepair in the UK. According to
            Shelter, damp and mould affect hundreds of thousands of social
            housing tenants. If your landlord has failed to address these issues,
            you are entitled to compensation and urgent repairs.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact/quote-form" className="inline-flex items-center gap-2 btn-gold">
              Start Your Damp & Mould Claim
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:08001234567" className="inline-flex items-center gap-2 btn-gold-outline">
              <Phone className="h-4 w-4" />
              Call Free
            </a>
          </div>
        </section>

        <section className="py-12 border-t border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                What Causes Damp &amp; Mould?
              </h2>
              <p className="text-navy-600 mb-6">
                Your landlord is responsible for addressing structural causes of
                damp. Common causes include:
              </p>
              <ul className="space-y-3">
                {causes.map((cause) => (
                  <li key={cause} className="flex items-start gap-3">
                    <Droplets className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">{cause}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                Health Risks of Damp &amp; Mould
              </h2>
              <p className="text-navy-600 mb-6">
                Living with damp and mould can have serious health consequences,
                particularly for children, elderly tenants, and those with
                pre-existing conditions:
              </p>
              <ul className="space-y-3">
                {healthRisks.map((risk) => (
                  <li key={risk} className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">{risk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-12 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-navy-900 mb-6">
            Compensation for Damp &amp; Mould
          </h2>
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-navy-900 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Duration of Issue</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Typical Compensation</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold hidden md:table-cell">Additional Outcomes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { duration: "3-6 months", compensation: "£1,000 - £2,500", outcome: "Repair order issued" },
                  { duration: "6-12 months", compensation: "£2,500 - £4,000", outcome: "Full damp survey ordered" },
                  { duration: "12-24 months", compensation: "£4,000 - £6,000", outcome: "Urgent remediation + damages" },
                  { duration: "24+ months", compensation: "£5,000 - £8,000+", outcome: "Full property remediation" },
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-slate-50/50" : ""}`}>
                    <td className="px-6 py-4 text-sm font-medium text-navy-900">{row.duration}</td>
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
              Claim for Damp &amp; Mould Today
            </h2>
            <p className="text-gold-100 max-w-2xl mx-auto mb-8">
              No Win, No Fee. Free eligibility check. Get the repairs and
              compensation you deserve.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact/quote-form" className="inline-flex items-center gap-2 bg-navy-900 text-white font-bold px-8 py-4 rounded-full hover:bg-navy-800 transition-colors">
                Start Your Claim
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:08001234567" className="inline-flex items-center gap-2 bg-white text-gold-700 font-bold px-8 py-4 rounded-full hover:bg-gold-50 transition-colors">
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
