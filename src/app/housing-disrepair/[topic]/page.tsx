import type { Metadata } from "next";
import Link from "next/link";
import PillarNav, { Breadcrumbs } from "@/components/PillarNav";
import Footer from "@/components/Footer";
import { WebPageSchema, BreadcrumbSchema, generatePageMetadata } from "@/lib/seo";
import { ArrowRight, Phone, Droplets, Flame, HardHat, Bug, Droplet, Zap } from "lucide-react";

const topics: Record<string, {
  title: string;
  description: string;
  keywords: string[];
  icon: React.ElementType;
  heroColor: string;
  services: { label: string; href: string }[];
}> = {
  "damp-mould": {
    title: "Damp and Mould Housing Disrepair Claims | UK Compensation Solicitors",
    description:
      "Claim compensation for damp and toxic black mould. Expert housing disrepair solicitors for council and housing association tenants. No Win, No Fee.",
    keywords: ["damp mould compensation", "black mould claim UK", "mould damage compensation"],
    icon: Droplets,
    heroColor: "bg-blue-50 text-blue-600",
    services: [
      { label: "Damp & Mould Claims", href: "/services/damp-and-mould-claims" },
      { label: "Compensation Calculator", href: "/compensation-calculator" },
      { label: "Your Legal Rights", href: "/housing-disrepair-claims/fitness-for-human-habitation-act" },
    ],
  },
  heating: {
    title: "Heating and Boiler Housing Disrepair Claims | UK Compensation",
    description:
      "Claim compensation for broken heating, faulty boilers, and no hot water. Expert housing disrepair solicitors. No Win, No Fee.",
    keywords: ["broken heating claim", "boiler repair compensation", "no heating housing disrepair"],
    icon: Flame,
    heroColor: "bg-orange-50 text-orange-600",
    services: [
      { label: "Heating & Boiler Claims", href: "/services/heating-and-boiler-claims" },
      { label: "Compensation Calculator", href: "/compensation-calculator" },
      { label: "FAQ", href: "/housing-disrepair-claims/faq" },
    ],
  },
  structural: {
    title: "Structural Disrepair Housing Claims | UK Compensation Solicitors",
    description:
      "Claim compensation for cracked walls, leaking roofs, and structural damage. Expert housing disrepair solicitors. No Win, No Fee.",
    keywords: ["structural disrepair claims", "cracked walls claim", "leaking roof compensation"],
    icon: HardHat,
    heroColor: "bg-amber-50 text-amber-600",
    services: [
      { label: "Structural Disrepair Claims", href: "/services/structural-disrepair-claims" },
      { label: "Compensation Calculator", href: "/compensation-calculator" },
      { label: "Your Legal Rights", href: "/housing-disrepair-claims/fitness-for-human-habitation-act" },
    ],
  },
  pests: {
    title: "Pest Infestation Housing Disrepair Claims | UK Compensation",
    description:
      "Claim compensation for rat, cockroach, and pest infestations in rented property. Expert housing disrepair solicitors. No Win, No Fee.",
    keywords: ["pest infestation claim", "rat infestation compensation", "cockroach claim housing"],
    icon: Bug,
    heroColor: "bg-purple-50 text-purple-600",
    services: [
      { label: "Pest Infestation Claims", href: "/services/pest-infestation-claims" },
      { label: "Compensation Calculator", href: "/compensation-calculator" },
      { label: "FAQ", href: "/housing-disrepair-claims/faq" },
    ],
  },
  "water-leaks": {
    title: "Water Leaks and Plumbing Housing Claims | UK Compensation",
    description:
      "Claim compensation for water leaks, plumbing failures, and drainage issues. Expert housing disrepair solicitors. No Win, No Fee.",
    keywords: ["water leak claim", "plumbing compensation", "drainage disrepair"],
    icon: Droplet,
    heroColor: "bg-cyan-50 text-cyan-600",
    services: [
      { label: "Water Leaks Claims", href: "/services/water-leaks-and-plumbing-claims" },
      { label: "Compensation Calculator", href: "/compensation-calculator" },
      { label: "FAQ", href: "/housing-disrepair-claims/faq" },
    ],
  },
  electrical: {
    title: "Electrical Hazards Housing Disrepair Claims | UK Compensation",
    description:
      "Claim compensation for electrical hazards, exposed wiring, and faulty electrics. Expert housing disrepair solicitors. No Win, No Fee.",
    keywords: ["electrical hazard claim", "faulty wiring compensation", "electrical disrepair housing"],
    icon: Zap,
    heroColor: "bg-red-50 text-red-600",
    services: [
      { label: "Electrical Hazards Claims", href: "/services/electrical-hazards-claims" },
      { label: "Compensation Calculator", href: "/compensation-calculator" },
      { label: "Emergency Call", href: "tel:+441612437500" },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(topics).map((topic) => ({ topic }));
}

export function generateMetadata({ params }: { params: { topic: string } }): Metadata {
  const topic = topics[params.topic];
  if (!topic) return {};
  return generatePageMetadata({
    title: topic.title,
    description: topic.description,
    keywords: topic.keywords,
    path: `/housing-disrepair/${params.topic}`,
  });
}

export default function TopicPage({ params }: { params: { topic: string } }) {
  const topic = topics[params.topic];
  if (!topic) {
    return (
      <main className="min-h-screen bg-slate-50">
        <PillarNav />
        <div className="container-custom py-24 text-center">
          <h1 className="text-3xl font-bold text-navy-900 mb-4">Page Not Found</h1>
          <Link href="/housing-disrepair-claims" className="btn-gold">Back to Claims</Link>
        </div>
        <Footer />
      </main>
    );
  }

  const Icon = topic.icon;

  return (
    <main className="min-h-screen bg-slate-50">
      <WebPageSchema title={topic.title} description={topic.description} path={`/housing-disrepair/${params.topic}`} />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Housing Disrepair", url: "/housing-disrepair-claims" },
        { name: topic.title.split("|")[0].trim(), url: `/housing-disrepair/${params.topic}` },
      ]} />

      <PillarNav />
      <div className="container-custom">
        <Breadcrumbs items={[
          { label: "Housing Disrepair", href: "/housing-disrepair-claims" },
          { label: topic.title.split("|")[0].trim() },
        ]} />

        <section className="py-12 md:py-20 max-w-4xl">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 ${topic.heroColor}`}>
            <Icon className="h-4 w-4" />
            Housing Disrepair Guide
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-navy-900 leading-tight mb-6">
            {topic.title.split("|")[0].trim()}
          </h1>
          <p className="text-lg md:text-xl text-navy-600 leading-relaxed mb-8">
            {topic.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact/quote-form" className="inline-flex items-center gap-2 btn-gold">
              Start Your Claim <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:+441612437500" className="inline-flex items-center gap-2 btn-gold-outline">
              <Phone className="h-4 w-4" /> Call Free: 0161 243 7500
            </a>
          </div>
        </section>

        <section className="pb-16">
          <h2 className="text-2xl font-bold text-navy-900 mb-6">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {topic.services.map((s) => (
              <Link key={s.href} href={s.href} className="flex items-center gap-3 bg-white rounded-xl border border-slate-100 p-5 shadow-sm hover:shadow-md hover:border-gold-200 transition-all group">
                <div className="w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center group-hover:bg-gold-500 transition-colors">
                  <ArrowRight className="h-4 w-4 text-gold-600 group-hover:text-white" />
                </div>
                <span className="font-semibold text-navy-900 group-hover:text-gold-600 transition-colors">{s.label}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="pb-16">
          <div className="bg-gold-500 rounded-2xl p-10 md:p-14 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help with Your Claim?</h2>
            <p className="text-gold-100 max-w-2xl mx-auto mb-8">Free assessment from expert housing disrepair solicitors.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact/quote-form" className="inline-flex items-center gap-2 bg-navy-900 text-white font-bold px-10 py-4 rounded-full hover:bg-navy-800 transition-colors">
                Start Your Claim <ArrowRight className="h-5 w-5" />
              </Link>
              <a href="tel:+441612437500" className="inline-flex items-center gap-2 bg-white text-gold-700 font-bold px-10 py-4 rounded-full hover:bg-gold-50 transition-colors">
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
