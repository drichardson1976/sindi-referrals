import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";

const steps = [
  {
    number: 1,
    title: "Create your free account in under 2 minutes",
    description:
      "Sign up with your name, practice info, and email. No credit card needed for general dentists. Your account is ready to go instantly — start sending referrals right away.",
    highlights: [
      "No credit card required for general dentists",
      "Quick onboarding with practice details",
      "Instant access to your dashboard",
    ],
    bgLight: "bg-primary/10",
    bgDeco: "bg-primary/5",
    bgDecoCircle: "bg-primary/10",
    bgDecoSquare: "bg-primary/15",
    bgSolid: "bg-primary",
  },
  {
    number: 2,
    title: "Send a referral with patient details, x-rays, and notes",
    description:
      "Fill out a simple referral form with patient information, select a specialist from your network, and attach any relevant documents like x-rays, clinical notes, or treatment plans. Everything the specialist needs is in one place.",
    highlights: [
      "Attach x-rays, documents, and clinical notes",
      "Select from your specialist network",
      "Patient receives a copy automatically",
    ],
    bgLight: "bg-teal/10",
    bgDeco: "bg-teal/5",
    bgDecoCircle: "bg-teal/10",
    bgDecoSquare: "bg-teal/15",
    bgSolid: "bg-teal",
  },
  {
    number: 3,
    title: "Track progress in real-time with status updates",
    description:
      "Once sent, you can see the referral status update in real-time. Know instantly when a specialist views, accepts, schedules, or completes a referral — no more phone calls to check on progress.",
    highlights: [
      "Real-time status updates on every referral",
      "Instant notifications for key events",
      "Complete visibility across your network",
    ],
    bgLight: "bg-coral/10",
    bgDeco: "bg-coral/5",
    bgDecoCircle: "bg-coral/10",
    bgDecoSquare: "bg-coral/15",
    bgSolid: "bg-coral",
  },
  {
    number: 4,
    title: "Communicate securely via HIPAA-compliant timeline",
    description:
      "Every referral has its own messaging timeline where you can ask questions, share updates, and coordinate care — all fully encrypted and HIPAA-compliant. No more unsecured emails or missed phone calls.",
    highlights: [
      "End-to-end encrypted messaging",
      "Timeline-based conversation per referral",
      "Full audit trail for compliance",
    ],
    bgLight: "bg-primary/10",
    bgDeco: "bg-primary/5",
    bgDecoCircle: "bg-primary/10",
    bgDecoSquare: "bg-primary/15",
    bgSolid: "bg-primary",
  },
];

export default function HowItWorks() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-how-it-works.jpg"
            alt="Dental professional using digital tools"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-dark/60" />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-primary-light font-semibold text-sm tracking-wide uppercase mb-4">
              How It Works
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              See how Sindi replaces phone, fax and email referrals
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              From creating an account to tracking every referral in real-time,
              here&apos;s how Sindi simplifies your entire workflow.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="space-y-20 md:space-y-28">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
              >
                {/* Visual placeholder */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div
                    className={`${step.bgLight} rounded-2xl p-8 md:p-12 flex items-center justify-center min-h-[300px] md:min-h-[360px] relative overflow-hidden`}
                  >
                    <div className={`${step.bgDeco} absolute inset-0`} />
                    <div className="relative">
                      <div
                        className={`w-24 h-24 ${step.bgSolid} rounded-2xl flex items-center justify-center text-white text-5xl font-bold shadow-lg`}
                      >
                        {step.number}
                      </div>
                    </div>
                    {/* Decorative elements */}
                    <div
                      className={`absolute top-6 right-6 w-16 h-16 ${step.bgDecoCircle} rounded-full`}
                    />
                    <div
                      className={`absolute bottom-8 left-8 w-12 h-12 ${step.bgDecoSquare} rounded-lg`}
                    />
                    <div
                      className={`absolute top-1/2 right-1/4 w-8 h-8 ${step.bgDecoCircle} rounded-full`}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`${step.bgSolid} text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center`}
                    >
                      {step.number}
                    </span>
                    <span className="text-gray-text text-sm font-medium uppercase tracking-wider">
                      Step {step.number}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-dark leading-snug mb-4">
                    {step.title}
                  </h2>
                  <p className="text-gray-text text-lg leading-relaxed mb-6">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-dark"
                      >
                        <svg
                          className="w-5 h-5 text-teal mt-0.5 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-light-bg">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="bg-primary rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight max-w-2xl mx-auto">
              Ready to see it in action?
            </h2>
            <p className="mt-4 text-white/80 text-lg max-w-xl mx-auto">
              Create your free account today and send your first referral in
              minutes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="coral"
                size="lg"
                href="/register"
                className="shadow-lg"
              >
                Sign Up Free
              </Button>
              <Link
                href="/pricing"
                className="text-white/90 hover:text-white font-semibold transition-colors"
              >
                View pricing &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
