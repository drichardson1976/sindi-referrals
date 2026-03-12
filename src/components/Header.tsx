"use client";

import Link from "next/link";
import { useState } from "react";

const whoIsForLinks = [
  { name: "General Dentists", href: "/who-sindi-is-for/general-dentists" },
  { name: "Oral Surgeons", href: "/who-sindi-is-for/oral-surgeons" },
  { name: "Endodontists", href: "/who-sindi-is-for/endodontists" },
  { name: "Periodontists", href: "/who-sindi-is-for/periodontists" },
  { name: "Orthodontists", href: "/who-sindi-is-for/orthodontists" },
  { name: "Office Managers", href: "/who-sindi-is-for/office-managers" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [whoDropdownOpen, setWhoDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <svg width="83" height="23" viewBox="0 0 83 23" fill="none">
            <text
              x="0"
              y="20"
              fontFamily="inherit"
              fontSize="22"
              fontWeight="700"
              fill="#4267fe"
            >
              Sindi
            </text>
          </svg>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <div
            className="relative"
            onMouseEnter={() => setWhoDropdownOpen(true)}
            onMouseLeave={() => setWhoDropdownOpen(false)}
          >
            <button className="text-dark hover:text-primary font-medium text-sm transition-colors flex items-center gap-1">
              Who It&apos;s For
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
            </button>
            {whoDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[200px]">
                <Link
                  href="/who-sindi-is-for"
                  className="block px-4 py-2 text-sm text-dark hover:bg-light-bg hover:text-primary transition-colors font-medium"
                >
                  Overview
                </Link>
                {whoIsForLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-dark hover:bg-light-bg hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            href="/how-it-works"
            className="text-dark hover:text-primary font-medium text-sm transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="/pricing"
            className="text-dark hover:text-primary font-medium text-sm transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/faqs"
            className="text-dark hover:text-primary font-medium text-sm transition-colors"
          >
            FAQs
          </Link>
          <Link
            href="/about"
            className="text-dark hover:text-primary font-medium text-sm transition-colors"
          >
            About
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="text-dark hover:text-primary font-medium text-sm transition-colors"
          >
            Log In
          </Link>
          <Link
            href="/register"
            className="bg-primary hover:bg-primary-dark text-white font-medium text-sm px-5 py-2.5 rounded-lg transition-colors"
          >
            Sign Up Free
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {mobileMenuOpen ? (
              <path
                d="M6 6L18 18M6 18L18 6"
                stroke="#2d2d4f"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <>
                <path d="M3 6H21" stroke="#2d2d4f" strokeWidth="2" strokeLinecap="round" />
                <path d="M3 12H21" stroke="#2d2d4f" strokeWidth="2" strokeLinecap="round" />
                <path d="M3 18H21" stroke="#2d2d4f" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
          <Link
            href="/who-sindi-is-for"
            className="block text-dark font-medium py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Who It&apos;s For
          </Link>
          <Link
            href="/how-it-works"
            className="block text-dark font-medium py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            How It Works
          </Link>
          <Link
            href="/pricing"
            className="block text-dark font-medium py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="/faqs"
            className="block text-dark font-medium py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            FAQs
          </Link>
          <Link
            href="/about"
            className="block text-dark font-medium py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <div className="pt-3 border-t border-gray-100 space-y-3">
            <Link href="/login" className="block text-dark font-medium py-2">
              Log In
            </Link>
            <Link
              href="/register"
              className="block bg-primary text-white text-center font-medium py-2.5 rounded-lg"
            >
              Sign Up Free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
