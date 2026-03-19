import Link from "next/link";

export const metadata = {
  title: "Best Invoicing Software 2026 | Create & Send Professional Invoices",
  description: "Find the best invoicing software for your business. Compare FreshBooks, QuickBooks, Wave, Zoho Invoice, and more. Features, pricing, and expert reviews.",
  keywords: "invoicing software, invoice generator, FreshBooks, QuickBooks, Wave, create invoices, best invoicing tools 2026",
};

export default function InvoicingPillarPage() {
  const invoicingTools = [
    {
      name: "FreshBooks",
      description: "Cloud-based invoicing and accounting designed for freelancers and small businesses.",
      pricing: "From $15/mo",
      bestFor: "Freelancers and service-based businesses",
      features: ["Professional invoices", "Time tracking", "Expense tracking", "Client portal", "Payment processing"],
      affiliateLink: "https://freshbooks.com",
      rating: 4.6
    },
    {
      name: "QuickBooks",
      description: "Comprehensive accounting with robust invoicing, expense tracking, and tax preparation.",
      pricing: "From $25/mo",
      bestFor: "Small to medium businesses needing full accounting",
      features: ["Custom invoices", "Payment tracking", "Mileage tracking", "Tax preparation", "Payroll integration"],
      affiliateLink: "https://quickbooks.intuit.com",
      rating: 4.5
    },
    {
      name: "Wave",
      description: "Free invoicing and accounting software for small businesses and freelancers.",
      pricing: "Free (payment processing fees apply)",
      bestFor: "Budget-conscious freelancers and micro-businesses",
      features: ["Unlimited invoices", "Expense tracking", "Receipt scanning", "Payment processing", "Basic reports"],
      affiliateLink: "https://waveapps.com",
      rating: 4.4
    },
    {
      name: "Zoho Invoice",
      description: "Feature-rich invoicing with client portal, automated workflows, and multi-currency support.",
      pricing: "Free",
      bestFor: "Businesses wanting free professional invoicing",
      features: ["Custom templates", "Client portal", "Automated reminders", "Time tracking", "Multi-currency"],
      affiliateLink: "https://zoho.com/invoice",
      rating: 4.5
    },
    {
      name: "Xero",
      description: "Cloud accounting platform with beautiful invoicing and strong bank reconciliation.",
      pricing: "From $11/mo",
      bestFor: "Growing businesses needing scalable accounting",
      features: ["Branded invoices", "Bank reconciliation", "Bill payments", "Inventory tracking", "Payroll"],
      affiliateLink: "https://xero.com",
      rating: 4.5
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">← Back to Home</Link>
          <h1 className="text-4xl font-bold mb-6">Best Invoicing Software 2026</h1>
          <p className="text-xl text-gray-700 mb-6">
            Professional invoicing software helps you create, send, and track invoices efficiently. 
            The right tool ensures you get paid faster with automated reminders, online payments, and clear financial records.
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
          <h2 className="text-2xl font-bold mb-6">Quick Comparison: Top Invoicing Software</h2>
          <div className="overflow-x-auto">
            <table className="w-full border">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border p-4 text-left">Software</th>
                  <th className="border p-4 text-left">Best For</th>
                  <th className="border p-4 text-left">Starting Price</th>
                  <th className="border p-4 text-left">Free Plan</th>
                  <th className="border p-4 text-left">Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-4 font-semibold">FreshBooks</td>
                  <td className="border p-4">Freelancers</td>
                  <td className="border p-4">$15/mo</td>
                  <td className="border p-4">✗ No</td>
                  <td className="border p-4">⭐ 4.6/5</td>
                </tr>
                <tr>
                  <td className="border p-4 font-semibold">QuickBooks</td>
                  <td className="border p-4">Full accounting</td>
                  <td className="border p-4">$25/mo</td>
                  <td className="border p-4">✗ No</td>
                  <td className="border p-4">⭐ 4.5/5</td>
                </tr>
                <tr>
                  <td className="border p-4 font-semibold">Wave</td>
                  <td className="border p-4">Budget-friendly</td>
                  <td className="border p-4">Free</td>
                  <td className="border p-4">✓ Yes</td>
                  <td className="border p-4">⭐ 4.4/5</td>
                </tr>
                <tr>
                  <td className="border p-4 font-semibold">Zoho Invoice</td>
                  <td className="border p-4">Feature-rich free</td>
                  <td className="border p-4">Free</td>
                  <td className="border p-4">✓ Yes</td>
                  <td className="border p-4">⭐ 4.5/5</td>
                </tr>
                <tr>
                  <td className="border p-4 font-semibold">Xero</td>
                  <td className="border p-4">Scalable accounting</td>
                  <td className="border p-4">$11/mo</td>
                  <td className="border p-4">✗ No</td>
                  <td className="border p-4">⭐ 4.5/5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed Reviews */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Detailed Invoicing Software Reviews</h2>
          <div className="space-y-12">
            {invoicingTools.map((tool) => (
              <div key={tool.name} className="border rounded-xl p-6 bg-white">
                <h3 className="text-2xl font-bold mb-4">{tool.name}</h3>
                <p className="text-gray-700 mb-4">{tool.description}</p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2">Pricing</h4>
                    <p className="text-gray-600">{tool.pricing}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Best For</h4>
                    <p className="text-gray-600">{tool.bestFor}</p>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Key Features</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {tool.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">Rating: {tool.rating}/5</span>
                  <a 
                    href={tool.affiliateLink}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                    target="_blank"
                    rel="nofollow sponsored"
                  >
                    Visit {tool.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Buying Guide */}
        <section className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">How to Choose Invoicing Software</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-3">Assess Your Business Type</h3>
              <p className="text-gray-600 mb-4">
                Freelancers need simple invoicing with time tracking. Product businesses need inventory integration. 
                Service businesses may need retainer billing and project-based invoicing.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Payment Processing Needs</h3>
              <p className="text-gray-600 mb-4">
                Look for integrated payment processing (credit cards, ACH, PayPal). 
                Compare processing fees and ensure clients can pay online easily.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Automation Features</h3>
              <p className="text-gray-600 mb-4">
                Automated payment reminders, recurring invoices, and late fee calculations 
                save time and improve cash flow consistency.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Integration Requirements</h3>
              <p className="text-gray-600 mb-4">
                Your invoicing tool should integrate with your accounting software, 
                CRM, payment processors, and time tracking tools.
              </p>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/best-invoicing-software" className="block p-6 border rounded-lg hover:shadow transition">
              <h3 className="font-bold mb-2">Best Invoicing Software for Freelancers & SMBs</h3>
              <p className="text-gray-600">Streamline your billing with top invoicing platforms.</p>
            </Link>
            <Link href="/blog/invoicing-vs-accounting" className="block p-6 border rounded-lg hover:shadow transition">
              <h3 className="font-bold mb-2">Invoicing vs Accounting: What's the Difference?</h3>
              <p className="text-gray-600">Understand when you need invoicing, accounting, or both.</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
