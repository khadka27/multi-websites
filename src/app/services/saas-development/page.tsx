import { Metadata } from "next";
import Link from "next/link";
import StructuredData from "../../../components/StructuredData";
import { structuredDataSchemas } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "SaaS Development Services | Cloud-Based Software Solutions",
  description:
    "Professional SaaS development services for scalable cloud-based applications. Expert team builds multi-tenant SaaS platforms with modern technologies and security best practices.",
  keywords:
    "SaaS development, software as a service, cloud applications, multi-tenant architecture, subscription software, SaaS platform development",
  alternates: {
    canonical: "/services/saas-development",
  },
  openGraph: {
    title: "SaaS Development Services | Cloud-Based Software Solutions",
    description:
      "Professional SaaS development services for scalable cloud-based applications and multi-tenant platforms.",
    type: "website",
    url: "/services/saas-development",
    images: [
      {
        url: "/logo/websiteprogrammingdevelopmentlogo.png",
        width: 1200,
        height: 630,
        alt: "SaaS Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Development Services",
    description: "Professional SaaS development for cloud-based applications",
    images: ["/logo/websiteprogrammingdevelopmentlogo.png"],
  },
};

export default function SaaSDevelopmentPage() {
  const saasServiceStructuredData = [
    structuredDataSchemas.service(
      "SaaS Development",
      "Professional SaaS development services for scalable cloud-based applications. Expert team builds multi-tenant SaaS platforms with modern technologies and security best practices."
    ),
  ];

  return (
    <>
      <StructuredData data={saasServiceStructuredData} />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
              ☁️ SaaS Development Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              SaaS Development
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Build scalable Software-as-a-Service platforms that serve
              thousands of users. Expert development of multi-tenant,
              cloud-native applications with subscription models.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Start Your SaaS
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
              Our SaaS Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">🏗️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Multi-Tenant Architecture
                </h3>
                <p className="text-gray-600">
                  Scalable architecture supporting multiple customers with data
                  isolation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">💳</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Subscription Management
                </h3>
                <p className="text-gray-600">
                  Complete billing systems with payment processing and plan
                  management.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Analytics & Reporting
                </h3>
                <p className="text-gray-600">
                  Built-in analytics dashboard for usage tracking and business
                  insights.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">🔐</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Security & Compliance
                </h3>
                <p className="text-gray-600">
                  Enterprise-grade security with GDPR, SOC2, and industry
                  compliance.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  API Development
                </h3>
                <p className="text-gray-600">
                  RESTful APIs and webhooks for seamless third-party
                  integrations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Auto-Scaling
                </h3>
                <p className="text-gray-600">
                  Cloud infrastructure that scales automatically with your user
                  base.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SaaS Features */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              SaaS Platform Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  User Management
                </h3>
                <p className="text-gray-600">
                  Complete user authentication and role-based access
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Data Migration
                </h3>
                <p className="text-gray-600">
                  Seamless data import and export capabilities
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Mobile Ready
                </h3>
                <p className="text-gray-600">
                  Responsive design and mobile app support
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛠️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Admin Dashboard
                </h3>
                <p className="text-gray-600">
                  Comprehensive admin panel for platform management
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Build Your SaaS?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business idea into a profitable SaaS platform.
            </p>
            <Link
              href="/contact"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your SaaS Project
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
