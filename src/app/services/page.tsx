import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PillarNav, { Breadcrumbs } from "@/components/PillarNav";
import Footer from "@/components/Footer";
import { WebPageSchema, BreadcrumbSchema, ServiceSchema } from "@/lib/seo";
import { Droplets, Flame, HardHat, Bug, Droplet, Zap, ArrowRight, Phone, Check, Shield, Scale, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Housing Disrepair Claims Services UK | Council & Housing Association Claims",
  description:
    "Expert housing disrepair claims services for UK tenants. Damp, mould, structural damage, heating, pest, plumbing & electrical claims. No Win, No Fee. Free assessment.",
  keywords: "housing disrepair claims, housing disrepair solicitors, council disrepair claim, housing association claim, tenant rights housing repairs",
};

const services = [
  {
    icon: Droplets,
    title: "Damp & Mould Claims",
    href: "/services/damp-and-mould-claims",
    description: "Toxic black mould, penetrating damp, and condensation causing health risks. Your landlord must fix these issues.",
    compensation: "£2,500 – £8,000+",
    tag: "Most Common",
    image: "/mould.webp",
  },
  {
    icon: Flame,
    title: "Heating & Boiler Claims",
    href: "/services/heating-and-boiler-claims",
    description: "Broken boilers, no heating, or no hot water. Legal requirement for working heating in UK rentals.",
    compensation: "£2,000 – £6,000+",
    tag: "Urgent",
    image: "/broken-heat-system.webp",
  },
  {
    icon: HardHat,
    title: "Structural Disrepair Claims",
    href: "/services/structural-disrepair-claims",
    description: "Cracked walls, leaking roofs, subsidence, and structural defects affecting safety and habitability.",
    compensation: "£3,000 – £10,000+",
    tag: "High Value",
    image: "/structure-damage.webp",
  },
  {
    icon: Bug,
    title: "Pest Infestation Claims",
    href: "/services/pest-infestation-claims",
    description: "Rats, cockroaches, mice, and other pests caused by structural failures your landlord must address.",
    compensation: "£1,000 – £5,000+",
    tag: "",
    image: "/pest-infestation.jpg",
  },
  {
    icon: Droplet,
    title: "Water Leaks & Plumbing Claims",
    href: "/services/water-leaks-and-plumbing-claims",
    description: "Leaking pipes, persistent water ingress, and drainage failures causing property damage.",
    compensation: "£1,500 – £4,000+",
    tag: "",
    image: "/water-leaks.webp",
  },
  {
    icon: Zap,
    title: "Electrical Hazards Claims",
    href: "/services/electrical-hazards-claims",
    description: "Exposed wiring, faulty electrics, and fire hazards in rental properties.",
    compensation: "£2,000 – £7,000+",
    tag: "Dangerous",
    image: "/broken-door and window.webp",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <WebPageSchema title="Housing Disrepair Claims Services" description="Expert housing disrepair claims services for UK tenants." path="/services" />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
      ]} />
      <PillarNav />
      <div className="container-custom">
        <Breadcrumbs items={[{ label: "Our Services" }]} />

        {/* Hero */}
        <section className="py-12 md:py-20 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-gold-100 text-gold-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Scale className="h-4 w-4" />
            Expert Legal Services
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-navy-900 leading-tight mb-6">
            Housing Disrepair Claims Services
          </h1>
          <p className="text-lg md:text-xl text-navy-600 leading-relaxed mb-8">
            Our panel of specialist solicitors handles housing disrepair
            claims against councils and housing associations across England and
            Wales. We handle all types of disrepair — from damp and mould to
            structural defects.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact/quote-form" className="inline-flex items-center gap-2 btn-gold">
              Start Your Claim
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:+443301233309" className="inline-flex items-center gap-2 btn-gold-outline">
              <Phone className="h-4 w-4" />
              Call Free: 0330 123 3309
            </a>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-8 mb-12 bg-navy-900 rounded-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-8">
            {[
              { value: "500+", label: "Successful Claims" },
              { value: "£2.5M+", label: "Compensation Recovered" },
              { value: "4.8/5", label: "Client Rating" },
              { value: "98%", label: "Success Rate" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-gold-400">{stat.value}</div>
                <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link key={service.href} href={service.href} className="group">
                  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-gold-200 transition-all h-full overflow-hidden">
                    <div className="h-36 relative overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent" />
                      {service.tag && (
                        <span className={`absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full ${
                          service.tag === "Most Common" ? "bg-blue-500 text-white" :
                          service.tag === "Urgent" ? "bg-red-500 text-white" :
                          service.tag === "High Value" ? "bg-emerald-500 text-white" :
                          service.tag === "Dangerous" ? "bg-orange-500 text-white" :
                          "bg-slate-500 text-white"
                        }`}>
                          {service.tag}
                        </span>
                      )}
                    </div>
                    <div className="p-6">
                      <h2 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-navy-500 text-sm leading-relaxed mb-5">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs text-navy-400">Typical compensation</span>
                          <div className="text-sm font-bold text-gold-600">{service.compensation}</div>
                        </div>
                        <span className="flex items-center gap-1 text-sm font-semibold text-gold-600 group-hover:gap-2 transition-all">
                          Learn More <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="pb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-10 text-center">
            Why Choose The Compensation People?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "No Win, No Fee",
                description: "You pay nothing if your claim is unsuccessful. Our solicitors work on a Conditional Fee Agreement basis.",
              },
              {
                icon: Users,
                title: "Expert Solicitors",
                description: "Your claim is handled by specialist solicitors who focus exclusively on housing disrepair claims.",
              },
              {
                icon: Check,
                title: "Force Repairs & Win Compensation",
                description: "We don't just claim money — we force your landlord to carry out essential repairs through court orders.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm text-center">
                  <div className="w-14 h-14 bg-gold-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <Icon className="h-7 w-7 text-gold-600" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-3">{item.title}</h3>
                  <p className="text-navy-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="pb-16">
          <div className="bg-gold-500 rounded-2xl p-10 md:p-14 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Housing Disrepair Claim?
            </h2>
            <p className="text-gold-100 max-w-2xl mx-auto mb-8 text-lg">
              Free, no-obligation assessment. Find out if you qualify for
              compensation in minutes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact/quote-form" className="inline-flex items-center gap-2 bg-navy-900 text-white font-bold px-10 py-4 rounded-full hover:bg-navy-800 transition-colors">
                Start Your Claim
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a href="tel:+443301233309" className="inline-flex items-center gap-2 bg-white text-gold-700 font-bold px-10 py-4 rounded-full hover:bg-gold-50 transition-colors">
                <Phone className="h-5 w-5" />
                Call Free: 0330 123 3309
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
