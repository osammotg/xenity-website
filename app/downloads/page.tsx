import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Xinity AI Documents — Technical Resources and Guides",
  description: "Download technical documentation, compliance guides, and resources for Xinity AI sovereign infrastructure deployment.",
  alternates: { canonical: "https://xinity.ai/downloads" },
};

const docs = [
  { title: "EU AI Act Compliance Guide", desc: "A practical guide to meeting EU AI Act high-risk system requirements with sovereign AI infrastructure.", tag: "Compliance", pages: "18 pages" },
  { title: "GDPR & Sovereign AI Whitepaper", desc: "How sovereign on-premise AI deployment satisfies GDPR Article 44-46 data transfer requirements by design.", tag: "Legal", pages: "12 pages" },
  { title: "Xinity Deployment Guide", desc: "Technical documentation for deploying the Xinity Runtime on your hardware — from bare metal to containerized.", tag: "Technical", pages: "32 pages" },
  { title: "ROI Calculator Template", desc: "Spreadsheet template for calculating your cloud AI spend vs Xinity total cost of ownership.", tag: "Finance", pages: "Excel + Google Sheets" },
];

export default function DownloadsPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-[#ede6f6] to-[#F7F6F7]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-4">Documents</p>
          <h1 className="text-[clamp(36px,5vw,56px)] font-medium leading-tight text-[#1B0C25] mb-4">Documents & Resources</h1>
          <p className="text-[16px] text-[rgba(28,12,38,0.65)]">Technical guides, compliance resources, and templates for sovereign AI deployment.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#F7F6F7]">
        <div className="max-w-4xl mx-auto space-y-4">
          {docs.map(doc => (
            <div key={doc.title} className="bg-white rounded-2xl p-7 border border-[rgba(27,12,37,0.06)] flex items-start justify-between gap-6">
              <div>
                <span className="text-[11px] font-semibold text-[#9B8EAA] uppercase tracking-wider block mb-2">{doc.tag}</span>
                <h2 className="text-[17px] font-semibold text-[#1B0C25] mb-2">{doc.title}</h2>
                <p className="text-[13px] text-[rgba(28,12,38,0.65)] leading-relaxed mb-2">{doc.desc}</p>
                <span className="text-[12px] text-[rgba(27,12,37,0.4)]">{doc.pages}</span>
              </div>
              <Link href="/contact" className="shrink-0 px-5 py-2 bg-[#EDE6F6] text-[#1B0C25] rounded-full text-[13px] font-medium hover:bg-[#D9CEF0] transition-colors">Request</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 bg-[#1B0C27] text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-[22px] font-medium mb-3">Need a custom document?</h2>
          <p className="text-[14px] text-[rgba(255,255,255,0.6)] mb-5">We can prepare custom compliance assessments, architecture docs, and security questionnaire responses for your procurement process.</p>
          <Link href="/contact" className="inline-block px-6 py-3 bg-white text-[#1B0C25] rounded-full text-[14px] font-semibold hover:bg-[#EDE6F6] transition-colors">Contact Us</Link>
        </div>
      </section>
    </>
  );
}
