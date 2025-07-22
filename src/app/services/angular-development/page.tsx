import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Angular Development Services | Enterprise Web Applications | MVP Development',
  description: 'Professional Angular development services for scalable enterprise applications. TypeScript, component architecture, and modern Angular features.',
  keywords: 'Angular development, TypeScript, enterprise applications, component architecture, Angular framework',
};

export default function AngularDevelopmentPage() {
  const features = [
    { icon: "🅰️", title: "Latest Angular", description: "Angular 17+ with modern features" },
    { icon: "📘", title: "TypeScript", description: "Type-safe development experience" },
    { icon: "🏗️", title: "Architecture", description: "Scalable component-based design" },
    { icon: "⚡", title: "Performance", description: "Optimized for speed and efficiency" },
    { icon: "🔒", title: "Enterprise Ready", description: "Security and compliance focused" },
    { icon: "🧪", title: "Testing", description: "Comprehensive testing suite" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 pb-16 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="text-4xl">🅰️</span>
              <span className="bg-red-100 text-red-600 px-3 py-1 rounded-lg text-sm font-medium">Angular Development</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Enterprise Angular Applications
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Build robust, scalable web applications with Angular. Perfect for enterprise solutions that require reliability, maintainability, and performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Angular Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">Angular Features</h2>
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

      <section className="py-20 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-white mb-6">Ready to Build with Angular?</h2>
          <p className="text-xl text-red-100 mb-8">Create powerful enterprise applications with Angular framework.</p>
          <Link href="/contact" className="bg-white hover:bg-red-50 text-red-600 px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
} 