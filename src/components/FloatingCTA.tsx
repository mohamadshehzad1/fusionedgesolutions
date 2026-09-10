"use client";

import { Phone, ArrowRight } from "lucide-react";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden bg-navy-900 border-t border-navy-700 z-50 safe-bottom">
      <div className="flex">
        <a
          href="tel:+441618182458"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-navy-800 text-white font-semibold text-sm hover:bg-navy-700 transition-colors"
        >
          <Phone className="h-5 w-5" />
          Call Free
        </a>
        <button
          onClick={() => {
            document
              .getElementById("eligibility-form")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-gold-500 text-white font-bold text-sm hover:bg-gold-600 transition-colors"
        >
          CLAIM NOW
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
