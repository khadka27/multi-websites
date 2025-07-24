import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Frameworks & Libraries Tutorials - wp development",
  description:
    "Master modern web frameworks and libraries including React, Next.js, Angular, Vue.js, and more with comprehensive tutorials and practical examples.",
  keywords:
    "React tutorials, Next.js tutorials, Angular tutorials, Vue.js, web frameworks, JavaScript libraries, frontend development",
  openGraph: {
    title: "Frameworks & Libraries Tutorials - wp development",
    description:
      "Learn popular web frameworks and libraries with hands-on tutorials and real-world examples.",
    type: "website",
  },
};

export default function FrameworksLibrariesTutorialsPage() {
  const frameworks = [
    {
      title: "React 18 Complete Guide",
      description: "Master React with hooks, context, and modern patterns",
      level: "Intermediate",
      duration: "90 min",
      topics: ["Hooks", "Context", "Suspense", "Concurrent Features"],
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      framework: "React",
      popularity: "Most Popular",
      link: "https://react.dev/",
    },
    {
      title: "Next.js Full Stack Development",
      description: "Build production-ready applications with Next.js",
      level: "Advanced",
      duration: "120 min",
      topics: ["App Router", "Server Components", "API Routes", "Deployment"],
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      framework: "Next.js",
      popularity: "Rising",
      link: "https://nextjs.org/learn",
    },
    {
      title: "Angular Fundamentals",
      description: "Enterprise-grade applications with Angular",
      level: "Intermediate",
      duration: "100 min",
      topics: ["Components", "Services", "Routing", "RxJS"],
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      framework: "Angular",
      popularity: "Enterprise",
      link: "https://angular.io/tutorial",
    },
    {
      title: "Vue.js Progressive Framework",
      description: "Easy-to-learn framework for interactive UIs",
      level: "Beginner",
      duration: "70 min",
      topics: ["Composition API", "Reactivity", "Components", "Router"],
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      framework: "Vue.js",
      popularity: "Growing",
      link: "https://vuejs.org/guide/",
    },
    {
      title: "State Management with Redux",
      description: "Predictable state container for JavaScript apps",
      level: "Intermediate",
      duration: "60 min",
      topics: ["Actions", "Reducers", "Store", "Middleware"],
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      framework: "Redux",
      popularity: "Standard",
      link: "https://redux.js.org/introduction/getting-started",
    },
    {
      title: "Node.js Backend Development",
      description: "Server-side JavaScript with Node.js and Express",
      level: "Intermediate",
      duration: "80 min",
      topics: ["Express.js", "Middleware", "REST APIs", "Database"],
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      framework: "Node.js",
      popularity: "Backend",
      link: "https://nodejs.org/en/docs/guides/",
    },
  ];

  const comparisons = [
    {
      aspect: "Learning Curve",
      react: "Moderate",
      nextjs: "Steep",
      angular: "Steep",
      vue: "Gentle",
    },
    {
      aspect: "Performance",
      react: "High",
      nextjs: "Very High",
      angular: "High",
      vue: "High",
    },
    {
      aspect: "Community",
      react: "Largest",
      nextjs: "Growing",
      angular: "Large",
      vue: "Medium",
    },
    {
      aspect: "Job Market",
      react: "Excellent",
      nextjs: "Growing",
      angular: "Good",
      vue: "Good",
    },
  ];

  const codeExamples = [
    {
      title: "React Hook Example",
      description:
        "Custom hook for data fetching with loading and error states",
      framework: "React",
      code: `// Custom hook for API calls
import { useState, useEffect } from 'react';

function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Usage in component
function UserProfile({ userId }) {
  const { data: user, loading, error } = useApi(\`/api/users/\${userId}\`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return <div>Welcome, {user?.name}!</div>;
}`,
    },
    {
      title: "Next.js API Route",
      description:
        "Server-side API endpoint with validation and error handling",
      framework: "Next.js",
      code: `// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Validation schema
const userSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  age: z.number().min(18).max(120)
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate input
    const validatedData = userSchema.parse(body);
    
    // Save to database (example)
    const user = await createUser(validatedData);
    
    return NextResponse.json(
      { message: 'User created', user },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input', details: error.errors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}`,
    },
  ];

  const resources = [
    {
      title: "React Documentation",
      description: "Official React documentation and guides",
      url: "https://react.dev/",
      framework: "React",
    },
    {
      title: "Next.js Learn",
      description: "Interactive Next.js tutorial for beginners",
      url: "https://nextjs.org/learn",
      framework: "Next.js",
    },
    {
      title: "Angular Tour of Heroes",
      description: "Angular's official tutorial application",
      url: "https://angular.io/tutorial",
      framework: "Angular",
    },
    {
      title: "Vue.js Guide",
      description: "Comprehensive Vue.js documentation",
      url: "https://vuejs.org/guide/",
      framework: "Vue.js",
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

  const getPopularityColor = (popularity: string) => {
    switch (popularity) {
      case "Most Popular":
        return "bg-blue-100 text-blue-800";
      case "Rising":
        return "bg-green-100 text-green-800";
      case "Enterprise":
        return "bg-purple-100 text-purple-800";
      case "Growing":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getComparisonColor = (value: string) => {
    switch (value) {
      case "Very High":
      case "Excellent":
      case "Largest":
        return "bg-green-100 text-green-800";
      case "High":
      case "Good":
      case "Large":
        return "bg-blue-100 text-blue-800";
      case "Moderate":
      case "Medium":
      case "Growing":
        return "bg-yellow-100 text-yellow-800";
      case "Steep":
      case "Gentle":
        return "bg-purple-100 text-purple-800";
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
            <div className="flex justify-center gap-4 mb-6">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React Logo"
                width={60}
                height={60}
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                alt="Next.js Logo"
                width={60}
                height={60}
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
                alt="Angular Logo"
                width={60}
                height={60}
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                alt="Vue.js Logo"
                width={60}
                height={60}
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frameworks & Libraries
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Master modern web frameworks and libraries with comprehensive
              tutorials and practical examples
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#tutorials"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Start Learning
              </Link>
              <Link
                href="#comparison"
                className="bg-white hover:bg-gray-50 text-purple-600 px-8 py-3 rounded-lg font-medium border border-purple-600 transition-colors duration-200"
              >
                Compare Frameworks
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Tutorials */}
      <section className="py-16" id="tutorials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Framework Tutorials
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive guides for popular web frameworks and libraries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {frameworks.map((framework, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:border-purple-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <Image
                    src={framework.icon}
                    alt={`${framework.title} logo`}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                  <div className="flex gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getPopularityColor(
                        framework.popularity
                      )}`}
                    >
                      {framework.popularity}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(
                        framework.level
                      )}`}
                    >
                      {framework.level}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {framework.title}
                </h3>
                <p className="text-gray-600 mb-4">{framework.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>⏱️ {framework.duration}</span>
                  <span className="mx-2">•</span>
                  <span>{framework.framework}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {framework.topics.map((topic, topicIndex) => (
                    <span
                      key={topicIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <Link
                  href={framework.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-medium transition-colors duration-200 text-center"
                >
                  Start Learning
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Framework Comparison */}
      <section className="py-16 bg-gray-50" id="comparison">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Framework Comparison
            </h2>
            <p className="text-lg text-gray-600">
              Choose the right framework for your project
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Aspect
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      React
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Next.js
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Angular
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Vue.js
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisons.map((comparison, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {comparison.aspect}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getComparisonColor(
                            comparison.react
                          )}`}
                        >
                          {comparison.react}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getComparisonColor(
                            comparison.nextjs
                          )}`}
                        >
                          {comparison.nextjs}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getComparisonColor(
                            comparison.angular
                          )}`}
                        >
                          {comparison.angular}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getComparisonColor(
                            comparison.vue
                          )}`}
                        >
                          {comparison.vue}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
              Practical examples from popular frameworks
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
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
                      {example.framework}
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
              Official Resources
            </h2>
            <p className="text-lg text-gray-600">
              Learn from the official documentation and tutorials
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
                    {resource.framework}
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
            Ready to Build with Modern Frameworks?
          </h2>
          <p className="text-lg text-purple-100 mb-8">
            Let our expert team help you choose and implement the perfect
            framework for your project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-purple-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Start Your Project
            </Link>
            <Link
              href="/services/react-development"
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
