import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "HTML & CSS Tutorials - wp development",
  description:
    "Master HTML and CSS fundamentals with comprehensive tutorials covering modern web development techniques, responsive design, and best practices.",
  keywords:
    "HTML tutorials, CSS tutorials, web development, responsive design, flexbox, grid, CSS animations, HTML5, CSS3",
  openGraph: {
    title: "HTML & CSS Tutorials - wp development",
    description:
      "Learn HTML and CSS from basics to advanced with practical examples and modern techniques.",
    type: "website",
  },
};

export default function HTMLCSSTutorialsPage() {
  const tutorials = [
    {
      title: "HTML5 Fundamentals",
      description: "Learn the building blocks of the web with semantic HTML5",
      level: "Beginner",
      duration: "30 min",
      topics: ["Semantic HTML", "Forms", "Media Elements", "Accessibility"],
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      link: "https://www.w3schools.com/html/",
    },
    {
      title: "CSS Grid Mastery",
      description: "Create complex layouts with CSS Grid",
      level: "Intermediate",
      duration: "45 min",
      topics: [
        "Grid Container",
        "Grid Items",
        "Responsive Grids",
        "Grid Areas",
      ],
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      link: "https://css-tricks.com/snippets/css/complete-guide-grid/",
    },
    {
      title: "Flexbox Complete Guide",
      description: "Master flexible layouts with CSS Flexbox",
      level: "Beginner",
      duration: "35 min",
      topics: [
        "Flex Container",
        "Flex Items",
        "Alignment",
        "Responsive Design",
      ],
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      link: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
    },
    {
      title: "CSS Animations & Transitions",
      description: "Bring your websites to life with smooth animations",
      level: "Intermediate",
      duration: "40 min",
      topics: ["Transitions", "Keyframes", "Transform", "Performance"],
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations",
    },
    {
      title: "Responsive Web Design",
      description: "Build websites that work on all devices",
      level: "Intermediate",
      duration: "50 min",
      topics: ["Media Queries", "Mobile First", "Breakpoints", "Viewport"],
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      link: "https://www.w3schools.com/css/css_rwd_intro.asp",
    },
    {
      title: "CSS Variables & Custom Properties",
      description: "Modern CSS with dynamic styling capabilities",
      level: "Advanced",
      duration: "25 min",
      topics: [
        "CSS Variables",
        "Dynamic Theming",
        "Calculations",
        "Inheritance",
      ],
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
    },
  ];

  const codeExamples = [
    {
      title: "Modern CSS Reset",
      description: "Essential CSS reset for consistent cross-browser styling",
      code: `/* Modern CSS Reset */
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}`,
    },
    {
      title: "Responsive Navigation",
      description: "Mobile-first navigation with CSS Grid",
      code: `/* Responsive Navigation */
.nav {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
}`,
    },
  ];

  const resources = [
    {
      title: "MDN Web Docs",
      description: "Comprehensive HTML and CSS documentation",
      url: "https://developer.mozilla.org",
      type: "Documentation",
    },
    {
      title: "Can I Use",
      description: "Browser compatibility tables for HTML and CSS features",
      url: "https://caniuse.com",
      type: "Tool",
    },
    {
      title: "CSS Tricks",
      description: "Tips, tricks, and techniques for CSS development",
      url: "https://css-tricks.com",
      type: "Blog",
    },
    {
      title: "Flexbox Froggy",
      description: "Interactive game to learn CSS Flexbox",
      url: "https://flexboxfroggy.com",
      type: "Interactive",
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
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
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML5 Logo"
                width={80}
                height={80}
                className="mr-4"
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS3 Logo"
                width={80}
                height={80}
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              HTML & CSS Tutorials
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Master the foundations of web development with comprehensive HTML
              and CSS tutorials
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#tutorials"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Start Learning
              </Link>
              <Link
                href="#examples"
                className="bg-white hover:bg-gray-50 text-purple-600 px-8 py-3 rounded-lg font-medium border border-purple-600 transition-colors duration-200"
              >
                View Examples
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-16" id="tutorials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Learning Path
            </h2>
            <p className="text-lg text-gray-600">
              Structured tutorials from basics to advanced techniques
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-purple-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <Image
                    src={tutorial.icon}
                    alt={tutorial.title}
                    width={32}
                    height={32}
                  />
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(
                      tutorial.level
                    )}`}
                  >
                    {tutorial.level}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {tutorial.title}
                </h3>
                <p className="text-gray-600 mb-4">{tutorial.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>⏱️ {tutorial.duration}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tutorial.topics.map((topic, topicIndex) => (
                    <span
                      key={topicIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <a
                  href={tutorial.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Start Learning
                  <span className="text-sm">↗</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-16 bg-gray-50" id="examples">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Code Examples
            </h2>
            <p className="text-lg text-gray-600">
              Practical examples you can use in your projects
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {codeExamples.map((example, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {example.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{example.description}</p>
                </div>
                <div className="bg-gray-900 p-6">
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    <code>{example.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Resources
            </h2>
            <p className="text-lg text-gray-600">
              Helpful tools and references for HTML & CSS development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all duration-300 hover:border-purple-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-purple-600 font-medium">
                    {resource.type}
                  </span>
                  <span className="text-purple-600 group-hover:translate-x-1 transition-transform">
                    ↗
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-600 text-sm">{resource.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-lg text-purple-100 mb-8">
            Let our expert team help you create stunning web experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-purple-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Start Your Project
            </Link>
            <Link
              href="/services/web-development"
              className="bg-transparent hover:bg-white/10 text-white px-8 py-3 rounded-lg font-medium border border-white transition-colors duration-200"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
