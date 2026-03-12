"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "What is Sindi?",
    answer:
      "Sindi is a digital referral management platform that helps dental practices send, receive, and track patient referrals securely. Founded by an oral surgeon, Sindi replaces outdated methods like phone calls, faxes, and paper referral pads.",
  },
  {
    question: "Is Sindi HIPAA compliant?",
    answer:
      "Yes, Sindi is 100% HIPAA compliant. All data is encrypted in transit and at rest, and we offer a Business Associate Agreement (BAA) to all users.",
  },
  {
    question: "How much does Sindi cost?",
    answer:
      "Sindi is completely free for general dentists. Specialists can try Sindi free for 60 days, then choose from our affordable plans starting at $29/month when billed annually.",
  },
  {
    question: "How long does it take to set up?",
    answer:
      "You can create your account and start sending referrals in under 2 minutes. No software to install, no training required.",
  },
  {
    question: "Can I send x-rays and files with referrals?",
    answer:
      "Yes, you can attach x-rays, clinical photos, documents, and any other files to your referrals.",
  },
  {
    question: "How does the messaging work?",
    answer:
      "Sindi\u2019s secure Timeline feature lets you communicate with specialists or referring offices directly within the referral. All messages, updates, and notes are tied to the patient record.",
  },
  {
    question: "Do my patients get notified?",
    answer:
      "Yes, you can automatically send your patients a copy of the referral, keeping them informed about their care.",
  },
  {
    question: "What types of specialists does Sindi support?",
    answer:
      "Sindi supports oral surgeons, endodontists, periodontists, orthodontists, prosthodontists, and any other dental specialist.",
  },
];

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-lg font-semibold text-dark pr-8 group-hover:text-primary transition-colors">
          {question}
        </span>
        <span className="flex-shrink-0">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`text-primary transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-gray-text leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-light-bg py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <span className="inline-block text-primary font-semibold text-sm tracking-wide uppercase mb-4">
            FAQs
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight max-w-4xl mx-auto">
            Common questions about Sindi&apos;s dental referral platform
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-text max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about getting started with Sindi.
            Can&apos;t find what you&apos;re looking for? Reach out to our team.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-8">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-light-bg-alt py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight mb-6">
            Still have questions?
          </h2>
          <p className="text-lg text-gray-text max-w-2xl mx-auto mb-8 leading-relaxed">
            Our team is here to help. Get started for free or contact us for a
            personalized walkthrough.
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
