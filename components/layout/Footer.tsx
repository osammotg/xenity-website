import Link from "next/link";

const footerLinks = {
  product: [
    { label: "Features", href: "/sovereign-ai-platform" },
    { label: "How We Work", href: "/how-xinity-works" },
    { label: "Pricing", href: "/xinity-pricing" },
    { label: "ROI Calculator", href: "/roi-calculator" },
    { label: "Our Customers", href: "/who-uses-xinity" },
    { label: "Open Source", href: "/xinity_opensource" },
    { label: "Press", href: "/press" },
    { label: "Blog", href: "/sovereign-ai-blog" },
  ],
  resources: [
    { label: "Sovereign AI Lab", href: "/sovereignailab" },
    { label: "Documents", href: "/downloads" },
    { label: "Sovereign AI", href: "/sovereignai" },
  ],
  company: [
    { label: "About Us", href: "/aboutus" },
    { label: "Contact", href: "/contact" },
    { label: "Impressum", href: "/impressum" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#1B0C25] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-lg font-semibold text-white mb-3 block">
              Xinity AI
            </Link>
            <p className="text-[13px] text-[rgba(255,255,255,0.55)] leading-relaxed mb-4">
              Sovereign AI infrastructure software for European enterprises.
            </p>
            <p className="text-[12px] text-[rgba(255,255,255,0.4)]">
              Am Gestade 5/2<br />
              1010 Vienna, Austria
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-[12px] font-semibold text-[rgba(255,255,255,0.4)] uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-[rgba(255,255,255,0.65)] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[12px] font-semibold text-[rgba(255,255,255,0.4)] uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-[rgba(255,255,255,0.65)] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[12px] font-semibold text-[rgba(255,255,255,0.4)] uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-[rgba(255,255,255,0.65)] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[rgba(255,255,255,0.08)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-[rgba(255,255,255,0.35)]">
            © 2026 Xinity
          </p>
          <Link
            href="https://xinity.ai"
            className="text-[12px] text-[rgba(255,255,255,0.35)] hover:text-[rgba(255,255,255,0.6)] transition-colors"
          >
            Use Link
          </Link>
        </div>
      </div>
    </footer>
  );
}
