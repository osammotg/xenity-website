"use client";

import { useState } from "react";
import Link from "next/link";

export default function ROIClient() {
  const [monthlySpend, setMonthlySpend] = useState(5000);
  const [users, setUsers] = useState(50);
  const [industry, setIndustry] = useState("general");

  const annualCloudCost = monthlySpend * 12;
  const xinityDeploymentCost = Math.max(monthlySpend * 0.35 * 12, 1099 * 12);
  const annualSavings = annualCloudCost - xinityDeploymentCost;
  const threeYearSavings = annualSavings * 3;

  function fmt(n: number) {
    return "€" + Math.round(Math.max(0, n)).toLocaleString("en-EU");
  }

  return (
    <>
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-[#ede6f6] to-[#F7F6F7]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-4">
            ROI Calculator
          </p>
          <h1 className="text-[clamp(36px,5vw,60px)] font-medium leading-tight text-[#1B0C25] mb-4">
            Estimate Your ROI in Seconds
          </h1>
          <p className="text-[16px] text-[rgba(28,12,38,0.6)] max-w-lg mx-auto">
            Most European enterprises save 3–5× by switching from cloud AI to Xinity sovereign infrastructure.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#F7F6F7]">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl border border-[rgba(27,12,37,0.06)] p-8 space-y-8">
            {/* Monthly Spend */}
            <div>
              <label className="block text-[14px] font-semibold text-[#1B0C25] mb-3">
                Monthly AI API spend
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min={500}
                  max={50000}
                  step={500}
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  className="flex-1 accent-[#9B6FC8]"
                />
                <span className="text-[20px] font-semibold text-[#1B0C25] w-28 text-right">
                  €{monthlySpend.toLocaleString()}
                </span>
              </div>
              <p className="text-[12px] text-[rgba(27,12,37,0.4)] mt-1">
                Range: €500 – €50,000 per month
              </p>
            </div>

            {/* Users */}
            <div>
              <label className="block text-[14px] font-semibold text-[#1B0C25] mb-3">
                Number of AI users
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min={1}
                  max={500}
                  step={1}
                  value={users}
                  onChange={(e) => setUsers(Number(e.target.value))}
                  className="flex-1 accent-[#9B6FC8]"
                />
                <span className="text-[20px] font-semibold text-[#1B0C25] w-28 text-right">
                  {users} users
                </span>
              </div>
            </div>

            {/* Industry */}
            <div>
              <label className="block text-[14px] font-semibold text-[#1B0C25] mb-3">
                Industry
              </label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[rgba(27,12,37,0.12)] bg-[#FAFAFA] text-[14px] text-[#1B0C25] focus:outline-none focus:border-[#9B6FC8] transition-colors"
              >
                <option value="healthcare">Healthcare</option>
                <option value="finance">Finance</option>
                <option value="legal">Legal</option>
                <option value="general">General / Other</option>
              </select>
            </div>

            {/* Results */}
            <div className="border-t border-[rgba(27,12,37,0.06)] pt-6">
              <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-4">
                Your Estimated ROI
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    label: "Current annual cloud cost",
                    value: fmt(annualCloudCost),
                    sub: "your current spend",
                    highlight: false,
                  },
                  {
                    label: "Estimated Xinity cost",
                    value: fmt(xinityDeploymentCost),
                    sub: "approx. 40% of cloud spend",
                    highlight: false,
                  },
                  {
                    label: "Annual savings",
                    value: annualSavings > 0 ? fmt(annualSavings) : "€0",
                    sub: "year 1 savings",
                    highlight: annualSavings > 0,
                  },
                  {
                    label: "3-year savings",
                    value: threeYearSavings > 0 ? fmt(threeYearSavings) : "€0",
                    sub: "total over 3 years",
                    highlight: threeYearSavings > 0,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`rounded-xl p-4 ${item.highlight ? "bg-[#EDE6F6]" : "bg-[#F7F6F7]"}`}
                  >
                    <p className="text-[11px] text-[rgba(27,12,37,0.45)] mb-1 leading-tight">
                      {item.label}
                    </p>
                    <p
                      className={`text-[22px] font-semibold leading-none ${
                        item.highlight ? "text-[#9B6FC8]" : "text-[#1B0C25]"
                      }`}
                    >
                      {item.value}
                    </p>
                    <p className="text-[11px] text-[rgba(27,12,37,0.35)] mt-1">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[12px] text-[rgba(27,12,37,0.4)] text-center leading-relaxed">
              Estimates based on typical Xinity enterprise deployments. Actual savings depend on
              your infrastructure setup, model requirements, and usage patterns.
            </p>
          </div>

          <div className="mt-8 text-center">
            <p className="text-[15px] text-[rgba(28,12,38,0.65)] mb-4">
              Want an accurate estimate for your specific setup?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://calendly.com/xinity/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 bg-[#1B0C25] text-white rounded-full text-[14px] font-semibold hover:bg-[#2a1840] transition-colors"
              >
                Book a Demo →
              </a>
              <Link
                href="/contact"
                className="px-7 py-3 bg-white text-[#1B0C25] border border-[rgba(27,12,37,0.15)] rounded-full text-[14px] font-medium hover:bg-[#EDE6F6] transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
