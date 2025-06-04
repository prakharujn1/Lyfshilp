import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 py-12 px-6 lg:px-32">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-10 border border-blue-100">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-700 mb-4">Last updated: June 4, 2025</p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            1. Introduction
          </h2>
          <p className="text-gray-800">
            Welcome to <strong>Edumaniax</strong>, an initiative by{" "}
            <strong>Lyfshilp</strong>. This Privacy Policy explains how we
            collect, use, and safeguard your personal information when you use
            our platform.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            2. Information We Collect
          </h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Your name, email, and contact details when you register.</li>
            <li>Academic interests and learning activity data.</li>
            <li>Device and log information for analytics and support.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            3. How We Use Your Information
          </h2>
          <p className="text-gray-800">We use your data to:</p>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Personalize your learning experience.</li>
            <li>Send course updates and newsletters.</li>
            <li>Enhance platform performance and security.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            4. Data Sharing
          </h2>
          <p className="text-gray-800">
            We never sell your data. We may share it with trusted partners only
            for platform functionality, under strict data protection agreements.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            5. Your Rights
          </h2>
          <p className="text-gray-800">
            You can access, update, or delete your information anytime by
            contacting our support. We comply with global data protection
            regulations like GDPR.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            6. Contact Us
          </h2>
          <p className="text-gray-800">
            If you have any questions about this policy, reach out to us at{" "}
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

export default PrivacyPolicy;
