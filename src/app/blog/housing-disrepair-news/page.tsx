import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PillarNav, { Breadcrumbs } from "@/components/PillarNav";
import Footer from "@/components/Footer";
import { Newspaper, Calendar, ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Housing Disrepair News & Tenant Rights Blog | The Compensation People",
  description:
    "Stay up to date with housing disrepair news, tenant rights updates, Awaab's Law developments, and expert legal guidance for UK social housing tenants.",
};

const articles = [
  {
    slug: "damp-mould-advice-tenants",
    title: "Damp, Mould & Housing Disrepair: Advice for Tenants",
    excerpt:
      "Understanding your rights when living with persistent damp and mould. Learn about landlord obligations, how to report issues effectively, and the steps you can take to protect your family's health.",
    date: "28 Aug 2026",
    category: "Tenant Rights",
    readTime: "5 min read",
    image: "/mould.webp",
  },
  {
    slug: "awaabs-law-explained",
    title: "Awaab's Law Explained: What Social Tenants Need to Know",
    excerpt:
      "Following the tragic death of Awaab Ishak, new legislation introduces strict timeframes for social landlords to fix hazards. Find out what this means for you and how it strengthens your position.",
    date: "15 Aug 2026",
    category: "Legislation",
    readTime: "4 min read",
    image: "/awaab-law-explained.webp",
  },
  {
    slug: "landlord-responsibilities-guide",
    title: "Landlord Responsibilities & Protocol Guidance",
    excerpt:
      "A comprehensive guide to landlord legal obligations under UK housing law. Know what your council or housing association must do when you report repairs.",
    date: "2 Aug 2026",
    category: "Guidance",
    readTime: "6 min read",
    image: "/no-win-no-fee.jpg",
  },
  {
    slug: "can-i-withhold-rent",
    title: "Can I Withhold Rent for Disrepair? What Shelter Says",
    excerpt:
      "Some tenants consider withholding rent when faced with disrepair. Shelter strongly advises against this. Learn the correct legal channels to resolve disrepair issues.",
    date: "18 Jul 2026",
    category: "Advice",
    readTime: "3 min read",
    image: "/what-we-can-do.webp",
  },
  {
    slug: "awaab-coroner-findings",
    title: "Coroner's Findings on Awaab Ishak: Key Takeaways for Tenants",
    excerpt:
      "The coroner's report on Awaab Ishak's death highlighted systemic failures in social housing. Here are the key findings and what they mean for tenants today.",
    date: "5 Jul 2026",
    category: "News",
    readTime: "4 min read",
    image: "/mold-blog-image.webp",
  },
  {
    slug: "fitness-for-human-habitation-act-2026",
    title: "Fitness for Human Habitation Act: 2026 Updates",
    excerpt:
      "The Homes (Fitness for Human Habitation) Act continues to evolve. Learn about the latest enforcement actions and how they affect your rights as a tenant.",
    date: "20 Jun 2026",
    category: "Legislation",
    readTime: "5 min read",
    image: "/structure-damage.webp",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PillarNav />
      <div className="container-custom">
        <Breadcrumbs items={[{ label: "Blog" }]} />

        <section className="py-12 md:py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold-100 text-gold-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Newspaper className="h-4 w-4" />
              News &amp; Insights
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-navy-900 leading-tight mb-4">
              Housing Disrepair News &amp; Tenant Rights
            </h1>
            <p className="text-lg text-navy-600">
              Stay informed about your rights as a UK tenant and the latest
              developments in housing disrepair law.
            </p>
          </div>
        </section>

        <section className="pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-shadow group"
              >
                <div className="h-44 relative overflow-hidden">
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
                  <h2 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                    {article.title}
                  </h2>
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
              </article>
            ))}
          </div>
        </section>

        <section className="pb-16">
          <div className="bg-gold-500 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Have a Housing Disrepair Issue?
            </h2>
            <p className="text-gold-100 max-w-2xl mx-auto mb-8">
              Get a free assessment from our expert solicitors.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact/quote-form" className="inline-flex items-center gap-2 bg-navy-900 text-white font-bold px-8 py-4 rounded-full hover:bg-navy-800 transition-colors">
                Start Your Claim
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
