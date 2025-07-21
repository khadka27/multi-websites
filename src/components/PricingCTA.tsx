import Link from 'next/link';

const PricingCTA = () => {
  const plans = [
    {
      name: "Starter Package",
      price: "$2,999",
      period: "one-time",
      description: "Perfect for small teams and startups.",
      features: [
        "MVP Development (2-3 weeks)",
        "Responsive Web Design",
        "Basic Backend Setup",
        "Database Integration",
        "Code Documentation",
        "1 Month Support"
      ],
      popular: false
    },
    {
      name: "Premium Package", 
      price: "$7,999",
      period: "one-time",
      description: "Most popular plan for growing businesses.",
      features: [
        "Full MVP Development (4-6 weeks)",
        "Advanced Web & Mobile App",
        "Complete Backend Solution",
        "API Development",
        "Testing & Quality Assurance",
        "3 Months Premium Support",
        "Deployment & DevOps Setup"
      ],
      popular: true
    }
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50 overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-10 left-10 opacity-20">
        <div className="flex flex-wrap gap-2 w-32">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="w-2 h-2 bg-gray-400 rounded-full"></div>
          ))}
        </div>
      </div>
      <div className="absolute top-10 right-10 opacity-20">
        <div className="flex flex-wrap gap-2 w-32">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="w-2 h-2 bg-gray-400 rounded-full"></div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-10 left-1/4 opacity-20">
        <div className="flex flex-wrap gap-2 w-24">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="w-2 h-2 bg-gray-400 rounded-full"></div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-10 right-1/4 opacity-20">
        <div className="flex flex-wrap gap-2 w-24">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="w-2 h-2 bg-gray-400 rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
            Start building by choosing the plan that suits you best.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            Transform your idea into a market-ready product with our comprehensive MVP development packages tailored for startups and growing businesses.
          </p>
          
          {/* Central CTA Button */}
          <Link
            href="/contact"
            className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-2xl text-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl group"
          >
            Get Started
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative ${index === 0 ? 'lg:-rotate-3' : 'lg:rotate-3'} hover:rotate-0 transition-transform duration-500`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium">
                    ❤️ Most Popular
                  </div>
                </div>
              )}
              
              <div className="bg-white rounded-3xl shadow-xl border border-stone-100 p-8 h-full relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                {/* Card Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 text-sm ml-2">{plan.period}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="mb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 bg-stone-100 rounded-full flex items-center justify-center mt-0.5 mr-3">
                          <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                  <Link
                    href="/contact"
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white text-center py-4 rounded-2xl font-medium transition-all duration-200 block group"
                  >
                    Start Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-sm">
            All packages include free consultation and project planning session
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA; 