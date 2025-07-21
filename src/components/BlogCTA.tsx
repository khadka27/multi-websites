import Link from 'next/link';

const BlogCTA = () => {
  const blogHighlights = [
    {
      id: 1,
      category: "MVP Development",
      title: "Latest insights on building successful MVPs",
      articles: "25+ articles"
    },
    {
      id: 2,
      category: "Tech Trends",
      title: "Emerging technologies and development practices",
      articles: "18+ articles"
    },
    {
      id: 3,
      category: "Startup Success",
      title: "Real stories from successful startup founders",
      articles: "12+ articles"
    }
  ];

  const recentPosts = [
    "AI in MVP Development: Benefits and Use Cases",
    "Building Crypto Wallet Apps in 2024",
    "Outsourcing MVP Development Effectively"
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center bg-white rounded-xl px-4 py-2 shadow-sm border border-stone-200 mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Updated weekly</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
                Stay ahead with our
                <span className="block text-blue-600">development insights</span>
              </h2>
              
              <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed mb-8">
                Get expert advice, technical tutorials, and startup success stories 
                delivered straight to your inbox. Join thousands of developers and founders 
                who trust our insights.
              </p>
            </div>

            {/* Blog Categories */}
            <div className="space-y-4 mb-8">
              {blogHighlights.map((highlight) => (
                <div key={highlight.id} className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-stone-100 hover:shadow-sm transition-all duration-200">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">{highlight.category}</h3>
                        <p className="text-xs text-gray-600">{highlight.title}</p>
                      </div>
                      <span className="text-xs text-blue-600 font-medium">{highlight.articles}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blogs"
                className="inline-flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-xl font-medium transition-colors duration-200 shadow-lg hover:shadow-xl group"
              >
                Explore All Articles
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <button className="inline-flex items-center justify-center bg-white hover:bg-stone-50 text-gray-700 px-8 py-3 rounded-xl font-medium transition-colors duration-200 border border-stone-200 hover:border-stone-300">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                Save for Later
              </button>
            </div>
          </div>

          {/* Right Content - Newsletter & Recent Posts */}
          <div className="space-y-8">
            {/* Newsletter Subscription */}
            <div className="bg-white rounded-2xl border border-stone-200 p-8 shadow-sm">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  Never Miss an Update
                </h3>
                <p className="text-sm text-gray-600">
                  Get weekly insights on MVP development, startup success stories, and the latest tech trends.
                </p>
              </div>

              <form className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900 placeholder-gray-500"
                  />
                </div>
                <button className="w-full bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-medium transition-colors duration-200">
                  Subscribe to Newsletter
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">
                  Join 2,500+ developers and founders. Unsubscribe at any time.
                </p>
              </div>
            </div>

            {/* Recent Posts Preview */}
            <div className="bg-white rounded-2xl border border-stone-200 p-8 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-6">Recent Articles</h3>
              <div className="space-y-4">
                {recentPosts.map((post, index) => (
                  <div key={index} className="flex items-start space-x-3 group cursor-pointer">
                    <div className="flex-shrink-0 w-8 h-8 bg-stone-100 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-200">
                      <span className="text-xs font-medium text-gray-600 group-hover:text-blue-600">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-200 leading-relaxed">
                        {post}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-stone-100">
                <Link
                  href="/blogs"
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200"
                >
                  View all articles
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 pt-12 border-t border-stone-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-light text-gray-900 mb-1">50+</div>
              <div className="text-sm text-gray-600">Articles Published</div>
            </div>
            <div>
              <div className="text-2xl font-light text-gray-900 mb-1">2.5K+</div>
              <div className="text-sm text-gray-600">Newsletter Subscribers</div>
            </div>
            <div>
              <div className="text-2xl font-light text-gray-900 mb-1">15K+</div>
              <div className="text-sm text-gray-600">Monthly Readers</div>
            </div>
            <div>
              <div className="text-2xl font-light text-gray-900 mb-1">Weekly</div>
              <div className="text-sm text-gray-600">Fresh Content</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCTA; 