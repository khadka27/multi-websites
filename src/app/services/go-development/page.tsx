import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Expert Go Development Services | High-Performance Backend Solutions",
  description:
    "Professional Go (Golang) development services for scalable, concurrent backend systems. Microservices, APIs, and cloud-native applications.",
  keywords:
    "Go development, Golang, backend development, microservices, concurrent programming, cloud-native, API development",
  openGraph: {
    title:
      "Expert Go Development Services | High-Performance Backend Solutions",
    description:
      "Professional Go development services for scalable backend systems.",
    type: "website",
  },
};

export default function GoDevelopmentPage() {
  const benefits = [
    {
      icon: "🐹",
      title: "High Performance",
      description:
        "Compiled language with excellent performance and low memory footprint.",
      metric: "10x faster",
    },
    {
      icon: "⚡",
      title: "Concurrency Built-in",
      description:
        "Goroutines and channels for efficient concurrent programming.",
      metric: "1M+ goroutines",
    },
    {
      icon: "🚀",
      title: "Fast Compilation",
      description: "Lightning-fast build times for rapid development cycles.",
      metric: "Sub-second builds",
    },
    {
      icon: "🔧",
      title: "Simple & Reliable",
      description:
        "Clean syntax and strong standard library for maintainable code.",
      metric: "Easy to learn",
    },
  ];

  const services = [
    {
      title: "Backend API Development",
      description: "Build high-performance REST and GraphQL APIs with Go",
      features: [
        "REST APIs",
        "GraphQL Services",
        "gRPC Services",
        "Authentication",
      ],
    },
    {
      title: "Microservices Architecture",
      description: "Design and implement scalable microservices using Go",
      features: [
        "Service Discovery",
        "Load Balancing",
        "Circuit Breakers",
        "Distributed Tracing",
      ],
    },
    {
      title: "Cloud-Native Applications",
      description: "Develop containerized applications for cloud deployment",
      features: [
        "Docker Containers",
        "Kubernetes",
        "Helm Charts",
        "CI/CD Pipelines",
      ],
    },
    {
      title: "Command Line Tools",
      description: "Create powerful CLI applications and system utilities",
      features: [
        "CLI Applications",
        "System Tools",
        "DevOps Utilities",
        "Cross-Platform",
      ],
    },
  ];

  const technologies = [
    { name: "Go 1.21", description: "Latest version" },
    { name: "Gin", description: "Web framework" },
    { name: "Fiber", description: "Fast web framework" },
    { name: "GORM", description: "ORM library" },
    { name: "Docker", description: "Containerization" },
    { name: "Kubernetes", description: "Orchestration" },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Requirements Analysis",
      description:
        "Understanding your backend requirements and performance needs",
    },
    {
      step: "02",
      title: "Architecture Design",
      description:
        "Designing scalable Go application architecture and service boundaries",
    },
    {
      step: "03",
      title: "Development",
      description: "Writing efficient, concurrent Go code with best practices",
    },
    {
      step: "04",
      title: "Testing & Optimization",
      description: "Comprehensive testing and performance optimization",
    },
    {
      step: "05",
      title: "Deployment & Monitoring",
      description: "Production deployment with monitoring and observability",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-4xl">🐹</span>
                <span className="text-sm font-semibold text-teal-600 bg-teal-100 px-3 py-1 rounded-full">
                  Go Development
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Go Development
                <span className="block text-teal-600">Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Build high-performance, scalable backend systems with Go's
                simplicity and powerful concurrency features.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  Start Go Project
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white font-medium rounded-lg transition-colors duration-200"
                >
                  View Pricing
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">🐹</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Go (Golang)
                  </h3>
                  <div className="space-y-2 text-left">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                      <span className="text-gray-600">High Performance</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                      <span className="text-gray-600">
                        Built-in Concurrency
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                      <span className="text-gray-600">Fast Compilation</span>
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
              Why Choose Go Development?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Go delivers exceptional performance with simple, maintainable
              code.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-teal-50 transition-colors duration-200"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <div className="text-teal-600 font-semibold">
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
              Our Go Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Go solutions for modern backend development.
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
                      <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
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
              Go Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern tools and frameworks for efficient Go development.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-lg bg-gray-50 hover:bg-teal-50 transition-colors duration-200"
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
              Our Go Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven approach to deliver high-performance Go applications.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
      <section className="py-20 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build with Go?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Let's create high-performance, scalable backend systems that handle
            millions of requests efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-600 hover:bg-gray-100 font-medium rounded-lg transition-colors duration-200"
            >
              Start Your Project
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-teal-600 font-medium rounded-lg transition-colors duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
