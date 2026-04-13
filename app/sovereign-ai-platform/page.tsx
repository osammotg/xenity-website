import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sovereign AI Platform — Features",
  description:
    "One platform to deploy, manage, and scale AI — entirely on infrastructure you own. Seamless OpenAI-compatible API, on-prem deployment, and full audit control.",
  alternates: { canonical: "https://xinity.ai/sovereign-ai-platform" },
};

const benefits = [
  {
    title: "Data Sovereignty",
    body: "Run AI models on your own hardware. Your data never leaves your environment — no cross-border transfers, no foreign jurisdiction.",
  },
  {
    title: "Enterprise-Ready",
    body: "Production-grade AI for healthcare, finance, legal, and media — where cloud AI is simply not an option.",
  },
  {
    title: "Cost Predictability",
    body: "Fixed infrastructure costs. No per-token pricing, no cloud billing surprises. Know exactly what AI costs you every month.",
  },
  {
    title: "Fast Migration",
    body: "Switch from any cloud AI provider in days — one line of code. No rewrites. No workflow disruption.",
  },
  {
    title: "Regulatory Control",
    body: "Built for GDPR, EU AI Act, and sector-specific data protection requirements. Full audit trail included.",
  },
  {
    title: "Open-Core Foundation",
    body: "Deploy open-source AI models on your own servers — fully self-managed. The runtime is Apache 2.0.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 px-4 bg-gradient-to-b from-[#ede6f6] to-[#F7F6F7]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-4">
            Product Overview
          </p>
          <h1 className="text-[clamp(36px,5vw,64px)] font-medium leading-tight text-[#1B0C25] mb-6">
            Explore the Xinity Platform
          </h1>
          <p className="text-[17px] text-[rgba(28,12,38,0.65)] max-w-2xl mx-auto leading-relaxed">
            One platform to deploy, manage, and scale AI — entirely on infrastructure you own.
          </p>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 px-4 bg-[#F7F6F7]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Seamless Integration with Existing Systems",
                body: "Xinity Runtime connects directly to your existing applications via OpenAI-compatible APIs. No new tooling, no retraining your teams.",
              },
              {
                title: "Production-Ready AI Capabilities",
                body: "Run leading open-source models at enterprise scale. No external provider has access to your data or your queries.",
              },
              {
                title: "Central AI Control Plane",
                body: "Manage all AI usage across your organization from one place — with full logs, access controls, and cost visibility.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-7 border border-[rgba(27,12,37,0.06)]">
                <h2 className="text-[18px] font-medium text-[#1B0C25] mb-3 leading-snug">{item.title}</h2>
                <p className="text-[14px] text-[rgba(28,12,38,0.65)] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-[#F8F7F8]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-3">
              Key Benefits
            </p>
            <h2
              className="text-[clamp(28px,4vw,42px)] font-extrabold text-[#1B0C27] leading-tight"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Why Choose Xinity AI
            </h2>
            <p className="mt-3 text-[15px] text-[rgba(28,12,38,0.6)] max-w-lg">
              Sovereign AI built for European enterprises — private, compliant, and production-ready from day one.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((item) => (
              <div key={item.title} className="bg-[#EDE6F6] rounded-2xl p-7">
                <h3 className="text-[16px] font-semibold text-[#1B0C25] mb-2">{item.title}</h3>
                <p className="text-[14px] text-[rgba(28,12,38,0.7)] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#1B0C27] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[clamp(24px,3vw,36px)] font-medium mb-4">
            Ready to own your AI infrastructure?
          </h2>
          <Link
            href="https://calendly.com/xinity/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 bg-white text-[#1B0C25] rounded-full text-[14px] font-semibold hover:bg-[#EDE6F6] transition-colors"
          >
            Book a Free Demo →
          </Link>
        </div>
      </section>
    </>
  );
}
