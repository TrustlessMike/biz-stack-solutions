import Link from "next/link";

export const metadata = {
  title: "Building Your Complete Business Software Stack | 2026 Guide",
  description: "Learn how to build a complete business software stack. Choose and integrate CRM, project management, phone, invoicing, accounting, and productivity tools.",
  keywords: "business software stack, software stack for business, choose business tools, integrate business software, SaaS stack",
};

export default function BusinessSoftwareStack() {
  const stackCategories = [
    {
      category: "Customer Relationship Management",
      icon: "📊",
      purpose: "Manage leads, opportunities, and customer relationships",
      topTools: ["HubSpot", "Pipedrive", "Salesforce", "Zoho CRM"],
      whenToImplement: "When you have a sales process to track or need to manage customer interactions systematically",
      integrationPoints: "Email, marketing automation, customer support, accounting"
    },
    {
      category: "Project Management",
      icon: "📋",
      purpose: "Plan, execute, and track work and deliverables",
      topTools: ["Monday.com", "Asana", "ClickUp", "Trello"],
      whenToImplement: "When managing complex projects with multiple team members or need timeline visibility",
      integrationPoints: "Communication tools, time tracking, CRM (for client work), documentation"
    },
    {
      category: "Business Phone System",
      icon: "📞",
      purpose: "Professional communications with customers and team",
      topTools: ["RingCentral", "Grasshopper", "8x8", "Nextiva"],
      whenToImplement: "When you need professional business number or remote team communication",
      integrationPoints: "CRM, help desk, team messaging, scheduling"
    },
    {
      category: "Invoicing & Billing",
      icon: "📄",
      purpose: "Create invoices, track payments, get paid faster",
      topTools: ["FreshBooks", "QuickBooks", "Wave", "Zoho Invoice"],
      whenToImplement: "When you need to bill clients or track accounts receivable",
      integrationPoints: "Accounting, payment processors, CRM, time tracking"
    },
    {
      category: "Accounting & Bookkeeping",
      icon: "💰",
      purpose: "Manage complete financial records, reporting, taxes",
      topTools: ["QuickBooks", "Xero", "FreshBooks", "Wave"],
      whenToImplement: "When you have employees, inventory, complex expenses, or tax preparation needs",
      integrationPoints: "Invoicing, payroll, payment processors, banking, tax software"
    },
    {
      category: "Productivity & Automation",
      icon: "⚡",
      purpose: "Automate workflows, improve collaboration, reduce manual work",
      topTools: ["Zapier", "Notion", "Slack", "Microsoft 365", "Google Workspace"],
      whenToImplement: "When repetitive tasks consume time or team collaboration is fragmented",
      integrationPoints: "Every tool in your stack (automation hub)"
    }
  ];

  const implementationStages = [
    {
      stage: "Stage 1: Foundation",
      businessSize: "Solopreneur / 1-2 people",
      priority: "Essential tools only",
      stack: ["Invoicing (Wave or FreshBooks)", "Basic phone (Grasshopper)", "Google Workspace or Microsoft 365", "Simple task management (Trello/Notion)"],
      budget: "$50-150/mo",
      focus: "Get paid professionally, communicate clearly, stay organized"
    },
    {
      stage: "Stage 2: Growth",
      businessSize: "Small team / 3-10 people",
      priority: "Add sales and collaboration",
      stack: ["CRM (HubSpot or Pipedrive)", "Project management (Monday/Asana)", "Team communication (Slack)", "Full accounting (QuickBooks/Xero)", "Automation (Zapier)"],
      budget: "$200-500/mo",
      focus: "Scale sales process, improve team collaboration, automate repetitive work"
    },
    {
      stage: "Stage 3: Scale",
      businessSize: "Growing business / 10-50 people",
      priority: "Enterprise features and integration",
      stack: ["Advanced CRM (Salesforce)", "Enterprise PM (Monday/ClickUp)", "Full communications suite (RingCentral)", "Advanced accounting + payroll", "Knowledge management (Notion)", "Advanced automation (Make)"],
      budget: "$500-1,500/mo",
      focus: "Streamline operations, enable scalability, data-driven decisions"
    },
    {
      stage: "Stage 4: Enterprise",
      businessSize: "50+ people",
      priority: "Optimization and compliance",
      stack: ["Enterprise CRM + custom integrations", "Portfolio/program management", "Contact center", "ERP or advanced financials", "Enterprise collaboration", "Custom automation"],
      budget: "$1,500+/mo",
      focus: "Optimize efficiency, ensure compliance, enable enterprise-scale operations"
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">← Back to Home</Link>
          <h1 className="text-4xl font-bold mb-6">Building Your Complete Business Software Stack</h1>
          <p className="text-lg text-gray-700 mb-6">
            The right software stack transforms how your business operates. But choosing and integrating tools is overwhelming. 
            This guide helps you build a cohesive stack that grows with your business, avoids redundancy, and maximizes ROI.
          </p>
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-8">
            <p className="text-sm text-gray-700">
              <strong>⚠️ Affiliate Disclosure:</strong> This article contains affiliate links. We may earn commissions when you purchase through our links at no extra cost to you.
            </p>
          </div>
        </div>

        {/* Quick Framework */}
        <section className="bg-blue-50 border border-blue-200 p-6 rounded-xl mb-12">
          <h2 className="text-2xl font-bold mb-4">The Software Stack Framework</h2>
          <p className="text-gray-700 mb-4">
            Every business needs tools in six core categories. Start with essentials for your stage, then expand as you grow.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <span className="text-2xl mb-2 block">📊</span>
              <h3 className="font-bold">CRM</h3>
              <p className="text-gray-600 text-sm">Manage customer relationships</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <span className="text-2xl mb-2 block">📋</span>
              <h3 className="font-bold">Project Mgmt</h3>
              <p className="text-gray-600 text-sm">Plan and track work</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <span className="text-2xl mb-2 block">📞</span>
              <h3 className="font-bold">Business Phone</h3>
              <p className="text-gray-600 text-sm">Professional communications</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <span className="text-2xl mb-2 block">📄</span>
              <h3 className="font-bold">Invoicing</h3>
              <p className="text-gray-600 text-sm">Bill clients, get paid</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <span className="text-2xl mb-2 block">💰</span>
              <h3 className="font-bold">Accounting</h3>
              <p className="text-gray-600 text-sm">Manage finances</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <span className="text-2xl mb-2 block">⚡</span>
              <h3 className="font-bold">Productivity</h3>
              <p className="text-gray-600 text-sm">Automate and collaborate</p>
            </div>
          </div>
        </section>

        {/* Stack Categories Detail */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-8">Core Stack Categories</h2>
          <div className="space-y-8">
            {stackCategories.map((cat) => (
              <div key={cat.category} className="border rounded-xl p-6 bg-white">
                <div className="flex items-start mb-4">
                  <span className="text-3xl mr-4">{cat.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold">{cat.category}</h3>
                    <p className="text-gray-600">{cat.purpose}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Top Tools</h4>
                    <p className="text-gray-600">{cat.topTools.join(", ")}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">When to Implement</h4>
                    <p className="text-gray-600">{cat.whenToImplement}</p>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="font-semibold mb-2">Integration Points</h4>
                    <p className="text-gray-600">{cat.integrationPoints}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Implementation Stages */}
        <section className="bg-gray-50 p-8 rounded-xl mb-12">
          <h2 className="text-2xl font-bold mb-6">Implementation by Business Stage</h2>
          <div className="space-y-8">
            {implementationStages.map((stage, index) => (
              <div key={stage.stage} className="bg-white p-6 rounded-xl border">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{stage.stage}</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {stage.businessSize}
                  </span>
                </div>
                <div className="grid md:grid-cols-3 gap-6 mb-4">
                  <div>
                    <h4 className="font-semibold mb-2">Priority</h4>
                    <p className="text-gray-600">{stage.priority}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Budget</h4>
                    <p className="text-gray-600">{stage.budget}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Focus</h4>
                    <p className="text-gray-600">{stage.focus}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Recommended Stack</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {stage.stack.map((tool) => (
                      <li key={tool}>{tool}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Integration Best Practices */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Integration Best Practices</h2>
          <div className="space-y-6">
            <div className="border rounded-xl p-6 bg-white">
              <h3 className="font-bold mb-3">🔗 Start with Native Integrations</h3>
              <p className="text-gray-600">
                Most tools offer built-in integrations with popular platforms. Enable these first before 
                building custom automations. Native integrations are more reliable and easier to maintain.
              </p>
            </div>
            <div className="border rounded-xl p-6 bg-white">
              <h3 className="font-bold mb-3">🔄 Use Zapier/Make as Glue</h3>
              <p className="text-gray-600">
                Automation platforms connect tools without native integrations. Build workflows that 
                sync data, trigger actions, and eliminate manual handoffs between tools.
              </p>
            </div>
            <div className="border rounded-xl p-6 bg-white">
              <h3 className="font-bold mb-3">📊 Centralize Customer Data</h3>
              <p className="text-gray-600">
                Your CRM should be the source of truth for customer information. Sync contacts from 
                marketing, support, and billing tools into your CRM for complete customer view.
              </p>
            </div>
            <div className="border rounded-xl p-6 bg-white">
              <h3 className="font-bold mb-3">🔐 Manage Access & Permissions</h3>
              <p className="text-gray-600">
                Use single sign-on (SSO) where available. Centralize user provisioning. 
                Regularly audit access as team members join and leave.
              </p>
            </div>
            <div className="border rounded-xl p-6 bg-white">
              <h3 className="font-bold mb-3">📈 Monitor Usage & ROI</h3>
              <p className="text-gray-600">
                Track which tools your team actually uses. Eliminate redundant tools. 
                Calculate ROI per tool: time saved × hourly rate vs. monthly cost.
              </p>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="bg-red-50 border border-red-200 p-8 rounded-xl mb-12">
          <h2 className="text-2xl font-bold mb-6">Common Software Stack Mistakes</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="text-red-600 mr-3 text-xl">✕</span>
              <div>
                <h3 className="font-semibold">Tool Hoarding</h3>
                <p className="text-gray-600">Signing up for every tool without clear use cases. Start with needs, not features.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 mr-3 text-xl">✕</span>
              <div>
                <h3 className="font-semibold">No Integration Strategy</h3>
                <p className="text-gray-600">Tools that don't talk to each other create data silos and manual work. Plan integrations from the start.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 mr-3 text-xl">✕</span>
              <div>
                <h3 className="font-semibold">Premature Enterprise Tools</h3>
                <p className="text-gray-600">Implementing Salesforce when you're a 3-person team. Match tool complexity to business stage.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 mr-3 text-xl">✕</span>
              <div>
                <h3 className="font-semibold">Ignoring Adoption</h3>
                <p className="text-gray-600">Buying tools without team input or training. The best tool is useless if nobody uses it.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 mr-3 text-xl">✕</span>
              <div>
                <h3 className="font-semibold">No Regular Review</h3>
                <p className="text-gray-600">Stacks become stale. Review quarterly: what's working, what's redundant, what needs replacement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Line */}
        <section className="bg-blue-50 border border-blue-200 p-6 rounded-xl mb-12">
          <h2 className="text-2xl font-bold mb-4">The Bottom Line</h2>
          <p className="text-gray-700 mb-4">
            <strong>Start small.</strong> Implement essential tools for your business stage. A solopreneur needs invoicing and basic communication, not enterprise CRM.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Plan for integration.</strong> Choose tools that work together. Your stack should be cohesive, not a collection of isolated apps.
          </p>
          <p className="text-gray-700">
            <strong>Review and optimize.</strong> Your stack should evolve with your business. Quarterly reviews ensure you're getting ROI and not paying for shelfware. 
            The best stack is one that your team uses daily to do better work.
          </p>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/pillar/crm" className="block p-6 border rounded-lg hover:shadow transition">
              <h3 className="font-bold mb-2">CRM Software Guide</h3>
              <p className="text-gray-600 text-sm">Complete CRM category overview.</p>
            </Link>
            <Link href="/pillar/project-mgmt" className="block p-6 border rounded-lg hover:shadow transition">
              <h3 className="font-bold mb-2">Project Management Guide</h3>
              <p className="text-gray-600 text-sm">Complete PM category overview.</p>
            </Link>
            <Link href="/pillar/productivity" className="block p-6 border rounded-lg hover:shadow transition">
              <h3 className="font-bold mb-2">Productivity Tools Guide</h3>
              <p className="text-gray-600 text-sm">Complete productivity overview.</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
