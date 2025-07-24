import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Scala Development Services | Functional Programming & Big Data",
  description:
    "Professional Scala development services for scalable applications and big data processing. Build high-performance systems with functional programming.",
  keywords: [
    "Scala development",
    "functional programming",
    "big data",
    "JVM development",
    "Apache Spark",
    "Akka framework",
    "reactive systems",
    "concurrent programming",
    "distributed systems",
    "microservices Scala",
  ],
  authors: [{ name: "wp development" }],
  openGraph: {
    title: "Professional Scala Development Services",
    description:
      "Build scalable applications with Scala functional programming. Expert development services for big data and distributed systems.",
    type: "website",
    images: [
      {
        url: "/logo/websiteprogrammingdevelopmentlogo.png",
        width: 1200,
        height: 630,
        alt: "Scala Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Scala Development Services",
    description:
      "Build scalable applications with Scala functional programming. Expert development services for big data and distributed systems.",
    images: ["/logo/websiteprogrammingdevelopmentlogo.png"],
  },
};

const ScalaDevelopmentPage = () => {
  const services = [
    {
      title: "Big Data Applications",
      description:
        "Build high-performance big data processing applications using Scala with Apache Spark and other frameworks.",
      features: [
        "Apache Spark",
        "Data processing",
        "ETL pipelines",
        "Real-time analytics",
      ],
    },
    {
      title: "Microservices Architecture",
      description:
        "Develop scalable microservices using Scala with reactive programming principles and actor models.",
      features: [
        "Akka framework",
        "Reactive systems",
        "Actor model",
        "Distributed systems",
      ],
    },
    {
      title: "Functional Programming",
      description:
        "Leverage Scala's functional programming features to build robust and maintainable applications.",
      features: [
        "Immutable data",
        "Pure functions",
        "Pattern matching",
        "Type safety",
      ],
    },
    {
      title: "Enterprise Applications",
      description:
        "Create enterprise-grade applications with Scala's strong type system and JVM ecosystem integration.",
      features: [
        "Type safety",
        "JVM integration",
        "Enterprise patterns",
        "Scalable architecture",
      ],
    },
  ];

  const technologies = [
    "Scala 3",
    "Apache Spark",
    "Akka",
    "Play Framework",
    "SBT",
    "Cats",
    "Slick",
    "Kafka",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-700 to-red-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Scala Development Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100 max-w-3xl mx-auto">
              Build scalable applications with Scala&apos;s powerful functional
              programming capabilities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Project
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-700 transition-colors"
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
              Our Scala Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Scala solutions for modern application development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, serviceIndex) => (
              <div
                key={`service-${serviceIndex}`}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={`feature-${serviceIndex}-${featureIndex}`}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <span className="w-2 h-2 bg-red-700 rounded-full mr-3"></span>
                      {feature}
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
              Technologies We Use
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, techIndex) => (
              <div
                key={`tech-${techIndex}`}
                className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <h3 className="text-lg font-medium text-gray-900">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-800 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build with Scala?
          </h2>
          <p className="text-xl mb-8 text-red-100 max-w-3xl mx-auto">
            Let&apos;s create high-performance applications using Scala&apos;s
            functional programming power
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-700 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScalaDevelopmentPage;
