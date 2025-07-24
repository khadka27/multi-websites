import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CMS Development Services | Content Management Systems",
  description:
    "Professional CMS development services for custom content management systems. Build scalable content platforms with user-friendly admin interfaces.",
  keywords: [
    "CMS development",
    "content management system",
    "custom CMS",
    "content platform",
    "website CMS",
    "admin interface",
    "content workflow",
    "headless CMS",
    "content publishing",
    "digital content",
  ],
  authors: [{ name: "wp development" }],
  openGraph: {
    title: "Professional CMS Development Services",
    description:
      "Build powerful content management systems with custom CMS development. Expert services for scalable content platforms and publishing workflows.",
    type: "website",
    images: [
      {
        url: "/logo/websiteprogrammingdevelopmentlogo.png",
        width: 1200,
        height: 630,
        alt: "CMS Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional CMS Development Services",
    description:
      "Build powerful content management systems with custom CMS development. Expert services for scalable content platforms and publishing workflows.",
    images: ["/logo/websiteprogrammingdevelopmentlogo.png"],
  },
};

const CMSDevelopmentPage = () => {
  const services = [
    {
      title: "Custom CMS Development",
      description:
        "Build tailored content management systems designed specifically for your business needs and workflows.",
      features: [
        "Custom architecture",
        "Unique features",
        "Brand integration",
        "Scalable design",
      ],
    },
    {
      title: "Headless CMS Solutions",
      description:
        "Develop API-first headless CMS platforms for multi-channel content delivery and modern architecture.",
      features: [
        "API-first design",
        "Multi-channel delivery",
        "Developer-friendly",
        "Frontend flexibility",
      ],
    },
    {
      title: "WordPress Development",
      description:
        "Create custom WordPress solutions with advanced themes, plugins, and enterprise-grade functionality.",
      features: [
        "Custom themes",
        "Plugin development",
        "Enterprise features",
        "Performance optimization",
      ],
    },
    {
      title: "Drupal Development",
      description:
        "Build complex web applications using Drupal's powerful content management and modular architecture.",
      features: [
        "Modular architecture",
        "Complex workflows",
        "Multilingual support",
        "Advanced permissions",
      ],
    },
    {
      title: "E-commerce CMS",
      description:
        "Develop content management systems integrated with e-commerce functionality for online stores.",
      features: [
        "Product management",
        "Inventory tracking",
        "Order processing",
        "Payment integration",
      ],
    },
    {
      title: "Enterprise CMS",
      description:
        "Create enterprise-level content management systems with advanced security and compliance features.",
      features: [
        "Enterprise security",
        "Compliance features",
        "Workflow automation",
        "Integration APIs",
      ],
    },
  ];

  const benefits = [
    "Easy Content Management",
    "User-Friendly Interface",
    "SEO Optimization",
    "Multi-User Access",
    "Content Scheduling",
    "Media Management",
    "Version Control",
    "Workflow Automation",
  ];

  const technologies = [
    "React/Next.js",
    "Node.js",
    "WordPress",
    "Drupal",
    "Strapi",
    "Contentful",
    "MongoDB",
    "MySQL",
    "GraphQL",
    "REST APIs",
    "Docker",
    "AWS/Azure",
  ];

  const cmsTypes = [
    {
      name: "Traditional CMS",
      description:
        "Full-featured content management systems with integrated frontend and backend",
    },
    {
      name: "Headless CMS",
      description:
        "API-first content management for modern applications and omnichannel delivery",
    },
    {
      name: "Hybrid CMS",
      description:
        "Flexible systems combining traditional and headless capabilities",
    },
    {
      name: "Enterprise CMS",
      description:
        "Large-scale content management for complex organizational needs",
    },
    {
      name: "E-commerce CMS",
      description:
        "Content management integrated with online store functionality",
    },
    {
      name: "Multi-site CMS",
      description:
        "Centralized content management for multiple websites and brands",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              CMS Development Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Build powerful content management systems that empower your team
              to create and manage content effortlessly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your CMS
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
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
              Our CMS Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive content management solutions for every business need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CMS Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of CMS We Develop
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From traditional to headless CMS solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cmsTypes.map((type, typeIndex) => (
              <div
                key={`cms-type-${typeIndex}`}
                className="bg-gray-50 rounded-xl p-8 hover:bg-purple-50 transition-colors"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {type.name}
                </h3>
                <p className="text-gray-600">{type.description}</p>
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
              Benefits of Professional CMS Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empower your content strategy with powerful management tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, benefitIndex) => (
              <div
                key={`benefit-${benefitIndex}`}
                className="text-center p-6 rounded-lg bg-white hover:bg-purple-50 transition-colors"
              >
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-lg font-bold">
                    {benefitIndex + 1}
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
              Modern technologies for scalable and user-friendly content
              management
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your CMS?
          </h2>
          <p className="text-xl mb-8 text-indigo-100 max-w-3xl mx-auto">
            Let&apos;s create a powerful content management system that
            streamlines your workflow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CMSDevelopmentPage;
