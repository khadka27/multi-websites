import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Game Development Services | Custom Gaming Solutions",
  description:
    "Professional game development services for all platforms. Build engaging mobile, PC, console, and web games with custom gameplay mechanics.",
  keywords: [
    "game development",
    "mobile games",
    "PC games",
    "console games",
    "web games",
    "indie games",
    "game programming",
    "game design",
    "multiplayer games",
    "gaming solutions",
  ],
  authors: [{ name: "wp development" }],
  openGraph: {
    title: "Professional Game Development Services",
    description:
      "Build engaging games for all platforms. Expert development services for mobile, PC, console, and web game development.",
    type: "website",
    images: [
      {
        url: "/logo/websiteprogrammingdevelopmentlogo.png",
        width: 1200,
        height: 630,
        alt: "Game Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Game Development Services",
    description:
      "Build engaging games for all platforms. Expert development services for mobile, PC, console, and web game development.",
    images: ["/logo/websiteprogrammingdevelopmentlogo.png"],
  },
};

const GameDevelopmentPage = () => {
  const services = [
    {
      title: "Mobile Game Development",
      description:
        "Create addictive mobile games for iOS and Android with engaging gameplay and monetization strategies.",
      features: [
        "iOS/Android games",
        "Touch controls",
        "In-app purchases",
        "Social features",
      ],
    },
    {
      title: "PC & Console Games",
      description:
        "Develop high-quality PC and console games with advanced graphics and complex gameplay mechanics.",
      features: [
        "PC gaming",
        "Console development",
        "High-end graphics",
        "Controller support",
      ],
    },
    {
      title: "Web-Based Games",
      description:
        "Build browser-based games using modern web technologies for instant play without downloads.",
      features: [
        "HTML5 games",
        "WebGL graphics",
        "No downloads",
        "Cross-browser",
      ],
    },
    {
      title: "Multiplayer Gaming",
      description:
        "Create engaging multiplayer experiences with real-time networking and competitive gameplay.",
      features: [
        "Real-time multiplayer",
        "Matchmaking",
        "Leaderboards",
        "Social gaming",
      ],
    },
  ];

  const technologies = [
    "Unity",
    "Unreal Engine",
    "C++",
    "C#",
    "JavaScript",
    "WebGL",
    "Photon",
    "Steam SDK",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Game Development Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100 max-w-3xl mx-auto">
              Build engaging games for all platforms with cutting-edge
              technology and creative design
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Game
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
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
              Our Game Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive gaming solutions for all platforms and genres
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
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Your Game?
          </h2>
          <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
            Let&apos;s bring your gaming vision to life with professional
            development expertise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Development
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

export default GameDevelopmentPage;
