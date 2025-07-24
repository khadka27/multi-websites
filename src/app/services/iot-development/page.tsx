import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IoT Development Services | Internet of Things Solutions",
  description:
    "Professional IoT development services for connected devices and smart systems. Build scalable Internet of Things applications and embedded solutions.",
  keywords: [
    "IoT development",
    "Internet of Things",
    "connected devices",
    "smart systems",
    "embedded systems",
    "IoT applications",
    "sensor networks",
    "smart home",
    "industrial IoT",
    "device connectivity",
  ],
  authors: [{ name: "wp development" }],
  openGraph: {
    title: "Professional IoT Development Services",
    description:
      "Build connected IoT solutions for smart devices and systems. Expert development services for Internet of Things applications.",
    type: "website",
    images: [
      {
        url: "/logo/websiteprogrammingdevelopmentlogo.png",
        width: 1200,
        height: 630,
        alt: "IoT Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional IoT Development Services",
    description:
      "Build connected IoT solutions for smart devices and systems. Expert development services for Internet of Things applications.",
    images: ["/logo/websiteprogrammingdevelopmentlogo.png"],
  },
};

const IoTDevelopmentPage = () => {
  const services = [
    {
      title: "Smart Device Development",
      description:
        "Create intelligent connected devices with sensors, actuators, and wireless communication capabilities.",
      features: [
        "Sensor integration",
        "Wireless connectivity",
        "Device firmware",
        "Mobile control apps",
      ],
    },
    {
      title: "Industrial IoT Solutions",
      description:
        "Develop industrial IoT systems for manufacturing, monitoring, and automation applications.",
      features: [
        "Industrial sensors",
        "SCADA integration",
        "Predictive maintenance",
        "Real-time monitoring",
      ],
    },
    {
      title: "Smart Home Systems",
      description:
        "Build comprehensive smart home automation systems with voice control and mobile app integration.",
      features: [
        "Home automation",
        "Voice control",
        "Security systems",
        "Energy management",
      ],
    },
    {
      title: "Cloud IoT Platforms",
      description:
        "Develop cloud-based IoT platforms for device management, data analytics, and remote monitoring.",
      features: [
        "Cloud integration",
        "Data analytics",
        "Device management",
        "Remote monitoring",
      ],
    },
  ];

  const technologies = [
    "Arduino",
    "Raspberry Pi",
    "ESP32",
    "MQTT",
    "AWS IoT",
    "Azure IoT",
    "Node.js",
    "Python",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IoT Development Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-teal-100 max-w-3xl mx-auto">
              Build smart connected devices and IoT solutions for the future of
              technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Project
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors"
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
              Our IoT Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Internet of Things solutions for smart connected
              devices
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
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build IoT Solutions?
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
            Let&apos;s create smart connected devices that transform how we
            interact with technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IoTDevelopmentPage;
