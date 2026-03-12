import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Associate Agreement | Sindi",
  description:
    "Learn about Sindi's Business Associate Agreement (BAA) for HIPAA-compliant handling of Protected Health Information.",
};

export default function BusinessAssociateAgreementPage() {
  return (
    <div className="pt-16">
      <section className="bg-light-bg py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-dark leading-tight">
            Business Associate Agreement
          </h1>
          <p className="mt-4 text-gray-text text-lg">
            Last updated: March 12, 2026
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 space-y-12 text-gray-text text-lg leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-dark mb-4">1. Overview</h2>
            <p>
              Under the Health Insurance Portability and Accountability Act
              (HIPAA), dental practices that use Sindi to transmit, store, or
              process Protected Health Information (PHI) are considered Covered
              Entities. As a service provider that handles PHI on behalf of these
              practices, Sindi Inc. acts as a Business Associate. A Business
              Associate Agreement (BAA) is a legally required contract that
              establishes the permitted uses and disclosures of PHI between a
              Covered Entity and a Business Associate. Sindi provides a BAA to
              all customers whose use of the platform involves PHI.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-dark mb-4">
              2. Obligations of Sindi as Business Associate
            </h2>
            <p className="mb-4">
              Under our BAA, Sindi Inc. agrees to the following obligations:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Use and disclose PHI only as permitted by the BAA and applicable
                law.
              </li>
              <li>
                Implement appropriate administrative, physical, and technical
                safeguards to protect PHI.
              </li>
              <li>
                Report any use or disclosure of PHI not authorized by the
                agreement.
              </li>
              <li>
                Ensure that any subcontractors who access PHI agree to the same
                restrictions and conditions.
              </li>
              <li>
                Make PHI available to the Covered Entity as required for
                individuals to exercise their rights under HIPAA.
              </li>
              <li>
                Make internal practices, books, and records relating to the use
                of PHI available to the Secretary of Health and Human Services
                for compliance determination.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-dark mb-4">
              3. Permitted Uses and Disclosures
            </h2>
            <p className="mb-4">Sindi may use or disclose PHI only to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Perform functions, activities, or services on behalf of the
                Covered Entity as specified in the service agreement.
              </li>
              <li>
                Carry out the legal responsibilities of Sindi Inc. as a Business
                Associate.
              </li>
              <li>
                Provide data aggregation services relating to the healthcare
                operations of the Covered Entity, using de-identified data only.
              </li>
            </ul>
            <p className="mt-4">
              Sindi will not use or disclose PHI in a manner that would violate
              the HIPAA Privacy Rule if done by the Covered Entity, except as
              expressly permitted by law or the BAA.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-dark mb-4">
              4. Security Safeguards
            </h2>
            <p className="mb-4">
              Sindi maintains a comprehensive security program to protect PHI,
              including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-dark">Encryption:</strong> All PHI is
                encrypted at rest (AES-256) and in transit (TLS 1.2+).
              </li>
              <li>
                <strong className="text-dark">Access Controls:</strong>{" "}
                Role-based access ensures that only authorized personnel can view
                or process PHI.
              </li>
              <li>
                <strong className="text-dark">Audit Logging:</strong> All access
                to PHI is logged and monitored for unauthorized activity.
              </li>
              <li>
                <strong className="text-dark">Employee Training:</strong> All
                Sindi team members receive HIPAA training and are bound by
                confidentiality agreements.
              </li>
              <li>
                <strong className="text-dark">Infrastructure:</strong> Our
                systems are hosted on SOC 2 compliant cloud infrastructure with
                regular penetration testing and vulnerability scanning.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-dark mb-4">
              5. Breach Notification
            </h2>
            <p>
              In the event of a breach of unsecured PHI, Sindi will notify the
              affected Covered Entity without unreasonable delay and no later
              than sixty (60) days after discovery of the breach. The
              notification will include the identification of each individual
              whose PHI has been or is reasonably believed to have been accessed,
              a description of the nature of the breach, steps individuals should
              take to protect themselves, a description of what Sindi is doing to
              investigate and mitigate the breach, and contact information for
              further inquiries. Sindi will cooperate fully with the Covered
              Entity in fulfilling any breach notification obligations under
              HIPAA.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-dark mb-4">
              6. Term and Termination
            </h2>
            <p className="mb-4">
              The BAA remains in effect for the duration of the service
              agreement between Sindi and the Covered Entity. Either party may
              terminate the BAA if:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                The other party materially breaches the BAA and fails to cure the
                breach within thirty (30) days of written notice.
              </li>
              <li>
                The underlying service agreement is terminated or expires.
              </li>
            </ul>
            <p className="mt-4">
              Upon termination, Sindi will return or destroy all PHI in its
              possession, where feasible. If return or destruction is not
              feasible, the protections of the BAA will extend to any retained
              PHI for as long as it is maintained.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <p>
              To request a copy of our Business Associate Agreement or to
              discuss HIPAA compliance, please contact us at{" "}
              <a
                href="mailto:compliance@sindireferrals.com"
                className="text-primary hover:underline"
              >
                compliance@sindireferrals.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
