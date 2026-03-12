import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sindi for Periodontists | Standardized Referrals, Direct Communication",
  description:
    "Sindi helps periodontists receive standardized referrals, communicate directly with referring dentists, and track treatment progress efficiently.",
};

const features = [
  {
    title: "Standardized referral formats",
    description:
      "Receive referrals in a consistent, structured format every time. Sindi guides referring dentists to include the clinical information you need — periodontal charting, medical history, radiographs — so you can evaluate cases efficiently.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: "Direct communication with referring dentists",
    description:
      "Use Sindi's secure Timeline to coordinate care with the referring dentist. Discuss treatment plans, share progress updates, and ensure continuity of care — all within the patient's referral, fully HIPAA compliant.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Efficient scheduling and patient flow",
    description:
      "With complete referral information available digitally, your team can triage and schedule patients faster. Reduce the back-and-forth phone calls and get patients into your chair sooner.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    title: "Treatment tracking and follow-up",
    description:
      "Track each referral from initial consultation through active treatment and maintenance. Update the referring dentist on treatment progress and outcomes, keeping everyone on the same page about the patient's periodontal health.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Referral analytics and practice growth",
    description:
      "Gain insights into your referral network with built-in analytics. Identify your top referring offices, track referral volume trends, and discover opportunities to strengthen relationships and grow your periodontal practice.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

export default function PeriodontistsPage() {
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
            How Sindi helps Periodontists
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-text max-w-2xl mx-auto leading-relaxed">
            Receive standardized referrals and communicate directly with
            referring offices.
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
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
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
            Ready to elevate your referral experience?
          </h2>
          <p className="text-lg text-gray-text max-w-2xl mx-auto mb-8 leading-relaxed">
            Try Sindi free for 60 days and see how a modern referral platform
            can improve your periodontal practice workflow.
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
