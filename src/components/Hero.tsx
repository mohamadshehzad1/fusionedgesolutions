"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Image from "next/image";

const trustItems = [
  "Claim Against Local Councils and Housing Associations",
  "Our Experts will investigate a number of disrepair issues",
  "We can force your landlord to fix your home",
];

export default function Hero() {
  const scrollToForm = () => {
    document
      .getElementById("eligibility-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-slate-900 text-white pt-24 md:pt-32 overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12 md:py-20">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Housing Disrepair Claims
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              Is Your Home in Disrepair? Is Your Landlord Refusing To Help? Get
              Your Home Repaired and the Compensation You Deserve.{" "}
              <span className="text-gold-400 font-semibold">
                No Win, No Fee*
              </span>
            </p>

            <motion.button
              onClick={scrollToForm}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gold-500 text-white font-bold text-lg px-10 py-5 rounded-full hover:bg-gold-600 transition-all duration-200 shadow-xl hover:shadow-2xl shadow-gold-500/25"
            >
              Start Your Housing Claim Now!
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-600/30 aspect-[4/3]">
                <Image
                  src="/what-we-can-do.webp"
                  alt="Housing disrepair claim - tenant receiving compensation"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold-500 rounded-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="bg-navy-900/80 backdrop-blur-md border-t border-slate-700/50">
        <div className="container-custom py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                </div>
                <p className="text-slate-200 text-sm font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
