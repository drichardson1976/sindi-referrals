import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Sindi",
  description:
    "Privacy policy for Sindi, the HIPAA-compliant dental referral management platform.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-16">
      <section className="bg-light-bg py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-dark leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-gray-text text-lg">
            Last updated: March 12, 2026
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 space-y-12 text-gray-text text-lg leading-relaxed">
          <div>
            <p>
              Sindi Inc. (&ldquo;Sindi,&rdquo; &ldquo;we,&rdquo;
              &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to
              protecting the privacy and security of your information. This
              Privacy Policy describes how we collect, use, and safeguard data
              when you use the Sindi platform (&ldquo;Service&rdquo;).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-dark mb-4">
              1. Information We Collect
            </h2>
            <p className="mb-4">
              We collect the following categories of information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-dark">Account Information:</strong>{" "}
                Name, email address, phone number, practice name, NPI number,
                and professional credentials provided during registration.
              </li>
              <li>
                <strong className="text-dark">
                  Protected Health Information (PHI):
                </strong>{" "}
                Patient referral data including names, dates of birth, clinical
                notes, imaging, and treatment history submitted through the
                platform.
              </li>
              <li>
                <strong className="text-dark">Usage Data:</strong> Information
                about how you interact with the Service, including log data, IP
                addresses, browser type, and pages visited.
              </li>
              <li>
                <strong className="text-dark">Device Information:</strong>{" "}
                Device type, operating system, and unique device identifiers.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-dark mb-4">
              2. How We Use Information
            </h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, operate, and maintain the Service.</li>
              <li>
                Facilitate the secure transmission of dental referrals between
                practices.
              </li>
              <li>
                Communicate with you about your account, updates, and support
                requests.
              </li>
              <li>
                Improve the Service through analytics and usage patterns
                (aggregated and de-identified only).
              </li>
              <li>Comply with legal obligations and enforce our agreements.</li>
            </ul>
            <p className="mt-4">
              We do not sell, rent, or trade your personal information or
              Protected Health Information to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-dark mb-4">
              3. Data Security
            </h2>
            <p>
              We implement industry-standard technical and organizational
              measures to protect your data, including encryption of data at rest
              and in transit (AES-256 and TLS 1.2+), access controls and
              role-based permissions, regular security audits and vulnerability
              assessments, and secure cloud infrastructure with SOC 2 compliant
              hosting providers. While no method of transmission or storage is
              completely secure, we are committed to protecting your information
              using commercially reasonable safeguards.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-dark mb-4">
              4. HIPAA Compliance
            </h2>
            <p>
              Sindi operates as a Business Associate under the Health Insurance
              Portability and Accountability Act (HIPAA). We handle Protected
              Health Information (PHI) in accordance with HIPAA requirements and
              enter into Business Associate Agreements (BAAs) with covered
              entities that use our platform. Our HIPAA compliance program
              includes administrative, physical, and technical safeguards
              designed to ensure the confidentiality, integrity, and availability
              of PHI.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-dark mb-4">
              5. Data Retention
            </h2>
            <p>
              We retain your account information for as long as your account is
              active or as needed to provide the Service. PHI is retained in
              accordance with applicable laws and our agreements with covered
              entities. When data is no longer required, we securely delete or
              de-identify it. You may request deletion of your account and
              associated data by contacting us, subject to our legal and
              regulatory obligations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-dark mb-4">
              6. Third-Party Services
            </h2>
            <p>
              We may use trusted third-party service providers to help operate
              the Service (e.g., cloud hosting, analytics, email delivery). These
              providers are contractually obligated to protect your data and are
              only permitted to process information on our behalf and in
              accordance with our instructions. Where PHI is involved, we
              maintain appropriate Business Associate Agreements with these
              providers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-dark mb-4">
              7. Your Rights
            </h2>
            <p className="mb-4">
              Depending on your jurisdiction, you may have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal information we hold about you.</li>
              <li>Request correction of inaccurate information.</li>
              <li>
                Request deletion of your personal data, subject to legal
                retention requirements.
              </li>
              <li>Opt out of non-essential communications.</li>
              <li>
                Request a copy of your data in a portable format where
                technically feasible.
              </li>
            </ul>
            <p className="mt-4">
              For rights related to PHI, please refer to the Notice of Privacy
              Practices provided by your dental practice (the covered entity).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-dark mb-4">8. Contact</h2>
            <p>
              If you have questions or concerns about this Privacy Policy or our
              data practices, please contact us at:
            </p>
            <div className="mt-4 bg-light-bg rounded-xl p-6">
              <p className="font-semibold text-dark">Sindi Inc.</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:privacy@sindireferrals.com"
                  className="text-primary hover:underline"
                >
                  privacy@sindireferrals.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
