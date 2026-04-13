import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Xinity AI Press — Media Resources and News",
  description: "Press resources, media kit, and news about Xinity AI and sovereign AI infrastructure for European enterprises.",
  alternates: { canonical: "https://xinity.ai/press" },
};

export default function PressPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-[#ede6f6] to-[#F7F6F7]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-4">Press</p>
          <h1 className="text-[clamp(36px,5vw,60px)] font-medium leading-tight text-[#1B0C25] mb-4">Press & Media</h1>
          <p className="text-[16px] text-[rgba(28,12,38,0.65)] leading-relaxed">For media inquiries, interviews, and press materials, contact us at <a href="mailto:press@xinity.ai" className="underline underline-offset-4 hover:text-[#9B6FC8] transition-colors">press@xinity.ai</a></p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#F7F6F7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[22px] font-semibold text-[#1B0C25] mb-6" style={{ fontFamily: "Inter, sans-serif" }}>Latest News</h2>
          <div className="space-y-4">
            {[
              { date: "April 1, 2026", title: "Xinity Open-Sources Its AI Runtime Under Apache 2.0", tag: "Product", body: "Xinity releases the full Xinity Engine as open-source software. Free forever for developers. Enterprise features remain commercial." },
              { date: "March 20, 2026", title: "Xinity Warns of 'Sovereignty Washing' in European AI Market", tag: "Thought Leadership", body: "CEO Alexander Zehetmaier publishes guide helping enterprises spot vendors claiming sovereign AI while routing data through US infrastructure." },
            ].map(item => (
              <div key={item.title} className="bg-white rounded-2xl p-7 border border-[rgba(27,12,37,0.06)]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] font-semibold text-[#9B8EAA] uppercase tracking-wider">{item.tag}</span>
                  <span className="text-[12px] text-[rgba(27,12,37,0.4)]">{item.date}</span>
                </div>
                <h3 className="text-[17px] font-semibold text-[#1B0C25] mb-2">{item.title}</h3>
                <p className="text-[14px] text-[rgba(28,12,38,0.65)] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-[22px] font-semibold text-[#1B0C25] mb-6" style={{ fontFamily: "Inter, sans-serif" }}>Company Facts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Founded", value: "2024, Vienna Austria" },
                { label: "Open Source", value: "Apache 2.0, github.com/xinity-ai" },
                { label: "Pricing", value: "From €69/month (annual)" },
              ].map(item => (
                <div key={item.label} className="bg-[#EDE6F6] rounded-xl p-5">
                  <p className="text-[12px] text-[rgba(27,12,37,0.45)] uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-[15px] font-medium text-[#1B0C25]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-[#1B0C27] text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-[24px] font-medium mb-3">Media Inquiries</h2>
          <p className="text-[14px] text-[rgba(255,255,255,0.6)] mb-5">For interviews, product demos, and press materials.</p>
          <Link href="mailto:press@xinity.ai" className="inline-block px-6 py-3 bg-white text-[#1B0C25] rounded-full text-[14px] font-semibold hover:bg-[#EDE6F6] transition-colors">press@xinity.ai</Link>
        </div>
      </section>
    </>
  );
}
