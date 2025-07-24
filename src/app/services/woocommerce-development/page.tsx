import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "WooCommerce Development Services | WordPress E-commerce",
  description:
    "Professional WooCommerce development services for WordPress e-commerce stores. Build scalable online shops with custom functionality and themes.",
  keywords: [
    "WooCommerce development",
    "WordPress e-commerce",
    "online store",
    "custom WooCommerce",
    "e-commerce plugins",
    "WooCommerce themes",
    "payment integration",
    "shop customization",
    "WordPress development",
    "e-commerce solutions",
  ],
  authors: [{ name: "wp development" }],
  openGraph: {
    title: "Professional WooCommerce Development Services",
    description:
      "Build powerful WordPress e-commerce stores with WooCommerce. Expert development services for scalable online shopping solutions.",
    type: "website",
    images: [
      {
        url: "/logo/websiteprogrammingdevelopmentlogo.png",
        width: 1200,
        height: 630,
        alt: "WooCommerce Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional WooCommerce Development Services",
    description:
      "Build powerful WordPress e-commerce stores with WooCommerce. Expert development services for scalable online shopping solutions.",
    images: ["/logo/websiteprogrammingdevelopmentlogo.png"],
  },
};

const WooCommerceDevelopmentPage = () => {
  const services = [
    {
      title: "Custom WooCommerce Development",
      description:
        "Build tailored e-commerce solutions with custom WooCommerce functionality and unique features.",
      features: [
        "Custom plugins",
        "Theme development",
        "Payment gateways",
        "Product customization",
      ],
    },
    {
      title: "WooCommerce Store Setup",
      description:
        "Complete store setup with product catalogs, payment processing, and shipping configuration.",
      features: [
        "Store configuration",
        "Product import",
        "Payment setup",
        "Shipping methods",
      ],
    },
    {
      title: "Performance Optimization",
      description:
        "Optimize WooCommerce stores for speed, scalability, and better user experience.",
      features: [
        "Speed optimization",
        "Database tuning",
        "Caching solutions",
        "Mobile optimization",
      ],
    },
    {
      title: "Third-party Integrations",
      description:
        "Integrate WooCommerce with external services, CRMs, and marketing automation tools.",
      features: [
        "API integrations",
        "CRM connections",
        "Marketing tools",
        "Analytics setup",
      ],
    },
  ];

  const technologies = [
    "WooCommerce",
    "WordPress",
    "PHP",
    "MySQL",
    "REST API",
    "jQuery",
    "PayPal",
    "Stripe",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              WooCommerce Development Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Build powerful e-commerce stores with WooCommerce and WordPress
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Store
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-700 transition-colors"
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
              Our WooCommerce Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive WooCommerce solutions for WordPress e-commerce
              success
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
                      <span className="w-2 h-2 bg-purple-700 rounded-full mr-3"></span>
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
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your WooCommerce Store?
          </h2>
          <p className="text-xl mb-8 text-pink-100 max-w-3xl mx-auto">
            Let&apos;s create a powerful e-commerce solution using WooCommerce
            and WordPress
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WooCommerceDevelopmentPage;
