import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroContent from "@/components/home/HeroContent";
import CountdownTimer from "@/components/home/CountdownTimer";
import ChatDemo from "@/components/home/ChatDemo";
import FadeUp from "@/components/ui/FadeUp";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Sovereign AI Infrastructure Software for European Enterprises",
  description:
    "Run any AI model on your own servers. On-premise, GDPR-compliant, zero cloud. Sovereign AI infrastructure for European enterprises — deployed in days.",
  alternates: {
    canonical: "https://xinity.ai",
  },
};

const faqItems = [
  {
    question: "What is sovereign AI?",
    answer:
      "Sovereign AI means running AI models on infrastructure you own and control — inside the EU, under your governance, with no third-party access to your data or queries.",
  },
  {
    question: "Is Xinity a cloud provider?",
    answer:
      "No. Xinity is an on-premise software platform. You run it on your own servers, in your own data center or building. Xinity never touches your data.",
  },
  {
    question: "Is Xinity compatible with OpenAI APIs?",
    answer:
      "Yes. Xinity provides an OpenAI-compatible API. Your existing applications work with one line of code change — no rewriting required.",
  },
  {
    question: "Can we use open-source models?",
    answer:
      "Yes. Xinity supports all major open-source models. You choose which models to deploy and run them entirely on your own hardware.",
  },
  {
    question: "How long does deployment take?",
    answer:
      "Most enterprises are up and running within days. Xinity's OpenAI-compatible API means your existing AI integrations work immediately.",
  },
  {
    question: "Is Xinity GDPR compliant?",
    answer:
      "Yes. Because Xinity runs entirely on your infrastructure, your data never leaves your environment. This makes GDPR compliance structural, not procedural.",
  },
  {
    question: "Who owns the data and models?",
    answer:
      "You do. Always. Xinity is software you run on your own infrastructure. We have no access to your data, your models, or your queries.",
  },
  {
    question: "What happens if Xinity shuts down?",
    answer:
      "Nothing. The Xinity Engine is Apache 2.0 open-source software. Even in the worst case, you keep running on your own infrastructure with full source code access.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const problemCards = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="14" height="10" rx="2" stroke="#9B6FC8" strokeWidth="1.5"/>
        <path d="M7 5V4a3 3 0 016 0v1" stroke="#9B6FC8" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="10" cy="10" r="1.5" fill="#9B6FC8"/>
      </svg>
    ),
    title: "US Server Lock-in",
    body: "Your data lives on US servers — subject to the CLOUD Act and beyond EU jurisdiction.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2L3 6v4c0 4.418 3.08 8.55 7 9.5C13.92 18.55 17 14.418 17 10V6l-7-4z" stroke="#9B6FC8" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M7 10l2 2 4-4" stroke="#9B6FC8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "GDPR & AI Act Risk",
    body: "GDPR & EU AI Act violations can cost up to 4% of global annual revenue.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 4h12v12H4z" stroke="#9B6FC8" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M7 8h6M7 11h4" stroke="#9B6FC8" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "No Audit Trail",
    body: "No audit trail means you can't prove compliance to regulators or clients.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 3v14M6 7l4-4 4 4M6 13l4 4 4-4" stroke="#9B6FC8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Unpredictable Costs",
    body: "Per-token cloud pricing becomes unpredictable and unsustainable at scale.",
  },
];

const solutionCards = [
  {
    title: "OpenAI-Compatible API",
    body: "One line of code. Your existing apps now run on your own infrastructure.",
  },
  {
    title: "On-Prem Deployment",
    body: "AI runs on your hardware, in your building. No cloud. No data leaving. No exceptions.",
  },
  {
    title: "Model Routing & Orchestration",
    body: "Automatically route requests to the right model and GPU — optimised for speed, cost, and uptime.",
  },
  {
    title: "Auditability & Cost Control",
    body: "Full visibility into every AI call. Know exactly what runs, when, and what it costs.",
  },
];

