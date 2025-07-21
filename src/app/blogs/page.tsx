import Image from 'next/image';
import Link from 'next/link';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Unlocking the Potential of AI in MVP Development: Benefits and Use cases",
      excerpt: "Discover how artificial intelligence is revolutionizing MVP development, from faster prototyping to intelligent user insights that drive product success.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=240&fit=crop&crop=smart",
      category: "AI Development",
      date: "March 15, 2024",
      readTime: "5 min read",
      author: "Sarah Johnson"
    },
    {
      id: 2,
      title: "Full Guide on Creating a Crypto Wallet Mobile App in 2024",
      excerpt: "A comprehensive guide to building secure, user-friendly cryptocurrency wallet applications with modern development practices and security protocols.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=240&fit=crop&crop=smart",
      category: "Blockchain",
      date: "March 12, 2024",
      readTime: "8 min read",
      author: "Michael Chen"
    },
    {
      id: 3,
      title: "10 Steps to Outsourcing MVP Development Effectively in 2024",
      excerpt: "Learn the essential strategies for successfully outsourcing your MVP development while maintaining quality, timeline, and budget control.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=240&fit=crop&crop=smart",
      category: "Business",
      date: "March 10, 2024",
      readTime: "6 min read",
      author: "Emily Rodriguez"
    },
    {
      id: 4,
      title: "Cross-MVP Development: How to Build Sustainable Software from Day One",
      excerpt: "Explore sustainable development practices that ensure your MVP can scale effectively while maintaining code quality and performance.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=240&fit=crop&crop=smart",
      category: "Development",
      date: "March 8, 2024",
      readTime: "7 min read",
      author: "David Park"
    },
    {
      id: 5,
      title: "A Complete Technical Guide to Building a REST API with Python",
      excerpt: "Master the fundamentals of building robust, scalable REST APIs using Python, Flask, and modern development best practices.",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=240&fit=crop&crop=smart",
      category: "Backend",
      date: "March 6, 2024",
      readTime: "10 min read",
      author: "Alex Thompson"
    },
    {
      id: 6,
      title: "Exchange App MVP Complete Features, Frameworks, Cost",
      excerpt: "Everything you need to know about building a cryptocurrency exchange MVP, including essential features, technology stack, and cost estimation.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=240&fit=crop&crop=smart",
      category: "Fintech",
      date: "March 4, 2024",
      readTime: "9 min read",
      author: "Lisa Wang"
    },
    {
      id: 7,
      title: "The Future of MVP Software Development",
      excerpt: "Explore emerging trends and technologies that are shaping the future of minimum viable product development and startup success.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=240&fit=crop&crop=smart",
      category: "Innovation",
      date: "March 2, 2024",
      readTime: "6 min read",
      author: "James Miller"
    },
    {
      id: 8,
      title: "Top MVP Development Challenges and How to Overcome Them",
      excerpt: "Identify common obstacles in MVP development and learn practical strategies to overcome them for successful product launches.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=240&fit=crop&crop=smart",
      category: "Strategy",
      date: "February 28, 2024",
      readTime: "7 min read",
      author: "Rachel Green"
    },
    {
      id: 9,
      title: "Selecting the Best MVP Strategy for Agile Product Development Planning",
      excerpt: "Learn how to choose the most effective MVP strategy for your agile development process and achieve faster time-to-market.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=240&fit=crop&crop=smart",
      category: "Agile",
      date: "February 26, 2024",
      readTime: "8 min read",
      author: "Tom Wilson"
    },
    {
      id: 10,
      title: "The Role of MVP Specialists in Product Creation for Industry",
      excerpt: "Understand how specialized MVP developers can accelerate your product development and increase chances of market success.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=240&fit=crop&crop=smart",
      category: "Industry",
      date: "February 24, 2024",
      readTime: "5 min read",
      author: "Anna Davis"
    },
    {
      id: 11,
      title: "How MVP Software Development Elevates Product & Service",
      excerpt: "Discover how strategic MVP development can transform your business offerings and create sustainable competitive advantages.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=240&fit=crop&crop=smart",
      category: "Business",
      date: "February 22, 2024",
      readTime: "6 min read",
      author: "Kevin Brown"
    },
    {
      id: 12,
      title: "How to Choose the Right MVP Software Development Company",
      excerpt: "Essential criteria and evaluation methods for selecting the perfect MVP development partner for your startup or business venture.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=240&fit=crop&crop=smart",
      category: "Guide",
      date: "February 20, 2024",
      readTime: "9 min read",
      author: "Sophie Martin"
    }
  ];

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  const categories = [
    "All",
    "AI Development", 
    "Blockchain", 
    "Business", 
    "Development", 
    "Backend", 
    "Fintech", 
    "Innovation", 
    "Strategy", 
    "Agile", 
    "Industry", 
    "Guide"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-neutral-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Blog
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Insights, tutorials, and expert advice on MVP development, 
              emerging technologies, and successful product launches.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                category === "All"
                  ? "bg-gray-900 text-white"
                  : "bg-stone-100 text-gray-700 hover:bg-stone-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Link href={`/blogs/${featuredPost.id}`}>
            <div className="group bg-white rounded-3xl border border-stone-100 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-full">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-xs font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-xs font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="text-gray-500 text-sm">{featuredPost.date}</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors duration-200">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-gray-600">
                          {featuredPost.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="text-sm">
                        <p className="text-gray-900 font-medium">{featuredPost.author}</p>
                        <p className="text-gray-500">{featuredPost.readTime}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-blue-600 font-medium text-sm group-hover:translate-x-1 transition-transform duration-200">
                      Read more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <Link key={post.id} href={`/blogs/${post.id}`}>
              <article className="group bg-white rounded-2xl border border-stone-100 overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-lg text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-gray-500 text-xs">{post.date}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-500 text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-gray-600">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="text-xs text-gray-700 font-medium">{post.author}</span>
                    </div>
                    <div className="flex items-center text-blue-600 text-xs font-medium group-hover:translate-x-1 transition-transform duration-200">
                      Read
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl">
            Load More Articles
          </button>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-20 bg-neutral-50 rounded-3xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
            Stay Updated with Our Latest Insights
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get weekly updates on MVP development trends, tutorials, and expert advice 
            delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900 placeholder-gray-500"
            />
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-medium transition-colors duration-200 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage; 