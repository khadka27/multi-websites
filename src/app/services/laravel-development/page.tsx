import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Expert Laravel Development Services | PHP Web Applications",
  description:
    "Professional Laravel development services for robust, scalable PHP web applications. Custom Laravel solutions with modern features and best practices.",
  keywords:
    "Laravel development, PHP framework, web application development, MVC architecture, Eloquent ORM, Artisan CLI",
  openGraph: {
    title: "Expert Laravel Development Services | PHP Web Applications",
    description:
      "Professional Laravel development services for robust PHP web applications.",
    type: "website",
  },
};

export default function LaravelDevelopmentPage() {
  const benefits = [
    {
      icon: "🔴",
      title: "Elegant Syntax",
      description:
        "Beautiful, expressive syntax that makes development enjoyable and productive.",
      metric: "Developer friendly",
    },
    {
      icon: "⚡",
      title: "Rapid Development",
      description:
        "Built-in features and tools for faster application development.",
      metric: "50% faster build",
    },
    {
      icon: "🛡️",
      title: "Security First",
      description:
        "Built-in security features to protect against common web vulnerabilities.",
      metric: "Enterprise secure",
    },
    {
      icon: "🔧",
      title: "Rich Ecosystem",
      description:
        "Extensive package ecosystem and community-driven libraries.",
      metric: "15K+ packages",
    },
  ];

  const services = [
    {
      title: "Custom Laravel Applications",
      description:
        "Build scalable web applications with Laravel's powerful features",
      features: [
        "MVC Architecture",
        "Eloquent ORM",
        "Blade Templating",
        "Artisan CLI",
      ],
    },
    {
      title: "Laravel API Development",
      description: "Create robust REST APIs and microservices with Laravel",
      features: [
        "RESTful APIs",
        "API Authentication",
        "Rate Limiting",
        "Documentation",
      ],
    },
    {
      title: "E-commerce Solutions",
      description: "Develop feature-rich e-commerce platforms with Laravel",
      features: [
        "Shopping Carts",
        "Payment Gateways",
        "Inventory Management",
        "Order Processing",
      ],
    },
    {
      title: "Content Management Systems",
      description: "Build powerful CMS solutions with Laravel",
      features: [
        "Admin Panels",
        "User Management",
        "Content Publishing",
        "Media Management",
      ],
    },
  ];

  const technologies = [
    { name: "Laravel 10", description: "Latest framework" },
    { name: "PHP 8.2", description: "Modern PHP" },
    { name: "MySQL", description: "Database" },
    { name: "Redis", description: "Caching" },
    { name: "Vue.js", description: "Frontend integration" },
    { name: "Docker", description: "Containerization" },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Project Planning",
      description:
        "Understanding your requirements and planning the Laravel application structure",
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Designing the database schema and application architecture",
    },
    {
      step: "03",
      title: "Development",
      description:
        "Building your application with Laravel best practices and patterns",
    },
    {
      step: "04",
      title: "Testing & Security",
      description: "Comprehensive testing and security auditing",
    },
    {
      step: "05",
      title: "Deployment & Support",
      description: "Production deployment and ongoing maintenance",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-4xl">🔴</span>
                <span className="text-sm font-semibold text-red-600 bg-red-100 px-3 py-1 rounded-full">
                  Laravel Development
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Laravel Development
                <span className="block text-red-600">Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Build elegant, feature-rich web applications with Laravel's
                expressive syntax and powerful ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  Start Laravel Project
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-medium rounded-lg transition-colors duration-200"
                >
                  View Pricing
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">🔴</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Laravel
                  </h3>
                  <div className="space-y-2 text-left">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-gray-600">Elegant Syntax</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-gray-600">Rapid Development</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-gray-600">Security First</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Laravel Development?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Laravel provides a perfect balance of simplicity and power for
              modern web development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-red-50 transition-colors duration-200"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <div className="text-red-600 font-semibold">
                  {benefit.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Laravel Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Laravel solutions for modern web applications.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
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
              Laravel Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern tools and technologies for efficient Laravel development.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-lg bg-gray-50 hover:bg-red-50 transition-colors duration-200"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  {tech.name}
                </h3>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Laravel Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to deliver robust Laravel applications.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build with Laravel?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Let's create elegant, scalable web applications that grow with your
            business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 hover:bg-gray-100 font-medium rounded-lg transition-colors duration-200"
            >
              Start Your Project
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-red-600 font-medium rounded-lg transition-colors duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
