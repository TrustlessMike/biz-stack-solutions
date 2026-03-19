import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Business Software Stack",
  description: "Terms of service for Business Software Stack. Read our terms and conditions for using our website.",
};

export default function TermsOfService() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12">
          <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">← Back to Home</Link>
          <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
          <p className="text-gray-600 mb-4">Last updated: March 2026</p>
        </div>

        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing or using the Business Software Stack website (bizstack.affiliatesite.com), you agree to be bound by these Terms of Service. 
              If you disagree with any part of these terms, you may not access the website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              The website and its original content, features, and functionality are owned by Business Software Stack and are protected by international 
              copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p className="text-gray-700 mb-4">
              You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, 
              store, or transmit any of the material on our website without our prior written consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
            <p className="text-gray-700 mb-4">You agree to:</p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Use the website for lawful purposes only</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
              <li>Not use the website to transmit harmful or malicious code</li>
              <li>Not impersonate any person or entity</li>
              <li>Not collect or harvest user information without consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Affiliate Disclosure</h2>
            <p className="text-gray-700 mb-4">
              This website contains affiliate links. We may earn commissions when you purchase through our links at no extra cost to you. 
              Our recommendations are based on research and testing, not commission potential. See our Affiliate Disclosure page for details.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Disclaimer of Warranties</h2>
            <p className="text-gray-700 mb-4">
              Your use of the website is at your sole risk. The website is provided "AS IS" and "AS AVAILABLE" without any warranties of any kind, 
              whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, 
              or non-infringement.
            </p>
            <p className="text-gray-700 mb-4">
              We do not warrant that the website will be uninterrupted, secure, or error-free. We do not endorse, guarantee, or assume responsibility 
              for any content, products, or services offered by third parties through the website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              In no event shall Business Software Stack, its owners, employees, or affiliates be liable for any indirect, punitive, incidental, 
              special, consequential, or exemplary damages, including without limitation damages for loss of profits, goodwill, use, data, 
              or other intangible losses, arising out of or relating to your use of the website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Indemnification</h2>
            <p className="text-gray-700 mb-4">
              You agree to defend, indemnify, and hold harmless Business Software Stack and its owners, employees, and affiliates from and against 
              any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out of or relating to your violation 
              of these Terms or your use of the website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Termination</h2>
            <p className="text-gray-700 mb-4">
              We may terminate or suspend your access to the website immediately, without prior notice or liability, for any reason whatsoever, 
              including without limitation if you breach these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where Business Software Stack operates, 
              without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice 
              prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about these Terms, please contact us at:
            </p>
            <p className="text-gray-700">
              Email: legal@bizstack.affiliatesite.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
