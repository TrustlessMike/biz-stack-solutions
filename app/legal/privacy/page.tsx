import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Business Software Stack",
  description: "Privacy policy for Business Software Stack. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12">
          <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">← Back to Home</Link>
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-gray-600 mb-4">Last updated: March 2026</p>
        </div>

        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              Business Software Stack ("we," "our," or "us") operates the bizstack.affiliatesite.com website. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
            <p className="text-gray-700 mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Subscribe to our newsletter</li>
              <li>Contact us via forms or email</li>
              <li>Interact with our content</li>
            </ul>
            <p className="text-gray-700 mb-4">
              This information may include your name, email address, and any other information you choose to provide.
            </p>

            <h3 className="text-xl font-semibold mb-3">Usage Data</h3>
            <p className="text-gray-700 mb-4">
              We automatically collect certain information when you visit our website, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>IP address and browser type</li>
              <li>Pages visited and time spent</li>
              <li>Referring website addresses</li>
              <li>Device information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Provide and maintain our website</li>
              <li>Send informational and marketing communications (with your consent)</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Analyze website usage and improve our content</li>
              <li>Monitor and analyze trends and usage</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Cookies and Tracking</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. 
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              Our website may contain links to third-party websites, including affiliate links to software providers. 
              We are not responsible for the privacy practices of third-party sites. We encourage you to review their privacy policies.
            </p>
            <p className="text-gray-700 mb-4">
              We may use third-party services for analytics, email marketing, and advertising. These services have their own privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement reasonable security measures to protect your personal information. However, no method of 
              transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Your Rights</h2>
            <p className="text-gray-700 mb-4">Depending on your location, you may have the right to:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Delete your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
            <p className="text-gray-700 mb-4">
              Our website is not intended for children under 13 years of age. We do not knowingly collect personal 
              information from children under 13. If you believe we have collected information from a child under 13, please contact us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Changes to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
              new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-700">
              Email: privacy@bizstack.affiliatesite.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
