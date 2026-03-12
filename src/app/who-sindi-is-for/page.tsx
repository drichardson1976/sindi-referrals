import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who Sindi Is For | Every Role in the Modern Dental Practice",
  description:
    "Sindi is built for general dentists, oral surgeons, endodontists, periodontists, orthodontists, and office managers. See how Sindi helps your role.",
};

const roles = [
  {
    title: "General Dentists",
    href: "/who-sindi-is-for/general-dentists",
    description:
      "Send referrals in clicks, track every patient, and keep your referral network organized — all for free.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Oral Surgeons",
    href: "/who-sindi-is-for/oral-surgeons",
    description:
      "Receive complete referrals with all the clinical info you need, and communicate securely with referring offices.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    color: "text-coral",
    bgColor: "bg-coral/10",
  },
  {
    title: "Endodontists",
    href: "/who-sindi-is-for/endodontists",
    description:
      "Get complete case information upfront so you can focus on what matters — delivering excellent endodontic care.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
    color: "text-teal",
    bgColor: "bg-teal/10",
  },
  {
    title: "Periodontists",
    href: "/who-sindi-is-for/periodontists",
    description:
      "Receive standardized referrals, communicate directly with referring dentists, and track treatment progress efficiently.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Orthodontists",
    href: "/who-sindi-is-for/orthodontists",
    description:
      "Streamline your referral intake, coordinate with general dentists, and grow your practice with digital tools.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    color: "text-coral",
    bgColor: "bg-coral/10",
  },
  {
    title: "Office Managers",
    href: "/who-sindi-is-for/office-managers",
    description:
      "Eliminate phone tag, reduce paperwork, and keep every referral organized in one place with automated notifications.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    color: "text-teal",
    bgColor: "bg-teal/10",
  },
];

export default function WhoSindiIsForPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-light-bg py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <span className="inline-block text-primary font-semibold text-sm tracking-wide uppercase mb-4">
            Who Sindi Is For
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight max-w-4xl mx-auto">
            Built for every role in the modern dental practice
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-text max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re a general dentist, a specialist, or the one
            keeping the office running, Sindi is designed to make your referral
            workflow effortless.
          </p>
        </div>
      </section>

      {/* Role Cards Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roles.map((role) => (
              <Link
                key={role.title}
                href={role.href}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <div
                  className={`w-14 h-14 rounded-xl ${role.bgColor} ${role.color} flex items-center justify-center mb-5`}
                >
                  {role.icon}
                </div>
                <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                  {role.title}
                </h3>
                <p className="text-gray-text leading-relaxed mb-5">
                  {role.description}
                </p>
                <span className="inline-flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                  Learn More
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-light-bg-alt py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight mb-6">
            Ready to transform your referral workflow?
          </h2>
          <p className="text-lg text-gray-text max-w-2xl mx-auto mb-8 leading-relaxed">
            Join thousands of dental professionals who trust Sindi to manage
            their referrals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-semibold text-base px-8 py-3.5 rounded-lg transition-colors"
            >
              Get Started Free
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold text-base px-8 py-3.5 rounded-lg transition-colors"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
