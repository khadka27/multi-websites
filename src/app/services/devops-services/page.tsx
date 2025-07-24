import { Metadata } from "next";
import Link from "next/link";
import StructuredData from "../../../components/StructuredData";
import { structuredDataSchemas } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "DevOps Services | CI/CD, Cloud Infrastructure & Automation",
  description:
    "Professional DevOps services for streamlined development workflows. Expert implementation of CI/CD pipelines, cloud infrastructure, containerization, and automated deployment solutions.",
  keywords:
    "DevOps services, CI/CD, cloud infrastructure, containerization, Docker, Kubernetes, automation, deployment, AWS, Azure, Google Cloud",
  alternates: {
    canonical: "/services/devops-services",
  },
  openGraph: {
    title: "DevOps Services | CI/CD, Cloud Infrastructure & Automation",
    description:
      "Professional DevOps services for streamlined development workflows and cloud infrastructure.",
    type: "website",
    url: "/services/devops-services",
    images: [
      {
        url: "/logo/websiteprogrammingdevelopmentlogo.png",
        width: 1200,
        height: 630,
        alt: "DevOps Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevOps Services",
    description: "Professional DevOps services for modern development",
    images: ["/logo/websiteprogrammingdevelopmentlogo.png"],
  },
};

export default function DevOpsServicesPage() {
  const devopsServiceStructuredData = [
    structuredDataSchemas.service(
      "DevOps Services",
      "Professional DevOps services for streamlined development workflows. Expert implementation of CI/CD pipelines, cloud infrastructure, containerization, and automated deployment solutions."
    ),
  ];

  return (
    <>
      <StructuredData data={devopsServiceStructuredData} />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-orange-50 text-orange-700 rounded-full text-sm font-medium mb-6">
              🔧 DevOps Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              DevOps Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Streamline your development workflow with modern DevOps practices.
              Automate deployments, scale infrastructure, and accelerate
              time-to-market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Optimize Your Workflow
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our DevOps Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">🔄</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  CI/CD Pipelines
                </h3>
                <p className="text-gray-600">
                  Automated build, test, and deployment pipelines for faster
                  releases.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">☁️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Cloud Infrastructure
                </h3>
                <p className="text-gray-600">
                  AWS, Azure, and Google Cloud infrastructure setup and
                  management.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">📦</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Containerization
                </h3>
                <p className="text-gray-600">
                  Docker and Kubernetes implementation for scalable deployments.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Monitoring & Logging
                </h3>
                <p className="text-gray-600">
                  Comprehensive monitoring solutions with alerts and dashboards.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">🔐</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Security Integration
                </h3>
                <p className="text-gray-600">
                  DevSecOps practices with automated security scanning.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">⚙️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Infrastructure as Code
                </h3>
                <p className="text-gray-600">
                  Terraform and CloudFormation for reproducible infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tools & Technologies */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Tools & Technologies
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🐙</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  GitHub Actions
                </h3>
                <p className="text-gray-600">Automated workflows and CI/CD</p>
              </div>

              <div>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Jenkins
                </h3>
                <p className="text-gray-600">Enterprise CI/CD automation</p>
              </div>

              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🐳</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Docker
                </h3>
                <p className="text-gray-600">Containerization platform</p>
              </div>

              <div>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">☸️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Kubernetes
                </h3>
                <p className="text-gray-600">Container orchestration</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              DevOps Benefits
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Faster Deployment
                </h3>
                <p className="text-gray-600">
                  Reduce deployment time from hours to minutes with automation.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Higher Reliability
                </h3>
                <p className="text-gray-600">
                  Minimize downtime with automated testing and monitoring.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">💰</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Cost Reduction
                </h3>
                <p className="text-gray-600">
                  Optimize resource usage and reduce operational costs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Streamline Your Workflow?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's implement DevOps best practices for your development team.
            </p>
            <Link
              href="/contact"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start DevOps Transformation
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
