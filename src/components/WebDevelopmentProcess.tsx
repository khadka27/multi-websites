const WebDevelopmentProcess = () => {
  const processSteps = [
    {
      id: 1,
      title: "Post Your Requirement",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Discuss Project Feasibility",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Choose Engagement Model",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Dedicated Team",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Support & Maintenance",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
            The Process of Web Development Followed By Us
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Our leading web development company in the USA aims to create apps
            with rich features, excellent usability, scalability, and universal
            compatibility in order to drive more sales.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative overflow-hidden">
          {/* Desktop Layout - Large screens */}
          <div className="hidden xl:block">
            <div className="flex items-center justify-between space-x-4">
              {processSteps.map((step, index) => (
                <div key={step.id} className="flex items-center flex-1">
                  {/* Step Card */}
                  <div className="group relative bg-white rounded-2xl border border-stone-200 p-6 text-center hover:shadow-lg transition-all duration-300 w-full max-w-xs mx-auto">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-50 border border-blue-100 rounded-2xl mb-4 group-hover:scale-105 transition-transform duration-300">
                      <div className="text-blue-600">{step.icon}</div>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-medium text-gray-900 leading-tight">
                      {step.title}
                    </h3>

                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-medium">
                      {step.id}
                    </div>

                    {/* Subtle Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-transparent rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Connecting Line */}
                  {index < processSteps.length - 1 && (
                    <div className="flex-1 px-2">
                      <div className="relative">
                        <div className="h-px bg-gray-200 w-full"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-600 rounded-full"></div>
                        <div className="absolute top-0 w-full h-px border-t border-dashed border-blue-300"></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Tablet Layout - Medium screens */}
          <div className="hidden md:block xl:hidden">
            <div className="grid grid-cols-1 gap-8">
              {/* First row - 3 cards */}
              <div className="flex items-center justify-center space-x-6">
                {processSteps.slice(0, 3).map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div className="group relative bg-white rounded-2xl border border-stone-200 p-6 text-center hover:shadow-lg transition-all duration-300 w-48">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300">
                        <div className="text-blue-600 scale-75">
                          {step.icon}
                        </div>
                      </div>
                      <h3 className="text-sm font-medium text-gray-900 leading-tight">
                        {step.title}
                      </h3>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-medium">
                        {step.id}
                      </div>
                    </div>
                    {index < 2 && (
                      <div className="flex-1 mx-3">
                        <div className="h-px bg-gray-200 w-full relative">
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Arrow down */}
              <div className="flex justify-center">
                <div className="w-px h-12 bg-gray-200 relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
              </div>

              {/* Second row - 2 cards */}
              <div className="flex items-center justify-center space-x-8">
                {processSteps.slice(3, 5).map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div className="group relative bg-white rounded-2xl border border-stone-200 p-6 text-center hover:shadow-lg transition-all duration-300 w-48">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300">
                        <div className="text-blue-600 scale-75">
                          {step.icon}
                        </div>
                      </div>
                      <h3 className="text-sm font-medium text-gray-900 leading-tight">
                        {step.title}
                      </h3>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-medium">
                        {step.id}
                      </div>
                    </div>
                    {index < 1 && (
                      <div className="flex-1 mx-4">
                        <div className="h-px bg-gray-200 w-full relative">
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Layout - Small screens */}
          <div className="md:hidden space-y-4">
            {processSteps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Step Card */}
                <div className="bg-white rounded-xl border border-stone-200 p-4 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 border border-blue-100 rounded-lg flex items-center justify-center">
                      <div className="text-blue-600 scale-75">{step.icon}</div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium text-gray-900 truncate pr-2">
                          {step.title}
                        </h3>
                        <div className="flex-shrink-0 w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-medium">
                          {step.id}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connecting Line for Mobile */}
                {index < processSteps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <div className="w-px h-6 bg-gray-200 relative">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-white rounded-2xl border border-stone-200 px-8 py-4 shadow-sm">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-gray-900">
                  Ready to start your project?
                </p>
                <p className="text-xs text-gray-600">
                  Let's discuss your requirements today
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopmentProcess;
