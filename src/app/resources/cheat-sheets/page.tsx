import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Developer Cheat Sheets - wp development",
  description:
    "Quick reference guides and cheat sheets for popular programming languages, frameworks, and development tools. Speed up your coding with essential syntax and commands.",
  keywords:
    "cheat sheets, quick reference, programming guides, JavaScript cheat sheet, React cheat sheet, CSS cheat sheet, developer references",
  openGraph: {
    title: "Developer Cheat Sheets - wp development",
    description:
      "Comprehensive collection of cheat sheets for developers and programmers.",
    type: "website",
  },
};

export default function CheatSheetsPage() {
  const cheatSheets = [
    {
      title: "JavaScript ES6+ Cheat Sheet",
      description: "Modern JavaScript syntax, methods, and features",
      category: "JavaScript",
      icon: "🟨",
      topics: ["Arrow Functions", "Destructuring", "Promises", "Modules"],
      downloadSize: "2.1 MB",
      lastUpdated: "2024-01-15",
    },
    {
      title: "React Hooks Reference",
      description: "Complete guide to React hooks with examples",
      category: "React",
      icon: "⚛️",
      topics: ["useState", "useEffect", "useContext", "Custom Hooks"],
      downloadSize: "1.8 MB",
      lastUpdated: "2024-01-12",
    },
    {
      title: "CSS Flexbox & Grid",
      description: "Layout properties and values for modern CSS",
      category: "CSS",
      icon: "🎨",
      topics: [
        "Flexbox Properties",
        "Grid Layout",
        "Alignment",
        "Responsive Design",
      ],
      downloadSize: "1.5 MB",
      lastUpdated: "2024-01-10",
    },
    {
      title: "TypeScript Types Guide",
      description: "Types, interfaces, and advanced TypeScript patterns",
      category: "TypeScript",
      icon: "🔷",
      topics: ["Basic Types", "Interfaces", "Generics", "Utility Types"],
      downloadSize: "2.3 MB",
      lastUpdated: "2024-01-08",
    },
    {
      title: "Node.js API Reference",
      description: "Essential Node.js modules and methods",
      category: "Node.js",
      icon: "🟢",
      topics: ["File System", "HTTP", "Path", "Events"],
      downloadSize: "2.7 MB",
      lastUpdated: "2024-01-05",
    },
    {
      title: "Git Commands Cheat Sheet",
      description: "Most used Git commands and workflows",
      category: "Git",
      icon: "📦",
      topics: ["Basic Commands", "Branching", "Merging", "Remote Operations"],
      downloadSize: "1.2 MB",
      lastUpdated: "2024-01-03",
    },
    {
      title: "Docker Commands Reference",
      description: "Docker CLI commands and Dockerfile syntax",
      category: "Docker",
      icon: "🐳",
      topics: ["Container Management", "Images", "Volumes", "Networks"],
      downloadSize: "1.9 MB",
      lastUpdated: "2024-01-01",
    },
    {
      title: "SQL Query Reference",
      description: "Common SQL queries and database operations",
      category: "Database",
      icon: "🗄️",
      topics: ["SELECT Queries", "JOINs", "Indexes", "Optimization"],
      downloadSize: "2.4 MB",
      lastUpdated: "2023-12-28",
    },
    {
      title: "Python Quick Reference",
      description: "Python syntax, built-in functions, and libraries",
      category: "Python",
      icon: "🐍",
      topics: ["Syntax", "Data Types", "Functions", "Libraries"],
      downloadSize: "2.8 MB",
      lastUpdated: "2023-12-25",
    },
    {
      title: "VS Code Shortcuts",
      description: "Keyboard shortcuts for faster development",
      category: "Tools",
      icon: "⚡",
      topics: ["Navigation", "Editing", "Search", "Extensions"],
      downloadSize: "0.8 MB",
      lastUpdated: "2023-12-20",
    },
  ];

  const quickReferences = [
    {
      title: "HTTP Status Codes",
      codes: [
        { code: "200", meaning: "OK - Success" },
        { code: "404", meaning: "Not Found" },
        { code: "500", meaning: "Internal Server Error" },
        { code: "401", meaning: "Unauthorized" },
      ],
    },
    {
      title: "CSS Units",
      codes: [
        { code: "px", meaning: "Pixels (absolute)" },
        { code: "em", meaning: "Relative to parent font size" },
        { code: "rem", meaning: "Relative to root font size" },
        { code: "vh/vw", meaning: "Viewport height/width" },
      ],
    },
    {
      title: "JavaScript Array Methods",
      codes: [
        { code: "map()", meaning: "Transform each element" },
        { code: "filter()", meaning: "Filter elements" },
        { code: "reduce()", meaning: "Reduce to single value" },
        { code: "forEach()", meaning: "Execute for each element" },
      ],
    },
  ];

  const codeSnippets = [
    {
      title: "Fetch API Pattern",
      language: "JavaScript",
      code: `// Modern fetch with error handling
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}`,
    },
    {
      title: "React useState Hook",
      language: "React",
      code: `// useState with object state
const [user, setUser] = useState({
  name: '',
  email: '',
  isActive: false
});

// Update specific property
const updateUser = (field, value) => {
  setUser(prev => ({
    ...prev,
    [field]: value
  }));
};`,
    },
  ];

  const categories = [
    { name: "JavaScript", count: 2, color: "bg-yellow-100 text-yellow-800" },
    { name: "React", count: 1, color: "bg-blue-100 text-blue-800" },
    { name: "CSS", count: 1, color: "bg-purple-100 text-purple-800" },
    { name: "TypeScript", count: 1, color: "bg-blue-100 text-blue-800" },
    { name: "Node.js", count: 1, color: "bg-green-100 text-green-800" },
    { name: "Tools", count: 4, color: "bg-gray-100 text-gray-800" },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      JavaScript: "bg-yellow-100 text-yellow-800",
      React: "bg-blue-100 text-blue-800",
      CSS: "bg-purple-100 text-purple-800",
      TypeScript: "bg-blue-100 text-blue-800",
      "Node.js": "bg-green-100 text-green-800",
      Git: "bg-red-100 text-red-800",
      Docker: "bg-blue-100 text-blue-800",
      Database: "bg-gray-100 text-gray-800",
      Python: "bg-green-100 text-green-800",
      Tools: "bg-gray-100 text-gray-800",
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
            <div className="text-6xl mb-6">📚</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Developer Cheat Sheets
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Quick reference guides and cheat sheets to boost your development
              productivity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#cheat-sheets"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Browse Cheat Sheets
              </Link>
              <Link
                href="#quick-ref"
                className="bg-white hover:bg-gray-50 text-purple-600 px-8 py-3 rounded-lg font-medium border border-purple-600 transition-colors duration-200"
              >
                Quick References
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-lg text-gray-600">
              Find cheat sheets organized by technology and topic
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`px-4 py-2 rounded-full cursor-pointer hover:shadow-md transition-all duration-200 ${category.color}`}
              >
                <span className="font-medium">{category.name}</span>
                <span className="ml-2 text-sm opacity-75">
                  ({category.count})
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cheat Sheets Grid */}
      <section className="py-16 bg-gray-50" id="cheat-sheets">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Available Cheat Sheets
            </h2>
            <p className="text-lg text-gray-600">
              Downloadable PDF references for quick access
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cheatSheets.map((sheet, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-purple-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{sheet.icon}</span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                      sheet.category
                    )}`}
                  >
                    {sheet.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {sheet.title}
                </h3>
                <p className="text-gray-600 mb-4">{sheet.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {sheet.topics.map((topic, topicIndex) => (
                    <span
                      key={topicIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>📄 {sheet.downloadSize}</span>
                  <span>🕒 {sheet.lastUpdated}</span>
                </div>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-medium transition-colors duration-200">
                  Download PDF
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick References */}
      <section className="py-16" id="quick-ref">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quick References
            </h2>
            <p className="text-lg text-gray-600">
              Instant lookup for common values and codes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickReferences.map((ref, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {ref.title}
                </h3>
                <div className="space-y-3">
                  {ref.codes.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <code className="text-purple-600 font-mono font-medium">
                        {item.code}
                      </code>
                      <span className="text-gray-600 text-sm">
                        {item.meaning}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Snippets */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Common Code Patterns
            </h2>
            <p className="text-lg text-gray-600">
              Ready-to-use code snippets for common tasks
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {codeSnippets.map((snippet, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {snippet.title}
                    </h3>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
                      {snippet.language}
                    </span>
                  </div>
                </div>
                <div className="bg-gray-900 p-6">
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    <code>{snippet.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with New Cheat Sheets
            </h2>
            <p className="text-lg text-purple-100 mb-8">
              Get notified when we release new cheat sheets and references
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-white hover:bg-gray-100 text-purple-600 px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need Custom Development Solutions?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let our expert team help you build amazing applications
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
