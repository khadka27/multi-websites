import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business Automation Services | Process Automation | MVP Development",
  description:
    "Professional automation services to streamline business processes, reduce manual work, and increase efficiency with custom automation solutions.",
  keywords:
    "business automation, process automation, workflow automation, RPA, efficiency, digital transformation",
};

export default function AutomationPage() {
  const features = [
    {
      icon: "⚙️",
      title: "Process Automation",
      description: "Automate repetitive business processes",
    },
    {
      icon: "🔄",
      title: "Workflow Integration",
      description: "Connect and streamline your workflows",
    },
    {
      icon: "📊",
      title: "Data Processing",
      description: "Automated data collection and analysis",
    },
    {
      icon: "📧",
      title: "Communication Automation",
      description: "Email, notifications, and messaging",
    },
    {
      icon: "🤖",
      title: "RPA Solutions",
      description: "Robotic Process Automation implementation",
    },
    {
      icon: "📈",
      title: "Efficiency Gains",
      description: "Significant time and cost savings",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="text-4xl">⚙️</span>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-sm font-medium">
                Automation Services
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Smart Business Automation
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Streamline your business processes with intelligent automation.
              Reduce manual work, eliminate errors, and boost productivity
              across your organization.
            </p>
            <Link
              href="/contact"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Automation Project
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">
            Automation Solutions
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

      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready to Automate?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your business operations with smart automation.
          </p>
          <Link
            href="/contact"
            className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
