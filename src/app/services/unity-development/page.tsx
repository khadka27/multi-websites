import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Unity Game Development Services | 2D & 3D Games",
  description:
    "Professional Unity game development services for mobile, PC, and console games. Build engaging 2D and 3D games with Unity engine.",
  keywords: [
    "Unity development",
    "game development",
    "mobile games",
    "3D games",
    "2D games",
    "Unity engine",
    "game programming",
    "indie games",
    "console games",
    "AR/VR games",
  ],
  authors: [{ name: "wp development" }],
  openGraph: {
    title: "Professional Unity Game Development Services",
    description:
      "Build engaging games with Unity engine. Expert development services for mobile, PC, and console game development.",
    type: "website",
    images: [
      {
        url: "/logo/websiteprogrammingdevelopmentlogo.png",
        width: 1200,
        height: 630,
        alt: "Unity Game Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Unity Game Development Services",
    description:
      "Build engaging games with Unity engine. Expert development services for mobile, PC, and console game development.",
    images: ["/logo/websiteprogrammingdevelopmentlogo.png"],
  },
};

const UnityDevelopmentPage = () => {
  const services = [
    {
      title: "Mobile Game Development",
      description:
        "Create engaging mobile games for iOS and Android platforms using Unity's cross-platform capabilities.",
      features: [
        "Cross-platform",
        "Touch controls",
        "Mobile optimization",
        "App store deployment",
      ],
    },
    {
      title: "3D Game Development",
      description:
        "Build immersive 3D games with advanced graphics, physics, and interactive gameplay mechanics.",
      features: [
        "3D graphics",
        "Physics simulation",
        "Advanced lighting",
        "Performance optimization",
      ],
    },
    {
      title: "AR/VR Game Development",
      description:
        "Develop augmented and virtual reality games using Unity's XR toolkit for immersive experiences.",
      features: [
        "AR integration",
        "VR support",
        "Hand tracking",
        "Spatial audio",
      ],
    },
    {
      title: "Multiplayer Games",
      description:
        "Create online multiplayer games with networking, matchmaking, and real-time synchronization.",
      features: [
        "Network programming",
        "Matchmaking",
        "Real-time sync",
        "Server architecture",
      ],
    },
  ];

  const technologies = [
    "Unity Engine",
    "C# Scripting",
    "Visual Studio",
    "Blender",
    "Photon",
    "Unity Analytics",
    "AR Foundation",
    "XR Toolkit",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Unity Game Development Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Build engaging games for all platforms with Unity&apos;s powerful
              game engine
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Game
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
              Our Unity Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive game development solutions with Unity engine
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Your Game?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Let&apos;s bring your game ideas to life with Unity&apos;s powerful
            development platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Development
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UnityDevelopmentPage;
