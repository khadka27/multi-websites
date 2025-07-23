import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing Plans | Professional Development Services",
  description:
    "Transparent pricing for web development, mobile apps, and custom software solutions. Choose the perfect plan for your project needs.",
  keywords:
    "pricing, web development cost, mobile app development pricing, software development rates",
  openGraph: {
    title: "Pricing Plans | Professional Development Services",
    description:
      "Transparent pricing for web development, mobile apps, and custom software solutions.",
    type: "website",
  },
};

export default function PricingPage() {
  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small projects and MVPs",
      price: "2,999",
      period: "per project",
      features: [
        "Basic MVP development",
        "2-3 week delivery",
        "Responsive design",
        "Basic functionality",
        "Code documentation",
        "1 revision round",
        "Email support",
      ],
      cta: "Start Project",
      popular: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      price: "7,999",
      period: "per project",
      features: [
        "Full-featured application",
        "4-6 week delivery",
        "Advanced functionality",
        "Database integration",
        "API development",
        "Admin dashboard",
        "3 revision rounds",
        "Priority support",
        "Deployment assistance",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For complex projects and large teams",
      price: "15,999",
      period: "per project",
      features: [
        "Complex application development",
        "6-8 week delivery",
        "Custom integrations",
        "Scalable architecture",
        "Security implementation",
        "Performance optimization",
        "Unlimited revisions",
        "24/7 support",
        "DevOps & deployment",
        "Post-launch support",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const additionalServices = [
    {
      name: "Mobile App Development",
      startingPrice: "5,999",
      description: "Native iOS & Android apps",
    },
    {
      name: "UI/UX Design",
      startingPrice: "1,999",
      description: "Complete design system",
    },
    {
      name: "API Development",
      startingPrice: "2,499",
      description: "REST & GraphQL APIs",
    },
    {
      name: "Maintenance & Support",
      startingPrice: "499",
      description: "Monthly maintenance",
    },
  ];

  const faqs = [
    {
      question: "What's included in the pricing?",
      answer:
        "All plans include development, testing, basic documentation, and deployment assistance. Higher tiers include more features and support.",
    },
    {
      question: "Do you offer custom pricing?",
      answer:
        "Yes, we provide custom quotes for unique requirements or long-term projects. Contact us for a personalized proposal.",
    },
    {
      question: "What if I need changes after delivery?",
      answer:
        "Each plan includes revision rounds. Additional changes can be handled through our maintenance packages or hourly rates.",
    },
    {
      question: "How do payments work?",
      answer:
        "We typically work with 50% upfront and 50% on completion. For larger projects, we can arrange milestone-based payments.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Simple, Transparent
            <span className="block text-purple-600">Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your project. No hidden fees, no
            surprises. Just honest pricing for quality development work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Get Custom Quote
            </Link>
            <Link
              href="#plans"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-medium rounded-lg transition-colors duration-200"
            >
              View Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="plans" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing options designed to fit projects of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-200 hover:shadow-xl ${
                  plan.popular
                    ? "border-purple-600 scale-105"
                    : "border-gray-100 hover:border-purple-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">
                        ${plan.price}
                      </span>
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start space-x-3"
                      >
                        <div className="flex-shrink-0 w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3 h-3 text-purple-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`block w-full text-center px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                      plan.popular
                        ? "bg-purple-600 hover:bg-purple-700 text-white"
                        : "bg-gray-100 hover:bg-purple-600 hover:text-white text-gray-900"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Extend your project with our specialized services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:border-purple-200 transition-colors duration-200"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-purple-600">
                    ${service.startingPrice}
                  </span>
                  <span className="text-sm text-gray-500">starting at</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Get in touch with us today for a free consultation and custom quote
            for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 hover:bg-gray-100 font-medium rounded-lg transition-colors duration-200"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/company"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-purple-600 font-medium rounded-lg transition-colors duration-200"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
