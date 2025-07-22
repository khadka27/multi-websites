import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PHP Development Services | Custom Web Applications | MVP Development',
  description: 'Professional PHP development services for dynamic web applications, Laravel, CodeIgniter, and custom PHP solutions.',
  keywords: 'PHP development, Laravel, web applications, custom PHP, dynamic websites, server-side development',
};

export default function PHPDevelopmentPage() {
  const features = [
    { icon: "🐘", title: "Modern PHP", description: "PHP 8+ with latest features and performance" },
    { icon: "🏗️", title: "Laravel Framework", description: "Elegant, powerful Laravel applications" },
    { icon: "💾", title: "Database Integration", description: "MySQL, PostgreSQL optimization" },
    { icon: "🔐", title: "Secure Development", description: "Security best practices and validation" },
    { icon: "⚡", title: "Performance", description: "Optimized for speed and efficiency" },
    { icon: "🛠️", title: "Custom Solutions", description: "Tailored PHP applications" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 pb-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="text-4xl">🐘</span>
              <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-lg text-sm font-medium">PHP Development</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Dynamic Web Applications
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Create powerful, dynamic web applications with PHP. From simple websites to complex enterprise solutions using modern PHP frameworks.
            </p>
            <Link href="/contact" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
              Start PHP Project
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">PHP Development Features</h2>
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

      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-white mb-6">Ready to Build with PHP?</h2>
          <p className="text-xl text-indigo-100 mb-8">Create dynamic web applications with modern PHP development.</p>
          <Link href="/contact" className="bg-white hover:bg-indigo-50 text-indigo-600 px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
} 