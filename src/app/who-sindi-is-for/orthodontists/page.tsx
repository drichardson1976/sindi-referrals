import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sindi for Orthodontists | Digital Referral Intake, Seamless Coordination",
  description:
    "Sindi helps orthodontists digitize referral intake, communicate with patients, and coordinate seamlessly with referring dentists.",
};

const features = [
  {
    title: "Digital referral intake",
    description:
      "Replace paper referrals and faxes with a fully digital intake process. Referring dentists submit cases through Sindi with all the clinical details, images, and patient information you need — organized and accessible from day one.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Patient communication tools",
    description:
      "Keep patients and their families informed throughout the referral and treatment process. Sindi makes it easy to share updates, send reminders, and ensure everyone stays on the same page about treatment timelines.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Progress tracking dashboard",
    description:
      "Monitor every referral from initial consultation through active treatment and retention. Your centralized dashboard gives you a clear view of your caseload, upcoming appointments, and treatment milestones.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Office coordination features",
    description:
      "Collaborate seamlessly with referring general dentists. Share treatment updates, coordinate on shared patients, and build stronger referral relationships — all through Sindi's secure, HIPAA-compliant platform.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Practice growth analytics",
    description:
      "Understand your referral patterns and identify growth opportunities. Track which offices send the most referrals, measure your conversion rates, and use data-driven insights to expand your orthodontic practice.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

export default function OrthodontistsPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-light-bg py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <Link
            href="/who-sindi-is-for"
            className="inline-flex items-center text-primary font-semibold text-sm tracking-wide uppercase mb-4 hover:underline"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Who Sindi Is For
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight max-w-4xl mx-auto">
            How Sindi helps Orthodontists
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-text max-w-2xl mx-auto leading-relaxed">
            Digital referral intake and seamless coordination with referring
            dentists.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-semibold text-base px-8 py-3.5 rounded-lg transition-colors"
            >
              Start Your Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-coral/10 text-coral flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-text leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-light-bg-alt py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight mb-6">
            Ready to digitize your referral intake?
          </h2>
          <p className="text-lg text-gray-text max-w-2xl mx-auto mb-8 leading-relaxed">
            Try Sindi free for 60 days and see how a modern referral platform
            can transform your orthodontic practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-semibold text-base px-8 py-3.5 rounded-lg transition-colors"
            >
              Start Your Free Trial
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
