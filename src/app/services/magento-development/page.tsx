import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Magento Development Services | Enterprise E-commerce Platform",
  description:
    "Professional Magento development services for enterprise e-commerce solutions. Build scalable online stores with advanced features and customization.",
  keywords: [
    "Magento development",
    "Magento 2",
    "enterprise e-commerce",
    "custom Magento",
    "online store",
    "e-commerce platform",
    "Magento customization",
    "B2B e-commerce",
    "multi-store",
    "Magento themes",
  ],
  authors: [{ name: "wp development" }],
  openGraph: {
    title: "Professional Magento Development Services",
    description:
      "Build powerful enterprise e-commerce stores with Magento. Expert development services for scalable online retail solutions.",
    type: "website",
    images: [
      {
        url: "/logo/websiteprogrammingdevelopmentlogo.png",
        width: 1200,
        height: 630,
        alt: "Magento Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Magento Development Services",
    description:
      "Build powerful enterprise e-commerce stores with Magento. Expert development services for scalable online retail solutions.",
    images: ["/logo/websiteprogrammingdevelopmentlogo.png"],
  },
};

const MagentoDevelopmentPage = () => {
  const services = [
    {
      title: "Custom Magento Development",
      description:
        "Build tailored e-commerce solutions with custom Magento development for unique business requirements.",
      features: [
        "Custom modules",
        "Theme development",
        "API integration",
        "Performance optimization",
      ],
    },
    {
      title: "Magento 2 Migration",
      description:
        "Seamlessly migrate from Magento 1 to Magento 2 with data preservation and enhanced functionality.",
      features: [
        "Data migration",
        "Theme conversion",
        "Extension updates",
        "Performance improvement",
      ],
    },
    {
      title: "Multi-Store Solutions",
      description:
        "Develop multi-store Magento platforms for managing multiple brands and websites from one admin.",
      features: [
        "Multi-store setup",
        "Brand management",
        "Centralized admin",
        "Shared catalog",
      ],
    },
    {
      title: "B2B E-commerce",
      description:
        "Create powerful B2B platforms with advanced features for wholesale and enterprise customers.",
      features: [
        "Custom pricing",
        "Bulk ordering",
        "Quote management",
        "Account hierarchy",
      ],
    },
  ];

  const technologies = [
    "Magento 2.4",
    "PHP 8",
    "MySQL",
    "Elasticsearch",
    "Redis",
    "Varnish",
    "Adobe Commerce",
    "PWA Studio",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Magento Development Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto">
              Build enterprise-grade e-commerce solutions with Magento&apos;s
              powerful platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Project
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Magento Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Magento solutions for enterprise e-commerce success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, serviceIndex) => (
              <div
                key={`service-${serviceIndex}`}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={`feature-${serviceIndex}-${featureIndex}`}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, techIndex) => (
              <div
                key={`tech-${techIndex}`}
                className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <h3 className="text-lg font-medium text-gray-900">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build with Magento?
          </h2>
          <p className="text-xl mb-8 text-red-100 max-w-3xl mx-auto">
            Let&apos;s create a powerful e-commerce platform using
            Magento&apos;s enterprise features
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MagentoDevelopmentPage;
