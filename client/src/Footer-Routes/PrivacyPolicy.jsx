import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-700">
        🛡️ Privacy Policy
      </h1>

      <p className="mb-6">
        At <strong>EduManiax</strong>, your privacy is our top priority. This
        Privacy Policy explains how we collect, use, disclose, and safeguard
        your personal data when you visit our website (
        <a href="https://www.edumaniax.com" className="text-blue-600 underline">
          www.edumaniax.com
        </a>
        ), use our mobile apps, engage with our learning and gaming modules, or
        interact with any of our services.
      </p>

      <p className="mb-6">
        By using our platform, you accept the practices described in this
        Privacy Policy. If you do not agree with our practices, please do not
        use our website or services.
      </p>

      {/* Section 1 */}
      <Section title="1. Information We Collect">
        <p className="mb-4">
          We collect data to provide better services, tailor learning
          experiences, improve gameplay, and maintain a safe online environment.
        </p>
        <p className="font-semibold mb-1">a. Personal Information:</p>
        <ul className="list-disc list-inside mb-4">
          {[
            "Full name",
            "Parent/guardian’s name (for minors)",
            "Age and date of birth",
            "Email address",
            "Phone number",
            "Country, city, and postal code",
            "IP address",
            "Profile photo (if submitted)",
            "Login credentials (encrypted)",
            "Billing and payment details (when applicable)",
          ].map((item, index) => (
            <li key={`pi-${index}`}>{item}</li>
          ))}
        </ul>
        <p className="font-semibold mb-1">
          b. Usage and Technical Information:
        </p>
        <ul className="list-disc list-inside">
          {[
            "Device information (model, OS, browser type)",
            "IP address and geolocation (approximate)",
            "Session timestamps and durations",
            "Activities accessed on the platform (courses, games, quizzes)",
            "Progress data and user scores",
            "Referral URLs and clickstream data",
            "Cookies and tracking pixels",
          ].map((item, index) => (
            <li key={`ti-${index}`}>{item}</li>
          ))}
        </ul>
      </Section>

      {/* Section 2 */}
      <Section title="2. How We Use Your Information">
        <ul className="list-disc list-inside">
          {[
            "Register and authenticate user accounts",
            "Deliver age-appropriate educational and gaming content",
            "Track progress and personalize learning paths",
            "Send alerts, updates, and newsletters (only if opted in)",
            "Process transactions and provide customer support",
            "Analyze usage trends and user behavior to improve performance",
            "Detect, prevent, and address fraud or violations of our terms",
            "Ensure compliance with legal and regulatory obligations",
          ].map((item, index) => (
            <li key={`use-${index}`}>{item}</li>
          ))}
        </ul>
      </Section>

      {/* Section 3 */}
      <Section title="3. Legal Basis for Processing (for users in the EU)">
        <ul className="list-disc list-inside">
          {[
            "Consent: You’ve given us permission to use your data.",
            "Contractual necessity: Data is necessary for providing services you’ve requested.",
            "Legal obligation: We are required to process your data under the law.",
            "Legitimate interest: To maintain our services, improve safety, and enhance user experience.",
          ].map((item, index) => (
            <li key={`legal-${index}`}>{item}</li>
          ))}
        </ul>
      </Section>

      {/* Section 4 */}
      <Section title="4. Sharing of Your Data">
        <p className="font-semibold mt-2">a. With Service Providers</p>
        <ul className="list-disc list-inside mb-4">
          {[
            "Hosting providers",
            "Email marketing services (like Mailchimp)",
            "Analytics platforms (Google Analytics, Hotjar)",
            "Payment processors (e.g., Razorpay, Stripe)",
          ].map((item, index) => (
            <li key={`share-a-${index}`}>{item}</li>
          ))}
        </ul>
        <p className="font-semibold">b. With Educational Partners</p>
        <p className="mb-4">
          Anonymized or performance-based data may be shared with educators or
          course providers to enhance curriculum delivery.
        </p>
        <p className="font-semibold">c. Legal and Regulatory Bodies</p>
        <ul className="list-disc list-inside mb-4">
          <li>In response to lawful requests by public authorities</li>
          <li>To comply with legal obligations or enforce our terms</li>
        </ul>
        <p className="font-semibold">d. Business Transfers</p>
        <p>
          If EduManiax undergoes a merger, acquisition, or asset sale, your data
          may be transferred. You will be notified beforehand.
        </p>
      </Section>

      {/* Section 5 */}
      <Section title="5. Data Storage and Security">
        <ul className="list-disc list-inside">
          {[
            "SSL encryption during transmission",
            "Regular security audits",
            "Role-based access control for internal staff",
            "Encrypted data storage",
            "Firewalls and intrusion detection systems",
          ].map((item, index) => (
            <li key={`security-${index}`}>{item}</li>
          ))}
        </ul>
        <p className="mt-4">
          However, no digital method is 100% secure. We strive to protect your
          data, but cannot guarantee absolute security.
        </p>
      </Section>

      {/* Section 6 */}
      <Section title="6. Cookies and Tracking Tools">
        <ul className="list-disc list-inside">
          {[
            "Keep you logged in",
            "Track usage for analytics",
            "Deliver personalized content",
            "Improve performance",
          ].map((item, index) => (
            <li key={`cookie-${index}`}>{item}</li>
          ))}
        </ul>
        <p className="mt-2">
          You can disable cookies in your browser settings, though this may
          affect certain site features.
        </p>
      </Section>

      {/* Section 7 */}
      <Section title="7. Children’s Privacy">
        <ul className="list-disc list-inside">
          {[
            "We only collect personal data from children under 13 with verified parental consent.",
            "Parents/guardians can review, delete, or restrict data collection at any time.",
            "We do not serve third-party ads or enable in-app purchases without parental control.",
          ].map((item, index) => (
            <li key={`child-${index}`}>{item}</li>
          ))}
        </ul>
      </Section>

      {/* Section 8 */}
      <Section title="8. Your Rights">
        <p>Depending on your jurisdiction, you may have the right to:</p>
        <ul className="list-disc list-inside">
          {[
            "Access personal data we hold about you",
            "Correct inaccurate information",
            "Delete your account or personal data",
            "Restrict or object to certain types of processing",
            "Withdraw consent at any time",
          ].map((item, index) => (
            <li key={`rights-${index}`}>{item}</li>
          ))}
        </ul>
        <p className="mt-2">
          To exercise any of these rights, please email us at{" "}
          <strong>[Insert official email]</strong>.
        </p>
      </Section>

      {/* Section 9 */}
      <Section title="9. Data Retention">
        <p>
          We retain your data as long as needed to fulfill purposes outlined in
          this policy or comply with legal obligations. Factors include:
        </p>
        <ul className="list-disc list-inside">
          <li>Account activity</li>
          <li>Legal/regulatory requirements</li>
          <li>Resolution of disputes and enforcement of agreements</li>
        </ul>
      </Section>

      {/* Section 10 */}
      <Section title="10. Third-Party Links">
        <p>
          Our website may contain links to third-party websites. We are not
          responsible for their content or privacy practices. Please review
          their policies before engaging.
        </p>
      </Section>

      {/* Section 11 */}
      <Section title="11. International Data Transfers">
        <p>
          If you are accessing EduManiax from outside India, your information
          may be transferred to servers in India or elsewhere. We ensure your
          data is protected according to applicable laws.
        </p>
      </Section>

      {/* Section 12 */}
      <Section title="12. Changes to This Privacy Policy">
        <p>
          We may update this policy periodically. We will notify users via email
          or website notice prior to significant changes.
        </p>
      </Section>
    </div>
  );
};

const Section = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-semibold mb-3 text-blue-600">{title}</h2>
    {children}
  </section>
);

export default PrivacyPolicy;
