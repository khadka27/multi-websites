import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Web Design Services | Creative Website Design | MVP Development',
  description: 'Professional web design services for stunning, user-friendly websites. Custom designs that engage users and drive conversions.',
  keywords: 'web design, website design, graphic design, visual design, user interface, creative design',
};

export default function WebDesigningPage() {
  const features = [
    { icon: "🎨", title: "Creative Design", description: "Unique, eye-catching website designs" },
    { icon: "📱", title: "Responsive Design", description: "Perfect on all devices and screen sizes" },
    { icon: "✨", title: "Modern Aesthetics", description: "Contemporary design trends and styles" },
    { icon: "🎯", title: "User-Focused", description: "Designs that enhance user experience" },
    { icon: "🚀", title: "Performance", description: "Fast-loading, optimized designs" },
    { icon: "🔄", title: "Iterative Process", description: "Collaborative design refinement" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 pb-16 bg-gradient-to-br from-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="text-4xl">🎨</span>
              <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-lg text-sm font-medium">Web Designing</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Beautiful Web Design
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Create stunning websites that captivate your audience and drive results. Professional web design services that combine creativity with functionality.
            </p>
            <Link href="/contact" className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Design Project
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">Design Services</h2>
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

      <section className="py-20 bg-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-white mb-6">Ready for Beautiful Design?</h2>
          <p className="text-xl text-pink-100 mb-8">Create websites that wow your visitors and drive conversions.</p>
          <Link href="/contact" className="bg-white hover:bg-pink-50 text-pink-600 px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
} 