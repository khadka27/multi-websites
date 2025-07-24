import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Desktop Application Development Services | Cross-Platform Apps",
  description:
    "Professional desktop application development services for Windows, macOS, and Linux. Build powerful cross-platform desktop software solutions.",
  keywords: [
    "desktop development",
    "desktop applications",
    "cross-platform apps",
    "Windows development",
    "macOS development",
    "Linux development",
    "Electron apps",
    "native desktop",
    "software development",
    "desktop software",
  ],
  authors: [{ name: "wp development" }],
  openGraph: {
    title: "Professional Desktop Application Development Services",
    description:
      "Build powerful desktop applications for Windows, macOS, and Linux. Expert cross-platform development services for desktop software.",
    type: "website",
    images: [
      {
        url: "/logo/websiteprogrammingdevelopmentlogo.png",
        width: 1200,
        height: 630,
        alt: "Desktop Application Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Desktop Application Development Services",
    description:
      "Build powerful desktop applications for Windows, macOS, and Linux. Expert cross-platform development services for desktop software.",
    images: ["/logo/websiteprogrammingdevelopmentlogo.png"],
  },
};

const DesktopDevelopmentPage = () => {
  const services = [
    {
      title: "Cross-Platform Applications",
      description:
        "Build desktop applications that run seamlessly across Windows, macOS, and Linux platforms.",
      features: [
        "Multi-platform support",
        "Consistent UI/UX",
        "Single codebase",
        "Native performance",
      ],
    },
    {
      title: "Native Desktop Apps",
      description:
        "Develop platform-specific applications with native performance and operating system integration.",
      features: [
        "Native APIs",
        "OS integration",
        "High performance",
        "Platform-specific features",
      ],
    },
    {
      title: "Electron Applications",
      description:
        "Create modern desktop apps using web technologies with Electron framework for rapid development.",
      features: [
        "Web technologies",
        "Rapid development",
        "Rich UI",
        "Auto-updates",
      ],
    },
    {
      title: "Enterprise Software",
      description:
        "Build robust enterprise desktop applications with advanced security and data management features.",
      features: [
        "Enterprise security",
        "Data management",
        "User permissions",
        "Scalable architecture",
      ],
    },
  ];

  const technologies = [
    "Electron",
    "C++",
    "C# .NET",
    "Qt",
    "Java",
    "Python",
    "Rust",
    "Swift",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Desktop Application Development
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Build powerful desktop software for Windows, macOS, and Linux
              platforms
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Project
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors"
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
              Our Desktop Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive desktop application solutions for all platforms
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
                      <span className="w-2 h-2 bg-gray-700 rounded-full mr-3"></span>
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
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your Desktop Application?
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
            Let&apos;s create powerful desktop software that works across all
            platforms
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesktopDevelopmentPage;
