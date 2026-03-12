import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sindi for Endodontists | Complete Case Info, Streamlined Workflow",
  description:
    "Sindi helps endodontists get complete case information upfront, communicate securely, and streamline their referral workflow with real-time updates.",
};

const features = [
  {
    title: "Get complete case information upfront",
    description:
      "Receive referrals with all the clinical details you need — tooth numbers, symptoms, x-rays, and patient history — before the patient even walks through your door. No more incomplete referrals slowing down your workflow.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="15" x2="15" y2="15" />
        <line x1="9" y1="11" x2="15" y2="11" />
      </svg>
    ),
  },
  {
    title: "Secure communication with referring dentists",
    description:
      "Use Sindi's HIPAA-compliant Timeline to ask the referring dentist clarifying questions, request additional images, or share post-treatment updates — all tied directly to the patient's referral record.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Streamlined workflow from intake to completion",
    description:
      "Manage your entire referral pipeline from one dashboard. Track referrals from the moment they arrive through scheduling, treatment, and follow-up. Keep your team aligned and your cases organized.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: "Real-time updates and notifications",
    description:
      "Stay informed with instant notifications when new referrals arrive, when referring dentists send messages, or when patients update their information. Never miss an important update again.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    title: "Referral analytics and insights",
    description:
      "Understand your referral patterns with built-in analytics. See which offices refer the most, track your average response time, and identify opportunities to grow your practice and improve patient care.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

export default function EndodontistsPage() {
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
            How Sindi helps Endodontists
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-text max-w-2xl mx-auto leading-relaxed">
            Get complete case information upfront and streamline your referral
            workflow.
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
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center">
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
            Ready to modernize your referral intake?
          </h2>
          <p className="text-lg text-gray-text max-w-2xl mx-auto mb-8 leading-relaxed">
            Try Sindi free for 60 days and experience a streamlined referral
            workflow built for endodontic practices.
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
