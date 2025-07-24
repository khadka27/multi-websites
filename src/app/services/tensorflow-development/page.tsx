import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TensorFlow Development Services | Machine Learning & AI Solutions",
  description:
    "Professional TensorFlow development services for machine learning and AI applications. Build scalable ML models and neural networks with TensorFlow.",
  keywords: [
    "TensorFlow development",
    "machine learning",
    "neural networks",
    "deep learning",
    "AI development",
    "TensorFlow models",
    "Keras development",
    "computer vision",
    "natural language processing",
    "artificial intelligence",
  ],
  authors: [{ name: "wp development" }],
  openGraph: {
    title: "Professional TensorFlow Development Services",
    description:
      "Build powerful machine learning applications with TensorFlow. Expert development services for AI solutions and neural networks.",
    type: "website",
    images: [
      {
        url: "/logo/websiteprogrammingdevelopmentlogo.png",
        width: 1200,
        height: 630,
        alt: "TensorFlow Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional TensorFlow Development Services",
    description:
      "Build powerful machine learning applications with TensorFlow. Expert development services for AI solutions and neural networks.",
    images: ["/logo/websiteprogrammingdevelopmentlogo.png"],
  },
};

const TensorFlowDevelopmentPage = () => {
  const services = [
    {
      title: "Machine Learning Models",
      description:
        "Develop custom machine learning models using TensorFlow for various business applications and data analysis.",
      features: [
        "Custom ML models",
        "Supervised learning",
        "Unsupervised learning",
        "Reinforcement learning",
      ],
    },
    {
      title: "Deep Learning Solutions",
      description:
        "Build advanced neural networks and deep learning applications using TensorFlow and Keras frameworks.",
      features: [
        "Neural networks",
        "Deep learning",
        "Keras integration",
        "Model optimization",
      ],
    },
    {
      title: "Computer Vision Applications",
      description:
        "Create computer vision solutions for image recognition, object detection, and visual analysis tasks.",
      features: [
        "Image classification",
        "Object detection",
        "Image processing",
        "Visual recognition",
      ],
    },
    {
      title: "Production Deployment",
      description:
        "Deploy TensorFlow models to production environments with TensorFlow Serving and optimization.",
      features: [
        "TensorFlow Serving",
        "Model optimization",
        "Cloud deployment",
        "Edge computing",
      ],
    },
  ];

  const technologies = [
    "TensorFlow",
    "Keras",
    "Python",
    "TensorBoard",
    "TF Serving",
    "NumPy",
    "Pandas",
    "Scikit-learn",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              TensorFlow Development Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-yellow-100 max-w-3xl mx-auto">
              Build intelligent applications with TensorFlow machine learning
              framework
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Project
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-yellow-600 transition-colors"
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
              Our TensorFlow Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive machine learning solutions with TensorFlow framework
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
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
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
      <section className="py-20 bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build ML with TensorFlow?
          </h2>
          <p className="text-xl mb-8 text-orange-100 max-w-3xl mx-auto">
            Let&apos;s create intelligent solutions using TensorFlow&apos;s
            machine learning capabilities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-500 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TensorFlowDevelopmentPage;
