import { Metadata } from "next";
import Link from "next/link";
import StructuredData from "../../../components/StructuredData";
import { structuredDataSchemas } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "API Development Services | RESTful & GraphQL APIs",
  description:
    "Professional API development services for seamless integrations. Expert team builds RESTful APIs, GraphQL endpoints, and microservices with security and scalability best practices.",
  keywords:
    "API development, REST API, GraphQL, microservices, API integration, web services, backend development, API design",
  alternates: {
    canonical: "/services/api-development",
  },
  openGraph: {
    title: "API Development Services | RESTful & GraphQL APIs",
    description:
      "Professional API development services for seamless integrations and scalable backend solutions.",
    type: "website",
    url: "/services/api-development",
    images: [
      {
        url: "/logo/websiteprogrammingdevelopmentlogo.png",
        width: 1200,
        height: 630,
        alt: "API Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "API Development Services",
    description: "Professional API development for seamless integrations",
    images: ["/logo/websiteprogrammingdevelopmentlogo.png"],
  },
};

export default function APIDevelopmentPage() {
  const apiServiceStructuredData = [
    structuredDataSchemas.service(
      "API Development",
      "Professional API development services for seamless integrations. Expert team builds RESTful APIs, GraphQL endpoints, and microservices with security and scalability best practices."
    ),
  ];

  return (
    <>
      <StructuredData data={apiServiceStructuredData} />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium mb-6">
              🔗 API Development Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              API Development
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Connect systems seamlessly with robust, scalable APIs. We build
              RESTful APIs, GraphQL endpoints, and microservices that power
              modern applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Build Your API
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

        {/* Services Grid */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our API Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">🔄</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  REST API Development
                </h3>
                <p className="text-gray-600">
                  Build scalable RESTful APIs following industry best practices.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  GraphQL APIs
                </h3>
                <p className="text-gray-600">
                  Efficient GraphQL endpoints for flexible data querying.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">🏗️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Microservices
                </h3>
                <p className="text-gray-600">
                  Scalable microservices architecture for complex applications.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">🔐</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  API Security
                </h3>
                <p className="text-gray-600">
                  Implement OAuth, JWT, and other security protocols.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  API Documentation
                </h3>
                <p className="text-gray-600">
                  Comprehensive API documentation with interactive examples.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">🔗</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Third-Party Integration
                </h3>
                <p className="text-gray-600">
                  Seamless integration with external APIs and services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* API Types */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              API Types We Build
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Web APIs
                </h3>
                <p className="text-gray-600">
                  HTTP-based APIs for web applications
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Mobile APIs
                </h3>
                <p className="text-gray-600">
                  Optimized APIs for mobile applications
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Payment APIs
                </h3>
                <p className="text-gray-600">
                  Secure payment processing integrations
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Data APIs
                </h3>
                <p className="text-gray-600">
                  APIs for data access and analytics
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need Custom APIs?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's build robust APIs that power your applications and
              integrations.
            </p>
            <Link
              href="/contact"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start API Development
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
