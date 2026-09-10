"use client";

import { useState } from "react";
import Link from "next/link";
import PillarNav, { Breadcrumbs } from "@/components/PillarNav";
import Footer from "@/components/Footer";
import { ArrowRight, Phone, ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Can I claim compensation for damp and mould?",
    a: "Yes. Under the Homes (Fitness for Human Habitation) Act 2018, your landlord must ensure your property is free from damp and mould. If they have failed to address the issue after being notified, you can claim compensation. According to Shelter, compensation covers pain, suffering, loss of amenity, and any financial losses.",
  },
  {
    q: "How long does a housing disrepair claim take?",
    a: "Most claims are resolved within 6-12 months. Emergency repairs can be forced much faster through interim court orders. Your solicitor will provide a more accurate timeline based on your specific circumstances.",
  },
  {
    q: "Can my landlord evict me for making a claim?",
    a: "No. UK law protects tenants from retaliatory eviction. The Deregulation Act 2015 prevents landlords from serving Section 21 notices in retaliation for tenants asserting their legal rights, including reporting disrepair.",
  },
  {
    q: "What does 'No Win, No Fee' mean?",
    a: "No Win, No Fee means you pay nothing if your claim is unsuccessful. Our panel solicitors work on a Conditional Fee Agreement (CFA) basis. They only get paid if your claim succeeds. There are no hidden costs.",
  },
  {
    q: "What evidence do I need for my claim?",
    a: "Photographs of the disrepair, records of communication with your landlord (emails, letters, text messages), medical records if you have suffered health impacts, and records of any expenses incurred due to the disrepair.",
  },
  {
    q: "Can I claim if I haven't reported the issue yet?",
    a: "You should report the issue to your landlord first. However, if your landlord has been made aware through other means (e.g. council inspection), you may still have a claim. Contact us for a free assessment.",
  },
  {
    q: "How much compensation can I receive?",
    a: "Compensation varies based on the type, severity, and duration of the disrepair. Typical ranges are £1,000-£10,000+. Use our compensation calculator for an indicative estimate, or contact us for a free personalised assessment.",
  },
  {
    q: "What if my landlord refuses to make repairs?",
    a: "If your landlord refuses to act, we can obtain a court order forcing them to carry out repairs. The court can also award compensation for the distress and inconvenience caused.",
  },
  {
    q: "Is this a real law firm?",
    a: "Fusion Edge Solutions is a lead generation service that connects you with regulated panel solicitors. Your claim will be handled by solicitors authorised and regulated by the Solicitors Regulation Authority (SRA).",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PillarNav />
      <div className="container-custom">
        <Breadcrumbs
          items={[
            { label: "Housing Disrepair Claims", href: "/housing-disrepair-claims" },
            { label: "FAQ" },
          ]}
        />

        <section className="py-12 md:py-16 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-navy-100 text-navy-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <HelpCircle className="h-4 w-4" />
              Common Questions
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 leading-tight mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-navy-600">
              Get answers to the most common questions about housing disrepair
              claims in the UK.
            </p>
          </div>

          <div className="space-y-3 mb-12">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-navy-900 pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-navy-400 flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5 text-navy-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-gold-500 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gold-100 mb-6">
              Speak to our team for a free, no-obligation assessment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact/quote-form" className="inline-flex items-center gap-2 bg-navy-900 text-white font-bold px-8 py-3 rounded-full hover:bg-navy-800 transition-colors">
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:08001234567" className="inline-flex items-center gap-2 bg-white text-gold-700 font-bold px-8 py-3 rounded-full hover:bg-gold-50 transition-colors">
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
