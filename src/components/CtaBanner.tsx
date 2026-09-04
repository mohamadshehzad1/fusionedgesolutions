"use client";

import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-16 md:py-24 bg-gold-500 text-white">
      <div className="container-custom text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Ready to Get the Repairs & Compensation You Deserve?
        </h2>
        <p className="text-gold-100 max-w-2xl mx-auto mb-8">
          Don&apos;t suffer in silence. UK law is on your side. Fill in our
          free eligibility check and find out if you qualify for compensation.
        </p>
        <button
          onClick={() => {
            document
              .getElementById("eligibility-form")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-navy-900 text-white font-bold rounded-full hover:bg-navy-800 transition-all duration-200 shadow-xl hover:shadow-2xl text-lg"
        >
          Start Your Housing Claim Now
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
