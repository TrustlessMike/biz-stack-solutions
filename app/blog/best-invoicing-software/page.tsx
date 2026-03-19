import Link from "next/link";

export const metadata = {
  title: "Best Invoicing Software 2026 | For Freelancers & Small Business",
  description: "Compare the best invoicing software for freelancers and small businesses. FreshBooks, QuickBooks, Wave, Zoho Invoice, and more. Features, pricing, and expert recommendations.",
  keywords: "best invoicing software, invoice generator, FreshBooks, QuickBooks, Wave, freelance invoicing, small business invoicing 2026",
};

export default function BestInvoicingSoftware() {
  const topInvoicingTools = [
    {
      name: "FreshBooks",
      verdict: "Best for Freelancers & Service Business",
      pricing: "From $15/mo",
      pros: ["Intuitive interface", "Time tracking built-in", "Professional templates", "Client portal", "Payment processing"],
      cons: ["No free plan", "Pricier than competitors", "Limited inventory features"],
      rating: 4.6,
      affiliateLink: "https://freshbooks.com"
    },
    {
      name: "QuickBooks",
      verdict: "Best for Full Accounting + Invoicing",
      pricing: "From $25/mo",
      pros: ["Industry standard", "Complete accounting", "Tax preparation", "Payroll integration", "Extensive integrations"],
      cons: ["Expensive for just invoicing", "Steep learning curve", "Overkill for simple needs"],
      rating: 4.5,
      affiliateLink: "https://quickbooks.intuit.com"
    },
    {
      name: "Wave",
      verdict: "Best Free Invoicing Software",
      pricing: "Free (payment fees apply)",
      pros: ["Completely free", "Unlimited invoices", "Receipt scanning", "Payment processing", "Simple to use"],
      cons: ["Basic features only", "Limited support", "No advanced reporting"],
      rating: 4.4,
      affiliateLink: "https://waveapps.com"
    },
    {
      name: "Zoho Invoice",
      verdict: "Best Feature-Rich Free Option",
      pricing: "Free",
      pros: ["100% free", "Client portal", "Automated reminders", "Multi-currency", "Time tracking"],
      cons: ["Zoho ecosystem focus", "Less known brand", "Support quality varies"],
      rating: 4.5,
      affiliateLink: "https://zoho.com/invoice"
    },
    {
      name: "Xero",
      verdict: "Best for Growing Businesses",
      pricing: "From $11/mo",
      pros: ["Beautiful interface", "Strong bank reconciliation", "Scalable", "Great integrations", "Inventory tracking"],
      cons: ["Invoicing limits on lower plans", "Payroll costs extra", "Learning curve"],
      rating: 4.5,
      affiliateLink: "https://xero.com"
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">← Back to Home</Link>
          <h1 className="text-4xl font-bold mb-6">Best Invoicing Software 2026: For Freelancers & SMBs</h1>
          <p className="text-lg text-gray-700 mb-6">
            Professional invoicing software helps you create branded invoices, track payments, and get paid faster. 
            The right tool automates follow-ups, accepts online payments, and keeps your finances organized.
          </p>
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-8">
            <p className="text-sm text-gray-700">
              <strong>⚠️ Affiliate Disclosure:</strong> This article contains affiliate links. We may earn commissions when you purchase through our links at no extra cost to you. 
              Our recommendations are based on thorough research and testing.
            </p>
          </div>
        </div>

        {/* Quick Answer Box */}
        <section className="bg-blue-50 border border-blue-200 p-6 rounded-xl mb-12">
          <h2 className="text-2xl font-bold mb-4">Quick Answer: Our Top Picks</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <span className="text-sm font-semibold text-blue-600">BEST FOR FREELANCERS</span>
              <h3 className="font-bold text-lg">FreshBooks</h3>
              <p className="text-gray-600 text-sm">Built for service businesses. Time tracking, proposals, and client portal. Perfect for freelancers and agencies.</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <span className="text-sm font-semibold text-green-600">BEST FREE OPTION</span>
              <h3 className="font-bold text-lg">Wave</h3>
              <p className="text-gray-600 text-sm">Completely free invoicing and accounting. Ideal for solopreneurs and micro-businesses on a budget.</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <span className="text-sm font-semibold text-purple-600">BEST FEATURES</span>
              <h3 className="font-bold text-lg">Zoho Invoice</h3>
              <p className="text-gray-600 text-sm">100% free with advanced features. Client portal, automated reminders, multi-currency support.</p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Detailed Comparison: Top Invoicing Software</h2>
          <div className="overflow-x-auto">
            <table className="w-full border">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border p-4 text-left">Software</th>
                  <th className="border p-4 text-left">Best For</th>
                  <th className="border p-4 text-left">Starting Price</th>
                  <th className="border p-4 text-left">Free Plan</th>
                  <th className="border p-4 text-left">Rating</th>
                  <th className="border p-4 text-left">Try</th>
                </tr>
              </thead>
              <tbody>
                {topInvoicingTools.map((tool) => (
                  <tr key={tool.name}>
                    <td className="border p-4 font-semibold">{tool.name}</td>
                    <td className="border p-4">{tool.verdict.split('Best for ')[1]}</td>
                    <td className="border p-4">{tool.pricing}</td>
                    <td className="border p-4">{tool.name === 'Wave' || tool.name === 'Zoho Invoice' ? '✓ Yes' : '✗ No'}</td>
                    <td className="border p-4">⭐ {tool.rating}/5</td>
                    <td className="border p-4"><a href={tool.affiliateLink} className="text-blue-600 hover:underline" target="_blank" rel="nofollow sponsored">Visit</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed Reviews */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-8">In-Depth Reviews</h2>
          <div className="space-y-12">
            {topInvoicingTools.map((tool, index) => (
              <div key={tool.name} className="border rounded-xl p-6 bg-white">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">{tool.name}</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">{tool.verdict}</span>
                </div>
                <p className="text-gray-700 mb-4">
                  {index === 0 && "FreshBooks is designed for service businesses. Create professional invoices, track billable hours, send proposals, and accept payments. The client portal keeps everything organized."}
                  {index === 1 && "QuickBooks is the industry standard for small business accounting. Invoicing is just one feature among comprehensive financial management tools."}
                  {index === 2 && "Wave offers genuinely free invoicing and accounting. Revenue comes from payment processing fees, not software subscriptions. Perfect for budget-conscious freelancers."}
                  {index === 3 && "Zoho Invoice provides advanced features completely free. Client portal, automated payment reminders, multi-currency support, and time tracking without any cost."}
                  {index === 4 && "Xero combines beautiful invoicing with powerful accounting. Bank reconciliation, inventory tracking, and scalable features for growing businesses."}
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2">Pricing</h4>
                    <p className="text-gray-600">{tool.pricing}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Rating</h4>
                    <p className="text-gray-600">⭐ {tool.rating}/5</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-green-700">✓ Pros</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {tool.pros.map((pro) => (
                        <li key={pro}>{pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-red-700">✗ Cons</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {tool.cons.map((con) => (
                        <li key={con}>{con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <a 
                  href={tool.affiliateLink}
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                  target="_blank"
                  rel="nofollow sponsored"
                >
                  Try {tool.name} Free
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Buying Guide */}
        <section className="bg-gray-50 p-8 rounded-xl mb-12">
          <h2 className="text-2xl font-bold mb-6">How to Choose Invoicing Software</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">1. Match Your Business Type</h3>
              <p className="text-gray-600">
                Freelancers need time tracking and simple invoicing. Product businesses need inventory integration. 
                Agencies need retainer billing and project-based invoicing. Choose software built for your model.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">2. Payment Processing Needs</h3>
              <p className="text-gray-600">
                Clients pay faster with online payment options. Compare processing fees (typically 2.9% + $0.30). 
                Ensure your invoicing tool integrates with Stripe, PayPal, or direct bank payments.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">3. Automation Features</h3>
              <p className="text-gray-600">
                Automated payment reminders reduce awkward follow-ups. Recurring invoices save time for retainer clients. 
                Late fee calculations encourage on-time payment.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">4. Consider Growth Path</h3>
              <p className="text-gray-600">
                Start with simple invoicing, but choose software that scales. You may need expense tracking, 
                reporting, or full accounting as your business grows.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Is free invoicing software good enough?</h3>
              <p className="text-gray-600">
                For freelancers and solopreneurs, absolutely! Wave and Zoho Invoice offer robust free plans. 
                Upgrade to paid when you need advanced features like inventory, advanced reporting, or multi-entity support.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">How do I get clients to pay faster?</h3>
              <p className="text-gray-600">
                Offer online payment options (credit card, ACH). Send automated reminders at 3, 7, and 14 days overdue. 
                Consider early payment discounts (2% off if paid within 10 days).
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Can invoicing software do accounting too?</h3>
              <p className="text-gray-600">
                Some can! QuickBooks, Xero, and Wave combine invoicing with full accounting. 
                FreshBooks and Zoho Invoice focus on invoicing but integrate with accounting platforms.
              </p>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/pillar/invoicing" className="block p-6 border rounded-lg hover:shadow transition">
              <h3 className="font-bold mb-2">Invoicing Software: Complete Pillar Guide</h3>
              <p className="text-gray-600">Comprehensive overview of invoicing category.</p>
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
