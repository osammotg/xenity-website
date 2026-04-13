import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Xinity Works — Sovereign AI Deployment Process",
  description:
    "Deploy sovereign AI in days with Xinity's three-step process. Connect your existing apps via OpenAI-compatible API with zero rewrites.",
  alternates: { canonical: "https://xinity.ai/how-xinity-works" },
};

const steps = [
  {
    number: "01",
    title: "Connect",
    headline: "Point Your Apps at the Xinity API",
    body: "Point your existing applications to the Xinity API. One line of code change. Works with any OpenAI-compatible integration — no rewrites, no workflow disruption, no new tooling to learn.",
    detail: "Works with LangChain, LlamaIndex, custom integrations, and every major framework that supports the OpenAI API.",
  },
  {
    number: "02",
    title: "Deploy",
    headline: "We Deploy on Your Infrastructure",
    body: "We help you deploy the Xinity Runtime on your own hardware or EU-hosted servers. Your data never leaves. We handle setup, model selection, and optimization.",
    detail: "Supports bare metal, private cloud, and EU-hosted environments. Most deployments complete within days.",
  },
  {
    number: "03",
    title: "Control",
    headline: "Full Visibility from Day One",
    body: "Manage models, monitor usage, control costs, and maintain full audit logs from the Xinity dashboard. Complete visibility into every inference request.",
    detail: "Role-based access controls, per-team cost tracking, model performance metrics, and exportable audit logs.",
  },
];

const bentoFeatures = [
  {
    title: "Fast Migration",
    body: "Days, not months. Your existing OpenAI integrations work immediately — no rewrites required.",
    wide: false,
  },
  {
    title: "Zero Data Exposure",
    body: "Your data never leaves your infrastructure. No third-party access. No cross-border transfers.",
    wide: false,
  },
  {
    title: "Full Audit Trail",
    body: "Every inference request is logged with timestamp, user, model, token count, and latency. Export for regulators on demand.",
    wide: false,
  },
  {
    title: "Cost Predictability",
    body: "Fixed infrastructure cost. No per-token billing surprises. Know exactly what AI costs your company each month.",
    wide: false,
  },
];

export default function HowXinityWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-[#ede6f6] to-[#F7F6F7]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-4">
            Deployment Process
          </p>
          <h1 className="text-[clamp(36px,5vw,64px)] font-medium leading-tight text-[#1B0C25] mb-6">
            How Xinity Works
          </h1>
          <p className="text-[17px] text-[rgba(28,12,38,0.65)] max-w-2xl mx-auto leading-relaxed">
            Simple, fast deployment. From cloud AI to fully sovereign AI in three steps —
            without rewriting a single line of your existing integrations.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-4 bg-[#F7F6F7]">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="flex flex-col md:flex-row gap-8 items-start bg-white rounded-2xl p-8 border border-[rgba(27,12,37,0.06)]"
              >
                <div className="shrink-0 flex flex-col items-center md:items-start gap-2">
                  <span className="text-[48px] font-extrabold text-[#EDE6F6] leading-none" style={{ fontFamily: "Inter, sans-serif" }}>
                    {step.number}
                  </span>
                  <span className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest">
                    {step.title}
                  </span>
                </div>
                <div className="flex-1">
                  <h2 className="text-[22px] font-medium text-[#1B0C25] mb-3 leading-snug">
                    {step.headline}
                  </h2>
                  <p className="text-[15px] text-[rgba(28,12,38,0.65)] leading-relaxed mb-3">
                    {step.body}
                  </p>
                  <p className="text-[13px] text-[rgba(28,12,38,0.45)] leading-relaxed">
                    {step.detail}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block shrink-0 self-center text-[24px] text-[rgba(27,12,37,0.15)]">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Bento */}
      <section className="py-20 px-4 bg-[#F8F7F8]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-3">
              What You Get
            </p>
            <h2 className="text-[clamp(28px,4vw,42px)] font-medium text-[#1B0C25] leading-tight">
              Everything You Need, Nothing You Don&apos;t
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {bentoFeatures.map((f) => (
              <div key={f.title} className="bg-[#EDE6F6] rounded-2xl p-7">
                <h3 className="text-[18px] font-medium text-[#1B0C25] mb-3">{f.title}</h3>
                <p className="text-[14px] text-[rgba(28,12,38,0.7)] leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-[#F7F6F7]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-4">
            Timeline
          </p>
          <h2 className="text-[clamp(24px,3.5vw,38px)] font-medium text-[#1B0C25] mb-10">
            From Signed Contract to Running AI
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-0">
            {[
              { day: "Day 1", label: "Kickoff call & hardware review" },
              { day: "Day 2–3", label: "Runtime deployed & configured" },
              { day: "Day 4", label: "API live, apps connected" },
              { day: "Day 5+", label: "Full production, audit logs running" },
            ].map((item, i, arr) => (
              <div key={item.day} className="flex flex-col sm:flex-row items-center">
                <div className="text-center px-4">
                  <p className="text-[13px] font-bold text-[#1B0C25] mb-1">{item.day}</p>
                  <p className="text-[12px] text-[rgba(28,12,38,0.55)] max-w-[100px]">{item.label}</p>
                </div>
                {i < arr.length - 1 && (
                  <span className="text-[rgba(27,12,37,0.2)] text-xl my-2 sm:my-0 sm:mx-1 rotate-90 sm:rotate-0">→</span>
                )}
              </div>
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
            Ready to Deploy Sovereign AI?
          </h2>
          <p className="text-[15px] text-[rgba(255,255,255,0.6)] mb-8">
            30 minutes. We&apos;ll walk through your infrastructure, your integrations, and your timeline.
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
