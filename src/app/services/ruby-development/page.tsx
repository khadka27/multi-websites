import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ruby Development Services | Elegant Web Applications",
  description: "Professional Ruby development services for scalable web applications. Build elegant solutions with Ruby on Rails and modern Ruby frameworks.",
  keywords: [
    "Ruby development",
    "Ruby on Rails",
    "Ruby programming",
    "web application development",
    "API development",
    "Ruby consulting",
    "Sinatra framework",
    "gem development",
    "backend development",
    "Ruby automation"
  ],
  authors: [{ name: "wp development" }],
  openGraph: {
    title: "Professional Ruby Development Services",
    description: "Build elegant web applications with Ruby. Expert development services for scalable, maintainable, and developer-friendly solutions.",
    type: "website",
    images: [
      {
        url: "/logo/websiteprogrammingdevelopmentlogo.png",
        width: 1200,
        height: 630,
        alt: "Ruby Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Ruby Development Services",
    description: "Build elegant web applications with Ruby. Expert development services for scalable, maintainable, and developer-friendly solutions.",
    images: ["/logo/websiteprogrammingdevelopmentlogo.png"],
  },
};

const RubyDevelopmentPage = () => {
  const services = [
    {
      title: "Ruby on Rails Development",
      description: "Build powerful web applications using Ruby on Rails framework with convention over configuration.",
      features: ["Full-stack development", "MVC architecture", "RESTful APIs", "Database integration"]
    },
    {
      title: "API Development",
      description: "Create robust APIs and web services using Ruby frameworks for seamless integration.",
      features: ["RESTful APIs", "GraphQL services", "Authentication systems", "API documentation"]
    },
    {
      title: "E-commerce Solutions",
      description: "Develop scalable e-commerce platforms using Ruby with payment integration and inventory management.",
      features: ["Shopping cart systems", "Payment gateways", "Inventory management", "Order processing"]
    },
    {
      title: "Custom Web Applications",
      description: "Build tailored web applications that meet specific business requirements using Ruby.",
      features: ["Custom functionality", "Third-party integrations", "User management", "Admin dashboards"]
    },
    {
      title: "Ruby Automation & Scripts",
      description: "Develop automation scripts and tools to streamline business processes and workflows.",
      features: ["Process automation", "Data processing", "System integration", "Monitoring tools"]
    },
    {
      title: "Ruby Gem Development",
      description: "Create reusable Ruby gems and libraries to extend functionality and share code.",
      features: ["Custom gems", "Open source libraries", "Package management", "Code distribution"]
    }
  ];

  const benefits = [
    "Developer Productivity",
    "Elegant Syntax",
    "Convention over Configuration",
    "Rich Ecosystem",
    "Rapid Prototyping",
    "Test-Driven Development",
    "Community Support",
    "Flexible Architecture"
  ];

  const technologies = [
    "Ruby 3.2+",
    "Ruby on Rails",
    "Sinatra",
    "RubyGems",
    "Bundler",
    "RSpec",
    "PostgreSQL",
    "Redis",
    "Sidekiq",
    "Devise",
    "Capistrano",
    "Docker"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-pink-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ruby Development Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100 max-w-3xl mx-auto">
              Build elegant, maintainable web applications with Ruby&apos;s expressive and developer-friendly syntax
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
              Our Ruby Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Ruby development solutions for modern web applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
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
              Why Choose Ruby for Development?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ruby offers elegant solutions for rapid and maintainable web development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-red-50 transition-colors">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-lg font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{benefit}</h3>
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
              Modern Ruby ecosystem tools and frameworks for optimal development
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                <h3 className="text-lg font-medium text-gray-900">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build with Ruby?
          </h2>
          <p className="text-xl mb-8 text-pink-100 max-w-3xl mx-auto">
            Let&apos;s create elegant, efficient web applications that delight users and developers alike
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

export default RubyDevelopmentPage;
