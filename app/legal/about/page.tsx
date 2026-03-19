import Link from "next/link";

export const metadata = {
  title: "About Us | Business Software Stack",
  description: "About Business Software Stack. Learn about our mission to help businesses find the best software tools.",
};

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12">
          <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">← Back to Home</Link>
          <h1 className="text-4xl font-bold mb-6">About Business Software Stack</h1>
        </div>

        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              Business Software Stack helps growing businesses find, compare, and implement the best software tools for their needs. 
              We cut through the marketing noise to provide honest, research-backed recommendations.
            </p>
            <p className="text-gray-700 mb-4">
              Our mission is simple: <strong>Help businesses make informed software decisions</strong> so they can focus on growth, 
              not tool evaluation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">What We Cover</h2>
            <p className="text-gray-700 mb-4">
              We provide in-depth reviews, comparisons, and guides for six core business software categories:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="border rounded-lg p-4 bg-white">
                <h3 className="font-semibold mb-2">📊 CRM Software</h3>
                <p className="text-gray-600 text-sm">Customer relationship management for sales and marketing teams</p>
              </div>
              <div className="border rounded-lg p-4 bg-white">
                <h3 className="font-semibold mb-2">📋 Project Management</h3>
                <p className="text-gray-600 text-sm">Tools to plan, execute, and track work efficiently</p>
              </div>
              <div className="border rounded-lg p-4 bg-white">
                <h3 className="font-semibold mb-2">📞 Business Phone Systems</h3>
                <p className="text-gray-600 text-sm">Professional communications for remote and distributed teams</p>
              </div>
              <div className="border rounded-lg p-4 bg-white">
                <h3 className="font-semibold mb-2">📄 Invoicing Software</h3>
                <p className="text-gray-600 text-sm">Create invoices, track payments, and get paid faster</p>
              </div>
              <div className="border rounded-lg p-4 bg-white">
                <h3 className="font-semibold mb-2">💰 Accounting Software</h3>
                <p className="text-gray-600 text-sm">Bookkeeping, financial reporting, and tax preparation</p>
              </div>
              <div className="border rounded-lg p-4 bg-white">
                <h3 className="font-semibold mb-2">⚡ Productivity Tools</h3>
                <p className="text-gray-600 text-sm">Automation, collaboration, and workflow optimization</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">How We Research</h2>
            <p className="text-gray-700 mb-4">
              Our reviews and comparisons are based on thorough research and hands-on testing:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Hands-on product testing with free trials and demos</li>
              <li>Feature-by-feature comparisons across competitors</li>
              <li>Pricing analysis including hidden costs and scaling tiers</li>
              <li>User reviews from verified customers on multiple platforms</li>
              <li>Industry analyst reports and expert opinions</li>
              <li>Real-world use cases from businesses of various sizes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Editorial Standards</h2>
            <p className="text-gray-700 mb-4">
              We maintain strict editorial standards to ensure our content is:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li><strong>Accurate:</strong> Fact-checked and verified before publishing</li>
              <li><strong>Unbiased:</strong> Recommendations based on merit, not commissions</li>
              <li><strong>Transparent:</strong> Clear disclosure of affiliate relationships</li>
              <li><strong>Updated:</strong> Regular reviews to keep information current</li>
              <li><strong>Actionable:</strong> Practical advice you can implement immediately</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Who We Serve</h2>
            <p className="text-gray-700 mb-4">
              Our content is designed for:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Solopreneurs and freelancers choosing their first business tools</li>
              <li>Small business owners (1-10 employees) building their software stack</li>
              <li>Startup founders evaluating tools for scaling teams</li>
              <li>Operations managers optimizing existing software investments</li>
              <li>Business consultants advising clients on technology choices</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Revenue Model</h2>
            <p className="text-gray-700 mb-4">
              Business Software Stack is funded through affiliate commissions. When you purchase software through our links, 
              we earn a commission at no additional cost to you. This model allows us to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Provide all content free of charge</li>
              <li>Invest in thorough research and testing</li>
              <li>Remain independent from any single vendor</li>
              <li>Update content regularly without paywalls</li>
            </ul>
            <p className="text-gray-700 mb-4">
              See our <Link href="/legal/disclosure" className="text-blue-600 hover:underline">Affiliate Disclosure</Link> for complete details.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              Have questions, suggestions, or feedback? We'd love to hear from you:
            </p>
            <p className="text-gray-700 mb-2">
              <strong>General inquiries:</strong> hello@bizstack.affiliatesite.com
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Editorial submissions:</strong> editorial@bizstack.affiliatesite.com
            </p>
            <p className="text-gray-700">
              <strong>Affiliate partnerships:</strong> affiliates@bizstack.affiliatesite.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
