import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Swift Development Services | iOS App Development",
  description: "Professional Swift development services for iOS applications. Build native iPhone and iPad apps with modern Swift programming and SwiftUI.",
  keywords: [
    "Swift development",
    "iOS development",
    "iPhone app development",
    "iPad app development",
    "SwiftUI",
    "iOS consulting",
    "Apple development",
    "mobile app development",
    "native iOS apps",
    "Swift programming"
  ],
  authors: [{ name: "wp development" }],
  openGraph: {
    title: "Professional Swift Development Services",
    description: "Build native iOS applications with Swift. Expert development services for iPhone and iPad apps using modern Swift and SwiftUI.",
    type: "website",
    images: [
      {
        url: "/logo/websiteprogrammingdevelopmentlogo.png",
        width: 1200,
        height: 630,
        alt: "Swift Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Swift Development Services",
    description: "Build native iOS applications with Swift. Expert development services for iPhone and iPad apps using modern Swift and SwiftUI.",
    images: ["/logo/websiteprogrammingdevelopmentlogo.png"],
  },
};

const SwiftDevelopmentPage = () => {
  const services = [
    {
      title: "iOS App Development",
      description: "Build native iPhone and iPad applications using latest Swift and iOS frameworks.",
      features: ["Native iOS apps", "SwiftUI interfaces", "UIKit integration", "App Store optimization"]
    },
    {
      title: "SwiftUI Development",
      description: "Create modern, declarative user interfaces using Apple's latest SwiftUI framework.",
      features: ["Declarative UI", "Cross-platform code", "Animation support", "State management"]
    },
    {
      title: "Core Data Integration",
      description: "Implement robust data persistence solutions using Core Data and modern Swift patterns.",
      features: ["Local data storage", "Data synchronization", "Performance optimization", "Migration handling"]
    },
    {
      title: "API Integration",
      description: "Connect iOS apps to backend services with efficient networking and data handling.",
      features: ["RESTful API integration", "JSON parsing", "Async/await patterns", "Error handling"]
    },
    {
      title: "App Store Deployment",
      description: "Handle complete app submission process and App Store guidelines compliance.",
      features: ["App Store submission", "TestFlight distribution", "Compliance review", "Release management"]
    },
    {
      title: "Performance Optimization",
      description: "Optimize app performance for smooth user experience and efficient resource usage.",
      features: ["Memory optimization", "Battery efficiency", "Launch time improvement", "Profiling tools"]
    }
  ];

  const benefits = [
    "Native Performance",
    "Apple Ecosystem",
    "Security Features",
    "Modern Syntax",
    "Type Safety",
    "Memory Management",
    "Developer Tools",
    "App Store Access"
  ];

  const technologies = [
    "Swift 5.9+",
    "SwiftUI",
    "UIKit",
    "Core Data",
    "Combine",
    "Xcode",
    "TestFlight",
    "Core Animation",
    "CloudKit",
    "WidgetKit",
    "ARKit",
    "Metal"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Swift Development Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto">
              Build powerful native iOS applications with Swift - Apple&apos;s modern programming language
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Project
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
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
              Our Swift Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive iOS development solutions using Swift and modern Apple technologies
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
                      <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
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
              Why Choose Swift for iOS Development?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Swift provides modern language features for building high-performance iOS applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-orange-50 transition-colors">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
              Latest Apple frameworks and development tools for Swift development
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
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your iOS App with Swift?
          </h2>
          <p className="text-xl mb-8 text-red-100 max-w-3xl mx-auto">
            Let&apos;s create amazing iOS experiences that users love using Apple&apos;s powerful Swift language
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SwiftDevelopmentPage;
