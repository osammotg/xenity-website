"use client";

import { useState } from "react";
import Link from "next/link";

const plans = [
  {
    name: "Community",
    price: { monthly: "Free", annual: "Free" },
    period: "forever",
    description: "For developers evaluating sovereign AI and building proof-of-concepts.",
    cta: { label: "Get started free", href: "https://github.com/xinity-ai/xinity-ai", external: true },
    highlight: false,
    features: [
      "Xinity Runtime (full inference engine)",
      "OpenAI-compatible API",
      "120 GB VRAM",
      "Unlimited API keys",
      "Unlimited dashboard users",
      "1 organization",
      "Basic model management",
      "Community support",
    ],
  },
  {
    name: "Startup",
    price: { monthly: "€83", annual: "€69" },
    period: "per month, billed annually",
    description: "Small teams validating sovereign AI in production. First commercial deployments.",
    cta: { label: "Book a demo", href: "https://calendly.com/xinity/discovery-call", external: true },
    highlight: false,
    features: [
      "Everything in Community",
      "250 GB VRAM",
      "Unlimited organizations",
      "Commercial use license",
      "Usage analytics (per-key)",
      "Email support (48h SLA)",
    ],
  },
  {
    name: "SME",
    price: { monthly: "€1,319", annual: "€1,099" },
    period: "per month, billed annually",
    description: "Production workloads with governance requirements. Multiple teams, full compliance.",
    cta: { label: "Book a demo", href: "https://calendly.com/xinity/discovery-call", external: true },
    highlight: true,
    badge: "Most Popular",
    features: [
      "Everything in Startup",
      "800 GB VRAM",
      "SSO / LDAP integration",
      "Role-Based Access Control",
      "Audit logging",
      "Priority support (24h SLA)",
    ],
  },
  {
    name: "Enterprise",
    price: { monthly: "Custom", annual: "Custom" },
    period: "Organization-wide deployment",
    description: "Organization-wide sovereign AI infrastructure with deep integration support.",
    cta: { label: "Contact us", href: "/contact", external: false },
    highlight: false,
    features: [
      "Everything in SME",
      "Unlimited VRAM",
      "Yearly on-site AI Architect",
      "Dedicated Slack/Teams support",
      "Custom SLA agreement",
      "Multi-site deployment",
      "Named account manager",
    ],
  },
];

