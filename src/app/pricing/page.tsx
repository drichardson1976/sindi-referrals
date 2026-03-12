"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "Is Sindi really free for general dentists?",
    answer:
      "Yes, 100% free forever. General dentists can send unlimited referrals, track their status, and communicate with specialists at no cost. We believe referring providers should never have to pay to send a referral.",
  },
  {
    question: "What does the 60-day free trial include?",
    answer:
      "The Specialist trial includes everything in the paid plan: receiving referrals, advanced analytics, priority support, and custom referral forms. No credit card required to start.",
  },
  {
    question: "Can I switch between monthly and annual billing?",
    answer:
      "Absolutely. You can switch from monthly to annual billing at any time to take advantage of the savings. If you switch from annual to monthly, the change takes effect at the end of your current billing cycle.",
  },
  {
    question: "What happens after my free trial ends?",
    answer:
      "After your 60-day trial, you can choose to subscribe to the Specialist plan or continue using Sindi as a general dentist for free. You won't lose any of your data.",
  },
  {
    question: "Is Sindi HIPAA-compliant?",
    answer:
      "Yes. Every plan includes HIPAA-compliant infrastructure. All data is encrypted at rest and in transit, and we sign Business Associate Agreements (BAAs) with all paid accounts. Security isn't an add-on — it's built into everything we do.",
  },
  {
    question: "Are there any hidden fees or setup costs?",
    answer:
      "None at all. The prices shown are exactly what you pay. There are no setup fees, no per-referral charges, and no surprise costs.",
  },
];

const generalFeatures = [
  "Send unlimited referrals",
  "Real-time tracking",
  "Patient notifications",
  "Secure messaging",
  "Document & x-ray attachments",
  "Specialist network directory",
];

const specialistFeatures = [
  "Everything in Free",
  "Receive referrals",
  "Advanced analytics",
  "Priority support",
  "Custom referral forms",
  "Practice branding",
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  const specialistPrice = annual ? 29 : 49;
  const billingLabel = annual ? "/mo, billed annually" : "/mo";

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-pricing.jpg"
            alt="Dental office reception"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-dark/60" />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 pt-24 pb-12 md:pt-32 md:pb-16 text-center">
          <span className="inline-block text-primary-light font-semibold text-sm tracking-wide uppercase mb-4">
            Pricing
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl mx-auto">
            Simple pricing for busy dental practices
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Free for general dentists. Affordable for specialists. No hidden
            fees, no surprises.
          </p>

          {/* Billing Toggle */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <span
              className={`text-sm font-medium ${!annual ? "text-white" : "text-white/50"}`}
            >
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-14 h-7 rounded-full transition-colors ${annual ? "bg-primary" : "bg-gray-300"}`}
              aria-label="Toggle annual billing"
            >
              <span
                className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-sm transition-transform ${annual ? "translate-x-7" : "translate-x-0"}`}
              />
            </button>
            <span
              className={`text-sm font-medium ${annual ? "text-white" : "text-white/50"}`}
            >
              Annual
            </span>
            {annual && (
              <span className="ml-1 text-xs font-semibold text-teal bg-teal/10 px-2.5 py-1 rounded-full">
                Save $240/yr
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
            {/* General Dentist - Free */}
            <div className="relative rounded-2xl p-8 md:p-10 bg-white border border-gray-200 shadow-sm flex flex-col">
              <h3 className="text-lg font-bold text-dark">General Dentist</h3>
              <p className="text-sm text-gray-text mt-1">
                Everything you need to send referrals digitally.
              </p>
              <div className="mt-6 mb-6">
                <span className="text-5xl font-bold text-dark">FREE</span>
                <span className="text-gray-text text-sm ml-2">forever</span>
                <p className="text-xs text-gray-text mt-2">
                  No credit card required.
                </p>
              </div>
              <Link
                href="/register"
                className="block w-full text-center font-semibold text-sm px-6 py-3 rounded-lg transition-colors border-2 border-primary text-primary hover:bg-primary hover:text-white mb-8"
              >
                Sign Up Free
              </Link>
              <ul className="space-y-3 flex-1">
                {generalFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-dark"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="shrink-0 mt-0.5"
                    >
                      <path
                        d="M6 10l3 3 5-6"
                        stroke="#3dc9c0"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specialist */}
            <div className="relative rounded-2xl p-8 md:p-10 bg-white ring-2 ring-primary shadow-xl flex flex-col">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-bold text-white bg-coral px-4 py-1 rounded-full uppercase tracking-wide">
                Most Popular
              </span>
              <h3 className="text-lg font-bold text-dark">Specialist</h3>
              <p className="text-sm text-gray-text mt-1">
                For specialists who receive and manage referrals.
              </p>
              <div className="mt-6 mb-6">
                <span className="text-5xl font-bold text-dark">
                  ${specialistPrice}
                </span>
                <span className="text-gray-text text-sm ml-1">
                  {billingLabel}
                </span>
                {!annual && (
                  <p className="text-xs text-teal mt-2">
                    Save $240/yr with annual billing
                  </p>
                )}
                {annual && (
                  <p className="text-xs text-gray-text mt-2">
                    Billed as $348/year
                  </p>
                )}
              </div>
              <Link
                href="/register?plan=specialist"
                className="block w-full text-center font-semibold text-sm px-6 py-3 rounded-lg transition-colors bg-primary hover:bg-primary-dark text-white mb-8"
              >
                Start 60-Day Free Trial
              </Link>
              <ul className="space-y-3 flex-1">
                {specialistFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-dark"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="shrink-0 mt-0.5"
                    >
                      <path
                        d="M6 10l3 3 5-6"
                        stroke="#3dc9c0"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-text mt-6 text-center">
                60-day free trial. No credit card required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-light-bg">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold text-sm tracking-wide uppercase mb-4">
              FAQs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight">
              Common pricing questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <h3 className="text-lg font-bold text-dark mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-text leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight mb-6">
            Ready to get started?
          </h2>
          <p className="text-lg text-gray-text max-w-2xl mx-auto mb-8 leading-relaxed">
            Join dental practices already using Sindi. Free for general
            dentists, always.
          </p>
          <Link
            href="/register"
            className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-semibold text-base px-8 py-3.5 rounded-lg transition-colors"
          >
            Sign Up Free
          </Link>
        </div>
      </section>
    </div>
  );
}
