"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Flame, HardHat, Bug, Droplet } from "lucide-react";

const types = [
  {
    title: "Damp & Toxic Black Mould",
    description: "Persistent damp and toxic black mould growth caused by landlord neglect.",
    href: "/services/damp-and-mould-claims",
    image: "/mould.webp",
    icon: Droplets,
    tag: "Most Common",
  },
  {
    title: "Broken Heating Systems",
    description: "Non-functional boilers, heating systems, or no hot water supply.",
    href: "/services/heating-and-boiler-claims",
    image: "/broken-heat-system.webp",
    icon: Flame,
    tag: "Urgent",
  },
  {
    title: "Structural Damage",
    description: "Cracked walls, leaking roofs, damaged windows, and subsidence.",
    href: "/services/structural-disrepair-claims",
    image: "/structure-damage.webp",
    icon: HardHat,
    tag: "High Value",
  },
  {
    title: "Pest & Rodent Infestations",
    description: "Cockroaches, rats, mice, or other pests due to structural failures.",
    href: "/services/pest-infestation-claims",
    image: "/pest-infestation.jpg",
    icon: Bug,
    tag: "",
  },
  {
    title: "Water Leaks & Plumbing",
    description: "Leaking pipes, overflowing drains, and persistent water ingress.",
    href: "/services/water-leaks-and-plumbing-claims",
    image: "/water-leaks.webp",
    icon: Droplet,
    tag: "",
  },
];

export default function DisrepairTypes() {
  return (
    <section id="disrepair-claims" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gold-100 text-gold-700 px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            What We Handle
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-4xl font-bold text-navy-900 mb-4"
          >
            What Can You Claim Against?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-navy-600 max-w-2xl mx-auto"
          >
            UK law requires landlords to maintain properties in a habitable condition.
            If your landlord has failed in this duty, you may be entitled to significant compensation.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="space-y-6">
          {/* Top 2 - Featured */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {types.slice(0, 2).map((type, index) => {
              const Icon = type.icon;
              return (
                <Link key={type.title} href={type.href}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-gold-400/30"
                  >
                    {/* Image - Full bleed */}
                    <Image
                      src={type.image}
                      alt={type.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Light gradient - only bottom third */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent" />

                    {type.tag && (
                      <span className="absolute top-5 left-5 bg-gold-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                        {type.tag}
                      </span>
                    )}

                    {/* Content - Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-11 h-11 bg-gold-500 rounded-xl flex items-center justify-center shadow-lg">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white">{type.title}</h3>
                      </div>
                      <p className="text-white/90 text-sm md:text-base leading-relaxed mb-4 max-w-md">{type.description}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 group-hover:text-gold-300 transition-colors bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                        Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* Bottom 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {types.slice(2).map((type, index) => {
              const Icon = type.icon;
              return (
                <Link key={type.title} href={type.href}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative h-72 md:h-80 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-gold-400/30"
                  >
                    {/* Image - Full bleed */}
                    <Image
                      src={type.image}
                      alt={type.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Light gradient - only bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent" />

                    {type.tag && (
                      <span className="absolute top-4 left-4 bg-gold-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                        {type.tag}
                      </span>
                    )}

                    {/* Content - Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-gold-500 rounded-xl flex items-center justify-center shadow-lg">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-white">{type.title}</h3>
                      </div>
                      <p className="text-white/90 text-sm leading-relaxed mb-3">{type.description}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 group-hover:text-gold-300 transition-colors bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                        Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-3 bg-navy-900 text-white font-bold px-8 py-4 rounded-full hover:bg-navy-800 transition-all duration-200 shadow-xl hover:shadow-2xl group"
          >
            VIEW ALL SERVICES
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
