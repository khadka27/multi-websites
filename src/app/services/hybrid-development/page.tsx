import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Hybrid App Development Services | Cross-Platform Solutions | MVP Development",
  description:
    "Professional hybrid app development combining web and native technologies for cost-effective cross-platform mobile solutions.",
  keywords:
    "hybrid app development, cross-platform, mobile development, Cordova, Ionic, web technologies",
};

export default function HybridDevelopmentPage() {
  const features = [
    {
      icon: "🔄",
      title: "Cross-Platform",
      description: "One codebase for multiple platforms",
    },
    {
      icon: "💰",
      title: "Cost-Effective",
      description: "Reduced development time and costs",
    },
    {
      icon: "🌐",
      title: "Web Technologies",
      description: "HTML, CSS, JavaScript expertise",
    },
    {
      icon: "📱",
      title: "Native Features",
      description: "Access to device-specific capabilities",
    },
    {
      icon: "🚀",
      title: "Faster Development",
      description: "Quicker time-to-market solutions",
    },
    {
      icon: "🔧",
      title: "Easy Maintenance",
      description: "Single codebase for updates",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 pb-16 bg-gradient-to-br from-teal-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="text-4xl">🔄</span>
              <span className="bg-teal-100 text-teal-600 px-3 py-1 rounded-lg text-sm font-medium">
                Hybrid Development
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Best of Both Worlds
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Combine web technologies with native capabilities. Cost-effective
              hybrid apps that deliver native-like experiences across all
              platforms.
            </p>
            <Link
              href="/contact"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Hybrid Project
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">
            Hybrid Development Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-stone-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready for Hybrid Solutions?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Build cost-effective apps with hybrid development.
          </p>
          <Link
            href="/contact"
            className="bg-white hover:bg-teal-50 text-teal-600 px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
