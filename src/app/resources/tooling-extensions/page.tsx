import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Development Tools & Extensions - wp development",
  description:
    "Discover essential development tools, VS Code extensions, browser tools, and productivity enhancers to streamline your development workflow.",
  keywords:
    "development tools, VS Code extensions, browser tools, productivity tools, developer utilities, coding tools",
  openGraph: {
    title: "Development Tools & Extensions - wp development",
    description:
      "Curated collection of development tools and extensions for modern web development.",
    type: "website",
  },
};

export default function ToolingExtensionsPage() {
  const vsCodeExtensions = [
    {
      name: "ES7+ React/Redux/React-Native snippets",
      description: "Essential snippets for React development",
      category: "React",
      rating: 4.8,
      downloads: "8.2M",
      features: [
        "Component snippets",
        "Hook snippets",
        "Redux patterns",
        "TypeScript support",
      ],
      publisher: "dsznajder",
      icon: "⚛️",
    },
    {
      name: "Prettier - Code formatter",
      description: "Automatic code formatting for consistent style",
      category: "Formatting",
      rating: 4.9,
      downloads: "22.1M",
      features: [
        "Auto formatting",
        "Multi-language",
        "Configurable",
        "Team consistency",
      ],
      publisher: "Prettier",
      icon: "✨",
    },
    {
      name: "ESLint",
      description: "JavaScript and TypeScript linting",
      category: "Linting",
      rating: 4.7,
      downloads: "18.9M",
      features: ["Error detection", "Code quality", "Custom rules", "Auto-fix"],
      publisher: "Microsoft",
      icon: "🔍",
    },
    {
      name: "GitLens",
      description: "Enhanced Git capabilities in VS Code",
      category: "Git",
      rating: 4.8,
      downloads: "15.3M",
      features: [
        "Blame annotations",
        "Code history",
        "Repository insights",
        "Collaboration",
      ],
      publisher: "GitKraken",
      icon: "📦",
    },
    {
      name: "Live Server",
      description: "Launch local development server with live reload",
      category: "Development",
      rating: 4.6,
      downloads: "25.7M",
      features: ["Live reload", "Auto refresh", "Custom port", "HTTPS support"],
      publisher: "Ritwick Dey",
      icon: "🌐",
    },
    {
      name: "Thunder Client",
      description: "Lightweight REST API client",
      category: "API Testing",
      rating: 4.5,
      downloads: "3.8M",
      features: [
        "Request testing",
        "Collections",
        "Environment variables",
        "GraphQL support",
      ],
      publisher: "Ranga Vadhineni",
      icon: "⚡",
    },
    {
      name: "Auto Rename Tag",
      description: "Automatically rename paired HTML/XML tags",
      category: "HTML",
      rating: 4.7,
      downloads: "12.4M",
      features: [
        "Tag synchronization",
        "HTML/XML support",
        "JSX support",
        "Fast editing",
      ],
      publisher: "Jun Han",
      icon: "🏷️",
    },
    {
      name: "Bracket Pair Colorizer 2",
      description: "Colorize matching brackets for better readability",
      category: "Visualization",
      rating: 4.6,
      downloads: "8.9M",
      features: [
        "Colored brackets",
        "Scope lines",
        "Customizable colors",
        "Performance optimized",
      ],
      publisher: "CoenraadS",
      icon: "🌈",
    },
  ];

  const browserTools = [
    {
      name: "React Developer Tools",
      description: "Debug React component hierarchies",
      browser: "Chrome/Firefox",
      category: "React",
      features: [
        "Component inspection",
        "Props debugging",
        "State management",
        "Profiler",
      ],
      icon: "⚛️",
    },
    {
      name: "Redux DevTools",
      description: "Debug Redux state changes",
      browser: "Chrome/Firefox",
      category: "Redux",
      features: [
        "Time travel debugging",
        "Action logging",
        "State inspection",
        "Hot reloading",
      ],
      icon: "🔄",
    },
    {
      name: "Vue.js DevTools",
      description: "Debug Vue.js applications",
      browser: "Chrome/Firefox",
      category: "Vue",
      features: [
        "Component tree",
        "Vuex debugging",
        "Event tracking",
        "Performance monitoring",
      ],
      icon: "💚",
    },
    {
      name: "Lighthouse",
      description: "Audit web page performance and quality",
      browser: "Chrome",
      category: "Performance",
      features: [
        "Performance audits",
        "SEO analysis",
        "Accessibility checks",
        "Best practices",
      ],
      icon: "💡",
    },
    {
      name: "Web Developer",
      description: "Various web developer tools",
      browser: "Chrome/Firefox",
      category: "General",
      features: [
        "Disable CSS",
        "Form tools",
        "Image tools",
        "Miscellaneous tools",
      ],
      icon: "🔧",
    },
    {
      name: "ColorZilla",
      description: "Advanced eyedropper and color picker",
      browser: "Chrome/Firefox",
      category: "Design",
      features: [
        "Color picker",
        "Gradient generator",
        "Palette browser",
        "Color analyzer",
      ],
      icon: "🎨",
    },
  ];

  const cliTools = [
    {
      name: "npm",
      description: "Node.js package manager",
      category: "Package Management",
      features: [
        "Package installation",
        "Dependency management",
        "Script running",
        "Publishing",
      ],
      installation: "npm install -g npm",
      icon: "📦",
    },
    {
      name: "Yarn",
      description: "Fast, reliable package manager",
      category: "Package Management",
      features: [
        "Faster installs",
        "Offline mode",
        "Workspaces",
        "Plug'n'Play",
      ],
      installation: "npm install -g yarn",
      icon: "🧶",
    },
    {
      name: "Create React App",
      description: "Set up modern React app with no configuration",
      category: "Scaffolding",
      features: [
        "Zero configuration",
        "Modern build setup",
        "Hot reloading",
        "Testing setup",
      ],
      installation: "npx create-react-app my-app",
      icon: "⚛️",
    },
    {
      name: "Next.js CLI",
      description: "Create Next.js applications",
      category: "Scaffolding",
      features: [
        "App creation",
        "Development server",
        "Build optimization",
        "TypeScript support",
      ],
      installation: "npx create-next-app@latest",
      icon: "▲",
    },
    {
      name: "Vercel CLI",
      description: "Deploy applications to Vercel",
      category: "Deployment",
      features: [
        "Quick deployment",
        "Preview URLs",
        "Environment management",
        "Domain management",
      ],
      installation: "npm install -g vercel",
      icon: "🚀",
    },
    {
      name: "ESLint CLI",
      description: "JavaScript linting from command line",
      category: "Code Quality",
      features: [
        "Code linting",
        "Auto-fixing",
        "Custom rules",
        "CI/CD integration",
      ],
      installation: "npm install -g eslint",
      icon: "🔍",
    },
  ];

  const productivityTools = [
    {
      name: "Notion",
      description: "All-in-one workspace for notes and project management",
      category: "Documentation",
      price: "Free/Paid",
      features: [
        "Note taking",
        "Project management",
        "Team collaboration",
        "Templates",
      ],
      icon: "📝",
    },
    {
      name: "Figma",
      description: "Collaborative interface design tool",
      category: "Design",
      price: "Free/Paid",
      features: [
        "UI design",
        "Prototyping",
        "Real-time collaboration",
        "Design systems",
      ],
      icon: "🎨",
    },
    {
      name: "Postman",
      description: "API development and testing platform",
      category: "API Testing",
      price: "Free/Paid",
      features: [
        "API testing",
        "Documentation",
        "Mock servers",
        "Team collaboration",
      ],
      icon: "📮",
    },
    {
      name: "Docker Desktop",
      description: "Containerization platform for developers",
      category: "DevOps",
      price: "Free/Paid",
      features: [
        "Container management",
        "Local development",
        "Kubernetes",
        "Image building",
      ],
      icon: "🐳",
    },
    {
      name: "GitHub Desktop",
      description: "Git GUI for easier version control",
      category: "Version Control",
      price: "Free",
      features: [
        "Visual Git",
        "Branch management",
        "Pull requests",
        "Conflict resolution",
      ],
      icon: "📱",
    },
    {
      name: "Slack",
      description: "Team communication and collaboration",
      category: "Communication",
      price: "Free/Paid",
      features: ["Team chat", "File sharing", "Integrations", "Video calls"],
      icon: "💬",
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      React: "bg-blue-100 text-blue-800",
      Formatting: "bg-purple-100 text-purple-800",
      Linting: "bg-red-100 text-red-800",
      Git: "bg-gray-100 text-gray-800",
      Development: "bg-green-100 text-green-800",
      "API Testing": "bg-yellow-100 text-yellow-800",
      HTML: "bg-orange-100 text-orange-800",
      Visualization: "bg-pink-100 text-pink-800",
      Redux: "bg-purple-100 text-purple-800",
      Vue: "bg-green-100 text-green-800",
      Performance: "bg-blue-100 text-blue-800",
      General: "bg-gray-100 text-gray-800",
      Design: "bg-pink-100 text-pink-800",
      "Package Management": "bg-blue-100 text-blue-800",
      Scaffolding: "bg-green-100 text-green-800",
      Deployment: "bg-purple-100 text-purple-800",
      "Code Quality": "bg-red-100 text-red-800",
      Documentation: "bg-yellow-100 text-yellow-800",
      DevOps: "bg-blue-100 text-blue-800",
      "Version Control": "bg-gray-100 text-gray-800",
      Communication: "bg-green-100 text-green-800",
    };
    return (
      colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
    );
  };

  const getRatingStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    return "⭐".repeat(fullStars) + (hasHalfStar ? "⭐" : "");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-6">🛠️</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Development Tools & Extensions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Boost your productivity with curated development tools, VS Code
              extensions, and essential utilities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#vscode"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                VS Code Extensions
              </Link>
              <Link
                href="#tools"
                className="bg-white hover:bg-gray-50 text-purple-600 px-8 py-3 rounded-lg font-medium border border-purple-600 transition-colors duration-200"
              >
                Browse Tools
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VS Code Extensions */}
      <section className="py-16" id="vscode">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Essential VS Code Extensions
            </h2>
            <p className="text-lg text-gray-600">
              Must-have extensions for modern web development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vsCodeExtensions.map((extension, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-purple-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{extension.icon}</span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                      extension.category
                    )}`}
                  >
                    {extension.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {extension.name}
                </h3>
                <p className="text-gray-600 mb-3 text-sm">
                  {extension.description}
                </p>
                <div className="flex items-center justify-between mb-3 text-sm">
                  <span className="text-yellow-500">
                    {getRatingStars(extension.rating)} {extension.rating}
                  </span>
                  <span className="text-gray-500">
                    {extension.downloads} downloads
                  </span>
                </div>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {extension.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-xs text-gray-500 mb-3">
                  by {extension.publisher}
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors duration-200">
                  Install Extension
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browser Tools */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Browser Developer Tools
            </h2>
            <p className="text-lg text-gray-600">
              Essential browser extensions for debugging and testing
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {browserTools.map((tool, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{tool.icon}</span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                      tool.category
                    )}`}
                  >
                    {tool.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tool.name}
                </h3>
                <p className="text-gray-600 mb-3 text-sm">{tool.description}</p>
                <div className="text-sm text-purple-600 mb-3">
                  {tool.browser}
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {tool.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-medium transition-colors duration-200">
                  Add to Browser
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLI Tools */}
      <section className="py-16" id="tools">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Command Line Tools
            </h2>
            <p className="text-lg text-gray-600">
              Essential CLI tools for development workflow
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cliTools.map((tool, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-3xl mr-3">{tool.icon}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {tool.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                      tool.category
                    )}`}
                  >
                    {tool.category}
                  </span>
                </div>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {tool.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-900 p-3 rounded-lg">
                  <code className="text-green-400 text-sm">
                    {tool.installation}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Productivity Tools */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Productivity Tools
            </h2>
            <p className="text-lg text-gray-600">
              Applications and services to enhance your development workflow
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productivityTools.map((tool, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{tool.icon}</span>
                  <div className="text-right">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                        tool.category
                      )}`}
                    >
                      {tool.category}
                    </span>
                    <div className="text-xs text-gray-500 mt-1">
                      {tool.price}
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tool.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{tool.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {tool.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2 rounded-lg font-medium transition-colors duration-200">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Guide */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quick Setup Guide
            </h2>
            <p className="text-lg text-gray-600">
              Get your development environment ready in minutes
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Install VS Code
                  </h3>
                  <p className="text-gray-600">
                    Download and install Visual Studio Code from the official
                    website
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Install Essential Extensions
                  </h3>
                  <p className="text-gray-600">
                    Add Prettier, ESLint, and language-specific extensions
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Configure Settings
                  </h3>
                  <p className="text-gray-600">
                    Set up formatting, linting, and workspace preferences
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Install CLI Tools
                  </h3>
                  <p className="text-gray-600">
                    Set up Node.js, npm/yarn, and framework-specific tools
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help Setting Up Your Development Environment?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Our team can help you configure the perfect development setup for
            your projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Get Help
            </Link>
            <Link
              href="/services"
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