const blogPreviews = [
  {
    tag: "Sovereign AI",
    date: "Jan 22, 2026",
    title: "Sovereign AI vs Cloud AI",
    slug: "blog-sovereign-ai-vs-cloud-ai",
    img: "/images/blog-1.png",
  },
  {
    tag: "AI",
    date: "Jan 28, 2026",
    title: "GDPR Article 9 and AI",
    slug: "blog-gdpr-article-9-ai-sensitive-data",
    img: "/images/blog-2.png",
  },
  {
    tag: "Sovereign AI",
    date: "Feb 6, 2026",
    title: "Europe's Answer to AI Sovereignty",
    slug: "xinity-europe-answer-to-ai-sovereignty",
    img: "/images/blog-3.svg",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero — cloud photo + orb + headline + chat demo */}
      <section className="relative overflow-hidden flex flex-col items-center justify-start pt-36 pb-28 px-4 text-center">
        <Image
          src="/images/hero-clouds.png"
          fill
          className="object-cover object-top"
          alt=""
          priority
        />
        <div className="animate-float absolute bottom-0 left-1/2 w-full max-w-4xl pointer-events-none z-[1]">
          <Image
            src="/images/hero-orb.png"
            width={1140}
            height={653}
            alt=""
            className="w-full opacity-85"
            priority
          />
        </div>
        <HeroContent />
        <div className="relative z-10 w-full mt-10 text-left">
          <ChatDemo />
        </div>
      </section>

      {/* Countdown — own section, clean and minimal */}
      <section className="py-20 px-4 bg-[#F7F6F7]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[11px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-3">
            Why Now
          </p>
          <h2
            className="text-[clamp(22px,3vw,32px)] font-extrabold text-[#1B0C25] mb-10"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Your Window to Get Compliant Is Closing
          </h2>
          <CountdownTimer />
          <p className="mt-8 text-[15px] text-[rgba(28,12,38,0.6)] max-w-lg mx-auto leading-relaxed">
            The EU AI Act&apos;s high-risk system requirements take full effect on{" "}
            <strong className="text-[#1B0C25]">August 2, 2026</strong>. Enterprises
            that deploy sovereign AI software now have time to do it right — at their
            own pace, with full control. We&apos;re here to help you get there.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            <Link
              href="/compliance"
              className="px-6 py-3 bg-[#1B0C25] text-white rounded-full text-[14px] font-medium hover:bg-[#2a1840] transition-colors"
            >
              Why now
            </Link>
            <Link
              href="https://calendly.com/xinity/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-[#1B0C25] border border-[rgba(27,12,37,0.15)] rounded-full text-[14px] font-medium hover:bg-[#f0ebf8] transition-colors"
            >
              Book a Free Demo →
            </Link>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 px-4 bg-[#F8F7F8]">
        <div className="max-w-6xl mx-auto">
          <FadeUp className="mb-12">
            <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-3">
              The Problem
            </p>
            <h2
              className="text-[clamp(28px,4vw,44px)] font-extrabold text-[#1B0C27] leading-tight"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              What Happens When You Lose
              <br />
              Control of Your AI?
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {problemCards.map((card, i) => (
              <FadeUp key={card.title} delay={i * 0.1}>
                <div className="bg-[#EDE6F6] rounded-2xl p-7 h-full">
                  <div className="mb-4">{card.icon}</div>
                  <h3 className="text-[15px] font-bold text-[#1B0C25] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[13px] text-[rgba(28,12,38,0.55)] leading-relaxed">
                    {card.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.2} className="mt-6">
            <Link
              href="/sovereignai"
              className="text-[14px] text-[#1B0C25] underline underline-offset-4 hover:text-[#9B6FC8] transition-colors"
            >
              Learn more about Sovereign AI →
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 px-4 bg-[#F7F6F7]">
        <div className="max-w-6xl mx-auto">
          <FadeUp className="mb-12 text-center">
            <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-3">
              The Solution
            </p>
            <h2
              className="text-[clamp(32px,5vw,60px)] font-extrabold text-[#1B0C25] leading-tight"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Own Your AI. Control Your Data.
              <br />
              Predict Your Costs.
            </h2>
            <p className="mt-4 text-[15px] text-[rgba(28,12,38,0.65)] max-w-xl mx-auto">
              Switch from public AI APIs to fully sovereign, on-premise AI in days.
              Your data never leaves your building.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {solutionCards.map((card, i) => (
              <FadeUp key={card.title} delay={i * 0.1}>
                <div className="bg-[#EDE6F6] rounded-2xl p-7 h-full">
                  <h3 className="text-[17px] font-medium text-[#1B0C25] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[14px] text-[rgba(28,12,38,0.7)] leading-relaxed">
                    {card.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.2} className="text-center">
            <Link
              href="https://calendly.com/xinity/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 py-3 bg-[#1B0C25] text-white rounded-full text-[14px] font-medium hover:bg-[#2a1840] transition-colors"
            >
              Book a Free Demo →
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Open Source Banner */}
      <section className="py-20 px-4 bg-[#1B0C27] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <p className="text-[12px] font-semibold text-[rgba(255,255,255,0.45)] uppercase tracking-widest mb-4">
              APRIL 1, 2026
            </p>
            <h2 className="text-[clamp(32px,5vw,56px)] font-medium leading-tight mb-6">
              We{" "}
              <span className="italic">don&apos;t</span>
              {" "}host your data.
              <br />
              We{" "}
              <span className="italic">bring</span>
              {" "}AI to it.
            </h2>
            <p className="text-[16px] text-[rgba(255,255,255,0.65)] max-w-2xl mx-auto mb-8 leading-relaxed">
              The Xinity Engine is now live on GitHub — Apache 2.0 licensed, free forever.
              Connect it to your existing AI setup and keep every request on your own
              infrastructure. When you&apos;re ready to go enterprise, we&apos;re there.
            </p>
            <div className="flex items-center justify-center gap-8 mb-10">
              <div className="text-center">
                <p className="text-[36px] font-extrabold text-white leading-none">100%</p>
                <p className="text-[12px] text-[rgba(255,255,255,0.45)] mt-2">Stays in Europe</p>
              </div>
              <div className="w-px h-10 bg-[rgba(255,255,255,0.1)]" />
              <div className="text-center">
                <p className="text-[36px] font-extrabold text-white leading-none">0€</p>
                <p className="text-[12px] text-[rgba(255,255,255,0.45)] mt-2">For every developer</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/xinity_opensource"
                className="px-6 py-3 bg-white text-[#1B0C25] rounded-full text-[14px] font-medium hover:bg-[#EDE6F6] transition-colors"
              >
                Read about it
              </Link>
              <a
                href="https://github.com/xinity-ai/xinity-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[rgba(255,255,255,0.1)] text-white border border-[rgba(255,255,255,0.15)] rounded-full text-[14px] font-medium hover:bg-[rgba(255,255,255,0.15)] transition-colors"
              >
                View on GitHub
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 bg-[#F7F6F7]">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-4">
              Our Mission
            </p>
            <h2
              className="text-[clamp(32px,5vw,52px)] font-extrabold text-[#1B0C25] leading-tight mb-6"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Making Europe
              <br />
              <span className="text-[#9B6FC8]">Compute Independent.</span>
              <br />
              One Company at a Time.
            </h2>
            <p className="text-[16px] text-[rgba(28,12,38,0.65)] max-w-2xl mx-auto leading-relaxed mb-8">
              Xinity is the foundation to run any AI sovereign, on-premise, under your
              control. Built by Alexander Zehetmaier and Jonas Vander — each with 10+ years
              of AI expertise — we exist to give every European company the infrastructure
              layer they need to own their compute and break free from hyperscaler dependency.
              For good.
            </p>
            <Link
              href="/aboutus"
              className="text-[14px] text-[#1B0C25] underline underline-offset-4 hover:text-[#9B6FC8] transition-colors"
            >
              Learn more about us
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-[#F8F7F8]">
        <div className="max-w-3xl mx-auto">
          <FadeUp className="mb-10">
            <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-3">
              FAQ
            </p>
            <h2
              className="text-[clamp(28px,4vw,44px)] font-extrabold text-[#1B0C25]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Frequently Asked Questions
            </h2>

            {/* Team photo */}
            <div className="flex items-center gap-4 mt-6">
              <Image
                src="/images/team-photo.png"
                width={142}
                height={60}
                alt="Xinity Team"
                className="rounded-full"
                unoptimized
              />
              <p className="text-[14px] text-[rgba(28,12,38,0.55)] leading-relaxed">
                Still have a question?{" "}
                <Link
                  href="/contact"
                  className="text-[#1B0C25] underline underline-offset-4 hover:text-[#9B6FC8] transition-colors"
                >
                  Contact us
                </Link>{" "}
                — we&apos;ll be happy to help.
              </p>
            </div>
          </FadeUp>

          <div className="space-y-3">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="bg-white rounded-2xl border border-[rgba(27,12,37,0.06)] group open:border-[rgba(27,12,37,0.12)] transition-colors"
              >
                <summary className="px-6 py-4 cursor-pointer text-[15px] font-medium text-[#1B0C25] list-none flex items-center justify-between gap-4">
                  <span>{item.question}</span>
                  <span className="shrink-0 text-[#9B8EAA] group-open:rotate-180 transition-transform duration-200 text-xl leading-none">
                    ↓
                  </span>
                </summary>
                <p className="px-6 pb-5 text-[14px] text-[rgba(28,12,38,0.65)] leading-relaxed border-t border-[rgba(27,12,37,0.06)] pt-4">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 px-4 bg-[#F7F6F7]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start justify-between mb-8">
            <FadeUp>
              <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-2">
                Blog
              </p>
              <h2
                className="text-[clamp(28px,4vw,48px)] font-extrabold text-[#1B0C25]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Insights on Sovereign AI
              </h2>
            </FadeUp>
            <Link
              href="/sovereign-ai-blog"
              className="hidden sm:block text-[14px] text-[#1B0C25] underline underline-offset-4 hover:text-[#9B6FC8] transition-colors whitespace-nowrap mt-1"
            >
              Explore All
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {blogPreviews.map((post, i) => (
              <FadeUp key={post.slug} delay={i * 0.12}>
                <Link
                  href={`/sovereign-ai-blog/${post.slug}`}
                  className="bg-white rounded-2xl overflow-hidden border border-[rgba(27,12,37,0.06)] hover:border-[rgba(27,12,37,0.15)] transition-colors group flex flex-col"
                >
                  <div className="relative h-[160px] w-full overflow-hidden">
                    <Image
                      src={post.img}
                      fill
                      className="object-cover"
                      alt={post.title}
                      unoptimized={post.img.endsWith(".svg")}
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <span className="text-[11px] font-semibold text-[#9B8EAA] uppercase tracking-wider">
                      {post.tag}
                    </span>
                    <p className="text-[12px] text-[rgba(27,12,37,0.4)] mt-1 mb-3">{post.date}</p>
                    <h3 className="text-[16px] font-medium text-[#1B0C25] group-hover:text-[#9B6FC8] transition-colors leading-snug">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 bg-[#EDE6F6]">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-3">
            Newsletter
          </p>
          <h2
            className="text-[clamp(28px,4vw,48px)] font-extrabold text-[#1B0C25] mb-2"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Not Ready for a Demo Yet?
          </h2>
          <p className="text-[14px] text-[rgba(28,12,38,0.6)] mb-6">
            Stay in the loop on sovereign AI, GDPR, and the EU AI Act.
          </p>
          <NewsletterForm />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-[#1B0C27] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[12px] font-semibold text-[rgba(255,255,255,0.4)] uppercase tracking-widest mb-4">
            YOUR AI. YOUR SERVERS.
          </p>
          <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold leading-tight mb-4"
            style={{ fontFamily: "Inter, sans-serif" }}>
            Ready to Run any AI on Your Own Terms?
          </h2>
          <p className="text-[15px] text-[rgba(255,255,255,0.6)] mb-8">
            No commitment. 30 minutes. We&apos;ll show you exactly what deployment
            looks like for your company.
          </p>
          <Link
            href="https://calendly.com/xinity/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 bg-white text-[#1B0C25] rounded-full text-[15px] font-semibold hover:bg-[#EDE6F6] transition-colors"
          >
            Book a Free Demo
          </Link>
        </div>
      </section>
    </>
  );
}
