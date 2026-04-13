import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Xinity AI",
  description: "Xinity AI privacy policy. Learn how we handle data for our sovereign AI infrastructure software.",
  alternates: { canonical: "https://xinity.ai/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-32 pb-20 px-4 bg-[#F7F6F7]">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-[clamp(32px,4vw,48px)] font-medium text-[#1B0C25] mb-8">Privacy Policy</h1>
        <p className="text-[13px] text-[rgba(27,12,37,0.4)] mb-8">Last updated: January 1, 2026</p>
        <div className="space-y-8 text-[15px] text-[rgba(28,12,38,0.72)] leading-relaxed">
          <div>
            <h2 className="text-[18px] font-semibold text-[#1B0C25] mb-3">1. Data Controller</h2>
            <p>Xinity AI GmbH, Am Gestade 5/2, 1010 Vienna, Austria is the data controller for personal data collected via this website.</p>
          </div>
          <div>
            <h2 className="text-[18px] font-semibold text-[#1B0C25] mb-3">2. What Data We Collect</h2>
            <p>We collect data you provide directly (name, email, company via contact forms or newsletter signup) and standard web analytics (page views, referrers). We do not use third-party tracking. We do not sell data.</p>
          </div>
          <div>
            <h2 className="text-[18px] font-semibold text-[#1B0C25] mb-3">3. How We Use Data</h2>
            <p>Contact form data is used to respond to your inquiry. Newsletter data is used to send you requested updates. We have a legitimate interest in understanding how our website is used to improve it.</p>
          </div>
          <div>
            <h2 className="text-[18px] font-semibold text-[#1B0C25] mb-3">4. Your Rights Under GDPR</h2>
            <p>You have the right to access, rectify, erase, restrict processing of, and port your personal data. To exercise these rights, email <a href="mailto:privacy@xinity.ai" className="underline underline-offset-4">privacy@xinity.ai</a>.</p>
          </div>
          <div>
            <h2 className="text-[18px] font-semibold text-[#1B0C25] mb-3">5. Data Retention</h2>
            <p>Contact inquiries are retained for 2 years. Newsletter subscriptions are retained until you unsubscribe.</p>
          </div>
          <div>
            <h2 className="text-[18px] font-semibold text-[#1B0C25] mb-3">6. Contact</h2>
            <p>For privacy questions: <a href="mailto:privacy@xinity.ai" className="underline underline-offset-4">privacy@xinity.ai</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
