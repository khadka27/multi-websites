const WhyFoundersTrust = () => {
  const trustFactors = [
    {
      id: 1,
      title: "100+ Experts",
      description: "A dedicated team with extensive experience and profound knowledge in product development.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
      borderColor: "border-amber-100"
    },
    {
      id: 2,
      title: "Ecosystem",
      description: "A comprehensive suite of products and services to accelerate MVP creation and scaling.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 011 1v1z" />
        </svg>
      ),
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-100"
    },
    {
      id: 3,
      title: "100% Focus",
      description: "Dedicated to rapid launches and driving the success of our clients' MVPs.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600",
      borderColor: "border-pink-100"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
            Why Startup Founders Trust MVP Development
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Discover why startup founders choose us and how our MVP development drives success.
          </p>
        </div>

        {/* Trust Factors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {trustFactors.map((factor) => (
            <div
              key={factor.id}
              className="group relative bg-white rounded-2xl border border-stone-100 p-8 hover:shadow-lg transition-all duration-300 text-center"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 ${factor.bgColor} ${factor.borderColor} border rounded-2xl mb-6 group-hover:scale-105 transition-transform duration-300`}>
                <div className={factor.iconColor}>
                  {factor.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                {factor.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                {factor.description}
              </p>

              {/* Subtle Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-stone-50/20 to-transparent rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-stone-100 rounded-2xl px-6 py-3">
            <div className="flex items-center space-x-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full border-2 border-white flex items-center justify-center"
                  >
                    <span className="text-xs font-medium text-gray-600">
                      {String.fromCharCode(64 + i)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-gray-900">
                  Join 500+ successful founders
                </p>
                <p className="text-xs text-gray-600">
                  Who launched their MVPs with us
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFoundersTrust; 