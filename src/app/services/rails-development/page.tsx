import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ruby on Rails Development Services | Full-Stack Web Framework",
  description:
    "Professional Ruby on Rails development services for rapid web application development. Build scalable web solutions with Rails' convention over configuration approach.",
  keywords: [
    "Ruby on Rails development",
    "Rails framework",
    "Ruby web development",
    "full-stack development",
    "rapid prototyping",
    "Rails consulting",
    "web application development",
    "MVC architecture",
    "Rails API",
    "ActiveRecord ORM",
  ],
  authors: [{ name: "wp development" }],
  openGraph: {
    title: "Professional Ruby on Rails Development Services",
    description:
      "Build rapid web applications with Ruby on Rails. Expert development services for scalable, maintainable web solutions using Rails framework.",
    type: "website",
    images: [
      {
        url: "/logo/websiteprogrammingdevelopmentlogo.png",
        width: 1200,
        height: 630,
        alt: "Ruby on Rails Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Ruby on Rails Development Services",
    description:
      "Build rapid web applications with Ruby on Rails. Expert development services for scalable, maintainable web solutions using Rails framework.",
    images: ["/logo/websiteprogrammingdevelopmentlogo.png"],
  },
};

const RailsDevelopmentPage = () => {
  const services = [
    {
      title: "Full-Stack Web Applications",
      description:
        "Build complete web applications using Rails' MVC architecture with integrated frontend and backend solutions.",
      features: [
        "MVC pattern",
        "ActiveRecord ORM",
        "Action View templates",
        "Asset pipeline",
      ],
    },
    {
      title: "API-Only Applications",
      description:
        "Develop robust APIs using Rails API mode for mobile applications and microservices architecture.",
      features: [
        "JSON APIs",
        "Token authentication",
        "API versioning",
        "Rate limiting",
      ],
    },
    {
      title: "E-commerce Platforms",
      description:
        "Create powerful e-commerce solutions using Rails with payment processing and inventory management.",
      features: [
        "Shopping cart",
        "Payment integration",
        "Order management",
        "Product catalogs",
      ],
    },
    {
      title: "Content Management Systems",
      description:
        "Build custom CMS solutions using Rails with user-friendly admin interfaces and content workflows.",
      features: [
        "Admin interfaces",
        "Content workflows",
        "User management",
        "SEO optimization",
      ],
    },
    {
      title: "Real-time Features",
      description:
        "Implement real-time functionality using Action Cable for WebSocket communication and live updates.",
      features: [
        "WebSocket support",
        "Live chat",
        "Real-time notifications",
        "Collaborative features",
      ],
    },
    {
      title: "Legacy Application Modernization",
      description:
        "Upgrade and modernize existing Rails applications with latest frameworks and best practices.",
      features: [
        "Rails upgrades",
        "Performance optimization",
        "Security updates",
        "Code refactoring",
      ],
    },
  ];

  const benefits = [
    "Convention over Configuration",
    "Rapid Development",
    "Rich Ecosystem",
    "Testing Framework",
    "Security Features",
    "Scalable Architecture",
    "Active Community",
    "Mature Framework",
  ];

  const technologies = [
    "Ruby on Rails 7",
    "Ruby 3.2+",
    "PostgreSQL",
    "Redis",
    "Sidekiq",
    "Action Cable",
    "Stimulus",
    "Turbo",
    "RSpec",
    "Capistrano",
    "Docker",
    "Heroku",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-rose-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ruby on Rails Development Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100 max-w-3xl mx-auto">
              Build powerful web applications rapidly with Ruby on Rails - the
              framework for startup success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Project
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
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
              Our Ruby on Rails Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Rails development solutions for modern web
              applications
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
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Ruby on Rails for Web Development?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rails provides a complete framework for rapid and maintainable web
              development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-gray-50 hover:bg-red-50 transition-colors"
              >
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern Rails ecosystem and Ruby technologies for web development
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <h3 className="text-lg font-medium text-gray-900">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build with Ruby on Rails?
          </h2>
          <p className="text-xl mb-8 text-rose-100 max-w-3xl mx-auto">
            Let&apos;s create powerful web applications rapidly using
            Rails&apos; proven development framework
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-rose-600 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RailsDevelopmentPage;
