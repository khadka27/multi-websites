import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PWA Development Services | Progressive Web Applications",
  description:
    "Professional PWA development services for progressive web applications. Build app-like experiences with offline functionality and push notifications.",
  keywords: [
    "PWA development",
    "progressive web apps",
    "web app development",
    "offline functionality",
    "push notifications",
    "service workers",
    "app-like experience",
    "mobile web apps",
    "installable web apps",
    "responsive web apps",
  ],
  authors: [{ name: "wp development" }],
  openGraph: {
    title: "Professional PWA Development Services",
    description:
      "Build progressive web applications with app-like experiences. Expert PWA development with offline functionality and native features.",
    type: "website",
    images: [
      {
        url: "/logo/websiteprogrammingdevelopmentlogo.png",
        width: 1200,
        height: 630,
        alt: "PWA Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional PWA Development Services",
    description:
      "Build progressive web applications with app-like experiences. Expert PWA development with offline functionality and native features.",
    images: ["/logo/websiteprogrammingdevelopmentlogo.png"],
  },
};

const PWADevelopmentPage = () => {
  const services = [
    {
      title: "Custom PWA Development",
      description:
        "Build progressive web applications with native app-like experiences and advanced web capabilities.",
      features: [
        "App-like interface",
        "Responsive design",
        "Cross-platform",
        "Fast loading",
      ],
    },
    {
      title: "Offline Functionality",
      description:
        "Implement service workers and caching strategies for seamless offline user experiences.",
      features: [
        "Service workers",
        "Offline caching",
        "Background sync",
        "Offline-first design",
      ],
    },
    {
      title: "Push Notifications",
      description:
        "Integrate push notification systems to engage users with timely and relevant updates.",
      features: [
        "Web push notifications",
        "User engagement",
        "Real-time updates",
        "Custom notifications",
      ],
    },
    {
      title: "App Store Distribution",
      description:
        "Deploy PWAs to app stores and enable installation on users' devices for better accessibility.",
      features: [
        "App store publishing",
        "Install prompts",
        "Home screen shortcuts",
        "Native distribution",
      ],
    },
  ];

  const technologies = [
    "React",
    "Vue.js",
    "Angular",
    "Service Workers",
    "Workbox",
    "Manifest.json",
    "WebAssembly",
    "IndexedDB",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              PWA Development Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100 max-w-3xl mx-auto">
              Build progressive web applications that deliver native app
              experiences in the browser
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your PWA
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
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
              Our PWA Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive progressive web application solutions for modern
              user experiences
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
                      <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
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
      <section className="py-20 bg-gradient-to-r from-teal-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your PWA?
          </h2>
          <p className="text-xl mb-8 text-teal-100 max-w-3xl mx-auto">
            Let&apos;s create a progressive web application that delivers
            native-like experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Development
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PWADevelopmentPage;
