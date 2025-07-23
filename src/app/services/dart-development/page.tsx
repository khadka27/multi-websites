import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Expert Dart Development Services | Flutter & Web Applications",
  description:
    "Professional Dart development services for Flutter mobile apps, web applications, and server-side development. Modern, efficient Dart solutions.",
  keywords:
    "Dart development, Flutter development, Dart programming, cross-platform development, mobile app development",
  openGraph: {
    title: "Expert Dart Development Services | Flutter & Web Applications",
    description:
      "Professional Dart development services for Flutter mobile apps and web applications.",
    type: "website",
  },
};

export default function DartDevelopmentPage() {
  const benefits = [
    {
      icon: "🎯",
      title: "Cross-Platform Development",
      description:
        "Write once, run everywhere with Dart's multi-platform capabilities.",
      metric: "5+ platforms",
    },
    {
      icon: "⚡",
      title: "High Performance",
      description:
        "Fast execution with AOT compilation and optimized runtime performance.",
      metric: "60fps smooth",
    },
    {
      icon: "🔄",
      title: "Hot Reload",
      description:
        "Instant code changes with hot reload for rapid development cycles.",
      metric: "Sub-second reload",
    },
    {
      icon: "🛠️",
      title: "Rich Ecosystem",
      description:
        "Comprehensive libraries and tools for modern application development.",
      metric: "25K+ packages",
    },
  ];

  const services = [
    {
      title: "Flutter Mobile App Development",
      description:
        "Build beautiful, native mobile applications for iOS and Android",
      features: [
        "Cross-Platform Apps",
        "Native Performance",
        "Material Design",
        "Cupertino Widgets",
      ],
    },
    {
      title: "Dart Web Development",
      description: "Create fast, responsive web applications with Dart",
      features: [
        "Web Frameworks",
        "PWA Development",
        "SPA Applications",
        "Server-Side Rendering",
      ],
    },
    {
      title: "Dart Backend Development",
      description: "Server-side applications and APIs with Dart",
      features: [
        "REST APIs",
        "GraphQL",
        "Database Integration",
        "Microservices",
      ],
    },
    {
      title: "Desktop App Development",
      description: "Native desktop applications using Flutter for desktop",
      features: [
        "Windows Apps",
        "macOS Apps",
        "Linux Apps",
        "Native Integrations",
      ],
    },
  ];

  const technologies = [
    { name: "Flutter", description: "UI framework" },
    { name: "Dart SDK", description: "Core development kit" },
    { name: "Firebase", description: "Backend services" },
    { name: "Shelf", description: "Web server framework" },
    { name: "Riverpod", description: "State management" },
    { name: "Freezed", description: "Code generation" },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Requirements Gathering",
      description:
        "Understanding your cross-platform development needs and target platforms",
    },
    {
      step: "02",
      title: "Architecture Design",
      description:
        "Planning scalable Dart application architecture and component structure",
    },
    {
      step: "03",
      title: "Development",
      description:
        "Writing efficient Dart code with modern patterns and best practices",
    },
    {
      step: "04",
      title: "Testing & Quality",
      description: "Comprehensive testing across all target platforms",
    },
    {
      step: "05",
      title: "Deployment & Support",
      description: "Multi-platform deployment and ongoing maintenance",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-4xl">🎯</span>
                <span className="text-sm font-semibold text-cyan-600 bg-cyan-100 px-3 py-1 rounded-full">
                  Dart Development
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Dart Development
                <span className="block text-cyan-600">Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Build cross-platform applications with Dart's modern language
                features and Flutter's powerful UI framework.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  Start Dart Project
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white font-medium rounded-lg transition-colors duration-200"
                >
                  View Pricing
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎯</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Dart
                  </h3>
                  <div className="space-y-2 text-left">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-600">Cross-Platform</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-600">High Performance</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-600">Hot Reload</span>
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
              Why Choose Dart Development?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dart offers modern language features with exceptional
              cross-platform capabilities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-cyan-50 transition-colors duration-200"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <div className="text-cyan-600 font-semibold">
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
              Our Dart Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Dart solutions for mobile, web, and desktop
              applications.
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
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
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
              Dart Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern tools and frameworks for efficient Dart development.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-lg bg-gray-50 hover:bg-cyan-50 transition-colors duration-200"
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
              Our Dart Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven approach to deliver high-quality cross-platform Dart
              applications.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
      <section className="py-20 bg-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build with Dart?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Let's create beautiful, high-performance cross-platform applications
            with Dart and Flutter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-600 hover:bg-gray-100 font-medium rounded-lg transition-colors duration-200"
            >
              Start Your Project
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-medium rounded-lg transition-colors duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
