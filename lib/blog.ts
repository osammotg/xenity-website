export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tag: string;
  description: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "blog-sovereign-ai-vs-cloud-ai",
    title: "Sovereign AI vs Cloud AI",
    date: "January 22, 2026",
    tag: "Sovereign AI",
    description:
      "Why European enterprises are moving from public cloud AI to sovereign on-premise infrastructure — and what they gain in control, compliance, and cost.",
  },
  {
    slug: "blog-gdpr-article-9-ai-sensitive-data",
    title: "GDPR Article 9 and AI",
    date: "January 28, 2026",
    tag: "AI",
    description:
      "GDPR Article 9 covers special categories of sensitive data. Here's what it means for enterprises deploying AI on European data.",
  },
  {
    slug: "xinity-europe-answer-to-ai-sovereignty",
    title: "Europe's Answer to AI Sovereignty",
    date: "February 6, 2026",
    tag: "Sovereign AI",
    description:
      "How European infrastructure is emerging as a genuine alternative to US hyperscaler dependency for enterprise AI deployment.",
  },
  {
    slug: "where-your-ai-data-goes",
    title: "Where Your AI Data Actually Goes",
    date: "February 10, 2026",
    tag: "AI",
    description:
      "A technical breakdown of what happens to your data when you call GPT-4 or Claude from a European company — and why it matters.",
  },
  {
    slug: "your-data-journey",
    title: "Your Data Journey",
    date: "February 17, 2026",
    tag: "AI",
    description:
      "Tracing the path your enterprise data takes from request to response when using public cloud AI APIs — and what exposure it creates.",
  },
  {
    slug: "understanding-the-ai-stack",
    title: "Understanding the AI Stack",
    date: "February 17, 2026",
    tag: "AI",
    description:
      "A plain-language guide to the infrastructure layers behind modern enterprise AI — and where sovereignty fits in.",
  },
  {
    slug: "eu-ai-act-ready",
    title: "Your AI Is Probably Not EU AI Act Ready. Here's What That Means.",
    date: "March 11, 2026",
    tag: "AI",
    description:
      "The EU AI Act's high-risk system provisions take full effect August 2, 2026. Most enterprise AI deployments don't yet meet the requirements.",
  },
  {
    slug: "sovereignty-washing",
    title: "Sovereignty-Washing: The Enterprise Guide to Spotting Fake Sovereign AI",
    date: "March 20, 2026",
    tag: "Sovereign AI",
    description:
      "Some vendors claim 'sovereign AI' while routing your data through US infrastructure. Here's how to tell the real thing from marketing.",
  },
  {
    slug: "why-we-open-sourced-xinity",
    title: "Why We Open Sourced Xinity",
    date: "April 1, 2026",
    tag: "Sovereign AI",
    description:
      "We released the Xinity Engine under Apache 2.0. Here's why we believe open source is the only honest foundation for sovereign AI.",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
