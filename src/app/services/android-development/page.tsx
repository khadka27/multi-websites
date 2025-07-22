import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Android App Development Services | Google Play Store Apps | MVP Development',
  description: 'Professional Android app development using Kotlin, Java, and modern Android frameworks for Google Play Store.',
  keywords: 'Android development, Kotlin, Java, Google Play, Android apps, mobile development',
};

export default function AndroidDevelopmentPage() {
  const features = [
    { icon: "🤖", title: "Native Android", description: "Kotlin and Java development" },
    { icon: "📱", title: "Material Design", description: "Google's design language implementation" },
    { icon: "🔧", title: "Jetpack Compose", description: "Modern UI toolkit for Android" },
    { icon: "🏪", title: "Google Play", description: "Play Store optimization and publishing" },
    { icon: "⚡", title: "Performance", description: "Optimized for all Android devices" },
    { icon: "🔔", title: "Notifications", description: "Firebase and push notifications" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 pb-16 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="text-4xl">🤖</span>
              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-lg text-sm font-medium">Android Development</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Powerful Android Applications
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Build exceptional Android apps with Kotlin and modern Android development tools. Reach billions of users on the Google Play Store.
            </p>
            <Link href="/contact" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Android Project
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">Android Development Features</h2>
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
          <h2 className="text-4xl font-light text-white mb-6">Ready for Google Play?</h2>
          <p className="text-xl text-green-100 mb-8">Build powerful Android apps with Kotlin and modern tools.</p>
          <Link href="/contact" className="bg-white hover:bg-green-50 text-green-600 px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
} 