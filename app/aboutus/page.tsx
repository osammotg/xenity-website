import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Xinity AI — Making Europe Compute Independent",
  description:
    "Xinity is built by Alexander Zehetmaier and Jonas Vander — 10+ years AI expertise each — to give every European company sovereign AI infrastructure.",
  alternates: { canonical: "https://xinity.ai/aboutus" },
};

const values = [
  {
    title: "Sovereignty First",
    body: "Every product decision starts with one question: does this give our customers more control or less? Control always wins.",
  },
  {
    title: "Open by Default",
    body: "Our core runtime is Apache 2.0. No black boxes. You can inspect, audit, fork, and run it yourself. Trust is earned through transparency.",
  },
  {
    title: "Built for Europe",
    body: "We are a European company building for European enterprises. GDPR, the EU AI Act, and digital sovereignty aren't constraints — they're our design spec.",
  },
  {
    title: "Long-Term Thinking",
    body: "We're not optimizing for the next funding round. We're building infrastructure that European companies can depend on for the next decade.",
  },
];

const founders = [
  {
    name: "Alexander Zehetmaier",
    role: "Co-Founder",
    bio: "10+ years of AI expertise spanning enterprise software, machine learning infrastructure, and production AI systems. Based in Vienna.",
  },
  {
    name: "Jonas Vander",
    role: "Co-Founder",
    bio: "10+ years of AI expertise in research, applied ML, and building AI products for regulated industries. Based in Vienna.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-[#ede6f6] to-[#F7F6F7]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-4">
            Our Mission
          </p>
          <h1 className="text-[clamp(36px,5vw,64px)] font-medium leading-tight text-[#1B0C25] mb-6">
            Making Europe
            <br />
            <span className="text-[#9B6FC8]">Compute Independent.</span>
          </h1>
          <p className="text-[17px] text-[rgba(28,12,38,0.65)] max-w-2xl mx-auto leading-relaxed">
            One company at a time.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 bg-[#F7F6F7]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-4">
            Why We Exist
          </p>
          <p className="text-[18px] text-[#1B0C25] leading-relaxed font-medium mb-6">
            Xinity is the foundation to run any AI sovereign, on-premise, under your control.
          </p>
          <p className="text-[16px] text-[rgba(28,12,38,0.65)] leading-relaxed">
            Built by Alexander Zehetmaier and Jonas Vander — each with 10+ years of AI expertise —
            we exist to give every European company the infrastructure layer they need to own their
            compute and break free from hyperscaler dependency. For good.
          </p>
          <p className="text-[16px] text-[rgba(28,12,38,0.65)] leading-relaxed mt-4">
            Today, European enterprises are running critical AI workloads on US cloud infrastructure —
            exposed to foreign jurisdiction, unpredictable costs, and regulatory risk. We built Xinity
            to change that. Not because it&apos;s required by law. Because it&apos;s the right foundation
            for the next generation of European technology.
          </p>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 px-4 bg-[#F8F7F8]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-3">
              Founders
            </p>
            <h2 className="text-[clamp(28px,4vw,42px)] font-medium text-[#1B0C25] leading-tight">
              Built by People Who Have Done This Before
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {founders.map((f) => (
              <div key={f.name} className="bg-white rounded-2xl p-8 border border-[rgba(27,12,37,0.06)]">
                <div className="w-14 h-14 rounded-2xl bg-[#EDE6F6] flex items-center justify-center mb-5">
                  <span className="text-[22px] font-bold text-[#1B0C25]">
                    {f.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-[20px] font-medium text-[#1B0C25] mb-1">{f.name}</h3>
                <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-4">
                  {f.role}
                </p>
                <p className="text-[14px] text-[rgba(28,12,38,0.65)] leading-relaxed">{f.bio}</p>
                <div className="mt-4 flex items-center gap-1">
                  <span className="text-[12px] text-[rgba(27,12,37,0.4)]">10+ years AI expertise</span>
                  <span className="w-1 h-1 rounded-full bg-[rgba(27,12,37,0.25)] mx-1" />
                  <span className="text-[12px] text-[rgba(27,12,37,0.4)]">Vienna, Austria</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-[#F7F6F7]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-3">
              Values
            </p>
            <h2 className="text-[clamp(28px,4vw,42px)] font-medium text-[#1B0C25] leading-tight">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v) => (
              <div key={v.title} className="bg-[#EDE6F6] rounded-2xl p-7">
                <h3 className="text-[18px] font-medium text-[#1B0C25] mb-3">{v.title}</h3>
                <p className="text-[14px] text-[rgba(28,12,38,0.7)] leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company facts */}
      <section className="py-16 px-4 bg-[#F8F7F8]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Founded", value: "Vienna, AT" },
              { label: "License", value: "Apache 2.0" },
              { label: "Focus", value: "Europe Only" },
              { label: "From", value: "€69 / month" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-5 text-center border border-[rgba(27,12,37,0.06)]">
                <p className="text-[22px] font-semibold text-[#1B0C25] mb-1">{stat.value}</p>
                <p className="text-[11px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-[#1B0C27] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[12px] font-semibold text-[rgba(255,255,255,0.4)] uppercase tracking-widest mb-4">
            Work With Us
          </p>
          <h2 className="text-[clamp(28px,4vw,42px)] font-medium leading-tight mb-4">
            Ready to Make Your Company Compute Independent?
          </h2>
          <p className="text-[15px] text-[rgba(255,255,255,0.6)] mb-8">
            Book a call with Alexander or Jonas. No sales team. Just the founders.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://calendly.com/xinity/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 bg-white text-[#1B0C25] rounded-full text-[15px] font-semibold hover:bg-[#EDE6F6] transition-colors"
            >
              Book a Demo
            </a>
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 bg-[rgba(255,255,255,0.1)] text-white border border-[rgba(255,255,255,0.15)] rounded-full text-[15px] font-semibold hover:bg-[rgba(255,255,255,0.15)] transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
