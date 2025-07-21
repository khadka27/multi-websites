const MobileAppPromise = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Promise */}
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-6">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">
                Mobile excellence
              </h2>
              <h3 className="text-2xl sm:text-3xl font-medium text-gray-900 leading-relaxed">
                Native apps that users love
              </h3>
            </div>
          </div>

          {/* Right Side - Testimonial */}
          <div className="bg-gray-50 rounded-3xl p-8 shadow-sm border border-gray-100">
            {/* Top Text */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Working with MVP Development means intuitive mobile experiences,
              seamless performance, and engaged users. Better mobile presence,
              really!
            </p>

            {/* Quote */}
            <div className="mb-8">
              <div className="text-purple-300 text-4xl mb-4">"</div>
              <blockquote className="text-xl text-gray-700 leading-relaxed">
                Thanks to their mobile expertise,{" "}
                <span className="font-semibold text-gray-900">
                  our app engagement increased by 300%
                </span>
                —it's smoother, more intuitive, and our users can't stop using
                it.
              </blockquote>
            </div>

            {/* Author */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-semibold text-lg">SR</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">
                  Sarah Rodriguez
                </div>
                <div className="text-gray-600 text-sm">
                  Product Manager @ FitLife
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppPromise;
