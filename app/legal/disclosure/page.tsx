import Link from "next/link";

export const metadata = {
  title: "Affiliate Disclosure | Business Software Stack",
  description: "Affiliate disclosure for Business Software Stack. Learn about our affiliate relationships and how we earn commissions.",
};

export default function AffiliateDisclosure() {
  const affiliatePrograms = [
    { name: "HubSpot", category: "CRM, Marketing" },
    { name: "Pipedrive", category: "CRM" },
    { name: "Monday.com", category: "Project Management" },
    { name: "Asana", category: "Project Management" },
    { name: "RingCentral", category: "Business Phone" },
    { name: "Grasshopper", category: "Business Phone" },
    { name: "FreshBooks", category: "Invoicing, Accounting" },
    { name: "QuickBooks", category: "Accounting" },
    { name: "Xero", category: "Accounting" },
    { name: "Zapier", category: "Productivity, Automation" }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12">
          <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">← Back to Home</Link>
          <h1 className="text-4xl font-bold mb-6">Affiliate Disclosure</h1>
          <p className="text-gray-600 mb-4">Last updated: March 2026</p>
        </div>

        <div className="prose max-w-none">
          <section className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Affiliate Relationship</h2>
            <p className="text-gray-700 mb-4">
              Business Software Stack participates in various affiliate marketing programs. This means we may earn commissions 
              when you click on links to merchant websites and make qualifying purchases.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Important:</strong> These commissions come at <em>no additional cost to you</em>. The price you pay is the same 
              whether you use our affiliate link or go directly to the merchant.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">How We Earn Commissions</h2>
            <p className="text-gray-700 mb-4">
              When you click on an affiliate link on our website and complete a qualifying action (such as making a purchase or 
              signing up for a free trial), we may receive a commission from the merchant.
            </p>
            <p className="text-gray-700 mb-4">
              Commission structures vary by program:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Percentage of sale (e.g., 20-30% recurring commissions)</li>
              <li>Flat fee per sale (e.g., $50-200 per new customer)</li>
              <li>Cost-per-action (e.g., free trial signups)</li>
              <li>Revenue share on ongoing subscriptions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Affiliate Partners</h2>
            <p className="text-gray-700 mb-4">
              We participate in affiliate programs for the following software companies:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              {affiliatePrograms.map((program) => (
                <div key={program.name} className="border rounded-lg p-4 bg-white">
                  <h3 className="font-semibold">{program.name}</h3>
                  <p className="text-gray-600 text-sm">{program.category}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Editorial Independence</h2>
            <p className="text-gray-700 mb-4">
              <strong>Affiliate commissions do not influence our recommendations.</strong> Our reviews and comparisons are based on:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Hands-on testing and research</li>
              <li>Feature comparisons and capability analysis</li>
              <li>Pricing and value assessment</li>
              <li>User reviews and industry reputation</li>
              <li>Real-world use cases and business fit</li>
            </ul>
            <p className="text-gray-700 mb-4">
              We maintain editorial independence. We will not recommend a product solely because it offers higher commissions. 
              If a product doesn't meet our standards, we won't promote it regardless of commission potential.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">FTC Compliance</h2>
            <p className="text-gray-700 mb-4">
              This disclosure is made in compliance with the Federal Trade Commission (FTC) guidelines for affiliate marketing. 
              The FTC requires that we clearly disclose any material connection between us and the merchants we promote.
            </p>
            <p className="text-gray-700 mb-4">
              A "material connection" means a relationship that might affect the weight or credibility consumers give to our 
              recommendations. Our affiliate relationships are material connections that we disclose transparently.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">How to Identify Affiliate Links</h2>
            <p className="text-gray-700 mb-4">
              Affiliate links on our website may be identified by:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Buttons or links labeled "Visit [Product]" or "Try [Product] Free"</li>
              <li>Comparison tables with "Visit" or "Try" links</li>
              <li>Disclosure notices near affiliate links</li>
              <li>Our affiliate disclosure statement in page footers</li>
            </ul>
            <p className="text-gray-700 mb-4">
              All external links to merchant websites on our site are affiliate links unless otherwise noted.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Questions About Our Affiliate Practices</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about our affiliate relationships or disclosure practices, please contact us at:
            </p>
            <p className="text-gray-700">
              Email: affiliates@bizstack.affiliatesite.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
