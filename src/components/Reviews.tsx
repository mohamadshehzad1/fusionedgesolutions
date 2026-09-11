"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    location: "Manchester",
    date: "Sept 2026",
    rating: 5,
    text: "After 18 months of fighting with my council about black mould in my children's bedroom, The Compensation People got everything sorted. Repairs were forced within weeks and I received £4,200 compensation. Absolutely brilliant service.",
  },
  {
    name: "James T.",
    location: "Birmingham",
    date: "Aug 2026",
    rating: 5,
    text: "My housing association ignored my complaints about a broken boiler for months. These guys took on my case, No Win No Fee, and got me £3,500 plus a brand new heating system installed. Can't thank them enough.",
  },
  {
    name: "Fatima K.",
    location: "Leeds",
    date: "July 2026",
    rating: 5,
    text: "I was skeptical at first but the team were fantastic throughout. My damp and mould claim resulted in £5,800 compensation and full property remediation. They really do force landlords to act.",
  },
  {
    name: "David R.",
    location: "London",
    date: "Sept 2026",
    rating: 4,
    text: "Professional and efficient from start to finish. My structural damage claim against the council was settled in under 8 months. Received £6,200 and all repairs were completed. Highly recommend.",
  },
  {
    name: "Nicola P.",
    location: "Liverpool",
    date: "Aug 2026",
    rating: 5,
    text: "The pest infestation in my council flat was making my family ill. The Compensation People got environmental health involved and won me £2,800. The flat is now completely pest-free and properly sealed.",
  },
];

export default function Reviews() {
  return (
    <section className="py-16 md:py-24 bg-navy-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-sm border border-slate-100 mb-6">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="h-5 w-5 text-gold-500 fill-gold-500"
                />
              ))}
            </div>
            <span className="font-bold text-navy-900 text-lg">4.8 / 5</span>
            <span className="text-navy-500 text-sm">based on 500+ reviews</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-navy-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-navy-600 max-w-2xl mx-auto">
            Real reviews from tenants who got the repairs and compensation they
            deserved.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-slate-100" />
              <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 ${
                      star <= review.rating
                        ? "text-gold-500 fill-gold-500"
                        : "text-slate-200"
                    }`}
                  />
                ))}
              </div>
              <p className="text-navy-600 text-sm leading-relaxed mb-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="border-t border-slate-100 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-navy-900 text-sm">
                      {review.name}
                    </p>
                    <p className="text-navy-500 text-xs">{review.location}</p>
                  </div>
                  <p className="text-navy-400 text-xs">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional reviews row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {reviews.slice(3).map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-slate-100" />
              <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 ${
                      star <= review.rating
                        ? "text-gold-500 fill-gold-500"
                        : "text-slate-200"
                    }`}
                  />
                ))}
              </div>
              <p className="text-navy-600 text-sm leading-relaxed mb-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="border-t border-slate-100 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-navy-900 text-sm">
                      {review.name}
                    </p>
                    <p className="text-navy-500 text-xs">{review.location}</p>
                  </div>
                  <p className="text-navy-400 text-xs">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
