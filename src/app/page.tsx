import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EligibilityForm from "@/components/EligibilityForm";
import DisrepairTypes from "@/components/DisrepairTypes";
import ValueProp from "@/components/ValueProp";
import NoWinNoFee from "@/components/NoWinNoFee";
import HomepageCalculator from "@/components/HomepageCalculator";
import NewsSection from "@/components/NewsSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />

      <section className="py-16 md:py-24 bg-navy-50">
        <div className="container-custom">
          <EligibilityForm />
        </div>
      </section>

      <ValueProp />
      <NoWinNoFee />
      <DisrepairTypes />
      <HomepageCalculator />
      <NewsSection />
      <CtaBanner />

      <Footer />
      <FloatingCTA />
    </main>
  );
}
