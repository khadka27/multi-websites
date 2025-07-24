import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cloud Migration Services | AWS, Azure & GCP Migration",
  description:
    "Professional cloud migration services for seamless transition to AWS, Azure, and Google Cloud. Migrate applications and infrastructure with zero downtime.",
  keywords: [
    "cloud migration",
    "AWS migration",
    "Azure migration",
    "GCP migration",
    "cloud transformation",
    "infrastructure migration",
    "application migration",
    "cloud consulting",
    "cloud strategy",
    "cloud optimization",
  ],
  authors: [{ name: "wp development" }],
  openGraph: {
    title: "Professional Cloud Migration Services",
    description:
      "Seamlessly migrate to the cloud with expert migration services. AWS, Azure, and Google Cloud migration solutions.",
    type: "website",
    images: [
      {
        url: "/logo/websiteprogrammingdevelopmentlogo.png",
        width: 1200,
        height: 630,
        alt: "Cloud Migration Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Cloud Migration Services",
    description:
      "Seamlessly migrate to the cloud with expert migration services. AWS, Azure, and Google Cloud migration solutions.",
    images: ["/logo/websiteprogrammingdevelopmentlogo.png"],
  },
};

const CloudMigrationPage = () => {
  const services = [
    {
      title: "Application Migration",
      description:
        "Migrate applications to cloud platforms with minimal downtime and optimized performance.",
      features: [
        "Zero downtime migration",
        "Performance optimization",
        "Database migration",
        "Application modernization",
      ],
    },
    {
      title: "Infrastructure Migration",
      description:
        "Transform on-premise infrastructure to cloud-native solutions with enhanced scalability.",
      features: [
        "Infrastructure assessment",
        "Cloud architecture",
        "Network migration",
        "Security configuration",
      ],
    },
    {
      title: "Data Migration",
      description:
        "Securely migrate data to cloud storage solutions with integrity and compliance assurance.",
      features: [
        "Data integrity",
        "Compliance adherence",
        "Backup strategies",
        "Real-time synchronization",
      ],
    },
    {
      title: "Cloud Optimization",
      description:
        "Optimize cloud resources for cost efficiency and performance after successful migration.",
      features: [
        "Cost optimization",
        "Performance tuning",
        "Resource scaling",
        "Monitoring setup",
      ],
    },
  ];

  const technologies = [
    "AWS",
    "Microsoft Azure",
    "Google Cloud",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Ansible",
    "CloudFormation",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cloud Migration Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-sky-100 max-w-3xl mx-auto">
              Seamlessly migrate your infrastructure and applications to the
              cloud with zero downtime
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Migration
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-sky-600 transition-colors"
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
              Our Cloud Migration Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cloud migration solutions for seamless
              transformation
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
                      <span className="w-2 h-2 bg-sky-600 rounded-full mr-3"></span>
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
              Cloud Platforms We Support
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-sky-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Migrate to the Cloud?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Let&apos;s transform your infrastructure with seamless cloud
            migration strategies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Migration
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

export default CloudMigrationPage;
