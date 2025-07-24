import { Metadata } from "next";
import Link from "next/link";
import StructuredData from "../../../components/StructuredData";
import { structuredDataSchemas } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "Cross-Platform Development Services | Write Once, Deploy Everywhere",
  description:
    "Professional cross-platform development services using React Native, Flutter, and Xamarin. Build apps that run seamlessly on iOS, Android, and web platforms with shared codebase.",
  keywords:
    "cross-platform development, React Native, Flutter, Xamarin, hybrid apps, multi-platform development, mobile app development",
  alternates: {
    canonical: "/services/cross-platform-development",
  },
  openGraph: {
    title:
      "Cross-Platform Development Services | Write Once, Deploy Everywhere",
    description:
      "Professional cross-platform development services for iOS, Android, and web platforms with shared codebase.",
    type: "website",
    url: "/services/cross-platform-development",
    images: [
      {
        url: "/logo/websiteprogrammingdevelopmentlogo.png",
        width: 1200,
        height: 630,
        alt: "Cross-Platform Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cross-Platform Development Services",
    description: "Professional cross-platform app development",
    images: ["/logo/websiteprogrammingdevelopmentlogo.png"],
  },
};

export default function CrossPlatformDevelopmentPage() {
  const crossPlatformServiceStructuredData = [
    structuredDataSchemas.service(
      "Cross-Platform Development",
      "Professional cross-platform development services using React Native, Flutter, and Xamarin. Build apps that run seamlessly on iOS, Android, and web platforms with shared codebase."
    ),
  ];

  return (
    <>
      <StructuredData data={crossPlatformServiceStructuredData} />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium mb-6">
              🔄 Cross-Platform Development
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cross-Platform Development
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Write once, deploy everywhere. Build high-quality applications
              that run seamlessly across iOS, Android, and web platforms with a
              single codebase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Start Your Project
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Technologies
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚛️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  React Native
                </h3>
                <p className="text-gray-600 mb-4">
                  Build native apps for iOS and Android using React and
                  JavaScript.
                </p>
                <ul className="text-sm text-gray-500 text-left">
                  <li>• Native performance</li>
                  <li>• Large ecosystem</li>
                  <li>• Facebook backed</li>
                  <li>• Hot reloading</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🦋</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Flutter
                </h3>
                <p className="text-gray-600 mb-4">
                  Google's UI toolkit for beautiful, natively compiled
                  applications.
                </p>
                <ul className="text-sm text-gray-500 text-left">
                  <li>• Single codebase</li>
                  <li>• Fast development</li>
                  <li>• Google backed</li>
                  <li>• Rich widgets</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Xamarin
                </h3>
                <p className="text-gray-600 mb-4">
                  Microsoft's platform for building cross-platform mobile apps
                  with C#.
                </p>
                <ul className="text-sm text-gray-500 text-left">
                  <li>• Native APIs access</li>
                  <li>• Enterprise ready</li>
                  <li>• Microsoft backed</li>
                  <li>• Shared business logic</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Why Cross-Platform?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Cost Effective
                </h3>
                <p className="text-gray-600">
                  Reduce development costs by up to 50%
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Faster Development
                </h3>
                <p className="text-gray-600">
                  Launch on multiple platforms simultaneously
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Easy Maintenance
                </h3>
                <p className="text-gray-600">
                  Single codebase for easier updates
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Wider Reach
                </h3>
                <p className="text-gray-600">
                  Reach users on all major platforms
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Perfect For
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Startups
                </h3>
                <p className="text-gray-600">
                  Launch your MVP quickly on multiple platforms with limited
                  budget.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Enterprise Apps
                </h3>
                <p className="text-gray-600">
                  Internal business applications that need to work across
                  devices.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  E-commerce
                </h3>
                <p className="text-gray-600">
                  Shopping apps that provide consistent experience across
                  platforms.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Social Apps
                </h3>
                <p className="text-gray-600">
                  Social networking apps that need broad platform coverage.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Content Apps
                </h3>
                <p className="text-gray-600">
                  News, media, and content consumption applications.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Productivity Tools
                </h3>
                <p className="text-gray-600">
                  Business and productivity applications for teams.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready for Cross-Platform?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Build once, deploy everywhere. Let's create your cross-platform
              solution.
            </p>
            <Link
              href="/contact"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Development
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
