import type { Metadata } from "next";
import Link from "next/link";
import PillarNav, { Breadcrumbs } from "@/components/PillarNav";
import Footer from "@/components/Footer";
import { ArrowRight, HardHat, Phone, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Structural Damage Housing Disrepair Claims UK | Compensation Guide",
  description:
    "Claim compensation for structural damage in rented property. Cracked walls, leaking roofs, damaged windows. Council & housing association tenants. No Win, No Fee.",
};

export default function StructuralFaultsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PillarNav />
      <div className="container-custom">
        <Breadcrumbs
          items={[
            { label: "Housing Disrepair Claims", href: "/housing-disrepair-claims" },
            { label: "Structural Faults" },
          ]}
        />

        <section className="py-12 md:py-16 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <HardHat className="h-4 w-4" />
            Serious Issue
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-navy-900 leading-tight mb-6">
            Structural Damage Housing Disrepair Claims
          </h1>
          <p className="text-lg text-navy-600 leading-relaxed mb-8">
            Structural damage including cracked walls, leaking roofs, damaged
            windows, and subsidence can pose serious safety risks. Your landlord
            has a legal duty to maintain the structural integrity of your
            property. Failure to do so entitles you to substantial compensation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact/quote-form" className="inline-flex items-center gap-2 btn-gold">
              Start Your Structural Claim
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:+441618182458" className="inline-flex items-center gap-2 btn-gold-outline">
              <Phone className="h-4 w-4" />
              Call Free
            </a>
          </div>
        </section>

        <section className="py-12 border-t border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                Types of Structural Damage
              </h2>
              <ul className="space-y-3">
                {[
                  "Cracked or crumbling walls (internal and external)",
                  "Leaking or damaged roofing",
                  "Broken or rotting window frames",
                  "Subsidence or foundation issues",
                  "Damaged or missing brickwork",
                  "Sagging floors or ceiling issues",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <HardHat className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                Safety Risks
              </h2>
              <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                <AlertTriangle className="h-8 w-8 text-amber-500 mb-4" />
                <ul className="space-y-2">
                  {[
                    "Falling debris or structural collapse risk",
                    "Water ingress leading to mould and damp",
                    "Cold draughts and poor insulation",
                    "Pest entry points through damaged structures",
                    "Electrical hazards from water-damaged wiring",
                  ].map((risk) => (
                    <li key={risk} className="flex items-start gap-2 text-sm text-amber-700">
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
            Compensation for Structural Damage
          </h2>
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-navy-900 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Issue</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Typical Compensation</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold hidden md:table-cell">Additional Outcomes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { issue: "Cracked Walls (6+ months)", compensation: "£3,000 - £6,000", outcome: "Full structural survey + repairs" },
                  { issue: "Leaking Roof (12+ months)", compensation: "£4,000 - £10,000", outcome: "Roof replacement + insulation" },
                  { issue: "Broken Windows (3+ months)", compensation: "£1,500 - £3,500", outcome: "New window installation" },
                  { issue: "Subsidence Issues", compensation: "£5,000 - £10,000+", outcome: "Underpinning + full remediation" },
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-slate-50/50" : ""}`}>
                    <td className="px-6 py-4 text-sm font-medium text-navy-900">{row.issue}</td>
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
              Structural Damage? Claim Now
            </h2>
            <p className="text-gold-100 max-w-2xl mx-auto mb-8">
              Don&apos;t live with dangerous structural issues. Your landlord must
              fix them. Get compensated.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact/quote-form" className="inline-flex items-center gap-2 bg-navy-900 text-white font-bold px-8 py-4 rounded-full hover:bg-navy-800 transition-colors">
                Start Your Claim
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:+441618182458" className="inline-flex items-center gap-2 bg-white text-gold-700 font-bold px-8 py-4 rounded-full hover:bg-gold-50 transition-colors">
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
