import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Xinity Open Source — Apache 2.0 Sovereign AI Runtime",
  description:
    "The Xinity Engine is now open source (Apache 2.0). Free forever for developers. Run sovereign AI on your own infrastructure.",
  alternates: { canonical: "https://xinity.ai/xinity_opensource" },
};

const openSourceComponents = [
  {
    title: "The Xinity Engine",
    desc: "Full inference runtime. Deploy any open-source model on your own hardware. The complete engine that powers production sovereign AI deployments.",
  },
  {
    title: "OpenAI-Compatible API Layer",
    desc: "Drop-in replacement for the OpenAI API. Your existing applications work without a single rewrite — just change the base URL.",
  },
  {
    title: "Model Management Core",
    desc: "Load, unload, and route between models dynamically. Supports all major open-source model architectures.",
  },
];

export default function OpenSourcePage() {
  return (
    <>
      {/* Hero — dark bg */}
      <section className="pt-32 pb-20 px-4 bg-[#1B0C27] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[12px] font-semibold text-[rgba(255,255,255,0.4)] uppercase tracking-widest mb-4">
            April 1, 2026
          </p>
          <h1 className="text-[clamp(36px,5.5vw,68px)] font-medium leading-tight mb-6">
            We gave developers
            <br />
            <span className="text-[#D588FC]">the keys.</span>
          </h1>
          <p className="text-[17px] text-[rgba(255,255,255,0.65)] max-w-2xl mx-auto leading-relaxed mb-10">
            The Xinity Engine is now live on GitHub — Apache 2.0 licensed, free forever.
            Run sovereign AI on your own infrastructure. No strings attached.
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 mb-10">
            <div className="text-center">
              <p className="text-[36px] font-semibold text-white leading-none">100%</p>
              <p className="text-[12px] text-[rgba(255,255,255,0.45)] mt-2 uppercase tracking-wider">Stays in Europe</p>
            </div>
            <div className="w-px h-12 bg-[rgba(255,255,255,0.1)]" />
            <div className="text-center">
              <p className="text-[36px] font-semibold text-white leading-none">0€</p>
              <p className="text-[12px] text-[rgba(255,255,255,0.45)] mt-2 uppercase tracking-wider">For every developer</p>
            </div>
            <div className="w-px h-12 bg-[rgba(255,255,255,0.1)]" />
            <div className="text-center">
              <p className="text-[36px] font-semibold text-white leading-none">Apache</p>
              <p className="text-[12px] text-[rgba(255,255,255,0.45)] mt-2 uppercase tracking-wider">2.0 License</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://github.com/xinity-ai/xinity-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 bg-white text-[#1B0C25] rounded-full text-[14px] font-semibold hover:bg-[#EDE6F6] transition-colors"
            >
              View on GitHub →
            </a>
            <Link
              href="/sovereign-ai-blog/why-we-open-sourced-xinity"
              className="px-7 py-3 bg-[rgba(255,255,255,0.1)] text-white border border-[rgba(255,255,255,0.15)] rounded-full text-[14px] font-medium hover:bg-[rgba(255,255,255,0.15)] transition-colors"
            >
              Why we did it
            </Link>
          </div>
        </div>
      </section>

      {/* What's Open Source */}
      <section className="py-20 px-4 bg-[#F7F6F7]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-3">
              What&apos;s Included
            </p>
            <h2 className="text-[clamp(28px,4vw,42px)] font-medium text-[#1B0C25] leading-tight">
              Everything You Need to Run
              <br />
              Sovereign AI
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {openSourceComponents.map((c) => (
              <div key={c.title} className="bg-[#EDE6F6] rounded-2xl p-7">
                <h3 className="text-[18px] font-medium text-[#1B0C25] mb-3">{c.title}</h3>
                <p className="text-[14px] text-[rgba(28,12,38,0.7)] leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-20 px-4 bg-[#F8F7F8]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-3">
              Quick Start
            </p>
            <h2 className="text-[clamp(28px,4vw,42px)] font-medium text-[#1B0C25] leading-tight">
              Get Running in Minutes
            </h2>
          </div>
          <div className="bg-[#1B0C25] rounded-2xl p-8 text-white">
            <p className="text-[12px] font-semibold text-[rgba(255,255,255,0.4)] uppercase tracking-widest mb-4">
              Terminal
            </p>
            <div className="font-mono text-[14px] space-y-3">
              <div>
                <span className="text-[rgba(255,255,255,0.4)] mr-2">#</span>
                <span className="text-[rgba(255,255,255,0.65)]">Clone the repository</span>
              </div>
              <div className="bg-[rgba(255,255,255,0.06)] rounded-lg px-4 py-2.5">
                <span className="text-[#D588FC]">$ </span>
                <span className="text-white">git clone https://github.com/xinity-ai/xinity-ai</span>
              </div>
              <div className="mt-3">
                <span className="text-[rgba(255,255,255,0.4)] mr-2">#</span>
                <span className="text-[rgba(255,255,255,0.65)]">Run on your hardware</span>
              </div>
              <div className="bg-[rgba(255,255,255,0.06)] rounded-lg px-4 py-2.5">
                <span className="text-[#D588FC]">$ </span>
                <span className="text-white">cd xinity-ai && ./setup.sh</span>
              </div>
            </div>
            <p className="mt-6 text-[13px] text-[rgba(255,255,255,0.5)]">
              Full documentation available on GitHub. Supports Linux x86_64 and ARM64.
            </p>
          </div>
          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/xinity-ai/xinity-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 bg-[#1B0C25] text-white rounded-full text-[14px] font-medium hover:bg-[#2a1840] transition-colors"
            >
              View on GitHub
            </a>
            <a
              href="https://github.com/xinity-ai/xinity-ai/blob/main/README.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 bg-white text-[#1B0C25] border border-[rgba(27,12,37,0.15)] rounded-full text-[14px] font-medium hover:bg-[#EDE6F6] transition-colors"
            >
              Documentation
            </a>
          </div>
        </div>
      </section>

      {/* What's NOT in open source (enterprise) */}
      <section className="py-20 px-4 bg-[#F7F6F7]">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-8 border border-[rgba(27,12,37,0.06)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-3">
                  Enterprise
                </p>
                <h2 className="text-[clamp(24px,3.5vw,36px)] font-medium text-[#1B0C25] leading-tight mb-4">
                  When You&apos;re Ready for Enterprise,
                  <br />
                  We&apos;re There
                </h2>
                <p className="text-[15px] text-[rgba(28,12,38,0.65)] leading-relaxed mb-6">
                  The open-source core gets you running. When you need managed deployment,
                  SLAs, compliance support, multi-tenant controls, and dedicated support —
                  that&apos;s the Xinity Enterprise tier.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Managed deployment & updates",
                    "99.9% uptime SLA",
                    "EU AI Act compliance reporting",
                    "Dedicated support & onboarding",
                    "Advanced access controls & SSO",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[14px] text-[rgba(28,12,38,0.7)]">
                      <span className="mt-0.5 text-[#9B6FC8] shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://calendly.com/xinity/discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-7 py-3 bg-[#1B0C25] text-white rounded-full text-[14px] font-semibold hover:bg-[#2a1840] transition-colors"
                >
                  Book a Demo
                </a>
              </div>
              <div className="bg-[#EDE6F6] rounded-2xl p-6">
                <p className="text-[13px] font-semibold text-[rgba(27,12,37,0.5)] uppercase tracking-widest mb-4">
                  Open Source vs Enterprise
                </p>
                {[
                  { feature: "Inference Runtime", oss: true, ent: true },
                  { feature: "OpenAI-Compatible API", oss: true, ent: true },
                  { feature: "Model Management", oss: true, ent: true },
                  { feature: "Managed Deployment", oss: false, ent: true },
                  { feature: "Compliance Reporting", oss: false, ent: true },
                  { feature: "SLA & Support", oss: false, ent: true },
                ].map((row) => (
                  <div key={row.feature} className="flex items-center justify-between py-2 border-b border-[rgba(27,12,37,0.06)] last:border-0">
                    <span className="text-[13px] text-[#1B0C25]">{row.feature}</span>
                    <div className="flex gap-6">
                      <span className={`text-[13px] font-medium ${row.oss ? "text-[#2d8a2d]" : "text-[rgba(27,12,37,0.25)]"}`}>
                        {row.oss ? "✓" : "—"}
                      </span>
                      <span className={`text-[13px] font-medium ${row.ent ? "text-[#2d8a2d]" : "text-[rgba(27,12,37,0.25)]"}`}>
                        {row.ent ? "✓" : "—"}
                      </span>
                    </div>
                  </div>
                ))}
                <div className="flex justify-end gap-6 mt-3">
                  <span className="text-[11px] text-[rgba(27,12,37,0.4)] uppercase tracking-wide">Open</span>
                  <span className="text-[11px] text-[rgba(27,12,37,0.4)] uppercase tracking-wide">Enterprise</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
