import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'WordPress Development Services | Custom Themes & Plugins | MVP Development',
  description: 'Professional WordPress development services including custom themes, plugins, e-commerce, and content management solutions.',
  keywords: 'WordPress development, custom themes, WordPress plugins, CMS, content management, WordPress customization',
};

export default function WordPressDevelopmentPage() {
  const features = [
    { icon: "📝", title: "Custom Themes", description: "Bespoke WordPress themes tailored to your brand" },
    { icon: "🔌", title: "Plugin Development", description: "Custom functionality through WordPress plugins" },
    { icon: "🛒", title: "E-commerce", description: "WooCommerce stores and online shops" },
    { icon: "📱", title: "Responsive Design", description: "Mobile-friendly WordPress websites" },
    { icon: "⚡", title: "Performance", description: "Speed optimization and caching solutions" },
    { icon: "🔒", title: "Security", description: "WordPress security hardening and maintenance" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="text-4xl">📝</span>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-sm font-medium">WordPress Development</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Custom WordPress Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Create powerful, custom WordPress websites with tailored themes, plugins, and functionality that perfectly match your business needs.
            </p>
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
              Start WordPress Project
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">WordPress Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-stone-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-white mb-6">Ready for Custom WordPress?</h2>
          <p className="text-xl text-blue-100 mb-8">Build powerful websites with custom WordPress development.</p>
          <Link href="/contact" className="bg-white hover:bg-blue-50 text-blue-600 px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
} 