const comparisonRows = [
  { section: "Infrastructure", features: [
    { label: "VRAM", values: ["120 GB", "250 GB", "800 GB", "Unlimited"] },
    { label: "Xinity Runtime", values: ["✓", "✓", "✓", "✓"] },
    { label: "OpenAI-compatible API", values: ["✓", "✓", "✓", "✓"] },
    { label: "Multi-site deployment", values: ["—", "—", "—", "✓"] },
  ]},
  { section: "Access & Users", features: [
    { label: "Organizations", values: ["1", "Unlimited", "Unlimited", "Unlimited"] },
    { label: "API keys", values: ["✓", "✓", "✓", "✓"] },
    { label: "Commercial use license", values: ["—", "✓", "✓", "✓"] },
  ]},
  { section: "Management", features: [
    { label: "Model management", values: ["Basic", "✓", "✓", "✓"] },
    { label: "Usage analytics", values: ["—", "✓", "✓", "✓"] },
    { label: "SSO / LDAP", values: ["—", "—", "✓", "✓"] },
    { label: "Role-Based Access Control", values: ["—", "—", "✓", "✓"] },
    { label: "Audit logging", values: ["—", "—", "✓", "✓"] },
  ]},
  { section: "Support", features: [
    { label: "Support channel", values: ["Community", "Email", "Email", "Slack / Teams"] },
    { label: "Response SLA", values: ["—", "48h", "24h", "Custom"] },
    { label: "Named account manager", values: ["—", "—", "—", "✓"] },
    { label: "Yearly on-site AI Architect", values: ["—", "—", "—", "✓"] },
  ]},
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 px-4 bg-gradient-to-b from-[#ede6f6] to-[#F7F6F7]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-4">
            Pricing
          </p>
          <h1 className="text-[clamp(36px,5vw,60px)] font-medium leading-tight text-[#1B0C25] mb-4">
            Own Your AI.
            <br />
            Know Exactly What It Costs.
          </h1>
          <p className="text-[16px] text-[rgba(28,12,38,0.6)] max-w-2xl mx-auto leading-relaxed">
            Fixed monthly pricing with no per-token surprises, no cloud lock-in, and no
            hidden fees. Your software, your costs, your control.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={() => setAnnual(false)}
              className={`text-[14px] font-medium transition-colors ${!annual ? "text-[#1B0C25]" : "text-[rgba(27,12,37,0.4)]"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-12 h-6 rounded-full transition-colors ${annual ? "bg-[#1B0C25]" : "bg-[rgba(27,12,37,0.2)]"}`}
              aria-label="Toggle billing period"
            >
              <span
                className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all ${annual ? "left-7" : "left-1"}`}
              />
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`text-[14px] font-medium transition-colors ${annual ? "text-[#1B0C25]" : "text-[rgba(27,12,37,0.4)]"}`}
            >
              Annual{" "}
              <span className="text-[12px] text-[#9B6FC8] font-semibold">2 months free</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-16 px-4 bg-[#F7F6F7]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-7 flex flex-col ${
                plan.highlight
                  ? "bg-[#1B0C25] text-white"
                  : "bg-white border border-[rgba(27,12,37,0.06)]"
              }`}
            >
              {plan.badge && (
                <span className="absolute top-4 right-4 text-[11px] font-semibold bg-[#D588FC] text-[#1B0C25] px-3 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}
              <h2 className={`text-[18px] font-semibold mb-1 ${plan.highlight ? "text-white" : "text-[#1B0C25]"}`}>
                {plan.name}
              </h2>
              <div className="mb-1">
                <span className={`text-[36px] font-semibold ${plan.highlight ? "text-white" : "text-[#1B0C25]"}`}>
                  {annual ? plan.price.annual : plan.price.monthly}
                </span>
              </div>
              <p className={`text-[12px] mb-4 ${plan.highlight ? "text-[rgba(255,255,255,0.5)]" : "text-[rgba(27,12,37,0.4)]"}`}>
                {plan.period}
              </p>
              <p className={`text-[13px] mb-6 leading-relaxed flex-1 ${plan.highlight ? "text-[rgba(255,255,255,0.65)]" : "text-[rgba(28,12,38,0.6)]"}`}>
                {plan.description}
              </p>
              <ul className="space-y-2 mb-7">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className={`text-[13px] flex items-start gap-2 ${plan.highlight ? "text-[rgba(255,255,255,0.8)]" : "text-[rgba(28,12,38,0.7)]"}`}
                  >
                    <span className={`mt-0.5 shrink-0 ${plan.highlight ? "text-[#D588FC]" : "text-[#9B6FC8]"}`}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              {plan.cta.external ? (
                <a
                  href={plan.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-2.5 rounded-full text-[14px] font-medium transition-colors ${
                    plan.highlight
                      ? "bg-white text-[#1B0C25] hover:bg-[#EDE6F6]"
                      : "bg-[#1B0C25] text-white hover:bg-[#2a1840]"
                  }`}
                >
                  {plan.cta.label}
                </a>
              ) : (
                <Link
                  href={plan.cta.href}
                  className={`block text-center py-2.5 rounded-full text-[14px] font-medium transition-colors ${
                    plan.highlight
                      ? "bg-white text-[#1B0C25] hover:bg-[#EDE6F6]"
                      : "bg-[#1B0C25] text-white hover:bg-[#2a1840]"
                  }`}
                >
                  {plan.cta.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 px-4 bg-[#F8F7F8]">
        <div className="max-w-6xl mx-auto overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="pb-4 text-[13px] font-medium text-[rgba(27,12,37,0.4)] w-1/3" />
                {plans.map((p) => (
                  <th
                    key={p.name}
                    className={`pb-4 text-[14px] font-semibold text-center ${p.highlight ? "text-[#9B6FC8]" : "text-[#1B0C25]"}`}
                  >
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((section) => (
                <>
                  <tr key={section.section}>
                    <td
                      colSpan={5}
                      className="py-3 text-[11px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest border-t border-[rgba(27,12,37,0.06)]"
                    >
                      {section.section}
                    </td>
                  </tr>
                  {section.features.map((row) => (
                    <tr key={row.label} className="border-t border-[rgba(27,12,37,0.04)]">
                      <td className="py-3 text-[13px] text-[rgba(28,12,38,0.7)]">{row.label}</td>
                      {row.values.map((val, i) => (
                        <td
                          key={i}
                          className={`py-3 text-[13px] text-center ${
                            val === "—"
                              ? "text-[rgba(27,12,37,0.25)]"
                              : val === "✓"
                              ? "text-[#9B6FC8] font-semibold"
                              : "text-[#1B0C25] font-medium"
                          }`}
                        >
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ROI teaser */}
      <section className="py-16 px-4 bg-[#EDE6F6]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[clamp(22px,3vw,32px)] font-medium text-[#1B0C25] mb-3">
            How much are you spending on AI APIs today?
          </h2>
          <p className="text-[15px] text-[rgba(28,12,38,0.65)] mb-6 leading-relaxed">
            Most European enterprises running AI on cloud APIs spend 3–5× more per year
            than an equivalent Xinity deployment — without owning any of the infrastructure.
          </p>
          <Link
            href="/roi-calculator"
            className="inline-block px-6 py-3 bg-[#1B0C25] text-white rounded-full text-[14px] font-medium hover:bg-[#2a1840] transition-colors"
          >
            Calculate Your Savings →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#1B0C27] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[clamp(24px,3vw,36px)] font-medium mb-3">
            Not sure which plan is right for you?
          </h2>
          <p className="text-[15px] text-[rgba(255,255,255,0.6)] mb-6">
            Book a 30-minute call. We&apos;ll look at your current setup and recommend
            the right tier — no commitment required.
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
