import type { Metadata } from "next";
import Link from "next/link";
import PillarNav, { Breadcrumbs } from "@/components/PillarNav";
import Footer from "@/components/Footer";
import { WebPageSchema, BreadcrumbSchema } from "@/lib/seo";
import { Shield, Phone, Scale, Users, Award, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Fusion Edge Solutions - Housing Disrepair Solicitors",
  description:
    "Meet the team at Fusion Edge Solutions. Expert housing disrepair solicitors fighting for UK tenants' rights. No Win, No Fee.",
};

const team = [
  {
    name: "Rebecca Hartley",
    role: "Managing Director",
    bio: "Over 15 years of experience in housing law and tenant rights. Previously led the housing disrepair department at a top-100 UK law firm.",
  },
  {
    name: "David Okonkwo",
    role: "Head of Claims",
    bio: "Specialises in complex housing disrepair cases involving multiple disrepair issues. Has recovered over £5M in compensation for tenants.",
  },
  {
    name: "Sarah Mitchell",
    role: "Senior Solicitor",
    bio: "Expert in Environmental Health law and landlord compliance. Regular contributor to Shelter legal guidance publications.",
  },
];

const values = [
  { icon: Scale, title: "Justice", description: "We believe every tenant deserves a safe, habitable home." },
  { icon: Users, title: "Accessibility", description: "Our No Win, No Fee model ensures everyone can access justice." },
  { icon: Award, title: "Excellence", description: "We pursue the maximum compensation and best outcomes for every client." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <WebPageSchema title="About Us" description="Meet the team at Fusion Edge Solutions." path="/about-us/attorneys" />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "About Us", url: "/about-us/attorneys" },
      ]} />
      <PillarNav />
      <div className="container-custom">
        <Breadcrumbs items={[{ label: "About Us" }]} />

        <section className="py-12 md:py-16 max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-extrabold text-navy-900 leading-tight mb-6">
            About Fusion Edge Solutions
          </h1>
          <p className="text-lg text-navy-600 leading-relaxed mb-8">
            We are dedicated to helping UK social housing tenants get the repairs
            and compensation they deserve. Our panel of expert solicitors
            specialises in housing disrepair claims against councils and housing
            associations.
          </p>
        </section>

        <section className="py-12 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-navy-900 mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm text-center">
                  <div className="w-14 h-14 bg-gold-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-7 w-7 text-gold-600" />
                  </div>
                  <h3 className="font-bold text-navy-900 mb-2">{value.title}</h3>
                  <p className="text-navy-500 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="py-12 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-navy-900 mb-8">Our Panel Solicitors</h2>
          <div className="space-y-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex items-start gap-4">
                <div className="w-14 h-14 bg-navy-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-7 w-7 text-navy-500" />
                </div>
                <div>
                  <h3 className="font-bold text-navy-900">{member.name}</h3>
                  <p className="text-gold-600 text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-navy-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-navy-400 mt-6">
            *Names and biographies are representative. Your claim will be handled by a solicitor from our regulated panel.
          </p>
        </section>

        <section className="py-12 mb-12 border-t border-slate-200">
          <div className="bg-gold-500 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Claim?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact/quote-form" className="inline-flex items-center gap-2 bg-navy-900 text-white font-bold px-8 py-4 rounded-full hover:bg-navy-800 transition-colors">
                Free Assessment
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
