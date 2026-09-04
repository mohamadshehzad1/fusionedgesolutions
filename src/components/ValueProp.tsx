"use client";

import { motion } from "framer-motion";
import { Shield, Scale, PoundSterling } from "lucide-react";
import Image from "next/image";

export default function ValueProp() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-gold-100 text-gold-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Scale className="h-4 w-4" />
              Your Legal Rights
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-navy-900 mb-6">
              What We Can Do For You
            </h2>
            <p className="text-navy-600 text-lg leading-relaxed mb-6">
              Your landlord has a <strong className="text-navy-900">legal obligation</strong> to
              maintain your property in a habitable condition. Under UK housing law, they
              must ensure your home is free from hazards that could affect your health
              and wellbeing.
            </p>

            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-gold-600" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-900 mb-1">
                    Specialised for Council & Housing Association Tenants
                  </h4>
                  <p className="text-navy-600 text-sm">
                    We specialise in claims against local councils and housing
                    associations. These landlords have statutory duties under
                    the Housing Act 2004 and Awaab&apos;s Law.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <PoundSterling className="h-6 w-6 text-gold-600" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-900 mb-1">
                    No Win, No Fee Guarantee
                  </h4>
                  <p className="text-navy-600 text-sm">
                    You pay nothing upfront. Our panel solicitors work on a
                    Conditional Fee Agreement basis — if your claim is
                    unsuccessful, you owe nothing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Scale className="h-6 w-6 text-gold-600" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-900 mb-1">
                    We Force Repairs & Win Compensation
                  </h4>
                  <p className="text-navy-600 text-sm">
                    We don&apos;t just claim money — we force your landlord to
                    carry out essential repairs, ensuring your home meets
                    legally required standards.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src="/what-we-can-do.webp"
                  alt="Housing disrepair legal expertise"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gold-500 rounded-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
