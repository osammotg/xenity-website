import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EU AI Act & GDPR Compliance — Sovereign AI for Enterprises",
  description:
    "The EU AI Act's high-risk system requirements take full effect August 2, 2026. Xinity helps European enterprises achieve compliance with sovereign AI deployment.",
  alternates: { canonical: "https://xinity.ai/compliance" },
};

const obligations = [
  {
    title: "Full Audit Trail",
    body: "Log every inference request — who ran it, when, with what input, and what came back. Required for high-risk AI system classification.",
  },
  {
    title: "Data Residency Enforcement",
    body: "Guarantee data stays in the EU and never crosses borders. Architectural compliance, not contractual.",
  },
  {
    title: "Human Oversight Ready",
    body: "Clear intervention points and monitoring dashboards. Your compliance team sees everything.",
  },
  {
    title: "EU AI Act High-Risk Ready",
    body: "Pre-built for healthcare, finance, legal, and HR AI deployments — the sectors most affected by the Act.",
  },
];

export default function CompliancePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-[#ede6f6] to-[#F7F6F7] text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-4">
            Compliance
          </p>
          <h1 className="text-[clamp(36px,5vw,64px)] font-medium leading-tight text-[#1B0C25] mb-6">
            Your Window to Get Compliant
            <br />
            Is Closing
          </h1>
          <div className="inline-flex items-center gap-3 bg-[#1B0C25] text-white px-6 py-3 rounded-full text-[15px] font-medium mb-6">
            <span className="text-[#D588FC] font-semibold">August 2, 2026</span>
            <span className="text-[rgba(255,255,255,0.5)]">—</span>
            <span>EU AI Act high-risk provisions take effect</span>
          </div>
          <p className="text-[17px] text-[rgba(28,12,38,0.65)] max-w-2xl mx-auto leading-relaxed">
            Enterprises that deploy sovereign AI software now have time to do it right —
            at their own pace, with full control. Rushing a compliance retrofit in July
            is not a strategy.
          </p>
        </div>
      </section>

      {/* EU AI Act section */}
      <section className="py-20 px-4 bg-[#F7F6F7]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-3">
              The EU AI Act
            </p>
            <h2
              className="text-[clamp(28px,4vw,42px)] font-extrabold text-[#1B0C27] leading-tight"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              What It Requires
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Who It Affects",
                items: [
                  "Healthcare AI (diagnosis, triage, clinical decision support)",
                  "Financial services AI (credit scoring, fraud detection)",
                  "Legal AI (case analysis, contract review)",
                  "HR AI (recruitment, performance evaluation)",
                ],
              },
              {
                title: "Key Obligations",
                items: [
                  "Complete audit trails for all AI decisions",
                  "Data governance documentation",
                  "Human oversight mechanisms",
                  "Technical robustness and accuracy standards",
                ],
              },
              {
                title: "Penalties",
                items: [
                  "Up to €30M or 6% of global revenue for prohibited AI",
                  "Up to €20M or 4% for high-risk violations",
                  "Up to €10M or 2% for information obligations",
                  "Plus GDPR liability stacked on top",
                ],
              },
            ].map((col) => (
              <div key={col.title} className="bg-white rounded-2xl p-7 border border-[rgba(27,12,37,0.06)]">
                <h3 className="text-[16px] font-semibold text-[#1B0C25] mb-4">{col.title}</h3>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[13px] text-[rgba(28,12,38,0.65)]">
                      <span className="text-[#9B6FC8] mt-0.5 shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR */}
      <section className="py-20 px-4 bg-[#F8F7F8]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-3">
            GDPR
          </p>
          <h2
            className="text-[clamp(28px,4vw,38px)] font-extrabold text-[#1B0C27] mb-6 leading-tight"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Sovereign AI Is GDPR Compliance by Architecture
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Data minimization", value: "Inference data never leaves your building. Nothing to minimize remotely." },
              { label: "Data residency", value: "EU-hosted or on-premise — your data stays in EU jurisdiction always." },
              { label: "Right to erasure", value: "Your data, your systems. Deletion is your operation." },
              { label: "Data transfer", value: "No transfers to third countries. GDPR Article 44 compliance is automatic." },
            ].map((item) => (
              <div key={item.label} className="bg-[#EDE6F6] rounded-2xl p-6">
                <h3 className="text-[14px] font-semibold text-[#1B0C25] mb-1">{item.label}</h3>
                <p className="text-[13px] text-[rgba(28,12,38,0.65)] leading-relaxed">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Xinity helps */}
      <section className="py-20 px-4 bg-[#F7F6F7]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 text-center">
            <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-3">
              How Xinity Helps
            </p>
            <h2 className="text-[clamp(24px,3vw,36px)] font-medium text-[#1B0C25]">
              Compliance Built Into the Infrastructure
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {obligations.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-7 border border-[rgba(27,12,37,0.06)]">
                <h3 className="text-[16px] font-medium text-[#1B0C25] mb-2">{item.title}</h3>
                <p className="text-[14px] text-[rgba(28,12,38,0.65)] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#1B0C27] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[clamp(24px,3vw,36px)] font-medium mb-4">
            August 2, 2026 is closer than it looks.
          </h2>
          <p className="text-[15px] text-[rgba(255,255,255,0.6)] mb-6">
            Book a 30-minute call. We&apos;ll map your current AI setup to EU AI Act
            requirements and show you what sovereign deployment looks like for your company.
          </p>
          <Link
            href="https://calendly.com/xinity/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 bg-white text-[#1B0C25] rounded-full text-[15px] font-semibold hover:bg-[#EDE6F6] transition-colors"
          >
            Book a Free Demo →
          </Link>
        </div>
      </section>
    </>
  );
}
