"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, ArrowRight, Check, Phone } from "lucide-react";

export default function NoWinNoFee() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-gold-50 to-gold-100 rounded-3xl p-8 md:p-12">
                <div className="w-20 h-20 bg-gold-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-gold-500/25">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-navy-900 mb-4">
                  No Win, No Fee
                </h3>
                <p className="text-navy-600 leading-relaxed">
                  We work on a strictly <strong>no-win, no-fee basis</strong>.
                  If your claim is unsuccessful, you pay nothing. There are no
                  hidden costs or surprise bills.
                </p>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold-500 rounded-2xl -z-10" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-gold-100 text-gold-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Shield className="h-4 w-4" />
              Our Guarantee
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-navy-900 mb-6 leading-tight">
              No Win, No Fee Service
            </h2>
            <p className="text-navy-600 leading-relaxed mb-4">
              We have assisted thousands of tenants in restoring their quality of
              life and obtaining the compensation they deserve.
            </p>
            <p className="text-navy-600 leading-relaxed mb-4">
              Our passion lies in advocating for tenants&apos; rights, especially
              when serious disrepair can lead to damage to belongings and health
              and safety concerns.
            </p>
            <p className="text-navy-600 leading-relaxed mb-6">
              Our experienced team of solicitors will work tirelessly to build
              the strongest possible claim for disrepair to your landlord, using
              expert evidence and court action if necessary.
            </p>

            <div className="bg-slate-50 rounded-xl p-5 mb-8 border border-slate-100">
              <p className="text-navy-700 font-medium text-sm italic">
                &ldquo;At The Compensation People, we work on a strictly
                no-win, no-fee basis. If you would like to find out if you can
                make a claim, or have any questions about the process, please
                don&apos;t hesitate to contact our housing disrepair team
                today.&rdquo;
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact/quote-form"
                className="inline-flex items-center gap-2 btn-gold"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+443301233309"
                className="inline-flex items-center gap-2 btn-gold-outline"
              >
                <Phone className="h-4 w-4" />
                Call Free: 0330 123 3309
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                "No upfront costs",
                "No hidden fees",
                "Free initial assessment",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-navy-700">
                  <Check className="h-4 w-4 text-gold-500 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
