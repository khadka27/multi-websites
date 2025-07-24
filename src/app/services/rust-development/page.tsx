import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rust Development Services | Systems Programming",
  description: "Professional Rust development services for high-performance systems. Build safe, concurrent applications with Rust's memory safety and zero-cost abstractions.",
  keywords: [
    "Rust development",
    "systems programming",
    "Rust programming",
    "memory safety",
    "concurrent programming",
    "performance optimization",
    "WebAssembly",
    "blockchain development",
    "CLI tools",
    "embedded systems"
  ],
  authors: [{ name: "wp development" }],
  openGraph: {
    title: "Professional Rust Development Services",
    description: "Build high-performance, memory-safe applications with Rust. Expert systems programming for modern, efficient software solutions.",
    type: "website",
    images: [
      {
        url: "/logo/websiteprogrammingdevelopmentlogo.png",
        width: 1200,
        height: 630,
        alt: "Rust Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Rust Development Services",
    description: "Build high-performance, memory-safe applications with Rust. Expert systems programming for modern, efficient software solutions.",
    images: ["/logo/websiteprogrammingdevelopmentlogo.png"],
  },
};

const RustDevelopmentPage = () => {
  const services = [
    {
      title: "Systems Programming",
      description: "Build high-performance system-level applications with Rust's memory safety and zero-cost abstractions.",
      features: ["Operating systems", "Device drivers", "Network protocols", "Performance-critical code"]
    },
    {
      title: "Web Backend Development",
      description: "Create fast and secure web services using modern Rust web frameworks like Actix and Rocket.",
      features: ["RESTful APIs", "Microservices", "Database integration", "High concurrency"]
    },
    {
      title: "WebAssembly Development",
      description: "Compile Rust to WebAssembly for high-performance web applications and browser-based tools.",
      features: ["WASM modules", "Browser integration", "Performance optimization", "Cross-platform deployment"]
    },
    {
      title: "CLI Tools & Utilities",
      description: "Develop command-line tools and utilities with Rust for fast, reliable system administration.",
      features: ["Command-line apps", "System utilities", "Cross-platform tools", "Package distribution"]
    },
    {
      title: "Blockchain & Cryptocurrency",
      description: "Build secure blockchain applications and cryptocurrency solutions using Rust's safety features.",
      features: ["Smart contracts", "Consensus algorithms", "Cryptocurrency wallets", "DeFi protocols"]
    },
    {
      title: "Game Engine Development",
      description: "Create high-performance game engines and real-time applications with Rust's performance guarantees.",
      features: ["Game engines", "Real-time systems", "Graphics programming", "Audio processing"]
    }
  ];

  const benefits = [
    "Memory Safety",
    "Zero-Cost Abstractions",
    "Thread Safety",
    "Performance",
    "Package Management",
    "Cross-Platform",
    "Growing Ecosystem",
    "Modern Tooling"
  ];

  const technologies = [
    "Rust 1.75+",
    "Cargo",
    "Actix Web",
    "Rocket",
    "Tokio",
    "Serde",
    "WebAssembly",
    "Diesel ORM",
    "Tauri",
    "Bevy Engine",
    "clap",
    "async-std"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Rust Development Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto">
              Build fast, safe, and concurrent applications with Rust&apos;s revolutionary approach to systems programming
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
              Our Rust Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Rust development solutions for high-performance, memory-safe applications
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
              Why Choose Rust for Development?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rust provides unmatched performance and safety for systems programming
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
              Modern Rust ecosystem tools and frameworks for optimal development
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
            Ready to Harness Rust&apos;s Power?
          </h2>
          <p className="text-xl mb-8 text-red-100 max-w-3xl mx-auto">
            Let&apos;s build blazingly fast, memory-safe applications that push the boundaries of performance
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

export default RustDevelopmentPage;
