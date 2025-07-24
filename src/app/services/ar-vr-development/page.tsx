import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AR/VR Development Services | Augmented & Virtual Reality",
  description:
    "Professional AR/VR development services for immersive experiences. Build augmented reality and virtual reality applications for business and entertainment.",
  keywords: [
    "AR development",
    "VR development",
    "augmented reality",
    "virtual reality",
    "mixed reality",
    "immersive experiences",
    "AR apps",
    "VR applications",
    "3D development",
    "Unity development",
  ],
  authors: [{ name: "wp development" }],
  openGraph: {
    title: "Professional AR/VR Development Services",
    description:
      "Create immersive experiences with AR/VR development. Expert services for augmented reality and virtual reality applications across industries.",
    type: "website",
    images: [
      {
        url: "/logo/websiteprogrammingdevelopmentlogo.png",
        width: 1200,
        height: 630,
        alt: "AR/VR Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional AR/VR Development Services",
    description:
      "Create immersive experiences with AR/VR development. Expert services for augmented reality and virtual reality applications across industries.",
    images: ["/logo/websiteprogrammingdevelopmentlogo.png"],
  },
};

const ARVRDevelopmentPage = () => {
  const services = [
    {
      title: "Augmented Reality (AR) Apps",
      description:
        "Develop AR applications that overlay digital content onto the real world for enhanced user experiences.",
      features: [
        "Object recognition",
        "Marker-based AR",
        "Markerless AR",
        "3D visualization",
      ],
    },
    {
      title: "Virtual Reality (VR) Experiences",
      description:
        "Create immersive VR environments for training, entertainment, and business applications.",
      features: [
        "360° environments",
        "Interactive simulations",
        "VR training",
        "Gaming experiences",
      ],
    },
    {
      title: "Mixed Reality Solutions",
      description:
        "Build mixed reality applications that combine AR and VR technologies for hybrid experiences.",
      features: [
        "Spatial computing",
        "Hand tracking",
        "Voice commands",
        "Cross-platform support",
      ],
    },
    {
      title: "Industrial AR/VR",
      description:
        "Develop AR/VR solutions for manufacturing, maintenance, and industrial training applications.",
      features: [
        "Equipment visualization",
        "Remote assistance",
        "Safety training",
        "Process optimization",
      ],
    },
    {
      title: "Educational VR/AR",
      description:
        "Create immersive educational content and training programs using AR/VR technologies.",
      features: [
        "Interactive learning",
        "Virtual classrooms",
        "3D simulations",
        "Skill training",
      ],
    },
    {
      title: "WebAR/WebVR",
      description:
        "Build browser-based AR/VR experiences accessible without additional app downloads.",
      features: [
        "Browser-based",
        "Cross-platform",
        "No app required",
        "WebGL/WebXR",
      ],
    },
  ];

  const industries = [
    {
      name: "Healthcare",
      description:
        "Medical training, surgical simulation, and patient treatment visualization",
    },
    {
      name: "Education",
      description:
        "Immersive learning experiences and virtual classroom environments",
    },
    {
      name: "Real Estate",
      description: "Virtual property tours and architectural visualization",
    },
    {
      name: "Retail",
      description: "Virtual try-on experiences and product visualization",
    },
    {
      name: "Manufacturing",
      description:
        "Assembly training, equipment maintenance, and quality control",
    },
    {
      name: "Entertainment",
      description: "Gaming, interactive media, and immersive storytelling",
    },
  ];

  const technologies = [
    "Unity 3D",
    "Unreal Engine",
    "ARKit (iOS)",
    "ARCore (Android)",
    "Vuforia",
    "8th Wall",
    "WebXR",
    "A-Frame",
    "Three.js",
    "C# Scripting",
    "Blender",
    "Maya",
  ];

  const benefits = [
    "Enhanced Engagement",
    "Immersive Training",
    "Cost Reduction",
    "Remote Collaboration",
    "Data Visualization",
    "Improved Safety",
    "Innovation Advantage",
    "Customer Experience",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AR/VR Development Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-cyan-100 max-w-3xl mx-auto">
              Create immersive experiences that transform how people interact
              with digital content
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Project
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
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
              Our AR/VR Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive immersive technology solutions for every industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      <span className="w-2 h-2 bg-cyan-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AR/VR solutions tailored to specific industry needs and challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, industryIndex) => (
              <div
                key={`industry-${industryIndex}`}
                className="bg-gray-50 rounded-xl p-8 hover:bg-cyan-50 transition-colors"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {industry.name}
                </h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of AR/VR Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with immersive technology advantages
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, benefitIndex) => (
              <div
                key={`benefit-${benefitIndex}`}
                className="text-center p-6 rounded-lg bg-white hover:bg-cyan-50 transition-colors"
              >
                <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-lg font-bold">
                    {benefitIndex + 1}
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge AR/VR development tools and platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Enter the Immersive World?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Let&apos;s create revolutionary AR/VR experiences that engage and
            inspire your audience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Project
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

export default ARVRDevelopmentPage;
