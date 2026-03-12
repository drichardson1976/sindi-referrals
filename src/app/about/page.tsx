import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sindi | Our Story & Mission",
  description:
    "Learn why Sindi was built to transform dental referrals. Founded by an oral surgeon, Sindi makes referrals seamless, secure, and efficient.",
};

const values = [
  {
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
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l.146.146A2 2 0 0114.5 19h-5a2 2 0 01-1.182-3.614l.146-.146z" />
      </svg>
    ),
    title: "Innovation",
    description:
      "We challenge the status quo of dental referrals. Every feature we build is designed to move the industry forward and eliminate outdated workflows.",
    color: "text-coral",
    bgColor: "bg-coral/10",
  },
  {
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
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Security",
    description:
      "HIPAA-compliant everything. Patient data is encrypted at rest and in transit. We treat security as a foundation, not an afterthought.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
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
    title: "Simplicity",
    description:
      "If it needs a training manual, we haven't done our job. Sindi is designed to be intuitive from the very first click — no learning curve required.",
    color: "text-teal",
    bgColor: "bg-teal/10",
  },
  {
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
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Community",
    description:
      "Dentistry works best when providers communicate seamlessly. We're building the connective tissue that links the entire dental community.",
    color: "text-primary-dark",
    bgColor: "bg-primary/10",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-light-bg py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <span className="inline-block text-primary font-semibold text-sm tracking-wide uppercase mb-4">
            About Sindi
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight max-w-4xl mx-auto">
            Why we built a better way to send dental referrals
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-text max-w-2xl mx-auto leading-relaxed">
            Sindi exists because dental referrals should be simple, not
            stressful. Here&apos;s the story behind the platform.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block text-primary font-semibold text-sm tracking-wide uppercase mb-4">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight mb-8">
              Born from real frustration in the referral process
            </h2>
            <div className="space-y-6 text-gray-text text-lg leading-relaxed">
              <p>
                Sindi was founded by an oral surgeon who experienced the pain of
                fragmented referral workflows firsthand. After years of dealing
                with lost faxes, incomplete patient records, and phone tag with
                referring offices, it became clear that the dental industry
                deserved better.
              </p>
              <p>
                The referral process — the critical handoff between a general
                dentist and a specialist — was stuck in the past. Important
                patient information was getting lost. Follow-ups were falling
                through the cracks. And patients were caught in the middle,
                confused and frustrated.
              </p>
              <p>
                Sindi was built to solve the communication gaps between general
                dentists and specialists. We set out to create a platform that
                makes sending, receiving, and tracking referrals as easy as
                sending a text message — while keeping everything
                HIPAA-compliant and secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-primary py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <span className="inline-block text-white/80 font-semibold text-sm tracking-wide uppercase mb-4">
            Our Mission
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl mx-auto">
            &ldquo;To help dental professionals save time, reduce errors, and
            focus on what matters &ndash; their patients.&rdquo;
          </h2>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            We believe that when providers communicate better, patients get
            better care. That&apos;s the standard we hold ourselves to every
            day.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-light-bg">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold text-sm tracking-wide uppercase mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight">
              What drives us forward
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className={`w-14 h-14 rounded-xl ${value.bgColor} ${value.color} flex items-center justify-center mb-5`}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-text leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight mb-6">
            Ready to modernize your referral workflow?
          </h2>
          <p className="text-lg text-gray-text max-w-2xl mx-auto mb-8 leading-relaxed">
            Join the growing network of dental practices using Sindi to send and
            receive referrals seamlessly.
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
