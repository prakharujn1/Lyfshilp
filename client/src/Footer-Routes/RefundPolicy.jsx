import React from "react";
import { motion } from "framer-motion";

const RefundPolicy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="p-6 md:p-12 max-w-4xl mx-auto text-gray-800"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-purple-600">
        💸 Refund Policy for EduManiax
      </h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-6"
      >
        At EduManiax, we are committed to ensuring satisfaction with our
        educational and recreational services. However, we understand that there
        may be circumstances requiring a refund. The following policy outlines
        the terms under which refunds will be processed.
      </motion.p>

      <Section title="1. General Refund Terms" delay={0.4}>
        <li>
          Refunds will be provided only for eligible subscription-based or
          one-time purchase services.
        </li>
        <li>
          Refund requests must be raised within 14 days of the original payment
          date.
        </li>
        <li>
          Services already availed or sessions already conducted are
          non-refundable.
        </li>
        <li>
          All refund requests must be sent to{" "}
          <a
            href="mailto:support@edumaniax.com"
            className="text-blue-600 hover:underline"
          >
            support@edumaniax.com
          </a>{" "}
          with relevant details (transaction ID, reason for refund, and
          registered user email).
        </li>
      </Section>

      <Section title="2. Refund Amount" delay={0.5}>
        <li>
          EduManiax will deduct 10% of the total paid amount as a non-refundable
          component representing Goods and Services Tax (GST) that has already
          been paid by us as a registered service provider.
        </li>
        <li>
          The remaining 90% of the paid amount will be refunded to your original
          payment method after verification of the claim.
        </li>
      </Section>

      <Section title="3. Processing Time" delay={0.6}>
        <li>
          Refunds will be processed within 7 to 10 business days from the date
          of approval.
        </li>
        <li>
          The actual refund time may vary depending on your bank or payment
          provider.
        </li>
      </Section>

      <Section title="4. Non-Refundable Situations" delay={0.7}>
        <li>
          If services or digital content have already been accessed or used.
        </li>
        <li>If the request is made after 14 days from the purchase.</li>
        <li>
          If any policy violation or misuse of platform services is detected.
        </li>
        <li>
          If payment was made under a non-refundable promotional or discounted
          offer.
        </li>
      </Section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <h2 className="text-2xl font-semibold text-purple-700 mb-2">
          5. Contact for Refunds
        </h2>
        <p className="mb-6">
          For refund-related queries or requests, please contact:
        </p>
        <ul className="list-disc ml-6 mb-6">
          <li>
            Email:{" "}
            <a
              href="mailto:support@edumaniax.com"
              className="text-blue-600 hover:underline"
            >
              support@edumaniax.com
            </a>
          </li>
          <li>Phone: [Insert phone number]</li>
          <li>
            Website:{" "}
            <a
              href="https://www.edumaniax.com"
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              www.edumaniax.com
            </a>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

const Section = ({ title, children, delay }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay }}
  >
    <h2 className="text-2xl font-semibold text-purple-700 mb-2">{title}</h2>
    <ul className="list-disc ml-6 mb-6 space-y-1">{children}</ul>
  </motion.div>
);

export default RefundPolicy;
