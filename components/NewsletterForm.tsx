"use client";

export default function NewsletterForm() {
  return (
    <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="your@company.com"
        className="flex-1 px-4 py-2.5 rounded-full border border-[rgba(27,12,37,0.15)] bg-white text-[14px] focus:outline-none focus:border-[#9B6FC8]"
      />
      <button
        type="submit"
        className="px-5 py-2.5 bg-[#1B0C25] text-white rounded-full text-[14px] font-medium hover:bg-[#2a1840] transition-colors whitespace-nowrap"
      >
        Subscribe
      </button>
    </form>
  );
}
