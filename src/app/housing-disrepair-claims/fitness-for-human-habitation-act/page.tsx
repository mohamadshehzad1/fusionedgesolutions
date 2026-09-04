import type { Metadata } from "next";
import Link from "next/link";
import PillarNav, { Breadcrumbs } from "@/components/PillarNav";
import Footer from "@/components/Footer";
import { ArrowRight, Scale, Phone, Check, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Housing Disrepair Legal Rights UK | Fitness for Human Habitation Act",
  description:
    "Understand your legal rights for housing disrepair in the UK. Homes (Fitness for Human Habitation) Act, Section 11 LTA, Awaab's Law. Expert guide.",
};

const laws = [
  {
    title: "Homes (Fitness for Human Habitation) Act 2018",
    description:
      "Requires landlords to ensure properties are fit for human habitation throughout the tenancy. Covers 29 hazards including damp, mould, structural issues, and hazards under the Housing Health and Safety Rating System (HHSRS).",
    section: "Sections 9A-10, Landlord and Tenant Act 1985",
  },
  {
    title: "Section 11, Landlord and Tenant Act 1985",
    description:
      "Imposes an implied covenant on landlords to keep in repair and proper working order installations for space heating, water heating, sanitation, and supply of water, gas, and electricity.",
    section: "Section 11",
  },
  {
    title: "Environmental Protection Act 1990",
    description:
      "Provides for statutory nuisance claims where disrepair constitutes a nuisance or is prejudicial to health. Local authorities have a duty to inspect and serve abatement notices.",
    section: "Sections 79-82",
  },
  {
    title: "Awaab's Law (Social Housing Regulation Act 2023)",
    description:
      "Following the tragic death of Awaab Ishak, this law requires social housing landlords to investigate and fix hazards within strict timeframes. Emergency hazards must be addressed within 24 hours.",
    section: "Social Housing (Regulation) Act 2023",
  },
  {
    title: "Housing Act 2004",
    description:
      "Introduced the Housing Health and Safety Rating System (HHSRS) replacing the old fitness standard. Local authorities can issue Improvement Notices and Emergency Remedial Actions.",
    section: "Parts 1-4",
  },
];

export default function FitnessForHumanHabitationPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PillarNav />
      <div className="container-custom">
        <Breadcrumbs
          items={[
            { label: "Housing Disrepair Claims", href: "/housing-disrepair-claims" },
            { label: "Your Legal Rights" },
          ]}
        />

        <section className="py-12 md:py-16 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <BookOpen className="h-4 w-4" />
            Legal Guide
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-navy-900 leading-tight mb-6">
            Your Legal Rights for Housing Disrepair
          </h1>
          <p className="text-lg text-navy-600 leading-relaxed mb-8">
            UK housing law provides robust protections for tenants. Understanding
            your legal rights is the first step to claiming the compensation and
            repairs you deserve.
          </p>
        </section>

        <section className="py-12 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-navy-900 mb-8">
            Key Legislation
          </h2>
          <div className="space-y-6">
            {laws.map((law) => (
              <div
                key={law.title}
                className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Scale className="h-6 w-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy-900 mb-1">
                      {law.title}
                    </h3>
                    <p className="text-xs text-gold-600 font-medium mb-2">
                      {law.section}
                    </p>
                    <p className="text-navy-600 text-sm leading-relaxed">
                      {law.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-navy-900 mb-6">
            What Your Landlord Must Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Maintain the structure and exterior of the property",
              "Keep installations for heating, water, and sanitation in working order",
              "Address hazards identified under HHSRS within required timeframes",
              "Fix reported disrepair within a reasonable period",
              "Provide a gas safety certificate annually",
              "Ensure the property meets the Decent Homes Standard",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100"
              >
                <Check className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <span className="text-navy-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 mb-12 border-t border-slate-200">
          <div className="bg-gold-500 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Know Your Rights? Now Claim Them
            </h2>
            <p className="text-gold-100 max-w-2xl mx-auto mb-8">
              The law is on your side. Let our expert solicitors enforce your
              rights and get you the compensation you deserve.
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
