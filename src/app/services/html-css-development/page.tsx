import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HTML/CSS Development Services | Frontend Coding | MVP Development",
  description:
    "Professional HTML/CSS development services for clean, semantic, and responsive web interfaces. Modern CSS techniques and best practices.",
  keywords:
    "HTML development, CSS development, frontend development, responsive design, semantic HTML, modern CSS",
};

export default function HTMLCSSDevelopmentPage() {
  const features = [
    {
      icon: "📄",
      title: "Semantic HTML",
      description: "Clean, accessible HTML structure",
    },
    {
      icon: "🎨",
      title: "Modern CSS",
      description: "CSS3, Flexbox, Grid, and animations",
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description: "Mobile-first responsive layouts",
    },
    {
      icon: "⚡",
      title: "Performance",
      description: "Optimized, fast-loading code",
    },
    {
      icon: "♿",
      title: "Accessibility",
      description: "WCAG compliant web standards",
    },
    {
      icon: "🔧",
      title: "Cross-Browser",
      description: "Compatible across all browsers",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="text-4xl">📄</span>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-sm font-medium">
                HTML/CSS Development
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Clean Frontend Code
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Build solid foundations with semantic HTML and modern CSS. Clean,
              maintainable code that performs beautifully across all devices and
              browsers.
            </p>
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start HTML/CSS Project
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">
            Development Features
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

      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready for Clean Code?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Build websites with semantic HTML and modern CSS.
          </p>
          <Link
            href="/contact"
            className="bg-white hover:bg-blue-50 text-blue-600 px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
