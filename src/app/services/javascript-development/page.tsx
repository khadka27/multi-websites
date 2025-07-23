import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Expert JavaScript Development Services | Custom Web Solutions",
  description:
    "Professional JavaScript development services for dynamic, interactive web applications. Modern ES6+, frameworks, and full-stack JavaScript solutions.",
  keywords:
    "JavaScript development, ES6, vanilla JavaScript, frontend development, backend development, Node.js, DOM manipulation",
  openGraph: {
    title: "Expert JavaScript Development Services | Custom Web Solutions",
    description:
      "Professional JavaScript development services for dynamic, interactive web applications.",
    type: "website",
  },
};

export default function JavaScriptDevelopmentPage() {
  const benefits = [
    {
      icon: "🚀",
      title: "Dynamic Interactivity",
      description:
        "Create engaging user experiences with modern JavaScript features and best practices.",
      metric: "100% interactive",
    },
    {
      icon: "⚡",
      title: "Performance Optimized",
      description:
        "Efficient code execution with modern JavaScript engines and optimization techniques.",
      metric: "40% faster",
    },
    {
      icon: "🔄",
      title: "Cross-Platform",
      description:
        "Use JavaScript for web, mobile, desktop, and server-side development.",
      metric: "Universal language",
    },
    {
      icon: "🎯",
      title: "Rich Ecosystem",
      description:
        "Leverage thousands of libraries and frameworks for rapid development.",
      metric: "2M+ packages",
    },
  ];

  const services = [
    {
      title: "Frontend JavaScript Development",
      description: "Build interactive user interfaces with modern JavaScript",
      features: [
        "ES6+ Features",
        "DOM Manipulation",
        "Event Handling",
        "AJAX & Fetch API",
      ],
    },
    {
      title: "Backend JavaScript (Node.js)",
      description:
        "Server-side JavaScript development for scalable applications",
      features: [
        "REST APIs",
        "Database Integration",
        "Authentication",
        "Real-time Features",
      ],
    },
    {
      title: "JavaScript Frameworks",
      description:
        "Development with popular JavaScript frameworks and libraries",
      features: ["React.js", "Vue.js", "Angular", "Express.js"],
    },
    {
      title: "JavaScript Optimization",
      description:
        "Performance tuning and code optimization for better user experience",
      features: [
        "Code Splitting",
        "Lazy Loading",
        "Bundle Optimization",
        "Memory Management",
      ],
    },
  ];

  const technologies = [
    { name: "ES6+", description: "Modern JavaScript features" },
    { name: "TypeScript", description: "Type-safe JavaScript" },
    { name: "Webpack", description: "Module bundling" },
    { name: "Babel", description: "JavaScript compilation" },
    { name: "ESLint", description: "Code quality" },
    { name: "Jest", description: "Testing framework" },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Requirements Analysis",
      description:
        "Understanding your project needs and JavaScript requirements",
    },
    {
      step: "02",
      title: "Architecture Design",
      description:
        "Planning the JavaScript application structure and data flow",
    },
    {
      step: "03",
      title: "Development",
      description:
        "Writing clean, efficient JavaScript code with modern best practices",
    },
    {
      step: "04",
      title: "Testing & Optimization",
      description: "Comprehensive testing and performance optimization",
    },
    {
      step: "05",
      title: "Deployment & Support",
      description: "Deployment assistance and ongoing maintenance support",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-4xl">🟨</span>
                <span className="text-sm font-semibold text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">
                  JavaScript Development
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                JavaScript Development
                <span className="block text-yellow-600">Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Build dynamic, interactive web applications with modern
                JavaScript. From frontend interactions to full-stack solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-yellow-600 hover:bg-yellow-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  Start JavaScript Project
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white font-medium rounded-lg transition-colors duration-200"
                >
                  View Pricing
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">🟨</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    JavaScript
                  </h3>
                  <div className="space-y-2 text-left">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-gray-600">
                        Dynamic Interactivity
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-gray-600">
                        Modern ES6+ Features
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-gray-600">
                        Cross-Platform Development
                      </span>
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
              Why Choose JavaScript Development?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              JavaScript powers the modern web with dynamic functionality and
              seamless user experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-yellow-50 transition-colors duration-200"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <div className="text-yellow-600 font-semibold">
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
              Our JavaScript Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive JavaScript solutions for all your development needs.
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
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
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
              JavaScript Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern tools and technologies for efficient JavaScript
              development.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-lg bg-gray-50 hover:bg-yellow-50 transition-colors duration-200"
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
              Our JavaScript Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven approach to deliver high-quality JavaScript solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
      <section className="py-20 bg-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build with JavaScript?
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
            Let's create dynamic, interactive applications that engage your
            users and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-yellow-600 hover:bg-gray-100 font-medium rounded-lg transition-colors duration-200"
            >
              Start Your Project
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-yellow-600 font-medium rounded-lg transition-colors duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
