import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PyTorch Development Services | Deep Learning & AI Applications",
  description:
    "Professional PyTorch development services for deep learning and AI applications. Build neural networks and machine learning models with PyTorch.",
  keywords: [
    "PyTorch development",
    "deep learning",
    "neural networks",
    "machine learning",
    "AI development",
    "computer vision",
    "natural language processing",
    "PyTorch models",
    "deep learning frameworks",
    "artificial intelligence",
  ],
  authors: [{ name: "wp development" }],
  openGraph: {
    title: "Professional PyTorch Development Services",
    description:
      "Build powerful AI applications with PyTorch deep learning framework. Expert development services for machine learning and neural networks.",
    type: "website",
    images: [
      {
        url: "/logo/websiteprogrammingdevelopmentlogo.png",
        width: 1200,
        height: 630,
        alt: "PyTorch Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional PyTorch Development Services",
    description:
      "Build powerful AI applications with PyTorch deep learning framework. Expert development services for machine learning and neural networks.",
    images: ["/logo/websiteprogrammingdevelopmentlogo.png"],
  },
};

const PyTorchDevelopmentPage = () => {
  const services = [
    {
      title: "Neural Network Development",
      description:
        "Build custom neural networks using PyTorch for various AI applications and deep learning tasks.",
      features: [
        "Custom architectures",
        "CNN development",
        "RNN/LSTM networks",
        "Transformer models",
      ],
    },
    {
      title: "Computer Vision Solutions",
      description:
        "Develop computer vision applications using PyTorch for image recognition and object detection.",
      features: [
        "Image classification",
        "Object detection",
        "Image segmentation",
        "Face recognition",
      ],
    },
    {
      title: "Natural Language Processing",
      description:
        "Create NLP applications with PyTorch for text analysis, sentiment analysis, and language models.",
      features: [
        "Text classification",
        "Sentiment analysis",
        "Language models",
        "Named entity recognition",
      ],
    },
    {
      title: "Model Deployment",
      description:
        "Deploy PyTorch models to production environments with optimization and scaling capabilities.",
      features: [
        "Model optimization",
        "TorchScript",
        "Cloud deployment",
        "Edge deployment",
      ],
    },
  ];

  const technologies = [
    "PyTorch",
    "Python",
    "TorchVision",
    "CUDA",
    "NumPy",
    "Pandas",
    "Jupyter",
    "Docker",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              PyTorch Development Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto">
              Build powerful AI applications with PyTorch deep learning
              framework
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
              Our PyTorch Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive deep learning solutions with PyTorch framework
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
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build AI with PyTorch?
          </h2>
          <p className="text-xl mb-8 text-red-100 max-w-3xl mx-auto">
            Let&apos;s create intelligent applications using PyTorch&apos;s
            powerful deep learning capabilities
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

export default PyTorchDevelopmentPage;
