const WebDevelopmentPromise = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Promise */}
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">
                What we promise
              </h2>
              <h3 className="text-2xl sm:text-3xl font-medium text-gray-900 leading-relaxed">
                Modern web solutions that drive results
              </h3>
            </div>
          </div>

          {/* Right Side - Testimonial */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            {/* Top Text */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Working with MVP Development means faster load times, better user experience, and increased conversions. Better web presence, really!
            </p>

            {/* Quote */}
            <div className="mb-8">
              <div className="text-blue-300 text-4xl mb-4">"</div>
              <blockquote className="text-xl text-gray-700 leading-relaxed">
                Thanks to their expertise, <span className="font-semibold text-gray-900">our website is no longer slow</span>—it's faster, more efficient, and easier to manage than ever.
              </blockquote>
            </div>

            {/* Author */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-semibold text-lg">JS</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">John Smith</div>
                <div className="text-gray-600 text-sm">CEO @ TechStartup</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopmentPromise; 