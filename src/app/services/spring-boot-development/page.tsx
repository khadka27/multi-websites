import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spring Boot Development Services | Java Enterprise Framework",
  description:
    "Professional Spring Boot development services for enterprise Java applications. Build scalable microservices and web applications with Spring ecosystem.",
  keywords: [
    "Spring Boot development",
    "Java enterprise development",
    "Spring framework",
    "microservices development",
    "Java web applications",
    "Spring Boot consulting",
    "enterprise Java",
    "REST API development",
    "Spring Security",
    "Spring Data JPA",
  ],
  authors: [{ name: "wp development" }],
  openGraph: {
    title: "Professional Spring Boot Development Services",
    description:
      "Build enterprise Java applications with Spring Boot. Expert development services for scalable microservices and web applications using Spring ecosystem.",
    type: "website",
    images: [
      {
        url: "/logo/websiteprogrammingdevelopmentlogo.png",
        width: 1200,
        height: 630,
        alt: "Spring Boot Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Spring Boot Development Services",
    description:
      "Build enterprise Java applications with Spring Boot. Expert development services for scalable microservices and web applications using Spring ecosystem.",
    images: ["/logo/websiteprogrammingdevelopmentlogo.png"],
  },
};

const SpringBootDevelopmentPage = () => {
  const services = [
    {
      title: "Microservices Architecture",
      description:
        "Build scalable microservices using Spring Boot with service discovery, configuration management, and circuit breakers.",
      features: [
        "Service discovery",
        "Config server",
        "API gateway",
        "Circuit breakers",
      ],
    },
    {
      title: "REST API Development",
      description:
        "Create robust REST APIs using Spring Boot with comprehensive documentation and testing frameworks.",
      features: [
        "RESTful services",
        "API documentation",
        "Data validation",
        "Exception handling",
      ],
    },
    {
      title: "Enterprise Web Applications",
      description:
        "Develop full-stack enterprise applications using Spring Boot with security and data persistence layers.",
      features: [
        "MVC architecture",
        "Spring Security",
        "Database integration",
        "Template engines",
      ],
    },
    {
      title: "Cloud-Native Applications",
      description:
        "Build cloud-ready applications with Spring Boot using containerization and modern deployment practices.",
      features: [
        "Docker containers",
        "Kubernetes deployment",
        "Cloud configuration",
        "Health monitoring",
      ],
    },
    {
      title: "Data Access & Persistence",
      description:
        "Implement efficient data layers using Spring Data JPA and multiple database technologies.",
      features: [
        "Spring Data JPA",
        "Multiple databases",
        "Transaction management",
        "Query optimization",
      ],
    },
    {
      title: "Security & Authentication",
      description:
        "Implement comprehensive security solutions using Spring Security with OAuth2 and JWT integration.",
      features: [
        "Spring Security",
        "OAuth2 integration",
        "JWT tokens",
        "Role-based access",
      ],
    },
  ];

  const benefits = [
    "Rapid Development",
    "Auto Configuration",
    "Production Ready",
    "Microservices Support",
    "Enterprise Security",
    "Rich Ecosystem",
    "Community Support",
    "Cloud Integration",
  ];

  const technologies = [
    "Spring Boot 3.0+",
    "Spring Security",
    "Spring Data JPA",
    "Spring Cloud",
    "Maven/Gradle",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Kubernetes",
    "Swagger/OpenAPI",
    "JUnit 5",
    "Actuator",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Spring Boot Development Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
              Build enterprise-grade Java applications with Spring Boot&apos;s
              powerful framework and ecosystem
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Project
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
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
              Our Spring Boot Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Spring Boot development solutions for enterprise
              Java applications
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
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
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
              Why Choose Spring Boot for Enterprise Development?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Spring Boot provides comprehensive tools for building robust
              enterprise applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-gray-50 hover:bg-green-50 transition-colors"
              >
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
              Modern Spring ecosystem and Java technologies for enterprise
              development
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
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Enterprise Applications with Spring Boot?
          </h2>
          <p className="text-xl mb-8 text-emerald-100 max-w-3xl mx-auto">
            Let&apos;s create scalable, secure Java applications using Spring
            Boot&apos;s proven enterprise framework
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpringBootDevelopmentPage;
