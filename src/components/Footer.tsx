import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-primary">
              Sindi
            </Link>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Dental referrals and messaging built for modern practices.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gray-300">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/how-it-works"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Who It's For */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gray-300">
              Who It&apos;s For
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/who-sindi-is-for/general-dentists"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  General Dentists
                </Link>
              </li>
              <li>
                <Link
                  href="/who-sindi-is-for/oral-surgeons"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Oral Surgeons
                </Link>
              </li>
              <li>
                <Link
                  href="/who-sindi-is-for/endodontists"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Endodontists
                </Link>
              </li>
              <li>
                <Link
                  href="/who-sindi-is-for/periodontists"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Periodontists
                </Link>
              </li>
              <li>
                <Link
                  href="/who-sindi-is-for/orthodontists"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Orthodontists
                </Link>
              </li>
              <li>
                <Link
                  href="/who-sindi-is-for/office-managers"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Office Managers
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gray-300">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href="https://blog.sindireferrals.com"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
              </li>
              <li>
                <Link
                  href="/terms-of-use"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/business-associate-agreement"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  BAA
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Sindi Inc. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            100% HIPAA Compliant
          </p>
        </div>
      </div>
    </footer>
  );
}
