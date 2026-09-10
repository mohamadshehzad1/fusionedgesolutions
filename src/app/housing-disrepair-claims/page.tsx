import type { Metadata } from "next";
import Link from "next/link";
import PillarNav, { Breadcrumbs } from "@/components/PillarNav";
import Footer from "@/components/Footer";
import { WebPageSchema, BreadcrumbSchema } from "@/lib/seo";
import { ArrowRight, Check, Droplets, Flame, HardHat, Bug, Scale, FileText, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Housing Disrepair Claims UK | Council & Housing Association Claims",
  description:
    "Claim compensation for housing disrepair in the UK. Damp, mould, structural damage, broken heating. No Win, No Fee. Free eligibility check for council & housing association tenants.",
  keywords: ["housing disrepair claims", "council tenant claims", "housing association claims", "UK disrepair compensation"],
};

const disrepairTypes = [
  { icon: Droplets, title: "Damp & Mould", href: "/housing-disrepair-claims/damp-mould", description: "Toxic black mould, penetrating damp, and condensation issues caused by landlord neglect." },
  { icon: Flame, title: "Heating Issues", href: "/housing-disrepair-claims/heating-issues", description: "Broken boilers, faulty heating systems, and lack of hot water supply." },
  { icon: HardHat, title: "Structural Faults", href: "/housing-disrepair-claims/structural-faults", description: "Cracked walls, leaking roofs, damaged windows, and structural defects." },
  { icon: Bug, title: "Pest Infestations", href: "/housing-disrepair-claims/pest-infestations", description: "Cockroaches, rats, mice, and other pests due to structural failures." },
];

const compensationTable = [
  { issue: "Damp & Mould (12+ months)", range: "£2,500 - £6,000", notes: "Plus urgent remediation order" },
  { issue: "Broken Heating (3+ months in winter)", range: "£2,000 - £5,000", notes: "Plus emergency heating installation" },
  { issue: "Structural Damage (6+ months)", range: "£3,000 - £10,000", notes: "Plus full property survey" },
  { issue: "Pest Infestation (1+ months)", range: "£1,000 - £3,000", notes: "Plus pest control & proofing" },
  { issue: "Water Leaks (Ongoing)", range: "£1,500 - £4,000", notes: "Plus plumbing repairs" },
];

export default function PillarPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <WebPageSchema title="Housing Disrepair Claims UK" description="Claim compensation for housing disrepair in the UK." path="/housing-disrepair-claims" />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Housing Disrepair Claims", url: "/housing-disrepair-claims" },
      ]} />
      <PillarNav />

      <div className="container-custom">
        <Breadcrumbs
          items={[{ label: "Housing Disrepair Claims" }]}
        />

        {/* Hero */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-extrabold text-navy-900 leading-tight mb-6">
              Housing Disrepair Claims
            </h1>
            <p className="text-lg md:text-xl text-navy-600 leading-relaxed mb-8">
              If you are a council tenant, housing association tenant, or private
              renter living with disrepair that your landlord has failed to fix,
              you may be entitled to compensation. UK housing law places a legal
              obligation on landlords to maintain properties in a habitable
              condition.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/housing-disrepair-claims/compensation-calculator"
                className="inline-flex items-center gap-2 btn-gold"
              >
                Check Compensation Estimate
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:+441618182458" className="inline-flex items-center gap-2 btn-gold-outline">
                <Phone className="h-4 w-4" />
                Call Free: 0161 818 2458
              </a>
            </div>
          </div>
        </section>

        {/* Types of Disrepair */}
        <section className="py-12 border-t border-slate-200">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-8">
            Types of Housing Disrepair
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {disrepairTypes.map((type) => {
              const Icon = type.icon;
              return (
                <Link
                  key={type.title}
                  href={type.href}
                  className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-100 hover:shadow-lg hover:border-gold-200 transition-all group"
                >
                  <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6 text-gold-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900 mb-1 group-hover:text-gold-600 transition-colors">
                      {type.title}
                    </h3>
                    <p className="text-navy-500 text-sm">{type.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Compensation Table */}
        <section className="py-12 border-t border-slate-200">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">
            Compensation Estimates by Issue
          </h2>
          <p className="text-navy-600 mb-8 max-w-3xl">
            Compensation amounts depend on the severity, duration, and health
            impact of the disrepair. Below are typical ranges from previous
            claims.
          </p>
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-navy-900 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Disrepair Issue</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Compensation Range</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold hidden md:table-cell">Additional Outcome</th>
                </tr>
              </thead>
              <tbody>
                {compensationTable.map((row, i) => (
                  <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-slate-50/50" : ""}`}>
                    <td className="px-6 py-4 text-sm font-medium text-navy-900">{row.issue}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gold-100 text-gold-700">
                        {row.range}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-navy-500 hidden md:table-cell">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-navy-400 mt-4">
            *Figures are illustrative based on previous claim outcomes. Actual amounts vary by individual circumstances.
          </p>
        </section>

        {/* Legal Framework */}
        <section className="py-12 border-t border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">
                Your Legal Rights
              </h2>
              <p className="text-navy-600 mb-6 leading-relaxed">
                UK housing law provides strong protections for tenants. Your
                landlord has a legal duty to maintain your property. When they
                fail, you have the right to claim compensation and force repairs.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Homes (Fitness for Human Habitation) Act 2018",
                  "Section 11 Landlord and Tenant Act 1985",
                  "Environmental Protection Act 1990 (Statutory Nuisance)",
                  "Awaab's Law (Social Housing Regulation Act 2023)",
                  "Housing Act 2004 (Housing Health and Safety Rating System)",
                ].map((law) => (
                  <li key={law} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700 text-sm font-medium">{law}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/housing-disrepair-claims/fitness-for-human-habitation-act"
                className="inline-flex items-center gap-2 text-gold-600 font-semibold hover:gap-3 transition-all"
              >
                Learn more about your legal rights
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-navy-900 mb-4">
                Quick Eligibility Check
              </h3>
              <p className="text-navy-500 text-sm mb-6">
                Answer a few questions to find out if you qualify.
              </p>
              <div className="space-y-3">
                {[
                  "Are you a council or housing association tenant?",
                  "Do you have damp, mould, structural damage, or broken heating?",
                  "Have you reported the issue to your landlord?",
                  "Has the issue been unresolved for over 21 days?",
                ].map((q, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                    <Check className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700 text-sm">{q}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact/quote-form"
                className="block mt-6 btn-gold text-center"
              >
                Start Your Claim
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 mb-12">
          <div className="bg-gold-500 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Don&apos;t Suffer in Silence
            </h2>
            <p className="text-gold-100 max-w-2xl mx-auto mb-8">
              UK law is on your side. Get a free assessment and find out if you
              qualify for compensation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact/quote-form" className="inline-flex items-center gap-2 bg-navy-900 text-white font-bold px-8 py-4 rounded-full hover:bg-navy-800 transition-colors">
                Start Your Housing Claim
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:+441618182458" className="inline-flex items-center gap-2 bg-white text-gold-700 font-bold px-8 py-4 rounded-full hover:bg-gold-50 transition-colors">
                <Phone className="h-4 w-4" />
                Call Free: 0161 818 2458
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
