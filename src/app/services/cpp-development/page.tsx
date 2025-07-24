import { Metadata } from "next";
import Link from "next/link";
import StructuredData from "../../../components/StructuredData";
import { structuredDataSchemas } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "C++ Development Services | High-Performance Applications",
  description:
    "Professional C++ development services for high-performance applications, system programming, and embedded solutions. Expert C++ developers deliver optimized, scalable software solutions.",
  keywords:
    "C++ development, C++ programming, system programming, high-performance computing, embedded systems, game development, C++ applications",
  alternates: {
    canonical: "/services/cpp-development",
  },
  openGraph: {
    title: "C++ Development Services | High-Performance Applications",
    description:
      "Professional C++ development services for high-performance applications and system programming.",
    type: "website",
    url: "/services/cpp-development",
    images: [
      {
        url: "/logo/websiteprogrammingdevelopmentlogo.png",
        width: 1200,
        height: 630,
        alt: "C++ Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "C++ Development Services",
    description:
      "Professional C++ development for high-performance applications",
    images: ["/logo/websiteprogrammingdevelopmentlogo.png"],
  },
};

export default function CppDevelopmentPage() {
  const cppServiceStructuredData = [
    structuredDataSchemas.service(
      "C++ Development",
      "Professional C++ development services for high-performance applications, system programming, and embedded solutions. Expert C++ developers deliver optimized, scalable software solutions."
    ),
  ];

  return (
    <>
      <StructuredData data={cppServiceStructuredData} />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium mb-6">
              ⚡ C++ Development Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              C++ Development
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Build high-performance applications with C++. Expert development
              for systems programming, game engines, embedded solutions, and
              performance-critical applications.
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

        {/* Services Grid */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our C++ Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  High-Performance Apps
                </h3>
                <p className="text-gray-600">
                  Build lightning-fast applications optimized for speed and
                  efficiency.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">⚙️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  System Programming
                </h3>
                <p className="text-gray-600">
                  Low-level system programming for operating systems and
                  drivers.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">🎮</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Game Development
                </h3>
                <p className="text-gray-600">
                  High-performance game engines and graphics programming
                  solutions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">🔌</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Embedded Systems
                </h3>
                <p className="text-gray-600">
                  Embedded C++ development for IoT and hardware applications.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Scientific Computing
                </h3>
                <p className="text-gray-600">
                  Mathematical algorithms and computational solutions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">🔧</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Legacy Modernization
                </h3>
                <p className="text-gray-600">
                  Modernize existing C++ codebases with latest standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose C++ */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Why Choose C++?
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  High Performance
                </h3>
                <p className="text-gray-600">
                  Optimized memory management and execution speed
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  System Control
                </h3>
                <p className="text-gray-600">
                  Direct hardware access and low-level control
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏗️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Scalable
                </h3>
                <p className="text-gray-600">
                  Build from small utilities to large enterprise systems
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Cross-Platform
                </h3>
                <p className="text-gray-600">
                  Deploy across multiple operating systems
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Build with C++?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create high-performance solutions that meet your
              requirements.
            </p>
            <Link
              href="/contact"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
