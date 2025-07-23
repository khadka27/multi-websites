import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Recommended Reading - wp development",
  description:
    "Curated collection of books, articles, blogs, and learning resources for web developers, covering programming, design, career development, and industry trends.",
  keywords:
    "programming books, web development resources, coding articles, developer blogs, learning materials, tech books",
  openGraph: {
    title: "Recommended Reading - wp development",
    description:
      "Essential reading materials for developers to enhance their skills and knowledge.",
    type: "website",
  },
};

export default function RecommendedReadingPage() {
  const books = [
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      category: "Programming",
      level: "Intermediate",
      description:
        "A handbook of agile software craftsmanship with practical advice on writing clean, maintainable code.",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      rating: 4.8,
      pages: 464,
      keyTopics: ["Code Quality", "Refactoring", "Testing", "Best Practices"],
      whyRecommended:
        "Essential reading for any developer who wants to write professional, maintainable code.",
    },
    {
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      category: "JavaScript",
      level: "Intermediate",
      description:
        "Focuses on the good ideas that make JavaScript an outstanding object-oriented programming language.",
      image:
        "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=300&h=400&fit=crop",
      rating: 4.6,
      pages: 176,
      keyTopics: ["JavaScript Fundamentals", "Functions", "Objects", "Arrays"],
      whyRecommended:
        "Despite being older, it provides deep insights into JavaScript's core concepts.",
    },
    {
      title: "You Don't Know JS (series)",
      author: "Kyle Simpson",
      category: "JavaScript",
      level: "Beginner to Advanced",
      description:
        "Deep dive into the core mechanisms of the JavaScript language.",
      image:
        "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?w=300&h=400&fit=crop",
      rating: 4.9,
      pages: "6 volumes",
      keyTopics: [
        "Scope & Closures",
        "this & Object Prototypes",
        "Types & Grammar",
        "Async & Performance",
      ],
      whyRecommended:
        "Comprehensive understanding of JavaScript from basic to advanced concepts.",
    },
    {
      title: "Design Patterns",
      author: "Gang of Four",
      category: "Software Architecture",
      level: "Advanced",
      description:
        "Elements of reusable object-oriented software design patterns.",
      image:
        "https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?w=300&h=400&fit=crop",
      rating: 4.7,
      pages: 395,
      keyTopics: [
        "Creational Patterns",
        "Structural Patterns",
        "Behavioral Patterns",
        "OOP",
      ],
      whyRecommended:
        "Fundamental patterns that every software developer should know.",
    },
    {
      title: "The Pragmatic Programmer",
      author: "David Thomas & Andrew Hunt",
      category: "Career Development",
      level: "All Levels",
      description:
        "Practical advice on software development and career growth.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      rating: 4.8,
      pages: 352,
      keyTopics: [
        "Problem Solving",
        "Communication",
        "Team Work",
        "Continuous Learning",
      ],
      whyRecommended:
        "Timeless advice that applies to all aspects of software development.",
    },
    {
      title: "Don't Make Me Think",
      author: "Steve Krug",
      category: "UX Design",
      level: "Beginner",
      description:
        "A common sense approach to web usability and user experience design.",
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&h=400&fit=crop",
      rating: 4.6,
      pages: 216,
      keyTopics: ["Usability", "User Experience", "Web Design", "Testing"],
      whyRecommended:
        "Essential for developers who want to create user-friendly interfaces.",
    },
  ];

  const articles = [
    {
      title: "The State of JavaScript 2023",
      author: "State of JS Team",
      source: "StateofJS.com",
      category: "Industry Trends",
      readTime: "15 min",
      url: "https://stateofjs.com",
      description:
        "Annual survey results showing the latest trends in JavaScript ecosystem.",
      keyInsights: [
        "Framework popularity",
        "Tool adoption",
        "Developer satisfaction",
        "Future trends",
      ],
    },
    {
      title: "A Complete Guide to Flexbox",
      author: "Chris Coyier",
      source: "CSS-Tricks",
      category: "CSS",
      readTime: "20 min",
      url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
      description:
        "Comprehensive guide to CSS Flexbox layout with examples and use cases.",
      keyInsights: [
        "Flex container properties",
        "Flex item properties",
        "Common patterns",
        "Browser support",
      ],
    },
    {
      title: "React Hooks: The Complete Guide",
      author: "Dan Abramov",
      source: "Overreacted.io",
      category: "React",
      readTime: "25 min",
      url: "https://overreacted.io",
      description:
        "Deep dive into React Hooks with practical examples and best practices.",
      keyInsights: [
        "Hook rules",
        "Custom hooks",
        "Performance optimization",
        "Common pitfalls",
      ],
    },
    {
      title: "Web Performance Optimization",
      author: "Addy Osmani",
      source: "Web.dev",
      category: "Performance",
      readTime: "30 min",
      url: "https://web.dev",
      description:
        "Strategies for optimizing web performance and user experience.",
      keyInsights: [
        "Core Web Vitals",
        "Image optimization",
        "Code splitting",
        "Caching strategies",
      ],
    },
  ];

  const blogs = [
    {
      name: "CSS-Tricks",
      url: "https://css-tricks.com",
      description: "Tips, tricks, and techniques on using CSS",
      author: "Chris Coyier & Team",
      category: "CSS & Frontend",
      icon: "🎨",
      updateFrequency: "Daily",
      whyFollow: "Practical CSS solutions and frontend development insights.",
    },
    {
      name: "Overreacted",
      url: "https://overreacted.io",
      description: "Personal blog of Dan Abramov about React and JavaScript",
      author: "Dan Abramov",
      category: "React & JavaScript",
      icon: "⚛️",
      updateFrequency: "Weekly",
      whyFollow: "Deep insights from a React core team member.",
    },
    {
      name: "Smashing Magazine",
      url: "https://smashingmagazine.com",
      description: "Professional web design and development magazine",
      author: "Various Authors",
      category: "Web Development",
      icon: "📰",
      updateFrequency: "Daily",
      whyFollow: "High-quality articles on design and development.",
    },
    {
      name: "A List Apart",
      url: "https://alistapart.com",
      description: "For people who make websites",
      author: "Various Authors",
      category: "Web Standards",
      icon: "📝",
      updateFrequency: "Bi-weekly",
      whyFollow: "Thoughtful articles on web standards and best practices.",
    },
    {
      name: "Web.dev",
      url: "https://web.dev",
      description: "Google's resource for modern web development",
      author: "Google Team",
      category: "Performance & Best Practices",
      icon: "🚀",
      updateFrequency: "Weekly",
      whyFollow:
        "Authoritative guidance on web performance and modern practices.",
    },
    {
      name: "Dev.to",
      url: "https://dev.to",
      description: "Community of software developers",
      author: "Developer Community",
      category: "General Programming",
      icon: "👥",
      updateFrequency: "Continuous",
      whyFollow: "Diverse perspectives from the developer community.",
    },
  ];

  const newsletters = [
    {
      name: "JavaScript Weekly",
      description:
        "A newsletter of JavaScript articles, news and cool projects",
      frequency: "Weekly",
      subscribers: "175k+",
      topics: ["JavaScript", "Node.js", "Frameworks", "Tools"],
      icon: "🟨",
    },
    {
      name: "React Status",
      description:
        "A weekly roundup of the latest React and React Native links",
      frequency: "Weekly",
      subscribers: "85k+",
      topics: ["React", "React Native", "Tools", "Tutorials"],
      icon: "⚛️",
    },
    {
      name: "CSS Weekly",
      description:
        "Weekly e-mail roundup of CSS articles, tutorials, tools and experiments",
      frequency: "Weekly",
      subscribers: "45k+",
      topics: ["CSS", "Sass", "Animation", "Layout"],
      icon: "🎨",
    },
    {
      name: "Frontend Focus",
      description:
        "A once-weekly roundup of the best front-end news, articles and tutorials",
      frequency: "Weekly",
      subscribers: "120k+",
      topics: ["Frontend", "HTML", "CSS", "JavaScript"],
      icon: "💻",
    },
  ];

  const podcasts = [
    {
      name: "Syntax",
      hosts: "Wes Bos & Scott Tolinski",
      description: "Tasty treats podcast for web developers",
      category: "Web Development",
      episodes: "600+",
      icon: "🎙️",
    },
    {
      name: "The Changelog",
      hosts: "Adam Stacoviak & Jerod Santo",
      description:
        "Conversations with the hackers, leaders, and innovators of the software world",
      category: "Software Development",
      episodes: "500+",
      icon: "📻",
    },
    {
      name: "Shop Talk Show",
      hosts: "Dave Rupert & Chris Coyier",
      description: "An internet radio show about the internet",
      category: "Frontend Development",
      episodes: "550+",
      icon: "🛍️",
    },
    {
      name: "React Podcast",
      hosts: "Michael Chan",
      description: "Conversations about React with your favorite developers",
      category: "React",
      episodes: "200+",
      icon: "⚛️",
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Programming: "bg-blue-100 text-blue-800",
      JavaScript: "bg-yellow-100 text-yellow-800",
      "Software Architecture": "bg-purple-100 text-purple-800",
      "Career Development": "bg-green-100 text-green-800",
      "UX Design": "bg-pink-100 text-pink-800",
      "Industry Trends": "bg-red-100 text-red-800",
      CSS: "bg-purple-100 text-purple-800",
      React: "bg-blue-100 text-blue-800",
      Performance: "bg-green-100 text-green-800",
      "CSS & Frontend": "bg-purple-100 text-purple-800",
      "React & JavaScript": "bg-blue-100 text-blue-800",
      "Web Development": "bg-gray-100 text-gray-800",
      "Web Standards": "bg-blue-100 text-blue-800",
      "Performance & Best Practices": "bg-green-100 text-green-800",
      "General Programming": "bg-gray-100 text-gray-800",
      "Software Development": "bg-blue-100 text-blue-800",
      "Frontend Development": "bg-purple-100 text-purple-800",
    };
    return (
      colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
    );
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-purple-100 text-purple-800";
      case "Advanced":
        return "bg-red-100 text-red-800";
      case "All Levels":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getRatingStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    return "⭐".repeat(fullStars) + (hasHalfStar ? "⭐" : "");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-6">📚</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Recommended Reading
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Curated collection of books, articles, blogs, and resources to
              enhance your development journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#books"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Browse Books
              </Link>
              <Link
                href="#articles"
                className="bg-white hover:bg-gray-50 text-purple-600 px-8 py-3 rounded-lg font-medium border border-purple-600 transition-colors duration-200"
              >
                Read Articles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Books */}
      <section className="py-16" id="books">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Essential Books for Developers
            </h2>
            <p className="text-lg text-gray-600">
              Must-read books that will transform your programming skills
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(
                        book.level
                      )}`}
                    >
                      {book.level}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                        book.category
                      )}`}
                    >
                      {book.category}
                    </span>
                    <span className="text-yellow-500 text-sm">
                      {getRatingStars(book.rating)} {book.rating}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {book.title}
                  </h3>
                  <p className="text-purple-600 font-medium mb-2">
                    {book.author}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {book.description}
                  </p>
                  <div className="text-xs text-gray-500 mb-3">
                    {book.pages} pages
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Key Topics:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {book.keyTopics.map((topic, topicIndex) => (
                        <span
                          key={topicIndex}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg mb-4">
                    <p className="text-gray-700 text-sm italic">
                      "{book.whyRecommended}"
                    </p>
                  </div>
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-medium transition-colors duration-200">
                    Find Book
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Must-Read Articles */}
      <section className="py-16 bg-gray-50" id="articles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Must-Read Articles
            </h2>
            <p className="text-lg text-gray-600">
              In-depth articles that provide valuable insights and knowledge
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                      article.category
                    )}`}
                  >
                    {article.category}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {article.readTime} read
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {article.title}
                </h3>
                <div className="text-sm text-purple-600 mb-2">
                  {article.author} • {article.source}
                </div>
                <p className="text-gray-600 mb-4">{article.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    Key Insights:
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {article.keyInsights.map((insight, insightIndex) => (
                      <li key={insightIndex} className="flex items-center">
                        <span className="w-1 h-1 bg-purple-600 rounded-full mr-2"></span>
                        {insight}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                >
                  Read Article
                  <span className="ml-2">↗</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Blogs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Developer Blogs to Follow
            </h2>
            <p className="text-lg text-gray-600">
              Stay updated with the latest trends and insights from industry
              experts
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{blog.icon}</span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                      blog.category
                    )}`}
                  >
                    {blog.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {blog.name}
                </h3>
                <p className="text-purple-600 font-medium mb-2 text-sm">
                  {blog.author}
                </p>
                <p className="text-gray-600 mb-3 text-sm">{blog.description}</p>
                <div className="text-xs text-gray-500 mb-4">
                  Updates: {blog.updateFrequency}
                </div>
                <div className="bg-blue-50 p-3 rounded-lg mb-4">
                  <p className="text-blue-800 text-sm">
                    <strong>Why follow:</strong> {blog.whyFollow}
                  </p>
                </div>
                <a
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 inline-block text-center"
                >
                  Visit Blog
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletters & Podcasts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Newsletters */}
            <div>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Developer Newsletters
                </h2>
                <p className="text-gray-600">
                  Weekly updates delivered to your inbox
                </p>
              </div>
              <div className="space-y-6">
                {newsletters.map((newsletter, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg border border-gray-200 p-6"
                  >
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">{newsletter.icon}</span>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {newsletter.name}
                        </h3>
                        <div className="text-sm text-gray-500">
                          {newsletter.frequency} • {newsletter.subscribers}{" "}
                          subscribers
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-3 text-sm">
                      {newsletter.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {newsletter.topics.map((topic, topicIndex) => (
                        <span
                          key={topicIndex}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Podcasts */}
            <div>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Developer Podcasts
                </h2>
                <p className="text-gray-600">
                  Listen while coding or commuting
                </p>
              </div>
              <div className="space-y-6">
                {podcasts.map((podcast, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg border border-gray-200 p-6"
                  >
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">{podcast.icon}</span>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {podcast.name}
                        </h3>
                        <div className="text-sm text-gray-500">
                          {podcast.hosts} • {podcast.episodes} episodes
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-3 text-sm">
                      {podcast.description}
                    </p>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                      {podcast.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Continue Your Learning Journey
          </h2>
          <p className="text-lg text-purple-100 mb-8">
            Ready to apply your knowledge? Let's build something amazing
            together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-purple-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Start Your Project
            </Link>
            <Link
              href="/resources/tutorials"
              className="bg-transparent hover:bg-white/10 text-white px-8 py-3 rounded-lg font-medium border border-white transition-colors duration-200"
            >
              Browse Tutorials
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
