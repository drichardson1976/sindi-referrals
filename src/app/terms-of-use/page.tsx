import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Sindi",
  description:
    "Terms of use for Sindi, the dental referral management platform by Sindi Inc.",
};

export default function TermsOfUsePage() {
  return (
    <div className="pt-16">
      <section className="bg-light-bg py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-dark leading-tight">
            Terms of Use
          </h1>
          <p className="mt-4 text-gray-text text-lg">
            Last updated: March 12, 2026
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 space-y-12 text-gray-text text-lg leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-dark mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the Sindi platform (&ldquo;Service&rdquo;),
              operated by Sindi Inc. (&ldquo;Company,&rdquo; &ldquo;we,&rdquo;
              &ldquo;us,&rdquo; or &ldquo;our&rdquo;), you agree to be bound by
              these Terms of Use. If you do not agree to these terms, you may not
              access or use the Service. We reserve the right to update these
              terms at any time, and your continued use of the Service
              constitutes acceptance of any modifications.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-dark mb-4">
              2. Description of Service
            </h2>
            <p>
              Sindi is a cloud-based dental referral management platform that
              enables dental practices to send, receive, and track patient
              referrals electronically. The Service includes referral submission
              tools, practice network features, patient communication workflows,
              and related functionality. We may modify, suspend, or discontinue
              any aspect of the Service at our discretion with reasonable notice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-dark mb-4">
              3. User Accounts
            </h2>
            <p className="mb-4">
              To use the Service, you must create an account and provide
              accurate, complete information. You are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Maintaining the confidentiality of your account credentials.
              </li>
              <li>All activities that occur under your account.</li>
              <li>
                Notifying us immediately of any unauthorized use of your account.
              </li>
              <li>
                Ensuring that all users within your practice comply with these
                terms.
              </li>
            </ul>
            <p className="mt-4">
              We reserve the right to suspend or terminate accounts that violate
              these terms or that remain inactive for an extended period.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-dark mb-4">
              4. Acceptable Use
            </h2>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Use the Service for any unlawful purpose or in violation of any
                applicable regulations, including HIPAA.
              </li>
              <li>
                Attempt to gain unauthorized access to any part of the Service or
                its related systems.
              </li>
              <li>
                Transmit viruses, malware, or any other harmful code through the
                Service.
              </li>
              <li>
                Interfere with or disrupt the integrity or performance of the
                Service.
              </li>
              <li>
                Reverse engineer, decompile, or disassemble any portion of the
                Service.
              </li>
              <li>
                Use the Service to transmit unsolicited communications or spam.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-dark mb-4">
              5. Intellectual Property
            </h2>
            <p>
              All content, features, and functionality of the Service — including
              text, graphics, logos, software, and design — are the exclusive
              property of Sindi Inc. and are protected by copyright, trademark,
              and other intellectual property laws. You are granted a limited,
              non-exclusive, non-transferable license to use the Service for its
              intended purpose. You may not copy, modify, distribute, or create
              derivative works based on any part of the Service without our prior
              written consent.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-dark mb-4">
              6. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, Sindi Inc. shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages arising out of or related to your use of the
              Service. Our total liability for any claim arising from or related
              to the Service shall not exceed the amount you paid to us in the
              twelve (12) months preceding the claim. The Service is provided
              &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
              warranties of any kind, either express or implied.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-dark mb-4">
              7. Termination
            </h2>
            <p>
              Either party may terminate this agreement at any time. You may
              terminate by discontinuing use of the Service and closing your
              account. We may terminate or suspend your access immediately,
              without prior notice, if you breach these terms. Upon termination,
              your right to use the Service ceases immediately. Provisions that
              by their nature should survive termination — including intellectual
              property, limitation of liability, and dispute resolution — will
              remain in effect.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-dark mb-4">
              8. Governing Law
            </h2>
            <p>
              These Terms of Use shall be governed by and construed in accordance
              with the laws of the State of Delaware, without regard to its
              conflict of law provisions. Any disputes arising from these terms
              or your use of the Service shall be resolved exclusively in the
              state or federal courts located in Delaware. By using the Service,
              you consent to the jurisdiction of these courts.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <p>
              If you have questions about these Terms of Use, please contact us
              at{" "}
              <a
                href="mailto:legal@sindireferrals.com"
                className="text-primary hover:underline"
              >
                legal@sindireferrals.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
