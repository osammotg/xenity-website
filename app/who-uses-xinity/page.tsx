import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Xinity AI Customers — European Enterprises Running Sovereign AI",
  description: "European healthcare, finance, legal, and media companies use Xinity for GDPR-compliant, on-premise AI deployment.",
  alternates: { canonical: "https://xinity.ai/who-uses-xinity" },
};

const industries = [
  { icon: "🏥", name: "Healthcare", body: "Patient data is regulated at multiple levels — HIPAA, GDPR, sector-specific rules. Cloud AI creates transfer exposure that's simply not acceptable. Xinity keeps every inference on-premise." },
  { icon: "🏦", name: "Finance", body: "MiFID II, transaction data, trading strategies. Financial institutions can't send sensitive data to US servers. Xinity provides full audit trails and EU-only deployment." },
  { icon: "⚖️", name: "Legal", body: "Attorney-client privilege. Case strategy. Settlement details. Legal AI must be completely private. Xinity ensures no third party ever touches your data." },
  { icon: "📰", name: "Media & Publishing", body: "Unpublished stories, editorial decisions, source protection. Sovereign AI preserves journalistic independence and competitive advantage." },
];

export default function CustomersPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-[#ede6f6] to-[#F7F6F7] text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-4">Our Customers</p>
          <h1 className="text-[clamp(32px,5vw,56px)] font-medium leading-tight text-[#1B0C25] mb-4">Built for Industries Where Cloud AI Is Not an Option</h1>
          <p className="text-[16px] text-[rgba(28,12,38,0.65)] leading-relaxed max-w-2xl mx-auto">For some sectors, cloud AI isn't a product choice — it's a regulatory impossibility. These are the companies that need Xinity.</p>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#F7F6F7]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {industries.map(item => (
            <div key={item.name} className="bg-white rounded-2xl p-8 border border-[rgba(27,12,37,0.06)]">
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h2 className="text-[20px] font-semibold text-[#1B0C25] mb-3">{item.name}</h2>
              <p className="text-[14px] text-[rgba(28,12,38,0.65)] leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-[#F8F7F8]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[clamp(24px,3vw,36px)] font-medium text-[#1B0C25] mb-4" style={{ fontFamily: "Inter, sans-serif" }}>What They All Have in Common</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {["No data leaving your building", "Sector-specific compliance support", "Full audit trail for every AI call"].map(item => (
              <div key={item} className="bg-[#EDE6F6] rounded-2xl p-6 text-[15px] font-medium text-[#1B0C25]">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#1B0C27] text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-[clamp(22px,3vw,32px)] font-medium mb-4">Is Xinity right for your industry?</h2>
          <p className="text-[14px] text-[rgba(255,255,255,0.6)] mb-6">30 minutes. We'll show you exactly what sovereign AI deployment looks like for your regulatory context.</p>
          <Link href="https://calendly.com/xinity/discovery-call" target="_blank" rel="noopener noreferrer" className="inline-block px-7 py-3 bg-white text-[#1B0C25] rounded-full text-[14px] font-semibold hover:bg-[#EDE6F6] transition-colors">Book a Free Demo →</Link>
        </div>
      </section>
    </>
  );
}
