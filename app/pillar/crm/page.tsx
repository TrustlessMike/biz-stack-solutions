import Link from "next/link";

export const metadata = {
  title: "Best CRM Software 2026 | Compare Top CRM Solutions",
  description: "Find the best CRM software for your business. Compare HubSpot, Pipedrive, Salesforce, and more. Features, pricing, and expert reviews.",
  keywords: "CRM software, customer relationship management, sales CRM, HubSpot, Pipedrive, best CRM 2026",
};

export default function CRMPillarPage() {
  const crmTools = [
    {
      name: "HubSpot CRM",
      description: "All-in-one CRM with marketing, sales, and service tools. Perfect for growing businesses.",
      pricing: "Free plan available; Paid plans from $20/user/mo",
      bestFor: "Small to mid-sized businesses wanting an all-in-one platform",
      features: ["Contact management", "Deal tracking", "Email integration", "Marketing automation", "Customer service tools"],
      affiliateLink: "https://hubspot.com",
      rating: 4.8
    },
    {
      name: "Pipedrive",
      description: "Sales-focused CRM with intuitive pipeline management and activity tracking.",
      pricing: "From $14.90/user/mo",
      bestFor: "Sales teams focused on pipeline management",
      features: ["Visual sales pipeline", "Activity reminders", "Email integration", "Reporting dashboards", "Mobile app"],
      affiliateLink: "https://pipedrive.com",
      rating: 4.7
    },
    {
      name: "Salesforce",
      description: "Enterprise-grade CRM with extensive customization and integration capabilities.",
      pricing: "From $25/user/mo",
      bestFor: "Large enterprises with complex sales processes",
      features: ["Advanced customization", "AI insights", "Extensive integrations", "Enterprise security", "Scalable architecture"],
      affiliateLink: "https://salesforce.com",
      rating: 4.6
    },
    {
      name: "Zoho CRM",
      description: "Affordable CRM with strong automation and multi-channel communication.",
      pricing: "From $14/user/mo",
      bestFor: "Budget-conscious businesses needing robust features",
      features: ["Multi-channel communication", "Workflow automation", "AI sales assistant", "Omnichannel support", "Analytics"],
      affiliateLink: "https://zoho.com/crm",
      rating: 4.5
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">← Back to Home</Link>
          <h1 className="text-4xl font-bold mb-6">Best CRM Software 2026</h1>
          <p className="text-xl text-gray-700 mb-6">
            Customer Relationship Management (CRM) software helps businesses manage interactions with current and potential customers. 
            The right CRM can streamline your sales process, improve customer retention, and drive revenue growth.
          </p>
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-8">
            <p className="text-sm text-gray-600">
              <strong>Disclosure:</strong> This page contains affiliate links. We may earn commissions when you purchase through our links. 
              This doesn't affect our recommendations or pricing.
            </p>
          </div>
        </div>

        {/* Quick Comparison Table */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Quick Comparison: Top CRM Software</h2>
          <div className="overflow-x-auto">
            <table className="w-full border">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border p-4 text-left">CRM</th>
                  <th className="border p-4 text-left">Best For</th>
                  <th className="border p-4 text-left">Starting Price</th>
                  <th className="border p-4 text-left">Free Plan</th>
                  <th className="border p-4 text-left">Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-4 font-semibold">HubSpot CRM</td>
                  <td className="border p-4">All-in-one growth</td>
                  <td className="border p-4">$20/user/mo</td>
                  <td className="border p-4">✓ Yes</td>
                  <td className="border p-4">⭐ 4.8/5</td>
                </tr>
                <tr>
                  <td className="border p-4 font-semibold">Pipedrive</td>
                  <td className="border p-4">Sales pipeline</td>
                  <td className="border p-4">$14.90/user/mo</td>
                  <td className="border p-4">✗ No</td>
                  <td className="border p-4">⭐ 4.7/5</td>
                </tr>
                <tr>
                  <td className="border p-4 font-semibold">Salesforce</td>
                  <td className="border p-4">Enterprise</td>
                  <td className="border p-4">$25/user/mo</td>
                  <td className="border p-4">✗ No</td>
                  <td className="border p-4">⭐ 4.6/5</td>
                </tr>
                <tr>
                  <td className="border p-4 font-semibold">Zoho CRM</td>
                  <td className="border p-4">Budget-friendly</td>
                  <td className="border p-4">$14/user/mo</td>
                  <td className="border p-4">✓ Yes</td>
                  <td className="border p-4">⭐ 4.5/5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed Reviews */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Detailed CRM Reviews</h2>
          <div className="space-y-12">
            {crmTools.map((crm) => (
              <div key={crm.name} className="border rounded-xl p-6 bg-white">
                <h3 className="text-2xl font-bold mb-4">{crm.name}</h3>
                <p className="text-gray-700 mb-4">{crm.description}</p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2">Pricing</h4>
                    <p className="text-gray-600">{crm.pricing}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Best For</h4>
                    <p className="text-gray-600">{crm.bestFor}</p>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Key Features</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {crm.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">Rating: {crm.rating}/5</span>
                  <a 
                    href={crm.affiliateLink}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                    target="_blank"
                    rel="nofollow sponsored"
                  >
                    Visit {crm.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Buying Guide */}
        <section className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">How to Choose the Right CRM</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-3">Consider Your Business Size</h3>
              <p className="text-gray-600 mb-4">
                Small businesses benefit from simple, affordable CRMs like HubSpot's free plan or Pipedrive. 
                Enterprises need robust platforms like Salesforce with extensive customization.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Identify Key Features</h3>
              <p className="text-gray-600 mb-4">
                Make a list of must-have features: contact management, pipeline tracking, email integration, 
                reporting, mobile access, or marketing automation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Evaluate Integration Needs</h3>
              <p className="text-gray-600 mb-4">
                Your CRM should integrate with your existing tools: email marketing, accounting software, 
                customer support, and productivity apps.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Calculate Total Cost</h3>
              <p className="text-gray-600 mb-4">
                Consider per-user pricing, implementation costs, training, and potential add-ons. 
                Free plans are great for testing before committing.
              </p>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/best-crm-small-business" className="block p-6 border rounded-lg hover:shadow transition">
              <h3 className="font-bold mb-2">Best CRM Software for Small Business in 2026</h3>
              <p className="text-gray-600">Compare CRM solutions designed specifically for small businesses.</p>
            </Link>
            <Link href="/blog/crm-vs-project-mgmt" className="block p-6 border rounded-lg hover:shadow transition">
              <h3 className="font-bold mb-2">CRM vs Project Management: What's the Difference?</h3>
              <p className="text-gray-600">Understand when you need CRM, PM software, or both.</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
