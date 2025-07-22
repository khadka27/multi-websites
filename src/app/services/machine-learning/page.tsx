import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Machine Learning Services | AI Model Development | MVP Development",
  description:
    "Professional machine learning services for predictive analytics, classification, recommendation systems, and custom AI model development.",
  keywords:
    "machine learning, AI models, predictive analytics, data science, neural networks, deep learning",
};

export default function MachineLearningPage() {
  const features = [
    {
      icon: "🧠",
      title: "Custom Models",
      description: "Tailored ML models for your specific needs",
    },
    {
      icon: "📊",
      title: "Predictive Analytics",
      description: "Forecast trends and future outcomes",
    },
    {
      icon: "🎯",
      title: "Classification",
      description: "Categorize and organize your data",
    },
    {
      icon: "💡",
      title: "Recommendations",
      description: "Intelligent recommendation systems",
    },
    {
      icon: "🔍",
      title: "Pattern Recognition",
      description: "Identify hidden patterns in data",
    },
    {
      icon: "⚡",
      title: "Real-time Processing",
      description: "Live ML inference and processing",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="text-4xl">🧠</span>
              <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-lg text-sm font-medium">
                Machine Learning
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Intelligent Machine Learning
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Transform your data into intelligent insights with machine
              learning. From predictive analytics to recommendation systems,
              unlock the power of AI.
            </p>
            <Link
              href="/contact"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start ML Project
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">
            ML Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-stone-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready for AI Intelligence?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Transform your business with machine learning.
          </p>
          <Link
            href="/contact"
            className="bg-white hover:bg-purple-50 text-purple-600 px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
