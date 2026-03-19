import Link from "next/link";

export const metadata = {
  title: "Best CRM Software for Small Business in 2026 | Complete Comparison",
  description: "Compare the best CRM software for small businesses. HubSpot, Pipedrive, Zoho, and more. Features, pricing, pros/cons, and expert recommendations.",
  keywords: "best CRM for small business, small business CRM, HubSpot CRM, Pipedrive, Zoho CRM, CRM comparison 2026",
};

export default function BestCRMSmallBusiness() {
  const topCRMs = [
    {
      name: "HubSpot CRM",
      verdict: "Best Overall for Small Business",
      pricing: "Free plan; Starter $20/user/mo",
      pros: ["Completely free core CRM", "All-in-one marketing + sales", "Easy to use", "Excellent integrations", "Scalable as you grow"],
      cons: ["Advanced features expensive", "Limited customization on free plan", "Can feel overwhelming for very small teams"],
      rating: 4.8,
      affiliateLink: "https://hubspot.com"
    },
    {
      name: "Pipedrive",
      verdict: "Best for Sales-Focused Teams",
      pricing: "From $14.90/user/mo",
      pros: ["Visual sales pipeline", "Intuitive interface", "Strong mobile app", "Activity-based selling", "Good reporting"],
      cons: ["No free plan", "Limited marketing features", "Basic plan lacks automation"],
      rating: 4.7,
      affiliateLink: "https://pipedrive.com"
    },
    {
      name: "Zoho CRM",
      verdict: "Best Budget-Friendly Option",
      pricing: "Free for up to 3 users; Paid from $14/user/mo",
      pros: ["Generous free tier", "Rich feature set", "AI sales assistant", "Omnichannel support", "Good value"],
      cons: ["Steeper learning curve", "Interface feels dated", "Support quality varies"],
      rating: 4.5,
      affiliateLink: "https://zoho.com/crm"
    },
    {
      name: "Capsule CRM",
      verdict: "Best for Simplicity",
      pricing: "Free for 2 users; Paid from $18/user/mo",
      pros: ["Extremely simple", "Quick setup", "Good contact management", "Affordable", "Clean interface"],
      cons: ["Limited advanced features", "Basic reporting", "Not ideal for complex sales"],
      rating: 4.3,
      affiliateLink: "https://capsulecrm.com"
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">← Back to Home</Link>
          <h1 className="text-4xl font-bold mb-6">Best CRM Software for Small Business in 2026</h1>
          <p className="text-lg text-gray-700 mb-6">
            Choosing the right CRM can transform your small business's sales process. 
            We've tested and compared the top CRM platforms to help you find the perfect fit for your team size, budget, and sales workflow.
          </p>
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-8">
            <p className="text-sm text-gray-700">
              <strong>⚠️ Affiliate Disclosure:</strong> This article contains affiliate links. We may earn commissions when you purchase through our links at no extra cost to you. 
              Our recommendations are based on thorough research and testing, not commission potential.
            </p>
          </div>
        </div>

        {/* Quick Answer Box */}
        <section className="bg-blue-50 border border-blue-200 p-6 rounded-xl mb-12">
          <h2 className="text-2xl font-bold mb-4">Quick Answer: Our Top Picks</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <span className="text-sm font-semibold text-blue-600">BEST OVERALL</span>
              <h3 className="font-bold text-lg">HubSpot CRM</h3>
              <p className="text-gray-600 text-sm">Perfect for small businesses wanting free start + room to grow. All-in-one platform with marketing, sales, and service tools.</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <span className="text-sm font-semibold text-green-600">BEST FOR SALES TEAMS</span>
              <h3 className="font-bold text-lg">Pipedrive</h3>
              <p className="text-gray-600 text-sm">Sales-focused CRM with visual pipeline management. Ideal for teams focused on closing deals.</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <span className="text-sm font-semibold text-purple-600">BEST BUDGET OPTION</span>
              <h3 className="font-bold text-lg">Zoho CRM</h3>
              <p className="text-gray-600 text-sm">Free for up to 3 users with rich features. Best value for budget-conscious small businesses.</p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Detailed Comparison: Top Small Business CRMs</h2>
          <div className="overflow-x-auto">
            <table className="w-full border">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border p-4 text-left">CRM</th>
                  <th className="border p-4 text-left">Best For</th>
                  <th className="border p-4 text-left">Starting Price</th>
                  <th className="border p-4 text-left">Free Plan</th>
                  <th className="border p-4 text-left">Rating</th>
                  <th className="border p-4 text-left">Try</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-4 font-semibold">HubSpot CRM</td>
                  <td className="border p-4">All-in-one growth</td>
                  <td className="border p-4">$20/user/mo</td>
                  <td className="border p-4">✓ Yes</td>
                  <td className="border p-4">⭐ 4.8/5</td>
                  <td className="border p-4"><a href={topCRMs[0].affiliateLink} className="text-blue-600 hover:underline" target="_blank" rel="nofollow sponsored">Visit</a></td>
                </tr>
                <tr>
                  <td className="border p-4 font-semibold">Pipedrive</td>
                  <td className="border p-4">Sales pipeline</td>
                  <td className="border p-4">$14.90/user/mo</td>
                  <td className="border p-4">✗ No</td>
                  <td className="border p-4">⭐ 4.7/5</td>
                  <td className="border p-4"><a href={topCRMs[1].affiliateLink} className="text-blue-600 hover:underline" target="_blank" rel="nofollow sponsored">Visit</a></td>
                </tr>
                <tr>
                  <td className="border p-4 font-semibold">Zoho CRM</td>
                  <td className="border p-4">Budget-friendly</td>
                  <td className="border p-4">$14/user/mo</td>
                  <td className="border p-4">✓ Yes (3 users)</td>
                  <td className="border p-4">⭐ 4.5/5</td>
                  <td className="border p-4"><a href={topCRMs[2].affiliateLink} className="text-blue-600 hover:underline" target="_blank" rel="nofollow sponsored">Visit</a></td>
                </tr>
                <tr>
                  <td className="border p-4 font-semibold">Capsule CRM</td>
                  <td className="border p-4">Simplicity</td>
                  <td className="border p-4">$18/user/mo</td>
                  <td className="border p-4">✓ Yes (2 users)</td>
                  <td className="border p-4">⭐ 4.3/5</td>
                  <td className="border p-4"><a href={topCRMs[3].affiliateLink} className="text-blue-600 hover:underline" target="_blank" rel="nofollow sponsored">Visit</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed Reviews */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-8">In-Depth Reviews</h2>
          <div className="space-y-12">
            {topCRMs.map((crm, index) => (
              <div key={crm.name} className="border rounded-xl p-6 bg-white">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">{crm.name}</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">{crm.verdict}</span>
                </div>
                <p className="text-gray-700 mb-4">
                  {index === 0 && "HubSpot CRM offers the best combination of free features and scalability for small businesses. Start free, add marketing automation as you grow, and access enterprise features when ready."}
                  {index === 1 && "Pipedrive is built by salespeople for salespeople. The visual pipeline makes it easy to track deals, and activity-based selling keeps your team focused on what moves deals forward."}
                  {index === 2 && "Zoho CRM provides impressive features at budget-friendly pricing. The free plan supports up to 3 users, making it perfect for very small teams or startups."}
                  {index === 3 && "Capsule CRM prioritizes simplicity over complexity. If you need basic contact management without overwhelming features, this is your best bet."}
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2">Pricing</h4>
                    <p className="text-gray-600">{crm.pricing}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Rating</h4>
                    <p className="text-gray-600">⭐ {crm.rating}/5</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-green-700">✓ Pros</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {crm.pros.map((pro) => (
                        <li key={pro}>{pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-red-700">✗ Cons</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {crm.cons.map((con) => (
                        <li key={con}>{con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <a 
                  href={crm.affiliateLink}
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                  target="_blank"
                  rel="nofollow sponsored"
                >
                  Try {crm.name} Free
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Buying Guide */}
        <section className="bg-gray-50 p-8 rounded-xl mb-12">
          <h2 className="text-2xl font-bold mb-6">How to Choose a CRM for Your Small Business</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">1. Assess Your Team Size</h3>
              <p className="text-gray-600">
                Solo entrepreneurs can use free plans (HubSpot, Zoho). Teams of 5-10 need affordable per-user pricing. 
                Consider how many users need access and whether you'll grow.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">2. Define Your Sales Process</h3>
              <p className="text-gray-600">
                Simple contact tracking? Look at Capsule. Complex pipeline with multiple stages? Pipedrive excels. 
                Need marketing automation too? HubSpot's all-in-one approach wins.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">3. Consider Integration Needs</h3>
              <p className="text-gray-600">
                Your CRM should integrate with email, calendar, accounting software, and marketing tools. 
                Check compatibility before committing.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">4. Calculate Total Cost</h3>
              <p className="text-gray-600">
                Free plans have limits. Factor in per-user costs, add-ons, and potential upgrade expenses as you grow. 
                A $20/user/mo CRM for 5 users = $100/mo = $1,200/year.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Can I use a free CRM for my small business?</h3>
              <p className="text-gray-600">
                Yes! HubSpot CRM and Zoho CRM offer robust free plans. HubSpot's free tier includes unlimited users, 
                contact management, deal tracking, and email integration. Zoho's free plan supports up to 3 users.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">How long does it take to implement a CRM?</h3>
              <p className="text-gray-600">
                Simple CRMs like Capsule can be set up in hours. More comprehensive platforms like HubSpot may take 
                1-2 weeks for full implementation including data import, customization, and team training.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Do I need technical skills to use a CRM?</h3>
              <p className="text-gray-600">
                Modern CRMs are designed for non-technical users. HubSpot, Pipedrive, and Capsule have intuitive 
                interfaces requiring minimal technical knowledge. Advanced customization may need some technical comfort.
              </p>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/pillar/crm" className="block p-6 border rounded-lg hover:shadow transition">
              <h3 className="font-bold mb-2">CRM Software: Complete Pillar Guide</h3>
              <p className="text-gray-600">Comprehensive overview of CRM category and top solutions.</p>
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
