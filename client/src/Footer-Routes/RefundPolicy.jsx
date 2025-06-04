import React from "react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-red-50 py-12 px-6 lg:px-32">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-10 border border-red-100">
        <h1 className="text-4xl font-bold text-red-700 mb-6">Refund Policy</h1>
        <p className="text-gray-700 mb-4">Last updated: June 4, 2025</p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-red-600 mb-2">
            1. Overview
          </h2>
          <p className="text-gray-800">
            At <strong>Edumaniax</strong> by <strong>Lyfshilp</strong>, we aim
            to deliver the best learning experience. However, if you are not
            satisfied with a purchase, this refund policy outlines your rights
            and the procedures for claiming a refund.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-red-600 mb-2">
            2. Eligibility for Refunds
          </h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Refund requests must be made within 7 days of purchase.</li>
            <li>
              You must not have completed more than 20% of the course/module.
            </li>
            <li>
              No refunds are provided for promotional or discounted items.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-red-600 mb-2">
            3. Non-refundable Cases
          </h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Courses accessed more than 20%.</li>
            <li>Refunds requested after 7 days from purchase date.</li>
            <li>Subscription plans after the trial period ends.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-red-600 mb-2">
            4. How to Request a Refund
          </h2>
          <p className="text-gray-800">
            Send an email to{" "}
            <a
              href="mailto:refunds@edumaniax.com"
              className="text-red-500 underline"
            >
              refunds@edumaniax.com
            </a>{" "}
            with your registered email, order ID, and a brief reason for the
            refund. Our team will process your request within 3–5 business days.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-red-600 mb-2">
            5. Refund Timeline
          </h2>
          <p className="text-gray-800">
            Approved refunds are processed back to your original payment method
            within 7–10 working days, depending on your bank or payment
            provider.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-red-600 mb-2">
            6. Contact Us
          </h2>
          <p className="text-gray-800">
            For any refund-related queries, contact our support at{" "}
            <a
              href="mailto:support@edumaniax.com"
              className="text-red-500 underline"
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

export default RefundPolicy;
