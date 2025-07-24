import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Drupal Development Services | Enterprise CMS Platform",
  description:
    "Professional Drupal development services for enterprise content management systems. Build scalable websites with advanced functionality and security.",
  keywords: [
    "Drupal development",
    "Drupal 10",
    "enterprise CMS",
    "content management",
    "custom Drupal",
    "web development",
    "Drupal themes",
    "Drupal modules",
    "headless Drupal",
    "multilingual sites",
  ],
  authors: [{ name: "wp development" }],
  openGraph: {
    title: "Professional Drupal Development Services",
    description:
      "Build powerful enterprise websites with Drupal. Expert development services for scalable content management solutions.",
    type: "website",
    images: [
      {
        url: "/logo/websiteprogrammingdevelopmentlogo.png",
        width: 1200,
        height: 630,
        alt: "Drupal Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Drupal Development Services",
    description:
      "Build powerful enterprise websites with Drupal. Expert development services for scalable content management solutions.",
    images: ["/logo/websiteprogrammingdevelopmentlogo.png"],
  },
};

const DrupalDevelopmentPage = () => {
  const services = [
    {
      title: "Custom Drupal Development",
      description:
        "Build tailored Drupal solutions with custom modules and themes for complex business requirements.",
      features: [
        "Custom modules",
        "Theme development",
        "API integration",
        "Complex workflows",
      ],
    },
    {
      title: "Drupal Migration",
      description:
        "Seamlessly migrate from older Drupal versions or other CMS platforms to modern Drupal.",
      features: [
        "Version upgrades",
        "Platform migration",
        "Data preservation",
        "Performance optimization",
      ],
    },
    {
      title: "Enterprise Solutions",
      description:
        "Develop large-scale enterprise websites with advanced security and content management features.",
      features: [
        "Enterprise security",
        "User permissions",
        "Workflow automation",
        "Multi-site management",
      ],
    },
    {
      title: "Headless Drupal",
      description:
        "Create decoupled Drupal solutions for modern frontend frameworks and mobile applications.",
      features: [
        "API-first approach",
        "Frontend flexibility",
        "Mobile apps",
        "Multi-channel delivery",
      ],
    },
  ];

  const technologies = [
    "Drupal 10",
    "PHP 8",
    "Symfony",
    "Twig",
    "MySQL",
    "Composer",
    "Drush",
    "Docker",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Drupal Development Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Build enterprise-grade websites with Drupal&apos;s flexible
              content management platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Project
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors"
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
              Our Drupal Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Drupal solutions for enterprise content management
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
                      <span className="w-2 h-2 bg-blue-700 rounded-full mr-3"></span>
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
      <section className="py-20 bg-gradient-to-r from-indigo-700 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build with Drupal?
          </h2>
          <p className="text-xl mb-8 text-indigo-100 max-w-3xl mx-auto">
            Let&apos;s create a powerful content management solution using
            Drupal&apos;s enterprise features
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-700 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DrupalDevelopmentPage;
