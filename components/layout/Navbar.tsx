"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "/sovereign-ai-platform" },
  { label: "Process", href: "/how-xinity-works" },
  { label: "Pricing", href: "/xinity-pricing" },
  { label: "ROI Calculator", href: "/roi-calculator" },
  { label: "Open Source", href: "/xinity_opensource" },
  { label: "Press", href: "/press" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-semibold text-[#1B0C25] text-sm">
            <span className="text-base font-semibold tracking-tight">Xinity AI</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] text-[rgba(27,12,37,0.7)] hover:text-[#1B0C25] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="text-[13px] text-[rgba(27,12,37,0.7)] hover:text-[#1B0C25] transition-colors"
            >
              Contact
            </Link>
            <Link
              href="https://calendly.com/xinity/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] bg-[#1B0C25] text-white px-4 py-1.5 rounded-full hover:bg-[#2a1840] transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-[#1B0C25]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#F7F6F7]/95 backdrop-blur-md border-t border-[rgba(27,12,37,0.06)] px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14px] text-[#1B0C25]"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-[14px] text-[#1B0C25]"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="https://calendly.com/xinity/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] bg-[#1B0C25] text-white px-4 py-2 rounded-full text-center"
            onClick={() => setMobileOpen(false)}
          >
            Book a Demo
          </Link>
        </div>
      )}
    </nav>
  );
}
