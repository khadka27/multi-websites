import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Science Services | Analytics & Insights | MVP Development",
  description:
    "Professional data science services for business analytics, data visualization, statistical analysis, and actionable insights from your data.",
  keywords:
    "data science, analytics, data visualization, statistical analysis, business intelligence, data insights",
};

export default function DataSciencePage() {
  const features = [
    {
      icon: "📊",
      title: "Data Analytics",
      description: "Transform raw data into actionable insights",
    },
    {
      icon: "📈",
      title: "Visualization",
      description: "Interactive dashboards and reports",
    },
    {
      icon: "🔍",
      title: "Statistical Analysis",
      description: "Advanced statistical modeling and analysis",
    },
    {
      icon: "🎯",
      title: "Business Intelligence",
      description: "Data-driven decision making",
    },
    {
      icon: "📉",
      title: "Trend Analysis",
      description: "Identify patterns and forecasting",
    },
    {
      icon: "🔬",
      title: "Data Mining",
      description: "Extract valuable insights from big data",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="text-4xl">📊</span>
              <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-lg text-sm font-medium">
                Data Science
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Data-Driven Insights
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Unlock the power of your data with professional data science
              services. From analytics to visualization, turn data into
              strategic advantages.
            </p>
            <Link
              href="/contact"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Data Science Project
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">
            Data Science Services
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
            Ready for Data Insights?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Transform your data into strategic business advantages.
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
