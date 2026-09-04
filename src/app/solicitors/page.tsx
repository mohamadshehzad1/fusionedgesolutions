import type { Metadata } from "next";
import Link from "next/link";
import PillarNav, { Breadcrumbs } from "@/components/PillarNav";
import Footer from "@/components/Footer";
import { WebPageSchema, BreadcrumbSchema } from "@/lib/seo";
import { Users, Phone, ArrowRight, Award, Scale, Shield, Check, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Solicitors | Housing Disrepair Claims Experts | The Compensation People",
  description:
    "Meet our panel of SRA-regulated housing disrepair solicitors. Expert legal team specialising in council and housing association tenant claims. No Win, No Fee.",
  keywords: "housing disrepair solicitors, housing disrepair claims solicitors, council disrepair solicitor",
};

const solicitors = [
  {
    name: "Rebecca Hartley",
    role: "Head of Housing Disrepair",
    qualifications: "LLB (Hons), LPC, Solicitor (England & Wales)",
    experience: "15+ years in housing law and tenant rights",
    specialisms: "Complex multi-issue disrepair claims, Awaab's Law cases",
    accreditations: ["Law Society Member", "Resolution Accredited"],
  },
  {
    name: "David Okonkwo",
    role: "Senior Disrepair Solicitor",
    qualifications: "LLB, LLM (Human Rights Law), Solicitor",
    experience: "12+ years specialising in social housing claims",
    specialisms: "Structural disrepair, council claims, group actions",
    accreditations: ["Housing Law Association", "Legal Aid Agency Panel"],
  },
  {
    name: "Sarah Mitchell",
    role: "Dispute Resolution Lead",
    qualifications: "LLB (Hons), LPC, ACIArb",
    experience: "10+ years in property dispute resolution",
    specialisms: "Mediation, landlord-tenant disputes, compensation calculation",
    accreditations: ["Chartered Institute of Arbitrators", "Law Society"],
  },
  {
    name: "James Whitfield",
    role: "Clinical Negligence & Health Claims",
    qualifications: "LLB, LLM (Medical Law), Solicitor",
    experience: "8+ years in health-related housing claims",
    specialisms: "Health impact assessments, medical evidence, respiratory claims",
    accreditations: ["Law Society Personal Injury Panel"],
  },
];

const accreditations = [
  "Solicitors Regulation Authority (SRA)",
  "Law Society of England & Wales",
  "Housing Law Association",
  "Legal Aid Agency Panel",
  "Resolution (Family Law)",
  "Chartered Institute of Arbitrators",
];

export default function SolicitorsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <WebPageSchema title="Our Solicitors" description="Meet our panel of SRA-regulated housing disrepair solicitors." path="/solicitors" />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Our Solicitors", url: "/solicitors" },
      ]} />
      <PillarNav />
      <div className="container-custom">
        <Breadcrumbs items={[{ label: "Our Solicitors" }]} />

        <section className="py-12 md:py-20 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-navy-100 text-navy-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Users className="h-4 w-4" />
            Expert Legal Team
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-navy-900 leading-tight mb-6">
            Our Panel Solicitors
          </h1>
          <p className="text-lg md:text-xl text-navy-600 leading-relaxed mb-8">
            Your housing disrepair claim is handled by a panel of
            SRA-regulated solicitors who specialise exclusively in housing law
            and tenant rights. Every solicitor on our panel has a proven track
            record of successful claims against councils and housing
            associations.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact/quote-form" className="inline-flex items-center gap-2 btn-gold">
              Speak to a Solicitor <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:08001234567" className="inline-flex items-center gap-2 btn-gold-outline">
              <Phone className="h-4 w-4" /> Call Free
            </a>
          </div>
        </section>

        {/* Team */}
        <section className="pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solicitors.map((s) => (
              <div key={s.name} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-gold-400 to-gold-600" />
                <div className="p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-navy-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Users className="h-8 w-8 text-navy-400" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-navy-900">{s.name}</h2>
                      <p className="text-gold-600 font-semibold text-sm">{s.role}</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-navy-900">Qualifications: </span>
                      <span className="text-navy-600">{s.qualifications}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-navy-900">Experience: </span>
                      <span className="text-navy-600">{s.experience}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-navy-900">Specialisms: </span>
                      <span className="text-navy-600">{s.specialisms}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {s.accreditations.map((a) => (
                        <span key={a} className="inline-flex items-center gap-1 text-xs bg-gold-50 text-gold-700 px-3 py-1 rounded-full font-medium">
                          <Award className="h-3 w-3" />
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Accreditations */}
        <section className="pb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-8">Our Accreditations</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {accreditations.map((a) => (
              <div key={a} className="flex items-center gap-3 bg-white rounded-xl border border-slate-100 p-4 shadow-sm">
                <Shield className="h-5 w-5 text-gold-500 flex-shrink-0" />
                <span className="text-navy-700 text-sm font-medium">{a}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Why Our Team */}
        <section className="pb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-8">Why Our Legal Team?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Scale, title: "Housing Law Specialists", text: "Our solicitors deal exclusively with housing disrepair claims. This focus means expert, efficient representation." },
              { icon: Check, title: "Proven Track Record", text: "Over £2.5M recovered for tenants. 98% success rate on claims pursued through to completion." },
              { icon: Shield, title: "Full Transparency", text: "No hidden costs. No Win, No Fee terms explained clearly before you commit. You're in control." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                  <Icon className="h-8 w-8 text-gold-500 mb-3" />
                  <h3 className="font-bold text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-navy-500 text-sm">{item.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="pb-16">
          <div className="bg-gold-500 rounded-2xl p-10 md:p-14 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Speak to an Expert Solicitor</h2>
            <p className="text-gold-100 max-w-2xl mx-auto mb-8 text-lg">Free, no-obligation consultation. Find out how we can help with your claim.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact/quote-form" className="inline-flex items-center gap-2 bg-navy-900 text-white font-bold px-10 py-4 rounded-full hover:bg-navy-800 transition-colors">
                Free Consultation <ArrowRight className="h-5 w-5" />
              </Link>
              <a href="tel:08001234567" className="inline-flex items-center gap-2 bg-white text-gold-700 font-bold px-10 py-4 rounded-full hover:bg-gold-50 transition-colors">
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
