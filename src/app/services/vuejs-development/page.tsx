import { Metadata } from "next";
import Link from "next/link";
import StructuredData from "../../../components/StructuredData";
import { structuredDataSchemas } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "Vue.js Development Services | Modern JavaScript Framework",
  description:
    "Professional Vue.js development services for progressive web applications. Expert Vue developers create scalable, performant apps with modern JavaScript frameworks.",
  keywords:
    "Vue.js development, Vue development, JavaScript framework, progressive web apps, frontend development, Vue.js developers, single page applications, Vue components",
  alternates: {
    canonical: "/services/vuejs-development",
  },
  openGraph: {
    title: "Vue.js Development Services | Modern JavaScript Framework",
    description:
      "Professional Vue.js development services for progressive web applications. Expert Vue developers create scalable, performant apps.",
    type: "website",
    url: "/services/vuejs-development",
    images: [
      {
        url: "/logo/websiteprogrammingdevelopmentlogo.png",
        width: 1200,
        height: 630,
        alt: "Vue.js Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vue.js Development Services",
    description: "Professional Vue.js development for modern web applications",
    images: ["/logo/websiteprogrammingdevelopmentlogo.png"],
  },
};

export default function VuejsDevelopmentPage() {
  const vueServiceStructuredData = [
    structuredDataSchemas.service(
      "Vue.js Development",
      "Professional Vue.js development services for progressive web applications. Expert Vue developers create scalable, performant apps with modern JavaScript frameworks."
    ),
  ];

  return (
    <>
      <StructuredData data={vueServiceStructuredData} />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-emerald-600/5"></div>
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
                💚 Vue.js Development
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-green-900 to-emerald-900 bg-clip-text text-transparent mb-6">
                Vue.js Development
                <span className="block text-green-600">Services</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Build progressive web applications with Vue.js - the
                approachable, versatile, and performant JavaScript framework for
                modern user interfaces.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Vue.js Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive Vue.js development services from concept to
                deployment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Custom Vue.js Apps
                </h3>
                <p className="text-gray-600">
                  Build custom web applications with Vue.js for optimal
                  performance and user experience.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  SPA Development
                </h3>
                <p className="text-gray-600">
                  Create fast, responsive single-page applications with Vue.js
                  and modern tooling.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Vue Migration
                </h3>
                <p className="text-gray-600">
                  Migrate existing applications to Vue.js or upgrade to the
                  latest Vue version.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Vue.js */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Vue.js?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Vue.js offers the perfect balance of simplicity and power for
                modern web development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📚</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Easy to Learn
                </h3>
                <p className="text-gray-600">
                  Gentle learning curve with excellent documentation and
                  community support.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  High Performance
                </h3>
                <p className="text-gray-600">
                  Optimized virtual DOM and reactive data binding for fast
                  applications.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🔧</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Flexible
                </h3>
                <p className="text-gray-600">
                  Progressive framework that can be adopted incrementally in
                  existing projects.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🌟</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Rich Ecosystem
                </h3>
                <p className="text-gray-600">
                  Extensive ecosystem with Vue Router, Vuex, and comprehensive
                  tooling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-emerald-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build with Vue.js?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Let's create your next web application with the power of Vue.js.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-colors duration-200"
              >
                Start Your Vue.js Project
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200"
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
