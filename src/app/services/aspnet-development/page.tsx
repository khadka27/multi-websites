import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ASP.NET Development Services | Microsoft .NET Framework",
  description:
    "Professional ASP.NET development services for enterprise web applications. Build scalable solutions with ASP.NET Core, Web API, and MVC framework.",
  keywords: [
    "ASP.NET development",
    "ASP.NET Core",
    "Microsoft .NET",
    "C# web development",
    "enterprise applications",
    "Web API development",
    "MVC framework",
    "Blazor development",
    "Visual Studio",
    "Azure integration",
  ],
  authors: [{ name: "wp development" }],
  openGraph: {
    title: "Professional ASP.NET Development Services",
    description:
      "Build enterprise web applications with ASP.NET. Expert development services using Microsoft's robust .NET framework for scalable solutions.",
    type: "website",
    images: [
      {
        url: "/logo/websiteprogrammingdevelopmentlogo.png",
        width: 1200,
        height: 630,
        alt: "ASP.NET Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional ASP.NET Development Services",
    description:
      "Build enterprise web applications with ASP.NET. Expert development services using Microsoft's robust .NET framework for scalable solutions.",
    images: ["/logo/websiteprogrammingdevelopmentlogo.png"],
  },
};

const AspNetDevelopmentPage = () => {
  const services = [
    {
      title: "ASP.NET Core Applications",
      description:
        "Build modern web applications using ASP.NET Core with cross-platform support and high performance.",
      features: [
        "Cross-platform",
        "High performance",
        "Microservices ready",
        "Cloud-native",
      ],
    },
    {
      title: "Web API Development",
      description:
        "Create robust RESTful APIs using ASP.NET Core Web API for mobile and web applications.",
      features: [
        "RESTful APIs",
        "JWT authentication",
        "Swagger documentation",
        "API versioning",
      ],
    },
    {
      title: "Blazor Development",
      description:
        "Build interactive web UIs using C# with Blazor Server and Blazor WebAssembly applications.",
      features: [
        "Client-side Blazor",
        "Server-side Blazor",
        "Component-based",
        "C# in browser",
      ],
    },
    {
      title: "Enterprise Solutions",
      description:
        "Develop large-scale enterprise applications with robust architecture and security features.",
      features: [
        "Enterprise architecture",
        "Security compliance",
        "Scalable design",
        "Integration services",
      ],
    },
    {
      title: "Legacy Migration",
      description:
        "Migrate legacy ASP.NET applications to modern ASP.NET Core with improved performance.",
      features: [
        "Framework migration",
        "Performance optimization",
        "Code modernization",
        "Azure migration",
      ],
    },
    {
      title: "Azure Integration",
      description:
        "Deploy and integrate ASP.NET applications with Microsoft Azure cloud services and DevOps.",
      features: [
        "Azure deployment",
        "Cloud services",
        "DevOps integration",
        "Monitoring & scaling",
      ],
    },
  ];

  const benefits = [
    "Enterprise-grade Security",
    "High Performance",
    "Cross-platform Support",
    "Rich Ecosystem",
    "Strong Typing",
    "Microsoft Support",
    "Azure Integration",
    "Rapid Development",
  ];

  const technologies = [
    "ASP.NET Core 8",
    "C# 12",
    "Entity Framework",
    "Blazor",
    "SignalR",
    "Azure",
    "SQL Server",
    "Docker",
    "Visual Studio",
    "Azure DevOps",
    "Identity Server",
    "AutoMapper",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ASP.NET Development Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Build powerful enterprise web applications with Microsoft&apos;s
              robust .NET framework
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
              Our ASP.NET Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive .NET development solutions for enterprise
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
              Why Choose ASP.NET for Enterprise Development?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ASP.NET provides enterprise-grade features and Microsoft ecosystem
              integration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
              Latest Microsoft .NET technologies and enterprise development
              tools
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build with ASP.NET?
          </h2>
          <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
            Let&apos;s create robust enterprise applications using
            Microsoft&apos;s powerful .NET framework
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AspNetDevelopmentPage;
