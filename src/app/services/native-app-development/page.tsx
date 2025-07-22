import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Native App Development Services | iOS & Android | MVP Development',
  description: 'Professional native app development for iOS and Android platforms. Maximum performance and platform-specific features.',
  keywords: 'native app development, iOS, Android, Swift, Kotlin, mobile development, platform-specific',
};

export default function NativeAppDevelopmentPage() {
  const features = [
    { icon: "📲", title: "Platform Native", description: "Built specifically for iOS and Android" },
    { icon: "⚡", title: "Maximum Performance", description: "Optimal speed and responsiveness" },
    { icon: "🔧", title: "Platform Features", description: "Access to all native capabilities" },
    { icon: "🎯", title: "User Experience", description: "Platform-specific design patterns" },
    { icon: "🔒", title: "Security", description: "Enhanced security and data protection" },
    { icon: "📊", title: "Analytics", description: "Deep performance monitoring" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 pb-16 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="text-4xl">📲</span>
              <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-lg text-sm font-medium">Native App Development</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Pure Native Performance
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Build high-performance native applications for iOS and Android. Maximum platform optimization and access to all native features.
            </p>
            <Link href="/contact" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Native Project
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">Native Development Benefits</h2>
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
          <h2 className="text-4xl font-light text-white mb-6">Ready for Native Excellence?</h2>
          <p className="text-xl text-indigo-100 mb-8">Build apps that leverage the full power of mobile platforms.</p>
          <Link href="/contact" className="bg-white hover:bg-indigo-50 text-indigo-600 px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
} 