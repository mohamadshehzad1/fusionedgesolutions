"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Newspaper, ArrowRight, Calendar, Clock } from "lucide-react";

const articles = [
  {
    title: "Damp, Mould & Housing Disrepair: Advice for Tenants",
    excerpt:
      "Understanding your rights when living with persistent damp and mould. Learn about landlord obligations, how to report issues, and the steps you can take to protect your family's health.",
    date: "28 Aug 2026",
    category: "Tenant Rights",
    readTime: "5 min read",
    image: "/mould.webp",
  },
  {
    title: "Awaab's Law Explained: What Social Tenants Need to Know",
    excerpt:
      "Awaab's Law introduces strict timeframes for social landlords to fix hazards. Find out what this means for you and how it strengthens your position when reporting disrepair.",
    date: "15 Aug 2026",
    category: "Legislation",
    readTime: "4 min read",
    image: "/awaab-law-explained.webp",
  },
  {
    title: "Landlord Responsibilities & Protocol Guidance",
    excerpt:
      "A comprehensive guide to landlord legal obligations under UK housing law. Know what your council or housing association must do when you report repairs.",
    date: "2 Aug 2026",
    category: "Guidance",
    readTime: "6 min read",
    image: "/no-win-no-fee.jpg",
  },
];

export default function NewsSection() {
  return (
    <section id="news" className="py-16 md:py-24 bg-navy-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gold-100 text-gold-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Newspaper className="h-4 w-4" />
            Latest News
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-navy-900 mb-4">
            Recent News & Tenant Rights
          </h2>
          <p className="text-navy-600 max-w-2xl mx-auto">
            Stay informed about your rights as a UK tenant and the latest
            developments in housing disrepair law.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-shadow group"
            >
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-gold-600 bg-gold-50 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-navy-400">
                    <Calendar className="h-3 w-3" />
                    {article.date}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-navy-500 text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs text-navy-400">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </span>
                  <span className="flex items-center gap-1 text-sm font-semibold text-gold-600 group-hover:gap-2 transition-all">
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/blog/housing-disrepair-news"
            className="inline-flex items-center gap-2 text-gold-600 font-semibold hover:gap-3 transition-all"
          >
            View All News &amp; Articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
