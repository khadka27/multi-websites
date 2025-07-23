import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Main Heading */}
        <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-gray-900 mb-4 leading-tight tracking-tight">
          MVP Development
        </h1>

        {/* Colorful Subheading */}
        <h2 className="hero-subtitle text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-8 leading-tight">
          <span className="bg-gradient-to-r from-orange-400 via-pink-500 via-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent font-medium">
            for Startup Founders
          </span>
        </h2>

        {/* Description */}
        <p className="hero-subtitle text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Launching a company is challenging, but your product development
          doesn't have to be.
          <br />
          Let our team help you turn your idea into reality
        </p>

        {/* Get Started Button */}
        <div className="hero-cta mb-20">
          <Link
            href="/contact"
            className="btn-primary inline-block bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 shadow-smooth hover:shadow-smooth-lg transform hover:-translate-y-1"
          >
            Get started
          </Link>
        </div>
      </div>

      {/* Learn More Section */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-10">
        <p className="text-gray-500 text-sm mb-2 font-medium">Learn more</p>
        <div className="flex justify-center">
          <svg
            className="w-6 h-6 text-gray-400 animate-bounce cursor-pointer hover:text-gray-600 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
