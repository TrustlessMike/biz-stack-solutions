import Link from 'next/link';
import { Briefcase, Target, Phone, FileText, Calculator, Zap } from 'lucide-react';

export const metadata = {
  title: 'Business Stack Solutions | Best Business Software Reviews 2026',
  description: 'Independent reviews of business software for CRM, project management, invoicing, accounting, and productivity tools.',
  keywords: 'CRM software, project management, invoicing, accounting, business tools',
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Business Stack Solutions",
  "url": "https://bizstacksolutions.com",
  "description": "Independent reviews and comparisons of business software",
  "author": {
    "@type": "Organization",
    "name": "Stack Labs LLC"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Stack Labs LLC",
    "url": "https://bizstacksolutions.com"
  }
};

const categories = [
  { name: 'CRM Software', href: '/pillar/crm', icon: Target, desc: 'Manage customer relationships and sales pipeline' },
  { name: 'Project Management', href: '/pillar/project-mgmt', icon: Briefcase, desc: 'Keep teams organized and on track' },
  { name: 'Business Phone', href: '/pillar/business-phone', icon: Phone, desc: 'Professional communication solutions' },
  { name: 'Invoicing', href: '/pillar/invoicing', icon: FileText, desc: 'Create, send, and track invoices' },
  { name: 'Accounting', href: '/pillar/accounting', icon: Calculator, desc: 'Bookkeeping, tax, financial reporting' },
  { name: 'Productivity', href: '/pillar/productivity', icon: Zap, desc: 'Automation and workflow tools' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero - Bold Purple + Pink SaaS gradient */}
      <section className="bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-700 text-white py-24 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="inline-block bg-white/20 backdrop-blur px-4 py-2 rounded-full text-white text-sm font-medium mb-6 border border-white/30">
            Build your perfect stack
          </div>
          <h1 className="text-6xl font-bold mb-6 tracking-tight">
            Business Software<br/>
            <span className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">Stack</span>
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl leading-relaxed">
            Independent reviews of CRM, project management, invoicing, accounting, and productivity tools. 
            Build your perfect business tech stack with confidence.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/blog/best-crm-small-business-2026" className="bg-white text-purple-700 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition shadow-xl">
              See Top Picks
            </Link>
            <Link href="/pillar" className="bg-white/10 backdrop-blur border border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition">
              Browse Categories
            </Link>
          </div>
          
          {/* Trust signals */}
          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/20 pt-8">
            <div>
              <div className="text-3xl font-bold">40+</div>
              <div className="text-sm text-purple-200">Tools reviewed</div>
            </div>
            <div>
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm text-purple-200">Unbiased analysis</div>
            </div>
            <div>
              <div className="text-3xl font-bold">2026</div>
              <div className="text-sm text-purple-200">Latest data</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link key={cat.name} href={cat.href} className="group p-6 border border-gray-200 rounded-xl hover:border-purple-300 hover:shadow-lg transition">
                <cat.icon className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600">{cat.name}</h3>
                <p className="text-gray-600 text-sm">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Latest Reviews</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog/best-crm-small-business-2026" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <span className="text-sm text-purple-600 font-medium">CRM</span>
              <h3 className="text-lg font-semibold mt-2 mb-3">Best CRM for Small Business 2026</h3>
              <p className="text-gray-600 text-sm">Top CRM platforms for growing businesses.</p>
            </Link>
            <Link href="/blog/hubspot-vs-pipedrive" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <span className="text-sm text-purple-600 font-medium">Comparison</span>
              <h3 className="text-lg font-semibold mt-2 mb-3">HubSpot vs Pipedrive: CRM Comparison</h3>
              <p className="text-gray-600 text-sm">Which CRM wins for small teams?</p>
            </Link>
            <Link href="/blog/monday-vs-asana" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <span className="text-sm text-purple-600 font-medium">Project Mgmt</span>
              <h3 className="text-lg font-semibold mt-2 mb-3">Monday.com vs Asana: PM Showdown</h3>
              <p className="text-gray-600 text-sm">Compare features, pricing, and usability.</p>
            </Link>
          </div>
          <div className="mt-8 text-center">
            <Link href="/blog" className="text-purple-600 font-semibold hover:underline">View all articles →</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-white mb-4">Business Stack</h4>
              <p className="text-sm">Independent business software reviews.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Categories</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/pillar/crm" className="hover:text-white">CRM</Link></li>
                <li><Link href="/pillar/project-mgmt" className="hover:text-white">Project Mgmt</Link></li>
                <li><Link href="/pillar/invoicing" className="hover:text-white">Invoicing</Link></li>
                <li><Link href="/pillar/accounting" className="hover:text-white">Accounting</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/legal/about" className="hover:text-white">About</Link></li>
                <li><Link href="/legal/disclosure" className="hover:text-white">Affiliate Disclosure</Link></li>
                <li><Link href="/legal/privacy" className="hover:text-white">Privacy</Link></li>
                <li><Link href="/legal/terms" className="hover:text-white">Terms</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <p className="text-sm">Stack Labs LLC</p>
              <p className="text-sm">malik@stack-labs.net</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-center">
            © 2026 Stack Labs LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
