import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "C# Development Services | Enterprise .NET Applications",
  description: "Professional C# development services for scalable enterprise applications. Build robust .NET solutions with expert developers using latest Microsoft technologies.",
  keywords: [
    "C# development",
    ".NET development",
    "C# programming",
    "ASP.NET development",
    "enterprise C# applications",
    "Microsoft technologies",
    "C# consulting",
    "desktop applications",
    "web applications",
    "C# API development"
  ],
  authors: [{ name: "wp development" }],
  openGraph: {
    title: "Professional C# Development Services",
    description: "Build enterprise-grade applications with C# and .NET. Expert development services for scalable, secure, and high-performance software solutions.",
    type: "website",
    images: [
      {
        url: "/logo/websiteprogrammingdevelopmentlogo.png",
        width: 1200,
        height: 630,
        alt: "C# Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional C# Development Services",
    description: "Build enterprise-grade applications with C# and .NET. Expert development services for scalable, secure, and high-performance software solutions.",
    images: ["/logo/websiteprogrammingdevelopmentlogo.png"],
  },
};

const CSharpDevelopmentPage = () => {
  const services = [
    {
      title: "Enterprise Web Applications",
      description: "Build scalable web applications using ASP.NET Core with modern architecture and best practices.",
      features: ["ASP.NET Core MVC", "Web API development", "Microservices architecture", "Cloud-ready applications"]
    },
    {
      title: "Desktop Application Development",
      description: "Create powerful desktop applications using WPF, WinForms, or modern cross-platform solutions.",
      features: ["WPF applications", "Windows Forms", "MAUI cross-platform", "Desktop modernization"]
    },
    {
      title: "API & Web Services",
      description: "Develop robust APIs and web services for seamless integration and data exchange.",
      features: ["RESTful APIs", "GraphQL services", "gRPC services", "Authentication & authorization"]
    },
    {
      title: "Cloud & Azure Solutions",
      description: "Build cloud-native applications leveraging Azure services and modern deployment strategies.",
      features: ["Azure integration", "Serverless functions", "Container deployment", "DevOps pipelines"]
    },
    {
      title: "Database Integration",
      description: "Implement efficient data access layers with Entity Framework and modern ORM patterns.",
      features: ["Entity Framework Core", "SQL Server integration", "Database migrations", "Performance optimization"]
    },
    {
      title: "Legacy System Modernization",
      description: "Modernize existing .NET Framework applications to .NET Core/5+ for improved performance.",
      features: ["Framework migration", "Code refactoring", "Performance improvements", "Cloud migration"]
    }
  ];

  const benefits = [
    "Strong Type Safety",
    "High Performance",
    "Enterprise Security",
    "Cross-Platform Support",
    "Rich Ecosystem",
    "Microsoft Support",
    "Scalable Architecture",
    "Memory Management"
  ];

  const technologies = [
    "C# 11+",
    "ASP.NET Core",
    ".NET 7/8",
    "Entity Framework",
    "Azure Services",
    "SQL Server",
    "Visual Studio",
    "WPF",
    "MAUI",
    "Blazor",
    "SignalR",
    "Docker"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              C# Development Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Build powerful enterprise applications with C# and .NET - from web APIs to desktop solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Project
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
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
              Our C# Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive C# development solutions for modern business applications
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
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
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
              Why Choose C# for Development?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              C# offers enterprise-grade features for building robust, scalable applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
              Latest Microsoft technologies and frameworks for C# development
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
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your C# Application?
          </h2>
          <p className="text-xl mb-8 text-indigo-100 max-w-3xl mx-auto">
            Let&apos;s create powerful, scalable solutions using Microsoft&apos;s proven C# technology stack
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
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

export default CSharpDevelopmentPage;
