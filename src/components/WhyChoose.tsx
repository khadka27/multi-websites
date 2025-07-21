const WhyChoose = () => {
  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Faster Time to Market",
      description: "Launch your product quickly to gather valuable user feedback and validate your idea early on.",
      color: "bg-blue-100 text-blue-600",
      borderColor: "border-blue-200"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
        </svg>
      ),
      title: "Cost-Effective Development",
      description: "Focus on essential features only and ensure an affordable solution within the set budget.",
      color: "bg-amber-100 text-amber-600",
      borderColor: "border-amber-200"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Risk Mitigation",
      description: "Identify potential challenges early and make changes, saving time and avoiding expensive fixes later.",
      color: "bg-purple-100 text-purple-600",
      borderColor: "border-purple-200"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      title: "User-Centric Improvements",
      description: "Get real user feedback to improve your product before committing to full-scale development.",
      color: "bg-pink-100 text-pink-600",
      borderColor: "border-pink-200"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
            Why Choose MVP Development Services?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Design, develop, and launch your product in no time with minimal risk and a fixed budget.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group hover:translate-y-[-4px] transition-all duration-300"
            >
              <div className={`border ${benefit.borderColor} rounded-2xl p-8 h-full bg-gradient-to-br from-white to-gray-50/50 hover:shadow-lg transition-all duration-300`}>
                {/* Icon */}
                <div className="flex items-center mb-6">
                  <div className={`${benefit.color} p-3 rounded-xl`}>
                    {benefit.icon}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed text-base sm:text-lg">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose; 