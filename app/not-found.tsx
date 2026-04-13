import Link from "next/link";

export default function NotFound() {
  return (
    <section className="pt-40 pb-32 px-4 bg-[#F7F6F7] text-center">
      <div className="max-w-xl mx-auto">
        <p className="text-8xl mb-6">🎸</p>
        <h1 className="text-[48px] font-medium text-[#1B0C25] mb-3">404</h1>
        <p className="text-[18px] text-[rgba(28,12,38,0.6)] mb-8">Hmm... I couldn&apos;t find that page. It&apos;s just me playing the guitar :)</p>
        <Link href="/" className="inline-block px-7 py-3 bg-[#1B0C25] text-white rounded-full text-[14px] font-medium hover:bg-[#2a1840] transition-colors">Back to home</Link>
      </div>
    </section>
  );
}
