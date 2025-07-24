import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "E-commerce Development Services | Custom Online Stores",
  description:
    "Professional e-commerce development services for custom online stores. Build scalable shopping platforms with payment integration and inventory management.",
  keywords: [
    "e-commerce development",
    "online store development",
    "shopping cart development",
    "payment integration",
    "custom e-commerce",
    "e-commerce platform",
    "online marketplace",
    "digital commerce",
    "retail technology",
    "shopping website",
  ],
  authors: [{ name: "wp development" }],
  openGraph: {
    title: "Professional E-commerce Development Services",
    description:
      "Build powerful online stores with custom e-commerce development. Expert services for scalable shopping platforms and digital commerce solutions.",
    type: "website",
    images: [
      {
        url: "/logo/websiteprogrammingdevelopmentlogo.png",
        width: 1200,
        height: 630,
        alt: "E-commerce Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional E-commerce Development Services",
    description:
      "Build powerful online stores with custom e-commerce development. Expert services for scalable shopping platforms and digital commerce solutions.",
    images: ["/logo/websiteprogrammingdevelopmentlogo.png"],
  },
};

const EcommerceDevelopmentPage = () => {
  const services = [
    {
      title: "Custom E-commerce Platforms",
      description:
        "Build fully customized online stores tailored to your business needs with unique features and branding.",
      features: [
        "Custom design",
        "Unique functionality",
        "Brand integration",
        "Scalable architecture",
      ],
    },
    {
      title: "Shopping Cart Development",
      description:
        "Develop advanced shopping cart systems with wishlist, comparison, and seamless checkout experiences.",
      features: [
        "Advanced cart features",
        "Guest checkout",
        "Save for later",
        "Cart abandonment recovery",
      ],
    },
    {
      title: "Payment Gateway Integration",
      description:
        "Integrate multiple payment gateways for secure transactions and global payment processing.",
      features: [
        "Multiple gateways",
        "Secure transactions",
        "Global payments",
        "PCI compliance",
      ],
    },
    {
      title: "Inventory Management",
      description:
        "Implement comprehensive inventory management systems with real-time stock tracking and alerts.",
      features: [
        "Real-time tracking",
        "Stock alerts",
        "Multi-warehouse",
        "Automated reordering",
      ],
    },
    {
      title: "Mobile Commerce Apps",
      description:
        "Create native and hybrid mobile apps for seamless shopping experiences on smartphones and tablets.",
      features: [
        "Native apps",
        "Cross-platform",
        "Push notifications",
        "Offline capabilities",
      ],
    },
    {
      title: "B2B E-commerce Solutions",
      description:
        "Develop specialized B2B platforms with bulk ordering, custom pricing, and enterprise features.",
      features: [
        "Bulk ordering",
        "Custom pricing",
        "Account management",
        "Integration APIs",
      ],
    },
  ];

  const benefits = [
    "Increased Sales",
    "Global Reach",
    "24/7 Availability",
    "Cost Efficiency",
    "Customer Analytics",
    "Inventory Automation",
    "Marketing Integration",
    "Scalable Growth",
  ];

  const technologies = [
    "React/Next.js",
    "Node.js",
    "MongoDB",
    "Stripe API",
    "PayPal SDK",
    "AWS/Azure",
    "Redis",
    "Elasticsearch",
    "Docker",
    "Kubernetes",
    "PWA",
    "GraphQL",
  ];

  const platforms = [
    {
      name: "Shopify",
      description: "Custom Shopify development and theme customization",
    },
    {
      name: "WooCommerce",
      description: "WordPress-based e-commerce solutions",
    },
    {
      name: "Magento",
      description: "Enterprise-level e-commerce platform development",
    },
    {
      name: "BigCommerce",
      description: "Cloud-based e-commerce platform customization",
    },
    {
      name: "Custom Solutions",
      description: "Fully custom e-commerce platforms built from scratch",
    },
    {
      name: "Headless Commerce",
      description: "API-first e-commerce architecture",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              E-commerce Development Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
              Build powerful online stores that drive sales and deliver
              exceptional shopping experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Store
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
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
              Our E-commerce Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive e-commerce solutions for businesses of all sizes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              E-commerce Platforms We Work With
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert development across all major e-commerce platforms and
              custom solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:bg-green-50 transition-colors"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {platform.name}
                </h3>
                <p className="text-gray-600">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Professional E-commerce Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with powerful e-commerce solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-white hover:bg-green-50 transition-colors"
              >
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-lg font-bold">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {benefit}
                </h3>
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern technologies for scalable and secure e-commerce solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <h3 className="text-lg font-medium text-gray-900">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Launch Your Online Store?
          </h2>
          <p className="text-xl mb-8 text-emerald-100 max-w-3xl mx-auto">
            Let&apos;s build a powerful e-commerce platform that drives sales
            and grows your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcommerceDevelopmentPage;
