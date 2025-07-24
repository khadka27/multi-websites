import { Metadata } from "next";
import Link from "next/link";
import StructuredData from "../../../components/StructuredData";
import { structuredDataSchemas } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "Custom Software Development Services | Tailored Solutions",
  description:
    "Professional custom software development services for businesses. Expert team builds scalable, secure software solutions tailored to your specific requirements and industry needs.",
  keywords:
    "custom software development, bespoke software, enterprise software, software solutions, custom applications, business software, software consulting",
  alternates: {
    canonical: "/services/custom-software-development",
  },
  openGraph: {
    title: "Custom Software Development Services | Tailored Solutions",
    description:
      "Professional custom software development services for businesses. Expert team builds scalable, secure software solutions.",
    type: "website",
    url: "/services/custom-software-development",
    images: [
      {
        url: "/logo/websiteprogrammingdevelopmentlogo.png",
        width: 1200,
        height: 630,
        alt: "Custom Software Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development Services",
    description: "Professional custom software development for businesses",
    images: ["/logo/websiteprogrammingdevelopmentlogo.png"],
  },
};

export default function CustomSoftwareDevelopmentPage() {
  const customSoftwareServiceStructuredData = [
    structuredDataSchemas.service(
      "Custom Software Development",
      "Professional custom software development services for businesses. Expert team builds scalable, secure software solutions tailored to your specific requirements and industry needs."
    ),
  ];

  return (
    <>
      <StructuredData data={customSoftwareServiceStructuredData} />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-600/5 to-zinc-600/5"></div>
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium mb-6">
                ⚙️ Custom Software Development
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-zinc-900 to-slate-900 bg-clip-text text-transparent mb-6">
                Custom Software
                <span className="block text-gray-600">Development</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Transform your business with tailored software solutions. We
                build custom applications that perfectly fit your unique
                requirements and drive operational efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Custom Development Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive software development services tailored to your
                business needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Enterprise Software
                </h3>
                <p className="text-gray-600">
                  Scalable enterprise solutions that streamline operations and
                  improve productivity.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Business Applications
                </h3>
                <p className="text-gray-600">
                  Custom business applications designed to solve your specific
                  operational challenges.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🔗</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  System Integration
                </h3>
                <p className="text-gray-600">
                  Seamlessly integrate existing systems with new custom software
                  solutions.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Data Management
                </h3>
                <p className="text-gray-600">
                  Custom data management solutions for efficient storage,
                  processing, and analysis.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Security Solutions
                </h3>
                <p className="text-gray-600">
                  Built-in security features and compliance standards for
                  enterprise-grade protection.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Performance Optimization
                </h3>
                <p className="text-gray-600">
                  Optimized software architecture for maximum performance and
                  scalability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Development Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven methodology that ensures successful delivery of custom
                software solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📋</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Requirements Analysis
                </h3>
                <p className="text-gray-600">
                  Thorough analysis of your business requirements and technical
                  specifications.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🎨</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Design & Architecture
                </h3>
                <p className="text-gray-600">
                  Custom software architecture and user interface design
                  tailored to your needs.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">⚙️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Development & Testing
                </h3>
                <p className="text-gray-600">
                  Agile development with continuous testing and quality
                  assurance processes.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Deployment & Support
                </h3>
                <p className="text-gray-600">
                  Seamless deployment with ongoing maintenance and technical
                  support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-800 to-zinc-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready for Custom Software?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your requirements and build the perfect software
              solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-gray-800 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Start Your Project
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-800 transition-colors duration-200"
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
