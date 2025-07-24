import { Metadata } from "next";
import Link from "next/link";
import StructuredData from "../../../components/StructuredData";
import { structuredDataSchemas } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "MVP Development Services | Rapid Prototype Development",
  description:
    "Professional MVP development services to validate your business ideas quickly. Expert team builds scalable minimum viable products with modern technologies for startup success.",
  keywords:
    "MVP development, minimum viable product, startup development, prototype development, rapid development, product validation, lean startup, agile development",
  alternates: {
    canonical: "/services/mvp-development",
  },
  openGraph: {
    title: "MVP Development Services | Rapid Prototype Development",
    description:
      "Professional MVP development services to validate your business ideas quickly. Expert team builds scalable minimum viable products.",
    type: "website",
    url: "/services/mvp-development",
    images: [
      {
        url: "/logo/websiteprogrammingdevelopmentlogo.png",
        width: 1200,
        height: 630,
        alt: "MVP Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MVP Development Services",
    description: "Professional MVP development for startup success",
    images: ["/logo/websiteprogrammingdevelopmentlogo.png"],
  },
};

export default function MVPDevelopmentPage() {
  const mvpServiceStructuredData = [
    structuredDataSchemas.service(
      "MVP Development",
      "Professional MVP development services to validate your business ideas quickly. Expert team builds scalable minimum viable products with modern technologies for startup success."
    ),
  ];

  return (
    <>
      <StructuredData data={mvpServiceStructuredData} />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                🚀 MVP Development Services
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
                MVP Development
                <span className="block text-blue-600">Services</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Transform your business ideas into reality with our expert MVP
                development services. We build scalable minimum viable products
                that validate your concept and accelerate time-to-market.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our MVP Development Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a proven methodology to deliver your MVP quickly while
                ensuring scalability for future growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Idea Validation
                </h3>
                <p className="text-gray-600">
                  Validate your business concept through market research and
                  user feedback analysis.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Feature Prioritization
                </h3>
                <p className="text-gray-600">
                  Define core features that deliver maximum value with minimal
                  development time.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Rapid Development
                </h3>
                <p className="text-gray-600">
                  Build your MVP using agile methodologies and modern
                  development frameworks.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Launch & Iterate
                </h3>
                <p className="text-gray-600">
                  Deploy your MVP and gather user feedback for continuous
                  improvement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our MVP Development?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine technical expertise with business acumen to deliver
                MVPs that succeed in the market.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Fast Time-to-Market
                </h3>
                <p className="text-gray-600">
                  Launch your product in weeks, not months, with our streamlined
                  development process.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">💰</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Cost-Effective
                </h3>
                <p className="text-gray-600">
                  Minimize development costs while maximizing learning and
                  validation opportunities.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Scalable Architecture
                </h3>
                <p className="text-gray-600">
                  Build with scalability in mind to support growth as your
                  product evolves.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build Your MVP?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's validate your business idea and bring your product to market
              quickly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-200"
              >
                Start Your MVP Project
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
