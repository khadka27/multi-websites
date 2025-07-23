import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Company - wp development",
  description:
    "Learn about wp development - Your trusted partner for custom web development, SEO services, lead generation, and digital marketing solutions.",
  keywords:
    "wp development, digital marketing, web development, SEO, lead generation, MVP development",
  openGraph: {
    title: "Our Company - wp development",
    description:
      "Discover how wp development transforms businesses with cutting-edge digital solutions.",
    type: "website",
  },
};

export default function CompanyPage() {
  const services = [
    {
      title: "Web Development",
      description:
        "Lightning-fast, responsive websites built with modern technologies",
      icon: "🌐",
    },
    {
      title: "SEO Services",
      description: "Dominate search rankings with strategic optimization",
      icon: "📈",
    },
    {
      title: "Lead Generation",
      description: "Convert prospects into customers with targeted strategies",
      icon: "🎯",
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital solutions for measurable growth",
      icon: "📊",
    },
  ];

  const stats = [
    { number: "200+", label: "Happy Clients", icon: "👥" },
    { number: "98%", label: "Success Rate", icon: "⭐" },
    { number: "5★", label: "Average Rating", icon: "🏆" },
    { number: "10+", label: "Years Experience", icon: "💼" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <span className="text-gray-500 text-sm font-medium uppercase tracking-wide">
                Our Company
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">
              wp development
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Your trusted partner for custom web development, SEO services,
              lead generation, and comprehensive digital marketing solutions
              that drive measurable business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://www.fishtailinfosolutions.com"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Visit Official Website
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto font-light">
              Our track record speaks for itself with measurable results across
              hundreds of successful projects.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <p className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto font-light">
              Transform your business with cutting-edge digital solutions
              designed for measurable success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-stone-50 rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">{service.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto font-light">
              Ready to transform your digital presence? Contact our expert team
              today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="text-center">
                <h3 className="text-base font-medium text-gray-900 mb-3">
                  Phone
                </h3>
                <p className="text-gray-700">+977 9806673560</p>
                <p className="text-sm text-gray-500 mt-1">Sun–FRI 9AM–6PM</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="text-center">
                <h3 className="text-base font-medium text-gray-900 mb-3">
                  Email
                </h3>
                <p className="text-gray-700">info@fishtailinfosolutions.com</p>
                <p className="text-sm text-gray-500 mt-1">
                  We reply within 24 hours
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="text-center">
                <h3 className="text-base font-medium text-gray-900 mb-3">
                  Address
                </h3>
                <p className="text-gray-700">604 Carson Dr CAK-953</p>
                <p className="text-gray-700">Bear, DE 19701-1450</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-base text-gray-600 mb-8 font-light max-w-2xl mx-auto">
            Join our growing list of satisfied clients and experience the
            difference that strategic digital marketing can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/" // If you have a new official site, update here
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
            >
              Visit Official Site
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
