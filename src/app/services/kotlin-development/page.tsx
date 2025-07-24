import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kotlin Development Services | Android App Development",
  description: "Professional Kotlin development services for Android applications. Build modern mobile apps with Kotlin's concise and safe programming language.",
  keywords: [
    "Kotlin development",
    "Android development",
    "Kotlin programming",
    "mobile app development",
    "Android Studio",
    "Kotlin consulting",
    "native Android apps",
    "multiplatform development",
    "Android Jetpack",
    "Kotlin coroutines"
  ],
  authors: [{ name: "wp development" }],
  openGraph: {
    title: "Professional Kotlin Development Services",
    description: "Build modern Android applications with Kotlin. Expert development services for native Android apps using Google's preferred language.",
    type: "website",
    images: [
      {
        url: "/logo/websiteprogrammingdevelopmentlogo.png",
        width: 1200,
        height: 630,
        alt: "Kotlin Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Kotlin Development Services", 
    description: "Build modern Android applications with Kotlin. Expert development services for native Android apps using Google's preferred language.",
    images: ["/logo/websiteprogrammingdevelopmentlogo.png"],
  },
};

const KotlinDevelopmentPage = () => {
  const services = [
    {
      title: "Android App Development",
      description: "Build native Android applications using Kotlin with modern architecture patterns and best practices.",
      features: ["Native Android apps", "Material Design", "Jetpack Compose", "MVVM architecture"]
    },
    {
      title: "Kotlin Multiplatform",
      description: "Develop cross-platform applications sharing business logic between Android and iOS platforms.",
      features: ["Shared codebase", "Platform-specific UI", "Code reusability", "Faster development"]
    },
    {
      title: "Backend Development",
      description: "Create robust server-side applications using Kotlin with frameworks like Ktor and Spring Boot.",
      features: ["RESTful APIs", "Microservices", "Database integration", "Cloud deployment"]
    },
    {
      title: "Jetpack Compose UI",
      description: "Build modern, declarative user interfaces using Android's Jetpack Compose toolkit.",
      features: ["Declarative UI", "State management", "Custom components", "Animation support"]
    },
    {
      title: "Legacy Java Migration",
      description: "Migrate existing Java Android projects to Kotlin for improved code quality and developer experience.",
      features: ["Gradual migration", "Java interoperability", "Code modernization", "Performance improvements"]
    },
    {
      title: "Testing & Quality Assurance",
      description: "Implement comprehensive testing strategies using Kotlin testing frameworks and tools.",
      features: ["Unit testing", "UI testing", "Integration testing", "Test automation"]
    }
  ];

  const benefits = [
    "Concise Syntax",
    "Null Safety",
    "Java Interoperability",
    "Google Preferred",
    "Modern Features",
    "Coroutines Support",
    "Cross-Platform",
    "Strong Community"
  ];

  const technologies = [
    "Kotlin 1.9+",
    "Android Studio",
    "Jetpack Compose",
    "Android Jetpack",
    "Coroutines",
    "Ktor",
    "Room Database",
    "Retrofit",
    "Dagger Hilt",
    "Firebase",
    "Gradle",
    "KMM"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Kotlin Development Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Build modern Android applications with Kotlin - Google&apos;s preferred language for Android development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Project
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
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
              Our Kotlin Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Kotlin development solutions for Android and multiplatform applications
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
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
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
              Why Choose Kotlin for Development?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kotlin offers modern language features for efficient and safe Android development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-purple-50 transition-colors">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
              Modern Android development tools and frameworks for Kotlin applications
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
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your Android App with Kotlin?
          </h2>
          <p className="text-xl mb-8 text-indigo-100 max-w-3xl mx-auto">
            Let&apos;s create powerful Android applications using Google&apos;s modern Kotlin programming language
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

export default KotlinDevelopmentPage;
