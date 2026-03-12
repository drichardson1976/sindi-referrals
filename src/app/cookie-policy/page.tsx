import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Sindi",
  description:
    "Learn how Sindi uses cookies and similar technologies on our dental referral platform.",
};

export default function CookiePolicyPage() {
  return (
    <div className="pt-16">
      <section className="bg-light-bg py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-dark leading-tight">
            Cookie Policy
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
              This Cookie Policy explains how Sindi Inc. (&ldquo;Sindi,&rdquo;
              &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) uses
              cookies and similar tracking technologies when you visit or use
              the Sindi platform (&ldquo;Service&rdquo;).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-dark mb-4">
              1. What Are Cookies
            </h2>
            <p>
              Cookies are small text files that are placed on your device
              (computer, tablet, or mobile phone) when you visit a website.
              They are widely used to make websites work more efficiently, to
              provide a better user experience, and to supply information to
              site owners. Cookies can be &ldquo;persistent&rdquo; (remaining
              on your device until they expire or you delete them) or
              &ldquo;session&rdquo; (deleted when you close your browser).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-dark mb-4">
              2. How We Use Cookies
            </h2>
            <p className="mb-6">
              We use the following categories of cookies on the Sindi platform:
            </p>

            <div className="space-y-6">
              <div className="bg-light-bg rounded-xl p-6">
                <h3 className="text-lg font-semibold text-dark mb-2">
                  Essential Cookies
                </h3>
                <p>
                  These cookies are strictly necessary for the Service to
                  function. They enable core features such as authentication,
                  session management, and security. Without these cookies, the
                  Service cannot operate properly. Essential cookies do not
                  require your consent.
                </p>
              </div>

              <div className="bg-light-bg rounded-xl p-6">
                <h3 className="text-lg font-semibold text-dark mb-2">
                  Analytics Cookies
                </h3>
                <p>
                  We use analytics cookies to understand how visitors interact
                  with the Service. These cookies help us measure traffic
                  patterns, identify popular features, and improve the overall
                  user experience. Analytics data is aggregated and
                  de-identified. We do not use analytics cookies to track
                  individual patient health information.
                </p>
              </div>

              <div className="bg-light-bg rounded-xl p-6">
                <h3 className="text-lg font-semibold text-dark mb-2">
                  Preference Cookies
                </h3>
                <p>
                  These cookies remember choices you make on the platform, such
                  as your display preferences, language settings, and dashboard
                  configurations. They allow us to personalize your experience
                  so you don&apos;t have to re-enter settings each time you
                  visit.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-dark mb-4">
              3. Third-Party Cookies
            </h2>
            <p>
              Some cookies on our Service are set by third-party providers. We
              use Google Analytics to help us understand how visitors interact
              with the Service. Google Analytics uses cookies to collect
              information about your use of the Service, including your IP
              address, which is transmitted to and stored by Google. We
              carefully select third-party partners and require them to handle
              data responsibly and in compliance with applicable privacy laws.
              We do not allow third-party advertising cookies on the Sindi
              platform.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-dark mb-4">
              4. Managing Cookies
            </h2>
            <p className="mb-4">
              You have control over cookies through your browser settings. Most
              browsers allow you to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>View what cookies are stored on your device.</li>
              <li>Delete individual cookies or all cookies at once.</li>
              <li>
                Block cookies from specific sites or all sites by default.
              </li>
              <li>
                Set your browser to notify you when a cookie is being placed.
              </li>
            </ul>
            <p className="mt-4">
              Please note that disabling essential cookies may prevent you from
              using certain features of the Service. If you disable analytics
              or preference cookies, your experience may be less personalized
              but the core Service will remain functional.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-dark mb-4">5. Contact</h2>
            <p>
              If you have questions about our use of cookies or this Cookie
              Policy, please contact us at{" "}
              <a
                href="mailto:privacy@sindireferrals.com"
                className="text-primary hover:underline"
              >
                privacy@sindireferrals.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
