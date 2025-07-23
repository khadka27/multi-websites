import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Case Studies - wp development",
  description:
    "Explore real-world project examples and success stories showcasing our expertise in web development, mobile apps, and digital solutions.",
  keywords:
    "case studies, project examples, success stories, web development projects, mobile app projects, client testimonials",
  openGraph: {
    title: "Case Studies - wp development",
    description:
      "Real-world examples of successful projects delivered by wp development team.",
    type: "website",
  },
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Platform Redesign",
      client: "TechStore Pro",
      category: "E-commerce",
      duration: "4 months",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      challenge:
        "Legacy e-commerce platform with poor performance and outdated UX",
      solution:
        "Complete redesign with modern tech stack and optimized user experience",
      results: [
        { metric: "Page Load Time", improvement: "75% faster", value: "1.2s" },
        {
          metric: "Conversion Rate",
          improvement: "45% increase",
          value: "3.8%",
        },
        { metric: "Mobile Traffic", improvement: "120% growth", value: "68%" },
        { metric: "Revenue", improvement: "85% increase", value: "$2.4M" },
      ],
      features: [
        "Modern responsive design",
        "Advanced search & filtering",
        "One-click checkout",
        "Real-time inventory",
        "Analytics dashboard",
        "Multi-payment support",
      ],
      testimonial: {
        text: "The new platform exceeded our expectations. Sales have doubled, and customer feedback has been overwhelmingly positive.",
        author: "Sarah Johnson",
        position: "CEO, TechStore Pro",
      },
    },
    {
      id: 2,
      title: "Mobile Banking Application",
      client: "SecureBank Digital",
      category: "FinTech",
      duration: "6 months",
      technologies: ["React Native", "Node.js", "MongoDB", "AWS"],
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      challenge:
        "Need for secure, user-friendly mobile banking solution with advanced features",
      solution:
        "Cross-platform mobile app with biometric authentication and real-time notifications",
      results: [
        {
          metric: "User Adoption",
          improvement: "300% increase",
          value: "250K users",
        },
        {
          metric: "Transaction Speed",
          improvement: "60% faster",
          value: "2.1s",
        },
        {
          metric: "Security Score",
          improvement: "100% compliant",
          value: "AAA+",
        },
        {
          metric: "Customer Satisfaction",
          improvement: "40% increase",
          value: "4.8/5",
        },
      ],
      features: [
        "Biometric authentication",
        "Real-time notifications",
        "QR code payments",
        "Investment tracking",
        "Bill payment automation",
        "Expense categorization",
      ],
      testimonial: {
        text: "Outstanding security implementation and user experience. Our customers love the new app.",
        author: "Michael Chen",
        position: "CTO, SecureBank Digital",
      },
    },
    {
      id: 3,
      title: "SaaS Analytics Dashboard",
      client: "DataInsights Corp",
      category: "SaaS",
      duration: "5 months",
      technologies: ["React", "D3.js", "Python", "PostgreSQL"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      challenge:
        "Complex data visualization requirements with real-time updates and custom analytics",
      solution:
        "Interactive dashboard with advanced charts, real-time data processing, and custom reports",
      results: [
        {
          metric: "Data Processing",
          improvement: "200% faster",
          value: "10M records/min",
        },
        {
          metric: "User Engagement",
          improvement: "180% increase",
          value: "45 min/session",
        },
        {
          metric: "Report Generation",
          improvement: "90% faster",
          value: "3 seconds",
        },
        {
          metric: "Client Retention",
          improvement: "55% increase",
          value: "94%",
        },
      ],
      features: [
        "Real-time data visualization",
        "Custom report builder",
        "Advanced filtering",
        "Export capabilities",
        "Team collaboration",
        "API integrations",
      ],
      testimonial: {
        text: "The dashboard transformed how we analyze data. Our clients can now make faster, more informed decisions.",
        author: "Emily Rodriguez",
        position: "Product Manager, DataInsights Corp",
      },
    },
    {
      id: 4,
      title: "Healthcare Management System",
      client: "MediCare Plus",
      category: "Healthcare",
      duration: "8 months",
      technologies: ["Angular", "Spring Boot", "MySQL", "Docker"],
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      challenge:
        "Streamline patient management, appointment scheduling, and medical records",
      solution:
        "Comprehensive healthcare management system with patient portal and staff dashboard",
      results: [
        {
          metric: "Appointment Efficiency",
          improvement: "70% improvement",
          value: "95% utilization",
        },
        {
          metric: "Patient Satisfaction",
          improvement: "50% increase",
          value: "4.7/5",
        },
        {
          metric: "Administrative Time",
          improvement: "60% reduction",
          value: "2 hours/day",
        },
        { metric: "Error Rate", improvement: "85% reduction", value: "0.5%" },
      ],
      features: [
        "Patient portal",
        "Appointment scheduling",
        "Medical records management",
        "Billing integration",
        "Prescription management",
        "Staff collaboration tools",
      ],
      testimonial: {
        text: "This system revolutionized our operations. Staff productivity increased dramatically, and patients love the convenience.",
        author: "Dr. David Park",
        position: "Director, MediCare Plus",
      },
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description:
        "We dive deep into understanding your business needs, challenges, and goals.",
      icon: "🔍",
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description:
        "Develop a comprehensive strategy with clear milestones and deliverables.",
      icon: "📋",
    },
    {
      step: "03",
      title: "Design & Development",
      description:
        "Create intuitive designs and build robust, scalable solutions.",
      icon: "⚡",
    },
    {
      step: "04",
      title: "Testing & Optimization",
      description:
        "Rigorous testing and performance optimization for production readiness.",
      icon: "🧪",
    },
    {
      step: "05",
      title: "Launch & Support",
      description: "Smooth deployment with ongoing support and maintenance.",
      icon: "🚀",
    },
  ];

  const stats = [
    { number: "200+", label: "Projects Delivered", icon: "📊" },
    { number: "150+", label: "Happy Clients", icon: "😊" },
    { number: "98%", label: "Success Rate", icon: "✅" },
    { number: "4.9/5", label: "Client Rating", icon: "⭐" },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "E-commerce": "bg-blue-100 text-blue-800",
      FinTech: "bg-green-100 text-green-800",
      SaaS: "bg-purple-100 text-purple-800",
      Healthcare: "bg-red-100 text-red-800",
      Education: "bg-yellow-100 text-yellow-800",
      Entertainment: "bg-pink-100 text-pink-800",
    };
    return (
      colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore real-world projects that showcase our expertise in
              delivering exceptional digital solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#case-studies"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                View Case Studies
              </Link>
              <Link
                href="/contact"
                className="bg-white hover:bg-gray-50 text-purple-600 px-8 py-3 rounded-lg font-medium border border-purple-600 transition-colors duration-200"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50" id="case-studies">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Case Studies
            </h2>
            <p className="text-lg text-gray-600">
              Detailed breakdowns of successful projects and their impact
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative h-80 rounded-xl overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                        study.category
                      )}`}
                    >
                      {study.category}
                    </span>
                    <span className="text-gray-500">{study.duration}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {study.title}
                  </h3>
                  <p className="text-purple-600 font-medium mb-4">
                    {study.client}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Challenge:
                    </h4>
                    <p className="text-gray-600 mb-4">{study.challenge}</p>

                    <h4 className="font-semibold text-gray-900 mb-2">
                      Solution:
                    </h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Key Results:
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {study.results.map((result, resultIndex) => (
                        <div
                          key={resultIndex}
                          className="text-center p-3 bg-white rounded-lg border"
                        >
                          <div className="text-xl font-bold text-purple-600 mb-1">
                            {result.value}
                          </div>
                          <div className="text-xs text-gray-600 mb-1">
                            {result.improvement}
                          </div>
                          <div className="text-sm font-medium text-gray-900">
                            {result.metric}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-gray-700 italic mb-3">
                      "{study.testimonial.text}"
                    </p>
                    <div className="text-sm">
                      <span className="font-semibold text-gray-900">
                        {study.testimonial.author}
                      </span>
                      <span className="text-gray-600">
                        , {study.testimonial.position}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Proven Process
            </h2>
            <p className="text-lg text-gray-600">
              A systematic approach that delivers consistent results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-purple-600 rounded-full flex items-center justify-center text-sm font-bold text-purple-600">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-purple-200 transform translate-x-2"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-lg text-purple-100 mb-8">
            Join our satisfied clients and transform your business with
            innovative digital solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-purple-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Discuss Your Project
            </Link>
            <Link
              href="/services"
              className="bg-transparent hover:bg-white/10 text-white px-8 py-3 rounded-lg font-medium border border-white transition-colors duration-200"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
