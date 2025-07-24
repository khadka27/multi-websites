import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "R Development Services | Statistical Computing & Data Analysis",
  description:
    "Professional R development services for statistical computing and data analysis. Build powerful data science applications and statistical models.",
  keywords: [
    "R development",
    "statistical computing",
    "data analysis",
    "R programming",
    "statistical modeling",
    "data science",
    "data visualization",
    "machine learning R",
    "R packages",
    "statistical software",
  ],
  authors: [{ name: "wp development" }],
  openGraph: {
    title: "Professional R Development Services",
    description:
      "Build powerful statistical applications with R programming. Expert development services for data analysis and statistical computing.",
    type: "website",
    images: [
      {
        url: "/logo/websiteprogrammingdevelopmentlogo.png",
        width: 1200,
        height: 630,
        alt: "R Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional R Development Services",
    description:
      "Build powerful statistical applications with R programming. Expert development services for data analysis and statistical computing.",
    images: ["/logo/websiteprogrammingdevelopmentlogo.png"],
  },
};

const RDevelopmentPage = () => {
  const services = [
    {
      title: "Statistical Analysis Applications",
      description:
        "Build comprehensive statistical analysis tools and applications using R for research and business insights.",
      features: [
        "Statistical modeling",
        "Hypothesis testing",
        "Regression analysis",
        "Time series analysis",
      ],
    },
    {
      title: "Data Visualization Solutions",
      description:
        "Create interactive dashboards and visualizations using R for better data understanding and presentation.",
      features: [
        "ggplot2 visualizations",
        "Interactive dashboards",
        "Shiny applications",
        "Custom charts",
      ],
    },
    {
      title: "R Package Development",
      description:
        "Develop custom R packages for specialized statistical functions and data analysis workflows.",
      features: [
        "Custom packages",
        "Function libraries",
        "Documentation",
        "Testing frameworks",
      ],
    },
    {
      title: "Machine Learning Models",
      description:
        "Implement machine learning algorithms and predictive models using R for data-driven decision making.",
      features: [
        "Predictive modeling",
        "Classification",
        "Clustering",
        "Deep learning",
      ],
    },
  ];

  const technologies = [
    "R Language",
    "RStudio",
    "Shiny",
    "ggplot2",
    "dplyr",
    "tidyverse",
    "caret",
    "plotly",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              R Development Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Build powerful statistical computing applications with R
              programming language
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Project
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors"
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
              Our R Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive R programming solutions for statistical computing
              and data analysis
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
                      <span className="w-2 h-2 bg-blue-800 rounded-full mr-3"></span>
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
      <section className="py-20 bg-gradient-to-r from-indigo-800 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build with R?
          </h2>
          <p className="text-xl mb-8 text-indigo-100 max-w-3xl mx-auto">
            Let&apos;s create powerful statistical computing solutions using R
            programming
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-indigo-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-800 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RDevelopmentPage;
