import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is Sovereign AI? | EU Data Sovereignty Explained",
  description:
    "Sovereign AI means running AI on infrastructure you own. Learn how European enterprises can achieve data sovereignty, GDPR compliance, and EU AI Act readiness.",
  alternates: { canonical: "https://xinity.ai/sovereignai" },
};

const faqItems = [
  {
    question: "What makes AI 'sovereign'?",
    answer:
      "Sovereign AI runs entirely on infrastructure you own and control — inside the EU, under your governance, with no third-party access to your data or queries. The infrastructure, models, and API are all under your direct ownership.",
  },
  {
    question: "Is sovereign AI slower than cloud AI?",
    answer:
      "Not at all. Modern on-premise hardware delivers inference speeds comparable to or exceeding cloud providers. Because you own the compute, you eliminate network latency to external data centers and have dedicated capacity.",
  },
  {
    question: "How does it handle the EU AI Act?",
    answer:
      "Xinity's sovereign AI infrastructure includes audit logs on every inference request, data residency enforcement, and access controls designed for high-risk system compliance. This covers the key obligations under the EU AI Act that take effect August 2, 2026.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const comparisonRows = [
  { feature: "Data Location", sovereign: "EU Only", cloud: "US / Unknown" },
  { feature: "GDPR", sovereign: "Fully Compliant", cloud: "At Risk" },
  { feature: "Cost Model", sovereign: "Predictable Fixed", cloud: "Per-Token Variable" },
  { feature: "Infrastructure", sovereign: "Full Control", cloud: "Provider Dependent" },
  { feature: "Audit Trail", sovereign: "Built In", cloud: "Limited / None" },
  { feature: "Vendor Lock-In", sovereign: "None", cloud: "High" },
];

const layers = [
  {
    label: "Layer 1",
    title: "Infrastructure",
    desc: "EU-hosted or fully on-premise deployment. Your servers, your building, your data center. Zero cross-border transfer.",
  },
  {
    label: "Layer 2",
    title: "Compliance",
    desc: "Full audit trails, GDPR-by-design architecture, EU AI Act high-risk compliance readiness, data residency enforcement built in.",
  },
  {
    label: "Layer 3",
    title: "Intelligence",
    desc: "OpenAI-compatible API layer. Your existing applications work with one line of code change. All inference stays on your infrastructure.",
  },
];

export default function SovereignAIPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-[#ede6f6] to-[#F7F6F7]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-4">
            Explainer
          </p>
          <h1 className="text-[clamp(36px,5vw,64px)] font-medium leading-tight text-[#1B0C25] mb-6">
            What is Sovereign AI?
          </h1>
          <p className="text-[17px] text-[rgba(28,12,38,0.65)] max-w-2xl mx-auto leading-relaxed">
            Sovereign AI means running AI on infrastructure you own and control — inside the EU,
            under your governance, with no third-party access.
          </p>
        </div>
      </section>

      {/* Four pillars */}
      <section className="py-20 px-4 bg-[#F7F6F7]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pillar 1 */}
            <div className="bg-[#EDE6F6] rounded-2xl p-8">
              <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-3">
                Data Residency
              </p>
              <h2 className="text-[22px] font-medium text-[#1B0C25] mb-4 leading-snug">
                Your Data Stays in the EU
              </h2>
              <ul className="space-y-2">
                {[
                  "EU-only infrastructure",
                  "Zero cross-border data transfer",
                  "No exposure to US subpoenas or CLOUD Act",
                  "GDPR compliant by architecture, not by policy",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[14px] text-[rgba(28,12,38,0.7)]">
                    <span className="mt-0.5 text-[#9B6FC8] shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white rounded-2xl p-8 border border-[rgba(27,12,37,0.06)]">
              <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-3">
                Ownership
              </p>
              <h2 className="text-[22px] font-medium text-[#1B0C25] mb-4 leading-snug">
                You Own the Infrastructure
              </h2>
              <ul className="space-y-2">
                {[
                  "Runs on your servers",
                  "No shared compute with other tenants",
                  "Full control over which models you deploy",
                  "Full control over API access and permissions",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[14px] text-[rgba(28,12,38,0.7)]">
                    <span className="mt-0.5 text-[#9B6FC8] shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white rounded-2xl p-8 border border-[rgba(27,12,37,0.06)]">
              <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-3">
                Compliance
              </p>
              <h2 className="text-[22px] font-medium text-[#1B0C25] mb-4 leading-snug">
                Full Regulatory Control
              </h2>
              <ul className="space-y-2">
                {[
                  "Audit log on every single inference request",
                  "EU AI Act high-risk compliance ready",
                  "Data residency enforcement built in",
                  "Demonstrable compliance for regulators",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[14px] text-[rgba(28,12,38,0.7)]">
                    <span className="mt-0.5 text-[#9B6FC8] shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pillar 4 */}
            <div className="bg-[#EDE6F6] rounded-2xl p-8">
              <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-3">
                Independence
              </p>
              <h2 className="text-[22px] font-medium text-[#1B0C25] mb-4 leading-snug">
                No Vendor Lock-In
              </h2>
              <ul className="space-y-2">
                {[
                  "OpenAI-compatible API — no rewrites needed",
                  "No usage-based pricing surprises",
                  "Open source core (Apache 2.0)",
                  "Switch providers without disruption",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[14px] text-[rgba(28,12,38,0.7)]">
                    <span className="mt-0.5 text-[#9B6FC8] shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 bg-[#F8F7F8]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-3">
              Comparison
            </p>
            <h2 className="text-[clamp(28px,4vw,42px)] font-medium text-[#1B0C25] leading-tight">
              Sovereign AI vs Cloud AI
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-[rgba(27,12,37,0.08)] overflow-hidden">
            <div className="grid grid-cols-3 bg-[#1B0C25] text-white px-6 py-4">
              <span className="text-[13px] font-semibold">Feature</span>
              <span className="text-[13px] font-semibold text-[#D588FC]">Sovereign AI</span>
              <span className="text-[13px] font-semibold text-[rgba(255,255,255,0.5)]">Cloud AI</span>
            </div>
            {comparisonRows.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 px-6 py-4 ${
                  i % 2 === 0 ? "bg-white" : "bg-[#faf9fb]"
                } border-t border-[rgba(27,12,37,0.05)]`}
              >
                <span className="text-[14px] font-medium text-[#1B0C25]">{row.feature}</span>
                <span className="text-[14px] text-[#2d8a2d] font-medium">{row.sovereign}</span>
                <span className="text-[14px] text-[rgba(28,12,38,0.5)]">{row.cloud}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Layers */}
      <section className="py-20 px-4 bg-[#F7F6F7]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-3">
              Architecture
            </p>
            <h2 className="text-[clamp(28px,4vw,42px)] font-medium text-[#1B0C25] leading-tight">
              Three Layers of Sovereignty
            </h2>
          </div>
          <div className="space-y-4">
            {layers.map((layer, i) => (
              <div key={layer.title} className="flex gap-6 items-start bg-white rounded-2xl p-7 border border-[rgba(27,12,37,0.06)]">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-[#EDE6F6] flex items-center justify-center">
                  <span className="text-[13px] font-bold text-[#1B0C25]">{i + 1}</span>
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-1">
                    {layer.label}
                  </p>
                  <h3 className="text-[18px] font-medium text-[#1B0C25] mb-2">{layer.title}</h3>
                  <p className="text-[14px] text-[rgba(28,12,38,0.65)] leading-relaxed">{layer.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-[#F8F7F8]">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 text-center">
            <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-3">
              FAQ
            </p>
            <h2 className="text-[clamp(24px,3vw,36px)] font-medium text-[#1B0C25]">
              Common Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="bg-white rounded-2xl border border-[rgba(27,12,37,0.06)] group open:border-[rgba(27,12,37,0.12)] transition-colors"
              >
                <summary className="px-6 py-4 cursor-pointer text-[15px] font-medium text-[#1B0C25] list-none flex items-center justify-between gap-4">
                  <span>{item.question}</span>
                  <span className="shrink-0 text-[#9B8EAA] group-open:rotate-180 transition-transform duration-200 text-xl leading-none">
                    ↓
                  </span>
                </summary>
                <p className="px-6 pb-5 text-[14px] text-[rgba(28,12,38,0.65)] leading-relaxed border-t border-[rgba(27,12,37,0.06)] pt-4">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-[#1B0C27] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[12px] font-semibold text-[rgba(255,255,255,0.4)] uppercase tracking-widest mb-4">
            Get Started
          </p>
          <h2 className="text-[clamp(28px,4vw,42px)] font-medium leading-tight mb-4">
            Ready to Run Sovereign AI?
          </h2>
          <p className="text-[15px] text-[rgba(255,255,255,0.6)] mb-8">
            See how Xinity deploys sovereign AI infrastructure for your company in days, not months.
          </p>
          <a
            href="https://calendly.com/xinity/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 bg-white text-[#1B0C25] rounded-full text-[15px] font-semibold hover:bg-[#EDE6F6] transition-colors"
          >
            Book a Demo
          </a>
        </div>
      </section>
    </>
  );
}
