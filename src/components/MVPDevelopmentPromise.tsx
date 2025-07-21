const MVPDevelopmentPromise = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Promise */}
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-6">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">
                MVP success
              </h2>
              <h3 className="text-2xl sm:text-3xl font-medium text-gray-900 leading-relaxed">
                From idea to market in weeks
              </h3>
            </div>
          </div>

          {/* Right Side - Testimonial */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            {/* Top Text */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Working with MVP Development means rapid prototyping, validated ideas, and faster time to market. Better product launch, really!
            </p>

            {/* Quote */}
            <div className="mb-8">
              <div className="text-green-300 text-4xl mb-4">"</div>
              <blockquote className="text-xl text-gray-700 leading-relaxed">
                Thanks to their MVP approach, <span className="font-semibold text-gray-900">we launched 6 months ahead of schedule</span>—with validated features, real user feedback, and confident investors.
              </blockquote>
            </div>

            {/* Author */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-semibold text-lg">MJ</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Michael Johnson</div>
                <div className="text-gray-600 text-sm">Founder @ InnovateCorp</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MVPDevelopmentPromise; 