import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Expert Next.js Development Services | Full-Stack React Applications",
  description:
    "Professional Next.js development services for high-performance, SEO-optimized React applications. Server-side rendering and static site generation.",
  keywords:
    "Next.js development, React framework, SSR, SSG, full-stack React, server-side rendering, static site generation",
  openGraph: {
    title:
      "Expert Next.js Development Services | Full-Stack React Applications",
    description:
      "Professional Next.js development services for high-performance React applications.",
    type: "website",
  },
};

export default function NextJSDevelopmentPage() {
  const benefits = [
    {
      icon: "⚡",
      title: "Lightning Fast Performance",
      description:
        "Optimized performance with automatic code splitting and smart bundling.",
      metric: "90+ PageSpeed",
    },
    {
      icon: "🔍",
      title: "SEO Optimized",
      description:
        "Built-in SEO optimization with server-side rendering and meta tag management.",
      metric: "100% SEO ready",
    },
    {
      icon: "🚀",
      title: "Full-Stack Capabilities",
      description:
        "API routes and server-side functionality in a single React framework.",
      metric: "Complete solution",
    },
    {
      icon: "📱",
      title: "Developer Experience",
      description:
        "Hot reload, TypeScript support, and excellent debugging tools.",
      metric: "5x faster dev",
    },
  ];

  const services = [
    {
      title: "Next.js Web Applications",
      description:
        "Build modern, high-performance web applications with Next.js",
      features: [
        "Server-Side Rendering",
        "Static Site Generation",
        "API Routes",
        "Image Optimization",
      ],
    },
    {
      title: "E-commerce Solutions",
      description:
        "Create fast, SEO-friendly e-commerce platforms with Next.js",
      features: [
        "Product Catalogs",
        "Shopping Carts",
        "Payment Integration",
        "Inventory Management",
      ],
    },
    {
      title: "Corporate Websites",
      description:
        "Professional business websites with Next.js performance benefits",
      features: [
        "Landing Pages",
        "Blog Systems",
        "Contact Forms",
        "CMS Integration",
      ],
    },
    {
      title: "Progressive Web Apps",
      description: "Build PWAs with Next.js for app-like user experiences",
      features: [
        "Offline Support",
        "Push Notifications",
        "App Shell",
        "Service Workers",
      ],
    },
  ];

  const technologies = [
    { name: "Next.js 14", description: "Latest framework" },
    { name: "React 18", description: "UI library" },
    { name: "TypeScript", description: "Type safety" },
    { name: "Tailwind CSS", description: "Styling framework" },
    { name: "Vercel", description: "Deployment platform" },
    { name: "Prisma", description: "Database ORM" },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Project Planning",
      description:
        "Understanding your requirements and planning the Next.js architecture",
    },
    {
      step: "02",
      title: "Design & Setup",
      description:
        "Creating designs and setting up the Next.js development environment",
    },
    {
      step: "03",
      title: "Development",
      description:
        "Building your application with Next.js best practices and patterns",
    },
    {
      step: "04",
      title: "Optimization",
      description: "Performance optimization and SEO enhancement",
    },
    {
      step: "05",
      title: "Deployment",
      description: "Production deployment and ongoing support",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-4xl">⚡</span>
                <span className="text-sm font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                  Next.js Development
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Next.js Development
                <span className="block text-gray-600">Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Build lightning-fast, SEO-optimized React applications with
                Next.js's powerful full-stack capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  Start Next.js Project
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-medium rounded-lg transition-colors duration-200"
                >
                  View Pricing
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">⚡</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Next.js
                  </h3>
                  <div className="space-y-2 text-left">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span className="text-gray-600">
                        Server-Side Rendering
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span className="text-gray-600">
                        Static Site Generation
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span className="text-gray-600">API Routes</span>
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
              Why Choose Next.js Development?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Next.js combines the best of React with powerful server-side
              capabilities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <div className="text-gray-700 font-semibold">
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
              Our Next.js Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Next.js solutions for modern web applications.
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
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
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
              Next.js Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern tools and technologies for efficient Next.js development.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
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
              Our Next.js Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to deliver high-performance Next.js
              applications.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build with Next.js?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's create fast, SEO-optimized applications that deliver
            exceptional user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 font-medium rounded-lg transition-colors duration-200"
            >
              Start Your Project
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-medium rounded-lg transition-colors duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
