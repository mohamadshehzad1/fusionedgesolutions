"use client";

import { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, Check } from "lucide-react";

const issueTypes = [
  { id: "damp-mould", label: "Damp & Mould", base: 3500 },
  { id: "heating", label: "Broken Heating / Boiler", base: 3000 },
  { id: "structural", label: "Structural Damage", base: 5000 },
  { id: "pest", label: "Pest Infestation", base: 2000 },
  { id: "leaks", label: "Water Leaks / Plumbing", base: 2500 },
  { id: "electrical", label: "Electrical Hazards", base: 3000 },
];

const durationMultipliers: Record<string, number> = {
  "3-6": 0.6,
  "6-12": 1.0,
  "12-24": 1.4,
  "24+": 1.8,
};

const reportedMultipliers: Record<string, number> = {
  "yes-over-21-days": 1.2,
  "yes-recently": 1.0,
  no: 0.8,
};

export default function HomepageCalculator() {
  const [selectedIssues, setSelectedIssues] = useState<string[]>([]);
  const [duration, setDuration] = useState("");
  const [reported, setReported] = useState("");
  const [showResult, setShowResult] = useState(false);

  const toggleIssue = (id: string) => {
    setSelectedIssues((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
    setShowResult(false);
  };

  const calculate = () => {
    if (selectedIssues.length === 0 || !duration || !reported) return;
    setShowResult(true);
  };

  const getEstimate = () => {
    const baseTotal = selectedIssues.reduce((sum, id) => {
      const issue = issueTypes.find((i) => i.id === id);
      return sum + (issue?.base || 0);
    }, 0);
    const durationMult = durationMultipliers[duration] || 1;
    const reportedMult = reportedMultipliers[reported] || 1;
    const min = Math.round(baseTotal * durationMult * reportedMult * 0.7);
    const max = Math.round(baseTotal * durationMult * reportedMult * 1.3);
    return { min, max };
  };

  const estimate = showResult ? getEstimate() : null;

  return (
    <section className="py-16 md:py-24 bg-navy-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-gold-100 text-gold-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Calculator className="h-4 w-4" />
              Free Online Tool
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-navy-900 mb-3">
              Compensation Calculator
            </h2>
            <p className="text-navy-600">
              Get an estimated range for your housing disrepair claim in seconds.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-xl p-6 md:p-8">
            {/* Step 1 */}
            <div className="mb-6">
              <h3 className="text-base font-bold text-navy-900 mb-3">
                1. What issues are you experiencing?
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {issueTypes.map((issue) => (
                  <button
                    key={issue.id}
                    onClick={() => toggleIssue(issue.id)}
                    className={`p-3 border-2 rounded-xl text-left text-sm font-medium transition-all ${
                      selectedIssues.includes(issue.id)
                        ? "border-gold-500 bg-gold-50 text-gold-700"
                        : "border-slate-200 hover:border-slate-300 text-navy-700"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      {issue.label}
                      <div className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                        selectedIssues.includes(issue.id) ? "border-gold-500 bg-gold-500" : "border-slate-300"
                      }`}>
                        {selectedIssues.includes(issue.id) && <Check className="h-2.5 w-2.5 text-white" />}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-6">
              <h3 className="text-base font-bold text-navy-900 mb-3">
                2. How long has the issue persisted?
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {["3-6", "6-12", "12-24", "24+"].map((d) => (
                  <button
                    key={d}
                    onClick={() => { setDuration(d); setShowResult(false); }}
                    className={`p-2.5 border-2 rounded-xl text-center text-sm font-medium transition-all ${
                      duration === d ? "border-gold-500 bg-gold-50 text-gold-700" : "border-slate-200 hover:border-slate-300 text-navy-700"
                    }`}
                  >
                    {d === "24+" ? "24+ mo" : `${d} mo`}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3 */}
            <div className="mb-6">
              <h3 className="text-base font-bold text-navy-900 mb-3">
                3. Reported to landlord?
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { value: "yes-over-21-days", label: "Yes, 21+ days ago" },
                  { value: "yes-recently", label: "Yes, recently" },
                  { value: "no", label: "No, not yet" },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => { setReported(opt.value); setShowResult(false); }}
                    className={`p-2.5 border-2 rounded-xl text-center text-sm font-medium transition-all ${
                      reported === opt.value ? "border-gold-500 bg-gold-50 text-gold-700" : "border-slate-200 hover:border-slate-300 text-navy-700"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={calculate}
              disabled={selectedIssues.length === 0 || !duration || !reported}
              className="w-full btn-gold py-3 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Calculate My Estimate
            </button>

            {showResult && estimate && (
              <div className="mt-6 p-5 bg-navy-900 rounded-2xl text-center text-white">
                <p className="text-slate-300 text-sm mb-1">Estimated Compensation Range</p>
                <p className="text-3xl md:text-4xl font-extrabold text-gold-400 mb-1">
                  £{estimate.min.toLocaleString()} – £{estimate.max.toLocaleString()}
                </p>
                <p className="text-slate-400 text-xs mb-4">Plus forced repairs and remediation orders</p>
                <Link
                  href="/contact/quote-form"
                  className="inline-flex items-center gap-2 bg-gold-500 text-white font-bold px-6 py-2.5 rounded-full hover:bg-gold-600 transition-colors text-sm"
                >
                  Get Exact Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>

          <p className="text-xs text-navy-400 text-center mt-4">
            *Indicative estimates only. Actual compensation depends on individual circumstances.
          </p>
        </div>
      </div>
    </section>
  );
}
