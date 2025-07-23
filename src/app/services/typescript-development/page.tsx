import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Expert TypeScript Development Services | Type-Safe Solutions",
  description:
    "Professional TypeScript development services for scalable, maintainable applications. Type-safe JavaScript with enhanced developer experience.",
  keywords:
    "TypeScript development, type-safe JavaScript, static typing, Angular, React TypeScript, Node.js TypeScript",
  openGraph: {
    title: "Expert TypeScript Development Services | Type-Safe Solutions",
    description:
      "Professional TypeScript development services for scalable, maintainable applications.",
    type: "website",
  },
};

export default function TypeScriptDevelopmentPage() {
  const benefits = [
    {
      icon: "🛡️",
      title: "Type Safety",
      description:
        "Catch errors at compile time and reduce runtime bugs with static type checking.",
      metric: "85% fewer bugs",
    },
    {
      icon: "🔧",
      title: "Better Developer Experience",
      description:
        "Enhanced IDE support with intelligent autocompletion and refactoring tools.",
      metric: "50% faster coding",
    },
    {
      icon: "📈",
      title: "Scalable Codebase",
      description:
        "Write maintainable code that scales with your team and project complexity.",
      metric: "3x more maintainable",
    },
    {
      icon: "🎯",
      title: "JavaScript Compatibility",
      description:
        "Gradual adoption with full JavaScript compatibility and incremental migration.",
      metric: "100% compatible",
    },
  ];

  const services = [
    {
      title: "TypeScript Application Development",
      description:
        "Build robust applications with TypeScript's type safety and modern features",
      features: [
        "Static Type Checking",
        "Interface Design",
        "Generic Programming",
        "Decorator Support",
      ],
    },
    {
      title: "JavaScript to TypeScript Migration",
      description: "Safely migrate existing JavaScript codebases to TypeScript",
      features: [
        "Incremental Migration",
        "Type Definitions",
        "Code Refactoring",
        "Testing Strategy",
      ],
    },
    {
      title: "TypeScript Framework Development",
      description: "Development with TypeScript-first frameworks and libraries",
      features: ["Angular", "React with TypeScript", "Node.js", "Nest.js"],
    },
    {
      title: "TypeScript Tooling & Configuration",
      description:
        "Setup and optimization of TypeScript development environment",
      features: [
        "TSConfig Optimization",
        "Build Tools",
        "Linting Setup",
        "IDE Configuration",
      ],
    },
  ];

  const technologies = [
    { name: "TypeScript", description: "Core language" },
    { name: "TSC", description: "TypeScript compiler" },
    { name: "ESLint", description: "TypeScript linting" },
    { name: "Prettier", description: "Code formatting" },
    { name: "Jest", description: "Testing framework" },
    { name: "Webpack", description: "Module bundling" },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Type Analysis",
      description:
        "Analyzing your project structure and defining type requirements",
    },
    {
      step: "02",
      title: "Architecture Planning",
      description: "Designing type-safe architecture and interface contracts",
    },
    {
      step: "03",
      title: "Development",
      description: "Writing type-safe TypeScript code with best practices",
    },
    {
      step: "04",
      title: "Testing & Validation",
      description: "Comprehensive testing and type validation",
    },
    {
      step: "05",
      title: "Deployment & Monitoring",
      description: "Production deployment with ongoing type safety monitoring",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-4xl">🔵</span>
                <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                  TypeScript Development
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                TypeScript Development
                <span className="block text-blue-600">Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Build type-safe, scalable applications with TypeScript's
                powerful static typing and modern JavaScript features.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  Start TypeScript Project
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium rounded-lg transition-colors duration-200"
                >
                  View Pricing
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">🔵</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    TypeScript
                  </h3>
                  <div className="space-y-2 text-left">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-600">
                        Static Type Checking
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-600">
                        Enhanced IDE Support
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-600">
                        JavaScript Compatible
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
              Why Choose TypeScript Development?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              TypeScript brings type safety and enhanced developer experience to
              JavaScript development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors duration-200"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <div className="text-blue-600 font-semibold">
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
              Our TypeScript Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive TypeScript solutions for modern application
              development.
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
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
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
              TypeScript Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern tools and technologies for efficient TypeScript
              development.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors duration-200"
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
              Our TypeScript Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to deliver type-safe, maintainable
              TypeScript solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build with TypeScript?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's create type-safe, scalable applications that reduce bugs and
            improve developer productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-medium rounded-lg transition-colors duration-200"
            >
              Start Your Project
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-medium rounded-lg transition-colors duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
