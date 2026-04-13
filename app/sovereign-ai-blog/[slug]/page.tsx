import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://xinity.ai/sovereign-ai-blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
    },
  };
}

const postContent: Record<string, string[]> = {
  "blog-sovereign-ai-vs-cloud-ai": [
    "When a European enterprise feeds data into GPT-4 or Claude, that data travels to US servers — subject to the CLOUD Act, outside EU jurisdiction, processed by infrastructure that no European regulator can audit.",
    "Sovereign AI inverts this. Instead of sending your data to a model, you bring the model to your data. The inference happens on servers you own, in a building you control, under laws you understand.",
    "The practical difference is more than legal. With cloud AI, every request is a data transfer. With sovereign AI, every request is a local computation.",
    "The performance comparison is closer than most enterprises expect. Modern open-source models running on dedicated GPU infrastructure match or exceed cloud API performance for most enterprise workloads — at a fraction of the per-request cost.",
    "The economics change completely at scale. Cloud AI pricing is variable and unpredictable. Enterprise workloads with predictable volume should be on fixed-cost infrastructure.",
    "The compliance calculus is simple: cloud AI creates GDPR transfer exposure for every inference. Sovereign AI eliminates it by design — not by contract or policy, but by architecture.",
  ],
  "blog-gdpr-article-9-ai-sensitive-data": [
    "GDPR Article 9 covers special categories of personal data: health data, genetic data, biometric data, racial or ethnic origin, political opinions, religious beliefs, trade union membership, sexual orientation.",
    "These categories require explicit consent or specific legal basis for processing — stricter than ordinary personal data.",
    "Here's where AI creates a new problem: language models infer sensitive attributes from context. A customer support AI reading medical intake forms processes health data. An HR AI analyzing performance reviews may infer protected characteristics.",
    "Under GDPR, sending Article 9 data to a US cloud service for AI processing is a third-country transfer requiring appropriate safeguards. Standard contractual clauses are increasingly scrutinized.",
    "The cleanest solution is sovereign AI: process Article 9 data on infrastructure you own, under your governance. No transfer. No exposure. Compliance by architecture.",
    "Healthcare, insurance, HR, and legal sectors face this most acutely. Every AI integration that touches patient records, employee data, or client files needs Article 9 compliance built into the infrastructure layer.",
  ],
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const content = postContent[slug] || [
    `${post.title} is one of the most important topics for European enterprises deploying AI in 2026.`,
    "The European regulatory landscape has shifted fundamentally. The EU AI Act, combined with GDPR enforcement momentum, means that enterprises can no longer treat data sovereignty as a compliance checkbox — it must be a core architectural principle.",
    "Sovereign AI infrastructure puts the compute where the data is. Instead of sending sensitive business data to US hyperscaler APIs, you run the inference on hardware you own. The model comes to the data, not the other way around.",
    "The operational benefits compound over time: predictable costs, full auditability, no vendor lock-in, and infrastructure that gets more efficient as you scale.",
    "For European enterprises navigating this shift, the window to implement properly is closing. The EU AI Act's high-risk provisions take full effect August 2, 2026. Starting now means doing it right.",
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Xinity AI" },
    publisher: { "@type": "Organization", name: "Xinity AI", logo: { "@type": "ImageObject", url: "https://xinity.ai/logo.png" } },
    url: `https://xinity.ai/sovereign-ai-blog/${slug}`,
    keywords: ["sovereign AI", "GDPR", "EU AI Act", "on-premise AI", post.tag],
  };

  const relatedPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="pt-36 pb-10 px-4 bg-gradient-to-b from-[#ede6f6] to-[#F7F6F7]">
        <div className="max-w-3xl mx-auto">
          <nav className="flex items-center gap-2 text-[12px] text-[rgba(27,12,37,0.45)] mb-6">
            <Link href="/sovereign-ai-blog" className="hover:text-[#9B6FC8] transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-[#1B0C25]">{post.title}</span>
          </nav>
          <span className="text-[11px] font-semibold text-[#9B8EAA] uppercase tracking-wider block mb-3">{post.tag}</span>
          <h1 className="text-[clamp(28px,4vw,48px)] font-medium leading-tight text-[#1B0C25] mb-4">{post.title}</h1>
          <p className="text-[13px] text-[rgba(27,12,37,0.45)] mb-6">{post.date} · Xinity AI</p>
          <p className="text-[17px] text-[rgba(28,12,38,0.7)] leading-relaxed">{post.description}</p>
        </div>
      </section>

      <section className="py-12 px-4 bg-[#F7F6F7]">
        <div className="max-w-3xl mx-auto">
          <article className="space-y-5">
            {content.map((paragraph, i) => (
              <p key={i} className="text-[16px] text-[rgba(28,12,38,0.72)] leading-relaxed">{paragraph}</p>
            ))}
          </article>

          <div className="mt-12 pt-8 border-t border-[rgba(27,12,37,0.08)]">
            <p className="text-[13px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-wider mb-5">Related Posts</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {relatedPosts.map(p => (
                <Link key={p.slug} href={`/sovereign-ai-blog/${p.slug}`} className="bg-white rounded-xl p-4 border border-[rgba(27,12,37,0.06)] hover:border-[rgba(27,12,37,0.15)] transition-colors group">
                  <span className="text-[10px] font-semibold text-[#9B8EAA] uppercase tracking-wider block mb-1">{p.tag}</span>
                  <h3 className="text-[13px] font-medium text-[#1B0C25] group-hover:text-[#9B6FC8] transition-colors leading-snug">{p.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-[#1B0C27] text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-[22px] font-medium mb-3">Ready to run sovereign AI?</h2>
          <p className="text-[14px] text-[rgba(255,255,255,0.6)] mb-5">30 minutes. We&apos;ll show you exactly what deployment looks like for your company.</p>
          <Link href="https://calendly.com/xinity/discovery-call" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-white text-[#1B0C25] rounded-full text-[14px] font-semibold hover:bg-[#EDE6F6] transition-colors">Book a Free Demo →</Link>
        </div>
      </section>
    </>
  );
}
