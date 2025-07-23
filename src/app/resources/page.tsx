import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Developer Resources - wp development",
  description:
    "Access comprehensive tutorials, case studies, cheat sheets, and development resources to enhance your programming skills and project outcomes.",
  keywords:
    "programming tutorials, development resources, web development guides, coding cheat sheets, case studies, developer tools",
  openGraph: {
    title: "Developer Resources - wp development",
    description:
      "Comprehensive collection of development resources, tutorials, and guides for modern web development.",
    type: "website",
  },
};

export default function ResourcesPage() {
  const resourceCategories = [
    {
      title: "Tutorials",
      description:
        "Step-by-step guides and tutorials for modern web development",
      icon: "📚",
      items: [
        {
          name: "HTML & CSS",
          href: "/resources/tutorials/html-css",
          description: "Master the fundamentals of web styling and structure",
          difficulty: "Beginner",
        },
        {
          name: "JavaScript & TypeScript",
          href: "/resources/tutorials/javascript-typescript",
          description: "Learn modern JavaScript and TypeScript development",
          difficulty: "Intermediate",
        },
        {
          name: "Frameworks & Libraries",
          href: "/resources/tutorials/frameworks-libraries",
          description: "Explore React, Next.js, Angular, and more",
          difficulty: "Advanced",
        },
        {
          name: "DevOps & Deployment",
          href: "/resources/tutorials/devops-deployment",
          description: "Deploy and manage applications in production",
          difficulty: "Advanced",
        },
      ],
    },
    {
      title: "Case Studies",
      description: "Real-world project examples and success stories",
      icon: "🎯",
      items: [
        {
          name: "E-commerce Platform",
          href: "/resources/case-studies",
          description: "Building scalable e-commerce solutions",
          type: "Web Application",
        },
        {
          name: "Mobile Banking App",
          href: "/resources/case-studies",
          description: "Secure fintech mobile application development",
          type: "Mobile App",
        },
        {
          name: "SaaS Dashboard",
          href: "/resources/case-studies",
          description: "Data visualization and analytics platform",
          type: "Dashboard",
        },
      ],
    },
    {
      title: "Development Tools",
      description: "Essential tools and resources for developers",
      icon: "🛠️",
      items: [
        {
          name: "Cheat Sheets",
          href: "/resources/cheat-sheets",
          description: "Quick reference guides for popular technologies",
          type: "Reference",
        },
        {
          name: "Tooling & Extensions",
          href: "/resources/tooling-extensions",
          description: "VS Code extensions and development tools",
          type: "Tools",
        },
        {
          name: "Recommended Reading",
          href: "/resources/recommended-reading",
          description: "Books, articles, and learning materials",
          type: "Learning",
        },
      ],
    },
  ];

  const featuredResources = [
    {
      title: "React 18 Complete Guide",
      description:
        "Master React 18 with hooks, suspense, and concurrent features",
      category: "Tutorial",
      readTime: "15 min",
      difficulty: "Intermediate",
      href: "/resources/tutorials/frameworks-libraries",
    },
    {
      title: "TypeScript Best Practices",
      description: "Write better, more maintainable TypeScript code",
      category: "Tutorial",
      readTime: "12 min",
      difficulty: "Intermediate",
      href: "/resources/tutorials/javascript-typescript",
    },
    {
      title: "Modern CSS Techniques",
      description: "Advanced CSS layouts with Grid and Flexbox",
      category: "Tutorial",
      readTime: "10 min",
      difficulty: "Beginner",
      href: "/resources/tutorials/html-css",
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-purple-100 text-purple-800";
      case "Advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Developer Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive collection of tutorials, guides, and tools to
              accelerate your development journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#tutorials"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Browse Tutorials
              </Link>
              <Link
                href="#case-studies"
                className="bg-white hover:bg-gray-50 text-purple-600 px-8 py-3 rounded-lg font-medium border border-purple-600 transition-colors duration-200"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Resources
            </h2>
            <p className="text-lg text-gray-600">
              Hand-picked content to boost your development skills
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <Link
                key={index}
                href={resource.href}
                className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-purple-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-purple-600 font-medium">
                    {resource.category}
                  </span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                      resource.difficulty
                    )}`}
                  >
                    {resource.difficulty}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{resource.readTime}</span>
                  <span className="mx-2">•</span>
                  <span>Read more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Resource Categories
            </h2>
            <p className="text-lg text-gray-600">
              Organized content to help you find exactly what you need
            </p>
          </div>
          <div className="space-y-16">
            {resourceCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                id={category.title.toLowerCase().replace(" ", "-")}
              >
                <div className="text-center mb-8">
                  <span className="text-4xl mb-4 block">{category.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="group bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all duration-300 hover:border-purple-200"
                    >
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-purple-600 font-medium">
                          {"difficulty" in item ? item.difficulty : item.type}
                        </span>
                        <span className="text-purple-600 group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's turn your ideas into reality with our expert development team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Start Your Project
            </Link>
            <Link
              href="/services"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
