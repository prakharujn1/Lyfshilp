import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 py-12 px-6 lg:px-32">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-10 border border-gray-200">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Terms & Conditions
        </h1>
        <p className="text-gray-600 mb-4">Last updated: June 4, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-800">
            By accessing or using <strong>Edumaniax</strong> (a platform by{" "}
            <strong>Lyfshilp</strong>), you agree to be bound by these Terms and
            Conditions. If you do not agree, please do not use the platform.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            2. Use of the Platform
          </h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>You must be at least 13 years old to register on Edumaniax.</li>
            <li>
              You agree not to misuse, reverse-engineer, or hack the platform.
            </li>
            <li>
              Access is granted for personal and educational purposes only.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            3. Intellectual Property
          </h2>
          <p className="text-gray-800">
            All content on Edumaniax, including videos, illustrations, course
            material, and branding, is owned by Lyfshilp or its content
            partners. Unauthorized copying or distribution is strictly
            prohibited.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            4. Payments and Subscriptions
          </h2>
          <p className="text-gray-800">
            Certain services may require payment. By subscribing, you authorize
            recurring charges as per your plan. Refunds are governed by our{" "}
            <a href="/refund-policy" className="text-blue-500 underline">
              Refund Policy
            </a>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            5. Account Termination
          </h2>
          <p className="text-gray-800">
            We reserve the right to suspend or terminate your account if you
            violate these terms or engage in fraudulent or abusive behavior.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            6. Limitation of Liability
          </h2>
          <p className="text-gray-800">
            Edumaniax and Lyfshilp are not liable for any indirect, incidental,
            or consequential damages arising from your use of the platform.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            7. Changes to Terms
          </h2>
          <p className="text-gray-800">
            We may update these Terms at any time. Continued use of the platform
            constitutes acceptance of the revised Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            8. Contact Us
          </h2>
          <p className="text-gray-800">
            For questions or clarifications, reach out to us at{" "}
            <a
              href="mailto:support@edumaniax.com"
              className="text-blue-500 underline"
            >
              support@edumaniax.com
            </a>
            .
          </p>
        </section>

        <footer className="mt-12 text-sm text-gray-500">
          © 2025 Edumaniax by Lyfshilp. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default TermsAndConditions;
