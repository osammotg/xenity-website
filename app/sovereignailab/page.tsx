import type { Metadata } from "next";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Sovereign AI Lab — Research on European AI Sovereignty",
  description: "The Xinity Sovereign AI Lab publishes research, guides, and resources on European AI sovereignty, GDPR compliance, and the EU AI Act.",
  alternates: { canonical: "https://xinity.ai/sovereignailab" },
};

const resources = [
  { title: "Sovereign AI vs Cloud AI", slug: "blog-sovereign-ai-vs-cloud-ai", tag: "Guide", desc: "The definitive comparison of on-premise sovereign AI vs cloud API deployment for European enterprises." },
  { title: "GDPR Article 9 and AI", slug: "blog-gdpr-article-9-ai-sensitive-data", tag: "Legal", desc: "What Article 9 special categories mean for your AI deployment — and why sovereign AI is the only safe path." },
  { title: "EU AI Act: What Enterprises Need to Know", slug: "eu-ai-act-ready", tag: "Compliance", desc: "A plain-language breakdown of the EU AI Act high-risk provisions and what enterprises must do before August 2026." },
  { title: "Sovereignty-Washing: How to Spot It", slug: "sovereignty-washing", tag: "Guide", desc: "Some vendors claim sovereign AI while routing your data through US infrastructure. Here's how to verify." },
];

export default function SovereignAILabPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-[#ede6f6] to-[#F7F6F7]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-4">Sovereign AI Lab</p>
          <h1 className="text-[clamp(36px,5vw,56px)] font-medium leading-tight text-[#1B0C25] mb-4">Research on European AI Sovereignty</h1>
          <p className="text-[16px] text-[rgba(28,12,38,0.65)] leading-relaxed">Practical guides, regulatory analysis, and technical resources for enterprises navigating AI sovereignty in Europe.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#F7F6F7]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[20px] font-semibold text-[#1B0C25] mb-6" style={{ fontFamily: "Inter, sans-serif" }}>Featured Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {resources.map(r => (
              <Link key={r.slug} href={`/sovereign-ai-blog/${r.slug}`} className="bg-white rounded-2xl p-6 border border-[rgba(27,12,37,0.06)] hover:border-[rgba(27,12,37,0.15)] transition-colors group">
                <span className="text-[11px] font-semibold text-[#9B8EAA] uppercase tracking-wider block mb-2">{r.tag}</span>
                <h3 className="text-[16px] font-medium text-[#1B0C25] group-hover:text-[#9B6FC8] transition-colors mb-2">{r.title}</h3>
                <p className="text-[13px] text-[rgba(28,12,38,0.6)] leading-relaxed">{r.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-[#EDE6F6]">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-[22px] font-medium text-[#1B0C25] mb-3">Stay up to date on sovereign AI</h2>
          <p className="text-[14px] text-[rgba(28,12,38,0.6)] mb-5">New research, regulatory updates, and implementation guides — in your inbox.</p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
