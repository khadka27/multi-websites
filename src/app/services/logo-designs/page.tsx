import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Logo Design Services | Professional Brand Identity | MVP Development',
  description: 'Professional logo design services for memorable brand identities. Custom logos that represent your business values and connect with your audience.',
  keywords: 'logo design, brand identity, graphic design, branding, corporate identity, visual identity',
};

export default function LogoDesignsPage() {
  const features = [
    { icon: "🏷️", title: "Custom Logos", description: "Unique designs tailored to your brand" },
    { icon: "🎯", title: "Brand Identity", description: "Complete visual identity systems" },
    { icon: "📐", title: "Vector Graphics", description: "Scalable, high-quality vector formats" },
    { icon: "🎨", title: "Multiple Concepts", description: "Various design options to choose from" },
    { icon: "🔄", title: "Unlimited Revisions", description: "Perfect your logo with free revisions" },
    { icon: "📁", title: "File Formats", description: "All formats for web and print use" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 pb-16 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="text-4xl">🏷️</span>
              <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-lg text-sm font-medium">Logo Design</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Memorable Logo Design
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Create a powerful brand identity with professional logo design. Stand out from the competition with logos that tell your story and connect with customers.
            </p>
            <Link href="/contact" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Logo Project
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">Logo Design Features</h2>
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

      <section className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-white mb-6">Ready for Your Brand Identity?</h2>
          <p className="text-xl text-orange-100 mb-8">Create a logo that represents your brand perfectly.</p>
          <Link href="/contact" className="bg-white hover:bg-orange-50 text-orange-600 px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
} 