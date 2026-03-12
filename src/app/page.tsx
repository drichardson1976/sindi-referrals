import Button from "@/components/Button";
import Link from "next/link";

const features = [
  {
    title: "Send Referrals Digitally",
    description:
      "No more scanning, faxing, or printing. Create and send referrals in minutes with patient details, x-rays, and notes attached.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
  },
  {
    title: "HIPAA-Compliant Messaging",
    description:
      "Communicate securely between offices without worrying about patient data. Every message is encrypted and audit-ready.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: "Real-Time Tracking",
    description:
      "Know exactly where every referral stands. Get instant notifications when a referral is received, scheduled, or completed.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
  {
    title: "Patient Communication",
    description:
      "Automatically send patients a copy of their referral details so they always know where to go and what to expect.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
  },
  {
    title: "Analytics & Insights",
    description:
      "Track referral activity across your network. Identify trends, measure response times, and optimize your workflow.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
      </svg>
    ),
  },
  {
    title: "Free for General Dentists",
    description:
      "General dentists send referrals at no cost, ever. Build your specialist network and streamline patient care for free.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const steps = [
  {
    number: "1",
    title: "Create Account",
    description:
      "Sign up in under 2 minutes with your practice info. No credit card required for general dentists.",
  },
  {
    number: "2",
    title: "Send Referral",
    description:
      "Add patient details, attach x-rays and notes, and send to any specialist in your network instantly.",
  },
  {
    number: "3",
    title: "Track & Communicate",
    description:
      "Follow real-time status updates and communicate securely through HIPAA-compliant messaging.",
  },
];

const roles = [
  {
    title: "General Dentists",
    description:
      "Send referrals to specialists in seconds and stay updated on every patient's journey.",
    href: "/who-sindi-is-for/general-dentists",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: "Specialists",
    description:
      "Receive organized referrals with all the information you need. No more incomplete faxes.",
    href: "/who-sindi-is-for/oral-surgeons",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Office Managers",
    description:
      "Streamline your referral workflow and eliminate the back-and-forth of phone and fax.",
    href: "/who-sindi-is-for/office-managers",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 17.25c-2.97 0-5.82-.556-8.427-1.524A2.236 2.236 0 013 14.15V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>
    ),
  },
];

const stats = [
  { value: "10x", label: "Faster than fax" },
  { value: "100%", label: "HIPAA compliant" },
  { value: "0", label: "Missed referrals" },
  { value: "24/7", label: "Access anywhere" },
];

export default function Home() {
  return (
    <div className="pt-16">
      {/* ── Hero ── */}
      <section className="bg-light-bg">
        <div className="max-w-[1280px] mx-auto px-6 py-20 md:py-28 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-tight text-dark tracking-tight">
                Dental referrals and messaging built for{" "}
                <span className="text-primary">modern practices</span>
              </h1>
              <p className="mt-6 text-lg text-gray-text leading-relaxed">
                Replace the phone calls, faxes, and emails with a single platform
                that lets you send, track, and manage dental referrals digitally.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="primary" size="lg" href="/register">
                  Sign Up Free
                </Button>
                <Button variant="outline" size="lg" href="/how-it-works">
                  See How It Works
                </Button>
              </div>
            </div>

            {/* Dashboard mockup placeholder */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-coral" />
                  <div className="w-3 h-3 rounded-full bg-teal" />
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="h-4 w-32 bg-light-bg-alt rounded" />
                    <div className="h-8 w-24 bg-primary/10 rounded-lg" />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-light-bg rounded-xl p-4">
                      <div className="h-3 w-12 bg-primary/20 rounded mb-2" />
                      <div className="h-6 w-8 bg-primary rounded font-bold" />
                    </div>
                    <div className="bg-light-bg rounded-xl p-4">
                      <div className="h-3 w-12 bg-teal/20 rounded mb-2" />
                      <div className="h-6 w-8 bg-teal rounded font-bold" />
                    </div>
                    <div className="bg-light-bg rounded-xl p-4">
                      <div className="h-3 w-12 bg-coral/20 rounded mb-2" />
                      <div className="h-6 w-8 bg-coral rounded font-bold" />
                    </div>
                  </div>
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 bg-light-bg rounded-xl p-4"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 shrink-0" />
                      <div className="flex-1 space-y-2">
                        <div className="h-3 w-3/4 bg-light-bg-alt rounded" />
                        <div className="h-2.5 w-1/2 bg-light-bg-alt rounded" />
                      </div>
                      <div className="h-6 w-16 bg-teal/15 rounded-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark tracking-tight">
              Everything you need to manage referrals
            </h2>
            <p className="mt-4 text-gray-text text-lg">
              Sindi brings your entire referral workflow into one secure, easy-to-use platform.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-text leading-relaxed text-[0.938rem]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works Preview ── */}
      <section className="py-20 md:py-28 bg-light-bg">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark tracking-tight">
              How it works
            </h2>
            <p className="mt-4 text-gray-text text-lg">
              Get up and running in minutes. Sindi makes referrals effortless.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary text-white text-xl font-bold flex items-center justify-center mx-auto mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-dark mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-text leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" href="/how-it-works">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* ── Built for Every Role ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark tracking-tight">
              Built for every role
            </h2>
            <p className="mt-4 text-gray-text text-lg">
              Whether you refer patients, receive them, or manage the office, Sindi
              is designed for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {roles.map((role) => (
              <Link
                key={role.title}
                href={role.href}
                className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {role.icon}
                </div>
                <h3 className="text-xl font-semibold text-dark mb-2">
                  {role.title}
                </h3>
                <p className="text-gray-text leading-relaxed text-[0.938rem]">
                  {role.description}
                </p>
                <span className="inline-block mt-4 text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform duration-200">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/who-sindi-is-for"
              className="text-primary font-semibold hover:underline"
            >
              See all roles &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── Social Proof / Trust ── */}
      <section className="py-20 md:py-28 bg-light-bg-alt">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark tracking-tight">
              Trusted by modern dental practices
            </h2>
            <p className="mt-4 text-gray-text text-lg">
              Practices are switching from fax and phone to Sindi for faster, more
              reliable referrals.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-text font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="bg-primary rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight max-w-2xl mx-auto">
              Ready to modernize your referral process?
            </h2>
            <p className="mt-4 text-white/80 text-lg max-w-xl mx-auto">
              Join dental practices that are saving time and improving patient care
              with Sindi.
            </p>
            <div className="mt-8">
              <Button
                variant="coral"
                size="lg"
                href="/register"
                className="shadow-lg"
              >
                Sign Up Free
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
