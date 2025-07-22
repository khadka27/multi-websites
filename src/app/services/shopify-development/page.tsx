import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Shopify Development Services | E-commerce Store Development | MVP Development',
  description: 'Professional Shopify development services for custom e-commerce stores, themes, apps, and online retail solutions.',
  keywords: 'Shopify development, e-commerce development, Shopify themes, Shopify apps, online store, retail solutions',
};

export default function ShopifyDevelopmentPage() {
  const features = [
    { icon: "🛒", title: "Custom Stores", description: "Tailored Shopify stores for your brand" },
    { icon: "🎨", title: "Theme Development", description: "Custom Shopify themes and designs" },
    { icon: "📱", title: "App Development", description: "Custom Shopify apps and integrations" },
    { icon: "💳", title: "Payment Integration", description: "Multiple payment gateway setup" },
    { icon: "📊", title: "Analytics Setup", description: "Tracking and conversion optimization" },
    { icon: "🚀", title: "Performance", description: "Speed optimization for better conversions" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 pb-16 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="text-4xl">🛒</span>
              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-lg text-sm font-medium">Shopify Development</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
              E-commerce Excellence
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Build successful online stores with Shopify. From custom themes to powerful apps, we create e-commerce solutions that drive sales.
            </p>
            <Link href="/contact" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Shopify Project
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">Shopify Services</h2>
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

      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-white mb-6">Ready to Sell Online?</h2>
          <p className="text-xl text-green-100 mb-8">Create a successful e-commerce store with Shopify.</p>
          <Link href="/contact" className="bg-white hover:bg-green-50 text-green-600 px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
} 