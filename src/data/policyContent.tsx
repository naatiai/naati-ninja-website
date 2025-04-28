export const policyContent = {
  privacy: (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Privacy Policy</h2>
        <p className="text-gray-600 mt-2">Effective Date: 29 May, 2024</p>
      </div>
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
        <h3 className="text-lg font-semibold text-blue-900">Introduction</h3>
        <p className="text-gray-700 mt-2">
          At Naati Ninja ("we," "us," "our"), we respect your privacy and are
          committed to protecting your personal information. This Privacy Policy
          explains what data we collect, why we collect it, how we use it, and
          your rights regarding that data. We aim to comply with Australian
          privacy laws, including the Privacy Act 1988 (Cth), to ensure
          transparency and trust in how we handle your data.
        </p>
      </div>
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Information We Collect
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Account Data</h4>
              <p className="text-gray-600">
                Name, email address, and payment details collected during signup
                and usage.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Usage Data</h4>
              <p className="text-gray-600">
                Interaction logs, including mock test attempts, practice activity, and feature usage, to improve our NAATI CCL preparation services.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">App Related Data</h4>
              <p className="text-gray-600">
                Naati Ninja is required to collect application related data that may
                include access-keys and related tokens to function correctly.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Technical Data</h4>
              <p className="text-gray-600">
                IP addresses, browser details, and operating systems used to
                ensure security and optimise performance.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            How We Use Your Information
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>
                Provide NAATI CCL mock tests, practice resources, and AI-powered feedback to help you prepare for the exam.
              </span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>
                Tailor recommendations and study tips to your NAATI CCL preparation needs.
              </span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>
                Enhance our platform based on user trends and technical feedback.
              </span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>
                Ensure compliance with Australian legal and security requirements.
              </span>
            </li>
          </ul>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Data Security & Retention
          </h3>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700">
              We use encryption, secure storage, and access controls to protect
              your data. We only retain information as long as necessary to
              provide our services or comply with Australian law. When no longer
              needed, data is securely deleted or anonymised.
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Your Rights & Choices
          </h3>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700">
              You have the right to access, correct, or delete your personal
              data. Contact us at{" "}
              <a
                href="mailto:support@naatininja.com"
                className="text-blue-600 hover:text-blue-800"
              >
                support@naatininja.com{" "}
              </a>
              for assistance. Note that withholding certain information may
              limit service functionality.
            </p>
          </div>
        </section>

        <section className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <h3 className="text-lg font-semibold text-yellow-900">
            Changes to This Policy
          </h3>
          <p className="text-gray-700 mt-2">
            We may update this Privacy Policy to reflect changes in our services
            or Australian legal requirements. Notifications will be sent for
            significant updates, and we encourage periodic review of this
            policy.
          </p>
        </section>

        <div className="text-center text-gray-600 pt-4 border-t">
          <p>
            For further questions or concerns, contact us at{" "}
            <a
              href="mailto:support@naatininja.com"
              className="text-blue-600 hover:text-blue-800"
            >
              support@naatininja.com
            </a>
            . You can find the full T&Cs and Privacy Policy here:{" "}
            <a
              href="https://www.naatininja.com/terms"
              className="text-blue-600 hover:text-blue-800"
            >
              naatininja.com/terms
            </a>
            ,{" "}
            <a
              href="https://www.naatininja.com/privacy"
              className="text-blue-600 hover:text-blue-800"
            >
              naatininja.com/privacy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  ),
  terms: (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Terms of Service</h2>
        <p className="text-gray-600 mt-2">Effective Date: 29 May, 2024</p>
      </div>

      <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-8">
        <h3 className="text-lg font-semibold text-purple-900">Introduction</h3>
        <p className="text-gray-700 mt-2">
          Welcome to Naati Ninja. By accessing or using our services, you ("you,"
          "your") agree to these Terms of Service ("Terms"). Please read them
          carefully. Our goal is to keep things clear and fair: we provide a
          valuable service, and in return, we expect you to use it responsibly
          and lawfully.
        </p>
      </div>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Your Use of Naati Ninja
        </h3>
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-indigo-500">
            <h4 className="font-semibold text-gray-900 mb-2">Eligibility</h4>
            <p className="text-gray-600">
              You must be at least 18 years old, or have the necessary
              permissions from your organisation, to use Naati Ninja in accordance
              with Australian law.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-green-500">
            <h4 className="font-semibold text-gray-900 mb-2">
              Appropriate Use
            </h4>
            <p className="text-gray-600">
              Use Naati Ninja in compliance with all applicable laws, regulations,
              and internal policies. Don't use our platform for unlawful
              activities, harassment, or infringement of others' rights, in
              accordance with Australian law.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-blue-500">
            <h4 className="font-semibold text-gray-900 mb-2">Your Content</h4>
            <p className="text-gray-600">
              You retain ownership of any documents or data you upload. By
              providing content to Naati Ninja, you grant us a limited license to
              process that content solely to deliver our services.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Intellectual Property
        </h3>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700">
            All intellectual property rights in Naati Ninja—designs, code,
            trademarks, and any related materials—belong to us or our licensors.
            You may not reproduce, distribute, or create derivative works
            without our express consent, in accordance with Australian copyright
            law.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-amber-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Payment & Billing
          </h3>
          <div className="prose prose-amber max-w-none">
            <p className="text-gray-700">
              If you select a paid plan, you agree to pay the applicable fees.
              We will provide transparent pricing details. Non-payment may
              result in service suspension or termination. All payments will be
              processed in accordance with Australian Consumer Law.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Disclaimers & Limitations
          </h3>
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-700">
              We strive for accuracy and uptime but provide Naati Ninja on an "as
              is" basis, without warranties. While we work hard to minimize
              errors and downtime, we are not liable for indirect, incidental,
              or consequential damages under Australian law.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Termination & Suspension
        </h3>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <svg
              className="h-6 w-6 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <p className="text-gray-700">
            We may suspend or end your access if you violate these Terms or if
            providing service becomes impractical. You can also terminate your
            account at any time, in accordance with the Australian Consumer Law
            regarding contract cancellations.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <h3 className="text-lg font-semibold text-yellow-900">
          Changes to These Terms
        </h3>
        <p className="text-gray-700 mt-2">
          We may occasionally modify these Terms. If changes are significant,
          we'll notify you. Your continued use after changes indicates
          acceptance of the updated Terms.
        </p>
      </section>

    <div className="text-center text-gray-600 pt-4 border-t">
      <p>
        If you have questions, please contact{" "}
        <a
          href="mailto:support@naatininja.com"
          className="text-blue-600 hover:text-blue-800"
        >
          support@naatininja.com
        </a>
      </p>
    </div>

      <div className="text-center text-gray-600 pt-4 border-t">
        <p>
          You can find the full T&C:{" "}
          <a
            href="https://naatininja.com/terms"
            className="text-blue-600 hover:text-blue-800"
          >
            naatininja.com/terms
          </a>
        </p>
      </div>
    </div>
  ),
  cookies: (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Cookie Policy</h2>
        <p className="text-gray-600 mt-2">Effective Date: 29 May, 2024</p>
      </div>

      <div className="bg-teal-50 border-l-4 border-teal-500 p-4 mb-8">
        <h3 className="text-lg font-semibold text-teal-900">Introduction</h3>
        <p className="text-gray-700 mt-2">
          This Cookie Policy explains how Naati Ninja uses cookies and similar
          technologies to understand how users interact with our platform,
          improve performance, and enhance user experience. We want to be
          transparent so you can make informed decisions about managing cookies.
        </p>
      </div>

      <section className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <svg
              className="h-8 w-8 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              What Are Cookies?
            </h3>
            <p className="text-gray-700">
              Cookies are small text files stored on your device when you visit
              a website or web application. They help us remember your settings
              and understand usage patterns.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Types of Cookies We Use
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-lg shadow-sm border-t-4 border-green-500">
            <div className="flex items-center mb-3">
              <svg
                className="h-6 w-6 text-green-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h4 className="font-semibold text-gray-900">Essential Cookies</h4>
            </div>
            <p className="text-gray-600">
              Required for basic site functionality, such as maintaining session
              state or allowing you to log in securely.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border-t-4 border-blue-500">
            <div className="flex items-center mb-3">
              <svg
                className="h-6 w-6 text-blue-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              <h4 className="font-semibold text-gray-900">Analytics Cookies</h4>
            </div>
            <p className="text-gray-600">
              Help us understand how you navigate Naati Ninja, which features you
              use, and where we can improve.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border-t-4 border-purple-500">
            <div className="flex items-center mb-3">
              <svg
                className="h-6 w-6 text-purple-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
              <h4 className="font-semibold text-gray-900">
                Preference Cookies
              </h4>
            </div>
            <p className="text-gray-600">
              Remember your preferences, like language settings or display
              options, so you don't have to reset them each time.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <svg
              className="h-6 w-6 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No Advertising or Tracking Cookies
            </h3>
            <p className="text-gray-700">
              We do not use cookies to serve third-party ads or track you across
              other websites.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Managing Cookies
        </h3>
        <p className="text-gray-700">
          You can typically modify your browser settings to block or delete
          cookies. However, disabling cookies may affect certain features or
          functionality of our platform.
        </p>
      </section>

      <div className="text-center text-gray-600 pt-4 border-t">
        <p>
          If you have questions or concerns, please contact{" "}
          <a
            href="mailto:support@naatininja.com"
            className="text-blue-600 hover:text-blue-800"
          >
            support@naatininja.com
          </a>
        </p>
      </div>
    </div>
  ),
  security: (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Security Policy</h2>
        <p className="text-gray-600 mt-2">Effective Date: 29 May, 2024</p>
      </div>

      <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-8">
        <h3 className="text-lg font-semibold text-indigo-900">Introduction</h3>
        <p className="text-gray-700 mt-2">
          At Naati Ninja, safeguarding your data is a top priority. This Security
          Policy outlines the measures we take to protect your information,
          prevent unauthorized access, and respond swiftly if issues arise.
        </p>
      </div>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Our Security Measures
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
            <div className="flex items-center mb-3">
              <svg
                className="h-6 w-6 text-blue-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <h4 className="font-semibold text-gray-900">Data Encryption</h4>
            </div>
            <p className="text-gray-600">
              We use industry-standard encryption protocols (e.g., HTTPS/TLS) to
              protect data in transit.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
            <div className="flex items-center mb-3">
              <svg
                className="h-6 w-6 text-green-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <h4 className="font-semibold text-gray-900">Access Controls</h4>
            </div>
            <p className="text-gray-600">
              We limit access to sensitive systems and data. Only authorized
              personnel with a need-to-know basis can access your information.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
            <div className="flex items-center mb-3">
              <svg
                className="h-6 w-6 text-purple-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              <h4 className="font-semibold text-gray-900">Regular Audits</h4>
            </div>
            <p className="text-gray-600">
              We conduct periodic security audits, vulnerability scans, and
              penetration tests to identify and address potential weaknesses.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-yellow-500">
            <div className="flex items-center mb-3">
              <svg
                className="h-6 w-6 text-yellow-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <h4 className="font-semibold text-gray-900">
                Infrastructure Monitoring
              </h4>
            </div>
            <p className="text-gray-600">
              Our systems are monitored continuously for suspicious activities,
              unusual patterns, or potential breaches.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-red-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <svg
            className="h-6 w-6 text-red-500 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          Incident Response
        </h3>
        <p className="text-gray-700 mb-4">
          If we detect a security breach, we act quickly:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center">
            <svg
              className="h-5 w-5 text-red-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Contain the incident to prevent further damage
          </li>
          <li className="flex items-center">
            <svg
              className="h-5 w-5 text-red-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Assess the impact and identify affected data
          </li>
          <li className="flex items-center">
            <svg
              className="h-5 w-5 text-red-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Notify affected users and relevant authorities
          </li>
          <li className="flex items-center">
            <svg
              className="h-5 w-5 text-red-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Implement corrective measures to prevent recurrence
          </li>
        </ul>
      </section>

      <section className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <svg
              className="h-8 w-8 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Continuous Improvement
            </h3>
            <p className="text-gray-700">
              The security landscape evolves. We stay updated with best
              practices, technology changes, and industry standards. We invest
              in training, tools, and processes to keep Naati Ninja secure and
              reliable.
            </p>
          </div>
        </div>
      </section>

      <div className="text-center text-gray-600 pt-4 border-t">
        <p>
          If you spot any suspicious activity or have security-related concerns,
          please email us at{" "}
          <a
            href="mailto:support@naatininja.com"
            className="text-blue-600 hover:text-blue-800"
          >
            support@naatininja.com
          </a>
        </p>
      </div>
    </div>
  ),
  disclaimer: (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Website Disclaimer</h2>
        <p className="text-gray-600 mt-2">Effective Date: 11 January, 2025</p>
      </div>

      <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-8">
        <h3 className="text-lg font-semibold text-indigo-900">Introduction</h3>
        <p className="text-gray-700 mt-2">
          The information provided by Naati Ninja P/L ('we', 'us', or 'our') on
          https://naatininja.com (the 'Site') is for general informational
          purposes only. All information on the Site is provided in good faith,
          however, we make no representation or warranty of any kind, express or
          implied, regarding the accuracy, adequacy, validity, reliability,
          availability, or completeness of any information on the Site. UNDER NO
          CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE
          OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON
          ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR
          RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.
        </p>
      </div>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          External Links Disclaimer
        </h3>
        <p className="text-gray-700">
          The Site may contain (or you may be sent through the Site) links to
          other websites or content belonging to or originating from third
          parties or links to websites and features in banners or other
          advertising. Such external links are not investigated, monitored, or
          checked for accuracy, adequacy, validity, reliability, availability,
          or completeness by us. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR
          ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY
          INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR
          ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE
          WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY
          TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR
          SERVICES.
        </p>
      </section>

      <section className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-8">
        <h3 className="text-lg font-semibold text-indigo-900">
          Professional Disclaimer
        </h3>
        <p className="text-gray-700 mt-2">
          The Site cannot and does not contain legal advice. The legal
          information is provided for general informational and educational
          purposes only and is not a substitute for professional advice.
          Accordingly, before taking any actions based upon such information, we
          encourage you to consult with the appropriate professionals. We do not
          provide any kind of legal advice. THE USE OR RELIANCE OF ANY
          INFORMATION CONTAINED ON THE SITE IS SOLELY AT YOUR OWN RISK.
        </p>
      </section>

      <section className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-8">
        <h3 className="text-lg font-semibold text-indigo-900">
          Testimonials Disclaimer
        </h3>
        <p className="text-gray-700 mt-2">
          The Site may contain testimonials by users of our products and/or
          services. These testimonials reflect the real-life experiences and
          opinions of such users. However, the experiences are personal to those
          particular users, and may not necessarily be representative of all
          users of our products and/or services. We do not claim, and you should
          not assume, that all users will have the same experiences. YOUR
          INDIVIDUAL RESULTS MAY VARY.
        </p>
        <p className="text-gray-700 mt-2">
          The testimonials on the Site are submitted in various forms such as
          text, audio and/or video, and are reviewed by us before being posted.
          They appear on the Site verbatim as given by the users, except for the
          correction of grammar or typing errors. Some testimonials may have
          been shortened for the sake of brevity where the full testimonial
          contained extraneous information not relevant to the general public.
        </p>
        <p className="text-gray-700 mt-2">
          The views and opinions contained in the testimonials belong solely to
          the individual user and do not reflect our views and opinions. We are
          not affiliated with users who provide testimonials, and users are not
          paid or otherwise compensated for their testimonials.
        </p>
      </section>

      <div className="text-center text-gray-600 pt-4 border-t">
        <p>
          If you have any questions regarding the disclaimers on this page,
          please feel free to contact us at{" "}
          <a
            href="mailto:support@naatininja.com"
            className="text-blue-600 hover:text-blue-800"
          >
            support@naatininja.com
          </a>
        </p>
      </div>
    </div>
  ),
};
