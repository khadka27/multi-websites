import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Expert React.js Development Services | MVP Development',
  description: 'Professional React.js development services for scalable, high-performance web applications. Custom React solutions with modern hooks, state management, and optimization.',
  keywords: 'React development, React.js, frontend development, JavaScript, component-based development, SPA development',
  openGraph: {
    title: 'Expert React.js Development Services | MVP Development',
    description: 'Professional React.js development services for scalable, high-performance web applications.',
    type: 'website',
  }
};

export default function ReactDevelopmentPage() {
  const benefits = [
    {
      icon: "⚡",
      title: "Lightning Fast Performance",
      description: "Virtual DOM and optimized rendering for superior application speed and user experience.",
      metric: "50% faster"
    },
    {
      icon: "🔧",
      title: "Component Reusability", 
      description: "Modular architecture reduces development time and ensures consistent UI across your application.",
      metric: "60% less code"
    },
    {
      icon: "📈",
      title: "SEO Optimized",
      description: "Server-side rendering and static generation for improved search engine visibility.",
      metric: "40% better SEO"
    },
    {
      icon: "🎯",
      title: "Developer Experience",
      description: "Rich ecosystem, extensive tooling, and active community support for rapid development.",
      metric: "3x faster builds"
    }
  ];

  const services = [
    {
      title: "Custom React Applications",
      description: "Build scalable, maintainable React applications tailored to your business needs",
      features: ["Component Architecture", "State Management", "API Integration", "Performance Optimization"]
    },
    {
      title: "React Migration Services", 
      description: "Seamlessly migrate your existing applications to React with minimal downtime",
      features: ["Legacy Code Analysis", "Migration Strategy", "Data Preservation", "Testing & Validation"]
    },
    {
      title: "React Native Development",
      description: "Cross-platform mobile applications using React Native for iOS and Android",
      features: ["Native Performance", "Shared Codebase", "Platform Integration", "App Store Deployment"]
    },
    {
      title: "React Consulting",
      description: "Expert guidance on React best practices, architecture decisions, and optimization",
      features: ["Code Review", "Architecture Planning", "Performance Audit", "Team Training"]
    }
  ];

  const techStack = [
    { name: "React 18", description: "Latest React with Concurrent Features" },
    { name: "TypeScript", description: "Type-safe development experience" },
    { name: "Next.js", description: "Full-stack React framework" },
    { name: "Redux Toolkit", description: "Predictable state management" },
    { name: "React Query", description: "Powerful data synchronization" },
    { name: "Testing Library", description: "Comprehensive testing suite" }
  ];

  const comparison = [
    {
      feature: "Development Speed",
      react: "Fast with reusable components",
      traditional: "Slower, repetitive coding"
    },
    {
      feature: "Performance", 
      react: "Virtual DOM optimization",
      traditional: "Direct DOM manipulation"
    },
    {
      feature: "Scalability",
      react: "Component-based architecture",
      traditional: "Monolithic structure"
    },
    {
      feature: "Maintenance",
      react: "Modular, easy to update",
      traditional: "Complex, tightly coupled"
    },
    {
      feature: "Team Collaboration",
      react: "Clear component boundaries",
      traditional: "Potential conflicts"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Split Layout */}
      <section className="pt-20 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">⚛️</span>
                </div>
                <div>
                  <span className="block text-sm font-medium text-blue-600 uppercase tracking-wide">React.js Development</span>
                  <span className="block text-xs text-gray-500">Modern Frontend Solutions</span>
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
                Build Powerful
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  React Applications
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                Create dynamic, high-performance web applications with React.js. Our expert developers leverage the latest React features to build scalable, maintainable solutions that deliver exceptional user experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link 
                  href="/contact"
                  className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Start Your React Project
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center bg-white hover:bg-stone-50 text-gray-700 px-8 py-4 rounded-xl font-medium transition-all duration-300 border border-stone-200 hover:border-stone-300 shadow-sm hover:shadow-md"
                >
                  Explore Services
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">100+</div>
                  <div className="text-sm text-gray-600">React Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">99%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
                {/* React Component Mockup */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                  <div className="bg-gray-800 px-4 py-3 flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="ml-4 text-gray-400 text-sm font-mono">Component.jsx</div>
                  </div>
                  <div className="p-6 font-mono text-sm">
                    <div className="text-purple-600">import React from <span className="text-green-600">&apos;react&apos;</span>;</div>
                    <div className="text-blue-600 mt-2">function <span className="text-yellow-600">Component</span>() {`{`}</div>
                    <div className="text-gray-600 ml-4 mt-1">return (</div>
                    <div className="text-red-600 ml-8">&lt;div className=<span className="text-green-600">&quot;modern-ui&quot;</span>&gt;</div>
                    <div className="text-red-600 ml-12">&lt;h1&gt;React Magic&lt;/h1&gt;</div>
                    <div className="text-red-600 ml-8">&lt;/div&gt;</div>
                    <div className="text-gray-600 ml-4">);</div>
                    <div className="text-blue-600">{`}`}</div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-200 animate-float">
                  <div className="text-sm font-medium text-gray-700">⚡ Virtual DOM</div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-200 animate-float delay-1000">
                  <div className="text-sm font-medium text-gray-700">🔧 Component Based</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Why Choose React for Your Project?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
              React.js offers unmatched advantages for modern web development, from performance to developer experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-lg text-sm font-medium">
                    {benefit.metric}
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Our React Development Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Comprehensive React solutions tailored to your specific business requirements and technical needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-stone-50 to-white rounded-2xl p-8 border border-stone-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-medium text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Our React Technology Stack
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              We use the most advanced and reliable React ecosystem tools to build exceptional applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, index) => (
              <div key={index} className="group bg-white rounded-xl p-6 border border-stone-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {tech.name}
                  </h3>
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                </div>
                <p className="text-gray-600 text-sm">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              React vs Traditional Development
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              See how React development compares to traditional approaches across key metrics.
            </p>
          </div>

          <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200">
            <div className="grid grid-cols-3 gap-0">
              <div className="bg-white p-6 border-r border-stone-200">
                <h3 className="text-lg font-medium text-gray-900">Feature</h3>
              </div>
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white border-r border-blue-500">
                <h3 className="text-lg font-medium">React Development</h3>
              </div>
              <div className="bg-gray-100 p-6">
                <h3 className="text-lg font-medium text-gray-900">Traditional Approach</h3>
              </div>
            </div>
            
            {comparison.map((item, index) => (
              <div key={index} className="grid grid-cols-3 gap-0 border-t border-stone-200">
                <div className="bg-white p-6 border-r border-stone-200">
                  <div className="font-medium text-gray-900">{item.feature}</div>
                </div>
                <div className="bg-blue-50 p-6 border-r border-blue-100">
                  <div className="text-blue-800 flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item.react}
                  </div>
                </div>
                <div className="bg-gray-50 p-6">
                  <div className="text-gray-600 flex items-center">
                    <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {item.traditional}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready to Build with React?
          </h2>
          <p className="text-xl text-blue-100 mb-8 font-light max-w-2xl mx-auto">
            Transform your web presence with powerful React applications. Let&apos;s discuss your project requirements and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white hover:bg-blue-50 text-blue-600 px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your React Project
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 border border-white/20 hover:border-white/40"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 