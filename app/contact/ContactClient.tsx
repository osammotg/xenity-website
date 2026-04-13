"use client";

import { useState } from "react";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 px-4 bg-gradient-to-b from-[#ede6f6] to-[#F7F6F7]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-4">
            Contact
          </p>
          <h1 className="text-[clamp(36px,5vw,64px)] font-medium leading-tight text-[#1B0C25] mb-6">
            Get in Touch
          </h1>
          <p className="text-[17px] text-[rgba(28,12,38,0.65)] max-w-xl mx-auto leading-relaxed">
            Book a demo, ask a question, or just say hello. We respond within one business day.
          </p>
        </div>
      </section>

      {/* Two columns */}
      <section className="py-20 px-4 bg-[#F7F6F7]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Book a Demo */}
          <div className="bg-[#1B0C25] rounded-2xl p-8 text-white">
            <p className="text-[12px] font-semibold text-[rgba(255,255,255,0.4)] uppercase tracking-widest mb-3">
              Fastest Path
            </p>
            <h2 className="text-[24px] font-medium mb-4 leading-snug">
              Book a Demo
            </h2>
            <p className="text-[14px] text-[rgba(255,255,255,0.65)] leading-relaxed mb-6">
              30 minutes with Alexander or Jonas. We&apos;ll walk through your infrastructure,
              your use case, and exactly what deployment looks like for your company.
              No sales pitch. Just an honest conversation.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Live demo of sovereign AI deployment",
                "Infrastructure requirements review",
                "Pricing and timeline discussion",
                "Your GDPR & EU AI Act questions answered",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-[13px] text-[rgba(255,255,255,0.7)]">
                  <span className="mt-0.5 text-[#D588FC] shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://calendly.com/xinity/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 py-3 bg-white text-[#1B0C25] rounded-full text-[14px] font-semibold hover:bg-[#EDE6F6] transition-colors"
            >
              Book on Calendly →
            </a>
          </div>

          {/* General Contact */}
          <div className="bg-white rounded-2xl p-8 border border-[rgba(27,12,37,0.06)]">
            <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-3">
              General Contact
            </p>
            <h2 className="text-[24px] font-medium text-[#1B0C25] mb-4 leading-snug">
              Other Enquiries
            </h2>
            <div className="space-y-4 mb-6">
              <div>
                <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-1">
                  Email
                </p>
                <a
                  href="mailto:info@xinity.ai"
                  className="text-[15px] text-[#1B0C25] hover:text-[#9B6FC8] transition-colors"
                >
                  info@xinity.ai
                </a>
              </div>
              <div>
                <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-1">
                  Press Inquiries
                </p>
                <a
                  href="mailto:press@xinity.ai"
                  className="text-[15px] text-[#1B0C25] hover:text-[#9B6FC8] transition-colors"
                >
                  press@xinity.ai
                </a>
              </div>
              <div>
                <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-1">
                  Address
                </p>
                <address className="not-italic text-[14px] text-[rgba(28,12,38,0.65)] leading-relaxed">
                  Xinity AI GmbH<br />
                  Am Gestade 5/2<br />
                  1010 Vienna, Austria
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 bg-[#F8F7F8]">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 text-center">
            <p className="text-[12px] font-semibold text-[rgba(27,12,37,0.4)] uppercase tracking-widest mb-3">
              Send a Message
            </p>
            <h2 className="text-[clamp(24px,3.5vw,36px)] font-medium text-[#1B0C25]">
              Write to Us Directly
            </h2>
          </div>

          {submitted ? (
            <div className="bg-[#EDE6F6] rounded-2xl p-8 text-center">
              <p className="text-[22px] font-medium text-[#1B0C25] mb-2">Thanks for reaching out!</p>
              <p className="text-[15px] text-[rgba(28,12,38,0.65)]">
                We&apos;ll get back to you within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-[rgba(27,12,37,0.06)] space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12px] font-semibold text-[rgba(27,12,37,0.5)] uppercase tracking-widest mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 rounded-xl border border-[rgba(27,12,37,0.12)] bg-[#FAFAFA] text-[14px] text-[#1B0C25] placeholder-[rgba(27,12,37,0.3)] focus:outline-none focus:border-[#9B6FC8] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-[rgba(27,12,37,0.5)] uppercase tracking-widest mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@company.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-[rgba(27,12,37,0.12)] bg-[#FAFAFA] text-[14px] text-[#1B0C25] placeholder-[rgba(27,12,37,0.3)] focus:outline-none focus:border-[#9B6FC8] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[12px] font-semibold text-[rgba(27,12,37,0.5)] uppercase tracking-widest mb-1.5">
                  Company
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Company name"
                  className="w-full px-4 py-2.5 rounded-xl border border-[rgba(27,12,37,0.12)] bg-[#FAFAFA] text-[14px] text-[#1B0C25] placeholder-[rgba(27,12,37,0.3)] focus:outline-none focus:border-[#9B6FC8] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[12px] font-semibold text-[rgba(27,12,37,0.5)] uppercase tracking-widest mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we help?"
                  className="w-full px-4 py-2.5 rounded-xl border border-[rgba(27,12,37,0.12)] bg-[#FAFAFA] text-[14px] text-[#1B0C25] placeholder-[rgba(27,12,37,0.3)] focus:outline-none focus:border-[#9B6FC8] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#1B0C25] text-white rounded-full text-[14px] font-semibold hover:bg-[#2a1840] transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
