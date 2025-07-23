import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "JavaScript & TypeScript Tutorials - wp development",
  description:
    "Master JavaScript and TypeScript with comprehensive tutorials covering ES6+, async programming, TypeScript types, and modern development practices.",
  keywords:
    "JavaScript tutorials, TypeScript tutorials, ES6, async await, promises, types, interfaces, modern JavaScript",
  openGraph: {
    title: "JavaScript & TypeScript Tutorials - wp development",
    description:
      "Learn JavaScript and TypeScript from fundamentals to advanced concepts with practical examples.",
    type: "website",
  },
};

export default function JavaScriptTypeScriptTutorialsPage() {
  const tutorials = [
    {
      title: "Modern JavaScript (ES6+)",
      description: "Master the latest JavaScript features and syntax",
      level: "Intermediate",
      duration: "60 min",
      topics: ["Arrow Functions", "Destructuring", "Modules", "Classes"],
      icon: "🟨",
      language: "JavaScript",
    },
    {
      title: "Async JavaScript Mastery",
      description: "Handle asynchronous operations like a pro",
      level: "Intermediate",
      duration: "45 min",
      topics: ["Promises", "Async/Await", "Error Handling", "Fetch API"],
      icon: "⚡",
      language: "JavaScript",
    },
    {
      title: "TypeScript Fundamentals",
      description: "Get started with TypeScript for better code quality",
      level: "Beginner",
      duration: "50 min",
      topics: ["Types", "Interfaces", "Generics", "Compilation"],
      icon: "🔷",
      language: "TypeScript",
    },
    {
      title: "Advanced TypeScript",
      description: "Master complex TypeScript patterns and techniques",
      level: "Advanced",
      duration: "70 min",
      topics: [
        "Utility Types",
        "Mapped Types",
        "Conditional Types",
        "Decorators",
      ],
      icon: "💎",
      language: "TypeScript",
    },
    {
      title: "DOM Manipulation",
      description: "Interact with web pages using JavaScript",
      level: "Beginner",
      duration: "40 min",
      topics: ["Selectors", "Events", "DOM API", "Dynamic Content"],
      icon: "🌐",
      language: "JavaScript",
    },
    {
      title: "JavaScript Testing",
      description: "Write reliable tests for your JavaScript code",
      level: "Intermediate",
      duration: "55 min",
      topics: ["Jest", "Unit Tests", "Mocking", "TDD"],
      icon: "🧪",
      language: "JavaScript",
    },
  ];

  const codeExamples = [
    {
      title: "TypeScript Interface Example",
      description: "Type-safe user data handling",
      language: "TypeScript",
      code: `// User interface definition
interface User {
  id: number;
  name: string;
  email: string;
  isActive?: boolean;
}

// Function with typed parameters
function createUser(userData: Omit<User, 'id'>): User {
  return {
    id: Math.random(),
    ...userData,
    isActive: userData.isActive ?? true
  };
}

// Usage example
const newUser = createUser({
  name: "John Doe",
  email: "john@example.com"
});`,
    },
    {
      title: "Modern Async/Await Pattern",
      description: "Clean asynchronous data fetching",
      language: "JavaScript",
      code: `// Async function with error handling
async function fetchUserData(userId) {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    throw error;
  }
}

// Usage with proper error handling
async function displayUser(userId) {
  try {
    const user = await fetchUserData(userId);
    console.log('User loaded:', user);
  } catch (error) {
    console.log('Failed to load user');
  }
}`,
    },
  ];

  const quickTips = [
    {
      title: "Use const and let",
      description:
        "Avoid var, prefer const for immutable values and let for variables",
      icon: "💡",
    },
    {
      title: "Destructuring Assignment",
      description: "Extract values from objects and arrays efficiently",
      icon: "📦",
    },
    {
      title: "Template Literals",
      description:
        "Use backticks for string interpolation and multiline strings",
      icon: "🔤",
    },
    {
      title: "Optional Chaining",
      description: "Safely access nested object properties with ?. operator",
      icon: "⛓️",
    },
  ];

  const resources = [
    {
      title: "MDN JavaScript Guide",
      description: "Comprehensive JavaScript documentation and guides",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      type: "Documentation",
    },
    {
      title: "TypeScript Handbook",
      description: "Official TypeScript documentation and tutorials",
      url: "https://www.typescriptlang.org/docs/",
      type: "Documentation",
    },
    {
      title: "JavaScript.info",
      description: "Modern JavaScript tutorial with interactive examples",
      url: "https://javascript.info/",
      type: "Tutorial",
    },
    {
      title: "TypeScript Playground",
      description: "Online TypeScript compiler and editor",
      url: "https://www.typescriptlang.org/play",
      type: "Tool",
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

  const getLanguageColor = (language: string) => {
    return language === "TypeScript"
      ? "bg-blue-100 text-blue-800"
      : "bg-yellow-100 text-yellow-800";
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center gap-4 text-6xl mb-6">
              <span>🟨</span>
              <span>🔷</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              JavaScript & TypeScript
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Master modern JavaScript and TypeScript development with
              comprehensive tutorials and practical examples
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
              Structured tutorials from JavaScript basics to advanced TypeScript
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-purple-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{tutorial.icon}</span>
                  <div className="flex gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getLanguageColor(
                        tutorial.language
                      )}`}
                    >
                      {tutorial.language}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(
                        tutorial.level
                      )}`}
                    >
                      {tutorial.level}
                    </span>
                  </div>
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
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-medium transition-colors duration-200">
                  Start Tutorial
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quick Tips
            </h2>
            <p className="text-lg text-gray-600">
              Essential tips for writing better JavaScript and TypeScript
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickTips.map((tip, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 p-6 text-center hover:shadow-md transition-all duration-300"
              >
                <span className="text-3xl mb-4 block">{tip.icon}</span>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tip.title}
                </h3>
                <p className="text-gray-600 text-sm">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-16" id="examples">
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
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {example.title}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getLanguageColor(
                        example.language
                      )}`}
                    >
                      {example.language}
                    </span>
                  </div>
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Resources
            </h2>
            <p className="text-lg text-gray-600">
              Helpful tools and references for JavaScript & TypeScript
              development
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
      <section className="py-16 bg-gradient-to-r from-yellow-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Professional JavaScript Development?
          </h2>
          <p className="text-lg text-yellow-100 mb-8">
            Let our expert team build scalable applications with modern
            JavaScript and TypeScript
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Start Your Project
            </Link>
            <Link
              href="/services/javascript-development"
              className="bg-transparent hover:bg-white/10 text-white px-8 py-3 rounded-lg font-medium border border-white transition-colors duration-200"
            >
              JavaScript Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
