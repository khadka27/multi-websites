import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Professional Web Development Services | MVP Development",
  description:
    "Expert web development services for modern, scalable, and user-friendly websites. Custom solutions using React, Node.js, and cutting-edge technologies.",
  keywords:
    "web development, custom websites, responsive design, React, Node.js, full-stack development",
  openGraph: {
    title: "Professional Web Development Services | MVP Development",
    description:
      "Expert web development services for modern, scalable, and user-friendly websites.",
    type: "website",
  },
};

export default function WebDevelopmentPage() {
  const features = [
    {
      icon: "🚀",
      title: "Performance Optimized",
      description:
        "Lightning-fast websites with optimized loading speeds and Core Web Vitals compliance.",
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description:
        "Perfect compatibility across all devices - desktop, tablet, and mobile platforms.",
    },
    {
      icon: "🔒",
      title: "Security First",
      description:
        "Advanced security measures including SSL, data encryption, and vulnerability protection.",
    },
    {
      icon: "⚡",
      title: "Modern Technologies",
      description:
        "Built with cutting-edge frameworks like React, Next.js, and Node.js for scalability.",
    },
    {
      icon: "🎯",
      title: "SEO Optimized",
      description:
        "Search engine friendly architecture with meta optimization and structured data.",
    },
    {
      icon: "🔧",
      title: "Easy Maintenance",
      description:
        "Clean, documented code with content management systems for easy updates.",
    },
  ];

  const technologies = [
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "We analyze your requirements, target audience, and business goals to create a comprehensive development strategy.",
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description:
        "Creating wireframes, mockups, and interactive prototypes to visualize the final product before development.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "Building your website with clean, scalable code while conducting rigorous testing throughout the process.",
    },
    {
      step: "04",
      title: "Launch & Support",
      description:
        "Deploying your website and providing ongoing maintenance, updates, and technical support.",
    },
  ];

  const portfolio = [
    {
      title: "E-commerce Platform",
      description: "Modern online store with advanced features",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      tags: ["React", "Node.js", "PostgreSQL"],
    },
    {
      title: "SaaS Dashboard",
      description: "Analytics platform for business intelligence",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
      tags: ["Next.js", "TypeScript", "MongoDB"],
    },
    {
      title: "Corporate Website",
      description: "Professional business presence online",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      tags: ["React", "Tailwind", "CMS"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-stone-50 to-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-3xl">💻</span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-sm font-medium">
                  Web Development
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
                Professional Web Development Services
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed font-light">
                Transform your ideas into powerful, scalable web applications.
                We create modern, responsive websites that drive business growth
                and deliver exceptional user experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Start Your Project
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
                <Link
                  href="#portfolio"
                  className="inline-flex items-center justify-center bg-white hover:bg-stone-50 text-gray-700 px-8 py-4 rounded-xl font-medium transition-all duration-300 border border-stone-200 hover:border-stone-300"
                >
                  View Our Work
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-white rounded-3xl shadow-2xl border border-stone-200 p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-4">
                  <div className="h-4 bg-stone-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-stone-100 rounded w-3/4 animate-pulse delay-75"></div>
                  <div className="h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-16 bg-stone-100 rounded animate-pulse delay-150"></div>
                    <div className="h-16 bg-stone-100 rounded animate-pulse delay-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
              Why Choose Our Web Development Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
              We deliver cutting-edge web solutions that combine performance,
              security, and user experience to help your business succeed
              online.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-stone-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-stone-100 hover:border-stone-200"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
              Technologies We Master
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              We use the latest and most reliable technologies to build robust,
              scalable web applications.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="group text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={48}
                    height={48}
                    className="mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <h3 className="font-medium text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                    {tech.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
              Our Development Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              A proven methodology that ensures successful project delivery from
              concept to launch.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-stone-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-stone-100 hover:border-stone-200 h-full">
                  <div className="text-4xl font-light text-gray-300 mb-4 group-hover:text-gray-400 transition-colors duration-300">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg
                      className="w-8 h-8 text-stone-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
              Recent Web Development Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Explore some of our successful web development projects that
              showcase our expertise and creativity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-stone-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-stone-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-lg text-gray-300 mb-8 font-light max-w-2xl mx-auto">
            Let&apos;s discuss your web development needs and create a solution
            that drives your business forward. Get started with a free
            consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white hover:bg-stone-100 text-gray-900 px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Free Consultation
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="/blogs"
              className="inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 border border-white/20 hover:border-white/40"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
