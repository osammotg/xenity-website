import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Sovereign AI Blog — Insights on On-Prem AI and EU Compliance",
  description: "Expert insights on sovereign AI, GDPR compliance, EU AI Act requirements, and on-premise AI infrastructure for European enterprises.",
  alternates: { canonical: "https://xinity.ai/sovereign-ai-blog" },
};

export default function BlogPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-[#ede6f6] to-[#F7F6F7]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-4">Blog</p>
          <h1 className="text-[clamp(36px,5vw,56px)] font-medium leading-tight text-[#1B0C25] mb-4">Insights on Sovereign AI &amp; On-Prem Infrastructure</h1>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#F7F6F7]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogPosts.map(post => (
              <Link key={post.slug} href={`/sovereign-ai-blog/${post.slug}`} className="bg-white rounded-2xl p-6 border border-[rgba(27,12,37,0.06)] hover:border-[rgba(27,12,37,0.15)] transition-colors group flex flex-col">
                <span className="text-[11px] font-semibold text-[#9B8EAA] uppercase tracking-wider">{post.tag}</span>
                <p className="text-[12px] text-[rgba(27,12,37,0.4)] mt-1 mb-3">{post.date}</p>
                <h2 className="text-[16px] font-medium text-[#1B0C25] group-hover:text-[#9B6FC8] transition-colors leading-snug flex-1">{post.title}</h2>
                <p className="text-[13px] text-[rgba(28,12,38,0.6)] leading-relaxed mt-3 line-clamp-2">{post.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-[#EDE6F6]">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-[22px] font-medium text-[#1B0C25] mb-3">Want to stay in the loop?</h2>
          <p className="text-[14px] text-[rgba(28,12,38,0.6)] mb-5">New posts on sovereign AI, GDPR, and the EU AI Act — straight to your inbox.</p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
